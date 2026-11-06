---
title: "Airfryer ne kadar elektrik harcar? Hesap yöntemi"
description: "Airfryer saatte kaç kWh harcar? Homend Airfryday 2504H (1500 W) ve 2509H (1550 W) güç değeri ve kılavuzdaki pişirme süreleriyle açık formül."
slug: "airfryer-ne-kadar-elektrik-harcar"
date: "2026-11-10"
updated: "2026-11-10"
category: "Sürdürülebilirlik"
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 9; BOSLUK.md sürüm 4 #444 "kettle / airfryer / ütü ne kadar elektrik harcar", sürdürülebilirlik). Yazı başına ≤2 belge kuralı nedeniyle #444 iki yazıya bölündü: bu yazı airfryer; kettle + ütü ayrı yazı (kettle-ve-utu-ne-kadar-elektrik-harcar, bu parti). Slug origin/main content/blog/'da ve blog-taslaklar/*/ altında yok (6 Kas fetch, 1.311 dosya). Yakın: airfryer-calismiyor, homend-airfryer-kullanimi, firin-ne-kadar-elektrik-harcar; airfryer tüketim yazısı yok.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-p9.txt): "airfryer ne kadar elektrik" #1 "…harcar", #2 "airfryer saatte ne kadar elektrik harcar", #3 "philips airfryer…", #7 "airfryer elektrik çok yakar mı". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Homend Airfryday 2504H-2505H yağsız fritöz kullanım kılavuzu (14 s. PDF) https://cdn.karaca.com/brands/karaca/4L_Airfryday_KK.pdf md5 5bbcf0292c4f55d918c464602b9484d4 — PDF s.4, 7, 8, 10, 12 · (B) Homend Airfryday 2508H-2509H-2510H-2511H kullanım kılavuzu (52 s. PDF; Türkçe s.1-12) https://cdn.karaca.com/brands/homend-airfryday-kullanim-kilavuzu.pdf md5 1a1126e9947d9a429195927fabba5fd4 — PDF s.7, 9, 10, 12. Homend, Karaca grubunun markası; PDF'ler grubun kendi CDN'inde, homend.com.tr ürün sayfalarından bağlanıyor (dalga-6/7 kaynak kayıtları).
# Philips HD9252 kılavuzu (yerel kaynak-kucuk-ev-sprint) güç değeri vermediği için elendi.
# Rakam kuralı: her kWh yalnız belgedeki güç değerinden (A: 1260-1500 W; B: 1550 W), belgedeki süreden (A: 3-5 dk ön ısıtma, pişirme tablosu; B: 3 dk ön ısıtma, 1-60 dk zamanlayıcı) ve açık formülden (kWh = W ÷ 1000 × saat). Sonuçlar üst sınırdır (anma gücü kesintisiz çekilir varsayımı).
# BİLEREK YAZILMAYANLAR: TL, birim bedel (#46) · belgede olmayan "airfryer fırından yüzde X tasarruflu" oranı · fırın tüketim kıyası (fırın yazısında) · fiyat (#46).
# Alıntı denetimi: airfryer-ne-kadar-elektrik-harcar.KAYNAK.md
kisaCevap: "Homend Airfryday 2504H 1260-1500 W, 2509H 1550 W güçte. Formül kWh = W ÷ 1000 × saat; 1500 W airfryer dakikada en çok 0,025 kWh harcar. Kılavuzdaki 15-20 dakikalık patates kızartması bu modelde en çok 0,375-0,5 kWh eder."
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Airfryer'ın tip etiketi ya da kullanım kılavuzu"]
steps:
  - "Airfryer'ın gücünü (W) kılavuzun son sayfasından ya da cihazın altındaki etiketten bul."
  - "Gücü 1000'e bölerek kilovata (kW) çevir."
  - "Zamanlayıcıya kurduğun süreyi, ön ısıtma dahil, 60'a bölerek saate çevir."
  - "Kilovatı saatle çarp; sonuç kilovatsaattir (kWh)."
  - "Ön ısıtmayı kılavuzun önerdiği süreyle sınırla."
  - "Fırın tarifinde sıcaklığı kılavuzun dediği kadar düşür."
  - "Pişirme bitince yiyeceği hemen çıkar ve fişi prizden çek."
