// api/ilan/yeni.js
// POST /api/ilan/yeni
// Body: { seri_no, baslik, aciklama?, fiyat, konum?, satici_ad, satici_tel, fotograflar? }
// DPP pasaportunu otomatik çeker, ilan oluşturur.
import supabase from "../_supabase.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const {
    seri_no, baslik, aciklama, fiyat,
    konum, satici_ad, satici_tel, fotograflar,
  } = req.body || {};

  // Zorunlu alan kontrolü
  if (!seri_no?.trim())     return res.status(400).json({ error: "seri_no gerekli" });
  if (!baslik?.trim())      return res.status(400).json({ error: "baslik gerekli" });
  if (!fiyat || parseInt(fiyat, 10) <= 0)
                            return res.status(400).json({ error: "Geçerli bir fiyat girin" });
  if (!satici_ad?.trim())   return res.status(400).json({ error: "satici_ad gerekli" });
  if (!satici_tel?.trim())  return res.status(400).json({ error: "satici_tel gerekli" });

  // DPP özeti çek (opsiyonel — cihaz yoksa ilan yine de oluşur)
  let dpp = null;
  const { data: cihaz } = await supabase
    .from("cihazlar")
    .select("id, marka, model, kategori, mevcut_durum, garanti_bitis_tarihi")
    .eq("seri_no", seri_no.trim())
    .single();

  if (cihaz) {
    const { data: tamirler } = await supabase
      .from("tamir_kayitlari")
      .select("id, tarih, yapilan_islem, degistirilen_parcalar, maliyet, servis_turu, servis_adi")
      .eq("cihaz_id", cihaz.id)
      .order("tarih", { ascending: false });

    const toplam_maliyet = (tamirler || []).reduce((s, t) => s + (t.maliyet || 0), 0);
    const benservis_dogrulanmis = (tamirler || []).some(t => t.servis_turu === "benservis");

    dpp = {
      marka: cihaz.marka,
      model: cihaz.model,
      kategori: cihaz.kategori,
      mevcut_durum: cihaz.mevcut_durum,
      garanti_bitis_tarihi: cihaz.garanti_bitis_tarihi,
      tamir_sayisi: tamirler?.length || 0,
      toplam_maliyet,
      benservis_dogrulanmis,
    };
  }

  const { data: ilan, error } = await supabase
    .from("ilanlar")
    .insert({
      seri_no:     seri_no.trim(),
      baslik:      baslik.trim(),
      aciklama:    aciklama?.trim() || null,
      fiyat:       parseInt(fiyat, 10),
      konum:       konum?.trim() || null,
      satici_ad:   satici_ad.trim(),
      satici_tel:  satici_tel.trim(),
      fotograflar: fotograflar || [],
    })
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });

  return res.status(201).json({ ilan, dpp });
}
