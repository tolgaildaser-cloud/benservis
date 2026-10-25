---
title: "Gree klima ısıtma modu nasıl açılır?"
description: "Gree klimada ısıtma: MODE ile HEAT, 16–30 °C ayar, birkaç dakikalık hava gecikmesi, TURBO ve 8 °C ısıtma. Fairy ve Airy kullanıcı kılavuzlarından."
slug: "gree-klima-isitma-modu"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork D). origin/main'de Gree sayfası yok (slug + başlık grep'i "gree" 0 sonuç).
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "gree klima ısıtma" → 1. gree klima ısıtma modu · 2. …ısıtma ayarı · 3. …ısıtma sorunu
#   · 4. gree klima ısıtma · 5. …ısıtma işareti. "gree klima sıcak" → 1. gree klima sıcak modu · 2. …sıcak ayarı · 3. …sıcak üflemiyor.
# GSC (https___www-6 7 gün, https___www-5 3 ay): Gree sorgusu yok.
# Belgeler (bu koşuda curl -sL -A "Mozilla/5.0", ikisi de HTTP 200 application/pdf). Bağlantılar Gree'nin Türkiye sitesi gree.com.tr'deki ürün sayfalarından
#   (…/urun/gree-fairy-a-12-000-btu-duvar-tipi-inverter-klima-siyah-18 ve …/urun/airy-12000-btu-h) alındı; dosyalar tlcklima.com sunucusunda
#   (gree.com.tr'nin kendi bağlantı verdiği Gree Türkiye distribütörü). ⚠️ #88 notu KAYNAK.md'de: belge Gree'nin kullanıcı kılavuzu, barındıran alan adı distribütör.
#  (F) Gree Fairy split klima kullanıcı kılavuzu TR, GWH07–24ACC/ACD/ACE serisi, 46 s.  https://tlcklima.com/wp-content/uploads/2024/08/Fairy-Split-Klima-Kullanici-Kilavuzu_TR.pdf  md5 d75d5ac0eda417f153ff25c6740a8379
#  (A) Gree Airy split klima kullanıcı kılavuzu TR, GWH09–24AV…, 32 s.  https://tlcklima.com/wp-content/uploads/2024/08/Airy-Split-Klima-Kullanici-Kilavuzu_TR.pdf  md5 c268a4a1e9c2d6b9816b6f7f0c8d33da
# Sayfalar: F s.9 çalışma aralığı · F s.11 tuş ve simge listesi · F s.12 MODE sırası · F s.13 ısıtma modu, gösterge, 16–30 °C, yalnız soğutma, TURBO · F s.19 8 °C ısıtma
#   · F s.20 kullanım sırası · F s.22 filtre · F s.24 iç üniteden hava gelmiyor · F s.25 3 dk, ısıtma etkisi iyi değil · F s.27 kodlar + servis uyarısı
#   · A s.18 ısıtma modu, 1~5 gecikme notu, 16–30 °C / bazı modellerde ısıtmada 8–30 °C.
# BİLEREK YAZILMAYANLAR: gecikmenin birimi (kılavuz "1~5 gecikme" diyor, birim yok; yazıda F s.24'ün "birkaç dakika" ifadesi kullanıldı) · simge çizimleri
#   (metin katmanında yok) · hata kodlarının teşhisi (kılavuz yalnız "yeniden çalıştır / servis" diyor) · dış ünite, gaz, elektrik (#31) · fiyat (#46).
#   Alıntı denetimi: gree-klima-isitma-modu.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Klimanın kullanıcı kılavuzu"]
steps:
  - "Klimaya elektrik geldiğinden emin ol ve kumandadaki ON/OFF düğmesiyle klimayı aç."
  - "MODE düğmesine HEAT (ISITMA) gelene kadar bas; modelinde varsa iç ünitedeki ısıtma göstergesi yanar."
  - "Artı ve eksi düğmeleriyle ayar sıcaklığını seç; ayar aralığı 16 ile 30 °C arası."
  - "FAN düğmesiyle fan hızını, salınım düğmeleriyle hava yönünü ayarla."
  - "Isıtmayı açtıktan sonra iç üniteden hava hemen gelmezse birkaç dakika bekle."
  - "Odayı hızlı ısıtmak istersen ısıtma modundayken TURBO düğmesine bas; çıkmak için tekrar bas."
  - "Isıtma zayıfsa filtreyi, kapı ve pencereleri, ayar aralığını kontrol et; sürerse satıcıya ya da yetkili servise başvur."
