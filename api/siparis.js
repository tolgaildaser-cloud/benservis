// api/siparis.js
// POST /api/siparis — Sepetten sipariş oluşturur (ödeme Benservis üzerinden).
// Body: { urun_idler: [uuid], alici_ad, alici_tel, alici_adres?, alici_email?, sozlesme_onay? }
// Fiyatlar SUNUCUDA DB'den hesaplanır — istemciden tutar kabul edilmez.
// YK #167 PR-6: sepetin tamamı Benservis (pazar) ürünüyse ve PayTR env tanımlıysa sipariş
// PayTR'ye gider → odeme_url = /odeme/:id (iFrame). Pazar ürünü varsa kargo (KARGO_TL) eklenir,
// e-posta + sözleşme onayı zorunlu. Diğer durumlarda eski "ödeme yakında" akışı aynen sürer.
import supabase from "./_supabase.js";
import { setCorsHeaders } from "./_verimor.js";
import { saticiHaritasi } from "./_satici.js";
import { paytrAyarlari } from "./_paytr.js";
import { KARGO_TL } from "../src/kargo.js";

const EPOSTA_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { urun_idler, alici_ad, alici_tel, alici_adres, alici_email, sozlesme_onay } = req.body || {};

  if (!Array.isArray(urun_idler) || urun_idler.length === 0) {
    return res.status(400).json({ error: "Sepet boş" });
  }
  if (urun_idler.length > 20) return res.status(400).json({ error: "Sepette en fazla 20 ürün olabilir" });
  if (!alici_ad?.trim())  return res.status(400).json({ error: "Ad soyad zorunludur" });
  if (!alici_tel?.trim()) return res.status(400).json({ error: "Telefon zorunludur" });
  if (String(alici_tel).replace(/\D/g, "").length < 10) {
    return res.status(400).json({ error: "Geçerli bir telefon girin" });
  }

  // Ürünleri DB'den çek — fiyat ve stok (durum=aktif) doğrulaması
  const { data: urunler, error } = await supabase
    .from("servis_urunler")
    .select("id, servis_id, satici_id, baslik, fiyat, durum, stok")
    .in("id", urun_idler);

  if (error) return res.status(500).json({ error: error.message });
  if (!urunler || urunler.length !== urun_idler.length) {
    return res.status(409).json({ error: "Sepetteki bazı ürünler artık mevcut değil. Sepeti yenileyin." });
  }
  const pasif = urunler.filter(u => u.durum !== "aktif");
  if (pasif.length > 0) {
    return res.status(409).json({
      error: `"${pasif[0].baslik}" satışta değil (satılmış olabilir). Sepetten çıkarın.`,
      pasif_idler: pasif.map(u => u.id),
    });
  }

  // YK #166 PR-2: stok 0 olan ürün sipariş edilemez.
  const tukenen = urunler.filter(u => !(u.stok > 0));
  if (tukenen.length > 0) {
    return res.status(409).json({
      error: `"${tukenen[0].baslik}" stokta yok. Sepetten çıkarın.`,
      pasif_idler: tukenen.map(u => u.id),
    });
  }

  // Satıcı adlarını ekle — Benservis ürününde servis_id boş, ad `saticilar`dan.
  const servisIdler = [...new Set(urunler.map(u => u.servis_id).filter(Boolean))];
  const svMap = {};
  if (servisIdler.length > 0) {
    const { data: servisler } = await supabase
      .from("servis_basvurulari").select("id, ad").in("id", servisIdler);
    (servisler || []).forEach(sv => { svMap[sv.id] = sv.ad; });
  }
  const saticiMap = await saticiHaritasi(supabase, urunler.map(u => u.satici_id));

  const kalemler = urunler.map(u => {
    const satici = saticiMap[u.satici_id];
    return {
      urun_id:    u.id,
      baslik:     u.baslik,
      fiyat:      u.fiyat,
      servis_id:  u.servis_id,
      servis_ad:  svMap[u.servis_id] || satici?.ad || "Servis",
      satici_id:  u.satici_id || null,
      satici_tur: satici?.tur || null,
    };
  });
  const urunToplam = kalemler.reduce((s, k) => s + k.fiyat, 0);

  // Pazar (Benservis) ürünü: kargo ayrı satır, mesafeli satış onayı ve e-posta zorunlu.
  const pazarVar = kalemler.some(k => k.satici_tur === "benservis");
  const tamamiPazar = kalemler.every(k => k.satici_tur === "benservis");
  const email = String(alici_email || "").trim().toLowerCase();
  if (pazarVar) {
    if (sozlesme_onay !== true) {
      return res.status(400).json({ error: "Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi onayı gerekli" });
    }
    if (String(alici_adres || "").trim().length < 10) {
      return res.status(400).json({ error: "Kargo için açık teslimat adresi girin" });
    }
    if (!EPOSTA_RE.test(email) || email.length > 120) {
      return res.status(400).json({ error: "Geçerli bir e-posta adresi girin" });
    }
  }
  const kargo = pazarVar ? KARGO_TL : 0;
  const tutar = urunToplam + kargo;
  const paytr = tamamiPazar && Boolean(paytrAyarlari());

  const telStr = String(alici_tel);
  const tel = telStr.startsWith("+") ? telStr : `+90${telStr.replace(/^0/, "")}`;

  const { data: siparis, error: insErr } = await supabase
    .from("siparisler")
    .insert({
      urunler:     kalemler,
      tutar,
      alici_ad:    alici_ad.trim(),
      alici_tel:   tel,
      alici_adres: alici_adres?.trim() || null,
      ...(pazarVar ? {
        kargo_tl:         kargo,
        alici_email:      email,
        sozlesme_onay_at: new Date().toISOString(),
        sozlesme_onay_ip: (req.headers?.["x-forwarded-for"] || "").split(",")[0].trim() || null,
      } : {}),
      ...(paytr ? { odeme_saglayici: "paytr" } : {}),
    })
    .select("id, siparis_no, tutar, odeme_durumu, created_at")
    .single();

  if (insErr) return res.status(500).json({ error: insErr.message });

  return res.status(201).json({
    ok: true,
    siparis: { ...siparis, kargo_tl: kargo },
    odeme: paytr ? "paytr" : "yakinda",
    ...(paytr ? { odeme_url: `/odeme/${siparis.id}` } : {}),
  });
}
