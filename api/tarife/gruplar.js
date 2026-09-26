// api/tarife/gruplar.js — (cihaz|marka|ariza) gruplarını öneri + durumla döner. Bearer ADMIN_TOKEN.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { onerTarife, sapmaSatiri, celiskiliMi } from "../_tarife-hesap.js";
import { seedAriza, seedArizalari, seedteVar } from "../../src/tarife-esleme.js";

// Raporun (scripts/tarife-rapor.mjs) fiyat aksiyonu çıkan grupları — panelde "öneri var".
const ONERI_AKSIYON = new Set(["yukselt", "dusur"]);

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Yalnızca GET" });

  const token = process.env.ADMIN_TOKEN;
  if (!token || (req.headers["authorization"] || "") !== `Bearer ${token}`)
    return res.status(401).json({ error: "Yetkisiz" });

  const { data: veriler, error: e1 } = await supabase
    .from("tarife_veri").select("cihaz, marka, ariza, parca_tl, iscilik_tl, toplam_tl, kaynak, kaynak_url, notlar");
  if (e1) return res.status(500).json({ error: e1.message });

  const { data: onaylar, error: e2 } = await supabase
    .from("tarife").select("cihaz, marka, ariza, durum, guven, onayli_parca_min, onayli_parca_max, onayli_iscilik, onayli_beklenen, veri_noktasi_sayisi, guncelleme");
  if (e2) return res.status(500).json({ error: e2.message });

  // YK #143 (26 Eyl): ham ad SEED adına çevrilerek gruplanır (src/tarife-esleme.js) — aksi hâlde
  // panel "Rulman/keçe"yi ayrı grup olarak onaya sunup mükerrer satır açtırıyordu. Eşlemesi
  // olmayan ham ad kendi adıyla kalır ve `seedDisi` işaretlenir (onay ancak SEED satırı seçilerek).
  const map = new Map();
  for (const v of (veriler || [])) {
    if (celiskiliMi(v)) continue; // IT 26 Eyl: parça>toplam noktası öneriyi beslemez
    const ariza = seedAriza(v.cihaz, v.ariza) || v.ariza;
    const key = `${v.cihaz}|${v.marka}|${ariza}`;
    if (!map.has(key)) map.set(key, { points: [], hamAdlar: new Set() });
    map.get(key).points.push(v);
    if (ariza !== v.ariza) map.get(key).hamAdlar.add(v.ariza);
  }
  const onayMap = new Map((onaylar || []).map((o) => [`${o.cihaz}|${o.marka}|${o.ariza}`, o]));

  const keys = new Set([...map.keys(), ...onayMap.keys()]);
  const gruplar = [...keys].map((key) => {
    const g = map.get(key);
    const mevcut = onayMap.get(key) || null;
    const [cihaz, marka, ariza] = key.split("|");
    const seedDisi = !seedteVar(cihaz, ariza);
    const sapma = g && mevcut?.durum === "onayli"
      ? sapmaSatiri(g.points.filter((p) => p.kaynak === "web"), mevcut)
      : null;
    return {
      cihaz, marka, ariza,
      oneri: g ? onerTarife(g.points) : null,
      mevcut,
      durum: mevcut?.durum || "yok",
      nokta: g ? g.points.length : 0,
      hamAdlar: g ? [...g.hamAdlar] : [],
      seedDisi,
      seedSecenekleri: seedDisi ? seedArizalari(cihaz) : [],
      sapma,
      oneriVar: !!sapma && ONERI_AKSIYON.has(sapma.aksiyon),
    };
  }).sort((a, b) =>
    // Öneri var → en üstte; SEED dışı → en altta; kalan alfabetik.
    (b.oneriVar - a.oneriVar) || (a.seedDisi - b.seedDisi) ||
    (a.cihaz + a.ariza).localeCompare(b.cihaz + b.ariza, "tr"));

  return res.status(200).json({ gruplar });
}
