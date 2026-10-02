---
title: "Siemens buzdolabı soğutmuyor"
description: "Siemens buzdolabı soğutmuyor mu? Önce panele bak: kapalı (stand-by), tatil ya da enerji tasarrufu modu, sıcaklık ayarı, kapı, yerleştirme ve hava açıklıkları."
slug: "siemens-buzdolabi-sogutmuyor"
date: "2026-10-02"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, belirti rehberi, Siemens+Profilo grubu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Siemens'in kendi alan adlarından indirildi, hepsi HTTP 200.
# #88: web araması kullanılmadı (Siemens sayfası, Siemens destek merkezinin buzdolabı alt sayfasındaki bağlantıdan bulundu); forum/servis sitesi/üçüncü taraf yok.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-profilo-2eki/ (W + PDF doğrulama kopyaları) · PDF'ler 30 Eyl'de kaynak-bosch-siemens-buzdolabi-sprint/'e de indirilmişti; md5'ler birebir aynı.
#  (W)  Siemens TR "Siemens Buzdolabı Soğutmuyor"  https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/buzdolabi-hakkinda/sogutmuyor
#       gövde metni md5 60ca8c0b77e7be3b3ca2d33c99f2289c (HTML dinamik: iki ardışık indirmede HTML md5'i değişti, gövde düz metni birebir aynı kaldı)
#  (K1) Siemens KG56N.. kullanım kılavuzu  https://media3.bsh-group.com/Documents/8001263930_A.pdf  40 s.  md5 7fbc7de0e85475abf39711c9c89cf326  (sayfa atıfları buna göre)
#  (K2) Siemens KG55N.. kullanım kılavuzu  https://media3.bsh-group.com/Documents/8001251508_B.pdf  32 s.  md5 e20da81de6c2eb92c0283f7810435915  (tatil/enerji tasarrufu modu K1 ile aynı, s.18)
#  (K3) Siemens KGN.. kullanma kılavuzu (eski nesil)  https://media3.bsh-group.com/Documents/9000987392_C.pdf  31 s.  md5 749d560fc2ff0474fc287de622385886
# YAKIN KOPYA KAPISI: yayındaki bosch-buzdolabi-sogutmuyor okundu (Bosch KGN76.. tablosu; sergileme modu ile açılıyor; tatil/enerji tasarrufu modunu bilerek dışarıda bırakmış).
#   Bu sayfa Siemens'in kendi destek sayfasını (W) eksen alır: stand-by, tatil modu (14 °C), yaz ayarı +2/−20, yerleştirme kuralları, 6-8 saat; K1'den enerji tasarrufu modu (8 °C/−16 °C) ve iklim sınıfı.
#   Sergileme modu ve "sıcaklık ayardan farklı" satırları ayrı bölümde kısa tutuldu. Giriş, sıra ve SSS farklı kuruldu.
# W: elektrik kesintisi → ayarlanan sıcaklığa ulaşmak zaman alabilir · kapılar kapalı, yazın uzun açık tutma · stand-by: panel kapalı/ışık yok/soğutmuyor → açma kapama tuşu 3 sn; tuşsuzda "+" 10-15 sn; "+" yoksa "°C" 10 sn
#   · tatil modu: holiday/vacation/bavul simgesi; soğutucu 14 °C, dondurucu ayarı değişmez; çıkış: holiday/vacation'a bas, yoksa "mode"a hiçbir mod vurgulanmayana kadar bas
#   · ayarlanan sıcaklığa kurulumdan 6-8 saat sonra ulaşır; sıcaklık kapı açma sıklığı, doluluk, gıda sıcaklığı, ortam sıcaklığı, güneş ışığına göre değişir
#   · yiyecekleri paketli/üstü kapalı, iç havalandırma kanallarından uzak, arka panellere temas etmeden; tencere/sürahi gibi yüksek gereçleri soğutucunun en üst rafında muhafaza etme · sıcak yiyeceği oda sıcaklığına inince koy
#   · +4/−18 kullanıyorsan en sıcak yaz günlerinde +2/−20; mekanik düğmede saat yönü = daha soğuk · dondurucu için büyük miktar taze yiyecekten önce süper dondurma · çözülmüş yiyecek tekrar dondurulmaz
#   · "Belli bir süre sonunda ... soğutma performansı istenilen değerde değilse" müşteri hizmetleri; adımlara rağmen sürerse servis randevusu.
# K1: s.17 açma ("Cihaz önceden kumanda paneli üzerinden kapatılmışsa, [simge] sembolüne 3 saniye basılı tutunuz. a Cihaz soğutmaya başlar.") · s.17 "ayarlanan sıcaklığa ancak birkaç saat sonra ulaşılır"
#   · s.17-18 önerilen 4 °C / −18 °C · s.18 tatil modu (soğutucu 14 °C; "Tatil modunda soğutma bölmesinde herhangi bir besin muhafaza etmeyiniz.") · s.19 enerji tasarrufu modu (soğutucu 8 °C, dondurucu −16 °C)
#   · s.19 kapı alarmı · s.10 dış hava açıklıklarını asla kapatma/örtme, ısı kaynaklarından uzak, duvarla yandan küçük mesafe · s.11 iklim sınıfı ("Cihaz, izin verilen oda sıcaklığı dahilinde sahip olduğu tüm işlevleri ile çalışır.")
#   · s.29 "Cihaz soğutmuyor, göstergeler ve aydınlatma yanıyor." → sergileme modu (kapat, 2 dk, aç, 1 dk, Soğutucu bölmesi tuşu 4 sinyal) · s.30 sıcaklık alarmı → dış hava açıklıkları / dondurma kapasitesi
#   · s.31 "Sıcaklık derecesi, yapılmış ayardan çok daha farklı." → kapat, yakl. 5 sn sonra aç; yüksekse birkaç saat sonra, düşükse ertesi gün kontrol · s.29 onarım yalnız eğitimli uzman · s.35 E-Nr./FD/Z-Nr. tip etiketinde
# K3: s.24 "Herhangi bir gösterge yanmıyor." → "Elektrik kesintisi; sigorta kapalı; elektrik fişi prize iyi takılmamış." → fişi tak, elektrik var mı, sigortaları kontrol et.
# BİLEREK YAZILMAYANLAR: W'deki süper dondurma süresi "12-24 saat" ile K1'deki "2 kg'dan fazla için 4-6 saat" birbirini tutmuyor → süre yazılmadı · W'deki çağrı merkezi numarası
#   · K3'teki "5 dakika kapatma" (K1 yeni nesilde 5 saniye diyor; K1 kullanıldı) · gaz/kompresör/termostat/sensör teşhisi (belgelerde yok) · tuş simgelerinin tarifi (PDF metin katmanında okunmuyor) · #46 rakamları.
# Alıntı denetim tablosu: siemens-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika (birkaç saatlik bekleme hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Paneldeki hiçbir gösterge yanmıyorsa fişin prize tam takılı olduğunu, elektriğin geldiğini ve sigortayı kontrol et."
  - "Elektrik varken panel kapalıysa buzdolabı kapalı (stand-by) olabilir; açma kapama tuşunu 3 saniye basılı tutarak aç."
  - "Panelde holiday, vacation ya da bavul simgesi yanıyorsa tatil modundan çık."
  - "Enerji tasarrufu modu açıksa kapat ve sıcaklık ayarını kontrol et: soğutucu 4 °C, dondurucu −18 °C."
  - "Yazın en sıcak günlerinde ayarı soğutucuda +2 °C'ye, dondurucuda −20 °C'ye çek."
  - "Kapıların tam kapalı olduğunu kontrol et ve kapıyı uzun süre açık tutma."
  - "Yiyecekleri üstü kapalı, iç havalandırma kanallarından uzak ve arka panele değmeyecek şekilde yerleştir; sıcak yemeği oda sıcaklığına inince koy."
  - "Cihazın dış hava açıklıklarının önünde engel bırakma ve buzdolabını ısı kaynaklarından uzak tut."
