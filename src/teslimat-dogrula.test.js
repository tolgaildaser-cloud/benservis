// src/teslimat-dogrula.test.js (kopya mock: havale.test.js) — YK #174 (13 Eki 2026): Havale / EFT ile ödeme kilidi.
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
    range() { return z; },
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
const { havaleSonuclandir, suresiDolanHavaleleriIptalEt, siparisIptal, IPTAL_EDILEBILIR } = await import("../api/_siparis-odeme.js");
const { siparisFiltresi } = await import("../api/admin/pazar.js");
const { telBicimle, telHref } = await import("./telefon.js");
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
const ALICI = { alici_ad: "Test Alıcı", alici_tel: "0532 741 82 96", alici_adres: "Moda Cad. No 12 D 4", alici_il: "İstanbul", alici_ilce: "Kadıköy", alici_mahalle: "Caferağa", alici_email: "test@ornek.com", sozlesme_onay: true };

beforeEach(() => {
  yazilan.length = 0; kilitCagri.length = 0;
  tablolar = {
    saticilar: [{ id: "st-bs", ad: "Benservis", tur: "benservis" }],
    servis_urunler: [{ id: "u1", satici_id: "st-bs", servis_id: null, baslik: "Kapı contası", fiyat: 450, durum: "aktif", stok: 3 }],
    ilanlar: [], siparisler: [],
  };
  for (const [k, v] of Object.entries(PAYTR)) vi.stubEnv(k, v);
  vi.stubEnv("PAYTR_TEST_MODE", "1");
  vi.stubEnv("ODEME_SAGLAYICI", "");
  vi.stubEnv("ADMIN_TOKEN", ADMIN);
  vi.stubEnv("ADMIN_PASSWORD", "");
  vi.stubEnv("HAVALE_IBAN", SAHTE_IBAN);
  vi.stubEnv("HAVALE_HESAP_ADI", "Örnek Hesap");
});
afterEach(() => vi.unstubAllEnvs());

const { cepDogrula, cepMaske, adresDogrula, adresSatiri, ILLER, ilceler } = await import("./teslimat-dogrula.js");
const gonder = (ek = {}) => cagir(siparis, { method: "POST", body: { urun_idler: ["u1"], ...ALICI, odeme_yontemi: "havale", ...ek } });
const insert = () => yazilan.find((y) => y.tablo === "siparisler" && y.islem === "insert")?.v;

describe("cep telefonu (Tolga 16 Eki: yalnız cep, saçma rakam yok)", () => {
  it("geçerli cep her yazımda kabul, +90 biçiminde döner", () => {
    for (const t of ["05327418296", "0532 741 82 96", "+90 532 741 82 96", "5327418296", "(0532) 741-82-96"]) {
      expect(cepDogrula(t), t).toEqual({ ok: true, ulusal: "5327418296", e164: "+905327418296" });
    }
  });
  it("red: boş · eksik/fazla hane · sabit hat · aynı rakam · ardışık dizi", () => {
    const red = {
      "": "zorunlu", "0532 741 82": "11 haneli", "0532 741 82 966": "11 haneli",
      "0216 345 67 89": "05 ile", "0555 555 55 55": "geçerli görünmüyor", "0532 000 00 00": "geçerli görünmüyor",
      "0532 123 45 67": "geçerli görünmüyor", "0532 765 43 21": "geçerli görünmüyor", "0545 678 90 12": "geçerli görünmüyor",
      "1111111111": "11 haneli",
    };
    for (const [t, parca] of Object.entries(red)) {
      const r = cepDogrula(t);
      expect(r.ok, t).toBe(false);
      expect(r.hata, t).toContain(parca);
    }
  });
  it("maske: yazarken 0532 741 82 96, 11 haneden fazlası kesilir", () => {
    expect(cepMaske("5327")).toBe("0532 7");
    expect(cepMaske("05327418296999")).toBe("0532 741 82 96");
    expect(cepMaske("+905327418296")).toBe("0532 741 82 96");
    expect(cepMaske("")).toBe("");
  });
});

