---
title: "Bosch çamaşır makinesi titriyor ve yürüyor"
description: "Bosch çamaşır makinesi sıkmada çok titriyor ya da yer değiştiriyorsa Bosch kılavuzundaki üç sebep: hizalama, ayak somunları ve taşıma emniyetleri."
slug: "bosch-camasir-makinesi-titriyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, Bosch çamaşır belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (B) WGA142X1TR  https://media3.bosch-home.com/Documents/9001583102_B.pdf  52 s.  md5 42506a8ca9a5e07e2a54a74b856293f4  (sayfa atıfları esas olarak bu belgeye göre)
#  (A) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
#  (C) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d
# "Sıkma sırasında cihazda titreşim ve hareket." satırı (B s.42, A s.46): "Cihaz doğru şekilde hizalanmamış. ▶ Cihazın doğru konumlandırılması · Cihaz ayakları sabitlenmemiş.
#   ▶ Cihaz ayaklarını sıkınız. · Taşıma güvenliği donanımları çıkarılmamış. ▶ Taşıma emniyet tertibatlarının çıkarılması." · Aynı üçlü "Sıkma sırasında yüksek sesli gürültü." satırında (B s.44, A s.47)
#   C s.30: "Sıkma esnasında gürültü, titreşimler ve cihazın 'Yürümesi' söz konusu olursa." — cihaz konumu, ayaklar, taşıma güvenlik donanımları.
# Diğer: B s.15-16 "4.6 Cihazın doğru konumlandırılması" (SW17 anahtar, kontra somun, ayaklar, su terazisi, tüm ayaklar zeminde) · C s.38 hizalama ("Doğru hizalama olmaması durumunda yoğun gürültü, titreşim ortaya çıkabilir ve cihaz 'hareket edebilir'!")
#   · C s.35 yerleştirme yüzeyi (sabit ve düz; yumuşak zemin uygun değil; taban/ahşap ızgara; çıkarılmayan taşıma emniyetleri tambura zarar verebilir) · B s.12-13 taban ve ahşap kiriş gereklilikleri; B s.13 taşıma emniyetleri 13 numara anahtarla
#   · B s.42 "Program başlatıldıktan sonra tambur sarsılıyor" = motor testi, hata yok · B s.42 birden fazla kez sıkma, hata yok · A s.41 E:60/-2B · B s.29 tutucu parçalar aksesuarı (WMZ2200).
# BİLEREK YAZILMAYANLAR: rulman, amortisör, karşı ağırlık teşhisi (belgede yok) · taşıma emniyetlerinin söküm yordamı adım olarak verilmedi (#31: kurulumu yapan servise/Bosch kurulum talimatına yönlendirildi) ·
#   aksesuar sipariş numaraları gövdeye yazılmadı.
# Alıntı denetim tablosu: bosch-camasir-makinesi-titriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Su terazisi", "17 numara (SW17) cıvata anahtarı"]
steps:
  - "Programı durdur, makineyi kapat ve fişini çek."
  - "Makinenin arkasına bak; taşıma emniyeti cıvataları hâlâ takılıysa makineyi çalıştırma."
  - "Makinenin üstüne su terazisi koyup öne-arkaya ve sağa-sola eğimi kontrol et."
  - "Dört ayağın da zemine sağlam şekilde oturduğunu kontrol et."
  - "Eğim varsa ayağın kontra somununu SW17 anahtarla gevşet ve ayağı çevirerek yüksekliği ayarla."
  - "Ayağı sabit tutarak kontra somunu yeniden gövdeye doğru sık; bunu dört ayak için yap."
  - "Tamburdaki çamaşırları büyük ve küçük parçalar karışık olacak şekilde yeniden dağıt."
  - "Fişi tak ve Sıkma programıyla titreşimin azaldığını kontrol et."
