---
title: "Daikin klima ışığı yanıp sönüyor, çalışmıyor: ne yapmalı?"
description: "Daikin klimada ÇALIŞMA lambası yanıp sönüyorsa kılavuz önce filtreye, hava yoluna, kesiciye ve çoklu sistemde mod çakışmasına bakıyor."
slug: "daikin-klima-isik-yanip-soniyor"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme E). origin/main'de daikin-klima-isik-yanip-soniyor yok; Daikin'de çalışmıyor,
#   ısıtmıyor, soğutmuyor, koku, su damlatıyor, hata kodları ve A5/E0/E7/F3/F6 tek kod sayfaları var; lamba sorgusunu karşılayan yok.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "daikin klima ışık yanıp sönüyor" → "... yanıp sönüyor çalışmıyor", "daikin klima yeşil ışık
#   yanıp sönüyor çalışmıyor", "daikin klima yeşil ışık yanıp sönüyor".
# Belge: Daikin CTXM-M/FTXM-M kullanım kılavuzu (TR), daikin.eu, bu koşuda HTTP 200, md5 58ac4c9cad23c9351b2671093b4084f1 (yerel kopyayla aynı).
# BİLEREK YAZILMAYANLAR: diğer Daikin serilerinde lamba davranışı (belge yalnız FTXM-M) · kodların tek tek çözümü (ayrı sayfalarda)
#   · kart/sensör teşhisi · fiyat (#46). Alıntı denetimi: daikin-klima-isik-yanip-soniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Klimanın kullanma kılavuzu", "Uzaktan kumanda"]
steps:
  - "Hangi lambanın yanıp söndüğüne bak; ÇALIŞMA lambası mı, zamanlayıcı ya da akıllı göz lambası mı, ayır."
  - "Evde birden fazla iç ünite aynı dış üniteye bağlıysa diğer odalardaki klimaların modunu kontrol et ve hepsini aynı moda al."
  - "İç ünitenin hava filtrelerini çıkarıp temizle, kuruyunca yerine tak."
  - "İç ünitenin hava giriş ve çıkışını kapatan perde, mobilya ya da eşya varsa kaldır; dış ünitenin önünde görünen bir engel varsa aç."
  - "Klimanın kesicisini kapat, birkaç dakika bekle, tekrar aç ve klimayı kumandayla çalıştır."
  - "Lamba hâlâ yanıp sönüyorsa kumandanın arıza teşhisi menüsünden ekrandaki kodu oku ve not et."
  - "Kod ve lamba sürüyorsa klimayı kullanmayı bırak, kodla birlikte Daikin yetkili servisine haber ver."
faq:
  - q: "Daikin klimada yeşil ışık yanıp sönüyor, bu ne demek?"
    a: "Daikin'in FTXM-M kılavuzunda ÇALIŞMA lambası, klima çalışırken sabit yeşil yanar. Çalışma aniden durmuş ve ÇALIŞMA lambası yanıp sönüyorsa kılavuz önce filtreleri, iç ve dış ünitenin hava yolunu, sonra kesiciyi kapatıp açmayı öneriyor. Çoklu sistemde ise lamba, mod çakışması yüzünden bekleme modunda da yanıp sönebilir; bu arıza değildir."
  - q: "Klima çalışmıyor ve hiçbir lamba yanmıyorsa?"
    a: "Kılavuz bu durumu ayrı tarif ediyor: kesici kapalı ya da sigorta atmış olabilir, elektrik kesintisi olabilir, kumandanın pilleri yanlış takılmış olabilir, saat ayarı yanlış olabilir. Bunlara bak, sonra yeniden dene."
  - q: "Klima durdu ama lamba sabit yanıyor, arıza mı?"
    a: "Kılavuza göre klima, sistemi korumak için ani ve büyük gerilim dalgalanmalarında çalışmayı durdurur ve yaklaşık 3 dakika içinde kendiliğinden yeniden başlar. Bekle."
  - q: "Sarı yanan lamba ne?"
    a: "FTXM-M kılavuzunda zamanlayıcı ayarlandığında ZAMANLAYICI lambası sarı yanar, zamanlayıcı iptal edilince söner. Bu lamba arıza göstergesi değil, zamanlayıcının açık olduğunu gösterir."
  - q: "Hata kodunu kumandadan nasıl okurum?"
    a: "Kılavuzdaki uzaktan kumandayla arıza teşhisi bölümüne göre ilgili düğmeyi 5 saniye basılı tutunca sıcaklık göstergesinde bir simge yanıp söner; sonra sürekli bir bip duyana kadar ikinci düğmeye arka arkaya basılır, geçerli kodda uzun bip duyulur. Düğmelerin yeri modele göre değişir, kendi kılavuzuna bak."
