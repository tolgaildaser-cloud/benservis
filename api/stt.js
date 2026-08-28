// api/stt.js — Ses → metin (OpenAI Whisper). Ses SAKLANMAZ: yalnız RAM buffer → Whisper → çöp.
// Diske/temp dosyaya/DB'ye/log'a ses YAZILMAZ. Ham gövde (browser Blob) okunur.
import OpenAI, { toFile } from "openai";
import { withRateLimit } from "./_ratelimit.js";

export const config = { api: { bodyParser: false } }; // ham binary gövde

const MAX_BYTES = 4 * 1024 * 1024; // Vercel istek limiti ~4.5MB altı; 60sn opus ~<1MB

// ① BİRİNCİL KAPI — Whisper'ın KENDİ karar metrikleri (response_format: "verbose_json").
// Kara liste kaçınılmaz olarak eksik kalır: Whisper her sessizlikte başka bir cümle uydurabilir
// (28 Ağu 2026 canlı bulgu: hiç konuşulmadan "Hoşçakalın" yazıldı, iki listede de yoktu).
// Kalıcı çözüm listeyi uzatmak değil, modelin segment başına verdiği güven sinyallerini okumak.
// Eşikler OpenAI'nin KENDİ belgelerinden; uydurulmuş sayı değil. İki kaynak:
//  · openai/whisper → whisper/transcribe.py imzası: no_speech_threshold=0.6,
//    logprob_threshold=-1.0, compression_ratio_threshold=2.4 (28 Ağu 2026'da doğrulandı)
//  · node_modules/openai/resources/audio/transcriptions.d.ts → TranscriptionSegment:
//    "avg_logprob ... lower than -1 ... logprobs failed", "compression_ratio ... greater
//    than 2.4 ... compression failed". (Aynı yerde no_speech_prob için yazan "higher than
//    1.0" SDK belge hatasıdır — olasılık 1'i aşamaz; geçerli değer transcribe.py'deki 0.6.)
export const NO_SPEECH_ESIK = 0.6;  // üstü: bu segmentte konuşma yok
export const LOGPROB_ESIK = -1.0;   // altı: model kendi çıktısına güvenmiyor
export const SIKISMA_ESIK = 2.4;    // üstü: kendini tekrar eden uydurma

const sayi = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);

// Tek segment kararı: true = şüpheli, false = gerçek konuşma, null = metrik yok (karar verilemez).
function segmentSupheli(s) {
  if (!s || typeof s !== "object") return null;
  const ns = sayi(s.no_speech_prob), lp = sayi(s.avg_logprob), cr = sayi(s.compression_ratio);
  if (ns === null && lp === null && cr === null) return null;
  return (ns !== null && ns > NO_SPEECH_ESIK) || (lp !== null && lp < LOGPROB_ESIK) || (cr !== null && cr > SIKISMA_ESIK);
}

// Segmentlerin TAMAMI kapılardan en az birine takılıyorsa konuşma yok → true.
// Bir segment bile sağlamsa false (gerçek belirtiyi asla kesme).
// Segment gelmemişse veya alanlar eksikse null: sessizce kabul ETME, kara listeye (②) düş.
export function konusmaYok(segments) {
  if (!Array.isArray(segments) || segments.length === 0) return null;
  let hepsiSupheli = true;
  for (const s of segments) {
    const v = segmentSupheli(s);
    if (v === null) return null;   // metriksiz segment → bu koşuda karar verilemez
    if (v === false) hepsiSupheli = false;
  }
  return hepsiSupheli;
}

// ② İKİNCİL KATMAN — bilinen halüsinasyon kalıpları (metrikler gelmezse tek savunma).
// Whisper sessiz seste eğitim verisinden altyazı-jeneriği ve veda/selam kalıbı uydurur.
const HALU_RE = /alt[ıi]?yaz|abone ol|izlediğiniz için|görüşmek üzere|kanal[ıa].*abone|thanks for watching|subtitle|amara\.org/i;
// Tam eşleşme kümesi. Karşılaştırmada boşluk da silinir ki "hoşça kalın" ↔ "hoşçakalın" ikisi de yakalansın.
const HALU_TAM = new Set([
  "teşekkürler", "teşekkür ederim", "teşekkür ederiz", "iyi seyirler", "sağ olun", "sağolun",
  // 28 Ağu 2026: veda/selam kümesi — sessiz mikrofonda en sık uydurulan kalıplar
  "hoşçakalın", "hoşça kal", "hoşça kalın", "görüşürüz", "görüşmek üzere",
  "iyi günler", "iyi akşamlar", "iyi geceler", "kendinize iyi bakın",
  "hoş geldiniz", "merhaba", "selamlar",
].map(sikistir));

// Türkçe küçültme: "İyi günler" → toLowerCase() ile "i̇yi" (birleşen nokta) çıkar ve eşleşme kaçar.
function kucult(s) { return s.toLocaleLowerCase("tr").replace(/̇/g, ""); } // U+0307 = birleşen nokta
function sikistir(s) { return kucult(s).replace(/[.!?…,]+$/g, "").replace(/\s+/g, ""); }

export function sesTemiz(raw) {
  const t = (raw || "").trim();
  const n = kucult(t).replace(/[.!?…,]+$/g, "").trim();
  if (!n || HALU_RE.test(n) || HALU_TAM.has(sikistir(t))) return "";
  return t;
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BYTES) { req.destroy(); reject(new Error("TOO_LARGE")); return; }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Yalnızca POST" });
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "OPENAI_API_KEY tanımlı değil (Vercel env)" });

  let buf;
  try {
    buf = await readRawBody(req);
  } catch (e) {
    if (e.message === "TOO_LARGE") return res.status(400).json({ error: "Ses çok uzun (max ~60sn)" });
    return res.status(400).json({ error: "Ses okunamadı" });
  }
  if (!buf || buf.length < 1000) return res.status(400).json({ error: "Ses boş/çok kısa" });

  try {
    const openai = new OpenAI({ apiKey });
    const ct = req.headers["content-type"] || "audio/webm";
    const ext = ct.includes("mp4") ? "mp4" : ct.includes("mpeg") ? "mp3" : "webm";
    const file = await toFile(buf, `ses.${ext}`, { type: ct });
    const r = await openai.audio.transcriptions.create({
      file, model: "whisper-1", language: "tr", temperature: 0,
      response_format: "verbose_json", // segments[] → no_speech_prob / avg_logprob / compression_ratio
    });
    // ① Metrik kapısı: tüm segmentler şüpheliyse hiç konuşulmamış → metni at.
    if (konusmaYok(r.segments) === true) return res.status(200).json({ text: "" });
    // ② Metrik yoksa/karar çıkmadıysa kara liste. Her iki yolda boş → istemci "Sesi anlayamadım".
    return res.status(200).json({ text: sesTemiz(r.text) });
  } catch (e) {
    console.error("[stt] hata:", e?.message || e); // SADECE hata mesajı; ses ASLA log'lanmaz
    return res.status(502).json({ error: "Ses çevrilemedi, tekrar dene" });
  }
}

// IP başına 20/saat — gerçek kullanıcıya bol, maliyet bombasını keser. Mevcut Upstash'i kullanır.
export default withRateLimit(handler, { prefix: "stt", limits: [{ tokens: 20, window: "1 h" }] });
