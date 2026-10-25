---
title: "Vestel klima kendiliğinden kapanıyor: neden ve ne yapılır?"
description: "Vestel klima kendi kendine kapanıyorsa kılavuz önce otomatik kapatma, uyku modu, zamanlayıcı, buz çözme ve voltaj korumasına bakmayı söylüyor."
slug: "vestel-klima-kendiliginden-kapaniyor"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme E). origin/main'de vestel-klima-kendiliginden-kapaniyor yok; Vestel klimada
#   calismiyor, isitmiyor, sogutmuyor, hata-kodlari var. Kendiliğinden kapanma sorgusunu karşılayan sayfa yok.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "klima kendiliğinden kapanıyor" → "klima kendiliğinden açılıp kapanıyor", "klima çalışırken
#   kendiliğinden kapanıyor", "vestel klima kendiliğinden kapanıyor"; "vestel klima kendiliğinden" → "... kapanıyor",
#   "... açılıp kapanıyor", "... açılıyor".
# Belge: Vestel klima kullanım kılavuzu 20234421_k, statik.vestel.com.tr, bu koşuda HTTP 200, md5 8814dd2a3ddbfd95d191e6e3b3af5d7e
#   (yerel kopyayla aynı). Sayfa = PDF sayfası. Alıntı denetimi: vestel-klima-kendiliginden-kapaniyor.KAYNAK.md
# BİLEREK YAZILMAYANLAR: Er kodlarının tek tek anlamı (ayrı sayfa var) · kart/sensör/kompresör teşhisi · regülatör önerisi
#   (klima kılavuzunda yok) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Klimanın kullanma kılavuzu", "Uzaktan kumanda"]
steps:
  - "Kumandanın ekranına bak; otomatik kapatma sayacı, zamanlayıcı ya da uyku modu simgesi görünüyor mu, kontrol et."
  - "Otomatik kapatma kuruluysa klima sayaç sıfıra gelince kapanır; aynı düğmeye yeniden basarak ayarı iptal et."
  - "Uyku modu açıksa klimanın birkaç saat sonra tamamen kapanması ve gösterge ışığının kısa sürede sönmesi normaldir; gerekiyorsa uyku modunu kapat."
  - "Otomatik açma ve kapama saatleri kuruluysa kumandadaki saatin doğru olduğunu kontrol et ya da ayarları iptal et."
  - "Isıtmada klima birkaç dakika durup ekranda DF görünüyorsa buz çözme çalışıyordur; kapatmadan bitmesini bekle."
  - "Elektrik gidip geliyor ya da voltaj dalgalanıyorsa klimanın kendini korumak için durduğunu bil; elektrik normale dönünce kendiliğinden çalışır."
  - "Ekranda Er ile başlayan bir kod görüyorsan klimaya müdahale etme, kodu not edip Vestel yetkili servisine haber ver."
faq:
  - q: "Vestel klima neden kendi kendine kapanıyor?"
    a: "Vestel kılavuzuna göre en sık sebepler ayarlarda: otomatik kapatma sayacı, uyku modu ve otomatik açma-kapama zamanlayıcısı klimayı kurulan sürede kapatır. Bunların dışında buz çözme, voltaj dalgalanması koruması ve ekranda Er kodu çıkaran arızalar da klimanın durmasına yol açar."
  - q: "Uyku modunda klima ne zaman kapanır?"
    a: "Isıtmada klima ilk saatin sonunda ayarı 2 °C, ikinci saatin sonunda 2 °C daha düşürür, bu derecede 6 saat daha çalıştıktan sonra uyku modu sona erer ve klima tamamen kapanır. Uyku modu seçildikten yaklaşık 3 dakika içinde göstergenin ışığı da söner; bu kapanma değildir."
  - q: "Otomatik kapatma süreleri neler?"
    a: "Kılavuzda beş seçenek var: 30 dakika, 1 saat, 2 saat, 3 saat ve 5 saat. Düğmeye her bastığında bir sonraki süre seçilir; kumanda ekranındaki sayaç 00.00'a gelince klima kapanır."
  - q: "Kumandadan kapattım ama klima bir süre daha çalıştı, neden?"
    a: "Buz çözme işlemi devredeyse klima kapatılsa da işlem sürer, bittikten sonra klima tamamen kapanır. Vestel kılavuzu bu mod devredeyken ürünün kapatılmamasını istiyor."
  - q: "Klima kapanıp 3 dakika açılmıyor, arıza mı?"
    a: "Vestel sorun giderme tablosunda kompresör koruması için 3 dakikalık bekleme yazıyor; çözüm beklemek. Klima kapatılıp hemen açıldığında soğutma ya da ısıtma bu yüzden gecikebilir."
