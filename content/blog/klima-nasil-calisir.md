---
title: "Klima nasıl çalışır? Arçelik ve Vestel mod kılavuzları"
description: "Klima nasıl çalışır? Arçelik 182410 ve Vestel Nova kılavuzlarına göre soğutma, ısıtma, nem alma, fan ve otomatik modların mantığı, mod ve sıcaklık seçimi."
slug: "klima-nasil-calisir"
date: "2026-11-04"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-11-03 Sal PAZ alt ajanı (YK #197 boşluk yazısı; BOSLUK.md "2 Kas 2026" #255 [KU, öncelik O] "klima nasıl çalışır (mod mantığı: soğutma / ısıtma / dry)"). Sıradaki ilk üç konudan #251 ütü ve #254 mikrodalga alındı, #253 klima su tahliye hortumu belge yokluğundan düştü; bu üçüncü konu #255. Slug origin/main content/blog/'da yok (3 Kas fetch). Yakın yazılar: klima-isitma-modu-kac-derece-olmali, klima-calismiyor, klima-kumandasi-calismiyor, klima-su-damlatiyor, arcelik-klima-calismiyor, vestel-klima-calismiyor, klima-filtresi-temizleme. Bu yazı mod mantığını anlatır; ısıtma sıcaklığı ve sorun giderme yazılarıyla çakışmaz.
# Konu kanıtı: Google otomatik tamamlama 2 Kas 2026 (BOSLUK.md #255): "klima nasıl" #4, "klima n" #8. GSC kanıt sayılmadı.
# Belgeler (#88), hepsi düz curl -sL (özel başlık yok), HTTP 200 application/pdf, md5'ler önceki indirmelerle (2 Eki) birebir aynı; ham dosyalar _kaynak/klima-nasil-calisir/:
#  (A) Arçelik 182410 A / 232410 A Eco Ionizer inverter serisi ev tipi klima kullanma kılavuzu (28 s.), md5 cef5414dfc998a5217f8be6310bd2be3 — PDF s.14, 15, 16, 17, 21, 25 https://download.arcelik.com.tr/download.usagemanuals/182410-a-eco-ionizer-inverter-serisi-ev-tipi-klima-kullanim-kilavuzu-tr_TR_20151106181318_User20Manual20-20Filetur-A.pdf
#  (V) Vestel Nova Inverter 12 A++ GI WiFi klima kullanım kılavuzu 20234421_k (48 s.), md5 8814dd2a3ddbfd95d191e6e3b3af5d7e — PDF s.26, 27, 28, 32 https://statik.vestel.com.tr/webfiles/20234421_k.pdf
#  Elendi: yok (iki belge de erişilebildi).
# BİLEREK YAZILMAYANLAR: kurulum, gaz, boru, kompresör ve dış ünite işleri (servis) · "dry" adı (iki kılavuz da nem giderme / nem alma der) · enerji tüketimi vaatleri · filtre temizliği adımları (klima-filtresi-temizleme yazısında) · Arçelik kumanda tuş sembolleri (metin katmanında okunmuyor) · fiyat (#46).
# Alıntı denetimi: klima-nasil-calisir.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Klimanın uzaktan kumandası"]
steps:
  - "Kumandayı iç ünitenin sinyal alıcısına doğrult ve klimayı aç."
  - "Mod düğmesine basarak istediğin modu seç."
  - "Sıcaklık düğmeleriyle istediğin sıcaklığı ayarla."
  - "Fan düğmesiyle hava akış hızını seç."
  - "Kanat düğmesiyle havanın yönünü ayarla."
  - "Odayı hızlı soğutmak istiyorsan hızlı soğutma ya da turbo düğmesine bas."
  - "Klimayı uzun süre kullanmayacaksan fan modunda çalıştır, sonra sigortadan kapat."
faq:
  - q: "Klima nasıl çalışır?"
    a: "Vestel Nova kılavuzuna göre klimanın dış ünitesi dışarıdaki ısıyı emerek içeri taşır ve klima odayı ısıtmak için sıcak havayı dolaştırır. Mod kumandadaki mod düğmesiyle seçilir; Arçelik 182410 kılavuzunda tuşa her basışta sırasıyla soğutma, otomatik, nem giderme, ısıtma ve fan modları gelir."
  - q: "Klimada otomatik mod ne yapar?"
    a: "Vestel Nova kılavuzuna göre otomatik modda klima 24 derece hedefiyle çalışır: ortam sıcaklığı 20 derece ve altındaysa ısıtır, 20 ile 27 derece arasındaysa nem alır, 27 derece ve üstündeyse soğutur."
  - q: "Klima fan modunda soğutur mu?"
    a: "Hayır. Arçelik 182410 ve Vestel Nova kılavuzlarının ikisi de fan modunda kompresörün çalışmadığını yazıyor; klima oda sıcaklığını değiştirmeden havayı dolaştırır."
  - q: "Klimada nem alma modu ne işe yarar?"
    a: "Arçelik 182410 kılavuzu nem giderme modunu sıcaklığın nispeten düşük, nemin yüksek olduğu durumlarda ortamı fazla soğutmadan nemi azaltmak için kullanır. Vestel Nova kılavuzu aynı modda fanın en düşük hızda döndüğünü ve değiştirilemediğini yazıyor."
images:
  coverAlt: "Duvara asılı sade split klima iç ünitesi çizimi"
  steps:
    - "Kumandayı klimanın sinyal alıcısına doğrultan beyaz eldivenli sade siluet el çizimi"
    - "Klima ve yanında kumandada işaretli düğmeye uzanan beyaz eldivenli sade siluet el çizimi"
    - "Klima kumandasının sıcaklık düğmesine basan beyaz eldivenli sade siluet el çizimi"
    - "Klima kumandasının fan düğmesine basan beyaz eldivenli sade siluet el çizimi"
    - "Klima kumandasının kanat düğmesine basan beyaz eldivenli sade siluet el çizimi"
    - "Klima kumandasının hızlı soğutma düğmesine basan beyaz eldivenli sade siluet el çizimi"
    - "Klima ve yanında sigorta kutusunda şaltere uzanan beyaz eldivenli sade siluet el çizimi"
---

Klima, kumandadan seçilen moda göre soğutur, ısıtır, nem alır ya da yalnız havayı dolaştırır. Vestel Nova kılavuzuna göre ısıtma modunda dış ünite dışarıdaki ısıyı emerek içeri taşır; Arçelik 182410 kılavuzu da soğutma ve ısıtma için sıcaklığı 18 ile 30 derece arasında ayarlatır. Mod, kumandadaki mod düğmesine her basışta değişir.

Bu yazıda **Arçelik 182410** ve **Vestel Nova Inverter 12** kılavuzlarını yan yana okuyoruz. Düğme ve simge adları modele göre değişir; kendi klimanın kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.** Kurulum, gaz, boru ve kompresör işleri servisin işidir; bu yazıda anlatılmıyor.

> ⚠️ **Önce güvenlik.** Arçelik, yatay kanatları elle ayarlamamanı ve kanat yönünü her zaman kumandayla değiştirmeni istiyor; elle ayar ürüne hasar verebilir. Vestel de yatay kanada kesinlikle elle müdahale etmemeni yazıyor.

## Klimada hangi modlar var?

Arçelik 182410 dört çalışma modu sayıyor: soğutma, akıllı çalışma (fuzzy), nem giderme ve fan. Mod düğmesine her bastığında sırasıyla soğutma, otomatik çalışma, nem giderme, ısıtma ve fan modlarına geçersin. Vestel Nova'da kumanda ekranında istediğin modun simgesi aktif olana kadar mod düğmesine basarsın; modu istediğin anda değiştirebilirsin.

| Mod | Ne yapar? | Kılavuz |
|---|---|---|
| Soğutma | İstenen sıcaklığa soğutur; 18-30 derece aralığında ayarlanır | Arçelik, Vestel |
| Isıtma | Odayı ısıtır; Vestel'de 16-30 derece aralığında ayarlanır | Vestel |
| Nem giderme | Ortamı fazla soğutmadan nemi azaltır | Arçelik, Vestel |
| Fan | Sıcaklığı değiştirmeden havayı dolaştırır, kompresör çalışmaz | Arçelik, Vestel |
| Otomatik | Oda sıcaklığına göre modu klima seçer | Vestel (Arçelik'te akıllı çalışma) |

## Otomatik mod hangi sıcaklıkta ne yapar?

Vestel Nova kılavuzuna göre otomatik modda klima 24 derece hedefiyle çalışır ve çalışma şeklini 20 ile 27 derece eşikleri belirler. Ortam sıcaklığı 20 derece ve altındaysa klima ısıtır. Ortam sıcaklığı 20 ile 27 derece arasındaysa nem alma modunda çalışır. Ortam sıcaklığı 27 derece ve üstündeyse soğutur. Hedefi ısıtma ve soğutma için 2 derece yükseltebilir ya da düşürebilirsin. Klimayı iç ünitedeki açma kapama düğmesinden çalıştırırsan otomatik modda başlar.

Arçelik'in akıllı çalışma (fuzzy) modu benzer işi yapar: klima oda sıcaklığını algılayıp fan hızını ve sıcaklığı otomatik ayarlar. Bu modda klima sıcak moddan soğuk moda ya da tersine geçiş yapmaz, sıcaklığı en fazla iki kademe artırabilir ya da azaltabilirsin ve fan hızını elle değiştiremezsin.

## Adım adım: klimada mod nasıl seçilir?

**1. Klimayı aç.** Kumandayı iç ünitenin sinyal alıcısına doğrult ve açma düğmesine bas. Arçelik sigortanın kapalı olmaması gerektiğini, kumandadan bip sesi gelmiyorsa sinyalin alınmadığını ve tuşa tekrar basmanı yazıyor. Vestel'de klima son seçtiğin modda çalışmaya başlar.

**2. Modu seç.** Mod düğmesine, ekranda istediğin modun simgesi belirene kadar bas.

**3. Sıcaklığı ayarla.** Arçelik'te sıcaklık aralığı 18 ile 30 derece, her basışta 1 derece değişir. Vestel'de soğutmada en düşük sıcaklık 18, ısıtmada en yüksek sıcaklık 30 derecedir. Arçelik soğutma modunda ayarlanan sıcaklığın oda sıcaklığından yüksek olması durumunda cihazın soğutma yapmadığını, bu durumda ayarı düşürmeni yazıyor.

**4. Fan hızını seç.** Fan düğmesiyle hava akış gücünü ayarla. Vestel altı hız seviyesi veriyor: çok düşük, düşük, orta, orta-yüksek, yüksek ve otomatik; otomatik hız fan modunda seçilemez.

**5. Havanın yönünü ayarla.** Kanat düğmesine bas; Vestel'de yatay kanat beş farklı konumda ayarlanır, düğmeye basmaya devam edersen kanat kendiliğinden aşağı yukarı hareket eder ve bir basışta durur.

**6. Hızlı soğutma kullan.** Arçelik'in hızlı soğutma (Jet cool) işlevi 30 dakika boyunca yüksek fan hızında sıcaklığı 18 dereceye getirir ve ısıtma modunda kullanılmaz. Vestel'in turbo işlevi 30 dakika en yüksek hızda çalışır, sonra bir önceki moda döner.

**7. Uzun süre kullanmayacaksan fan modunu kullan.** Vestel klimayı uzun süre çalıştırmayacaksan 2-3 saat fan modunda çalıştırmanı, sonra sigortadan kapatıp kumanda pillerini çıkarmanı istiyor; fan modu klimadaki nemi giderir.

## Fan modunda klima soğutur mu?

Hayır. Arçelik 182410 ve Vestel Nova kılavuzlarının ikisi de fan modunda kompresörün çalışmadığını yazıyor. Fan modu oda sıcaklığını değiştirmeden havayı dolaştırır. Odayı soğutmak ya da ısıtmak için soğutma ya da ısıtma modunu seç.

## Nem alma modunda sıcaklığı neden ayarlayamıyorum?

Arçelik'te nem giderme modunda klima oda sıcaklığını ve hava hacmini algılayıp nemi gidermek için en uygun duruma ayarlanır; ayarlanan sıcaklık kumandada görüntülenmez ve oda sıcaklığını kontrol edemezsin. Vestel'de aynı modda fan en düşük hızda döner ve değiştirilemez; sıcaklığı istersen değiştirebilirsin. Vestel nem alma sırasında turbo işlevinin çalışmadığını da yazıyor.

## Isıtma modunda klima neden bir süre durur?

Vestel'e göre ısıtma modunda dış ortam sıcaklığı düşük ve nem oranı yüksekse dış ünitede buz oluşabilir. Bu durumda klima ısıtmayı durdurur ve otomatik buz çözme (Defrost) işlemi başlar. İşlem 5 ile 9 dakika sürer, göstergede DF simgesiyle görünür ve ardından klima yeniden ısıtmaya döner. Vestel bunu arıza saymıyor. Dışarıdaki hava sıcaklığı düşünce klima daha az ısıtır; yetmiyorsa Vestel ek ısıtıcı kullanmanı öneriyor.

Arçelik, klima yeniden çalıştırıldığında yaklaşık 3 dakika çalışmamasını klimanın korunması için geliştirilmiş bir önlem olarak yazıyor ve bunu arıza saymıyor. Ayrıca ısıtma sırasında hava akımı, sıcaklık yeterli dereceye ulaştıktan sonra başlar.

## Mod ayarından sonra sorun çıkarsa?

Klima ısıtmıyorsa [klima ısıtma modu kaç derece olmalı](/blog/klima-isitma-modu-kac-derece-olmali/), kumanda yanıt vermiyorsa [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/), klima hiç çalışmıyorsa [klima çalışmıyor](/blog/klima-calismiyor/) yazısına bak. Marka yazıları için [Arçelik klima çalışmıyor](/blog/arcelik-klima-calismiyor/) ve [Vestel klima çalışmıyor](/blog/vestel-klima-calismiyor/) var. Su damlıyorsa [klima su damlatıyor](/blog/klima-su-damlatiyor/), filtre temizliği için [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısını kullan.

⛔ **Kendin-çöz sınırı burada biter.** Kumandayla modu, sıcaklığı, fan hızını ve kanadı seçmek sende; kurulum, gaz, boru, kompresör, dış ünite ve elektrik işleri yetkili servisin işi. Arçelik, çalışmayan ürünü kendin onarmaya asla çalışmamanı istiyor.

Belirtiyi ve klimanın modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
<!--MAP A=_kaynak/klima-nasil-calisir/arcelik-182410 -->
<!--MAP V=_kaynak/klima-nasil-calisir/vestel-nova-20234421 -->
