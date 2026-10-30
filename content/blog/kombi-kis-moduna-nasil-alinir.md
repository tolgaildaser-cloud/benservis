---
title: "Kombi kış moduna nasıl alınır: üç kılavuzun adımları"
description: "Kombiyi kış moduna almak için Baymak, DemirDöküm ve Vaillant kılavuzlarındaki adımlar: kış konumu, kalorifer ve sıcak su ayarı, basınç kontrolü."
slug: "kombi-kis-moduna-nasil-alinir"
date: "2026-10-30"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (BOŞLUK tablosu #68). Slug origin/main content/blog/'da yok (git ls-tree + doğrulayıcı); yakın yazı yalnız kombi-yazin-kapatilir-mi (yaz modu niyeti).
# Konu kanıtı: Google otomatik tamamlama "kombi kış" → OT#1, #2, #4, #6, #7 (BOŞLUK.md #68). GSC kanıt sayılmadı.
# Belgeler (#88/#89), hepsi curl -sL -A "Mozilla/5.0", HTTP 200, ham dosyalar _kaynak/kombi/:
#  (B) Baymak Duotec Compact 24 kullanma kılavuzu, 27 s., md5 df4c42a6604e3ec39b2d152606464cb0 — s.13 (kış/yaz konumu), s.14 (basınç, kapatma, donma), s.15 (basınçlandırma)
#  (D) DemirDöküm Nitromix kullanma kılavuzu 0020309468_01, 16 s., md5 3340a11b923b7332f8eb8685297970b6 — s.10 (vanalar, mode), s.11 (gidiş suyu, regler, bakım), s.12 (dolum basıncı)
#  (V) Vaillant ecoTEC intro 24/28 kW kullanma kılavuzu 8000037574_02, 16 s., md5 2ad2ae698770f850da164d67e3ac3637 — s.7 (gidiş suyu), s.8 (sıcak su, yaz konumu, bakım), s.9 (dolum basıncı)
#  Sayfa = PDF sayfası (üç belgede basılı sayfa numarasıyla aynı).
# BİLEREK YAZILMAYANLAR: "önerilen kalorifer derecesi" (üç kılavuzda sayı yok) · DemirDöküm sıcak su adımı (4.6.1 metni bu sürümde gidiş suyu adımlarını tekrar ediyor) · Vaillant'ta oF'ten geri açma için ayrı tuş sırası (kılavuzda yok; yalnız 4.2 gidiş suyu ayarı) · servis menüsü/parametre · fiyat (#46).
# Alıntı denetimi: kombi-kis-moduna-nasil-alinir.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Kombinin basınç göstergesi (manometre ya da ekran)"]
steps:
  - "Kombinin elektriğini ve gaz vanasını aç; DemirDöküm kılavuzuna göre ısıtma gidiş-dönüş ve soğuk su vanaları da açık olmalı."
  - "Tesisat basıncını kombi soğukken oku: Baymak 0,7–1,5 bar, DemirDöküm 1,0–1,5 bar, Vaillant 1,0–1,4 bar istiyor."
  - "Basınç düşükse radyatör vanalarını açıp doldurma vanasını yavaşça aç, gerekli basınca gelince kapat."
  - "Kış konumunu seç: Baymak'ta ON/OFF tuşuyla radyatör ve musluk sembolünü, DemirDöküm'de mode tuşuyla kış konumunu getir."
  - "Kalorifer (gidiş suyu) sıcaklığını kombinin artı-eksi tuşlarıyla ya da ayar düğmesiyle ayarla ve onayla."
  - "Sıcak su sıcaklığını ayarla; Vaillant, yetkili bayiye danışmadan 60 °C'nin altına ayarlamamanı istiyor."
  - "Oda termostatı (regler) bağlıysa DemirDöküm'deki gibi kombideki sıcaklığı en yükseğe al, istediğin sıcaklığı termostattan ayarla."
faq:
  - q: "Kombinin kış modu ile yaz modu arasındaki fark ne?"
    a: "Baymak Duotec Compact kılavuzunda kış konumu merkezi ısıtma ile kullanım suyunu birlikte çalıştırıyor; ekranda radyatör ve musluk sembolü görünüyor. Yaz konumu ise yalnız kullanım suyu, yani yalnız musluk sembolü. DemirDöküm Nitromix'te de mode tuşu kış konumu ile yaz konumu arasında geçiş yapıyor."
  - q: "Vaillant kombide kış tuşu yok, ne yapmalıyım?"
    a: "Vaillant ecoTEC intro kılavuzunda ayrı bir kış tuşu yok. Kılavuz yaz konumunu ısıtma konumunun kapatılması olarak anlatıyor: gidiş suyu sıcaklığı oF seviyesine indiriliyor ve ısıtma modu devreden çıkıyor. Ekranda oF görüyorsan kalorifer kapalıdır. Kalorifer sıcaklığı kılavuzun gidiş suyu sıcaklığı ayarı bölümünde anlatılan tuşla ayarlanıyor."
  - q: "Kombi basıncı kaç bar olmalı?"
    a: "Kılavuzlar farklı aralık veriyor. Baymak Duotec Compact kombi soğukken 0,7–1,5 bar, DemirDöküm Nitromix soğuk sistemde 1,0–1,5 bar, Vaillant ecoTEC intro 1,0–1,4 bar istiyor. DemirDöküm ve Vaillant, ısıtma sistemi birçok kata uzanıyorsa daha yüksek değer gerekebileceğini ve bunun için yetkili servise başvurmanı yazıyor."
  - q: "Kombi kapalıyken donmaya karşı korunur mu?"
    a: "Baymak'a göre kombi kapatıldıktan sonra donmaya karşı korumalı değil. Donma koruması fonksiyonunun çalışması için kombinin elektriği ve gaz vanası açık, sistem basıncı doğru olmalı ve kombi bloke durumda olmamalı."
images:
  coverAlt: "Duvara monte beyaz bir kombinin ekranında radyatör ve musluk simgesinin birlikte yandığı sade çizim"
  steps:
    - "Kombinin altındaki vanayı açan beyaz eldivenli sade siluet el çizimi"
    - "Kombi üzerindeki basınç göstergesinin ibresi yeşil bölgede duruyor, sade çizim"
    - "Doldurma vanasını yavaşça çeviren beyaz eldivenli sade siluet el çizimi"
    - "Kombi ekranında radyatör ve musluk simgesi birlikte yanıyor, yanında mode tuşuna dokunan beyaz eldivenli sade siluet el"
    - "Radyatör simgesinin yanındaki artı ve eksi tuşlarına dokunan beyaz eldivenli sade siluet el çizimi"
    - "Musluk simgesi ve sıcaklık okları görünen yazısız kombi paneli çizimi"
    - "Duvardaki oda termostatının kadranını çeviren beyaz eldivenli sade siluet el çizimi"
---

Havalar soğudu, kombiyi açtın ama petekler soğuk, musluktan yalnız sıcak su geliyor. Büyük ihtimalle kombi yazdan kalma **yaz konumunda**, yani yalnız sıcak su veriyor. Kış konumuna almak birkaç tuşluk iş. Ama tuşlar markaya göre değişiyor.

Bu yazı üç üreticinin Türkçe kullanma kılavuzuna dayanıyor: **Baymak Duotec Compact 24**, **DemirDöküm Nitromix** ve **Vaillant ecoTEC intro**. Her adımda hangi üreticinin ne dediğini ayrı yazdık. Senin modelinde tuş adları farklı olabilir, kendi kılavuzunla karşılaştır.

Olası arızayı benservis.com'daki teşhisten öğrenebilirsin.

> ⚡ **Kısa özet:** Elektrik ve gaz açık mı, bak. Basıncı kombi soğukken oku, düşükse yavaşça doldur. Kış konumunu seç. Kalorifer ve sıcak su sıcaklığını ayarla. Oda termostatın varsa sıcaklığı oradan yönet.

## Kış konumu ne demek?

Üç kılavuz aynı şeyi farklı adlarla anlatıyor:

- **Baymak:** Kış konumu, merkezi ısıtma ile kullanım suyunu birlikte çalıştırır. Ekranda **radyatör ve musluk sembolü** görünür. Yaz konumu yalnız kullanım suyudur; ekranda yalnız **musluk sembolü** kalır.
- **DemirDöküm:** **mode** tuşu çalışma konumunu değiştirir. Kılavuzdaki tabloda iki konum var: "Kış konumu / gidiş suyu sıcaklığı" ve "Yaz konumu / sıcak su sıcaklığı".
- **Vaillant ecoTEC intro:** Ayrı bir kış tuşu yok. Kılavuz yaz konumunu "ısıtma konumunun kapatılması" olarak anlatıyor: gidiş suyu sıcaklığı **oF** seviyesine indirilir ve ısıtma modu devreden çıkar. Ekranda oF görüyorsan kalorifer kapalıdır.

## Adım adım: kombiyi kış moduna alma

**1. Elektriği ve gazı aç.** Baymak kılavuzu kombiyi çalıştırmak için iki şey istiyor: **enerji beslemesini sağla** ve **gaz vanasını aç.** DemirDöküm buna vanaları ekliyor: harici gaz kesme vanası, ısıtma sisteminin gidiş ve dönüş devrelerindeki küresel vanalar ve soğuk su kesme vanası açık olmalı. Vanaların yerini bilmiyorsan DemirDöküm, montajı yapan yetkili servisten bilgi istemeni öneriyor.

**2. Basıncı kombi soğukken oku.** Üç kılavuz da basıncı soğuk sistemde kontrol etmeni istiyor, ama aralıklar farklı. **Baymak:** manometrede **0,7–1,5 bar**. **DemirDöküm:** **1,0–1,5 bar**; değer ekranda görünür. **Vaillant:** ana ekranda kılavuzdaki tuşa üç kez basınca dolum basıncı görünür; gerekli basınç **1,0–1,4 bar**. DemirDöküm ve Vaillant, ısıtma sistemi birçok kata uzanıyorsa daha yüksek değer gerekebileceğini, bunun için yetkili servise başvurmanı yazıyor.

**3. Basınç düşükse yavaşça doldur.** Vaillant, basınç **0,5 barın altındaysa**, DemirDöküm **1,0 barın altındaysa** doldurmanı istiyor. Sıra iki kılavuzda aynı: önce tüm radyatör termostat vanalarını aç, sonra **doldurma vanasını yavaşça aç**, gerekli basınca gelince kapat. Baymak, hava yapmaması için doldurma musluğunu **çok yavaş** açmanı söylüyor. Basınç fazlaysa Baymak'a göre boşaltma musluğuyla aralığa indirilir. DemirDöküm'e göre basınç 0,4 barın altına düşerse ürün kapanır ve ekranda **F.22** görünür. Baymak'ın uyarısı net: **basınç düşmesi sık tekrarlanıyorsa yetkili servise başvur.** Ayrıntı için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısına bak.

**4. Kış konumunu seç.** **Baymak'ta** ON/OFF tuşuna (K2) bas ve ekranda radyatör ile musluk sembolünün birlikte göründüğünden emin ol. **DemirDöküm'de** ekranda istediğin çalışma konumu görünene kadar **mode** tuşuna bas. **Vaillant ecoTEC intro'da** ayrı bir konum tuşu yok; ekranda oF varsa ısıtma kapalıdır ve kalorifer sıcaklığı bir sonraki adımdaki gidiş suyu ayarıyla belirlenir.

**5. Kalorifer sıcaklığını ayarla.** Kılavuzlarda bunun adı **gidiş suyu** ya da **merkezi ısıtma çıkış suyu** sıcaklığı. **Baymak:** artırmak için K4, azaltmak için K3. Kombi devreye girince ekranda alev sembolü görünür, ısıtmada radyatör sembolü yanıp söner. **DemirDöküm:** sembol yanıp sönene kadar ilgili düğmeye bas, sıcaklığı ayar düğmesiyle değiştir, kaydetmek için düğmeye 2 kez bas ya da birkaç saniye bekle. **Vaillant:** ana ekranda tuşa bir kez bas, artı ya da eksi ile ayarla ve onayla; ayarlanan sıcaklık iki kez hızla yanıp söner.

**6. Sıcak su sıcaklığını ayarla.** **Baymak:** artırmak için K6, azaltmak için K5. Baymak'a göre kullanım suyu önceliği var: kombi kaloriferdeyken bile musluk açılınca kullanım suyu moduna geçer. **Vaillant:** ana ekranda tuşa iki kez bas, ayarla ve onayla. Vaillant'ın tehlike uyarısı: lejyoner bakterileri 60 °C altındaki sıcaklıklarda gelişir; **yetkili bayiye danışmadan sıcak suyu 60 °C'nin altına ayarlama.** DemirDöküm'de bu ayar için kendi modelinin kılavuzuna bak.

**7. Oda termostatın varsa onu kullan.** Kılavuzlar oda termostatına **regler** diyor. **DemirDöküm:** regler bağlıysa kış konumunu seç, **üründeki sıcaklığı maksimum değere ayarla** ve istediğin sıcaklığı reglerden ayarla. **Vaillant:** regler bağlıysa gidiş suyu sıcaklığı da, ısıtmayı kapatma da reglerden yapılır. Ayrıntı reglerin kendi kılavuzunda.

## Kış boyunca: donma ve bakım

Baymak kılavuzunun iki notu kış için önemli. Birincisi, **kombi kapatıldıktan sonra donmaya karşı korumalı değil.** Donma koruması, çıkış suyu 5 °C'nin altına düşünce devreye girip su 10 °C'ye ulaşana kadar brülörü çalıştırıyor. Bunun için kombinin elektriği ve gaz vanası açık, sistem basıncı doğru olmalı ve kombi bloke durumda olmamalı. DemirDöküm'de de koruma gidiş suyu 8 °C'nin altına düşünce ısıtma pompasını başlatıyor.

İkincisi bakım. Baymak her kış sezonu sonunda yetkili servisin yıllık bakım ve kontrol yapmasını istiyor. DemirDöküm ve Vaillant'a göre yıllık kontrol ve iki yılda bir bakım, ürünün çalışma emniyeti için ön şart.

## Yazın yeniden yaz konumuna

Bahar gelince aynı tuşla geri dönersin: Baymak'ta ekranda yalnız musluk sembolü kalana kadar ON/OFF, DemirDöküm'de mode, Vaillant'ta gidiş suyunu oF'e indirmek. Yaz boyunca kombiyi kapatmak mı, yaz konumunda bırakmak mı daha iyi, [kombi yazın kapatılır mı](/blog/kombi-yazin-kapatilir-mi/) yazısında anlattık.

Markana özel ayar yazıları: [Baymak kombi sıcak su ayarı](/blog/baymak-kombi-sicak-su-ayari/), [Vaillant kombi sıcak su ayarı](/blog/vaillant-kombi-sicak-su-ayari/), [DemirDöküm kombi basınç ayarı](/blog/demirdokum-kombi-basinc-ayari/).

Kış konumunda petekler hâlâ ısınmıyorsa, basınç sürekli düşüyorsa ya da ekranda kod varsa sorun ayarda değildir. Basınç için [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) yazısına bak. Belirtiyi benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
