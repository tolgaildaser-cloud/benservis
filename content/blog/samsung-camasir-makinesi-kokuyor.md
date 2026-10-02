---
title: "Samsung çamaşır makinesi kokuyor"
description: "Samsung çamaşır makinesi kötü kokuyorsa kılavuzdaki 'Koku var.' satırının sırası: diyafram, deterjan çekmecesi, TEMİZ KAZAN ve içini kurulamak."
slug: "samsung-camasir-makinesi-kokuyor"
date: "2026-10-02"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Samsung belirti koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından
#   (org.downloadcenter.samsung.com · www.samsung.com/tr) indirildi, HTTP 200. PDF md5'leri 28-29 Eyl yerel kopyalarıyla birebir.
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da ABD/İngiltere Samsung sayfasından alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-2eki/ (MD5.txt) · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  K2) Kılavuz WW4000T (WW90T4020CE), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae  (sayfa atıfları esas olarak bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  T6) Samsung TR SSS "Samsung Çamaşır makinem temiz yıkamıyor ne yapabilirim?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/what-can-i-do-when-my-samsung-washing-machine-is-not-washing-clean/  md5 f59bbd208e37f109dcef9479f76f437e (HTML, dinamik; md5 bu indirmenin)
# Belirti satırı K2 s.57 / K1 s.57 "Koku var.":
#   "Aşırı köpük girintilerde toplanır ve kötü kokuya neden olabilir." · K2 "Düzenli olarak temizleme programlarını çalıştırın." (K1: "Düzenli olarak sterilize etmek için temizleme programlarını çalıştırın.")
#   · "Kapı sızdırmazlığını (diyafram) kontrol edin." · "Bir program bittikten sonra çamaşır makinesinin içini kutulayın." (belgedeki yazım; anlam "kurulayın")
# Diğer: K2 s.12 "Kokuları ve küflenmeyi önlemek için bir yıkama programından sonra kazanın kurumasını sağlamak için kapağı açık bırakın." ·
#   "Kireç birikmesini önlemek için bir yıkama programından sonra deterjan çekmecesini açık bırakın ve içini kurulayın." · "Temizlik ya da bakım işlemleri yapmadan önce cihazı prizden çıkarın."
#   · K2 s.10 plastik conta ve ön kapak camı yabancı madde (atık, ip, kıl) ile kirlenmemeli · K1 s.57 (Su sızıyor satırı) "Kapı ile diyafram arasında sıkışmış bir şey olup olmadığını kontrol edin."
#   · K2 s.52 Deterjan çekmecesi 6 adım (açma kolu A; akan su + yumuşak fırça; çekmece girintisi için şişe fırçası) + NOT "Kalan deterjanı çıkarmak için, kazan boşken, DURULAMA+SIKMA programını çalıştırın."
#   · K2 s.46 Temiz Kazan (60-70 °C; lastik kapı contasındaki kiri de temizler; Güç → TEMİZ KAZAN → Başlat/Duraklat basılı; her 40 yıkamada bir; hatırlatıcı; "0" mesajı)
#   · K2 s.40 program tablosu TEMİZ KAZAN: "Deterjan veya çamaşır suyu kullanmadan, 40 yıkamada bir çalıştırın." "Kazanın boş olduğundan emin olun." "Kazanın temizliği için herhangi bir temizlik maddesi kullanmayın."
#   · K2 s.60 "0" kodu · K2 s.55 "Aşırı köpük var." (HE deterjan; yumuşak su/az yük/az kirli çamaşırda miktarı azalt; HE olmayan önerilmez) · K2 s.11 doğal elde yıkama deterjanı → sertleşir, kötü koku
#   · T6 13) EKO TAMBUR TEMİZLEME (aynı talimat, program adı) · K2 s.57 "Sorun devam bir servis merkezine danışın. Servis merkezi numarası ürüne takılı etiket üzerindedir."
# BİLEREK YAZILMAYANLAR: kalıntı filtresi (koku satırında yok; 5C sayfasına bırakıldı) · diyafram hasarında ne yapılacağı (belgede yok) · sirke/karbonat/çamaşır suyu ile ev usulü temizlik
#   (belge TEMİZ KAZAN'da temizlik maddesi istemiyor) · deterjan gram ölçüsü · "kapağı açık bırak" için çocuk uyarısı (Samsung belgesinde yok; uydurulmadı) · başka modellere genelleme.
# Alıntı denetim tablosu: samsung-camasir-makinesi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (program süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak fırça", "Şişe fırçası", "Kuru bez"]
steps:
  - "Makinenin fişini prizden çek."
  - "Kapı ile lastik diyafram arasını kontrol et, sıkışmış atık, ip ya da kılı çıkar."
  - "Deterjan çekmecesini içindeki açma kolunu tutarak çıkar; açma kolunu ve sıvı deterjan kutusunu ayır."
  - "Çekmece parçalarını akan suyun altında yumuşak bir fırçayla temizle."
  - "Çekmece girintisini şişe fırçasıyla temizle, parçaları tak ve çekmeceyi kapat."
  - "Fişi tak, kazanı boşalt ve deterjan ya da çamaşır suyu koymadan TEMİZ KAZAN programını çalıştır."
  - "Program bitince çamaşır makinesinin içini kuru bir bezle kurula."
  - "Kapağı ve deterjan çekmecesini açık bırakarak içinin kurumasını sağla."
