---
title: "Kombi ne kadar elektrik harcar, ömrü kaç yıl?"
description: "Kombi ne kadar elektrik harcar? Baymak Duotec ürün fişindeki tam yük, kısmi yük ve bekleme değerleriyle kWh hesabı; Vaillant ecoTEC pure'a göre ömür."
slug: "kombi-ne-kadar-elektrik-harcar"
date: "2026-11-10"
category: "Kombi"
updated: "2026-11-10"
kisaCevap: "Kombinin elektrik tüketimi ürün fişinde yardımcı güç tüketimi olarak geçer; yakıt tüketimi ayrı verilir. Baymak Duotec 24 ürün fişinde tam yükte 0,044 kW, bekleme modunda 0,004 kW yazıyor; yani tam yükte 10 saatte 0,44 kWh eder. Vaillant ecoTEC pure kılavuzu bu tip cihazların kullanım ömrünü 10 yıl veriyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı, parti 5 (YK #215; BOSLUK.md sürüm 4 #440 "kombi ne kadar elektrik yakar + kombi ömrü ne kadar", sürdürülebilirlik; yalnız blog — kombi sosyal yasağı sürüyor). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: kombi-bakimi-nasil-yapilir, kombi-kac-derece-olmali, cihazlar-bekleme-modunda-elektrik-harcar-mi (kombi elektrik/ömür yazısı yok).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "kombi ne kadar elektrik" #1 "…yakar", #2 "…harcar", #3 "doğalgaz kombi…", #6 "kombi aylık ne kadar elektrik yakar", #8 "24 kw kombi…"; "kombi ömrü" #1 "…ne kadar", #2 "…kaç yıldır", #9 "kombi kullanım ömrü". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Baymak Duotec 24/28/33/42/45 kullanma kılavuzu 300032122 Rev.2 (28 s. PDF) https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf md5 723546ecd63c99eaecb5c3143c687c2a — PDF s.14, 18, 22 · (B) Vaillant ecoTEC pure VUW 236/7-2 ve 286/7-2 (H-TR) kullanma kılavuzu 0020250679_02 (20 s. PDF) https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_844161.pdf md5 f48176844c2865cf7cd48c96cd902121 — PDF s.1, 8, 9, 13.
# Rakam kuralı: kWh değerleri yalnız Baymak ürün fişindeki kW değerlerinden, formül açık; ömür yalnız Vaillant belgesindeki 10 yıl. Birim ücret ve TL yok (#46).
# BİLEREK YAZILMAYANLAR: doğalgaz tüketiminin m³ ya da TL karşılığı (#46; birim dönüşümü belgede yok) · Baymak Duotec için ayrı bir ömür rakamı (belgede yok) · kombi değişim zamanı tavsiyesi · fiyat (#46).
# Alıntı denetimi: kombi-ne-kadar-elektrik-harcar.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Hesap makinesi"]
steps:
  - "Kombinin ürün fişinde ya da tip etiketinde elektrik değerini bul."
  - "Tam yük kilovat değerini çalışma saatiyle çarp."
  - "Bekleme tüketimini 24 saat üzerinden hesapla."
  - "Oda termostatını yaklaşık 20°C'ye ayarla."
  - "Zamanlayıcı programını evde olmadığın günlere göre kur."
  - "Radyatörlerin önünü açık tut, kullanılmayan odalarda kapat."
  - "Yıllık kontrolü ve bakımı yetkili servise yaptır."
