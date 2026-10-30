---
title: "Laptop ses gelmiyor: Microsoft ve Apple'a göre sıra"
description: "Laptoptan ses gelmiyor, ses açık görünüyor mu? Microsoft ve Apple'ın destek sayfalarına göre kulaklık, çıkış cihazı ve ses geliştirmeleri sırası."
slug: "laptop-ses-gelmiyor"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk, P47 / PAKETLER #113). origin/main'de genel "laptop-ses-gelmiyor" yok (yakın: tv-ses-gelmiyor, samsung-televizyon-ses-gelmiyor, benq-monitor-ses-gelmiyor; bilgisayar-yavas-calisiyor).
# Arama kanıtı: PAKETLER #113: OT "laptop ses" #2,#3,#4,#8,#10; "bilgisayar ses gelmiyor" #1–#10.
# Belgeler (#88, curl -sL -A "Mozilla/5.0", HTTP 200): (M) Microsoft Destek TR "Windows'ta hoparlörlerden veya kulaklıklardan ses gelmediğinde ses sorunlarını giderme" https://support.microsoft.com/tr-tr/windows/hardware/audio/fix-audio-issues-when-no-sound-plays-from-speakers-or-headphones-in-windows · (A) Apple Support "If the internal speakers on your Mac aren't working" https://support.apple.com/en-us/102411 (yayın 30 Mart 2026).
# BİLEREK YAZILMAYANLAR: "ses çıkış cihazı bulunamadı" ve cızırtılı ses (Microsoft'ta ayrı sayfalar, indirilmedi, 2 belge sınırı) · ses sürücüsü kaldırma/güncelleme (bu belgede yok) · hoparlör/kart sökümü (servis işi) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Çaldığın uygulamanın ve sitenin kendi ses düzeyini kontrol et."
  - "Laptoptaki kulaklığı, harici hoparlörü ve bağlı ekranı çıkar."
  - "Ses ayarlarında doğru çıkış cihazının seçili, sesin kapalı olmadığını ve kaydırıcının açık olduğunu kontrol et."
  - "Doğru hoparlörü varsayılan kayıttan yürütme cihazı olarak ayarla."
  - "Ses geliştirmelerini kapat."
  - "Otomatik ses sorun gidericisini çalıştır."
  - "Hâlâ ses yoksa servise götür."
faq:
  - q: "Ses simgesi normal görünüyor ama ses yok, neden?"
    a: "Microsoft, ses düzeyi simgesi normal görünse de ses duyulmamasının dört olası nedenini sayıyor: yanlış ses çıkış cihazının seçilmesi, sesin kapatılması, ses geliştirmelerinin karışması ve ses sürücüsünün düzgün çalışmaması. Bu yazıdaki ilk beş adım ilk üç nedeni eler."
  - q: "'Ses çıkış cihazı bulunamadı' mesajı için ne yapmalıyım?"
    a: "Microsoft bunu ayrı bir sayfada ele alıyor: Windows'ta eksik veya algılanmayan ses çıkış aygıtı sorununu giderme. Bu yazı o sayfayı kullanmadı; mesaj görüyorsan o sayfaya bak."
  - q: "Ses cızırtılı ya da çok kısık geliyor, bu yazı çözer mi?"
    a: "Hayır. Microsoft'un düşük ya da sessiz ses ile bozuk ya da çatırdayan ses için ayrı sayfaları var. Bu yazı yalnızca hiç ses gelmeyen durumu anlatıyor."
  - q: "Mac'te yerleşik hoparlörlerden ses gelmiyorsa?"
    a: "Apple, uygulamanın ses düzeyine bakmanı, kulaklık ve harici cihazları çıkarmanı, Sistem Ayarları > Ses > Çıkış'ta yerleşik hoparlörlerin seçili olduğunu ve Sessiz kutusunun işaretli olmadığını kontrol etmeni istiyor. Hâlâ ses yoksa Apple, servis gerekebileceğini söylüyor."
