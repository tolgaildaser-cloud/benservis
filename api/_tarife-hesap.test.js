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

// ── YK #143 şerhi (26 Eyl): panel önerisi raporun aksiyonundan türetilir ──
import { sapmaSatiri, aksiyonOnerisi, yonDenetimi, allIn } from "./_tarife-hesap.js";

describe("aksiyonOnerisi", () => {
  // SEED: Televizyon / Monitör · Besleme kartı [400, 1500, 500] → biz all-in 950+500+1500 = 2.950, taban 2.000.
  const tv = { onayli_parca_min: 400, onayli_parca_max: 1500, onayli_iscilik: 500 };
  const web = (x) => [{ toplam_tl: x, kaynak_url: "https://a.com" }, { toplam_tl: x, kaynak_url: "https://b.com" }];

  it("TV besleme kartı (web 2.250): rapor 'düşür' → öneri beklenen 750, all-in DÜŞER", () => {
    const s = sapmaSatiri(web(2250), tv);
    expect(s.aksiyon).toBe("dusur");
    const a = aksiyonOnerisi(s, tv);
    expect(a.oneri).toEqual({ onayli_parca_min: 225, onayli_parca_max: 275, onayli_iscilik: 500, onayli_beklenen: 750 });
    const y = yonDenetimi(s.aksiyon, tv, a.oneri);
    expect(y).toMatchObject({ once: 2950, sonra: 2250, yon: "duser", tutarli: true });
  });
  it("eski öneri hatası tekrarlanmaz: 'düşür' grubunda öneri all-in'i yükseltemez", () => {
    const kazan = { onayli_parca_min: 2500, onayli_parca_max: 9500, onayli_iscilik: 2200 }; // biz 9.700
    const s = sapmaSatiri(web(7000), kazan);
    expect(s.aksiyon).toBe("dusur");
    const a = aksiyonOnerisi(s, kazan);
    expect(a.oneri.onayli_parca_max).toBeLessThan(kazan.onayli_parca_max);
    expect(allIn(a.oneri)).toBeLessThan(allIn(kazan));
  });
  it("web tabanın altında → floor, sayı önerilmez", () => {
    const s = sapmaSatiri(web(1200), tv);
    const a = aksiyonOnerisi(s, tv);
    expect(a).toMatchObject({ aksiyon: "floor", taban: 2000, oneri: null });
  });
  it("yükselt → işçilik sabit, all-in YÜKSELİR", () => {
    const s = sapmaSatiri(web(6000), tv);
    const a = aksiyonOnerisi(s, tv);
    expect(a.oneri.onayli_iscilik).toBe(500);
    expect(a.oneri.onayli_beklenen).toBe(4500);
    expect(yonDenetimi("yukselt", tv, a.oneri).tutarli).toBe(true);
  });
  it("parça ekseninde hedef = web parça medyanı", () => {
    const pts = [{ parca_tl: 3000, kaynak_url: "https://a.com" }, { parca_tl: 3000, kaynak_url: "https://b.com" }];
    const s = sapmaSatiri(pts, tv); // biz parça ortası 950 → +%216 yükselt
    const a = aksiyonOnerisi(s, tv);
    expect(a.oneri).toMatchObject({ onayli_parca_min: 2700, onayli_parca_max: 3300, onayli_beklenen: 3500 });
  });
  it("aksiyon yok (uyumlu / tek kaynak / kıyas yok) → null", () => {
    expect(aksiyonOnerisi(sapmaSatiri(web(3000), tv), tv)).toBe(null);
    expect(aksiyonOnerisi(sapmaSatiri([{ toplam_tl: 1000, kaynak_url: "https://a.com" }], tv), tv)).toBe(null);
    expect(aksiyonOnerisi(null, tv)).toBe(null);
  });
  it("yonDenetimi ters yönü yakalar", () => {
    expect(yonDenetimi("dusur", tv, { onayli_parca_min: 4000, onayli_parca_max: 4000, onayli_iscilik: 100 }).tutarli).toBe(false);
    expect(yonDenetimi("dusur", tv, { onayli_parca_min: "", onayli_parca_max: 1, onayli_iscilik: 1 })).toBe(null);
  });
});
