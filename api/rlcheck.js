// GEÇİCİ tanı ucu — Upstash env fonksiyona ulaşıyor mu + bağlantı çalışıyor mu?
// Sır DÖNDÜRMEZ (token asla; url yalnız ilk birkaç harf). Tanı bitince SİLİNECEK.
// Erişim: /api/rlcheck?probe=benservis2026
export default async function handler(req, res) {
  if ((req.query?.probe || "") !== "benservis2026") {
    return res.status(404).json({ error: "not found" });
  }
  const url = process.env.UPSTASH_REDIS_REST_URL || "";
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || "";
  let ping = "n/a";
  let err = null;
  try {
    if (url && token) {
      const { Redis } = await import("@upstash/redis");
      const redis = new Redis({ url, token });
      ping = await redis.ping(); // "PONG" = bağlantı tamam
    }
  } catch (e) {
    err = String(e?.message || e).split(url).join("<url>").split(token).join("<token>").slice(0, 140);
  }
  return res.status(200).json({
    urlSet: !!url,
    urlIsHttps: url.startsWith("https://"),
    urlHostHint: url ? url.replace(/^https?:\/\//, "").slice(0, 6) + "…" : "",
    tokenSet: !!token,
    tokenLen: token.length,
    ping,
    err,
  });
}
