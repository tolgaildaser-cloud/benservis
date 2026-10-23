---
title: "Viessmann kombi basınç ayarı: kaç bar olmalı?"
description: "Viessmann kombi basınç ayarı: basıncı manometreden ya da ekrandan oku, 0,8 ve 1,0 bar alt sınırını kılavuzla karşılaştır. Su doldurma servis işi."
slug: "viessmann-kombi-basinc-ayari"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork C). Konu seçimi: origin/main'de viessmann-kombi-basinc-* yok; başlıkta "Viessmann" + "basınç" geçen sayfa yok.
#   Yakın sayfalar: kombi-basinci-kac-olmali (Bosch tablosuna dayalı genel sayfa), kombi-basinc-dusuyor (genel), viessmann-kombi-ariza-kodlari, viessmann-vitopend-kombi-hata-kodlari.
#   Hiçbiri "viessmann kombi basınç ayarı" sorgusunu hedeflemiyor; marka + basınç ayarı ayrı sorgu sayıldı (KAYNAK.md notu).
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "viessmann kombi basınç" → 1. "…basınç ayarı", 2. "…basınç düşürme", 3. "…basınç yükseltme", 4. "…basınç kaç olmalı".
# GSC (https___www-6 7 gün, https___www-5 3 ay): Viessmann + basınç sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.viessmann-climatesolutions.com (Viessmann'ın belge sunucusu) üzerinden indirildi; hepsi HTTP 200 application/pdf, md5 27 Eyl yerel kopyalarıyla birebir.
#  (P) Vitopend 100-W kk 5791986 TR 4/2019, 44 s.  .../TR/tr/VBA/5791986VBA00002_1.pdf  md5 5806d06b45d167c0b6e7ebe1ce6c0721
#  (V0) Vitodens 050-W kk 5837977 TR 1/2019, 28 s.  .../TR/tr/VBA/5837977VBA00001_1.pdf  md5 96822ea6c393f0cdf728bcf3554afd5a
#  (V1) Vitodens 100-W/111-W/111-F kk 6135864 TR 03/2026, 44 s.  .../TR/tr/VBA/6135864VBA00011_1.pdf  md5 5513c22c39f416336369c7d3cbe6d0fe
#  (V2) Vitodens 200-W/222-W/222-F/242-F kk 6172120 TR 06/2026, 68 s.  .../TR/tr/VBA/6172120VBA00009_1.pdf  md5 3d0e404231424e9a8ce2e4347c1d992b
#  (C) Vitodens Connect / Trend kk 6173992 TR 05/2026, 36 s.  .../TR/tr/VBA/6173992VBA00005_1.pdf  md5 5c0d0900f6f66d9eb9dc09855ae7cb04
# Gaz kokusu P s.4, V2 s.3 · min 0,8 bar + "su doldurun veya yetkili tesisat firmasına haber verin" P s.16, V0 s.14 · manometre V0 s.11 · 1,0 bar V1 s.32, V2 s.47, C s.26
#   · "Yetkili servisinizden bilgi alın: Gerekli sistem basıncı yüksekliği" V1 s.32, V2 s.47 · ekranda sistem basıncı V1 s.14-15, C s.13, V2 s.18-19 (min/maks aralık kesik çizgi)
#   · doldurma ve boşaltma musluğu yalnız şekilde V2 s.46 · Vitopend ortam çok soğuk tablosu P s.32 · emniyet ventilini kapatmayın V1 s.35.
# BİLEREK YAZILMAYANLAR: doldurma adımı (Viessmann kullanma kılavuzlarında doldurma tarifi yok, yalnız "su doldurun veya servise haber verin" → #31 gereği servise bırakıldı)
#   · basınç düşürme / petek havası alma / boşaltma (belgede kullanıcıya verilmiyor) · üst basınç sınırı (kılavuzlarda sayı yok) · genleşme tankı · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: viessmann-kombi-basinc-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa basınçla uğraşma; gaz vanasını kapat, kapı ve pencereleri aç, elektrik düğmelerine dokunma."
  - "Kılavuzun kapağından ya da kombinin üstünden modelini bul: Vitopend 100-W, Vitodens 050-W, Vitodens 100-W/111-W, Vitodens 200-W ya da Vitodens Connect/Trend."
  - "Basıncı oku: Vitopend 100-W ve Vitodens 050-W'de manometrenin ibresine, ekranlı modellerde ana göstergelerdeki sistem basıncı değerine bak."
  - "Okuduğun değeri kılavuzdaki alt sınırla karşılaştır: Vitopend 100-W ve Vitodens 050-W'de 0,8 bar, ekranlı Vitodens modellerinde 1,0 bar."
  - "Vitodens 200-W'de sistem basıncı ekranını aç; devreye almada aralık girilmişse değerin kesik çizgiler arasında kalıp kalmadığına bak."
  - "Basınç alt sınırın altındaysa doldurmayı kendin deneme; yetkili servisi ara ve evin için gereken basıncı servisten öğren."
  - "Ekranda arıza kodu varsa ya da basınç sık düşüyorsa kodu ve okuduğun değeri not edip Viessmann yetkili servisine bildir."