faq:
  - q: "Siemens buzdolabımın paneli kapalı, ışığı da yanmıyor. Bozuk mu?"
    a: "Siemens'in destek sayfasına göre panel kapalıysa, ışıklar yanmıyorsa ve soğutmuyorsa buzdolabı kapalı (stand-by) durumda olabilir. Açma kapama tuşu varsa 3 saniye basılı tutarak açarsın; bu tuşun olmadığı modellerde '+' işaretine 10-15 saniye, '+' de yoksa '°C' işaretine 10 saniye basılı tutulur. Önce fişi ve sigortayı kontrol etmeyi unutma."
  - q: "Tatil modu açıkken buzdolabı neden soğutmuyor gibi?"
    a: "Siemens'e göre tatil modunda soğutucu bölmesi 14 °C'ye ayarlanır, dondurucu bölmesinin ayarı değişmez. Bu mod uzun süre evde olmayacağın zamanlar için. Siemens'in uyarısı: tatil modundayken soğutucu bölmesinde hiçbir yiyecek saklama. Modu kapatmak için holiday ya da vacation simgesine bas; bu simgeler yoksa 'mode' tuşuna hiçbir mod vurgulanmayana kadar bas."
  - q: "Buzdolabını yeni kurdum, hâlâ içi soğumadı. Normal mi?"
    a: "Evet. Siemens'in destek sayfasına göre buzdolabı ayarlanan sıcaklığa kurulumdan 6-8 saat sonra ulaşır; kılavuz da ayarlanan sıcaklığa ancak birkaç saat sonra ulaşıldığını ve o zamana kadar yiyecek konmaması gerektiğini yazıyor. Uzun ya da sık elektrik kesintilerinden sonra da ayarlanan sıcaklığa ulaşmak zaman alabilir."
  - q: "Yazın buzdolabı yeterince soğutmuyor. Ayarı ne yapmalıyım?"
    a: "Siemens'in önerisi: buzdolabını +4 ve −18 derecede kullanıyorsan yılın en sıcak yaz günlerinde +2 ve −20 dereceye alabilirsin. Soğutucu bölmesinin ayarı mekanik bir düğmeyle yapılıyorsa düğmeyi saat yönünde birkaç kademe çevirmek daha soğuk, ters yönde çevirmek daha sıcak bir ayar verir."
