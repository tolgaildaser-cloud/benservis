// api/admin/servis-basvurulari.js
// GET   /api/admin/servis-basvurulari?durum=bekliyor|onaylandi|reddedildi
// PATCH /api/admin/servis-basvurulari  — { id, action: "onayla"|"reddet" }
// Güvenlik: Authorization: Bearer $ADMIN_TOKEN
//
// Onayda: Supabase Auth kullanıcısı açılır + SMS gönderilir.
// Kullanıcı user_metadata: { servis_id: basvuru.id, servis_ad, il, ilce }
import supabase from "../_supabase.js";
import { sendSMS } from "../_verimor.js";
import { randomBytes } from "crypto";

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

function yetkiKontrol(req) {
  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken) return false;
  return (req.headers["authorization"] || "") === `Bearer ${adminToken}`;
}

function tempSifre() {
  // 8 hex + sabit son → 11 karakter, büyük harf + özel karakter garantili
  return randomBytes(4).toString("hex") + randomBytes(4).toString("hex").toUpperCase() + "!5";
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (!yetkiKontrol(req)) return res.status(401).json({ error: "Yetkisiz — ADMIN_TOKEN hatalı" });

  // ── GET: Başvuruları listele ─────────────────────────────────────
  if (req.method === "GET") {
    const durum   = req.query.durum || "bekliyor";
    const gecerli = ["bekliyor", "onaylandi", "reddedildi"];

    let query = supabase
      .from("servis_basvurulari")
      .select("*")
      .order("created_at", { ascending: false });

    if (gecerli.includes(durum)) query = query.eq("durum", durum);

    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({
      basvurular: data || [],
      toplam: data?.length || 0,
    });
  }

  // ── PATCH: Onayla / Reddet ───────────────────────────────────────
  if (req.method === "PATCH") {
    const { id, action } = req.body || {};

    if (!id)     return res.status(400).json({ error: "id zorunlu" });
    if (!["onayla", "reddet"].includes(action)) {
      return res.status(400).json({ error: "action: 'onayla' | 'reddet'" });
    }

    // Başvuruyu getir
    const { data: bav, error: bavErr } = await supabase
      .from("servis_basvurulari")
      .select("*")
      .eq("id", id)
      .single();

    if (bavErr || !bav) return res.status(404).json({ error: "Başvuru bulunamadı" });
    if (bav.durum !== "bekliyor") {
      return res.status(409).json({ error: `Başvuru zaten '${bav.durum}' durumunda` });
    }

    // ── Reddet ──────────────────────────────────────────────────────
    if (action === "reddet") {
      const { error } = await supabase
        .from("servis_basvurulari")
        .update({ durum: "reddedildi" })
        .eq("id", id);

      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ ok: true, durum: "reddedildi" });
    }

    // ── Onayla: Auth kullanıcısı oluştur ───────────────────────────
    const sifre = tempSifre();

    const { data: authData, error: createErr } = await supabase.auth.admin.createUser({
      email:         bav.email,
      password:      sifre,
      email_confirm: true,   // E-posta doğrulaması gerekmeden giriş yapabilsin
      user_metadata: {
        servis_id:   bav.id,   // ServisPanel.jsx bu alan ile filtre yapar
        servis_ad:   bav.ad,
        il:          bav.il,
        ilce:        bav.ilce,
        servis_ilce: bav.ilce, // api/is/havuz.js — havuz ilçe eşleştirmesi için
      },
    });

    if (createErr) {
      // E-posta zaten varsa farklı hata döndür
      const mesaj = createErr.message?.toLowerCase().includes("already")
        ? "Bu e-posta ile zaten bir hesap var. Kullanıcıyı manuel güncelleyin."
        : `Hesap oluşturulamadı: ${createErr.message}`;
      return res.status(500).json({ error: mesaj });
    }

    // Başvuruyu güncelle
    const { error: updErr } = await supabase
      .from("servis_basvurulari")
      .update({ durum: "onaylandi", supabase_user_id: authData.user.id })
      .eq("id", id);

    if (updErr) return res.status(500).json({ error: updErr.message });

    // SMS ile giriş bilgileri gönder (non-blocking)
    try {
      await sendSMS(
        bav.telefon,
        `Benservis panel hesabınız açıldı! ` +
        `Giriş: benservis.com/panel | ` +
        `E-posta: ${bav.email} | ` +
        `Şifre: ${sifre}`
      );
    } catch (e) {
      console.error("SMS hatası (servis onay):", e.message);
    }

    return res.status(200).json({
      ok:      true,
      durum:   "onaylandi",
      email:   bav.email,
      sifre,               // Admin panelde tek sefer gösterilir — kaydet!
      user_id: authData.user.id,
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
