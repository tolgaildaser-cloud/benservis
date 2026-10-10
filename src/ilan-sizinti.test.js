// src/ilan-sizinti.test.js — YK #166 ön koşulu (10 Eki 2026) regresyon kilidi.
//
// NEDEN VAR: `GET /api/ilan/:id` ve `/ikinci-el/:id` OG sayfası yetkisiz ve
// `select("*")` ile satıcının telefonunu, IBAN'ını ve `satici_token`'ını (satıcı
// paneli anahtarı) herkese döndürüyordu; `PATCH` hiçbir kimlik istemeden her ilanı
// "satildi/silindi" yapabiliyordu. #166 gerçek satıcı ilanı açmadan önce kapandı.
//
// Ölçüm `dpp-fatura-sizinti.test.js` (#114) gibi DAVRANIŞI ölçer: sahte istemci
// `select("*")`a tüm satırı, kolon listesine yalnız istenenleri döndürür; `eq`/`in`/
// `neq` filtreleri de PostgREST gibi uygulanır.
//
// KIRILDIĞINDA: alanı geri eklemeyin — `api/_public-alanlar.js` tek kaynak.
import { describe, it, expect, beforeEach } from "vitest";

const ILAN = {
  id: "ilan-1", seri_no: "SNTEST0001", baslik: "Çamaşır makinesi", aciklama: "temiz",
  fiyat: 5000, konum: "Kadıköy", satici_ad: "Test Satıcı",
  satici_tel: "05550000000", satici_iban: "TR000000000000000000000000",
  satici_token: "gizli-satici-anahtari", fotograflar: [], durum: "aktif",
  goruntuleme_sayisi: 3, created_at: "2026-10-01T00:00:00Z", kategori: "camasir",
  tur: "cihaz", parca_turu: null, cihaz_turu: null, uyumlu_modeller: null, parca_durum: null,
};
const DEMO = { ...ILAN, id: "ilan-demo", durum: "demo" };
const CIHAZ = {
  id: "c-1", seri_no: "SNTEST0001", kategori: "Çamaşır Makinesi", marka: "Arçelik",
  model: "9123", garanti_bitis_tarihi: "2027-01-01", mevcut_durum: "çalışıyor",
  fatura_url: "gecici/gizli-fatura.pdf", notlar: "Ayşe Yılmaz", eposta: "ayse@ornek.com",
};
const TAMIR = {
  id: "t-1", cihaz_id: "c-1", tarih: "2026-02-02", yapilan_islem: "Pompa", maliyet: 1200,
  servis_turu: "harici", notlar: "Ayşe Hn.", servis_id: "SERVIS-GIZLI",
};

let tablolar;
const guncellemeler = [];

function alanSec(satir, kolonlar) {
  if (kolonlar === "*" || kolonlar === undefined) return { ...satir };
  const istenen = String(kolonlar).split(",").map((k) => k.trim()).filter(Boolean);
  return Object.fromEntries(istenen.map((k) => [k, satir[k]]));
}

