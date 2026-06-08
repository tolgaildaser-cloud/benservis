// api/talep/alici/[token].js
// GET  /api/talep/alici/:token — talep + mesajlar + ilan özeti
// POST /api/talep/alici/:token { action: 'mesaj', icerik }  → mesaj gönder
// POST /api/talep/alici/:token { action: 'teslim_onayla' }  → teslim onayı
import supabase from "../../_supabase.js";
import { sendSMS } from "../../_verimor.js";

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

  // Talep getir (satici_tel hiçbir zaman dönülmez)
  const { data: talep, error: te } = await supabase
    .from("talepler")
    .select(`
      id, alici_ad, alici_email, odeme_durumu, tutar, created_at, teslim_onay_tarihi,
      ilanlar!inner (
        id, baslik, fiyat, konum, aciklama, fotograflar, satici_ad, satici_token,
        satici_tel, satici_iban,
        seri_no
      )
    `)
    .eq("alici_token", token)
    .single();

  if (te || !talep) return res.status(404).json({ error: "Talep bulunamadı" });

  // ─── GET ───────────────────────────────────────────────────────────────────
  if (req.method === "GET") {
    const { data: mesajlar } = await supabase
      .from("mesajlar")
      .select("id, gonderen, icerik, created_at")
      .eq("talep_id", talep.id)
      .order("created_at", { ascending: true });

    // Satıcı bilgilerini okunmamış olarak işaretle
    await supabase
      .from("mesajlar")
      .update({ okundu: true })
      .eq("talep_id", talep.id)
      .eq("gonderen", "satici")
      .eq("okundu", false);

    // satici_tel ve satici_iban alıcıya dönülmez
    const { satici_tel: _tel, satici_iban: _iban, satici_token: _tok, ...ilanPublic } = talep.ilanlar;

    return res.status(200).json({
      talep: {
        id:                talep.id,
        alici_ad:          talep.alici_ad,
        odeme_durumu:      talep.odeme_durumu,
        tutar:             talep.tutar,
        created_at:        talep.created_at,
        teslim_onay_tarihi: talep.teslim_onay_tarihi,
      },
      ilan:    ilanPublic,
      mesajlar: mesajlar || [],
    });
  }

  // ─── POST ──────────────────────────────────────────────────────────────────
  if (req.method === "POST") {
    const { action, icerik } = req.body || {};

    // — Mesaj gönder —
    if (action === "mesaj") {
      if (!icerik?.trim()) return res.status(400).json({ error: "Mesaj boş olamaz" });
      if (["teslim_onaylandi", "iptal"].includes(talep.odeme_durumu))
        return res.status(400).json({ error: "Bu talep kapalı" });

      await supabase.from("mesajlar").insert({
        talep_id: talep.id, gonderen: "alici", icerik: icerik.trim(),
      });

      // Satıcıya SMS bildirimi
      const saticiUrl = `${BASE_URL}/ikinci-el/satis/${talep.ilanlar.satici_token}`;
      try {
        await sendSMS(
          e164(talep.ilanlar.satici_tel),
          `Benservis: "${talep.ilanlar.baslik}" ilanında yeni mesaj var.\nPanele git: ${saticiUrl}`
        );
      } catch (e) { console.error("SMS hatası:", e.message); }

      return res.status(200).json({ ok: true });
    }

    // — Teslim onayla —
    if (action === "teslim_onayla") {
      if (talep.odeme_durumu !== "odendi")
        return res.status(400).json({ error: "Ödeme alınmadan teslim onaylanamaz" });

      await supabase.from("talepler")
        .update({
          odeme_durumu:        "teslim_onaylandi",
          teslim_onay_tarihi:  new Date().toISOString(),
          satici_odeme_durumu: "bekliyor",  // admin payout queue'ya düşer
        })
        .eq("id", talep.id);

      // İlanı satıldı olarak işaretle
      await supabase.from("ilanlar")
        .update({ durum: "satildi" })
        .eq("id", talep.ilanlar.id);

      // Satıcıya SMS: ödeme serbest bırakıldı
      try {
        await sendSMS(
          e164(talep.ilanlar.satici_tel),
          `Benservis: Alıcı teslimi onayladı! ${talep.tutar?.toLocaleString("tr-TR")} TL kısa süre içinde IBAN'ınıza transfer edilecek.\nPanel: ${BASE_URL}/ikinci-el/satis/${talep.ilanlar.satici_token}`
        );
      } catch (e) { console.error("SMS hatası:", e.message); }

      return res.status(200).json({ ok: true, odeme_durumu: "teslim_onaylandi" });
    }

    return res.status(400).json({ error: "Geçersiz action" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
