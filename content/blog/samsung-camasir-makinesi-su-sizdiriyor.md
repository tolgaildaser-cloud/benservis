---
title: "Samsung çamaşır makinesi su sızdırıyor"
description: "Samsung çamaşır makinesi su sızdırıyorsa Samsung'un sırası: deterjan çekmecesi, kapak ve diyafram, hortum bağlantıları, aşırı köpük. LE kodu ne demek?"
slug: "samsung-camasir-makinesi-su-sizdiriyor"
date: "2026-10-03"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, Haier/Samsung koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com · www.samsung.com/tr) indirildi, HTTP 200. PDF md5'leri 2 Eki kopyalarıyla birebir.
# #88: web araması yalnız destek sayfalarının yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-3eki/ (MD5.txt) · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  S1) Samsung TR SSS "Samsung Çamaşır makinem su sızdırıyor ne yapabilirim?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/what-can-i-do-if-my-samsung-washing-machine-is-leaking-water/  md5 dea14a83ce710075ea29fe838e45de77
#  S2) Samsung TR SSS "Samsung Çamaşır makinem kalıntı filtresinden su sızdığında ne yapabilirim?" (Son güncelleme 2025-02-03)
#      https://www.samsung.com/tr/support/home-appliances/my-washing-machine-leaks-water-through-the-residue-filter-what-can-i-do/  md5 4edfd39f227cbd30be391796ce8b63f6
#  W4) Kılavuz WW4000T (WW90T4020CE), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf
#  W5) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  (S1-S2 dinamik HTML; md5 bu indirmenin)
# Belirti satırı W4 s.56 / W5 s.57 "Su sızıyor." → "Kapağın düzgün bir şekilde kapalı olduğundan emin olun." · "Tüm hortum bağlantılarının sıkı olduğundan emin olun."
#   · "Boşaltma hortumu ucunun doğru bir şekilde takıldığından ve boşaltma sistemine sabitlendiğinden emin olun." · "Aşırı yükleme yapmaktan kaçının."
#   · "Aşırı köpürmeyi önlemek için, yüksek etkililiğe (HE) sahip deterjan kullanın." · W5 ek: "Kapı ile diyafram arasında sıkışmış bir şey olup olmadığını kontrol edin. -- … diyaframda sızıntıya veya hasara neden olabilir."
# S1: "Kaçak sensörü herhangi bir su kaçağı algıladığında LE Hata kodu verir." · 1 deterjan çekmecesi temizliği + "Tambur ile deterjan gözünü birbirine bağlayan hortum, deterjan nedeniyle tıkandığı için en yüksek
#   derecedeki sıcaklığa sahip program seçerek veya eco temiz kazan programında deterjansız boş yıkama yapın." · 2 kalıntı filtresi (fiş; "Bir anahtar veya demir para yardımıyla" kapak; acil boşaltma hortumu; filtre sola çevir, yıka, pervane)
#   · 3 kapak ("Makine kapağına sıkışan çamaşır olmadığından emin olup tekrar deneyiz.")
# S2: kalıntı filtresi alanından sızıntı = filtre tıkanması; LE; 7 adım ("filtre kapağının üstüne hafifçe bastırın veya kapağı açmak için bozuk para, anahtar kullanın.")
# Diğer W4: s.22 ADIM 4 su hortumu (musluğa bağla, konektörü saat yönünde; makine arkasındaki giriş vanasına, saat yönünde sık; musluğu aç, bağlantı bölgelerinde sızıntı kontrol)
#   + UYARI "Su sızıntısı varsa, çamaşır makinesini çalıştırmayı durdurun ve elektrik kaynağından çıkarın. Sonra, su hortumundan sızıntı olması durumunda yerel bir Samsung servis merkezine veya su musluğundan
#   sızıntı olması durumunda bir tesisatçıya başvurun. Aksi takdirde elektrik çarpması meydana gelebilir." · s.23 hortumu kuvvetle germeyin · s.24 NOT hortumu aşağı çekerek bağlantıyı kontrol et
#   · s.25 Aqua hortum (yalnızca geçerli modellerde; sızıntıda gösterge kırmızı) · s.25-26 boşaltma hortumu (lavabo kenarı: 60-90 cm, plastik hortum tutucusu; boru: 15 cm içine, hortum kılavuzu)
#   · s.52 deterjan çekmecesi 6 adım + NOT DURULAMA+SIKMA · s.55 "Aşırı köpük var." · s.58 LC, LC1 "Boşaltma hortumunu kontrol edin." (ucu yere yerleştirilmemiş; tıkanmamış) · s.57 servis cümlesi.
# BİLEREK YAZILMAYANLAR: kalıntı filtresi kapağını aletle (anahtar/bozuk para) açma — numaralı adıma alınmadı, 5C sayfasına link · su giriş hortumunu sökme/adaptör vidaları (tornavida; s.23)
#   · diyafram hasarında ne yapılacağı (belgede yok) · LE kodunun hangi modelde göründüğü (S1-S2 genel; W4/W5 kod tablosunda LE yok, LC/LC1 var) · başka modellere genelleme.
# Alıntı denetim tablosu: samsung-camasir-makinesi-su-sizdiriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (boş yıkama süresi hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Yumuşak fırça", "Şişe fırçası", "Kuru bez"]
steps:
  - "Makineyi durdur ve fişini prizden çek."
  - "Deterjan çekmecesini açma kolunu tutarak çıkar ve parçalarını akan suyun altında yumuşak bir fırçayla temizle."
  - "Çekmece girintisini şişe fırçasıyla temizle, parçaları takıp çekmeceyi kapat."
  - "Kapak ile diyafram arasına sıkışmış çamaşır ya da nesne olup olmadığına bak ve çıkar."
  - "Musluktaki ve makine arkasındaki su hortumu bağlantılarının sıkı olduğunu kontrol et."
  - "Boşaltma hortumunun ucunun yerinde takılı ve sabit olduğunu kontrol et."
  - "Fişi tak, tambur boşken deterjansız en yüksek sıcaklıklı programı ya da temiz kazan programını çalıştır."
  - "Sonraki yıkamalarda makineyi aşırı yükleme ve HE deterjan kullan."
