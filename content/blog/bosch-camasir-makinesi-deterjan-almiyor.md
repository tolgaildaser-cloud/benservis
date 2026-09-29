---
title: "Bosch çamaşır makinesi deterjan almıyor"
description: "Bosch çamaşır makinesi deterjanı almıyor ya da yumuşatıcı gözünde su kalıyorsa Bosch kılavuzundaki sıra: musluk, hortum ve deterjan çekmecesi temizliği."
slug: "bosch-camasir-makinesi-deterjan-almiyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, Bosch çamaşır belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (B) WGA142X1TR  https://media3.bosch-home.com/Documents/9001583102_B.pdf  52 s.  md5 42506a8ca9a5e07e2a54a74b856293f4  (sayfa atıfları esas olarak bu belgeye göre)
#  (A) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
#  (C) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d
# "Su girişi gerçekleşmiyor. Deterjan cihazın içine alınmıyor." satırı (B s.41-42, A s.45): "Başlat/Reload tuşuna basılmamış · Su girişindeki süzgeçler tıkanmış · Musluk kapalı · Su giriş hortumu katlanmış veya sıkışmış."
#   C s.29: "Cihaza su akmazsa. Deterjan cihazın içine alınmamıştır." — Başlat/Beklet seçilmemiş mi? · musluk açılmamış mı? · süzgeç tıkanmış olabilir mi? · hortum katlanmış/sıkışmış mı?
# Yumuşatıcı gözünde su: B s.42 "[yumuşatıcı sembolü] bölmesinde kalan su mevcut. — [sembol] bölmesindeki tertibat tıkanmış. ▶ → 'Deterjan çekmecesinin temizlenmesi'"
#   C s.30: "Koruyucu bakım maddesi bölmesinde bakiye su mevcut. ■ Hata yok – Koruyucu bakım maddesinin etkisinde değişme yok. ■ Gerekirse ilgili üniteyi temizleyiniz."
#   (Sembol pdftotext'te düştü; B s.18 çekmece şemasında sembollü bölme = "Yumuşatıcı, Sıvı kola, Emprenyeleme maddesi"; C'de aynı satır "koruyucu bakım maddesi bölmesi". Yazıda "yumuşatıcı gözü" dendi.)
# Diğer: B s.43 "Tambur dönüyor, su girişi gerçekleşmiyor" = yük algılama, 2 dk'ya kadar, hata yok · B s.34 "16.2 Deterjan çekmecesinin temizlenmesi" (7 adım) · C s.26 çekmece ve gövde temizliği (fişi çek; silindiri kılavuz pimine geçir; kalan su kurusun diye açık bırak)
#   · C s.21 yoğun yumuşatıcı ve şekil vericileri su ile incelt (tıkanmayı önlemek için), max seviyesini aşma · A s.43 deterjan bölmesi dayanak noktasına kadar itilmemiş → program başlamıyor · B s.32 dozajlama yardımcısı jöle/toz/ön yıkama/kalan süre ile kullanılmaz
#   · B s.30 sıvı deterjanlardan yalnız kendiliğinden akanlar · B s.33 her kullanımdan sonra kapak ve deterjan çekmecesi açık bırakılarak kurutulmalı.
# BİLEREK YAZILMAYANLAR: su giriş valfi/manyetik valf teşhisi (A/B'de yalnız E:30/-20 satırında "Manyetik valf arızalı → müşteri hizmetleri"; belirtiye bağlanmadı) · su basıncı rakamı ·
#   süzgeç temizliğinin adımları (Bosch E17 yazısında var; mükerrer olmasın diye link verildi).
# Alıntı denetim tablosu: bosch-camasir-makinesi-deterjan-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Kuru bez"]
steps:
  - "Musluğun açık olduğunu ve su giriş hortumunun katlanmadığını, bir yere sıkışmadığını kontrol et."
  - "Programı Başlat/Reload tuşuyla başlattığından emin ol; ilk dakikalarda yük algılama sürerken su gelmemesi normaldir."
  - "Cihazı kapat ve fişini çek."
  - "Deterjan çekmecesini dışarı çek, içindeki tertibatı aşağı bastırıp çekmeceyi tamamen çıkar."
  - "Yumuşatıcı gözündeki tertibatı alttan yukarı doğru bastırarak çıkar."
  - "Çekmeceyi ve tertibatı su ve fırçayla temizle, sonra kurula."
  - "Çekmecenin yerleştiği açıklığın içini temizle."
  - "Tertibatı yerine oturt ve çekmeceyi dayanak noktasına kadar içeri it."
