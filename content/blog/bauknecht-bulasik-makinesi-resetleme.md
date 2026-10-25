---
title: "Bauknecht bulaşık makinesi resetleme ve program iptali"
description: "Bauknecht bulaşık makinesinde reset: On-Off/Reset düğmesi, Drain Out ile iptal, bir dakika kapalı bekletme, tuş kilidi ve karıştırılan ayar modları."
slug: "bauknecht-bulasik-makinesi-resetleme"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "bauknecht" geçen slug, başlık ya da metin yok; whirlpool-/hotpoint-/indesit-bulasik-makinesi-resetleme başka marka sorgusu, metin onlardan bağımsız yazıldı.
# Arama kanıtı (ham _kaynak/ot-kanit.txt): "bauknecht bulaşık makinesi" → 2. "bauknecht bulasik makinesi resetleme" (12:44); "bauknecht bulaşık makinesi r" → 1. (13:03, tek öneri). GSC: satır yok (www-3..6 Sorgular.csv).
# Belge zinciri: docs.bauknecht.eu/?Campo_Ricerca=<model> (200, "Whirlpool Docs", yönlendirme yok) → portalın /js/main.js'indeki API (200) → Thron PDF (200 application/pdf). Dört belgenin hepsinde "THANK YOU FOR BUYING A BAUKNECHT PRODUCT" var.
#  (B1) BFC 3C26 Daily Reference Guide EN 400011333294 (12/2018), 8 s., md5 36eec9dab5232747daac0c401b749cd5
#  (B2) BFC 3C26 Daily Reference Guide EN 19514809300 (07/2016), 8 s., md5 f6ba795d44853becd4caace17eaca661
#  (B3) BFC 3C26 Daily Reference Guide EN 19514633000 (06/2016), 8 s., md5 67901b2b01d6d9b469581397bad4ad3d
#  (B4) BUC 3C26 Daily Reference Guide EN 400011504815, 8 s., md5 4c415f6a72bda15c66dba7c64316a352
# BİLEREK YAZILMAYANLAR: servis/test modu (belgede yok) · F3 dışındaki kodların teşhisi · pompa ve kart işi · fiyat (#46).
# Alıntı denetimi: bauknecht-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Panelde On-Off/Reset düğmesini ve Drain Out görevini de üstlenen Start/Pause düğmesini bul."
  - "Yanlış programı yeni başlattıysan ON/OFF'u basılı tutarak makineyi kapat, yeniden aç ve yeni programı seç."
  - "Programı tamamen bitirip suyu boşaltmak için Start/Pause'a uzun bas; Drain Out devreye girer."
  - "Makine komutlara yanıt vermiyorsa ON/OFF ile kapat, yaklaşık bir dakika sonra aç ve programı yeniden kur."
  - "Kapı açıldıysa ya da elektrik kesildiyse kapıyı kapat, elektrik gelince gerekirse Start/Pause'a bas."
  - "Tuşlar tepkisizse Multizone düğmesine üç saniye basarak tuş kilidini kaldır; musluk ışığı yanıp sönüyorsa musluğu aç."
  - "Kod ya da arıza sürüyorsa fişi çek, musluğu kapat ve kapı yanındaki plakadaki kodlarla servisi ara."
faq:
  - q: "Bauknecht bulaşık makinesinde reset tuşu hangisi?"
    a: "BFC 3C26 ve BUC 3C26 kılavuzlarının İngilizce baskısında kontrol panelindeki ilk düğme On-Off/Reset diye geçiyor. Ayrı bir sıfırlama tuşu yok; kapatıp açma ve uzun basışlar bu düğmeyle ya da Start/Pause ile yapılıyor."
  - q: "Programı yarıda kesip suyu nasıl boşaltırım?"
    a: "Start/Pause düğmesine uzun bas. Kılavuz buna Drain Out diyor: çalışan program duruyor ve makinedeki su boşaltılıyor."
  - q: "BUC 3C26 ekranında F9 ya da F12 çıktı, bu bir reset gerektirir mi?"
    a: "BUC 3C26 kılavuzuna göre On/Off ve Start/Pause ışıkları hızlı yanıp sönerken bu kodlar görünüyorsa makineyi kapat, yaklaşık bir dakika sonra aç ve programı yeniden başlat. Kod kalırsa fişi prizden ayırıp bir dakika bekletmen öneriliyor; ondan sonra da sürüyorsa servis."
  - q: "Start/Pause'a basılı tuttum, ekranda yanıp sönen bir sayı çıktı. Bozdum mu?"
    a: "Büyük olasılıkla ayar moduna girdin. BFC 3C26 kılavuzunda makine kapatılıp açıldıktan sonra Start/Pause'a beş saniye basmak su sertliği ayarını açıyor. Ayar, ON/OFF ile kapatınca tamamlanıyor; mevcut değeri değiştirmeden kapatabilirsin."
  - q: "Kapı programın sonunda kendiliğinden açıldı, normal mi?"
    a: "BFC 3C26'daki ActivEco, BUC 3C26'daki ActiveDry kurutma sistemi kapıyı kurutma sırasında ya da sonunda otomatik açıyor. İstemezsen kılavuzdaki sırayla kapatabilirsin; ekranda oOF görünür."
