---
title: "Baymak kombi resetleme: reset tuşu ve sınırı"
description: "Baymak kombi resetleme: Duotec'te K1, Eco CT'de Reset tuşu, Lunatec'te F2. Hangi kodda reset işe yarar, F13 kilidi ve servis sınırı, Baymak kılavuzundan."
slug: "baymak-kombi-resetleme"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme D, fork C). Konu seçimi: origin/main'de baymak-kombi-resetleme yok.
#   Yakın sayfalar: baymak-kombi-ariza-kodlari ("Reset nasıl yapılır?" alt başlığı), baymak-kombi-sembolleri-ve-anlamlari ("Arıza kodu nasıl
#   görünür, reset nasıl yapılır" alt başlığı), baymak-kombi-f13-hatasi (reset kilidi). Hiçbiri başlıkta "resetleme" sorgusunu hedeflemiyor;
#   bu yazı reset işleminin kendisi + hangi kodda işe yaramadığı. YK/FE aynı sorgu sayarsa çıkarılmalı (KAYNAK.md notu).
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "baymak kombi" → 1. "…servisi", 2. "baymak kombi resetleme", 3. "…fiyatları 2026";
#   "baymak kombi reset" → 1. "baymak kombi resetleme", 2. "…resetleme yapmıyor", 3. "…reset düğmesi nerede", 4. "…reset tuşu".
# GSC (https___www-6, 7 gün): Baymak + reset sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile baymak.com.tr'den yeniden indirildi; hepsi HTTP 200 application/pdf, md5 yerel kopyalarla birebir.
#  (D) Duotec 24-28-33-42-45 300032122  https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf  28 s.  md5 723546ecd63c99eaecb5c3143c687c2a
#  (K) Duotec Compact 24 300032317  https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf  27 s.  md5 df4c42a6604e3ec39b2d152606464cb0
#  (E) Eco CT 20 Premix 300035751  https://www.baymak.com.tr/media/4887/baymak-eco-ct-20-premix-tam-yogusmali-kombi-kullanma-kilavuzu.pdf  28 s.  md5 e43149e6b888491b718ae20b1251eb37
#  (L) Lunatec  https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf  36 s.  md5 dec11a69fd55c366d613da7ba31d6d98
# Gaz kokusu D s.4, L s.4 · K1 Reset D s.12, K s.12 · E panelinde K4 Reset s.13 (E s.18 metni "RESET (K1)" diyor: belge içi tutarsızlık, yazıda tuş adı
#   "Reset tuşu" diye verildi) · hata kodu + reset + F13 D s.17, K s.17, E s.18 · basınç 0,7–1,5 bar / yavaş doldur / sık düşerse servis D s.14
#   · 0,5 bar altında çalışmaz, sürekli basınçlandırma = kaçak D s.15 · L F2 manuel reset s.22 · L H/A/E ayrımı, 1 sn RESET s.28 · L H.02.07 s.29
#   · L min 0,8 / önerilen 1–1,5 bar s.4 · L tamamen kapatma çift kutuplu sigorta s.24.
# BİLEREK YAZILMAYANLAR: "fişi çekip bekle" gibi belgede olmayan sıfırlama yöntemleri (F13 dışında) · servis modu (L'de F1+F2 aynı anda; servis işi)
#   · kart/parça teşhisi · fiyat (#46) · pazar bağlantısı. Alıntı denetim tablosu: baymak-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa reset yapma; gaz kaynağını kapat, kapı ve pencereleri aç, elektrik düğmelerini kullanma."
  - "Ekrandaki hata kodunu olduğu gibi not et."
  - "Lunatec'te kodun harfine bak: H ya da A ise reset gerekmez, E ise reset gerekir."
  - "Kod düşük su basıncıysa reset yerine basıncı oku ve kombi soğukken doldurma musluğunu çok yavaş açarak basıncı yükselt."
  - "Reset tuşuna bir kez bas: Duotec ve Duotec Compact'ta K1, Eco CT'de Reset tuşu, Lunatec'te F2 tuşuna bir saniye."
  - "Ekranda F13 görürsen kılavuzun dediği gibi kombinin elektrik beslemesini kapatıp aç."
  - "Kod geri geliyorsa ya da devam ediyorsa reset denemeyi bırak ve Baymak yetkili servisini ara."
