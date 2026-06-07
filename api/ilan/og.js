// api/ilan/og.js
// GET /api/ilan/og?id=:id
// Vercel rewrite: /ikinci-el/:id → bu fonksiyona yönlenir.
// OG meta tag'leriyle tam HTML sayfa döndürür (WhatsApp/Twitter botu için).
import supabase from "../_supabase.js";

const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
const FONT_URL = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap";
const BASE_URL = "https://benservis.com";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id = (req.query.id || "").trim();
  const pageUrl = `${BASE_URL}/ikinci-el/${encodeURIComponent(id)}`;

  let ilan = null, dpp = null, bulunamadi = false;

  if (!id) {
    bulunamadi = true;
  } else {
    const { data: ilanRow, error: ie } = await supabase
      .from("ilanlar").select("*").eq("id", id).single();

    if (ie || !ilanRow) {
      bulunamadi = true;
    } else {
      ilan = ilanRow;

      const { data: cihaz } = await supabase
        .from("cihazlar").select("*").eq("seri_no", ilan.seri_no).single();

      if (cihaz) {
        const { data: tamirler } = await supabase
          .from("tamir_kayitlari").select("*").eq("cihaz_id", cihaz.id)
          .order("tarih", { ascending: false });
        const toplam_maliyet = (tamirler || []).reduce((s, t) => s + (t.maliyet || 0), 0);
        dpp = { cihaz, tamirler: tamirler || [], toplam_maliyet };
      }
    }
  }

  const benservisDogrulanmis = dpp?.tamirler.some(t => t.servis_turu === "benservis");

  const ogTitle = bulunamadi
    ? "İlan Bulunamadı — Benservis"
    : `${ilan.baslik} — ${ilan.fiyat.toLocaleString("tr-TR")} TL`;

  const ogDesc = bulunamadi
    ? "Bu ilan mevcut değil."
    : [
        dpp ? `${dpp.cihaz.marka || ""} ${dpp.cihaz.model || dpp.cihaz.kategori || ""}`.trim() : ilan.seri_no,
        dpp ? `${dpp.tamirler.length} tamir kaydı` : null,
        benservisDogrulanmis ? "Benservis Doğrulanmış" : null,
        ilan.konum || null,
      ].filter(Boolean).join(" · ");

  // ── Durum badge helper ────────────────────────────────────────────────────
  const durumBadge = (d) => {
    const cfg = {
      "çalışıyor": { bg: "#E8F0E8", color: GREEN,    label: "✓ Çalışıyor" },
      "arızalı":   { bg: "#FEF3E2", color: AMBER,    label: "⚠ Arızalı" },
      "hurda":     { bg: "#FDECEA", color: "#B23A2E", label: "✕ Hurda" },
    };
    const c = cfg[d] || cfg["çalışıyor"];
    return `<span style="font-size:12px;font-weight:700;background:${c.bg};color:${c.color};border-radius:999px;padding:3px 10px">${c.label}</span>`;
  };

  // ── Body HTML ─────────────────────────────────────────────────────────────
  const body = bulunamadi
    ? `<div style="text-align:center;padding:48px 0">
        <div style="font-size:48px;margin-bottom:12px">🔍</div>
        <h2 style="font-family:'Fraunces',serif;font-size:22px;margin:0 0 8px">İlan Bulunamadı</h2>
        <p style="color:#5C6660;font-size:14px">Bu ilan artık mevcut değil ya da kaldırılmış.</p>
        <a href="${BASE_URL}/ikinci-el" style="display:inline-block;margin-top:16px;padding:11px 22px;border-radius:10px;background:${AMBER};color:#fff;font-weight:700;font-size:14px;text-decoration:none">İlanlara Git →</a>
      </div>`
    : `
      ${ilan.durum !== "aktif" ? `
      <div style="background:#FDECEA;border:1px solid #F5C6C0;border-radius:10px;padding:10px 14px;margin-bottom:12px;font-size:13px;font-weight:700;color:#B23A2E;text-align:center">
        ${ilan.durum === "satildi" ? "✕ Bu ilan satıldı" : "✕ Bu ilan kaldırıldı"}
      </div>` : ""}

      <div style="background:#FFFDF8;border:1px solid #E5DCC9;border-radius:16px;padding:20px;margin-bottom:14px">
        <div style="font-family:'Fraunces',serif;font-size:24px;font-weight:700;margin-bottom:8px;line-height:1.25">${ilan.baslik}</div>
        <div style="font-size:30px;font-weight:700;color:${AMBER};font-family:'Fraunces',serif;margin-bottom:12px">${ilan.fiyat.toLocaleString("tr-TR")} TL</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
          ${ilan.konum ? `<span style="font-size:12px;background:#EDE5D3;color:#6E6450;border-radius:999px;padding:3px 10px;font-weight:700">📍 ${ilan.konum}</span>` : ""}
          ${benservisDogrulanmis ? `<span style="font-size:12px;background:${AMBER};color:#fff;border-radius:999px;padding:3px 10px;font-weight:700">✓ Benservis Doğrulanmış</span>` : ""}
          ${dpp?.cihaz.mevcut_durum ? durumBadge(dpp.cihaz.mevcut_durum) : ""}
        </div>
        ${ilan.aciklama ? `<p style="font-size:14px;color:#5C6660;line-height:1.5;margin:0 0 10px">${ilan.aciklama}</p>` : ""}
        <div style="font-size:11px;font-weight:700;color:#8A7B6A;font-family:monospace">SN: ${ilan.seri_no}</div>
      </div>

      ${dpp ? `
      <div style="background:#FFFDF8;border:1px solid #E5DCC9;border-radius:14px;padding:16px;margin-bottom:14px">
        <div style="font-family:'Fraunces',serif;font-size:17px;font-weight:600;margin-bottom:10px;display:flex;align-items:center;gap:8px">
          Dijital Ürün Pasaportu
          <span style="font-size:11px;background:#EDE5D3;color:#6E6450;border-radius:999px;padding:2px 8px;font-weight:700">${dpp.tamirler.length} tamir</span>
        </div>
        <div style="font-size:13px;color:#5C6660;margin-bottom:8px">
          ${[dpp.cihaz.marka, dpp.cihaz.model || dpp.cihaz.kategori].filter(Boolean).join(" ")}
          ${dpp.cihaz.garanti_bitis_tarihi ? ` · 🛡️ Garanti: ${new Date(dpp.cihaz.garanti_bitis_tarihi + "T00:00:00").toLocaleDateString("tr-TR")}` : ""}
        </div>
        ${dpp.toplam_maliyet > 0 ? `<div style="font-size:13px;background:#F0EAD8;border-radius:7px;padding:6px 10px;display:inline-block;margin-bottom:10px">Toplam tamir maliyeti: <strong>${dpp.toplam_maliyet.toLocaleString("tr-TR")} TL</strong></div>` : ""}
        ${dpp.tamirler.length > 0 ? `
        <div style="display:flex;flex-direction:column;gap:7px">
          ${dpp.tamirler.slice(0, 3).map(t => `
          <div style="background:#F7F1E3;border-radius:9px;padding:9px 11px">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
              <span style="font-size:11.5px;font-weight:700;color:#5C6660">${new Date(t.tarih + "T12:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>
              ${t.servis_turu === "benservis" ? `<span style="font-size:10px;font-weight:700;background:${AMBER};color:#fff;border-radius:999px;padding:1px 7px">✓ Benservis</span>` : ""}
              ${t.maliyet != null ? `<span style="font-size:12px;font-weight:700;color:${AMBER};margin-left:auto">${Number(t.maliyet).toLocaleString("tr-TR")} TL</span>` : ""}
            </div>
            <div style="font-size:13px;font-weight:600">${t.yapilan_islem || ""}</div>
          </div>`).join("")}
          ${dpp.tamirler.length > 3 ? `<div style="text-align:center;font-size:12px;color:#9A9384">+${dpp.tamirler.length - 3} tamir daha</div>` : ""}
        </div>` : `<p style="color:#9A9384;font-size:13px;margin:0">Henüz tamir kaydı yok.</p>`}
        <a href="${BASE_URL}/dpp/${encodeURIComponent(ilan.seri_no)}"
          style="display:block;text-align:center;margin-top:12px;padding:9px;border-radius:9px;border:1.5px solid #DDD3BE;background:#FFFDF8;color:${INK};font-size:13px;font-weight:700;text-decoration:none">
          📋 Tam Pasaportu Gör →
        </a>
      </div>` : ""}

      <div style="background:#FFFDF8;border:1px solid #E5DCC9;border-radius:14px;padding:16px;margin-bottom:14px">
        <div style="font-family:'Fraunces',serif;font-size:16px;font-weight:600;margin-bottom:8px">Satıcı</div>
        <div style="font-size:15px;font-weight:600;margin-bottom:12px">${ilan.satici_ad}</div>
        ${ilan.durum === "aktif" ? `
        <p style="font-size:13px;color:#5C6660;margin:0 0 12px;line-height:1.5">🔒 Ödeme Benservis güvencesiyle korunur. Satıcı bilgileri gizlidir.</p>
        <a href="${pageUrl}"
          style="display:block;text-align:center;padding:13px;border-radius:12px;background:${AMBER};color:#fff;font-weight:700;font-size:15px;text-decoration:none;box-shadow:0 8px 20px -8px rgba(200,99,43,.5)">
          Satın Almak İstiyorum →
        </a>` : `<p style="font-size:13px;color:#9A9384;margin:0">Bu ilan artık aktif değil.</p>`}
      </div>

      <a href="${BASE_URL}/ikinci-el" style="display:block;text-align:center;padding:13px;border-radius:13px;background:${INK};color:${CREAM};font-weight:700;font-size:14px;text-decoration:none">
        ◑ Benservis — Tüm İlanlar →
      </a>`;

  const html = `<!doctype html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${ogTitle}</title>
  <meta property="og:title" content="${ogTitle}" />
  <meta property="og:description" content="${ogDesc}" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Benservis İkinci El" />
  <meta property="og:image" content="${BASE_URL}/og-default.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${ogTitle}" />
  <meta name="twitter:description" content="${ogDesc}" />
  <link rel="canonical" href="${pageUrl}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="stylesheet" href="${FONT_URL}" />
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: ${CREAM}; font-family: 'Hanken Grotesk', sans-serif; color: ${INK}; }
    a { text-decoration: none; }
  </style>
</head>
<body>
  <div style="position:fixed;inset:0;pointer-events:none;opacity:.35;background-image:radial-gradient(rgba(34,48,42,.05) 1px,transparent 1px);background-size:4px 4px;z-index:0"></div>
  <div style="position:relative;z-index:1;max-width:600px;margin:0 auto;padding:28px 18px 48px">
    <header style="text-align:center;margin-bottom:22px">
      <div style="display:flex;align-items:center;justify-content:center;gap:10px">
        <span style="color:${AMBER};font-size:28px;transform:rotate(-20deg);display:inline-block">◑</span>
        <h1 style="font-family:'Fraunces',serif;font-size:30px;font-weight:700;margin:0;letter-spacing:-.02em">Benservis</h1>
      </div>
      <div style="font-size:12px;font-weight:700;letter-spacing:.06em;color:#8A7B6A;text-transform:uppercase;margin-top:4px">İkinci El Pazaryeri</div>
    </header>
    ${body}
    <footer style="text-align:center;font-size:11.5px;color:#A59E8E;margin-top:24px">Benservis İkinci El · benservis.com</footer>
  </div>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
  return res.status(bulunamadi ? 404 : 200).send(html);
}
