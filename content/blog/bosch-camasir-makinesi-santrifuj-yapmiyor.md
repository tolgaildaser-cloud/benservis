---
title: "Bosch çamaşır makinesi santrifüj yapmıyor"
description: "Bosch çamaşır makinesi sıkmıyor ya da çamaşırlar ıslak çıkıyorsa Bosch kılavuzundaki sıra: devir ayarı, Kolay ütüleme, çamaşır dağılımı ve tahliye hortumu."
slug: "bosch-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, Bosch çamaşır belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (B) WGA142X1TR  https://media3.bosch-home.com/Documents/9001583102_B.pdf  52 s.  md5 42506a8ca9a5e07e2a54a74b856293f4  (sayfa atıfları esas olarak bu belgeye göre)
#  (A) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
#  (C) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d
# Arızaları giderme tablosundaki sıkma satırları (B s.42-45, A s.45-48, C s.30):
#   "Yüksek sıkma devir sayısına ulaşılamadı." (B s.43): düşük devir ayarlanmış → sonraki yıkamada yüksek devir · Kolay ütüleme etkin → kumaşa uygun program · denge kontrol sistemi → çamaşırları yeniden dağıt, Sıkma programını başlat
#   "Sıkma programı çalışmaya başlamıyor." (B s.43): tahliye borusu/hortumu tıkalı → temizle · hortum bükülmüş/sıkışmış → emin ol · çamaşırlar eşit dağılmamış → yeniden dağıt, Sıkma programını başlat
#   "Sıkma sonucu tatmin edici değil. Çamaşırlar çok ıslak / çok nemli." (B s.44-45): aynı sebepler + "Sıkma programını başlatınız."
#   "Birden fazla kez sıkma." (B s.42): "Hata yok - Müdahale gerekmiyor." · A s.41 "E:60 / -2B" denge kontrolü sıkmayı durdurdu · C s.30 eski WAK aynı satırlar
# Diğer: B s.20 ekranda sıkma devri; B s.23 sıkma devri tuşu (sıkmayı kapatan seçimle su boşaltılır, sıkma kapanır, çamaşırlar ıslak kalır) · B s.24 Kolay ütüleme (çamaşırlar askıya asılacak kadar nemli olur)
#   · B s.26 Narin/İpek ve Yünlüler maks. 800 dev/dak; Sıkma/Boşaltma programı · B s.41 tahliye satırında pis su pompası tıkanmış · B s.40 diğer tüm hata kodları → müşteri hizmetleri · C s.12 "- - - = Sıkma iptal"
# BİLEREK YAZILMAYANLAR: motor, kömür, tako, kart, rulman teşhisi (belgede yok) · pompa temizliği burada adım olarak verilmedi (E:30-80/E18 yazılarına link) · devir/nem yüzdesi rakamları (modele bağlı, gerek yok).
# Alıntı denetim tablosu: bosch-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekranda ayarlı sıkma devrine bak; sıkma kapalı ya da devir düşükse daha yüksek bir devir seç."
  - "Kolay ütüleme seçiliyse kapat ya da kumaş türüne uygun programı seç."
  - "Seçtiğin programın en yüksek sıkma devrini kontrol et; hassas programlarda devir sınırlıdır."
  - "Kapağı açıp çamaşırları tambur içinde yeniden dağıt; büyük ve küçük parçaları birlikte koy."
  - "Tahliye hortumunun bükülmediğinden ve bir yere sıkışmadığından emin ol."
  - "Tahliye borusu ya da hortumu tıkalıysa temizle."
  - "Kapağı kapat ve Sıkma programını başlat."
