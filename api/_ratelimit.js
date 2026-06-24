// api/_ratelimit.js
// Paylaşılan rate-limit sarmalayıcı (IP başına, Upstash Redis sliding window).
// FAIL-OPEN: UPSTASH env yoksa veya Redis erişilemezse istek GEÇER (uygulama
// erişilebilirliği > katılık) + sunucu loguna uyarı. Env eklenince kendiliğinden aktif.
//
// Kullanım:
//   export default withRateLimit(handler, {
//     prefix: "diagnose",
//     limits: [{ tokens: 10, window: "60 s" }, { tokens: 50, window: "1 h" }],
//   });
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const hasEnv = () =>
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

// prefix bazlı önbellek (serverless instance ömrü boyunca tekrar kurma)
const cache = {};
let warnedNoEnv = false;
function buildLimiters(prefix, limits) {
  if (cache[prefix]) return cache[prefix];
  if (!hasEnv()) {
    if (!warnedNoEnv) {
      console.warn("[ratelimit] UPSTASH env yok (URL/TOKEN okunamadı) — fail-open, per-IP limit PASİF");
      warnedNoEnv = true;
    }
    return null;
  }
  const redis = Redis.fromEnv();
  cache[prefix] = limits.map(
    (l, i) =>
      new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(l.tokens, l.window),
        prefix: `rl:${prefix}:${i}`,
        analytics: false,
      })
  );
  return cache[prefix];
}

function clientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (xff) return String(xff).split(",")[0].trim();
  return req.headers["x-real-ip"] || "0.0.0.0";
}

export function withRateLimit(handler, { limits, prefix }) {
  return async (req, res) => {
    try {
      const limiters = buildLimiters(prefix, limits);
      if (limiters) {
        const ip = clientIp(req);
        for (const rl of limiters) {
          const { success, reset } = await rl.limit(ip);
          if (!success) {
            const retry = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
            res.setHeader("Retry-After", String(retry));
            return res
              .status(429)
              .json({ error: "Çok fazla istek. Lütfen biraz sonra tekrar deneyin." });
          }
        }
      }
    } catch (e) {
      // Upstash erişilemez → fail-open (isteği geçir).
      console.warn("[ratelimit] fail-open:", e?.message || e);
    }
    return handler(req, res);
  };
}
