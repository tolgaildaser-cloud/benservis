---
title: "Laptop kamera çalışmıyor: Microsoft ve Apple'a göre sıra"
description: "Laptop kamerası açılmıyor ya da görüntü gelmiyor mu? Microsoft ve Apple'ın destek sayfalarına göre anahtar, izin, uygulama ve güncelleme kontrol sırası."
slug: "laptop-kamera-calismiyor"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk, P47 / PAKETLER #111). origin/main'de genel "laptop-kamera-calismiyor" yok (yakın: laptop-klavyesi-calismiyor, laptop-sarj-olmuyor, bilgisayar-acilmiyor-ekran-gelmiyor).
# Arama kanıtı: PAKETLER #111: OT "laptop çalışmıyor" #6; "laptop kamera" #2,#5,#9,#10.
# Belgeler (#88, curl -sL -A "Mozilla/5.0", HTTP 200): (M) Microsoft Destek TR "Windows'da kamera çalışmıyor" https://support.microsoft.com/tr-tr/windows/hardware/camera/camera-doesn-t-work-in-windows · (A) Apple Support "If the built-in camera isn't working on your Mac" https://support.apple.com/en-us/102437 (yayın 27 Mart 2026). Lenovo ht118432 403 verdi, atlandı; HP bağlantı hatası, Dell 403, atlandı (erişim sınırı kuralı).
# BİLEREK YAZILMAYANLAR: kamera modülü söküm/değişimi (servis işi) · BIOS ayarı (belgede yok) · harici USB kamera UVC sürücü değişimi · hata kodu tablosu · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Laptopta kamera anahtarı, kaydırıcısı ya da düğmesi varsa açık konuma getir."
  - "Gizlilik ayarlarında kamera erişiminin ve uygulama izninin açık olduğunu kontrol et."
  - "Kamerayı laptopun kendi kamera uygulamasında dene."
  - "Virüsten koruma ve güvenlik duvarını geçici olarak kapatıp kamerayı yeniden dene."
  - "Güncellemeleri kontrol et, laptopu yeniden başlat."
  - "Aygıt Yöneticisi'nde donanım değişikliklerini tara ve gerekirse sürücüyü yeniden yükle."
  - "Hâlâ çalışmıyorsa ya da kamera ışığı yeşil yanıp sönüyorsa servise götür."
faq:
  - q: "Kamera yalnızca Teams ya da tarayıcıda çalışmıyor, sorun ne?"
    a: "Microsoft'a göre kamera Kamera uygulamasında çalışıyor ama başka bir uygulamada çalışmıyorsa sorun uygulama ayarlarındadır. Microsoft Store dışından yüklenen uygulamalar için Masaüstü uygulamalarının kameranıza erişmesine izin ver ayarının açık olması gerekir; Edge gibi tarayıcılar ve çoğu görüntülü konferans uygulaması bu gruptadır."
  - q: "Kameranın üstünde eğik çizgi var, bunun anlamı ne?"
    a: "Microsoft, kamera anahtarı ya da düğmesi kapalıyken cihazın kamerayı algılamayabileceğini ya da kamera resminin üzerinde eğik çizgi gösterebileceğini yazıyor. Anahtar Fn tuşuyla açılan bir düğme, klavyedeki özel bir kamera düğmesi, laptopun yanında bir kaydırma anahtarı ya da kameranın üzerindeki küçük bir kaydırıcı olabilir."
  - q: "Mac'te kamera çalışmıyorsa ne yapmalıyım?"
    a: "Apple, Ekran Süresi kullanıyorsan kamera kısıtlamasının kapalı olduğunu ve kamerayı kullanacak uygulamanın uygulama limitlerinde seçili olmadığını kontrol etmeni istiyor. Ardından Gizlilik ve Güvenlik içinde Kamera bölümünden uygulamaya izin ver. Apple silikon işlemcili Mac'te yeniden başlat, Intel işlemcili Mac'te SMC sıfırlaması yap."
  - q: "Kamera ışığı yeşil yanıp sönüyor, normal mi?"
    a: "Apple, Mac'te kameranın yanındaki gösterge ışığının yeşil yanıp sönmesini servis gerektirebilecek bir işaret olarak sayıyor. Bu durumda kendi başına müdahale etme, servise götür."
