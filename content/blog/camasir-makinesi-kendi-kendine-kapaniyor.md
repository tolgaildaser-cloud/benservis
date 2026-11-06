---
title: "Çamaşır makinesi kendi kendine kapanıyor: Beko ve Bosch"
description: "Çamaşır makinesi kendi kendine kapanıyorsa Beko D4 9101 E ve Bosch WGA244A0TR kılavuzu enerji tasarrufu, gerilim ve denge kontrolünü gösteriyor."
slug: "camasir-makinesi-kendi-kendine-kapaniyor"
date: "2026-11-10"
category: "Çamaşır makinesi"
updated: "2026-11-10"
kisaCevap: "Çamaşır makinesi kendi kendine kapanıyorsa çoğu zaman enerji tasarrufu modundadır: Beko D4 9101 E işlem yapılmazsa yaklaşık 2 dakika sonra ekranı kapatır, bir tuşa basınca geri döner. Program ortasında duruyorsa Bosch WGA244A0TR kılavuzu gerilim düşüşünü ve sıkmada dengesiz yükü gösteriyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 1; BOSLUK.md sürüm 4 #293 "çamaşır makinesi kendi kendine açılıp kapanıyor / kendi kendine duruyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: camasir-makinesi-calismiyor (hiç çalışmama), camasir-makinesi-santrifuj-yapmiyor, camasir-makinesi-sigorta-attiriyor; 10 Kas klasöründe camasir-makinesi-kendi-kendine-su-aliyor (su alma, ayrı niyet).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "çamaşır makinesi kendi kendine" #1 "…açılıp kapanıyor", #3 "…duruyor", #5 "…çalışıyor", #6 "…program değiştiriyor"; "çamaşır makinesi ç" #5 "…çalışırken neden durur". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Beko D4 9101 E çamaşır makinesi kullanma kılavuzu (40 s. PDF) https://download.beko.com/Download.UsageManualsBeko/d4-9101-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820523451.pdf md5 38f838f5c669c87f517618be9a11edcb — PDF s.25, 27, 32, 33 · (B) Bosch WGA244A0TR çamaşır makinesi kullanım kılavuzu (60 s. PDF) https://media3.bosch-home.com/Documents/9001709506_A.pdf md5 23d5ed1b30b9787b05f53f1137de1679 — PDF s.11, 22, 23, 32, 40, 41, 42, 43.
# BİLEREK YAZILMAYANLAR: kart, kapak kilidi ve motor arızası teşhisi (servis) · priz/tesisat ölçümü · "program değiştiriyor" belirtisi (iki belgede tarif yok) · fiyat (#46).
# Alıntı denetimi: camasir-makinesi-kendi-kendine-kapaniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Çamaşır makinesinin kullanma kılavuzu"]
steps:
  - "Ekran karardıysa bir tuşa bas ya da program düğmesini çevir."
  - "Geç başlatma ya da kalan süre kurulu mu, bak."
  - "Program duraksadıysa evdeki elektriği kontrol et."
  - "Sıkmada durduysa çamaşırları tamburda yeniden dağıt."
  - "Ekrandaki hata kodunu ya da yanıp sönen simgeyi not et."
  - "Programı başlat tuşuyla sıfırla ve yeniden başlat."
  - "Durma her yıkamada sürüyorsa servise başvur."
