// src/telefon.js — telefon numarasını GÖSTERİM için biçimler (16 Eki 2026, Tolga: "telefon no formatlı olsun").
// Saklanan veri değişmez; yalnız ekranda "0532 123 45 67" ve `tel:` bağlantısı üretilir.
// Türkiye numarası değilse (ya da hane sayısı tutmuyorsa) ham metin olduğu gibi gösterilir.

// "+90 532…", "90532…", "0532…", "532…" → 10 haneli ulusal numara ("5321234567") ya da null.
export function telUlusal(ham) {
  let d = String(ham ?? "").replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("90")) d = d.slice(2);
  else if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d.length === 10 && /^[2-5]/.test(d) ? d : null;
}

// Ekranda: "0532 123 45 67". Çözülemeyen numara ham hâliyle döner.
export function telBicimle(ham) {
  const d = telUlusal(ham);
  if (!d) return String(ham ?? "").trim();
  return `0${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8)}`;
}

// `tel:` bağlantısı: "tel:+905321234567"; çözülemezse null (bağlantı basılmaz).
export function telHref(ham) {
  const d = telUlusal(ham);
  return d ? `tel:+90${d}` : null;
}
