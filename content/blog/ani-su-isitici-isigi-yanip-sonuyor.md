---
title: "Ani su ısıtıcı ışığı yanıp sönüyor: Bosch ve Siemens"
description: "Bosch RDE18214 ve Siemens DE1821415 ani su ısıtıcıda ışık yanıp sönüyorsa ne demek? Yeşil ve kırmızı ışık, yanıp sönme hızı ve yapılacaklar."
slug: "ani-su-isitici-isigi-yanip-sonuyor"
date: "2026-11-10"
updated: "2026-11-10"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 9; BOSLUK.md sürüm 4 #395 "Bosch / Siemens ani su ısıtıcı ışık yanıp sönüyor"). Slug origin/main content/blog/'da ve blog-taslaklar/*/ altında yok (6 Kas fetch, 1.311 dosya). Yakın: termosifon-isigi-yanmiyor (depolu); ani su ısıtıcı ışık yazısı yok. Kardeş taslak: ani-su-isitici-isitmiyor (bu parti, aynı belgeler; o yazı sorun tablosu, bu yazı durum göstergesi).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-p9.txt): "su ısıtıcı yanıp sönüyor" #1 "siemens ani su ısıtıcı ışık yanıp sönüyor", #2 "bosch ani su ısıtıcı ışık yanıp sönüyor", #3 "siemens … yeşil ışık…", #4 "siemens … kırmızı ışık…", #5 "bosch … yeşil ışık…", #6 "bosch … kırmızı ışık…". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Bosch RDE18214 1M ani su ısıtıcısı montaj ve kullanma kılavuzu 9001217888 (1.7.16), 28 s. PDF https://media3.bosch-home.com/Documents/9001217888_A.pdf md5 162e13b1f239741a718963a464491694 — PDF s.2, 4, 5, 6, 7 · (B) Siemens DE1821415 ani su ısıtıcısı montaj ve kullanma kılavuzu, 52 s. PDF (Türkçe s.46-50) https://media3.bsh-group.com/Documents/9000806148_A.pdf md5 c97c9386e8b30203083a4f56efd5cf1b — PDF s.47, 49, 50.
# Işık dili modele göre değişir: Bosch'ta yavaş yeşil = güç sınırı, Siemens'te yavaş yanıp sönme = cihaz ısınıyor. Yazı yalnız bu iki modelin tablosunu verir; Siemens belgesinde kırmızı ışık satırı yok, uydurulmadı.
# BİLEREK YAZILMAYANLAR: kapak açma, iç sigorta, güç değişim anahtarı, su akış ayar tertibatı sökme (B s.47 montaj/teknisyen) · elektronik kodlama ve yük atma rölesi · fiyat (#46).
# Alıntı denetimi: ani-su-isitici-isigi-yanip-sonuyor.KAYNAK.md
kisaCevap: "Bosch RDE18214 kılavuzunda yeşil ışığın saniyede 1 kez yanıp sönmesi cihazın güç sınırında olduğunu, saniyede 2 kez soğuk yıkama aşamasını, kırmızı yanıp sönme cihazda hata olduğunu gösterir. Siemens DE1821415'te yavaş yanıp sönme cihaz ısınıyor, saniyede 4 kez yanıp sönme debi çok yüksek demektir."
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Cihazın kullanma kılavuzu"]
steps:
  - "Işık kırmızı yanıp sönüyorsa ev girişindeki sigortaları kapat ve müşteri servisini ara."
  - "Cihazın marka ve modelini, ışığın rengini ve hızını belirle."
  - "Bosch'ta yeşil ışık saniyede iki kez yanıp sönüyorsa sıcak su musluğunu en az bir dakika açık tut."
  - "Bosch'ta yeşil ışık saniyede bir kez yanıp sönüyorsa musluğu biraz kıs."
  - "Siemens'te ışık yavaş yanıp sönüyorsa cihazın ısıtmasını bekle."
  - "Siemens'te ışık hızlı yanıp sönüyorsa debiyi musluktan azalt."
  - "Işık hiç yanmıyorsa ev girişindeki sigortayı kontrol et; sürerse müşteri hizmetlerini ara."
