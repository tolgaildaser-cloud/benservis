---
title: "Mac mini ekrana görüntü gelmiyor ya da açılmıyor"
description: "Mac mini'de monitör siyah kalıyorsa kablo, hub, Ekranları Algıla ve parlaklığı Apple'ın sırasıyla kontrol et; Mac mini hiç açılmıyorsa güç adımlarına geç."
slug: "mac-mini-ekrana-goruntu-gelmiyor"
date: "2026-10-29"
category: "Bilgisayar / yazıcı"
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Varsa yedek görüntü kablosu", "Klavye ve fare"]
steps:
  - "Mac mini'nin güç kablosunun hasarsız ve prize sağlam takılı olduğunu, ekranın da prize bağlı, Mac mini'ye bağlı ve açık olduğunu kontrol et."
  - "Ekranın güç kablosunun ve görüntü kablosunun her iki ucunun da sağlam ve doğru bağlandığından emin ol."
  - "Ekran hub ya da dock üzerinden bağlıysa doğrudan Mac mini'deki bir bağlantı noktasına bağla; adaptör kullanıyorsan uyumluluğunu kontrol et."
  - "Ekranın bağlantısını kesip yeniden bağla, Mac mini'yi uyutup uyandır ya da Ekranlar ayarında Option tuşuyla Ekranları Algıla'yı kullan."
  - "Mac mini'yi yeniden başlat; olmuyorsa güç düğmesini yaklaşık 10 saniye basılı tutup kapat ve yeniden aç."
  - "Ekranın parlaklığının kısılmadığını kontrol et; Apple dışı ekranda ekranın kendi menüsünü kullan."
  - "Bağlı ekran sayısının ve seçtiğin çözünürlüğün Mac mini modelinin desteklediği sınırı aşmadığını teknik özelliklerden kontrol et."
  - "macOS'i ve ekranın firmware'ini güncelle; Mac mini hiç açılmıyorsa aksesuarları çıkar ve Intel modelde SMC'yi sıfırla."
faq:
  - q: "Mac mini çalışıyor ama monitör 'sinyal yok' diyor, sorun hangisinde?"
    a: "Apple'ın harici ekran sayfası önce kablo ve bağlantıları, sonra Mac'in ekranı algılayıp algılamadığını kontrol etmeni ister. Apple dışı bir ekranda parlaklığı ekranın kendi menüsünden ayarlayamıyorsan ve ekran karanlıksa, Apple'a göre ekranda güç olmayabilir ya da ekran arızalı olabilir. Genel monitör elemesi için benservis'in monitör rehberine de bakabilirsin."
  - q: "Adaptörle bağlayınca görüntü gelmiyor, neden?"
    a: "Apple'a göre görüntü kablosu ya da kullandığın adaptör ekranın çözünürlüğünü ve yenileme hızını desteklemiyorsa ekran karanlık kalır ya da daha düşük çözünürlük kullanır. Thunderbolt veya USB-C adaptörü kullanıyorsan adaptör DisplayPort Alt Mode, Thunderbolt 3 ya da Thunderbolt 4 ile uyumlu olmalıdır. 8K 60 Hz ve 4K 240 Hz bağlantılar için Apple adaptörleri desteklemez; ekranı doğrudan HDMI'a bağla."
  - q: "HDMI ile bağladım, görüntü var ama ses yok."
    a: "Apple, Sistem Ayarları > Ses > Çıkış bölümünde HDMI aygıtının seçili olduğundan emin olmanı ister. Mac mini'den bağlanıyorsan ve bilgisayarın kulaklık jakına bir ses aygıtı takılıysa onun bağlantısını kesmen gerekir."
  - q: "Mac mini'nin hiç ışığı yanmıyor, ne yapmalıyım?"
    a: "Bu durumda Apple'ın 'Mac'iniz açılmıyorsa' adımları geçerlidir: güç kablosunu ve prizi kontrol et, güç düğmesini yaklaşık 10 saniye basılı tutup sonra normal bas, tüm aksesuarları çıkarıp tekrar dene. Intel tabanlı modelde SMC'yi sıfırla. Hâlâ açılmıyorsa Apple'a göre servise gitmesi gerekebilir."
