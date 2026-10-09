// src/ariza-kutusu-sayfalari.js — ARIZA GİRİŞ KUTUSU'nun çıktığı sayfalar + build kapısı.
// Yalnız scripts/build-blog.mjs okur (uygulama paketine girmez). Kapı saf fonksiyondur ki
// vitest ile sınanabilsin (ariza-kutusu-sayfalari.test.js); build onu çağırıp hata varsa durur.
//
// İKİ AYRI LİSTE, İKİ AYRI KARAR:
//  · ARIZA_KUTUSU_SAYFALARI — YK #159/#160 TEST listesi. En çok 10 sayfa (kapı durdurur).
//    Sıra: yayında olan 2 sayfa + PAZ aday listesinin kalan 8'i (yayımlandıkça kutu
//    kendiliğinden çıkar; aday değişirse bu liste de değişir).
//  · ARIZA_KUTUSU_YK161 — YK #161 (Tolga 5 Eki 2026: "Siemens ve Protherm sayfalarına
//    yaptığımız düzenlemeyi en çok hit alan 10 sayfaya daha yap"). Test listesinden AYRI;
//    "en çok 10" sınırı bu listeye uygulanmaz. #160'taki "Bosch Serie 4 yasak" kapısı bu
//    kararla kalktı (yazı bu listenin ilk satırı).
// Başka her sayfanın çıktısı BAYT BAYT aynı kalır.
export const ARIZA_KUTUSU_SAYFALARI = new Set([
  "siemens-bulasik-makinesi-sembolleri-ve-anlamlari", // yayında 5 Eki
  "protherm-kombi-ariza-kodlari", // yayında 5 Eki
  "samsung-camasir-makinesi-sembolleri-ve-anlamlari",
  "baymak-kombi-sembolleri-ve-anlamlari", // PAZ 9 Eki: Ariston adayı yerine (Ariston yayınlanmadı)
  "beko-bulasik-makinesi-sembolleri-ve-anlamlari",
  "lg-camasir-makinesi-sembolleri-ve-anlamlari",
  "demirdokum-kombi-sembolleri-ve-anlamlari",
  "beko-camasir-makinesi-sembolleri-ve-anlamlari",
  "vestel-camasir-makinesi-sembolleri-ve-anlamlari",
  "ferroli-kombi-ariza-kodlari",
]);
export const ARIZA_KUTUSU_TEST_SINIRI = 10;
export const ARIZA_KUTUSU_YK161 = new Set([
  "bosch-serie-4-bulasik-makinesi-sembolleri-ve-anlamlari",
  "kurutma-makinesi-su-tanki-dolu-uyarisi",
  "derin-dondurucu-kac-derece-olmali",
  "camasir-makinesi-kapagi-acilmiyor",
  "ocak-atesleme-yapmiyor",
  "bosch-camasir-makinesi-hata-kodlari",
  "bosch-bulasik-makinesi-sembolleri-ve-anlamlari",
  "arcelik-kurutma-makinesi-sembolleri-ve-anlamlari",
  "bosch-camasir-makinesi-sembolleri-ve-anlamlari",
  "bosch-camasir-makinesi-e61-hatasi",
]);
export const kutuluSlug = (slug) => ARIZA_KUTUSU_SAYFALARI.has(slug) || ARIZA_KUTUSU_YK161.has(slug);

