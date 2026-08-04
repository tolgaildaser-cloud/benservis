// src/seed-eslesme.js — AI'ın döndürdüğü arıza adını REFERANS TARİFE (SEED) satırına
// BELİRLEYİCİ biçimde bağlar ve o satırdan beklenen tutarı hesaplar.
//
// ⚠️ NEDEN AYRI DOSYA (4 Ağu 2026, YK Kararı #38 · FE):
// Bu mantık daha önce App.jsx içinde gömülüydü ve bulanık `includes` eşleşmesi kullanıyordu:
//     row = arr.find(r => n.includes(hedef) || hedef.includes(n.split(" ")[0]))
// Bu kural iki ayrı satıra birden uyduğunda **dizide önce geleni** sessizce seçiyordu →
// kullanıcıya hata vermeden YANLIŞ FİYAT gösteriliyordu. Ölçülen vakalar (bugünkü 45 satırlık
// SEED, kod değişmeden önce):
//   · "Aspiratör lambası yanmıyor" / "Aspiratör kartı arızası" → "Aspiratör motoru" seçiliyordu
//     (200-700 TL'lik iş yerine 450-2.200 TL'lik satır).
//   · "Ekran kırığı" / "Ekran değişimi (laptop)" → "Ekran kartı/RAM/disk" seçiliyordu
//     ("Ekran/menteşe (laptop)" satırı dizide sonra geldiği için hiç seçilemiyordu).
// YK #38 üç satırı bölmeye karar verdi (yazıcı kafa temizlik/değişim · su arıtma tekli/set ·
// TV anakart tamir/değişim) → aynı anahtar kelimeyi taşıyan İKİ satır oluşacak ve hata
// garantiye dönüşecekti. Bu yüzden düzeltme bölmeden ÖNCE yapıldı.
//
// KURAL (üç aşama, `onarim-rehberleri.js` → `rehberBul()` ile aynı desen: "en spesifik kazanır"):
//   ① TAM EŞLEŞME — normalize edilmiş ad birebir aynıysa o satır. (AI'a promptta satır adını
//      BİREBİR kopyalaması söyleniyor; mutlu yol budur.)
//   ② KELİME SKORU — satır adının, arıza adında geçen kelimelerinin toplam uzunluğu.
//      En yüksek skor kazanır: "Aspiratör anahtar/kart/lamba" (aspiratör+lamba = 14) >
//      "Aspiratör motoru" (aspiratör = 9). Eşleşme KELİME düzeyinde yapılır, düz `includes`
//      DEĞİL — aksi hâlde "Pompa/membran tamiri" metni "Tam filtre seti" satırının "tam"
//      kelimesine takılıyordu ("tamiri" içinde "tam" geçiyor diye).
//      Türkçe ekleri için önek toleransı var: "lambası"→"lamba", "kartı"→"kart", "motoru"→"motor"
//      (yalnız ≥4 harfli kelimelerde; "tam"/"fan" gibi kısa kelimeler tam eşleşme ister).
//   ③ BERABERLİK / EŞLEŞME YOK → **null**. ⛔ Sessizce ilk aday SEÇİLMEZ. Çağıran taraf
//      AI'ın kendi (referans tarifeye çıpalı) tahminine düşer; `durum:"belirsiz"` alanı
//      ölçülebilsin diye döndürülür.
//
// Bölme sonrası beklenen davranış: AI "Anakart tamiri" derse ① ile doğru satıra gider;
// yalnızca "Anakart" derse iki satır beraberdir → belirsiz → yanlış fiyat GÖSTERİLMEZ.

import { SEED } from "./tarife-seed.js";

/** Türkçe duyarlı normalizasyon: küçük harf, harf/rakam dışı her şey boşluk. */
export const norm = (s) =>
  String(s ?? "").toLocaleLowerCase("tr").replace(/[^\p{L}\p{N}]+/gu, " ").trim();

const kelimeler = (s) => norm(s).split(" ").filter(Boolean);

// İki kelime eşleşir mi? Birebir aynıysa evet; değilse Türkçe ek toleransı: uzun olan,
// kısa olanla BAŞLIYORSA ve kısa olan en az 4 harfliyse evet ("kafası"~"kafa", "lambası"~"lamba").
// 4 harf sınırı bilerek: "tam" ⊄ "tamiri", "fan" ⊄ "fanatik" gibi yanlış eşleşmeleri keser.
function kelimeEsler(a, b) {
  if (a === b) return true;
  if (a.length >= 4 && b.startsWith(a)) return true;
  if (b.length >= 4 && a.startsWith(b)) return true;
  return false;
}

