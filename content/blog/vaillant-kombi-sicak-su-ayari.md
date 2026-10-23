---
title: "Vaillant kombi sıcak su ayarı nasıl yapılır"
description: "Vaillant ecoTEC kombide sıcak su ayarı modele göre: hangi tuş, kaç derece, konfor konumu, regler bağlıyken ve yalnız sıcak su için yaz konumu."
slug: "vaillant-kombi-sicak-su-ayari"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme D, fork A). Konu seçimi: origin/main'de vaillant-kombi-sicak-su-ayari yok
#   (en yakın vaillant-kombi-sembolleri-ve-anlamlari: sembol sözlüğü, ayar tarifi sorgusunu hedeflemiyor).
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "vaillant kombi sıcak su" → 2. öneri "vaillant kombi sıcak su ayarı";
#   "vaillant kombi sıcak su ayarı" → "…nasıl yapılır", "…kaç derece olmalı", "vaillant kombi sadece sıcak su ayarı".
#   GSC 7 gün (https___www-6, 19 Eki): "vaillant kombi sıcak su ayarı nasıl yapılır" 4, "vaillant kombi ecotec pro sıcak su ayarı" 2 gösterim.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile vaillant.com.tr'den yeniden indirildi: dördü de HTTP 200 application/pdf, md5 yerel kopyalarla aynı.
#  (A) ecoTEC intro 8000037574_02  https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf  md5 2ad2ae698770f850da164d67e3ac3637
#  (B) ecoTEC plus/exclusive 0020282305_07  https://www.vaillant.com.tr/api/download/product/tr/_ecotec-plus-26-40-kw_1491931.pdf  md5 7019a6c065efd6227ebac697dc91f175
#  (C) ecoTEC pure 0020250679_02  https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_844161.pdf  md5 f48176844c2865cf7cd48c96cd902121
#  (D) ecoTEC pro 0020228720_02  https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pro_842041.pdf  md5 5958d4db9b178710d1bf7c4ef3147f2e
# Sıcak su ayarı A s.8, B s.9-10, C s.11, D s.8 · lejyoner A s.8, D s.8 · 35-60 °C, <35 OFF C s.16 · onay/yanıp sönme A s.7-8, D s.7
#   · konfor B s.10, D s.8 · eBUS C s.10-11 · regler A s.8, D s.8 · yaz konumu A s.8, B s.10, C s.11, D s.8 · sıcak su kapatma C s.11 · gaz kokusu A s.3-4.
# BİLEREK YAZILMAYANLAR: belirli bir derece önerisi (kılavuz yalnız lejyoner sınırını veriyor) · fabrika ayar değeri (tablo sütunu okunamadı)
#   · servis menüsü/maksimum sınır değiştirme (kodla korunuyor) · enerji tasarrufu iddiası · #46 kapsamı.
# Alıntı denetim tablosu: vaillant-kombi-sicak-su-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının (regler) kullanma kılavuzu (varsa)"]
steps:
  - "Kombinin kullanma kılavuzunun kapağından modelini öğren; intro, plus, pure ve pro'da tuşlar farklı."
  - "Sıcak su ayar ekranını aç: intro'da ana ekranda sıcaklık tuşuna iki kez, plus'ta sıcak su sembolüne, pure ve pro'da sıcak su tuşuna bas."
  - "Ayarlanan değer yanıp sönerken ayar tuşlarıyla yeni sıcaklığı seç ve onay tuşuyla kaydet."
  - "Sıcaklığı seçerken kılavuzun lejyoner uyarısına uy; yetkili bayiye danışmadan suyu 60 °C'nin altına ayarlama."
  - "Musluğa sıcak suyun daha çabuk gelmesini istiyorsan plus ve pro'da konfor konumunu aç."
  - "Kombiye regler ya da eBUS oda termostatı bağlıysa sıcak su sıcaklığını reglerden ayarla; pro'da üründe en yüksek değeri seç."
  - "Yazın yalnız sıcak su istiyorsan kılavuzdaki yaz konumu adımıyla ısıtmayı kapat; sıcak su çalışmaya devam eder."
