---
title: "AEG bulaşık makinesi arıza kodları: i10, i20, i30, iF1"
description: "AEG bulaşık makinesinde i10 su almıyor, i20 boşaltmıyor, i30 taşma koruması, iF1 su seviyesi yüksek demek. Kod listesi ve kılavuzdaki kontrol sırası."
slug: "aeg-bulasik-makinesi-ariza-kodlari"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme W2 AEG). origin/main (08904bf) content/blog/'da AEG slug'ı ya da başlığı yok.
# Arama kanıtı (#164, bu koşu 24 Eki, hl=tr gl=tr): "aeg bulaşık makinesi a" → 1. "aeg bulaşık makinesi arıza kodları"; "aeg bulaşık makinesi i" → 1. "…i20 hatası", 3. "…i30 hatası"; "aeg bulaşık makinesi h" → 1. "…i30 hatası", 3. "…i20 hatası". GSC: satır yok.
# Belge (#88). Zincir: https://www.aeg.co.uk/support/user-manuals/ (200) → "FSE73727P" araması → PNC 911 434 668 (?q=911434668, 200) → en-GB User Manual (onay 2024-12-16)
#   → https://electrolux.bynder.com/asset/a8a328ca-93f2-42fa-8a16-cd1b7590a91e/241217V37I-pdf.pdf (200, application/pdf, 1.606.794 bayt)
#  (B) AEG 7000 GlassCare FSE73727P bulaşık makinesi kullanım kılavuzu, EN, 52 s., md5 674698ccd07b3cded91fc0feefd0cc34 — s.7, s.18, s.19, s.21, s.22, s.23
#  Kılavuzun İngilizce baskısı; alıntılar Türkçeye çevrildi, orijinaller KAYNAK'ta.
# Hub kuralı: i20 ve i30 bu sayfada tablo satırı; tekil "i20 hatası" / "i30 hatası" sayfası açılmadı.
# BİLEREK YAZILMAYANLAR: "30 hatası", "10 hata kodları" gibi i'siz yazımlara eşdeğerlik iddiası · pompa, ısıtıcı, kart teşhisi · taşma koruması sıfırlama yöntemi (kılavuzda yok) · fiyat (#46).
# Alıntı denetimi: aeg-bulasik-makinesi-ariza-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bir fırça", "Emici bir bez", "Küçük bir kap"]
steps:
  - "Ekrandaki kodu not al; zemine yansıyan kırmızı ışığın yanıp sönüp sönmediğine bak."
  - "i10 ya da i11 görüyorsan musluğun açık ve tıkalı olmadığını, basıncın düşük olmadığını, giriş hortumunun ve filtresinin temiz olduğunu kontrol et."
  - "i20 görüyorsan gider ağzını, makinenin iç filtre sistemini ve tahliye hortumunun bükülmediğini kontrol et."
  - "i30 görüyorsan musluğu kapat, makinenin doğru kurulduğunu ve sepetlerin kılavuza göre yerleştirildiğini kontrol et."
  - "i41–i44 ya da iF1 görüyorsan filtreleri temizle, makineyi kapatıp aç; iF1'de tahliye hortumunun yüksekliğine bak."
  - "i51–i5F, i61, i69, iC0 ya da iC3 görüyorsan makineyi kapatıp aç; i61'de giriş suyunun 60 °C'yi aşmadığından emin ol."
  - "Kontrolden sonra makineyi kapatıp aç; kod geri gelirse fişi çek, makineyi kullanma ve yetkili servisi ara."
