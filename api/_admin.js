// api/_admin.js — admin anahtarı doğrulaması (tek kaynak; YK #173, 12 Eki 2026).
// `_` önekli: Vercel bunu uç olarak yayınlamaz.
//
// Mekanizma /admin ve api/admin/* ile aynı: `Authorization: Bearer $ADMIN_TOKEN` (ya da ADMIN_PASSWORD).
// Sır yalnız env'de; bu dosya değerini hiçbir yere yazmaz/loglamaz. Karşılaştırma sabit zamanlı.
import crypto from "node:crypto";

const esit = (a, b) => {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};

export function adminYetkili(req, env = process.env) {
  const auth = String(req?.headers?.["authorization"] || "");
  if (!auth.startsWith("Bearer ")) return false;
  const verilen = auth.slice(7);
  if (!verilen) return false;
  return [env.ADMIN_TOKEN, env.ADMIN_PASSWORD].some((s) => !!s && esit(verilen, s));
}
