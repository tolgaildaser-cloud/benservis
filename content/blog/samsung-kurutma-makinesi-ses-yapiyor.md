---
title: "Samsung kurutma makinesi ses yapıyor"
description: "Samsung kurutma makinesi çok gürültülüyse kılavuzun sırası: kazandaki metal nesneler, tiftik filtresi, zemin ve ayaklar. Hangi uğultu normal?"
slug: "samsung-kurutma-makinesi-ses-yapiyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, Haier/Samsung koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adından
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com) indirildi, HTTP 200.
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-3eki/ (MD5.txt) · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  S) Kılavuz ısı pompalı kurutucu "SimpleUX" DC68-04268H-03 (AH) TR (DV90T5240AW/AH), 60 s., md5 7d07cd0444389e478b7625ea26e2134a
#     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90T5240AW&CttFileID=8770643&CDCttType=UM&VPath=UM%2F202209%2F20220917120549513%2FU-PJT_DRYER_SimpleUX_DC68-04268H-03_AH_TR.pdf
#  D) Kılavuz DV5000T DC68-04209V-02 TR (DV90TA040AE/AH), 68 s., md5 af744046e6c457b037ef2e270349d072
#     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90TA040AE&CttFileID=8770640&CDCttType=UM&VPath=UM%2F202209%2F20220917120230960%2FDV5000T_DC68-04209V-02_TR.pdf
# Belirti satırları:
#   S s.48 "Kurutucu çok gürültülü." → "Bozuk paraları, gevşek düğmeleri, çivileri ve diğer nesneleri arayın ve hemen çıkarın." · "Tiftik filtresini kontrol edin. Tiftik filtresinin içine sıkışmış tüm öğeleri çıkarın."
#     · "Kurutma makinesinin zeminde dengeli ve sağlam bir şekilde durduğundan emin olun." · "Kurutma makinesi kazan ve fandaki hava nedeniyle uğultu çıkarabilir. Bu normaldir."
#   D s.51 "Kurutma makinesi çok gürültülü" → "Bozuk para, düğme, çakmak vb. olup olmadığını kontrol edin." · dengeli ve sağlam · kazan ve fandaki hava → uğultu, normal.
# Diğer: S s.10 / s.15 "garip sesler, yanık kokusu veya duman" → gücü kapat / fişi hemen çek, servis · S s.26 ADIM 2 cepleri boşalt; metal nesneler (bozuk para, iğne, toka) kazana ve çamaşıra zarar
#   verebilir; fermuar ve mandal kancalarını çek; düğmeli/işlemeli çamaşırı ters çevir · S s.17 ADIM 2 dengeleme ayakları (seviye ile kontrol; ayakları sola/sağa çevir; zeminde sağlam)
#   + NOT "Dengeleme bacağını gerektiğinden fazla uzatmak, kurutma makinesinin titremesine yol açabilir." · D s.23 aynı NOT · S s.20 / D s.27 dengeleme bacaklarını çıkarmayın
#   · S s.44-46 tiftik filtresi (yukarı çek; lastik conta çıkarılmaz; sallamayın, vurmayın; aşırı güçle açma) · S s.44 temizlikten önce fiş · S s.49 servis cümlesi.
# BİLEREK YAZILMAYANLAR: ayak ayarı numaralı adıma alınmadı (kılavuz seviye aletiyle kontrol istiyor; gövdede kılavuza yönlendirildi) · "tak tak", "tıkırtı" gibi ses türlerine göre teşhis (belgede yok)
#   · rulman/kayış/fan motoru gibi parça tahmini (belgede yok) · çamaşır makinesinin nakliye cıvatası (kurutucu belgesinde yok) · başka modellere genelleme.
# Alıntı denetim tablosu: samsung-kurutma-makinesi-ses-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makineyle gelen temizleme fırçası"]
steps:
  - "Kurutma makinesini durdur ve fişini prizden çek."
  - "Kazanın içinde bozuk para, gevşek düğme, çivi, çakmak gibi nesneleri ara ve hemen çıkar."
  - "Tiftik filtresini yukarı çekerek çıkar ve içine sıkışmış tüm öğeleri al."
  - "Filtreyi fırçayla temizle, sallamadan ve vurmadan yerine düzgün tak."
  - "Kurutucunun zeminde dengeli ve sağlam durduğunu kontrol et."
  - "Bir sonraki yükten önce cepleri boşalt, fermuarları ve mandal kancalarını kapat."
