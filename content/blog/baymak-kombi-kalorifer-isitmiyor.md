---
title: "Baymak kombi kalorifer ısıtmıyor"
description: "Baymak kombi petekleri ısıtmıyorsa önce ekrandaki radyatör sembolüne, ısıtma sıcaklığına ve su basıncına bak; Baymak kılavuzlarından."
slug: "baymak-kombi-kalorifer-isitmiyor"
date: "2026-10-02"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 07:1x · Kaynak denetimi: baymak-kombi-kalorifer-isitmiyor.KAYNAK.md (bu dosyanın yanında)
# Belgelerin hepsi baymak.com.tr. Bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200; PDF md5'leri 28 Eyl yerel
# kopyasıyla birebir. pdftotext -layout, sayfa = PDF sayfası. Web araması KULLANILMADI. Kardeş taslak: baymak-kombi-sicak-su-vermiyor (aynı belgeler).
# A) Duotec 24-28-33-42-45 · 300032122 · https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf
#    HTTP 200 · 28 sf · md5 723546ecd63c99eaecb5c3143c687c2a
#    s.12 K1 Reset, K2 ON/OFF, K3/K4 merkezi ısıtma azaltma/arttırma · s.13 5.1.1 "ekranda radyatör ve musluk sembolünün göründüğünden emin olun",
#    "Kombi devreye girdiğinde ekranda alev sembolü görülecektir. Merkezi ısıtma modunda çalışırken ekrandaki radyatör sembolü yanıp sönecektir.",
#    "Kullanım suyu önceliğinden dolayı cihaz merkezi ısıtmada çalışıyorsa bile kullanım suyu ihtiyacı olduğunda kullanım suyu moduna geçecektir."
#    · 5.1.2 "Yaz konumunda(Sadece kullanım suyu)" · s.14 0,7–1,5 bar, "doldurma musluğunu çok yavaş açınız", sık tekrar → servis
#    · s.15 0,7 altı doldur, 0,5 altı çalışmaz, su kaçağı → servis · s.17 RESET (K1) + "Sorun devam ederse mutlaka yetkili servisi arayınız.", F37
#    · s.22 enerji önerileri "Radyatörleri örtmeyin. Radyatörlerin önüne perde asmayın."
# B) Duotec Compact 24 · 300032317 · https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 sf · md5 df4c42a6604e3ec39b2d152606464cb0 · aynı cümleler s.12-15, s.17
# C) Eco CT 20 Premix · 300035751 · https://www.baymak.com.tr/media/4887/baymak-eco-ct-20-premix-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 sf · md5 e43149e6b888491b718ae20b1251eb37 · s.13 K1 arttırma / K2 azaltma (merkezi ısıtma), K4 Reset, K5 ON/OFF · s.14 kış/yaz
#    · s.15-16 basınç · s.18 "RESET (K1)" ⚠️ belge içi çelişki → reset tuşuna numara verilmedi
# D) Duotec DHW · https://www.baymak.com.tr/media/5477/baymak-duotec-dhw-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 sf · md5 aad24ed8ef67c8ab27204a4864bde308 · s.14 "5.1.1 Merkezi ısıtma konumu", K3/K4, K2 · s.15-16 basınç · s.18 kodlar
# E) Lunatec · 300036785 · https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 36 sf · md5 dec11a69fd55c366d613da7ba31d6d98 · s.4 0,8 / 1–1,5 bar · s.18 açık mavi musluk, elle, 1–1,5'te kapat
#    · s.22 sol kalorifer düğmesi "ayar aralığı 25-80 °C", F3 On/Off (Standby), F4 onay · s.23-24 6.2.2 düğme + F4 onay · s.24 6.2.4 ısıtma modu
#    tuşla "kalorifer işareti kaybolana kadar" ya da düğme "OFF yazısı görülene kadar" saat yönü tersine kapatılır · s.28 H geçici / E kalıcı,
#    1 sn RESET · s.29 H.02.07, H.01.18 "Su sirkülasyonu yok (geçici)" · s.31 E.01.17 "Su sirkülasyonu eksikliği (kalıcı)"
# W) Baymak "Kombi Neden Suyu Isıtmaz?" · https://www.baymak.com.tr/kullanici-konfor-kilavuzu/kombi-neden-suyu-isitmaz · HTTP 200
#    md5 057efc6ab1b93f15cb3beb333e8096e6 · "Su basıncının kritik seviyelere düşmesi durumunda kombi hem suyu ısıtmaz hem petekleri çalıştırmaz."
# ⛔ Bilerek YAZILMAYANLAR: gaz vanası adımı (görev talimatı) · radyatör hava alma (Lunatec'te montaj bölümü 3.7, purjör vanası, kurulumcuya
#    yönelik; diğer kılavuzlarda kullanıcıya tarif yok) · DEAIR / manuel havalandırma (H/E kod tablosunda, servis kontrol listesi) · H.01.18 ve
#    E.01.17'nin "kontrol/çözüm" sütunu (pompa, sensör, eşanjör — servis) · genleşme tankı · oda termostatı ayarı (kılavuzlarda yalnız enerji
#    tasarrufu bağlamında; arıza giderme talimatı yok) · "kullanılmayan odalarda radyatörleri kapatın" önerisinden çıkarım · maliyet (#46) · kapak (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ekranda radyatör sembolü olup olmadığına bak; yalnız musluk sembolü varsa kombi yaz konumundadır."
  - "Yaz konumundaysa ON/OFF tuşuna radyatör ve musluk sembolü birlikte görünene kadar bas."
  - "Lunatec'te soldaki kalorifer düğmesi ekranda OFF gösteriyorsa düğmeyi saat yönünde çevir ve F4 ile onayla."
  - "Merkezi ısıtma sıcaklığını kontrol et; düşükse kılavuzundaki arttırma tuşuyla ya da Lunatec'te sol düğmeyle yükselt."
  - "Kombi soğukken su basıncını oku; Duotec ve Eco CT 20'de 0,7–1,5 bar, Lunatec'te 1–1,5 bar olmalı."
  - "Basınç düşükse doldurma musluğunu elle ve çok yavaş aç, değer aralığa gelince kapat."
  - "Ekranda hata kodu varsa RESET tuşuna bir kez bas; kod geri gelirse yetkili servisi ara."
  - "Konum, sıcaklık ve basınç doğru olduğu hâlde petekler ısınmıyorsa Baymak yetkili servisini ara."
