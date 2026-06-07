// api/talep/satici/[token].js
// Satıcı paneli — token = ilanlar.satici_token
// GET  ?talep_id=  — tek talep + mesajlar
// GET  (no param)  — tüm talepler listesi
// POST { action:'mesaj', talep_id, icerik } — mesaj gönder
import supabase from "../../_supabase.js";
import { sendSMS } from "../../_twilio.js";

const BASE_URL = "https://benservis.com";

function e164(tel) {
  const d = (tel || "").replace(/[^0-9]/g, "");
  if (d.startsWith("90")) return "+" + d;
  if (d.startsWith("0"))  return "+9" + d;
  return "+90" + d;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { token } = req.query;
  if (!token) return res.status(400).json({ error: "token gerekli" });

  // İlanı bul (alici_tel ve alici bilgileri asla dönülmez dışarıya)
  const { data: ilan, error: ie } = await supabase
    .from("ilanlar")
    .select("id, baslik, fiyat, durum, satici_ad, satici_iban, created_at")
    .eq("satici_token", token)
    .single();

  if (ie || !ilan) return res.status(404).json({ error: "İlan bulunamadı" });

  // ─── GET ───────────────────────────────────────────────────────────────────
  if (req.method === "GET") {
    const { talep_id } = req.query;

    // Tek talep + mesajlar
    if (talep_id) {
      const { data: talep, error: te } = await supabase
        .from("talepler")
        .select("id, alici_ad, alici_email, odeme_durumu, tutar, created_at, teslim_onay_tarihi, ilk_mesaj")
        .eq("id", talep_id)
        .eq("ilan_id", ilan.id)  // güvenlik: sadece bu ilana ait talepler
        .single();

      if (te || !talep) return res.status(404).json({ error: "Talep bulunamadı" });

      const { data: mesajlar } = await supabase
        .from("mesajlar")
        .select("id, gonderen, icerik, created_at")
        .eq("talep_id", talep_id)
        .order("created_at", { ascending: true });

      // Alıcı mesajlarını okundu işaretle
      await supabase.from("mesajlar")
        .update({ okundu: true })
        .eq("talep_id", talep_id)
        .eq("gonderen", "alici")
        .eq("okundu", false);

      // alici_tel asla dönülmez
      return res.status(200).json({ ilan, talep, mesajlar: mesajlar || [] });
    }

    // Tüm talepler listesi
    const { data: talepler } = await supabase
      .from("talepler")
      .select("id, alici_ad, odeme_durumu, tutar, created_at, ilk_mesaj")
      .eq("ilan_id", ilan.id)
      .order("created_at", { ascending: false });

    // Her talep için okunmamış mesaj sayısı
    const taleplerWithUnread = await Promise.all(
      (talepler || []).map(async (t) => {
        const { count } = await supabase
          .from("mesajlar")
          .select("id", { count: "exact", head: true })
          .eq("talep_id", t.id)
          .eq("gonderen", "alici")
          .eq("okundu", false);
        return { ...t, okunmamis: count || 0 };
      })
    );

    return res.status(200).json({ ilan, talepler: taleplerWithUnread });
  }

  // ─── POST ──────────────────────────────────────────────────────────────────
  if (req.method === "POST") {
    const { action, talep_id, icerik } = req.body || {};

    if (action !== "mesaj") return res.status(400).json({ error: "Geçersiz action" });
    if (!talep_id)          return res.status(400).json({ error: "talep_id gerekli" });
    if (!icerik?.trim())    return res.status(400).json({ error: "Mesaj boş olamaz" });

    // Talebin bu ilana ait olduğunu doğrula (hem alici_tel için hem güvenlik)
    const { data: talep } = await supabase
      .from("talepler")
      .select("id, alici_tel, alici_token, odeme_durumu, ilanlar!inner(baslik)")
      .eq("id", talep_id)
      .eq("ilan_id", ilan.id)
      .single();

    if (!talep) return res.status(404).json({ error: "Talep bulunamadı" });
    if (["teslim_onaylandi", "iptal"].includes(talep.odeme_durumu))
      return res.status(400).json({ error: "Bu talep kapalı" });

    await supabase.from("mesajlar").insert({
      talep_id, gonderen: "satici", icerik: icerik.trim(),
    });

    // Alıcıya SMS bildirimi
    const aliciUrl = `${BASE_URL}/ikinci-el/alici/${talep.alici_token}`;
    try {
      await sendSMS(
        e164(talep.alici_tel),
        `Benservis: "${talep.ilanlar.baslik}" ilanında satıcıdan yeni mesaj var.\nGörüntüle: ${aliciUrl}`
      );
    } catch (e) { console.error("SMS hatası:", e.message); }

    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