faq:
  - q: "AEG bulaşık makinesinde i20 ne demek?"
    a: "AEG'nin kullanım kılavuzuna göre i20, makinenin suyu boşaltamadığı anlamına geliyor. Kılavuz lavabo altındaki gider ağzının, makinenin iç filtre sisteminin tıkalı olmadığını ve tahliye hortumunda büküm olmadığını kontrol etmeni istiyor."
  - q: "i30 hatası neden çıkar?"
    a: "i30, taşma önleme düzeneğinin devreye girdiğini gösteriyor. AEG'nin önerisi musluğu kapatmak, makinenin doğru kurulduğundan emin olmak ve sepetlerin kılavuzdaki gibi yerleştirildiğini kontrol etmek. Kod sürerse yetkili servise başvurman gerekiyor."
  - q: "i10 ile i11 arasında fark var mı?"
    a: "Kılavuz ikisini aynı satırda veriyor: makine su almıyor. Kontrol listesi de aynı: musluk açık ve tıkalı değil mi, su basıncı yeterli mi, giriş hortumundaki filtre temiz mi, hortumda büküm var mı?"
  - q: "Zemine yansıyan kırmızı ışık yanıp sönüyor, ne demek?"
    a: "Bu modelde Beam-on-Floor adlı ışık, program boyunca zemine kırmızı yansıyor ve program bitince yeşile dönüyor. Kılavuza göre kırmızı ışığın yanıp sönmesi makinede bir arıza olduğunu gösteriyor; ekrandaki kodu kontrol et."
  - q: "Kod sürerken makineyi kullanabilir miyim?"
    a: "AEG bunu önermiyor. Kılavuz sorun tamamen giderilene kadar makinenin kullanılmamasını, fişin çekilmesini ve makinenin düzgün çalıştığından emin olana kadar yeniden takılmamasını istiyor."
images:
  coverAlt: "Kapağı kapalı, ankastre bir bulaşık makinesinin önündeki zemin"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda yere oturan ayaklar ve su terazisi"
    - "Çizim: solda bulaşık makinesi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

AEG bulaşık makinesi programın ortasında durdu ve ekranda **i** harfiyle başlayan bir kod çıktı. AEG bu kodları kılavuzun sorun giderme bölümünde, belirtilerle birlikte tek tabloda veriyor; kılavuza göre sorunların çoğu servis çağırmadan çözülebiliyor. Bu yazıda AEG'nin İngiltere sitesindeki kılavuz sayfasından indirdiğimiz 7000 GlassCare (FSE73727P) bulaşık makinesi kılavuzunun İngilizce baskısını kullandık; alıntılar bizim çevirimiz. Kodlar modele göre değişebilir; kendi kılavuzunla karşılaştır.

Olası arızayı benservis.com'daki ücretsiz teşhisten öğrenebilirsin.

> ⚡ **Kısa özet:** i10/i11 su almıyor, i20 su boşaltmıyor, i30 taşma önleme devrede, i41–i44 su seviyesi algılayıcısı, iF1 makinede su fazla. Pompa, sıcaklık ve teknik arıza kodlarında makineyi kapatıp aç; geri gelirse yetkili servis.

## Kodlar ve anlamları

| Kod | AEG'ye göre anlamı | Kim ne yapar |
|---|---|---|
| **i10, i11** | Makine su almıyor | 🛠️ Musluk, basınç, giriş hortumu ve filtresi |
| **i20** | Makine suyu boşaltmıyor | 🛠️ Gider ağzı, iç filtreler, tahliye hortumu |
| **i30** | Taşma önleme düzeneği devrede | 🛠️ Musluğu kapat, kurulum ve sepet düzeni; sürerse servis |
| **i41–i44** | Su seviyesi algılayıcısında arıza | 🛠️ Filtreleri temizle, kapat-aç |
| **i51–i59, i5A–i5F** | Yıkama ya da boşaltma pompasında arıza | 🔧 Kapat-aç; sürerse servis |
| **i61, i69** | Su çok sıcak ya da sıcaklık algılayıcısı arızası | 🛠️ Giriş suyu 60 °C'yi aşmamalı; kapat-aç |
| **iC0, iC3** | Teknik arıza | 🔧 Kapat-aç; sürerse servis |
| **iF1** | Makinedeki su seviyesi çok yüksek | 🛠️ Filtreler, tahliye hortumu yüksekliği, kapat-aç |

## Adım adım: evde denenecekler

**1. Kodu oku, ışığa bak.** Ekrandaki kodu not al. Bu modelde zemine yansıyan Beam-on-Floor ışığı program boyunca kırmızı yanıyor, bitince yeşile dönüyor; kırmızı ışığın yanıp sönmesi kılavuza göre bir arıza olduğunu gösteriyor.

**2. i10/i11'de su tarafına bak.** AEG'nin sırası şu: musluk açık mı, musluk tıkalı mı, su basıncı çok düşük mü? Basınç için kılavuz yerel su idaresine danışmanı öneriyor. Ardından giriş hortumundaki filtrenin temiz olduğunu ve hortumda büküm olmadığını kontrol et. Tezgâh altına konan eşyalar hortumu ezmiş olabilir.

