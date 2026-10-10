// src/admin-pazar.test.js — YK #166 PR-3 (10 Eki 2026) admin Pazar ucu kilidi.
//
// NEDEN VAR: `/api/admin/pazar` Benservis adına ürün açar ve düzenler. Kırılırsa:
// ① şifresiz biri katalog yazabilir, ② servis ürünleri admin'den ezilebilir,
// ③ yeni ürün doğrudan yayına çıkar (vitrin açılmadan fiyatlı ürün /urun/:id'de görünür),
// ④ tur/kategori DB kısıtıyla çelişip insert 500 döner.
import { describe, it, expect, beforeEach, vi } from "vitest";
import { PARCA_TURLERI, PAZAR_CIHAZLARI } from "./pazar-sozluk.js";

const S_BENSERVIS = { id: "st-bs", ad: "Benservis", tur: "benservis", servis_id: null, iban: "TR11" };
const S_SERVIS = { id: "st-sv", ad: "Kadıköy Servis", tur: "servis", servis_id: "sv-1", iban: "TR22" };
const URUN_BS = { id: "u-bs", servis_id: null, satici_id: "st-bs", kategori: "yedek-parca", tur: "parca", tip: "yedek_parca", baslik: "Conta", fiyat: 450, stok: 3, durum: "aktif", parca_turu: "lastik-conta", parca_durum: "yeni" };
const URUN_SV = { id: "u-sv", servis_id: "sv-1", satici_id: "st-sv", kategori: "ikinci-el", tur: "urun", tip: "ikinci_el", baslik: "Buzdolabı", fiyat: 9000, stok: 1, durum: "aktif" };

let tablolar;
const yuklenen = [];