images:
  coverAlt: "Salon duvarında asılı beyaz bir duvar klimasının ön yüzü ve küçük gösterge lambaları"
  steps:
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda ilgili filtre"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda telefon ve kullanım kılavuzu"
---

Daikin klima birden durdu, ön paneldeki lamba yanıp sönmeye başladı. Kumandaya basıyorsun, bir şey değişmiyor. Daikin'in FTXM-M serisi kullanım kılavuzu bu belirtiyi sorun giderme tablosunda ayrı bir satır olarak ele alıyor ve sıralı bir kontrol listesi veriyor. Ayrıca çok odalı sistemlerde lambanın arıza olmadan da yanıp sönebileceğini yazıyor. Bu yazıda servisi aramadan önce evde bakabileceklerini bu kılavuzdan topladık. Kılavuz FTXM-M serisine ait; senin modelinde lamba ve düğme yerleri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** ÇALIŞMA lambası normalde sabit yanar. Klima durup lamba yanıp sönüyorsa filtreleri temizle, hava giriş ve çıkışını aç, kesiciyi kapatıp aç. Çok odalı sistemde başka odadaki klima farklı moddaysa lamba bekleme yüzünden de yanıp söner. Lamba hâlâ yanıp sönüyorsa kodu oku ve yetkili servisi ara.

## Lamba ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Ne yapılır |
|---|---|---|
| **ÇALIŞMA lambası sabit yanıyor** | Klima çalışıyor | Normal |
| **ÇALIŞMA lambası yanıp sönüyor, klima durdu** | Çalışma aniden durdu | 🛠️ Filtre, hava yolu, kesici |
| **ÇALIŞMA lambası yanıp sönüyor, çok odalı sistem** | Mod çakışması, bekleme | 🛠️ Odaları aynı moda al |
| **Lamba yanıyor, klima durdu** | Gerilim dalgalanması koruması | ⏳ Yaklaşık 3 dakika bekle |
| **Hiçbir lamba yanmıyor** | Elektrik, kesici, pil ya da saat | 🛠️ Kesici ve pilleri kontrol et |
| **ZAMANLAYICI lambası sarı** | Zamanlayıcı açık | Arıza değil |

## Adım adım: evde denenecekler

**1. Hangi lamba?** FTXM-M'nin ön panelinde üç lamba tarif ediliyor: **ÇALIŞMA**, **ZAMANLAYICI** ve **AKILLI GÖZ**. Klimayı çalıştırdığında ÇALIŞMA lambası sabit yeşil yanmaya başlar, durdurduğunda söner. Zamanlayıcıyı kurduğunda ZAMANLAYICI lambası sarı yanar; AKILLI GÖZ ise hareket algılama işleviyle ilgilidir. Bu yazı ÇALIŞMA lambasının yanıp sönmesiyle ilgili. Lambanın soluk görünmesi de arıza olmayabilir; kumandada ayrı bir lamba parlaklığı ayar düğmesi var.

**2. Başka odada klima açık mı?** Evde birden fazla iç ünite aynı dış üniteye bağlıysa (çoklu sistem) öncelik **ilk açılan ünitenin** modundadır. Kılavuza göre sonra açtığın ünite farklı moda ayarlıysa **bekleme moduna geçer ve ÇALIŞMA lambası yanıp sönmeye başlar; bu bir arıza olduğunu göstermez**. Örneğin bir odada FAN çalışırken başka odada ISITMA açılırsa öncelik ısıtmaya geçer, FAN'daki klima beklemeye girer. Bütün odaları aynı moda al.

