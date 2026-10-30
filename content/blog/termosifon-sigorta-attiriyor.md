---
title: "Termosifon sigorta attırıyor: güvenli kontroller"
description: "Termosifon sigorta attırıyorsa önce elektriği kes, zorlama. Vestel ve Arçelik kılavuzlarına göre ayrı hat, uzatma kablosu, kablo kontrolü ve servis sınırı."
slug: "termosifon-sigorta-attiriyor"
date: "2026-10-30"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, grup C). origin/main'de termosifon + sigorta yazısı yok. Yakın: termosifon-isigi-yanmiyor, termosifon-suyu-isitmiyor,
#   termosifon-emniyet-ventili-su-damlatiyor, camasir-makinesi-sigorta-attiriyor (başka cihaz).
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "termosifon sigor" → 3. termosifon sigorta attırıyor · 5. termosifon sigortası kaç amper olmalı · 6. termosifon sigortası neden atar
#   · 9. termosifon sigortayı neden attırır · 10. termosifon neden sigorta attırır; "termosifon neden" → 3. termosifon neden sigorta attırır. BOSLUK.md #89.
# Belgeler (bu koşuda curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf):
#  (V) Vestel elektrikli termosifon kullanım kılavuzu 20214615_k, 24 s.  https://statik.vestel.com.tr/webfiles/20214615_k.pdf  md5 5b2d7d441b5c5d5fc6b34451d428e8e0
#  (A) Arçelik T 7350 B / T 7365 B / T 7380 B termosifon kullanım kılavuzu, 20 s.  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201711221231276_User%20Manual%20-%20Filetr_TR.pdf  md5 51d9eda80694c637271a099e175a0722
# Sayfalar (PDF): V s.5 topraklama, su dolu, uzatma yok, kablo servis · V s.6 V-otomat sigorta görevi, aynı devrede yüksek güçlü cihaz yok · V s.7-8 kablo kontrolü, kullanmama durumları, iç parça yok
#   · V s.9 C tipi 16A sigorta · V s.14 V-otomat kaçakta keser, yetkili birine bağlat · V s.18 sorun tablosu · A s.4 elektrik güvenliği · A s.5 su dolu, parçalar yalnız yetkili servis.
# BİLEREK YAZILMAYANLAR: rezistans, termostat, kart teşhisi · sigorta/V-otomat/kablo değiştirme ya da bağlama (yetkili kişi) · kaçak akım ölçümü · "şu nedenle atar" kesin teşhisi (kılavuzlarda yok) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Termosifonun kullanma kılavuzu", "El feneri"]
steps:
  - "Termosifonun elektriğini kapalı bırak; sigortayı ya da şalteri tekrar tekrar açıp termosifonu zorlama."
  - "Hangi sigortanın attığına bak: termosifonun kendi V-otomat şalteri mi, evin ya da binanın ana sigortası mı?"
  - "Aynı elektrik hattından başka yüksek güç çeken bir cihazın çalışıp çalışmadığını kontrol et."
  - "Termosifonun uzatma kablosu ya da çoklu prizle bağlanıp bağlanmadığına bak."
  - "Elektrik kablosunu ve gövdeyi dokunmadan gözle kontrol et; ıslaklık, hasar, koku ya da duman varsa kullanma."
  - "Yeniden enerji vermeden önce termosifonun tamamen su dolu olduğundan emin ol."
  - "Sigorta yeniden atıyorsa elektriği kesik bırak ve yetkili servisi çağır; bağlantı, kablo ve iç parçalar servisin işidir."
