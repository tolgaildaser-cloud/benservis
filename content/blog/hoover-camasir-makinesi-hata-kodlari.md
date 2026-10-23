---
title: "Hoover çamaşır makinesi hata kodları: E2, E3, E4, E7"
description: "Hoover çamaşır makinesinde E2, E3, E4 ve E7 ne demek? Kılavuzun tablosu, ekransız modelde ışık sayımı ve evde yapılacak kontroller sırayla."
slug: "hoover-camasir-makinesi-hata-kodlari"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3). origin/main 75980e0 content/blog'da slug/başlık/gövde "hoover" grep 0 sonuç.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "hoover çamaşır makinesi h" → 1. hangi ülkenin, 2. hata kodları, 3. hangi markanın yan ürünü;
#   "hoover çamaşır makinesi e" → 1. e03 hatası, 2. e02 hatası, 3. e20 hatası. GSC: satır yok.
# Belge: Hoover H3WPS294TAM6-17 kullanım kılavuzu (TR), hoover-home.com ürün sayfası → page-data.json → cloudfront PDF, bu koşuda HTTP 200,
#   md5 4d86c3b978d0d1ed45b37241e6926c27; çapraz kontrol HWP-414AMBC kılavuzu md5 dc558b77ab618d653de7e5b988ec493b.
# BİLEREK YAZILMAYANLAR: E20 ve tablodaki dört kod dışındaki kodların anlamı (belgede yok) · kart/pompa teşhisi · fiyat (#46).
#   Alıntı denetimi: hoover-camasir-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu", "Emici bez", "Küçük kap"]
steps:
  - "Ekrandaki kodu ya da ekransız modelde ışıkların kaç kez yanıp söndüğünü not et."
  - "E2 için su musluğunun açık olduğuna ve giriş hortumunun bükülmediğine bak."
  - "Musluğu kapatıp giriş hortumunu makinenin arkasından sök, ağzındaki küçük filtreyi kontrol et."
  - "E3 için fişi çekip ön alttaki pompa filtresini aç, temizle, yerine tak; tahliye hortumunu ve gideri kontrol et."
  - "E4 için deterjan miktarını azalt ve yalnız çamaşır makinesi ürünü kullan."
  - "E7 için kapağı açıp aradaki giysiyi çek, kapağı düzgün kapat; sıkışmışsa fişi çekip birkaç dakika bekle."
  - "Diğer kodlarda makineyi kapat, fişi çek, bir dakika bekle, programı yeniden başlat; kod dönerse yetkili servise bildir."
faq:
  - q: "Hoover çamaşır makinesinde E03 hatası ne demek?"
    a: "Kılavuz kodları başında E olan bir sayıyla gösteriyor, örneğin Hata 2 = E2. Ekranda E03 görüyorsan bunun Hata 3 olduğunu, yani makinenin suyu boşaltmadığını düşünmek mantıklı (çıkarım). Önce pompa filtresine, sonra tahliye hortumuna ve evin giderine bak."
  - q: "Ekranı olmayan Hoover'da hata nasıl anlaşılır?"
    a: "Kılavuza göre ekransız modellerde tüm ışıklar hata numarası kadar yanıp söner, ardından 5 saniye durur ve sayım tekrar eder. İki yanıp sönme Hata 2, üç yanıp sönme Hata 3 demektir."
  - q: "E20 kodu kılavuzda var mı?"
    a: "Hayır. İncelediğimiz kılavuzun tablosunda yalnız E2, E3, E4 ve E7 açıklanıyor, gerisi 'diğer kodlar' satırında. O satırın önerisi makineyi kapatıp fişi çekmek, bir dakika bekleyip programı yeniden başlatmak; kod tekrar çıkarsa yetkili servise başvurmak."
  - q: "Kod çıkmadan makine çalışmıyorsa?"
    a: "Kılavuz bu durumda prizi başka bir cihazla denemeni, elektrik olduğundan emin olmanı, kapağı açıp yeniden kapatmanı, programın seçili ve başlat düğmesine basılmış olduğunu, makinenin duraklatma modunda olmadığını kontrol etmeni söylüyor."
