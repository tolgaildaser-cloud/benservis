---
title: "Zanussi bulaşık makinesi arıza kodları: yanıp sönen ışıklar"
description: "Zanussi bulaşık makinesinde program ışıkları kaç kez yanıp sönüyorsa o arıza kodu. Kılavuza göre her kodun anlamı ve evde yapılacak kontroller."
slug: "zanussi-bulasik-makinesi-ariza-kodlari"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme W3). origin/main 08904bf'de "zanussi" geçen slug/başlık/gövde YOK.
# GSC: "zanussi" satırı yok. OT (bu koşu): "zanussi bulaşık makinesi a" → 2. "zanussi bulasik makinesi ariza kodlari"; "zanussi bulaşık makinesi k" → 2.; "zanussi bulaşık makinesi arıza" → 2.
# Belge zinciri (#88): zanussi.co.uk/support/user-manuals (model araması ZDLN2621 → PNC 911535285, /api/usermanual/search 200) → electrolux.bynder.com PDF, HTTP 200.
#  (D) Zanussi ZDLN2621 User Manual EN, 28 s., md5 2d837c983ef30c716646855c1f0b9770 (sorun giderme s.19-21)
# İngilizce baskı, alıntılar çevrildi, orijinali KAYNAK.md'de.
# Bu modelde ekranda harfli kod (i20 vb.) YOK; kod = program tuşu ışıklarının yanıp sönme sayısı. Belgede olmayan i10/i20/i30 yazılmadı.
# Hub: Zanussi bulaşık kodlarının tek sayfası. su-almiyor / su-bosaltmiyor kardeşleri belirti sorgusu (OT ayrı), kod sayfası değil.
# BİLEREK YAZILMAYANLAR: pompa sökümü · sensör değişimi · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Program tuşlarının ışıklarının kaç kez yanıp söndüğünü say."
  - "Tek yanıp sönmede musluğu, su basıncını ve giriş hortumunu kontrol et."
  - "Çift yanıp sönmede lavabo bağlantısını, filtreleri ve tahliye hortumunu kontrol et."
  - "Üç kez yanıp sönmede musluğu kapat ve sepetlerin doğru yüklendiğine bak."
  - "Dört ya da on beş kez yanıp sönmede filtreleri temizle, tahliye hortumunun yüksekliğine bak ve makineyi kapatıp aç."
  - "Beş, altı ya da on iki kez yanıp sönmede gelen suyun sıcaklığına bak ve makineyi kapatıp aç."
  - "Kod dönerse makinenin fişini çek ve yetkili servisi ara."
faq:
  - q: "Zanussi bulaşık makinesinde ışıklar neden yanıp sönüyor?"
    a: "Zanussi ZDLN2621 kılavuzuna göre bazı arızalarda program tuşlarının ışıkları aralıklarla yanıp söner ve aralıklı sesli uyarı çalar. Işığın kaç kez yanıp söndüğü arıza kodudur: tek sayı su almıyor, iki su boşaltmıyor, üç taşma emniyeti anlamına geliyor."
  - q: "Işıklar iki kez yanıp sönüyor, ne yapmalıyım?"
    a: "Kılavuza göre bu, makinenin suyu boşaltamadığını gösteriyor. Lavabo bağlantısının tıkalı olmadığını, iç filtre sisteminin temiz olduğunu ve tahliye hortumunun bükülmediğini kontrol et. Sonra makineyi kapatıp aç."
  - q: "Taşma emniyeti devreye girdi, ne demek?"
    a: "Kılavuz üç kez yanıp sönmeyi taşma önleme düzeneğinin devrede olması diye tanımlıyor. Musluğu kapat, makinenin doğru kurulduğundan ve sepetlerin kılavuza göre yüklendiğinden emin ol. Sorun sürerse servisi ara."
  - q: "Zanussi bulaşık makinesinde i20 kodu var mı?"
    a: "ZDLN2621 kılavuzunda ekranda harfli kod yok; arıza kodları program tuşu ışıklarının yanıp sönme sayısıyla veriliyor. Ekranlı bir modelin varsa kendi kılavuzunun sorun giderme tablosuna bak."
  - q: "Kontrolden sonra makineyi kullanmaya devam edebilir miyim?"
    a: "Kılavuz, sorun tamamen giderilene kadar makineyi kullanmamanı öneriyor. Kontrolden sonra makineyi kapatıp aç; sorun tekrar ederse fişini çek, düzgün çalıştığından emin olana kadar takma ve yetkili servisi ara."
images:
  coverAlt: "Kapağının üst kenarında program tuşlarının ışıkları yanan ankastre bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
---

Zanussi bulaşık makinende program tuşlarının ışıkları aralıklarla yanıp sönüyor ve kesik kesik bir uyarı sesi geliyorsa makine sana bir arıza kodu veriyor. Zanussi'nin ZDLN2621 kullanım kılavuzunda (kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi) bu kodlar ekranda harfle değil, **ışıkların kaç kez yanıp söndüğüyle** gösteriliyor. Kılavuza göre sorunların çoğu servis çağırmadan çözülebiliyor. Senin modelinde farklı bir gösterim olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Işıkları say. Tek yanıp sönme su girişi, iki tahliye, üç taşma emniyeti. Dört, beş, altı, on iki ve on beş için filtreleri temizleyip makineyi kapatıp aç. Kod dönerse fişi çek, servisi ara.

## Yanıp sönme sayısı ve anlamı