images:
  coverAlt: "Akşam saatinde yatak odasında duvara asılı beyaz bir klima ve komodinde duran kumandası"
  steps:
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda buzlanma ve buz çözme"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda prizden çekilen fiş"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda telefon ve kullanım kılavuzu"
---

Klima güzel güzel çalışırken bir anda susuyor. Bazen gece yarısı, bazen akşam yemeğinde. Kumandaya basınca yeniden açılıyor ama bir süre sonra yine kapanıyor. Vestel'in klima kullanım kılavuzu bu durumu tek bir satırda değil, birkaç ayrı başlıkta anlatıyor: otomatik kapatma, uyku modu, otomatik açma-kapama zamanlayıcısı, buz çözme, voltaj koruması ve hata mesajları. Çoğu, arıza değil bir ayarın sonucu. Bu yazıda servisi aramadan önce bakabileceklerini kılavuzdan sırayla topladık. Kaynak tek bir modelin kılavuzu; senin klimanda tuş adları ve süreler farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kumandaya bak: otomatik kapatma sayacı, uyku modu ya da zamanlayıcı kuruluysa klima kurduğun sürede kendisi kapanır. Isıtmada birkaç dakikalık durmalar ve ekranda DF buz çözmedir. Voltaj dalgalanınca da klima kendini korumak için durur. Ekranda Er kodu varsa yetkili servis.

## Kapanmanın kılavuzdaki nedenleri

| Durum | Kılavuza göre ne olur | Kim ne yapar |
|---|---|---|
| **Otomatik kapatma** | Sayaç 00.00'a gelince klima kapanır | 🛠️ Ayarı iptal et |
| **Uyku modu** | Süre bitince klima tamamen kapanır | 🛠️ Uyku modunu kapat |
| **Otomatik açma-kapama** | Kurulan saatte klima kapanır | 🛠️ Saati kontrol et, iptal et |
| **Buz çözme (DF)** | Isıtma birkaç dakika durur | ⏳ Bekle |
| **Voltaj dalgalanması** | Klima durur, gerilim düzelince çalışır | ⏳ Bekle |
| **Er + kod** | Arıza mesajı | 📞 Yetkili servis |

## Adım adım: evde denenecekler

**1. Kumandanın ekranına bak.** Kapanmanın en sık sebebi bir ayar. Kumandada otomatik kapatma sayacı, açma-kapama saati ya da uyku modu simgesi görünüyorsa sorun büyük olasılıkla burada. Evde başka biri klimayı kurmuş olabilir; ayarlar kumandada kalır.

**2. Otomatik kapatmayı iptal et.** Kılavuza göre otomatik kapatma düğmesi klimanın **belirlediğin bir sürenin sonunda otomatik olarak kapanmasını** sağlar. Beş süre var: **30 dakika, 1 saat, 2 saat, 3 saat ve 5 saat**. Düğmeye her basışta bir sonraki süre seçilir ve kumanda ekranındaki sayaç **00.00**'a geldiğinde klima kapanır. Ayarı iptal etmek için aynı düğmeye yeniden bas.

**3. Uyku modunu kontrol et.** Uyku modu gece için tasarlanmış ve sonunda klimayı kapatıyor. Isıtma modunda klima ilk 1 saatin sonunda oda sıcaklığı ayarını **2 °C**, ikinci saatin sonunda 2 °C daha düşürür; bu derecede **6 saat** daha çalıştıktan sonra uyku modu sona erer ve **klima tamamen kapanır**. Kılavuza göre uyku modu seçildikten yaklaşık **3 dakika** içinde göstergenin ışığı da söner; ışığın sönmesi klimanın kapandığı anlamına gelmez. Uyku modu kapasiteyi de düşürebilir.

