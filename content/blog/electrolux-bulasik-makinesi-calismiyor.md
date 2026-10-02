---
title: "Electrolux bulaşık makinesi çalışmıyor"
description: "Electrolux bulaşık makinesi açılmıyor ya da program başlamıyorsa: fiş, sigorta, program seçme modu, kapak, gecikmeli başlatma, reçine ve su musluğu."
slug: "electrolux-bulasik-makinesi-calismiyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, belirti rehberi). Belge 1 Eki'de curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi (HTTP 200, application/pdf);
#   bu koşuda yerel kopyanın md5'i yeniden alındı, MD5.txt ile birebir aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · okuma pdftotext -layout + tuş simgeleri için sayfa görüntüsü (pdftoppm), sayfa = PDF sayfası (= basılı sayfa no).
#  (B) Electrolux ESM89400SX bulaşık makinesi kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/b2ae98c1-3fd9-40a1-83fc-72a427d6db65/E4RM3Q/103f2880-7d03-46f7-bfd7-8755d9984a60/ORIGINAL/103f2880-7d03-46f7-bfd7-8755d9984a60.pdf  32 s.  md5 e37f3fbbf7c05e07671a8ea7be8b21b1
# Arıza tablosu (B s.22): "Cihazı çalıştıramıyorsanız." → "Elektrik fişinin prize takılı olduğundan emin olun." · "Sigorta kutusundaki sigortaların doğru çalıştığından emin olun."
#   "Program başlamıyor." → "Cihazın kapağının kapalı olduğundan emin olun." · "Başlat tuşuna basın." · "Gecikmeli başlatma seçeneği ayarlanmışsa, ayarı iptal edin ya da geri sayımın bitmesini bekleyin."
#     · "Makine, su yumuşatıcısının içindeki reçineyi yenileme işlemini yapıyordur. İşlem süresi yaklaşık 5 dakikadır."
#   "Cihaz düzgün bir şekilde su almıyor. Ekranda i10 veya i11 görünüyor." → musluk açık · basınç (yerel su tedarikçisi) · musluk tıkalı değil · giriş hortumundaki filtre · giriş hortumunda dolanma/bükülme
# Diğer: B s.7 kumanda paneli (1 Açma/kapama, 2 Program, 5 Gecikmeli, 6 Seçenek, 8 Başlat; Gecikmeli/Seçenek yanında "Reset") · B s.11 program seçme modu (ECO göstergesi yanınca; Gecikmeli + Seçenek basılı)
#   · B s.14 reçine 5 dk ("Yıkama aşaması ancak bu işlem bittikten sonra başlatılır. Prosedür periyodik olarak tekrarlanır.") · B s.15 9. Günlük kullanım + 9.2 program başlatma + gecikmeli başlatma (1-24 saat)
#   · B s.16 gecikmeli başlatma iptali (kapağı aç; Gecikmeli + Seçenek basılı; program ve seçenekler yeniden ayarlanır) · program iptali · kapak açılınca makine durur · Auto Off (program başlamamışsa 5 dk)
#   · B s.23 "Makine program esnasında birçok kez durup tekrar çalışıyor. • Bu, normal bir durumdur." · kalan süre artıyor → "Bu, bir arıza değildir." · B s.24 sigorta attırma satırı · kontrol sonrası kapat-aç, tekrarlanırsa servis · tanımsız kod → servis
# BİLEREK YAZILMAYANLAR: elektronik kart/kapı kilidi teşhisi (belgede yok) · giriş hortumu filtresinin temizlik yöntemi (bu kılavuzda yöntem yok → gövdede numarasız, "servise bırak")
#   · priz amperi/sayaç kapasitesi kontrolünün yapılışı (elektrik tesisatı → gövdede yalnız belge cümlesi) · tuş simgelerinin adları s.7 panel listesinden eşlendi (metin katmanında simge yok) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Elektrik fişinin prize takılı olduğunu kontrol et."
  - "Sigorta kutusundaki sigortaları kontrol et."
  - "Makine kapalıysa Açma/Kapama tuşuna basarak aç."
  - "ECO göstergesi yanmıyorsa Gecikmeli ve Seçenek tuşlarını birlikte basılı tutarak program seçme moduna geç."
  - "Kapağı kapat, Program tuşuyla programı seç ve Başlat tuşuna bas."
  - "Gecikme göstergesi yanıyorsa geri sayımın bitmesini bekle ya da kapağı açıp Gecikmeli ve Seçenek tuşlarını basılı tutarak iptal et."
  - "Program başladıktan sonra su yumuşatıcı işlemi için yaklaşık 5 dakika bekle."
  - "Ekranda i10 ya da i11 varsa su musluğunun açık olduğunu ve giriş hortumunda büküm olmadığını kontrol et."
