// src/servis-arama-kaydi.test.js — yakın servis arama kaydı: PII'siz satır kilidi (29 Eki 2026, Tolga).
//
// NEDEN VAR: kayıt "il/ilçe bazında, PII'siz" istendi. Bir gün satıra koordinat, IP ya da blog
// slug'ı sızarsa bu dosya patlar. Kapsam kuralı da burada: il taranmış VE dizinde o ilçede servis var.
import { describe, it, expect } from "vitest";
import { aramaKaydi, aramaTopla, kaynakTuru, YAKIN_KM } from "./servis-arama-kaydi.js";
import handler from "../api/servis/yakin.js";

const ALANLAR = ["mod", "il", "ilce", "cihaz", "kaynak", "kapsamda", "sonuc"].sort();
const hepsiVar = () => true;

describe("aramaKaydi — PII'siz satır", () => {
  it("yalnız izinli alanlar; koordinat, IP, slug yok", () => {
    const s = aramaKaydi({ mod: "konum", cihaz: "Klima", kaynak: "blog-klima-ariza-kodlari", sonuc: [{}, {}],
      enYakin: { s: { sehir: "istanbul", ilce: "Kadıköy", lat: 40.99, lng: 29.03 }, km: 1.2 }, ilcedeServisVar: hepsiVar });
    expect(Object.keys(s).sort()).toEqual(ALANLAR);
    expect(JSON.stringify(s)).not.toMatch(/40\.99|29\.03|klima-ariza-kodlari/);
    expect(s).toMatchObject({ il: "istanbul", ilce: "Kadıköy", kaynak: "blog", kapsamda: true, sonuc: 2 });
  });

  it("en yakın servis YAKIN_KM'den uzaksa il/ilçe boş, kapsam dışı", () => {
    const s = aramaKaydi({ mod: "konum", sonuc: [], enYakin: { s: { sehir: "istanbul", ilce: "Kadıköy" }, km: YAKIN_KM + 1 }, ilcedeServisVar: hepsiVar });
    expect(s).toMatchObject({ il: null, ilce: null, kapsamda: false, sonuc: 0 });
  });

  it("ilçe modu: il adı slug'a çevrilir; kapsam dışı il kapsamda sayılmaz", () => {
    expect(aramaKaydi({ mod: "ilce", il: "Bursa", ilce: "Yenişehir", sonuc: [{}], ilcedeServisVar: hepsiVar }))
      .toMatchObject({ il: "bursa", ilce: "Yenişehir", kapsamda: true });
    expect(aramaKaydi({ mod: "ilce", il: "Van", ilce: "Tuşba", sonuc: [], ilcedeServisVar: hepsiVar }))
      .toMatchObject({ il: "van", kapsamda: false });
  });

  it("kapsamdaki ilde dizinde o ilçede servis yoksa kapsam dışı", () => {
    expect(aramaKaydi({ mod: "ilce", il: "İstanbul", ilce: "Adalar", sonuc: [], ilcedeServisVar: () => false }).kapsamda).toBe(false);
  });

  it("kaynak yalnız sayfa türü", () => {
    expect(kaynakTuru("teshis")).toBe("teshis");
    expect(kaynakTuru("nav-blog-iphone-isiniyor")).toBe("blog");
    expect(kaynakTuru("kilavuz-telefon-tablet")).toBe("kilavuz");
    expect(kaynakTuru("dogrudan")).toBe("dogrudan");
    expect(kaynakTuru("ahmet@ornek.com")).toBe("diger");
    expect(kaynakTuru("")).toBe("diger");
  });
});

describe("aramaTopla — admin tablosu", () => {
  it("il/ilçe/kapsamda grupları, sonuçsuz sayısı, çoktan aza", () => {
    const g = aramaTopla([
      { il: "van", ilce: "Tuşba", kapsamda: false, sonuc: 0 },
      { il: "van", ilce: "Tuşba", kapsamda: false, sonuc: 0 },
      { il: "istanbul", ilce: "Kadıköy", kapsamda: true, sonuc: 12 },
    ]);
    expect(g[0]).toEqual({ il: "van", ilce: "Tuşba", kapsamda: false, arama: 2, sonucsuz: 2 });
    expect(g[1]).toMatchObject({ il: "istanbul", arama: 1, sonucsuz: 0 });
  });
});

describe("yakin.js — kayıt kullanıcının listesini etkilemez", () => {
  it("Supabase anahtarı yokken (test) liste aynen döner, önbellek private", async () => {
    let baslik = {};
    const d = await new Promise((coz) => {
      const res = { setHeader(k, v) { baslik[k] = v; }, status() { return this; }, json: coz };
      handler({ query: { ilce: "Kadıköy", il: "İstanbul", kaynak: "teshis" } }, res);
    });
    expect(d.servisler.length).toBeGreaterThan(0);
    expect(baslik["Cache-Control"]).toMatch(/^private/);
  });
});
