---
title: "Siemens çamaşır makinesi hata kodları: resmî liste ve F21 meselesi"
description: "Siemens çamaşır makinen E17, E18 ya da E23 mü veriyor? BSH'nin yayımladığı on kodun anlamı, evde çözülebilenler ve F21'in neden listede olmadığı."
slug: "siemens-camasir-makinesi-hata-kodlari"
date: "2026-08-20"
category: "Çamaşır makinesi"
# 🔴 22 Ağu 2026 — F21 KALDIRILDI (kod tablosu denetimi, TARAMA-1).
# "F21 = motor sistemi arızası (kömür)" eşleşmesi BSH'nin hiçbir bölge sitesinde ve
# kılavuzunda geçmiyor. BSH'nin tahrik/motor kodu E80. F21 yazının BAŞLIĞINDAYDI.
# Kaynak: bosch-home.com.tr/musteri-hizmetleri/yardim-destek/camasir-makinesi-hatalari
# + altındaki 10 kod sayfası (bu koşuda tek tek indirildi). Yayımlanan liste tam olarak:
# E16 E17 E18 E19 E20 E23 E25 E26 E27 E28. Siemens'in kendi tablosu bununla birebir aynı.
# 📌 "F21 aradıysan" bölümü BİLEREK duruyor: arama gerçek, okuru boşa düşürmüyoruz.
# ⛔ guide ve steps DEĞİŞMEDİ — sekiz adım kod-bağımsız, hepsi doğru kalıyor.

guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Havlu", "Sığ bir kap", "Küçük fırça (eski diş fırçası)"]
steps:
  - "Kodu önekiyle not et. Ekrandaki kodu E ya da F önekiyle birlikte yaz. Yeni modeller E, eski modeller F önekiyle aynı numarayı gösterir; E18 ile F18 birebir aynı anlama gelir."
  - "Bir kez resetle. Program düğmesini kapalı konuma al, fişi bir dakika çek, tekrar tak ve programı yeniden başlat. Reset kodu siler ama sebebi silmez; kod geri geliyorsa aşağı devam et."
  - "Alt kapağı güvenle aç. Makineyi kapat, fişini çek ve cihaz soğukken ön alt köşedeki küçük kapağı aç; burası kullanıcıya ayrılmış bölümdür. Önüne havlu ser ve sığ bir kap koy. Filtreyi makine sıcakken ya da fiş takılıyken açma."
  - "Tahliye filtresini temizle. Filtreyi çevirip çıkar; bir miktar su gelir, bu normaldir. Biriken tüyü, bozuk parayı, tokayı temizle ve filtreyi klik diye oturana kadar geri tak."
  - "Tahliye hortumunu kontrol et. Makinenin arkasındaki tahliye hortumunun bükülmediğini ve gidere bağlandığı noktanın tıkalı olmadığını kontrol et. Bu iki kontrol tahliye kodlarının büyük kısmını ücretsiz kapatır."
  - "Musluğu ve basıncı doğrula. Musluğun tam açık olduğundan ve giriş hortumunun bükülmediğinden emin ol. Evde genel bir su kesintisi ya da düşük basınç olup olmadığını başka bir muslukta test et."
  - "Musluk süzgecini temizle. Musluğu kapat, hortumu musluk tarafından sök ve bağlantıdaki küçük süzgeci akan suyun altında temizleyip geri tak. Bu da kullanıcı seviyesinde bir iştir."
  - "Çevreyi ıslaklık için gözle. Makinenin altına ve çevresine bak: görünür bir ıslaklık ya da damlama izi var mı? Son yıkamada fazla deterjan kullandıysan bunu da not et; servisle konuşurken işe yarar."
