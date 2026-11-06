---
title: "Ani su ısıtıcı ısıtmıyor: nedenleri ve ne yapılır?"
description: "Ani su ısıtıcı ısıtmıyorsa ne yapılır? Bosch RDE18214 ve Siemens DE1821415 kılavuzuna göre sigorta, debi, kış ayarı ve başlangıç durulaması."
slug: "ani-su-isitici-isitmiyor"
date: "2026-11-10"
updated: "2026-11-10"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 9; BOSLUK.md sürüm 4 #394 "ani su ısıtıcı ısıtmıyor (Veito, Baymak, Siemens)"). Slug origin/main content/blog/'da ve blog-taslaklar/*/ altında yok (6 Kas fetch, 1.311 dosya). Yakın: sofben-neden-isitmaz (gazlı şofben), termosifon-suyu-isitmiyor (depolu); elektrikli ani su ısıtıcı yazısı yok.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-p9.txt): "su ısıtıcı ı" #1 "veito su ısıtıcı ısıtmıyor", #3 "baymak…", #4 "siemens su ısıtıcı ısıtmıyor", #5 "ani su ısıtıcı ısıtmıyor", #7 "veito ani…", #8 "baymak ani…"; "su ısıtıcı neden" #4 "ani su ısıtıcı neden ısıtmaz". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Bosch RDE18214 1M ani su ısıtıcısı montaj ve kullanma kılavuzu 9001217888 (1.7.16), 28 s. PDF https://media3.bosch-home.com/Documents/9001217888_A.pdf md5 162e13b1f239741a718963a464491694 — PDF s.2, 4, 6, 7 · (B) Siemens DE1821415 ani su ısıtıcısı montaj ve kullanma kılavuzu, 52 s. PDF (Türkçe s.46-50) https://media3.bsh-group.com/Documents/9000806148_A.pdf md5 c97c9386e8b30203083a4f56efd5cf1b — PDF s.46, 47, 49, 50 (adres siemens-home.bsh-group.com/tr/tr/product/DE1821415 ürün sayfasından).
# Veito ve Baymak: üretici alanında Türkçe kılavuz bulunamadı (veitogr.com / veito.ro dağıtıcı alanı, Baymak PDF'i bayi sitesinde); yazı yalnız Bosch ve Siemens belgesine dayanır, Veito/Baymak adı geçmez.
# BİLEREK YAZILMAYANLAR: kapak açma, iç otomatik sigorta, güç değişim anahtarı, dirsekli valf ve su akış ayar tertibatı (teknisyen işi, B s.50) · ısıtıcı bloktaki süzgeç (teknisyen) · elektrik bağlantısı (A s.2 yalnız yetkili teknisyen) · kireç çözme (A s.3 yalnız uzman) · fiyat (#46).
# Alıntı denetimi: ani-su-isitici-isitmiyor.KAYNAK.md
kisaCevap: "Bosch RDE18214 ve Siemens DE1821415 kılavuzlarına göre ani su ısıtıcı ısıtmıyorsa önce ev girişindeki sigortaya bakılır, sonra debi azaltılır. Siemens'e göre elektrik kesintisinden sonra cihaz, sıcak su musluğu en az 1 dakika açık kalmadan ısıtmaya başlamaz."
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Cihazın kullanma kılavuzu"]
steps:
  - "Cihazda kaçak ya da hata varsa ev girişindeki sigortaları kapat ve soğuk su hattını kapat."
  - "Ev girişindeki sigortanın atıp atmadığını kontrol et."
  - "Elektrik ya da su kesintisinden sonraysa başlangıç durulamasını yap."
  - "Sıcak su musluğunu biraz kıs; debiyi azalt."
  - "Termostatlı batarya varsa cihazın sıcaklık ayarını en yükseğe getir."
  - "Musluk ve duş başlığı süzgecini temizle."
  - "Su yine ısınmıyorsa müşteri hizmetlerini ara, E- ve FD-numarasını bildir."
