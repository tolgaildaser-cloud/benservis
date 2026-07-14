// src/constants.js
export const CIHAZLAR = [
  "Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Televizyon / Monitör", "Fırın / Ocak / Aspiratör", "Klima",
  "Kombi / Termosifon", "Mikrodalga / Air Fryer", "Süpürge",
  "Su Sebili / Arıtma", "Bilgisayar / Yazıcı",
];

// Birleştirilen cihazların eski kategori adlarıyla eşleştirilmesi —
// eski servis kayıtları (services-data.json + DB) "Notebook", "Elektrik Süpürgesi"
// gibi adlar tutuyor; birleştirme sonrası eşleşme kopmasın diye genişletilir.
export const KATEGORI_ESLES = {
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
  "Gree", "Haier", "Hisense", "Hitachi", "LG", "Midea", "Mitsubishi", "Panasonic",
  "Samsung", "Toshiba", "Vestel",
];
const KOMBI = [
  "Airfel", "Alarko", "Arçelik", "Baxi", "Baymak", "Beko", "Bosch", "Buderus",
  "Demirdöküm", "ECA", "Ferroli", "Immergas", "Protherm", "Vaillant", "Viessmann",
  "Warmhaus",
];
const KUCUK_EV = [
  "Arçelik", "Arzum", "Beko", "Bosch", "Braun", "Cosori", "Fakir", "Goldmaster",
  "Karaca", "Kenwood", "King", "Korkmaz", "Kumtel", "Luxell", "Ninja", "Philips",
  "Rowenta", "Russell Hobbs", "Sinbo", "Tefal", "Vestel", "Xiaomi",
];
const SUPURGE = [
  "Arçelik", "Arzum", "Beko", "Bosch", "Dreame", "Dyson", "Ecovacs", "Electrolux",
  "Eufy", "Fakir", "Fantom", "Karcher", "LG", "Philips", "Roborock", "Rowenta",
  "Samsung", "Tefal", "Vestel", "Xiaomi", "iRobot",
];
const TELEVIZYON = [
  "Arçelik", "Awox", "Axen", "Beko", "Finlux", "Grundig", "Hisense", "LG", "Onvo",
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
  "Apple", "Asus", "Casper", "General Mobile", "Honor", "Huawei", "Nokia",
  "OnePlus", "Oppo", "Realme", "Reeder", "Samsung", "TCL", "Tecno", "Vivo", "Xiaomi",
];
const ANKASTRE_EK = ["Franke", "Silverline", "Simfer", "Kumtel", "ECA", "CATA", "Elica", "Teka", "Luxell"];
const YAZICI = ["Brother", "Canon", "Epson", "Lexmark", "Pantum", "Ricoh", "Xerox"];

// Garanti yönlendirmesi ve teşhis kalitesi için master liste — tüm grupların birleşimi
// (haritada olmayan cihaz veya "Diğer" → bu liste). Süperset garantisi için üretilir.
export const MARKALAR = [...new Set([
  ...BEYAZ_ESYA, ...KLIMA, ...KOMBI, ...KUCUK_EV, ...SUPURGE, ...TELEVIZYON, ...MONITOR,
  ...SU_ARITMA, ...BILGISAYAR, ...TELEFON, ...ANKASTRE_EK, ...YAZICI,
  "Balay", "Comfee", "Singer",
])].sort(trSort);

export const CIHAZ_MARKALARI = {
  "Buzdolabı": BEYAZ_ESYA,
  "Çamaşır Makinesi": BEYAZ_ESYA,
  "Bulaşık Makinesi": BEYAZ_ESYA,
  "Fırın / Ocak / Aspiratör": [...new Set([...BEYAZ_ESYA, ...ANKASTRE_EK])].sort(trSort),
  "Mikrodalga / Air Fryer": [...new Set([...KUCUK_EV, ...BEYAZ_ESYA, "Goldmaster", "Kumtel"])].sort(trSort),
  "Klima": KLIMA,
  "Kombi / Termosifon": KOMBI,
  "Televizyon / Monitör": [...new Set([...TELEVIZYON, ...MONITOR])].sort(trSort),
  "Süpürge": [...new Set([...SUPURGE, "Roborock", "iRobot"])].sort(trSort),
  "Su Sebili / Arıtma": SU_ARITMA,
  "Bilgisayar / Yazıcı": [...new Set([...BILGISAYAR, ...YAZICI])].sort(trSort),
  // haritada olmayanlar → tüm MARKALAR (markalarForCihaz halleder)
};

// Bir cihaz için marka listesi döndürür — yoksa tüm MARKALAR.
export function markalarForCihaz(cihaz) {
  const liste = CIHAZ_MARKALARI[cihaz];
  return liste && liste.length ? liste : MARKALAR;
}
