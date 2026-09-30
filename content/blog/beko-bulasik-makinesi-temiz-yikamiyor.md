---
title: "Beko bulaşık makinesi temiz yıkamıyor"
description: "Beko bulaşık makinesi temiz yıkamıyorsa Beko'nun kılavuzundaki sıra: filtreler, pervaneler, yerleştirme, deterjan, parlatıcı ve program seçimi."
slug: "beko-bulasik-makinesi-temiz-yikamiyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan yeniden indirildi, HTTP 200;
# md5'ler 28 Eyl yerel kopyalarıyla birebir aynı. #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (A) BM 5005  http://download.beko.com/Download.UsageManualsBeko/bm-5005-5-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201502251450524_User20Manual20-20Filetur-A.pdf  36 s.  md5 91a260cf53261252526fea072f2d7eb4  (sayfa atıfları bu belgeye göre)
#  (B) BM 4004  http://download.beko.com/Download.UsageManualsBeko/bm-4004-4-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201503311643326_User20Manual20-20Filetur-A.pdf  36 s.  md5 07fbbc53ef748e28fb00173ca775105b  (sorun giderme tablosu A ile birebir, aynı sayfalarda)
#  (C) 3938 IL  http://download.beko.com/Download.UsageManualsBeko/34758_1728766176_AA_BEKO_3938-IL.pdf  34 s.  md5 86ef266bafb482f3a888acf3e8d7b975  (filtre/pervane bakımı s.28-30; bu kılavuzun sorun giderme tablosunda yalnız "Makine çalışmıyor" var)
# "Bulaşıklar temiz yıkanmıyor" (A s.29, B s.29 — Sorun giderme): düzensiz yerleştirme → kılavuzdaki gibi yerleştir · uygun program seçilmemiş → "Daha yüksek sıcaklıkta ve daha uzun süre yıkama yapan bir program seçin."
#   · fazla kirli → "kaba kirlerini peçete yardımıyla alarak" · "Pervaneler sıkışmıştır. >>> Programı başlatmadan önce alt ve üst pervaneyi elinizle çevirerek serbestçe döndüklerinden emin olun."
#   · "Pervane delikleri tıkanmıştır. >>> Alt veya üst pervane delikleri limon çekirdeği gibi yemek kalıntıları ile tıkanmış olabilir." · filtreler tıkanmış → temizle · filtreler doğru takılmamış
#   · "Sepetler aşırı yüklenmiştir. >>> Sepetleri kapasitelerinin üzerinde yüklemeyin." · deterjan nemli yerde saklanmış · yeterli deterjan koyulmamış · "Parlatıcı yetersizdir. >>> ... Makinede yeterince parlatıcı varsa parlatıcı ayarını yükseltin."
#   · "Deterjan bölmesinin kapağı kapatılmamıştır. >>> Deterjan doldurma işleminden sonra, deterjan bölmesinin kapağını mutlaka kapatın."
# Diğer: A s.26 "Makineyi temizlemeden önce fişini çekin ve musluğu kapayın." + filtre sökme/temizleme 1-6 (A s.26-27, C s.28-29) · A s.27-28 pervane temizliği (alt: yukarı çekerek; üst: somunu sola çevirerek, takarken tam sık)
#   · A s.13 deterjan bölmesi 15/25 cm³ çizgileri; "ön yıkamasız ve kısa programlarda mutlaka toz deterjan kullanın"; en iyi performans deterjan+parlatıcı+tuz ayrı ayrı · A s.14 parlatıcı ayarı 1-6, fabrika 4
#   · A s.21, B s.21 program tablosu: Süper 70°C "Ağır kirli tencere ve tavalar için uygundur." · C s.31 "Bu bölümdeki talimatları uygulamanıza rağmen sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun."
#   · A s.15 yerleştirme (artıkları sıyır; kase/bardak/tencere ağzı aşağı) · A s.30 çay/kahve/ruj lekesi satırı · A s.32 deterjan kutusunda kalıntı satırı · A s.4 "Kurulum ve tamir işlemlerini her zaman Yetkili Servise yaptırın."
# BİLEREK YAZILMAYANLAR: pompa/ısıtıcı/sensör teşhisi (belgede yok) · pervane deliklerini kürdan/iğne gibi aletle açmak (belgede yok; alet kuralı) · tuzu kaşıkla karıştırma (alet; bu belirti satırında da yok)
#   · su sertlik ayar yöntemi (BM 5005 ayrı "Su sertlik ayar talimatı"na yönlendiriyor, o belge elde yok).
# Alıntı denetim tablosu: beko-bulasik-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Kâğıt peçete", "Makinenin kullanma kılavuzu"]
steps:
  - "Makineyi kapat, fişini çek ve musluğu kapat."
  - "Taban filtrelerini çıkarıp üçünü de musluk altında fırçayla temizle."
  - "Filtreleri doğru yerine tak; kaba filtreyi tık sesi duyana kadar saat yönünde çevir."
  - "Alt ve üst pervaneyi elinle çevirip serbest döndüğünü kontrol et; delikleri tıkalıysa pervaneyi çıkarıp temizle."
  - "Bulaşıkların kaba kirlerini peçeteyle al ve sepetleri kapasitelerini aşmadan kılavuzdaki gibi yerleştir."
  - "Kirliliğe uygun miktarda deterjan koy ve deterjan bölmesinin kapağını kapat."
  - "Parlatıcı göstergesine bak; gerekirse parlatıcı ekle, yeterliyse parlatıcı ayarını yükselt."
  - "Daha yüksek sıcaklıkta ve daha uzun süre yıkayan bir program seç."
