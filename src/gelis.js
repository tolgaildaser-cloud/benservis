// src/gelis.js — "kullanıcı buraya nereden geldi?" etiketinin TEK okuyucusu.
//
// NEDEN VAR (11 Eyl 2026, FE — Vercel olayları ilk kez okunabildiğinde ölçüldü):
// Etiket iki ayrı yerde, iki ayrı parametreden okunuyordu ve ikisi ayrışmıştı:
//   App.jsx `GELIS`            → yalnız `?kaynak=`, en fazla 32 karakter
//   ServisEkrani `GELIS_KAYNAGI` → yalnız `?k=`, desen denetimi YOK (60'a kırpıyordu)
// Oysa blog gövdesindeki köprü CTA'ları yalnız `k=blog-<slug>` basıyor (YK #67 ②) ve
// kapanış kartının `kaynak=blog-<slug>` değeri uzun slug'larda 32 sınırına takılıyordu
// (en uzunu 53 krk). Sonuç: 15 Ağu–11 Eyl'de `diagnose_start` 72/72 ve `servis_click`
// 18/18 olay `gelis` alanı BOŞ düştü — "hangi yazı teşhis getiriyor" sorusu Vercel'de
// cevapsızdı; aynı dönemde `call_click`/`wa_click` ise `k` okuduğu için atıflıydı.
//
// SÖZLEŞME:
//   · Önce `kaynak` (istemci hunisi, YK #35 şart 2), geçersiz/yoksa `k` (blog köprüsü).
//   · ⛔ Serbest metin ALINMAZ: yalnız [a-z0-9-], en fazla 60 karakter — analitiğe çöp ya
//     da kişisel veri sızmasın. 60 = sunucunun `k` kırpması (api/teshis/log.js `icKaynak`).
//   · Desene uymayan değer sessizce atılır; hiçbir şey yoksa "" döner (tahmin YAPILMAZ).
export const GELIS_DESENI = /^[a-z0-9-]{1,60}$/;

export function gelisEtiketi(search) {
  try {
    const q = new URLSearchParams(search || "");
    for (const ad of ["kaynak", "k"]) {
      const v = (q.get(ad) || "").trim();
      if (GELIS_DESENI.test(v)) return v;
    }
  } catch { /* bozuk adres → etiketsiz */ }
  return "";
}