describe("adres (il/ilçe listeden, mahalle + açık adres zorunlu)", () => {
  it("81 il; il → ilçe listesi", () => {
    expect(ILLER).toHaveLength(81);
    expect(ilceler("İstanbul")).toContain("Kadıköy");
    expect(ilceler("Yok")).toEqual([]);
  });
  it("geçerli adres boşlukları temizlenmiş döner", () => {
    expect(adresDogrula({ il: "İstanbul", ilce: "Kadıköy", mahalle: "  Caferağa ", acik: "Moda Cad.  No 12" }))
      .toEqual({ ok: true, adres: { il: "İstanbul", ilce: "Kadıköy", mahalle: "Caferağa", acik: "Moda Cad. No 12" } });
  });
  it("red: listede olmayan il/ilçe · başka ilin ilçesi · boş/rakamsal mahalle · kısa açık adres; rakam şartı YOK", () => {
    expect(adresDogrula({ il: "Atlantis", ilce: "Kadıköy", mahalle: "X Mah", acik: "Moda Cad. No 12" }).hatalar).toHaveProperty("il");
    expect(adresDogrula({ il: "Ankara", ilce: "Kadıköy", mahalle: "Caferağa", acik: "Moda Cad. No 12" }).hatalar).toEqual({ ilce: "İlçe seçin." });
    expect(adresDogrula({ il: "İstanbul", ilce: "Kadıköy", mahalle: "12", acik: "Moda Cad. No 12" }).hatalar).toHaveProperty("mahalle");
    expect(adresDogrula({ il: "İstanbul", ilce: "Kadıköy", mahalle: "Caferağa", acik: "No 5" }).hatalar).toHaveProperty("acik");
    expect(adresDogrula({ il: "İstanbul", ilce: "Kadıköy", mahalle: "Caferağa", acik: "Moda Caddesi yanı" }).ok).toBe(true);
  });
  it("tek satır: açık adres, mahalle, ilçe/il; eski siparişte yalnız açık adres", () => {
    expect(adresSatiri({ alici_adres: "Moda Cad. No 12", alici_mahalle: "Caferağa", alici_ilce: "Kadıköy", alici_il: "İstanbul" }))
      .toBe("Moda Cad. No 12, Caferağa Mah., Kadıköy/İstanbul");
    expect(adresSatiri({ alici_adres: "X Sk 1", alici_mahalle: "Moda Mahallesi" })).toBe("X Sk 1, Moda Mahallesi");
    expect(adresSatiri({ alici_adres: "Eski tek alan adres" })).toBe("Eski tek alan adres");
  });
});

describe("POST /api/siparis — pazar siparişi sunucu kuralları", () => {
  it("geçerli: il/ilçe/mahalle ayrı kolonlara, telefon +90, alici_adres = açık adres", async () => {
    const r = await gonder();
    expect(r.kod).toBe(201);
    expect(insert()).toMatchObject({ alici_tel: "+905327418296", alici_il: "İstanbul", alici_ilce: "Kadıköy", alici_mahalle: "Caferağa", alici_adres: "Moda Cad. No 12 D 4" });
  });
  it("saçma telefon → 400 alan tel, sipariş yazılmaz", async () => {
    const r = await gonder({ alici_tel: "0555 555 55 55" });
    expect(r.kod).toBe(400);
    expect(r.govde.alan).toBe("tel");
    expect(insert()).toBeUndefined();
  });
  it("sabit hat → 400", async () => {
    expect((await gonder({ alici_tel: "0216 345 67 89" })).kod).toBe(400);
  });
  it("listede olmayan ilçe / boş mahalle / kısa açık adres → 400 ve alan adı döner", async () => {
    expect((await gonder({ alici_ilce: "Çankaya" })).govde).toMatchObject({ alan: "ilce" });
    expect((await gonder({ alici_mahalle: "" })).govde).toMatchObject({ alan: "mahalle" });
    expect((await gonder({ alici_adres: "No 5" })).govde).toMatchObject({ alan: "acik" });
    expect(insert()).toBeUndefined();
  });
});
