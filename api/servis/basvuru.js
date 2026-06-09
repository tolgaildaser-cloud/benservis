// api/servis/basvuru.js
// POST /api/servis/basvuru — Servis panel kayıt başvurusu (public)
// Alanlar: ad, sahip_ad, email, telefon, il, ilce, adres?,
//          kategoriler[]?, yetkili?, tier?, yetkili_markalar[]?, notlar?
import supabase from "../_supabase.js";

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")   return res.status(405).json({ error: "Method not allowed" });

  const {
    ad, sahip_ad, email, telefon, il, ilce, adres,
    kategoriler, yetkili, tier, yetkili_markalar, notlar,
    lat, lng,
  } = req.body || {};

  // ── Zorunlu alan kontrolleri ────────────────────────────────────
  if (!ad?.trim())       return res.status(400).json({ error: "Servis adı zorunludur." });
  if (!sahip_ad?.trim()) return res.status(400).json({ error: "Yetkili kişi adı zorunludur." });
  if (!email?.trim())    return res.status(400).json({ error: "E-posta zorunludur." });
  if (!telefon?.trim())  return res.status(400).json({ error: "Telefon zorunludur." });
  if (!il?.trim())       return res.status(400).json({ error: "İl zorunludur." });
  if (!ilce?.trim())     return res.status(400).json({ error: "İlçe zorunludur." });

  const emailTemiz = email.trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTemiz)) {
    return res.status(400).json({ error: "Geçerli bir e-posta adresi girin." });
  }

  // ── Mükerrer başvuru kontrolü ───────────────────────────────────
  const { data: mevcut } = await supabase
    .from("servis_basvurulari")
    .select("id, durum")
    .eq("email", emailTemiz)
    .in("durum", ["bekliyor", "onaylandi"])
    .maybeSingle();

  if (mevcut) {
    if (mevcut.durum === "bekliyor")  return res.status(409).json({ error: "Bu e-posta ile bekleyen bir başvuru zaten var. Onay için bekleyin." });
    if (mevcut.durum === "onaylandi") return res.status(409).json({ error: "Bu e-posta adresi zaten kayıtlı bir servise ait." });
  }

  // Geçerli tier değerleri
  const gecerliTier = ["platin", "gold", "bronz", null, undefined, ""];
  if (!gecerliTier.includes(tier)) {
    return res.status(400).json({ error: "Geçersiz tier değeri." });
  }

  // ── Kaydet ─────────────────────────────────────────────────────
  const { data, error } = await supabase
    .from("servis_basvurulari")
    .insert({
      ad:               ad.trim(),
      sahip_ad:         sahip_ad.trim(),
      email:            emailTemiz,
      telefon:          telefon.trim(),
      il:               il.trim(),
      ilce:             ilce.trim(),
      adres:            adres?.trim() || null,
      kategoriler:      Array.isArray(kategoriler) ? kategoriler : [],
      yetkili:          Boolean(yetkili),
      tier:             tier || null,
      yetkili_markalar: Array.isArray(yetkili_markalar) ? yetkili_markalar : [],
      notlar:           notlar?.trim() || null,
      lat:              (lat != null && !isNaN(Number(lat))) ? Number(lat) : null,
      lng:              (lng != null && !isNaN(Number(lng))) ? Number(lng) : null,
    })
    .select("id, created_at")
    .single();

  if (error) return res.status(500).json({ error: error.message });

  return res.status(201).json({ ok: true, id: data.id });
}