faq:
  - q: "Bosch ani su ısıtıcıda kırmızı ışık yanıp sönüyorsa ne yapmalıyım?"
    a: "Bosch RDE18214 kılavuzu kırmızı yanıp sönen durum göstergesini cihazda hata olarak tanımlıyor ve müşteri servisini aramanı istiyor. Hatalı bir durumda derhal şebeke gerilimini kesmeni de yazıyor."
  - q: "Bosch ani su ısıtıcıda yeşil ışık neden yanıp söner?"
    a: "Bosch kılavuzuna göre yeşil ışık saniyede 1 kez yanıp sönüyorsa ayarlanan sıcaklığa ulaşılamıyor, cihaz güç sınırında; saniyede 2 kez yanıp sönüyorsa cihaz soğuk yıkama aşamasında. Sürekli yeşil ise cihaz açık."
  - q: "Siemens ani su ısıtıcıda ışık yanıp sönmesi arıza mı?"
    a: "Siemens DE1821415 kılavuzunda yavaşça (saniyede 1 kez) yanıp sönen ışık cihazın ısındığını gösteriyor. Hızlı (saniyede 4 kez) yanıp sönme ayarlanan sıcaklığa henüz erişilmediği, su debisinin bağlantı gücüne göre çok yüksek olduğu anlamına geliyor."
  - q: "Ani su ısıtıcıda E- ve FD-numarası nerede yazar?"
    a: "Bosch RDE18214'te numaralar ön kapağın arka tarafındaki model levhasında, Siemens DE1821415'te açılabilir kumanda kapağının iç tarafında. Müşteri hizmetlerini ararken bu numaraları bildirmen isteniyor."
images:
  coverAlt: "Sade kettle ve yanında kullanım kılavuzu çizimi"
  steps:
    - "Sigorta kutusundaki şalteri indiren beyaz eldivenli sade siluet el"
    - "Ani su ısıtıcının gösterge ışığını işaret eden beyaz eldivenli sade siluet el"
    - "Sıcak su musluğunu sonuna kadar açan beyaz eldivenli sade siluet el"
    - "Sıcak su musluğunu biraz kısan beyaz eldivenli sade siluet el"
    - "Musluğun altında elini suya tutmadan bekleyen beyaz eldivenli sade siluet el"
    - "Musluk kolunu yarıya indiren beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında ani su ısıtıcı"
---

Ani su ısıtıcının ışığı kırmızı yanıp sönüyorsa önce ev girişindeki sigortaları kapatıp şebeke gerilimini kes, sonra müşteri servisini ara. Bosch RDE18214 kılavuzu kırmızı yanıp sönen durum göstergesini "cihazda hata" olarak tanımlıyor ve hatalı bir durumda derhal şebeke gerilimini kesmeni istiyor. Yeşil ışığın yanıp sönmesi ise Bosch'ta iki farklı duruma karşılık geliyor: saniyede 1 kez ve saniyede 2 kez.

Işık dili modele göre değişiyor. Siemens DE1821415 kılavuzunda saniyede 1 kez yanıp sönme "cihaz ısınıyor" demek, saniyede 4 kez yanıp sönme debinin çok yüksek olduğunu gösteriyor. Aynı hız iki markada farklı anlama geldiği için önce cihazının marka ve modelini bil. Kendi cihazının kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız kullanıcının yapabildiği kontrolleri anlatıyor. İki kılavuz da ani su ısıtıcının yalnız teknisyen tarafından bağlanıp devreye alınabileceğini, tamir işlerinin teknisyen işi olduğunu yazıyor. Kapak, iç sigorta, güç ayarı ve su akış ayar tertibatı servisindir.

## Ani su ısıtıcıda ışık neden yanıp söner?

| Işık | Bosch RDE18214 | Siemens DE1821415 |
|---|---|---|
| Sönük | Kapalı | Kapalı |
| Sürekli yanıyor | Yeşil: açık | Hazır |
| Saniyede 1 kez yanıp sönüyor | Yeşil: ayarlanan sıcaklığa ulaşılamıyor, cihaz güç sınırında | Cihaz ısınıyor |
| Saniyede 2 kez yanıp sönüyor | Yeşil: soğuk yıkama aşaması | Tabloda yok |
| Saniyede 4 kez yanıp sönüyor | Tabloda yok | Ayarlanan sıcaklığa henüz erişilmedi, debi çok yüksek |
| Kırmızı yanıp sönüyor | Cihazda hata, müşteri servisi | Tabloda yok |

## Adım adım: ani su ısıtıcı ışığı yanıp sönüyorsa ne yapılır?

