---
title: "Baxi kombi resetleme nasıl yapılır?"
description: "Baxi kombi resetleme: tuşlu modelde R tuşuna iki saniye, ekranlı modelde E kodunda onay tuşuna iki saniye. H kodunda bekle; kod dönerse servis."
slug: "baxi-kombi-resetleme"
date: "2026-10-24"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "baxi" geçen slug ya da başlık yok (ls-tree + title grep boş).
#   baymak-kombi-resetleme başka marka sorgusu; bağlantı verilmedi, metin alınmadı. Dalga 3 G kümesi Baxi'yi "Türkiye belgesi yok" diye elemişti; Dalga 6'da baxi.it belgesi #88'e göre geçerli.
# Arama kanıtı (suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot-kanit.txt): 12:44 "baxi kombi r" → 1. "baxi kombi resetleme nasıl yapılır", 2. "baxı kombi resetleme";
#   "baxi kombi" → 6. "baxi kombi resetleme nasıl yapılır"; 13:03 "baxi kombi res" → 1. "…resetleme nasıl yapılır", 2. "baxı kombi resetleme". GSC: satır yok (www-3..6 Sorgular.csv'de "baxi" yok).
# Belge zinciri (bu koşu 13:07–13:08): www.baxi.com.tr → 301 → www.baxi.it (200).
#  (X3) https://www.baxi.it/prodotti/caldaie-residenziali/murali-convenzionali/eco5blue (200) → https://edge.sitecorecloud.io/bdrthermea1-platform-production-864a/media/Project/BaxiIT/BaxiIT/Documents/Manuali-Instal-e-uso/Eco5Blue.pdf
#       (200 application/pdf) ECO5 BLUE, çok dilli, İtalyanca bölüm, 124 s., 7729106 (02-05/19), md5 679514bf516c236fa4662726e0e246bc; kapakta BAXI logosu + "ECO5 BLUE"
#  (X1) https://www.baxi.it/prodotti/caldaie-residenziali/murali-a-condensazione/luna-century (200) → …/Manuali-Instal-e-uso/Manuale-inst-e-uso-Luna-Century.pdf
#       (200 application/pdf) LUNA CENTURY, İtalyanca, 116 s., 7914797-01-20012026, md5 8dcf3219453d0d2350ab064ee03e7679; kapakta BAXI logosu + "LUNA CENTURY"
#  (X2) aynı sayfadan …/Manuale-installazione-uso-e-manutenzione-Luna-Century.pdf, 104 s., 7871657-03-04102024, md5 b35985c11508619c425ecbcf0e970e94 — eski baskı; kullanılan pasajlar aynı (s. kaydırmalı), alıntılar X1'den.
#  Kaynak sayfalar: X3 s.3 (gaz kokusu), s.5 (R tuşu, ilk çalıştırma), s.6 (basınç), s.7 (kullanıcı tablosu); X1 s.5 (güvenlik), s.6 (basınç), s.102–103 (A/H/E, 254), s.111 (E04.29).
# BİLEREK YAZILMAYANLAR: kart, gaz valfi, elektrot teşhisi (X1 tablolarında "çoğu kontrol kurulumcu ister") · kurulumcu menüsü ve hata geçmişi (kurulumcu kodu gerekiyor)
#   · kaç kez resetlenebileceğine dair sayı (belgede yok) · Türkiye'de başka adla satılan modeller (belgesiz) · fiyat (#46).
# Alıntı denetimi: baxi-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanım kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa resetlemeye çalışma; elektrik düğmelerine dokunma, gazı kes, pencereleri aç, evden çık ve dışarıdan yardım iste."
  - "Kombinin hangi panel kuşağından olduğuna bak: tuşlu ve R tuşlu mu, yoksa döner düğmeli ekranlı mı."
  - "Ekrandaki kodu not al; oda ünitesinde yalnızca bir sayı görünüyorsa kodu kombinin kendi ekranından oku."
  - "Basit nedeni önce gider: gaz musluğunun açık olduğuna ve basıncın modelinin istediği aralıkta olduğuna bak."
  - "Tuşlu modelde R tuşuna en az iki saniye bas; ekranlı modelde E kodunda seçim ve onay tuşunu iki saniye basılı tut."
  - "H kodu görüyorsan resetleme; nedeni kalkınca kombi kendiliğinden çalışmaya döner."
  - "Kod tekrar tekrar geliyorsa resetlemeyi bırak; izin verilen reset sayısı aşılırsa kombi ayrı bir kod veriyor."
  - "Yetkili servisi ara ve kodu tam olarak bildir."