faq:
  - q: "Viessmann kombi basıncı kaç bar olmalı?"
    a: "Viessmann kılavuzları bir alt sınır veriyor. Vitopend 100-W ve Vitodens 050-W'de minimum sistem basıncı 0,8 bar. Vitodens 100-W/111-W, 200-W ve Connect/Trend kılavuzlarında ekrandaki basınç 1,0 bar'dan düşükse önlem alınması isteniyor. Evinin gerektirdiği basıncı yetkili servisine sormanı söylüyorlar."
  - q: "Viessmann kombiye su nasıl doldurulur?"
    a: "Kullanma kılavuzları basınç düşükse 'su doldurun veya yetkili servisinize haber verin' diyor, ama kullanıcı için bir doldurma tarifi vermiyor. Vitodens 200-W kılavuzunun şeklinde doldurma ve boşaltma musluğunun yeri gösteriliyor, adımları yok. Bu yüzden doldurmayı yetkili servise bırakmanı öneriyoruz."
  - q: "Basıncı nereden görürüm?"
    a: "Vitopend 100-W ve Vitodens 050-W'de kombideki manometreden (ibreli gösterge). Ekranlı Vitodens modellerinde giriş ekranındaki ana göstergeler arasında sistem basıncı da var; Vitodens 200-W'de hızlı görünümden sistem basıncını açabiliyorsun."
  - q: "Basınç çok yüksek, ne yapmalıyım?"
    a: "Viessmann kullanma kılavuzlarında üst sınır için bir sayı yok ve kullanıcıya basınç düşürme tarifi verilmiyor. Basınç yüksek görünüyorsa ya da emniyet ventilinden sürekli su geliyorsa yetkili servisi ara. Vitodens 100-W kılavuzu emniyet ventilinin kapatılmamasını açıkça istiyor."
  - q: "Basınç düşük olunca kombi çalışmaz mı?"
    a: "Kılavuzlar basıncı düşük sistemi 'çok düşük' diye tanımlıyor ve açmadan önce basıncın kontrol edilmesini istiyor. Hangi değerde hangi kodun çıktığını kullanma kılavuzları vermiyor; ekranda kod varsa Viessmann arıza kodları sayfasına bak."
images:
  coverAlt: "Mutfak duvarında beyaz bir kombi ve altında ibreli küçük bir basınç göstergesi"
  steps:
    - "Pencereleri açık, ışıkları kapalı sakin bir mutfak"
    - "Tezgâhta açık duran bir kombi kullanma kılavuzunun kapak sayfası"
    - "Kombinin altında yuvarlak ibreli bir basınç göstergesinin yakın planı"
    - "Kombi ekranında basınç simgesinin yanındaki kısa bir değer"
    - "Kombi ekranında iki kesik çizgi arasında duran yatay bir çubuk"
    - "Kombinin altındaki borular ve kapalı duran küçük vanalar"
    - "Kombinin yanında duvara asılı not kâğıdı ve kalem"
---

Kombinin önündeki ibre düşmüş görünüyor ya da ekranda basınç değeri gözüne takıldı. Viessmann'ın Türkçe kullanma kılavuzları burada iki şey söylüyor: basıncı nerede okuyacağını ve hangi değerin altında sistemin "çok düşük" sayıldığını. Kullanıcıya bir doldurma tarifi ise vermiyorlar. Bu yazıda Vitopend 100-W, Vitodens 050-W, Vitodens 100-W/111-W, Vitodens 200-W ve Vitodens Connect/Trend kılavuzlarından okuma ve karşılaştırma adımlarını topladık. Senin modelin farklıysa kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Basıncı manometreden ya da ekrandan oku. Vitopend 100-W ve Vitodens 050-W'de alt sınır 0,8 bar, ekranlı Vitodens'lerde 1,0 bar. Altındaysa doldurmayı kendin yapma, yetkili servisi ara. Evinin gerektirdiği basıncı Viessmann kılavuzları da servise sormanı istiyor.

## Kılavuz hangi değeri veriyor

| Model | Basıncı nerede okursun | Kılavuzdaki alt sınır |
|---|---|---|
| **Vitopend 100-W** | Manometre | 0,8 bar |
| **Vitodens 050-W** | Manometre | 0,8 bar |
| **Vitodens 100-W / 111-W** | Ekran, ana göstergeler | 1,0 bar |
| **Vitodens 200-W / 222-W** | Ekran, hızlı görünüm | 1,0 bar |
| **Vitodens Connect / Trend** | Ekran, ana göstergeler | 1,0 bar |

## Adım adım: Viessmann kombide basıncı okuma ve karşılaştırma

**1. Gaz kokusu varsa dur.** Vitopend 100-W kılavuzunun güvenlik sayfası gaz kokusunda sigara içilmemesini, açık ateş yakılmamasını, ışık ve elektrikli cihaz anahtarlarına dokunulmamasını, gaz vanasının kapatılmasını ve kapı ile pencerelerin açılmasını istiyor. Böyle bir durumda basınca bakma işi bekler.

