---
title: "Kiwi ısıtıcı fan soğuk üflüyor: kılavuza göre ayar kontrolü"
description: "Kiwi ısıtıcı fan soğuk üflüyorsa kılavuza bak: işlev düğmesi havalandırmada mı, termostat ya da ayar sıcaklığı düşük mü, kapanırken üfleme normal mi."
slug: "kiwi-isitici-fan-soguk-ufluyor"
date: "2026-10-23"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme K3, çatal 4). origin/main'de Kiwi yazısı yok; ısıtıcı yazısı yalnız arcelik-infrared-isitici-calismiyor
#   (infrared, fansız; "çalışmıyor/az ısıtıyor" sorgusu). Bu yazı fanlı ısıtıcıda "soğuk üflüyor" sorgusunu karşılıyor.
# OT (#164, bu koşu, suggestqueries hl=tr gl=tr) tohum "kiwi ısıtıcı fan": 1. "…duvar tipi" · 2. "…a101" · 3. "…yorum" · 4. "…soğuk üflüyor" · 7. "…kht 8415".
# GSC: https___www-3…6 Sorgular.csv'de "kiwi" ve "ısıtıcı fan" satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, HTTP 200 application/pdf. #88: yalnız Kiwi'nin kendi kılavuzları.
#  (A) KHT-8415 elektrikli ısıtıcı fan  https://static.kiwi.com.tr/media/media/1656/files/media_kht-8415-im-12syf_06082026093231_6a742a7f1b90c.pdf  12 s.  md5 80d8f764a22aaaa0a97f2c54382b79c8
#  (B) KHT-8422 elektrikli ısıtıcı fan  https://static.kiwi.com.tr/media/media/1672/files/media_kht-8422-im-12syf_06082026094805_6a742e25e030a.pdf  12 s.  md5 723d3ae97c1de3f60e09e780945d3d95
#  (C) KHT-8430 priz tipi ısıtıcı fan  https://static.kiwi.com.tr/media/media/1139/files/media_kht-8430-im-tr-12syf_14082025041649_689de1c1ee171.pdf  12 s.  md5 e656b54d02af7ee731f81292155fa840
#  (D) KHT-8490 duvar tipi ısıtıcı fan  https://static.kiwi.com.tr/media/media/1145/files/media_kht-8490-im-12syf_14082025043045_689de505a1e06.pdf  12 s.  md5 e8b72869cbc1c8de86963b10dd057e8e
# Türkçe bölüm her belgede s.6-7 (güvenlik, ilk kullanım, kullanım, temizlik). KHT-8407 quartz ısıtıcı fansız, kapsam dışı.
# BİLEREK YAZILMAYANLAR: rezistans, termostat, kart, sigorta teşhisi · kasa açma · duvar montajında delme tarifi (yalnız yükseklik kuralı) · watt hesabı/tüketim · fiyat (#46).
# Alıntı denetim tablosu: kiwi-isitici-fan-soguk-ufluyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Cihazın kullanım kılavuzu", "İnce bir fırça", "Yumuşak nemli bez"]
steps:
  - "Isıtıcının fişini doğrudan bir duvar prizine tak; uzatma kablosu ve çoklu priz kullanma."
  - "Düğmeli modelde işlev düğmesinin yalnızca havalandırmada değil, düşük ya da yüksek ısı çıkışında olduğunu kontrol et."
  - "Termostat düğmeli modelde düğmeyi sonuna kadar sağa çevir, oda ısınınca kontrol lambası sönene kadar yavaşça geri al."
  - "Ekranlı modelde ayar sıcaklığına bak; oda bu sıcaklığa ulaştıysa ısıtma kesilir, ayarı yükselt."
  - "Kapattıktan sonra kısa süre esen serin havayı arıza sanma; kılavuza göre fan cihazı soğutmak için çalışır."
  - "Cihazı düz ve sağlam bir yüzeye koy; devrilme emniyeti zeminle teması kesilen cihazı kapatır."
  - "Fişi çekip cihazın soğumasını bekle, hava emme açıklığını ince bir fırçayla temizle, gövdeyi nemli bezle sil."
