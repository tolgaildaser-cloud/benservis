import { tabloBul } from "./constants.js";
// onarim-rehberleri.js — teşhis edilen arızaya karşılık gelen adım adım onarım rehberi.
//
// NEDEN STATİK HARİTA (canlı API değil) — 29 Tem 2026 fizibilite araştırmasının sonucu
// (`benservis-icerik/2026-07-29-IFIXIT-ENTEGRASYON-ARASTIRMASI.md`):
//   · Canlı arama denendi: "cihaz + arıza" sorgusunun ~%26'sı YANLIŞ rehbere gidiyordu
//     ("gaz kaçağı" → gasket/conta, "kompresör" → mini buzdolabı rölesi). Yanlış link,
//     teşhisin kendisine olan güveni de sarsar.
//   · Kaynaktaki ev-aleti külliyatı küçük (~124 rehber) ve yavaş değişiyor → canlıya gerek yok.
//   · Statik olması: sıfır gecikme, dış bağımlılık yok, service worker/offline bozulmuyor,
//     ve kullanıcının teşhis metni ÜÇÜNCÜ TARAFA HİÇ GİTMİYOR (KVKK açısından da temiz).
//
// Aşağıdaki dış (iFixit) bağlantıların HEPSİ elle doğrulandı: her biri jenerik (marka-bağımsız) —
// çünkü kaynakta Arçelik'e ait tek rehber bile yok, markaya özel eşleştirme imkânsız.
// Kendi Türkçe rehberlerimizde (B) durum farklı: BSH hata kodu rehberleri gibi markaya bağlı
// olanlar başlıkta markayı açıkça yazar, anahtar kelimeleri de o koda dar tutulur.
// Kapsam bilinçli olarak dar: yalnız gerçekten karşılığı olan cihaz kümeleri. Kombi, TV vb.
// için rehber YOK → o cihazlarda buton hiç çıkmaz. (Klima 3 Ağu'da, BUZDOLABI 21 Ağu'da
// kendi Türkçe rehberimizle girdi; ikisinde de iFixit karşılığı yok.)
//
// ⚠️ GÜVENLİK: Bu harita TEK BAŞINA yeterli değil. Buton yalnız `kendinCozebilirMi.mumkun`
// true iken gösterilmeli (App.jsx'te öyle bağlandı) — klima kapasitörü, magnetron ve gaz
// dolumu gibi işler ölümcül ya da belgeli teknisyen işidir.
//
// Rehberler İNGİLİZCE. Bu kullanıcıya arayüzde açıkça yazılır (tıklamadan önce bilsin).

const G = (id, baslik, zorluk, sure, adim) => ({
  url: `https://www.ifixit.com/Guide/${id}`,
  baslik, zorluk, sure, adim, kendi: false,
});

// B(...) = BİZİM kendi Türkçe rehberimiz (kendi blogumuz, kendi metnimiz, kendi görselimiz).
//
// TELİF NOTU (31 Tem 2026, kaynaktan doğrulandı): iFixit içeriği CC BY-NC-SA 3.0 —
// kendi SSS'lerinde "çevirip sitene koyabilirsin" diyorlar AMA şart "noncommercial".
// Benservis ticari bir site → iFixit rehberlerini ÇEVİRMEK ya da FOTOĞRAFLARINI
// kullanmak YASAK. Telif ifadeyi korur, usulü/olguyu değil: kendi cümlelerimizle
// sıfırdan yazılan Türkçe rehber tamamen serbesttir. Buradaki kayıtlar öyle yazıldı.
//
// KURAL: kendi rehberimiz varsa iFixit'e ASLA gönderilmez (rehberBul içinde önceliklidir) —
// kullanıcı Türkçe okur, sitede kalır, iFixit yalnız bizde karşılığı olmayan konularda yedek.
const B = (slug, baslik, zorluk, sure, adim) => ({
  url: `/blog/${slug}/`,
  baslik, zorluk, sure, adim, kendi: true,
});