| Yanıp sönme | Kılavuzdaki anlamı | Senin kontrolün |
|---|---|---|
| **1 kez** | Makine su almıyor | Musluk, su basıncı, giriş hortumu filtresi |
| **2 kez** | Makine suyu boşaltmıyor | Lavabo bağlantısı, iç filtreler, tahliye hortumu |
| **3 kez** | Taşma emniyeti devrede | Musluğu kapat, kurulum ve sepet yükü |
| **4 kez** | Su seviyesi sensörü arızası | Filtreleri temizle, kapatıp aç |
| **5 kez** | Yıkama ya da tahliye pompası arızası | Kapatıp aç |
| **6 kez** | Su çok sıcak ya da sıcaklık sensörü arızası | Gelen su 60 °C'yi geçmesin, kapatıp aç |
| **12 kez** | Teknik arıza | Kapatıp aç |
| **15 kez** | Makinedeki su seviyesi çok yüksek | Kapatıp aç, filtreler, tahliye hortumu yüksekliği |

## Adım adım: Zanussi bulaşık makinesinde kodu gidermek

**1. Işıkları say.** Kodu doğru okumak için ışıkların bir seriyi tamamlamasını bekle ve aradaki duraklamaya kadar kaç kez yanıp söndüğünü say. Sayıyı not et; servisi araman gerekirse ilk soracakları şey bu.

**2. Tek yanıp sönme: su girişi.** Kılavuza göre musluğun açık olduğundan, su basıncının çok düşük olmadığından ve musluğun tıkalı olmadığından emin ol. Giriş hortumundaki filtre tıkalı olmamalı, hortum bükülmemeli. Basınçtan emin değilsen kılavuz yerel su idaresine danışmanı öneriyor. Ayrıntı [Zanussi bulaşık makinesi su almıyor](/blog/zanussi-bulasik-makinesi-su-almiyor/) yazısında.

**3. İki kez: tahliye.** Lavabo bağlantısı tıkalı olmamalı, iç filtre sistemi temiz olmalı, tahliye hortumu bükülmemeli. Filtre temizliğinin adımları [Zanussi bulaşık makinesi su boşaltmıyor](/blog/zanussi-bulasik-makinesi-su-bosaltmiyor/) yazısında.

**4. Üç kez: taşma emniyeti.** Kılavuz önce **musluğu kapatmanı** istiyor. Sonra makinenin doğru kurulduğundan ve sepetlerin kılavuzdaki gibi yüklendiğinden emin ol. Taşma emniyeti tekrar devreye giriyorsa sorun makinenin içinde olabilir; bu noktada servis gerekiyor.

**5. Dört ve on beş kez: su seviyesi.** Dört kez yanıp sönme su seviyesi sensöründe arıza, on beş kez makinedeki suyun fazla yüksek olduğu anlamına geliyor. İkisinde de kılavuz filtrelerin temiz olmasını ve makineyi kapatıp açmanı istiyor. On beşte ek olarak tahliye hortumunun yerden doğru yükseklikte takılı olmasına bak; ölçüyü kurulum talimatı veriyor.

**6. Beş, altı ve on iki kez.** Beş kez yıkama ya da tahliye pompasında, on iki kez makinenin içinde teknik bir arıza var; kılavuzun önerisi makineyi kapatıp açmak. Altı kezde makinedeki su fazla sıcak ya da sıcaklık sensörü arızalı. Makineye gelen suyun **60 °C**'yi geçmediğinden emin ol, sonra makineyi kapatıp aç.

**7. Kod dönerse fişi çek.** Kılavuza göre kontrolden sonra makineyi kapatıp açarsın; sorun tekrar ederse yetkili servisi ararsın. Tabloda olmayan kodlarda da doğrudan servis gerekiyor. Kılavuzun uyarısı açık: sorun tamamen giderilene kadar makineyi kullanma, fişini çek ve düzgün çalıştığından emin olana kadar yeniden takma.

## Kod olmayan durumlar

Kılavuz bazı belirtilerin arıza olmadığını da yazıyor. Makinenin çalışma sırasında birkaç kez durup yeniden başlaması normal; en iyi temizliği ve enerji tasarrufunu sağlıyor. Program açıldıktan sonra yaklaşık 5 dakika bekliyorsa makine su yumuşatıcıdaki reçineyi yeniliyor olabilir. Kurutma aşamasında kapak kendiliğinden aralanıyorsa AirDry işlevi açık demektir.

## Kodları önleyen alışkanlıklar

Kılavuz her programdan önce kısa bir kontrol listesi veriyor: filtreler temiz ve doğru takılı olsun, tuz haznesinin kapağı sıkı olsun, püskürtme kolları tıkalı olmasın, tuz ve parlatıcı yeterli olsun, bulaşıklar sepete doğru dizilsin. Filtreleri ve tabandaki çukuru her kullanımdan sonra kontrol etmek, iki ve on beş kez yanıp sönen kodların en sık sebebini baştan ortadan kaldırıyor.

## Ne zaman servis

- Aynı kod kapatıp açtıktan sonra yine çıkıyorsa
- Taşma emniyeti musluk kapalıyken bile devredeyse
- Beş ya da on iki kez yanıp sönme sürüyorsa
- Makine sigortayı attırıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum, filtre, sepet yükü ve kapatıp açma sende; pompa, sensör, ısıtıcı ve elektronik Zanussi yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ve etiketindeki ürün numarası (PNC) ne?
2. Işıklar kaç kez yanıp sönüyor?
3. Makinenin tabanında su var mı?
4. Kod hangi programda çıktı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kod yokken görülen arızalar için [Zanussi bulaşık makinesi arızaları](/blog/zanussi-bulasik-makinesi-arizalari/) yazısına bak. Bil, gör, çağır.
