---
title: "Samsung çamaşır makinesi 5C hatası"
description: "Samsung çamaşır makinesi 5C (5E, E2) hatası: makine suyu tahliye edemiyor. Tahliye hortumu, acil boşaltma ve kalıntı filtresi temizliği adım adım."
slug: "samsung-camasir-makinesi-5c-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200); PDF'ler pdftotext -layout ile, sayfa sayfa (\f) okundu.
# PDF sayfa no = kılavuzun basılı sayfa no. Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı.
#  T2) Samsung TR SSS "5E, 5C veya E2 hatası verdiğinde ne yapmalıyım?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/what-should-i-do-if-my-samsung-washing-machine-fails-5e-5c-or-e2/
#      md5 1528149223232c2cdd70e94bab475cda
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a  (sayfa atıfları bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K2) WW4000T TR md5 2a8fa3df96d4d49f5da7294316f4a2ae (5C satırı s.58) · K3) WW5000T TR md5 402b21c11194758ab81d7af5f78ffd4d (5C satırı s.55) — birebir aynı
# Birebir alıntılar:
#   T2: "Çamaşır makinenizin suyu tahliye edemediği durumlarda uyarı amacıyla çamaşır makinenizin ekranında aşağıdaki şekillerde bilgi kodu görünür."
#   T2 sebepler: atık su çıkış hortumu / tahliye borusu tıkalı · "Makinenin tahliye pompasının çalışmadığı durumda" · tahliye filtresi tıkalı · tahliye hortumu bükülmesi
#   T2 1. adım: hortum gidere çok yakın olmamalı · kırılma bükülme olmamalı · lavaboya/gidere yanlış bağlanmamalı · "tahliye çıkışından 60-90 cm yukarısında"
#   T2 2. adım: fiş çek · kapağı aç · kap koy, acil tahliye hortumu · "Tahliye hortumu 5 cm kadar dışarı uzayacaktır. Tahliye hortumunu daha fazla çekmeyin." ·
#       filtreyi saat yönünün tersine çevir · "Filtrenin içindeki boşaltma pompası pervanesinin tıkanmadığından emin olun." · yerine tak, koruyucu kapağı kapat
#   K1 s.58 5C: "Su boşaltılmıyor." + hortum donmamış/tıkanmamış · bağlantı türüne göre konum · "Tıkanmış olabileceğinden, kalıntı filtresini temizleyin." ·
#       düz gelmeli · "Bilgi kodu kalırsa, bir müşteri servis merkezine başvurun."
#   K1 s.49 Acil durum boşaltma (5 adım) · s.51 Kalıntı filtresi: "her 2 ayda bir temizlenmesi önerilir" · TİP 1/TİP 2 kapak · sola çevir · yumuşak fırça ·
#       sağa çevir · DİKKAT: düğme düzgün kapatılmazsa sızıntı · NOT "Kalıntı filtresi tıkanırsa ekranda "5C" bilgi kodu görünür."
#   K1 s.25-26 boşaltma hortumu: lavabo kenarı 60-90 cm · boru 60-90 cm, 65 cm önerilir, 15 cm içine · lavabo sifonu üstünde, en az 60 cm
#   K1 s.55 "Boşaltma hortumunun, boşaltma sistemi boyunca düz bir şekilde geldiğinden emin olun. Bir boşaltma kısıtlamasıyla karşılaşırsanız, servisi arayın."
# Bilerek YAZILMAYANLAR: pompa değişimi/söküm · pervaneyi elle çevirme ya da çubukla zorlama (belgede yalnız "tıkanmadığından emin olun") ·
#   gider/sifon açma işlemleri · "en sık sebep" sayım iddiası · havlu serme (belgede "geniş bir kap" var).
# Alıntı denetim tablosu: samsung-camasir-makinesi-5c-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Geniş, boş bir kap", "Yumuşak fırça"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Tahliye hortumunu makinenin arkasından gidere kadar izle; kırılma, bükülme, donma ya da tıkanma varsa düzelt."
  - "Hortum ucunun gidere doğru bağlandığını ve 60-90 cm yükseklikte durduğunu kontrol et."
  - "Filtre kapağını aç ve önüne boş, geniş bir kap koy."
  - "Acil boşaltma hortumunu en fazla 5 cm dışarı çek, tıpasını açıp kazandaki suyu kaba boşalt, sonra tıpayı takıp hortumu yerine yerleştir."
  - "Kalıntı filtresini sola çevirerek çıkar ve yumuşak bir fırçayla temizle; pompa pervanesinin tıkalı olmadığına bak."
  - "Filtreyi yerine tak, sağa çevirerek düzgünce kapat ve filtre kapağını kapat."
  - "Fişi tak ve programı yeniden başlat; 5C sürerse Samsung servisine başvur."
