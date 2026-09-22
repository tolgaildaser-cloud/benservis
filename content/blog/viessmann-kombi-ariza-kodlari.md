---
title: "Viessmann kombi arıza kodları"
description: "Viessmann Vitodens arıza kodları: kodun anlamı ve kombi duruyor mu, çalışmaya devam mı ediyor. Viessmann'ın kendi listesinden, servis sınırıyla."
slug: "viessmann-kombi-ariza-kodlari"
date: "2026-09-20"
category: "Kombi"
faq:
  - q: "Viessmann kombide hangi kodlar kombiyi durdurur?"
    a: "Viessmann'ın listesinde sistemin davranışı ayrı bir sütunda veriliyor. Brülörün kilitlendiği ya da arıza durumuna geçtiği kodlar şunlar: 30 · 38 · 1A · 1b · 1F · A3 · b0 · b7 · b8 · E3 · E4 · E5 · Eb · EC · Ed · F0 · F1 · F2 · F6 · F8 · FF. Bu kodlarda ısınma kesilir. Geri kalan kodların çoğunda Viessmann sistemin davranışını normal çalışma olarak veriyor, yani kombi çalışmaya devam eder."
  - q: "Viessmann kombide F1 ve F2 kodu ne demek?"
    a: "Viessmann'a göre F1 baca gazı sıcaklığının sınırı aştığını, F2 ise kazan suyu sıcaklık sensörünün yanıt verdiğini gösterir; ikisinde de brülör arıza durumuna geçer. Viessmann her ikisinde de ilk önlem olarak ısıtma sistemi dolum seviyesinin, yani su basıncının kontrol edilmesini ve sistemin havalandırılmasını istiyor. F2'de ayrıca sirkülasyon pompasının kontrolü isteniyor. Bu önlemleri Viessmann yetkili yüklenici işi olarak tanımlıyor; ev sahibinin yapabileceği tek şey manometredeki değeri okumaktır."
  - q: "Viessmann kombide ekranda kod var ama ev ısınıyor, sorun var mı?"
    a: "Olabilir ama acil olmayabilir. Viessmann listesinde 21 kodun sistem davranışı doğrudan normal çalışma olarak yazılı; bunların çoğu güneş kontrol modülü, uzaktan kumanda, LON ya da KM-BUS iletişim modülü gibi yan birimlerle ilgilidir. Bu kodlarda kombi ısıtmaya devam eder. Yine de kodu not edip servise bildirmek gerekir, çünkü ilgili özellik fiilen devre dışıdır."
  - q: "Bu kod listesi bütün Viessmann kombilerde geçerli mi?"
    a: "Hayır. Viessmann listenin kapsamını kendisi sınırlıyor: Vitotronic kontrol ünitesine sahip 200 ve 300 serisi duvar tipi gaz kazanları, yani Vitodens 200-W, 300-W, 222-W, 222-F ve 333-F. Viessmann ayrıca daha yeni modellerde kodların farklılık gösterebileceğini ve listenin eksiksiz olduğunun iddia edilmediğini yazıyor. Isı pompaları ve katı yakıtlı kazanların kendi kodları vardır. Modelini kombinin tip etiketinden doğrula."
  - q: "Viessmann arıza kodundaki önlemleri kendim uygulayabilir miyim?"
    a: "Viessmann uygulamamanı söylüyor. Sayfasında arıza kodlarının yalnızca yetkili bir yüklenici tarafından gerçekleştirilmesi gereken önlemleri gösterdiğini ve önlemleri kendi başınıza gerçekleştirmemenizi şiddetle tavsiye ettiğini yazıyor; gerekçe olarak hatalı çalışmanın hayati tehlikeye yol açabileceğini ve yasal garantinin geçersiz hâle gelebileceğini belirtiyor. Genel kural olarak da cihazın açılmamasını, muhafazaların çıkarılmamasını, ek parçaların değiştirilmemesini ve boru bağlantılarının açılıp sıkılmamasını istiyor."
  - q: "Viessmann kombide b0 ile b8 aynı şey mi?"
    a: "Hayır, ikisi de baca gazı sıcaklık sensörüyle ilgili ama farklı arızayı gösterir: Viessmann b0 için kısa devre, b8 için kablo kopması diyor. İkisinde de brülör kilitlenir ve önlem olarak baca gazı sıcaklık sensörünün kontrolü isteniyor. Listede büyük ve küçük harfler ayrı kodlardır; kodu ekranda gördüğün gibi not et."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin ön paneli; ekranında rakam okunmayan soyut bir gösterge, kombinin altında manometre kadranı ve göstergeye bakan bir el"
