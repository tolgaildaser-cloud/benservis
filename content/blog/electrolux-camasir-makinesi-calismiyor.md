---
title: "Electrolux çamaşır makinesi çalışmıyor"
description: "Electrolux çamaşır makinesi programı başlatmıyorsa: fiş, sigorta, kapak, Başlat/Beklet, Program bitiş zamanı, Çocuk Kilidi ve su musluğu kontrolü."
slug: "electrolux-camasir-makinesi-calismiyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi, HTTP 200, application/pdf.
# (Düz -A "Mozilla/5.0" ile electrolux.com.tr 000/zaman aşımı veriyor.) #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Belge adresi: electrolux.com.tr ürün sayfası EW8F7417QT "Kullanma Kılavuzu" bağlantısı (electrolux.bynder.com/.../2408314AXD-pdf.pdf); aynı belge www.electrolux.com.tr/services/eml/ yolundan indirildi, md5 birebir aynı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · sayfa = PDF sayfası (= basılı sayfa no).
#  (E) Electrolux EW8F7417QT çamaşır makinesi kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/ad871a8b-e93c-46e3-b647-bd0475695b2c/E4RM3Q/2408314AXD/PDF/2408314AXD.pdf  56 s.  md5 d1fe605dbe55bda4a842f4f7671dca3e
# Arıza tablosu (E s.48) "Program başlamıyor.": "Elektrik fişinin prize takılı olduğundan emin olun." · "Cihazın kapağının kapalı olduğundan emin olun."
#   · "Sigorta kutusundaki sigortaların doğru çalıştığından emin olun." · "Başlat/Beklet tuşuna basıldığından emin olun."
#   · "Gecikmeli başlatma seçeneği ayarlanmışsa, ayarı iptal edin ya da geri sayımın bitmesini bekleyin." · "Açık ise Çocuk Kilidi fonksiyonunu devre dışı bırakın." · "Seçilen programın düğme konumunu kontrol edin."
# Alarm tablosu (E s.47-48) "Cihaz çalışmaya başlamıyor veya çalışma esnasında duruyor." + "Herhangi bir kontrol yapmadan önce, cihazı devre dışı bırakın."
#   · su musluğu açık/basınç/tıkalı/hortum bükülme/hortum bağlantısı/giriş hortumu ve vana filtresi · "Kapağın düzgün bir şekilde kapatıldığından emin olun." · "Şebeke elektriği düzenli olana dek bekleyin."
#   · "Gösterge ekranında başka alarm kodları gösterilirse, cihazı devre dışı bırakın ve çalıştırın. Sorun devam ederse, Yetkili Servis Merkezi ile temasa geçin."
# Diğer: E s.49 güncelleme satırı (Açma/Kapama dışında düğmeler devre dışı → güncelleme bitene kadar bekle) · E s.50 "Kontrol sonrasında, cihazı çalıştırın. Program, kesildiği noktadan itibaren devam eder." + servis/bilgi etiketi
#   · E s.30-31 12.8 Program bitiş zamanı (kaldırma: Menü, KAPALI görünene kadar sol tuş) · E s.31 12.9 Çocuk Kilidi (devre dışı: sağ ekran tuşunu 3 saniye basılı tut; açıkken Başlat/Beklet'e basmadan cihaz başlamaz notu, Çocuk Kilidi simgesi)
#   · E s.37 14.7 programı başlatma (Başlat/Beklet; kapak kilitlenir) · E s.38 14.14 Bekleme fonksiyonu (5 dk kullanılmazsa kapanır; Açma/Kapama ile aç; Eco 40-60 varsayılan)
# BİLEREK YAZILMAYANLAR: elektronik kart/kapı kilidi teşhisi (belgede yok) · giriş hortumu/valf filtresi sökümü (halka somun + diş fırçası → alet; gövdede yalnız bölüm adı) · Uzaktan Başlatma (kapak satırında, bu belirtiye bağlanmadı) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-camasir-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Elektrik fişinin prize takılı olduğunu kontrol et."
  - "Sigorta kutusundaki sigortaları kontrol et."
  - "Ekran kapalıysa Açma/Kapama tuşuna bas."
  - "Kapağı düzgünce kapat."
  - "Program düğmesinin istediğin programda olduğunu kontrol et ve Başlat/Beklet tuşuna dokun."
  - "Program bitiş zamanı ayarlıysa iptal et ya da geri sayımın bitmesini bekle."
  - "Çocuk Kilidi açıksa sağ ekran tuşunu 3 saniye basılı tutarak kapat."
  - "Su musluğunun açık olduğunu kontrol et."
