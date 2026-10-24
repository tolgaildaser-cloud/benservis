---
title: "Baxi kombi E25 hatası: su dolaşmıyor, ne yapmalı?"
description: "Baxi kombide E25: kombi su dolaşımı olmadığı için güvenlik kilidine geçer. Basıncı kontrol et, R tuşuna iki saniye bas; tekrarlıyorsa servis."
slug: "baxi-kombi-e25-hatasi"
date: "2026-10-24"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "baxi" geçen slug ya da başlık yok (ls-tree + title grep boş).
#   baymak-* yazıları başka marka sorgusu; bağlantı verilmedi, metin alınmadı. Dalga 3 G kümesi Baxi'yi "Türkiye belgesi yok" diye elemişti; Dalga 6'da baxi.it belgesi #88'e göre geçerli.
# Arama kanıtı (suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot-kanit.txt): 12:44 "baxi kombi e" → 1. "baxi kombi e25 hatası";
#   "baxi kombi" → 5. "baxi kombi e25 hatası"; 13:03 "baxi kombi e2" → 1. "baxi kombi e25 hatası". GSC: satır yok (www-3..6 Sorgular.csv'de "baxi" yok).
# Belge zinciri (bu koşu 13:07–13:08): www.baxi.com.tr → 301 → www.baxi.it (200). Ürün sayfası https://www.baxi.it/prodotti/caldaie-residenziali/murali-convenzionali/eco5blue (200)
#   → https://edge.sitecorecloud.io/bdrthermea1-platform-production-864a/media/Project/BaxiIT/BaxiIT/Documents/Manuali-Instal-e-uso/Eco5Blue.pdf (200 application/pdf)
#  (X3) ECO5 BLUE kullanım ve kurulum kılavuzu, çok dilli, İtalyanca bölüm s.2–16, 124 s., 7729106 (02-05/19), md5 679514bf516c236fa4662726e0e246bc; kapakta BAXI logosu + "ECO5 BLUE"
#  (X1) LUNA CENTURY kurulum, kullanım ve bakım kılavuzu, İtalyanca, 116 s., 7914797-01, md5 8dcf3219453d0d2350ab064ee03e7679 (yalnız H01.18 satırı için)
#  Kaynak sayfalar: X3 s.5 (R tuşu), s.6 (doldurma), s.7 (kullanıcı tablosu E25/E26/E10), s.14 (teknisyen tablosu E25), s.15 (pompa koruma işlevleri); X1 s.105 (H01.18).
# BİLEREK YAZILMAYANLAR: pompa kapağını açıp rotoru tornavidayla çevirme (teknisyen tablosunda; #31 servis işi) · NTC direnç değeri ve sonda ölçümü · kart teşhisi
#   · kaç kez resetlenebileceğine dair sayı (belgede yok) · Türkiye'de başka adla satılan modeller (belgesiz) · fiyat (#46).
# Alıntı denetimi: baxi-kombi-e25-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanım kılavuzu"]
steps:
  - "Ekrandaki kodu ve yanında R simgesi olup olmadığını not al."
  - "Kombi soğukken manometredeki basıncı oku; kılavuzun istediği aralık bir ile bir buçuk bar."
  - "Basınç düşükse önce kombinin elektriğini çift kutuplu şalterden kes."
  - "Termostatik vanaları açık tutarak doldurma musluğundan suyu yavaşça ver, basınç aralığa gelene kadar sürdür ve peteklerin havasını al."
  - "Elektriği geri ver ve R tuşuna en az iki saniye bas."
  - "E25 ya da E26 tekrar ederse resetlemeyi sürdürme, yetkili servisi ara."
  - "Servise modeli, kodu, basıncı ve kodun ne sıklıkla çıktığını söyle."