faq:
  - q: "Gree klimada ısıtma modu hangisi?"
    a: "Fairy kılavuzuna göre MODE düğmesine her basışta mod AUTO (Otomatik), COOL (Soğutma), DRY (Nem alma), FAN ve HEAT (Isıtma) arasında değişir. HEAT seçildiğinde klima ısıtma modunda çalışır ve bazı modellerde iç ünitenin ısıtma göstergesi yanar."
  - q: "Gree klima ısıtmada kaç dereceye ayarlanır?"
    a: "Fairy kılavuzunda kumandadan ayarlanabilen aralık 16–30 °C. Airy kılavuzu ise bazı modellerde ısıtma modu seçiliyken aralığın 8–30 °C olduğunu, bu özelliğin her modelde bulunmadığını yazıyor. Kılavuzlarda ısıtma için önerilen tek bir derece yok."
  - q: "Isıtmayı açtım, klima hava üflemiyor. Arıza mı?"
    a: "Kılavuz bunu normal sayıyor: soğuk hava üflemeyi önlemek için iç ünite birkaç dakika gecikmeyle çalışır. Oda ayar sıcaklığına ulaştığında da iç ünite hava üflemeyi durdurur. Klimayı kapatıp hemen açtıysan 3 dakika bekle."
  - q: "8 °C ısıtma nedir?"
    a: "Fairy kılavuzunda ısıtma modundayken TEMP ve CLOCK düğmelerine aynı anda basınca açılan bir fonksiyon. Klima ısıtma durumunu 8 °C'de tutar; bu sırada fan otomatik devirde kalır, ayar sıcaklığı değiştirilemez ve uyku fonksiyonuyla birlikte çalışmaz. Kapatmak için aynı iki düğmeye yeniden basılır."
  - q: "Kumandada HEAT seçiyorum ama klima açılmıyor. Neden?"
    a: "Kılavuza göre yalnızca soğutma yapan modeller ısıtma sinyali almaz; kumandada ısıtma seçiliyken ON/OFF'a basılırsa ünite çalışmaz. Modelinin ısıtma işlevli olduğunu iç ünite etiketinden ya da kılavuzdan kontrol et."
images:
  coverAlt: "Kış akşamı perdeleri kapalı bir yatak odasında duvara asılı beyaz bir split klima"
  steps:
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda prizden çekilen fiş"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda telefon ve kullanım kılavuzu"
---

Soğuk bir akşam Gree klimayı ısıtmaya almak istiyorsun ama kumandada hangi düğmeye basacağını hatırlamıyorsun. Ya da HEAT'i seçtin, birkaç dakika hiç hava gelmedi. Gree'nin Türkiye sitesinde ürün sayfalarına bağlanan Fairy ve Airy kullanıcı kılavuzları ısıtma modunu kumanda bölümünde tek tek anlatıyor. Arıza analizi tablosu da ilk dakikalardaki sessizliği ayrıca açıklıyor. Bu yazıda ısıtmayı açmayı, sıcaklık aralığını ve normal olan davranışları bu iki kılavuzdan topladık. Kumanda genel bir kumanda; kılavuz her modelin her fonksiyona sahip olmayabileceğini yazıyor, kendi modelinin kılavuzuyla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** ON/OFF ile aç, MODE ile **HEAT**'i seç. Ayar 16–30 °C. İlk birkaç dakika hava gelmemesi normal. Hızlı ısınma için TURBO. Kapatıp açtıysan 3 dakika. Isıtma zayıfsa filtre, kapı-pencere. Sürerse yetkili servis.

## Kılavuz ne diyor

| Konu | Gree kılavuzlarında |
|---|---|
| **Mod sırası** | AUTO → COOL → DRY → FAN → **HEAT** |
| **Ayar aralığı** | 16–30 °C (Airy: bazı modellerde ısıtmada 8–30 °C) |
| **İlk dakikalar** | Soğuk hava önleme: birkaç dakika gecikme |
| **Ayar sıcaklığına ulaşınca** | İç ünite hava üflemeyi durdurur |
| **Hızlı ısıtma** | TURBO düğmesi |
| **Donma koruması** | 8 °C ısıtma: TEMP + CLOCK |
| **Yalnız soğutma modeli** | Isıtma sinyalini almaz |

## Adım adım: Gree klimada ısıtmayı açmak

**1. Klimayı aç.** Fairy kılavuzuna göre elektrik verildikten sonra klimadan bir ses gelir ve çalışma göstergesi yanar; bundan sonra klimayı kumandayla çalıştırabilirsin. Kumandadaki **ON/OFF** düğmesine bas. Düğmeye bastığında kumanda ekranında sinyal simgesi bir kez yanıp söner ve klimadan bir "dit" sesi gelir; bu sinyalin klimaya ulaştığını gösterir.

**2. HEAT'i seç.** **MODE** düğmesine her basışta mod sırayla AUTO (Otomatik), COOL (Soğutma), DRY (Nem alma), FAN ve **HEAT (Isıtma)** olur. Isıtma seçildiğinde klima ısıtma modunda çalışır; kılavuza göre iç ünitenin **ısıtma göstergesi** de yanar, bu gösterge bazı modellerde var. Kumanda ekranındaki mod simgeleri kılavuzun "Gösterge ekranındaki simgelerin tanıtımı" sayfasında.

