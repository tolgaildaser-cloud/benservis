// api/_origin.js — tarayıcıdan gelen kimliksiz yazma uçları için Origin kapısı (3 Kas 2026).
// Origin yoksa Referer'a bakılır; ikisi de yoksa ya da alan adı bizim değilse istek REDDEDİLİR.
// Eskiden başlıksız istek geçiyordu: curl ile sahte teşhis/ziyaret kaydı yazılabiliyordu (YK8 bulgusu).
// Spoof edilebilir bir katmandır; asıl savunma rate-limit, ama kazara ve toplu çöpü keser.
// Aynı kökenli fetch/sendBeacon POST'u tarayıcı her zaman Origin ile gönderir.
const HOST = /^(?:(?:www\.)?benservis\.com|[a-z0-9-]+-benservis\.vercel\.app|localhost|127\.0\.0\.1)$/i;

export function originIzinli(req) {
  const raw = req.headers?.origin || req.headers?.referer || "";
  if (!raw) return false;
  try { return HOST.test(new URL(raw).hostname); } catch { return false; }
}

// Uç sarmalayıcı. `sessiz`: beacon uçları cevabı okumadığı için 204 döner.
export const originKapisi = (handler, { sessiz = false } = {}) => (req, res) => {
  if (req.method !== "OPTIONS" && !originIzinli(req)) return sessiz ? res.status(204).end() : res.status(403).json({ ok: false });
  return handler(req, res);
};
