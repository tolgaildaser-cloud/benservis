---
title: "Beko buzdolabı soğutmuyor: servisten önce 8 kontrol"
description: "Beko buzdolabı soğutmuyorsa kılavuz önce fişe, sıcaklık ayarına, tatil moduna, kapı ve contaya, yüklemeye ve yerleşime bakıyor. Sıra ve servis sınırı."
slug: "beko-buzdolabi-sogutmuyor"
date: "2026-10-23"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 1, fork E). Konu seçimi: origin/main'de beko-buzdolabi-sogutmuyor yok
#   (Beko buzdolabında yalnız beko-buzdolabi-hata-kodlari ve beko-buzdolabi-ses-yapiyor var; "soğutmuyor" Arçelik, Bosch, Electrolux, Haier, LG,
#   Samsung, Siemens, Vestel için var, Beko için yok; genel buzdolabi-sogutmuyor-nedenleri marka bağımsız).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) dışa aktarımlarında bu sorguya gösterim YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "beko buzdolabı soğutmuyor":
#   1. "beko buzdolabı soğutmuyor nedendir" · 2. "…çıt sesi" · 3. "…ayarı nasıl yapılır" · 4. "…ne yapmalıyım" · 5. "…ünlem işareti" · 6. "…kaç derece olmalı".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Beko'nun kendi alan adı download.beko.com'dan yeniden indirildi: üçü de HTTP 200 application/pdf,
#   md5 yerel kopyalarla (blog-taslaklar/kaynak-beko-buzdolabi-sprint/) aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  (B) 9554 NF / 9570 NF / 954270 MB / 970470 MB / 970470 MI  http://download.beko.com/Download.UsageManualsBeko/970470-mb-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_201805251100833_User-20Manual-20-20File-20-28Long-29en_US.pdf  25 s.  md5 7e6d6c015ce85f83200d4b23c535f251
#  (C) B1 9426 NM / B1 9460 NM / B1 9490 NM / B1 9540 NM  http://download.beko.com/Download.UsageManualsBeko/b1-9460-nm-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_20141125172252_Kullanma-20K-C4-B1lavuzu-Dosyatur-A.pdf  28 s.  md5 12658b6c939f31d1cbb06bd4f0002816
#  (A) BK 9611 NE / 984611 EI ...  http://download.beko.com/Download.UsageManualsBeko/984611-ei-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_Manual_7289120284_en_US20180112-100911-151.pdf  43 s.  md5 2b4510ba146966baa86e0ac3a3388a76
# Fiş/sigorta B s.19 · kompresör termiği ~6 dk B s.19, C s.23 · ilk kullanım 6 saat B s.11 · fiş yeni takıldı/yeni yiyecek B s.20 · soğutucu 8…1 °C B s.13
#   · ortam 25 °C → 4 °C C s.12 · soğutucu ayarının dondurucuya etkisi B s.20 · tatil "- -" B s.13, A s.14, C s.15 · en sıcak konum + 12 saat → otomatik tatil C s.13
#   · kapı aralık/sık açılma B s.20 · kapı açık uyarısı 1 dk C s.21 · conta B s.20, C s.23 · sıcak yiyecek, aşırı doldurma, sensöre temas B s.11, A s.10
#   · 30 cm / 5 cm / güneş / girinti 5 cm B s.9, A s.8 · 43 °C B s.11 · uzatma kablolu çoklu priz B s.9 · hata göstergesi "E" + rakam B s.13, A s.14
#   · "Çalışmayan ürünü kendiniz onarmayı denemeyin" A s.39.
# BİLEREK YAZILMAYANLAR: kompresör, fan, sensör, gaz kaçağı teşhisi (servis işi; belgede kullanıcı adımı yok) · "çıt sesi" ve "ünlem işareti" (bu üç belgede
#   karşılığı yok, uydurulmadı) · conta değişimini kullanıcıya yaptırmak (#31) · hata göstergesindeki rakamların anlamı (kılavuz "servis personeline bilgi verir" diyor)
#   · arka kondenser temizliği (bu belgelerin soğutma satırlarında yok) · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: beko-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (sıcaklığın oturması için birkaç saat bekleme)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu", "Yumuşak bez ve ılık su"]
steps:
  - "Fişin prize tam oturduğunu ve buzdolabının bağlı olduğu sigortanın atmadığını kontrol et; uzatma kablolu çoklu priz kullanıyorsan doğrudan duvar prizine tak."
  - "Elektrik yeni geldiyse ya da fişi yeni taktıysan yaklaşık 6 dakika bekle; yeni kurulan ya da yeni doldurulan buzdolabının ayarlanan sıcaklığa inmesi daha uzun sürer."
  - "Soğutucu bölme sıcaklık ayarını kontrol et; ortam 25 °C iken Beko 4 °C öneriyor."
  - "Soğutucu bölme göstergesinde iki çizgi görüyorsan tatil fonksiyonu açıktır; tatil düğmesine tekrar basarak kapat."
  - "Kapıların tam kapandığını kontrol et ve kapıları sık ya da uzun süre açık tutma."
  - "Kapı contasını ılık suyla temizle; kirli, eskimiş, kırık ya da yerine oturmamış contayı not et."
  - "İçeri sıcak yemek koyma, buzdolabını aşırı doldurma ve yiyecekleri soğutucu bölmedeki sıcaklık sensörüne değdirme."
  - "Buzdolabının ısı kaynaklarından ve güneşten uzak, çevresinde hava dolaşımı olan bir yerde durduğunu kontrol et; sorun sürerse Beko Yetkili Servisi'ne başvur."
