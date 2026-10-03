// src/constants.js
export const CIHAZLAR = [
  "Buzdolabı", "Çamaşır Makinesi", "Kurutma Makinesi", "Bulaşık Makinesi", "Televizyon / Monitör", "Fırın / Ocak / Aspiratör", "Klima",
  "Kombi / Termosifon", "Mikrodalga / Air Fryer", "Süpürge",
  "Su Sebili / Arıtma", "Bilgisayar / Yazıcı",
];

// ── İÇERİK CİHAZLARI (YK #149, 30 Eyl 2026) ───────────────────────────────────────────────
// Tolga: "blog, tamir merkezi ve kullanım kılavuzları tarafında küçük ev aletlerini de ekle.
// teşhis yapmasak da sitenin hit alması için önemli."
// İKİ LİSTE, İKİ AYRI İŞ — karıştırılmaz:
//   • CIHAZLAR         → TEŞHİS. Form, tarife, servis eşleşmesi, ilan, DPP. DEĞİŞMEDİ.
//   • ICERIK_CIHAZLARI → İÇERİK yüzeyleri: /blog/kategori/, /tamir/, /kilavuzlar/.
//     CIHAZLAR'ın üst kümesi; fazlası "teşhissiz" kategoridir.
// Teşhissiz kategoride `/?cihaz=` köprüsü BASILMAZ (App.jsx o slug'ı çözemez, form yanlış ya da
// boş açılırdı). Yerine üreticinin destek adresi + genel "Servis Bul" + kardeş yazılar basılır
// (scripts/build-blog.mjs). Yeni bir teşhissiz kategori açmak = bu diziye bir satır.
export const TESHISSIZ_CIHAZLAR = ["Küçük Ev Aletleri"];
export const ICERIK_CIHAZLARI = [...CIHAZLAR, ...TESHISSIZ_CIHAZLAR];
export const teshisVarMi = (cihaz) => CIHAZLAR.includes(cihaz);

// ── SLUG ÇİVİSİ ────────────────────────────────────────────────────────────────────
// Cihaz adı → slug türetimi normalde yeterli. Bu tablo, YAYINDAKİ bir adresi addan
// bağımsız dondurmak gerektiğinde kullanılır (ad değişir, adres değişmez).
// ⛔ Kozmetik ad değişikliği için kullanılmaz — her satır bir adresi kalıcı dondurur.
// Şu an boş: 21 Ağu 2026'da kurutma makinesi AYRI CİHAZ olarak eklendi (Tolga kararı),
// "Çamaşır Makinesi" adı değişmedi, dolayısıyla çivilenecek bir adres yok.
export const CIHAZ_SLUG_SABIT = {};