faq:
  - q: "Airfryer saatte ne kadar elektrik harcar?"
    a: "Homend Airfryday 2504H'nin gücü 1260-1500 W, 2509H'nin 1550 W. Kesintisiz bir saat çalışmada 2504H en çok 1,5 kWh, 2509H en çok 1,55 kWh harcar. 2509H'nin zamanlayıcısı 1 ile 60 dakika arasında ayarlanıyor."
  - q: "Airfryer'da patates kızartması kaç kWh harcar?"
    a: "Homend 2504H kılavuzu patates kızartması için 200 °C'de 15-20 dakika veriyor. 1,5 kW × 15 ÷ 60 = 0,375 kWh, 1,5 kW × 20 ÷ 60 = 0,5 kWh; bunlar üst sınır. 3-5 dakikalık ön ısıtma 0,075-0,125 kWh ekler."
  - q: "Airfryer'da ön ısıtma gerekli mi?"
    a: "Homend 2509H kılavuzu malzemeleri eklemeden önce 3 dakika ön ısıtma öneriyor; 2504H kılavuzu en iyi sonuç için 3-5 dakikalık ek süre eklemeni yazıyor. 1550 W'ta 3 dakika ön ısıtma en çok 0,078 kWh eder."
  - q: "Fırın tarifini airfryer'da yaparken neye dikkat etmeliyim?"
    a: "Homend 2509H kılavuzu geleneksel fırın tariflerini uygularken Airfryday'in sıcaklığını 10 °C azaltmanı ve aşırı pişmesini önlemek için yiyecekleri sık sık kontrol etmeni istiyor."
images:
  coverAlt: "Sade airfryer ve yanında priz çizimi"
  steps:
    - "Airfryer'ın altındaki etikete bakan beyaz eldivenli sade siluet el"
    - "Not kağıdına bölme işlemi yazan beyaz eldivenli sade siluet el"
    - "Airfryer'ın zaman düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Hesap makinesine dokunan beyaz eldivenli sade siluet el"
    - "Boş airfryer'ı çalıştırıp bekleyen beyaz eldivenli sade siluet el"
    - "Airfryer'ın sıcaklık düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Airfryer'ın fişini prizden çeken beyaz eldivenli sade siluet el"
---

Homend Airfryday 2504H airfryer'ın gücü 1260-1500 W, Airfryday 2509H'nin gücü 1550 W. Elektrik tüketimi kWh = güç (W) ÷ 1000 × süre (saat) formülüyle hesaplanır. Buna göre 1500 W airfryer çalıştığı her dakikada en çok 0,025 kWh, kesintisiz bir saatte en çok 1,5 kWh harcar.

Bu yazıdaki her rakam iki Homend kılavuzundaki güç değerinden, aynı kılavuzlardaki pişirme ve ön ısıtma sürelerinden ve yukarıdaki formülden geliyor. Sonuçlar üst sınırdır, çünkü cihazın anma gücünü kesintisiz çektiği kabul ediliyor. Kendi airfryer'ının etiketi farklı bir güç yazıyorsa **kendi etiketin esastır.**

> ⚠️ **Sınır.** Bu yazı tüketim hesabını ve kılavuzdaki kullanım önerilerini anlatıyor. Homend elektrik kablosu, fişi ya da cihazın herhangi bir bölümü hasar gördüyse cihazı çalıştırmamanı, hasarlı kabloyu değiştirmeye ya da ek yapmaya çalışmamanı istiyor; bu iş Homend teknik servisinin.

## Airfryer kaç kWh harcar?

Hesap: kWh = W ÷ 1000 × saat. Dakika için saat yerine dakika ÷ 60 yazılır. Süreler Homend kılavuzlarından, rakamlar üç ondalığa yuvarlandı.

| İş ve süre (kılavuzdan) | 2504H, 1500 W | 2509H, 1550 W |
|---|---|---|
| 1 dakika | 1,5 ÷ 60 = 0,025 kWh | 1,55 ÷ 60 = 0,026 kWh |
| Ön ısıtma 3 dakika | 0,075 kWh | 0,078 kWh |
| Ön ısıtma 5 dakika (2504H üst sınırı) | 0,125 kWh | — |
| Karides 10-12 dakika (2504H tablosu) | 0,25-0,3 kWh | — |
| Patates kızartması 15-20 dakika (2504H tablosu) | 0,375-0,5 kWh | — |
| Zamanlayıcı üst sınırı 60 dakika (2509H) | — | 1,55 kWh |

2504H'nin alt güç değeri 1260 W ile dakikada en çok 0,021 kWh, saatte en çok 1,26 kWh çıkıyor.

