---
title: "Samsung çamaşır makinesi deterjan almıyor"
description: "Samsung çamaşır makinesinde yıkamadan sonra çekmecede deterjan kalıyorsa: su basıncı, doğru bölme, maks çizgisi, sıvı kutusu ve çekmece temizliği."
slug: "samsung-camasir-makinesi-deterjan-almiyor"
date: "2026-10-03"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, Haier/Samsung koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com · www.samsung.com/tr) indirildi, HTTP 200. PDF md5'leri 2 Eki kopyalarıyla birebir.
# #88: web araması yalnız destek sayfalarının yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-3eki/ (MD5.txt) · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  W4) Kılavuz WW4000T (WW90T4020CE), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf
#  W5) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  S1) Samsung TR SSS "Samsung Çamaşır makinem su sızdırıyor ne yapabilirim?" (2026-08-20)  https://www.samsung.com/tr/support/home-appliances/what-can-i-do-if-my-samsung-washing-machine-is-leaking-water/  md5 dea14a83ce710075ea29fe838e45de77
# Belirti satırı W4 s.54 / W5 s.54 "Bir programdan sonra, deterjan çekmecesinde deterjan kalıyor." →
#   "Çamaşır makinesine gelen suyun basıncının yeterli olduğunu kontrol edin." · "Deterjanın deterjan çekmecesinin ortasına koyulduğundan emin olun." · "Durulama kapağının düzgün takıldığından emin olun."
#   · "Parçacıklı deterjan kullanıyorsanız, deterjan seçicisinin üst konumda olduğundan emin olun." · "Durulama kapağını çıkarın ve deterjan çekmecesini temizleyin."
# Diğer W4: s.34 üç bölme (sol ana yıkama, orta yumuşatıcı, sağ ön yıkama; yumuşatıcıda maks çizgisi) + DİKKAT (çalışırken çekmeceyi açma; tablet/kapsül, top/file biçimli deterjan kullanma;
#   "Bölmenin tıkanmasını önlemek için, konsantre veya zenginleştirilmiş ürünler (yumuşatıcı veya deterjan) uygulanmadan önce sulandırılmalıdır.")
#   · s.35 ana yıkama bölmesi, maks çizgisi; yumuşatıcı son durulamada dağıtılır · s.36 DİKKAT (sıvı kutusuna toz koyma; konsantre yumuşatıcı seyreltilir; yumuşatıcı bölmesine ana yıkama deterjanı koyma)
#   + sıvı deterjan (yalnızca uygun modeller): kutuyu ana yıkama bölmesine tak, maks çizgisi; "Toz deterjan kullanırken sıvı kutusunu çıkarın." · NOT "Yıkamadan sonra, deterjan çekmecesinde biraz sıvı deterjan kalabilir."
#   · s.52 Deterjan çekmecesi 6 adım + NOT "Kalan deterjanı çıkarmak için, kazan boşken, DURULAMA+SIKMA programını çalıştırın." · s.55 "Ek deterjan eklenemiyor." → kalan deterjan ve yumuşatıcı sınırı aşmasın
#   · s.31 sertleşen/katılaşan deterjan kullanma · s.57 servis cümlesi · S1 tambur–deterjan gözü hortumu deterjanla tıkanabilir → en yüksek sıcaklıkta ya da eco temiz kazan programında deterjansız boş yıkama.
# BİLEREK YAZILMAYANLAR: "durulama kapağı" ve "deterjan seçicisi"nin çekmecede tam olarak hangi parça olduğu (W4/W5 çekmece çizimlerinde bu adlar geçmiyor; satırdaki adlar aynen verildi, tarif uydurulmadı)
#   · su basıncının sayısal değeri (teknik özellik tablosu kurulum içindir; kullanıcı adımı değil) · su giriş tel filtresi temizliği (W4 s.50 pense istiyor → ALET KURALI) · başka modellere genelleme.
# Alıntı denetim tablosu: samsung-camasir-makinesi-deterjan-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (program süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak fırça", "Şişe fırçası"]
steps:
  - "Su musluğunun tamamen açık olduğunu ve makineye gelen suyun basıncının yeterli olduğunu kontrol et."
  - "Deterjanı çekmecenin ana yıkama bölmesine, ortasına ve maks çizgisini aşmadan koy."
  - "Toz deterjan kullanıyorsan sıvı deterjan kutusunu çıkar; sıvı kutusuna toz koyma."
  - "Konsantre deterjanı ya da yumuşatıcıyı bölmeye koymadan önce suyla sulandır."
  - "Makineyi kapatıp fişini çek; çekmeceyi açma kolunu tutarak çıkar, açma kolunu ve sıvı kutusunu ayır."
  - "Çekmece parçalarını akan suyun altında yumuşak bir fırçayla, girintiyi şişe fırçasıyla temizle ve parçaları geri tak."
  - "Fişi tak, kazan boşken DURULAMA+SIKMA programını çalıştır."