function sahteSorgu(tablo) {
  const d = { kolonlar: "*", filtre: [], guncelle: null };
  const satirlar = () => tablolar[tablo].filter((s) => d.filtre.every((f) => f(s)));
  const z = {
    select(k) { d.kolonlar = k; return z; },
    update(v) { d.guncelle = v; return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    neq(k, v) { d.filtre.push((s) => s[k] !== v); return z; },
    in(k, l) { d.filtre.push((s) => l.includes(s[k])); return z; },
    order() { return z; },
    single() {
      const s = satirlar()[0];
      if (!s) return Promise.resolve({ data: null, error: { code: "PGRST116" } });
      return Promise.resolve({ data: alanSec(s, d.kolonlar), error: null });
    },
    then(ok, no) {
      const l = satirlar();
      if (d.guncelle) { l.forEach((s) => { Object.assign(s, d.guncelle); guncellemeler.push(s.id); }); }
      return Promise.resolve({ data: l.map((s) => alanSec(s, d.kolonlar)), error: null }).then(ok, no);
    },
  };
  return z;
}

import { vi } from "vitest";
vi.mock("../api/_supabase.js", () => ({ default: { from: (t) => sahteSorgu(t) } }));

const { default: detay } = await import("../api/ilan/[id].js");
const { default: og } = await import("../api/ilan/og.js");

function sahteRes() {
  const r = {
    kod: null, govde: null,
    setHeader() {}, status(k) { r.kod = k; return r; },
    json(g) { r.govde = g; return r; }, send(g) { r.govde = g; return r; }, end(g) { r.govde = g; return r; },
  };
  return r;
}

const YASAK = ["satici_tel", "satici_iban", "satici_token", "fatura_url", "notlar", "eposta", "servis_id"];
const GIZLI_DEGERLER = ["05550000000", "TR000000000000000000000000", "gizli-satici-anahtari", "gizli-fatura.pdf", "Ayşe", "ayse@ornek.com"];

beforeEach(() => {
  tablolar = { ilanlar: [{ ...ILAN }, { ...DEMO }], cihazlar: [{ ...CIHAZ }], tamir_kayitlari: [{ ...TAMIR }] };
  guncellemeler.length = 0;
});

describe("ilan uçları — satıcı verisi sızıntı kilidi (#166 ön koşulu)", () => {
  it("GET cevabında telefon / IBAN / satıcı anahtarı / DPP kişisel verisi yok", async () => {
    const res = sahteRes();
    await detay({ method: "GET", query: { id: "ilan-1" }, headers: {} }, res);
    expect(res.kod).toBe(200);
    expect(res.govde.dpp?.cihaz, "DPP kurgusu ölçülemiyor").toBeTruthy();
    const metin = JSON.stringify(res.govde);
    for (const a of YASAK) expect(metin, `cevapta \`${a}\` var`).not.toContain(`"${a}"`);
    for (const v of GIZLI_DEGERLER) expect(metin, `cevapta gizli değer: ${v}`).not.toContain(v);
  });

  it("GET ilan sayfasının bastığı alanları korur", async () => {
    const res = sahteRes();
    await detay({ method: "GET", query: { id: "ilan-1" }, headers: {} }, res);
    for (const a of ["baslik", "aciklama", "fiyat", "konum", "satici_ad", "seri_no", "durum", "fotograflar"]) {
      expect(Object.keys(res.govde.ilan)).toContain(a);
    }
    expect(res.govde.dpp.cihaz.garanti_bitis_tarihi).toBe("2027-01-01");
    expect(res.govde.dpp.toplam_maliyet).toBe(1200);
  });

  it("demo ilan public uçtan 404", async () => {
    const res = sahteRes();
    await detay({ method: "GET", query: { id: "ilan-demo" }, headers: {} }, res);
    expect(res.kod).toBe(404);
  });

  it("OG sayfası telefon / IBAN / anahtar basmaz", async () => {
    const res = sahteRes();
    await og({ method: "GET", query: { id: "ilan-1" }, headers: {} }, res);
    const html = String(res.govde);
    expect(html).toContain("Çamaşır makinesi");
    for (const v of GIZLI_DEGERLER) expect(html, `OG'de gizli değer: ${v}`).not.toContain(v);
  });

  it("PATCH anahtarsız 401, yanlış anahtarla 403 — ilan değişmez", async () => {
    const r1 = sahteRes();
    await detay({ method: "PATCH", query: { id: "ilan-1" }, headers: {}, body: { durum: "silindi" } }, r1);
    expect(r1.kod).toBe(401);
    const r2 = sahteRes();
    await detay({ method: "PATCH", query: { id: "ilan-1" }, headers: { authorization: "Bearer yanlis" }, body: { durum: "silindi" } }, r2);
    expect(r2.kod).toBe(403);
    expect(guncellemeler).toEqual([]);
    expect(tablolar.ilanlar[0].durum).toBe("aktif");
  });

  it("PATCH doğru satıcı anahtarıyla çalışır", async () => {
    const res = sahteRes();
    await detay({ method: "PATCH", query: { id: "ilan-1" }, headers: { authorization: "Bearer gizli-satici-anahtari" }, body: { durum: "satildi" } }, res);
    expect(res.kod).toBe(200);
    expect(tablolar.ilanlar[0].durum).toBe("satildi");
  });
});