faq:
  - q: "Samsung kurutma makinesi neden çok ses yapıyor?"
    a: "Samsung'un iki Türkçe kılavuzu da 'çok gürültülü' satırında üç sebep sayıyor: kazanın içinde kalmış bozuk para, düğme, çivi ya da çakmak gibi nesneler, tiftik filtresine sıkışmış öğeler ve kurutucunun zeminde dengeli ve sağlam durmaması. Aynı satır bir de normal sesi tarif ediyor: kazan ve fandaki hava nedeniyle çıkan uğultu."
  - q: "Kurutucunun uğultusu normal mi?"
    a: "Samsung'a göre evet: kurutma makinesi kazan ve fandaki hava nedeniyle uğultu çıkarabilir ve bu normaldir. Garip bir ses, yanık kokusu ya da duman ise normal değil; o durumda kılavuzun talimatı fişi hemen çekip servis merkezine başvurmak."
  - q: "Ayakları ayarlamak sesi azaltır mı?"
    a: "Samsung kurutucunun zeminde dengeli ve sağlam durmasını istiyor; kurulum bölümünde dengeleme ayakları sola ya da sağa çevrilerek yükseklik ayarlanıyor ve seviye ile kontrol ediliyor. Kılavuzun notu önemli: dengeleme bacağını gerektiğinden fazla uzatmak kurutma makinesinin titremesine yol açabilir. Dengeleme bacaklarını da çıkarma."
  - q: "Ceplerde kalan bozuk para kurutucuya zarar verir mi?"
    a: "Samsung'un kurutma kılavuzu cepleri boşaltmanı istiyor: giysilerin üzerindeki bozuk para, iğne ve toka gibi metal nesneler kazana ve diğer çamaşırlara zarar verebilir. Kurutmadan önce eşyalara yapışmış metal nesneleri çıkar, fermuarları ve mandal kancalarını çek."
images:
  coverAlt: "Kapağı açık kurutma makinesinin kazanından avuç içine alınmış birkaç bozuk para ve bir düğme; yanında çıkarılmış tiftik filtresi"
---

Kurutma makinesi çalışırken tıkırtı, takırtı ya da alışılmadık bir gürültü çıkarıyor. Samsung'un ısı pompalı kurutucular için Türkçe kılavuzunda bu durumun satırı **"Kurutucu çok gürültülü."** Satırın ilk maddesi en sık rastlanan sebebi gösteriyor: **"Bozuk paraları, gevşek düğmeleri, çivileri ve diğer nesneleri arayın ve hemen çıkarın."** DV5000T kılavuzu listeye **çakmağı** da ekliyor. Satırın son maddesi ise her sesin arıza olmadığını hatırlatıyor. Aşağıdaki sıra bu satırı ve kılavuzların kurulum ile bakım bölümlerini izliyor. Kaynak DV90T5240AW ve DV5000T (DV90TA040AE) kılavuzları; parça adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Garip ses yanık kokusu ya da dumanla birlikteyse fişi hemen çek, servis. Değilse: durdur, fişi çek → kazanda metal nesne ara → tiftik filtresine sıkışan öğeleri al → filtreyi temizleyip düzgün tak → kurutucu zeminde dengeli mi bak → bir sonraki yükte cepleri boşalt. Hafif uğultu Samsung'a göre normal.

## Önce sesin türüne bak

Samsung'un kılavuzu iki durumu ayırıyor:

- **Normal uğultu:** Kurutma makinesi **kazan ve fandaki hava nedeniyle** uğultu çıkarabilir. Samsung'a göre bu normaldir.
- **Garip ses, yanık kokusu ya da duman:** Güvenlik bölümündeki talimat: kurutucunun **fişini prizden hemen çek** ve en yakın Samsung servis merkezine başvur. Bu durumda aşağıdaki adımlara geçme.

