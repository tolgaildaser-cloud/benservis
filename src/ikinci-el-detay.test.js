// src/ikinci-el-detay.test.js — YK #171 İE-3 (11 Eki 2026) ikinci el ürün sayfası + satın alma kilidi.
//
// NEDEN VAR: ürün sayfası ve sipariş ucu yetkisiz. Kırılırsa: ① tam seri no / cihaz_id / tamir
// kaydının servis adı-maliyeti-notu public cevaba girer (DPP ön yüze sızar), ② istemcinin
// gönderdiği fiyat ya da ilanın açmadığı teslim şekli kabul edilir, ③ ikinci el siparişine
// kargo eklenir ya da nakliye/montaj ödemeye girer, ④ ödenen ilan satışta kalır (ikinci kez satılır).
import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "node:fs";

const BS = "st-bs", SERVIS = "st-sv";
let tablolar, guncellemeler, eklenen;

function sifirla() {
  guncellemeler = []; eklenen = [];
  tablolar = {
    saticilar: [{ id: BS, ad: "Benservis", tur: "benservis" }, { id: SERVIS, ad: "Servis", tur: "servis" }],
    ilanlar: [
      { id: "i1", dosya_no: "BS-2E-000003", baslik: "Grundig buzdolabı", fiyat: 18999, durum: "aktif", stok: 1, cihaz_id: "c1", satici_id: BS, teslim_secenekleri: ["depo", "nakliye", "montaj"], aciklama: "Demo", kontrol_listesi: [{ madde: "Soğutma", sonuc: "uygun" }], ic_fotograflar: [], fotograflar: [], garanti_sinifi: "yok", cihaz_turu: "buzdolabi", created_at: "2026-10-11", satici_tel: "0555", satici_token: "gizli" },
      { id: "i2", dosya_no: "BS-2E-000004", baslik: "TV", fiyat: 24999, durum: "aktif", stok: 1, cihaz_id: "c2", satici_id: BS, teslim_secenekleri: ["depo"], garanti_sinifi: "yok", created_at: "2026-10-10" },
      { id: "i3", dosya_no: "BS-2E-000005", baslik: "Satıldı", fiyat: 1000, durum: "satildi", stok: 0, cihaz_id: "c2", satici_id: BS, teslim_secenekleri: ["depo"], created_at: "2026-10-09" },
      { id: "i4", dosya_no: "BS-2E-000006", baslik: "Servis ilanı", fiyat: 1000, durum: "aktif", stok: 1, cihaz_id: "c2", satici_id: SERVIS, teslim_secenekleri: ["depo"], created_at: "2026-10-09" },
    ],
    cihazlar: [
      { id: "c1", seri_no: "DEMO2E-GRN-000001", marka: "Grundig", model: "Çift kapılı", fatura_url: "gizli.pdf", notlar: "Ad Soyad" },
      { id: "c2", seri_no: "DEMO2E-THM-000002", marka: "Thomson", model: "75\"" },
    ],
    tamir_kayitlari: [
      { id: "t1", cihaz_id: "c1", tarih: "2026-09-15", yapilan_islem: "Kompresör değişimi", degistirilen_parcalar: ["Kompresör"], servis_adi: "GİZLİ SERVİS", maliyet: 4321, notlar: "Ayşe Hn.", servis_id: "SV-GIZLI" },
    ],
    servis_urunler: [
      { id: "u1", servis_id: null, satici_id: BS, baslik: "Conta", fiyat: 199, durum: "aktif", stok: 5 },
    ],
    siparisler: [],
  };
}