faq:
  - q: "Baymak kombi sıcak su veriyor ama petekleri ısıtmıyor, neden?"
    a: "Duotec ve Eco CT 20 kılavuzlarında kombinin iki çalışma konumu var. Yaz konumu kılavuzda 'sadece kullanım suyu' diye geçiyor: ekranda yalnız musluk sembolü görünür, kombi yalnız sıcak su hazırlar. Petekler için kış konumu gerekir; ON/OFF tuşuna ekranda radyatör ve musluk sembolü birlikte görünene kadar basılır. Lunatec'te ısıtma ayrıca soldaki düğme OFF'a çevrilerek de kapatılabiliyor."
  - q: "Sıcak su kullanırken petekler neden soğuyor?"
    a: "Baymak kılavuzlarına göre bu kombilerde sıcak kullanım suyu önceliklidir. Duotec kılavuzunun cümlesi: kullanım suyu önceliğinden dolayı cihaz merkezi ısıtmada çalışıyorsa bile kullanım suyu ihtiyacı olduğunda kullanım suyu moduna geçer. Yani musluk açıkken kombi bir süre ısıtmaya değil sıcak suya çalışır."
  - q: "Kombinin ısıtmaya çalıştığını ekrandan nasıl anlarım?"
    a: "Duotec ve Eco CT 20 kılavuzlarına göre kombi devreye girdiğinde ekranda alev sembolü görünür; merkezi ısıtma modunda çalışırken radyatör sembolü yanıp söner. Kullanım suyu hazırlarken ise musluk işareti yanıp söner. Lunatec'in sembol listesinde de merkezi sistem ısıtma talebi ikonu yanıp sönüyorsa ısı talebi oluştuğu anlamına geliyor."
  - q: "Lunatec'te H.01.18 kodu ne demek?"
    a: "Lunatec kılavuzunun geçici arızalar tablosunda H.01.18 'Su sirkülasyonu yok (geçici)' olarak geçiyor; kalıcı karşılığı E.01.17 'Su sirkülasyonu eksikliği (kalıcı)'. H ile başlayan kodlarda kombi çalışmaz, sebep giderilince kod kaybolur. Tablonun bu kodlar için saydığı kontroller pompa, sirkülasyon ve sensörlerle ilgili; bunlar yetkili teknik servisin işi."
