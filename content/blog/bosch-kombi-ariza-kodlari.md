---
title: "Bosch kombi arıza kodları"
description: "Bosch kombi arıza kodları model model: 227, 2971, E9, EA ve CE'nin anlamı, evde yapılacak kontrol ve servis sınırı; Bosch'un kendi sayfalarından."
slug: "bosch-kombi-ariza-kodlari"
date: "2026-09-16"
category: "Kombi"
faq:
  - q: "Bosch kombide E9 kodu ne demek?"
    a: "Bosch'un E9 sayfasına göre kombi E9 verip ateşleme yapmıyorsa sebep tesisatta kaçak, açık kalan emniyet ventili, eşanjör ya da hidrolik gruptaki kaçaklar olabilir. Servisi çağırmadan önce evde bakılabilecek en önemli nokta su basıncıdır: manometre 1 bar'ın altındaysa basınç düşüktür ve cihaza su basmak gerekebilir. Su kalmaması dışında sıcaklık sensörü, pompa ya da bağlantı kablolarında da sorun olabileceği için basınç normalken kod sürüyorsa yetkili servis gerekir."
  - q: "Bosch kombi EA ya da 227 kodu veriyor, ne yapmalıyım?"
    a: "İkisi de alevin algılanmadığını söyler. Bosch'un önerdiği ilk kontrol gaz vanasının açık olup olmadığıdır. EA sayfası bunu şöyle tarif ediyor: doğalgazlı ocağın varsa ocağı açmayı dene; ocak çalışmıyorsa daire dışındaki gaz vanasına bak, ocak çalışıyorsa kombinin yanındaki gaz vanasının boruyla aynı hizada, yani açık olduğundan emin ol. Sonra su basıncına bak. Gaz vanası açık ve basınç normal olduğu hâlde kod sürüyorsa Bosch yetkili servise ulaşılmasını istiyor."
  - q: "Bosch kombide 2971 ve 1017 kodlarının farkı ne?"
    a: "Bosch'un sayfalarında 1017 su basıncının çok düşük olduğunu, 2971 çalışma basıncının çok düşük olduğunu gösterir. İkisinde de çözüm su basıncını kontrol edip gerekirse öngörülen basınca kadar su eklemektir; 2971 için Bosch ayrıca ısıtma tesisatının havasının alınmasını söylüyor."
  - q: "Bosch kombinin basıncı kaç bar olmalı?"
    a: "Condens 2200i W kullanma kılavuzu işletme basıncının normal durumlarda 1 ila 2 bar arasında olması gerektiğini yazıyor ve ısıtma suyunun en yüksek sıcaklığında 3 bar'ın aşılmamasını istiyor. Bosch'un E9 ve EA sayfaları ideal aralığı 1,2-1,5 bar olarak veriyor; CE sayfası tesisat su basıncının 1,2 bar'a yükseltilmesini söylüyor."
  - q: "Bosch kombi nasıl resetlenir?"
    a: "Condens 2200i W kullanma kılavuzuna göre bazı arızalar sıfırlanmadan geçmez: cihazı kapatıp tekrar çalıştırırsın ya da ekranda H ve ! sembolleri kaybolana kadar kılavuzda gösterilen iki tuşu aynı anda basılı tutarsın. Harfli kod kullanan bazı modellerde görülen Fd kodu reset tuşuna uzun süre basıldığını gösterir; Bosch reset tuşuna 30 saniyeyi aşmayacak şekilde basılmasını istiyor. Arıza giderilemezse kodu ve cihaz bilgilerini servise bildir."
  - q: "Aynı kod her Bosch kombide aynı anlama mı gelir?"
    a: "Bosch'un arıza kodları sayfası kodları model başlıkları altında listeliyor ve kod düzenleri modele göre değişiyor: Condens 2300i W 227, 2971 gibi rakamlı kodlar kullanırken Condens 2500 W, Class ve Comfort serileri E9, CE gibi harfli kodlar kullanıyor. Kodu yorumlamadan önce kombinin modelini kumanda paneli kapağındaki tip etiketinden öğren."
  - q: "Kombiden gaz kokusu gelirse ne yapmalıyım?"
    a: "Condens 2200i W kullanma kılavuzunun güvenlik bölümüne göre: sigara içme, çakmak ve kibrit kullanma; elektrik şalteri kullanma, fiş çekme; telefonu kullanma ya da kapı zilini çalma; ana kapama tertibatından ya da gaz sayacındaki vanadan gazı kes; pencere ve kapıları aç; bütün apartman sakinlerini uyar ve binayı terk et; binaya başkalarının girmesine engel ol; binanın dışına çıkınca itfaiyeyi, polisi ve gaz dağıtım şirketini ara."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin ekranında yanıp sönen bir arıza kodu; kombinin altındaki basınç göstergesine bakan bir kişinin eli"
