---
title: "Bosch kombi EA ve 227 hatası"
description: "Bosch kombide EA ve 227, Bosch'a göre alevin algılanmadığını söyler. Gaz vanası, ocak testi, su basıncı ve reset sırası adım adım."
slug: "bosch-kombi-ea-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF'ler pdftotext (-raw ve -layout) ile okundu, sayfa no -f/-l ile.
# Web araması kullanılmadı; belgelerin yeri Bosch'un kendi dizin sayfası ve bosch-tr-tr-b.boschhc-documents.com/td arama sayfasından bulundu.
# Alıntı denetim tablosu: bosch-kombi-ea-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: EA ve 227'nin Bosch tanımı aynı ("alev algılanmaması" / "Alev Algılanmıyor"); Condens 7000i W kılavuzu
#   arıza kodu örneğini "EA 227" diye birlikte veriyor. İki ayrı sayfa birbirinin tekrarı olurdu.
# K1) Bosch TR "Bosch Kombi EA Arızası" · https://www.bosch-homecomfort.com/tr/tr/residential/servis-hizmetlerimiz/ariza-kodlari-ve-cozumleri/ea/
#     HTTP 200 · 148.800 B · md5 20e5a441bf048d17adacd15e33233270
#     Birebir: "Bosch kombi ea arızası, kombinizde meydana gelen bir alev algılanmaması sorunudur." · ocak testi · daire dışındaki vana ·
#     "kombinizin yanında bulunan gaz vanasının boru ile aynı hizada olarak açık durumda bulunduğundan emin olunuz" ·
#     "Kombi su basıncında ideal aralık 1,2 – 1,5 bar arasıdır." · 1 bar altı → su takviye musluğu saat yönünün tersine ·
#     "kombinizin bazı parçalarında arıza yaşanmış olabilir" → Bosch yetkili servis · Müşteri İletişim Merkezi 444 24 74
# K2) Bosch TR "227 Arıza Kodu" · .../ariza-kodlari-ve-cozumleri/227/ · HTTP 200 · 143.189 B · md5 6ef3349cc49752692c4a58735cd51d8c
#     Birebir: "Alev Algılanmıyor" | "Gaz vanasının açık olup olmadığını kontrol edin."
# K3) Bosch TR dizin "Bosch Kombi Arıza Kodları ve Çözümleri" · .../ariza-kodlari-ve-cozumleri/ · HTTP 200 · 185.795 B · md5 92d4b4cafaffae97b4a3b4f58851a8ee
#     227 → Condens 2300i W listesi. EA → Condens 7000i W, Condens 2500 W, Comfort Condense, Class 2000 W, Class 6000 W,
#     Classic Silver, ClassicPlus, Exclusive, Comfort listeleri.
# B1) Condens 7000i W Kullanma Kılavuzu 6721835270 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835270
#     HTTP 200 · 1.119.714 B · 16 s. · md5 a485d15ed4c4466367fc4daa73fa1afb
#     Gaz vanası aç/kapa (kol akış yönünde = açık) + "örn. arıza kodu EA 227" + kapat-aç ya da "Sıfırla" görünene kadar reset +
#     servis + kod ve cihaz bilgisi + tip etiketi s.12 · manometre ve reset tuşu (Res.1 [7], [11]) s.8 · gaz kokusu s.3-4
# B2) Condens 2500 W Kullanma Kılavuzu 6721835246 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835246
#     HTTP 200 · 1.789.580 B · 16 s. · md5 81853ab2ff146ad75d9398dc0c9832b0
#     H ve ! / yalnız H reset ayrımı, "bir arıza kodu (örn. EA) yanıp söner" s.13 · basınç 1–2 bar, manometre s.8 · gaz kokusu s.3
# B3) Condens 2300i W Kullanma Kılavuzu 6721830375 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721830375
#     HTTP 200 · 1.286.203 B · 16 s. · md5 167bfab2336acd938ef5e1d26bd5dec9
#     Gaz vanası aç/kapa + H sembolü + iki reset yolu + servis s.11 · gaz kokusu s.3
# BİLEREK yazılmayanlar:
#  - EA/227'nin donanım nedeni (elektrot, gaz valfi, kart vb.): Bosch yalnız "bazı parçalarında arıza yaşanmış olabilir" diyor → parça adı yazılmadı.
#  - Reset tuşlarının adı/simgesi (kılavuzlarda simge olarak basılı, metinde okunmuyor); basılı tutma süresi.
#  - 2300i W ve 7000i W kılavuzları suyu "servisten göstermesini isteyin" diye bırakıyor; EA sayfasındaki musluk tarifi bu modellere taşınmadı.
#  - "EA'nın en sık görülen kod olduğu" gibi sıralama iddiası; tamir süresi, parça, maliyet.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Gaz kokusu alıyorsan kontrole başlama: gazı ana vanadan kes, pencereleri aç, binadan çık ve dışarıdan gaz dağıtım şirketini ara."
  - "Doğalgazlı ocağın varsa bir gözü yakmayı dene."
  - "Ocak da yanmıyorsa daire dışındaki gaz vanasına bak; kapalıysa aç."
  - "Ocak yanıyorsa kombinin yanındaki gaz vanasının kolunun boruyla aynı hizada, yani açık olduğundan emin ol."
  - "Kombinin manometresinden su basıncını oku; 1 bar'ın altındaysa basıncı yükselt."
  - "Kombiyi bir kez sıfırla: kapatıp aç ya da kılavuzundaki reset yolunu kullan."
  - "EA ya da 227 sürüyorsa kodu ve tip etiketindeki cihaz bilgisini not al, Bosch yetkili servisini ara."