faq:
  - q: "Samsung çamaşır makinesi 5C hatası ne demek?"
    a: "Samsung'a göre 5C, makinenin suyu tahliye edemediğini gösterir; kılavuzdaki karşılığı 'Su boşaltılmıyor.' şeklindedir. Samsung Türkiye'nin destek sayfası sebepleri tıkalı atık su hortumu ya da tahliye borusu, çalışmayan tahliye pompası, tıkalı tahliye filtresi ve bükülmüş tahliye hortumu olarak sayıyor."
  - q: "5C, 5E ve E2 aynı hata mı?"
    a: "Evet. Samsung Türkiye'nin destek sayfası üç kodu aynı başlıkta, suyun tahliye edilemediği durumda görünen bilgi kodu olarak veriyor. Hangisinin görüneceği modele göre değişir."
  - q: "Kalıntı filtresini ne sıklıkla temizlemeliyim?"
    a: "Samsung kılavuzu, tıkanmayı önlemek için kalıntı filtresinin her 2 ayda bir temizlenmesini öneriyor. Kılavuza göre tıkalı bir kalıntı filtresi köpüklenme etkisini de azaltabilir."
  - q: "Filtreyi temizledikten sonra makinenin altından su geliyor, neden?"
    a: "Samsung kılavuzu, filtre temizlendikten sonra filtre düğmesinin düzgün kapatılmaması ya da filtrenin düzgün yerleştirilmemesi hâlinde sızıntı olabileceği uyarısını yapıyor. Filtreyi çıkarıp yeniden yerleştir ve sağa çevirerek düzgünce kapat."
images:
  coverAlt: "Ön yüklemeli bir çamaşır makinesinin alt ön köşesinde açılmış küçük filtre kapağı ve önünde yere konmuş geniş, boş bir plastik kap"
---

Program yarıda kaldı, kazanda su duruyor ve ekranda **5C** yazıyor. Modeline göre aynı durum **5E** ya da **E2** olarak da görünebilir. Samsung Türkiye'nin destek sayfasına göre bu kodlar, **"çamaşır makinenizin suyu tahliye edemediği durumlarda"** uyarı amacıyla ekrana gelir. Kullanım kılavuzundaki tabloda 5C'nin karşılığı: **"Su boşaltılmıyor."**

Samsung'un bu kod için verdiği çözüm iki parçalıdır: önce tahliye hortumu, sonra kalıntı (tahliye) filtresi. İkisi de kullanıcının yapabileceği bakım işleridir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 5C / 5E / E2 = Samsung'a göre makine suyu tahliye edemiyor. Sıra şu: fişi çek → tahliye hortumunda bükülme ya da tıkanma var mı → hortumun yüksekliği doğru mu → acil boşaltma hortumuyla suyu kaba al → kalıntı filtresini temizle → yeniden dene. Kod sürerse Samsung servisi.

## Adım adım: evde denenecekler

**1. Fişi çek.** Samsung'un destek sayfası da kılavuz da filtre işlemine makineyi kapatıp **fişini prizden çekerek** başlıyor.

**2. Tahliye hortumunu izle.** Samsung'a göre tahliye hortumunda **kırılma ya da bükülme** olmamalı. Kılavuz ayrıca hortumun **donmadığından veya tıkanmadığından** ve boşaltma sistemi boyunca **düz** geldiğinden emin olunmasını istiyor. Makinenin arkasında ezilmiş ya da katlanmış bir yer varsa düzelt.

**3. Hortumun bağlantısına ve yüksekliğine bak.** Samsung'un destek sayfasına göre hortum **gidere çok yakın olmamalı**, lavaboya ya da gidere **yanlış bağlanmamalı** ve makinenin tahliye çıkışından **60-90 cm yukarıda** olmalı. Kılavuzdaki üç bağlantı biçimi şunlar:

- **Lavabo kenarı:** hortum yerden 60-90 cm yükseğe konur; ucun kanca biçiminde kalması için makineyle gelen plastik hortum tutucu kullanılır.
- **Boşaltma borusu:** boru 60-90 cm yüksekliğinde olmalı, 65 cm önerilir; hortum borunun 15 cm içine takılır.
- **Lavabo atık su borusu kolu:** kol lavabonun sifonunun üzerinde olmalı, hortumun ucu yerden en az 60 cm yukarıda kalır.

