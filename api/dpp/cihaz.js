// api/dpp/cihaz.js
import supabase from "../_supabase.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  // GET ?seri_no=SN123 → pasaport getir
  if (req.method === "GET") {
    const { seri_no } = req.query;
    if (!seri_no) return res.status(400).json({ error: "seri_no gerekli" });

    const { data: cihaz, error: ce } = await supabase
      .from("cihazlar")
      .select("*")
      .eq("seri_no", seri_no)
      .single();

    if (ce) {
      if (ce.code === "PGRST116") return res.status(404).json({ error: "Cihaz bulunamadı" });
      return res.status(500).json({ error: ce.message });
    }

    const { data: tamirler, error: te } = await supabase
      .from("tamir_kayitlari")
      .select("*")
      .eq("cihaz_id", cihaz.id)
      .order("tarih", { ascending: false });

    if (te) return res.status(500).json({ error: te.message });

    const toplam_maliyet = (tamirler || []).reduce((s, t) => s + (t.maliyet || 0), 0);
    return res.status(200).json({ cihaz, tamirler: tamirler || [], toplam_maliyet });
  }

  // POST → upsert (var ise getir, yok ise oluştur)
  if (req.method === "POST") {
    const {
      seri_no, kategori, marka, model, renk,
      uretim_yili, satin_alma_tarihi, garanti_bitis_tarihi,
      fotograflar, notlar,
    } = req.body || {};

    if (!seri_no) return res.status(400).json({ error: "seri_no gerekli" });

    // Var mı kontrol et
    const { data: existing } = await supabase
      .from("cihazlar")
      .select("*")
      .eq("seri_no", seri_no)
      .single();

    if (existing) {
      const { data: tamirler } = await supabase
        .from("tamir_kayitlari")
        .select("*")
        .eq("cihaz_id", existing.id)
        .order("tarih", { ascending: false });
      const toplam_maliyet = (tamirler || []).reduce((s, t) => s + (t.maliyet || 0), 0);
      return res.status(200).json({ cihaz: existing, tamirler: tamirler || [], toplam_maliyet, created: false });
    }

    // Yeni oluştur
    const { data: cihaz, error } = await supabase
      .from("cihazlar")
      .insert({
        seri_no,
        kategori: kategori || null,
        marka: marka || null,
        model: model || null,
        renk: renk || null,
        uretim_yili: uretim_yili || null,
        satin_alma_tarihi: satin_alma_tarihi || null,
        garanti_bitis_tarihi: garanti_bitis_tarihi || null,
        fotograflar: fotograflar || [],
        notlar: notlar || null,
      })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ cihaz, tamirler: [], toplam_maliyet: 0, created: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
