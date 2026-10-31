---
title: "Termosifon nasıl kullanılır, açılır ve kapatılır?"
description: "Termosifonu açmadan önce suyun dolu olduğunu kontrol et. Vestel ve Arçelik kılavuzlarına göre açma, sıcaklık ayarı, ısınma ışığı ve kapatma adımları."
slug: "termosifon-nasil-kullanilir"
date: "2026-10-30"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, paket P05, satır #92). origin/main'de termosifon kullanım yazısı yok. Yakın: termosifon-suyu-isitmiyor,
#   termosifon-isigi-yanmiyor, termosifon-sigorta-attiriyor, termosifon-emniyet-ventili-su-damlatiyor.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr): "termosifon nasıl" → 3. termosifon nasıl kullanılır · 10. termosifon nasıl kapatılır; "termosifon kaç" → 2. termosifon kaç dakikada ısınır. BOSLUK.md #92.
# Belgeler (bu koşuda curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf):
#  (V) Vestel elektrikli termosifon TRV-50/65/80 E kullanım kılavuzu 20214615_k  https://statik.vestel.com.tr/webfiles/20214615_k.pdf  md5 5b2d7d441b5c5d5fc6b34451d428e8e0
#  (A) Arçelik T 7350 B / T 7365 B / T 7380 B termosifon kullanım kılavuzu  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201711221231276_User%20Manual%20-%20Filetr_TR.pdf  md5 51d9eda80694c637271a099e175a0722
# Sayfalar (PDF sayfası): V s.5 su dolu, ilk kurulum servis · V s.6 50 °C üstü yanık, V-otomat · V s.8 uzun süre kullanmama · V s.11 sıcaklık aralığı · V s.14 V-otomat, donma emniyeti · V s.15 kullanım, ECO · V s.16 uzun süre kullanmama
#   · A s.10 ışıklar, ECO · A s.13 ilk kullanım, çalıştırma, kapatma.
# BİLEREK YAZILMAYANLAR: "kaç dakikada ısınır" için dakika (iki kılavuz da süre vermiyor) · kurulum, bağlantı, V-otomat bağlama (servis) · rezistans, anot, kart · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Termosifonun kullanma kılavuzu"]
steps:
  - "Termosifonun ilk çalıştırmasını yetkili servise yaptır; kurulum ve elektrik bağlantısı kullanıcı işi değildir."
  - "Elektriği vermeden önce sıcak su musluğunu aç; su geliyorsa termosifon doludur."
  - "Vestel modelinde şalteri açıp panelden açma/kapama düğmesine bas; Arçelik modelinde şalteri aç ve güç ışığının yandığını gör."
  - "Sıcaklığı ayarla: Vestel'de artırma ve azaltma düğmeleriyle, Arçelik'te termostat düğmesini saat yönünde çevirerek."
  - "Isınma ışığını izle; ısıtıcı ışığı söndüğünde su ayarlanan sıcaklığa ulaşmıştır, musluğu dikkatle aç."
  - "Kapatırken Vestel'de açma/kapama düğmesini ya da V-otomat şalteri, Arçelik'te termostat düğmesini ve şalteri kapat."