faq:
  - q: "Baxi kombide E25 ne demek?"
    a: "ECO5 BLUE kılavuzunun İtalyanca baskısındaki kullanıcı tablosuna göre E25, su dolaşımı olmadığı için devreye giren güvenlik müdahalesi; tabloda parantez içinde muhtemel neden olarak pompanın bloke olması yazıyor. Kullanıcıya verilen çözüm R tuşuna en az iki saniye basmak."
  - q: "E25 ile E26 arasında fark ne?"
    a: "Kılavuza göre E26, ısıtma devresinde aşırı sıcaklık ya da yine su dolaşımı olmadığı için güvenlik müdahalesi. E25'te R tuşuyla reset öneriliyor; E26'da kılavuz, müdahale tekrar ediyorsa yetkili servisi aramanı söylüyor."
  - q: "Pompayı kendim açıp çevirebilir miyim?"
    a: "Hayır. Pompa kapağını söküp rotoru tornavidayla çevirme işi kılavuzun teknisyen bölümünde geçiyor. Kullanıcı bölümü sana yalnızca basınç kontrolü, doldurma ve R tuşunu bırakıyor. Kombinin içi yetkili servisin işi."
  - q: "Basınç doğruysa E25 neden çıkar?"
    a: "Teknisyen tablosu olası nedenleri sayıyor: pompanın bloke olması ya da eşanjörün tıkanması, gidiş suyu sıcaklık sondasının arızası ya da elektronik kartın arızası. Bunların hepsi servisin kontrol edeceği parçalar."
  - q: "Yeni ekranlı Baxi kombimde E25 yok, başka bir kod var. Neden?"
    a: "Baxi'nin her modelinde kod listesi aynı değil. Örneğin LUNA CENTURY kılavuzunda su dolaşımı eksikliği H01.18 koduyla, geçici blok olarak tanımlı. Kodu her zaman kendi modelinin kılavuzunda ara."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin önden görünüşü ve altındaki borular"
  steps:
    - "Kombi ekranında beliren kısa bir harf ve kod"
    - "Kombinin altında yuvarlak kadranlı bir basınç göstergesi"
    - "Duvarda kombinin yanında duran beyaz bir elektrik şalteri"
    - "Bir petek ve yanında küçük bir hava alma vidası"
    - "Kombinin kumanda panelinde yuvarlak bir tuşun yakın planı"
    - "Duvarda sessizce bekleyen beyaz bir kombi ve kapalı mutfak dolapları"
    - "Tezgâhta duran katlanmış bir kullanım kılavuzu ve bir not kâğıdı"
---

Baxi kombinin ekranında E25 yazıyor, kombi durdu ve petekler soğumaya başladı. Bu kod, kombinin içinde suyun dolaşmadığını algıladığını ve kendini güvenlik için kapattığını söylüyor. Bu yazıda Baxi'nin ECO5 BLUE duvar tipi kombisinin kullanım kılavuzunu temel aldık; kılavuzun İtalyanca baskısı, alıntılar Türkçeye çevrildi. Senin modelinin kod listesi farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E25 = su dolaşımı yok, kombi güvenlik kilidinde. Önce kombi soğukken basınca bak; kılavuzun aralığı 1–1,5 bar. Düşükse elektriği kesip doldur, petek havasını al. Sonra R tuşuna en az iki saniye bas. Kod tekrar ediyorsa reseti sürdürme, servis.

## E25 ve yakın kodlar

| Ekranda | Kılavuzdaki anlamı | Kim |
|---|---|---|
| **E25** | Su dolaşımı olmadığı için güvenlik müdahalesi (muhtemelen pompa bloke) | 🛠️ Sen: R tuşu, en az iki saniye |
| **E26** | Isıtma devresinde aşırı sıcaklık ya da su dolaşımı yok | 🔧 Tekrar ederse servis |
| **E10** | Su basınç anahtarı izin vermiyor; basınç düşük | 🛠️ Sen: basıncı kontrol et, doldur |
| **R simgesi** | Arıza kullanıcı tarafından resetlenebilir | 🛠️ Sen |
| **E25 tekrar ediyor** | — | 🔧 Servis |

## Adım adım: Baxi kombide E25'i gidermek

**1. Kodu ve R'yi oku.** Kılavuza göre arızalar ekranda **E** harfi ve bir numarayla görünüyor. Ekranda ayrıca **R** simgesi varsa arıza senin yapacağın bir reset istiyor. Arıza sırasında ekranın arka ışığı da kodla birlikte yanıp sönüyor. Kodu not al; servise söyleyeceğin ilk bilgi bu.