images:
  coverAlt: "Açık bir laptop ve yanında üzerine çarpı çizilmiş bir hoparlör simgesi"
  steps:
    - "Laptop ekranında bir video penceresinin ses kaydırıcısını sağa çeken beyaz eldivenli sade siluet el"
    - "Laptopun yan girişinden kulaklık fişini çeken beyaz eldivenli sade siluet el"
    - "Ses ayarı ekranında çıkış cihazı listesi ve sessiz kutusunun işaretini kaldıran beyaz eldivenli sade siluet el"
    - "Cihaz listesinde hoparlör satırına sağ tıklayan beyaz eldivenli sade siluet el"
    - "Ses ayarı penceresinde bir anahtarı kapalı konuma çeviren beyaz eldivenli sade siluet el"
    - "Laptop ekranında stetoskop simgeli bir sorun giderici penceresi"
    - "Tezgâhın üzerinde laptop ve yanında servis simgesi olan çanta"
---

Videoyu açıyorsun, çubuk dolu, simge normal. Ama laptoptan tık yok. "Laptop ses gelmiyor" derdinin büyük kısmı bozuk bir hoparlör değil; yanlış seçilmiş bir çıkış, takılı unutulmuş bir kulaklık ya da bir ses ayarıdır. Bu yazıdaki sıra **Microsoft**'un Türkçe "ses gelmediğinde" sayfasından ve **Apple**'ın Mac hoparlör sayfasından geliyor. Laptopunun üreticisi farklı bir şey söylüyorsa **kendi kılavuzu esastır.**

> 🔊 **Önce ayrım yap:** Hiç ses yok mu, yoksa ses var ama kısık ya da cızırtılı mı? Bu yazı yalnızca ilkini anlatıyor. Diğerleri için Microsoft'un ayrı sayfaları var; aşağıda belirttik.

## Belgeler ne diyor

| Konu | Microsoft (Windows) | Apple (Mac) |
|---|---|---|
| **Uygulama sesi** | Kaydırıcı açık, ses kapalı olmamalı | Uygulamanın kendi ses denetimi |
| **Harici cihaz** | Birden çok çıkış varsa doğrusunu seç | Kulaklık ve harici cihazları çıkar |
| **Çıkış ayarı** | Ayarlar > Sistem > Ses > Çıkış | Sistem Ayarları > Ses > Çıkış |
| **Ek ayar** | Varsayılan cihaz, ses geliştirmeleri | Belgede yok |
| **Otomatik araç** | Ses sorun gidericisi | Belgede yok |

## Windows neden ses vermez?

Microsoft'un sayfası, ses düzeyi simgesi normal görünse de hoparlör ya da kablolu kulaklıktan ses duyulmamasının dört olası nedenini sayıyor: yanlış ses çıkış cihazı seçilmesi, sesin kapatılması, ses geliştirmelerinin karışması ve ses sürücüsünün düzgün çalışmaması. Aşağıdaki ilk beş adım ilk üç nedeni eler. Dördüncü neden, yani sürücü, bu belgede çözümü olan bir madde değil; sayfa o konuyu başka bir bağlantıya bırakıyor. Apple'ın sayfası da aynı mantıkla ilerliyor: önce uygulama, sonra bağlı cihazlar, sonra sistem ayarı; en sonda servis.

## Adım adım: sesi gelmeyen laptop için sıra

**1. Uygulamanın kendi sesine bak.** Apple'ın hatırlattığı bir şey: ses çalabilen çoğu uygulamanın kendi ses denetimi var. Örneğin Music uygulamasında pencerenin üstündeki kaydırıcı, Apple TV uygulamasında izlediğin içeriğin ses kaydırıcısı, tarayıcıda ise YouTube gibi kendi oynatıcısı olan sitelerin kendi ses düğmesi var. Safari'de sayfa sessize alınmış olabilir. Başka bir uygulamada ya da sitede ses duyuyorsan hoparlörler çalışıyor demektir; sorun o uygulamanın ayarında.

