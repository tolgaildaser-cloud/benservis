// api/admin/servis-arama.js — Yakın servis aramaları: il/ilçe × kapsamda × sayı. ADMIN_TOKEN/ADMIN_PASSWORD korumalı.
// GET ?from=YYYY-MM-DD&to=YYYY-MM-DD (yoksa son 30 gün). Kaynak tablo servis_arama_log (PII yok: il, ilçe,
// cihaz, sayfa türü, sonuç sayısı). Çıktı toplanmıştır — tek tek arama satırı panele inmez.
// 29 Eki 2026 (Tolga): "2 hafta sonra kapsam dışı talebi raporla" → 12 Kas YK okuması.
import supabase from "../_supabase.js";
import { aramaTopla as topla } from "../../src/servis-arama-kaydi.js";

function yetkiKontrol(req) {
  const auth = req.headers["authorization"] || "";
  const t = process.env.ADMIN_TOKEN, p = process.env.ADMIN_PASSWORD;
  return (!!t && auth === `Bearer ${t}`) || (!!p && auth === `Bearer ${p}`);
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ ok: false, error: "Yalnızca GET" });
  if (!yetkiKontrol(req)) return res.status(401).json({ ok: false, error: "Yetkisiz — ADMIN_TOKEN hatalı" });

  const q = req.query || {};
  const today = new Date().toISOString().slice(0, 10);
  const def30 = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
  const isDate = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s);
  const fromQ = isDate(q.from) ? q.from : def30;
  const toQ = isDate(q.to) ? q.to : today;

  try {
    const { data, error } = await supabase
      .from("servis_arama_log")
      .select("il,ilce,kapsamda,sonuc")
      .gte("created_at", `${fromQ}T00:00:00.000Z`)
      .lte("created_at", `${toQ}T23:59:59.999Z`)
      .limit(20000);
    if (error) return res.status(500).json({ ok: false, error: error.message });
    const satirlar = data || [];
    const gruplar = topla(satirlar);
    return res.status(200).json({
      ok: true,
      aralik: { from: fromQ, to: toQ },
      toplam: satirlar.length,
      kapsamDisi: satirlar.filter((s) => !s.kapsamda).length,
      gruplar,
      kismi: satirlar.length >= 20000,
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
