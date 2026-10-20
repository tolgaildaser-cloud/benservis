// scripts/pazar-sayfalari.mjs — `/pazar` ve `/urun/:id` için indekslenebilir kabuk (YK #173 (a), 12 Eki 2026).
//
// SORUN: `/pazar` ve `/urun/:id` SPA rotaları; Vercel ikisini de `dist/index.html`e yazıyor. O kabuğun
// başlığı, açıklaması ve canonical'ı ANA SAYFANIN ("<link rel=canonical href=/>"). noindex kalksa bile
// Google bu adresleri ana sayfanın kopyası sayar — 6 Ağu'da /ikinci-el'in sitemap'ten çıkarılma sebebi
// tam olarak buydu. Tek `noindex` silmek sayfayı Google'a AÇMAZ.
//
// ÇÖZÜM: build sırasında (vite build'den sonra) `dist/index.html` okunur; başlık · açıklama · canonical ·
// og/twitter · JSON-LD yeniden yazılır, `<div id="root">` içine Googlebot'un JS'siz okuyabileceği bir
// ön-render konur (ana sayfa ön-render'ıyla aynı yöntem: React `createRoot().render()` mount'ta temizler).
// Çıktı: `dist/pazar/index.html` + her aktif yedek parça için `dist/urun/<id>/index.html`. Vercel statik
// dosyayı rewrite'tan ÖNCE sunar; build'den sonra eklenen ürün için `/urun/:id → /index.html` rewrite'ı
// yedek kalır (sayfa çalışır, yalnız kendi meta'sı olmaz — bir sonraki deploy'da kazanır).
//
// Ürün listesi CANLI API'den gelir (`/api/pazar/liste`, public, anahtar yok): cihaz başına bir istek
// (uç başına 60 sınırı var; cihaz başına en çok 24 ürün ölçüldü, 12 Eki). Ağ hatasında build DURMAZ:
// ürün kabuğu basılmaz, `/pazar` kabuğu ve sitemap girdisi yine yazılır.
//
// ⛔ `/ikinci-el` ve `/ikinci-el/*` bu dosyanın kapsamı DIŞINDA — noindex kalır (YK #173).
// ⛔ Fiyat KDV dahil (DB'deki fiyat), JSON-LD'de TRY; satıcı adı `saticilar`dan, yoksa "Benservis".
import { PAZAR_CIHAZLARI, PARCA_TURLERI } from "../src/pazar-sozluk.js";
import * as T from "../src/theme.js";
import { temsiliGorsel, mutlakGorselUrl, TEMSILI_NOT } from "../src/pazar-gorsel.js";
import { urunLdNesnesi } from "../src/urun-ld.js"; // YK #179 ①: Product şeması tek kaynak

export const SITE = "https://www.benservis.com";
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tl = (n) => `${Math.round(Number(n || 0)).toLocaleString("tr-TR")} TL`;
const adBul = (liste, slug) => liste.find((x) => x.slug === slug)?.ad || "";
const kisaAd = (ad) => String(ad || "").split(" / ")[0];
const isoGun = (d) => { const s = String(d || "").slice(0, 10); return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : null; };

// ── Ürünleri canlı API'den çek ───────────────────────────────────────────────────────────────────
// Dönüş: { urunler: [...] } ya da { urunler: null, hata } (herhangi bir istek başarısızsa — yarım liste
// yarım sitemap demek; o zaman hiç yazmamak daha doğru).
export async function pazarUrunleriniGetir({ site = SITE, fetchFn = globalThis.fetch, cihazlar = PAZAR_CIHAZLARI, zamanAsimiMs = 10000 } = {}) {
  const hepsi = new Map();
  try {
    for (const c of cihazlar) {
      const url = `${site}/api/pazar/liste?kategori=yedek-parca&cihaz=${encodeURIComponent(c.slug)}`;
      const r = await fetchFn(url, { signal: AbortSignal.timeout(zamanAsimiMs) });
      if (!r.ok) return { urunler: null, hata: `${url} → HTTP ${r.status}` };
      const d = await r.json();
      for (const u of Array.isArray(d?.urunler) ? d.urunler : []) {
        if (u && UUID_RE.test(String(u.id)) && u.durum === "aktif" && Number(u.stok) > 0 && u.kategori === "yedek-parca") hepsi.set(u.id, u);
      }
    }
  } catch (e) {
    return { urunler: null, hata: e?.message || String(e) };
  }
  const urunler = [...hepsi.values()].sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
  return { urunler };
}

