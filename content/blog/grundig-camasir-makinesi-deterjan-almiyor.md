---
title: "Grundig çamaşır makinesi deterjan almıyor"
description: "Grundig çamaşır makinesinin çekmecesinde deterjan kalıyorsa Grundig kılavuzundaki sebepler, çekmece ve sifon temizliği adım adım burada."
slug: "grundig-camasir-makinesi-deterjan-almiyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Grundig belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf.
#   download.grundig.com https'te bağlantı kurmadı (curl 000); aynı yol http ile 200. www.grundig.com.tr arşivi Akamai 403. Web araması yalnız PDF adresini bulmak için.
#   Okuma pdftotext -layout; sayfa = PDF sayfası. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-grundig-sprint/
#  (A) GWM 91014  http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_Manual_7167420600_tr_TR20210319-141313-819.pdf  40 s.  md5 eafeccdc1e23e0125b86ef9af802d8c2  (sayfa atıfları esas olarak A)
#  (B) GWM 9701 Y http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_202012281339697_User%20Manual%20-%20File%20(Long)tr_TR.pdf  36 s.  md5 a4587b21fd0c0725e0879dec061e1031
#  (C) GWM 9801   http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_201901111413193_User%20Manual%20-%20File%20(Long)tr_TR.pdf  40 s.  md5 9fadc3336071419d3033d52ed435d69c
# Sorun giderme satırı (A s.32 · B s.31): "Çekmecede deterjan kalıntısı var." → çekmece ıslakken deterjan / nemlenmiş deterjan / düşük su basıncı / ön yıkama suyu ana gözü ıslatmış,
#   göz deliklerinde tıkanıklık / deterjan gözü vanalarında sorun (Yetkili Servis) / deterjanla yumuşatıcı karışmış / düzenli kazan temizliği yok.
# Diğer: A s.28 4.4.1 deterjan çekmecesinin temizlenmesi (4-5 yıkamada bir; sifona bastır, çek; sifonu kaldırarak çıkar; lavaboda bol ılık su, eldiven ya da fırça; sifonu oturt, tak)
#   · C s.29 aynı yordam · A s.10 göz düzeni, "program çalışırken çekmeceyi açık bırakmayın", sıvı deterjan kabı · A s.11 sıvı deterjan aparatı, toz deterjanda aparat yukarıda.
# BİLEREK YAZILMAYANLAR: vana teşhisi/değişimi (belge "Yetkili Servisi arayın") · su basıncını ölçme yöntemi (belgede yok; yalnız "Su basıncını kontrol edin") · aparatın kalıntıya sebep olduğu iddiası (belgede yok) · fiyat.
# Alıntı denetim tablosu: grundig-camasir-makinesi-deterjan-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Eldiven", "Yumuşak bir fırça", "Kuru bez"]
steps:
  - "Deterjan koymadan önce çekmeceyi kuru bir bezle kurula."
  - "Deterjanı nemsiz, kapalı ve aşırı sıcak olmayan bir yerde sakla."
  - "Yumuşatıcıyı deterjanla karıştırma; her birini kendi gözüne koy."
  - "Yumuşatıcı gözündeki sifonun işaretli noktasına bastır ve çekmeceyi kendine doğru çekerek çıkar."
  - "Sifonu arkasından kaldırarak çıkar."
  - "Çekmeceyi ve sifonu lavaboda bol ılık suyla eldivenle ya da fırçayla yıka, göz deliklerindeki tıkanıklığı temizle."
  - "Sifonu yerine iyice oturt ve çekmeceyi geri tak."
faq:
  - q: "Grundig çamaşır makinem deterjanı neden çekmecede bırakıyor?"
    a: "Grundig'in sorun giderme tablosu 'Çekmecede deterjan kalıntısı var' satırında yedi sebep sayıyor: deterjanın çekmece ıslakken konması, deterjanın nemlenmesi, su basıncının düşük olması, ön yıkama suyunun ana yıkama gözündeki deterjanı ıslatması ya da göz deliklerinin tıkanması, deterjan gözü vanalarında sorun, deterjanla yumuşatıcının karışması ve düzenli kazan temizliğinin yapılmaması. Vana dışındakilerin hepsi kullanıcı tarafında."
  - q: "Deterjan çekmecesini ne sıklıkla temizlemeliyim?"
    a: "Grundig GWM 91014 kılavuzuna göre zamanla toz deterjan birikmesini önlemek için 4-5 yıkamada bir. Yumuşatıcı bölmesinde normalden çok su ve yumuşatıcı karışımı kalmaya başlarsa sifonu da temizlemen gerekiyor."
  - q: "Sıvı deterjan aparatı varsa toz deterjanı nasıl koymalıyım?"
    a: "Grundig'in kılavuzuna göre makinende sıvı deterjan aparatı varsa sıvı deterjan kullanırken aparatı gösterilen yerden basarak döndürürsün, aşağı düşen parça sıvı deterjan için bariyer olur. Toz deterjan kullanacaksan aparat yukarıda olmalı. Aparatı gerektiğinde yerinde ya da çıkararak suyla temizleyebilirsin."
  - q: "Program sırasında çekmeceyi açabilir miyim?"
    a: "Grundig'in kılavuzu yıkama programı çalışırken deterjan çekmecesinin açık bırakılmamasını istiyor. Deterjanı ve yumuşatıcıyı programı başlatmadan önce eklemen gerekiyor."
images:
  coverAlt: "Lavaboda ılık su altında tutulan, gözlerinde toz deterjan topakları kalmış çamaşır makinesi deterjan çekmecesi"
---