faq:
  - q: "Bosch kombide EA hatası ne demek?"
    a: "Bosch'un EA sayfasına göre EA, kombide alevin algılanmaması sorunudur. Bosch'un ilk önerdiği kontrol gaz vanasının açık olup olmadığıdır; vana açıksa ikinci kontrol su basıncıdır. İkisi de normal olduğu hâlde kod sürüyorsa Bosch, kombinin bazı parçalarında arıza olabileceğini ve yetkili servise ulaşılmasını söylüyor."
  - q: "Bosch kombide 227 kodu ile EA aynı şey mi?"
    a: "Tanımları aynı: Bosch 227'yi \"Alev Algılanmıyor\", EA'yı alev algılanmaması sorunu olarak tanımlıyor. 227, Bosch'un listesinde rakamlı kod kullanan Condens 2300i W'de geçiyor; EA ise harfli kod kullanan modellerde. Condens 7000i W kullanma kılavuzu arıza kodu örneğini \"EA 227\" diye ikisi bir arada gösteriyor."
  - q: "Gaz vanasının açık olduğunu nasıl anlarım?"
    a: "Bosch'un EA sayfasına göre kombinin yanındaki gaz vanası, kolu boruyla aynı hizadayken açıktır. Condens 2300i W ve 7000i W kılavuzları da aynı şeyi söylüyor: kol akış yönündeyse açık, akış yönüne enine duruyorsa kapalı. Kılavuza göre vanayı açmak için kolu bastırıp sola doğru sonuna kadar çevirirsin."
  - q: "EA hatası verince kombiye su basmak gerekir mi?"
    a: "Yalnız basınç düşükse. Bosch'un EA sayfası ideal aralığı 1,2–1,5 bar olarak veriyor ve basınç 1 bar'ın altındaysa su basılabileceğini söylüyor. Condens 2500 W, 2300i W ve 7000i W kılavuzlarına göre işletme basıncı normalde 1 ila 2 bar arasındadır. 2300i W ve 7000i W kılavuzları suyun nasıl ilave edildiğini yetkili servisin göstermesini istiyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin altındaki sarı kollu gaz vanası, kolu borusuyla aynı hizada; kombinin ekranında harfli bir arıza kodu"
---

