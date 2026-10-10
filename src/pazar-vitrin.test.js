// src/pazar-vitrin.test.js — YK #166 PR-4 (10 Eki 2026) `/pazar` vitrini kilidi.
//
// NEDEN VAR: vitrin yetkisiz ve herkese açık. Kırılırsa: ① pasif/demo/stoksuz ürün satışa
// çıkar, ② satıcının IBAN/telefonu public cevaba girer, ③ talep formuna serbest değer
// (parça türü uydurma, il dışı metin) yazılır, ④ sayfa arama motoruna açılır.
import { describe, it, expect, beforeEach, vi } from "vitest";
import fs from "node:fs";

let tablolar;
let sorgular;
const eklenen = [];

function sahteSorgu(tablo) {
  const d = { filtre: [], kolon: null };
  sorgular.push({ tablo, d });
  const satirlar = () => (tablolar[tablo] || []).filter((s) => d.filtre.every((f) => f(s)));
  const z = {
    select(k) { d.kolon = k; return z; },
    insert(v) { eklenen.push({ tablo, v }); return Promise.resolve({ error: null }); },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    gt(k, v) { d.filtre.push((s) => s[k] > v); return z; },
    in(k, v) { d.filtre.push((s) => v.includes(s[k])); return z; },
    order() { return z; }, limit() { return z; },
    then(ok, no) {
      const kolonlar = d.kolon ? d.kolon.split(",").map((x) => x.trim()) : null;
      const sec = (s) => (kolonlar ? Object.fromEntries(kolonlar.filter((k) => k in s).map((k) => [k, s[k]])) : { ...s });
      return Promise.resolve({ data: satirlar().map(sec), error: null }).then(ok, no);
    },
  };
  return z;
}

vi.mock("../api/_supabase.js", () => ({ default: { from: (t) => sahteSorgu(t) } }));

const { default: liste, pazarFiltresi } = await import("../api/pazar/liste.js");
const { default: talep, talepDogrula } = await import("../api/pazar/talep.js");
const { filtreOku } = await import("./PazarVitrin.jsx");

function cagir(handler, { method = "GET", query = {}, body } = {}) {
  return new Promise((coz) => {
    const res = {
      kod: 200, basliklar: {},
      setHeader(k, v) { this.basliklar[k] = v; },
      status(k) { this.kod = k; return this; },
      json(v) { coz({ kod: this.kod, govde: v, basliklar: this.basliklar }); return this; },
      end() { coz({ kod: this.kod }); return this; },
    };
    handler({ method, query, body, headers: {} }, res);
  });
}

beforeEach(() => {
  sorgular = [];
  eklenen.length = 0;
  tablolar = {
    saticilar: [
      { id: "st-bs", ad: "Benservis", tur: "benservis", iban: "TR11", iletisim_tel: "+905550000000" },
      { id: "st-sv", ad: "Kadıköy Servis", tur: "servis", iban: "TR22", iletisim_tel: "+905551111111" },
    ],
    servis_urunler: [
      { id: "u1", satici_id: "st-bs", kategori: "yedek-parca", tur: "parca", baslik: "Kapı contası", fiyat: 450, stok: 3, durum: "aktif", cihaz_turu: "camasir-makinesi", parca_turu: "lastik-conta", created_at: "2026-10-10" },
      { id: "u2", satici_id: "st-bs", kategori: "yedek-parca", tur: "parca", baslik: "Pasif parça", fiyat: 100, stok: 5, durum: "pasif", created_at: "2026-10-10" },
      { id: "u3", satici_id: "st-bs", kategori: "yedek-parca", tur: "parca", baslik: "Tükenen", fiyat: 100, stok: 0, durum: "aktif", created_at: "2026-10-10" },
      { id: "u4", satici_id: "st-sv", kategori: "ikinci-el", tur: "urun", baslik: "Demo buzdolabı", fiyat: 9000, stok: 1, durum: "demo", created_at: "2026-06-10" },
      { id: "u5", satici_id: "st-sv", kategori: "ikinci-el", tur: "urun", baslik: "Buzdolabı", fiyat: 9000, stok: 1, durum: "aktif", created_at: "2026-10-09" },
    ],
  };
});

