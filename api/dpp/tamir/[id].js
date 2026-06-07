// api/dpp/tamir/[id].js
// PATCH /api/dpp/tamir/:id — Tamir kaydını zenginleştir
// Yetki: JWT'deki servis_id === tamir_kayitlari.servis_id
import supabase from "../../_supabase.js";
import { setCorsHeaders } from "../../_twilio.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "PATCH") return res.status(405).json({ error: "Method not allowed" });

  // JWT doğrulama
  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (!token) return res.status(401).json({ error: "Token gerekli" });

  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

  const servis_id = user.user_metadata?.servis_id;
  if (!servis_id) return res.status(403).json({ error: "Servis kimliği bulunamadı" });

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Tamir ID gerekli" });

  // Tamir kaydını getir, sahiplik kontrol et
  const { data: tamir, error: fetchErr } = await supabase
    .from("tamir_kayitlari")
    .select("id, servis_id")
    .eq("id", id)
    .single();

  if (fetchErr || !tamir) return res.status(404).json({ error: "Tamir kaydı bulunamadı" });
  if (tamir.servis_id !== servis_id) return res.status(403).json({ error: "Bu kaydı düzenleyemezsiniz" });

  const {
    yapilan_islem,
    degistirilen_parcalar,
    maliyet,
    fotograflar,
    notlar,
  } = req.body || {};

  // En az bir alan zorunlu
  if (
    yapilan_islem === undefined &&
    degistirilen_parcalar === undefined &&
    maliyet === undefined &&
    fotograflar === undefined &&
    notlar === undefined
  ) {
    return res.status(400).json({ error: "En az bir alan gerekli" });
  }

  // Güncelleme objesi — sadece gönderilen alanlar
  const guncelleme = {};
  if (yapilan_islem !== undefined) guncelleme.yapilan_islem = yapilan_islem;
  if (degistirilen_parcalar !== undefined) {
    if (!Array.isArray(degistirilen_parcalar) || !degistirilen_parcalar.every(p => typeof p === "string")) {
      return res.status(400).json({ error: "degistirilen_parcalar string dizisi olmalı" });
    }
    guncelleme.degistirilen_parcalar = degistirilen_parcalar;
  }
  if (maliyet !== undefined) {
    if (maliyet !== null) {
      const maliyetNum = Number(maliyet);
      if (isNaN(maliyetNum) || maliyetNum < 0) {
        return res.status(400).json({ error: "Geçersiz maliyet: sıfır veya pozitif sayı olmalı" });
      }
      guncelleme.maliyet = maliyetNum;
    } else {
      guncelleme.maliyet = null;
    }
  }
  if (fotograflar !== undefined) {
    if (!Array.isArray(fotograflar) || !fotograflar.every(u => typeof u === "string")) {
      return res.status(400).json({ error: "fotograflar string dizisi olmalı" });
    }
    guncelleme.fotograflar = fotograflar;
  }
  if (notlar !== undefined) guncelleme.notlar = notlar;

  const { data: guncellendi, error: updateErr } = await supabase
    .from("tamir_kayitlari")
    .update(guncelleme)
    .eq("id", id)
    .select()
    .single();

  if (updateErr) return res.status(500).json({ error: updateErr.message });
  return res.status(200).json(guncellendi);
}
