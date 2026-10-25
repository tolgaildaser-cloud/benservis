---
title: "Kiwi ekmek yapma makinesi kullanımı: programlar ve tarif"
description: "Kiwi KMC-6956 ekmek yapma makinesi kullanımı, Kiwi kılavuzuna göre: ilk çalıştırma, malzeme sırası, 12 program, temel ekmek tarifi ve temizlik."
slug: "kiwi-ekmek-yapma-makinesi-kullanimi"
date: "2026-10-23"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme K3, çatal 1). Konu seçimi: origin/main'de Kiwi yazısı yok; "ekmek yapma" slug/başlık grep'i boş.
# Arama kanıtı (#164, bu koşuda Google TR otomatik tamamlama, hl=tr gl=tr), tohum "kiwi ekmek yapma makinesi":
#   1. "…kullanım kılavuzu" · 2. "…yedek parça" · 3. "…tarifleri" · 6. "…kullanım kılavuzu pdf". GSC: Kiwi satırı yok.
# Belge bu koşuda curl -sL -A "Mozilla/5.0" ile Kiwi'nin kendi alan adı static.kiwi.com.tr'den indirildi, HTTP 200 application/pdf.
#  (A) KMC-6956 Çok Fonksiyonlu Ekmek Yapma Makinesi kullanım kılavuzu, 28 s.  md5 6fd22bbbb85cb7e5b38259349ffb7201
#     TR: güvenlik s.14 · ilk kullanım, düğmeler, hafıza, uyarı ekranı s.15 · programlar s.16 · kullanım adımları, temizlik s.17 · tarifler s.18 (görüntüden okundu) · P12 s.19 · güvenlik s.23
# BİLEREK YAZILMAYANLAR: tarif tablosunda olmayan malzeme/değişiklik · EE0 için sensör sökümü ya da ölçümü · yedek parça kodu/bağlantısı · program süreleri (kılavuz vermiyor) · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: kiwi-ekmek-yapma-makinesi-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika hazırlık (program süresi hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin ölçü kabı ve ölçü kaşığı", "Fırın eldiveni", "Yapışmaz spatula", "Makinenin kancası", "Nemli bez"]
steps:
  - "İlk kullanımda parçaları temizle, makineyi pişirme modunda yaklaşık 10 dakika boş çalıştır ve soğut."
  - "Ekmek kalıbını yerine oturana kadar saat yönünde çevir, yoğurma bıçağını mile tak."
  - "Malzemeleri tarifteki sırayla koy: önce sıvı, sonra şeker, tuz ve un, en son maya."
  - "Unun bir yanında küçük bir çukur aç, mayayı sıvı ve tuza değmeyecek şekilde oraya koy."
  - "Kapağı kapat, fişi tak, Menü ile programı seç ve BAŞLAT/DURDUR'a bas."
  - "Bitiş sesinden sonra kalıbı fırın eldiveniyle saat yönünün tersine çevirip çıkar."
  - "Ekmeği kalıptan çıkar, yoğurma bıçağını kancayla al ve yaklaşık 20 dakika soğut."
  - "Fişi çekip makine soğuyunca kalıbı, bıçağı, kapağı ve gövdeyi temizle."
faq:
  - q: "Kiwi ekmek makinesi ilk çalıştırmada duman çıkarıyor, normal mi?"
    a: "KMC-6956 kılavuzuna göre cihaz ilk kez çalıştırıldığında biraz duman ve karakteristik bir koku yayabilir; bu normal ve kısa sürede geçer. Kiwi yeterli havalandırma olmasını ve ilk kullanımda makinenin pişirme modunda yaklaşık 10 dakika boş çalıştırılmasını istiyor."
  - q: "Ekranda HHH, LLL ya da EE0 yazıyor, ne demek?"
    a: "Kılavuza göre HHH iç sıcaklığın hâlâ çok yüksek olduğunu gösterir: programı durdur, kapağı aç, makineyi 10 ila 20 dakika soğut. LLL iç sıcaklığın çok düşük olduğunu gösterir (Fırınlama programı hariç): sesi durdur, kapağı aç, makineyi 10 ila 20 dakika oda sıcaklığına bırak. EE0 sıcaklık sensörü bağlantısının kesildiğini gösterir; sensörü yetkili bir uzmana kontrol ettir."
  - q: "Elektrik kesilirse ekmek yanar mı, program kaybolur mu?"
    a: "KMC-6956'nın hafıza özelliğine göre kesinti 10 dakikayı geçmezse işlem kendiliğinden devam eder. 10 dakikayı aşarsa hafıza korunmaz ve makine yeniden başlatılmalıdır. Kesinti hamur yoğurma aşamasını geçmeden olduysa BAŞLAT/DURDUR'a basarak programı baştan başlatabilirsin."
  - q: "Ekmek kalıbı ve yoğurma bıçağı bulaşık makinesinde yıkanır mı?"
    a: "Kılavuza göre hem ekmek tavası hem yoğurma bıçağı bulaşık makinesinde yıkanabilir parçalar. Tava yerine takılmadan önce tamamen kurumalı. Gövde ise temizlik için asla suya batırılmaz."
  - q: "Kiwi ekmek makinesi tarifleri nerede?"
    a: "KMC-6956 kılavuzunun Tarifler sayfalarında şu programların tarifleri var: Temel, Fransız, Hızlı, Tatlı, Hamur, Kek, Ayran, Yoğurma, Tam Buğday, Glutensiz ve Sandviç. P9 Pişirme programı için tarif gerekmiyor."