images:
  coverAlt: "Oturma odasında pencerenin altında beyaz bir panel radyatör ve önünde dokunarak sıcaklığını yoklayan bir el"
---

Musluktan sıcak su geliyor ama petekler soğuk. Baymak kombilerde bu tablo çoğu zaman bir arızadan önce bir **ayarla** ilgili, çünkü Baymak'ın Duotec ve Eco CT 20 kullanma kılavuzları kombiye iki ayrı çalışma konumu veriyor: ısıtma ve sıcak suyun birlikte çalıştığı **kış konumu** ve kılavuzun deyişiyle **"sadece kullanım suyu"** veren **yaz konumu.** Lunatec'te ise ısıtma düğmeden ayrıca kapatılabiliyor. Bu yazıda önce ekranın ne söylediğine, sonra ısıtma sıcaklığına ve su basıncına bakıyoruz; hepsi Baymak'ın kendi kılavuzlarından.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda radyatör sembolü yoksa kombi yaz konumunda; ON/OFF ile kış konumuna al. Lunatec'te sol düğme OFF ise aç ve onayla. Isıtma sıcaklığı düşükse yükselt. Kombi soğukken basınç 0,7–1,5 bar (Lunatec 1–1,5); düşükse yavaşça doldur. Kod varsa bir kez RESET. Hepsi doğruysa yetkili servis.

⛔ Gaz kokusu alıyorsan bu yazıyı bırak ve kılavuzunun gaz kokusu bölümüne uy; Lunatec kılavuzu hiçbir elektrikli cihazı çalıştırmamanı, camları açmanı ve Baymak Yetkili Teknik Servis Merkezi'ni aramanı istiyor.

## Adım adım: evde denenecekler

**1. Ekranda radyatör sembolü var mı?** Duotec, Duotec Compact ve Eco CT 20 kılavuzlarına göre kış konumunda ekranda **radyatör ve musluk sembolü birlikte** görünür. Yalnız musluk sembolü görüyorsan kombi **yaz konumunda**, yani yalnız sıcak su veriyor; petekler bu konumda ısınmaz.

**2. Kış konumuna al.** Kılavuzun tarifi: ON/OFF tuşuna bas ve ekranda radyatör ve musluk sembolünün göründüğünden emin ol. ON/OFF tuşu Duotec, Duotec Compact ve Duotec DHW'de **K2**, Eco CT 20'de **K5.** (Duotec DHW kılavuzu bu konuma "merkezi ısıtma konumu" diyor.)

**3. Lunatec'te sol düğme OFF mu?** Lunatec'in panelinde iki çevirmeli düğme var: soldaki kalorifer devresi, sağdaki kullanım suyu. Kılavuza göre ısıtma modu iki yoldan kapatılabiliyor: tuşa ekrandaki kalorifer işareti kaybolana kadar basarak ya da sol düğmeyi saatin tersi yönünde ekranda **OFF** görünene kadar çevirerek. Ekranda OFF ya da kalorifer işaretinin yokluğunu görüyorsan sol düğmeyi saat yönünde çevirip bir değer seç ve **F4** tuşuyla onayla. Kombinin tamamı kapalıysa (ekranda yalnız OFF), kalorifer ve musluk sembolleri belirene kadar açma/kapama tuşuna bas.

**4. Isıtma sıcaklığını kontrol et.** Kombi ısıtmada ama petekler ılıksa ayarlı sıcaklığa bak. Tuşlara bastığında ekranda ayarlanan değer görünür:

- **Duotec, Duotec Compact, Duotec DHW:** arttırmak için **K4**, azaltmak için **K3.**
- **Eco CT 20:** arttırmak için **K1**, azaltmak için **K2.**
- **Lunatec:** sol düğme saat yönünde çevrilince sıcaklık artar; ayar aralığı **25–80 °C**, değer F4 ile onaylanır.

Kombi devreye girdiğinde ekranda **alev sembolü** görünür; merkezi ısıtmada çalışırken **radyatör sembolü yanıp söner.** Bu iki işareti görüyorsan kombi ısıtmaya çalışıyor demektir.

