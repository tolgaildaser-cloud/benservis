---
title: "Davlumbaz çalışmıyor: kılavuzlara göre kontrol sırası"
description: "Davlumbaz hiç açılmıyor mu? Siemens ve Vestel kılavuzlarına göre fiş, sigorta, elektrik kesintisi, açma tuşu ve ışık için kontrol sırası ve servis sınırı."
slug: "davlumbaz-calismiyor"
date: "2026-10-30"
category: "Davlumbaz"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, P24, satır #202). origin/main'de genel "davlumbaz-calismiyor" yok; yakın yazılar: vestel-davlumbaz-calismiyor (markalı), davlumbaz-cekmiyor,
#   davlumbaz-gurultulu-calisiyor, siemens-davlumbaz-filtre-uyarisi, bosch-davlumbaz-cekmiyor.
# Arama kanıtı: BOSLUK.md #202 (OT "davlumbaz çalışmıyor" #1-#10; "davlumbaz neden" #2).
# Belgeler (bu koşuda curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf):
#  (S) Siemens LC97FMR60 / LC98KMR60 davlumbaz kullanım kılavuzu, 24 s.  https://media3.bsh-group.com/Documents/9001618322_H.pdf  md5 d16e30b13911d03940d037ddb3037ab5
#  (V) Vestel AD-63330 B / G / S davlumbaz kullanım kılavuzu, 28 s.  https://statik.vestel.com.tr/webfiles/20267393_k.pdf  md5 32ee39d45cceb692a1d98c25df4e1dde
# Sayfalar (PDF): S s.6 açma 7.1 · S s.8 Home Connect · S s.11-12 "Cihaz çalışmıyor" tablosu, LED, onarım uyarısı · V s.7 güvenlik (arızalı cihazı açma) · V s.15 kontrol paneli · V s.20 sorun tablosu.
# Markalı yazıyla çakışma: vestel-davlumbaz-calismiyor üç Vestel kılavuzunu işliyor; bu yazı genel (Siemens + Vestel) ve ayrı bir marka karşılaştırması veriyor.
# BİLEREK YAZILMAYANLAR: pano içi işlem (yalnız "kontrol et") · baca klapesi (çalışmama değil kapalıyken hava girişi) · motor/kart teşhisi (belgede yok) · fiyat (#46).
# Alıntı denetim tablosu: davlumbaz-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Davlumbazın kullanım kılavuzu"]
steps:
  - "Davlumbazın fişinin prize tam oturduğunu kontrol et, gevşekse sıkıca tak."
  - "Sigorta kutusunda davlumbazın bağlı olduğu sigortanın atıp atmadığına bak."
  - "Odanın aydınlatmasının ve diğer cihazların çalışıp çalışmadığına bakarak elektrik kesintisini ayıkla."
  - "Modelindeki açma ve kapama tuşuna bastığından emin ol."
  - "Yalnız ışık yanmıyorsa fişi ve ışık düğmesini kontrol et; lamba değişimini servise bırak."
  - "Home Connect ya da ocak kumandası olan modelde ilgili kılavuz bölümüne bak."
  - "Hâlâ çalışmıyorsa davlumbazı açma; müşteri hizmetlerini ara."
faq:
  - q: "Davlumbazım hiç çalışmıyor, ilk neye bakmalıyım?"
    a: "Siemens LC97FMR60 kılavuzunun arıza tablosunda cihaz çalışmıyor satırının sebepleri fişin takılı olmaması, sigortanın atması ve elektrik beslemesinin kesilmesi. Vestel AD-63330 kılavuzunda ise fişin prize uygun takılmaması, prizde elektrik olmaması ve açma ve kapama tuşuna basılmamış olması yazıyor. İkisi de önce bu üç kontrolü istiyor."
  - q: "Elektrik kesintisi olup olmadığını nasıl anlarım?"
    a: "Siemens kılavuzu odanın aydınlatmasının ya da odadaki diğer cihazların çalışıp çalışmadığına bakmanı istiyor. Onlar da çalışmıyorsa sorun davlumbazda değil elektrik beslemesindedir."
  - q: "Yalnız lambası yanmıyor, davlumbaz bozuk mu?"
    a: "Vestel AD-63330 kılavuzu aydınlatma çalışmıyor satırında fişin prize takılı olduğundan emin olmanı ve ürün anahtarı olarak düğmeyi kontrol etmeni istiyor. Siemens kılavuzu ise bozuk LED lambaların yalnızca üretici, yetkili servisi ya da ehliyetli bir uzman tarafından değiştirilmesini yazıyor."
  - q: "Davlumbazı kendim açıp tamir edebilir miyim?"
    a: "Hayır. Vestel kılavuzu arızalı bir cihazı kesinlikle açmamanı, fişi çekmeni ya da sigortayı kapatmanı ve müşteri hizmetlerini aramanı istiyor. Siemens kılavuzu onarımı yalnızca eğitimini almış uzman personele bırakıyor."
