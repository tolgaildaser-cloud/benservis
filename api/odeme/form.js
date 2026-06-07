// api/odeme/form.js
// GET /api/odeme/form?alici_token=:token
// Server-rendered HTML sayfası — iyzico checkout formunu içerir.
// Alıcı "Ödemeyi Başlat" tıklayınca buraya yönlendirilir.
import Iyzipay from "iyzipay";
import supabase from "../_supabase.js";

const BASE_URL  = process.env.VERCEL_ENV === "production"
  ? "https://benservis.com"
  : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const IYZICO_URI = process.env.IYZICO_ENV === "prod"
  ? "https://api.iyzipay.com"
  : "https://sandbox.iyzipay.com";

const CREAM = "#F5EFE2", INK = "#22302A", AMBER = "#C8632B";
const FONT_URL = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap";

function e164(tel) {
  const d = (tel || "").replace(/[^0-9]/g, "");
  if (d.startsWith("90")) return "+" + d;
  if (d.startsWith("0"))  return "+9" + d;
  return "+90" + d;
}

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

  // iyzico yapılandır
  const iyzipay = new Iyzipay({
    apiKey:    process.env.IYZICO_API_KEY    || "sandbox-apikey",
    secretKey: process.env.IYZICO_SECRET_KEY || "sandbox-secretkey",
    uri:       IYZICO_URI,
  });

  const adParts = talep.alici_ad.trim().split(/\s+/);
  const ad      = adParts[0];
  const soyad   = adParts.slice(1).join(" ") || ad;
  const email   = talep.alici_email || `${talep.id.replace(/-/g, "").slice(0, 8)}@alici.benservis.com`;
  const ip      = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "127.0.0.1";
  const tutar   = talep.tutar.toString();

  const request = {
    locale:              "tr",
    conversationId:      talep.id,
    price:               tutar,
    paidPrice:           tutar,
    currency:            "TRY",
    basketId:            talep.ilan_id || talep.ilanlar.id,
    paymentGroup:        "PRODUCT",
    callbackUrl:         `${BASE_URL}/api/odeme/callback`,
    enabledInstallments: [1, 2, 3, 6],
    buyer: {
      id:                  talep.id,
      name:                ad,
      surname:             soyad,
      gsmNumber:           e164(talep.alici_tel),
      email,
      identityNumber:      "11111111111",
      registrationAddress: talep.ilanlar.konum || "Türkiye",
      ip,
      city:                "Istanbul",
      country:             "Turkey",
      zipCode:             "34000",
    },
    shippingAddress: {
      contactName: talep.alici_ad,
      city:        "Istanbul",
      country:     "Turkey",
      address:     talep.ilanlar.konum || "Türkiye",
      zipCode:     "34000",
    },
    billingAddress: {
      contactName: talep.alici_ad,
      city:        "Istanbul",
      country:     "Turkey",
      address:     talep.ilanlar.konum || "Türkiye",
      zipCode:     "34000",
    },
    basketItems: [{
      id:       talep.ilanlar.id,
      name:     talep.ilanlar.baslik,
      category1: "İkinci El",
      itemType: "PHYSICAL",
      price:    tutar,
    }],
  };

  // iyzico checkout form oluştur
  const result = await new Promise((resolve) => {
    iyzipay.checkoutFormInitialize.create(request, (err, data) => resolve(err ? { status: "error", errorMessage: err.message } : data));
  });

  if (result.status !== "success") {
    const hata = result.errorMessage || "iyzico bağlantısı kurulamadı";
    return res.status(200).send(sayfaHTML(
      `<div style="text-align:center;padding:48px 0">
        <div style="font-size:44px;margin-bottom:12px">⚠️</div>
        <h2 style="font-family:'Fraunces',serif;font-size:20px;margin:0 0 8px">Ödeme başlatılamadı</h2>
        <p style="color:#5C6660;font-size:14px">${hata}</p>
        <a href="${BASE_URL}/ikinci-el/alici/${alici_token}" style="display:inline-block;margin-top:16px;padding:11px 22px;border-radius:10px;background:${AMBER};color:#fff;font-weight:700;font-size:14px;text-decoration:none">← Geri Dön</a>
      </div>`
    ));
  }

  // iyzico token kaydet
  await supabase.from("talepler")
    .update({ iyzico_token: result.token, odeme_durumu: "odeme_bekleniyor", alici_email: email })
    .eq("alici_token", alici_token);

  const icerik = `
    <div style="max-width:480px;margin:0 auto">
      <div style="background:#FFFDF8;border:1px solid #E5DCC9;border-radius:14px;padding:16px 18px;margin-bottom:16px">
        <div style="font-family:'Fraunces',serif;font-size:20px;font-weight:700;margin-bottom:4px">${talep.ilanlar.baslik}</div>
        <div style="font-size:28px;font-weight:700;color:${AMBER};font-family:'Fraunces',serif">${Number(talep.tutar).toLocaleString("tr-TR")} TL</div>
        <div style="font-size:12px;color:#8A7B6A;margin-top:6px">Ödeme Benservis güvencesiyle tutulur. Ürünü onayladıktan sonra satıcıya aktarılır.</div>
      </div>
      <div id="iyzipay-checkout-form" class="responsive">
        ${result.checkoutFormContent}
      </div>
      <a href="${BASE_URL}/ikinci-el/alici/${alici_token}" style="display:block;text-align:center;margin-top:14px;font-size:13px;color:#8A7B6A;text-decoration:none">← Talepe Geri Dön</a>
    </div>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).send(sayfaHTML(icerik));
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
