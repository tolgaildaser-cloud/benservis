// api/_cron.js — cron uçlarının yetki kontrolü (Güvenlik PR-C, 6 Kas 2026). `_` önekli: uç değil.
import crypto from "node:crypto";

export function cronYetkili(baslik, sir) {
  if (typeof sir !== "string" || sir.length === 0) return false;
  const verilen = String(baslik || "").startsWith("Bearer ") ? String(baslik).slice(7).trim() : "";
  const a = Buffer.from(verilen), b = Buffer.from(sir);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