images:
  coverAlt: "Mutfakta ocağın üstünde duran, ışığı ve fanı kapalı bir davlumbaz"
  steps:
    - "Beyaz eldivenli sade siluet el davlumbaz fişini prize sıkıca takıyor"
    - "Sigorta kutusu çizimi, içindeki şalterlerden biri aşağı inmiş"
    - "Oda aydınlatması yanan bir tavan lambası ve yanında çalışan küçük bir cihaz"
    - "Beyaz eldivenli sade siluet el davlumbazın kontrol panelindeki açma ve kapama tuşuna basıyor"
    - "Davlumbazın lambası sönük, yanında fiş ve ışık düğmesi çizimi"
    - "Telefon ekranında davlumbaz simgesi ve yanında ocak çizimi"
    - "Beyaz eldivenli sade siluet el telefon ahizesini tutuyor, yanında davlumbaz çizimi"
---

Ocak yanıyor, tuşa basıyorsun ve davlumbaz tepki vermiyor. Bu belirtiye üreticiler arıza tablosunda tek satırla yaklaşıyor: **"Cihaz çalışmıyor."** Satırın karşısındaki sebeplerin neredeyse hepsi evde kontrol edilebiliyor. Bu yazıda iki üreticinin kendi Türkçe kılavuzunu yan yana koyduk: **Siemens** LC97FMR60 ve **Vestel** AD-63330. Kendi davlumbazının kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Önce güvenlik:** Vestel kılavuzu arızalı bir cihazı kesinlikle açmamanı, elektrik fişini çekmeni ya da sigorta kutusundan sigortayı kapatmanı ve müşteri hizmetlerini aramanı istiyor.

## Kılavuzlar ne diyor

| Sebep | Siemens LC97FMR60 | Vestel AD-63330 |
|---|---|---|
| **Fiş** | Fiş takılı değil, cihazı şebekeye bağla (s.11) | Prize uygun takılmamış, sıkıca prize tak (s.20) |
| **Sigorta** | Sigorta atmış, sigorta kutusunu kontrol et (s.12) | Prizde elektrik yok, sigorta veya şalteri kontrol et (s.20) |
| **Elektrik kesintisi** | Oda aydınlatmasına ve diğer cihazlara bak (s.12) | Ayrı satır yok |
| **Açma tuşu** | Açma tuşu, cihaz fan kademesi 2'de başlar (s.6) | Açma ve kapama tuşuna bas (s.20) |
| **Işık yanmıyor** | LED'i yalnız üretici, servis ya da ehliyetli uzman değiştirir (s.12) | Fiş ve ışık düğmesini kontrol et (s.20) |

## Adım adım: çalışmayan davlumbaz için kontrol sırası

**1. Fişi kontrol et.** Siemens'in tablosunda ilk sebep şebeke bağlantı kablosunun fişinin **takılı olmaması**; çözüm cihazı elektrik şebekesine bağlamak. Vestel de aynı şeyi söylüyor: prize uygun takılmamışsa **sıkıca prize tak.** Fişe ulaşamıyorsan bu adımı atlayıp sigortaya geç.

**2. Sigortaya bak.** Siemens "sigorta kutusundaki sigorta atmış" diyor ve **ilgili sigortayı kontrol etmeni** istiyor. Vestel "sigorta veya şalteri kontrol edin" diyor. Kutuda yalnızca davlumbazın bağlı olduğu sigortaya bak; başka bir işleme girişme.

