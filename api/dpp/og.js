// api/dpp/og.js
// GET /api/dpp/og?seri_no=SN123
// Vercel rewrite ile /dpp/:seri_no → bu fonksiyona yönlenir.
// OG meta tag'leriyle tam HTML sayfa döndürür.
// Botlar JS çalıştırmadığı için SPA yerine server-render şart.
import supabase from "../_supabase.js";

const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
const FONT_URL = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap";
const BASE_URL = "https://benservis.com";

function garantiBilgisiMetin(cihaz) {
  const bugun = new Date(); bugun.setHours(0, 0, 0, 0);
  const satirlar = [];
  if (cihaz.garanti_bitis_tarihi) {
    const bitis = new Date(cihaz.garanti_bitis_tarihi + "T00:00:00");
    const fark = Math.ceil((bitis - bugun) / 86400000);
    satirlar.push(fark > 0
      ? `🛡️ Garanti: ${bitis.toLocaleDateString("tr-TR")} · ${fark} gün kaldı`
      : `🛡️ Garanti: ${bitis.toLocaleDateString("tr-TR")} · süresi doldu`);
  }
  if (cihaz.uzatilmis_garanti && cihaz.uzatilmis_garanti_bitis) {
    const bitis = new Date(cihaz.uzatilmis_garanti_bitis + "T00:00:00");
    const fark = Math.ceil((bitis - bugun) / 86400000);
    satirlar.push(fark > 0
      ? `➕ Uzatılmış garanti: ${bitis.toLocaleDateString("tr-TR")} · ${fark} gün kaldı`
      : `➕ Uzatılmış garanti süresi doldu`);
  }
  return satirlar.join(" &nbsp;|&nbsp; ");
}

