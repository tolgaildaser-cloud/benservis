---
title: "Samsung bulaşık makinesi çalışmıyor"
description: "Samsung bulaşık makinesi çalışmıyorsa Samsung'un kendi sırası: kapak, fiş, sigorta, su, hortum, kontrol kilidi ve başlatma; servis sınırı."
slug: "samsung-bulasik-makinesi-calismiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, PAZ belirti damarı). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung TÜRKİYE'den indirildi, HTTP 200.
# #88: web araması kullanılmadı; URL'ler 27 Eyl sprint kaynak klasöründen ve Samsung TR sayfalarının kendi iç linklerinden. ABD Samsung kaynağı YOK.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-bulasik-sprint/2026-09-29/ · pdftotext -layout · sayfa = kılavuzun BASILI sayfa no'su (PDF sayfası parantezde).
#  (A) DW5500MM DD81-02615C-11 (KA/TR, 2024-11-08; DW60M5052FW TR destek) https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60M5052FW&CttFileID=10095923&CDCttType=UM&VPath=UM%2F202503%2F20250306111731926%2FDW5500MM_DD81-02615C-11_KA_TR_EN_241108.pdf  200 s. md5 2ad54a56734b93dbaeefbcd4fdc3b385
#  (C) DW8500AM DD81-03206J-04 (TR, 2023-06-28; DW60A8050FS) https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60A8050FS&CttFileID=9233776&CDCttType=UM&VPath=UM%2F202306%2F20230628135053892%2FDW8500AM_DW60A8050FS_TR_DD81-03206J-04_EN_TR.pdf  172 s. md5 0bac38bffb63954fc975765ab1c13167
#  (D) DW9000H DD68-00158F-09 (TR, 2018-05-09) https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60H5050FW%2FTR&CttFileID=7034806&CDCttType=UM&VPath=UM%2F201805%2F20180510194713724%2FDW9000H_DD68-00158F-09_EN_TR_AR_R.pdf  132 s. md5 370daab2b2de63dacb7920a1e1e60c79
#  (T) Samsung TR destek "Samsung Bulaşık makinem çalışmadığında ne yapabilirim?" (güncelleme 2025-01-09) https://www.samsung.com/tr/support/home-appliances/my-samsung-dishwasher-does-not-work-does-not-start-the-program-what-can-i-do/  md5 0b9af80a96b428047c113af326bd1fa3 (HTML dinamik; md5 her indirmede değişebilir)
# "Bulaşık makinesi çalışmıyor" satırı — A s.52 (PDF 116): "Sigorta patlamıştır veya şalter devreye girmiştir. → Sigortayı değiştirin veya şalteri sıfırlayın. Bulaşık makinesiyle aynı devreyi paylaşan diğer cihazların fişini prizden çıkarın."
#   · "Güç kaynağı açılmamıştır. → Bulaşık makinesinin açıldığından ve kapağın iyice kapatıldığından emin olun. Elektrik kablosunun prize düzgün takıldığından emin olun."
#   · "Suyun basıncı düşüktür. → Su kaynağının düzgün şekilde bağlanıp bağlanmadığını ve suyun açılıp açılmadığını kontrol edin."
# "Bulaşık makinesi başlamıyor." — C s.69 (PDF 153): kapak tamamen kapatılmamış (kapak kilitli/tam kapalı, üst sepet püskürtücüyle düzgün birleşmiş, üst sepet düzgün yerleşmiş) · güç kablosu bağlanmamış · su sağlanmıyor (su besleme vanası açık) · kontrol paneli kilitli (Kontrol Kilidi'ni devre dışı bırak).
#   D s.36 (PDF 78) "Çalışmıyor." satırı aynı + "BAŞLAT (Sıfırla) düğmesi seçilmemiştir → Kapağı kapatmadan önce, BAŞLAT (Sıfırla) düğmesine basın." + "Hiçbir program seçilmemiştir → Bir program seçin."
# "Düğmeler güç açık durumunda çalışmıyor" — A s.55 (PDF 119): "Kapak açık olduğunda, GÜÇ düğmesi hariç düğmeler çalışmaz. Kapağı kapatın ve düğmeye yeniden basın." · "Kontrol kilidi işlevi seçildiğinde, düğmeler yanıt vermez. Bu işlevin kilidini açmak için Kontrol kilidi düğmesini üç (3) saniye kadar basılı tutun. Ayrıca, elektrik kablosu yeniden bağlandığında Kontrol kilidi işlevi bırakılır."
# T: 1 "Kapağın tamamen kapatıldığından ve güç kablosunun düzgün takıldığından emin olun." · 2 "Bulaşık makineniz yeteri kadar su alamadığında programa başlamayacaktır." / "Su kesintisi veya düşük su basıncı olup olmadığını kontrol edin." / "…yerinden oynattıysanız su giriş hortumu katlanmış, kırılmış, bükülmüş olabilir." · 3 çocuk kilidi.
# Diğer: A s.15 (PDF 79) "Bir program başlatmak için kapağı kapatmadan önce, BAŞLAT düğmesine basın." + "Sıfırla: … BAŞLAT düğmesini üç (3) saniye boyunca basılı tutun." + "Kapak açıkken, yalnızca GÜÇ düğmesi çalışacaktır." · A s.16 (PDF 80) gecikmeli başlatma göstergesi · A s.56 (PDF 120) bilgi kodları + "Herhangi bir bilgi kodu ekranda görünmeye devam ederse yerel bir Samsung servis merkezine başvurun." · C s.16 (PDF 100) "Uzatma kablosu kullanmayın." · A s.52 (PDF 116) yetkili servis dışı müdahale garanti dışı.
# BİLEREK YAZILMAYANLAR: sigorta değişimi yordamı (belge "sigortayı değiştirin" diyor; ev tesisatı işi olduğu için yazı yalnız "panelde bak / şalteri kaldır" diyor, sigorta tekrar atarsa ek yordam uydurulmadı) · kart/kapı kilidi/pompa teşhisi (belgede yok) ·
#   model bazlı tuş kombinasyonları (T sayfasındaki tuşlar görsel ikon, metinde okunmuyor → "kendi kılavuzundaki tuş") · su basıncı ölçümü (0,04-1,0 MPa kullanıcının ölçeceği şey değil; yalnız bilgi olarak) · süre/parça/fiyat (#46, #31).
# Alıntı denetim tablosu: samsung-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Kapağı iyice kapat; üst sepetin yerine düzgün oturduğunu kontrol et."
  - "Elektrik fişinin prize düzgün takılı olduğunu kontrol et; uzatma kablosu kullanma."
  - "Evin sigorta panelinde makinenin şalterine bak; inmişse kaldır ve aynı hattaki diğer cihazların fişini çek."
  - "Su besleme vanasının açık olduğunu, evde su kesintisi ya da düşük basınç olmadığını kontrol et."
  - "Makine yerinden oynatıldıysa su giriş hortumunun katlanıp bükülmediğine bak."
  - "Ekranda kontrol kilidi göstergesi varsa Kontrol kilidi düğmesini üç saniye basılı tutarak kaldır."
  - "GÜÇ düğmesine bas, bir program seç, BAŞLAT düğmesine bas ve kapağı kapat."
  - "Ekranda bilgi kodu çıkarsa kodu not al ve kodun anlamına bak."