function sahteSorgu(tablo) {
  const d = { filtre: [], ekle: null, guncelle: null };
  const satirlar = () => (tablolar[tablo] || []).filter((s) => d.filtre.every((f) => f(s)));
  const tek = () => {
    if (d.ekle) {
      const yeni = { id: `${tablo}-${(tablolar[tablo] || []).length + 1}`, ...d.ekle };
      (tablolar[tablo] ||= []).push(yeni);
      return Promise.resolve({ data: { ...yeni }, error: null });
    }
    const s = satirlar()[0];
    if (s && d.guncelle) Object.assign(s, d.guncelle);
    return Promise.resolve({ data: s ? { ...s } : null, error: null });
  };
  const z = {
    select() { return z; },
    insert(v) { d.ekle = v; return z; },
    update(v) { d.guncelle = v; return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    order() { return z; }, limit() { return z; },
    single: tek, maybeSingle: tek,
    then(ok, no) { return Promise.resolve({ data: satirlar().map((s) => ({ ...s })), error: null }).then(ok, no); },
  };
  return z;
}

vi.mock("../api/_supabase.js", () => ({
  default: {
    from: (t) => sahteSorgu(t),
    storage: {
      from: (b) => ({
        upload: async (yol, tampon, s) => { yuklenen.push({ b, yol, boyut: tampon.length, tip: s.contentType }); return { error: null }; },
        getPublicUrl: (yol) => ({ data: { publicUrl: `https://ornek.supabase.co/storage/v1/object/public/${b}/${yol}` } }),
      }),
    },
  },
}));

const { default: pazar } = await import("../api/admin/pazar.js");

function sahteRes() {
  const r = { kod: null, govde: null, setHeader() {}, status(k) { r.kod = k; return r; }, json(g) { r.govde = g; return r; }, end() { return r; } };
  return r;
}
const YETKI = { authorization: "Bearer gizli-admin" };
const cagir = async (method, { query = {}, body, headers = YETKI } = {}) => {
  const res = sahteRes();
  await pazar({ method, query, body, headers }, res);
  return res;
};

beforeEach(() => {
  process.env.ADMIN_TOKEN = "gizli-admin";
  delete process.env.ADMIN_PASSWORD;
  tablolar = {
    saticilar: [{ ...S_BENSERVIS }, { ...S_SERVIS }],
    servis_urunler: [{ ...URUN_BS }, { ...URUN_SV }],
    siparisler: [{ id: "sp-1", siparis_no: "BS-1", tutar: 450, odeme_durumu: "bekliyor", alici_ad: "A B", alici_tel: "+905551112233", urunler: [] }],
  };
  yuklenen.length = 0;
});

describe("admin Pazar ucu (#166 PR-3)", () => {
  it("şifresiz ve yanlış şifreyle 401, hiçbir şey yazılmaz", async () => {
    expect((await cagir("GET", { headers: {} })).kod).toBe(401);
    expect((await cagir("POST", { headers: { authorization: "Bearer yanlis" }, body: { kategori: "urun", baslik: "x", fiyat: 1 } })).kod).toBe(401);
    expect(tablolar.servis_urunler).toHaveLength(2);
  });

  it("GET yalnız Benservis ürünlerini + siparişleri döndürür", async () => {
    const res = await cagir("GET");
    expect(res.kod).toBe(200);
    expect(res.govde.urunler.map((u) => u.id)).toEqual(["u-bs"]);
    expect(res.govde.siparisler).toHaveLength(1);
  });

  it("POST: Benservis satıcısına bağlanır, servis_id boş, varsayılan PASİF, tur/kategori/tip tutarlı", async () => {
    const res = await cagir("POST", { body: {
      kategori: "yedek-parca", baslik: "  Kapak contası ", fiyat: "450", stok: 5,
      cihaz_turu: "camasir-makinesi", parca_turu: "lastik-conta", parca_durum: "yeni", uyumlu_modeller: "X 9123",
    } });
    expect(res.kod).toBe(201);
    const u = tablolar.servis_urunler.at(-1);
    expect(u).toMatchObject({
      satici_id: "st-bs", servis_id: null, durum: "pasif", kategori: "yedek-parca", tur: "parca", tip: "yedek_parca",
      baslik: "Kapak contası", fiyat: 450, stok: 5, parca_turu: "lastik-conta",
    });
  });

  it("POST: ürün kategorisinde parça alanları temizlenir, tip DB kısıtına uyar", async () => {
    await cagir("POST", { body: { kategori: "urun", baslik: "Süpürge filtresi seti", fiyat: 300, parca_turu: "filtre", parca_durum: "yeni" } });
    const u = tablolar.servis_urunler.at(-1);
    expect(u).toMatchObject({ kategori: "urun", tur: "urun", tip: "ikinci_el", parca_turu: null, parca_durum: null, stok: 1 });
  });

  it("POST: geçersiz girdiler 400 (kategori · fiyat · stok · sözlük dışı tür · http görsel)", async () => {
    const temel = { kategori: "yedek-parca", baslik: "x", fiyat: 10 };
    for (const ek of [
      { kategori: "parca" }, { fiyat: -1 }, { fiyat: "" }, { stok: 1.5 }, { stok: -2 },
      { cihaz_turu: "uydurma" }, { parca_turu: "kapak-contasi-uydurma" }, { parca_durum: "eski" },
      { gorsel_url: "http://x.com/a.jpg" }, { baslik: "   " }, { durum: "demo" },
    ]) {
      const res = await cagir("POST", { body: { ...temel, ...ek } });
      expect(res.kod, JSON.stringify(ek)).toBe(400);
    }
    expect(tablolar.servis_urunler).toHaveLength(2);
  });

  it("PATCH: servis ürünü 403, olmayan ürün 404", async () => {
    expect((await cagir("PATCH", { query: { id: "u-sv" }, body: { fiyat: 1 } })).kod).toBe(403);
    expect(tablolar.servis_urunler.find((u) => u.id === "u-sv").fiyat).toBe(9000);
    expect((await cagir("PATCH", { query: { id: "yok" }, body: { fiyat: 1 } })).kod).toBe(404);
  });

  it("PATCH: yayından kaldır / yayınla / fiyat güncelle", async () => {
    expect((await cagir("PATCH", { query: { id: "u-bs" }, body: { durum: "pasif" } })).kod).toBe(200);
    expect(tablolar.servis_urunler[0].durum).toBe("pasif");
    await cagir("PATCH", { query: { id: "u-bs" }, body: { durum: "aktif", fiyat: 500 } });
    expect(tablolar.servis_urunler[0]).toMatchObject({ durum: "aktif", fiyat: 500, parca_turu: "lastik-conta" });
    expect((await cagir("PATCH", { query: { id: "u-bs" }, body: {} })).kod).toBe(400);
  });

  it("görsel: yalnız jpeg/png/webp, 3 MB tavanı, pazar/benservis/ yoluna", async () => {
    const kucuk = Buffer.from("abc").toString("base64");
    expect((await cagir("POST", { query: { islem: "gorsel" }, body: { dosya_tipi: "image/gif", base64: kucuk } })).kod).toBe(400);
    const buyuk = Buffer.alloc(3 * 1024 * 1024 + 1).toString("base64");
    expect((await cagir("POST", { query: { islem: "gorsel" }, body: { dosya_tipi: "image/png", base64: buyuk } })).kod).toBe(413);
    const res = await cagir("POST", { query: { islem: "gorsel" }, body: { dosya_tipi: "image/webp", base64: `data:image/webp;base64,${kucuk}` } });
    expect(res.kod).toBe(201);
    expect(yuklenen).toHaveLength(1);
    expect(yuklenen[0]).toMatchObject({ b: "DPP Foto", boyut: 3, tip: "image/webp" });
    expect(yuklenen[0].yol).toMatch(/^pazar\/benservis\/\d+-[0-9a-f]{8}\.webp$/);
    expect(res.govde.url).toMatch(/^https:\/\//);
  });

  it("sözlük: 38 parça türü, 12 cihaz, slug'lar benzersiz", () => {
    expect(PARCA_TURLERI).toHaveLength(38);
    expect(PAZAR_CIHAZLARI).toHaveLength(12);
    for (const l of [PARCA_TURLERI, PAZAR_CIHAZLARI]) expect(new Set(l.map((x) => x.slug)).size).toBe(l.length);
    expect(PAZAR_CIHAZLARI.map((c) => c.slug)).toContain("camasir-makinesi");
  });
});
