import { describe, it, expect } from "vitest";
import { kutuOku, kutuOtoBaslar, KUTU_ANAHTAR, KUTU_OMUR_MS } from "./ariza-kutusu.js";

const depo = (deger) => {
  const m = new Map(deger === undefined ? [] : [[KUTU_ANAHTAR, deger]]);
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), removeItem: (k) => m.delete(k), m };
};
const T0 = 1_760_000_000_000;
const kayit = (o = {}) => JSON.stringify({ m: "Ekranda F28 yazıyor", s: "protherm-kombi-ariza-kodlari", t: T0, ...o });

describe("YK #160 — arıza kutusu metni", () => {
  it("aynı sayfanın köprüsüyle gelindiyse metni verir ve kaydı siler", () => {
    const d = depo(kayit());
    expect(kutuOku(d, "blog-protherm-kombi-ariza-kodlari", T0 + 1000)).toEqual({ sayfa: "protherm-kombi-ariza-kodlari", metin: "Ekranda F28 yazıyor", marka: "" });
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
    expect(kutuOku(depo(kayit({ m: "" })), "blog-protherm-kombi-ariza-kodlari", T0)).toEqual({ sayfa: "protherm-kombi-ariza-kodlari", metin: "", marka: "" });
  });
  it("bozuk kayıt, desen dışı slug, kapalı depo → null", () => {
    expect(kutuOku(depo("{bozuk"), "blog-x", T0)).toBeNull();
    expect(kutuOku(depo(kayit({ s: "Kötü Slug" })), "blog-Kötü Slug", T0)).toBeNull();
    expect(kutuOku(null, "blog-x", T0)).toBeNull();
    expect(kutuOku({ getItem() { throw new Error("gizli sekme"); } }, "blog-x", T0)).toBeNull();
    expect(kutuOku(depo(), "blog-x", T0)).toBeNull();
  });
});

describe("YK #160 2. adım — marka + kendiliğinden teşhis", () => {
  const G = "blog-protherm-kombi-ariza-kodlari";
  const KOMBI = ["Protherm", "Vaillant"];
  it("marka yalnız cihazın listesindeyse uygulanır (serbest metin yok)", () => {
    expect(kutuOku(depo(kayit({ b: "Protherm" })), G, T0, 300, KOMBI).marka).toBe("Protherm");
    expect(kutuOku(depo(kayit({ b: "Uydurma Marka" })), G, T0, 300, KOMBI).marka).toBe("");
    expect(kutuOku(depo(kayit({ b: "Protherm" })), G, T0).marka).toBe(""); // liste verilmezse kabul yok
  });
  it("cihaz + marka + ≥4 harf metin üçü de varsa başlar; biri eksikse başlamaz", () => {
    const tam = { sayfa: "x", metin: "Ekranda F28 yazıyor", marka: "Protherm" };
    expect(kutuOtoBaslar(tam, "Kombi / Termosifon")).toBe(true);
    expect(kutuOtoBaslar({ ...tam, metin: "" }, "Kombi / Termosifon")).toBe(false); // boş kutu → form
    expect(kutuOtoBaslar({ ...tam, metin: "  ab " }, "Kombi / Termosifon")).toBe(false);
    expect(kutuOtoBaslar({ ...tam, marka: "" }, "Kombi / Termosifon")).toBe(false); // markasız sayfa
    expect(kutuOtoBaslar(tam, "")).toBe(false);
    expect(kutuOtoBaslar(null, "Kombi / Termosifon")).toBe(false); // adresle gelen (kayıt yok)
  });
  it("kayıt tek kullanımlık: ikinci okuma (yenileme) başlatamaz", () => {
    const d = depo(kayit({ b: "Protherm" }));
    expect(kutuOtoBaslar(kutuOku(d, G, T0, 300, KOMBI), "Kombi / Termosifon")).toBe(true);
    expect(kutuOtoBaslar(kutuOku(d, G, T0, 300, KOMBI), "Kombi / Termosifon")).toBe(false);
  });
});