faq:
  - q: "Samsung çamaşır makinesi neden su sızdırıyor?"
    a: "Samsung Türkiye'nin destek sayfası üç yere bakmanı istiyor: deterjan çekmecesi (tambur ile deterjan gözünü bağlayan hortum deterjanla tıkanmış olabilir), sağ alt köşedeki kalıntı filtresi ve kapak (tam kapanmamış ya da arasına çamaşır sıkışmış olabilir). Kılavuzun 'Su sızıyor.' satırı bunlara gevşek hortum bağlantılarını, yerinden çıkmış boşaltma hortumunu, aşırı yüklemeyi ve aşırı köpüğü ekliyor."
  - q: "LE hatası ne demek?"
    a: "Samsung Türkiye'nin destek sayfalarına göre kaçak sensörü bir su kaçağı algıladığında makine LE hata kodu verir. Bu bir sızıntı uyarısıdır; yukarıdaki kontrolleri yap. Sorular için Samsung müşteri hizmetlerine başvurabilirsin. WW4000T ve WW5000C kılavuzlarının kod tablosunda ise LE değil LC ve LC1 var; bunlar boşaltma hortumunun kontrol edilmesini istiyor."
  - q: "Su hortumundan su geliyor. Ne yapmalıyım?"
    a: "Samsung'un kurulum uyarısı net: su sızıntısı varsa makineyi çalıştırmayı durdur ve elektrik kaynağından çıkar. Sızıntı su hortumundan geliyorsa yerel bir Samsung servis merkezine, su musluğundan geliyorsa bir tesisatçıya başvur. Samsung aksi hâlde elektrik çarpması olabileceğini yazıyor."
  - q: "Ön alttaki filtre kapağından su geliyor. Ne yapmalıyım?"
    a: "Samsung'a göre kalıntı filtresinin tıkanması bu alandan sızıntıya yol açabilir ve filtrenin temizlenmesi gerekir. Kapak bazı modellerde üstüne hafifçe bastırınca açılıyor; açılmıyorsa Samsung anahtar ya da bozuk para kullanılmasını söylüyor. Aletle açman gerekiyorsa bu işi yetkili servise bırak. Filtre temizliğinin adımları Samsung 5C hatası yazısında."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin önünde zeminde küçük bir su birikintisi; deterjan çekmecesi dışarı çekilmiş, yanında katlanmış bir bez"
