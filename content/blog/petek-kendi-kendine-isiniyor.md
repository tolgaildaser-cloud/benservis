---
title: "Petek kendi kendine ısınıyor ya da soğuyor: neden?"
description: "Petek kimse dokunmadan ısınıyor ya da kapanıyorsa Baymak Lunatec donma korumasına ve Danfoss Eco termostatlı vananın programına, açık pencere işlevine bak."
slug: "petek-kendi-kendine-isiniyor"
date: "2026-11-10"
category: "Kombi"
updated: "2026-11-10"
kisaCevap: "Petek kombi kapalıyken kendi kendine ısınıyorsa önce donma korumasına bak: Baymak Lunatec kılavuzunda akış suyu 7 °C altına inince pompa, 4 °C'de brülör devreye girer. Petek kendiliğinden soğuyorsa elektronik vana programına bak; Danfoss Eco açık pencere algılayınca ısıtmayı 30 dakikaya kadar keser."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 4; BOSLUK.md sürüm 4 #341 "petek kendi kendine ısınıyor / kapanıyor / soğuyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın, farklı niyet: petekler-isinmiyor, kombi-petek-simgesi-yanip-sonuyor, petek-havasi-nasil-alinir.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-detay.txt): "petek kendi kendine" #1 "petek kendi kendine ısınıyor", #2 "…kapanıyor", #3 "…soğuyor", #4 "petek kendi kendine neden kapanır", #5 "kombi petek sıcaklığı kendi kendine yükseliyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Baymak Lunatec tam yoğuşmalı kombi kullanma kılavuzu (36 s. PDF) https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf md5 dec11a69fd55c366d613da7ba31d6d98 — PDF s.4, 24, 25 · (B) Danfoss Eco elektronik radyatör termostatı kurulum kılavuzu VILTH142 (22 s. PDF) https://assets.danfoss.com/documents/35866/AN235786405824tr-000101.pdf md5 bd5ede1b8131d3a77197d8637b26081b — PDF s.8, 10, 12, 15, 16, 17, 18, 19.
# BİLEREK YAZILMAYANLAR: mekanik termostatik vana başlıklarının çalışma ilkesi (bu belgelerde yok) · kombi kartı, sensör, pompa arızası (servis) · başka markaların donma koruma eşikleri · fiyat (#46).
# Alıntı denetimi: petek-kendi-kendine-isiniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin ve vananın kılavuzu", "Akıllı telefon (elektronik vana için)"]
steps:
  - "Peteğin ne zaman ısındığını ya da soğuduğunu not et."
  - "Kombi kapalıyken ısınıyorsa donma korumasını düşün."
  - "Petek vanasında elektronik termostat var mı, bak."
  - "Yeni takılan termostatta ilk hafta uyum sürecini bekle."
  - "Termostatın programını ve modlarını kontrol et."
  - "Soğuma pencere açılınca olduysa açık pencere işlevini hesaba kat."
  - "Pil ve donmadan koruma ayarını kontrol et, açıklanmıyorsa servis çağır."
faq:
  - q: "Kombi kapalıyken petek neden ısınır?"
    a: "Baymak Lunatec kılavuzuna göre ısıtma modu kapatılsa da donmaya karşı koruma işlevi çalışmaya devam eder. Akış sıcaklığı 7 °C altına düşünce pompa çalışır, 4 °C'ye ulaşırsa brülör akış 10 °C'ye çıkana kadar yanar."
  - q: "Petek kendi kendine neden kapanır?"
    a: "Peteğinde Danfoss Eco gibi elektronik termostat varsa programdaki azaltma periyotları, tatil ya da duraklatma modu ve açık pencere işlevi vanayı kısar. Açık pencere işlevi oda sıcaklığı belirgin düşünce vanayı kapatır, ısıtma 30 dakikaya kadar kesilir."
  - q: "Yeni taktığım akıllı vana neden kendi kendine açılıp kapanıyor?"
    a: "Danfoss Eco kılavuzuna göre ilk hafta cihaz kendini ısıtma sistemine uyarlar; bu sırada yavaş tepki vermesi ya da ısıtmayı kendi kendine artırıp azaltması normaldir. İlk gece vanayı kapatıp tam açılma noktasını bulmak için yeniden açar."
  - q: "Danfoss Eco'nun varsayılan sıcaklıkları kaç derece?"
    a: "Kılavuza göre Evde Modu 21 °C, Dışarıda ya da Gece Modu 17 °C, Tatil Modu 15 °C. Danfoss iki mod arasında 4 dereceyi geçmeyen bir fark öneriyor; ayar aralığı 5-28 °C."
