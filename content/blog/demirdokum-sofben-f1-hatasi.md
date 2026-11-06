---
title: "DemirDöküm şofben F1 hatası: aşırı ısınma ne demek?"
description: "DemirDöküm şofben (su ısıtıcı) F1 hatası aşırı ısınma demek. L 275 F / L 350 F kılavuzuna göre 85 °C sınırı, açma/kapama ve müşteri hizmetleri."
slug: "demirdokum-sofben-f1-hatasi"
date: "2026-11-10"
updated: "2026-11-10"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 9; BOSLUK.md sürüm 4 #396 "DemirDöküm su ısıtıcı F1 / F4 hatası"). F4 yarısı envanterde VAR: origin/main demirdokum-sofben-f4-arizasi (aynı L 275 F / L 350 F belgeleri) → yazılmadı, bu yazı yalnız F1. Slug origin/main content/blog/'da ve blog-taslaklar/*/ altında yok (6 Kas fetch, 1.311 dosya).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-p9.txt): "su ısıtıcı hata" #1 "demirdöküm su ısıtıcı f1 hatası", #2 "…f4 hatası"; "demirdöküm su ısıtıcı" #6 "…f1 hatası", #8 "…kombi f1 hatası"; "demirdöküm şofben f1" #1 "…f1 arızası", #2 "…f1 hatası", #3 "…f1 hatası resetleme", #5 "…f1 hatası nedir". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (K) DemirDöküm L 275 F (H-TR) / L 350 F (H-TR) gazlı şofben kullanma kılavuzu 0020265475_07, 16 s. PDF https://www.demirdokum.com.tr/downloads/0020265475-07-3044972.pdf md5 25f0fd3ea6f31600f5b10ccacfe493e9 — PDF s.4, 6, 9, 10, 11 · (M) Aynı modeller montaj ve bakım kılavuzu 0020265474_10, 28 s. PDF https://www.demirdokum.com.tr/downloads/0020265474-10-3044973.pdf md5 0dda97382208617d52c29e561dab47d6 — PDF s.21, 22. İkisi de yerel kaynak-d3-G-C kopyasıyla birebir eşleşti.
# BİLEREK YAZILMAYANLAR: NTC sensörü, elektrik ve su devresi kontrolü, kapak açma (M s.22 müşteri hizmetleri; K s.6 kendi başına onarım yok) · gaz ayarı ve gaz basıncı · belgede olmayan "fişi çekip bekle" ya da "kireç F1 yapar" iddiası · F02–F09 ayrıntısı · fiyat (#46).
# Alıntı denetimi: demirdokum-sofben-f1-hatasi.KAYNAK.md
kisaCevap: "DemirDöküm L 275 F / L 350 F montaj ve bakım kılavuzuna göre F.01 aşırı ısınma demek: NTC sensörü su sıcaklığının 85 °C üstüne çıktığını algılar ve gaz girişini keser. Kılavuz açma/kapama şalterini OFF, sonra ON yapmanı, kod sürerse müşteri hizmetlerini aramanı istiyor."
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa hiçbir şeye dokunma; kapı ve pencereleri aç, gaz sayacı vanasını kapat ve binayı terk et."
  - "Ekranda yanıp sönen kodun F01 olduğunu doğrula."
  - "Musluktan gelen suyun sıcaklığını elle, dikkatle kontrol et."
  - "Açma/kapama şalterini OFF konumuna getir, sonra yeniden ON konumuna getir."
  - "Sıcak su sıcaklığı ayarını kontrol et."
  - "Kod yeniden çıkıyorsa şofbeni kullanmaya zorlama, müşteri hizmetlerini ara."
  - "Yıllık kontrol ve iki yılda bir bakımı yetkili servise yaptır."