Bosch kombinin ekranında **EA** yanıp sönüyor, ya da rakamlı ekranlı bir Condens 2300i W'de **227** görüyorsun. İki kodun da Bosch'taki karşılığı aynı: EA sayfası kodu **"alev algılanmaması sorunu"** olarak, 227 sayfası **"Alev Algılanmıyor"** diye tanımlıyor. Bosch'un sırası da net: önce gaz vanası, sonra su basıncı, ikisi de yerindeyse yetkili servis.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** EA / 227 = Bosch'a göre alev algılanmıyor. Sıra şu: gaz kokusu varsa önce güvenlik → ocağı yakmayı dene → dış vana ya da kombinin gaz vanası → manometreden basınç → bir kez reset → kod sürüyorsa Bosch yetkili servis.

## EA ve 227 hangi Bosch kombilerde çıkar

Bosch'un arıza kodları sayfası kodları model başlıkları altında listeliyor:

- **227:** rakamlı kod kullanan **Condens 2300i W** listesinde.
- **EA:** harfli kod kullanan **Condens 7000i W, Condens 2500 W, Comfort Condense, Class 2000 W, Class 6000 W, Classic Silver, ClassicPlus, Exclusive** ve **Comfort** listelerinde.

Condens 7000i W kullanma kılavuzu arızayı ekranda **H sembolüyle** gösteriyor ve arıza kodu örneği olarak **"EA 227"** yazıyor. Condens 2500 W kılavuzunda ise arıza anında ekranda H, bazen de **!** sembolü çıkıyor ve arıza kodu (kılavuzdaki örnek **EA**) yanıp sönüyor. Hangi ekranı görürsen gör, bu yazıdaki sıra aynı.

## Önce güvenlik: gaz kokusu varsa

Kontrollere geçmeden önce kombinin çevresini kokla. Bosch'un Condens 2300i W, 2500 W ve 7000i W kılavuzlarının güvenlik bölümü gaz kokusunda şunu istiyor:

- Sigara içme, çakmak ve kibrit kullanma.
- Elektrik şalterine dokunma, fiş çekme; telefonu kullanma, kapı zilini çalma.
- **Ana kapama tertibatından** ya da **gaz sayacındaki vanadan** gazı kes.
- Pencere ve kapıları aç, bütün apartman sakinlerini uyar ve binayı terk et.
- Binaya başkalarının girmesine engel ol.
- Binanın dışında **itfaiyeyi, polisi ve gaz dağıtım şirketini** ara.

Koku yoksa aşağıdaki adımlara geç.

## Adım adım: evde denenecekler

**1. Gaz kokusunu ele.** Kombinin çevresinde gaz kokusu varsa bu yazıdaki hiçbir kontrole başlama; yukarıdaki güvenlik listesini uygula: gazı ana vanadan kes, pencereleri aç, binadan çık ve dışarıdan gaz dağıtım şirketini ara.

**2. Ocağı yakmayı dene.** Bosch'un EA sayfası gaz vanasını evdeki doğalgazlı cihazlarla kontrol etmeyi öneriyor. Doğalgazlı ocağın varsa bir gözü yakmayı dene. Bosch'un bir sonraki adımı ocağın yanıp yanmamasına göre ayrılıyor.

**3. Ocak yanmıyorsa dış vanaya bak.** Bosch'a göre ocak da çalışmıyorsa **daire dışındaki gaz vanasını** kontrol et; kapalıysa açık duruma getir.

**4. Ocak yanıyorsa kombinin gaz vanasına bak.** Bosch'un EA sayfasındaki ölçüt şu: kombinin yanındaki gaz vanası **boruyla aynı hizada** olmalı, o zaman açıktır. Condens 2300i W ve 7000i W kılavuzları aynı vanayı şöyle anlatıyor: **kol akış yönündeyse açık**, akış yönüne **enine** duruyorsa kapalı. Vana kapalıysa kılavuzdaki tarif: kolu **bastır ve sola doğru sonuna kadar çevir.**

