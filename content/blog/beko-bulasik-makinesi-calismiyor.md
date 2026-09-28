---
title: "Beko bulaşık makinesi çalışmıyor"
description: "Beko bulaşık makinesi çalışmıyorsa Beko'nun kılavuzundaki sıra: fiş, sigorta, musluk, kapı, açma tuşu, çocuk kilidi ve filtreler; servis sınırı."
slug: "beko-bulasik-makinesi-calismiyor"
date: "2026-09-28"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144, ek koşu 08:20). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (C) 3938 IL / 3938 ILS  http://download.beko.com/Download.UsageManualsBeko/34758_1728766176_AA_BEKO_3938-IL.pdf  34 s.  md5 86ef266bafb482f3a888acf3e8d7b975  (sayfa atıfları esas olarak bu belgeye göre)
#  (D) 3938 BI  http://download.beko.com/Download.UsageManualsBeko/34757_1728766175_AA_BEKO_3938-BI.pdf  29 s.  md5 360bb8368f0000711f563180cee7081a
#  (E) D3 3001 SY  http://download.beko.com/Download.UsageManualsBeko/d3-3001-sy-3-programli-bulasik-makinesi-kullanim-kilavuzu-29017_tr_TR_1728762603_AN_BEKO_D3_3001_SY.pdf  29 s.  md5 fcfebfdf9fa48f34af026ec3d5739b45
#  (A) BM 5005  http://download.beko.com/Download.UsageManualsBeko/bm-5005-5-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201502251450524_User20Manual20-20Filetur-A.pdf  36 s.  md5 91a260cf53261252526fea072f2d7eb4
#  (B) BM 4004  http://download.beko.com/Download.UsageManualsBeko/bm-4004-4-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201503311643326_User20Manual20-20Filetur-A.pdf  36 s.  md5 07fbbc53ef748e28fb00173ca775105b
# "Makine çalışmıyor." satırı — Sorun giderme bölümü (C s.31, D s.26, E s.26, A s.29, B s.29):
#   "Elektrik fişi takılmamış olabilir. >>> Elektrik fişinin takılı olup olmadığını kontrol edin. · Sigorta atmış olabilir. >>> Evinizdeki sigortaları kontrol edin.
#    · Su gelmiyor olabilir. >>> Su giriş musluğunun açık olduğundan emin olun. · Makinenin kapısı açık olabilir. >>> Makinenin kapısını kapadığınızdan emin olun.
#    · Açma / Kapatma düğmesine basılmamış olabilir. >>> Açma / Kapatma düğmesine basarak makineyi açtığınızdan emin olun."
#   C, D, E'de ek madde: "Filtreler tıkalı olabilir. >>> Su giriş hortumu ve makinenizdeki filtrelerin tıkalı olmadığından emin olun." (A ve B'de bu madde yok)
#   Kapanış: "Bu bölümdeki talimatları uygulamanıza rağmen sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı asla denemeyin." (C s.31)
# Diğer: C s.22 "makinenizi açtıktan sonra Başla / Bekle / İptal düğmesine basmak için 2 saniye bekleyin" + çocuk kilidi/erteleme seçili kalır · C s.24 çocuk kilidi (Başla/Bekle/İptal'i etkisiz kılar; kapıyı kilitlemez; C'de Program Seçim + Yarım Yük 3 sn)
#   · C s.23 erteleme geri sayımı · C s.24 çalışırken kapı açılırsa · A s.25 enerji tasarrufu için otomatik kapanma · A s.10 / C s.9 uzatma kablosu ve çoklu priz yok · C s.28 temizlikten önce fişi çek, musluğu kapa · C s.28-29 filtre ve hortum filtresi temizliği.
# BİLEREK YAZILMAYANLAR: kart/kapı kilidi/pompa teşhisi (belgede yok) · sigorta tekrar atarsa ne yapılacağına dair Beko metni olmadığı için ek yordam uydurulmadı ·
#   çocuk kilidi tuş kombinasyonu yalnız 3938 IL için verildi, diğer modeller için "kendi kılavuzundaki tuş" dendi.
# Alıntı denetim tablosu: beko-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Makinenin kullanma kılavuzu"]
steps:
  - "Makinenin fişinin prize takılı olduğunu kontrol et; uzatma kablosu ya da çoklu priz kullanma."
  - "Evdeki sigorta kutusunda sigortaları kontrol et."
  - "Makinenin su giriş musluğunun açık olduğundan emin ol."
  - "Makinenin kapısını tam kapat."
  - "Açma/Kapatma tuşuna bas, 2 saniye bekle, programı seç ve Başla/Bekle/İptal tuşuna bas."
  - "Ekranda çocuk kilidi ya da erteleme göstergesi yanıyorsa kılavuzundaki yöntemle kaldır."
  - "Fişi çek, musluğu kapat ve su giriş hortumundaki filtreyi musluk altında temizle."
  - "Makinenin tabanındaki filtreleri çıkarıp fırçayla musluk altında temizle, yerine tık sesiyle tak."
