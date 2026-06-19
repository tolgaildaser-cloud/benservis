// scripts/build-blog.mjs
// content/blog/*.md -> dist/blog/<slug>/index.html (statik, SEO'lu) + /blog listesi + sitemap + robots
// `vite build`ten SONRA çalışır (package.json: "build": "vite build && node scripts/build-blog.mjs").
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { marked } from "marked";
import * as T from "../src/theme.js";

marked.setOptions({ gfm: true, breaks: false });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content", "blog");
const DIST = path.join(ROOT, "dist");
const OUT = path.join(DIST, "blog");
const SITE = "https://benservis.com";

const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const trDate = (d) => {
  const [y, m, day] = String(d).split("-");
  return day && m && y ? `${day}.${m}.${y}` : String(d);
};

// Konuya göre cihaz ikonu (app'in cihaz-ikonlari.jsx'i ile tutarlı, 24x24 line).
const ICON_PATHS = {
  klima: '<rect x="3" y="5" width="18" height="6" rx="2"/><line x1="6" y1="8.2" x2="14" y2="8.2"/><path d="M7 15c0 1.5 1.5 1.5 1.5 3"/><path d="M12 15c0 1.5 1.5 1.5 1.5 3"/><path d="M17 15c0 1.5 1.5 1.5 1.5 3"/>',
  buzdolabi: '<rect x="6" y="3" width="12" height="18" rx="2"/><line x1="6" y1="10" x2="18" y2="10"/><line x1="9" y1="6" x2="9" y2="8"/><line x1="9" y1="13" x2="9" y2="16"/>',
  camasir: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="4.2"/><circle cx="8" cy="6.5" r="0.6" fill="currentColor"/><line x1="15" y1="6.5" x2="17" y2="6.5"/>',
  yerel: '<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  bulasik: '<rect x="4" y="3" width="16" height="18" rx="2"/><line x1="4" y1="7" x2="20" y2="7"/><line x1="16.5" y1="5" x2="17.5" y2="5"/><line x1="8" y1="11" x2="8" y2="17"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="16" y1="11" x2="16" y2="17"/>',
  kombi: '<rect x="5" y="3" width="14" height="13" rx="2"/><rect x="8" y="6" width="8" height="3.5" rx="0.8"/><line x1="9" y1="16" x2="9" y2="20"/><line x1="15" y1="16" x2="15" y2="20"/>',
  firin: '<rect x="4" y="4" width="16" height="16" rx="2"/><line x1="4" y1="9" x2="20" y2="9"/><circle cx="8" cy="6.5" r="0.6" fill="currentColor"/><circle cx="12" cy="6.5" r="0.6" fill="currentColor"/><rect x="7" y="12" width="10" height="5" rx="1"/>',
  tv: '<rect x="3" y="4" width="18" height="12" rx="2"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/>',
  default: '<path d="M14.5 6.5a3.5 3.5 0 0 0-4.9 4.4l-4.8 4.8a1.5 1.5 0 0 0 2.1 2.1l4.8-4.8a3.5 3.5 0 0 0 4.4-4.9l-2 2-1.7-1.7Z"/>',
};
function iconKey(cat) {
  const c = (cat || "").toLocaleLowerCase("tr");
  if (c.includes("klima")) return "klima";
  if (c.includes("buzdolab")) return "buzdolabi";
  if (c.includes("çamaşır") || c.includes("camasir")) return "camasir";
  if (c.includes("yerel") || c.includes("kadıköy") || c.includes("kadikoy") || c.includes("ilçe")) return "yerel";
  if (c.includes("bulaşık") || c.includes("bulasik")) return "bulasik";
  if (c.includes("kombi")) return "kombi";
  if (c.includes("fırın") || c.includes("firin") || c.includes("ocak")) return "firin";
  if (c.includes("televizyon") || c.includes("tv")) return "tv";
  return "default";
}
const iconSvg = (cat, cls) =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[iconKey(cat)]}</svg>`;
const heroFor = (cat) =>
  `<div class="hero">${iconSvg(cat, "hero-icon")}<span class="hero-cat">${esc(cat || "Rehber")}</span></div>`;

const CSS = `
${T.FONT_IMPORT}
*{box-sizing:border-box}
body{margin:0;background:${T.BG};color:${T.NAVY};font-family:'Hanken Grotesk',system-ui,sans-serif;line-height:1.7}
.wrap{max-width:720px;margin:0 auto;padding:0 24px}
a{color:${T.BLUE}}
header.site{background:${T.SURFACE};border-bottom:1px solid ${T.HAIR}}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.brand{display:flex;align-items:center;gap:9px;text-decoration:none}
.brand .wm{font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-weight:700;font-size:21px;letter-spacing:-.5px;line-height:1}
.brand .wm-b{color:${T.NAVY}}
.brand .wm-s{color:${T.BLUE}}
.brand-text{display:flex;flex-direction:column;justify-content:center;align-items:center;line-height:1.05}
.brand-motto{font-size:11px;font-weight:500;color:${T.MUTED};margin-top:2px}
.nav{color:${T.MUTED};text-decoration:none;font-weight:600;font-size:14px}
main{padding:40px 0 64px}
.hero{position:relative;overflow:hidden;border-radius:18px;background:${T.BLUE};height:188px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;margin:0 0 30px}
.hero::after{content:"";position:absolute;right:-60px;top:-70px;width:240px;height:240px;border-radius:50%;background:rgba(255,255,255,.09)}
.hero::before{content:"";position:absolute;left:-55px;bottom:-75px;width:210px;height:210px;border-radius:50%;background:rgba(255,255,255,.06)}
.hero-icon{width:82px;height:82px;color:#fff;position:relative;z-index:1}
.hero-cat{position:relative;z-index:1;color:#fff;font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;opacity:.92}
h1{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(28px,5vw,40px);line-height:1.12;letter-spacing:-.02em;margin:0 0 8px}
.meta{color:${T.FAINT};font-size:14px;margin:0 0 28px}
article h2{font-family:'Fraunces',serif;font-weight:600;font-size:24px;margin:36px 0 12px;letter-spacing:-.01em}
article p{margin:0 0 16px}
article ul,article ol{margin:0 0 16px;padding-left:22px}
article li{margin:6px 0}
strong{font-weight:600}
article .lead{display:block;margin-bottom:3px}
table{width:100%;border-collapse:collapse;margin:18px 0;font-size:15px}
th,td{border:1px solid ${T.HAIR};padding:10px 12px;text-align:left}
th{background:${T.BG}}
blockquote{margin:18px 0;padding:12px 16px;background:#EFF4FF;border-left:3px solid ${T.BLUE};color:${T.NAVY}}
blockquote p{margin:0}
.cta{display:block;margin:36px 0 8px;padding:24px;border-radius:16px;background:${T.BLUE};color:#fff;text-decoration:none;transition:background .15s,transform .15s}
.cta:hover{background:#1D4ED8;transform:translateY(-1px)}
.cta h3{font-family:'Fraunces',serif;font-weight:600;margin:0 0 8px;color:#fff;font-size:20px}
.cta p{margin:0 0 4px;opacity:.96}
.cta .tag{font-weight:600;opacity:1}
footer.site{border-top:1px solid ${T.HAIR};font-size:13px;padding:24px 0;text-align:center;color:${T.FAINT}}
footer.site .wm-b{color:${T.NAVY};font-weight:600}
footer.site .wm-s{color:${T.BLUE};font-weight:600}
.bloglist{display:grid;gap:16px;margin:28px 0}
.card{display:flex;gap:16px;align-items:center;text-decoration:none;color:${T.NAVY};background:${T.SURFACE};border:1px solid ${T.HAIR};border-radius:14px;padding:18px 20px;transition:border-color .15s,box-shadow .15s}
.card:hover{border-color:${T.BLUE};box-shadow:0 10px 24px -20px rgba(30,41,59,.3)}
.card-ic{width:48px;height:48px;border-radius:12px;background:#EFF4FF;color:${T.BLUE};display:flex;align-items:center;justify-content:center;flex-shrink:0}
.card-ic svg{width:27px;height:27px}
.card-body{flex:1;min-width:0}
.card .cat{color:${T.BLUE};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em}
.card h2{font-family:'Fraunces',serif;font-weight:600;font-size:20px;margin:5px 0 5px}
.card p{margin:0;color:${T.MUTED};font-size:14.5px}
.bloghead{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin:0 0 8px}
.bloghead h1{margin:0}
.blogsearch{flex:1 1 220px;max-width:360px;margin:0;padding:12px 15px;border:1px solid ${T.HAIR};border-radius:12px;font-size:15px;font-family:'Hanken Grotesk',system-ui,sans-serif;color:${T.NAVY};background:${T.SURFACE};outline:none}
.blogsearch:focus{border-color:${T.BLUE};box-shadow:0 0 0 3px rgba(37,99,235,.12)}
.blogsearch::placeholder{color:${T.FAINT}}
.blogbos{color:${T.MUTED};text-align:center;padding:26px 0;font-size:15px}
`;

const TEETH = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((a) => `<rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(${a} 60 51)"/>`)
  .join("");
const LOGO = `<svg width="30" height="30" viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" rx="28" fill="${T.BLUE}"/><path d="M60 22C42 22 28 36 28 53c0 22 32 45 32 45s32-23 32-45C92 36 78 22 60 22Z" fill="#fff"/><g fill="${T.BLUE}"><circle cx="60" cy="51" r="15"/>${TEETH}</g><circle cx="60" cy="51" r="6" fill="#fff"/></svg>`;
const WORDMARK = `<span class="brand-text"><span class="wm"><span class="wm-b">ben</span><span class="wm-s">servis</span></span><span class="brand-motto">Bil, gör, çağır.</span></span>`;

const CTA = `<a class="cta" href="/"><h3>🔧 Arızanı ve tahmini fiyatını saniyede öğren</h3><p>Cihazını ve belirtini seç → tahmini maliyeti gör → yanındaki en yüksek puanlı servisi tek dokunuşla ara.</p><p class="tag">Bil, gör, çağır. →</p></a>`;

// Bilgi Merkezi listesi için client-side arama (statik, backend yok).
// Kart metnini (kategori+başlık+özet) Türkçe-duyarlı + aksan toleranslı normalize eder,
// çok kelimeli sorguda HEPSİ eşleşen kartları gösterir.
const SEARCH_JS = `(function(){
  var norm=function(s){return (s||"").toLocaleLowerCase("tr").replace(/[ıİ]/g,"i").replace(/ş/g,"s").replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ö/g,"o").replace(/\\s+/g," ").trim();};
  var inp=document.getElementById("blogSearch"),bos=document.getElementById("blogBos");
  if(!inp)return;
  var cards=[].slice.call(document.querySelectorAll(".bloglist .card"));
  inp.addEventListener("input",function(){
    var toks=norm(inp.value).split(" ").filter(Boolean),n=0;
    cards.forEach(function(c){
      var hay=norm(c.textContent),hit=toks.every(function(t){return hay.indexOf(t)!==-1;});
      c.style.display=hit?"":"none";if(hit)n++;
    });
    if(bos)bos.style.display=(toks.length&&n===0)?"":"none";
  });
})();`;

function page({ title, desc, canonical, head = "", body }) {
  return `<!doctype html><html lang="tr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="Benservis"><meta name="twitter:card" content="summary">
<style>${CSS}</style>${head}
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
</head><body>
<header class="site"><div class="wrap"><a class="brand" href="/">${LOGO}${WORDMARK}</a><a class="nav" href="/blog/">Bilgi Merkezi</a></div></header>
<main><div class="wrap">${body}</div></main>
<footer class="site"><span class="wm-b">ben</span><span class="wm-s">servis</span> · Bil, gör, çağır. · <a href="/" style="color:${T.MUTED}">benservis.com</a></footer>
</body></html>`;
}

if (!fs.existsSync(CONTENT)) {
  console.log("[build-blog] content/blog yok, atlanıyor.");
  process.exit(0);
}
fs.mkdirSync(OUT, { recursive: true });

// Aynı kategori art arda gelmesin: tarih-desc sırala, sonra kategoriye göre serpiştir
// (her adımda, en çok kalanı olan + son eklenenden FARKLI kategoriyi seç).
function serpistir(list) {
  const gruplar = {};
  for (const p of list) { const k = p.category || "Rehber"; (gruplar[k] ||= []).push(p); }
  const out = [];
  let son = null;
  while (out.length < list.length) {
    let secCat = null, secLen = 0;
    for (const [cat, arr] of Object.entries(gruplar)) {
      if (!arr.length || cat === son) continue;
      if (arr.length > secLen) { secLen = arr.length; secCat = cat; }
    }
    if (!secCat) for (const [cat, arr] of Object.entries(gruplar)) { if (arr.length) { secCat = cat; break; } }
    out.push(gruplar[secCat].shift());
    son = secCat;
  }
  return out;
}

const posts = serpistir(
  fs.readdirSync(CONTENT)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(CONTENT, f), "utf8"));
      // Paragraf/madde BAŞINDAKİ bold lead-in'e .lead sınıfı ver (blok yapılacak); cümle
      // ORTASINDAKİ bold (<p>metin <strong>) eşleşmez → inline kalır.
      const html = marked.parse(content).replace(/<(p|li)><strong>/g, '<$1><strong class="lead">');
      return { ...data, html };
    })
    .filter((p) => p.slug && p.title)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
);

for (const p of posts) {
  const canonical = `${SITE}/blog/${p.slug}/`;
  const ld = {
    "@context": "https://schema.org", "@type": "Article",
    headline: p.title, description: p.description, datePublished: p.date,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: "Benservis" },
    publisher: { "@type": "Organization", name: "Benservis" },
    mainEntityOfPage: canonical,
  };
  let head = `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
  if (Array.isArray(p.faq) && p.faq.length) {
    const faqLd = {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: p.faq.map((x) => ({
        "@type": "Question", name: x.q,
        acceptedAnswer: { "@type": "Answer", text: x.a },
      })),
    };
    head += `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`;
  }
  const body = `<article>${heroFor(p.category)}<p class="meta">${esc(p.category || "Rehber")} · ${esc(trDate(p.date))}</p><h1>${esc(p.title)}</h1>${p.html}${CTA}</article>`;
  const dir = path.join(OUT, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page({ title: `${p.title} | Benservis`, desc: p.description, canonical, head, body }));
}

const cards = posts
  .map((p) => `<a class="card" href="/blog/${p.slug}/"><div class="card-ic">${iconSvg(p.category, "")}</div><div class="card-body"><span class="cat">${esc(p.category || "Rehber")}</span><h2>${esc(p.title)}</h2><p>${esc(p.description)}</p></div></a>`)
  .join("");
fs.writeFileSync(
  path.join(OUT, "index.html"),
  page({
    title: "Benservis Bilgi Merkezi — cihaz arızaları ve tamir maliyetleri",
    desc: "Cihaz arızalarının nedenleri, kendin yapabileceğin kontroller ve güncel tahmini tamir fiyatları.",
    canonical: `${SITE}/blog/`,
    body: `<div class="bloghead"><h1>Bilgi Merkezi</h1><input id="blogSearch" class="blogsearch" type="search" autocomplete="off" placeholder="Yazılarda ara…" aria-label="Bilgi merkezinde ara"></div><p class="meta">Arızanı anla, maliyetini öğren — sonra çağır.</p><div class="bloglist">${cards}</div><p id="blogBos" class="blogbos" style="display:none">Aramanı karşılayan yazı yok — farklı bir kelime dene.</p><script>${SEARCH_JS}</script>`,
  })
);

const urls = [`${SITE}/`, `${SITE}/blog/`, ...posts.map((p) => `${SITE}/blog/${p.slug}/`)];
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`
);
fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`[build-blog] ${posts.length} yazı + /blog + sitemap üretildi.`);