faq:
  - q: "Baymak kombide reset tuşu hangisi?"
    a: "Duotec 24–45 ve Duotec Compact 24 kılavuzlarının panel tanımında K1 Reset tuşu. Eco CT 20 Premix'in panel listesinde Reset tuşu K4 olarak geçiyor, aynı kılavuzun hata sayfası ise RESET (K1) diyor; panelde Reset yazan tuşa bak. Lunatec'te F2 manuel reset (sıfırlama) tuşu."
  - q: "Baymak kombi resetleme yapmıyor, neden?"
    a: "Kılavuzlara göre her kod resetle silinmez. Lunatec'te H ile başlayan geçici arızalarda kombi bekler, sebep ortadan kalkınca kod kendiliğinden kaybolur; bazı durumlarda kombi 10 dakika sonra çalışır. Düşük su basıncı kodu da resetle değil, su doldurarak geçer. Duotec ve Eco CT'de F13 görürsen reset tuşu değil, elektrik beslemesini kapatıp açmak gerekir."
  - q: "F13 ne demek?"
    a: "Duotec, Duotec Compact ve Eco CT kılavuzlarında F13 reset kilitlenmesi. Kılavuzun parantez içindeki talimatı: cihaz elektrik beslemesini açıp kapatınız. Ayrıntılar Baymak kombi F13 hatası yazısında."
  - q: "Kaç kez reset atabilirim?"
    a: "Baymak kılavuzları bir sayı vermiyor; talimat bir kez reset ve sorun devam ederse yetkili servis. Lunatec'te de kalıcı arıza tekrar ederse ya da devam ederse yetkili teknik servis aranıyor. Duotec ve Eco CT tablolarında ayrıca F13 reset kilitlenmesi kodu var; bu kod görülürse reset tuşu değil, elektrik beslemesini kapatıp açmak gerekiyor."
  - q: "Reset kombinin ayarlarını siler mi?"
    a: "Baymak kılavuzlarında reset tuşunun kullanıcı ayarlarını sildiğine dair bir bilgi yok. Kılavuzlar reset tuşunu yalnız ekrandaki hata kodundan çıkmak için tarif ediyor."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve ekranında yanıp sönen bir uyarı"
  steps:
    - "Pencereleri açık, boş ve sakin bir mutfak"
    - "Kombi ekranının yakın planı ve yanında duran küçük bir not kâğıdı"
    - "Sade bir kombi ekranında tek bir harfle başlayan uyarı yazısı"
    - "Kombinin altında borular arasındaki küçük doldurma musluğu"
    - "Kombi panelinde diğerlerinden ayrı duran yuvarlak bir tuş"
    - "Duvardaki sigorta kutusunun kapalı kapağı"
    - "Kombinin yanında tezgâhta duran katlanmış bir kullanma kılavuzu"
---

Kombi durdu, ekranda bir kod yanıp sönüyor ve ilk akla gelen reset. Baymak'ın Duotec, Duotec Compact, Eco CT 20 Premix ve Lunatec kılavuzlarında reset tuşu var, ama her kodu silmiyor ve her kod için doğru adım değil. Bu yazıda reset tuşunun yerini, resetin işe yaradığı ve yaramadığı durumları ve nerede durman gerektiğini bu dört kılavuzdan topladık. Senin kombinde tuş adları farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Duotec ve Duotec Compact'ta reset K1, Eco CT'de panelde Reset yazan tuş, Lunatec'te F2. Bir kez bas. Lunatec'te H ile başlayan kodlar resetle değil kendiliğinden geçer. Düşük basınç kodu su doldurarak geçer. F13 görürsen elektriği kapatıp aç. Kod geri geliyorsa reset bitti, servis.

## Ekrandaki kod ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Reset işe yarar mı |
|---|---|---|
| **E ile başlayan kod (Duotec, Eco CT)** | Arıza, örneğin E01 başarısız ateşleme | Bir kez dene; devam ederse servis |
| **F37** | Düşük su basıncı | Hayır; basıncı yükselt |
| **F13** | Reset kilitlenmesi | Hayır; elektrik beslemesini kapatıp aç |
| **Lunatec A veya H** | Uyarı ya da geçici engelleme | Hayır; sebep kalkınca kendiliğinden geçer |
| **Lunatec E** | Kalıcı arıza, kombi kilitli | Evet; RESET'e bir saniye bas |

## Adım adım

**1. Gaz kokusu varsa reset yapma.** Duotec kılavuzunun güvenlik sayfasındaki sıra: gaz kaynağını kapat, kapı ve pencereleri aç, çıplak alev kullanma, sigara içme, elektrik düğmelerini ve elektrikli cihazları kullanma, binadaki diğer insanları uyar. Sızıntı gaz sayacı üzerindeyse gaz dağıtım şirketini bilgilendir. Lunatec kılavuzu Baymak yetkili teknik servis merkezini aramayı da ekliyor.

