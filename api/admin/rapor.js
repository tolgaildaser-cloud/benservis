// api/admin/rapor.js — Teşhis raporu (tarih aralıklı toplamlar). ADMIN_TOKEN korumalı.
// GET ?from=YYYY-MM-DD&to=YYYY-MM-DD (yoksa son 30 gün). Anonim teshis_log üzerinden JS-aggregate (v1).
import supabase from "../_supabase.js";

function yetkiKontrol(req) {
  const t = process.env.ADMIN_TOKEN;
  return !!t && (req.headers["authorization"] || "") === `Bearer ${t}`;
}
const top = (rows, key, n = 15) => {
  const m = {};
  for (const r of rows) { const v = r[key]; if (v) m[v] = (m[v] || 0) + 1; }
  return Object.entries(m).map(([ad, adet]) => ({ ad, adet })).sort((a, b) => b.adet - a.adet).slice(0, n);
};

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
      .select("cihaz,marka,ariza,maliyet_min,maliyet_max,karar,aciliyet,il,ilce")
      .gte("created_at", `${fromQ}T00:00:00.000Z`)
      .lte("created_at", `${toQ}T23:59:59.999Z`)
      .limit(50000);
    if (error) return res.status(500).json({ ok: false, error: error.message });
    const rows = data || [];

    const dagit = (key) => rows.reduce((a, r) => { const v = r[key] || "—"; a[v] = (a[v] || 0) + 1; return a; }, {});
    const mins = rows.map((r) => r.maliyet_min).filter((x) => x != null);
    const maxs = rows.map((r) => r.maliyet_max).filter((x) => x != null);
    const ort = (a) => (a.length ? Math.round(a.reduce((s, x) => s + x, 0) / a.length) : null);
    const maliyet = mins.length
      ? { ortMin: ort(mins), ortMax: ort(maxs), min: Math.min(...mins), max: Math.max(...maxs) }
      : null;

    return res.status(200).json({
      ok: true,
      aralik: { from: fromQ, to: toQ },
      toplam: rows.length,
      marka: top(rows, "marka"),
      ariza: top(rows, "ariza"),
      cihaz: top(rows, "cihaz", 20),
      il: top(rows, "il"),
      ilce: top(rows, "ilce"),
      karar: dagit("karar"),
      aciliyet: dagit("aciliyet"),
      maliyet,
      kismi: rows.length >= 50000,
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