faq:
  - q: "Siemens çamaşır makinesi E18 (F18) ne demek?"
    a: "E18/F18, tahliye süresinin aşıldığını gösterir: makine içindeki suyu atamıyordur. En sık sebep tüy, bozuk para ya da tokayla tıkanmış tahliye filtresi veya bükülmüş tahliye hortumudur. Bu, Siemens'te en sık çıkan ve çoğu zaman evde ücretsiz çözülen koddur."
  - q: "Siemens'te E ve F önekli kodlar farklı mı?"
    a: "Hayır, aynı arızanın iki yazımıdır. Yeni nesil modeller E, daha eski modeller F önekiyle aynı numarayı gösterir; yani E18 ile F18 birebir aynı anlama gelir. Bu yüzden rehberde ikisini birlikte veriyoruz."
  - q: "Siemens F21 hatası ne demek?"
    a: "BSH'nin yayımladığı çamaşır makinesi listesinde F21 diye bir kod yok. İnternette çok dolaşan 'F21 motor kömürü' eşleşmesi Bosch ve Siemens'in hiçbir bölge sitesinde ve kılavuzunda geçmiyor. BSH'nin tahrik tarafı için kullandığı kod E80'dir. Ekranında F21 gördüğünü düşünüyorsan kodu bir kez daha kontrol et ve kendi modelinin kılavuzundan teyit et; motor tarafında gerçekten sorun varsa belirtisi nettir: kazan hiç dönmez ya da sıkmaya geçemez."
  - q: "Bosch'taki kodlarla Siemens kodları aynı mı?"
    a: "Evet. Siemens ve Bosch aynı grubun (BSH) ortak platformunu kullanır; E/F kodları iki markada da aynı anlama gelir. Bosch için yazdığımız kod listesi Siemens'te, Siemens için yazdıklarımız Bosch'ta da geçerlidir."
images:
  coverAlt: "Çamaşır makinesinin program kadranı ve gösterge penceresinin yakın planı"
  steps:
    - "Aynı numaranın yeni modellerde E, eski modellerde F önekiyle gösterildiğini iki ekranla karşılaştıran çizim"
    - "Program düğmesini kapatma, fişi bir dakika çekme ve yeniden başlatma sırasını üç adımda gösteren çizim"
    - "Alt kapağı açmadan önceki üç şartı — fiş çekili, cihaz soğuk, havlu ve sığ kap hazır — gösteren çizim"
    - "Tahliye filtresinin çevrilerek çıkarılışını ve klik sesiyle oturana kadar geri takılışını gösteren çizim"
    - "Tahliye hortumunun bükümünü ve gider ağzına bağlandığı noktayı iki ayrı yakın planda gösteren çizim"
    - "Makinenin musluğunu ve akışın evin genelinde zayıf olup olmadığını başka bir muslukta denemeyi gösteren çizim"
    - "Süzgecin musluk tarafındaki eşini, hortumun o uçtan ayrılıp akan suda temizlenişiyle gösteren çizim"
    - "Makinenin altındaki ıslaklık izine bakmayı ve fazla deterjan kullanımını not etmeyi gösteren çizim"
---

Program ortasında makine durdu, ekranda **E18** yazıyor; ya da çamaşırlar sırılsıklam çıktı ve panelde başka bir kod yanıp sönüyor. Siemens çamaşır makineleri arızayı **E** ya da **F** önekli kodlarla bildirir ve bu kodların bir kısmı beş dakikalık bir kontrolle çözülürken bir kısmı net biçimde servis işidir. Bu rehberde en sık çıkan Siemens kodlarını, anlamlarını ve aradaki sınırı topladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 💡 **E mi F mi?** Yeni Siemens modelleri **E**, eski modeller **F** önekiyle **aynı numarayı** gösterir — yani **E18 = F18**, **E23 = F23**. Ayrıca Siemens, Bosch ile aynı platformu (BSH) kullandığı için kodlar iki markada da aynıdır.

> ⚠️ Kodların anlamı model ve seriye göre değişebilir; aşağıdakiler en yaygın anlamlardır. Kesin teşhis için modelini ve kodu Benservis'e yaz.