## Adım adım: evde denenecekler

**1. Durdur ve fişi çek.** Kazana ve filtreye elini sokmadan önce makineyi durdur. Samsung'un temizlik uyarısı da aynı: işlemden önce **güç kablosunu fişten çıkar.**

**2. Kazanı kontrol et.** Kılavuzun "çok gürültülü" satırındaki ilk madde: **bozuk para, gevşek düğme, çivi** ve benzeri nesneleri ara ve hemen çıkar. DV5000T kılavuzu **çakmağı** da sayıyor.

**3. Tiftik filtresine sıkışanları al.** Satırın ikinci maddesi: tiftik filtresini kontrol et ve **içine sıkışmış tüm öğeleri** çıkar. Filtrenin üst kısmını tutup **yukarı çekerek** çıkar; lastik contayı çıkarma.

**4. Filtreyi temizleyip düzgün tak.** Dış filtreyi aç, iç filtreyi çıkar, tiftiği alıp **temizleme fırçasıyla** temizle. Samsung'un uyarısı: filtreyi temizlerken ya da çıkarırken **sallama ve vurma**; dikkatsizce ve aşırı güçle açmak filtreye zarar verebilir. İç filtreyi dış filtrenin içine koyup yerine tak.

**5. Zemine bak.** Satırın üçüncü maddesi: kurutma makinesinin **zeminde dengeli ve sağlam** durduğundan emin ol.

**6. Cepleri boşaltmayı alışkanlık yap.** Kılavuzun kurutma hazırlığı bölümü sesin kaynağını baştan kesiyor: **cepleri boşalt;** bozuk para, iğne ve toka gibi metal nesneler kazana ve diğer çamaşırlara zarar verebilir. Kurutmadan önce eşyalara yapışmış metal nesneleri çıkar, **fermuarları ve mandal kancalarını** kapat; düğmeli ya da işlemeli giysileri ters çevir. Fişi tak ve programı yeniden başlat.

## Kurutucu dengeli değilse: dengeleme ayakları

Samsung'un kurulum bölümüne göre kurutucu düz değilse yükseklik **dengeleme ayakları sola ya da sağa çevrilerek** ayarlanır; seviye yan yana ve önden arkaya bir **seviye** ile kontrol edilir ve sonunda makinenin zeminde sağlam durduğundan emin olunur. Kılavuzun iki notu var:

- Dengeleme bacağını **gerektiğinden fazla uzatmak** kurutma makinesinin titremesine yol açabilir.
- Kurutma makinesinin ayarlanabilir dengeleme bacaklarını **çıkarma.**

Ayarı kendi modelinin kılavuzundaki kurulum bölümüne göre yap.

Çamaşır makinesindeki gürültünün Samsung'a özgü anlatımı [Samsung çamaşır makinesi ses ve titreşim](/blog/samsung-camasir-makinesi-ses-titresim/) yazısında. Kurutucu bakımının genel anlatımı için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazısına bakabilirsin.

## Ne zaman servis

Kazandaki nesneler, tiftik filtresi ve makinenin zemine oturması kullanıcıya aittir. **Garip ses yanık kokusu ya da dumanla birlikteyse** Samsung'un talimatı tek: fişi hemen çek ve servis merkezine başvur. Gürültü bu adımlardan sonra da sürüyorsa kılavuzun tablo altındaki cümlesi geçerli: **sorun devam ederse yerel bir Samsung servis merkezine başvur.**

⛔ **Kendin-çöz sınırı burada biter.** Bakım kapakları dışında bir paneli açmak, kazanı ya da fanı sökmek kullanıcı işi değildir.

## Servisi aramadan önce iki dakikalık özet

- Ses sürekli bir uğultu mu, yoksa tıkırtı ya da takırtı mı?
- Sesle birlikte yanık kokusu ya da duman var mı?
- Kazanda ya da tiftik filtresinde bir nesne buldun mu?
- Kurutucu zeminde dengeli ve sağlam duruyor mu?
- Ses yalnız belli bir yükte mi çıkıyor?

Bu sorulara cevabın varsa servise "ses yapıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
