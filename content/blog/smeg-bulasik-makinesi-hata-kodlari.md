---
title: "Smeg bulaşık makinesi hata kodları: E1, E5, E6 ve fazlası"
description: "Smeg bulaşık makinesi hata kodları: E1 Aquastop, E5 su girişi, E6 tahliye, E11 pompa ve ışık sayısıyla gelen alarmlar. Kılavuzdaki çözüm sırası."
slug: "smeg-bulasik-makinesi-hata-kodlari"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X3). origin/main b4098f8'de "smeg" slug/başlık yok; genel bulasik-makinesi-hata-kodlari hub'ında Smeg satırı yok.
# Arama kanıtı (bu koşu 12:44, hl=tr gl=tr): "smeg bulaşık makinesi h" → 1. "…hata kodları" (tek öneri); "smeg bulaşık makinesi" → 8. "…hata kodları". GSC: satır yok.
# Hub kuralı: Smeg kodları tek sayfada; tekil kod sayfası açılmadı. "Su almıyor" belirti sayfası ayrı (smeg-bulasik-makinesi-su-almiyor).
# Belge zinciri: smeg.com/tr/info/download-manuals (200; ürün kodu araması, sayfa uç noktası ?_hn:…&productSKU=<kod> 200) → doc.smeg.it/qr/<id>/EN (GET 200 application/pdf; HEAD 405; TR baskısı 404, dil listesinde Türkçe yok).
#  (S2) STL323BL · User instructions EN, 21 s., doc.smeg.it/qr/19293008204/EN, md5 00c487dbaba6df67355aeb95d743e41c
#  (S1) ST4512IN · User Manual EN, 28 s., doc.smeg.it/qr/914779936/EN, md5 0334e6a480bbaa42d6dd351d029bc9e9
# Kılavuzların İngilizce baskısı; alıntılar Türkçeye çevrildi, orijinali KAYNAK'ta. S2 kod tablosu sayfa görüntüsünden doğrulandı (_kaynak/smeg-stl-p-21.png).
# BİLEREK YAZILMAYANLAR: E10, E15 gibi bu iki belgede olmayan kod anlamları · pompa/ısıtıcı teşhisi · fiyat (#46).
# Alıntı denetimi: smeg-bulasik-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Yumuşak fırça"]
steps:
  - "Ekrandaki kodu ya da göstergenin kaç kez yanıp söndüğünü say ve not et."
  - "E1 ya da E11 görüyorsan makineyi kapat, musluğu kapat ve yetkili servisi ara."
  - "Su girişi kodunda musluğu, su basıncını, giriş hortumunu ve hortum filtresini kontrol et."
  - "Tahliye kodunda lavabo giderini, iç filtreleri ve tahliye hortumundaki bükülmeyi kontrol et."
  - "Programı durdur, makineyi kapat, yeniden aç ve programı yeniden kur."
  - "Kod geri gelirse kodu ve model numarasını yetkili servise bildir."
faq:
  - q: "Smeg bulaşık makinesinde E1 ne demek?"
    a: "STL323BL kılavuzunun İngilizce baskısında E1 'Aquastop arızası (bazı modellerde)'. Aquastop su kaçağında taşmayı önleyen bir düzenek. Kılavuza göre E1 ve E11 alarmlarında teknik servisle iletişime geçmen gerekiyor; Aquastop devreye girdiyse arızayı nitelikli bir teknisyen bulmalı."
  - q: "E5 ve E6 hatası nasıl giderilir?"
    a: "E5 su girişi arızası, E6 su tahliye arızası. Kılavuzun genel yolu: mevcut programı durdur, makineyi kapat, yeniden açıp programla. Önce musluğun açık, hortumların bükülmemiş, filtrelerin temiz olduğuna bak. Kod sürerse servise kodu bildir."
  - q: "Ekranda kod yok, bir ışık art arda yanıp sönüyor. Ne demek?"
    a: "ST4512IN gibi ekranı olmayan modellerde alarm kodu göstergenin aralıklı yanıp sönme sayısıyla ve aynı sayıda sesli sinyalle veriliyor: 1 kez su almıyor, 2 kez su boşaltmıyor, 3 kez taşma önleyici devrede, 4 kez su seviyesi sensörü, 5 kez yıkama ya da tahliye pompası, 6 kez su sıcaklığı, 12 kez teknik arıza, 15 kez su seviyesi çok yüksek."
  - q: "E7 kodunda program yarıda kalır mı?"
    a: "Hayır. STL323BL kılavuzuna göre E7 (türbin akış ölçer arızası, bazı modellerde) çevrimin sonunda gösteriliyor ve çevrim yine de tamamlanıyor, çünkü makinenin çalışmasını etkilemiyor. Kod sürekli görünüyorsa servise bildir."
images:
  coverAlt: "Mutfakta tezgâh altına yerleştirilmiş, kapağı kapalı paslanmaz bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda not defteri ve kalem"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Smeg bulaşık makinen yıkamanın ortasında durdu, panelde birkaç ışık birlikte yanıp sönüyor ya da tek bir ışık art arda yanıp sönüp susuyor. Smeg bunu "alarm" olarak adlandırıyor ve her alarmın anlamı kullanım kılavuzunun sorun giderme bölümünde yazıyor. Bu yazı Smeg'in STL323BL ve ST4512IN bulaşık makineleri için yayımladığı kılavuzlara dayanıyor. Smeg'in Türkiye sitesindeki indirme sayfasında Türkçe dil seçeneği yok; kılavuzun İngilizce baskısını kullandık ve alıntıları Türkçeye çevirdik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E1 Aquastop, E11 yıkama pompası: servis. E5 su girişi, E6 tahliye: musluk, hortum, filtre. E7 çevrim sonunda çıkar, çevrim biter. Diğerleri: programı durdur, makineyi kapat, aç, yeniden programla. Ekransız modelde gösterge kaç kez yanıp sönüyorsa kod o.

