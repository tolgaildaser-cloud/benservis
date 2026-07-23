// api/admin/rapor.js — Teşhis raporu HAM VERİ matrisi (tarih aralıklı satırlar). ADMIN_TOKEN/ADMIN_PASSWORD korumalı.
// GET ?from=YYYY-MM-DD&to=YYYY-MM-DD (yoksa son 30 gün). Her teşhis = 1 satır, tarihe göre (yeni→eski), tavan 5000.
import supabase from "../_supabase.js";

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
      .from("teshis_log")
      .select("created_at,cihaz,marka,yas,ariza,il,ilce,maliyet_min,maliyet_max,karar,aciliyet")
      .gte("created_at", `${fromQ}T00:00:00.000Z`)
      .lte("created_at", `${toQ}T23:59:59.999Z`)
      .order("created_at", { ascending: false })
      .limit(5000);
    if (error) return res.status(500).json({ ok: false, error: error.message });
    const satirlar = data || [];
    return res.status(200).json({
      ok: true,
      aralik: { from: fromQ, to: toQ },
      toplam: satirlar.length,
      satirlar,
      kismi: satirlar.length >= 5000,
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