faq:
  - q: "Bosch çamaşır makinesi sıkarken neden yürüyor?"
    a: "Bosch'un kullanma kılavuzlarındaki arıza tablosu 'Sıkma sırasında cihazda titreşim ve hareket' satırında üç sebep sayıyor: cihaz doğru hizalanmamış, cihaz ayakları sabitlenmemiş ya da taşıma emniyet tertibatları çıkarılmamış. Eski WAK kılavuzu aynı sebepleri gürültü, titreşim ve cihazın 'yürümesi' için veriyor ve doğru hizalama olmazsa cihazın hareket edebileceğini ayrıca yazıyor."
  - q: "Taşıma emniyeti nedir, çıkarılmazsa ne olur?"
    a: "Bosch'a göre makine taşınırken arka tarafındaki taşıma emniyet tertibatlarıyla sabitlenir. Eski WAK kılavuzuna göre çıkarılmayan taşıma emniyetleri çalışma sırasında makineye, örneğin tambura zarar verebilir ve ilk kullanımdan önce dördünün de tamamen çıkarılması gerekir. Cıvata ve kovanlar sonraki taşımalar için saklanmalı."
  - q: "Program başında tambur sarsılıyor, bu da titreşim mi?"
    a: "Hayır. Bosch'un arıza tablosunda 'Program başlatıldıktan sonra tambur sarsılıyor' satırının karşılığı dahili bir motor testi; Bosch buna 'Hata yok - Müdahale gerekmiyor' diyor. Titreşim sorunu sıkma sırasında ortaya çıkan sallanma ve yer değiştirmedir."
  - q: "Makine ahşap zeminde ya da bir taban üzerinde duruyor, fark eder mi?"
    a: "Eder. Bosch'un eski WAK kılavuzuna göre yerleştirme yüzeyi sabit ve düz olmalı, yumuşak zemin ve zemin kaplamaları uygun değil. Taban ya da ahşap ızgara üzerinde makine sıkma sırasında hareket edip devrilebileceği için ayakların sabitleme düzeneğine bağlanması gerekiyor. Ahşap kirişli zeminde Bosch, makinenin zemine sıkıca vidalanmış, suya dayanıklı ve en az 30 mm kalınlığında bir ahşap plaka üzerine kurulmasını istiyor."
images:
  coverAlt: "Banyo zemininde duran beyaz çamaşır makinesinin önünde su terazisi ve ayak somununu ayarlamak için cıvata anahtarı"
---

Sıkma başladığında makine sallanıyor, gürültü artıyor ve bir süre sonra yerinden kaymış oluyor. Bosch'un çamaşır makinesi kullanma kılavuzlarındaki arıza tablosunda bunun ayrı bir satırı var: **"Sıkma sırasında cihazda titreşim ve hareket."** Bosch'un bu satırda saydığı üç sebebin üçü de kurulumla ilgili: **"Cihaz doğru şekilde hizalanmamış"**, **"Cihaz ayakları sabitlenmemiş"** ve **"Taşıma güvenliği donanımları çıkarılmamış."** Bu yazıda Bosch'un kurulum bölümündeki tarifle üçünü sırayla kontrol ediyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce arkadaki taşıma emniyetlerine bak; takılıysa makineyi çalıştırma. Sonra su terazisiyle hizayı kontrol et, ayakları çevirerek düzelt ve kontra somunları sık. Çamaşırları karışık dağıt. Program başındaki kısa sarsıntı Bosch'a göre motor testidir, arıza değil.

## Adım adım: evde denenecekler

**1. Makineyi durdur ve fişini çek.** Makineyi ayarlamadan önce programı durdur, makineyi kapat ve **fişini çek.** Bosch'un eski WAK kılavuzunun uyarısı: **dönen tamburun içine elini sokma**, tambur durana kadar bekle.

**2. Taşıma emniyetlerini kontrol et.** Tablodaki üçüncü sebep: **taşıma güvenliği donanımları çıkarılmamış.** Bosch'a göre makine taşınırken **arka tarafındaki** taşıma emniyet tertibatlarıyla sabitlenir. Eski WAK kılavuzunun uyarısı açık: **çıkarılmayan taşıma emniyetleri çalışma sırasında makineye, örneğin tambura zarar verebilir**; ilk kullanımdan önce **dördünün de tamamen** çıkarılması gerekir. Arkada bu cıvatalar hâlâ duruyorsa makineyi çalıştırma; Bosch'un kurulum bölümündeki tarifle çıkarılması gerekir, bunu makineyi kuran servise yaptırabilirsin.

**3. Su terazisiyle hizayı kontrol et.** Birinci sebep: **cihaz doğru şekilde hizalanmamış.** Eski WAK kılavuzu sonucu da yazıyor: doğru hizalama olmaması durumunda **yoğun gürültü, titreşim ortaya çıkabilir ve cihaz "hareket edebilir".** Bosch hizalamanın **bir su terazisiyle** kontrol edilmesini istiyor. Teraziyi makinenin üstüne koy, iki yöne de bak.

**4. Dört ayağın zemine oturduğunu gör.** Bosch'un kuralı: **cihazın tüm ayakları sağlam şekilde zemin üzerinde durmalıdır.** Bosch'un eski kılavuzuna göre yerleştirme yüzeyi **sabit ve düz** olmalı; **yumuşak zeminler ve zemin kaplamaları uygun değil.**

