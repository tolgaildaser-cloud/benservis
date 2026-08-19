// src/theme.js — Benservis MAVİ tasarım token'ları (canlı kurumsal palet ile hizalı)
// Blog üreticisi (scripts/build-blog.mjs) bu token'ları kullanır. App.jsx kendi inline
// sabitlerini kullanıyor; buradaki değerler onlarla aynı (ink #1E293B, mavi #2563EB).
export const BLUE    = "#2563EB"; // ana marka / aksan
export const NAVY    = "#1E293B"; // ink / lacivert (App.jsx ile birebir)
export const GREEN   = "#22C55E"; // doğrulanmış / başarı
export const BG      = "#F8FAFC"; // kâğıt zemin
export const SURFACE = "#FFFFFF";
export const MUTED   = "#475569";
export const FAINT   = "#94A3B8";
export const HAIR    = "#E2E8F0";
// ——— YK #69 cila ① eklemeleri (17 Ağu): külliyatta yaşayıp theme'de karşılığı
// olmayan tonlar. Kaynak: 24 dosyadaki 117 sabit tanımının envanteri.
export const TINT    = "#F1F5F9"; // yumuşak panel zemini (eski yanlış adı: CREAM)
export const SLATE   = "#64748B"; // ikincil metin (MUTED ile FAINT arası)
export const RED     = "#DC2626"; // hata / yıkıcı eylem (semantik, marka dışı — korunur)
// Sürdürülebilirlik bölümünün yumuşak zemini (19 Ağu). YK 23 Tem renk kuralı: YEŞİL =
// sürdürülebilirlik. Yerel sabit AÇMAK yerine token — tek stil kaynağı ilkesi (#69 cila ①).
export const GREEN_TINT = "#F0FDF4"; // yeşil kâğıt zemin (GREEN'in en açık kademesi)
export const GREEN_DEEP = "#15803D"; // yeşil metin/aksan — açık zeminde okunur kontrast
export const FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');";
