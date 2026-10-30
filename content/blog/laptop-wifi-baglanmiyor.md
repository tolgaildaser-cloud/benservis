---
title: "Laptop Wi-Fi'ye bağlanmıyor: Microsoft ve Apple'a göre sıra"
description: "Laptop Wi-Fi'ye bağlanmıyor, ağı görmüyor ya da sürekli kopuyor mu? Microsoft ve Apple'ın destek sayfalarına göre ayar, modem ve ağ sıfırlama sırası."
slug: "laptop-wifi-baglanmiyor"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk, P47 / PAKETLER #112). origin/main'de genel "laptop-wifi-baglanmiyor" yok (yakın: yazici-wifi-baglanmiyor, vestel-televizyon-wifi-baglanmiyor, ecovacs-deebot-wifi-baglanmiyor; bilgisayar-yavas-calisiyor).
# Arama kanıtı: PAKETLER #112: OT "laptop wifi" #1,#3,#5,#6,#7,#10; "bilgisayar internete bağlanmıyor" #1–#10; "bilgisayar neden" #8.
# Belgeler (#88, curl -sL -A "Mozilla/5.0", HTTP 200): (M) Microsoft Destek TR "Windows'ta Wi-Fi bağlantısı sorunlarını düzeltin" https://support.microsoft.com/tr-tr/windows/windows-de-wi-fi-bağlantı-sorunlarını-düzeltme-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c · (A) Apple Support "If your Mac isn't connecting to the internet over Wi-Fi" https://support.apple.com/en-us/101588 (yayın 10 Mart 2025). Lenovo/Dell/HP laptop belgeleri 403 ya da bağlantı hatası verdi (kamera paketinde denendi).
# BİLEREK YAZILMAYANLAR: netsh/ipconfig komut dizisi (Microsoft'ta var, yazıya alınmadı) · modem arayüzü/kanal ayarı · DNS değiştirme · ethernet kablosu ayrıntısı · fiyat (#46) · Wi-Fi kartını sökme.
guide:
  difficulty: "Kolay"
  time: "~25 dakika"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Wi-Fi şifresi", "Modemin fişi"]
steps:
  - "Görev çubuğundan Wi-Fi'nin açık olduğundan ve ağ adının altında Bağlı yazdığından emin ol."
  - "Uçak modunun kapalı olduğunu kontrol et."
  - "Aynı ağa başka bir cihazdan bağlanmayı dene."
  - "Ağı unut ve şifreyi girerek yeniden bağlan."
  - "Modemin ve yönlendiricinin fişini çek, en az otuz saniye bekle ve tak."
  - "Modem iki frekans veriyorsa diğer frekanstaki ağa bağlan."
  - "Ağ sorun gidericisini çalıştır."
  - "Hiçbiri işe yaramadıysa son adım olarak ağ sıfırlama yap."
faq:
  - q: "Wi-Fi'ye bağlıyım ama 'İnternet yok' yazıyor, ne yapmalıyım?"
    a: "Microsoft'a göre bu durumda cihaz yerel ağa bağlı ama internete çıkamıyor. Wi-Fi'yi kapatıp açmayı ve ağa yeniden bağlanmayı öneriyor. Ayrıca Ağ ve İnternet > Proxy ayarlarında elle yapılmış proxy ayarını kapatmanı ve IP adresinin 169.254 ile başlayan bir numara olmadığına bakmanı istiyor. Böyle bir adres, yönlendiriciden IP alınamadığı anlamına geliyor."
  - q: "Wi-Fi sık sık kopuyor, belgeler ne diyor?"
    a: "Microsoft iki şey söylüyor: Aygıt Yöneticisi'nde Wi-Fi bağdaştırıcısının Özellikler > Güç Yönetimi sekmesinde 'Güç tasarrufu için bilgisayarın bu aygıtı kapatmasına izin ver' işaretini kaldırmanı ve güç seçeneklerinde Kablosuz Bağdaştırıcı Ayarları'nı en yüksek performansa almanı. Yönlendirici kanalını değiştirmek için yönlendiricinin kılavuzuna bakman gerekiyor."
  - q: "Ayarlarda Wi-Fi anahtarı hiç yok, neden?"
    a: "Microsoft'a göre bazı dizüstü bilgisayarlarda fiziksel bir Wi-Fi anahtarı var ve açık olmalı. Aygıt Yöneticisi'nde Ağ bağdaştırıcıları altında Wi-Fi bağdaştırıcısına sağ tıklayıp Cihazı etkinleştir'i seçmen de gerekebilir. Bağdaştırıcı listede hiç yoksa Windows onu algılamıyor demektir; bu durumda sürücü için cihaz üreticisinin sitesine bakılıyor."
  - q: "Mac'te Wi-Fi bağlı ama internet açılmıyorsa?"
    a: "Apple, Mac'i yeniden başlatmanı, tarih ve saatin doğru olduğunu kontrol etmeni, VPN ya da güvenlik yazılımını gözden geçirmeni ve yönlendiriciyi yeniden başlatmanı istiyor. Wi-Fi menüsünde 'Wi-Fi Recommendations' maddesi varsa Mac bir sorun tespit etmiş demektir. Option tuşuna basarak Wireless Diagnostics'i de açabilirsin."
