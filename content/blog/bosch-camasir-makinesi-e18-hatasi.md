---
title: "Bosch çamaşır makinesi E18 (F18) hatası: ne demek, çözümü"
description: "Bosch çamaşır makinesinde E18 (F18, d02), suyun tahliye edilemediğini gösterir. Bosch kılavuzundaki sırayla hortum, sifon, pompa filtresi ve servis sınırı."
slug: "bosch-camasir-makinesi-e18-hatasi"
date: "2026-08-21"
updated: "2026-10-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ (YK #189 fırsat sayfası 1/30): içerik iyileştirmesi; slug, şablon ve yapı aynı (YK #179 dondurması).
# GSC (www-9 Sorgular.csv): "bosch çamaşır makinesi e18 hatası" 106 gösterim poz. 10,23 · "bosch e18 hatası" 93 · "... e 18 ne demek" 63 · "... nasıl düzeltilir" 43 · "... f18 hatası" 22.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF'ler pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  W) Bosch TR "Çamaşır makinesi ekranda E18 gösteriyor"  https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/e18-ekrani  md5 c60e020b31077a5a6f030577621c120a
#  A) WAK20200TR  https://media3.bsh-group.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d  (E:18 s.29; pompa s.26-27)
#  B) WAK20211TR 9001112382_B ff2f36e5… (E:18 s.29) · C) WAK20202TR 9001113797_C b8c8d9f6… (s.28) · D) WAK24210TR 9000941315_A e1a8d222… (s.26)
#  E) WAK... 9001330439_C 52114ce8… (s.35) · F) WAT... 9001006315_I ae469964… (s.25) · G) WIW...V2 9001358632_A 3f82f8e6… (s.49)
#  H) WAY24841TR 9000920773_A ebec9e8f… (s.46) · I) WAY287X2TR 9000987360_B 6b60c6fc… (s.39) · J) WAY28862TR 9001149885_A 3dc6b92d… (s.43)  "Pompayı temizleyiniz"
#  K) WGA142X1TR 9001583102_B 42506a8c… (E:30 / -80 s.38-39; pompa s.35-36) · L) WGA244A0TR 9001709506_A 23d5ed1b… (s.40-41) · M) WGB244A0TR 9001708433_H a02d83ed… (E:36 -10 / E:30 -80 s.42)
# Tam liste, alıntılar ve md5'ler: bosch-camasir-makinesi-e18-hatasi.KAYNAK.md
# Bilerek YAZILMAYANLAR: "zaman aşımı/seviye ölçümü" mekanizması ve "elektronik kart" teşhisi (Bosch metninde yok, eski metinden çıkarıldı); pompa sökümü; "üç ayda bir" bakım sıklığı (belgede yok).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Havlu", "Sığ bir kap", "Küçük fırça (eski diş fırçası)"]
steps:
  - "Musluğu kapat, programı iptal et, makineyi kapat ve fişini çek."
  - "Tahliye hortumunu izle; bükülme, ezilme ya da gidere fazla itilmiş bir uç var mı bak."
  - "Hortumun bağlandığı gider ağzını ve sifonu kontrol et, tıkanıklık varsa aç."
  - "Ön alttaki servis kapağını aç, önüne havlu ser ve sığ kabı yerleştir."
  - "Acil boşaltma hortumundan kalan suyu al, sonra pompa kapağını dikkatlice çevirerek çıkar."
  - "Kapağın iç kısmını, dişlerini ve pompa gövdesini temizle; pompa çarkının dönebildiğini kontrol et."
  - "Pompa kapağını sonuna kadar çevir, tutamak dik dursun; servis kapağını kapat."
  - "Fişi tak, 1 litre suyla Boşaltma programını dene ve sızıntıya bak; hata sürerse servis gerekir."
faq:
  - q: "Bosch çamaşır makinesi E18 hatası ne demek?"
    a: "Bosch'un Türkiye destek sayfasına göre E18, makinenin atık suyu tahliye edemediğini gösterir; tamburda su kalmış da olabilir. Bosch'un saydığı sebepler pompanın tıkanması ve tahliye hortumunun bükülmesidir, kılavuzlar buna tıkalı boşaltma borusunu da ekler. Yani kod bir parçanın yandığını değil, suyun gitmediğini söyler ve Bosch bu sorunun çoğu zaman kullanıcı tarafından çözülebildiğini belirtir."
  - q: "E18, F18 ve d02 aynı şey mi?"
    a: "Evet. Bosch'un destek sayfası, farklı modellerde bu hatanın farklı kodlarla göründüğünü ve F18 ile d02'nin aynı arızanın kodları olduğunu yazıyor. Yeni nesil bazı Bosch kılavuzlarında ise E:18 satırı yok; tahliye sebepleri E:30 / -80 satırında listeleniyor. Ekranındaki yazıyı kendi modelinin kılavuzundaki arıza tablosuyla karşılaştırmak en sağlam yoldur."
  - q: "Filtreyi temizledim ama E18 yine geliyor, sırada ne var?"
    a: "Bosch kılavuzları iki sebep sayar: tıkalı pis su pompası ve tıkalı boşaltma hortumu ya da borusu. Pompa temizse sifona bağlı hortum ucunu ve gider bağlantısını kontrol et; yeni nesil kılavuzlar hortumun en fazla 1 metre yüksekliğe bağlanmasını ve izinsiz uzatma yapılmamasını da şart koşar. Bunlara rağmen su gitmiyorsa Bosch'a göre pompada arıza olabilir ve orası servis işidir."
  - q: "Kazan su dolu kaldıysa çamaşırları çıkarabilir miyim?"
    a: "Kapağı zorlamadan önce suyu boşaltman gerekir, çünkü makine içeride su varken kilidi açmaz. Bosch'un sırası şöyle: musluğu kapat, makineyi kapatıp fişini çek, su sıcaksa soğumasını bekle, servis kapağını aç ve acil boşaltma hortumundan suyu bir kaba al. Kap dolunca tıpayı kapatıp boşaltır, işlemi su bitene kadar tekrarlarsın."
