// src/yerinde-cekirdek.js — yerinde servis paneli ortak mantığı (YK #183 PR-2, 24 Eki 2026).
// Panel (src/YerindePanel.jsx) ve API (api/yerinde/*) AYNI kuralları buradan okur: durumlar, geçiş tablosu,
// slotlar, yaka → teknisyen ataması, randevu öneri modeli, kişisel veri deseni, log etiketleri.
// Kaynak: ~/Desktop/Yerinde Servis/2-servis-paneli.html (prototip, localStorage). Davranış birebir taşındı;
// tek fark veri artık Supabase'te (supabase/migrations/20261023_183_yerinde_servis.sql + 20261024_183_pr2.sql).

// ─── Bölge ve ekip ───────────────────────────────────────────────────────────────────────────────
export const PILOT_IL = "İstanbul";
// İstanbul ilçeleri: yaka ve yaklaşık merkez koordinatı (yol süresi tahmini için)
export const ILCE_KONUM = {
  Anadolu: { "Adalar": [40.876, 29.091], "Ataşehir": [40.984, 29.107], "Beykoz": [41.130, 29.100], "Çekmeköy": [41.035, 29.178], "Kadıköy": [40.990, 29.030], "Kartal": [40.889, 29.190], "Maltepe": [40.935, 29.155], "Pendik": [40.877, 29.259], "Sancaktepe": [41.000, 29.230], "Sultanbeyli": [40.965, 29.270], "Şile": [41.176, 29.613], "Tuzla": [40.816, 29.300], "Ümraniye": [41.016, 29.120], "Üsküdar": [41.023, 29.015] },
  Avrupa: { "Arnavutköy": [41.185, 28.740], "Avcılar": [40.979, 28.721], "Bağcılar": [41.039, 28.856], "Bahçelievler": [41.000, 28.860], "Bakırköy": [40.980, 28.872], "Başakşehir": [41.093, 28.802], "Bayrampaşa": [41.046, 28.900], "Beşiktaş": [41.043, 29.007], "Beylikdüzü": [40.982, 28.640], "Beyoğlu": [41.037, 28.977], "Büyükçekmece": [41.021, 28.585], "Çatalca": [41.143, 28.461], "Esenler": [41.043, 28.876], "Esenyurt": [41.034, 28.680], "Eyüpsultan": [41.080, 28.930], "Fatih": [41.019, 28.949], "Gaziosmanpaşa": [41.063, 28.912], "Güngören": [41.022, 28.873], "Kağıthane": [41.081, 28.973], "Küçükçekmece": [41.000, 28.780], "Sarıyer": [41.120, 29.040], "Silivri": [41.074, 28.247], "Sultangazi": [41.106, 28.868], "Şişli": [41.060, 28.987], "Zeytinburnu": [40.994, 28.904] },
};
// DB'deki yerinde_teknisyenler satırlarıyla aynı (PR-1 SQL); panel API'den gelen listeyi tercih eder.
export const TEKNISYENLER = [{ kod: "T1", ad: "T1 · Anadolu", yaka: "Anadolu" }, { kod: "T2", ad: "T2 · Avrupa", yaka: "Avrupa" }];
export const yakaOf = (ilce) => (ILCE_KONUM.Anadolu[ilce] ? "Anadolu" : ILCE_KONUM.Avrupa[ilce] ? "Avrupa" : null);
export const konum = (ilce) => ILCE_KONUM.Anadolu[ilce] || ILCE_KONUM.Avrupa[ilce] || null;
export function tekFor(il, ilce) {
  if (il !== PILOT_IL) return "";
  const y = yakaOf(ilce);
  return y === "Anadolu" ? "T1" : y === "Avrupa" ? "T2" : "";
}

// ─── Çalışma takvimi: hafta içi, 08–18 arası beş adet 2 saatlik aralık ────────────────────────────
export const SLOTLAR = [8, 10, 12, 14, 16];
export const CALISMA_GUNLERI = [1, 2, 3, 4, 5]; // Pzt..Cum (SQL CHECK de hafta içi)
export const pad = (n) => String(n).padStart(2, "0");
export const slotAd = (h) => (h == null ? "—" : pad(h) + ":00–" + pad(h + 2) + ":00");
export const slotKisa = (h) => (h == null ? "" : pad(h) + "–" + pad(h + 2));

