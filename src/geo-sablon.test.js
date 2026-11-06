// src/geo-sablon.test.js — YK #214 (6 Kas 2026): blog şablonu "Kısa cevap" kutusu, "Son güncelleme" satırı, sss → faq.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
const k = fs.readFileSync(new URL("../scripts/build-blog.mjs", import.meta.url), "utf8");
describe("GEO şablonu", () => {
  it("kisaCevap kutusu yazı başının hemen ardından basılır", () => {
    expect(k).toMatch(/\$\{yaziBasi\(p\)\}\$\{kisaCevapKutusu\(p\)\}/);
    expect(k).toMatch(/class="kisa-cevap"/);
  });
  it("Son güncelleme yalnız updated tarihten farklıysa", () => {
    expect(k).toMatch(/Son güncelleme: \$\{ayYil\(p\.updated\)\}/);
    expect(k).toMatch(/dateModified: p\.updated \|\| p\.date/);
  });
  it("sss alanı faq'a bağlanır (FAQPage JSON-LD tek kaynaktan)", () => {
    expect(k).toMatch(/data\.faq = data\.sss/);
  });
});
