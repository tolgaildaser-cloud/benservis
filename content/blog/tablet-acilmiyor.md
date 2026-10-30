---
title: "Tablet açılmıyor: Apple ve Samsung'un önerdiği sıra"
description: "Tablet açılmıyor ya da ekran siyah mı? Apple iPad ve Samsung Galaxy sayfalarına göre şarj, kablo, kılıf, zorla yeniden başlatma ve kurtarma modu."
slug: "tablet-acilmiyor"
date: "2026-10-30"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk, P43 / PAKETLER #177). origin/main'de genel "tablet-acilmiyor" yok; yakın: ipad-sarj-olmuyor, iphone-acilmiyor-apple-logosunda-kaliyor (telefon, ayrı konu).
# Arama kanıtı: PAKETLER #177: OT "tablet açılmıyor" #1–#10 (jenerik + Samsung, Lenovo, android yazısında kalıyor, siyah ekran).
# Belgeler (#88, curl -sL -A "Mozilla/5.0", HTTP 200): (A) Apple Destek TR "iPad'iniz açılmıyorsa veya donduysa" https://support.apple.com/tr-tr/102642 (yayın 14 Ekim 2026) · (S) Samsung TR "Samsung Galaxy cihazınız açılmıyorsa ne yapmalısınız" https://www.samsung.com/tr/support/mobile-devices/galaxy-phone-not-turning-on/ (güncelleme 2026-08-10; "Galaxy cihaz" der, tablete özel değil).
# Lenovo: support.lenovo.com/us/en/solutions/ht100368 HTTP 403 → atlandı (erişim sınırı kuralı), Lenovo ve "android yazısında kalıyor" kapsanmadı.
# BİLEREK YAZILMAYANLAR: Android logosu / Lenovo adımları (belge yok) · forum tüyoları (kurtarma modundan önbellek silme, Smart Switch) · fiyat (#46) · cihaz içi müdahale.
guide:
  difficulty: "Orta"
  time: "~1-2 saat (şarj bekleme dahil)"
  totalTime: "PT2H"
  cost: "Ücretsiz"
  tools: ["Üreticinin şarj cihazı ve kablosu", "Kurtarma modu için bilgisayar"]
steps:
  - "Tableti üreticinin şarj cihazı ve kablosuyla şarja tak; ekranda bir şey görünmese de bir saat kadar şarjda bırak."
  - "Yedek bir şarj cihazın ve kablon varsa onlarla dene."
  - "Kılıf tuşlara basmayı engelliyorsa kılıfı çıkar."
  - "Samsung Galaxy cihazda Güç tuşu ile Sesi kısma tuşuna birlikte en az yedi saniye bas."
  - "Ana Ekran düğmesi olmayan iPad'de ses düğmelerine ve üst düğmeye sırayla basarak yeniden başlat."
  - "Ana Ekran düğmesi olan iPad'de Ana Ekran düğmesi ile üst düğmeyi birlikte basılı tut."
  - "Tablet açılıp Apple logosunda takılıyorsa bilgisayara bağla, kurtarma modunda Güncelle'yi seç."
faq:
  - q: "iPad açılmıyor, ekran siyah. İlk ne yapmalıyım?"
    a: "Apple'ın sayfası önce iPad'i yeniden başlatmaya zorlamanı, sonra donanımı kontrol edip aygıtı şarj etmeni söylüyor. Bir saat kadar şarj etmen gerekebilir. Ana Ekran düğmesi olmayan iPad'de bu, iki ses düğmesine sırayla kısaca basıp ardından üst düğmeyi Apple logosu görünene kadar basılı tutmak."
  - q: "Samsung tablet açılmıyor, hangi tuşlara basmalıyım?"
    a: "Samsung'un Galaxy cihaz sayfasına göre Güç (Yan) tuşu ile Sesi kısma tuşuna aynı anda en az yedi saniye basılı tut. Samsung logosu görünüp cihaz titreştiğinde bırak. Sayfa tablete özel değil, Galaxy cihazlar için yazılmış; kendi tabletinin kılavuzunu da kontrol et."
  - q: "Tablet şarj cihazını takınca hiçbir şey olmuyor, bozuldu mu?"
    a: "Samsung'a göre pil tamamen boşaldıysa şarj göstergesi (yıldırım simgesi) ekranda görünmeyebilir. Ekranda hiçbir şey olmasa da şarj etmeye devam etmen gerekiyor. Apple de iPad için bir saat kadar şarj gerekebileceğini söylüyor."
  - q: "Lenovo tablet ya da Android yazısında kalan tablet için adım var mı?"
    a: "Bu yazının iki kaynağı Apple ve Samsung. Lenovo tabletler ve Android logosunda takılı kalma bu belgelerde yok; o durumda tabletin üreticisinin kendi destek sayfasına bak."
