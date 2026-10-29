// src/servis-arama-kaydi.js — /api/servis/yakin isteğinden PII'siz arama kaydı satırı üretir.
//
// NEDEN VAR (29 Eki 2026, Tolga — YK8 iletti): "FE yakın servis aramalarını il/ilçe bazında
// (PII'siz) kaydetsin; 2 hafta sonra kapsam dışı talebi raporla." Soru şu: kullanıcı servisi
// NEREDE arıyor ve orada dizinimiz var mı? Cevap Kasım tarama turunun il sırasını belirler.
//
// ⛔ PII YOK — bu modül kimlik taşıyan hiçbir alanı dışarı vermez:
//   · Ham koordinat SAKLANMAZ. Konum modunda il/ilçe, en yakın servisin il/ilçesinden çözülür;
//     o servis YAKIN_KM'den uzaksa il/ilçe boş kalır (yanlış ilçeye yazmaktansa boş).
//   · IP, user-agent, oturum/kimlik buraya hiç girmez (çağıran da göndermez).
//   · `kaynak` yalnız sayfa TÜRÜDÜR; blog slug'ı gibi ayrıntı atılır.
// Saf fonksiyon: ağ yok, DB yok → test edilir. Yazma `api/servis/yakin.js`'te.
import { kapsamdaMi } from "./kapsam-iller.js";
import { ilSlug } from "./ilce-il.js";

export const YAKIN_KM = 25;
export const KAYNAK_TURLERI = ["teshis", "blog", "tamir", "kilavuz", "ana", "dogrudan"];

// İstemcinin gönderdiği geliş etiketi ("blog-<slug>", "nav-blog-<slug>", "kilavuz-telefon-tablet",
// "teshis"…) → sayfa türü. Tanınmayan her şey "diger".
export function kaynakTuru(ham) {
  const v = String(ham || "").toLowerCase().replace(/^nav-/, "");
  const tur = v.split("-")[0];
  return KAYNAK_TURLERI.includes(tur) ? tur : "diger";
}

/**
 * @param {object} p
 * @param {"konum"|"ilce"} p.mod
 * @param {string} [p.il]       ilçe modunda istemcinin seçtiği il (ad ya da slug)
 * @param {string} [p.ilce]     ilçe modunda seçilen ilçe
 * @param {string} [p.cihaz]
 * @param {string} [p.kaynak]   istemcinin geliş etiketi
 * @param {Array}  p.sonuc      kullanıcıya dönen servis listesi
 * @param {{s:object, km:number}} [p.enYakin]  konum modunda en yakın (ilçesi bilinen) servis
 * @param {(il:string, ilce:string) => boolean} p.ilcedeServisVar  dizinde o ilçede servis var mı
 */
export function aramaKaydi({ mod, il, ilce, cihaz, kaynak, sonuc, enYakin, ilcedeServisVar }) {
  let kIl = null, kIlce = null;
  if (mod === "ilce") {
    kIl = il ? ilSlug(il) || null : null;
    kIlce = ilce ? String(ilce).slice(0, 60) : null;
  } else if (enYakin && enYakin.km <= YAKIN_KM) {
    kIl = enYakin.s.sehir || null;
    kIlce = enYakin.s.ilce || null;
  }
  const kapsamda = !!(kIl && kIlce && kapsamdaMi(kIl) && ilcedeServisVar(kIl, kIlce));
  return {
    mod,
    il: kIl,
    ilce: kIlce,
    cihaz: cihaz ? String(cihaz).slice(0, 60) : null,
    kaynak: kaynakTuru(kaynak),
    kapsamda,
    sonuc: Array.isArray(sonuc) ? sonuc.length : 0,
  };
}

// Saf toplayıcı (test edilir): satırlar → il/ilçe/kapsamda grupları, sayıya göre azalan.
export function aramaTopla(satirlar) {
  const g = new Map();
  for (const s of satirlar || []) {
    const il = s.il || null, ilce = s.ilce || null, kapsamda = !!s.kapsamda;
    const k = `${il}|${ilce}|${kapsamda}`;
    const x = g.get(k) || { il, ilce, kapsamda, arama: 0, sonucsuz: 0 };
    x.arama += 1;
    if (!s.sonuc) x.sonucsuz += 1;
    g.set(k, x);
  }
  return [...g.values()].sort((a, b) => b.arama - a.arama || String(a.il).localeCompare(String(b.il), "tr"));
}
