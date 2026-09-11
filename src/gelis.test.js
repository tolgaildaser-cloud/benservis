// src/gelis.test.js — "nereden geldi" etiketinin regresyon kilidi (11 Eyl 2026).
//
// NEDEN VAR: etiket iki okuyucuda iki ayrı parametreden okunuyordu (App `kaynak`, servis
// ekranı `k`) ve blog köprüleri yalnız `k` basıyordu → 15 Ağu–11 Eyl'de `diagnose_start`
// 72/72, `servis_click` 18/18 olay atıfsız düştü. Build yeşil, test yeşil, yüzey ölü —
// o yüzden kilit DAVRANIŞI ve SÖZLEŞMEYİ tutar.
import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { gelisEtiketi, GELIS_DESENI } from "./gelis.js";

const oku = (yol) => readFileSync(new URL(`../${yol}`, import.meta.url), "utf8");

describe("gelisEtiketi", () => {
  it("blog köprüsünün yalnız `k` taşıyan adresini okur", () => {
    expect(gelisEtiketi("?cihaz=kurutma-makinesi&ariza=hata-kodu-veriyor&k=blog-arcelik-kurutma-makinesi-sembolleri-ve-anlamlari"))
      .toBe("blog-arcelik-kurutma-makinesi-sembolleri-ve-anlamlari");
  });
  it("`kaynak` varsa önceliklidir (tamir hunisi)", () => {
    expect(gelisEtiketi("?kaynak=tamir-camasir-makinesi&k=blog-x")).toBe("tamir-camasir-makinesi");
  });
  it("geçersiz `kaynak` `k`'yi engellemez", () => {
    expect(gelisEtiketi("?kaynak=Serbest%20Metin&k=blog-x")).toBe("blog-x");
  });
  it("serbest metin, büyük harf ve 60 karakter üstü atılır", () => {
    expect(gelisEtiketi("?k=ahmet@ornek.com")).toBe("");
    expect(gelisEtiketi("?kaynak=Blog-X")).toBe("");
    expect(gelisEtiketi(`?k=${"a".repeat(61)}`)).toBe("");
    expect(gelisEtiketi(`?k=${"a".repeat(60)}`)).toBe("a".repeat(60));
  });
  it("parametre yoksa ya da adres bozuksa boş döner", () => {
    expect(gelisEtiketi("")).toBe("");
    expect(gelisEtiketi(undefined)).toBe("");
    expect(gelisEtiketi("?servis=1")).toBe("");
  });
});

describe("sözleşme — üreten taraf ile okuyan taraf", () => {
  it("külliyattaki HER yazının `blog-<slug>` etiketi desenden geçer", () => {
    const sluglar = readdirSync(new URL("../content/blog/", import.meta.url))
      .filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
    expect(sluglar.length).toBeGreaterThan(0);
    const dusen = sluglar.map((s) => `blog-${s}`).filter((k) => !GELIS_DESENI.test(k));
    expect(dusen).toEqual([]);
  });
  it("iki okuyucu da etiketi YALNIZ gelis.js'ten okur (ayrışma tekrar etmesin)", () => {
    for (const dosya of ["src/App.jsx", "src/ServisEkrani.jsx"]) {
      const src = oku(dosya);
      expect(src).toContain('from "./gelis.js"');
      expect(src).not.toMatch(/\.get\(["'](kaynak|k)["']\)/);
    }
  });
  it("site başlığındaki servis düğmesi çıplak `/?servis=1` basmaz", () => {
    const src = oku("scripts/build-blog.mjs");
    expect(src).not.toContain('class="navcta" href="/?servis=1"');
    expect(src).toContain("navServisHref(canonical)");
  });
});
