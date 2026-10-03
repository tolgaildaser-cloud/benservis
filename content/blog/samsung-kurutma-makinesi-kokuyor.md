---
title: "Samsung kurutma makinesi kokuyor"
description: "Samsung kurutma makinesinden koku geliyorsa kılavuzun sırası: ortamı havalandır, su tankını yıka, tiftik filtresini kuru tak, çamaşırı bekletme."
slug: "samsung-kurutma-makinesi-kokuyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, Haier/Samsung koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com · www.samsung.com/tr) indirildi, HTTP 200. PDF md5'leri 2 Eki kopyalarıyla birebir.
# #88: web araması yalnız destek sayfalarının yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-3eki/ (MD5.txt) · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  S) Kılavuz ısı pompalı kurutucu "SimpleUX" DC68-04268H-03 (AH) TR (DV90T5240AW/AH), 60 s., md5 7d07cd0444389e478b7625ea26e2134a
#     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90T5240AW&CttFileID=8770643&CDCttType=UM&VPath=UM%2F202209%2F20220917120549513%2FU-PJT_DRYER_SimpleUX_DC68-04268H-03_AH_TR.pdf
#  D) Kılavuz DV5000T DC68-04209V-02 TR (DV90TA040AE/AH), 68 s., md5 af744046e6c457b037ef2e270349d072
#     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90TA040AE&CttFileID=8770640&CDCttType=UM&VPath=UM%2F202209%2F20220917120230960%2FDV5000T_DC68-04209V-02_TR.pdf
#  K3) Samsung TR SSS "Kurutma makinemden kötü koku geldiğinde ne yapabilirim?" (son güncelleme 2024-05-30)
#      https://www.samsung.com/tr/support/home-appliances/how-can-i-install-and-clean-my-samsung-dryer/  md5 61428b7fa3e7ac21ecc647732b7c32e1
#  K2) Samsung TR "Kurutma Makinesi Hakkında SSS"  https://www.samsung.com/tr/home-appliances/faq-dryer/  md5 a567d6a742153db5bd32ea6a4c1c8ec2
#  K4) Samsung TR SSS ısı eşanjörü temizliği  https://www.samsung.com/tr/support/home-appliances/kurutma-makinemin-isi-esanjorunu-nasil-temizleyebilirim/  md5 ac282befcbeb7368fecd62449636485a
#  (K2-K4 dinamik HTML; md5 bu indirmenin)
# Belirti satırları:
#   S s.49 "Kurutucudan koku geliyor." → "Boya, vernik, temizlik maddeleri ve diğer ev eşyalarının kokusu havada dolaşıp kurutucuya girmiş olabilir. Böyle bir koku fark ederseniz, kurutucuyu kullanmadan önce tamamen havalandırın."
#     · "Kapalı bir alanda kurutulursa, kurutucu ortam sıcaklığının yükselmesine neden olabilir. Buna göre, bir pencere açtığınızdan ve alanı havalandırdığınızdan emin olun."
#     · "Islak çamaşırları uzun süre çamaşır makinesinde veya kurutucuda bıraktıktan sonra kurutmaya çalışmayın."
#   S s.49 "Kurutucunun etrafındaki ortam sıcaklığı yükseliyor veya nemli, ıslak bir koku var." → ısı pompalı kurutucu ortam havasını dolaştırır; iyi havalandırılmayan alanda nem/ıslak koku; "Kurutucuyu kullanırken uygun havalandırmayı sağlayın."
#   D s.51 "Kurutma makinesi koku yayıyor" → "Kurutma makinesi çevredeki havanın ev kokularını içeri çekebilir ve sonra bunları çıkarabilir. Bu normaldir."
#   D s.51 "HAVALANDIRMA ardından giysilerde kokular kalıyor" → "Kötü kokular içeren öğeleri iyice yıkadığınızdan emin olun."
# Diğer: S s.10/s.15 garip ses, yanık kokusu, duman → fişi hemen çek, servis · S s.26 iyi sıkılmamış ıslak çamaşır → kurutucunun içinde koku · S s.43 su tankı (her kullanımdan sonra; iki el;
#   tahliye deliği; ılık su + biraz nötr deterjan, 30 dk, temiz suyla durula, tamamen kurula) · S s.44 temizlikten önce fiş; kapağın iç kısmı yumuşak bez/fırça; lastik conta çıkarılmaz
#   · S s.44-46 tiftik filtresi + DİKKAT (ıslak filtre → küf/koku/az kuruma) · K3 aynı adımlar + "ıslak bir tiftik filtresiyle kullanma küfe, kötü kokuya neden olabilir"
#   · K2 "Taşma veya kötü kokuyu önlemek için hazneyi düzenli olarak boşaltın." · K2 Self Clean (kokuları önler) · K2 Otomatik Açılır Kapak (Ayarlar → Otomatik Açılır Kapak)
#   · S s.46-47 / K4 ısı eşanjörü · S s.49 "Sorun devam ederse, yerel bir Samsung servis merkezine başvurun."
# BİLEREK YAZILMAYANLAR: ısı eşanjörüne su püskürtme (S s.47 "biraz su püskürtün" ↔ K4 "su kullanmayın" çelişkisi) · kondansatör temizliği (K3'te yalnız DV80H4100)
#   · Self Clean / Otomatik Açılır Kapak'ın hangi modellerde olduğu (K2 model listesi vermiyor → "modelinde varsa") · koku giderici/sprey/sirke gibi ev usulü yöntemler (belgede yok)
#   · yanık kokusunun sebebi (belge yalnız "fişi çek, servis" diyor) · başka modellere genelleme.
# Alıntı denetim tablosu: samsung-kurutma-makinesi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~45 dakika (tankın 30 dakika bekleme süresi dahil)"
  totalTime: "PT45M"
  cost: "Ücretsiz"
  tools: ["Makineyle gelen temizleme fırçası", "Yumuşak bez", "Nötr deterjan"]
