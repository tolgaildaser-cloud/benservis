// src/icerik-cihazlari.test.js — YK #149 (30 Eyl 2026): içerik kategorisi ≠ teşhis cihazı.
//
// NEDEN: "Küçük Ev Aletleri" blog / tamir merkezi / kılavuzlar için açıldı ama TEŞHİSE GİRMEZ
// (Tolga: "teşhis yapmasak da sitenin hit alması için önemli"). İki liste bir gün tek listeye
// indirilirse kategori sessizce teşhis formuna, tarife paneline, ilan ve DPP ekranlarına düşer;
// formda tarifesi ve belirti listesi olmayan bir cihaz açılır. Bu dosya o sızıntının kapısıdır.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import {
  CIHAZLAR, ICERIK_CIHAZLARI, TESHISSIZ_CIHAZLAR, CIHAZ_MARKALARI, teshisVarMi, cihazSlug,
} from "./constants.js";
import { HATA_KODU_KATMANI } from "./hata-kodlari.js";
import { kilavuzKayitlari } from "./kullanim-kilavuzlari.js";

const oku = (yol) => fs.readFileSync(new URL(yol, import.meta.url), "utf8");

describe("içerik cihazları — teşhissiz kategori", () => {
  it("teşhis cihaz listesi değişmedi: 12 cihaz, küçük ev aletleri yok", () => {
    expect(CIHAZLAR).toHaveLength(12);
    expect(CIHAZLAR).not.toContain("Küçük Ev Aletleri");
  });

  it("içerik listesi = teşhis cihazları + teşhissiz kategoriler, sıra korunur", () => {
    expect(ICERIK_CIHAZLARI).toEqual([...CIHAZLAR, ...TESHISSIZ_CIHAZLAR]);
    expect(TESHISSIZ_CIHAZLAR).toContain("Küçük Ev Aletleri");
    for (const ad of TESHISSIZ_CIHAZLAR) expect(teshisVarMi(ad), ad).toBe(false);
    for (const ad of CIHAZLAR) expect(teshisVarMi(ad), ad).toBe(true);
  });

  it("teşhissiz kategorinin adresi sabit: kucuk-ev-aletleri", () => {
    expect(cihazSlug("Küçük Ev Aletleri")).toBe("kucuk-ev-aletleri");
    const sluglar = ICERIK_CIHAZLARI.map(cihazSlug);
    expect(new Set(sluglar).size).toBe(sluglar.length); // çakışan adres yok
  });

  it("form ve panel bileşenleri içerik listesini KULLANMAZ", () => {
    // Cihaz seçtiren her yüzey. Buraya ICERIK_CIHAZLARI girerse teşhissiz kategori forma düşer.
    const yuzeyler = [
      "./App.jsx", "./AnaSayfaVitrin.jsx", "./IlanOlustur.jsx", "./IlanListesi.jsx",
      "./DPPEkrani.jsx", "./TarifeAdmin.jsx", "./ServisKayit.jsx", "./hero-tahmin.js",
    ];
    for (const y of yuzeyler) {
      const src = oku(y);
      expect(src, y).not.toContain("ICERIK_CIHAZLARI");
      expect(src, y).not.toContain("TESHISSIZ_CIHAZLAR");
    }
  });

  it("tamir ve kılavuz tablolarındaki her cihaz adı içerik listesinde", () => {
    for (const ad of Object.keys(HATA_KODU_KATMANI)) expect(ICERIK_CIHAZLARI, ad).toContain(ad);
    for (const ad of Object.keys(CIHAZ_MARKALARI)) expect(ICERIK_CIHAZLARI, ad).toContain(ad);
    for (const k of kilavuzKayitlari()) expect(ICERIK_CIHAZLARI, k.cihaz).toContain(k.cihaz);
    // Teşhissiz kategori iki tabloda da ANAHTAR olarak var (boş olabilir): föy geldiğinde
    // PAZ'ın "Küçük Ev Aletleri" anahtarı bilinmeyen cihaz diye düşmesin.
    for (const ad of TESHISSIZ_CIHAZLAR) {
      expect(HATA_KODU_KATMANI, ad).toHaveProperty([ad]);
      expect(CIHAZ_MARKALARI, ad).toHaveProperty([ad]);
    }
  });

  it("build-blog üç merkezi içerik listesinden kurar ve teşhissiz yazıda teşhis kapısı basmaz", () => {
    const src = oku("../scripts/build-blog.mjs");
    expect(src).toMatch(/const KATEGORILER = ICERIK_CIHAZLARI\.map\(/);
    // Kapsam kapısı teşhissiz kategoriyi tanır (bilinmeyen kategori diye build'i durdurmaz)…
    expect(src).toMatch(/KOPRU_CIHAZSIZ\.has\(k\) \|\| TESHISSIZ_KAT\.has\(k\)/);
    // …ve üç yazı kapısının üçü de teşhissiz dala sahiptir (ilk ekran · son kart · sabit bant).
    expect(src).toMatch(/const KOPRU_SATIRI = \(p\) => \{\s*if \(teshissizYazi\(p\)\)/);
    expect(src).toMatch(/const YAZI_CTA = \(p\) => \{[\s\S]{0,200}if \(teshissizYazi\(p\)\)/);
    expect(src).toMatch(/const STICKY = \(p\) => teshissizYazi\(p\) \? "" :/);
  });
});