faq:
  - q: "Ani su ısıtıcı elektrik kesintisinden sonra neden ısıtmıyor?"
    a: "Siemens DE1821415 kılavuzu elektrik kesilmesinden ya da ilk devreye almadan sonra sıcak su musluğunu açıp en az 1 dakika boyunca, dakikada en az 6 litre debiyle su akıtmanı istiyor. Cihaz güvenlik nedeniyle ancak bundan sonra ısıtmaya başlıyor."
  - q: "Kışın ani su ısıtıcı neden yeterince ısıtmıyor?"
    a: "Bosch ve Siemens kılavuzlarına göre kışın giriş suyu sıcaklığı düşer ve istenen çıkış sıcaklığı elde edilemeyebilir. İkisi de musluktan akan su miktarını, istenen sıcaklığa ulaşılana kadar kısmanı istiyor."
  - q: "Ani su ısıtıcıda kısa süre soğuk su gelmesi arıza mı?"
    a: "Bosch ve Siemens kılavuzları bunu otomatik giderilen bir durum olarak yazıyor: cihazdaki hava algılayıcısı suda hava algılayınca ısıtma gücünü kısa süre kapatıyor, ani su ısıtıcısı birkaç saniye sonra kendiliğinden yeniden devreye giriyor."
  - q: "Ani su ısıtıcının iç sigortasını kendim kontrol edebilir miyim?"
    a: "Hayır. Siemens DE1821415 kılavuzu cihazın içindeki otomatik sigortanın bir teknisyene kontrol ettirilmesini istiyor. Kullanıcıya düşen iş ev girişindeki sigortayı kontrol etmek."
images:
  coverAlt: "Sade kettle ve yanında termometre çizimi"
  steps:
    - "Sigorta kutusundaki şalteri indiren beyaz eldivenli sade siluet el"
    - "Sigorta kutusundaki şalterlere bakan beyaz eldivenli sade siluet el"
    - "Sıcak su musluğunu sonuna kadar açan beyaz eldivenli sade siluet el"
    - "Musluğu biraz kısan beyaz eldivenli sade siluet el"
    - "Ani su ısıtıcının döner ayar düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Musluk ucundaki süzgeci söken beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında ani su ısıtıcı"
---

Ani su ısıtıcıdan su sızıyorsa ya da cihazda bir hata görüyorsan önce ev girişindeki sigortaları kapat, sızıntıda soğuk su giriş tesisatını da kapat. Siemens DE1821415 kılavuzu arıza durumunda derhal sigortaları kapatmanı istiyor. Bosch RDE18214 kılavuzuna göre su ısınmıyorsa ilk kontrol ev girişindeki sigortadır.

Siemens elektrik kesintisinden, Bosch su kesintisinden sonra sıcak su musluğunu en az 1 dakika açık tutmanı istiyor; cihaz güvenlik nedeniyle ancak bundan sonra ısıtmaya başlıyor. Siemens bu durulamada debinin dakikada en az 6 litre olmasını yazıyor. Kendi cihazının kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız kullanıcının yapabildiği kontrolleri anlatıyor. İki kılavuz da ani su ısıtıcının yalnız teknisyen tarafından bağlanıp devreye alınabileceğini, tamir işlerinin teknisyen işi olduğunu yazıyor. Kapak açma, iç sigorta, güç ayarı ve elektrik bağlantısı servisindir.

## Ani su ısıtıcı neden ısıtmaz?

| Belirti | Kılavuzdaki neden | Kim giderir |
|---|---|---|
| Su hiç ısınmıyor | Ev girişindeki sigorta atmış | Kullanıcı kontrol eder (Bosch, Siemens) |
| Kesintiden sonra sıcak su yok | Elektrik kesilmesi ya da ilk devreye alma | Kullanıcı: başlangıç durulaması (Siemens) |
| Ayarlanan sıcaklığa ulaşmıyor | Debi çok yüksek, cihaz güç sınırında | Kullanıcı musluğu kısar |
| Kışın ılık geliyor | Giriş suyu sıcaklığı düştü | Kullanıcı debiyi azaltır |
| Ev sigortası sağlam, su yine soğuk | Cihazın içindeki otomatik sigorta atmış ya da güç değişim anahtarı yanlış | Teknisyen (Siemens) |

## Adım adım: ani su ısıtıcı ısıtmıyorsa ne yapılır?

