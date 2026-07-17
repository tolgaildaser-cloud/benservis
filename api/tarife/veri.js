// api/tarife/veri.js — ham veri noktası ekler (tekil obje veya dizi). Bearer ADMIN_TOKEN.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

function gecerli(p) {
  if (!p || typeof p !== "object") return "geçersiz kayıt";
  if (!p.cihaz?.trim()) return "cihaz gerekli";
  if (!p.ariza?.trim()) return "ariza gerekli";
  if (p.parca_tl == null && p.iscilik_tl == null && p.toplam_tl == null)
    return "parca_tl / iscilik_tl / toplam_tl'den en az biri gerekli";
  return null;
}
function temizle(p) {
  return {
    cihaz: p.cihaz.trim(),
    marka: p.marka?.trim() || "Genel",
    ariza: p.ariza.trim(),
    belirtiler: p.belirtiler?.trim() || null,
    hata_kodu: p.hata_kodu?.trim() || null,
    parca_tl: p.parca_tl != null && p.parca_tl !== "" ? Number(p.parca_tl) : null,
    iscilik_tl: p.iscilik_tl != null && p.iscilik_tl !== "" ? Number(p.iscilik_tl) : null,
    toplam_tl: p.toplam_tl != null && p.toplam_tl !== "" ? Number(p.toplam_tl) : null,
    bolge: p.bolge?.trim() || null,
    kaynak: ["saha", "web", "gercek_is", "seed"].includes(p.kaynak) ? p.kaynak : "saha",
    kaynak_servis: p.kaynak_servis?.trim() || null,
    kaynak_url: p.kaynak_url?.trim() || null,
    notlar: p.notlar?.trim() || null,
  };
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Yalnızca POST" });

  const token = process.env.ADMIN_TOKEN;
  if (!token || (req.headers["authorization"] || "") !== `Bearer ${token}`)
    return res.status(401).json({ error: "Yetkisiz" });

  const body = req.body || {};
  const kayitlar = Array.isArray(body) ? body : [body];
  if (!kayitlar.length) return res.status(400).json({ error: "kayıt yok" });
  for (const k of kayitlar) {
    const hata = gecerli(k);
    if (hata) return res.status(400).json({ error: hata });
  }
  const { data, error } = await supabase.from("tarife_veri").insert(kayitlar.map(temizle)).select("id");
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ eklenen: data.length });
}
