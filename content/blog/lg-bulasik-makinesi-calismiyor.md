---
title: "LG bulaşık makinesi çalışmıyor"
description: "LG bulaşık makinesi açılmıyor ya da programı başlatmıyorsa LG'nin sırası: fiş ve sigorta, ekranda CL kilidi, BAŞLAT ve kapak, gecikmeli başlatma."
slug: "lg-bulasik-makinesi-calismiyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, LG grubu, belirti rehberi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi, HTTP 200.
# Belge kimliği lg.com/tr DFC325HD.ABDPLTK ürün destek sayfasının kılavuz listesinden (www.lg.com/ncms/api/v1/support/proxy/retrieveManualSoftwareList?locale=TR) alındı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ (MD5.txt) · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
# Kullanım tablosu (L s.61-62) "Cihaz çalışmıyor.":
#   "Kapak tam olarak kapanmamış. • Cihazı yeniden hizalayın." · "Güç kaynağı ya da güç kablosu bağlanmamış. • Güç kaynağı ya da kablosunu doğru şekilde bağlayın."
#   · "Ekran Kilidi özelliği etkinleştiğinde ekranda CL ekran kodu görülecektir. • Ekran Kilidi düğmesini devre dışı bırakın. • Bu özelliği etkinleştirmek veya devre dışı bırakmak için Yarım Yük ve Enerji Tasarrufu düğmelerine aynı anda 3 saniye boyunca basılı tutun."
#   · "Sigorta atmış ya da devre kesici devreye girmiş. • Sigortayı değiştirin ya da devre kesiciyi sıfırlayın." · L s.62 "Lambalar yanmıyor. | Güç bağlı değil. • Güç kaynağını bağlayın."
# Diğer: L s.22 "Kapağı açın ve Güç düğmesine basın. • Ünite açılır. Göstergeleri kontrol edin." · L s.28 Güç: program bitince güç otomatik kapanır; elektrik kesintisinde güvenlik için kapanır, güç gelince "otomatik olarak açılır ve program devam eder."
#   · L s.28 Gecikmeli Başlatma seçildiğinde ekranda saat cinsinden erteleme süresi · L s.29 BAŞLAT: "BAŞLAT düğmesine basın ve kapıyı kapatın ya da kapıyı kapattıktan sonra BAŞLAT düğmesine basın." · "4 dakika içinde programı başlatmak için BAŞLAT düğmesine basılmazsa enerji otomatik olarak kesilir."
#   · L s.31 Gecikmeli Başlatma 1-12 saat; "Bu özelliği iptal etmek için gücü kapatın." · L s.31-32 Ekran Kilidi: Güç dışındaki düğmeleri kilitler, kapağı kilitlemez; CL; "Yeni bir programa başlamak için bu özelliği devre dışı bırakın."
#   · L s.17 seviyelendirme: doğru hizalanmışsa kapak açılırken meyil/sürtünme sesi olmamalı; ayaklarla ayar · L s.61 hata kodları HE/FE/AE/tE/LE/NE: "Aynı sorun yeniden meydana gelirse servisi çağırın."
# BİLEREK YAZILMAYANLAR: ayaklarla yeniden hizalama adımı (belgede ayak ayarının aletsiz yapılıp yapılmadığı yazmıyor; gövdede kılavuz bölümüne atıfla anıldı) · sigorta değiştirme talimatı (elektrik tesisatı)
#   · kart/kapı kilidi teşhisi (belgede yok) · tuş kombinasyonlarını başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Makinenin fişinin prize takılı ve güç kablosunun doğru bağlı olduğunu kontrol et."
  - "Evdeki sigortaya bak; atmışsa ya da devre kesici devreye girmişse sıfırla."
  - "Kapağı aç, Güç düğmesine bas ve göstergelerin yandığını kontrol et."
  - "Ekranda CL yazıyorsa Yarım Yük ve Enerji Tasarrufu düğmelerine birlikte 3 saniye basılı tutarak Ekran Kilidi'ni kapat."
  - "Programı seç, BAŞLAT düğmesine bas ve kapağı tam kapat; 4 dakika içinde başlatmazsan makine kendini kapatır."
  - "Ekranda saat cinsinden bir süre görünüyorsa Gecikmeli Başlatma seçilidir; iptal etmek için gücü kapatıp programı yeniden seç."