## Adım adım: kod geldiğinde evde denenecek ücretsiz kontroller

**1. Kodu önekiyle not et.** Ekrandaki kodu E ya da F önekiyle birlikte yaz. Yeni modeller E, eski modeller F önekiyle aynı numarayı gösterir; E18 ile F18 birebir aynı anlama gelir.

**2. Bir kez resetle.** Program düğmesini kapalı konuma al, fişi bir dakika çek, tekrar tak ve programı yeniden başlat. Reset kodu siler ama sebebi silmez; kod geri geliyorsa aşağı devam et.

**3. Alt kapağı güvenle aç.** Makineyi kapat, fişini çek ve cihaz soğukken ön alt köşedeki küçük kapağı aç; burası kullanıcıya ayrılmış bölümdür. Önüne havlu ser ve sığ bir kap koy. Filtreyi makine sıcakken ya da fiş takılıyken açma.

**4. Tahliye filtresini temizle.** Filtreyi çevirip çıkar; bir miktar su gelir, bu normaldir. Biriken tüyü, bozuk parayı, tokayı temizle ve filtreyi klik diye oturana kadar geri tak.

**5. Tahliye hortumunu kontrol et.** Makinenin arkasındaki tahliye hortumunun bükülmediğini ve gidere bağlandığı noktanın tıkalı olmadığını kontrol et. Bu iki kontrol tahliye kodlarının büyük kısmını ücretsiz kapatır.

**6. Musluğu ve basıncı doğrula.** Musluğun tam açık olduğundan ve giriş hortumunun bükülmediğinden emin ol. Evde genel bir su kesintisi ya da düşük basınç olup olmadığını başka bir muslukta test et.

**7. Musluk süzgecini temizle.** Musluğu kapat, hortumu musluk tarafından sök ve bağlantıdaki küçük süzgeci akan suyun altında temizleyip geri tak. Bu da kullanıcı seviyesinde bir iştir.

**8. Çevreyi ıslaklık için gözle.** Makinenin altına ve çevresine bak: görünür bir ıslaklık ya da damlama izi var mı? Son yıkamada fazla deterjan kullandıysan bunu da not et; servisle konuşurken işe yarar.

## En sık çıkan Siemens kodları (özet tablo)

🛠️ = çoğu zaman kendin çözebilirsin · 🔧 = servis gerekir

| Kod | Anlamı | Ne yapmalı |
|-----|--------|------------|
| **E17 / F17** | Su alamıyor (musluk, basınç, giriş süzgeci) | 🛠️ Musluğu ve giriş hortumunu kontrol et |
| **E18 / F18** | Su atamıyor (tahliye süresi aşıldı) | 🛠️ Tahliye filtresini ve hortumu temizle |
| **E23 / F23** | Aquastop etkinleştirildi, taban tavasında su | 🔧 Servis (sızıntı tespiti) |
| **E19 / F19** | Isıtma süresi aşıldı | 🔧 Bosch/Siemens: "kendi kendine düzeltilemez" |
| **E20 / F20** | Beklenmeyen ısınma | 🛠️ Makineyi açıp kapatarak sıfırla; düzelmezse servis |
| **E25 / F25** | Bulanıklık sensörü arızası | 🔧 Servis |
| **E26 / F26** | Analog basınç sensörü arızası | 🔧 Servis |
| **E27 / F27** | Basınç sensörü arızası | 🔧 Servis |
| **E28 / F28** | Akış sensörü arızası | 🔧 Servis |

## E18 / F18 — Su atamıyor: en sık çıkan kod

Makine yıkamayı bitirmiş ama suyu gereken sürede boşaltamamış demektir. Suçlu neredeyse her zaman üç yerden biridir: **tahliye filtresi**, **tahliye hortumu** ya da **gider hattı**.

