---
title: "Samsung çamaşır makinesi 4C hatası"
description: "Samsung çamaşır makinesi 4C (4E, E1) hatası: makine su alamıyor. Musluk, su basıncı, giriş hortumu ve donma kontrolü adım adım."
slug: "samsung-camasir-makinesi-4c-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200); PDF'ler pdftotext -layout ile, sayfa sayfa (\f) okundu.
# PDF sayfa no = kılavuzun basılı sayfa no (s.58'de doğrulandı). Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı.
#  T1) Samsung TR SSS "4E, 4C veya E1 bilgi kodu nedir?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/what-is-the-4e-4c-or-e1-info-code-shown-on-the-screen-of-my-samsung-washing-machine/
#      md5 815a74d098a0a21806bece697733e5fa
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a  (sayfa atıfları bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K2) Kılavuz WW4000T (WW90T4020CE), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae (4C satırı s.58, birebir aynı)
#  K3) Kılavuz WW5000T (WW90TA046AH), DC68-04206W-03 TR, 68 s., md5 402b21c11194758ab81d7af5f78ffd4d (4C satırı s.55, birebir aynı)
#  K4) Kılavuz WW4000T EN, DC68-04203B-03 EN, 72 s., md5 f49c961e5a380843fbd9e491fb4e1066 (tel filtre 7. adımın doğru okuması için)
# Birebir alıntılar:
#   T1: "Çamaşır makinenizin su almadığı durumlarda çamaşır makinenizin ekranında aşağıdaki gibi bilgi kodları görünür." (başlık: 4E, 4C veya E1)
#   T1: sebepler: musluk kapalı · su basıncı yok/çok düşük, su kesintisi · giriş hortumunda kırılma bükülme · "Su giriş hortumu filtresi veya hortum tıkanmış olabilir."
#   K1 s.58 4C: "Su sağlanmıyor." + musluklar açık · hortumlar tıkanmamış · musluklar donmamış · basınç yeterli · soğuk/sıcak musluk düzgün bağlı ·
#       "Tıkanmış olabileceğinden, tel filtreyi temizleyin." · ""4C" mesajı göründüğünde, makine 3 dakika kadar suyu boşaltır. Bu arada, güç düğmesi devre dışı kalacaktır."
#   K1 s.58 4C2: "Soğuk su besleme hortumunun, soğuk su musluğuna sıkıca bağlı olduğundan emin olun. Sıcak su musluğuna bağlanırsa, bazı programlarda çamaşır deforme olabilir."
#   K1 s.50 Tel filtre: "Su hortumunun tel filtresini yılda bir veya iki defa temizleyin." 8 adım + NOT "Tel filtre tıkanırsa, ekranda "4C" bilgi kodu görünür."
#   K1 s.50 7. adım TR metninde "yeniden takmayın" diye basılmış; K4 s.49 aynı adım: "Reinsert the mesh filter into the inlet valve" → yazıda "yerine tak" olarak verildi.
#   K1 s.53 Donma: 0 °C altı; fiş çek · musluğa ılık su · hortumu çıkar sıcak suya sok · kazana ılık su, 10 dk · hortumu yeniden bağla.
#   K1 s.16 Su beslemesi: "uygun su basıncı 50 kPa ile 800 kPa arasındadır"; s.12 "Temizlik ya da bakım işlemleri yapmadan önce cihazı prizden çıkarın."
# Bilerek YAZILMAYANLAR: "NF / 1 4C" varyantı (bu koşuda Samsung belgesinde bulunamadı) · valf/kart/basınç anahtarı teşhisi · sıfırlama tuş kombinasyonu ·
#   "en sık sebep" sayım iddiası · hortum uzatma/değiştirme · giriş valfine müdahale.
# Alıntı denetim tablosu: samsung-camasir-makinesi-4c-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Pense", "Bez", "Küçük bir kap"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Makineye su veren musluğun tam açık olduğunu kontrol et."
  - "Evde başka bir musluğu açıp su kesintisi ya da çok düşük basınç olup olmadığına bak."
  - "Su giriş hortumunu musluktan makineye kadar izle; kırılma, bükülme ya da tıkanma varsa düzelt."
  - "Hava 0 °C'nin altına düştüyse kılavuzun donma adımlarını uygula."
  - "Musluğu aç, fişi tak ve programı yeniden başlat; 4C sürerse Samsung servisine başvur."
