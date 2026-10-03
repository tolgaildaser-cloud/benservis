---
title: "Alarko kombi E47 hatası: basınç çok yüksek"
description: "Alarko kombide E47 yüksek tesisat suyu basıncı demek. Basıncı info menüsünden okuma ve kılavuzdaki 4 adımla 1.2 bar'a indirme sırası."
slug: "alarko-kombi-e47-hatasi"
date: "2026-10-03"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, kombi + fırın koşusu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile Alarko Carrier'ın kendi alan adından indirildi, HTTP 200.
# Belgenin yeri web aramasıyla bulundu; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no = PDF sayfası + 1).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-protherm-alarko-sprint/kombi-alarko-srs-kk.pdf
#  (A) Alarko "SERADENS SUPER SRS 20/24/28/36 PREMİKS YOĞUŞMALI KOMBİ MONTAJ ve KULLANIM KILAVUZU" Kod No A.1.4.8, Rev. 31/10/2024, 59 s., md5 1d7022ad1322561828a456f621227d10
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/kombi-alarko-srs-kk.pdf
#      s.19: "E47 Yüksek Tesisat Suyu Basıncı Hatası, ekranda sürekli olarak yanarsa; • Kullanıcı bilgilendirme menüsünü kullanarak kalorifer devresindeki su basıncını kontrol edin. • Basınç değeri 1.2 bar'a düşünceye kadar sistemdeki suyu tahliye edin. • Kombi otomatik olarak yeniden çalışacaktır. Problem devam ederse yetkili servisi arayın."
#      s.19 "Kalorifer sistemindeki suyu boşaltmak için; 1. Cihazın altındaki kullanım suyu giriş vanasını kapatın. 2. Mutfak veya banyodaki bir SICAK su musluğunu açın (Cihaza en yakın olan musluğu tercih edin) 3. Cihaz içindeki doldurma musluğunu açın ve kullanıcı bilgilendirme menüsünden basınç değerini istenilen seviyeye düşünceye kadar kontrol edin. 4. Ekranda uygun basınç değerini gördüğünüzde; sıcak su musluğunu ve cihaz içindeki doldurma musluğunu kapatın ve cihazın altındaki kullanım suyu ana giriş vanasını açın."
#      s.15: "Kalorifer sistemin aşırı doldurulması E47 hatasına yol açar, bunun nedeni sistemdeki fazla suyun 3 bar emniyete ventilinden kontrolsüzce boşaltılmasını önlemektir." · "Yüksek basınçtan ötürü sistemde E47 hatası belirdiğinde boşaltma musluğunu (B) (Şekil 2) kullanarak uygun miktardaki suyu bir kovaya boşaltın veya "Su Basınç Hataları" başlığında açıklanan maddeleri takip edin."
#      s.15 DİKKAT: "Kalorifer sisteminin basıncı ısınan sudan ötürü yükselir. Sistemin 2.3- 2.4 bar soğuk su ile yüklenmesi, kalorifer sistemi ısındığında E47 hatasına yol açabilir. Böyle bir duruma yol açmamak için su soğukken (oda sıcaklığında veya daha düşükken) sistem basıncınızın 1.2 bar olduğundan her zaman emin olun."
#      s.14 2.6 info menüsü: "(2) numaralı (Şekil 1) düğmeye 2 saniye süresince basın." · "ı00: Kalorifer suyu basıncı" · "Bu menüye kombi KAPALI konumdayken bile girebilirsiniz." · s.14 doldurma musluğu (D) "kombinin sol alt tarafında"
#      s.17 "Doldurma işlemi esnasında basıncı gözlemek için kullanıcı bilgilendirme menüsü kapalı konumda da kullanılabilmektedir." · s.18 genel: "Aşağıdaki işlemler yapıldıktan sonra problem tekrar meydana gelirse, yetkili servisi arayın."
# BİLEREK YAZILMAYANLAR: boşaltma musluğu (B) ile kovaya boşaltma numaralı adıma alınmadı (kılavuz musluğun nasıl açılacağını ve alet gerekip gerekmediğini yazmıyor; gövdede anıldı)
#   · emniyet ventili/genleşme tankı teşhisi · diğer Alarko modellerine genelleme · E47'yi reset düğmesiyle silme (belgede E47 için yok) · kapak açma · gaz/elektrik müdahalesi · fiyat.
# Alıntı denetim tablosu: alarko-kombi-e47-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Info düğmesine 2 saniye basarak ekranda ı00 satırındaki kalorifer suyu basıncını oku."
  - "Kombinin altındaki kullanım suyu giriş vanasını kapat."
  - "Kombiye en yakın mutfak ya da banyo musluğunun SICAK tarafını aç."
  - "Doldurma musluğunu aç ve info menüsünden basıncın düşmesini izle."
  - "Basınç 1.2 bar'a inince önce sıcak su musluğunu, sonra doldurma musluğunu kapat."
  - "Kombinin altındaki kullanım suyu giriş vanasını yeniden aç."
  - "E47 kalkmıyorsa ya da tekrar ederse Alarko yetkili servisini ara."
