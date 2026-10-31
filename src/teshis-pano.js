// src/teshis-pano.js — yönetim panosu Teşhis sekmesinin saf hesapları (YK #195).
//
// Gruplama SUNUCUDA yapılır (api/admin/teshis-pano.js) ama bu modül ağsız/DB'siz: test edilir.
// YK kuralı: tarih aralığının TÜM satırları sayfalanarak okunur (5.000 tavanı pivotta yok);
// teshis_log 50.000 satırı geçerse bu hesap Supabase RPC'ye taşınır.
// PII yok: teshis_log'da ad, telefon, e-posta, IP, adres zaten tutulmaz.
import { MARKALAR } from "./constants.js";

const trKey = (s) => String(s ?? "").toLocaleLowerCase("tr").trim();
const BILINEN_MARKA = new Set(MARKALAR.map(trKey));
const MARKA_DISI = new Set(["", "diğer", "diger", "bilmiyorum", "bilinmiyor", "markasız"]);

export const YOK = "(boş)";
const deger = (v) => (v === null || v === undefined || String(v).trim() === "" ? YOK : String(v).trim());

// Gelişin sayfa türü. kaynak dolu ve "blog-ici" ise blog; başka UTM kaynağı "dis"; boşsa doğrudan.
export function kaynakTuru(r) {
  const k = trKey(r.kaynak);
  if (!k) return "dogrudan";
  if (k === "blog-ici") return "blog";
  return "dis";
}
export const gelisEtiketi = (r) => {
  const k = String(r.kaynak ?? "").trim(), c = String(r.cins ?? "").trim();
  if (!k && !c) return "doğrudan";
  return c ? `${k || "?"} / ${c}` : k;
};

// Gün Türkiye saatiyle (rapor Türkiye günüyle okunur).
export const gunTR = (iso) => new Date(new Date(iso).getTime() + 3 * 3600e3).toISOString().slice(0, 10);

export function suz(satirlar, s = {}) {
  return satirlar.filter((r) =>
    (!s.il || r.il === s.il) && (!s.ilce || r.ilce === s.ilce) && (!s.cihaz || r.cihaz === s.cihaz)
    && (!s.marka || r.marka === s.marka) && (!s.tur || kaynakTuru(r) === s.tur)
    && (!s.gelis || gelisEtiketi(r) === s.gelis));
}

const sirala = (m) => [...m.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "tr"));
function say(satirlar, f) {
  const m = new Map();
  for (const r of satirlar) { const k = f(r); m.set(k, (m.get(k) || 0) + 1); }
  return m;
}
const tek = (ad, satirlar, f) => ({ ad, basliklar: [ad, "Teşhis"], satirlar: sirala(say(satirlar, f)).map(([k, n]) => [k, n]) });

function capraz(ad, satirlar, fa, fb, baslikA, baslikB) {
  const m = new Map();
  for (const r of satirlar) { const k = `${fa(r)}\u0000${fb(r)}`; m.set(k, (m.get(k) || 0) + 1); }
  const rows = sirala(m).map(([k, n]) => { const [a, b] = k.split("\u0000"); return [a, b, n]; });
  return { ad, basliklar: [baslikA, baslikB, "Teşhis"], satirlar: rows };
}

const medyan = (d) => {
  if (!d.length) return null;
  const s = [...d].sort((a, b) => a - b), o = Math.floor(s.length / 2);
  return s.length % 2 ? s[o] : Math.round((s[o - 1] + s[o]) / 2);
};
const ort = (d) => (d.length ? Math.round(d.reduce((t, x) => t + x, 0) / d.length) : null);