**4. Açma-kapama saatlerine bak.** Kılavuz, klimanın istediğin saatlerde açılmasını ya da kapanmasını önceden ayrı ayrı ayarlayabildiğini, kurulan saatte klimanın kapandığını anlatıyor. Kritik not: bu özelliğin doğru çalışması için **kumandadaki saatin doğru ayarlanmış olması** gerekiyor. Saat yanlışsa klima beklemediğin bir anda kapanır. Ayarı iptal etmek için ilgili düğmeye yeniden basmak ya da kurulan saatten önce klimayı kapatmak yeterli.

**5. Isıtmada DF görüyorsan bekle.** Dış ortam soğuk ve nemliyken dış ünitede buz oluşur; klima ısıtmayı durdurup **buz çözme** yapar. Kılavuza göre bu **5 ile 9 dakika** sürer ve ekranda **DF** simgesi görünür. Buz çözme klima kapatılsa da sürer ve işlem bitince klima tamamen kapanır; bu yüzden kılavuz bu mod devredeyken ürünün kapatılmamasını istiyor. Ayrıca iç ve dış ortam sıcaklığı yüksekken ısıtma seçilmişse dış ünite bazen durabilir; kılavuz bunun tamamen normal olduğunu, hiçbir şey yapmadan beklemeyi söylüyor. Isıtma bundan sonra da gelmiyorsa [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısına bak.

**6. Elektriği düşün.** Kılavuza göre klima çalışırken şebeke geriliminde **aşırı düşme ya da aşırı yükselme** olursa klima otomatik olarak durur ve gerilim normal seviyeye gelince yeniden çalışmaya başlar. Elektrik kesintisinde de klima doğal olarak kapanır; sorun giderme tablosunun ilk satırları elektrik kesintisi ve arızalı sigorta. Sigorta sık atıyorsa ya da prizde ısınma varsa elektrik tesisatı **yetkili elektrikçi** işidir. Kapatıp hemen açtığında klimanın gecikmesi de normal: tablo **kompresör koruması** için 3 dakika beklemeyi yazıyor.

**7. Er kodu varsa servis.** Vestel klimalar arızayı ön yüzdeki göstergede gösteriyor: önce **Er**, ardından hataya özel kod. Kılavuz bu durumda **klimaya hiçbir şey yapmamanı** ve yetkili servisle iletişime geçmeni istiyor. İstisna olarak **Er11** ve **Er13** hata değil, koruma mesajı; bunlar için kılavuzdaki koruma mesajları bölümüne bakılır. Kodların listesi [Vestel klima hata kodları](/blog/vestel-klima-hata-kodlari/) sayfasında.

## Çalışmıyor mu, kapanıyor mu?

İkisi farklı belirti. Klima hiç açılmıyorsa sorun giderme tablosu sırayla elektrik kesintisi, açma-kapama düğmesi, sigorta, kumanda pili, **çalışmanın başlaması için belirlenen zamana ulaşılmamış olması** ve klimaya çok yakın ışık kaynaklarının kumandayı engellemesi üzerinden gidiyor. Bu belirti için [Vestel klima çalışmıyor](/blog/vestel-klima-calismiyor/) yazısına geç.

## Ne zaman servis

- Ayarlar kapalı olduğu hâlde klima düzensiz aralıklarla kapanıyorsa
- Ekranda Er ile başlayan bir kod görünüyorsa
- Klima her açıldığında sigorta atıyorsa
- Buz çözme dakikalar içinde bitmiyor, ısıtma geri gelmiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, zamanlayıcı ve uyku ayarları sende; iç ünitenin içi, dış ünite, gaz ve elektrik bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Klimanın modeli ne?
2. Klima ne kadar çalıştıktan sonra kapanıyor?
3. Kumandada sayaç, saat ya da uyku simgesi var mı?
4. Ekranda DF ya da Er ile başlayan bir kod görüldü mü?
5. Evde aynı anda başka elektrikli cihazlar da kapanıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Isıtma sorunları [Vestel klima ısıtmıyor](/blog/vestel-klima-isitmiyor/) sayfasında. Bil, gör, çağır.
