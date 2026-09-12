// src/donusum-kapisi.test.js — "mesaj niyete eşlenir" deneyinin kilidi (12 Eyl 2026).
//
// NEDEN VAR: blog→teşhis dönüşümü sınıfa göre 4 kat farklı ölçüldü (hata kodu/sembol %0,6 ·
// arıza %2,6 · bilgi %1,7) ve köprülerin YERİ üç sınıfta aynıydı. Deney TEK değişken taşır:
// yalnız hata kodu/sembol sınıfında teşhis düğmesinin METNİ. Bu dosya deneyin temiz kalmasını
// kilitler — kontrol grubunun metni sessizce değişirse 4 hafta sonraki kıyas anlamsızlaşır.
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

const kaynak = readFileSync(new URL("../scripts/build-blog.mjs", import.meta.url), "utf8");
const sabit = (ad) => {
  const m = kaynak.match(new RegExp(`const ${ad} = "([^"]+)"`));
  if (!m) throw new Error(`${ad} build-blog.mjs içinde bulunamadı`);
  return m[1];
};
const DESEN = (() => {
  const m = kaynak.match(/const KOD_SEMBOL_DESENI = \/(.+)\/;/);
  if (!m) throw new Error("KOD_SEMBOL_DESENI bulunamadı");
  return new RegExp(m[1]);
})();

describe("deney sınıfı", () => {
  it("hata kodu ve sembol sayfalarını yakalar", () => {
    for (const s of ["bosch-camasir-makinesi-hata-kodlari", "siemens-bulasik-makinesi-e15-hatasi",
      "arcelik-kurutma-makinesi-sembolleri-ve-anlamlari", "camasir-makinesi-hata-kodlari"]) {
      expect(DESEN.test(s), s).toBe(true);
    }
  });
  it("arıza ve bilgi sayfalarını KONTROL grubunda bırakır", () => {
    for (const s of ["camasir-makinesine-cisim-kacti", "buzdolabi-kac-derece-olmali", "mikrodalga-isitmiyor",
      "kurutma-makinesi-su-tanki-dolu-uyarisi", "camasir-makinesi-program-sureleri"]) {
      expect(DESEN.test(s), s).toBe(false);
    }
  });
});

describe("tek değişken", () => {
  it("kontrol grubunun metinleri DEĞİŞMEDİ (kıyasın dayanağı)", () => {
    expect(sabit("TESHIS_ETIKET")).toBe("Tahmini maliyeti ücretsiz öğren →");
    expect(sabit("STICKY_ETIKET")).toBe("Tahmini fiyatı gör →");
  });
  it("deney metni fiyat vaat etmez (#46)", () => {
    expect(sabit("TESHIS_ETIKET_KOD")).not.toMatch(/fiyat|maliyet|TL|₺|\d/i);
  });
  it("üç köprü noktası da etiketi sınıfa göre seçiyor", () => {
    expect(kaynak).toMatch(/data-kopru="ilk-ekran"\$\{mesajOzniteligi\(p\)\}>\$\{teshisEtiketi\(p\)\}/);
    expect(kaynak).toMatch(/data-kopru="son-kart"\$\{mesajOzniteligi\(p\)\}>\$\{teshisEtiketi\(p\)\}/);
    expect(kaynak).toMatch(/data-kopru="sticky"\$\{mesajOzniteligi\(p\)\}>\$\{stickyEtiketi\(p\)\}/);
  });
  it("adres üreticileri deneye dokunmuyor (ölçüm sürekliliği)", () => {
    // Deney yalnız metni değiştirir; href hâlâ aynı kopruHref(p) → k=blog-<slug> seri kopmaz.
    const ilk = kaynak.match(/data-kopru="ilk-ekran"/g) || [];
    expect(ilk.length).toBe(1);
    expect(kaynak).toMatch(/href="\$\{kopruHref\(p\)\}" data-kopru="ilk-ekran"/);
    expect(kaynak).toMatch(/href="\$\{kopruHref\(p\)\}" data-kopru="sticky"/);
  });
});