faq:
  - q: "Samsung çamaşır makinesi 4C hatası ne demek?"
    a: "Samsung'a göre 4C, makinenin su alamadığını gösterir; kullanım kılavuzundaki bilgi kodları tablosunda karşılığı 'Su sağlanmıyor.' şeklindedir. Samsung Türkiye'nin destek sayfası olası sebepleri kapalı musluk, su kesintisi ya da düşük basınç, bükülmüş giriş hortumu ve tıkanmış giriş hortumu filtresi olarak sayıyor."
  - q: "4C, 4E ve E1 aynı hata mı?"
    a: "Evet. Samsung Türkiye'nin destek sayfası üç kodu aynı başlık altında, çamaşır makinesinin su almadığı durumda görünen bilgi kodları olarak veriyor. Ekranda hangisinin görüneceği modele göre değişir."
  - q: "4C çıktı, makine su boşaltıyor ve açma düğmesi çalışmıyor. Bozuldu mu?"
    a: "Hayır. Samsung kılavuzuna göre 4C mesajı göründüğünde makine 3 dakika kadar suyu boşaltır ve bu sırada güç düğmesi devre dışı kalır. Boşaltma bitince kontrollere başlayabilirsin."
  - q: "Ekranda 4C2 yazıyor, bu da su alma hatası mı?"
    a: "4C2 ayrı bir koddur. Samsung kılavuzu bu kodda soğuk su besleme hortumunun soğuk su musluğuna sıkıca bağlı olduğundan emin olunmasını istiyor; hortum sıcak su musluğuna bağlanırsa bazı programlarda çamaşır deforme olabilir."
  - q: "Tel filtreyi ne sıklıkla temizlemeliyim?"
    a: "Samsung kılavuzu su hortumunun tel filtresinin yılda bir ya da iki kez temizlenmesini öneriyor ve tel filtre tıkanırsa ekranda 4C bilgi kodunun görüneceğini yazıyor."
images:
  coverAlt: "Beyaz ön yüklemeli çamaşır makinesinin arkasında duvardaki su musluğuna bağlı giriş hortumu; musluğun kolu açık konumda"
---

Programı seçtin, başlattın; ama makineye su girmedi ve ekranda **4C** belirdi. Modeline göre aynı durum **4E** ya da **E1** olarak da görünebilir. Samsung Türkiye'nin destek sayfası bu kodları tek başlık altında topluyor: **"Çamaşır makinenizin su almadığı durumlarda"** ekranda görünen bilgi kodları. Kullanım kılavuzundaki tabloda 4C'nin karşılığı daha da kısa: **"Su sağlanmıyor."**

Samsung'un bu kod için saydığı kontrollerin çoğu makinenin dışındadır: musluk, şebeke basıncı, giriş hortumu, donma ve hortumun makineye bağlandığı yerdeki tel filtre.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 4C / 4E / E1 = Samsung'a göre makine su alamıyor. Sıra şu: fişi çek → musluk tam açık mı → evde su ve basınç var mı → giriş hortumunda bükülme var mı → soğukta donma → yeniden dene. Kod sürerse Samsung servisi.

## Adım adım: evde denenecekler

**1. Fişi çek.** Samsung kılavuzu temizlik ya da bakım işlemlerinden önce cihazın prizden çıkarılmasını istiyor. Bir not: 4C göründüğünde makine **3 dakika kadar suyu boşaltır** ve bu sırada güç düğmesi çalışmaz. Boşaltmanın bitmesini bekle.

**2. Musluğa bak.** Samsung'un destek sayfasındaki ilk sebep, makineye su sağlayan **musluğun kapalı** olmasıdır. Musluğun sonuna kadar açık olduğunu kontrol et.

