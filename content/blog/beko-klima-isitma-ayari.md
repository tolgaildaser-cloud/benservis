---
title: "Beko klima ısıtma ayarı nasıl yapılır?"
description: "Beko klima ısıtma ayarı: mod tuşuyla ısıtmayı seç, sıcaklığı oda sıcaklığının üstüne al, kanadı aşağı indir. Jet Heat, uyku ve 3 dakika kuralı."
slug: "beko-klima-isitma-ayari"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork D). origin/main'de Beko klima sayfası yok (slug + başlık grep'i: "beko-klima" 0 sonuç).
#   Yakın genel sayfa: klima-sicak-hava-uflemiyor (Beko'yu dört kaynaktan biri olarak anıyor, konu belirti); bu yazı Beko'da ısıtma ayarının kendisi.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "beko klima ısıtma" → 1. beko klima ısıtma ayarı · 2. …ısıtma modu · 3. beko klima ısıtma
#   · 4. …ısıtma ayarı nasıl yapılır · 5. …ısıtma moduna geçmiyor. "beko klima sıcak" → 1. beko klima sıcak ayarı nasıl yapılır · 2. …sıcak ayarı.
# GSC (https___www-6 7 gün, https___www-5 3 ay): Beko klima sorgusu yok.
# Belge: Beko 509411 A / 512411 A / 518411 A / 525411 A klima kullanma kılavuzu, 31 s.
#   https://download.beko.com/Download.UsageManualsBeko/30151_tr_TR_20140619160360_Kullanma-K%C4%B1lavuzu-Dosyatur__A.pdf
#   bu koşuda curl -sL -A "Mozilla/5.0": HTTP 200 application/pdf 2439260 B, md5 fc45a59038e091b7e5bed7796db9686a (14 Eyl kaydıyla aynı).
#   Yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-d3-G-D/beko-509411.pdf · pdftotext -layout, sayfa = PDF sayfası.
# Sayfalar: mod sırası + ısıtma modu tanımı s.15 · ısıtma adımları, 16–30 °C, oda sıcaklığının üstü, kanat en alt, ılık hava, Jet Heat s.17 · ayar oda
#   sıcaklığından düşükse ısıtmaz s.18 · tuş listesi s.6 · gösterge ekranı / defrost ışığı s.4 · uyku: ısıtmada 60 dk sonra 1 °C, 2 saat sonra 2 °C düşer s.22
#   · filtre s.10, s.26 · sorun tablosu (3 dk, hava akımı gecikmesi, buz çözme sesi, onarma) s.27 · sessiz dış ünite ısıtma aralığı s.21.
# BİLEREK YAZILMAYANLAR: tuş simgelerinin çizimi (PDF metin katmanında yalnız font glifi var) · "kaç derece en iyi" diye belgede olmayan bir öneri
#   · yeni Beko inverter serileri (bu koşuda Beko alanında Türkçe kılavuzları bulunamadı; yazı tek seriye dayanıyor, metinde söylendi)
#   · dış ünite, gaz, elektrik (#31) · fiyat (#46). Alıntı denetimi: beko-klima-isitma-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Klimanın kullanma kılavuzu"]
steps:
  - "Klimanın sigortası kapalıysa aç, kumandayı iç ünitedeki gösterge ekranına doğrultup açma/kapama tuşuna bas."
  - "Çalışma modu seçim tuşuna, kumanda ekranında ısıtma modunun sembolü çıkana kadar art arda bas."
  - "Sıcaklık ayar tuşlarıyla ayarı oda sıcaklığının üstünde bir değere getir; ısıtmada aralık 16 ile 30 °C arası."
  - "Fan hızı tuşuyla istediğin hava hızını seç."
  - "Daha verimli ısıtma için hava akımı yönlendirme tuşuyla yatay kanadı en alt konuma al."
  - "Odayı kısa sürede ısıtmak istersen Jet Heat tuşuna bas; iptal etmek için kılavuzdaki tuşlardan birine bas."
  - "Isıtma açılınca hava hemen gelmezse ya da klimayı kapatıp açtıysan birkaç dakika bekle; sorun sürerse yetkili servise başvur."
