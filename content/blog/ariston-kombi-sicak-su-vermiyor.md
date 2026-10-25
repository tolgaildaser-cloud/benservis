---
title: "Ariston kombi sıcak su vermiyor: mod, ayar ve kod"
description: "Ariston kombi sıcak su vermiyorsa: OFF ve Yaz/Kış modu, sıcak su sıcaklığı, Comfort işlevi, basınç ve ekrandaki kod. CLAS One ve GENUS One kılavuzu."
slug: "ariston-kombi-sicak-su-vermiyor"
date: "2026-10-24"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı D (YK #182 Dalga 7, küme Y5 — Dalga 6 yedeği). origin/main 26ffd7d'de Ariston slug'ları: ariston-kombi-resetleme, ariston-kombi-baca-isareti-yaniyor, ariston-sofben-a1-hatasi; "sıcak su" slug'ı/başlığı yok.
#   Genel kombi-sicak-su-vermiyor ve diğer markaların sıcak su yazıları başka marka sorgusu; metin alınmadı (Jaccard KAYNAK'ta).
# Arama kanıtı (bu koşu 13:46 +03, ham: Y5/_kaynak/ot.tsv): "ariston kombi s" → 2. "ariston kombi sıcak su vermiyor"; "ariston kombi sıcak" → 1. "ariston kombi sıcak su vermiyor". GSC: satır yok (www-3..6'da "ariston" 0).
# Belge zinciri (bu koşu 19:57 +03): ariston.com/it-it ürün sayfaları (200) + www.ariston.com/it-it/product-downloads-index.json (200, iki PDF adı geçiyor) → www.ariston.com/content/dam/ariston/it/products/boilers/condensation/... PDF (200 application/pdf).
#  (A1) CLAS One manuale d'uso IT, 12 s., md5 e53e196bcb92c98604f6c57482cc50a7 — s.5 (tuşlar), s.6 (basınç, mod, sıcak su ayarı), s.7 (OFF), s.8 (Comfort), s.9 (durma türleri, tablo)
#  (A3) GENUS One Net manuale d'uso IT, 20 s., md5 ffb6e0a34620675fdaef9532a1006d51 — s.5, s.6, s.7, s.8, s.10, s.11, s.12 (Comfort seçenekleri, tatil), s.16
# BİLEREK YAZILMAYANLAR: sıcak su sensörü, eşanjör, üç yollu vana teşhisi ve değişimi (#31) · gaz tesisatı · 103–107 tekil anlamları (tabloda hep "yetersiz sirkülasyon") · fiyat (#46) · Türkiye modeline özgü panel.
# Alıntı denetimi: ariston-kombi-sicak-su-vermiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanım kılavuzu", "Bir bez"]
steps:
  - "Ekranda OFF yazıp yazmadığına bak; kapalıysa ON/OFF tuşuyla aç."
  - "MODE tuşuyla Kış ya da Yaz modunu seç; tanklı modelde Yalnız ısıtma modunu kapat."
  - "Sıcak su sıcaklığını sıcak su tuşlarıyla yükselt ve yanıp sönen değeri kontrol et."
  - "Soğuk tesisatta basıncın 0,6 ile 1,5 bar arasında olduğuna bak; düşükse kılavuzdaki doldurma sırasını uygula."
  - "Ekranda kod varsa not et; RESET isteyen kodda RESET tuşuna bir kez bas."
  - "Su geç ısınıyorsa Comfort işlevini aç ya da ayarını değiştir."
  - "Sıcak suyu aç ve alev göstergesini izle; yanmıyorsa ya da kod geri geliyorsa servisi ara."
faq:
  - q: "Ariston kombi petekleri ısıtıyor ama sıcak su vermiyor, neden?"
    a: "Isıtma çalıştığına göre kombi açık ve gaz geliyor demektir (çıkarım). Önce sıcak su sıcaklık ayarına ve ekranda kod olup olmadığına bak. Ayarlar doğruysa sıcak su tarafındaki parçalar (sensör, eşanjör, vana) servis işidir."
  - q: "Yaz modunda sıcak su gelir mi?"
    a: "Evet. CLAS One ve GENUS One kılavuzlarına göre Yaz modunda kombi yalnız sıcak su üretir, Kış modunda ısıtma ve sıcak su birlikte çalışır. Sıcak suyu kesen OFF konumudur."
  - q: "Ariston kombide sıcak su kaç dereceye ayarlanır?"
    a: "Kombi tipi modellerde sıcak su 36 ile 60 °C arasında ayarlanıyor. Harici tanka bağlı System modellerde aralık 40 ile 60 °C. Seçilen değer ekranda yanıp sönerek görünüyor."
  - q: "Comfort işlevi ne işe yarar?"
    a: "Kılavuza göre Comfort, kombi boşta beklerken ikincil eşanjörü sıcak tutar ve musluğu açınca bekleme süresini kısaltır. GENUS One'da kapalı, zamanlı (son kullanımdan sonraki 30 dakika) ya da sürekli açık seçilebiliyor."
  - q: "Ekranda 108 yazıyor, sıcak suyu etkiler mi?"
    a: "108 tesisatta su eksikliği; kombi güvenlik için duruyor ve bu sırada sıcak su da gelmez (çıkarım). Doldurma musluğu ve MODE tuşuyla basıncı 0,6–1,5 bara getir. Sık tekrarlıyorsa su kaçağı olabilir, ustaya baktır."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve altındaki boru bağlantıları"
  steps:
    - "Kombi ön panelinde kapalı durumu gösteren ekran"
    - "Kombi panelinde çalışma modunu değiştiren tuş"
    - "Kombi ekranında yanıp sönen sıcak su sıcaklığı"
    - "Kombinin altındaki doldurma musluğu ve basınç göstergesi"
    - "Kombi ekranında görünen arıza kodu"
    - "Kombi ekranında yanan konfor yazısı"
    - "Lavabo bataryasından akan buharlı sıcak su"
---

Ariston kombin çalışıyor gibi görünüyor ama musluktan sıcak su gelmiyor ya da su bir türlü ısınmıyor. Kombi bozulmuş olmayabilir. Çoğu zaman sebep çalışma modu, sıcak su ayarı, tesisat basıncı ya da ekranda bekleyen bir kod. Bu yazı Ariston'un İtalya sitesinde yayımlanan CLAS One ve GENUS One Net kullanım kılavuzlarına dayanıyor (kılavuzun İtalyanca baskısı, alıntılar Türkçeye çevrildi). Türkiye'de satılan modelde tuş yerleri ve ekran yazıları farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda OFF varsa aç. Mod Kış ya da Yaz olmalı. Sıcak su ayarı 36–60 °C arasında. Basınç soğukken 0,6–1,5 bar. Kod varsa not et, RESET isteyende bir kez bas. Su geç geliyorsa Comfort. Alev yoksa ya da kod dönüyorsa servis.

## Belirti ve kılavuzdaki karşılığı

| Belirti | Kılavuzdaki karşılığı | Kim |
|---|---|---|
| **Ekranda OFF** | Kombi kapalı, yalnız donma koruması açık | 🛠️ Sen |
| **Su ılık** | Sıcak su ayarı düşük | 🛠️ Sen |
| **Sıcak su geç geliyor** | Comfort kapalı | 🛠️ Sen |
| **Tanklı modelde hiç sıcak su yok** | Yalnız ısıtma modu seçili | 🛠️ Sen |
| **108** | Tesisatta su eksik, doldurma gerekiyor | 🛠️ Sen |
| **501** | Alev yok; RESET isteniyor | 🛠️ Bir kez, sonra 🔧 |
| **305, 306, 307** | Kart hatası | 🔧 Servis |

## Adım adım: Ariston kombide sıcak suyu geri getirmek

**1. Kombi açık mı?** CLAS One kılavuzuna göre ON/OFF tuşuna basınca kombi kapanıyor ve ekranda **OFF** görünüyor; bu durumda yalnız donma koruması çalışıyor, sıcak su gelmez (çıkarım). Tuşa yeniden bas. Ekran açılınca seçili modu ve ayarlı sıcaklıkları gösteriyor. GENUS One'da açılışta kısa bir başlatma çubuğu geçiyor; bitmesini bekle.

**2. Modu kontrol et.** Mod MODE tuşuyla seçiliyor. **Kış**: ısıtma ve sıcak su birlikte. **Yaz**: yalnız sıcak su. Yani yazın sıcak su için kombiyi Yaz'a almak yeterli. Harici bir tanka bağlı System modellerinde üçüncü bir seçenek var: **Yalnız ısıtma (tank devre dışı)**. Bu seçiliyse tanktaki su ısıtılmıyor. Kış ya da Yaz'a dön.

**3. Sıcak su sıcaklığını yükselt.** Sıcak su ayarı panelde ayrı +/- tuşlarıyla yapılıyor. Kombi tipi modelde aralık **36–60 °C**, tanklı System modelinde **40–60 °C**. Seçtiğin değer ekranda yanıp sönüyor. Biri ayarı en alta indirdiyse su yalnız ılık gelir. Kılavuz yanık riskine karşı sıcak su çıkışına termostatik vana takılmasını öneriyor.

**4. Basıncı kontrol et.** Kılavuz basıncın ekrandan düzenli izlenmesini istiyor: tesisat soğukken **0,6 ile 1,5 bar** arası. Düşükse ekran doldurma ister; GENUS One'da **108 – Tesisatı doldur** yazar. Sıra şöyle: kombinin altındaki doldurma musluğunu aç, MODE tuşuna 5 saniye bas (ekranda hava alma yazısı çıkar). Gösterge 0,6–1,5 bar arasına gelince musluğu kapat, MODE'a yeniden bas. Basınç sık düşüyorsa tesisatta kaçak olabilir; kılavuz tesisatçı çağırmanı istiyor. Ayrıntı [kombi basınç düşüyor](/blog/kombi-basinc-dusuyor/) yazısında.

**5. Ekrandaki kodu oku.** Kılavuz iki tür durma tarif ediyor. Kendiliğinden kalkan **güvenlik durmasında** sebep ortadan kalkınca kombi yeniden çalışıyor. Kalkmayan **çalışma blokajında** (ör. **501 – alev yok**) kombi ancak RESET tuşuyla açılıyor. Kılavuza göre 15 dakikada en fazla 5 RESET yapılabiliyor. Gaz vanasının açık olduğundan emin ol. Birkaç denemeden sonra kod geri geliyorsa dur; RESET sırası [Ariston kombi resetleme](/blog/ariston-kombi-resetleme/) yazısında.

**6. Comfort işlevine bak.** Kılavuza göre **Comfort**, kombi boşta beklerken **ikincil eşanjörü sıcak tutuyor** ve musluğu açtığında bekleme süresini kısaltıyor. CLAS One'da Comfort tuşuna basınca ekranda COMFORT yazısı yanıyor. GENUS One'da menüde üç seçenek var: kapalı; zamanlı, yani son kullanımdan sonraki 30 dakika boyunca; ya da gün boyu açık. Su geç geliyorsa bunu aç.

**7. Musluğu açıp kombiyi izle.** Sıcak su musluğunu aç. CLAS One ekranında brülör yanınca alev simgesi ve kullanılan gücü gösteren çizgiler çıkıyor; GENUS One'da mavi alev ışığı yanıyor. Mod, ayar ve basınç doğruyken alev hiç belirmiyorsa ya da kod hemen geri geliyorsa kombiyi kapat, harici şalteri OFF'a al, gaz vanasını kapat ve servisi ara. Kılavuzun talimatı bu.

## Tanklı modelde sıcak su çok sıcaksa

System modellerinde fabrikadan açık bir **dezenfeksiyon işlevi** var: kombi her elektrik verildiğinde ve her 30 günde bir tanktaki suyu bir saat 60 °C'de tutuyor. Bu sırada CLAS One ekranında **Ab**, GENUS One'da "Termik sanitasyon sürüyor" yazıyor. Kılavuz bu sırada suyun yakabileceği konusunda uyarıyor. Su sonra ayarlı sıcaklığa iniyor.

GENUS One'da bir de **tatil işlevi** var. Kılavuza göre açıkken sistem, belirlediğin dönüş tarihinin gece yarısına kadar donma koruması modunda kalıyor. Tatilden döndüysen ve sıcak su yoksa işlevin kapandığını kontrol et.

## Ne zaman servis

- Mod, sıcaklık ve basınç doğru, ama musluk açılınca alev yanmıyorsa
- 501 ya da başka bir kod RESET'ten sonra geri geliyorsa
- Ekranda 305, 306 ya da 307 kart hatası varsa
- Petekler ısınıyor ama sıcak su hiç ısınmıyorsa
- Basınç sık sık düşüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Mod, ayar, Comfort, doldurma musluğu ve tek RESET sende; sıcak su sensörü, eşanjör, üç yollu vana, kart ve gaz tarafı yetkili servisin. Gaz kokusu alırsan kılavuzun dediği gibi ana gaz vanasını kapat, pencereleri aç ve teknisyene haber ver. Genel kontrol listesi [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısında.

## Servisi aramadan önce kısa özet

1. Model ne (CLAS One, GENUS One ya da başka)?
2. Ekranda hangi mod ve hangi kod var?
3. Basınç soğukken kaç bar?
4. Petekler ısınıyor mu?
5. RESET'e kaç kez bastın?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