function sahteSorgu(tablo) {
  const d = { filtre: [], kolon: "*", guncelle: null, ekle: null };
  const satirlar = () => (tablolar[tablo] || []).filter((s) => d.filtre.every((f) => f(s)));
  const sec = (s) => {
    if (d.kolon === "*") return { ...s };
    const k = d.kolon.split(",").map((x) => x.trim());
    return Object.fromEntries(k.map((x) => [x, s[x]]));
  };
  const z = {
    select(k) { d.kolon = k || "*"; return z; },
    insert(v) { d.ekle = v; return z; },
    update(v) { d.guncelle = v; return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    neq(k, v) { d.filtre.push((s) => s[k] !== v); return z; },
    gt(k, v) { d.filtre.push((s) => s[k] > v); return z; },
    in(k, v) { d.filtre.push((s) => v.includes(s[k])); return z; },
    not(k, op, v) { if (op === "is") d.filtre.push((s) => (s[k] ?? null) !== v); return z; },
    // Yalnız api/_kilit.js'in "boş | süresi dolmuş | bu sepetin" koşulu.
    or(kosul) {
      const m = kosul.match(/^kilit_bitis\.is\.null,kilit_bitis\.lt\."([^"]+)",kilit_token\.eq\."([^"]+)"$/);
      if (!m) throw new Error(`beklenmeyen or: ${kosul}`);
      d.filtre.push((s) => !s.kilit_bitis || s.kilit_bitis < m[1] || s.kilit_token === m[2]);
      return z;
    },
    order() { return z; }, limit() { return z; },
    maybeSingle() { return z.single(); },
    single() {
      if (d.ekle) {
        const satir = { id: "sp-1", siparis_no: "SP-0009", odeme_durumu: "odeme_bekleniyor", created_at: "2026-10-11", ...d.ekle };
        eklenen.push(satir); tablolar.siparisler.push(satir);
        return Promise.resolve({ data: sec(satir), error: null });
      }
      const s = satirlar()[0];
      return Promise.resolve(s ? { data: sec(s), error: null } : { data: null, error: { code: "PGRST116" } });
    },
    then(ok, no) {
      const l = satirlar();
      if (d.guncelle) { l.forEach((s) => { Object.assign(s, d.guncelle); guncellemeler.push({ tablo, id: s.id, ...d.guncelle }); }); }
      return Promise.resolve({ data: l.map(sec), error: null }).then(ok, no);
    },
  };
  return z;
}
vi.mock("../api/_supabase.js", () => ({ default: { from: (t) => sahteSorgu(t) } }));
vi.mock("@vercel/analytics", () => ({ track: () => {} }));
vi.mock("../api/_paytr.js", async (orijinal) => ({
  ...(await orijinal()),
  // testMode "0" = canlı PayTR: kart halka açık (YK #174 seçenek mantığı bu alanı okur).
  paytrAyarlari: () => ({ merchant_id: "x", merchant_key: "k", merchant_salt: "s", testMode: "0" }),
  paytrBildirimGecerli: () => true,
}));

const { default: liste, seriMaskele } = await import("../api/ikinci-el/liste.js");
const { default: siparis } = await import("../api/siparis.js");
const { default: callback, satilanIlanlar } = await import("../api/odeme/callback.js");
const { ilanTeslimSecenekleri } = await import("./ikinci-el-teslim.js");
const { default: kilit } = await import("../api/ikinci-el/kilit.js");
const { kalanMs, sureMetni } = await import("./ikinci-el-kilit.js");
const { degisenBolgeler, SEMALAR } = await import("./IkinciElDetay.jsx");

const cagir = (fn, req) => new Promise((coz) => {
  const res = {
    kod: 200, setHeader() {}, status(k) { this.kod = k; return this; },
    json(v) { coz({ kod: this.kod, govde: v }); return this; }, send(v) { coz({ kod: this.kod, govde: v }); return this; },
    end() { coz({ kod: this.kod }); return this; }, redirect(k, u) { coz({ kod: k, govde: u }); return this; },
  };
  fn({ headers: {}, query: {}, ...req }, res);
});
const BENIM = "aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee", BASKASI = "11111111-2222-4333-8444-555555555555";
const ALICI = { alici_ad: "Test Alıcı", alici_tel: "05551112233", alici_adres: "Kadıköy Moda Cad. No 1", alici_email: "test@ornek.com", sozlesme_onay: true, sepet_anahtari: BENIM };
const gelecek = (dk) => new Date(Date.now() + dk * 60000).toISOString();

beforeEach(sifirla);

describe("GET /api/ikinci-el/liste?dosya= — detay", () => {
  it("maskeli seri no + değişen parçalar; tam seri no, cihaz_id, tamir iç alanları yok", async () => {
    const r = await cagir(liste, { method: "GET", query: { dosya: "BS-2E-000003" } });
    expect(r.kod).toBe(200);
    const i = r.govde.ilanlar[0];
    expect(i.seri_maskeli).toBe("****0001");
    expect(i.degisen_parcalar).toEqual([{ tarih: "2026-09-15", islem: "Kompresör değişimi", parcalar: ["Kompresör"] }]);
    expect(i.kontrol_listesi.length).toBe(1);
    const metin = JSON.stringify(r.govde);
    for (const k of ["DEMO2E", "seri_no", "cihaz_id", "GİZLİ SERVİS", "4321", "Ayşe", "SV-GIZLI", "fatura", "satici_tel", "satici_token", "0555"]) {
      expect(metin).not.toContain(k);
    }
  });

  it("liste modunda detay alanları ve seri no hiç dönmez", async () => {
    const r = await cagir(liste, { method: "GET" });
    const metin = JSON.stringify(r.govde);
    for (const k of ["seri_maskeli", "kontrol_listesi", "degisen_parcalar", "aciklama", "****"]) expect(metin).not.toContain(k);
  });

  it("seriMaskele", () => {
    expect(seriMaskele("AB 12 34 5678")).toBe("****5678");
    expect(seriMaskele("12")).toBeNull();
    expect(seriMaskele(null)).toBeNull();
  });
});

describe("POST /api/siparis — ikinci el", () => {
  it("fiyat DB'den, teslim kalemde, kargo yok; PayTR'ye gider", async () => {
    const r = await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "i1", teslim: "nakliye", fiyat: 1 }] } });
    expect(r.kod).toBe(201);
    expect(r.govde.odeme).toBe("paytr");
    const s = eklenen[0];
    expect(s.tutar).toBe(18999);
    expect(s.kargo_tl).toBe(0);
    expect(s.urunler).toEqual([expect.objectContaining({ ilan_id: "i1", dosya_no: "BS-2E-000003", fiyat: 18999, teslim: "nakliye", satici_tur: "benservis" })]);
  });

  it("yedek parça ile birlikte: kargo yalnız parça için bir kez", async () => {
    const r = await cagir(siparis, { method: "POST", body: { ...ALICI, urun_idler: ["u1"], ilanlar: [{ id: "i2" }] } });
    expect(r.kod).toBe(201);
    // Kargo eşiği ikinci el bedelini saymaz: parça 199 TL < 3.000 → 189 TL kargo.
    expect(eklenen[0].tutar).toBe(199 + 24999 + 189);
    expect(eklenen[0].urunler.find((k) => k.ilan_id).teslim).toBe("depo");
  });

  it("ilanın açmadığı teslim 400; satılmış 409; servis ilanı / bilinmeyen 409", async () => {
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "i2", teslim: "montaj" }] } })).kod).toBe(400);
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "i1", teslim: "uydurma" }] } })).kod).toBe(400);
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "i3" }] } })).kod).toBe(409);
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "i4" }] } })).kod).toBe(409);
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "yok" }] } })).kod).toBe(409);
    expect(eklenen.length).toBe(0);
  });

  it("sözleşme onayı ve e-posta ikinci elde de zorunlu", async () => {
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, sozlesme_onay: false, ilanlar: [{ id: "i1" }] } })).kod).toBe(400);
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, alici_email: "", ilanlar: [{ id: "i1" }] } })).kod).toBe(400);
  });
});