**3. Filtreleri temizle.** Sorun giderme tablosunda "Çalışma aniden duruyor (ÇALIŞMA lambası yanıp sönüyor)" satırının ilk sorusu şu: **hava filtreleri temiz mi?** Filtreleri çıkar, temizle ve tamamen kuruyunca yerine tak. Filtreye dokunmadan önce klimayı kapat. Ayrıntılı yöntem [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**4. Hava yolunu aç.** Kılavuzun ikinci sorusu: iç ve dış ünitelerin hava giriş veya çıkışını engelleyen bir şey var mı? İç ünitenin önüne inen perde, üstüne konmuş eşya ya da balkonda dış ünitenin önüne yığılmış kutular hava akışını keser. Görünen engeli kaldır; dış ünitenin kapağını açmak ya da içine uzanmak senin işin değil.

**5. Kesiciyi kapatıp aç.** Kılavuzun çözümü sırayla şöyle: **kesiciyi kapalı konuma getir, tüm engelleri kaldır, kesiciyi tekrar açık konuma getir ve klimayı uzaktan kumandayla çalıştırmayı dene.** Aynı tablo, yıldırım ya da radyo dalgaları yüzünden klimanın anormal davranabileceğini, bu durumda da kesiciyi önce kapatıp sonra açmayı öneriyor. Klimayı durdurup hemen yeniden açarsan çalışmanın hemen başlamaması normal: kılavuz koruma için yaklaşık 3 dakika beklemek gerektiğini yazıyor.

**6. Kodu oku.** Lamba hâlâ yanıp sönüyorsa kumanda iç ünitedeki arızaya ait **hata kodunu** gösterebilir. Kılavuzdaki "Uzaktan kumandayla arıza teşhisi" bölümüne göre ilgili düğmeyi 5 saniye basılı tutunca sıcaklık göstergesinde bir simge yanıp söner; sonra sürekli bir bip duyana kadar ikinci düğmeye arka arkaya basarsın ve geçerli kodda **uzun bir bip** duyulur. Kodu bir kâğıda yaz. Anlamı [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) sayfasında.

**7. Sürüyorsa servis.** Kılavuzun aynı satırdaki son cümlesi net: lamba hâlâ yanıp sönüyorsa klimanızı satın aldığınız mağazanın **yetkili servisine** danışın. Ekranda U0 (soğutucu akışkan yetersiz) ya da dış üniteye ait bir kod çıkıyorsa gaz, elektrik ve dış ünite tarafı tamamen servis işidir.

## Lamba yanarken klima neden durur

Her durma lamba arızası değildir. Kılavuza göre klima, sistemi korumak için ani olarak büyük değerde gerçekleşen **gerilim dalgalanmalarında** çalışmayı durdurur ve yaklaşık **3 dakika içinde** kendiliğinden yeniden başlar; bu sırada ÇALIŞMA lambası yanmaya devam eder. Hiçbir lamba yanmıyorsa da sırayla kesici ya da sigorta, elektrik kesintisi, kumandanın pilleri ve saat ayarı kontrol edilir. Daha geniş liste [Daikin klima çalışmıyor](/blog/daikin-klima-calismiyor/) yazısında.

## Ne zaman servis

- Kesiciyi kapatıp açtıktan sonra da ÇALIŞMA lambası yanıp sönüyorsa
- Kumanda bir hata kodu gösteriyorsa
- Klima tek odalı olduğu hâlde lamba sürekli yanıp sönüyorsa
- Sigorta klimayı her açtığında atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, filtre, kesici ve odadaki engeller sende; iç ünitenin kapağının içi, dış ünite, gaz ve elektrik bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Klimanın modeli ne (iç ünitenin etiketinde yazar)?
2. Hangi lamba yanıp sönüyor?
3. Evde aynı dış üniteye bağlı başka iç ünite var mı?
4. Kumanda bir hata kodu gösterdi mi?
5. Kesiciyi kapatıp açtın mı, sonuç ne oldu?

Belirtiyi ve kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Isıtma tarafı [Daikin klima ısıtmıyor](/blog/daikin-klima-isitmiyor/) sayfasında. Bil, gör, çağır.
