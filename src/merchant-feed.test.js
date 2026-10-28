// src/merchant-feed.test.js — YK #191: Merchant feed'i ile sitedeki ürün sayfaları/şema ayrışmaz.
import { describe, it, expect } from "vitest";
import { merchantFeedXml } from "../scripts/merchant-feed.mjs";
import { pazarSitemapGirdileri } from "../scripts/pazar-sayfalari.mjs";
import { KARGO_TL } from "./kargo.js";

const urunler = [
  { id: "11111111-1111-4111-8111-111111111111", baslik: "Vestel klima filtresi — Vestel uyumlu (42148439)", fiyat: 249, stok: 10, durum: "aktif", parca_durum: "yeni", gorsel_url: "/pazar-gorsel/a.webp", created_at: "2026-10-20" },
  { id: "22222222-2222-4222-8222-222222222222", baslik: "Kombi baca dirseği — Üniversal & yoğuşmalı", fiyat: 3499, stok: 10, durum: "aktif", parca_durum: "cikma", created_at: "2026-10-21" },
  { id: "33333333-3333-4333-8333-333333333333", baslik: "Satıştan kalkmış parça", fiyat: 99, stok: 0, durum: "aktif", created_at: "2026-10-22" },
];
const xml = merchantFeedXml(urunler);
const ogeler = xml.split("<item>").slice(1);
const alan = (o, k) => (o.match(new RegExp(`<${k}>([^<]*)</${k}>`)) || [])[1];

describe("Merchant feed", () => {
  it("yalnız satıştaki ürünler girer; id'ler sitemap'teki /urun adresleriyle birebir", () => {
    const satista = urunler.filter((u) => Number(u.stok) > 0);
    expect(ogeler.map((o) => alan(o, "g:id"))).toEqual(satista.map((u) => u.id));
    const sitemap = pazarSitemapGirdileri(satista, "2026-10-28").map((g) => g.loc).filter((l) => l.includes("/urun/"));
    expect(ogeler.map((o) => alan(o, "link"))).toEqual(sitemap);
  });

  it("fiyat ekrandakiyle aynı (KDV dahil, TRY); kargo sabit 189 TRY — eşik ürün bazında yazılmaz", () => {
    expect(alan(ogeler[0], "g:price")).toBe("249.00 TRY");
    expect(alan(ogeler[1], "g:price")).toBe("3499.00 TRY");
    for (const o of ogeler) expect(o).toContain(`<g:shipping><g:country>TR</g:country><g:price>${KARGO_TL}.00 TRY</g:price></g:shipping>`);
  });

  it("brand yalnız gerçek markada; identifier_exists hepsinde no; durum ve stok alanları doğru", () => {
    expect(alan(ogeler[0], "g:brand")).toBe("Vestel");
    expect(alan(ogeler[1], "g:brand")).toBeUndefined();
    for (const o of ogeler) expect(alan(o, "g:identifier_exists")).toBe("no");
    expect(alan(ogeler[0], "g:condition")).toBe("new");
    expect(alan(ogeler[1], "g:condition")).toBe("used");
    for (const o of ogeler) expect(alan(o, "g:availability")).toBe("in_stock");
    expect(alan(ogeler[0], "g:image_link")).toMatch(/^https:\/\/www\.benservis\.com\//);
  });

  it("XML kaçışlı ve g: ad alanı tanımlı", () => {
    expect(xml).toMatch(/^<\?xml version="1.0" encoding="UTF-8"\?>/);
    expect(xml).toContain('xmlns:g="http://base.google.com/ns/1.0"');
    expect(xml).toContain("Üniversal &amp; yoğuşmalı");
    expect(xml).not.toMatch(/Üniversal & /);
  });
});
