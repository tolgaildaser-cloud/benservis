---
title: "Buzdolabı kendi kendine duruyor ya da kapanıyor: ne yapılır?"
description: "Buzdolabı kendi kendine duruyorsa Arçelik 5845 NFEY ve Bosch KGE kılavuzlarına göre buz çözme döngüsü, 6 dakikalık termik koruma ve kontroller."
slug: "buzdolabi-kendi-kendine-duruyor"
date: "2026-11-10"
category: "Buzdolabı"
updated: "2026-11-10"
kisaCevap: "Buzdolabının motoru kendi kendine duruyorsa çoğu zaman buz çözme döngüsündedir ya da elektrik kesintisi sonrası koruma devrededir. Arçelik 5845 NFEY kılavuzuna göre termik koruma atarsa ürün yaklaşık 6 dakika sonra yeniden çalışır. Bosch KGE de motor açılıp kapanırken gelen çıtlamayı normal sayıyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 2; BOSLUK.md sürüm 4 #309 "buzdolabı kendi kendine duruyor / kapanıyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya, a3d7ec3b). Yakın: buzdolabi-motoru-calismiyor (lamba yanıyor, motor hiç kalkmıyor; röle/kompresör niyeti), buzdolabi-hic-durmuyor (tersi niyet). Bu yazı "çalışırken kendiliğinden durma" niyetini ve normal duruşları karşılıyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-ham-alinti.txt; teyit 07:17 _kaynak/OT-2026-11-06-teyit-p2.txt): "buzdolabı kendi kendine" #3 "…duruyor", #5 "…kapanıyor", #6 "…durdu". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Arçelik 5845 NFEY / 8541 NFEY / 5850 NFY ve diğerleri buzdolabı kullanma kılavuzu (44 s. PDF) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7289120181_tr_TR20190724-090854-735.pdf md5 15ab677d45027c5992101461a78df4fa — PDF s.11, 18, 19, 39, 40 · (B) Bosch KGE.. soğutucu/dondurucu kombine cihazı kullanma kılavuzu 9000942062_D (31 s. PDF) https://media3.bosch-home.com/Documents/9000942062_D.pdf md5 fe03b1c8098c2a98f81913dd32feeca2 — PDF s.9, 10, 11, 18, 22, 23, 24.
# BİLEREK YAZILMAYANLAR: röle, termik, kompresör teşhisi ve değişimi (buzdolabi-motoru-calismiyor konusu; servis) · priz ve tesisat onarımı · gaz devresi · fiyat (#46).
# Alıntı denetimi: buzdolabi-kendi-kendine-duruyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu", "Saat"]
steps:
  - "Ekranın ve iç lambanın yanıp yanmadığına bak."
  - "Ekran karardıysa bir tuşa bas ya da kapıyı aç."
  - "Motor durduysa buz çözme döngüsü için bekle."
  - "Elektrik gidip geldiyse 6 dakika bekle."
  - "Fişi, prizi ve sigortayı kontrol et."
  - "Açma/kapama tuşuna ve tatil moduna bak."
  - "Buzdolabı kendiliğinden çalışmaya başlamazsa servis çağır."
faq:
  - q: "Buzdolabının motoru neden kendi kendine durur?"
    a: "Arçelik 5845 NFEY kılavuzu kompresörün çalışmamasını tam otomatik buz çözme yapan bir ürün için normal sayıyor; buz çözme döngüsü periyodik olarak gerçekleşir. Bosch KGE de motor, şalter ya da valflerin açılıp kapanmasından gelen çıtlama sesini normal çalışma sesi olarak listeliyor."
  - q: "Elektrik gidip gelince buzdolabı neden hemen çalışmıyor?"
    a: "Arçelik kılavuzuna göre ani elektrik kesilmesinde ya da fiş çıkarılıp takıldığında soğutma sistemindeki gazın basıncı henüz dengelenmediği için kompresör koruyucu termiği atar. Ürün yaklaşık 6 dakika sonra çalışmaya başlar; başlamazsa servis çağırmanı istiyor."
  - q: "Buzdolabının ekranı kendi kendine kapandı, buzdolabı durdu mu?"
    a: "Ekranın kararması tek başına durduğunu göstermez. Arçelik 5845 NFEY'de kapılar açılıp kapanmadığında enerji tasarrufu fonksiyonu otomatik devreye girer ve tasarruf simgesi dışındaki tüm simgeler söner. Bir düğmeye basınca ya da kapıyı açınca ekran normale döner."
  - q: "Buzdolabında hiçbir gösterge yanmıyorsa ne yapmalıyım?"
    a: "Bosch KGE kılavuzu nedenleri elektrik kesintisi, kapalı sigorta ya da prize iyi takılmamış fiş olarak veriyor. Fişi takmanı, elektrik olup olmadığını ve sigortaları kontrol etmeni istiyor."
