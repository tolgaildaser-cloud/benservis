// api/odeme/paytr.js
// GET /odeme/:siparis → /api/odeme/paytr?siparis=:id  (vercel.json rewrite)
// YK #167 PR-6: PayTR iFrame ödeme sayfası. paytr_token sunucuda üretilir (dev.paytr.com 1. adım);
// sipariş durumu yalnız bildirim (callback) ile değişir, bu sayfa durum yazmaz.
import supabase from "../_supabase.js";
import { paytrAyarlari, paytrToken, PAYTR_TOKEN_URL, siparisOid, sepetBase64, kurus } from "../_paytr.js";
import { sayfaHTML, kacis, tl, RENK } from "./_sayfa.js";
import { UCRETSIZ_KARGO_ESIK_TL } from "../../src/kargo.js";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const kokUrl = (req) => (process.env.VERCEL_ENV === "production"
  ? "https://www.benservis.com"
  : `https://${req.headers["x-forwarded-host"] || req.headers.host}`);

function hataSayfasi(res, kod, baslik, metin) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.status(kod).send(sayfaHTML(baslik, `
    <div class="kart" style="text-align:center;padding:40px 20px">
      <h1>${kacis(baslik)}</h1>
      <p style="color:${RENK.SLATE};font-size:14px;line-height:1.6">${metin}</p>
      <a class="dugme" href="/pazar">Pazaryerine dön</a>
    </div>`));
}

export default async function handler(req, res) {
  const id = String(req.query.siparis || "").trim();
  if (!UUID_RE.test(id)) return hataSayfasi(res, 404, "Sipariş bulunamadı", "Adres hatalı olabilir.");

  const ayar = paytrAyarlari();
  if (!ayar) return hataSayfasi(res, 200, "Kart ile ödeme yakında", "Siparişiniz kaydedildi; Benservis ekibi ödeme ve teslimat için sizi arayacak.");

  const { data: s, error } = await supabase
    .from("siparisler")
    .select("id, siparis_no, urunler, tutar, kargo_tl, kargo_indirim_tl, alici_ad, alici_tel, alici_adres, alici_email, odeme_durumu, odeme_saglayici")
    .eq("id", id)
    .single();
  if (error || !s || s.odeme_saglayici !== "paytr") return hataSayfasi(res, 404, "Sipariş bulunamadı", "Bu sipariş için kart ile ödeme açık değil.");

  if (s.odeme_durumu === "odendi") {
    res.setHeader("Cache-Control", "no-store");
    return res.redirect(302, `/siparis/${s.id}`);
  }
  if (!["odeme_bekleniyor", "odeme_basarisiz"].includes(s.odeme_durumu)) {
    return hataSayfasi(res, 409, "Bu sipariş ödemeye kapalı", `Sipariş durumu: ${kacis(s.odeme_durumu)}.`);
  }

  // Her deneme yeni merchant_oid: ilk 32 karakter sipariş id'si (bildirimde siparişe buradan dönülür).
  const merchant_oid = `${siparisOid(s.id)}T${Date.now().toString(36)}`.slice(0, 64);
  const user_ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket?.remoteAddress || "127.0.0.1";
  const p = {
    user_ip,
    merchant_oid,
    email: s.alici_email,
    payment_amount: String(kurus(s.tutar)),
    // Kargo indirimi varsa PayTR'ye kargo satırı gitmez (net 0; negatif satır gönderilmez).
    user_basket: sepetBase64(s.urunler || [], (s.kargo_tl || 0) - (s.kargo_indirim_tl || 0)),
    no_installment: "1",
    max_installment: "0",
    currency: "TL",
    test_mode: ayar.testMode,
  };
  const kok = kokUrl(req);
  const govde = new URLSearchParams({
    merchant_id: ayar.id,
    ...p,
    paytr_token: paytrToken(ayar, p),
    user_name: String(s.alici_ad).slice(0, 60),
    user_address: String(s.alici_adres || "Belirtilmedi").slice(0, 400),
    user_phone: String(s.alici_tel).slice(0, 20),
    merchant_ok_url: `${kok}/siparis/${s.id}?durum=ok`,
    merchant_fail_url: `${kok}/siparis/${s.id}?durum=hata`,
    timeout_limit: "30",
    debug_on: "0",
    lang: "tr",
  });

  let sonuc;
  try {
    const r = await fetch(PAYTR_TOKEN_URL, { method: "POST", body: govde, signal: AbortSignal.timeout(15000) });
    sonuc = await r.json();
  } catch {
    sonuc = { status: "failed", reason: "PayTR'ye bağlanılamadı" };
  }
  if (sonuc?.status !== "success" || !sonuc.token) {
    console.error("PayTR token alınamadı:", s.siparis_no, String(sonuc?.reason || "").slice(0, 200));
    return hataSayfasi(res, 502, "Ödeme başlatılamadı", "Ödeme sayfası şu an açılamadı. Birkaç dakika sonra tekrar deneyin; siparişiniz kayıtlı.");
  }

  await supabase.from("siparisler").update({ odeme_oid: merchant_oid }).eq("id", s.id);

  const kalemler = (s.urunler || []).map(k =>
    `<div style="display:flex;justify-content:space-between;gap:12px;font-size:13.5px;padding:6px 0;border-bottom:1px solid #F1F5F9"><span>${kacis(k.baslik)}</span><strong style="white-space:nowrap">${tl(k.fiyat)}</strong></div>`).join("");
  const icerik = `
    <div class="kart">
      <div style="font-size:12px;color:${RENK.SLATE};margin-bottom:6px">Sipariş No <strong style="color:${RENK.INK}">${kacis(s.siparis_no)}</strong></div>
      ${kalemler}
      ${s.kargo_tl ? `<div style="display:flex;justify-content:space-between;font-size:13.5px;padding:6px 0;border-bottom:1px solid #F1F5F9;color:${RENK.SLATE}"><span>Kargo</span><span>${tl(s.kargo_tl)}</span></div>` : ""}
      ${s.kargo_indirim_tl ? `<div style="display:flex;justify-content:space-between;font-size:13.5px;padding:6px 0;border-bottom:1px solid #F1F5F9;color:#15803D"><span>Kargo indirimi (${tl(UCRETSIZ_KARGO_ESIK_TL)} üzeri)</span><span>−${tl(s.kargo_indirim_tl)}</span></div>` : ""}
      <div style="display:flex;justify-content:space-between;font-weight:700;font-size:15px;padding-top:10px"><span>Ödenecek toplam (KDV dahil)</span><span style="color:${RENK.BLUE}">${tl(s.tutar)}</span></div>
    </div>
    ${ayar.testMode === "1" ? `<div style="font-size:12px;color:#EA580C;font-weight:700;margin-bottom:10px">Test modu: kartınızdan para çekilmez.</div>` : ""}
    <iframe src="https://www.paytr.com/odeme/guvenli/${encodeURIComponent(sonuc.token)}" id="paytriframe" frameborder="0" scrolling="no" style="width:100%;min-height:600px;border:0"></iframe>
    <script>iFrameResize({}, '#paytriframe');</script>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).send(sayfaHTML("Güvenli Ödeme", icerik, `<script src="https://www.paytr.com/js/iframeResizer.min.js"></script>`));
}