images:
  coverAlt: "Aydınlık bir banyoda duran beyaz çamaşır makinesinin işaretsiz kumanda paneli ve deterjan çekmecesi"
  steps:
    - "Dibinde su duran kilitli çamaşır makinesi kapağı ve yanında prizden çekilen fiş"
    - "Tahliye hortumunun üç sorunlu durumu: mobilya ayağı altında ezilme, keskin büküm ve gidere fazla itilmiş uç"
    - "Lavabo, tortuyla dolmuş sifon ve makine hortumunun bağlandığı gider ağzını gösteren tesisat kesiti"
    - "Ön alt kapağı açılmış çamaşır makinesi, önüne serilmiş havlu, geniş sığ kap ve bekleme süresini anlatan saat"
    - "Acil boşaltma hortumunun tıpası çekilerek suyun kaba alınması, ardından pompa filtresinin elle çevrilmesi"
    - "Akan suyun altında fırçalanan pompa filtresi ve filtreden çıkan tüy, düğme, bozuk para"
    - "Yarım turda kalmış ve altından damlayan filtre ile sonuna kadar çevrilmiş filtrenin karşılaştırması"
    - "Kısa program kadranı ve denemenin iki sonucu: program ilerliyor ya da aynı noktada duruyor"
---

Program bitti sandın, kapağı açmaya gittin ama kilit açılmadı; camdan bakınca kazanın dibinde su duruyor. Panelde ise **E18** yazıyor. Kısa cevap: Bosch'un kendi destek sayfasına göre E18, **makinenin atık suyu tahliye edemediğini** gösterir. Bosch'un saydığı sebepler **tıkanmış pompa** ve **bükülmüş tahliye hortumudur**; şirket bu sorunun çoğu zaman kullanıcı tarafından çözülebildiğini de yazıyor. Aynı arıza bazı modellerde **F18** ya da **d02** olarak görünür.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E18 = su tahliye edilemedi. Sıra şu: musluğu kapat ve fişi çek → tahliye hortumunda bükülme → gider ve sifon → pompa kapağını açıp temizleme → Boşaltma programıyla deneme. Hepsi temizse ve su hâlâ gitmiyorsa iş pompadadır → servis.

## Adım adım: evde denenecekler

**1. Güvenliği al.** Bosch'un ilk adımı: makineye daha fazla su girmesin diye **musluğu kapat**, programı iptal et, makineyi açma-kapama düğmesiyle kapat ve **fişini çek**. Su ve elektrikle aynı anda uğraşma.

**2. Tahliye hortumunu izle.** Hortumu makinenin arkasından gidere kadar gözünle takip et. Mobilya altında ezilmiş, arkada keskin biçimde bükülmüş ya da bir dolabın ayağı altına sıkışmış olabilir. Bosch bükülmüş hortumu düzeltmeni söylüyor; yeni nesil kılavuzlar hortumun **en fazla 1 metre** yüksekliğe bağlanmasını ve izinsiz uzatma yapılmamasını da şart koşar.

**3. Gideri ve sifonu kontrol et.** Kılavuzlardaki E:18 satırının ikinci maddesi "Sifona bağlı boşaltma hortumunu temizleyiniz" der. Aynı hattaki başka bir gider de yavaş boşalıyorsa sorun makinede değil, tesisattadır.

**4. Kapağı aç ve önlemini al.** Makinenin ön altındaki servis kapağını aç. Önüne **havlu ser** ve sığ bir kap koy; içeriden düşündüğünden fazla su gelir. Program yeni durduysa su sıcak olabilir: Bosch suyun soğumasını beklemeni istiyor.

**5. Suyu boşalt, pompa kapağını çıkar.** Kapağın arkasındaki acil boşaltma hortumunu tutucusundan çıkar, tıpasını çekip suyu kaba al; kap dolunca tıpayı geri tak ve boşalt. Su bitince pompa kapağını **dikkatlice çevirerek** çıkar, içinde kalan su akabilir.

**6. Pompayı temizle.** Bosch'un tarifi: pompa kapağının iç kısmını, dişli bölümünü ve pompa gövdesini temizle. Tüy, düğme, bozuk para burada toplanır. Ardından pompa çarkının **dönebildiğinden emin ol**; Bosch bunu açıkça istiyor.