images:
  coverAlt: "Mutfak tezgâhında üst kapağı gözlem pencereli beyaz bir ekmek yapma makinesi ve yanında taze bir somun ekmek"
  steps:
    - "Çizim: solda ekmek yapma makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ekmek yapma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ekmek yapma makinesi, sağda tuz haznesinin vidalı kapağı"
    - "Çizim: solda ekmek yapma makinesi, sağda tuz haznesinin vidalı kapağı"
    - "Çizim: solda ekmek yapma makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ekmek yapma makinesi, sağda çalışma sesi"
    - "Çizim: solda ekmek yapma makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ekmek yapma makinesi, sağda prizden çekilen fiş"
---

Kiwi'nin **KMC-6956** çok fonksiyonlu ekmek yapma makinesi 12 programla çalışıyor ve kılavuzunda hazır tarifler var. Aramalarda en çok "kullanım kılavuzu" ve "tarifleri" soruluyor; bu yazı ikisini birden Kiwi'nin Türkçe kılavuzundan veriyor: ilk çalıştırma, malzeme sırası, programlar, temel ekmek tarifi, ekran uyarıları ve temizlik.

Makinenin ön panelinde iki düğme öne çıkıyor. **Menü** her basışta programı değiştirir; basılı tutulduğunda 12 menü sırayla gösterilir. **BAŞLAT/DURDUR** programı başlatır; program başladıktan sonra diğer tüm düğmeler devre dışı kalır.

> ⚡ **Kısa özet:** İlk kullanımda makineyi pişirme modunda yaklaşık 10 dakika boş çalıştır; biraz duman normal. Kalıbı saat yönünde oturt, bıçağı tak. Önce sıvı, sonra şeker, tuz, un; maya en son ve sıvıya değmeden. Menü ile programı seç, BAŞLAT/DURDUR'a bas. Bitince kalıbı eldivenle çıkar, bıçağı kancayla al, ekmeği yaklaşık 20 dakika soğut.

## Programlar

| No | Program | Kılavuzdaki açıklama |
|---|---|---|
| P1 | Temel | Normal ekmek yoğurma, mayalama ve pişirme |
| P2 | Fransız | Daha uzun mayalama; genellikle daha gevrek kabuk, hafif doku |
| P3 | Hızlı | Daha kısa sürede; ekmek genellikle daha küçük ve yoğun |
| P4 | Tatlı Ekmek | Tatlı ekmek yoğurma, mayalama, pişirme |
| P5 | Hamur | Yoğurma ve mayalama, pişirme yok; rulo, pizza gibi işler için |
| P6 | Kek | Kabartma tozu ya da soda ile |
| P7 | Ayranlı Ekmek | Tereyağı ve yoğurtla yapılan ekmek için |
| P8 | Yoğurma | Un yoğurma |
| P9 | Pişirme | Yalnız pişirme; süreyi uzatmak için de kullanılır |
| P10 | Tam Buğday | Geciktirme fonksiyonu tavsiye edilmiyor |
| P11 | Glutensiz | Glutensiz ekmek |
| P12 | Sandviç | Daha ince kabuklu, hafif dokulu ekmek |

## Kılavuzdaki temel ekmek tarifi (P1, 900 g)

| Malzeme | Ölçü | Gram |
|---|---|---|
| Su | 300 ml | 300 g |
| Yağ | 3 yemek kaşığı | 36 g |
| Tuz | 1,5 çay kaşığı | 5 g |
| Şeker | 3 yemek kaşığı | 36 g |
| Un | 3 1/2 su bardağı | 490 g |
| Maya | 1 çay kaşığı | 4 g |

