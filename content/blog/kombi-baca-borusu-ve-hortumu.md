---
title: "Kombi bacası ve baca borusu: arıza belirtileri, hata kodları ve değişim"
description: "Kombi bacası ne işe yarar, hangi kodlar baca ya da fan sorununu gösterir, kim değiştirir? Baymak, DemirDöküm ve ECA kılavuzları ne diyor?"
slug: "kombi-baca-borusu-ve-hortumu"
date: "2026-10-14"
category: "Kombi"
parca:
  cihaz: "kombi-termosifon"
  tur: "hortum-boru-baca"
# --- Provenans (yayında görünmez) ---
# 2026-10-14 PAZ (#164 C-2, #165 C şablonu). Kanıt: seo/2026-10-09-KAPSAM-ANALIZI.md §11.5 s.692 üretim sırası #2 "Kombi / Termosifon | hortum/boru/baca | 15 | 15 | kombi bacası; kombi baca borusu" (+ §11.2 s.576). Otomatik tamamlama (14 Eki, hl=tr): "kombi bacası" ("kombi baca" tohumunda ilk öneri), "… nasıl temizlenir", "… yerinden çıkarsa ne olur", "… nasıl olmalı", "… eğimi nasıl olmalı", "… uzatma"; "kombi baca borusu" (+ "… uzunluğu ne kadar olmalı", "… nerede satılır"); "kombi baca seti" (eca/bosch/baymak…); "kombi baca hatası" (3 öneri). Ham çıktı: kaynak-kombi-baca-14eki/OTOMATIK-TAMAMLAMA-2026-10-14.txt
# #88 kaynaklar (yerel blog-taslaklar/kaynak-kombi-baca-14eki/, MD5-2026-10-14.txt, erişim 14 Eki, HTTP 200; sayfa = PDF sayfası):
#   Baymak Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122 Rev.2 https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf md5 723546ecd63c99eaecb5c3143c687c2a — s.2, s.4, s.6, s.10, s.12, s.14, s.17
#   DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01 https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf md5 3340a11b923b7332f8eb8685297970b6 — s.4, s.5, s.12, s.13
#   DemirDöküm Nitromix Montaj ve Bakım Kılavuzu 0020309469_02 (yetkili servise yönelik) https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf md5 bdff16276288ebddd6c6cbf82d47c864 — s.3, s.4, s.5, s.12-13, s.16, s.23, s.32-33
#   ECA Confeo Premix Kullanma Kılavuzu https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf md5 4ef56163ac14c46f9cb1dcb9ea189681 — s.4, s.5, s.11, s.12, s.15, s.16, s.23, s.28-29, s.30
# BİLEREK YAZILMAYANLAR: baca uzatma/kısaltma/takma/söküm/temizleme adımları (#31; "nasıl takılır", "uzatma borusu nasıl takılır", "nasıl temizlenir" sorguları — kılavuzlar kullanıcıya tarif etmiyor) · montör ölçüleri (maks. baca uzunluğu tablosu, terminal mesafeleri cm cm) yalnız "modele göre, servis bilir" diye anıldı · Baymak s.4 baca gazı kokusu 3. adımı "olası sızıntıları belirleyin ve hemen kapatın" kullanıcı adımı olarak yazılmadı (DemirDöküm ve ECA sızıntı/atık gaz yolu kontrolünü servise bırakıyor) · CO istatistiği, CO dedektörü önerisi (belgede yok) · "baca hortumu" (belgelerde bu adla parça yok; esnek atık gaz hattı yalnız DemirDöküm servis kılavuzunda şaft montajı için geçiyor) · Bosch, Vaillant (yerel kılavuzlarda atık gaz uyarısı var, bu turda sayfa sayfa okunup indirilmedi; marka adı yazıda yok) · Ariston ("ariston kombi baca hatası" önerisi; elimizde üretici belgesi yok) · fiyat/TL, satın al ve pazaryeri bağlantısı (#46) · `urun:` alanı (bilerek boş; katalogda kombi bacası ürünü yok).
# Alıntı denetim tablosu: kombi-baca-borusu-ve-hortumu.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Not defteri ya da telefon"]
steps:
  - "Kombi ekranındaki hata kodunu, kombinin markasını ve modelini not et; kodun anlamına kendi kılavuzunun hata kodları tablosundan bak."
  - "Baca borularına dokunmadan, baca çıkışının dışarıda açık olduğuna ve kombinin bulunduğu yerdeki havalandırma menfezlerinin önünün kapanmadığına bak."
  - "Kombinin altındaki yoğuşma suyu gider hattına ve gider hunisine bak; görünür bir tıkanma ya da engel varsa yetkili servise bildir."
  - "Kombinin çevresinden sprey, klorlu temizlik maddesi, boya ve yapıştırıcı gibi kimyasalları kaldır."
  - "Baca gazı kokusu alırsan kapı ve pencereleri açıp cereyan yap, kombiyi kapat ve yetkili servisi ara."
  - "Servisi ararken not ettiğin kodu, kombinin modelini ve gördüğün belirtiyi hazır tut."
