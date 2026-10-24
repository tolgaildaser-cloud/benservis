---
title: "Sunny TV uydu kurulumu: Türksat, DiSEqC ve arama"
description: "Sunny televizyonda uydu kurulumu nasıl yapılır? Sunny'nin destek sayfasına göre SAT girişi, Türksat seçimi, DiSEqC portu, sinyal ve şifreli kanallar."
slug: "sunny-tv-uydu-kurulumu"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "sunny" geçen slug/başlık/blog gövdesi YOK.
# GSC: "sunny" satırı yok. OT (bu koşu): "sunny tv u" → 1. "sunny tv uydu kurulumu" · 2. "…uydu kurulumu nasıl yapılır" · 3. "…uydu ayarlama"; "sunny tv " → 4. "…uydu kurulumu"; "sunny tv t" → 2. "…türksat 4a uydu ekleme".
# Belge zinciri (#88): üretici sitesi sunny.com.tr/sikca-sorulan-sorular/ (200) → /sikca-sorulan-sorular/televizyonlar/ (200, "Kurulum ve Kanal İşlemleri", dateModified 2026-07-17), html md5 40fa96f74eae1ff655f0de47d1a27400.
#  Ek PDF: sunny.com.tr/televizyon-kullanim-kilavuzlari/ (200) → wp-content/uploads/Uydulu-32-39-inc-Kullanim-Kilavuzu.pdf (200), 28 s., md5 f35e6683446e4ff2063221ce5ba6aa12 (OCR, s.11 ilk kurulum, s.17 teknik özellik CI yuvası opsiyonel).
# BİLEREK YAZILMAYANLAR: Türksat frekans/transponder değerleri (belgede yok) · TKGS (belgede yok) · LNB tipi değerleri (Sunny belgesinde yok) · çanak yönlendirme · fiyat (#46).
guide:
  difficulty: "Orta"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Uydu çanağından gelen kablo"]
steps:
  - "Çanaktan gelen kabloyu televizyonun SAT IN ya da uydu girişine sıkıca tak."
  - "İlk kurulumda ya da kanal kurulum menüsünde yayın türü olarak Uydu'yu seç."
  - "Uydu listesinden Türksat'ı ya da kullandığın uyduyu işaretle."
  - "Anten tipini ve, birden fazla uydu ya da merkezi sistem varsa, DiSEqC portunu ayarla."
  - "Otomatik kanal aramasını başlat ve bitene kadar televizyonu kapatma."
  - "Kanallar az ya da hiç gelmiyorsa sinyal seviyesine ve kablo bağlantısına bak."
  - "Şifreli kanallar için yayın sağlayıcının modülünü ve kartını CI yuvasına tak."
faq:
  - q: "Sunny televizyonda uydu kanalları nasıl kurulur?"
    a: "Sunny'nin destek sayfasına göre önce uydu kablosunun televizyonun arkasındaki SAT IN ya da uydu girişine doğru bağlandığından emin oluyorsun. Sonra kanal kurulum menüsünde yayın türü olarak Uydu'yu seçiyor, kullanılan uyduyu, anten tipini ve varsa DiSEqC ayarını seçip otomatik aramayı başlatıyorsun."
  - q: "Türksat ayarı nasıl yapılır?"
    a: "Sunny'ye göre kanal ya da uydu kurulum menüsünden uydu listesine girip Türksat'ı seçiyor ve otomatik kanal aramasını başlatıyorsun. Doğru sonuç için kablonun bağlı, sinyalin yeterli ve varsa DiSEqC portunun doğru seçilmiş olması gerekiyor."
  - q: "Apartmanda merkezi uydu var, hangi portu seçmeliyim?"
    a: "Sunny'nin sayfası merkezi uydu sistemi ya da birden fazla uydu kullanılan binalarda doğru port ayarının seçilmesi gerekebileceğini yazıyor. Ayarı bilmiyorsan bina teknik görevlisinden ya da anten sistemini kuran firmadan öğrenmeni öneriyor."
  - q: "Televizyonun kendi uydu alıcısı şifreli kanalları açar mı?"
    a: "Hayır. Sunny'ye göre dahili uydu alıcısı abonelik gerektiren kanalları tek başına şifresiz hâle getirmiyor. Bunun için yayın sağlayıcısına ait geçerli abonelik, modül, kart ya da harici alıcı gerekiyor."
  - q: "Harici uydu alıcısı kullanıyorum, televizyonda kurulum gerekir mi?"
    a: "Hayır, kanallar alıcının kendisinde. Sunny'nin sayfasına göre alıcıyı HDMI kablosuyla televizyonun HDMI girişlerinden birine bağlıyor, ikisini açıp kumandadaki Kaynak ya da Source tuşuyla o HDMI girişini seçiyorsun."
