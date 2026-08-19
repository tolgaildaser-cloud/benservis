// src/hero-tahmin.test.js — hero kutusu tahmin regresyon kilidi (Tolga, 19 Ağu 2026).
//
// NEDEN VAR: iki kusur canlıda ölçüldü —
//   ① "arçelik çamamşır makinam su almıyor" → cihaz HİÇ seçilmiyordu (tek fazladan
//      harf tüm tahmini düşürüyordu; eşleme birebir alt dize arıyordu).
//   ② marka metinde geçse bile marka kutusu BOŞ açılıyordu.
// Testler DAVRANIŞI kilitler, satır/sözlük içeriğini değil: sözlük büyüyünce test
// kendini günceller, ama yazım hatası toleransı ve marka okuma bir daha sessizce
// kaybolamaz.
import { describe, it, expect } from "vitest";
import { heroTahmin, cihazTahmin, markaTahmin, mesafe, esik } from "./hero-tahmin.js";
import { markalarForCihaz } from "./constants.js";

describe("① yazım hatası toleransı", () => {
  it("Tolga'nın bildirdiği girdi cihazı DA markayı DA bulur", () => {
    expect(heroTahmin("arçelik çamamşır makinam su almıyor")).toEqual({
      cihaz: "Çamaşır Makinesi",
      marka: "Arçelik",
    });
  });

  it("doğru yazımda eski davranış aynen korunur (regresyon yüzeyi sıfır)", () => {
    // Bu girdiler 19 Ağu ÖNCESİ de cihazı buluyordu — bulmaya devam etmeli.
    expect(cihazTahmin("arçelik çamaşır makinam su almıyor")).toBe("Çamaşır Makinesi");
    expect(cihazTahmin("bosch bulaşık makinam yıkamıyor")).toBe("Bulaşık Makinesi");
    expect(cihazTahmin("camasir makinesi calismiyor")).toBe("Çamaşır Makinesi"); // ASCII
    expect(cihazTahmin("buzdolabım soğutmuyor")).toBe("Buzdolabı");
    expect(cihazTahmin("mikrodalgam çalışmıyor")).toBe("Mikrodalga / Air Fryer");
  });

  it("tek harflik hatalar cihazı düşürmez", () => {
    expect(cihazTahmin("bulaşşık makinem su atmıyor")).toBe("Bulaşık Makinesi");
    expect(cihazTahmin("buzdolabbım ses yapıyor")).toBe("Buzdolabı");
    expect(cihazTahmin("mikrodalgaa ısıtmıyor")).toBe("Mikrodalga / Air Fryer");
  });

  it("cihazla ilgisi olmayan metin cihaz UYDURMAZ", () => {
    // Yanlış ön-doldurma, ön-doldurmamaktan kötüdür (15 Ağu kürasyon ilkesi).
    for (const m of [
      "elektrik faturam çok geldi",
      "merhaba nasılsınız",
      "sıcak su gelmiyor musluktan",
      "kapı kilidi bozuldu",
      "yemek pişerken duman çıktı",
    ]) expect(cihazTahmin(m), m).toBeNull();
  });

  it("kısa anahtarda tolerans YOK — 'sıcak' ocağa dönüşmez", () => {
    expect(esik("ocak".length)).toBe(0);
    expect(esik("tv".length)).toBe(0);
    expect(cihazTahmin("yemek yaparken tencere sıcak oldu")).toBeNull();
  });
});

describe("② marka okuma", () => {
  it("metindeki marka ön-seçili gelir", () => {
    expect(markaTahmin("beko buzdolabı soğutmuyor", "Buzdolabı")).toBe("Beko");
    expect(markaTahmin("siemens fırınım ısınmıyor", "Fırın / Ocak / Aspiratör")).toBe("Siemens");
    expect(markaTahmin("lg televizyonum açılmıyor", "Televizyon / Monitör")).toBe("LG");
    expect(markaTahmin("canon yazıcım kağıt sıkıştırıyor", "Bilgisayar / Yazıcı")).toBe("Canon");
  });

  it("uzun marka adında 1 harf tolerans var", () => {
    expect(markaTahmin("arçelil çamaşır makinesi", "Çamaşır Makinesi")).toBe("Arçelik");
    expect(markaTahmin("grundik televizyon", "Televizyon / Monitör")).toBe("Grundig");
  });

  it("cihazın listesinde olmayan marka 'Diğer'e DÜŞMEZ, boş kalır", () => {
    expect(markalarForCihaz("Çamaşır Makinesi")).not.toContain("Canon");
    expect(markaTahmin("canon çamaşır makinem su almıyor", "Çamaşır Makinesi")).toBeNull();
    expect(markaTahmin("sony buzdolabı soğutmuyor", "Buzdolabı")).toBeNull();
  });

  it("döndürülen marka her zaman o cihazın gerçek seçeneğidir", () => {
    // Sözleşme: form <select> yalnız markalarForCihaz(cihaz) seçeneklerini basıyor;
    // listede olmayan bir değer dönerse kutu görünürde boş kalır (sessiz kusur).
    for (const m of [
      "beko buzdolabı soğutmuyor",
      "bosch klima çalışmıyor",
      "dyson süpürgem çekmiyor",
      "vestel buzdolabı ses yapıyor",
      "arçelik çamamşır makinam su almıyor",
    ]) {
      const { cihaz, marka } = heroTahmin(m);
      if (marka) expect(markalarForCihaz(cihaz), m).toContain(marka);
    }
  });

  it("cihaz geçmeyen cümlede KISA marka adı markaya sayılmaz", () => {
    // "Elit" · "Aqua" gündelik cümlede kendi başına geçebiliyor.
    expect(markaTahmin("elit bir servis arıyorum", null)).toBeNull();
    expect(markaTahmin("aqua park", null)).toBeNull();
  });

  it("marka alt dize olarak DEĞİL, kelime olarak aranır", () => {
    // "bilgisayar" içinde "lg" var — markaya sayılmamalı.
    expect(markaTahmin("bilgisayarım açılmıyor", "Bilgisayar / Yazıcı")).toBeNull();
  });
});

describe("mesafe yardımcısı", () => {
  it("bilinen değerleri verir", () => {
    expect(mesafe("camasir", "camasir")).toBe(0);
    expect(mesafe("camamsir", "camasir")).toBe(1);
    expect(mesafe("kedi", "kefi")).toBe(1);
  });
  it("tavanı aşan mesafede erken çıkar (tavan+1 döner)", () => {
    expect(mesafe("abcdefgh", "zzzz", 1)).toBeGreaterThan(1);
  });
});