// İŞLEM kelimeleri (yapılan işi anlatır) PARÇA kelimeleri kadar kimlik taşımaz: "değişimi"
// 8 harf diye "TV paneli"nin (tv+paneli=8) önüne geçmemeli. Bu yüzden ağırlıkları 1'e
// düşürülür — 0 DEĞİL, çünkü bölme sonrası satırları ayıran şey tam da bu kelimelerdir
// ("Anakart tamiri" vs "Anakart değişimi"). Yani: parça kimliği kararı verir, işlem
// kelimesi yalnız beraberliği bozar.
const ISLEM_ONEKLERI = [
  "değişim", "degisim", "tamir", "temizli", "onarım", "onarim",
  "bakım", "bakim", "arıza", "ariza", "sorun", "bozuk",
];
const kelimeAgirlik = (k) => (ISLEM_ONEKLERI.some((p) => k.startsWith(p)) ? 1 : k.length);

/**
 * Arıza adını SEED satırlarından birine bağlar.
 * @param {Array<[string,number,number,number]>} satirlar  Cihazın SEED satırları
 * @param {string} arizaAd  AI'ın döndürdüğü satır adı / arıza adı
 * @returns {{row:?Array, durum:"tam"|"tekil"|"belirsiz"|"yok", adaylar:string[]}}
 */
export function seedSatirBul(satirlar, arizaAd) {
  const arr = Array.isArray(satirlar) ? satirlar : [];
  const hedef = norm(String(arizaAd ?? "").split(":")[0]); // AI ": parça…" eklerse kes, ad kalsın
  if (!hedef || !arr.length) return { row: null, durum: "yok", adaylar: [] };

  // ① TAM EŞLEŞME
  const tam = arr.filter((r) => norm(r[0]) === hedef);
  if (tam.length === 1) return { row: tam[0], durum: "tam", adaylar: [tam[0][0]] };
  // Aynı ada sahip iki satır = veri hatası; sessizce birini seçmektense belirsiz say.
  if (tam.length > 1) return { row: null, durum: "belirsiz", adaylar: tam.map((r) => r[0]) };

  // ② KELİME SKORU — en spesifik (en çok/en uzun kelime kapsayan) satır kazanır
  const hedefKelime = kelimeler(hedef);
  let enIyi = 0;
  const skorlar = arr.map((r) => {
    let skor = 0;
    for (const k of kelimeler(r[0])) {
      if (hedefKelime.some((h) => kelimeEsler(k, h))) skor += kelimeAgirlik(k);
    }
    if (skor > enIyi) enIyi = skor;
    return skor;
  });
  if (enIyi === 0) return { row: null, durum: "yok", adaylar: [] };

  const kazananlar = arr.filter((_, i) => skorlar[i] === enIyi);
  // ③ BERABERLİK → sessizce ilkini SEÇME
  if (kazananlar.length > 1) {
    return { row: null, durum: "belirsiz", adaylar: kazananlar.map((r) => r[0]) };
  }
  return { row: kazananlar[0], durum: "tekil", adaylar: [kazananlar[0][0]] };
}

/**
 * Satırdan beklenen tutar: parça bandı marka kademesine göre (premium=üst, ekonomik=alt,
 * orta=orta) + işçilik. Fiyatı SİSTEM belirler, AI değil → aynı cihaz+arıza+marka hep aynı tutar.
 */
export function satirBeklenen(row, kademe) {
  if (!row) return null;
  const [, pmin, pmax, isc] = row;
  const parca = kademe === "premium" ? pmax : kademe === "ekonomik" ? pmin : Math.round((pmin + pmax) / 2);
  return parca + isc;
}

/**
 * Cihaz + arıza adı + marka kademesi → { beklenen, durum, adaylar }.
 * `beklenen` null ise çağıran AI'ın kendi tahminine düşer (belirsizlikte yanlış fiyat YOK).
 */
export function seedEslestir(cihaz, arizaAd, kademe, seed = SEED) {
  const { row, durum, adaylar } = seedSatirBul(seed[cihaz] || [], arizaAd);
  return { beklenen: satirBeklenen(row, kademe), durum, adaylar };
}

/** Geriye dönük sade API: yalnız tutar (null = SEED'den kesin bant çıkmadı). */
export function seedBeklenen(cihaz, arizaAd, kademe, seed = SEED) {
  return seedEslestir(cihaz, arizaAd, kademe, seed).beklenen;
}
