// scripts/yazi-kaynak.mjs — yazının belge zincirindeki URL'leri okura açar (YK #201, 1 Kas 2026).
//
// Belge zinciri frontmatter'da serbest biçimli YAML yorumu olarak durur, gray-matter yorumları atar; bu
// yüzden ham dosyadan okunur. Yalnız doğrudan PDF belge adresi alınır (ürün sayfası ve kalıp adres değil);
// elendiği yazılı satırlar dayanak değildir. PDF yoksa dizi boş döner, sayfaya satır basılmaz.
const EN_COK = 5;
// 1 Kas ölçümünde açılmayan belgeler (404/403/zaman aşımı): okura kırık bağ verilmez.
const ACILMAYAN = new Set([
  "https://download.grundig.com/Download.UsageManualsGrundig/tr_TR_202012281339697_User%20Manual%20-%20File%20(Long)tr_TR.pdf",
  "https://download.grundig.com/Download.UsageManualsGrundig/tr_TR_Manual_7167420600_tr_TR20210319-141313-819.pdf",
  "https://www.ferroli.com.tr/docs/bluehelix-tech-kullanim-kilavuzu-28d5d.pdf",
  "https://www.electrolux.com.tr/services/eml/asset/ad871a8b-e93c-46e3-b647-bd0475695b2c/E4RM3Q/2408314AXD/PDF/2408314AXD.pdf",
  "https://www.altus.com.tr/content/dam/altus-rainbow-tr-aem/altus-rainbow-tr-aemProductCatalog/product-documents/457100031500-AL-CM-81050/tr-TR-457100031500-MDM2-USER-MANUAL-FILE-tr-TR.pdf",
  "https://www.electrolux.com.tr/services/eml/asset/b2ae98c1-3fd9-40a1-83fc-72a427d6db65/E4RM3Q/103f2880-7d03-46f7-bfd7-8755d9984a60/ORIGINAL/103f2880-7d03-46f7-bfd7-8755d9984a60.pdf",
  "https://www.ferroli.com.tr/docs/leone-kullanim-kilavuzu-cg9a8.pdf",
  "https://www.hafele.com.tr/prod-live/static/WFS/Haefele-HTR-Site/-/Haefele/tr_TR/pim/documents/man-doc-04871582.pdf",
  "https://www.electrolux.com.tr/services/eml/asset/11ec906c-2b6e-4688-bd4b-b8812b6673fd/E4RM3Q/3cab0ab9-beb3-464f-8642-21303ec7754e/ORIGINAL/3cab0ab9-beb3-464f-8642-21303ec7754e.pdf",
  "https://www.ferroli.com.tr/docs/bluehelix-trio-kullanim-kilavuzu-715g5.pdf"
]);
const ELENEN = /bilerek|elen|alınmadı|kullanılmadı|\b40[34]\b|başka model/i;

export function kaynakUrlleri(ham) {
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(ham)?.[1] || "";
  const urller = [];
  for (const satir of fm.split(/\r?\n/)) {
    if (!satir.startsWith("#") || ELENEN.test(satir)) continue;
    for (const m of satir.matchAll(/https?:\/\/[^\s<>"'`]+/g)) {
      const url = m[0].replace(/[.,;:·)\]]+$/, "");
      if (!/\.pdf(\?|$)/i.test(url) || /benservis\.com|…/i.test(url) || ACILMAYAN.has(url)) continue;
      if (!urller.includes(url)) urller.push(url);
    }
  }
  return urller.slice(0, EN_COK);
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const alan = (url) => new URL(url).hostname.replace(/^www\./, "");

export function kaynakSatiri(urller) {
  if (!urller?.length) return "";
  const sayac = {};
  const baglar = urller.map((u) => {
    const a = alan(u); sayac[a] = (sayac[a] || 0) + 1;
    return `<a href="${esc(u)}" target="_blank" rel="nofollow noopener noreferrer">${esc(a)}${sayac[a] > 1 ? ` (${sayac[a]})` : ""}</a>`;
  });
  return `<p class="yazi-kaynak">Kaynak: ${baglar.join(" · ")}</p>`;
}