images:
  coverAlt: "Masada küçük kare masaüstü bilgisayar ve yanında ekranı siyah bir monitör"
  steps:
    - "Küçük kare bilgisayara ve monitöre bağlı güç kabloları, sade çizim"
    - "Monitör ile bilgisayar arasındaki görüntü kablosunun iki ucu büyütülmüş"
    - "Hub'dan çıkarılıp doğrudan bilgisayarın arka bağlantı noktasına takılan kablo, sade el silueti"
    - "Ekranda ayarlar penceresi ve klavyede vurgulanmış Option tuşu"
    - "Bilgisayarın arkasındaki güç düğmesine basılı tutan sade el silueti ve süre simgesi"
    - "Monitörün kenarındaki tuşlar ve ekranda parlaklık çubuğu"
    - "Bilgisayara bağlı iki monitör ve yanında teknik özellik listesi simgesi"
    - "Ekranda güncelleme ilerleme çubuğu, yanında prizden çekilmiş güç kablosu"
---

Mac mini'yi açtın, fan dönüyor gibi ama monitörde görüntü yok. Ya da Mac mini'nin kendisinden hiç tepki gelmiyor. Google'da "mac mini ekrana görüntü gelmiyor" ve "mac mini açılmıyor" aramaları bu iki tabloyu soruyor. Mac mini'nin yerleşik ekranı olmadığı için Apple'ın Türkçe destek sayfası ikisini birlikte ele alıyor: önce harici ekranın güce ve Mac'e bağlı, açık olduğunu doğrulamanı istiyor. Bu yazıdaki her adım Apple'ın resmî sayfalarından alındı. Harici ekran adımları Apple'ın genel Mac sayfasından geldiği için Mac Studio'da da aynıdır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 🖥️ **Önce şu ayrımı yap:** Mac mini **çalışıyor ama ekran mı siyah**, yoksa Mac mini **hiç açılmıyor mu**? Çalışıyorsa 2–7. adımlar ekran tarafı içindir. Hiç açılmıyorsa 1., 5. ve 8. adımlara odaklan.

## Adım adım: Mac mini'de görüntü yoksa Apple'ın sırası

**1. Güç ve ekranı doğrula.** Mac mini'nin güç kablosunun hasarsız olduğundan ve çalışan bir prize sağlam takıldığından emin ol. Apple, yerleşik ekranı olmayan Mac'lerde kullandığın harici ekranın **güç kaynağına bağlı, Mac'e bağlı ve açık** olduğunu kontrol etmeni ister.

**2. Kabloların iki ucunu kontrol et.** Ekranın güç kablosunun ve görüntü kablosunun her iki ucunun da sağlam ve doğru bağlandığından emin ol. Apple, farklı bağlantı noktalarının birbirine benzeyebileceği için doğru porta takarken dikkatli olmanı ister.

**3. Hub'ı aradan çıkar.** Ekran bir hub ya da dock üzerinden bağlıysa doğrudan Mac mini'deki bir bağlantı noktasına bağla. Thunderbolt veya USB-C adaptörü kullanıyorsan adaptör DisplayPort Alt Mode, Thunderbolt 3 ya da Thunderbolt 4 ile uyumlu olmalı.

**4. Ekranı yeniden algılat.** Ekranın Mac'le ve güç kaynağıyla bağlantısını kesip yeniden bağla. Mac mini'yi uyku moduna alıp uyandır. Apple menüsünden Sistem Ayarları > Ekranlar'a git, **Option** tuşunu basılı tutarak çıkan **Ekranları Algıla** düğmesini tıkla.

**5. Yeniden başlat.** Mac mini'yi yeniden başlat. Yeniden başlatamıyorsan güç düğmesini yaklaşık 10 saniye basılı tutarak kapat, sonra basıp bırakarak tekrar aç.

