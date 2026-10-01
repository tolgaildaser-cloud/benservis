---
title: "Siemens çamaşır makinesi deterjan almıyor"
description: "Siemens çamaşır makinesinde deterjan ya da yumuşatıcı çekmecede kalıyorsa Siemens'in sırası: program, çekmece temizliği, i-Dos haznesi ve temel dozaj."
slug: "siemens-camasir-makinesi-deterjan-almiyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Profilo+Siemens belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, hepsi HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı);
#   i-Dos haznesi temizliği (A s.34-36) pdftoppm görüntüsüyle teyit edildi: çekmece, arka kapak ve şamandıra elle, alet yok.
#  A) WG54K2Y0TR (i-Dos)  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (i-Dos atıfları bu belgeye göre)
#  B) WG64K2Y0TR (i-Dos)  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3  (A ile aynı i-Dos satırları, s.42-43)
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126  (çekmece atıfları bu belgeye göre)
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8  (çekmece satırları s.41)
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026  (çekmece satırları s.41)
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479  (çekmece satırları s.42)
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a  (çekmece satırları s.43)
# YAKIN KOPYA KAPISI: yayındaki bosch-camasir-makinesi-deterjan-almiyor okundu. O sayfa Bosch'un "Su girişi gerçekleşmiyor. Deterjan cihazın içine alınmıyor." satırına
#   (musluk/hortum/süzgeç/Başlat) ve çekmece söküm sırasına dayanıyor. Siemens belgelerinde bu satır YOK; bu sayfa Siemens'in farklı satırlarından kuruldu:
#   "Deterjan çekmecesinde yumuşatıcı kalıyor", "contadan damlıyor", i-Dos satırları (minimum dolum simgesi, Intelligent Dosing'e basılamıyor, koyulaşmış deterjan, temel dozaj).
#   Çekmece temizliği tek adıma indirildi; su girişi kontrolleri adım olarak yazılmadı, yayındaki Siemens su almıyor sayfasına link verildi.
# Arızaları giderme satırları:
#   G s.38 "Deterjan veya yumuşatıcı contadan damlıyor ve kapak üzerinde veya conta kıvrımı içinde toplanıyor. — Deterjan çekmecesinde çok fazla deterjan veya yumuşatıcı var. ▶ Dozajlama sırasında deterjan çekmecesindeki işaretlere dikkat ediniz."
#   G s.38 "[yumuşatıcı simgesi] bölmesinde kalan su mevcut. — [simge] bölmesindeki tertibat tıkanmış. ▶ Deterjan çekmecesini temizleyiniz. Sayfa 30" (simge pdftotext'te düştü; G s.17 çekmece şemasında simgeli bölme = "Yumuşatıcı")
#   G s.38 "Deterjan çekmecesinde yumuşatıcı kalıyor. — Seçilen program için yumuşatıcı sağlanamaz. ▶ Seçilen program için yumuşatmanın olup olmadığını kontrol ediniz. Sayfa 20"
#   A s.20 "[i-Dos simgesi] yanıyor: Sıvı deterjan için akıllı dozaj sistemi etkinleştirildi. yanıp sönüyor: Dozajlama haznesinin minimum dolum seviyesinin altında kalındı. Sayfa 30"
#   A s.42 "Intelligent Dosing seçeneğine basılamıyor. — Seçilen program veya program ilerlemesi akıllı dozlamaya izin vermiyor. ▶ Manuel dozajlama haznesini kullanınız. Sayfa 30"
#   A s.43 "Yetersiz temizleme sonucu veya çamaşırlarda deterjan kalıntıları. — ... Dozajlama haznesindeki deterjan uygun değil veya koyulaşmış. 1. Deterjanın uygun olup olmadığını kontrol ediniz.
#     2. Dozajlama haznesindeki deterjanın koyulaşıp koyulaşmadığını kontrol ediniz. 3. Deterjan uygun değilse veya koyulaşmışsa, dozajlama haznelerini boşaltınız ve temizleyiniz. · Temel dozaj miktarı doğru ayarlanmamış. ▶ Temel dozaj miktarını ayarlayınız."
#   A s.42 / G s.36 "Tambur dönüyor, su girişi gerçekleşmiyor. — Hata yoktur. Dolum algılama 2 dakikaya kadar aktiftir."
# Diğer: G s.17 bölmeler (II esas yıkama deterjanı · yumuşatıcı · I ön yıkama/suda bekletme) · G s.30-31 16.2 çekmece temizliği (çek, tertibatı aşağı bastırıp çıkar, ilgili tertibatı aşağıdan yukarı bastırarak çıkar,
#   su ve fırçayla temizle-kurula, tertibatı oturt, açıklığı temizle, içeri it) · A s.29 i-Dos fabrikada etkin, uygun programlarda sıvı deterjanı otomatik dozajlar · A s.21 Intelligent Dosing kısa bas aç/kapa, ~3 sn temel dozaj
#   · A s.30 15.1 hazneyi doldurma (yalnız uygun sıvı deterjan; aynı ürün; ürün değişiminde önce çekmece temizliği; i-Dos açıkken manuel hazneye ekstra deterjan/yumuşatıcı ekleme; azami dolum işaretini aşma; kurumasın diye kapağı hemen kapat)
#   · A s.30 15.2 manuel hazne · A s.30 15.3 temel dozaj (ambalajdaki öneri; normal kirli 4,5 kg için; su sertliğini dikkate al; ~3 sn Intelligent Dosing, Bitiş Erteleme ile ayar, kısa bekle kaydet)
#   · A s.34-36 18.2 çekmece/hazne temizliği (Standby, çekmece çıkar, arka kapak aç, boşalt, ılık su 30 dk, yatay döndürüp boşalt, şamandırayı dikkatlice hareket ettir, kapak kapat, yumuşatıcı yedek parçası çıkar-durula-tak, dış yüzey, gövde, içeri it)
#   · A s.27 yalnız kendiliğinden akan sıvı deterjan; kombine ve çok yoğun ürün kullanılmamalı; "Akıllı dozajlama sistemi için dozaj ayarlama haznesine sirke doldurmayınız" · A s.34 her kullanımdan sonra kapak ve çekmece açık kurutulmalı
#   · A s.39 / G s.34 uzman personel uyarısı · A s.47 E-Nr./FD.
# BİLEREK YAZILMAYANLAR: "deterjan alınmıyor" için Siemens tablosunda satır yok; Bosch'taki su girişi satırı Siemens'e taşınmadı · i-Dos pompası/şamandıra arızası teşhisi (belgede yok)
#   · deterjanın gram/ml miktarı (Siemens ambalaja yönlendiriyor) · hangi programın yumuşatma içerdiği listesi (program tablosu modele göre; kılavuza yönlendirildi) · WN54C2A0TR (kurutmalı) bu sayfada kullanılmadı.
# Alıntı denetim tablosu: siemens-camasir-makinesi-deterjan-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~45 dakika"
  totalTime: "PT45M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Ilık su", "Yumuşak bir bez"]