faq:
  - q: "Makine program sırasında birkaç kez durup yeniden çalışıyor. Arıza mı?"
    a: "Hayır. Electrolux'un ESM89400SX sorun giderme tablosunda bu durum ayrı bir satır ve açıklaması net: bu normal bir durumdur; bu çalışma sistemi daha yüksek yıkama performansı ve enerji tasarrufu sağlar. Ekranda kalan sürenin artması ve programın sona doğru uzaması da kılavuza göre arıza değil."
  - q: "Programı başlattım ama bir şey olmuyor gibi. Neden bekliyor?"
    a: "Electrolux'a göre cihaz, programı başlattıktan sonra 5 dakikaya kadar su yumuşatıcısındaki reçineyi yeniden şarj edebilir ve yıkama aşaması ancak bu işlem bittikten sonra başlar. Kılavuz bu işlemin periyodik olarak tekrarlandığını söylüyor. Sorun giderme tablosu da program başlamıyor satırında bu işlemin yaklaşık 5 dakika sürdüğünü yazıyor."
  - q: "Makine çalışınca sigorta atıyor. Ne yapmalıyım?"
    a: "Electrolux'un tablosunda iki olasılık var. Birincisi, evde tek bir sigortaya bağlı cihazların hepsine aynı anda yeterli amper sağlanamıyor olabilir; kılavuz priz amperini ve sayaç kapasitesini kontrol etmeni ya da aynı anda çalışan cihazlardan bir ya da birkaçını kapatmanı öneriyor. İkincisi, makinede elektriksel bir arıza olabilir; bu durumda kılavuzun yönlendirmesi Yetkili Servis Merkezi. Priz ve sayaç kontrolünden emin değilsen bunu bir uzmana bırak."
  - q: "Program sırasında kapağı açtım, makine durdu. Baştan mı başlatmalıyım?"
    a: "Hayır. Electrolux'a göre program çalışırken kapağı açarsan makine durur; kapağı kapattığında kaldığı yerden çalışmaya devam eder. Bu, enerji tüketimini ve program süresini etkileyebilir. Kılavuzun bir notu var: kurutma aşamasında kapak 30 saniyeden uzun açık kalırsa çalışan program sonlanır; kapak AirDry fonksiyonu tarafından açıldıysa bu olmaz."
images:
  coverAlt: "Kapağı kapalı bulaşık makinesinin üst kenarındaki kumanda paneline dokunan bir parmak ve panelde sönük duran program göstergeleri"
---

Bulaşıkları yerleştirdin, deterjanı koydun ama makine ya hiç tepki vermiyor ya da tuşa basmana rağmen yıkamaya geçmiyor. Electrolux'un ESM89400SX kullanma kılavuzu bu iki durumu ayrı satırlarda ele alıyor: **"Cihazı çalıştıramıyorsanız."** satırında elektrik kontrolleri, **"Program başlamıyor."** satırında ise kapak, Başlat tuşu, gecikmeli başlatma ve bir bekleme süresi var. Electrolux'un listesinde gözden kaçması kolay bir madde de bulunuyor: makine **su yumuşatıcısının içindeki reçineyi yeniliyor** olabilir ve bu iş **yaklaşık 5 dakika** sürüyor. Bu rehber önce elektriği, sonra panel ayarlarını, en son suyu kontrol ediyor. Kaynak tek bir modelin kılavuzu; tuş ve gösterge adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş ve sigorta → Açma/Kapama → ECO göstergesi yanmıyorsa Gecikmeli + Seçenek ile program seçme modu → kapağı kapat, programı seç, Başlat → gecikme göstergesi yanıyorsa bekle ya da iptal et → başladıktan sonra 5 dakika bekle → ekranda i10/i11 varsa su musluğu ve giriş hortumu. Sorun tekrarlanırsa Electrolux'un yönlendirmesi Yetkili Servis.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Electrolux'un "Cihazı çalıştıramıyorsanız" satırındaki ilk madde: **elektrik fişinin prize takılı olduğundan emin ol.**

**2. Sigortaya bak.** Aynı satırdaki ikinci madde: **sigorta kutusundaki sigortaların doğru çalıştığından emin ol.** Makine çalışırken sigorta atıyorsa aşağıdaki SSS'ye bak.

**3. Makineyi aç.** Electrolux'un **Auto Off** fonksiyonu, program bittiğinde ve **program başlamamışsa 5 dakika sonra** cihazı kendiliğinden kapatır. Panel tamamen sönükse **Açma/Kapama** tuşuna bas.

**4. Program seçme modunda olduğundan emin ol.** Kılavuza göre **ECO program göstergesi yandığında** cihaz program seçme modundadır ve ekranda program süresi görünür. Makine açıldığında normalde bu moddadır. Değilse Electrolux'un yöntemi: cihaz program seçme moduna geçinceye kadar paneldeki **Gecikmeli** ve **Seçenek** tuşlarını **aynı anda basılı tut.**

