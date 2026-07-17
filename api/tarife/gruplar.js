// api/tarife/gruplar.js — (cihaz|marka|ariza) gruplarını öneri + durumla döner. Bearer ADMIN_TOKEN.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { onerTarife } from "../_tarife-hesap.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Yalnızca GET" });

  const token = process.env.ADMIN_TOKEN;
  if (!token || (req.headers["authorization"] || "") !== `Bearer ${token}`)
    return res.status(401).json({ error: "Yetkisiz" });

  const { data: veriler, error: e1 } = await supabase
    .from("tarife_veri").select("cihaz, marka, ariza, parca_tl, iscilik_tl, toplam_tl, kaynak");
  if (e1) return res.status(500).json({ error: e1.message });

  const { data: onaylar, error: e2 } = await supabase
    .from("tarife").select("cihaz, marka, ariza, durum, guven, onayli_parca_min, onayli_parca_max, onayli_iscilik, onayli_beklenen, veri_noktasi_sayisi, guncelleme");
  if (e2) return res.status(500).json({ error: e2.message });

  const map = new Map();
  for (const v of (veriler || [])) {
    const key = `${v.cihaz}|${v.marka}|${v.ariza}`;
    if (!map.has(key)) map.set(key, { cihaz: v.cihaz, marka: v.marka, ariza: v.ariza, points: [] });
    map.get(key).points.push(v);
  }
  const onayMap = new Map((onaylar || []).map((o) => [`${o.cihaz}|${o.marka}|${o.ariza}`, o]));

  const keys = new Set([...map.keys(), ...onayMap.keys()]);
  const gruplar = [...keys].map((key) => {
    const g = map.get(key);
    const mevcut = onayMap.get(key) || null;
    const [cihaz, marka, ariza] = key.split("|");
    return {
      cihaz, marka, ariza,
      oneri: g ? onerTarife(g.points) : null,
      mevcut,
      durum: mevcut?.durum || "yok",
      nokta: g ? g.points.length : 0,
    };
  }).sort((a, b) => (a.cihaz + a.ariza).localeCompare(b.cihaz + b.ariza, "tr"));

  return res.status(200).json({ gruplar });
}