**3. Elektrik kesintisini ayıkla.** Siemens kılavuzu elektrik beslemesinin kesilmiş olabileceğini ve odanın **aydınlatmasının ya da diğer cihazların** çalışıp çalışmadığına bakılmasını söylüyor. Mutfak lambası ve buzdolabı da sönükse sorun davlumbazda değil.

**4. Açma tuşuna bastığından emin ol.** Vestel tablosunda bu ayrı bir sebep: açma ve kapama tuşuna basılmamış olabilir. AD-63330'un dokunmatik kontrol panelinde **1 numaralı tuş** ürünü açıp kapatıyor, 2 ile 5 arası hız kademeleri, 6 lamba. Siemens'te açma tuşuna basınca cihaz **fan kademesi 2**'de başlıyor. Markalara göre tuşların düzeni değiştiği için kendi kılavuzundaki kumanda bölümünü aç.

**5. Yalnız ışık yanmıyorsa ayır.** Vestel'de aydınlatma çalışmıyorsa fiş prize takılı olmayabilir; ürün anahtarı da çalışmıyor olabilir, **düğmeyi kontrol et.** Siemens'te LED aydınlatma çalışmıyorsa sebep farklı olabilir ve kılavuz bozuk LED lambaların yalnız **üretici, yetkili servis ya da ehliyetli bir elektronik tesisatçı** tarafından değiştirilmesini istiyor. Lamba değişimini sen yapma.

**6. Bağlantılı kumandaya bak.** Siemens modelinde fonksiyonlar Home Connect uygulamasından kumanda edilebiliyor. Kılavuz Home Connect düzgün çalışmıyorsa ilgili web adresine bakmanı, ocak tabanlı aspiratör kumandası düzgün çalışmıyorsa **ocağın kullanım kılavuzunu** okumanı söylüyor.

**7. Hâlâ çalışmıyorsa servise bırak.** Siemens kılavuzu onarımı yalnızca **eğitimini almış uzman personelin** yapabileceğini, elektrik kablosu zarar görürse eğitimli uzman personelin değiştirmesi gerektiğini yazıyor. Vestel de sorun giderme tablosundan sonra cihaz hâlâ normal çalışmıyorsa **Vestel İletişim Merkezi**'ne başvurmanı istiyor.

## İki kılavuzun farkı

Tablolar aynı üç soruya varıyor ama sıraları farklı. Siemens sebepleri **fiş, sigorta ve elektrik beslemesi** diye sayıyor; açma tuşuna basılması ayrı bir sorun satırı olarak geçmiyor, açma işlemi kullanım bölümünde anlatılıyor. Vestel ise **fiş, prizdeki elektrik ve açma ve kapama tuşunu** sıralıyor; elektrik kesintisini odadaki diğer cihazlara bakarak anlama tarifi Vestel'de yok. İki listeyi birleştirmek dört kontrol veriyor: fiş, sigorta, elektrik ve tuş. Hepsi kullanıcının elinde.

Servis sınırı da iki kılavuzda aynı yerde çiziliyor. Vestel kılavuzu usulüne aykırı onarımların tehlike teşkil ettiğini, onarımların ve hasarlı elektrik kablolarının değiştirilmesinin yalnızca eğitilmiş bir müşteri hizmetleri teknisyeni tarafından yapılması gerektiğini yazıyor. Siemens de aynı çizgide: yetkisiz onarım yok.

## Çalışıyor ama çekmiyorsa ya da ses yapıyorsa

"Çalışmıyor" ile "zayıf çalışıyor" ayrı belirtiler. Davlumbaz dönüyor ama buharı çekmiyorsa [davlumbaz çekmiyor](/blog/davlumbaz-cekmiyor/), sesli çalışıyorsa [davlumbaz gürültülü çalışıyor](/blog/davlumbaz-gurultulu-calisiyor/) yazısına bak. Vestel'e özel adımlar için [Vestel davlumbaz çalışmıyor](/blog/vestel-davlumbaz-calismiyor/) yazısı var.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Fiş, sigorta bakışı, açma tuşu, ışık düğmesi | Senin, bu yazıdaki adımlar |
| Bozuk LED lamba | Üretici, yetkili servis ya da ehliyetli uzman |
| Hâlâ çalışmıyor ya da kablo hasarlı | Müşteri hizmetleri, eğitimli uzman personel |

⛔ Davlumbazı açma, kartına ya da kablosuna dokunma, lambayı sökme.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