Program bitti, çamaşırları çıkardın, çekmeceyi açınca deterjan hâlâ orada: ıslak bir topak ya da gözün dibinde kalıntı. Grundig'in çamaşır makinesi kullanma kılavuzlarındaki sorun giderme tablosunda bu durum tek satır: **"Çekmecede deterjan kalıntısı var."** Grundig bu satırda yedi sebep sayıyor ve yalnız biri, **deterjan gözü vanaları**, servis işi. Geri kalanı nasıl koyduğun, nerede sakladığın ve çekmecenin temizliğiyle ilgili. Bu yazı Grundig'in GWM 91014 ve GWM 9701 Y kılavuzlarına dayanıyor; çekmece temizliği GWM 9801 kılavuzunda da aynı sırayla anlatılıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çekmece kuru olmalı, deterjan nemsiz ve kapalı saklanmalı, yumuşatıcı deterjana karışmamalı. Sonra çekmeceyi sifona bastırarak çıkar, sifonu kaldır, ikisini ılık suyla yıka, delikleri temizle ve geri tak. Grundig bu temizliği 4-5 yıkamada bir istiyor.

## Adım adım: evde denenecekler

**1. Çekmeceyi kurula.** Grundig'in tablosundaki ilk sebep: deterjan **çekmece ıslakken konulmuş** olabilir. Çözüm: **deterjan koymadan önce çekmeceyi kurula.**

**2. Deterjanı kuru ve kapalı sakla.** İkinci sebep: deterjan **nemlenmiş** olabilir. Grundig'in önerisi deterjanları **nemsiz bir ortamda, kapalı olarak** saklamak ve **aşırı sıcağa maruz bırakmamak.**

**3. Yumuşatıcıyı deterjana karıştırma.** Tablodaki bir diğer sebep: **deterjanla yumuşatıcı karışmış** olabilir. Grundig'in çözümü yumuşatıcıyı deterjanla karıştırmamak ve **çekmeceyi sıcak suyla yıkayıp temizlemek.** Çekmece üç bölmeli: **1 ön yıkama, 2 ana yıkama, 3 yumuşatıcı.** Yumuşatıcı gözündeki **(>max<) seviye işaretini** aşma.

**4. Çekmeceyi çıkar.** Tablonun delik satırı şöyle: ön yıkama suyunu alırken **ana yıkama gözündeki deterjan ıslanmış olabilir**, **deterjan gözünün deliklerinde tıkanıklık** olabilir; çözüm **delikleri kontrol edip tıkanıklık varsa temizlemek.** Bunun için Grundig'in temizlik yordamı: **yumuşatıcı gözündeki sifonun işaretli noktasına bastırarak** deterjan çekmecesini **kendine doğru çekip çıkar.**

**5. Sifonu çıkar.** Grundig'e göre **sifonu arkasından kaldırarak** çıkar. Kılavuz, yumuşatıcı bölmesinde **normalden daha çok su ve yumuşatıcı karışımı** kalmaya başlarsa sifonun da temizlenmesini istiyor.

**6. Lavaboda ılık suyla yıka.** Çekmeceyi ve sifonu lavaboda **bol ılık suyla** yıka. Grundig'in uyarısı: çekmecedeki kalıntıların cildine temas etmemesi için temizliği **eldivenle ya da uygun bir fırçayla** yap. Gözlerin deliklerinde kalıntı varsa bu sırada temizle.

**7. Sifonu oturt, çekmeceyi tak.** Temizledikten sonra **sifonu yerine iyice oturtarak** çekmeceyi geri tak. Grundig bu temizliği, zamanla içinde toz deterjan birikmesini önlemek için **düzenli aralıklarla, 4-5 yıkamada bir** öneriyor.

## Çekmeceden sonra iki kontrol

Grundig'in tablosu aynı satırda iki sebep daha sayıyor. Birincisi **su basıncının düşük olması**; kılavuzun önerisi **su basıncını kontrol etmek.** İkincisi **düzenli kazan temizliğinin uygulanmamış** olması; çözüm kazanı düzenli temizlemek. GWM 91014 kılavuzuna göre Kazan Temizleme programı olan modellerde bu program **1-2 ayda bir, makine boşken** çalıştırılıyor; yöntem kardeş rehberimiz [Grundig çamaşır makinesi temiz yıkamıyor](/blog/grundig-camasir-makinesi-temiz-yikamiyor/) yazısında. Deterjanı hangi göze koyacağını merak ediyorsan [çamaşır makinesi deterjan çekmecesi hangi göz](/blog/camasir-makinesi-deterjan-cekmecesi-hangi-goz/), markadan bağımsız anlatım için [çamaşır makinesi deterjan almıyor](/blog/camasir-makinesi-deterjan-almiyor/) yazısına bakabilirsin.

## Ne zaman servis

Grundig'in tablosundaki kullanıcıya ait olmayan tek sebep: **deterjan gözü vanalarında sorun olabilir.** Kılavuzun bu satır için tek çözümü **Yetkili Servisi aramak.** Çekmece kuru ve temiz, delikler açık, deterjan doğru saklanmış ve yumuşatıcıyla karışmamışken deterjan hâlâ gözde kalıyorsa durumu yetkili servise anlat. Grundig'in genel uyarısı da aynı yönde: talimatları uygulamana rağmen sorun sürerse ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Çekmece, sifon ve deterjan alışkanlığı sana; vanalar yetkili servise aittir. Grundig çamaşır makinelerindeki diğer konular için [Grundig çamaşır makinesi hata kodları](/blog/grundig-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce kısa özet

1. Kalan deterjan hangi gözde: ön yıkama mı, ana yıkama mı?
2. Toz mu sıvı mı kullanıyorsun, sıvı deterjan aparatı hangi konumda?
3. Deterjanı koyarken çekmece ıslak mıydı?
4. Çekmeceyi ve sifonu en son ne zaman temizledin?
5. Yumuşatıcı gözünde su kalıyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
