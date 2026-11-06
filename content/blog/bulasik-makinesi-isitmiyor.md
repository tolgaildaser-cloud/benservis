---
title: "Bulaşık makinesi ısıtmıyor: Vestel ve Samsung'a göre"
description: "Bulaşık makinesi ısıtmıyorsa Vestel BM 10502 ve Samsung DW60H5050 kılavuzları önce programı, su girişini ve ısıtıcı hata kodunu kontrol etmeni istiyor."
slug: "bulasik-makinesi-isitmiyor"
date: "2026-11-10"
category: "Bulaşık makinesi"
updated: "2026-11-10"
kisaCevap: "Bulaşık makinesi ısıtmıyorsa önce seçtiğin programa ve su girişine bak: Samsung DW60H5050 kılavuzunda Ön Yıkama soğuk durulamadır, su az gelirse ısıtıcı emniyet için çalışmaz. Isıtma 60 dakikada beklenen sıcaklığa ulaşmazsa Samsung HE, Vestel BM 10502 F8 kodu verir; bu kodlar servis işidir."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 1; BOSLUK.md sürüm 4 #298 "bulaşık makinesi ısıtmıyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: bulasik-makinesi-temiz-yikamiyor, bulasik-makinesi-kurutmuyor, bulasik-makinesi-su-almiyor, bulasik-makinesi-hata-kodlari (ısıtma niyetini karşılamıyor).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "bulaşık makinesi ı" #2 "…ısıtmıyor", #9 "…ısıtmıyor neden"; "bulaşık makinesi ısıtmıyor" #1, #2 "…neden", #5 "…ne yapmalıyım", #8 "…suyu ısıtmıyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Vestel BM 10502 X GI WIFI bulaşık makinesi kullanım kılavuzu 20263192_k (56 s. PDF) https://statik.vestel.com.tr/webfiles/20263192_k.pdf md5 bdbd31789107cc96048ad674595fd6ff — PDF s.12, 13, 34, 35, 44, 49 · (B) Samsung DW60H6050 / DW60H5050 / DW60H3010 bulaşık makinesi kullanım kılavuzu DW5000H_DD81-01651A-09 (156 s. PDF, TR bölümü) https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60H5050FW%2FTR&CttFileID=6909904&CDCttType=UM&VPath=UM%2F201709%2F20170920184932741%2FDW5000H_DD81-01651A-09_EN_TR_AR_R.pdf md5 7c65d2a4e2da01774637dc253f7f10d6 — PDF s.68, 71, 93, 94, 95, 96.
# BİLEREK YAZILMAYANLAR: ısıtıcı rezistans, termistör ve kart sökümü / ölçümü (servis) · Vestel program tablosundaki tek tek program sıcaklıkları (sütunlar metinde karışık okunuyor) · başka marka hata kodları · fiyat (#46).
# Alıntı denetimi: bulasik-makinesi-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesinin kullanma kılavuzu"]
steps:
  - "Ekranda hata kodu var mı, bak."
  - "Seçtiğin programın ısıtmalı olup olmadığını kontrol et."
  - "Su musluğunun sonuna kadar açık olduğunu kontrol et."
  - "Giriş hortumunun filtresini temizle."
  - "Makinenin hangi suya bağlı olduğunu kontrol et."
  - "Başka bir programla bir yıkama daha dene."
  - "Isıtıcı ya da sensör kodu sürüyorsa servise başvur."