faq:
  - q: "Samsung çamaşır makinesi neden kötü kokuyor?"
    a: "Samsung'un Türkçe kılavuzlarındaki 'Koku var.' satırı tek bir sebebi açıkça yazıyor: aşırı köpük girintilerde toplanır ve kötü kokuya neden olabilir. Aynı satırda üç kontrol daha var: temizleme programlarını düzenli çalıştırmak, kapı sızdırmazlığını (diyafram) kontrol etmek ve bir program bittikten sonra makinenin içini kurulamak. Güvenlik bölümü ayrıca kokuları ve küflenmeyi önlemek için yıkamadan sonra kapağın açık bırakılmasını istiyor."
  - q: "TEMİZ KAZAN programını ne sıklıkla çalıştırmalıyım?"
    a: "Samsung her 40 yıkamada bir öneriyor; makine de her 40 yıkamada bir kontrol panelinde bir hatırlatıcı (modele göre simge ya da LED) yakıp söndürüyor. Program kazanın boş olduğu, deterjan, çamaşır suyu ya da başka bir temizlik maddesi konmadığı hâlde çalıştırılır. Samsung Türkiye'nin destek sayfasında aynı program EKO TAMBUR TEMİZLEME adıyla, aynı talimatla geçiyor."
  - q: "Ekranda '0' yazıyor ve makine kapanmıyor. Bunun koku ile ilgisi var mı?"
    a: "Samsung'un bilgi kodu tablosuna göre '0', son sıkmadan sonra makinenin kendiliğinden kapanmadığını ve TEMİZ KAZAN programının çalıştırılmadığını gösterir. Makine bu hâlde de normal çalışır; Samsung yine de temizlik amacıyla programın çalıştırılmasını öneriyor. Kılavuza göre '0' son işlem bittikten sonra bile kalabilir."
  - q: "Deterjanın koku ile ne ilgisi var?"
    a: "Koku satırının ilk maddesi aşırı köpük. Samsung'un 'Aşırı köpük var.' satırı yüksek etkililiğe (HE) sahip deterjan kullanılmasını, yumuşak su, az yük ya da az kirli çamaşırda deterjan miktarının azaltılmasını istiyor; HE olmayan deterjan önerilmiyor. Kılavuz ayrıca çamaşır makinesinde doğal elde yıkama deterjanı kullanılmamasını, sertleşip makinenin içinde birikirse kötü kokuya neden olabileceğini yazıyor."
images:
  coverAlt: "Kapağı aralık bırakılmış ön yüklemeli çamaşır makinesi; deterjan çekmecesi dışarı çekilmiş, yanında küçük bir fırça ve katlanmış kuru bir bez"
---

