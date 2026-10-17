// api/siparis.js
// POST /api/siparis — Sepetten sipariş oluşturur (ödeme Benservis üzerinden).
// Body: { urun_idler: [uuid], alici_ad, alici_tel, alici_adres?, alici_il?, alici_ilce?, alici_mahalle?, alici_email?, sozlesme_onay? }
// 16 Eki 2026 (Tolga): pazar siparişinde telefon YALNIZ CEP ve "saçma rakam" reddi; il/ilçe listeden, mahalle +
// açık adres zorunlu, ayrı kolonlara yazılır. Kurallar src/teslimat-dogrula.js (istemciyle ortak).
// Fiyatlar SUNUCUDA DB'den hesaplanır — istemciden tutar kabul edilmez.
// YK #167 PR-6: sepetin tamamı Benservis (pazar) ürünüyse ve PayTR env tanımlıysa sipariş
// PayTR'ye gider → odeme_url = /odeme/:id (iFrame). Pazar ürünü varsa kargo eklenir (src/kargo.js:
// 189 TL; pazar ürünleri 3.000 TL'yi aşarsa aynı tutar "kargo indirimi" olarak düşülür),
// e-posta + sözleşme onayı zorunlu. Diğer durumlarda eski "ödeme yakında" akışı aynen sürer.
// YK #171 İE-3: `ilanlar: [{ id, teslim }]` — Benservis'in ikinci el ilanı (`ilanlar` tablosu).
// Fiyat DB'den; teslim ilanın açtığı seçeneklerden biri olmalı; kargo eklenmez; nakliye/montaj
// ücreti "ayrıca hesaplanır" (tutar yok, PayTR yalnız ürün bedeli). Ödeme sonrası ilan
// `satildi` olur (api/odeme/callback.js).
// Sepet kilidi (Tolga, 11 Eki 12:4x): ilan başka bir sepette süresi dolmamış kilitliyse 409.
// Kilit boşsa ya da bu sepetinse sipariş anında ödeme süresince (30 dk) bu sepete kilitlenir.
// YK #174 (13 Eki): `odeme_yontemi: "havale"` — PayTR reddi sonrası geçici yol. Sipariş
// `odeme_saglayici = havale`, `odeme_bekleniyor` yazılır; cevapta hesap adı + IBAN + tutar + açıklama
// (sipariş no) döner. İkinci el ayırması 24 saate uzar; yedek parça stoğu düşmez. Admin "ödeme geldi"
// deyince `odendi` (api/admin/pazar.js), 24 saatte gelmezse cron iptal eder (api/cron/expire.js).
import supabase from "./_supabase.js";
import { setCorsHeaders } from "./_verimor.js";
import { saticiHaritasi } from "./_satici.js";
import { paytrAyarlari } from "./_paytr.js";
import { havaleAyarlari, odemeSecenekleri } from "./_havale.js";
import { KAPI_METNI, KAPI_KODU } from "../src/odeme-kapisi.js";
import { kargoHesapla } from "../src/kargo.js";
import { ilanTeslimSecenekleri } from "../src/ikinci-el-teslim.js";
import { ODEME_KILIT_DK } from "../src/ikinci-el-kilit.js";
import { anahtarGecerli, ilanKilitle } from "./_kilit.js";
import { HAVALE_KILIT_DK, havaleSonu } from "../src/havale.js";
import { cepDogrula, adresDogrula } from "../src/teslimat-dogrula.js";