faq:
  - q: "Samsung bulaşık makinesi hiç çalışmıyor, ilk neye bakmalıyım?"
    a: "Samsung'un Türkçe kullanım kılavuzundaki sorun giderme tablosu 'Bulaşık makinesi çalışmıyor' satırında üç neden sayıyor: sigorta ya da şalter atmış olabilir, güç kaynağı açılmamış olabilir (makinenin açıldığından, kapağın iyice kapatıldığından ve kablonun prize düzgün takıldığından emin ol) ve su basıncı düşük olabilir (su kaynağının bağlı ve açık olduğunu kontrol et)."
  - q: "Ekran yanıyor ama program başlamıyor, neden?"
    a: "Samsung Türkiye'nin destek sayfasına göre makine yeteri kadar su alamadığında programa başlamaz; su kesintisi, düşük su basıncı ya da katlanmış giriş hortumu buna yol açabilir. İkinci ihtimal kontrol kilidi: kilit seçiliyken düğmeler yanıt vermez. Samsung'un kılavuzuna göre kilidi açmak için Kontrol kilidi düğmesini üç saniye basılı tutmak gerekir; tuşun adı ve yeri modele göre değişir."
  - q: "Kapak açıkken düğmelere basıyorum, tepki vermiyor. Arıza mı?"
    a: "Samsung'un tablosuna göre kapak açıkken GÜÇ düğmesi dışındaki düğmeler çalışmaz. Kılavuzun önerisi kapağı kapatıp düğmeye yeniden basmak. Programı başlatma sırası için kendi modelinin kılavuzundaki kontrol paneli bölümüne bak."
  - q: "Makinenin fişini çekip taktım, kontrol kilidi kalktı mı?"
    a: "Samsung'un DW60M serisi kılavuzuna göre elektrik kablosu yeniden bağlandığında Kontrol kilidi işlevi bırakılır. Kilit göstergesi hâlâ yanıyorsa kilidi kılavuzundaki düğmeyle kaldır."
