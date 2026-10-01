---
title: "Profilo bulaşık makinesi leke bırakıyor"
description: "Profilo bulaşık makinesi beyaz tortu, renkli tabaka, pas ya da su lekesi bırakıyorsa Profilo'nun leke türüne göre sırası: sertlik, tuz, deterjan, temizlik."
slug: "profilo-bulasik-makinesi-leke-birakiyor"
date: "2026-10-01"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Profilo+Siemens belirti koşusu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, HTTP 200;
#   md5 30 Eyl'de indirilen yerel kopyayla birebir aynı. Belge adresi Profilo'nun kendi ürün sayfasından (www.profilo.com/tr/tr/product/beyaz-esya/bulasik-makineleri/BM6380MA) alınmıştı.
#   profilo.com.tr Profilo/BSH sitesi değil, kullanılmadı. #88: web araması kullanılmadı; forum/servis sitesi/üçüncü taraf yok.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-profilo-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (C) Profilo BM6380MA kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001951966_E.pdf  52 s.  md5 2e7b3ee8867b8a5fe2e9a021a73228f8
# YAKIN KOPYA KAPISI: yayındaki bosch-bulasik-makinesi-leke-birakiyor okundu. O sayfa eski Bosch belgesine (9001220403_D) dayanıyor, ağırlığı cam izleri + kalıcı cam bulanıklığında;
#   pas lekesi ve renkli tabakaları bilerek dışarıda bırakmış. Bu sayfa Profilo'nun farklı satırlarını öne çıkarır: leke türüne göre ayrım, renkli (mavi/sarı/kahverengi) tabakalar,
#   sabunumsu tabaka, pas, plastikte renk alma; cam izi ve bulanıklık kısa tutuldu. Giriş, sıra, SSS farklı kuruldu.
# Arıza tablosu satırları (C s.42-45):
#   s.42 "Plastik parçalar üzerinde su lekeleri var." → "Plastik yüzeyler üzerinde damla oluşması fiziksel açıdan kaçınılmazdır." → daha güçlü program · yanlamasına yerleştir · parlatıcı kullan · su sertliğini giderme sistemini daha yüksek ayarla
#   s.42-43 "Cihazın iç kısmında veya kapı üzerinde silinebilen veya suda çözünebilen tortular var." → deterjan maddeleri çöküp birikiyor ("genellikle kimyasal yollar ile giderilemez") → deterjanı değiştir, cihazı mekanik olarak temizle
#     · "Cihazın iç kısmında beyaz tortu birikiyor." → "1. Su sertliğini giderme sistemini doğru ayarlayınız. Genelde ayarı yükseltmeniz gerekir. 2. Gerekirse deterjanı değiştiriniz." · "Özel tuz kabı kapalı değil." → kapat
#   s.43 "Bulaşıklar üzerinde, cihazın iç kısmında veya kapı üzerinde zor temizlenen, beyaz tortular var." → deterjan çökmesi · sertlik aralığı yanlış/su çok sert → ayarla veya özel tuz ilave et
#     · "3'ü 1 arada deterjan, biyo deterjan veya eko deterjan yeterince etkili değil." → sertliği ayarla, ayrı maddeler (marka deterjan, özel tuz, parlatıcı) · dozaj yetersiz → yükselt/değiştir · daha güçlü program
#   s.43-44 "renkli (mavi, sarı, kahverengi), inatçı veya giderilemeyen tortular" → sebze içerik maddeleri (lahana, kereviz, patates, makarna) veya musluk suyu (mangan); gümüş/alüminyum bulaşıktaki metal içeren maddeler
#     → "Cihazı temizleyiniz." mekanik temizlik (s.34) veya makine temizlik maddesi; "Tortular, her zaman tamamen giderilmeyebilir, ancak sağlık için zararlı değildir."
#   s.44 "(öncelikle taban kısmında) renkli (sarı, turuncu, kahverengi) ve kolay giderilebilen tortular" → yemek artıkları + kireç → "sabunumsu" tabaka → 1. sertlik ayarını kontrol 2. özel tuz doldur 3. kombine deterjanda (tablet) su sertliğini giderme sistemini etkinleştir
#   s.44 iç plastik parçalarda renk alma → "meydana gelebilir ve cihazın fonksiyonunu olumsuz etkilemez" · "Plastik parçalarda renk alma" → yıkama sıcaklığı çok düşük → daha yüksek ısılı program
#   s.44 cam/çatal bıçakta giderilebilen izler → parlatıcı çok yüksek → daha düşük kademe · parlatıcı doldurulmamış → doldur · durulamada deterjan artığı (kapak bloke) → tablet kabını engelleme, tablet kabına bulaşık/koku verici koyma
#   s.45 "Bardaklarda geri döndürülemez bulanıklaşma." → dayanıklı bardak · uzun buhar aşaması (durma süresi) önle · daha düşük sıcaklıklı program · sertlik ayarı · cam koruma bileşenli deterjan
#   s.45 "Çatal bıçak üzerinde pas lekeleri var." → paslanmaya dayanıksız ("Bıçak ağızları çok kez daha fazla etkilenir.") → dayanıklı çatal bıçak · paslanan parçaları yıkama · tuz oranı çok yüksek → "1. Dökülen özel tuzu, yıkama kabından temizleyiniz. 2. Özel tuz kabının kapağını sıkıca kapatınız."
# Diğer: s.22 "Sert, kireç içeren su, bulaşıklarda ve yıkama kabı üzerinde kireç artıkları bırakır" · sertliği yerel su işleri kurumundan ya da test cihazıyla öğren · tablo H:00-H:07 (s.22-23) · 7 °dH üstü sertlik giderilmeli
#   · s.23 0-6 °dH'de tuz gerekmez · tuzu programı başlatmadan hemen önce doldur (taşan tuz yıkama kabına korozyonla hasar verebilir) · tuz tableti/sofra tuzu kullanma · kaba yalnız özel tuz · s.24 kapağı takıp kapat
#   · s.25 parlatıcı ile "leke kalmayacak ve parlak" · s.26 izde düşük kademe, su lekesinde yüksek kademe; fabrika r:05 · s.26 en iyi sonuç için kombinasyonsuz deterjana ek özel tuz ve parlatıcı
#   · s.27-28 kombine deterjan genelde 21 °dH'ye kadar; 14 °dH'den itibaren tuz ve parlatıcı önerisi · biyo/eko etkisi sınırlı olabilir · s.29 süsleme, alüminyum, gümüş solabilir/renk verebilir; hassas cam bulanıklaşabilir
#   · s.30 su sıcaklığı çok yüksek → daha düşük program; bardak ve çatal bıçağı program bitince kısa sürede çıkar · s.34 yıkama kabının temizlenmesi (nemli bez, deterjan, en yüksek sıcaklıklı program, boş makine; klorlu deterjan asla)
#   · s.37 uzman personel uyarısı · s.50 E-Nr./FD tip plaketinde, plaket cihaz kapağının iç tarafında.
# BİLEREK YAZILMAYANLAR: sirke/limon tuzu gibi ev yöntemleri (belgede yok) · sertlik giderme ünitesi/reçine arızası teşhisi (belgede yok) · tuş sembolleri (metin katmanında okunmuyor; "kılavuzundaki bölüm" denerek geçildi)
#   · BMS623V5 (9002038110_A) belgesi bu sayfada kullanılmadı · makine temizlik maddesi marka/ürün önerisi yok.
# Alıntı denetim tablosu: profilo-bulasik-makinesi-leke-birakiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi özel tuzu", "Bulaşık makinesi parlatıcısı", "Nemli bir bez"]
steps:
  - "Lekenin türüne bak: beyaz tortu mu, renkli tabaka mı, pas mı, plastikte su damlası mı, camda iz mi?"
  - "Musluk suyunun sertliğini öğren ve su sertliği ayarını kılavuzdaki tabloya göre yap; beyaz tortuda ayarı genelde yükselt."
  - "Programı başlatmadan hemen önce özel tuz doldur, dökülen tuzu yıkama kabından sil ve tuz kabının kapağını sıkıca kapat."
  - "Paslanan çatal bıçakları makinede yıkamayı bırak; paslanmaya dayanıklı çatal bıçak kullan."
  - "Renkli tabakada iç bölümü nemli bezle sil, deterjan koyup en yüksek sıcaklıklı programı makine boşken çalıştır."
  - "Plastiklerdeki su lekesi için plastik parçaları yanlamasına yerleştir ve daha güçlü bir program seç."
  - "Hepsi bir arada tablet ya da biyo/eko deterjan yetmiyorsa deterjan, özel tuz ve parlatıcıyı ayrı ayrı kullan."
  - "Cam ve çatal bıçakta silinebilen iz varsa parlatıcı kabını kontrol et ve parlatıcı ayarını daha düşük bir kademeye al."
