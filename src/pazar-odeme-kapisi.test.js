// src/pazar-odeme-kapisi.test.js — YK #173 şerhi (12 Eki 2026): PayTR test-modu ödeme kapısı kilidi.
//
// NEDEN VAR: PAYTR_TEST_MODE=1 iken halk ödeme adımına geçememeli (sipariş yazılmaz, parça talebi
// formuna yönlenir); test ödemesi yalnız admin anahtarıyla açılmalı; PAYTR_TEST_MODE=0 olunca kapı
// kendiliğinden kalkmalı. Anahtar değerleri burada da yok: yalnız sahte env adları.
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "node:fs";

const eklenen = [];
let tablolar;

function sahteSorgu(tablo) {
  const d = { filtre: [], kolon: null, insert: null };
  const satirlar = () => (tablolar[tablo] || []).filter((s) => d.filtre.every((f) => f(s)));
  const z = {
    select(k) { d.kolon = k; return z; },
    in(k, v) { d.filtre.push((s) => v.includes(s[k])); return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    insert(v) { d.insert = v; eklenen.push({ tablo, v }); return z; },
    single() {
      return Promise.resolve(d.insert
        ? { data: { id: "11111111-2222-4333-8444-555555555555", siparis_no: "BS-TEST-1", tutar: d.insert.tutar, odeme_durumu: "odeme_bekleniyor", created_at: "2026-10-12" }, error: null }
        : { data: satirlar()[0] || null, error: null });
    },
    then(ok, no) { return Promise.resolve({ data: satirlar(), error: null }).then(ok, no); },
  };
  return z;
}
vi.mock("../api/_supabase.js", () => ({ default: { from: (t) => sahteSorgu(t) } }));

const { odemeKapisi, paytrAyarlari } = await import("../api/_paytr.js");
const { adminYetkili } = await import("../api/_admin.js");
const { default: kapiUcu } = await import("../api/odeme/kapi.js");
const { default: siparis } = await import("../api/siparis.js");
const { KAPI_METNI, KAPI_KODU, talepBaglantisi } = await import("./odeme-kapisi.js");
const { filtreOku } = await import("./PazarVitrin.jsx");

function cagir(handler, { method = "GET", query = {}, body, headers = {} } = {}) {
  return new Promise((coz) => {
    const res = {
      kod: 200, basliklar: {},
      setHeader(k, v) { this.basliklar[k] = v; },
      status(k) { this.kod = k; return this; },
      json(v) { coz({ kod: this.kod, govde: v, basliklar: this.basliklar }); return this; },
      end() { coz({ kod: this.kod }); return this; },
    };
    handler({ method, query, body, headers, socket: {} }, res);
  });
}

// Sahte env — gerçek anahtar değil, yalnız biçim. Değer hiçbir çıktıya yazılmaz.
const TEST_ENV = { PAYTR_MERCHANT_ID: "1", PAYTR_MERCHANT_KEY: "k", PAYTR_MERCHANT_SALT: "s" };
const ADMIN = "sahte-admin-anahtari";
const ADMIN_BASLIK = { authorization: `Bearer ${ADMIN}` };

beforeEach(() => {
  eklenen.length = 0;
  tablolar = {
    saticilar: [{ id: "st-bs", ad: "Benservis", tur: "benservis" }],
    servis_urunler: [{ id: "u1", satici_id: "st-bs", servis_id: null, baslik: "Kapı contası", fiyat: 450, durum: "aktif", stok: 3 }],
  };
  for (const [k, v] of Object.entries(TEST_ENV)) vi.stubEnv(k, v);
  vi.stubEnv("ADMIN_TOKEN", ADMIN);
  vi.stubEnv("ADMIN_PASSWORD", "");
  vi.stubEnv("PAYTR_TEST_MODE", "1");
});
afterEach(() => vi.unstubAllEnvs());

describe("odemeKapisi + adminYetkili", () => {
  it("test modunda kapı var; PAYTR_TEST_MODE=0 kaldırır; PayTR tanımsızsa kapı yok (eski akış)", () => {
    expect(odemeKapisi({ ...TEST_ENV })).toBe(true);
    expect(odemeKapisi({ ...TEST_ENV, PAYTR_TEST_MODE: "1" })).toBe(true);
    expect(odemeKapisi({ ...TEST_ENV, PAYTR_TEST_MODE: "0" })).toBe(false);
    expect(odemeKapisi({})).toBe(false);
    expect(paytrAyarlari({ ...TEST_ENV, PAYTR_TEST_MODE: "0" }).testMode).toBe("0");
  });

  it("yalnız Bearer + env'deki anahtar; boş env, yanlış/boş değer, farklı şema reddedilir", () => {
    const env = { ADMIN_TOKEN: ADMIN, ADMIN_PASSWORD: "p2" };
    expect(adminYetkili({ headers: ADMIN_BASLIK }, env)).toBe(true);
    expect(adminYetkili({ headers: { authorization: "Bearer p2" } }, env)).toBe(true);
    expect(adminYetkili({ headers: { authorization: "Bearer yanlis" } }, env)).toBe(false);
    expect(adminYetkili({ headers: { authorization: "Bearer " } }, env)).toBe(false);
    expect(adminYetkili({ headers: { authorization: `Basic ${ADMIN}` } }, env)).toBe(false);
    expect(adminYetkili({ headers: ADMIN_BASLIK }, {})).toBe(false);
    expect(adminYetkili({ headers: {} }, env)).toBe(false);
  });
});

describe("GET /api/odeme/kapi", () => {
  it("halka kapı + metin; admin anahtarıyla kapı yok; cevap no-store", async () => {
    const h = await cagir(kapiUcu);
    expect(h.kod).toBe(200);
    expect(h.govde).toEqual({ kapi: true, metin: KAPI_METNI });
    expect(h.basliklar["Cache-Control"]).toBe("no-store");
    expect((await cagir(kapiUcu, { headers: ADMIN_BASLIK })).govde).toEqual({ kapi: false });
  });

  it("PAYTR_TEST_MODE=0 → herkese kapı yok; POST 405", async () => {
    vi.stubEnv("PAYTR_TEST_MODE", "0");
    expect((await cagir(kapiUcu)).govde).toEqual({ kapi: false });
    expect((await cagir(kapiUcu, { method: "POST" })).kod).toBe(405);
  });
});

describe("POST /api/siparis — pazar sepeti", () => {
  const govde = { urun_idler: ["u1"], alici_ad: "Test Alıcı", alici_tel: "05551234567", alici_adres: "Örnek Mah. Deneme Sk. No:1 Kadıköy", alici_email: "test@ornek.com", sozlesme_onay: true };

  it("test modunda halk: 403 + kapı kodu, sipariş YAZILMAZ", async () => {
    const r = await cagir(siparis, { method: "POST", body: govde });
    expect(r.kod).toBe(403);
    expect(r.govde).toEqual({ error: KAPI_METNI, kapi: KAPI_KODU });
    expect(eklenen).toHaveLength(0);
  });

  it("test modunda admin anahtarı: sipariş PayTR'ye gider", async () => {
    const r = await cagir(siparis, { method: "POST", body: govde, headers: ADMIN_BASLIK });
    expect(r.kod).toBe(201);
    expect(r.govde.odeme).toBe("paytr");
    expect(r.govde.odeme_url).toMatch(/^\/odeme\//);
    expect(eklenen).toHaveLength(1);
    expect(eklenen[0].v.odeme_saglayici).toBe("paytr");
  });

  it("canlı mod (PAYTR_TEST_MODE=0): kapı kendiliğinden kalkar, halk PayTR'ye gider", async () => {
    vi.stubEnv("PAYTR_TEST_MODE", "0");
    const r = await cagir(siparis, { method: "POST", body: govde });
    expect(r.kod).toBe(201);
    expect(r.govde.odeme).toBe("paytr");
  });

  it("PayTR tanımsız: eski 'ödeme yakında' akışı aynen (kapı devreye girmez)", async () => {
    for (const k of Object.keys(TEST_ENV)) vi.stubEnv(k, "");
    const r = await cagir(siparis, { method: "POST", body: govde });
    expect(r.kod).toBe(201);
    expect(r.govde.odeme).toBe("yakinda");
    expect(eklenen[0].v.odeme_saglayici).toBeUndefined();
  });
});

describe("parça talebi yönlendirmesi", () => {
  it("bağlantı: ürün adı + cihaz/parça slug'ı + kaynak, formun çapasına", () => {
    const href = talepBaglantisi({ baslik: "  Kombi   NTC sensör ", cihaz_turu: "kombi-termosifon", parca_turu: "termostat-sensor" });
    expect(href).toBe("/pazar?talep=Kombi+NTC+sens%C3%B6r&cihaz=kombi-termosifon&parca=termostat-sensor&k=odeme-kapisi#parca-talebi");
    expect(talepBaglantisi({ baslik: "x".repeat(200) })).toContain(`talep=${"x".repeat(120)}&k=`);
    expect(talepBaglantisi(null)).toBe("/pazar?talep=-&k=odeme-kapisi#parca-talebi");
  });

  it("/pazar `talep` ile ana görünüm açılır, cihaz/parça seçili gelir, kaynak odeme-kapisi", () => {
    const f = filtreOku("?talep=Kombi+NTC+sens%C3%B6r&cihaz=kombi-termosifon&parca=termostat-sensor&k=odeme-kapisi");
    expect(f).toMatchObject({ ana: true, talep: "Kombi NTC sensör", cihaz: "kombi-termosifon", parca: "termostat-sensor", kaynak: "odeme-kapisi" });
    expect(filtreOku("?cihaz=klima").ana).toBe(false); // talep yoksa süzgeç görünümü değişmez
    expect(filtreOku("?talep=" + "a".repeat(300)).talep).toHaveLength(120);
  });

  it("Sepet: kapı ucu okunur, kart metni ve talep bağlantısı var, admin başlığı yalnız /api'ye; metin ölçülmez", () => {
    const s = fs.readFileSync("src/Sepet.jsx", "utf8");
    expect(s).toContain('fetch("/api/odeme/kapi"');
    expect(s).toContain("KAPI_METNI");
    expect(s).toContain("talepBaglantisi(kapiKalemi)");
    expect(s).toContain("kapi === true");
    expect(s).toMatch(/if \(!res\.ok && d\?\.kapi\)/);
    expect(s).not.toMatch(/console\.(log|error)\([^)]*(sir|Authorization|benservis_admin)/);
    expect(fs.readFileSync("src/PazarVitrin.jsx", "utf8")).toContain("marka_model: filtre.talep");
    // Ürün adı (talep / marka_model) analitiğe gitmez — track çağrılarında bu alanlar yok.
    expect(fs.readFileSync("src/PazarVitrin.jsx", "utf8")).not.toMatch(/track\([^)]*(marka_model|filtre\.talep|form\.marka)/);
  });
});
