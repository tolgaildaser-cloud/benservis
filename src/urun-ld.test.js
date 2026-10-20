// src/urun-ld.test.js — YK #179 ①: Product JSON-LD tek kaynak, uydurma stok yok, fiyat ekranla aynı.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { urunLdNesnesi, urunTeklifi, urunSatista, ekranFiyati } from "./urun-ld.js";
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
