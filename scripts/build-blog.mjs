// scripts/build-blog.mjs
// content/blog/*.md -> dist/blog/<slug>/index.html (statik, SEO'lu) + /blog listesi + sitemap + robots
// `vite build`ten SONRA çalışır (package.json: "build": "vite build && node scripts/build-blog.mjs").
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { marked } from "marked";
import * as T from "../src/theme.js";
import { REHBERLER } from "../src/onarim-rehberleri.js";
// TEK KAYNAK (YK #32, 2 Ağu — Tolga düzeltmesi): /tamir/ kategorileri elle yazılmaz,
// uygulamanın resmî cihaz listesinden türetilir. Cihaz grubu eklenip çıktığında hub uyar.
import { CIHAZLAR } from "../src/constants.js";
// /kilavuzlar/ verisi de TEK KAYNAKTAN gelir (YK #34): marka→resmî kılavuz adresi
// `src/kullanim-kilavuzlari.js`'te, cihaz→marka eşleşmesi `CIHAZ_MARKALARI`'nda. Burada liste tutulmaz.
import { kilavuzKayitlari, KILAVUZ_INDEKS_ESIGI } from "../src/kullanim-kilavuzlari.js";

marked.setOptions({ gfm: true, breaks: false });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content", "blog");
const DIST = path.join(ROOT, "dist");
const OUT = path.join(DIST, "blog");
const SITE = "https://www.benservis.com";

const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Türkçe-duyarlı slug. Cihaz adlarında "/" ve Türkçe harf var:
//   "Fırın / Ocak / Aspiratör" → firin-ocak-aspirator · "Su Sebili / Arıtma" → su-sebili-aritma
// ⚠️ toLowerCase Türkçe "I/İ" tuzağına düşmesin diye harf eşlemesi ÖNCE yapılır.
const TR_HARF = { ı: "i", İ: "i", ş: "s", Ş: "s", ğ: "g", Ğ: "g", ü: "u", Ü: "u", ö: "o", Ö: "o", ç: "c", Ç: "c" };
const slugify = (s) =>
  String(s ?? "")
    .replace(/[ıİşŞğĞüÜöÖçÇ]/g, (c) => TR_HARF[c])
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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

