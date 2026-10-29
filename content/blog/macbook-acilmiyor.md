---
title: "MacBook açılmıyor: siyah ekran ve elmada kalma için adımlar"
description: "MacBook Air ya da Pro açılmıyor, siyah ekranda ya da Apple logosunda kalıyorsa Apple'ın Türkçe destek sayfalarındaki sırayla ele; servis zamanını gör."
slug: "macbook-acilmiyor"
date: "2026-10-29"
category: "Bilgisayar / yazıcı"
guide:
  difficulty: "Orta"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Mac ile birlikte gelen güç adaptörü ve kablo", "İnternet bağlantısı (Kurtarma için)"]
steps:
  - "Güç kablosunun hasarsız olduğunu, MacBook'a ve çalışan bir prize sağlam takıldığını kontrol et; varsa uyumlu başka bir adaptör dene."
  - "Güç düğmesini ya da Touch ID'yi yaklaşık 10 saniye basılı tut, sonra güç düğmesine normal şekilde basıp bırak."
  - "Yazıcı, sürücü, USB hub ve telefon dahil tüm aksesuarları çıkar ve 2. adımı tekrarla."
  - "Ekranda soru işareti ya da üzeri çizili daire gibi bir simge varsa MacBook açıktır ama başlamıyordur; simgeye göre Apple'ın ilgili adımına geç."
  - "Apple logosunda takılıyorsa 10 saniyeyle kapat, aksesuarları çıkarıp yeniden aç."
  - "Siyah ya da boş ekranda kalıyorsa macOS Kurtarma'dan başlat ve Disk İzlencesi ile başlangıç diskini onar."
  - "Sorun sürerse macOS Kurtarma'dan macOS'i yeniden yükle; Intel tabanlı MacBook'ta SMC'yi sıfırla."
  - "MacBook açılıyorsa Apple Tanıları'nı çalıştır ve çıkan referans kodunu not et; açılmıyorsa servis al."
faq:
  - q: "MacBook'um açılmıyor ve şarj da olmuyor, nereden başlamalıyım?"
    a: "Apple'ın 'Mac'iniz açılmıyorsa' sayfası ilk iş olarak güç bağlantılarını kontrol etmeni ister: kablonun hasarsız olması, hem Mac'e hem çalışan bir prize sağlam takılı olması. Uyumlu başka bir güç kablosu ya da adaptörün varsa onu dene. Şarj tarafındaki ayrıntılı eleme için Apple'ın USB-C ve MagSafe güç adaptörü sayfalarına bakabilirsin."
  - q: "Açılışta siyah ya da gri ekran görmek normal mi?"
    a: "Apple'a göre Mac başlatılırken en az bir kez boş ekran (siyah, gri ya da mavi) görünmesi gerekir. Sorun, Mac'in açılıyor gibi görünüp bu boş ekranda takılı kalmasıdır. Apple logosu ekranının yerini de başlatma sırasında birkaç kez boş ekran alabilir."
  - q: "Güncelleme sırasında elmada uzun süre bekliyor, bozuldu mu?"
    a: "Apple, macOS güncellenirken ya da sürümü yükseltilirken Apple logosunun ya da ilerleme çubuğunun normalden uzun süre ekranda kalabileceğini, ilerleme çubuğunun yavaş hareket edip uzun süre duraklayabileceğini söyler. Bu yüzden yüklemenin akşam başlatılmasını önerir. Takılma güncelleme dışında oluyorsa 5. adımdaki sırayı izle."
  - q: "SMC sıfırlamayı her MacBook'ta yapmalı mıyım?"
    a: "Hayır. Apple, Apple Silicon çipli Mac'te SMC'nin yeniden başlatma ya da kapatıp açma ile otomatik sıfırlandığını ve başka bir adıma gerek olmadığını belirtir. Tuş kombinasyonlu SMC sıfırlama yalnız Intel tabanlı Mac'ler içindir ve T2 çipli olup olmamasına göre adımları değişir."