images:
  coverAlt: "Masada duran siyah ekranlı bir tablet, yanında şarj kablosu"
  steps:
    - "Tableti şarj kablosuna takan beyaz eldivenli sade siluet el"
    - "İki farklı şarj kablosu yan yana, birini seçen beyaz eldivenli sade siluet el"
    - "Tabletin kılıfını çıkaran beyaz eldivenli sade siluet el"
    - "Tabletin yan kenarındaki iki tuşa aynı anda basan beyaz eldivenli sade siluet el"
    - "Tabletin kenarındaki ses tuşlarına ve üst tuşa sırayla basan beyaz eldivenli sade siluet el"
    - "Tabletin ön yüzündeki daire düğmeye ve üst tuşa birlikte basan beyaz eldivenli sade siluet el"
    - "Tableti bilgisayara kabloyla bağlayan beyaz eldivenli sade siluet el"
---

Tablet çekmecede ya da kanepede şarjsız kaldı. Düğmeye bastın, ekran siyah. "Tablet açılmıyor" aramasının arkasında çoğu zaman boşalmış pil, tutmayan kablo ya da donmuş yazılım var. Bu yazıdaki sıra **Apple**'ın iPad destek sayfasından ve **Samsung**'un Galaxy cihaz sayfasından geliyor. Samsung sayfası "Galaxy cihaz" diyor, tablete özel değil; kendi tabletinin kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> 🔋 **Önce şunu bil:** Pil tamamen boşalmışsa şarj göstergesi hemen ekranda görünmeyebilir. İki üretici de önce şarj, sonra zorla yeniden başlatma sırasını koyuyor.

## Belgeler ne diyor

| Konu | Apple iPad | Samsung Galaxy |
|---|---|---|
| **Şarj** | Bir saat kadar | Onaylı şarj cihazı, ekran boşsa da devam |
| **Kılıf** | Belgede yok | Tuşlara basmayı engelliyorsa çıkar |
| **Zorla yeniden başlatma** | Düğme düzenine göre | Güç + Sesi kısma, en az yedi saniye |
| **Logoda takılma** | Bilgisayarla kurtarma modu | Belgede yok |

## Adım adım: tablet için sıra

**1. Şarja tak ve bekle.** Samsung, pil tamamen boşalmış olabileceğini söylüyor: onaylı bir şarj cihazı ve kablo bağla. Ekranda hiçbir şey görünmese bile şarj etmeye devam et. Apple de iPad açılmıyorsa donanımı kontrol edip aygıtı şarj etmeni istiyor ve bir saat kadar şarj etmen gerekebileceğini belirtiyor.

**2. Başka şarj cihazı ve kablo dene.** Samsung, şarj cihazı ya da kablodaki bir sorun yüzünden şarjın düzgün çalışmayabileceğini söylüyor. Yedek bir şarj cihazın ve kablon varsa onlarla şarj etmeyi dene, sonra tableti aç. Samsung yalnız onaylı şarj cihazı ve kabloları kullanmanı, eski ya da hasarlı olanları kullanmamanı istiyor.

**3. Kılıfı çıkar.** Samsung'a göre düğmelere aynı anda basılmazsa ses çubuğu ya da güç menüsü çıkabilir. Kılıf her iki düğmeye de düzgün basmanı engelliyorsa kılıfı çıkar.

**4. Galaxy cihazda zorla yeniden başlat.** Güç (Yan) tuşuna ve Sesi kısma tuşuna aynı anda **en az yedi saniye** bas. Tablet yeniden başlayacak. Samsung logosu görünüp cihaz titreştiğinde tuşları bırakabilirsin.