faq:
  - q: "Ekranda CL yazıyor ve tuşlar çalışmıyor. Arıza mı?"
    a: "Hayır. LG'nin DFC325HD kullanıcı el kitabına göre CL, Ekran Kilidi özelliğinin açık olduğunu gösteriyor. Bu özellik Güç düğmesi dışındaki tüm düğmeleri kilitliyor ama kapağı kilitlemiyor. Kapatmak için Yarım Yük ve Enerji Tasarrufu düğmelerine aynı anda 3 saniye basılı tut; LG'ye göre yeni bir program başlatmak için kilidin kapalı olması gerekiyor."
  - q: "Programı seçtim, bir süre sonra makine kendiliğinden kapandı. Neden?"
    a: "LG'nin kılavuzuna göre programı başlatmak için 4 dakika içinde BAŞLAT düğmesine basılmazsa enerji otomatik olarak kesilir. Ayrıca program tamamlandıktan sonra güç, güvenlik ve tasarruf için kendiliğinden kapanır."
  - q: "Elektrik gitti geldi, makine ne yapar?"
    a: "LG'ye göre elektrik dalgalanması, kesintisi ya da başka bir elektrik arızasında güç güvenlik amacıyla otomatik olarak kapanır. Güç yeniden geldiğinde makine kendiliğinden açılır ve program kaldığı yerden devam eder."
  - q: "Makine çalışmıyor ve ekranda bir harfli kod var. Ne yapmalıyım?"
    a: "Kodu not al ve LG'nin hata tablosuna bak. DFC325HD'nin tablosunda IE, OE ve bE için kullanıcıya dönük kontroller var; HE, FE, AE, tE, LE ve NE kodlarında ise LG'nin yönlendirmesi aynı sorun yeniden meydana gelirse servisi çağırmak."
images:
  coverAlt: "Kapağı yarı açık bir bulaşık makinesinin üst kenarındaki kontrol paneli ve ekranında yanan iki harfli bir kod"
---

Tuşa basıyorsun ama makine açılmıyor, ya da açılıyor ama program başlamıyor. LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabındaki kullanım tablosunda bunun karşılığı **"Cihaz çalışmıyor."** satırı. LG bu satırda dört neden sayıyor: **kapak tam kapanmamış, güç kablosu bağlı değil, ekranda CL ile Ekran Kilidi açık, sigorta atmış.** Kılavuzun kontrol paneli bölümü buna iki durum daha ekliyor: **BAŞLAT'a 4 dakika içinde basılmazsa makinenin kendini kapatması** ve **Gecikmeli Başlatma.** Bu yazıda en basitinden başlayarak sırayla gidiyoruz. Kaynak tek bir modelin kılavuzu; tuş adları ve tuş kombinasyonları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş ve kablo takılı mı → sigorta ya da devre kesici atmış mı → kapağı açıp Güç'e bas, göstergeler yanıyor mu → ekranda CL varsa Yarım Yük + Enerji Tasarrufu 3 saniye → programı seç, BAŞLAT'a bas, kapağı tam kapat → ekranda saat cinsinden süre varsa Gecikmeli Başlatma açık. Ekranda HE, FE, AE, tE, LE ya da NE gibi bir kod tekrar ediyorsa LG'nin yönlendirmesi servis.

## Adım adım: evde denenecekler

**1. Fiş ve kablo.** LG'nin tablosundaki neden: **güç kaynağı ya da güç kablosu bağlanmamış** → güç kaynağını ya da kabloyu **doğru şekilde bağla.** Ekrandaki lambalar hiç yanmıyorsa LG'nin tablosunda bunun için ayrı bir satır var ve neden yine aynı: **güç bağlı değil.**

**2. Sigorta.** Tablodaki neden: **sigorta atmış ya da devre kesici devreye girmiş.** LG'nin çözümü: **sigortayı değiştir ya da devre kesiciyi sıfırla.**

**3. Makineyi aç, göstergelere bak.** Kılavuzdaki kullanım sırasının ilk adımı: **kapağı aç ve Güç düğmesine bas;** makine açılır ve **göstergeleri kontrol** edersin. Kılavuza göre parlatıcı ya da tuz simgesi yanıyorsa parlatıcı ve tuz takviye edilir.

