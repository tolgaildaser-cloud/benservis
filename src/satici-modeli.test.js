// src/satici-modeli.test.js — YK #166 PR-2 (10 Eki 2026) satıcı modeli kilidi.
//
// NEDEN VAR: pazaryerinde her ürün bir satıcıya bağlı (servis | benservis | dis).
// Benservis ürününün `servis_id`'si boştur; satıcı adı `saticilar`dan okunur.
// `saticilar` IBAN ve iletişim taşır → public uçlar yalnız `id, ad, tur` döndürmeli.
// `/ikinci-el` listesi (`/api/ilan/liste`) Benservis kataloğunu GÖSTERMEZ — o `/pazar`ın.
//
// Sahte istemci `ilan-sizinti.test.js` desenindedir: kolon listesi uygulanır,
// `eq`/`neq`/`in`/`not is null` filtreleri PostgREST gibi çalışır.
import { describe, it, expect, beforeEach, vi } from "vitest";

const SERVIS = { id: "sv-1", ad: "Kadıköy Servis", il: "İstanbul", ilce: "Kadıköy" };
const S_BENSERVIS = {
  id: "st-bs", ad: "Benservis", tur: "benservis", servis_id: null,
  iletisim_tel: "05559998877", iletisim_eposta: "gizli@ornek.com", iban: "TR110000000000000000000001",
};
const S_SERVIS = { id: "st-sv", ad: "Kadıköy Servis", tur: "servis", servis_id: "sv-1", iban: "TR220000000000000000000002" };
const URUN_BS = {
  id: "u-bs", servis_id: null, satici_id: "st-bs", tip: "yedek_parca", tur: "parca", kategori: "yedek-parca",
  baslik: "Kapak contası", aciklama: null, fiyat: 450, gorsel_url: null, dpp_seri_no: null, durum: "aktif",
  stok: 4, parca_turu: "kapak-contasi", cihaz_turu: "camasir-makinesi", uyumlu_modeller: "X 9123",
  parca_durum: "yeni", created_at: "2026-10-10T00:00:00Z",
};
const URUN_SV = {
  ...URUN_BS, id: "u-sv", servis_id: "sv-1", satici_id: "st-sv", tip: "ikinci_el", tur: "urun",
  kategori: "ikinci-el", baslik: "İkinci el buzdolabı", fiyat: 9000, stok: 1, parca_turu: null,
  cihaz_turu: null, uyumlu_modeller: null, parca_durum: null,
};
const URUN_TUKENDI = { ...URUN_BS, id: "u-0", baslik: "Biten parça", stok: 0 };

let tablolar;
const eklenen = [];

function alanSec(satir, kolonlar) {
  if (kolonlar === "*" || kolonlar === undefined) return { ...satir };
  const istenen = String(kolonlar).split(",").map((k) => k.trim()).filter(Boolean);
  return Object.fromEntries(istenen.map((k) => [k, satir[k]]));
}

