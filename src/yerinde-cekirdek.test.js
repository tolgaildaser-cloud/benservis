// src/yerinde-cekirdek.test.js — YK #183 PR-2: panel ve API'nin ortak kuralları + API karar fonksiyonları.
import { describe, it, expect, vi } from "vitest";
import {
  gecisGecerli, GECISLER, tekFor, cepNormal, kisiselVeriVar, randevuOner, slotEngeli, aralikEngeli, slotEngelMetni,
  olayMetni, OLAY_DESEN, isUiya, ozet, calismaGunuMu, SLOTLAR, CALISMA_GUNLERI, SLOT_EN_FAZLA,
} from "./yerinde-cekirdek.js";

vi.mock("../api/_supabase.js", () => ({ default: {} }));
vi.mock("../api/_yerinde.js", () => ({ yerindeKimlik: async () => null, slotCakisti: () => false, aralikKontrol: async () => null }));
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

describe("çalışma düzeni (25 Eki): 09–18, Pazartesi–Cumartesi", () => {
  it("dört aralık 09–11 · 11–13 · 13–15 · 16–18; Cumartesi açık, Pazar kapalı", () => {
    expect(SLOTLAR).toEqual([9, 11, 13, 16]);
    expect(CALISMA_GUNLERI).toEqual([1, 2, 3, 4, 5, 6]);
    expect(calismaGunuMu("2026-10-31")).toBe(true); // Cumartesi
    expect(calismaGunuMu("2026-11-01")).toBe(false); // Pazar
  });
});

