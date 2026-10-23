---
title: "Bosch buzdolabı resetleme nasıl yapılır"
description: "Bosch buzdolabında resetleme: kapatıp açma, sergileme modundan çıkış, alarmı susturma ve kendi kendine test. Kılavuzdaki tuş sırası ve servis sınırı."
slug: "bosch-buzdolabi-resetleme"
date: "2026-10-23"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork C). Konu seçimi: origin/main'de bosch-buzdolabi-resetleme yok; yakın sayfalar
#   bosch-buzdolabi-hata-kodlari (alarm, HO tatil modu, E1 kodu; reset adımı başlıkta yok), siemens-buzdolabi-alarm-resetleme (Siemens, yalnız alarm sesi),
#   bosch-buzdolabi-sogutmuyor. "Resetleme" sorgusunu karşılayan Bosch sayfası yok.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "bosch buzdolabı r" → 1. "bosch buzdolabı resetleme", 3. "…resetleme nasıl yapılır".
#   GSC (https___www-5 3 ay / https___www-6 7 gün): "resetleme" satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan indirildi, HTTP 200, md5 yerel kopyayla aynı (kaynak-bosch-siemens-buzdolabi-sprint/).
#  (A) Bosch KGN76.. kullanım kılavuzu  8001233803_C.pdf  36 s.  md5 d3c476746c93359c81b2153194c1adec
#  (B) Bosch KGN.. kullanma kılavuzu  8001038528_C.pdf  31 s.  md5 cd247570369e116c3fa12d0168a87b0c
#  (C) Bosch KGE.. kullanma kılavuzu  9000942062_D.pdf  31 s.  md5 fe03b1c8098c2a98f81913dd32feeca2
# Kapatma A s.17 · önerilen sıcaklık A s.17 · tatil modu A s.18 · alarmlar A s.19 · sergileme modu A s.25, B s.23, C s.24 · sıcaklık sapması (kapat, 5 sn, aç) A s.27
#   · elektrik kesintisi ve kendi kendine test A s.29 · fabrika ayarı sıcaklıklar ve lock/alarm off B s.11 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: belgede olmayan "gizli reset tuşu", servis menüsü, kart sıfırlama · kompresör/gaz/kart teşhisi (#31) · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-buzdolabi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu", "Saat ya da zamanlayıcı"]
steps:
  - "Ekranda ne yanıp söndüğüne ve ikaz sesinin olup olmadığına bak; alarm varsa önce kapıları kapat ya da alarm tuşuna bas."
  - "Sıcaklık ayardan çok farklıysa buzdolabını kumanda panelinden kapat, yaklaşık 5 saniye sonra yeniden aç."
  - "Göstergeler ve ışık yandığı hâlde soğutma yoksa sergileme modunu kılavuzdaki tuş sırasıyla kapat."
  - "Tatil, enerji tasarrufu ya da süper modlardan biri açıksa ilgili tuşa basarak kapat."
  - "Soğutucuyu kılavuzun önerdiği 4 °C'ye, dondurucuyu -18 °C'ye ayarla ve birkaç saat bekle."
  - "Kendi kendine test için cihazı kapat, fişini çek, 5 dakika sonra tak ve bir dakika sonra soğutucu bölmesi tuşunu ikinci bip sesine kadar basılı tut."
  - "Test sonunda iki sinyal duyarsan cihaz sorunsuzdur; beş sinyal duyar ve LED'ler farklı parlaklıkta yanarsa yetkili servise haber ver."
faq:
  - q: "Bosch buzdolabında reset tuşu var mı?"
    a: "İncelediğimiz Bosch KGN ve KGE kılavuzlarında 'reset' adında bir tuş yok. Sıfırlama yerine geçen adımlar kılavuzlarda ayrı ayrı yazıyor: cihazı kapatıp açmak, sergileme modunu kapatmak, alarmı susturmak ve cihazın kendi kendine testini çalıştırmak."
  - q: "Bosch buzdolabı ışığı yanıyor ama soğutmuyor, neden?"
    a: "Kılavuzların arıza tablosu ilk olarak sergileme modunu gösteriyor. Bu mod mağazada teşhir için kullanılır; göstergeler ve aydınlatma çalışır ama cihaz soğutmaz. Kapatma tuş sırası modele göre değişiyor; KGN76 kılavuzunda cihazı kapatıp iki dakika bekledikten sonra açıp, bir dakika sonra soğutucu bölmesi tuşunu dört sinyal duyulana kadar basılı tutmak gerekiyor."
  - q: "Bosch buzdolabının alarmı nasıl susturulur?"
    a: "Kapı alarmında kapağı kapatman ya da alarm tuşuna basman yeterli. Sıcaklık alarmında da alarm tuşuna basınca ikaz sesi kapanır. Bazı KGN modellerinde bu tuşun adı 'lock/alarm off'. Alarm sık tekrarlıyorsa kod ve gösterge listesi için Bosch buzdolabı hata kodları yazısına bak."
  - q: "Kendi kendine test ne işe yarar?"
    a: "KGN76 kılavuzuna göre cihaz, müşteri hizmetlerinin giderebileceği arızaları görüntüleyen bir kendi kendine test içeriyor. Testin sonunda iki akustik sinyal ve ayarlı sıcaklığın görünmesi sorun olmadığını gösterir. Beş sinyal ve farklı parlaklıkta yanan LED'ler ise müşteri hizmetlerine arıza hakkında bilgi verir."
  - q: "Elektrik kesintisinden sonra Bosch buzdolabı ayarları gider mi?"
    a: "Kılavuz kesintiden sonra ayarların silindiğini yazmıyor; kesinti sırasında kapağı olabildiğince az açmayı ve kesintiden hemen sonra yiyeceklerin kalitesini kontrol etmeyi istiyor. Çözülmüş ve 5 °C'den sıcak olan donmuş yiyecekler atılmalı."
