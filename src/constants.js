// src/constants.js
export const CIHAZLAR = [
  "Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Fırın / Ocak", "Klima",
  "Kombi", "Televizyon", "Termosifon / Şofben", "Mikrodalga / Air Fryer", "Süpürge",
  "Su Sebili / Arıtma", "Bilgisayar", "Yazıcı", "Diğer",
];

// Birleştirilen cihazların eski kategori adlarıyla eşleştirilmesi —
// eski servis kayıtları (services-data.json + DB) "Notebook", "Elektrik Süpürgesi"
// gibi adlar tutuyor; birleştirme sonrası eşleşme kopmasın diye genişletilir.
export const KATEGORI_ESLES = {
  "Süpürge": ["Süpürge", "Elektrik Süpürgesi", "Robot Süpürge"],
  "Bilgisayar": ["Bilgisayar", "Masaüstü Bilgisayar", "Notebook"],
  "Mikrodalga / Air Fryer": ["Mikrodalga / Air Fryer", "Mikrodalga", "Air Fryer"],
};

// Bir cihaz için eşleşecek tüm kategori adları (birleştirme dahil).
export function eslesenKategoriler(cihaz) {
  return KATEGORI_ESLES[cihaz] || [cihaz];
}

// Garanti yönlendirmesi ve teşhis kalitesi için — yetkili servis eşleştirmesinde kullanılır
export const MARKALAR = [
  "AEG", "Airfel", "Alarko", "Apple", "Arçelik", "Arzum", "Asus", "Balay",
  "Bauknecht", "Baymak", "Beko", "Bosch", "Braun", "Brother", "Canon",
  "Candy", "Comfee", "Daikin", "Daewoo", "Demirdöküm", "Dreame", "Dyson",
  "ECA", "Electrolux", "Epson", "Fakir", "Fantom", "Ferroli", "Franke",
  "Gree", "Grundig", "Haier", "Hisense", "Hitachi", "Honor", "Hoover",
  "Hotpoint", "HP", "Huawei", "Indesit", "Karaca", "Korkmaz", "Kumtel",
  "Lenovo", "LG", "MediaTek", "Midea", "Miele", "Mitsubishi", "MSI",
  "Nokia", "OnePlus", "Oppo", "Panasonic", "Philips", "Profilo", "Realme",
  "Regal", "Roborock", "Rowenta", "Samsung", "Sharp", "Siemens",
  "Silverline", "Simfer", "Sinbo", "Singer", "Sony", "TCL", "Tefal",
  "Thomson", "Toshiba", "Vaillant", "Vestel", "Vivo", "Whirlpool",
  "Xiaomi", "Zanussi",
];

// Cihaza göre ilgili markalar — kullanıcı cihaz seçince yalnız o cihazda
// satılan markalar listelenir. Haritada olmayan cihaz (veya "Diğer") → tüm MARKALAR.
const BEYAZ_ESYA = [
  "AEG", "Altus", "Arçelik", "Bauknecht", "Beko", "Bosch", "Candy", "Daewoo",
  "Electrolux", "Grundig", "Haier", "Hisense", "Hoover", "Hotpoint", "Indesit",
  "LG", "Midea", "Miele", "Profilo", "Regal", "Samsung", "Siemens", "Vestel",
  "Whirlpool", "Zanussi",
];
const ISITMA_SOGUTMA = [
  "Airfel", "Alarko", "Arçelik", "Baymak", "Beko", "Bosch", "Buderus", "Daikin",
  "Demirdöküm", "ECA", "Ferroli", "Gree", "Haier", "Hisense", "Hitachi", "LG",
  "Midea", "Mitsubishi", "Panasonic", "Samsung", "Toshiba", "Vaillant", "Vestel",
];
const KUCUK_EV = [
  "Arçelik", "Arzum", "Beko", "Bosch", "Braun", "Fakir", "Goldmaster", "Karaca",
  "King", "Korkmaz", "Kumtel", "Philips", "Rowenta", "Sinbo", "Tefal", "Vestel",
];
const SUPURGE = [
  "Arçelik", "Arzum", "Beko", "Bosch", "Dreame", "Dyson", "Electrolux", "Fakir",
  "Fantom", "Karcher", "LG", "Philips", "Roborock", "Rowenta", "Samsung", "Tefal",
  "Vestel", "Xiaomi", "iRobot",
];
const TELEFON = [
  "Apple", "Asus", "Casper", "General Mobile", "Honor", "Huawei", "Nokia",
  "OnePlus", "Oppo", "Realme", "Reeder", "Samsung", "TCL", "Tecno", "Vivo", "Xiaomi",
];
const BILGISAYAR = [
  "Acer", "Apple", "Asus", "Casper", "Dell", "Gigabyte", "HP", "Huawei", "Lenovo",
  "LG", "Microsoft", "Monster", "MSI", "Samsung", "Sony", "Toshiba",
];

export const CIHAZ_MARKALARI = {
  "Buzdolabı": BEYAZ_ESYA,
  "Çamaşır Makinesi": BEYAZ_ESYA,
  "Bulaşık Makinesi": BEYAZ_ESYA,
  "Fırın / Ocak": [...BEYAZ_ESYA, "Franke", "Silverline", "Simfer", "Kumtel", "ECA"].sort((a, b) => a.localeCompare(b, "tr")),
  "Mikrodalga / Air Fryer": [...new Set([...KUCUK_EV, ...BEYAZ_ESYA, "Goldmaster", "Kumtel"])].sort((a, b) => a.localeCompare(b, "tr")),
  "Klima": ISITMA_SOGUTMA,
  "Kombi": ISITMA_SOGUTMA,
  "Termosifon / Şofben": ISITMA_SOGUTMA,
  "Televizyon": ["Arçelik", "Awox", "Beko", "Grundig", "Hisense", "LG", "Panasonic", "Philips", "Profilo", "Regal", "Samsung", "Sharp", "Sony", "TCL", "Thomson", "Toshiba", "Vestel"],
  "Süpürge": [...new Set([...SUPURGE, "Roborock", "iRobot"])].sort((a, b) => a.localeCompare(b, "tr")),
  "Su Sebili / Arıtma": ["Arçelik", "Aqua", "Beko", "Coway", "Homefil", "Samsung", "Vestel", "Waterlife"],
  "Bilgisayar": BILGISAYAR,
  "Yazıcı": ["Brother", "Canon", "Epson", "HP", "Lexmark", "Pantum", "Ricoh", "Samsung", "Xerox"],
  // "Diğer" ve haritada olmayanlar → tüm MARKALAR (markalarForCihaz halleder)
};

// Bir cihaz için marka listesi döndürür — yoksa tüm MARKALAR.
export function markalarForCihaz(cihaz) {
  const liste = CIHAZ_MARKALARI[cihaz];
  return liste && liste.length ? liste : MARKALAR;
}