**4. Ekranda CL var mı?** LG'nin tablosundaki en kolay gözden kaçan neden bu: **Ekran Kilidi** özelliği açıldığında ekranda **CL** kodu görünür. LG'ye göre bu kilit **Güç düğmesi dışındaki tüm düğmeleri** kilitler ama **kapağı kilitlemez;** yani kapak açılıyor diye kilidin kapalı olduğunu düşünme. Kapatmak için **Yarım Yük ve Enerji Tasarrufu** düğmelerine **aynı anda 3 saniye** basılı tut. Kılavuza göre yeni bir programa başlamak için bu özelliğin kapalı olması gerekiyor.

**5. BAŞLAT ve kapak.** LG'nin tarifi: programı seç, sonra **BAŞLAT düğmesine bas ve kapıyı kapat** ya da **kapıyı kapattıktan sonra BAŞLAT** düğmesine bas; hangi sıranın geçerli olduğu ekran tipine göre değişebiliyor. Tablodaki ilk neden de buna bağlı: **kapak tam olarak kapanmamış.** Kılavuza göre **4 dakika içinde BAŞLAT'a basılmazsa** makine enerjiyi kendiliğinden keser; bu durumda Güç'e basıp programı yeniden seç.

**6. Gecikmeli Başlatma açık mı?** Program başlamıyor ama ekranda **saat cinsinden** bir süre görünüyorsa makine çalışmıyor değil, **bekliyor** olabilir. LG'ye göre Gecikmeli Başlatma seçildiğinde ekranda erteleme süresi saat cinsinden görünür ve bu süre **1 ile 12 saat** arasında ayarlanabilir. LG'nin iptal yolu: **gücü kapat.** Sonra makineyi açıp programı yeniden seç.

## Kapak hâlâ tam kapanmıyorsa

LG'nin tablosunda kapağın tam kapanmaması için çözüm **cihazı yeniden hizalamak.** Kılavuzun kurulum bölümüne göre makine doğru hizalandığında kapak açılırken **meyil, basıklık ya da sürtünme sesi** olmamalı; hizalama makinenin ayarlanabilir ayaklarıyla yapılıyor. Bunun için kılavuzundaki "Cihazın Ayarlanması ve Seviyelendirilmesi" bölümüne bak ya da kurulumu yapan kişiye, yetkili servise bırak.

**Elektrik kesintisinden sonra.** LG'ye göre elektrik kesintisinde makine güvenlik için kapanır; güç geri geldiğinde **kendiliğinden açılır ve program devam eder.** Makine program bittikten sonra da kendiliğinden kapanır; bu bir arıza değil.

Genel hata kodu listesi için [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) yazısına, program ortada kalıyorsa [bulaşık makinesi programı bitirmiyor](/blog/bulasik-makinesi-programi-bitirmiyor/) sayfasına bakabilirsin. Makine çalışıyor ama dibinde su kalıyorsa kardeş rehberimiz [LG bulaşık makinesi su boşaltmıyor](/blog/lg-bulasik-makinesi-su-bosaltmiyor/) yazısına geç.

## Ne zaman servis

- Fiş, sigorta, CL kilidi, BAŞLAT ve Gecikmeli Başlatma tamam olduğu hâlde makine açılmıyor ya da program başlamıyorsa yetkili LG servisine başvur.
- Ekranda **HE, FE, AE, tE, LE ya da NE** kodlarından biri görünüyorsa LG'nin tablosundaki yönlendirme her biri için aynı: **aynı sorun yeniden meydana gelirse servisi çağırın.**

⛔ **Kendin-çöz sınırı burada biter.** Fiş, sigorta, kilit, program ve zamanlayıcı kullanıcıya; makinenin içindeki kart ve kapı mekanizması uzmana aittir.

## Servisi aramadan önce kısa özet

1. Güç'e basınca ekranda bir şey yanıyor mu?
2. Ekranda CL ya da başka bir kod var mı?
3. BAŞLAT'a bastıktan sonra kapağı tam kapattın mı?
4. Ekranda saat cinsinden bir süre görünüyor mu?
5. Sigorta attı mı, ne zamandır böyle?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
