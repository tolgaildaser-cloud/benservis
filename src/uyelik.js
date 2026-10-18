// src/uyelik.js — bireysel üyelik ortak kuralları (YK #172 ÜY-2, 18 Eki 2026). /kayit ve /hesabim okur.
//
// ⛔ user_metadata'ya yalnız RIZA BEYANI yazılır (onaylanan metin sürümü + hatırlatma tercihi); yetki
//    asla buradan okunmaz (#176). Servis/birey ayrımı servisIdOku() → app_metadata.
// ⛔ Analitiğe e-posta, ad ya da serbest metin gitmez; olaylar yalnız sabit sonuç etiketi taşır.

// Üyelik aydınlatma + açık rıza metninin sürümü. Metin (scripts/uyelik-aydinlatma.mjs) değişirse artar;
// kayıttaki sürüm (uyeler.riza_metin_v) kullanıcının hangi metni onayladığını gösterir.
export const UYELIK_RIZA_V = 1;
export const UYELIK_AYDINLATMA_URL = "/uyelik-aydinlatma-metni/";
export const SIFRE_EN_AZ = 8;

const EPOSTA_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Üye ol formu doğrulaması → hata metni ya da null.
export function kayitDogrula({ email, sifre, riza }) {
  if (!EPOSTA_RE.test((email || "").trim())) return "Geçerli bir e-posta adresi yaz.";
  if (!sifre || sifre.length < SIFRE_EN_AZ) return `Şifre en az ${SIFRE_EN_AZ} karakter olmalı.`;
  if (riza !== true) return "Üye olmak için aydınlatma metnini onaylaman gerekiyor.";
  return null;
}

// supabase.auth.signUp parametreleri. data: yalnız rıza beyanı (veritabanı tetikleyicisi profili açar).
export function kayitParametreleri({ email, sifre, hatirlatma }, origin) {
  return {
    email: email.trim(),
    password: sifre,
    options: {
      emailRedirectTo: `${origin}/hesabim`,
      data: { uyelik_riza_v: UYELIK_RIZA_V, hatirlatma: hatirlatma === true },
    },
  };
}

// signUp sonucu → { tur, mesaj }. tur: gonderildi | var | kapali | hata (olay etiketi olarak da kullanılır).
// E-posta doğrulaması açıkken Supabase kayıtlı adrese hata DÖNMEZ; boş `identities` ile cevap verir.
export function kayitSonucu({ data, error }) {
  if (error) {
    const m = `${error.code || ""} ${error.message || ""}`.toLowerCase();
    if (m.includes("signup_disabled") || m.includes("signups not allowed"))
      return { tur: "kapali", mesaj: "Yeni üyelik alımı kısa bir süre kapalı, çok yakında açılıyor." };
    if (m.includes("already") || m.includes("user_already_exists"))
      return { tur: "var", mesaj: "Bu e-postayla bir hesap var. Giriş yapabilir ya da şifreni sıfırlayabilirsin." };
    if (m.includes("weak") || m.includes("password"))
      return { tur: "hata", mesaj: "Şifre yeterince güçlü değil; harf ve rakam karıştırarak daha uzun bir şifre dene." };
    if (m.includes("rate") || m.includes("too many") || m.includes("over_email_send_rate_limit"))
      return { tur: "hata", mesaj: "Şu an çok fazla deneme var, birkaç dakika sonra tekrar dene." };
    return { tur: "hata", mesaj: "Üyelik şu an açılamadı, biraz sonra tekrar dene." };
  }
  if (data?.user && Array.isArray(data.user.identities) && data.user.identities.length === 0)
    return { tur: "var", mesaj: "Bu e-postayla bir hesap var. Giriş yapabilir ya da şifreni sıfırlayabilirsin." };
  return { tur: "gonderildi", mesaj: "Doğrulama bağlantısını e-postana gönderdik. Bağlantıya tıklayınca hesabın açılır." };
}

// Garanti bitişine kalan gün (ÜY-3 kartı da kullanır). Tarih yoksa null; geçmişse negatif.
export function kalanGun(bitis, bugun = new Date()) {
  if (!bitis) return null;
  const b = new Date(`${String(bitis).slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(b.getTime())) return null;
  const g = Date.UTC(bugun.getFullYear(), bugun.getMonth(), bugun.getDate());
  return Math.round((b.getTime() - g) / 86400000);
}