images:
  coverAlt: "Duvarda sade panel radyatör, yanında küçük saat ve kar tanesi çizimi"
  steps:
    - "Radyatörün üstüne elini koyan beyaz eldivenli sade siluet el"
    - "Kombinin ekranına bakan beyaz eldivenli sade siluet el"
    - "Radyatör vanasının üstündeki yuvarlak termostat başlığını gösteren beyaz eldivenli sade siluet el"
    - "Duvar takviminde bir haftayı işaretleyen beyaz eldivenli sade siluet el"
    - "Akıllı telefonda program ekranına bakan beyaz eldivenli sade siluet el"
    - "Radyatörün üstündeki pencereyi kapatan beyaz eldivenli sade siluet el"
    - "Termostat başlığının pil kapağını açan beyaz eldivenli sade siluet el"
---

Petek kimse dokunmadan ısınıyorsa çoğu zaman kombinin donma koruması çalışıyordur. Baymak Lunatec tam yoğuşmalı kombi kılavuzuna göre ısıtma modu kapalıyken bile donmaya karşı koruma işlevi çalışmaya devam eder: akış sıcaklığı 7 °C'nin altına düşünce pompa çalışır, 4 °C'ye ulaşırsa brülör akış 10 °C olana kadar yanar, sonra pompa 3 dakika daha döner.

Petek kendiliğinden soğuyor ya da kapanıyorsa vanadaki termostata bak. Danfoss Eco elektronik radyatör termostatı kılavuzu açık pencere işlevinin oda sıcaklığı belirgin düşünce vanayı kapattığını ve ısıtmanın 30 dakikaya kadar kesildiğini yazıyor. Kendi kombinin ya da vananın kılavuzu farklı bir değer veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız ayar, program ve gözlem kontrollerini anlatıyor. Kombi kartı, sensör, pompa ve gaz devresi yetkili servis işidir. Baymak kombinin tamamen kapatılması için elektrik beslemesinin kesilip gaz musluğunun kapatılması gerektiğini, bu durumda tesisatın donmaya karşı korunmadığını yazıyor.

## Petek neden kendi kendine ısınır ya da soğur?

| Belirti | Olası işlev | Belge |
|---|---|---|
| Kombi kapalıyken petek ılıyor | Donmaya karşı koruma: 7 °C'de pompa, 4 °C'de brülör | Baymak Lunatec |
| Yeni vana ısıtmayı kendi kendine artırıp azaltıyor | İlk hafta uyum süreci | Danfoss Eco |
| Belli saatlerde petek soğuyor | Azaltma periyodu: Gece/Dışarıda 17 °C | Danfoss Eco |
| Pencere açılınca petek kapanıyor | Açık pencere işlevi: 30 dakikaya kadar | Danfoss Eco |
| Petek ılık kalıyor, ısınmıyor | Tatil (15 °C), duraklatma ya da donmadan koruma ayarı | Danfoss Eco |

## Adım adım: petek kendi kendine ısınıyor ya da soğuyorsa ne yapılır?

**1. Peteğin ne zaman ısındığını ya da soğuduğunu not et.** Saat, dış hava ve o sırada pencerenin açık olup olmadığını yaz. Gece ya da hep aynı saatte olan bir değişim programa, soğuk havada kombi kapalıyken ısınma donma korumasına işaret eder.