images:
  coverAlt: "Mutfakta kapağı kapalı ankastre bir bulaşık makinesinin üst kenarındaki kontrol paneli; ekran kapalı, yanında açık duran kullanma kılavuzu"
---

Bulaşıkları yerleştirdin, düğmeye bastın ve makine hiç tepki vermiyor ya da ekran yanıyor ama program başlamıyor. Samsung'un Türkçe kullanım kılavuzundaki sorun giderme tablosunda bunun ayrı bir satırı var: **"Bulaşık makinesi çalışmıyor."** Altında sayılan nedenlerin hepsi evde kontrol edilebilecek şeyler: **sigorta/şalter, güç ve kapak, su basıncı.** Samsung Türkiye'nin destek sayfası da aynı sırayı veriyor ve buna **su giriş hortumu** ile **çocuk (kontrol) kilidini** ekliyor. Bu yazıda Samsung'un kendi listesini sırasıyla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapak iyice kapalı mı → fiş prize düzgün takılı mı → sigorta/şalter inmiş mi → su açık mı, basınç yeterli mi → hortum katlanmış mı → kontrol kilidi açık mı → program seçilip BAŞLAT'a basıldı mı. Ekranda bilgi kodu varsa kodun anlamına bak. Bunlara rağmen çalışmıyorsa Samsung yetkili servisi.

## Adım adım: evde denenecekler

**1. Kapağı iyice kapat.** Samsung Türkiye'nin destek sayfasındaki ilk madde: **kapağın tamamen kapatıldığından emin ol.** DW60A serisi kılavuzu "başlamıyor" satırında kapağın kilitlendiğine ve tamamen kapalı olduğuna bakmanı, ayrıca **üst sepetin düzgün yerleştirildiğinden** (bazı modellerde püskürtücüyle düzgün birleştiğinden) emin olmanı istiyor.

**2. Fişi kontrol et.** Sonraki madde güç: **elektrik kablosunun prize düzgün takıldığından emin ol.** Samsung'un kurulum uyarılarına göre makine için **uzatma kablosu kullanılmaz.** Makine bir uzatma kablosuna ya da çoklu prize bağlıysa bunu not et.

**3. Sigorta paneline bak.** Tablodaki ilk olası neden: **sigorta patlamış ya da şalter devreye girmiş olabilir.** Evin sigorta panelinde bulaşık makinesinin şalterine bak; inmişse kaldır. Samsung ayrıca **bulaşık makinesiyle aynı devreyi paylaşan diğer cihazların fişini prizden çıkarmanı** öneriyor.

**4. Suyun açık olduğunu kontrol et.** Tablodaki üçüncü neden: **suyun basıncı düşüktür.** Su kaynağının düzgün bağlı ve **açık** olduğunu kontrol et. Destek sayfası bunu şöyle açıklıyor: makine **yeteri kadar su alamadığında programa başlamaz.** Evde **su kesintisi ya da düşük su basıncı** olup olmadığına bak.