images:
  coverAlt: "Mutfakta duran gümüş renkli, alt kısmı dondurucu olan kombi tipi bir buzdolabı"
  steps:
    - "Buzdolabı kapağı üzerindeki küçük dokunmatik kumanda panelinin yakın planı"
    - "Kapağı kapalı bir buzdolabının yanında duvardaki priz"
    - "Işığı yanan ama içi boş bir buzdolabının açık soğutucu bölmesi"
    - "Buzdolabı kumanda panelinde yan yana dizili küçük sembollü tuşlar"
    - "Buzdolabı rafında duran küçük bir termometre"
    - "Buzdolabının arkasından prize uzanan elektrik kablosu"
    - "Kumanda paneli ışıkları yanan bir buzdolabının kapağı"
---

Buzdolabı garip davranıyor: ekranda bir şey yanıp sönüyor, ikaz sesi susmuyor ya da ışık yandığı hâlde içerisi soğumuyor. İlk akla gelen "resetlemek" oluyor. İncelediğimiz üç Bosch kılavuzunda, KGN76, KGN ve KGE serilerinde, **"reset" adında bir tuş yok.** Ama kılavuzlar sıfırlamanın karşılığı olan adımları tek tek yazıyor: cihazı kapatıp açmak, **sergileme modunu** kapatmak, alarmı susturmak ve cihazın **kendi kendine testini** çalıştırmak. Bu yazıda bu adımları belirtiye göre sıraladık. Tuş adları ve sembolleri modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Alarm varsa kapıyı kapat ya da alarm tuşuna bas. Sıcaklık tutmuyorsa kapat, 5 saniye bekle, aç. Işık var soğutma yoksa sergileme modunu kapat. Sorun sürüyorsa kendi kendine testi çalıştır: iki sinyal sorun yok, beş sinyal servis.

## Belirtiye göre hangi sıfırlama

| Gördüğün | Kılavuza göre nedeni | Ne yapılır |
|---|---|---|
| İkaz sesi, gösterge yanıp sönüyor | Kapı alarmı ya da sıcaklık alarmı | 🛠️ Kapağı kapat, alarm tuşuna bas |
| Sıcaklık ayardan çok farklı | Farklı sebepler | 🛠️ Kapat, ~5 saniye sonra aç |
| Göstergeler ve ışık yanıyor, soğutmuyor | Sergileme modu açık | 🛠️ Sergileme modunu kapat |
| Soğutucu bölme ılık, tatil sembolü yanıyor | Tatil modu açık | 🛠️ Tatil modunu kapat |
| Test sonunda beş sinyal | Cihazda arıza bilgisi | 🔧 Yetkili servis |

## Adım adım: Bosch buzdolabını sıfırlama

**1. Önce ne yanıp söndüğüne bak.** KGN76 kılavuzuna göre kapak uzun süre açık kalırsa **kapı alarmı** devreye girer: ikaz sesi duyulur, ışıklı çubuk ve ilgili bölmenin sıcaklık göstergesi yanıp söner. Alarmı kapatmak için **kapağı kapat ya da alarm tuşuna bas.** Dondurucu bölmesi çok ısınırsa **sıcaklık alarmı** çalar; alarm tuşuna basınca ikaz sesi kapanır. Bazı KGN modellerinde bu tuşun adı **lock/alarm off.**

**2. Kapat, birkaç saniye bekle, aç.** Sıcaklık yapılan ayardan çok farklıysa kılavuzun ilk önerisi kısa bir yeniden başlatma: cihazı kapat ve **yaklaşık 5 saniye sonra yeniden aç.** KGN76'da cihaz, açma/kapama sembolüne **3 saniye** basılı tutularak kapanır. Sonra sıcaklık çok yüksekse birkaç saat, çok düşükse ertesi gün yeniden kontrol et.

