---
title: "Profilo bulaşık makinesi çalışmıyor"
description: "Profilo bulaşık makinesi çalışmıyor mu? Ekrana bak: karanlıksa sigorta ve fiş, yanıp sönüyorsa kapı, CL tuş kilidi, h: zaman ön seçimi, tepkisizse 2 dakika."
slug: "profilo-bulasik-makinesi-calismiyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, belirti rehberi, Siemens+Profilo grubu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, HTTP 200;
# md5 30 Eyl yerel kopyasıyla birebir aynı. Belge adresi Profilo'nun ürün sayfasından (BM6380MA, "user-manuals") 30 Eyl'de alınmıştı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-profilo-sprint/9001951966_E.pdf (doğrulama kopyası: kaynak-siemens-profilo-2eki/dl-9001951966_E.pdf) · okuma pdftotext -layout, sayfa = basılı sayfa no.
#  (C) Profilo BM6380MA kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001951966_E.pdf  52 s.  md5 2e7b3ee8867b8a5fe2e9a021a73228f8
# YAKIN KOPYA KAPISI: yayındaki bosch-bulasik-makinesi-calismiyor okundu (eski Bosch SM/SB belgesi 9001220403_D; sigorta→fiş→musluk→kapak→START→ön seçim→5 sn→Reset).
#   Bu sayfa ekranın durumuna göre kuruldu ve Profilo belgesinin Bosch sayfasında olmayan satırlarını öne çıkarır: "Ekran yanıp sönüyor" (kapı/sarkan bulaşık), "CL" tuş kilidi
#   (elektrik kesintisinde etkin kalır), 15 dk / 1 dk / 4 sn otomatik kapanma, 2 dakika bekleme, "Program kendiliğinden çalışmaya başlıyor", E:27 düşük şebeke gerilimi, kapı kilidi konumu.
# Arıza tablosu (C s.46-47): "Ekran yanıp sönüyor" → "Cihaz kapısı tam kapanmamış." → kapağı kapat; hiçbir parça sepetten sarkmasın
#   · "Cihaz devreye sokulamıyor veya kullanılamıyor." → "Cihazın fonksiyonları devre dışı kaldı." → fişi çek/sigortayı kapat, en az 2 dakika bekle, bağla, çalıştır
#   · "Cihaz harekete geçmiyor." → evin sigortası · fişli kablo prize takılı değil (prizin çalışması; kablonun prize ve cihazın arka tarafına tam takılı olması) · kapı tam kapanmamış
#   · "Program kendiliğinden çalışmaya başlıyor." → "Programın sona ermesi beklenmedi." → "Programın iptal edilmesi"
#   · "Cihaz program esnasında duruyor veya devre dışı kalıyor." → kapı · elektrik ve/veya su beslemesi kesilmiş · üst sepet kapının iç kısmına bastırıyor → arka panel priz/hortum tutucu; sarkan bulaşık
#   · "Cihaz kapısı kapatılamıyor." → kapı kilidinin konumu değişmiş → daha fazla kuvvetle kapat (kaşıkla kilit geri getirme: ALET, adımlara alınmadı) · montaj engeli → dolaplara/tezgaha çarpmamalı
# C s.39: E:27 "Şebeke gerilimi çok düşük. Cihaz hatası yok." → elektrik teknisyeni · "Göstergede başka bir hata kodu beliriyor. E:01 ile E:30 arası" → Açma/Kapama, fiş/sigorta, en az 2 dk, çalıştır; tekrar → musluk kapat, fiş çek, müşteri hizmetleri
# C s.37 E:18 / su girişi göstergesi → musluk kapalı → musluğu aç (yalnız gövdede anıldı)
# Diğer: C s.15 kumanda paneli (Açma/Kapama tuşu; Start tuşu ve Reset tuşu tek tuş; Zaman ön seçimi) · C s.31 açma, Eko 50° ön ayarlı, 15 dk kullanılmazsa otomatik kapanma (donanıma göre)
#   · C s.31-32 zaman ön seçimi (24 saate kadar, "h:01", "h:00" ile devre dışı) · C s.32 başlatma ("0:00" program sonu), program değişikliği yalnız iptalle, program sonundan 1 dk sonra kapanma / kapı hemen açılırsa 4 sn
#   · C s.32 tuş kilidi (yakl. 3 sn; ekranda "CL"; elektrik kesintisinde etkin kalır; program sonunda kendiliğinden kalkar) · C s.32 duraklatma (Açma/Kapama → program kaydedilir; ısınmış cihazda kapıyı birkaç dakika aralık bırak)
#   · C s.32 iptal (Start/Reset yakl. 3 sn, yakl. 1 dk sonra tamamlanır) · C s.5 uzatma kablosu / çoklu priz yok · C s.37 onarım yalnız eğitimli uzman personel · C s.50 E-Nr./FD.
# BİLEREK YAZILMAYANLAR: kart/kapı kilidi/güç kaynağı teşhisi (belgede yok) · kapı kilidini kaşıkla temel konuma getirme (alet kuralı; yalnız "kılavuzuna bak / servis" diye anıldı)
#   · tuş simgelerinin tarifi (PDF metin katmanında okunmuyor) · 15 dk otomatik kapanmanın bütün modellerde olduğu (belge "Cihazın donanımına göre değişir" diyor).
# Alıntı denetim tablosu: profilo-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekran tamamen karanlıksa evdeki sigorta kutusunda bulaşık makinesinin sigortasını kontrol et."
  - "Prizin çalıştığını, kablonun prize ve makinenin arkasına tam takılı olduğunu kontrol et; uzatma kablosu ya da çoklu priz kullanma."
  - "Ekran yanıp sönüyorsa kapıyı tam kapat; sepetten sarkıp kapıya takılan bulaşık bırakma."
  - "Tuşlara basınca ekranda CL görünüyorsa tuş kilidi açıktır; tuş kilidi tuşuna yaklaşık 3 saniye basarak kapat."
  - "Ekranda h: ile başlayan bir süre görünüyorsa zaman ön seçimi açıktır; süreyi bekle ya da ekranda h:00 görünene kadar ön seçimi geri al."
  - "Ekran kendiliğinden söndüyse makineyi Açma/Kapama tuşuyla yeniden aç, programı seç ve Start tuşuna bas."
  - "Makine tuşlara hiç tepki vermiyorsa fişi çek ya da sigortayı kapat, en az 2 dakika bekle, yeniden bağla ve makineyi çalıştır."
  - "Program yarıda durduysa elektrik ve su beslemesini kontrol et; üst sepetin kapıya bastırmadığını ve makinenin arkasının bir şeye dayanmadığını gör."
