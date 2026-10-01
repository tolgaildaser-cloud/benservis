---
title: "Arçelik bulaşık makinesi leke bırakıyor"
description: "Arçelik bulaşık makinesi çay lekesi, kireç izi ya da bardakta süt rengi pus bırakıyorsa Arçelik'in çözümü: program, parlatıcı, su sertliği ve tuz."
slug: "arcelik-bulasik-makinesi-leke-birakiyor"
date: "2026-10-01"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Arçelik belirti koşusu). Belgeler 30 Eyl'de download.arcelik.com.tr'den indirildi; K ve K3 bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-buzdolabi-bulasik-sprint/ (bl1=K, bl3=K3)
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext, sayfa = PDF sayfası (K'de basılı no + 2).
#  (K)  6366 / 6366 I  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201703271206470_User%20Manual%20-%20Filetr_TR.pdf  46 s.  md5 e941e0ee68ba8698139fd77c492459a7  (sayfa atıfları K)
#  (K3) 9242 MI  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180312110164_User%20Manual%20-%20Filetr_TR.pdf  42 s.  md5 8d1f4fef3a6a67cb281b8b6be4643d2a  (leke satırları s.34-37, K ile aynı)
#  Aynı dört leke satırı yerel kopyalardaki 6343 (83c5e77d…), 63101 I (7afb5b5c…), 6222 (f6deb1cc…), 6243/6254 (94a3fe2c…) kılavuzlarında da var (30 Eyl, HTTP 200; bu koşuda yeniden indirilmedi).
# Sorun giderme (K s.38-41):
#   "Bulaşıklarda çay, kahve veya ruj lekesi kalıyor." → uygun program değil: daha yüksek sıcaklık + daha uzun süre · yüzey kalitesi bozuk: bozulmuş yüzeye işleyen leke makinede yıkanamaz, tavsiye edilmez
#     · deterjan uygun olmayan koşullarda saklanmış: toz deterjanı nemli yerde saklamayın, ağzı kapaklı kap, tablet önerisi
#   "Bulaşıklarda kireç izi kalıyor ve cam eşyalar puslu bir görünüm alıyor" → parlatıcı yetersiz: göstergeyi kontrol, ilave et, yeterliyse ayarı yükselt · su sertlik ayarı düşük / tuz yetersiz:
#     "Şebeke suyunun sertliğini doğru şekilde ölçerek su sertlik ayarını kontrol edin." · tuz kaçağı: dökmeyin, kapak kapalı, Ön yıkama ile temizleyin, program sonunda kapağı tekrar kontrol
#   "Bulaşıklarda pas lekesi, kararma, yüzey bozulması" → tuz kaçağı · tuzlu yiyecek artığı: ön yıkama ya da bekletmeden yıkama · topraklama hattı · çamaşır suyu · bıçak amaç dışı · düşük kalite çelik · paslı eşya
#   "Cam bardaklarda, elle silindiğinde çıkmayan puslu, süt bulaşığı görünümünde bir leke kalıyor. Işığa tutulduğunda mavimsi / gökkuşağı renkli bir görünüm ortaya çıkıyor." → fazla parlatıcı:
#     ayarı düşürün, taşanı temizleyin · yumuşak su korozyonu: sertliği ölçün, <5 dH ise tuz kullanmayın, 60-65 derece programlar, cam koruyuculu deterjan
# Diğer: K s.13 7°dH üstü yumuşatılmalı, deneme şeridi · K s.14 deneme şeridi a-f, Ayarlar menüsü r1-r5 · K s.15 7°dH altında tuz gerekmez, gösterge sürekli yanar; yalnız bulaşık makinesi tuzu;
#   alt sepeti çıkar, kapağı saat yönünün tersine çevir · K s.16 tuz hunisiyle doldur (kaşıkla karıştırma adımı ALET KURALI → yazılmadı) · K s.18 parlatıcı su/kireç izini önler; mandal, MAX, kapak;
#   tablet kullanırken bardakta kireç lekesi → deterjan üreticisi · K s.19 su izi → ayarı arttır, elle silinince mavi iz → azalt, fabrika 3; dökülen parlatıcıyı sil.
# BİLEREK YAZILMAYANLAR: tuzun kaşıkla karıştırılması (ALET) · tuş sıraları (modele göre; yalnız 6366 örneği) · rejenerasyon ayar anahtarı ayrıntısı · topraklama işi (elektrik → adım değil)
#   · sirke/limon gibi ev yöntemleri (belgede yok) · fiyat (#46).
# Alıntı denetim tablosu: arcelik-bulasik-makinesi-leke-birakiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Bulaşık makinesi tuzu", "Makineyle gelen su sertliği deneme şeridi"]
steps:
  - "Çay, kahve ya da ruj lekesi kalıyorsa daha yüksek sıcaklıkta ve daha uzun süre yıkayan bir program seç."
  - "Toz deterjanı nemli yerde saklama, mümkünse ağzı kapaklı bir kapta tut."
  - "Kireç izi ve puslu camda parlatıcı uyarı göstergesine bak, gerekirse parlatıcı bölmesini MAX seviyesine kadar doldur."
  - "Bölme doluyken bulaşıkta su izi kalıyorsa parlatıcı ayarını yükselt."
  - "Makineyle gelen deneme şeridiyle şebeke suyunun sertliğini ölç ve makinedeki su sertlik ayarını buna göre kontrol et."
  - "Tuz bölmesini yalnız bulaşık makinesi tuzuyla, ağzının etrafına dökmeden doldur ve kapağı kapat."
  - "Tuz döküldüyse Ön Yıkama programını çalıştır ve program sonunda tuz haznesi kapağını yeniden kontrol et."
  - "Bardakta elle silinince çıkmayan, ışıkta gökkuşağı renkli süt rengi bir pus varsa parlatıcı ayarını düşür ve taşan parlatıcıyı sil."
faq:
  - q: "Arçelik bulaşık makinem neden leke bırakıyor?"
    a: "Arçelik'in sorun giderme bölümü lekeyi türüne göre dört ayrı satırda ele alıyor: çay, kahve ya da ruj lekesi; kireç izi ve puslu cam; pas lekesi ve kararma; cam bardakta elle silinince çıkmayan süt bulaşığı görünümlü pus. Çay ve kahve lekesinde program ve deterjanın saklanması, kireç izinde parlatıcı, su sertlik ayarı ve tuz, süt rengi pusta ise fazla parlatıcı ya da yumuşak su öne çıkıyor."
  - q: "Bardaklarımda beyaz kireç izi mi var, yoksa fazla parlatıcı mı? Nasıl ayırt ederim?"
    a: "Arçelik'in 6366 kılavuzu parlatıcı ayarı için bir ölçüt veriyor: yıkamadan sonra yemek takımlarında su izi oluşuyorsa ayar artırılmalı, elle silindiğinde mavi bir iz kalıyorsa azaltılmalı. Sorun giderme listesi de elle silindiğinde çıkmayan, ışığa tutulunca mavimsi ya da gökkuşağı renkli görünen süt rengi pusu fazla parlatıcıya ve yumuşak suya bağlıyor. Kılavuza göre bu ayar fabrikadan 3 konumunda çıkıyor."
  - q: "Suyum yumuşak, yine de tuz koymalı mıyım?"
    a: "Arçelik'e göre kullandığın suyun sertliği 7°dH altındaysa tuz kullanmana gerek yok; bu durumda kontrol panelindeki tuz eksikliği uyarı göstergesi sürekli yanar. Sorun giderme listesi, bardaklarda yumuşak su kaynaklı korozyon görülüyorsa ve şebeke suyu 5 dH'nin altındaysa tuz kullanılmamasını, 60-65 derece gibi daha yüksek sıcaklıkta yıkayan programların ve cam koruyuculu deterjanların tercih edilmesini öneriyor."
  - q: "Tablet deterjan kullanıyorum, bardaklarda yine kireç lekesi var. Ne yapmalıyım?"
    a: "Arçelik'in 6366 kılavuzu bu durumu ayrıca yazıyor: tablet deterjan kullanırken program sonunda bulaşıkların ıslak kalması ya da özellikle bardaklarda kireç lekesi görülmesi hâlinde deterjan üreticisiyle bağlantıya geçilmesini istiyor. Kılavuza göre en iyi yıkama performansı deterjan, parlatıcı ve su yumuşatma tuzunun ayrı ayrı kullanılmasıyla elde ediliyor."
images:
  coverAlt: "Bulaşık makinesinin üst sepetinden çıkarılmış, ışığa tutulmuş cam bardakta beyaz puslu iz; yanında bir fincanın içinde kalmış çay lekesi"
---

Program bitti, bulaşıklar temiz görünüyor ama fincanın dibinde çay halkası, bardaklarda beyaz bir iz ya da elle silince gitmeyen süt rengi bir pus var. Arçelik'in bulaşık makinesi kullanma kılavuzlarındaki sorun giderme bölümü "leke"yi tek satırda toplamıyor; **lekenin türüne göre dört ayrı satır** açıyor: **"Bulaşıklarda çay, kahve veya ruj lekesi kalıyor."**, **"Bulaşıklarda kireç izi kalıyor ve cam eşyalar puslu bir görünüm alıyor"**, **"Bulaşıklarda pas lekesi, kararma, yüzey bozulması"** ve bardaklarda **elle silindiğinde çıkmayan, süt bulaşığı görünümünde** leke. Aynı dört satır Arçelik'in 6366 ve 9242 MI kılavuzlarında birebir yer alıyor. Önce lekenin hangisi olduğunu bul, sonra o satırın çözümünü uygula.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çay ve kahve lekesi → daha sıcak ve uzun program, kuru saklanan deterjan. Kireç izi ve puslu cam → parlatıcı, su sertlik ayarı, tuz ve tuz haznesi kapağı. Elle çıkmayan süt rengi pus → parlatıcı ayarını düşür; su çok yumuşaksa tuzu kes. Pas ve kararma → tuz kaçağı, bekleyen tuzlu artık, çamaşır suyu.

## Adım adım: evde denenecekler

**1. Çay ve kahve lekesinde programı güçlendir.** Arçelik'in çay, kahve ve ruj lekesi satırındaki ilk neden: **uygun program seçilmemiş.** Çözüm: **daha yüksek sıcaklıkta ve daha uzun süre** yıkama yapan bir program seç. Kendi makinendeki programların sıcaklık ve sürelerini kılavuzunun program tablosunda bulabilirsin.

**2. Deterjanı kuru sakla.** Aynı satırdaki bir başka neden: **deterjan uygun olmayan koşullarda saklanmış.** Arçelik'in çözümü: toz deterjan kullanıyorsan paketi **nemli yerlerde saklama**, mümkünse **ağzı kapaklı** bir saklama kabında tut. Arçelik saklama kolaylığı için **tablet deterjanı** öneriyor.

**3. Kireç izinde parlatıcıya bak.** Kireç izi ve puslu cam satırındaki ilk neden: **parlatıcı yetersiz.** Arçelik'e göre parlatıcı, yıkanan parçaların üzerinde **su ya da kireç izi kalmasını önlemek** için kullanılan özel bir bileşim. **Parlatıcı eksikliği uyarı göstergesini** kontrol et; gerekiyorsa parlatıcı kapağını **mandal yardımıyla** aç, bölmeyi **MAX seviyesine** kadar doldur ve kapağı kapat. Yalnız bulaşık makineleri için üretilmiş parlatıcı kullan.

**4. Gerekirse parlatıcı ayarını yükselt.** Arçelik'in aynı satırdaki ikinci önerisi: makinede **yeterince parlatıcı varsa parlatıcı ayarını yükselt.** 6366 kılavuzunun ölçütü: yıkamadan sonra yemek takımlarında **su izi** oluşuyorsa ayar **artırılır.** Kılavuza göre bu ayar fabrikadan **3 konumunda** çıkıyor; ayarın nasıl yapıldığı kılavuzunun "Parlatıcı miktarının ayarlanması" başlığında.

**5. Su sertliğini ölç, ayarı kontrol et.** Tablodaki neden: **su sertlik ayarı düşük veya tuz seviyesi yetersiz.** Arçelik'in çözümü: **şebeke suyunun sertliğini doğru şekilde ölçerek** su sertlik ayarını kontrol et. 6366 kılavuzuna göre ölçüm **makineyle birlikte verilen deneme şeridiyle** yapılıyor: şeridi ambalajından çıkar, musluktan **1 dakika** su akıt, şeridi **1 saniye** suya batır, çıkarıp salla, **1 dakika** bekle ve şeride göre ayarı yap. 6366'da ayar "Ayarlar" menüsünden **r1-r5** seviyeleriyle giriliyor; kendi modelinin tuş sırası kılavuzunda. Arçelik'e göre şebeke suyu **7°dH üstündeyse** yumuşatılmalı; aksi hâlde sertlik iyonları yıkanan gereçlerin üzerinde **birikir.**

**6. Tuzu doğru doldur.** Su sertliğin tuz gerektiriyorsa Arçelik'in kuralları: yalnız **bulaşık makinesinde kullanılmak için üretilmiş** yumuşatma tuzu kullan; sofra tuzu ya da kaya tuzu kullanma. Tuzu koymak için **alt sepeti çıkar**, tuz bölmesinin kapağını **saat yönünün tersine** çevirerek aç ve bölmeyi **tuz hunisi** yardımıyla doldur. Doldururken tuzu **dolum ağzının etrafına dökme** ve iş bitince **tuz haznesi kapağının kapandığından** emin ol.

**7. Dökülen tuzu Ön Yıkama ile al.** Tablodaki bir başka neden: **tuz kaçağı.** Arçelik'in çözümü: **Ön yıkama programını çalıştırarak** makinenin içine dökülen tuzları temizle. Kılavuzun uyarısı: kapak altında kalan tuz taneleri ön yıkama adımında çözüneceği için kapak **gevşeyebilir**; program sonunda kapağı **bir kez daha kontrol et.**

**8. Süt rengi pusta parlatıcıyı azalt.** Arçelik'in ayrı bir satırı: cam bardaklarda **elle silindiğinde çıkmayan, puslu, süt bulaşığı görünümünde** bir leke kalıyor ve bardak ışığa tutulduğunda **mavimsi ya da gökkuşağı renkli** görünüyor. İlk neden: **fazla parlatıcı kullanılmış.** Çözüm: **parlatıcı ayarını düşür** ve parlatıcı doldururken **etrafa taşanı mutlaka temizle.** 6366 kılavuzunun ölçütü de aynı yönde: elle silindiğinde **mavi bir iz** kalıyorsa ayar **azaltılır.**

## Su çok yumuşaksa

Süt rengi pus satırının ikinci nedeni: **yumuşak su nedeniyle camda korozyon.** Arçelik'in çözümü: şebeke suyunun sertliğini ölçerek ayarı kontrol et; suyun yumuşaksa (**5 dH altı**) **tuz kullanma**; **60-65 derece** gibi daha yüksek sıcaklıkta yıkayan programlar seç; piyasadaki **cam koruyuculu deterjanları** da kullanabilirsin. Kılavuza göre suyun sertliği **7°dH altındaysa** tuza gerek yok ve bu durumda tuz eksikliği uyarı göstergesi **sürekli yanar.**

## Pas lekesi ve kararma

Arçelik'in pas, kararma ve yüzey bozulması satırı başka nedenler sayıyor. **Tuz kaçağı** metal yüzeylerde bozulmaya ve paslanmaya yol açabilir; yukarıdaki 6. ve 7. adım burada da geçerli. **Tuzlu yiyecek artıkları** uzun süre bulaşıkta kalmışsa Arçelik, çatal-kaşık makinede bekleyecekse **ön yıkama** yapılmasını ya da bulaşıkların **bekletilmeden** yıkanmasını istiyor. **Çamaşır suyu** gibi yoğun temizleyiciler metal yüzeylerdeki koruyucu tabakaya zarar veriyor; Arçelik bulaşıkların **çamaşır suyuyla yıkanmamasını** istiyor. Kılavuza göre **düşük kaliteli paslanmaz çelikten** üretilmiş çatal-bıçaklar ve **daha önce paslanmış** eşyalar bulaşık makinesinde yıkanmamalı; paslı bir eşyadaki pas diğer yüzeylere de geçebiliyor. Aynı satır makinenin **gerçek toprak hattına** bağlı olup olmadığının kontrol edilmesini de istiyor; elektrik tesisatına dokunan bu kontrolü kendin yapma, yetkili servise bırak.

## Tablet kullanıyorsan

Arçelik'in 6366 kılavuzu tablet deterjan için ayrı bir not düşüyor: program sonunda bulaşıklar ıslaksa ya da özellikle **bardaklarda kireç lekesi** görüyorsan **deterjan üreticisiyle** bağlantıya geç. Kılavuza göre en iyi yıkama performansı **deterjan, parlatıcı ve su yumuşatma tuzunun ayrı ayrı** kullanılmasıyla elde ediliyor. Çay, kahve ve diğer boyalı lekeler **yüzeyi bozulmuş** mutfak eşyalarına işlemişse Arçelik'e göre bulaşık makinesinde çıkmıyor ve bu tür eşyaların makinede yıkanması tavsiye edilmiyor.

Bulaşıklarda leke değil de yemek kalıntısı kalıyorsa [Arçelik bulaşık makinesi temiz yıkamıyor](/blog/arcelik-bulasik-makinesi-temiz-yikamiyor/) rehberine geç. Paneldeki tuz ve parlatıcı göstergeleri için [Arçelik bulaşık makinesi sembolleri ve anlamları](/blog/arcelik-bulasik-makinesi-sembolleri-ve-anlamlari/), markadan bağımsız anlatım için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) ve [bulaşık makinesi bardakları bulanık bırakıyor](/blog/bulasik-makinesi-bardaklari-bulanik-birakiyor/) yazılarına bakabilirsin.