# --- Provenans (yayında görünmez) ---
# 2026-09-16, curl -sL ile indirildi. Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan alınmadı.
# 1) Bosch Home Comfort TR — "Bosch Kombi Arıza Kodları ve Çözümleri"
#    https://www.bosch-homecomfort.com/tr/tr/residential/servis-hizmetlerimiz/ariza-kodlari-ve-cozumleri/
#    HTTP 200, 185.795 B. Model başlıkları ve her başlığın altındaki kod listesi bu sayfadan.
#    Sayfadaki 35 kod bağlantısının 35'i indirildi, 35/35 HTTP 200 (her kodun tek bir sayfası var; aynı kod birden
#    fazla model başlığında aynı sayfaya bağlanıyor). Tanım/çözüm cümleleri bu alt sayfalardan.
#    Uzun metinli sayfalar: c6 · e9 · ea. Diğerleri "Arıza Tanımı / Çözüm" kalıbında.
# 2) Bosch Condens 2200i W Kullanma Kılavuzu, doküman 6721839341 (2023/04)
#    https://bosch-tr-tr-b.boschhc-documents.com/download/file/file/6721839341.pdf
#    HTTP 200, 1.137.334 B, 12 sayfa, md5 e06a7d8792003fe41f2a63b08204887b
#    (aynı md5 canlı kombi-basinci-kac-olmali yazısının künyesinde de var)
#    H sembolü + arıza kodu örneği 214, reset iki yolu, servise bildirilecek bilgiler (Tab. 3): s.9 · basınç 1-2 bar,
#    3 bar üst sınır, doldurma "tesisata göre farklılık gösterir / servisten göstermesini isteyin", soğukken maks. 40 °C,
#    radyatör havası: s.9 · gaz kokusu: s.3
# 3) Bosch Condens 2200i W Montaj Kılavuzu, doküman 6721839338 (2024/12)
#    https://bosch-tr-tr-b.boschhc-documents.com/download/file/file/6721839338.pdf
#    HTTP 200, 6.313.633 B, 32 sayfa, md5 893b7ca3cab946a214536c6fd3f9b7f7
#    Tab. 27: "Harf, ardından rakam veya harf — Arıza kodu yanıp söner" · Tab. 28: "Örnek 227 — Arıza kodu" (s.22)
# BİLEREK yazılmayanlar:
#  - "En sık görülen kod" iddiası (Bosch C6 ve E9 sayfaları "sıklıkla karşılaşılan" diyor ama sıralama/oran yok).
#  - Kod sayfalarında kullanıcıya bırakılmış gibi duran sensör/kablo/modül/termostat kablosu kontrolleri (A7, A8, Ad, AC, CC,
#    E2, H11) — kombinin iç kısmı ve elektrik bağlantısı olduğu için servis işi olarak verildi.
#  - 356'daki "en az 196 VAC" değerinin evde nasıl ölçüleceği; C1/C7'deki "voltaj düşük olabilir" için kullanıcı adımı.
#  - Su takviye musluğunun her modelde aynı yerde/aynı yönde olduğu (yalnız Bosch'un E9/EA sayfalarının tarifi aktarıldı,
#    2200i W kılavuzunun "servisten göstermesini isteyin" cümlesiyle yan yana).
#  - Reset için tuşların adı/simgesi (kılavuzda simge olarak basılı, metinde okunmuyor) ve basılı tutma süresi.
#  - Condens 2200i W'nin Bosch sayfasındaki 2300i W kod listesiyle aynı olduğu (sayfa 2200i W başlığı açmıyor).
#  - Tamir süresi, parça adı, fiyat.
---

