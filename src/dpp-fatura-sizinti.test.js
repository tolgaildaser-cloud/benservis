// src/dpp-fatura-sizinti.test.js — YK Kararı #114 (30 Ağu 2026) regresyon kilidi.
//
// NEDEN VAR: `GET /api/dpp/cihaz?seri_no=…` YETKİSİZ ve `Access-Control-Allow-Origin: *`
// ile açık. `select("*")` yazdığı sürece cevap, cihazlar tablosunun TÜM kolonlarını
// döküyordu — `fatura_url` dahil. Fatura görselinde ad-soyad / adres / kart son hanesi
// olabilir → KVKK'da kişisel veri. Yani fatura, kazara değil TASARIMIN GEREĞİ olarak
// anonim erişime açıktı (#114'ün ölçtüğü üç halkanın ikincisi).
//
// Bu sızıntı SESSİZ geri gelebilir: kimse `select("*")` yazmasa bile, tabloya eklenen
// yeni bir kolon açık alan listesine girmediği sürece sorun çıkmaz — ama biri listeyi
// `"*"`a çevirdiği an her şey yeniden akar ve build de testler de YEŞİL kalır (#110'un
// "sessiz düşüş" sınıfı). Kapı bu yüzden DAVRANIŞI ölçer, satırı değil.
//
// ÖLÇÜM BİÇİMİ: sahte supabase istemcisi PostgREST gibi davranır — `select(kolonlar)`a
// yalnız İSTENEN kolonları döndürür, `select("*")`a HEPSİNİ. Kaynak satıra bilerek
// `fatura_url` ve `notlar` konur. Handler alan listesini bozarsa cevapta görünürler ve
// test kırılır.
//
// KIRILDIĞINDA: cevaba kişisel veri sızmış demektir. Alanı geri eklemeyin —
// `api/dpp/cihaz.js` içindeki CIHAZ_PUBLIC_ALANLAR / TAMIR_PUBLIC_ALANLAR listelerine
// bakın; bir alanın public olması gerekiyorsa hüküm YK'nın.
import { describe, it, expect, vi, beforeEach } from "vitest";
import { readFileSync } from "node:fs";

// Cevapta ASLA görünmemesi gereken alanlar (#114 + aynı sınıf alanlar).
const YASAK_CIHAZ_ALANLARI = ["fatura_url", "notlar"];
const YASAK_TAMIR_ALANLARI = ["notlar", "benservis_is_id", "servis_id"];

// Tabloların CANLI kolon listesi (30 Ağu 2026'da Supabase OpenAPI şemasından okundu).
// Sahte istemci `select("*")` çağrısına bunların tamamını döker — gerçek PostgREST gibi.
const CIHAZ_SATIRI = {
  id: "11111111-1111-1111-1111-111111111111",
  seri_no: "SNTEST0001",
  kategori: "Çamaşır Makinesi",
  marka: "Arçelik",
  model: "9123",
  renk: "beyaz",
  uretim_yili: 2019,
  satin_alma_tarihi: "2019-04-01",
  garanti_bitis_tarihi: "2021-04-01",
  fotograflar: [],
  notlar: "Müşteri Ayşe Yılmaz, Kadıköy Moda Cd. No:5 — 0555 000 00 00",
  created_at: "2026-01-01T00:00:00Z",
  garanti_baslangic_tarihi: "2019-04-01",
  uzatilmis_garanti: false,
  uzatilmis_garanti_bitis: null,
  fatura_url: "gecici/gizli-fatura.pdf",
  mevcut_durum: "çalışıyor",
};

const TAMIR_SATIRI = {
  id: "22222222-2222-2222-2222-222222222222",
  cihaz_id: CIHAZ_SATIRI.id,
  tarih: "2026-02-02",
  yapilan_islem: "Pompa değişimi",
  degistirilen_parcalar: ["tahliye pompası"],
  maliyet: 1200,
  servis_adi: "Test Servis",
  servis_turu: "harici",
  benservis_is_id: "IS-GIZLI-9",
  fotograflar: [],
  notlar: "Müşteri evde yoktu, komşuya bırakıldı — Ayşe Hn.",
  created_at: "2026-02-02T00:00:00Z",
  servis_id: "SERVIS-GIZLI-7",
};

// PostgREST'in alan seçimini taklit eder: "*" → tüm satır, aksi hâlde yalnız istenenler.
function alanSec(satir, kolonlar) {
  if (kolonlar === "*" || kolonlar === undefined) return { ...satir };
  const istenen = String(kolonlar).split(",").map((k) => k.trim()).filter(Boolean);
  return Object.fromEntries(istenen.map((k) => [k, satir[k]]));
}

