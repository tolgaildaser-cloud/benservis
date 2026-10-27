// src/pazar-hukuk.test.js — pazaryeri e-ticaret belgeleri kilidi (10 Eki 2026).
//
// NEDEN VAR: mesafeli satışta satıcının unvanı, MERSİS'i, açık adresi, telefonu ve e-postası
// yasal zorunluluk (Mesafeli Sözleşmeler Yönetmeliği md.5/1-b). Satıcı alanı boşken belge
// yayına çıkarsa sözleşme eksik kurulur. Bu dosya CI'ı o durumda KIRMIZIDA tutar.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { SATICI, eksikSaticiAlanlari, PAZAR_HUKUK_SAYFALARI, PAZAR_HUKUK_GUNCELLEME } from "../scripts/pazar-hukuk.mjs";
import { KARGO_TL, UCRETSIZ_KARGO_ESIK_TL } from "../src/kargo.js";
import { urunTeklifi } from "../src/urun-ld.js";

describe("pazaryeri belgeleri", () => {
  it("YK #175: dört belgede taslak ibaresi yok; güncelleme tarihi basılı", () => {
    for (const h of PAZAR_HUKUK_SAYFALARI) {
      expect(`${h.title} ${h.desc} ${h.govde}`.toLocaleLowerCase("tr"), h.dizin).not.toContain("taslak");
      expect(h.govde, h.dizin).not.toContain("hukuki kontrolden geçirilecektir");
      expect(h.govde, h.dizin).toContain(`Son güncelleme: ${PAZAR_HUKUK_GUNCELLEME}`);
    }
  });

  it("YK #188: dört belgede satıcı tablosunun ilk satırı İşletme adı: Benservis; yasal unvan altında aynen", () => {
    expect(SATICI.isletmeAdi).toBe("Benservis");
    for (const h of PAZAR_HUKUK_SAYFALARI) {
      const i = h.govde.indexOf("<tr><th>İşletme adı</th><td>Benservis</td></tr>");
      const u = h.govde.indexOf(`<tr><th>Unvan</th><td>${SATICI.unvan}</td></tr>`);
      expect(i, h.dizin).toBeGreaterThan(-1);
      expect(u, h.dizin).toBeGreaterThan(i);
      expect(SATICI.unvan).toMatch(/^Orient Global/);
    }
  });

  it("YK #188 ek: ikinci el detayının satıcı kutusunda yalnız Benservis; unvan ve adres yok", () => {
    const d = fs.readFileSync("src/IkinciElDetay.jsx", "utf8");
    expect(d).toContain("<b>Benservis</b>");
    expect(d).not.toMatch(/SATICI\.unvan|SATICI\.adres/);
  });

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
    expect(sepet).toMatch(/pazarSiparisi && !sozlesmeOnay/);
  });

  // YK #191 (27 Eki 2026, Merchant Center): sayfa ile Product şeması aynı kargo kuralını söyler — tek kaynak src/kargo.js.
  it("iade/teslimat sayfası kargo tutarını ve ücretsiz eşiği kargo.js'den yazar; şema aynı sayılarla", () => {
    const iade = PAZAR_HUKUK_SAYFALARI.find((h) => h.dizin === "iade-ve-cayma").govde;
    expect(iade).toContain(`${KARGO_TL} TL`);
    expect(iade).toContain(`${UCRETSIZ_KARGO_ESIK_TL.toLocaleString("tr-TR")} TL'yi aşarsa kargo ücretsizdir`);
    const ucret = (fiyat) => urunTeklifi({ id: "x", baslik: "x", fiyat, stok: 1, durum: "aktif" }).shippingDetails.shippingRate.value;
    expect(ucret(UCRETSIZ_KARGO_ESIK_TL)).toBe(String(KARGO_TL));
    expect(ucret(UCRETSIZ_KARGO_ESIK_TL + 1)).toBe("0");
  });

  // YK #191: canlıda kart seçeneği yok (#174) — belgeler kartı koşulsuz vaat etmez.
  it("ödeme metni canlıyla uyumlu: havale/EFT yazılı, kart yalnız 'açıldığında' koşuluyla", () => {
    for (const h of PAZAR_HUKUK_SAYFALARI) {
      expect(h.govde, h.dizin).not.toMatch(/(?<!açıldığında )kart bilgileri (lisanslı )?ödeme kuruluşu/i);
    }
    for (const d of ["mesafeli-satis-sozlesmesi", "on-bilgilendirme-formu"]) {
      expect(PAZAR_HUKUK_SAYFALARI.find((h) => h.dizin === d).govde, d).toMatch(/havale \/ EFT/);
    }
  });
});

// YK #191 (27 Eki 2026, Merchant Center iletişim bilgisi): künye Hakkımızda yazısında; değerler SATICI ile birebir.
describe("Hakkımızda künyesi", () => {
  it("unvan, MERSİS, adres, telefon ve e-posta SATICI'daki değerlerle aynı", () => {
    const md = fs.readFileSync("content/blog/hakkimizda.md", "utf8");
    for (const k of ["isletmeAdi", "unvan", "mersis", "adres", "telefon", "eposta"]) expect(md, k).toContain(SATICI[k]);
  });
});
