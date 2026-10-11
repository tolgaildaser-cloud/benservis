// src/ikinci-el-kilit.js — ikinci el sepet kilidi (YK #171, 11 Eki 2026). Tek kaynak: ürün
// sayfası, sepet, /api/ikinci-el/kilit ve /api/siparis aynı sabitleri okur.
// Tolga (11 Eki 12:4x): "sepete atan kilitler ve 5 dk içinde check out yapmazsa kilit kalkar,
// ürün sepette durmaya devam etsin".
export const SEPET_KILIT_DK = 5;
// Ödemeye geçince (sipariş) kilit PayTR ödeme sayfasının süresi kadar uzar (timeout_limit 30).
export const ODEME_KILIT_DK = 30;

export const ANAHTAR_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const KEY = "bs_sepet_anahtari";

// Tarayıcının sepet anahtarı: rastgele uuid, localStorage'da. Kişisel veri değil; yalnız
// "bu kilit bu sepetin mi" sorusuna cevap verir.
export function sepetAnahtari() {
  try {
    let a = localStorage.getItem(KEY);
    if (!a || !ANAHTAR_RE.test(a)) {
      a = crypto.randomUUID();
      localStorage.setItem(KEY, a);
    }
    return a;
  } catch {
    return crypto.randomUUID();
  }
}

// Kalan süre (ms); bitmiş ya da hiç yoksa 0.
export const kalanMs = (bitis, simdi = Date.now()) => Math.max(0, (bitis ? new Date(bitis).getTime() : 0) - simdi);

export function sureMetni(ms) {
  const sn = Math.ceil(ms / 1000);
  return `${Math.floor(sn / 60)}:${String(sn % 60).padStart(2, "0")}`;
}
