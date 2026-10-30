---
title: "Yazıcı boş sayfa yazdırıyor: Canon ve Epson kılavuzuna göre"
description: "Yazıcı boş kâğıt çıkarıyorsa sırayla bak: kâğıt ve kalite ayarı, boş sayfa atlama, püskürtme ucu deseni, kafa temizleme. Canon ve Epson kılavuzlarından."
slug: "yazici-bos-sayfa-yazdiriyor"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P45 (YK #197 boşluk, BOSLUK.md #103). Slug origin/main'de yok. Yakın yazılar: yazici-silik-basiyor (silik baskı, püskürtme denetimi), yazici-kartus-tanimiyor.
# Kaynak (#88): Canon PIXMA E410 series çevrimiçi el kitabı (Kağıt Boş/Yazdırma Bulanık/...) ve Epson L200 çevrimiçi kullanım kılavuzu (Çeşitli Çıktı Sorunları, Boş sayfa yazdırma). URL, md5 ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · Epson tank modellerde hava/mürekkep şarjı gibi bloglardaki öneriler (üretici belgesinde yok) · kafa sökme, kartuş dolumu · HP ve Brother (belge indirilmedi) · lazer yazıcı (belgeler mürekkep püskürtmeli).
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Yazdırma ayarlarında kâğıt tipini ve baskı kalitesini yüklü kâğıda göre ayarla."
  - "Sürücü ayarındaki kâğıt boyutunun yazıcıya yüklü kâğıtla aynı olduğunu kontrol et."
  - "Windows'ta Epson sürücüsünün Bakım penceresinde Boş Sayfayı Atla ayarına bak."
  - "Püskürtme ucu denetim desenini yazdır ve çizgilerin tam çıkıp çıkmadığına bak."
  - "Desen eksikse yazıcı kafası temizliğini çalıştır, desenini yeniden yazdır."
  - "İki temizlikten sonra düzelmediyse yoğun temizleme yap, gerekirse yazıcıyı kapatıp 24 saat sonra tekrarla."
  - "Kâğıdın yazdırılacak yüzünün doğru yönde olduğunu ve kartuşun sağlam takıldığını kontrol et."
  - "Yine boşsa sürücüyü kaldırıp yeniden kur; sonuç değişmezse servise başvur."
faq:
  - q: "Yazıcı neden boş sayfa çıkarır?"
    a: "Canon kılavuzu boş çıktıyı baskı kalitesi sorunlarıyla aynı başlıkta ele alıyor: kâğıt ve kalite ayarı yanlış olabilir, püskürtme uçları tıkalı olabilir, mürekkep bitmiş olabilir. Epson kılavuzunda ise sürücü ayarındaki kâğıt boyutu ya da Boş Sayfayı Atla ayarı da sayılıyor."
  - q: "Kafa temizliğini kaç kez yapabilirim?"
    a: "Canon kılavuzu temizliğin iki defa yapılmasını, düzelmezse yoğun temizlemeye geçilmesini istiyor. Yoğun temizlemeden sonra da düzelme yoksa yazıcıyı kapatıp 24 saat sonra bir yoğun temizleme daha öneriyor."
  - q: "Kartuş dolu görünüyor, yine de boş çıkabilir mi?"
    a: "Canon kılavuzuna göre kartuş sağlam takılı değilse mürekkep doğru püskürtülmeyebilir. Önce kartuşun yerine oturduğunu kontrol et, sonra desen yazdır."
images:
  coverAlt: "Yazıcının kâğıt çıkış tepsisinde tamamen boş bir sayfa ve yanında bakım düğmesine uzanan beyaz eldivenli sade siluet el"
  steps:
    - "Yazdırma ayarları penceresinde kâğıt tipi seçeneğini işaretleyen beyaz eldivenli sade siluet el"
    - "Bilgisayar ekranındaki kâğıt boyutu listesinin yanında yazıcının kâğıt tepsisi çizimi"
    - "Bakım penceresindeki onay kutusunu işaretleyen beyaz eldivenli sade siluet el"
    - "Yazıcıdan çıkan desen sayfasını ışığa tutup çizgilere bakan beyaz eldivenli sade siluet el"
    - "Yazıcının bakım düğmesine basan beyaz eldivenli sade siluet el"
    - "Yazıcının fişini prizden çeken beyaz eldivenli sade siluet el ve yanında saat çizimi"
    - "Kâğıdı yazdırılacak yüzü yukarı bakacak şekilde tepsiye koyan beyaz eldivenli sade siluet el"
    - "Bilgisayar ekranında yazıcı simgesi ve yanında servis çağırma telefon çizimi"
---

Yazıcı çalışıyor, motor sesi geliyor, kâğıt içeri girip dışarı çıkıyor. Ama çıkan sayfa bembeyaz. "Yazıcı boş sayfa yazdırıyor" diyenlerin çoğu önce kartuşu suçlar. Canon ve Epson'un kendi kılavuzları işe ayarlardan ve basit kontrollerden başlıyor; kartuş ya da kafa sırası sonra geliyor. Aşağıdaki adımlar bu iki kılavuzdan alındı.

> ⚠️ **Önce şu sınırı bil:** burada anlatılanların hepsi yazılım ayarı ve yazıcının kendi temizleme işlemidir. Yazıcının içini söküp kafayı ya da başka bir parçayı kurcalama; kılavuzlar da bunu istemiyor.

## Adım adım: boş sayfa çıktısı

**1. Kâğıt tipi ve kaliteyi ayarla.** Canon kılavuzunun ilk kontrolü, kâğıt ve baskı kalitesi ayarlarını denetlemek. Yazdırma penceresinde seçili kâğıt tipi, tepsideki kâğıtla aynı olmalı.

**2. Kâğıt boyutuna bak.** Epson kılavuzu, yazıcı sürücüsündeki ayarların kullandığın kâğıt boyutuna uygun olmasını istiyor. Sürücüde başka bir boyut seçiliyse çıktı beklediğin gibi gelmeyebilir.

**3. Boş Sayfayı Atla ayarına bak.** Epson, Windows'ta sürücünün Bakım penceresindeki Hız ve İlerleme düğmesine tıklayıp Boş Sayfayı Atla ayarının kontrol edilmesini söylüyor. Seçiliyse verilerin arasındaki boş sayfalar yazdırılmaz. Bu ayar Epson sürücüsüne ait; Canon kılavuzunda aynı ayar geçmiyor.

**4. Desen yazdır.** Canon, mürekkebin püskürtme uçlarından düzgün çıkıp çıkmadığını anlamak için püskürtme ucu denetim desenini yazdırmanı istiyor. Çizgiler tam çıkıyorsa uçlar sağlıklı demektir; çıkmıyorsa sıradaki adıma geç.

**5. Kafayı temizle.** Desen düzgün basılmadıysa Canon'a göre yazıcı kafası temizliğini çalıştır, ardından denetim desenini yeniden yazdır ve incele.

**6. Yoğun temizleme.** Canon'da temizlik iki defa yapıldıysa ve sorun sürüyorsa yoğun temizleme başlatılır. Yoğun temizlemeden sonra da düzelme yoksa yazıcıyı kapat ve 24 saat sonra bir yoğun temizleme daha çalıştır. Hâlâ düzelmediyse Canon, mürekkebin bitmiş olabileceğini yazıyor.

**7. Kâğıt yönü ve kartuş.** Tek yüzü yazdırılabilir kâğıtta yazdırılacak yüz yukarı bakmalı; Canon yanlış yüze yazdırmanın baskıyı kötüleştirebileceğini söylüyor. Kartuş sağlam takılı değilse mürekkep doğru püskürtülmeyebilir. Canon kılavuzu kartuşu çıkarıp geri takmayı ve tık sesiyle oturmasını bekleyip kapağı kapatmayı anlatıyor. Mürekkep bittiyse kartuş değiştirilir.

**8. Sürücüyü yeniden kur.** Epson'un boş sayfa başlığındaki son öneri, yazıcı sürücüsünü kaldırıp yeniden kurmak. Bu çözümlerden birini ya da birkaçını denedikten sonra Epson, sonucu görmek için yazıcının çalışma denetimini yaptırmanı istiyor. Sonuç değişmezse servis gerekir.

## İki kılavuz nerede ayrışıyor?

Canon boş çıktıyı baskı kalitesi başlığı altında ele alıyor ve çözümü ağırlıkla mürekkep hattında arıyor: ayar, desen, temizleme, kartuş. Epson L200 kılavuzu ise boş sayfayı çeşitli çıktı sorunları arasında sayıyor ve çözümü ağırlıkla sürücüde arıyor: kâğıt boyutu, Boş Sayfayı Atla, yeniden kurulum. Hangi yazıcın varsa o markanın kılavuzundaki sırayı izle.

Burada Canon PIXMA E410 ve Epson L200 çevrimiçi kılavuzları esas alındı. Başka modellerde menü adları değişebilir. İki kılavuz da mürekkep püskürtmeli yazıcılar için; lazer yazıcıda aynı adımlar geçerli olmayabilir.

## Boş sayfa kopyada çıkıyorsa

Çoğu yazıcı aynı zamanda tarayıcı. Boş sayfa bilgisayardan değil de kopyalarken çıkıyorsa Canon kılavuzu üç ek kontrol veriyor. Birincisi plaka camının kirli olup olmadığı; kılavuz camı temizlemeni istiyor. İkincisi orijinal belgenin plaka camına düzgün yerleştirilmesi. Üçüncüsü de belgenin kopyalanacak tarafının aşağı bakması. Belge ters konursa tarayıcı boş yüzü okur ve çıktı da bunu yansıtır. Aynı kılavuz, bu yazıcıdan alınmış bir çıktıyı orijinal olarak kullanırsan kalitenin düşebileceğini ve mümkünse bilgisayardan yeniden yazdırmanı söylüyor.

## Hangi sırayla gitmeli?

Kılavuzların ortak mantığı, kolaydan zora gitmek. Ayar kontrolü birkaç dakika sürer ve cihaza dokunmayı gerektirmez, bu yüzden önce o gelir. Ardından desen yazdırılır; çünkü desen, sorunun yazıcıda mı yoksa ayarda mı olduğunu gösteren en kısa sınav. Canon bu sırayı açıkça veriyor: desen, temizlik, ikinci temizlik, yoğun temizleme, bir gün bekleme, ikinci yoğun temizleme. Her işlemden sonra deseni yeniden yazdırıp önceki çıktıyla karşılaştır. Desen düzeldiyse bir sonraki işleme geçme.

Bu sıranın sonunda Canon mürekkebin bitmiş olabileceğini söylüyor ve kartuşun değiştirilmesini istiyor. Kartuş değiştirmek kılavuza göre kullanıcının yapabileceği bir iş; ama kafayı ya da yazıcının içindeki başka bir parçayı çıkarmak değil. Orada servis devreye girer.

## Boşun yanında silik çıktı da varsa

Baskı boş değil de silik ya da soluk çıkıyorsa [yazıcı silik basıyor](/blog/yazici-silik-basiyor/) yazısındaki desen okuma adımları işine yarar. Kartuş hiç tanınmıyorsa [yazıcı kartuş tanımıyor](/blog/yazici-kartus-tanimiyor/) yazısına bak.

## Servise giderken not al

Kılavuzdaki sıranın hepsini denediysen elinde artık somut bir tablo var: hangi ayarı kontrol ettin, desen nasıl çıktı, kaç temizlik yaptın. Servise bunu anlatmak, "yazıcı boş basıyor" demekten çok daha hızlı sonuç verir.

Yanına şunları al:

1. Yazıcının marka ve modelini yaz.
2. Denetim deseninin çıktısını sakla.
3. Kaç kez temizlik yaptığını ve ne zaman yaptığını not et.

Cihazının belirtisine göre yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