describe("GET /api/pazar/liste", () => {
  it("yalnız aktif ve stoklu ürünler; demo/pasif/tükenen dönmez", async () => {
    const r = await cagir(liste, { query: {} });
    expect(r.kod).toBe(200);
    expect(r.govde.urunler.map((u) => u.id).sort()).toEqual(["u1", "u5"]);
  });

  it("kategori + cihaz + parça filtresi uygulanır", async () => {
    const r = await cagir(liste, { query: { kategori: "yedek-parca", cihaz: "camasir-makinesi", parca: "lastik-conta" } });
    expect(r.govde.urunler.map((u) => u.id)).toEqual(["u1"]);
    const r2 = await cagir(liste, { query: { kategori: "ikinci-el" } });
    expect(r2.govde.urunler.map((u) => u.id)).toEqual(["u5"]);
  });

  it("satıcıdan yalnız id/ad/tur döner — IBAN ve telefon yok", async () => {
    const r = await cagir(liste, { query: {} });
    const metin = JSON.stringify(r.govde);
    expect(metin).not.toContain("TR11");
    expect(metin).not.toContain("+90555");
    expect(r.govde.urunler.find((u) => u.id === "u1").satici).toEqual({ id: "st-bs", ad: "Benservis", tur: "benservis" });
  });

  it("select('*') yok — açık kolon listesi", async () => {
    await cagir(liste, { query: {} });
    expect(sorgular.every((s) => s.d.kolon && s.d.kolon !== "*")).toBe(true);
  });

  it("sözlük dışı filtre yok sayılır; parça filtresi yalnız yedek parçada", () => {
    expect(pazarFiltresi({ kategori: "x", cihaz: "'; drop", parca: "lastik-conta" })).toEqual({ kategori: null, cihaz: null, parca: null });
    expect(pazarFiltresi({ kategori: "urun", parca: "lastik-conta" }).parca).toBe(null);
  });

  it("POST reddedilir", async () => {
    expect((await cagir(liste, { method: "POST" })).kod).toBe(405);
  });
});

describe("POST /api/pazar/talep", () => {
  const gecerli = { parca_turu: "lastik-conta", cihaz_turu: "camasir-makinesi", il: "İstanbul", telefon: "0555 123 45 67", marka_model: " Bosch WGA244 ", kaynak: "blog-ornek" };

  it("geçerli talep yazılır; telefon +90 biçiminde, KVKK sürümü dolu", async () => {
    const r = await cagir(talep, { method: "POST", body: gecerli });
    expect(r.kod).toBe(201);
    expect(eklenen).toHaveLength(1);
    expect(eklenen[0].tablo).toBe("parca_talepleri");
    expect(eklenen[0].v).toMatchObject({ telefon: "+905551234567", marka_model: "Bosch WGA244", kvkk_metin_v: 1, kaynak: "blog-ornek" });
  });

  it("sözlük dışı parça/cihaz, il dışı metin ve kısa telefon reddedilir", () => {
    expect(talepDogrula({ ...gecerli, parca_turu: "uydurma" }).hata).toBeTruthy();
    expect(talepDogrula({ ...gecerli, cihaz_turu: "araba" }).hata).toBeTruthy();
    expect(talepDogrula({ ...gecerli, il: "Kadıköy" }).hata).toBeTruthy();
    expect(talepDogrula({ ...gecerli, telefon: "123" }).hata).toBeTruthy();
  });

  it("kişisel görünen kaynak etiketi yazılmaz", () => {
    expect(talepDogrula({ ...gecerli, kaynak: "ali@ornek.com" }).satir.kaynak).toBe(null);
  });

  it("GET reddedilir", async () => {
    expect((await cagir(talep, { method: "GET" })).kod).toBe(405);
  });
});

describe("/pazar sayfası", () => {
  it("URL filtresi sözlükten okunur; varsayılan Yedek Parça", () => {
    expect(filtreOku("")).toMatchObject({ kategori: "yedek-parca", cihaz: "", parca: "" });
    expect(filtreOku("?kategori=urun&parca=lastik-conta").parca).toBe("");
    expect(filtreOku("?cihaz=klima&k=blog-x").kaynak).toBe("blog-x");
  });

  it("noindex başlığı var, sitemap ve menüde yok", () => {
    const v = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
    const h = v.headers.find((x) => x.source === "/pazar");
    expect(h.headers).toContainEqual({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    expect(fs.readFileSync("src/PazarVitrin.jsx", "utf8")).toContain('"noindex, nofollow"');
    if (fs.existsSync("public/sitemap.xml")) expect(fs.readFileSync("public/sitemap.xml", "utf8")).not.toContain("/pazar");
    expect(fs.readFileSync("src/App.jsx", "utf8")).not.toContain('href="/pazar');
  });

  it("fiyat KDV dahil, kargo vaadi 3 iş günü (Tolga, 10 Eki)", () => {
    const v = fs.readFileSync("src/PazarVitrin.jsx", "utf8");
    expect(v).toContain("KDV dahil · kargo hariç");
    expect(v).toContain("Tahmini 3 iş gününde kargoda");
    // Arama metni analitiğe gitmez (serbest metin yasağı).
    expect(v).toMatch(/track\("pazar_ara", \{\}\)/);
  });

  it("ilk katalog SQL'i: 37 ürün, fiyat sonu 9, filigranlı 17 üründe görsel yok", () => {
    const sql = fs.readFileSync("supabase/migrations/20261010_pazar_ilk_katalog_37.sql", "utf8");
    const satir = sql.split("\n").filter((l) => l.startsWith("  ('"));
    expect(satir).toHaveLength(37);
    for (const l of satir) expect(Number(l.match(/', (\d+), (null|')/)[1]) % 10, l).toBe(9);
    expect(satir.filter((l) => /, \d+, null, /.test(l))).toHaveLength(17);
    expect(sql).toContain("where not exists"); // tekrar çalıştırılabilir
  });

  it("fiyat etiketinde 'kargo hariç' yazar", () => {
    expect(fs.readFileSync("src/PazarVitrin.jsx", "utf8")).toContain("kargo hariç");
  });
});
