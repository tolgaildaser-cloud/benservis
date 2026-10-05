import { describe, it, expect } from "vitest";
import { kutuOku, KUTU_ANAHTAR, KUTU_OMUR_MS } from "./ariza-kutusu.js";

const depo = (deger) => {
  const m = new Map(deger === undefined ? [] : [[KUTU_ANAHTAR, deger]]);
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), removeItem: (k) => m.delete(k), m };
};
const T0 = 1_760_000_000_000;
const kayit = (o = {}) => JSON.stringify({ m: "Ekranda F28 yazıyor", s: "protherm-kombi-ariza-kodlari", t: T0, ...o });

describe("YK #160 — arıza kutusu metni", () => {
  it("aynı sayfanın köprüsüyle gelindiyse metni verir ve kaydı siler", () => {
    const d = depo(kayit());
    expect(kutuOku(d, "blog-protherm-kombi-ariza-kodlari", T0 + 1000)).toEqual({ sayfa: "protherm-kombi-ariza-kodlari", metin: "Ekranda F28 yazıyor" });
    expect(d.m.has(KUTU_ANAHTAR)).toBe(false);
  });
  it("başka gelişle açılan forma metin sızmaz (ama kayıt yine silinir)", () => {
    const d = depo(kayit());
    expect(kutuOku(d, "", T0)).toBeNull();
    expect(kutuOku(d, "blog-baska-yazi", T0)).toBeNull();
    expect(d.m.has(KUTU_ANAHTAR)).toBe(false);
  });
  it("30 dakikadan eski ya da gelecekteki kayıt düşer", () => {
    expect(kutuOku(depo(kayit()), "blog-protherm-kombi-ariza-kodlari", T0 + KUTU_OMUR_MS + 1)).toBeNull();
    expect(kutuOku(depo(kayit()), "blog-protherm-kombi-ariza-kodlari", T0 - 1)).toBeNull();
  });
  it("metin 300 karaktere kırpılır; boş metin de geçerli (kutudan teşhis sayılır)", () => {
    expect(kutuOku(depo(kayit({ m: "a".repeat(400) })), "blog-protherm-kombi-ariza-kodlari", T0).metin).toHaveLength(300);
    expect(kutuOku(depo(kayit({ m: "" })), "blog-protherm-kombi-ariza-kodlari", T0)).toEqual({ sayfa: "protherm-kombi-ariza-kodlari", metin: "" });
  });
  it("bozuk kayıt, desen dışı slug, kapalı depo → null", () => {
    expect(kutuOku(depo("{bozuk"), "blog-x", T0)).toBeNull();
    expect(kutuOku(depo(kayit({ s: "Kötü Slug" })), "blog-Kötü Slug", T0)).toBeNull();
    expect(kutuOku(null, "blog-x", T0)).toBeNull();
    expect(kutuOku({ getItem() { throw new Error("gizli sekme"); } }, "blog-x", T0)).toBeNull();
    expect(kutuOku(depo(), "blog-x", T0)).toBeNull();
  });
});
