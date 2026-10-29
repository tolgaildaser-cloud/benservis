---
title: "iMac açılmıyor ya da elmada kalıyor: Apple'ın adımları"
description: "iMac açılmıyor, siyah ekranda ya da Apple logosunda takılıyorsa güç, aksesuar, SMC ve macOS Kurtarma adımlarını Apple'ın resmî sırasıyla uygula."
slug: "imac-acilmiyor"
date: "2026-10-29"
category: "Bilgisayar / yazıcı"
guide:
  difficulty: "Orta"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["İnternet bağlantısı (Kurtarma için)", "Varsa uyumlu yedek güç kablosu"]
steps:
  - "Güç kablosunun hasarsız olduğunu, iMac'e ve çalışan bir prize sağlam takıldığını kontrol et; varsa uyumlu başka bir güç kablosu dene."
  - "Güç düğmesini yaklaşık 10 saniye basılı tut, ardından normal şekilde basıp bırak."
  - "Yazıcı, sürücü, USB hub ve telefon dahil tüm aksesuarları çıkar ve güç düğmesi adımını tekrarla."
  - "Intel tabanlı iMac'te SMC'yi sıfırla: kapat, güç kablosunu çıkar, 15 saniye bekle, tak, 5 saniye bekle ve aç."
  - "Apple logosu macOS güncellemesi sırasında uzun kalıyorsa yüklemenin bitmesini bekle."
  - "Logoda takılı kalıyorsa 10 saniyeyle kapat, gerekli olmayan aksesuarları çıkarıp yeniden aç."
  - "Sorun sürerse macOS Kurtarma'dan başlat, Disk İzlencesi ile başlangıç diskini onar; düzelmezse macOS'i Kurtarma'dan yeniden yükle."
  - "iMac açılabiliyorsa Apple Tanıları'nı çalıştır; açılmıyorsa servis al."
faq:
  - q: "iMac'in ekranı siyah ama fan sesi geliyor, açık mı?"
    a: "Apple'a göre Mac açılıyor gibi görünüp boş bir ekranda (siyah, gri ya da mavi) takılıyorsa sorun yazılımla ilgili olabilir. Önce güç düğmesini yaklaşık 10 saniye basılı tutup kapat ve yeniden aç. Düzelmezse macOS Kurtarma'dan başlatıp Disk İzlencesi ile başlangıç diskini onarmak Apple'ın sonraki adımıdır."
  - q: "SMC sıfırlama iMac'te dizüstüden farklı mı?"
    a: "Evet. Apple'ın SMC sayfasına göre masaüstü Mac'te tuş kombinasyonu yoktur: Mac'i kapatırsın, güç kablosunu çıkarırsın, 15 saniye bekleyip kabloyu takarsın, 5 saniye sonra güç düğmesiyle açarsın. Bu yalnız Intel tabanlı iMac içindir; Apple Silicon çipli Mac'te SMC yeniden başlatmayla otomatik sıfırlanır."
  - q: "Kurtarma'dan da başlamıyorsa ne olacak?"
    a: "Apple, Apple Silicon çipli ya da Apple T2 Güvenlik Çipli bir Mac Kurtarma'dan başlamıyorsa firmware'in yeniden etkinleştirilmesi ya da geri yüklenmesi gerekebileceğini söyler. Boş ekranla başlamaya devam eden Mac'in servise ihtiyacı olabilir. Bu aşama kullanıcı işinin dışındadır."
  - q: "Açılışta ekranda soru işareti çıkıyor, ne demek?"
    a: "Apple'a göre ekranda yanıp sönen bir soru işareti, üzerinde çizgi olan bir daire ya da başka bir simge görünüyorsa Mac açıktır ama tamamen başlamıyordur. Apple'ın 'Mac'iniz tamamen başlatılmıyorsa' sayfası her simge için ayrı adımlar verir; simgeyi not edip o sayfadaki ilgili başlığa geç."
