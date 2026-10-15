// api/admin/panel-kurulum.js
// PATCH /api/admin/panel-kurulum — YALNIZ ADMIN (15 Eki 2026 güvenlik düzeltmesi)
// Header: Authorization: Bearer $ADMIN_TOKEN (api/_admin.js)
// Body: { user_id, servis_id, servis_ad, ilce? }
// Bir auth kullanıcısını servise bağlar: app_metadata'ya servis_id, servis_ad, servis_ilce yazar.
//
// ⛔ ESKİ HÂL: giriş yapmış HERHANGİ bir kullanıcı kendi JWT'siyle çağırıp kendine istediği servis_id'yi
//    yazdırabiliyordu (admin kontrolü yoktu) → başka servisin işlerini/ürünlerini görebiliyordu.
//    Panelin "kendi servisini seç" ekranı kaldırıldı; eşleştirme artık yalnız admin işi.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { adminYetkili } from "../_admin.js";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "PATCH") return res.status(405).json({ error: "Method not allowed" });
  if (!adminYetkili(req)) return res.status(401).json({ error: "Yetkisiz" });

  const { user_id, servis_id, servis_ad, ilce } = req.body || {};
  if (!user_id || !UUID.test(String(user_id)) || !servis_id || !servis_ad) {
    return res.status(400).json({ error: "user_id, servis_id ve servis_ad zorunludur" });
  }

  const { data: mevcut, error: getErr } = await supabase.auth.admin.getUserById(user_id);
  if (getErr || !mevcut?.user) return res.status(404).json({ error: "Kullanıcı bulunamadı" });

  const yeniApp = { ...(mevcut.user.app_metadata || {}), servis_id, servis_ad };
  if (ilce) yeniApp.servis_ilce = ilce;

  const { error } = await supabase.auth.admin.updateUserById(user_id, { app_metadata: yeniApp });
  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ ok: true, user_id, servis_id, servis_ad, servis_ilce: ilce || null });
}