faq:
  - q: "Beko buzdolabı soğutmuyor, ilk neye bakmalıyım?"
    a: "Beko'nun sorun giderme tablosu önce enerjiye bakıyor: fiş prize tam oturmuş mu, buzdolabının bağlı olduğu priz ya da ana sigorta atmış mı. Sonra sıcaklık ayarı, kapıların tam kapanması ve conta geliyor. Ani elektrik kesintisinden ya da fişi çıkarıp taktıktan sonra kompresör koruyucu termiği atabilir; kılavuza göre ürün yaklaşık 6 dakika sonra çalışmaya başlar."
  - q: "Beko buzdolabı kaç derecede olmalı?"
    a: "B1 serisi kılavuzu, ortam sıcaklığı 25 °C ise soğutucu bölme ayarının 4 °C olmasını öneriyor; diğer ortam sıcaklıklarında bu değer ihtiyaca göre artırılıp azaltılabiliyor. No-frost kılavuzlarında soğutucu bölme 8 ile 1 °C, dondurucu bölme -24 ile -16 °C arasında ayarlanıyor."
  - q: "Göstergede iki çizgi var, soğutucu bölme neden soğumuyor?"
    a: "Bu, tatil fonksiyonunun açık olduğunu gösterir. Beko kılavuzlarına göre tatil fonksiyonu aktifken soğutucu bölmede hiçbir aktif soğutma yapılmaz ve yiyeceklerin orada tutulması uygun değildir; diğer bölmeler soğutmaya devam eder. Kapatmak için tatil düğmesine tekrar basılır. B1 serisinde sıcaklık ayar düğmesi en sıcak konumdayken kapılar en az 12 saat açılmazsa tatil fonksiyonu kendiliğinden devreye giriyor."
  - q: "Dondurucu soğuk ama soğutucu bölme ılık, neden?"
    a: "Beko'nun tablosu, soğutucu bölme sıcaklık ayarının dondurucu bölme sıcaklığı üzerinde de etkisi olduğunu yazıyor. Çözüm olarak bölme sıcaklıklarını değiştirip ilgili bölmeler yeterli seviyeye gelene kadar beklemeyi öneriyor. Kapıların aralık kalması, sık açılması ve yeni konulan sıcak yemek de aynı satırdaki nedenler arasında."
  - q: "Ekranda E ve bir rakam görüyorum, ne demek?"
    a: "No-frost kılavuzlarına göre buzdolabı yeterli soğutma yapmıyorsa ya da bir sensör arızası olursa hata durumu göstergesi devreye girer; dondurucu göstergesinde E, soğutucu göstergesinde rakam görünür. Kılavuz bu rakamların servis personeline bilgi verdiğini yazıyor. Kodları ayrıntılı olarak Beko buzdolabı hata kodları yazısında anlattık."
  - q: "Buzdolabı uzun süre çalışıyor ama yine de soğutmuyor; normal mi?"
    a: "Kılavuz bazı durumları normal sayıyor: yeni ürün eskisinden büyük olabilir, oda sıcak olabilir, fiş yeni takılmış ya da yeni yiyecek konmuş olabilir. Kapı aralık kalmışsa, conta kirli ya da hasarlıysa ürün sıcaklığı korumak için daha uzun çalışır. Bu nedenleri eledikten sonra sorun sürüyorsa Beko Yetkili Servisi'ne başvurulmalı."
images:
  coverAlt: "Mutfakta kapısı kapalı, beyaz, iki kapılı bir buzdolabı"
  steps:
    - "Çizim: solda buzdolabı, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda buzdolabı, sağda prizden çekilen fiş"
    - "Çizim: solda buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda buzdolabı, sağda kapak"
    - "Çizim: solda buzdolabı, sağda not defteri ve kalem"
    - "Çizim: solda buzdolabı, sağda su giriş musluğu"
    - "Çizim: solda buzdolabı, sağda telefon ve kullanım kılavuzu"
