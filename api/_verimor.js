// api/_verimor.js
// Verimor SMS yardımcı fonksiyonları — API endpoint'lerinden import edilir.
// VERIMOR_USERNAME, VERIMOR_PASSWORD, VERIMOR_SOURCE env değişkenlerinden alınır.

const VERIMOR_API = "https://sms.verimor.com.tr/v2/send.json";

function toVerimorNo(tel) {
  // E.164 (+905551234567) veya düz formatı → Verimor formatı (905551234567)
  return (tel || "").replace(/^\+/, "").replace(/[^0-9]/g, "");
}

/**
 * Verimor üzerinden SMS gönder.
 * @param {string} to   E.164 veya düz formatta telefon numarası
 * @param {string} body Mesaj metni (Türkçe karakter desteklenir)
 */
export async function sendSMS(to, body) {
  const username = process.env.VERIMOR_USERNAME;
  const password = process.env.VERIMOR_PASSWORD;
  const source   = process.env.VERIMOR_SOURCE || "BENSERVIS";

  if (!username) throw new Error("VERIMOR_USERNAME eksik");
  if (!password) throw new Error("VERIMOR_PASSWORD eksik");

  const res = await fetch(VERIMOR_API, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      source_addr: source,
      messages: [{ msg: body, dest: toVerimorNo(to) }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Verimor SMS hatası: ${res.status} — ${text}`);
  }

  return res.json();
}

/**
 * CORS header'larını ayarla (API endpoint'leri için).
 */
export function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
