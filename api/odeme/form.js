// api/odeme/form.js
// GET /api/odeme/form?alici_token=:token
// Server-rendered HTML sayfası — ikinci el talebinde "Ödemeyi Başlat" buraya gelir.
// Şimdilik "ödeme yakında" bilgisini gösterir (canlıdaki davranışla aynı).
import supabase from "../_supabase.js";

const BASE_URL  = process.env.VERCEL_ENV === "production"
  ? "https://benservis.com"
  : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const CREAM = "#F5EFE2", INK = "#22302A", AMBER = "#C8632B";
const FONT_URL = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const alici_token = (req.query.alici_token || "").trim();
  if (!alici_token) return res.status(400).send("alici_token gerekli");

  // Talep getir
  const { data: talep, error: te } = await supabase
    .from("talepler")
    .select(`
      id, alici_ad, alici_tel, alici_email, alici_token, odeme_durumu, tutar,
      ilanlar!inner (id, baslik, fiyat, konum)
    `)
    .eq("alici_token", alici_token)
    .single();

  if (te || !talep) {
    return res.status(404).send("<h2>Talep bulunamadı</h2>");
  }

  // Ödeme zaten yapıldıysa alıcı paneline yönlendir
  if (!["ilgileniliyor", "odeme_bekleniyor"].includes(talep.odeme_durumu)) {
    return res.status(302).redirect(`${BASE_URL}/ikinci-el/alici/${alici_token}`);
  }

  // Kart ile ödeme ikinci el talepleri için henüz açık değil (iyzico hiç yapılandırılmadı;
  // YK #167 PR-6'da pazar siparişleri PayTR'ye bağlandı, iyzipay bağımlılığı kalktı).
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.status(200).send(sayfaHTML(`
    <div style="max-width:440px;margin:0 auto;text-align:center;padding:40px 0">
      <div style="font-size:44px;margin-bottom:16px">🔒</div>
      <h2 style="font-family:'Fraunces',serif;font-size:22px;font-weight:700;margin:0 0 10px">Güvenli Ödeme — Yakında</h2>
      <p style="font-size:14px;color:#5C6660;line-height:1.6;margin-bottom:24px">
        Ödeme sistemi kurulum aşamasında. Satıcıyla mesajlaşmaya devam edebilirsiniz.<br>
        Ödeme yöntemi belirlendikten sonra burayı güncelleyeceğiz.
      </p>
      <a href="${BASE_URL}/ikinci-el/alici/${alici_token}"
         style="display:inline-block;padding:12px 24px;border-radius:11px;background:${AMBER};color:#fff;font-weight:700;font-size:14px;text-decoration:none">
        ← Talepe Dön
      </a>
    </div>`));
}

function sayfaHTML(icerik) {
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Güvenli Ödeme — Benservis</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="stylesheet" href="${FONT_URL}" />
  <style>
    * { box-sizing:border-box; }
    body { margin:0; background:${CREAM}; font-family:'Hanken Grotesk',sans-serif; color:${INK}; padding:28px 18px 48px; }
    a { text-decoration:none; }
  </style>
</head>
<body>
  <header style="text-align:center;margin-bottom:24px">
    <div style="display:flex;align-items:center;justify-content:center;gap:10px">
      <span style="color:${AMBER};font-size:28px;transform:rotate(-20deg);display:inline-block">◑</span>
      <h1 style="font-family:'Fraunces',serif;font-size:28px;font-weight:700;margin:0;letter-spacing:-.02em">Benservis</h1>
    </div>
    <div style="font-size:12px;font-weight:700;letter-spacing:.06em;color:#8A7B6A;text-transform:uppercase;margin-top:4px">Güvenli Ödeme</div>
  </header>
  ${icerik}
</body>
</html>`;
}