faq:
  - q: "DemirDöküm şofbende F1 hatası ne demek?"
    a: "DemirDöküm L 275 F / L 350 F montaj ve bakım kılavuzunda F.01 'aşırı ısınma' kodu. NTC sensörü su sıcaklığının 85 °C'nin üstüne çıktığını tespit ediyor ve gaz girişi kesiliyor."
  - q: "DemirDöküm şofben F1 hatası nasıl resetlenir?"
    a: "Kılavuzdaki ilk tedbir açma/kapama şalterini OFF konumuna getirip sonra tekrar ON konumuna getirmek. İkinci tedbir müşteri hizmetleri ile irtibat kurmak; kılavuzda müşteri iletişim merkezi 0850 2221833 olarak yazıyor."
  - q: "F1 hatası sürekli geliyorsa ne yapmalıyım?"
    a: "Montaj ve bakım kılavuzunun arıza giderme tablosunda 'Su sıcaklığı çok yüksek (F01)' satırının nedeni elektrik devresinde ya da su devresinde arıza, tedbiri müşteri hizmetleri ile irtibat. Kullanma kılavuzu üründe kendi başına bakım ya da onarım yapmamanı istiyor."
  - q: "F1 ile F4 hatası arasındaki fark ne?"
    a: "Aynı tabloya göre F.01 aşırı ısınma, F.04 ateşleme arızası demek. F.04'te brülör ateşlenmiyor ya da ateşleme konumunda beklenmedik biçimde sönüyor; ikisinde de ilk tedbir şalteri OFF, sonra ON yapmak."
images:
  coverAlt: "Sade şofben ve yanında kontrol paneli çizimi"
  steps:
    - "Pencereyi açan beyaz eldivenli sade siluet el"
    - "Şofbenin ekranını işaret eden beyaz eldivenli sade siluet el"
    - "Musluktan akan suya dikkatle yaklaşan beyaz eldivenli sade siluet el"
    - "Şofbenin açma kapama şalterini çeviren beyaz eldivenli sade siluet el"
    - "Şofbenin sıcaklık ayar düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Telefonla müşteri hizmetlerini arayan beyaz eldivenli sade siluet el"
    - "Sade şofbenin yanında bakım çantası tutan beyaz eldivenli sade siluet el"
---

Şofbenin ekranında F01 yanıp sönerken ortamda gaz kokusu varsa hiçbir şalteri kullanma, kapı ve pencereleri aç, gaz sayacı vanasını kapat ve binayı terk et. DemirDöküm L 275 F / L 350 F kullanma kılavuzu gaz kokusunda elektrik şalterlerini, telefonu ve zilleri kullanmamanı istiyor. Gaz kokusu yoksa F01, montaj ve bakım kılavuzuna göre aşırı ısınma demek: su 85 °C'yi aşınca gaz girişi kesiliyor.

DemirDöküm kullanma kılavuzu arıza mesajının ana ekran yerine yanıp sönerek gösterildiğini, arıza olduğunda ekteki tabloya göre hareket etmeni yazıyor. Montaj ve bakım kılavuzundaki tabloda F.01'in ilk tedbiri açma/kapama şalterini OFF, sonra ON yapmak; ikinci tedbiri müşteri hizmetleri ile irtibat. Kendi şofbeninin kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız kullanıcının yapabildiği kontrolleri anlatıyor. DemirDöküm üründe kendi başına bakım ya da onarım yapmamanı, arızaların yetkili teknik servis tarafından giderilmesini istiyor. Sensör, elektrik devresi, su devresi ve gaz ayarı servisindir.

## DemirDöküm şofbende F1 hatası ne demek?

| Kod | Kılavuzdaki anlamı | Olası neden | Tedbir |
|---|---|---|---|
| F.01 | Aşırı ısınma | NTC sensörü su sıcaklığını 85 °C'nin üstünde tespit etti, gaz girişi kesildi | Şalter OFF, sonra ON; sürerse müşteri hizmetleri |
| F01 (arıza giderme satırı) | Su sıcaklığı çok yüksek | Elektrik devresinde ya da su devresinde arıza | Müşteri hizmetleri |
| F.02 | Sıcak su/NTC arızası | NTC sensörü arızası | Müşteri hizmetleri |
| F.04 | Ateşleme arızası | Brülör ateşlenmiyor ya da beklenmedik biçimde sönüyor | Şalter OFF, sonra ON; sürerse müşteri hizmetleri |

## Adım adım: DemirDöküm şofben F1 hatası veriyorsa ne yapılır?

