// SSS verisi App.jsx'ten AYRI dosyaya alındı (18 Ağu): blok AnaSayfaVitrin'e
// taşınınca App ↔ Vitrin dairesel importu oluşuyordu. Bundler çözüyordu ama
// dairesel bağımlılık kırılgandır (yükleme sırası değişirse boş gelir).
// İçerik BİREBİR aynı — yalnız yeri değişti.

// Ana sayfa "Sık sorulanlar" — görünen metin ve index.html FAQPage JSON-LD BİRE BİR aynı olmalı.
// YAPI (hibrit): ilk 2 = evergreen güven soruları (SABİT). Son 3 = HAFTALIK belirti soruları,
// FE koşusunda content/blog/ taramasından en çok işlenen sorunlara göre güncellenir; her
// güncellemede index.html'deki FAQPage JSON-LD de birebir yenilenmeli. Son güncelleme: 9 Eyl 2026.
export const SSS = [
  // — evergreen (sabit) —
  { s: "Teşhis için ücret ödüyor muyum?", c: "Hayır, tamamen ücretsiz. Cihazını ve belirtiyi yaz; olası arızayı ve tahmini maliyeti anında öğren." },
  { s: "Sonuçtaki fiyat kesin mi?", c: "Tahminidir; parça ve işçilik dahil bir aralık verir. Kesin fiyat, yerinde tespitte netleşir." },
  // — haftalık belirti soruları (9 Eyl 2026 rotasyonu; bir önceki tur 2 Eyl'di, 7 gün)
  //   ÇIKAN: klima hiç açılmıyor — 20 Ağu'dan beri sette, **20 gün** (bfca054); setteki en
  //   kıdemli soru, buzdolabı 13 · kombi 7 gün. Ölçüt yine temsil değil GÖREV SÜRESİ, ve
  //   bir önceki turun bu satıra bıraktığı not zaten klimayı işaret ediyordu (mevsim de
  //   tersine döndü: klima sorusu Eylül'de değer kaybediyor).
  //   GİREN: çamaşır makinesi çalışmıyor, start almıyor. Gerekçe ölçüldü, seçilmedi:
  //   `category:` taraması → **çamaşır makinesi 45 yazı ile külliyatın EN BÜYÜK kümesi**
  //   (bulaşık 32 · buzdolabı 30 · klima 17 · kombi 11) ve **27 Ağu'dan beri sette temsil
  //   edilmiyor** — yani hem en kalabalık hem en uzun aradaki küme aynı küme. Kümenin giriş
  //   belirtisi seçildi: "çalışmıyor/start almıyor" damarın en geniş ağzı.
  //   ⛔ Kümenin daha önce dönen dört sorusu — kokuyor · santrifüj ses/titreşim · su almıyor/
  //   atmıyor · su atmıyor+ıslak çıkıyor — AYRI belirtiler; bu metin sette HİÇ kullanılmadı
  //   (`git log --all -S`, 0 eşleşme).
  //   📚 KAYNAK (YK #88): cevabın her adımı `content/blog/camasir-makinesi-calismiyor.md`'den
  //   ve sayfa bu koşuda **HTTP 200** ile indirilip (56.723 bayt) kullanılan **13 ifadenin
  //   13'ü de canlı gövdede** doğrulandı — priz testi "1) Elektrik" bölümünden, klik sesi
  //   "2) Kapak" bölümünden, çocuk kilidi "3)" bölümünden, erteleme "4)" bölümünden, fiş
  //   çek-tak sınırı "5) Elektronik kart" bölümünden. Uydurulmuş tek cümle yok.
  //   📌 Sıradaki rotasyona not: çıkacak sıradaki soru BUZDOLABI (27 Ağu'dan beri) — doğal
  //   halefi ya bulaşık kümesi (32 yazı, 2 Eyl'de çıktı) ya da kış damarının ikinci belirtisi.
  //   Klima kümesi Eylül'den itibaren en uzun aradaki küme olmaya başlar, ama mevsimi geçti. —
  { s: "Çamaşır makinesi çalışmıyor, start almıyor — önce neye bakmalıyım?", c: "Önce elektriğin makineye ulaşıp ulaşmadığını netleştir: aynı prize telefon şarj aleti gibi başka bir cihaz tak; çalışmıyorsa sorun makinede değil prizdedir. Sigorta kutusunda makinenin bağlı olduğu hat atmışsa kolu kaldırıp bir kez dene, fişin duvar prizine tam oturduğuna bak — makine uzatma kablosuna ya da çoklu prize değil, doğrudan duvar prizine bağlı olmalı. Işıklar yanıyor ama start almıyorsa sıra kapağa gelir: kapağı aç, araya kaçmış bir çamaşır ucu var mı bak, duyulur bir klik sesi gelene kadar kapat; makine kapağın kilitlendiğini görmeden hiçbir programı başlatmaz. Panelde kilit ya da çocuk simgesi yanıp sönüyorsa tuşlar kilitlidir; genelde iki tuşa aynı anda üç-beş saniye basılı tutulur, kesin yöntem kullanım kılavuzunda yazar. Ekranda geri sayım varsa zaman erteleme devrededir, programı iptal edip baştan seç. Priz, kapak, kilit ve ayarlar tamken makine hâlâ start almıyorsa, ancak her seferinde fiş çek-tak ile çalışıyorsa ya da sigorta tekrar tekrar atıyorsa sıra elektronik karta gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Buzdolabı ses yapıyor, gürültüsü arttı — önce neye bakmalıyım?", c: "Önce dolabın dengesini ayarla: ön ayakları çevirerek hafif arkaya yatır ve sallanmadığından emin ol — gürültü şikâyetinin en sık sebebi dengesiz duruştur. Sonra teması kes; dolabı duvardan ve yan eşyalardan 5-10 cm uzaklaştır, üstünde duran şişe ve kutuları al, eğik zeminde ayaklarına takoz koy. Mırıltı, fokurtu ve no-frost modellerde hafif fan sesi normaldir; onları kovalamana gerek yok. Denge ve temas düzeltildiği hâlde gürültü sürüyorsa, sert metalik vuruntu geliyorsa ya da tiz bir çığlık duyulup dolap soğutmuyorsa sıra kompresör askı lastiklerine ve no-frost fan motoruna gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Kombi yanıyor ama petekler ısınmıyor — önce neye bakmalıyım?", c: "Önce peteğin neresinin soğuk olduğunu ayır: üstü soğuk altı sıcaksa içinde hava kalmıştır — kombiyi kapat, tesisat soğuyunca peteğin üst köşesindeki hava alma vidasını çeyrek tur gevşet, tıslama kesilip düzgün su gelince kapat; evdeki bütün peteklere en alt kattan başlayıp yukarı doğru uygula. Hava aldıktan sonra basınç düşer, bu beklenen bir sonuçtur: kombi soğukken manometreyi 1-1,5 bar aralığına getir. Hiçbir petek ısınmıyor ama musluktan sıcak su geliyorsa oda termostatının açık ve pilinin dolu olduğunu, kombi altındaki vanaların yaz temizliğinde kapalı unutulmadığını doğrula. Hava, basınç ve vanalar tamken petekler hâlâ soğuksa, peteğin altı soğuk üstü sıcaksa ya da basınç her hafta yeniden düşüyorsa sıra sirkülasyon pompasına ve tesisat kaçağına gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
];