faq:
  - q: "Beko bulaşık makinesi bulaşıkları temiz yıkamıyor, ilk neye bakmalıyım?"
    a: "Beko'nun BM 4004 ve BM 5005 kullanma kılavuzlarındaki sorun giderme tablosu 'Bulaşıklar temiz yıkanmıyor' başlığında şunları sayıyor: düzensiz yerleştirme, uygun olmayan program, fazla kirli bulaşık, dönmeyen ya da delikleri tıkanmış pervaneler, tıkanmış ya da yanlış takılmış filtreler, aşırı yüklenmiş sepetler, nemli yerde saklanmış ya da yetersiz deterjan, yetersiz parlatıcı ve kapatılmamış deterjan bölmesi kapağı."
  - q: "Filtreleri ve pervaneleri ne sıklıkla temizlemeliyim?"
    a: "Beko'nun bakım bölümüne göre makinenin verimli çalışması için filtreler ve pervaneler haftada en az bir kez temizlenmeli. Beko ayrıca makinenin filtresiz kullanılmaması gerektiğini ve filtrelerin doğru takılmamasının yıkama etkinliğini azaltacağını yazıyor."
  - q: "Tablet deterjan her programda işe yarar mı?"
    a: "Beko'nun kılavuzuna göre tablet deterjanlar yalnız belirli kullanım şartlarında yeterli sonuç verir; tabletlerin çözünürlüğü sıcaklık ve süreye bağlı olduğu için ön yıkamasız ve kısa programlarda mutlaka toz deterjan kullanılmalı. Beko'ya göre en iyi yıkama performansı deterjan, parlatıcı ve su yumuşatma tuzunun ayrı ayrı kullanılmasıyla elde edilir."
  - q: "Bardaklarda çay, kahve ya da ruj lekesi kalıyor, ne yapmalıyım?"
    a: "Beko'nun tablosu bu durum için daha yüksek sıcaklıkta ve daha uzun süre yıkayan bir program seçmeyi ve toz deterjanı nemli yerde saklamamayı öneriyor. Beko'ya göre yüzeyi bozulmuş mutfak eşyalarına işlemiş çay, kahve ve boyalı lekeler bulaşık makinesinde çıkmıyor; bu tür eşyaların bulaşık makinesinde yıkanması tavsiye edilmiyor."
images:
  coverAlt: "Kapağı açık bulaşık makinesinin alt sepetinde üzerinde yemek kalıntısı kalmış tabaklar; tezgâhta çıkarılmış filtre ve küçük bir fırça"
---