faq:
  - q: "Termosifon kaç dakikada ısınır?"
    a: "İncelediğimiz iki kılavuz da dakika vermiyor. Vestel, rezistans göstergesi yanarken suyun ısındığını, ayarlanan değere ulaşınca rezistansın devreden çıkıp duş işaretli lambanın yandığını yazıyor. Arçelik T 7350 B'de ısıtıcı ışığı suyun ısındığı sürece yanıyor. Süreyi ışıktan ya da ekrandan takip et."
  - q: "Termosifon sürekli açık kalır mı, her kullanımdan sonra kapatmalı mıyım?"
    a: "Kılavuzlar günlük kapatma şartı koşmuyor. Vestel, ayarlanan sıcaklığın 4 derece altına düşünce rezistansın kendiliğinden tekrar devreye girdiğini yazıyor. Uzun süre kullanmayacaksan Vestel elektrik bağlantısını sigortadan kesmeni, dış şalteri kapatmanı ve su vanalarını kapatmanı söylüyor."
  - q: "ECO modu nedir, nasıl açılır?"
    a: "Vestel'de sıcaklığı 55 °C'ye getirince göstergede EC simgesi çıkar ve kılavuz ömür ile tasarruf için bu modu öneriyor. Arçelik T 7350 B'de ECO konumu cihazı 47-53 °C aralığında çalıştırır. Değerler modele göre değişir; kendi kılavuzuna bak."
  - q: "Tatilde evde yokken termosifonun şalterini kapatmalı mıyım?"
    a: "Dona karşı koruma elektrik varken çalışıyor: Vestel'de su 5 °C altına düşünce rezistans suyu 16 °C'ye ısıtır, bunun için elektrik beslemesi kesilmemeli. Arçelik ise ayar düğmesini don sembollü mavi alana çevirmeni söylüyor. Donma riski olan bir yerde şalteri kapatma kararını kılavuzuna göre ver."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir elektrikli termosifon ve ön yüzündeki küçük gösterge paneli"
  steps:
    - "Termosifon ve yanında kapalı alet çantası çizimi"
    - "Termosifon ve yanında vanaya uzanan beyaz eldivenli sade siluet el"
    - "Termosifonun şalterine uzanan beyaz eldivenli sade siluet el ve yanan güç ışığı"
    - "Termosifon panelindeki artı ve eksi düğmelerine basan beyaz eldivenli sade siluet el"
    - "Termosifon panelinde sönmüş ısıtıcı ışığı ve yanan sıcak su hazır ışığı çizimi"
    - "Termosifonun şalterini kapalı konuma getiren beyaz eldivenli sade siluet el"
---

Termosifonu ilk kez kullanıyorsan ya da evde sadece birinin açıp kapattığı bir cihazla karşılaştıysan, düğmelerin ne yaptığı belirsiz kalabiliyor. "Termosifon nasıl kullanılır, nasıl açılır, nasıl kapatılır, kaç dakikada ısınır" sorularının cevabı üreticinin kendi kılavuzunda var. Bu yazıda iki üreticinin Türkçe kılavuzundan yararlandık: **Vestel** elektrikli termosifon TRV-50/65/80 E (20214615) ve **Arçelik** T 7350 B. İkisi de aynı mantıkla çalışıyor ama düğmeler farklı. Kendi kılavuzun farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ **Önce güvenlik:** Islak ve nemli elle cihaza dokunma. Cihazın içini açma, elektrik bağlantısına dokunma. Vestel'e göre içeride kullanıcının müdahale edebileceği parça yok. Musluktan akan 50 °C üzerindeki su ciddi yanığa yol açabilir.

## İki kılavuz bir bakışta

| Konu | Vestel TRV-50/65/80 E | Arçelik T 7350 B |
|---|---|---|
| **Açma** | V-otomat şalter, sonra açma/kapama düğmesi (s.15) | Şalter, termostat düğmesi (s.13) |
| **Ayar aralığı** | 25-75 °C (s.11) | 10-75 °C (s.13) |
| **ECO** | 55 °C'de "EC" (s.15) | 47-53 °C (s.10) |
| **Isınma göstergesi** | Rezistans işareti, sonra duş lambası (s.15) | Isıtıcı sembolünün altındaki ışık (s.10) |

## Adım adım: termosifonu kullanma sırası

**1. İlk çalıştırmayı servise yaptır.** İki üretici de bu konuda net. Vestel, termosifon ilk defa monte edilip çalıştırılacağı zaman yetkili Vestel servisinden yardım alınmasını istiyor. Arçelik de ilk çalıştırma işleminin mutlaka yetkili servise yaptırılmasını yazıyor. Bu adımdan sonrası kullanıcıya düşüyor.

**2. Elektriği vermeden önce suyun dolu olduğuna bak.** Vestel ve Arçelik kılavuzları aynı kontrolü veriyor: sıcak su musluğunu açtığında su geliyorsa termosifon doludur. Kazan boşken elektrik verirsen Vestel'in göstergeli modeli susuz çalıştırma emniyetiyle E3 gösteriyor; ayrıntısı [termosifon ışığı yanmıyor](/blog/termosifon-isigi-yanmiyor/) yazısında.

**3. Termosifonu aç.** Vestel'de V-otomat şalter termosifonu açıp kapatmaya yarıyor. Şalteri açtıktan sonra kontrol panelindeki açma/kapama düğmesine basınca cihaz çalışır duruma geçiyor. İlk açılışta göstergede ayarlanan sıcaklık yanıp söner, kısa süre sonra yanıp sönme durur ve ekran kazandaki su sıcaklığını gösterir. Arçelik T 7350 B'de elektrik gelince güç ışığı sürekli yanar. Şalterin kendisini yetkili kişi bağlar; sen yalnızca açıp kapatırsın.

