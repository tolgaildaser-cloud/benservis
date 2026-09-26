// src/tarife-esleme.js — ham `tarife_veri` grup adı → SEED (cihaz, arıza) adı eşleme tablosu.
// TEK KAYNAK: /tarife paneli (api/tarife/gruplar.js + onayla.js) ve scripts/tarife-rapor.mjs
// aynı tabloyu kullanır (YK #143, 26 Eyl 2026).
//
// Neden: web toplama (scripts/tarife-topla.mjs) arıza adını sayfadaki yazımla kaydediyor
// ("Rulman/keçe"), SEED ise kendi adını taşıyor ("Rulman/keçe değişimi (vidalı)"). Panel ham
// adı onaya sunduğu için 26 Eyl onayı `tarife` tablosuna 10 MÜKERRER satır açtı; snapshot
// alınsaydı aynı arıza iki bantla teşhise girecekti.
//
// KURAL: yalnız TEK anlamlı eşlemeler buraya yazılır. İki SEED satırına birden denk gelen ham ad
// (ör. "Anakart" → tamiri mi değişimi mi?) BİLEREK yok — panel o grubu "SEED dışı" gösterir ve
// onay ancak panelde bir SEED satırı seçilerek yapılır. Tahminle eşleme yazılmaz.
import { SEED } from "./tarife-seed.js";

// Anahtar: `${cihaz}|${ham arıza}` → SEED arıza adı (aynı cihaz altında).
export const ESLEME = {
  "Çamaşır Makinesi|Rulman/keçe": "Rulman/keçe değişimi (vidalı)",
  "Çamaşır Makinesi|Rulman/keçe değişimi (vidalı kazan)": "Rulman/keçe değişimi (vidalı)",
  "Bilgisayar / Yazıcı|Ekran kartı/RAM/disk": "Ekran kartı (GPU) / RAM / disk",
  "Bilgisayar / Yazıcı|Yazıcı kafa/kartuş": "Yazıcı kafası / kartuş değişimi",
  "Su Sebili / Arıtma|Filtre seti": "Filtre seti değişimi (komple)",
  "Fırın / Ocak / Aspiratör|Aspiratör anahtar/kart/lamba": "Aspiratör lamba / anahtar / kart",
  // ⚠️ BİLEREK EŞLENMEDİ (iki SEED satırına denk geliyor — panelde elle seçilir):
  //   Çamaşır "Elektronik kart" (tamiri / değişimi) · TV + Bilgisayar "Anakart" (tamiri / değişimi)
  //   Bilgisayar "Ekran paneli / menteşe (laptop)" + "Ekran/menteşe (laptop)" (panel / menteşe)
};

// Bir cihazın SEED arıza adları (panel seçicisinin seçenekleri).
export function seedArizalari(cihaz, seed = SEED) {
  return (seed[cihaz] || []).map((r) => r[0]);
}

// (cihaz, arıza) SEED'de birebir var mı?
export function seedteVar(cihaz, ariza, seed = SEED) {
  return seedArizalari(cihaz, seed).includes(ariza);
}

// Ham adı SEED adına çevirir: zaten SEED adıysa kendisi, eşlemesi varsa hedefi, yoksa null.
export function seedAriza(cihaz, ariza, seed = SEED, esleme = ESLEME) {
  if (seedteVar(cihaz, ariza, seed)) return ariza;
  const hedef = esleme[`${cihaz}|${ariza}`];
  return hedef && seedteVar(cihaz, hedef, seed) ? hedef : null;
}
