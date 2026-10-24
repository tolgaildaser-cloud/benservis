// src/yerinde-cekirdek.test.js — YK #183 PR-2: panel ve API'nin ortak kuralları + API karar fonksiyonları.
import { describe, it, expect, vi } from "vitest";
import {
  gecisGecerli, GECISLER, tekFor, cepNormal, kisiselVeriVar, randevuOner, cakisma, olayMetni, OLAY_DESEN,
  isUiya, ozet, haftaIciMi,
} from "./yerinde-cekirdek.js";

vi.mock("../api/_supabase.js", () => ({ default: {} }));
vi.mock("../api/_yerinde.js", () => ({ yerindeKimlik: async () => null, slotCakisti: () => false }));
vi.mock("../api/_verimor.js", () => ({ setCorsHeaders() {} }));

describe("geçiş tablosu (prototipteki düğmeler)", () => {
  it("izinli geçişler", () => {
    expect(gecisGecerli("yeni", "randevu")).toBe(true);
    expect(gecisGecerli("randevu", "yolda")).toBe(true);
    expect(gecisGecerli("serviste", "parca")).toBe(true);
    expect(gecisGecerli("parca", "randevu")).toBe(true);
    expect(gecisGecerli("atolye", "tamam")).toBe(true);
  });
  it("atlamalı ve kapalıdan geçiş yok; iptal yalnız açık işte", () => {
    expect(gecisGecerli("yeni", "tamam")).toBe(false);
    expect(gecisGecerli("randevu", "serviste")).toBe(false);
    expect(gecisGecerli("tamam", "randevu")).toBe(false);
    expect(gecisGecerli("randevu", "iptal")).toBe(true);
    expect(gecisGecerli("tamam", "iptal")).toBe(false);
    expect(gecisGecerli("iptal", "iptal")).toBe(false);
  });
  it("her durum tabloda", () => {
    expect(Object.keys(GECISLER).sort()).toEqual(["atolye", "iptal", "parca", "randevu", "serviste", "tamam", "yeni", "yolda"]);
  });
});

describe("yaka → teknisyen ve telefon", () => {
  it("Anadolu T1, Avrupa T2, pilot dışı boş", () => {
    expect(tekFor("İstanbul", "Kadıköy")).toBe("T1");
    expect(tekFor("İstanbul", "Şişli")).toBe("T2");
    expect(tekFor("Ankara", "Çankaya")).toBe("");
  });
  it("cep telefonu normalleşir; sabit hat ve eksik numara reddedilir", () => {
    expect(cepNormal("0532 123 45 67")).toBe("05321234567");
    expect(cepNormal("+90 532 123 45 67")).toBe("05321234567");
    expect(cepNormal("532-123-4567")).toBe("05321234567");
    expect(cepNormal("0216 123 45 67")).toBe(null);
    expect(cepNormal("0532 123")).toBe(null);
  });
});

describe("kişisel veri deseni (IT bulgusu)", () => {
  it("telefon ve e-posta yakalanır", () => {
    for (const m of ["müşteri 0532 123 45 67 arasın", "5321234567", "+90 (532) 123-45-67", "ev 0216 555 44 33", "mail: a.b@ornek.com"])
      expect(kisiselVeriVar(m)).toBe(true);
  });
  it("model kodu, kısa sayı ve olağan not geçer", () => {
    for (const m of ["KWP-8556M kapağı KWP-8556", "rezistans, şarj soketi", "2. kat, 14 numara", "", null, "saat 10-12 arası uygun"])
      expect(kisiselVeriVar(m)).toBe(false);
  });
});

describe("randevu öneri modeli", () => {
  const simdi = new Date(2026, 9, 26, 7, 0); // Pzt 26 Eki 2026 07:00
  const isler = [
    { no: "A", tek: "T1", ilce: "Kadıköy", randevuGun: "2026-10-26", randevuSlot: 8, durum: "randevu" },
    { no: "B", tek: "T1", ilce: "Tuzla", randevuGun: "2026-10-26", randevuSlot: 12, durum: "randevu" },
  ];
  it("dolu aralığı önermez, en fazla üç aday döner; boş günde istenen gün ve saat önde", () => {
    const o = randevuOner(isler, { tek: "T1", ilce: "Üsküdar", istenenGun: "2026-10-26", istenenSlot: 10 }, simdi);
    expect(o.length).toBe(3);
    expect(o.some((x) => x.gun === "2026-10-26" && [8, 12].includes(x.saat))).toBe(false);
    const bos = randevuOner(isler, { tek: "T2", ilce: "Şişli", istenenGun: "2026-10-26", istenenSlot: 14 }, simdi);
    expect([bos[0].gun, bos[0].saat]).toEqual(["2026-10-26", 14]);
  });
  it("hafta sonu istenirse ilk iş gününe kayar; teknisyensiz öneri yok", () => {
    const o = randevuOner([], { tek: "T2", ilce: "Şişli", istenenGun: "2026-10-31" }, simdi);
    expect(o.every((x) => haftaIciMi(x.gun))).toBe(true);
    expect(randevuOner([], { tek: "", ilce: "Şişli" }, simdi)).toEqual([]);
  });
  it("çakışma iptal edilmiş işi saymaz", () => {
    expect(cakisma(isler, "T1", "2026-10-26", 8, null)?.no).toBe("A");
    expect(cakisma([{ ...isler[0], durum: "iptal" }], "T1", "2026-10-26", 8, null)).toBeUndefined();
  });
});