## Ne zaman servis

Program, deterjan, parlatıcı, su sertlik ayarı ve tuz doğru, tuz haznesi kapağı sıkı ve lekeler sürüyorsa Arçelik'in bu satırlarda kullanıcıya verdiği liste bitmiş demektir. Kılavuzun tüketici hizmetleri bölümüne göre ürününle ilgili hizmet talebin olduğunda Arçelik Çağrı Merkezi'ne başvurursun; yetkili servislerin güncel iletişim bilgileri arcelik.com.tr'de. Ekranda bir hata kodu görüyorsan önce [Arçelik bulaşık makinesi hata kodları](/blog/arcelik-bulasik-makinesi-hata-kodlari/) sayfasına bak.

⛔ **Kendin-çöz sınırı burada biter.** Program seçimi, deterjan, parlatıcı, su sertlik ayarı ve tuz kullanıcıya; elektrik tesisatı ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Leke ne türde: çay-kahve halkası, beyaz kireç izi, süt rengi pus, pas?
2. Toz deterjan mı, tablet mi kullanıyorsun?
3. Parlatıcı ayarı kaçta, bölme dolu mu?
4. Şebeke suyunun sertliği ölçüldü mü, makinedeki su sertlik ayarı kaç?
5. Tuz eksikliği göstergesi yanıyor mu, tuz haznesi kapağı sıkı mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
