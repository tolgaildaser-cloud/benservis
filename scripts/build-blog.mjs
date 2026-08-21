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
import { CIHAZLAR, cihazSlug } from "../src/constants.js";
// /kilavuzlar/ verisi de TEK KAYNAKTAN gelir (YK #34): marka→resmî kılavuz adresi
// `src/kullanim-kilavuzlari.js`'te, cihaz→marka eşleşmesi `CIHAZ_MARKALARI`'nda. Burada liste tutulmaz.
import { kilavuzKayitlari, KILAVUZ_INDEKS_ESIGI } from "../src/kullanim-kilavuzlari.js";
// ① HATA KODU / BELİRTİ KATMANI (YK #35, 3 Ağu) — kayıtlar tek kaynakta, burada liste tutulmaz.
import { hataKoduKayitlari, TIP_BASLIK, TIP_ETIKET, HATA_KODU_SIRA } from "../src/hata-kodlari.js";

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
  // Sürdürülebilirlik KONU kategorisi (cihaz değil) — yaprak. Aynı 24x24 çizgi ailesi.
  surdurulebilirlik: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12"/>',
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
  if (c.includes("sürdürülebilir") || c.includes("surdurulebilir")) return "surdurulebilirlik";
  return "default";
}
const iconSvg = (cat, cls) =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[iconKey(cat)]}</svg>`;
// `varyant` YALNIZ Sürdürülebilirlik için "yesil" gelir (karar defteri renk kuralı:
// yeşil sürdürülebilirlik temasına ait, başka yerde aksan olarak kullanılmaz).
// `foto` verilirse (kategori sayfalarında `merkezFotosu(k.slug)`) mavi+ikon bant yerine
// GERÇEK FOTOĞRAF basılır — Tolga, 19 Ağu: "vektörel görsel kalmasın". Kategori adı
// fotoğrafın üstünde, alta inen koyu perdeyle okunur kalır. Fotoğraf yoksa eski bant aynen.
// KAVRAM KARTI SLUG'LARI — "vektörel kalmasın" kuralının BİLİNÇLİ İSTİSNASI (Tolga, 19 Ağu:
// *"sürdürülebilirlik ile ilgili logo tadında bir şey olsun"* + *"'genel' olan yerlere de
// benservis logoyu koyalım"*). Sonraki koşular bunları fotoğrafa çevirmesin.
const KAVRAM_SLUG = new Set(["genel", "surdurulebilirlik"]);

// `foto` verilirse mavi+ikon bant yerine görsel basılır. İKİ AYRI DİL var:
//   · FOTOĞRAF (cihaz kareleri) → `cover` + alta inen koyu perde, ad perdenin üstünde.
//   · AMBLEM (genel · sürdürülebilirlik) → `contain`, PERDE YOK, açık zemin.
//     Gerekçe GRF'nin devir notunda ölçülü: bant 188 px ve `cover`, amblem 900×570 →
//     amblem ortasından kırpılıyor, wordmark kayboluyor, %78 perde beyaz zemini
//     çamur griye çeviriyordu. Amblem bir MARKA KİLİDİ, kırpılamaz.
const heroFor = (cat, varyant = "", foto = null, kavram = false) => {
  if (!foto) return `<div class="hero${varyant ? " " + varyant : ""}">${iconSvg(cat, "hero-icon")}<span class="hero-cat">${esc(cat || "Rehber")}</span></div>`;
  // KAVRAM KARTI (genel · sürdürülebilirlik) → `.hero.kapak`: contain, PERDE YOK, açık zemin.
  // 20 Ağu'da bu iki kare amblemden "elde telefon fotoğrafı"na döndü; bant 188 px + cover +
  // %78 perde ile DİKEY telefonu ortadan dilimliyordu (GRF simüle etti). Kategori adı
  // zaten hemen altındaki <h1>'de, o yüzden bu dalda etiket basılmıyor.
  if (kavram) return `<div class="hero kapak"><img src="${foto}" width="900" height="570" loading="lazy" decoding="async" alt=""></div>`;
  // CİHAZ kategorisi → `.hero.foto`: cover + alta inen perde, ad perdenin üstünde.
  return `<div class="hero foto"><img src="${foto}" width="900" height="570" loading="lazy" decoding="async" alt=""><span class="hero-cat">${esc(cat || "Rehber")}</span></div>`;
};

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

// YK #69 koşu 1/cila ② — font <head>'de: bağlantı ısınması + tek stylesheet linki.
// Ağırlık seti SPA'nın `index.html`'indekiyle BİREBİR aynı olmalı — ikisi ayrışırsa
// blogdan uygulamaya geçen kullanıcı aynı fontu ikinci kez indirir (önbellek ıskalar).
const FONT_LINK =
  `<link rel="preconnect" href="https://fonts.googleapis.com">` +
  `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
  `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap">`;

// YK #78 — GA4 çerezsiz "consent mode". SPA'nın `index.html`'indeki blokla BİREBİR aynı
// olmalı; ayrışırsa ölçüm iki ayrı davranışa böler.
// ⚠️ Blogun kapsam DIŞI bırakılması ölçümü anlamsız kılardı: #78'in gerekçesi "sosyal→site
// zinciri ilk kez ölçülür olsun" ve o zincirin varış noktası tam olarak bu sayfalar
// (19 Ağu Shorts'u 390 izlenme aldı, hedefi bir blog yazısıydı). Karar metni yalnız
// `index.html` diyor çünkü SPA kabuğu kastediliyordu; kapsam yorumu backlog'a yazıldı.
// SIRA ŞART: consent default satırı gtag.js'ten ÖNCE çalışır, yoksa `_ga` çerezi yazılır.
const GA4 =
  `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
  `gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});` +
  `gtag('js',new Date());gtag('config','G-72D2B9S05R');</script>` +
  `<script async src="https://www.googletagmanager.com/gtag/js?id=G-72D2B9S05R"></script>`;

// YK #69 koşu 1/cila ② — font @import'u CSS'ten çıkıp <head>'e taşındı (bkz. FONT_LINK).
// CSS içindeki @import, stil dosyası okunana kadar beklediği için font isteğini bir tur
// geciktiriyordu; <head>'deki preconnect + <link> ilk taramada başlar.
const CSS = `
*{box-sizing:border-box}
/* YK #69 koşu 1/cila ⑤ — TEK ETKİLEŞİM DİLİ. Şablonda 7 :hover kuralı vardı ama yalnız
   1 geçiş ve 1 focus kuralı: hover'lar ani sıçrıyordu, klavyeyle gezen kullanıcı nerede
   olduğunu göremiyordu. Redesign DEĞİL — mevcut hover renkleri aynen kalıyor, yalnız
   ortak bir süre ve görünür bir odak halkası ekleniyor.
   :where() özgüllüğü 0'a düşürür → var olan hiçbir kuralı ezmez. */
:where(a,button,.cta,.kopru-btn,.card,.chip,.katkart,.nav-kart){transition:background-color .15s ease,border-color .15s ease,color .15s ease,box-shadow .15s ease,transform .15s ease}
:where(a,button,[tabindex]):focus-visible{outline:2px solid ${T.BLUE};outline-offset:2px;border-radius:8px}
/* Hareket azaltma tercihi işletim sisteminden geliyorsa geçişler susar (WCAG 2.3.3). */
@media (prefers-reduced-motion:reduce){*{transition-duration:.01ms!important;animation-duration:.01ms!important}}
body{margin:0;background:${T.BG};color:${T.NAVY};font-family:'Hanken Grotesk',system-ui,sans-serif;line-height:1.7}
.wrap{max-width:720px;margin:0 auto;padding:0 20px}
/* Hub sayfalari (Bilgi/Tamir Merkezi, Kilavuzlar) GENIS kolon kullanir: 4 sutunlu
   cihaz izgarasi 720 px'e sigmiyor. YAZI sayfalari 720'de kalir — orada satir
   uzunlugu okunabilirligi belirliyor, genisletmek zarar verirdi. */
body.genis .wrap{max-width:1080px}
a{color:${T.BLUE}}
/* ÜST BAR — ana sayfanın hero üst barıyla aynı dil (Tolga 18 Ağu): koyu lacivert
   zemin, beyaz logo, menü linkleri ve sağ uçta tek dolgulu düğme. Önceki hâl beyaz
   zeminde tek "Bilgi Merkezi" linkiydi; ana sayfadan gelen kullanıcı için başka bir
   siteye girmiş gibi duruyordu. */
