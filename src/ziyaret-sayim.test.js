// src/ziyaret-sayim.test.js — PII'siz sayfa-şehir sayacı kilidi (29 Eki 2026, Tolga).
//
// NEDEN VAR: sayaç "toplu, anonim" istendi. Anahtara IP/UA/adres sızarsa, bot sayılırsa ya da
// plaka→il eşlemesi kapsam ilini kaçırırsa 12 Kas raporu yanlış okunur.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { sayfaTuru, ziyaretAnahtari, sehirEtiketi, sehirTopla, PLAKA_IL, ZIYARET_BEACON_JS, okumaAnahtari, okumaIlistir, ziyaretBeacon } from "./ziyaret-sayim.js";
import { KAPSAM_ILLER } from "./kapsam-iller.js";
import handler from "../api/sayim/ziyaret.js";

const TARAYICI = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1";
const H = { "user-agent": TARAYICI, "x-vercel-ip-country": "TR", "x-vercel-ip-country-region": "34", "x-vercel-ip-city": "Kad%C4%B1k%C3%B6y", "x-forwarded-for": "85.1.2.3" };

describe("ziyaretAnahtari — yalnız toplam anahtarı", () => {
  it("alanlar gün/ülke/bölge/şehir/tür; IP ve UA yok", () => {
    const a = ziyaretAnahtari(H, { t: "blog" }, new Date("2026-10-29T22:30:00Z"));
    expect(Object.keys(a).sort()).toEqual(["bolge", "gun", "sehir", "tur", "ulke"]);
    expect(a).toEqual({ gun: "2026-10-30", ulke: "TR", bolge: "34", sehir: "Kadıköy", tur: "blog" });
    expect(JSON.stringify(a)).not.toMatch(/85\.1|Mozilla|iPhone/);
  });
  it("bot ve UA'sız istek sayılmaz", () => {
    expect(ziyaretAnahtari({ ...H, "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" }, { t: "blog" })).toBeNull();
    expect(ziyaretAnahtari({ ...H, "user-agent": "" }, { t: "blog" })).toBeNull();
  });
  it("tanınmayan tür diger'e düşer (serbest metin girmez)", () => {
    expect(ziyaretAnahtari(H, { t: "ahmet@ornek.com" }).tur).toBe("diger");
  });
});

describe("kapsam etiketi", () => {
  it("81 plaka; her kapsam ili eşlemede var", () => {
    expect(Object.keys(PLAKA_IL)).toHaveLength(81);
    for (const il of Object.keys(KAPSAM_ILLER)) expect(Object.values(PLAKA_IL), il).toContain(il);
  });
  it("TR kapsamda / dışı, yurt dışı ayrı", () => {
    expect(sehirEtiketi({ ulke: "TR", bolge: "34" })).toEqual({ il: "istanbul", kapsam: "kapsamda" });
    expect(sehirEtiketi({ ulke: "TR", bolge: "65" })).toEqual({ il: "van", kapsam: "disi" });
    expect(sehirEtiketi({ ulke: "DE", bolge: "BE" }).kapsam).toBe("yurt-disi");
  });
  it("sehirTopla günleri ve türleri birleştirir", () => {
    const g = sehirTopla([
      { ulke: "TR", bolge: "34", sehir: "Kadıköy", tur: "blog", sayi: 3 },
      { ulke: "TR", bolge: "34", sehir: "Kadıköy", tur: "teshis", sayi: 2 },
      { ulke: "TR", bolge: "65", sehir: "Van", tur: "blog", sayi: 1 },
    ]);
    expect(g[0]).toMatchObject({ sehir: "Kadıköy", il: "istanbul", kapsam: "kapsamda", toplam: 5, tur: { blog: 3, teshis: 2 } });
    expect(g[1]).toMatchObject({ il: "van", kapsam: "disi", toplam: 1 });
  });
});