**5. Ayağı çevirerek yüksekliği ayarla.** Bosch'un tarifine göre ayağın **kontra somunu SW17 cıvata anahtarıyla saat yönünde döndürülerek** gevşetilir. Sonra makineyi düzlemek için **cihaz ayağı döndürülür** ve hiza yine su terazisiyle kontrol edilir.

**6. Kontra somunları sık.** Tablodaki ikinci sebep: **cihaz ayakları sabitlenmemiş.** Bosch'un çözümü: **cihaz ayaklarını sık.** Tarife göre kontra somun SW17 anahtarla **cihaz gövdesine doğru** sıkılır; bu sırada **ayak sabit tutulur ve yüksekliği değiştirilmez.** Eski WAK kılavuzunun notu: **dört ayağın hepsindeki** kontra somunlar gövdeye sağlam biçimde vidalanmış olmalı.

**7. Çamaşırları karışık dağıt.** Sıkmadaki dengesizliği Bosch'un denge kontrol sistemi de izliyor. Bosch'un önerisi: tambura mümkün olduğunca **büyük ve küçük çamaşırları bir arada** yerleştir; farklı büyüklükteki çamaşırlar sıkma sırasında daha iyi dağılır.

**8. Sıkma programıyla dene.** Fişi tak ve kısa bir **Sıkma** programı çalıştır. Titreşimin azalıp azalmadığına bak. Sıkma sırasındaki yüksek sesli gürültü için de Bosch'un tablosu aynı üç sebebi veriyor.

## Zemin ve taban notları

Bosch'un kurulum bölümü zemin için ek şartlar koyuyor:

- **Taban ya da ahşap ızgara üzerinde:** Eski WAK kılavuzuna göre makine sıkma sırasında **hareket edebilir ve tabandan devrilebilir**; cihaz ayaklarının sabitleme askısına bağlanması gerekiyor. Yeni kılavuz da taban üzerinde ayakların **üreticinin tutturma düzenekleriyle** sabitlenmesini istiyor.
- **Ahşap kirişli zemin:** Makine zemine sıkıca vidalanmış, suya dayanıklı, **en az 30 mm kalınlığında** bir ahşap plaka üzerine kurulmalı; eski kılavuza göre mümkünse bir köşeye.
- **Mutfak tezgâhı altında:** Makine yalnız komşu dolaplara sıkıca bağlanmış kesintisiz bir tezgâhın altına kurulmalı.

## Arıza sanılan normal durumlar

Bosch'un tablosunda iki satır **"Hata yok - Müdahale gerekmiyor"** diyor: **program başlatıldıktan sonra tamburun sarsılması** (dahili motor testi) ve **birden fazla kez sıkma** (denge kontrol sistemi dengesizliği düzeltiyor). Yeni modellerde ekranda **E:60 / -2B** görürsen Bosch'a göre denge kontrolü, çamaşırlar eşit dağılmadığı için sıkmayı durdurmuştur; ayrıntısı [Bosch çamaşır makinesi E32 hatası](/blog/bosch-camasir-makinesi-e32-hatasi/) yazısında. Çamaşırlar ıslak çıkıyorsa [Bosch çamaşır makinesi santrifüj yapmıyor](/blog/bosch-camasir-makinesi-santrifuj-yapmiyor/) yazısına bak. Ses ve titreşimin markadan bağımsız ayrımı [çamaşır makinesi gürültü yapıyor](/blog/camasir-makinesi-ses-titresim/) yazısında.

## Sınır nerede biter

Taşıma emniyetleri çıkarılmış, makine terazide düz, dört ayak zeminde ve kontra somunlar sıkılı, çamaşırlar dağıtılmış ve makine hâlâ sıkmada sert titriyorsa Bosch'un tablosu kullanıcıya başka adım vermiyor. Bosch'un uyarısı: **usulüne uygun olmayan onarımlar tehlikelidir**; cihazda onarımı **yalnız bunun eğitimini almış uzman personel** yapabilir. Eski WAK kılavuzunun sırası: program ayar düğmesini **Kapalı** konumuna getir, **fişi çek, musluğu kapat** ve yetkili servisi çağır.

⛔ **Kendin-çöz sınırı burada biter.** Hiza, ayaklar ve çamaşır dağılımı kullanıcıya; makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Makine yeni mi kuruldu, yakın zamanda taşındı mı?
2. Arkadaki taşıma emniyetleri çıkarılmış mı?
3. Makine hangi zeminde duruyor: fayans, ahşap, taban?
4. Titreşim yalnız sıkmada mı, her aşamada mı?
5. Ekranda bir kod görünüyor mu?

Bu beşine cevabın varsa servise "çok titriyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