// ─── Ürünler: [ad, özellikler (arıza seçeneklerini belirler), bilinen model kodları] ─────────────
// Büyük hacimli grup Ekim 2026'da perakende sitelerinde görülen Kiwi modellerinden; Kiwi'nin resmi listesiyle doğrulanmalı.
export const URUNLER = {
  "Yerinde servis · büyük hacimli": [
    ["Su sebili", ["isi", "su", "sogutma"], ["KWP-8555", "KWP-8556M", "KWP-8560"]],
    ["Mini buzdolabı", ["sogutma"], ["KRF-2545", "KRF-2576", "KRF-2586"]],
    ["Oto buzdolabı", ["sogutma"], ["KIM-4753", "KIM-4755"]],
    ["Koltuk ve halı yıkama makinesi", ["motor", "su", "emis"], ["KCC-4320", "KCC-4322", "KCC-4324", "KCC-4325W"]],
    ["Robot süpürge", ["motor", "emis", "sarj", "robot"], ["KVC-4091"]],
    ["Havuz temizleme robotu", ["motor", "robot"], ["KRPC-7170"]],
    ["Yağlı radyatör", ["isi"], ["KHT-8457"]],
    ["Kule / ayaklı vantilatör", ["motor"], ["KFAN-7429", "KFAN-7629", "KFAN-7670"]],
    ["Mikrodalga fırın", ["isi"], ["KMO-4244"]],
    ["Dikiş / overlok makinesi", ["motor", "mekanik"], ["KSW-3042", "KSW-3072", "KSW-3097"]],
  ],
  "Diğer Kiwi ürünleri": [
    ["Su ısıtıcı / çay makinesi", ["isi", "su"], []], ["Kahve makinesi", ["isi", "su", "motor"], []],
    ["Blender / mikser / doğrayıcı", ["motor"], []], ["Tost makinesi / ızgara", ["isi"], []], ["Fritöz / airfryer", ["isi", "motor"], []],
    ["Süpürge (kablolu / şarjlı)", ["motor", "emis", "sarj"], []], ["Ütü / buharlı temizleyici", ["isi", "su"], []],
    ["Elektrikli ısıtıcı (fanlı)", ["isi", "motor"], []], ["Kişisel bakım ürünü", ["isi", "motor", "sarj"], []],
    ["Diğer", ["isi", "su", "motor", "sarj"], []],
  ],
};
const URUN_OZ = Object.fromEntries(Object.values(URUNLER).flat().map(([u, oz]) => [u, oz]));
export const URUN_MODEL = Object.fromEntries(Object.values(URUNLER).flat().map(([u, , m]) => [u, m]));
const ARIZA_ORTAK = ["Hiç çalışmıyor / açılmıyor", "Çalışıp kendiliğinden kapanıyor", "Düğme / tuş / ekran arızası", "Kablo veya fiş hasarlı", "Sigorta attırıyor"];
const ARIZA_EK = {
  isi: ["Isıtmıyor", "Aşırı ısınıyor"], su: ["Su sızdırıyor", "Kireçlenme / tıkanma"], motor: ["Motor dönmüyor", "Devir / güç düşük"],
  sarj: ["Şarj olmuyor / batarya çabuk bitiyor"], emis: ["Emiş gücü zayıf"], sogutma: ["Soğutmuyor", "Buzlanma / su birikmesi"],
  robot: ["İstasyona dönmüyor / takılıyor", "Uygulama veya Wi-Fi bağlantı sorunu"], mekanik: ["İplik atıyor / dikiş kaçırıyor"],
};
const ARIZA_SON = ["Ses / titreşim", "Yanık kokusu / duman", "Kırık / çatlak parça", "Diğer (açıklamaya yazın)"];
export const arizalarFor = (urun) => [...ARIZA_ORTAK, ...(URUN_OZ[urun] || []).flatMap((o) => ARIZA_EK[o]), ...ARIZA_SON];

