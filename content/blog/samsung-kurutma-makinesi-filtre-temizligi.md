---
title: "Samsung kurutma makinesi filtre temizliği ve FIL tEr uyarısı"
description: "Samsung kurutma makinesinde tiftik filtresi ve ısı eşanjörü nasıl temizlenir, FIL tEr ve filtre uyarısı ne demek? Samsung kılavuzuna göre adım adım."
slug: "samsung-kurutma-makinesi-filtre-temizligi"
date: "2026-10-23"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork B). Konu seçimi: origin/main'de samsung-kurutma-makinesi-filtre-temizligi yok
#   (genel kurutma-makinesi-filtre-ve-kondenser-temizligi marka bağımsız; samsung-kurutma-makinesi-kurutmuyor belirti sayfası, filtreyi bir adım olarak anlatıyor).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) dışa aktarımlarında "samsung kurutma" + "filtre/fl" satırı YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "samsung kurutma makinesi filtre": 1. "…filtre temizliği" · 2. "…filtresi"
#   · 3. "…filtre hatası" · 4. "…filtre uyarısı" · 5. "…alt filtre temizliği" · 6. "…tiftik filtresi"; tohum "samsung kurutma makinesi fl": 1. "…fl hatası" · 2. "…fıl hatası".
#   FL/FIL tEr sorgusu bu sayfada karşılanıyor (ayrı sayfa açılmadı, yamyamlık olmasın diye).
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından indirildi, hepsi HTTP 200. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
#  (D) DV5000T kılavuzu DC68-04209V-02 TR, 68 s.  md5 af744046e6c457b037ef2e270349d072 (yerel kopyayla aynı)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90TA040AE&CttFileID=8770640&CDCttType=UM&VPath=UM%2F202209%2F20220917120230960%2FDV5000T_DC68-04209V-02_TR.pdf
#  (S) SimpleUX ısı pompalı kurutucu kılavuzu DC68-04268H-03 (AH) TR, 60 s.  md5 7d07cd0444389e478b7625ea26e2134a (yerel kopyayla aynı)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90T5240AW&CttFileID=8770643&CDCttType=UM&VPath=UM%2F202209%2F20220917120549513%2FU-PJT_DRYER_SimpleUX_DC68-04268H-03_AH_TR.pdf
#  (H3) Samsung TR SSS tiftik filtresi (son güncelleme 2024-11-20)  https://www.samsung.com/tr/support/home-appliances/kurutma-makinemin-tiftik-filtresini-nasil-temizleyebilirim/  md5 eacf3584385ac6af2a021931ed1a4dbb
#  (H2) Samsung TR SSS ısı eşanjörü (2025-01-18)  https://www.samsung.com/tr/support/home-appliances/kurutma-makinemin-isi-esanjorunu-nasil-temizleyebilirim/  md5 5c962bbcb734d41020c70f105c3596dd
#  (H1) Samsung TR SSS bakım ve temizlik (2024-05-30)  https://www.samsung.com/tr/support/home-appliances/how-can-i-install-and-clean-my-samsung-dryer/  md5 8addd18ccf1b0f28292f1dbe67692cd1
#  (H1-H3 dinamik HTML; md5 bu indirmenin, 2 Eki kopyalarından farklı; metin aynı)
# Tiftik filtresi D s.44-46, S s.44-46, H3, H1 · ısı eşanjörü D s.48-49, S s.46-47, H2, H1 · fiş D s.44, S s.44 · ADIM 4-5 S s.27 · bildirim/alarm S s.47
#   · "Filtreyi kontrol edin", "Isi esanjörü kapagini kontrol edin" S s.50 · FIL+tEr S s.51, D s.52 · tC D s.52, S s.50 · ekran simgeleri D s.33 · tüylü havlu S s.49.
# BİLEREK YAZILMAYANLAR: ısı eşanjörüne su püskürtme (S s.47 notu izin veriyor, D s.49 + H2 + H1 "su kullanmayın" diyor → yazıda su kullanılmadı, bu fark açıkça belirtilmedi)
#   · kondansatör temizliği (H1'de yalnız DV80H4100) · "alt filtre" diye ayrı bir parça (belgelerde yok; ısı eşanjörü alt kapakta) · temizlik sıklığı için belgede olmayan rakam · fiyat (#46).
# Alıntı denetim tablosu: samsung-kurutma-makinesi-filtre-temizligi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makineyle gelen temizleme fırçası", "Fırça uçlu elektrikli süpürge (isteğe bağlı)", "Yumuşak, nemli bez"]
steps:
  - "Temizliğe başlamadan önce kurutma makinesinin fişini prizden çek."
  - "Kapağı aç ve tiftik filtresini üst kısmından tutup yukarı çekerek çıkar; lastik contayı yerinden çıkarma."
  - "Dış filtreyi aç, iç filtreyi çıkar ve iki filtrenin katlarını da aç."
  - "Tiftiği ve tozu temizleme fırçasıyla al; gerekirse akan suda yıka ve tamamen kurumasını bekle."
  - "İç filtreyi dış filtrenin içine yerleştir ve tiftik filtresini yerine tak."
  - "Isı eşanjörünün dış kapağının üst kısmına bastırarak aç, sabitleyicileri çevir ve iç kapağı çıkar."
  - "Isı eşanjörünü makineyle gelen fırçayla ya da fırça uçlu süpürgeyle, kanatları bükmeden ve su kullanmadan temizle."
  - "İç kapağı nemli bezle sil, yerine tak, sabitleyicileri kilitle, dış kapağı kapat ve ekrandaki bildirimi kapat."