**5. Kapağı kapat, programı seç, Başlat'a bas.** "Program başlamıyor" satırındaki ilk iki madde: **cihazın kapağının kapalı olduğundan emin ol** ve **Başlat tuşuna bas.** Electrolux'un sırası: kapağı kapat, istediğin programın gösterge ışığı yanana kadar **Program** tuşuna art arda bas, istersen seçenekleri ayarla ve **Başlat** tuşuna bas. Kılavuza göre program başlayınca çalışan aşamanın göstergesi yanar ve süre dakika cinsinden geri sayar.

**6. Gecikmeli başlatmayı kontrol et.** Tablodaki madde: **gecikmeli başlatma seçeneği ayarlanmışsa ayarı iptal et ya da geri sayımın bitmesini bekle.** ESM89400SX'te gecikme **1 ile 24 saat** arasında ayarlanabiliyor; açıkken **gecikme göstergesi** yanar ve kalan süre saat cinsinden geri sayar. İptal etmek için Electrolux'un yöntemi: **kapağı aç,** cihaz program seçme moduna geçinceye kadar **Gecikmeli ve Seçenek tuşlarını aynı anda basılı tut.** Kılavuza göre iptalden sonra programı ve seçenekleri yeniden ayarlaman gerekir.

**7. Başladıktan sonra 5 dakika bekle.** Tablodaki son madde: makine **su yumuşatıcısının içindeki reçineyi yenileme işlemini** yapıyor olabilir; Electrolux'a göre **işlem süresi yaklaşık 5 dakikadır.** Kılavuzun ilk kullanım bölümüne göre yıkama aşaması ancak bu işlem bittikten sonra başlar ve işlem periyodik olarak tekrarlanır.

**8. Ekranda i10 ya da i11 varsa suya bak.** Electrolux'a göre bu kodlar **cihazın düzgün şekilde su almadığını** gösteriyor. Kullanıcıya dönük kontroller: **su musluğunun açık olduğundan,** musluğun tıkalı olmadığından ve **giriş hortumunda dolanma ya da bükülme olmadığından** emin ol. Su giriş basıncının çok düşük olup olmadığını kılavuza göre **yerel su tedarikçin** söyleyebilir.

Aynı satırda **giriş hortumundaki filtrenin** tıkalı olmaması da isteniyor; bu kılavuzda filtrenin temizlik yöntemi yazmıyor. Bu kontrolü yapmaktan emin değilsen yetkili servise bırak.

## Arıza olmayan durumlar

**Program sırasında duraklamalar.** Electrolux'a göre makinenin program sırasında birçok kez durup tekrar çalışması **normal bir durumdur;** bu çalışma sistemi daha yüksek yıkama performansı ve enerji tasarrufu sağlar.

**Kalan süre uzuyor.** Ekranda gösterilen kalan süre artıyor ve program sona doğru uzuyorsa kılavuza göre **bu bir arıza değildir;** makine sorunsuz çalışıyor. Electrolux'a göre görüntülenen sürenin tüketim tablosundaki süreden farklı olmasının nedenleri de su basıncı ve sıcaklığı, elektrik şebekesindeki farklılıklar, seçenekler, bulaşık miktarı ve kirlilik seviyesi olabilir.

**Program bitince panel sönüyor.** Electrolux'a göre program bittiğinde **Auto Off** fonksiyonu cihazı kapatır.

Markadan bağımsız anlatımlar için [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) ve [bulaşık makinesi programı bitirmiyor](/blog/bulasik-makinesi-programi-bitirmiyor/) yazılarına, diğer kodlar için [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) sayfasına bakabilirsin. Makine çalışıyor ama suyu boşaltmıyorsa kardeş rehberimiz [Electrolux bulaşık makinesi su boşaltmıyor](/blog/electrolux-bulasik-makinesi-su-bosaltmiyor/) yazısına geç.

## Ne zaman servis

ESM89400SX kılavuzunun servise yönlendirdiği üç durum var:

- Makine sigortayı attırıyor ve evdeki yük kontrolü sonuç vermiyorsa: kılavuza göre **makinede elektriksel bir arıza** olabilir.
- Kontrollerden sonra makineyi kapatıp açtığında **sorun tekrarlanırsa.**
- Ekranda **tabloda tanımlanmamış bir alarm kodu** varsa.

Electrolux'un uyarısı: sorun tamamen çözülene kadar makineyi kullanmaman, fişini çekmen ve düzgün çalıştığından emin olana kadar tekrar takmaman öneriliyor.

⛔ **Kendin-çöz sınırı burada biter.** Panel ayarları, fiş ve su musluğu senin; sigorta kutusunun ötesindeki elektrik tesisatı ve makinenin içi uzmanın.

## Servisi aramadan önce kısa özet

1. Açma/Kapama'ya basınca panelde bir şey yanıyor mu?
2. Ekranda hangi gösterge ya da kod var (gecikme göstergesi, i10, i11, başka bir kod)?
3. Başlat'a bastıktan sonra en az 5 dakika bekledin mi?
4. Su musluğu açık mı, giriş hortumunda büküm var mı?
5. Makine çalışınca sigorta atıyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
