// api/is/yeni.js
// POST /api/is/yeni
// Body: { servis_id, servis_ad, musteri_ad, musteri_tel, adres, tarih_tercihi?, cihaz?, belirti? }
// Yeni is_talepleri kaydı oluşturur, müşteriye SMS gönderir.
import supabase from "../_supabase.js";
import { sendSMS, setCorsHeaders } from "../_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  let {
    servis_id, servis_ad,
    musteri_ad, musteri_tel,
    adres, tarih_tercihi,
    cihaz, belirti,
  } = req.body || {};

  // ── Demo modu: tüm talepler tek test hesabına yönlendirilir ─────
  // Vercel'de DEMO_SERVIS_ID set edilince aktif olur.
  const DEMO_SERVIS_ID = process.env.DEMO_SERVIS_ID;
  const DEMO_SERVIS_AD = process.env.DEMO_SERVIS_AD || "Demo Servis";
  if (DEMO_SERVIS_ID) {
    servis_id = DEMO_SERVIS_ID;
    servis_ad = DEMO_SERVIS_AD;
  }

  // Zorunlu alan kontrolü
  if (!servis_id || !servis_ad || !musteri_ad || !musteri_tel || !adres) {
    return res.status(400).json({
      error: "servis_id, servis_ad, musteri_ad, musteri_tel, adres zorunludur",
    });
  }

  // Telefon formatı: +90 ile başlaması gerekir (Twilio E.164)
  const telStr = String(musteri_tel);
  const tel = telStr.startsWith("+") ? telStr : `+90${telStr.replace(/^0/, "")}`;

  // son_kabul_tarihi = şimdi + 30 dakika
  const son_kabul_tarihi = new Date(Date.now() + 30 * 60 * 1000).toISOString();

  const { data: is, error } = await supabase
    .from("is_talepleri")
    .insert({
      servis_id,
      servis_ad,
      musteri_ad,
      musteri_tel: tel,
      adres,
      tarih_tercihi: tarih_tercihi || null,
      cihaz: cihaz || null,
      belirti: belirti || null,
      son_kabul_tarihi,
    })
    .select("id, is_no, durum, son_kabul_tarihi")
    .single();

  if (error) return res.status(500).json({ error: error.message });

  // Müşteriye SMS gönder (hata oluşursa iş yine de oluşmuş sayılır)
  try {
    await sendSMS(
      tel,
      `Talebiniz ${servis_ad}'e iletildi. İş No: #${is.is_no}. ` +
      `Takip: benservis.com/takip/${is.is_no}`
    );
  } catch (smsErr) {
    console.error("SMS gönderilemedi:", smsErr.message);
  }

  return res.status(201).json({ is });
}
