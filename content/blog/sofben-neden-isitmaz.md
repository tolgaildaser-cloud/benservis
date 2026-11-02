---
title: "Şofben neden ısıtmaz? DemirDöküm, ECA ve Baymak kılavuzları"
description: "Şofben neden ısıtmaz? DemirDöküm, Vaillant, ECA ve Baymak kılavuzlarına göre gaz vanası, elektrik, sıcaklık ayarı, su akışı ve RESET kontrolleri."
slug: "sofben-neden-isitmaz"
date: "2026-11-03"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-11-02 Pzt PAZ alt ajanı (YK #197 boşluk yazısı; BOSLUK-TUM.md #207 [BL] "şofben neden ısıtmaz / su ısıtmıyor / sıcak su vermez"). Slug origin/main content/blog/'da yok. Yakın markalı yazılar: ariston-sofben-a1-hatasi, baymak-sofben-a01-hatasi, demirdokum-sofben-f4-arizasi, eca-sofben-ariza-kodlari, vaillant-sofben-ariza-kodlari (kod yazıları; genel belirti yazısı yok). termosifon-suyu-isitmiyor elektrikli cihaz, çakışmaz.
# Konu kanıtı: Google otomatik tamamlama 2 Kas 2026 (bu koşu, ham: _kaynak/OT-2026-11-03.txt): "şofben neden" #2 "şofben neden ısıtmaz", #4 "su ısıtmaz", #8 "sıcak su vermez"; "şofben neden ısıtmaz" #5 demirdöküm, #8 baymak; "şofben sıcak su vermiyor" #3 demirdöküm, #7 eca. GSC kanıt sayılmadı.
# Belgeler (#88), hepsi curl -sL (özel başlık yok), HTTP 200, ham dosyalar _kaynak/sofben-neden-isitmaz/:
#  (D) DemirDöküm gazlı şofben L 275 F (H-TR) / L 350 F (H-TR) kullanma kılavuzu 0020265475_07, 16 s., md5 25f0fd3ea6f31600f5b10ccacfe493e9 — PDF s.9-11, s.13 (Arıza giderme tablosu) https://www.demirdokum.com.tr/downloads/0020265475-07-3044972.pdf
#  (V) Vaillant turboMAG MAG 125/1 3R, 145/1 3R (H-TR) kullanma kılavuzu 0020265477_04, 16 s., md5 082f78c94845c71e8b100ebc757e03d6 — PDF s.10, s.13 (D ile aynı tablo) https://www.vaillant.com.tr/api/download/product/tr/_turbomag_482325.pdf
#  (E) ECA Phoenix PH HM 11 hermetik şofben kullanım ve montaj kılavuzu, 28 s., md5 7d865330a00d6a65b9af9c2564734fc9 — PDF s.5, 7, 15, 16, 17, 18 https://eca.com.tr/uploads/documents//bca/a1c4190f-91a0-4373-b6e2-98f0fa1674be.pdf
#  (B) Baymak hermetik şofben BH12 montaj ve kullanma kılavuzu 300035744 Rev.: 00, 20 s., md5 ae16b6c1593654acf22ba2b793e53dc2 — PDF s.6 (çalıştırma), s.7 (sorun giderme; metin katmanı tarama kalitesinde, sayfa görüntüden doğrulandı) https://www.baymak.com.tr/media/5075/baymak-hermetik-sofben-kullanma-kilavuzu.pdf
#  Not: D ve V aynı tablo; iki ayrı üretici belgesi gibi saymadık, gövdede "iki kılavuz" diye tek satır yazdık. Bağımsız üreticiler E ve B.
# BİLEREK YAZILMAYANLAR: ateşleme elektrodu, iyonizasyon çubuğu, gaz valfi, NTC, fan, kart · gaz giriş basıncı ölçümü · bakım · kayıtlı kod anlamlarının hepsi (kod yazılarına bağlandı) · elektrikli şofben (ayrı konu) · fiyat (#46).
# Alıntı denetimi: sofben-neden-isitmaz.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanma kılavuzu"]
steps:
  - "Gaz kokusu varsa şofbene dokunma; gaz vanalarını kapat, pencereleri aç ve gaz şirketine haber ver."
  - "Elektriği kontrol et: fişi ve binadaki sigortayı gözden geçir."
  - "Hem binadaki hem şofbendeki gaz vanasının açık olduğunu kontrol et."
  - "Şofbenin açık olduğunu ve sıcaklığın çok düşük ayarlanmadığını kontrol et."
  - "Sıcak su musluğunu iyice aç; ekranda alev sembolünün yandığına bak."
  - "Ekranda kod ve RESET yazısı varsa açma-kapama düğmesiyle kılavuzdaki sıfırlamayı yap."
  - "Kod geri geliyorsa ya da F05 görünüyorsa yetkili servise haber ver."
faq:
  - q: "Şofben neden ısıtmaz?"
    a: "DemirDöküm L 275 F ve Vaillant turboMAG kılavuzlarının arıza tablosunda 'Sıcak su yok' belirtisinin nedenleri şunlar: gaz kesme vanası kapalı, binadaki elektrik kesik, ürün kapalı, sıcaklık çok düşük ayarlı, üç başarısız ateşleme sonrası F04 ya da atık gaz yolunda arıza (F05). İlk dört neden kullanıcı kontrolüdür."
  - q: "Şofben ateşleme yapmıyor, ne yapmalıyım?"
    a: "DemirDöküm kılavuzuna göre doğal gazda üç başarısız ateşlemeden sonra ürün F04 arıza konumuna geçer. Açma/kapama şalterini KAPALI konumuna getirip yeniden AÇIK konumuna getirirsin. Ateşleme arızasını üç denemede gideremezsen yetkili bayiye başvurman gerekir."
  - q: "Şofbenin sıcaklığı kaç dereceye ayarlanır?"
    a: "ECA Phoenix PH HM 11 kılavuzuna göre su sıcaklığı 35 ile 60 derece arasında ayarlanır. Modele göre aralık değişir; kendi kılavuzundaki tabloya bak."
  - q: "Şofben kendi kendine neden kapanır?"
    a: "ECA kılavuzu cihazın sürekli çalışma emniyeti olduğunu yazar: uzun süre açık kalırsa kapatır. FX hatası, şofbenin 6 saat boyunca sürekli çalışması nedeniyle görülür ve reset yapılarak düzeltilebilir. Sorun sürerse yetkili servis aranır."
  - q: "Şofbende donma koruması nasıl çalışır?"
    a: "ECA'ya göre su sıcaklığı 7 dereceden düşükse donma koruması devreye girer ve 9 dereceyi geçince devreden çıkar. Koruma için elektrik ve gaz vanası açık olmalıdır. Cihaz kış mevsimine kadar kullanılmayacaksa içindeki su tahliye edilmelidir."
images:
  coverAlt: "Duvara monte beyaz gazlı şofbenin sade çizimi"
  steps:
    - "Pencereyi açan beyaz eldivenli sade siluet el ve duvardaki şofben çizimi"
    - "Prizdeki fişi ve sigorta kutusunu kontrol eden beyaz eldivenli sade siluet el çizimi"
    - "Şofben ve yanında vanaya uzanan beyaz eldivenli sade siluet el çizimi"
    - "Şofbenin sıcaklık ayar düğmesini çeviren beyaz eldivenli sade siluet el çizimi"
    - "Sıcak su musluğunu açan beyaz eldivenli sade siluet el ve şofbenin alev simgesi çizimi"
    - "Şofbenin açma kapama düğmesini sıfırlama konumuna getiren beyaz eldivenli sade siluet el çizimi"
    - "Telefonla yetkili servisi arayan beyaz eldivenli sade siluet el çizimi"
---

Şofben suyu ısıtmıyorsa kılavuzların "Sıcak su yok" satırı dört kullanıcı kontrolü sıralıyor: gaz kesme vanası, elektrik, cihazın açık olması ve sıcaklık ayarı. DemirDöküm L 275 F ile Vaillant turboMAG kılavuzları bu satırda aynı tabloyu veriyor. ECA Phoenix kılavuzu ek olarak 2,5 litre/dakikanın altındaki su akışına izin vermeyen bir akış sensörü tanımlıyor.

Bu yazıda **DemirDöküm L 275 F**, **Vaillant turboMAG**, **ECA Phoenix PH HM 11** ve **Baymak BH12** hermetik şofben kullanma kılavuzlarını karşılaştırıyoruz. Düğme adları modele göre değişir; kendi tip etiketine ve kılavuzuna bak. Ateşleme, gaz valfi ve sensör gibi parçalar servis işidir; bu yazıda anlatılmıyor.

> ⚠️ **Gaz kokusu varsa şofbene dokunma.** ECA'nın kılavuzuna göre sıra şu: gaz vanalarını kapat, kibrit ve çakmak yakma, kapı ve pencereleri aç, elektrikli cihazların düğmelerine ve fişlerine dokunma, gaz kokulu ortamda telefon kullanma, 187 numaralı telefondan gaz şirketine haber ver.

## Şofben hangi nedenlerle sıcak su vermez?

DemirDöküm L 275 F ve Vaillant turboMAG kılavuzlarının arıza tablosu aynı satırları veriyor:

| Neden | Kılavuzdaki tedbir |
|---|---|
| Harici gaz kesme vanası ya da şofbendeki gaz kesme vanası kapalı | Her iki gaz kesme vanasını aç |
| Binadaki elektrik beslemesi kesildi | Binadaki sigortayı kontrol et; elektrik gelince ürün kendiliğinden çalışır |
| Ürün kapalı | Ürünü çalıştır |
| Sıcak su sıcaklığı çok düşük ayarlanmış | Sıcaklığı ayarla |
| Üç başarısız ateşleme sonrası F04 (sıvı gazda bir başarısız ateşleme) | Şalteri KAPALI konumuna getirip yeniden AÇIK konumuna getir; üç denemede gitmezse yetkili bayiye başvur |
| Atık gaz yolunda arıza, F05 | Arızayı yetkili bayi giderir |

## Şofben hangi emniyetlerle yanmayı keser?

ECA Phoenix kılavuzu cihazın emniyetlerini tek tek sayıyor: alev kaybı emniyeti, aşırı ısınma emniyeti (85 °C), NTC yüksek sıcaklık emniyeti (71 °C), düşük voltaj emniyeti (170 VAC), akış sensörüyle kuru yanmanın önlenmesi, donma koruması ve sürekli çalışma emniyeti. Bunlardan biri devreye girince şofben ısıtmayı bırakır ve ekranda AL ile bir kod görünür. Baymak da APS kaybı hatasının düşük voltajda (170 volt altında) ortaya çıkabileceğini yazıyor; ECA'nın düşük voltaj hatasında çözüm, elektrik tesisatının yeterli hâle getirilmesi. Yeni takılan cihazda ilk çalıştırmayı ECA'ya göre yalnızca yetkili servis personeli yapar.

## Adım adım: şofben neden ısıtmıyor?

**1. Gaz kokusunu kontrol et.** Ortamda gaz kokusu varsa yukarıdaki sırayı uygula ve şofbeni çalıştırmaya uğraşma. DemirDöküm kılavuzu atık gaz kokusunda da erişebildiğin kapı ve pencereleri açıp ürünü kapatmanı ve yetkili servisi bilgilendirmeni istiyor.

**2. Elektriği kontrol et.** ECA'nın arıza tablosunda cihaz başlatılamıyorsa ilk madde "Fişi kontrol et". DemirDöküm ve Vaillant binadaki sigortanın kontrolünü istiyor; elektrik gelince ürün kendiliğinden çalışmaya başlıyor.

**3. İki gaz vanasını da kontrol et.** DemirDöküm ve Vaillant, harici montajlı vana ile şofbendeki vananın ikisinin de açık olmasını istiyor. Baymak da çalıştırma sırasında gaz vanasının açılmasını sayıyor. ECA ise alev kaybı kodunda gaz bağlantılarının kontrolünü yazıyor. Vanaların yerini ve kullanımını montajı yapan tesisatçıdan öğren.

**4. Şofbenin açık olduğunu ve sıcaklığın düşük ayarlanmadığını kontrol et.** DemirDöküm "ürün kapalı" ve "sıcaklık çok düşük" satırlarını ayrı veriyor. Baymak'ta açma-kapama düğmesi ON konumunda olmalı, ekranda çıkış suyu sıcaklığı görünür. ECA'da sıcaklık düğmeyi çevirerek 35 ile 60 derece arasında ayarlanır.

**5. Sıcak su musluğunu iyice aç.** Baymak'a göre musluk açılınca şofben otomatik devreye girer, ekranda alev sembolü yanar ve musluk sembolü yanıp söner. ECA'nın emniyet listesinde akış sensörü var ve 2,5 litre/dakikanın altındaki su akışına izin verilmiyor; teknik tabloda en düşük su basıncı 0,2 bar. Musluğu tam aç, ekranda alev sembolünü izle.

**6. Kodu ve RESET yazısını kontrol et.** Baymak'ta ekranın sol alt köşesinde RESET yazısı varsa açma-kapama düğmesini RESET konumuna getirip yazı sönene kadar bekle, sonra ON'a al. ECA'da düğmeye 3 saniye basılı tut, RESET yanıp sönünce bırak. DemirDöküm ve Vaillant'ta F04 için şalteri KAPALI'ya, sonra AÇIK'a al. Baymak, yeni takılan cihazda gaz borularındaki hava atılana kadar brülörün yanmayabileceğini ve üç ateşleme denemesinden sonra cihazın bloke olacağını da yazıyor.

**7. Kod geri geliyorsa servise haber ver.** DemirDöküm F04'ü üç denemede gideremezsen yetkili bayiye, F05'i ise doğrudan yetkili bayiye bırakıyor. ECA'nın tablosundaki alev kaybı, gaz valfi ve sensör kodlarının çoğunda çözüm "yetkili servisi arayınız". Kodu ve model bilgisini servise ilet.

## Kod geri gelirse ne yapılır?

Kod yazıları marka bazlı: [Ariston şofben A1 hatası](/blog/ariston-sofben-a1-hatasi/), [Baymak şofben A01 hatası](/blog/baymak-sofben-a01-hatasi/), [DemirDöküm şofben F4 arızası](/blog/demirdokum-sofben-f4-arizasi/), [ECA şofben arıza kodları](/blog/eca-sofben-ariza-kodlari/) ve [Vaillant şofben arıza kodları](/blog/vaillant-sofben-ariza-kodlari/).

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