faq:
  - q: "Bosch çamaşır makinesi deterjanı çekmecede bırakıyor, neden?"
    a: "Bosch'un kullanma kılavuzlarındaki arıza tablosu 'Su girişi gerçekleşmiyor. Deterjan cihazın içine alınmıyor.' satırında dört sebep sayıyor: Başlat/Reload tuşuna basılmamış, su girişindeki süzgeçler tıkanmış, musluk kapalı ya da su giriş hortumu katlanmış veya sıkışmış. Bosch iki belirtiyi aynı satırda veriyor ve aynı dört kontrolü istiyor."
  - q: "Yumuşatıcı gözünde her yıkamadan sonra biraz su kalıyor, arıza mı?"
    a: "Bosch'un eski WAK kılavuzuna göre bu bölmede kalan su için 'Hata yok'; koruyucu bakım maddesinin etkisinde bir değişiklik olmaz, gerekirse ilgili ünite temizlenir. Yeni WGA142X1TR kılavuzu ise bu bölmede kalan suyun sebebi olarak bölmedeki tertibatın tıkanmasını gösteriyor ve deterjan çekmecesinin temizlenmesini istiyor."
  - q: "Program başladı, tambur dönüyor ama su gelmiyor. Beklemeli miyim?"
    a: "Evet, kısa bir süre. Bosch'un kılavuzuna göre program başladığında tambur döner ve 2 dakikaya kadar sürebilen bir yük algılama işlemi yapılır; ardından su girişi gerçekleşir. Arıza tablosunda da bu durum 'Hata yok, müdahale gerekmiyor' olarak geçiyor."
  - q: "Yumuşatıcının tıkanmaması için ne yapabilirim?"
    a: "Bosch'un eski WAK kılavuzu tıkanmaları önlemek için yoğun yumuşatıcıların ve şekil vericilerin su ile inceltilmesini ve bölmedeki max seviyesinin aşılmamasını istiyor. Bosch ayrıca her kullanımdan sonra kapağın ve deterjan çekmecesinin açık bırakılarak kurutulmasını öneriyor."
images:
  coverAlt: "Çamaşır makinesinden tamamen çıkarılmış deterjan çekmecesi, gözlerinde yumuşatıcı kalıntısı, yanında küçük fırça ve bez"
---

Program bitti, çekmeceyi açtın ve deterjan hâlâ gözde duruyor ya da yumuşatıcı gözünde su birikmiş. Bosch'un çamaşır makinesi kullanma kılavuzlarındaki arıza tablosu bu belirtiyi su girişiyle aynı satırda veriyor: **"Su girişi gerçekleşmiyor. Deterjan cihazın içine alınmıyor."** Bosch bu satırda deterjan için ayrı bir sebep saymıyor; kontroller su girişiyle aynı: musluk, hortum, süzgeç ve Başlat tuşu. Yumuşatıcı gözünde kalan su için ise tablonun ayrı bir satırı var ve çözümü **deterjan çekmecesinin temizlenmesi.** Bu yazıda ikisini Bosch'un sırasıyla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Deterjan hiç alınmıyorsa: musluk açık mı, hortum katlanmış mı, program Başlat/Reload ile başlatıldı mı, su giriş süzgeci tıkalı mı? Yumuşatıcı gözünde su kalıyorsa: çekmeceyi çıkar, tertibatı sök, su ve fırçayla temizle, yerine oturt. Program başındaki 2 dakikaya kadar süren susuz dönüş normal.

## Adım adım: evde denenecekler

**1. Musluğu ve hortumu kontrol et.** Bosch'un tablosundaki iki sebep: **musluk kapalı** ve **su giriş hortumu katlanmış veya sıkışmış.** Bosch'un çözümü: **musluğu aç**, su giriş hortumunun **katlanmadığından veya sıkışmadığından emin ol.** Tablodaki üçüncü sebep **su girişindeki süzgeçlerin tıkanması**; süzgecin temizliği [Bosch çamaşır makinesi E17 hatası](/blog/bosch-camasir-makinesi-e17-hatasi/) yazısında Bosch'un sırasıyla anlatılıyor.

**2. Programın gerçekten başladığından emin ol.** Tablodaki dördüncü sebep: **Başlat/Reload tuşuna basılmamış.** Bosch'un kılavuzuna göre Başlat/Reload'a bastıktan sonra **tambur döner ve 2 dakikaya kadar sürebilen bir yük algılama işlemi** yapılır, **ardından su girişi gerçekleşir.** Bu arada su gelmemesi Bosch'a göre arıza değil: **"Hata yok, müdahale gerekmiyor."**

**3. Cihazı kapat ve fişini çek.** Çekmece temizliğine geçmeden önce Bosch'un temizlik bölümündeki uyarıya uy: **cihazı kapat ve fişini çek.** Bosch temizlikte **çözücü madde içeren temizlik maddelerinin** kullanılmamasını da istiyor.