describe("randevu öneri modeli", () => {
  const simdi = new Date(2026, 9, 26, 7, 0); // Pzt 26 Eki 2026 07:00
  const isler = [
    { no: "A", tek: "T1", ilce: "Kadıköy", randevuGun: "2026-10-26", randevuSlot: 9, durum: "randevu" },
    { no: "B", tek: "T1", ilce: "Tuzla", randevuGun: "2026-10-26", randevuSlot: 13, durum: "randevu" },
  ];
  it("uzak işin olduğu aralığı önermez, en fazla üç aday döner; boş günde istenen gün ve saat önde", () => {
    const o = randevuOner(isler, { tek: "T1", ilce: "Üsküdar", istenenGun: "2026-10-26", istenenSlot: 11 }, simdi);
    expect(o.length).toBe(3);
    expect(o.some((x) => x.gun === "2026-10-26" && x.saat === 13)).toBe(false); // Tuzla Üsküdar'a uzak
    const bos = randevuOner(isler, { tek: "T2", ilce: "Şişli", istenenGun: "2026-10-26", istenenSlot: 16 }, simdi);
    expect([bos[0].gun, bos[0].saat]).toEqual(["2026-10-26", 16]);
  });
  it("yakın adres dolu aralığa eklenebilir (Kadıköy'ün aralığına Üsküdar)", () => {
    const o = randevuOner(isler, { tek: "T1", ilce: "Üsküdar", istenenGun: "2026-10-26", istenenSlot: 9 }, simdi);
    expect([o[0].gun, o[0].saat]).toEqual(["2026-10-26", 9]);
    expect(o[0].neden).toMatch(/aynı aralıkta Kadıköy \(1 iş\)/);
  });
  it("aralık SLOT_EN_FAZLA işle dolunca yakın adres de giremez", () => {
    const uc = Array.from({ length: SLOT_EN_FAZLA }, (_, i) => ({ no: "K" + i, tek: "T1", ilce: "Kadıköy", randevuGun: "2026-10-26", randevuSlot: 9, durum: "randevu" }));
    const o = randevuOner(uc, { tek: "T1", ilce: "Kadıköy", istenenGun: "2026-10-26", istenenSlot: 9 }, simdi);
    expect(o.some((x) => x.gun === "2026-10-26" && x.saat === 9)).toBe(false);
    expect(slotEngeli(uc, "T1", "2026-10-26", 9, "Kadıköy", null)?.sebep).toBe("dolu");
  });
  it("Cumartesi önerilir; Pazar istenirse Pazartesiye kayar; teknisyensiz öneri yok", () => {
    const cmt = randevuOner([], { tek: "T2", ilce: "Şişli", istenenGun: "2026-10-31", istenenSlot: 11 }, simdi);
    expect([cmt[0].gun, cmt[0].saat]).toEqual(["2026-10-31", 11]);
    const paz = randevuOner([], { tek: "T2", ilce: "Şişli", istenenGun: "2026-11-01" }, simdi);
    expect(paz.every((x) => calismaGunuMu(x.gun))).toBe(true);
    expect(paz[0].gun).toBe("2026-11-02");
    expect(randevuOner([], { tek: "", ilce: "Şişli" }, simdi)).toEqual([]);
  });
  it("aralık kuralı: uzak adres engellenir, iptal edilmiş iş sayılmaz, mesaj sebebi söyler", () => {
    const e = slotEngeli(isler, "T1", "2026-10-26", 9, "Pendik", null);
    expect(e).toMatchObject({ sebep: "uzak", is: { no: "A" } });
    expect(slotEngelMetni("T1", "Pendik", e)).toMatch(/Kadıköy'de \(A\); Pendik/);
    expect(slotEngeli(isler, "T1", "2026-10-26", 9, "Üsküdar", null)).toBe(null);
    expect(slotEngeli([{ ...isler[0], durum: "iptal" }], "T1", "2026-10-26", 9, "Pendik", null)).toBe(null);
    expect(aralikEngeli([], "Pendik")).toBe(null);
  });
  it("özet: aynı aralıktaki iki iş tek dolu aralık sayılır", () => {
    const bugun = [
      { durum: "randevu", tek: "T1", randevuGun: "2026-10-26", randevuSlot: 9 },
      { durum: "randevu", tek: "T1", randevuGun: "2026-10-26", randevuSlot: 9 },
      { durum: "randevu", tek: "T2", randevuGun: "2026-10-26", randevuSlot: 9 },
    ];
    const o = ozet(bugun, 2, new Date(2026, 9, 26));
    expect([o.bugunRandevu.length, o.doluAralik, o.kapasite]).toEqual([3, 2, 8]);
  });
});

describe("log etiketleri ve dönüşüm", () => {
  it("panelin yazdığı her etiket SQL CHECK desenine uyar ve okunur metne döner", () => {
    for (const o of ["eposta_geldi", "kayit", "durum:randevu", "arama_ulasilamadi", "randevu", "teknisyen:t1", "teknisyen:yok", "garanti:e", "garanti:bilinmiyor", "tercih", "kapanis", "kapanis:teknisyen", "kapanis:duzeltme", "not"]) {
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
    expect([o.acik.length, o.aranacak.length, o.ftf, o.kapasite]).toEqual([1, 1, 50, 8]);
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
    expect(yeniIsDogrula({ ...temel, randevuGun: "2026-11-01", randevuSlot: 11 }).hata).toMatch(/Pazar kapalı/);
    expect(yeniIsDogrula({ ...temel, randevuGun: "2026-10-31", randevuSlot: 11 }).hata).toBeUndefined(); // Cumartesi
    expect(yeniIsDogrula({ ...temel, randevuGun: "2026-10-26", randevuSlot: 10 }).hata).toMatch(/Saat aralığı geçersiz/);
    expect(yeniIsDogrula({ ...temel, randevuGun: "2026-10-26" }).hata).toMatch(/hem günü hem saat/);
    expect(yeniIsDogrula({ ...temel, il: "Ankara", ilce: "Çankaya", randevuGun: "2026-10-26", randevuSlot: 11 }).hata).toMatch(/Pilot bölge/);
    expect(yeniIsDogrula({ ...temel, belirti: "uydurma arıza" }).hata).toMatch(/listeden/);
  });
  it("güncelleme: geçiş tablosu, randevu şartı, ulaşılamadı sayacı, kapanış", async () => {
    const { guncellemeHesapla } = await import("../api/yerinde/is/[id].js");
    const is = { durum: "yeni", garanti: "?", il: "İstanbul", teknisyen_kod: "T1", randevu_gun: null, randevu_slot: null, aramalar: 0 };
    expect(guncellemeHesapla(is, { gecis: "tamam" }).kod).toBe(409);
    expect(guncellemeHesapla(is, { gecis: "randevu" }).kod).toBe(400);
    const r = guncellemeHesapla(is, { gecis: "randevu", alanlar: { randevuGun: "2026-10-26", randevuSlot: "11" } });
    expect(r.guncelle).toMatchObject({ durum: "randevu", randevu_gun: "2026-10-26", randevu_slot: 11 });
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
  it("kapanışı kimin girdiği logda ayrılır: teknisyen → kapanis:teknisyen, koordinatör → kapanis", async () => {
    const { guncellemeHesapla } = await import("../api/yerinde/is/[id].js");
    const is = { durum: "serviste", garanti: "?", il: "İstanbul", teknisyen_kod: "T1", randevu_gun: "2026-10-26", randevu_slot: 10 };
    const kapanis = { parcalar: "rezistans", tutar: "450" };
    expect(guncellemeHesapla(is, { gecis: "tamam", kapanis }, ["T1"], "yerinde_teknisyen").olaylar).toEqual(["kapanis:teknisyen", "durum:tamam"]);
    expect(guncellemeHesapla(is, { gecis: "tamam", kapanis }, ["T1"]).olaylar).toEqual(["kapanis", "durum:tamam"]);
    expect(olayMetni("kapanis:teknisyen")).toBe("Kapanış bilgisi girildi (teknisyen)");
    expect(olayMetni("kapanis:duzeltme")).toBe("Kapanış bilgisi düzeltildi");
  });
  it("koordinatör tamamlanmış işte parça ve tutarı düzeltir; açık işte ve teknisyende düzeltme yok", async () => {
    const { guncellemeHesapla } = await import("../api/yerinde/is/[id].js");
    // tutar DB'den numeric (metin) gelebilir: "450" ile 450 aynı sayılır.
    const is = { durum: "tamam", garanti: "?", il: "İstanbul", teknisyen_kod: "T1", degisen_parcalar: "rezistans", tutar: "450" };
    const r = guncellemeHesapla(is, { alanlar: { parcalar: "rezistans, termostat", tutar: "600" } });
    expect(r.guncelle).toEqual({ degisen_parcalar: "rezistans, termostat", tutar: 600 });
    expect(r.olaylar).toEqual(["kapanis:duzeltme"]);
    // Değişmeyen değerler yazılmaz, log düşmez.
    expect(guncellemeHesapla(is, { alanlar: { parcalar: "rezistans", tutar: "450" } })).toEqual({ guncelle: {}, olaylar: [] });
    // Tutar silinebilir (boş → null).
    expect(guncellemeHesapla(is, { alanlar: { tutar: "" } }).guncelle).toEqual({ tutar: null });
    expect(guncellemeHesapla(is, { alanlar: { tutar: "-5" } }).kod).toBe(400);
    expect(guncellemeHesapla(is, { alanlar: { parcalar: "ara 0532 111 22 33" } }).kod).toBe(400);
    expect(guncellemeHesapla({ ...is, durum: "serviste" }, { alanlar: { parcalar: "x" } }).kod).toBe(409);
    // Teknisyen düzeltme alanı gönderse de yok sayılır (yalnız seri no yazar).
    expect(guncellemeHesapla(is, { alanlar: { parcalar: "x", tutar: "1" } }, ["T1"], "yerinde_teknisyen")).toEqual({ guncelle: {}, olaylar: [] });
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
