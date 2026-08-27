// SSS verisi App.jsx'ten AYRI dosyaya alındı (18 Ağu): blok AnaSayfaVitrin'e
// taşınınca App ↔ Vitrin dairesel importu oluşuyordu. Bundler çözüyordu ama
// dairesel bağımlılık kırılgandır (yükleme sırası değişirse boş gelir).
// İçerik BİREBİR aynı — yalnız yeri değişti.

// Ana sayfa "Sık sorulanlar" — görünen metin ve index.html FAQPage JSON-LD BİRE BİR aynı olmalı.
// YAPI (hibrit): ilk 2 = evergreen güven soruları (SABİT). Son 3 = HAFTALIK belirti soruları,
// FE koşusunda content/blog/ taramasından en çok işlenen sorunlara göre güncellenir; her
// güncellemede index.html'deki FAQPage JSON-LD de birebir yenilenmeli. Son güncelleme: 27 Ağu 2026.
export const SSS = [
  // — evergreen (sabit) —
  { s: "Teşhis için ücret ödüyor muyum?", c: "Hayır, tamamen ücretsiz. Cihazını ve belirtiyi yaz; olası arızayı ve tahmini maliyeti anında öğren." },
  { s: "Sonuçtaki fiyat kesin mi?", c: "Tahminidir; parça ve işçilik dahil bir aralık verir. Kesin fiyat, yerinde tespitte netleşir." },
  // — haftalık belirti soruları (blog verisinden; 27 Ağu taraması, 216 yazının frontmatter
  //   `category` sayımı — büyük/küçük harf normalizasyonu sonrası cihaz kümeleri: çamaşır 44 ·
  //   bulaşık 31 · buzdolabı 29 · klima 17 · fırın-ocak(+aspiratör) 13 · bilgisayar-yazıcı 11 ·
  //   televizyon 10 · kombi 10 · süpürge 7 · mikrodalga 5 · su sebili 3.
  //   (Genel 27 · sürdürülebilirlik 8 · kurumsal 1 cihaz kümesi değil, rotasyona girmez.)
  //   ÇIKAN: çamaşır makinesi su atmıyor — 7 Ağu'dan beri sette, **20 gün**; git geçmişinden
  //   ölçüldü (ac71ef9) ve buzdolabının 20 Ağu'da çıkmasına yol açan 16 günlük rekoru geçti.
  //   Küme külliyatın en büyüğü (44 yazı), sorun temsil değil görev süresi.
  //   GİREN: buzdolabı ses yapıyor — buzdolabı, temsil edilmeyen EN BÜYÜK cihaz kümesi
  //   (29 yazı; çamaşır bu turda çıkarıldığı için hariç — 20 Ağu'daki seçim de aynı şekilde
  //   o turda çıkan kümeyi hariç tutmuştu). Soru metni bu sette HİÇ kullanılmadı (git -S ile
  //   doğrulandı, 0 eşleşme); buzdolabının daha önce dönen sorusu "çalışıyor ama soğutmuyor"
  //   idi (20 Ağu çıktı) — aynı küme, AYRI belirti. Kaynak yazı: `buzdolabi-ses-yapiyor`
  //   (cevaptaki her adım o yazının "servisi aramadan önce kendin kontrol et" listesinden).
  //   📌 Sıradaki rotasyona not: KOMBİ damarı YK #98 (26 Ağu) ile açıldı, 14 Ağu'da onu
  //   çıkaran yasak artık yürürlükte değil — küme 10 yazı, mevsim penceresi açılıyor. —
  { s: "Klima hiç açılmıyor, tepki vermiyor — önce neye bakmalıyım?", c: "Önce uzaktan kumandanın pilini değiştir; klimanın açılmama şikâyetinin en sık sebebi budur — yeni pil tak, soğutma (Cool) moduna ve düşük sıcaklığa ayarla. Sonra panodaki sigortayı ve şalteri kontrol et; taşınabilir modelde fişin prize tam oturduğuna bak, cihaz hiç enerji almıyor olabilir. Klimayı şalterden 5 dakika kapatıp yeniden açmak da koruma modunu sıfırlar. Pil, sigorta ve priz sağlamken klima hâlâ açılmıyorsa ya da iç ünite çalıştığı hâlde dış ünite hiç devreye girmiyorsa sıra marş kapasitörüne ve elektronik karta gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Bulaşık makinesi temiz yıkamıyor, tabaklar kirli çıkıyor — önce neye bakmalıyım?", c: "Önce alt ve üst püskürtme kollarını çıkar: deliklerini kürdanla aç, takınca elinle çevirip serbestçe döndüklerinden emin ol — su bulaşığa ulaşamıyorsa en sık sebep budur. Sonra tabandaki filtreyi çıkarıp yıka, tuz ve parlatıcı haznelerini doldur; tuz bitince kireç, parlatıcı bitince leke bırakır. Bulaşıkları da üst üste bindirmeden diz, derin kapları ters çevir. Kollar ve filtre temiz, tuz ile parlatıcı tamken hâlâ kirli çıkıyorsa ya da su hiç ısınmıyorsa sıra rezistansa gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Buzdolabı ses yapıyor, gürültüsü arttı — önce neye bakmalıyım?", c: "Önce dolabın dengesini ayarla: ön ayakları çevirerek hafif arkaya yatır ve sallanmadığından emin ol — gürültü şikâyetinin en sık sebebi dengesiz duruştur. Sonra teması kes; dolabı duvardan ve yan eşyalardan 5-10 cm uzaklaştır, üstünde duran şişe ve kutuları al, eğik zeminde ayaklarına takoz koy. Mırıltı, fokurtu ve no-frost modellerde hafif fan sesi normaldir; onları kovalamana gerek yok. Denge ve temas düzeltildiği hâlde gürültü sürüyorsa, sert metalik vuruntu geliyorsa ya da tiz bir çığlık duyulup dolap soğutmuyorsa sıra kompresör askı lastiklerine ve no-frost fan motoruna gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
];