faq:
  - q: "Beko klimada ısıtma hangi mod?"
    a: "Beko 509411–525411 serisi kılavuzuna göre çalışma modu seçim tuşuna her bastığında mod sırasıyla Soğutma, Otomatik çalışma, Nem giderme, Isıtma ve Fan olarak değişir. Isıtmaya gelince kumanda ekranında ısıtma modunun sembolü belirir."
  - q: "Beko klima ısıtmada kaç dereceye ayarlanır?"
    a: "Kılavuz ısıtma modunda ayar aralığını 16 °C ile 30 °C arası veriyor ve ayarı oda sıcaklığının üstünde bir değere getirmeni istiyor. Ayar oda sıcaklığından düşükse cihaz ısıtma modunda çalışmaz. Kılavuz ayrıca klimayı sürekli en düşük ya da en yüksek ayarda değil, ihtiyacına uygun bir değerde kullanmayı öneriyor."
  - q: "Beko klima ısıtma moduna geçmiyor, neden?"
    a: "Kılavuzun ilk iki kontrolü şunlar: ayar sıcaklığı oda sıcaklığından düşük mü ve klimayı az önce kapatıp mı açtın? Klima yeniden çalıştırıldığında 3 dakika kadar çalışmaz. Isıtma başladığında hava akımı da sıcaklık yeterli dereceye ulaştıktan sonra başlar. Bunlardan sonra sorun sürüyorsa bayiye ya da yetkili servise başvur."
  - q: "Jet Heat ne yapar?"
    a: "Kılavuza göre hızlı ısıtma (Jet Heat) klimayı 30 dakika boyunca oldukça yüksek fan hızında, ayarı 30 °C'ye getirerek ısıtma modunda çalıştırır. Soğutma modunda kullanılmaz ve bazı ürünlerde olmayabilir."
  - q: "Gece uyku modunda ısıtma ayarı neden düşüyor?"
    a: "Uyku ayarı fonksiyonunda, ısıtma modunda oda sıcaklığı ayarı 60 dakika sonra belirlediğinden 1 °C, 2 saat sonra 2 °C düşer. Kılavuz bunu odanın uyurken çok ısınmasını önlemek için tarif ediyor."
images:
  coverAlt: "Kış akşamı loş bir salonda duvara asılı beyaz bir split klima ve sehpada duran kumandası"
  steps:
    - "Koridordaki sigorta kutusunun kapalı kapağı"
    - "Klima kumandasının ekranında küçük bir mod sembolü"
    - "Klima kumandasında yan yana duran iki sıcaklık ayar tuşu"
    - "Kanatları hafifçe açık, sessiz çalışan bir duvar kliması"
    - "Kanadı aşağı doğru eğilmiş bir duvar kliması ve altında halı"
    - "Sehpanın üzerinde ekranı aydınlanmış beyaz bir klima kumandası"
    - "Duvarda saat ve altında kapalı duran bir split klima"
---

Hava soğudu, Beko klimayı ısıtmaya almak istiyorsun ama kumandadaki tuşlar yaz ayarında kalmış. Beko'nun 509411 A, 512411 A, 518411 A ve 525411 A modelleri için yayımladığı Türkçe kullanma kılavuzu ısıtma ayarını "Odanın ısıtılması" başlığı altında adım adım veriyor. Isıtmanın hiç başlamamasına yol açan tek bir ayar hatasına da ayrıca dikkat çekiyor. Bu yazıda ısıtma modunu açmayı, sıcaklığı doğru aralığa almayı ve ilk dakikalarda normal olan davranışları bu kılavuzdan topladık. Yazı tek bir serinin kılavuzuna dayanıyor; senin modelinde tuş adları ya da özellikler farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Aç, mod tuşuna ısıtma sembolü çıkana kadar bas. Ayarı oda sıcaklığının **üstüne** getir (ısıtmada 16–30 °C). Fanı seç, yatay kanadı en alta al. Hızlı ısınma için Jet Heat. Hava hemen gelmezse birkaç dakika bekle. Kapatıp açtıysan 3 dakika. Sürerse yetkili servis.

## Kılavuz ne diyor

| Ayar | Beko kılavuzunda |
|---|---|
| **Mod sırası** | Soğutma → Otomatik → Nem giderme → **Isıtma** → Fan |
| **Isıtmada sıcaklık aralığı** | 16 °C – 30 °C, her basışta 1 °C |
| **Ayarın yeri** | Oda sıcaklığının üstünde; altındaysa ısıtma çalışmaz |
| **Kanat** | Isıtmada yatay kanat en alt konumda |
| **Jet Heat** | 30 dakika, yüksek fan, ayar 30 °C |
| **Uyku** | Isıtmada 60 dakika sonra 1 °C, 2 saat sonra 2 °C düşer |

## Adım adım: Beko klimada ısıtmayı açmak

