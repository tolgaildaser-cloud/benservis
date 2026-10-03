---
title: "TCL klima çalışmıyor: evde kontrol"
description: "TCL split klima açılmıyor ya da komut almıyorsa kılavuzun sorun giderme tablosu: fiş, zamanlayıcı, 3 dakika, kumanda pili, mesafe ve kapalı ekran."
slug: "tcl-klima-calismiyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belgeler bu koşuda (07:52) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı tcl.com (TCL'nin kendi alan adı, /content/dam/brandsite/region/turkey/ altında; adres yalnız yer bulmak için web aramasından).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/ · sayfa = PDF sayfası (TE'de basılı numarayla aynı; TF'de PDF sayfası çift basılı sayfa taşıyor).
#  TE) TCL "DUVAR TİPİ SPLİT KLİMA KULLANMA KILAVUZU" Elite Plus serisi TAC-09/12/18/24CHSD/XA51I, 72 s., md5 fe33431694806ff1731a376d548d7af9
#      https://www.tcl.com/content/dam/brandsite/region/turkey/user-manual/ac/User_Manual_Elite_Series_TR_V1.pdf
#      s.40 "SORUN GİDERME" ARIZA | OLASI NEDENLER → "Cihaz çalışmıyor | Elektrik kesintisi / fiş çekilidir. / İç/dış ünite fan motoru zarar görmüştür. / Kompresör termomanyetik devre kesici arızalıdır. / Koruyucu cihaz veya sigortalar arızalıdır. / Bağlantılar gevşemiştir ya da fiş çekilidir. / Bazen cihazı korumak için çalışmayı durdurur. / Gerilim, gerilim aralığından daha yüksek veya daha düşüktür. / ZAMANLAYICI AÇIK işlevi aktiftir. / Elektronik kontrol devresi zarar görmüştür." / "Cihaz komutlara yanıt vermiyor | Uzaktan kumanda, iç üniteye yeterince yakın değildir. / Uzaktan kumanda pillerinin değiştirilmesi gerekir. / İç ünitede uzaktan kumanda ile sinyal alıcısı arasındaki engeller vardır." / "Ekran kapalı | IŞIK işlevi aktiftir. / Elektrik arızası vardır." / "Şu durumlarda klimayı hemen kapatın ve güç kaynağını kesin: Çalışma sırasında garip sesler. / Arızalı elektronik kontrol devresi. / Arızalı sigortalar veya anahtarlar. / Cihazın içine su veya nesneler püskürtülmesi. / Aşırı ısınmış kablolar veya fişler. / Cihazdan çok keskin kokular gelmesi."
#      s.41 "EKRANDAKİ HATA SİNYALLERİ Hata durumunda iç ünite üzerindeki ekranda aşağıdaki hata kodları gösterilir:" (kodlar görsel, metin katmanında yok; açıklamalar: sensör, soğutucu akışkan sızıntısı, fan motoru, IPM, EEPROM arızaları)
#      s.39 "PİLLERİN DEĞİŞTİRİLMESİ Şu durumlarda: • İç mekân biriminden doğrulayıcı bip sesi gelmiyorsa • LCD çalışmıyorsa Şu şekilde: • Arka kısımdaki kapağı çıkartınız • Yeni pilleri + ve – sembollerine uygun şekilde yerlerine yerleştirerek pilleri değiştiriniz. NOT: Yalnızca yeni piller kullanınız."
#      s.14 "2 adet LRO 3 AAA (1,5 V) pil kullanın. Şarj edilebilir piller kullanmayın. Ekran artık okunamaz hâle geldiğinde eski pilleri aynı türden yenileriyle değiştirin." / "Pil kapağı plakasını ok yönünde kaydırarak uzaktan kumandanın arkasından çıkarın. Pilleri Uzaktan Kumandada gösterilen yöne (+ ve -) göre takın. Pil kapağını kaydırarak yerine geri takın."
#      s.23 "Ünite kapatıldıktan sonra veya çalışma sırasında modu değiştirdikten sonra açılırsa hemen çalışmaz. Bu normal bir kendini koruma işlemidir, yaklaşık 3 dakika beklemeniz gerekir." · "Klima aşağıdaki gibi konforlu ve uygun yaşam koşulları için programlanmıştır; bu koşulların dışında kullanılırsa bazı emniyet koruma özellikleri devreye girebilir." (İnverterli: soğutma oda 17-32 °C, ısıtma oda 0-30 °C)
#      s.21 "Not: Ayarlanan işlevi iptal etmek için TIMER düğmesine tekrar basın." / "Not: Zamanlayıcı işlevini iptal etmek için TIMER düğmesine tekrar basın." / "Not: Gücün kesilmesi durumunda tekrar ZAMANLAYICI KAPALI ayarının yapılması gerekir."
#      s.20 "İç ünite LED ekran ışığını açmak/kapatmak için DISPLAY düğmesine basın ve 2 saniye basılı tutun." · s.12 "ECO/DISPLAY | EKO modunu ve LED ekran ışığını açmak/kapatmak"
#      s.10 "Cihaz, otomatik yeniden başlatma işleviyle önceden ayarlanmıştır. Ani bir elektrik kesintisi durumunda modül, elektrik kesintisinden önce ayar koşullarını belleğe alacaktır. Elektrik geri geldiğinde ünite, bellek işlevi ile korunan önceki ayarlarla otomatik olarak yeniden başlayacaktır."
#      s.5-6 "Elektrik fişini prize doğru ve sıkıca takarak yetersiz temas nedeniyle elektrik çarpması veya yangın riskini önleyin." · s.6 "Cihazdan duman çıkıyorsa veya yanık kokusu varsa derhal elektrik beslemesini kesin ve Servis Merkezi ile iletişime geçin." / "Onarımları yalnızca üreticinin yetkili Servis Merkezi'ne yaptırın."
#  TF) TCL "DUVAR TİPİ SPLİT KLİMA KULLANMA KILAVUZU" C-FRESH serisi TAC-12CHSD/FAI, 37 s., md5 b603b5b2e0d34e1e43e0769216c94a18
#      https://www.tcl.com/content/dam/brandsite/region/turkey/user-manual/ac/User_Manual_Fresh_Air_Series_TR_V1.pdf
#      s.22 aynı sorun giderme tablosu (yalnız "Ekran kapalı | EKRAN işlevi aktiftir.")
# NOT: TCL tablosu yalnız "olası neden" veriyor, çözüm sütunu yok. Adımlar nedenin kullanıcıya dönük karşılığı (fiş takılı değil → tak; zamanlayıcı aktif → TIMER ile iptal [s.21]; kumanda yakın değil / engel → yaklaş, engeli kaldır; pil → değiştir [s.14, s.39]; ışık işlevi → DISPLAY [s.20]; koruma → 3 dk [s.23]). Bu eşleme .KAYNAK.md'de satır satır.
# YAKIN KOPYA: TCL'nin yayında klima sayfası yok. Ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: acil durum düğmesi (s.10; düğme ön panelin altındaki elektrik kapağının üzerinde → numaralı adıma alınmadı, yalnız anıldı) · fan motoru, devre kesici, sigorta, elektronik kart, gerilim (servis) · hata kodlarının görsel simgeleri (metin katmanında yok) · fiyat.
# Alıntı denetim tablosu: tcl-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "2 adet LR03 AAA pil"]
steps:
  - "Evde elektrik kesintisi varsa elektriğin gelmesini bekle."
  - "Klimanın fişinin prize doğru ve sıkıca takılı olduğunu kontrol et."
  - "Zamanlayıcı kuruluysa TIMER düğmesine yeniden basarak iptal et."
  - "Klimayı kapattıktan ya da modu değiştirdikten sonra açtıysan yaklaşık 3 dakika bekle."
  - "İç üniteden bip sesi gelmiyor ya da kumanda ekranı okunmuyorsa iki yeni LR03 AAA pili artı-eksi yönüne göre tak."
  - "Kumandayla iç üniteye yaklaş ve aradaki engeli kaldır."
  - "Klima çalışıyor ama iç ünitenin ekranı kapalıysa DISPLAY düğmesini 2 saniye basılı tutarak ekran ışığını aç."
