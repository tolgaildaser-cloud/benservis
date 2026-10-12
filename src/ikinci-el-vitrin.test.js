// src/ikinci-el-vitrin.test.js — YK #171 İE-2 (11 Eki 2026) `/ikinci-el` vitrini kilidi.
//
// NEDEN VAR: vitrin yetkisiz ve herkese açık. Kırılırsa: ① seri no / cihaz_id (DPP köprüsü)
// public cevaba girer, ② pasif / stoksuz / cihaza bağlı olmayan ilan satışa çıkar, ③ "DPP"
// ön yüzde görünür (Tolga: "DPP hiç bir zaman gösterilmeyecek önde"), ④ sayfa arama motoruna
// açılır, ⑤ boş alan kartta "null" / "0 ay" diye basılır.
import { describe, it, expect, vi } from "vitest";
import fs from "node:fs";

const CIHAZ_A = "c-a", CIHAZ_B = "c-b";
const tablolar = {
  ilanlar: [
    { id: "i1", dosya_no: "BS-2E-000003", baslik: "Grundig buzdolabı", fiyat: 18999, durum: "aktif", stok: 1, cihaz_id: CIHAZ_A, seri_no: null, satici_tel: null, satici_iban: "TR00", satici_token: "gizli", satici_id: "st-bs", kontrol_listesi: [], demo: true, garanti_sinifi: "yok", created_at: "2026-10-11" },
    { id: "i2", dosya_no: "BS-2E-000004", baslik: "Thomson TV", fiyat: 24999, durum: "aktif", stok: 1, cihaz_id: CIHAZ_B, seri_no: null, satici_id: "st-bs", garanti_sinifi: "yok", created_at: "2026-10-10" },
    { id: "i3", dosya_no: "BS-2E-000001", baslik: "Haziran demo", fiyat: 1, durum: "pasif", stok: 1, cihaz_id: null, seri_no: "SN1", created_at: "2026-06-07" },
    { id: "i4", dosya_no: "BS-2E-000005", baslik: "Satıldı", fiyat: 1, durum: "aktif", stok: 0, cihaz_id: CIHAZ_A, created_at: "2026-10-09" },
    { id: "i5", dosya_no: "BS-2E-000006", baslik: "Eski akış", fiyat: 1, durum: "aktif", stok: 1, cihaz_id: null, seri_no: "SN2", created_at: "2026-10-09" },
  ],
  cihazlar: [
    { id: CIHAZ_A, seri_no: "DEMO2E-GRN-000001", marka: "Grundig", model: "Çift kapılı", fatura_url: "gizli.pdf", notlar: "Ad Soyad" },
    { id: CIHAZ_B, seri_no: "DEMO2E-THM-000002", marka: "Thomson", model: "75\"" },
  ],
};

function sahteSorgu(tablo) {
  const d = { filtre: [], kolon: "*" };
  const z = {
    select(k) { d.kolon = k; return z; },
    eq(k, v) { d.filtre.push((s) => s[k] === v); return z; },
    gt(k, v) { d.filtre.push((s) => s[k] > v); return z; },
    in(k, v) { d.filtre.push((s) => v.includes(s[k])); return z; },
    not(k, op, v) { if (op === "is") d.filtre.push((s) => (s[k] ?? null) !== v); return z; },
    order() { return z; }, limit() { return z; },
    then(ok, no) {
      const kolonlar = d.kolon === "*" ? null : d.kolon.split(",").map((x) => x.trim());
      const satirlar = (tablolar[tablo] || []).filter((s) => d.filtre.every((f) => f(s)));
      const data = satirlar.map((s) => (kolonlar ? Object.fromEntries(kolonlar.map((k) => [k, s[k]])) : { ...s }));
      return Promise.resolve({ data, error: null }).then(ok, no);
    },
  };
  return z;
}
vi.mock("../api/_supabase.js", () => ({ default: { from: (t) => sahteSorgu(t) } }));
vi.mock("@vercel/analytics", () => ({ track: () => {} }));
const { default: liste } = await import("../api/ikinci-el/liste.js");
const { garantiEtiketi, altSatir, aramaSuz, kullanimMetni } = await import("./IkinciElVitrin.jsx");

const cagir = (query) => new Promise((coz) => {
  const res = { kod: 200, setHeader() {}, status(k) { this.kod = k; return this; }, json(v) { coz({ kod: this.kod, govde: v }); return this; } };
  liste({ method: "GET", query, headers: {} }, res);
});

describe("GET /api/ikinci-el/liste", () => {
  it("yalnız aktif + stoklu + cihaza bağlı ilanlar; marka/model metin olarak", async () => {
    const r = await cagir({});
    expect(r.kod).toBe(200);
    expect(r.govde.ilanlar.map((i) => i.dosya_no)).toEqual(["BS-2E-000003", "BS-2E-000004"]);
    expect(r.govde.ilanlar[0].marka).toBe("Grundig");
  });

  it("seri no, cihaz_id, satıcı iletişimi, fatura, demo bayrağı cevaba girmez", async () => {
    const r = await cagir({});
    const metin = JSON.stringify(r.govde);
    for (const k of ["seri_no", "cihaz_id", "satici_tel", "satici_iban", "satici_token", "satici_id", "fatura", "notlar", "DEMO2E", "demo", "kontrol_listesi"]) {
      expect(metin).not.toContain(k);
    }
  });

  it("dosya no ile tek ilan; geçersiz biçim 400, olmayan 404", async () => {
    expect((await cagir({ dosya: "bs-2e-000004" })).govde.ilanlar.map((i) => i.id)).toEqual(["i2"]);
    expect((await cagir({ dosya: "BS-2E-12" })).kod).toBe(400);
    expect((await cagir({ dosya: "BS-2E-000001" })).kod).toBe(404); // pasif
    expect((await cagir({ dosya: "BS-2E-000005" })).kod).toBe(404); // stok 0
  });
});

