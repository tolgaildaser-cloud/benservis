---
title: "Homend robot süpürge resetleme nasıl yapılır"
description: "Homend robot süpürge donduysa: güç tuşuyla kapat-aç, Wi-Fi sıfırlama ve Alex UltiClean 1293H'de fabrika ayarı. Dört Homend kılavuzundaki tuş sırası."
slug: "homend-robot-supurge-resetleme"
date: "2026-10-24"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X5 küçük ev, çatal B). origin/main (7481159) content/blog/'da "homend" geçen dosya ya da başlık yok.
# Arama kanıtı (#164, bu koşu 24 Eki, hl=tr gl=tr): "homend robot süpürge r" → 1. "homend robot süpürge resetleme", 2. "…resetleme nasıl yapılır", 5. "…reset tuşu", 6. "…reset";
#   "homend robot süpürge" → 5. "…resetleme". GSC: Sorgular.csv'lerde "homend" satırı yok.
# Belge (#88). Zincir: homend.com.tr ürün sayfası (200, bu koşu) → sayfadaki kılavuz bağlantısı cdn.karaca.com (Homend'in bağlı olduğu Karaca grubunun CDN'i) PDF (200):
#  (A10) Alex 10 kullanım kılavuzu, TR, 20 s., md5 3100c22c2ec0f25ad95bd1f64d9af192 — s.10, 11, 15, 18, 19
#  (L91) Alex Laser 1291H kullanım kılavuzu, TR, 20 s., md5 1acad6baf6661bd92434728899fddf40 — s.10, 11, 15, 18 (A10 ile aynı metin)
#  (L89) Alex Laser Power 1289H kullanım kılavuzu, TR+EN, 40 s., md5 e4c299f523885af55d08a923e87cbe89 — s.10, 11, 15, 18
#  (U93) Alex UltiClean 1293H kılavuzu (Alex 50 Pro ürün sayfası bağlıyor), TR+EN, 56 s., md5 a670407a42c9475e4f26bd050652bec8 — metin katmanı yok, tesseract -l tur OCR; s.7, 9, 10, 11, 12, 16; tuş simgeleri s.12 görüntüsünden
# BİLEREK YAZILMAYANLAR: Alex 10 / 1291H / 1289H için fabrika ayarı ya da gizli RESET deliği (kılavuzlarda yok) · fabrika ayarının neleri sildiği (U93'te yazmıyor) · pil sökümü · kart teşhisi · fiyat (#46).
# Alıntı denetimi: homend-robot-supurge-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Robotun kullanım kılavuzu", "Akıllı telefon ve uygulama", "Yumuşak kuru bir bez"]
steps:
  - "Robotun model adını kılavuzun kapağından ya da teknik özellik tablosundan bul; tuş sırası modele göre değişiyor."
  - "Robot hiç başlamıyorsa önce şarj istasyonuna koyup tam şarj et; pil sıcaklığı uygun aralıkta olmalı."
  - "Robot hareketsizken güç tuşuna uzun basarak kapat, sonra yine uzun basarak aç."
  - "Gösterge söndüyse önce herhangi bir tuşa basarak uyku modundan çıkıp çıkmadığına bak."
  - "Alex UltiClean 1293H'de tuşlar yanıt vermiyorsa ev tuşunu uzun süre basılı tutarak donanımı zorla kapat."
  - "Yine düzelmezse 1293H'de güç ve ev tuşlarını birlikte uzun basılı tutarak fabrika ayarlarını geri yükle."
  - "Bağlantı kopuksa Wi-Fi'yi sıfırla: robot istasyondayken ilgili tuşa basılı tut, uygulamada kurulumu baştan yap."
