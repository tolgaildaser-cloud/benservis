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

// TEK EŞİK — "bir büyüklük mertebesi". Hem toplama katmanındaki akıl çiti (nokta, onaylı
// referansımızın 10 katından büyük / 1/10'undan küçük olamaz) hem de sayfa içi makas çiti
// (tek bir parçanın marka-marka bandı bir mertebeyi aşamaz; aşıyorsa sayfa tek kalem değil,
// KATEGORİ listesidir) bu sabiti kullanır. Kalem başına elle ayarlanan sınır YOK.
// Kalibrasyon: 68 satırlık veri setinde gözlenen en büyük MEŞRU sapma +%404 (≈5,0×) ve
// −%83 (≈1/5,9) → 10× bunun ~2 katı, yani hiçbir gerçek düzeltmeyi kesmez.
export const MERTEBE = 10;

// Aykırı değer elemesi — ROBUST (4 Ağu 2026, IT).
// ⚠️ ESKİ KURAL (medyanın 0,4×–2,5× bandı) n=2'de TERS çalışıyordu: [1.000, 111.111]
// çiftinde medyan 56.055 olur, bant 22.422–140.138 → DOĞRU olan 1.000 elenir, ÇÖP 111.111
// KALIR. İki noktanın hangisinin aykırı olduğuna karar verecek istatistiksel dayanak yoktur.
// YENİ POLİTİKA:
//   n ≥ 4 → Tukey çiti (Q1−1,5·IQR … Q3+1,5·IQR) — dağılımın KENDİ genişliğine göre ölçekler.
//   n = 3 → medyan ± 3·MAD (medyan mutlak sapma; MAD=0 ise eleme yok).
//   n ≤ 2 → ELEME YOK. Fizik dışı nokta bu katmanda değil, TOPLAMA katmanında
//           (scripts/tarife-topla.mjs · MERTEBE çiti) daha girmeden elenir; kalan
//           ihtilafı YK #15 çözer (≥2 bağımsız kaynak + insan onayı).
export function aykiriEle(arr) {
  const v = arr.filter((x) => x != null && !isNaN(x)).map(Number);
  if (v.length <= 2) return v;
  if (v.length === 3) {
    const m = medyan(v);
    const mad = medyan(v.map((x) => Math.abs(x - m)));
    if (!mad) return v;
    return v.filter((x) => Math.abs(x - m) <= 3 * mad);
  }
  const q1 = yuzdelik(v, 25), q3 = yuzdelik(v, 75), iqr = q3 - q1;
  if (!iqr) return v;
  return v.filter((x) => x >= q1 - 1.5 * iqr && x <= q3 + 1.5 * iqr);
}

// Bir nokta, onaylı referansımıza göre bir büyüklük mertebesi dışında mı? (toplama çiti)
// ref yoksa (henüz onaylı satır yok) karar verilemez → false (eleme yok, uydurma yok).
export function mertebeDisi(deger, ref) {
  if (deger == null || !(Number(deger) > 0) || !ref || !(Number(ref) > 0)) return false;
  const k = Number(deger) / Number(ref);
  return k > MERTEBE || k < 1 / MERTEBE;
}

// ── Veri kalitesi işaretleri (`tarife_veri.notlar`) — rapor ve panel AYNI yüklemleri kullanır ──
// `celiskili` (IT, 26 Eyl · YK #143): parça > toplam gibi mantıken imkânsız nokta. Silinmez
// (kanıt), ama ne öneriyi ne kıyası besler — hiçbir eksende.
export const celiskiliMi = (v) => /celiskili/.test(v?.notlar || "");
// `dusuk-guven=sayfa-ici-makas-*` (K3, 4 Ağu): noktanın yalnız PARÇA ekseni güvenilmez.
export const parcaGuvensiz = (v) => /dusuk-guven=sayfa-ici-makas/.test(v?.notlar || "");

// Bir URL'in alan adı (www. atılır). Bağımsızlık ölçütü = farklı host (YK #35).
export const hostAdi = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u || "?"; } };

// App.jsx SERVIS_GIDIS_BEDELI ile aynı; final fiyata sabit eklenir.
export const GIDIS = 1500;

// Bizim onaylı bant vs web — elma-elma sapma satırı (scripts/tarife-rapor.mjs + /tarife paneli).
// pts: YALNIZ kaynak='web' noktaları. mevcut: `tarife` onaylı satırı.
// Dönüş null → kıyas yok (onaylı bant eksik ya da fiyat alanı boş).
// aksiyon: "yukselt" | "dusur" | "floor" | "tek-kaynak" | "uyumlu"
export function sapmaSatiri(pts, mevcut, gidis = GIDIS) {
  if (!mevcut || mevcut.onayli_parca_min == null || mevcut.onayli_parca_max == null) return null;
  const seedParca = (Number(mevcut.onayli_parca_min) + Number(mevcut.onayli_parca_max)) / 2;
  const seedIscilik = Number(mevcut.onayli_iscilik) || 0;
  const temiz = (pts || []).filter((p) => !celiskiliMi(p));

  // ELMA-ELMA: all-in yalnız GERÇEK toplam_tl'den gelir; parça+işçilik toplam sayılmaz.
  const allinPts = temiz.filter((p) => p.toplam_tl != null && Number(p.toplam_tl) > 0);
  const parcaPts = temiz.filter((p) => p.parca_tl != null && Number(p.parca_tl) > 0 && !parcaGuvensiz(p));

  let eksen, biz, web, kullanilan;
  if (allinPts.length) {
    eksen = "all-in"; kullanilan = allinPts;
    biz = Math.round(seedParca + seedIscilik + gidis);
    web = Math.round(medyan(aykiriEle(allinPts.map((p) => Number(p.toplam_tl)))));
  } else if (parcaPts.length) {
    eksen = "parça"; kullanilan = parcaPts;
    biz = Math.round(seedParca);
    web = Math.round(medyan(aykiriEle(parcaPts.map((p) => Number(p.parca_tl)))));
  } else return null;
  if (!biz || web == null || isNaN(web)) return null;

  const sapma = Math.round(((web - biz) / biz) * 100);
  const hostSayisi = new Set(kullanilan.map((p) => hostAdi(p.kaynak_url))).size;
  const taban = gidis + seedIscilik; // YK #15: kayıt bazlı taban, altına inilmez
  let aksiyon;
  if (hostSayisi < 2) aksiyon = "tek-kaynak";          // YK #15: tek kaynakla asla
  else if (sapma > 20) aksiyon = "yukselt";
  else if (sapma < -20) aksiyon = eksen === "all-in" && web < taban ? "floor" : "dusur";
  else aksiyon = "uyumlu";
  return { eksen, biz, web, sapma, hostSayisi, nokta: kullanilan.length, taban, aksiyon };
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
