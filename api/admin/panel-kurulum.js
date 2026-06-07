// api/admin/panel-kurulum.js
// PATCH /api/admin/panel-kurulum
// Header: Authorization: Bearer <supabase-jwt>
// Body: { servis_id, servis_ad }
// Giriş yapmış kullanıcının user_metadata.servis_id alanını günceller.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_twilio.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "PATCH") return res.status(405).json({ error: "Method not allowed" });

  // JWT doğrulama
  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (!token) return res.status(401).json({ error: "Token gerekli" });

  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

  const { servis_id, servis_ad } = req.body || {};
  if (!servis_id || !servis_ad) {
    return res.status(400).json({ error: "servis_id ve servis_ad zorunludur" });
  }

  // Admin API ile user_metadata güncelle
  const { data, error } = await supabase.auth.admin.updateUserById(user.id, {
    user_metadata: { ...user.user_metadata, servis_id, servis_ad },
  });

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({
    ok: true,
    user_id: user.id,
    servis_id,
    servis_ad,
  });
}
