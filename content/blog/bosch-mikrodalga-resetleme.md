---
title: "Bosch mikrodalga resetleme nasıl yapılır"
description: "Bosch mikrodalgada resetleme: programı iptal, sigortayı 10 saniye kapatıp açma, çocuk kilidi, demo modu ve saat ayarı. Kılavuzdaki adımlar."
slug: "bosch-mikrodalga-resetleme"
date: "2026-10-23"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork C). Konu seçimi: origin/main'de bosch-mikrodalga-resetleme yok; yakın sayfalar
#   bosch-mikrodalga-isitmiyor (ısıtma belirtisi), mikrodalga-isitmiyor, siemens-mikrodalga-calismiyor. "Resetleme" sorgusunu karşılayan Bosch sayfası yok.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "bosch mikrodalga r" → 1. (tek öneri) "bosch mikrodalga resetleme".
#   GSC (https___www-5 / https___www-6): satır yok.
# Belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200, md5 yerel kopyayla aynı (kaynak-mikrodalga-3eki/).
#  (A) Bosch BEL623M… / BEL653M… ankastre mikrodalga kullanım kılavuzu  9001626541_M.pdf  28 s.  md5 010304164c4664df12f2641846d4134d
# Kapak açılınca çalışma durur A s.7 · saat ayarı ve kesinti A s.9 · iptal A s.10-11 · çocuk kilidi ve temel ayarlar/demo modu A s.12 · arıza tablosu (sigorta 10 sn) A s.15
#   · E-Nr/FD A s.16 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: belgede olmayan "reset tuşu" ya da gizli kombinasyon · kasa açma, magnetron/kart/kapı mikroşalteri teşhisi (#31) · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-mikrodalga-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Mikrodalganın kullanım kılavuzu"]
steps:
  - "Takılı kalan bir programı iptal etmek için cihaz kapağını aç ve durdurma tuşuna bas ya da iki kez bas."
  - "Kapağı kapattıktan sonra çalışmanın kendiliğinden sürmediğini bil; yeniden başlatmak için başlatma tuşuna bas."
  - "Cihaz hiç tepki vermiyorsa fişin takılı olduğunu ve sigorta kutusundaki sigortayı kontrol et."
  - "Fonksiyon arızası için sigortayı sigorta kutusundan kapat, yaklaşık 10 saniye sonra yeniden aç."
  - "Ekranda saat ayarı istenirse döner düğmeyle saati gir ve onay tuşuyla kaydet."
  - "Tuşlar tepki vermiyorsa çocuk kilidi tuşunu yaklaşık 4 saniye basılı tutarak kilidi aç."
  - "Ekranda demo sembolü varsa temel ayarlar menüsüne girip demo modunu kapalı konuma al."
  - "Arıza sigortayı kapatıp açtıktan sonra da sürüyorsa ya da mikrodalga çalışması duruyorsa yetkili servisi ara."
faq:
  - q: "Bosch mikrodalgada reset tuşu var mı?"
    a: "İncelediğimiz Bosch BEL623M ve BEL653M kılavuzunda 'reset' adında bir tuş yok. Kılavuzun sıfırlamaya en yakın adımı arıza tablosunda: fonksiyon arızasında sigortayı sigorta kutusundan kapatıp yaklaşık 10 saniye sonra yeniden açmak. Arıza tekrar ederse müşteri hizmetleri aranıyor."
  - q: "Bosch mikrodalga tuşlara basıyorum ama çalışmıyor, neden?"
    a: "Kılavuz üç olasılığı ayrı ayrı yazıyor. Çocuk kilidi açıksa kumanda bölümü kilitlidir; tuşa yaklaşık 4 saniye basınca kilit açılır. Demo modu açıksa tuşlar çalışır gibi görünür ama cihaz mikrodalga gücü vermez. Kapak tam kapanmamışsa da cihaz çalışmaz; kapağın arasına yemek artığı ya da yabancı bir cisim girip girmediğine bak."
  - q: "Elektrik kesilince Bosch mikrodalganın saati gider mi?"
    a: "Evet. Kılavuza göre elektrik bağlantısından ya da elektrik kesintisinden sonra ekranda saat ayarı talep edilir. Döner düğmeyle saati ayarlayıp onay tuşuna basman gerekiyor."
  - q: "Demo modu nedir, nasıl kapatılır?"
    a: "Demo modu, yetkili satıcıların teşhirde kullandığı bir temel ayar. Açıkken tuşlar çalışmaz; örneğin mikrodalga fonksiyonunda cihaz güç vermez. Kapatmak için cihaz kapalıyken temel ayarlar menüsüne gir, demo modunu bul ve kapalı seçeneğini seçip ayarı devral."
  - q: "Çalışırken kapağı açarsam program silinir mi?"
    a: "Kılavuza göre çalışma sırasında kapağı açarsan cihaz çalışmayı durdurur ve ayarlanan süre boyunca durur. Kapağı kapattığında çalışma otomatik olarak devam etmez; yeniden başlatmak için başlatma tuşuna basman gerekir."