## STL323BL alarm kodları

Kılavuza göre makine bazı arızaları **birkaç gösterge ışığının aynı anda yanmasıyla** bildiriyor. Bir alarm oluştuğunda makine çalışan programı durduruyor ve arızayı gösteriyor.

| Kod | Kılavuzdaki anlam | Kim |
|---|---|---|
| **E1** | Aquastop arızası (bazı modellerde) | 🔧 Servis |
| **E2** | Güvenlik seviyesi | 🛠️ Sen, sonra 🔧 |
| **E3** | Su ısıtma arızası | 🛠️ Sen, sonra 🔧 |
| **E4** | Su sıcaklığı algılama arızası | 🛠️ Sen, sonra 🔧 |
| **E5** | Su girişi arızası | 🛠️ Sen |
| **E6** | Su tahliye arızası | 🛠️ Sen |
| **E7** | Türbin akış ölçer arızası (bazı modellerde) | ✅ Çevrim biter |
| **E8** | Değişken yıkama sistemi arızası | 🛠️ Sen, sonra 🔧 |
| **E9** | Su giriş sistemi arızası | 🛠️ Sen, sonra 🔧 |
| **E11** | Yıkama pompası arızası | 🔧 Servis |

## Ekransız modelde ışık sayısı

ST4512IN gibi modellerde alarm, ilgili göstergenin **aralıklı yanıp sönme sayısıyla** ve aynı sayıda sesli sinyalle geliyor. Kılavuza göre bu sesli sinyaller kapatılamıyor.

| Yanıp sönme | Kılavuzdaki anlam |
|---|---|
| **1 kez** | Makine su almıyor |
| **2 kez** | Makine suyu boşaltmıyor |
| **3 kez** | Taşma önleyici düzenek devrede |
| **4 kez** | Su seviyesi algılama sensörü arızası |
| **5 kez** | Yıkama ya da tahliye pompası arızası |
| **6 kez** | Su sıcaklığı çok yüksek ya da sıcaklık sensörü arızası |
| **12 kez** | Teknik arıza |
| **15 kez** | Makinedeki su seviyesi çok yüksek |

## Adım adım: Smeg alarmını çözme

**1. Kodu oku.** Hangi kodun göründüğünü ya da göstergenin kaç kez yanıp söndüğünü say. Model numaranı da not et; hangi tabloya bakacağın buna göre değişiyor.

**2. E1 ve E11'de dur.** STL323BL kılavuzu açık: **E1 ve E11 alarmları teknik servisle iletişime geçmenizi gerektirir.** Aquastop devreye girdiyse kılavuzun güvenlik bölümü de arızayı nitelikli bir teknisyenin bulmasını istiyor. Giriş hortumunda bir elektrovana var; hortumu kesme. Arıza sırasında makinenin fişini çek ve musluğu kapat.

**3. Su girişi alarmında musluk ve hortum.** E5 ya da 1 kez yanıp sönme için ST4512IN kılavuzunun sırası: musluğun açık olduğuna, su basıncının çok düşük olmadığına (yerel su idaresine sorulabilir), musluğun tıkalı olmadığına, giriş hortumundaki filtrenin tıkalı olmadığına ve hortumda bükülme olmadığına bak. Ayrıntılı sıra [Smeg bulaşık makinesi su almıyor](/blog/smeg-bulasik-makinesi-su-almiyor/) yazısında.

**4. Tahliye alarmında gider ve filtre.** E6 ya da 2 kez yanıp sönme için: lavabo giderinin tıkalı olmadığına, iç filtre sisteminin temiz olduğuna ve tahliye hortumunda bükülme olmadığına bak. 15 kez yanıp sönme (su seviyesi çok yüksek) için de filtre temizliği ve tahliye hortumunun yerden doğru yükseklikte olması isteniyor. Filtre bakımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

**5. Kapat, aç, yeniden programla.** STL323BL kılavuzunun diğer tüm alarmlar için yolu: **mevcut programı durdurun, bulaşık makinesini kapatın. Açın ve yeni yıkama çevrimini başlatmak için yeniden programlayın.** ST4512IN tablosu da 4, 5, 6, 12 ve 15 kez yanıp sönmede makineyi kapatıp açmanı söylüyor. 6 kez yanıp sönmede gelen suyun 60 °C'yi geçmediğinden emin ol.

**6. Geri gelirse servise kodu söyle.** Arıza sürerse yetkili servisi ara ve **arıza kodunu** bildir. ST4512IN kılavuzu, tabloda olmayan alarm kodları için de yetkili servise başvurmanı istiyor. İletişim bilgileri garanti belgesinde ve Smeg'in sitesinde.

## Ne zaman servis

- E1 ya da E11 görünüyorsa
- Kapatıp açtıktan sonra aynı kod geri geliyorsa
- Makinenin altından su geliyorsa ya da taşma alarmı sürüyorsa
- Makine sigorta attırıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum bükülmesi, filtre ve kapatıp açma sende; Aquastop, pompa, ısıtıcı, sensör ve kart Smeg yetkili servisinin işi. Genel kod listesi [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) sayfasında.

## Servisi aramadan önce kısa özet

1. Modelin ne (kapağın yanındaki etikette yazar)?
2. Hangi kod ya da kaç kez yanıp sönme?
3. Musluk açık mı, hortum bükülü mü?
4. Filtreleri temizledin mi?
5. Makineyi kapatıp açtın mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