steps:
  - "Yumuşatıcı çekmecede kalıyorsa seçtiğin programın yumuşatma içerip içermediğini kılavuzundaki program tablosundan kontrol et."
  - "Deterjan ve yumuşatıcıyı koyarken çekmecedeki işaretleri aşma."
  - "Yumuşatıcı gözünde su kalıyorsa çekmeceyi çıkar, gözdeki tertibatı aşağı bastırıp çıkar, su ve fırçayla temizle, yerine oturt."
  - "i-Dos'lu modelde simge yanıp sönüyorsa dozaj haznesine aynı sıvı deterjanı işareti aşmadan doldur ve kapağı hemen kapat."
  - "Intelligent Dosing tuşuna basılamıyorsa deterjanı bu yıkama için manuel dozajlama haznesine koy."
  - "Haznedeki deterjan koyulaştıysa ya da ürünü değiştireceksen hazneyi boşaltıp ılık suyla temizle."
  - "Intelligent Dosing tuşuna yaklaşık 3 saniye basıp temel dozaj miktarını ambalajdaki öneriye göre ayarla."
faq:
  - q: "Siemens çamaşır makinem yumuşatıcıyı almıyor, gözde kalıyor. Neden?"
    a: "Siemens'in kullanım kılavuzlarındaki arıza tablosunda 'Deterjan çekmecesinde yumuşatıcı kalıyor' satırının nedeni seçilen programın yumuşatıcı sağlayamaması. Siemens'in çözümü seçilen programda yumuşatma olup olmadığını kontrol etmek. Gözde yumuşatıcı değil de su kalıyorsa tablonun ayrı bir satırı var: o bölmedeki tertibat tıkanmış ve deterjan çekmecesinin temizlenmesi gerekiyor."
  - q: "i-Dos simgesi yanıp sönüyor, ne demek?"
    a: "Siemens'in ekran tablosuna göre akıllı dozaj simgesi yanıyorsa sıvı deterjan için akıllı dozaj sistemi açık; yanıp sönüyorsa dozajlama haznesindeki deterjan minimum dolum seviyesinin altına inmiş. Siemens'in önerisi hazneyi doldurmak: yalnız uygun sıvı deterjan, daha önce kullandığın ürünle aynısı, azami dolum işaretini aşmadan."
  - q: "Akıllı dozaj açıkken manuel hazneye de deterjan koyabilir miyim?"
    a: "Siemens'e göre hayır. Akıllı dozajlama sistemini kullanırken aşırı dozajlamayı önlemek için manuel dozajlama haznesine ekstra deterjan ya da yumuşatıcı eklenmemeli. Manuel hazne, program akıllı dozaja izin vermediğinde ya da leke tuzu, nişasta gibi ek bakım ürünü eklemek istediğinde kullanılıyor."
  - q: "Programı başlattım, tambur dönüyor ama su gelmiyor. Deterjan alınmıyor mu?"
    a: "Siemens'in tablosu bu durum için 'Hata yoktur' diyor: dolum algılama 2 dakikaya kadar aktif ve herhangi bir işlem gerekmiyor. Makine hiç su almıyorsa ya da ekranda E:30-10 görünüyorsa musluk, su giriş hortumu ve süzgeç kontrollerini Siemens çamaşır makinesi su almıyor yazımızda Siemens'in sırasıyla anlattık."