Program bitti, kapağı açtın ve tabaklarda hâlâ yemek kalıntısı var. Beko'nun BM 4004 ve BM 5005 kullanma kılavuzlarındaki sorun giderme tablosunda bu durumun kendi başlığı var: **"Bulaşıklar temiz yıkanmıyor."** Beko bu başlık altında on bir olası sebep sayıyor ve hepsinin çözümü kullanıcı tarafında: **filtreler, pervaneler, yerleştirme, deterjan, parlatıcı ve program seçimi.** Bu yazıda Beko'nun listesini sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek, musluğu kapat → filtreleri çıkar, fırçayla temizle, doğru tak → pervanelerin serbest döndüğüne ve deliklerinin açık olduğuna bak → bulaşıkları kaba kirinden arındırıp sepeti aşırı yüklemeden yerleştir → deterjanı doğru miktarda koy, kapağı kapat → parlatıcıyı kontrol et → daha sıcak ve daha uzun bir program seç. Bunlara rağmen sonuç değişmiyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Güvenliği al.** Beko'nun bakım kuralı: makineyi temizlemeden önce **fişini çek ve musluğu kapa.** Beko'nun güvenlik bölümüne göre bakım ve temizlik sırasında makine fişe takılı olmamalı.

**2. Filtreleri temizle.** Beko'nun tablosundaki sebeplerden biri: **filtreler tıkanmıştır.** Makinenin tabanındaki mikro filtre ve kaba filtre grubunu **saat yönünün tersine çevirip çekerek** çıkar, ardından metal/plastik filtreyi çekerek al. Kaba filtreyi, üzerindeki iki dili içeri doğru bastırarak gruptan ayır. Üç filtreyi de **musluk altında bir fırça yardımıyla** temizle. Temizlerken aşındırıcı malzeme kullanma.

**3. Filtreleri doğru tak.** Tablodaki bir diğer sebep: **filtreler doğru takılmamıştır.** Önce metal/plastik filtreyi yerine tak. Sonra kaba filtreyi mikro filtrenin içine yerleştir, doğru yerleştiğinden emin ol ve **tık sesi duyana kadar saat yönünde** çevir. Beko'nun iki notu var: makine filtresiz kullanılmamalı; filtrelerin doğru takılmaması yıkama etkinliğini azaltır.

**4. Pervanelere bak.** Tabloda pervaneler için iki satır var. Birincisi: **pervaneler sıkışmıştır.** Beko'nun çözümü, programı başlatmadan önce alt ve üst pervaneyi **elinle çevirerek serbestçe döndüklerinden** emin olmak. İkincisi: **pervane delikleri limon çekirdeği gibi yemek kalıntılarıyla tıkanmış olabilir.** Deliklerde tıkanıklık varsa pervaneyi çıkarıp temizle: alt pervane **yukarı doğru çekilerek** çıkar; üst pervane **somunu sola doğru çevrilerek** çıkar. Üst pervaneyi yerine takarken somunu tam olarak sıktığından emin ol.

**5. Doğru yerleştir.** Tablodaki üç sebep yerleştirmeyle ilgili: **bulaşıklar düzensiz yerleştirilmiştir**, **bulaşıklar fazla kirli** ve **sepetler aşırı yüklenmiştir.** Beko'ya göre bulaşıkların kaba kirlerini **peçete yardımıyla** alarak yerleştir; kemik ve meyve çekirdeği gibi artıkları sıyırıp al. Kase, bardak ve tencere gibi derin kapları **ağızları aşağı gelecek şekilde** koy. Çok kirli ve büyük parçalar alt sepete, küçük ve hafif parçalar üst sepete gider. Sepetleri **kapasitelerinin üzerinde yükleme.**

**6. Deterjanı doğru koy.** Tablodaki üç sebep deterjanla ilgili: **yeterli deterjan koyulmamıştır**, **deterjan uygun olmayan koşullarda saklanmıştır** ve **deterjan bölmesinin kapağı kapatılmamıştır.** Toz deterjan kullanıyorsan bölmedeki **15 cm³ veya 25 cm³** çizgilerine kadar, makinenin doluluğuna ve kirliliğe göre deterjan koy; deterjan paketini nemli yerde saklama. Doldurduktan sonra bölmenin kapağını **mutlaka kapat;** kapak kapandığında tık sesi duyulur. Beko'ya göre tablet deterjanın çözünürlüğü sıcaklığa ve süreye bağlı olduğundan **ön yıkamasız ve kısa programlarda toz deterjan** kullanılmalı.

