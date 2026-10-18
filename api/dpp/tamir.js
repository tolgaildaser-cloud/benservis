// api/dpp/tamir.js
// POST /api/dpp/tamir — DPP tamir kaydı ekler.
// Yetki (18 Eki 2026, IT incelemesi PR #333 PR-dışı bulgu): eskiden kimlik kontrolü YOKTU, oturumsuz biri
// var olan her cihaza tamir kaydı ekleyebiliyordu. Artık diğer servis uçlarıyla aynı: Bearer JWT →
// getUser → servis_id YALNIZ app_metadata'dan (servisIdOku, #176); yoksa 401/403. Kaydın servis_id'si
// istekten değil oturumdan yazılır (PATCH /api/dpp/tamir/:id sahipliği buna dayanır).
import supabase from "../_supabase.js";
import { servisIdOku } from "../../src/servis-kimlik.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const token = (req.headers?.authorization || "").replace("Bearer ", "").trim();
  if (!token) return res.status(401).json({ error: "Token gerekli" });
  const { data: { user } = {}, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });
  const servis_id = servisIdOku(user);
  if (!servis_id) return res.status(403).json({ error: "Servis kimliği bulunamadı" });

  const {
    cihaz_id, tarih, yapilan_islem,
    degistirilen_parcalar, maliyet, servis_adi,
    servis_turu, benservis_is_id, fotograflar, notlar,
  } = req.body || {};

  if (!cihaz_id || !tarih || !yapilan_islem) {
    return res.status(400).json({ error: "cihaz_id, tarih ve yapilan_islem gerekli" });
  }

  if (isNaN(Date.parse(tarih))) {
    return res.status(400).json({ error: "Geçersiz tarih formatı" });
  }

  const GECERLI_SERVIS_TURLERI = ["harici", "yetkili", "benservis", "sahip"];
  if (servis_turu && !GECERLI_SERVIS_TURLERI.includes(servis_turu)) {
    return res.status(400).json({ error: "Geçersiz servis_turu. Geçerli değerler: harici, yetkili, benservis, sahip" });
  }

  // cihaz_id geçerli mi kontrol et
  const { data: cihaz, error: ce } = await supabase
    .from("cihazlar")
    .select("id")
    .eq("id", cihaz_id)
    .single();

  if (ce) {
    if (ce.code === "PGRST116") return res.status(404).json({ error: "Cihaz bulunamadı" });
    return res.status(500).json({ error: "Veritabanı hatası" });
  }
  if (!cihaz) return res.status(404).json({ error: "Cihaz bulunamadı" });

  const { data: tamir, error } = await supabase
    .from("tamir_kayitlari")
    .insert({
      cihaz_id,
      servis_id,
      tarih,
      yapilan_islem,
      degistirilen_parcalar: degistirilen_parcalar || [],
      maliyet: (maliyet !== undefined && maliyet !== null) ? maliyet : null,
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
