import { describe, it, expect } from "vitest";
import {
  ARIZA_KUTUSU_SAYFALARI, ARIZA_KUTUSU_YK161, KUTU_MARKA, kutuluSlug, kutuKapisi,
} from "./ariza-kutusu-sayfalari.js";
import { CIHAZLAR, cihazSlug, markalarForCihaz } from "./constants.js";

const slugify = (s) => s.toLowerCase()
  .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const SERIE4 = "bosch-serie-4-bulasik-makinesi-sembolleri-ve-anlamlari";

describe("YK #161 — kutu listeleri", () => {
  it("test listesi en çok 10, YK #161 listesi tam 10 ve ikisi ayrık", () => {
    expect(ARIZA_KUTUSU_SAYFALARI.size).toBeLessThanOrEqual(10);
    expect(ARIZA_KUTUSU_YK161.size).toBe(10);
    for (const s of ARIZA_KUTUSU_YK161) expect(ARIZA_KUTUSU_SAYFALARI.has(s)).toBe(false);
  });
  it("Bosch Serie 4 yazısı artık kutulu (yasak kapısı kalktı), test listesinde değil", () => {
    expect(kutuluSlug(SERIE4)).toBe(true);
    expect(ARIZA_KUTUSU_SAYFALARI.has(SERIE4)).toBe(false);
  });
  it("listede olmayan sayfa kutusuz", () => {
    expect(kutuluSlug("kombi-yanmiyor")).toBe(false);
  });
  it("YK #161 markaları: 6 markalı, 4 markasız; her marka cihazın kendi listesinde", () => {
    const cihazlar = { "bulasik-makinesi": 0, "camasir-makinesi": 0, "kurutma-makinesi": 0 };
    const markali = [...ARIZA_KUTUSU_YK161].filter((s) => KUTU_MARKA[s]);
    expect(markali.length).toBe(6);
    for (const s of markali) {
      const cs = Object.keys(cihazlar).find((c) => s.includes(c));
      const ad = CIHAZLAR.find((c) => cihazSlug(c) === cs);
      expect(ad, s).toBeTruthy();
      expect(markalarForCihaz(ad), s).toContain(KUTU_MARKA[s]);
    }
    for (const s of ["kurutma-makinesi-su-tanki-dolu-uyarisi", "derin-dondurucu-kac-derece-olmali", "camasir-makinesi-kapagi-acilmiyor", "ocak-atesleme-yapmiyor"])
      expect(KUTU_MARKA[s]).toBeUndefined();
  });
});

describe("YK #160/#161 — kutu kapısı", () => {
  const yazi = (slug, ek = {}) => ({ slug, cihazSlug: "x", cihazAdi: "X", markalar: ["Bosch"], ...ek });
  it("gerçek listeler kapıdan geçer", () => {
    expect(kutuKapisi({ slugify })).toEqual([]);
  });
  it("'en çok 10' yalnız test listesine uygulanır", () => {
    const on1 = new Set(Array.from({ length: 11 }, (_, i) => `a-${i}`));
    expect(kutuKapisi({ test: on1, yk161: new Set(), marka: {}, slugify }).join()).toMatch(/en çok 10/);
    expect(kutuKapisi({ test: new Set(), yk161: on1, marka: {}, slugify })).toEqual([]);
  });
  it("aynı slug iki listede olamaz", () => {
    expect(kutuKapisi({ test: new Set(["a"]), yk161: new Set(["a"]), marka: {}, slugify }).join()).toMatch(/hem test hem/);
  });
  it("YK #161 listesi yalnız mevcut sayfa alır", () => {
    expect(kutuKapisi({ test: new Set(), yk161: new Set(["yok"]), marka: {}, yayindakiSluglar: new Set(["var"]), slugify }).join()).toMatch(/yayında değil/);
  });
  it("cihaz bağlamı olmayan kutulu sayfa durdurur", () => {
    expect(kutuKapisi({ test: new Set(), yk161: new Set(["a"]), marka: {}, yayindaki: [yazi("a", { cihazSlug: "" })], slugify }).join()).toMatch(/cihaz bağlamı yok/);
  });
  it("marka: liste dışı slug, slug'da geçmeyen ad ve cihaz listesinde olmayan marka durdurur", () => {
    const k = (o) => kutuKapisi({ test: new Set(), yk161: new Set(["bosch-a"]), slugify, ...o }).join();
    expect(k({ marka: { "baska-a": "Baska" } })).toMatch(/kutu listelerinde değil/);
    expect(k({ marka: { "bosch-a": "Siemens" } })).toMatch(/slug'da geçmiyor/);
    expect(k({ marka: { "bosch-a": "Bosch" }, yayindaki: [yazi("bosch-a", { markalar: ["Beko"] })] })).toMatch(/marka listesinde yok/);
    expect(k({ marka: { "bosch-a": "Bosch" }, yayindaki: [yazi("bosch-a")] })).toBe("");
  });
});