faq:
  - q: "Beko bulaşık makinesi hiç çalışmıyor, ilk neye bakmalıyım?"
    a: "Beko'nun kullanma kılavuzlarındaki sorun giderme tablosu 'Makine çalışmıyor' başlığında şu sırayı veriyor: elektrik fişi takılı mı, evdeki sigortalar atmış mı, su giriş musluğu açık mı, makinenin kapısı kapalı mı ve Açma/Kapatma tuşuna basılmış mı. Bazı modellerin kılavuzunda buna su giriş hortumu ve makinedeki filtrelerin tıkalı olmadığından emin olunması da ekleniyor."
  - q: "Makine açılıyor ama Başla tuşuna basınca program başlamıyor, neden?"
    a: "İki şeye bak. Beko'nun 3938 IL kılavuzuna göre makineyi açtıktan sonra Başla/Bekle/İptal tuşuna basmak için 2 saniye beklemek gerekir; bu sürede ekrana görüntü gelir. İkincisi çocuk kilidi: çocuk kilidi Başla/Bekle/İptal tuşunu etkisiz hale getirir ve seçilen programın değiştirilmesini önler. Ekranda çocuk kilidi göstergesi varsa kilidi kaldır."
  - q: "Makineyi kapatıp açtım, çocuk kilidi hâlâ duruyor. Normal mi?"
    a: "Evet. Beko'nun kılavuzuna göre en son kullanılan programda Yarım Yük, Tablet Deterjan, Çocuk Kilidi ve Erteleme fonksiyonları seçilmişse makine kapatılıp tekrar açıldığında bu fonksiyonlar seçili kalır. Devre dışı kalmalarını istiyorsan ilgili tuşlara yeniden basman gerekir."
  - q: "Programı başlattım ama makine beklemede duruyor, ekranda süre geri sayıyor. Arıza mı?"
    a: "Büyük ihtimalle erteleme seçilidir. Beko'nun kılavuzunda erteleme fonksiyonu programın başlama zamanını 30 dakikalık dilimlerle 24 saate kadar ileri alır; geri sayım bittiğinde program otomatik olarak çalışmaya başlar. Başla/Bekle/İptal tuşuna 3 saniye basılı tutarak erteleme ya da program iptal edilebilir."
  - q: "Program bitmeden ekran kendiliğinden kapandı, bozuldu mu?"
    a: "Beko'nun BM 4004 ve BM 5005 kılavuzlarına göre makine enerji tasarrufu için program bitiminde ya da program başlatılmadığında belirli bir süre sonra otomatik olarak kapanır. Program seçip başlatmadan beklediysen ekranın kapanması bu davranıştır."
images:
  coverAlt: "Mutfakta kapağı kapalı ankastre bulaşık makinesinin kontrol paneli, ekranı kapalı; yanında açık duran kullanma kılavuzu"
---

Bulaşıkları yerleştirdin, düğmeye bastın ve hiçbir şey olmadı: ekran yanmıyor, ya da yanıyor ama program başlamıyor. Beko'nun bulaşık makinesi kullanma kılavuzlarında bu durumun ayrı bir başlığı var: **"Makine çalışmıyor."** Altında sayılan sebeplerin hepsi makinenin dışında ya da ön panelde kontrol edilebilecek şeyler: **fiş, sigorta, su musluğu, kapı ve Açma/Kapatma tuşu**, bazı modellerde de **tıkalı filtreler.** Bu yazıda Beko'nun sırasını, aynı kılavuzların çocuk kilidi ve erteleme bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Beko'nun "makine çalışmıyor" listesi: fiş takılı mı → sigorta atmış mı → musluk açık mı → kapı kapalı mı → Açma/Kapatma tuşuna basıldı mı → filtreler tıkalı mı. Ekran yanıyor ama program başlamıyorsa çocuk kilidi ve erteleme göstergesine bak. Bunlara rağmen çalışmıyorsa bayi ya da yetkili servis.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Beko'nun ilk maddesi: **elektrik fişinin takılı olup olmadığını kontrol et.** Beko'nun kurulum şartına göre makine topraklı bir prize bağlanır; **uzatma kabloları ya da çoklu prizlerle bağlantı yapılmaz.** Makine bir çoklu prize bağlıysa bunu da not et.

**2. Sigortalara bak.** İkinci madde: **sigorta atmış olabilir.** Beko'nun önerisi evdeki sigortaları kontrol etmen. Sigorta kutusunda inmiş bir sigorta görüyorsan bunu not et.

**3. Musluğun açık olduğundan emin ol.** Üçüncü madde: **su gelmiyor olabilir.** Makinenin bağlı olduğu **su giriş musluğunun açık** olduğundan emin ol. Beko'nun makineyi hazırlama sırası da musluğu açmakla başlıyor.