**2. Kombi kapalıyken ısınıyorsa donma korumasını düşün.** Baymak ısıtma modunu kapatmanın donmaya karşı koruma işlevini durdurmadığını yazıyor. Kılavuza göre bu işlev kombi elektriğe bağlı, gaz açık, sistem basıncı normal ve kombi arızasızken çalışır. Pompa blokaj koruması ve donma koruması için cihazın elektriğe bağlı kalmasını istiyor; yani bu ısınmayı kapatmaya çalışma.

**3. Petek vanasında elektronik termostat var mı, bak.** Vananın üstünde ekranlı, pilli bir başlık varsa petek bir programa göre çalışıyordur. Danfoss Eco bir programlanabilir elektronik radyatör vanası kontrol ünitesi; sıcaklığı 5 ile 28 °C arasında ayarlıyor.

**4. Yeni takılan termostatta ilk hafta uyum sürecini bekle.** Danfoss Eco kurulumdan sonraki ilk hafta kendini ısıtma sistemine uyarlar; bu sırada yavaş tepki vermesi ya da ısıtmayı kendi kendine artırıp azaltması normaldir. İlk gece radyatör ısıtmasını kapatır, sonra vananın tam açılma noktasını bulmak için yeniden açar; gerekirse bunu bir hafta gecede bir tekrarlar.

**5. Termostatın programını ve modlarını kontrol et.** Danfoss Eco'nun varsayılan sıcaklıkları Evde Modu 21 °C, Dışarıda ya da Gece Modu 17 °C, Tatil Modu 15 °C. Uygulamada günde en fazla 3 azaltma periyodu kurulabiliyor; termostat elle Min seviyeye düşürülünce Duraklatma moduna geçiyor. Ana ekrandan yaptığın değişiklik bir sonraki azaltma periyoduna kadar geçici.

**6. Soğuma pencere açılınca olduysa açık pencere işlevini hesaba kat.** Danfoss Eco oda sıcaklığı belirgin düştüğünde vanayı kapatır ve ısıtma 30 dakikaya kadar kesilir. Perde ya da mobilya termostatın üstünü örterse bu işlev olumsuz etkilenir; termostatın önünü açık tut.

**7. Pil ve donmadan koruma ayarını kontrol et, açıklanmıyorsa servis çağır.** Danfoss Eco piller tükenmeden yaklaşık bir ay önce zayıf pil sembolü gösterir; piller bitmeden vanayı Donmadan Koruma ayarında bırakır. Donmadan koruma sıcaklığı 4 ile 10 °C arasında ayarlanır. Bu işlevlerle açıklanmayan bir ısınma ya da soğuma varsa kombi ve tesisat için yetkili servise başvur.

## Tek petek soğuk, diğerleri sıcaksa ne yapılır?

O petekte elektronik termostat yoksa ya da programı doğruysa sıra tesisatta. Önce [petek havası nasıl alınır](/blog/petek-havasi-nasil-alinir/) yazısındaki sırayla havayı al. Hiçbir petek ısınmıyorsa ya da üst kat soğuksa [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısındaki belirti ayrımına geç. Kombi ekranında petek simgesi yanıp sönüyorsa [kombi petek simgesi yanıp sönüyor](/blog/kombi-petek-simgesi-yanip-sonuyor/) sayfasına bak.

---

**Kaynak künyesi.** Donma koruma eşikleri, ısıtma modunun kapatılması ve tamamen kapatma bilgisi Baymak Lunatec tam yoğuşmalı kombi kullanma kılavuzundan; uyum süreci, varsayılan sıcaklıklar, program, açık pencere, pil ve donmadan koruma bilgisi Danfoss Eco elektronik radyatör termostatı kurulum kılavuzundan alınmıştır. Kendi kombinin ya da vananın kılavuzu farklı bir değer veriyorsa **kendi kılavuzun esastır.**

Petek bu işlevlerle açıklanmayan biçimde ısınıp soğuyorsa belirtiyi ve kombi modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
