---
title: "Haier kurutma makinesi kurutmuyor"
description: "Haier kurutma makinesi çok uzun kurutuyor ya da çamaşırı nemli bırakıyorsa Haier kılavuzundaki sebepler: program, tıkalı filtreler, aşırı yük, ıslak çamaşır."
slug: "haier-kurutma-makinesi-kurutmuyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/kurutma-makineleri/31103229/hd100-d357u1e-tr/  md5 c7a806147553fa3cb53d51eb882992f3
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2026/8/17881769/MAN-000197737_000  36 s.  md5 a70c4272fa30932e93a4669fab2a78e4
#   pdftotext -layout, sayfa = PDF sayfası. Web araması yok.
# Ana satır (s.28): "Kurutma süresi çok uzun ve sonuçlar tatmin edici değil." · "Program ayarı doğru değil. → Programın doğru ayarlandığından emin olun." · "Filtre tıkanmış. → Filtre süzgecini temizleyin." · "Evaporatör tıkalı. → Evaporatörü temizleyin."
#   · "Kurutma makinesi aşırı yüklenmiş. → Çamaşır miktarını azaltın." · "Çamaşırlar çok ıslak. → Kurutmadan önce çamaşırları tamamen sıkın." · "Havalandırma kanalı tıkalı. → Havalandırma kanalını kontrol edin ve temizleyin."
#   s.28 "Ekrandaki kalan süre duruyor veya atlıyor." → çamaşır kumaşı, yükleme ağırlığı, nem derecesi, ortam sıcaklığı → "Otomatik ayarlama normal çalışmaktadır."
# Bakım: s.25 10.1 Tiftik filtresi (1. tamburdan çıkarın 2. açın 3. tiftik kalıntılarını temizleyin 4. geri takın) · 10.2 Kondenser filtresi (1. Kapağı açın 2. Tiftik filtresini ön kanaldan dışarı çekin 3. Kondenser filtresini hava kanalından dışarı çekin
#   4. Sünger filtreyi kondenser filtresinden ayırın ve kalıntılardan temizleyin 5. Süngeri kondenser filtresine geri takın ve kanala tekrar yerleştirin.) · s.26 Bildirim "tiftikler çöp kutusuna atılmalı ve giderlerde yıkanmamalıdır" · "Tıkalı bir filtre daha uzun kurutma programlarına yol açabilir"
#   · s.11 5.7 "kurutma süresi 30 dakikadan fazla olduğunda, programdan sonra SON aşamasına girer ve gösterge (Şekil 5-7) ışığı yanıp söner." · s.18 "Kurutma makinesini aşırı yüklemekten kaçının." · "çamaşırları sallayarak gevşetin" · "Kurutma makinesini filtreleri temizlenmiş olarak kullandığınızdan emin olun."
#   · s.19 8.3 Yumuşak bakım bezleri filtre kaplaması · 8.4 "Yükün 1,0 kg'dan az olması durumunda "Zamanlayıcı" programı seçilmelidir" · s.21 9.2 "Sadece eğirilmiş çamaşırları kurutun." · "Yatak çarşafı, masa örtüsü vb. gibi büyük kumaş parçalarını açın."
# BİLEREK YAZILMAYANLAR: evaporatör temizliği numaralı adım olarak (kılavuzda kullanıcı yordamı YOK; yalnız tablo satırı) · "havalandırma kanalı" temizliği adım olarak (yeri/yordamı kılavuzda tarif edilmiyor) · ısı pompası/kompresör teşhisi · fiyat.
# Alıntı denetim tablosu: haier-kurutma-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Seçili programın çamaşırın kumaşına ve istediğin kuruluk seviyesine uygun olduğunu kontrol et."
  - "Tiftik filtresini tamburdan çıkar, aç, tiftikleri temizle ve geri tak."
  - "Kondenser filtresi kapağını aç, filtreyi kanaldan çek, sünger filtreyi ayırıp temizle ve yerine yerleştir."
  - "Çamaşır miktarını azalt; az yükte (1 kg altı) Zamanlayıcı programını seç."
  - "Çamaşırları kurutmadan önce çamaşır makinesinde tamamen sık ve makineye koymadan önce sallayarak gevşet."