// iFixit-tarzı rehber meta kutusu (zorluk · süre · maliyet · gerekenler) — frontmatter `guide` varsa.
function guideMeta(g) {
  if (!g) return "";
  const it = [];
  if (g.difficulty) it.push(`<span class="gm"><b>Zorluk</b>${esc(g.difficulty)}</span>`);
  if (g.time) it.push(`<span class="gm"><b>Süre</b>${esc(g.time)}</span>`);
  if (g.cost) it.push(`<span class="gm"><b>Maliyet</b>${esc(g.cost)}</span>`);
  if (Array.isArray(g.tools) && g.tools.length) it.push(`<span class="gm"><b>Gerekenler</b>${g.tools.map(esc).join(", ")}</span>`);
  return `<div class="guide-meta">${it.join("")}</div>`;
}

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
.guide-meta{display:flex;flex-wrap:wrap;gap:10px 24px;margin:0 0 26px;padding:14px 18px;background:#EFF4FF;border:1px solid ${T.HAIR};border-radius:14px}
.guide-meta .gm{display:flex;flex-direction:column;font-size:14.5px;color:${T.NAVY};font-weight:600}
.guide-meta .gm b{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:${T.BLUE};margin-bottom:3px}
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
.pwa-not{margin:14px 0 8px;padding:16px 18px;border-radius:14px;background:rgba(37,99,235,.05);border:1px solid ${T.HAIR}}
.pwa-not h3{font-family:'Fraunces',serif;font-weight:600;margin:0 0 7px;font-size:16px;color:${T.NAVY}}
.pwa-not p{margin:0 0 8px;font-size:14px;line-height:1.6;color:${T.MUTED}}
.pwa-not .tarif{margin:0;font-size:12.5px;line-height:1.5;color:${T.FAINT}}
@media (display-mode: standalone){.pwa-not{display:none}}
footer.site{border-top:1px solid ${T.HAIR};font-size:13px;padding:24px 0;text-align:center;color:${T.FAINT}}
footer.site .foot-social{display:flex;justify-content:center;gap:18px;margin-top:12px}
footer.site .foot-social a{color:${T.FAINT};display:inline-flex;transition:color .15s ease,transform .15s ease}
footer.site .foot-social a:hover{color:${T.BLUE};transform:translateY(-1px)}
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
/* /tamir/ kart alt satırı (zorluk · süre · adım · dil) — kullanıcı tıklamadan işin boyutunu görsün. */
.tamir-meta{display:block;margin-top:8px;color:${T.FAINT};font-size:12.5px;font-weight:600}
/* /tamir/ hub — cihaz kategorisi ızgarası (YK #32 format kararı, ① katman).
   Rehberi OLAN kategori <a> (tıklanır), olmayan <div class="yok"> (dürüst boş hâl, link yok). */
.katlar{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:26px 0 8px}
@media(min-width:640px){.katlar{grid-template-columns:repeat(3,1fr)}}
.katkart{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:18px;border:1px solid ${T.HAIR};border-radius:14px;background:${T.SURFACE};text-decoration:none;color:${T.NAVY}}
a.katkart{transition:border-color .15s,box-shadow .15s}
a.katkart:hover{border-color:${T.BLUE};box-shadow:0 10px 24px -20px rgba(30,41,59,.3)}
.katkart .kat-ic{width:44px;height:44px;border-radius:12px;background:#EFF4FF;color:${T.BLUE};display:flex;align-items:center;justify-content:center}
.katkart .kat-ic svg{width:25px;height:25px}
/* GRF kategori ikonu (PNG). Rehberi olmayan kartta gri + soluk: dürüst boş hâl görselde de bozulmasın. */
.katkart .kat-png{width:44px;height:44px;border-radius:12px;display:block;object-fit:cover}
.katkart.yok .kat-png{filter:grayscale(1);opacity:.55}
/* Rehber kartındaki kapak görseli (GRF) — ikon kutusunun yerine 3:2 küçük görsel. */
.card-ic.kapak{width:96px;height:64px;padding:0;border-radius:11px;overflow:hidden;background:${T.BG}}
/* contain (cover değil): kapaklar çizim — kırpmak çizimin yarısını götürür. */
.card-ic.kapak img{width:100%;height:100%;object-fit:contain;display:block}
/* Rehber içindeki adım görselleri (GRF, 1200x800) — metin akışını kesmeden, tam genişlik. */
.adim-gorsel{margin:14px 0 18px}
.adim-gorsel img{width:100%;height:auto;display:block;border:1px solid ${T.HAIR};border-radius:13px;background:${T.SURFACE}}
.katkart h2{font-family:'Fraunces',serif;font-weight:600;font-size:17px;margin:0;line-height:1.25}
.kat-rozet{font-size:12px;font-weight:700;padding:3px 10px;border-radius:999px;background:#EFF4FF;color:${T.BLUE}}
.katkart.yok{background:${T.BG}}
.katkart.yok .kat-ic{background:#F1F5F9;color:${T.FAINT}}
.katkart.yok .kat-rozet{background:#F1F5F9;color:${T.MUTED}}
.kat-not{margin:0;font-size:13px;line-height:1.5;color:${T.MUTED}}
.geri{display:inline-block;margin:0 0 14px;font-size:14px;font-weight:600;text-decoration:none}
.bloghead{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin:0 0 8px}
.bloghead h1{margin:0}
.blogsearch{flex:1 1 220px;max-width:360px;margin:0;padding:12px 15px;border:1px solid ${T.HAIR};border-radius:12px;font-size:15px;font-family:'Hanken Grotesk',system-ui,sans-serif;color:${T.NAVY};background:${T.SURFACE};outline:none}
.blogsearch:focus{border-color:${T.BLUE};box-shadow:0 0 0 3px rgba(37,99,235,.12)}
.blogsearch::placeholder{color:${T.FAINT}}
.blogbos{color:${T.MUTED};text-align:center;padding:26px 0;font-size:15px}
.blogcats{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 22px}
.blogcats .chip{font-family:'Hanken Grotesk',system-ui,sans-serif;font-size:13.5px;font-weight:600;color:${T.MUTED};background:${T.SURFACE};border:1px solid ${T.HAIR};border-radius:999px;padding:8px 15px;cursor:pointer;white-space:nowrap;transition:border-color .15s,color .15s,background .15s}
.blogcats .chip:hover{border-color:${T.BLUE};color:${T.BLUE}}
.blogcats .chip.on{background:${T.BLUE};border-color:${T.BLUE};color:#fff}
`;

const TEETH = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((a) => `<rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(${a} 60 51)"/>`)
  .join("");
const LOGO = `<svg width="30" height="30" viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" rx="28" fill="${T.BLUE}"/><path d="M60 22C42 22 28 36 28 53c0 22 32 45 32 45s32-23 32-45C92 36 78 22 60 22Z" fill="#fff"/><g fill="${T.BLUE}"><circle cx="60" cy="51" r="15"/>${TEETH}</g><circle cx="60" cy="51" r="6" fill="#fff"/></svg>`;
const WORDMARK = `<span class="brand-text"><span class="wm"><span class="wm-b">ben</span><span class="wm-s">servis</span></span><span class="brand-motto">Bil, gör, çağır.</span></span>`;

const CTA = `<a class="cta" href="/"><h3>🔧 Arızanı ve tahmini fiyatını saniyede öğren</h3><p>Cihazını ve belirtini seç → tahmini maliyeti gör → yanındaki en yüksek puanlı servisi tek dokunuşla ara.</p><p class="tag">Bil, gör, çağır. →</p></a>`;

// PWA duyurusunun blog ayağı (YK #26 adım 5/5). Metin birebir duyuru paketi bölüm 1'de.
// Pasif blok: ana CTA'nın altında, yazının akışını kesmez; uygulama ana ekrandan açıldıysa
// CSS `display-mode: standalone` sorgusuyla gizlenir (statik sayfa, JS gerekmiyor).
const PWA_NOT = `<section class="pwa-not"><h3>📱 Benservis'i telefonuna ekle</h3><p>Mağazadan indirmene gerek yok. Tarayıcı menüsünden &quot;Ana ekrana ekle&quot; dediğinde Benservis ikondan tam ekran açılır — ve internet çekmediğinde bile yakınındaki servislerin listesi elinde kalır.</p><p class="tarif">iPhone: Paylaş → Ana Ekrana Ekle · Android: sağ üstteki üç nokta → Uygulamayı yükle</p></section>`;

// Bilgi Merkezi listesi için client-side arama (statik, backend yok).
// Kart metnini (kategori+başlık+özet) Türkçe-duyarlı + aksan toleranslı normalize eder,
// çok kelimeli sorguda HEPSİ eşleşen kartları gösterir.
// Bilgi Merkezi listesi: kategori düğmeleri + serbest arama (ikisi BİRLİKTE filtreler).
const SEARCH_JS = `(function(){
  var norm=function(s){return (s||"").toLocaleLowerCase("tr").replace(/[ıİ]/g,"i").replace(/ş/g,"s").replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ö/g,"o").replace(/\\s+/g," ").trim();};
  var inp=document.getElementById("blogSearch"),bos=document.getElementById("blogBos");
  var cards=[].slice.call(document.querySelectorAll(".bloglist .card"));
  var chips=[].slice.call(document.querySelectorAll(".blogcats .chip"));
  var aktifCat="";
  function uygula(){
    var toks=inp?norm(inp.value).split(" ").filter(Boolean):[],n=0;
    cards.forEach(function(c){
      var catOk=!aktifCat||c.getAttribute("data-cat")===aktifCat;
      var hay=norm(c.textContent),aramaOk=toks.every(function(t){return hay.indexOf(t)!==-1;});
      var hit=catOk&&aramaOk;c.style.display=hit?"":"none";if(hit)n++;
    });
    if(bos)bos.style.display=(n===0)?"":"none";
  }
  if(inp)inp.addEventListener("input",uygula);
  chips.forEach(function(ch){ch.addEventListener("click",function(){
    aktifCat=ch.getAttribute("data-cat")||"";
    chips.forEach(function(x){x.classList.toggle("on",x===ch);});
    uygula();
  });});
})();`;

// `robots` = "noindex,follow" verilen sayfalar aramaya SOKULMAZ (ve sitemap'e de eklenmez).
// İçeriği hazır olmayan bir sayfayı indekslemek site kalitesini düşürür; içerik gelince kalkar.
function page({ title, desc, canonical, head = "", body, robots = "" }) {
  return `<!doctype html><html lang="tr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">${robots ? `\n<meta name="robots" content="${esc(robots)}">` : ""}
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="Benservis"><meta name="twitter:card" content="summary">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<!-- PWA (YK #26): blog aramadan gelen ilk temas — manifest + SW burada da olmalı, yoksa
     yalnız ana sayfaya girenler uygulamayı kurabilir. Push YOK. -->
<meta name="theme-color" content="${T.BLUE}">
<link rel="manifest" href="/manifest.json">
<meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Benservis">
<style>${CSS}</style>${head}
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
<script>if('serviceWorker' in navigator){addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}</script>
</head><body>
<header class="site"><div class="wrap"><a class="brand" href="/">${LOGO}${WORDMARK}</a><a class="nav" href="/blog/">Bilgi Merkezi</a></div></header>
<main><div class="wrap">${body}</div></main>
<footer class="site"><span class="wm-b">ben</span><span class="wm-s">servis</span> · Bil, gör, çağır. · <a href="/" style="color:${T.MUTED}">benservis.com</a> · <a href="/blog/hakkimizda/" style="color:${T.MUTED}">Hakkımızda</a><span class="foot-social"><a href="https://www.instagram.com/benservis.app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg></a><a href="https://www.tiktok.com/@benservis.app" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a><a href="https://www.linkedin.com/company/134824266/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a><a href="https://www.youtube.com/@benservisapp" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://medium.com/@benservis.app" target="_blank" rel="noopener noreferrer" aria-label="Medium"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg></a></span></footer>
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

// ── GRF adım görselleri (public/tamir-gorsel/<slug>/adim-0N.png) ──────────────────────────────
// Bağlama tek kaynaktan: yazının frontmatter'ındaki `images.steps` alt metinleri. Alt metin
// yoksa görsel BASILMAZ (erişilebilirlik: alt'sız çizim ekran okuyucuda gürültüdür).
// Görsel dosyası yoksa da basılmaz — kırık <img> çıkmaz.
const adimGorselUrl = (p, n) => {
  const alt = p.images?.steps?.[n - 1];
  if (!alt) return null;
  const rel = `tamir-gorsel/${p.slug}/adim-${String(n).padStart(2, "0")}.png`;
  return fs.existsSync(path.join(ROOT, "public", rel)) ? `/${rel}` : null;
};
// Markdown gövdesindeki numaralı adım paragrafları — marked bunları
// `<p><strong>1. …</strong> …</p>` olarak basıyor — ilgili görsel paragrafın ARDINA eklenir.
// width/height attribute'u CLS için zorunlu; lazy-loading ilk ekranı yavaşlatmasın diye açık.
function adimGorselleriEkle(p) {
  if (!p.images?.steps?.length) return p.html;
  // NOT: bold lead-in'e yukarıda `class="lead"` ekleniyor → <strong[^>]*> ile eşleşmeli.
  return p.html.replace(/<p><strong[^>]*>(\d+)\.[\s\S]*?<\/p>/g, (m, n) => {
    const url = adimGorselUrl(p, Number(n));
    if (!url) return m;
    const alt = p.images.steps[Number(n) - 1];
    return `${m}<figure class="adim-gorsel"><img src="${url}" width="1200" height="800" loading="lazy" decoding="async" alt="${esc(alt)}"></figure>`;
  });
}

for (const p of posts) {
  const canonical = `${SITE}/blog/${p.slug}/`;
  const ld = {
    "@context": "https://schema.org", "@type": "Article",
    headline: p.title, description: p.description,
    datePublished: p.date, dateModified: p.date,
    inLanguage: "tr-TR", image: `${SITE}/og.png`,
    author: { "@type": "Organization", name: "Benservis", url: `${SITE}/` },
    publisher: { "@type": "Organization", name: "Benservis", logo: { "@type": "ImageObject", url: `${SITE}/apple-touch-icon.png` } },
    mainEntityOfPage: canonical,
  };
  const crumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Bilgi Merkezi", item: `${SITE}/blog/` },
      { "@type": "ListItem", position: 3, name: p.title, item: canonical },
    ],
  };
  let head = `<script type="application/ld+json">${JSON.stringify(ld)}</script><script type="application/ld+json">${JSON.stringify(crumbLd)}</script>`;
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
  if (p.guide) {
    const howto = {
      "@context": "https://schema.org", "@type": "HowTo",
      name: p.title, description: p.description, inLanguage: "tr-TR",
      ...(p.guide.totalTime ? { totalTime: p.guide.totalTime } : {}),
      tool: (p.guide.tools || []).map((t) => ({ "@type": "HowToTool", name: t })),
      step: (p.steps || []).map((s, i) => ({
        "@type": "HowToStep", position: i + 1, name: s, text: s,
        ...(adimGorselUrl(p, i + 1) ? { image: `${SITE}${adimGorselUrl(p, i + 1)}` } : {}),
      })),
    };
    head += `<script type="application/ld+json">${JSON.stringify(howto)}</script>`;
  }
  const body = `<article>${heroFor(p.category)}<p class="meta">${esc(p.category || "Rehber")} · ${esc(trDate(p.date))}</p><h1>${esc(p.title)}</h1>${guideMeta(p.guide)}${adimGorselleriEkle(p)}${CTA}${PWA_NOT}</article>`;
  const dir = path.join(OUT, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page({ title: `${p.title} | Benservis`, desc: p.description, canonical, head, body }));
}

// ═══════════════════════════════════════════════════════════════════════════════
// ORTAK KATMAN — ÜÇ MERKEZ TEK DÜZEN (2 Ağu 2026, Tolga: "Bilgi Merkezi · Tamir
// Merkezi · Kullanım Kılavuzları — üçü de tıklayınca aynı gözüksün").
//
// /tamir/'de kurulan üç katmanlı düzen artık üç merkezin ORTAK kalıbı:
//   ① HUB           → cihaz kategorisi kart ızgarası + sayı rozeti
//   ② KATEGORİ      → o kategorinin meta'lı içerik kartları
//   ③ İÇERİK        → yazının/rehberin kendisi (/blog/<slug>/ — URL'e DOKUNULMAZ)
//
// Kategori listesi, slug mantığı ve GRF ikonları ÜÇÜNDE DE AYNI kaynaktan gelir;
// merkez başına ikinci bir liste ya da ikon seti tutulmaz.
// ═══════════════════════════════════════════════════════════════════════════════
const ldTag = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;
const crumb = (items) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: items.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.name, item: x.item })),
});

// ⚠️ KATEGORİ KAYNAĞI (YK #32, 2 Ağu — Tolga: "bizim ürün grupları olmalı, telefon vs olmamalı"):
// liste ELLE YAZILMAZ, `src/constants.js` → CIHAZLAR'dan türetilir. Uygulamanın cihaz grubu
// eklenip çıkarıldığında üç merkez de kendiliğinden uyar; ikinci bir liste tutulmaz.
// ⛔ iFixit'in kategori dünyası (telefon, tablet, konsol, araba, Mac) BİZE GİRMEZ.
const KATEGORILER = CIHAZLAR.map((ad) => ({ ad, slug: slugify(ad), kaynak: ad }));

// Slug çakışması sessizce iki kategoriyi aynı sayfaya basar → build'i durdur.
const slugSay = KATEGORILER.reduce((m, k) => ((m[k.slug] = (m[k.slug] || 0) + 1), m), {});
const cakisan = Object.entries(slugSay).filter(([, n]) => n > 1);
if (cakisan.length) {
  console.error(`[build-blog] ⛔ kategori slug çakışması: ${cakisan.map(([s]) => s).join(", ")}`);
  process.exit(1);
}
// CANLI URL KİLİDİ: bu iki adres yayında ve sitemap'te. Cihaz adı değişirse slug kayar ve
// indekslenmiş sayfa 404'e düşer → build burada bağırır, sessizce kırılmaz.
const KILITLI_SLUGLAR = ["camasir-makinesi", "klima"];
const kayanSlug = KILITLI_SLUGLAR.filter((s) => !KATEGORILER.some((k) => k.slug === s));
if (kayanSlug.length) {
  console.error(`[build-blog] ⛔ /tamir/ canlı URL kayboldu: ${kayanSlug.join(", ")} — CIHAZLAR değişti, yönlendirme gerekiyor.`);
  process.exit(1);
}

// GRF kategori ikonu (`public/tamir-gorsel/kategori/<slug>.png`) — ÜÇ MERKEZDE ORTAK.
// Merkez başına yeni ikon üretilmez. Dosya yoksa gömülü çizgi SVG'ye düşülür (kırık görsel yok).
const katIkon = (k) => {
  const rel = `tamir-gorsel/kategori/${k.slug}.png`;
  if (fs.existsSync(path.join(ROOT, "public", rel))) {
    return `<img class="kat-png" src="/${rel}" width="44" height="44" loading="lazy" decoding="async" alt="${esc(k.ad)} kategorisi ikonu">`;
  }
  return iconSvg(k.ad, "");
};

/**
 * ① HUB ızgarası — üç merkezin ORTAK kart bileşeni.
 * İçeriği OLAN kategori <a> (tıklanır), olmayan <div class="yok"> (dürüst boş hâl, link yok).
 * ⛔ "yakında" YAZILMAZ (YK #32): boşluk gerçek ve kalıcı olabilir; söz vermek yerine ne
 * olduğu açıkça yazılır + kullanıcı teşhis/servis CTA'sına yönlendirilir.
 * @param items [{ ad, slug, sayi, url, bosRozet, bosNot }]
 */
const katIzgarasi = (items, birim) =>
  items
    .map((k) =>
      k.sayi
        ? `<a class="katkart" href="${k.url}"><span class="kat-ic">${katIkon(k)}</span><h2>${esc(k.ad)}</h2><span class="kat-rozet">${k.sayi} ${birim}</span></a>`
        : `<div class="katkart yok"><span class="kat-ic">${katIkon(k)}</span><h2>${esc(k.ad)}</h2><span class="kat-rozet">${esc(k.bosRozet)}</span><p class="kat-not">${esc(k.bosNot)}</p></div>`
    )
    .join("");

// ── BLOG YAZISI → CİHAZ GRUBU EŞLEMESİ ────────────────────────────────────────
// Yazıların `category` frontmatter'ı serbest metin ("Kombi", "Çamaşır makinesi",
// "Sürdürülebilirlik"…). Hub 11 CIHAZLAR grubuyla çalıştığı için eşleme burada yapılır.
// ⛔ UYDURMA KATEGORİ AÇILMAZ: cihaz grubuna oturmayan yazılar (hakkımızda, mevzuat,
// enerji/fatura, sürdürülebilirlik…) TEK bir "Genel" toplayıcısına gider.
// ⛔ Yazının kendi `category` etiketi DEĞİŞMEZ — kartta ve yazı sayfasında aynen görünür;
// bu eşleme yalnız hub/kategori katmanını besler.
const GENEL = "Genel";
const BLOG_KAT_ESLES = {
  "camasir-makinesi": "Çamaşır Makinesi",
  "bulasik-makinesi": "Bulaşık Makinesi",
  kombi: "Kombi / Termosifon",
  termosifon: "Kombi / Termosifon",
  klima: "Klima",
  buzdolabi: "Buzdolabı",
  "firin-ocak": "Fırın / Ocak / Aspiratör",
  firin: "Fırın / Ocak / Aspiratör",
  ocak: "Fırın / Ocak / Aspiratör",
  aspirator: "Fırın / Ocak / Aspiratör",
  televizyon: "Televizyon / Monitör",
  monitor: "Televizyon / Monitör",
  supurge: "Süpürge",
  mikrodalga: "Mikrodalga / Air Fryer",
  "air-fryer": "Mikrodalga / Air Fryer",
  "su-sebili": "Su Sebili / Arıtma",
  aritma: "Su Sebili / Arıtma",
  bilgisayar: "Bilgisayar / Yazıcı",
  yazici: "Bilgisayar / Yazıcı",
};
const CIHAZ_SLUG = new Map(KATEGORILER.map((k) => [k.slug, k.ad]));
function blogGrubu(p) {
  const s = slugify(p.category || "");
  if (!s) return GENEL;
  if (CIHAZ_SLUG.has(s)) return CIHAZ_SLUG.get(s); // birebir cihaz adı
  return BLOG_KAT_ESLES[s] || GENEL;
}

const cards = posts
  .filter((p) => p.slug !== "hakkimizda")
  .map((p) => `<a class="card" data-cat="${esc(p.category || "Rehber")}" href="/blog/${p.slug}/"><div class="card-ic">${iconSvg(p.category, "")}</div><div class="card-body"><span class="cat">${esc(p.category || "Rehber")}</span><h2>${esc(p.title)}</h2><p>${esc(p.description)}</p></div></a>`)
  .join("");

// ── BİLGİ MERKEZİ: ② KATEGORİ SAYFALARI + ① HUB ───────────────────────────────
// ⛔ SEO KİLİDİ (bağlayıcı): 79 yazının URL'i `/blog/<slug>/` olarak AYNEN KALIR.
// Taşıma, yönlendirme, slug değişikliği YOK. Kategori katmanı AYRI bir ad alanına
// (`/blog/kategori/<slug>/`) açıldı — yazı slug'larıyla çakışmaz, mevcut adresleri
// gölgelemez. `/blog/` yalnız INDEKS katmanı olarak yeniden düzenlendi.
const blogPostlari = posts.filter((p) => p.slug !== "hakkimizda");
const blogKatVeri = [
  ...KATEGORILER.map((k) => ({ ...k, yazilar: blogPostlari.filter((p) => blogGrubu(p) === k.ad) })),
  // "Genel" toplayıcısı: cihaz grubuna oturmayan yazılar (mevzuat, enerji/fatura,
  // sürdürülebilirlik, kurumsal…). Cihaz değil → GRF ikonu yok, gömülü SVG'ye düşer.
  { ad: GENEL, slug: "genel", yazilar: blogPostlari.filter((p) => blogGrubu(p) === GENEL) },
];

// Yazı kartı (② katman) — /tamir/'deki zorluk·süre·adım·dil satırının blog karşılığı:
// konu tipi (yazının kendi kategori etiketi) · tarih.
const blogKarti = (p) =>
  `<a class="card" href="/blog/${p.slug}/"><div class="card-ic">${iconSvg(p.category, "")}</div><div class="card-body"><span class="cat">${esc(p.category || "Rehber")}</span><h2>${esc(p.title)}</h2><p>${esc(p.description)}</p><span class="tamir-meta">${esc(p.category || "Rehber")} · ${esc(trDate(p.date))}</span></div></a>`;

const BLOG_CTA = `<a class="cta" href="/"><h3>🔧 Cihazın şimdi mi bozuldu?</h3><p>Belirtini yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, yanındaki en yüksek puanlı servisi tek dokunuşla ara.</p><p class="tag">Bil, gör, çağır. →</p></a>`;

for (const k of blogKatVeri) {
  if (!k.yazilar.length) continue;
  const canonical = `${SITE}/blog/kategori/${k.slug}/`;
  const head =
    ldTag({
      "@context": "https://schema.org", "@type": "CollectionPage",
      name: `${k.ad} yazıları`, url: canonical, inLanguage: "tr-TR",
      isPartOf: { "@type": "CollectionPage", name: "Bilgi Merkezi", url: `${SITE}/blog/` },
      mainEntity: {
        "@type": "ItemList", numberOfItems: k.yazilar.length,
        itemListElement: k.yazilar.map((p, i) => ({
          "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE}/blog/${p.slug}/`,
        })),
      },
    }) +
    ldTag(crumb([
      { name: "Ana Sayfa", item: `${SITE}/` },
      { name: "Bilgi Merkezi", item: `${SITE}/blog/` },
      { name: k.ad, item: canonical },
    ]));
  fs.mkdirSync(path.join(OUT, "kategori", k.slug), { recursive: true });
  fs.writeFileSync(
    path.join(OUT, "kategori", k.slug, "index.html"),
    page({
      title: `${k.ad} — arıza nedenleri ve tamir maliyetleri | Benservis`,
      desc: `${k.ad} ile ilgili arıza nedenleri, kendin yapabileceğin kontroller ve güncel tahmini tamir fiyatları. ${k.yazilar.length} yazı.`,
      canonical,
      head,
      body: `<a class="geri" href="/blog/">← Bilgi Merkezi</a>${heroFor(k.ad)}<h1>${esc(k.ad)}</h1><p class="meta">${k.yazilar.length} yazı · arıza nedenleri, kontroller ve tahmini maliyetler</p><div class="bloglist">${k.yazilar.map(blogKarti).join("")}</div>${BLOG_CTA}`,
    })
  );
}