header.site{background:${T.NAVY};border-bottom:none}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:64px;padding-top:10px;padding-bottom:10px;flex-wrap:wrap}
header.site .brand .wm-b{color:#fff}
header.site .brand .wm-s{color:#93C5FD}
header.site .brand .brand-motto{color:#CBD5E1}
.sitenav{display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.sitenav a{color:#DBEAFE;font-size:13.5px;font-weight:600;text-decoration:none;padding:8px 12px;border-radius:999px;white-space:nowrap}
@media(hover:hover){.sitenav a:hover{background:rgba(255,255,255,.10)}}
/* Sağ uçtaki tek eylem. Beyaz zemin seçildi: lacivert barda mavi dolgu ayrışmıyor. */
.sitenav a.navcta{display:inline-flex;align-items:center;gap:7px;background:#fff;color:${T.NAVY};padding:9px 16px;margin-left:6px;box-shadow:0 2px 10px -4px rgba(15,23,42,.45)}
@media(hover:hover){.sitenav a.navcta:hover{background:#F1F5F9}}
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
/* YK #65 kapak varyantı: gerçek görsel basılınca mavi zemin ve dekoratif daireler kalkar.
   contain (cover değil): kapaklar çizim — kırpmak çizimin yarısını götürür (kart kuralıyla aynı). */
/* Kategori bandı FOTOĞRAFLI hâli (19 Ağu): Kling insansız karesi bandı doldurur,
   kategori adı sol-altta, alta inen koyu perdenin üstünde okunur. Daire süsleri kapalı. */
.hero.foto{background:${T.NAVY};padding:0 0 16px 20px;align-items:flex-start;justify-content:flex-end;gap:0}
.hero.foto img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hero.foto::before{display:none}
.hero.foto::after{content:"";position:absolute;inset:0;right:auto;top:auto;width:100%;height:100%;border-radius:0;background:linear-gradient(180deg,rgba(15,23,42,0) 45%,rgba(15,23,42,.78) 100%)}
.hero.foto .hero-cat{z-index:2;text-shadow:0 1px 3px rgba(15,23,42,.5)}
.hero.kapak{height:auto;aspect-ratio:3/2;background:#EFF4FF;padding:0}
.hero.kapak::before,.hero.kapak::after{display:none}
.hero.kapak img{width:100%;height:100%;object-fit:contain;display:block}
h1{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(28px,5vw,40px);line-height:1.12;letter-spacing:-.02em;margin:0 0 8px}
.meta{color:${T.FAINT};font-size:14px;margin:0 0 28px}
/* ——— YAZI BAŞI (18 Ağu tasarım) ———
   Kapak görseli ARKA PLAN, üstünde koyu perde, içinde başlık + meta + iki kapı.
   Amaç: okuyucu ilk ekranda hem ne okuduğunu hem iki çıkışını görsün.
   wrap'in içinde ama kenar boşluğunu iptal eder: şerit tam genişlik görünür. */
/* ⚠️ NEGATİF MARJ .wrap YAN BOŞLUĞUYLA BİREBİR OLMAK ZORUNDA (21 Ağu 2026, FE düzeltmesi).
   Blok kenara taşsın diye negatif marj kullanılıyor; .wrap padding'i 20px ama marj
   -24px'ti → 390px'de blok her iki yandan 4px dışarı çıkıyordu (ölçüldü: x=-4,
   right=394, documentElement.scrollWidth 394 > 390). Sayfada overflow-x:hidden de
   olmadığı için bu, 171 blog yazısının TAMAMINDA mobilde gerçek bir yatay kaydırmaydı.
   -20px ile blok tam kenara oturur, taşma sıfırlanır. .wrap padding'i değişirse burası da
   değişmeli — iki değer birbirine bağlıdır. */
.yazibasi{position:relative;margin:0 -20px 30px;padding:0;overflow:hidden;border-radius:0;background:${T.NAVY};isolation:isolate}
@media(min-width:760px){.yazibasi{margin:0 0 34px;border-radius:22px}}
.yazibasi .yb-foto{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
/* Perde: üstte yoğun (metin orada), altta hafif. Kapaklar açık zeminli çizimler
   olduğu için beyaz metnin okunması PERDEYE bağlı — opaklık ölçümle seçildi. */
.yazibasi .yb-perde{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(15,23,42,.86) 0%,rgba(15,23,42,.78) 55%,rgba(15,23,42,.88) 100%)}
.yazibasi.yb-fotosuz .yb-perde{background:linear-gradient(180deg,#1E293B 0%,#172033 100%)}
.yazibasi .yb-ic{position:relative;z-index:2;padding:clamp(26px,4vw,44px) clamp(22px,3.4vw,40px)}
.yazibasi .yb-ust{margin:0 0 10px;font-size:13px;font-weight:600;color:#93C5FD;letter-spacing:.02em}
/* Kategori artık link. Görsel dil AYNEN korunur (aynı mavi, aynı ağırlık) — yalnız
   altı noktalı çizgiyle "tıklanır" işaretlenir, üstüne gelince tam alt çizgi + beyaz.
   Dokunma hedefi 44px'e ulaşsın diye dikey padding + negatif margin (satır yüksekliği
   büyümesin); mobilde parmakla vurulabilir olması şart. */
.yazibasi .yb-ust .yb-kat{color:inherit;text-decoration:underline;text-decoration-style:dotted;text-underline-offset:3px;padding:12px 2px;margin:-12px 0;display:inline-block}
.yazibasi .yb-ust .yb-kat:hover,.yazibasi .yb-ust .yb-kat:focus-visible{color:#fff;text-decoration-style:solid}
.yazibasi h1{margin:0 0 16px;color:#fff;font-size:clamp(26px,3.6vw,40px);line-height:1.15}
/* Meta rozetleri koyu zeminde: mavi kutu yerine cam yüzey. */
.yazibasi .guide-meta{margin:0 0 20px;background:rgba(255,255,255,.09);border-color:rgba(255,255,255,.16)}
.yazibasi .guide-meta .gm{color:#fff}
.yazibasi .guide-meta .gm b{color:#93C5FD}
.yazibasi .kopru{margin:0}
/* İki kapı koyu zeminde: servis DOLU beyaz (ana eylem — Tolga'nın güç metriği),
   teşhis ÇERÇEVELİ. Açık zemindeki mavi/beyaz düzeninin koyu karşılığı. */
/* Köprü sarmalayıcısı açık zeminde mavi kutu; koyu başlıkta o kutu FAZLA —
   kendi zeminini ve sol çizgisini bırakır, yalnız iki düğme kalır. */
.yazibasi .kopru{background:transparent;border:0;padding:0}
.yazibasi .kopru-servis{background:#fff;color:${T.NAVY};border-color:#fff}
/* important ZORUNLU: açık zemin kuralı (.kopru-teshis) zaten important ile
   yazılmış, onu ancak aynı silahla ezebiliyoruz. Ölçümle görüldü: düğme koyu
   zeminde beyaz dolu kalıyordu, iki kapı birbirinden ayrışmıyordu. */
.yazibasi .kopru-teshis{background:transparent !important;color:#fff !important;border-color:rgba(255,255,255,.55)}
/* Kapak illüstrasyonları çizgi ağırlıklı; hafif bulanıklık metni öne çıkarır,
   fotoğraf gelirse de aynı kural doku olarak çalışır. */
.yazibasi .yb-foto{filter:blur(1.5px) saturate(.9)}
.guide-meta{display:flex;flex-wrap:wrap;gap:10px 24px;margin:0 0 26px;padding:14px 18px;background:#EFF4FF;border:1px solid ${T.HAIR};border-radius:14px}
.guide-meta .gm{display:flex;flex-direction:column;font-size:14.5px;color:${T.NAVY};font-weight:600}
.guide-meta .gm b{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:${T.BLUE};margin-bottom:3px}
/* Bölüm ritmi: h2 öncesi boşluk 36→48, üstüne ince ayraç. Uzun sayfa tek blok
   yerine okunabilir bölümlere ayrılıyor (metin kısaltılmadan). */
article h2{font-family:'Fraunces',serif;font-weight:600;font-size:25px;margin:48px 0 14px;padding-top:8px;letter-spacing:-.01em;border-top:1px solid ${T.HAIR}}
article h2:first-of-type{border-top:none;padding-top:0;margin-top:34px}
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
/* YK #67 ① — ilk ekran bağlam satırı: yazının akışını kesmeyen, tek satırlık köprü.
   YK #68 ② (Tolga, 15 Ağu): tüm satır tek <a> idi ve gövde metniyle aynı renkteydi →
   "linki buton şeklinde olmalı, bu şekilde belli değil". Artık BAĞLAM METİN, EYLEM BUTON:
   cümle düz metin kalır (bağlam #67'nin asıl kazanımıydı, silinmez), tıklanacak yer
   sayfa sonundaki mavi .cta kartıyla AYNI dilde dolgulu bir butona çıkar (aynı mavi,
   aynı hover, aynı 1px kalkma). Ölçüm işareti data-kopru=ilk-ekran butonda kalır.
   (Bu blok bir template literal içinde — yorumda backtick KULLANMA, literali kapatır.) */
.kopru{margin:18px 0 24px;padding:14px 16px;background:#EFF4FF;border:1px solid ${T.HAIR};border-left:3px solid ${T.BLUE};border-radius:12px}
.kopru p{margin:0 0 11px;color:${T.NAVY}}
/* Kapanış çağrısı (19 Ağu, sadeleştirme): eski koca mavi kartın yerini alan blok.
   Kutu dili yazı içindeki köprüyle aynı; tek fark üstündeki nefes payı. */
.kopru-kapanis{margin:36px 0 8px}
.kopru-kapanis p{margin:0 0 12px}
.kopru-cift{display:flex;gap:10px;flex-wrap:wrap}
/* Iki kapi BIREBIR ayni yukseklikte olmali: teshis butonunda 2px kenarlik var,
   servis butonunda yoktu → olculdu, 43px vs 47px (4px fark). Servise de aynı
   kalinlikta SEFFAF kenarlik verilerek kutu modeli esitlendi. */
.kopru-cift .kopru-btn{flex:1 1 240px;text-align:center;border:2px solid transparent}
/* Tolga, 17 Ağu: "servis bul mavi olsun, diğeri beyaz" — ağırlık servise verildi.
   Güç metriği Servis Bul olduğu için baskın buton da o olmalı; teşhis kapısı
   ikincil (beyaz + mavi kenarlık) ama aynı boyutta, yani kapı olmaktan çıkmıyor. */
.kopru-teshis{background:#fff !important;color:${T.BLUE} !important;border:2px solid ${T.BLUE}}
.kopru-btn{display:inline-block;padding:12px 20px;border-radius:12px;background:${T.BLUE};
  color:#fff;text-decoration:none;font-weight:700;font-size:15.5px;line-height:1.25;
  box-shadow:0 1px 3px rgba(37,99,235,.28);transition:background .15s,transform .15s}
.kopru-btn:hover{background:#1D4ED8;transform:translateY(-1px)}
/* YK #67 ③ — mobil sticky bant. position:fixed → akış dışında, DÜZEN KAYMAZ (CLS 0);
   metin-only → LCP adayı değil. Yalnız dar ekranda; masaüstünde son kart yeterli. */
.sticky-kopru,.sticky-bosluk{display:none}
@media(max-width:640px){
  .sticky-kopru{display:block;position:fixed;left:0;right:0;bottom:0;z-index:40;
    background:${T.BLUE};color:#fff;text-align:center;text-decoration:none;
    font-weight:700;font-size:16px;padding:15px 16px calc(15px + env(safe-area-inset-bottom));
    box-shadow:0 -2px 12px rgba(15,23,42,.16)}
  /* Bant altbilgiyi örtmesin. Boşluk BODY'ye değil, bandın kendi kardeşine verilir:
     bu CSS altbilgi/liste/hub sayfalarında da ortak — body'ye verilseydi bandın
     BULUNMADIĞI sayfalarda da mobilde ölü boşluk kalırdı. Ara parça HTML'de baştan
     var (sonradan eklenmiyor) → düzen kaymaz. */
  .sticky-bosluk{display:block;height:calc(64px + env(safe-area-inset-bottom))}
}
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
/* ① HATA KODU KATMANI (YK #35) — AYRI BİLEŞEN AÇILMADI: satırlar aynı .card ızgarasını
   kullanır (YK #32: ortak kalıptan bas). Tek fark, kendi rehberimiz olmayan ve doğrudan
   servis yoluna çıkan kartın nötr ikon kutusu — kullanıcı tıklamadan nereye gittiğini görsün. */
.card.servis .card-ic{background:#F1F5F9;color:${T.MUTED}}
.katbaslik{font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:34px 0 0}
/* Yazı sayfasındaki ① katman geri-linki (YK #35 pilot): başlığın hemen altında, metnin
   akışını kesmeyen tek satır. */
.tamir-geri{margin:0 0 22px;padding:11px 14px;border-left:3px solid ${T.BLUE};background:#EFF4FF;border-radius:0 10px 10px 0;font-size:14.5px;line-height:1.55;color:${T.NAVY}}
/* /tamir/ hub — cihaz kategorisi ızgarası (YK #32 format kararı, ① katman).
   Rehberi OLAN kategori <a> (tıklanır), olmayan <div class="yok"> (dürüst boş hâl, link yok). */
/* Thumb ölçüsü ana sayfayla BİREBİR (Tolga, 19 Ağu): kolon .wrap üzerinden
   eşitlendi (maxWidth 1080 + 20 px yan boşluk = 1040 iç genişlik, ana sayfayla
   aynı), sütun sayısı ve 16 px boşluk da aynı → kart ve thumb her kademede
   birebir aynı piksele oturuyor. Ayrı bir max-width'e gerek kalmadı. */
.katlar{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:26px 0 8px;grid-auto-rows:1fr}
@media(min-width:640px){.katlar{grid-template-columns:repeat(3,1fr)}}
@media(min-width:960px){.katlar{grid-template-columns:repeat(4,1fr)}}
/* KONU ızgarası (Genel + Sürdürülebilirlik) — cihaz ızgarasından ayrı bölüm.
   375px'te TEK sütun: "Sürdürülebilirlik" bölünemeyen 17 harflik bir kelime, iki sütunda
   min-content genişliği 1fr'i eziyor ve kartlar 136/177px gibi eğri kalıyordu. Tek sütunda
   ikisi de tam genişlik → eşit. ≥640px'te cihaz ızgarasıyla AYNI 3 sütuna oturur. */
.katlar.konu{grid-template-columns:1fr}
@media(min-width:640px){.katlar.konu{grid-template-columns:repeat(3,1fr)}}
/* KART — ana sayfadaki cihaz kartlarıyla AYNI dil (Tolga 18 Ağu: "ana sayfa ile
   benzer stile gelmeli"): üstte 16:10 görsel alanı kenardan kenara, altta ad +
   rozet. Önceki hâl 44px'lik köşe ikonuyla bir liste satırı gibi duruyordu. */
.katkart{display:flex;flex-direction:column;align-items:stretch;gap:0;padding:0;overflow:hidden;border:1px solid ${T.HAIR};border-radius:14px;background:#fff;text-decoration:none;color:${T.NAVY};height:100%}
.katkart .kat-gorsel{display:block;width:100%;aspect-ratio:16/10;overflow:hidden;background:${T.SURFACE}}
.katkart .kat-gorsel img{display:block;width:100%;height:100%;object-fit:cover}
/* Fotoğrafı olmayan cihaz: aynı alanda ortalanmış büyük ikon (ana sayfada da böyle). */
.katkart .kat-gorsel-ikon{display:flex;align-items:center;justify-content:center;background:#EFF4FF}
.katkart .kat-gorsel-ikon svg{width:34%;height:auto;color:${T.BLUE}}
.katkart .kat-gorsel-ikon .kat-png{width:34%;height:auto;border-radius:0}
/* Gövde kalan alanı DOLDURUR (flex:1) ve metni dikeyde ortalar — ana sayfadaki
   kart adının birebir karşılığı. Olmadığında: 375 px'te "Fırın / Ocak / Aspiratör"
   üç satıra çıkıyor, grid satırı ona eşitliyor, kısa adlı kartların altında 23 px
   ölü alan kalıyordu. flex:1 ile o alan gövdenin içine geçiyor, kart eşit ve dolu. */
.katkart .kat-govde{display:flex;flex:1;flex-direction:column;justify-content:center;align-items:flex-start;gap:8px;padding:14px 16px 16px}
/* Hover hareketi ana sayfayla aynı: kart yükselir, gölge derinleşir, görsel büyür. */
@media(hover:hover) and (pointer:fine){
  a.katkart{transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
  a.katkart .kat-gorsel img,a.katkart .kat-gorsel svg{transition:transform .3s ease}
  a.katkart:hover{transform:translateY(-2px);border-color:#C7D7F5;box-shadow:0 10px 24px -10px rgba(30,41,59,.28)}
  a.katkart:hover .kat-gorsel img,a.katkart:hover .kat-gorsel svg{transform:scale(1.06)}
}
a.katkart:focus-visible{transform:translateY(-2px);border-color:#C7D7F5}
@media(prefers-reduced-motion:reduce){
  a.katkart,a.katkart .kat-gorsel img,a.katkart .kat-gorsel svg{transition:none}
  a.katkart:hover,a.katkart:focus-visible{transform:none}
  a.katkart:hover .kat-gorsel img,a.katkart:hover .kat-gorsel svg{transform:none}
}
/* GRF kategori ikonu (PNG). Rehberi olmayan kartta gri + soluk: dürüst boş hâl görselde de bozulmasın. */
.katkart .kat-png{width:44px;height:44px;border-radius:12px;display:block;object-fit:cover}
.katkart.yok .kat-png{filter:grayscale(1);opacity:.55}
.katkart.yok .kat-gorsel img{filter:grayscale(1);opacity:.5}
/* Rehber kartındaki kapak görseli (GRF) — ikon kutusunun yerine 3:2 küçük görsel. */
.card-ic.kapak{width:96px;height:64px;padding:0;border-radius:11px;overflow:hidden;background:${T.BG}}
/* contain (cover değil): kapaklar çizim — kırpmak çizimin yarısını götürür. */
.card-ic.kapak img{width:100%;height:100%;object-fit:contain;display:block}
/* Rehber içindeki adım görselleri (GRF, 1200x800) — metin akışını kesmeden, tam genişlik. */
/* ——— YK #69 / Tolga 16 Ağu: "albenisi yüksek, basit ve bol görselli — açıklamalı
   görselli" → ADIM GÖRSELİ SUNUMU. Görsel artık metnin arasına sıkışmış bir ek değil,
   adımın kendisi: sol kenarda mavi bağ çizgisi onu ait olduğu maddeye bağlar (IKEA
   kılavuzu hissi), etrafındaki nefes iki katına çıkar.
   ⛔ Metin katmanına dokunulmadı — bu yalnız sunum. */
/* 18 Ağu tasarım: adım görseli artık kenarında ince çizgi olan bir ek değil,
   adımın KENDİSİ. Kart yüzeyine oturur, görsel kenardan kenara basar.
   Tolga'nın ilkesi: "albenisi yüksek, basit, bol görselli — açıklamalı görselli". */
.adim-gorsel{margin:16px 0 30px;padding:0;border:1px solid ${T.HAIR};border-radius:16px;overflow:hidden;background:${T.SURFACE};box-shadow:0 1px 2px rgba(30,41,59,.04)}
/* Kontrol listesi görseli (14 Ağu kuralı) — <li> İÇİNDE durur, madde metninin altında.
   Adım görselinden dar üst boşluk: görsel ait olduğu maddeye yapışık okunsun. */
/* Kontrol görseli maddenin İÇİNDE (<li>) duruyor; nefesi maddeye yapışık kalsın
   ama görsel ezilmesin diye alt boşluk açıldı. */
/* Adım görseliyle AYNI dil (18 Ağu): ince sol çizgi yerine kart yüzeyi.
   Farkı ölçek: bu görsel bir liste maddesinin İÇİNDE durur, o yüzden daha
   küçük köşe ve daha dar nefes — maddeye ait olduğu okunsun. */
.kontrol-gorsel{margin:11px 0 18px;padding:0;border:1px solid ${T.HAIR};border-radius:13px;overflow:hidden;background:${T.SURFACE}}
.kontrol-gorsel img{width:100%;height:auto;display:block;border:0;border-radius:0;background:#fff}
.adim-gorsel img{width:100%;height:auto;display:block;border:0;border-radius:0;background:#fff}
/* Adım başlıkları (h3 "1. Makineyi durdur") görselle tek blok gibi okunsun:
   üstünde nefes, altında yapışıklık. */
article h3{margin:34px 0 8px;font-size:clamp(18px,2vw,21px);line-height:1.3}
/* Ad alanına SABİT YÜKSEKLİK VERİLMEDİ: rozet varken gerekiyordu, rozet kalkınca
   gövdedeki flex:1 + justify-content:center aynı işi görüyor (kalan alanı gövde
   yutuyor, kartlar eşit kalıyor). min-height bırakılsaydı tek satırlık adlarda
   21 px fazladan yükseklik yapıyordu — ölçüldü: 1280 px'te kart 228, ana sayfa 207. */
.katkart .kat-govde h2{font-family:'Fraunces',serif;font-weight:600;font-size:17px;margin:0;line-height:1.25}
.katkart.yok{background:${T.BG}}
.katkart.yok .kat-ic{background:#F1F5F9;color:${T.FAINT}}
/* YEŞİL AKSAN — karar defteri kuralı: yeşil YALNIZ sürdürülebilirlik temasına ait.
   Tek kullanım yeri: Sürdürülebilirlik konu kartı + kendi kategori sayfasının hero'su.
   Marka kiti sınırı: güven yeşili #16A34A (CLAUDE.md) ve onun açık tonu; yeni renk YOK.
   Beyaz üstü küçük metinde #15803D kullanılıyor — #16A34A o boyutta kontrast bırakmıyor. */
a.katkart.yesil:hover{border-color:#16A34A;box-shadow:0 10px 24px -20px rgba(22,101,52,.35)}
.katkart.yesil .kat-ic{background:#ECFDF5;color:#15803D}
.hero.yesil{background:#16A34A}
.kat-not{margin:0;font-size:13px;line-height:1.5;color:${T.MUTED}}
.geri{display:inline-block;margin:0 0 14px;font-size:14px;font-weight:600;text-decoration:none}
.bloghead{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin:0 0 8px}
/* Hub başlığı ana sayfadaki bölüm başlıklarıyla aynı ölçekte (clamp 22→34). */
.bloghead h1{margin:0;font-size:clamp(28px,4.4vw,42px);line-height:1.1;letter-spacing:-.02em}
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

// /kilavuzlar/ kapanışı — 20 Ağu'da SADELEŞTİ. Bu blok sitedeki EN ESKİ kalıntıydı:
// 19 Ağu'da blog/tamir/yazı kapanışları çift kapıya geçerken kılavuzlar atlanmıştı,
// 12 sayfa (hub + 11 kategori) hâlâ koca mavi kartla ve TEK kapıyla duruyordu.
// Artık diğerleriyle birebir aynı: aynı başlık, aynı iki buton, aynı ölçüm etiketleri.
// `cihazSlug` verilirse cihaz ön-seçili gider; hub'da boş kalır.
const KILAVUZ_CTA = (cihazSlug, kaynak) =>
  `<div class="kopru kopru-kapanis"><p><strong>${KAPANIS_BASLIK}</strong></p>` +
  `<div class="kopru-cift">${SERVIS_BTN(cihazSlug, kaynak)}` +
  `<a class="kopru-btn kopru-teshis" href="${kapanisHref(cihazSlug, kaynak, false)}" data-kopru="teshis-kapanis">Tahmini maliyeti ücretsiz öğren →</a>` +
  `</div></div>`;

// ═══════════════════════════════════════════════════════════════════════════════
// YK #67 — TAMİR MERKEZİ → TEŞHİS KÖPRÜSÜ (kurul 4-0, 15 Ağu 2026)
// Teşhis: CTA vardı ama JENERİKti (`/`) ve yalnız yazı SONUNDAydı. Hata kodu
// sayfasının okuma deseni "cevabı bul, çık" — çoğu kullanıcı sona inmiyor; inen de
// cihazını/belirtisini zaten söylemişken sıfırdan forma düşüyordu.
// Çözüm: sayfa konusunu URL'e taşı → `/?cihaz=<slug>&ariza=<slug>&k=blog-<slug>`.
//   `cihaz`/`ariza` → App.jsx formu ön-doldurur (ONSECIM)
//   `k`             → api/teshis/log.js iç kaynağı yazar (kaynak=blog-ici, kampanya=<slug>)
// ⛔ KIRMA YOK: eşleşme türetilemeyen yazıda link jenerik `/`ye düşer, yalnız `k` kalır —
//    ölçüm her yazıda çalışır, ön-doldurma yalnız güvenli eşleşmede.
// Slug sözlüğü App.jsx ile AYNI olmak zorunda (orada CIHAZLAR'dan üretiliyor); burada
// blog kategorisi → cihaz slug'ı elle eşlenir çünkü blog kategorileri daha kaba
// ("Kombi" → "Kombi / Termosifon"). Kategorisi eşleşmeyen (Genel · Sürdürülebilirlik ·
// Kurumsal) yazı bağlam TAŞIMAZ — o yazıların tek bir cihazı yoktur, uydurmak yanlış olur.
const KOPRU_CIHAZ = {
  "Buzdolabı": "buzdolabi",
  "Çamaşır makinesi": "camasir-makinesi",
  "Bulaşık makinesi": "bulasik-makinesi",
  "Klima": "klima",
  "Kombi": "kombi-termosifon",
  "Fırın / Ocak": "firin-ocak-aspirator",
  "Televizyon": "televizyon-monitor",
  "Süpürge": "supurge",
  "Mikrodalga": "mikrodalga-air-fryer",
};
// Yazı slug'ı → o cihazın HIZLI BELİRTİ listesindeki karşılık (App.jsx `BELIRTILER`).
// ⛔ Bulanık eşleştirme YAPILMADI, tablo elle kürasyon: "kombi-yanmiyor" listedeki hiçbir
// belirtiye tam oturmuyor (en yakını "petekler ısınmıyor" ama aynı şey değil) → yazılmadı,
// o yazı cihaz ön-seçimiyle yetinir. Yanlış ön-doldurma, ön-doldurmamaktan kötüdür.
// YK #68 ③ (15 Ağu) — TABLO EKSİKTİ: bağlam taşıyan 56 yazının 24'ünde `ariza` hiç
// üretilmiyordu, o yazılarda belirti boş açılıyordu. Eksiğin sebebi kürasyon değil,
// SÖZLÜK DARLIĞIydı: konuların çoğu (kokuyor · kurutmuyor · buzlanma · hata kodu)
// hızlı-belirti çiplerinde yok. App.jsx tarafında `EK_BELIRTI` ile sözlük genişletildi
// (çip eklenmedi, yalnız deep-link çözümü), aşağıdaki eşleşmeler onunla açıldı.
// KÜRASYON İLKESİ DEĞİŞMEDİ — yanlış ön-doldurma, ön-doldurmamaktan kötüdür:
// tek bir belirtisi olmayan yazılar (… -tamiri-kac-para · buzdolabi-kac-derece-olmali ·
// klima-gazi-dolumu-fiyat · kombi-yazin-kapatilir-mi · camasir-kac-derecede-yikanir …)
// bilerek DIŞARIDA; "kombi-yanmiyor" ve "klima-filtresi-temizleme" de tek bir belirtiye
// oturmadığı için (filtre yazısı hem "soğutmuyor" hem "koku" olabilir) yalnız cihaz taşır.
const KOPRU_ARIZA = {
  "bulasik-makinesi-su-atmiyor": "su-tahliye-etmiyor",
  "bulasik-makinesi-su-almiyor": "su-almiyor",
  "bulasik-makinesi-temiz-yikamiyor": "temiz-yikamiyor",
  "bulasik-makinesi-hata-kodlari": "hata-kodu-veriyor",
  "bulasik-makinesi-kurutmuyor": "kurutmuyor",
  "bulasik-makinesi-kokuyor": "kotu-kokuyor",
  "bosch-bulasik-makinesi-hata-kodlari": "hata-kodu-veriyor",
  "bosch-bulasik-makinesi-e15-hatasi": "hata-kodu-veriyor",
  "bosch-bulasik-makinesi-e22-hatasi": "hata-kodu-veriyor",
  "bosch-bulasik-makinesi-e24-hatasi": "hata-kodu-veriyor",
  "camasir-makinesi-su-almiyor": "su-almiyor",
  "camasir-makinesi-su-atmiyor": "su-bosaltmiyor",
  "camasir-makinesi-ses-titresim": "asiri-titresim-ses",
  "camasir-makinesi-tahliye-filtresi-temizleme": "su-bosaltmiyor", // Tolga'nın açtığı yazı
  "camasir-makinesi-kokuyor": "kotu-kokuyor",
  "camasir-makinesi-hata-kodlari": "hata-kodu-veriyor",
  "arcelik-camasir-makinesi-hata-kodlari": "hata-kodu-veriyor",
  "bosch-camasir-makinesi-hata-kodlari": "hata-kodu-veriyor",
  "lg-camasir-makinesi-hata-kodlari": "hata-kodu-veriyor",
  "samsung-camasir-makinesi-hata-kodlari": "hata-kodu-veriyor",
  "camasir-makinesi-isik-yanip-sonuyor": "hata-kodu-veriyor", // yazının kendi konusu: yanıp sönme = hata kodu
  "buzdolabi-sogutmuyor-nedenleri": "sogutmuyor",
  "buzdolabi-buzlanma-yapiyor": "buzlanma-yapiyor",
  "no-frost-buzdolabi-alt-bolme-sogutmuyor": "sogutmuyor",
  "buzdolabi-ses-yapiyor": "cok-ses-yapiyor",
  "buzdolabi-altinda-su-birikiyor": "su-akitiyor",
  "klima-sogutmuyor-nedenleri": "sogutmuyor",
  "klima-su-damlatiyor": "su-damlatiyor",
  "klima-koku-yapiyor": "koku-yapiyor",
  "klima-calismiyor": "hic-calismiyor",
  "kombi-sicak-su-vermiyor": "sicak-su-gelmiyor",
  "kombi-basinc-dusuyor": "basinc-dusuyor",
  "kombi-ariza-kodlari": "ariza-kodu-veriyor",
  "baymak-kombi-ariza-kodlari": "ariza-kodu-veriyor",
  "vaillant-kombi-ariza-kodlari": "ariza-kodu-veriyor",
  "demirdokum-kombi-ariza-kodlari": "ariza-kodu-veriyor",
  "firin-isinmiyor": "isinmiyor",
  "ocak-atesleme-yapmiyor": "ocak-gozu-yanmiyor",
  "ocak-atesleme-bujisi-degisimi": "ocak-gozu-yanmiyor",
  "tv-acilmiyor": "acilmiyor",
  "televizyon-goruntu-gelmiyor": "goruntu-yok",
  "supurge-cekmiyor": "cekis-zayif",
  "mikrodalga-isitmiyor": "isitmiyor-pisirmiyor",
};
function kopruHref(p) {
  const q = new URLSearchParams();
  const cihaz = KOPRU_CIHAZ[p.category];
  if (cihaz) {
    q.set("cihaz", cihaz);
    const ariza = KOPRU_ARIZA[p.slug];
    if (ariza) q.set("ariza", ariza);
  }
  q.set("k", `blog-${p.slug}`); // ölçüm HER yazıda, bağlam bulunamasa da
  return `/?${q}`;
}
// ——— ÇİFT KAPI ② — SERVİS BUL (YK notu, Tolga 16 Ağu: "bu sayfaya geleni ya servis
// bul'a direkt yönlendirmeliyiz ya da tahmini maliyet sayfasına; bize güç getirecek
// kısım servis bul'dan insanların servislere ulaşması").
// Aynı bağlamı taşır ama `servis=1` ile TEŞHİSİ ATLAR: kullanıcı doğrudan yakınındaki
// puanlı servis listesine düşer. Ölçüm aynı `k=blog-<slug>` borusundan akar, böylece
// 31 Ağu okumasında "hangi yazı servise ulaştırdı" ayrı ayrı sayılabilir.
function servisHref(p) {
  const q = new URLSearchParams();
  const cihaz = KOPRU_CIHAZ[p.category];
  if (cihaz) q.set("cihaz", cihaz);
  q.set("servis", "1");
  q.set("k", `blog-${p.slug}`);
  return `/?${q}`;
}
// Cihaz adı kullanıcıya görünen metinde geçecek → blog kategorisi zaten insan diliyle
// yazılmış ("Çamaşır makinesi"), ikinci bir görünen-ad tablosu tutmuyoruz.
const kopruCihazAdi = (p) => (KOPRU_CIHAZ[p.category] ? String(p.category).toLocaleLowerCase("tr") : "");

// ① İLK EKRAN — "cevabı bul, çık" kullanıcısını sona inmeden yakalayan tek satır.
// Kurul notu: yazının ilk ekranına bağlamlı bir satır konmalı. Bağlam yoksa satır HİÇ
// basılmaz (jenerik satır gürültüdür; sayfa sonundaki kart zaten duruyor).
// YK #68 ② — cümle metin, eylem BUTON (gerekçe CSS'te). Butonun kendisi cihazı söyler ki
// bağlamdan koparılmış "Tıkla" tipi bir etiket olmasın.
const KOPRU_SATIRI = (p) => {
  const ad = kopruCihazAdi(p);
  if (!ad) return "";
  // Tolga, 15 Ağu: "tahmini maliyeti öğren butonu etrafında dikkat dağıtıcı yazı
  // olmasın, tamamını sil". Açıklama paragrafı kaldırıldı; BUTON AYNEN KORUNDU
  // (metni de değişmedi) — istenen butonun sadeleşmesi değil, etrafının boşalması.
  // `kopruCihazAdi(p)` çağrısı duruyor: dönüşü boşsa köprü hiç basılmaz.
  // ÇİFT KAPI: iki eşit ağırlıkta buton. Sol = doğrudan servis (güç metriği),
  // sağ = tahmini maliyet (mevcut köprü). Sıra bilinçli: Tolga'nın önceliği servis.
  return `<div class="kopru kopru-cift">` +
    `<a class="kopru-btn kopru-servis" href="${servisHref(p)}" data-kopru="servis-ilk">📍 Yakınımdaki servisi bul →</a>` +
    `<a class="kopru-btn kopru-teshis" href="${kopruHref(p)}" data-kopru="ilk-ekran">Tahmini maliyeti ücretsiz öğren →</a>` +
  `</div>`;
};

// ② SON KART — mevcut jenerik kartın bağlamlı hâli. Metin, bağlam varken cihazı söyler.
// Kapanış başlığı TEK KAYNAK (Tolga, 20 Ağu: "tüm yazıların en altında bu olmalı").
// Önce yazı sonu cihaz adını başlığa yazıyordu → 84 yazıda 10 FARKLI başlık oluşmuştu.
// Bağlam kaybolmuyor: butonların adresleri cihazı ve belirtiyi taşımaya devam ediyor.
const KAPANIS_BASLIK = "Cihazın şimdi mi bozuldu?";

// ② KAPANIŞ — #68 ②'nin kapanmamış yarısı (Tolga, 15 Ağu: "hem ilk-ekran satırı HEM YAZI SONU").
// 19 Ağu'da hub kapanışları sadeleşti (BLOG_CTA / TAMIR_CTA) ama yazı sonu koca mavi kart
// olarak kaldı — ve tek kapısı TEŞHİSTİ. Oysa YK'nın güç metriği "Servis Bul'dan servise
// ULAŞMA"; sayfanın en altındaki en güçlü yerde o kapı hiç yoktu.
// Artık sayfa başındaki ÇİFT KAPI ile birebir aynı: aynı sınıf, aynı metin, aynı sıra.
// 📏 ÖLÇÜM SÜREKLİLİĞİ: teşhis kapısı `son-kart` etiketini AYNEN koruyor (aynı eylem =
// aynı seri, geçmişle kıyas bozulmaz); servis kapısı YENİ bir etiketle (`son-kart-servis`)
// ekleniyor, mevcut seriyi kirletmiyor.
const YAZI_CTA = (p) => {
  // Başlık artık cihaza göre DEĞİŞMİYOR — hub kapanışıyla birebir aynı metin.
  return `<div class="kopru kopru-kapanis"><p><strong>${KAPANIS_BASLIK}</strong></p>` +
    `<div class="kopru-cift">` +
      `<a class="kopru-btn kopru-servis" href="${servisHref(p)}" data-kopru="son-kart-servis">📍 Yakınımdaki servisi bul →</a>` +
      `<a class="kopru-btn kopru-teshis" href="${kopruHref(p)}" data-kopru="son-kart">Tahmini maliyeti ücretsiz öğren →</a>` +
    `</div></div>`;
};

// ③ MOBİL STİCKY BANT — aynı bağlamlı linke basar (kurul: A, B'nin taşıyıcısı olsun).
// ⛔ CLS/LCP: `position:fixed` akış DIŞINDA → düzen kaymaz; görsel/font yok, yalnız metin →
//    LCP adayı değil. Gövdeye alttan boşluk eklenir ki bant altbilgiyi örtmesin.
// Yalnız yazı sayfalarında ve yalnız dar ekranda görünür (masaüstünde sona kadar okuma
// deseni farklı; orada son kart yeterli).
const STICKY = (p) =>
  `<div class="sticky-bosluk"></div><a class="sticky-kopru" href="${kopruHref(p)}" data-kopru="sticky">Tahmini fiyatı gör →</a>`;

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
// `image` = mutlak görsel adresi (YK #65 kapağı). Verilmeyen sayfalarda og:image hiç
// basılmaz ve twitter kartı eskisi gibi `summary` kalır — mevcut paylaşım görüntüsü bozulmaz.
function page({ title, desc, canonical, head = "", body, robots = "", image = "", genis = false }) {
  return `<!doctype html><html lang="tr"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">${robots ? `\n<meta name="robots" content="${esc(robots)}">` : ""}
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="Benservis"><meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}">${image ? `\n<meta property="og:image" content="${esc(image)}"><meta name="twitter:image" content="${esc(image)}">` : ""}
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
${GA4}
${FONT_LINK}
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
</head><body${genis ? ' class="genis"' : ""}>
<header class="site"><div class="wrap"><a class="brand" href="/">${LOGO}${WORDMARK}</a><nav class="sitenav" aria-label="Ana menü"><a href="/blog/">Bilgi Merkezi</a><a href="/tamir/">Tamir Merkezi</a><a href="/kilavuzlar/">Kullanım Kılavuzları</a><a class="navcta" href="/?servis=1"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>Yakın Servisler</a></nav></div></header>
<main><div class="wrap">${body}</div></main>
<footer class="site"><span class="wm-b">ben</span><span class="wm-s">servis</span> · Bil, gör, çağır. · <a href="/" style="color:${T.MUTED}">benservis.com</a> · <a href="/blog/hakkimizda/" style="color:${T.MUTED}">Hakkımızda</a> · <a href="/gizlilik/" style="color:${T.MUTED}">Gizlilik</a> · <a href="/kullanim-kosullari/" style="color:${T.MUTED}">Kullanım Koşulları</a><span class="foot-social"><a href="https://www.instagram.com/benservis.app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg></a><a href="https://www.tiktok.com/@benservis.app" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a><a href="https://www.linkedin.com/company/134824266/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a><a href="https://www.youtube.com/@benservisapp" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a><a href="https://medium.com/@benservis.app" target="_blank" rel="noopener noreferrer" aria-label="Medium"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg></a></span></footer>
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

// ── GRF kapak görseli (public/tamir-gorsel/<slug>/kapak.png) ─────────────────────────────────
// YK #65 (15 Ağu 2026): Tamir Merkezi'ndeki her yazıda en az bir GERÇEK görsel bulunur —
// şablonun bastığı jenerik mavi kategori-ikon bandı görsel sayılmaz. Bağlama yine tek
// kaynaktan: frontmatter'daki `images.coverAlt`. Alt metin yoksa ya da dosya yoksa kapak
// BASILMAZ, yazı mevcut ikon hero'suna DÜŞER — 79 yazının 75'i kapaksızken de hiçbiri
// bozulmasın, GRF dalga dalga teslim ettikçe yazılar kendiliğinden gerçek kapağa geçsin.
// Yol sözleşmesi GRF'ye: public/tamir-gorsel/<slug>/kapak.png · 1200×800 (3:2) · alt metin
// frontmatter'da `images.coverAlt`. Uzantı sırası sabit, GRF hangisini teslim ederse bulunur.
// YK #69 koşu 1/cila ③ — WEBP ÖNCE. Sıra `png` ile başlıyordu; WebP dosyaları yanına
// eklenince PNG kazanmaya devam ederdi. Artık aynı adın .webp'si varsa o servis edilir,
// yoksa .png'ye düşer → GRF'nin bundan sonra PNG teslim etmesi de bir şeyi bozmaz.
// ⛔ PNG'ler SİLİNMEZ (dışarıdan doğrudan linklenmiş olabilir) — yalnız tercih sırası değişti.
const GORSEL_UZANTILARI = ["webp", "png", "svg"];
// Kapak/adım/kontrol görsellerinin ortak çözücüsü: üç yerde ayrı ayrı `.png` sabiti
// yazılıydı, WebP'ye geçerken üçünü de tek tek düzeltmek gerekiyordu — tek kaynağa alındı.
const gorselUrl = (slug, ad) => {
  for (const uz of GORSEL_UZANTILARI) {
    const rel = `tamir-gorsel/${slug}/${ad}.${uz}`;
    if (fs.existsSync(path.join(ROOT, "public", rel))) return `/${rel}`;
  }
  return null;
};
const kapakUrl = (slug, alt) => {
  if (!alt) return null;
  return gorselUrl(slug, "kapak");
};

// Kart görseli — TEK KAYNAK (Tolga, 19 Ağu: "tüm merkezlerdeki thumbnailler insansız
// görseller ile değişecek. vektörel görsel kalmasın"; kararı ①+② birlikte: FE kartlara
// yazının KENDİ kapağını basar, GRF paralelde kapakları fotoğrafa çevirir → kart kapağı
// ne ise onu bastığı için fotoğraflar geldikçe kartlar kendiliğinden fotoğrafa döner).
//
// Kapak yoksa eski SVG çizgi ikonuna düşer — hiçbir ara durumda kart boş kalmaz.
// ⛔ `alt` metni yoksa `kapakUrl` bilerek null döndürür: alt'sız görsel ekran okuyucuda
// gürültüdür (18 Ağu'da 40 karenin görünmeme sebebi tam olarak buydu).
// 📐 Kutu 96×64 (3:2), kapaklar 1200×800 (3:2) → `contain` ile `cover` aynı sonucu verir;
// GRF'nin fotoğraf kapakları da 3:2 geldiği sürece CSS'e dokunmak gerekmez.
// ⚠️ SIRA ÖNEMLİ — 19 Ağu'da Tolga düzeltti: *"benim aklımdaki bu değil, gerçek
// fotoğraflar dün Kling'den indirdiğimiz"*. İlk sürüm yazının KENDİ kapağını basıyordu;
// o kapaklar teknik olarak WebP ama görsel dil olarak ÇİZGİ İLLÜSTRASYON — yani hâlâ
// "vektörel". Kural: önce GERÇEK FOTOĞRAF (Kling insansız seti), sonra çizim, sonra ikon.
//   ① `/merkez-gorsel/<kategori>.webp`  → gerçek fotoğraf (yazının kategorisinden)
//   ② yazının kendi kapağı              → çizim (yalnız kategorisi cihaz olmayanlarda)
//   ③ SVG ikon                          → ikisi de yoksa
// GRF'nin ② dalgası (79 kapağı fotoğrafa çevirme) bittiğinde ①/② ayrımı zaten anlamsızlaşır.
const postGorsel = (p) => {
  const foto = yaziFotosu(p);
  if (foto) {
    return `<div class="card-ic kapak"><img src="${foto}" width="96" height="64" loading="lazy" decoding="async" alt=""></div>`;
  }
  const alt = p.images?.coverAlt;
  const url = kapakUrl(p.slug, alt);
  if (url) {
    return `<div class="card-ic kapak"><img src="${url}" width="96" height="64" loading="lazy" decoding="async" alt="${esc(alt)}"></div>`;
  }
  return `<div class="card-ic">${iconSvg(p.category, "")}</div>`;
};
// ── KATEGORİ LİNKİ (21 Ağu 2026, FE) ─────────────────────────────────────────────────
// SORUN (ölçüldü, varsayılmadı): 13 kategori sayfası (`/blog/kategori/<slug>/`) sitemap'te
// ve /blog/ hub'ından link alıyordu, ama **171 yazı sayfasının HİÇBİRİNDEN** link almıyordu —
// yazı başındaki kategori adı düz metindi. Yani sitenin en derin ve en kalabalık katmanı
// kategori katmanına hiç bağlanmıyordu: okuyucu aynı cihazın diğer yazılarına geçemiyor,
// kategori sayfaları da iç link almadığı için zayıf kalıyordu.
// ÇÖZÜM: görünen metin AYNEN kalır (⛔ `p.category` etiketi değişmez kuralı korundu),
// yalnız linke sarılır. Hedef `blogGrubu(p)` ile bulunur; o yüzden her yazı MUTLAKA
// üretilmiş bir sayfaya gider (grup boşsa yazı zaten o gruba düşmez → kırık link imkânsız).
// Görünen etiket ile grup adı farklıysa (ör. "Kombi" → "Kombi / Termosifon") hedef
// `title` içinde yazar, kullanıcı nereye gittiğini tıklamadan görür.
const katLinki = (p) => {
  const ad = p.category || "Rehber";
  const grup = blogGrubu(p);
  const slug = KAT_AD_SLUG.get(grup);
  if (!slug) return esc(ad); // eşleşmeyen etiket → eski davranış (düz metin), link uydurulmaz
  const baslik = grup === ad ? `${ad} yazıları` : `${grup} yazıları`;
  return `<a class="yb-kat" href="/blog/kategori/${slug}/" title="${esc(baslik)}">${esc(ad)}</a>`;
};

// Yazı hero'su: kapak varsa gerçek görsel, yoksa mevcut mavi ikon bandı (fallback aynen).
// width/height sözleşme oranından sabit — CLS için zorunlu, `.hero.kapak` kutusu da
// aspect-ratio ile aynı oranı tutuyor (kart görselindeki hardcoded ölçü deseniyle aynı).
// Sayfa başı bloğu: kapak görseli arka planda, üstünde koyu perde, en üstte
// kategori+tarih satırı, sonra H1, sonra meta rozetleri, en altta İKİ KAPI.
// Kapak YOKSA görsel katmanı hiç basılmaz — blok düz koyu yüzeye düşer, bozulmaz.
const yaziBasi = (p) => {
  const url = kapakUrl(p.slug, p.images?.coverAlt);
  const gorsel = url
    ? `<img class="yb-foto" src="${url}" width="1200" height="800" fetchpriority="high" decoding="async" alt="${esc(p.images.coverAlt)}">`
    : "";
  return `<div class="yazibasi${url ? "" : " yb-fotosuz"}">` +
    gorsel +
    `<div class="yb-perde"></div>` +
    `<div class="yb-ic">` +
      `<p class="yb-ust">${katLinki(p)} · ${esc(trDate(p.date))}</p>` +
      `<h1>${esc(p.title)}</h1>` +
      guideMeta(p.guide) +
      KOPRU_SATIRI(p) +
    `</div>` +
  `</div>`;
};

const yaziHero = (p) => {
  const url = kapakUrl(p.slug, p.images?.coverAlt);
  if (!url) return heroFor(p.category);
  return `<div class="hero kapak"><img src="${url}" width="1200" height="800" loading="lazy" decoding="async" alt="${esc(p.images.coverAlt)}"></div>`;
};

// ── GRF adım görselleri (public/tamir-gorsel/<slug>/adim-0N.png) ──────────────────────────────
// Bağlama tek kaynaktan: yazının frontmatter'ındaki `images.steps` alt metinleri. Alt metin
// yoksa görsel BASILMAZ (erişilebilirlik: alt'sız çizim ekran okuyucuda gürültüdür).
// Görsel dosyası yoksa da basılmaz — kırık <img> çıkmaz.
const adimGorselUrl = (p, n) => {
  const alt = p.images?.steps?.[n - 1];
  if (!alt) return null;
  return gorselUrl(p.slug, `adim-${String(n).padStart(2, "0")}`); // uzantı: webp → png → svg
};
// Markdown gövdesindeki numaralı adım paragrafları — marked bunları
// `<p><strong>1. …</strong> …</p>` olarak basıyor — ilgili görsel paragrafın ARDINA eklenir.
// width/height attribute'u CLS için zorunlu; lazy-loading ilk ekranı yavaşlatmasın diye açık.
// ⚠️ ADIM BÖLÜMÜ SINIRI (3 Ağu 2026): numaralı `**N. …**` paragraf kalıbı yazının BAŞKA
// bölümlerinde de kullanılıyor (koku yazılarında "neden kokar?" nedenleri aynı biçimde
// numaralı). Görsel enjeksiyonu tüm gövdeye uygulanırsa adım görselleri NEDENLER listesine
// de basılır — sessiz ve yanlış eşleşme. Bu yüzden enjeksiyon "adım adım" başlığından
// SONRAKİ bölümle sınırlanır; rehber gövdelerinin hepsinde o başlık var (rehberDenetimi
// bunu build'de zorunlu tutar).
function adimBolumIndeksi(html) {
  const norm = (s) => s.toLocaleLowerCase("tr").replace(/\s+/g, " ");
  let i = -1;
  for (const m of html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)) {
    if (norm(m[1]).includes("adım adım")) i = m.index + m[0].length;
  }
  return i;
}
function adimGorselleriEkle(p) {
  if (!p.images?.steps?.length) return p.html;
  const bas = adimBolumIndeksi(p.html);
  if (bas < 0) return p.html; // rehberDenetimi zaten durdurur; burada sessiz yanlış basmaktansa hiç basma
  const once = p.html.slice(0, bas), sonra = p.html.slice(bas);
  // NOT: bold lead-in'e yukarıda `class="lead"` ekleniyor → <strong[^>]*> ile eşleşmeli.
  return once + sonra.replace(/<p><strong[^>]*>(\d+)\.[\s\S]*?<\/p>/g, (m, n) => {
    const url = adimGorselUrl(p, Number(n));
    if (!url) return m;
    const alt = p.images.steps[Number(n) - 1];
    return `${m}<figure class="adim-gorsel"><img src="${url}" width="1200" height="800" loading="lazy" decoding="async" alt="${esc(alt)}"></figure>`;
  });
}

// ── KONTROL GÖRSELLERİ (public/tamir-gorsel/<slug>/kontrol-0N.png) ────────────────────────
// Tolga kuralı, 14 Ağu 2026: "tamir merkezindeki tüm yazılarda mutlaka konuyu daha rahat
// çözmeye yarayan görsel olmalı". Yukarıdaki adım görseli sistemi YALNIZ rehberlere (`## Adım
// adım` bölümü olan 3 yazı) uyuyordu; Tamir Merkezi'nin asıl kütlesi olan **26 arıza yazısı**
// farklı yapıda: "Servisi aramadan önce kendin kontrol et" başlığı altında NUMARALI MARKDOWN
// LİSTESİ (`1. **Musluğu tam aç.** …`) → marked bunu <ol><li><strong>…</strong>…</li></ol>
// olarak basıyor. Adım kalıbı (<p><strong>N. …) burada HİÇ eşleşmiyordu.
//
// AYRI ALAN VE AYRI DOSYA ADI — bilerek:
//   `images.steps` + `adim-0N.png` → HowTo adımları (rehberDenetimi bunları `steps:` ile
//   birebir hizalıyor; oraya kontrol görseli karıştırmak o denetimi yanlış tetiklerdi).
//   `images.checks` + `kontrol-0N.png` → kontrol listesi maddeleri. İki sistem çakışmaz,
//   bir yazıda ikisi birden bulunabilir.
//
// ⚠️ BÖLÜM SINIRI (3 Ağu'daki adım görseli dersinin aynısı): numaralı liste yazının başka
// bölümlerinde de var (nedenler, SSS). Enjeksiyon tüm gövdeye uygulanırsa görsel YANLIŞ
// listeye basılır — sessiz ve yanlış eşleşme. Bu yüzden yalnız "kontrol/kendin/dene"
// başlığından SONRAKİ İLK <ol> hedeflenir, bir sonraki <h2>'de durulur.
const kontrolGorselUrl = (p, n) => {
  const alt = p.images?.checks?.[n - 1];
  if (!alt) return null; // alt'sız görsel basılmaz (ekran okuyucuda gürültü)
  return gorselUrl(p.slug, `kontrol-${String(n).padStart(2, "0")}`); // uzantı: webp → png → svg
};
// "Servisi aramadan önce kendin kontrol et" / "kendin dene" gibi başlıkları yakalar.
function kontrolBolumu(html) {
  const norm = (s) => s.toLocaleLowerCase("tr").replace(/<[^>]*>/g, "").replace(/\s+/g, " ");
  const basliklar = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
  for (let i = 0; i < basliklar.length; i++) {
    const m = basliklar[i];
    const t = norm(m[1]);
    if (!/(kontrol et|kendin|denemen|önce dene)/.test(t)) continue;
    const bas = m.index + m[0].length;
    const son = basliklar[i + 1]?.index ?? html.length; // sonraki <h2>'de dur
    return { bas, son };
  }
  return null;
}
function kontrolGorselleriEkle(p) {
  if (!p.images?.checks?.length) return p.html;
  const b = kontrolBolumu(p.html);
  if (!b) return p.html; // başlık yoksa sessiz yanlış basmaktansa hiç basma (denetim aşağıda uyarır)
  const once = p.html.slice(0, b.bas), bolum = p.html.slice(b.bas, b.son), sonra = p.html.slice(b.son);
  // Bölümdeki İLK <ol> — nedenler/SSS listelerine bulaşmasın.
  const ol = bolum.match(/<ol[^>]*>[\s\S]*?<\/ol>/);
  if (!ol) return p.html;
  let n = 0;
  const yeniOl = ol[0].replace(/<li>([\s\S]*?)<\/li>/g, (m, ic) => {
    n += 1;
    const url = kontrolGorselUrl(p, n);
    if (!url) return m;
    const alt = p.images.checks[n - 1];
    // <figure> <li> İÇİNE girer — listeyi bölmek geçersiz HTML üretirdi.
    return `<li>${ic}<figure class="kontrol-gorsel"><img src="${url}" width="1200" height="800" loading="lazy" decoding="async" alt="${esc(alt)}"></figure></li>`;
  });
  return once + bolum.replace(ol[0], yeniOl) + sonra;
}
// Sessiz bozulmayı engelle: alt metin yazılmış ama bağlanacak yer/dosya yoksa build UYARIR
// (durdurmaz — görsel eksikliği yayını bloklamamalı, ama fark edilmeden de geçmemeli).
function kontrolDenetimi(posts) {
  const uyari = [];
  for (const p of posts) {
    const k = p.images?.checks?.length;
    if (!k) continue;
    const b = kontrolBolumu(p.html);
    if (!b) { uyari.push(`${p.slug}: images.checks var ama "kendin kontrol et" <h2> yok — görsel BASILMADI`); continue; }
    const ol = p.html.slice(b.bas, b.son).match(/<ol[^>]*>[\s\S]*?<\/ol>/);
    if (!ol) { uyari.push(`${p.slug}: kontrol bölümünde numaralı liste yok — görsel BASILMADI`); continue; }
    const madde = (ol[0].match(/<li>/g) || []).length;
    if (k > madde) uyari.push(`${p.slug}: images.checks ${k} alt metin ama listede ${madde} madde — fazlası basılmaz`);
    const eksik = Array.from({ length: Math.min(k, madde) }, (_, i) => i + 1).filter((n) => !kontrolGorselUrl(p, n));
    if (eksik.length) uyari.push(`${p.slug}: kontrol-${eksik.map((n) => String(n).padStart(2, "0")).join(", kontrol-")} görseli yok`);
  }
  if (uyari.length) {
    console.warn("[build-blog] ⚠️  kontrol görseli uyarıları:");
    for (const u of uyari) console.warn("  · " + u);
  }
}

// ── REHBER DENETİMİ (build'i durdurur) ────────────────────────────────────────────────────
// HowTo JSON-LD sayfada GÖRÜNEN adımlarla birebir aynı olmalı. `steps:` ile gövdedeki numaralı
// adım paragrafları ayrışırsa yapılandırılmış veri sayfayı yanlış anlatır (Google için de ihlal),
// adım görselleri de kayar. 2 Ağu'da E24 tam bunu yapıyordu: 7 `steps:` / 6 gövde adımı.
function rehberDenetimi(posts) {
  const sorunlar = [];
  for (const p of posts) {
    if (!p.guide) continue;
    const n = (p.steps || []).length;
    if (!n) { sorunlar.push(`${p.slug}: guide: var ama steps: yok`); continue; }
    const bas = adimBolumIndeksi(p.html);
    if (bas < 0) { sorunlar.push(`${p.slug}: gövdede "adım adım" içeren <h2> yok — adım bölümü bulunamıyor`); continue; }
    const govde = [...p.html.slice(bas).matchAll(/<p><strong[^>]*>(\d+)\./g)].map((m) => Number(m[1]));
    const beklenen = Array.from({ length: n }, (_, i) => i + 1);
    if (govde.join(",") !== beklenen.join(","))
      sorunlar.push(`${p.slug}: steps: ${n} adım diyor, gövdede ${govde.length} adım var (${govde.join(",") || "yok"}) — HowTo JSON-LD sayfayla uyuşmuyor`);
    const ig = p.images?.steps?.length;
    if (ig && ig !== n) sorunlar.push(`${p.slug}: images.steps ${ig} ≠ steps ${n} — görseller kayar`);
  }
  if (sorunlar.length) {
    console.error("[build-blog] ✗ REHBER DENETİMİ BAŞARISIZ:");
    for (const s of sorunlar) console.error("  · " + s);
    process.exit(1);
  }
  const rehberSayisi = posts.filter((p) => p.guide).length;
  console.log(`[build-blog] ✓ rehber denetimi: ${rehberSayisi} rehberde steps ↔ gövde ↔ görsel hizası birebir.`);
}
// YK #65 sayacı + sessiz bozulma kalkanı: `coverAlt` yazılmış ama dosya yoksa yazı sessizce
// mavi hero'ya düşer — build bunu SÖYLER (durdurmaz; kapak eksikliği yayını bloklamamalı).
function kapakDenetimi(posts) {
  const eksik = posts.filter((p) => p.images?.coverAlt && !kapakUrl(p.slug, p.images.coverAlt));
  const kapakli = posts.filter((p) => kapakUrl(p.slug, p.images?.coverAlt)).length;
  for (const p of eksik) console.warn(`[build-blog] ⚠️  ${p.slug}: images.coverAlt var ama kapak dosyası yok — mavi ikon hero'suna düştü`);
  console.log(`[build-blog] ✓ YK #65 kapak sayacı: ${kapakli}/${posts.length} yazıda gerçek kapak (kalan ${posts.length - kapakli} yazı ikon hero'sunda).`);
}

rehberDenetimi(posts); // fail-fast: sayfa yazılmadan önce dursun
kontrolDenetimi(posts); // uyarır, durdurmaz — eksik görsel yayını bloklamaz ama sessiz de geçmez
kapakDenetimi(posts); // uyarır + YK #65 ilerleme sayacını basar

// ── PİLOT GİRİŞ NOKTASI (YK #35): en çok gösterim alan sayfalar ① katmanın kapısı olsun ──
// Yazı ① katmana bağlıysa, yazının kendi sayfasına da o cihazın hata kodu/belirti listesine
// giden bir satır basılır. ⛔ Yazının METNİNE dokunulmaz (PAZ'ın işi) — bu satır şablon
// katmanında, mevcut CTA/PWA blokları gibi eklenir. URL'ler değişmez.
const TAMIR_GERI = new Map();
for (const ad of CIHAZLAR) {
  for (const g of hataKoduKayitlari(ad)) if (g.yazi) TAMIR_GERI.set(g.yazi, { ad, slug: slugify(ad) });
}
const tamirGeriSatiri = (p) => {
  const k = TAMIR_GERI.get(p.slug);
  if (!k) return "";
  return `<p class="tamir-geri">🔧 Bu sayfa <a href="/tamir/${k.slug}/">${esc(k.ad)} hata kodu ve belirti listesinin</a> bir parçası — aynı cihazda başka bir kod ya da belirti arıyorsan oradan devam edebilirsin.</p>`;
};

// ⬆️ 21 Ağu 2026 (FE): bu iki blok DAHA AŞAĞIDAYDI (KATEGORILER ~1049, eşleme ~1143).
// Yazı sayfası döngüsü (hemen aşağıda) modül değerlendirmesinde ONLARDAN ÖNCE koşuyor;
// `yaziBasi` artık kategori linki bastığı için `blogGrubu`/`KAT_AD_SLUG`'a döngü ânında
// ihtiyaç var. Aşağıda bırakılsalardı TDZ hatası verirdi (ölçüldü, varsayılmadı).
// İçerik AYNEN taşındı — tek satır bile değişmedi, yalnız sıra öne alındı.
// ⚠️ KATEGORİ KAYNAĞI (YK #32, 2 Ağu — Tolga: "bizim ürün grupları olmalı, telefon vs olmamalı"):
// liste ELLE YAZILMAZ, `src/constants.js` → CIHAZLAR'dan türetilir. Uygulamanın cihaz grubu
// eklenip çıkarıldığında üç merkez de kendiliğinden uyar; ikinci bir liste tutulmaz.
// ⛔ iFixit'in kategori dünyası (telefon, tablet, konsol, araba, Mac) BİZE GİRMEZ.
// ⚠️ slug `cihazSlug` ile üretilir, `slugify(ad)` ile DEĞİL: çivilenmiş adlarda ikisi
// ayrışır ("Çamaşır Makinesi / Kurutma" → çivi `camasir-makinesi`). Buradan üretilen slug
// /tamir/, /kilavuzlar/, /blog/kategori/ adreslerini ve kategori ikon dosya adını besliyor;
// `slugify` kalsaydı üç adres birden kayardı (KİLİTLİ_SLUGLAR kapısı da bağırırdı).
const KATEGORILER = CIHAZLAR.map((ad) => ({ ad, slug: cihazSlug(ad), kaynak: ad }));

// ── BLOG YAZISI → CİHAZ GRUBU EŞLEMESİ ────────────────────────────────────────
// Yazıların `category` frontmatter'ı serbest metin ("Kombi", "Çamaşır makinesi",
// "Sürdürülebilirlik"…). Hub 11 CIHAZLAR grubuyla çalıştığı için eşleme burada yapılır.
// ⛔ UYDURMA KATEGORİ AÇILMAZ: cihaz grubuna oturmayan yazılar (hakkımızda, mevzuat,
// enerji/fatura…) TEK bir "Genel" toplayıcısına gider.
// ⛔ Yazının kendi `category` etiketi DEĞİŞMEZ — kartta ve yazı sayfasında aynen görünür;
// bu eşleme yalnız hub/kategori katmanını besler.
//
// 2 Ağu (Tolga, ②): "Sürdürülebilirlik" Genel'den ÇIKTI, kendi konu kategorisine ayrıldı.
// Gerekçe: 8 yazılık gerçek bir küme + footer'dan doğrudan link veriliyor; Genel'in içinde
// kalırsa footer linki 22 karışık yazıya düşerdi. Bu YENİ BİR CİHAZ GRUBU DEĞİL —
// "Genel" gibi bir KONU toplayıcısı, hub'ın 11'li cihaz ızgarasına karışmaz (aşağıya bak).
const GENEL = "Genel";
const SURDURULEBILIRLIK = "Sürdürülebilirlik";
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
// Konu (cihaz-dışı) kategorileri: slug → görünen ad. Cihaz eşlemesinden ÖNCE bakılır ki
// ileride "Sürdürülebilirlik" adlı bir cihaz grubu açılsa bile burası kaymasın.
const KONU_ESLES = {
  surdurulebilirlik: SURDURULEBILIRLIK,
  "surdurulebilir-tuketim": SURDURULEBILIRLIK,
  "onarim-hakki": SURDURULEBILIRLIK,
  "dongusel-ekonomi": SURDURULEBILIRLIK,
};
const CIHAZ_SLUG = new Map(KATEGORILER.map((k) => [k.slug, k.ad]));
// Görünen ad → slug (yukarıdakinin tersi). Yazının kategorisinden gerçek Kling
// fotoğrafına gitmek için gerekiyor; `merkezFotosu` slug ile çalışıyor.
const KAT_AD_SLUG = new Map([
  ...KATEGORILER.map((k) => [k.ad, k.slug]),
  // KONU kategorileri de eşlendi (Tolga, 20 Ağu: "Genel ve Sürdürülebilirlik
  // thumbnailleri hâlâ SVG, değiştir"). 22 yazı (Genel 14 + Sürdürülebilirlik 8)
  // yazının KENDİ çizgi-illüstrasyon kapağına düşüyordu — teknik olarak WebP ama
  // görsel dil olarak vektörel. 20 Ağu'da bu iki kareye artık gerçek fotoğraf
  // (orman/oturma odası + elde telefon) bağlı, o yüzden eşleme açılabildi.
  [GENEL, "genel"],
  [SURDURULEBILIRLIK, "surdurulebilirlik"],
]);
// Yazının kategorisine karşılık gelen fotoğraf. Karşılığı olmayan kategori → null,
// o zaman yazının kendi kapağına, o da yoksa çizgi ikona düşer.
const yaziFotosu = (p) => {
  const slug = KAT_AD_SLUG.get(blogGrubu(p));
  return slug ? merkezFotosu(slug) : null;
};
// ── KURUTMA YAZILARI: SLUG'DAN YÖNLENDİRME (21 Ağu 2026) ─────────────────────────────
// Kurutma makinesi ayrı cihaz oldu ama 6 kurutma yazısının `category` frontmatter'ı hâlâ
// "Çamaşır makinesi" (5'i) ve "Genel" (1'i) — o metadata PAZ'ın alanı, FE içeriğe dokunmaz.
// Eşleşme MANTIĞI ise FE'nin alanı: yazı slug'ı `kurutma-makinesi-` ile başlıyorsa yazı
// kurutma grubuna düşer. Deterministik, bulanık eşleştirme yok, tek satırda geri alınabilir.
// ⛔ `bulasik-makinesi-kurutmuyor` BİLEREK dışarıda: o bulaşık makinesi yazısı, ön ek tutmuyor.
// 📌 PAZ frontmatter'ları normalize edince bu kural gereksizleşir ve silinir.
const KURUTMA_ONEK = "kurutma-makinesi-";
function blogGrubu(p) {
  if (p.slug?.startsWith(KURUTMA_ONEK)) return "Kurutma Makinesi";
  const s = slugify(p.category || "");
  if (!s) return GENEL;
  if (KONU_ESLES[s]) return KONU_ESLES[s]; // konu kategorisi (cihaz değil)
  if (CIHAZ_SLUG.has(s)) return CIHAZ_SLUG.get(s); // birebir cihaz adı
  return BLOG_KAT_ESLES[s] || GENEL;
}

for (const p of posts) {
  const canonical = `${SITE}/blog/${p.slug}/`;
  // Kapağı olan yazı paylaşımda da kendi görselini gösterir; olmayan eski `og.png`de kalır.
  const kapak = kapakUrl(p.slug, p.images?.coverAlt);
  const ld = {
    "@context": "https://schema.org", "@type": "Article",
    headline: p.title, description: p.description,
    datePublished: p.date, dateModified: p.date,
    inLanguage: "tr-TR", image: kapak ? `${SITE}${kapak}` : `${SITE}/og.png`,
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
  // TASARIM (18 Ağu, backlog "TAMİR SAYFASI YENİDEN TASARIMI"): sayfa başı artık
  // dağınık bir yığın değil, TEK KARAR EKRANI. Eskiden sıra şuydu: kapak → küçük
  // meta satırı → başlık → guide kutusu → köprü butonları; okuyucu başlığı görmek
  // için kapağı geçiyor, kapıları görmek için üç blok daha iniyordu.
  // Yeni sıra: kapak ARKA PLAN olur, başlık + meta + iki kapı onun üstünde tek
  // yüzeyde toplanır. "Servis bul" ile "tahmini maliyet" ilk ekranda birlikte görünür
  // — Tolga'nın güç metriği (servise ulaşma) ilk ekranda karar alabilsin.
  const body = `<article>${yaziBasi(p)}${kontrolGorselleriEkle({ ...p, html: adimGorselleriEkle(p) })}${YAZI_CTA(p)}${PWA_NOT}${tamirGeriSatiri(p)}</article>${STICKY(p)}`;
  const dir = path.join(OUT, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page({ title: p.title, desc: p.description, canonical, head, body, image: kapak ? `${SITE}${kapak}` : "" }));
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
// Kart görsel alanı — ANA SAYFA İLE AYNI DİL (Tolga 18 Ağu: "ana sayfa ile benzer
// stile gelmeli"), AMA AYNI KARELER DEĞİL.
//
// Tolga, 19 Ağu: "insansız seti ana sayfa hariç, bilgi merkezi, tamir merkezi ve
// kullanım kılavuzlarında kullan."
//   · ana sayfa      → mavi üniformalı usta seti (public/anasayfa/cihaz/) — DEĞİŞMEDİ
//   · üç merkez hub'ı → insansız set (public/merkez-gorsel/)
// Gerekçe GRF'nin prompt paketinde: hub'lar bir katalog yüzeyi, orada cihazın kendisi
// özne olmalı; usta figürü ana sayfanın karşılama anına ait.
// YK #32 gereği ÜÇ MERKEZ TEK ORTAK SET kullanır (merkez başına ayrı set üretilmez).
//
// Dosya adları her iki sette de aynı slug (buzdolabi, camasir-makinesi…), o yüzden
// ek eşleme tablosu gerekmedi. Insansız kare yoksa ana sayfa karesine düşer, o da
// yoksa çizgi ikon — hiçbir ara durumda kart boş kalmaz.
// `oncelik` verilirse o kök ÖNCE denenir. 20 Ağu (Tolga: "ana sayfa değiştirme sadece
// tamir merkezi"): /tamir/ artık "Benservis ustası" setini kullanıyor, /blog/ ve
// /kilavuzlar/ ise insansız sette KALIYOR. Üçü aynı `merkez-gorsel/` kökünü paylaştığı
// için ayrım kök listesiyle yapıldı — ikinci bir kategori listesi açılmadı.
const merkezFotosu = (slug, oncelik = []) => {
  for (const kok of [...oncelik, "merkez-gorsel", "anasayfa/cihaz"]) {
    for (const uz of GORSEL_UZANTILARI) {
      const rel = `${kok}/${slug}.${uz}`;
      if (fs.existsSync(path.join(ROOT, "public", rel))) return `/${rel}`;
    }
  }
  return null;
};

// /tamir/ KENDİ SETİNİ kullanır (Tolga, 20 Ağu: "ana sayfa değiştirme sadece tamir
// merkezi"): "Benservis ustası" kareleri. /blog/ ve /kilavuzlar/ insansız sette KALIR,
// ana sayfa (`anasayfa/cihaz/`) hiç değişmez. Dosyası olmayan cihaz insansıza düşer.
const TAMIR_KOK = ["tamir-gorsel/merkez"];
const katKapak = (k, oncelik = []) => {
  const foto = merkezFotosu(k.slug, oncelik);
  if (foto) {
    return `<span class="kat-gorsel"><img src="${foto}" width="600" height="380" loading="lazy" decoding="async" alt=""></span>`;
  }
  return `<span class="kat-gorsel kat-gorsel-ikon">${katIkon(k)}</span>`;
};

const katIkon = (k) => {
  // Uzantı sırası kapak/adım görselleriyle aynı çözücüden (webp → png → svg);
  // burada da sabit `.png` yazılıydı, WebP dosyaları yanına konunca PNG kazanıyordu.
  const url = gorselUrl("kategori", k.slug);
  if (url) {
    return `<img class="kat-png" src="${url}" width="44" height="44" loading="lazy" decoding="async" alt="${esc(k.ad)} kategorisi ikonu">`;
  }
  return iconSvg(k.ad, "");
};

/**
 * ① HUB ızgarası — üç merkezin ORTAK kart bileşeni.
 * İçeriği OLAN kategori <a> (tıklanır), olmayan <div class="yok"> (dürüst boş hâl, link yok).
 * ⛔ "yakında" YAZILMAZ (YK #32): boşluk gerçek ve kalıcı olabilir; söz vermek yerine ne
 * olduğu açıkça yazılır + kullanıcı teşhis/servis CTA'sına yönlendirilir.
 * `birim` merkez başına tek kelimedir ("yazı" / "kılavuz"); kart kendi `birim`ini verirse o
 * kazanır — /tamir/ hub'ında kartın içeriği rehber de olabilir hata kodu da (YK #35).
 * @param items [{ ad, slug, sayi, url, birim?, bosRozet, bosNot }]
 */
const katIzgarasi = (items, birim, oncelik = []) =>
  items
    .map((k) =>
      k.sayi
        // ROZET KALDIRILDI (19 Ağu, Tolga: "rozeti de kaldır") — hub kartı ana
        // sayfadaki kartla aynı iskelete iner: görsel + ad, başka satır yok.
        // Sayı bilgisi title'a taşındı: imleçle bekleyen görür, kartı şişirmez.
        ? `<a class="katkart${k.yesil ? " yesil" : ""}" href="${k.url}" title="${k.sayi} ${esc(k.birim || birim)}">${katKapak(k, oncelik)}<span class="kat-govde"><h2>${esc(k.ad)}</h2></span></a>`
        // BOŞ KART: rozet ve not gitti ama boş hâl KAYBOLMADI — kart <div>, yani
        // tıklanamaz, ve .katkart.yok görseli grayscale + soluk basıyor. Tam cümle
        // title'da. Kullanıcı boş kategoriye tıklayıp boş sayfaya düşmez.
        : `<div class="katkart yok" title="${esc(k.bosRozet)} — ${esc(k.bosNot)}">${katKapak(k, oncelik)}<span class="kat-govde"><h2>${esc(k.ad)}</h2></span></div>`
    )
    .join("");


const cards = posts
  .filter((p) => p.slug !== "hakkimizda")
  .map((p) => `<a class="card" data-cat="${esc(p.category || "Rehber")}" href="/blog/${p.slug}/">${postGorsel(p)}<div class="card-body"><span class="cat">${esc(p.category || "Rehber")}</span><h2>${esc(p.title)}</h2><p>${esc(p.description)}</p></div></a>`)
  .join("");

// ── BİLGİ MERKEZİ: ② KATEGORİ SAYFALARI + ① HUB ───────────────────────────────
// ⛔ SEO KİLİDİ (bağlayıcı): 79 yazının URL'i `/blog/<slug>/` olarak AYNEN KALIR.
// Taşıma, yönlendirme, slug değişikliği YOK. Kategori katmanı AYRI bir ad alanına
// (`/blog/kategori/<slug>/`) açıldı — yazı slug'larıyla çakışmaz, mevcut adresleri
// gölgelemez. `/blog/` yalnız INDEKS katmanı olarak yeniden düzenlendi.
const blogPostlari = posts.filter((p) => p.slug !== "hakkimizda");
// ① CİHAZ ızgarası — hub'ın "Cihazını seç" bölümü. 11 grup, TEK KAYNAK CIHAZLAR.
// ⛔ Buraya konu kategorisi (Genel, Sürdürülebilirlik) KARIŞMAZ: kullanıcı burada
// cihazını arıyor, konu kartı ızgaranın anlamını bozar (Tolga, 2 Ağu).
const blogCihazKat = KATEGORILER.map((k) => ({
  ...k, yazilar: blogPostlari.filter((p) => blogGrubu(p) === k.ad),
}));
// ② KONU kategorileri — cihaz ızgarasının ALTINDA ayrı, küçük bir bölümde durur.
// `yesil` YALNIZ Sürdürülebilirlik'te: karar defteri renk kuralı (yeşil = sürdürülebilirlik).
const blogKonuKat = [
  { ad: GENEL, slug: "genel", yazilar: blogPostlari.filter((p) => blogGrubu(p) === GENEL) },
  { ad: SURDURULEBILIRLIK, slug: "surdurulebilirlik", yesil: true, yazilar: blogPostlari.filter((p) => blogGrubu(p) === SURDURULEBILIRLIK) },
];
// Kategori SAYFALARI + sitemap ikisini birlikte gezer (sıra: cihazlar, sonra konular).
const blogKatVeri = [...blogCihazKat, ...blogKonuKat];

// ── KATEGORİ FİYAT VAADİ, VERİDEN TÜRETİLİR (4 Ağu 2026) ──────────────────────────────────
// PAZ'ın SERP düzeltmesi kategori açıklamalarının da fiyat vaat ettiğini bildirdi. Ama bu
// vaat HER kategoride kırık değil: adanmış "…tamiri kaç para" sayfaları Tolga'nın kararıyla
// KORUNDU ve hâlâ o kategorilerin içinde duruyor (bulaşık · buzdolabı · çamaşır · klima ·
// kombi). Oralarda vaat gerçek; kaldırmak bu kez EKSİK vaat olurdu.
// Bu yüzden metni sabitlemek yerine kategorinin fiilen fiyat içerip içermediğine bakıyoruz —
// yarın bir fiyat sayfası eklenir/çıkarılırsa metin kendiliğinden doğru kalır, elle liste yok.
const KAT_TL = /[\d.]{3,}\s*(?:₺|\bTL\b)|₺\s*[\d.]{3,}/;
for (const k of blogKatVeri) k.fiyatVar = k.yazilar.some((p) => KAT_TL.test(p.html));

// Yazı kartı (② katman) — /tamir/'deki zorluk·süre·adım·dil satırının blog karşılığı:
// konu tipi (yazının kendi kategori etiketi) · tarih.
const blogKarti = (p) =>
  `<a class="card" href="/blog/${p.slug}/">${postGorsel(p)}<div class="card-body"><span class="cat">${esc(p.category || "Rehber")}</span><h2>${esc(p.title)}</h2><p>${esc(p.description)}</p><span class="tamir-meta">${esc(p.category || "Rehber")} · ${esc(trDate(p.date))}</span></div></a>`;

// ── KAPANIŞ ÇAĞRISI — SADELEŞTİRİLDİ (Tolga, 19 Ağu: "burayı basitleştir, servis bul
// butonu gelsin standart") ───────────────────────────────────────────────────────────
// ÖNCE: koca mavi kart — başlık + iki satırlık paragraf + "Bil, gör, çağır." etiketi,
// üstelik kartın TAMAMI `/` adresine giden tek bir linkti (servis bul butonu YOKTU).
// SONRA: tek satır + sayfanın geri kalanıyla AYNI standart buton (`kopru-btn kopru-servis`,
// tamir sayfalarındaki çift kapının birebir aynısı) → kullanıcı aynı düğmeyi her yerde
// aynı yerde görür, kapanışta da doğrudan servise çıkar (YK güç metriği).
//
// ⛔ /tamir/ ALTINDA FİYAT KELİMESİ YASAK (YK #35 şart 1 — build denetliyor, ihlalde DURUYOR).
// Bu yüzden ikinci kapı ("Tahmini maliyeti…") YALNIZ blog tarafında basılır; /tamir/'de
// tek buton kalır. Kısıt keşfedildi, varsayılmadı: `FIYAT_DESENI` "maliyet"i de yakalıyor.
// ⚠️ İKİ AYRI ÖLÇÜM BORUSU VAR, İKİSİ DE BESLENİR (ölçüldü, varsayılmadı):
//   `kaynak=` → App.jsx `GELIS` (istemci; her track olayına `gelis` alanı olarak girer,
//               YK #35 şart 2 hunisi). Desen: [a-z0-9-], en fazla 32 karakter.
//   `k=`      → api/teshis/log.js `icKaynak` (sunucu; `kaynak=blog-ici · kampanya=<slug>`).
//               ⛔ YALNIZ `blog-` önekli değeri kabul eder, gerisini sessizce ATAR.
// Bu yüzden `k` yalnız blog tarafında basılır; /tamir/ değeri (`tamir-…`) zaten reddedilirdi.
// Eski kapanış kartı `/` ya da `?kaynak=` taşıyordu; blog tarafında ikisi de yoktu → bu
// sadeleştirme aynı zamanda blog kategorisi kapanışına ölçüm KAZANDIRIYOR.
const kapanisHref = (cihazSlug, kaynak, servis) => {
  const q = new URLSearchParams();
  if (cihazSlug) q.set("cihaz", cihazSlug);
  if (servis) q.set("servis", "1");
  q.set("kaynak", kaynak);
  if (kaynak.startsWith("blog-")) q.set("k", kaynak);
  return `/?${q}`;
};
// Standart servis butonu — metni ve sınıfı yazı içindeki çift kapıyla BİREBİR aynı.
const SERVIS_BTN = (cihazSlug, kaynak) =>
  `<a class="kopru-btn kopru-servis" href="${kapanisHref(cihazSlug, kaynak, true)}" data-kopru="servis-kapanis" data-cagir="cta">📍 Yakınımdaki servisi bul →</a>`;

const BLOG_CTA = (cihazSlug, kaynak) =>
  `<div class="kopru kopru-kapanis"><p><strong>${KAPANIS_BASLIK}</strong></p>` +
  `<div class="kopru-cift">${SERVIS_BTN(cihazSlug, kaynak)}` +
  `<a class="kopru-btn kopru-teshis" href="${kapanisHref(cihazSlug, kaynak, false)}" data-kopru="teshis-kapanis">Tahmini maliyeti ücretsiz öğren →</a>` +
  `</div></div>`;

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
      // Sürdürülebilirlik bir CİHAZ değil → "arıza nedenleri / tamir maliyeti" başlığı ona
      // yalan olur. Konu kategorisinde başlık, açıklama ve meta satırı konuya göre yazılır.
      title: k.yesil
        ? `${k.ad} — onarım hakkı, döngüsel ekonomi ve daha az atık`
        : `${k.ad} — arıza nedenleri ve ${k.fiyatVar ? "tamir maliyetleri" : "servis sınırı"}`,
      desc: k.yesil
        ? `Tamir etmek neden atmaktan iyi: onarım hakkı, cihaz ömrü, enerji ve döngüsel ekonomi üzerine ${k.yazilar.length} yazı.`
        : k.fiyatVar
        ? `${k.ad} ile ilgili arıza nedenleri, kendin yapabileceğin kontroller ve güncel tahmini tamir fiyatları. ${k.yazilar.length} yazı.`
        : `${k.ad} ile ilgili arıza nedenleri, kendin yapabileceğin kontroller ve ne zaman servis gerekir. ${k.yazilar.length} yazı.`,
      canonical,
      head,
      body: `<a class="geri" href="/blog/">← Bilgi Merkezi</a>${heroFor(k.ad, k.yesil ? "yesil" : "", merkezFotosu(k.slug), KAVRAM_SLUG.has(k.slug))}<h1>${esc(k.ad)}</h1><p class="meta">${k.yazilar.length} yazı · ${k.yesil ? "onarım hakkı, cihaz ömrü ve döngüsel ekonomi" : k.fiyatVar ? "arıza nedenleri, kontroller ve tahmini maliyetler" : "arıza nedenleri, kontroller ve servis sınırı"}</p><div class="bloglist">${k.yazilar.map(blogKarti).join("")}</div>${BLOG_CTA(CIHAZ_SLUG.has(k.slug) ? k.slug : "", `blog-kat-${k.slug}`)}`,
    })
  );
}

// ① HUB — /tamir/ ile AYNI ızgara bileşeni, ama İKİ bölüm hâlinde (2 Ağu, Tolga):
//   "Cihazını seç"     → 11 cihaz kartı (ızgaranın anlamı: cihazımı bul)
//   "Konu başlıkları"  → Genel + Sürdürülebilirlik (cihaz değil, konu)
// Önceden "Genel" cihaz ızgarasının 12. kartı olarak duruyordu; Sürdürülebilirlik ayrılınca
// bu karışıklık iyice görünür olacaktı, o yüzden konu kartları kendi bölümüne alındı.
const blogCihazKartlari = katIzgarasi(
  blogCihazKat.map((k) => ({
    ...k, sayi: k.yazilar.length, url: `/blog/kategori/${k.slug}/`,
    bosRozet: "Yazı yok", bosNot: "Bu cihaz için henüz yazı yazmadık.",
  })),
  "yazı"
);
const blogKonuKartlari = katIzgarasi(
  blogKonuKat.map((k) => ({
    ...k, sayi: k.yazilar.length, url: `/blog/kategori/${k.slug}/`,
    bosRozet: "Yazı yok", bosNot: "Bu başlıkta henüz yazı yazmadık.",
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
    genis: true,
    body: `<a class="geri" href="/">← Ana sayfa</a><div class="bloghead"><h1>Bilgi Merkezi</h1></div><p class="meta">Arızanı anla, maliyetini öğren — sonra çağır.</p><h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:30px 0 0">Cihazını seç</h2><div class="katlar">${blogCihazKartlari}</div><h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:34px 0 0">Konu başlıkları</h2><div class="katlar konu">${blogKonuKartlari}</div><p class="kat-not">Belirli bir cihaza bağlı olmayan yazılar bu iki başlıkta toplanır: mevzuat, enerji ve fatura yazıları <a href="/blog/kategori/genel/">Genel</a>'de; onarım hakkı, cihaz ömrü ve döngüsel ekonomi yazıları <a href="/blog/kategori/surdurulebilirlik/">Sürdürülebilirlik</a>'te.</p><div class="bloghead" style="margin-top:38px"><h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:0">Tüm yazılar</h2><input id="blogSearch" class="blogsearch" type="search" autocomplete="off" placeholder="Yazılarda ara…" aria-label="Bilgi merkezinde ara"></div><div class="bloglist">${cards}</div><p id="blogBos" class="blogbos" style="display:none">Aramanı karşılayan yazı yok — farklı bir kelime dene.</p>${BLOG_CTA("", "blog-hub")}<script>${SEARCH_JS}</script>`,
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

// ═══ ⛔ ŞART 2 (YK #35, bağlayıcı): "SERVİS ÇAĞIR" ÇAĞRISI ÖLÇÜLEBİLİR ═══════════════════
// `rehber_click` gibi tek başına yorumlanamayan bir sayaç istenmedi: her servis çağrısı
// GERÇEK bir olay olarak (`servis_cagir`) ve KAYNAK AYRIMLI düşer.
//   kaynak → hangi sayfa   (tamir-hub | tamir-<cihaz-slug>)
//   katman → hangi blok    (satir = hata kodu/belirti satırı · cta = sayfa sonu çağrısı ·
//                           bos-kategori = içeriğimiz olmayan cihaz kartının altı)
//   giris  → satırdan geldiyse hangi kod/belirti (ör. "E24") — hangi girişin servise
//            döndüğü ölçülebilsin diye; Rıza'nın "satın alma öncesi merak" tezinin testi bu.
// Ayrıca hedef adrese `?kaynak=` eklenir: uygulamadaki `servis_click`/`diagnose_start`
// olayları da `gelis` alanıyla aynı kaynağı taşır (src/App.jsx) → huni uçtan uca bağlanır.
// Olay yolu: `window.va` kuyruğu sayfa şablonunda zaten tanımlı (Vercel Analytics).
const cagirHref = (kaynak) => `/?kaynak=${encodeURIComponent(kaynak)}`;
const CAGIR_JS = (kaynak) => `<script>(function(){var K=${JSON.stringify(kaynak)};
document.addEventListener("click",function(e){var t=e.target;if(!t||!t.closest)return;var el=t.closest("[data-cagir]");if(!el)return;
try{window.va&&window.va("event",{name:"servis_cagir",data:{kaynak:K,katman:el.getAttribute("data-cagir"),giris:el.getAttribute("data-giris")||""}});}catch(_){}},true);})();</script>`;

// ⛔ ŞART 1 (YK #35, bağlayıcı): /tamir/ altında HİÇBİR YERDE fiyat geçmez — "yakında" da yok.
// Gözle kontrol edilmez, build denetler: üretilen HTML'in tamamı (görünen metin + meta +
// JSON-LD + link adresleri) taranır, eşleşme varsa build DURUR.
// `ücretsiz` serbesttir (fiyat değil, fiyatın yokluğudur) — desende `ücret(?!siz)` ile ayrıldı.
const FIYAT_DESENI = /(₺|\bTL\b|\blira\b|fiyat|ücret(?!siz)|maliyet|bedel|\bpara\b|tarife)/i;
function fiyatDenetimi(dosyalar) {
  const ihlal = [];
  for (const f of dosyalar) {
    const m = fs.readFileSync(f, "utf8").match(FIYAT_DESENI);
    if (m) ihlal.push(`${path.relative(DIST, f)} → "${m[0]}"`);
  }
  if (ihlal.length) {
    console.error(`[build-blog] ⛔ YK #35 ŞART 1 İHLALİ — /tamir/ altında fiyat ifadesi:\n  ${ihlal.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`[build-blog] ✓ YK #35 şart 1: ${dosyalar.length} /tamir/ sayfasında fiyat ifadesi YOK.`);
}

// /tamir/ kapanışı — aynı sadeleştirme, ama TEK buton: fiyat/maliyet kelimesi bu ağaçta
// yasak (YK #35 şart 1), ikinci kapı basılamaz. Zaten istenen de "servis bul butonu standart".
// /tamir/ kapanışı — 20 Ağu'da diğerleriyle AYNI hâle geldi (Tolga: "tamir merkezini de
// aynı yap"): aynı başlık, aynı iki kapı.
// ⛔ TEK FARK ZORUNLU: ikinci kapının metni "Tahmini MALİYETİ…" olamaz — bu ağaçta fiyat
// kelimesi yasak (YK #35 şart 1) ve build ihlalde DURUYOR. `FIYAT_DESENI` "ücret" i
// yakalarken "ücretsiz"i bilerek dışarıda bırakıyor (`ücret(?!siz)`), o yüzden kapı
// "Ücretsiz teşhis et" olarak yazıldı: yapı ve hedef aynı, kelime kurala uygun.
const TAMIR_CTA = (kaynak, cihazSlug = "") =>
  `<div class="kopru kopru-kapanis"><p><strong>${KAPANIS_BASLIK}</strong></p>` +
  `<div class="kopru-cift">${SERVIS_BTN(cihazSlug, kaynak)}` +
  `<a class="kopru-btn kopru-teshis" href="${kapanisHref(cihazSlug, kaynak, false)}" data-kopru="teshis-kapanis">Ücretsiz teşhis et →</a>` +
  `</div></div>`;

// Rehber kartı — kart görseli sözleşmesi `postGorsel` ile ORTAK (19 Ağu'da tek kaynağa
// indirildi; önce burada ayrı bir kopya vardı ve blog kartları ikonda kalmıştı).
// Rehber kaydında slug ile yazı ayrı alanlarda duruyor, o yüzden birleştirilip veriliyor.
const rehberGorsel = (r) => postGorsel({ slug: r.slug, category: r.post.category, images: r.post.images });

// ── ① KATMAN VERİSİ + GUARD'LAR ───────────────────────────────────────────────
// Kayıtlar `src/hata-kodlari.js`'te; burada yalnız blog yazısıyla ve rehber kaydıyla eşlenir.
const rehberSlugu = new Map(kendiRehberler.map((r) => [r.slug, r]));
const katVeri = KATEGORILER.map((k) => {
  const kayitlar = hataKoduKayitlari(k.kaynak).map((g) => ({
    ...g,
    post: g.yazi ? posts.find((p) => p.slug === g.yazi) : null,
    rehberMeta: g.rehber ? rehberSlugu.get(g.yazi) : null,
  }));
  return { ...k, kayitlar, rehberler: kendiRehberler.filter((r) => r.cihaz === k.kaynak) };
});
const tumKayitlar = katVeri.flatMap((k) => k.kayitlar.map((g) => ({ ...g, cihaz: k.ad, katSlug: k.slug })));
// (a) Kayıt bir yazıya bağlıysa o yazı GERÇEKTEN olmalı — yoksa kırık link basardık.
const kayipYazi = tumKayitlar.filter((g) => g.yazi && !g.post);
if (kayipYazi.length) {
  console.error(`[build-blog] ⛔ /tamir/ ① katman: blog yazısı YOK → ${kayipYazi.map((g) => g.yazi).join(", ")}`);
  process.exit(1);
}
// (b) `rehber: true` işaretli kayıt, onarim-rehberleri.js'te `kendi: true` olarak KAYITLI olmalı.
const kayipRehber = tumKayitlar.filter((g) => g.rehber && !g.rehberMeta);
if (kayipRehber.length) {
  console.error(`[build-blog] ⛔ /tamir/ ① katman: rehber kaydı yok → ${kayipRehber.map((g) => g.yazi).join(", ")}`);
  process.exit(1);
}
// (c) ② KENDİN-ÇÖZ BAĞLAMA DENETİMİ (YK #35): canlı 5 rehberin HEPSİ bir giriş satırından
//     erişilebilir olmalı; biri katmana bağlanmadıysa kullanıcı ona hiç ulaşamaz.
const baglanmayanRehber = kendiRehberler.filter((r) => !tumKayitlar.some((g) => g.rehber && g.yazi === r.slug));
if (baglanmayanRehber.length) {
  console.error(`[build-blog] ⛔ /tamir/ ② katman: rehber hiçbir girişe bağlı değil → ${baglanmayanRehber.map((r) => r.slug).join(", ")}`);
  process.exit(1);
}

// Giriş kartı — AYRI BİLEŞEN AÇILMADI, ortak `.card` kalıbı (YK #32).
//   kendi rehberimiz varsa  → kapak/ikon + zorluk·süre·adım meta'sı, "Kendin çöz" etiketi
//   yalnız yazımız varsa    → "Ne demek, ne yapmalı"
//   ikisi de yoksa          → doğrudan SERVİS yolu (ölçülen `servis_cagir` olayı)
// ⛔ Yazının kendi `description`'ı BASILMAZ: o metinler fiyat ifadesi içeriyor, bu katman
//    fiyatsız (YK #35 şart 1). Kartta `anlam` satırı görünür.
const girisKarti = (k, g) => {
  // KART GÖRSELİ — Tolga, 20 Ağu: "tamir ile ilgili ise ilgili insanlı görsel,
  // bilgilendirme ise insansız". Ayrım kaynaktaki `tip` alanından geliyor, elle liste yok:
  //   kod · belirti · kendin-çöz rehberi → TAMİR işi   → "Benservis ustası" seti (insanlı)
  //   ayar                               → BİLGİLENDİRME → insansız set
  // Not: rehber kartı da artık cihazın usta karesini basıyor; önce yazının kendi kapağını
  // basıyordu ama o da cihaz karesine çözülüyordu (yani zaten insansızdı) — şimdi kural
  // içerik tipine göre işliyor. Görsel yoksa eski SVG ikonuna düşer, kart boş kalmaz.
  const tamirIsi = !!g.rehberMeta || g.tip === "kod" || g.tip === "belirti";
  const kartFoto = tamirIsi ? merkezFotosu(k.slug, TAMIR_KOK) : merkezFotosu(k.slug);
  const ikon = kartFoto
    ? `<div class="card-ic kapak"><img src="${kartFoto}" width="96" height="64" loading="lazy" decoding="async" alt=""></div>`
    : `<div class="card-ic">${iconSvg(k.ad, "")}</div>`;
  const etiket = g.rehberMeta ? "Kendin çöz" : TIP_ETIKET[g.tip];
  const meta = g.rehberMeta
    ? `${g.rehberMeta.zorluk} · ${g.rehberMeta.sure} · ${g.rehberMeta.adim} adım · Türkçe`
    : g.post
      ? "Ne demek, ne yapmalı · Türkçe"
      : "Servis işi — yakınındaki servisi bul →";
  const href = g.post ? `/blog/${g.post.slug}/` : cagirHref(`tamir-${k.slug}`);
  const ek = g.post ? "" : ` data-cagir="satir" data-giris="${esc(g.giris)}"`;
  return `<a class="card${g.post ? "" : " servis"}" href="${href}"${ek}>${ikon}<div class="card-body"><span class="cat">${esc(etiket)}</span><h2>${esc(g.giris)}</h2><p>${esc(g.anlam)}</p><span class="tamir-meta">${esc(meta)}</span></div></a>`;
};

// ② KATEGORİ SAYFALARI — artık rehberi olmayan cihazda da basılır (YK #35 erken uyarı ①:
// "hata kodu katmanı 9 boş kategoriyi doldurmalı"). Basılma ölçütü: en az bir giriş kaydı.
// Hiç kaydı olmayan cihaz için sayfa AÇILMAZ — boş sayfa "thin content" olur, hub'da dürüst kalır.
const tamirliKat = katVeri.filter((k) => k.kayitlar.length);
const basilanTamir = [];
for (const k of tamirliKat) {
  const canonical = `${SITE}/tamir/${k.slug}/`;
  const kaynak = `tamir-${k.slug}`;
  const rehberSayisi = k.kayitlar.filter((g) => g.rehberMeta).length;
  const head =
    ldTag({
      "@context": "https://schema.org", "@type": "CollectionPage",
      name: `${k.ad} hata kodları ve arıza belirtileri`, url: canonical, inLanguage: "tr-TR",
      isPartOf: { "@type": "CollectionPage", name: "Tamir Merkezi", url: `${SITE}/tamir/` },
      mainEntity: {
        "@type": "ItemList", numberOfItems: k.kayitlar.length,
        itemListElement: k.kayitlar.map((g, i) => ({
          "@type": "ListItem", position: i + 1, name: g.giris,
          ...(g.post ? { url: `${SITE}/blog/${g.post.slug}/` } : {}),
        })),
      },
    }) +
    ldTag(crumb([
      { name: "Ana Sayfa", item: `${SITE}/` },
      { name: "Tamir Merkezi", item: `${SITE}/tamir/` },
      { name: k.ad, item: canonical },
    ]));
  // Gruplar: kod → belirti → ayar. Boş grup başlığı basılmaz.
  const gruplar = HATA_KODU_SIRA.map((t) => {
    const liste = k.kayitlar.filter((g) => g.tip === t);
    if (!liste.length) return "";
    return `<h2 class="katbaslik">${esc(TIP_BASLIK[t])}</h2><div class="bloglist">${liste.map((g) => girisKarti(k, g)).join("")}</div>`;
  }).join("");
  fs.mkdirSync(path.join(DIST, "tamir", k.slug), { recursive: true });
  const dosya = path.join(DIST, "tamir", k.slug, "index.html");
  fs.writeFileSync(
    dosya,
    page({
      title: `${k.ad} hata kodları ve arıza belirtileri — ne demek, ne yapmalı`,
      desc: `${k.ad} için hata kodlarının ve sık belirtilerin karşılığı: elindeki kodu ya da belirtiyi seç, ne demek olduğunu gör, kendin deneyebileceğin adım varsa uygula — yoksa yakınındaki servise ulaş.`,
      canonical,
      head,
      body: `<a class="geri" href="/tamir/">← Tamir Merkezi</a>${heroFor(k.ad, "", merkezFotosu(k.slug, TAMIR_KOK), KAVRAM_SLUG.has(k.slug))}<h1>${esc(k.ad)} — hata kodu ve belirti</h1><p class="meta">${k.kayitlar.length} giriş · ${rehberSayisi} kendin-çöz rehberi</p><p class="kat-not">Elindeki <strong>hata kodunu</strong> ya da <strong>belirtiyi</strong> seç: ne demek olduğunu okursun, kendin güvenle deneyebileceğin bir adım varsa oraya, yoksa doğrudan servis yoluna çıkarsın.${rehberSayisi ? ` <strong>Bakım seviyesi adımlar: temizlik, filtre, kontrol, ayar. Söküm ve parça değişimi yok.</strong>` : ""}</p>${gruplar}${TAMIR_CTA(kaynak, CIHAZ_SLUG.has(k.slug) ? k.slug : "")}${CAGIR_JS(kaynak)}`,
    })
  );
  basilanTamir.push(dosya);
}

// ① HUB — cihaz kategorisi ızgarası (ORTAK `katIzgarasi`; /blog/ ve /kilavuzlar/ ile aynı).
// Rozet artık "rehber" değil "giriş" sayar: kartın arkasında hata kodu + belirti + ayar +
// varsa kendi rehberimiz duruyor (YK #35 üç katmanlı düzen).
// İçeriği olmayan kategoride "yakında" YAZILMAZ (YK #32) — dürüst hâl + ölçülen servis yolu.
// Hub aramasının süzdüğü liste: 11 cihazın TÜM girişleri tek düzlemde (hata kodu ·
// belirti · ayar · kendin-çöz). 20 Ağu (Tolga: "aynı şeyi tamir merkezine de yap") —
// kılavuzlarla aynı gerekçe: girişler kategori sayfalarına dağılmıştı, "E22" arayan
// kullanıcı cihazları tek tek açmak zorundaydı. Kart metni hata kodunu, belirtiyi ve
// anlam satırını taşıyor, üçünden de bulunuyor.
// ⛔ Kart üreteci `girisKarti` AYNEN kullanıldı → /tamir/ fiyat yasağı (YK #35 şart 1)
// kendiliğinden korunuyor; build denetimi bunu doğruluyor.
const tumGirisKartlari = katVeri.flatMap((k) => k.kayitlar.map((g) => girisKarti(k, g))).join("");

const katKartlari = katIzgarasi(
  katVeri.map((k) => ({
    ...k, sayi: k.kayitlar.length, url: `/tamir/${k.slug}/`, birim: "giriş",
    bosRozet: "İçerik yok", bosNot: "Bu cihaz için hata kodu ya da belirti sayfası yayınlamadık.",
  })),
  "giriş",
  TAMIR_KOK
);

fs.mkdirSync(path.join(DIST, "tamir"), { recursive: true });
const tamirHub = path.join(DIST, "tamir", "index.html");
fs.writeFileSync(
  tamirHub,
  page({
    title: "Tamir Merkezi — hata kodu, belirti ve kendin-çöz adımları",
    desc: "Cihazının hata kodu ne demek, belirtisi neyi işaret ediyor, kendin ne yapabilirsin? Cihazını seç; kodundan ya da belirtinden başla, gerekiyorsa yakınındaki servise ulaş.",
    canonical: `${SITE}/tamir/`,
    head:
      ldTag({
        "@context": "https://schema.org", "@type": "CollectionPage",
        name: "Tamir Merkezi", url: `${SITE}/tamir/`, inLanguage: "tr-TR",
        mainEntity: {
          "@type": "ItemList", numberOfItems: tamirliKat.length,
          itemListElement: tamirliKat.map((k, i) => ({
            "@type": "ListItem", position: i + 1, name: `${k.ad} hata kodları ve belirtileri`, url: `${SITE}/tamir/${k.slug}/`,
          })),
        },
      }) +
      ldTag(crumb([
        { name: "Ana Sayfa", item: `${SITE}/` },
        { name: "Tamir Merkezi", item: `${SITE}/tamir/` },
      ])),
    genis: true,
    body: `<a class="geri" href="/">← Ana sayfa</a><div class="bloghead"><h1>Tamir Merkezi</h1></div><p class="meta">Hata kodun mu var, belirtin mi? Önce ne olduğunu öğren — sonra çağır.</p><h2 class="katbaslik">Cihazını seç</h2><div class="katlar">${katKartlari}</div><div class="bloghead" style="margin-top:38px"><h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:0">Tüm girişler</h2><input id="blogSearch" class="blogsearch" type="search" autocomplete="off" placeholder="Hata kodu, belirti ya da cihaz ara…" aria-label="Tamir Merkezinde ara"></div><div class="bloglist">${tumGirisKartlari}</div><p id="blogBos" class="blogbos" style="display:none">Aramanı karşılayan giriş yok — hata kodunu ya da belirtiyi farklı yaz.</p><p class="kat-not"><strong>Soluk görünen</strong> cihazlarda henüz yayınlanmış hata kodu ya da belirti sayfamız yok — <a href="${cagirHref("tamir-hub")}" data-cagir="bos-kategori">yakınındaki servisi bul →</a></p>${TAMIR_CTA("tamir-hub")}${CAGIR_JS("tamir-hub")}<script>${SEARCH_JS}</script>`,
  })
);
basilanTamir.push(tamirHub);
fiyatDenetimi(basilanTamir);

// ── BLOGDA FİYAT SIFIR — TÜM KORPUS (YK Kararı #46, 5 Ağu 2026, Tolga) ───────────────────
// "Bloglarda hiçbir fiyat bildirimi olamaz, olmamalı." — 3 Ağu'nun DAR kapsamı kalktı.
//
// ESKİ KAPSAM (3 Ağu, YK #35): yalnız HATA_KODU_KATMANI'ndan bağlanan 48 yazı; adanmış
// "…tamiri kaç para" sayfaları bilinçle DIŞARIDA bırakılmıştı. #46 o istisnayı kaldırdı:
// fiyatın tek yüzeyi teşhis ekranıdır, blog TL rakamı yazmaz.
//
// 7 Ağu ölçümü (bu kapsam genişlemesinin gerekçesi): dar kapsam yüzünden `camasir-makinesi-
// su-atmiyor` üç süpürmede birden atlanmıştı — Tamir Merkezi'ne bağlı olmadığı için guard
// görmüyordu, adanmış fiyat sayfası olmadığı için de listelere girmiyordu.
//
// ⚠️ Bu denetim TL RAKAMINI arar, "ücretsiz" ifadesini DEĞİL — bedelsizlik bir fiyat vaadi
// değil, dönüşüm mesajıdır ve kalması istenir.
const TL_RAKAMI = /[\d.]{3,}\s*(?:₺|\bTL\b)|₺\s*[\d.]{3,}/;
const fiyatIhlal = [];
for (const p of posts) {
  const dosya = path.join(OUT, p.slug, "index.html");
  if (!fs.existsSync(dosya)) continue;
  const m = fs.readFileSync(dosya, "utf8").match(TL_RAKAMI);
  if (m) fiyatIhlal.push(`/blog/${p.slug}/ → "${m[0].trim()}"`);
}
if (fiyatIhlal.length) {
  console.error(
    `[build-blog] ⛔ YK #46 FİYAT İHLALİ — blog sayfasında TL rakamı (istisna YOK):\n  ` +
      fiyatIhlal.join("\n  ") +
      `\n  → Rakamı kaldır, yerine ücretsiz teşhis yönlendirmesi koy.`
  );
  process.exit(1);
}
console.log(`[build-blog] ✓ YK #46: ${posts.length} blog sayfasının TAMAMINDA TL rakamı YOK (FAQ şeması dahil).`);

// ── TUTULMAYAN VAAT — GÖVDE KALIBI (YK #46, 7 Ağu: guard'ın kör noktası kapatıldı) ────────
// 3 Ağu'nun guard'ı TL RAKAMINI arıyordu, VAAT CÜMLESİNİ değil — bu yüzden 25 sayfa üç gün
// boyunca "2026 tahmini fiyatları paylaşıyoruz" derken sayfada fiyat yokken sessiz kaldı.
// Kalıplar PAZ'ın 6 Ağu teslimindendir; 79 yazının gövdesine karşı test edilmiş (40/40).
//
// ⚠️ 7 Ağu DÜZELTMESİ (FE, ölçümle): PAZ'ın 1. kalıbı `/tahmini (tamir |servis )?fiyat/`
// SAHTE POZİTİF üretiyordu — "tahmini fiyatı önceden bil", "tahmini fiyatı öğrenebilir
// miyim?" gibi TAVSİYE cümlelerini vaat sanıyordu (7 sayfa; üçü PAZ'ın kendi "dokunma"
// listesindeydi). Kalıba yıl öneki eklendi. Ölçüm (origin/main, düzeltme öncesi hâl):
// geniş kalıp 49 sayfa · dar kalıp 42 sayfa · farkın 7'si de tavsiye cümlesi.
// Yani daraltma tek bir gerçek vaadi kaçırmıyor, yalnız gürültüyü kesiyor — build'i
// DURDURAN bir denetimde sahte pozitif, denetimin kendisini devre dışı bıraktırır.
const VAAT_KALIPLARI = [
  /20\d\d (için )?tahmini (tamir |servis )?fiyat/i,
  /fiyatlar(ı|ını|ın) (paylaşıyoruz|anlatıyoruz|bulacaksın|topladık|veriyoruz)/i,
  /20\d\d (İstanbul )?tahminleri/i,
  /parça parça .*(fiyat|tahmin)/i,
  /20\d\d fiyatlar/i,
];
const govdeVaat = [];
for (const p of posts) {
  // gövde + FAQ cevapları (FAQ, FAQPage JSON-LD'ye de basıldığı için Google'a giden metindir)
  const govde = (p.html || "") + " " + (p.faq || []).map((s) => `${s.q} ${s.a}`).join(" ");
  const k = VAAT_KALIPLARI.find((re) => re.test(govde));
  if (k) govdeVaat.push(`${p.slug} → ${(govde.match(k) || [""])[0]}`);
}
if (govdeVaat.length) {
  console.error(
    `[build-blog] ⛔ TUTULMAYAN VAAT — gövde fiyat vaat ediyor ama sayfada rakam yok (YK #46):\n  ` +
      govdeVaat.join("\n  ") +
      `\n  → Vaat cümlesini ücretsiz teşhis yönlendirmesine çevir (metin PAZ'da).`
  );
  process.exit(1);
}
console.log(`[build-blog] ✓ YK #46: ${posts.length} sayfanın gövdesinde tutulmayan fiyat vaadi YOK.`);

// ── TUTULMAYAN SERP SÖZÜ — UYARI (build'i DURDURMAZ) ─────────────────────────────────────
// Fiyat gövdeden kalktı ama title/description hâlâ "2026 tahmini fiyatları" vaat ediyorsa
// kullanıcı aramada gördüğü sözü sayfada bulamaz: CTR'ı değil, GÜVENİ yakar.
// ⛔ Metin PAZ'ın alanı ([[feedback_rol_siniri]]) → FE düzeltmez, yalnız görünür kılar.
// Build'i durdurmuyor: durdursaydı bu koşuda fiyat kaldırma işi hiç yayına giremezdi.
// KAPSAM (7 Ağu): 48 bağlı yazı değil, TÜM korpus — #46 istisnasız.
//
// ⚠️ 7 Ağu ÖLÇÜT DEĞİŞİKLİĞİ: eski ölçüt `/fiyat|maliyet|kaç para|ücret/` idi ve korpus
// geneline açılınca 13 sayfa basıyordu — ama 6'sı PAZ'ın #46 için YENİ YAZDIĞI onaylı
// başlıklardı ("Çamaşır makinesi tamiri: fiyatı ne belirler?"). O başlık fiyat VAAT
// etmiyor, fiyatın neden değiştiğini anlatıyor; uyarı doğru işi hatalı gösteriyordu.
// Yeni ölçüt RAKAM VAADİ arıyor (gövde denetimiyle aynı kalıplar) — kırık olan tam da bu.
//
// ⚠️ 10 AĞU GENİŞLETMESİ (FE, Tolga: _"guard'ı da genişlet"_) — RAKAMSIZ VAAT KÖR NOKTASI.
// 7 Ağu'nun ölçütü RAKAM/YIL arıyordu, dolayısıyla ÇIPLAK ÜCRET ADINI kaçırıyordu:
// `camasir-makinesi-su-atmiyor` başlığı "…nedenleri ve tamir ücreti" diyor — tek rakam yok,
// ama aramada ücret sözü veriyor, sayfada karşılığı yok. Guard bu yüzden aynı sayfa için
// "0 tanesi BAŞLIKTA" diyordu; kırıklık YK #46 deploy'unun canlı doğrulamasında (10 Ağu)
// elle görüldü. Aşağıdaki İKİNCİ kalıp seti ad öbeğinin kendisini arar.
//
// ⛔ 7 Ağu'nun dersi tekrarlanmadı — geniş kalıp (`/fiyat|maliyet|ücret/`) PAZ'ın ONAYLI
// AÇIKLAYICI başlıklarını yakıyordu. Bu yüzden yazılmadan önce 79 yazıya karşı ölçüldü:
//   · ham eşleşme 2 → biri `beyaz-esya-servis-ucreti` ("Beyaz eşya servis ücreti: keşif
//     bedeli NASIL İŞLER?") = sahte pozitif, tam da 7 Ağu'da yanan tip.
//   · açıklayıcı istisnası eklendikten sonra 1 → yalnız gerçek kırık başlık.
// Kural: "ücret NASIL İŞLER / NEYDEN OLUŞUR / NE BELİRLER" bir vaat değil, bir açıklamadır.
const RAKAMSIZ_VAAT_KALIPLARI = [
  /\b(tamir|servis|bakım|montaj|onarım|değişim|dolum)\s+(ücreti|ücretleri|bedeli|fiyatı|fiyatları)\b/i,
  /(kaç para|kaç TL|ne kadar tutar|ne kadara mal)/i,
  /(fiyat listesi|ücret tarifesi|fiyat tarifesi)/i,
];
const ACIKLAYICI_ISTISNA =
  /(ne belirler|neyin belirled|nasıl belirlen|nasıl işler|nasıl hesaplan|neyden oluşur|dahil mi|düşülür mü|ücretsiz)/i;

const sozler = [];
for (const p of posts) {
  const rakamVaadi = (s) => VAAT_KALIPLARI.some((re) => re.test(s || ""));
  const rakamsizVaat = (s) =>
    RAKAMSIZ_VAAT_KALIPLARI.some((re) => re.test(s || "")) && !ACIKLAYICI_ISTISNA.test(s || "");
  for (const alan of ["title", "description"]) {
    const metin = p[alan] || "";
    const kalip = rakamVaadi(metin)
      ? { tur: "rakam", re: VAAT_KALIPLARI.find((re) => re.test(metin)) }
      : rakamsizVaat(metin)
        ? { tur: "rakamsız", re: RAKAMSIZ_VAAT_KALIPLARI.find((re) => re.test(metin)) }
        : null;
    if (kalip) sozler.push({ slug: p.slug, alan, tur: kalip.tur, esles: (metin.match(kalip.re) || [""])[0].trim() });
  }
}
if (sozler.length) {
  const sayfa = new Set(sozler.map((s) => s.slug)).size;
  const baslikta = sozler.filter((s) => s.alan === "title").length;
  console.warn(
    `[build-blog] ⚠️  ${sayfa} sayfanın title/description'ı hâlâ FİYAT VAAT EDİYOR ama gövdede rakam yok` +
      ` (${baslikta} tanesi BAŞLIKTA — en görünür yer). Metin düzeltmesi PAZ'da:\n  ` +
      sozler.map((s) => `${s.slug} (${s.alan} · ${s.tur} vaat) → "${s.esles}"`).join("\n  ")
  );
}

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
// Kart görseli İNSANSIZ set (Tolga, 20 Ağu: "kılavuzlarda da insansız set olsun").
// Kılavuz = bilgilendirme içeriği; /tamir/'deki "ayar" kartlarıyla aynı mantık.
// ⛔ Usta (insanlı) seti BURAYA GİRMEZ — o yalnız /tamir/'in tamir içeriğine ait.
// Cihazın karesi yoksa eski SVG ikonuna düşer, kart boş kalmaz.
const kilavuzKarti = (k, m) =>
  `<a class="card" href="${esc(m.url)}" target="_blank" rel="noopener noreferrer nofollow">${
    merkezFotosu(k.slug)
      ? `<div class="card-ic kapak"><img src="${merkezFotosu(k.slug)}" width="96" height="64" loading="lazy" decoding="async" alt=""></div>`
      : `<div class="card-ic">${iconSvg(k.ad, "")}</div>`
  }<div class="card-body"><span class="cat">${esc(m.marka)}</span><h2>${esc(m.marka)} ${esc(k.ad.toLocaleLowerCase("tr"))} kullanım kılavuzu</h2><p>${esc(m.ozet || "")}</p><span class="tamir-meta">${esc(kilavuzAlanAdi(m.url))} · üreticinin resmî sayfası ↗</span></div></a>`;

// ② KATEGORİ SAYFALARI — yalnız kaydı OLAN cihaz için (boş sayfa = thin content, açılmaz).
const kilavuzluKat = kilavuzKatVeri.filter((k) => k.kayitlar.length);
for (const k of kilavuzluKat) {
  fs.mkdirSync(path.join(DIST, "kilavuzlar", k.slug), { recursive: true });
  fs.writeFileSync(
    path.join(DIST, "kilavuzlar", k.slug, "index.html"),
    page({
      title: `${k.ad} kullanım kılavuzları — üreticinin resmî sayfası`,
      desc: `${k.ad} markalarının resmî kullanım kılavuzu sayfaları, Türkçe özetleriyle. Kılavuzu üreticinin kendi sitesinde açarsın; burada PDF barındırmıyoruz.`,
      canonical: `${SITE}/kilavuzlar/${k.slug}/`,
      robots: kilavuzRobots,
      body: `<a class="geri" href="/kilavuzlar/">← Kullanım Kılavuzları</a>${heroFor(k.ad, "", merkezFotosu(k.slug), KAVRAM_SLUG.has(k.slug))}<h1>${esc(k.ad)} kullanım kılavuzları</h1><p class="meta">${k.kayitlar.length} marka · her link üreticinin kendi sayfasına gider</p>${KILAVUZ_NOT}<div class="bloglist">${k.kayitlar
        .map((m) => kilavuzKarti(k, m))
        .join("")}</div>${KILAVUZ_CTA(CIHAZ_SLUG.has(k.slug) ? k.slug : "", `kilavuz-${k.slug}`)}`,
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
// ⛔ 20 Ağu (Tolga: "bu yazıyı sil buraya arama kolonu koyalım, çok kılavuz var tek tek
// bakılmasın"): hub'daki tanıtım paragrafı KALDIRILDI, yerine ARAMA + TAM LİSTE geldi.
// Asıl sorun paragraf değildi: 121 kılavuz 11 kategori sayfasına dağılmıştı, hub'da hiç
// kılavuz yoktu → kullanıcı markasını bulmak için kategorileri tek tek açmak zorundaydı.
// Artık tüm kılavuzlar hub'da ve marka/cihaz adına göre anında süzülüyor.
// Arama motoru YENİDEN YAZILMADI — /blog/ hub'ının `SEARCH_JS`'i aynı seçicilerle
// (`#blogSearch` · `.bloglist .card` · `#blogBos`) burada da çalışıyor.
const KILAVUZ_GIRIS = KILAVUZLAR.length
  ? ""
  : `<blockquote><p><strong>Bu sayfa henüz kılavuz linki içermiyor.</strong> Doldurmaya başladığımızda her cihaz grubunun altında markaların <strong>resmî kullanım kılavuzu sayfalarına</strong> giden linkler olacak — üreticinin kendi sitesindeki kılavuza, Türkçe tek satırlık &quot;bu kılavuzda ne var&quot; özetiyle.</p></blockquote>`;

// Hub aramasının süzdüğü liste: 11 kategorinin TÜM kılavuzları tek düzlemde.
// Kart metni hem markayı hem cihaz grubunu içeriyor (`kilavuzKarti`), o yüzden
// "Arçelik" de "klima" da aynı kutudan bulunuyor.
const tumKilavuzKartlari = kilavuzluKat
  .flatMap((k) => k.kayitlar.map((m) => kilavuzKarti(k, m)))
  .join("");

fs.mkdirSync(path.join(DIST, "kilavuzlar"), { recursive: true });
fs.writeFileSync(
  path.join(DIST, "kilavuzlar", "index.html"),
  page({
    title: "Kullanım Kılavuzları — üreticinin resmî kılavuzuna git",
    desc: "Beyaz eşya ve elektronik cihazların kullanım kılavuzları: üreticinin resmî kılavuz sayfasına giden doğrulanmış linkler ve Türkçe özetler. PDF barındırmıyoruz, üreticiye yönlendiriyoruz.",
    canonical: `${SITE}/kilavuzlar/`,
    robots: kilavuzRobots,
    genis: true,
    body: `<a class="geri" href="/">← Ana sayfa</a><div class="bloghead"><h1>Kullanım Kılavuzları</h1></div><p class="meta">Cihazının kılavuzunu üreticinin kendi sayfasında bul.</p>${KILAVUZ_GIRIS}<h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:30px 0 0">Cihazını seç</h2><div class="katlar">${kilavuzKartlari}</div><div class="bloghead" style="margin-top:38px"><h2 style="font-family:'Fraunces',serif;font-weight:600;font-size:22px;margin:0">Tüm kılavuzlar</h2><input id="blogSearch" class="blogsearch" type="search" autocomplete="off" placeholder="Marka ya da cihaz ara…" aria-label="Kullanım kılavuzlarında ara"></div><div class="bloglist">${tumKilavuzKartlari}</div><p id="blogBos" class="blogbos" style="display:none">Aramanı karşılayan kılavuz yok — marka adını ya da cihaz grubunu dene.</p>${KILAVUZ_NOT}${KILAVUZ_CTA("", "kilavuz-hub")}<script>${SEARCH_JS}</script>`,
  })
);

// ───────────────────────────────────────────────────────────────────────────────
// /gizlilik/ + /kullanim-kosullari/ — KVKK PAKETİ (YK Kararı #45, 5 Ağu 2026)
//
// Metin YK/IT'nin ürettiği teslim belgesinden BİREBİR alındı ve Tolga tarafından
// onaylandı (8 Ağu 2026: "kvkk metnini onaylıyorum, FE pazartesi yayınlasın").
// Kaynak: `~/Desktop/benservis-icerik/2026-08-05-KVKK-GIZLILIK-FE-TESLIM.md` §2 ve §3.
//
// ⚠️ METİN FE'NİN KALEMİNDE DEĞİL — burada yalnız YAYINLANIYOR. Hukuki metnin
//    içeriği değişecekse kaynak belge güncellenir, sonra buraya taşınır; tersi olmaz.
// ⚠️ Tebligat adresi BİLEREK YOK (Tolga kararı, 8 Ağu): şahıs işletmesi olduğumuz
//    sürece yalnız e-posta yazılır; A.Ş. kurulunca (Ekim 2026) unvan + adres eklenir.
// ✅ noindex YOK ve sitemap'e giriyor: aydınlatma metninin bulunabilir olması KVKK
//    md.10'un amacı — arama sonucunda çıkması lehimize.
const HUKUK_SON_GUNCELLEME = "5 Ağustos 2026";

// İki sayfada da tekrarlayan kapanış: kullanıcı hukuk metninden çıkarken huniye dönsün.
const HUKUK_CAPRAZ = (oteki) =>
  `<p class="kat-not">İlgili sayfa: <a href="${oteki.url}">${esc(oteki.ad)}</a> · Sorularınız için <a href="mailto:info@benservis.com">info@benservis.com</a> · <a href="tel:+905307105585">0530 710 55 85</a></p>`;

const GIZLILIK_GOVDE = `<article>
<h1>Gizlilik ve Kişisel Verilerin Korunması</h1>
<p class="meta">Son güncelleme: ${HUKUK_SON_GUNCELLEME}</p>
<p>Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun (KVKK) 10. maddesi uyarınca aydınlatma yükümlülüğümüzü yerine getirmek için hazırlanmıştır.</p>

<h2>Veri sorumlusu</h2>
<p><strong>Benservis</strong> — Tolga İldaser (şahıs işletmesi)<br>E-posta: <a href="mailto:info@benservis.com">info@benservis.com</a><br>Telefon: <a href="tel:+905307105585">0530 710 55 85</a></p>
<p><em>(Benservis A.Ş.'nin kuruluşu tamamlandığında veri sorumlusu, şirket unvanı ve tebligat adresiyle güncellenecektir.)</em></p>

<h2>Hangi verileri işliyoruz</h2>
<table><thead><tr><th>Ne zaman</th><th>Hangi veriler</th><th>Neden</th></tr></thead><tbody>
<tr><td><strong>Arıza teşhisi yaptığınızda</strong></td><td>Cihaz türü, marka, arıza tarifi, yaklaşık konum (ilçe)</td><td>Olası arızayı ve tahmini maliyeti gösterebilmek; hizmetin kalitesini ölçmek. <strong>Bu kayıt anonimdir; adınız veya telefonunuz saklanmaz.</strong></td></tr>
<tr><td><strong>Sesli anlatım kullandığınızda (🎤)</strong></td><td>Ses kaydınız</td><td>Yalnızca metne çevirmek için. <strong>Ses kaydı sunucumuzda saklanmaz</strong> — çeviri biter, kayıt silinir. Metin, teşhis için işlenir.</td></tr>
<tr><td><strong>Servis talebi/iş kaydı oluşturduğunuzda</strong></td><td>Ad-soyad, telefon, adres, ilçe, cihaz ve arıza bilgisi</td><td>Talebinizi uygun servise iletmek, sizinle iletişim kurmak</td></tr>
<tr><td><strong>İkinci el ilanı veya alım talebi verdiğinizde</strong></td><td>Ad-soyad, telefon, e-posta, ürün ve fiyat bilgisi</td><td>İlanı yayınlamak, alıcı-satıcı eşleştirmesi yapmak</td></tr>
<tr><td><strong>Servis olarak başvurduğunuzda</strong></td><td>İşletme/kişi adı, telefon, hizmet bölgesi</td><td>Servis ağına dahil etmek, iş yönlendirmek</td></tr>
<tr><td><strong>Sipariş/ödeme adımında</strong></td><td>Sipariş ve ödeme kaydı</td><td>Kaydı tutmak, yasal saklama yükümlülüğünü yerine getirmek</td></tr>
</tbody></table>
<p><strong>Toplamadığımız veriler:</strong> T.C. kimlik numarası, kart bilgisi (ödeme sağlayıcısında işlenir, bize gelmez), sağlık verisi, biyometrik veri ve KVKK md.6 kapsamındaki diğer özel nitelikli veriler.</p>

<h2>İşleme amaçlarımız ve hukuki sebep</h2>
<ul>
<li><strong>Sözleşmenin kurulması/ifası (KVKK md.5/2-c):</strong> talebinizi servise iletmek, ilan yayınlamak, sipariş kaydı tutmak</li>
<li><strong>Meşru menfaat (md.5/2-f):</strong> hizmetin çalıştığını ölçmek (anonim teşhis kaydı), kötüye kullanımı önlemek (istek sınırlama), hizmet kalitesini geliştirmek</li>
<li><strong>Hukuki yükümlülük (md.5/2-ç):</strong> mali kayıtların yasal süre boyunca saklanması</li>
<li><strong>Açık rıza (md.5/1):</strong> yalnızca ticari elektronik ileti göndermemiz gerektiğinde — bu rıza olmadan tanıtım mesajı gönderilmez</li>
</ul>

<h2>Kimlerle paylaşıyoruz</h2>
<ul>
<li><strong>Talebinizi ilettiğiniz servis(ler)le</strong> — yalnızca işi yapabilmesi için gereken kadarıyla (ad, telefon, adres, arıza bilgisi)</li>
<li><strong>Altyapı sağlayıcılarımızla (yurt dışı sunucu barındırma dahil):</strong> Supabase (veritabanı), Vercel (barındırma), Upstash (istek sınırlama), OpenAI (sesin metne çevrilmesi ve teşhis metni üretimi)</li>
<li><strong>Yasal olarak zorunlu olduğunda</strong> yetkili kamu kurum ve kuruluşlarıyla</li>
<li><strong>Reklam/veri satışı yapmıyoruz.</strong> Verileriniz üçüncü taraflara pazarlama amacıyla satılmaz veya kiralanmaz.</li>
</ul>
<blockquote><p>⚠️ <strong>Yurt dışına aktarım:</strong> yukarıdaki sağlayıcıların sunucuları yurt dışında bulunabilir; hizmeti kullanabilmeniz için bu aktarım gereklidir ve KVKK md.9 çerçevesinde yapılır.</p></blockquote>

<h2>Ne kadar süre saklıyoruz</h2>
<table><thead><tr><th>Veri</th><th>Süre</th></tr></thead><tbody>
<tr><td>Servis talebi / iş kaydı</td><td>İşin tamamlanmasından itibaren <strong>2 yıl</strong> (uyuşmazlık zamanaşımı)</td></tr>
<tr><td>İkinci el ilan ve talepleri</td><td>İlanın kaldırılmasından itibaren <strong>1 yıl</strong></td></tr>
<tr><td>Sipariş ve ödeme kayıtları</td><td><strong>10 yıl</strong> (vergi ve ticaret mevzuatı)</td></tr>
<tr><td>Anonim teşhis kaydı</td><td>Süresiz (kişisel veri içermez)</td></tr>
<tr><td>Ses kaydı</td><td><strong>Saklanmaz</strong> — çeviri anında silinir</td></tr>
</tbody></table>
<p>Süre sonunda veriler silinir veya anonim hale getirilir.</p>

<h2>Haklarınız (KVKK md.11)</h2>
<p>Kişisel verileriniz hakkında: işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı tarafları bilme, <strong>düzeltilmesini</strong>, <strong>silinmesini</strong> veya <strong>yok edilmesini</strong> isteme, işlemeye itiraz etme ve zararınızın giderilmesini talep etme haklarına sahipsiniz.</p>
<p>Başvurunuzu <a href="mailto:info@benservis.com"><strong>info@benservis.com</strong></a> adresine iletebilirsiniz; <strong>en geç 30 gün</strong> içinde yanıtlanır. Yanıtı yeterli bulmazsanız Kişisel Verileri Koruma Kurulu'na şikâyette bulunabilirsiniz.</p>

<h2>Çerezler ve yerel depolama</h2>
<p>Reklam veya takip çerezi kullanmıyoruz. Sitenin çalışması için tarayıcınızda <strong>yerel depolama</strong> ve <strong>service worker önbelleği</strong> kullanılır (ör. sayfaların çevrimdışı açılabilmesi). Bu önbellekte <strong>konum bilgisi ve kişisel veri tutulmaz</strong>; ikinci el sayfaları önbelleğe hiç alınmaz. Ziyaret istatistikleri, kişi bazlı olmayan ve çerez kullanmayan bir ölçümle (Vercel) toplanır.</p>
<p>Sitede Google Analytics 4, çerez kullanmayan &quot;consent mode&quot; yapılandırmasıyla çalışır: tarayıcınıza analitik çerezi yazılmaz, ölçüm anonimleştirilmiş sayfa görüntüleme sinyalleriyle yapılır.</p>

<h2>Güvenlik</h2>
<p>Veritabanımızda satır düzeyi erişim kısıtlaması (RLS) açıktır; kayıtlara yalnızca yetkili sunucu tarafı erişebilir. Genel uçlarda istek sınırlaması uygulanır. Yönetim panelleri belirteçle (token) korunur.</p>

<h2>Değişiklikler</h2>
<p>Bu metin güncellendiğinde bu sayfadaki tarih değişir. Esaslı değişikliklerde site üzerinden bilgilendirme yapılır.</p>
${HUKUK_CAPRAZ({ url: "/kullanim-kosullari/", ad: "Kullanım Koşulları" })}
</article>`;

const KOSULLAR_GOVDE = `<article>
<h1>Kullanım Koşulları</h1>
<p class="meta">Son güncelleme: ${HUKUK_SON_GUNCELLEME}</p>

<p><strong>Hizmetin niteliği.</strong> Benservis, cihaz arızanız için <strong>olası nedenleri ve tahmini maliyet aralığını</strong> gösteren, size yakın servisleri listeleyen <strong>ücretsiz</strong> bir bilgi ve yönlendirme hizmetidir.</p>

<p><strong>Teşhis ve fiyat bilgisi tahminîdir.</strong> Gösterilen olası arızalar ve maliyet aralıkları, benzer arızalardan derlenen verilere dayanır; <strong>kesin teşhis ve kesin fiyat yalnızca cihazı yerinde gören servis tarafından verilebilir.</strong> Bu bilgiler bir teklif veya taahhüt niteliği taşımaz.</p>

<p><strong>Onarım rehberleri.</strong> Sitedeki kendin-çöz rehberleri yalnızca <strong>bakım seviyesindeki</strong> işleri kapsar (temizlik, filtre, kontrol, ayar). Elektrikli cihazlarla çalışmak risk taşır: cihazın fişini çekin, emin olmadığınız işe girişmeyin. Rehberleri uygulama kararı ve sorumluluğu kullanıcıya aittir; garanti kapsamındaki cihazlarda müdahale garantiyi etkileyebilir.</p>

<p><strong>Servislerle ilişkiniz.</strong> Benservis, servis ile aramızda <strong>yönlendirme</strong> yapar; onarım sözleşmesi doğrudan sizinle servis arasında kurulur. Servisin yaptığı işin kalitesinden, fiyatından ve garantisinden servis sorumludur. Servisleri listelerken kamuya açık kayıtlardan (ör. yetkili servis kayıtları) ve kullanıcı puanlarından yararlanırız; bu bir kefalet veya kalite garantisi değildir.</p>

<p><strong>Kullanıcının yükümlülükleri.</strong> Girdiğiniz bilgilerin doğru olması, başkasının kişisel verisini izinsiz girmemek, hizmeti kötüye kullanmamak (otomatik/aşırı istek, sahte talep, sahte ilan) sizin sorumluluğunuzdadır.</p>

<p><strong>İkinci el ilanları.</strong> İlan içeriğinden ilan sahibi sorumludur. Mevzuata aykırı, yanıltıcı veya üçüncü kişi hakkını ihlal eden ilanlar kaldırılabilir.</p>

<p><strong>Sorumluluk sınırı.</strong> Hizmet "olduğu gibi" sunulur; kesintisizlik ve hatasızlık taahhüt edilmez. Tahminî bilgilere dayanarak aldığınız kararların sonuçlarından Benservis sorumlu tutulamaz.</p>

<p><strong>Fikri haklar.</strong> Sitedeki metin, görsel ve rehberler Benservis'e aittir; izinsiz çoğaltılamaz. Üçüncü taraf kaynaklara yalnızca bağlantı verilir.</p>

<p><strong>Kişisel verileriniz.</strong> <a href="/gizlilik/">Gizlilik ve Kişisel Verilerin Korunması</a> metnine bakınız.</p>

<p><strong>Uygulanacak hukuk.</strong> Türkiye Cumhuriyeti hukuku uygulanır; uyuşmazlıklarda <strong>İstanbul Anadolu Mahkemeleri ve İcra Daireleri</strong> yetkilidir. <em>(Tüketici işlemlerinde tüketicinin yerleşim yeri mahkemesi/hakem heyeti hakları saklıdır.)</em></p>

<p><strong>İletişim:</strong> <a href="mailto:info@benservis.com">info@benservis.com</a> · <a href="tel:+905307105585">0530 710 55 85</a></p>
${HUKUK_CAPRAZ({ url: "/gizlilik/", ad: "Gizlilik ve Kişisel Verilerin Korunması" })}
</article>`;

// Her iki sayfa da /tamir/ · /kilavuzlar/ ile AYNI şablonu kullanır (page()) — ayrı bir
// hukuk şablonu açılmadı; sayfa sayısı arttıkça bakılacak tek yer kalsın.
const HUKUK_SAYFALARI = [
  {
    dizin: "gizlilik",
    title: "Gizlilik ve Kişisel Verilerin Korunması — Benservis",
    desc: "Benservis'in KVKK aydınlatma metni ve gizlilik politikası: hangi verileri, neden, ne kadar süre işliyoruz; kimlerle paylaşıyoruz ve haklarınızı nasıl kullanırsınız.",
    govde: GIZLILIK_GOVDE,
  },
  {
    dizin: "kullanim-kosullari",
    title: "Kullanım Koşulları — Benservis",
    desc: "Benservis'i kullanırken geçerli koşullar: hizmetin niteliği, teşhis ve fiyat bilgisinin tahminî olması, onarım rehberlerinin kapsamı, servislerle ilişkiniz ve sorumluluk sınırları.",
    govde: KOSULLAR_GOVDE,
  },
];
for (const h of HUKUK_SAYFALARI) {
  fs.mkdirSync(path.join(DIST, h.dizin), { recursive: true });
  fs.writeFileSync(
    path.join(DIST, h.dizin, "index.html"),
    page({
      title: h.title,
      desc: h.desc,
      canonical: `${SITE}/${h.dizin}/`,
      body: `<a class="geri" href="/">← Ana sayfa</a>${h.govde}`,
    })
  );
}
console.log(`[build-blog] ✓ KVKK paketi: /${HUKUK_SAYFALARI.map((h) => h.dizin).join("/ · /")}/ basıldı (indexlenebilir, sitemap'te).`);

// lastmod = frontmatter `updated` varsa onu, yoksa `date`'i kullan (Vercel checkout dosya
// mtime'ını sıfırladığı için frontmatter sabit/güvenilir kaynaktır). Date objesi gelirse ISO'ya çevir.
const isoDate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));
const postLastmod = (p) => isoDate(p.updated || p.date);
const newest = posts.map(postLastmod).filter(Boolean).sort().reverse()[0];
const urlEntries = [
  { loc: `${SITE}/`, lastmod: newest },
  { loc: `${SITE}/blog/`, lastmod: newest },
  { loc: `${SITE}/tamir/`, lastmod: newest },
  // KVKK paketi (YK #45): aydınlatma metninin BULUNABİLİR olması md.10'un amacı — noindex
  // yok, sitemap'te var. lastmod içerik tarihidir (blogla birlikte kaymasın diye sabit).
  ...HUKUK_SAYFALARI.map((h) => ({ loc: `${SITE}/${h.dizin}/`, lastmod: "2026-08-05" })),
  // Kategori sayfaları — yalnız giriş kaydı olanlar basıldığı için hepsi gerçek içerikli.
  ...tamirliKat.map((k) => ({ loc: `${SITE}/tamir/${k.slug}/`, lastmod: newest })),
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
  // ⛔ /ikinci-el SİTEMAP'TEN ÇIKARILDI — Tolga kararı, 6 Ağu 2026 ("/ikinci-el sitemap'ten
  // çıksın, prerender yok"). Sayfa SİLİNMEDİ, site içinden erişilebilir; yalnız Google'a
  // "bunu indeksle" sinyali verilmiyor. Sebep (PAZ ölçümü, 6 Ağu): prerender olmadığı için
  // SPA rotası index.html varsayılanını basıyor → title/description ANA SAYFAYLA BİREBİR
  // aynı, yani kendi sorgusunda hiçbir şey vaat etmezken ana sayfayla çakışıyordu.
  // Geri konma şartı: sayfa prerender edilip kendi metnini bastığında (metin PAZ'da).
  ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}/`, lastmod: postLastmod(p) })),
];
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries
    .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`
);
fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

// ——— ANA SAYFA ÖN-RENDER (Tolga talimatı 9 Ağu; 17 Ağu dizin okumasından önce) ———
// SORUN: /tamir/ · /blog/ · /kilavuzlar/ bu betikten statik basılıyordu, ANA SAYFA hiç
// kapsamda değildi → `vite build`in çıkardığı çıplak SPA kabuğu kalıyordu. Ham HTML'de
// gezinilebilir TEK BİR iç link yoktu (yalnız favicon/manifest), oysa ana sayfa sitenin
// en çok tık alan sayfası (8 Ağu GSC: toplam tıkın %21'i). Googlebot ilk taramada
// buradan hiçbir yere geçemiyordu.
//
// ÇÖZÜM VE NEDEN BU: içerik `<div id="root">` İÇİNE konur. React `createRoot().render()`
// container'ı mount anında temizler (hydrateRoot DEĞİL) → SPA açılışı bozulmaz, uyarı
// üretmez. Alternatifler elendi: root DIŞINA koymak SPA yüklenince ekranda çift içerik
// bırakırdı; `<noscript>` ise gizli-metin sinyali riski taşırdı.
//
// ⛔ CLOAKING YOK: basılan her şey SPA'nin ana sayfada FİİLEN gösterdiği şeyin aynısı —
// aynı gezinme ızgarası, aynı footer linkleri. Googlebot'a kullanıcıdan farklı bir sayfa
// gösterilmiyor; yalnız aynı içerik JS'ten önce de okunabilir hâle getiriliyor.
const anaSayfaOnRender = (cihazSayfalari = []) => {
  const dosya = path.join(DIST, "index.html");
  if (!fs.existsSync(dosya)) { console.warn("[build-blog] ⚠️  dist/index.html yok — ana sayfa ön-render ATLANDI."); return; }
  let html = fs.readFileSync(dosya, "utf8");
  if (!html.includes('<div id="root"></div>')) {
    // Kabuk değiştiyse SESSİZCE geçme: enjeksiyon yapılmadığı hâlde yapılmış sanmak,
    // ölçüyü bozar (ana sayfa yine linksiz kalır ama kimse fark etmez).
    console.warn("[build-blog] ⚠️  dist/index.html'de boş `<div id=\"root\"></div>` bulunamadı — ön-render ATLANDI.");
    return;
  }
  // Öne çıkan yazılar: en yeni 8 (aynı sıralama /blog listesindekiyle tutarlı).
  const oneCikan = posts.slice(0, 8);
  const kart = (href, baslik) => `<a href="${href}">${esc(baslik)}</a>`;
  const govde =
    `<div id="on-render">` +
      `<h1>Benservis — cihazın neden bozuldu, tamiri kaça mal olur?</h1>` +
      `<p>Cihazını ve arıza belirtisini yaz; olası arızayı, tahmini maliyeti ve “tamir mi, yenisi mi” kararını ücretsiz gör. Sonuç bir ön tahmindir; kesin teşhis için yetkili servis gerekir.</p>` +
      // Gezinme ızgarası — SPA'deki YK #32 ızgarasının birebir karşılığı.
      // ⚠️ 4. kart ("Yakın Servisler") BİLEREK YOK: o bir <button>, kendi URL'i olmayan
      // SPA içi ekran. Olmayan adrese link uydurmak 404 üretirdi.
      `<nav aria-label="Site bölümleri">` +
        // Teşhis formu 18 Ağu'da kendi adresine taşındı (/teshis). SPA içi geçişle
        // açılıyor ama ARTIK GERÇEK BİR ADRESİ VAR → ön-render'dan da erişilebilir
        // olmalı; sitenin ana eylemi JS beklemeden linklenebiliyor.
        kart("/teshis", "Ücretsiz teşhis") +
        kart("/blog/", "Bilgi Merkezi") +
        kart("/tamir/", "Tamir Merkezi") +
        kart("/kilavuzlar/", "Kullanım Kılavuzları") +
      `</nav>` +
      // Cihaz ızgarasının ön-render karşılığı. SPA'deki kartlar <button> (kendi
      // URL'leri yok) ama her cihazın /tamir/<slug>/ sayfası VAR — ana sayfadan o
      // sayfalara iç link, JS çalışmadan da cihaz katmanına yol açar.
      (cihazSayfalari.length
        ? `<h2>Cihazına göre</h2><ul>` +
          cihazSayfalari.map((k) => `<li><a href="/tamir/${k.slug}/">${esc(k.ad)}</a></li>`).join("") +
          `</ul>`
        : "") +
      (oneCikan.length
        ? `<h2>Sık okunan arıza rehberleri</h2><ul>` +
          oneCikan.map((p) => `<li><a href="/blog/${p.slug}/">${esc(p.title)}</a></li>`).join("") +
          `</ul>`
        : "") +
      `<p><a href="/blog/hakkimizda/">Hakkımızda</a> · <a href="/blog/kategori/surdurulebilirlik/">Sürdürülebilirlik</a> · <a href="/gizlilik/">Gizlilik</a> · <a href="/kullanim-kosullari/">Kullanım Koşulları</a></p>` +
    `</div>`;
  // Ön-render bloğu SPA mount'a kadar görünür; tasarım dilinden sapmasın diye sade
  // tipografi (marka fontları index.html'de zaten yüklü).
  const stil =
    `<style>#on-render{max-width:760px;margin:0 auto;padding:28px 20px;font-family:'Hanken Grotesk',system-ui,sans-serif;color:#1E293B}` +
    `#on-render h1{font-family:Fraunces,Georgia,serif;font-size:26px;line-height:1.25;margin:0 0 10px}` +
    `#on-render h2{font-size:17px;margin:26px 0 10px}` +
    `#on-render p{color:#475569;font-size:15px;line-height:1.6;margin:0 0 14px}` +
    `#on-render nav{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}` +
    `#on-render nav a{border:1px solid #E2E8F0;border-radius:10px;padding:10px 14px;font-weight:600;font-size:14px}` +
    `#on-render ul{margin:0;padding-left:18px}#on-render li{margin:6px 0;font-size:14px}` +
    `#on-render a{color:#2563EB;text-decoration:none}</style>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${stil}${govde}</div>`);
  fs.writeFileSync(dosya, html);
  const linkSayisi = (govde.match(/href="\//g) || []).length;
  console.log(`[build-blog] ✓ ana sayfa ön-render edildi: ${linkSayisi} gezinilebilir iç link (önce 0).`);
};
// Cihaz linkleri FIILEN BASILAN sayfalardan gelir (tamirliKat) — liste elle
// yazilsaydi bir kategori bosaldiginda ana sayfa 404'e link vermeye devam ederdi.
anaSayfaOnRender(tamirliKat);

console.log(`[build-blog] ${posts.length} yazı + /blog + sitemap üretildi.`);