faq:
  - q: "TCL klima neden çalışmaz?"
    a: "TCL kılavuzunun sorun giderme tablosu 'Cihaz çalışmıyor' satırında dokuz olası neden sayıyor. Elektrik kesintisi ya da çekili fiş, açık kalan zamanlayıcı ve cihazın kendini korumak için durması kullanıcının kontrol edebileceği nedenler. Fan motoru, kompresör devre kesicisi, sigortalar, elektronik kontrol devresi ve şebeke gerilimi ise yetkili servisin bakacağı konular."
  - q: "Klima kumandaya tepki vermiyor. Ne yapmalıyım?"
    a: "Tablonun 'Cihaz komutlara yanıt vermiyor' satırında üç neden var: kumandanın iç üniteye yeterince yakın olmaması, pillerin değişmesi gerekmesi ve kumandayla iç ünitenin sinyal alıcısı arasındaki engeller. İç üniteden bip sesi gelmiyor ya da kumandanın ekranı okunmuyorsa iki yeni LR03 AAA pil tak; şarj edilebilir pil kullanma."
  - q: "Elektrik gidip gelince klima eski ayarlarla açılır mı?"
    a: "Evet. TCL kılavuzuna göre cihaz otomatik yeniden başlatma işleviyle gelir: elektrik kesilmeden önceki ayarları belleğe alır ve elektrik gelince bu ayarlarla yeniden başlar. Zamanlayıcı ise bundan farklı: elektrik kesilirse zamanlayıcı ayarını yeniden yapman gerekir."
  - q: "İç ünite ekranında bir hata kodu var. Ne anlama geliyor?"
    a: "TCL kılavuzu hata kodlarının karşılığında sensör, fan motoru, soğutucu akışkan sistemi ve elektronik kart gibi arızaları sıralıyor. Bunlar kullanıcının giderebileceği arızalar değil; kılavuz onarımın yalnızca üreticinin yetkili servis merkezince yapılmasını istiyor."
