---
title: "LG çamaşır makinesi kokuyor"
description: "LG çamaşır makinesi küf kokuyorsa LG kılavuzundaki üç sebep: tambur, tahliye hortumu, deterjan çekmecesi. Kazan Temizleme adım adım."
slug: "lg-camasir-makinesi-kokuyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, 29 Eyl belirti damarı). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; PDF md5'leri 28 Eyl yerel kopyalarıyla birebir.
# #88: web araması YALNIZ belgelerin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. ABD LG kaynağı kullanılmadı; hepsi LG Türkiye.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası.
#  A) F4V5RGP2T  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  B) F4V3VYW3WE https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a  (sayfa atıfları esas olarak C)
#  H3) LG TR yardım kütüphanesi 1429178647952 "Körük lastiğindeki lekeler ve kokuları nasıl giderilir?"
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-1429178647952/  md5 26083808ba8ee55aba8c808281f11d01
#  H4) …/cs-CT52000193-20153390174982/ "Kapakta su sızıntısı var"  md5 677cef8656f27cd2978cd8b6a6b7242f  ("Lastik conta yırtılmışsa ... LG servisini talep edin.")
#  H9) …/cs-CT52000193-20153390249257/ "Kapak kapanmıyor (de, dE1, dE2)"  md5 4ad4f2286beb09aeb4550329856dc6d5  ("Kapı contası hasar görmüşse veya ayrılmışsa, LG servisi için bir talep kaydedin.")
#  (Yardım kütüphanesi sayfaları dinamik HTML; md5 bu koşudaki indirmenin md5'idir.)
# "Koku" satırı (C s.50 · A s.58 · B s.48), üç belgede aynı:
#   "Cihazda küflü veya küflü bir koku | Tamburun içi düzgün şekilde temizlenmemiş. • Kazan Temizleme fonksiyonunu düzenli olarak çalıştırın.
#    Boşaltma hortumu düzgün şekilde takılmazsa, sifonlamaya (cihazın içine su akar) neden olan kokular oluşabilir. • Boşaltma hortumunu takarken, kıvrılmadığından veya tıkalı olmadığından emin olun.
#    Deterjan bölmesi düzenli olarak temizlenmezse, küf veya yabancı maddeler nedeniyle koku oluşabilir. • Deterjan bölmesini çıkarın ve özellikle deterjan bölmesi açıklığının üst ve alt kısmını temizleyin."
# Bakım: C s.40 (fişi çek; çamaşırı hemen çıkar, nemli çamaşır kokuya neden olabilir; kapağı ve kapak lastiğini sil; kapağı hafif açık bırak — yalnız çocuklar denetim altındaysa)
#   · C s.41 Kazan Temizleme (ayda bir; koku/küf varsa 3 hafta haftada bir ek; tcL mesajı; ana bölmeye kireç çözücü toz, tablet tambura; bitince kapağı açık bırak, kurumazsa kötü koku/küf)
#   · C s.43 deterjan bölmesi temizliği (ayda bir-iki kez; çekmece duruncaya kadar çek, çıkarma düğmesine basarak çıkar; ılık su, yalnız su; yuva için bez ya da metal olmayan küçük fırça; kurula; tak)
#   · C s.26 "Sertleşen deterjan, tıkanmaya, kötü durulama performansına veya kokuya neden olabilir." · C s.27 "Deterjan bölmesinde 1 günden fazla kumaş yumuşatıcısı bırakmayın."
#   · C s.19 tahliye hortumu yerden en fazla 100 cm; çok uzunsa içeri zorlanmaz · C s.21 çamaşırı alırken kapak lastiğinde küçük nesne kontrolü
#   · H3: "Kullanım sonrası kazan ıslak kalırsa, koku ve leke kalabilir." · kapıyı açık bırak · gasket lastiğini yumuşak havluyla, lekeyi sulandırılmış çamaşır suyu ile sil · çocukları uzak tut.
# BİLEREK YAZILMAYANLAR: kireç çözücü marka/miktar (LG vermiyor, "ambalajındaki" dendi) · sirke/karbonat gibi ev karışımları (belgede yok) · koku için tahliye filtresi (koku satırında yok)
#   · hortum söküm/değişimi · fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika (program süresi hariç)"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez ya da havlu", "Metal olmayan küçük bir fırça", "Kireç çözücü"]
steps:
  - "Makinenin fişini çek ve içinde kalan çamaşırları hemen çıkar."
  - "Kapağın içini ve kapak lastiğini yumuşak bir bezle sil, lastikte kalan küçük nesneleri çıkar."
  - "Kapak lastiğindeki leke ve kalıntıyı sulandırılmış çamaşır suyuyla silerek temizle."
  - "Deterjan çekmecesini çıkarma düğmesine basarak çıkar ve parçalarını ılık suyla yıka."
  - "Çekmece yuvasının üst ve alt kısmını bez ya da metal olmayan küçük bir fırçayla temizle, kurula ve çekmeceyi tak."
  - "Tahliye hortumunun kıvrılmadığını ve tıkalı olmadığını kontrol et."
  - "Fişi tak, tamburu boşalt, ana deterjan bölmesine kireç çözücü koy ve Kazan Temizleme programını çalıştır."
  - "Program bitince kapağı açık bırakarak tamburun içini kurut."