// ① HUB — /tamir/ ile AYNI ızgara. Boş kategoride "yakında" YOK, dürüst hâl + CTA.
const blogKatKartlari = katIzgarasi(
  blogKatVeri.map((k) => ({
    ...k, sayi: k.yazilar.length, url: `/blog/kategori/${k.slug}/`,
    bosRozet: "Yazı yok", bosNot: "Bu cihaz için henüz yazı yazmadık.",
  })),
  "yazı"
);
const blogluKat = blogKatVeri.filter((k) => k.yazilar.length);

fs.writeFileSync(
  path.join(OUT, "index.html"),
  page({
    title: "Benservis Bilgi Merkezi — cihaz arızaları ve tamir maliyetleri",
    desc: "Cihaz arızalarının nedenleri, kendin yapabileceğin kontroller ve güncel tahmini tamir fiyatları.",
    canonical: `${SITE}/blog/`,
    head:
      ldTag({
        "@context": "https://schema.org", "@type": "CollectionPage",
        name: "Bilgi Merkezi", url: `${SITE}/blog/`, inLanguage: "tr-TR",
        mainEntity: {
          "@type": "ItemList", numberOfItems: blogluKat.length,
          itemListElement: blogluKat.map((k, i) => ({
            "@type": "ListItem", position: i + 1, name: k.ad, url: `${SITE}/blog/kategori/${k.slug}/`,
          })),
        },
      }) +
      ldTag(crumb([
        { name: "Ana Sayfa", item: `${SITE}/` },
        { name: "Bilgi Merkezi", item: `${SITE}/blog/` },
      ])),
    // NOT: kategori ızgarasının ALTINDA tüm yazılar listesi BİLEREK duruyor. Hub'ı 12 karta
    // indirip 78 yazıyı bir tık derine itmek, /blog/'dan gelen iç linkleri koparır (79 sayfa
    // aramada gösterim alıyor). Izgara = gezinme katmanı, liste = tarama/arama katmanı.
    body: `<div class="bloghead"><h1>Bilgi Merkezi</h1></div><p class="meta">Arızanı anla, maliyetini öğren — sonra çağır.</p><h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:30px 0 0">Cihazını seç</h2><div class="katlar">${blogKatKartlari}</div><p class="kat-not">Cihaz grubuna girmeyen yazılar (mevzuat, enerji, sürdürülebilirlik…) <a href="/blog/kategori/genel/">Genel</a> başlığında toplanır.</p><div class="bloghead" style="margin-top:38px"><h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:0">Tüm yazılar</h2><input id="blogSearch" class="blogsearch" type="search" autocomplete="off" placeholder="Yazılarda ara…" aria-label="Bilgi merkezinde ara"></div><div class="bloglist">${cards}</div><p id="blogBos" class="blogbos" style="display:none">Aramanı karşılayan yazı yok — farklı bir kelime dene.</p><script>${SEARCH_JS}</script>`,
  })
);