faq:
  - q: "Bosch çamaşır makinem hiç sıkmadan programı bitirdi, arıza mı?"
    a: "Önce ayarlara bak. Bosch'un kılavuzuna göre sıkma devri tuşunda sıkmayı kapatan seçim yapıldığında su boşaltılır, sıkma devre dışı kalır ve çamaşırlar ıslak hâlde tamburda kalır. Bosch'un arıza tablosu ayrıca çamaşırlar eşit dağılmadığında denge kontrol sisteminin sıkmayı durdurduğunu söylüyor; çözüm çamaşırları yeniden dağıtıp Sıkma programını başlatmak."
  - q: "Makine sıkmaya birkaç kez başlayıp duruyor, bozuk mu?"
    a: "Bosch'a göre hayır. Arıza tablosundaki 'Birden fazla kez sıkma' satırında denge kontrol sisteminin çamaşırları birkaç kez dağıtarak dengesizliği düzelttiği yazıyor ve karşılığı 'Hata yok - Müdahale gerekmiyor.' Bosch'un önerisi tambura mümkün olduğunca büyük ve küçük çamaşırları bir arada yerleştirmek."
  - q: "Kolay ütüleme seçince çamaşırlar neden nemli çıkıyor?"
    a: "Bosch'un kılavuzuna göre Kolay ütüleme, kırışıklıkları azaltmak için sıkma devir sayısını uygun hale getiriyor ve çamaşırlar yıkamadan sonra askıya asılacak kadar nemli oluyor. Arıza tablosu da 'Yüksek sıkma devir sayısına ulaşılamadı' satırında Kolay ütülemeyi sebepler arasında sayıyor."
  - q: "Yeni Bosch'umun ekranında E:60 / -2B yazıyor, bu ne?"
    a: "Bosch'un WGA244A0TR kılavuzuna göre E:60 / -2B, denge kontrol sisteminin çamaşırlar eşit dağılmadığı için sıkma işlemini durdurduğunu gösteriyor. Çözüm tamburdaki çamaşırları yeniden dağıtmak. Aynı konunun ayrıntısı Bosch E32 yazımızda."
images:
  coverAlt: "Açık kapaklı ön yüklemeli çamaşır makinesinin tamburunda tek tarafa toplanmış ıslak çamaşırlar, yanında boş çamaşır sepeti"
---

Program bitti, kapağı açtın ve çamaşırlar sırılsıklam. Bosch'un çamaşır makinesi kullanma kılavuzlarındaki arıza tablosunda bu durum üç ayrı satırda geçiyor: **"Yüksek sıkma devir sayısına ulaşılamadı"**, **"Sıkma programı çalışmaya başlamıyor"** ve **"Sıkma sonucu tatmin edici değil. Çamaşırlar çok ıslak / çok nemli."** Bosch'un bu satırlarda saydığı sebeplerin çoğu ayar ve yerleştirme: düşük seçilmiş devir, açık kalmış Kolay ütüleme, tamburda eşit dağılmamış çamaşır ve tahliye hattı. Bu yazıda Bosch'un sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıkma devri kapalı ya da düşük mü → yükselt. Kolay ütüleme açık mı → kapat. Hassas programlar düşük devirle sıkar. Çamaşırları yeniden dağıt, tahliye hortumunu kontrol et, Sıkma programını başlat. Birkaç kez sıkmaya başlayıp durması Bosch'a göre arıza değil.

## Adım adım: evde denenecekler

**1. Sıkma devri ayarına bak.** Bosch'un tablosundaki ilk sebep: **düşük sıkma devir sayısı ayarlanmış.** Ekran ayarlanan devri dev/dak olarak gösteriyor. Bosch'un kılavuzuna göre sıkma devri tuşunda sıkmayı kapatan seçim yapıldığında **su boşaltılır ve sıkma devre dışı bırakılır; çamaşırlar ıslak hâlde tamburda kalır.** Bosch'un önerisi: **bir sonraki yıkamada yüksek bir sıkma devir sayısı ayarla.** Eski WAK serisinde ekranda **"– – –"** görünüyorsa bu, sıkmanın iptal edildiği anlamına geliyor.

**2. Kolay ütülemeyi kontrol et.** İkinci sebep: **Kolay ütüleme etkinleştirilmiş.** Bosch'a göre bu seçenek kırışıklıkları azaltmak için sıkma devrini düşürüyor ve çamaşırlar **askıya asılacak kadar nemli** çıkıyor. Bosch'un çözümü: **kumaş türüne uygun programı seç.**

**3. Programın devir sınırını hesaba kat.** Bosch'un program tablosunda her programın bir üst devir sınırı var. WGA142X1TR'de örneğin **Narin/İpek** ve **Yünlüler** programları en fazla **800 dev/dak** sıkıyor. Hassas bir programla yıkadığın çamaşırın daha nemli çıkması bu sınırdan.

