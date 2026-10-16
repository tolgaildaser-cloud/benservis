// YK #173 (d)+(c) — iki SQL dosyasının biçim denetimi (13 Eki 2026).
// (d) 20261012_173d_baslik_esleme.sql: 89 update, her biri `baslik = <eski>` şartıyla (tekrar koşulabilir).
// (c) 20261012_173c_katalog_uygunparca_8.sql: uygunparca.com 8 kalem; aparatci.com ve 112 prosestat YOK.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { PAZAR_CIHAZLARI, PARCA_TURLERI } from "./pazar-sozluk.js";

const D = "supabase/migrations/20261012_173d_baslik_esleme.sql";
const C = "supabase/migrations/20261012_173c_katalog_uygunparca_8.sql";
const K54 = "supabase/migrations/20261012_pazar_katalog_ek_54.sql"; // PR #302 kalıbı

const oku = (p) => fs.readFileSync(p, "utf8");
const kodSatirlari = (sql) => sql.split("\n").filter((l) => l.trim() && !l.trim().startsWith("--"));
const tirnakSayisi = (l) => (l.match(/'/g) || []).length;

describe("YK #173 (d) — başlık eşleme SQL'i", () => {
  const sql = oku(D);

  it("89 update, begin/commit içinde", () => {
    expect(sql.match(/^update public\.servis_urunler set baslik = /gm)).toHaveLength(89);
    expect(sql).toMatch(/^begin;$/m);
    expect(sql).toMatch(/^commit;$/m);
  });

  it("her update tek bir id'ye gider; id'ler tekrarsız; eski başlık şartı var (tekrar koşulabilir)", () => {
    const where = [...sql.matchAll(/^  where id = '([0-9a-f-]{36})' and baslik = '(?:[^']|'')+' and baslik <> '(?:[^']|'')+';$/gm)];
    expect(where).toHaveLength(89);
    expect(new Set(where.map((m) => m[1])).size).toBe(89);
  });

  it("yeni başlık ' — ' içerir; eski başlık aciklama'nın başına ' · ' ile taşınır", () => {
    const set = [...sql.matchAll(/^update public\.servis_urunler set baslik = '((?:[^']|'')+)', aciklama = '(?:[^']|'')+' \|\| ' · ' \|\| coalesce\(aciklama, ''\)$/gm)];
    expect(set).toHaveLength(89);
    for (const m of set) expect(m[1], m[1]).toContain(" — ");
  });

  it("aranan_ad boş 2 satır dokunulmaz (yorumda ATLANDI)", () => {
    expect(sql.match(/^-- ATLANDI \(aranan_ad boş\)/gm)).toHaveLength(2);
    expect(sql).not.toContain("where id = '40925716-881d-4330-a518-c9beaaa1a597'");
    expect(sql).not.toContain("where id = '08f0ca8e-247e-4ad3-8390-f4a545b71022'");
  });

  it("her kod satırında tek tırnak dengeli", () => {
    for (const l of kodSatirlari(sql)) expect(tirnakSayisi(l) % 2, l).toBe(0);
  });
});

describe("YK #173 (c) — uygunparca.com 8 kalem SQL'i", () => {
  const sql = oku(C);
  const satir = sql.split("\n").filter((l) => l.startsWith("  ('"));

  it("8 kalem insert; fiyat KDV dahil sonu 9", () => {
    expect(satir).toHaveLength(8);
    for (const l of satir) expect(Number(l.match(/', (\d+), (null|')/)[1]) % 10, l).toBe(9);
  });

  it("yalnız 101 (filigranlı) görselsiz; diğer 7 uygunparca.com görseli", () => {
    const gorselsiz = satir.filter((l) => /, \d+, null, /.test(l));
    expect(gorselsiz).toHaveLength(1);
    expect(gorselsiz[0]).toContain("Doğalgaz Kombi Flex Hortumu");
    expect(satir.filter((l) => l.includes("'https://www.uygunparca.com/image/"))).toHaveLength(7);
  });

  it("109 mikrodalga cam tepsi açıklamasında çap teyit cümlesi var", () => {
    const l = satir.find((s) => s.includes("Mikrodalga Fırın Cam Tepsi"));
    expect(l).toBeDefined();
    expect(l).toContain("Çap ürün sayfasında belirtilmemiş; sipariş öncesi teyit edilir.");
  });

  it("aparatci.com ve 112 prosestat SQL ifadelerinde yok (yorum hariç)", () => {
    const kod = kodSatirlari(sql).join("\n").toLowerCase();
    expect(kod).not.toContain("aparatci");
    expect(kod).not.toContain("prosestat");
    expect(kod).not.toContain("huba");
    expect(kod).not.toContain("askı aparatı");
  });

  it("cihaz/parça slug'ları vitrin sözlüğünde", () => {
    const cihaz = new Set(PAZAR_CIHAZLARI.map((c) => c.slug));
    const parca = new Set(PARCA_TURLERI.map((p) => p.slug));
    for (const l of satir) {
      const m = l.match(/, '([a-z0-9-]+)', '([a-z0-9-]+)', 'https?:\/\/[^']+'\),?$/);
      expect(m, l).not.toBeNull();
      expect(parca.has(m[1]), `parca_turu ${m[1]}`).toBe(true);
      expect(cihaz.has(m[2]), `cihaz_turu ${m[2]}`).toBe(true);
    }
  });

  it("PR #302 kalıbıyla aynı kolonlar + where not exists (tekrar koşulabilir)", () => {
    const kalip = oku(K54);
    const kolon = (s) => s.match(/^insert into public\.servis_urunler\n  \(([^)]+)\)/m)[1];
    expect(kolon(sql)).toBe(kolon(kalip));
    expect(sql).toContain("v(baslik, aciklama, fiyat, gorsel_url, parca_turu, cihaz_turu, kaynak) as (values");
    expect(sql).toContain("where not exists");
    expect(sql).toMatch(/select bs\.id, 'yedek_parca', 'parca', 'yedek-parca', v\.baslik, v\.aciklama, v\.fiyat, v\.gorsel_url,\n\s+'aktif', 10, v\.parca_turu, v\.cihaz_turu, 'yeni'/);
  });

  it("her kod satırında tek tırnak dengeli", () => {
    for (const l of kodSatirlari(sql)) expect(tirnakSayisi(l) % 2, l).toBe(0);
  });
});

