---
title: "Samsung kurutma makinesi hata kodları: dC, 5C, tC, FIL tEr"
description: "Samsung kurutma makinesinde dC, 5C, tC, tC5, 3C, AC6, HC ve FIL tEr kılavuza göre ne demek; hangisini evde çözersin, hangisinde servis gerekir."
slug: "samsung-kurutma-makinesi-hata-kodlari"
date: "2026-10-23"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork B). Konu seçimi: origin/main'de samsung-kurutma-makinesi-hata-kodlari yok
#   (Samsung kurutmada yalnız -calismiyor, -kokuyor, -kurutmuyor, -ses-yapiyor; genel kurutma-makinesi-hata-kodlari marka bağımsız ve Samsung kodu içermiyor).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) dışa aktarımlarında "samsung kurutma" + "hata/kod" satırı YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "samsung kurutma makinesi hata": 1. "…hata kodları" · 2. "…hata veriyor"
#   · 3. "…hataları" · 4. "…hatası" · 5. "…dc hatası" · 6. "…fl hatası".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adı org.downloadcenter.samsung.com'dan yeniden indirildi: ikisi de HTTP 200 application/pdf,
#   md5 yerel kopyalarla (kaynak-samsung-2eki/MD5.txt) aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  (D) Samsung DV5000T kurutma makinesi kullanım kılavuzu DC68-04209V-02 TR (model DV90TA040AE/AH), 68 s.  md5 af744046e6c457b037ef2e270349d072
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90TA040AE&CttFileID=8770640&CDCttType=UM&VPath=UM%2F202209%2F20220917120230960%2FDV5000T_DC68-04209V-02_TR.pdf
#  (S) Samsung ısı pompalı kurutucu "SimpleUX" kullanım kılavuzu DC68-04268H-03 (AH) TR (DV90T5240AW/AH, DV90T8240SE/AH), 60 s.  md5 7d07cd0444389e478b7625ea26e2134a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90T5240AW&CttFileID=8770643&CDCttType=UM&VPath=UM%2F202209%2F20220917120549513%2FU-PJT_DRYER_SimpleUX_DC68-04268H-03_AH_TR.pdf
# Kod tablosu D s.52 · S s.50-51 (S kodların bir kısmını yazıyla gösteriyor: "Kapak açik", "Bosaltmayi kontrol et/Tanki bosaltin", "Filtreyi kontrol edin", "Isi esanjörü kapagini kontrol edin")
#   · su tankı D s.47, S s.43 · tiftik filtresi D s.44-46, S s.44-46 · ısı eşanjörü D s.48-49, S s.46-47 · temizlikten önce fiş D s.44, S s.44 · çocuk kilidi S s.50 · duman/yanık kokusu D s.13.
# BİLEREK YAZILMAYANLAR: tC5/3C/AC6/HC için yeniden başlatma dışında kullanıcı adımı (kompresör, motor, PBA = yetkili servis) · tCA/3CA'nın D modelinde olduğu iddiası (yalnız S'de)
#   · ısı eşanjörüne su (D ve Samsung SSS "su kullanmayın", S s.47 notu farklı → yazılmadı) · donmuş hortumu söküp yeniden bağlama · başka modellere genelleme · fiyat/süre (#46).
# Alıntı denetim tablosu: samsung-kurutma-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makineyle gelen temizleme fırçası", "Nemli bez", "Kurutma makinesinin kullanım kılavuzu"]
steps:
  - "Ekrandaki kodu ve makinenin modelini not et; kodun anlamına kılavuzun bilgi kodları tablosundan bak."
  - "dC ya da Kapak açık mesajı görürsen kapağı tamamen kapat ve programı yeniden başlat; çocuk kilidinin açık olup olmadığına bak."
  - "5C ya da Tankı boşaltın mesajı görürsen su tankını iki elinle çıkar, boşalt, yerine tak ve programı yeniden başlat."
  - "tC görürsen fişi çek, tiftik filtresini ve ısı eşanjörünü temizle, sonra programı yeniden başlat."
  - "FIL tEr uyarısında ısı eşanjörünü makineyle gelen fırçayla temizle, iç kapağın sabitleyicilerini kilitle ve dış kapağı kapat."
  - "tC5, 3C ya da AC6 görürsen birkaç dakika bekle, makineyi kapatıp aç ve programı yeniden başlat."
  - "HC görürsen ya da başka bir kod yeniden başlatmaya rağmen sürüyorsa Samsung yetkili servisini ara."
