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
import { MARKALAR } from "./constants.js";

export const SITE = "https://www.benservis.com";
export const HAZIRLIK_IS_GUNU = { min: 1, max: 3 }; // "tahmini 3 iş gününde kargoda"
// Kargoda geçen süre: /iade-ve-cayma/ "kargo firmasına göre teslim genellikle 1-3 iş günü daha sürer" (25 Eki, Tolga).
export const KARGODA_IS_GUNU = { min: 1, max: 3 };

// İade politikası (25 Eki 2026, YK8: GSC "Satıcı girişleri" raporu — `hasMerchantReturnPolicy` eksik alanı).
// Değerler canlı /iade-ve-cayma/ belgesiyle birebir (#88, uydurma yok): "Ürünü teslim aldığınız günden itibaren
// 14 gün içinde … cayma" · "Bu kargo [anlaşmalı kargo] ile gönderimde iade kargo ücreti ödemezsiniz" · ürün kargoyla
// geri gönderilir. Ürün bazlı istisna (ör. baca ürününde "yalnız ambalajı açılmamış") şemaya taşınmaz;
// genel politika + belge bağlantısı verilir.
export const IADE_GUNU = 14;
export const IADE_BELGESI = "/iade-ve-cayma/";
export const iadePolitikasi = (site = SITE) => ({
  "@type": "MerchantReturnPolicy",
  applicableCountry: "TR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: IADE_GUNU,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
  merchantReturnLink: `${site}${IADE_BELGESI}`,
});

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
    hasMerchantReturnPolicy: iadePolitikasi(site),
    ...(satista ? {
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: String(fiyat > UCRETSIZ_KARGO_ESIK_TL ? 0 : KARGO_TL), currency: "TRY" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "TR" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: HAZIRLIK_IS_GUNU.min, maxValue: HAZIRLIK_IS_GUNU.max, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: KARGODA_IS_GUNU.min, maxValue: KARGODA_IS_GUNU.max, unitCode: "DAY" },
        },
      },
    } : {}),
  };
}

// Marka (YK #191, 27 Eki 2026 — Merchant Center `brand`): YALNIZ gerçek veriden. Pazar tablosunda marka
// kolonu yok; tek kaynak ürün başlığı. Başlık bir üretici adıyla BAŞLIYORSA ("Vestel klima filtresi",
// "Daikin kombi baca seti") o marka yazılır. "… — Arçelik uyumlu" yalnız uyumluluk söyler, üreticiyi değil
// → marka YAZILMAZ; "Üniversal" ve markasız parçada da alan yoktur. "Benservis" satıcıdır, marka değil.
const MARKA_SIRALI = [...MARKALAR].sort((a, b) => b.length - a.length); // "Mitsubishi Electric" önce
export function urunMarkasi(baslik) {
  const b = String(baslik || "").trim().toLocaleLowerCase("tr");
  for (const m of MARKA_SIRALI) {
    const k = m.toLocaleLowerCase("tr");
    if (b.startsWith(k) && !/[\p{L}\p{N}]/u.test(b.charAt(k.length))) return m;
  }
  return null;
}

// ek: { description, category } — kabuk kendi açıklama/kategori metnini verir; istemci açıklamayı kısaltır.
export function urunLdNesnesi(u, { saticiAd = "Benservis", site = SITE, description, category } = {}) {
  return {
    "@context": "https://schema.org", "@type": "Product",
    name: u.baslik,
    ...(description ? { description } : {}),
    ...(u.gorsel_url ? { image: [mutlakGorselUrl(u.gorsel_url, site)] } : {}),
    sku: u.id,
    ...(urunMarkasi(u.baslik) ? { brand: { "@type": "Brand", name: urunMarkasi(u.baslik) } } : {}),
    url: `${site}/urun/${u.id}`,
    ...(category ? { category } : {}),
    offers: urunTeklifi(u, { saticiAd, site }),
  };
}