images:
  coverAlt: "Kapısı açık iki kapılı buzdolabının üst rafında üstü kapalı saklama kapları; bir el kapıdaki kumanda panelinin tuşuna basıyor"
---

Buzdolabının içi ılık ama ortada bir hata kodu yok. Siemens'in kendi destek sayfası bu durumu **"en çok karşılaşılan durumlardan biri"** olarak anlatıyor ve sebeplerin önemli bir kısmını panelde arıyor: buzdolabı **kapalı (stand-by)** kalmış olabilir, **tatil modu** açık olabilir, ayar mevsime uymuyor olabilir. Bu yazıda Siemens'in destek sayfasındaki sırayı, KG56N.. ve KG55N.. serisi kullanım kılavuzlarındaki mod ve arıza bilgileriyle birlikte izliyoruz. Tuş ve simge adları modele göre değişebilir; kendi kılavuzun esastır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Panel tamamen kapalıysa önce fiş ve sigorta, sonra stand-by (açma kapama tuşu 3 saniye). Panelde tatil simgesi ya da enerji tasarrufu modu varsa kapat. Ayar soğutucuda 4 °C, dondurucuda −18 °C; yazın +2 ve −20. Kapıyı kapalı tut, yiyecekleri arka panele ve hava kanallarına değdirme, dış hava açıklıklarını kapatma.

## Adım adım: evde denenecekler

