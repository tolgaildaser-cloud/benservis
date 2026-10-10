// src/pazar-hukuk.test.js — pazaryeri e-ticaret belgeleri kilidi (10 Eki 2026).
//
// NEDEN VAR: mesafeli satışta satıcının unvanı, MERSİS'i, açık adresi, telefonu ve e-postası
// yasal zorunluluk (Mesafeli Sözleşmeler Yönetmeliği md.5/1-b). Satıcı alanı boşken belge
// yayına çıkarsa sözleşme eksik kurulur. Bu dosya CI'ı o durumda KIRMIZIDA tutar.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { SATICI, eksikSaticiAlanlari, PAZAR_HUKUK_SAYFALARI } from "../scripts/pazar-hukuk.mjs";

describe("pazaryeri belgeleri", () => {
  it("satıcının zorunlu alanları dolu (boşsa yayına çıkılmaz)", () => {
    expect(eksikSaticiAlanlari()).toEqual([]);
  });

  it("dört belge var; her biri satıcı tablosu ve çapraz bağlantı taşıyor", () => {
    expect(PAZAR_HUKUK_SAYFALARI.map((h) => h.dizin)).toEqual([
      "on-bilgilendirme-formu", "mesafeli-satis-sozlesmesi", "iade-ve-cayma", "pazaryeri-aydinlatma-metni",
    ]);
    for (const h of PAZAR_HUKUK_SAYFALARI) {
      expect(h.govde, h.dizin).toContain(SATICI.mersis);
      expect(h.govde, h.dizin).toContain('href="/mesafeli-satis-sozlesmesi/"');
    }
  });

  it("yasal süreler: 14 gün cayma, 10 gün iade gönderimi, 14 gün para iadesi, 30 gün teslim üst sınırı, 3 iş günü kargo", () => {
    const m = PAZAR_HUKUK_SAYFALARI.find((h) => h.dizin === "mesafeli-satis-sozlesmesi").govde;
    expect(m).toMatch(/14 gün içinde herhangi bir gerekçe/);
    expect(m).toMatch(/10 gün içinde ürünü/);
    expect(m).toMatch(/30 günü aşamaz/);
    expect(m).toMatch(/3 \(üç\) iş günü/);
  });

  it("belgeler noindex ve sitemap dışı; vitrin ve sepet bağlantı veriyor", () => {
    const b = fs.readFileSync("scripts/build-blog.mjs", "utf8");
    const blok = b.slice(b.indexOf("for (const h of PAZAR_HUKUK_SAYFALARI)"));
    expect(blok.slice(0, 600)).toContain('robots: "noindex,follow"');
    expect(b).not.toMatch(/PAZAR_HUKUK_SAYFALARI\.map\(\(h\) => \(\{ loc/);
    expect(fs.readFileSync("src/PazarVitrin.jsx", "utf8")).toContain('href="/mesafeli-satis-sozlesmesi/"');
    const sepet = fs.readFileSync("src/Sepet.jsx", "utf8");
    expect(sepet).toContain('href="/on-bilgilendirme-formu/"');
    expect(sepet).toMatch(/useState\(false\)/); // onay kutusu işaretsiz başlar
    expect(sepet).toMatch(/kargoSatiri && !sozlesmeOnay/);
  });
});
