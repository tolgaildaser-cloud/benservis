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
  ],
};

function sahteSorgu(tablo) {
  const d = { filtre: [], kolon: null };
  sorgular.push({ tablo, d });
  const z = {
    select(k) { d.kolon = k; return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    gt(k, v) { d.filtre.push((s) => s[k] > v); return z; },
    in(k, v) { d.filtre.push((s) => v.includes(s[k])); return z; },
    order() { return z; }, limit() { return z; },
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

describe("GET /api/pazar/liste?siralama=cok-satan", () => {
  it("yalnız ödenmiş siparişler sayılır; siparişten yalnız urunler kolonu okunur", async () => {
    sorgular.length = 0;
    const r = await cagir({ siralama: "cok-satan" });
    expect(r.kod).toBe(200);
    expect(r.govde.urunler.map((x) => x.id)).toEqual(["d", "b", "c", "a"]);
    const sip = sorgular.find((q) => q.tablo === "siparisler");
    expect(sip.d.kolon).toBe("urunler");
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