faq:
  - q: "Profilo bulaşık makinesinin ekranında CL yazıyor, tuşlar çalışmıyor. Ne demek?"
    a: "Profilo'nun BM6380MA kullanım kılavuzuna göre CL, tuş kilidinin açık olduğunu gösterir. Tuş kilidi makinenin çalışma sırasında yanlışlıkla kullanılmasını önler ve program bitince kendiliğinden kalkar. Kapatmak için tuş kilidi tuşuna yaklaşık 3 saniye bas. Profilo'ya göre elektrik kesilse de tuş kilidi etkin kalmaya devam eder."
  - q: "Program bitti, ekran birden söndü. Arıza mı?"
    a: "Hayır. Profilo'nun kılavuzuna göre makine enerji tasarrufu için program bittikten 1 dakika sonra kapanır; program biter bitmez kapıyı açarsan 4 saniye sonra kapanır. Bazı modellerde makine 15 dakika kullanılmazsa da kendiliğinden kapanır. Yeniden kullanmak için Açma/Kapama tuşuna basman yeterli."
  - q: "Kapıyı kapatmadığım hâlde makine kendiliğinden çalışmaya başladı. Neden?"
    a: "Profilo'nun arıza tablosunda bu durum 'Program kendiliğinden çalışmaya başlıyor' satırında. Tablodaki neden: programın sona ermesi beklenmedi. Çözüm olarak kılavuz programın iptal edilmesi bölümünü gösteriyor: Start/Reset tuşuna yaklaşık 3 saniye bas; program iptal edilir ve iptal yaklaşık 1 dakika sonra tamamlanır."
  - q: "Ekranda E:27 yanıyor ve makine çalışmıyor. Ne yapmalıyım?"
    a: "Profilo'nun tablosuna göre E:27 şebeke geriliminin çok düşük olduğunu gösterir ve bir cihaz hatası değildir. Profilo'nun önerisi bir elektrik teknisyeni çağırıp şebeke gerilimini ve elektrik tesisatını kontrol ettirmek."
images:
  coverAlt: "Mutfakta kapağı kapalı bulaşık makinesinin ön panelinde ekran sönük duruyor; bir el panelin üst kenarındaki tuşa uzanıyor"
---