faq:
  - q: "Kiwi ısıtıcı fan neden soğuk üflüyor?"
    a: "Kiwi kılavuzlarında üç olası durum var. KHT-8415 ve KHT-8422'de işlev düğmesinin bir konumu yalnızca havalandırma; bu konumda ısı çıkışı seçilmemiş olur. Ekranlı KHT-8430 oda ayarlanan sıcaklığa gelince ısıtmayı keser. KHT-8430 ve KHT-8490 kapatıldıktan sonra da fan bir süre çalışır; KHT-8490 kapanmadan önce 30 saniye soğuk rüzgar estirir."
  - q: "KHT-8430'un ayar sıcaklığı kaç derece?"
    a: "Kılavuza göre açıldığında ekranda fabrika ön ayarı 15°C görünür; sıcaklık 15°C ile 32°C arasında ayarlanabilir. Yüksek ve düşük seviye arasında + ve - düğmeleriyle geçilir, ekranda HH ve LL görünür."
  - q: "Duvar tipi KHT-8490'da hangi ayarlar var?"
    a: "Açıldığında orta ısıda hava üfler ve ortam sıcaklığını gösterir. Orta ısı 1000W, yüksek ısı 2000W. Ayar sıcaklığı 16-40°C aralığında, varsayılan 26°C. Zamanlayıcı 0-12 saat arasında kapanma süresi kurar."
  - q: "İlk açtığımda koku geldi, normal mi?"
    a: "Kiwi kılavuzlarına göre cihaz ilk açıldığında hafif bir koku oluşması normaldir ve geçicidir; yeterli havalandırma sağla."
images:
  coverAlt: "Oturma odasında zeminde duran küçük beyaz bir fanlı ısıtıcı ve önündeki halı"
  steps:
    - "Duvar prizine doğrudan takılmış bir ısıtıcı fişi"
    - "Fanlı ısıtıcının üstündeki döner işlev düğmesi"
    - "Fanlı ısıtıcının yanında yanan küçük kontrol lambası ve termostat düğmesi"
    - "Priz tipi ısıtıcının ön yüzündeki dijital ekran"
    - "Kapatılmış bir fanlı ısıtıcının ön ızgarası"
    - "Düz ahşap zemine yerleştirilmiş fanlı ısıtıcının tabanı"
    - "Fanlı ısıtıcının hava emme ızgarasında duran ince bir fırça"
---

Kiwi ısıtıcı fan çalışıyor, fan dönüyor ama yüzüne gelen hava ılık değil, serin. Bu her zaman arıza değil. Kiwi'nin KHT-8415, KHT-8422, KHT-8430 ve KHT-8490 kılavuzları fanın ısıtmadan üflediği durumları kendisi anlatıyor: işlev düğmesinin **yalnızca havalandırma** konumu, oda **ayarlanan sıcaklığa** gelince ısıtmanın kesilmesi ve cihaz **kapatılırken** fanın bir süre çalışmaya devam etmesi. Aşağıdaki kontroller bu dört kılavuzdan.

> ⚡ **Kısa özet:** Fişi doğrudan duvar prizine tak. Düğmeli modelde işlev düğmesi havalandırmada kalmışsa düşük ya da yüksek ısıya al. Termostatı ya da ayar sıcaklığını yükselt; oda o sıcaklığa geldiyse cihaz ısıtmayı keser. Kapattıktan sonraki kısa serin üfleme normal. Kablo ya da fiş hasarlıysa kullanma, yetkili servise götür.

## Senin modelinde ayar nerede

| Model | Tip | Isıyı belirleyen ayar | Kılavuzdaki serin hava durumu |
|---|---|---|---|
| KHT-8415 | Elektrikli ısıtıcı fan | İşlev düğmesi + termostat düğmesi | İşlev düğmesi yalnızca havalandırmada |
| KHT-8422 | Elektrikli ısıtıcı fan | İşlev düğmesi | İşlev düğmesi yalnızca havalandırmada |
| KHT-8430 | Priz tipi, ekranlı | 15-32°C ayar sıcaklığı, HH / LL | Oda ayara ulaşınca ısıtma kesilir; kapanırken fan çalışır |
| KHT-8490 | Duvar tipi, kumandalı | 16-40°C ayar, orta / yüksek ısı | Kapanmadan önce 30 saniye soğuk rüzgar |

KHT-8415 ve KHT-8422'de işlev düğmesinin dört konumu var: kapalı, yalnızca havalandırma, düşük ısı çıkışı, yüksek ısı çıkışı. Havalandırma konumunda ısı çıkışı seçilmemiş olur; düğme bu konumda kaldıysa cihazın serin üflemesi beklenen bir sonuç (bu, konum adlarından yaptığımız çıkarım).

## Adım adım: evde denenecekler

**1. Fişi ve prizi kontrol et.** Fişi doğrudan bir duvar prizine tak. KHT-8430 kılavuzu cihazın uzatma kablosu, adaptör ya da çoklu prizle çalıştırılmamasını, yalnız tek bir prizde kullanılmasını istiyor. Kılavuzlar fişi takmadan önce cihazdaki voltajın şebekeyle uyuştuğunu kontrol etmeni de istiyor.

