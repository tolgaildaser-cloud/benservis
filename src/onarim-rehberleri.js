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
// Aşağıdaki 23 bağlantının HEPSİ elle doğrulandı: her biri jenerik (marka-bağımsız) —
// çünkü kaynakta Arçelik'e ait tek rehber bile yok, markaya özel eşleştirme imkânsız.
// Kapsam bilinçli olarak dar: yalnız gerçekten karşılığı olan 4 cihaz kümesi. Buzdolabı,
// klima, kombi, TV vb. için jenerik rehber YOK → o cihazlarda buton hiç çıkmaz.
//
// ⚠️ GÜVENLİK: Bu harita TEK BAŞINA yeterli değil. Buton yalnız `kendinCozebilirMi.mumkun`
// true iken gösterilmeli (App.jsx'te öyle bağlandı) — klima kapasitörü, magnetron ve gaz
// dolumu gibi işler ölümcül ya da belgeli teknisyen işidir.
//
// Rehberler İNGİLİZCE. Bu kullanıcıya arayüzde açıkça yazılır (tıklamadan önce bilsin).

const G = (id, baslik, zorluk, sure, adim) => ({
  url: `https://www.ifixit.com/Guide/${id}`,
  baslik, zorluk, sure, adim,
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
    { ara: ["tahliye", "pompa", "su atmıyor", "boşaltmıyor", "su boşalt"],
      rehber: G("How+to+Troubleshoot+Drainage+Issues+in+a+Washing+Machine/218133", "Tahliye sorunlarını adım adım bulma", "Moderate", "45 dk-1 sa", 17) },
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
    { ara: ["koku", "küf", "kokuyor"],
      rehber: G("How+to+Remove+Mold+and+Odors+Inside+a+Washing+Machine/207574", "Küf ve kokuyu giderme", "Moderate", "1-2 sa", 8) },
  ],
  "Bulaşık Makinesi": [
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
    { ara: ["temiz yıkamıyor", "püskürtme", "yıkamıyor", "kollar"],
      rehber: G("Removing+and+Cleaning+Dishwasher+Spray+Arm/165191", "Püskürtme kolunu sökme ve temizleme", "Very easy", "5 dk", 7) },
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
  "Süpürge": [
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
 * @param {string} arizaAd En olası arızanın adı (AI çıktısı) — SEED adlarıyla örtüşür
 */
export function rehberBul(cihaz, arizaAd) {
  const liste = REHBERLER[cihaz];
  if (!liste || !arizaAd) return null;
  const a = kucult(arizaAd);
  // En SPESİFİK eşleşme kazansın: en uzun anahtar kelimeyi eşleyen kayıt önce gelir.
  // ("tahliye pompa" > "tahliye" gibi) — böylece genel bir kelime spesifik olanı ezmez.
  let en = null, enUzun = 0;
  for (const kayit of liste) {
    for (const k of kayit.ara) {
      if (a.includes(kucult(k)) && k.length > enUzun) { en = kayit.rehber; enUzun = k.length; }
    }
  }
  return en;
}