Diğer programların tarifleri kılavuzun Tarifler sayfasında aynı düzenle yer alıyor.

## Adım adım: ilk ekmeğin

**1. İlk çalıştırma.** Makineyi ambalajından çıkar, parçaların eksiksiz ve hasarsız olduğunu kontrol et ve hepsini temizle. Makineyi pişirme moduna ayarlayıp yaklaşık 10 dakika boş çalıştır, soğumaya bırak, parçaları yeniden temizle ve kurula. Kılavuza göre ilk çalıştırmadaki biraz duman ve koku normal; ortamın havalandırıldığından emin ol.

**2. Kalıbı ve bıçağı tak.** Ekmek kalıbını yerine yerleştir ve doğru konumda oturana kadar saat yönünde çevir. Yoğurma bıçağını tahrik miline tak. Kiwi, bıçağı takmadan önce deliklerin ısıya dayanıklı margarinle doldurulmasını öneriyor; böylece hamur bıçağın altına yapışmaz ve bıçak ekmekten kolay çıkar.

**3. Malzemeleri sırayla koy.** Tarifteki sıraya uy. Kılavuzun genel kuralı: önce su ya da sıvı, ardından şeker, tuz ve un; maya ya da kabartma tozu her zaman en son.

**4. Mayaya yer aç.** Unun bir tarafında küçük bir çukur aç ve mayayı oraya koy. Mayanın sıvı malzemelere ya da tuza değmemesine dikkat et.

**5. Programı başlat.** Kapağı yavaşça kapat, fişi tak. Menü düğmesine istediğin program gelene kadar bas, sonra BAŞLAT/DURDUR'a bas; çalışma ışığı yanar. Birçok programda çalışma sırasında 10 kez bip duyarsın: bu, ek malzeme ekleme zamanı. Pişirirken kapaktaki yarıklardan buhar çıkması normal.

**6. Kalıbı çıkar.** İşlem bitince 10 bip duyulur ve çalışma ışığı söner. BAŞLAT/DURDUR'a yaklaşık 2 saniye basarak programı kapat. Kapağı aç, fırın eldiveniyle kalıbın sapını sıkıca kavra, kalıbı saat yönünün tersine çevir ve yavaşça yukarı çekerek çıkar. Kalıp ve ekmek çok sıcak olabilir.

**7. Ekmeği çıkar ve soğut.** Yapışmaz spatulayla ekmeğin kenarlarını kalıptan ayır, kalıbı temiz bir yüzeye ters çevirip hafifçe salla. Ekmeğin altında kalan yoğurma bıçağını kancayla çıkar; ekmek sıcakken bıçağı asla elle çıkarma. Dilimlemeden önce yaklaşık 20 dakika soğut. Düğmeye basmazsan makine ekmeği 1 saat boyunca sıcak tutar.

**8. Temizle.** Fişi çek ve makinenin soğumasını bekle. Kalıbın içini ve dışını nemli bezle sil; yapışmaz kaplama için keskin ya da aşındırıcı madde kullanma. Bıçak milden zor çıkıyorsa kalıbı ılık suyla doldurup yaklaşık 30 dakika beklet. Kalıp ve bıçak bulaşık makinesinde yıkanabilir. Kapağı ve pencereyi hafif nemli, gövdeyi ıslak bezle sil; gövdeyi asla suya batırma.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| HHH ya da LLL | Senin; kapağı aç, 10 ila 20 dakika bekle |
| Ekmek boyu değişiyor | Senin; oda sıcaklığı 15°C ile 34°C arasında olmalı |
| EE0 | Sensör bağlantısı; yetkili bir uzman kontrol etmeli |
| Kablo hasarlı, makine düzgün çalışmıyor | Kullanma; yetkili servis |

⛔ Makineyi havlu ya da başka bir malzemeyle örtme, içine metal folyo koyma; kılavuz bunların yangın ve kısa devre riski taşıdığını yazıyor.

Kapalı cihazın tüketimi için [cihazlar bekleme modunda elektrik harcar mı](/blog/cihazlar-bekleme-modunda-elektrik-harcar-mi/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Programlar, kullanım adımları, temel ekmek tarifi, ekran uyarıları, hafıza özelliği ve temizlik talimatı Kiwi'nin KMC-6956 Çok Fonksiyonlu Ekmek Yapma Makinesi Türkçe kullanım kılavuzundan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
