// api/admin/sifre-reset.js
// POST /api/admin/sifre-reset — { email } — Servis hesabı şifresini sıfırlar
// Güvenlik: Authorization: Bearer $ADMIN_TOKEN
// GoTrue admin API üzerinden günceller — hash formatı garantili uyumlu.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { randomBytes } from "crypto";

function tempSifre() {
  return randomBytes(4).toString("hex") + randomBytes(4).toString("hex").toUpperCase() + "!5";
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken || (req.headers["authorization"] || "") !== `Bearer ${adminToken}`) {
    return res.status(401).json({ error: "Yetkisiz" });
  }

  const { email } = req.body || {};
  if (!email?.trim()) return res.status(400).json({ error: "email gerekli" });

  const emailTemiz = email.trim().toLowerCase();

  // Kullanıcıyı e-posta ile bul
  const { data: liste, error: listErr } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
  if (listErr) return res.status(500).json({ error: listErr.message });

  const user = (liste?.users || []).find(u => u.email?.toLowerCase() === emailTemiz);
  if (!user) return res.status(404).json({ error: "Bu e-posta ile kullanıcı bulunamadı" });

  const sifre = tempSifre();
  const { error: updErr } = await supabase.auth.admin.updateUserById(user.id, { password: sifre });
  if (updErr) return res.status(500).json({ error: updErr.message });

  return res.status(200).json({
    ok: true,
    email: user.email,
    sifre, // tek sefer gösterilir — kaydet!
    servis_ad: user.user_metadata?.servis_ad || null,
  });
}