faq:
  - q: "Termosifon sigortası kaç amper olmalı?"
    a: "Kılavuza göre değişir. İncelediğimiz Vestel elektrikli termosifon kılavuzu cihazda C tipi 16A sigorta kullanıldığını yazıyor. Arçelik T 7350 B kılavuzu ise amper vermeden cihazın elektrik beslemesine mutlaka çift kutuplu uygun bir sigorta bağlanmasını istiyor. Kendi modelinin değerini kendi kılavuzundan ve etiketinden oku; bağlantıyı yetkili kişi yapar."
  - q: "Termosifonun V-otomat şalteri neden atar?"
    a: "Vestel kılavuzuna göre V-otomat şalter sigorta görevi görür; kapalı konuma getirildiğinde ya da herhangi bir elektrik kaçağında termosifonun şebeke bağlantısını keser. Kılavuz nedenin teşhisini kullanıcıya bırakmıyor; tekrar ediyorsa yetkili servis."
  - q: "Termosifonu uzatma kablosuyla kullanabilir miyim?"
    a: "Hayır. Vestel kılavuzu elektrikli uzatma kablolarını ve çoklayıcıları kullanmamanı söylüyor. Arçelik kılavuzu da uzatma kablosu ya da çoklu prizle bağlantı yapılmamasını, cihazın sabit tesisata bağlanmasını istiyor."
  - q: "Termosifonla aynı hatta başka cihaz çalışabilir mi?"
    a: "Arçelik T 7350 B kılavuzuna göre diğer cihazlar (çamaşır makinesi, bulaşık makinesi, ütü vb.) termosifonun hattından beslenmemelidir. Vestel de elektrik devresine aşırı yük binmesini önlemek için aynı devrede başka bir yüksek güç çeken cihaz çalıştırmamanı istiyor."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir elektrikli termosifon ve yanında kapağı açık bir sigorta kutusu"
  steps:
    - "Sigorta kutusundaki şalteri kapalı konumda bırakan beyaz eldivenli sade siluet el"
    - "Termosifonun yanındaki küçük şalter ile evin sigorta kutusu yan yana çizimi"
    - "Aynı prize bağlı termosifon, çamaşır makinesi ve ütü üzerinde çarpı işareti çizimi"
    - "Çoklu priz ve uzatma kablosu üzerinde çarpı işareti çizimi"
    - "Termosifon kablosuna el feneriyle uzaktan bakan beyaz eldivenli sade siluet el"
    - "Açık sıcak su musluğundan akan su ve termosifon çizimi"
    - "Termosifonun yanında alet çantasıyla bekleyen servis teknisyeni silueti, yüz yok"
---

Termosifonu açıyorsun, sigorta atıyor. Bir daha kaldırıyorsun, yine atıyor. "Termosifon neden sigorta attırır" diye arayanların çoğu burada sigortayı defalarca kaldırıp indiriyor. Bu bir elektrik güvenliği uyarısıdır. Bu yazıda kullanıcının **güvenle yapabileceği kontrolleri** ve **elektrik servisinin başladığı sınırı** iki üreticinin kendi Türkçe kılavuzundan topladık: **Vestel** elektrikli termosifon (20214615) ve **Arçelik** T 7350 B. Kendi termosifonunun kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ **Önce güvenlik:** Islak elle termosifona, şaltere ya da prize dokunma. Vestel kılavuzu ıslak ve nemli ellerle cihaza dokunmamanı istiyor. Termosifonun içini, kapağını ya da elektrik bağlantısını açma; iki kılavuz da bunu yetkili servise bırakıyor.

## Kılavuzlar ne diyor

| Konu | Vestel 20214615 | Arçelik T 7350 B |
|---|---|---|
| **Sigorta** | C tipi 16A (s.9) | Çift kutuplu uygun sigorta (s.4) |
| **Topraklama** | Zorunlu, topraklı hat ya da topraklı priz (s.5) | Zorunlu (s.4) |
| **Uzatma / çoklu priz** | Kullanma (s.5-6) | Bağlantı yapılmamalı (s.4) |
| **Aynı hat** | Başka yüksek güçlü cihaz çalıştırma (s.6) | Diğer cihazlar bu hattan beslenmemeli (s.4) |
| **Şalter** | V-otomat, kaçakta keser (s.14) | N-otomatla sabit tesisata (s.4) |

## Adım adım: sigorta atınca güvenli sıra

**1. Elektriği kesik bırak, zorlama.** Vestel kılavuzu cihaz **düzgün çalışmazsa** onu kullanmamanı, böyle bir durumda cihazı kapatıp güç bağlantısını kesmeni ve yetkili servisle irtibata geçmeni istiyor. Arçelik de ürün ya da kablosu arızalıysa yetkili servis onarmadan **çalıştırılmamasını** söylüyor. Sigortayı art arda kaldırıp indirmek bu listenin parçası değil.

**2. Hangi sigorta attı?** Vestel'de termosifon bir **V-otomat şalteriyle** açılıp kapanıyor. Kılavuza göre V-otomat **sigorta görevi görür**: kapalı konuma getirildiğinde ya da **herhangi bir elektrik kaçağında** termosifonun şebeke bağlantısını keser. Vestel'in sorun tablosunda ayrıca "**bina ana sigortası atmış**" satırı var. Atanın termosifonun kendi şalteri mi, evin sigortası mı olduğunu not et; servise söyleyeceğin ilk bilgi bu.

