// api/servis/urunler.js
// GET  /api/servis/urunler?servis_id=  — public, aktif ürünleri döner
// POST /api/servis/urunler             — JWT auth, yeni ürün ekler
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  // ── GET: public ürün listesi ──────────────────────────────────────
  if (req.method === "GET") {
    const { servis_id, durum } = req.query;
    if (!servis_id) return res.status(400).json({ error: "servis_id gerekli" });

    const durumFiltre = durum || "aktif";

    const { data, error } = await supabase
      .from("servis_urunler")
      .select("id, tip, baslik, aciklama, fiyat, gorsel_url, dpp_seri_no, durum, created_at")
      .eq("servis_id", servis_id)
      .eq("durum", durumFiltre)
      .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ urunler: data || [] });
  }

  // ── POST: yeni ürün ekle (JWT auth) ──────────────────────────────
  if (req.method === "POST") {
    const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
    if (!token) return res.status(401).json({ error: "Token gerekli" });

    const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
    if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

    const servis_id = user.user_metadata?.servis_id;
    if (!servis_id) return res.status(403).json({ error: "Servis kimliği bulunamadı" });

    const { tip, baslik, aciklama, fiyat, gorsel_url, dpp_seri_no } = req.body || {};

    if (!baslik?.trim()) return res.status(400).json({ error: "Başlık zorunludur" });
    if (!fiyat || isNaN(Number(fiyat)) || Number(fiyat) < 0) {
      return res.status(400).json({ error: "Geçerli bir fiyat girin" });
    }

    const gecerliTipler = ["ikinci_el", "yedek_parca"];
    const tipDeger = tip || "ikinci_el";
    if (!gecerliTipler.includes(tipDeger)) {
      return res.status(400).json({ error: "tip: ikinci_el | yedek_parca" });
    }

    const { data, error } = await supabase
      .from("servis_urunler")
      .insert({
        servis_id,
        tip:         tipDeger,
        baslik:      baslik.trim(),
        aciklama:    aciklama?.trim() || null,
        fiyat:       Number(fiyat),
        gorsel_url:  gorsel_url?.trim() || null,
        dpp_seri_no: dpp_seri_no?.trim().toUpperCase() || null,
      })
      .select("id, tip, baslik, aciklama, fiyat, gorsel_url, dpp_seri_no, durum, created_at")
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
