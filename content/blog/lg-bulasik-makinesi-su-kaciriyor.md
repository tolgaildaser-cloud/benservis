---
title: "LG bulaşık makinesi su kaçırıyor"
description: "LG bulaşık makinesi su kaçırıyorsa LG'nin sırası: makinenin dengesi, deterjan köpüğü, püskürtücü kollar ve iki hortum bağlantısı."
slug: "lg-bulasik-makinesi-su-kaciriyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2. koşu 10:51, LG). Belge bu koşuda yeniden curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200, md5 yerel kopyayla aynı.
# Belge kimliği lg.com/tr DFC325HD.ABDPLTK ürün destek sayfasının kılavuz listesinden (www.lg.com/ncms/api/v1/support/proxy/retrieveManualSoftwareList?locale=TR). #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
# Kullanım tablosu (L s.63) "Cihazdan su kaçağı oluyor.": "Cihaz eğik olduğu için kapak kapanmamış olabilir. Bu durumda kaçak söz konusu olabilir. • Ayakları ayarlayarak hizalamayı kontrol edin.
#   / Boşaltma hortumunun hatalı montajı su kaçağına neden olabilir. • Boşaltma hortumunun bağlantı kısmını kontrol edin. / Güç kapalıysa kötü musluk bağlantısı nedeniyle su kaçağı söz konusu olabilir. • Su besleme hortumunun bağlantısını kontrol edin."
# Hata tablosu (L s.61) "AE  Su kaçağı sorunu • Aynı sorun yeniden meydana gelirse servisi çağırın."
# Diğer: L s.17 seviye kontrolü (üst plakayı çapraz it; sallanırsa ayakları tekrar ayarla) + NOT doğru hizada kapak açılırken meyil/basıklık/sürtünme sesi olmamalı · L s.14 yükseklik ayarı anahtarla, montaj yetkili servis elemanınca
#   · L s.20 test: hizalıysa kapak sorunsuz ve gürültüsüz açılıp kapanmalı · L s.21 test: "Doğru şekilde çalıştığını ve kaçak olup olmadığını kontrol etmek üzere cihazı Durulama programında çalıştırın."
#   · L s.48 "Hatalı deterjan cihazın çalışma sırasında köpükle dolmasına neden olabilir. Aşırı köpük yıkama sonuçlarını azaltabilir ve cihazdan kaçak olmasına yol açabilir." · "Çok fazla deterjan kullanılırsa çok fazla köpük oluşabilir. Köpüklerin sızdırılmasına ..."
#   · L s.49 "Cihazda asla sıvı bulaşık deterjanı kullanmayın." · L s.26 "Parlatıcı, hazneden çıkarsa silin. Yoksa, çok fazla köpük oluşabilir"
#   · L s.58 DİKKAT: "Engeller veya bakımsızlık nedeniyle serbest şekilde dönemeyen kollar kapaktan su sızmasına neden olarak arızaya veya maddi hasara yol açabilir." · L s.22 bulaşıklar püskürtücü kolları engellemesin
#   · L s.59 NOT: "Kaçak varsa, su besleme hortumunun doğru şekilde bağlanıp bağlanmadığı kontrol edilmelidir." · "Su besleme vanasını asla aşırı sıkmayın ya da sıkmak için mekanik aletler kullanmayın."
#   · L s.19 su besleme hortumunda elektrik kablosu var; kesilmemeli, sökülmemeli, bükülmemeli · L s.20 musluk dişlerine sızdırmaz bant (kurulum)
# BİLEREK YAZILMAYANLAR: ayak ayarı adımı (L s.14: anahtarla → alet kuralı) · hortum sökme/değiştirme, musluk dişine bant sarma (kurulum işi) · iğneyle kol deliği açma (alet kuralı)
#   · AE için kullanıcı adımı (belgede yalnız servis yönlendirmesi) · conta/kapak contası teşhisi (belgede yok) · başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-bulasik-makinesi-su-kaciriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru bir bez", "El feneri (isteğe bağlı)"]
steps:
  - "Makinenin üst plakasını çapraz iterek sallanıp sallanmadığını kontrol et."
  - "Kapağı birkaç kez açıp kapat; eğilmeden, sürtünmeden ve takılmadan kapandığını gör."
  - "Deterjan gözünde sıvı el bulaşık deterjanı kullanmadığından emin ol, yalnız bulaşık makinesi deterjanı koy."
  - "Deterjanı ölçülü koy ve hazneden taşan parlatıcıyı sil."
  - "Bulaşıkları püskürtücü kolların serbestçe dönmesini engellemeyecek biçimde yerleştir."
  - "Boşaltma hortumunun bağlantı kısmına bak; ıslaklık ya da gevşeklik varsa not al."
  - "Su besleme hortumunun musluk bağlantısını kontrol et; bağlantıyı alet kullanarak sıkma."