faq:
  - q: "LG çamaşır makinesi neden küf kokuyor?"
    a: "LG'nin Türkçe kullanım kılavuzlarındaki 'Koku' satırı üç sebep sayıyor: tamburun içi düzgün temizlenmemiş, boşaltma hortumu düzgün takılmadığı için sifonlama (cihazın içine su akması) oluşuyor ya da deterjan bölmesi düzenli temizlenmediği için küf veya yabancı maddeler birikmiş. Çözümleri sırasıyla Kazan Temizleme programı, hortumun kıvrılmadığından ve tıkalı olmadığından emin olmak ve deterjan bölmesini çıkarıp açıklığının üst ve alt kısmını temizlemek."
  - q: "Kazan Temizleme programını ne sıklıkla çalıştırmalıyım?"
    a: "LG, deterjan ve yumuşatıcı birikmesini azaltmak için ayda bir (ya da gerekiyorsa daha sık) öneriyor. Makinenin içinde kötü koku ya da küf varsa bu düzenli aralığa ek olarak 3 hafta boyunca haftada bir çalıştırılmasını istiyor. Programı çalıştırma zamanı geldiğinde ekranda tcL mesajı görünür."
  - q: "Yıkamadan sonra kapağı açık bırakmak gerekir mi?"
    a: "LG, yıkama bittikten sonra kapağı ve kapak lastiğini silmeyi ve tamburun kuruması için kapağı hafif açık bırakmayı öneriyor; Kazan Temizleme programından sonra da iç kısım tamamen kurumazsa kötü koku ya da küf oluşabileceğini yazıyor. Uyarısı: kapağı yalnızca çocuklar evde denetim altındaysa açık bırak."
  - q: "Yumuşatıcı bölmesinde kalan yumuşatıcı koku yapar mı?"
    a: "LG, deterjan bölmesinde bir günden fazla kumaş yumuşatıcısı bırakılmamasını, çünkü yumuşatıcının sertleşebileceğini yazıyor. Aynı kılavuza göre sertleşen deterjan da tıkanmaya, kötü durulama performansına ya da kokuya neden olabilir."
images:
  coverAlt: "Kapağı aralık bırakılmış ön yüklemeli çamaşır makinesi; deterjan çekmecesi çıkarılmış, yanında yumuşak bir bez ve küçük bir fırça"
---

Makinenin kapağını açtığında küf kokusu geliyor, ya da temiz çıkan çamaşırlar bile hafif kokuyor. LG'nin Türkçe kullanım kılavuzlarındaki sorun giderme tablosunda bunun ayrı bir başlığı var: **"Cihazda küflü veya küflü bir koku."** LG bu satırda üç sebep sayıyor: **tamburun içi düzgün temizlenmemiş**, **boşaltma hortumu düzgün takılmamış** ya da **deterjan bölmesi düzenli temizlenmemiş.** Üçü de evde halledilebilir; bu yazıda LG'nin kendi bakım talimatıyla adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek, çamaşırı çıkar → kapak lastiğini sil → deterjan çekmecesini çıkar, yuvasının üst ve alt kısmını temizle → tahliye hortumu kıvrık ya da tıkalı mı → Kazan Temizleme programını çalıştır → kapağı açık bırakıp kurut. Koku sürüyorsa LG'nin önerisi: 3 hafta boyunca haftada bir ek Kazan Temizleme.

## Adım adım: evde denenecekler

**1. Fişi çek, çamaşırı çıkar.** LG, cihazı temizlemeden önce **güç kablosunun fişinin çekilmesini** istiyor. İçeride unutulmuş çamaşır varsa hemen çıkar: LG'ye göre makinenin içinde **nemli çamaşır bırakmak** buruşmaya, renk değişimine ya da **kokuya** neden olabilir.

**2. Kapağı ve kapak lastiğini sil.** LG'nin her yıkamadan sonraki bakım önerisi: nemi önlemek için **kapağı ve kapak lastiğini sil.** LG Türkiye'nin destek sayfası da aynı şeyi söylüyor: **kapının iç tarafını** ve lastiği **yumuşak bir havluyla** temizle. Kılavuza göre çamaşırları alırken lastiğin içine kaçmış olabilecek **küçük nesneleri** de kontrol et.

**3. Lastikteki lekeyi temizle.** LG'nin destek sayfasına göre kullanım sonrası kazan ıslak kalırsa **koku ve leke kalabilir.** Lastikteki yabancı madde ya da lekeyi gidermek için lastiği **sulandırılmış çamaşır suyuyla silerek** temizle. LG'nin notu: bu sırada **çocukları uzak tut.**