faq:
  - q: "Homend robot süpürgenin reset tuşu var mı?"
    a: "İncelediğimiz dört Homend kılavuzunda ayrı bir RESET tuşu ya da deliği yok. Alex 10, Alex Laser 1291H ve Alex Laser Power 1289H'de sıfırlama güç tuşuyla kapat-aç ve Wi-Fi sıfırlamasından ibaret. Alex UltiClean 1293H'de ise güç ve ev tuşlarına birlikte 7 saniye basarak fabrika ayarları geri yükleniyor."
  - q: "Fabrika ayarına ne zaman dönmeliyim?"
    a: "Alex UltiClean 1293H kılavuzu bunu düğmeler yanıt vermediğinde ya da robotun gücü kapatılamadığında öneriyor. Önce kapat-aç ve gerekiyorsa 15 saniyelik zorla kapatmayı dene; fabrika ayarı son adım."
  - q: "Fabrika ayarından sonra haritam silinir mi?"
    a: "Kılavuz fabrika ayarının neleri sildiğini yazmıyor. İşlemden sonra uygulamadaki harita ya da bağlantı kaybolursa robotu uygulamaya yeniden eklemen gerekebilir (çıkarım)."
  - q: "Wi-Fi sıfırlama nasıl yapılır?"
    a: "Alex 10, 1291H ve 1289H kılavuzlarına göre robot şarj istasyonundayken ilgili tuşa 3 saniye basılı tutarak Wi-Fi bağlantısını etkinleştiriyorsun, sonra Homend Smart uygulamasında kurulumu yapıyorsun. 1293H'de güç ve ev tuşlarına birlikte 3 saniye basınca robot sesli uyarıyla ağ yapılandırma moduna geçiyor; bu model Xiaomi Home uygulamasıyla bağlanıyor. Her iki durumda da yalnız 2,4 GHz ağ destekleniyor."
  - q: "Planlanan saatte temizlik yapmıyor, reset gerekir mi?"
    a: "1293H kılavuzuna göre önce uygulamaya bak: temizlik programı devre dışı kalmış olabilir, programı uygulamada yeniden kur. Robot Rahatsız etmeyin modunda da olabilir; bu modu kapat ya da süresini ayarla."
images:
  coverAlt: "Ahşap zeminde şarj istasyonunun önünde duran yuvarlak bir robot süpürge"
  steps:
    - "Açık duran bir robot süpürge kullanım kılavuzunun teknik özellik sayfası"
    - "Duvara dayalı şarj istasyonuna yerleştirilmiş bir robot süpürge"
    - "Robot süpürgenin üst yüzündeki güç tuşu ve gösterge ışığı"
    - "Göstergesi sönük, zeminde bekleyen bir robot süpürge"
    - "Robot süpürgenin üst yüzündeki ev simgeli tuş"
    - "Robot süpürgenin üst yüzünde yan yana duran güç ve ev simgeli tuşlar"
    - "Şarj istasyonundaki robot süpürgenin yanında robot uygulaması açık bir akıllı telefon"
---

Homend robot süpürgen ortada durup tepki vermiyor, tuşlara bastıkça bir şey olmuyor ya da uygulama robotu çevrimdışı gösteriyor; aklına ilk gelen "resetleme". Homend'in kılavuzlarına baktığımızda iki ayrı aile çıkıyor. **Alex 10**, **Alex Laser 1291H** ve **Alex Laser Power 1289H** kılavuzlarında ayrı bir reset tuşu ya da fabrika ayarı yok; yazılı olan güç tuşuyla kapat-aç ve Wi-Fi sıfırlaması. **Alex UltiClean 1293H** kılavuzunda ise tuş tablosu var: zorla kapatma, ağ yapılandırma ve fabrika ayarlarını geri yükleme. Bu yazı Homend'in sitesindeki ürün sayfalarının bağladığı bu dört Türkçe kılavuza dayanıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce şarj et. Sonra güç tuşuna uzun basarak kapat-aç. 1293H'de tuşlar yanıt vermiyorsa ev tuşunu 15 saniye basılı tutup donanımı zorla kapat; son çare güç ve ev tuşlarına birlikte 7 saniye basmak, yani fabrika ayarı. Bağlantı sorununda Wi-Fi'yi 3 saniyelik basışla sıfırla.

## Modelinde hangi sıfırlama var?

| Model | Kapat-aç | Wi-Fi sıfırlama | Fabrika ayarı |
|---|---|---|---|
| Alex 10, Alex Laser 1291H | Güç tuşuna uzun bas | İstasyondayken ilgili tuşa 3 sn | Kılavuzda yok |
| Alex Laser Power 1289H | Güç tuşuna uzun bas | İstasyondayken ilgili tuşa 3 sn | Kılavuzda yok |
| Alex UltiClean 1293H | Güç tuşuna 3 sn | Güç + ev tuşu birlikte 3 sn | Güç + ev tuşu birlikte 7 sn |

1293H'de ev tuşuna 15 saniye basmak donanımı zorla kapatıyor; aynı tuşa 3 saniye basmak ise çocuk kilidini açıp kapatıyor. Tuşlar hiç tepki vermiyorsa çocuk kilidinin açık olup olmadığını da düşün; kilit açıkken robottaki ve istasyondaki tuşlar çalışmıyor, işlem yalnız uygulamadan yapılıyor.

## Adım adım: hafiften ağıra sıfırlama

**1. Modelini öğren.** Kılavuzun kapağında ve sondaki teknik özellik tablosunda model adı yazıyor. Tuş sırası iki aile arasında farklı; yanlış kombinasyon başka bir işlevi açabilir (çıkarım).

