---
title: "Uğur klima çalışmıyor"
description: "Uğur duvar tipi klima açılmıyorsa Uğur'un kontrol listesi: güç kablosu, elektrik kesintisi, sigorta, 3 dakikalık koruma, kumanda pilleri ve acil çalıştırma."
slug: "ugur-klima-calismiyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, Uğur). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile ugur.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adres ugur.com.tr ürün sayfasındaki "Kullanım Kılavuzu" indirme bağlantısından (göreli /Data/EditorFiles/docs/). Web araması yok.
#  KL1) UIS 121 R323 duvar tipi klima  https://ugur.com.tr/Data/EditorFiles/docs/101087_KK.pdf  24 s.  md5 eca923729839002f403b152df6681138
#       ürün sayfaları: https://ugur.com.tr/uis-121-r323 (101087_KK) · /uis-181-r323 (101086_KK) · /uis-241-r323 (101085_KK) — üç dosyanın md5'i AYNI.
#  ⚠ PDF'in METİN KATMANI YOK (sayfa başına tek JPEG, 96 dpi). Alıntılar sayfa görüntülerinden 2x büyütülerek GÖZLE okundu; OCR yalnız sayfa bulmak için.
#     Sayfa = PDF sayfası (basılı numara 4 eksik). Salon tipi USIS 481 R333 (101090_KK.pdf) kapsam dışı.
# Ana satırlar (KL1 s.16 "Sorun Giderme" · "Servise danışmadan önce, aşağıdaki listeyi kontrol edin."):
#   "Çoklu kontrol", ünitenin çalışmadığını gösteren şekilli satır (olgu hücresi yalnız resim): "●Güç kablosu takıldı mı?" · "●Bir güç arızası var mı?" · "●Sigorta yanmış mı?"
#   "Normal Performans denetimi" · "Sistem yeniden başlamıyor." → "●Ünite durduğunda, sistemi koruması için 3 dakika kadar derhal yeniden başlamayacaktır." ·
#   "●Elektrik fişi çıkartıldığında ve yeniden takıldığında, koruma devresi klimayı korumak için 3 dakika çalışacaktır." (belgedeki ifade aynen)
#   s.16 "Eğer ünite uzun bir dönem kullanılmayacak ise, ana güç tedariği anahtarını kapatın."
# Kumanda (KL1 s.6 "Kumandaya Pil Takılması"): "1.Batarya kapağını çıkartın; 2.Pilleri gösterildiği gibi takın. 2R-03 pil, ... Takarken yükün "+"/"-" ile hizalı olduğundan emin olun;
#   3.Pili takın, sonra kapağı tekrar kapatın." · "●Sinyal gönerim ucu ve iç unite alıcı gözü arasındaki mesafe herhangi bir engele takılmadan maksimum 7 metre olmalıdır." ·
#   "●Elektronik içerikli aydınlatma veya kablosuz telefon kullanılan odalarda, kumandadan gönderilen sinyallerin iletilmesi engellenebilir, dolayısıyla bu durumlarda iç üniteye olan
#   kumanda uzaklığı daha kısa olmalıdır." · "●Operasyon esnasında tam ekran gösterimi veya net olmayan ekran gösterimi, pillerin tükendiğinin göstergesidir. Lütfen pilleri değiştiriniz."
#   · "●Eğer operasyon esnasında uzaktan kumanda normal olarak çalışamıyorsa, lütfen pilleri çıkartın ve bir kaç dakika sonra tekrar takınız." · İpucu "Piller uzun süre kullanılmayacaksa,
#   çıkartınız. Eğer piller çıkartıldıktan sonra herhangi bir görüntüleme var ise, sadece sıfırlama tuşuna basın."
#   KL1 s.7 "1. Ünite BAŞLATMA (Ünite kapalıyken uygulanacaktır) ON/OFF butonuna bastığınızda, ünite çalışmaya başlar." · "Acil Durum Operasyonu: ●Uzaktan kumanda arızalı veya kayıp
#   olduğu zaman bu işlemi kullanın, ve acil çalışan fonksiyonu ile, klimayı bir süre otomatik olarak çalıştırabilirsiniz. ●Acil çalıştırma anahtarı basıldığında, "Pi" sesi, bu işlemin
#   başlangıcı anlamına gelir" · tablo: oda sıcaklığı 24°C üzerinde → SOĞUK, altında → SICAK; belirlenmiş sıcaklık 24 °C, fan OTOMATİK · "zamanlayıcı veya nem alma modunda çalıştırmak
#   da mümkün değildir, sıcaklık ayarlarını ve fan hızını değiştirmek mümkün değildir."
#   KL1 s.9 ZAMANLAYICI: "NOT: Piller değiştirildikten sonra veya elektrik kesintisi meydana geldiğinde, zaman ayarının sıfırlanması ve yeniden ayarlanması gerekir."
#   KL1 s.5 "Elektrik kablosu hasarlı ise hemen Uğur Yetkili servisini arayınız." · "Uzatma kabloları ya da çoklu prizlerle bağlantı yapmayın." · KL1 s.3 bakım/onarım/arıza/montaj
#   için "Uğur Yetkili Servisine ya da Uğur Müşteri Hizmetlerine danışın." · KL1 s.18 sigorta değişimi (iç ünite T 3.15A/250V, dış ünite T 25A/250V) — kullanıcıya VERİLMEDİ.
# BİLEREK YAZILMAYANLAR: kart üstü sigorta değişimi (s.18; elektrik müdahalesi, #31) · acil çalıştırma anahtarının yeri (yalnız şekilde, ön panelin altında; metinde konum yok →
#   "kılavuzdaki şekle bak") · "Pi Pi" test operasyonu (kılavuz "normal çalışmalarda ise kullanmayın" diyor) · dış ünite hata kodları (s.15 tablo, görüntü okunaksız) · fiyat.
# Alıntı denetim tablosu: ugur-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Yedek kumanda pili"]
steps:
  - "Klimanın güç kablosunun prize takılı olduğunu kontrol et."
  - "Evde elektrik kesintisi olup olmadığına bak."
  - "Sigorta panosunda klimanın sigortasının atıp atmadığını ve ana güç anahtarının açık olduğunu kontrol et."
  - "Klimayı kapattıktan ya da fişi takıp çıkardıktan sonra yeniden açmadan önce 3 dakika bekle."
  - "Kumanda ekranı soluk ya da karışıksa pilleri +/- yönüne dikkat ederek değiştir; kumanda tepkisizse pilleri çıkarıp birkaç dakika sonra tak."
  - "Kumandayı iç ünitenin alıcısına en fazla 7 metreden, arada engel olmadan tut ve ON/OFF tuşuna bas."
  - "Kumanda yine çalışmıyorsa iç ünitedeki acil çalıştırma anahtarına bas ve Pi sesini dinle."
