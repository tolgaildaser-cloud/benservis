// api/_public-alanlar.js — yetkisiz uçların döndürebileceği kolonlar (tek kaynak).
// `_` önekli: Vercel bunu uç olarak yayınlamaz.

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
export const CIHAZ_PUBLIC_ALANLAR = [
  "id", // DPPEkrani tamir formuna `cihaz_id` olarak geçiyor — cevapta GEREKLİ.
  "seri_no", "kategori", "marka", "model", "renk", "uretim_yili",
  "satin_alma_tarihi", "garanti_baslangic_tarihi", "garanti_bitis_tarihi",
  "uzatilmis_garanti", "uzatilmis_garanti_bitis", "mevcut_durum", "fotograflar",
].join(", ");

// Aynı sözleşme `tamir_kayitlari` için de geçerli: tamir kayıtları AYNI yetkisiz
// cevabın içinde dönüyor, dolayısıyla aynı sınıf sızıntıya açıktı.
// ⛔ DIŞARIDA: notlar (tamir notuna müşteri adı/adresi yazılabilir) ·
//    benservis_is_id ve servis_id (iç kimlikler) · created_at (okunmuyor).
export const TAMIR_PUBLIC_ALANLAR = [
  "id", "cihaz_id", "tarih", "yapilan_islem", "degistirilen_parcalar",
  "maliyet", "servis_adi", "servis_turu", "fotograflar",
].join(", ");

// ── İLAN PUBLIC ALANLARI (YK #166 ön koşulu, 10 Eki 2026) ───────────────────
// `GET /api/ilan/:id` ve `/ikinci-el/:id` OG sayfası YETKİSİZ. 9 Eki'ye kadar
// `select("*")` ile satıcının telefonunu, IBAN'ını ve `satici_token`'ını
// (satıcı paneli anahtarı: `/ikinci-el/satis/:token`) herkese döndürüyordu.
// ⛔ DIŞARIDA: satici_tel · satici_iban · satici_token. Alıcı-satıcı iletişimi
//    `api/talep/*` token akışıyla kurulur; telefon public cevaba girmez.
export const ILAN_PUBLIC_ALANLAR = [
  "id", "seri_no", "baslik", "aciklama", "fiyat", "konum", "satici_ad",
  "fotograflar", "durum", "goruntuleme_sayisi", "created_at", "kategori",
  "tur", "parca_turu", "cihaz_turu", "uyumlu_modeller", "parca_durum",
].join(", ");

// Public uçlardan okunabilen ilan durumları — `demo` (#165 PR-1) ve `silindi` 404.
export const ILAN_PUBLIC_DURUMLAR = ["aktif", "satildi"];

// ── SATICI PUBLIC ALANLARI (YK #166 PR-2, 10 Eki 2026) ──────────────────────
// `saticilar` iletişim ve IBAN taşıyor; public uçlar yalnız ad + türü (Benservis
// rozeti için) döndürür.
// ⛔ DIŞARIDA: iletisim_tel · iletisim_eposta · iban · servis_id · aktif · created_at.
export const SATICI_PUBLIC_ALANLAR = ["id", "ad", "tur"].join(", ");

// Mağaza ürünü (`servis_urunler`) public kolonları — `/api/urun/:id` ve vitrin.
export const URUN_PUBLIC_ALANLAR = [
  "id", "servis_id", "satici_id", "tip", "tur", "kategori", "baslik", "aciklama",
  "fiyat", "gorsel_url", "dpp_seri_no", "durum", "stok", "parca_turu", "cihaz_turu",
  "uyumlu_modeller", "parca_durum", "created_at",
].join(", ");
