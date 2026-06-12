// src/sepet.js
// localStorage tabanlı basit sepet — müşteri auth'u olmadığı için yerel tutulur.
// "bs-sepet-degisti" event'i ile header rozetleri senkron kalır.

const KEY = "bs_sepet";

export function sepetOku() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

function yaz(liste) {
  localStorage.setItem(KEY, JSON.stringify(liste));
  window.dispatchEvent(new CustomEvent("bs-sepet-degisti", { detail: liste.length }));
}

export function sepeteEkle(urun) {
  const liste = sepetOku();
  if (liste.some(u => u.id === urun.id)) return false; // ikinci el — her üründen 1 adet
  liste.push({ id: urun.id, baslik: urun.baslik, fiyat: urun.fiyat, gorsel_url: urun.gorsel_url || null, servis_ad: urun.servis_ad || null });
  yaz(liste);
  return true;
}

export function sepettenCikar(id) {
  yaz(sepetOku().filter(u => u.id !== id));
}

export function sepetiBosalt() {
  yaz([]);
}

export function sepetAdet() {
  return sepetOku().length;
}