steps:
  - "Kurutma makinesinin fişini prizden çek."
  - "Kurutucunun bulunduğu alanı pencere açarak tamamen havalandır."
  - "Su tankını iki elinle çıkar ve suyu tahliye deliğinden boşalt."
  - "Tankı ılık su ve biraz nötr deterjan karışımıyla doldur, 30 dakika beklet, temiz suyla durula ve tamamen kurula."
  - "Tiftik filtresini yukarı çekerek çıkar, iç ve dış filtredeki tiftiği al ve fırçayla temizle."
  - "Filtreyi suyla yıkadıysan tamamen kurumasını bekle, sonra iç filtreyi dış filtreye koyup yerine tak."
  - "Kapağın iç kısmını yumuşak bir bez ya da fırçayla temizle."
  - "Kurutucuya yalnız iyi sıkılmış çamaşır koy; ıslak çamaşırı makinede uzun süre bekletme."
faq:
  - q: "Samsung kurutma makinesi neden kokuyor?"
    a: "Samsung'un kılavuzu üç kaynak sayıyor: odadaki boya, vernik ya da temizlik maddesi kokusunun havayla kurutucuya girmesi, kurutucunun kapalı ve iyi havalandırılmayan bir alanda çalışması ve uzun süre makinede bekletilmiş ıslak çamaşırın kurutulması. DV5000T kılavuzu ayrıca kurutucunun çevredeki havanın ev kokularını içeri çekip sonra dışarı verebileceğini ve bunun normal olduğunu yazıyor."
  - q: "Kurutucudan yanık kokusu geliyor. Ne yapmalıyım?"
    a: "Bu farklı bir durum. Samsung'un güvenlik uyarısına göre kurutma makinesi garip sesler, yanık kokusu ya da duman çıkarırsa fişi prizden hemen çek ve en yakın Samsung servis merkezine başvur. Bu yazıdaki temizlik adımları yanık kokusu için değildir."
  - q: "Islak tiftik filtresi koku yapar mı?"
    a: "Evet. Samsung'un kılavuzu ve Türkiye destek sayfası, filtrenin ıslakken takılmasının küf, koku ya da daha az kuruma yapabileceğini yazıyor. Filtreyi akan suda yıkadıysan takmadan önce tamamen kurumasını bekle ve makineyi dış filtrenin içinde iç filtre olmadan çalıştırma."
  - q: "Su tankı kokuya yol açar mı?"
    a: "Samsung Türkiye'nin kurutma makinesi SSS sayfası, taşmayı ya da kötü kokuyu önlemek için su haznesinin düzenli boşaltılmasını istiyor. Kılavuz tankın her kullanımdan sonra boşaltılmasını ve iç kısmının ılık su ile biraz nötr deterjan karışımıyla temizlenmesini söylüyor."
  - q: "HAVALANDIRMA programından sonra giysilerde koku kalıyor. Neden?"
    a: "DV5000T kılavuzunun bu satırdaki tek önerisi, kötü koku içeren öğelerin iyice yıkandığından emin olmak. Kokulu giysiyi önce iyice yıka."
