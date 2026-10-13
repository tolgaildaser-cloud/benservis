// api/_havale.js — Havale / EFT ödeme ayarları + ödeme seçenekleri (YK #174, 13 Eki 2026).
// `_` önekli: Vercel bunu uç olarak yayınlamaz.
//
// IBAN ve hesap adı yalnız Vercel env'de (HAVALE_IBAN, HAVALE_HESAP_ADI; değerleri Tolga girer).
// İkisinden biri boşsa ya da IBAN biçimi bozuksa havale seçeneği gizli kalır.
// Kart (PayTR): PAYTR_TEST_MODE=0 değilse ve ODEME_SAGLAYICI boşsa halka gizli; admin anahtarıyla
// test ödemesi açık kalır (YK #173 kapısı). PayTR kodu silinmez.
import { paytrAyarlari } from "./_paytr.js";
import { adminYetkili } from "./_admin.js";

const IBAN_RE = /^TR\d{24}$/;

export function havaleAyarlari(env = process.env) {
  const iban = String(env.HAVALE_IBAN || "").replace(/\s+/g, "").toUpperCase();
  const hesapAdi = String(env.HAVALE_HESAP_ADI || "").trim();
  if (!iban || !hesapAdi) return null;
  if (!IBAN_RE.test(iban)) {
    console.error("HAVALE_IBAN biçimi geçersiz (TR + 24 hane bekleniyor); havale seçeneği kapalı");
    return null;
  }
  return { iban, hesapAdi };
}

// Halka kart ödemesi açık mı? (admin hariç)
export function kartHalkaAcik(env = process.env) {
  const p = paytrAyarlari(env);
  return Boolean(p && (p.testMode === "0" || String(env.ODEME_SAGLAYICI || "").trim()));
}

// Bu istek için ödeme seçenekleri. `kapi`: PayTR tanımlı ama bu kişiye hiçbir yöntem açık değil →
// "Ödeme çok yakında" kartı (YK #173). PayTR hiç tanımlı değilse eski "ödeme yakında" akışı sürer.
export function odemeSecenekleri(req, env = process.env) {
  const paytr = Boolean(paytrAyarlari(env));
  const kart = paytr && (kartHalkaAcik(env) || adminYetkili(req, env));
  const havale = Boolean(havaleAyarlari(env));
  return { kart, havale, kapi: paytr && !kart && !havale };
}
