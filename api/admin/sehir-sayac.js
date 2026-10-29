// api/admin/sehir-sayac.js — PII'siz sayfa-şehir sayacı: şehir × sayfa türü × kapsam. ADMIN_TOKEN/ADMIN_PASSWORD korumalı.
// GET ?from=YYYY-MM-DD&to=YYYY-MM-DD (yoksa son 30 gün). Kaynak public.sayfa_sehir_sayac (yalnız günlük toplam).
// 29 Eki 2026 (Tolga): "12 Kas raporuna şehir kırılımı da girsin."
import supabase from "../_supabase.js";
import { sehirTopla } from "../../src/ziyaret-sayim.js";

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
      .from("sayfa_sehir_sayac")
      .select("ulke,bolge,sehir,tur,sayi")
      .gte("gun", fromQ)
      .lte("gun", toQ)
      .limit(50000);
    if (error) return res.status(500).json({ ok: false, error: error.message });
    const sehirler = sehirTopla(data || []);
    const top = (f) => sehirler.filter(f).reduce((n, s) => n + s.toplam, 0);
    return res.status(200).json({
      ok: true,
      aralik: { from: fromQ, to: toQ },
      toplam: top(() => true),
      kapsamda: top((s) => s.kapsam === "kapsamda"),
      disi: top((s) => s.kapsam === "disi"),
      yurtDisi: top((s) => s.kapsam === "yurt-disi"),
      sehirler,
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