images:
  coverAlt: "Sabah ışığında bir yatak odasında komodinin üzerinde arka pil kapağı açılmış beyaz klima kumandası, duvarda ekranı kapalı split klima"
---

Kumandaya basıyorsun, ama TCL klimadan ne bip sesi var ne hava. TCL'nin Türkçe kullanma kılavuzu bu durumu "Sorun Giderme" tablosunda iki ayrı satırla ele alıyor: **"Cihaz çalışmıyor"** ve **"Cihaz komutlara yanıt vermiyor"**. Tablo çözüm yazmıyor, olası nedenleri sıralıyor; ama bu nedenlerin bir kısmı evde birkaç dakikada kontrol edilebilir: **"Elektrik kesintisi / fiş çekilidir."**, **"ZAMANLAYICI AÇIK işlevi aktiftir."**, **"Uzaktan kumanda pillerinin değiştirilmesi gerekir."** Kılavuzun başka bölümleri de 3 dakikalık korumayı, pil değişimini ve ekran ışığını anlatıyor. Aşağıdaki sıra bu bölümlerden.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Elektrik ve fiş. Zamanlayıcıyı TIMER'la iptal et. Kapatıp açtıysan 3 dakika bekle. Bip sesi yoksa iki yeni AAA pil. Kumandayla yaklaş, engeli kaldır. Ekran karanlıksa DISPLAY'i 2 saniye basılı tut. Sürerse → TCL yetkili servis merkezi.

## TCL'nin sorun giderme tablosu

| Belirti | Kılavuzdaki olası neden | Kimin işi |
|---|---|---|
| Cihaz çalışmıyor | Elektrik kesintisi ya da fiş çekili | Senin |
| Cihaz çalışmıyor | ZAMANLAYICI AÇIK işlevi aktif | Senin |
| Cihaz çalışmıyor | Cihaz kendini korumak için durmuş | Senin (bekle) |
| Cihaz çalışmıyor | Fan motoru, kompresör devre kesicisi, sigortalar, elektronik kontrol devresi, gevşek bağlantı, şebeke gerilimi | Yetkili servis |
| Komutlara yanıt vermiyor | Kumanda yeterince yakın değil, piller bitmiş, arada engel var | Senin |
| Ekran kapalı | Işık işlevi aktif | Senin |
| Ekran kapalı | Elektrik arızası | Yetkili servis |

Kılavuz ayrıca klimanın belirtilen sıcaklık koşullarının dışında kullanıldığında bazı emniyet koruma özelliklerinin devreye girebileceğini yazıyor; inverterli modellerde oda sıcaklığı aralığı soğutmada 17-32°C, ısıtmada 0-30°C.