START'a basıyorsun, hiçbir şey olmuyor. Profilo bulaşık makinesinde neye bakacağını en hızlı **ekran** söylüyor: tamamen karanlık mı, yanıp sönüyor mu, üzerinde **CL** ya da **h:** gibi bir yazı mı var? Profilo'nun BM6380MA kullanım kılavuzundaki arıza tablosu bu durumların her biri için ayrı bir satır veriyor; örneğin **"Cihaz harekete geçmiyor."**, **"Ekran yanıp sönüyor"** ve **"Cihaz devreye sokulamıyor veya kullanılamıyor."** Bu yazıda ekranın hâline göre Profilo'nun sırasını izliyoruz. Tuş ve gösterge adları modele göre değişebilir; kendi kılavuzun esastır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekran karanlık → sigorta, priz ve kablo. Ekran yanıp sönüyor → kapı tam kapanmamış. Ekranda CL → tuş kilidi, 3 saniye bas. Ekranda h: → zaman ön seçimi. Ekran sönmüş → makine kendini kapatmış, yeniden aç. Hiç tepki yok → 2 dakika elektrikten ayır. Program yarıda durdu → elektrik, su, kapı ve sepet.

## Adım adım: evde denenecekler

**1. Ekran karanlıksa sigortaya bak.** Profilo'nun **"Cihaz harekete geçmiyor."** satırındaki ilk neden **evin sigortasında bir arıza.** Çözüm: evdeki sigortayı kontrol et.

**2. Prizi ve kabloyu kontrol et.** Aynı satırdaki ikinci neden: **fişli kablo prize takılı değil.** Profilo önce **prizin çalışıp çalışmadığını**, sonra kablonun **hem prize hem makinenin arka tarafına tamamen takılı** olup olmadığını kontrol etmeni istiyor. Kılavuzun güvenlik bölümü ayrıca **uzatma kablosu ve çoklu priz takımı kullanılmamasını** yazıyor; kablo kısa geliyorsa ev tesisatı için uzman bir elektrik şirketi aranmalı.

**3. Ekran yanıp sönüyorsa kapıyı kapat.** Profilo'nun tablosunda **"Ekran yanıp sönüyor"** satırının nedeni tek: **cihaz kapısı tam kapanmamış.** Kapıyı kapat ve bulaşıkları **hiçbir parça sepetten sarkmayacak**, kapının güvenle kapanmasını engellemeyecek şekilde yerleştir. Kapı tam kapanmadığında makine harekete de geçmiyor; bu, "Cihaz harekete geçmiyor" satırındaki üçüncü neden.

**4. Ekranda CL varsa tuş kilidini kapat.** Profilo'ya göre tuş kilidi açıkken makine kullanılmaya çalışıldığında ekranda **"CL"** görünür. Tuş kilidini kapatmak için tuş kilidi tuşuna **yaklaşık 3 saniye** bas. Kilit program bitince kendiliğinden kalkar; Profilo'ya göre **elektrik kesilse de tuş kilidi etkin kalır.** Tuşun hangisi olduğu kılavuzunun "Tuş kilidinin devre dışı bırakılması" bölümünde.

**5. Ekranda h: varsa zaman ön seçimine bak.** Profilo'da programın başlaması **24 saate kadar** geciktirilebiliyor; ön seçim ayarlanırken ekranda **"h:01"** gibi bir değer görünür. Makine o süre dolunca başlar. Beklemek istemiyorsan Profilo'nun ipucu: zaman ön seçimini ekranda **"h:00"** görünene kadar geri alarak devre dışı bırak.

**6. Ekran söndüyse makineyi yeniden aç.** Makine bazen kendini kapatır ve bu arıza değildir. Profilo'ya göre makine **program bittikten 1 dakika sonra** kapanır; program biter bitmez kapıyı açarsan **4 saniye sonra** kapanır. Bazı modellerde makine **15 dakika kullanılmazsa** da kendiliğinden kapanır. **Açma/Kapama** tuşuna bas; Profilo'ya göre makine açıldığında **Eko 50°** programı seçili gelir. Başka program istiyorsan program tuşuna bas, sonra **Start** tuşuna bas.

**7. Tuşlar tepkisizse 2 dakika elektrikten ayır.** Tablodaki **"Cihaz devreye sokulamıyor veya kullanılamıyor."** satırının nedeni: **cihazın fonksiyonları devre dışı kaldı.** Profilo'nun sırası: **fişi çek ya da sigortayı kapat, en az 2 dakika bekle**, makineyi yeniden elektriğe bağla ve çalıştır.