images:
  coverAlt: "Çalışma masasında ekranı kapalı duran tümleşik masaüstü bilgisayar"
  steps:
    - "Tümleşik masaüstü bilgisayarın arkasına ve duvar prizine takılı güç kablosu, sade çizim"
    - "Ekranın arkasındaki güç düğmesine basılı tutan sade el silueti ve süre simgesi"
    - "Bilgisayardan çıkarılmış yazıcı kablosu, harici sürücü ve USB hub yan yana"
    - "Prizden çekilmiş güç kablosu ve yanında süre simgesi"
    - "Ekranın ortasında başlangıç simgesi ve altında yavaş ilerleyen çubuk"
    - "Ekranda takılı logo ve yanında kapatma simgesi"
    - "Ekranda kurtarma penceresi ve disk onarma simgesi, sade çizim"
    - "Ekranda test ilerleme çubuğu ve yanında servis çantası simgesi"
---

iMac'in güç düğmesine bastın; ya hiçbir şey olmuyor, ya ekran siyah kalıyor ya da Apple logosu ekrana gelip orada donuyor. Google'da "imac açılmıyor" aramasına gelen öneriler tam bu üç tabloyu söylüyor: "siyah ekran" ve "elmada kalıyor". Bu yazıdaki her adım Apple'ın Türkçe destek sayfalarından alındı. iMac'i dizüstülerden ayıran iki nokta var: ekran gövdeyle birlikte olduğu için harici ekran ihtimali yok ve Intel modellerde SMC sıfırlama dizüstüden farklı yapılıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 🖥️ **Önce şu ayrımı yap:** iMac **hiç tepki vermiyor mu**, yoksa ekranda **Apple logosu, soru işareti ya da boş ekran** mı var? Apple'a göre ekranda bir şey görünüyorsa Mac açıktır ama başlamıyordur; bu durumda 5. adımdan devam et.

## Adım adım: iMac açılmıyorsa Apple'ın sırası

**1. Güç bağlantısını kontrol et.** Güç kablosunun hasarsız olduğundan, hem iMac'e hem de çalışan bir prize sağlam takıldığından emin ol. Uyumlu başka bir güç kablon varsa onu dene.

**2. Güç düğmesini basılı tut.** iMac'teki güç düğmesini yaklaşık **10 saniye** basılı tut. Ardından güç düğmesine normal şekilde basıp bırak.

**3. Aksesuarları çıkar.** Yazıcı, sürücü, USB hub ve mobil aygıtlar dahil tüm aksesuarları çıkar ve 2. adımı tekrarla. Apple'a göre sorun aksesuarlardan birinde ya da kablosunda olabilir.

**4. Intel iMac'te SMC'yi sıfırla.** Eski, Intel tabanlı bir iMac kullanıyorsan iMac'i kapat ve **güç kablosunu çıkar**. 15 saniye bekle, kabloyu tekrar tak. 5 saniye bekle ve güç düğmesine basarak aç. Apple Silicon çipli iMac'te bu adıma gerek yok.

**5. Güncelleme sürüyorsa bekle.** macOS güncellenirken ya da sürümü yükseltilirken Apple logosu veya ilerleme çubuğu normalden uzun kalabilir; çubuk yavaş ilerleyip uzun süre duraklayabilir. Apple bu yüzden yüklemeyi akşam başlatmanı önerir.

**6. Logoda takılıyorsa kapatıp aç.** Başlatma Apple logosundan ileri hiç geçmiyorsa iMac kapanana kadar güç düğmesini yaklaşık 10 saniye basılı tut ve yeniden aç. Sorun sürerse yeniden kapat, gerekli olmayan tüm aksesuarları çıkar ve tekrar aç.

**7. macOS Kurtarma.** Yine olmazsa iMac'i **macOS Kurtarma'dan** başlat ve **Disk İzlencesi** ile başlangıç diskini onar. Sorun devam ederse macOS'i Kurtarma'dan yeniden yükle.