**4. Deterjan çekmecesini çıkar ve yıka.** Koku satırındaki üçüncü sebep: deterjan bölmesi düzenli temizlenmezse **küf veya yabancı maddeler** nedeniyle koku oluşabilir. LG'nin yordamı: çekmeceyi **duruncaya kadar çek**, sonra **çıkarma düğmesine basarken** hafifçe çıkar. Deterjan ve yumuşatıcı birikintisini gidermek için çekmeceyi ve parçalarını **ılık suyla** yıka; LG çekmece için **yalnızca su** kullanılmasını istiyor.

**5. Çekmece yuvasının üst ve altını temizle.** LG'nin koku satırı özellikle **deterjan bölmesi açıklığının üst ve alt kısmını** işaret ediyor. Yuvayı bir **bezle** ya da girintiler için **küçük, metal olmayan bir fırçayla** temizle; kalıntıların tümünü al. Kalan nemi **kuru bir havlu ya da bezle** sil, parçaları yerine tak ve çekmeceyi yerleştir.

**6. Tahliye hortumuna bak.** LG'ye göre boşaltma hortumu düzgün takılmazsa **sifonlama** (cihazın içine su akması) olur ve bu da kokuya yol açabilir. Hortumun **kıvrılmadığından ve tıkalı olmadığından** emin ol. LG'nin kurulum bölümüne göre hortum çok uzunsa **makinenin içine doğru zorlanmaz.**

**7. Kazan Temizleme programını çalıştır.** Koku satırındaki ilk çözüm: **Kazan Temizleme fonksiyonunu düzenli olarak çalıştır.** LG'nin sırası: fişi tak, cihazdan **tüm kıyafetleri ve nesneleri çıkar** ve kapağı kapat; deterjan çekmecesinin **ana yıkama bölmesine kireç çözücü** (toz) koy (tablet kullanıyorsan doğrudan tambura), çekmeceyi yavaşça kapat; makineyi çalıştır, **Kazan Temizleme** programını seç ve **Başlat/Durdur** ile başlat. Miktar için kireç çözücünün ambalajına bak.

**8. Kapağı açık bırak, içi kurusun.** LG'ye göre program bittikten sonra cihazın içinin **tamamen kuruması için kapağı açık bırak**; iç kısım tamamen kurumazsa **kötü koku ya da küf** oluşabilir. LG'nin uyarısı: kapağı yalnızca **çocuklar evde denetim altındaysa** açık bırak.

## Kokuyu geri getirmemek için

LG'nin önerdiği düzen şu:

| Ne | Ne sıklıkla (LG'ye göre) |
|---|---|
| Kazan Temizleme programı | Ayda bir (gerekiyorsa daha sık); koku ya da küf varsa ek olarak 3 hafta boyunca haftada bir |
| Deterjan çekmecesi ve yuvası | Ayda bir ya da iki kez kontrol |
| Kapak ve kapak lastiğini silmek | Her yıkamadan sonra |
| Çamaşırı makineden çıkarmak | Program biter bitmez |

Programı çalıştırma zamanı geldiğinde LG'nin makinesi ekranda **tcL** mesajı gösteriyor. Deterjan tarafında da iki not var: LG, deterjan bölmesinde **bir günden fazla yumuşatıcı bırakılmamasını** istiyor; ayrıca **sertleşen deterjan** tıkanmaya, kötü durulama performansına ya da kokuya neden olabiliyor. Deterjanı üreticisinin talimatına göre kullan; LG'ye göre fazla deterjan fazla köpük yapar.

Markadan bağımsız anlatım için [çamaşır makinesi kokuyor](/blog/camasir-makinesi-kokuyor/) ve [çamaşır makinesi kireç ve tambur temizliği](/blog/camasir-makinesi-kirec-ve-tambur-temizligi/) yazılarına bakabilirsin.

## Sınır nerede biter

Kapak lastiği, deterjan çekmecesi, hortumun kontrolü ve tambur temizliği kullanıcıya aittir. LG'nin kılavuzu açık: **cihazın üzerindeki panelleri veya cihazın kendisini sökmeye çalışma**; kendi kendine tamir, cihaza daha fazla zarar verebileceği ve garantiyi geçersiz kılabileceği için önerilmez. Kapak lastiği yırtılmış ya da yerinden ayrılmışsa LG Türkiye'nin destek sayfaları LG servisinden kayıt açılmasını öneriyor.

⛔ **Kendin-çöz sınırı burada biter.** Üç haftalık ek Kazan Temizleme döneminden sonra koku sürüyorsa ya da tahliye hortumu kurulumu sorunluysa yetkili LG servisine başvur. Diğer LG konuları için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Koku tamburdan mı, deterjan çekmecesinden mi geliyor?
2. Son Kazan Temizleme programı ne zaman çalıştı?
3. Çekmece yuvasının üst ve alt kısmında birikinti var mıydı?
4. Tahliye hortumu kıvrık ya da makinenin arkasına doğru zorlanmış mı?
5. Makine kullanılmadığında kapağı kapalı mı duruyor?

Bu beşine cevabın varsa servise "makine kokuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
