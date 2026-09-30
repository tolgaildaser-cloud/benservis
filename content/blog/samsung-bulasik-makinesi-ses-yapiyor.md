---
title: "Samsung bulaşık makinesi ses yapıyor"
description: "Samsung bulaşık makinesi gürültülü mü? Samsung'un normal sesleri ve evde kontrol sırası: artıklar, sabit durmayan bulaşık, çarpan kol, üst sepet."
slug: "samsung-bulasik-makinesi-ses-yapiyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144; 29 Eyl notunda "belgede ayrı satırı olan" belirti olarak kayıtlı). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200.
# #88: bilgiler YALNIZ Samsung Türkiye'nin kendi kılavuzlarından (org.downloadcenter.samsung.com, CDSite=UNI_TR). Samsung TR'de gürültü için ayrı destek sayfası bulunmadı. ABD Samsung kaynağı KULLANILMADI.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-bulasik-sprint/2026-09-30/ · pdftotext -layout · sayfa = kılavuzun BASILI sayfa no'su, parantezde PDF sayfası (\f ile sayıldı). PDF md5'leri 29 Eyl kopyalarıyla birebir.
#  (A) DW5500MM (DD81-02615C-11, KA/TR/EN)  md5 2ad54a56734b93dbaeefbcd4fdc3b385
#       https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60M5052FW&CttFileID=10095923&CDCttType=UM&VPath=UM%2F202503%2F20250306111731926%2FDW5500MM_DD81-02615C-11_KA_TR_EN_241108.pdf
#  (C) DW8500AM / DW60A8050FS (DD81-03206J-04, EN/TR)  md5 0bac38bffb63954fc975765ab1c13167
#       https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60A8050FS&CttFileID=9233776&CDCttType=UM&VPath=UM%2F202306%2F20230628135053892%2FDW8500AM_DW60A8050FS_TR_DD81-03206J-04_EN_TR.pdf
#  (D) DW9000H (DD68-00158F-09, EN/TR/AR)  md5 370daab2b2de63dacb7920a1e1e60c79
#       https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60H5050FW%2FTR&CttFileID=7034806&CDCttType=UM&VPath=UM%2F201805%2F20180510194713724%2FDW9000H_DD68-00158F-09_EN_TR_AR_R.pdf
# Birebir alıntılar:
#   A s.53 (PDF 117) "Gürültü": "Bazı sesler duymak normaldir. → Ses, yumuşak yiyecek ufalama işleminden ve deterjan haznesi deliğinden gelir." · "Mutfak eşyaları sepetlerde sabit değildir veya bazı küçük bulaşıklar sepete düşmüştür. → Her şeyin bulaşık makinesi içinde sabit olduğundan emin olun." · "Motor uğulduyor. → Bulaşık makinesi düzenli olarak kullanılmıyordur. Sık sık kullanmıyorsanız, contaları nemli tutmak için haftada bir doldurmayı ve geri boşaltmayı unutmayın."
#   C s.71 (PDF 155) "Bulaşık makinesi çok gürültülü.": "Dağıtıcı kapağı açıkken ve boşaltma pompası çalışırken bulaşık makinesi ses yapar. → Bu normaldir." · "Bulaşık makinesi dengeli değildir. → Bulaşık makinesinin dengeli olduğundan emin olun." · "Püskürtücü bulaşıklara çarpıyordur ve parçalama sesi çıkarıyordur. → Bulaşıkları yeniden düzenleyin."
#   D s.37 (PDF 79) "Çok gürültülü.": "Dağıtıcı kapağı açıldığında ve pompa boşaltma işleminin başlangıç aşamasında bulaşık makinesi bip sesi çıkarır. → Bu normal bir durumdur." · dengeli değil · "Bir kol bulaşıklara çarptığı için, bir 'parçalanma' sesi meydana gelir. → Bulaşıkları yeniden düzenleyin."
#   C s.44 (PDF 128): "Kemik, meyve çekirdekleri vb. gibi yiyecek artıklarını ve kürdan, peçete vb. gibi artıkları bulaşıklarınızdan temizleyin. Kalan yiyecek ve çöp gürültü yapabilir…"
#   C s.45 (PDF 129): "Bulaşık makinesini üst sepet olmadan çalıştırmayın. Aksi halde, gürültü olabilir ve bulaşık makinesi düzgün çalışmayabilir." / "…üst sepeti düzgün şekilde takın."
#   C s.78 (PDF 162): "Bulaşıkları püskürtücü başlıklarını ve deterjan çıkış noktasını tıkamayacak şekilde yerleştirin. … ayrıca bulaşıklara çarparak oluşabilecek gürültüyü engellemiş olursunuz."
#   A kurulum ("Cihazı Dengeleme"): "…bulaşık makinesinin yüksekliği ayaklardaki dengeleme vidaları ayarlanarak değiştirilebilir. Her durumda, cihaz 2°'den daha fazla eğimli olmamalıdır." · A "ADIM 6": su terazisi + üç dengeleme bacağı · A kurulum adım 8: Alyan anahtarı / düz uçlu tornavida.
# BİLEREK YAZILMAYANLAR: dengeleme ayak ayarı adım olarak (Alyan anahtarı/tornavida → ALET KURALI; gövdede numarasız, "kurulum işi / servis") ·
#   "haftada bir doldurup boşalt" (A s.53) numaralı adım yapılmadı — kılavuz nasıl yapılacağını tarif etmiyor; gövdede aynen anıldı · kaplama/yan panel (C s.43, kurulum) · pompa/motor teşhisi · fiyat.
# Alıntı denetim tablosu: samsung-bulasik-makinesi-ses-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Bulaşıkları makineye koymadan önce kemik, meyve çekirdeği gibi artıkları ve kürdan, peçete gibi atıkları temizle."
  - "Tüm mutfak eşyalarının sepetlerde sabit durduğundan emin ol, sepetin içine düşmüş küçük bulaşıkları çıkar."
  - "Püskürtme kolları bulaşıklara çarpıyorsa bulaşıkları yeniden düzenle."
  - "Bulaşıkları püskürtücü başlıklarını ve deterjan çıkış noktasını tıkamayacak şekilde yerleştir."
  - "Üst sepetin takılı ve düzgün oturmuş olduğundan emin ol; makineyi üst sepetsiz çalıştırma."
