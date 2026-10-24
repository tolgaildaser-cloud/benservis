// src/pazar-indeks.test.js — YK #173 (a), 12 Eki 2026: /pazar + /urun/:id indekse açılışı kilidi.
//
// NEDEN VAR: noindex kalkınca sayfalar Google'a ana sayfanın kopyası olarak gitmesin (6 Ağu /ikinci-el
// dersi): her kabuğun KENDİ başlığı, açıklaması, canonical'ı ve Product JSON-LD'si olmalı; ana sayfanın
// SSS şeması ürün sayfasına taşınmamalı; sitemap /pazar + aktif ürünleri içermeli; /ikinci-el noindex kalmalı.
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import {
  SITE, kabukMeta, pazarKabugu, urunKabugu, urunLd, urunAciklamasi, pazarSitemapGirdileri, pazarUrunleriniGetir, PAZAR_TITLE,
} from "../scripts/pazar-sayfalari.mjs";

// Vite çıktısındaki etiket biçimiyle birebir (index.html; 12 Eki'de dist ile doğrulandı).
const KABUK = `<!doctype html>
<html lang="tr">
  <head>
    <title>Benservis · Cihaz arıza teşhisi ve tahmini tamir maliyeti</title>
    <meta name="description" content="Ana sayfa açıklaması." />
    <link rel="canonical" href="https://www.benservis.com/" />
    <script type="application/ld+json">
      { "@type": "FAQPage", "mainEntity": [] }
    </script>
    <meta property="og:title" content="Ana" />
    <meta property="og:description" content="Ana açıklama" />
    <meta property="og:url" content="https://www.benservis.com/" />
    <meta property="og:image" content="https://www.benservis.com/og.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:title" content="Ana" />
    <meta name="twitter:description" content="Ana açıklama" />
    <meta name="twitter:image" content="https://benservis.com/og.png" />
    <script type="module" crossorigin src="/assets/index-abc123.js"></script>
  </head>
  <body style="margin:0;background:#F8FAFC">
    <div id="root"></div>
  </body>
</html>`;

const URUN = {
  id: "0f8fad5b-d9cb-469f-a165-70867728950e", baslik: "Kombi NTC sensör <uyumlu>", fiyat: 349, stok: 4, durum: "aktif",
  kategori: "yedek-parca", cihaz_turu: "kombi-termosifon", parca_turu: "termostat-sensor", parca_durum: "yeni",
  gorsel_url: "https://cdn.ornek.com/ntc.jpg", aciklama: "Vaillant & Protherm uyumlu.", created_at: "2026-10-11T10:00:00Z",
  satici: { id: "st-bs", ad: "Benservis", tur: "benservis" },
};

describe("kabuk meta yazımı", () => {
  it("başlık · açıklama · canonical · og/twitter değişir, ana sayfa JSON-LD'si atılır, root dolar", () => {
    const { html, eksik } = kabukMeta(KABUK, { title: "T", desc: "D", canonical: `${SITE}/pazar`, ld: [{ "@type": "X" }], govde: "<p>g</p>" });
    expect(eksik).toEqual([]);
    expect(html).toContain("<title>T</title>");
    expect(html).toContain('<meta name="description" content="D" />');
    expect(html).toContain(`<link rel="canonical" href="${SITE}/pazar" />`);
    expect(html).toContain(`<meta property="og:url" content="${SITE}/pazar" />`);
    expect(html).not.toContain("FAQPage");
    expect(html).toContain('<script type="application/ld+json" data-bs-ld>{"@type":"X"}</script>');
    expect(html).toContain('<div id="root"><p>g</p></div>');
    expect(html).toContain("/assets/index-abc123.js"); // SPA yine açılır
    expect(html).not.toMatch(/noindex/);
  });

  it("kabuk değişmişse sessiz geçmez: değiştirilemeyen etiket adı döner", () => {
    const { eksik } = kabukMeta("<html><head></head><body><div id=\"root\"></div></body></html>", { title: "T", desc: "D", canonical: "c" });
    expect(eksik).toEqual(expect.arrayContaining(["title", "description", "canonical"]));
  });
});

