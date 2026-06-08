// api/admin/odemeler.js
// GET  /api/admin/odemeler?durum=bekliyor|yapildi|hepsi  — bekleyen/yapılan ödemeler
// PATCH /api/admin/odemeler { talep_id }                 — ödemeyi yapıldı işaretle + SMS
//
// Güvenlik: Authorization: Bearer $ADMIN_TOKEN header'ı gerekli
import supabase from "../_supabase.js";
import { sendSMS } from "../_verimor.js";

const BASE_URL = "https://benservis.com";

function e164(tel) {
  const d = (tel || "").replace(/[^0-9]/g, "");
  if (d.startsWith("90")) return "+" + d;
  if (d.startsWith("0"))  return "+9" + d;
  return "+90" + d;
}

function yetkiKontrol(req) {
  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken) return false;  // env yoksa kapalı
  const auth = req.headers["authorization"] || "";
  return auth === `Bearer ${adminToken}`;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (!yetkiKontrol(req)) {
    return res.status(401).json({ error: "Yetkisiz" });
  }

  // ─── GET ─────────────────────────────────────────────────────────────────
  if (req.method === "GET") {
    const durum = req.query.durum || "bekliyor";  // bekliyor | yapildi | hepsi

    let query = supabase
      .from("talepler")
      .select(`
        id, alici_ad, tutar, odeme_durumu, satici_odeme_durumu,
        teslim_onay_tarihi, satici_odeme_tarihi, iyzico_payment_id,
        ilanlar!inner (
          id, baslik, satici_ad, satici_iban
        )
      `)
      .eq("odeme_durumu", "teslim_onaylandi")
      .order("teslim_onay_tarihi", { ascending: true });

    if (durum === "bekliyor") {
      query = query.eq("satici_odeme_durumu", "bekliyor");
    } else if (durum === "yapildi") {
      query = query.eq("satici_odeme_durumu", "yapildi");
    }
    // "hepsi" → filtre yok

    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });

    // Toplam bekleyen tutar
    const bekleyenToplam = (data || [])
      .filter(t => t.satici_odeme_durumu === "bekliyor")
      .reduce((s, t) => s + (t.tutar || 0), 0);

    return res.status(200).json({ odemeler: data || [], bekleyen_toplam: bekleyenToplam });
  }

  // ─── PATCH — ödemeyi yapıldı işaretle ────────────────────────────────────
  if (req.method === "PATCH") {
    const { talep_id, not } = req.body || {};
    if (!talep_id) return res.status(400).json({ error: "talep_id gerekli" });

    // Talebi getir
    const { data: talep, error: te } = await supabase
      .from("talepler")
      .select(`
        id, alici_ad, tutar, satici_odeme_durumu, odeme_durumu,
        ilanlar!inner (baslik, satici_ad, satici_tel, satici_token)
      `)
      .eq("id", talep_id)
      .single();

    if (te || !talep) return res.status(404).json({ error: "Talep bulunamadı" });
    if (talep.odeme_durumu !== "teslim_onaylandi")
      return res.status(400).json({ error: "Talep henüz teslim onaylanmadı" });
    if (talep.satici_odeme_durumu === "yapildi")
      return res.status(400).json({ error: "Bu ödeme zaten yapıldı" });

    // Güncelle
    await supabase.from("talepler")
      .update({
        satici_odeme_durumu: "yapildi",
        satici_odeme_tarihi: new Date().toISOString(),
      })
      .eq("id", talep_id);

    // Satıcıya SMS
    try {
      await sendSMS(
        e164(talep.ilanlar.satici_tel),
        `Benservis: "${talep.ilanlar.baslik}" satışından ${Number(talep.tutar).toLocaleString("tr-TR")} TL IBAN'ınıza transfer edildi.${not ? `\nNot: ${not}` : ""}`
      );
    } catch (e) { console.error("SMS hatası:", e.message); }

    return res.status(200).json({ ok: true, talep_id });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
