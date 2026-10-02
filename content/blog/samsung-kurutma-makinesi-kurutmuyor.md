---
title: "Samsung kurutma makinesi kurutmuyor"
description: "Samsung kurutma makinesi çamaşırı nemli bırakıyorsa Samsung'un sırası: su tankı, tiftik filtresi, ısı eşanjörü ve yük. Isı pompalı modeller için."
slug: "samsung-kurutma-makinesi-kurutmuyor"
date: "2026-10-02"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Samsung belirti koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından
#   (org.downloadcenter.samsung.com · www.samsung.com/tr) indirildi, HTTP 200. Kılavuz bağlantıları samsung.com/tr/support/model/<model>/ sayfalarından alındı.
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Yalnız Samsung Türkiye belgeleri.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-2eki/ (MD5.txt) · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  S) Kılavuz ısı pompalı kurutucu "SimpleUX" DC68-04268H-03 (AH) TR, 60 s., md5 7d07cd0444389e478b7625ea26e2134a  (model sayfaları DV90T5240AW/AH ve DV90T8240SE/AH aynı belgeyi veriyor)
#     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90T5240AW&CttFileID=8770643&CDCttType=UM&VPath=UM%2F202209%2F20220917120549513%2FU-PJT_DRYER_SimpleUX_DC68-04268H-03_AH_TR.pdf
#  D) Kılavuz DV5000T DC68-04209V-02 TR (model DV90TA040AE/AH), 68 s., md5 af744046e6c457b037ef2e270349d072
#     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90TA040AE&CttFileID=8770640&CDCttType=UM&VPath=UM%2F202209%2F20220917120230960%2FDV5000T_DC68-04209V-02_TR.pdf
#  H1) Samsung TR SSS "Kurutma makinemden kötü koku geldiğinde ne yapabilirim?" (son güncelleme 2024-05-30)
#      https://www.samsung.com/tr/support/home-appliances/how-can-i-install-and-clean-my-samsung-dryer/  md5 290c2b8925b5b04571a3a1c01e455036
#  H2) Samsung TR SSS ısı eşanjörü temizliği (2025-01-18)  https://www.samsung.com/tr/support/home-appliances/kurutma-makinemin-isi-esanjorunu-nasil-temizleyebilirim/  md5 9ef302676e041480780dfda9abc2c3a3
#  H3) Samsung TR SSS tiftik filtresi temizliği (2024-11-20)  https://www.samsung.com/tr/support/home-appliances/kurutma-makinemin-tiftik-filtresini-nasil-temizleyebilirim/  md5 d154da52192ea13148a332c6393a6da2
#  (H1-H3 dinamik HTML; md5 bu indirmenin)
# Belirti satırları:
#   S s.48 "Öğeler kurutulmuyor." → "Yukarıdakilerin tümünü kontrol edin. Bunlara ek olarak:" · "Kurutucuyu aşırı yüklemeyin. Kurutucu aşırı yüklenmişse, çamaşırların kuruması daha uzun sürebilir."
#     · "Ağır kumaşları hafif kumaşlardan ayrı olarak kurutun." · "Öğe(ler) çok küçük ve kazanın içinde yeterince dönmüyor olabilir." · "Filtreyi temizleyin." · "Isı eşanjörünü temizleyin."
#     · "Bir tahliye hortumu bağlıysa, suyun düzgün şekilde tahliye edildiğinden emin olun."
#   S s.48 "Kurutucu ısınmıyor." → "Sigortayı kontrol edin veya devre kesiciyi sıfırlayın." · "Tiftik filtresini ve ısı eşanjörünü kontrol edin. Gerekirse temizleyin." · "Kurutucu, programın soğuma sürecinde olabilir."
#   D s.50 "Kurutma makinesi kurutmuyor" → "Hafif ve ağır öğeleri ayrı ayrı sınıflandırın." · "Kuruturken bile büyük, hacimli öğeleri yeniden yerleştirin." · "Kurutma makinesinin düzgün boşalttığını kontrol edin."
#     · "Az yükler için birkaç kuru havlu ekleyin." · "Tiftik filtresini veya ısı değiştiriciyi temizleyin." · D s.50 "ısınmıyor": "HAVALANDIRMA dışında bir ısıtma ayarı seçin." · aşırı yükleme
#   D s.51 "yük kurumadan önce kapanıyor": yük çok az → öğe ekle; çok fazla → öğe çıkar · S s.49 "Kurutucu, çamaşırlar kurumadan kapanır." → "Yük çok az. Havlu gibi birkaç parça daha atın"
# Bakım: S s.27 ADIM 4 (aşırı yükleme; bir-iki parçaya kuru havlu; öğeleri çöz) + ADIM 5 (su tankını boşalt; "Isi esanjörünü temizleyin" mesajı; kapak ve ısı eşanjörü kapağını açık tut)
#   · S s.43 su tankı (her kullanımdan sonra; iki elle; tahliye deliği B; "Tanki bosaltin" mesajı) · D s.47 su tankı (her yükten sonra)
#   · S s.44 Temizleme UYARI "temizlemeden önce, güç kablosunu fişten çıkardığınızdan emin olun." · S s.44-45 tiftik filtresi 5 adım · S s.46 DİKKAT (her yükten sonra; ıslaksa tamamen kurusun; ıslak takmak küf/koku/daha az kuruma)
#   · S s.46-47 ısı eşanjörü 6 adım (dış kapak A; sabitleyiciler B; sağlanan fırça; nemli bez; çıplak el yok; kanatlar) · H2 "ayda en az bir kez" · H1 tiftik/ısı eşanjörü · H3 ıslak filtre
#   · S s.50-51 / D s.52 bilgi kodları: tC (tiftik filtresi/ısı değiştirici temizle), FIL+tEr (ısı eşanjörü), "Bosaltmayi kontrol et/Tanki bosaltin" (S), 5C (D: su tankı dolu) · S s.49 "Sorun devam ederse, yerel bir Samsung servis merkezine başvurun."
# BİLEREK YAZILMAYANLAR: ısı eşanjörüne su püskürtme (S s.47 notu "tamamen kuruysa biraz su püskürtün" diyor, H2 ve H1 "su kullanmayın" diyor → çelişki, yazılmadı)
#   · donmuş tahliye hortumunu ılık suya daldırıp yeniden bağlama (hortum sökme gerektiriyor) · kondansatör (H1'de yalnız DV80H4100 için) · sigorta değiştirme
#   · kompresör/sensör/PBA kodlarının (tC5, tCA, 3C, 3CA, AC6, HC) kullanıcı adımı · başka modellere genelleme.
# Alıntı denetim tablosu: samsung-kurutma-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makineyle gelen temizleme fırçası", "Nemli bez"]
steps:
  - "Kurutma makinesinin fişini prizden çek."
  - "Su tankını iki elinle çıkar, tahliye deliğinden boşalt ve yerine tak."
  - "Tiftik filtresini yukarı çekerek çıkar, iç ve dış filtreyi aç ve tiftiği fırçayla temizle."
  - "Filtreyi suyla yıkadıysan tamamen kurut, iç filtreyi dış filtreye koy ve yerine tak."
  - "Isı eşanjörünün dış kapağını açıp iç kapağın sabitleyicilerini çevir ve iç kapağı çıkar."
  - "Isı eşanjöründeki tozu makineyle gelen fırçayla, kanatlara zarar vermeden temizle."
  - "İç kapağı nemli bezle sil, yerine tak, sabitleyicileri kilitle ve dış kapağı kapat."
  - "Kurutucuyu aşırı yükleme; ağır kumaşları hafif kumaşlardan ayrı kurut."
