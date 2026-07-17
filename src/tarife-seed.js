// src/tarife-seed.js — ÜRETİLDİ (scripts/tarife-snapshot.mjs, Supabase Onaylı tarife).
// Elle düzenleme yerine /tarife'de onayla + snapshot'ı yeniden çalıştır.
// Şekil: cihaz → [[arıza, parça_min, parça_max, işçilik], …].
export const SEED = {
  "Buzdolabı": [["Termostat/sensör",250,1200,600],["Gaz kaçağı/dolum",900,2000,1400],["Kompresör değişimi",2500,5500,2400],["Fan motoru (no-frost)",400,1200,600]],
  "Çamaşır Makinesi": [["Su giriş valfi",200,1500,600],["Tahliye pompası",200,1200,600],["Rulman/keçe",600,3500,2000],["Elektronik kart",1000,5000,1300],["Kapı kilidi",250,900,500]],
  "Bulaşık Makinesi": [["Tahliye pompası",300,1100,600],["Su giriş valfi",230,1100,600],["Rezistans/ısıtıcı",350,1400,800],["Sirkülasyon (yıkama) motoru",700,2500,900]],
  "Fırın / Ocak / Aspiratör": [["Rezistans",300,800,500],["Termostat",250,500,450],["Fan motoru",350,900,500],["Aspiratör motoru",450,2200,600],["Aspiratör anahtar/kart/lamba",200,700,400]],
  "Klima": [["Gaz dolumu",900,2200,700],["Kapasitör",150,400,350],["Kompresör",2500,6000,2000]],
  "Kombi / Termosifon": [["3 yollu vana",700,1400,800],["Sirkülasyon pompası",1750,4600,900],["Eşanjör",2000,6000,1200],["Rezistans (termosifon)",400,1100,600],["Termostat",300,900,400]],
  "Televizyon / Monitör": [["Backlight LED bar",200,1500,700],["Besleme kartı",400,1500,500],["Anakart",500,3000,700],["Monitör paneli",1000,6000,900],["TV paneli",3000,20000,1500]],
  "Mikrodalga / Air Fryer": [["Magnetron (mikrodalga)",700,1500,600],["Rezistans (air fryer)",250,700,400],["Fan/termostat/kart",300,900,400]],
  "Süpürge": [["Motor",600,2000,500],["Batarya (şarjlı)",500,3000,400],["Fırça/sensör/anakart",200,2500,500]],
  "Su Sebili / Arıtma": [["Filtre seti",350,1200,300],["Pompa/membran",600,1800,600]],
  "Bilgisayar / Yazıcı": [["Güç kaynağı / şarj soketi",50,2700,900],["Ekran kartı/RAM/disk",1000,6000,400],["Anakart",1500,5000,1300],["Ekran/menteşe (laptop)",1200,6000,850],["Yazıcı kafa/kartuş",100,4000,500],["Kağıt besleme/merdane",100,500,500]],
};
