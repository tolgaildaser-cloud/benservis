// api/odeme/_sayfa.js
// Ödeme ve sipariş sonucu sayfalarının ortak HTML kabuğu (sunucuda üretilir, noindex).
// Renkler kurumsal palet (CLAUDE.md §10): lacivert #1E293B · mavi #2563EB · kâğıt #F8FAFC.
export const RENK = { INK: "#1E293B", BLUE: "#2563EB", GREEN: "#16A34A", RED: "#DC2626", SLATE: "#64748B", HAIR: "#E2E8F0" };

// Logo: statik sayfalardaki başlıkla aynı (scripts/build-blog.mjs LOGO + WORDMARK, koyu bant renkleri).
const DISLER = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((a) => `<rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(${a} 60 51)"/>`)
  .join("");
const LOGO = `<svg width="30" height="30" viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" rx="28" fill="#2563EB"/><path d="M60 22C42 22 28 36 28 53c0 22 32 45 32 45s32-23 32-45C92 36 78 22 60 22Z" fill="#fff"/><g fill="#2563EB"><circle cx="60" cy="51" r="15"/>${DISLER}</g><circle cx="60" cy="51" r="6" fill="#fff"/></svg>`;
const MARKA = `<a class="brand" href="/" aria-label="Benservis ana sayfa">${LOGO}<span class="brand-text"><span class="wm"><span class="wm-b">ben</span><span class="wm-s">servis</span></span><span class="brand-motto">Bil, gör, çağır.</span></span></a>`;

export const kacis = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export const tl = (n) => `${Number(n || 0).toLocaleString("tr-TR")} TL`;

export function sayfaHTML(baslik, icerik, ekHead = "") {
  const { INK, BLUE } = RENK;
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>${kacis(baslik)} — Benservis</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap" />
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: #F8FAFC; font-family: 'Hanken Grotesk', sans-serif; color: ${INK}; }
    header { background: ${INK}; border-bottom: 3px solid ${BLUE}; }
    header div { max-width: 760px; margin: 0 auto; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; }
    header a { color: #fff; text-decoration: none; }
    .brand { display: flex; align-items: center; gap: 9px; }
    .brand .wm { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-weight: 700; font-size: 21px; letter-spacing: -.5px; line-height: 1; }
    .brand .wm-b { color: #fff; }
    .brand .wm-s { color: #93C5FD; }
    .brand-text { display: flex; flex-direction: column; justify-content: center; align-items: center; line-height: 1.05; }
    .brand-motto { font-size: 11px; font-weight: 500; color: #CBD5E1; margin-top: 2px; }
    .geri { font-size: 13px; font-weight: 700; border: 1.5px solid rgba(255,255,255,.55); border-radius: 999px; padding: 7px 14px; white-space: nowrap; }
    main { max-width: 760px; margin: 0 auto; padding: 18px 16px 48px; }
    .kart { background: #fff; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px; margin-bottom: 14px; }
    .dugme { display: inline-block; padding: 12px 24px; border-radius: 8px; background: ${BLUE}; color: #fff; font-weight: 700; font-size: 14px; text-decoration: none; }
    h1 { font-family: 'Fraunces', serif; font-size: 21px; margin: 0 0 8px; }
  </style>
  ${ekHead}
</head>
<body>
  <header><div>${MARKA}<a class="geri" href="/pazar">← Pazaryeri</a></div></header>
  <main>${icerik}</main>
</body>
</html>`;
}