describe("log etiketleri ve dönüşüm", () => {
  it("panelin yazdığı her etiket SQL CHECK desenine uyar ve okunur metne döner", () => {
    for (const o of ["eposta_geldi", "kayit", "durum:randevu", "arama_ulasilamadi", "randevu", "teknisyen:t1", "teknisyen:yok", "garanti:e", "garanti:bilinmiyor", "tercih", "kapanis", "not"]) {
      expect(o).toMatch(OLAY_DESEN);
      expect(olayMetni(o)).not.toBe(o);
    }
  });
  it("DB satırı panel nesnesine; müşteri yoksa kişisel alanlar boş", () => {
    const j = isUiya({ id: "x", no: "KWS-1001", talep_at: "t", il: "İstanbul", ilce: "Kadıköy", urun: "Su sebili", belirti: "Soğutmuyor", garanti: "?", durum: "yeni", teknisyen_kod: "T1", updated_at: "u" }, null, [{ at: "a", olay: "kayit" }]);
    expect(j).toMatchObject({ no: "KWS-1001", tek: "T1", ad: "", tel: "", guncel: "u", log: [{ t: "a", olay: "kayit" }] });
  });
  it("özet: açık, aranacak, ilk ziyarette çözüm oranı", () => {
    const o = ozet([{ durum: "yeni", talep: "2026-10-20" }, { durum: "tamam", ilkZiyarette: true }, { durum: "tamam", ilkZiyarette: false }, { durum: "iptal" }], 2, new Date(2026, 9, 26));
    expect([o.acik.length, o.aranacak.length, o.ftf, o.kapasite]).toEqual([1, 1, 50, 10]);
  });
});

describe("API kararları", () => {
  it("yeni iş doğrulaması: teknisyen sunucuda atanır, kişisel veri serbest metinde reddedilir", async () => {
    const { yeniIsDogrula } = await import("../api/yerinde/isler.js");
    const temel = { ad: "Ayşe Yılmaz", tel: "0532 123 45 67", il: "İstanbul", ilce: "Kadıköy", adres: "Örnek Mah. 3. Sk. No:1", urun: "Su sebili", belirti: "Soğutmuyor" };
    const v = yeniIsDogrula({ ...temel, tek: "T2" });
    expect(v.hata).toBeUndefined();
    expect(v.is.teknisyen_kod).toBe("T1");
    expect(v.is.durum).toBe("yeni");
    expect(v.musteri.telefon).toBe("05321234567");
    expect(JSON.stringify(v.is)).not.toMatch(/Ayşe|0532|Örnek Mah/);
    expect(yeniIsDogrula({ ...temel, aciklama: "beni 0532 111 22 33'ten arayın" }).hata).toMatch(/müşteri alanlarına/);
    expect(yeniIsDogrula({ ...temel, randevuGun: "2026-10-31", randevuSlot: 10 }).hata).toMatch(/hafta içine/);
    expect(yeniIsDogrula({ ...temel, randevuGun: "2026-10-26" }).hata).toMatch(/hem günü hem saat/);
    expect(yeniIsDogrula({ ...temel, il: "Ankara", ilce: "Çankaya", randevuGun: "2026-10-26", randevuSlot: 10 }).hata).toMatch(/Pilot bölge/);
    expect(yeniIsDogrula({ ...temel, belirti: "uydurma arıza" }).hata).toMatch(/listeden/);
  });
  it("güncelleme: geçiş tablosu, randevu şartı, ulaşılamadı sayacı, kapanış", async () => {
    const { guncellemeHesapla } = await import("../api/yerinde/is/[id].js");
    const is = { durum: "yeni", garanti: "?", il: "İstanbul", teknisyen_kod: "T1", randevu_gun: null, randevu_slot: null, aramalar: 0 };
    expect(guncellemeHesapla(is, { gecis: "tamam" }).kod).toBe(409);
    expect(guncellemeHesapla(is, { gecis: "randevu" }).kod).toBe(400);
    const r = guncellemeHesapla(is, { gecis: "randevu", alanlar: { randevuGun: "2026-10-26", randevuSlot: "10" } });
    expect(r.guncelle).toMatchObject({ durum: "randevu", randevu_gun: "2026-10-26", randevu_slot: 10 });
    expect(r.olaylar).toEqual(["randevu", "durum:randevu"]);
    expect(guncellemeHesapla(is, { gecis: "ulasilamadi" }).guncelle.aramalar).toBe(1);
    expect(guncellemeHesapla({ ...is, durum: "randevu" }, { gecis: "ulasilamadi" }).kod).toBe(409);
    const k = guncellemeHesapla({ ...is, durum: "serviste" }, { gecis: "tamam", kapanis: { parcalar: "rezistans", tutar: "450" }, _parcaGecmisi: false });
    expect(k.guncelle).toMatchObject({ durum: "tamam", degisen_parcalar: "rezistans", tutar: 450, ilk_ziyarette: true });
    expect(guncellemeHesapla({ ...is, durum: "serviste" }, { gecis: "tamam", kapanis: { parcalar: "a@b.co" } }).kod).toBe(400);
    expect(guncellemeHesapla(is, { alanlar: { tnot: "05321234567" } }).kod).toBe(400);
    expect(guncellemeHesapla({ ...is, il: "Ankara", teknisyen_kod: null }, { alanlar: { tek: "T1" } }).kod).toBe(400);
  });
});