images:
  coverAlt: "Sade buzdolabı ve yanında kum saati çizimi"
  steps:
    - "Buzdolabı kapağındaki ekrana bakan beyaz eldivenli sade siluet el"
    - "Buzdolabı ekranındaki tuşa dokunan beyaz eldivenli sade siluet el"
    - "Buzdolabının yanında saate bakan beyaz eldivenli sade siluet el"
    - "Duvardaki sigorta kutusuna bakan beyaz eldivenli sade siluet el"
    - "Buzdolabının fişini prize takan beyaz eldivenli sade siluet el"
    - "Buzdolabı ekranındaki açma kapama tuşuna uzanan beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında buzdolabı"
---

Buzdolabının motoru kendi kendine duruyorsa önce bunun normal bir duruş olup olmadığına bak. Arçelik 5845 NFEY kılavuzu kompresörün çalışmamasını tam otomatik buz çözme yapan bir ürün için normal sayıyor; buz çözme döngüsü periyodik olarak gerçekleşir. Ani elektrik kesilmesinden sonra ise kompresör koruyucu termiği atar ve ürün yaklaşık 6 dakika sonra yeniden çalışır.

Bosch KGE kılavuzu da motor, şalter ya da manyetik valflerin açılıp kapanmasından gelen çıtlama sesini normal çalışma sesleri arasında sayıyor. Ekranın sönmesi ayrı bir konu: Arçelik'te kapılar açılmadığında enerji tasarrufu ekranı otomatik karartır. Kendi buzdolabının kılavuzu farklı süre veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız kullanıcının yapabildiği kontrolleri anlatıyor. Arçelik arızalı ürünün onarılmadan çalıştırılmamasını, elektrik çarpma tehlikesi olduğunu yazıyor. Kompresör, termik, röle, elektrik kablosu ve gaz devresi servis işidir.

## Buzdolabı neden kendi kendine durur?

| Durum | Arçelik 5845 NFEY | Bosch KGE |
|---|---|---|
| Buz çözme | Kompresör durur; periyodik ve normal | Soğutucu bölmesinde buz çözme otomatik |
| Elektrik gidip geldi | Termik atar; yaklaşık 6 dakika sonra çalışır | — |
| Ekran karardı | Enerji tasarrufu; simgeler söner | — |
| Hiç gösterge yok | Fiş, priz sigortası ya da ana sigorta | Elektrik kesintisi, sigorta ya da fiş |
| Tuşla kapatıldı | — | Açma/Kapama tuşu: gösterge söner, kompresör kapanır |

## Adım adım: buzdolabı kendi kendine duruyorsa ne yapılır?

**1. Ekranın ve iç lambanın yanıp yanmadığına bak.** Bosch'ta cihaz soğutmuyor ama ısı derecesi göstergesi ve aydınlatma yanıyorsa muhtemel sebep sergileme modudur; alarm tuşunu bir tasdik sesi duyulana kadar 10 saniye basılı tutmanı istiyor. Ekran ve lamba hiç yanmıyorsa 5. adıma geç.

**2. Ekran karardıysa bir tuşa bas ya da kapıyı aç.** Arçelik 5845 NFEY'de kapılar açılıp kapanmadığında enerji tasarrufu fonksiyonu otomatik devreye girer, tasarruf simgesi dışındaki tüm simgeler söner. Bir düğmeye basınca ya da kapıyı açınca ekran normale döner. Bu fonksiyon fabrika çıkışı aktiftir ve iptal edilemez.