faq:
  - q: "Samsung kurutma makinesinde dC ne demek?"
    a: "Samsung'un DV5000T kılavuzuna göre dC, kurutma makinesinin kapağı açık durumdayken çalıştırılmak istendiği anlamına geliyor. Talimat kapağı kapatıp programı yeniden başlatmak; sürerse servisi aramak. SimpleUX ekranlı modeller aynı durumu 'Kapak açik' yazısıyla gösteriyor ve Çocuk Kilidi açıkken kapağı açtığında da bu mesajın çıkabileceğini belirtiyor."
  - q: "5C hatası su tankıyla mı ilgili?"
    a: "Evet. DV5000T tablosunda 5C 'Su tankı dolu' ya da 'Boşaltma pompası arızalı' olarak geçiyor. Önce su tankını boşaltıp makineyi açarak programı yeniden başlatıyorsun. Samsung tankın her yükten sonra boşaltılmasını istiyor. Tank boşken kod sürüyorsa iş servise kalıyor."
  - q: "FIL tEr bir arıza mı?"
    a: "Hayır, bir bakım uyarısı. Zille birlikte çıkar ve ısı eşanjörünün temizlenmesi gerektiğini söyler. Samsung ısı eşanjörünü ayda en az bir kez ya da bu uyarı geldiğinde temizlemeni istiyor; makineyle gelen fırça ya da fırça uçlu elektrikli süpürge kullanılıyor."
  - q: "tC görünce ne yapmalıyım?"
    a: "Kılavuza göre tC hava sıcaklığı sensörü sorunu. Samsung'un önerdiği ilk iş tiftik filtresini ve ısı eşanjörünü temizlemek. Temizlikten önce fişi çek. Temizledikten sonra kod geri geliyorsa servisi ara."
  - q: "HC hatasında makineyi kendim çalıştırmaya devam edebilir miyim?"
    a: "Samsung HC için tek bir talimat veriyor: servisi arayın. HC kompresörün aşırı ısındığını gösteriyor ve kullanıcının yapacağı bir kontrol tabloda yer almıyor."
images:
  coverAlt: "Çamaşır odasında beyaz bir kurutma makinesinin ekranında görünen kısa bir bilgi kodu"
  steps:
    - "Çizim: solda kurutma makinesi, sağda kullanım kılavuzu ve tablosu"
    - "Çizim: solda kurutma makinesi, sağda kapak"
    - "Çizim: solda kurutma makinesi, sağda su ya da toz haznesi"
    - "Çizim: solda kurutma makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda kurutma makinesi, sağda temizlik fırçası"
    - "Çizim: solda kurutma makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda kurutma makinesi, sağda telefon ve kullanım kılavuzu"
---

Kurutma makinesi durdu ve ekranda iki harfli bir kod belirdi. Samsung bunlara "bilgi kodu" diyor: makine çalışamadığında neden durduğunu bu kodla söylüyor. Kodların bir kısmı senin çözebileceğin şeyler (kapak, su tankı, filtre), bir kısmı ise doğrudan servis işi. Bu yazıda Samsung'un iki Türkçe kılavuzundaki kod tablolarını tek yerde topladık: DV5000T serisi ve ısı pompalı SimpleUX ekranlı modeller. Senin modelinde kodlar farklı yazılabilir; SimpleUX ekranlı makineler bazı durumları kod yerine yazıyla gösteriyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** dC kapak, 5C su tankı, tC filtre ve ısı eşanjörü, FIL tEr ısı eşanjörü temizliği demek; bunları sen halledersin. tC5, 3C ve AC6'da yeniden başlatmayı denersin. HC'de ve tekrar eden her kodda Samsung yetkili servisi.

## Kodlar ne söylüyor

| Kod | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **dC** / "Kapak açik" | Kapak açık durumdayken çalıştırılmak isteniyor | 🛠️ Kapağı kapat, yeniden başlat |
| **5C** / "Tanki bosaltin" | Su tankı dolu ya da boşaltma pompası arızalı | 🛠️ Tankı boşalt; sürerse servis |
| **tC** | Hava sıcaklığı sensörü sorunu | 🛠️ Filtre ve ısı eşanjörü; sürerse servis |
| **FIL tEr** (zil) | Isı eşanjörünün temizlenmesi gerekiyor | 🛠️ Isı eşanjörünü temizle |
| **tC5** | Kompresör sıcaklığı sensörü sorunu | ⏳ Birkaç dakika bekle, yeniden başlat |
| **3C** | Motorun çalışması kontrol edilmeli | ⏳ Programı yeniden başlat; sürerse servis |
| **AC6** | Ana ve inverter kartları arasında iletişim sorunu | ⏳ Kapat-aç, yeniden başlat; sürerse servis |
| **HC** | Kompresör aşırı ısınması | 🔧 Servis |

## Adım adım: kodu gördüğünde

**1. Kodu ve modeli not et.** Samsung'un tablosu kodun kendisine göre ilerliyor; ekrandaki ifadeyi olduğu gibi yaz. SimpleUX ekranlı modeller kapak, su tankı ve filtre sorunlarını kısa Türkçe mesajlarla gösteriyor ("Kapak açik", "Filtreyi kontrol edin", "Isi esanjörü kapagini kontrol edin"). Model adı makinenin üzerindeki etikette yazar; servisi aradığında ilk sorulan şey de bu.

