// src/hero-tahmin.js — hero kutusuna yazılan serbest metinden CİHAZ + MARKA tahmini.
//
// NEDEN AYRI DOSYA: 19 Ağu'da Tolga iki kusur bildirdi ("sorun yazılınca şu an seçili
// gelmiyor, ek olarak marka yazılırsa o da seçili gelmeli" · "arçelik çamamşır makinam
// su almıyor dedim çalışmadı"). Tahmin mantığı JSX'in içinde olduğu sürece regresyon
// kilidi yazılamıyordu; saf fonksiyon olarak ayrıldı, testi `hero-tahmin.test.js`.
//
// ⛔ SINIR: burada AI/servis çağrısı YOK. Serbest metin uygulamanın içinde kalır —
// "URL'den prompta serbest metin taşınmaz" güvencesi bozulmaz (#68 ③ kaydı).
//
// İKİ AŞAMALI EŞLEME (sıra önemli):
//   ① BİREBİR: eski `t.includes(anahtar)` davranışı aynen korunur → 19 Ağu öncesi
//      eşleşen her girdi bugün de aynı sonucu verir (regresyon yüzeyi sıfır).
//   ② TOLERANSLI: birebir tutmazsa kelime kelime Levenshtein. Eşik kelime UZUNLUĞUNA
//      bağlı; kısa anahtarda tolerans YOK, çünkü "ocak"↔"sıcak" gibi çakışmalar
//      yanlış ön-doldurma üretir. Kürasyon ilkesi: yanlış ön-doldurma,
//      ön-doldurmamaktan KÖTÜDÜR.
import { MARKALAR, markalarForCihaz } from "./constants.js";

// TR küçük harf + ASCII katlama. Katlama iki işe yarıyor: (a) sözlükteki "çamaşır"
// ve "camasir" varyantları tek anahtara iniyor, (b) kullanıcının şapkasız yazması
// mesafeye maliyet yazmıyor ("camasır" ile "çamaşır" arası mesafe 0 olur).
export const katla = (s) =>
  String(s || "")
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c").replace(/â/g, "a")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const kelimeler = (s) => katla(s).split(" ").filter(Boolean);

// Levenshtein — iki satırlık gezici tampon. Metinler kısa (hero kutusu 300 karakter),
// erken çıkış için tavan verilir: mesafe tavanı aşarsa hesap bitmeden döner.
export function mesafe(a, b, tavan = Infinity) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > tavan) return tavan + 1;
  let onceki = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const simdi = [i];
    let satirMin = i;
    for (let j = 1; j <= b.length; j++) {
      const bedel = a[i - 1] === b[j - 1] ? 0 : 1;
      const d = Math.min(simdi[j - 1] + 1, onceki[j] + 1, onceki[j - 1] + bedel);
      simdi[j] = d;
      if (d < satirMin) satirMin = d;
    }
    if (satirMin > tavan) return tavan + 1;
    onceki = simdi;
  }
  return onceki[b.length];
}

// Eşik anahtarın uzunluğuna bağlı. 5 harften kısa anahtar toleranssız: "tv", "ocak",
// "dolap" gibi kısa anahtarlarda 1 harflik tolerans bile gündelik kelimeleri yakalar.
export const esik = (n) => (n <= 4 ? 0 : n <= 7 ? 1 : 2);

// Metinde anahtarın toleranslı karşılığı var mı? Çok kelimeli anahtar ("air fryer",
// "su sebili") aynı sayıda kelimelik pencerelerle karşılaştırılır.
function toleransliGecer(metinKelimeleri, anahtar) {
  const parca = anahtar.split(" ").filter(Boolean);
  const hedef = parca.join(" ");
  const t = esik(hedef.replace(/ /g, "").length);
  if (t === 0) return false;
  for (let i = 0; i + parca.length <= metinKelimeleri.length; i++) {
    const pencere = metinKelimeleri.slice(i, i + parca.length).join(" ");
    if (mesafe(pencere, hedef, t) <= t) return true;
  }
  return false;
}