faq:
  - q: "Samsung bulaşık makinesinden gelen hangi sesler normal?"
    a: "Samsung'un kılavuzlarına göre bazı sesler normaldir: yumuşak yiyecek ufalama işleminden ve deterjan haznesinin açılmasından gelen ses, dağıtıcı kapağı açıkken ve boşaltma pompası çalışırken çıkan ses. DW9000H kılavuzu, dağıtıcı kapağı açıldığında ve boşaltmanın başında duyulan bip sesini de normal sayıyor."
  - q: "Makine çalışırken takırtı ya da 'parçalanma' sesi geliyor, neden?"
    a: "Samsung'a göre bu ses genellikle püskürtme kolunun bulaşıklara çarpmasından gelir. Çözüm bulaşıkları yeniden düzenlemek ve püskürtücü başlıklarını tıkamayacak şekilde yerleştirmektir. Sepette sabit durmayan eşyalar ya da sepete düşmüş küçük bulaşıklar da ses yapabilir."
  - q: "Motor uğulduyor, bu bir arıza mı?"
    a: "Samsung'un DW5500MM kılavuzu uğultuyu makinenin düzenli kullanılmamasına bağlıyor: sık kullanmıyorsan contaları nemli tutmak için haftada bir doldurmayı ve geri boşaltmayı unutmaman gerekiyor. Uğultu düzenli kullanımda da sürüyorsa Samsung servisine başvur."
  - q: "Makine dengeli değilse ne yapmalıyım?"
    a: "Samsung'a göre dengesiz duran makine gürültü yapar ve dengeli olduğundan emin olunması gerekir. Dengeleme, ayaklardaki ayar vidalarıyla yapılır ve kılavuzun kurulum bölümünde anlatılır; bu iş alet gerektirdiği için yetkili servise ya da kurulumu yapan montöre bırak."
images:
  coverAlt: "Kapağı açık bir bulaşık makinesinde alt sepete tabakları aralıklı yerleştiren bir el, püskürtme kolu görünüyor"
---

Samsung bulaşık makinen çalışırken beklediğinden fazla ses çıkarıyor. Samsung'un Türkçe kullanım kılavuzları bu belirtiyi arıza tablosunda "**Gürültü**" ve "**Bulaşık makinesi çok gürültülü.**" satırlarıyla ele alıyor. Samsung'a göre seslerin bir kısmı normal; kalanların çoğu da bulaşıkların yerleştirilmesiyle ilgili ve evde düzeltilebilir. Bu yazıda önce Samsung'un normal saydığı sesleri, sonra kontrol sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Bulaşıklardaki kemik, çekirdek, kürdan, peçeteyi temizle → eşyalar sepette sabit mi, sepete küçük bir şey düşmüş mü → çarpan kol varsa bulaşıkları yeniden düzenle → püskürtücü başlıklarını tıkama → üst sepetsiz çalıştırma. Makine dengesizse ayar kurulum işidir; servise bırak.

## Samsung'a göre normal sesler

| Ses | Samsung'a göre |
|---|---|
| Yumuşak yiyecek ufalama ve deterjan haznesinin açılması | Normal |
| Dağıtıcı kapağı açıkken ve boşaltma pompası çalışırken çıkan ses | Normal |
| Dağıtıcı kapağı açıldığında ve boşaltmanın başında bip sesi (DW9000H) | Normal |

