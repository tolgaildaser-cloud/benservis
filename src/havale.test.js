// src/havale.test.js — YK #174 (13 Eki 2026): Havale / EFT ile ödeme kilidi.
//
// NEDEN VAR: PayTR reddi sonrası geçici ödeme yolu. Kilitlenenler: IBAN/hesap adı yalnız env'de ve
// yalnız siparişi verene döner (kapı ucunda yok); seçenek env boşsa gizli; kart test modunda halka
// kapalı; havale siparişi `odeme_bekleniyor` + `havale` yazılır; ikinci el ayırması 24 saat; admin
// "geldi" → odendi + ilan satıldı, "iptal" → kilit kalkar; 24 saatte gelmeyen cron'da iptal.
// Değerler sahte (biçim için); gerçek IBAN yok.
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import fs from "node:fs";

let tablolar;
const yazilan = [];   // { tablo, islem, v, filtre }
const kilitCagri = [];

function sahteSorgu(tablo) {
  const d = { filtre: [], aciklama: [], insert: null, update: null };
  const satirlar = () => (tablolar[tablo] || []).filter((s) => d.filtre.every((f) => f(s)));
  const sonuc = () => {
    if (d.update) {
      const hedef = satirlar();
      hedef.forEach((s) => Object.assign(s, d.update));
      yazilan.push({ tablo, islem: "update", v: d.update, filtre: d.aciklama });
      return { data: hedef.map((s) => ({ ...s })), error: null };
    }
    return { data: satirlar(), error: null };
  };
  const z = {
    select() { return z; },
    in(k, v) { d.filtre.push((s) => v.includes(s[k])); d.aciklama.push(`${k} in`); return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); d.aciklama.push(`${k}=${v}`); return z; },
    neq(k, v) { d.filtre.push((s) => s[k] !== v); return z; },
    gt(k, v) { d.filtre.push((s) => s[k] > v); return z; },
    lt(k, v) { d.filtre.push((s) => s[k] < v); d.aciklama.push(`${k}<`); return z; },
    is(k, v) { d.filtre.push((s) => (s[k] ?? null) === v); return z; },
    or() { return z; },
    order() { return z; },
    limit() { return z; },
    insert(v) { d.insert = v; yazilan.push({ tablo, islem: "insert", v }); return z; },
    update(v) { d.update = v; return z; },
    maybeSingle() { return Promise.resolve({ data: satirlar()[0] || null, error: null }); },
    single() {
      return Promise.resolve(d.insert
        ? { data: { id: "11111111-2222-4333-8444-555555555555", siparis_no: "BS-HV-1", tutar: d.insert.tutar, odeme_durumu: "odeme_bekleniyor", created_at: "2026-10-13T10:00:00.000Z" }, error: null }
        : { data: satirlar()[0] || null, error: null });
    },
    then(ok, no) { return Promise.resolve(sonuc()).then(ok, no); },
  };
  return z;
}
vi.mock("../api/_supabase.js", () => ({ default: { from: (t) => sahteSorgu(t) } }));
vi.mock("../api/_verimor.js", () => ({ setCorsHeaders: () => {}, sendSMS: async () => {} }));
vi.mock("../api/_kilit.js", async (orijinal) => ({
  ...(await orijinal()),
  ilanKilitle: async (_sb, idler, _a, dk) => { kilitCagri.push(dk); return { kilitlenen: idler, bitis: "x" }; },
}));

const { havaleAyarlari, kartHalkaAcik, odemeSecenekleri } = await import("../api/_havale.js");
const { havaleSonuclandir, suresiDolanHavaleleriIptalEt } = await import("../api/_siparis-odeme.js");
const { HAVALE_SURE_SAAT, HAVALE_KILIT_DK, ibanBicimle, havaleSonu } = await import("./havale.js");
const { default: kapiUcu } = await import("../api/odeme/kapi.js");
const { default: siparis } = await import("../api/siparis.js");
const { default: adminPazar } = await import("../api/admin/pazar.js");
const { default: cron } = await import("../api/cron/expire.js");

function cagir(handler, { method = "GET", query = {}, body, headers = {} } = {}) {
  return new Promise((coz) => {
    const res = {
      kod: 200, basliklar: {},
      setHeader(k, v) { this.basliklar[k] = v; },
      status(k) { this.kod = k; return this; },
      json(v) { coz({ kod: this.kod, govde: v }); return this; },
      end() { coz({ kod: this.kod }); return this; },
      redirect() { coz({ kod: 302 }); return this; },
    };
    handler({ method, query, body, headers, socket: {} }, res);
  });
}