faq:
  - q: "Alarko kombide E47 ne demek?"
    a: "Alarko'nun Seradens Super kılavuzunda E47 'Yüksek Tesisat Suyu Basıncı Hatası' olarak geçiyor. Kılavuza göre kalorifer sisteminin aşırı doldurulması E47'ye yol açıyor; amaç sistemdeki fazla suyun 3 bar emniyet ventilinden kontrolsüzce boşaltılmasını önlemek."
  - q: "Basıncı soğukken 1.2 bar yaptım, kombi ısınınca neden yükseldi?"
    a: "Alarko kılavuzu bunu ayrıca uyarıyor: kalorifer sisteminin basıncı ısınan sudan ötürü yükselir. Sistem 2.3-2.4 bar soğuk suyla yüklenirse kalorifer ısındığında E47 çıkabilir. Bu yüzden basıncın su soğukken, oda sıcaklığında ya da daha düşükken 1.2 bar olması isteniyor."
  - q: "Suyu nasıl tahliye edeceğim?"
    a: "Kılavuzun 4 adımlık yöntemi şu: kombinin altındaki kullanım suyu giriş vanasını kapat, kombiye en yakın mutfak ya da banyo musluğunun sıcak tarafını aç, doldurma musluğunu açıp info menüsünden basıncı izle, uygun değeri görünce sıcak su musluğunu ve doldurma musluğunu kapatıp giriş vanasını yeniden aç."
  - q: "E47 kalkınca kombi kendiliğinden çalışır mı?"
    a: "Evet. Alarko'nun E47 talimatına göre basınç 1.2 bar'a düşürüldükten sonra kombi otomatik olarak yeniden çalışıyor. Problem devam ederse yetkili servisin aranması isteniyor."
images:
  coverAlt: "Banyoda açık bir sıcak su musluğu ve arka planda duvara monteli bir kombinin altındaki vanalar"
---

Kombinin ekranında **E47** görünüyor ve çalışmıyor. Alarko'nun Seradens Super kılavuzu bu kodu **"E47 Yüksek Tesisat Suyu Basıncı Hatası"** olarak tanımlıyor. E04'ün tersi: bu kez kalorifer devresinde su fazla. Kılavuz nedenini de yazıyor: **kalorifer sisteminin aşırı doldurulması E47 hatasına yol açar**; amaç, fazla suyun 3 bar emniyet ventilinden kontrolsüzce boşaltılmasını önlemek. Bu yazı Seradens Super SRS 20/24/28/36 kılavuzuna dayanıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Info menüsünde basıncı oku → kombinin altındaki kullanım suyu giriş vanasını kapat → en yakın sıcak su musluğunu aç → doldurma musluğunu aç, basıncı izle → 1.2 bar'da muslukları kapat, giriş vanasını aç. E47 kalkınca kombi kendiliğinden çalışır.

