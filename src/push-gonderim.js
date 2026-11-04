// src/push-gonderim.js — Web Push gönderiminin saf kuralları (YK #203 PR-2, 4 Kas 2026).
// Uç (api/admin/push.js) ve testler aynı kuralı kullanır. PII yok: yalnız başlık, metin, iç yol.
// Ay tavanı (YK #203): bir aboneye Türkiye ayı içinde en çok 2 bildirim. Tek aboneye "test" gönderimi
// sayaca yazılmaz (Tolga'nın kendi telefonu için deneme), toplu gönderim sayaca yazılır.

export const BASLIK_EN_UZUN = 60;
export const METIN_EN_UZUN = 160;
export const AY_TAVANI = 2;

// Yalnız kendi sitemizdeki yol (SW'deki guvenliYol ile aynı kural).
export const icYol = (u) => (typeof u === "string" && /^\/(?!\/)[^\s]*$/.test(u) && u.length <= 200 ? u : "/");

export function gonderimGovdesi(g) {
  if (!g || typeof g !== "object") return null;
  const baslik = typeof g.baslik === "string" ? g.baslik.trim() : "";
  const metin = typeof g.metin === "string" ? g.metin.trim() : "";
  if (!baslik || baslik.length > BASLIK_EN_UZUN) return null;
  if (!metin || metin.length > METIN_EN_UZUN) return null;
  return { baslik, metin, url: icYol(g.url) };
}

// Türkiye saatiyle (UTC+3) "YYYY-MM".
export const trAy = (t) => new Date(new Date(t).getTime() + 3 * 3600e3).toISOString().slice(0, 7);

// Bu ay kaç bildirim gitmiş: son gönderim başka aydaysa sayaç sıfırdan başlar.
export function buAySayisi(satir, simdi = Date.now()) {
  if (!satir?.son_gonderim) return 0;
  return trAy(satir.son_gonderim) === trAy(simdi) ? Number(satir.ay_gonderim) || 0 : 0;
}

export const tavanDolu = (satir, simdi = Date.now()) => buAySayisi(satir, simdi) >= AY_TAVANI;

// Push hizmeti aboneliğin bittiğini söylerse (404/410) satır silinir (gizlilik metni #bildirim).
export const abonelikBitti = (statusCode) => statusCode === 404 || statusCode === 410;