**3. Aynı hatta başka cihaz var mı?** Vestel kılavuzu, elektrik devresine **aşırı yük** binmesini önlemek için aynı devrede başka bir **yüksek güç çeken** cihaz çalıştırmamanı istiyor. Arçelik daha açık: cihaz **N-otomatla sabit tesisata** bağlanmalı ve **diğer cihazlar** (çamaşır makinesi, bulaşık makinesi, ütü vb.) **bu hattan beslenmemeli**. Termosifon atarken aynı hatta başka bir cihaz çalışıyor muydu, bak.

**4. Uzatma kablosu ya da çoklu priz var mı?** Vestel: elektrikli uzatma kablolarını ya da çoklayıcıları **kullanma**; aksi hâlde elektrik çarpması ya da üründe hasar olabilir. Arçelik: uzatma kablosu ya da çoklu prizle **bağlantı yapılmamalı**. Termosifonun böyle bağlandığını görürsen kendin değiştirmeye kalkma; bağlantıyı yetkili kişiye yaptır.

**5. Kabloyu gözle kontrol et, dokunma.** Vestel, cihazın yalnız elektrik kablosunda ve gövdesinde **hiçbir hasar görünmediği** takdirde kullanılmasını, kablonun düzenli olarak hasar açısından kontrol edilmesini istiyor. Kılavuz şu durumlarda cihazı **asla kullanmamanı** söylüyor: cihaz ya da kablosu hasarlıysa, elektrikli parçalar görünecek şekilde hasar görmüşse, cihaz ıslanmış ya da elektrikli parçaları suyla temas etmişse, cihazdan **garip bir ses, duman ya da koku** geliyorsa. Hasarlı kabloyu iki kılavuz da yalnız yetkili servise ya da yetkin kişiye değiştirtiyor.

**6. Su dolu mu?** Elektriği geri vermeden önce termosifonun suyla dolu olduğundan emin ol. Vestel ve Arçelik kılavuzları aynı cümleyi kuruyor: termosifonu **tamamen su dolu olduğundan emin olmadan çalıştırma**. Kontrolü de veriyorlar: sıcak su musluğunu açtığında su geliyorsa cihaz doludur. Vestel'in göstergeli modelinde susuz çalıştırmada ekranda **E3** çıkıyor; ayrıntısı [termosifon ışığı yanmıyor](/blog/termosifon-isigi-yanmiyor/) yazısında.

**7. Yine atıyorsa servis.** Bu kontrollerden sonra sigorta yeniden atıyorsa elektriği kesik bırak ve yetkili servisi çağır. Vestel'e göre cihazın içinde **kullanıcının müdahale edebileceği parça yok**; iç elektrik bağlantılarına dokunmak elektrik çarpması tehlikesi taşıyor. Kılavuz, ürünle verilen V-otomat şalterin de mutlaka **yetkili birine bağlatılmasını** istiyor.

## Sigortası kaç amper olmalı?

Arama kutusunda en çok sorulanlardan biri bu. İncelediğimiz iki kılavuzdan yalnız **Vestel** bir değer veriyor: "Cihazda **C tipi 16A** sigorta kullanılmaktadır." **Arçelik** ise amper yazmıyor; cihazın elektrik beslemesine mutlaka **çift kutuplu uygun bir sigorta** bağlanmasını ve cihazın **topraklanmasını** istiyor. Yani değer modele göre değişir. Sigorta seçimi ve bağlantısı yetkili kişinin işidir; kendi modelin için kılavuzuna ve cihaz etiketine bak.

## Topraklama neden geçiyor?

Vestel: termosifon **mutlaka topraklanmalı**. Fişsiz kullanılıyorsa sigorta üzerinden **topraklı enerji hattına**, fişle kullanılıyorsa **topraklı prize** bağlanmalı. Arçelik de "Bu cihaz topraklanmalıdır" diyor. Evindeki hattın topraklı olup olmadığını bilmiyorsan bunu bir elektrik ustasına sor; kendin ölçmeye ya da açmaya çalışma.

## Ne zaman servis

- Termosifonun şalteri ya da evin sigortası **tekrar tekrar** atıyorsa
- Kabloda, prizde ya da gövdede hasar, ıslaklık, koku ya da duman varsa
- Termosifon uzatma kablosu ya da çoklu prizle bağlanmışsa (bağlantı değişikliği)
- Su dolu olduğu hâlde ısıtmıyorsa ([termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/))

⛔ **Kendin-çöz sınırı burada biter.** Şalteri kapalı tutmak, hattı ve kabloyu gözle kontrol etmek, su dolu mu bakmak sende; sigorta ve V-otomat bağlantısı, kablo değişimi, rezistans, termostat ve iç elektrik yetkili servisin.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