# --- Provenans (yayında görünmez) ---
# 2026-09-20 · Kaynak denetimi: blog-taslaklar/2026-09-20-viessmann-kombi-ariza-kodlari.KAYNAK.md
# Tek kaynak: Viessmann Türkiye'nin KENDİ sayfası (üreticinin kendi alan adı, YK #88):
#   https://www.viessmann.com.tr/tr/bilgi/bakim-ve-onarim/vitodens-200-w-300-w-hata-kodlari.html
#   HTTP 200 · 132.315 bayt · md5 a43eed5958a7af33b673a6414faee42e (dinamik sayfa; md5 indirme anına aittir)
#   Sayfadaki tek <table> programatik ayrıştırıldı: 71 kod satırı + 1 başlık satırı.
#   Sütunlar: "Görüntülenen arıza kodu" | "Sistem özellikleri" | "Arıza nedeni" | "Ölçü"
#   Gövdedeki üç tablo bu JSON'dan ÜRETİLDİ, elle kopyalanmadı.
# Web araması yalnız sayfanın YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan
# ya da üçüncü taraf siteden alınmadı. Vitopend 100-W PDF bağlantısı PDF değil HTML döndü → KULLANILMADI.
# Çeviri artefaktı düzeltmeleri (tam liste KAYNAK dosyasında):
#   "Kurşun kopması"/"Kurşun kırılması" -> "Kablo kopması"  (13 satır; İng. "lead break")
#   "DHW" -> "kullanım sıcak suyu" · "Silindir sıcaklık sensörü" -> "Boyler sıcaklık sensörü"
---

## Önce tek soru: kombi durdu mu, çalışmaya devam mı ediyor?

Viessmann'ın kendi arıza kodu listesinde kodun yanında çoğu kaynağın atladığı bir sütun var: **sistemin o kodla ne yaptığı**. Kod ekranda göründüğü anda bilmen gereken ilk şey bu — çünkü evin soğuyup soğumayacağını kodun kendisi değil, bu sütun söylüyor.

Listedeki **71 kodun 21'i brülörü durduruyor** (ısınma kesilir), **21'i ise "normal çalışma" diyor** — kombi çalışmaya devam eder, kod bir uyarıdır. Kalan 29 kod arada: bir özelliği kaybedersin ama kombi tamamen durmaz.

## Brülörü durduran kodlar — ısınma kesilir

Bu kodlarda kombi yanmayı durdurur. Evde ısınma ya da sıcak su yoksa listede önce buraya bak.

| Kod | Viessmann'ın arıza nedeni | Sistem ne yapıyor |
|---|---|---|
| **30** | Kısa devre, kazan suyu sıcaklık sensörü | Brülör kilitlendi |
| **38** | Kablo kopması, kazan suyu sıcaklık sensörü | Brülör kilitlendi |
| **1A** | Akış sensörü 1, sol (fiş 163) arızalı | Brülör kilitlendi |
| **1b** | Akış sensörü 2, sağ (soket 163A) arızalı | Brülör kilitlendi |
| **1F** | Diferansiyel akış hızı çok büyük | Brülör kilitlendi |
| **A3** | Baca gazı sıcaklık sensörü yanlış yerleştirilmiş | Brülör kilitlendi |
| **b0** | Kısa devre, baca gazı sıcaklık sensörü | Brülör kilitlendi |
| **b7** | Arıza, kazan kodlama kartı | Brülör kilitlendi |
| **b8** | Kablo kopması, baca gazı sıcaklık sensörü | Brülör kilitlendi |
| **E3** | Kalibrasyon sırasında ısı transferi çok düşük. Sıcaklık sınırlayıcı kapandı | Brülör arıza durumunda |
| **E4** | Arıza, 24 V besleme gerilimi | Brülör kilitlendi |
| **E5** | Alev amplifikatörü arızası | Brülör kilitlendi |
| **Eb** | Kalibrasyon sırasında tekrarlanan alev kaybı | Brülör arıza durumunda |
| **EC** | Kalibrasyon sırasında parametre hatası | Brülör arıza durumunda |
| **Ed** | Dahili arıza | Brülör arıza durumunda |
| **F0** | Dahili arıza | Brülör kilitlendi |
| **F1** | Baca gazı sıcaklığı sınırı aştı | Brülör arıza durumunda |
| **F2** | Kazan suyu sıcaklık sensörü yanıt verdi | Brülör arıza durumunda |
| **F6** | Kazan suyu sıcaklık sensörlerinin sıcaklık değerleri birbirinden çok farklı | Brülör arıza durumunda |
| **F8** | Yakıt valfi geç kapanıyor | Brülör arıza durumunda |
| **FF** | Dahili arıza veya sıfırlama düğmesi R bloke | Brülör tıkalı veya arıza durumunda |