faq:
  - q: "Kombi saatte kaç kWh elektrik harcar?"
    a: "Baymak Duotec 24 ürün fişinde yardımcı güç tüketimi tam yükte 0,044 kW, kısmi yükte 0,012 kW. Formül kWh = kW × saat olduğundan tam yükte 1 saat 0,044 kWh, kısmi yükte 0,012 kWh eder. Duotec 28 için tam yük değeri 0,035 kW."
  - q: "Kombi bekleme modunda elektrik harcar mı?"
    a: "Harcar ama değer küçüktür. Baymak Duotec 24 ürün fişinde bekleme modundaki güç tüketimi 0,004 kW. Kombi 24 saat beklemede kalırsa 0,004 × 24 = 0,096 kWh eder."
  - q: "Kombinin ömrü kaç yıldır?"
    a: "Vaillant ecoTEC pure kılavuzu bu tip cihazların Bakanlıkça tespit edilen kullanım ömrünü 10 yıl olarak veriyor. Kılavuz uzun kullanım ömrü için ön şartın yetkili teknik servis tarafından yıllık kontrol ve iki yılda bir bakım olduğunu yazıyor."
  - q: "Kombinin kendi elektrik değerini nereden öğrenirim?"
    a: "Vaillant ecoTEC pure kılavuzuna göre tip etiketinde maksimum elektrik tüketimi watt olarak yer alıyor. Baymak Duotec kılavuzunun ek bölümündeki ürün fişi tam yük, kısmi yük ve bekleme değerlerini model model veriyor."
images:
  coverAlt: "Sade kombi ve yanında priz çizimi"
  steps:
    - "Kombinin alt yüzündeki etikete bakan beyaz eldivenli sade siluet el"
    - "Hesap makinesine dokunan beyaz eldivenli sade siluet el"
    - "Duvar saatine bakan beyaz eldivenli sade siluet el"
    - "Duvardaki oda termostatını çeviren beyaz eldivenli sade siluet el"
    - "Oda termostatının tuşuna basan beyaz eldivenli sade siluet el"
    - "Radyatörün önündeki perdeyi çeken beyaz eldivenli sade siluet el"
    - "Elinde telefon tutan beyaz eldivenli sade siluet el"
---

Kombinin elektrik tüketimi ürün fişinde "yardımcı güç tüketimi" olarak geçer; ısıtmanın yakıt tüketimi ayrı satırlarda verilir. Baymak Duotec 24 ürün fişinde yardımcı güç tüketimi tam yükte 0,044 kW, kısmi yükte 0,012 kW, bekleme modunda 0,004 kW olarak veriliyor. Hesap formülü kWh = kW × saat; tam yükte 10 saatlik çalışma 0,44 kWh eder.

Kombi ömrü için Vaillant ecoTEC pure kılavuzu bu tip cihazların Bakanlıkça tespit edilen kullanım ömrünü 10 yıl olarak yazıyor. Aynı kılavuz uzun ömrün ön şartını yıllık kontrol ve iki yılda bir bakım olarak tanımlıyor. Kendi kombinin kılavuzu farklı bir değer veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Not.** Bu yazıdaki kWh değerleri yalnız Baymak ürün fişindeki kW değerlerinden formülle hesaplandı. Kombinin içini açmak, kart, fan ya da pompa ile ilgili her iş yetkili servisindir.

## Kombi saatte ne kadar elektrik harcar?

| Baymak modeli | Tam yük | Kısmi yük | Bekleme | Tam yükte 10 saat |
|---|---|---|---|---|
| Duotec 24 | 0,044 kW | 0,012 kW | 0,004 kW | 0,44 kWh |
| Duotec 28 | 0,035 kW | 0,010 kW | 0,004 kW | 0,35 kWh |
| Duotec 33 | 0,04 kW | 0,010 kW | 0,004 kW | 0,4 kWh |
| Duotec 42 | 0,036 kW | 0,013 kW | 0,003 kW | 0,36 kWh |
| Duotec 45 | 0,037 kW | 0,014 kW | 0,002 kW | 0,37 kWh |

Baymak aynı ürün fişinde su ısıtma için yıllık elektrik enerjisi kullanımını Duotec 24'te 30 kWh, günlük elektrik tüketimini 0,1356 kWh olarak veriyor. Bu değerler kılavuzdaki XL yük profili içindir.

## Adım adım: kombinin elektrik tüketimi nasıl hesaplanır ve azaltılır?

**1. Kombinin ürün fişinde ya da tip etiketinde elektrik değerini bul.** Baymak Duotec kılavuzunun ek bölümündeki ürün fişi tam yük (elmax), kısmi yük (elmin) ve bekleme (PSB) değerlerini model model veriyor. Vaillant ecoTEC pure kılavuzu tip etiketinde maksimum elektrik tüketiminin watt (W) olarak yazdığını gösteriyor.

