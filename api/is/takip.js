// api/is/takip.js
// GET /api/is/takip?is_no=BS-0001
// Public endpoint — müşteri takip sayfası için.
// musteri_tel, musteri_ad, adres HİÇBİR ZAMAN döndürülmez (güvenlik kuralı).
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { is_no } = req.query;
  if (!is_no) return res.status(400).json({ error: "is_no gerekli" });

  const { data: is, error } = await supabase
    .from("is_talepleri")
    .select("is_no, durum, servis_ad, gelis_penceresi, son_kabul_tarihi, created_at, cihaz, puan")
    .eq("is_no", is_no)
    .single();

  if (error || !is) return res.status(404).json({ error: "İş bulunamadı" });

  return res.status(200).json({ is });
}
