// api/tarife/onayla.js — onaylı tarifeyi upsert eder. Bearer ADMIN_TOKEN.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Yalnızca POST" });

  const token = process.env.ADMIN_TOKEN;
  if (!token || (req.headers["authorization"] || "") !== `Bearer ${token}`)
    return res.status(401).json({ error: "Yetkisiz" });

  const b = req.body || {};
  if (!b.cihaz?.trim() || !b.ariza?.trim()) return res.status(400).json({ error: "cihaz ve ariza gerekli" });
  const sayi = (x) => (x != null && x !== "" ? Number(x) : null);

  const satir = {
    cihaz: b.cihaz.trim(),
    marka: b.marka?.trim() || "Genel",
    ariza: b.ariza.trim(),
    onayli_parca_min: sayi(b.onayli_parca_min),
    onayli_parca_max: sayi(b.onayli_parca_max),
    onayli_iscilik: sayi(b.onayli_iscilik),
    onayli_beklenen: sayi(b.onayli_beklenen),
    guven: ["yuksek","orta","dusuk"].includes(b.guven) ? b.guven : null,
    veri_noktasi_sayisi: sayi(b.veri_noktasi_sayisi) || 0,
    durum: "onayli",
    onaylayan: b.onaylayan?.trim() || "admin",
    guncelleme: new Date().toISOString(),
  };
  const { error } = await supabase.from("tarife").upsert(satir, { onConflict: "cihaz,marka,ariza" });
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ ok: true });
}