faq:
  - q: "Samsung kurutma makinesinin tiftik filtresi ne sıklıkla temizlenir?"
    a: "Samsung her yükten sonra istiyor. Hem kılavuzlar hem Samsung Türkiye destek sayfası aynı şeyi söylüyor: temizlenmezse kurutma performansı düşebilir. Çok tüy bırakan çamaşırlarda program ortasında bile temizlemen gerekebilir."
  - q: "Samsung kurutma makinesinde FIL tEr ne demek?"
    a: "FIL tEr, zil sesiyle birlikte çıkan bir bakım uyarısı ve ısı eşanjörünün temizlenmesi gerektiğini söylüyor. Arıza değil. Isı eşanjörünü makineyle gelen fırçayla temizlediğinde uyarı işini görmüş olur; SimpleUX ekranlı modellerde temizlikten sonra mesaja dokunarak bildirimi kapatıyorsun."
  - q: "Isı eşanjörünü suyla yıkayabilir miyim?"
    a: "DV5000T kılavuzu ve Samsung Türkiye'nin ısı eşanjörü destek sayfası ısı eşanjörünü temizlemek için su kullanmamanı söylüyor. Önerilen araç makineyle gelen temizleme fırçası ya da fırça uçlu elektrikli süpürge. Çıplak elle dokunma; Samsung yaralanma ve yanık riskine karşı uyarıyor."
  - q: "Ekranda 'Filtreyi kontrol edin' yazıyor, ne yapmalıyım?"
    a: "SimpleUX kılavuzuna göre bu mesaj bir tiftik filtresi sorununu gösteriyor. Tiftik filtresi tertibatını kontrol et: iç filtre dış filtrenin içinde mi, filtre yerine tam oturmuş mu? Mesaj sürerse servisi ara."
  - q: "Islak filtreyi takabilir miyim?"
    a: "Hayır. Samsung'a göre filtreyi ıslakken takmak küf, kötü koku ve daha zayıf kurutmaya yol açabilir. Akan suda yıkadıysan filtrenin tamamen kurumasını bekle."