**2. Kodu not et.** Duotec kılavuzuna göre bir hata oluştuğunda ekranda hata kodu görüntülenir (örneğin E01). Lunatec'te ekranda önce bir harf ve iki basamaklı grup kodu, ardından yanıp sönerek ikinci bir kod görünür. İkisini birden yaz; servis bu kodla konuşur.

**3. Lunatec'te harfe bak.** Lunatec kılavuzu kodları ikiye ayırıyor. **A** uyarıdır, cihaz çalışmaya devam eder. **H** engellemedir; hata durumu ortadan kalkınca kod kaybolur ve kombi çalışır, bazı durumlarda 10 dakika sonra. **E** kalıcı arızadır, kombiyi kilitler ve sıfırlamak gerekir. Yani "reset yapmıyor" diye düşündüğün çoğu durum aslında beklenmesi gereken bir H kodudur.

**4. Basınç kodunda reset değil su.** Duotec ve Eco CT'de **F37** düşük su basıncı demek. Kılavuza göre kombi soğukken manometredeki basınç **0,7–1,5 bar** arasında olmalı; düşükse doldurma musluğunu açarak basıncı yükselt, hava yapmaması için musluğu **çok yavaş** aç. Basınç 0,5 barın altına düşerse kombi çalışmaz. Lunatec'te karşılığı **H.02.07**; Lunatec için önerilen basınç 1–1,5 bar. Ayrıntılar [Baymak kombi F37 hatası](/blog/baymak-kombi-f37-hatasi/) yazısında.

**5. Reset tuşuna bir kez bas.** Duotec ve Duotec Compact'ta reset tuşu **K1**. Eco CT 20'nin panel listesinde Reset tuşu **K4** olarak geçiyor, aynı kılavuzun hata sayfası ise "RESET (K1)" diyor; panelde Reset yazan tuşu kullan. Lunatec'te **F2** manuel reset tuşu; kılavuz kalıcı arızadan çıkmak için **1 saniye** basmanı istiyor.

**6. F13 görürsen elektriği kapatıp aç.** Duotec, Duotec Compact ve Eco CT tablolarında **F13** reset kilitlenmesi. Kılavuzun talimatı parantez içinde: cihaz elektrik beslemesini açıp kapatınız. Ayrıntılar [Baymak kombi F13 hatası](/blog/baymak-kombi-f13-hatasi/) yazısında.

**7. Kod geri geliyorsa dur.** Baymak'ın hata sayfasındaki talimat tek cümle: kombiyi resetlemek için Reset tuşuna basınız, **sorun devam ederse mutlaka yetkili servisi arayınız.** Lunatec'te de kalıcı arıza tekrar ederse ya da devam ederse yetkili teknik servis merkezi aranıyor.

## Reset neyi çözmez

Baymak kılavuzları reset tuşunu yalnız ekrandaki koddan çıkmak için tarif ediyor; kodun sebebini ortadan kaldırmıyor. Ateşleme kodu (Duotec'te **E01**) tekrar ediyorsa önce gaz vanasının açık olduğunu kontrol et; kılavuzun çalıştırma sırası da enerji beslemesini sağla, gaz vanasını aç diye başlıyor. Kod yine de dönüyorsa sorun kombinin içinde ya da gaz hattındadır. Ateşleme hatası için [Baymak kombi E01 hatası](/blog/baymak-kombi-e01-hatasi/) yazısına bak.

Basınç sık sık düşüyorsa da reset bir şey değiştirmez. Duotec kılavuzunun notu açık: kombi sürekli basınçlandırma ihtiyacı gösteriyorsa su kaçağı olabilir, yetkili servisi bilgilendir.

## Ne zaman servis

- Aynı kod bir resetten sonra geri geliyorsa
- F13 elektrik açıp kapatmadan sonra da duruyorsa
- Basınç sık sık düşüyorsa
- Lunatec'te H kodu uzun süre kaybolmuyorsa ya da E kodu tekrar ediyorsa

⛔ **Kendin-çöz sınırı burada biter.** Reset tuşu, ekran, basınç göstergesi ve doldurma musluğu sende; servis menüsü, kombinin kapağının içi, gaz hattı ve elektrik bağlantıları yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne?
2. Ekrandaki kod tam olarak ne (harf ve sayılar)?
3. Reset'e kaç kez bastın, kod geri geldi mi?
4. Basınç soğukken kaç bar?
5. Gaz vanası açık mı?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bütün kodlar [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) sayfasında, ekran simgeleri [Baymak kombi sembolleri ve anlamları](/blog/baymak-kombi-sembolleri-ve-anlamlari/) sayfasında. Bil, gör, çağır.