images:
  coverAlt: "Çamaşır makinesinden dışarı çekilmiş deterjan çekmecesi; yumuşatıcı gözünde kalmış mavi sıvı, yanında yumuşak bir fırça"
---

Program bitti, çekmeceyi açtın ve yumuşatıcı gözünde duruyor; ya da i-Dos'lu makinende akıllı dozaj simgesi yanıp sönüyor, deterjanı sanki hiç kullanmıyor. Siemens'in çamaşır makinesi kılavuzlarındaki arıza tablosunda "deterjan alınmıyor" diye tek bir satır yok. Bu şikâyet Siemens'in tablosunda modele göre farklı satırlara dağılıyor: deterjan çekmeceli modellerde **"Deterjan çekmecesinde yumuşatıcı kalıyor"** ve **yumuşatıcı bölmesinde kalan su**, akıllı dozajlı (i-Dos) modellerde ise **dozaj haznesi, Intelligent Dosing tuşu ve temel dozaj miktarı.** Bu yazıda iki grubu Siemens'in kendi satırlarıyla ayrı ayrı açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yumuşatıcı gözde kalıyorsa önce programın yumuşatma içerip içermediğine bak; gözde su kalıyorsa çekmeceyi temizle. i-Dos'ta simge yanıp sönüyorsa hazneyi aynı deterjanla doldur; Intelligent Dosing'e basılamıyorsa o yıkamada manuel hazneyi kullan; deterjan koyulaştıysa hazneyi temizle ve temel dozajı ayarla. Program başında 2 dakikaya kadar su gelmemesi Siemens'e göre arıza değil.

## Adım adım: evde denenecekler

