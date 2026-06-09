// api/is/havuz.js
// GET /api/is/havuz
// Header: Authorization: Bearer <supabase-jwt>
// Servisin ilçesindeki havuzdaki (servis_id NULL, durum=havuzda) işleri döndürür.
// musteri_tel asla dahil edilmez.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  // JWT doğrulama
  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (!token) return res.status(401).json({ error: "Token gerekli" });

  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

  const servis_ilce = user.user_metadata?.servis_ilce;
  // ilçe set edilmemişse boş döner (hata değil)
  if (!servis_ilce) return res.status(200).json({ isler: [], ilce: null });

  const { data: isler, error } = await supabase
    .from("is_talepleri")
    .select("id, is_no, ilce, musteri_ad, adres, tarih_tercihi, cihaz, belirti, durum, son_kabul_tarihi, created_at")
    .eq("durum", "havuzda")
    .is("servis_id", null)
    .eq("ilce", servis_ilce)
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ isler: isler || [], ilce: servis_ilce });
}