**2. Önce şarj et.** Üç kılavuzun sorun tablosundaki ilk satır "cihaz başlatılamıyor": pil düşükse robotu tam şarj için istasyona koy; pil sıcaklığı çok düşük ya da çok yüksekse 0 ile 40 °C arasında kullan. Şarj olmuyorsa istasyonun gösterge ışığına bak, güç kablosunun iki ucunu kontrol et, istasyonun ve robotun şarj plakalarını kuru bezle temizle.

**3. Kapat-aç.** Alex 10, 1291H ve 1289H kılavuzlarına göre robot hareketsizken güç tuşuna uzun basınca kapanıyor; açmak için yine uzun basıyorsun, güç göstergesi yanıyor ve robot bekleme moduna geçiyor. 1293H'de güç tuşunu 3 saniye basılı tutuyorsun. Sorun tablosu da "sıra dışı davranış" için önce sensörlerin düzgün çalıştığını teyit etmeni, sonra makineyi kapatıp açmanı istiyor.

**4. Uyku moduyla karıştırma.** Alex 10, 1291H ve 1289H'de 10 dakikadan uzun işlem yapılmazsa robot kendiliğinden uyku moduna giriyor ve güç göstergesi sönüyor. Kılavuza göre uyandırmak için herhangi bir tuşa basman yeterli. Gösterge sönük diye robotu bozuk sayma.

**5. 1293H: zorla kapat.** Alex UltiClean 1293H'nin tuş tablosunda ev simgeli tuşa 15 saniye basmak "donanımı zorla kapat" işlevi. Robot donduysa ve güç tuşuna tepki vermiyorsa bunu dene, ardından güç tuşuyla yeniden aç.

**6. 1293H: fabrika ayarı.** Aynı kılavuz, düğmeler yanıt vermediğinde ya da robotun gücü kapatılamadığında fabrika ayarlarını geri yüklemeyi öneriyor: güç ve ev tuşlarına birlikte 7 saniye bas. Kılavuz bu işlemin neleri sildiğini yazmıyor; sonrasında robotu uygulamaya yeniden eklemen gerekebilir (çıkarım).

**7. Wi-Fi'yi sıfırla.** Üç kılavuzun sorun tablosu bağlanamama durumunda Wi-Fi ağını sıfırlayıp yeniden denemeni, uygulamanın en yeni sürümünü indirmeni istiyor. Alex 10, 1291H ve 1289H'de robot şarj istasyonundayken ilgili tuşa 3 saniye basılı tutup Homend Smart uygulamasında kurulumu baştan yapıyorsun. 1293H'de güç ve ev tuşlarına birlikte 3 saniye basınca "ağ yapılandırma moduna geçiliyor" sesli uyarısı geliyor; bu model Xiaomi Home uygulamasıyla bağlanıyor. Makine 5 GHz ağı desteklemiyor; telefonun 2,4 GHz ağda olmalı.

## Resetin çözmediği durumlar

Bazı belirtiler sıfırlamayla değil temizlikle geçiyor. Kılavuzlara göre temizlikte sıra dışı ses geliyorsa döner fırça, yan fırça ya da tekerlek bir şeye takılmış olabilir; robotu durdurup temizle. Emiş azaldıysa toz kutusu dolu ya da filtre tıkalı olabilir. 1293H'de robot geri geri gidiyorsa ön tampon sıkışmış olabilir; engelleri kaldırıp tampona hafifçe vur. Planlanan saatte temizlik yapmıyorsa uygulamadaki programı yeniden kur ve Rahatsız etmeyin modunu kontrol et. Kılavuzlar her sensörün yumuşak, kuru bir bezle silinmesini istiyor.

Robot şarj olmuyorsa [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/), harita bozulduysa [robot süpürge haritalama sorunu](/blog/robot-supurge-haritalama-sorunu/) yazısına bakabilirsin.

## Ne zaman servis

- Şarj, kapat-aç ve (1293H'de) fabrika ayarından sonra robot hâlâ açılmıyorsa
- 1293H'de güç ve ev tuşlarının ışığı kılavuzdaki "arıza" ışık düzeniyle yanıp sönmeye devam ediyorsa
- Kablo ya da şarj istasyonu hasarlıysa

⛔ **Kendin-çöz sınırı burada biter.** Şarj, kapat-aç, Wi-Fi ve fabrika ayarı senin; pil, kart ve motor Homend yetkili servisinin. Kılavuzlar pili ya da şarj ünitesini keyfi olarak sökmemeni istiyor.

## Servisi aramadan önce kısa özet

1. Model adı ne?
2. Tam şarjdan sonra güç göstergesi yanıyor mu?
3. Hangi sıfırlama denendi?
4. Uygulamada robot görünüyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
