// src/odeme-kapisi.js — PayTR test-modu kapısı, istemci + sunucu ortak metin (YK #173 şerhi, 12 Eki 2026).
//
// PAYTR_TEST_MODE=1 iken halk ödeme adımına geçemez: bu metni görür ve mevcut parça talebi formuna
// (`/pazar#parca-talebi`, ürün adı dolu) yönlenir. Test ödemesi yalnız admin anahtarıyla
// (api/_admin.js, RaporPaneli'nin sakladığı aynı sır). PAYTR_TEST_MODE=0 olunca kapı kendiliğinden kalkar
// (api/_paytr.js `odemeKapisi`). Bu dosya tarayıcıya gider: anahtar, env, Node modülü YOK.

export const KAPI_METNI = "Ödeme çok yakında. Numaranızı bırakın, hazır olunca arayalım.";
export const KAPI_KODU = "odeme-yakinda";
export const KAPI_KAYNAK = "odeme-kapisi";

// Sepet kalemi → parça talebi formu bağlantısı. Ürün adı `talep` ile taşınır (formda marka/model
// alanına dolar; yalnız form ön-doldurma, analitiğe yazılmaz); cihaz/parça slug'ı varsa seçili gelir.
export function talepBaglantisi(kalem) {
  const q = new URLSearchParams();
  const ad = String(kalem?.baslik || "").replace(/\s+/g, " ").trim().slice(0, 120);
  q.set("talep", ad || "-");
  if (kalem?.cihaz_turu) q.set("cihaz", String(kalem.cihaz_turu));
  if (kalem?.parca_turu) q.set("parca", String(kalem.parca_turu));
  q.set("k", KAPI_KAYNAK);
  return `/pazar?${q}#parca-talebi`;
}
