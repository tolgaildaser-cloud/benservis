// api/ilan/[id].js
// GET  /api/ilan/:id → ilan detay + DPP pasaport
// PATCH /api/ilan/:id { durum: 'satildi' | 'silindi' }
import supabase from "../_supabase.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "id gerekli" });

  if (req.method === "GET") {
    const { data: ilan, error } = await supabase
      .from("ilanlar")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !ilan) return res.status(404).json({ error: "İlan bulunamadı" });

    // Görüntüleme sayısını artır (non-blocking)
    supabase
      .from("ilanlar")
      .update({ goruntuleme_sayisi: (ilan.goruntuleme_sayisi || 0) + 1 })
      .eq("id", id)
      .then(() => {});

    // DPP pasaport
    let dpp = null;
    const { data: cihaz } = await supabase
      .from("cihazlar")
      .select("*")
      .eq("seri_no", ilan.seri_no)
      .single();

    if (cihaz) {
      const { data: tamirler } = await supabase
        .from("tamir_kayitlari")
        .select("*")
        .eq("cihaz_id", cihaz.id)
        .order("tarih", { ascending: false });

      const toplam_maliyet = (tamirler || []).reduce((s, t) => s + (t.maliyet || 0), 0);
      dpp = { cihaz, tamirler: tamirler || [], toplam_maliyet };
    }

    return res.status(200).json({ ilan, dpp });
  }

  if (req.method === "PATCH") {
    const { durum } = req.body || {};
    if (!["satildi", "silindi"].includes(durum)) {
      return res.status(400).json({ error: "durum 'satildi' veya 'silindi' olmalı" });
    }

    const { error } = await supabase
      .from("ilanlar")
      .update({ durum })
      .eq("id", id);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true, id, durum });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