**2. Basıncı oku.** Kılavuz, kombi soğukken manometrede (B) basıncın **1–1,5 bar** olmasını istiyor. Kombide bir su basınç anahtarı var; su eksik olduğunda kombinin çalışmasına izin vermiyor. Teknisyen tablosuna göre basınç 0,5 barın altına düşünce ekrana **E10** geliyor. E25 ile E10 aynı anda ya da art arda görünüyorsa sorun büyük olasılıkla basınçtan başlıyor (çıkarım). Genel bilgi [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

**3. Doldurmadan önce elektriği kes.** Kılavuzun "tesisatı doldurma" bölümü tek bir uyarıyla açılıyor: **kombinin elektriğini çift kutuplu şalterden kes.** Bu adımı atlama.

**4. Yavaşça doldur, havayı al.** Basınç düşükse kombinin **doldurma musluğunu (C)** aç. Kılavuz bu aşamada özen istiyor: tesisatta termostatik vanalar varsa açık olsun, su, gereken basınca ulaşana kadar yavaş girsin ki devrede hava oluşmasın. Sonra peteklerin havasını al. Basınç fazla yükselirse kılavuz **boşaltma musluğunu (A)** kullanmanı söylüyor. Kılavuza göre basınç sık sık düşüyorsa yetkili servisi çağırmak gerekiyor; bu durumda [kombi basınç düşüyor](/blog/kombi-basinc-dusuyor/) yazısına da bak.

**5. R tuşuyla resetle.** Elektriği geri ver. Kullanıcı tablosunda E25 için tek çözüm yazıyor: **R tuşuna en az iki saniye bas.** Reset ayrıntıları [Baxi kombi resetleme](/blog/baxi-kombi-resetleme/) yazısında.

**6. Tekrar ederse dur.** Kılavuzun anomali bölümü açık: R ile resetlenen bir arıza tekrar tekrar çıkıyorsa yetkili servisi ara. E26 için de aynı cümle var; müdahale tekrar ediyorsa servis. Listede olmayan bir kod görürsen ya da aynı kod sık çıkıyorsa da kılavuz servis öneriyor. Resetlemeyi art arda denemek, suyun neden dolaşmadığını çözmez.

**7. Servise doğru bilgiyle git.** Servise kombinin modelini, ekrandaki kodu, okuduğun basıncı ve kodun hangi sıklıkla çıktığını söyle. Doldurma yaptıysan bunu da belirt.

## Kılavuzun teknisyen bölümü ne diyor

ECO5 BLUE kılavuzunun teknisyen tablosu E25 için üç olası neden sayıyor: ısıtma devresinde su dolaşımının olmaması (**pompanın bloke olması ya da eşanjörün tıkanması**), gidiş suyu sıcaklık sondasının arızası ve elektronik kartın arızası. Tabloda pompa için bir müdahale de anlatılıyor: ön kapağı söküp rotoru tornavidayla çevirmek. Bu senin işin değil. Kombinin kapağını açmak, pompaya ve kablolarına dokunmak yetkili servisin işi. Pompa arızası hakkında genel bilgi [kombi sirkülasyon pompası arızası](/blog/kombi-sirkulasyon-pompasi-arizasi/) yazısında.

Kılavuz iki koruma işlevi de anlatıyor. Kombi 24 saat boyunca hiç ısı talebi almazsa pompa kendiliğinden 10 saniye çalışıyor; bu işlev yalnızca kombinin elektriği varken çalışıyor. Isıtmada brülör sönünce de pompa 3 dakika daha dönüyor.

Baxi'nin yeni ekranlı modellerinde kodlar başka biçimde. LUNA CENTURY kılavuzunda su dolaşımı eksikliği **H01.18** koduyla, geçici blok olarak tanımlı. Kodu her zaman kendi modelinin kılavuzunda ara.

## Ne zaman servis

- R ile resetledikten sonra E25 geri geliyorsa
- E26 tekrar tekrar çıkıyorsa
- Basınç doğru olduğu hâlde kod sürüyorsa
- Basınç sık sık düşüyorsa
- Ortamda gaz ya da yanık kokusu varsa; kılavuza göre kombiyi kapat, elektrikli hiçbir düğmeye dokunma, pencereleri aç ve yetkili servisi ara

⛔ **Kendin-çöz sınırı burada biter.** Basınç göstergesi, doldurma musluğu, petek havası ve R tuşu sende; pompa, eşanjör, sonda, kart ve kombinin kapağının içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (tanıtım etiketinde yazar)?
2. Ekranda E25 mi, E26 mı, yanında R var mı?
3. Kombi soğukken basınç kaç bar?
4. R tuşuna en az iki saniye bastın mı?
5. Kod kaç saatte bir geri geliyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
