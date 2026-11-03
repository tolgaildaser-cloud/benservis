// api/push/abone.js — Web Push aboneliği kaydı (YK #203 PR-1, 3 Kas 2026).
// POST {endpoint, p256dh, auth, cihaz} → push_abone'ye ekle/güncelle (aynı endpoint: teşhis tarihi ve cihaz yenilenir,
// iptal_at sıfırlanır). DELETE {endpoint} → satır silinir (gizlilik metni #bildirim). IP, UA, kimlik SAKLANMAZ. Yanıt yalnız {ok}.
import { withRateLimit } from "../_ratelimit.js";
import { CIHAZLAR } from "../../src/constants.js";

export function gecerliGovde(g) {
  if (!g || typeof g !== "object") return null;
  const { endpoint, p256dh, auth, cihaz } = g;
  if (typeof endpoint !== "string" || endpoint.length > 1000 || !/^https:\/\/[^\s]+$/.test(endpoint)) return null;
  if (typeof p256dh !== "string" || !/^[A-Za-z0-9_-]{60,120}$/.test(p256dh)) return null;
  if (typeof auth !== "string" || !/^[A-Za-z0-9_-]{16,40}$/.test(auth)) return null;
  return { endpoint, p256dh, auth, cihaz: CIHAZLAR.includes(cihaz) ? cihaz : null };
}

async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (!["POST", "DELETE"].includes(req.method)) return res.status(405).json({ ok: false });
  let g = req.body;
  if (typeof g === "string") { try { g = JSON.parse(g); } catch { g = null; } }
  const { default: supabase } = await import("../_supabase.js");
  if (req.method === "DELETE") {
    if (typeof g?.endpoint !== "string") return res.status(400).json({ ok: false });
    // Gizlilik metni: rıza geri alınınca kayıt silinir (iptal işareti değil).
    const { error } = await supabase.from("push_abone").delete().eq("endpoint", g.endpoint);
    return res.status(error ? 500 : 200).json({ ok: !error });
  }
  const v = gecerliGovde(g);
  if (!v) return res.status(400).json({ ok: false });
  const simdi = new Date().toISOString();
  const { error } = await supabase.from("push_abone")
    .upsert({ ...v, teshis_at: simdi, iptal_at: null }, { onConflict: "endpoint" });
  if (error) console.error("[push] abone:", error.message);
  return res.status(error ? 500 : 200).json({ ok: !error });
}

export default withRateLimit(handler, { prefix: "pushabone", limits: [{ tokens: 10, window: "1 h" }] });