images:
  coverAlt: "Bir apartman balkonuna monte edilmiş uydu çanağı"
  steps:
    - "Televizyonun arka panelinde uydu girişine takılı koaksiyel kablo"
    - "Televizyon ekranında açık duran yayın türü seçim listesi"
    - "Televizyon ekranında uydu listesi ve seçili satır"
    - "Çatıda yan yana duran birden fazla uydu çanağı"
    - "Televizyon ekranında ilerleyen otomatik kanal araması"
    - "Televizyon ekranında sinyal seviyesi göstergesi"
    - "Televizyonun yan tarafındaki modül yuvası"
---

Sunny televizyonunu çanağa bağlayıp uydu kanallarını kurmak istiyorsun ya da kanallar gelmiyor ve uydu ayarını baştan yapman gerekiyor. Uydu kurulumu Sunny'de kanal kurulum menüsünden yapılıyor: girişi doğru seçmek, uyduyu ve portu doğru işaretlemek ve aramayı tamamlamak. Bu yazıda Sunny'nin kendi sitesindeki televizyon destek sayfasının "Kurulum ve Kanal İşlemleri" bölümünü ve Sunny'nin uydulu televizyon kullanım kılavuzunu temel aldık. Sunny'nin sayfası menü adlarının modele ve işletim sistemine göre değiştiğini belirtiyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kabloyu SAT IN girişine tak, yayın türü Uydu, uydu listesinden Türksat, gerekiyorsa DiSEqC portu, sonra otomatik arama. Şifreli kanallar için abonelik ve modül gerekir; dahili alıcı şifreyi çözmez.

## Kurulumda üç kritik seçim

| Seçim | Neden önemli | Bilmiyorsan |
|---|---|---|
| **Giriş** | Kablo SAT IN ya da uydu girişine takılmalı | Arka paneldeki yazıya bak |
| **Uydu** | Türksat ya da kullanılan uydu seçilmeli | Çanağın hangi uyduya baktığını kuran kişiye sor |
| **DiSEqC portu** | Birden fazla uydu ya da merkezi sistemde gerekli | Bina teknik görevlisine sor |

## Adım adım: Sunny TV uydu kurulumu

**1. Kabloyu doğru girişe tak.** Sunny'nin sayfası uydu kablosunun televizyonun arkasındaki **SAT IN** ya da uydu girişine doğru şekilde bağlanmasını şart koşuyor. Kablo karasal anten girişine takılırsa uydu araması kanal bulmaz. Konektörün gevşek olmadığından, kablonun ezilmediğinden emin ol.

**2. Yayın türünü Uydu yap.** Televizyonu ilk kez açıyorsan Sunny'ye göre ekrandaki dil, ülke, kullanım modu, internet bağlantısı ve yayın türü seçeneklerini sırayla tamamlıyorsun; yayın türünde Uydu'yu seçip kanal aramasını oradan başlatabilirsin. Sunny'nin uydulu kılavuzunda ilk kurulum menüsü menü dili ve ülke seçimiyle açılıyor. Kurulum bittiyse kanal kurulum menüsüne girip yayın türü olarak **Uydu**'yu seç.

**3. Uyduyu seç.** Uydu listesine girip **Türksat**'ı ya da çanağının baktığı uyduyu işaretle. Sunny, frekans bilgilerinin ve yayın parametrelerinin zamanla değişebildiğini, bu yüzden güncel Türksat kanal ayarlarının kullanılmasını öneriyor.