**5. Su basıncını oku.** Gaz vanası açıksa Bosch'un ikinci kontrolü su basıncı. Basıncı kombinin **manometresinden** okursun; Condens 7000i W kılavuzunda manometre kumanda panelinin bir parçası olarak gösteriliyor. Bosch'un EA sayfası ideal aralığı **1,2–1,5 bar** olarak veriyor; Condens 2500 W, 2300i W ve 7000i W kılavuzlarında işletme basıncı normal durumlarda **1 ila 2 bar** arasında. Basınç **1 bar'ın altındaysa** EA sayfası kombiye su basılmasını söylüyor. Nasıl yapılacağı modele göre değişiyor, ayrıntısı aşağıda.

**6. Bir kez sıfırla (reset).** Condens 2300i W kılavuzuna göre bazı arızalar ısıtma tesisatını kapatır ve tesisat sıfırlanmadan tekrar çalışmaz. Reset yolu modele göre değişiyor:

- **Condens 7000i W:** cihazı kapatıp aç ya da ekranda **"Sıfırla"** görünene kadar **reset tuşuna** bas.
- **Condens 2500 W:** ekranda **H ve !** varsa kılavuzda gösterilen tuşa, iki sembol kaybolana kadar basılı tut; **yalnız H** varsa cihazı açma-kapama tuşuyla kapatıp yeniden çalıştır.
- **Condens 2300i W:** cihazı kapatıp aç ya da kılavuzda gösterilen iki tuşu, **H ve !** sembolleri kaybolana kadar aynı anda basılı tut.

Kombi yeniden çalışınca ekranda gidiş suyu sıcaklığı görünür.

**7. Kod sürüyorsa servisi ara.** Gaz vanası açık, basınç yerinde ve EA ya da 227 hâlâ geliyorsa Bosch'un EA sayfasına göre kombinin bazı parçalarında arıza yaşanmış olabilir; çözüm için Bosch yetkili servisine ulaş. Kılavuzlar servisi ararken **gösterilen arıza kodunu ve cihaz bilgilerini** bildirmeni istiyor.

## Su basıncı düşükse: modele göre iki tarif

Bosch'un belgelerinde su eklemenin iki farklı anlatımı var; kendi kombine uyanı seç:

- **Bosch'un EA sayfası:** kombinin altındaki **su takviye musluğunu saat yönünün tersine** çevir ve basıncı 1,2–1,5 bar'a getir.
- **Condens 2500 W kılavuzu:** doldurma ünitesi cihazın **alt tarafında**, ısıtma gidiş suyu ile sıcak kullanım suyu çıkış bağlantısı arasında. Doldurma vanasını aç, manometre **1 ile 2 bar** arası gösterince **tekrar kapat.**
- **Condens 2300i W ve 7000i W kılavuzları:** ısıtma devresinin doldurulması **tesisata göre farklılık gösterir**; yetkili servisten ısıtma suyunun nasıl ilave edildiğini **göstermesini iste.** Tesisatı **yalnız soğukken** doldur (gidiş suyu en fazla 40 °C).

Üç kılavuzda da ortak üst sınır: ısıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı; aşılırsa emniyet ventili açılır. Basıncın markadan bağımsız mantığı için: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

## Ne zaman doğrudan servis

- Gaz vanası açık, basınç normal ve reset sonrası EA ya da 227 geri geliyorsa.
- Kombinin dış sacını açma: Condens 2300i W ve 2500 W kılavuzları dış sacın **asla sökülmemesini** ve gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor.

Bosch, kesin tespit için **Müşteri İletişim Merkezi**ni (444 24 74) de gösteriyor. Servise bildireceğin cihaz adı ve seri numarası, kılavuzlara göre **kumanda paneli kapağındaki tip etiketinde** yazılı.

## Servisi aramadan önce kısa kontrol

1. Ekrandaki kod EA mı, 227 mi, yanında H ya da ! var mı?
2. Ocak yanıyor mu?
3. Kombinin gaz vanasının kolu boruyla aynı hizada mı?
4. Manometre kaç bar gösteriyor?
5. Reset bir kez denendi mi, kod geri geldi mi?

Kombinin yanmama belirtisi için markadan bağımsız anlatım: [kombi yanmıyor](/blog/kombi-yanmiyor/). Bosch'un bütün modellerindeki kodlar için: [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/).

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