images:
  coverAlt: "Banyoda duran beyaz bir önden yüklemeli çamaşır makinesinin kontrol paneli"
  steps:
    - "Çamaşır makinesinin ekranında harf ve sayıdan oluşan küçük bir kod"
    - "Duvardaki su musluğuna bağlı gri bir giriş hortumu"
    - "Makinenin arkasından sökülmüş giriş hortumunun ağzındaki küçük süzgeç"
    - "Ön alttaki kapağı açılmış pompa filtresi ve altına serilmiş bir bez"
    - "Deterjan çekmecesinin içinde az miktarda toz deterjan"
    - "Kapak contasına sıkışmış bir tişört ucu"
    - "Prizden çekilmiş fiş ve yanında kapalı duran çamaşır makinesi"
---

Hoover çamaşır makinen program ortasında durdu ve ekranda E ile başlayan bir kod belirdi. Ya da ekranı olmayan modelde bütün ışıklar aynı anda yanıp sönmeye başladı. Hoover'ın H3WPS294TAM6-17 modeline ait Türkçe kullanım kılavuzu bu durumlar için bir hata tablosu veriyor ve dört kodu tek tek açıklıyor. Bu yazıda tabloyu, ekransız modellerde ışıkları nasıl sayacağını ve servisi aramadan önce yapabileceklerini topladık. Kılavuz bu modele ait; senin makinende panel ve düğme adları farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E2 su almıyor, E3 suyu boşaltmıyor, E4 çok köpük ya da su var, E7 kapak sorunu. Musluk, hortum, pompa filtresi, deterjan ve kapak sende. Tablo dışındaki bir kodda makineyi kapat, fişi çek, bir dakika bekle, yeniden başlat; kod dönerse yetkili servis.

## Kodlar ne söylüyor

Kılavuza göre ekranlı modellerde hata, başında **E** olan bir sayıyla gösterilir: Hata 2 = E2. Ekransız modellerde ise **tüm ışıklar hata numarası kadar yanıp söner**, sonra 5 saniye durur ve sayım tekrar eder. Senin ekranında E03 ya da E02 gibi iki haneli bir yazım görüyorsan bunun aynı kod olduğunu düşünmek mantıklı (çıkarım).

| Kod | Kılavuza göre anlamı | Ne yapılır |
|---|---|---|
| **E2** / 2 kez yanıp sönme | Makine su alamıyor | 🛠️ Musluk, hortum, giriş süzgeci, pompa filtresi |
| **E3** / 3 kez | Suyu boşaltmıyor | 🛠️ Pompa filtresi, tahliye hortumu, gider |
| **E4** / 4 kez | Çok fazla köpük ve/veya su | 🛠️ Deterjanı azalt |
| **E7** / 7 kez | Kapak sorunu | 🛠️ Kapağı düzgün kapat |
| **Diğer kodlar** | Tabloda açıklanmıyor | ⏳ Kapat, fişi çek, bir dakika bekle, yeniden dene |

## Adım adım: evde denenecekler

**1. Kodu not et.** Ekrandaki yazıyı olduğu gibi bir kâğıda yaz. Ekransız modelde bir tur boyunca ışıkların kaç kez yandığını say, 5 saniyelik aradan sonra bir tur daha sayıp doğrula. Servisi aradığında bu bilgi işe yarar.

**2. E2: musluk ve hortum.** Kılavuzun ilk iki sorusu şu: su musluğu açık mı, giriş hortumu bükülmüş, dolaşmış ya da sıkışmış mı? Hortum duvarla makine arasında ezilmişse makineyi biraz öne çek ve hortumu düzelt. Kılavuz tahliye borusunun uygun yükseklikte olmasını da bu satırda sayıyor.

