// api/dpp/tamir.js
import supabase from "../_supabase.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const {
    cihaz_id, tarih, yapilan_islem,
    degistirilen_parcalar, maliyet, servis_adi,
    servis_turu, benservis_is_id, fotograflar, notlar,
  } = req.body || {};

  if (!cihaz_id || !tarih || !yapilan_islem) {
    return res.status(400).json({ error: "cihaz_id, tarih ve yapilan_islem gerekli" });
  }

  // cihaz_id geçerli mi kontrol et
  const { data: cihaz, error: ce } = await supabase
    .from("cihazlar")
    .select("id")
    .eq("id", cihaz_id)
    .single();

  if (ce || !cihaz) return res.status(404).json({ error: "Cihaz bulunamadı" });

  const { data: tamir, error } = await supabase
    .from("tamir_kayitlari")
    .insert({
      cihaz_id,
      tarih,
      yapilan_islem,
      degistirilen_parcalar: degistirilen_parcalar || [],
      maliyet: maliyet || null,
      servis_adi: servis_adi || null,
      servis_turu: servis_turu || "harici",
      benservis_is_id: benservis_is_id || null,
      fotograflar: fotograflar || [],
      notlar: notlar || null,
    })
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  return res.status(201).json(tamir);
}
