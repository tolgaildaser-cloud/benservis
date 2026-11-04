---
title: "Kurutma makinesi nasıl çalışır? Yoğuşmalı ve ısı pompalı"
description: "Kurutma makinesi nasıl çalışır? Arçelik ve Samsung kılavuzlarına göre sıcak hava, nem sensörü, yoğuşma, su tankı ve ısı pompalı makinenin farkı."
slug: "kurutma-makinesi-nasil-calisir"
date: "2026-11-05"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-11-04 Çar PAZ alt ajanı (YK #197 boşluk yazısı; BOSLUK.md "2 Kas 2026" #260 [KU, öncelik O] "kurutma makinesi nasıl çalışır (havalandırmalı / yoğuşmalı / ısı pompalı)"). Y satırlarının hepsi ⚠/gaz/şofben ya da önceki koşularda alındı ya da belge yok; O sırasında #256, #258, #259 ⚠ belge, #257 rezistans (servis parçası) atlandı. Slug origin/main content/blog/'da yok (4 Kas fetch, 1.299 dosya). Yakın yazılar: kurutma-makinesi-nasil-kullanilir (adım adım kullanım), kurutma-makinesi-filtre-ve-kondenser-temizligi, kurutma-makinesi-kurutmuyor, kurutma-makinesi-su-tanki-dolu-uyarisi. Bu yazı çalışma mantığını ve iki sistemin farkını anlatır; kurulum ve ilk kullanım yazısıyla çakışmaz.
# Konu kanıtı: Google otomatik tamamlama 2 Kas 2026 (BOSLUK.md #260): "kurutma makinesi nasıl" #2, "kurutma makinesi n" #3. GSC kanıt sayılmadı.
# Belgeler (#88), hepsi düz curl -sL (özel başlık yok), HTTP 200; ham dosyalar _kaynak/kurutma-makinesi-nasil-calisir/:
#  (A) Arçelik 2772 KT / 2772 KTS / 2772 KTİ çamaşır kurutma makinesi kullanma kılavuzu (32 s.), md5 af5f6e8ada2c00d238838e438d29edb3 — PDF s.16, 17, 19, 22, 24, 25, 26 https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201801031501235_User%20Manual%20-%20Filetr_TR.pdf
#  (S) Samsung DV5000T (DC68-04209V-02) kurutma makinesi kullanıcı kılavuzu TR (68 s.), md5 af744046e6c457b037ef2e270349d072 — PDF s.12, 39, 44, 46, 47, 48, 49, 50 https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90TA040AE&CttFileID=8770640&CDCttType=UM&VPath=UM%2F202209%2F20220917120230960%2FDV5000T_DC68-04209V-02_TR.pdf
#  (F) Samsung Türkiye kurutma makinesi SSS destek sayfası https://www.samsung.com/tr/home-appliances/faq-dryer/ (Kondansatörlü ve ısı pompalı fark sorusu)
#  Elendi: yok.
# BİLEREK YAZILMAYANLAR: kurulum, tahliye hortumu, elektrik bağlantısı (servis) · program süresi ve kWh değerleri (modele göre değişir) · ısı pompası iç yapısı (kılavuzlarda yok) · Samsung AI Dry+ ve SmartThings (reklam dili) · fiyat (#46).
# Alıntı denetimi: kurutma-makinesi-nasil-calisir.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika hazırlık (kurutma süresi hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kurutma makinesinin kullanma kılavuzu"]
steps:
  - "Çamaşırın bakım etiketine bak; yalnız kurutma makinesinde kurutulabilir yazanları ayır."
  - "Tiftik filtresini çıkar, tüyleri temizle ve yerine tak."
  - "Su tankını çıkar, boşalt ve yerine yerleştir."
  - "Çamaşırı sıkıştırmadan yerleştir ve kapağı tam kapat."
  - "Makineyi aç ve çamaşırın türüne uygun programı seç."
  - "Başlat tuşuyla programı başlat."
  - "Program bitince kapağı aç, çamaşırı çıkar ve makineyi kapat."
faq:
  - q: "Kurutma makinesi çamaşırı nasıl kurutur?"
    a: "Arçelik 2772 KT kılavuzuna göre makine çamaşırdan nemi sıcak havayla alır, nemli havayı yoğuşturucuda soğutarak suya çevirir ve suyu su tankına pompalar. Samsung ısı pompalı makinede sıcak havanın düşük sıcaklıkta geri dönüştürüldüğünü yazıyor."
  - q: "Kurutma makinesi çamaşırın kuru olduğunu nasıl anlar?"
    a: "Arçelik 2772 KT kılavuzuna göre makinenin içinde çamaşırın kuru olup olmadığını algılayan nem sensörleri var. Arçelik sensör metallerinin yılda 4 kez temizlenmesini istiyor."
  - q: "Yoğuşmalı ve ısı pompalı kurutma makinesi arasındaki fark nedir?"
    a: "Samsung'a göre kondansatörlü makine havayı ısıtır ve nemi bir tankta toplar ya da boşaltır. Isı pompalı makine sıcak havayı düşük sıcaklıkta geri dönüştürür ve genellikle daha az enerji kullanır."
  - q: "Kurutma makinesinin suyunu içebilir miyim?"
    a: "Hayır. Arçelik yoğuşturulan suyun içme suyu olmadığını, Samsung yoğunlaşmış suyun içilmemesi gerektiğini yazıyor."
images:
  coverAlt: "Önden yuvarlak kapaklı sade kurutma makinesi çizimi"
  steps:
    - "Çamaşırın bakım etiketine bakan beyaz eldivenli sade siluet el çizimi"
    - "Kurutma makinesi, ok ve çıkarılmış filtreye uzanan beyaz eldivenli sade siluet el çizimi"
    - "Kurutma makinesi, çıkarılmış su tankı ve lavaboyu gösteren ok, tankı tutan beyaz eldivenli sade siluet el çizimi"
    - "Kurutma makinesinin tamburuna çamaşır yerleştiren beyaz eldivenli sade siluet el çizimi"
    - "Kurutma makinesinin program düğmesini çeviren beyaz eldivenli sade siluet el çizimi"
    - "Kurutma makinesinin başlat tuşuna basan beyaz eldivenli sade siluet el çizimi"
    - "Kurutma makinesinin açık kapağından çamaşırı çıkaran beyaz eldivenli sade siluet el çizimi"
---

Kurutma makinesi tambura sıcak hava verir; bu hava çamaşırdaki nemi alır ve makine nemi suya çevirip su tankında toplar. Arçelik 2772 KT kılavuzuna göre sıcak ve nemli hava yoğuşturucuda odanın soğuk havasıyla soğutulur; nemli hava yoğuşur ve su, su tankına pompalanır. Bu tarif yoğuşmalı makine içindir.

Samsung kondansatörlü ve ısı pompalı makineyi ayrı sayar: ısı pompalı makine sıcak havayı düşük sıcaklıkta geri dönüştürür. Makine çamaşırın kuruluğunu nem sensörüyle izler; Arçelik sensör metallerinin yılda 4 kez temizlenmesini istiyor. Düğme ve parça adları modele göre değişir; kendi makinenin kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Önce güvenlik.** Arçelik yoğuşturulan suyun içme suyu olmadığını yazıyor; Samsung da yoğunlaşmış suyu içmemeni istiyor. Arçelik su tankını program çalışırken kesinlikle dışarı çıkarmamanı da söylüyor.

## Kurutma makinesi çamaşırı hangi aşamalarla kurutur?

Arçelik'in program takip göstergesi dört adım sayar: kurutma, ütü kuruluğu, dolap kuruluğu ve son (kırışık önleme). Kılavuza göre makinenin son işlemi soğutmadır ve ısı uygulanmadan yapılır; böylece çamaşırlar zarar görmeyecekleri bir sıcaklıkta kalır. Program bitince çamaşırı almazsan Arçelik'te 2 saat süren kırışık önleme programı devreye girer.

Samsung'un sorun giderme tablosu da aynı mantığı doğrular: makine ısınmıyorsa program soğuma aşamasında olabilir. Yani makinenin sıcak havayı kesmesi her zaman arıza değildir.

## Yoğuşmalı ve ısı pompalı kurutma makinesi arasındaki fark nedir?

Samsung'a göre kondansatörlü makine havayı ısıtır ve nemi bir tankta toplar ya da boşaltır. Isı pompalı makine sıcak havayı düşük sıcaklıkta geri dönüştürür ve genellikle kondansatörlü makineden daha az enerji kullanır. Samsung DV5000T kılavuzu ısı eşanjörü olan bir modeli anlatır.

| | Arçelik 2772 KT | Samsung DV5000T |
|---|---|---|
| Nem nereye gider? | Yoğuşturucuda suya dönüşür, su tankına pompalanır | Yoğunlaşan su, su tankına ya da tahliye hortumuna gider |
| Her kullanımda | Filtreyi temizle, su tankını boşalt | Tiftik filtresini temizle, su tankını boşalt |
| Ayda bir | Yoğuşturucuyu temizle (ya da her 30 kurutmada) | Isı eşanjörünü temizle |
| Nasıl temizlenir? | Kılavuz duşla basınçlı su uygulamanı ister | Fırça ya da fırça eklentili elektrikli süpürge; su yok |

## Adım adım: kurutma makinesi nasıl çalıştırılır?

**1. Çamaşırın bakım etiketine bak.** Arçelik, yalnız etiketinde kurutma makinesinde kurutulabilir yazan çamaşırları kurutmanı istiyor. Samsung yıkanmamış öğeleri ve yağ, alkol, gazolin gibi maddelerle kirlenmiş öğeleri kurutmamanı yazıyor.

**2. Tiftik filtresini temizle.** Arçelik kurutma sırasında havaya karışan tüy ve liflerin filtre kasedinde toplandığını yazıyor. Samsung her yükten sonra tiftik filtresini temizlemeni, aksi halde kurutma performansının düşebileceğini söylüyor.

**3. Su tankını boşalt.** Samsung sızıntıyı önlemek için her yükten sonra tankı boşaltmanı istiyor. Arçelik'te tank dolarsa makine durur ve su tankı uyarı ışığı yanar; tankı boşaltıp başlat tuşuna basınca program kaldığı yerden devam eder.

**4. Çamaşırı yerleştir ve kapağı kapat.** Arçelik aşırı yüklemede kurutma performansının düşeceğini yazıyor. Samsung tek seferde yalnızca bir yıkama yükü koymanı istiyor. Kapağın tam kapandığından emin ol.

**5. Programı seç.** Samsung'da güç düğmesine basıp program seçiciyi çevirirsin. Arçelik'te makineyi açıp program düğmesiyle çamaşırın türüne uygun programı seçersin.

**6. Programı başlat.** Arçelik'te açma kapatma tuşuna basmak programı başlatmaz; başla, bekle, iptal tuşuna basman gerekir. Samsung'da başlat düğmesine basılı tutarsın.

**7. Program bitince çamaşırı çıkar.** Arçelik'te program bitince kapak açılabilir ve makine bir sonraki yük için hazır olur. Makineyi açma kapatma tuşuyla kapat.

## Isı eşanjörü ve yoğuşturucu neden temizlenir?

Arçelik yoğuşturucuyu en az ayda bir ya da her 30 kurutmadan sonra temizlemeni istiyor. Samsung ısı eşanjörü için ayda en az bir kez der. Samsung'a göre eşanjöre çıplak elle dokunma ve temizlemek için su kullanma; kanatçıkları bükmemeye de dikkat et. Bu parçaların kapağını açıp temizlemek kılavuzdaki adımlarla yapılır; kılavuzda tarif yoksa dokunma.

## Çamaşır nemli çıkarsa ne kontrol edilir?

Samsung'un tablosu kurutmuyor şikâyetinde sırayla şunları sayar: makinenin aşırı yüklenmediğinden emin ol, hafif ve ağır öğeleri ayır, tiftik filtresini ve ısı eşanjörünü temizle. Arçelik kurutma süresi uzadığında ilk olarak lif filtresinin gözeneklerinin tıkanmış olabileceğini yazıyor. Sıcak çıkan çamaşırın gerçekte olduğundan daha nemli hissedildiğini de ekliyor; bu yüzden kontrol etmeden önce çamaşırın soğumasını bekle.

Ayrıntı için [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/) yazısındaki kontrol sırasına geç. İlk kullanım ve program seçimi için [kurutma makinesi nasıl kullanılır](/blog/kurutma-makinesi-nasil-kullanilir/), filtre ve kondenser bakımı için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazısına bak. Uyarı ışığı sönmüyorsa [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/) işine yarar.

⛔ **Kendin-çöz sınırı burada biter.** Programı seçmek, filtreyi temizlemek ve su tankını boşaltmak sende. Samsung, kılavuzda tarif edilmeyen hiçbir parçayı onarmaya, sökmeye ya da değiştirmeye kalkışmamanı istiyor. Bunun dışındaki her işlem yetkili servisin işi.

Belirtiyi benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
