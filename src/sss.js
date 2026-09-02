// SSS verisi App.jsx'ten AYRI dosyaya alındı (18 Ağu): blok AnaSayfaVitrin'e
// taşınınca App ↔ Vitrin dairesel importu oluşuyordu. Bundler çözüyordu ama
// dairesel bağımlılık kırılgandır (yükleme sırası değişirse boş gelir).
// İçerik BİREBİR aynı — yalnız yeri değişti.

// Ana sayfa "Sık sorulanlar" — görünen metin ve index.html FAQPage JSON-LD BİRE BİR aynı olmalı.
// YAPI (hibrit): ilk 2 = evergreen güven soruları (SABİT). Son 3 = HAFTALIK belirti soruları,
// FE koşusunda content/blog/ taramasından en çok işlenen sorunlara göre güncellenir; her
// güncellemede index.html'deki FAQPage JSON-LD de birebir yenilenmeli. Son güncelleme: 2 Eyl 2026.
export const SSS = [
  // — evergreen (sabit) —
  { s: "Teşhis için ücret ödüyor muyum?", c: "Hayır, tamamen ücretsiz. Cihazını ve belirtiyi yaz; olası arızayı ve tahmini maliyeti anında öğren." },
  { s: "Sonuçtaki fiyat kesin mi?", c: "Tahminidir; parça ve işçilik dahil bir aralık verir. Kesin fiyat, yerinde tespitte netleşir." },
  // — haftalık belirti soruları (2 Eyl 2026 rotasyonu; bir önceki tur 27 Ağu'ydu, 6 gün)
  //   ÇIKAN: bulaşık makinesi temiz yıkamıyor — 14 Ağu'dan beri sette, **19 gün** (58595a5);
  //   setteki en kıdemli soru, klima 13 · buzdolabı 6 gün. Ölçüt yine temsil değil GÖREV SÜRESİ.
  //   GİREN: kombi yanıyor ama petekler ısınmıyor. Gerekçe, bir önceki turun bu satıra
  //   bıraktığı notun aynısı: KOMBİ damarı YK #98 (26 Ağu) ile açıldı ve mevsim penceresi
  //   ŞİMDİ açılıyor — 2 Eylül. Küme 7 yazı; sayıca en büyük küme değil, ama sette hiç
  //   temsil edilmiyor ve kümenin iki yazısı bu hafta güçlendi: `petekler-isinmiyor`
  //   31 Ağu'da yayına girdi, `kombi-basinc-dusuyor` bugün 7 adımlı rehbere çevrildi (PR #151).
  //   ⛔ Kombinin daha önce dönen sorusu "musluktan sıcak su gelmiyor" idi (14 Ağu çıktı) —
  //   aynı küme, AYRI belirti; bu metin sette HİÇ kullanılmadı (`git log -S`, 0 eşleşme).
  //   📚 KAYNAK (YK #88): cevabın her adımı `content/blog/petekler-isinmiyor.md`'den —
  //   hava alma sırası "Hava alma" bölümünden, 1-1,5 bar "Basınç" bölümünden, termostat/vana
  //   "Hiçbir petek ısınmıyorsa" bölümünden. Uydurulmuş tek cümle yok.
  //   📌 Sıradaki rotasyona not: çıkacak sıradaki soru KLİMA (13 gün) — ve mevsim tersine
  //   dönüyor, yani doğal halefi kombi/kış damarının ikinci belirtisi ya da temsilsiz kalan
  //   bulaşık kümesi. Çamaşır makinesi 27 Ağu'da çıktı, en uzun aradaki küme odur. —
  { s: "Klima hiç açılmıyor, tepki vermiyor — önce neye bakmalıyım?", c: "Önce uzaktan kumandanın pilini değiştir; klimanın açılmama şikâyetinin en sık sebebi budur — yeni pil tak, soğutma (Cool) moduna ve düşük sıcaklığa ayarla. Sonra panodaki sigortayı ve şalteri kontrol et; taşınabilir modelde fişin prize tam oturduğuna bak, cihaz hiç enerji almıyor olabilir. Klimayı şalterden 5 dakika kapatıp yeniden açmak da koruma modunu sıfırlar. Pil, sigorta ve priz sağlamken klima hâlâ açılmıyorsa ya da iç ünite çalıştığı hâlde dış ünite hiç devreye girmiyorsa sıra marş kapasitörüne ve elektronik karta gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Buzdolabı ses yapıyor, gürültüsü arttı — önce neye bakmalıyım?", c: "Önce dolabın dengesini ayarla: ön ayakları çevirerek hafif arkaya yatır ve sallanmadığından emin ol — gürültü şikâyetinin en sık sebebi dengesiz duruştur. Sonra teması kes; dolabı duvardan ve yan eşyalardan 5-10 cm uzaklaştır, üstünde duran şişe ve kutuları al, eğik zeminde ayaklarına takoz koy. Mırıltı, fokurtu ve no-frost modellerde hafif fan sesi normaldir; onları kovalamana gerek yok. Denge ve temas düzeltildiği hâlde gürültü sürüyorsa, sert metalik vuruntu geliyorsa ya da tiz bir çığlık duyulup dolap soğutmuyorsa sıra kompresör askı lastiklerine ve no-frost fan motoruna gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Kombi yanıyor ama petekler ısınmıyor — önce neye bakmalıyım?", c: "Önce peteğin neresinin soğuk olduğunu ayır: üstü soğuk altı sıcaksa içinde hava kalmıştır — kombiyi kapat, tesisat soğuyunca peteğin üst köşesindeki hava alma vidasını çeyrek tur gevşet, tıslama kesilip düzgün su gelince kapat; evdeki bütün peteklere en alt kattan başlayıp yukarı doğru uygula. Hava aldıktan sonra basınç düşer, bu beklenen bir sonuçtur: kombi soğukken manometreyi 1-1,5 bar aralığına getir. Hiçbir petek ısınmıyor ama musluktan sıcak su geliyorsa oda termostatının açık ve pilinin dolu olduğunu, kombi altındaki vanaların yaz temizliğinde kapalı unutulmadığını doğrula. Hava, basınç ve vanalar tamken petekler hâlâ soğuksa, peteğin altı soğuk üstü sıcaksa ya da basınç her hafta yeniden düşüyorsa sıra sirkülasyon pompasına ve tesisat kaçağına gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
];
