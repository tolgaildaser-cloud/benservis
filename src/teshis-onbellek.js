// src/teshis-onbellek.js — YK Kararı #99 (28 Ağu 2026): "aynı girdiyle tekrar
// çalıştırılan teşhis yeni model çağrısı yapmaz ve yeni log satırı yazmaz."
//
// Tolga'nın gözlemi: "marka değiştir" / "belirti değiştir" ile forma dönüp HİÇBİR ŞEY
// değiştirmeden tekrar "teşhis et"e basınca arka tarafta teşhis yeniden koşuyordu —
// ikinci `/api/diagnose` çağrısı + ikinci `/api/teshis/log` satırı. Asıl zarar token
// değil ÖLÇÜM: teşhis hacmi tek KPI (YK #51 hedef 2.000/ay · #54 taban 1.000/ay),
// mükerrer koşu tabanı şişirip hedefe uzaklığı olduğundan iyi gösteriyor.
//
// ⛔ "Yine de yeniden çalıştır" çıkışı BİLEREK yok: 26 Ağu determinizm testi sapma 0
//    verdi (iki vaka, iki tur, baseline birebir) — aynı girdi zaten aynı cevabı üretir.
// ⛔ Sunucu tarafı ortak önbellek kapsam DIŞI (serbest metin normalizasyonu ayrı iş).

// Girdi imzası. İmza aynıysa prompt da aynıdır → sonuç da aynıdır.
// Belirti serbest metin olduğu için sadeleştirilir: baştaki/sondaki boşluk atılır,
// harfler TR yerelinde küçültülür (kod tabanının her yerindeki biçim), araya kaçan
// çift boşluk/satır sonu tek boşluğa indirilir. Böylece "Su   AKMIYOR " ile
// "su akmıyor" aynı koşu sayılır.
//
// `markaDiger` imzaya HER ZAMAN girer (yalnız marka "Diğer" iken değil): fazladan alan
// imzayı yalnız SIKILAŞTIRIR — en kötü ihtimalle teşhis boşuna bir kez daha koşar,
// asla yanlış sonucu önbellekten göstermez.
export function teshisImzasi({ cihaz, marka, markaDiger, yas, belirti } = {}) {
  const d = (v) => String(v ?? "").trim();
  const b = d(belirti).toLocaleLowerCase("tr").replace(/\s+/g, " ");
  return [d(cihaz), d(marka), d(markaDiger), d(yas), b].join("|");
}

// "Teşhis et" düğmesinin kapısı. İmza öncekiyle aynıysa `calistir` HİÇ ÇAĞRILMAZ —
// `/api/diagnose` fetch'i ve `/api/teshis/log` yazımı onun içinde yaşar, dolayısıyla
// ikisi de olmaz. Farklıysa normal akış koşar.
// `calistir` hata durumunda null döner (hata ekranını kendi kurar) → kapı da null döner.
export async function teshisKapisi({ onbellek, imza, calistir }) {
  if (onbellek && onbellek.imza === imza) {
    return { onbellekten: true, teshis: onbellek.teshis, gecerli: onbellek.gecerli };
  }
  const taze = await calistir();
  if (!taze) return null;
  return { onbellekten: false, teshis: taze.teshis, gecerli: taze.gecerli };
}
