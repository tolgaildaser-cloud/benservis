// src/tarife-seed.js — ÜRETİLDİ (scripts/tarife-snapshot.mjs, Supabase Onaylı tarife).
// Elle düzenleme yerine /tarife'de onayla + snapshot'ı yeniden çalıştır.
// Şekil: cihaz → [[arıza, parça_min, parça_max, işçilik], …].
export const SEED = {
  "Buzdolabı": [["Termostat/sensör",250,1200,600],["Gaz kaçağı/dolum",900,2000,1400],["Kompresör değişimi",2500,5500,2400],["Fan motoru (no-frost)",400,1200,600]],
  "Çamaşır Makinesi": [["Su giriş valfi",200,1500,600],["Tahliye pompası",200,1200,600],["Kapı kilidi",250,900,500],["Rulman/keçe değişimi (vidalı)",300,900,2000],["Kazan komple değişimi (presli)",2500,4500,2200],["Elektronik kart tamiri",100,600,1200],["Elektronik kart değişimi",1200,4000,1300]],
  "Bulaşık Makinesi": [["Tahliye pompası",300,1100,600],["Su giriş valfi",230,1100,600],["Rezistans/ısıtıcı",350,1400,800],["Sirkülasyon (yıkama) motoru",700,2500,900]],
  "Fırın / Ocak / Aspiratör": [["Rezistans",300,800,500],["Termostat",250,500,450],["Fan motoru",350,900,500],["Aspiratör motoru (fan)",1000,5000,600],["Aspiratör lamba / anahtar / kart",200,700,400]],
  "Klima": [["Gaz dolumu",900,2200,700],["Elektronik kart / kapasitör",150,2500,350],["Kompresör",3000,8000,2000]],
  "Kombi / Termosifon": [["3 yollu vana",700,1400,800],["Sirkülasyon pompası",1750,4600,900],["Eşanjör",2000,6000,1200],["Rezistans (termosifon)",400,1100,600],["Termostat",300,900,400]],
  "Televizyon / Monitör": [["Backlight LED bar",200,1500,700],["Besleme kartı",400,1500,500],["Monitör paneli",1500,8000,900],["TV paneli",3000,20000,1500],["Anakart tamiri",100,800,700],["Anakart değişimi",1500,4500,500]],
  "Mikrodalga / Air Fryer": [["Magnetron (mikrodalga)",700,1500,600],["Izgara / ısıtıcı rezistansı (grill mikrodalga · air fryer)",250,700,400],["Fan/termostat/kart",300,900,400]],
  "Süpürge": [["Motor",600,2000,500],["Batarya (şarjlı)",500,3000,400],["Fırça/sensör/anakart",200,2500,500]],
  "Su Sebili / Arıtma": [["Pompa/membran",600,1800,600],["Filtre değişimi (tekli)",300,750,250],["Filtre seti değişimi (komple)",2100,3500,300]],
  "Bilgisayar / Yazıcı": [["Güç kaynağı / şarj soketi",50,2700,900],["Ekran kartı (GPU) / RAM / disk",1000,6000,400],["Kağıt besleme/merdane",100,500,500],["Yazıcı kafası temizliği",50,250,450],["Yazıcı kafası / kartuş değişimi",1600,4500,750],["Anakart tamiri",150,800,1200],["Anakart değişimi",2000,5000,1300],["Ekran paneli değişimi (laptop)",800,2800,800],["Menteşe tamiri (laptop)",100,700,600]],
};