images:
  coverAlt: "Açık bir laptopun ekranının üstünde küçük bir kamera ve yanında soru işareti"
  steps:
    - "Laptopun kenarındaki kaydırma anahtarını açık konuma çeviren beyaz eldivenli sade siluet el"
    - "Ayarlar ekranında kamera erişimi anahtarını açan beyaz eldivenli sade siluet el"
    - "Laptop ekranında kamera uygulamasının önizleme penceresi açık"
    - "Ekranda kalkan simgesinin üzerine çarpı çizilmiş, yanında duran bir laptop çizimi"
    - "Güncelleme simgesi ve yeniden başlatma oku olan laptop ekranı"
    - "Laptop ekranında cihaz listesinden kamerayı seçen beyaz eldivenli sade siluet el"
    - "Bir tezgâhın üzerinde laptop ve yanında servis simgesi olan çanta"
---

Laptopu açıyorsun, görüntülü görüşmeye giriyorsun, kamera ya karanlık ya da hiç yok. "Laptop kamera çalışmıyor" şikâyetlerinin önemli bir kısmında arızalı bir parça yok; bir anahtar, bir izin ya da bir uygulama ayarı var. Bu yazıdaki sıra **Microsoft**'un Türkçe Windows kamera sayfasından ve **Apple**'ın Mac kamera sayfasından geliyor. Laptopunun üreticisi farklı bir şey söylüyorsa **kendi kılavuzu esastır.**

> 📷 **Önce ayrım yap:** Kamera hiçbir uygulamada mı çalışmıyor, yoksa yalnız bir uygulamada mı? Aşağıdaki sıra ikisini de ayırmana yardım eder. Kamerayı sökmek ya da modülünü değiştirmek bu listede yok; o kısım servis işi.

## Belgeler ne diyor

| Konu | Microsoft (Windows) | Apple (Mac) |
|---|---|---|
| **Fiziksel anahtar** | Kamera anahtarı ya da düğmesi açık olmalı | Belgede yok |
| **İzin** | Ayarlar > Gizlilik ve güvenlik > Kamera | Gizlilik ve Güvenlik > Kamera, Ekran Süresi |
| **Yeniden başlatma** | Güncelleme sonrası yeniden başlat | Apple silikonda yeniden başlat, Intel'de SMC sıfırla |
| **Sürücü** | Aygıt Yöneticisi'nde tara, geri al ya da kaldır | Belgede yok |

## Kamera neden durur?

Microsoft'un sayfası yaygın nedenleri şöyle sıralıyor: yeni bir güncellemeden sonra eksik sürücüler, virüsten koruma yazılımının kamerayı engellemesi, kısıtlayıcı gizlilik ayarları ve kullandığın uygulamayla ilgili sorunlar. Yani çoğu durumda önce yazılım ve ayar elenir, donanım en sonda gelir. Windows 11'de Yardım Al uygulamasındaki otomatik kamera sorun gidericisi bu adımların birçoğunu senin yerine dener; Ayarlar > Sistem > Sorun Giderme > Diğer sorun gidericiler yolundan Kamera satırındaki Çalıştır düğmesiyle de başlatabilirsin. Laptopa harici USB kamera takıyorsan Microsoft kablonun sağlam takılı olduğuna bakmanı, kamerayı başka bir cihazda denemeni ve farklı bir USB bağlantı noktasını kullanmanı istiyor.

## Adım adım: kamerası çalışmayan laptop için sıra

**1. Kamera anahtarını kontrol et.** Microsoft'a göre bazı dizüstü bilgisayarlarda kamerayı açıp kapatan fiziksel bir anahtar ya da düğme var. Kapalıysa cihaz kamerayı algılamayabilir. Anahtar Fn tuşuyla çalışan bir düğme, klavyede özel bir kamera düğmesi, laptopun yan tarafında bir kaydırma anahtarı ya da kameraya yerleşik küçük bir kaydırıcı olabilir. Bulması kolay olmayabilir, tüm olası yerlere bak.