// zorluk: kaynaktaki İngilizce değerlerin Türkçesi
export const ZORLUK_TR = {
  "Very easy": "Çok kolay", Easy: "Kolay", Moderate: "Orta",
  Difficult: "Zor", "Very difficult": "Çok zor",
};

// cihaz → [ { anahtar kelimeler, rehber } ]  — arıza adı bu kelimelerle eşleştirilir.
// Kelimeler küçük harfe çevrilmiş, Türkçe'ye duyarlı karşılaştırmayla aranır.
export const REHBERLER = {
  "Çamaşır Makinesi": [
    { ara: ["su giriş", "su almıyor", "giriş valf", "inlet"],
      rehber: G("How+To+Replace+The+Inlet+Valve+In+Your+Washing+Machine/181828", "Su giriş valfi değişimi", "Moderate", "15-25 dk", 8) },
    // KENDİ REHBERİMİZ — iFixit'in 17 adımlık İngilizce tahliye teşhisi yerine, kullanıcının
    // ilk yapması gereken işi anlatan Türkçe sayfamız açılır (aynı belirti, daha basit ilk adım).
    { ara: ["tahliye", "pompa", "su atmıyor", "boşaltmıyor", "su boşalt"],
      rehber: B("camasir-makinesi-tahliye-filtresi-temizleme", "Tahliye filtresini temizleme", "Kolay", "~10 dakika", 6) },
    { ara: ["rulman", "keçe", "bearing"],
      rehber: G("How+to+replace+the+drum+bearings+in+your+washing+machine/198640", "Kazan rulmanı değişimi", "Difficult", "35-45 dk", 15) },
    { ara: ["kapı contası", "conta", "körük", "seal"],
      rehber: G("How+to+replace+the+door+seal+in+your+washing+machine/198596", "Kapak contası değişimi", "Moderate", "15-25 dk", 11) },
    { ara: ["kapı kilidi", "kilit", "kapak kilidi"],
      rehber: G("How+To+Replace+The+Door+Lock+In+Your+Washing+Machine/181826", "Kapak kilidi değişimi", "Easy", "7-10 dk", 7) },
    { ara: ["rezistans", "ısıtıcı", "ısıtmıyor"],
      rehber: G("How+to+replace+the+heating+element+and+temperature+sensor+in+your+washing+machine/198599", "Rezistans ve sıcaklık sensörü değişimi", "Moderate", "15-20 dk", 15) },
    { ara: ["amortisör", "titreşim", "sarsıl", "zıpl"],
      rehber: G("How+to+replace+the+shock+absorbers+in+your+washing+machine/198630", "Amortisör değişimi", "Difficult", "30-40 dk", 14) },
    // KENDİ REHBERİMİZ (3 Ağu 2026, YK #34 Faz 2) — yerini aldığı iFixit kaydı
    // ("How to Remove Mold and Odors…", 8 adım) BİLEREK kaldırıldı: kendi rehberimiz
    // rehberBul içinde daima öncelikli olduğu için o satır artık erişilemez ölü koddu.
    { ara: ["koku", "küf", "kokuyor", "kokuyu"],
      rehber: B("camasir-makinesi-kokuyor", "Çamaşır makinesi kokusunu giderme", "Kolay", "~25 dakika", 6) },
  ],
  // KENDİ REHBERLERİMİZ (2 Ağu 2026, YK Kararı #34 Faz 1) — blogda `steps:` alanı ZATEN olan
  // üç Bosch/BSH yazısı rehber olarak bağlandı; sıfır yeni metin, URL değişmedi.
  // ⚠️ ANAHTAR KELİMELER BİLEREK DAR: hata kodları (e15/e22/e24) + o koda özgü ifadeler.
  // Jenerik bulaşık arızalarını ("tahliye", "su atmıyor", "temiz yıkamıyor") ÇALMAMALI —
  // aksi hâlde kendi rehberimiz DAİMA öncelikli olduğu için doğru iFixit kaydını ezerdi.
  // YK #31 denetimi geçti: üçü de ücretsiz/bakım seviyesi (su boşaltma, filtre temizliği,
  // tahliye yolu kontrolü); hiçbirinde parça değişimi ya da cihaz söküm adımı yok.
  "Bulaşık Makinesi": [
    { ara: ["e15", "aquastop", "taban tavası", "taşma güvenliği"],
      rehber: B("bosch-bulasik-makinesi-e15-hatasi", "Bosch/Siemens E15: taban suyunu boşaltma", "Kolay-Orta", "~20 dakika", 6) },
    { ara: ["e22", "iç filtre", "filtre tıkalı", "filtre tıkanık"],
      rehber: B("bosch-bulasik-makinesi-e22-hatasi", "Bosch/Siemens E22: iç filtreyi temizleme", "Kolay", "~10 dakika", 7) },
    { ara: ["e24", "tahliye tıkanık", "tıkalı tahliye", "tahliye hortumu"],
      rehber: B("bosch-bulasik-makinesi-e24-hatasi", "Bosch/Siemens E24: tahliye yolunu açma", "Kolay-Orta", "~20 dakika", 6) },
    // KENDİ REHBERİMİZ (3 Ağu 2026, YK #34 Faz 2) — anahtar kelimeler yalnız kokuya dar;
    // jenerik bulaşık arızalarını çalmaz.
    { ara: ["koku", "kokuyor", "kokuyu", "lağım"],
      rehber: B("bulasik-makinesi-kokuyor", "Bulaşık makinesi kokusunu giderme", "Kolay", "~20 dakika", 7) },
    { ara: ["tahliye pompa", "tahliye", "su atmıyor", "boşaltmıyor"],
      rehber: G("How+To+Replace+The+Drain+Pump+In+Your+Dishwasher/181830", "Tahliye pompası değişimi", "Moderate", "20-35 dk", 8) },
    { ara: ["su giriş", "su almıyor", "giriş valf", "inlet"],
      rehber: G("How+to+replace+the+inlet+valve+in+your+dishwasher/185599", "Su giriş valfi değişimi", "Moderate", "15-25 dk", 10) },
    { ara: ["rezistans", "ısıtıcı", "kurutmuyor", "ısıtmıyor"],
      rehber: G("How+to+Replace+the+Heater+in+Your+Dishwasher/180876", "Isıtıcı değişimi", "Difficult", "30-40 dk", 18) },
    { ara: ["sirkülasyon", "yıkama motoru", "devir daim"],
      rehber: G("How+to+service+the+circulation+pump+in+your+dishwasher/198618", "Sirkülasyon pompası bakımı", "Moderate", "25-35 dk", 18) },
    { ara: ["kapı contası", "conta", "sızdır", "seal"],
      rehber: G("How+to+replace+the+door+seals+in+your+dishwasher/198639", "Kapak contası değişimi", "Moderate", "—", 10) },
    // KENDİ REHBERİMİZ (21 Ağu 2026, PAZ 17 Ağu dönüşüm teslimi). Bir ÜSTTEKİ iFixit
    // püskürtme-kolu rehberinin ÖNÜNE alındı: aynı işi Türkçe, kendi sayfamızda ve 7
    // adımda anlatıyor (YK #34: önce kendi rehberimiz). iFixit satırı silinmedi —
    // "kollar" gibi bu listede olmayan kelimelerde hâlâ karşılık veriyor.
    { ara: ["püskürtme", "püskürtme kolu", "temiz yıkamıyor", "kireçli", "filtre tıkalı"],
      rehber: B("bulasik-makinesi-temiz-yikamiyor", "Temiz yıkamayan bulaşık makinesi", "Kolay", "~20 dakika", 7) },
    { ara: ["temiz yıkamıyor", "püskürtme", "yıkamıyor", "kollar"],
      rehber: G("Removing+and+Cleaning+Dishwasher+Spray+Arm/165191", "Püskürtme kolunu sökme ve temizleme", "Very easy", "5 dk", 7) },
  ],
  // Buzdolabının haritadaki İLK kaydı (21 Ağu 2026). iFixit'te jenerik ev tipi buzdolabı
  // rehberi yok; küme yalnız KENDİ Türkçe rehberimizle açıldı. Anahtar kelimeler bilerek
  // DAR: "soğutmuyor" ve "no-frost" DIŞARIDA — onlar defrost/gaz/kompresör olabilir ve bu
  // rehber onları çözmez (Klima'da "soğutmuyor"un dışarıda bırakılmasıyla aynı mantık).
  "Buzdolabı": [
    { ara: ["kapı contası", "conta", "buzlanma", "buz tutuyor", "kırağı"],
      rehber: B("buzdolabi-buzlanma-yapiyor", "Buzdolabı contası ve buzlanma", "Kolay", "~20 dakika", 7) },
  ],
  "Fırın / Ocak / Aspiratör": [
    { ara: ["rezistans", "ısıtmıyor", "ısıtıcı"],
      rehber: G("How+to+replace+the+heating+elements+in+your+stove+oven/198604", "Fırın rezistansı değişimi", "Moderate", "20-30 dk", 13) },
    { ara: ["termostat", "sıcaklık sensör", "sensör"],
      rehber: G("How+to+replace+the+temperature+sensor+in+your+stove/198590", "Sıcaklık sensörü değişimi", "Easy", "15-25 dk", 14) },
    { ara: ["fan motoru", "fan", "turbo"],
      rehber: G("How+to+repair+the+ventilation+fan+in+your+stove/198608", "Fırın fanı onarımı", "Difficult", "30 dk", 15) },
    { ara: ["ateşleme", "kıvılcım", "çakmak", "yanmıyor"],
      rehber: G("How+to+Fix+a+Gas+Stove+With+Uneven+Firing/179476", "Ocak alevini düzeltme", "Easy", "30 dk", 7) },
    // NOT: "lamba"/"ampul" anahtar kelimesi BİLEREK yok. Rehber fırın kapağına ait; SEED'deki
    // "Aspiratör anahtar/kart/lamba" arızasına bağlanırsa kullanıcı alakasız sayfaya düşer
    // (test sırasında bu yanlış eşleşme yakalandı ve kapatıldı). Aspiratör için rehber YOK.
    { ara: ["fırın kapak conta", "kapı contası", "fırın contası"],
      rehber: G("How+to+replace+the+door+gasket+and+light+bulb+in+your+stove/198592", "Fırın kapak contası değişimi", "Moderate", "15-25 dk", 9) },
  ],
  // Klima kümesinde iFixit'te jenerik ev tipi klima rehberi YOK — bu cihaz haritaya
  // yalnız KENDİ Türkçe rehberimizle girdi. Anahtar kelimeler bilerek DAR tutuldu:
  // "soğutmuyor" gaz/kompresör arızası da olabilir, filtre rehberine bağlanmamalı.
  "Klima": [
    { ara: ["filtre", "kirli filtre", "hava akışı", "hava üflemiyor"],
      rehber: B("klima-filtresi-temizleme", "Klima filtresini temizleme", "Kolay", "~15 dakika", 6) },
  ],
  "Süpürge": [
    // 22 Ağu 2026 (Tolga onayı, konu #3 → seçenek b): kendi rehberimiz iFixit'in ÖNÜNE alındı.
    // ⚠️ Kapattığı canlı ihlal: "çekmiyor" diyen kullanıcı bugüne kadar iFixit'in İngilizce,
    // Difficult, 18 adımlı MOTOR SÖKME rehberine düşüyordu — oysa kendi yazımızın ilk cümlesi
    // "çoğu zaman arıza değil, tıkanmış hava akışı". YK #31'in doğrudan konusu.
    // ⛔ Anahtara "motor" EKLENMEDİ (dar anahtar ilkesi) · iFixit satırları SİLİNMEDİ, altta kaldı.
    { ara: ["çekmiyor", "emiş", "emmiyor", "tıkalı"],
      rehber: B("supurge-cekmiyor", "Emişi geri getiren 6 kontrol", "Kolay", "~15 dakika", 6) },
    { ara: ["motor", "çekmiyor", "sıkış"],
      rehber: G("How+to+clear+a+jammed+motor+in+your+vacuum+cleaner/198622", "Sıkışan motoru açma", "Difficult", "25-35 dk", 18) },
    { ara: ["fırça", "brush", "rulo"],
      rehber: G("Vacuum+Cleaner+Brush+Roll+Replacement/55785", "Fırça rulosu değişimi", "Moderate", "20 dk", 7) },
    { ara: ["anahtar", "düğme", "açılmıyor", "switch"],
      rehber: G("How+to+repair+the+faulty+switch+in+your+vacuum+cleaner/193178", "Arızalı açma/kapama anahtarı onarımı", "Moderate", "15-25 dk", 13) },
  ],
};

