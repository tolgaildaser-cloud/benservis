// api/_tarife-hesap.test.js
import { describe, it, expect } from "vitest";
import { onerTarife, medyan, yuzdelik, guvenSeviyesi, aykiriEle, mertebeDisi, MERTEBE } from "./_tarife-hesap.js";

describe("aykiriEle (4 Ağu 2026 — robust)", () => {
  it("REGRESYON: n=2'de çöpü tutup doğruyu atmaz (eski kural [1000,111111] → [111111])", () => {
    expect(aykiriEle([1000, 111111])).toEqual([1000, 111111]); // eleme yok, karar YK #15'e kalır
  });
  it("n≥4 Tukey çiti: 50.000 elenir, gövde kalır", () => {
    expect(aykiriEle([1000, 1100, 1200, 50000])).toEqual([1000, 1100, 1200]);
  });
  it("n=3 MAD: tek uç elenir", () => {
    expect(aykiriEle([1000, 1100, 90000])).toEqual([1000, 1100]);
  });
  it("n=3 dağınık ama gerçek veri elenmez", () => {
    expect(aykiriEle([1000, 1500, 2200])).toEqual([1000, 1500, 2200]);
  });
  it("tek nokta / boş dizi güvenli", () => {
    expect(aykiriEle([1000])).toEqual([1000]);
    expect(aykiriEle([])).toEqual([]);
  });
});

describe("mertebeDisi (toplama akıl çiti)", () => {
  it("111.111 TL vs 2.350 TL referans → çöp", () => expect(mertebeDisi(111111, 2350)).toBe(true));
  it("gözlenen en büyük MEŞRU sapma (+%404 ≈ 5×) kesilmez", () => expect(mertebeDisi(3150, 625)).toBe(false));
  it("gözlenen en büyük MEŞRU düşüş (−%83 ≈ 1/5,9) kesilmez", () => expect(mertebeDisi(400, 2350)).toBe(false));
  it("referans yoksa karar verilmez", () => expect(mertebeDisi(999999, null)).toBe(false));
  it("eşik tek sabit", () => expect(MERTEBE).toBe(10));
});

describe("yuzdelik/medyan", () => {
  it("medyan tek/çift", () => { expect(medyan([10,20,30])).toBe(20); expect(medyan([10,20,30,40])).toBe(25); });
  it("boş → null", () => { expect(medyan([])).toBe(null); expect(yuzdelik([],25)).toBe(null); });
});

describe("guvenSeviyesi", () => {
  it("3+ nokta düşük varyans → yuksek", () => expect(guvenSeviyesi([1000,1100,1200])).toBe("yuksek"));
  it("2 nokta → orta", () => expect(guvenSeviyesi([1000,1200])).toBe("orta"));
  it("1 nokta → dusuk", () => expect(guvenSeviyesi([1000])).toBe("dusuk"));
  it("3+ nokta yüksek varyans → orta", () => expect(guvenSeviyesi([500,1200,6000])).toBe("orta"));
});

describe("onerTarife", () => {
  it("3+ noktada parça P25–P75, işçilik medyan, güven", () => {
    const r = onerTarife([
      { parca_tl:1000, iscilik_tl:500 }, { parca_tl:1200, iscilik_tl:600 },
      { parca_tl:1400, iscilik_tl:500 }, { parca_tl:1600, iscilik_tl:700 },
    ]);
    expect(r.onayli_parca_min).toBe(1150);
    expect(r.onayli_parca_max).toBe(1450);
    expect(r.onayli_iscilik).toBe(550);
    expect(r.veri_noktasi_sayisi).toBe(4);
    expect(r.guven).toBe("yuksek");
  });
  it("<3 nokta → parça min/max, güven dusuk/orta", () => {
    const r = onerTarife([{ parca_tl:1000 }, { parca_tl:2000 }]);
    expect(r.onayli_parca_min).toBe(1000); expect(r.onayli_parca_max).toBe(2000); expect(r.guven).toBe("orta");
  });
  it("aşırı aykırıyı eler", () => {
    const r = onerTarife([{ parca_tl:1000 },{ parca_tl:1100 },{ parca_tl:1200 },{ parca_tl:50000 }]);
    expect(r.onayli_parca_max).toBeLessThan(2000);
  });
  it("toplam_tl verilirse onu kullanır", () => {
    const r = onerTarife([{ toplam_tl:3000 },{ toplam_tl:3000 },{ toplam_tl:3000 }]);
    expect(r.onayli_beklenen).toBe(3000);
  });
});
