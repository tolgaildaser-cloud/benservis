// api/is/yeni.js
// POST /api/is/yeni
// Body: { servis_id?, servis_ad?, musteri_ad, musteri_tel, adres, tarih_tercihi?, cihaz?, belirti? }
// servis_id/servis_ad yoksa → havuz modu (durum=havuzda, ilçe parse edilir, servis yarışır).
// DEMO_SERVIS_ID set ise → tüm talepler demo servise yönlenir (havuz bypass).
import supabase from "../_supabase.js";
import { sendSMS, setCorsHeaders } from "../_verimor.js";

// Adres metninden ilçe tahmin eder: "Kadıköy, Moda Cad. 12/3" → "Kadıköy"
function ilcedenAdres(adres) {
  if (!adres) return null;
  const parca = adres.split(/[,\/]/)[0].trim();
  // Sade metin kalacak şekilde sayı ve özel karakterleri temizle
  return parca.replace(/\d.*/, "").trim() || null;
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  let {
    servis_id, servis_ad,
    musteri_ad, musteri_tel,
    adres, tarih_tercihi,
    cihaz, belirti, seri_no, ilce,
    lat, lng,
  } = req.body || {};

  // ── Demo modu: tüm talepler tek test hesabına yönlendirilir ─────
  const DEMO_SERVIS_ID = process.env.DEMO_SERVIS_ID;
  const DEMO_SERVIS_AD = process.env.DEMO_SERVIS_AD || "Demo Servis";
  if (DEMO_SERVIS_ID) {
    servis_id = DEMO_SERVIS_ID;
    servis_ad = DEMO_SERVIS_AD;
  }

  // Zorunlu alan kontrolü (servis_id opsiyonel — yoksa havuz modu)
  if (!musteri_ad || !musteri_tel || !adres) {
    return res.status(400).json({
      error: "musteri_ad, musteri_tel, adres zorunludur",
    });
  }

  // Havuz modu: DEMO kapalı ve servis_id verilmemişse
  const isHavuz = !servis_id && !DEMO_SERVIS_ID;

  // Telefon formatı: E.164
  const telStr = String(musteri_tel);
  const tel = telStr.startsWith("+") ? telStr : `+90${telStr.replace(/^0/, "")}`;

  // son_kabul_tarihi = şimdi + 30 dakika
  const son_kabul_tarihi = new Date(Date.now() + 30 * 60 * 1000).toISOString();

  const kayit = {
    musteri_ad,
    musteri_tel: tel,
    adres,
    tarih_tercihi: tarih_tercihi || null,
    cihaz: cihaz || null,
    belirti: belirti || null,
    seri_no: seri_no?.trim() || null,
    son_kabul_tarihi,
  };

  if (isHavuz) {
    // Havuz: servis_id null. Mesafe eşleştirmesi için müşteri koordinatı
    // (asıl yöntem); ilçe fallback olarak da saklanır (koordinat yoksa).
    kayit.ilce = (ilce && ilce.trim()) ? ilce.trim() : ilcedenAdres(adres);
    if (lat != null && !isNaN(Number(lat))) kayit.lat = Number(lat);
    if (lng != null && !isNaN(Number(lng))) kayit.lng = Number(lng);
    kayit.durum = "havuzda";
  } else {
    kayit.servis_id = servis_id;
    kayit.servis_ad = servis_ad;
  }

  const { data: is, error } = await supabase
    .from("is_talepleri")
    .insert(kayit)
    .select("id, is_no, durum, son_kabul_tarihi")
    .single();

  if (error) return res.status(500).json({ error: error.message });

  // SMS: havuzda → "servisler inceliyor", değilse → servis adı belirt
  try {
    const smsMesaj = isHavuz
      ? `Talebiniz alındı! İş No: #${is.is_no}. Bölgenizdeki servisler kısa sürede size ulaşacak. Takip: benservis.com/takip/${is.is_no}`
      : `Talebiniz ${servis_ad}'e iletildi. İş No: #${is.is_no}. Takip: benservis.com/takip/${is.is_no}`;
    await sendSMS(tel, smsMesaj);
  } catch (smsErr) {
    console.error("SMS gönderilemedi:", smsErr.message);
  }

  return res.status(201).json({ is, havuz: isHavuz });
}