faq:
  - q: "Kombi bacası ne işe yarar?"
    a: "İki iş yapar: kombinin yanma için ihtiyaç duyduğu temiz havayı dışarıdan alır, yanmadan çıkan atık gazı dışarı atar. Baymak Duotec'in kılavuzu bunu böyle anlatıyor; Duotec iç içe geçmiş iki borudan oluşan yatay eş eksenli bacaya göre tasarlanmış. ECA'da da atık gaz içteki borudan, taze hava dıştaki borudan geçer."
  - q: "Kombi baca hatası hangi kodla görünür?"
    a: "Markaya göre değişir. ECA Confeo Premix'te F07 yüksek baca gazı sıcaklığı, F53 baca gazı sıcaklık sensörü hatasıdır. DemirDöküm Nitromix'te F.29, F.67 ve F.68'in olası nedenleri arasında atık gaz yolu sayılıyor; F.77 atık gaz klapesi arızasıdır. Baymak Duotec'in tablosunda baca adıyla bir kod yok; E05 fan geri besleme hatasıdır."
  - q: "Kombi bacası yerinden çıkarsa ne olur?"
    a: "ECA'nın kılavuzuna göre sızdırmazlığı bozulan baca bağlantılarından karbonmonoksit (CO) sızabilir ve bu zehirlenmeye yol açar. DemirDöküm de tıkanmış ya da sızdıran atık gaz yolunu ölüm tehlikesi olarak yazıyor. Böyle bir durumda kombiyi kapat, kapı ve pencereleri aç, yetkili servisi ara; bacayı yerine kendin takma."
  - q: "Kombi bacasını kendim uzatabilir ya da kısaltabilir miyim?"
    a: "Hayır. ECA, orijinal baca kitinin kesilmesini ya da ek yapılmasını uygun bulmuyor ve baca bağlantısında yetkili servise danışmadan değişiklik yapılmamasını istiyor. DemirDöküm atık gaz sisteminde hiçbir değişiklik yapılmamasını yazıyor. İzin verilen baca uzunluğu modele göre değişir ve her dirsek bu uzunluğu kısaltır; hesabı servis yapar."
  - q: "Kombi bacası nasıl temizlenir?"
    a: "İncelediğimiz kılavuzlar kullanıcıya baca temizliği tarif etmiyor. DemirDöküm kendi başına bakım ya da onarım yapılmamasını istiyor; atık gaz sisteminin yıpranma, hasar ve bağlantılar açısından kontrolü yıllık bakımda servis tarafından yapılıyor. ECA ve Baymak yıllık bakımı yetkili servise bırakıyor."
  - q: "Kombi baca seti nereden alınır?"
    a: "Üreticinin orijinal parçasından. Baymak yalnız kendi sağladığı aksesuarların kullanılmasını istiyor, aksi halde ürün garanti dışı kalıyor. ECA yalnız orijinal yanma havası/atık gaz borularını kabul ediyor. DemirDöküm sertifikalı baca bileşenlerini ürün numaralarıyla kılavuzunda listeliyor. Montaj yetkili kişilerin işidir."
images:
  coverAlt: "Duvara asılı kombinin üstünden çıkıp dış duvara uzanan iç içe iki borulu baca, sade çizim"
  steps:
    - "Kombi ekranındaki kod, yanında not defteri, kalem ve açık kullanma kılavuzu"
    - "Pencereden görünen dış duvardaki baca çıkış ucu, önü açık ve boş; yanında önü açık havalandırma menfezi"
    - "Kombinin altındaki ince plastik gider hortumu ve gider hunisine yakın plan, açık ve temiz"
    - "Kombinin yanındaki raftan sprey kutusunu ve temizlik şişesini uzaklaştıran eldivenli el"
    - "Ardına kadar açılmış pencere ve kapı, perde hafifçe havalanıyor, kombi kapalı konumda"
    - "Telefon, not defteri ve kombinin model etiketi yan yana, servis çağırmaya hazır bilgi listesi"
---