**1. Hiçbir gösterge yanmıyorsa elektriğe bak.** Siemens'in eski KGN.. kılavuzundaki arıza tablosunda **"Herhangi bir gösterge yanmıyor."** satırının nedenleri: **elektrik kesintisi, kapalı sigorta ya da prize iyi takılmamış fiş.** Çözüm: fişi tak, elektriğin gelip gelmediğini ve sigortaları kontrol et.

**2. Panel kapalıysa buzdolabını aç.** Siemens'in destek sayfasına göre kumanda paneli kapalı, ışıklar yanmıyor ve soğutmuyorsa buzdolabı **kapalı durumda (stand-by)** olabilir. Açma kapama tuşu olan modellerde tuşu **3 saniye basılı tutarak** açarsın; KG56N.. kılavuzu da cihaz panelden kapatıldıysa sembole 3 saniye basılı tutulduğunda **cihazın soğutmaya başladığını** yazıyor. Açma kapama tuşu olmayan modellerde Siemens **"+" işaretine 10-15 saniye**, "+" da yoksa **"°C" işaretine 10 saniye** basılı tutmanı söylüyor.

**3. Tatil modundan çık.** Panelde **"holiday", "vacation"** ya da **bavul** simgesi yanıyorsa buzdolabı tatil modunda. Siemens'e göre bu modda soğutucu bölmesi **14 °C'ye** ayarlanır, dondurucunun ayarı değişmez. Çıkmak için holiday ya da vacation simgesine bas; bu simgelerin olmadığı panellerde **"mode" tuşuna hiçbir mod vurgulanmayana kadar** bas. Siemens'in uyarısı: tatil modu açıkken soğutucu bölmesinde **hiçbir yiyecek saklama.**

**4. Enerji tasarrufu modunu ve ayarı kontrol et.** KG56N.. ve KG55N.. kılavuzlarında bir de **enerji tasarrufu modu** var; bu modda cihaz sıcaklıkları kendisi ayarlar: soğutucu **8 °C**, dondurucu **−16 °C.** Siemens'in önerdiği değerler ise soğutucu için **4 °C**, derin dondurucu için **−18 °C.** Mod açıksa kapat ve iki bölmenin ayarına bak. Genel bilgi [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısında.

**5. Yazın ayarı bir kademe soğut.** Siemens'in destek sayfasındaki öneri: buzdolabını **+4 ve −18** derecede kullanıyorsan yılın en sıcak yaz günlerinde **+2 ve −20** dereceye alabilirsin. Soğutucunun ayarı mekanik bir düğmeyle yapılıyorsa düğmeyi **saat yönünde birkaç kademe** çevirmek daha soğuk bir ayar verir.

**6. Kapıları kapalı tut.** Siemens kapıların **kapalı olduğundan emin olmanı** ve özellikle yaz aylarında kapıları **uzun süre açık tutmamanı** öneriyor. Kılavuza göre kapı uzun süre açık kalırsa **kapı alarmı** devreye girer: ikaz sesi duyulur ve ilgili bölmenin sıcaklık göstergesi yanıp söner; kapıyı kapatınca ses kapanır. Kapı tam oturmuyorsa [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/) yazısına bak.

**7. Yiyecekleri doğru yerleştir.** Siemens'in destek sayfası yiyecekleri **hava geçirmeyecek şekilde paketli ya da üstü kapalı**, **iç havalandırma kanallarından uzakta** ve **arka panellere temas etmeyecek** şekilde koymanı istiyor. Tencere ve sürahi gibi yüksek kapları soğutucu bölmesinin **en üst rafında** tutma. Pişmiş ya da yeni ısıtılmış yiyecek ve içecekleri koymadan önce **oda sıcaklığına inmelerini** bekle.

