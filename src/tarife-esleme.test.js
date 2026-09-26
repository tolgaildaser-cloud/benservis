// src/tarife-esleme.test.js — YK #143 (26 Eyl 2026) regresyon kilidi.
// 26 Eyl onayı `tarife`'ye SEED dışı adla 10 mükerrer satır açtı; rapor `celiskili` işaretini okumuyordu.
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ESLEME, seedAriza, seedteVar, seedArizalari } from "./tarife-esleme.js";
import { SEED } from "./tarife-seed.js";
import { sapmaSatiri, celiskiliMi } from "../api/_tarife-hesap.js";

describe("eşleme tablosu", () => {
  it("her eşleme hedefi SEED'de birebir var (bayat hedef yok)", () => {
    for (const [anahtar, hedef] of Object.entries(ESLEME)) {
      const cihaz = anahtar.split("|")[0];
      expect(seedteVar(cihaz, hedef), `${anahtar} → ${hedef}`).toBe(true);
    }
  });
  it("SEED adı kendisine çevrilir", () => {
    expect(seedAriza("Çamaşır Makinesi", "Rulman/keçe değişimi (vidalı)")).toBe("Rulman/keçe değişimi (vidalı)");
  });
  it("26 Eyl'in tek anlamlı ham adları SEED adına çevrilir", () => {
    expect(seedAriza("Çamaşır Makinesi", "Rulman/keçe")).toBe("Rulman/keçe değişimi (vidalı)");
    expect(seedAriza("Su Sebili / Arıtma", "Filtre seti")).toBe("Filtre seti değişimi (komple)");
    expect(seedAriza("Bilgisayar / Yazıcı", "Yazıcı kafa/kartuş")).toBe("Yazıcı kafası / kartuş değişimi");
  });
  it("iki SEED satırına denk gelen ham ad TAHMİNLE eşlenmez (null → panelde seçilir)", () => {
    expect(seedAriza("Çamaşır Makinesi", "Elektronik kart")).toBeNull();
    expect(seedAriza("Televizyon / Monitör", "Anakart")).toBeNull();
    expect(seedAriza("Bilgisayar / Yazıcı", "Ekran/menteşe (laptop)")).toBeNull();
  });
  it("cihaz sınırı: eşleme başka cihaza sızmaz", () => {
    expect(seedAriza("Buzdolabı", "Rulman/keçe")).toBeNull();
  });
  it("seçici seçenekleri SEED sırasıyla gelir", () => {
    expect(seedArizalari("Klima")).toEqual(SEED["Klima"].map((r) => r[0]));
  });
});

describe("sapmaSatiri — celiskili nokta dışlanır (IT 26 Eyl)", () => {
  const mevcut = { onayli_parca_min: 700, onayli_parca_max: 2500, onayli_iscilik: 900 }; // biz = 1600+900+1500 = 4000
  const pts = [
    { toplam_tl: 3500, kaynak_url: "https://a.com/x" },
    { toplam_tl: 3500, kaynak_url: "https://b.com/y" },
    { parca_tl: 3500, toplam_tl: 1850, kaynak_url: "https://fiyatlarii.com/z", notlar: "web-topla; celiskili: parca>toplam" },
  ];
  it("işaretli nokta medyanı çekmez → ✓ ±%20", () => {
    const s = sapmaSatiri(pts, mevcut);
    expect(s.web).toBe(3500);
    expect(s.sapma).toBe(-12);
    expect(s.aksiyon).toBe("uyumlu");
    expect(s.nokta).toBe(2);
  });
  it("işaret yoksa nokta kıyasa girer (davranış farkı ölçülür)", () => {
    const s = sapmaSatiri(pts.map((p) => ({ ...p, notlar: undefined })), mevcut);
    expect(s.nokta).toBe(3);
    expect(celiskiliMi(pts[2])).toBe(true);
  });
  it("tek host → tek-kaynak, sapma ne olursa olsun", () => {
    const s = sapmaSatiri([{ toplam_tl: 9000, kaynak_url: "https://a.com/1" }, { toplam_tl: 9000, kaynak_url: "https://www.a.com/2" }], mevcut);
    expect(s.aksiyon).toBe("tek-kaynak");
  });
  it("≥2 host, web %20+ yüksek → yukselt", () => {
    const s = sapmaSatiri([{ toplam_tl: 6000, kaynak_url: "https://a.com" }, { toplam_tl: 6000, kaynak_url: "https://b.com" }], mevcut);
    expect(s.aksiyon).toBe("yukselt");
  });
  it("web tabanın altında → floor", () => {
    const s = sapmaSatiri([{ toplam_tl: 1000, kaynak_url: "https://a.com" }, { toplam_tl: 1000, kaynak_url: "https://b.com" }], mevcut);
    expect(s.aksiyon).toBe("floor");
  });
});

// ── onayla ucu: SEED dışı adla POST → 400, satır açılmaz ──
const upsert = vi.fn(() => Promise.resolve({ error: null }));
vi.mock("../api/_supabase.js", () => ({ default: { from: () => ({ upsert }) } }));
const { default: onayla } = await import("../api/tarife/onayla.js");

function sahteRes() {
  const res = { kod: null, govde: null, setHeader() {}, status(k) { res.kod = k; return res; }, json(g) { res.govde = g; return res; }, end() { return res; } };
  return res;
}
const istek = (body) => ({ method: "POST", headers: { authorization: "Bearer T" }, body });
const bant = { onayli_parca_min: 250, onayli_parca_max: 1200, onayli_iscilik: 2400 };

describe("api/tarife/onayla — SEED kapısı (YK #143)", () => {
  beforeEach(() => { process.env.ADMIN_TOKEN = "T"; upsert.mockClear(); });

  it("SEED dışı ve eşlemesiz ad → 400, upsert YOK", async () => {
    const res = sahteRes();
    await onayla(istek({ cihaz: "Çamaşır Makinesi", ariza: "Elektronik kart", ...bant }), res);
    expect(res.kod).toBe(400);
    expect(upsert).not.toHaveBeenCalled();
  });
  it("uydurma hedef_ariza → 400", async () => {
    const res = sahteRes();
    await onayla(istek({ cihaz: "Çamaşır Makinesi", ariza: "Elektronik kart", hedef_ariza: "Elektronik kart", ...bant }), res);
    expect(res.kod).toBe(400);
    expect(upsert).not.toHaveBeenCalled();
  });
  it("eşlemeli ham ad → SEED satırına yazılır (yeni satır açılmaz)", async () => {
    const res = sahteRes();
    await onayla(istek({ cihaz: "Çamaşır Makinesi", ariza: "Rulman/keçe", ...bant }), res);
    expect(res.kod).toBe(200);
    expect(upsert.mock.calls[0][0].ariza).toBe("Rulman/keçe değişimi (vidalı)");
  });
  it("panelde seçilen hedef_ariza önceliklidir", async () => {
    const res = sahteRes();
    await onayla(istek({ cihaz: "Çamaşır Makinesi", ariza: "Elektronik kart", hedef_ariza: "Elektronik kart tamiri", ...bant }), res);
    expect(res.kod).toBe(200);
    expect(upsert.mock.calls[0][0].ariza).toBe("Elektronik kart tamiri");
  });
  it("SEED adı olduğu gibi geçer", async () => {
    const res = sahteRes();
    await onayla(istek({ cihaz: "Klima", ariza: "Gaz dolumu", ...bant }), res);
    expect(res.kod).toBe(200);
    expect(upsert.mock.calls[0][0].ariza).toBe("Gaz dolumu");
  });
});