function maliyetTablosu(ad, satirlar, f) {
  const g = new Map();
  for (const r of satirlar) {
    if (r.maliyet_min == null && r.maliyet_max == null) continue;
    const k = f(r); const x = g.get(k) || { min: [], max: [] };
    if (r.maliyet_min != null) x.min.push(Number(r.maliyet_min));
    if (r.maliyet_max != null) x.max.push(Number(r.maliyet_max));
    g.set(k, x);
  }
  const rows = [...g.entries()].map(([k, x]) => [k, Math.max(x.min.length, x.max.length), ort(x.min), medyan(x.min), ort(x.max), medyan(x.max)])
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "tr"));
  return { ad, basliklar: [ad.split(" × ").pop(), "Teşhis", "Min ort.", "Min medyan", "Max ort.", "Max medyan"], satirlar: rows };
}

function gunluk(satirlar, from, to) {
  const m = say(satirlar, (r) => gunTR(r.created_at));
  const cikti = [];
  for (let t = new Date(`${from}T00:00:00Z`), son = new Date(`${to}T00:00:00Z`); t <= son; t = new Date(t.getTime() + 864e5)) {
    const g = t.toISOString().slice(0, 10);
    cikti.push({ gun: g, sayi: m.get(g) || 0 });
  }
  return cikti;
}

const benzersiz = (d) => [...new Set(d.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "tr"));

/**
 * @param tum  aralığın tüm satırları (süzgeçsiz; seçenek listeleri için)
 * @param onceki önceki eşit uzunluktaki dönemin satırları (fark kutusu için)
 */
export function panoHesapla(tum, onceki, suzgec, from, to) {
  const s = suz(tum, suzgec);
  const karar = say(s, (r) => deger(r.karar));
  const tamir = karar.get("tamir") || 0, yenisi = karar.get("yenisi") || 0;
  const konumlu = s.filter((r) => r.il).length;
  const markaDisi = say(s.filter((r) => !MARKA_DISI.has(trKey(r.marka)) && !BILINEN_MARKA.has(trKey(r.marka))), (r) => deger(r.marka));
  return {
    ozet: {
      toplam: s.length, onceki: suz(onceki, suzgec).length,
      konumlu, konumsuz: s.length - konumlu,
      tamir, yenisi, tamirOran: tamir + yenisi ? Math.round((tamir / (tamir + yenisi)) * 100) : null,
    },
    gunluk: gunluk(s, from, to),
    ilk10Marka: sirala(say(s, (r) => deger(r.marka))).slice(0, 10),
    ilk10Ariza: sirala(say(s, (r) => deger(r.ariza))).slice(0, 10),
    pivotlar: [
      capraz("İl × İlçe", s, (r) => deger(r.il), (r) => deger(r.ilce), "İl", "İlçe"),
      capraz("Cihaz × Marka", s, (r) => deger(r.cihaz), (r) => deger(r.marka), "Cihaz", "Marka"),
      capraz("Marka × Arıza", s, (r) => deger(r.marka), (r) => deger(r.ariza), "Marka", "Arıza"),
      capraz("Karar × Cihaz", s, (r) => deger(r.karar), (r) => deger(r.cihaz), "Karar", "Cihaz"),
      tek("Cihaz yaşı", s, (r) => deger(r.yas)),
      maliyetTablosu("Maliyet × Cihaz", s, (r) => deger(r.cihaz)),
      maliyetTablosu("Maliyet × Marka", s, (r) => deger(r.marka)),
      tek("Aciliyet", s, (r) => deger(r.aciliyet)),
      tek("Geliş kaynağı", s, gelisEtiketi),
    ],
    listedeOlmayan: sirala(markaDisi).map(([marka, sayi]) => [marka, sayi]),
    secenekler: {
      il: benzersiz(tum.map((r) => r.il)),
      ilce: benzersiz((suzgec.il ? tum.filter((r) => r.il === suzgec.il) : tum).map((r) => r.ilce)),
      cihaz: benzersiz(tum.map((r) => r.cihaz)),
      marka: benzersiz(tum.map((r) => r.marka)),
      gelis: benzersiz(tum.map(gelisEtiketi)),
    },
  };
}