**1. Klimayı aç.** Kılavuzun ilk adımı: klimanın sigortası kapalıysa aç. Sonra kumandayı iç ünitedeki çalışma durumu gösterge ekranına yönlendir ve açma/kapama tuşuna bas. Gösterge ekranı yanar ve klimadan bir uyarı sinyali gelir. Kumanda ekranı silikse ya da hiç göstermiyorsa önce pilleri kontrol et; [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazısında kumandayı test etmenin yolu var.

**2. Isıtma modunu seç.** Kılavuz bu tuşu "çalışma modu seçim tuşu" diye anıyor. Her basışta mod sırasıyla **Soğutma, Otomatik çalışma, Nem giderme, Isıtma ve Fan** olarak değişir. Isıtmaya geldiğinde kumanda ekranında ısıtma modunun sembolü belirir. Simgenin çizimi kılavuzun kumanda sayfasında; tuş üstündeki işaretler modele göre farklı olabilir.

**3. Sıcaklığı oda sıcaklığının üstüne al.** Sıcaklık ayar tuşlarıyla istediğin değere gel. Her basış ayarı **1 °C** artırır ya da azaltır. Isıtma modunda aralık **16 °C ile 30 °C** arası. Kılavuzun en önemli notu burada: kumandadaki değeri **oda sıcaklığının üstünde** bir değere ayarla. Aynı kılavuzun sıcaklık ayarı sayfası tersini de açıkça yazıyor: ayarlanan sıcaklık oda sıcaklığından düşükse cihaz ısıtma modunda **çalışmaz**. Yazdan düşük bir değerde kalmış ayar, ısıtmanın hiç başlamamasının en kolay atlanan sebebidir. Oda sıcaklığını görmek için kılavuzdaki oda sıcaklığı gösterge tuşuna bas; değer 5 saniye ekranda kalır.

**4. Fan hızını seç.** Fan hızı ayar tuşuyla düşükten yükseğe kademeler arasında geç. Kılavuzda Chaos Swing (doğal rüzgâr etkisi) konumu da var; bu konumda fan hızı ortam sıcaklığına göre orta ile düşük arasında kendiliğinden değişir.

**5. Kanadı aşağı indir.** Kılavuz, ısıtma modunda **daha verimli bir ısıtma için yatay kanat açısını en alt konuma** ayarlamanı istiyor. Kanatları her zaman kumandayla ayarla; kılavuza göre yatay kanatları elle oynatmak ürüne zarar verebilir.

**6. Hızlı ısınma için Jet Heat.** Odayı kısa sürede ısıtmak istersen ısıtma modundayken hızlı ısıtma tuşuna bas; ekranda ilgili sembol belirir. Kılavuza göre **Jet Heat** klimayı **30 dakika** boyunca oldukça yüksek fan hızında, ayarı **30 °C**'ye getirerek çalıştırır. Kılavuzun gösterdiği tuşlardan birine basınca iptal olur ve klima en yüksek fan hızında çalışmaya devam eder. Bu fonksiyon soğutma modunda kullanılmaz ve bazı ürünlerde olmayabilir.

**7. İlk dakikaları bekle.** Isıtmayı açtığında iç üniteden hemen hava gelmeyebilir. Kılavuzun sorun tablosu bunu arıza saymıyor: hava akımı sıcaklık yükselmeden başlarsa istenmeyen bir soğutma etkisi olur, bu yüzden hava akımı **sıcaklık yeterli dereceye ulaştıktan sonra** başlar. Klimayı kapatıp hemen açtıysan da **3 dakika kadar** çalışmaz; bu, klimanın korunması için. Bu kontrollerden sonra sorun sürüyorsa kılavuzun hükmü net: ürünü satın aldığın bayiye ya da yetkili servise başvur.

## Isıtırken normal olanlar

**Hava ılık geliyor.** Kılavuza göre ısıtma modunda ortam istenen sıcaklığa ulaştıktan sonra iç ünite fanı bir süre daha çalışır ve üflenen hava ılık hissedilebilir. Oda sana serin geliyorsa kılavuzun önerisi kumandadaki değeri yükseltmek.

**Sıkışmış hava sesi.** Isıtma sırasında buz çözme işleminin başında ve sonunda bu ses gelebilir. Kılavuz bunu soğutucu gazın ters yöne hareketinden doğan bir ses olarak açıklıyor, arıza değil. İç ünitenin gösterge ekranında ayrıca bir **defrost ışığı** var. Buz çözmenin ayrıntısı [klima dış ünite buzlanma](/blog/klima-dis-unite-buzlanma/) yazısında.

**Gece ayar düşüyor.** Uyku fonksiyonu ısıtma modunda ayarı 60 dakika sonra 1 °C, 2 saat sonra 2 °C düşürür. Sabah oda serinse uyku ayarını kontrol et.

**Hava kuru.** Kılavuz, ısıtma modunda klimanın oda havasını kurutacağını, bu yüzden ortam havasını nemlendiren ürünlerle birlikte kullanılabileceğini yazıyor.

## Ne zaman servis

- Ayar oda sıcaklığının üstünde, mod ısıtmada ama birkaç dakika sonra da sıcak hava gelmiyorsa
- Filtre temiz olduğu hâlde ısıtma zayıfsa
- Klima yeniden çalıştırıldıktan 3 dakika sonra da açılmıyorsa

Filtre kirliyse ısıtma kapasitesi düşer; kılavuz filtreyi mevsim başında ve sonunda temizlemeni istiyor. Yöntem [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, mod, ayar, kanat ve filtre sende; dış ünite, gaz, kablo ve sökme işleri yetkili servisin. Kılavuzun cümlesi: çalışmayan ürünü kendin onarmayı asla deneme.

## Servisi aramadan önce kısa özet

1. Klimanın modeli ne (iç ünitenin etiketinde yazar)?
2. Kumanda ekranında ısıtma sembolü görünüyor mu?
3. Ayar sıcaklığı kaç, oda sıcaklığı kaç?
4. Kaç dakika bekledin?
5. Filtreyi en son ne zaman temizledin?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Sıcak hava hiç gelmiyorsa [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısına bak. Bil, gör, çağır.
