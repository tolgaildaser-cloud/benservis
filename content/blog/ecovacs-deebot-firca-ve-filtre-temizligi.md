---
title: "Deebot fırça ve filtre temizliği nasıl yapılır"
description: "Ecovacs Deebot'ta ana fırça, yan fırça ve filtre temizliği: Ecovacs'ın bakım tablosu, saç dolanmasını temizleme aleti ile alma, haznenin boşaltılması."
slug: "ecovacs-deebot-firca-ve-filtre-temizligi"
date: "2026-10-24"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme R-yedekler; Dalga 4 M4 yedeği). origin/main'de ecovacs-* 6 yazı (şarj, istasyon, wifi, kırmızı ışık, haritalama, cam robotu); fırça/filtre bakımı yok.
#   Genel `robot-supurge-firca-donmuyor` markasız, ayrı sorgu.
# Arama kanıtı (#164, bu koşu, hl=tr gl=tr): "deebot fırça" → 1. (tohum), 2. "ecovacs deebot fırça", 3. "deebot yan fırça", 4. "deebot n8 fırça";
#   "deebot filtre" → 1. (tohum), 2. "deebot n8 filtre", 3. "deebot n10 filtre". GSC: ecovacs/deebot satırı yok.
# Belgeler (#88), bu koşuda curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf. Zincir: https://help.ecovacs.com/tr/support/owners-manuals → site-static.ecovacs.com
#  (E1) DEEBOT N8 Kullanım Kılavuzu TR  …/2022/04/12/023345_3561-DEEBOTN8-KULLANIMKILAVUZU.pdf  md5 c7d95850a37a2c9459336a4323994919 — PDF s.3, 4, 7, 12, 14, 15, 16, 19–20
#  (E3) DEEBOT N10 Kullanım Kılavuzu TR  …/2024/12/20/135734_8327$DEEBOTN10-KULLANIMKILAVUZU.pdf  md5 4d3038e4aa426f4b80cfbad1ee4769fe — bakım tablosu, sorun 8
#  (E4) DEEBOT T9 Kullanım Kılavuzu TR  …/2022/04/12/022249_2175-DEEBOTT9-KULLANIMKILAVUZU.pdf  md5 eac99b51616a1bf7a7719154bc191d92 — s.14 hazne notu, s.16 diğer parçalar
#  SSS (Ecovacs TR destek, N8): faq-detail?id=270, 272, 275, 277 (hepsi 200)
# s.14–15 bakım adımları kılavuzda yalnız şekil; şekilden okunan adımlar gövdede "(kılavuzun şekli)" ya da "(çıkarım)" diye işaretli.
# BİLEREK YAZILMAYANLAR: filtreyi suyla yıkama kuralı (metinde yok, yalnız şekil) · yedek parça adı/fiyatı (#46) · pil değişimi (yetkili) · robotu sökme.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Robotla gelen temizleme aleti", "Kuru bez", "Çöp kovası"]
steps:
  - "Bakıma başlamadan robotun güç anahtarını KAPALI konuma getir; istasyonu temizleyeceksen fişini de çek."
  - "Üst kapağı kaldır, toz haznesini çıkar ve çöpe boşalt; Ecovacs her temizlikten sonra boşaltmanı istiyor."
  - "Hazneden filtre ağını ve filtreleri çıkar, tozunu temizle, iyice kuruyunca yerine tak; filtreler olmadan robotu çalıştırma."
  - "Robotu ters çevir, ana fırça kapağını açıp ana fırçayı çıkar; dolanan saçı temizleme aletinin bıçak kısmıyla kes ve fırçanın iki ucundaki yataklara bak."
  - "Yan fırçaları çıkar, etraflarına dolanan saç ve tüyü temizleme aletiyle al."
  - "Fırçaları yerine tak; yan fırçaların yerine tam oturduğundan emin ol."
  - "Tekerleği, düşme önleyici sensörleri, tamponu ve şarj bağlantılarını temiz, kuru bir bezle sil."
  - "Robotu açıp temizliği yeniden başlat; ses ya da fırça sorunu sürerse Ecovacs müşteri hizmetlerine başvur."
