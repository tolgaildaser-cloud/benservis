// api/urun/[id].js
// GET /api/urun/:id — Servis ürünü detayı (public)
// Ürün + satıcı firma bilgisi + DPP özeti döner.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Ürün ID gerekli" });

  const { data: urun, error } = await supabase
    .from("servis_urunler")
    .select("id, servis_id, tip, baslik, aciklama, fiyat, gorsel_url, dpp_seri_no, durum, created_at")
    .eq("id", id)
    .single();

  if (error || !urun) return res.status(404).json({ error: "Ürün bulunamadı" });

  // Satıcı firma
  let servis = null;
  const { data: sv } = await supabase
    .from("servis_basvurulari")
    .select("id, ad, il, ilce")
    .eq("id", urun.servis_id)
    .single();
  if (sv) servis = sv;

  // DPP özeti
  let dpp = null;
  if (urun.dpp_seri_no) {
    const { data: cihaz } = await supabase
      .from("cihazlar")
      .select("id, seri_no, marka, model, kategori, mevcut_durum")
      .eq("seri_no", urun.dpp_seri_no)
      .single();
    if (cihaz) {
      const { data: tamirler } = await supabase
        .from("tamir_kayitlari")
        .select("id, tarih, yapilan_islem, servis_turu")
        .eq("cihaz_id", cihaz.id)
        .order("tarih", { ascending: false });
      dpp = {
        ...cihaz,
        tamir_sayisi: tamirler?.length || 0,
        benservis_dogrulanmis: (tamirler || []).some(t => t.servis_turu === "benservis"),
      };
    }
  }

  return res.status(200).json({ urun, servis, dpp });
}