faq:
  - q: "Vaillant kombide sıcak su kaç derece olmalı?"
    a: "Kılavuzlar tek bir değer önermiyor ama bir sınır koyuyor: lejyoner bakterisi 60 °C'nin altındaki sıcaklıklarda gelişir, bu yüzden yetkili bayiye danışmadan su sıcaklığı 60 °C'nin altına ayarlanmamalı. ecoTEC pure'da ayar aralığı 35 ile 60 °C arası."
  - q: "Vaillant kombi sadece sıcak su nasıl ayarlanır?"
    a: "Bunun adı yaz konumu. ecoTEC intro ve pro'da kalorifer gidiş suyu sıcaklığı en alta, oF ya da off konumuna indirilip onaylanır; ısıtma kapanır, sıcak su çalışmaya devam eder. ecoTEC plus'ta ana ekrandaki ısıtma sembolüne en az 3 saniye basılı tutulur. ecoTEC pure'da gidiş suyu sıcaklığı ekranda OFF görünene kadar düşürülür."
  - q: "Konfor konumu ne işe yarar?"
    a: "ecoTEC pro kılavuzuna göre konfor konumu, ısıtma süresini beklemeden hemen istenilen sıcaklıkta sıcak su sağlar. ecoTEC plus'ta entegre sıcak su hazırlamalı üründe sıcak su hazırlama ünitesini çalışmaya hazır durumda tutar. Pro'da açılıp kapanınca ekranda Comf. on ya da Comf. off yanıp söner."
  - q: "Kombinin ekranından sıcak su ayarı yapılamıyor, neden?"
    a: "Büyük olasılıkla kombiye bir regler bağlı. ecoTEC pure kılavuzuna göre eBUS oda termostatı bağlıyken sıcak su ve gidiş suyu sıcaklığı kombinin ekranından ayarlanamaz. ecoTEC plus'ta da sistem regleri bağlıysa ilgili ayarlar reglerde yapılır."
  - q: "Sıcak su sıcaklığını OFF yaparsam ne olur?"
    a: "ecoTEC pure'da sıcak su sıcaklığı OFF görünene kadar düşürülüp onaylanırsa sıcak su hazırlama kapanır. Ayar tablosuna göre 35 °C'nin altı OFF demek. Yeniden açmak için bir sıcaklık seçip onaylaman yeterli."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve altındaki sade tezgâh"
  steps:
    - "Masada açık duran bir kombi kullanma kılavuzu"
    - "Kombi kumanda panelinde yan yana dizili sade tuşlar"
    - "Kombi ekranında yanıp sönen bir sıcaklık değerinin bulanık görüntüsü"
    - "Banyo lavabosunda buhar yükselen açık bir musluk"
    - "Mutfak lavabosunda akan suyun yakın planı"
    - "Salon duvarında asılı, sade, beyaz bir oda termostatı"
    - "Yaz güneşi vuran sakin bir salon ve duvarda beyaz bir panel radyatör"
---

Vaillant kombide sıcak su sıcaklığını değiştirmek kolay, ama hangi tuşa basılacağı modele göre değişiyor. Bu yazıda ecoTEC intro, ecoTEC plus, ecoTEC pure ve ecoTEC pro kullanma kılavuzlarındaki tarifleri bir araya getirdik: sıcak su ekranı nasıl açılır, değer nasıl kaydedilir, kaç dereceye dikkat etmek gerekir, regler bağlıysa ne değişir ve yazın yalnız sıcak su nasıl kullanılır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su ekranını aç, değer yanıp sönerken yeni sıcaklığı seç, onayla. Lejyoner uyarısı nedeniyle yetkili bayiye danışmadan 60 °C'nin altına inme. Regler bağlıysa ayar reglerde. Yalnız sıcak su için ısıtmayı yaz konumuyla kapat.

## Modele göre sıcak su ayarı

| Model | Sıcak su ekranı nasıl açılır | Onay |
|---|---|---|
| **ecoTEC intro** | Ana ekranda sıcaklık tuşuna iki kez bas, sıcak su sembolü yanıp söner | Ayar tuşlarıyla değiştir, onay tuşu; değer iki kez hızla yanıp söner |
| **ecoTEC plus / exclusive** | Ana ekranda sıcak su sembolüne bas | Kaydırma çubuğuyla değiştir, yanıp sönen elemana tekrar basarak onayla |
| **ecoTEC pure** | Sıcak su tuşuna bas, sıcaklık yanıp söner | Ayar tuşlarıyla değiştir, onay tuşu |
| **ecoTEC pro** | Sıcak su tuşuna bas, değer yanıp söner | Ayar tuşlarıyla değiştir, onay tuşu |

## Adım adım ayar

**1. Modelini öğren.** Dört kılavuzda da mantık aynı, tuş düzeni farklı. Kombinin kullanma kılavuzu elindeyse kapağındaki model adına bak.

**2. Sıcak su ekranını aç.** ecoTEC intro'da ana ekranda sıcaklık tuşuna **iki kez** bastığında sıcak su sembolü yanıp söner ve ayarlı sıcak su değeri görünür. ecoTEC plus'ta ana ekranda sıcak su sembolüne basman yeterli. ecoTEC pure ve pro'da sıcak su tuşuna bastığında sıcaklık ekranda yanıp söner.