Kapağı açınca tamburdan ağır bir koku geliyor, ya da yeni yıkanan çamaşır hafif rutubet kokuyor. Samsung'un Türkçe kullanım kılavuzlarındaki sorun giderme tablosunda bunun karşılığı kısa: **"Koku var."** Samsung bu satırda dört madde sayıyor ve bunlardan biri doğrudan sebebi söylüyor: **"Aşırı köpük girintilerde toplanır ve kötü kokuya neden olabilir."** Diğer üçü kullanıcının yapacağı işler: temizleme programını düzenli çalıştırmak, **kapı sızdırmazlığını (diyafram)** kontrol etmek ve program bittikten sonra makinenin içini kurulamak. Aşağıdaki sıra bu satırı ve kılavuzun bakım bölümünü izliyor. Kaynak WW4000T ve WW5000C serilerinin kılavuzları; düğme ve program adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → kapı ile diyafram arasında sıkışan bir şey var mı bak → deterjan çekmecesini çıkar, parçalarını ve girintisini fırçala → kazan boşken, deterjansız **TEMİZ KAZAN** programını çalıştır → içini kurula → kapağı ve çekmeceyi açık bırak. Koku köpükten geliyorsa deterjanı gözden geçir. Sorun sürerse Samsung servis merkezi.

## Adım adım: evde denenecekler

**1. Fişi çek.** Samsung'un temizlik uyarısı: **temizlik ya da bakım işlemleri yapmadan önce cihazı prizden çıkar.**

**2. Diyaframa bak.** Koku satırındaki kontrollerden biri **kapı sızdırmazlığı (diyafram)**, yani kapağın içindeki lastik körük. Kılavuzun su sızıntısı satırı da aynı yere işaret ediyor: **kapı ile diyafram arasında sıkışmış bir şey** olup olmadığını kontrol et. Samsung'un güvenlik bölümüne göre plastik conta ve ön kapak camı **atık, ip, kıl** gibi yabancı maddelerle kirlenmemeli. Lastiğin kıvrımlarını elinle aç, bulduğun parçaları çıkar.

**3. Deterjan çekmecesini çıkar.** Kılavuzun bakım bölümündeki sıra: çekmecenin içindeki **açma kolunu tutarken** çekmeceyi kaydırarak aç, sonra **açma kolunu ve sıvı deterjan kutusunu** çekmeceden çıkar.

**4. Parçaları fırçala.** Çekmece parçalarını **akan suyun altında yumuşak bir fırçayla** temizle.

**5. Çekmece girintisini temizle.** Samsung'a göre girintideki **deterjan kalıntılarını ve kireci** gidermek için **bir şişe fırçası** kullanılır. Ardından açma kolunu ve sıvı deterjan kutusunu çekmeceye geri tak, çekmeceyi iterek kapat. Kılavuzun notu: kalan deterjanı çıkarmak için **kazan boşken DURULAMA+SIKMA** programını çalıştırabilirsin.

**6. TEMİZ KAZAN programını çalıştır.** Koku satırındaki ikinci madde: **düzenli olarak temizleme programlarını çalıştır.** Samsung'a göre bu program suyu **60-70 °C** arasında ısıtır ve **lastik kapı contasında biriken kiri** de temizler. Fişi tak, **kazanın boş olduğundan** emin ol; **deterjan, çamaşır suyu ya da başka bir temizlik maddesi koyma.** Sonra **Güç** düğmesine bas, program seçiciyle **TEMİZ KAZAN**'ı seç ve **Başlat/Duraklat** düğmesini basılı tut. Programın su sıcaklığı 70 °C'ye sabittir, değiştirilemez.

**7. İçini kurula.** Koku satırının son maddesi: **bir program bittikten sonra çamaşır makinesinin içini kurula.** Tamburu, kapağın iç yüzünü ve diyaframın kıvrımlarını kuru bir bezle sil.

**8. Kapağı ve çekmeceyi açık bırak.** Samsung'un güvenlik bölümü iki şey istiyor: **kokuları ve küflenmeyi önlemek için** yıkamadan sonra kazanın kuruması amacıyla **kapağı açık bırak**; **kireç birikmesini önlemek için** de deterjan çekmecesini açık bırakıp içini kurula.

