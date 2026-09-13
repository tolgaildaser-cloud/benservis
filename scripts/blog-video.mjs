// scripts/blog-video.mjs — blog yazısına YouTube Shorts gömme (PAZ → FE föyü, 13 Eyl 2026).
//
// Veri PAZ'ın, render FE'nin: yazının frontmatter'ındaki `video` alanı
//   video: { youtubeId, title, description, uploadDate, duration }
// tek kaynaktır. Alan yoksa yazıya hiçbir şey basılmaz; sonraki Shorts yalnız frontmatter
// satırıyla eklenir, kod değişmez.
//
// NEDEN FACADE (tıklayınca yüklenen kapak), sayfa açılışında iframe DEĞİL:
//   ① YK #78 çizgisi — site çerezsiz. YouTube iframe'i sayfa açılır açılmaz yüklenseydi
//     ziyaretçi tıklamadan üçüncü taraf isteği giderdi. Açılışta yalnız i.ytimg.com kapak
//     görseli (lazy) iner; oynatıcı tıklamayla ve youtube-nocookie.com'dan gelir.
//   ② Bir iframe ~1 MB+ JS; blog trafiği mobil ağırlıklı.
// ⚠️ Kabul ölçütü ilk HTML'de `<iframe` metninin SIFIR geçmesini istiyor → oynatıcı
//   betikte createElement ile kurulur, betik metninde o etiket dizesi yazılmaz.
//
// Saf fonksiyonlar: build-blog.mjs çağırır, src/blog-video.test.js sınar.
import * as T from "../src/theme.js";

const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const ID_DESENI = /^[A-Za-z0-9_-]{11}$/;
const TARIH_DESENI = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
const SURE_DESENI = /^PT(?:(\d+)M)?(?:(\d+)S)?$/;

// "PT1M2S" → "1:02". Shorts 3 dakikayı geçmez; saat bileşeni bilerek desteklenmiyor
// (gelirse doğrulama durdurur, sessizce yanlış süre basılmaz).
export function sureMss(duration) {
  const m = SURE_DESENI.exec(duration || "");
  if (!m || (!m[1] && !m[2])) return null;
  const dk = Number(m[1] || 0), sn = Number(m[2] || 0);
  if (sn > 59) return null;
  return `${dk}:${String(sn).padStart(2, "0")}`;
}

// Build'i durduran hatalar listesi. Boş dizi = geçerli (ya da yazıda video yok).
export function videoDenetimi(posts) {
  const sorunlar = [];
  const sahip = new Map(); // youtubeId → slug (aynı video iki sayfaya girmez — kardeş sayfa kuralı)
  for (const p of posts) {
    const v = p.video;
    if (v == null) continue;
    const ad = p.slug;
    if (typeof v !== "object") { sorunlar.push(`${ad}: video alanı nesne değil`); continue; }
    if (!ID_DESENI.test(v.youtubeId || "")) sorunlar.push(`${ad}: video.youtubeId geçersiz (${v.youtubeId})`);
    if (!v.title) sorunlar.push(`${ad}: video.title yok`);
    if (!v.description) sorunlar.push(`${ad}: video.description yok`);
    if (!TARIH_DESENI.test(v.uploadDate || "")) sorunlar.push(`${ad}: video.uploadDate ISO-8601 UTC değil (${v.uploadDate})`);
    if (!sureMss(v.duration)) sorunlar.push(`${ad}: video.duration PT#M#S değil (${v.duration})`);
    if (!/<h2[\s>]/.test(p.html || "")) sorunlar.push(`${ad}: gövdede <h2> yok — video bloğunun yeri (ilk h2'nin üstü) bulunamıyor`);
    if (v.youtubeId && sahip.has(v.youtubeId)) sorunlar.push(`${ad}: ${v.youtubeId} zaten ${sahip.get(v.youtubeId)} sayfasında — bir video tek sayfaya girer`);
    else if (v.youtubeId) sahip.set(v.youtubeId, ad);
  }
  return sorunlar;
}

const kapakUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const embedUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}`;

export function videoBlok(p) {
  const v = p.video;
  if (!v) return "";
  const id = v.youtubeId;
  return `<figure class="yt-video"><button type="button" class="yt-oynat" data-yt="${esc(id)}" data-yt-baslik="${esc(v.title)}" aria-label="${esc(`Videoyu oynat: ${v.title}`)}">` +
    `<img src="${kapakUrl(id)}" width="480" height="360" loading="lazy" decoding="async" alt="">` +
    `<span class="yt-ikon" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13l11-6.5z"/></svg></span>` +
    `</button><figcaption>${esc(`Kısa video: ${v.title} · ${sureMss(v.duration)} · Oynatınca YouTube'dan yüklenir.`)}</figcaption></figure>`;
}

// Blok, gövdedeki İLK <h2>'nin hemen üstüne girer (giriş paragrafları + özet okunduktan sonra).
// Adım/kontrol görseli enjeksiyonlarından SONRA çağrılır: blok numaralı adım paragrafı değil,
// o eşleşmelere hiç girmez.
export function videoEkle(html, p) {
  if (!p.video) return html;
  const i = html.search(/<h2[\s>]/);
  if (i < 0) return html; // videoDenetimi build'i zaten durdurur
  return html.slice(0, i) + videoBlok(p) + html.slice(i);
}

export function videoLd(p) {
  const v = p.video;
  if (!v) return null;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    thumbnailUrl: kapakUrl(v.youtubeId),
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl: embedUrl(v.youtubeId),
    contentUrl: `https://www.youtube.com/shorts/${v.youtubeId}`,
  };
}

// Yalnız video alanı olan sayfanın <head>'ine girer — diğer 230 yazının CSS'i büyümez.
export const VIDEO_CSS = `<style>
.yt-video{margin:26px auto 30px;max-width:320px;padding:0}
.yt-oynat,.yt-video iframe{display:block;width:100%;aspect-ratio:9/16;border:0;border-radius:16px;overflow:hidden;background:#0F172A}
.yt-oynat{position:relative;padding:0;cursor:pointer}
.yt-oynat img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0;border-radius:0;margin:0}
.yt-ikon{position:absolute;left:50%;top:50%;width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;background:${T.BLUE};display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(15,23,42,.35);transition:transform .15s}
.yt-oynat:hover .yt-ikon,.yt-oynat:focus-visible .yt-ikon{transform:scale(1.08)}
.yt-video figcaption{margin-top:10px;font-size:13px;line-height:1.45;color:${T.MUTED};text-align:center}
</style>`;

// Tıklama → buton yerine youtube-nocookie iframe'i. referrerpolicy açık yazıldı: YouTube,
// Referer'sız gömmede "Error 153" veriyor (13 Eyl, file:// denemesinde görüldü). Ölçüm: Vercel olayı (MCP'den okunur) +
// GA4 olayı; consent default-denied bloğu sayfada zaten var, çerez yazılmaz.
export const VIDEO_JS = (slug) => `<script>(function(){var S=${JSON.stringify(slug)};
document.addEventListener("click",function(e){var t=e.target;if(!t||!t.closest)return;var b=t.closest("button[data-yt]");if(!b)return;
var id=b.getAttribute("data-yt");if(!/^[A-Za-z0-9_-]{11}$/.test(id))return;
var f=document.createElement("iframe");f.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0&playsinline=1";
f.setAttribute("allow","autoplay; encrypted-media; picture-in-picture");f.setAttribute("allowfullscreen","");f.setAttribute("referrerpolicy","strict-origin-when-cross-origin");f.title=b.getAttribute("data-yt-baslik")||"";
b.parentNode.replaceChild(f,b);
try{window.va&&window.va("event",{name:"video_oynat",data:{slug:S}});}catch(_){}
try{window.gtag&&window.gtag("event","video_oynat",{slug:S});}catch(_){}});})();</script>`;