images:
  coverAlt: "Mutfak dolabına yerleştirilmiş, döner düğmeli ve küçük ekranlı siyah bir ankastre mikrodalga"
  steps:
    - "Kapağı yarı açık bir ankastre mikrodalganın boş pişirme bölümü"
    - "Kapağı kapalı mikrodalganın yanındaki tuş sırasının yakın planı"
    - "Duvardaki bir sigorta kutusunun kapağı açık hâli"
    - "Sigorta kutusunda yan yana dizili otomatik sigortalar"
    - "Mikrodalga ekranının ve altındaki döner düğmenin yakın planı"
    - "Mikrodalga kumanda panelinde kilit sembollü küçük bir tuş"
    - "Mikrodalga ekranında küçük bir sembolün göründüğü kumanda bölümü"
    - "Mikrodalganın kapak içindeki ürün etiketi"
---

Mikrodalga tuşlara tepki vermiyor, ekranda tanımadığın bir sembol duruyor ya da program yarıda kalıp bir daha başlamıyor. Akla gelen ilk çözüm "resetlemek". İncelediğimiz Bosch kılavuzunda, BEL623M ve BEL653M ankastre mikrodalgalarda, **"reset" adında bir tuş yok.** Ama kılavuz sıfırlamanın karşılığı olan adımları ayrı ayrı yazıyor: çalışmayı iptal etmek, **sigortayı yaklaşık 10 saniye kapatıp açmak,** çocuk kilidini ve demo modunu kapatmak, saati yeniden girmek. Bu yazıda bu adımları belirtiye göre sıraladık. Senin modelinde tuş sembolleri farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Takılı programı kapağı açıp durdurma tuşuyla iptal et. Cihaz tepki vermiyorsa fişe ve sigortaya bak; fonksiyon arızasında sigortayı kapat, 10 saniye sonra aç. Tuşlar kilitliyse çocuk kilidini 4 saniye basılı tutarak aç. Ekranda demo sembolü varsa demo modunu kapat. Sürerse servis.

## Belirtiye göre hangi sıfırlama

| Gördüğün | Kılavuza göre nedeni | Ne yapılır |
|---|---|---|
| Program yarıda kaldı, yeniden başlamıyor | Kapak açıldı, çalışma durdu | 🛠️ İptal et ya da başlatma tuşuna bas |
| Cihaz hiç çalışmıyor | Fiş, sigorta, elektrik ya da fonksiyonel arıza | 🛠️ Sigortayı kapat, 10 sn sonra aç |
| Kumanda kilitli | Çocuk kilidi açık | 🛠️ Tuşu ~4 saniye basılı tut |
| Tuşlar çalışıyor ama ısıtmıyor, ekranda sembol var | Demo modu açık | 🛠️ Temel ayardan kapat |
| Saat yanıp sönüyor | Elektrik kesintisi | 🛠️ Saati yeniden gir |
| Mikrodalga çalışması duruyor | Cihazda arıza | 🔧 Tekrarlıyorsa servis |

## Adım adım: Bosch mikrodalgayı sıfırlama

**1. Takılı programı iptal et.** Kılavuz iptal için tek bir sıra veriyor: **cihaz kapağını aç ve durdurma tuşuna bas ya da iki kez bas.** Bu, normal mikrodalga çalışmasında, hafızadan çağrılan ayarda ve otomatik programlarda aynı.

**2. Kapağı kapatınca beklemeyi bırak.** Kılavuza göre çalışma sırasında kapağı açarsan cihaz çalışmayı durdurur ve ayarlanan süre boyunca durur. Kapağı kapattığında **çalışma otomatik olarak devam etmez;** yeniden başlatmak için başlatma tuşuna basman gerekir. Program "takıldı" sanılan durumların bir kısmı budur.

**3. Tepki yoksa fişe ve sigortaya bak.** Arıza tablosunda "cihaz çalışmıyor" satırının ilk üç nedeni elektrikle ilgili: **fiş takılı değil, sigorta kutusundaki sigorta atmış ya da elektrik beslemesi kesilmiş.** Oda aydınlatmasının ya da odadaki diğer cihazların çalışıp çalışmadığına bak. Aynı satırın son maddesi kapak: **kapak tamamen kapalı değilse** cihaz çalışmaz; kapağın arasına yemek artığı ya da yabancı bir cisim girip girmediğini kontrol et.