**6. Parlaklığı kontrol et.** Ekran karanlıksa parlaklığın kısılmadığından emin ol. Apple dışı bir ekranda parlaklığı ekranın kendi tuşları ve menüsüyle ayarlaman gerekebilir.

**7. Sınırları kontrol et.** Mac mini'nin aynı anda destekleyebileceği harici ekran sayısını aşarsan ekran kararır. Desteklenen en yüksek çözünürlüğü ya da yenileme hızını aşan bir ayar seçtiysen de ekran kararabilir. Mac mini modelinin teknik özelliklerine bak.

**8. Güncelle ya da güç adımlarına dön.** En son macOS güncellemelerini kur; Apple dışı bir ekransa üreticinin en son firmware'ini kullandığından emin ol. Mac mini hiç açılmıyorsa tüm aksesuarları çıkarıp güç düğmesi adımını tekrarla ve Intel modelde SMC'yi sıfırla.

## 1) HDMI ile bağlıyorsan

Apple'a göre HDMI bağlantı noktası olan Mac'ler HDMI kablosuyla doğrudan bağlanır; Thunderbolt ya da USB-C porttan bağlanacaksan Apple USB-C Dijital AV Çoklu Bağlantı Noktası Adaptörü gibi bir adaptör gerekir. Apple, 8K 60 Hz ve 4K 240 Hz bağlantılarda adaptörlerin desteklenmediğini belirtir; bu durumda ekranı doğrudan Mac'e bağla. 8K bağlantı için Ultra Yüksek Hızlı 48 Gb/sn HDMI kablosu gerekir.

Görüntü ekranın kenarından taşıyorsa Apple, TV ya da projektörde geniş tarama veya dar tarama ayarını düzeltmeni önerir.

## Görüntü var ama bulanık ya da düşük çözünürlüklüyse

Apple'a göre ekranın güç varsa ve düzgün bağlanmışsa Mac ekranı otomatik algılar ve masaüstü ekranda görünür. Ekran çalışıyor ama görüntü bulanıksa çözünürlüğü değiştirmeyi dene: Apple, ekranın varsayılan yerel çözünürlüğünün ölçeklenmiş bir çözünürlükten daha net olabileceğini söyler. Ayarı Apple menüsü > Sistem Ayarları > Ekranlar bölümünden yaparsın. Apple dışı bazı ekranlarda görüntü netliğini ayarlamak için kendi yerleşik kontrolleri de bulunur.

Birden fazla ekran bağlıyorsan Apple önce **en yüksek çözünürlüğe sahip ekranı** bağlamanı önerir. Aynı anda kaç ekran kullanabileceğin Mac mini modeline ve her ekranın çözünürlüğü ile yenileme hızına bağlıdır.

Mac mini'yi ilk kez kuruyorsan ve ekranda güç düğmesinin yanında Magic Mouse ya da Magic Keyboard çizimi görüyorsan, Apple'a göre Mac harici fareni ya da klavyeni algılayamıyordur. Görüntü geliyor demektir; sorun giriş aygıtı bağlantısındadır.

## 2) Intel Mac mini'de SMC sıfırlama

Apple Silicon çipli Mac mini'de bu adıma gerek yok; yeniden başlatmak yeterlidir. Intel tabanlı Mac mini'de Apple'ın masaüstü yönergesi şudur: Mac'i kapat ve **güç kablosunu çıkar**. 15 saniye bekle, kabloyu tekrar tak. 5 saniye bekle ve güç düğmesine basarak aç.

## 3) Hâlâ görüntü yoksa

Apple'ın son kontrolü Mac'in gerçekten açıldığından emin olmaktır. Açılıyor ama tamamen başlamıyorsa Apple'ın "Mac'iniz tamamen başlatılmıyorsa" sayfasındaki ekran simgelerine bak. Ekranın kendisinden şüpheleniyorsan genel eleme için [monitör sinyal yok](/blog/monitor-sinyal-yok/) rehberi yardımcı olur.

Tüm bu adımlara rağmen Mac mini açılmıyorsa Apple'a göre servise gitmesi gerekebilir. Kasanın içi servis işidir.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
