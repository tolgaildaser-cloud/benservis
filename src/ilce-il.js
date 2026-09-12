// src/ilce-il.js — İL + İLÇE eşleştirmesinin TEK kaynağı.
//
// NEDEN VAR (12 Eyl 2026, Tolga: "ilçe ve il eşleşmesini güzel çalış, aynı ilçe adı farklı
// illerde olabilir"). Aynı gün iki ayrı kanama ölçüldü, ikisinin de kökü aynı:
// **ilçe adı tek başına kimlik değildir.**
//   ① Toplayıcı betik ilçe→il sözlüğü tutuyordu; "Yenişehir" hem Bursa'nın hem Mersin'in
//      ilçesi olduğu için Mersin eklenince adresinde "Bursa" yazan 36 kayıt Mersin'e taşındı.
//   ② İlçe, adres metninde ALT DİZE olarak aranıyordu: "Kemalpaşa Cd., Bağcılar/İstanbul"
//      kaydı `izmir/Kemalpaşa` oldu. Ölçüm: 439 kayıtta ilçe, 133 kayıtta il yanlıştı.
//
// KURAL: il ve ilçe, adresin kuyruğundaki "<İlçe>/<İl>" kalıbından okunur ve resmî listeyle
// (`tr-iller.js`, 81 il · 972 ilçe) **çift olarak** doğrulanır. İlçe adı belirsizse karar
// ADRESTEKİ İL'e aittir; hiçbir yere "en olası il" diye tahmin yazılmaz.
import { TR_IL_ILCE } from "./tr-iller.js";

// Türkçe normalizasyon. `̇` = Google adreslerinde geçen birleşik nokta ("İzni̇k").
const TR_HARF = { ı: "i", İ: "i", ş: "s", Ş: "s", ğ: "g", Ğ: "g", ü: "u", Ü: "u", ö: "o", Ö: "o", ç: "c", Ç: "c" };
export const normTr = (s) =>
  String(s ?? "")
    .replace(/̇/g, "")
    .replace(/[ıİşŞğĞüÜöÖçÇ]/g, (c) => TR_HARF[c])
    .toLocaleLowerCase("en")
    .trim()
    .replace(/\s+/g, " ");

// `sehir` alanının biçimi: ascii slug ("eskisehir", "kahramanmaras") — mevcut veriyle aynı.
export const ilSlug = (il) => normTr(il).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Resmî liste → aranabilir dizinler. İlçe anahtarı DAİMA (il, ilçe) çiftidir.
const IL_ADI = new Map(); // "antalya" → "Antalya"
const ILCE_ADI = new Map(); // "antalya|muratpasa" → "Muratpaşa"
for (const [il, ilceler] of Object.entries(TR_IL_ILCE)) {
  IL_ADI.set(normTr(il), il);
  for (const ilce of ilceler) ILCE_ADI.set(`${normTr(il)}|${normTr(ilce)}`, ilce);
}

/** `ilce` gerçekten o ilin ilçesi mi? (Bilinmeyen il → false; boş ilçe → false.) */
export function ilceGecerliMi(sehirSlug, ilce) {
  if (!sehirSlug || !ilce) return false;
  for (const [il, ilceler] of Object.entries(TR_IL_ILCE)) {
    if (ilSlug(il) !== sehirSlug) continue;
    return ilceler.some((d) => normTr(d) === normTr(ilce));
  }
  return false;
}

/** Bir ilçe adının kaç ilde geçtiği — belirsizliği RAPORLAMAK için (karar için değil). */
export function ilceyiTasiyanIller(ilce) {
  const n = normTr(ilce);
  return Object.entries(TR_IL_ILCE).filter(([, ds]) => ds.some((d) => normTr(d) === n)).map(([il]) => il);
}

// Google adresleri "… 07100 Muratpaşa/Antalya, Türkiye" ile biter. Posta kodu ilçeden önce
// gelir ve ilçe/il adlarında rakam yoktur → sayıyı dışarıda bırakmak kuyruğu kesin ayırır.
const KUYRUK = /([^,/0-9]+?)\s*\/\s*([^,/0-9]+?)\s*(?:,\s*t[üu]rkiye)?\s*$/i;

/**
 * Adresten (il, ilçe) çözer. Çözemezse `null` döner — ÇAĞIRAN TARAF TAHMİN ETMEZ.
 * @returns {{il: string, ilce: string, slug: string} | null}
 */
export function adresIlIlce(adres) {
  const m = KUYRUK.exec(String(adres ?? "").trim());
  if (!m) return null;
  const il = IL_ADI.get(normTr(m[2]));
  if (!il) return null; // kuyruktaki son parça bir il değil → uydurma
  const ilce = ILCE_ADI.get(`${normTr(il)}|${normTr(m[1])}`);
  if (!ilce) return null; // ilçe O İLE ait değil → eşleşme yok (başka ile ait olabilir, umursamayız)
  return { il, ilce, slug: ilSlug(il) };
}
