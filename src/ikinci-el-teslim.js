// src/ikinci-el-teslim.js — ikinci el teslim seçenekleri (YK #171, 11 Eki 2026). Tek kaynak:
// ürün sayfası, sepet ve /api/siparis aynı listeyi okur.
// Tolga (11 Eki 11:3x): "teslimi ayır, depo teslim (şuan depo yok ama bu şekilde aç), nakliye
// ilave ve montaj ilave" · (11:4x) nakliye/montaj tutarı yok, "ayrıca hesaplanır"; PayTR yalnız
// ürün bedelini alır, seçim siparişe yazılır.
export const TESLIM_SECENEKLERI = [
  { slug: "depo",    ad: "Depodan teslim al",  ek: "Ücretsiz" },
  { slug: "nakliye", ad: "Adrese nakliye",     ek: "Ayrıca hesaplanır" },
  { slug: "montaj",  ad: "Nakliye + montaj",   ek: "Ayrıca hesaplanır" },
];

export const teslimBul = (slug) => TESLIM_SECENEKLERI.find((t) => t.slug === slug) || null;

// İlanın açtığı seçenekler, sabit sırayla; depo her zaman var (DB kısıtı da depo şart koşar).
export function ilanTeslimSecenekleri(ilan) {
  const acik = new Set(Array.isArray(ilan?.teslim_secenekleri) ? ilan.teslim_secenekleri : []);
  acik.add("depo");
  return TESLIM_SECENEKLERI.filter((t) => acik.has(t.slug));
}