**4. Sıcaklığı ayarla.** Vestel'de göstergenin sağındaki yukarı ve aşağı oklarla istediğin sıcaklığı seçersin; ayar aralığı 25-75 °C. Sıcaklığı 55 °C'ye getirirsen göstergede "EC" çıkar; bu, enerji tasarrufu (ECO) işlevidir ve kılavuz ömür ve tasarruf için bu modu öneriyor. Arçelik'te termostat düğmesini saat yönünde çevirirsin; aralık 10-75 °C. Kılavuz, ECO konumunda cihazın 47-53 °C aralığında çalıştığını ve bu sıcaklıkta kireçlenmenin daha az olduğunu yazıyor.

**5. Isınmayı ışıktan izle.** Vestel'de sıcaklık ayarından sonra rezistans devreye girer ve sol alttaki rezistans işareti yanar. Su istenen değere ulaşınca rezistans devreden çıkar, işaret söner ve duş işaretli lamba yanar; sıcak su kullanıma hazırdır. Arçelik'te de ısıtıcı devredeyken ısıtıcı sembolünün altındaki ışık yanıyor. "Kaç dakikada ısınır" sorusuna iki kılavuz da dakika yazmıyor; süre için ışığı takip et. Bir şey daha: Vestel'e göre sıcaklık ayarladığın değerin 4 derece altına düşünce rezistans tekrar devreye girer; yani cihaz sıcaklığı kendisi korur.

**6. Kapat.** Vestel'de açma/kapama düğmesiyle ya da V-otomat şalterle kapatabilirsin. Arçelik'te termostat düğmesini saat ibresinin tersi yönünde kılavuzdaki konuma getirir, ardından şalteri kapalı konuma alırsın. Uzun süre kullanmayacaksan Vestel elektrik bağlantısını sigortadan kesmeni, dış şalteri kapatmanı ve su vanalarını kapatıp su bağlantılarını kesmeni söylüyor. Arçelik ise yaz tatili gibi uzun süreler için cihazın içindeki suyun boşaltılmasını istiyor; Vestel de kazanın uzun süre susuz kalmamasını söylüyor. İki kılavuz bu noktada ayrışıyor, kendi modelinin kılavuzuna göre karar ver.

## Dona karşı koruma ve uzun süre kullanmama

Tatile çıkıyorsan iki kılavuz farklı şeyler söylüyor, ikisini de bil. Vestel'de su sıcaklığı 5 °C altına düşünce rezistans otomatik devreye girip suyu 16 °C'ye ısıtır; bunun için termosifonun elektrik beslemesi kesilmemeli ve sigortası açık olmalı. Arçelik'te donma koruması için ayar düğmesini don sembollü mavi alana çevirirsin ve kılavuz, ürünün sigortasını kapatırsan bu korumanın devreye girmeyeceğini yazıyor. Yani donma riski olan bir yerdeyse elektriği kesmek korumayı da kesiyor.

## Kullanırken dikkat edilecekler

Vestel kılavuzu ihtiyacın kadar su ısıtmanı istiyor. Emniyet ventilinden su boşaltmışsan, sıcak su musluğundan suyun aktığını görmeden sistemi çalıştırma. Arçelik, ECO konumunda kireçlenmenin daha az olacağını ve cihazın kullanım ömrünün uzayacağını yazıyor; ayrıca sertlik derecesi fazla sularda kireçlenme olacağının göz önünde bulundurulmasını istiyor. Kireç temizliği ve anot kontrolü yetkili servisin işidir.

## Ne zaman servis

- Şalteri açtığın hâlde hiçbir ışık yanmıyorsa ya da su ısınmıyorsa: [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/)
- Sigorta ya da V-otomat tekrar tekrar atıyorsa: [termosifon sigorta attırıyor](/blog/termosifon-sigorta-attiriyor/)
- Emniyet ventilinden su damlıyorsa: [emniyet ventili su damlatıyor](/blog/termosifon-emniyet-ventili-su-damlatiyor/)

⛔ **Kendin-çöz sınırı burada biter.** Açmak, kapatmak, sıcaklığı ayarlamak ve ışıkları okumak sende; kurulum, elektrik bağlantısı, kablo, rezistans, anot ve iç parçalar yetkili servisin işi.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