Adım 1-3 deterjan çekmeceli modeller için; Siemens'in WG42K2Z0TR, WG44K2Z0TR, WG52K2Z0TR, WG64K2Z0TR ve WG52A203TR kılavuzlarında bu satırlar var. Adım 4-7 akıllı dozajlı WG54K2Y0TR ve WG64K2Y0TR gibi i-Dos'lu modeller için.

**1. Programın yumuşatma içerip içermediğine bak.** Siemens'in tablosunda **"Deterjan çekmecesinde yumuşatıcı kalıyor"** satırının nedeni şu: **seçilen program için yumuşatıcı sağlanamaz.** Siemens'in çözümü: **seçilen program için yumuşatmanın olup olmadığını kontrol et.** Programların ayrıntısı kılavuzundaki "Programlar" bölümünde.

**2. Çekmecedeki işaretleri aşma.** Siemens'in tablosundaki komşu satır: **deterjan veya yumuşatıcı contadan damlıyor** ve kapak üzerinde ya da conta kıvrımında toplanıyorsa neden **deterjan çekmecesinde çok fazla deterjan veya yumuşatıcı** olması. Çözüm: **dozajlama sırasında deterjan çekmecesindeki işaretlere dikkat et.** Siemens'in çekmece şemasına göre **Bölme II** esas yıkama deterjanı, **Bölme I** ön yıkama ve suda bekletme deterjanı, simgeli bölme **yumuşatıcı** için.

**3. Yumuşatıcı gözünde su kalıyorsa çekmeceyi temizle.** Siemens'e göre bu gözde su kalıyorsa **bölmedeki tertibat tıkanmış;** çözüm **deterjan çekmecesini temizlemek.** Siemens'in sırası: çekmeceyi dışarı çek, **tertibatı aşağı bastırıp** çekmeceyi çıkar, gözdeki tertibatı **aşağıdan yukarı bastırarak** çıkar, çekmeceyi ve tertibatı **su ve fırçayla** temizleyip kurula, tertibatı yerine oturt, çekmecenin **açıklığını** da temizle ve çekmeceyi içeri it.

**4. i-Dos simgesi yanıp sönüyorsa hazneyi doldur.** Siemens'in ekran tablosuna göre akıllı dozaj simgesi **yanıyorsa** sistem açık, **yanıp sönüyorsa** dozajlama haznesi **minimum dolum seviyesinin altına** inmiş. Siemens'in tarifi: çekmeceyi dışarı çek, kapağı aç ve sıvı deterjanı ilgili dozaj kabına doldur. Siemens'in kuralları: hazneye **yalnız uygun sıvı deterjan** koy, doldururken **aynı ürünü** kullan, **azami dolum seviyesi işaretini aşma** ve deterjan kurumasın diye **kapağı doldurduktan hemen sonra kapat.** Siemens ayrıca bu hazneye **sirke doldurulmamasını** istiyor.

**5. Intelligent Dosing'e basılamıyorsa manuel hazneyi kullan.** Siemens'in tablosunda **"Intelligent Dosing seçeneğine basılamıyor"** satırının nedeni: **seçilen program veya program ilerlemesi akıllı dozlamaya izin vermiyor.** Çözüm: **manuel dozajlama haznesini kullan.** Çekmeceyi çek, deterjanı manuel hazneye koy, çekmeceyi it. Siemens'in uyarısı: akıllı dozaj açıkken aşırı dozajlamayı önlemek için manuel hazneye **ekstra deterjan ya da yumuşatıcı ekleme.**

