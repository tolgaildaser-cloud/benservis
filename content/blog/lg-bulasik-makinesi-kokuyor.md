---
title: "LG bulaşık makinesi kokuyor"
description: "LG bulaşık makinesi kokuyorsa LG'nin üç nedeni: içeride kalan atık su, filtrede gıda artığı, uzun bekleyen bulaşık. Turbo, sirke ve temizlik."
slug: "lg-bulasik-makinesi-kokuyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2. koşu 10:51, LG). Belge bu koşuda yeniden curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200, md5 yerel kopyayla aynı.
# Belge kimliği lg.com/tr DFC325HD.ABDPLTK ürün destek sayfasının kılavuz listesinden (www.lg.com/ncms/api/v1/support/proxy/retrieveManualSoftwareList?locale=TR). #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
# Kullanım tablosu (L s.65) "Koku": "Önceki program tamamlanmadan durdurulmuş ve atık su cihazın içinde kalmış. • Gücü açın, atık suyu boşaltmak için İptal programı seçeneğini çalıştırın ve ardından cihaz boş durumdayken
#   deterjan kullanarak Turbo programı çalıştırın. / Ünitenin alt kısmında ya da filtrede gıda maddesi var. • Kullanım kılavuzunun BAKIM bölümüne uygun şekilde filtreyi ve cihazın içini temizleyin.
#   / Ünitenin içinde yıkanmamış bulaşıklar uzun bir süre tutulmuş. • Bulaşık makinesinde yıkanabilir bir bardak ya da kabın içine bir fincan ölçeğinde beyaz sirke koyarak üst rafa yerleştirin ve programı çalıştırın.
#   (Sirke bir asittir ve sürekli kullanılması halinde cihazınıza hasar verebilir.)"
# Diğer: L s.29 İptal: BAŞLAT 3 sn; pompa çalışır, program iptal, boşaltma bitince güç kapanır · L s.30 Turbo (hafif kirli, bir saatte) · L s.30 Durulama: "Bulaşıkların durulanması cihazda koku oluşmasını önler." Eko 3 sn, deterjan yok
#   · L s.30 Makine Temizleme: bulaşıksız; "Atık kir, koku, beyaz nokta, tortu ve diğer pislikleri temizler."; sitrik asit ya da başka temizlik maddesi · L s.28 Makine Temizleme simgesi "her 30 kullanımda"
#   · L s.55 iç temizlik: yumuşak nemli bez/sünger; dar boşluklara sıkışan gıda atıklarını silerek temizle; iki haftada bir; uzun süre kullanılmayacaksa Turbo ya da Makine Temizleme ile tazele
#   · L s.56-57 filtre temizliği (alt raf, iç filtre saat yönünün tersi, akan su + yumuşak fırça, klik sesi) + DİKKAT "Temizlenmeyen gıda atıkları kötü kokuya neden olabilir."
#   · L s.7 güvenlik: "Cihazdan tuhaf bir ses, koku ya da duman geldiğini fark ederseniz derhal elektrik fişini çıkarın ve bir LG Electronics müşteri hizmetleri merkeziyle iletişim kurun."
#   · L s.59 dönemsel bakım: sıcak aylarda uzun süre uzaktaysan su vanasını kapat, güç kablosunu çıkar, "Kokunun önlenmesi için filtre, tambur ve hazneyi temizleyin." · L s.19 ayrı gidere bağlantı hava geçirmez değilse koku oluşabilir (kurulum)
# BİLEREK YAZILMAYANLAR: püskürtücü kol deliğini iğne/keskin aletle açma (alet kuralı) · gider bağlantısını değiştirme (kurulum işi; gövdede anıldı) · çamaşır suyu/karbonat gibi belgede olmayan temizlik maddeleri
#   · sirkeyi düzenli kullanma önerisi (belge sürekli kullanımın hasar verebileceğini söylüyor) · başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-bulasik-makinesi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (program süreleri hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bir fırça", "Yumuşak nemli bez ya da sünger", "Beyaz sirke", "Bulaşık makinesinde yıkanabilir bir bardak"]
steps:
  - "Önceki program yarıda kaldıysa makineyi aç ve BAŞLAT düğmesini 3 saniye basılı tutup İptal ile atık suyu boşalt."
  - "Makine boşken deterjan koyup Turbo programını çalıştır."
  - "Filtreleri çıkar, akan su altında yumuşak bir fırçayla temizle ve klik sesiyle yerine tak."
  - "Makinenin içini yumuşak, nemli bir bez ya da süngerle sil; dar boşluklarda kalan gıda artıklarını al."
  - "Yıkanmamış bulaşıklar uzun süre içeride beklediyse bir fincan beyaz sirkeyi bir bardağa koyup üst rafa yerleştir ve programı çalıştır."
  - "Bulaşıkları hemen yıkamayacaksan Durulama programıyla durula."
  - "Makine boşken, istersen sitrik asit ekleyerek Makine Temizleme programını çalıştır."