const SAHTE_IBAN = "TR000000000000000000000000";
const PAYTR = { PAYTR_MERCHANT_ID: "1", PAYTR_MERCHANT_KEY: "k", PAYTR_MERCHANT_SALT: "s" };
const ADMIN = "sahte-admin";
const ADMIN_BASLIK = { authorization: `Bearer ${ADMIN}` };
const ALICI = { alici_ad: "Test Alıcı", alici_tel: "05551234567", alici_adres: "Örnek Mah. Deneme Sk. No:1 Kadıköy", alici_email: "test@ornek.com", sozlesme_onay: true };

beforeEach(() => {
  yazilan.length = 0; kilitCagri.length = 0;
  tablolar = {
    saticilar: [{ id: "st-bs", ad: "Benservis", tur: "benservis" }],
    servis_urunler: [{ id: "u1", satici_id: "st-bs", servis_id: null, baslik: "Kapı contası", fiyat: 450, durum: "aktif", stok: 3 }],
    ilanlar: [{ id: "i1", dosya_no: "BS-2E-000001", baslik: "Buzdolabı", fiyat: 9000, durum: "aktif", stok: 1, satici_id: "st-bs", cihaz_id: "c1", teslim_secenekleri: null, kilit_token: "k", kilit_bitis: "z" }],
    siparisler: [],
  };
  for (const [k, v] of Object.entries(PAYTR)) vi.stubEnv(k, v);
  vi.stubEnv("PAYTR_TEST_MODE", "1");
  vi.stubEnv("ODEME_SAGLAYICI", "");
  vi.stubEnv("ADMIN_TOKEN", ADMIN);
  vi.stubEnv("ADMIN_PASSWORD", "");
  vi.stubEnv("HAVALE_IBAN", SAHTE_IBAN);
  vi.stubEnv("HAVALE_HESAP_ADI", "Örnek Hesap");
  vi.stubEnv("CRON_SECRET", "cron-sir");
});
afterEach(() => vi.unstubAllEnvs());

describe("ayarlar ve seçenekler", () => {
  it("havale yalnız IBAN + hesap adı birlikte ve IBAN TR+24 haneyse açık; boşluk/küçük harf normalize", () => {
    expect(havaleAyarlari({})).toBeNull();
    expect(havaleAyarlari({ HAVALE_IBAN: SAHTE_IBAN })).toBeNull();
    expect(havaleAyarlari({ HAVALE_HESAP_ADI: "X" })).toBeNull();
    const err = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(havaleAyarlari({ HAVALE_IBAN: "TR12", HAVALE_HESAP_ADI: "X" })).toBeNull();
    err.mockRestore();
    expect(havaleAyarlari({ HAVALE_IBAN: "tr00 0000 0000 0000 0000 0000 00", HAVALE_HESAP_ADI: " X " }))
      .toEqual({ iban: SAHTE_IBAN, hesapAdi: "X" });
  });

  it("kart: test modunda halka kapalı, admin'e açık; PAYTR_TEST_MODE=0 ya da ODEME_SAGLAYICI açar", () => {
    expect(kartHalkaAcik({ ...PAYTR, PAYTR_TEST_MODE: "1" })).toBe(false);
    expect(kartHalkaAcik({ ...PAYTR, PAYTR_TEST_MODE: "0" })).toBe(true);
    expect(kartHalkaAcik({ ...PAYTR, PAYTR_TEST_MODE: "1", ODEME_SAGLAYICI: "iyzico" })).toBe(true);
    expect(kartHalkaAcik({})).toBe(false);
    const env = { ...PAYTR, PAYTR_TEST_MODE: "1", ADMIN_TOKEN: ADMIN };
    expect(odemeSecenekleri({ headers: {} }, env)).toEqual({ kart: false, havale: false, kapi: true });
    expect(odemeSecenekleri({ headers: ADMIN_BASLIK }, env)).toEqual({ kart: true, havale: false, kapi: false });
    expect(odemeSecenekleri({ headers: {} }, { ...env, HAVALE_IBAN: SAHTE_IBAN, HAVALE_HESAP_ADI: "X" }))
      .toEqual({ kart: false, havale: true, kapi: false });
  });

  it("biçim yardımcıları: 4'erli IBAN, son ödeme = sipariş + 24 saat, kilit 24 saat", () => {
    expect(ibanBicimle(SAHTE_IBAN)).toBe("TR00 0000 0000 0000 0000 0000 00");
    expect(HAVALE_SURE_SAAT).toBe(24);
    expect(HAVALE_KILIT_DK).toBe(1440);
    expect(havaleSonu("2026-10-13T10:00:00.000Z").toISOString()).toBe("2026-10-14T10:00:00.000Z");
  });
});

