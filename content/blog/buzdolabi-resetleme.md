---
title: "Buzdolabı resetleme: Samsung, Bosch ve Beko'nun adımları"
description: "Buzdolabı nasıl resetlenir? Samsung, Bosch ve Beko belgelerine göre fişten yeniden başlatma, bekleme süresi, sergileme modu ve kendi kendine test."
slug: "buzdolabi-resetleme"
date: "2026-10-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (BOŞLUK tablosu #12). Slug origin/main content/blog/'da yok; markaya özel yakın yazılar: bosch-buzdolabi-resetleme, siemens-buzdolabi-alarm-resetleme. Genel yazı yok.
# Konu kanıtı: Google otomatik tamamlama "buzdolabı sıfırlama" #1, "buzdolabı nasıl" #6 (BOŞLUK.md #12). GSC kanıt sayılmadı.
# Belgeler (#88/#89), hepsi curl -sL -A "Mozilla/5.0", HTTP 200, ham dosyalar _kaynak/buzdolabi/:
#  (S) Samsung ABD destek "How to reset your Samsung refrigerator" https://www.samsung.com/us/support/answer/ANS10006926 (EN) — md5 1ec08abaca1c39a8cb8402781867d454
#  (S2) Samsung BAE destek "How to reset Samsung refrigerator?" https://www.samsung.com/ae/support/home-appliances/how-to-reset-samsung-refrigerator/ (EN) — md5 3b535ba48cf9e3fc6c7211ba9a92bfa9 (S'yi teyit; aynı 5 dakika)
#  (B) Bosch KGN76.. kullanım kılavuzu 8001233803_C.pdf, 36 s., md5 d3c476746c93359c81b2153194c1adec — s.16-17 (açma/kapama, ayar), s.19 (alarm), s.25 (sergileme modu), s.27 (sıcaklık sapması), s.29 (kendi kendine test)
#  (K) Beko 984611 EI No Frost buzdolabı kullanma kılavuzu, 43 s., md5 2b4510ba146966baa86e0ac3a3388a76 — PDF s.4 (fiş, 5 dakika), PDF s.37 = basılı 36 (kompresör ~6 dakika)
#  Samsung sayfaları İngilizce; alıntılar bizim çevirimiz, orijinaller KAYNAK'ta.
# BİLEREK YAZILMAYANLAR: "gizli reset tuşu", servis menüsü, kart sıfırlama · üreticilerde olmayan "birkaç saat fişte beklet" türü süreler · Family Hub ekran anahtarı ayrıntısı · fiyat (#46).
# Alıntı denetimi: buzdolabi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu", "Telefon kamerası", "Saat ya da zamanlayıcı"]
steps:
  - "Resetlemeden önce ekrandaki kodun fotoğrafını çek; Samsung'a göre reset, buzdolabındaki hata geçmişini siler."
  - "Gösteri modunu ayır: Samsung'da OF OF demo modudur, Bosch'ta göstergeler yanıp soğutma yoksa sergileme modunu kılavuzdaki tuş sırasıyla kapat."
  - "İkaz sesi çalıyorsa Bosch'taki gibi önce kapıyı kapat ya da alarm tuşuna bas."
  - "Sıcaklık ayardan çok farklıysa Bosch'ta cihazı kumanda panelinden kapat ve yaklaşık 5 saniye sonra yeniden aç."
  - "Tam yeniden başlatma için fişi çek ya da sigortayı kapat; Samsung yaklaşık 5 dakika, Beko en az 5 dakika beklemeni istiyor."
  - "Fişi taktıktan sonra kompresörün devreye girmesini bekle; Beko'ya göre yaklaşık 6 dakika sürer, çalışmazsa servis çağır."
  - "Bosch modellerde kendi kendine testi çalıştır: iki sinyal sorun yok demek, beş sinyal ve farklı parlaklıkta LED'ler servise haber ver demek."