faq:
  - q: "Uğur klimam neden açılmıyor?"
    a: "Uğur'un UIS serisi duvar tipi klima kılavuzundaki sorun giderme tablosu ünite çalışmıyorsa üç soru soruyor: güç kablosu takılı mı, bir güç arızası var mı, sigorta yanmış mı. Aynı tabloya göre ünite durduktan sonra sistemi korumak için yaklaşık 3 dakika yeniden başlamaz. Kumanda tarafında soluk ekran pillerin bittiğini gösterir."
  - q: "Kumanda kayboldu ya da bozuldu, klimayı nasıl çalıştırırım?"
    a: "Kılavuz bu durum için acil durum operasyonunu veriyor: iç ünitedeki acil çalıştırma anahtarına basınca Pi sesi gelir ve klima bir süre otomatik olarak çalışır. Oda sıcaklığı 24°C'nin üzerindeyse soğutma, altındaysa ısıtma modunda, 24 °C ayarla ve otomatik fan hızıyla çalışır; bu modda zamanlayıcı, nem alma, sıcaklık ve fan hızı değiştirilemez."
  - q: "Elektrik kesildi, zamanlayıcı ayarım gitti."
    a: "Kılavuza göre piller değiştirildikten sonra ya da elektrik kesintisinden sonra zamanlayıcı ayarının sıfırlanıp yeniden yapılması gerekir."
  - q: "Klimanın sigortası yanmışsa kendim değiştirebilir miyim?"
    a: "Kılavuzda iç ve dış ünitenin kart üzerindeki sigortalarının tipi yazıyor ama bu bir elektrik müdahalesi; kılavuz bakım, onarım, arıza ve yedek parça işlemleri için Uğur Yetkili Servisi'ne ya da Uğur Müşteri Hizmetleri'ne danışmanı istiyor. Evdeki sigorta panosunu kontrol etmenin ötesinde elektrik aksamına müdahale etme."
images:
  coverAlt: "Kapalı duran duvar tipi bir klimaya doğru tutulan uzaktan kumanda ve yanında yeni piller"
---

Kumandada güç tuşuna basıyorsun, klima ne ses veriyor ne kanatlarını açıyor. Uğur'un UIS serisi duvar tipi klima kılavuzundaki sorun giderme tablosu, ünitenin çalışmadığı durum için **"Çoklu kontrol"** başlığında üç soru soruyor: **güç kablosu takıldı mı, bir güç arızası var mı, sigorta yanmış mı?** Kılavuzun kumanda ve acil durum bölümleri de bu üç soruya kumanda tarafını ekliyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Güç kablosu takılı mı → evde elektrik var mı → sigorta atmış mı, ana güç anahtarı açık mı → kapatıp açtıysan 3 dakika bekle → kumanda ekranı soluksa pilleri değiştir → kumandayı 7 metre içinden, engelsiz tut → kumanda yine çalışmıyorsa acil çalıştırma anahtarı. Klima acil çalıştırmayla da açılmıyorsa → servis.