**2. Dışarıdan bağlı cihazları çıkar.** Apple, sesin harici bir cihaza gitmediğinden emin olmak için bunları ayırmanı söylüyor: 3,5 mm kulaklık girişindeki kulaklık ya da hoparlör, USB ya da Thunderbolt girişindeki ses cihazları ve USB ya da HDMI ile bağlı harici ekranlar. Microsoft de birden çok ses çıkışı varsa doğru olanın seçildiğine bakmanı istiyor.

**3. Çıkış cihazını ve sessiz ayarını kontrol et.** Windows'ta Başlat > Ayarlar > Sistem > Ses, Çıkış altında doğru cihazı seç; sesin kapalı olmadığından ve kaydırıcının açık olduğundan emin ol. Mac'te Sistem Ayarları > Ses > Çıkış sekmesinde Tür sütununda yerleşik hoparlörleri seç, "Çıkış ses düzeyi" kaydırıcısını aç ve Sessiz kutusunun işaretli olmadığına bak. Sonra sesi yeniden dene.

**4. Varsayılan cihazı ayarla.** Windows 11'de Ayarlar > Sistem > Ses > Diğer ses ayarları > Kayıttan yürütme'yi aç, doğru cihaza sağ tıkla, "Varsayılan olarak ayarla"yı seç. Windows 10'da yol Denetim Masası'ndaki Ses penceresi üzerinden, Kayıttan Yürüt sekmesinde "Varsayılan Yap".

**5. Ses geliştirmelerini kapat.** Microsoft'a göre ses geliştirmelerinin açık olması ses sorunlarına neden olabilir. Windows 11'de Ayarlar > Sistem > Ses'te cihazını seç, Gelişmiş ayarlar'da Ses geliştirmeleri'ni Kapalı yap. Windows 10'da cihazın Özellikler'inde Geliştirmeler sekmesinden "Tüm geliştirmeleri devre dışı bırak". Sekme yoksa Gelişmiş'ten tüm ses efektlerini kapat.

**6. Otomatik sorun gidericiyi çalıştır.** Windows 11'de Yardım Al uygulamasındaki otomatik Ses sorun gidericisi tanılamayı kendisi yapıp sorunu çözmeye çalışıyor. Microsoft'un sayfasında bu araç Windows 11 için ilk önerilen adım; elle yapılan kontroller işe yaramadıysa ya da onlarla uğraşmak istemiyorsan doğrudan buradan da başlayabilirsin.

**7. Hâlâ yoksa servis.** Apple, yerleşik hoparlörler yine çalışmazsa servis gerekebileceğini söylüyor. Hoparlörü ya da ses kartını laptopun içinde değiştirmek servis işi; bu yazının sınırı dışında.

## Bu yazı neyi çözmez?

Microsoft'un aynı bölümünde ayrıca eksik ya da algılanmayan ses çıkış aygıtı, Windows güncellemesinden sonra ses kaybı, bozuk ya da çatırdayan ses ve ses sürücüsünü güncelleme için ayrı sayfalar var. "Ses çıkış cihazı bulunamadı" gibi bir mesajla karşılaşıyorsan bu yazının adımları yetmez. Bu yazı o sayfaların içeriğini anlatmıyor. Sürücüyle ilgili adımları da koymadık; belge o adımı bu sayfada tarif etmiyor.

## Ne zaman servis?

Çıkışı, sessiz ayarını, varsayılan cihazı ve ses geliştirmelerini kontrol ettiysen ve sorun giderici de bir şey bulamadıysa laptopu açmadan yapılacak şey bitti. Benzer bir belirti için [laptop şarj olmuyor](/blog/laptop-sarj-olmuyor/) ya da [laptop ısınıyor, fan sesi var](/blog/laptop-isiniyor-fan-sesi/) yazılarına da bakabilirsin.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