const kucult = (s) => String(s || "").toLocaleLowerCase("tr");

/**
 * Teşhis edilen arızaya karşılık gelen rehberi bulur.
 * Eşleşme yoksa null döner → buton hiç gösterilmez (boş/yanlış link YOK).
 *
 * @param {string} cihaz   Seçilen cihaz (CIHAZLAR listesinden birebir)
 * @param {string} arizaAd En olası arızanın adı (AI çıktısı — serbest metin)
 *
 * ⚠️ SEED BAĞIMLILIĞI (4 Ağu 2026, YK #38 denetimi): burada eşleşme SEED satır ADLARINA
 * DEĞİL, aşağıdaki küratörlü `ara` anahtar listelerine yapılır — tarife satırı bölünse ya da
 * yeniden adlandırılsa bile bu harita kendiliğinden bozulmaz. `seedBeklenen`'deki sessiz
 * yanlış-eşleşme hatası burada YOK: (a) "en uzun anahtar kazanır" kuralı zaten belirleyici,
 * (b) eşleşme yoksa null → buton hiç gösterilmez (güvenli varsayılan), (c) en kötü sonuç
 * yanlış LİNK'tir, yanlış FİYAT değil. Denetim: bugünkü 45 SEED adı × 5 ek ile 0 beraberlik;
 * bölünecek üç kalemin cihazlarında (TV · Bilgisayar/Yazıcı · Su Sebili) zaten rehber yok.
 * Kilit: `src/seed-eslesme.test.js` → "onarim-rehberleri: SEED adlarına bağlılık".
 */
