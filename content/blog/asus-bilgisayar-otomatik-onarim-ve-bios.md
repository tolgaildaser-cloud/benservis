---
title: "Otomatik onarım döngüsü ve BIOS'a düşme: ASUS çözümleri"
description: "Bilgisayar otomatik onarıma hazırlanıyor ekranında takılıyor ya da doğrudan BIOS'a giriyorsa ASUS destek belgelerindeki adımlar."
slug: "asus-bilgisayar-otomatik-onarim-ve-bios"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P48 (YK #197 boşluk, BOSLUK.md #201). Slug origin/main'de yok (doğrulayıcı). Yakın yazılar: bilgisayar-acilmiyor-ekran-gelmiyor (bip/LED, ekran yok) — otomatik onarım ve BIOS'a düşme için yazı yok.
# Kaynak (#88): ASUS Global Support FAQ 1051327 (Automatic Repair / Startup Repair on Boot) + FAQ 1042868 (Device Boots Directly into BIOS). Microsoft'un erişilen WinRE belgesi Windows Server komut satırı belgesi çıktığı için kullanılmadı; tek üreticili (ASUS) yazı. URL ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · BIOS güncelleme ve EC/RTC sıfırlama ayrıntıları (belge ayrı makaleye yönlendiriyor) · disk/SSD söküm ve bağlantı kontrolü (servis) · Windows Server komutları (CHKDSK/SFC/DISM) · diğer markaların adımları.
guide:
  difficulty: "Orta"
  time: "~45 dakika"
  totalTime: "PT45M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekranı tanı: siyah ekranda hazırlanıyor yazısı mı, mavi onarım ekranı mı, doğrudan BIOS ekranı mı?"
  - "Harici cihazları ve harici ekranları çıkar, güç düğmesine ışık sönene kadar basılı tutup kapat, yeniden aç."
  - "Mavi onarım ekranında Yeniden başlat'ı, onarılamadı ekranında Kapat'ı seçip bilgisayarı yeniden aç."
  - "Gelişmiş seçenekler'den Devam'ı seçerek Windows'a geçmeyi dene."
  - "Sorun Gider, Gelişmiş seçenekler, Başlangıç Onarımı yolunu izle."
  - "Siyah ekranda takılıysa onarım ortamına elle gir: F9 ya da F12 tuşunu basılı tutup güç düğmesine bas."
  - "Doğrudan BIOS'a giriyorsa varsayılan ayarları yükle ve ilk açılış diskini doğru seç."
  - "Sorun yeniyse sistem geri yüklemeyi dene; kişisel dosyalarını yedeklemeden sıfırlamaya geçme."
faq:
  - q: "Hazırlanıyor ekranında ne kadar beklemeliyim?"
    a: "ASUS'a göre bu ekran normalde tanılama ekranına, ardından mavi onarım ya da kurtarma ekranına geçer. Uzun süre siyah ekranda takılı kalırsa belgedeki çözümlere geç: çevre birimlerini çıkar, kapatıp aç, onarım ortamına gir. Ne kadar beklenmesi gerektiğini belge sayı vererek söylemiyor."
  - q: "Sistem geri yükleme dosyalarımı siler mi?"
    a: "ASUS'a göre sistem geri yükleme kişisel dosyaları değiştirmez ama son kurulan uygulamaları ve sürücüleri kaldırabilir. Windows'u sıfırlamak ise farklı: Dosyalarımı sakla seçeneği uygulamaları ve ayarları siler, her şeyi kaldır seçeneği kişisel dosyaları da siler."
  - q: "Bilgisayar doğrudan BIOS'a giriyorsa disk bozuk mu?"
    a: "Kesin değil. ASUS önce varsayılan BIOS ayarlarını yüklemeni ve açılış sırasındaki ilk diski işletim sisteminin olduğu disk yapmanı söylüyor. Açılış menüsünde hiç sabit disk görünmüyorsa belgeye göre cihaz diski algılamıyor demektir ve yetkili servise gitmen gerekir."
images:
  coverAlt: "Siyah ekranlı dizüstü bilgisayarın ortasında dönen sade yükleme çemberi çizimi"
  steps:
    - "Siyah ekranda dönen yükleme çemberi olan dizüstü bilgisayarın ekranına bakan beyaz eldivenli sade siluet el"
    - "Bilgisayardan harici diski çıkaran beyaz eldivenli sade siluet el"
    - "Mavi onarım ekranında yeniden başlat düğmesine dokunan beyaz eldivenli sade siluet el"
    - "Seçenek ekranında devam düğmesine basan beyaz eldivenli sade siluet el"
    - "Menü basamakları olan sade onarım ekranına işaret eden beyaz eldivenli sade siluet el"
    - "Klavyede bir tuşu basılı tutarken diğer elle güç düğmesine basan beyaz eldivenli sade siluet el"
    - "Sade ayar ekranında açılış diski listesinden birini seçen beyaz eldivenli sade siluet el"
    - "Geriye dönen oklu saat simgesi olan sade geri yükleme penceresi"
---

Bilgisayarı açıyorsun ama Windows gelmiyor. Ya ekranda "Otomatik Onarıma Hazırlanıyor" yazısıyla bir türlü geçmeyen bir ekran var, ya da bilgisayar doğrudan BIOS ekranına düşüyor. İkisi de "bilgisayar açılmıyor" diye arananlar arasında sık çıkan durumlar. ASUS'un resmi destek belgelerini okuduk ve ikisini tek yazıda topladık. Aşağıdaki adımlar bu belgelerden alındı; belgelerde olmayan hiçbir adımı yazmadık.

> ⚠️ **Önce şu sınırı bil:** bu yazı bilgisayarın içini açmayı, disk ya da bellek takmayı anlatmıyor. ASUS'un belgesi açılış menüsünde hiç sabit disk görünmüyorsa cihazın diski algılamadığını ve yetkili servise gitmeni söylüyor. Bu durumda aşağıdaki adımları zorlamak yerine servise bırak. Sıfırlama kişisel dosyaları silebilir; önce yedek al.

## Adım adım: onarım döngüsü ve BIOS'a düşme

**1. Ekranı tanı.** ASUS üç ayrı görüntü ayırıyor. Birinci: siyah ekranda "Preparing Automatic Repair" yazısı. Normalde bu ekran "Diagnosing your PC" aşamasına, sonra mavi "Automatic Repair" ya da "Recovery" ekranına geçer. İkinci: mavi "Automatic Repair" ya da "Startup Repair couldn't repair your PC" ekranı. Üçüncü: BIOS ekranı; ASUS bunu işlemci modelini, bellek miktarını ve disk bilgilerini gösteren ekran olarak tarif ediyor.

**2. Harici cihazları çıkar ve kapat.** Klavye, fare, harici disk, yazıcı, hafıza kartı, optik sürücüdeki disk ve kart okuyucudaki kartları çıkar. Harici ekranları da ayır. Güç düğmesine ışık sönene kadar basılı tutarak kapat, sonra aç. ASUS'a göre bu cihazlar bilgisayarın onarım ekranına bile geçmesini engelleyebilir.

**3. Ekrandaki düğmeyi seç.** Mavi "Automatic Repair" ekranındaysan Yeniden başlat'ı seç. "Startup Repair couldn't repair your PC" ekranındaysan Kapat'ı seç, bilgisayarı kapatıp yeniden aç. Windows açılırsa ASUS BIOS'u, Windows güncellemelerini ve sürücüleri güncellemeni istiyor.

**4. Devam'ı dene.** Onarım ekranında Gelişmiş seçenekler'i (Advanced options) seç. "Choose an option" ekranında Devam'ı (Continue) seç. Sistem seçim ekranından çıkıp Windows'u açmayı dener.

**5. Başlangıç Onarımı'nı çalıştır.** Aynı yoldan Sorun Gider'i (Troubleshoot), sonra Gelişmiş seçenekler'i, sonra Başlangıç Onarımı'nı (Startup Repair) seç. Ekrandaki yönergeleri izle; Windows sorunları bulup onarmaya çalışır.

**6. Siyah ekrandan çıkamıyorsan onarım ortamına elle gir.** ASUS'un yolu: bilgisayar kapalıyken klavyede F9 tuşunu basılı tut, ardından güç düğmesine bas. F9 çalışmazsa bazı modeller F12 istiyor. Onarım ekranı gelene kadar tuşu bırakma. Belgeye göre arka arkaya iki başarısız açılıştan sonra üçüncü açılış cihazı onarım ortamına yönlendirir. Klavye yöntemi tutmazsa belge güç düğmesine on beş saniye basıp kapatıp açma döngüsünü de tarif ediyor.

**7. Doğrudan BIOS'a düşüyorsa varsayılan ayarları yükle.** ASUS'a göre BIOS ekranında F7 tuşuyla ya da ekrandaki düğmeyle gelişmiş moda geç, "Save & Exit" sayfasında "Restore Defaults"u seç ve onayla. Sonra "Boot" sayfasında "Boot Option #1" satırında işletim sisteminin bulunduğu diski seç. Kaydedip çık. Listede hiç sabit disk yoksa servise git.

**8. Sorun yeniyse sistem geri yüklemeyi dene.** Sorun Gider, Gelişmiş seçenekler, Sistem Geri Yükleme yolunu izle ve sorundan önceki bir geri yükleme noktasını seç. ASUS, bunun kişisel dosyaları değiştirmediğini ama son kurulan uygulama ve sürücüleri silebildiğini yazıyor. Son basamak Windows'u sıfırlamak; önce yedek al.

## Windows açıldıktan sonra ne yapmalı?

ASUS her çözümün sonunda aynı şeyi tekrarlıyor: bilgisayar Windows'a girebiliyorsa BIOS'u, Windows güncellemelerini ve sürücüleri en son sürüme getir; böylece sorunun tekrarlama ihtimali azalır. Sürücüler için belge MyASUS'taki System Update'i gösteriyor. Siyah "hazırlanıyor" ekranında takılma için belge ayrıca cihazı zorla kapatıp Embedded Controller (EC) ya da Real-Time Clock (RTC) sıfırlaması yapmayı sayıyor. Bu sıfırlamanın adımlarını ASUS ayrı makalede veriyor; bu yazıda anlatmıyoruz, belgenin gösterdiği makaleye bak.

## Sıfırlamada iki seçenek

ASUS "Bu bilgisayarı sıfırla" (Reset this PC) yolunda iki seçenek sunuyor. Dosyalarımı sakla seçeneği Windows'u yeniden kurar, kurulu uygulamaları ve ayarları siler, kişisel dosyaları korur. Her şeyi kaldır seçeneği kişisel dosyaları, uygulamaları ve ayarları tamamen siler. Yani ikincisinde yedeğin yoksa geri dönüş yok.

## İki ASUS belgesi ne diyor?

Otomatik onarım belgesi Windows tarafına bakıyor: onarım ortamı, başlangıç onarımı, geri yükleme. BIOS belgesi ise açılış ayarlarına bakıyor: varsayılan ayarlar ve açılış diski. Her ikisi de aynı ilk adımla başlıyor, harici cihazları çıkarmakla. BIOS belgesi son çare olarak Güvenli Mod'a girmeyi, dosyaları yedeklemeyi ve sistemi sıfırlamayı öneriyor. Bilgisayar açılıyor ama ekran gelmiyorsa bu yazı değil [bilgisayar açılıyor ama ekran gelmiyor](/blog/bilgisayar-acilmiyor-ekran-gelmiyor/) yazısı daha uygun.

## Servis çağırmadan önce üç not

1. Ekranda tam olarak ne yazdığını yaz: hazırlanıyor mu, onarılamadı mı, BIOS mu?
2. Son güncelleme, kurulum ya da elektrik kesintisi olup olmadığını hatırla.
3. BIOS açılış menüsünde diskin görünüp görünmediğini not et.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