**3. Sergileme modundan çık.** Göstergeler ve aydınlatma yandığı hâlde cihaz soğutmuyorsa üç kılavuzun arıza tablosu da aynı nedeni gösteriyor: **sergileme modu devreye sokulmuş.** Bu mod mağazada teşhir içindir. Çıkış sırası modele göre değişiyor:
- KGN76: cihazı kapat, **2 dakika bekle,** tekrar aç; **1 dakika** sonra soğutucu bölmesi tuşunu **dört sinyal** duyulana kadar basılı tut.
- KGN: onay sesi duyulana kadar **°C tuşunu ve ayar tuşunu 5 saniye** birlikte basılı tut.
- KGE: **alarm tuşunu** onay sesi duyulana kadar **10 saniye** basılı tut.

Kısa bir süre sonra soğutup soğutmadığını kontrol et.

**4. Açık kalan modları kapat.** Tatil modu açıkken kılavuza göre soğutucu bölmesi **14 °C**'ye çıkar; bu, buzdolabı bozuldu sanılmasına yol açar. Enerji tasarrufu modunda soğutucu 8 °C, dondurucu -16 °C'ye ayarlanır. Süper soğutma yaklaşık 6 saat, süper dondurma yaklaşık 54 saat sonra kendiliğinden normale döner. Her modun kendi tuşuna basınca mod kapanır.

**5. Önerilen sıcaklığa dön.** Bosch kılavuzlarının önerdiği değerler soğutucu bölmesi için **4 °C,** dondurucu bölmesi için **-18 °C.** Ayarı bu değerlere getir ve kılavuzun dediği gibi ayarlanan sıcaklığa ulaşılması için birkaç saat bekle. Bu süre dolmadan yeniden ayar yapma.

**6. Kendi kendine testi çalıştır.** KGN76 kılavuzuna göre cihazda, müşteri hizmetlerinin giderebileceği arızaları gösteren bir **kendi kendine test** var. Sıra şöyle: cihazı kapat, fişini çek ya da sigorta kutusundaki sigortayı kapat, **5 dakika sonra** elektriği yeniden bağla. Bağlantıdan **bir dakika sonra** soğutucu bölmesi tuşunu, **ikinci bip sesi** duyulana kadar **3 ila 5 saniye** basılı tut.

**7. Sonucu oku.** Test bittiğinde **iki akustik sinyal** duyuluyor ve sıcaklık göstergesinde ayarlı sıcaklık görünüyorsa kılavuza göre cihazın sorunsuz; normal çalışmaya döner. **Beş akustik sinyal** duyuluyor ve göstergedeki LED'ler **farklı parlaklıkta** yanıyorsa müşteri hizmetlerine haber ver; bu LED'ler servise arıza hakkında bilgi verir.

## Elektrik kesintisinden sonra

Kılavuz kesinti sırasında kapağı olabildiğince az açmayı ve cihaza başka yiyecek koymamayı istiyor. Kesintiden hemen sonra yiyeceklerin kalitesini kontrol et: **çözülmüş ve 5 °C'den sıcak** donmuş yiyecekleri at; hafif çözülmüşleri pişirip tüket. Buzu çözülmüş besinler pişirilmeden yeniden dondurulmamalı. Uzun süre evde olmayacaksan [tatile çıkarken buzdolabı](/blog/tatile-cikarken-buzdolabi-ve-cihazlar/) yazısına bak.

## Ne zaman servis

- Kendi kendine testin sonunda beş sinyal duyuluyor ve LED'ler farklı parlaklıkta yanıyorsa
- Sergileme modu kapalı, modlar normal olduğu hâlde cihaz soğutmuyorsa
- Kapılar kapalıyken sıcaklık alarmı tekrar tekrar çalıyorsa
- LED aydınlatma çalışmıyorsa; kılavuz bunun için doğrudan müşteri hizmetlerini gösteriyor

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, modlar, fiş ve kapak sende; kompresör, soğutucu gaz, elektronik kart ve kasanın içi Bosch yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Buzdolabının modeli, ürün numarası (E-Nr.) ve imalat numarası (FD) ne?
2. Ekranda tam olarak ne yanıp sönüyor?
3. Kendi kendine test kaç sinyal verdi?
4. Son günlerde elektrik kesintisi oldu mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Alarm ve gösterge listesi [Bosch buzdolabı hata kodları](/blog/bosch-buzdolabi-hata-kodlari/) sayfasında, soğutma kontrolleri [Bosch buzdolabı soğutmuyor](/blog/bosch-buzdolabi-sogutmuyor/) yazısında. Bil, gör, çağır.