Kombin ekranda bir kod gösterip durdu ya da ortamda alışılmadık bir koku var. Kodun karşılığında "baca gazı", "atık gaz" ya da "fan" yazıyorsa sorun kombinin hava alıp gaz attığı yolda olabilir. Bacanın takılması, uzatılması ve değişimi **yetkili servis işi**; senin yapabileceğin, kodu doğru okumak, birkaç güvenli gözlem yapmak ve koku varsa doğru adımları atmak.

Bu yazıdaki bilgiler üreticilerin kendi belgelerinden: **Baymak** (Duotec yoğuşmalı kombi), **DemirDöküm** (Nitromix kullanma ile montaj ve bakım kılavuzları) ve **ECA** (Confeo Premix yoğuşmalı kombi). Kendi kombinin kesin kod listesi kendi kılavuzunda yazar. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kombi bacası iki iş yapar: yanma için **temiz havayı dışarıdan alır**, **atık gazı dışarı atar**. Sızdırmaz bağlantı güvenlik için şart; ECA, bağlantıdan sızacak **karbonmonoksitin (CO)** zehirlenmeye yol açacağını yazıyor. Bacayı **söküp takmak, uzatmak, kısaltmak yalnız yetkili servisin işi**. Baca gazı kokusu alırsan kapı ve pencereleri aç, kombiyi kapat, servisi ara.

## Hangi belirtiler bacayı işaret eder?

Kılavuzlarda baca ve atık gaz sorunları **ekranda hata koduyla** görünüyor. Fan kodları ayrı bir parçayı gösterir ama aynı tabloda yer alıyor:

| Kombi | Baca / atık gaz ile ilgili kodlar | Fan | Kılavuz ne diyor? |
|---|---|---|---|
| ECA Confeo Premix | F07 yüksek baca gazı sıcaklığı (95 °C'yi aşarsa) · F53 baca gazı sıcaklık sensörü hatası | F05 fan geri bildirim hatası | F07 ve F53'te doğrudan yetkili servis; F05'te önce reset, sürerse servis |
| DemirDöküm Nitromix | F.29, F.67, F.68: olası nedenler arasında atık gaz yolu · F.77 atık gaz klapesi arızalı | F.32 fan arızası | Tedbirler montaj ve bakım kılavuzunda, yani yetkili servise yazılmış |
| Baymak Duotec | Tabloda baca adıyla kod yok | E05 fan geri besleme hatası | RESET (K1), sorun sürerse yetkili servis |

DemirDöküm'ün servis tablosu F.29 ve F.68'de bir ipucu daha veriyor: olası nedenler arasında **yoğuşma suyu gider hattının tıkalı olması** da var. Kombi hiç ateşlemiyorsa genel kontroller için: [kombi yanmıyor](/blog/kombi-yanmiyor/).

## Baca seti ne iş yapar?

**Hava alır, gaz atar.** Baymak'ın tarifiyle kombi çalışırken oluşan atık gazlar baca sistemiyle dışarı atılır, yanma için gereken temiz hava da aynı baca sistemiyle alınır. Baymak Duotec yatay **eş eksenli** bacaya bağlanacak şekilde tasarlanmış: iç içe geçmiş iki boru. ECA'da içteki boru atık gazı, dıştaki boru taze havayı taşır. ECA Confeo Premix ortam havasından bağımsız çalışan **hermetik (C tipi)** bir kombi; Baymak Duotec de oda sızdırmazlıklı ve fan destekli.

**Sette neler var?** ECA, hermetik baca setini kombiden ayrı bir kutuda teslim ediyor. Standart Ø60/100 sette 90° dirsek, atık gaz ve hava giriş tapaları, sızdırmazlık contaları, flanşlar ve **baca çıkış terminali** bulunuyor.

**Yoğuşma suyu.** Yoğuşmalı kombide yanma sırasında su oluşur. ECA'ya göre 1 m³ doğalgazda en fazla 1,7 litre yoğuşma suyu çıkar; atık gaz borusunun içi her zaman nemlidir. Soğuk ya da çok nemli havada atık gazdaki su buharı bacadan çıkarken yoğuşabilir. Bu yüzden yatay baca, yoğuşma suyunun kombiye geri dönebileceği eğimle takılır. Su, kombinin altındaki **yoğuşma suyu gider hattıyla** atık su giderine gider.

**Uzunluk ve dirsek.** İzin verilen baca uzunluğu modele göre değişir. Baymak ve ECA her 90° dirseği 1 m baca uzunluğu sayıyor; DemirDöküm de yatay ve dikey sistemlerde her ilave 90° dirsek için uzunluğun 1 m azaltılmasını istiyor. Hesap ve montaj servis işidir.

## Değişim ve montaj: yalnız yetkili servis

Kombi gazla çalışır ve baca sızdırmazlığı doğrudan güvenlik konusudur. Kılavuzlar açık:

- **ECA:** "Orjinal baca kitlerine müdahale edilmesi (kesilmesi, ek yapılması vb.) uygun değildir." Baca bağlantılarında yetkili servise danışılmadan değişiklik yapılmamalı. Baca seti sızdırmaz biçimde sabitlenmezse bağlantılardan sızacak **CO** zehirlenmeye yol açar.
- **DemirDöküm:** atık gaz sisteminde ve yoğuşma suyu tahliye sisteminde **değişiklik yapılmamalı**; montaj, sökme, bakım ve tamir yalnız yetkili servis işi. Ürün yalnız baca tam monte edilmişken çalıştırılmalı.
- **Baymak:** cihazın parçaları **yalnız servis tarafından sökülmeli**; yoğuşma borusu kalifiye bir uzman dışında asla değiştirilmemeli. Yıllık bakım mutlaka yetkili serviste.

## Senin yapabileceklerin: adım adım

**1. Kodu not et.** DemirDöküm, F.xx uyarısı çıkarsa arıza tablosuna göre hareket etmeni, gideremiyorsan yetkili servise başvurmanı istiyor. Marka bazlı tablolar: [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) · [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/).

**2. Baca borusuna dokunma.** Baymak'a göre ayara bağlı olarak baca borularının sıcaklığı **60 °C**'ye ulaşabilir.

**3. Çıkışın ve menfezlerin önünü kapatma.** ECA, baca çıkış terminalinin hava girişini ve atık gaz çıkışını kesintisiz sağlayan bir dış ortama açılmasını istiyor ve havalandırma menfezlerinin önünün kesinlikle kapatılmamasını yazıyor. Bacanın dışarıdaki ucunun önüne eşya koyma.

**4. Yoğuşma suyu giderine bak.** DemirDöküm, gider hattının ve gider hunisinin daima açık olmasını, tıkanmaya karşı düzenli kontrol edilmesini istiyor; sorun görürsen yetkili bayiye bildir.

**5. Kimyasalları uzak tut.** DemirDöküm'e göre sprey, çözücü, klorlu temizlik maddesi, boya ve yapıştırıcı yanma havası/atık gaz borusunda korozyona yol açabilir.

**6. Baca gazı kokusunda.** DemirDöküm: erişebildiğin tüm kapı ve pencereleri aç, cereyan yap, kombiyi kapat, yetkili servisi bilgilendir. Baymak da önce kombiyi kapatıp kapı ve pencereleri açmayı yazıyor. **Doğalgaz kokusu** başka bir durumdur: ECA'ya göre gaz vanalarını kapat, kibrit ya da çakmak yakma, elektrik düğmelerine ve fişlere dokunma, ortamı havalandır, 187'yi ara ve yetkili servise bildir.

## Ne zaman servis?

| Durum | Ne yapılır |
|---|---|
| ECA'da F07 ya da F53 | Doğrudan yetkili servis |
| Fan kodu reset sonrası geri geliyor | Yetkili servis |
| Baca yerinden çıkmış, gevşemiş ya da hasarlı görünüyor | Kombiyi kapat, yetkili servis |
| Baca gazı kokusu | Havalandır, kombiyi kapat, yetkili servis |
| Bacayı uzatmak, kısaltmak, yerini değiştirmek | Yetkili servis |
| Yoğuşma suyu gider hattında tıkanma | Yetkili servis ya da bayi |

## Baca seti nereden alınır?

Üreticiler **orijinal baca aksesuarı** istiyor. Baymak, yalnız kendi sağladığı aksesuarların kullanılmasını, aksi halde ürünün garanti dışı kalacağını yazıyor; yedek parçaları üretim tarihinden itibaren **15 yıl** temin etmeyi garanti ediyor. ECA, yalnız üreticinin orijinal yanma havası/atık gaz borularını kabul ediyor ve yoğuşmalı kombide yoğuşmasız baca borusu kullanılmamasını istiyor. DemirDöküm, sertifikalı baca bileşenlerini kılavuzunda ürün numaralarıyla listeliyor; sertifikasız parçayla ürünün uyumluluğunun kaybolacağını yazıyor. Servis ve yedek parça temin yerleri için DemirDöküm ve ECA kendi web adreslerini gösteriyor.

Cihazını ve ekrandaki kodu benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Önce öğren, sonra çağır.