**4. Filtre kapağını aç, kabı hazırla.** Kılavuza göre filtre kapağı modeline bağlı olarak kapağın **üst kısmına hafifçe basarak** ya da **mandalına aşağı doğru basarak** açılır. Önüne **boş, geniş bir kap** koy; Samsung, kazandaki su beklenenden fazla olabileceği için büyük bir kap kullanılmasını istiyor.

**5. Suyu acil boşaltma hortumuyla al.** Tahliye filtresinin yanındaki küçük acil boşaltma hortumunu kaba doğru çek. Samsung'un uyarısı açık: hortum **5 cm kadar** dışarı uzar, **daha fazla çekme.** Tıpasını açıp suyun kaba akmasını bekle. Su bitince tıpayı tak ve hortumu yerine yerleştir.

**6. Kalıntı filtresini temizle.** Filtre düğmesini **sola (saat yönünün tersine)** çevir, kalan suyu boşalt ve filtreyi çıkar. **Yumuşak bir fırçayla** temizle. Samsung, filtrenin içindeki **boşaltma pompası pervanesinin tıkalı ya da sıkışmış olmadığının** kontrol edilmesini istiyor. Bazı modellerde filtrede çocuk güvenliği için bir düğme bulunur: kılavuza göre açmak için basıp saat yönünün tersine çevrilir.

**7. Filtreyi düzgünce kapat.** Filtreyi yerine yerleştir, düğmeyi **sağa** çevirerek kapat ve filtre kapağını kapat. Kılavuzun uyarısı: filtre düğmesi düzgün kapatılmazsa ya da filtre düzgün yerleştirilmezse **sızıntı** olabilir.

**8. Yeniden dene.** Fişi tak ve programı başlat. Samsung kılavuzuna göre 5C bilgi kodu kalırsa bir müşteri servis merkezine başvurulur.

## 5C, 5E ve E2: aynı uyarının model varyantları

Samsung Türkiye'nin destek sayfası üç kodu aynı başlıkta veriyor: **5E, 5C veya E2.** Hangisinin görüneceği modele göre değişir; anlamı ve yapılacak kontroller aynıdır. Samsung'un diğer kodları için [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Kalıntı filtresi için bakım takvimi

Samsung, tıkanmayı önlemek için kalıntı filtresinin **her 2 ayda bir** temizlenmesini öneriyor ve filtre tıkanırsa ekranda 5C görüneceğini yazıyor. Kılavuza göre tıkalı bir filtre köpüklenme etkisini de azaltabilir. Cepte unutulan bozuk para gibi metal nesneler için de kılavuzun önerisi aynı yere çıkıyor: yıkamadan sonra bu nesneleri kazandan ya da filtre kutusundan çıkar.

Filtre temizliğinin markadan bağımsız anlatımı [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazısında; kod vermeden su atmayan makineler için [çamaşır makinesi su atmıyor](/blog/camasir-makinesi-su-atmiyor/) yazısına bakabilirsin.

## Ne zaman servis

Samsung'un destek sayfası 5C'nin sebepleri arasında **tahliye pompasının çalışmaması** durumunu da sayıyor. Hortum düz ve doğru yükseklikte, filtre temiz, pervane tıkalı değil ve 5C hâlâ geliyorsa kullanıcıya verilen kontroller bitmiş demektir. Kılavuzun ifadesi: bilgi kodu kalırsa **bir müşteri servis merkezine başvur.** Kılavuz ayrıca boşaltma hattında bir kısıtlamayla karşılaşırsan servisin aranmasını istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Pompanın çalışmaması Samsung'un saydığı sebeplerden biridir ve bunun için kullanıcıya verilen bir adım yoktur. Kural basit: **hortum ve filtre kullanıcıya; pompa ve makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Tahliye hortumu bükülmüş, ezilmiş ya da donmuş mu?
2. Hortum ucu 60-90 cm yükseklikte ve doğru bağlı mı?
3. Kalıntı filtresi en son ne zaman temizlendi, içinden ne çıktı?
4. Pompa pervanesinin önünde yabancı cisim var mıydı?
5. Filtre temizlendikten sonra kod tekrar geldi mi?

Bu beşine cevabın varsa servise "su atmıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