const EPOSTA_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { alici_ad, alici_tel, alici_adres, alici_il, alici_ilce, alici_mahalle, alici_email, sozlesme_onay } = req.body || {};
  const urun_idler = Array.isArray(req.body?.urun_idler) ? req.body.urun_idler : [];
  const ilanIstek = Array.isArray(req.body?.ilanlar) ? req.body.ilanlar : [];
  const sepetAnahtari = req.body?.sepet_anahtari;
  if (ilanIstek.length && !anahtarGecerli(sepetAnahtari)) {
    return res.status(400).json({ error: "Sepet anahtarı eksik. Sayfayı yenileyip tekrar deneyin." });
  }

  if (urun_idler.length + ilanIstek.length === 0) {
    return res.status(400).json({ error: "Sepet boş" });
  }
  if (urun_idler.length + ilanIstek.length > 20) return res.status(400).json({ error: "Sepette en fazla 20 ürün olabilir" });
  if (!alici_ad?.trim())  return res.status(400).json({ error: "Ad soyad zorunludur" });
  if (!alici_tel?.trim()) return res.status(400).json({ error: "Telefon zorunludur" });
  if (String(alici_tel).replace(/\D/g, "").length < 10) {
    return res.status(400).json({ error: "Geçerli bir telefon girin" });
  }

  // Ürünleri DB'den çek — fiyat ve stok (durum=aktif) doğrulaması
  const { data: urunler, error } = urun_idler.length
    ? await supabase
      .from("servis_urunler")
      .select("id, servis_id, satici_id, baslik, fiyat, durum, stok")
      .in("id", urun_idler)
    : { data: [], error: null };

  if (error) return res.status(500).json({ error: error.message });

  // İkinci el ilanları — Benservis satar, cihaz kaydına bağlı, aktif ve stoklu olmalı.
  const ilanKalemleri = [];
  if (ilanIstek.length) {
    const idler = ilanIstek.map(i => String(i?.id || ""));
    const { data: ilanlar, error: ilanHata } = await supabase
      .from("ilanlar")
      .select("id, dosya_no, baslik, fiyat, durum, stok, satici_id, cihaz_id, teslim_secenekleri")
      .in("id", idler);
    if (ilanHata) return res.status(500).json({ error: "İlan okunamadı" });
    const saticiIlan = await saticiHaritasi(supabase, (ilanlar || []).map(i => i.satici_id));
    for (const istek of ilanIstek) {
      const ilan = (ilanlar || []).find(i => i.id === String(istek?.id || ""));
      if (!ilan || !ilan.cihaz_id || saticiIlan[ilan.satici_id]?.tur !== "benservis") {
        return res.status(409).json({ error: "Sepetteki bir ikinci el ürün artık mevcut değil. Sepeti yenileyin.", pasif_idler: [istek?.id] });
      }
      if (ilan.durum !== "aktif" || !(ilan.stok > 0)) {
        return res.status(409).json({ error: `"${ilan.baslik}" satışta değil (satılmış olabilir). Sepetten çıkarın.`, pasif_idler: [ilan.id] });
      }
      const teslim = String(istek?.teslim || "depo");
      if (!ilanTeslimSecenekleri(ilan).some(t => t.slug === teslim)) {
        return res.status(400).json({ error: "Bu ürün için seçilen teslim şekli geçerli değil" });
      }
      ilanKalemleri.push({
        ilan_id: ilan.id, dosya_no: ilan.dosya_no, baslik: ilan.baslik, fiyat: ilan.fiyat, teslim,
        servis_id: null, servis_ad: "Benservis", satici_id: ilan.satici_id, satici_tur: "benservis",
      });
    }
  }
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

  const urunKalemleri = urunler.map(u => {
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
  const kalemler = [...urunKalemleri, ...ilanKalemleri];

  // Ödeme yöntemi — kilitten ÖNCE karar verilir (kapı/kapalı yöntem ilanı boşuna kilitlemesin).
  // YK #173 şerhi: PayTR test modunda halka kart kapalı; havale tanımlı değilse sipariş YAZILMAZ,
  // istemci parça talebi formuna yönlendirir. Admin anahtarıyla gelen istek test ödemesine geçer.
  const tamamiPazar = kalemler.every(k => k.satici_tur === "benservis");
  const secenek = odemeSecenekleri(req);
  const istenen = req.body?.odeme_yontemi === "havale" ? "havale" : "kart";
  let yontem = null; // "paytr" | "havale" | null (eski "ödeme yakında" akışı)
  if (tamamiPazar) {
    if (istenen === "havale") {
      if (!secenek.havale) return res.status(400).json({ error: "Havale / EFT ile ödeme şu an kapalı" });
      yontem = "havale";
    } else if (secenek.kart) {
      yontem = "paytr";
    } else if (secenek.havale) {
      return res.status(400).json({ error: "Kart ile ödeme şu an kapalı. Havale / EFT ile ödeyin.", odeme_yontemi: "havale" });
    } else if (secenek.kapi) {
      return res.status(403).json({ error: KAPI_METNI, kapi: KAPI_KODU });
    }
  }

  // İkinci el: ödeme süresince bu sepete kilitle (atomik; başka sepetteyse satır dönmez).
  // Havalede ayırma 24 saat (ödeme gelmezse cron iptal eder, kilit kalkar).
  if (ilanKalemleri.length) {
    const idler = ilanKalemleri.map(k => k.ilan_id);
    const dk = yontem === "havale" ? HAVALE_KILIT_DK : ODEME_KILIT_DK;
    const { kilitlenen, hata } = await ilanKilitle(supabase, idler, sepetAnahtari, dk);
    if (hata) return res.status(500).json({ error: "Sipariş oluşturulamadı" });
    const kilitsiz = idler.filter(id => !kilitlenen.includes(id));
    if (kilitsiz.length) {
      const k = ilanKalemleri.find(x => x.ilan_id === kilitsiz[0]);
      return res.status(409).json({
        error: `"${k.baslik}" şu an başka bir müşterinin sepetinde ya da ödemesinde. Birkaç dakika sonra tekrar deneyin.`,
        kilitli_idler: kilitsiz,
      });
    }
  }
  const urunToplam = kalemler.reduce((s, k) => s + k.fiyat, 0);

  // Pazar (Benservis) ürünü: kargo ayrı satır, mesafeli satış onayı ve e-posta zorunlu.
  const pazarVar = kalemler.some(k => k.satici_tur === "benservis");
  const email = String(alici_email || "").trim().toLowerCase();
  let teslimat = null; // pazar siparişinde doğrulanmış { tel, il, ilce, mahalle, acik }
  if (pazarVar) {
    if (sozlesme_onay !== true) {
      return res.status(400).json({ error: "Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi onayı gerekli" });
    }
    const cep = cepDogrula(alici_tel);
    if (!cep.ok) return res.status(400).json({ error: cep.hata, alan: "tel" });
    const ad = adresDogrula({ il: alici_il, ilce: alici_ilce, mahalle: alici_mahalle, acik: alici_adres });
    if (!ad.ok) {
      const [alan, hata] = Object.entries(ad.hatalar)[0];
      return res.status(400).json({ error: hata, alan, hatalar: ad.hatalar });
    }
    teslimat = { tel: cep.e164, ...ad.adres };
    if (!EPOSTA_RE.test(email) || email.length > 120) {
      return res.status(400).json({ error: "Geçerli bir e-posta adresi girin" });
    }
  }
  // Kargo yalnız pazar (yedek parça) ürününde; ikinci el teslimi ayrı (ayrıca hesaplanır).
  // Eşik, kargolu pazar ürünlerinin toplamına bakar (Tolga 11 Eki 12:1x onayı).
  const pazarKalemleri = urunKalemleri.filter(k => k.satici_tur === "benservis");
  const kh = kargoHesapla(pazarKalemleri.reduce((s, k) => s + k.fiyat, 0), pazarKalemleri.length > 0);
  const kargo = kh.kargo_tl;
  const tutar = urunToplam + kh.net_kargo_tl;
  const paytr = yontem === "paytr" && Boolean(paytrAyarlari());
  const havale = yontem === "havale" ? havaleAyarlari() : null;

  const telStr = String(alici_tel);
  const tel = telStr.startsWith("+") ? telStr : `+90${telStr.replace(/^0/, "")}`;

  const { data: siparis, error: insErr } = await supabase
    .from("siparisler")
    .insert({
      urunler:     kalemler,
      tutar,
      alici_ad:    alici_ad.trim(),
      alici_tel:   teslimat?.tel || tel,
      alici_adres: teslimat?.acik || alici_adres?.trim() || null,
      ...(teslimat ? { alici_il: teslimat.il, alici_ilce: teslimat.ilce, alici_mahalle: teslimat.mahalle } : {}),
      ...(pazarVar ? {
        kargo_tl:         kargo,
        kargo_indirim_tl: kh.kargo_indirim_tl,
        alici_email:      email,
        sozlesme_onay_at: new Date().toISOString(),
        sozlesme_onay_ip: (req.headers?.["x-forwarded-for"] || "").split(",")[0].trim() || null,
      } : {}),
      ...(paytr ? { odeme_saglayici: "paytr" } : {}),
      ...(havale ? { odeme_saglayici: "havale" } : {}),
    })
    .select("id, siparis_no, tutar, odeme_durumu, created_at")
    .single();

  if (insErr) return res.status(500).json({ error: insErr.message });

  return res.status(201).json({
    ok: true,
    siparis: { ...siparis, kargo_tl: kargo, kargo_indirim_tl: kh.kargo_indirim_tl },
    odeme: paytr ? "paytr" : havale ? "havale" : "yakinda",
    ...(paytr ? { odeme_url: `/odeme/${siparis.id}` } : {}),
    // Havale talimatı: IBAN yalnız siparişi veren kişiye bu cevapta gider (env'den), kayda yazılmaz.
    ...(havale ? { havale: {
      hesap_adi: havale.hesapAdi, iban: havale.iban, tutar: siparis.tutar,
      aciklama: siparis.siparis_no, son_odeme: havaleSonu(siparis.created_at || Date.now()).toISOString(),
    } } : {}),
  });
}