faq:
  - q: "Makine kendiliğinden kapandı, bozuldu mu?"
    a: "Büyük ihtimalle bekleme fonksiyonu devreye girmiştir. Electrolux'un EW8F7417QT kılavuzuna göre bu fonksiyon, herhangi bir program çalışmıyorken makine 5 dakika kullanılmadığında ve program bittikten 5 dakika sonra makineyi enerji tasarrufu için kapatır. Tekrar açmak için Açma/Kapama tuşuna bas; kılavuza göre açıldıktan sonra varsayılan program her zaman Eco 40-60 olur, yeni bir program seçmek için program düğmesini çevir."
  - q: "Ekranda yalnız Açma/Kapama tuşu çalışıyor, diğer tuşlar tepki vermiyor. Neden?"
    a: "Electrolux'un sorun giderme tablosunda bu durum için ayrı bir satır var: göstergede bir simge görünüyor ve Açma/Kapama dışındaki tüm düğmeler devre dışıysa, kılavuza göre cihaz mevcut güncellemeleri indiriyordur. Kılavuzun önerisi güncelleme tamamlanana kadar beklemek; cihazı güncelleme sırasında kapatırsan yeniden açtığında güncellemeye devam eder. Aynı kılavuza göre Çocuk Kilidi açıkken de ekran tuşları devre dışı kalır ve ekranın ortasında Çocuk Kilidi simgesi görünür."
  - q: "Elektrik kesildi, program yarıda kaldı. Baştan mı başlatmalıyım?"
    a: "Electrolux'un alarm tablosunda şebeke elektriği düzenli değilse çözüm, elektrik düzenli olana dek beklemek; kılavuza göre elektrik kaynağı sabit olduğunda program devam eder. Tablonun altındaki not da aynı yönde: kontrolden sonra cihazı çalıştırdığında program kesildiği noktadan itibaren devam eder."
  - q: "Ekranda tabloda olmayan bir alarm kodu var, ne yapmalıyım?"
    a: "Electrolux'un kılavuzuna göre gösterge ekranında başka alarm kodları görünürse cihazı kapatıp yeniden çalıştır. Sorun devam ederse Yetkili Servis Merkezi ile temasa geç. Servis için gereken bilgiler cihazın bilgi etiketinde yazıyor."
images:
  coverAlt: "Kapağı kapalı ön yüklemeli çamaşır makinesinin kontrol panelinde parmakla dokunulan başlat tuşu ve yanında program düğmesi"
---

Program seçtin, tuşa bastın ama makine su almıyor, tambur dönmüyor. Electrolux'un EW8F7417QT kullanma kılavuzunda bu durum için tek satırlık bir başlık var: **"Program başlamıyor."** Altında yedi kontrol sıralanıyor ve hepsi kullanıcı tarafında yapılabiliyor: fiş, kapak, sigorta, Başlat/Beklet tuşu, gecikmeli başlatma, Çocuk Kilidi ve program düğmesi. Electrolux'un alarm tablosu da işe yarıyor; bazı durumlarda makine çalışmaya başlamadan ekrana bir uyarı yazıyor. Kaynak tek bir modelin kılavuzu; ekran ve tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş ve sigorta → ekran kapalıysa Açma/Kapama → kapak → program düğmesi ve Başlat/Beklet → Program bitiş zamanı → Çocuk Kilidi → su musluğu. Ekranda tablodaki uyarılardan biri varsa ona göre davran; başka bir alarm kodu varsa makineyi kapatıp aç, sorun sürerse Yetkili Servis.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Electrolux'un listesindeki ilk madde: **elektrik fişinin prize takılı olduğundan emin ol.** Kılavuz her kontrolden önce **cihazı devre dışı bırakmanı** da istiyor.

**2. Sigortaya bak.** Aynı satırdaki ikinci elektrik kontrolü: **sigorta kutusundaki sigortaların doğru çalıştığından emin ol.** Alarm tablosunda bir not daha var: **şebeke elektriği düzenli değilse** elektrik düzenli olana dek bekle; Electrolux'a göre elektrik kaynağı sabit olduğunda program devam eder.

**3. Ekran kapalıysa makineyi aç.** Bu madde tabloda değil, kılavuzun günlük kullanım bölümünde. Electrolux'un **bekleme fonksiyonu**, herhangi bir program çalışmıyorken makine **5 dakika** kullanılmadığında makineyi enerji tasarrufu için kendiliğinden kapatır. Tekrar çalıştırmak için **Açma/Kapama** tuşuna bas.