describe("PayTR bildirimi — ödenen ilan satıldı", () => {
  it("ilk başarılı bildirimde ilan satildi + stok 0; tekrar bildirim dokunmaz", async () => {
    tablolar.siparisler.push({ id: "11111111-2222-3333-4444-555555555555", siparis_no: "SP-0010", tutar: 18999, odeme_durumu: "odeme_bekleniyor", urunler: [{ ilan_id: "i1", fiyat: 18999 }] });
    const govde = { merchant_oid: "11111111222233334444555555555555x1", status: "success", total_amount: "1899900", payment_amount: "1899900", test_mode: "1" };
    const r = await cagir(callback, { method: "POST", body: govde });
    expect(r.govde).toBe("OK");
    expect(tablolar.ilanlar.find((i) => i.id === "i1")).toMatchObject({ durum: "satildi", stok: 0 });
    const once = guncellemeler.length;
    await cagir(callback, { method: "POST", body: govde });
    expect(guncellemeler.length).toBe(once);
  });

  it("başarısız ödeme ilanı satışta bırakır", async () => {
    tablolar.siparisler.push({ id: "11111111-2222-3333-4444-666666666666", siparis_no: "SP-0011", tutar: 18999, odeme_durumu: "odeme_bekleniyor", urunler: [{ ilan_id: "i1" }] });
    await cagir(callback, { method: "POST", body: { merchant_oid: "11111111222233334444666666666666", status: "failed", failed_reason_msg: "red" } });
    expect(tablolar.ilanlar.find((i) => i.id === "i1").durum).toBe("aktif");
  });

  it("satilanIlanlar yalnız ilan kalemleri", () => {
    expect(satilanIlanlar({ urunler: [{ urun_id: "u1" }, { ilan_id: "i1" }, null] })).toEqual(["i1"]);
    expect(satilanIlanlar({})).toEqual([]);
  });
});

