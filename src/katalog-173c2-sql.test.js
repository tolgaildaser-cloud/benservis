// YK #173 (c-2) — kombi baca 9 kalem SQL'inin biçim denetimi (15 Eki 2026).
// 20261015_173c2_kombi_baca_9.sql: no 114–121 (kombitesisatmarket.com) + 124 (e-mekanik.com); 122 ECA ve 123 Bosch YOK.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { PAZAR_CIHAZLARI, PARCA_TURLERI } from "./pazar-sozluk.js";

const F = "supabase/migrations/20261015_173c2_kombi_baca_9.sql";
const K54 = "supabase/migrations/20261012_pazar_katalog_ek_54.sql"; // PR #302 kalıbı

const oku = (p) => fs.readFileSync(p, "utf8");
const kodSatirlari = (sql) => sql.split("\n").filter((l) => l.trim() && !l.trim().startsWith("--"));
const tirnakSayisi = (l) => (l.match(/'/g) || []).length;
// ('<baslik>', '<aciklama>', <fiyat>, '<gorsel>', <stok>, '<parca>', '<cihaz>', '<kaynak>')
const SATIR = /^  \('((?:[^']|'')+)', '((?:[^']|'')+)', (\d+), '(https:\/\/[^']+)', (\d+), '([a-z0-9-]+)', '([a-z0-9-]+)', '(https:\/\/[^']+)'\),?$/;

describe("YK #173 (c-2) — kombi baca 9 kalem SQL'i", () => {
  const sql = oku(F);
  const satir = sql.split("\n").filter((l) => l.startsWith("  ('"));
  const ayrik = satir.map((l) => {
    const m = l.match(SATIR);
    expect(m, l).not.toBeNull();
    return { baslik: m[1], aciklama: m[2], fiyat: Number(m[3]), gorsel: m[4], stok: Number(m[5]), parca: m[6], cihaz: m[7], kaynak: m[8] };
  });

  it("9 kalem; fiyat KDV dahil sonu 9; 9/9 görselli (filigran denetimi temiz)", () => {
    expect(ayrik).toHaveLength(9);
    for (const u of ayrik) expect(u.fiyat % 10, u.baslik).toBe(9);
  });

  it("stok: tedarikçi stoğu <10 olanlar 118 → 1, 115 → 9, 121 → 9; diğerleri 10", () => {
    const stok = (parca) => ayrik.find((u) => u.baslik.includes(parca)).stok;
    expect(stok("Hermetik Baca Dirseği - 90 Derece")).toBe(1);
    expect(stok("100 cm Hermetik")).toBe(9);
    expect(stok("Baymak Flanşlı Premix")).toBe(9);
    expect(ayrik.filter((u) => u.stok === 10)).toHaveLength(6);
  });

  it("her açıklamada dropship + 3 YK cümlesi; marka setlerinde model teyidi", () => {
    for (const u of ayrik) {
      expect(u.aciklama).toContain("Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda.");
      expect(u.aciklama).toContain("Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin.");
      expect(u.aciklama).toContain("Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır.");
      expect(u.aciklama).toContain("İade yalnız ambalajı açılmamış üründe geçerlidir.");
    }
    expect(ayrik.filter((u) => u.aciklama.includes("Uyumlu model bilgisini"))).toHaveLength(2);
  });

  it("8 kalem kombitesisatmarket.com + 1 e-mekanik.com; ECA ve Bosch seti yok", () => {
    expect(ayrik.filter((u) => u.kaynak.startsWith("https://www.kombitesisatmarket.com/"))).toHaveLength(8);
    expect(ayrik.filter((u) => u.kaynak.startsWith("https://www.e-mekanik.com/"))).toHaveLength(1);
    const kod = kodSatirlari(sql).join("\n").toLowerCase();
    expect(kod).not.toContain("eca ");
    expect(kod).not.toContain("bosch");
  });

  it("hepsi kombi-termosifon / hortum-boru-baca; slug'lar vitrin sözlüğünde", () => {
    const cihaz = new Set(PAZAR_CIHAZLARI.map((c) => c.slug));
    const parca = new Set(PARCA_TURLERI.map((p) => p.slug));
    for (const u of ayrik) {
      expect(u.parca).toBe("hortum-boru-baca");
      expect(u.cihaz).toBe("kombi-termosifon");
      expect(parca.has(u.parca)).toBe(true);
      expect(cihaz.has(u.cihaz)).toBe(true);
    }
  });

  it("PR #302 kalıbıyla aynı kolonlar + satır başına stok + where not exists", () => {
    const kolon = (s) => s.match(/^insert into public\.servis_urunler\n  \(([^)]+)\)/m)[1];
    expect(kolon(sql)).toBe(kolon(oku(K54)));
    expect(sql).toContain("v(baslik, aciklama, fiyat, gorsel_url, stok, parca_turu, cihaz_turu, kaynak) as (values");
    expect(sql).toContain("where not exists");
    expect(sql).toMatch(/select bs\.id, 'yedek_parca', 'parca', 'yedek-parca', v\.baslik, v\.aciklama, v\.fiyat, v\.gorsel_url,\n\s+'aktif', v\.stok, v\.parca_turu, v\.cihaz_turu, 'yeni'/);
  });

  it("her kod satırında tek tırnak dengeli", () => {
    for (const l of kodSatirlari(sql)) expect(tirnakSayisi(l) % 2, l).toBe(0);
  });
});

describe("YK #173 (c-2) — iade/cayma sayfasında baca istisnası", () => {
  it("ambalajı açılmış baca ürünü iade alınmaz cümlesi var", () => {
    const k = oku("scripts/pazar-hukuk.mjs");
    expect(k).toContain("<strong>Kombi baca ürünleri</strong>");
    expect(k).toContain("ambalajı açılmış ya da monte edilmiş baca ürünü iade alınmaz");
  });
});