faq:
  - q: "Samsung kurutma makinesi neden kurutmuyor?"
    a: "Samsung'un Türkçe kılavuzundaki 'Öğeler kurutulmuyor.' satırı önce 'ısınmıyor' satırındaki kontrollerin yapılmasını istiyor (sigorta ya da devre kesici, tiftik filtresi, ısı eşanjörü, soğuma süreci). Bunlara ek olarak aşırı yükleme, ağır ve hafif kumaşların birlikte kurutulması, kazanda yeterince dönmeyen çok küçük öğeler, kirli filtre ya da ısı eşanjörü ve tahliye hortumu bağlıysa suyun düzgün tahliye edilmemesi sayılıyor."
  - q: "Tiftik filtresini ne sıklıkla temizlemeliyim?"
    a: "Samsung her yükten sonra temizlenmesini istiyor; aksi hâlde kurutma performansı düşebilir. Filtreyi suyla yıkadıysan takmadan önce tamamen kurumasını bekle: Samsung'a göre ıslak filtre küf, koku ya da daha az kurumaya neden olabilir. Makineyi dış filtrenin içinde iç filtre olmadan çalıştırma."
  - q: "Isı eşanjörü ne zaman temizlenir?"
    a: "Samsung Türkiye'nin destek sayfası ayda en az bir kez öneriyor; sesli uyarı verildiğinde ve ısı eşanjörü gösterge ışığı yandığında da temizlenmeli. Kılavuza göre zamanı gelince ekranda 'Isi esanjörünü temizleyin' mesajı ya da FIL + tEr kodu çıkar. Isı eşanjörüne çıplak elle dokunma ve kanatlarını bükme."
  - q: "Kurutucu çamaşırlar kurumadan kapanıyor. Ne yapmalıyım?"
    a: "Samsung'un tablosuna göre yük çok az olabilir: havlu gibi birkaç parça daha ekleyip yeniden kurut. DV5000T kılavuzu yük çok fazlaysa öğe çıkarıp programı yeniden başlatmayı da söylüyor. Bir ya da iki parça kurutuyorsan Samsung kurutma verimini artırmak için çamaşıra kuru bir havlu eklemeni öneriyor."
