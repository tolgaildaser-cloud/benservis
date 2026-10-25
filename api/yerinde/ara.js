// api/yerinde/ara.js — YK #183 PR-4 · Verimor tıkla-ara (0850 hattı)
// GET  /api/yerinde/ara               → { hazir, deneme, varsayilanDahili }  (paneldeki hat kutusu için)
// POST /api/yerinde/ara  { id, dahili? } → önce temsilcinin dahilisi çalar, açınca müşteri 0850 hattından aranır.
// Header: Authorization: Bearer <supabase-jwt> · yalnız koordinatör.
// Env (değerleri Tolga girer, FE okumaz): VERIMOR_BS_KEY, VERIMOR_CALLER_ID (90850…), VERIMOR_DEFAULT_EXTENSION,
// VERIMOR_DRY_RUN=1 → Verimor çağrılmaz, log'a "arama:deneme" yazılır.
// Müşteri telefonu istekte GELMEZ: iş kimliğinden yerinde_musteri okunur → panelden rastgele numara aranamaz.
// ⛔ Anahtar ve telefon loglanmaz/yanıta konmaz; Verimor hata metni de istemciye aktarılmaz (yalnız durum kodu).
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { withRateLimit } from "../_ratelimit.js";
import { yerindeKimlik } from "../_yerinde.js";
import { aranabilir, verimorNo, dahiliOku, ARAMA_BEKLEME_SN } from "../../src/yerinde-cekirdek.js";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const API_URL = "https://api.bulutsantralim.com/originate";

const ayar = () => ({
  key: process.env.VERIMOR_BS_KEY || "",
  callerId: String(process.env.VERIMOR_CALLER_ID || "").replace(/\D/g, ""),
  varsayilan: dahiliOku(process.env.VERIMOR_DEFAULT_EXTENSION),
  deneme: process.env.VERIMOR_DRY_RUN === "1",
});

async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (!["GET", "POST"].includes(req.method)) return res.status(405).json({ error: "Method not allowed" });
  const kim = await yerindeKimlik(req, res);
  if (!kim) return;
  if (kim.rol !== "yerinde_koordinator") return res.status(403).json({ error: "Aramayı koordinatör başlatır" });

  const a = ayar();
  if (req.method === "GET") return res.status(200).json({ hazir: a.deneme || !!a.key, deneme: a.deneme, varsayilanDahili: a.varsayilan });

  const body = req.body || {};
  const id = String(body.id || "");
  if (!UUID.test(id)) return res.status(400).json({ error: "İş kimliği geçersiz" });
  const dahili = dahiliOku(body.dahili) || a.varsayilan;
  if (!dahili) return res.status(400).json({ error: "Dahili numaranızı soldaki “Dahilim” alanına yazın" });
  if (!a.deneme && !a.key) return res.status(503).json({ error: "0850 hattı bağlı değil (Verimor anahtarı tanımlı değil)" });

  const [{ data: is, error: iErr }, { data: m, error: mErr }] = await Promise.all([
    supabase.from("yerinde_isler").select("id, durum").eq("id", id).maybeSingle(),
    supabase.from("yerinde_musteri").select("telefon").eq("is_id", id).maybeSingle(),
  ]);
  if (iErr || mErr) return res.status(500).json({ error: "İş okunamadı" });
  if (!is) return res.status(404).json({ error: "İş bulunamadı" });
  if (!aranabilir(is.durum)) return res.status(409).json({ error: "Kapanmış işte müşteri aranmaz" });
  const hedef = verimorNo(m?.telefon);
  if (!hedef) return res.status(400).json({ error: "Kayıtlı telefon geçersiz" });

  // Çift tıklama / art arda arama engeli: aynı işte son ARAMA_BEKLEME_SN saniyede arama varsa reddet.
  const esik = new Date(Date.now() - ARAMA_BEKLEME_SN * 1000).toISOString();
  const { data: son } = await supabase.from("yerinde_is_log").select("id").eq("is_id", id).in("olay", ["arama", "arama:deneme"]).gte("at", esik).limit(1);
  if (son?.length) return res.status(429).json({ error: "Bu müşteri az önce arandı; birkaç saniye bekleyin" });

  if (!a.deneme) {
    const url = new URL(API_URL);
    url.searchParams.set("key", a.key);
    url.searchParams.set("extension", dahili);
    url.searchParams.set("destination", hedef);
    if (a.callerId) url.searchParams.set("caller_id", a.callerId);
    url.searchParams.set("timeout", "30");
    let r;
    try {
      r = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    } catch {
      console.error("[yerinde/ara] Verimor'a ulaşılamadı");
      return res.status(504).json({ error: "Verimor'a ulaşılamadı; biraz sonra tekrar deneyin" });
    }
    if (!r.ok) {
      const metin = await r.text().catch(() => "");
      console.warn(`[yerinde/ara] Verimor ${r.status}`);
      const dahiliYok = /not found|cannot find/i.test(metin);
      return res.status(502).json({ error: dahiliYok ? `Santralde ${dahili} dahilisi bulunamadı` : `Verimor aramayı başlatamadı (${r.status})` });
    }
  }

  const olay = a.deneme ? "arama:deneme" : "arama";
  const at = new Date().toISOString();
  await supabase.from("yerinde_is_log").insert({ is_id: id, olay, yazan: kim.user.id, at });
  return res.status(200).json({ deneme: a.deneme, log: { t: at, olay } });
}

// IP başına tavan (Upstash yoksa fail-open): oturumlu uç, ama anahtar sızarsa toplu arama yapılamasın.
export default withRateLimit(handler, { prefix: "yerinde-ara", limits: [{ tokens: 10, window: "60 s" }, { tokens: 200, window: "1 d" }] });