**7. Geri tak ve sızdırmazlığı kontrol et.** Pompa kapağını dayanağa kadar çevir; **tutamağı dik konumda** durmalı. Yeni nesil kılavuzlar "pompa kapağı tamamen vidalanmamış" durumunu da bu hatanın sebepleri arasında sayar. Sonra servis kapağını kapat.

**8. Dene.** Fişi tak. Bosch'un önerdiği kontrol: deterjan çekmecesinin **II numaralı gözüne 1 litre su** dök, **Boşaltma** programını başlat ve sızıntı olup olmadığına bak. Su gidiyorsa sorun pompa ya da hattaydı.

## E18, F18, d02: Bosch ne diyor?

Bosch Türkiye'nin E18 sayfası net: kod, atık suyun tahliye edilemediğini gösterir ve "F18 ve d02 kodları aynı arızanın kodlarıdır". Yani ekranında hangisini görürsen gör, tablo aynı. Diğer kodların tam listesi [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/) sayfamızda; ekranda kod yerine bir simge yanıyorsa [Bosch çamaşır makinesi sembolleri ve anlamları](/blog/bosch-camasir-makinesi-sembolleri-ve-anlamlari/) yazısına bak.

## Modeline göre ekranda ne yazar?

Bu bilgi Bosch'un Türkçe kullanım kılavuzlarındaki arıza tablolarından alındı:

| Kılavuz (model) | Ekrandaki gösterge | Kılavuzun yazdığı sebep |
|---|---|---|
| WAK20200TR, WAK20202TR, WAK20211TR, WAK24210TR | E:18 | Pompa tıkanmış; boşaltma hortumu ya da borusu tıkanmış |
| WAK..., WAT... ve ankastre WIW...V2 kılavuzları | E:18 | Pis su pompası tıkanmış; tahliye hortumu ya da borusu tıkanmış |
| WAY24841TR, WAY287X2TR, WAY28862TR | "Pompayı temizleyiniz" yazısı | Pompa tıkanmış; boşaltma hortumu ya da borusu tıkanmış |
| WGA142X1TR, WGA244A0TR | E:30 / -80 | Hortum ya da boru tıkalı veya bükülmüş, pompa tıkalı, hortum 1 metreden yüksek, pompa kapağı tam vidalanmamış |
| WGB244A0TR | E:36 -10 / E:30 -80 | Hortum çok yüksekte, bükülmüş ya da uzatılmış; boru tıkalı; pompa tıkalı ya da kapağı yanlış takılmış |

Ekranında E:30-80 görüyorsan ayrıntılı rehber [Bosch çamaşır makinesi E:30-80 hatası](/blog/bosch-camasir-makinesi-e30-80-hatasi/) sayfasında.

## Karıştırılan kodlar ve belirtiler

- **Su almıyorsa** kod büyük ihtimalle E18 değil, E17'dir: [Bosch çamaşır makinesi E17 hatası](/blog/bosch-camasir-makinesi-e17-hatasi/).
- **Bosch bulaşık makinesindeki E18** başka bir koddur; Bosch'un sayfasına göre su girişiyle ilgilidir: [Bosch bulaşık makinesi E18 hatası](/blog/bosch-bulasik-makinesi-e18-hatasi/).
- **Kapak açılmıyorsa** ve ekranda kod yoksa: [Bosch çamaşır makinesi kapağı açılmıyor](/blog/bosch-camasir-makinesi-kapak-acilmiyor/).
- **Markadan bağımsız** genel tablo için: [Çamaşır makinesi su atmıyor](/blog/camasir-makinesi-su-atmiyor/).

## Tekrarını önlemek için tek alışkanlık

E18'in ev kaynaklı sebepleri kendini tekrar eder: pompa aynı şeylerle yeniden dolar, hortum aynı köşede yeniden bükülür. Bosch kılavuzu yıkamadan önce **çamaşırların tüm ceplerini boşaltmayı** ve ataç gibi metal parçaları çıkarmayı ister; pompadan çıkanların listesi genelde ceplerden başlar.

## Sınır nerede biter

Hortum düz, gider açık, pompa tertemiz olduğu hâlde su hâlâ gitmiyorsa Bosch'un ifadesiyle **pompada arıza olabilir**. Kılavuzlar da usulüne uygun olmayan onarımların tehlikeli olduğunu, onarımı yalnız eğitimli uzmanın yapması gerektiğini yazar.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **servis kapağının arkası kullanıcıya, gövdenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Tahliye hortumu düz, ezilme yok; kontrol edildi mi?
2. Gider ve sifon açık, aynı hattaki diğer giderler normal mi?
3. Pompa kapağı açılıp temizlendi mi, çark dönüyor mu, içinden ne çıktı?
4. Boşaltma programıyla tekrar denendi mi, hata aynı noktada mı geldi?

Dördüne de cevabın varsa elinde tek kelimelik bir şikâyet değil, servise anlatabileceğin net bir tablo var. Ekranda gördüğün kodu ve modelin tam adını da not et.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