faq:
  - q: "LG bulaşık makinesi neden su kaçırır?"
    a: "LG'nin DFC325HD kullanıcı el kitabındaki 'Cihazdan su kaçağı oluyor' satırı üç neden sayıyor: cihaz eğik olduğu için kapak tam kapanmamış olabilir, boşaltma hortumu hatalı monte edilmiş olabilir ya da musluk bağlantısı kötü olabilir. Kılavuzun başka bölümleri aşırı köpüğü ve serbest dönemeyen püskürtücü kolları da kaçak nedeni olarak anıyor."
  - q: "Makine kapalıyken de altından su geliyor. Bu ne demek?"
    a: "LG'nin tablosunda bunun için ayrı bir satır var: güç kapalıyken kötü musluk bağlantısı nedeniyle su kaçağı olabilir. LG'nin istediği, su besleme hortumunun bağlantısını kontrol etmek. Kılavuz, su besleme vanasının aşırı sıkılmamasını ve sıkmak için mekanik alet kullanılmamasını da yazıyor."
  - q: "Ekranda AE yazıyor. Ne yapmalıyım?"
    a: "LG'nin hata tablosunda AE'nin karşılığı 'Su kaçağı sorunu'. Bu kod için kılavuzda kullanıcıya dönük bir adım yok; LG'nin yönlendirmesi, aynı sorun yeniden meydana gelirse servisi çağırmak."
  - q: "Deterjan su kaçağına neden olabilir mi?"
    a: "LG'ye göre olabilir. Kılavuza göre hatalı deterjan makinenin çalışırken köpükle dolmasına yol açabilir ve aşırı köpük cihazdan kaçağa neden olabilir; çok fazla deterjan da köpüklerin dışarı sızmasına yol açabilir."
images:
  coverAlt: "Mutfak tezgâhının altındaki bulaşık makinesinin kapağının önünde, zemindeki küçük su birikintisi"
---

Bulaşık makinesinin önünde, mutfak zemininde küçük bir su birikintisi buldun. LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabında bu belirtinin kendi satırı var: **"Cihazdan su kaçağı oluyor."** LG bu satırda üç neden sayıyor: makinenin **eğik durması** yüzünden kapağın tam kapanmaması, **boşaltma hortumunun** hatalı montajı ve makine kapalıyken bile su sızdırabilen **kötü musluk bağlantısı.** Kılavuzun başka bölümleri buna iki neden daha ekliyor: **aşırı köpük** ve **serbest dönemeyen püskürtücü kollar.** Bu yazıda önce makinenin kendisine, sonra içine koyduklarına, en son da hortumlara bakıyoruz. Kaynak tek bir modelin kılavuzu; tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Üst plakaya çapraz bastır, makine sallanıyor mu bak → kapak düzgün kapanıyor mu → sıvı el bulaşık deterjanı yok, deterjan ölçülü, taşan parlatıcı silinmiş → bulaşıklar kolları engellemiyor → boşaltma hortumu bağlantısına ve musluk bağlantısına bak. Makine kapalıyken de su geliyorsa ilk şüpheli musluk bağlantısı. Ayak ayarı, hortum değişimi ve AE kodu servise.

## Adım adım: evde denenecekler

**1. Makine dengede mi?** LG'nin kaçak satırındaki ilk neden: **cihaz eğik olduğu için kapak kapanmamış olabilir; bu durumda kaçak söz konusu olabilir.** Kılavuzun kurulum bölümündeki kontrol basit: **üst plakayı çapraz it;** makine sallanıyorsa ayaklar yeniden ayarlanmalı. Kontrolü sen yapabilirsin. Ayarın kendisi ise kılavuza göre **anahtarla** yapılıyor ve LG montajın **yetkili servis elemanınca** yapılmasını istiyor; sallanma varsa bunu kurulumu yapana ya da servise bırak.

**2. Kapak nasıl kapanıyor?** LG'nin kurulum bölümüne göre doğru hizalanmış bir makinede kapak açılırken **meyil, basıklık ya da sürtünme sesi** olmamalı; kapak **sorunsuz ve gürültüsüz** açılıp kapanmalı. Kapağı birkaç kez aç-kapa. Bir tarafa düşüyorsa, sürtünüyorsa ya da yerine oturmuyorsa birinci adımdaki hizalama sorununun işareti olabilir.