**F1 ve F2'nin ortak ilk adımı dikkat çekici:** Viessmann ikisinde de önce *"ısıtma sistemi dolum seviyesini kontrol edin"* diyor — yani su basıncını. Bu, listedeki önlemler içinde ev sahibinin manometreye bakarak görebileceği tek şey. Basıncın ne olması gerektiğini [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında anlattık; basınç sürekli düşüyorsa [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) sayfasına bak.

## "Normal çalışma" diyen kodlar — kombi durmaz

Bu kodlarda ekranda bir arıza görürsün ama Viessmann sistemin davranışını **normal çalışma** olarak veriyor. Çoğu bir yan birimle (güneş modülü, uzaktan kumanda, iletişim modülü, genişleme kartı) ilgili. Panik gerektirmez; servise söylenecek bir not üretir.

| Kod | Viessmann'ın arıza nedeni |
|---|---|
| **90** | Kısa devre, sıcaklık sensörü |
| **91** | Kısa devre, sıcaklık sensörü |
| **93** | Kısa devre, kolektör dönüş sıcaklık sensörü |
| **98** | Kablo kopması, sıcaklık sensörü |
| **99** | Kablo kopması, sıcaklık sensörü |
| **9b** | Kablo kopması, kolektör dönüş sıcaklık sensörü |
| **9E** | Solar devrede akış yok veya akış hızı çok düşük veya sıcaklık sınırlayıcı yanıt verdi |
| **9F** | Güneş kontrol modülü veya Vitosolik arızası |
| **A4** | Maks. sistem basıncı aşıldı |
| **bF** | Yanlış LON iletişim modülü |
| **C1** | İletişim hatası, EA1 uzantısı |
| **C2** | İletişim hatası, solar kontrol modülü veya Vitosolic |
| **C3** | İletişim hatası, AM1 uzantısı |
| **C4** | İletişim hatası, OpenTherm uzantısı |
| **C5** | İletişim hatası, değişken hızlı pompa |
| **Cd** | İletişim hatası, Vitocom 100 (KM-BUS) |
| **CF** | İletişim hatası, LON iletişim modülü |
| **d6** | EA1 uzantısındaki DE1 girişi bir arıza bildirir |
| **d7** | EA1 uzantısındaki DE2 girişi bir arıza bildirir |
| **d8** | EA1 uzantısındaki DE3 girişi bir arıza bildirir |
| **E0** | Harici LON abone hatası |

**A4 bu grubun içinde ama ayrı durur:** Viessmann *"maks. sistem basıncı aşıldı"* diyor ve önlem olarak sistem basıncının kontrol edilmesini (üst sınır 6 bar) istiyor. Sistem çalışmaya devam etse de basınç tarafında gerçek bir şey olup bittiğini söyleyen tek "normal çalışma" kodu budur.

## Bir özelliği kaybettiren kodlar

Bu kodlarda kombi tamamen durmaz ama bir işlevi devre dışı kalır: oda sensörü okunmaz, karıştırıcı kapanır, boyler ısınmaz ya da dış hava sensörü 0 °C varsayılır. Ev ısınmaya devam edebilir, konfor düşer.

