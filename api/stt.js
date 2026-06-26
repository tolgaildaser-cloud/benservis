// api/stt.js — Ses → metin (OpenAI Whisper). Ses SAKLANMAZ: yalnız RAM buffer → Whisper → çöp.
// Diske/temp dosyaya/DB'ye/log'a ses YAZILMAZ. Ham gövde (browser Blob) okunur.
import OpenAI, { toFile } from "openai";
import { withRateLimit } from "./_ratelimit.js";

export const config = { api: { bodyParser: false } }; // ham binary gövde

const MAX_BYTES = 4 * 1024 * 1024; // Vercel istek limiti ~4.5MB altı; 60sn opus ~<1MB

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
      file, model: "whisper-1", language: "tr",
    });
    return res.status(200).json({ text: (r.text || "").trim() });
  } catch (e) {
    console.error("[stt] hata:", e?.message || e); // SADECE hata mesajı; ses ASLA log'lanmaz
    return res.status(502).json({ error: "Ses çevrilemedi, tekrar dene" });
  }
}

// IP başına 20/saat — gerçek kullanıcıya bol, maliyet bombasını keser. Mevcut Upstash'i kullanır.
export default withRateLimit(handler, { prefix: "stt", limits: [{ tokens: 20, window: "1 h" }] });
