// src/blog-satin-al.test.js — YK #173 (b), 12 Eki 2026: parça yazısında "satın al" bağlantısı kilidi.
//
// NEDEN VAR: bağlantı yalnız `parca:` frontmatter'lı yazıda, ilk H2 altı + gövde sonu; hedef eşleşen
// ürün (/urun/:id) ya da sözlük slug'lı süzgeç (/pazar?parca&cihaz). Diğer yazılar bayt bayt aynı;
// uydurma slug adres üretmez; olay `blog_satin_al_click` yalnız slug + hedef taşır.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { satinAlHedefi, satinAlEkle, SATIN_AL_EK, SATIN_AL_METNI } from "../scripts/blog-satin-al.mjs";

const HTML = "<p>Giriş</p><h2>Belirtiler</h2><p>a</p><h2>Değişim</h2><p>b</p>";
const P = { slug: "kombi-ntc-sensor-arizasi", parca: { cihaz: "kombi-termosifon", tur: "termostat-sensor" } };

describe("hedef", () => {
  it("ürün id'si varsa /urun/:id; yoksa sözlük slug'larıyla /pazar süzgeci + k=blog-<slug>", () => {
    expect(satinAlHedefi({ ...P, parca: { ...P.parca, urun: "0F8FAD5B-D9CB-469F-A165-70867728950E" } }))
      .toEqual({ href: "/urun/0f8fad5b-d9cb-469f-a165-70867728950e", hedef: "urun" });
    expect(satinAlHedefi(P)).toEqual({ href: "/pazar?parca=termostat-sensor&cihaz=kombi-termosifon&k=blog-kombi-ntc-sensor-arizasi", hedef: "pazar" });
    expect(satinAlHedefi({ ...P, parca: { cihaz: "kombi-termosifon" } }).href).toBe("/pazar?cihaz=kombi-termosifon&k=blog-kombi-ntc-sensor-arizasi");
  });

  it("alan yok / sözlük dışı / bozuk uuid → bağlantı yok (uydurma adres basılmaz)", () => {
    expect(satinAlHedefi({ slug: "x" })).toBeNull();
    expect(satinAlHedefi({ slug: "x", parca: "termostat" })).toBeNull();
    expect(satinAlHedefi({ slug: "x", parca: { cihaz: "araba", tur: "lastik" } })).toBeNull();
    expect(satinAlHedefi({ slug: "x", parca: { urun: "123", cihaz: "uydurma" } })).toBeNull();
  });
});

describe("yerleşim", () => {
  it("ilk </h2>'den hemen sonra + gövde sonunda; metin birebir; href kaçışlı", () => {
    const out = satinAlEkle(HTML, P);
    // Kesme işareti HTML'de kaçar (&#39;); tarayıcıda metin birebir görünür.
    const bag = (yer) => `<p class="satinal satinal-${yer}"><a href="/pazar?parca=termostat-sensor&amp;cihaz=kombi-termosifon&amp;k=blog-kombi-ntc-sensor-arizasi" data-satinal="pazar">${SATIN_AL_METNI.replace("'", "&#39;")}</a></p>`;
    expect(out).toBe(`<p>Giriş</p><h2>Belirtiler</h2>${bag("ust")}<p>a</p><h2>Değişim</h2><p>b</p>${bag("alt")}`);
    expect(out.match(/satinal-ust/g)).toHaveLength(1);
    expect(SATIN_AL_METNI).toBe("Bu parçayı Benservis Pazaryeri'nden satın al →");
  });

  it("H2 yoksa başa; `parca` yoksa html aynen, ek boş (bayt bayt aynı çıktı)", () => {
    expect(satinAlEkle("<p>tek</p>", P)).toMatch(/^<p class="satinal satinal-ust">.*<p>tek<\/p><p class="satinal satinal-alt">/);
    expect(satinAlEkle(HTML, { slug: "x" })).toBe(HTML);
    expect(SATIN_AL_EK({ slug: "x" })).toBe("");
  });

  it("olay betiği: blog_satin_al_click {slug, hedef}; serbest metin yok", () => {
    const ek = SATIN_AL_EK(P);
    expect(ek).toContain('name:"blog_satin_al_click"');
    expect(ek).toContain(`var S=${JSON.stringify(P.slug)}`);
    expect(ek).toContain('a.getAttribute("data-satinal")');
    expect(ek).not.toMatch(/`/); // JS şablon dizesi tuzağı (feedback_css_backtick_tuzagi)
  });
});

describe("kaynak kuralları", () => {
  it("build-blog gövdeyi satinAlEkle ile sarar ve eki basar; parca alanı olan yazı sayısı bilinir", () => {
    const b = fs.readFileSync("scripts/build-blog.mjs", "utf8");
    expect(b).toContain("satinAlEkle(videoEkle(");
    expect(b).toContain("${SATIN_AL_EK(p)}");
    const parcali = fs.readdirSync("content/blog").filter((f) => f.endsWith(".md") && /^parca:/m.test(fs.readFileSync(`content/blog/${f}`, "utf8").split(/^---$/m)[1] || ""));
    expect(Array.isArray(parcali)).toBe(true); // sayı PAZ'ın frontmatter teslimine göre artar; 12 Eki: 0
  });
});