**8. Program yarıda durduysa beslemeye ve sepete bak.** **"Cihaz program esnasında duruyor veya devre dışı kalıyor."** satırında Profilo üç şey sayıyor: kapı tam kapanmamış olabilir; **elektrik ve/veya su beslemesi kesilmiş** olabilir, ikisini de kontrol et; ya da **üst sepet kapının iç kısmına bastırıyor** olabilir. Son durumda Profilo makinenin **arka panelinin bir priz ya da sökülmemiş bir hortum tutucu yüzünden içeri bastırılıp bastırılmadığına** bakmanı istiyor.

## Kendin durdurduysan ya da program kendiliğinden başladıysa

Program sürerken **Açma/Kapama** tuşuna bastıysan makine bozulmadı: Profilo'ya göre **program kaydedilir ve makine kapanır;** devam etmek için tuşa yeniden basarsın. Makine ısınmışken kapıyı açtıysan Profilo'nun uyarısı: kapıyı önce **birkaç dakika aralık bırak**, sonra kapat.

Tablodaki ilginç satırlardan biri **"Program kendiliğinden çalışmaya başlıyor."** Profilo'nun yazdığı neden: **programın sona ermesi beklenmedi.** Çözüm, programı iptal etmek: **Start/Reset** tuşuna **yaklaşık 3 saniye** bas; program iptal edilir ve iptal **yaklaşık 1 dakika** sonra tamamlanır. Profilo'ya göre devam eden bir programı başka bir programla değiştirmenin yolu da bu iptal.

## Kapı kapanmıyorsa

Profilo'nun **"Cihaz kapısı kapatılamıyor."** satırındaki ilk neden **kapı kilidinin konumunun değişmesi;** ilk öneri kapıyı **biraz daha kuvvet uygulayarak** kapatmak. Kılavuz kilidi temel konumuna geri getirmek için ayrıca aletle yapılan bir yöntem anlatıyor; bunu kendin denemek yerine kılavuzundaki bölüme bak ya da yetkili servise bırak. İkinci neden montaj: Profilo'ya göre kapı, kapı dekoru ya da montaj parçaları kapanırken **yandaki dolaplara ve tezgaha çarpmamalı.**

## Ekranda E: ile başlayan bir kod varsa

**E:27** Profilo'nun tablosunda **şebeke geriliminin çok düşük** olduğunu gösteriyor ve **cihaz hatası değil;** Profilo bir elektrik teknisyeni çağırıp gerilimi ve tesisatı kontrol ettirmeni öneriyor. Su girişi göstergesi yanıyorsa tablodaki nedenlerden biri **musluğun kapalı olması;** musluğu aç. **E:01 ile E:30 arasındaki** başka bir kod için Profilo'nun sırası: fişi çek ya da sigortayı kapat, **en az 2 dakika** bekle, yeniden bağlayıp çalıştır. Kod geri gelirse **musluğu kapat, fişi çek** ve müşteri hizmetlerine kodu bildir.

Makine çalışıyor ama suyu atmıyorsa kardeş rehberimiz [Profilo bulaşık makinesi su boşaltmıyor](/blog/profilo-bulasik-makinesi-su-bosaltmiyor/) yazısına, program uzayıp bitmiyorsa [bulaşık makinesi programı bitirmiyor](/blog/bulasik-makinesi-programi-bitirmiyor/) yazısına bakabilirsin.

## Ne zaman servis

Sigorta, priz, kapı, tuş kilidi ve zaman ön seçimi yerinde, 2 dakikalık elektrik kesme denendi ve makine hâlâ çalışmıyorsa ya da bir hata kodu tekrar ediyorsa müşteri hizmetlerine başvur. Profilo'nun uyarısı açık: **cihazda onarımları sadece bunun eğitimini almış uzman personel yapabilir.** Ararken tip etiketindeki **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Sigorta, priz, kapı ve paneldeki ayarlar kullanıcıya; kapı kilidi, makinenin içi ve elektrik tesisatı uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ekran ne gösteriyor: karanlık, yanıp sönen, CL, h: ya da bir E: kodu?
2. Fiş doğrudan duvardaki prize mi takılı, sigorta yerinde mi?
3. Kapı tam kapanıyor mu, sepetten sarkan bulaşık var mı?
4. 2 dakikalık elektrik kesme denendi mi?
5. Makine yarıda durduysa o sırada elektrik ya da su kesildi mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