## Koku köpükten geliyorsa

Koku satırının ilk maddesi deterjanla ilgili: fazla köpük makinenin girintilerinde kalır ve kokuya dönüşebilir. Samsung'un **"Aşırı köpük var."** satırındaki çözümler şunlar:

- Önerilen deterjan türünü uygun şekilde kullan; **yüksek etkililiğe (HE) sahip** deterjan seç. Samsung **HE olmayan deterjanı önermiyor.**
- **Yumuşak su, az yük ya da az kirli çamaşır** için deterjan miktarını azalt.
- Samsung Türkiye'nin destek sayfasına göre her zaman otomatik çamaşır makineleri için tasarlanmış **"az köpüklü"** deterjan kullan.

Kılavuzun güvenlik bölümünde bir uyarı daha var: çamaşır makinesinde **doğal elde yıkama deterjanı** kullanma; sertleşip makinenin içinde birikirse cihaz sorunlarına, renk bozulmasına, paslanmaya ya da **kötü kokulara** neden olabilir. Köpük tarafının ayrıntısı için [Samsung çamaşır makinesi köpük yapıyor](/blog/samsung-camasir-makinesi-kopuk-yapiyor/) yazısına bakabilirsin.

## TEMİZ KAZAN hatırlatıcısı ve "0" mesajı

| Ne | Samsung'a göre |
|---|---|
| TEMİZ KAZAN programı | Her 40 yıkamada bir; kazan boş, deterjansız, çamaşır suyu ve temizlik maddesi olmadan |
| Hatırlatıcı | Her 40 yıkamada bir kontrol panelinde yanıp söner (modele göre simge ya da LED); ilk görüldüğünde arka arkaya 6 yıkama için yok sayılabilir, ikinci 40. yıkamada yeniden görünür |
| "0" mesajı | Son sıkmadan sonra makine kendiliğinden kapanmaz ve "0" kalır; makine TEMİZ KAZAN çalıştırılmadan da normal çalışır, ama temizlik için programın çalıştırılması önerilir |
| Yıkamadan sonra | Kapağı açık bırak, deterjan çekmecesini açık bırakıp içini kurula |

Samsung Türkiye'nin destek sayfasında aynı program **EKO TAMBUR TEMİZLEME** adıyla geçiyor; talimat aynı: tambur boş, deterjan ya da çamaşır suyu yok, her 40 yıkamada bir. Markadan bağımsız anlatım için [çamaşır makinesi kokuyor](/blog/camasir-makinesi-kokuyor/) ve [çamaşır makinesi kireç ve tambur temizliği](/blog/camasir-makinesi-kirec-ve-tambur-temizligi/) yazılarına bakabilirsin.

## Ne zaman servis

Diyafram, deterjan çekmecesi, TEMİZ KAZAN programı ve kurulama kullanıcıya aittir; Samsung'un koku satırında başka bir kullanıcı adımı yok. Kılavuzun tablonun altındaki cümlesi: **sorun devam ederse bir servis merkezine danış**; servis merkezi numarası ürüne takılı etikettedir. Samsung ayrıca bakım ve onarımların yetkili servislerce yapıldığını, yetkili servis dışındaki müdahalelerin garantiyi etkileyebileceğini yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Makinenin içini açmak ya da parça sökmek kullanıcı işi değildir; Samsung bakım ve onarımı yetkili servise bırakıyor. Diğer Samsung konuları için [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Koku tamburdan mı, deterjan çekmecesinden mi geliyor?
2. Diyaframın kıvrımlarında atık, ip ya da kıl var mıydı?
3. TEMİZ KAZAN hatırlatıcısı ya da "0" mesajı yanıyor mu, program en son ne zaman çalıştı?
4. Hangi deterjanı, hangi miktarda kullanıyorsun?
5. Yıkamadan sonra kapak ve çekmece kapalı mı kalıyor?

Bu beşine cevabın varsa servise "makine kokuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