faq:
  - q: "Baxi kombide reset tuşu hangisi?"
    a: "Modele göre değişiyor. ECO5 BLUE gibi tuşlu modellerde panelde R harfli ayrı bir reset tuşu var; kılavuz en az iki saniye basmayı söylüyor. LUNA CENTURY gibi ekranlı modellerde ayrı tuş yok; kalıcı blok kodunda seçim ve onay tuşu iki saniye basılı tutuluyor."
  - q: "Ekranda R yanıyor, ne demek?"
    a: "ECO5 BLUE kılavuzunun İtalyanca baskısına göre ekranda R simgesi varsa arıza kullanıcı tarafından resetlenmeyi bekliyor. R tuşuna en az iki saniye basıyorsun. Arıza tekrar ediyorsa yetkili servis."
  - q: "H ile başlayan kodda neden reset işe yaramıyor?"
    a: "LUNA CENTURY kılavuzuna göre H geçici bloktur; kombiyi kalıcı olarak kilitlemez ve neden ortadan kalkınca kendiliğinden çözülür. Reset gerektiren E ile başlayan kalıcı bloklardır."
  - q: "Oda termostatımda 254 yazıyor, bu hangi hata?"
    a: "LUNA CENTURY kılavuzuna göre kombiye OpenTherm tipi bir oda ünitesi bağlıysa, arıza ne olursa olsun ünitede hep 254 görünüyor. Asıl kodu kombinin kendi ekranından okuman gerekiyor."
  - q: "Kaç kez resetleyebilirim?"
    a: "Kılavuzlar bir sayı vermiyor. ECO5 BLUE kılavuzu, müdahale tekrar ediyorsa servisi aramanı söylüyor. LUNA CENTURY kılavuzunda ise izin verilen azami reset sayısına ulaşıldığını gösteren ayrı bir kod var: E04.29. Kod dönüyorsa denemeyi bırak."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombinin kumanda paneli ve küçük ekranı"
  steps:
    - "Açık duran bir pencere ve önünde boş, sakin bir mutfak"
    - "Yan yana duran farklı kombi kumanda panelleri"
    - "Duvardaki oda termostatının ekranında kısa bir yazı"
    - "Kombinin altında borular arasında duran sarı kollu bir gaz musluğu"
    - "Kombinin kumanda panelinde yuvarlak bir tuşun yakın planı"
    - "Duvarda sessizce çalışan beyaz bir kombi"
    - "Kombinin ekranında beliren kısa bir uyarı yazısı"
    - "Tezgâhta duran katlanmış bir kullanım kılavuzu ve bir not kâğıdı"
---

Baxi kombin bir kod gösterip durdu ve "resetlesem geçer mi" diye düşünüyorsun. Baxi'de reset tek bir tuş değil; panelin kuşağına ve kodun türüne göre değişiyor. Bu yazıda Baxi'nin iki kılavuzunu yan yana koyduk: tuşlu ECO5 BLUE ve döner düğmeli ekranlı LUNA CENTURY. İkisi de kılavuzun İtalyanca baskısı, alıntılar Türkçeye çevrildi. Senin modelinde tuş adları farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gaz kokusu varsa reset yok. Tuşlu modelde ekranda R varsa R tuşuna en az iki saniye bas. Ekranlı modelde E ile başlayan kodda, nedeni giderdikten sonra seçim ve onay tuşunu iki saniye tut; H kodunda bekle. Kod dönüyorsa reseti sürdürme, servis.

## Tuşlu panel: ECO5 BLUE

| Ekranda | Kılavuzdaki anlamı | Ne yapılır |
|---|---|---|
| **E01** | Ateşleme olmadığı için blok | R tuşu, en az iki saniye |
| **E02** | Emniyet termostatı devreye girdi | R tuşu, en az iki saniye |
| **E04** | Sık alev kaybı ya da ateşleme olmaması | R tuşu, en az iki saniye |
| **E25** | Su dolaşımı yok | R tuşu, en az iki saniye |
| **E03** | Baca gazı termostatı devreye girdi | 🔧 Servis |
| **E05, E06, E08, E09, E98** | Sonda, alev devresi, gaz valfi devresi ya da kart ayarı | 🔧 Servis |
| **E10** | Basınç düşük | Basıncı kontrol et, doldur |
| **E22** | Gerilim düştüğü için kapanma | Gerilim düzelince kendiliğinden |
| **St yanıp sönüyor** | Çözülme işlevi çalışıyor | Birkaç dakika bekle |

## Ekranlı panel: LUNA CENTURY

| Ekranda | Kılavuzdaki anlamı | Ne yapılır |
|---|---|---|
| **A** ile başlayan kod | Uyarı; arıza oluşmadan önce haber verir | Ekrandaki yönergeyi izle |
| **H** ile başlayan kod | Geçici blok, ekran sabit kırmızı | Neden kalkınca kendiliğinden çözülür |
| **E** ile başlayan kod | Kalıcı blok, ekran yanıp sönen kırmızı | Nedeni gider, seçim ve onay tuşunu iki saniye tut |
| **E04.29** | İzin verilen azami reset sayısına ulaşıldı | 🔧 Servis |
| Oda ünitesinde **254** | OpenTherm ünitesi her arızada bunu gösterir | Kodu kombinin ekranından oku |

## Adım adım: Baxi kombiyi resetlemek