| Kod | Viessmann'ın arıza nedeni | Sistemin davranışı |
|---|---|---|
| **10** | Kısa devre, dış sıcaklık sensörü | Dış sıcaklık 0 °C'ymiş gibi ayarlanır |
| **18** | Kablo kopması, dış sıcaklık sensörü | Dış sıcaklık 0 °C'ymiş gibi ayarlanır |
| **19** | RF dış sıcaklık sensörü iletişiminin kesilmesi (RF dış sıcaklık sensörü, KM-BUS ile kablosuz baz istasyonu, kablosuz baz istasyonu veya kablosuz tekrarlayıcı hatalı veya arızalı) | Dış sıcaklık 0 °C'ymiş gibi ayarlanır |
| **20** | Kısa devre, sistem akış sıcaklık sensörü | Akış sıcaklık sensörü olmadan düzenler (düşük kayıplı başlık) |
| **28** | Kablo kopması, sistem akış sıcaklık sensörü | Akış sıcaklık sensörü olmadan düzenler (düşük kayıplı başlık) |
| **40** | Kısa devre, akış sıcaklık sensörü, ısıtma devresi 2 (karıştırıcı ile) | Mikser kapatılıyor |
| **44** | Kısa devre, akış sıcaklık sensörü, ısıtma devresi 3 (karıştırıcı ile) | Mikser kapatılıyor |
| **48** | Kısa devre, akış sıcaklık sensörü, ısıtma devresi 2 (karıştırıcı ile) | Mikser kapatılıyor |
| **50** | Kısa devre, boyler sıcaklık sensörü | Kazan tarafından kullanım sıcak suyu ısıtması yok |
| **58** | Kazan tarafından kullanım sıcak suyu ısıtması yok | kullanım sıcak suyu ısıtması yok |
| **92** | Kısa devre, kolektör sıcaklık sensörü | Güneş enerjili kullanım sıcak suyu ısıtması yok |
| **94** | Kısa devre, boyler sıcaklık sensörü | Güneş enerjili kullanım sıcak suyu ısıtması yok |
| **4C** | Kablo kopması, akış sıcaklık sensörü, ısıtma devresi 3 (mikser ile) | Mikser kapatılıyor |
| **9A** | Kablo kopması, kolektör sıcaklık sensörü | Güneş enerjili kullanım sıcak suyu ısıtması yok |
| **9C** | Kablo kopması, boyler sıcaklık sensörü | Güneş enerjili kullanım sıcak suyu ısıtması yok |
| **A7** | Programlama ünitesi arızalı | Teslimat koşullarına göre normal çalışma |
| **b1** | İletişim hatası, programlama ünitesi | Teslimat koşullarına göre normal çalışma |
| **b5** | Dahili arıza | Teslimat koşullarına göre normal çalışma |
| **bA** | İletişim hatası, ısıtma devresi 2 için uzatma kiti (mikser ile) | Karıştırıcı 20 °C akış sıcaklığına ayarlanır |
| **bb** | İletişim hatası, ısıtma devresi 3 için uzatma kiti (mikser ile) | Karıştırıcı 20 °C akış sıcaklığına ayarlanır |
| **bC** | İletişim hatası, Vitotrol uzaktan kumanda, ısıtma devresi 1 (mikser olmadan) | Uzaktan kumanda olmadan normal çalışma |
| **bd** | İletişim hatası, Vitotrol uzaktan kumanda, ısıtma devresi 2 (mikser ile) | Uzaktan kumanda olmadan normal çalışma |
| **bE** | İletişim hatası, Vitotrol uzaktan kumanda, ısıtma devresi 3 (mikser ile) | Uzaktan kumanda olmadan normal çalışma |
| **dA** | Kısa devre, oda sıcaklık sensörü, ısıtma devresi 1 (mikser olmadan) | Oda etkisi olmadan normal çalışma |
| **db** | Kısa devre, oda sıcaklık sensörü, ısıtma devresi 2 (mikser ile) | Oda etkisi olmadan normal çalışma |
| **dC** | Kısa devre, oda sıcaklık sensörü, ısıtma devresi 3 (mikser ile) | Oda etkisi olmadan normal çalışma |
| **dd** | Kablo kopması, oda sıcaklığı sensörü, ısıtma devresi 1 (karıştırıcı olmadan) | Oda etkisi olmadan normal çalışma |
| **dE** | Kablo kopması, oda sıcaklığı sensörü, ısıtma devresi 2 (karıştırıcılı) | Oda etkisi olmadan normal çalışma |
| **dF** | Kablo kopması, oda sıcaklığı sensörü, ısıtma devresi 3 (karıştırıcılı) | Oda etkisi olmadan normal çalışma |