## Adım adım: evde denenecekler

**1. Basıncı oku.** E47 için kılavuzun ilk maddesi: kullanıcı bilgilendirme menüsünden **kalorifer devresindeki su basıncını kontrol et.** Panelde 2 numaralı info düğmesine **2 saniye** bas; ekranda **ı00** ile basınç değeri dönüşümlü görünür. Kılavuza göre menü kombi kapalıyken de çalışıyor.

**2. Kullanım suyu giriş vanasını kapat.** Alarko'nun tahliye yönteminin ilk adımı: **cihazın altındaki kullanım suyu giriş vanasını kapatın.** Kılavuz aynı vanayı son adımda **kullanım suyu ana giriş vanası** diye anıyor.

**3. Bir sıcak su musluğu aç.** İkinci adım: **mutfak veya banyodaki bir SICAK su musluğunu açın**; kılavuz **kombiye en yakın** olanı tercih etmeni söylüyor.

**4. Doldurma musluğunu aç, basıncı izle.** Üçüncü adım: **doldurma musluğunu aç** ve info menüsünden basıncın istenen seviyeye düşmesini izle. Seradens Super'de doldurma musluğu kılavuzun alttan görünüm şeklinde D harfiyle gösterilen, **kombinin sol alt tarafındaki** musluk. Menü 30 saniyede kapanırsa info düğmesine yeniden 2 saniye bas.

**5. 1.2 bar'da kapat.** E47 talimatındaki hedef: basınç **1.2 bar'a düşünceye kadar** sistemdeki suyu tahliye et. Ekranda uygun değeri gördüğünde **sıcak su musluğunu ve doldurma musluğunu kapat.**

**6. Giriş vanasını yeniden aç.** Dördüncü adımın son kısmı: **cihazın altındaki kullanım suyu ana giriş vanasını aç.** Kılavuza göre bu noktada **kombi otomatik olarak yeniden çalışacaktır.**

**7. Kalkmıyorsa servis.** E47 satırının son cümlesi: **problem devam ederse yetkili servisi arayın.**

## Kılavuzdaki ikinci yöntem: boşaltma musluğu

Seradens Super kılavuzu E47 için bir yol daha anlatıyor: kombinin altındaki **boşaltma musluğunu (B)** kullanarak uygun miktarda suyu **bir kovaya** boşaltmak. Kılavuz bu musluğun nasıl açılacağını ayrıntılandırmadığı için bu rehberde yukarıdaki dört adımlı yöntemi esas aldık; boşaltma musluğunu kullanmak istiyorsan bunu kurulumu yapan servise göstert.

## E47 neden çıkıyor?

Kılavuzdaki uyarı aslında ipucunu veriyor: **kalorifer sisteminin basıncı ısınan sudan ötürü yükselir.** Soğukken 2.3-2.4 bar'a doldurulmuş bir sistem, kalorifer ısındığında E47 verebiliyor. Alarko'nun önerisi, su soğukken (oda sıcaklığında ya da daha düşükken) basıncın **her zaman 1.2 bar** olduğundan emin olmak. Basınç düşükken nasıl doldurulacağı kardeş yazımız [Alarko kombi E04 hatası](/blog/alarko-kombi-e04-hatasi/) sayfasında.

## Ne zaman servis

- Basıncı 1.2 bar'a indirdiğin hâlde E47 sürüyorsa.
- E47 bir süre sonra yeniden çıkıyorsa.
- Vanaları ya da doldurma musluğunu bulamıyorsan veya elle açılıp kapanmıyorsa.

Doğru basınç aralığını markadan bağımsız olarak [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında anlattık. Diğer kodlar için [kombi arıza kodları](/blog/kombi-ariza-kodlari/) listesine bak.

⛔ Emniyet ventili, kombinin kapağının arkası, gaz ve elektrik bağlantıları yetkili servisin işi.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