**3. Evde su var mı?** Başka bir musluğu aç. Samsung, **su kesintisi ya da düşük su basıncı** olup olmadığının kontrol edilmesini istiyor. Kılavuza göre bu makine için uygun su basıncı **50 kPa ile 800 kPa** arasındadır; basınç düşükse kazan daha uzun sürede dolar ve makine kapanabilir.

**4. Giriş hortumunu izle.** Hortumu musluktan makinenin arkasına kadar takip et. Samsung, **su giriş hortumunda kırılma ya da bükülme** olup olmadığına ve hortumun tıkanmadığına bakılmasını istiyor. Bükülme ya da ezilme varsa düzelt.

**5. Soğuk havada donmaya bak.** Kılavuz, su musluklarının **donmamış** olduğundan emin olunmasını istiyor. Sıcaklık 0 °C'nin altına düştüyse Samsung'un donma adımları şöyle: fişi çek, hortumu gevşetmek için musluğun üzerine ılık su dök, hortumu çıkarıp sıcak suya sok, kazana ılık su döküp 10 dakika bekle, hortumu yeniden bağla. Makine hâlâ normal çalışmıyorsa kılavuz bu adımları normale dönene kadar tekrarlamanı söylüyor.

**6. Yeniden dene.** Musluğu aç, fişi tak ve programı başlat. Samsung kılavuzunun genel kuralı şu: ekranda bir bilgi kodu görüntülenmeye devam ediyorsa yerel Samsung servis merkezi ile iletişime geç.

> 🔧 **Tel filtre:** Samsung'a göre **tel filtre tıkanırsa ekranda 4C görünür.** Filtre, makinenin arkasındaki giriş vanasının içinde durur; kılavuz onu hortumu arkadan ayırıp **bir pense ile** çıkarmayı tarif ediyor. Bu işi biz evde denenecekler listesine almıyoruz: yukarıdaki kontroller 4C'yi gidermediyse filtre temizliğini servise bırak.

## 4C, 4E ve E1: üç ad, tek anlam

Samsung Türkiye'nin destek sayfası başlıkta üç kodu birlikte veriyor: **4E, 4C veya E1.** Hangisinin görüneceği makinenin modeline bağlıdır; anlamı ve yapılacak kontroller aynıdır. Diğer Samsung kodlarının karşılıkları için [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## 4C2 farklı bir koddur

Ekranda **4C2** görüyorsan konu su gelmemesi değil, hortumların hangi musluğa bağlandığıdır. Samsung kılavuzu bu kodda **soğuk su besleme hortumunun soğuk su musluğuna sıkıca bağlı** olduğundan emin olunmasını istiyor. Hortum sıcak su musluğuna bağlanırsa kılavuza göre bazı programlarda çamaşır deforme olabilir.

## Tel filtre için bakım takvimi

Samsung, su hortumunun tel filtresinin **yılda bir ya da iki kez** temizlenmesini öneriyor. Kılavuzun "Duruyor" arızası için verdiği öneri de aynı yönde: su musluklarındaki su kaynağı hortumunun tel filtresinin tıkanmadığından emin ol ve filtreyi düzenli olarak temizle. Kılavuz ayrıca makine kullanılmadığında muslukların kapatılmasını ve su besleme hortumu bağlantılarının sızıntıya karşı düzenli olarak kontrol edilmesini istiyor.

Markadan bağımsız su alma kontrolleri için [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısına da bakabilirsin.

## Ne zaman servis

Musluk açık, evde su ve basınç var, hortum düz, donma yok ve 4C hâlâ geliyorsa kullanıcıya verilen kontroller bitmiş demektir. Bu noktada Samsung'un yönlendirmesi Samsung Müşteri Hizmetleri ve yerel Samsung servis merkezidir. Kılavuz, Samsung ürünlerinin bakım ve onarımlarının yetkili servisler tarafından yapıldığını yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **musluk ve hortum kullanıcıya; tel filtre ve makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Ekrandaki kod 4C mi, 4C2 mi?
2. Musluk sonuna kadar açık mı, evde su ve basınç var mı?
3. Giriş hortumu bükülmüş ya da ezilmiş mi?
4. Hava çok soğuk muydu?
5. Tel filtre en son ne zaman temizlendi?

Bu beşine cevabın varsa servise "su almıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