faq:
  - q: "Bulaşık makinesi neden suyu ısıtmaz?"
    a: "Samsung DW60H5050 kılavuzuna göre su girişi düşük seviyedeyse ısıtıcı bir emniyet cihazı tarafından çalıştırılmıyor. Ön Yıkama programı da soğuk durulama yapıyor. Su ve program doğruysa ısıtıcı ya da sıcaklık sensörü hatası koda düşüyor."
  - q: "Bulaşık makinesinde HE ya da F8 hatası ne demek?"
    a: "Samsung kılavuzunda HE ısıtıcı hatası: ısıtma 60 dakika sürüyor ama beklenen sıcaklığa erişilmiyor. Vestel BM 10502 kılavuzunda F8 ısıtıcı hatası, F6 hatalı ısıtma sensörü, F7 aşırı ısınma; üçünün karşılığı da Servisle iletişime geçin."
  - q: "Bulaşık makinesi sıcak suya bağlanabilir mi?"
    a: "Vestel kılavuzu soğuk suyu tercih ediyor; sıcak suyun en yüksek sıcaklığı 60 °C. Hortumunda 25° işareti olan modellerde su sıcaklığı en çok 25 °C. Samsung DW60H5050 de 60 °C'yi aşmamak şartıyla sıcak su hattına bağlanabiliyor."
  - q: "Isıtmayan makinenin içine hemen elimi sokabilir miyim?"
    a: "Samsung, iç kısmı temizlemeden önce ısıtma öğelerinin soğuması için bir döngüden sonra 20 dakika beklemeni istiyor; aksi halde yanma tehlikesi var. Kontrolden önce makineyi kapat ve bekle."
images:
  coverAlt: "Kapağı açık sade bulaşık makinesi ve içinde buharsız tabaklar çizimi"
  steps:
    - "Makinenin ekranına bakan beyaz eldivenli sade siluet el çizimi"
    - "Program tuşuna basan beyaz eldivenli sade siluet el"
    - "Tezgah altındaki musluğu açan beyaz eldivenli sade siluet el"
    - "Hortum ucundaki süzgeci akan suda yıkayan beyaz eldivenli sade siluet el"
    - "Musluğa bağlı giriş hortumunu gösteren beyaz eldivenli sade siluet el"
    - "Başlat tuşuna basan beyaz eldivenli sade siluet el çizimi"
    - "Telefonla arama yapan beyaz eldivenli sade siluet el çizimi"
---

Bulaşık makinesi ısıtmıyorsa önce seçtiğin programa ve makineye gelen suya bak. Samsung DW60H5050 kılavuzunda Ön Yıkama programı kurumuş bulaşıkları suya daldırmak için yapılan bir soğuk durulamadır; aynı kılavuz su girişi düşük seviyedeyken ısıtıcının bir emniyet cihazı tarafından çalıştırılmadığını yazıyor.

Program ve su doğruysa makine bunu hata koduyla gösteriyor. Samsung'un hata tablosunda HE, ısıtmanın 60 dakika boyunca sürdüğü halde beklenen sıcaklığa erişilmediği anlamına geliyor. Vestel BM 10502 X GI WIFI kılavuzunda F8 ısıtıcı hatası, F6 hatalı ısıtma sensörü, F7 aşırı ısınmadır ve üçünde de çözüm "Servisle iletişime geçin". Kendi makinenin kılavuzu farklı bir kod veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Güvenlik.** Isıtıcı, sensör ve kart elektrikli parçadır; sökme ve ölçme servis işidir. Samsung, iç kısmı temizlemeden önce ısıtma öğelerinin soğuması için bir döngüden sonra 20 dakika beklemeni istiyor. Kontrolden önce makineyi kapat.

## Bulaşık makinesi neden ısıtmaz?

| Durum | Vestel BM 10502 X GI WIFI | Samsung DW60H5050 |
|---|---|---|
| Isıtmayan program | Ön Yıkama: sonra yıkanacak bulaşığı durulama | Ön Yıkama: soğuk durulama |
| Su az geliyor | FF: musluğu ve hortum filtresini kontrol et | 4E: su azsa ısıtıcı çalışmaz |
| Isıtıcı hatası | F8: servis | HE: 60 dakikada sıcaklığa erişilmiyor |
| Sensör hatası | F6: hatalı ısıtma sensörü | tE: sıcaklık sensörü arızası |
| Elektrik | LO: düşük voltaj, servis | Güç kaynağı: önce başka program dene |

## Adım adım: bulaşık makinesi ısıtmıyorsa ne yapılır?

**1. Ekranda hata kodu var mı, bak.** Samsung bir hata olduğunda ekranda kod gösteriyor. Kodu not et; HE, tE, F8, F6 ya da F7 görüyorsan kullanıcı adımı yok, doğrudan 7. adıma geç.

