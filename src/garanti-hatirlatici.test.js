// src/garanti-hatirlatici.test.js — YK #136 garanti hatırlatıcısı kapıları.
//
// NE KORUYOR:
//  ① Onay kutusu boşken kayıt YOK (föy G kabul: "onay kutusu boşken kayıt 4xx") — sunucu ve
//     form aynı fonksiyonu okuyor, test fonksiyonu ve API ucunu ayrı ayrı sınar.
//  ② Tarih HESAPLANMAZ: kayıttaki bitiş tarihi kullanıcının girdiğiyle birebir.
//  ③ Kayıt her zaman `kaynak='garanti-hatirlatici'` + rıza sürümü taşır; seri no yazılmaz.
//  ④ Metin föyle birebir (başlık, onay cümlesi, başarı mesajı).
//  ⑤ E-posta DPP public alan listesine girmedi (sızıntı kalkanı, #114 deseni).
import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { garantiKaydiDogrula, METIN, RIZA_METIN_V } from "./garanti-hatirlatici.js";

const BUGUN = "2026-09-14";
const gecerli = {
  kategori: "Çamaşır makinesi", marka: "Arçelik", model: " 9103 YP ",
  satin_alma_tarihi: "2025-03", garanti_bitis_tarihi: "2027-03-15",
  eposta: " Ornek@Mail.com ", riza: true,
};

describe("garantiKaydiDogrula", () => {
  it("geçerli gövde → kayıt; bitiş tarihi girilenle birebir, hesap yok", () => {
    const { kayit, hata } = garantiKaydiDogrula(gecerli, BUGUN);
    expect(hata).toBeUndefined();
    expect(kayit).toEqual({
      kategori: "Çamaşır makinesi", marka: "Arçelik", model: "9103 YP",
      satin_alma_tarihi: "2025-03-01", garanti_bitis_tarihi: "2027-03-15",
      eposta: "ornek@mail.com", kaynak: "garanti-hatirlatici", riza_metin_v: RIZA_METIN_V,
    });
    expect("seri_no" in kayit).toBe(false);
  });

  it("onay yoksa (false, eksik, 'true' metni) kayıt yok", () => {
    for (const riza of [false, undefined, "true", 1]) {
      expect(garantiKaydiDogrula({ ...gecerli, riza }, BUGUN).hata).toMatch(/onay kutusu/);
    }
  });

  it("bozuk alanları reddeder", () => {
    const h = (x) => garantiKaydiDogrula({ ...gecerli, ...x }, BUGUN).hata;
    expect(h({ eposta: "ornek@" })).toMatch(/e-posta/);
    expect(h({ kategori: " " })).toMatch(/Cihaz/);
    expect(h({ satin_alma_tarihi: "" })).toMatch(/Satın alma/);
    expect(h({ garanti_bitis_tarihi: "2027-02-30" })).toMatch(/bitiş tarihini girin/);
    expect(h({ garanti_bitis_tarihi: "2026-09-14" })).toMatch(/geçmiş/);
    expect(h({ satin_alma_tarihi: "2026-10" })).toMatch(/ileri/);
    expect(h({ satin_alma_tarihi: "2026-09-01", garanti_bitis_tarihi: "2026-10-01" })).toBeUndefined();
  });

  it("marka/model boşsa null; uzun metin kırpılır", () => {
    const { kayit } = garantiKaydiDogrula({ ...gecerli, marka: "", model: "x".repeat(300) }, BUGUN);
    expect(kayit.marka).toBeNull();
    expect(kayit.model).toHaveLength(80);
  });
});

describe("föy metni birebir (§E)", () => {
  const foy = {
    baslik: "Garanti bitmeden hatırlatalım",
    dugme: "Hatırlatmayı kur",
    basari: "Kaydedildi. Garanti bitişinden 30 gün önce e-posta göndereceğiz. Kaydı silmek için info@benservis.com'a yazmanız yeterli.",
    onay: "Girdiğim e-posta adresine garanti bitiş hatırlatması gönderilmesini istiyorum. Verilerimin Gizlilik Politikası'nda açıklandığı şekilde işlenmesini kabul ediyorum. Bu onayı istediğim zaman info@benservis.com adresine yazarak geri alabilirim.",
  };
  it("başlık, düğme, başarı ve onay cümlesi", () => {
    expect(METIN.baslik).toBe(foy.baslik);
    expect(METIN.dugme).toBe(foy.dugme);
    expect(METIN.basari).toBe(foy.basari);
    expect(METIN.onayOnce + METIN.onayLink + METIN.onaySonra).toBe(foy.onay);
  });
});

describe("DPP public alan listesi", () => {
  it("eposta ve rıza kolonları anonim cevaba girmiyor", () => {
    const kaynak = fs.readFileSync(path.resolve(__dirname, "..", "api", "dpp", "cihaz.js"), "utf8");
    const liste = kaynak.match(/const CIHAZ_PUBLIC_ALANLAR = \[([\s\S]*?)\]/)[1];
    for (const k of ["eposta", "riza_ts", "riza_metin_v", "kaynak"]) expect(liste).not.toContain(`"${k}"`);
  });
});

// API ucu: sahte supabase ile — onay yoksa insert HİÇ çağrılmaz.
const insert = vi.fn(async () => ({ error: null }));
vi.mock("../api/_supabase.js", () => ({ default: { from: () => ({ insert }) } }));
vi.mock("../api/_ratelimit.js", () => ({ withRateLimit: (h) => h }));

function yanit() {
  const r = { kod: 0, govde: null };
  r.status = (k) => { r.kod = k; return r; };
  r.json = (g) => { r.govde = g; return r; };
  return r;
}

describe("POST /api/garanti/hatirlatici", () => {
  beforeEach(() => insert.mockClear());

  it("onay kutusu boş → 400, veritabanına yazılmaz", async () => {
    const { default: handler } = await import("../api/garanti/hatirlatici.js");
    const r = yanit();
    await handler({ method: "POST", body: { ...gecerli, garanti_bitis_tarihi: "2099-01-01", riza: false } }, r);
    expect(r.kod).toBe(400);
    expect(insert).not.toHaveBeenCalled();
  });

  it("geçerli → 201, kaynak + rıza zamanı + sürüm ile yazılır", async () => {
    const { default: handler } = await import("../api/garanti/hatirlatici.js");
    const r = yanit();
    await handler({ method: "POST", body: { ...gecerli, garanti_bitis_tarihi: "2099-01-01" } }, r);
    expect(r.kod).toBe(201);
    const satir = insert.mock.calls[0][0];
    expect(satir.kaynak).toBe("garanti-hatirlatici");
    expect(satir.riza_metin_v).toBe(RIZA_METIN_V);
    expect(Number.isNaN(Date.parse(satir.riza_ts))).toBe(false);
    expect(satir.garanti_bitis_tarihi).toBe("2099-01-01");
  });

  it("GET → 405", async () => {
    const { default: handler } = await import("../api/garanti/hatirlatici.js");
    const r = yanit();
    await handler({ method: "GET" }, r);
    expect(r.kod).toBe(405);
  });
});
