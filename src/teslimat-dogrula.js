// src/teslimat-dogrula.js — pazar siparişinde telefon + adres kuralları (16 Eki 2026).
// Tolga: "telefon no formatlı olsun" · "saçma rakamlar girilemesin" · "adres, il, ilçe ve mah seçimi mutlaka olsun".
// Kararlar (Tolga 16 Eki 09:1x): yalnız CEP (sabit hat yok) · il/ilçe listeden · mahalle zorunlu yazı alanı
// (resmî toplu mahalle listesi bulunamadı: PTT dosya vermiyor, sorgu ucu otomatik erişime kapalı) ·
// açık adreste rakam şartı yok (≥10 karakter) · il/ilçe/mahalle ayrı kolonlarda.
// İstemci (src/Sepet.jsx) ve sunucu (api/siparis.js) AYNI fonksiyonları kullanır.
import { telUlusal, telBicimle } from "./telefon.js";
import { TR_IL_ILCE } from "./tr-iller.js";

const hepsiAyni = (s) => /^(\d)\1+$/.test(s);
function ardisik(s) {
  let art = true, azal = true;
  for (let i = 1; i < s.length; i++) {
    const f = (Number(s[i]) - Number(s[i - 1]) + 10) % 10;
    if (f !== 1) art = false;
    if (f !== 9) azal = false;
  }
  return art || azal;
}

// Cep telefonu → { ok: true, ulusal: "5321234567", e164: "+905321234567" } ya da { ok: false, hata }.
export function cepDogrula(ham) {
  const rakam = String(ham ?? "").replace(/\D/g, "");
  if (!rakam) return { ok: false, hata: "Cep telefonu zorunlu." };
  const d = telUlusal(ham);
  if (!d) return { ok: false, hata: "Numara 11 haneli olmalı (0 ile başlayarak)." };
  if (d[0] !== "5") return { ok: false, hata: "Cep telefonu 05 ile başlamalı." };
  const abone = d.slice(3); // operatör kodundan sonraki 7 hane
  if (hepsiAyni(d) || hepsiAyni(abone) || ardisik(abone) || ardisik(d.slice(1))) {
    return { ok: false, hata: "Bu numara geçerli görünmüyor. Kargo için ulaşabileceğimiz bir numara yazın." };
  }
  return { ok: true, ulusal: d, e164: `+90${d}` };
}

// Yazarken maske: rakamları "0532 123 45 67" biçimine sokar (en çok 11 hane).
export function cepMaske(ham) {
  let d = String(ham ?? "").replace(/\D/g, "");
  if (d.startsWith("90") && d.length > 10) d = d.slice(2);
  if (d && d[0] !== "0") d = `0${d}`;
  d = d.slice(0, 11);
  const p = [d.slice(0, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)].filter(Boolean);
  return p.join(" ");
}

export const ILLER = Object.keys(TR_IL_ILCE);
export const ilceler = (il) => TR_IL_ILCE[il] || [];

const temiz = (v) => String(v ?? "").replace(/\s+/g, " ").trim();

// Adres → { ok: true, adres: { il, ilce, mahalle, acik } } ya da { ok: false, hatalar: { alan: mesaj } }.
export function adresDogrula({ il, ilce, mahalle, acik } = {}) {
  const a = { il: temiz(il), ilce: temiz(ilce), mahalle: temiz(mahalle), acik: temiz(acik) };
  const hatalar = {};
  if (!TR_IL_ILCE[a.il]) hatalar.il = "İl seçin.";
  else if (!TR_IL_ILCE[a.il].includes(a.ilce)) hatalar.ilce = "İlçe seçin.";
  if (a.mahalle.length < 2 || a.mahalle.length > 80 || !/\p{L}/u.test(a.mahalle)) hatalar.mahalle = "Mahallenizi yazın.";
  if (a.acik.length < 10) hatalar.acik = "Cadde/sokak, bina ve daire bilgisini yazın (en az 10 karakter).";
  if (a.acik.length > 300) hatalar.acik = "Açık adres en çok 300 karakter olabilir.";
  return Object.keys(hatalar).length ? { ok: false, hatalar } : { ok: true, adres: a };
}

// Admin ve kargo etiketi için tek satır: "Moda Cad. No 12 D 4, Caferağa Mah., Kadıköy/İstanbul".
export function adresSatiri(s = {}) {
  const m = temiz(s.alici_mahalle);
  const mah = m && !/\bmah/i.test(m) ? `${m} Mah.` : m;
  const ilIlce = [s.alici_ilce, s.alici_il].filter(Boolean).join("/");
  return [temiz(s.alici_adres), mah, ilIlce].filter(Boolean).join(", ");
}

export { telBicimle };