**4. Sigortayı 10 saniye kapatıp aç.** Kılavuzun sıfırlamaya en yakın adımı arıza tablosundaki **fonksiyonel arıza** satırı: **sigortayı sigorta kutusundan kapat, yaklaşık 10 saniye sonra tekrar aç.** Arıza yeniden ortaya çıkarsa kılavuz müşteri hizmetleriyle iletişime geçmeni istiyor. Bu adım sigorta kutusundaki şalterle sınırlı; prizin ya da kablonun içine girilmez.

**5. Saati yeniden gir.** Kılavuza göre **elektrik bağlantısından ya da elektrik kesintisinden sonra ekranda saat ayarı talep edilir.** Sigortayı kapatıp açtıktan sonra da bu ekran gelir. **Döner düğme ile saati ayarla,** sonra saati onaylamak için onay tuşuna bas. Kılavuza göre saati her zaman değiştirebilirsin: ilgili tuşa bas, döner düğmeyle ayarla ve onay tuşuyla kaydet.

**6. Çocuk kilidini kapat.** Çocuk kilidi açıkken **kumanda bölümü kilitlidir** ve ekranda çocuk kilidi sembolü görünür. Kılavuza göre kilidi devre dışı bırakmak için ilgili tuşa **yaklaşık 4 saniye** basılı tut; kumanda bölümünün kilidi açılır. Kilidi yeniden devreye almak için cihaz kapalıyken aynı tuşa yine yaklaşık 4 saniye basılır.

**7. Demo modunu kapat.** Arıza tablosuna göre göstergede demo sembolü görünüyorsa **demo modu aktiftir.** Kılavuza göre demo modunda tuşlar çalışmaz, bu yüzden mikrodalga fonksiyonunda **cihaz güç vermez;** bu ayar ağırlıklı olarak yetkili satıcıların teşhiri için. Kapatma sırası: cihaz kapalıyken kılavuzun gösterdiği iki tuşa birlikte **birkaç saniye** bas, döner düğmeyle demo modu ayarına geç, düzenleme tuşuna bas, **kapalı** seçeneğini seç, ayarı devral ve menüden çık. Kılavuza göre fabrika ayarı demo modu **kapalı.**

**8. Sürüyorsa servis.** Sigortayı kapatıp açtıktan sonra arıza geri geliyorsa ya da **mikrodalga çalışması kendiliğinden duruyor** ve bu tekrarlıyorsa kılavuz müşteri hizmetlerini aramanı istiyor. Kılavuzun uyarısı açık: usulüne aykırı onarımlar tehlike teşkil eder; cihazda onarımı yalnız eğitimini almış uzman personel yapabilir.

## Isınma yavaşladıysa sıfırlama gerekmez

Arıza tablosuna göre yemekler eskisinden yavaş ısınıyorsa önce ayara bak: mikrodalga gücü düşük ayarlanmış olabilir, içerideki yemek miktarı artmış olabilir ya da yemek öncekinden soğuk olabilir. **İki katı miktar, iki katı süre gerektirir.** Isıtma tamamen durduysa [Bosch mikrodalga ısıtmıyor](/blog/bosch-mikrodalga-isitmiyor/) yazısındaki kontrollerle devam et.

## Ne zaman servis

- Sigortayı kapatıp açtıktan sonra fonksiyon arızası tekrar ediyorsa
- Mikrodalga çalışması tekrar tekrar kendiliğinden duruyorsa
- Kapak tam kapandığı hâlde cihaz çalışmıyorsa
- Elektrik kablosu hasarlıysa; kılavuza göre kabloyu üretici, müşteri hizmetleri ya da benzer yetkinlikte biri değiştirir

⛔ **Kendin-çöz sınırı burada biter.** İptal, saat, çocuk kilidi, demo modu ve sigorta şalteri sende; kasanın içi, kapı kilit düzeneği, kablo ve elektronik Bosch yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Mikrodalganın modeli, ürün numarası (E-Nr.) ve imalat numarası (FD) ne?
2. Cihaz hiç mi çalışmıyor, yoksa çalışıp ısıtmıyor mu?
3. Sigortayı kapatıp açınca ne değişti?
4. Ekranda hangi sembol görünüyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka bağımsız nedenler [mikrodalga ısıtmıyor](/blog/mikrodalga-isitmiyor/) ve [mikrodalga tabla dönmüyor](/blog/mikrodalga-tabla-donmuyor/) yazılarında. Bil, gör, çağır.