images:
  coverAlt: "Kurutma makinesinin kapak ağzından çıkarılmış tiftik filtresi ve yanında küçük bir temizleme fırçası"
  steps:
    - "Çizim: solda kurutma makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda kurutma makinesi, sağda ilgili filtre"
    - "Çizim: solda kurutma makinesi, sağda ilgili filtre"
    - "Çizim: solda kurutma makinesi, sağda temizlik fırçası"
    - "Çizim: solda kurutma makinesi, sağda ilgili filtre"
    - "Çizim: solda kurutma makinesi, sağda kapak"
    - "Çizim: solda kurutma makinesi, sağda temizlik fırçası"
    - "Çizim: solda kurutma makinesi, sağda kapak"
---

Samsung kurutma makinesinde iki temizlik noktası var: kapak ağzındaki **tiftik filtresi** ve makinenin altındaki **ısı eşanjörü**. İkisi de kirlendiğinde makine haber verir; ekranda FIL tEr, "Filtreyi kontrol edin" ya da "Isi esanjörünü temizleyin" görürsün. Bu yazıda Samsung'un DV5000T ve SimpleUX Türkçe kılavuzlarıyla Samsung Türkiye destek sayfalarındaki temizlik adımlarını tek sırada topladık. Senin modelinde parçaların yeri biraz farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tiftik filtresi her yükten sonra, ısı eşanjörü ayda en az bir kez ya da FIL tEr uyarısı gelince temizlenir. Önce fişi çek. Filtreyi akan suda yıkadıysan tamamen kurut. Isı eşanjöründe su değil fırça kullan, kanatları bükme. Uyarı sürerse servis.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **FIL tEr** (zil çalar) | Isı eşanjörünün temizlenmesi gerekiyor | 🛠️ Isı eşanjörünü temizle |
| **"Isi esanjörünü temizleyin"** | Aynı bakım uyarısı (SimpleUX) | 🛠️ Temizle, sonra mesaja dokun |
| **"Filtreyi kontrol edin"** | Tiftik filtresi sorunu | 🛠️ Filtre tertibatına bak; sürerse servis |
| **"Isi esanjörü kapagini kontrol edin"** | Dahili ısı eşanjörü kapak sorunu | 🛠️ İç kapağı ve sabitleyicileri kontrol et; sürerse servis |
| **tC** | Hava sıcaklığı sensörü sorunu | 🛠️ Filtre ve ısı eşanjörü; sürerse servis |

## Adım adım: filtre ve ısı eşanjörü temizliği

**1. Fişi çek.** Samsung'un iki kılavuzu da temizlikten önce güç kablosunun fişten çıkarılmasını istiyor. Makinenin üstüne doğrudan su püskürtme; benzen, tiner, alkol ya da aseton da kullanma.

**2. Tiftik filtresini çıkar.** Kapağı aç, filtrenin üst kısmını tut ve yukarı çekerek çıkar. Samsung filtreyi aldıktan sonra **lastik contayı yerinden çıkarmamanı** söylüyor. Çamaşır koyup alırken filtre takılı olmalı: SimpleUX kılavuzuna göre filtre yerinde değilken küçük parçalar filtre yuvasına düşebilir ve makineyi arızalandırabilir.

**3. İki parçayı aç.** Dış filtreyi aç, iç filtreyi çıkar, sonra iki filtrenin katlarını da aç. Kılavuz bir uyarı ekliyor: filtreleri dikkatsizce ve aşırı güçle açmak onlara zarar verebilir.

**4. Tiftiği al, gerekiyorsa yıka.** Tiftiği ve kalan tozu temizleme fırçasıyla al. Samsung filtreleri akan suda yıkayabileceğini ama sonra **tamamen kurutman** gerektiğini söylüyor. Filtreyi sallama ya da bir yere vurma; zarar görebilir.

