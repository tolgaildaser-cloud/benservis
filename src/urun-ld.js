// src/urun-ld.js — pazar yedek parçasının Product JSON-LD'si: TEK KAYNAK (YK #179 ①, 20 Eki 2026).
// Build kabuğu (scripts/pazar-sayfalari.mjs → dist/urun/<id>/index.html) ve istemci (src/UrunDetay.jsx,
// kabuksuz yeni ürünler) bu dosyadan beslenir; iki yerin ayrı ayrı şema yazması kaldırıldı.
//
// NEDEN: dropship parçaların `stok` kolonu gerçek stok değil; vitrinde görünsün diye 10 yazılmıştı
// (20261010_pazar_ilk_katalog_37.sql). Şema bu uydurma sayıya bakıp InStock diyordu.
// KURAL:
//   • Stok SAYISI hiçbir yerde yayınlanmaz. availability yalnız iki gerçek durumu yansıtır:
//     satıcı ürünü kapattıysa (durum ≠ aktif ya da stok 0) OutOfStock; aksi halde tedarikçi deposundan
//     gönderilen dropship ürün = InStock + teslim süresi `shippingDetails` ile açıkça söylenir
//     (ekrandaki "tahmini 3 iş gününde kargoda" cümlesiyle aynı: hazırlık 1–3 iş günü). BackOrder/PreOrder
//     seçilmedi: ürün tedarikçide stokta, yalnız gönderim tedarikçiden yapılıyor.
//   • Fiyat ekranla birebir: ekran `fiyat` kolonunu (KDV dahil, tam TL) gösterir; şema aynı sayıyı yazar.
//   • Kargo: src/kargo.js (189 TL; ürün tek başına 3.000 TL'yi aşıyorsa 0 — sepet kuralıyla aynı).
import { KARGO_TL, UCRETSIZ_KARGO_ESIK_TL } from "./kargo.js";
import { mutlakGorselUrl } from "./pazar-gorsel.js";

export const SITE = "https://www.benservis.com";
export const HAZIRLIK_IS_GUNU = { min: 1, max: 3 }; // "tahmini 3 iş gününde kargoda"

// Ekranda yazan fiyatın sayısal hâli (UrunDetay: `urun.fiyat.toLocaleString("tr-TR")`).
export const ekranFiyati = (u) => Number(u?.fiyat);

export function urunSatista(u) {
  return (u?.durum == null || u.durum === "aktif") && Number(u?.stok) > 0;
}

export function urunTeklifi(u, { saticiAd = "Benservis", site = SITE } = {}) {
  const url = `${site}/urun/${u.id}`;
  const fiyat = ekranFiyati(u);
  const satista = urunSatista(u);
  return {
    "@type": "Offer",
    url,
    price: String(fiyat), // KDV dahil, ekrandakiyle aynı
    priceCurrency: "TRY",
    availability: satista ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    itemCondition: u.parca_durum === "cikma" ? "https://schema.org/UsedCondition" : "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: saticiAd },
    ...(satista ? {
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: String(fiyat > UCRETSIZ_KARGO_ESIK_TL ? 0 : KARGO_TL), currency: "TRY" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "TR" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: HAZIRLIK_IS_GUNU.min, maxValue: HAZIRLIK_IS_GUNU.max, unitCode: "DAY" },
        },
      },
    } : {}),
  };
}

// ek: { description, category } — kabuk kendi açıklama/kategori metnini verir; istemci açıklamayı kısaltır.
export function urunLdNesnesi(u, { saticiAd = "Benservis", site = SITE, description, category } = {}) {
  return {
    "@context": "https://schema.org", "@type": "Product",
    name: u.baslik,
    ...(description ? { description } : {}),
    ...(u.gorsel_url ? { image: [mutlakGorselUrl(u.gorsel_url, site)] } : {}),
    sku: u.id,
    url: `${site}/urun/${u.id}`,
    ...(category ? { category } : {}),
    offers: urunTeklifi(u, { saticiAd, site }),
  };
}