**3. i20'de tahliye yoluna bak.** Lavabo altındaki gider ağzı tıkalı olmamalı, tahliye hortumunda büküm olmamalı. En sık neden makinenin kendi filtre sistemi: tabandaki filtreyi saat yönünün tersine çevirip çıkar, içindeki ikinci filtreyi ayır, düz filtreyi kaldır ve hepsini yıka. Haznenin kenarında yemek artığı kalmadığından emin ol. Düz filtreyi iki kılavuzun altına doğru oturt, diğer iki filtreyi birleştirip saat yönünde kilitlenene kadar çevir. AEG yanlış takılan filtrenin kötü yıkamaya ve makinenin zarar görmesine yol açabileceğini yazıyor.

**4. i30'da musluğu kapat.** i30 taşma önleme düzeneğinin çalıştığını gösteriyor. Önce musluğu kapat. Sonra makinenin doğru kurulduğunu ve sepetlerin kılavuzdaki yerleştirme yönergesine göre doldurulduğunu kontrol et. Kontrollerden sonra kod sürüyorsa yetkili servise başvur.

**5. i41–i44 ve iF1'de filtreleri temizle.** Su seviyesi algılayıcısı arızasında ve makinede su fazla olduğunda kılavuzun ortak önerisi filtrelerin temiz olması ve makinenin kapatılıp açılması. iF1'de ayrıca tahliye hortumunun zeminden doğru yükseklikte takılı olduğunu kontrol et; değer kurulum talimatında.

**6. Pompa, sıcaklık ve teknik kodlarda kapat-aç.** i51–i59 ya da i5A–i5F pompa arızası, iC0 ve iC3 teknik arıza demek; AEG'nin tek önerisi makineyi kapatıp açmak. i61 ve i69'da giriş suyunun sıcaklığı 60 °C'yi aşmamalı. Makine sıcak su hattına bağlıysa bu kod daha anlamlı olabilir (çıkarım).

**7. Sonra yeniden dene.** Kontrolden sonra makineyi kapatıp yeniden aç. Kod geri geliyorsa AEG makineyi sorun tamamen giderilene kadar kullanmamanı, fişini çekmeni ve düzgün çalıştığından emin olana kadar yeniden takmamanı istiyor.

## Kodsuz belirtiler

Kılavuzun aynı tablosunda kod göstermeyen ama sık sorulan belirtiler de var. Makinenin çalışırken birkaç kez durup yeniden başlaması normal; AEG bunun temizlik ve enerji tasarrufu için olduğunu yazıyor. Program sırasında kapağın kendiliğinden aralanması AirDry işlevinden; temel ayarlardan kapatılabiliyor. Kapaktan küçük sızıntı varsa makine yatay değildir ya da kapak hazneye ortalanmamıştır; ayakları ayarla.

Makinenin içinden takırtı ya da vurma sesi geliyorsa bulaşıklar sepete doğru dizilmemiştir ya da püskürtme kolları serbestçe dönemiyordur. İç kısımda kötü koku varsa AEG kireç çözücü ya da bulaşık makinesine özel bir temizlik ürünüyle Machine Care programını çalıştırmanı öneriyor; programdan önce filtreleri ve püskürtme kollarını temizlemen gerekiyor.

## Ne zaman servis

- i30 kurulum ve sepet kontrolünden sonra sürüyorsa ya da makinenin altında su varsa
- Pompa, sıcaklık ya da teknik arıza kodu kapat-aç sonrası geri geliyorsa
- Aynı hattaki diğer cihazlar kapalıyken de makine sigortayı attırıyorsa; kılavuz bunu iç elektrik arızası olarak servise bırakıyor

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumlar, filtreler, sepet düzeni ve kapat-aç sende; pompalar, ısıtıcı, algılayıcılar, taşma düzeneği ve elektronik kart AEG yetkili servisinin.

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Programı iptal etmek ya da ayarları sıfırlamak için [AEG bulaşık makinesi resetleme](/blog/aeg-bulasik-makinesi-resetleme/), filtrelerin marka fark etmeksizin temizliği için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) sayfasına bak. Bil, gör, çağır.