faq:
  - q: "Deebot fırçası ve filtresi ne sıklıkla temizlenmeli?"
    a: "Ecovacs'ın N8 bakım tablosuna göre ana fırça haftada bir, yan fırça iki haftada bir, sünger filtre ve yüksek verimli filtre haftada bir temizleniyor. Değiştirme sıklığı yan fırçada 3–6 ay, ana fırçada 6–12 ay, filtrelerde 3–6 ay."
  - q: "Yan fırçalar yavaş dönüyor ya da hiç dönmüyor, neden?"
    a: "Ecovacs'ın destek sayfası üç neden yazıyor: pil azalınca robot şarja dönerken yan fırçalar yavaş döner; fırçaya bir şey dolanmış olabilir; fırça doğru takılmamış olabilir. Dolananı temizle, fırçayı çıkarıp doğru tak."
  - q: "Robot bir süre temizledikten sonra gürültü yapıp duruyor, ne yapmalıyım?"
    a: "Ecovacs'ın sırası: toz haznesini çıkarıp boşalt, ana fırçayı iki ucundaki yataklara dolanan saç dahil temizle, yan fırçaları kontrol edip temizle. Sorun sürerse müşteri hizmetleri."
  - q: "Deebot yanlışlıkla sıvı çektiyse ne olacak?"
    a: "Ecovacs robotu hemen kapatmanı, toz haznesini, filtreleri ve ana fırçayı çıkarıp yeniden takmadan önce tamamen kurumalarını beklemeni istiyor. Bundan sonra normal çalışmıyorsa müşteri hizmetleri."
  - q: "Temizleme aleti nerede?"
    a: "Destek sayfasına göre robotun kapağını kaldırınca temizleme aleti ön tarafta duruyor. Kılavuz aletin keskin kenarları olduğunu, dikkatli kullanılmasını yazıyor."
images:
  coverAlt: "Ters çevrilmiş bir robot süpürgenin alt yüzünde ana fırça ve yan fırçalar"
  steps:
    - "Çizim: solda dikey süpürge, sağda prizden çekilen fiş"
    - "Çizim: solda dikey süpürge, sağda su ya da toz haznesi"
    - "Çizim: solda dikey süpürge, sağda su ya da toz haznesi"
    - "Çizim: solda dikey süpürge, sağda temizlik fırçası"
    - "Çizim: solda dikey süpürge, sağda temizlik fırçası"
    - "Çizim: solda dikey süpürge, sağda temizlik fırçası"
    - "Çizim: solda dikey süpürge, sağda şarj edilen batarya"
    - "Çizim: solda dikey süpürge, sağda telefon ve kullanım kılavuzu"
---

Ecovacs Deebot robot süpürgen eskisi kadar iyi toplamıyor, yan fırçaları ağır dönüyor ya da temizlik sırasında ses yapıp duruyor. Çoğu zaman sebep, fırçaya dolanan saç ve dolmuş bir filtre. Ecovacs'ın Türkçe kullanım kılavuzu bunun için bir **düzenli bakım tablosu** veriyor. Bu yazıda Ecovacs Türkiye destek sitesindeki DEEBOT N8 kılavuzunu, aynı yerdeki N10 ve T9 kılavuzlarını ve N8 destek sayfasının sık sorulan sorularını kullandık. Kılavuzun bakım adımları büyük ölçüde şekille anlatılıyor; şekilden okuduğumuz yerleri ayrıca belirttik. Parça adları modele göre değişebilir: N8'de "sünger filtre" ve "yüksek verimli filtre", N10'da "antibakteriyel filtre" deniyor.

> ⚡ **Kısa özet:** Önce robotu kapat. Hazneyi boşalt, filtreleri temizle, filtresiz çalıştırma. Ana fırçayı çıkar, dolanan saçı temizleme aletinin bıçağıyla kes, fırça uçlarındaki yataklara bak. Yan fırçaları çıkar, temizle, yerine tam oturt. Sensörleri ve temas noktalarını kuru bezle sil.

## Ecovacs'ın bakım tablosu (N8)

| Parça | Bakım | Değiştirme |
|---|---|---|
| **Ana fırça** | Haftada bir | 6–12 ayda bir |
| **Yan fırça** | İki haftada bir | 3–6 ayda bir |
| **Sünger filtre / yüksek verimli filtre** | Haftada bir | 3–6 ayda bir |
| **Tekerlek, düşme önleyici sensörler, tampon, şarj bağlantıları** | Haftada bir | — |

N10 kılavuzunda tablo aynı aralıkları veriyor; filtrenin adı orada antibakteriyel filtre.

## Adım adım: Deebot fırça ve filtre temizliği

**1. Robotu kapat.** Kılavuzun güvenlik talimatı açık: robotu temizlemeden ya da bakımını yapmadan önce **güç anahtarını KAPALI** konuma getir. Şarj istasyonunu da temizleyeceksen önce fişini prizden çek.

**2. Toz haznesini boşalt.** Üst kapağı kaldırıp toz haznesini çıkar ve çöpe boşalt (kılavuzun şekli). T9 kılavuzu haznenin her temizlik bittikten sonra boşaltılmasını istiyor. Ecovacs ayrıca toz girişi tıkalıysa robotun kullanılmamasını yazıyor.