**1. Işık kırmızı yanıp sönüyorsa ev girişindeki sigortaları kapat ve müşteri servisini ara.** Bosch sorun tablosunda kırmızı yanıp sönen göstergenin çözümü "Lütfen müşteri servisini arayın." Cihazda kaçak varsa Bosch soğuk su hattını da derhal kapatmanı istiyor.

**2. Cihazın marka ve modelini, ışığın rengini ve hızını belirle.** Saniyede kaç kez yanıp söndüğünü birkaç saniye izleyerek say. Bosch'ta E- ve FD-numaraları ön kapağın arka tarafındaki model levhasında, Siemens'te açılabilir kumanda kapağının iç tarafında yazıyor. Bosch'ta ön kapağı sen sökme; Bosch cihazı açmadan önce akım girişinin kesilmesini şart koşuyor.

**3. Bosch'ta yeşil ışık saniyede iki kez yanıp sönüyorsa sıcak su musluğunu en az bir dakika açık tut.** Bu soğuk yıkama aşaması. Bosch ilk devreye almada ve su kesilmesinden sonra sıcak su musluğunu tamamen açıp en az 1 dakika su akıtmanı istiyor; cihaz güvenlik nedeniyle ancak bundan sonra ısıtmaya başlıyor.

**4. Bosch'ta yeşil ışık saniyede bir kez yanıp sönüyorsa musluğu biraz kıs.** Bosch'a göre tamamen açık bir muslukta cihazın gücüne göre fazla su akıyor. Sıcak su musluğunu biraz kapat. Giriş suyu soğuduysa ya da cihaz güç sınırındaysa Bosch sıcaklığı daha düşük, örneğin "30 °C" ayarlamanı öneriyor.

**5. Siemens'te ışık yavaş yanıp sönüyorsa cihazın ısıtmasını bekle.** Siemens tablosunda saniyede 1 kez yanıp sönme "cihaz ısınıyor" demek; bu bir hata satırı değil. Siemens'te döner düğmeyle 30 °C ile 60 °C arasında kademesiz ayar yapılır.

**6. Siemens'te ışık hızlı yanıp sönüyorsa debiyi musluktan azalt.** Saniyede 4 kez yanıp sönme ayarlanan sıcaklığa henüz erişilmediğini, su debisinin bağlantı gücüne göre çok yüksek olduğunu gösteriyor. Siemens sorun tablosu güç sınırına erişildiğinde debiyi su musluğundan azaltmanı istiyor; dirsekli valf ayarı teknisyen işi.

**7. Işık hiç yanmıyorsa ev girişindeki sigortayı kontrol et; sürerse müşteri hizmetlerini ara.** Sönük ışık iki tabloda da "kapalı" demek. Bosch ve Siemens su ısınmıyorsa ilk nedeni ev girişindeki sigortanın atması olarak yazıyor. Arıza giderilemiyorsa iki kılavuz da müşteri hizmetlerini aramanı istiyor.

## Kısa süre soğuk su gelmesi ışıkla ilgili mi?

Hayır, iki kılavuz bunu ayrı bir satırda veriyor. Bosch ve Siemens'e göre cihazın içindeki hava algılayıcısı suda hava algılayınca ısıtma gücünü kısa süreli kapatıyor ve ani su ısıtıcısı birkaç saniye sonra kendiliğinden yeniden devreye giriyor. Siemens'te elektrik kesintisinden ya da ilk devreye almadan sonra cihaz, sıcak su musluğu en az 1 dakika boyunca dakikada en az 6 litre debiyle açık kalmadan ısıtmaya başlamıyor.

## Bu konuda hangi yazılara bakılır?

Depolu cihazda ışık sorunu için [termosifon ışığı yanmıyor](/blog/termosifon-isigi-yanmiyor/), kesintiden sonra başka cihazlar da sorun çıkarıyorsa [elektrik kesintisi sonrası cihaz arızaları](/blog/elektrik-kesintisi-sonrasi-cihaz-arizalari/) yazısına bak.

---

**Kaynak künyesi.** Durum göstergesi, sorun tablosu, başlangıç durulaması ve müşteri hizmetleri bilgisi Bosch RDE18214 1M ve Siemens DE1821415 ani su ısıtıcısı montaj ve kullanma kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu adımlardan sonra da ışık yanıp sönmeye devam ediyorsa ışığın rengini, hızını ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
