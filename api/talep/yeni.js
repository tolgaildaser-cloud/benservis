// api/talep/yeni.js
// POST /api/talep/yeni
// Body: { ilan_id, alici_ad, alici_tel, ilk_mesaj? }
// Alıcı talebi oluşturur, satıcıya SMS gönderir, alici_token döndürür.
// Güvenlik: public + satıcıya SMS → per-IP rate-limit (taciz/kredi-yakma önle).
import supabase from "../_supabase.js";
import { sendSMS } from "../_verimor.js";
import { withRateLimit } from "../_ratelimit.js";
import crypto from "crypto";

const BASE_URL = "https://benservis.com";

function e164(tel) {
  const d = (tel || "").replace(/[^0-9]/g, "");
  if (d.startsWith("90")) return "+" + d;
  if (d.startsWith("0"))  return "+9" + d;
  return "+90" + d;
}

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { ilan_id, alici_ad, alici_tel, alici_email, ilk_mesaj } = req.body || {};

  if (!ilan_id?.trim())   return res.status(400).json({ error: "ilan_id gerekli" });
  if (!alici_ad?.trim())  return res.status(400).json({ error: "Ad gerekli" });
  if (!alici_tel?.trim()) return res.status(400).json({ error: "Telefon gerekli" });

  // Sunucu-tarafı uzunluk tavanları (client atlatılabilir; alici_ad SMS'e girdiği için de önemli)
  const cokUzun = (v, n) => v != null && String(v).length > n;
  if (
    cokUzun(ilan_id, 100) || cokUzun(alici_ad, 100) || cokUzun(alici_tel, 20) ||
    cokUzun(alici_email, 200) || cokUzun(ilk_mesaj, 2000)
  ) {
    return res.status(400).json({ error: "Girdi çok uzun" });
  }

  // İlanı getir
  const { data: ilan, error: ie } = await supabase
    .from("ilanlar")
    .select("id, baslik, fiyat, satici_tel, satici_token, durum")
    .eq("id", ilan_id.trim())
    .single();

  if (ie || !ilan) return res.status(404).json({ error: "İlan bulunamadı" });
  if (ilan.durum !== "aktif") return res.status(400).json({ error: "Bu ilan artık aktif değil" });

  // satici_token yoksa oluştur (eski ilanlar için backfill)
  let saticiToken = ilan.satici_token;
  if (!saticiToken) {
    saticiToken = crypto.randomUUID();
    await supabase.from("ilanlar").update({ satici_token: saticiToken }).eq("id", ilan_id);
  }

  const alici_token = crypto.randomUUID();

  // Talep oluştur
  const { data: talep, error: te } = await supabase
    .from("talepler")
    .insert({
      ilan_id:      ilan_id.trim(),
      alici_ad:     alici_ad.trim(),
      alici_tel:    alici_tel.trim(),
      alici_email:  alici_email?.trim() || null,
      alici_token,
      ilk_mesaj:    ilk_mesaj?.trim() || null,
      tutar:        ilan.fiyat,
    })
    .select()
    .single();

  if (te) return res.status(500).json({ error: te.message });

  // İlk mesajı ekle
  if (ilk_mesaj?.trim()) {
    await supabase.from("mesajlar").insert({
      talep_id: talep.id,
      gonderen: "alici",
      icerik:   ilk_mesaj.trim(),
    });
  }

  // Satıcıya SMS
  const saticiUrl  = `${BASE_URL}/ikinci-el/satis/${saticiToken}`;
  try {
    await sendSMS(
      e164(ilan.satici_tel),
      `Benservis: "${ilan.baslik}" ilanınıza talep geldi!\n${alici_ad.trim()} ilgileniyor.\nYanıtla: ${saticiUrl}`
    );
  } catch (e) {
    console.error("Satici SMS hatasi:", e.message);
  }

  const aliciUrl = `${BASE_URL}/ikinci-el/alici/${alici_token}`;
  return res.status(201).json({ talep_id: talep.id, alici_token, alici_url: aliciUrl });
}

// Public + satıcıya SMS gönderir → taciz/kredi-yakma önlemek için per-IP 8/saat (fail-open).
export default withRateLimit(handler, {
  prefix: "talep-yeni",
  limits: [{ tokens: 8, window: "1 h" }],
});