**3. Filtreleri temizle.** Hazneden filtre ağını ve filtreleri çıkar, tozunu temizle. N8 kılavuzunun şekillerinde filtre parçalarının ayrılıp temizlendiği, ince filtrenin musluk altında durulandığı ve parçaların kurutulduğu gösteriliyor; metinde ayrı bir yıkama talimatı yok. Hangi parçanın suya girebileceğinden emin değilsen kendi modelinin kılavuzundaki şekle bak (çıkarım). Suya giren parça **tamamen kurumadan** yerine takılmamalı: Ecovacs'ın sıvı çeken robot için verdiği talimat da hazne, filtre ve fırçanın tamamen kurumasını beklemek. Kılavuzun bir kuralı daha var: toz haznesi ya da filtreler yerinde değilken robotu **çalıştırma**.

**4. Ana fırçayı çıkar, saçı kes.** Robotu yumuşak bir yüzeye ters çevir. Ecovacs'ın destek sayfasındaki yol: ana fırçanın kapağını iki elinle aç, fırçayı çıkar ve etrafına sarılmış saçları **temizleme aletinin bıçak kısmıyla** temizle. Robot gürültü yapıyorsa Ecovacs fırçanın **iki ucundaki yataklara** dolanan saça da bakmanı istiyor. Temizleme aleti, robotun kapağı kaldırılınca ön tarafta duruyor; kılavuz aletin keskin kenarları olduğunu, dikkatli kullanılmasını yazıyor.

**5. Yan fırçaları temizle.** Yan fırçaları dikkatlice çıkar ve etraflarına dolanan saç ile tüyü temizleme aletiyle al. Destek sayfasına göre yan fırçanın yavaş dönmesinin üç nedeni var: pil azaldığında robot şarja dönerken fırçalar zaten yavaş dönüyor; fırçaya bir şey dolanmış olabilir; fırça doğru takılmamış olabilir.

**6. Fırçaları yerine tak.** Ana fırçayı yuvasına oturtup kapağı kapat. Yan fırçaları takarken **yerine tam oturduğundan** emin ol. Kılavuzun sorun giderme tablosu, kullanım sırasında yerinden çıkan yan fırçanın nedeni olarak doğru takılmamış fırçayı gösteriyor.

**7. Sensörleri ve temas noktalarını sil.** Bakım tablosu tekerleği, düşme önleyici sensörleri, tamponu, robotun şarj bağlantılarını ve istasyonun bağlantılarını haftada bir temizlemeni istiyor. T9 kılavuzu bu parçaları **temiz, kuru bir bezle** silmeyi ve temizleme spreyi ya da deterjan kullanmamayı yazıyor.

**8. Yeniden başlat.** Robotu aç ve temizliği başlat. Kılavuzun sorun giderme tablosunda "temizlik sırasında çok fazla ses" satırı var: neden fırçalara saç, kablo ya da cisim dolanması veya kirle tıkanma; çözüm robotu temizleyip yeniden başlatmak. Sorun sürerse Ecovacs müşteri hizmetleri.

## Robot yanlışlıkla sıvı çektiyse

Ecovacs'ın destek sayfasındaki talimat kısa ve net: robotu hemen kapat. Toz haznesini, filtreleri ve ana fırçayı çıkar ve yeniden takmadan önce hepsinin tamamen kurumasını bekle. Bu adımlardan sonra robot normal çalışmıyorsa müşteri hizmetlerine başvur. Kılavuz zaten robotun ıslak yüzeylerde ya da su birikintisi olan zeminde kullanılmamasını istiyor.

## Ne zaman servis

- Fırçalar temiz ve doğru takılı olduğu hâlde dönmüyorsa
- Gürültü temizlikten sonra da sürüyorsa
- Robot sıvı çektikten ve parçalar kuruduktan sonra normal çalışmıyorsa

Markadan bağımsız kontrol listesi için [robot süpürge fırça dönmüyor](/blog/robot-supurge-firca-donmuyor/) yazısına bakabilirsin. AUTO düğmesi kırmızı yanıp sönüyorsa: [Ecovacs kırmızı ışık yanıp sönüyor](/blog/ecovacs-kirmizi-isik-yanip-sonuyor/).

⛔ **Kendin-çöz sınırı burada biter.** Hazne, filtre, fırçalar ve bezle silme sende; motor, pil ve robotun içi yetkili servisin. Kılavuza göre pil yalnız yetkili kişilerce değiştirilebiliyor.

## Servisi aramadan önce kısa özet

1. Model ne (N8, N10, T9 gibi; robotun altındaki etikette)?
2. Fırçaları ve filtreyi en son ne zaman temizledin?
3. Fırça yataklarında saç var mı?
4. Ses ya da dönmeme hangi fırçada?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
