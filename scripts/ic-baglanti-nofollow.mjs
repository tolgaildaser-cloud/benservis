// scripts/ic-baglanti-nofollow.mjs — query string taşıyan İÇ bağlantılara rel="nofollow" (21 Eki 2026).
// Tolga (21 Eki 07:1x): "bu tarz sayfalara nofollow ekle, sorun olarak karşımıza çıkmasın" — #179 dondurmasına
// açık talimatla istisna (YK8).
//
// NEDEN: GSC "Doğru standart etikete sahip alternatif sayfa" satırı (278 adres) iç bağlantılardaki parametreli
// adreslerden geliyor: teşhis köprüsü `/?cihaz=…&ariza=…&k=…`, servis `/?servis=…&kaynak=…`, pazar süzgeci
// `/pazar?kategori=…`. Hepsi 200 ve canonical'ları `/` ya da `/pazar` (hata değil); Google bunları tek tek
// keşfetmesin diye bağlantı `nofollow` taşır.
// KURAL:
//   • Yalnız İÇ (`/…` ya da `https://www.benservis.com/…`) ve `?` içeren href. Dış bağlantıya dokunulmaz.
//   • Parametresiz iç bağlantıya (yazıdan yazıya, /pazar, /urun/<id>, /tamir/…) nofollow EKLENMEZ.
//   • Mevcut rel korunur (ör. "noopener"), nofollow ona eklenir; zaten varsa ikinci kez yazılmaz.
//   • href ve parametreler aynen kalır → ölçüm (`k=`, `kaynak=`) ve teşhis ön-doldurma değişmez.
// build-blog.mjs en sonda dist'teki tüm HTML'e uygular ve `nofollowDenetimi` ile sayar; ihlal varsa build durur.

const SITE = "https://www.benservis.com";
const A_ETIKET = /<a\b[^>]*>/gi;

export function hrefOku(etiket) {
  const m = etiket.match(/\shref\s*=\s*"([^"]*)"/i) || etiket.match(/\shref\s*=\s*'([^']*)'/i);
  return m ? m[1] : null;
}

export function icBaglanti(href) {
  if (typeof href !== "string") return false;
  if (href.startsWith("//")) return false;
  return href.startsWith("/") || href === SITE || href.startsWith(`${SITE}/`) || href.startsWith(`${SITE}?`);
}

export const parametreli = (href) => icBaglanti(href) && href.replace(/#.*$/, "").includes("?");

const nofollowVar = (etiket) => /\srel\s*=\s*(["'])[^"']*\bnofollow\b[^"']*\1/i.test(etiket);

// Tek <a …> etiketine nofollow ekler (gerekiyorsa). Diğer etiketler aynen döner.
export function etiketeNofollow(etiket) {
  if (!parametreli(hrefOku(etiket)) || nofollowVar(etiket)) return etiket;
  const rel = etiket.match(/\srel\s*=\s*(["'])([^"']*)\1/i);
  if (rel) {
    const yeni = `${rel[2].trim()} nofollow`.trim();
    return etiket.replace(rel[0], ` rel=${rel[1]}${yeni}${rel[1]}`);
  }
  return etiket.replace(/^<a\b/i, '<a rel="nofollow"');
}

export const nofollowEkle = (html) => html.replace(A_ETIKET, etiketeNofollow);

// Sayım: parametreli iç bağlantı (toplam / nofollow'suz) ve parametresiz iç bağlantı (toplam / nofollow'lu).
export function nofollowSay(html) {
  const s = { qsToplam: 0, qsNofollowsuz: 0, duzToplam: 0, duzNofollow: 0 };
  for (const etiket of html.match(A_ETIKET) || []) {
    const h = hrefOku(etiket);
    if (!icBaglanti(h)) continue;
    if (parametreli(h)) { s.qsToplam++; if (!nofollowVar(etiket)) s.qsNofollowsuz++; }
    else { s.duzToplam++; if (nofollowVar(etiket)) s.duzNofollow++; }
  }
  return s;
}