describe("beacon", () => {
  it("sayfa türü adresten; beacon adres/slug göndermez", () => {
    expect(sayfaTuru("/")).toBe("teshis");
    expect(sayfaTuru("/blog/iphone-isiniyor/")).toBe("blog");
    expect(sayfaTuru("/tamir/klima/")).toBe("tamir");
    expect(sayfaTuru("/urun/abc")).toBe("urun");
    expect(ZIYARET_BEACON_JS).toMatch(/gonder\(\{\s*t: t\s*\}\)/);
    expect(ZIYARET_BEACON_JS).not.toMatch(/href|search|referrer|cookie/);
  });
  it("statik şablon ve SPA girişi beacon'ı taşır", () => {
    expect(fs.readFileSync(new URL("../scripts/build-blog.mjs", import.meta.url), "utf8")).toMatch(/<script>\$\{ZIYARET_BEACON_JS\}<\/script>/);
    expect(fs.readFileSync(new URL("./main.jsx", import.meta.url), "utf8")).toMatch(/^ziyaretBeacon\(\);$/m);
  });
  it("uç nokta her durumda 204 döner (anahtarsız ortam)", async () => {
    let kod;
    await handler({ method: "POST", headers: H, body: JSON.stringify({ t: "blog" }) }, { setHeader() {}, status(c) { kod = c; return this; }, end() {} });
    expect(kod).toBe(204);
  });
});

describe("okuma ölçümü — süre + kaydırma (30 Eki 2026)", () => {
  it("final ping yalnız aralık taşır; açılış ping'i okuma sayılmaz; serbest değer atılır", () => {
    expect(okumaAnahtari({ t: "blog" })).toBeNull();
    expect(okumaAnahtari({ t: "blog", son: 1, s: "0-10", k: 25 })).toEqual({ sure: "0-10", kaydirma: 25 });
    expect(okumaAnahtari({ t: "blog", son: 1, s: "37", k: 25 })).toBeNull();
    expect(okumaAnahtari({ t: "blog", son: 1, s: "60+", k: 33 })).toBeNull();
  });

  it("şehir başına %10 sn altı ve %sonuna kadar, final ping sayısına göre", () => {
    const sehirler = sehirTopla([{ ulke: "TR", bolge: "34", sehir: "Kadıköy", tur: "blog", sayi: 9 }]);
    const [k] = okumaIlistir(sehirler, [
      { ulke: "TR", bolge: "34", sehir: "Kadıköy", sure: "0-10", kaydirma: 0, sayi: 2 },
      { ulke: "TR", bolge: "34", sehir: "Kadıköy", sure: "60+", kaydirma: 100, sayi: 1 },
      { ulke: "TR", bolge: "34", sehir: "Kadıköy", sure: "10-60", kaydirma: 50, sayi: 1 },
    ]);
    expect(k.okuma).toEqual({ final: 4, kisaYuzde: 50, sonunaYuzde: 25 });
    expect(okumaIlistir(sehirler, [])[0].okuma.kisaYuzde).toBeNull();
  });

  it("tarayıcıda: açılışta 1 ping, gizlenince TEK final ping (aralıklarla), ikinci gizlenme ping atmaz", () => {
    const gidenler = [];
    const dinle = {};
    const doc = {
      visibilityState: "visible",
      documentElement: { scrollHeight: 3000, clientHeight: 1000, scrollTop: 0 },
      addEventListener: (ad, f) => { dinle["doc:" + ad] = f; },
    };
    const eski = { location: globalThis.location, document: globalThis.document, navigator: globalThis.navigator, addEventListener: globalThis.addEventListener, scrollY: globalThis.scrollY };
    Object.defineProperty(globalThis, "location", { value: { pathname: "/blog/x/" }, configurable: true });
    Object.defineProperty(globalThis, "document", { value: doc, configurable: true });
    Object.defineProperty(globalThis, "navigator", { value: { sendBeacon: (u, b) => { gidenler.push(b); return true; } }, configurable: true });
    globalThis.addEventListener = (ad, f) => { dinle["win:" + ad] = f; };
    globalThis.scrollY = 2000; // en alta inmiş
    const pencereVardi = "window" in globalThis; if (!pencereVardi) globalThis.window = globalThis;
    try {
      ziyaretBeacon();
      expect(gidenler).toHaveLength(1);
      doc.visibilityState = "hidden"; dinle["doc:visibilitychange"]();
      dinle["win:pagehide"]();
      expect(gidenler).toHaveLength(2);
    } finally {
      for (const [k, v] of Object.entries(eski)) Object.defineProperty(globalThis, k, { value: v, configurable: true, writable: true });
      if (!pencereVardi) delete globalThis.window;
    }
    return Promise.all(gidenler.map((b) => b.text())).then(([ac, son]) => {
      expect(JSON.parse(ac)).toEqual({ t: "blog" });
      expect(JSON.parse(son)).toEqual({ t: "blog", son: 1, s: "0-10", k: 100 });
    });
  });
});