// ─── Durumlar ve geçiş tablosu (API bunu UYGULAR; panel düğmeleri bundan çizilir) ────────────────
export const DURUMLAR = [
  ["yeni", "Aranacak"], ["randevu", "Randevulu"], ["yolda", "Yolda"], ["serviste", "Serviste"],
  ["parca", "Parça bekliyor"], ["atolye", "Atölyede"], ["tamam", "Tamamlandı"], ["iptal", "İptal"],
];
export const durumAd = Object.fromEntries(DURUMLAR);
export const KAPALI = ["tamam", "iptal"];
// "ulasilamadi" durum değil eylemdir: durum "yeni" kalır, arama sayacı artar.
export const GECISLER = {
  yeni: [["randevu", "Arandı, randevu verildi"], ["ulasilamadi", "Ulaşılamadı"]],
  randevu: [["yolda", "Yola çıktı"]],
  yolda: [["serviste", "Adrese vardı"]],
  serviste: [["tamam", "Tamamlandı"], ["parca", "Parça bekliyor"], ["atolye", "Atölyeye al"]],
  parca: [["randevu", "Parça geldi, yeni randevu"]],
  atolye: [["tamam", "Teslim edildi"]],
  tamam: [], iptal: [],
};
export function gecisGecerli(from, to) {
  if (to === "iptal") return !KAPALI.includes(from);
  return (GECISLER[from] || []).some(([s]) => s === to);
}
export const planlanabilir = (durum) => ["yeni", "randevu", "parca"].includes(durum);

// ─── Kişisel veri deseni (IT bulgusu): serbest metin alanlarına telefon / e-posta yazılmaz ──────
// Telefon yalnız yerinde_musteri.telefon'da, e-posta yalnız yerinde_musteri.eposta'da durur. İş/log tablosuna
// sızmasın diye API bu alanlarda deseni REDDEDER, form da kaydetmeden önce uyarır.
const EPOSTA_DESEN = /[^\s@]+@[^\s@]+\.[^\s@]+/;
export function kisiselVeriVar(metin) {
  const s = String(metin ?? "");
  if (!s) return false;
  if (EPOSTA_DESEN.test(s)) return true;
  // Rakamlar arasındaki boşluk/nokta/tire/parantez atılır: "0532 123 45 67" → 05321234567
  const bitisik = s.replace(/(\d)[\s.\-()/]+(?=\d)/g, "$1");
  return /(?:\+?90|0)?5\d{9}(?!\d)/.test(bitisik) || /(?:\+?90|0)[2-4]\d{9}(?!\d)/.test(bitisik) || /\d{10,}/.test(bitisik);
}
// Model kodu ve seri no rakam dizisi taşıyabilir; denetim yalnız insanın yazdığı serbest metinlerde.
export const SERBEST_METIN_ALANLARI = ["aciklama", "temsilci_notu", "degisen_parcalar", "kiwi_ref", "temsilci"];

// Cep telefonu: DB CHECK ^05[0-9]{9}$ → panelde "0532 123 45 67" yazılır, normalleştirilir.
export function cepNormal(tel) {
  const d = String(tel ?? "").replace(/\D/g, "").replace(/^90(?=5\d{9}$)/, "");
  const n = d.length === 10 && d.startsWith("5") ? "0" + d : d;
  return /^05\d{9}$/.test(n) ? n : null;
}

// ─── Tarih yardımcıları (yerel saat) ─────────────────────────────────────────────────────────────
export const isoDay = (d) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
export function parseDay(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
export const isWorkDay = (d) => CALISMA_GUNLERI.includes(d.getDay());
export function addWorkDays(d, n) { const r = new Date(d); while (n > 0) { r.setDate(r.getDate() + 1); if (isWorkDay(r)) n--; } return r; }
export function workDayDiff(a, b) { let n = 0; const r = new Date(a); while (isoDay(r) < isoDay(b)) { r.setDate(r.getDate() + 1); if (isWorkDay(r)) n++; } return n; }
export function monday(d) { const r = new Date(d); const k = (r.getDay() + 6) % 7; r.setDate(r.getDate() - k); r.setHours(0, 0, 0, 0); return r; }
export function fmtDT(s) { if (!s) return "—"; const d = new Date(s); return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()); }
export function fmtD(s) { if (!s) return "—"; const [y, m, d] = s.split("-"); return d + "." + m + "." + y.slice(2); }
export function fmtDS(day, h) { if (!day) return "—"; const [, m, d] = day.split("-"); return d + "." + m + (h != null ? " " + slotKisa(h) : ""); }
export const gunAdi = (day) => ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"][parseDay(day).getDay()];
export const haftaIciMi = (day) => !!day && /^\d{4}-\d{2}-\d{2}$/.test(day) && isWorkDay(parseDay(day));
export function slaAsimi(j, simdi = Date.now()) { return j.durum === "yeni" && simdi - new Date(j.talep) > 2 * 24 * 3600e3; }