Bosch kombinin ekranında bir kod yanıp sönüyor: 227, 2971, belki E9 ya da CE. Kodun ne dediğini bilmek, servisi aramadan önce yapabileceğin birkaç basit kontrolü de gösterir.

Bu yazıdaki kodlar Bosch Termoteknik'in Türkiye sitesindeki **arıza kodları ve çözümleri** sayfasından ve **Condens 2200i W** kombinin kullanma ve montaj kılavuzlarından alındı. Bosch kodları model başlıkları altında veriyor, çünkü kod düzeni modele göre değişiyor. Tablolar da bu yüzden modele göre ayrıldı.

> ⚠️ **Bu yazı kullanım ve kontrol rehberidir, tamir değil.** Gaz, baca, fan, sensör, kart ve kombinin iç kısmı yetkili servis işidir. Kod listeleri modele göre değişir; **kendi kombinin kılavuzu esastır.**

## Gaz kokusu alıyorsan önce bunu yap

Kod okumaya geçmeden önce: kombinin çevresinde gaz kokusu varsa Condens 2200i W kılavuzunun güvenlik bölümü şunları istiyor.

- Sigara içme, çakmak ve kibrit kullanma.
- Elektrik şalteri kullanma, fiş çekme.
- Telefonu kullanma, kapı zilini çalma.
- Ana kapama tertibatından ya da gaz sayacındaki vanadan **gazı kes**.
- Pencere ve kapıları aç.
- Bütün apartman sakinlerini uyar ve binayı terk et.
- Binaya başkalarının girmesine engel ol.
- **Binanın dışında:** itfaiyeyi, polisi ve gaz dağıtım şirketini ara.

## Önce modeli öğren

Aynı Bosch logosunun altında iki ayrı kod düzeni var:

- **Rakamlı kodlar:** Condens 2300i W için Bosch'un listesi 227, 356, 1017, 2971, 2972. Condens 2200i W kullanma kılavuzu da arızayı ekranda **H sembolü** ve rakamlı bir kodla gösteriyor (kılavuzdaki örnek 214, montaj kılavuzundaki örnek 227).
- **Harfli kodlar:** Condens 2500 W, Comfort Condense, Condens 7000i W, Class, Classic ve Exclusive/Comfort serileri E9, CE, EA gibi harf ve rakamdan oluşan kodlar kullanıyor.

Kombinin model adı ve seri numarası, 2200i W kılavuzuna göre **kumanda paneli kapağındaki tip etiketinde** yazıyor. Servisi ararken de bu bilgiler istenecek.

## Condens 2300i W kodları (rakamlı)

| Kod | Bosch'un tanımı | Bosch'un çözümü |
|---|---|---|
| **227** | Alev algılanmıyor | Gaz vanasının açık olup olmadığını kontrol et ✅ |
| **1017** | Su basıncı çok düşük | Su basıncını kontrol et, gerekiyorsa öngörülen basınca kadar su ekle ✅ |
| **2971** | Çalışma basıncı çok düşük | Isıtma tesisatının havasını al; su basıncını kontrol et, gerekiyorsa su ekle ✅ |
| **356** | Isıtma cihazı için besleme gerilimi çok düşük | En az 196 VAC besleme gerilimi sağlanmalı 🔧 |
| **2972** | Şebeke gerilimi çok düşük | Doğru gerilim beslemesi sağlanmalı 🔧 |

✅ evde kontrol edilebilir · 🔧 yetkili servis. Gerilim kodlarında elektrik beslemesinin ölçülmesi ve düzeltilmesi kullanıcıya tarif edilmedi; burada servise bırakıldı.

## Harfli kodlar: model model hangi kod var

Bosch'un sayfası her modelin altında şu kodları listeliyor:

| Model | Listelenen kodlar |
|---|---|
| **Condens 7000i W** | 0Y-A1 · 9U · A8 · C1-C7 · D3-D5 · E2 · E9 · EA · F0 · FA · H11 |
| **Condens 2500 W** | A7 · A8 · b1 · b2/b3 · C6 · CC · CE · E2 · E9 · EA · F0 · F1 · FA · Fd |
| **Comfort Condense** | A8 · Ad · b1 · b2/b3 · C6 · CC · CE · E2 · E9 · EA · F0 · F1 · FA · Fd |
| **Class 2000 W** | A7 · C1 · C4 · C6 · C7 · CE · D7 · E2 · E9 · EA · FA · FD · I I |
| **Class 6000 W** | Class 2000 W ile aynı + P |
| **Classic Silver · ClassicPlus** | A7 · B1 · C1 · C6 · CE · E2 · E9 · EA |
| **Exclusive · Comfort** | A8 · A9 · AC · b1 · C1 · C4 · C6 · CC · d5 · d7 · E0/F0 · E2 · E9 · EA · FA · Fd |

## Harfli kodların anlamı

Bosch her kod için tek bir açıklama sayfası kullanıyor; aynı kod birden fazla modelde geçiyorsa aynı sayfaya bağlanıyor.

**Evde kontrol edilebilenler ✅**

| Kod | Bosch'un tanımı | Bosch'un çözümü |
|---|---|---|
| **CE** | Tesisat su basıncı düşük | Tesisat su basıncı 1,2 bar'a yükseltilmeli; yetkili servise başvur |
| **0Y-A1** | Tesisatla ilgili hata | Tesisat su basıncı 1,2 bar'a yükseltilmeli; yetkili servise başvur |
| **E9** | Kombi ateşleme yapmıyor (kaçak, açık kalan emniyet ventili, eşanjör ya da hidrolik grupta kaçak olabilir) | Önce su basıncına bak: 1 bar'ın altındaysa su basmak gerekebilir. Basınç normalken sürüyorsa servis |
| **EA** | Alev algılanmıyor | Gaz vanasını kontrol et, sonra su basıncına bak. İkisi de normalken sürüyorsa servis |
| **Fd / FD** | Reset butonuna uzun süre basılmış | Reset tuşuna 30 saniyeyi aşmayacak şekilde bas; sürüyorsa servis |

**Doğrudan yetkili servis 🔧**

| Kod | Bosch'un tanımı |
|---|---|
| **A7 · Ad · H11** | Boyler sıcaklık sensörü tanınmıyor |
| **A8** | BUS iletişiminde kesinti (termostat kablosu kontrol edilmeli) |
| **A9** | Kullanım suyu sensörü kontrol edilmeli |
| **AC** | Modül algılama hatası |
| **b1 · B1 · 9U** | Kod anahtarı algılanmıyor |
| **b2/b3 · D3-D5 · E0/F0 · F0 · F1** | Dahili hata |
| **C1** | Fan devir sayısı düşük (voltaj düşük olabilir, baca montajı kontrol edilmeli) |
| **C1-C7 · C7** | Fan çalışmıyor (voltaj düşük olabilir) |
| **C4** | Diferansiyel basınç kapalı durumdayken açılmıyor |
| **C6** | Hava akışında fan problemi; Bosch'a göre fan, prosestat ya da anakart kaynaklı olabilir ve kullanıcının yapabileceği bir işlem yok |
| **CC** | Dış hava sensörü algılanmıyor |
| **d5** | Harici sıcaklık sensörü arızalı |
| **d7 / D7** | Gaz grubu kontrol edilmeli |
| **E2** | Gidiş suyu sıcaklık sensörü arızalı |
| **FA** | Gaz kesildiği hâlde alev algılanmıyor (Bosch sayfasındaki ifade) |
| **I I** | Fan devir ayarı seçilmemiş |
| **P** | Cihaz tipi tanımlanmamış |

Sensör, kablo ve modül kodlarında Bosch'un sayfası "kontrol edin" diyor. Bu parçalar kombinin içinde ve elektrik bağlantısında durduğu için burada **servis işi** olarak verildi.

## Basınç düşükse: Bosch ne diyor

Basınç kodlarının (1017, 2971, CE, 0Y-A1 ve çoğu zaman E9) ortak çözümü su eklemek. Rakamlar Bosch'un belgelerinde iki farklı biçimde geçiyor:

- **Condens 2200i W kullanma kılavuzu:** işletme basıncı normal durumlarda **1 ila 2 bar** arasında olmalı. Isıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı; aşılırsa emniyet ventili açılır.
- **Bosch'un E9 ve EA sayfaları:** ideal aralık **1,2–1,5 bar**. CE sayfası basıncın **1,2 bar'a** yükseltilmesini söylüyor.

Bosch'un E9 sayfasına göre basıncı kombi paneli üzerindeki **yuvarlak basınç göstergesinden** okursun. Su eklemenin tarifi de iki belgede farklı:

- Bosch'un E9 ve EA sayfaları: kombinin altındaki **su takviye musluğunu saat yönünün tersine** çevir, basınç 1,2–1,5 bar'a gelince musluğu kapat.
- Condens 2200i W kılavuzu: doldurma işlemi **tesisata göre farklılık gösterir**, bu yüzden yetkili servisten nasıl yapıldığını göstermesini iste. Tesisatı **yalnız soğukken** doldur (gidiş suyu en fazla 40 °C). Sıcak kombiye soğuk su eklemek çatlağa yol açabilir.

Kendi kombinde musluğun yerini bilmiyorsan kılavuza bak ya da ilk servis ziyaretinde gösterilmesini iste. Basınç kısa sürede tekrar düşüyorsa sorun eklemekle çözülmez; E9 sayfasının saydığı kaçak ihtimalleri servis işidir. Basıncın arkasındaki mantık için: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) · [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/).

## Reset: iki yol ve bir sınır

Condens 2200i W kılavuzuna göre bazı arızalar kombiyi kapatır ve sıfırlanmadan tekrar çalışmaz. İki yol var:

1. Cihazı kapat ve tekrar çalıştır.
2. Ya da ekranda **H** ve **!** sembolleri kaybolana kadar kılavuzda gösterilen iki tuşu aynı anda basılı tut. Cihaz tekrar çalışır, ekranda gidiş suyu sıcaklığı görünür.

Harfli kod kullanan bazı modellerde (Condens 2500 W, Comfort Condense, Class, Exclusive ve Comfort listeleri) reset tuşuna uzun basmak da bir koda dönüşüyor: **Fd**. Bosch tuşa **30 saniyeyi aşmayacak şekilde** basılmasını istiyor.

## Ne zaman doğrudan servis

- Tablolarda yalnız 🔧 olan kodlarda.
- Gaz vanası açık ve basınç normal olduğu hâlde 227, EA ya da E9 sürüyorsa. Belirti tarafı için: [kombi yanmıyor](/blog/kombi-yanmiyor/).
- Basınç ekledikten sonra kısa sürede yine düşüyorsa.
- Reset sonrası kod geri geliyorsa.

Kılavuz, arıza giderilemediğinde servisi ya da müşteri hizmetlerini aramayı ve **gösterilen arıza kodunu ve cihaz bilgilerini** bildirmeyi istiyor. Başka markaların kodları için: [kombi arıza kodları](/blog/kombi-ariza-kodlari/).

## Servisi aramadan önce üç kontrol

1. Kombinin **modeli** tip etiketinden okundu mu?
2. Basınç soğukken normal aralıkta, **gaz vanası** açık mı?
3. Kılavuzdaki **reset** bir kez denendi mi?

Üçüne de "evet" diyorsan servise anlatacağın cümle hazır: "Bosch Condens 2500 W, ekranda EA; gaz vanası açık, basınç 1,5 bar, bir kez resetledim, kod geri geldi."

Kombinin koduna göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.

---

**Kaynak künyesi.** Bu yazıdaki kodlar ve alıntılar Bosch Termoteknik'in kendi belgelerinden alınmıştır: bosch-homecomfort.com/tr "Bosch Kombi Arıza Kodları ve Çözümleri" sayfası ve her kodun açıklama sayfası; **Condens 2200i W** Kullanma Kılavuzu (6721839341, 2023/04) ve Montaj Kılavuzu (6721839338, 2024/12). Kod listeleri modele ve belge sürümüne göre değişebilir; kendi kombinin kılavuzu farklı bir şey yazıyorsa **kendi kılavuzun esastır.**