## Bu liste hangi Viessmann kombiler için geçerli

Viessmann sayfanın kapsamını kendisi sınırlıyor. Liste, **Vitotronic kontrol ünitesine sahip 200 ve 300 serisi duvar tipi gaz kazanları** için geçerli: **Vitodens 200-W**, **Vitodens 300-W**, ayrıca **Vitodens 222-W**, **Vitodens 222-F** ve **Vitodens 333-F**.

Viessmann'ın kendi uyarıları, birebir kapsam sınırları:

- *"Daha yeni modeller için hata kodları farklılık gösterebilir."*
- Katı yakıtlı kazanlar, ısı pompaları ve diğer sistemlerin **kendi arıza kodları** vardır — bu liste onları kapsamaz.
- *"Aşağıdaki listenin eksiksiz olduğu iddia edilmemektedir ve sadece bir kılavuz olarak tasarlanmıştır."*

Yani ekranındaki kodu bu listede bulamamak tek başına bir anlam taşımaz. Modelini kombinin **tip etiketinden** doğrula; Viessmann kod aramak için parça/seri numarasını istiyor ve bunu kontrol ünitesinin tip etiketinde gösteriyor.

## Viessmann bu kodlarda ne YAPMAMANI söylüyor

Bu yazıda kendin-çöz adımı yok, çünkü üreticinin kendisi bu listede vermiyor. Viessmann sayfada şunu açıkça yazıyor: arıza kodları *"sadece yetkili bir yüklenici tarafından gerçekleştirilmesi gereken olası önlemleri"* gösterir ve *"önlemleri kendi başınıza gerçekleştirmemenizi şiddetle tavsiye ederiz"*.

Gerekçesi de sayfada: *"Isıtma sistemi üzerinde yanlış yapılan çalışmalar hayati tehlikeye yol açabilecek kazalara neden olabilir"* ve buna uyulmaması hâlinde **yasal garanti geçersiz hâle gelebilir**.

Viessmann'ın "genel bir kural olarak" başlığı altında saydığı dört madde:

- Cihazı açmayın
- Muhafazaları çıkarmayın
- Ek parçaları veya takılı aksesuarları değiştirmeyin veya çıkarmayın
- Boru bağlantılarını açmayın veya sıkmayın

Tablolardaki "sensörü değiştirin", "kontrol ünitesini değiştirin", "ısı eşanjörünü yıkayarak temizleyin" gibi önlemlerin tamamı bu yüzden **servis işi**. Biz de burada söküm ya da parça değişimi tarif etmiyoruz.

## Servisi ararken ne söylemelisin

Bu liste asıl işini telefonda görüyor. Servise verilecek üç bilgi, ilk ziyarette çözülme ihtimalini ciddi biçimde artırır:

1. **Ekrandaki kod** — büyük/küçük harf farkı dahil, gördüğün gibi. Listede `b0` ile `b8`, `dd` ile `dE` ayrı kodlar.
2. **Kombi çalışıyor mu, durdu mu** — yukarıdaki üç tablodan hangisine denk geldiği.
3. **Manometredeki basınç değeri** ve kombi soğukken mi sıcakken mi okuduğun.

Kombin ekranında kod yokken de arıza olabilir: [kombi yanmıyor](/blog/kombi-yanmiyor/), [petekler ısınmıyor](/blog/petekler-isinmiyor/) ve [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazıları koda bağlı olmayan belirtileri anlatıyor. Başka markadaysan [kombi arıza kodları](/blog/kombi-ariza-kodlari/) derlemesine bak.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
