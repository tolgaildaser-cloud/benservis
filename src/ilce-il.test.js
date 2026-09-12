// src/ilce-il.test.js — il/ilçe eşleştirmesinin regresyon kilidi (12 Eyl 2026).
//
// NEDEN VAR: "aynı ilçe adı farklı illerde olabilir" (Tolga). Bu dosya DAVRANIŞI kilitler:
// ① ilçe adı tek başına asla il belirlemez ② ilçe, adresteki İL ile birlikte doğrulanır
// ③ çözülemeyen adreste TAHMİN ÜRETİLMEZ. Veri tarafını `ilce-il-tutarlilik.test.js` tutar.
import { describe, it, expect } from "vitest";
import { adresIlIlce, ilceyiTasiyanIller, ilSlug, normTr } from "./ilce-il.js";

describe("adresIlIlce — adres kuyruğundan çözüm", () => {
  it("normal Google adresini çözer", () => {
    expect(adresIlIlce("Yenigün, 1055. Sk. No 21/B, 07100 Muratpaşa/Antalya, Türkiye"))
      .toEqual({ il: "Antalya", ilce: "Muratpaşa", slug: "antalya" });
  });

  it("AYNI İLÇE ADI FARKLI İLLERDE: kararı adresteki il verir", () => {
    expect(adresIlIlce("Çayır, Değirmen Sk. no:8, 16900 Yenişehir/Bursa, Türkiye"))
      .toMatchObject({ il: "Bursa", ilce: "Yenişehir", slug: "bursa" });
    expect(adresIlIlce("Menderes Cd. No:5, 33060 Yenişehir/Mersin, Türkiye"))
      .toMatchObject({ il: "Mersin", ilce: "Yenişehir", slug: "mersin" });
    // Ereğli hem Konya'nın hem Zonguldak'ın ilçesi — ikisi de kendi iline gider.
    expect(adresIlIlce("Atatürk Cd. 42310 Ereğli/Konya, Türkiye")).toMatchObject({ il: "Konya" });
    expect(adresIlIlce("Müftü Sk. 67300 Ereğli/Zonguldak, Türkiye")).toMatchObject({ il: "Zonguldak" });
  });

  it("SOKAK ADI İLÇE SANILMAZ (eski hatanın kilidi)", () => {
    // "Kemalpaşa" İzmir'in ilçesi ve burada SOKAK adı; kayıt İstanbul/Bağcılar'dır.
    expect(adresIlIlce("Kemalpaşa, Namık Kemal Cd. no103/b, 34204 Bağcılar/İstanbul, Türkiye"))
      .toEqual({ il: "İstanbul", ilce: "Bağcılar", slug: "istanbul" });
  });

  it("ilçe o ile ait değilse eşleşme YOK (uydurma üretmez)", () => {
    // Muratpaşa Antalya'nın ilçesi; Bursa'nın değil.
    expect(adresIlIlce("Bir Sk. No:1, 16000 Muratpaşa/Bursa, Türkiye")).toBeNull();
  });

  it("mahalle/eksik kuyruk → null, kayda dokunulmaz", () => {
    expect(adresIlIlce("Atilla, 456. Sk. :25\\A, 35270 Eşrefpaşa/İzmir, Türkiye")).toBeNull(); // Eşrefpaşa mahalle
    expect(adresIlIlce("Hobyar, Hamidiye Cd. Doğubank İşhanı Kat 2 no:228, 34112")).toBeNull();
    expect(adresIlIlce("")).toBeNull();
    expect(adresIlIlce(null)).toBeNull();
  });

  it("Türkçe yazım farkları ve birleşik nokta çözülür", () => {
    expect(adresIlIlce("Yeni, Kapı Sk. No:32, 16870 İzni̇k/Bursa, Türkiye")).toMatchObject({ ilce: "İznik" });
    expect(adresIlIlce("Bir Cd. 26000 ODUNPAZARI/ESKİŞEHİR, Türkiye")).toMatchObject({ il: "Eskişehir", slug: "eskisehir" });
  });

  it("', Türkiye' olmadan da çalışır", () => {
    expect(adresIlIlce("Bir Sk. No:3, 41100 İzmit/Kocaeli")).toMatchObject({ il: "Kocaeli", ilce: "İzmit" });
  });
});

describe("yardımcılar", () => {
  it("ilSlug mevcut `sehir` biçimini üretir", () => {
    expect(ilSlug("Eskişehir")).toBe("eskisehir");
    expect(ilSlug("İstanbul")).toBe("istanbul");
    expect(ilSlug("Kahramanmaraş")).toBe("kahramanmaras");
    expect(ilSlug("Afyonkarahisar")).toBe("afyonkarahisar");
  });

  it("ilceyiTasiyanIller belirsizliği RAPORLAR", () => {
    expect(ilceyiTasiyanIller("Yenişehir")).toEqual(expect.arrayContaining(["Bursa", "Mersin", "Diyarbakır"]));
    expect(ilceyiTasiyanIller("Ereğli")).toEqual(expect.arrayContaining(["Konya", "Zonguldak"]));
    expect(ilceyiTasiyanIller("Muratpaşa")).toEqual(["Antalya"]); // tek il
    expect(ilceyiTasiyanIller("Merkez").length).toBeGreaterThan(40);
  });

  it("normTr aksan ve büyük harfi düzler", () => {
    expect(normTr("İZNİK")).toBe("iznik");
    expect(normTr(" Şile  ")).toBe("sile");
  });
});
