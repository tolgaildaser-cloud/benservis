// api/dpp/cihaz.js
import supabase from "../_supabase.js";

// ── PUBLIC ALAN SÖZLEŞMESİ (YK Kararı #114, 30 Ağu 2026) ─────────────────────
// Bu uç YETKİSİZ ve `Access-Control-Allow-Origin: *` ile açık: seri numarasını
// bilen/deneyen herkes cevabı alır. Bu yüzden `select("*")` BURADA YASAK —
// tabloya eklenen her yeni kolon, kimse fark etmeden anonim erişime açılırdı.
// Alanlar TEK TEK yazılır; listede olmayan alan cevaba GİREMEZ.
//
// ⛔ `cihazlar` tablosundan BİLEREK DIŞARIDA BIRAKILANLAR (canlı şemadan 30 Ağu
//    2026'da okunan 17 kolonun tamamı gözden geçirildi):
//    fatura_url — fatura görselinde ad-soyad / adres / kart son hanesi olabilir
//                 → KVKK'da kişisel veri. #114'ün açılış sebebi.
//    notlar     — sahibin serbest metni; kişisel veri taşıyabilir.
//    created_at — hiçbir tüketici okumuyor; yüzeyi büyütmenin karşılığı yok.
const CIHAZ_PUBLIC_ALANLAR = [
  "id", // DPPEkrani tamir formuna `cihaz_id` olarak geçiyor — cevapta GEREKLİ.
  "seri_no", "kategori", "marka", "model", "renk", "uretim_yili",
  "satin_alma_tarihi", "garanti_baslangic_tarihi", "garanti_bitis_tarihi",
  "uzatilmis_garanti", "uzatilmis_garanti_bitis", "mevcut_durum", "fotograflar",
].join(", ");

// Aynı sözleşme `tamir_kayitlari` için de geçerli: tamir kayıtları AYNI yetkisiz
// cevabın içinde dönüyor, dolayısıyla aynı sınıf sızıntıya açıktı.
// ⛔ DIŞARIDA: notlar (tamir notuna müşteri adı/adresi yazılabilir) ·
//    benservis_is_id ve servis_id (iç kimlikler) · created_at (okunmuyor).
const TAMIR_PUBLIC_ALANLAR = [
  "id", "cihaz_id", "tarih", "yapilan_islem", "degistirilen_parcalar",
  "maliyet", "servis_adi", "servis_turu", "fotograflar",
].join(", ");

// `fatura_url` kolonu artık KALICI PUBLIC URL DEĞİL, `DPP Faturalar` bucket'ındaki
// OBJE YOLUNU tutar (#114 ③). Kalıcı public URL'i DB'ye yazmak, bucket kapatılsa
// bile elde ölü bir bağlantı bırakıyordu; yol saklanınca imza görüntüleme anında
// üretilebilir.
// ⚠️ Kolon ADI `fatura_url` KALDI — ad artık içeriği yanlış anlatıyor. Doğru ad
//    `fatura_path`; yeniden adlandırma ŞEMA DEĞİŞİKLİĞİDİR ve bu PR'ın işi değil
//    (YK/Tolga kararı). 30 Ağu 2026 ölçümü: `cihazlar` tablosunda `fatura_url`
//    dolu olan kayıt sayısı 0 → eski biçimi reddetmek hiçbir kaydı bozmuyor.
const GECERLI_FATURA_YOLU = /^[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9._-]+\.(jpe?g|png|pdf)$/i;

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
      .select(CIHAZ_PUBLIC_ALANLAR)
      .eq("seri_no", seri_no)
      .single();

    if (ce) {
      if (ce.code === "PGRST116") return res.status(404).json({ error: "Cihaz bulunamadı" });
      return res.status(500).json({ error: ce.message });
    }

    const { data: tamirler, error: te } = await supabase
      .from("tamir_kayitlari")
      .select(TAMIR_PUBLIC_ALANLAR)
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
    // #114 ③: artık kalıcı public URL değil, bucket içi obje YOLU bekleniyor.
    // `https://…` biçimi BİLEREK reddediliyor — eski biçim yeniden sızıntı üretirdi.
    if (fatura_url && !GECERLI_FATURA_YOLU.test(fatura_url)) {
      return res.status(400).json({ error: "Geçersiz fatura yolu: bucket içi obje yolu bekleniyor (örn. gecici/dosya.pdf)" });
    }

    // Var mı kontrol et — POST de yetkisiz, cevabı GET ile aynı sözleşmeye tabi.
    const { data: existing } = await supabase
      .from("cihazlar")
      .select(CIHAZ_PUBLIC_ALANLAR)
      .eq("seri_no", seri_no)
      .single();

    if (existing) {
      const { data: tamirler, error: te2 } = await supabase
        .from("tamir_kayitlari")
        .select(TAMIR_PUBLIC_ALANLAR)
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
      .select(CIHAZ_PUBLIC_ALANLAR)
      .single();

    if (error) {
      // Unique constraint: concurrent request already inserted — fetch and return
      if (error.code === "23505") {
        const { data: existed } = await supabase
          .from("cihazlar")
          .select(CIHAZ_PUBLIC_ALANLAR)
          .eq("seri_no", seri_no)
          .single();
        const { data: tamirler2 } = await supabase
          .from("tamir_kayitlari")
          .select(TAMIR_PUBLIC_ALANLAR)
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