**3. Sıcaklığı ayarla.** Ayar sıcaklığını artı ve eksi düğmeleriyle seç; her basış ayarı 1 °C değiştirir. Fairy kılavuzunda aralık **16–30 °C**. Airy kılavuzu bazı modellerde ısıtma modu seçiliyken aralığın **8–30 °C** olduğunu, bu özelliğin her modelde bulunmadığını yazıyor. Ayar değişmiyorsa kılavuzun arıza tablosuna göre istediğin değer bu aralığın dışında olabilir.

**4. Fanı ve hava yönünü seç.** **FAN** düğmesi otomatikten yükseğe kadar devirler arasında geçer. Hava yönünü salınım düğmeleriyle ayarla. Isıtma modunda kurutma için kullanılan X-FAN fonksiyonu çalışmaz; kılavuz bunu yalnız soğutma ve nem alma için tarif ediyor.

**5. İlk dakikalarda bekle.** Kılavuzun notu: **soğuk havayı engellemek için** ısıtma modu çalıştırıldıktan sonra iç ünite gecikmeli hava üfler ve gerçek gecikme süresi iç ortam sıcaklığına bağlıdır. Arıza analizi tablosu da "iç üniteden hava gelmiyor" satırında ısıtma modu kısa süre önce açıldıysa iç ünitenin **birkaç dakika gecikmeyle** çalıştığını ve bunun normal olduğunu yazıyor.

**6. Hızlı ısıtma için TURBO.** Isıtma modundayken **TURBO** düğmesine basınca klima hızlı ısıtmaya geçer ve kumandada turbo simgesi görünür. Çıkmak için düğmeye tekrar bas, simge kaybolur.

**7. Zayıfsa kontrol et, sürerse servis.** Kılavuzun "Soğutma (Isıtma) etkisi iyi değil" satırı dört şeye bakıyor: gerilim çok mu düşük, **filtre kirli mi**, ayar sıcaklığı uygun aralıkta mı, **kapı veya pencereler açık mı**. Gerilim düşükse normale dönmesini bekle, filtreyi temizle, kapı ve pencereleri kapat. Bu kontrollerden sonra sorun sürüyorsa kılavuz yerel satıcıyla ya da kalifiye uzmanlarla iletişime geçmeni istiyor.

## Isıtırken normal olanlar

**Oda ısındı, hava kesildi.** Arıza tablosuna göre ısıtma modunda iç ortam ayar sıcaklığına ulaştığında iç ünite hava üflemeyi durdurur.

**Kapatıp açınca çalışmıyor.** Cihaz durdurulduktan hemen sonra yeniden çalıştırıldıysa kılavuz **3 dakika** beklemeni istiyor.

**8 °C ısıtma açık kalmış.** Isıtma modundayken TEMP ve CLOCK düğmelerine aynı anda basınca **8 °C ısıtma** fonksiyonu açılır ve klima ısıtmayı 8 °C'de tutar. Bu sırada ayar sıcaklığı değiştirilemez ve TURBO'ya basınca kumanda sinyal göndermez. Oda bir türlü ısınmıyorsa kumandada 8 °C göstergesi var mı bak; aynı iki düğmeye yeniden basınca fonksiyondan çıkılır.

**Dışarısı çok soğuk.** Fairy kılavuzunun çalışma aralığı tablosu ısıtmada dış taraf için üst sınırı 24 °C kuru termometre olarak veriyor; alt sınır modele göre değişiyor. Düşük sıcaklık ısı pompası ünitelerinde dış ortam çalışma aralığı -22 °C ile 43 °C arası. Isıtma sırasında dış ünitede buz çözme molası olabilir; ayrıntı [klima dış ünite buzlanma](/blog/klima-dis-unite-buzlanma/) yazısında.

## Ne zaman servis

- İç ünitede E5, E8, U8, H6, H3, E1 ya da E6 kodu yanıp sönüyor ve klimayı yeniden çalıştırınca geçmiyorsa
- C5, F0, F1, F2 ya da kılavuzda olmayan başka bir kod görünüyorsa
- Elektrik kablosu ısınıyor, yanık kokusu geliyor, sigorta sık atıyor ya da iç ünite sızdırıyorsa (kılavuz bu durumlarda klimayı kapatıp elektriğini hemen kesmeni istiyor)

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, mod, ayar ve filtre sende; dış ünite, gaz, kablo tesisatı ve panelin içi yetkili servisin. Kılavuzun cümlesi: klimayı kendin tamir etme.

## Servisi aramadan önce kısa özet

1. Klimanın modeli ne (iç ünite etiketinde yazar)?
2. Kumandada HEAT seçili mi, 8 °C göstergesi var mı?
3. Ayar sıcaklığı kaç?
4. İç ünitede bir kod yanıp sönüyor mu?
5. Filtreyi en son ne zaman temizledin?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Filtre yöntemi [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında, genel belirtiler [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) sayfasında. Bil, gör, çağır.
