// src/ikinci-el-veri.test.js — YK #171 İE-1 (11 Eki 2026) ikinci el veri modeli kilidi.
//
// NEDEN VAR: Tolga (11 Eki 11:4x): "DPP hiç bir zaman gösterilmeyecek önde". İkinci el ilan
// cihaza `cihaz_id` ile bağlanır; `ilanlar.seri_no` boş kalır, çünkü `/api/ilan/:id` seri_no
// doluysa DPP'yi (seri no dahil) yetkisiz döndürüyor. Kırılırsa: ① demo ilana seri no yazılır
// ve DPP ön yüze sızar, ② `cihaz_id` public cevaba girer (DPP'ye köprü), ③ garanti sınıfı /
// dosya no / teslim kuralları gevşer.
//
// KIRILDIĞINDA: migration'ı değil, değişikliği gözden geçirin — tarif
// benservis-icerik/pazar/IKINCI-EL-HEDEF-GORUNUM.md bölüm 7.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { ILAN_PUBLIC_ALANLAR } from "../api/_public-alanlar.js";

const SQL = fs.readFileSync("supabase/migrations/20261011_171_ie1_ikinci_el.sql", "utf8");
const KOD = SQL.split("\n").filter((s) => !s.trim().startsWith("--")).join("\n");

describe("YK #171 İE-1 — ikinci el veri modeli", () => {
  it("ilan public alanlarına cihaz_id ve yeni iç alanlar girmez", () => {
    const alanlar = ILAN_PUBLIC_ALANLAR.split(",").map((s) => s.trim());
    for (const gizli of ["cihaz_id", "satici_id", "satici_tel", "satici_iban", "satici_token"]) {
      expect(alanlar).not.toContain(gizli);
    }
  });

  it("demo ilan insert'i ilanlar.seri_no yazmaz (DPP yalnız cihaz_id ile, arkada)", () => {
    const ilanInsert = KOD.match(/insert into public\.ilanlar \(([^)]*)\)/);
    expect(ilanInsert).not.toBeNull();
    expect(ilanInsert[1]).not.toMatch(/\bseri_no\b/);
    expect(ilanInsert[1]).toMatch(/\bcihaz_id\b/);
  });

  it("dosya no BS-2E- + 6 hane, garanti 3 sınıf, teslimde depo şart", () => {
    expect(KOD).toContain("'BS-2E-' || lpad(nextval('public.ilan_dosya_no_seq')::text, 6, '0')");
    expect(KOD).toContain("^BS-2E-[0-9]{6}$");
    expect(KOD).toContain("garanti_sinifi in ('marka', 'benservis', 'yok')");
    expect(KOD).toContain("'depo' = any (teslim_secenekleri)");
  });

  it("2 demo ürün (Grundig buzdolabı + Thomson 75\") pasif ve demo=true açılır", () => {
    expect(KOD).toMatch(/Grundig çift kapılı buzdolabı, gri/);
    expect(KOD).toMatch(/Thomson 75" televizyon/);
    expect(KOD).toMatch(/true, 'pasif'/);
  });

  it("kayıt silinmez", () => {
    expect(KOD).not.toMatch(/\bdelete from\b/i);
    expect(KOD).not.toMatch(/\bdrop table\b/i);
  });
});