**1. Ortamda gaz kokusu varsa hiçbir şeye dokunma; kapı ve pencereleri aç, gaz sayacı vanasını kapat ve binayı terk et.** DemirDöküm açık alevden kaçınmanı, sigara içmemeni, mümkünse üründeki gaz kesme vanasını da kapatmanı istiyor. Binayı terk eder etmez polisi ve itfaiyeyi aramanı, gaz şirketinin acil durum birimine evin dışındaki bir telefondan haber vermeni yazıyor.

**2. Ekranda yanıp sönen kodun F01 olduğunu doğrula.** DemirDöküm arıza mesajını "FXX" biçiminde, ana ekran yerine yanıp sönerek gösteriyor. F04 görüyorsan ateşleme arızası, F05 görüyorsan atık gaz yolu satırına bak.

**3. Musluktan gelen suyun sıcaklığını elle, dikkatle kontrol et.** DemirDöküm yanlış ayarlanan su sıcaklıkları ve hatlardaki sıcak su nedeniyle haşlanma tehlikesi olduğunu yazıyor ve suyun sıcaklığını elle kontrol etmeni istiyor. Suyu önce parmak ucuyla, kısa bir dokunuşla dene.

**4. Açma/kapama şalterini OFF konumuna getir, sonra yeniden ON konumuna getir.** Bu, montaj ve bakım kılavuzunda F.01 için yazılan ilk tedbir. Kullanma kılavuzuna göre şalteri dayanak noktasına kadar saat yönünün tersine çevirdiğinde ekran söner; ayar düğmesini saat yönünde çevirdiğinde ana ekran gelir.

**5. Sıcak su sıcaklığı ayarını kontrol et.** Ayar düğmesini saat yönünde çevirdiğinde ekranda ayarlanan sıcak su sıcaklığı görünür. Kılavuz ayarlanabilir değerlerin yanıp sönerek gösterildiğini, 30 saniye düğmeye dokunmazsan ekranın önceki göstergeye döndüğünü yazıyor.

**6. Kod yeniden çıkıyorsa şofbeni kullanmaya zorlama, müşteri hizmetlerini ara.** Tablodaki ikinci tedbir müşteri hizmetleri ile irtibat. Kılavuzda müşteri iletişim merkezi 0850 2221833 olarak geçiyor. Arıza giderme tablosu "su sıcaklığı çok yüksek (F01)" satırının nedenini elektrik devresinde ya da su devresinde arıza olarak veriyor.

**7. Yıllık kontrol ve iki yılda bir bakımı yetkili servise yaptır.** DemirDöküm çalışma emniyeti ve uzun kullanım ömrü için yetkili teknik servisin yıllık kontrolünü ve iki yılda bir bakımını şart koşuyor. Ekranda bakım sembolü çıkarsa yetkili teknik servise başvurmanı istiyor.

## F1 hatasından sonra şofben kapatılabilir mi?

Kullanma kılavuzu şofbeni yalnız donma riski yoksa geçici olarak kapatmanı istiyor. Şalteri saat yönünün tersine sonuna kadar çevirince ekran söner; artık suyu hattan boşaltmak için su musluğunu açıp sonra kapatırsın. Uzun süreli kapatmada, örneğin tatilde, gaz kesme vanasını ve soğuk su devresi kapatma vanasını da kapatmanı yazıyor. Kapatma vanalarının yerini öğrenmek için montajı yapan uzman tesisatçıya sormanı istiyor. Şofbeni yeniden çalıştırmadan önce kapağın tamamen kapalı olduğundan emin ol.

## Bu konuda hangi yazılara bakılır?

Ekranda F04 varsa [DemirDöküm şofben F4 arızası](/blog/demirdokum-sofben-f4-arizasi/), kod yokken sıcak su gelmiyorsa [şofben neden ısıtmaz](/blog/sofben-neden-isitmaz/) yazısını kullan.

---

**Kaynak künyesi.** F.01 kodu, arıza giderme satırı ve müşteri iletişim merkezi bilgisi DemirDöküm L 275 F / L 350 F montaj ve bakım kılavuzundan (0020265474_10); gaz kokusu, ekran, sıcaklık ayarı, bakım ve kapatma bilgisi aynı modellerin kullanma kılavuzundan (0020265475_07) alınmıştır. Kendi şofbeninin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu adımlardan sonra da F01 geri geliyorsa kodu ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