describe("GET /api/odeme/kapi", () => {
  it("havale açıkken kapı yok; IBAN ve hesap adı bu uçta DÖNMEZ", async () => {
    const h = await cagir(kapiUcu);
    expect(h.govde).toEqual({ kapi: false, kart: false, havale: true });
    expect(JSON.stringify(h.govde)).not.toContain(SAHTE_IBAN);
    expect(JSON.stringify(h.govde)).not.toContain("Örnek Hesap");
  });
});

describe("POST /api/siparis — havale", () => {
  it("havale seçilince sipariş havale + bekliyor yazılır; talimat cevapta, kayda IBAN yazılmaz", async () => {
    const r = await cagir(siparis, { method: "POST", body: { urun_idler: ["u1"], ...ALICI, odeme_yontemi: "havale" } });
    expect(r.kod).toBe(201);
    expect(r.govde.odeme).toBe("havale");
    expect(r.govde.odeme_url).toBeUndefined();
    expect(r.govde.havale).toEqual({
      hesap_adi: "Örnek Hesap", iban: SAHTE_IBAN, tutar: 450 + 189, aciklama: "BS-HV-1",
      son_odeme: "2026-10-14T10:00:00.000Z",
    });
    const ins = yazilan.find((y) => y.islem === "insert").v;
    expect(ins.odeme_saglayici).toBe("havale");
    expect(ins.tutar).toBe(639);
    expect(JSON.stringify(ins)).not.toContain(SAHTE_IBAN);
    expect(yazilan.filter((y) => y.tablo === "servis_urunler" && y.islem === "update")).toHaveLength(0); // stok düşmez
  });

  it("ikinci el havalede 24 saat ayrılır; kartta 30 dk", async () => {
    await cagir(siparis, { method: "POST", body: { ilanlar: [{ id: "i1", teslim: "depo" }], sepet_anahtari: "aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee", ...ALICI, odeme_yontemi: "havale" } });
    expect(kilitCagri).toEqual([HAVALE_KILIT_DK]);
    vi.stubEnv("PAYTR_TEST_MODE", "0");
    await cagir(siparis, { method: "POST", body: { ilanlar: [{ id: "i1", teslim: "depo" }], sepet_anahtari: "aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee", ...ALICI } });
    expect(kilitCagri).toEqual([HAVALE_KILIT_DK, 30]);
  });

  it("havale env boşsa 400; kart kapalı + havale açıkken kart isteği 400 + yönlendirme; ikisi de kapalıysa kapı 403", async () => {
    const r1 = await cagir(siparis, { method: "POST", body: { urun_idler: ["u1"], ...ALICI } });
    expect(r1.kod).toBe(400);
    expect(r1.govde.odeme_yontemi).toBe("havale");
    vi.stubEnv("HAVALE_IBAN", "");
    const r2 = await cagir(siparis, { method: "POST", body: { urun_idler: ["u1"], ...ALICI, odeme_yontemi: "havale" } });
    expect(r2.kod).toBe(400);
    const r3 = await cagir(siparis, { method: "POST", body: { urun_idler: ["u1"], ...ALICI } });
    expect(r3.kod).toBe(403);
    expect(yazilan.filter((y) => y.islem === "insert")).toHaveLength(0);
    expect(kilitCagri).toHaveLength(0);
  });

  it("admin anahtarıyla kart (test ödemesi) havale açıkken de PayTR'ye gider", async () => {
    const r = await cagir(siparis, { method: "POST", body: { urun_idler: ["u1"], ...ALICI }, headers: ADMIN_BASLIK });
    expect(r.kod).toBe(201);
    expect(r.govde.odeme).toBe("paytr");
  });
});