images:
  coverAlt: "Mutfak tezgâhının altına yerleştirilmiş kapağı kapalı bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda su giriş musluğu"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
---

Bauknecht bulaşık makinen yanlış programla başladı, yarıda kaldı ya da tuşlara bastığında ekran tepki vermiyor. Bauknecht'in bu model ailesinde ayrı bir reset tuşu aramana gerek yok: panelin ilk düğmesi zaten **On-Off/Reset** adını taşıyor ve programı iptal etmek, suyu boşaltmak ya da makineyi toparlamak birkaç basış türüyle yapılıyor. Bu yazıda BFC 3C26'nın 2016 ve 2018 tarihli günlük kullanım kılavuzlarını ve BUC 3C26 kılavuzunu karşılaştırdık; hepsi kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi. Üç BFC baskısında panel aynı, BUC 3C26'da ise birkaç fark var; aşağıda ayrıca belirttik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yanlış program: ON/OFF basılı, makine kapanır, yeniden aç. İptal ve suyu boşaltma: Start/Pause uzun basış (Drain Out). Komut almıyorsa kapat, bir dakika bekle, aç. Tuşlar kilitliyse Multizone üç saniye. Start/Pause ya da P tuşuna kapalıyken uzun basmak reset değil, ayar modudur.

## Hangi uzun basış ne yapıyor

| Basış | Sonuç | Reset mi? |
|---|---|---|
| **ON/OFF basılı tut** | Makine kapanır, program silinir | Evet |
| **Start/Pause uzun bas (program sürerken)** | Drain Out: program durur, su boşalır | Evet |
| **Multizone üç saniye** | Tuş kilidi açılır ya da kapanır | Hayır, kilit |
| **Kapat-aç, sonra Start/Pause beş saniye** | Su sertliği ayarı | Hayır, ayar |
| **Kapat-aç, sonra Start/Pause üç kez** | Parlatıcı miktarı ayarı | Hayır, ayar |
| **Kapat-aç, sonra P beş saniye** | Otomatik kapı açma kapalı/açık | Hayır, ayar |

## Adım adım: Bauknecht bulaşık makinesini sıfırlama

**1. Paneli tanı.** BFC 3C26 kılavuzunun panel listesinde birinci sırada **On-Off/Reset** düğmesi, on dördüncü sırada **Start/Pause / Drain out** düğmesi var. Multizone düğmesi aynı zamanda tuş kilidini, Sani Rinse düğmesi de tablet ayarını taşıyor. Reset için gereken her şey bu iki düğmede.

**2. Yanlış programı değiştir.** Kılavuzun tarifi: program yeni başladıysa **ON/OFF düğmesini basılı tut, makine kapanır.** Ardından ON/OFF ile yeniden aç, yeni programı ve istediğin seçenekleri belirle, Start/Pause ile başlat. Bu yol yalnız program henüz başlamışken geçerli diye yazılmış.

**3. Programı iptal edip suyu boşalt.** Yıkama ilerlediyse ve tamamen vazgeçtiysen **Start/Pause düğmesine uzun bas.** Kılavuz buna Drain Out diyor: çalışan program duruyor ve içerideki su dışarı atılıyor. Kılavuzun sorun tablosu aşırı köpükte de aynı yolu öneriyor: makineyi bu düğmeyle sıfırla ve deterjan koymadan yeni bir program çalıştır.