**4. Kapağı düzgünce kapat.** Tablodaki madde: **cihazın kapağının kapalı olduğundan emin ol.** Alarm tablosunda bu durum ekrana uyarı olarak da düşüyor: cihazın kapağı açıksa ya da doğru şekilde kapatılmamışsa çözüm, **kapağın düzgün bir şekilde kapatıldığından emin olmak.**

**5. Program düğmesine ve Başlat/Beklet'e bak.** Electrolux'un iki maddesi birlikte: **seçilen programın düğme konumunu kontrol et** ve **Başlat/Beklet tuşuna basıldığından emin ol.** Kılavuza göre Başlat/Beklet'e dokunduğunda ilgili gösterge yanıp sönmeyi bırakıp sürekli yanar, program başlar ve kapak kilitlenir.

**6. Program bitiş zamanını kontrol et.** Tablodaki madde: **gecikmeli başlatma seçeneği ayarlanmışsa ayarı iptal et ya da geri sayımın bitmesini bekle.** EW8F7417QT'de bu seçeneğin adı **Program bitiş zamanı;** ayarlandığında geri sayım ekranın üst kısmında görünür. Kaldırmak için Menü üzerinden Program bitiş zamanı seçeneğine gel ve ekranda **KAPALI** görünene kadar sol dokunmatik tuşla süreyi azalt.

**7. Çocuk Kilidi'ni kapat.** Tablodaki madde: **açıksa Çocuk Kilidi fonksiyonunu devre dışı bırak.** Kılavuza göre bu seçenek açıkken ekran tuşları ve dokunmatik ekran devre dışı kalır, ekranın ortasında Çocuk Kilidi simgesi görünür ve makine kapatılsa da seçim hafızada kalır. Devre dışı bırakmak için **sağ ekran tuşunu 3 saniye basılı tut;** bir geri sayım başlar.

**8. Su musluğunu kontrol et.** Makine başlayıp hemen duruyorsa Electrolux'un alarm tablosundaki ilk satıra bak: cihaza düzgün şekilde su doldurulamıyorsa **su musluğunun açık olduğundan,** tıkalı olmadığından, **giriş hortumunda bükülme ya da hasar olmadığından** ve hortum bağlantısının doğru olduğundan emin ol. Electrolux'a göre su giriş basıncının çok düşük olup olmadığını yerel su tedarikçin söyleyebilir.

Aynı alarm satırı **giriş hortumu filtresi ile vana filtresinin** tıkalı olmamasını da istiyor. Bu temizlik kılavuzun "Bakım ve Temizlik" bölümünde anlatılıyor; hortumun musluktan ve makinenin arkasından sökülmesini, valf filtresinin de fırçayla temizlenmesini gerektiriyor. Bu işi yapmaktan emin değilsen yetkili servise bırak.

## Arıza olmayan durumlar

**Tuşlar kilitli, yalnız Açma/Kapama çalışıyor.** Electrolux'a göre göstergede bir simge görünüyor ve Açma/Kapama dışındaki düğmeler devre dışıysa cihaz mevcut güncellemeleri indiriyordur; güncelleme tamamlanana kadar bekle.

**Program süresi çalışırken değişiyor.** Kılavuza göre SensiCare System seçeneği, çamaşır tipine ve yük miktarına göre program süresini ayarlayabilir.

**Program başlayınca önce kısa bir boşaltma.** Electrolux'a göre cihaz su almadan önce tahliye pompası kısa bir süreliğine çalışabilir.

Markadan bağımsız anlatım için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısına, makine su almıyorsa [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) sayfasına bakabilirsin. Makine çalışıyor ama suyu boşaltmıyorsa kardeş rehberimiz [Electrolux çamaşır makinesi su boşaltmıyor](/blog/electrolux-camasir-makinesi-su-bosaltmiyor/) yazısına geç.

## Ne zaman servis

Electrolux'un kılavuzu şu durumlarda Yetkili Servis Merkezi'ni gösteriyor:

- Ekranda tablodakilerden **başka bir alarm kodu** varsa: cihazı kapatıp yeniden çalıştır; sorun devam ederse Yetkili Servis Merkezi ile temasa geç.
- Yukarıdaki kontrollerden sonra **sorun tekrarlanırsa.**

Servis için gerekli bilgiler cihazın **bilgi etiketinde** yazıyor; aramadan önce model adını etiketten not al.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, sigorta, kapak, tuşlar ve ayarlar kullanıcıya; elektrik tesisatı ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ekran hiç yanmıyor mu, yanıyor ama program mı başlamıyor?
2. Ekranda hangi uyarı ya da alarm kodu yazıyor?
3. Çocuk Kilidi simgesi ya da Program bitiş zamanı geri sayımı var mı?
4. Fiş prizde mi, sigortalar yerinde mi?
5. Su musluğu açık mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