---

Çamaşır makinesinin önünde ya da altında su birikmiş, ama suyun nereden geldiği belli değil. Samsung Türkiye'nin destek sayfası bu durumda bir arama sırası veriyor ve ilk sırada çoğu kişinin bakmadığı yer var: **deterjan çekmecesi.** Sayfaya göre **tambur ile deterjan gözünü birbirine bağlayan hortum deterjan nedeniyle tıkanabilir.** Kılavuzun sorun giderme tablosundaki **"Su sızıyor."** satırı ise kapağı, hortum bağlantılarını, aşırı yüklemeyi ve köpüğü sayıyor. Aşağıdaki sıra bu ikisini birleştiriyor. Kaynak WW4000T ve WW5000C serilerinin kılavuzları ile Samsung Türkiye'nin iki destek sayfası; parça adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Makineyi durdur, fişi çek → deterjan çekmecesini çıkar ve temizle → kapakla diyafram arasına bak → hortum bağlantıları sıkı mı → boşaltma hortumu yerinde mi → deterjansız, en sıcak programla boş yıkama → aşırı yükleme, HE deterjan. Su, su hortumundan ya da musluktan geliyorsa makineyi çalıştırma: hortum için Samsung servisi, musluk için tesisatçı.

## Önce güvenlik

Samsung'un kurulum bölümündeki uyarı: su sızıntısı varsa **makineyi çalıştırmayı durdur ve elektrik kaynağından çıkar.** Sızıntı **su hortumundan** geliyorsa yerel bir Samsung servis merkezine, **su musluğundan** geliyorsa bir tesisatçıya başvur; Samsung'a göre aksi hâlde elektrik çarpması meydana gelebilir.

Makinede **LE** kodu görürsen: Samsung Türkiye'nin destek sayfalarına göre **kaçak sensörü bir su kaçağı algıladığında** makine bu kodu verir.

## Adım adım: evde denenecekler

**1. Durdur ve fişi çek.** Su gördüğün anda programı durdur ve fişi prizden çek. Kılavuz temizlik ya da bakım işlemlerinden önce de cihazın prizden çıkarılmasını istiyor.

**2. Deterjan çekmecesini çıkar ve yıka.** Samsung'un destek sayfasının ilk adımı: kaçak varsa **deterjan çekmecesi temizliği** sağlanmalı. Çekmecenin içindeki **açma kolunu** tutarken çekmeceyi kaydırarak aç, açma kolunu ve sıvı deterjan kutusunu çıkar, parçaları **akan suyun altında yumuşak bir fırçayla** temizle.

**3. Çekmece girintisini temizle.** Deterjan kalıntılarını ve kireci gidermek için çekmece girintisini **şişe fırçasıyla** temizle. Açma kolunu ve sıvı deterjan kutusunu yerine tak, çekmeceyi iterek kapat.

**4. Kapağa ve diyaframa bak.** Samsung'un destek sayfasına göre sızıntı kapaktansa **kapağın tam kapanmaması** sebep olabilir; makine kapağına **sıkışan çamaşır** olmadığından emin ol. WW5000C kılavuzu bir adım ileri gidiyor: **kapı ile diyafram** (lastik conta) arasında sıkışmış bir şey olup olmadığını kontrol et; sıkışan bir şey diyaframda sızıntıya ya da hasara neden olabilir.