// Zincirlenebilir sahte sorgu: .select().eq().single() / .order() / .insert().select()
function sahteSorgu(satirlar) {
  const durum = { kolonlar: "*" };
  const zincir = {
    select(kolonlar) { durum.kolonlar = kolonlar; return zincir; },
    insert() { return zincir; },
    update() { return zincir; },
    eq() { return zincir; },
    is() { return zincir; },
    order() { return zincir; },
    single() {
      const s = satirlar[0];
      if (!s) return Promise.resolve({ data: null, error: { code: "PGRST116" } });
      return Promise.resolve({ data: alanSec(s, durum.kolonlar), error: null });
    },
    then(cozum, hata) {
      return Promise.resolve({
        data: satirlar.map((s) => alanSec(s, durum.kolonlar)),
        error: null,
      }).then(cozum, hata);
    },
  };
  return zincir;
}

vi.mock("../api/_supabase.js", () => ({
  default: {
    from(tablo) {
      if (tablo === "cihazlar") return sahteSorgu([CIHAZ_SATIRI]);
      if (tablo === "tamir_kayitlari") return sahteSorgu([TAMIR_SATIRI]);
      throw new Error(`Testte beklenmeyen tablo: ${tablo}`);
    },
  },
}));

const { default: handler } = await import("../api/dpp/cihaz.js");

// Vercel `res` nesnesinin testte yeten kadarı.
function sahteRes() {
  const res = {
    kod: null, govde: null, basliklar: {},
    setHeader(k, v) { res.basliklar[k] = v; },
    status(k) { res.kod = k; return res; },
    json(g) { res.govde = g; return res; },
    end() { return res; },
  };
  return res;
}

// Cevabın HER yerinde alan arar — üst düzeyde saklanmayan, iç içe sızıntıyı da yakalar.
function alanlariTopla(deger, biriken = new Set()) {
  if (Array.isArray(deger)) { deger.forEach((d) => alanlariTopla(d, biriken)); return biriken; }
  if (deger && typeof deger === "object") {
    for (const [k, v] of Object.entries(deger)) { biriken.add(k); alanlariTopla(v, biriken); }
  }
  return biriken;
}

