---
title: "Televizyon kanal ayarlama nasıl yapılır?"
description: "Televizyonda kanal ayarlama: Vestel ve Samsung kılavuzlarına göre yayın türü seçimi, otomatik kanal arama, uydu için TKGS ve manuel arama adımları."
slug: "televizyon-kanal-ayarlama-nasil-yapilir"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P37 (YK #197 boşluk, 2. dalga; PAKETLER.md P37 #221). Slug origin/main'de yok (doğrulayıcı). Satırda üç ifade var (kanal/frekans ayarlama + Türksat 2026 frekans + uydu güncelleme); en güçlü tek konu genel "televizyon kanal ayarlama" seçildi. Uydu güncelleme ayrı yazı (vestel-tv-uydu-guncelleme, P37 #222); bu yazı onunla çakışmasın diye güncellemeyi yalnız anar. Yakın markalı: sunny-tv-kanal-frekans-ayarlama, skytech-tv-kanal-ayarlama, sharp-tv-kanal-ayarlama, panasonic-tv-kanal-arama, sony-tv-anten-ayari.
# Kaynak (#88): Vestel 43U9540 kılavuzu (20277113_k; ilk kurulum yayın türü seçimi, Kurulum menüsü, TKGS, LCN, Manuel Kanal Tarama) + Samsung TV e-Kılavuz BN81-27185C (Anten bağlama, Otomatik Ayarlama, Kablolu ağ arama seçeneği). Sayfa, alıntı ve md5 KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · Türksat 2026 frekans, sembol oranı ve polarizasyon değerleri (iki kılavuzda güncel değer yok; Vestel manuel aramada "doğru girin" diyor) · çanak ve LNB ayarı (servis/uzman) · Samsung ve Vestel dışı markaların menüsü.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Anten, kablo ya da uydu bağlantısı"]
steps:
  - "Yayını anten, kablo, uydu ya da set üstü kutudan mı aldığını belirle."
  - "Anten ya da uydu kablosunu televizyonun doğru girişine takılı tut."
  - "Kumandayla kanal arama menüsünü aç."
  - "Aranacak yayın türünü işaretle."
  - "Uydu seçtiysen anten tipini ve operatörü ayarla."
  - "Aramayı başlat, bitene kadar televizyonu kapatma."
  - "Eksik kanal varsa manuel arama yap ve listeyi düzenle."
faq:
  - q: "Televizyonda kanalları nasıl ararım?"
    a: "Samsung'da Ayarlar, Tüm Ayarlar, Genel ve Gizlilik, Yayın yolunda Otomatik Ayarlama var. Vestel'de Ayarlar, Kurulum altında Otomatik Kanal Arama (Yeniden Ayarlama) var. İkisi de yayın türüne göre kanalları arayıp hafızaya alıyor."
  - q: "Set üstü kutu kullanıyorum, televizyonda arama yapmalı mıyım?"
    a: "Samsung'a göre televizyon bir kablolu yayın kutusuna ya da uydu kutusuna bağlıysa bunu yapman gerekmiyor. Kanallar kutuda duruyor."
  - q: "Arama sırasında LCN sorusu çıkarsa ne yapmalıyım?"
    a: "Vestel'de arama sürerken kanalları LCN'ye göre sıralamak isteyip istemediğini soran bir diyalog görüntülenebiliyor. LCN, mevcut yayınları tanınabilir bir kanal numarası sırasına göre düzenleyen Mantıklı Kanal Numarası sistemi. Kılavuz Evet seçip OK ile onaylamanı istiyor."
  - q: "Türksat için ayrıca ne yapmam gerekir?"
    a: "Vestel'in kılavuzunda uydu kurulumunda Kurulum Tipi Operatör, Uydu Operatörü TKGS seçilerek Türksat Kanal Güncelleme Sistemi kurulumu başlatılıyor. Kılavuz güncel frekans değeri vermiyor; bu yüzden yazıda değer yok."
images:
  coverAlt: "Ekranında kanal arama çubuğu ilerleyen televizyon ve yanında kumanda"
  steps:
    - "Televizyonun yanında üç farklı yayın kablosunu karşılaştıran beyaz eldivenli sade siluet el"
    - "Anten kablosunu televizyonun arkasındaki girişe takan beyaz eldivenli sade siluet el"
    - "Kumandada menü tuşuna basan beyaz eldivenli sade siluet el"
    - "Kumandayla ekrandaki yayın türü kutucuğunu işaretleyen beyaz eldivenli sade siluet el"
    - "Kumandayla ekrandaki uydu seçeneklerinden birini seçen beyaz eldivenli sade siluet el"
    - "Kumandada tamam tuşuna basan beyaz eldivenli sade siluet el"
    - "Kumandayla ekrandaki kanal listesinde bir satırı seçen beyaz eldivenli sade siluet el"
---

Yeni bir televizyon aldın, taşındın ya da kanallar eksik. Her durumda yapılacak iş aynı: televizyona kanalları aratmak. Samsung ve Vestel'in kullanım kılavuzlarını okuyup adımları sadeleştirdik. Menü adları modele ve bölgeye göre değişebilir; iki markanın kılavuzdaki adlarını birlikte veriyoruz.

> ⚠️ **Önce şu sınırı bil:** kanal arama menüden yapılır ve sende. Çatıdaki anten ya da çanağın yönü ve LNB ayarı servis ya da uzman işi. Samsung, anten kablosunu takarken aşırı güç kullanmamanı söylüyor; bağlantı noktası zarar görebilir.

## Adım adım: kanal ayarlama

**1. Yayın türünü belirle.** Çatı anteni mi, kablolu yayın mı, uydu çanağı mı, yoksa set üstü kutu mu kullanıyorsun? Samsung'a göre televizyon bir kablolu yayın kutusuna ya da uydu kutusuna bağlıysa televizyonda arama yapman gerekmiyor. Kutuya bağlı değilsen devam et.

**2. Kabloyu doğru girişe tak.** Vestel'in kılavuzu anten ya da kablolu TV ucunu televizyonun arkasındaki **ANTEN GİRİŞİ (ANT.)** soketine, uydu girişini ise arka sol tarafındaki **UYDU GİRİŞİ (LNB)** soketine bağlamanı istiyor.

**3. Arama menüsünü aç.** Samsung'da **Ayarlar**, **Tüm Ayarlar**, **Genel ve Gizlilik**, **Yayın** yolundaki **Otomatik Ayarlama**'yı seç; kılavuz bu menünün modele ya da bölgeye bağlı olarak görünmeyebileceğini belirtiyor. Vestel'de **Ana Ekran** tuşuna bas, **Ayarlar** içinde **Kurulum**'u aç ve **Otomatik Kanal Arama (Yeniden Ayarlama)** satırına gir.

**4. Yayın türünü işaretle.** Vestel bu menüde dijital anten, dijital kablo, analog ve uydu aramasını ayrı ayrı sunuyor. Seçeneği vurgulayıp OK, Sol ya da Sağ yön tuşuna basınca yanındaki kutu işaretleniyor. Samsung'da DVB-T2 sisteminin bölgeye bağlı olarak desteklenmeyebileceğini kılavuz belirtiyor.

**5. Uydu seçtiysen anten tipini ayarla.** Vestel, uydu aramasından önce bazı ayarların yapılması gerektiğini yazıyor. Anten tipini **Direkt**, **Tekli Uydu Kablosu** ya da **DiSEqC** arasından seçersin. Vestel'e göre TKGS kurulumu için Kurulum Tipini **Operatör**, Uydu Operatörünü **TKGS** olarak ayarlarsın; TKGS, Türksat Kanal Güncelleme Sistemi.

**6. Aramayı başlat ve bekle.** Vestel arama sırasında bulunan kanalların listeye kaydedildiğini yazıyor; arama süresi seçilen arama adımına göre değişiyor. Kanalları LCN'ye göre sıralamak isteyip istemediğini soran diyalog çıkarsa kılavuz **Evet** seçmeni istiyor. Vestel kurulum sırasında televizyonu kapatmamanı da belirtiyor.

**7. Eksik kanalı elle ara, listeyi düzenle.** Samsung'da **Kablolu Arama Seçeneği** frekans ve simge hızı gibi ek seçenekleri ayarlatıyor. Vestel'de **Manuel Kanal Tarama** direkt yayın girişi için kullanılıyor ve kılavuz manuel aramada frekans ayarının doğru girilmesini istiyor. Aramadan sonra Vestel'de **Düzenle** sekmesiyle, Samsung'da **Kanalları Düzenle** ekranıyla listeyi düzenlersin.

## Yayın türüne göre dikkat edilecekler

Vestel kılavuzu her yayın türü için ayrı açıklama veriyor. **Dijital anten** işaretliyse ilk ayarlardan sonra televizyon dijital karasal yayınları arıyor. **Dijital kablo** işaretliyse aramadan önce, ülke seçimine bağlı olarak, kablolu ağ araması yapmak isteyip istemediğini soran bir diyalog çıkabiliyor. Evet dersen ağ seçer ya da frekans, ağ kimliği ve arama adımı gibi değerleri girersin; Hayır dersen başlangıç frekansını, bitiş frekansını ve arama adımını ayarlarsın. **Analog** işaretliyse analog yayınlar aranıyor.

Uyduda anten tipi şöyle seçiliyor. Tek alıcın ve doğrudan alıcıya bağlı bir çanak antenin varsa **Direkt**. Çok sayıda alıcın ve Tekli Uydu Kablon varsa **Tekli Uydu Kablosu**. Birden çok uydu antenin ve bir DiSEqC anahtarın varsa **DiSEqC Anahtarı**. Hangisinin sende olduğunu bilmiyorsan çanağı kuran uzmana sor.

Vestel ilk kurulumda ayrıca hangi yayın türlerinin aranacağını ve şifreli kanalların aranıp aranmayacağını soruyor. Bir yayın türünü sık kullanılan olarak ayarlarsan arama sırasında o türe öncelik veriliyor ve o türde yayın yapan kanallar listenin üst sıralarında yer alıyor.

Arama bittiğinde Vestel **Kanallar** menüsünü açıyor. Oradan listeyi tercihlerine göre düzenleyebilir ya da Ana Ekran tuşuyla çıkıp izlemeye geçebilirsin. Samsung ise televizyon bekleme modundayken kanalları otomatik taratabiliyor (**Beklemede Otomatik Ayar**) ve bir zamanlayıcıyla televizyonu açıp taratabiliyor (**Uyandırma Zamanlayıcısı**).

Aramadan önce sinyale bakmak istersen Vestel'in **Kurulum** menüsünde **Sinyal Bilgileri** satırı var; kullanılabilir frekansların sinyal seviyesini ve kalitesini gösteriyor. Samsung'da benzer ekran **Yayın Sinyali** ve yalnız dijital kanallarda çalışıyor.

## Hangi yol hangi markada

| Konu | Samsung | Vestel |
|---|---|---|
| Otomatik arama | Otomatik Ayarlama | Otomatik Kanal Arama (Yeniden Ayarlama) |
| Elle arama | Kablolu Arama Seçeneği | Manuel Kanal Tarama |
| Liste düzenleme | Kanalları Düzenle | Kanallar menüsü, Düzenle sekmesi |

Markaya özel anlatımlar için [Sunny TV kanal frekans ayarlama](/blog/sunny-tv-kanal-frekans-ayarlama/), [Skytech TV kanal ayarlama](/blog/skytech-tv-kanal-ayarlama/) ve [Sharp TV kanal ayarlama](/blog/sharp-tv-kanal-ayarlama/) yazılarına bakabilirsin. Arama sonuç vermiyorsa [Vestel televizyon sinyal yok](/blog/vestel-televizyon-sinyal-yok/) yazısı yol gösterir.

## Servisi aramadan önce dört not

1. Televizyonun marka ve model kodu.
2. Yayın türü: anten, kablo, uydu ya da set üstü kutu.
3. Aramanın kaç kanal bulduğu.
4. Uyduda ilk kurulumda hangi operatörün seçildiği.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
