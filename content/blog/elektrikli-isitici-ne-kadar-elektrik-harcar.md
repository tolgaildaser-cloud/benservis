---
title: "Elektrikli ısıtıcı ne kadar elektrik harcar? Basit hesap"
description: "Elektrikli ısıtıcı ne kadar elektrik harcar? Kiwi KHT-8490 ve Vestel IS2000 kılavuzundaki güç değeriyle kWh hesabı, kademe, termostat ve zamanlayıcı."
slug: "elektrikli-isitici-ne-kadar-elektrik-harcar"
date: "2026-11-10"
category: "Küçük Ev Aletleri"
updated: "2026-11-10"
kisaCevap: "Elektrikli ısıtıcının tüketimi güç ile sürenin çarpımıdır: kWh = W ÷ 1000 × saat. Kiwi KHT-8490 kılavuzunda orta kademe 1000 W, yüksek kademe 2000 W; yani 1 saatte 1 kWh ya da 2 kWh harcar. Vestel IS2000 kılavuzu gücü 1700–2000 W veriyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı, parti 5 (YK #215; BOSLUK.md sürüm 4 #439 "elektrikli ısıtıcı ne kadar elektrik harcar", sürdürülebilirlik/enerji). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: cihazlar-bekleme-modunda-elektrik-harcar-mi, elektrik-faturasi-neden-yuksek, klima-saatte-ne-kadar-elektrik-harcar (elektrik-harcar serisi, ısıtıcı yok).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "elektrikli ısıtıcı ne kadar elektrik" #1 "…harcar", #2 "elektrikli petek ısıtıcı…", #3 "elektrikli fanlı ısıtıcı…"; "elektrikli ısıtıcı elektrik tüketimi" #1, #2 "…hesaplama", #5 "…günlük elektrik tüketimi". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Kiwi KHT-8490 ısıtıcı kullanım kılavuzu (12 s. PDF) https://static.kiwi.com.tr/media/media/1145/files/media_kht-8490-im-12syf_14082025043045_689de505a1e06.pdf md5 e8b72869cbc1c8de86963b10dd057e8e — PDF s.6, 7 · (B) Vestel IS2000 infrared ısıtıcı kullanım kılavuzu (22 s. PDF) https://statik.vestel.com.tr/webfiles/20264873_k.pdf md5 276726e082d9829162805b212b82a52a — PDF s.12, 13, 14, 18.
# Rakam kuralı: tüm kWh değerleri yalnız belgedeki güç değerinden (W) türetildi, formül metinde açık. Birim ücret ve TL yok (#46).
# BİLEREK YAZILMAYANLAR: ısıtıcı tiplerinin (yağlı, infrared, fanlı) genel verim kıyası (belgede yok) · fatura tutarı, birim ücret (#46) · termostatın tüketimi yüzde kaç azalttığı (belgede yok).
# Alıntı denetimi: elektrikli-isitici-ne-kadar-elektrik-harcar.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Isıtıcının kullanım kılavuzu ya da etiketi", "Hesap makinesi"]
steps:
  - "Kılavuzdan ya da etiketten ısıtıcının gücünü watt olarak bul."
  - "Watt değerini 1000'e bölerek kilovata çevir."
  - "Isıtıcının günde kaç saat çalıştığını yaz."
  - "Kilovatı saatle çarparak günlük kWh tüketimini bul."
  - "Günlük kWh değerini gün sayısıyla çarp."
  - "Kademeyi ve termostatı odaya göre ayarla."
  - "Zamanlayıcıyı kullan ve odadan çıkarken ısıtıcıyı kapat."