images:
  coverAlt: "Penceresi aralık bir çamaşır odasında kapağı açık kurutma makinesi; yanında tezgâha bırakılmış boş su tankı ve çıkarılmış tiftik filtresi"
---

Kurutucudan çıkan çamaşır temiz kokmuyor ya da makinenin kapağını açınca rutubetli bir koku geliyor. Samsung'un ısı pompalı kurutucular için Türkçe kılavuzunda bu durumun satırı **"Kurutucudan koku geliyor."** Satırın ilk maddesi çoğu kişinin aklına gelmeyen bir sebebi söylüyor: **"Boya, vernik, temizlik maddeleri ve diğer ev eşyalarının kokusu havada dolaşıp kurutucuya girmiş olabilir."** Yani koku her zaman makinenin içinden gelmiyor; bazen odanın havasından geliyor. Aşağıdaki sıra bu satırı, Samsung Türkiye'nin "kötü koku" destek sayfasını ve kılavuzun bakım bölümünü izliyor. Kaynak DV90T5240AW ve DV5000T (DV90TA040AE) kılavuzları; mesaj ve tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yanık kokusu ya da duman varsa fişi hemen çek, servis. Rutubet ya da ev kokusuysa: fişi çek → odayı havalandır → su tankını boşalt ve içini yıka → tiftik filtresini temizle, **kuru** tak → kapağın içini sil → ıslak çamaşırı makinede bekletme.

## Önce kokunun türünü ayır

Samsung'un kılavuzu iki farklı kokuyu ayrı ele alıyor:

- **Yanık kokusu, duman ya da garip ses:** Güvenlik bölümündeki talimat net: **fişi prizden hemen çek** ve en yakın Samsung servis merkezine başvur. Bu durumda aşağıdaki temizlik adımlarına geçme.
- **Rutubet, ıslak ya da ev kokusu:** Sorun giderme tablosundaki "koku" satırları bu tür içindir. Isı pompalı kurutucu çalışırken ortam havasını makinenin içinde ve dışında dolaştırır; Samsung'a göre iyi havalandırılmayan bir alanda bu, **nemli, ıslak bir koku** oluşturabilir.

DV5000T kılavuzu bir notu daha ekliyor: kurutma makinesi **çevredeki havanın ev kokularını içeri çekip sonra dışarı verebilir** ve bu normaldir.

## Adım adım: evde denenecekler

**1. Fişi çek.** Samsung'un temizlik bölümündeki uyarı: kurutma makinesini temizlemeden önce **güç kablosunu fişten çıkardığından** emin ol.

**2. Odayı havalandır.** Kılavuzun koku satırındaki ilk iki madde ortamla ilgili. Boya, vernik ya da temizlik maddesi kokusu fark edersen kurutucuyu kullanmadan önce alanı **tamamen havalandır.** Kapalı bir alanda kurutma yapılırsa kurutucu ortam sıcaklığını yükseltebilir; Samsung **bir pencere açmanı** ve alanı havalandırmanı istiyor.

**3. Su tankını boşalt.** Samsung Türkiye'nin SSS sayfası açık: **taşmayı ya da kötü kokuyu önlemek için** hazneyi düzenli olarak boşalt. Tutamağı tank yarıya kadar çıkana dek bir elinle çek, sonra diğer elinle altından destekleyip **iki elinle** yavaşça çıkar; dolu tank ağırdır. Suyu **tahliye deliğinden** boşalt.

**4. Tankın içini yıka.** Kılavuz tankın yalnız boşaltılmasını değil, içinin temizlenmesini de istiyor: ılık suya **biraz nötr deterjan** karıştır, tankı tahliye deliğinden bu karışımla doldur ve **30 dakika** beklet. Ardından temiz suyla durula, **tamamen kurula** ve yerine yerleştir.

