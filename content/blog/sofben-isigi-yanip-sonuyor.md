---
title: "Şofben ışığı yanıp sönüyor: DemirDöküm ve ECA ekranı"
description: "Şofben ekranında yanıp sönen ne? DemirDöküm L 275 F ve ECA Phoenix kılavuzuna göre arıza kodu, ayar değeri, RESET, bakım sembolü ve kapanan ekran."
slug: "sofben-isigi-yanip-sonuyor"
date: "2026-11-10"
category: "Kombi/Termosifon"
updated: "2026-11-10"
kisaCevap: "Şofben ekranında yanıp sönen şey ya ayar değeridir ya da arıza kodudur. DemirDöküm L 275 F kılavuzunda ayarlanabilir değerler ve FXX arıza mesajı yanıp sönerek gösterilir. ECA Phoenix PH HM 11'de hata varken AL ve kod dönüşümlü görünür; reset için düğmeye 3 saniye basılır."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı, parti 3 (YK #215; BOSLUK.md sürüm 4 #329 "şofben ışığı yanıp sönüyor / sürekli yanıyor / yanmıyor", ⚠ belge). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: demirdokum-sofben-f4-arizasi, eca-sofben-ariza-kodlari, vaillant-sofben-ariza-kodlari, sofben-neden-isitmaz; ekran ve ışık göstergesini anlatan jenerik yazı yok. Işık dili markaya göre değiştiği için yalnız iki belgelenmiş model yazıldı.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "şofben ışığı" #1 "…sürekli yanıyor", #2 "…yanmıyor", #3 "…neden yanmaz", #5 "…yanıp sönüyor"; "şofben yanıp sönüyor" #1, #2 "demirdöküm şofben yanıp sönüyor", #3 "…ışığı yanıp sönüyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (D) DemirDöküm gazlı şofben L 275 F (H-TR) / L 350 F (H-TR) kullanma kılavuzu 0020265475_07 (16 s. PDF) https://www.demirdokum.com.tr/downloads/0020265475-07-3044972.pdf md5 25f0fd3ea6f31600f5b10ccacfe493e9 — PDF s.9, 10, 11, 13 · (E) E.C.A. Phoenix PH HM 11 hermetik şofben kullanım ve montaj kılavuzu (28 s. PDF) https://eca.com.tr/uploads/documents//bca/a1c4190f-91a0-4373-b6e2-98f0fa1674be.pdf md5 7d865330a00d6a65b9af9c2564734fc9 — PDF s.14, 15, 16, 17.
# BİLEREK YAZILMAYANLAR: başka markaların LED/ışık dili (belgelenmedi) · kod kod arıza anlamları (marka yazılarında) · kart, sensör, gaz valfi teşhisi · fiyat (#46).
# Alıntı denetimi: sofben-isigi-yanip-sonuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanma kılavuzu"]
steps:
  - "Yanıp sönenin bir ayar değeri mi, kod mu, sembol mü olduğuna bak."
  - "Ayar düğmesini yeni çevirdiysen değerin kaydedilmesini bekle."
  - "Ekranda kod varsa kodu not et."
  - "Gaz kesme vanalarının açık olduğunu kontrol et."
  - "Kılavuzdaki yöntemle bir kez resetle."
  - "Bakım sembolü yanıyorsa servisten bakım iste."
  - "Kod geri geliyorsa resetlemeyi sürdürme, servise haber ver."
faq:
  - q: "DemirDöküm şofbende yanıp sönen ne anlama gelir?"
    a: "DemirDöküm L 275 F kılavuzuna göre ayarlanabilir değerler yanıp sönerek gösterilir. Bir arıza varsa FXX biçimindeki arıza mesajı ana ekran yerine yanıp sönerek görünür; bu durumda kılavuzdaki arıza tablosuna göre hareket edersin."
  - q: "ECA şofbende ekranda AL yazısı neden yanıp söner?"
    a: "ECA Phoenix PH HM 11 kılavuzunda hata durumunda AL ve hata kodu ekranda dönüşümlü olarak belirir. Sıfırlamak için düğmeye 3 saniye basılı tutarsın, RESET harfleri yanıp sönmeye başlayınca bırakırsın; hata sürerse yetkili servisi ararsın."
  - q: "Şofbenin ekran ışığı neden kendiliğinden söner?"
    a: "DemirDöküm'de ekran aydınlatması ürün çalıştırılınca ya da bir kumanda elemanına basılınca devreye girer. 30 saniye içinde hiçbir elemana basmazsan aydınlatma söner ve ekran önceki göstergeye döner."
  - q: "Şofben ekranı hiç yanmıyorsa ne yapılır?"
    a: "DemirDöküm arıza tablosu binadaki elektrik beslemesi kesildiyse sigortayı kontrol etmeni yazıyor; ürün elektrik geri gelince otomatik çalışır. ECA Phoenix cihaz başlamıyorsa fişi kontrol etmeni, sorun çözülmezse yetkili servisi aramanı istiyor."
images:
  coverAlt: "Sade şofben ve yanında sigorta kutusu çizimi"
  steps:
    - "Şofbenin ekranına bakan beyaz eldivenli sade siluet el"
    - "Şofbenin ayar düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Not defterine yazan beyaz eldivenli sade siluet el, arkada sade şofben"
    - "Şofbenin altındaki gaz vanasını gösteren beyaz eldivenli sade siluet el"
    - "Şofbenin düğmesine basılı tutan beyaz eldivenli sade siluet el"
    - "Ekranında küçük bir simge olan sade şofben ve yanında beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında sade şofben"
---

Şofben ekranında yanıp sönen şey çoğu zaman ya o an değiştirdiğin bir ayar değeridir ya da bir arıza kodudur. DemirDöküm L 275 F kullanma kılavuzu ayarlanabilir değerlerin ve FXX biçimindeki arıza mesajının yanıp sönerek gösterildiğini yazıyor. ECA Phoenix PH HM 11 kılavuzunda ise hata varken ekranda AL ve hata kodu dönüşümlü görünüyor.

Işık ve sembol dili markadan markaya değişiyor; bu yazı yalnız bu iki modelin ekranını anlatıyor. Kendi şofbeninin kılavuzu başka bir gösterim tarif ediyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız ekranı okumayı, vana kontrolünü ve kılavuzdaki reset yöntemini anlatıyor. DemirDöküm bakım ve onarımı hiçbir şekilde kendi başına yapmamanı istiyor; kapak içi, gaz valfi ve kart servis işidir.

## Şofben ekranında ne yanıp söner?

| Gösterim | DemirDöküm L 275 F | ECA Phoenix PH HM 11 |
|---|---|---|
| Ayar | Ayarlanabilir değerler yanıp söner | Düğme döndürülerek 35–60 °C ayarlanır |
| Arıza | FXX ana ekran yerine yanıp söner | AL ve hata kodu dönüşümlü |
| Reset | RESET sembolü: ürün kapatıldı | Düğmeye 3 sn bas, RESET yanıp sönünce bırak |
| Bakım | Bakım gerekli sembolü; ürün çalışmaya devam eder | — |
| Diğer | Brülör açık sembolü | Alev, musluk, fan ve arıza sembolleri |

## Adım adım: şofben ışığı yanıp sönüyorsa ne yapılır?

**1. Yanıp sönenin bir ayar değeri mi, kod mu, sembol mü olduğuna bak.** DemirDöküm ekranı güncel sıcak su sıcaklığını, brülörün açık olduğunu, RESET işlevini, bakım gereksinimini ve arıza mesajını ayrı sembollerle gösteriyor. ECA ekranında alev sembolü alev olduğunda, musluk sembolü su akışında, arıza sembolü arıza durumunda görünüyor.

**2. Ayar düğmesini yeni çevirdiysen değerin kaydedilmesini bekle.** DemirDöküm ayarlanabilir değerlerin yanıp sönerek gösterildiğini yazıyor. 30 saniye içinde hiçbir kumanda elemanına basmazsan ekran aydınlatması sönüyor ve ekran önceki göstergeye dönüyor.

**3. Ekranda kod varsa kodu not et.** DemirDöküm bir arıza mesajı varsa ana ekranda arıza kodunun gösterildiğini, arıza ya da FXX mesajında ekteki tabloya göre hareket etmeni istiyor. ECA'da AL ile kod dönüşümlü görünüyor. Anlamları için [DemirDöküm şofben F4 arızası](/blog/demirdokum-sofben-f4-arizasi/) ve [ECA şofben arıza kodları](/blog/eca-sofben-ariza-kodlari/) yazılarına bak.

**4. Gaz kesme vanalarının açık olduğunu kontrol et.** DemirDöküm arıza tablosunda ürün çalışmıyorsa ve sıcak su yoksa ilk neden olarak dışarıdaki ve üründeki gaz kesme vanalarının kapalı olmasını sayıyor; tedbir iki vanayı da açmak.

**5. Kılavuzdaki yöntemle bir kez resetle.** DemirDöküm'de doğal gazda üç başarısız ateşleme denemesinden sonra ürün arıza konumuna geçiyor ve F04 gösteriliyor; açma/kapama şalterini KAPALI konumuna getirip yeniden AÇIK konumuna getirince ürün yeniden çalışıyor. ECA'da düğmeye 3 saniye basılı tutuyor, RESET harfleri yanıp sönmeye başlayınca bırakıyorsun.

**6. Bakım sembolü yanıyorsa servisten bakım iste.** DemirDöküm ekranda bakım sembolü görünürse ürün bakımının gerektiğini, bunun için yetkili teknik servise başvurmanı yazıyor. Kılavuza göre ürün bu sırada arıza konumunda değil ve çalışmaya devam ediyor.

**7. Kod geri geliyorsa resetlemeyi sürdürme, servise haber ver.** DemirDöküm ateşleme arızasını üç arıza giderme denemesiyle gideremezsen yetkili bayiye başvurmanı istiyor. ECA resetten sonra hata devam ederse sorun giderme tablosuna bakmanı ya da yetkili servisi aramanı yazıyor; tabloda ardarda 6 kez reset yapma da ayrı bir hata olarak geçiyor.

## ECA ekranındaki fan ve alev sembolleri ne anlatır?

ECA Phoenix kılavuzuna göre fan sembolü baca boyu uzunluğu seçimi gerektiğinde gösteriliyor; kılavuz baca uzunluğu bilgisini montajdan sonra servisin girmesini istiyor. Alev sembolü alev olduğunda görünüyor ve termal yük yüzde 50'nin altındaysa yalnız bir segmenti yanıyor. Yani su akarken alev sembolünün kısalıp uzaması tek başına arıza anlamına gelmiyor; arıza varsa ekranda AL kodu çıkıyor.

## Şofben ekranı neden hiç yanmaz?

DemirDöküm arıza tablosu binadaki elektrik beslemesi kesildiyse sigortayı kontrol etmeni istiyor; ürün şebeke gerilimi geri gelince otomatik olarak çalışmaya başlıyor. ECA Phoenix cihaz açılmıyorsa olası nedeni elektrik bağlantısının olmaması olarak veriyor; fişi kontrol etmeni, sorun çözülmezse yetkili servisi aramanı istiyor. ECA'da şofben açıkken düğmeye uzun basınca ekranda çift çizgi görünüyor ve 1 dakika sonra kayboluyor; kılavuz bunu OFF modu olarak tanımlıyor.

## Bu konuda hangi yazılara bakılır?

Ekran normal ama su ısınmıyorsa [şofben neden ısıtmaz](/blog/sofben-neden-isitmaz/) yazısındaki kontrol sırasını uygula.

---

**Kaynak künyesi.** Ekran sembolleri, yanıp sönen ayar değeri ve arıza mesajı, ekran aydınlatması, F04, bakım sembolü ve arıza tablosu DemirDöküm L 275 F / L 350 F kullanma kılavuzundan; AL kodları, reset yöntemi, ekran sembolleri ve OFF modu E.C.A. Phoenix PH HM 11 kullanım ve montaj kılavuzundan alınmıştır. Kendi şofbeninin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Kod geri gelmeye devam ediyorsa kodu ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