faq:
  - q: "Profilo bulaşık makinesi bulaşıklarda beyaz tortu bırakıyor, neden?"
    a: "Profilo'nun kullanım kılavuzundaki arıza tablosu zor temizlenen beyaz tortular için şunları sayıyor: deterjanın içerdiği maddelerin çöküp birikmesi, su sertliği ayarının yanlış olması ya da suyun çok sert olması, 3'ü 1 arada, biyo veya eko deterjanın yeterince etkili olmaması, deterjan dozajının yetersiz olması ve yeterince güçlü bir program seçilmemesi. Makinenin iç kısmında beyaz tortu biriktiğinde Profilo'nun ilk önerisi su sertliği ayarını doğru yapmak; tabloya göre çoğu zaman ayarın yükseltilmesi gerekiyor."
  - q: "Makinenin içinde ve tencerelerde mavi, sarı ya da kahverengi lekeler oluştu. Zararlı mı?"
    a: "Profilo'ya göre hayır. Tablo bu renkli tabakaların lahana, kereviz, patates, makarna gibi sebzelerin içerik maddelerinden, musluk suyundaki mangandan ya da gümüş veya alüminyum bulaşıktaki metal içeren maddelerden oluşabileceğini yazıyor. Çözüm cihazı temizlemek: mekanik temizlik ya da makine temizlik maddesi. Profilo bu tortuların her zaman tamamen giderilemeyebileceğini ama sağlık için zararlı olmadığını belirtiyor."
  - q: "Çatal bıçaklarda pas lekesi çıkıyor, makine mi paslandırıyor?"
    a: "Profilo'nun tablosu üç neden sayıyor: çatal bıçaklar paslanmaya karşı yeterince dayanıklı değil (en çok bıçak ağızları etkileniyor), paslanan parçalar diğerleriyle birlikte yıkanıyor ya da yıkama suyundaki tuz oranı çok yüksek. Önerileri: paslanmaya dayanıklı çatal bıçak kullanmak, paslanan parçaları makinede yıkamamak, yıkama kabına dökülen özel tuzu temizlemek ve tuz kabının kapağını sıkıca kapatmak."
  - q: "Makinenin içindeki plastik parçalar renk değiştirdi. Arıza mı?"
    a: "Profilo'ya göre iç kısımdaki plastik parçalar makinenin ömrü boyunca renk alabilir ya da renkleri değişebilir; bu durum cihazın fonksiyonunu olumsuz etkilemez. Plastik bulaşıklarda renk alma için ise tablo yıkama sıcaklığının çok düşük olabileceğini yazıyor ve daha yüksek sıcaklıklı bir program seçmeyi öneriyor."