**5. Su hortumu bağlantılarını kontrol et.** Kılavuzun "Su sızıyor." satırı: **tüm hortum bağlantılarının sıkı** olduğundan emin ol. Kurulum bölümüne göre hortum musluğa konektör **saat yönünde** çevrilerek, makinenin arkasındaki giriş vanasına da hortum saat yönünde çevrilerek bağlanır; musluk açılınca **bağlantı bölgelerinde sızıntı** olup olmadığına bakılır. Hortumu kuvvet kullanarak germe. Sızıntı bağlantıdan değil de hortumun ya da musluğun kendisinden geliyorsa yukarıdaki güvenlik uyarısına dön.

**6. Boşaltma hortumuna bak.** Samsung boşaltma hortumu ucunun **doğru takıldığından ve boşaltma sistemine sabitlendiğinden** emin olmanı istiyor. Kılavuza göre hortum lavabo kenarındaysa ürünle gelen **plastik hortum tutucusuyla** kanca biçiminde tutulur; boşaltma borusundaysa borunun **15 cm içine** takılır.

**7. Deterjansız boş yıkama yap.** Samsung'un destek sayfası çekmece hortumunun deterjanla tıkanmasına karşı bir yıkama öneriyor: fişi tak ve tambur boşken **en yüksek sıcaklıklı programı** ya da **eco temiz kazan** programını **deterjansız** çalıştır.

**8. Yükü ve deterjanı ayarla.** Satırın son iki maddesi: **aşırı yükleme yapmaktan kaçın** ve aşırı köpürmeyi önlemek için **yüksek etkililiğe (HE)** sahip deterjan kullan.

## Ön alttaki filtre kapağından geliyorsa

Samsung Türkiye'nin ayrı bir destek sayfası bu durumu anlatıyor: **kalıntı filtresinin tıkanması** bu alandan su sızıntısına yol açabilir; filtrenin temizlenmesi gerekir. Samsung'a göre kapak bazı makinelerde **üstüne hafifçe bastırınca** açılıyor; açılmıyorsa sayfa anahtar ya da bozuk para kullanılmasını söylüyor. Aletle açman gerekiyorsa bu adımı yetkili servise bırak. Acil boşaltma hortumu ve filtre temizliğinin Samsung'a göre adımları [Samsung çamaşır makinesi 5C hatası](/blog/samsung-camasir-makinesi-5c-hatasi/) yazısında.

Bazı modellerde **Aqua hortum** var: WW4000T kılavuzuna göre su akışını izler ve bir sızıntı olduğunda ortasındaki gösterge **kırmızıya** döner (yalnız geçerli modellerde).

Sızıntının kaynağını markadan bağımsız bulmak için [çamaşır makinesi su kaçırıyor](/blog/camasir-makinesi-su-kaciriyor/) yazısına bakabilirsin.

## Ne zaman servis

Deterjan çekmecesi, kapak, bağlantıların sıkılığı, boşaltma hortumunun yeri, yük ve deterjan kullanıcıya aittir. **Su hortumundan** sızıntı varsa Samsung'un talimatı servis, **musluktan** sızıntı varsa tesisatçı. **LE** kodu için Samsung müşteri hizmetleriyle iletişime geçebilirsin. Kılavuzun genel cümlesi: **sorun devam ederse bir servis merkezine danış;** numara ürüne takılı etiketin üzerindedir.

⛔ **Kendin-çöz sınırı burada biter.** Su giriş hortumunu söküp adaptörünü değiştirmek, makinenin panellerini açmak ya da hasarlı diyaframı değiştirmek kullanıcı işi değildir.

## Servisi aramadan önce iki dakikalık özet

- Su makinenin önünden mi, altından mı, arkasından mı geliyor?
- Ekranda LE, LC ya da başka bir kod var mı?
- Sızıntı yıkama sırasında mı, durulamada mı, yoksa makine dururken mi oluyor?
- Deterjan çekmecesinde birikinti var mıydı?
- Kapakla diyafram arasında bir şey buldun mu?

Bu sorulara cevabın varsa servise "su sızdırıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