**5. Yerine tak.** İç filtreyi dış filtrenin içine yerleştir ve tiftik filtresini eski yerine tak. İki kural var: makineyi dış filtre içinde iç filtre olmadan çalıştırma; ıslak filtreyi de takma, çünkü ıslak filtre küf, kötü koku ve daha zayıf kurutma demek. Bu iş **her yükten sonra** tekrarlanıyor. Çok tüy bırakan çamaşırlarda program ortasında bile gerekebilir.

**6. Isı eşanjörünü aç.** Samsung ısı eşanjörünün ayda en az bir kez, ya da zil çalıp gösterge yandığında temizlenmesini istiyor. Destek sayfasına göre bu ısı pompasının verimini yükseltiyor. Dış kapağın üst kısmına hafifçe bastırarak aç, iç kapağın sabitleyicilerini çevirerek kilidini aç ve iç kapağı çıkar. Eşanjörün çevresinde su damlacıkları görebilirsin; Samsung bunun yoğunlaşmadan kaynaklandığını, sızıntı olmadığını yazıyor.

**7. Fırçayla temizle.** Isı eşanjörünü makineyle gelen temizleme fırçasıyla ya da fırça uçlu bir elektrikli süpürgeyle temizle. Kanatları bükme; Samsung'a göre bu kurutma performansını düşürür. DV5000T kılavuzu ve destek sayfası **su kullanmamanı** söylüyor. Isı eşanjörüne çıplak elle dokunma; Samsung yaralanma ve yanık riskine karşı uyarıyor.

**8. Kapat ve bildirimi sil.** İç kapağı düz, nemli bir bezle sil; çevresinde nem ya da yabancı madde olabilir. İç kapağı yerine tak, sabitleyicilerin **tamamen kilitlendiğinden** emin ol, dış kapağı kapat. SimpleUX ekranlı modellerde bildirim siz kapatana kadar açık kalıyor; mesaja dokunarak kapat. Alarm yine sürüyorsa kılavuz fişi çekip yeniden takmayı ya da iç kapağı çıkarıp yeniden takmayı öneriyor.

## Filtreyi daha az doldurmak için

Samsung'un kılavuzlarında filtrenin işini kolaylaştıran birkaç alışkanlık var. Beyaz havlu gibi çok tüy bırakan kumaşları, tüyü kolay tutan kumaşlardan (siyah keten pantolon gibi) ayrı kurut. Kurutmadan önce ceplerin boş olduğundan emin ol. Kurutma bitince SimpleUX kılavuzu makinenin içini daha temiz tutmak için kurutucu kapağını ve ısı eşanjörü kapağını açık bırakmanı öneriyor; makineyi uzun süre kullanmayacaksan ısı eşanjörü kapağını açıp havalandır.

## Ne zaman servis

- "Filtreyi kontrol edin" filtre doğru takıldığı hâlde sürüyorsa
- "Isi esanjörü kapagini kontrol edin" iç kapak ve sabitleyiciler yerindeyken sürüyorsa
- tC temizlikten sonra geri geliyorsa
- Kılavuzun genel kuralı: bir bilgi kodu ekranda görünmeye devam ederse Samsung servis merkezi

⛔ **Kendin-çöz sınırı burada biter.** Tiftik filtresi, ısı eşanjörü ve onun kapakları sende; sensörler, fan, kompresör ve makinenin iç aksamı Samsung yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (DV5000T, SimpleUX ekranlı ya da başka)?
2. Ekranda tam olarak hangi mesaj ya da kod var?
3. Tiftik filtresini en son ne zaman temizledin, kuru muydu?
4. Isı eşanjörünü temizleyip bildirimi kapattın mı?
5. Sabitleyiciler kilitli mi?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Çamaşır nemli çıkıyorsa [Samsung kurutma makinesi kurutmuyor](/blog/samsung-kurutma-makinesi-kurutmuyor/), koku varsa [Samsung kurutma makinesi kokuyor](/blog/samsung-kurutma-makinesi-kokuyor/) yazısına bak; marka bağımsız bakım [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) sayfasında. Bil, gör, çağır.
