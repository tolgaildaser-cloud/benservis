// SSS verisi App.jsx'ten AYRI dosyaya alındı (18 Ağu): blok AnaSayfaVitrin'e
// taşınınca App ↔ Vitrin dairesel importu oluşuyordu. Bundler çözüyordu ama
// dairesel bağımlılık kırılgandır (yükleme sırası değişirse boş gelir).
// İçerik BİREBİR aynı — yalnız yeri değişti.

// Ana sayfa "Sık sorulanlar" — görünen metin ve index.html FAQPage JSON-LD BİRE BİR aynı olmalı.
// YAPI (hibrit): ilk 2 = evergreen güven soruları (SABİT). Son 3 = HAFTALIK belirti soruları,
// FE koşusunda content/blog/ taramasından en çok işlenen sorunlara göre güncellenir; her
// güncellemede index.html'deki FAQPage JSON-LD de birebir yenilenmeli. Son güncelleme: 20 Ağu 2026.
export const SSS = [
  // — evergreen (sabit) —
  { s: "Teşhis için ücret ödüyor muyum?", c: "Hayır, tamamen ücretsiz. Cihazını ve belirtiyi yaz; olası arızayı ve tahmini maliyeti anında öğren." },
  { s: "Sonuçtaki fiyat kesin mi?", c: "Tahminidir; parça ve işçilik dahil bir aralık verir. Kesin fiyat, yerinde tespitte netleşir." },
  // — haftalık belirti soruları (blog verisinden; 20 Ağu taraması, 93 yazının frontmatter
  //   `category` sayımı — slugify normalizasyonu sonrası cihaz kümeleri: çamaşır 16 ·
  //   bulaşık 11 · buzdolabı 10 · kombi 9 · klima 8 · fırın-ocak(+aspiratör) 5 · su sebili 3.
  //   (Genel 16 · sürdürülebilirlik 8 · kurumsal 1 cihaz kümesi değil, rotasyona girmez.)
  //   ÇIKAN: buzdolabı çalışıyor ama soğutmuyor — 4 Ağu'dan beri sette, **16 gün**; git
  //   geçmişinden ölçüldü (e19e18b) ve kombinin 14 Ağu'da çıkmasına yol açan 10 günlük
  //   rekoru açık ara geçti. Küme hâlâ büyük (10 yazı), sorun temsil değil görev süresi.
  //   GİREN: klima hiç açılmıyor — klima, temsil edilmeyen EN BÜYÜK cihaz kümesi (8 yazı)
  //   ve mevsim penceresi hâlâ açık. Kombi (9) daha büyük ama ⛔ kapalı: Tolga 13 Ağu,
  //   "kış/kombi ekimden önce yazma artık" — 14 Ağu'da kombiyi çıkaran gerekçe yürürlükte.
  //   Soru metni bu setde HİÇ kullanılmadı (git -S ile doğrulandı, 0 eşleşme); klimanın
  //   daha önce dönen iki sorusu soğutmuyor (27 Tem çıktı) ve su damlatıyor (7 Ağu çıktı).
  //   Kaynak yazı: `klima-calismiyor`. —
  { s: "Klima hiç açılmıyor, tepki vermiyor — önce neye bakmalıyım?", c: "Önce uzaktan kumandanın pilini değiştir; klimanın açılmama şikâyetinin en sık sebebi budur — yeni pil tak, soğutma (Cool) moduna ve düşük sıcaklığa ayarla. Sonra panodaki sigortayı ve şalteri kontrol et; taşınabilir modelde fişin prize tam oturduğuna bak, cihaz hiç enerji almıyor olabilir. Klimayı şalterden 5 dakika kapatıp yeniden açmak da koruma modunu sıfırlar. Pil, sigorta ve priz sağlamken klima hâlâ açılmıyorsa ya da iç ünite çalıştığı hâlde dış ünite hiç devreye girmiyorsa sıra marş kapasitörüne ve elektronik karta gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Bulaşık makinesi temiz yıkamıyor, tabaklar kirli çıkıyor — önce neye bakmalıyım?", c: "Önce alt ve üst püskürtme kollarını çıkar: deliklerini kürdanla aç, takınca elinle çevirip serbestçe döndüklerinden emin ol — su bulaşığa ulaşamıyorsa en sık sebep budur. Sonra tabandaki filtreyi çıkarıp yıka, tuz ve parlatıcı haznelerini doldur; tuz bitince kireç, parlatıcı bitince leke bırakır. Bulaşıkları da üst üste bindirmeden diz, derin kapları ters çevir. Kollar ve filtre temiz, tuz ile parlatıcı tamken hâlâ kirli çıkıyorsa ya da su hiç ısınmıyorsa sıra rezistansa gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Çamaşır makinesi su atmıyor, çamaşırlar ıslak çıkıyor — önce neye bakmalıyım?", c: "Önce makinenin alt kapağındaki tahliye filtresini çıkarıp temizle; su atmama şikâyetinin en sık sebebi budur. Altına havlu ve geniş bir kap koy, çünkü içeride kalan su filtreyi açar açmaz gelir. Sonra arkadaki tahliye hortumunu kontrol et: bükülmüş, ezilmiş ya da giderin içinde çok derine itilmiş olabilir. Filtre temiz ve hortum açıkken makine hâlâ suyu boşaltmıyor ya da santrifüje hiç geçmiyorsa sıra tahliye pompasına gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
];
