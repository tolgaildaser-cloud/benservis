---
title: "Ferroli kombi A01 hatası: brülör ateşleme yapmıyor"
description: "Ferroli kombide A01, brülör ateşleme yapmıyor demek. Bluehelix kılavuzlarına göre gaz valfı ve basınç kontrolü, RESET adımı ve servis sınırı."
slug: "ferroli-kombi-a01-hatasi"
date: "2026-10-30"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P02 (YK #197 boşluk 2. dalga, BOSLUK.md #81: "Ferroli kombi A01 hatası / resetleme / sıcak su gelmiyor / nasıl kullanılır"). Satırdan tek konu seçildi: A01 (kanıt satırı OT#7 "ferroli kombi" A01). Slug origin/main'de yok. Yakın yazı: ferroli-kombi-ariza-kodlari (A01 yalnız tabloda ve SSS'de), ferroli-kombi-kalorifer-isitmiyor.
# Kaynak (#88): Ferroli Bluehelix Tech C kullanım kılavuzu cod. 3541F561 Rev. 00 07/2015 (md5 3d412e0af94e4984b90f7a9b39a80761) ve Bluehelix Trio C kullanım kılavuzu Rev. 00 03/2022 (md5 54bd7ef868a276481ccf00001fc25e40), ikisi de ferroli.com.tr. 6 Eki 2026'da indirilmiş yerel kopyadan alındı, md5 doğrulandı. Trio metin katmanı yok: OCR + sayfa görüntüsü gözle okundu. Leone C kılavuzunda A01 yok (E01 var), yazıya alınmadı. URL ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: tablonun "Çözüm" sütunundaki servis işleri (elektrot, gaz valfı değişimi, şebeke gaz basıncı, sifon) kullanıcı adımı olarak yazılmadı · "reset en fazla N kez" (belgede sayı yok) · gaz kokusu talimatı (bu iki kılavuzda yok) · sıcak su gelmiyor ve nasıl kullanılır konuları (A01'den ayrı yazı) · ücret (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ekrandaki kodu not et: A01, kombiyi bloke eden bir arıza kodudur."
  - "Kombi sistem girişindeki gaz valfının açık olduğundan emin ol."
  - "Kombi soğukken basınç göstergesinden basıncı oku; kılavuzdaki değer yaklaşık bir bardır."
  - "RESET tuşuna 1 saniye bas."
  - "Kombinin yeniden çalışıp çalışmadığını ekrandan izle."
  - "Kombi çalışmıyorsa ya da kod geri geliyorsa yetkili servise başvur."
faq:
  - q: "Ferroli kombide A01 ne demek?"
    a: "Bluehelix Tech C ve Trio C kullanım kılavuzlarının arıza listesinde A01, brülör ateşleme yapmıyor anlamına geliyor. Kılavuza göre A harfiyle tanımlanan kodlar cihazın bloke olmasına neden olan sorunlardır."
  - q: "A01 çıktığında nasıl reset atılır?"
    a: "Kılavuz, kombinin çalışmaya devam edebilmesi için RESET tuşuna 1 saniye basmayı ya da takılıysa uzaktan kumandadan RESET işlemi yapmayı yeterli sayıyor. Kombi yine çalışmazsa kılavuz önce arızanın giderilmesini istiyor."
  - q: "A01'in nedenleri neler?"
    a: "Kılavuzun tablosu beş olası neden sayıyor: gaz yok, elektrot tespit ya da ateşleme hatası, arızalı gaz valfı, şebeke gaz basıncının yetersizliği ve tıkalı sifon. Gaz valfının açık olduğuna bakmak dışında bunların hepsi servisin kontrol işidir."
  - q: "Leone modelinde A01 var mı?"
    a: "Bu yazıdaki tablo Bluehelix Tech C ve Trio C kılavuzlarından alındı. Kod sistemi modele göre değişiyor; Leone C'nin ateşleme hatası kodu farklı. Kendi modelinin kılavuzuna bak."
images:
  coverAlt: "Duvara asılı jenerik beyaz kombinin dijital ekranında A harfiyle başlayan bir kod, altında borular arasında gaz vanası ve basınç göstergesi"
  steps:
    - "Kombi ekranındaki kodu gösteren beyaz eldivenli sade siluet el, ekranda soyut bir harf ve rakam kodu"
    - "Kombinin altında borular arasındaki sarı kollu gaz vanasını gösteren beyaz eldivenli sade siluet el"
    - "Duvar tipi kombi ve yanında yuvarlak basınç göstergesi çizimi"
    - "Kombi panelindeki reset tuşuna basan beyaz eldivenli sade siluet el"
    - "Kombi ekranına bakan beyaz eldivenli sade siluet el, ekranda beliren alev simgesi"
    - "Telefon ve kombi kullanım kılavuzunu yan yana tutan beyaz eldivenli sade siluet el"
---

Ferroli kombinin ekranında **A01** görüyorsan Ferroli'nin kullanım kılavuzundaki karşılığı şu: **"Brülör ateşleme yapmıyor."** Kombi yanmıyor, yani sıcak su da kalorifer de çalışmayabilir. Bu yazıdaki her satır Ferroli'nin kendi kılavuzlarına dayanıyor: Bluehelix Tech C ve Bluehelix Trio C. Kılavuz kullanıcıya birkaç basit adım bırakıyor, gerisini servise veriyor.

> ⛔ **Önce sınır.** Kılavuzların genel uyarısı açık: cihazda arıza olursa cihaz kapatılmalıdır, cihazı tamir etmeye kalkışılmaz, yalnız mesleki olarak kalifiye personele başvurulur. Gaz, elektrik ve kombinin içi servis işidir.

## A01 neden çıkar?

Bluehelix kılavuzlarına göre ekranda arıza olduğunda gösterge yanıp söner ve hata kodu görünür. Cihazın bloke olmasına neden olan sorunlar **A** harfiyle, geçici bloke olmasına neden olan anormallikler **F** harfiyle tanımlanır. F kodları ayar değerleri normal aralığa dönünce kendiliğinden kalkar; A kodlarında ise kombinin çalışabilmesi için reset gerekir.

Kılavuzun arıza listesinde A01 için beş olası neden yazıyor:

| Olası neden | Kılavuzdaki çözüm |
|---|---|
| Gaz yok | Kombiye gaz akışının normal olduğunu ve havanın borulardan tahliye edildiğini kontrol et |
| Elektrot tespit/ateşleme hatası | Elektrot kablo tesisatını, konumunu ve tortu olup olmadığını kontrol et |
| Arızalı gaz valfı | Gaz valfını kontrol et, değiştir |
| Şebeke gaz basıncı yetersiz | Şebeke gaz basıncını kontrol et |
| Sifon tıkalı | Sifonu kontrol et, gerekirse temizle |

Bu tablonun sütunu servise yazılmış. Elektrot, gaz valfı ve sifon kullanıcının dokunacağı parçalar değil.

## Adım adım: kullanıcıya düşenler

**1. Kodu not et.** Ekranda A01 yazıyor mu, yoksa A02 ya da A06 gibi başka bir A kodu mu? A02 brülör kapalıyken alev sinyali, A06 ateşleme sonrası alev yetersizliği anlamına geliyor. Servis arayacaksan ilk soracakları şey bu koddur.

**2. Gaz valfının açık olduğundan emin ol.** Kılavuzun ilk çalıştırma adımlarından biri, kombi sistem girişindeki gaz valfını açmak. Valfin açık konumda olduğunu kontrol et. Valf açıksa ve kod sürüyorsa bakılacak yer kılavuzun tablosundaki servis işleridir; kendin denemeye kalkma.

**3. Basıncı oku.** Kılavuza göre sistem soğukken manometreden okunan doldurma basıncı yaklaşık 1,0 bar olmalıdır. Basınç minimumun altına düşerse kombi durur ve ekranda F37 görünür. Bu A01'den ayrı bir koddur; basınç düşükse kılavuzdaki doldurma düğmesi adımına geçilir ve işlem sonunda doldurma düğmesi mutlaka geri kapatılır. Basıncın neden düştüğü için [kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/) yazısına bak.

**4. RESET tuşuna 1 saniye bas.** Kılavuz, A koduyla bloke olan kombinin çalışmaya devam edebilmesi için RESET tuşuna 1 saniye basmayı yeterli sayıyor. Kombiye uzaktan kumanda takılıysa reset oradan da yapılabilir.

**5. Kombiyi izle.** Reset'ten sonra ekrandaki kodun kalkıp kalkmadığına ve kombinin yeniden çalışıp çalışmadığına bak. Ferroli kılavuzu reset için bir deneme sayısı vermiyor; sayıyı kendin belirleme, kod dönüyorsa bir sonraki adıma geç.

**6. Çalışmıyorsa dur.** Kılavuzun cümlesi net: kombi çalışmazsa önce arızanın giderilmesi gerekir. Arıza giderme yukarıdaki tablodaki servis işleridir. Kod geri geliyorsa kombinin modelini ve kodu yazıp yetkili servise başvur.

## Reset tuşunu fazla basılı tutma

Panelde 6 numaralı tuşun görevi birden fazla: kılavuza göre resetleme, yaz/kış modu seçimi ve "Sıcaklık Akışı" menüsü aynı tuştadır. Reset için 1 saniye yeterli. Tuşa 5 saniye basılırsa kombi "Sıcaklık Akışı" menüsüne girer ve ekranda yanıp sönen "CU" görünür; yeniden 5 saniye basınca menüden çıkılır. Reset atarken tuşu uzun süre basılı tutma, menüye girersen ayar değiştirebilirsin.

## Gaz kapalıyken donma koruması çalışmaz

Ferroli kılavuzu, cihaza gelen elektrik ve/veya gaz beslemesi kesilirse anti-friz sisteminin çalışmayacağını uyarıyor. Kış mevsiminde kombi uzun süre kapalı kalacaksa donmaya karşı kılavuz, kombideki suyun tahliye edilmesini ya da ısıtma sistemine uygun antifriz eklenmesini öneriyor. İkisi de servis ya da tesisatçı işidir. Yani gaz valfını kapatıp çıkacaksan bunu soğuk günlerde bilerek yap.

## FH yazısı arıza değil

Ferroli'de kombiye elektrik verildiğinde ekranda 300 saniye boyunca **FH** mesajı görünür. Kılavuz bunu ısıtma sisteminin hava tahliye döngüsü olarak tanımlıyor. Yani FH bir arıza kodu değil; mesaj kaybolunca kombi çalışmaya hazırdır.

## Servisi aramadan önce not al

1. Ekrandaki kod tam olarak ne, A01 mi başka bir A kodu mu?
2. Kombinin marka ve modeli.
3. Gaz valfı açık mıydı?
4. Soğukken basınç göstergesi kaç bar gösteriyor?
5. Reset'ten sonra kombi yandı mı, kod ne kadar sürede geri geldi?

Ferroli'nin öteki kodları için [Ferroli kombi arıza kodları](/blog/ferroli-kombi-ariza-kodlari/) listesine bak. Kalorifer ısınmıyorsa [Ferroli kombi kalorifer ısıtmıyor](/blog/ferroli-kombi-kalorifer-isitmiyor/) yazısı var; kombi hiç yanmıyorsa [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısına geç.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