faq:
  - q: "Samsung çamaşır makinesi neden deterjanı almıyor?"
    a: "Samsung'un Türkçe kılavuzlarındaki 'Bir programdan sonra, deterjan çekmecesinde deterjan kalıyor.' satırı beş madde sayıyor: makineye gelen suyun basıncı yetersiz olabilir, deterjan çekmecenin ortasına konmamış olabilir, durulama kapağı düzgün takılmamış olabilir, parçacıklı deterjanda deterjan seçicisi üst konumda olmayabilir ve çekmecenin temizlenmesi gerekebilir."
  - q: "Yıkamadan sonra çekmecede biraz sıvı deterjan kalıyor. Bu arıza mı?"
    a: "WW4000T kılavuzunun sıvı deterjan notuna göre yıkamadan sonra deterjan çekmecesinde biraz sıvı deterjan kalabilir. Toz deterjan ya da belirgin miktarda deterjan kalıyorsa kılavuzun 'deterjan kalıyor' satırındaki kontrolleri yap."
  - q: "Yumuşatıcı bölmede kalıyor ya da hemen akıyor. Ne yapmalıyım?"
    a: "Samsung'a göre yumuşatıcı son durulama sırasında dağıtılır. Yumuşatıcıyı orta bölmeye koy ve maks çizgisini aşma; konsantre yumuşatıcıyı koymadan önce suyla seyrelt. Yumuşatıcı bölmesine ana yıkama deterjanı koyma."
  - q: "Kapsül ya da tablet deterjanı çekmeceye koyabilir miyim?"
    a: "WW4000T kılavuzu deterjan çekmecesinde tablet ya da kapsül ve çamaşır topu ya da filesi biçimindeki deterjanların kullanılmamasını istiyor. Kendi modelinin kılavuzundaki deterjan bölümüne bak."
images:
  coverAlt: "Çamaşır makinesinden çıkarılmış deterjan çekmecesi lavabonun içinde akan suyun altında; yanında yumuşak bir fırça ve ince uzun bir şişe fırçası"
---

Program bitmiş, çekmeceyi açınca toz deterjanın büyük kısmı yerinde duruyor ya da bölmede ıslak bir deterjan topağı kalmış. Samsung'un Türkçe kullanım kılavuzlarındaki sorun giderme tablosunda bu durumun satırı uzun ama açık: **"Bir programdan sonra, deterjan çekmecesinde deterjan kalıyor."** Satırın ilk maddesi deterjanla değil suyla ilgili: **"Çamaşır makinesine gelen suyun basıncının yeterli olduğunu kontrol edin."** Aşağıdaki sıra bu satırı ve kılavuzun deterjan çekmecesi bölümünü izliyor. Kaynak WW4000T ve WW5000C serilerinin kılavuzları; bölme ve parça adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Musluk tam açık mı, su basıncı yeterli mi → deterjanı **sol (ana yıkama) bölmeye,** ortaya ve maks çizgisinin altına → toz kullanıyorsan sıvı kutusunu çıkar → konsantreyi sulandır → çekmeceyi çıkar, fırçayla yıka → kazan boşken **DURULAMA+SIKMA.**

## Önce bölmeleri tanı

WW4000T kılavuzuna göre çekmecede üç bölme var:

- **Sol bölme — ana yıkama:** ana yıkama deterjanı, su yumuşatıcısı, çamaşır suyu ya da leke çıkarıcı.
- **Orta bölme — yumuşatıcı:** çamaşır yumuşatıcısı gibi katkılar; **maks çizgisini** aşma. Yumuşatıcı son durulama sırasında dağıtılır.
- **Sağ bölme — ön yıkama:** ön yıkama deterjanı ya da çamaşır kolası.

Kılavuz yumuşatıcı bölmesine **ana yıkama deterjanı koyulmamasını** ve makine çalışırken çekmecenin açılmamasını istiyor.

## Adım adım: evde denenecekler

**1. Su basıncına bak.** Satırın ilk maddesi: makineye gelen **suyun basıncının yeterli** olduğunu kontrol et. Kılavuzun su beslemesi satırına göre **musluğu tamamen aç.**