// ───────────────────────────────────────────────────────────────────────────────
// /tamir/ — TAMİR MERKEZİ (YK Kararı #32, 2 Ağu 2026)
//
// Kendi Türkçe onarım rehberlerimizin derleme/indeks sayfası. ⛔ Hiçbir URL taşınmıyor:
// rehberler `/blog/<slug>/` adresinde kalır, bu sayfa yalnız onları toplar ve linkler
// (73 blog sayfası aramada gösterim alıyor — kırılma riski alınmaz).
//
// TEK KAYNAK: liste `src/onarim-rehberleri.js`'ten okunur (`kendi: true` kayıtlar) — teşhis
// ekranındaki rehber butonu da aynı dosyadan besleniyor. Yeni Türkçe rehber oraya eklendiğinde
// bu sayfaya KENDİLİĞİNDEN düşer, ayrıca elle liste tutulmaz.
//
// KAPSAM SINIRI (YK #31): yalnız ücretsiz/bakım seviyesi işler (temizlik, filtre, kontrol,
// ayar). Parça değişimi ve söküm rehberi YAZILMAZ — kullanıcı servise gider.
const kendiRehberler = [];
for (const [cihaz, kayitlar] of Object.entries(REHBERLER)) {
  for (const k of kayitlar) {
    if (!k.rehber?.kendi) continue;
    if (kendiRehberler.some((r) => r.url === k.rehber.url)) continue; // aynı rehber iki arızaya bağlıysa bir kez
    const slug = k.rehber.url.replace(/^\/blog\/|\/$/g, "");
    const post = posts.find((p) => p.slug === slug);
    kendiRehberler.push({ ...k.rehber, cihaz, slug, post });
  }
}
const eksikRehber = kendiRehberler.filter((r) => !r.post);
if (eksikRehber.length) {
  // Sessizce boş kart basmak yerine bağır: kayıt var ama blog yazısı yok = kırık link.
  console.error(`[build-blog] ⛔ /tamir/: ${eksikRehber.length} rehberin blog yazısı YOK → ${eksikRehber.map((r) => r.slug).join(", ")}`);
  process.exit(1);
}
// BİLGİ MİMARİSİ (YK #32 format kararı — üç katman):
//   ① /tamir/            → cihaz kategorisi ızgarası + rehber sayısı rozeti
//   ② /tamir/<kategori>/ → o cihazın rehber kartları (zorluk · süre · adım · dil)
//   ③ /blog/<slug>/      → rehberin kendisi; ⛔ URL TAŞINMADI, blog motoru basıyor
//                          (giriş + güvenlik uyarısı → alet kutusu → numaralı adımlar →
//                           sonuç kontrolü/SSS → "çözülmediyse servisi çağır" CTA'sı)
//
// ⛔ FORMAT TAKLİT EDİLİR, İÇERİK EDİLMEZ: düzen/akış serbest, iFixit metni-fotoğrafı-tasarımı
// kopyalanmadı (CC BY-NC-SA, ticari kullanım yasak). Sayfa benservis marka diliyle kuruldu.
//
// ⛔ /tamir/ altında iFixit kaydı LİSTELENMEZ — iki gerekçe: (a) o kayıtların çoğu parça
// değişimi/söküm, YK #31'in içerik sınırını çiğner; (b) sayfa İngilizce link tarlasına döner.
// iFixit yedeği yerinde duruyor: teşhis ekranında, yalnız bizde karşılığı olmayan arızalarda.
//
// NOT (2 Ağu): `KATEGORILER`, slug çakışma/kilit guard'ları ve `katIkon` artık YUKARIDAKİ
// ORTAK KATMAN'da — üç merkez aynı listeyi, aynı slug mantığını ve aynı GRF ikonlarını
// paylaşır. Burada ikinci bir kopya TUTULMAZ.