function tamirSatiri(t) {
  const tarih = new Date(t.tarih + "T12:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  const rozet = t.servis_turu === "benservis"
    ? `<span style="font-size:11px;font-weight:700;background:${AMBER};color:#fff;border-radius:999px;padding:2px 9px;margin-left:6px">✓ Benservis</span>`
    : t.servis_turu === "yetkili"
    ? `<span style="font-size:11px;font-weight:700;background:#EDE5D3;color:#6E6450;border-radius:999px;padding:2px 9px;margin-left:6px">Yetkili</span>`
    : "";
  const parcalar = (t.degistirilen_parcalar || []).length
    ? `<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:6px">${t.degistirilen_parcalar.map(p => `<span style="font-size:11px;background:#F0EAD8;color:#6E6450;border-radius:999px;padding:2px 9px">${p}</span>`).join("")}</div>`
    : "";
  const maliyet = t.maliyet != null ? `<span style="font-size:13px;font-weight:700;color:${AMBER};margin-left:auto">${Number(t.maliyet).toLocaleString("tr-TR")} TL</span>` : "";
  return `
    <div style="background:#FFFDF8;border:1px solid #E5DCC9;border-radius:12px;padding:14px 16px;margin-bottom:9px">
      <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:6px">
        <span style="font-size:12.5px;font-weight:700;color:#5C6660">${tarih}</span>
        ${rozet}
        ${maliyet}
      </div>
      <div style="font-size:14.5px;font-weight:600;line-height:1.4">${t.yapilan_islem || ""}</div>
      ${t.servis_adi ? `<div style="font-size:12.5px;color:#8A7B6A;margin-top:3px">${t.servis_adi}</div>` : ""}
      ${parcalar}
    </div>`;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const seri_no = (req.query.seri_no || "").trim();
  const pageUrl = `${BASE_URL}/dpp/${encodeURIComponent(seri_no)}`;

  // ── Veri çek ─────────────────────────────────────────────────────────────
  let cihaz = null, tamirler = [], toplam_maliyet = 0, bulunamadi = false;

  if (!seri_no) {
    bulunamadi = true;
  } else {
    const { data: cihazRow, error: ce } = await supabase
      .from("cihazlar").select("*").eq("seri_no", seri_no).single();
    if (ce || !cihazRow) {
      bulunamadi = true;
    } else {
      cihaz = cihazRow;
      const { data: tamirRows } = await supabase
        .from("tamir_kayitlari").select("*").eq("cihaz_id", cihaz.id)
        .order("tarih", { ascending: false });
      tamirler = tamirRows || [];
      toplam_maliyet = tamirler.reduce((s, t) => s + (t.maliyet || 0), 0);
    }
  }

  // ── OG meta ──────────────────────────────────────────────────────────────
  const ogTitle = bulunamadi
    ? "Pasaport Bulunamadı — Benservis DPP"
    : `${cihaz.marka || ""} ${cihaz.model || cihaz.kategori || "Cihaz"} — Benservis DPP`.trim();

  const ogDesc = bulunamadi
    ? `${seri_no || "Bu seri no"} için kayıtlı DPP pasaportu yok.`
    : `${tamirler.length} tamir kaydı${toplam_maliyet > 0 ? ` · toplam ${toplam_maliyet.toLocaleString("tr-TR")} TL` : ""}${tamirler.some(t => t.servis_turu === "benservis") ? " · Benservis Doğrulanmış" : ""}`;

  // ── HTML render ──────────────────────────────────────────────────────────
  const hasBenservis = !bulunamadi && tamirler.some(t => t.servis_turu === "benservis");
  const garantiStr = !bulunamadi ? garantiBilgisiMetin(cihaz) : "";

  const body = bulunamadi
    ? `<div style="text-align:center;padding:48px 0">
        <div style="font-size:48px;margin-bottom:12px">🔍</div>
        <h2 style="font-family:'Fraunces',serif;font-size:22px;margin:0 0 8px">Pasaport Bulunamadı</h2>
        <p style="color:#5C6660;font-size:14px"><strong>${seri_no || "Bu seri no"}</strong> için kayıtlı DPP pasaportu yok.</p>
        <a href="${BASE_URL}" style="display:inline-block;margin-top:16px;padding:11px 22px;border-radius:10px;background:${AMBER};color:#fff;font-weight:700;font-size:14px;text-decoration:none">Benservis'e Git →</a>
      </div>`
    : `
      <div style="background:#FFFDF8;border:1px solid #E5DCC9;border-radius:16px;padding:20px;margin-bottom:14px">
        <div style="font-family:'Fraunces',serif;font-size:24px;font-weight:700;margin-bottom:10px">
          ${cihaz.marka || ""} ${cihaz.model || ""} ${cihaz.model ? "" : cihaz.kategori || ""}
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px">
          ${cihaz.kategori ? `<span style="font-size:12px;font-weight:700;background:#EDE5D3;color:#6E6450;border-radius:999px;padding:3px 10px">${cihaz.kategori}</span>` : ""}
          ${hasBenservis ? `<span style="font-size:12px;font-weight:700;background:${AMBER};color:#fff;border-radius:999px;padding:3px 10px">✓ Benservis Doğrulanmış</span>` : ""}
        </div>
        ${garantiStr ? `<div style="font-size:12.5px;color:#5C6660;background:#F7F1E3;border:1px solid #EBE1CA;border-radius:8px;padding:8px 11px;margin-bottom:8px">${garantiStr}</div>` : ""}
        <div style="font-size:12px;font-weight:700;letter-spacing:.07em;color:#8A7B6A;font-family:monospace">SN: ${cihaz.seri_no}</div>
        ${toplam_maliyet > 0 ? `<div style="margin-top:8px;font-size:13.5px;color:#5C6660;background:#F0EAD8;border-radius:7px;padding:7px 11px;display:inline-block">Toplam tamir maliyeti: <strong>${toplam_maliyet.toLocaleString("tr-TR")} TL</strong></div>` : ""}
      </div>

      <div style="font-family:'Fraunces',serif;font-size:18px;font-weight:600;margin:0 0 10px;display:flex;align-items:center;gap:10px">
        Tamir Geçmişi
        <span style="font-size:12px;font-weight:700;background:#EDE5D3;color:#6E6450;border-radius:999px;padding:3px 10px">${tamirler.length} kayıt</span>
      </div>
      ${tamirler.length === 0
        ? `<p style="color:#9A9384;font-size:14px;text-align:center;padding:20px 0">Henüz tamir kaydı yok.</p>`
        : tamirler.map(tamirSatiri).join("")}

      <div style="background:#FFFDF8;border:1px solid #E5DCC9;border-radius:14px;padding:16px;margin-top:8px">
        <div style="font-family:'Fraunces',serif;font-size:16px;font-weight:600;margin-bottom:12px">Bu Pasaportu Paylaş</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <a href="https://wa.me/?text=${encodeURIComponent(`${ogTitle}\n${ogDesc}\n${pageUrl}`)}"
            style="flex:1;min-width:120px;padding:10px 13px;border-radius:10px;border:1.5px solid ${AMBER};background:rgba(200,99,43,.06);color:${AMBER};font-weight:700;font-size:13px;text-decoration:none;text-align:center">
            💬 WhatsApp
          </a>
          <a href="${pageUrl}"
            style="flex:1;min-width:120px;padding:10px 13px;border-radius:10px;border:1.5px solid #DDD3BE;background:#FFFDF8;color:${INK};font-weight:700;font-size:13px;text-decoration:none;text-align:center">
            🔗 Bağlantı
          </a>
        </div>
      </div>

      <a href="${BASE_URL}" style="display:block;text-align:center;margin-top:14px;padding:13px;border-radius:13px;background:${INK};color:${CREAM};font-weight:700;font-size:14px;text-decoration:none">
        ◑ Benservis — Arıza Teşhisi →
      </a>`;

  const html = `<!doctype html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${ogTitle}</title>

  <!-- Open Graph -->
  <meta property="og:title" content="${ogTitle}" />
  <meta property="og:description" content="${ogDesc}" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Benservis" />
  <meta property="og:image" content="${BASE_URL}/og-default.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${ogTitle}" />
  <meta name="twitter:description" content="${ogDesc}" />

  <!-- WhatsApp favors og: tags above. canonical URL -->
  <link rel="canonical" href="${pageUrl}" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="stylesheet" href="${FONT_URL}" />

  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: ${CREAM}; font-family: 'Hanken Grotesk', sans-serif; color: ${INK}; }
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
      <div style="font-size:12px;font-weight:700;letter-spacing:.06em;color:#8A7B6A;text-transform:uppercase;margin-top:4px">Dijital Ürün Pasaportu</div>
    </header>
    ${body}
    <footer style="text-align:center;font-size:11.5px;color:#A59E8E;margin-top:24px">Benservis Dijital Ürün Pasaportu · benservis.com</footer>
  </div>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
  return res.status(bulunamadi ? 404 : 200).send(html);
}