images:
  coverAlt: "Kapağı açık ön yüklemeli kurutma makinesi; kapak ağzının yanında çıkarılmış tiftik filtresi ve küçük bir temizleme fırçası, alt köşede açılmış bakım kapağı"
---

Program bitti ama çamaşırlar hâlâ nemli, ya da kurutma her seferinde daha uzun sürüyor. Samsung'un ısı pompalı kurutucular için Türkçe kılavuzunda bu durumun satırı **"Öğeler kurutulmuyor."** Satırın ilk cümlesi dikkat çekici: **"Yukarıdakilerin tümünü kontrol edin."** Yani Samsung önce bir üstteki **"Kurutucu ısınmıyor."** satırını, sonra yükle ilgili maddeleri kontrol ettiriyor. İki satırda da aynı iki parça öne çıkıyor: **tiftik filtresi** ve **ısı eşanjörü.** Aşağıdaki sıra bu tabloyu ve kılavuzun bakım bölümünü izliyor. Kaynak DV90T5240AW / DV90T8240SE ve DV5000T (DV90TA040AE) kılavuzları; mesaj ve tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → su tankını boşalt → tiftik filtresini aç, temizle, kuru takıl → ısı eşanjörü kapağını aç, sağlanan fırçayla tozu al → iç kapağı silip kilitle → yükü hafiflet, ağır ve hafif kumaşı ayır. Ekranda **FIL + tEr** ya da "Isi esanjörünü temizleyin" görürsen sıra doğrudan ısı eşanjörü. Sorun sürerse Samsung servis merkezi.

## Önce ayarı ve sigortayı kontrol et

Samsung'un "ısınmıyor" satırı, "kurutmuyor" satırının ilk adımı. O satırdaki kontroller:

- **Sigortayı kontrol et ya da devre kesiciyi sıfırla.**
- DV5000T kılavuzuna göre **HAVALANDIRMA dışında bir ısıtma ayarı** seç.
- Kurutucu **programın soğuma sürecinde** olabilir; Samsung bunu da ısınmama sebepleri arasında sayıyor.

Isınma tarafının markadan bağımsız anlatımı için [kurutma makinesi ısıtmıyor](/blog/kurutma-makinesi-isitmiyor/) yazısına bakabilirsin.

## Adım adım: evde denenecekler

**1. Fişi çek.** Samsung'un temizlik bölümündeki uyarı: kurutma makinesini temizlemeden önce **güç kablosunu fişten çıkardığından** emin ol.

**2. Su tankını boşalt.** DV5000T tablosundaki maddelerden biri: **kurutma makinesinin düzgün boşalttığını kontrol et.** Samsung tankın **her kullanımdan sonra** boşaltılmasını istiyor. Tutamağı tank yarıya kadar çıkana dek bir elinle çek, sonra diğer elinle altından destekleyip **iki elinle** yavaşça çıkar; Samsung'un uyarısı açık: dolu tank ağırdır. Suyu **tahliye deliğinden** boşalt, tankı yerine yerleştir. Makinede tank yerine bir tahliye hortumu bağlıysa Samsung'un istediği **suyun düzgün tahliye edildiğinden** emin olmak; hortumda bükülme olup olmadığına bak.

**3. Tiftik filtresini temizle.** Kurutucunun kapağını aç, filtrenin üst kısmını tutup **yukarı çekerek** çıkar; Samsung filtreyi çıkardıktan sonra **lastik contanın çıkarılmamasını** istiyor. **Dış filtreyi aç, iç filtreyi çıkar,** iki filtreyi de aç ve tiftiği alıp **temizleme fırçasıyla** temizle. Filtreyi açarken zorlama: Samsung'a göre dikkatsizce ve aşırı güçle açmak filtreye zarar verebilir.

**4. Filtreyi kuru tak.** Samsung tiftiği aldıktan sonra filtrelerin **akan suda** temizlenebileceğini, ardından **iyice kurulanması** gerektiğini yazıyor. Uyarısı net: filtre ıslakken takılırsa **küf, koku ya da daha az kuruma** olabilir. İç filtreyi dış filtrenin içine koy ve tiftik filtresini yerine tak. Makineyi **iç filtre olmadan** çalıştırma.

**5. Isı eşanjörü kapağını aç.** Kılavuzun "Öğeler kurutulmuyor." satırındaki maddelerden biri: **ısı eşanjörünü temizle.** Dış kapağın **üst parçasına yavaşça bas**; kapak açılır. İç kapağın **sabitleyicilerini çevirerek** kilidini aç ve iç kapağı çekerek çıkar.