// YK #160 2. ADIM (Tolga 5 Eki: "marka da seçili gelsin ... tekrar tıklamaya gerek yok").
// Sayfa TEK MARKAYA aitse kutu markayı da taşır; ana sayfa onu seçili açar ve metin de
// doluysa teşhisi ikinci tıklama olmadan başlatır (src/ariza-kutusu.js `kutuOtoBaslar`).
// ⛔ Elle kürasyon, bulanık eşleme YOK. Değer yalnız o cihazın `markalarForCihaz` listesinden;
//    kapı listede olmayanı ve slug'ın başında geçmeyen markayı durdurur.
//    Markası olmayan kutulu sayfa olabilir → form markasız açılır, teşhis başlatılmaz.
//    Marka adres çubuğuna girmez: metinle aynı sessionStorage kaydında gider.
export const KUTU_MARKA = {
  "siemens-bulasik-makinesi-sembolleri-ve-anlamlari": "Siemens",
  "protherm-kombi-ariza-kodlari": "Protherm",
  "samsung-camasir-makinesi-sembolleri-ve-anlamlari": "Samsung",
  "baymak-kombi-sembolleri-ve-anlamlari": "Baymak",
  "beko-bulasik-makinesi-sembolleri-ve-anlamlari": "Beko",
  "lg-camasir-makinesi-sembolleri-ve-anlamlari": "LG",
  "demirdokum-kombi-sembolleri-ve-anlamlari": "Demirdöküm",
  "beko-camasir-makinesi-sembolleri-ve-anlamlari": "Beko",
  "vestel-camasir-makinesi-sembolleri-ve-anlamlari": "Vestel",
  "ferroli-kombi-ariza-kodlari": "Ferroli",
  // YK #161 — yalnız slug'ı markayla başlayan sayfalar; diğer dördü markasız.
  "bosch-serie-4-bulasik-makinesi-sembolleri-ve-anlamlari": "Bosch",
  "bosch-camasir-makinesi-hata-kodlari": "Bosch",
  "bosch-bulasik-makinesi-sembolleri-ve-anlamlari": "Bosch",
  "arcelik-kurutma-makinesi-sembolleri-ve-anlamlari": "Arçelik",
  "bosch-camasir-makinesi-sembolleri-ve-anlamlari": "Bosch",
  "bosch-camasir-makinesi-e61-hatasi": "Bosch",
};

// KUTU KAPISI — hata dizisi döner (boşsa geçti). Bağımlılıklar parametre: build kendi
// `slugify` / köprü / marka fonksiyonlarını verir, test sahtelerini.
//   yayindaki: yayımlanmış kutulu yazılar [{ slug, cihazSlug, cihazAdi, markalar }]
//   yayindakiSluglar: yayımlanmış TÜM yazı slug'ları (YK #161 listesi mevcut sayfa ister)
export function kutuKapisi({
  test = ARIZA_KUTUSU_SAYFALARI, yk161 = ARIZA_KUTUSU_YK161, marka = KUTU_MARKA,
  sinir = ARIZA_KUTUSU_TEST_SINIRI, yayindaki = [], yayindakiSluglar = null, slugify,
}) {
  const hata = [];
  if (test.size > sinir) hata.push(`test listesi ${test.size} sayfa (en çok ${sinir})`);
  for (const s of yk161) {
    if (test.has(s)) hata.push(`${s} hem test hem YK #161 listesinde`);
    if (yayindakiSluglar && !yayindakiSluglar.has(s)) hata.push(`YK #161: ${s} yayında değil (liste yalnız mevcut sayfa alır)`);
  }
  for (const p of yayindaki) if (!p.cihazSlug) hata.push(`${p.slug} → cihaz bağlamı yok`);
  for (const [slug, m] of Object.entries(marka)) {
    if (!test.has(slug) && !yk161.has(slug)) hata.push(`KUTU_MARKA: ${slug} kutu listelerinde değil`);
    else if (!slug.startsWith(`${slugify(m)}-`)) hata.push(`KUTU_MARKA: ${slug} → "${m}" slug'da geçmiyor`);
  }
  for (const p of yayindaki) {
    const m = marka[p.slug];
    if (!m) continue;
    if (!p.cihazAdi) hata.push(`${p.slug} → cihaz adı çözülemedi (${p.cihazSlug})`);
    else if (!p.markalar.includes(m)) hata.push(`${p.slug} → "${m}" ${p.cihazAdi} marka listesinde yok`);
  }
  return hata;
}
