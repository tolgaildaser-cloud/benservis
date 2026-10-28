// scripts/merchant-feed.mjs — Google Merchant Center ürün feed'i (YK #191, 28 Eki 2026).
//
// NEDEN: Merchant hesabında "web sitesinden otomatik" ürün kaynağı sunulmuyor; seçilen yol "dosya,
// planlanmış getirme (URL)". Feed build'de `dist/merchant-feed.xml` olarak basılır (RSS 2.0 + g: alanları).
// TEK KAYNAK: /urun kabuklarını basan aynı ürün listesi (pazarUrunleriniGetir) ve aynı şema fonksiyonları
// (src/urun-ld.js) — feed ile sayfadaki Product JSON-LD ayrışamaz.
// KURALLAR:
//   • Yalnız satıştaki ürün (aktif + stok > 0) girer; liste zaten öyle süzülüyor, ayrıca urunSatista ile kesilir.
//   • price = ekrandaki KDV dahil fiyat, "849.00 TRY".
//   • brand yalnız başlık bir markayla başlıyorsa (urunMarkasi); GTIN/MPN yok → identifier_exists = no (hepsinde).
//   • shipping sabit 189 TRY. "3.000 TL üstü sipariş ücretsiz" kuralı sipariş toplamına bakar, ürün bazında
//     kurulamaz; ürün fiyatı 3.000'i aşıyor diye 0 yazmak yanlış olur → eşik Merchant kargo ayarında kurulur.
import { urunTeklifi, urunSatista, ekranFiyati, urunMarkasi, SITE } from "../src/urun-ld.js";
import { mutlakGorselUrl } from "../src/pazar-gorsel.js";
import { KARGO_TL } from "../src/kargo.js";
import { urunAciklamasi } from "./pazar-sayfalari.mjs";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c]));
const para = (n) => `${Number(n).toFixed(2)} TRY`;

export function feedOgesi(u, site = SITE) {
  const teklif = urunTeklifi(u, { site });
  const marka = urunMarkasi(u.baslik);
  const alanlar = [
    ["g:id", u.id],
    ["title", u.baslik],
    ["description", urunAciklamasi(u)],
    ["link", `${site}/urun/${u.id}`],
    ...(u.gorsel_url ? [["g:image_link", mutlakGorselUrl(u.gorsel_url, site)]] : []),
    ["g:availability", teklif.availability.endsWith("InStock") ? "in_stock" : "out_of_stock"],
    ["g:price", para(ekranFiyati(u))],
    ["g:condition", teklif.itemCondition.endsWith("UsedCondition") ? "used" : "new"],
    ...(marka ? [["g:brand", marka]] : []),
    ["g:identifier_exists", "no"],
  ];
  return `<item>\n${alanlar.map(([k, v]) => `  <${k}>${esc(v)}</${k}>`).join("\n")}\n` +
    `  <g:shipping><g:country>TR</g:country><g:price>${para(KARGO_TL)}</g:price></g:shipping>\n</item>`;
}

export function merchantFeedXml(urunler, site = SITE) {
  const satista = (urunler || []).filter(urunSatista);
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">\n<channel>\n` +
    `<title>Benservis Pazaryeri</title>\n<link>${site}/pazar</link>\n` +
    `<description>Benservis yedek parça pazaryeri ürünleri (KDV dahil fiyat)</description>\n` +
    satista.map((u) => feedOgesi(u, site)).join("\n") +
    `\n</channel>\n</rss>\n`;
}
