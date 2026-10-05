// src/ariza-kutusu.js — blog sayfasındaki ARIZA GİRİŞ KUTUSU'nun (YK #160) teşhis tarafı.
//
// NEDEN VAR (YK #160, 4 Eki 2026; sıra koşulu 5 Eki'de kalktı): 14 günde 14 teşhisin
// yalnız 1'i blogdan geldi; en çok okunan yazı 67 ziyaretçiyle 0 teşhis. Sayfada düğme
// vardı ama yazı alanı yoktu. #159'un 10 test sayfasına düz HTML bir kutu kondu
// (scripts/build-blog.mjs `ARIZA_KUTUSU_SAYFALARI`); okurun yazdığı arıza buradan forma taşınır.
//
// SÖZLEŞME:
//   · Metin ADRES ÇUBUĞUNA GİRMEZ: blog sayfası onu sessionStorage'a koyar (aynı sekme,
//     aynı köken, sekme kapanınca silinir), adres yalnız mevcut köprüyü taşır
//     (`?cihaz=&ariza=&k=blog-<slug>`). `gelis` etiketine serbest metin YAZILMAZ (gelis.js).
//   · Kayıt TEK KULLANIMLIK: okunduğu an silinir; yenilemede/geri tuşunda tekrar dolmaz.
//   · Kayıt yalnız AYNI sayfanın köprüsüyle gelindiyse uygulanır (gelis = "blog-<slug>") ve
//     30 dakikadan eski değilse — başka yoldan açılan forma eski metin sızmaz.
//   · Analitiğe yalnız sayfa slug'ı gider; metnin kendisi hiçbir olaya yazılmaz.
export const KUTU_ANAHTAR = "bs_ariza_kutusu";
export const KUTU_OMUR_MS = 30 * 60 * 1000;
const SLUG_DESENI = /^[a-z0-9-]{1,60}$/;

export function kutuOku(depo, gelis, simdi = Date.now(), max = 300) {
  try {
    const ham = depo && depo.getItem(KUTU_ANAHTAR);
    if (!ham) return null;
    depo.removeItem(KUTU_ANAHTAR); // tek kullanımlık — eşleşmese de silinir
    const k = JSON.parse(ham);
    const sayfa = String(k?.s || "");
    if (!SLUG_DESENI.test(sayfa)) return null;
    if (gelis !== `blog-${sayfa}`) return null;
    const t = Number(k?.t);
    if (!Number.isFinite(t) || simdi - t < 0 || simdi - t > KUTU_OMUR_MS) return null;
    return { sayfa, metin: String(k?.m || "").trim().slice(0, max) };
  } catch {
    return null; // depo kapalı (gizli sekme vb.) ya da bozuk kayıt → kutusuz akış
  }
}