**5. Giriş hortumuna bak.** Samsung'un destek sayfasına göre makineyi temizlik ya da yer değişikliği için **yerinden oynattıysan su giriş hortumu katlanmış, kırılmış ya da bükülmüş olabilir.** Hortumu musluktan makineye kadar gözle izle; katlanmış bir yer görürsen düzelt.

**6. Kontrol kilidini kaldır.** Ekran yanıyor ama düğmeler tepki vermiyorsa kilit açık olabilir. Samsung'a göre **kontrol kilidi seçildiğinde düğmeler yanıt vermez.** DW60M serisinde kilidi açmak için **Kontrol kilidi düğmesini üç saniye basılı tut.** Bazı modellerde bu işlev başka bir düğmenin üstündedir (ör. DW60H serisinde "Kurutma+ (Kontrol Kilidi)"); kendi kılavuzundaki düğmeye bak.

**7. Programı doğru sırayla başlat.** **GÜÇ** düğmesine bas, bir program seç, **BAŞLAT** düğmesine bas ve kapağı kapat. Samsung'un DW60M kılavuzu bu sırayı açıkça yazıyor: *bir program başlatmak için kapağı kapatmadan önce BAŞLAT düğmesine basın.* DW60H serisi kılavuzu da "çalışmıyor" nedenleri arasında **BAŞLAT düğmesine basılmamış** ya da **hiçbir program seçilmemiş** olmasını sayıyor. Ekranda **Gecikmeli başlatma** göstergesi yanıyorsa Samsung'a göre bu seçenek seçilmiş demektir; yıkama seçilen daha sonraki saatte başlar.

**8. Ekranda kod varsa not al.** Samsung'a göre **bulaşık makinesi çalışamıyorsa ekranda bir bilgi kodu görürsün.** Kodu not al ve anlamına bak: [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/). Örneğin 4C su besleme kontrolüdür; ayrıntısı [Samsung bulaşık makinesi 4C hatası](/blog/samsung-bulasik-makinesi-4c-hatasi/) yazısında.

## Düğmeler tepki vermiyorsa

Samsung'un tablosunda "Düğmeler güç açık durumunda çalışmıyor" için iki neden var:

- **Kapak açık:** Kapak açık olduğunda GÜÇ düğmesi dışındaki düğmeler çalışmaz. Samsung'un önerisi: **kapağı kapat ve düğmeye yeniden bas.**
- **Kontrol kilidi seçili:** Düğmeler yanıt vermez; kilidi kılavuzdaki düğmeyle kaldır. Samsung'a göre **elektrik kablosu yeniden bağlandığında da kontrol kilidi işlevi bırakılır.**

Çalışan bir programı iptal etmek istersen Samsung'un tarifi: **BAŞLAT düğmesini üç saniye basılı tut**; makine programı iptal eder ve suyunu boşaltır. Sonra yeni bir program seçip BAŞLAT'a basabilirsin.

## Ne zaman servis

Kapak kapalı, fiş takılı, şalter yerinde, su açık, hortum düzgün, kilit kapalı ve makine hâlâ çalışmıyorsa Samsung'un tablosu kullanıcıya başka adım vermiyor. Ekranda bir bilgi kodu görünmeye devam ediyorsa Samsung'un notu açık: **yerel bir Samsung servis merkezine başvur.**

Samsung'un kılavuzu ayrıca ürünün bakım ve onarımlarının **yetkili servisler tarafından** yapıldığını, yetkili servis dışında yapılan müdahalelerden doğan arızaların **garanti kapsamından çıkabileceğini** yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Kapak, fiş, şalter, musluk, hortum ve kontrol paneli kullanıcıya; makinenin içi ve elektrik tesisatı uzmana aittir.

## Servisi aramadan önce iki dakikalık özet

1. Ekran hiç yanıyor mu, yanıyorsa hangi göstergeler açık?
2. Fiş doğrudan duvardaki prize mi takılı?
3. Sigorta panelinde inmiş şalter var mıydı?
4. Musluk açık, evde su var mı?
5. Kontrol kilidi kaldırıldı mı, ekranda kod var mı?

Genel (markadan bağımsız) sorunlar için [bulaşık makinesi programı bitirmiyor](/blog/bulasik-makinesi-programi-bitirmiyor/) ve [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazılarına da bakabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
