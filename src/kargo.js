// src/kargo.js — pazar siparişi kargo kuralı. Tek kaynak: sepet ekranı, /api/siparis ve ödeme
// sayfası aynı fonksiyonu okur.
// Tolga (11 Eki 2026): "kargo sabit 150 TL" → (11 Eki 12:0x) "kargo bedelini 189 TL'ye çıkar,
// 3000 TL üzeri ürünlerde kargo bedeli alma" → (12:1x) "kargo bedeli gösterilsin, indirim olarak
// silinsin". Eşik = sepetteki pazar (kargolu) ürünlerinin KDV dahil toplamı; "üzeri" = 3.000 dahil değil.
export const KARGO_TL = 189;
export const UCRETSIZ_KARGO_ESIK_TL = 3000;

// pazarToplamTl: kargolu (pazar) ürünlerin toplamı. Pazar ürünü yoksa kargo da indirim de 0.
// Dönen: { kargo_tl, kargo_indirim_tl, net_kargo_tl, esige_kalan_tl }
export function kargoHesapla(pazarToplamTl, pazarVar = pazarToplamTl > 0) {
  if (!pazarVar) return { kargo_tl: 0, kargo_indirim_tl: 0, net_kargo_tl: 0, esige_kalan_tl: 0 };
  const toplam = Number(pazarToplamTl) || 0;
  const ucretsiz = toplam > UCRETSIZ_KARGO_ESIK_TL;
  return {
    kargo_tl: KARGO_TL,
    kargo_indirim_tl: ucretsiz ? KARGO_TL : 0,
    net_kargo_tl: ucretsiz ? 0 : KARGO_TL,
    // Eşiği "aşmak" için gereken en az tutar (3.000 dahil değil → 3.000,01; TL tam sayı → +1).
    esige_kalan_tl: ucretsiz ? 0 : UCRETSIZ_KARGO_ESIK_TL - toplam + 1,
  };
}