faq:
  - q: "Çamaşır makinesi neden kendi kendine kapanıyor?"
    a: "Beko D4 9101 E kılavuzuna göre seçim adımında ya da program bittikten sonra yaklaşık 2 dakika işlem yapılmazsa makine enerji tasarrufu moduna geçer; ışıklar kısılır, ekran kapanır. Bosch WGA244A0TR de uzun süre kullanılmayınca otomatik olarak enerji tasarrufu moduna geçiyor."
  - q: "Çamaşır makinesi program ortasında neden durur?"
    a: "Beko sorun tablosu voltaj düşüklüğünde makinenin bir süre durduğunu, voltaj normale gelince kaldığı yerden devam ettiğini yazıyor. Bosch'ta gerilim kontrol sistemi gerilim düşüşünü algılayınca programı beklemeye alıyor."
  - q: "Çamaşır makinesi sıkmaya geçmeden duruyor, neden?"
    a: "Bosch WGA244A0TR'de E:60 / -2B hatası, denge kontrol sisteminin çamaşırlar eşit dağılmadığı için sıkmayı durdurduğu anlamına geliyor. Beko'da otomatik dengesiz yük algılama sistemi devreye girince süre geri saymıyor ve makine sıkma adımına geçmiyor."
  - q: "Çamaşır makinesi kendi kendine çalışmaya başlıyor, neden?"
    a: "Geç başlatma kurulmuştur. Beko'da program başlangıcı 24 saate kadar ertelenebiliyor; geri sayım bitince yıkama kendiliğinden başlıyor. Bosch'ta Kalan süre tuşuyla program sonu 24 saate kadar ayarlanabiliyor."
images:
  coverAlt: "Ekranı kararmış sade çamaşır makinesi ve yanında küçük saat çizimi"
  steps:
    - "Makinenin tuşuna dokunan beyaz eldivenli sade siluet el çizimi"
    - "Ekrandaki saat simgesini gösteren beyaz eldivenli sade siluet el"
    - "Odadaki lambanın düğmesine basan beyaz eldivenli sade siluet el"
    - "Tamburdaki çamaşırları açıp dağıtan beyaz eldivenli sade siluet el"
    - "Ekrana bakıp not alan beyaz eldivenli sade siluet el çizimi"
    - "Başlat tuşuna basılı tutan beyaz eldivenli sade siluet el"
    - "Telefonla arama yapan beyaz eldivenli sade siluet el çizimi"
---

Çamaşır makinesi kendi kendine kapanıyorsa çoğu zaman enerji tasarrufu modundadır. Beko D4 9101 E kılavuzuna göre makine açıldıktan sonra program başlatılmadan ya da program bittikten sonra yaklaşık 2 dakika işlem yapılmazsa gösterge ışıkları kısılır, ekran tamamen kapanır; program düğmesini çevirince ya da bir tuşa dokununca eski haline döner.

Bosch WGA244A0TR kılavuzu da cihazın uzun süre kullanılmazsa otomatik olarak enerji tasarrufu moduna geçtiğini yazıyor; sorun tablosunda "ekran söner ve Başlat / Reload yanıp söner" satırının karşılığı "Herhangi bir tuşa basınız". Program yıkamanın ortasında duruyorsa iki kılavuz gerilim düşüşünü ve sıkmada dengesiz yükü gösteriyor. Kendi makinenin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Güvenlik.** Makine kapanırken sigorta atıyorsa ya da elektrik kablosu hasarlıysa makineyi kapat, fişi çek ve kullanma. Bosch kılavuzu usulüne uygun olmayan onarımların elektrik çarpması tehlikesi taşıdığını, hasarlı kablonun yalnız üretici, müşteri hizmetleri ya da benzer kalifikasyondaki kişi tarafından değiştirilmesini yazıyor.

## Çamaşır makinesi neden kendi kendine kapanır ya da durur?

| Belirti | Beko D4 9101 E | Bosch WGA244A0TR |
|---|---|---|
| Ekran karardı | Yaklaşık 2 dakika işlem yoksa enerji tasarrufu | Uzun süre kullanılmazsa enerji tasarrufu |
| Yıkamada durdu | Voltaj düşüklüğü; normale gelince devam | Gerilim kontrolü programı beklemeye alır |
| Sıkmada durdu | Otomatik dengesiz yük algılama | E:60 / -2B: denge kontrolü |
| Kendiliğinden başladı | Geç Başlatma, 24 saate kadar | Kalan süre, 24 saate kadar |

## Adım adım: çamaşır makinesi kendi kendine kapanıyorsa ne yapılır?

**1. Ekran karardıysa bir tuşa bas ya da program düğmesini çevir.** Beko'da ışıklar ve ekran böylece eski haline döner. Beko enerji tasarrufu modundan çıkarken seçimlerin değişebileceğini, bunun hata olmadığını yazıyor; programı başlatmadan önce seçimlerini yeniden kontrol et.