// ─── Yol süresi: ilçe merkezleri arası kuş uçuşu × 1,4, şehir içi 25 km/sa, +10 dk park/ulaşma ──
function km(a, b) {
  const R = 6371, r = (x) => (x * Math.PI) / 180;
  const dLat = r(b[0] - a[0]), dLon = r(b[1] - a[1]);
  return 2 * R * Math.asin(Math.sqrt(Math.sin(dLat / 2) ** 2 + Math.cos(r(a[0])) * Math.cos(r(b[0])) * Math.sin(dLon / 2) ** 2));
}
export function yolDk(ilceA, ilceB) {
  const a = konum(ilceA), b = konum(ilceB);
  if (!a || !b) return 45;
  return Math.round((km(a, b) * 1.4) / 25 * 60 + 10);
}

// ─── Randevu öneri modeli ────────────────────────────────────────────────────────────────────────
// Her yakada tek teknisyen; her 2 saatlik aralıkta en fazla bir iş. Aday her (iş günü, aralık) için
// maliyet = gecikme + saat sapması + komşu işlere yol süresi; en düşük üç aday önerilir.
const AGIRLIK = { gun: 40, slot: 15, yol: 0.6, sikisik: 40 };
export const SIKISIK_DK = 60; // 2 saatlik aralıkta ~60 dk iş + en fazla ~60 dk yol sığar
const ARAMA_GUN = 10;
export function cakisma(isler, tek, gun, saat, haricNo) {
  return isler.find((x) => x.no !== haricNo && x.tek === tek && x.randevuGun === gun && x.randevuSlot === saat && x.durum !== "iptal");
}
function doluSlotlar(isler, tek, haricNo) {
  const m = new Map();
  for (const j of isler) if (j.tek === tek && j.no !== haricNo && j.randevuGun && j.durum !== "iptal") m.set(j.randevuGun + "|" + j.randevuSlot, j);
  return m;
}
export function randevuOner(isler, { tek, ilce, istenenGun, istenenSlot, haricNo }, simdi = new Date()) {
  if (!tek || !konum(ilce)) return [];
  const dolu = doluSlotlar(isler, tek, haricNo);
  const bugun = new Date(simdi); bugun.setHours(0, 0, 0, 0);
  const istenen = istenenGun ? parseDay(istenenGun) : bugun;
  let gun = isoDay(istenen) < isoDay(bugun) ? new Date(bugun) : new Date(istenen);
  if (!isWorkDay(gun)) gun = addWorkDays(gun, 1);
  const simdiSaat = simdi.getHours();
  const adaylar = [];
  for (let g = 0; g < ARAMA_GUN; g++, gun = addWorkDays(gun, 1)) {
    const day = isoDay(gun);
    const gecikme = isoDay(gun) >= isoDay(istenen) ? workDayDiff(istenen, gun) : 0;
    SLOTLAR.forEach((h, i) => {
      if (dolu.has(day + "|" + h)) return;
      if (day === isoDay(bugun) && h <= simdiSaat) return; // geçmiş saatler
      let maliyet = gecikme * AGIRLIK.gun;
      if (istenenSlot != null) maliyet += Math.abs(i - SLOTLAR.indexOf(istenenSlot)) * AGIRLIK.slot;
      const nedenler = [];
      const once = SLOTLAR.slice(0, i).reverse().map((x) => dolu.get(day + "|" + x)).find(Boolean);
      const sonra = SLOTLAR.slice(i + 1).map((x) => dolu.get(day + "|" + x)).find(Boolean);
      for (const [komsu, yon] of [[once, "önce"], [sonra, "sonra"]]) {
        if (!komsu) continue;
        const dk = yolDk(komsu.ilce, ilce);
        const bitisik = Math.abs(SLOTLAR.indexOf(komsu.randevuSlot) - i) === 1;
        if (bitisik && dk > SIKISIK_DK) { maliyet += AGIRLIK.sikisik; nedenler.push(`${yon} ${komsu.ilce}, ${dk} dk yol (sıkışık)`); }
        else nedenler.push(`${yon} ${komsu.ilce}, ${dk} dk`);
      }
      // Ek yol: iki iş arasına girerse önceki→sonraki doğrudan yol düşülür
      const ekYol = once && sonra ? Math.max(0, yolDk(once.ilce, ilce) + yolDk(ilce, sonra.ilce) - yolDk(once.ilce, sonra.ilce))
        : once ? yolDk(once.ilce, ilce) : sonra ? yolDk(ilce, sonra.ilce) : 0;
      if (!once && !sonra) nedenler.push("gün boş");
      else nedenler.push(`ek yol ~${ekYol} dk`);
      maliyet += ekYol * AGIRLIK.yol;
      if (gecikme === 0 && istenenSlot === h) nedenler.unshift("istenen gün, tercih edilen saat");
      else if (gecikme === 0) nedenler.unshift("istenen gün");
      else nedenler.unshift(`istenen günden ${gecikme} iş günü sonra`);
      adaylar.push({ gun: day, saat: h, maliyet: Math.round(maliyet), neden: nedenler.join(" · ") });
    });
  }
  return adaylar.sort((a, b) => a.maliyet - b.maliyet).slice(0, 3);
}