**6. Isı eşanjörünü fırçala.** Isı eşanjöründeki tozu **makineyle gelen fırçayla** temizle; Samsung Türkiye'nin destek sayfası **fırça ekli bir elektrikli süpürgeyi** de seçenek olarak veriyor. İki uyarı var: fiziksel yaralanma ve yanık riskine karşı ısı eşanjörüne **çıplak elle dokunma**, temizlerken **kanatçıkları bükme**; Samsung'a göre bu kurutma performansını düşürebilir.

**7. İç kapağı silip kilitle.** İç kapağı **düz, nemli bir bezle** sil; çevresinde nem ya da yabancı madde olabilir. İç kapağı yerine tak, **sabitleyicileri kilitle** ve tamamen kilitlendiğinden emin ol, sonra dış kapağı kapat. Kılavuza göre temizlikten sonra bildirim mesajını kapatmak için üzerine dokunman gerekir.

**8. Yükü ayarla.** Satırın kalan maddeleri yükle ilgili. Samsung'a göre **aşırı yüklenmiş** kurutucuda çamaşırların kuruması daha uzun sürebilir; **ağır kumaşları hafif kumaşlardan ayrı** kurut. Fişi tak ve programı yeniden başlat.

## Yükle ilgili Samsung notları

- **Çok küçük öğeler:** Samsung'a göre kazanın içinde yeterince dönmüyor olabilirler. Bir ya da iki parça için kurutma verimini artırmak amacıyla çamaşıra **kuru bir havlu** ekle; DV5000T kılavuzu az yükler için **birkaç kuru havlu** öneriyor.
- **Büyük, hacimli öğeler:** DV5000T'ye göre kurutma sürerken bile yeniden yerleştirilebilir.
- **Karışık parçalar:** Samsung öğeleri kurutucuya koymadan önce çözmeni istiyor; karışık parçalar kurutma verimini düşürebilir.
- **Bir seferde bir yük:** Kılavuzun yükleme adımına göre kurutucuya bir seferde bir çamaşır yükü konur.

## Ekrandaki mesajlar

| Mesaj / kod | Samsung'a göre anlamı | Kullanıcının yapacağı |
|---|---|---|
| FIL + tEr (zil çalar) ya da "Isi esanjörünü temizleyin" | Isı eşanjörünün temizlenmesi gerekiyor | Isı eşanjörünü temizle (adım 5-7) |
| tC | Hava sıcaklığı sensörü sorunu | Tiftik filtresini ve/veya ısı değiştiriciyi temizle; devam ederse servis |
| "Tanki bosaltin" / "Bosaltmayi kontrol et" | Su tankı dolu ya da boşaltma sorunu | Tankı boşalt, kurutucuyu açıp yeniden başlat; devam ederse servis |
| 5C (DV5000T) | Su tankı dolu / boşaltma pompası arızalı | Tankı boşalt, gücü açıp yeniden başlat; devam ederse servis |

Tiftik filtresi ve ısı eşanjörü temizliğinin markadan bağımsız anlatımı [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/), tank uyarısı için [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/), genel kontrol listesi için [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/) yazısında.

## Ne zaman servis

Su tankı, tiftik filtresi, ısı eşanjörü ve yük kullanıcıya aittir. Samsung'un kılavuzu tablonun altında açık: **sorun devam ederse yerel bir Samsung servis merkezine başvur.** Kompresör, sensör, motor ve kart kodlarında (tC5, tCA, 3C, 3CA, AC6, HC) Samsung'un verdiği kullanıcı adımı yalnız birkaç dakika beklemek, gücü yeniden açmak ya da programı yeniden başlatmak; kod sürerse servis. **HC (kompresör aşırı ısınması)** için tek talimat: **servisi ara.**

⛔ **Kendin-çöz sınırı burada biter.** Bakım kapakları dışında bir paneli açmak ya da parça sökmek kullanıcı işi değildir. Isı eşanjörü temizliğinden sonra uyarı kapanmıyorsa Samsung'un önerisi: fişi çekip yeniden tak ya da ısı eşanjörünün iç kapağını çıkarıp yeniden tak.

## Servisi aramadan önce iki dakikalık özet

1. Ekranda hangi mesaj ya da kod var?
2. Su tankı en son ne zaman boşaltıldı, ya da tahliye hortumu mu bağlı?
3. Tiftik filtresi her yükten sonra temizleniyor mu, takılırken kuru muydu?
4. Isı eşanjörü en son ne zaman temizlendi?
5. Kurutucuya ne kadar ve hangi tür çamaşır koydun?

Bu beşine cevabın varsa servise "kurutmuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