**6. Koyulaşmış deterjanı boşalt, hazneyi temizle.** Siemens'in tablosu, yıkama sonucu yetersizse ya da çamaşırda deterjan kalıntısı kalıyorsa haznedeki deterjanı kontrol etmeni istiyor: **deterjan uygun mu, koyulaşmış mı?** Uygun değilse ya da koyulaşmışsa **dozajlama haznelerini boşalt ve temizle.** Haznedeki deterjanı **başka bir ürünle değiştireceksen** de Siemens önce temizliği istiyor. Kılavuzdaki sıra özetle: cihazı **bekleme moduna** al, çekmeceyi çıkar, dozaj kabının **arka kapağını** aç ve boşalt, kaba **ılık su** doldurup **30 dakika** beklet, çekmeceyi yatay döndürüp boşalt, yapışmaları azaltmak için kabın içindeki **şamandırayı dikkatlice** hareket ettir, arka kapağı kapat. Siemens temizlikte **yalnız su ve yumuşak bir bez** kullanılmasını, sert ya da keskin nesne ve aşındırıcı temizleyici kullanılmamasını istiyor.

**7. Temel dozaj miktarını ayarla.** Tablodaki bir neden daha: **temel dozaj miktarı doğru ayarlanmamış.** Siemens'e göre temel dozaj, deterjan üreticisinin **ambalajdaki dozaj önerisine** karşılık gelmeli; **normal kirli 4,5 kg çamaşır** için önerilen miktarı ayarla ve **suyunun sertliğini** dikkate al. Ayar için **Intelligent Dosing** tuşuna **yaklaşık 3 saniye** bas, değeri **Bitiş Erteleme** tuşuyla değiştir, kaydetmesi için kısa bir süre bekle. Siemens'e göre bu ayar Home Connect uygulamasından da yapılabiliyor.

## Arıza sanılan durum

Program başında **tambur dönüyor ama su gelmiyorsa** Siemens'in tablosu bunu **"Hata yoktur"** diye açıklıyor: **dolum algılama 2 dakikaya kadar aktif** ve bir işlem gerekmiyor. Makine hiç su almıyorsa ya da ekranda **E:30-10** görünüyorsa Siemens'in tablosundaki su girişi satırlarına bak: musluk, su giriş hortumu ve süzgeç. Bunların Siemens'in sırasıyla anlatımı [Siemens çamaşır makinesi su almıyor](/blog/siemens-camasir-makinesi-su-almiyor/) yazısında.

Siemens'in genel deterjan notları da tıkanmayı önlemeye yardım ediyor: sıvı deterjanlardan **yalnız kendiliğinden akanları** kullan, farklı sıvı deterjanları ve deterjanla yumuşatıcıyı **birbirine karıştırma**, **kombine ve çok yoğunlaştırılmış** ürün kullanma. Siemens'e göre makine her kullanımdan sonra **kapak ve deterjan çekmecesi açık** bırakılarak kurutulmalı. Hangi deterjanın hangi göze konduğunu markadan bağımsız olarak [deterjan çekmecesinde hangi göz](/blog/camasir-makinesi-deterjan-cekmecesi-hangi-goz/) yazısında, genel listeyi [çamaşır makinesi deterjanı almıyor](/blog/camasir-makinesi-deterjan-almiyor/) yazısında bulabilirsin. Ekranda bir kod varsa [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) listesine bak.

## Sınır nerede biter

Program yumuşatma içeriyor, çekmece ve hazne temiz, deterjan uygun ve taze, temel dozaj ayarlı hâlde makine deterjanı ya da yumuşatıcıyı yine almıyorsa Siemens'in tablosu kullanıcıya başka adım vermiyor. Siemens'in uyarısı: **usulüne aykırı onarımlar tehlike teşkil eder; cihazda onarımları yalnız bunun eğitimini almış uzman personel yapabilir.** Müşteri hizmetlerini ararken cihazın **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Program seçimi, dozaj ayarı, çekmece ve hazne temizliği kullanıcıya; makinenin dozajlama ve su giriş tarafının içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Gözde kalan ne: deterjan mı, yumuşatıcı mı, yoksa su mu?
2. Makinende akıllı dozaj (i-Dos) var mı, simgesi yanıyor mu, yanıp sönüyor mu?
3. Hangi programı seçtin, yumuşatma içeriyor mu?
4. Çekmece ve dozaj haznesi en son ne zaman temizlendi?
5. Makine su alıyor mu, ekranda bir kod var mı?

Bu beşine cevabın varsa servise "deterjan almıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
