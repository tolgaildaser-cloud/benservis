// api/ilan/[id].js
// GET  /api/ilan/:id → ilan detay + DPP pasaport
// PATCH /api/ilan/:id { durum: 'satildi' | 'silindi' } — yalnız satıcı anahtarıyla
//   (`Authorization: Bearer <satici_token>` ya da gövdede `satici_token`)
import supabase from "../_supabase.js";
import {
  ILAN_PUBLIC_ALANLAR, ILAN_PUBLIC_DURUMLAR, CIHAZ_PUBLIC_ALANLAR, TAMIR_PUBLIC_ALANLAR,
} from "../_public-alanlar.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "id gerekli" });

  if (req.method === "GET") {
    const { data: ilan, error } = await supabase
      .from("ilanlar")
      .select(ILAN_PUBLIC_ALANLAR)
      .eq("id", id)
      .in("durum", ILAN_PUBLIC_DURUMLAR)
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
    const { data: cihaz } = ilan.seri_no ? await supabase
      .from("cihazlar")
      .select(CIHAZ_PUBLIC_ALANLAR)
      .eq("seri_no", ilan.seri_no)
      .single() : { data: null };

    if (cihaz) {
      const { data: tamirler } = await supabase
        .from("tamir_kayitlari")
        .select(TAMIR_PUBLIC_ALANLAR)
        .eq("cihaz_id", cihaz.id)
        .order("tarih", { ascending: false });

      const toplam_maliyet = (tamirler || []).reduce((s, t) => s + (t.maliyet || 0), 0);
      dpp = { cihaz, tamirler: tamirler || [], toplam_maliyet };
    }

    return res.status(200).json({ ilan, dpp });
  }

  if (req.method === "PATCH") {
    const { durum, satici_token: govdeToken } = req.body || {};
    if (!["satildi", "silindi"].includes(durum)) {
      return res.status(400).json({ error: "durum 'satildi' veya 'silindi' olmalı" });
    }
    const baslik = String(req.headers?.authorization || "");
    const token = (baslik.startsWith("Bearer ") ? baslik.slice(7) : govdeToken || "").trim();
    if (!token) return res.status(401).json({ error: "Satıcı anahtarı gerekli" });

    // Eşleşme DB'de: id + satici_token birlikte tutmazsa hiçbir satır güncellenmez.
    const { data: guncel, error } = await supabase
      .from("ilanlar")
      .update({ durum })
      .eq("id", id)
      .eq("satici_token", token)
      .in("durum", ILAN_PUBLIC_DURUMLAR)
      .select("id");

    if (error) return res.status(500).json({ error: "İlan güncellenemedi" });
    if (!guncel?.length) return res.status(403).json({ error: "Yetkisiz" });
    return res.status(200).json({ ok: true, id, durum });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
