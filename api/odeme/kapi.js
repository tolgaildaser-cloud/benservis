// api/odeme/kapi.js — GET /api/odeme/kapi → ödeme seçenekleri (YK #173 şerhi 12 Eki · YK #174 13 Eki).
// Sepet ödeme adımı bunu okur: { kapi, kart, havale }.
//   kart   : PayTR halka açık (PAYTR_TEST_MODE=0 ya da ODEME_SAGLAYICI dolu) ya da admin anahtarı
//   havale : HAVALE_IBAN + HAVALE_HESAP_ADI env'de tanımlı (IBAN burada DÖNMEZ; yalnız sipariş cevabında)
//   kapi   : PayTR tanımlı ama hiçbir yöntem açık değil → form yerine "Ödeme çok yakında…" kartı
// Cevap kişiye göre değişir (admin) → no-store.
import { odemeSecenekleri } from "../_havale.js";
import { KAPI_METNI } from "../../src/odeme-kapisi.js";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const { kapi, kart, havale } = odemeSecenekleri(req);
  return res.status(200).json(kapi ? { kapi: true, kart, havale, metin: KAPI_METNI } : { kapi: false, kart, havale });
}