faq:
  - q: "LG bulaşık makinesi neden kokar?"
    a: "LG'nin DFC325HD kullanıcı el kitabındaki koku satırı üç neden sayıyor: önceki program tamamlanmadan durdurulmuş ve atık su içeride kalmış; ünitenin alt kısmında ya da filtrede gıda maddesi var; yıkanmamış bulaşıklar uzun süre makinede tutulmuş."
  - q: "Sirkeyi her yıkamada kullanabilir miyim?"
    a: "LG bunu önermiyor. Kılavuz, sirkenin bir asit olduğunu ve sürekli kullanılması hâlinde cihaza hasar verebileceğini yazıyor. LG sirkeyi, yıkanmamış bulaşıkların uzun süre içeride kalmasından gelen koku için bir fincan ölçüsünde öneriyor."
  - q: "Makine Temizleme programı kokuya iyi gelir mi?"
    a: "LG'ye göre Makine Temizleme programı cihazın içini temizlemek için ve içeride bulaşık yokken kullanılıyor; atık kir, koku, beyaz nokta ve tortuyu temizliyor. Daha etkili sonuç için sitrik asit ya da başka bir temizlik maddesi eklenebiliyor. DFC325HD'de bu programın hatırlatma simgesi her 30 kullanımda yanıyor."
  - q: "Tatile çıkarken ne yapmalıyım?"
    a: "LG'nin dönemsel bakım notuna göre sıcak aylarda uzun süre evden uzak kalacaksan su vanasını kapat, güç kablosunu çıkar ya da devre kesiciyi kapat; kokuyu önlemek için de filtreyi, tamburu ve hazneyi temizle."
images:
  coverAlt: "Kapağı açık, boş bir bulaşık makinesinin tabanındaki filtre yuvası ve üst rafta duran içi beyaz sirkeyle dolu bir bardak"
---

Kapağı açınca yüzüne ekşi, bayat bir koku çarpıyorsa LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabında bunun için ayrı bir satır var: **"Koku."** LG bu satırda üç ayrı neden sayıyor ve her birine ayrı bir çözüm veriyor: yarıda kalmış bir programdan içeride **atık su** kalmış olabilir, **filtrede ya da tabanda gıda artığı** birikmiş olabilir ya da **yıkanmamış bulaşıklar** makinede uzun süre beklemiş olabilir. Bu yazıda bu üç nedeni LG'nin kendi sırasıyla ele alıyoruz, sonra kokunun geri gelmemesi için kılavuzdaki programları anlatıyoruz. Kaynak tek bir modelin kılavuzu; tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Program yarıda kaldıysa İptal ile atık suyu boşalt → boş makinede deterjanla Turbo → filtreleri akan suyla temizle → içini nemli bezle sil → bulaşık uzun beklediyse üst rafta bir bardak beyaz sirkeyle program → hemen yıkamayacağın bulaşıkta Durulama → arada bir boş makinede Makine Temizleme. Sirke bir asit; LG sürekli kullanmayı önermiyor.

## Adım adım: evde denenecekler

**1. İçeride atık su var mı?** LG'nin koku satırındaki ilk neden: **önceki program tamamlanmadan durdurulmuş ve atık su cihazın içinde kalmış.** Çözümün ilk yarısı: **gücü aç ve atık suyu boşaltmak için İptal'i çalıştır.** Kontrol paneli bölümüne göre İptal için **BAŞLAT düğmesini 3 saniye basılı tut;** boşaltma pompası çalışır, program iptal olur ve boşaltma bitince güç kendiliğinden kapanır.

**2. Boş makinede Turbo.** Aynı çözümün ikinci yarısı: atık su boşaldıktan sonra **cihaz boş durumdayken deterjan kullanarak Turbo programı** çalıştır. Turbo, LG'nin tarifine göre hafif kirli bulaşıkları bir saatte temizleyen program.

**3. Filtreleri temizle.** İkinci neden: **ünitenin alt kısmında ya da filtrede gıda maddesi var.** LG'nin çözümü, kılavuzun bakım bölümüne göre filtreyi ve cihazın içini temizlemek. Bakım bölümündeki uyarı da kokuyu açıkça anıyor: **temizlenmeyen gıda atıkları kötü kokuya neden olabilir.** Kısaca: alt rafı çıkar, iç filtreyi saat yönünün tersine çevirip iç filtreyle paslanmaz çelik filtreyi çıkar, ikisini **akan su altında yumuşak bir fırçayla** temizle ve iç filtreyi **klik sesiyle** oturana kadar geri tak. Paslanmaz çelik filtrenin kenarları keskin; tutarken dikkat et. Resimli anlatım için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) rehberine bakabilirsin.