faq:
  - q: "Haier kurutma makinem neden bu kadar uzun kurutuyor?"
    a: "Haier HD100-D357U1E kılavuzunun 'Kurutma süresi çok uzun ve sonuçlar tatmin edici değil' satırı altı sebep sayıyor: program ayarı doğru değil, filtre tıkanmış, evaporatör tıkalı, makine aşırı yüklenmiş, çamaşırlar çok ıslak ve havalandırma kanalı tıkalı. Kılavuza göre tıkalı bir filtre daha uzun kurutma programlarına yol açabilir ve enerji tüketimini artırabilir."
  - q: "Filtreleri ne sıklıkla temizlemeliyim?"
    a: "Haier hem tiftik filtresinin hem kondenser filtresinin her kurutma programından sonra temizlenmesini istiyor. Temizlerken tiftikleri gidere değil çöp kutusuna atman gerekiyor; kılavuz bunu mikro plastiklerin suya yayılmaması için istiyor."
  - q: "Paneldeki filtre ışığı neden yanıp sönüyor?"
    a: "Kılavuza göre temiz filtre göstergesi normalde yanmaz; kurutma süresi 30 dakikadan fazla olduğunda program sonunda SON aşamasında yanıp söner. Bu, tiftik filtresini ve kondenser filtresini temizleme hatırlatmasıdır."
  - q: "Kalan süre ekranda zıplıyor, bu arıza mı?"
    a: "Hayır. Haier'e göre kalan süre çamaşırın kumaşına, yükleme ağırlığına, çamaşırların nem derecesine ve ortam sıcaklığına göre sürekli ayarlanır; kılavuz bunu 'Otomatik ayarlama normal çalışmaktadır' diye açıklıyor."
  - q: "Evaporatörü kendim temizleyebilir miyim?"
    a: "Haier'in tablosunda 'Evaporatör tıkalı' satırı var ama kılavuzun bakım bölümünde kullanıcı için bir evaporatör temizlik yordamı yok. Filtreler temiz, yük ve program doğruyken kurutma hâlâ uzunsa yetkili servise başvur."
images:
  coverAlt: "Kurutma makinesinin açık kapağının iç kenarından yarıya kadar çekilmiş, üzeri gri tiftik kaplı filtre"
---

Program bitti ama çamaşırlar hâlâ nemli, ya da kurutma saatlerce sürüyor. Haier'in HD100-D357U1E ısı pompalı kurutma makinesi kılavuzunda bu durumun satırı **"Kurutma süresi çok uzun ve sonuçlar tatmin edici değil."** Haier bu satırda altı sebep sayıyor: **program ayarı doğru değil**, **filtre tıkanmış**, **evaporatör tıkalı**, **kurutma makinesi aşırı yüklenmiş**, **çamaşırlar çok ıslak** ve **havalandırma kanalı tıkalı.** Bunların beşini evde kontrol edebilirsin; en sık sebep de filtreler, çünkü Haier'e göre **tıkalı bir filtre daha uzun kurutma programlarına yol açabilir.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Programı kontrol et, tiftik filtresini ve kondenser filtresinin süngerini temizle, yükü azalt, çamaşırı makineye iyi sıkılmış ve gevşetilmiş koy. Evaporatör için kullanıcı yordamı yok; o noktada servis.

## Adım adım: evde denenecekler

**1. Programı kontrol et.** Haier'in ilk sebebi: **program ayarı doğru değil** → **programın doğru ayarlandığından emin olun.** Kılavuz giysileri **kumaşlarına göre ayırmanı** ve **çamaşır etiketindeki talimatları** uygulamanı istiyor; triko gibi giysiler için **ütülemeye uygun kuruluk seviyesinin** seçilmesini öneriyor.

