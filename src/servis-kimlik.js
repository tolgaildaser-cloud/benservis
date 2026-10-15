// src/servis-kimlik.js — servis hesabı kimliği (15 Eki 2026, güvenlik düzeltmesi). API ve panel ortak okur.
// src/ altında durur: Vite dev /api yolunu proxy'lediği için istemci api/ dosyası içe aktaramaz (api/siparis.js kalıbı).
//
// NEDEN: servis yetkisi eskiden user_metadata içindeki servis kimliğinden okunuyordu. Supabase'de kullanıcı
// kendi user_metadata'sını `auth.updateUser({ data })` ya da `signUp` ile yazabilir → e-postasını
// doğrulayan herkes kendini başka servis gibi gösterebiliyordu. `app_metadata`'yı yalnız service key
// (sunucu) yazar; yetki YALNIZ buradan okunur. user_metadata'daki servis_* alanları güvenilmez.
export const servisIdOku = (user) => {
  const v = user?.app_metadata?.servis_id;
  return typeof v === "string" && v ? v : null;
};
export const servisAdOku = (user) => user?.app_metadata?.servis_ad || null;
export const servisIlceOku = (user) => user?.app_metadata?.servis_ilce || null;