describe("/pazar kabuğu", () => {
  it("kendi başlığı, canonical /pazar, ürün ve cihaz bağlantıları, ItemList", () => {
    const { html, eksik } = pazarKabugu(KABUK, [URUN]);
    expect(eksik).toEqual([]);
    expect(html).toContain(`<title>${PAZAR_TITLE}</title>`);
    expect(html).toContain(`<link rel="canonical" href="${SITE}/pazar" />`);
    expect(html).toContain(`href="/urun/${URUN.id}"`);
    expect(html).toContain('href="/pazar?kategori=yedek-parca&amp;cihaz=kombi-termosifon"');
    expect(html).toContain('"@type":"ItemList"');
    expect(html).toContain("Kombi NTC sensör &lt;uyumlu&gt;"); // kaçış
  });

  it("ürün yokken de basılır (ağ hatası build'i durdurmaz)", () => {
    const { html, eksik } = pazarKabugu(KABUK, []);
    expect(eksik).toEqual([]);
    expect(html).toContain(`<title>${PAZAR_TITLE}</title>`);
    expect(html).not.toContain("ItemList");
  });
});

describe("/urun/:id kabuğu ve Product JSON-LD", () => {
  it("ad · fiyat KDV dahil TRY · stok · satıcı · görsel · durum", () => {
    const ld = urunLd(URUN);
    expect(ld["@type"]).toBe("Product");
    expect(ld.name).toBe(URUN.baslik);
    expect(ld.offers).toMatchObject({ price: "349", priceCurrency: "TRY", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition" });
    expect(ld.offers.seller).toEqual({ "@type": "Organization", name: "Benservis" });
    expect(ld.image).toEqual([URUN.gorsel_url]);
    expect(urunLd({ ...URUN, stok: 0, parca_durum: "cikma", satici: null }).offers).toMatchObject({ availability: "https://schema.org/OutOfStock", itemCondition: "https://schema.org/UsedCondition", seller: { name: "Benservis" } });
    expect(urunAciklamasi(URUN).length).toBeLessThanOrEqual(160);
    expect(urunAciklamasi(URUN)).toContain("349 TL (KDV dahil, kargo hariç)");
  });

  it("kabuk: başlık ürün adı, canonical /urun/:id, og:image ürün görseli (boyut satırları gider), ana SSS yok", () => {
    const { html, eksik } = urunKabugu(KABUK, URUN);
    expect(eksik).toEqual([]);
    expect(html).toContain(`<title>Kombi NTC sensör &lt;uyumlu&gt; · Benservis Pazaryeri</title>`);
    expect(html).toContain(`<link rel="canonical" href="${SITE}/urun/${URUN.id}" />`);
    expect(html).toContain(`<meta property="og:image" content="${URUN.gorsel_url}" />`);
    expect(html).not.toContain("og:image:width");
    expect(html).not.toContain("FAQPage");
    expect(html).toContain('"@type":"Product"');
    expect(html).toContain('"@type":"BreadcrumbList"');
    expect(html).toContain("<h1>Kombi NTC sensör &lt;uyumlu&gt;</h1>");
    expect(html).toContain('href="/pazar"');
  });
});

describe("sitemap girdileri", () => {
  it("/pazar + her ürün; süzgeçli görünüm ve /ikinci-el yok; lastmod ürün tarihinden", () => {
    const g = pazarSitemapGirdileri([URUN, { ...URUN, id: "1f8fad5b-d9cb-469f-a165-70867728950e", created_at: "2026-10-09" }], "2026-10-01");
    expect(g.map((x) => x.loc)).toEqual([`${SITE}/pazar`, `${SITE}/urun/${URUN.id}`, `${SITE}/urun/1f8fad5b-d9cb-469f-a165-70867728950e`]);
    expect(g[0].lastmod).toBe("2026-10-11");
    expect(g[2].lastmod).toBe("2026-10-09");
    expect(JSON.stringify(g)).not.toMatch(/ikinci-el|cihaz=/);
    expect(pazarSitemapGirdileri([], "2026-10-01")).toEqual([{ loc: `${SITE}/pazar`, lastmod: "2026-10-01" }]);
  });
});

describe("canlı API okuma", () => {
  const cihazlar = [{ slug: "klima", ad: "Klima" }, { slug: "kombi-termosifon", ad: "Kombi / Termosifon" }];
  const cevap = (urunler) => ({ ok: true, status: 200, json: async () => ({ urunler }) });

  it("cihaz başına istek; aktif + stoklu + yedek parça; tekrar id tekilleşir; yeni önce", async () => {
    const istekler = [];
    const fetchFn = async (url) => {
      istekler.push(url);
      if (url.includes("cihaz=klima")) return cevap([URUN, { ...URUN, id: "2f8fad5b-d9cb-469f-a165-70867728950e", stok: 0 }, { ...URUN, id: "3f8fad5b-d9cb-469f-a165-70867728950e", durum: "pasif" }]);
      return cevap([URUN, { ...URUN, id: "4f8fad5b-d9cb-469f-a165-70867728950e", created_at: "2026-10-12T09:00:00Z" }]);
    };
    const { urunler } = await pazarUrunleriniGetir({ fetchFn, cihazlar });
    expect(istekler).toHaveLength(2);
    expect(istekler[0]).toBe(`${SITE}/api/pazar/liste?kategori=yedek-parca&cihaz=klima`);
    expect(urunler.map((u) => u.id)).toEqual(["4f8fad5b-d9cb-469f-a165-70867728950e", URUN.id]);
  });

  it("bir istek bile başarısızsa liste yok (yarım sitemap basılmaz)", async () => {
    expect((await pazarUrunleriniGetir({ fetchFn: async () => ({ ok: false, status: 500 }), cihazlar })).urunler).toBeNull();
    expect((await pazarUrunleriniGetir({ fetchFn: async () => { throw new Error("ağ yok"); }, cihazlar })).hata).toBe("ağ yok");
  });
});

describe("kaynak kuralları", () => {
  it("build-blog kabukları basar ve sitemap'e ekler; ana sayfa ön-render'ı kabuk okumasından SONRA", () => {
    const b = fs.readFileSync("scripts/build-blog.mjs", "utf8");
    expect(b).toContain("pazarKabugu(pazarKabukKaynak");
    expect(b).toContain("urunKabugu(pazarKabukKaynak, u)");
    expect(b).toContain("...pazarSitemapGirdileri(pazarUrunleri, newest)");
    expect(b.indexOf("const pazarKabukKaynak")).toBeLessThan(b.indexOf("anaSayfaOnRender(tamirliKat)"));
  });

  it("vercel.json: /pazar ve /urun/:id rewrite'ı yedek olarak durur; X-Robots-Tag yalnız /ikinci-el (+ /yerinde paneli, YK #183 PR-2)", () => {
    const v = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
    expect(v.rewrites.find((r) => r.source === "/pazar")?.destination).toBe("/index.html");
    expect(v.rewrites.find((r) => r.source === "/urun/:id")?.destination).toBe("/index.html");
    const robots = v.headers.filter((h) => h.headers.some((x) => x.key === "X-Robots-Tag")).map((h) => h.source);
    expect(robots.sort()).toEqual(["/ikinci-el", "/ikinci-el/:yol*", "/yerinde"]);
  });

  it("UrunDetay istemci şeması yalnız kabukta şema yoksa eklenir (çift Product yok)", () => {
    const u = fs.readFileSync("src/UrunDetay.jsx", "utf8");
    expect(u).toContain('document.head.querySelector("script[data-bs-ld]")');
    expect(u).toContain("urunLdNesnesi(u"); // YK #179: şema src/urun-ld.js'ten (priceCurrency TRY orada)
  });
});