**8. Apple Tanıları ya da servis.** iMac açılıyor ama donanımdan şüpheleniyorsan Apple Tanıları'nı çalıştır. Hiç açılmıyorsa Apple'a göre servise gitmesi gerekebilir.

## 1) Siyah ekranda kalıyorsa

Apple'a göre Mac başlatılırken en az bir kez boş ekran (siyah, gri ya da mavi) görünmesi normaldir. Sorun, iMac'in açılıyor gibi görünüp bu ekranda kalmasıdır. Apple'ın sırası şöyle:

- Güç düğmesini yaklaşık 10 saniye basılı tutarak kapat, yeniden aç.
- macOS Kurtarma'dan başlat. Başlıyorsa Disk İzlencesi ile başlangıç diskini onar ve yeniden başlat.
- Hâlâ boş ekranla başlıyorsa Kurtarma'dan yeniden başlat ve macOS'i yeniden yükle.

Kurtarma'dan da başlamıyorsa Apple, Apple Silicon ya da T2 çipli Mac'lerde firmware'in yeniden etkinleştirilmesi ya da geri yüklenmesi gerekebileceğini söyler.

## 2) Ekranda simge çıkıyorsa

Apple'ın "Mac'iniz tamamen başlatılmıyorsa" sayfası, açılışta görülebilecek ekranları tek tek sayar: soru işareti, üzerinde çizgi olan daire, içinde uyarı simgesi olan küre, Apple logosu, boş ekran, Seçenekler dişlisi, daire içinde ünlem ve kilit simgesi. Örneğin içinde ünlem olan küre, Mac'in internet üzerinden macOS Kurtarma'dan başlatılmaya çalışıldığını ama başlatılamadığını gösterir. Gördüğün simgeyi not et; Apple'ın sayfasında her biri için ayrı yol var.

## Apple logosu ne zaman normaldir?

Apple'a göre Mac, yerleşik ya da harici başlangıç diskini bulduğunda Apple logosunu gösterir. Başlatma sürerken logoyla birlikte ya da tek başına bir ilerleme çubuğu görünür ve bu ekranın yerini birkaç kez boş ekran alabilir. Yani logoyu görmek, iMac'in diski bulduğu anlamına gelir. Sorun, başlatmanın logodan ya da ilerleme çubuğundan sonraki aşamaya **hiç geçmemesi** ya da iMac'in sürekli yeniden başlamasıdır.

Ekranda Magic Mouse'un alt tarafının ya da Magic Keyboard'un arka tarafının çizimini görüyorsan Apple'a göre iMac fareyi, izleme dörtgenini ya da klavyeyi algılayamıyordur. Bu bir başlatma arızası değil, bağlantı sorunudur.

## 3) Apple Tanıları nasıl başlatılır?

Önce klavye, fare, Ethernet ve güç dışındaki tüm harici aygıtları çıkar.

- **Apple Silicon iMac:** Güç düğmesini basılı tut, Seçenekler'i görünce bırak. Ardından Mac yeniden başlatılana kadar Komut (⌘)-D tuşlarını basılı tut.
- **Intel iMac:** iMac'i açar açmaz D tuşunu basılı tut; olmazsa Option (⌥)-D dene.

Test sonunda referans kodu çıkarsa not et; Apple servise giderken bu kodu vermeni önerir.

## 4) Buradan sonrası servis işi

Bu yazıdaki adımların hiçbiri iMac'in gövdesini açmayı gerektirmez. Firmware geri yükleme ve gövde içindeki her şey servis işidir. Belirtileri ve Tanılar kodunu not ederek gitmek teşhisi hızlandırır. Genel eleme sırası için [bilgisayar açılmıyor, ekran gelmiyor](/blog/bilgisayar-acilmiyor-ekran-gelmiyor/) rehberine de bakabilirsin.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