// ─── Log: DB'ye yalnız sabit olay etiketi yazılır (SQL CHECK ^[a-z_]{2,40}(:[a-z0-9_-]{1,40})?$) ─
const GARANTI_AD = { "?": "Kontrol edilecek", E: "Garanti içi", H: "Garanti dışı" };
export const GARANTI_SECENEK = [["?", "Kontrol edilecek"], ["E", "Garanti içi"], ["H", "Garanti dışı"]];
export const OLAY_DESEN = /^[a-z_]{2,40}(:[a-z0-9_-]{1,40})?$/;
export function olayMetni(olay) {
  const [ad, deger = ""] = String(olay).split(":");
  switch (ad) {
    case "eposta_geldi": return "Kiwi e-postası geldi";
    case "kayit": return "Kayıt girildi";
    case "durum": return "Durum: " + (durumAd[deger] || deger);
    case "arama_ulasilamadi": return "Arandı, ulaşılamadı";
    case "randevu": return "Randevu verildi / değişti";
    case "teknisyen": return "Teknisyen: " + (deger === "yok" ? "yok" : deger.toUpperCase());
    case "garanti": return "Garanti: " + (GARANTI_AD[{ e: "E", h: "H", bilinmiyor: "?" }[deger]] || deger);
    case "tercih": return "Müşteri tercihi güncellendi";
    case "kapanis": return "Kapanış bilgisi girildi";
    case "not": return "Temsilci notu güncellendi";
    default: return olay;
  }
}
export const garantiEtiket = (g) => ({ E: "e", H: "h", "?": "bilinmiyor" }[g] || "bilinmiyor");

// ─── DB satırı ↔ panel nesnesi ───────────────────────────────────────────────────────────────────
export function isUiya(row, musteri, loglar = []) {
  return {
    id: row.id, no: row.no, kanal: row.kanal, kiwiRef: row.kiwi_ref || "", talep: row.talep_at,
    ad: musteri?.ad || "", tel: musteri?.telefon || "", eposta: musteri?.eposta || "",
    il: row.il, ilce: row.ilce, adres: musteri?.adres || "", tarif: musteri?.adres_tarifi || "",
    urun: row.urun, model: row.model || "", belirti: row.belirti, aciklama: row.aciklama || "",
    istenenGun: row.istenen_gun, istenenSlot: row.istenen_slot,
    garanti: row.garanti, seri: row.seri_no || "", temsilci: row.temsilci || "", tnot: row.temsilci_notu || "",
    tek: row.teknisyen_kod || "", randevuGun: row.randevu_gun, randevuSlot: row.randevu_slot,
    durum: row.durum, aramalar: row.aramalar || 0, ilkZiyarette: row.ilk_ziyarette, csat: row.csat,
    parcalar: row.degisen_parcalar || "", tutar: row.tutar, guncel: row.updated_at,
    log: loglar.map((l) => ({ t: l.at, olay: l.olay })),
  };
}

// ─── Genel bakış özeti ───────────────────────────────────────────────────────────────────────────
export function ozet(isler, teknisyenSayisi = TEKNISYENLER.length, simdi = new Date()) {
  const bugun = isoDay(simdi);
  const acik = isler.filter((j) => !KAPALI.includes(j.durum));
  const kapanan = isler.filter((j) => j.durum === "tamam");
  return {
    bugun, acik, kapanan,
    aranacak: isler.filter((j) => j.durum === "yeni").sort((a, b) => new Date(a.talep) - new Date(b.talep)),
    bugunRandevu: isler.filter((j) => j.randevuGun === bugun && j.durum !== "iptal"),
    ftf: kapanan.length ? Math.round((100 * kapanan.filter((j) => j.ilkZiyarette).length) / kapanan.length) : null,
    kapasite: teknisyenSayisi * SLOTLAR.length,
  };
}