**1. Cihazda kaçak ya da hata varsa ev girişindeki sigortaları kapat ve soğuk su hattını kapat.** Bosch hatalı bir durumda derhal şebeke gerilimini kesmeni, cihazda kaçak varsa soğuk su hattını kapatmanı istiyor. Cihazın kapağını açma; Bosch cihazı açmadan önce akım girişinin kesilmesini şart koşuyor ve bu iş teknisyenindir.

**2. Ev girişindeki sigortanın atıp atmadığını kontrol et.** Bosch ve Siemens sorun tablosunda "su ısınmıyor" satırının ilk nedeni ev girişindeki sigortanın atması. Sigortayı kontrol et; iki kılavuzda da bu kullanıcının yapacağı iş olarak geçiyor. Ev sigortası sağlamsa Siemens tablosundaki sıradaki nedenler cihazın güç sınırı, iç otomatik sigorta ve güç değişim anahtarı; sonuncu ikisi teknisyen işi.

**3. Elektrik ya da su kesintisinden sonraysa başlangıç durulamasını yap.** Su kesilmesinden sonra Bosch ve Siemens önce ev girişindeki sigortaları kapatmanı, tesisattaki hava boşalana kadar sıcak su musluğunu açık tutmanı, sonra sigortaları açmanı istiyor. Ardından musluğu tamamen açıp en az bir dakika su akıt.

**4. Sıcak su musluğunu biraz kıs; debiyi azalt.** Bosch tamamen açık bir muslukta daha yüksek sıcaklığa ulaşılamıyorsa cihazın gücüne göre fazla su aktığını yazıyor. Bu durumda sıcak su musluğunu biraz kısmanı istiyor. Siemens de güç sınırına erişildiğinde debiyi su musluğundan azaltmanı söylüyor.

**5. Termostatlı batarya varsa cihazın sıcaklık ayarını en yükseğe getir.** Bosch cihaz termostatlı banyo bataryasına bağlıysa sıcaklığı "60 °C" konumuna, Siemens "maks" konumuna getirmeni istiyor. Siemens'te döner düğmeyle 30 °C ile 60 °C arasında kademesiz ayar yapılır.

**6. Musluk ve duş başlığı süzgecini temizle.** İki kılavuz da su akışı yetersizse musluğun ya da duş başlığının süzgecini söküp temizlemeni veya kirecini sökmeni istiyor. Bundan sonra debi hâlâ düşükse Bosch'a göre cihaz içindeki süzgeç tıkalıdır ve bunu bir uzman temizler.

**7. Su yine ısınmıyorsa müşteri hizmetlerini ara, E- ve FD-numarasını bildir.** Bosch numaraları ön kapağın arka tarafındaki model levhasında, Siemens açılabilir kumanda kapağının iç tarafında gösteriyor. Siemens iç otomatik sigortanın ve güç değişim anahtarının teknisyen işi olduğunu yazıyor.

## Kışın ani su ısıtıcı neden daha az ısıtır?

Bosch kış aylarında suyun giriş sıcaklığı düştüğü için istenen çıkış sıcaklığının elde edilemeyebileceğini yazıyor. Çözüm olarak su musluğundan akan miktarı, istenen sıcaklığa ulaşılana kadar azaltmanı istiyor. Siemens aynı satırı "kış kullanımı" başlığıyla veriyor. Bosch ayrıca giriş suyu sıcaklığı değiştiğinde musluktaki çıkış sıcaklığının da değiştiğini, musluktan soğuk su karıştırmanın gereksiz su ve enerji tüketimine yol açtığını yazıyor; Bosch'ta en ekonomik ayar yaklaşık "40 °C".

## Bu konuda hangi yazılara bakılır?

Kesinti sonrası başka cihazlar da sorun çıkarıyorsa [elektrik kesintisi sonrası cihaz arızaları](/blog/elektrik-kesintisi-sonrasi-cihaz-arizalari/), gazlı şofben kullanıyorsan [şofben neden ısıtmaz](/blog/sofben-neden-isitmaz/), depolu cihaz için [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/) yazısına bak.

---

**Kaynak künyesi.** Sigorta, başlangıç durulaması, debi, sıcaklık ayarı, süzgeç ve kış kullanımı bilgisi Bosch RDE18214 1M ve Siemens DE1821415 ani su ısıtıcısı montaj ve kullanma kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu adımlardan sonra da su ısınmıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
