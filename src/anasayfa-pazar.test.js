// src/anasayfa-pazar.test.js — ana sayfa "Pazaryeri" bloğu (11 Eki 2026) kilidi.
//
// NEDEN VAR: blok ana sayfada, herkese açık uçtan besleniyor. Kırılırsa: ① sıra "en çok satan"
// olmaktan çıkar, ② satış sayısı ya da alıcının kişisel verisi public cevaba girer,
// ③ blok SSS'nin üstünden kayar.
import { describe, it, expect, vi } from "vitest";
import fs from "node:fs";

const sorgular = [];
const tablolar = {
  saticilar: [{ id: "st-bs", ad: "Benservis", tur: "benservis" }],
  servis_urunler: ["a", "b", "c", "d"].map((id, i) => ({
    id, satici_id: "st-bs", kategori: "yedek-parca", baslik: id, fiyat: 100 + i, stok: 1, durum: "aktif",
    gorsel_url: id === "c" ? "https://x/c.jpg" : null, created_at: `2026-10-0${9 - i}`,
  })),
  siparisler: [
    { odeme_durumu: "odendi", alici_ad: "Ad Soyad", alici_tel: "+905550000000", urunler: [{ urun_id: "d" }, { urun_id: "b" }] },
    { odeme_durumu: "odendi", alici_ad: "Ad Soyad", alici_tel: "+905550000000", urunler: [{ urun_id: "d" }] },
    { odeme_durumu: "odeme_bekleniyor", urunler: [{ urun_id: "a" }, { urun_id: "a" }, { urun_id: "a" }] },
    // PayTR test siparişi (SP-0002 gibi): ödenmiş ama sayılmaz.
    { odeme_durumu: "odendi", odeme_test: true, urunler: [{ urun_id: "a" }, { urun_id: "a" }, { urun_id: "a" }] },
  ],
};