**4. İçini sil.** LG'nin bakım bölümüne göre makinenin içi **yumuşak ve nemli bir bez ya da süngerle** düzenli olarak silinmeli. Kılavuz, yıkama bittikten sonra gıda atıklarının **cihazın içindeki dar boşluklara sıkışabileceğini** ve bunların da silinerek temizlenmesini yazıyor. Tiner, aseton gibi çözücüler kullanma; LG bunları yasaklıyor.

**5. Bulaşık uzun beklediyse sirke.** Üçüncü neden: **ünitenin içinde yıkanmamış bulaşıklar uzun bir süre tutulmuş.** LG'nin çözümü: bulaşık makinesinde yıkanabilir bir **bardağa ya da kaba bir fincan ölçüsünde beyaz sirke** koy, **üst rafa** yerleştir ve programı çalıştır. Aynı satırdaki parantezli not önemli: **sirke bir asittir ve sürekli kullanılması hâlinde cihaza hasar verebilir.** Yani bu bir kerelik çözüm, alışkanlık değil.

**6. Hemen yıkamayacaksan durula.** Kokunun tekrar oluşmasını önlemenin LG'nin kılavuzundaki yolu **Durulama** programı. LG'ye göre bu program hemen yıkanmayacak bulaşıklara hızlı bir durulama uyguluyor ve **bulaşıkların durulanması cihazda koku oluşmasını önlüyor.** DFC325HD'de Durulama, **Eko düğmesine 3 saniye** basılı tutularak açılıyor; bu programda deterjan kullanılmıyor.

**7. Arada bir Makine Temizleme.** LG'nin **Makine Temizleme** programı cihazın içini temizlemek için ve içeride **bulaşık yokken** kullanılıyor. Kılavuza göre bu program **atık kir, koku, beyaz nokta, tortu** ve diğer pislikleri temizliyor; daha etkili sonuç için **sitrik asit ya da başka bir temizlik maddesi** eklenebiliyor. DFC325HD'de ekrandaki Makine Temizleme simgesi her 30 kullanımda bir hatırlatma yapıyor.

## Uzun süre kullanmayacaksan

LG'nin dönemsel bakım notu kokuyu ayrıca anıyor: **sıcak aylarda uzun süre uzakta olacaksan** su vanasını kapat, güç kablosunu çıkar ya da devre kesiciyi kapat ve **kokunun önlenmesi için filtreyi, tamburu ve hazneyi temizle.** Makine uzun süre kullanılmadıysa kılavuza göre deterjanla **Turbo ya da Makine Temizleme** programı çalıştırarak içini tazeleyebilirsin.

## Kurulumla ilgili bir not

LG'nin kurulum bölümüne göre boşaltma hortumu ayrı bir gidere bağlandığında bağlantının **hava geçirmez** olması gerekiyor; **aksi hâlde koku oluşabilir.** Yukarıdaki adımlardan sonra koku hâlâ gider tarafından geliyorsa bu bir kurulum konusu; bağlantıya kendin müdahale etme, kurulumu yapan kişiye ya da yetkili servise göster.

Markadan bağımsız nedenler için [bulaşık makinesi kokuyor](/blog/bulasik-makinesi-kokuyor/) yazısına bakabilirsin. Koku tabanda kalan suyla birlikte geliyorsa [LG bulaşık makinesi su boşaltmıyor](/blog/lg-bulasik-makinesi-su-bosaltmiyor/) rehberine geç.

## Ne zaman servis

- Atık su boşaltıldığı, filtreler ve içi temizlendiği, Turbo ve Makine Temizleme çalıştırıldığı hâlde koku sürüyorsa yetkili LG servisine başvur.
- Makine İptal ile suyu boşaltamıyorsa ya da ekranda bir hata kodu çıkıyorsa koku ikinci planda kalır; kodu not al ve servise öyle anlat.
- Koku yemek artığı ya da bekleyen su kokusu değil de tuhaf bir kokuysa ya da duman görüyorsan: LG'nin güvenlik talimatına göre **derhal elektrik fişini çıkar** ve LG müşteri hizmetleriyle iletişime geç.

⛔ **Kendin-çöz sınırı burada biter.** Programlar, filtre ve iç temizlik kullanıcıya; gider bağlantısı ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Son program yarıda mı kaldı, içeride su var mıydı?
2. Filtrelerden gıda artığı çıktı mı?
3. Bulaşıklar makinede kaç gün bekledi?
4. Turbo ve Makine Temizleme sonrası koku azaldı mı?
5. Koku makinenin içinden mi, gider tarafından mı geliyor?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
