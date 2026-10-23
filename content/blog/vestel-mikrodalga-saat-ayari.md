---
title: "Vestel mikrodalga saat ayarı nasıl yapılır"
description: "Vestel mikrodalgada saat ayarı: saat tuşu, düğmeyle saat 0-23 ve dakika 0-59, bitirmek için yine saat tuşu. Çocuk kilidi, zamanlayıcı ve 0:00 ekranı."
slug: "vestel-mikrodalga-saat-ayari"
date: "2026-10-23"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork D). Konu seçimi: origin/main'de vestel-mikrodalga-saat-ayari yok; başlıkta
#   "mikrodalga" + "saat" geçen sayfa yok. Yakın: vestel-mikrodalga-calismiyor, mikrodalga-isitmiyor, vestel-firin-saat-ayarlama (fırın, ayrı sorgu).
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "vestel mikrodalga s" → 1. "vestel mikrodalga saat ayarı",
#   2. "vestel mikrodalga saat ayarı nasıl yapılır". GSC (https___www-5 / -6): satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in alan adından (statik.vestel.com.tr) indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) Vestel AMD-2011 S mikrodalga fırın kullanım kılavuzu  https://statik.vestel.com.tr/webfiles/20210080_k.pdf  28 s.  md5 34a06552e71ab0954ba02039d64df0e9
#  (B) Vestel MD 20 DB / MD 20 DG mikrodalga fırın kullanım kılavuzu  https://statik.vestel.com.tr/webfiles/20217506_k.pdf  27 s.  md5 0f914099bc91b0a3c8497b7023859672
# Saat ayarı A s.15-16, B s.16-17 · mutfak zamanlayıcısı A s.17-18 · zamanlayıcılı pişirme B s.18-19 · çocuk kilidi ve sorgulama A s.19, B s.20
#   · model A s.13 · sorun giderme A s.20, B s.21 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: 12 saat biçimi (belgelerde yalnız 24 saatlik sistem) · kart / ekran arızası teşhisi · kasa açma (#31)
#   · fiyat/süre (#46) · pazar bağlantısı. Elektrik kesintisinden sonra 0:00 görünmesi belgedeki "elektriğe bağladığınızda" cümlesinden çıkarım.
# Alıntı denetim tablosu: vestel-mikrodalga-saat-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Mikrodalganın kullanım kılavuzu"]
steps:
  - "Kilit göstergesi yanıyorsa fırın beklemedeyken Durdur ya da Durdur/İptal tuşuna 3 saniye basarak çocuk kilidini aç."
  - "Fırın beklemedeyken saat tuşuna bas: AMD-2011 S'de Saat/Süre'ye iki kez, MD 20'de Saat/Ön Ayar'a bir kez; saat rakamları yanıp söner."
  - "Döner düğmeyi çevirerek saati 0 ile 23 arasında ayarla."
  - "Saat tuşuna bir kez daha bas; bu kez dakika rakamları yanıp söner."
  - "Döner düğmeyi çevirerek dakikayı 0 ile 59 arasında ayarla."
  - "Ayarı bitirmek için saat tuşuna son kez bas; iki nokta işareti yanıp söner ve saat çalışır."
  - "Pişirme sırasında saati görmek istersen saat tuşuna kısa bas; saat birkaç saniye görünüp ekran pişirmeye döner."
faq:
  - q: "Vestel mikrodalga saat ayarı nasıl yapılır?"
    a: "MD 20 DB / DG kılavuzuna göre Saat/Ön Ayar tuşuna bir kez basılır, saat rakamları yanıp söner; Süre.Ağırlık.Otomatik Menü düğmesiyle saat 0-23 arasında ayarlanır, tuşa tekrar basılıp dakika 0-59 arasında ayarlanır ve ayar yine Saat/Ön Ayar tuşuyla bitirilir. AMD-2011 S'de aynı iş Saat/Süre tuşuna iki kez basılarak başlar."
  - q: "Saat tuşuna basınca ekranda 00:00 çıkıyor, saat ayarlanmıyor. Neden?"
    a: "AMD-2011 S kılavuzunda Saat/Süre tuşuna bir kez basmak mutfak zamanlayıcısını açar ve ekranda 00:00 görünür. Saati ayarlamak için tuşa iki kez basman gerekir; saat rakamları yanıp sönmeye başlamalıdır. Kılavuz mutfak zamanlayıcısının 24 saatlik saatten farklı olduğunu ayrıca belirtiyor."
  - q: "Elektrik gidip gelince saat neden 0:00 gösteriyor?"
    a: "Vestel kılavuzları, mikrodalga fırın elektriğe bağlandığında LED ekranda 0:00 görüneceğini ve sesli uyarının bir kez çalacağını yazıyor. Kesintiden sonra fırın yeni bağlanmış gibi davrandığı için (çıkarım) saati yeniden ayarlaman gerekir."
  - q: "Ayar yaparken vazgeçersem ne olur?"
    a: "AMD-2011 S kılavuzuna göre saat ayarı sırasında Durdur/İptal tuşuna basarsan fırın otomatik olarak önceki duruma döner. MD 20 kılavuzuna göre saat ayarı sırasında 1 dakika boyunca hiçbir işlem yapılmazsa fırın yine önceki duruma döner."
  - q: "Saat ayarlı olmasa zamanlayıcıyla pişirme olur mu?"
    a: "Hayır. MD 20 DB / DG kılavuzu zamanlayıcıyla pişirmeden önce saatin ayarlanmasını istiyor; aksi takdirde ön ayarlı çalışma gerçekleşmez. Zamanlayıcılı pişirmede buz çözme de ayarlanmamalı."