**4. Çamaşırları yeniden dağıt.** Bosch'un üç satırında da ortak sebep: **denge kontrol sistemi sıkma işlemini çamaşırlar eşit dağılmadığı için durdurdu.** Bosch'un çözümü: **tamburun içindeki çamaşırları yeniden dağıt.** Bosch'un notu: mümkün olduğunca **büyük ve küçük çamaşırları birlikte** tambura yerleştir; farklı büyüklükteki çamaşırlar sıkma sırasında daha iyi dağılır.

**5. Tahliye hortumunun bükülmediğini gör.** "Sıkma programı çalışmaya başlamıyor" satırındaki sebeplerden biri: **boşaltma borusu veya su çıkış hortumu bükülmüş veya sıkışmış.** Bosch'un çözümü: çıkış borusunun ve su çıkış hortumunun **bükülmediğinden veya sıkışmadığından emin ol.**

**6. Tahliye hattını temizle.** Aynı satırın diğer sebebi: **tahliye borusu veya su tahliye hortumu tıkanmış.** Bosch'un çözümü: **tahliye borusunu ve su tahliye hortumunu temizle.** Makine suyu hiç atamıyorsa Bosch'un tablosu "deterjanlı su cihazdan pompalanıp boşaltılmıyor" satırında **tıkanmış pis su pompasını** da sayıyor; pompanın temizliği yeni modeller için [Bosch çamaşır makinesi E:30-80 hatası](/blog/bosch-camasir-makinesi-e30-80-hatasi/), eski modeller için [Bosch çamaşır makinesi E18 hatası](/blog/bosch-camasir-makinesi-e18-hatasi/) yazısında bu iş adım adım anlatılıyor.

**7. Sıkma programını başlat.** Bosch'un her üç satırdaki son adımı: **Sıkma programını başlat.** Ayarı düzelttikten, çamaşırları dağıttıktan ve hortumu kontrol ettikten sonra kapağı kapat ve yalnız Sıkma programını çalıştır. Bosch'un program tablosunda **Sıkma/Boşaltma** programı sıkma ve su boşaltma yapıyor.

## Arıza sanılan normal durumlar

Bosch'un tablosunda iki satır doğrudan **"Hata yok - Müdahale gerekmiyor"** diyor:

- **Birden fazla kez sıkma:** Denge kontrol sistemi çamaşırları birkaç kez dağıtarak dengesizliği düzeltiyor.
- **Program süresi yıkama sürecinde değişiyor:** Aynı denge düzeltmesi ya da köpük kontrol sistemi program süresini değiştirebiliyor.

Yeni Bosch modellerinde ekranda **E:60 / -2B** görürsen Bosch'un WGA244A0TR kılavuzuna göre bu, denge kontrol sisteminin çamaşırlar eşit dağılmadığı için sıkmayı durdurduğunu gösteriyor. Eski modellerdeki karşılığı ve ayrıntısı [Bosch çamaşır makinesi E32 hatası](/blog/bosch-camasir-makinesi-e32-hatasi/) yazısında. Sıkma sırasında makine sallanıp yer değiştiriyorsa [Bosch çamaşır makinesi titriyor](/blog/bosch-camasir-makinesi-titriyor/) yazısına bak. Markadan bağımsız genel liste için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısı var.

## Sınır nerede biter

Devir yüksek, Kolay ütüleme kapalı, çamaşırlar dağıtılmış, hortum düz ve temiz, Sıkma programı başlatılmış ve makine hâlâ hiç sıkmıyorsa Bosch'un tablosu kullanıcıya başka adım vermiyor. Bosch'un uyarısı: **usulüne uygun olmayan onarımlar tehlikelidir**; cihazda onarımı **yalnız bunun eğitimini almış uzman personel** yapabilir. Bosch'un yeni kılavuzlarında tabloda karşılığı olmayan hata kodları için yazan da aynı: **müşteri hizmetlerini ara.**

⛔ **Kendin-çöz sınırı burada biter.** Ayar, çamaşır dağılımı ve hortum kullanıcıya; motor ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Hangi programı ve kaç devri seçtin?
2. Kolay ütüleme açık mıydı?
3. Tamburda tek büyük parça mı vardı?
4. Makine hiç mi sıkmıyor, yoksa sıkmaya başlayıp duruyor mu?
5. Ekranda bir kod görünüyor mu?

Bu beşine cevabın varsa servise "santrifüj yapmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