Bu sesler dışında bir takırtı, çarpma ya da "parçalanma" sesi duyuyorsan aşağıdaki sırayı dene.

## Adım adım: evde denenecekler

**1. Artıkları temizle.** Samsung'un DW8500AM kılavuzuna göre **kemik, meyve çekirdeği** gibi yiyecek artıklarını ve **kürdan, peçete** gibi atıkları bulaşıklardan temizle. Samsung'un uyarısı: kalan yiyecek ve çöp **gürültü yapabilir,** makinenin arızalanmasına ve bulaşıkların zarar görmesine yol açabilir.

**2. Eşyalar sepette sabit mi?** Samsung'un DW5500MM kılavuzuna göre ses, mutfak eşyalarının **sepetlerde sabit durmamasından** ya da **küçük bir bulaşığın sepetin içine düşmesinden** gelebilir. Her şeyin makinenin içinde sabit olduğundan emin ol, düşen küçük parçaları çıkar.

**3. Çarpan kol var mı?** Samsung'a göre **püskürtme kolu bulaşıklara çarpıyorsa** bir "parçalanma" sesi çıkar. Samsung'un çözümü: **bulaşıkları yeniden düzenle.** Kolların serbestçe dönebildiğinden emin ol.

**4. Püskürtücü başlıklarını tıkama.** Samsung'un DW8500AM kılavuzu bulaşıkları **püskürtücü başlıklarını ve deterjan çıkış noktasını tıkamayacak şekilde** yerleştirmeni istiyor; böylece hem yıkama ve kurutma daha iyi olur hem de **bulaşıklara çarparak oluşabilecek gürültü** önlenir. Bulaşıkları eğimli yerleştir ki su akıp aşağı insin.

**5. Üst sepeti takılı çalıştır.** Samsung'un uyarısı: makineyi **üst sepet olmadan çalıştırma;** aksi hâlde gürültü olabilir ve makine düzgün çalışmayabilir. Üst sepet çıkarılabildiği için onu **düzgün şekilde tak.**

## Uğultu ve denge

- **Motor uğulduyor:** Samsung'un DW5500MM kılavuzu bunu makinenin **düzenli kullanılmamasına** bağlıyor. Kılavuzun notu: makineyi sık kullanmıyorsan **contaları nemli tutmak için haftada bir doldurmayı ve geri boşaltmayı** unutma. Kılavuz bunun nasıl yapılacağını ayrıca tarif etmiyor; modeline uygun yol için kendi kılavuzuna bak.
- **Makine dengeli değil:** Samsung'a göre dengesiz duran makine gürültülü çalışır; makinenin **dengeli olduğundan emin olunmalı.** Kılavuzun kurulum bölümüne göre dengeleme, ayaklardaki **dengeleme vidalarıyla** yapılır ve cihaz **2°'den fazla eğimli olmamalıdır.** Bu ayar alet gerektirdiği için kendin yapma; kurulumu yapan montöre ya da yetkili servise bırak.

## Ne zaman servis?

⛔ Yukarıdaki beş adımdan sonra da ses sürüyorsa, makine dengesiz duruyorsa ya da uğultu düzenli kullanımda da geçmiyorsa **Samsung yetkili servisine** başvur. Samsung'un kılavuzu gürültü için kullanıcıya bu adımların dışında bir çözüm vermiyor; pompa, motor ya da iç parçalarla ilgili bir kontrol servisin işidir.

Makine ses yapmanın yanında iyi yıkamıyorsa Samsung'un sırası [Samsung bulaşık makinesi temiz yıkamıyor](/blog/samsung-bulasik-makinesi-temiz-yikamiyor/) yazısında; hiç çalışmıyorsa [Samsung bulaşık makinesi çalışmıyor](/blog/samsung-bulasik-makinesi-calismiyor/) yazısına bak. Ekranda bir bilgi kodu görüyorsan [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/) yazısından başla.

## Servisi aramadan önce iki dakikalık özet

1. Ses programın hangi aşamasında geliyor: yıkama, boşaltma, kurutma?
2. Ses takırtı ve çarpma mı, uğultu mu, bip mi?
3. Bulaşıklar yeniden düzenlenince ses değişti mi?
4. Makine ne sıklıkla kullanılıyor?
5. Makine sallanıyor ya da eğik duruyor mu?

Bu beşine cevabın varsa servise "makine ses yapıyor" yerine somut bir tablo anlatabilirsin.

---

**Kaynak künyesi.** Nedenler ve adımlar Samsung'un Türkçe DW5500MM, DW8500AM ve DW9000H bulaşık makinesi kullanım kılavuzlarından alınmıştır. Kılavuza özgü notlar hangi modele ait olduğu belirtilerek verilmiştir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Belirtiyi ve bulaşık makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