describe("sonuçlandırma: admin + cron", () => {
  const bekleyen = (ek = {}) => ({ id: "s1", siparis_no: "BS-HV-1", odeme_saglayici: "havale", odeme_durumu: "odeme_bekleniyor", created_at: "2026-10-13T10:00:00.000Z", urunler: [{ ilan_id: "i1" }, { urun_id: "u1" }], ...ek });

  it("geldi → odendi + ödeme tarihi, ikinci el satıldı/stok 0; tekrar → 409", async () => {
    tablolar.siparisler = [bekleyen()];
    const r = await havaleSonuclandir((await import("../api/_supabase.js")).default, "s1", "geldi", new Date("2026-10-13T12:00:00Z"));
    expect(r).toEqual({ durum: "odendi", siparis_no: "BS-HV-1" });
    expect(tablolar.siparisler[0].odeme_tarihi).toBe("2026-10-13T12:00:00.000Z");
    expect(tablolar.ilanlar[0]).toMatchObject({ durum: "satildi", stok: 0, kilit_token: null });
    const r2 = await havaleSonuclandir((await import("../api/_supabase.js")).default, "s1", "geldi");
    expect(r2.kod).toBe(409);
  });

  it("iptal → iptal, ilan satışta kalır ve ayırma kalkar; PayTR siparişine dokunmaz; geçersiz sonuç 400", async () => {
    tablolar.siparisler = [bekleyen(), bekleyen({ id: "s2", odeme_saglayici: "paytr" })];
    const sb = (await import("../api/_supabase.js")).default;
    expect((await havaleSonuclandir(sb, "s1", "iptal")).durum).toBe("iptal");
    expect(tablolar.ilanlar[0]).toMatchObject({ durum: "aktif", kilit_token: null, kilit_bitis: null });
    expect((await havaleSonuclandir(sb, "s2", "iptal")).kod).toBe(409);
    expect((await havaleSonuclandir(sb, "s1", "sil")).kod).toBe(400);
  });

  it("admin ucu: anahtarsız 401; anahtarla geldi işaretler", async () => {
    tablolar.siparisler = [bekleyen()];
    expect((await cagir(adminPazar, { method: "PATCH", query: { islem: "havale" }, body: { siparis_id: "s1", sonuc: "geldi" } })).kod).toBe(401);
    const r = await cagir(adminPazar, { method: "PATCH", query: { islem: "havale" }, body: { siparis_id: "s1", sonuc: "geldi" }, headers: ADMIN_BASLIK });
    expect(r.kod).toBe(200);
    expect(r.govde.durum).toBe("odendi");
  });

  it("cron: 24 saati geçen bekleyen havale iptal, yenisi kalır; iş yokken de çalışır", async () => {
    tablolar.siparisler = [bekleyen({ created_at: "2026-10-01T10:00:00.000Z" }), bekleyen({ id: "s3", created_at: new Date().toISOString() })];
    tablolar.is_talepleri = [];
    const sb = (await import("../api/_supabase.js")).default;
    expect(await suresiDolanHavaleleriIptalEt(sb)).toBe(1);
    expect(tablolar.siparisler.map((s) => s.odeme_durumu)).toEqual(["iptal", "odeme_bekleniyor"]);
    expect(tablolar.ilanlar[0].kilit_token).toBeNull();
    tablolar.siparisler[0].odeme_durumu = "odeme_bekleniyor";
    const r = await cagir(cron, { headers: { authorization: "Bearer cron-sir" } });
    expect(r.govde.havale_iptal).toBe(1);
  });
});

describe("metinler ve istemci", () => {
  it("ön bilgilendirme + mesafeli satışta havale maddesi ve 24 saat; aydınlatmada havale verisi", () => {
    const k = fs.readFileSync("scripts/pazar-hukuk.mjs", "utf8");
    expect(k).toContain("<strong>Havale / EFT ile ödeme:</strong>");
    expect(k).toContain("<p>3.4. Havale / EFT ile ödemede");
    expect(k).toContain("havale / EFT ile ödemede gönderen adı");
    expect(k).toContain("${HAVALE_SURE_SAAT} saat içinde");
  });

  it("sepet: yöntem gönderilir, talimat ekranda; IBAN tarayıcıda saklanmaz", () => {
    const k = fs.readFileSync("src/Sepet.jsx", "utf8");
    expect(k).toContain('odeme_yontemi: "havale"');
    expect(k).toContain("<HavaleTalimati");
    expect(k).not.toMatch(/(localStorage|sessionStorage)\.setItem\([^)]*iban/i);
    expect(fs.readFileSync("src/havale.js", "utf8")).not.toMatch(/TR\d{24}/);
  });
});
