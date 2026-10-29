// api/sayim/ziyaret.js — PII'siz sayfa-şehir sayacı (29 Eki 2026, Tolga). Beacon hedefi.
// POST {t: sayfa türü}. Şehir Vercel başlıklarından; günlük toplam public.sayfa_sehir_artir() ile +1.
// Ham istek, IP, UA, çerez, kimlik SAKLANMAZ. Bot UA'sı sayılmaz. Her durumda 204 — beacon cevap okumaz.
import { ziyaretAnahtari } from "../../src/ziyaret-sayim.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(204).end();
  try {
    let govde = req.body;
    if (typeof govde === "string") { try { govde = JSON.parse(govde); } catch { govde = {}; } }
    const a = ziyaretAnahtari(req.headers, govde);
    if (a && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
      const { default: supabase } = await import("../_supabase.js");
      const { error } = await supabase.rpc("sayfa_sehir_artir", {
        p_gun: a.gun, p_ulke: a.ulke, p_bolge: a.bolge, p_sehir: a.sehir, p_tur: a.tur,
      });
      if (error) console.error("[ziyaret] sayaç:", error.message);
    }
  } catch (e) {
    console.error("[ziyaret] sayaç:", e?.message || e);
  }
  return res.status(204).end();
}