## Adım adım: evde denenecekler

**1. Elektrik.** Evde elektrik kesintisi varsa elektriğin gelmesini bekle. TCL klimalar otomatik yeniden başlatma işleviyle gelir; elektrik gelince ünite kesintiden önceki ayarlarla kendiliğinden çalışır.

**2. Fiş.** Klimanın fişinin prize doğru ve sıkıca takılı olduğunu kontrol et. Kılavuz, gevşek temasın elektrik çarpması ya da yangın riski taşıdığını yazıyor; fişi ve prizi temiz tut.

**3. Zamanlayıcı.** Zamanlayıcı kuruluysa TIMER düğmesine yeniden basarak iptal et. İç ünite ekranındaki TIMER ışığı zamanlayıcı çalışırken yanar. Elektrik kesilirse zamanlayıcı ayarı silinir, yeniden yapman gerekir.

**4. Üç dakika.** Klimayı kapattıktan ya da modu değiştirdikten sonra açtıysan yaklaşık 3 dakika bekle. TCL bunu normal bir kendini koruma işlemi olarak anlatıyor.

**5. Kumanda pilleri.** İç üniteden bip sesi gelmiyor ya da kumanda ekranı okunmuyorsa iki yeni LR03 AAA pili artı-eksi yönüne göre tak. Pil kapağı kumandanın arkasından ok yönünde kayarak çıkar. Şarj edilebilir pil kullanma; kılavuz yalnızca yeni ve aynı türden pil istiyor.

**6. Mesafe ve engel.** Kumandayla iç üniteye yaklaş ve aradaki engeli kaldır. Kılavuz, kumandanın iç üniteye yeterince yakın olmamasını ve kumandayla sinyal alıcısı arasındaki engelleri yanıt vermemenin iki ayrı nedeni olarak sayıyor.

**7. Ekran ışığı.** Klima çalışıyor ama iç ünitenin ekranı kapalıysa DISPLAY düğmesini 2 saniye basılı tutarak ekran ışığını aç. Ekranın kapalı olmasının bir nedeni kumandadan kapatılmış ışık işlevi; öteki nedeni elektrik arızası, o servisin işi.

Kumanda hiç çalışmıyorsa kılavuz bir acil durum düğmesi de tarif ediyor; düğme ön panelin altındaki elektrik kapağının üzerinde durduğu için bu adımı yetkili servise ya da kılavuzun "Acil Durum İşlevi" bölümüne bırakıyoruz.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Elektrik, fiş, zamanlayıcı, 3 dakika, pil, mesafe-engel, ekran ışığı | Senin, bu rehberdeki adımlar |
| Ekranda hata kodu | TCL yetkili servis merkezi |
| Fan motoru, sigorta, devre kesici, elektronik kart, şebeke gerilimi | TCL yetkili servis merkezi |
| Çalışırken garip ses, aşırı ısınmış kablo ya da fiş, çok keskin koku, cihazın içine su ya da cisim kaçması | Klimayı hemen kapat, güç kaynağını kes, yetkili servis |

⛔ TCL kılavuzu, cihazdan duman çıkıyorsa ya da yanık kokusu varsa elektrik beslemesini derhal kesmeni ve servis merkezine başvurmanı, onarımları yalnızca üreticinin yetkili servis merkezine yaptırmanı istiyor.

Klima açılıyor ama serinletmiyorsa [TCL klima soğutmuyor](/blog/tcl-klima-sogutmuyor/) yazısına bak. Markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) ve [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazılarında; ekrandaki kodlar için genel liste [klima arıza kodları](/blog/klima-ariza-kodlari/) yazısında.

---

**Kaynak künyesi.** Sorun giderme tablosu, pil değişimi, zamanlayıcı, ekran ışığı, otomatik yeniden başlatma, çalışma sıcaklıkları ve güvenlik notları TCL'nin tcl.com'daki Türkçe "Duvar Tipi Split Klima Kullanma Kılavuzu"ndan (Elite Plus serisi, TAC-09/12/18/24CHSD/XA51I) alınmıştır; aynı tablo C-FRESH serisi kılavuzunda da yer alıyor. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