// Birleştirilen cihazların eski kategori adlarıyla eşleştirilmesi —
// eski servis kayıtları (services-data.json + DB) "Notebook", "Elektrik Süpürgesi"
// gibi adlar tutuyor; birleştirme sonrası eşleşme kopmasın diye genişletilir.
export const KATEGORI_ESLES = {
  // ── KURUTMA MAKİNESİ: AYRI CİHAZ (Tolga, 21 Ağu 2026) ───────────────────────────
  // ⚠️ SERVİS ARZI KENDİ ADIYLA SIFIR: 10.529 servis kaydının tamamı tarandı, "Kurutma
  // Makinesi" kategorisi HİÇ YOK. Alias olmasaydı kullanıcı kurutma seçtiğinde "yakınındaki
  // servis" ekranı BOŞ dönerdi — uygulamanın çekirdek vaadi tam orada kırılırdı.
  // Bu yüzden kurutma, çamaşır makinesi kayıtlarına eşlenir: aynı beyaz eşya servisleri
  // fiilen kurutma makinesine de bakıyor, 1.916 kayıt anında eşleşir.
  // 📌 Servis verisine gerçek "Kurutma Makinesi" kaydı girdiği gün bu alias daraltılabilir.
  "Kurutma Makinesi": ["Kurutma Makinesi", "Çamaşır Kurutma Makinesi", "Kurutucu", "Çamaşır Makinesi"],
  "Süpürge": ["Süpürge", "Elektrik Süpürgesi", "Robot Süpürge"],
  "Mikrodalga / Air Fryer": ["Mikrodalga / Air Fryer", "Mikrodalga", "Air Fryer"],
  // Aspiratör/davlumbaz, "Fırın / Ocak" mutfak ankastre segmentine katıldı; eski servis
  // kayıtları "Fırın / Ocak" tuttuğu için eşleşme kopmasın diye genişletildi.
  "Fırın / Ocak / Aspiratör": ["Fırın / Ocak / Aspiratör", "Fırın / Ocak", "Fırın", "Ocak", "Aspiratör", "Davlumbaz"],
  // Kombi + Termosifon birleşti (etikette "Şofben" YOK — kullanımı azaldı); eski servis kayıtları
  // "Kombi"/"Termosifon / Şofben"/"Şofben" tuttuğu için eşleşmede alias olarak kalır (arıza tespiti eşleşsin).
  "Kombi / Termosifon": ["Kombi / Termosifon", "Kombi", "Termosifon / Şofben", "Termosifon", "Şofben"],
  // Bilgisayar + Yazıcı birleşti.
  "Bilgisayar / Yazıcı": ["Bilgisayar / Yazıcı", "Bilgisayar", "Masaüstü Bilgisayar", "Notebook", "Yazıcı"],
  // Televizyon + Monitör birleşti; eski servis kayıtları "Televizyon" tuttuğu için alias kalır.
  "Televizyon / Monitör": ["Televizyon / Monitör", "Televizyon", "Monitör"],
};

// Bir cihaz için eşleşecek tüm kategori adları (birleştirme dahil).
export function eslesenKategoriler(cihaz) {
  return KATEGORI_ESLES[cihaz] || [cihaz];
}

