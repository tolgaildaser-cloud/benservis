// api/odeme/kapi.js — GET /api/odeme/kapi → { kapi: boolean } (YK #173 şerhi, 12 Eki 2026).
// Sepet ödeme adımı bunu okur: `kapi: true` ise form yerine "Ödeme çok yakında…" kartı basılır.
// Admin anahtarıyla (Authorization: Bearer) gelen istekte kapı yok. Cevap kişiye göre değişir → no-store.
import { odemeKapisi } from "../_paytr.js";
import { adminYetkili } from "../_admin.js";
import { KAPI_METNI } from "../../src/odeme-kapisi.js";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const kapi = odemeKapisi() && !adminYetkili(req);
  return res.status(200).json(kapi ? { kapi: true, metin: KAPI_METNI } : { kapi: false });
}