images:
  coverAlt: "Masada duran açık bir laptop ve yanında modem, aralarında kesik sinyal çizgileri"
  steps:
    - "Laptop ekranında Wi-Fi anahtarını açan beyaz eldivenli sade siluet el"
    - "Laptop ekranında uçak simgesinin üzerinde çarpı işareti çizimi"
    - "Yan yana duran bir laptop ve bir telefon, ikisinden de modeme giden sinyal çizgileri"
    - "Kayıtlı ağ listesinden bir ağı silen beyaz eldivenli sade siluet el"
    - "Modemin fişini prizden çeken beyaz eldivenli sade siluet el"
    - "Modemden çıkan iki farklı sinyal halkası ve birini seçen beyaz eldivenli sade siluet el"
    - "Laptop ekranında stetoskop simgeli bir sorun giderici penceresi"
    - "Laptop ekranında dairesel ok simgesi ve sıfırlama düğmesi çizimi"
---

Laptop evde modemin yanındayken bile bağlanmıyor. Ya ağı hiç görmüyor, ya bağlanıp kopuyor, ya da "İnternet yok" yazıyor. "Laptop Wi-Fi'ye bağlanmıyor" aramasının arkasında çoğu zaman bozuk bir kart değil, bir ayar, bir modem takılması ya da sürücü var. Bu yazıdaki sıra **Microsoft**'un Türkçe Windows Wi-Fi sayfasından ve **Apple**'ın Mac sayfasından geliyor. Laptopunun üreticisi farklı bir şey söylüyorsa **kendi kılavuzu esastır.**

> 📶 **Önce ayrım yap:** Ağ listede hiç görünmüyor mu, görünüp bağlanamıyor mu, bağlı olup internet mi yok? Bu yazı üçüne de aynı sırayı veriyor: önce veri kaybettirmeyen kolay adımlar, sıfırlama en sonda.

## Belgeler ne diyor

| Konu | Microsoft (Windows) | Apple (Mac) |
|---|---|---|
| **Ayar kontrolü** | Wi-Fi açık, uçak modu kapalı | Önce Wi-Fi'ye bağlan |
| **Modem** | Fişi çek, en az 30 saniye bekle | Yönlendiriciyi yeniden başlat |
| **Frekans** | 2,4 GHz ve 5 GHz ağı dene | Belgede yok |
| **Son adım** | Ağ sıfırlama | Kablosuz Tanılama |

## Adım adım: bağlanmayan laptop için sıra

**1. Wi-Fi açık mı, bağlı mı?** Microsoft'un tarifi: görev çubuğunun sağındaki Ağ, Ses ya da Pil simgelerine tıkla, Wi-Fi'nin açık olduğundan emin ol ve ağ adının altında "Bağlı" yazıp yazmadığına bak. Bağlı değilse listeden tanıdığın ağı seçip bağlanmayı dene. Bazı dizüstü bilgisayarlarda fiziksel Wi-Fi anahtarı bulunur; açık olmalı.

**2. Uçak modunu kapat.** Ağ ve İnternet > Uçak modu ayarlarına git ve kapalı olduğundan emin ol.

**3. Başka cihazla dene.** Microsoft, başka bir dizüstü bilgisayarda ya da telefonda aynı ağa bağlanmayı denemeni söylüyor. Bağlanabiliyorsan sorun büyük olasılıkla laptoptan geliyor. O da bağlanamıyorsa sorun ağda ya da modemde.

**4. Ağı unut ve yeniden bağlan.** Ağ ve İnternet > Wi-Fi > Bilinen ağları yönet'e gir, ağını seç, Unut'a tıkla. Ağı seçip parolayı yeniden gir. Parolayı hazır tut.

