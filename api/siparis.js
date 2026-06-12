// api/siparis.js
// POST /api/siparis — Sepetten sipariş oluşturur (ödeme Benservis üzerinden).
// Body: { urun_idler: [uuid], alici_ad, alici_tel, alici_adres? }
// Fiyatlar SUNUCUDA DB'den hesaplanır — istemciden tutar kabul edilmez.
// iyzico yapılandırılmamışsa sipariş 'odeme_bekleniyor' olarak kaydedilir,
// frontend "ödeme yakında" onay ekranı gösterir. iyzico gelince burada
// checkout form initialize edilip odeme_url dönülecek.
import supabase from "./_supabase.js";
import { setCorsHeaders } from "./_verimor.js";

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { urun_idler, alici_ad, alici_tel, alici_adres } = req.body || {};

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
    .select("id, servis_id, baslik, fiyat, durum")
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

  // Satıcı adlarını ekle
  const servisIdler = [...new Set(urunler.map(u => u.servis_id))];
  const { data: servisler } = await supabase
    .from("servis_basvurulari").select("id, ad").in("id", servisIdler);
  const svMap = {};
  (servisler || []).forEach(sv => { svMap[sv.id] = sv.ad; });

  const kalemler = urunler.map(u => ({
    urun_id:   u.id,
    baslik:    u.baslik,
    fiyat:     u.fiyat,
    servis_id: u.servis_id,
    servis_ad: svMap[u.servis_id] || "Servis",
  }));
  const tutar = kalemler.reduce((s, k) => s + k.fiyat, 0);

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
    })
    .select("id, siparis_no, tutar, odeme_durumu, created_at")
    .single();

  if (insErr) return res.status(500).json({ error: insErr.message });

  // Ödeme: iyzico yapılandırıldıysa checkout başlat, değilse 'yakinda'
  const iyzicoHazir = Boolean(process.env.IYZICO_API_KEY && process.env.IYZICO_SECRET_KEY);

  return res.status(201).json({
    ok: true,
    siparis,
    odeme: iyzicoHazir ? "iyzico" : "yakinda",
    // iyzico entegre olduğunda: odeme_url buraya eklenecek
  });
}