**4. Deterjan çekmecesini tamamen çıkar.** Yumuşatıcı gözünde su kalıyorsa Bosch'un yeni WGA142X1TR kılavuzuna göre sebep **bölmedeki tertibatın tıkanması** ve çözüm **deterjan çekmecesinin temizlenmesi.** Bosch'un tarifi: **deterjan bölmesini dışarı çek**, **tertibatı aşağıya doğru bastır** ve deterjan bölmesini çıkar.

**5. Yumuşatıcı gözündeki tertibatı çıkar.** Bosch'un tarifine göre ilgili tertibat **aşağıdan yukarıya doğru bastırılarak** çıkarılır. Eski WAK kılavuzu aynı işi "ek parçaya parmağınla alttan üste doğru bastır" diye anlatıyor.

**6. Çekmeceyi ve tertibatı temizle.** Bosch'un tarifi: deterjan çekmecesini ve ilgili tertibatı **su ve fırçayla temizle ve kurula.** Gözlerde biriken yumuşatıcı ya da deterjan kalıntısını bu aşamada al.

**7. Çekmecenin açıklığını temizle.** Bosch'un tarifindeki bir sonraki adım: **deterjan çekmecesinin açıklığını temizle.** Eski WAK kılavuzu bunu **gövdenin içini de temizle** diye yazıyor.

**8. Tertibatı oturt ve çekmeceyi sonuna kadar it.** Tertibatı yerleştir ve **yerine oturt**; eski WAK modellerinde Bosch, silindirin **kılavuz piminin üzerine** geçirilmesini istiyor. Sonra deterjan bölmesini içeri it. Bosch'un i-DOS'lu WGA244A0TR kılavuzunda **deterjan bölmesi dayanak noktasına kadar itilmemişse program çalışmaya başlamıyor**; çekmecenin sonuna kadar girdiğinden emin ol.

## Tıkanmayı önlemek için Bosch'un notları

- **Yoğun yumuşatıcıyı incelt:** Bosch'un eski WAK kılavuzu tıkanmaları önlemek için **yoğun yumuşatıcıların ve şekil vericilerin su ile inceltilmesini** ve bölmedeki **max seviyesinin aşılmamasını** istiyor.
- **Uygun deterjanı kullan:** Bosch'a göre sıvı deterjanlar arasında **yalnız kendiliğinden akanlar** kullanılmalı; deterjan ile yumuşatıcı birbirine karıştırılmamalı.
- **Dozajlama yardımcısını doğru kullan:** Sıvı deterjan için dozajlama yardımcısı olan modellerde Bosch bu parçanın **jöle kıvamındaki deterjanlarda, toz deterjanlarda**, ön yıkama seçiliyken ya da kalan süre seçilen programlarda kullanılmamasını istiyor.
- **Çekmeceyi açık bırak:** Bosch'a göre cihaz her kullanımdan sonra **kapak ve deterjan çekmecesi açık** bırakılarak kurutulmalı.

Eski WAK serisinde yumuşatıcı gözünde biraz su kalması Bosch'a göre tek başına sorun değil: tablo bu satır için **"Hata yok – Koruyucu bakım maddesinin etkisinde değişme yok"** diyor ve yalnız gerekirse ünitenin temizlenmesini istiyor.

Makine hiç su almıyor ve ekranda bir kod görünüyorsa önce kodun anlamına bak: eski modellerde [Bosch çamaşır makinesi E17 hatası](/blog/bosch-camasir-makinesi-e17-hatasi/), yeni modellerde [Bosch çamaşır makinesi E:30-10 hatası](/blog/bosch-camasir-makinesi-e30-10-hatasi/). Markadan bağımsız genel liste için [çamaşır makinesi deterjanı almıyor](/blog/camasir-makinesi-deterjan-almiyor/) yazısı var.

## Sınır nerede biter

Musluk açık, hortum düz, süzgeç ve çekmece temiz, çekmece sonuna kadar içeride ve makine hâlâ deterjanı almıyorsa Bosch'un tablosu kullanıcıya başka adım vermiyor. Bosch'un uyarısı: **usulüne uygun olmayan onarımlar tehlikelidir**; cihazda onarımı **yalnız bunun eğitimini almış uzman personel** yapabilir. Eski WAK kılavuzunun sırası: program ayar düğmesini **Kapalı** konumuna getir, **fişi çek, musluğu kapat** ve yetkili servisi çağır.

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum, süzgeç ve deterjan çekmecesi kullanıcıya; makinenin su giriş tarafının içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Deterjan hiç mi alınmıyor, yoksa yalnız yumuşatıcı gözünde mi su kalıyor?
2. Makine hiç su alıyor mu?
3. Musluk açık, hortum düz müydü?
4. Çekmece ve süzgeç temizlendi mi?
5. Ekranda bir kod görünüyor mu?

Bu beşine cevabın varsa servise "deterjan almıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