**5. Tiftik filtresini temizle.** Kapağı aç, filtrenin üst kısmını tutup **yukarı çekerek** çıkar; lastik contayı çıkarma. Dış filtreyi aç, iç filtreyi çıkar, iki filtreyi de aç; tiftiği al ve **temizleme fırçasıyla** temizle. Samsung'a göre filtreleri iyice temizlemek için akan suyun altında da yıkayabilirsin.

**6. Filtreyi kuru tak.** Kokuyla doğrudan ilgili uyarı burada: Samsung'a göre filtrenin **ıslakken takılması küf, koku** ya da daha az kurumaya neden olabilir. Filtre ıslaksa tamamen kurumasını bekle, sonra iç filtreyi dış filtrenin içine koy ve yerine tak. Makineyi **iç filtre olmadan** çalıştırma.

**7. Kapağın içini temizle.** Kılavuzun bakım bölümüne göre kapağın iç kısmında yabancı maddeler birikebilir. **Yumuşak bir bez ya da fırçayla** kapağın içini temizle; kapağın lastik contasını çıkarma.

**8. Çamaşırı bekletme.** Koku satırının son maddesi: ıslak çamaşırı **uzun süre çamaşır makinesinde ya da kurutucuda bıraktıktan sonra** kurutmaya çalışma. Kılavuzun sınıflandırma bölümü de yıkamadan sonra **tam olarak sıkılmamış** ıslak çamaşırın kurutucunun içinde kokuya yol açabileceğini yazıyor. Fişi tak ve iyi sıkılmış bir yükle yeniden dene.

## Modelinde varsa işe yarayan iki özellik

Samsung Türkiye'nin kurutma makinesi SSS sayfası, bazı modellerde bulunan iki özelliği kokuyla ilişkilendiriyor:

- **Self Clean:** Kurutmadan sonra kalan nemi gideren yüksek sıcaklık programı; Samsung'a göre kokuları ve birikintileri önler. Menüden seçilir ve otomatik çalışır.
- **Otomatik Açılır Kapak:** Program bitince kapağı açarak nemli havayı dışarı verir; çamaşır içeride kalırsa oluşacak kötü kokuyu önler. Ayarlar → Otomatik Açılır Kapak bölümünden ya da SmartThings uygulamasından açılır.

Bu özellikler her modelde yok; kendi kılavuzunun menü bölümüne bak.

## Isı eşanjörü ne zaman devreye girer

Samsung Türkiye'nin destek sayfası ısı eşanjörünün **ayda en az bir kez**, ya da sesli uyarı verilip ısı eşanjörü göstergesi yandığında temizlenmesini istiyor. Ekranda **FIL + tEr** ya da "Isi esanjörünü temizleyin" görürsen sıra ona gelmiştir. Temizliği makineyle gelen fırçayla yap; ısı eşanjörüne **çıplak elle dokunma** ve kanatlarını bükme. Adım adım anlatımı [Samsung kurutma makinesi kurutmuyor](/blog/samsung-kurutma-makinesi-kurutmuyor/) yazısında; markadan bağımsız anlatım için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazısına bakabilirsin.

## Ne zaman servis

Havalandırma, su tankı, tiftik filtresi ve kapak temizliği kullanıcıya aittir. **Yanık kokusu, duman ya da garip ses** varsa Samsung'un talimatı tek: fişi hemen çek ve servis merkezine başvur. Rutubet kokusu bu adımlardan sonra da sürüyorsa kılavuzun tablo altındaki cümlesi geçerli: **sorun devam ederse yerel bir Samsung servis merkezine başvur.**

⛔ **Kendin-çöz sınırı burada biter.** Bakım kapakları dışında bir paneli açmak ya da parça sökmek kullanıcı işi değildir. Kurutucuyu üzerine doğrudan su püskürterek temizleme; Samsung benzen, tiner, alkol ve asetonla temizlemeyi de yasaklıyor.

## Servisi aramadan önce iki dakikalık özet

- Koku yanık mı, rutubet mi, yoksa odadaki bir boya ya da temizlik maddesi kokusu mu?
- Kurutucu kapalı, penceresiz bir alanda mı çalışıyor?
- Su tankı en son ne zaman boşaltıldı ve içi yıkandı mı?
- Tiftik filtresi takılırken kuru muydu?
- Kurutucuya konan çamaşır makinede ne kadar bekledi?

Bu sorulara cevabın varsa servise "kokuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