faq:
  - q: "2000 W elektrikli ısıtıcı saatte kaç kWh harcar?"
    a: "Formül kWh = W ÷ 1000 × saat. 2000 W tam güçte 1 saat çalışan ısıtıcı 2000 ÷ 1000 × 1 = 2 kWh harcar. Kiwi KHT-8490 kılavuzunda yüksek kademe 2000 W, orta kademe 1000 W yazıyor; orta kademede aynı süre 1 kWh eder."
  - q: "Elektrikli ısıtıcının günlük tüketimi nasıl hesaplanır?"
    a: "Kılavuzdaki gücü 1000'e bölüp kilovat bul, günlük çalışma saatiyle çarp. Örneğin 2000 W bir ısıtıcı günde 5 saat tam güçte çalışırsa 2 × 5 = 10 kWh harcar. Aylık tahmin için bu değeri gün sayısıyla çarparsın."
  - q: "Termostat elektrik tüketimini etkiler mi?"
    a: "Etkiler. Vestel IS2000 kılavuzuna göre oda istenen sıcaklığa ulaşınca termostat devreden çıkar ve cihaz küçük rezistans teliyle çalışmaya devam eder. Bu yüzden gerçek tüketim, ısıtıcıyı sürekli tam güçte varsaydığın hesaptan düşük kalabilir."
  - q: "Fanlı ısıtıcının fanı ne kadar elektrik harcar?"
    a: "Kiwi KHT-8490 kılavuzu fan güç tüketimini 30–40 W olarak veriyor. Aynı formülle 40 W fan 10 saatte 40 ÷ 1000 × 10 = 0,4 kWh eder. Isıtma gücü ise 1000–2000 W olduğu için tüketimin asıl kaynağı rezistanstır."
images:
  coverAlt: "Sade elektrikli ısıtıcı ve yanında termometre çizimi"
  steps:
    - "Isıtıcının yanındaki etikete bakan beyaz eldivenli sade siluet el"
    - "Hesap makinesine dokunan beyaz eldivenli sade siluet el"
    - "Duvar saatine bakan beyaz eldivenli sade siluet el"
    - "Not kâğıdına yazan beyaz eldivenli sade siluet el"
    - "Takvim sayfasını çeviren beyaz eldivenli sade siluet el"
    - "Isıtıcının ayar düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Isıtıcının kumanda panelindeki saat tuşuna basan beyaz eldivenli sade siluet el"
---

Elektrikli ısıtıcının ne kadar elektrik harcadığı tek bir formülle bulunur: tüketim (kWh) = güç (W) ÷ 1000 × çalışma süresi (saat). Kiwi KHT-8490 kılavuzunda orta kademe 1000 W, yüksek kademe 2000 W yazıyor. Bu ısıtıcı yüksek kademede 1 saatte 2 kWh, orta kademede 1 kWh elektrik harcar.

Vestel IS2000 infrared ısıtıcının kılavuzu gücü 1700–2000 W olarak veriyor; tam güçte 1 saatlik çalışma en çok 2 kWh eder. Kendi ısıtıcının değeri kılavuzunda ya da cihaz etiketinde yazar. Kendi ısıtıcının kılavuzu farklı bir değer veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Not.** Bu yazıdaki tüm kWh değerleri yalnız kılavuzdaki güç değerinden formülle hesaplandı. Faturaya etkisini görmek için kendi faturandaki birim değeri kullan.

## Elektrikli ısıtıcı saatte kaç kWh harcar?

| Isıtıcı ve ayar | Kılavuzdaki güç | 1 saat | 5 saat |
|---|---|---|---|
| Kiwi KHT-8490 orta kademe | 1000 W | 1 kWh | 5 kWh |
| Kiwi KHT-8490 yüksek kademe | 2000 W | 2 kWh | 10 kWh |
| Kiwi KHT-8490 fan | 30–40 W | 0,03–0,04 kWh | 0,15–0,2 kWh |
| Vestel IS2000 | 1700–2000 W | 1,7–2 kWh | 8,5–10 kWh |

Tablodaki her hücre aynı formülün sonucudur: örneğin 2000 ÷ 1000 × 5 = 10 kWh.

## Adım adım: elektrikli ısıtıcının tüketimi nasıl hesaplanır?

**1. Kılavuzdan ya da etiketten ısıtıcının gücünü watt olarak bul.** Kiwi KHT-8490 teknik bilgisinde güç tüketimi 1000–2000 W, fan güç tüketimi 30–40 W yazıyor. Vestel IS2000'in teknik özellik tablosunda güç 1700–2000 W, sigorta akımı 16 A.

**2. Watt değerini 1000'e bölerek kilovata çevir.** 2000 W, 2 kW eder; 1000 W, 1 kW eder. Kilovat saatte (kWh) tüketim bu kilovat değerinden hesaplanır.