**4. Kapıyı tam kapat.** Dördüncü madde: **makinenin kapısı açık olabilir.** Kapıyı tam kapattığından emin ol. Beko'nun kurulum bölümüne göre makinenin düz bir zemine yerleştirilmesi, kapısının **uygun bir şekilde ve sıkıca kapanabilmesi** için gereklidir.

**5. Makineyi aç ve programı başlat.** Beşinci madde: **Açma/Kapatma tuşuna** basarak makineyi açtığından emin ol. Beko'nun 3938 IL kılavuzuna göre makineyi açtıktan sonra Başla/Bekle/İptal tuşuna basmak için **2 saniye** bekle; bu sürede ekrana görüntü gelir. Sonra programı seç ve **Başla/Bekle/İptal** tuşuna bas.

**6. Çocuk kilidine ve erteleme göstergesine bak.** Ekran yanıyor ama program başlamıyorsa panelde bu iki göstergeye bak. Beko'ya göre **çocuk kilidi Başla/Bekle/İptal tuşunu etkisiz hale getirir.** 3938 IL'de kilit, Program Seçim ve Yarım Yük tuşlarına aynı anda **üç saniye** basılı tutularak açılıp kapanır; senin modelinde tuşlar farklı olabilir, kendi kılavuzundan bak. **Erteleme** seçiliyse makine geri sayım bitene kadar bekler; geri sayım bittiğinde program otomatik olarak başlar.

**7. Hortum filtresini temizle.** Bazı Beko kılavuzlarında listenin son maddesi: **filtreler tıkalı olabilir**, su giriş hortumu ve makinedeki filtrelerin tıkalı olmadığından emin ol. Beko temizlikten önce **fişi çekmeni ve musluğu kapamanı** istiyor. Sonra hortumu musluktan sök, hortumdaki filtreyi çıkarıp **musluk altında** temizle, yerine yerleştir ve hortumu musluğa tak.

**8. Makinedeki filtreleri temizle.** Makinenin tabanındaki mikro filtre ve kaba filtre grubunu **saat yönünün tersine çevirip çekerek** çıkar, metal/plastik filtreyi çekerek al. Beko'nun tarifine göre üç filtreyi de **musluk altında bir fırça yardımıyla** temizle. Geri takarken kaba filtreyi mikro filtrenin içine yerleştir ve **tık sesi duyana kadar saat yönünde** çevir. Beko'nun iki notu var: makine filtresiz kullanılmamalı; filtrelerin doğru takılmaması yıkama etkinliğini azaltır.

## Program yarıda durduysa

"Çalışmıyor" bazen programın ortasında durmuş olmasıdır. Beko'nun kılavuzuna göre makine çalışırken kapıyı açman gerekirse önce **Başla/Bekle/İptal** tuşuna basarak makineyi durdurman, kapıyı kapattıktan sonra aynı tuşa **tekrar** basman gerekir; program **kaldığı yerden devam eder.** Kapıyı açarken buhar çıkabilir, dikkatli ol.

Beko'nun BM 4004 ve BM 5005 kılavuzlarına göre makine enerji tasarrufu için program bitiminde ya da **program başlatılmadığında** belirli bir süre sonra otomatik olarak kapanır. Ekran kendiliğinden söndüyse önce bunu hesaba kat.

Ekranda bir hata kodu yanıp sönüyorsa önce kodun anlamına bak; Beko'nun yayımladığı kodlar için [Beko bulaşık makinesi hata kodları](/blog/beko-bulasik-makinesi-hata-kodlari/) yazısına bakabilirsin. Taban filtresinin temizliğinin ayrıntılı anlatımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

## Sınır nerede biter

Fiş takılı, sigortalar yerinde, musluk açık, kapı kapalı, çocuk kilidi ve erteleme kapalı, filtreler temiz ve makine hâlâ çalışmıyorsa Beko'nun kılavuzu kullanıcıya başka adım vermiyor: **ürünü satın aldığın bayiye ya da yetkili servise başvur.** Kılavuzun cümlesi açık: **çalışmayan ürünü kendin onarmayı asla deneme.**

Beko'nun kurulum bölümü de aynı çizgide: elektrik tesisatı uygun değilse **ehliyetli bir elektrikçi** çağırarak gerekli düzenlemelerin yaptırılması gerekir; hasar görmüş bir elektrik kablosu ise yalnız **yetkili servis** tarafından değiştirilir.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, musluk, kapı, panel ve filtreler kullanıcıya; makinenin içi ve elektrik tesisatı uzmana aittir.

## Servisi aramadan önce iki dakikalık özet

1. Ekran hiç yanıyor mu, yanıyorsa hangi göstergeler açık?
2. Fiş doğrudan duvardaki prize mi takılı?
3. Evdeki sigortalarda inmiş olan var mıydı?
4. Musluk açık, kapı tam kapalı mıydı?
5. Çocuk kilidi ve erteleme kapatıldı mı, filtreler temizlendi mi?

Bu beşine cevabın varsa servise "makine çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