**2. Modelini bul.** Kılavuzun kapağında model adı yazıyor: Vitopend 100-W, Vitodens 050-W, Vitodens 100-W/111-W/111-F, Vitodens 200-W/222-W/222-F/242-F ya da Vitodens Connect/Trend. Bu adı bilmek önemli, çünkü alt sınır ve basıncın gösterildiği yer modele göre değişiyor.

**3. Basıncı oku.** Vitopend 100-W ve Vitodens 050-W'de basınç kombideki **manometrede** gösteriliyor; ibrenin durduğu yere bak. Ekranlı Vitodens modellerinde giriş ekranında birkaç ana gösterge arasında geçiş yapabiliyorsun ve bunlardan biri **sistem basıncı**. Connect/Trend kılavuzuna göre giriş ekranındayken ana göstergeler arasında geçiş simgesine dokunarak bu değere ulaşırsın.

**4. Alt sınırla karşılaştır.** Vitopend 100-W kılavuzu açılış sırasının ilk adımında "Min. sistem basıncı **0,8 bar** (0,08 MPa)" diyor. Vitodens 050-W kılavuzu da ibre **0,8 bar**'ın altındaysa sistem basıncının çok düşük olduğunu yazıyor. Vitodens 100-W/111-W, 200-W ve Connect/Trend kılavuzlarında sınır **1,0 bar**: gösterilen basınç bunun altındaysa önlem alınması isteniyor.

**5. Vitodens 200-W'de aralığa bak.** Bu modelin kılavuzu sistem basıncının hızlı görünümden ekrana getirilebildiğini anlatıyor. Bir de not düşüyor: devreye alma sırasında minimum ve maksimum sistem basıncı girildiyse bu aralık ekranda dikey ve kesik çizgilerle gösteriliyor. Değer bu çizgilerin arasındaysa servisinin girdiği aralıktasın.

**6. Düşükse doldurmayı servise bırak.** Viessmann kılavuzları basınç düşük olduğunda iki seçenek sayıyor: sisteme su doldurmak ya da yetkili servise haber vermek. Ancak kullanıcı için bir doldurma tarifi yok; Vitodens 200-W kılavuzu doldurma ve boşaltma musluğunu yalnız şekil üzerinde gösteriyor. Tarifi olmayan bir işi önermiyoruz. Yetkili servisi ara. Vitodens 100-W ve 200-W kılavuzları da evin için **gerekli sistem basıncı yüksekliğini** yetkili servisinden öğrenmeni istiyor.

**7. Kod varsa ya da basınç sık düşüyorsa not et.** Ekranda arıza göstergesi yanıyorsa kodu olduğu gibi yaz. Okuduğun basıncı ve ne zaman okuduğunu da ekle. Kodların anlamı [Viessmann kombi arıza kodları](/blog/viessmann-kombi-ariza-kodlari/) sayfasında; Vitopend için [Viessmann Vitopend hata kodları ve reset](/blog/viessmann-vitopend-kombi-hata-kodlari/) sayfasına bak.

## Bu yazıda neden doldurma yok

Başka markaların kullanma kılavuzlarında adım adım doldurma tarifi bulunabiliyor. İncelediğimiz Viessmann kullanma kılavuzlarında ise böyle bir tarif yok; yalnız "su doldurun veya yetkili servisinize haber verin" cümlesi var. Benservis'te kılavuzun vermediği bir işlemi kullanıcıya önermiyoruz. Aynı nedenle basınç düşürme, petek havası alma ve sistemi boşaltma da bu yazıda yok: Viessmann bunları kullanıcı adımı olarak tarif etmiyor.

Bir de emniyet ventili var. Vitodens 100-W kılavuzu ısıtma sırasında emniyet ventilinden su damlayabileceğini yazıyor ve uyarıyor: aşırı basınç hasara neden olabilir, **emniyet ventilini kapatmayın.** Ventilden sürekli su geliyorsa [kombi emniyet ventili ve su basıncı sensörü](/blog/kombi-emniyet-ventili-ve-presostat/) yazısına bak.

Basınç sık sık düşüyorsa sorun büyük ihtimalle tesisattadır. Bu bir çıkarım, kılavuzda böyle bir cümle yok. Genel nedenler [kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/) yazısında.

## Ne zaman servis

- Basınç kılavuzdaki alt sınırın altındaysa
- Basınç kısa sürede yine düşüyorsa
- Basınç yüksek görünüyorsa ya da emniyet ventilinden sürekli su geliyorsa
- Ekranda arıza kodu duruyorsa

⛔ **Kendin-çöz sınırı burada biter.** Manometre, ekran ve kılavuz sende; su doldurma, basınç düşürme, gaz hattı, kombinin kapağının içi ve elektrik bağlantıları yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne?
2. Basınç kaç bar, kombi o sırada çalışıyor muydu?
3. Ekranda kod var mı?
4. Basınç ne sıklıkla düşüyor?
5. Emniyet ventilinden su geliyor mu?

Genel değerler için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısına da bakabilirsin. Durumu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