**4. Anten tipi ve DiSEqC.** Kullanılan uyduyu seçtikten sonra anten tipini ve varsa **DiSEqC** ayarını seç. Tek çanak ve tek uydu kullanıyorsan çoğu zaman ek ayar gerekmez; bu bizim çıkarımımız. Merkezi uydu sistemi ya da birden fazla uydu kullanılan binalarda Sunny doğru port ayarının seçilmesi gerekebileceğini, bilinmiyorsa bina teknik görevlisinden ya da anten sistemini kuran firmadan bilgi alınmasını yazıyor.

**5. Otomatik aramayı başlat.** Ayarları yapınca otomatik kanal aramasını başlat. Sunny arama tamamlanana kadar televizyonu kapatmamanı ve anten bağlantısını çıkarmamanı istiyor. Bazı modellerde otomatik arama eski listeyi silip yenisini kurduğu için, daha önce kanal sıralaması yaptıysan ekrandaki uyarıyı oku. Yalnız tek bir yayın eksikse frekansla manuel arama daha uygun; ayrıntı [Sunny TV kanal frekans ayarlama](/blog/sunny-tv-kanal-frekans-ayarlama/) yazısında.

**6. Sinyal seviyesine bak.** Kanal az geldiyse ya da hiç gelmediyse Sunny'nin önerdiği sıra şu: kablonun gevşek, hasarlı ya da ek yapılmış olup olmadığını kontrol et, çıkarıp yeniden tak. Merkezi sistemde aynı binadaki diğer evlerin yayın durumunu sor. Sunny hava koşullarının, çanağın yönünün, LNB arızasının ya da bina dağıtım sisteminin sinyal seviyesini etkileyebileceğini yazıyor. Arama bitip hiç kanal bulunmuyorsa yanlış uydu ya da yanlış DiSEqC portu seçimi de kanal bulunmasını engelleyebiliyor.

**7. Şifreli kanallar.** Sunny'ye göre şifreli yayınlar için yayın sağlayıcısına ait geçerli abonelik, modül, kart ya da harici alıcı gerekiyor; televizyonun dahili alıcısı bu kanalları tek başına açmıyor. Televizyonun CI ya da CI+ yuvası varsa yayın sağlayıcıdan aldığın modül ve kartı birleştirip yuvaya doğru yönde, zorlamadan tak; televizyonu açıp modülün algılandığını kontrol et. Sunny'nin uydulu kılavuzunun teknik özellik tablosunda CI yuvası opsiyonel olarak geçiyor, yani her modelde olmayabilir.

## Harici uydu alıcısı kullanıyorsan

Uydu kutusu kullanıyorsan kanal kurulumu televizyonda değil kutuda yapılıyor. Sunny'nin sayfasına göre alıcıyı HDMI kablosuyla televizyonun HDMI girişlerinden birine bağla, ikisini aç ve kumandadaki **Kaynak** ya da **Source** tuşuyla bağladığın HDMI girişini seç. Görüntü gelmiyorsa kabloyu, seçili kaynağı ve alıcının açık olup olmadığını kontrol et. HDMI tarafındaki sorunlar için [TV HDMI sinyal yok](/blog/tv-hdmi-sinyal-yok/) yazısına bak.

## Ne zaman servis

- Kablo SAT IN girişinde, uydu ve port doğru ama hiçbir uydu kanalı gelmiyorsa
- Aynı binada başka evlerde yayın varken sende yoksa
- Modül takıldığı hâlde televizyon algılamıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Giriş, uydu seçimi, port ve arama sende. Sunny'nin sayfası da çanak ve anten ayarları güvenli yapılamıyorsa uzman desteği öneriyor; çanak yönü, LNB ve bina sistemi uzmanın, televizyonun alıcı devresi Sunny yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Televizyonun tam model kodu ne?
2. Tek çanak mı, merkezi sistem mi?
3. Hangi uydu ve port seçili?
4. Arama kaç kanal buldu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kanallar bir anda kaybolduysa [Sunny TV kanallar silindi](/blog/sunny-tv-kanallar-silindi/) yazısına bak. Bil, gör, çağır.