images:
  coverAlt: "Mutfak tezgâhında kapağı kapalı, ekranı yanan solo bir mikrodalga fırın"
  steps:
    - "Mikrodalga fırının kontrol panelinde küçük bir kilit simgesi ve yanındaki durdur tuşu"
    - "Mikrodalga fırın panelinde saat simgeli yuvarlak bir tuş"
    - "Mikrodalga fırın panelindeki büyük döner ayar düğmesi"
    - "Mikrodalga fırının dijital ekranında yanıp sönen dakika hanesi"
    - "Döner ayar düğmesinin yakın planı ve çevresindeki ince çizgiler"
    - "Mikrodalga fırın ekranında saat ve dakika arasındaki yanıp sönen iki nokta"
    - "Çalışan bir mikrodalga fırının içinde dönen cam tabla ve üzerinde bir kase"
---

Elektrik gidip geldi, Vestel mikrodalganın ekranında **0:00** yanıp duruyor ya da saati yaza göre düzeltmek istiyorsun. Vestel'in mikrodalga kılavuzlarında saat ayarı birkaç tuş ve döner düğmeyle yapılıyor; ama tuşun adı ve kaç kez basılacağı modele göre değişiyor. Bu yazıda Vestel'in AMD-2011 S ve MD 20 DB / MD 20 DG kullanım kılavuzlarından saat ayarının sırasını, ayarı engelleyen çocuk kilidini, mutfak zamanlayıcısıyla karışan 00:00 ekranını ve zamanlayıcılı pişirmenin neden saate bağlı olduğunu çıkardık. Kendi modelinin tuş adını kılavuzla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fırın beklemedeyken saat tuşuna bas (AMD-2011 S'de Saat/Süre'ye iki kez, MD 20'de Saat/Ön Ayar'a bir kez). Düğmeyle saati 0-23, tuşa basıp dakikayı 0-59 ayarla, bitirmek için yine saat tuşuna bas. Kilit göstergesi yanıyorsa önce Durdur tuşuna 3 saniye bas. Saat ayarlı değilse zamanlayıcıyla pişirme çalışmaz.

## İki modelde saat ayarı

| | AMD-2011 S | MD 20 DB / MD 20 DG |
|---|---|---|
| **Saat tuşu** | Saat/Süre, iki kez | Saat/Ön Ayar, bir kez |
| **Ayar düğmesi** | Döner düğme | Süre.Ağırlık.Otomatik Menü düğmesi |
| **Aralık** | Saat 0-23, dakika 0-59 | Saat 0-23, dakika 0-59 |
| **Vazgeçmek** | Durdur/İptal: önceki duruma döner | 1 dakika işlem yoksa önceki duruma döner |
| **Çocuk kilidi** | Durdur/İptal, 3 saniye | Durdur, 3 saniye |

## Adım adım: Vestel mikrodalga saatini ayarlama