**5. Su basıncını soğukken oku.** Baymak'ın kendi sitesindeki "Kombi Neden Suyu Isıtmaz?" yazısına göre su basıncı kritik seviyelere düşerse kombi **petekleri çalıştırmaz.** Kılavuz değerleri:

- **Duotec, Duotec Compact, Duotec DHW, Eco CT 20:** kombi soğukken **0,7–1,5 bar**; 0,7 barın altındaysa su doldurulmalı, 0,5 barın altında kombi çalışmaz.
- **Lunatec:** minimum 0,8 bar, önerilen **1–1,5 bar.**

**6. Basınç düşükse yavaşça doldur.** Duotec ve Eco CT 20 kılavuzları doldurma musluğunu açarak basıncın yükseltilmesini ve hava yapmaması için musluğun **çok yavaş** açılmasını istiyor. Lunatec'te doldurma musluğu kombinin altındaki **açık mavi** musluk; elle, saat yönünün tersine yavaşça çevrilir, 1–1,5 bara gelince kapatılır ve sızıntı olup olmadığına bakılır. Düşük basıncın kodu Duotec ve Eco CT 20'de **F37**, Lunatec'te **H.02.07**; ayrıntı [Baymak kombi F37 hatası](/blog/baymak-kombi-f37-hatasi/) sayfasında.

**7. Kod varsa bir kez RESET.** Duotec ve Eco CT 20'nin talimatı: kombiyi resetlemek için RESET tuşuna bas, sorun devam ederse mutlaka yetkili servisi ara. Lunatec'te kalıcı (E ile başlayan) arızalar için RESET tuşuna 1 saniye basılır; H ile başlayan geçici kodlar sebep giderilince kendiliğinden kaybolur, kombi bazı durumlarda 10 dakika sonra çalışır.

**8. Hepsi doğruysa servis.** Kombi kış konumunda, ısıtma sıcaklığı makul, basınç aralıkta ve yine de petekler ısınmıyorsa ayar turu bitmiştir. Baymak'ın uyarısıyla dışarıdan gözlemlenemeyen bir sorunda kombiye müdahale edilmez; yetkili servisi ara.

## Petekler soğuk kalırken ekranda ne görebilirsin

| Ekranda | Baymak kılavuzuna göre anlamı | Ne yapılır |
|---|---|---|
| Yalnız musluk sembolü | Yaz konumu, sadece kullanım suyu | ON/OFF ile kış konumuna al |
| Radyatör sembolü yanıp sönüyor, alev sembolü var | Kombi merkezi ısıtmada çalışıyor | Isıtma sıcaklığına ve basınca bak |
| Musluk işareti yanıp sönüyor | Kombi kullanım suyu modunda; sıcak su önceliklidir | Kılavuzdaki normal davranış; arıza değil |
| F37 / H.02.07 | Düşük su basıncı | Soğukken oku, yavaşça doldur |
| H.01.18 (Lunatec) | Su sirkülasyonu yok (geçici) | Kod kaybolmuyorsa yetkili servis |
| E.01.17 (Lunatec) | Su sirkülasyonu eksikliği (kalıcı) | Bir kez RESET; tekrar ederse yetkili servis |

📌 Baymak kılavuzlarının enerji tasarrufu önerileri arasında radyatörlerin örtülmemesi ve önlerine perde asılmaması da var.

## Ne zaman servis

- RESET'ten sonra kod geri geliyorsa.
- Basınç düşmesi sık tekrarlanıyorsa; Duotec ve Eco CT 20 kılavuzlarına göre kombi sürekli basınçlandırma istiyorsa su kaçağı olabilir, yetkili servis bilgilendirilmeli.
- Lunatec'te H.01.18 kaybolmuyorsa ya da E.01.17 tekrar ediyorsa.
- Kombi kış konumunda, sıcaklık ve basınç doğru olduğu hâlde petekler soğuk kalıyorsa.

Musluktan da sıcak su gelmiyorsa [Baymak kombi sıcak su vermiyor](/blog/baymak-kombi-sicak-su-vermiyor/) yazısına, kodların tam listesi için [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) sayfasına bak. Marka bağımsız olarak peteklerin neden ısınmadığını [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