images:
  coverAlt: "Masada kapağı açık, ekranı kapalı duran dizüstü bilgisayar"
  steps:
    - "Dizüstüne ve duvar prizine takılı şarj kablosu, sade çizim"
    - "Klavyenin sağ üst köşesindeki güç düğmesine basılı tutan sade el silueti ve süre simgesi"
    - "Dizüstünden çıkarılmış USB hub, harici sürücü ve kablolar yan yana"
    - "Dizüstü ekranında ortada yanıp sönen soru işareti simgesi"
    - "Dizüstü ekranında ortada başlangıç simgesi ve altında ilerleme çubuğu"
    - "Dizüstü ekranında kurtarma penceresi ve disk simgesi, sade çizim"
    - "Dizüstü ekranında yükleme penceresi ve aşağı ok simgesi"
    - "Dizüstü ekranında test ilerleme çubuğu ve yanında kısa bir kod satırı"
---

Güç düğmesine basıyorsun ama MacBook'tan ses yok; ya da ekran açılıyor, siyah kalıyor veya Apple logosunda donuyor. Google'da "macbook açılmıyor" aramasının hemen altında "elmada kalıyor", "siyah ekran" ve "şarj olmuyor" önerileri çıkıyor; yani bu üç tablo en sık yaşananlar. Apple'ın Türkçe destek sayfaları her biri için ayrı bir sıra veriyor. Aşağıdaki adımların hepsi bu sayfalardan alındı ve MacBook Air ile MacBook Pro için geçerli.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 💻 **Önce şu ayrımı yap:** MacBook **hiç tepki vermiyor mu**, yoksa ekranda **bir şey görünüyor mu** (soru işareti, Apple logosu, boş ekran)? Apple'a göre ekranda bir şey görüyorsan Mac açıktır ama tamamen başlamıyordur.

## Adım adım: MacBook açılmıyorsa Apple'ın sırası

**1. Güç bağlantısını kontrol et.** Güç kablosunun hasarsız olduğundan, hem MacBook'a hem de çalışan bir prize sağlam takıldığından emin ol. Uyumlu başka bir güç kablon ya da adaptörün varsa onu dene.

**2. Güç düğmesini basılı tut.** Güç düğmesini yaklaşık **10 saniye** basılı tut. Touch ID'li MacBook'larda Touch ID'yi basılı tutarsın; Apple, hafifçe dokunmak yerine aşağı bastırmanı ister. Sonra güç düğmesine normal şekilde basıp bırak.

**3. Aksesuarları çıkar.** Yazıcı, sürücü, USB hub ve mobil aygıtlar dahil tüm aksesuarları MacBook'tan çıkar ve 2. adımı tekrarla. Apple'a göre sorun aksesuarlardan birinde ya da kablosunda olabilir.

**4. Ekrana bak.** Yanıp sönen soru işareti, üzerinde çizgi olan bir daire ya da başka bir simge görüyorsan MacBook açıktır ama başlamıyordur. Apple'ın "Mac'iniz tamamen başlatılmıyorsa" sayfası her simge için ayrı yol gösterir.

**5. Elmada kalıyorsa.** MacBook kapanana kadar güç düğmesini yaklaşık 10 saniye basılı tut ve yeniden aç. Sorun sürerse yeniden kapat, gerekli olmayan tüm aksesuarları çıkar ve tekrar aç.

**6. Siyah ekranda kalıyorsa.** 10 saniyeyle kapatıp yeniden aç. Düzelmezse **macOS Kurtarma'dan** başlat ve Kurtarma'dayken **Disk İzlencesi** ile başlangıç diskini onar, sonra yeniden başlat.

**7. macOS'i yeniden yükle, SMC'ye bak.** Boş ekran ya da Apple logosu sürüyorsa Kurtarma'dan yeniden başlat ve macOS'i Kurtarma'dan yeniden yükle. Eski, Intel tabanlı bir MacBook kullanıyorsan Apple SMC'yi sıfırlamanın yardımcı olabileceğini söyler.

