// api/_tarife-hesap.js — saf harmanlama/öneri mantığı (I/O yok, test edilebilir).

export function yuzdelik(arr, p) {
  const v = arr.filter((x) => x != null && !isNaN(x)).map(Number).sort((a, b) => a - b);
  if (!v.length) return null;
  if (v.length === 1) return v[0];
  const idx = (p / 100) * (v.length - 1);
  const lo = Math.floor(idx), hi = Math.ceil(idx);
  return lo === hi ? v[lo] : v[lo] + (v[hi] - v[lo]) * (idx - lo);
}
export function medyan(arr) { return yuzdelik(arr, 50); }

function aykiriEle(arr) {
  const m = medyan(arr);
  if (m == null) return arr;
  return arr.filter((x) => x >= m * 0.4 && x <= m * 2.5);
}

// Güven: nokta sayısı + dağılım. yuksek = 3+ & düşük varyans; orta = 2 veya 3+ yüksek varyans; dusuk = ≤1.
export function guvenSeviyesi(parcalar) {
  const n = parcalar.length;
  if (n <= 1) return "dusuk";
  if (n === 2) return "orta";
  const m = medyan(parcalar);
  const yayilim = m ? (yuzdelik(parcalar, 75) - yuzdelik(parcalar, 25)) / m : 99;
  return yayilim <= 0.5 ? "yuksek" : "orta";
}

// Ham noktalardan önerilen tarife. points: [{parca_tl, iscilik_tl, toplam_tl}]
export function onerTarife(points) {
  const n = points.length;
  const parcalar  = aykiriEle(points.map((p) => Number(p.parca_tl)).filter((x) => x > 0));
  const isciler   = points.map((p) => Number(p.iscilik_tl)).filter((x) => x > 0);
  const toplamlar = aykiriEle(points.map((p) =>
    p.toplam_tl != null ? Number(p.toplam_tl) : (Number(p.parca_tl || 0) + Number(p.iscilik_tl || 0))
  ).filter((x) => x > 0));
  const az = parcalar.length < 3;
  const R = (x) => (x == null ? null : Math.round(x));
  return {
    onayli_parca_min: parcalar.length ? R(az ? Math.min(...parcalar) : yuzdelik(parcalar, 25)) : null,
    onayli_parca_max: parcalar.length ? R(az ? Math.max(...parcalar) : yuzdelik(parcalar, 75)) : null,
    onayli_iscilik:   isciler.length ? R(medyan(isciler)) : null,
    onayli_beklenen:  toplamlar.length ? R(medyan(toplamlar)) : null,
    veri_noktasi_sayisi: n,
    guven: guvenSeviyesi(parcalar),
  };
}