**1. Kilidi aç.** Panel tepki vermiyorsa çocuk kilidi açık olabilir. Vestel kılavuzlarına göre kilit, fırın **bekleme durumundayken Durdur/İptal** (MD 20'de **Durdur**) tuşuna **3 saniye** basılınca devreye girer; uzun bir "bip" duyulur ve kilit göstergesi yanar. Kilidi açmak için aynı tuşa yine **3 saniye** basılır, kilidin açıldığını belirten uzun bir "bip" duyulur.

**2. Saat tuşuna bas.** Vestel'e göre fırın elektriğe bağlandığında LED ekranda **"0:00"** görünür ve sesli uyarı bir kez çalar. AMD-2011 S'de saat fonksiyonunu seçmek için **Saat/Süre tuşuna iki kez** basılır. MD 20 DB / DG'de **Saat/Ön Ayar tuşuna bir kez** basmak yetiyor. İki modelde de **saati gösteren rakamlar yanıp söner.**

**3. Saati ayarla.** Saati gösteren rakamları ayarlamak için döner düğmeyi çevir; MD 20 kılavuzu bu düğmeye **Süre.Ağırlık.Otomatik Menü** diyor. Girilen saat değeri **0 ile 23 arasında** olmalı. Kılavuzlarda yalnız **24 saatlik sistem** var; öğleden sonra ikiyi 14 olarak gir.

**4. Dakikaya geç.** Saat tuşuna bir kez daha bas: AMD-2011 S'de **Saat/Süre,** MD 20'de **Saat/Ön Ayar.** Bu kez **dakikayı gösteren rakam yanıp söner.**

**5. Dakikayı ayarla.** Düğmeyi çevirerek dakikayı gir; değer **0 ile 59 arasında** olmalı.

**6. Ayarı bitir.** Saat ayarını bitirmek için saat tuşuna son kez bas. Kılavuzlara göre bu anda **":" yanıp söner** ve AMD-2011 S'de saat yanar. Ayar sırasında vazgeçersen: AMD-2011 S'de **Durdur/İptal** tuşu fırını önceki duruma döndürür, MD 20'de **1 dakika boyunca hiçbir işlem yapılmazsa** fırın kendiliğinden önceki duruma döner. Kılavuzların ortak notu da şu: **"Saat ayarlanmazsa, güç verildiğinde çalışmayacaktır."**

**7. Pişirirken saati sorgula.** Saat ayarlı fırında pişirme sürerken saati görmek için saat tuşuna bas. AMD-2011 S'de saat **3 saniye** görünür, MD 20'de **2-3 saniye** görüntülenir; sonra ekran pişirme bilgisine döner.

## Ekranda 00:00 çıkıyorsa: mutfak zamanlayıcısı

AMD-2011 S kılavuzunda Saat/Süre tuşu iki işe yarıyor. Tuşa **bir kez** basınca **mutfak zamanlayıcısı** açılır ve ekranda **00:00** görünür; düğmeyle en fazla 95 dakikalık bir süre girilir, süre dolunca sesli uyarı beş kez çalar ve saat ayarlıysa ekranda yeniden **geçerli saat** görünür. Kılavuzun notu: mutfak zamanlayıcısı **24 saatlik sistemden farklıdır,** yalnız bir zamanlayıcıdır. Yani saati ayarlamaya çalışırken 00:00 görüyorsan tuşa bir kez fazla basman gerekiyor.

## Zamanlayıcılı pişirme saate bağlı

MD 20 DB / DG kılavuzuna göre gecikmeli başlayan bir pişirme programı girmeden önce **saatin ayarlanması** gerekir: "Önce saat ayarlanmalıdır. Aksi takdirde, ön ayarlı çalışma gerçekleşmez." En fazla iki aşama seçilebilir ve zamanlayıcıyla pişirmede **buz çözme ayarlanmamalıdır.** Kurulan başlangıç saatini görmek için Saat/Ön Ayar tuşuna basılır; ön ayarlı saat 2-3 saniye yanıp söner, sonra ekran saate döner.

## Elektrik kesintisinden sonra

Kılavuzlar fırın **elektriğe bağlandığında** ekranda 0:00 görüneceğini yazıyor. Kesintiden sonra fırın yeni bağlanmış gibi davrandığı için saat de sıfırlanır (çıkarım); yukarıdaki adımlarla yeniden ayarla. Ekran hiç yanmıyorsa Vestel'in sorun giderme tablosu fişin iyice takılı olup olmadığına bakmanı, **fişi çıkarıp 10 saniye sonra yeniden takmanı** ve prizi başka bir cihazla denemeni istiyor. Sigorta ya da devre kesici sorunu yetkili servis teknisyeninin işi.

## Ne zaman servis

- Ekran hiç yanmıyor ya da tuşlar kilit açıkken de tepki vermiyorsa
- Fiş ve priz sağlamken fırın çalışmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, çocuk kilidi, fiş ve priz kontrolü sende; mikrodalganın kasası, elektronik kartı ve ekranı yetkili servisin. Mikrodalganın kasasını hiçbir koşulda açma.

## Servisi aramadan önce kısa özet

1. Mikrodalganın modeli ne?
2. Ekranda 0:00, 00:00 ya da kilit göstergesi mi var?
3. Saat tuşuna basınca rakamlar yanıp sönüyor mu?
4. Fiş başka bir prizde de aynı mı davranıyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Çalışmama belirtileri [Vestel mikrodalga çalışmıyor](/blog/vestel-mikrodalga-calismiyor/), ısıtma sorunları [mikrodalga ısıtmıyor](/blog/mikrodalga-isitmiyor/), fırının saati [Vestel fırın saat ayarlama](/blog/vestel-firin-saat-ayarlama/) yazısında. Bil, gör, çağır.