**2. Tiftik filtresini temizle.** Tablodaki ikinci sebep: **filtre tıkanmış** → **filtre süzgecini temizleyin.** Haier'in sırası: **tiftik filtresini tamburdan çıkarın**, **açın**, **tiftik kalıntılarını temizleyin** ve **geri takın.** Haier bunu **her kurutma programından sonra** istiyor. Tiftikleri **çöp kutusuna** at; kılavuz mikro plastiklerin yayılmaması için **giderlerde yıkanmamasını** istiyor.

**3. Kondenser filtresini temizle.** Haier'in ikinci filtresi de **her kurutma programından sonra** temizleniyor: **kapağı açın**, **tiftik filtresini ön kanaldan dışarı çekin**, **kondenser filtresini hava kanalından dışarı çekin**, **sünger filtreyi kondenser filtresinden ayırın ve kalıntılardan temizleyin**, sonra **süngeri kondenser filtresine geri takın ve kanala tekrar yerleştirin.** Paneldeki **temiz filtre göstergesi**, kurutma **30 dakikadan** uzun sürdüğünde program sonunda yanıp sönerek bunu hatırlatıyor. Kılavuz, **yumuşak bakım bezlerinin** tiftik filtrelerinde kaplama yapıp **filtrelerin tıkanmasına** yol açabileceğini de yazıyor.

**4. Yükü azalt.** Haier'e göre **kurutma makinesi aşırı yüklenmiş** olabilir → **çamaşır miktarını azaltın.** Ters durum da var: kılavuz **yükün 1,0 kg'dan az** olması durumunda **"Zamanlayıcı" programının** seçilmesini istiyor, çünkü **az yük nedeniyle bazen çamaşırların kuruma seviyesi algılanamaz.**

**5. Çamaşırı iyi sıkılmış koy.** Tablodaki sebep: **çamaşırlar çok ıslak** → **kurutmadan önce çamaşırları tamamen sıkın.** Haier **sadece eğirilmiş çamaşırları kurutmanı** ve makineye koymadan önce çamaşırları **sallayarak gevşetmeni** öneriyor. **Yatak çarşafı, masa örtüsü** gibi büyük parçaları da açarak koy.

## Kalan süre zıplıyorsa

Haier'in tablosunda **"Ekrandaki kalan süre duruyor veya atlıyor"** diye ayrı bir satır var ve bu bir arıza değil: kalan süre **çamaşır kumaşı**, **yükleme ağırlığı**, **çamaşırların nem derecesi** ve **ortam sıcaklığına** göre sürekli ayarlanıyor; kılavuzun cevabı **"Otomatik ayarlama normal çalışmaktadır."**

Makine hiç başlamıyorsa [Haier kurutma makinesi çalışmıyor](/blog/haier-kurutma-makinesi-calismiyor/) yazısına bak. Markadan bağımsız anlatım için [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/) ve [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazıları var.

## Ne zaman servis

Haier'in tablosundaki iki satırın kullanıcı için tarif edilmiş bir yordamı yok: **"Evaporatör tıkalı"** (çözüm **evaporatörü temizleyin**) ve **"Havalandırma kanalı tıkalı"** (çözüm **havalandırma kanalını kontrol edin ve temizleyin**). Kılavuzun bakım bölümü yalnız tiftik filtresi, kondenser filtresi, su tankı, dış yüzey ve tamburu anlatıyor; bu iki iş için yetkili servise başvur. Haier, **uygun olmayan onarımlar önemli hasarlara neden olabileceği** için elektrikli ekipmanın servisinin yalnızca kalifiye uzmanlarca yapılmasını istiyor.

⛔ **Kendin-çöz sınırı burada biter.** İki filtre de temiz, program doğru, yük uygun ve çamaşırlar iyi sıkılmış olduğu hâlde kurutma hâlâ çok uzunsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