// Cihaz adı → slug. TEK ÜRETİCİ: /tamir/, /kilavuzlar/, /blog/kategori/, kategori ikon
// dosya adları ve `/?cihaz=` derin linki hep buradan geçer, ikinci bir slug tablosu tutulmaz.
// Çivilenmiş ad varsa çivi kazanır (yukarıdaki CIHAZ_SLUG_SABIT gerekçesi).
export function cihazSlug(ad) {
  if (CIHAZ_SLUG_SABIT[ad]) return CIHAZ_SLUG_SABIT[ad];
  return String(ad).toLocaleLowerCase("tr")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// ⚠️ İKİ FARKLI EŞLEŞME VAR, KARIŞTIRILMAZ (21 Ağu 2026'da karıştırıldı ve yakalandı):
//   • KATEGORI_ESLES → SERVİS VERİSİ eşleşmesi. Geniş olabilir: kurutma, çamaşır makinesi
//     servislerine düşer çünkü o servisler fiilen kurutmaya da bakıyor.
//   • TABLO_ESLES    → İÇERİK/TABLO araması (hata kodu · rehber · ikon · marka · kılavuz).
//     BURASI GENİŞ OLAMAZ: servis alias'ı buraya sızarsa kurutma makinesi sayfası çamaşır
//     makinesinin 29 hata kodunu kendi kaydıymış gibi listeler (ölçüldü — 29/29 sızmıştı).
// Şu an boş: 12 cihazın hiçbiri ad değiştirmedi. Bir cihaz YENİDEN ADLANDIRILIRSA eski adı
// buraya yazılır, veri dosyaları olduğu gibi kalır.
const TABLO_ESLES = {};

// Tablo araması: cihazın kendisi + (varsa) eski adları sırayla denenir, ilk dolu olan döner.
// NEDEN GEREKLİ: `src/tarife-seed.js` Supabase'den ÜRETİLİYOR (elle düzenlenmez) ve orada
// "Kurutma Makinesi" satırı HENÜZ YOK. Alias çözümü olmasaydı kurutma teşhisi ÇIPASIZ kalırdı
// (`SEED[cihaz]` → undefined) ve fiyat tamamen AI tahminine düşerdi — YK #46 hattında en
// istenmeyen durum. Şimdilik çamaşır makinesi çıpalarına düşer.
// ⚠️ AÇIK KALEM: kurutmaya ÖZGÜ satırlar (rezistans · nem sensörü · kondenser pompası · kayış)
// Supabase'de /tarife onayıyla açılmalı; o satırlar girene kadar kurutma tahmini çamaşır
// parçalarına dayanıyor. Bu bir FİYAT KARARI DEĞİL, köprü — fiyatı FE yazmaz.
export function tabloBul(tablo, cihaz) {
  for (const ad of (TABLO_ESLES[cihaz] || [cihaz])) {
    const v = tablo?.[ad];
    if (v && (!Array.isArray(v) || v.length)) return v;
  }
  return undefined;
}

const trSort = (a, b) => a.localeCompare(b, "tr");

// Cihaza göre marka grupları — Türkiye piyasası (hepsiburada/mediamarkt marka filtreleri,
// 2026) ile karşılaştırılarak güncellendi. Kullanıcı cihaz seçince yalnız o cihazda satılan
// markalar listelenir; markası listede olmayan "Diğer / Listede yok" ile devam eder (App.jsx).
const BEYAZ_ESYA = [
  "AEG", "Altus", "Arçelik", "Bauknecht", "Beko", "Bosch", "Candy", "Daewoo",
  "Electrolux", "Grundig", "Haier", "Hisense", "Hoover", "Hotpoint", "Indesit",
  "Liebherr", "LG", "Midea", "Miele", "Profilo", "Regal", "Samsung", "Sharp",
  "Siemens", "Smeg", "Uğur", "Vestel", "Vestfrost", "Whirlpool", "Zanussi",
];
// Klima ve Kombi farklı marka setleri taşır → ayrı listeler (eskiden tek ISITMA_SOGUTMA idi;
// klima kullanıcısı kombi-markası, kombi kullanıcısı klima-markası görüyordu).
const KLIMA = [
  "Arçelik", "Aux", "Baymak", "Beko", "Bosch", "Carrier", "Daikin", "Fujitsu",
  "Gree", "Haier", "Hisense", "Hitachi", "LG", "Midea", "Mitsubishi Electric", "Mitsubishi Heavy", "Panasonic",
  "Samsung", "Toshiba", "Vestel",
];
const KOMBI = [
  "Airfel", "Alarko", "Arçelik", "Baxi", "Baymak", "Beko", "Bosch", "Buderus",
  "Demirdöküm", "ECA", "Emas", "Ferroli", "Immergas", "Protherm", "Termoteknik", "Vaillant",
  "Viessmann", "Warmhaus",
];
const KUCUK_EV = [
  "Arçelik", "Arnica", "Arzum", "Beko", "Bosch", "Braun", "Cosori", "Fakir", "Goldmaster",
  "Homend", "Karaca", "Kenwood", "King", "Korkmaz", "Kumtel", "Luxell", "Ninja", "Philips",
  "Rowenta", "Russell Hobbs", "Schafer", "Sinbo", "Stilevs", "Tefal", "Vestel", "Xiaomi",
];
const SUPURGE = [
  "Arçelik", "Arnica", "Arzum", "Beko", "Bissell", "Bosch", "Dreame", "Dyson", "Ecovacs",
  "Electrolux", "Eufy", "Fakir", "Fantom", "Homend", "Karcher", "LG", "Philips", "Roborock",
  "Rowenta", "Samsung", "Stilevs", "Tefal", "Vestel", "Xiaomi", "iRobot",
];
const TELEVIZYON = [
  "Arçelik", "Awox", "Axen", "Beko", "Dijitsu", "Finlux", "Grundig", "Hisense", "LG", "Onvo",
  "Panasonic", "Philips", "Profilo", "Regal", "Samsung", "Sharp", "Skyworth",
  "Sony", "Sunny", "TCL", "Telefunken", "Thomson", "Toshiba", "Vestel", "Xiaomi",
];
// Monitör markaları — TV'den kısmen farklı (bilgisayar + ekran-uzmanı markalar). 2026 TR
// piyasası (Amazon/Teknosa/Technopat "en çok satan monitör": Dell/Asus/MSI/Samsung/Gigabyte/AOC).
const MONITOR = [
  "AOC", "Acer", "Asus", "BenQ", "Casper", "Dell", "Gigabyte", "HP",
  "Iiyama", "Lenovo", "MSI", "Monster", "ViewSonic",
];
const SU_ARITMA = [
  "A.O. Smith", "Aqua", "Aquapro", "Aquatech", "Arçelik", "Aura (İhlas)", "Beko",
  "Brita", "Conti", "Coway", "Cuckoo", "Elit", "Fakir", "Homefil", "Puretech",
  "Samsung", "Sumosu", "Tunçmatik", "Vestel", "Waterlife",
];
const BILGISAYAR = [
  "Acer", "Apple", "Asus", "Casper", "Dell", "Exper", "Gigabyte", "Hometech",
  "Honor", "HP", "Huawei", "Lenovo", "LG", "Microsoft", "Monster", "MSI",
  "Samsung", "Sony", "Toshiba", "Xiaomi",
];
const TELEFON = [
  "Apple", "Asus", "Casper", "General Mobile", "Honor", "Huawei", "Infinix", "Nokia",
  "Omix", "OnePlus", "Oppo", "Realme", "Reeder", "Samsung", "TCL", "Tecno", "Vivo", "Xiaomi",
];
// ── YK #150 (30 Eyl 2026) — MARKA LİSTESİ GENİŞLEDİ ──────────────────────────────────────
// Kaynak: PAZ marka boşluk taraması. Her markanın cihaz ataması 30 Eyl koşusunda markanın
// KENDİ TR sitesindeki ürün kategorilerinden okundu (PAZ'ın kaba ölçümünden değil):
//   Dijitsu      buzdolabı · çamaşır · bulaşık · klima · TV · mikrodalga · su sebili (kurutma/fırın YOK)
//   Arnica · Homend · Stilevs   süpürge + küçük ev (üçünde de air fryer/fritöz var)
//   Schafer      küçük ev (fritöz var; süpürge YOK)      Bissell  yalnız süpürge
//   De'Longhi    kahve makinesi — air fryer sitede görülmedi → teşhis formunda hiçbir cihaza
//                bağlanmadı, yalnız master listede (Küçük Ev Aletleri föyüyle içerik tarafına girer)
//   Emas         kombi + klima                           Termoteknik  yalnız kombi
//   Omix · Infinix   telefon (teşhiste telefon cihazı yok → yalnız master liste)
//   Sunny        TV'ye ek: buzdolabı · klima · süpürge · mikrodalga (sitesinde dördü de var)
//   Mitsubishi   → "Mitsubishi Electric" + "Mitsubishi Heavy" (ayrı şirketler, ayrı kod tabloları)
// ⛔ EKLENMEDİ: Gorenje (site 403) · Excalibur (200 ama boş gövde, kategori okunamadı) ·
//    Nordmende (nordmende.com.tr markanın sitesi değil, alakasız bir mağaza).
// Tek cihazda doğrulanan marka ORTAK diziye girmez (BEYAZ_ESYA beş cihazı birden besliyor);
// aşağıda yalnız doğrulanan cihazın satırına eklenir.
const DIJITSU = "Dijitsu";

// Eski marka adı → bugünkü ad. Ad bölününce eski kayıtlar (teşhis günlüğü, servis verisindeki
// `serbis_markalar`, kullanıcının serbest metni) KOPMASIN diye. "Mitsubishi" tek başına
// yazıldığında ev kliması pazarındaki yaygın ad olan Electric'e çözülür.
export const MARKA_ALIAS = { "Mitsubishi": "Mitsubishi Electric" };
export const markaCoz = (ad) => MARKA_ALIAS[ad] || ad;

const ANKASTRE_EK = ["Franke", "Silverline", "Simfer", "Kumtel", "ECA", "CATA", "Elica", "Teka", "Luxell", "Ferre", "Gaggenau"];
const YAZICI = ["Brother", "Canon", "Epson", "Kyocera", "Lexmark", "Pantum", "Ricoh", "Xerox"];

// Garanti yönlendirmesi ve teşhis kalitesi için master liste — tüm grupların birleşimi
// (haritada olmayan cihaz veya "Diğer" → bu liste). Süperset garantisi için üretilir.
export const MARKALAR = [...new Set([
  ...BEYAZ_ESYA, ...KLIMA, ...KOMBI, ...KUCUK_EV, ...SUPURGE, ...TELEVIZYON, ...MONITOR,
  ...SU_ARITMA, ...BILGISAYAR, ...TELEFON, ...ANKASTRE_EK, ...YAZICI,
  "Balay", "Comfee", "Singer", "Shark", "Tineco", DIJITSU, "De'Longhi", "Krups", "WMF", "Kiwi",
  "Konica Minolta", "MOVA", "Einhell", "Jura", "Nespresso", "KitchenAid", "Raks",
  "Black+Decker", "Wiami", "Thermomix", "Skytech", "Tchibo", "Gaggenau", "Excalibur",
  "Grohe", "OKI", "Zebra", "Citizen", "Roland DG", "Fujifilm",
])].sort(trSort);

export const CIHAZ_MARKALARI = {
  // 27 Eyl 2026 (Sprint #144 kılavuz föyü): ortak diziye DEĞİL, yalnız kılavuzu doğrulanan cihaza eklendi.
  // 3 Eki 2026 (föy 1. parti): Simfer · Kumtel · Teka · Viessmann · Vaillant · ECA · Electrolux · King · Kiwi
  //   yalnız kılavuz adresi doğrulanan cihaz satırına eklendi; Ferre ANKASTRE_EK'e.
  // 3 Eki 2026 (föy 3. parti): Franke · Gaggenau · Wiami · Raks · Kiwi · Aura · Black+Decker · Skytech · Excalibur aynı kuralla.
  "Buzdolabı": [...BEYAZ_ESYA, "Onvo", DIJITSU, "Sunny", "Simfer", "Kumtel", "Teka", "Franke", "Gaggenau"].sort(trSort),
  "Çamaşır Makinesi": [...BEYAZ_ESYA, DIJITSU, "Simfer"].sort(trSort),
  // Kurutma makinesi markaları çamaşır makinesiyle aynı üretici kümesi (TR piyasasında
  // kurutmayı satan her marka çamaşır da satıyor) — ayrı liste tutmak ikinci kaynak olurdu.
  "Kurutma Makinesi": BEYAZ_ESYA,
  "Bulaşık Makinesi": [...BEYAZ_ESYA, "Teka", "Franke", DIJITSU, "Kumtel", "Gaggenau"].sort(trSort),
  "Fırın / Ocak / Aspiratör": [...new Set([...BEYAZ_ESYA, ...ANKASTRE_EK, "Kiwi"])].sort(trSort),
  "Mikrodalga / Air Fryer": [...new Set([...KUCUK_EV, ...BEYAZ_ESYA, "Goldmaster", "Kumtel", "Teka", "Onvo", DIJITSU, "Sunny", "Kiwi", "Franke", "Wiami"])].sort(trSort),
  // 28 Eyl 2026 (Sprint #144 kılavuz föyü): Altus/Grundig/TCL/Fakir/Airfel yalnız klima satırına.
  "Klima": [...KLIMA, "Siemens", "Profilo", "Alarko", "Uğur", "Regal", "Demirdöküm", "Altus", "Grundig", "TCL", "Fakir", "Airfel", DIJITSU, "Emas", "Sunny",
    "Simfer", "Viessmann", "Vaillant", "ECA", "Electrolux", "Raks", "Kiwi"].sort(trSort),
  "Kombi / Termosifon": [...KOMBI, "Regal", "Vestel", "Daikin", "Ariston", "King", "Aura (İhlas)"].sort(trSort),
  "Televizyon / Monitör": [...new Set([...TELEVIZYON, ...MONITOR, "Apple", "Haier", "Altus", "Skytech"])].sort(trSort),
  "Süpürge": [...new Set([...SUPURGE, "Roborock", "iRobot", "Hoover", "Siemens", "Profilo", "AEG", "Onvo",
    "Altus", "Grundig", "Miele", "TCL", "King", "Tineco", "Shark", "Sinbo", "Sunny", "Kiwi", "MOVA", "Einhell", "Aura (İhlas)", "Black+Decker", "Wiami"])].sort(trSort),
  "Su Sebili / Arıtma": [...SU_ARITMA, "Bosch", "Uğur", "Altus", DIJITSU, "Raks", "Skytech", "Profilo", "Franke", "Grohe"].sort(trSort),
  "Bilgisayar / Yazıcı": [...new Set([...BILGISAYAR, ...YAZICI, "Konica Minolta", "Panasonic", "Excalibur", "OKI", "Zebra", "Citizen", "Roland DG", "Fujifilm"])].sort(trSort),
  // YK #149 — İÇERİK kategorisi (teşhis formunda YOK). `KUCUK_EV` dizisi toptan BAĞLANMADI:
  // buraya yalnız kılavuz adresinin küçük ev aletini de karşıladığı PAZ föyünde gösterilen
  // marka girer (30 Eyl 2026: 19 mevcut kayıt + De'Longhi · Krups · WMF + cihaza özel adresle Sinbo).
  // ⛔ Bilerek dışarıda: Dyson · Shark (küçük evleri yalnız saç bakımı; kişisel bakım kapsam
  //    dışı) · Cosori (özeti yalnız air fryer, o cihaz Mikrodalga / Air Fryer'da) ·
  //    Fantom · Rowenta (adres bu cihazı karşılamıyor) · Arzum · Goldmaster · Philips ·
  //    Regal (kapsam gösterilemedi). Haier ve Miele 3 Eki föyüyle eklendi.
  "Küçük Ev Aletleri": [
    "Altus", "Arçelik", "Arzum", "Beko", "Bosch", "Braun", "De'Longhi", "Fakir", "Grundig", "Kenwood",
    "King", "Krups", "Kumtel", "Ninja", "Onvo", "Philips", "Profilo", "Russell Hobbs", "Siemens", "Sinbo",
    "Smeg", "Tefal", "Vestel", "WMF", "Xiaomi", "Kiwi",
    // 3 Eki 2026 (föy 2. parti): kılavuz adresi küçük ev aletlerini karşıladığı doğrulananlar.
    "Electrolux", "Homend", "Jura", "KitchenAid", "Nespresso", "Stilevs",
    // 3 Eki 2026 (föy 3. parti):
    "Haier", "Miele", "Thermomix", "Tchibo",
    // 3 Eki 2026 (Tolga: "beklet olanları da uygula"): Teka (ankastre kahve makinesi).
    "Teka",
  ],
  // haritada olmayanlar → tüm MARKALAR (markalarForCihaz halleder)
};

// Bir cihaz için marka listesi döndürür — yoksa tüm MARKALAR.
export function markalarForCihaz(cihaz) {
  // Alias-duyarlı OLMAK ZORUNDA: birleşen cihaz adı tabloda bulunamazsa fonksiyon TÜM
  // MARKALAR'a düşüyor ve çamaşır makinesi listesinde Canon/Epson gibi yazıcı markaları
  // beliriyordu (21 Ağu 2026'da `hero-tahmin.test.js` yakaladı — sessiz düşüş, hata vermiyor).
  const liste = tabloBul(CIHAZ_MARKALARI, cihaz);
  return liste && liste.length ? liste : MARKALAR;
}
