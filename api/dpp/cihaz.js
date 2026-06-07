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
      uretim_yili, satin_alma_tarihi, garanti_baslangic_tarihi,
      garanti_bitis_tarihi, uzatilmis_garanti, uzatilmis_garanti_bitis,
      fatura_url, fotograflar, notlar,
    } = req.body || {};

    if (!seri_no) return res.status(400).json({ error: "seri_no gerekli" });
    if (fatura_url && !/^https:\/\/.+/.test(fatura_url)) {
      return res.status(400).json({ error: "Geçersiz fatura_url: https:// ile başlamalı" });
    }

    // Var mı kontrol et
    const { data: existing } = await supabase
      .from("cihazlar")
      .select("*")
      .eq("seri_no", seri_no)
      .single();

    if (existing) {
      const { data: tamirler, error: te2 } = await supabase
        .from("tamir_kayitlari")
        .select("*")
        .eq("cihaz_id", existing.id)
        .order("tarih", { ascending: false });
      if (te2) return res.status(500).json({ error: te2.message });
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
        garanti_baslangic_tarihi: garanti_baslangic_tarihi || null,
        garanti_bitis_tarihi: garanti_bitis_tarihi || null,
        uzatilmis_garanti: uzatilmis_garanti ?? false,
        uzatilmis_garanti_bitis: uzatilmis_garanti_bitis || null,
        fatura_url: fatura_url || null,
        fotograflar: fotograflar || [],
        notlar: notlar || null,
      })
      .select()
      .single();

    if (error) {
      // Unique constraint: concurrent request already inserted — fetch and return
      if (error.code === "23505") {
        const { data: existed } = await supabase
          .from("cihazlar")
          .select("*")
          .eq("seri_no", seri_no)
          .single();
        const { data: tamirler2 } = await supabase
          .from("tamir_kayitlari")
          .select("*")
          .eq("cihaz_id", existed.id)
          .order("tarih", { ascending: false });
        const toplam2 = (tamirler2 || []).reduce((s, t) => s + (t.maliyet || 0), 0);
        return res.status(200).json({ cihaz: existed, tamirler: tamirler2 || [], toplam_maliyet: toplam2, created: false });
      }
      return res.status(500).json({ error: error.message });
    }
    return res.status(201).json({ cihaz, tamirler: [], toplam_maliyet: 0, created: true });
  }

  // PATCH ?seri_no=SN123 { mevcut_durum } — yalnız servis sahibi güncelleyebilir
  if (req.method === "PATCH") {
    const { seri_no } = req.query;
    if (!seri_no) return res.status(400).json({ error: "seri_no gerekli" });

    // JWT doğrulama
    const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
    if (!token) return res.status(401).json({ error: "Token gerekli" });
    const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
    if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

    const { mevcut_durum } = req.body || {};
    const gecerliDurumlar = ["çalışıyor", "arızalı", "hurda"];
    if (!gecerliDurumlar.includes(mevcut_durum)) {
      return res.status(400).json({ error: `mevcut_durum şunlardan biri olmalı: ${gecerliDurumlar.join(", ")}` });
    }

    // Cihazı bul ve sahipliği doğrula (bu servisten en az bir tamir kaydı olmalı)
    const { data: cihaz, error: ce } = await supabase
      .from("cihazlar").select("id").eq("seri_no", seri_no).single();
    if (ce || !cihaz) return res.status(404).json({ error: "Cihaz bulunamadı" });

    const servis_id = user.user_metadata?.servis_id;
    if (servis_id) {
      const { count } = await supabase
        .from("tamir_kayitlari")
        .select("id", { count: "exact", head: true })
        .eq("cihaz_id", cihaz.id)
        .eq("servis_id", servis_id);
      if (!count) return res.status(403).json({ error: "Bu cihazda tamir kaydınız yok" });
    }

    const { error: ue } = await supabase
      .from("cihazlar").update({ mevcut_durum }).eq("id", cihaz.id);
    if (ue) return res.status(500).json({ error: ue.message });

    return res.status(200).json({ ok: true, seri_no, mevcut_durum });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