images:
  coverAlt: "Bulaşık makinesinin açık kapağı önünde, ağız kısmında pas noktaları olan bıçaklar ve iç yüzeyinde renkli bir tabaka bulunan paslanmaz çelik bir tencere"
---

Bulaşıklar makineden temiz çıkıyor ama üzerlerinde bir şey kalıyor: beyaz bir tortu, tencerenin içinde sarımsı ya da mavimsi bir tabaka, bıçağın ağzında pas noktaları, plastik kaplarda damla izleri. Profilo'nun bulaşık makinesi kullanım kılavuzundaki arıza tablosu bunları tek satırda toplamıyor; **lekenin rengine ve yerine göre ayrı satırlarda** ele alıyor ve her birine ayrı bir neden veriyor. Bu yüzden ilk iş lekeyi tanımak. Bu yazıda Profilo'nun tablosunu leke türüne göre açıyoruz. Kaynak, Profilo'nun BM6380MA modeli için yayımladığı kullanım kılavuzu; tuş ve ayar adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Beyaz tortu → su sertliği ayarı, özel tuz, gerekirse ayrı deterjan. Renkli (mavi, sarı, kahverengi) tabaka → sebze, mangan ya da metal kaynaklı; cihazı temizle, Profilo'ya göre sağlığa zararlı değil. Pas → dayanıksız çatal bıçak, paslı parça ya da dökülen tuz. Plastikte damla → daha güçlü program, yanlamasına yerleştirme, parlatıcı. Camda silinebilen iz → parlatıcı ayarı.

## Adım adım: evde denenecekler

**1. Lekeyi tanı.** Profilo'nun tablosunda bu şikâyetlerin her biri ayrı bir satır: **beyaz tortular**, **renkli (mavi, sarı, kahverengi) tortular**, **çatal bıçak üzerinde pas lekeleri**, **plastik parçalar üzerinde su lekeleri** ve **cam bardaklarda giderilebilen izler.** Lekeli bir parçayı ışığa tut ve rengine bak; aşağıdaki adımlardan hangisinin seni ilgilendirdiğini buna göre seç.