describe("vitrin yardımcıları", () => {
  it("garanti 3 sınıf", () => {
    expect(garantiEtiketi({ garanti_sinifi: "yok" }).metin).toBe("Garantisiz");
    expect(garantiEtiketi({ garanti_sinifi: "benservis", garanti_ay: 6 }).metin).toBe("Benservis garantili · 6 ay");
    expect(garantiEtiketi({ garanti_sinifi: "marka", garanti_bitis: "2027-06-30" }).metin).toMatch(/^Marka garantili · bitiş Haziran 2027$/);
  });

  it("boş alan alt satıra yazılmaz (YK 11:5x)", () => {
    expect(altSatir({ uretim_yili: null, kullanim_suresi_ay: null, konum: "İstanbul" })).toBe("İstanbul");
    expect(altSatir({})).toBe("");
    expect(kullanimMetni(0)).toBeNull();
    expect(kullanimMetni(30)).toBe("2 yıl kullanıldı");
    expect(altSatir({ uretim_yili: 2021, kullanim_suresi_ay: 8, konum: "Kadıköy" })).toBe("2021 üretim · 8 ay kullanıldı · Kadıköy");
  });

  it("arama: dosya no · marka · model", () => {
    const l = [{ dosya_no: "BS-2E-000003", marka: "Grundig", model: "Çift kapılı" }, { dosya_no: "BS-2E-000004", marka: "Thomson", model: "75\"" }];
    expect(aramaSuz(l, "000004").length).toBe(1);
    expect(aramaSuz(l, "GRUNDİG").length).toBe(1);
    expect(aramaSuz(l, "").length).toBe(2);
  });
});

describe("sayfa kuralları", () => {
  const kodSatirlari = (dosya) => fs.readFileSync(dosya, "utf8").split("\n")
    .filter((s) => !/^\s*(\/\/|\/\*|\*)/.test(s)).join("\n");

  it("ön yüzde DPP adı, /dpp bağlantısı ve seri no yok", () => {
    for (const d of ["src/IkinciElVitrin.jsx", "src/PazarSekmeler.jsx"]) {
      const k = kodSatirlari(d);
      expect(k).not.toMatch(/DPP|\/dpp|seri_no|pasaport/i);
    }
  });

  it("noindex: sunucu başlığı + meta; sitemap dışı", () => {
    const v = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
    const kaynaklar = v.headers.filter((h) => h.headers.some((x) => x.key === "X-Robots-Tag")).map((h) => h.source);
    expect(kaynaklar).toEqual(expect.arrayContaining(["/ikinci-el", "/ikinci-el/:yol*"]));
    expect(fs.readFileSync("src/IkinciElVitrin.jsx", "utf8")).toContain('"noindex, nofollow"');
    if (fs.existsSync("public/sitemap.xml")) expect(fs.readFileSync("public/sitemap.xml", "utf8")).not.toContain("/ikinci-el");
  });

  it("dosya no rotası og.js'ten ÖNCE index.html'e gider", () => {
    const v = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
    const i = v.rewrites.findIndex((r) => r.source.startsWith("/ikinci-el/:dosya"));
    const j = v.rewrites.findIndex((r) => r.source === "/ikinci-el/:id");
    expect(i).toBeGreaterThanOrEqual(0);
    expect(i).toBeLessThan(j);
  });

  it("tek satır menü iki sayfada da; cihaz kırılımı menüde yok; Ürün kategorisi yok", () => {
    const pv = fs.readFileSync("src/PazarVitrin.jsx", "utf8");
    expect(pv).toContain('<PazarSekmeler etkin={f.ana ? "tum" : "yedek-parca"} git={git} />');
    expect(pv).not.toContain("pz-katnav");
    const ad = fs.readFileSync("src/PazarSekmeler.jsx", "utf8");
    for (const s of ["Tüm kategoriler", "İkinci El Ürün", "Yedek Parça"]) expect(ad).toContain(s);
    expect(fs.readFileSync("src/IkinciElVitrin.jsx", "utf8")).toContain('<PazarSekmeler etkin="ikinci-el" />');
    expect(fs.readFileSync("src/PazarVitrin.jsx", "utf8")).toContain('PAZAR_KATEGORILERI.filter((k) => k.slug === "yedek-parca")');
  });

  it("satıcı yalnız Benservis: vitrinde ilan ver düğmesi yok", () => {
    expect(kodSatirlari("src/IkinciElVitrin.jsx")).not.toContain("/ikinci-el/yeni");
  });
});
