// api/_tarife-hesap.test.js
import { describe, it, expect } from "vitest";
import { onerTarife, medyan, yuzdelik, guvenSeviyesi } from "./_tarife-hesap.js";

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
