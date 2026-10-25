---
title: "Baxi kombi hata kodları: E01, E03, E10 ve diğerleri"
description: "Baxi kombi hata kodları ve anlamları: E01 ateşleme, E03 duman termostatı, E10 basınç, E25 dolaşım. Hangisi sende, hangisi serviste; kılavuzdaki tablo."
slug: "baxi-kombi-hata-kodlari"
date: "2026-10-24"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı D (YK #182 Dalga 7, küme Y5 — Dalga 6 yedeği). origin/main 26ffd7d'de Baxi slug'ları: baxi-kombi-e25-hatasi, baxi-kombi-resetleme, baxi-kombi-sicak-su-gelmiyor; "hata kodları" hub'ı yok.
#   Hub kuralı (çağıranın kararı): E03/E01/E10 için tekil sayfa açılmıyor, bu hub'da tablo satırı + kısa bölüm. Baymak yazılarına bağlantı ve metin alımı yok; Baymak adı ve "başka adla satış" iddiası yok.
# Arama kanıtı (bu koşu 13:46 +03, ham: Y5/_kaynak/ot.tsv): "baxi kombi h" → 1. "baxi kombi hata kodları"; "baxi kombi e" → 2. E03, 3. E01, 4. E10; "baxi kombi e0" → 1. E03, 2. E01; "baxi kombi e1" → 1. E10. GSC: satır yok (www-3..6'da "baxi" 0).
# Belge zinciri (bu koşu 19:57 +03): www.baxi.it ürün sayfaları (200, PDF bağlantısı HTML'de) → edge.sitecorecloud.io/bdrthermea1-platform-production-864a/media/Project/BaxiIT/... PDF (200 application/pdf).
#  (X3) ECO5 BLUE çok dilli kılavuz, İtalyanca bölüm, 124 s., md5 679514bf516c236fa4662726e0e246bc — s.3 (gaz ve yanık kokusu), s.4 (doğal çekişli baca), s.5 (açılış, R tuşu), s.6 (modlar, doldurma), s.7 (kullanıcı tablosu), s.13–14 (servis tablosu)
#  (X1) LUNA CENTURY kurulum ve kullanım kılavuzu IT, 116 s., md5 8dcf3219453d0d2350ab064ee03e7679 — s.6 ve s.24 (basınç), s.102–103 (A/H/E biçimi, 254)
# BİLEREK YAZILMAYANLAR: X1 kurulumcu tablolarındaki tekil H/E kodları (çoğu kontrol kurulumcu ister) · pompa rotoru, elektrot, termostat, kart müdahalesi (#31) · belgede olmayan kodların anlamı (E99, E133, A00 vb.) · fiyat (#46).
# Alıntı denetimi: baxi-kombi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanım kılavuzu", "Not almak için kâğıt"]
steps:
  - "Ekrandaki kodu ve yanında R simgesi olup olmadığını not et."
  - "Kod E10 ise soğuk tesisatta basıncı oku; düşükse doldurma musluğuyla yavaşça doldur."
  - "Kod E01 ise kombinin altındaki gaz vanasının açık olduğuna bak."
  - "R simgesi olan kodda R tuşuna en az iki saniye bas ve kombiyi izle."
  - "Kod E03 ya da servis satırındaki bir kodsa kombiyi kapatıp yetkili servisi ara."
  - "Kod listede yoksa ya da sık tekrarlıyorsa resetlemeyi bırak, servise kodu bildir."
faq:
  - q: "Baxi kombide E03 ne demek?"
    a: "ECO5 BLUE kılavuzuna göre E03 duman termostatının devreye girmesi. Servis tablosundaki olası nedenler tıkalı duman kanalı, arızalı duman termostatı ya da kopuk kablo. Kılavuzun kullanıcıya talimatı yetkili servisi çağırmak; bu kod R tuşuyla kullanıcının sileceği bir kod değil."
  - q: "Baxi kombide E01 ne demek?"
    a: "Ateşleme olmadığı için blokaj. Kılavuz kullanıcıya R tuşuna en az iki saniye basmasını söylüyor. Servis tablosunda ilk sıradaki neden gaz basıncının olmaması; ilk iş gaz vanasının açık olduğuna bakmak."
  - q: "Baxi kombide E10 ne demek?"
    a: "Su basınç anahtarı kombiye izin vermiyor, yani tesisat basıncı düşük. Kılavuz basıncın soğukken 1–1,5 bar olmasını istiyor; düşükse doldurma musluğuyla doldurulur."
  - q: "Baxi kombi kaç kez resetlenir?"
    a: "ECO5 BLUE kılavuzu bir sayı vermiyor; yalnız tekrar eden müdahalede yetkili servisin çağrılmasını istiyor. Kılavuzda olmayan bir kod görürsen ya da aynı kod sık çıkarsa servis çağır."
  - q: "Ekranda H01.18 gibi noktalı kod var, bu ne?"
    a: "LUNA CENTURY gibi yeni ekranlı modellerin biçimi bu. A uyarı, H kendiliğinden çözülen geçici blok, E reset isteyen kalıcı blok. Noktanın solu grup, sağı tekil kod."
images:
  coverAlt: "Banyo duvarına monte edilmiş beyaz bir kombi ve alt kısmındaki vanalar"
  steps:
    - "Kombi ekranında yanıp sönen arıza kodu"
    - "Kombinin altındaki basınç göstergesi ve doldurma musluğu"
    - "Kombinin altındaki sarı kollu gaz vanası"
    - "Kombi kontrol panelindeki reset tuşu"
    - "Kapatılmış bir kombinin karanlık ekranı"
    - "Masada kombi kılavuzu ve kod yazılı bir not kâğıdı"
---

Baxi kombinin ekranında bir harf ve rakam yanıp sönüyor, kombi de durmuş. Önce kodun ne dediğini bilmek gerek: bazısını kendin kaldırırsın, bazısında kombiyi kapatıp servisi beklemek gerekir. Bu sayfa Baxi'nin İtalya sitesinde yayımlanan ECO5 BLUE kılavuzunun hata tablosunu ve yeni LUNA CENTURY kılavuzunun kod biçimini bir araya getiriyor (kılavuzun İtalyanca baskısı, alıntılar Türkçeye çevrildi). Türkiye'de satılan modelde kodlar ve tuşlar farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E01 ateşleme yok: gaz vanası, sonra R. E03 duman termostatı: servis. E10 basınç düşük: doldur. E25 dolaşım yok: R, tekrar ederse servis. R simgesi varsa reset senin, yoksa bekle ya da servis. Tabloda olmayan koda anlam yükleme.

## ECO5 BLUE hata tablosu

Bu tuşlu modelde kod **E** harfi ve bir sayıyla görünüyor. Ekranda **R** simgesi de varsa kılavuza göre arıza kullanıcı tarafından resetlenebilir. Arıza sırasında ekran ışığı kodla aynı ritimde yanıp sönüyor.

| Kod | Kılavuzdaki anlam | Kılavuzdaki talimat |
|---|---|---|
| **E01** | Ateşleme olmadığı için blokaj | R tuşu, en az iki saniye |
| **E02** | Emniyet termostatı devrede | R tuşu, en az iki saniye |
| **E03** | Duman termostatı devrede | 🔧 Yetkili servis |
| **E04** | Ateşleme olmaması ya da sık alev kaybı | R tuşu, en az iki saniye |
| **E05** | Gidiş sondası arızası | 🔧 Yetkili servis |
| **E06** | Sıcak su sondası arızası | 🔧 Yetkili servis |
| **E08** | Alev yükseltme devresi hatası | 🔧 Yetkili servis |
| **E09** | Gaz valfi emniyet devresi hatası | 🔧 Yetkili servis |
| **E10** | Su basınç anahtarı izin vermiyor | Basıncı kontrol et, doldur |
| **E22** | Besleme gerilimi düştüğü için kapanma | Gerilim 170 V'u geçince kendiliğinden |
| **E25** | Su dolaşımı yok (muhtemelen pompa bloke) | R tuşu, en az iki saniye |
| **E26** | Isıtma devresinde aşırı sıcaklık / dolaşım yok | Tekrar ederse servis |
| **E35** | Parazit alev | Tekrar ederse servis |
| **E98** | Kart parametreleri yanlış | 🔧 Yetkili servis |
| **St yanıp sönüyor** | Çözülme işlevi çalışıyor | Birkaç dakika bekle; kalırsa servis |

E25 için ayrıntı [Baxi kombi E25 hatası](/blog/baxi-kombi-e25-hatasi/) yazısında. Kılavuz, tabloda olmayan bir kod görürsen ya da bir kod sık çıkıyorsa yetkili servise başvurmanı istiyor.

## E03: duman termostatı

ECO5 BLUE doğal çekişli bir kombi: yanma havasını bulunduğu odadan alıyor, atık gazı bir bacaya veriyor ve bir çekiş kesici düzeneği var. Servis tablosuna göre E03'ün olası nedenleri **tıkalı duman kanalı, arızalı duman termostatı ya da kopuk kablo**. Kullanıcı tablosundaki tek talimat yetkili servisi çağırmak. Bu yüzden E03'ü reset tuşuyla geçiştirmeye çalışma. Kılavuz yanık kokusu alırsan kombiyi kapatmanı, kapı ve pencereleri açıp odayı havalandırmanı istiyor.

## E01: ateşleme yok

Kombi brülörü yakamamış. Kullanıcıya talimat **R tuşuna en az iki saniye** basmak. Servis tablosunun ilk satırındaki neden gaz basıncının olmaması; servisin ilk kontrolü de gaz kesme vanasının açık olması ve gaz hattında hava olmaması. Kılavuzun açılış bölümüne göre ilk çalıştırmada borudaki hava atılana kadar brülör yanmayabilir ve kombi blokaja geçebilir; bu durumda açma işlemini gaz brülöre ulaşana kadar tekrarla. Elektrot, ateşleme kablosu, gaz valfi ve kart servis işi.

## E10: basınç düşük

Kombideki su basınç anahtarı, su eksikliğinde çalışmaya izin vermiyor. Talimat basıncın kılavuzdaki değerde olup olmadığına bakmak. ECO5 BLUE için soğuk tesisatta **1–1,5 bar**. LUNA CENTURY kılavuzu basınç **0,8 barın altına** inince doldurmayı istiyor. Kılavuz doldurmayı yavaş yapmanı, tesisata hava girmesin diye suyu ağır ağır vermeni öneriyor. Basınç sık düşüyorsa yetkili servis çağrılmalı. Genel değerler [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

## Adım adım: Baxi kombide hata kodu çıkınca

**1. Kodu not et.** Harfi, sayıyı ve yanında R simgesi olup olmadığını yaz. Servisi ararken ilk sorulan bu.

**2. E10'da basıncı oku.** Kılavuz doldurmadan önce kombinin elektriğini iki kutuplu şalterden kesmeni istiyor. Basınç düşükse kombinin altındaki doldurma musluğunu açıp suyu yavaşça ver, değere gelince kapat. Basınç fazla yükselirse boşaltma musluğu kullanılıyor.

**3. E01'de gaz vanasına bak.** Vana genellikle kombinin altında. Açık değilse aç; kılavuzun açılış sırası da buradan başlıyor.

**4. R simgesi olan kodda resetle.** R tuşuna en az iki saniye bas, kombinin yeniden çalışıp çalışmadığını izle. Sıra ve ekranlı modelin farkı [Baxi kombi resetleme](/blog/baxi-kombi-resetleme/) yazısında.

**5. Servis kodunda kombiyi kapat.** E03, E05, E06, E08, E09 ve E98 için kılavuzun talimatı yetkili servis. Kombiyi kapat ve kodu bildir.

**6. Tekrar eden kodda dur.** Aynı kod sürekli dönüyorsa ya da tabloda yoksa reset denemeyi bırak.

## Yeni ekranlı modellerde kod biçimi

LUNA CENTURY kılavuzunda kodlar noktalı: **Axx.xx** uyarı, arıza oluşmadan önce ne yapılacağını söylüyor. **Hxx.xx** geçici blok, sebep kalkınca kendiliğinden çözülüyor; ekran sabit kırmızı. **Exx.xx** kalıcı blok, sebep giderildikten sonra onay tuşuna iki saniye basarak resetleniyor; ekran kırmızı yanıp sönüyor. Kombiye OpenTherm tipi bir oda ünitesi bağlıysa ünitede her arızada **254** görünüyor; asıl kodu kombinin kendi ekranından oku.

## Ne zaman servis

- E03 ya da tabloda servis yazan bir kod çıktıysa
- R ile kalkan kod kısa sürede geri geliyorsa
- Basınç sık düşüyorsa
- Kod tabloda yoksa

⛔ **Kendin-çöz sınırı burada biter.** Basınç, gaz vanasını açmak ve R tuşu sende; baca, elektrot, sonda, pompa, gaz valfi ve kart yetkili servisin. Gaz kokusunda kılavuz kombiyi kapatmanı, elektrikli hiçbir şeyi çalıştırmamanı, pencereleri açmanı ve servisi aramanı istiyor. Genel liste [kombi arıza kodları](/blog/kombi-ariza-kodlari/) yazısında.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
