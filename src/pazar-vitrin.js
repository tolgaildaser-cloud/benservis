// src/pazar-vitrin.js — pazaryeri vitrin seçimi: görsel çeşitlilik (Tolga, 24 Eki 2026: "pazaryerine sadece boru
// koymuşsun, biraz görsel güzel ürünler koy"). Satış yokken ana sayfa 8'lisi "görselli → en yeni" sırasına düşüyordu;
// son eklenen toplu parti baca boruları olduğu için 8 kutunun 8'i boru/dirsekti. Yeni ürün EKLENMEZ, mevcut
// katalogdan seçilir: her cihazdan ve her parça türünden önce birer ürün, görsel olarak sönük türler (boru, conta,
// sensör, valf…) sona. API (ana sayfa çok satan) ve /pazar "Öne çıkanlar" rafı aynı kuralı kullanır.

// Fotoğrafta neye benzediği anlaşılan, vitrinde "ürün" gibi duran türler önce.
const ONDE = new Set(["raf-sepet-cekmece", "tabla-tepsi-izgara", "kapak-kapi-cam", "fan-pervane", "motor", "kumanda-dugme-tus",
  "rezistans-isitici", "ampul-led-lamba", "kol-kulp-ayak-tekerlek", "torba-toz-haznesi", "deterjan-kutusu-cekmece", "filtre",
  "sirkulasyon-pompasi", "genlesme-tanki", "rulman-kece-kazan-tambur"]);
// Tek başına vitrinde sönük duran türler sona (yine listede ve süzgeçte, yalnız vitrin önceliği düşük).
const SONDA = new Set(["hortum-boru-baca", "lastik-conta", "termostat-sensor", "emniyet-ventili-presostat", "valf-vana-musluk",
  "aksesuar-montaj-seti", "yedek-parca-genel"]);

export const gorselPuan = (u) => (u?.gorsel_url ? 4 : 0) + (ONDE.has(u?.parca_turu) ? 2 : SONDA.has(u?.parca_turu) ? 0 : 1);

// Gelen sıra korunarak (kararlı) görsel puana göre dizilir, sonra açgözlü seçim: önce cihazı VE parça türü daha önce
// seçilmemiş ürün; yer kalırsa yalnız cihazı yeni olan; yine kalırsa sıradaki. Böylece kopya tür yalnız katalog
// gerçekten darsa girer.
export function vitrinCesitle(urunler = [], adet = 8) {
  const aday = urunler.map((u, i) => ({ u, i, p: gorselPuan(u) })).sort((a, b) => b.p - a.p || a.i - b.i).map((x) => x.u);
  const secilen = [];
  const cihaz = new Set(), tur = new Set();
  const al = (kosul) => {
    for (const u of aday) {
      if (secilen.length >= adet) return;
      if (secilen.includes(u) || !kosul(u)) continue;
      secilen.push(u); cihaz.add(u.cihaz_turu); tur.add(u.parca_turu);
    }
  };
  al((u) => !cihaz.has(u.cihaz_turu) && !tur.has(u.parca_turu));
  al((u) => !tur.has(u.parca_turu));
  al((u) => !cihaz.has(u.cihaz_turu));
  al(() => true);
  return secilen;
}