---

Buzdolabı çalışıyor gibi görünüyor ama içi serin değil; süt ılık, sebzeler çabuk solmuş. Beko'nun kullanma kılavuzlarında "soğutmuyor" diye tek bir satır yok, ama sorun giderme tablosu soğutmayı bozan nedenleri tek tek sayıyor: enerji, sıcaklık ayarı, tatil fonksiyonu, kapılar, conta, yükleme ve yerleşim. Bu yazıda servisi çağırmadan önce evde bakabileceğin her şeyi Beko'nun üç kılavuzundan sırayla topladık. Kaynaklar no-frost modellerin kılavuzları; senin buzdolabında düğme ve göstergeler farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce fiş ve sigorta. Elektrik yeni geldiyse 6 dakika bekle. Soğutucu bölme ayarına bak (25 °C odada 4 °C). Göstergede "- -" varsa tatil modu açık. Kapı tam kapanıyor mu, conta temiz mi? Sıcak yemek, aşırı doldurma ve sıcak ortam da soğutmayı düşürür. Bunlar doğruysa Beko Yetkili Servisi.

## Belirti ne söylüyor

| Gördüğün | Kılavuza göre olası neden | Kim ne yapar |
|---|---|---|
| **Hiç çalışmıyor** | Fiş tam oturmamış, sigorta atmış | 🛠️ Fiş ve sigorta |
| **Elektrik kesintisinden sonra sessiz** | Kompresör koruyucu termiği atmış | ⏳ Yaklaşık 6 dakika bekle |
| **Soğutucu göstergede "- -"** | Tatil fonksiyonu açık | 🛠️ Tatil düğmesine tekrar bas |
| **Dondurucu iyi, soğutucu ılık** | Bölme ayarları birbirini etkiliyor | 🛠️ Ayarı değiştir, bekle |
| **Sürekli çalışıyor, yine ılık** | Kapı aralık, conta kirli ya da hasarlı | 🛠️ Kapı ve conta |
| **Göstergede E ve rakam** | Yetersiz soğutma ya da sensör arızası | 🔧 Beko Yetkili Servisi |

## Adım adım: evde denenecekler

**1. Fiş ve sigorta.** Beko'nun tablosunda "Buzdolabı çalışmıyor" satırının ilk iki nedeni şunlar: fiş prize tam oturmamış ya da ürünün bağlı olduğu prizin sigortası veya ana sigorta atmış. Fişi prize tam oturacak şekilde tak, sigortayı kontrol et. Kılavuzun kurulum bölümü bir uyarı daha yapıyor: buzdolabı ile duvar prizi arasında **uzatma kablolu ya da çoklu grup priz kullanılmamalı**.

**2. Elektrik yeni mi geldi?** Kılavuza göre ani elektrik kesilmesinde ya da fişi çıkarıp taktığında, soğutma sistemindeki gazın basıncı henüz dengelenmediği için **kompresör koruyucu termiği atar**; ürün **yaklaşık 6 dakika** sonra çalışmaya başlar. Bu süre sonunda çalışmıyorsa kılavuz servisi çağırmanı söylüyor. Buzdolabı yeni kurulduysa ya da içine yeni yiyecek koyduysan, ayarlanan sıcaklığa inmesi normalden uzun sürer. Beko yeni ürünü ilk kullanımda **6 saat boyunca boş** çalıştırmayı ve kapısını gerekmedikçe açmamayı istiyor.

**3. Sıcaklık ayarını kontrol et.** No-frost kılavuzlarına göre soğutucu bölme **8 ile 1 °C**, dondurucu bölme **-24 ile -16 °C** arasında ayarlanıyor. B1 serisi kılavuzu, ortam sıcaklığı **25 °C** iken soğutucu bölmenin **4 °C**'de kullanılmasını öneriyor. Beko'nun tablosu ayrıca soğutucu bölme ayarının dondurucu bölme sıcaklığını da etkilediğini yazıyor: bölme sıcaklıklarını değiştirdikten sonra ilgili bölmeler yeterli seviyeye gelene kadar bekle.

**4. Tatil fonksiyonu açık mı?** Göstergeli modellerde tatil fonksiyonu tatil düğmesine **3 saniye** basılarak açılıyor. Açıkken soğutucu bölme sıcaklık göstergesinde **"- -"** görünür ve soğutucu bölmede **hiçbir aktif soğutma yapılmaz**; dondurucu soğutmaya devam eder. Kapatmak için tatil düğmesine **tekrar bas**. B1 serisinde bir ayrıntı daha var: sıcaklık ayar düğmesi en sıcak konumdayken kapılar **en az 12 saat** açılmazsa tatil fonksiyonu kendiliğinden devreye giriyor.

