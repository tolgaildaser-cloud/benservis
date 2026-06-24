// Sunucu tarafı proxy — Anthropic API'sine SENİN anahtarınla gider.
// Anahtar yalnız sunucuda (Vercel ortam değişkeni) durur, tarayıcıya asla düşmez.
// Koruma: IP başına rate-limit (withRateLimit) + origin kontrol + prompt boyut tavanı.
import { withRateLimit } from "./_ratelimit.js";

// Origin/Referer bizim alan adımızdan mı? (UCUZ katman — spoof edilebilir, asıl
// savunma rate-limit. Origin/Referer YOKSA engelleme: same-origin/edge'i kırma.)
const IZIN = ["benservis.com", "vercel.app", "localhost"];
function originOk(req) {
  const raw = req.headers.origin || req.headers.referer || "";
  if (!raw) return true;
  try {
    const h = new URL(raw).hostname;
    return IZIN.some((a) => h === a || h.endsWith("." + a));
  } catch {
    return true;
  }
}

const MAX_PROMPT = 12000; // gerçek teşhis prompt'u ~4k; bu 3x marj (dev prompt kötüye kullanımını kısar)

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Yalnızca POST" });
  }
  if (!originOk(req)) {
    return res.status(403).json({ error: "Geçersiz kaynak" });
  }
  // Girdi doğrulaması (sunucu yapılandırmasından ÖNCE)
  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: "prompt gerekli" });
  if (typeof prompt !== "string" || prompt.length > MAX_PROMPT) {
    return res.status(400).json({ error: "Geçersiz istek" });
  }
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY tanımlı değil (Vercel ortam değişkeni)" });
  }
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        // Varsayılan: kalite/maliyet dengesi. Daha ucuz istersen: "claude-haiku-4-5-20251001"
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        // temperature 0 → aynı girdi TUTARLI sonuç verir (cihazdan/çağrıdan bağımsız aynı fiyat).
        // Önceden varsayılan (~1.0) olduğundan her çağrı biraz farklı fiyat üretiyordu.
        temperature: 0,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await r.json();
    if (data.error) {
      return res.status(502).json({ error: data.error.message || "Anthropic API hatası" });
    }
    const text = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n");
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}

// IP başına: 10/dk + 50/saat (gerçek kullanıcıya bol, bombing'i keser; ~$1/saat tavan).
export default withRateLimit(handler, {
  prefix: "diagnose",
  limits: [
    { tokens: 10, window: "60 s" },
    { tokens: 50, window: "1 h" },
  ],
});