// YK #173 (d-ek2), 16 Eki 2026 — 17 yeni ürünün başlık SQL'i (8 uygunparca + 9 kombi baca).
describe("YK #173 (d-ek2) — 17 ürün başlık SQL'i", () => {
  const sql = oku("supabase/migrations/20261016_173d_baslik_esleme_17.sql");
  const ilk89 = new Set([...oku(D).matchAll(/where id = '([0-9a-f-]{36})'/g)].map((m) => m[1]));

  it("17 update, begin/commit içinde, eski başlık şartlı, id'ler tekrarsız ve #307'dekilerle çakışmaz", () => {
    expect(sql.match(/^update public\.servis_urunler set baslik = /gm)).toHaveLength(17);
    expect(sql).toMatch(/^begin;$/m);
    expect(sql).toMatch(/^commit;$/m);
    const where = [...sql.matchAll(/^  where id = '([0-9a-f-]{36})' and baslik = '(?:[^']|'')+' and baslik <> '(?:[^']|'')+';$/gm)];
    expect(where).toHaveLength(17);
    expect(new Set(where.map((m) => m[1])).size).toBe(17);
    for (const m of where) expect(ilk89.has(m[1]), m[1]).toBe(false);
  });

  it("yeni başlık ' — ' içerir; eski başlık aciklama'ya taşınır; tırnaklar dengeli", () => {
    const set = [...sql.matchAll(/^update public\.servis_urunler set baslik = '((?:[^']|'')+)', aciklama = '(?:[^']|'')+' \|\| ' · ' \|\| coalesce\(aciklama, ''\)$/gm)];
    expect(set).toHaveLength(17);
    for (const m of set) expect(m[1], m[1]).toContain(" — ");
    for (const l of kodSatirlari(sql)) expect(tirnakSayisi(l) % 2, l).toBe(0);
  });
});