**2. İşlev düğmesine bak.** KHT-8415 ya da KHT-8422 kullanıyorsan işlev düğmesinin yalnızca havalandırmada kalmadığından emin ol. Isı için düğmeyi düşük ya da yüksek ısı çıkışına çevir.

**3. Termostatı ayarla.** KHT-8415'te termostat düğmesi de var. Kılavuzun tarifi: düğmeyi sonuna kadar sağa çevir ve istediğin sıcaklığa ulaşılana kadar bekle; sonra kontrol lambası sönene kadar düğmeyi yavaşça geri çevir. Düğmenin konumu artık o sıcaklığa karşılık gelir. Düğme geride kaldıysa oda ısınmış sayılır ve ısıtma devreye girmeyebilir (çıkarım).

**4. Ayar sıcaklığını kontrol et.** Ekranlı KHT-8430 açıldığında fabrika ön ayarı olan 15°C'yi gösterir; sıcaklık 15°C ile 32°C arasında ayarlanır. Kılavuza göre oda ayarlanan sıcaklığa geldiğinde cihaz ısıtma işlevini keser. Oda zaten 15°C'nin üstündeyse ayarı yükselt; + ve - düğmeleriyle yüksek (HH) ve düşük (LL) seviye arasında da geçebilirsin. Duvar tipi KHT-8490'da ayar aralığı 16-40°C, varsayılan 26°C; orta ısı 1000W, yüksek ısı 2000W düğmesiyle seçilir.

**5. Kapanırken esen havayı arıza sanma.** KHT-8430 bekleme moduna alındığında ekran söner ama fan cihazı soğutmak için bir süre çalışmaya devam eder. KHT-8490 kapatıldığında kapanmadan önce 30 saniye soğuk rüzgar estirir, ekrandaki sayı 0'a düşer ve kapanır. Bu üfleme kılavuzda tarif edilen normal çalışma.

**6. Zemini kontrol et.** Kılavuzlar cihazın sağlam ve düz bir yüzeye konmasını istiyor. KHT-8415'te devrilme emniyet sistemi var: tabandaki anahtar, cihazın zeminle teması kesildiğinde onu otomatik kapatır. KHT-8430 yalnız dik konumda ve tam monte edilmiş hâlde çalıştırılmalı.

**7. Hava emme açıklığını temizle.** Fişi çek ve cihazın soğumasını bekle. Hava emme açıklığını zaman zaman ince bir fırçayla temizle, gövdeyi yumuşak, hafif nemli bir bezle sil. Ünitenin içine su ya da başka bir sıvı girmesine izin verme, cihazı suya batırma.

## Güvenli kullanım

- **Üstünü örtme.** Aşırı ısınmayı önlemek için ısıtıcının üzerini örtme.
- **Banyoda değil.** Banyo, duş ya da yüzme havuzunun yakınında kullanma.
- **Prizin hemen altına koyma.** KHT-8415, KHT-8422 ve KHT-8490 kılavuzları bunu ayrıca yazıyor.
- **Boşluk bırak.** KHT-8415 ve KHT-8422 için çevrede en az 10 cm, KHT-8430 için en az 30 cm; dolap içinde ve dışarıda kullanma.
- **Duvar tipinde yükseklik.** KHT-8490 kılavuzu montaj deliklerinin yerden en az 200 cm yukarıda olmasını istiyor.
- **Gözetimsiz bırakma.** Cihaz prize bağlıyken başından ayrılma. Kılavuzlar bu ürünlerin yalnız iyi yalıtılmış yerlerde ya da belirli dönemlerde kullanıma uygun olduğunu yazıyor.

Fansız infrared ısıtıcıda durum farklı; onun için [Arçelik infrared ısıtıcı çalışmıyor](/blog/arcelik-infrared-isitici-calismiyor/) yazısına bakabilirsin.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| İşlev düğmesi, termostat, ayar sıcaklığı, kapanırken üfleme | Senin, bu yazıdaki adımlar |
| Ayarlar doğru, yüksek ısıda da sürekli serin üflüyor | Kullanmayı bırak; yetkili servis |
| Kablo ya da fiş hasarlı, cihaz düşmüş | Kullanma; yetkili servis |

⛔ Kiwi kılavuzları cihazı kendin tamir etmemeni, hasarlı kablo ya da fişin yetkili ve kalifiye bir onarım servisinde değiştirilmesini istiyor. Kasayı açma.

---

**Kaynak künyesi.** İşlev ve termostat ayarı, ayar sıcaklıkları, kapanış sırasındaki fan çalışması, devrilme emniyeti, güvenlik uyarıları ve temizlik talimatı Kiwi'nin KHT-8415, KHT-8422, KHT-8430 ve KHT-8490 ısıtıcı fan kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