**Kendin kontrol et:** Önce makineyi kapat ve fişini çek. Alt ön köşedeki küçük kapağı aç — burası kullanıcıya ayrılmış bölümdür. Önüne havlu ser; filtreyi çevirip çıkardığında bir miktar su gelir, bu normaldir. Filtrede biriken tüyü, bozuk parayı, tokayı temizle ve filtreyi "klik" diye oturana kadar geri tak. Ardından makinenin arkasındaki tahliye hortumunun bükülmediğini ve gidere bağlandığı noktanın tıkalı olmadığını kontrol et.

⚠️ Filtreyi makine sıcakken açma; yıkama suyu sıcak olabilir. Fiş çekili olmadan da bu bölgeye girme.

Bu iki kontrol, E18 vakalarının büyük kısmını ücretsiz kapatır. Filtre ve hortum temizken kod tekrar geliyorsa sıra tahliye pompasına gelir — pompa değişimi servis işidir.

## E17 / F17 — Su alamıyor

E18'in aynadaki yansıması: makine gereken sürede su alamamıştır.

**Kendin kontrol et:** Musluğun tam açık olduğundan emin ol. Giriş hortumunun bükülmediğine bak. Evde genel bir su kesintisi ya da düşük basınç olup olmadığını başka bir muslukta test et. Musluk açık ve basınç normalse, hortumun musluk tarafındaki bağlantısında küçük bir süzgeç bulunur; musluğu kapatıp hortumu söktükten sonra bu süzgeci akan suyun altında temizleyebilirsin — bu da kullanıcı seviyesinde bir iştir.

Bunlara rağmen kod sürüyorsa su giriş valfi ya da AquaStop hortumu tarafında iş vardır; orası servise aittir.

## E23 / F23 — Su kaçağı (taban tavasında su)

Makine bir sızıntı algılamış ve alt taban tavasına su inmiştir; güvenlik sistemi cihazı durdurur. Sızıntının kaynağı conta, hortum bağlantısı ya da pompa tarafı olabilir.

**Kendin kontrol et:** Fişi çek ve musluğu kapat. Makinenin altına ve çevresine bak: görünür bir ıslaklık, damlama izi var mı? Deterjan çekmecesinden taşma ya da aşırı köpük de tabana su indirebilir — son yıkamada fazla deterjan kullandıysan bunu not et; servisle konuşurken işe yarar.

⛔ Tabandaki suyu görmek için makineyi yatırmak, alt paneli sökmek gerekiyorsa orada dur: **elektrikli ve sulu bir bölgedir**, sızıntının kaynağını bulmak servis işidir.

## Hata kodu nasıl sıfırlanır?

Çoğu modelde program düğmesini kapalı konuma al, fişi bir dakika çek, tekrar tak ve programı yeniden başlat. Şunu bilerek yap: reset, kodu siler ama **sebebi silmez**. Filtre hâlâ tıkalıysa E18 geri gelir.

## Kodun bu listede yok mu?

Siemens yüzlerce model üretir; bazı kodlar yalnız belirli serilerde çıkar ve anlamı modele göre değişir. Ekrandaki kodu ve cihazının model bilgisini Benservis'e yaz; olası arızayı, kendin çözüp çözemeyeceğini ve tahmini maliyet bandını ücretsiz gör.

## Hangi noktadan sonra servis işi?

Filtre temizliği, hortum kontrolü, musluk ve süzgeç kontrolü, reset — bunlar senin güvenli alanın. Motor, pompa değişimi, sızıntı tespiti, valf ve elektronik kart ise net biçimde servise ait. Kapak ve panel seviyesi kullanıcıya, tablanın altı servise aittir; bu çizgiyi geçmek çoğu zaman tasarruf değil, daha büyük bir fatura demektir.

Siemens ile Bosch aynı platformu kullandığı için sitemizdeki Bosch çamaşır makinesi hata kodları rehberi bu yazının kardeşidir; orada listelenen diğer E/F kodları Siemens için de geçerlidir. Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