**2. Deterjanı doğru yere koy.** Samsung deterjanın **çekmecenin ortasına** konduğundan emin olmanı istiyor. Kılavuzun yükleme adımına göre çamaşır deterjanı **ana yıkama bölmesine** üreticinin önerdiği şekilde konur ve **maks çizgisi** aşılmaz.

**3. Toz ve sıvıyı karıştırma.** Sıvı deterjan kutusu olan modellerde kutu ana yıkama bölmesine takılır. Kılavuzun uyarıları: **toz deterjan kullanırken sıvı kutusunu çıkar** ve sıvı deterjan kutusuna **toz deterjan koyma.** Satırın bir maddesi de parçacıklı (toz) deterjanla ilgili: **deterjan seçicisinin üst konumda** olduğundan emin ol.

**4. Konsantreyi sulandır.** Kılavuzun deterjan çekmecesi uyarısı: **bölmenin tıkanmasını önlemek için** konsantre ya da zenginleştirilmiş ürünler (yumuşatıcı ya da deterjan) konmadan önce sulandırılmalı. Sertleşen ya da katılaşan deterjan da kullanma.

**5. Çekmeceyi çıkar.** Satırın son maddesi çekmecenin temizlenmesini istiyor. Makineyi kapatıp fişini çek. Çekmecenin içindeki **açma kolunu** tutarken çekmeceyi kaydırarak aç ve çıkar; açma kolunu ve sıvı deterjan kutusunu çekmeceden ayır. Satır ayrıca **durulama kapağının** düzgün takılı olmasını ve temizlik için çıkarılmasını istiyor; modelinde bu parça varsa onu da çıkar.

**6. Çekmeceyi ve girintiyi yıka.** Çekmece parçalarını **akan suyun altında yumuşak bir fırçayla** temizle. Çekmece girintisindeki deterjan kalıntılarını ve kireci **şişe fırçasıyla** gider. Açma kolunu, sıvı deterjan kutusunu ve durulama kapağını **düzgün** takıp çekmeceyi iterek kapat.

**7. Durulama yap.** Kılavuzun bakım notu: **kalan deterjanı çıkarmak için,** kazan boşken **DURULAMA+SIKMA** programını çalıştır. Samsung Türkiye'nin su sızıntısı sayfası, tambur ile deterjan gözünü bağlayan hortum deterjanla tıkandığında en yüksek sıcaklıklı programla ya da eco temiz kazan programıyla **deterjansız** boş yıkama da öneriyor.

## Normal olan durum

WW4000T kılavuzunun sıvı deterjan notuna göre **yıkamadan sonra deterjan çekmecesinde biraz sıvı deterjan kalabilir.** Bu tek başına arıza değil. Kılavuzun "Ek deterjan eklenemiyor." satırı da hatırlatıyor: **kalan deterjan ve yumuşatıcı miktarı sınırı aşmamalı.**

Çekmece temizliğinin kokuyla ilgili tarafı [Samsung çamaşır makinesi kokuyor](/blog/samsung-camasir-makinesi-kokuyor/) yazısında. Markadan bağımsız anlatım için [çamaşır makinesi deterjan almıyor](/blog/camasir-makinesi-deterjan-almiyor/) ve [deterjan çekmecesi hangi göz](/blog/camasir-makinesi-deterjan-cekmecesi-hangi-goz/) yazılarına bakabilirsin.

## Ne zaman servis

Su musluğu, deterjanın yeri ve türü, çekmece ve parçalarının temizliği kullanıcıya aittir. Bunlardan sonra çekmecede hâlâ deterjan kalıyorsa kılavuzun cümlesi geçerli: **sorun devam ederse bir servis merkezine danış;** servis merkezi numarası ürüne takılı etiketin üzerindedir. Ekranda **4C** görürsen konu su beslemesidir; ayrıntısı [Samsung çamaşır makinesi 4C hatası](/blog/samsung-camasir-makinesi-4c-hatasi/) yazısında.

⛔ **Kendin-çöz sınırı burada biter.** Su giriş hortumunu sökmek, tel filtreyi aletle çıkarmak ya da makinenin panellerini açmak kullanıcı işi değildir.

## Servisi aramadan önce iki dakikalık özet

- Toz mu, sıvı mı, hangi bölmeye ve ne kadar deterjan koydun?
- Sıvı deterjan kutusu takılıyken toz deterjan mı kullandın?
- Su musluğu tamamen açık mı?
- Çekmece en son ne zaman çıkarılıp temizlendi?
- Ekranda 4C ya da başka bir kod var mı?

Bu sorulara cevabın varsa servise "deterjan almıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