**2. dC ya da "Kapak açik".** Makine kapağın açık olduğunu düşünüyor. Kılavuzun talimatı kısa: **kapağı kapat ve yeniden başlat**, sürerse servisi ara. SimpleUX kılavuzu bir ayrıntı ekliyor: Çocuk Kilidi açıksa, makine çalışmıyorken bile kapağı açtığında bu mesaj gelebilir.

**3. 5C ya da "Tanki bosaltin".** Kılavuz önce su tankının dolu olabileceğini söylüyor. Tankı **iki elinle** çıkar; Samsung dolu tankın ağır olduğunu, düşürürsen yaralanabileceğini hatırlatıyor. Suyu boşaltma deliğinden dök, tankı yerine tak, makineyi aç ve programı yeniden başlat. Samsung sızıntıyı önlemek için tankın **her yükten sonra** boşaltılmasını istiyor. Makineye tahliye hortumu bağlıysa SimpleUX kılavuzu hortumun bükülmemiş olduğuna da bakmanı söylüyor. Tank boşken kod sürüyorsa, tablodaki ikinci olasılık boşaltma pompası; o servis işi.

**4. tC: önce temizlik.** Hava sıcaklığı sensörü sorununda Samsung'un ilk önerisi **tiftik filtresini ve ısı eşanjörünü temizlemek**. Temizlikten önce fişi çek; kılavuz bunu açıkça istiyor. Tiftik filtresi kapak ağzından yukarı çekilerek çıkıyor; dış filtreyi açıp iç filtreyi alıyorsun, tiftiği fırçayla temizliyorsun. Islak filtreyi takma: Samsung'a göre ıslak filtre küf, koku ve daha zayıf kurutma demek. Genel bakım mantığı [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazısında.

**5. FIL tEr: ısı eşanjörü zamanı.** Bu bir arıza değil, zilli bir bakım uyarısı. Dış kapağın üst kısmına bastırıp aç, sabitleyicilerin kilidini çevir, iç kapağı çıkar. Isı eşanjörünü makineyle gelen fırçayla ya da fırça uçlu bir elektrikli süpürgeyle temizle; kanatları bükme. Samsung çıplak elle dokunmamanı istiyor ve DV5000T kılavuzu ile Samsung destek sayfası su kullanmamanı söylüyor. İç kapağı nemli bezle sil, yerine tak, sabitleyicileri kilitle. SimpleUX'te temizlikten sonra mesaja dokunarak bildirimi kapatıyorsun.

**6. tC5, 3C ve AC6: yeniden başlat.** Bu üç kodda kullanıcıya düşen iş yalnız yeniden başlatma. tC5 için kılavuz **iki üç dakika beklemeni**, sonra gücü açıp yeniden başlatmanı söylüyor. AC6'da makineyi kapatıp açıyor ve programı yeniden başlatıyorsun; Samsung bu kodda makinenin duruma göre kendiliğinden normale dönebileceğini de yazıyor. 3C'de programı yeniden başlatmayı dene. Kod geri gelirse durmak gerekiyor.

**7. HC ya da geri gelen kod: servis.** HC, kompresörün aşırı ısındığını gösteriyor ve tablodaki tek talimat "Servisi arayın". Samsung'un genel kuralı da aynı: listede olmayan bir kod çıkarsa ya da bir kod görünmeye devam ederse servisi ara.

## Ne zaman servis

- HC göründüğünde, doğrudan
- Tank boşken 5C sürüyorsa (pompa olasılığı)
- tC filtre ve ısı eşanjörü temizlendikten sonra geri geliyorsa
- tC5, 3C ya da AC6 yeniden başlatmaya rağmen tekrar ediyorsa
- Kılavuzun genel uyarısı: makineden garip ses, yanık kokusu ya da duman gelirse gücü hemen kapat ve servisi ara

⛔ **Kendin-çöz sınırı burada biter.** Kapak, su tankı, tiftik filtresi ve ısı eşanjörü sende; kompresör, motor, sensörler, kartlar ve boşaltma pompası Samsung yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (DV5000T, SimpleUX ekranlı ya da başka)?
2. Ekranda tam olarak hangi kod ya da mesaj var?
3. Kod hangi aşamada çıktı: başlarken mi, kurutma sırasında mı?
4. Su tankını boşalttın, filtreyi ve ısı eşanjörünü temizledin mi?
5. Yeniden başlatınca kod geri geldi mi?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Makine hiç çalışmıyorsa [Samsung kurutma makinesi çalışmıyor](/blog/samsung-kurutma-makinesi-calismiyor/), çamaşırı nemli bırakıyorsa [Samsung kurutma makinesi kurutmuyor](/blog/samsung-kurutma-makinesi-kurutmuyor/) yazısına bak; marka bağımsız tablo [kurutma makinesi hata kodları](/blog/kurutma-makinesi-hata-kodlari/) sayfasında. Bil, gör, çağır.