**7. Parlatıcıyı kontrol et.** Tablodaki sebep: **parlatıcı yetersizdir.** Paneldeki parlatıcı eksikliği uyarı göstergesine bak, gerekirse parlatıcı ekle. Makinede yeterince parlatıcı varsa Beko'nun önerisi **parlatıcı ayarını yükseltmek.** BM 4004 ve BM 5005'te ayarlayıcı elle çevrilerek **1 ile 6** arasında ayarlanıyor; fabrika çıkışında **4** konumunda.

**8. Programı değiştir.** Tablodaki sebep: **uygun program seçilmemiştir.** Beko'nun çözümü **daha yüksek sıcaklıkta ve daha uzun süre yıkama yapan** bir program seçmek. Kılavuzundaki "Program bilgileri ve ortalama tüketim değerleri tablosu" her programın sıcaklığını ve hangi kirlilik düzeyi için uygun olduğunu gösteriyor; ağır kirli tencere ve tavalar için Beko'nun bu kılavuzlarda önerdiği program 70 °C'lik **Süper.**

## Çay, kahve ya da ruj lekesi kalıyorsa

Beko'nun tablosunda bunun için ayrı bir satır var: **"Bulaşıklarda çay, kahve veya ruj lekesi kalıyor."** Çözüm yine daha yüksek sıcaklıkta ve daha uzun süre yıkayan bir program seçmek ve toz deterjanı nemli yerde saklamamak. Beko'nun bir notu daha var: çay, kahve ve diğer boyalı lekeler **yüzeyi bozulmuş** mutfak eşyalarına işlediğinde bulaşık makinesinde çıkmıyor; Beko bu tür eşyaların bulaşık makinesinde yıkanmasını tavsiye etmiyor.

## Deterjan bölmede kalıyorsa

Tabloda **"Deterjan kutusunda deterjan kalıntısı var"** satırı da var. Beko'nun saydığı sebepler: deterjanın yıkamadan uzun süre önce konması, bulaşıkların deterjan bölmesi kapağının açılmasını engellemesi, deterjanın nemli yerde saklanması ve pervane deliklerinin tıkanması. Deterjanı yıkamayı başlatmadan **hemen önce** koy ve bulaşıkları bölme kapağının açılmasını ve bölmeye pervanelerden su gitmesini engellemeyecek şekilde yerleştir. Konunun genel anlatımı [bulaşık makinesi tableti eritmiyor](/blog/bulasik-makinesi-tableti-eritmiyor/) yazısında.

Taban filtresinin temizliği için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısına, markadan bağımsız anlatım için [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) yazısına bakabilirsin. Kurutma sorunu da yaşıyorsan [Beko bulaşık makinesi kurutmuyor](/blog/beko-bulasik-makinesi-kurutmuyor/) yazısı Beko'nun kurutma satırını anlatıyor.

## Ne zaman servis

Filtreler ve pervaneler temiz, yerleştirme doğru, deterjan ve parlatıcı yeterli, uzun ve sıcak program seçili ve bulaşıklar hâlâ temiz çıkmıyorsa Beko'nun tablosu kullanıcıya başka sebep göstermiyor. Beko'nun güvenlik bölümündeki kural geçerli: **kurulum ve tamir işlemlerini her zaman yetkili servise yaptır.** Beko'nun 3938 IL kılavuzundaki genel cümle de aynı: sorun giderme talimatlarına rağmen sorun sürerse **ürünü satın aldığın bayiye ya da yetkili servise başvur.**

⛔ **Kendin-çöz sınırı burada biter.** Filtre, pervane, yerleştirme, deterjan ve program kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Kalıntı alt sepette mi, üst sepette mi, ikisinde de mi?
2. Filtreler ve pervane delikleri en son ne zaman temizlendi?
3. Pervaneler elle çevrilince serbest dönüyor mu?
4. Toz mu, tablet mi kullanıyorsun, hangi programı seçiyorsun?
5. Parlatıcı göstergesi yanıyor mu?

Bu beşine cevabın varsa servise "temiz yıkamıyor" yerine somut bir tablo anlatabilirsin. Ekranda bir kod yanıp sönüyorsa [Beko bulaşık makinesi hata kodları](/blog/beko-bulasik-makinesi-hata-kodlari/) yazısına bak.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