**8. Apple Tanıları ya da servis.** MacBook açılabiliyor ve donanımdan şüpheleniyorsan Apple Tanıları'nı çalıştır. Hâlâ açılmıyorsa Apple'a göre servise gitmesi gerekebilir.

## 1) Intel MacBook'ta SMC sıfırlama

Apple Silicon çipli MacBook'ta bu adıma gerek yok; Apple'a göre yeniden başlatmak ya da kapatıp açmak yeterlidir, SMC otomatik sıfırlanır.

**T2 çipli Intel MacBook:** Mac'i kapat. Dahili klavyede Kontrol, Option ve Shift tuşlarını basılı tut; Mac açılabilir. Üç tuşu 7 saniye daha tut, ardından güç düğmesini de basılı tut. Dört tuşu 7 saniye daha tutup hepsini bırak. Birkaç saniye bekle ve güç düğmesiyle aç.

**T2 çipi olmayan Intel MacBook:** Mac'i kapat. Shift, Kontrol ve Option tuşlarını basılı tutarken güç düğmesine de bas; dördünü 10 saniye tut, bırak ve güç düğmesiyle aç.

## 2) Apple Tanıları nasıl başlatılır?

Apple önce gerekli olmayan harici aygıtları çıkarmanı ve MacBook'u sert, düz ve iyi havalandırılan bir yüzeye koymanı ister.

- **Apple Silicon:** Güç düğmesini basılı tut; Seçenekler'i görünce bırak. Ardından Mac yeniden başlatılana kadar Komut (⌘)-D tuşlarını basılı tut.
- **Intel:** Mac'i açar açmaz D tuşunu basılı tut; işe yaramazsa Option (⌥)-D dene. İlerleme çubuğu ya da dil seçimi gelince bırak.

Test bitince referans kodu çıkarsa not et. Apple, servise gittiğinde bu kodu vermeni önerir.

## 3) Ekrandaki simge ne anlatıyor?

Apple'ın "Mac'iniz tamamen başlatılmıyorsa" sayfası açılışta görülebilecek ekranları tek tek açıklar. Birkaç örnek:

- **Yanıp sönen soru işaretli klasör:** Apple'a göre başlangıç diski artık kullanılamıyordur ya da çalışan bir Mac işletim sistemi içermiyordur. Kurtarma'dan başlatıp Disk İzlencesi ile onarmak Apple'ın ilk adımıdır.
- **İçinde uyarı simgesi olan küre:** Mac internet üzerinden macOS Kurtarma'dan başlatılmaya çalışılmış ama başlatılamamıştır.
- **Kilit simgesi:** Mac'te firmware parolası kullanılıyordur; devam etmek için bu parolayı girmen gerekir.
- **Fare ya da klavye çizimi:** Mac yerleşik ya da harici farenizi, izleme dörtgeninizi veya klavyenizi algılayamıyordur.
- **Thunderbolt ya da USB simgesi:** Mac hedef disk modundadır.

Gördüğün ekranı not etmek, hem doğru Apple sayfasını bulmanı hem de servise net bilgi vermeni sağlar.

## 3) Buradan sonrası servis işi

Kurtarma'dan da başlamıyorsa Apple, Apple Silicon ya da T2 çipli Mac'lerde firmware'in yeniden etkinleştirilmesi ya da geri yüklenmesi gerekebileceğini söyler. Bu iş ve kasanın içine ait her şey servis alanıdır. Not ettiğin belirtiler ve Tanılar kodu servise hız kazandırır.

Marka bağımsız genel eleme için [bilgisayar açılmıyor, ekran gelmiyor](/blog/bilgisayar-acilmiyor-ekran-gelmiyor/) rehberine de bakabilirsin.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
