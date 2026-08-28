// src/teshis-onbellek.test.js — YK Kararı #99 koruma testi.
//
// Bu davranış TESTSİZ sessizce geri gider: önbellek görünmez bir kazanç, kırıldığında
// ekranda hiçbir şey değişmez — yalnız arka tarafta ikinci model çağrısı + ikinci log
// satırı belirir. O yüzden hem imza üretimi hem "aynı imzada fetch yok" kapısı burada
// sabitlenir.
import { describe, it, expect, vi } from "vitest";
import { teshisImzasi, teshisKapisi } from "./teshis-onbellek.js";

const TEMEL = {
  cihaz: "Buzdolabı",
  marka: "Arçelik",
  markaDiger: "",
  yas: "3-5 yıl",
  belirti: "Alt bölme soğutmuyor",
};

describe("teshisImzasi — aynı girdi aynı imza", () => {
  it("birebir aynı girdi aynı imzayı verir", () => {
    expect(teshisImzasi(TEMEL)).toBe(teshisImzasi({ ...TEMEL }));
  });

  it("belirtideki büyük/küçük harf farkı imzayı DEĞİŞTİRMEZ", () => {
    expect(teshisImzasi({ ...TEMEL, belirti: "ALT BÖLME SOĞUTMUYOR" }))
      .toBe(teshisImzasi(TEMEL));
  });

  it("belirtinin başındaki/sonundaki boşluk imzayı DEĞİŞTİRMEZ", () => {
    expect(teshisImzasi({ ...TEMEL, belirti: "   Alt bölme soğutmuyor  " }))
      .toBe(teshisImzasi(TEMEL));
  });

  it("araya kaçan çift boşluk / satır sonu imzayı DEĞİŞTİRMEZ", () => {
    expect(teshisImzasi({ ...TEMEL, belirti: "Alt   bölme\n soğutmuyor" }))
      .toBe(teshisImzasi(TEMEL));
  });

  it("üç sadeleştirme birlikte uygulanır", () => {
    expect(teshisImzasi({ ...TEMEL, belirti: "\t  ALT   BÖLME\n\nSOĞUTMUYOR " }))
      .toBe(teshisImzasi(TEMEL));
  });

  it("alan sırası karışmaz — imza cihaz|marka|markaDiger|yas|belirti", () => {
    expect(teshisImzasi(TEMEL))
      .toBe("Buzdolabı|Arçelik||3-5 yıl|alt bölme soğutmuyor");
  });
});

describe("teshisImzasi — herhangi bir alan değişince imza değişir", () => {
  const imza = teshisImzasi(TEMEL);

  it("cihaz değişince", () => {
    expect(teshisImzasi({ ...TEMEL, cihaz: "Çamaşır Makinesi" })).not.toBe(imza);
  });

  it("marka değişince", () => {
    expect(teshisImzasi({ ...TEMEL, marka: "Bosch" })).not.toBe(imza);
  });

  it("yaş değişince", () => {
    expect(teshisImzasi({ ...TEMEL, yas: "0-2 yıl" })).not.toBe(imza);
  });

  it("yaş boşaltılınca", () => {
    expect(teshisImzasi({ ...TEMEL, yas: "" })).not.toBe(imza);
  });

  it("belirti gerçekten değişince (yalnız boşluk/harf değil)", () => {
    expect(teshisImzasi({ ...TEMEL, belirti: "Alt bölme soğutmuyor ve ses geliyor" }))
      .not.toBe(imza);
  });

  it("belirti çipi eklenince", () => {
    expect(teshisImzasi({ ...TEMEL, belirti: "Alt bölme soğutmuyor. Su akıtıyor" }))
      .not.toBe(imza);
  });
});

describe('teshisImzasi — marka "Diğer" iken markaDiger imzaya girer', () => {
  const diger = { ...TEMEL, marka: "Diğer", markaDiger: "Regal" };

  it("markaDiger farkı imzayı DEĞİŞTİRİR", () => {
    expect(teshisImzasi({ ...diger, markaDiger: "Vestel" }))
      .not.toBe(teshisImzasi(diger));
  });

  it("markaDiger boşken elle yazılan marka imzayı değiştirir", () => {
    expect(teshisImzasi({ ...diger, markaDiger: "" })).not.toBe(teshisImzasi(diger));
  });

  it('aynı markaDiger metni aynı imzayı verir', () => {
    expect(teshisImzasi({ ...diger })).toBe(teshisImzasi(diger));
  });
});

describe("teshisKapisi — aynı imzada teşhis KOŞMAZ", () => {
  const ONBELLEK = { imza: teshisImzasi(TEMEL), teshis: { kararOnerisi: "tamir" }, gecerli: true };

  it("imza aynıysa calistir (fetch onun içinde) HİÇ çağrılmaz", async () => {
    const calistir = vi.fn();
    const cikti = await teshisKapisi({ onbellek: ONBELLEK, imza: ONBELLEK.imza, calistir });

    expect(calistir).not.toHaveBeenCalled();
    expect(cikti).toEqual({ onbellekten: true, teshis: ONBELLEK.teshis, gecerli: true });
  });

  it("imza farklıysa calistir çağrılır", async () => {
    const taze = { teshis: { kararOnerisi: "yenisi" }, gecerli: true };
    const calistir = vi.fn().mockResolvedValue(taze);
    const yeniImza = teshisImzasi({ ...TEMEL, marka: "Bosch" });

    const cikti = await teshisKapisi({ onbellek: ONBELLEK, imza: yeniImza, calistir });

    expect(calistir).toHaveBeenCalledTimes(1);
    expect(cikti).toEqual({ onbellekten: false, teshis: taze.teshis, gecerli: true });
  });

  it("önbellek boşken (ilk koşu / formuTemizle sonrası) calistir çağrılır", async () => {
    const calistir = vi.fn().mockResolvedValue({ teshis: {}, gecerli: true });
    await teshisKapisi({ onbellek: null, imza: ONBELLEK.imza, calistir });
    expect(calistir).toHaveBeenCalledTimes(1);
  });

  it("geçersiz girdi sonucu da önbellekten döner (ekran yolu korunur)", async () => {
    const calistir = vi.fn();
    const gecersiz = { imza: "x", teshis: { gecerliAriza: false }, gecerli: false };
    const cikti = await teshisKapisi({ onbellek: gecersiz, imza: "x", calistir });

    expect(calistir).not.toHaveBeenCalled();
    expect(cikti.gecerli).toBe(false);
  });

  it("calistir hata verip null dönerse kapı da null döner", async () => {
    const calistir = vi.fn().mockResolvedValue(null);
    expect(await teshisKapisi({ onbellek: null, imza: "y", calistir })).toBeNull();
  });
});