**2. Seçtiğin programın ısıtmalı olup olmadığını kontrol et.** Vestel Ön Yıkama programını daha sonra yıkayacağın bulaşıkları durulamak için anlatıyor. Samsung'da da Ön Yıkama soğuk durulama. Bulaşıklar temiz çıkmıyorsa Samsung daha yoğun bir yıkama programı seçmeni öneriyor.

**3. Su musluğunun sonuna kadar açık olduğunu kontrol et.** Samsung'a göre su girişi düşük seviyedeyse ısıtıcı emniyet için çalışmıyor. Vestel bağlantılardan sonra musluğun sonuna kadar açılmasını ve musluk basıncının en az 0,3 bar olmasını istiyor.

**4. Giriş hortumunun filtresini temizle.** Vestel FF su giriş sistemi arızasında giriş hortumunu musluktan ayırıp hortumun filtresini temizlemeni istiyor. Önce musluğu kapat, sonra hortumu sök; işi bitirince bağlantıyı sıkıp sızıntıya bak.

**5. Makinenin hangi suya bağlı olduğunu kontrol et.** Vestel soğuk suyu tercih ediyor ve sıcak suyun en çok 60 °C olmasını istiyor; giriş hortumunda 25° işareti varsa su sıcaklığı en çok 25 °C. Samsung sıcak su hattına bağlı makinede yıkama süresinin yaklaşık 15 dakika kısaldığını yazıyor.

**6. Başka bir programla bir yıkama daha dene.** Samsung yıkama performansı sorununda güç kaynağını da neden olarak sayıyor ve servisi aramadan önce başka bir programı denemeni istiyor. Vestel'de LO kodu düşük voltaj arızasıdır ve servis gerektirir.

**7. Isıtıcı ya da sensör kodu sürüyorsa servise başvur.** Vestel F8, F6 ve F7 için servisle iletişime geçmeni istiyor. Servisi ararken kodu, programı ve modelini söyle; ısıtıcıyı kendin sökme.

## Isıtmayan makine bulaşıkları nasıl bırakır?

Vestel'e göre program süresi bulaşık miktarına, su sıcaklığına, ortam sıcaklığına ve seçilen ek fonksiyonlara göre değişiyor; kısa programlar kurutma adımı içermiyor. Vestel'in eko programı, normal kirli bulaşıkta enerji ve su tüketimi açısından en verimli program. Samsung tablosunda bulaşıklar kuru çıkmıyorsa ilk neden boş parlatıcı dağıtıcısı. Islak ve soğuk bulaşık her zaman ısıtıcı arızası anlamına gelmez; önce programı ve parlatıcıyı kontrol et.

## Giren suyun sıcaklığı ısıtmayı nasıl etkiler?

Samsung, 60 °C'yi aşmayan ev sıcak su hattına (merkezi sistem, ısıtma sistemi) bağlanan makinede yıkama döngüsünün yaklaşık 15 dakika kısaldığını yazıyor. Vestel de fiili enerji tüketiminin şebeke gerilimi, şebeke suyu basıncı ve sıcaklığı ile ortam sıcaklığına göre değiştiğini belirtiyor. Vestel program süresinin de su sıcaklığına göre değiştiğini yazıyor; bu yüzden aynı program kışın ve yazın aynı sürede bitmeyebilir, bu tek başına arıza değildir.

## Bu konuda hangi yazılara bakılır?

Bulaşıklar kirli çıkıyorsa [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/), ıslak kalıyorsa [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/), makine su almıyorsa [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/), başka bir kod görüyorsan [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) yazısına bak.

---

**Kaynak künyesi.** Hata kodları, program açıklamaları ve su bağlantısı bilgileri Vestel BM 10502 X GI WIFI bulaşık makinesi kullanım kılavuzundan ve Samsung DW60H5050 bulaşık makinesi kullanım kılavuzundan alınmıştır. Kendi makinenin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu kontrollerden sonra da bulaşıklar soğuk çıkıyorsa ya da ısıtıcı kodu tekrar ediyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