**1. Gaz kokusu varsa reset yok.** LUNA CENTURY kılavuzunun güvenlik bölümü sırayı veriyor: açık alev kullanma, sigara içme, zil, ışık, motor ya da asansör gibi hiçbir elektrik düğmesine dokunma; gazı kes, pencereleri aç, evden çık ve yetkin bir uzmanı ara. ECO5 BLUE kılavuzu da elektrikli hiçbir cihazı çalıştırmamanı, açık alevleri söndürmeni, pencereleri açmanı ve yetkili servisi aramanı istiyor.

**2. Panelini tanı.** ECO5 BLUE'da ayrı tuşlar ve **R** harfli bir reset tuşu var. LUNA CENTURY'de bir ekran, bir menü tuşu, bir geri tuşu ve döndürülüp basılan bir düğme var; seçim ve onay bu düğmeyle yapılıyor. Hangi tabloya bakacağını buna göre seç.

**3. Kodu oku.** ECO5 BLUE'da arıza **E** ve bir numarayla görünüyor; yanında **R** simgesi varsa arıza senin resetini bekliyor. LUNA CENTURY'de önce bir harf ve iki haneli grup kodu, ardından onunla dönüşümlü olarak arızanın kendi kodu çıkıyor. Kombiye OpenTherm tipi bir oda ünitesi bağlıysa ünitede her arızada **254** görünüyor; asıl kodu kombinin ekranından oku.

**4. Basit nedeni önce gider.** Resetten önce bakabileceğin iki şey var. Gaz musluğu: ECO5 BLUE kılavuzunun çalıştırma sırası gaz musluğunu açmakla başlıyor; musluk normalde kombinin altında. Basınç: ECO5 BLUE kombi soğukken **1–1,5 bar** istiyor. LUNA CENTURY kılavuzu ise basınç **0,8 barın** altına düşünce tesisata su eklemeni, önerilen aralığın **1,5–2 bar** olduğunu yazıyor. Ayrıntı [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

**5. Reset tuşunu iki saniye kullan.** ECO5 BLUE'da: **R tuşuna en az iki saniye bas.** LUNA CENTURY'de: kalıcı blokta nedeni giderdikten sonra **seçim ve onay tuşunu iki saniye basılı tut.** ECO5 BLUE kılavuzu bir durumu ayrıca anlatıyor: ilk çalıştırmada gaz borusundaki hava boşalana kadar brülör yanmayabilir ve kombi kilitlenebilir. Bu durumda kılavuz çalıştırmayı gaz gelene kadar tekrarlamayı ve R tuşuna iki saniye basmayı öneriyor.

**6. H kodunda bekle.** LUNA CENTURY kılavuzuna göre H ile başlayan geçici blok kombiyi kalıcı olarak kilitlemiyor; neden ortadan kalkınca kendiliğinden çözülüyor. ECO5 BLUE'da da benzer bir durum var: ekranda **St** yanıp sönüyorsa çözülme işlevi çalışıyor; kılavuz birkaç dakika beklemeni, St kalırsa servisi aramanı söylüyor.

**7. Kod dönüyorsa reseti bırak.** ECO5 BLUE kılavuzu, R ile resetlenen bir müdahale tekrar tekrar çıkıyorsa yetkili servisi aramanı istiyor. LUNA CENTURY kılavuzunda bunun için ayrı bir kod bile var: **E04.29, izin verilen azami reset sayısına ulaşıldı.** Kurulumcu tablosundaki çözüm elektriği kesip yeniden verdikten sonra reset yapmak ve kartı kontrol etmek; tablonun başlığı da kontrollerin çoğunun kurulumcu gerektirdiğini yazıyor. Yani bu noktada iş servisin.

**8. Servise kodu tam ver.** LUNA CENTURY kılavuzuna göre arıza kodu, nedenin hızlı ve doğru bulunması için gerekli. Kodu ekranda gördüğün gibi, harfi ve noktadan sonraki kısmıyla birlikte söyle.

## E25 ve sıcak su için ayrı yazılar

Reset en çok E25'te soruluyor. Su dolaşımı kodunun ayrıntısı [Baxi kombi E25 hatası](/blog/baxi-kombi-e25-hatasi/) yazısında. Kombi çalışıyor ama musluktan sıcak su gelmiyorsa sorun çoğu zaman bir arıza kodu değil, bir ayar olabilir (çıkarım); bunun için [Baxi kombi sıcak su gelmiyor](/blog/baxi-kombi-sicak-su-gelmiyor/) yazısına bak.

## Ne zaman servis

- Aynı kod resetten sonra geri geliyorsa
- Ekranda E03, E05, E06, E08, E09, E98 ya da E04.29 görüyorsan
- Basınç sık sık düşüyorsa
- St uzun süre gitmiyorsa
- Ortamda gaz ya da yanık kokusu varsa

⛔ **Kendin-çöz sınırı burada biter.** Ekran, R tuşu, seçim düğmesi, gaz musluğunun kolu ve basınç göstergesi sende; kombinin kapağının içi, gaz valfi, elektrot, kart ve gaz hattı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (tanıtım etiketinde yazar)?
2. Ekranda hangi kod var, yanında R var mı?
3. Reset tuşuna iki saniye bastın mı?
4. Basınç kaç bar?
5. Kod ne sıklıkla geri geliyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