**2. Tam yük kilovat değerini çalışma saatiyle çarp.** Duotec 24 için 0,044 kW × 5 saat = 0,22 kWh eder. Kombi her zaman tam yükte çalışmaz; kısmi yükte aynı süre 0,012 × 5 = 0,06 kWh tutar.

**3. Bekleme tüketimini 24 saat üzerinden hesapla.** Duotec 24 bekleme modunda 0,004 kW çeker; bütün gün beklemede kalırsa 0,004 × 24 = 0,096 kWh eder. Günlük toplamı bulmak için çalışma ve bekleme saatlerini ayrı hesaplayıp topla.

**4. Oda termostatını yaklaşık 20°C'ye ayarla.** Baymak oda termostatı kullanmanı, termostatı yaklaşık 20°C'ye indirmeni ve oda termostatlarını 1°C kısmanı öneriyor. Kılavuza göre bu sayede enerji tüketimi azalır.

**5. Zamanlayıcı programını evde olmadığın günlere göre kur.** Baymak oda termostatını saatlik ayarlarken evde olunmayan günleri ve tatil günlerini dikkate almanı istiyor. Kılavuz elektrik tüketiminin ve enerji tasarrufunun programlanmış, aktif bir zamanlayıcı programıyla en uygun seviyeye ulaştığını yazıyor.

**6. Radyatörlerin önünü açık tut, kullanılmayan odalarda kapat.** Baymak radyatörleri örtmemeni, önüne perde asmamanı ve kullanılmayan odalarda radyatörleri kapatmanı istiyor. Odayı havalandırırken oda termostatının sıcaklığını geçici olarak düşürmeni de öneriyor.

**7. Yıllık kontrolü ve bakımı yetkili servise yaptır.** Baymak verimi ve çalışma emniyetini korumak için her kış sezonu sonunda yetkili servisin yıllık bakım ve kontrol yapmasını istiyor. Vaillant yüksek kullanım ömrü için yıllık kontrolü ve iki yılda bir bakımı ön şart sayıyor.

## Kombinin ömrü kaç yıldır?

Vaillant ecoTEC pure kılavuzunda bu tip cihazlar için Bakanlıkça tespit edilen kullanım ömrü 10 yıl. Baymak Duotec kılavuzunda ayrı bir ömür rakamı geçmiyor; bu model için yıl belgede belirtilmemiş. Vaillant'a göre kontrol sonuçlarına bağlı olarak daha erken bakım gerekebilir. Ömrü uzatan şey kılavuzdaki bakım takvimine uymaktır.

## Kombinin suyunu boşaltmak tasarruf sağlar mı?

Hayır. Baymak bütün sistemin suyunu değiştirmenin kombi ve ısıtma elemanlarında zararlı kireç tortularına yol açacağını, su boşaltmalarından kaçınılmasını yazıyor. Vaillant uzun süre kullanılmayacak sistemin boşaltılması için yetkili bayiye başvurmanı istiyor.

## Bu konuda hangi yazılara bakılır?

Bakımın ayrıntısı için [kombi bakımı nasıl yapılır](/blog/kombi-bakimi-nasil-yapilir/), sıcaklık ayarı için [kombi kaç derece olmalı](/blog/kombi-kac-derece-olmali/) yazısına bak. Diğer cihazların bekleme tüketimi için [cihazlar bekleme modunda elektrik harcar mı](/blog/cihazlar-bekleme-modunda-elektrik-harcar-mi/) sayfası yol gösterir.

---

**Kaynak künyesi.** Elektrik değerleri ve enerji tasarrufu ipuçları Baymak Duotec 24/28/33/42/45 kullanma kılavuzundan, kullanım ömrü ve bakım aralığı Vaillant ecoTEC pure kullanma kılavuzundan alınmıştır; kWh değerleri bu kW değerlerinden formülle hesaplanmıştır. Kendi kombinin kılavuzu farklı bir değer veriyorsa **kendi kılavuzun esastır.**

Kombin beklenenden fazla tüketiyor ya da ısıtmıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
