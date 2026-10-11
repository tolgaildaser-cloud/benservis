// api/_paytr.js
// PayTR iFrame API yardımcıları (YK #167 PR-6). Kaynak: dev.paytr.com iFrame API 1. ve 2. adım.
// Anahtarlar yalnız Vercel env'de: PAYTR_MERCHANT_ID · PAYTR_MERCHANT_KEY · PAYTR_MERCHANT_SALT · PAYTR_TEST_MODE.
// Bu dosya anahtar değerlerini hiçbir yere yazmaz/loglamaz.
import crypto from "node:crypto";

export const PAYTR_TOKEN_URL = "https://www.paytr.com/odeme/api/get-token";

export function paytrAyarlari(env = process.env) {
  const id = env.PAYTR_MERCHANT_ID, key = env.PAYTR_MERCHANT_KEY, salt = env.PAYTR_MERCHANT_SALT;
  if (!id || !key || !salt) return null;
  return { id: String(id), key: String(key), salt: String(salt), testMode: env.PAYTR_TEST_MODE === "0" ? "0" : "1" };
}

const hmacB64 = (metin, key) => crypto.createHmac("sha256", key).update(metin).digest("base64");

// 1. adım: merchant_id + user_ip + merchant_oid + email + payment_amount + user_basket
//          + no_installment + max_installment + currency + test_mode, sonuna merchant_salt.
export function paytrToken({ id, key, salt }, p) {
  const s = `${id}${p.user_ip}${p.merchant_oid}${p.email}${p.payment_amount}${p.user_basket}` +
            `${p.no_installment}${p.max_installment}${p.currency}${p.test_mode}`;
  return hmacB64(s + salt, key);
}

// 2. adım (bildirim): merchant_oid + merchant_salt + status + total_amount
export function paytrBildirimHash({ key, salt }, b) {
  return hmacB64(`${b.merchant_oid}${salt}${b.status}${b.total_amount}`, key);
}

export function paytrBildirimGecerli(ayar, b) {
  if (!b || !b.merchant_oid || !b.hash || !b.status || b.total_amount == null) return false;
  const beklenen = Buffer.from(paytrBildirimHash(ayar, b));
  const gelen = Buffer.from(String(b.hash));
  return beklenen.length === gelen.length && crypto.timingSafeEqual(beklenen, gelen);
}

// merchant_oid: en çok 64 karakter, yalnız harf/rakam, siparişe tekil → uuid'nin tiresiz hâli (32).
export const siparisOid = (siparisId) => String(siparisId).replace(/[^a-zA-Z0-9]/g, "");

// Sepet: [[ad, "birim fiyat", adet], …] → JSON → base64
export function sepetBase64(kalemler, kargoTl = 0) {
  const satirlar = kalemler.map(k => [String(k.baslik).slice(0, 120), Number(k.fiyat).toFixed(2), 1]);
  if (kargoTl > 0) satirlar.push(["Kargo", Number(kargoTl).toFixed(2), 1]);
  return Buffer.from(JSON.stringify(satirlar)).toString("base64");
}

export const kurus = (tl) => Math.round(Number(tl) * 100);

// Bildirimdeki merchant_oid → sipariş id (ilk 32 karakter, tiresiz uuid).
export const oidSiparisId = (oid) => {
  const h = String(oid || "").slice(0, 32).toLowerCase();
  if (!/^[0-9a-f]{32}$/.test(h)) return null;
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
};

// Bildirimden yazılacak alanlar (saf fonksiyon — test edilir).
export function bildirimGuncellemesi(siparis, b) {
  if (!siparis || siparis.odeme_durumu === "odendi") return null; // ilk başarılı bildirim esas
  const ortak = {
    odeme_oid: String(b.merchant_oid),
    odeme_tipi: b.payment_type ? String(b.payment_type).slice(0, 10) : null,
    odeme_test: String(b.test_mode) === "1",
  };
  if (b.status === "success") {
    // PayTR'ye gönderilen tutar (kuruş) siparişle aynı olmalı; değilse ödeme alındı ama incelemeye düşer.
    const tutarUyar = String(b.payment_amount ?? "") === String(kurus(siparis.tutar));
    return {
      ...ortak,
      odeme_durumu: tutarUyar ? "odendi" : "odeme_incelemede",
      odeme_toplam_kurus: Number.parseInt(b.total_amount, 10) || null,
      odeme_tarihi: new Date().toISOString(),
      odeme_hata: tutarUyar ? null : "tutar uyuşmuyor",
    };
  }
  return {
    ...ortak,
    odeme_durumu: "odeme_basarisiz",
    odeme_hata: `${String(b.failed_reason_code || "").slice(0, 10)} ${String(b.failed_reason_msg || "").slice(0, 200)}`.trim() || null,
  };
}
