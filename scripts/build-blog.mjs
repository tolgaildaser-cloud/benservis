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

const CSS = `
${T.FONT_IMPORT}
*{box-sizing:border-box}
body{margin:0;background:${T.BG};color:${T.NAVY};font-family:'Hanken Grotesk',system-ui,sans-serif;line-height:1.7}
.wrap{max-width:720px;margin:0 auto;padding:0 24px}
a{color:${T.BLUE}}
header.site{background:${T.SURFACE};border-bottom:1px solid ${T.HAIR}}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:${T.NAVY};font-family:'Fraunces',serif;font-weight:700;font-size:20px;letter-spacing:-.01em}
.nav{color:${T.MUTED};text-decoration:none;font-weight:600;font-size:14px}
main{padding:40px 0 64px}
h1{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(28px,5vw,40px);line-height:1.12;letter-spacing:-.02em;margin:0 0 8px}
.meta{color:${T.FAINT};font-size:14px;margin:0 0 28px}
article h2{font-family:'Fraunces',serif;font-weight:600;font-size:24px;margin:36px 0 12px;letter-spacing:-.01em}
article p{margin:0 0 16px}
article ul,article ol{margin:0 0 16px;padding-left:22px}
article li{margin:6px 0}
strong{font-weight:600}
table{width:100%;border-collapse:collapse;margin:18px 0;font-size:15px}
th,td{border:1px solid ${T.HAIR};padding:10px 12px;text-align:left}
th{background:${T.BG}}
blockquote{margin:18px 0;padding:12px 16px;background:#EFF4FF;border-left:3px solid ${T.BLUE};color:${T.NAVY}}
blockquote p{margin:0}
.cta{margin:36px 0 8px;padding:24px;border-radius:16px;background:${T.BLUE};color:#fff}
.cta h3{font-family:'Fraunces',serif;font-weight:600;margin:0 0 8px;color:#fff;font-size:20px}
.cta p{margin:0 0 4px;opacity:.96}
.cta .tag{font-weight:600;opacity:1}
footer.site{border-top:1px solid ${T.HAIR};color:${T.FAINT};font-size:13px;padding:24px 0;text-align:center}
.bloglist{display:grid;gap:16px;margin:28px 0}
.card{display:block;text-decoration:none;color:${T.NAVY};background:${T.SURFACE};border:1px solid ${T.HAIR};border-radius:14px;padding:20px 22px;transition:border-color .15s}
.card:hover{border-color:${T.BLUE}}
.card .cat{color:${T.BLUE};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em}
.card h2{font-family:'Fraunces',serif;font-weight:600;font-size:20px;margin:6px 0 6px}
.card p{margin:0;color:${T.MUTED};font-size:14.5px}
`;

const TEETH = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((a) => `<rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(${a} 60 51)"/>`)
  .join("");
const LOGO = `<svg width="30" height="30" viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" rx="28" fill="${T.BLUE}"/><path d="M60 22C42 22 28 36 28 53c0 22 32 45 32 45s32-23 32-45C92 36 78 22 60 22Z" fill="#fff"/><g fill="${T.BLUE}"><circle cx="60" cy="51" r="15"/>${TEETH}</g><circle cx="60" cy="51" r="6" fill="#fff"/></svg>`;

const CTA = `<div class="cta"><h3>🔧 Arızanı ve tahmini fiyatını saniyede öğren</h3><p>Cihazını ve belirtini seç → tahmini maliyeti gör → yanındaki en yüksek puanlı servisi tek dokunuşla ara.</p><p class="tag">Bil, gör, çağır.</p></div>`;

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
</head><body>
<header class="site"><div class="wrap"><a class="brand" href="/">${LOGO}<span>Benservis</span></a><a class="nav" href="/blog/">Rehber</a></div></header>
<main><div class="wrap">${body}</div></main>
<footer class="site">Benservis · Bil, gör, çağır. · <a href="/" style="color:${T.MUTED}">benservis.com</a></footer>
</body></html>`;
}

if (!fs.existsSync(CONTENT)) {
  console.log("[build-blog] content/blog yok, atlanıyor.");
  process.exit(0);
}
fs.mkdirSync(OUT, { recursive: true });

const posts = fs
  .readdirSync(CONTENT)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const { data, content } = matter(fs.readFileSync(path.join(CONTENT, f), "utf8"));
    return { ...data, html: marked.parse(content) };
  })
  .filter((p) => p.slug && p.title)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

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
  const body = `<article><p class="meta">${esc(p.category || "Rehber")} · ${esc(trDate(p.date))}</p><h1>${esc(p.title)}</h1>${p.html}${CTA}</article>`;
  const dir = path.join(OUT, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page({ title: `${p.title} | Benservis`, desc: p.description, canonical, head, body }));
}

const cards = posts
  .map((p) => `<a class="card" href="/blog/${p.slug}/"><span class="cat">${esc(p.category || "Rehber")}</span><h2>${esc(p.title)}</h2><p>${esc(p.description)}</p></a>`)
  .join("");
fs.writeFileSync(
  path.join(OUT, "index.html"),
  page({
    title: "Benservis Rehber — cihaz arızaları ve tamir maliyetleri",
    desc: "Cihaz arızalarının nedenleri, kendin yapabileceğin kontroller ve güncel tahmini tamir fiyatları.",
    canonical: `${SITE}/blog/`,
    body: `<h1>Rehber</h1><p class="meta">Arızanı anla, maliyetini öğren — sonra çağır.</p><div class="bloglist">${cards}</div>`,
  })
);

const urls = [`${SITE}/`, `${SITE}/blog/`, ...posts.map((p) => `${SITE}/blog/${p.slug}/`)];
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`
);
fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`[build-blog] ${posts.length} yazı + /blog + sitemap üretildi.`);