## Adım adım: airfryer'ın tüketimi nasıl hesaplanır?

**1. Airfryer'ın gücünü (W) kılavuzun son sayfasından ya da cihazın altındaki etiketten bul.** Homend kılavuzlarında güç seviyesi son Türkçe sayfadaki model tablosunda yazıyor. 2504H kılavuzu cihazın altında kullanım için uygun voltaj değerlerinin bulunduğunu, bunların şebekene uygunluğunu kontrol etmeni istiyor.

**2. Gücü 1000'e bölerek kilovata (kW) çevir.** 1500 W = 1,5 kW; 1550 W = 1,55 kW; 1260 W = 1,26 kW.

**3. Zamanlayıcıya kurduğun süreyi, ön ısıtma dahil, 60'a bölerek saate çevir.** 2509H'de zaman ayarı yapınca cihaz çalışmaya başlıyor; zaman 1 ile 60 dakika, sıcaklık 100 ile 210 derece arasında ayarlanıyor. 2504H'de zamanlayıcı uyarı sesi ayarlanan sürenin bittiğini gösteriyor.

**4. Kilovatı saatle çarp; sonuç kilovatsaattir (kWh).** 2504H ile 5 dakika ön ısıtma ve 20 dakika patates kızartması toplam 25 dakika eder: 1,5 × 25 ÷ 60 = 0,625 kWh üst sınır. Yiyecek pişmediyse kılavuz süreye birkaç dakika daha eklemeni söylüyor; eklediğin her dakika 0,025 kWh daha demek.

**5. Ön ısıtmayı kılavuzun önerdiği süreyle sınırla.** 2509H kılavuzu malzemeleri eklemeden önce 3 dakika ön ısıtma öneriyor ve bu süreyi zamanlayıcıyla kurmanı söylüyor. 2504H en iyi sonuç için 3-5 dakikalık ek süre veriyor.

**6. Fırın tarifinde sıcaklığı kılavuzun dediği kadar düşür.** 2509H geleneksel fırın tariflerini uygularken sıcaklığı 10 °C azaltmanı, aşırı pişmeyi önlemek için yiyecekleri sık sık kontrol etmeni istiyor. Eşit kızarma için malzemeleri haznenin altına tek kat yerleştir; üst üste biniyorsa sürenin yarısında sepeti salla.

**7. Pişirme bitince yiyeceği hemen çıkar ve fişi prizden çek.** 2509H aşırı pişmeyi önlemek için pişirme süresi bitince yiyecekleri hemen çıkarmanı istiyor. 2504H kullanılmadığında ve temizlemeden önce cihazı kapatıp fişini çekmeni, parçaları takıp çıkarmadan önce yaklaşık 30 dakika soğumasını beklemeni yazıyor.

## Airfryer ilk kullanımda neden koku yapar?

Homend 2504H kılavuzu airfryer'ı ilk kez kullandığında pişirmenin ilk birkaç dakikasında duman ve hafif bir koku hissedebileceğini, bunun normal olduğunu yazıyor; odayı havalandırmanı istiyor. 2509H ise cihazdan koyu duman çıktığını fark ettiğin anda fişi derhal çekmeni ve hazneyi çıkarmadan önce dumanın durmasını beklemeni söylüyor. Ana üniteyi suya daldırma ve bulaşık makinesinde yıkama; pişirme haznesi ve yağ toplayıcı bulaşık makinesinde yıkanabiliyor. Duman sorunu için [airfryer duman çıkarıyor](/blog/airfryer-duman-cikariyor/) yazısına bak.

## Bu konuda hangi yazılara bakılır?

Homend modelinin kullanımı için [Homend airfryer kullanımı](/blog/homend-airfryer-kullanimi/), fırınla kıyas için [fırın ne kadar elektrik harcar](/blog/firin-ne-kadar-elektrik-harcar/) yazısını kullan.

---

**Kaynak künyesi.** Güç değerleri, ön ısıtma ve pişirme süreleri, zamanlayıcı, sıcaklık ayarı ve ilk kullanım bilgisi Homend Airfryday 2504H-2505H ve Airfryday 2508H-2509H-2510H-2511H kullanım kılavuzlarından alınmıştır. kWh değerleri bu güç ve sürelerden yukarıdaki formülle hesaplanmıştır. Kendi airfryer'ının etiketi farklı bir güç yazıyorsa **kendi etiketin esastır.**

Airfryer'ın ısıtmıyor ya da zamanlayıcı bitince kapanmıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
