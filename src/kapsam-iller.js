// src/kapsam-iller.js — SİSTEMATİK OLARAK TARADIĞIMIZ İLLER (vitrin "il" sayacının kaynağı).
//
// NEDEN AYRI BİR LİSTE (12 Eyl 2026): il/ilçe alanları artık adresten türetiliyor
// (`ilce-il.js`) ve bu doğru olduğu için veride 12 değil **26 il** görünüyor — Google
// sorguları ilçe dışından da işletme döndürdüğü için Sakarya'da 8, Kütahya'da 7 gibi
// **dağınık** kayıtlar var (12 il dışında toplam 38 kayıt).
//
// ⛔ Bunlar KAPSAM DEĞİLDİR: o illerde ilçe ilçe taranmadı, kullanıcıya "oradayız" demek
// yanlış olur. Vitrindeki sayaç bu yüzden veride bulunan il sayısını değil, **taranmış**
// il sayısını gösterir. Dağınık kayıtlar silinmez (gerçek servisler, telefonları var ve
// mesafe aramasında çıkabilirler) — yalnız kapsam iddiası üretmezler.
//
// 🔁 TEK KAYNAK KURALI: bu liste `scripts/collect-cities.py` içindeki `CITY_DISPLAY` ile
// birebir aynı olmak zorundadır; `src/kapsam-iller.test.js` ikisini karşılaştırır ve
// ayrışırsa GÜRÜLTÜLÜ patlar. Yeni il taranınca İKİSİ BİRDEN güncellenir.
export const KAPSAM_ILLER = {
  istanbul: "İstanbul",
  izmir: "İzmir",
  ankara: "Ankara",
  bursa: "Bursa",
  adana: "Adana",
  eskisehir: "Eskişehir",
  trabzon: "Trabzon",
  gaziantep: "Gaziantep",
  antalya: "Antalya",
  konya: "Konya",
  mersin: "Mersin",
  kocaeli: "Kocaeli",
};

export const kapsamdaMi = (sehirSlug) => Object.hasOwn(KAPSAM_ILLER, String(sehirSlug ?? ""));