describe("DPP pasaport ucu — fatura/kişisel veri sızıntısı kilidi (YK #114)", () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it("yetkisiz GET cevabında `fatura_url` YOKTUR", async () => {
    const res = sahteRes();
    await handler({ method: "GET", query: { seri_no: "SNTEST0001" }, headers: {} }, res);

    expect(res.kod, "GET 200 dönmeliydi").toBe(200);
    expect(res.govde?.cihaz, "cevapta cihaz yok — test kendi kurgusunu ölçemiyor").toBeTruthy();

    const alanlar = alanlariTopla(res.govde);
    expect(
      [...alanlar].filter((a) => a === "fatura_url"),
      "FATURA SIZINTISI: yetkisiz pasaport cevabı `fatura_url` döndürüyor (YK #114 halka ①)",
    ).toEqual([]);
    // Değerin kendisi de hiçbir ada gizlenmiş olmasın.
    expect(JSON.stringify(res.govde)).not.toContain("gizli-fatura.pdf");
  });

  it("yetkisiz GET cevabında serbest metin/iç kimlik alanları YOKTUR", async () => {
    const res = sahteRes();
    await handler({ method: "GET", query: { seri_no: "SNTEST0001" }, headers: {} }, res);

    const cihazAlanlari = Object.keys(res.govde.cihaz);
    expect(
      cihazAlanlari.filter((a) => YASAK_CIHAZ_ALANLARI.includes(a)),
      "cihaz kaydından public'e uygun olmayan alan sızıyor",
    ).toEqual([]);

    const tamirAlanlari = Object.keys(res.govde.tamirler[0] || {});
    expect(tamirAlanlari.length, "tamir kaydı boş geldi — test kendi kurgusunu ölçemiyor").toBeGreaterThan(0);
    expect(
      tamirAlanlari.filter((a) => YASAK_TAMIR_ALANLARI.includes(a)),
      "tamir kaydından public'e uygun olmayan alan sızıyor (tamir notunda müşteri adı/adresi olabilir)",
    ).toEqual([]);

    // Serbest metnin kendisi hiçbir yolla cevaba girmemeli.
    expect(JSON.stringify(res.govde)).not.toContain("Ayşe");
  });

  it("public sayfanın BASTIĞI alanlar cevapta durmaya devam eder (kapı fazla kesmiyor)", async () => {
    const res = sahteRes();
    await handler({ method: "GET", query: { seri_no: "SNTEST0001" }, headers: {} }, res);

    // DPPPublicPage.jsx ve DPPEkrani.jsx'in gerçekten okuduğu alanlar.
    for (const alan of [
      "id", "seri_no", "marka", "model", "kategori", "uretim_yili", "mevcut_durum",
      "garanti_baslangic_tarihi", "garanti_bitis_tarihi", "uzatilmis_garanti",
      "uzatilmis_garanti_bitis", "fotograflar",
    ]) {
      expect(Object.keys(res.govde.cihaz), `pasaport sayfası \`${alan}\` alanını basıyor, cevapta olmalı`).toContain(alan);
    }
    for (const alan of ["id", "tarih", "yapilan_islem", "servis_adi", "servis_turu", "maliyet", "degistirilen_parcalar", "fotograflar"]) {
      expect(Object.keys(res.govde.tamirler[0]), `tamir kartı \`${alan}\` alanını basıyor, cevapta olmalı`).toContain(alan);
    }
    expect(res.govde.toplam_maliyet).toBe(1200);
  });

  it("yetkisiz POST (mevcut cihaz) cevabı da aynı sözleşmeye tabidir", async () => {
    // POST da yetkisiz: seri no ile POST atan herkes mevcut kaydı geri alır.
    const res = sahteRes();
    await handler({ method: "POST", query: {}, headers: {}, body: { seri_no: "SNTEST0001" } }, res);

    expect(res.kod).toBe(200);
    const alanlar = alanlariTopla(res.govde);
    expect([...alanlar].filter((a) => a === "fatura_url"), "POST cevabı `fatura_url` sızdırıyor").toEqual([]);
    expect(JSON.stringify(res.govde)).not.toContain("gizli-fatura.pdf");
    expect(JSON.stringify(res.govde)).not.toContain("Ayşe");
  });

  it("POST artık kalıcı public URL kabul etmez, bucket içi yol bekler (#114 ③)", async () => {
    // Eski biçim (kalıcı public URL) REDDEDİLMELİ — kabul edilirse sızıntı geri gelir.
    const res = sahteRes();
    await handler({
      method: "POST", query: {}, headers: {},
      body: { seri_no: "SNYENI0002", fatura_url: "https://xyz.supabase.co/storage/v1/object/public/DPP%20Faturalar/a.pdf" },
    }, res);
    expect(res.kod, "kalıcı public URL kabul edildi — #114 ③ delindi").toBe(400);
  });

  it("kaynakta `select(\"*\")` kalmamıştır (yeni kolon sessizce public olmasın)", () => {
    const src = readFileSync(new URL("../api/dpp/cihaz.js", import.meta.url), "utf8");
    // Yorum satırlarını at, yalnız çalışan kodu ölç.
    const kod = src.split("\n").filter((s) => !s.trim().startsWith("//")).join("\n");
    expect(
      /\.select\(\s*["'`]\*["'`]\s*\)/.test(kod),
      "`select(\"*\")` geri gelmiş: tabloya eklenen her yeni kolon anonim erişime açılır",
    ).toBe(false);
  });
});

describe("public pasaport sayfası fatura bağlantısı basmaz (YK #114 halka ②)", () => {
  it("DPPPublicPage.jsx'te fatura bağlantısı yoktur", () => {
    const src = readFileSync(new URL("./DPPPublicPage.jsx", import.meta.url), "utf8");
    const kod = src.replace(/\{?\/\*[\s\S]*?\*\/\}?/g, ""); // yorumları çıkar
    expect(kod, "public sayfa yeniden fatura bağlantısı basıyor (#114 halka ②)").not.toContain("fatura_url");
  });

  it("fatura yüklerken kalıcı public URL üretilmez (#114 halka ③)", () => {
    const src = readFileSync(new URL("./DPPEkrani.jsx", import.meta.url), "utf8");
    const kod = src.split("\n").filter((s) => !s.trim().startsWith("//")).join("\n");
    const faturaBolumu = kod.slice(kod.indexOf("async function uploadFatura"), kod.indexOf("// Tasarım token"));
    expect(faturaBolumu.length, "uploadFatura bulunamadı — kilit yanlış yeri ölçüyor").toBeGreaterThan(100);
    expect(
      faturaBolumu.includes("getPublicUrl"),
      "fatura için `getPublicUrl()` geri gelmiş: DB'ye kalıcı anonim bağlantı yazılır (#114 ③)",
    ).toBe(false);
  });
});