## Adım adım: evde denenecekler

**1. Güç kablosuna bak.** Tablonun ilk sorusu **"Güç kablosu takıldı mı?"** Klimanın fişinin prizde olduğunu kontrol et. Uğur kılavuzunun güvenlik bölümü klimanın **uzatma kablosu ya da çoklu prizle bağlanmamasını** istiyor. Kablo hasarlı görünüyorsa dokunma: kılavuz bu durumda **hemen Uğur Yetkili Servisi'ni aramanı** söylüyor.

**2. Elektrik kesintisi var mı?** İkinci soru **"Bir güç arızası var mı?"**

**3. Sigortayı ve ana anahtarı kontrol et.** Üçüncü soru **"Sigorta yanmış mı?"** Sigorta panosunda klimanın hattının atıp atmadığına bak. Uğur, ünite uzun süre kullanılmayacaksa **ana güç tedarik anahtarının kapatılmasını** öneriyor; klimayı yeniden kullanmadan önce bu anahtarın açık konumda olduğunu kontrol et. Klimanın kendi içindeki sigortalar servis işi; bu adım yalnız evdeki pano ve anahtar için.

**4. 3 dakika bekle.** Tablonun "Normal Performans denetimi" bölümüne göre **ünite durduğunda, sistemi korumak için yaklaşık 3 dakika yeniden başlamaz.** Fiş çekilip yeniden takıldığında da kılavuz koruma devresinin **3 dakika** devrede olduğunu yazıyor. Kapatıp hemen açtıysan ya da fişi yeni taktıysan 3 dakika bekle, sonra yeniden dene.

**5. Kumanda pillerini kontrol et.** Kılavuza göre kumanda ekranında **tam ekran gösterimi ya da net olmayan görüntü, pillerin tükendiğini** gösterir; pilleri değiştir. Batarya kapağını çıkar, pilleri **"+" ve "-" işaretlerine hizalayarak** tak, kapağı kapat. Kumanda normal çalışmıyorsa Uğur'un önerisi **pilleri çıkarıp birkaç dakika sonra yeniden takmak.**

**6. Kumandayı doğru tut.** Kılavuzdaki mesafe kuralı: kumandanın ucu ile iç ünitenin alıcı gözü arasında, **araya engel girmeden en fazla 7 metre** olmalı. Elektronik aydınlatma ya da kablosuz telefon kullanılan odalarda sinyal engellenebilir; bu durumda kumandayla üniteye **daha yakından** bas. Ünite kapalıyken **ON/OFF** tuşuna bastığında çalışmaya başlaması gerekiyor.

**7. Acil çalıştırmayı dene.** Kılavuz kumanda **arızalı ya da kayıp** olduğunda **acil durum operasyonunu** öneriyor: iç ünitedeki acil çalıştırma anahtarına bastığında **"Pi" sesi** işlemin başladığını gösterir ve klima bir süre otomatik çalışır. Anahtarın yeri kılavuzdaki şekilde gösteriliyor. Oda 24°C'nin üzerindeyse klima **soğutma**, altındaysa **ısıtma** modunda, 24 °C ayar ve otomatik fanla çalışır.

## Bilmekte fayda var

- **Zamanlayıcı sıfırlandıysa:** kılavuza göre piller değiştirildikten ya da elektrik kesintisinden sonra **zamanlayıcı ayarının yeniden yapılması** gerekir.
- **Test anahtarı:** acil anahtarla aynı tuş, kılavuza göre yalnız oda **16 °C'nin altındayken** deney çalışması için kullanılıyor; normal kullanımda gerekmiyor.

Kumanda tarafının genel anlatımı için [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/), markadan bağımsız kontrol listesi için [klima çalışmıyor](/blog/klima-calismiyor/) yazısına bakabilirsin. Klima açılıyor ama odayı serinletmiyorsa: [Uğur klima soğutmuyor](/blog/ugur-klima-sogutmuyor/).

## Ne zaman servis

- Fiş takılı, elektrik ve sigorta yerinde, 3 dakika beklendi, piller yeni ve acil çalıştırma anahtarıyla da klima **açılmıyorsa.**
- **Güç kablosu hasarlıysa:** kılavuz hemen **Uğur Yetkili Servisi'ni** aramanı istiyor.
- Klimanın **kendi içindeki** (kart üzerindeki) sigortadan şüpheleniyorsan: bu elektrik müdahalesi; kılavuz bakım, onarım, arıza ve yedek parça işleri için **Uğur Yetkili Servisi'ne ya da Uğur Müşteri Hizmetleri'ne** danışmanı istiyor.

Uğur Çağrı Merkezi: **444 84 87.**

⛔ **Kendin-çöz sınırı burada biter.** Fiş, pano anahtarı, bekleme süresi, kumanda ve acil anahtar kullanıcıya; kablo, kart sigortası, kart ve dış ünite servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
