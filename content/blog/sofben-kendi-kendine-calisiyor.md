---
title: "Şofben kendi kendine çalışıyor ya da kapanıyor: nedenleri"
description: "Şofben kendi kendine çalışıyor ya da kapanıyorsa DemirDöküm L 275 F ve ECA Phoenix kılavuzuna göre donma koruması, su akışı, gerilim ve aşırı ısınmaya bak."
slug: "sofben-kendi-kendine-calisiyor"
date: "2026-11-10"
category: "Kombi/Termosifon"
updated: "2026-11-10"
kisaCevap: "Şofben musluk kapalıyken çalışıyorsa çoğu zaman donma koruması devrededir: DemirDöküm L 275 F'de soğuk su girişi 5 °C altına inince brülör 7 saniye çalışır. Su akarken kapanıyorsa ECA Phoenix kılavuzuna göre 2,5 litre/dakikanın altındaki akışa izin verilmez; uzun çalışmada da emniyet cihazı kapatır."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı, parti 3 (YK #215; BOSLUK.md sürüm 4 #331 "şofben kendi kendine çalışıyor / kapanıyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: sofben-neden-isitmaz (ısıtmama), demirdokum-sofben-f4-arizasi, eca-sofben-ariza-kodlari; kendiliğinden çalışma/kapanma yazısı yok.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "şofben kendi kendine" #1 "…çalışıyor", #2 "…kapanıyor", #3 "demirdöküm şofben kendi kendine çalışıyor", #4 "hermetik…", #6 "şofben neden kendi kendine çalışır", #10 "eca…". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (M) DemirDöküm gazlı şofben L 275 F (H-TR) / L 350 F (H-TR) montaj ve bakım kılavuzu 0020265474_10 (28 s. PDF) https://www.demirdokum.com.tr/downloads/0020265474-10-3044973.pdf md5 0dda97382208617d52c29e561dab47d6 — PDF s.22, 25 · (E) E.C.A. Phoenix PH HM 11 hermetik şofben kullanım ve montaj kılavuzu (28 s. PDF) https://eca.com.tr/uploads/documents//bca/a1c4190f-91a0-4373-b6e2-98f0fa1674be.pdf md5 7d865330a00d6a65b9af9c2564734fc9 — PDF s.7, 16, 17, 18.
# BİLEREK YAZILMAYANLAR: NTC, akış sensörü, kart ya da gaz valfi teşhisi · elektrik tesisatı müdahalesi · sürekli çalışma emniyetinin süresi (belgede süre yok) · fiyat (#46).
# Alıntı denetimi: sofben-kendi-kendine-calisiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanma kılavuzu"]
steps:
  - "Şofbenin musluk kapalıyken mi çalıştığını, su akarken mi kapandığını ayır."
  - "Hava soğuksa donma korumasını hesaba kat."
  - "Ekranda harf ya da arıza kodu var mı, bak."
  - "Sıcak su musluğunu daha fazla aç, akışı artır."
  - "Uzun süre sıcak su kullanıyorsan emniyet kapanmasını hesaba kat."
  - "Elektrik gerilimi düşükse şofbenin kendiliğinden dönmesini bekle."
  - "Aşırı ısınma kodu tekrarlıyorsa servise haber ver."
faq:
  - q: "Şofben musluk kapalıyken neden çalışır?"
    a: "DemirDöküm L 275 F kılavuzunda soğuk su girişinde 5 °C altında sıcaklık ölçülünce donma koruması devreye girer ve brülör 7 saniye minimum gazla çalışır. ECA Phoenix'te koruma 7 °C altında başlar, 9 °C üzerinde sona erer."
  - q: "Şofben su akarken neden kendi kendine kapanır?"
    a: "ECA Phoenix kılavuzu akış sensörünün kuru yanmayı önlemek için 2,5 litre/dakikanın altındaki su akışına izin vermediğini yazıyor. DemirDöküm L 275 F'nin teknik tablosunda en düşük debi 3,2 litre/dakika."
  - q: "Şofben uzun kullanımda neden kapanır?"
    a: "ECA Phoenix'te sürekli çalışma emniyeti var; kılavuz bunu uzun süre açık kalması durumunda cihazı kapatan bir emniyet olarak tanımlıyor. Kılavuzda bu süre için bir değer verilmiyor."
  - q: "Elektrik düşükken şofben ne yapar?"
    a: "DemirDöküm L 275 F gerilim çok düşükken F.06 gösterir; gerilim 175 V (± 10 V) üzerine çıkınca ürün normal çalışmaya kendiliğinden döner. ECA Phoenix düşük voltajda AL37 verir ve elektrik tesisatının yeterli hale getirilmesini ister."
images:
  coverAlt: "Sade şofben ve yanında kullanım kılavuzu çizimi"
  steps:
    - "Kapalı musluğun yanında şofbene bakan beyaz eldivenli sade siluet el"
    - "Kar taneli pencere önünde sade şofben ve yanında beyaz eldivenli sade siluet el"
    - "Şofbenin ekranını gösteren beyaz eldivenli sade siluet el"
    - "Sıcak su musluğunu sonuna kadar açan beyaz eldivenli sade siluet el"
    - "Duşta akan suyun yanında bekleyen beyaz eldivenli sade siluet el"
    - "Şofbenin yanında bekleyen, düğmeye dokunmayan beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında sade şofben"
---

Şofben musluk kapalıyken kendi kendine çalışıyorsa önce donma korumasına, su akarken kapanıyorsa su akışına ve emniyet işlevlerine bakarsın. DemirDöküm L 275 F montaj ve bakım kılavuzuna göre soğuk su girişi 5 °C altına inince brülör 7 saniye minimum gazla çalışır. ECA Phoenix PH HM 11 kılavuzu ise 2,5 litre/dakikanın altındaki su akışına izin vermiyor.

İki kılavuz da cihazın bazı durumlarda kendiliğinden durup kendiliğinden yeniden çalıştığını yazıyor; hangisinin devrede olduğunu ekrandaki harf ya da kod gösteriyor. Kendi şofbeninin kılavuzu farklı bir değer veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız musluk, ekran ve bekleme kontrollerini anlatıyor. Sensör, kart, gaz valfi ve elektrik tesisatı işi yetkili servisindir; ECA aşırı ısınma uyarısı sürekli görünürse yetkili servisi aramanı istiyor.

## Şofben neden kendi kendine çalışır ya da kapanır?

| Durum | DemirDöküm L 275 F | ECA Phoenix PH HM 11 |
|---|---|---|
| Donma koruması | Soğuk su girişi 5 °C altı: brülör 7 sn; 7 °C üstü biter; ekranda E | 7 °C altı devreye girer, 9 °C üstü biter |
| Düşük akış | En düşük debi 3,2 l/dk | 2,5 l/dk altında akışa izin verilmez |
| Uzun çalışma | — | Sürekli çalışma emniyeti cihazı kapatır |
| Düşük gerilim | F.06; 175 V üstünde kendiliğinden döner | AL37; elektrik tesisatı yeterli hale getirilmeli |
| Aşırı ısınma | F.01: su 85 °C üstü, gaz girişi kesilir | AL02; aşırı ısınma emniyeti 85 °C |

## Adım adım: şofben kendi kendine çalışıyor ya da kapanıyorsa ne yapılır?

**1. Şofbenin musluk kapalıyken mi çalıştığını, su akarken mi kapandığını ayır.** İki durumun nedenleri farklı: musluk kapalıyken çalışma kılavuzlarda donma korumasıyla, su akarken kapanma akış, gerilim ve sıcaklık emniyetleriyle anlatılıyor. Olayın günün hangi saatinde olduğunu, o sırada hangi musluğun açık olduğunu ve ekranda ne gördüğünü not al; bu notu aşağıdaki adımlarda ve gerekirse servise anlatırken kullanırsın.

**2. Hava soğuksa donma korumasını hesaba kat.** DemirDöküm donma korumasında brülörün 7 saniye minimum gaz ayarıyla çalıştırıldığını, sıcaklık 7 °C'yi geçince durumun sonlandırıldığını yazıyor. ECA da su devresini donmaya karşı korumak için cihazın gerçek su sıcaklığına göre otomatik açılıp kapandığını belirtiyor; bunun için elektrik ve gaz vanası açık olmalı.

**3. Ekranda harf ya da arıza kodu var mı, bak.** DemirDöküm donma koruması aktifken ekranda E gösteriyor. ECA'da hata varken ekranda AL ve kod dönüşümlü görünüyor. Kodların anlamı için [DemirDöküm şofben F4 arızası](/blog/demirdokum-sofben-f4-arizasi/) ve [ECA şofben arıza kodları](/blog/eca-sofben-ariza-kodlari/) yazılarına bak.

**4. Sıcak su musluğunu daha fazla aç, akışı artır.** ECA akış sensörünün kuru yanmayı önlemek için 2,5 litre/dakikanın altındaki su akışına izin vermediğini yazıyor. DemirDöküm L 275 F'nin teknik tablosunda en düşük debi 3,2, L 350 F'de 3,7 litre/dakika. Musluğu az açıyorsan akış bu değerlerin altında kalabilir.

**5. Uzun süre sıcak su kullanıyorsan emniyet kapanmasını hesaba kat.** ECA Phoenix'te uzun süre açık kalması durumunda cihazı kapatan bir sürekli çalışma emniyeti bulunuyor. Kılavuz bu süreyi belirtmiyor; kapanma her uzun kullanımda tekrarlıyorsa servise anlat.

**6. Elektrik gerilimi düşükse şofbenin kendiliğinden dönmesini bekle.** DemirDöküm gerilim çok düşükken F.06 gösteriyor; gerilim 175 V (± 10 V) üzerine çıkınca ürün normal çalışma konumuna geri dönüyor. ECA düşük voltajda AL37 veriyor; enerji beslemesi yetersizse elektrik tesisatının yeterli hale getirilmesini ve yetkili servisin aranmasını istiyor.

**7. Aşırı ısınma kodu tekrarlıyorsa servise haber ver.** DemirDöküm F.01'de NTC sensörünün su sıcaklığını 85 °C üstünde ölçtüğünü ve gaz girişinin kesildiğini yazıyor; önce açma/kapama şalterini kapatıp açmanı, sonra müşteri hizmetleriyle iletişime geçmeni istiyor. ECA AL02 kendiliğinden geçmez ya da sürekli görünürse yetkili servisi aramanı istiyor.

## Hangi kapanmalar kendiliğinden düzelir?

ECA geçici hatalı yanma uyarısında (AL83) hatanın otomatik olarak kaybolduğunu yazıyor. DemirDöküm de basınç şalteri yeniden açıldığında normal çalışma konumunun otomatik başlatıldığını, düşük gerilim düzelince ürünün normale döndüğünü belirtiyor. Bunlar dışındaki kodlarda kılavuzlar yetkili servise başvurmanı istiyor.

## Bu konuda hangi yazılara bakılır?

Şofben çalışıyor ama su ısınmıyorsa [şofben neden ısıtmaz](/blog/sofben-neden-isitmaz/) yazısındaki kontrol sırasını uygula.

---

**Kaynak künyesi.** Donma koruması, F.01, F.06, F.09 ve en düşük debi bilgisi DemirDöküm L 275 F / L 350 F montaj ve bakım kılavuzundan; akış sensörü, sürekli çalışma emniyeti, donma koruması ve AL02, AL37, AL83 bilgisi E.C.A. Phoenix PH HM 11 kullanım ve montaj kılavuzundan alınmıştır. Kendi şofbeninin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Kapanma ya da kendiliğinden çalışma sürüyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