const TAMIR_CTA = `<a class="cta" href="/"><h3>🔧 Rehber sorunu çözmediyse</h3><p>Cihazını ve belirtini yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, yanındaki en yüksek puanlı servisi tek dokunuşla ara.</p><p class="tag">Bil, gör, çağır. →</p></a>`;

// Rehber kartı — kullanıcı tıklamadan işin boyutunu görsün (zorluk · süre · adım · dil).
// GRF kapak görseli varsa (public/tamir-gorsel/<slug>/kapak.png) ikon yerine o basılır.
const rehberGorsel = (r) => {
  const alt = r.post.images?.coverAlt;
  if (alt && fs.existsSync(path.join(ROOT, "public", "tamir-gorsel", r.slug, "kapak.png"))) {
    return `<div class="card-ic kapak"><img src="/tamir-gorsel/${r.slug}/kapak.png" width="96" height="64" loading="lazy" decoding="async" alt="${esc(alt)}"></div>`;
  }
  return `<div class="card-ic">${iconSvg(r.post.category, "")}</div>`;
};
const rehberKarti = (r) =>
  `<a class="card" href="${r.url}">${rehberGorsel(r)}<div class="card-body"><span class="cat">${esc(r.cihaz)}</span><h2>${esc(r.baslik)}</h2><p>${esc(r.post.description)}</p><span class="tamir-meta">${esc(r.zorluk)} · ${esc(r.sure)} · ${r.adim} adım · Türkçe</span></div></a>`;

