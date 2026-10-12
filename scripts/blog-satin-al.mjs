// scripts/blog-satin-al.mjs — parça yazılarına "satın al" bağlantısı (YK #173 (b), 12 Eki 2026).
//
// Frontmatter sözleşmesi (backlog #165 C / #166 PR-4; PAZ yazar, FE basar):
//   parca:
//     cihaz: <cihaz-slug>      # PAZAR_CIHAZLARI (ör. kombi-termosifon)
//     tur:   <parça-türü-slug> # PARCA_TURLERI   (ör. termostat-sensor)
//     urun:  <uuid>            # isteğe bağlı — eşleşen ürün varsa doğrudan /urun/:id
// Hedef: `urun` varsa `/urun/<id>`; yoksa `/pazar?parca=<tur>&cihaz=<cihaz>&k=blog-<slug>` süzgeç bağlantısı.
// Sözlükte olmayan slug yok sayılır; ikisi de geçersizse bağlantı BASILMAZ (uydurma adres yok).
//
// Yerleşim: ilk <h2>'nin hemen altı + gövde sonu. Statik HTML, React yok (#160 ilkesi).
// `parca` alanı olmayan yazının çıktısı bayt bayt aynı kalır (fonksiyonlar "" / aynı html döner).
// Olay: `blog_satin_al_click` {slug, hedef: urun|pazar} — kişisel veri yok.
import { PAZAR_CIHAZLARI, PARCA_TURLERI } from "../src/pazar-sozluk.js";
import * as T from "../src/theme.js";

export const SATIN_AL_METNI = "Bu parçayı Benservis Pazaryeri'nden satın al →";
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export function satinAlHedefi(p) {
  const f = p?.parca;
  if (!f || typeof f !== "object") return null;
  const urun = typeof f.urun === "string" && UUID_RE.test(f.urun.trim()) ? f.urun.trim().toLowerCase() : null;
  if (urun) return { href: `/urun/${urun}`, hedef: "urun" };
  const cihaz = PAZAR_CIHAZLARI.some((c) => c.slug === f.cihaz) ? f.cihaz : "";
  const tur = PARCA_TURLERI.some((t) => t.slug === f.tur) ? f.tur : "";
  if (!cihaz && !tur) return null;
  const q = new URLSearchParams();
  if (tur) q.set("parca", tur);
  if (cihaz) q.set("cihaz", cihaz);
  q.set("k", `blog-${p.slug}`.slice(0, 80));
  return { href: `/pazar?${q}`, hedef: "pazar" };
}

const baglanti = (p, yer) => {
  const h = satinAlHedefi(p);
  return h ? `<p class="satinal satinal-${yer}"><a href="${esc(h.href)}" data-satinal="${h.hedef}">${esc(SATIN_AL_METNI)}</a></p>` : "";
};

// İlk </h2>'den hemen sonra + gövde sonuna. H2 yoksa gövdenin başına.
export function satinAlEkle(html, p) {
  const ust = baglanti(p, "ust");
  if (!ust) return html;
  const m = /<\/h2>/.exec(html);
  const kes = m ? m.index + m[0].length : 0;
  return html.slice(0, kes) + ust + html.slice(kes) + baglanti(p, "alt");
}

// Stil + ölçüm betiği; yalnız bağlantı basılan yazıda. (JS şablon dizesi: yoruma ters tırnak yazılmaz.)
export const SATIN_AL_EK = (p) => !satinAlHedefi(p) ? "" :
  `<style>.satinal{margin:14px 0 18px}.satinal-alt{margin:26px 0 8px}` +
  `.satinal a{display:inline-flex;align-items:center;gap:6px;background:${T.BLUE};color:#fff;font-weight:700;font-size:15px;line-height:1.25;padding:11px 16px;border-radius:10px;text-decoration:none;box-shadow:0 1px 3px rgba(37,99,235,.28)}` +
  `.satinal a:hover{background:#1D4ED8}</style>` +
  `<script>(function(){var S=${JSON.stringify(p.slug)};document.querySelectorAll("a[data-satinal]").forEach(function(a){a.addEventListener("click",function(){` +
  `try{window.va&&window.va("event",{name:"blog_satin_al_click",data:{slug:S,hedef:a.getAttribute("data-satinal")}});}catch(_){}});});})();</script>`;