faq:
  - q: "Buzdolabını resetlemek için fişi ne kadar çekili tutmalıyım?"
    a: "Üreticilerin belgelerinde süre 5 dakika. Samsung'un destek sayfası fişi çekip ya da sigortayı kapatıp elektrik yükünün boşalması için yaklaşık beş dakika beklemeni yazıyor. Beko'nun kılavuzu da fişi çektikten sonra yeniden takmak için en az 5 dakika beklemeni istiyor. Bosch'un kendi kendine testinde de fiş 5 dakika sonra takılıyor."
  - q: "Buzdolabını her sorunda resetlemeli miyim?"
    a: "Samsung buna karşı. Destek sayfasına göre reset yalnız sorun giderme adımları yönlendirdiğinde, buzdolabını taşırken ya da temizlerken öneriliyor. Reset hata kodu geçmişini ve tanı bilgilerini siler; bu da teknisyenin arızayı bulmasını zorlaştırabilir."
  - q: "Samsung buzdolabında 88 88 kodu çıktı, ne yapmalıyım?"
    a: "Samsung'a göre 88 88 gibi bazı kodlar elektrik kesintisinden sonra görülebilir ve buzdolabının düzgün açılmadığı anlamına gelir. Bu durumda yeniden çalışması için reset yeterli olabilir."
  - q: "Samsung buzdolabının Wi-Fi ayarlarını nasıl sıfırlarım?"
    a: "Samsung'un sayfasına göre ağ sıfırlama tüm Wi-Fi ve ağ bilgilerini siler. Ekranda A ve r görünene kadar LOCK tuşuna yaklaşık 12 saniye basılı tut. Family Hub modellerinde Ayarlar'dan Wi-Fi ağını seçip bağlantıyı kesmek ya da unutmak gerekiyor."
  - q: "Reset sonrası buzdolabı hemen soğumuyor, normal mi?"
    a: "Bosch'a göre cihazı çalıştırdığında ayarlanan sıcaklığa ancak birkaç saat sonra ulaşılır ve o zamana kadar yiyecek konmamalı. Beko'ya göre fişi çıkarıp takınca kompresör yaklaşık 6 dakika sonra çalışmaya başlar."
images:
  coverAlt: "Mutfakta duran, kapısındaki ekranı sönük beyaz bir buzdolabının sade çizimi"
  steps:
    - "Buzdolabının kapı ekranının fotoğrafını telefonla çeken beyaz eldivenli sade siluet el çizimi"
    - "Işığı yanan ama içinde kar tanesi simgesi sönük duran buzdolabı çizimi"
    - "Hafif aralık kalmış buzdolabı kapısını kapatan beyaz eldivenli sade siluet el çizimi"
    - "Kontrol panelindeki açma kapama tuşuna basılı tutan beyaz eldivenli sade siluet el çizimi"
    - "Prizden çekilmiş buzdolabı fişi ve yanında kum saati simgesi"
    - "Buzdolabının arka alt köşesinde çalışmaya başlayan kompresörü gösteren ses dalgası çizimi"
    - "Kontrol panelindeki tuşa basılı tutan beyaz eldivenli sade siluet el ve yanında iki küçük ses simgesi"
---

Buzdolabı garip davranıyor: ekranda bir kod var, ikaz sesi susmuyor ya da ışık yandığı hâlde içerisi soğumuyor. İlk akla gelen "resetlemek" oluyor. Ama buzdolaplarında "reset" diye tek bir tuş yok. Üreticiler aynı işi farklı adlarla anlatıyor: fişten yeniden başlatma, panelden kapatıp açma, gösteri modundan çıkma, kendi kendine test.

Bu yazıda üç üreticinin belgesini yan yana koyduk: **Samsung**'un destek sayfası (ABD ve BAE siteleri, İngilizce; alıntılar bizim çevirimiz), **Bosch** KGN76 serisi kullanım kılavuzu ve **Beko** 984611 EI No Frost kullanma kılavuzu. Tuş adları modele göre değişir; kendi kılavuzunla karşılaştır.

Olası arızayı benservis.com'daki teşhisten öğrenebilirsin.

> ⚠️ **Önce şunu bil:** Samsung, buzdolabını resetlemeyi **neredeyse hiç önermediğini** yazıyor. Reset, buzdolabında saklanan **hata kodu geçmişini ve tanı bilgilerini siler.** Bu da teknisyenin arızayı bulmasını zorlaştırabilir. Ekranda kod varsa resetlemeden önce fotoğrafını çek.

## Ne zaman resetlemeli?

Samsung'a göre fişi çekip yeniden başlatmak üç durumda yerinde: sorun giderme adımları seni buna yönlendirdiyse, buzdolabını **taşıyorsan** ya da **temizliyorsan.** Bir istisna daha var: **88 88** gibi bazı kodlar elektrik kesintisinden sonra görülebilir ve buzdolabının düzgün açılmadığı anlamına gelir. Bu durumda Samsung'a göre reset yeterli olabilir.

Diğer kodlarda Samsung, kodu silmeye çalışmak yerine sorun gidermeyi ve gerekirse servisi öneriyor. Kodların anlamı için [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) ve [Bosch buzdolabı hata kodları](/blog/bosch-buzdolabi-hata-kodlari/) yazılarına bak.

## Adım adım: buzdolabını resetleme

**1. Ekranın fotoğrafını çek.** Samsung'un ilk önerisi bu: mümkünse resetlemeden önce **hata kodunun fotoğrafını** çek. Reset hata geçmişini siler; fotoğraf, servise ne gördüğünü anlatmanın tek yolu olabilir.