// ② KATEGORİ SAYFALARI — yalnız rehberi OLAN kategori için basılır.
// Boş kategoriye ayrı sayfa açılmıyor: 5 boş sayfa "thin content" olur ve indeks kalitesini
// düşürür. Boşluk hub kartında dürüstçe yazılı (aşağıda), kullanıcı bilgisiz kalmıyor.
const katVeri = KATEGORILER.map((k) => ({
  ...k,
  rehberler: kendiRehberler.filter((r) => r.cihaz === k.kaynak),
}));

for (const k of katVeri) {
  if (!k.rehberler.length) continue;
  const canonical = `${SITE}/tamir/${k.slug}/`;
  const head =
    ldTag({
      "@context": "https://schema.org", "@type": "CollectionPage",
      name: `${k.ad} bakım rehberleri`, url: canonical, inLanguage: "tr-TR",
      isPartOf: { "@type": "CollectionPage", name: "Tamir Merkezi", url: `${SITE}/tamir/` },
      mainEntity: {
        "@type": "ItemList", numberOfItems: k.rehberler.length,
        itemListElement: k.rehberler.map((r, i) => ({
          "@type": "ListItem", position: i + 1, name: r.baslik, url: `${SITE}${r.url}`,
        })),
      },
    }) +
    ldTag(crumb([
      { name: "Ana Sayfa", item: `${SITE}/` },
      { name: "Tamir Merkezi", item: `${SITE}/tamir/` },
      { name: k.ad, item: canonical },
    ]));
  fs.mkdirSync(path.join(DIST, "tamir", k.slug), { recursive: true });
  fs.writeFileSync(
    path.join(DIST, "tamir", k.slug, "index.html"),
    page({
      title: `${k.ad} bakım rehberleri — kendin dene | Benservis`,
      desc: `${k.ad} için servisi çağırmadan önce deneyebileceğin ücretsiz bakım adımları. Türkçe ve adım adım; zorluk ile süre her rehberde yazılı.`,
      canonical,
      head,
      body: `<a class="geri" href="/tamir/">← Tamir Merkezi</a>${heroFor(k.ad)}<h1>${esc(k.ad)} bakım rehberleri</h1><p class="meta">${k.rehberler.length} rehber · hepsi ücretsiz, alet gerektirmeyen bakım seviyesi</p><div class="bloglist">${k.rehberler.map(rehberKarti).join("")}</div>${TAMIR_CTA}`,
    })
  );
}