function sahteSorgu(tablo) {
  const d = { kolonlar: "*", filtre: [], ekle: null };
  const satirlar = () => (tablolar[tablo] || []).filter((s) => d.filtre.every((f) => f(s)));
  const tek = (bosHata) => {
    if (d.ekle) {
      const yeni = { id: `${tablo}-${eklenen.length + 1}`, durum: "odeme_bekleniyor", ...d.ekle };
      (tablolar[tablo] ||= []).push(yeni);
      eklenen.push({ tablo, satir: yeni });
      return Promise.resolve({ data: alanSec(yeni, d.kolonlar), error: null });
    }
    const s = satirlar()[0];
    if (!s) return Promise.resolve({ data: null, error: bosHata ? { code: "PGRST116" } : null });
    return Promise.resolve({ data: alanSec(s, d.kolonlar), error: null });
  };
  const z = {
    select(k) { d.kolonlar = k; return z; },
    insert(v) { d.ekle = v; return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    neq(k, v) { d.filtre.push((s) => s[k] !== v); return z; },
    in(k, l) { d.filtre.push((s) => l.includes(s[k])); return z; },
    not(k, op, v) { if (op === "is" && v === null) d.filtre.push((s) => s[k] != null); return z; },
    order() { return z; }, limit() { return z; }, range() { return z; },
    single() { return tek(true); },
    maybeSingle() { return tek(false); },
    then(ok, no) {
      const l = satirlar();
      return Promise.resolve({ data: l.map((s) => alanSec(s, d.kolonlar)), error: null, count: l.length }).then(ok, no);
    },
  };
  return z;
}

vi.mock("../api/_supabase.js", () => ({
  default: {
    from: (t) => sahteSorgu(t),
    auth: { getUser: async (tk) => (tk === "servis-jwt"
      ? { data: { user: { user_metadata: { servis_id: "sv-1" } } }, error: null }
      : { data: { user: null }, error: { message: "x" } }) },
  },
}));

const { default: urunDetay } = await import("../api/urun/[id].js");
const { default: siparis } = await import("../api/siparis.js");
const { default: liste } = await import("../api/ilan/liste.js");
const { default: servisUrunler } = await import("../api/servis/urunler.js");

function sahteRes() {
  const r = {
    kod: null, govde: null,
    setHeader() {}, status(k) { r.kod = k; return r; },
    json(g) { r.govde = g; return r; }, end(g) { r.govde = g; return r; },
  };
  return r;
}

const GIZLI = ["05559998877", "gizli@ornek.com", "TR110000000000000000000001", "TR220000000000000000000002"];

beforeEach(() => {
  tablolar = {
    saticilar: [{ ...S_BENSERVIS }, { ...S_SERVIS }],
    servis_basvurulari: [{ ...SERVIS }],
    servis_urunler: [{ ...URUN_BS }, { ...URUN_SV }, { ...URUN_TUKENDI }],
    ilanlar: [], cihazlar: [], tamir_kayitlari: [], siparisler: [],
  };
  eklenen.length = 0;
});

describe("satıcı modeli (#166 PR-2)", () => {
  it("Benservis ürünü: satıcı ad+tür döner, servis boş, IBAN/iletişim sızmaz", async () => {
    const res = sahteRes();
    await urunDetay({ method: "GET", query: { id: "u-bs" }, headers: {} }, res);
    expect(res.kod).toBe(200);
    expect(res.govde.satici).toEqual({ id: "st-bs", ad: "Benservis", tur: "benservis" });
    expect(res.govde.servis).toBeNull();
    expect(res.govde.urun).toMatchObject({ kategori: "yedek-parca", tur: "parca", stok: 4, parca_turu: "kapak-contasi" });
    const metin = JSON.stringify(res.govde);
    for (const v of GIZLI) expect(metin, `cevapta gizli değer: ${v}`).not.toContain(v);
  });

  it("servis ürünü: servis kartı korunur, satıcı türü 'servis'", async () => {
    const res = sahteRes();
    await urunDetay({ method: "GET", query: { id: "u-sv" }, headers: {} }, res);
    expect(res.govde.servis).toMatchObject({ id: "sv-1", ad: "Kadıköy Servis" });
    expect(res.govde.satici.tur).toBe("servis");
    expect(JSON.stringify(res.govde)).not.toContain("TR220000000000000000000002");
  });

  it("sipariş: Benservis kalemi satıcı adı + türüyle yazılır, tutar sunucuda", async () => {
    const res = sahteRes();
    await siparis({ method: "POST", body: { urun_idler: ["u-bs", "u-sv"], alici_ad: "A B", alici_tel: "05551112233" } }, res);
    expect(res.kod).toBe(201);
    const s = eklenen.find((e) => e.tablo === "siparisler").satir;
    expect(s.tutar).toBe(9450);
    const bs = s.urunler.find((k) => k.urun_id === "u-bs");
    expect(bs).toMatchObject({ servis_id: null, servis_ad: "Benservis", satici_id: "st-bs", satici_tur: "benservis" });
    expect(s.urunler.find((k) => k.urun_id === "u-sv").servis_ad).toBe("Kadıköy Servis");
  });

  it("sipariş: stok 0 olan ürün 409", async () => {
    const res = sahteRes();
    await siparis({ method: "POST", body: { urun_idler: ["u-0"], alici_ad: "A B", alici_tel: "05551112233" } }, res);
    expect(res.kod).toBe(409);
    expect(res.govde.pasif_idler).toEqual(["u-0"]);
    expect(eklenen).toEqual([]);
  });

  it("/ikinci-el listesi Benservis kataloğunu göstermez (servis ürünü aynen)", async () => {
    const res = sahteRes();
    await liste({ method: "GET", query: {}, headers: {} }, res);
    const idler = res.govde.ilanlar.map((i) => i.id);
    expect(idler).toContain("u-sv");
    expect(idler).not.toContain("u-bs");
  });

  it("servis paneli ürün ekleyince satıcıya bağlanır, kategori tip'ten türer", async () => {
    tablolar.saticilar = [{ ...S_BENSERVIS }]; // servisin satıcı kaydı henüz yok
    const res = sahteRes();
    await servisUrunler({
      method: "POST", headers: { authorization: "Bearer servis-jwt" },
      body: { tip: "yedek_parca", baslik: "Pompa", fiyat: 300 },
    }, res);
    expect(res.kod).toBe(201);
    const yeniSatici = tablolar.saticilar.find((s) => s.servis_id === "sv-1");
    expect(yeniSatici).toMatchObject({ ad: "Kadıköy Servis", tur: "servis" });
    const urun = eklenen.find((e) => e.tablo === "servis_urunler").satir;
    expect(urun).toMatchObject({ satici_id: yeniSatici.id, kategori: "yedek-parca", tur: "parca", servis_id: "sv-1" });
  });

  it("servis ürün listesi demo kayıt döndürmez", async () => {
    tablolar.servis_urunler.push({ ...URUN_SV, id: "u-demo", durum: "demo" });
    const res = sahteRes();
    await servisUrunler({ method: "GET", query: { servis_id: "sv-1", durum: "demo" }, headers: {} }, res);
    expect(res.govde.urunler.map((u) => u.id)).not.toContain("u-demo");
  });
});