**2. Su sertliği ayarını suya göre yap.** Profilo'ya göre sert, kireç içeren su **bulaşıklarda ve yıkama kabında kireç artıkları** bırakır. Makinenin iç kısmında beyaz tortu birikiyorsa tablonun ilk önerisi **su sertliğini giderme sistemini doğru ayarlamak;** Profilo'nun notu: **genelde ayarı yükseltmen gerekir.** Musluk suyunun sertliğini **yerel su işleri kurumundan** ya da bir **su sertliği test cihazıyla** öğrenebilirsin. Kılavuzdaki tabloda ayar değerleri **H:00 ile H:07** arasında; 0-6 °dH'de H:00, 31-50 °dH'de H:07. Ayarı kılavuzundaki "Su sertliğini giderme sisteminin ayarlanması" bölümündeki tuşlarla yap.

**3. Özel tuzu doğru doldur.** Profilo'nun tablosunda tuz iki ayrı leke satırında geçiyor: **özel tuz kabı kapalı değilse** iç kısımda tortu, **yıkama suyundaki tuz oranı çok yüksekse** çatal bıçakta pas. Profilo'nun sırası: özel tuz ilave etme göstergesi yandığında tuzu **programı başlatmadan hemen önce** doldur; böylece taşan tuz yıkama kabından temizlenir. **Dökülen özel tuzu yıkama kabından temizle** ve **tuz kabının kapağını sıkıca kapat.** Kaba **yalnız bulaşık makineleri için özel tuz** koy; **tuz tableti ve sofra tuzu kullanma.** Su sertliğin 0-6 °dH ise Profilo'ya göre tuza gerek yok.

**4. Paslanan parçaları ayır.** Çatal bıçaktaki pas için Profilo'nun ilk nedeni: **çatal bıçaklar paslanmaya karşı yeterince dayanıklı değil;** tabloya göre **bıçak ağızları** daha çok etkileniyor. Çözüm **paslanmaya dayanıklı çatal bıçak** kullanmak. İkinci neden: **paslanan parçalar birlikte yıkandığında bulaşıklar da paslanır.** Profilo'nun önerisi açık: **paslanan parçaları makinede yıkama.**

**5. Renkli tabakada iç bölümü temizle.** Makinenin içinde ya da paslanmaz çelik bulaşıkta **mavi, sarı veya kahverengi**, inatçı bir tabaka varsa Profilo'nun saydığı kaynaklar: **lahana, kereviz, patates, makarna gibi sebzelerin içerik maddeleri** ya da **musluk suyundaki mangan;** ayrıca **gümüş veya alüminyum bulaşıktaki metal içeren maddeler.** Profilo'nun çözümü **cihazı temizlemek:** mekanik temizlik ya da makine temizlik maddesi. Kılavuzdaki yıkama kabı temizliği şöyle: iç bölümdeki kaba kirleri **nemli bir bezle** temizle, deterjan bölmesine deterjan koy, **en yüksek sıcaklıklı programı** seç ve **makine boşken** başlat. Profilo'nun uyarısı: **klorlu deterjan asla kullanma.**

**6. Plastiklerde güçlü program ve yanlamasına yerleştirme.** Profilo'ya göre plastik yüzeylerde **damla oluşması fiziksel açıdan kaçınılmaz;** kurutmadan sonra su lekeleri görünebilir. Tablodaki öneriler: **daha güçlü bir program** seç, bulaşıkları **yanlamasına** yerleştir, **parlatıcı** kullan ve su sertliğini giderme sistemini **daha yüksek** ayarla. Kaplar, içinde su birikmemesi için **girinti kısmı aşağı bakacak** şekilde konur.

**7. Gerekirse ürünleri ayır.** Zor çıkan beyaz tortuda Profilo'nun saydığı bir neden: **3'ü 1 arada deterjan, biyo deterjan veya eko deterjan yeterince etkili değil.** Önerisi: su sertliği ayarını yap ve **ayrı maddeler** kullan: **marka deterjan, özel tuz, parlatıcı.** Profilo'ya göre kombine deterjanlar genelde **21 °dH'ye kadar** etki ediyor; bunun üzerinde özel tuz ve parlatıcı eklenmeli. Deterjan dozajı yetersizse tablo **dozajı yükseltmeyi ya da deterjanı değiştirmeyi** öneriyor. Taban kısmında **sarı, turuncu ya da kahverengi**, kolay silinen **"sabunumsu" bir tabaka** varsa Profilo'nun sırası: sertlik ayarını kontrol et, özel tuz doldur ve **tablet kullanıyorsan su sertliğini giderme sistemini etkinleştir.**