**4. Komut almıyorsa bir dakika kapalı tut.** Sorun tablosunda "makine komutlara yanıt vermiyor" satırının çözümü şu: **ON/OFF ile kapat, yaklaşık bir dakika sonra yeniden aç ve programı yeniden kur.** BUC 3C26'da ekranda F9 ya da F12 görünüp On/Off ile Start/Pause ışıkları hızlı yanıp sönüyorsa da aynısı isteniyor; geçmezse fişi bir dakika çekip yeniden takman öneriliyor.

**5. Kesintiden sonra kaldığı yerden sürdür.** Yıkama sırasında kapıyı açarsan ya da elektrik kesilirse program duruyor. BFC 3C26 kılavuzu kapı kapandığında ya da elektrik geldiğinde Start/Pause'a basarak kaldığı yerden devam etmeni istiyor; aynı kılavuzun sorun tablosu ise makinenin elektrik gelince kendiliğinden başladığını yazıyor. BUC 3C26 daha net: güvenlik için makine kendiliğinden başlamıyor, Start/Pause'a basman gerekiyor. Kısacası makine durmuş bekliyorsa Start/Pause'a bas. Arada bulaşık eklemek istersen makineyi kapatmadan kapıyı aç, sıcak buhara dikkat et.

**6. Kilidi ve musluğu kontrol et.** Tuşlar ölü gibiyse tuş kilidi açık olabilir. Kılavuza göre **Multizone düğmesine üç saniye uzun basmak** kilidi açıp kapatıyor; kilit, ON/OFF dışındaki bütün paneli bloke ediyor. Panelde kapalı musluk ışığı yanıp sönüyorsa makineye su gelmiyor ya da musluk kapalı. Musluğu açıp hortumun bükülmediğine bak.

**7. Sürüyorsa servise bırak.** Kapatıp açmak ve fişi çekmek işe yaramadıysa fişi çek, musluğu kapat ve servisi ara. Kılavuz servise, kapının iç tarafında sol ya da sağ kenardaki plakada yazan kodları vermeni istiyor.

## Uzun basışla girilen ayar modları

Bu kılavuzlarda üç uzun basış sırası reset değil, ayar menüsü açıyor ve hepsi aynı kalıpla başlıyor: makineyi aç, kapat, sonra bir tuşa uzun bas. Start/Pause'a beş saniye basıp bip sesini duyduktan sonra makineyi açınca su sertliği seviyesi ve tuz ışığı yanıp sönüyor; BFC 3C26 kılavuzlarında fabrika ayarı orta (3). Start/Pause'a üç kez basınca parlatıcı seviyesi açılıyor. BFC 3C26'nın 2018 baskısında P tuşuna beş saniye basmak ActivEco'yu kapatıp açıyor; ekranda oOF ya da oOn yazıyor. BUC 3C26'da aynı iş ActiveDry adıyla yapılıyor. Her ayar, makineyi ON/OFF ile kapatınca tamamlanıyor. Yanlışlıkla girdiysen değere dokunmadan kapatman yeterli (çıkarım: kılavuz değişiklik yapmadan çıkışı ayrıca tarif etmiyor, ama her ayarı kapatma adımıyla bitiriyor). Tuz ve parlatıcıyı bilinçli ayarlamak istersen [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına bak.

BUC 3C26'da ekranda **F3** varsa makine suyu boşaltamıyor demek; kılavuz tahliye hortumunun bükülüp bükülmediğine, lavabo giderinin tıkalı olup olmadığına ve filtreye bakmanı istiyor. Ayrıntı [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) ve [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazılarında. Aynı markanın çamaşır makinesi için [Bauknecht çamaşır makinesi resetleme](/blog/bauknecht-camasir-makinesi-resetleme/) yazısı var.

## Ne zaman servis

- Bir dakika kapalı bekletme ve fişi çekme sonrası aynı kod dönüyorsa
- Drain Out çalıştığı hâlde su boşalmıyorsa
- Musluk açık olduğu hâlde musluk ışığı sönmüyorsa
- Panel hiç yanmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Düğme basışları, fiş, musluk ve filtre senin; pompa, ısıtıcı, elektronik ve kasanın içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Plakadaki model ve servis kodu ne?
2. Ekranda hangi kod görünüyor, hangi ışıklar yanıp sönüyor?
3. Bir dakika kapalı beklettin mi?
4. Tuş kilidi kapalı, musluk açık mı?
5. Filtre temiz mi?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