describe("teslim ve şema", () => {
  it("depo her zaman var, sıra sabit", () => {
    expect(ilanTeslimSecenekleri({ teslim_secenekleri: ["montaj"] }).map((t) => t.slug)).toEqual(["depo", "montaj"]);
    expect(ilanTeslimSecenekleri({}).map((t) => t.ek)).toEqual(["Ücretsiz"]);
  });

  it("nakliye/montaj tutarı yazılmaz: 'Ayrıca hesaplanır'", async () => {
    const { TESLIM_SECENEKLERI } = await import("./ikinci-el-teslim.js");
    expect(TESLIM_SECENEKLERI.filter((t) => t.slug !== "depo").every((t) => t.ek === "Ayrıca hesaplanır")).toBe(true);
    expect(JSON.stringify(TESLIM_SECENEKLERI)).not.toMatch(/\d+\s*TL/);
  });

  it("değişen parça şemada işaretlenir", () => {
    const d = [{ islem: "Kompresör değişimi", parcalar: ["Kompresör"] }];
    expect([...degisenBolgeler(SEMALAR.buzdolabi, d)]).toEqual(["sogutma"]);
    expect([...degisenBolgeler(SEMALAR.buzdolabi, [])]).toEqual([]);
    expect([...degisenBolgeler(null, d)]).toEqual([]);
  });

  it("ürün sayfasında DPP adı, /dpp bağlantısı, QR ve tam seri no yok", () => {
    const kod = fs.readFileSync("src/IkinciElDetay.jsx", "utf8").split("\n")
      .filter((s) => !/^\s*(\/\/|\/\*|\*)/.test(s)).join("\n");
    expect(kod).not.toMatch(/DPP|\/dpp|pasaport|qrcode|seri_no/i);
    expect(kod).toContain("Benservis kontrolü");
  });
});