**8. Dış hava açıklıklarını açık bırak.** KG56N.. kılavuzuna göre dış hava açıklıkları **asla kapatılmamalı ya da örtülmemeli;** buzdolabı ısıtıcılardan, kaloriferlerden ve ocaklardan **mümkün olduğunca uzak** kurulmalı. Arıza tablosunda dondurucu sıcaklık alarmının sayılan nedenlerinden biri de **dış hava açıklıklarının üzerinin kapanması;** çözüm önündeki engelleri gidermek.

## Ekran ve ışık yanıyor ama hiç soğutmuyorsa

KG56N.. kılavuzunun arıza tablosunda bunun için ayrı bir satır var: **"Cihaz soğutmuyor, göstergeler ve aydınlatma yanıyor."** Siemens'in yazdığı neden **sergileme modunun** açık olması. Çıkış sırası: cihazı kapat, **2 dakika** bekle, yeniden aç; **1 dakika** sonra **Soğutucu bölmesi** tuşunu **4 akustik sinyal** duyulana kadar basılı tut ve kısa süre sonra soğutup soğutmadığını kontrol et.

Ekrandaki sıcaklık ayarladığın değerden çok farklıysa tablo **"Farklı sebepler söz konusu olabilir."** diyor: cihazı kapat, **yaklaşık 5 saniye** sonra yeniden aç; sıcaklık çok yüksekse birkaç saat sonra, çok düşükse ertesi gün yeniden kontrol et.

## Yeni kurduysan ya da elektrik kesildiyse

Siemens'in destek sayfasına göre buzdolabı ayarlanan sıcaklığa **kurulumdan 6-8 saat sonra** ulaşır; o zamana kadar yiyecek koyma. Uzun süren ya da sık elektrik kesintilerinden sonra da ayarlanan sıcaklığa ulaşmak **zaman alabilir.** Siemens içerideki sıcaklığın kapıların açılma sıklığına, buzdolabının doluluğuna, konan yiyeceklerin sıcaklığına, ortam sıcaklığına ve buzdolabının güneş alıp almamasına göre değiştiğini de yazıyor.

Kılavuzdaki bir ayrıntı daha: izin verilen oda sıcaklığı cihazın **iklim sınıfına** bağlı ve iklim sınıfı **tip etiketinde** yazıyor. Siemens'e göre cihaz bütün işlevleriyle ancak **izin verilen oda sıcaklığı içinde** çalışır.

Dondurucudaki yiyecekler yumuşadıysa Siemens'in sağlık uyarısı: **buzu çözülmeye başlamış ya da çözülmüş yiyecekler tekrar dondurulmamalı;** ancak pişirildikten ya da kızartıldıktan sonra yeniden dondurulabilir. Markadan bağımsız nedenler için [buzdolabı soğutmuyor: nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısına bakabilirsin.

## Ne zaman servis

Panel açık, modlar kapalı, ayar doğru, kapılar ve hava açıklıkları yerinde ve buzdolabına birkaç saat tanıdığın hâlde soğutma yetersizse Siemens'in destek sayfası müşteri hizmetlerine ulaşmanı söylüyor. Kılavuzun uyarısı da açık: **cihazda onarımları sadece bunun eğitimini almış uzman personel yapabilir.** Ararken tip etiketindeki **ürün numarasını (E-Nr.)**, **imalat numarasını (FD)** ve **sayma numarasını (Z-Nr.)** hazır bulundur.

⛔ **Kendin-çöz sınırı burada biter.** Panel, ayar, kapı ve yerleştirme kullanıcıya; arka kapak, soğutma sistemi ve elektrik tarafı uzmana aittir.

## Servisi aramadan önce kısa özet

1. Panel açık mı, hangi simgeler yanıyor (tatil, enerji tasarrufu)?
2. Soğutucu ve dondurucu kaç dereceye ayarlı?
3. Soğutmayan bölme hangisi: soğutucu mu, dondurucu mu, ikisi mi?
4. Buzdolabı yeni mi kuruldu, yakın zamanda elektrik kesildi mi?
5. Hava açıklıklarının önü ve buzdolabının çevresi açık mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