**2. Geç başlatma ya da kalan süre kurulu mu, bak.** Beko'da Geç Başlatma sembolü yanıyorsa geri sayım sürüyor ve süre dolunca yıkama kendiliğinden başlıyor. Bosch'ta program çalışmaya başlamıyorsa sorun tablosu kalan sürenin etkin olup olmadığını kontrol etmeni istiyor.

**3. Program duraksadıysa evdeki elektriği kontrol et.** Bosch oda aydınlatmasının ve odadaki diğer cihazların çalışıp çalışmadığına bakmanı, sigorta kutusundaki sigortayı kontrol etmeni istiyor. Bosch'ta gerilim kontrol simgesi yanıp sönüyorsa gerilim yeniden uygun duruma gelince program kendiliğinden devam ediyor.

**4. Sıkmada durduysa çamaşırları tamburda yeniden dağıt.** Bosch E:60 / -2B için çamaşırları yeniden dağıtmanı, büyük ve küçük parçaları birlikte yüklemeni öneriyor. Beko çok az ya da çok fazla çamaşırı da titreşim nedenleri arasında sayıyor.

**5. Ekrandaki hata kodunu ya da yanıp sönen simgeyi not et.** Bosch sorun tablosunda yanan bir simgenin nedenlerinden biri sıcaklığın çok yüksek olması; bu durumda sıcaklık düşene kadar bekliyorsun. Kapağın kapanmaması ya da kapağa çamaşır sıkışması da programı başlatmıyor. Tabloda olmayan kodları Bosch fonksiyonel arıza sayıyor ve müşteri hizmetlerini aramanı istiyor.

**6. Programı başlat tuşuyla sıfırla ve yeniden başlat.** Beko şebeke voltajı ya da su basıncı gibi altyapı sorunlarında makinenin kendini korumaya aldığını yazıyor; Başla / Bekle / İptal tuşuna 3 saniye basarak fabrika ayarına getirmeni istiyor. Sonra programı yeniden seç.

**7. Durma her yıkamada sürüyorsa servise başvur.** Bosch onarımların yalnız eğitimli uzman personel tarafından yapılmasını istiyor. Servisi ararken ekrandaki kodu, durmanın hangi adımda olduğunu ve makinenin modelini söyle.

## Süre neden duruyor ya da uzuyor?

Beko'ya göre su alırken, ısıtma adımında ve sıkma adımında süre göstergesi geri saymayı bırakabilir: makine yeterli suyu alana ya da seçili sıcaklığa ulaşana kadar bekler. Düşük su basıncı, düşük voltaj, soğuk giriş suyu ve fazla deterjandan oluşan köpük de yıkamayı uzatıyor. Bunlar arıza değil; makine tam durmuş gibi görünse de program sürüyor.

## Elektrik gidip gelince program kaldığı yerden devam eder mi?

Beko'ya göre voltaj normal seviyeye geldiğinde makine çalışmaya kaldığı yerden devam ediyor. Bosch da gerilim beslemesi stabil hale geldiğinde programın normal biçimde sürdüğünü, gerilimin düşmesinin programı uzattığını yazıyor. Elektrik geldikten sonra tuşlar tepki vermiyorsa çocuk kilidine bak: Bosch kilidin elektrik kesintisinde de etkin kaldığını söylüyor.

## Bu konuda hangi yazılara bakılır?

Makine hiç açılmıyorsa [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/), sigorta atıyorsa [çamaşır makinesi sigorta attırıyor](/blog/camasir-makinesi-sigorta-attiriyor/), sıkma adımı hiç gelmiyorsa [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/), ekranda kod görüyorsan [çamaşır makinesi hata kodları](/blog/camasir-makinesi-hata-kodlari/) yazısına bak.

---

**Kaynak künyesi.** Enerji tasarrufu modu, gerilim ve denge kontrolü, geç başlatma bilgileri Beko D4 9101 E çamaşır makinesi kullanma kılavuzundan ve Bosch WGA244A0TR çamaşır makinesi kullanım kılavuzundan alınmıştır. Kendi makinenin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Makine bu kontrollerden sonra da program ortasında kapanıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
