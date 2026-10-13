// src/pazar-temsili-gorsel.test.js — YK #173 (e) (13 Eki 2026): temsili ürün görseli kilidi.
//
// NEDEN VAR: GRF'nin ürettiği görsel gerçek ürün fotoğrafı değil; alıcı yanılmasın diye her yerde
// "Temsili görsel" yazmalı. Ayrım yol önekinden (`/pazar-gorsel/`) yapılır. SQL yalnız görselsiz
// ürüne yazar ve her yol için dosya repoda olmalı (kırık görsel çıkmasın). JSON-LD/og mutlak adres.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { temsiliGorsel, mutlakGorselUrl, TEMSILI_GORSEL_ONEK, TEMSILI_ETIKET } from "./pazar-gorsel.js";
import { urunLd, urunKabugu } from "../scripts/pazar-sayfalari.mjs";

const SQL = "supabase/migrations/20261013_173e_temsili_gorsel_23.sql";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

describe("temsili görsel kuralı", () => {
  it("yalnız /pazar-gorsel/ önekli yol temsili; tedarikçi ve boş değil", () => {
    expect(temsiliGorsel("/pazar-gorsel/x.webp")).toBe(true);
    expect(temsiliGorsel("https://www.online-yedekparca.com/a.jpg")).toBe(false);
    expect(temsiliGorsel(null)).toBe(false);
    expect(temsiliGorsel("")).toBe(false);
  });

  it("site içi yol mutlak adrese çevrilir, dış adres aynen kalır", () => {
    expect(mutlakGorselUrl("/pazar-gorsel/x.webp")).toBe("https://www.benservis.com/pazar-gorsel/x.webp");
    expect(mutlakGorselUrl("https://cdn.example/a.jpg")).toBe("https://cdn.example/a.jpg");
  });
});

describe("SQL ve dosyalar", () => {
  const sql = fs.readFileSync(SQL, "utf8");
  const satirlar = sql.split("\n").filter((s) => s.startsWith("update "));

  it("23 update; her biri yalnız görselsiz ürüne ve kendi id'sine yazar; dosya repoda", () => {
    expect(satirlar).toHaveLength(23);
    const idler = new Set();
    for (const s of satirlar) {
      const m = s.match(/^update public\.servis_urunler set gorsel_url = '\/pazar-gorsel\/([0-9a-f-]+)\.webp' where id = '([0-9a-f-]+)' and gorsel_url is null;/);
      expect(m, s).not.toBeNull();
      expect(m[1]).toBe(m[2]);
      expect(m[1]).toMatch(UUID);
      expect(fs.existsSync(`public${TEMSILI_GORSEL_ONEK}${m[1]}.webp`)).toBe(true);
      idler.add(m[1]);
    }
    expect(idler.size).toBe(23);
    expect(sql).toMatch(/^begin;$/m);
    expect(sql).toMatch(/^commit;$/m);
  });

  it("klasördeki her görsel SQL'de; 150 KB altı", () => {
    const dosyalar = fs.readdirSync(`public${TEMSILI_GORSEL_ONEK}`).filter((f) => f.endsWith(".webp"));
    expect(dosyalar).toHaveLength(23);
    for (const f of dosyalar) {
      expect(sql).toContain(`'/pazar-gorsel/${f}'`);
      expect(fs.statSync(`public${TEMSILI_GORSEL_ONEK}${f}`).size).toBeLessThanOrEqual(150 * 1024);
    }
  });
});

describe("gösterim", () => {
  it("vitrin kartı, ana sayfa bloğu ve ürün sayfası rozeti basar", () => {
    for (const d of ["src/PazarVitrin.jsx", "src/AnaSayfaPazar.jsx", "src/UrunDetay.jsx"]) {
      const k = fs.readFileSync(d, "utf8");
      expect(k, d).toContain("temsiliGorsel(");
      expect(k, d).toContain("TEMSILI_ETIKET");
    }
    expect(TEMSILI_ETIKET).toBe("Temsili görsel");
  });

  it("ön-render: JSON-LD image ve og:image mutlak; temsili notu gövdede", () => {
    const u = { id: "11111111-2222-4333-8444-555555555555", baslik: "Tahliye hortumu", fiyat: 129, stok: 10, gorsel_url: "/pazar-gorsel/11111111-2222-4333-8444-555555555555.webp" };
    expect(urunLd(u).image).toEqual(["https://www.benservis.com/pazar-gorsel/11111111-2222-4333-8444-555555555555.webp"]);
    const { html, eksik } = urunKabugu(fs.readFileSync("index.html", "utf8"), u);
    expect(eksik).not.toContain("og:image");
    expect(html).toContain('<meta property="og:image" content="https://www.benservis.com/pazar-gorsel/');
    expect(html).toContain("Görsel temsilidir");
    const t = { ...u, gorsel_url: "https://www.online-yedekparca.com/a.jpg" };
    expect(urunLd(t).image).toEqual(["https://www.online-yedekparca.com/a.jpg"]);
  });
});