// Cihaz ipuçları — 19 Ağu öncesiyle AYNI tablo; yalnız eşleme motoru değişti.
export const CIHAZ_IPUCU = [
  ["Çamaşır Makinesi", ["çamaşır", "camasir"]],
  ["Bulaşık Makinesi", ["bulaşık", "bulasik"]],
  ["Buzdolabı", ["buzdolab", "dolap", "derin dondurucu"]],
  ["Klima", ["klima"]],
  ["Kombi / Termosifon", ["kombi", "termosifon", "petek", "radyatör"]],
  ["Fırın / Ocak / Aspiratör", ["fırın", "firin", "ocak", "aspiratör", "davlumbaz"]],
  ["Televizyon / Monitör", ["televizyon", "tv", "monitör"]],
  ["Mikrodalga / Air Fryer", ["mikrodalga", "air fryer", "airfryer"]],
  ["Süpürge", ["süpürge", "supurge"]],
  ["Su Sebili / Arıtma", ["su sebili", "arıtma", "aritma"]],
  ["Bilgisayar / Yazıcı", ["bilgisayar", "laptop", "yazıcı", "yazici", "printer"]],
];

export function cihazTahmin(metin) {
  const ham = String(metin || "").toLocaleLowerCase("tr");
  // ① birebir (eski davranış, aynen)
  for (const [cihaz, ipuclari] of CIHAZ_IPUCU) {
    if (ipuclari.some((k) => ham.includes(k))) return cihaz;
  }
  // ② yazım hatası toleransı
  const kel = kelimeler(metin);
  if (!kel.length) return null;
  for (const [cihaz, ipuclari] of CIHAZ_IPUCU) {
    for (const k of ipuclari) {
      if (toleransliGecer(kel, katla(k))) return cihaz;
    }
  }
  return null;
}

// ── MARKA ────────────────────────────────────────────────────────────────────
// Marka adları katlanıp kelime dizisine çevrilir. Parantezli ek ("Aura (İhlas)")
// ve noktalı yazım ("A.O. Smith") katlamada zaten sadeleşiyor.
// Uzun markaya 1 harf tolerans var, kısa markaya YOK — "Beko"/"Elit"/"Aqua" gibi
// 4 harfli adlarda tolerans gündelik kelimeleri markaya çevirirdi.
const MARKA_ANAHTAR = MARKALAR
  .map((m) => ({ ad: m, anahtar: katla(m.replace(/\(.*?\)/g, "")) }))
  .filter((x) => x.anahtar.length >= 2)
  .sort((a, b) => b.anahtar.length - a.anahtar.length); // uzun ad önce ("General Mobile" > "Mobile")

export function markaTahmin(metin, cihaz) {
  const kel = kelimeler(metin);
  if (!kel.length) return null;
  let bulunan = null;
  let bulunanAnahtar = "";

  // ① birebir kelime eşleşmesi (alt dize DEĞİL — "lg" bir kelime olarak aranır,
  //    "bilgisayar" içindeki "lg" markaya sayılmaz).
  for (const { ad, anahtar } of MARKA_ANAHTAR) {
    const p = anahtar.split(" ");
    for (let i = 0; i + p.length <= kel.length; i++) {
      if (kel.slice(i, i + p.length).join(" ") === anahtar) { bulunan = ad; bulunanAnahtar = anahtar; break; }
    }
    if (bulunan) break;
  }
  // ② tek kelimeli ve ≥6 harfli markalarda 1 harf tolerans ("arçelil", "grundik")
  if (!bulunan) {
    for (const { ad, anahtar } of MARKA_ANAHTAR) {
      if (anahtar.includes(" ") || anahtar.length < 6) continue;
      if (kel.some((w) => mesafe(w, anahtar, 1) <= 1)) { bulunan = ad; bulunanAnahtar = anahtar; break; }
    }
  }
  if (!bulunan) return null;

  // KISA MARKA CİHAZSIZ SAYILMAZ: "Elit" · "Aqua" · "Teka" · "LG" gibi ≤4 harfli adlar
  // gündelik cümlede kendi başına geçebiliyor ("elit bir servis", "aqua park").
  // Cümlede cihaz da geçiyorsa bağlam markayı doğruluyor; geçmiyorsa boş bırakılır.
  if (!cihaz && !bulunanAnahtar.includes(" ") && bulunanAnahtar.length <= 4) return null;

  // Cihaz biliniyorsa markanın O CİHAZIN listesinde olması şart. Değilse boş bırakılır
  // — "Diğer"e düşürmek yanlış ön-doldurmadır (15 Ağu kürasyon ilkesi).
  if (cihaz && !markalarForCihaz(cihaz).includes(bulunan)) return null;
  return bulunan;
}

// Hero kutusunun tek çağrı noktası: metin → { cihaz, marka }.
export function heroTahmin(metin) {
  const cihaz = cihazTahmin(metin);
  return { cihaz, marka: markaTahmin(metin, cihaz) };
}
