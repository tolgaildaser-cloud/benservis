// src/urun-ld.test.js — YK #179 ①: Product JSON-LD tek kaynak, uydurma stok yok, fiyat ekranla aynı.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { urunLdNesnesi, urunTeklifi, urunSatista, ekranFiyati, IADE_GUNU } from "./urun-ld.js";
import { urunLd } from "../scripts/pazar-sayfalari.mjs";

const u = { id: "a1", baslik: "Kombi pompası", fiyat: 1029, stok: 10, durum: "aktif", parca_durum: "yeni", gorsel_url: "/pazar-gorsel/a1.webp" };

describe("Product teklifi", () => {
  it("stok SAYISI yayınlanmaz; dropship InStock + 1–3 iş günü hazırlık", () => {
    const o = urunTeklifi(u);
    expect(JSON.stringify(o)).not.toMatch(/"10"|inventoryLevel|stok/);
    expect(o.availability).toBe("https://schema.org/InStock");
    expect(o.shippingDetails.deliveryTime.handlingTime).toMatchObject({ minValue: 1, maxValue: 3, unitCode: "DAY" });
    expect(o.shippingDetails.shippingDestination.addressCountry).toBe("TR");
  });
  it("fiyat ekrandaki sayıyla birebir (KDV dahil)", () => {
    expect(urunTeklifi(u).price).toBe(String(ekranFiyati(u)));
    expect(urunTeklifi({ ...u, fiyat: "1499" }).price).toBe("1499");
  });
  it("kargo: 189 TL, 3.000 TL üzeri ürün 0", () => {
    expect(urunTeklifi(u).shippingDetails.shippingRate.value).toBe("189");
    expect(urunTeklifi({ ...u, fiyat: 3200 }).shippingDetails.shippingRate.value).toBe("0");
    expect(urunTeklifi({ ...u, fiyat: 3000 }).shippingDetails.shippingRate.value).toBe("189");
  });
  it("satıcı kapattıysa OutOfStock, kargo bilgisi yok", () => {
    for (const k of [{ stok: 0 }, { durum: "pasif" }]) {
      const o = urunTeklifi({ ...u, ...k });
      expect(urunSatista({ ...u, ...k })).toBe(false);
      expect(o.availability).toBe("https://schema.org/OutOfStock");
      expect(o.shippingDetails).toBeUndefined();
    }
  });
});

describe("iade politikası (GSC Satıcı girişleri: hasMerchantReturnPolicy)", () => {
  const u = { id: "u1", baslik: "Parça", fiyat: 509, stok: 10, durum: "aktif" };
  it("teklifte belgeyle birebir iade politikası: TR, 14 gün, kargoyla, ücretsiz, belge bağlantısı", () => {
    expect(urunTeklifi(u).hasMerchantReturnPolicy).toEqual({
      "@type": "MerchantReturnPolicy",
      applicableCountry: "TR",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 14,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
      merchantReturnLink: "https://www.benservis.com/iade-ve-cayma/",
    });
  });
  it("satıştan kalkmış üründe de var; build kabuğu da aynı alanı basar", () => {
    expect(urunTeklifi({ ...u, durum: "pasif" }).hasMerchantReturnPolicy.merchantReturnDays).toBe(IADE_GUNU);
    expect(JSON.stringify(urunLd(u))).toContain("hasMerchantReturnPolicy");
  });
  it("iade süresi canlı belge metniyle tutarlı (pazar-hukuk.mjs)", () => {
    const belge = fs.readFileSync("scripts/pazar-hukuk.mjs", "utf8");
    expect(belge).toMatch(new RegExp(`${IADE_GUNU} gün`));
  });
});

describe("teslim süresi (Rich Results: transitTime)", () => {
  it("hazırlık 1–3 + kargoda 1–3 iş günü; belge cümlesiyle tutarlı", () => {
    const d = urunTeklifi({ id: "u1", baslik: "P", fiyat: 509, stok: 10, durum: "aktif" }).shippingDetails.deliveryTime;
    expect(d.transitTime).toEqual({ "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" });
    expect(fs.readFileSync("scripts/pazar-hukuk.mjs", "utf8")).toMatch(/1-3 iş günü/);
  });
});

describe("tek kaynak", () => {
  it("build kabuğu (pazar-sayfalari.mjs) teklifi aynı yardımcıdan alır", () => {
    const k = urunLd(u);
    expect(k.offers).toEqual(urunTeklifi(u, { saticiAd: "Benservis" }));
    expect(k.image).toEqual(["https://www.benservis.com/pazar-gorsel/a1.webp"]);
    expect(urunLdNesnesi(u).offers).toEqual(k.offers);
  });
  it("UrunDetay ve pazar-sayfalari kendi availability/price satırını yazmaz", () => {
    for (const f of ["src/UrunDetay.jsx", "scripts/pazar-sayfalari.mjs"]) {
      const s = fs.readFileSync(f, "utf8");
      expect(s, f).toContain("urunLdNesnesi");
      expect(s, f).not.toMatch(/schema\.org\/InStock|availability:/);
    }
  });
});

// YK #191 (27 Eki 2026): Merchant Center `brand` yalnız gerçek veriden — başlık markayla başlıyorsa.
describe("Product marka", () => {
  const ld = (baslik) => urunLdNesnesi({ ...u, baslik });
  it("başlık bir üretici adıyla başlıyorsa brand o markadır", () => {
    expect(ld("Vestel klima filtresi — Vestel uyumlu (42148439)").brand).toEqual({ "@type": "Brand", name: "Vestel" });
    expect(ld("Daikin kombi baca seti — Daikin yoğuşmalı uyumlu").brand?.name).toBe("Daikin");
  });
  it("yalnız 'X uyumlu', 'Üniversal' ya da markasız başlıkta brand yazılmaz; Benservis marka değildir", () => {
    for (const b of ["Buzdolabı contası — Arçelik uyumlu (49377326)", "Kombi baca dirseği 45 derece — Üniversal yoğuşmalı", "Kombi pompası", "Arçelikler deneme"])
      expect(ld(b), b).not.toHaveProperty("brand");
    expect(JSON.stringify(ld("Vestel klima filtresi").brand)).not.toContain("Benservis");
  });
});