// ── Kabuk meta yazımı ────────────────────────────────────────────────────────────────────────────
// `dist/index.html`'deki ana sayfa etiketleri sayfanınkiyle değiştirilir; ana sayfanın JSON-LD'leri
// (SSS FAQPage) ATILIR — ürün sayfasında ana sayfa SSS'si yanlış sinyal olur. Değiştirilemeyen etiket
// sayılır ve `eksik` dizisinde döner (build log'a uyarı düşer; sessiz geçilmez).
export function kabukMeta(html, { title, desc, canonical, image, ld = [], govde = "" }) {
  const eksik = [];
  const degistir = (re, yeni, ad) => {
    if (!re.test(html)) { eksik.push(ad); return; }
    html = html.replace(re, yeni);
  };
  degistir(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`, "title");
  degistir(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(desc)}" />`, "description");
  degistir(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${esc(canonical)}" />`, "canonical");
  degistir(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(title)}" />`, "og:title");
  degistir(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${esc(desc)}" />`, "og:description");
  degistir(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${esc(canonical)}" />`, "og:url");
  degistir(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${esc(title)}" />`, "twitter:title");
  degistir(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${esc(desc)}" />`, "twitter:description");
  if (image) {
    degistir(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${esc(image)}" />`, "og:image");
    degistir(/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${esc(image)}" />`, "twitter:image");
    // Boyut bilinmiyor; ana sayfanın 1200×630'u yanlış olur.
    html = html.replace(/\s*<meta property="og:image:(?:width|height)" content="[^"]*"\s*\/?>/g, "");
  }
  // Ana sayfa JSON-LD'leri (FAQPage vb.) gider; sayfanın kendi şeması gelir.
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
  const ldHtml = ld.map((o) => `<script type="application/ld+json" data-bs-ld>${JSON.stringify(o)}</script>`).join("\n    ");
  if (ldHtml) {
    if (!/<\/head>/.test(html)) eksik.push("head");
    html = html.replace(/<\/head>/, `    ${ldHtml}\n  </head>`);
  }
  if (govde) {
    if (!html.includes('<div id="root"></div>')) eksik.push("root");
    html = html.replace('<div id="root"></div>', `<div id="root">${govde}</div>`);
  }
  return { html, eksik };
}

// Ön-render stili: ana sayfa ön-render'ıyla aynı dil (build-blog.mjs anaSayfaOnRender).
const ON_RENDER_CSS =
  `<style>#on-render{max-width:760px;margin:0 auto;padding:28px 20px;font-family:'Hanken Grotesk',system-ui,sans-serif;color:${T.NAVY}}` +
  `#on-render h1{font-family:Fraunces,Georgia,serif;font-size:26px;line-height:1.25;margin:0 0 10px}` +
  `#on-render h2{font-size:17px;margin:26px 0 10px}` +
  `#on-render p{color:#475569;font-size:15px;line-height:1.6;margin:0 0 14px}` +
  `#on-render img{max-width:320px;width:100%;height:auto;border:1px solid ${T.HAIR};border-radius:12px;display:block;margin:0 0 14px}` +
  `#on-render ul{margin:0;padding-left:18px}#on-render li{margin:6px 0;font-size:14px}` +
  `#on-render a{color:${T.BLUE};text-decoration:none}</style>`;

// ── /pazar kabuğu ────────────────────────────────────────────────────────────────────────────────
export const PAZAR_TITLE = "Yedek Parça Pazaryeri · Benservis";
export const PAZAR_DESC = "Beyaz eşya, kombi ve klima yedek parçaları KDV dahil fiyatla, tahmini 3 iş gününde kargoda. Satıcı Benservis; takmayı yakındaki servise bırak.";

export function pazarKabugu(html, urunler = []) {
  const canonical = `${SITE}/pazar`;
  const cihazSay = {};
  for (const u of urunler) if (u.cihaz_turu) cihazSay[u.cihaz_turu] = (cihazSay[u.cihaz_turu] || 0) + 1;
  const cihazlar = PAZAR_CIHAZLARI.filter((c) => cihazSay[c.slug]);
  const govde =
    ON_RENDER_CSS + `<div id="on-render">` +
      `<h1>Yedek parça pazaryeri</h1>` +
      `<p>${esc(PAZAR_DESC)}</p>` +
      (cihazlar.length
        ? `<h2>Cihazına göre</h2><ul>` + cihazlar.map((c) => `<li><a href="/pazar?kategori=yedek-parca&amp;cihaz=${esc(c.slug)}">${esc(kisaAd(c.ad))} parçaları (${cihazSay[c.slug]})</a></li>`).join("") + `</ul>`
        : "") +
      (urunler.length
        ? `<h2>Ürünler</h2><ul>` + urunler.map((u) => `<li><a href="/urun/${esc(u.id)}">${esc(u.baslik)}</a> — ${esc(tl(u.fiyat))} <small>KDV dahil</small></li>`).join("") + `</ul>`
        : "") +
      `<p><a href="/">Ana sayfa</a> · <a href="/blog/">Bilgi Merkezi</a> · <a href="/on-bilgilendirme-formu/">Ön Bilgilendirme Formu</a> · <a href="/mesafeli-satis-sozlesmesi/">Mesafeli Satış Sözleşmesi</a></p>` +
    `</div>`;
  const ld = [
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Pazaryeri", item: canonical },
      ],
    },
  ];
  if (urunler.length) {
    ld.push({
      "@context": "https://schema.org", "@type": "ItemList", name: PAZAR_TITLE, numberOfItems: urunler.length,
      itemListElement: urunler.map((u, i) => ({ "@type": "ListItem", position: i + 1, name: u.baslik, url: `${SITE}/urun/${u.id}` })),
    });
  }
  return kabukMeta(html, { title: PAZAR_TITLE, desc: PAZAR_DESC, canonical, ld, govde });
}

// ── /urun/:id kabuğu ─────────────────────────────────────────────────────────────────────────────
export function urunAciklamasi(u) {
  const bas = `${u.baslik} — ${tl(u.fiyat)} (KDV dahil, kargo hariç). Satıcı ${u.satici?.ad || "Benservis"}, tahmini 3 iş gününde kargoda.`;
  const ek = String(u.aciklama || "").replace(/\s+/g, " ").trim();
  const metin = ek ? `${bas} ${ek}` : bas;
  return metin.length > 160 ? `${metin.slice(0, 157).trimEnd()}…` : metin;
}

export function urunLd(u) {
  const cihazAd = adBul(PAZAR_CIHAZLARI, u.cihaz_turu);
  const parcaAd = adBul(PARCA_TURLERI, u.parca_turu);
  return urunLdNesnesi(u, {
    saticiAd: u.satici?.ad || "Benservis",
    site: SITE,
    description: urunAciklamasi(u),
    category: cihazAd || parcaAd ? ["Yedek Parça", kisaAd(cihazAd), parcaAd].filter(Boolean).join(" > ") : undefined,
  });
}

export function urunKabugu(html, u) {
  const canonical = `${SITE}/urun/${u.id}`;
  const title = `${u.baslik} · Benservis Pazaryeri`;
  const desc = urunAciklamasi(u);
  const cihazAd = adBul(PAZAR_CIHAZLARI, u.cihaz_turu);
  const parcaAd = adBul(PARCA_TURLERI, u.parca_turu);
  const govde =
    ON_RENDER_CSS + `<div id="on-render">` +
      `<p><a href="/pazar">Pazaryeri</a>${cihazAd ? ` › <a href="/pazar?kategori=yedek-parca&amp;cihaz=${esc(u.cihaz_turu)}">${esc(kisaAd(cihazAd))}</a>` : ""}</p>` +
      `<h1>${esc(u.baslik)}</h1>` +
      (u.gorsel_url ? `<img src="${esc(u.gorsel_url)}" alt="${esc(u.baslik)}" loading="lazy" referrerpolicy="no-referrer">` : "") +
      (temsiliGorsel(u.gorsel_url) ? `<p><small>${esc(TEMSILI_NOT)}</small></p>` : "") +
      `<p><strong>${esc(tl(u.fiyat))}</strong> · KDV dahil · kargo hariç · Tahmini 3 iş gününde kargoda · Satıcı ${esc(u.satici?.ad || "Benservis")}</p>` +
      ([cihazAd && kisaAd(cihazAd), parcaAd].filter(Boolean).length ? `<p>${esc([cihazAd && kisaAd(cihazAd), parcaAd].filter(Boolean).join(" · "))}</p>` : "") +
      (u.aciklama ? `<p>${esc(u.aciklama)}</p>` : "") +
      `<p><a href="/pazar">Tüm yedek parçalar →</a></p>` +
    `</div>`;
  const ld = [
    urunLd(u),
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Pazaryeri", item: `${SITE}/pazar` },
        { "@type": "ListItem", position: 3, name: u.baslik, item: canonical },
      ],
    },
  ];
  return kabukMeta(html, { title, desc, canonical, image: u.gorsel_url ? mutlakGorselUrl(u.gorsel_url, SITE) : "", ld, govde });
}

// ── Sitemap girdileri ────────────────────────────────────────────────────────────────────────────
// `/pazar` + her aktif ürün. Süzgeçli görünümler (`?cihaz=`) BİLEREK yok: aynı kabuğu paylaşıyorlar ve
// canonical'ları `/pazar` — sitemap'e koymak çelişkili sinyal olurdu (6 Ağu /ikinci-el dersi).
export function pazarSitemapGirdileri(urunler, varsayilanLastmod) {
  const gunler = (urunler || []).map((u) => isoGun(u.created_at)).filter(Boolean).sort();
  const pazarLastmod = gunler[gunler.length - 1] || varsayilanLastmod;
  return [
    { loc: `${SITE}/pazar`, lastmod: pazarLastmod },
    ...(urunler || []).map((u) => ({ loc: `${SITE}/urun/${u.id}`, lastmod: isoGun(u.created_at) || pazarLastmod })),
  ];
}