**2. Gösteri modunu ayır.** Mağaza teşhiri için yapılan bu mod, soğutma yokmuş gibi görünür. **Samsung'da** ekranda "OF OF" ya da "O FF" yazıyorsa bu **soğutma kapalı (demo) modudur**; Samsung'a göre buzdolabını resetlemene gerek yok, demo modunu kapatman yeter. **Bosch'ta** cihaz soğutmuyor ama göstergeler ve aydınlatma yanıyorsa kılavuz **sergileme modunu** gösteriyor. KGN76 kılavuzundaki sıra: cihazı kapat, 2 dakika bekle, tekrar aç, 1 dakika bekle ve ardından soğutucu bölmesi tuşunu 4 akustik sinyal duyulana kadar basılı tut. Kısa süre sonra soğutup soğutmadığını kontrol et.

**3. Alarmı sustur.** Ses bir arıza değil, uyarı olabilir. Bosch'ta kapak uzun süre açık kalırsa **kapı alarmı** devreye girer; kapağı kapat ya da alarm tuşuna bas, ikaz sesi kapanır. Dondurucu çok ısınırsa **sıcaklık alarmı** çalar; Bosch'a göre bu, cihaz yeni çalıştırıldığında, çok miktarda taze besin konduğunda ya da kapak uzun süre açık kaldığında olabilir.

**4. Panelden kapatıp aç.** Bosch kılavuzunda "sıcaklık derecesi yapılmış ayardan çok farklı" satırının çözümü tam olarak bu: **cihazı kapat** (kapatma tuşunu 3 saniye basılı tut) ve **yaklaşık 5 saniye sonra yeniden aç.** Sıcaklık çok yüksekse birkaç saat sonra, çok düşükse ertesi gün yeniden kontrol et.

**5. Fişi çek ve bekle.** Tam yeniden başlatma bu. **Samsung:** fişi çek (ya da sigortayı kapat), elektrik yükünün boşalması için **yaklaşık beş dakika** bekle, sonra yeniden aç. **Beko:** fişi prizden çektikten sonra yeniden takmak için **en az 5 dakika** bekle. Beko'nun diğer uyarıları: fişe ıslak elle dokunma, fişi kablosundan değil fişten tutarak çek, priz gevşekse fişi takma.

**6. Kompresörün devreye girmesini bekle.** Fişi taktın, ışık yandı ama motor sesi yok mu? Beko'ya göre fiş çıkarılıp takıldığında soğutma sistemindeki gazın basıncı henüz dengelenmediği için **kompresör koruyucu termiği atar.** Ürün **yaklaşık 6 dakika sonra** çalışmaya başlar; bu sürenin sonunda çalışmazsa servis çağır. Bosch'a göre de cihazı çalıştırdığında ayarlanan sıcaklığa **ancak birkaç saat sonra** ulaşılır; o zamana kadar yiyecek koyma.

**7. Bosch'ta kendi kendine testi çalıştır.** KGN76 kılavuzuna göre cihaz, müşteri hizmetlerinin giderebileceği arızaları gösteren bir test içeriyor. Sıra: cihazı kapat, fişi çek ya da sigortayı kapat, **5 dakika sonra** yeniden tak. Elektrik geldikten bir dakika sonra soğutucu bölmesi tuşunu ikinci bip sesine kadar 3–5 saniye basılı tut. Test sonunda **2 akustik sinyal** duyar ve ayarlı sıcaklığı görürsen cihaz sorunsuzdur. **5 sinyal** duyar ve LED'ler farklı parlaklıkta yanarsa müşteri hizmetlerine haber ver; LED'ler arıza hakkında bilgi verir.

## Üreticiler nerede ayrılıyor?

- **Bekleme süresi:** Fişten yeniden başlatmada Samsung yaklaşık 5 dakika, Beko en az 5 dakika diyor. Bosch'un panelden kapatıp açma adımında ise süre yaklaşık 5 **saniye**; fişin 5 dakika çekili kaldığı adım yalnız kendi kendine testte.
- **Gösteri modu:** Samsung'da ekranda "OF OF", Bosch'ta "göstergeler yanıyor ama soğutmuyor" belirtisiyle tanınıyor. Çıkış yolu modele göre değişiyor.
- **Ağ sıfırlama:** Samsung'un Wi-Fi'lı modellerinde ayrı bir ağ sıfırlama var: ekranda A ve r görünene kadar LOCK tuşunu yaklaşık 12 saniye basılı tut. Bu yalnız Wi-Fi ve ağ bilgilerini siler.

Markana özel adımlar için [Bosch buzdolabı resetleme](/blog/bosch-buzdolabi-resetleme/) ve [Siemens buzdolabı alarm resetleme](/blog/siemens-buzdolabi-alarm-resetleme/) yazılarına bak.

## Resetten sonra hâlâ sorun varsa

Kod geri geliyorsa, kompresör birkaç dakika sonra da çalışmıyorsa ya da Bosch testi beş sinyal verdiyse sorun resetle çözülecek türden değildir. Samsung da bu durumda kodu silmeye uğraşmak yerine servis istemeni öneriyor. Soğutma tarafı için [Beko buzdolabı soğutmuyor](/blog/beko-buzdolabi-sogutmuyor/) yazısındaki kontrollere bakabilirsin. Belirtiyi benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
