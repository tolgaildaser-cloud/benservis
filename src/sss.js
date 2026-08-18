// SSS verisi App.jsx'ten AYRI dosyaya alındı (18 Ağu): blok AnaSayfaVitrin'e
// taşınınca App ↔ Vitrin dairesel importu oluşuyordu. Bundler çözüyordu ama
// dairesel bağımlılık kırılgandır (yükleme sırası değişirse boş gelir).
// İçerik BİREBİR aynı — yalnız yeri değişti.

// Ana sayfa "Sık sorulanlar" — görünen metin ve index.html FAQPage JSON-LD BİRE BİR aynı olmalı.
// YAPI (hibrit): ilk 2 = evergreen güven soruları (SABİT). Son 3 = HAFTALIK belirti soruları,
// FE koşusunda content/blog/ taramasından en çok işlenen sorunlara göre güncellenir; her
// güncellemede index.html'deki FAQPage JSON-LD de birebir yenilenmeli. Son güncelleme: 14 Ağu 2026.
export const SSS = [
  // — evergreen (sabit) —
  { s: "Teşhis için ücret ödüyor muyum?", c: "Hayır, tamamen ücretsiz. Cihazını ve belirtiyi yaz; olası arızayı ve tahmini maliyeti anında öğren." },
  { s: "Sonuçtaki fiyat kesin mi?", c: "Tahminidir; parça ve işçilik dahil bir aralık verir. Kesin fiyat, yerinde tespitte netleşir." },
  // — haftalık belirti soruları (blog verisinden; 14 Ağu taraması, frontmatter `category`
  //   sayımı: çamaşır 13 · bulaşık 11 · kombi 9 · klima 8 · buzdolabı 8 · fırın/ocak 3 —
  //   7 Ağu'ya göre DEĞİŞMEDİ; 13 Ağu'nun iki yeni taslağı henüz repoya girmedi).
  //   ÇIKAN: kombi sıcak su gelmiyor. İKİ GEREKÇE ÜST ÜSTE BİNDİ:
  //     ① 4 Ağu'dan beri sette — 10 gün, rotasyon geçmişindeki en uzun görev süresi.
  //     ② Tolga, 13 Ağu: "kış/kombi ekimden önce yazma artık" — SSS metni yeni üretim
  //        değil ama ana sayfanın en görünür kombi yüzeyi; talimatın yönüyle aynı yere bakar.
  //   GİREN: bulaşık makinesi temiz yıkamıyor — külliyatın İKİNCİ büyük kümesi (11 yazı) ve
  //   rotasyon başladığından beri hiç temsil edilmedi; kaynak yazı `bulasik-makinesi-temiz-yikamiyor`. —
  { s: "Buzdolabı çalışıyor ama soğutmuyor, önce neye bakmalıyım?", c: "Önce sıcaklık ayarına bak: dolap yaklaşık 4, buzluk yaklaşık eksi 18 derece olmalı — ayar yanlışlıkla değişmiş olabilir. Sonra kapı contasını dene; kapağa bir kağıt kıstırıp çek, direnç hissetmiyorsan conta sızdırıyordur. Arkadaki ve alttaki tozu da süpür, dolabı duvardan 5-10 cm uzak tut — tozlu kondenser ısıyı dışarı atamaz. Ayar doğru, conta sağlam ve arka temizken hâlâ soğutmuyorsa ya da buzluk soğuk olduğu hâlde dolap soğumuyorsa belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Bulaşık makinesi temiz yıkamıyor, tabaklar kirli çıkıyor — önce neye bakmalıyım?", c: "Önce alt ve üst püskürtme kollarını çıkar: deliklerini kürdanla aç, takınca elinle çevirip serbestçe döndüklerinden emin ol — su bulaşığa ulaşamıyorsa en sık sebep budur. Sonra tabandaki filtreyi çıkarıp yıka, tuz ve parlatıcı haznelerini doldur; tuz bitince kireç, parlatıcı bitince leke bırakır. Bulaşıkları da üst üste bindirmeden diz, derin kapları ters çevir. Kollar ve filtre temiz, tuz ile parlatıcı tamken hâlâ kirli çıkıyorsa ya da su hiç ısınmıyorsa sıra rezistansa gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Çamaşır makinesi su atmıyor, çamaşırlar ıslak çıkıyor — önce neye bakmalıyım?", c: "Önce makinenin alt kapağındaki tahliye filtresini çıkarıp temizle; su atmama şikâyetinin en sık sebebi budur. Altına havlu ve geniş bir kap koy, çünkü içeride kalan su filtreyi açar açmaz gelir. Sonra arkadaki tahliye hortumunu kontrol et: bükülmüş, ezilmiş ya da giderin içinde çok derine itilmiş olabilir. Filtre temiz ve hortum açıkken makine hâlâ suyu boşaltmıyor ya da santrifüje hiç geçmiyorsa sıra tahliye pompasına gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
];
