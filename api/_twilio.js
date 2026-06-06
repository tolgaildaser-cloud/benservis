// api/_twilio.js
// Twilio yardımcı fonksiyonları — API endpoint'lerinden import edilir.
// TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER env değişkenlerinden alınır.
import twilio from "twilio";

function getClient() {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) throw new Error("Twilio env değişkenleri eksik");
  return twilio(sid, token);
}

/**
 * Müşteriye SMS gönder.
 * @param {string} to   E.164 formatında telefon (+905551234567)
 * @param {string} body Mesaj metni
 */
export async function sendSMS(to, body) {
  const client = getClient();
  return client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
    body,
  });
}

/**
 * CORS header'larını ayarla (API endpoint'leri için).
 */
export function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