**3. Isıtıcının günde kaç saat çalıştığını yaz.** Hangi kademede kaç saat açık kaldığını ayrı ayrı not et. Kiwi'de orta ısıtma düğmesi 1000 W, yüksek ısıtma düğmesi 2000 W çalıştırır; iki kademenin süresini karıştırma.

**4. Kilovatı saatle çarparak günlük kWh tüketimini bul.** Örnek: günde 3 saat yüksek kademe ve 2 saat orta kademe çalışan Kiwi KHT-8490 için hesap 2 × 3 + 1 × 2 = 8 kWh eder.

**5. Günlük kWh değerini gün sayısıyla çarp.** Aynı kullanım 30 gün sürerse 8 × 30 = 240 kWh olur. Bu, ısıtıcının her saat tam belirttiğin kademede çalıştığı varsayımıyla bulunan üst sınırdır.

**6. Kademeyi ve termostatı odaya göre ayarla.** Vestel IS2000'de termostat oda istenen sıcaklığa ulaşınca devreden çıkar; büyük rezistans teli kızarıklığını kaybeder ve cihaz küçük rezistans teliyle çalışmaya devam eder. Kiwi'de ayar sıcaklığı 16–40°C arasında, varsayılan değer 26°C. Vestel çabuk soğuyan büyük odada sıcaklığı istediğinden 2–3°C yüksek ayarlamanı öneriyor.

**7. Zamanlayıcıyı kullan ve odadan çıkarken ısıtıcıyı kapat.** Kiwi KHT-8490'da zamanlayıcı 0–12 saat arasında ayarlanır ve ısıtıcı ayarlanan süreye göre kapanır. Vestel enerji tasarrufu için kullanmadığında cihazı kapatmanı öneriyor.

## Orta kademe ile yüksek kademe arasında ne fark var?

Kiwi KHT-8490'da orta kademe 1000 W, yüksek kademe 2000 W çeker; aynı sürede orta kademe yüksek kademenin yarısı kadar kWh harcar. Kılavuza göre ısıtıcı açıldığında orta sıcaklıkta hava üfler. Kapatıldığında 30 saniye soğuk hava üfleyip kapanır. Kılavuz odanın kaç dakikada ısınacağını yazmadığı için kademe kararını termostatla ve kendi odanla ver.

## Isıtıcıyı başka bir cihazla aynı prize takabilir miyim?

Vestel IS2000 kılavuzu elektrik sistemini aşırı yükleyebileceği için ısıtıcıyla başka bir yüksek kapasiteli cihazın aynı anda aynı prizden çalıştırılmasını önermiyor. 2000 W gibi yüksek güç çeken bir cihaz için bu uyarı tüketimden bağımsız bir güvenlik kuralıdır. Isıtıcının üstünü de örtme; Kiwi aşırı ısınmayı önlemek için bunu yasaklıyor.

## Ömrü dolan ısıtıcı nereye atılır?

Kiwi ürünün AEEE yönergelerine uygun geri dönüştürülebilir malzemeler içerdiğini, sınıflandırılmamış atık olarak atılmamasını yazıyor. Vestel de cihazın diğer atık türlerinden ayrılıp geri dönüşüme kazandırılmasını istiyor; toplama noktasını satıcıya ya da yerel kuruluşa sorabilirsin.

## Bu konuda hangi yazılara bakılır?

Bekleme modundaki cihazların tüketimi için [cihazlar bekleme modunda elektrik harcar mı](/blog/cihazlar-bekleme-modunda-elektrik-harcar-mi/), klima ile karşılaştırma için [klima saatte ne kadar elektrik harcar](/blog/klima-saatte-ne-kadar-elektrik-harcar/) yazısına bak. Fatura yükseldiyse [elektrik faturası neden yüksek](/blog/elektrik-faturasi-neden-yuksek/) sayfası yol gösterir.

---

**Kaynak künyesi.** Güç değerleri, kademe, termostat, zamanlayıcı ve geri dönüşüm bilgisi Kiwi KHT-8490 kullanım kılavuzundan ve Vestel IS2000 infrared ısıtıcı kullanım kılavuzundan alınmıştır; kWh değerleri bu güç değerlerinden formülle hesaplanmıştır. Kendi ısıtıcının kılavuzu farklı bir değer veriyorsa **kendi kılavuzun esastır.**

Isıtıcın beklenenden fazla tüketiyor ya da ısıtmıyor gibi görünüyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