**5. Ana Ekran düğmesi olmayan iPad'de sırayla bas.** Apple'ın tarifi: üst düğmeye en yakın ses düğmesine kısaca bas, üst düğmeden en uzaktaki ses düğmesine basıp hemen bırak, sonra Apple logosunu görene kadar **üst düğmeyi** basılı tut. Açılmazsa donanımı kontrol edip bir saat kadar şarj et.

**6. Ana Ekran düğmesi olan iPad'de iki tuşa birlikte bas.** Apple logosu görünene kadar Ana Ekran düğmesi ile üst düğmeyi aynı anda basılı tut. Açılmazsa yine şarj adımına dön.

**7. Logoda takılıyorsa kurtarma modunu kullan.** Apple'a göre iPad açılıyor ama başlatma sırasında Apple logosunda ya da kırmızı veya mavi ekranda takılıyorsa iPad'i bir bilgisayara bağla ve kurtarma modu ekranını görene kadar tuşu basılı tut. Geri yükleme veya güncelleme seçeneği çıktığında **Güncelle**'yi seç. Bilgisayar gerekli yazılımı indirir; indirme 15 dakikadan uzun sürerse iPad kurtarma modundan çıkar ve adımları yeniden denemen gerekir.

## Kurtarma modunda bilgisayar ne yapar?

Apple'ın tarifinde bilgisayar tarafı da var. macOS Catalina 10.15 ve sonrasını kullanan bir Mac'te Finder'ı açıyorsun; macOS Mojave ve öncesinde iTunes'u, bir PC'de ise Apple Aygıtları uygulamasını ya da iTunes'u. Aygıtı bilgisayarda bulduktan sonra bağlıyken düğme dizisini uyguluyorsun. Ana Ekran düğmesi olmayan iPad'de ses düğmelerine sırayla basıp üst düğmeyi basılı tutuyorsun ve kurtarma modu ekranı gelene kadar bırakmıyorsun. Ana Ekran düğmesi olan iPad'de Ana Ekran düğmesi ile üst düğmeyi birlikte basılı tutuyorsun. Ekrana Geri yükleme veya Güncelle seçeneği gelince **Güncelle**'yi seç.

## Neden önce şarj?

Kontrol listesinin başında şarj olmasının sebebi, bunun hem en yaygın hem de en kolay denenebilen neden olması. Samsung, açılmama sebepleri arasında geçici yazılım donmasını, tamamen boşalmış bataryayı, sistem arızasını ve devrelerle ilgili donanım sorununu sayıyor. İlk ikisini evde elemek mümkün. Sistem arızası ve donanım sorununu ise yalnız servis çözebilir. Bu yüzden önce şarj, sonra tuş kombinasyonu, en son bilgisayar ve servis geliyor.

## Hangi belge neyi kapsıyor?

Apple'ın sayfası iki durumu ayırıyor: ekranın siyah ya da donmuş olması ve açılışta takılma. Samsung'un sayfası ise "Galaxy cihaz açılmıyor" diyor ve şarj, kablo, kılıf ile zorla yeniden başlatmaya odaklanıyor. Lenovo tabletleri ve "Android" yazısında kalan tabletleri bu iki belge kapsamıyor. O tabletlerde üreticinin kendi destek sayfasına bakman gerekir. [iPad şarj olmuyor](/blog/ipad-sarj-olmuyor/) yazısı şarj tarafını daha ayrıntılı anlatıyor.

## Servise giderken

Tablet hâlâ açılmıyorsa servise giderken neleri denediğini söylemek işi hızlandırır: ne kadar şarj ettiğini, hangi şarj cihazı ve kabloyu kullandığını, hangi tuş dizisini denediğini ve ekranda logo ya da şarj simgesi görüp görmediğini not et.

## Buradan sonrası servis işi

Apple, iPad hâlâ çalışmıyorsa aygıtın servise ihtiyacı olabileceğini söylüyor. Tableti açmak, pili sökmek ya da şarj girişini kurcalamak bu listenin parçası değildir. İki üreticinin yetkili servisine başvur.

Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