export function rehberBul(cihaz, arizaAd) {
  // Alias-duyarlı: cihaz adı birleşince (örn. "Çamaşır Makinesi / Kurutma") tablo anahtarı
  // eski adında kalabilir; `tabloBul` sırayla dener, veri dosyasına dokunmaya gerek kalmaz.
  const liste = tabloBul(REHBERLER, cihaz);
  if (!liste || !arizaAd) return null;
  const a = kucult(arizaAd);
  // İKİ AŞAMALI SEÇİM:
  // 1) Her iki havuzda da (bizim rehberlerimiz / iFixit) en SPESİFİK eşleşme kazanır —
  //    en uzun anahtar kelime ("tahliye pompa" > "tahliye"), böylece genel kelime
  //    spesifik olanı ezmez.
  // 2) Sonuçta KENDİ Türkçe rehberimiz varsa DAİMA o döner; iFixit yalnız bizde
  //    karşılığı olmayan konularda yedektir (Tolga kararı, 31 Tem 2026).
  //    Not: "en uzun anahtar" kuralı havuz İÇİNDE çalışır — bizim kaydımızın anahtarı
  //    daha kısa diye iFixit öne geçemez.
  let bizim = null, bizimUzun = 0, disari = null, disariUzun = 0;
  for (const kayit of liste) {
    for (const k of kayit.ara) {
      if (!a.includes(kucult(k))) continue;
      if (kayit.rehber.kendi) {
        if (k.length > bizimUzun) { bizim = kayit.rehber; bizimUzun = k.length; }
      } else if (k.length > disariUzun) { disari = kayit.rehber; disariUzun = k.length; }
    }
  }
  return bizim || disari;
}