**3. Deterjanın türüne bak.** LG'nin deterjan bölümündeki uyarı kaçakla doğrudan ilgili: **hatalı deterjan cihazın çalışma sırasında köpükle dolmasına** neden olabilir ve **aşırı köpük cihazdan kaçak olmasına** yol açabilir. Kılavuz **sıvı bulaşık deterjanının asla** kullanılmamasını istiyor; yalnız bulaşık makinesinde kullanılabilen deterjan koy. LG'nin hata tablosunda **bE** aşırı köpük oluşumunu gösteriyor; ekranda bu kod da varsa onun kendi sırası kardeş rehberimiz [LG bulaşık makinesi bE hatası](/blog/lg-bulasik-makinesi-be-hatasi/) sayfasında.

**4. Miktarı ve parlatıcıyı kontrol et.** Doğru deterjanın fazlası da sorun: LG'ye göre **çok fazla deterjan kullanılırsa çok fazla köpük oluşabilir** ve bu **köpüklerin sızdırılmasına** neden olabilir. Parlatıcıyı doldururken taşırdıysan sil; kılavuza göre hazneden çıkan parlatıcı silinmezse **çok fazla köpük** oluşabiliyor.

**5. Kolların önünü aç.** LG'nin bakım bölümündeki uyarı: **engeller veya bakımsızlık nedeniyle serbest şekilde dönemeyen kollar kapaktan su sızmasına** yol açabilir. Kullanım bölümü de bulaşıkların **püskürtücü kolları engellememesini** istiyor. Uzun tepsi, tava sapı ya da alt raftan sarkan bir eşya kolun yolunu kesiyor mu, bak; gerekirse yerini değiştir.

**6. Boşaltma hortumunun bağlantısına bak.** Tablodaki ikinci neden: **boşaltma hortumunun hatalı montajı su kaçağına neden olabilir** → **boşaltma hortumunun bağlantı kısmını kontrol et.** Kurulum bölümüne göre bu hortum lavabo altında gidere bağlanıyor; bağlantı noktasında ıslaklık var mı, bak. Bağlantı gevşek ya da hatalı takılıysa yeniden montajı kurulumu yapana bırak.

**7. Musluk bağlantısına bak.** Üçüncü neden, makine kapalıyken bile sızan su için: **güç kapalıysa kötü musluk bağlantısı nedeniyle su kaçağı** olabilir → **su besleme hortumunun bağlantısını kontrol et.** Bakım bölümündeki not da aynı: **kaçak varsa su besleme hortumunun doğru bağlanıp bağlanmadığı** kontrol edilmeli. LG'nin uyarısı: su besleme vanasını **asla aşırı sıkma** ve sıkmak için **mekanik alet kullanma.**

## Kontrolden sonra deneme

LG'nin kurulum bölümü, makinenin doğru çalıştığını ve **kaçak olup olmadığını** görmek için makinenin **Durulama** programında çalıştırılmasını öneriyor. Yukarıdaki kontrolleri bitirdikten sonra makineyi Durulama'da çalıştır ve önünü, altını ve bağlantıları izle.

Su besleme hortumuna kendin müdahale etme: LG'ye göre bu hortumun içinde **elektrik kablosu** var ve hortumun **kesilmemesi, sökülmemesi, çekilmemesi ya da bükülmemesi** gerekiyor. Markadan bağımsız nedenler için [bulaşık makinesi su kaçırıyor](/blog/bulasik-makinesi-su-kaciriyor/) yazısına bakabilirsin.

## Ne zaman servis

- Ekranda **AE** yazıyorsa: LG'nin hata tablosunda AE'nin karşılığı **"Su kaçağı sorunu"** ve yönlendirme **aynı sorun yeniden meydana gelirse servisi çağırın.** Bu kod için kılavuzda kullanıcıya dönük bir adım yok.
- Makine sallanıyorsa ya da kapak eğri kapanıyorsa ayak ayarı için.
- Hortum bağlantısı gevşek, çatlak ya da hatalı takılıysa.
- Deterjan doğru, kollar serbest, bağlantılar kuru olduğu hâlde Durulama denemesinde su geliyorsa.

⛔ **Kendin-çöz sınırı burada biter.** Kontrol, deterjan ve yerleştirme kullanıcıya; ayak ayarı, hortum montajı ve makinenin içi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Su makine çalışırken mi, kapalıyken de mi geliyor?
2. Üst plakaya çapraz bastırınca makine sallanıyor mu?
3. Ekranda AE ya da bE var mı?
4. Hangi deterjanı ne kadar kullanıyorsun?
5. Islaklık önde, kapak altında mı; yoksa arkada, hortum tarafında mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