**5. Modemi ve yönlendiriciyi yeniden başlat.** Microsoft'a göre bu, internet servis sağlayıcıya yeni bir bağlantı kurmaya yardım ediyor. Yönlendiricinin güç kablosunu çıkar, modemin güç kablosunu çıkar, **en az 30 saniye** bekle, modemi tak, ışıkların yanıp sönmesinin durmasını bekle, sonra yönlendiriciyi tak. Cihazların tamamen açılması birkaç dakika sürebilir. Bu sırada ağa bağlı herkesin bağlantısı geçici olarak kesilir. Modem ve yönlendirici tek cihazsa yalnız onun adımlarını izle.

**6. Frekansı değiştir.** Birçok yönlendirici 2,4 GHz ve 5 GHz olmak üzere iki ağ yayınlar ve bunlar listede ayrı ağlar olarak görünür. Microsoft, listede ikisi de varsa diğerine bağlanmayı denemeni söylüyor. Eski bir Wi-Fi bağdaştırıcısı yalnız 2,4 GHz'i destekliyor olabilir; ağın 5 GHz yayın yapıyorsa laptop onu hiç görmez.

**7. Ağ sorun gidericisini çalıştır.** Windows 11'de Yardım Al uygulamasındaki otomatik Ağ ve İnternet sorun gidericisi; Ayarlar > Ağ ve İnternet > Durum içinden de Ağ sorun gidericisi başlatılabilir. Mac'te Apple, Wi-Fi menüsünde "Wi-Fi Recommendations" maddesine bakmanı ve Option tuşuna basarak Wireless Diagnostics'i açmanı öneriyor.

**8. Son adım: ağ sıfırlama.** Microsoft bunu "deneyeceğin son adım" olarak koyuyor. Windows 11'de Ayarlar > Ağ ve İnternet > Gelişmiş ağ ayarları > Ağ sıfırlama, Windows 10'da Durum > Ağ sıfırlama. Bu işlem yüklü tüm ağ bağdaştırıcılarını kaldırıp ayarlarını varsayılana döndürür ve bilgisayar yeniden başlar. VPN istemcisi gibi ağ yazılımlarını yeniden kurman gerekebilir.

## Mac kullanıyorsan

Apple'ın sayfası, Mac'in Wi-Fi'ye bağlı olduğu ama web sitelerine, e-postaya ve diğer internet hizmetlerine ulaşamadığı durumu anlatıyor. Sıra şöyle: Mac'i yeniden başlat (Mac, ağdan aldığı internet adresini böylece yeniler), tarih ve saatin doğru olduğunu kontrol et, macOS'u güncelle (başka bir Wi-Fi ağından bağlanabiliyorsan o ağdan), VPN ya da ağ bağlantılarını izleyen başka bir yazılım varsa onu gözden geçir, yönlendiriciyi yeniden başlat. Başka bir ağda internete çıkabiliyorsan Apple, ağının sağlığı için internet sağlayıcına ya da ağ yöneticine danışmanı söylüyor.

## Sürücüyü ne zaman kurcalamalı?

Microsoft'un sayfasında ağ bağdaştırıcısı sürücüsünü kaldırıp yeniden başlatmak da var. Ağ, yakın zamanda yüklenen bir güncellemeden sonra çalışmayı bıraktıysa deneniyor. Kaldırmadan önce bilgisayar üreticisinin sitesinden yedek sürücü indirmeni istiyor. İnternetin yoksa bunu başka bilgisayarda yapıp USB belleğe kaydetmen gerekir. Bu adım biraz daha teknik olduğu için sıranın sonuna yakın; emin değilsen servise bırak.

## Ne zaman servis?

Yukarıdaki adımlardan sonra Wi-Fi bağdaştırıcısı Aygıt Yöneticisi'nde hiç görünmüyorsa Microsoft, sürücüyü elle yüklemeni söylüyor. Bu da olmazsa sorun kartta olabilir; laptopu açıp kartı değiştirmek servis işi. Aynı dertle yazıcı tarafında uğraşıyorsan [yazıcı Wi-Fi'ya bağlanmıyor](/blog/yazici-wifi-baglanmiyor/) yazısına bak; laptop yavaşsa [bilgisayar yavaş çalışıyor](/blog/bilgisayar-yavas-calisiyor/) da işine yarayabilir.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
