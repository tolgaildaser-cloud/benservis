// api/odeme/callback.js
// POST /api/odeme/callback  ← iyzico bu URL'yi çağırır (ödeme tamamlayınca)
// Ödeme doğrulanır, talep güncellenir, satıcıya SMS, alıcı paneline yönlendirilir.
import Iyzipay from "iyzipay";
import supabase from "../_supabase.js";
import { sendSMS } from "../_twilio.js";

const BASE_URL = process.env.VERCEL_ENV === "production"
  ? "https://benservis.com"
  : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const IYZICO_URI = process.env.IYZICO_ENV === "prod"
  ? "https://api.iyzipay.com"
  : "https://sandbox.iyzipay.com";

function e164(tel) {
  const d = (tel || "").replace(/[^0-9]/g, "");
  if (d.startsWith("90")) return "+" + d;
  if (d.startsWith("0"))  return "+9" + d;
  return "+90" + d;
}

export default async function handler(req, res) {
  // iyzico bazen GET ile ping atar
  if (req.method === "GET") {
    return res.status(302).redirect(`${BASE_URL}/ikinci-el`);
  }

  const { token, conversationId } = req.body || {};
  if (!token) return res.status(400).send("token gerekli");

  const iyzipay = new Iyzipay({
    apiKey:    process.env.IYZICO_API_KEY    || "sandbox-apikey",
    secretKey: process.env.IYZICO_SECRET_KEY || "sandbox-secretkey",
    uri:       IYZICO_URI,
  });

  const result = await new Promise((resolve) => {
    iyzipay.checkoutForm.retrieve(
      { locale: "tr", conversationId: conversationId || "", token },
      (err, data) => resolve(err ? { status: "error" } : data)
    );
  });

  // Token ile talebi bul
  const { data: talep } = await supabase
    .from("talepler")
    .select(`
      id, alici_token, alici_tel, tutar,
      ilanlar!inner (baslik, satici_tel, satici_token)
    `)
    .eq("iyzico_token", token)
    .single();

  const aliciToken    = talep?.alici_token    || conversationId || "";
  const saticiToken   = talep?.ilanlar?.satici_token || "";
  const aliciPanelUrl = `${BASE_URL}/ikinci-el/alici/${aliciToken}`;

  if (result.paymentStatus === "SUCCESS" && talep) {
    // Ödeme başarılı → durumu güncelle
    await supabase.from("talepler")
      .update({
        odeme_durumu:     "odendi",
        iyzico_payment_id: result.paymentId || null,
      })
      .eq("id", talep.id);

    // Satıcıya SMS: ödeme geldi, gönder
    const saticiUrl = `${BASE_URL}/ikinci-el/satis/${saticiToken}`;
    try {
      await sendSMS(
        e164(talep.ilanlar.satici_tel),
        `Benservis: "${talep.ilanlar.baslik}" için ÖDEME ALINDI — ${Number(talep.tutar).toLocaleString("tr-TR")} TL.\nÜrünü teslim ettiğinde alıcı onaylar ve para sana aktarılır.\nPanel: ${saticiUrl}`
      );
    } catch (e) { console.error("SMS hatası:", e.message); }

    return res.status(302).redirect(`${aliciPanelUrl}?odeme=basarili`);
  }

  // Ödeme başarısız
  return res.status(302).redirect(`${aliciPanelUrl}?odeme=basarisiz`);
}