// ① HUB — cihaz kategorisi ızgarası (ORTAK `katIzgarasi`; /blog/ ve /kilavuzlar/ ile aynı).
// Rehberi olmayan kategoride "yakında" YAZILMAZ (YK #32): boşluk gerçek ve kalıcı olabilir,
// söz vermek yerine dürüst hâli yazılır — "kendin-çöz adımı yok, servis işi" + servis CTA'sı.
const katKartlari = katIzgarasi(
  katVeri.map((k) => ({
    ...k, sayi: k.rehberler.length, url: `/tamir/${k.slug}/`,
    bosRozet: "Rehber yok", bosNot: "Kendin-çöz adımı yok, servis işi.",
  })),
  "rehber"
);
const rehberliKat = katVeri.filter((k) => k.rehberler.length);

fs.mkdirSync(path.join(DIST, "tamir"), { recursive: true });
fs.writeFileSync(
  path.join(DIST, "tamir", "index.html"),
  page({
    title: "Tamir Merkezi — kendin yapabileceğin bakım işleri | Benservis",
    desc: "Servisi çağırmadan önce deneyebileceğin ücretsiz bakım adımları: filtre temizliği, kontroller ve ayarlar. Cihazına göre Türkçe, adım adım.",
    canonical: `${SITE}/tamir/`,
    head:
      ldTag({
        "@context": "https://schema.org", "@type": "CollectionPage",
        name: "Tamir Merkezi", url: `${SITE}/tamir/`, inLanguage: "tr-TR",
        mainEntity: {
          "@type": "ItemList", numberOfItems: rehberliKat.length,
          itemListElement: rehberliKat.map((k, i) => ({
            "@type": "ListItem", position: i + 1, name: `${k.ad} bakım rehberleri`, url: `${SITE}/tamir/${k.slug}/`,
          })),
        },
      }) +
      ldTag(crumb([
        { name: "Ana Sayfa", item: `${SITE}/` },
        { name: "Tamir Merkezi", item: `${SITE}/tamir/` },
      ])),
    body: `<div class="bloghead"><h1>Tamir Merkezi</h1></div><p class="meta">Servisi çağırmadan önce dene — çoğu arıza basit bir bakımla düzeliyor.</p><blockquote><p><strong>Buradaki rehberler ücretsiz bakım seviyesindedir:</strong> temizlik, filtre, kontrol ve ayar. Parça değişimi ya da cihazın içini açmak gereken işleri bilerek anlatmıyoruz — o işler ölçüm, yetki ve garanti sorumluluğu ister; onlarda doğru adım servisi çağırmaktır.</p></blockquote><h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:30px 0 0">Cihazını seç</h2><div class="katlar">${katKartlari}</div><p class="kat-not">Rozetinde <strong>&quot;Rehber yok&quot;</strong> yazan cihazlarda kendin güvenle yapabileceğin bir bakım adımı yok — o arızalar ölçüm, yetki ve garanti sorumluluğu ister. <a href="/">Yakınındaki servisi bul →</a></p>${TAMIR_CTA}`,
  })
);

// ───────────────────────────────────────────────────────────────────────────────
// /kilavuzlar/ — KULLANIM KILAVUZLARI (YK Kararı #32, 2 Ağu 2026 — Tolga düzeltmesi ②)
//
// Ana sayfa ızgarasının 4. butonu buraya bakıyor ("Hakkımızda" ızgaradan çıktı, footer'da durdu).
// 2 Ağu 2026 (YK #34 Faz 4): iskelet DOLDU — marka bazlı resmî kılavuz adresleri girildi.
//
// ⛔ TELİF (bağlayıcı, YK #32): üreticinin kullanım kılavuzu PDF'i BARINDIRILMAZ, kopyalanmaz,
//    yeniden yayımlanmaz. Yalnız üreticinin RESMÎ kılavuz sayfasına link verilir (link telif
//    meselesi değildir). Kendi katkımız: Türkçe özet satırı + model eşleştirme + arama kolaylığı.
//
// ⚠️ noindex OTOMATİK: kayıt sayısı `KILAVUZ_INDEKS_ESIGI`nin (30) altındaysa hem hub hem
//    kategori sayfaları noindex kalır ve sitemap'e girmez (ince içerik indeksi aşağı çeker);
//    eşiği geçince ikisi de kendiliğinden açılır. Elle bayrak çevrilmez.
//
// MİMARİ (2 Ağu — ÜÇ MERKEZ TEK DÜZEN): katmanlar /tamir/ ve /blog/ ile AYNI, ve hub artık
// MARKA değil CİHAZ ızgarası (üç merkezde aynı 11 grup, aynı slug, aynı GRF ikonları):
//   ① /kilavuzlar/          → cihaz kategorisi ızgarası + kılavuz sayısı rozeti
//   ② /kilavuzlar/<cihaz>/  → o cihazın marka/model kartları (yalnız kayıt varsa basılır)
//   ③ üreticinin resmî kılavuz sayfası (DIŞ LİNK; bizde barındırılan dosya YOK)
// `KILAVUZLAR` dolduğunda ② katmanı ve rozetler kendiliğinden gelir — kod değişmez.
const KILAVUZLAR = kilavuzKayitlari(); // { cihaz, marka, url, ozet }
// Eşiği geçtiyse merkez indekse açılır; altındaysa üç katman da noindex + sitemap dışı.
const kilavuzIndeksli = KILAVUZLAR.length >= KILAVUZ_INDEKS_ESIGI;
const kilavuzRobots = kilavuzIndeksli ? undefined : "noindex,follow";

const kilavuzKatVeri = KATEGORILER.map((k) => ({
  ...k, kayitlar: KILAVUZLAR.filter((m) => m.cihaz === k.kaynak),
}));

// Telif + dürüstlük notu — her hâlde ve HER KATMANDA basılır (bağlayıcı kural, YK #32/#34).
const KILAVUZ_NOT = `<p class="kat-not"><strong>Kılavuz dosyasını burada barındırmıyoruz.</strong> Kullanım kılavuzunun telif hakkı üreticiye aittir; PDF'i kopyalayıp yeniden yayımlamak yerine seni doğrudan üreticinin resmî sayfasına göndeririz — böylece her zaman güncel ve doğru sürümü görürsün.</p><p class="kat-not">Cihazın bozulduysa kılavuzu beklemene gerek yok: <a href="/">belirtini yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren</a> ya da <a href="/tamir/">Tamir Merkezi'ndeki ücretsiz bakım adımlarına</a> bak.</p>`;