**3. Değeri değiştir ve onayla.** Ayarlanabilir değerler yanıp sönerek gösterilir. Kılavuzların ortak kuralı: değişikliği her zaman onaylaman gerekir, yeni ayar ancak onaydan sonra kaydedilir. ecoTEC plus'ta onaylamak için yanıp sönen kumanda elemanına tekrar basıyorsun. ecoTEC pro'da 15 dakika hiçbir tuşa basmazsan ekran ana ekrana döner.

**4. Kaç derece seçmeli?** Kılavuzlar tek bir değer önermiyor, ama net bir uyarı veriyor: **lejyoner bakterisi 60 °C'nin altındaki sıcaklıklarda gelişir.** ecoTEC intro ve pro, yetkili bayiden tesisatına yönelik lejyoner önlemleri hakkında bilgi almanı ve ona danışmadan suyu 60 °C'nin altına ayarlamamanı istiyor. ecoTEC pure'da sıcak su ayar aralığı **35–60 °C**; 35'in altı **OFF**, yani sıcak su hazırlama kapalı demek.

**5. Konfor konumu.** ecoTEC pro kılavuzuna göre konfor konumu, ısıtma süresini beklemeden hemen istenilen sıcaklıkta sıcak su sağlar. Pro'da ilgili tuşla açıp kapatıyorsun; ekranda **Comf. on** ya da **Comf. off** yanıp söner, onayladığında ana ekranda konfor sembolü belirir. ecoTEC plus'ta yol **MENÜ → AYARLAMA → Konfor konumu**; açık olduğunda sıcak su hazırlama ünitesi çalışmaya hazır tutulur.

**6. Regler bağlıysa.** Kombiye bir oda termostatı ya da regler bağlıysa sıcak su ayarı oradan yapılır. ecoTEC pure kılavuzuna göre **eBUS oda termostatı** bağlıyken sıcak su ve gidiş suyu sıcaklığı kombinin ekranından ayarlanamaz. ecoTEC pro'da regler bağlıyken önce üründe mümkün olan en yüksek sıcak su değeri seçilir, istenen sıcaklık reglerden ayarlanır. ecoTEC intro'da da regler bağlıysa istenen sıcak su sıcaklığı reglerde ayarlanır.

**7. Yalnız sıcak su: yaz konumu.** Yazın petekleri kapatıp sıcak suyu kullanmak istiyorsan ısıtmayı kapatman yeterli. ecoTEC intro'da gidiş suyu sıcaklığını **oF** seviyesine indirip onaylıyorsun; ısıtma sembolü kaybolur, sıcak su değeri görünür. ecoTEC pro'da gidiş suyu sıcaklığı **off** konumuna alınır; kılavuz bunun sıcak su hazırlamayı sürdürdüğünü açıkça yazıyor. ecoTEC plus'ta ana ekranda ısıtma sembolüne **en az 3 saniye** basılı tutuyorsun. ecoTEC pure'da gidiş suyu sıcaklığı ekranda OFF görünene kadar düşürülüyor.

## Ayardan sonra sıcak su gelmiyorsa

Sıcaklığı yükselttin ama musluk hâlâ soğuksa sorun ayarda olmayabilir. Kılavuzların arıza tablosunda sıcak suyla ilgili üç madde var: sıcak su sıcaklığının çok düşük ayarlanması, sıcak su işletiminin kapatılması ve soğuk su devresi kapatma vanasının kapalı olması. Ekranda **F.22** ya da **F.28** görüyorsan önce o kodun tedbirini uygula: [Vaillant kombi F22 hatası](/blog/vaillant-kombi-f22-hatasi/), [Vaillant kombi F28 hatası](/blog/vaillant-kombi-f28-hatasi/). Bunlar doğruysa yetkili servis.

⛔ **Kendin-çöz sınırı burada biter.** Ekrandaki ayarlar, regler ve konfor konumu sende. Yetkili servis seviyesi kodla korunuyor; maksimum sıcaklık sınırı, kombinin içi, gaz ve elektrik bağlantısı uzmanın. Ortamda gaz kokusu varsa hiçbir düğmeye dokunma: kapı ve pencereleri aç, gaz sayacının kapatma düzeneğini kapat, binayı terk et ve gaz şirketinin acil durum birimini dışarıdan ara.

## Kısa özet

1. Model: intro, plus, pure ya da pro?
2. Sıcak su ekranını aç, değeri değiştir, onayla.
3. 60 °C'nin altına inmeden önce yetkili bayiye danış.
4. Regler bağlıysa ayarı reglerde yap.
5. Yazın yalnız sıcak su için yaz konumu.

Ekrandaki sembollerin tamamı [Vaillant kombi sembolleri](/blog/vaillant-kombi-sembolleri-ve-anlamlari/) sayfasında, ısıtma tarafındaki sorunlar [Vaillant kombi kalorifer ısıtmıyor](/blog/vaillant-kombi-kalorifer-isitmiyor/) yazısında. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