**5. Kapıları kontrol et.** Kılavuz sıcaklığın yüksek olduğu satırda iki kapı nedeni sayıyor: kapılar sık açılmış ya da uzun süre açık kalmış, ya da kapı **aralık kalmış**. İçeri giren sıcak hava ürünün daha uzun çalışmasına yol açıyor. Kapıyı tamamen kapat. Kapı açık uyarısı olan modellerde kapı **1 dakika** açık kalınca uyarı sesi duyulur.

**6. Kapı contasına bak.** Beko'nun tablosuna göre soğutucu ya da dondurucu kapı contası **kirlenmiş, eskimiş, kırılmış ya da tam oturmamış** olabilir ve hasarlı ya da kopuk conta ürünün sıcaklığı korumak için daha uzun çalışmasına neden olur. Kılavuz contayı temizlemeyi ya da değiştirmeyi söylüyor. Temizlik senin işin: kılavuz iç temizlik için sünger, ılık su ya da karbonatlı su öneriyor. Conta kırık ya da kopuksa değişim için Beko Yetkili Servisi'ne başvur.

**7. Yüklemeye dikkat et.** Kılavuzun kullanım bölümü üç şey istiyor: buzdolabına **sıcak yiyecek ya da içecek koyma**, buzdolabını **aşırı doldurma** (içerideki hava akımı engellendiğinde soğutma kapasitesi düşer) ve yiyecekleri soğutucu bölmedeki **sıcaklık sensörüne temas ettirme**. Tablo da yakın zamanda fazla miktarda sıcak yemek konmasını sıcaklığın yüksek olma nedenleri arasında sayıyor.

**8. Yerleşim ve servis.** Beko buzdolabını ocak, kalorifer peteği ve soba gibi ısı kaynaklarından **en az 30 cm**, elektrikli fırınlardan **en az 5 cm** uzağa kurmayı, doğrudan güneş ışığına maruz bırakmamayı istiyor. Girintili bir yerdeyse tavanla ve yan duvarlarla arasında **en az 5 cm** boşluk olmalı. Kılavuza göre ürün 43 °C'ye kadar ortam sıcaklıklarında çalışacak şekilde tasarlandı. Bu kontrollerden sonra sorun sürüyorsa kılavuzun son cümlesi geçerli: ürünü satın aldığın bayiye ya da **Yetkili Servis**'e başvur, çalışmayan ürünü kendin onarmayı deneme.

## Ekranda E görürsen

No-frost kılavuzlarına göre buzdolabı **yeterli soğutma yapmıyorsa** ya da bir **sensör arızası** olursa hata durumu göstergesi devreye girer: dondurucu göstergesinde **E**, soğutucu göstergesinde **1, 2, 3** gibi rakamlar görünür. Kılavuz bu rakamların **servis personeline** hata hakkında bilgi verdiğini yazıyor; yani bu noktada evde yapılacak bir ayar yok, kodu not et. Kodların ayrıntısı [Beko buzdolabı hata kodları](/blog/beko-buzdolabi-hata-kodlari/) yazısında.

**Hangi sesler normal?** Beko'ya göre kompresör çalışmaya başladığında bir ses duyulur, soğutma sisteminde sıvı ve gaz akış sesleri ve fan sesi de normaldir. Ses tarafı [Beko buzdolabı ses yapıyor](/blog/beko-buzdolabi-ses-yapiyor/) yazısında.

## Ne zaman servis

- Fiş, sigorta ve 6 dakikalık bekleme sonrası buzdolabı hâlâ çalışmıyorsa
- Göstergede E ve bir rakam görünüyorsa
- Conta kırık, kopuk ya da yerine oturmuyorsa
- Ayar, kapı, yükleme ve yerleşim doğru olduğu hâlde bölmeler soğumuyorsa

⛔ **Kendin-çöz sınırı burada biter.** Fiş, sigorta, sıcaklık ayarı, tatil düğmesi, kapı, conta temizliği ve yerleşim sende; kompresör, fan, sensör, soğutma gazı ve elektrik aksamı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Buzdolabının modeli ne?
2. Soğutucu ve dondurucu kaç dereceye ayarlı?
3. Göstergede "- -", E ya da bir rakam var mı?
4. Sorun yalnız soğutucuda mı, iki bölmede de mi?
5. Elektrik kesintisi ya da taşıma oldu mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka bağımsız nedenler [buzdolabı soğutmuyor nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısında, alt bölme sorunu [no-frost buzdolabı alt bölme soğutmuyor](/blog/no-frost-buzdolabi-alt-bolme-sogutmuyor/) sayfasında. Bil, gör, çağır.