**3. E2: giriş süzgeci.** Kılavuzun tarifi: **su musluğunu kapat, doldurma hortumunu makinenin arkasından sök ve "kum giderme" filtresinin kirli ya da tıkalı olmadığından emin ol.** Hortumu sökerken içinde kalan biraz su akabilir, altına bir kap tut. Yerine takarken elle sık, musluğu yavaşça açıp sızıntı olup olmadığına bak. Ayrıntılar [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısında.

**4. E3: pompa filtresi ve tahliye.** Kılavuz önce filtrenin tıkalı olmadığından ya da filtre bölmesinde su akışını engelleyen yabancı madde bulunmadığından emin olmanı istiyor. Filtre temizliği bölümüne göre önce **makinenin elektrik bağlantısını kes**, altına emici bir bez koy, filtreyi saat yönünün tersine çevirip çıkar ve temizle, sonra yerine tak. İçeride su varsa bez ve kap hazır olsun. Ardından tahliye hortumunun bükülmediğine bak; kılavuz evin giderinin de tıkalı olmamasını, gerekirse suyu lavaboya boşaltmayı denemeni öneriyor.

**5. E4: deterjan.** Bu kodun açıklaması kısa: **aşırı miktarda deterjan ya da çamaşır makinesi için üretilmemiş bir ürün** kullanılmış olabilir. Bir sonraki yıkamada dozu düşür, elde yıkama deterjanı ya da bulaşık ürünü koyma. Kılavuz başka bir bölümde de makinenin aşırı köpüğü algıladığında sıkmayı atlayabildiğini ya da program süresini uzatabildiğini yazıyor.

**6. E7: kapak.** Kapağın doğru kapandığından ve kapanmasını engelleyen giysi olmadığından emin ol. Kılavuz kapak sıkışmışsa **makineyi kapatıp fişini çekmeni, 2-3 dakika bekleyip kapağı yeniden açmanı** öneriyor. Kapak hiç açılmıyorsa zorlama; [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bak.

**7. Diğer kodlar ve servis.** Tablo dışındaki kodlar için kılavuzun tek bir önerisi var: **makineyi kapat, fişini çek, bir dakika bekle; makineyi açıp bir program başlat. Hata tekrar meydana gelirse Yetkili Müşteri Hizmetleri Merkezi ile iletişime geç.** Arama verisinde öne çıkan E20 bu kılavuzda açıklanan bir kod değil; anlamını tahmin etmek yerine bu adımı uygula ve kod dönerse servisi ara.

## Kod çıkmadan yaşanan sorunlar

Kılavuzun "diğer anormal durumlar" tablosu kod olmadan görülen belirtileri de kapsıyor. Makine hiç açılmıyorsa prizi bir lamba gibi başka bir cihazla dene, kapağı açıp yeniden kapat, programın seçili olduğuna ve duraklatma modunda olmadığına bak. Sıkma yapmıyorsa yük dengesiz olabilir; çamaşırları yeniden yerleştirip programı başlat, "no spin" (sıkmasız) seçeneğinin açık olmadığından emin ol. Daha geniş liste [çamaşır makinesi hata kodları](/blog/camasir-makinesi-hata-kodlari/) sayfasında.

## Ne zaman servis

- Aynı kod fişi çekip yeniden başlattıktan sonra da dönüyorsa
- Pompa filtresi ve hortumlar temiz olduğu hâlde E2 ya da E3 sürüyorsa
- Makinenin altından su geliyor ve kaynağını göremiyorsan
- Sigorta makineyi her açtığında atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kılavuz da web sitesindeki yedek parça listesi dışında makineyi kendi başına tamir etmemeni yazıyor. Musluk, hortum ağzı, pompa filtresi ve deterjan sende; pompa, rezistans, motor, kart ve kasanın içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (tip etiketinde yazar)?
2. Ekranda hangi kod var, ya da ışıklar kaç kez yanıp sönüyor?
3. Musluk ve hortumları kontrol ettin mi?
4. Pompa filtresini temizledin mi?
5. Fişi çekip yeniden başlattıktan sonra kod döndü mü?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Sıkma tarafı [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısında. Bil, gör, çağır.