**3. Motor durduysa buz çözme döngüsü için bekle.** Arçelik kompresörün çalışmamasının bir nedenini buz çözme devresi olarak veriyor ve bunu tam otomatik buz çözme yapan bir ürün için normal sayıyor. Bosch soğutucu bölmesinde buz çözmenin otomatik yapıldığını, eriyen suyun oluklardan buharlaştırma bölümüne aktığını yazıyor.

**4. Elektrik gidip geldiyse 6 dakika bekle.** Arçelik ani elektrik kesilmesinde ya da fiş çıkarılıp takıldığında gaz basıncı dengelenmediği için kompresör koruyucu termiğinin attığını, ürünün yaklaşık 6 dakika sonra çalışmaya başlayacağını yazıyor. Hızlı dondur tuşuna kısa aralıklarla tekrar tekrar basmak da elektrik devre korumasını etkinleştirir ve kompresör hemen devreye girmez.

**5. Fişi, prizi ve sigortayı kontrol et.** Arçelik buzdolabı çalışmıyorsa fişin prize tam oturmadığını ya da prizin sigortasının veya ana sigortanın attığını kontrol etmeni istiyor. Bosch herhangi bir gösterge yanmıyorsa elektrik kesintisi, kapalı sigorta ya da iyi takılmamış fişe bakmanı söylüyor. Arçelik uzatma kablosu ya da çoklu priz kullanmamanı da hatırlatıyor.

**6. Açma/kapama tuşuna ve tatil moduna bak.** Bosch'ta Açma/Kapama tuşuna basılırsa ısı derecesi göstergesi söner ve kompresör kapanır; cihazı aynı tuşla yeniden devreye sokarsın. Tatil modu açıksa soğutucu bölmesi otomatik +14 °C'ye ayarlanır ve soğutucu göstergesinde artık derece gösterilmez; modu Holiday (tatil) tuşuyla kapatırsın.

**7. Buzdolabı kendiliğinden çalışmaya başlamazsa servis çağır.** Arçelik 6 dakika sonunda ürün çalışmaya başlamazsa servis çağırmanı istiyor. Bosch ısı derecesi göstergesinde "E.." görünürse elektronik sistemin bir hata tespit ettiğini, yetkili servisi çağırman gerektiğini yazıyor.

## Buzdolabı uzun duruyor, kısa çalışıyorsa normal mi?

Arçelik ortam sıcaklığının değişmesine bağlı olarak ürünün çalışma performansının değişebileceğini, bunun normal olduğunu yazıyor. Sıcak ortamda, fiş yeni takıldığında ya da yeni yiyecek konulduğunda ürünün daha uzun çalışmasını da normal sayıyor. Bosch cihaz yeni devreye sokulduğunda ayarlanan dereceye ulaşmanın 12 saat kadar sürebileceğini söylüyor. Kapı aralık kalmışsa ya da conta kirli veya hasarlıysa Arçelik kapıyı tamamen kapatmanı, contayı temizlemeni ya da değiştirmeni istiyor.

## Bu konuda hangi yazılara bakılır?

Motor hiç kalkmıyor, yalnız tık sesi geliyorsa [buzdolabı motoru çalışmıyor](/blog/buzdolabi-motoru-calismiyor/), tersine hiç susmuyorsa [buzdolabı hiç durmuyor](/blog/buzdolabi-hic-durmuyor/), seslerin anlamı için [buzdolabı ses yapıyor](/blog/buzdolabi-ses-yapiyor/) yazısına bak.

---

**Kaynak künyesi.** Buz çözme döngüsü, 6 dakikalık termik koruma, enerji tasarrufu ekranı, hızlı dondur koruması ve sorun tablosu Arçelik 5845 NFEY buzdolabı kullanma kılavuzundan; çalışma sesleri, gösterge yanmama nedenleri, Açma/Kapama tuşu, tatil modu, sergileme modu ve E kodu bilgisi Bosch KGE.. soğutucu/dondurucu kombine cihazı kullanma kılavuzundan (9000942062_D) alınmıştır. Kendi buzdolabının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu kontrollerden sonra da buzdolabın kendi kendine duruyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