describe("sepet kilidi (Tolga, 11 Eki 12:4x: 5 dk)", () => {
  const ilan = (id) => tablolar.ilanlar.find((i) => i.id === id);

  it("sepete ekleme 5 dk kilitler; başka sepet 409 alır; kendi sepeti yeniler", async () => {
    const r = await cagir(kilit, { method: "POST", body: { id: "11111111-0000-4000-8000-000000000001", anahtar: BENIM } });
    expect(r.kod).toBe(409); // böyle bir ilan yok
    tablolar.ilanlar[0].id = "11111111-0000-4000-8000-000000000001";
    const ok = await cagir(kilit, { method: "POST", body: { id: "11111111-0000-4000-8000-000000000001", anahtar: BENIM } });
    expect(ok.kod).toBe(200);
    const dk = (new Date(ok.govde.kilit_bitis) - Date.now()) / 60000;
    expect(dk).toBeGreaterThan(4.9); expect(dk).toBeLessThanOrEqual(5);
    expect(JSON.stringify(ok.govde)).not.toContain(BENIM);
    expect((await cagir(kilit, { method: "POST", body: { id: "11111111-0000-4000-8000-000000000001", anahtar: BASKASI } })).kod).toBe(409);
    expect((await cagir(kilit, { method: "POST", body: { id: "11111111-0000-4000-8000-000000000001", anahtar: BENIM } })).kod).toBe(200);
  });

  it("süresi dolan kilit başkasına geçer; bırakma yalnız kendi kilidini kaldırır", async () => {
    const id = "11111111-0000-4000-8000-000000000001";
    Object.assign(tablolar.ilanlar[0], { id, kilit_token: BASKASI, kilit_bitis: new Date(Date.now() - 1000).toISOString() });
    expect((await cagir(kilit, { method: "POST", body: { id, anahtar: BENIM } })).kod).toBe(200);
    await cagir(kilit, { method: "POST", body: { id, anahtar: BASKASI, birak: true } });
    expect(tablolar.ilanlar[0].kilit_token).toBe(BENIM);
    await cagir(kilit, { method: "POST", body: { id, anahtar: BENIM, birak: true } });
    expect(tablolar.ilanlar[0].kilit_token).toBeNull();
  });

  it("geçersiz anahtar ya da id 400 (süzgece serbest metin girmez)", async () => {
    expect((await cagir(kilit, { method: "POST", body: { id: "x", anahtar: BENIM } })).kod).toBe(400);
    expect((await cagir(kilit, { method: "POST", body: { id: "11111111-0000-4000-8000-000000000001", anahtar: 'a",kilit_token.is.null' } })).kod).toBe(400);
  });

  it("sipariş: başka sepette kilitliyse 409; boşsa 30 dk ödeme kilidi alır", async () => {
    Object.assign(ilan("i1"), { kilit_token: BASKASI, kilit_bitis: gelecek(3) });
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "i1" }] } })).kod).toBe(409);
    expect(eklenen.length).toBe(0);
    Object.assign(ilan("i1"), { kilit_token: null, kilit_bitis: null });
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "i1" }] } })).kod).toBe(201);
    expect(ilan("i1").kilit_token).toBe(BENIM);
    const dk = (new Date(ilan("i1").kilit_bitis) - Date.now()) / 60000;
    expect(dk).toBeGreaterThan(29.9);
  });

  it("sipariş: kendi süresi dolmuş kilidi de olsa ürün sepette kalır ve sipariş geçer", async () => {
    Object.assign(ilan("i1"), { kilit_token: BENIM, kilit_bitis: new Date(Date.now() - 60000).toISOString() });
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, ilanlar: [{ id: "i1" }] } })).kod).toBe(201);
  });

  it("sepet anahtarı olmadan ikinci el siparişi 400", async () => {
    expect((await cagir(siparis, { method: "POST", body: { ...ALICI, sepet_anahtari: undefined, ilanlar: [{ id: "i1" }] } })).kod).toBe(400);
  });

  it("detay: başkasının kilidi 'kilitli: true', kendi kilidi false; kilit alanları cevaba girmez", async () => {
    Object.assign(ilan("i1"), { kilit_token: BASKASI, kilit_bitis: gelecek(3) });
    const r = await cagir(liste, { method: "GET", query: { dosya: "BS-2E-000003", anahtar: BENIM } });
    expect(r.govde.ilanlar[0].kilitli).toBe(true);
    expect(JSON.stringify(r.govde)).not.toMatch(/kilit_token|kilit_bitis|11111111-2222/);
    const r2 = await cagir(liste, { method: "GET", query: { dosya: "BS-2E-000003", anahtar: BASKASI } });
    expect(r2.govde.ilanlar[0].kilitli).toBe(false);
  });

  it("başarısız ödeme kilidi bırakır", async () => {
    Object.assign(ilan("i1"), { kilit_token: BENIM, kilit_bitis: gelecek(30) });
    tablolar.siparisler.push({ id: "11111111-2222-3333-4444-777777777777", siparis_no: "SP-0012", tutar: 18999, odeme_durumu: "odeme_bekleniyor", urunler: [{ ilan_id: "i1" }] });
    await cagir(callback, { method: "POST", body: { merchant_oid: "11111111222233334444777777777777", status: "failed" } });
    expect(ilan("i1")).toMatchObject({ durum: "aktif", kilit_token: null, kilit_bitis: null });
  });

  it("geri sayım yardımcıları", () => {
    expect(kalanMs(null)).toBe(0);
    expect(kalanMs(new Date(1000).toISOString(), 5000)).toBe(0);
    expect(sureMetni(4 * 60000 + 5000)).toBe("4:05");
  });
});