// Dış link kartı — bizde dosya YOK, kullanıcı üreticinin sayfasına gidiyor. Bunu kart üstünde
// açıkça yazıyoruz (alan adı görünür) ki tıklamadan önce nereye gittiğini bilsin.
const kilavuzAlanAdi = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return "resmî sayfa"; } };
const kilavuzKarti = (k, m) =>
  `<a class="card" href="${esc(m.url)}" target="_blank" rel="noopener noreferrer nofollow"><div class="card-ic">${iconSvg(k.ad, "")}</div><div class="card-body"><span class="cat">${esc(m.marka)}</span><h2>${esc(m.marka)} ${esc(k.ad.toLocaleLowerCase("tr"))} kullanım kılavuzu</h2><p>${esc(m.ozet || "")}</p><span class="tamir-meta">${esc(kilavuzAlanAdi(m.url))} · üreticinin resmî sayfası ↗</span></div></a>`;

// ② KATEGORİ SAYFALARI — yalnız kaydı OLAN cihaz için (boş sayfa = thin content, açılmaz).
const kilavuzluKat = kilavuzKatVeri.filter((k) => k.kayitlar.length);
for (const k of kilavuzluKat) {
  fs.mkdirSync(path.join(DIST, "kilavuzlar", k.slug), { recursive: true });
  fs.writeFileSync(
    path.join(DIST, "kilavuzlar", k.slug, "index.html"),
    page({
      title: `${k.ad} kullanım kılavuzları — üreticinin resmî sayfası | Benservis`,
      desc: `${k.ad} markalarının resmî kullanım kılavuzu sayfaları, Türkçe özetleriyle. Kılavuzu üreticinin kendi sitesinde açarsın; burada PDF barındırmıyoruz.`,
      canonical: `${SITE}/kilavuzlar/${k.slug}/`,
      robots: kilavuzRobots,
      body: `<a class="geri" href="/kilavuzlar/">← Kullanım Kılavuzları</a>${heroFor(k.ad)}<h1>${esc(k.ad)} kullanım kılavuzları</h1><p class="meta">${k.kayitlar.length} marka · her link üreticinin kendi sayfasına gider</p>${KILAVUZ_NOT}<div class="bloglist">${k.kayitlar
        .map((m) => kilavuzKarti(k, m))
        .join("")}</div>${CTA}`,
    })
  );
}

// ① HUB — /tamir/ ve /blog/ ile AYNI ızgara. Boş kategoride "yakında" YOK: ne olduğu açıkça
// yazılır ve kullanıcı teşhis/bakım yoluna gönderilir.
const kilavuzKartlari = katIzgarasi(
  kilavuzKatVeri.map((k) => ({
    ...k, sayi: k.kayitlar.length, url: `/kilavuzlar/${k.slug}/`,
    bosRozet: "Kılavuz yok", bosNot: "Bu cihaz için henüz kılavuz linki toplamadık.",
  })),
  "kılavuz"
);

// Hub açılış bloğu — sayfa doluysa ne yaptığımızı, boşsa boş olduğunu DÜRÜSTÇE yazar
// ("yakında" yok). Marka sayısı listeden hesaplanır, elle güncellenmez.
const kilavuzMarkaSayisi = new Set(KILAVUZLAR.map((m) => m.marka)).size;
const KILAVUZ_GIRIS = KILAVUZLAR.length
  ? `<blockquote><p><strong>${kilavuzMarkaSayisi} markanın resmî kullanım kılavuzu sayfası burada toplandı.</strong> Cihaz grubunu seç, markanı bul, üreticinin kendi sayfasında modelini arat. Her adres yayına girmeden önce tek tek denendi; çalışmayan link listeye alınmadı.</p></blockquote>`
  : `<blockquote><p><strong>Bu sayfa henüz kılavuz linki içermiyor.</strong> Doldurmaya başladığımızda her cihaz grubunun altında markaların <strong>resmî kullanım kılavuzu sayfalarına</strong> giden linkler olacak — üreticinin kendi sitesindeki kılavuza, Türkçe tek satırlık &quot;bu kılavuzda ne var&quot; özetiyle.</p></blockquote>`;

fs.mkdirSync(path.join(DIST, "kilavuzlar"), { recursive: true });
fs.writeFileSync(
  path.join(DIST, "kilavuzlar", "index.html"),
  page({
    title: "Kullanım Kılavuzları — üreticinin resmî kılavuzuna git | Benservis",
    desc: "Beyaz eşya ve elektronik cihazların kullanım kılavuzları: üreticinin resmî kılavuz sayfasına giden doğrulanmış linkler ve Türkçe özetler. PDF barındırmıyoruz, üreticiye yönlendiriyoruz.",
    canonical: `${SITE}/kilavuzlar/`,
    robots: kilavuzRobots,
    body: `<a class="geri" href="/">← Ana sayfa</a><div class="bloghead"><h1>Kullanım Kılavuzları</h1></div><p class="meta">Cihazının kılavuzunu üreticinin kendi sayfasında bul.</p>${KILAVUZ_GIRIS}<h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:30px 0 0">Cihazını seç</h2><div class="katlar">${kilavuzKartlari}</div>${KILAVUZ_NOT}${CTA}`,
  })
);

// lastmod = frontmatter `updated` varsa onu, yoksa `date`'i kullan (Vercel checkout dosya
// mtime'ını sıfırladığı için frontmatter sabit/güvenilir kaynaktır). Date objesi gelirse ISO'ya çevir.
const isoDate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));
const postLastmod = (p) => isoDate(p.updated || p.date);
const newest = posts.map(postLastmod).filter(Boolean).sort().reverse()[0];
const urlEntries = [
  { loc: `${SITE}/`, lastmod: newest },
  { loc: `${SITE}/blog/`, lastmod: newest },
  { loc: `${SITE}/tamir/`, lastmod: newest },
  // Kategori sayfaları — yalnız rehberi olanlar basıldığı için hepsi gerçek içerikli.
  ...rehberliKat.map((k) => ({ loc: `${SITE}/tamir/${k.slug}/`, lastmod: newest })),
  // Bilgi Merkezi kategori katmanı — yalnız yazısı olanlar (boş kategoriye sayfa basılmıyor).
  ...blogluKat.map((k) => ({ loc: `${SITE}/blog/kategori/${k.slug}/`, lastmod: newest })),
  // Kullanım Kılavuzları — sitemap'e YALNIZ eşik (30 kayıt) aşıldığında girer; altındayken
  // sayfa noindex olduğu için sitemap'e koymak çelişkili sinyal olurdu.
  ...(kilavuzIndeksli
    ? [
        { loc: `${SITE}/kilavuzlar/`, lastmod: newest },
        ...kilavuzluKat.map((k) => ({ loc: `${SITE}/kilavuzlar/${k.slug}/`, lastmod: newest })),
      ]
    : []),
  { loc: `${SITE}/ikinci-el`, lastmod: newest },
  ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}/`, lastmod: postLastmod(p) })),
];
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries
    .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`
);
fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`[build-blog] ${posts.length} yazı + /blog + sitemap üretildi.`);