describe("PR-3 teknisyen yetkisi", () => {
  it("teknisyen yalnız saha geçişleri yapar; randevu, iptal, ulaşılamadı koordinatörde", async () => {
    const { guncellemeHesapla } = await import("../api/yerinde/is/[id].js");
    const T = "yerinde_teknisyen";
    const is = { durum: "randevu", garanti: "?", il: "İstanbul", teknisyen_kod: "T1", randevu_gun: "2026-10-26", randevu_slot: 10, aramalar: 0, seri_no: null };
    expect(guncellemeHesapla(is, { gecis: "yolda" }, ["T1"], T).guncelle.durum).toBe("yolda");
    expect(guncellemeHesapla(is, { gecis: "iptal" }, ["T1"], T).kod).toBe(403);
    expect(guncellemeHesapla({ ...is, durum: "yeni" }, { gecis: "ulasilamadi" }, ["T1"], T).kod).toBe(403);
    expect(guncellemeHesapla({ ...is, durum: "parca" }, { gecis: "randevu" }, ["T1"], T).kod).toBe(403);
    expect(guncellemeHesapla({ ...is, durum: "serviste" }, { gecis: "tamam", kapanis: { parcalar: "rezistans", tutar: "0" } }, ["T1"], T).guncelle).toMatchObject({ durum: "tamam", tutar: 0 });
  });
  it("teknisyen yalnız seri no yazar; randevu/teknisyen/garanti/not alanları yok sayılır", async () => {
    const { guncellemeHesapla } = await import("../api/yerinde/is/[id].js");
    const is = { durum: "serviste", garanti: "?", il: "İstanbul", teknisyen_kod: "T1", randevu_gun: "2026-10-26", randevu_slot: 10, seri_no: null, temsilci_notu: null };
    const r = guncellemeHesapla(is, { alanlar: { seri: "SN123", tek: "T2", garanti: "E", randevuGun: "2026-10-27", randevuSlot: "12", tnot: "x" } }, ["T1", "T2"], "yerinde_teknisyen");
    expect(r.guncelle).toEqual({ seri_no: "SN123" });
    expect(r.olaylar).toEqual(["seri"]);
  });
  it("foto yolu sunucuda üretilir; yalnız izinli tip ve geçerli iş kimliği", async () => {
    const { fotoYolu } = await import("../api/yerinde/foto.js");
    const id = "11111111-2222-4333-8444-555555555555";
    expect(fotoYolu(id, "image/jpeg", 1000, "abc")).toBe(`${id}/1000-abc.jpg`);
    expect(fotoYolu(id, "application/pdf")).toBe(null);
    expect(fotoYolu("../baska", "image/png")).toBe(null);
  });
  it("PR-3 SQL: varsayılan fazla yetkiler kalkar, istemci storage politikası eklenmez", async () => {
    const fs = await import("node:fs");
    const kod = fs.readFileSync("supabase/migrations/20261024_183_pr3_yerinde.sql", "utf8").split("\n").filter((l) => !l.trim().startsWith("--")).join("\n");
    expect(kod).toMatch(/revoke references, trigger, truncate\s+on public\.yerinde_teknisyenler, public\.yerinde_isler, public\.yerinde_musteri, public\.yerinde_is_log\s+from authenticated, anon/);
    expect(kod).not.toMatch(/create policy|grant /i);
  });
});