**2. Kamera iznini aç.** Windows'ta Başlat > Ayarlar > Gizlilik ve güvenlik > Kamera yolunda "Bu cihazda kameraya erişime izin ver" ve "Uygulamaların kameraya erişmesine izin ver" açık olmalı. Microsoft, yeni güncellemeden sonra bazı uygulamaların varsayılan olarak kameraya erişemeyebileceğini söylüyor. Mac'te Apple, Gizlilik ve Güvenlik içinde Kamera'ya girip kullanmak istediğin uygulamaları açmanı istiyor; uygulamayı kapatıp yeniden açman istenebilir. Ekran Süresi kullanıyorsan kamera kısıtlamasının kapalı olduğuna da bak.

**3. Kamerayı başka uygulamada dene.** Microsoft, sorunun belirli bir uygulamaya özgü olup olmadığını görmek için Windows'taki Kamera uygulamasını kullanmanı öneriyor. Başlat'tan Kamera'yı aç, önizleme geliyor mu bak. Önizleme geliyorsa sorun görüntülü görüşme uygulamasının ayarlarındadır.

**4. Virüsten korumayı geçici olarak kapat.** Microsoft'a göre bazı virüsten koruma programları ya da güvenlik duvarları kamera erişimini engelleyebilir. Ayarları bulup geçici olarak devre dışı bırakarak dene. Test bitince geri aç.

**5. Güncelle ve yeniden başlat.** Windows'ta Windows Update'ten güncellemeleri kontrol et; kamera için güncelleme yoksa Gelişmiş seçenekler > İsteğe bağlı güncelleştirmeler'e bak. Sonra laptopu yeniden başlat. Microsoft, uyku modundan çıkarmanın yeniden başlatmayla aynı şey olmadığını özellikle yazıyor. Apple de Apple silikonlu Mac'te yeniden başlatmayı, Intel'li Mac'te SMC sıfırlamasını istiyor.

**6. Sürücüyü Aygıt Yöneticisi'nde tara.** Başlat'a "aygıt yöneticisi" yaz, Kameralar bölümünde kamerana bak. Göremiyorsan İşlem menüsünden "Donanım değişikliklerini tara"yı seç, bitmesini bekle, yeniden başlat. Kamera bir güncellemeden sonra bozulduysa Microsoft, Özellikler > Sürücü sekmesinde "Sürücüye Geri Dön"ü, o da yoksa "Cihazı Kaldır"ı ve yeniden taramayı tarif ediyor. Kameranın kendisini sökmek bu adımın parçası değil.

**7. Servise götür.** Microsoft, kamera yine de çalışmazsa kamera üreticisinin web sitesinde yardım aramanı söylüyor. Apple, Mac'te kameranın yanındaki gösterge ışığı yeşil yanıp sönüyorsa servis gerekebileceğini belirtiyor. Kamera modülü ekran çerçevesinin içinde; açmak servis işi.

## Bu belgeler neyi anlatmıyor?

İki sayfa da BIOS'tan kamerayı açıp kapatmayı anlatmıyor. Marka bazlı gizlilik modu uygulamalarına ve kamera hata kodlarının tek tek çözümlerine de girmedik. Microsoft'un sayfasında 0xA00F4244 gibi kodların kısa bir listesi var; "Sistem kamerayı algılayamıyor" gibi nedenleri sıralıyor, ayrıntı için ilgili sayfaya yönlendiriyor.

## Ne zaman servis?

Anahtar, izin, uygulama testi, güncelleme ve sürücü taramasından sonra kamera hâlâ görünmüyorsa ya da gösterge ışığı yanıp sönüyorsa donanım tarafı akla gelir. Ekranı açmak ya da kamera kablosuna dokunmak bu yazının sınırı dışında. Laptopun diğer belirtileri için [laptop şarj olmuyor](/blog/laptop-sarj-olmuyor/) ve [bilgisayar açılmıyor, ekran gelmiyor](/blog/bilgisayar-acilmiyor-ekran-gelmiyor/) yazılarına da bakabilirsin.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