**8. Camdaki izde parlatıcıyı düşür.** Cam bardak ve çatal bıçakta **silinebilen izler** için Profilo'nun ilk nedeni: **parlatıcı ilave etme miktarı çok yüksek ayarlanmış;** çözüm daha düşük bir kademe. Parlatıcı hiç yoksa önce **doldur.** Profilo'nun kuralı: izde **düşük kademe**, su lekesinde **yüksek kademe;** fabrika ayarı **r:05.** Aynı satırda bir neden daha var: deterjan bölmesinin kapağı bulaşık yüzünden tam açılmazsa durulamada deterjan artığı kalıyor; tablet tutma kabını engelleme, içine **bulaşık ya da koku verici koyma.**

## Arıza olmayan iki durum

**İç plastik parçaların rengi değişiyor.** Profilo'ya göre makinenin iç kısmındaki plastik parçalar **ömrü boyunca renk alabilir;** bu, cihazın fonksiyonunu **olumsuz etkilemez.** Plastik bulaşıklar renk alıyorsa tablo yıkama sıcaklığının çok düşük olabileceğini yazıyor; **daha yüksek sıcaklıklı** bir program seç.

**Renkli tabaka tamamen gitmiyor.** Profilo'nun notu: mavi, sarı ya da kahverengi tortular **her zaman tamamen giderilemeyebilir, ancak sağlık için zararlı değildir.**

## Silinmeyen buğu

Bardakta silince geçmeyen bir bulanıklık varsa Profilo'nun tablosu bunu **geri döndürülemez bulanıklaşma** olarak ayırıyor: bardak bulaşık makinesinde yıkanmaya **dayanıklı değil**, yalnız uygun. Profilo'nun önerileri: dayanıklı bardak kullan, yıkama bittikten sonra **uzun buhar aşamasından** (durma süresi) kaçın, **sıcaklığı daha düşük** bir program kullan, su sertliği ayarını suya göre yap ve **cam koruma bileşenli** deterjan seç. Profilo'nun bulaşık bölümüne göre bardak ve çatal bıçakları program bittikten **kısa süre sonra** çıkarmak da öneriler arasında. Beyaz film ile kalıcı matlaşmanın farkını markadan bağımsız olarak [bulaşık makinesi bardakları bulanık bırakıyor](/blog/bulasik-makinesi-bardaklari-bulanik-birakiyor/) yazısında anlattık.

Tuz ve parlatıcı ayarının genel anlatımı [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında. Bulaşıkta leke değil yemek artığı kalıyorsa [Profilo bulaşık makinesi temiz yıkamıyor](/blog/profilo-bulasik-makinesi-temiz-yikamiyor/), bulaşıklar ıslak çıkıyorsa [Profilo bulaşık makinesi kurutmuyor](/blog/profilo-bulasik-makinesi-kurutmuyor/) rehberine geç.

## Ne zaman servis

Su sertliği ayarı suya göre yapılmış, tuz ve parlatıcı dolu, tuz kabının kapağı sıkı, deterjan uygun ve yıkama kabı temizlenmiş hâlde lekeler sürüyorsa müşteri hizmetlerine başvur. Profilo da arıza giderme bölümünde önce tablodaki bilgilerden yararlanmayı, sonra müşteri hizmetlerine başvurmayı öneriyor. Profilo'nun uyarısı açık: **usulüne uygun olmayan onarımlar tehlikelidir; cihazda onarımları sadece bunun eğitimini almış uzman personel yapabilir.** Ararken cihaz kapağının iç tarafındaki tip plaketinde yazan **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Ayar, tuz, parlatıcı, deterjan ve iç temizlik kullanıcıya; su sertliğini giderme sisteminin ve makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Leke ne renk: beyaz, mavi-sarı-kahverengi, pas mı?
2. Leke nerede: camda, plastikte, çatal bıçakta, makinenin içinde mi?
3. Su sertliği ayarı hangi değerde, suyun sertliğini biliyor musun?
4. Tablet mi, ayrı deterjan mı kullanıyorsun; tuz ve parlatıcı dolu mu?
5. Leke siliyince çıkıyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