function sahteSorgu(tablo) {
  const d = { filtre: [], kolon: null };
  sorgular.push({ tablo, d });
  const z = {
    select(k) { d.kolon = k; return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    gt(k, v) { d.filtre.push((s) => s[k] > v); return z; },
    not(k, op, v) { if (op === "is") d.filtre.push((s) => (s[k] ?? null) !== v); return z; },
    in(k, v) { d.filtre.push((s) => v.includes(s[k])); return z; },
    order() { return z; }, limit(n) { d.limit = n; return z; },
    then(ok, no) {
      const kolonlar = d.kolon.split(",").map((x) => x.trim());
      const satirlar = (tablolar[tablo] || []).filter((s) => d.filtre.every((f) => f(s)));
      const data = satirlar.map((s) => Object.fromEntries(kolonlar.filter((k) => k in s).map((k) => [k, s[k]])));
      return Promise.resolve({ data, error: null }).then(ok, no);
    },
  };
  return z;
}
vi.mock("../api/_supabase.js", () => ({ default: { from: (t) => sahteSorgu(t) } }));
const { default: liste, cokSatanSirala } = await import("../api/pazar/liste.js");

const cagir = (query) => new Promise((coz) => {
  const res = { kod: 200, setHeader() {}, status(k) { this.kod = k; return this; }, json(v) { coz({ kod: this.kod, govde: v }); return this; } };
  liste({ method: "GET", query, headers: {} }, res);
});

describe("cokSatanSirala", () => {
  it("ödenmiş kalem sayısı → görselli → gelen (yeni) sıra; adet sınırı", () => {
    const u = [{ id: "a" }, { id: "b" }, { id: "c", gorsel_url: "x" }, { id: "d" }];
    const s = [{ urunler: [{ urun_id: "d" }, { urun_id: "b" }] }, { urunler: [{ urun_id: "d" }] }];
    expect(cokSatanSirala(u, s).map((x) => x.id)).toEqual(["d", "b", "c", "a"]);
    expect(cokSatanSirala(u, [], 2).map((x) => x.id)).toEqual(["c", "a"]);
    expect(cokSatanSirala(u, [{ urunler: null }, null]).length).toBe(4);
  });
});

describe("vitrin çeşitliliği (24 Eki, Tolga: \"sadece boru koymuşsun\")", () => {
  it("satış yokken 8'li blok tek türle dolmaz: her cihaz/parça türünden birer, boru sona", async () => {
    const { vitrinCesitle } = await import("./pazar-vitrin.js");
    const boru = Array.from({ length: 9 }, (_, i) => ({ id: "b" + i, gorsel_url: "x", cihaz_turu: "kombi-termosifon", parca_turu: "hortum-boru-baca" }));
    const diger = [
      { id: "raf", gorsel_url: "x", cihaz_turu: "buzdolabi", parca_turu: "raf-sepet-cekmece" },
      { id: "izgara", gorsel_url: "x", cihaz_turu: "firin-ocak-aspirator", parca_turu: "tabla-tepsi-izgara" },
      { id: "fan", gorsel_url: "x", cihaz_turu: "firin-ocak-aspirator", parca_turu: "fan-pervane" },
      { id: "filtre", gorsel_url: "x", cihaz_turu: "klima", parca_turu: "filtre" },
      { id: "gorselsiz", cihaz_turu: "supurge", parca_turu: "motor" },
    ];
    const s = cokSatanSirala([...boru, ...diger], []).map((x) => x.id);
    expect(s.slice(0, 3)).toEqual(["raf", "izgara", "filtre"]);
    for (const id of ["raf", "izgara", "fan", "filtre", "gorselsiz"]) expect(s).toContain(id); // borudan farklı her ürün girer
    expect(s.filter((id) => id.startsWith("b")).length).toBe(3); // boru yalnız kalan kutuları doldurur
    expect(s.length).toBe(8);
  });
  it("gerçek satış varsa satılan önde kalır", () => {
    const u = [{ id: "boru", gorsel_url: "x", parca_turu: "hortum-boru-baca" }, { id: "raf", gorsel_url: "x", parca_turu: "raf-sepet-cekmece" }];
    expect(cokSatanSirala(u, [{ urunler: [{ urun_id: "boru" }] }])[0].id).toBe("boru");
  });
});

describe("GET /api/pazar/liste?siralama=cok-satan", () => {
  it("yalnız ödenmiş siparişler sayılır; siparişten yalnız urunler kolonu okunur", async () => {
    sorgular.length = 0;
    const r = await cagir({ siralama: "cok-satan" });
    expect(r.kod).toBe(200);
    expect(r.govde.urunler.map((x) => x.id)).toEqual(["d", "b", "c", "a"]);
    const sip = sorgular.find((q) => q.tablo === "siparisler");
    expect(sip.d.kolon).toBe("urunler");
  });

  it("PayTR test siparişi sayılmaz (Tolga, 11 Eki)", async () => {
    sorgular.length = 0;
    const r = await cagir({ siralama: "cok-satan" });
    // test siparişi sayılsaydı "a" 3 satışla ilk sıraya çıkardı
    expect(r.govde.urunler[0].id).toBe("d");
    expect(r.govde.urunler.map((x) => x.id).indexOf("a")).toBe(3);
  });

  it("cevapta satış sayısı ya da alıcı verisi yok", async () => {
    const r = await cagir({ siralama: "cok-satan" });
    const metin = JSON.stringify(r.govde);
    expect(metin).not.toMatch(/alici|\+90555|satis_sayisi/);
  });

  it("siralama yoksa siparişler hiç okunmaz", async () => {
    sorgular.length = 0;
    await cagir({});
    expect(sorgular.some((q) => q.tablo === "siparisler")).toBe(false);
  });
});

describe("GET /api/pazar/liste — tavan", () => {
  // 16 Eki 2026: tavan 60 iken 108 aktif parçanın 48'i /pazar'da görünmüyordu.
  it("liste tavanı tüm katalogu kapsar (≥ 300)", async () => {
    sorgular.length = 0;
    await cagir({ kategori: "yedek-parca" });
    const q = sorgular.find((x) => x.tablo === "servis_urunler");
    expect(q.d.limit).toBeGreaterThanOrEqual(300);
  });
});

describe("ana sayfa yerleşimi", () => {
  const v = fs.readFileSync(new URL("./AnaSayfaVitrin.jsx", import.meta.url), "utf8");
  const b = fs.readFileSync(new URL("./AnaSayfaPazar.jsx", import.meta.url), "utf8");
  it("blok SSS başlığının hemen üstünde", () => {
    const i = v.indexOf("<AnaSayfaPazar />");
    const j = v.indexOf(">Sık sorulanlar</h2>");
    expect(i).toBeGreaterThan(0);
    expect(j).toBeGreaterThan(i);
    expect(v.slice(i, j)).not.toMatch(/<section|<div/);
  });
  it("8'den az ürünle basılmaz; fiyat yanında KDV dahil + kargo hariç; olay yalnız ürün id", () => {
    expect(b).toMatch(/urunler\.length < ADET\) return null/);
    expect(b).toMatch(/const ADET = 8;/);
    expect(b).toMatch(/KDV dahil · kargo hariç/);
    expect(b).toMatch(/track\("pazar_vitrin_click", \{ urun: u\.id \}\)/);
    expect(b).not.toMatch(/style=\{\{[^}]*display/);
  });
});
