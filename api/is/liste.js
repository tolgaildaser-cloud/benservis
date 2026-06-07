// api/is/liste.js
// GET /api/is/liste
// Header: Authorization: Bearer <supabase-jwt>
// Servisin kendi is_talepleri kayıtlarını döndürür. musteri_tel dahil edilmez.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_twilio.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  // JWT doğrulama
  const authHeader = req.headers.authorization || "";
  const token = authHeader.replace("Bearer ", "").trim();
  if (!token) return res.status(401).json({ error: "Token gerekli" });

  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

  const servis_id = user.user_metadata?.servis_id;
  if (!servis_id) return res.status(403).json({ error: "Servis kimliği bulunamadı" });

  const { data: isler, error } = await supabase
    .from("is_talepleri")
    .select("id, is_no, servis_id, servis_ad, musteri_ad, adres, tarih_tercihi, cihaz, belirti, durum, son_kabul_tarihi, gelis_penceresi, twilio_numara, seri_no, dpp_tamir_id, created_at")
    .eq("servis_id", servis_id)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ isler: isler || [] });
}
