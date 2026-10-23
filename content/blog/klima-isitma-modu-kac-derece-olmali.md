---
title: "Klima ısıtma modu kaç derece olmalı? İşareti ve ayarı"
description: "Klima ısıtma modunda kaç derece? Daikin 20–24 °C öneriyor, ayar oda sıcaklığının üstünde olmalı. Mod sırası, işaret, uyku ve tasarruf kılavuzlardan."
slug: "klima-isitma-modu-kac-derece-olmali"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork D). origin/main'de "isitma-modu" ya da "kac-derece" slug'ı yok; başlıkta "ısıtma modu" geçen sayfa yok.
#   Yakın sayfalar: klima-sicak-hava-uflemiyor (belirti: hava gelmiyor; ayar>oda kuralını SSS'de anıyor), klima-dis-unite-buzlanma (buz çözme),
#   marka "…-klima-isitmiyor" sayfaları (belirti). Bu yazı ayar değeri + mod işareti niyeti; buz çözme ve bekleme yalnız bir paragraf, bağlantıyla.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "klima ısıtma modu" → liste: klima ısıtma modu (tohumun kendisi) · klima ısıtma modu kaç
#   derece olmalı · klima ısıtma modu işareti · klima ısıtma modunda çalışmıyor · klima ısıtma modunda su akıtır mı.
# GSC (https___www-6, 7 gün): "baymak klima ısıtma modu" 12 · "airfel klima ısıtma modu" 11 · "lg klima ısıtma modu" 6 gösterim (markalı; genel sayfa yok).
# Belgeler (bu koşuda curl -sL -A "Mozilla/5.0", hepsi HTTP 200 application/pdf, md5 önceki koşu kayıtlarıyla aynı):
#  (D) Daikin Sensira FTXF20~42E5V1B kullanım kılavuzu, 3P520336-19V 2022.09, 16 s.  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf  md5 ab2d928437bec2a3d5f374f3aee85cb1
#  (B) Beko 509411 A–525411 A klima kullanma kılavuzu, 31 s.  https://download.beko.com/Download.UsageManualsBeko/30151_tr_TR_20140619160360_Kullanma-K%C4%B1lavuzu-Dosyatur__A.pdf  md5 fc45a59038e091b7e5bed7796db9686a
#  (R) Arçelik 09325–24325 klima kullanma kılavuzu, 29 s.  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201907011127419_User%20Manual%20-%20File%20(Long)tr_TR.pdf  md5 4a7e0a8b15be38974b9080c100a823e6
#  (M) Mitsubishi Electric MSZ-AP15VG/20VG çalıştırma talimatları, 24 s.  https://klima.mitsubishielectric.com.tr/Guide/20230616103431_envirome_kullanma_k_lavuzu_msz-ap___15-20_.pdf  md5 316d4b0a5247a29f2406014e0deb0608
# Sayfalar: D s.6 LCD simge tablosu · D s.7 çalışma aralığı, buz çözme · D s.10 önerilen 20~24 °C, orta karar, hava yönü aşağı · B s.15/17/18 mod sırası, 16–30 °C,
#   ayar oda üstünde / altındaysa çalışmaz · B s.22 uyku · B s.13 en düşük/yüksek yerine ihtiyaca göre · R s.15/17/18/20 aynı metin · M s.8 mod sırası, gösterge lambası
#   · M s.9 ısıtmada kanat aşağı · M s.10 asgari 16 °C (i-save 10 °C), düşük enerji: ısıtmada 2–3 °C azalt · M s.15 buz çözme maks. 10 dk, dış hava düşük.
# BİLEREK YAZILMAYANLAR: simgenin çizimi (kılavuzların metin katmanında yok; "güneş" gibi şekil iddiası yazılmadı) · Daikin'in 20–24 °C önerisinin diğer markalara
#   genellenmesi (yazıda yalnız Daikin'e atfedildi) · enerji tüketimi rakamı · dış ünite, gaz (#31) · fiyat (#46). Alıntı denetimi: KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Klimanın kullanma kılavuzu"]
steps:
  - "Kumandadaki mod tuşuna, ekranda ısıtma modu görünene kadar art arda bas; simgenin anlamını kılavuzun kumanda sayfasındaki tablodan doğrula."
  - "Odanın şu anki sıcaklığını öğren; kumandada oda sıcaklığı gösterge tuşu varsa ona bas."
  - "Ayar sıcaklığını oda sıcaklığının üstünde bir değere getir; ayar odadan düşükse klima ısıtmaz."
  - "Kılavuzun önerdiği aralığı esas al; Daikin ısıtma için 20–24 °C öneriyor, en yüksek değerde sürekli çalıştırma."
  - "Hava yönünü aşağıya, fanı ihtiyacına göre ayarla."
  - "Gece ya da boş odada ayarı birkaç derece düşür veya uyku fonksiyonunu kullan."
  - "Ayar doğru olduğu hâlde oda ısınmıyorsa filtreyi temizle, kapı ve pencereleri kapat; sürerse yetkili servise başvur."
faq:
  - q: "Klima ısıtma modu kaç derece olmalı?"
    a: "Kılavuzlar arasında sayı veren Daikin: Sensira kılavuzu enerji tasarrufu için ısıtmada 20–24 °C, soğutmada 26–28 °C aralığını öneriyor. Beko ve Arçelik kılavuzları bir değer vermiyor ama ayarı oda sıcaklığının üstüne getirmeni ve sürekli en yüksek ayar yerine ihtiyacına uygun bir değer kullanmanı istiyor."
  - q: "Isıtma modunda en düşük kaç dereceye ayarlanır?"
    a: "Modele göre değişir. Beko ve Arçelik kılavuzlarında ısıtmada ayar aralığı 16–30 °C. Mitsubishi Electric MSZ-AP kılavuzunda ısıtmada asgari ayar normalde 16 °C, yalnız i-save çalışmasında 10 °C."
  - q: "Klimada ısıtma modu işareti hangisi?"
    a: "Kumandada ısıtma bir simgeyle ya da HEAT veya ISITMA yazısıyla gösterilir; simgenin çizimi markaya göre değişir. Daikin kılavuzunun LCD tablosunda ilgili simgenin karşısında 'İşletim modu = Isıtma' yazıyor; Beko kılavuzunda da ısıtma seçilince ekranda ısıtma modunun sembolü belirir. Kendi kumandanın simge tablosu kılavuzun kumanda sayfasındadır."
  - q: "Ayarı 30 dereceye çekersem oda daha hızlı ısınır mı?"
    a: "Kılavuzlar bunu önermiyor. Beko kılavuzu klimayı sürekli en düşük ya da en yüksek ayarda değil, ihtiyacına göre daha uygun sıcaklıklarda kullanmanı öneriyor; Daikin de çok fazla ısıtmamaya dikkat etmeni ve ayarı orta kararda tutmanı istiyor. Hızlı ısınma için bazı modellerde ayrı bir hızlı ısıtma fonksiyonu var."
  - q: "Gece ısıtma modunda kaç derece?"
    a: "Kılavuzlar gece için sabit bir sayı vermiyor. Mitsubishi Electric uyurken ve boş odada ısıtma ayarını 2–3 °C azaltmayı öneriyor. Beko'nun uyku fonksiyonu ısıtmada ayarı 60 dakika sonra 1 °C, 2 saat sonra 2 °C kendiliğinden düşürüyor."
images:
  coverAlt: "Kış akşamı sıcak ışıklı bir salonda duvara asılı beyaz bir split klima ve koltukta katlı bir battaniye"
  steps:
    - "Sehpada duran bir klima kumandasının boş ekranı"
    - "Duvarda asılı sade bir oda termometresi"
    - "Klima kumandasında yan yana iki sıcaklık ayar tuşu"
    - "Kapalı bir klima kullanma kılavuzu ve yanında bir kalem"
    - "Kanadı aşağıya eğilmiş bir duvar kliması ve altında halı"
    - "Loş bir yatak odasında sessiz çalışan bir duvar kliması"
    - "Banyo lavabosunda durulanmış ince ağlı bir klima filtresi"
---

Kış geldi, klimayı ısıtmaya alacaksın ama kumandada hangi simgenin ısıtma olduğundan ve kaç dereceye ayarlaman gerektiğinden emin değilsin. Ayarı çok düşük bırakırsan klima hiç ısıtmaz, en yükseğe çekersen daha hızlı ısınacağını sanırsın. Bu yazıda ısıtma modunun kumandada nasıl göründüğünü ve sıcaklığın nereye ayarlanacağını dört üreticinin kendi Türkçe kılavuzundan topladık: Daikin Sensira, Beko 509411–525411, Arçelik 09325–24325 ve Mitsubishi Electric MSZ-AP. Değerler modele göre değişir; kendi klimanın kılavuzu farklı bir şey yazıyorsa **kendi kılavuzun esastır.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod tuşuyla ısıtmayı seç. Ayar **oda sıcaklığının üstünde** olmalı, yoksa klima ısıtmaz. Sayı veren tek kılavuz Daikin: ısıtmada **20–24 °C**. En yüksek ayarda sürekli çalıştırma. Gece ya da boş odada birkaç derece düşür. Ayar doğruysa ve oda ısınmıyorsa filtre, kapı-pencere, sonra servis.

## Kılavuzlar ne diyor

| Konu | Kılavuz | Değer |
|---|---|---|
| **Önerilen ısıtma ayarı** | Daikin Sensira | 20–24 °C (soğutmada 26–28 °C) |
| **Isıtmada ayar aralığı** | Beko, Arçelik | 16–30 °C, her basışta 1 °C |
| **Isıtmada asgari ayar** | Mitsubishi Electric MSZ-AP | 16 °C (i-save'de 10 °C) |
| **Ayar oda sıcaklığından düşükse** | Beko, Arçelik | Isıtma modunda çalışmaz |
| **Isıtmada çalışma aralığı** | Daikin Sensira | Dış –15~24 °C, iç 10~30 °C |
| **Boş oda / uyku** | Mitsubishi Electric | Isıtmada 2–3 °C azalt |

## Adım adım: ısıtma modunu açıp doğru dereceye ayarlamak

**1. Isıtma modunu bul.** Isıtma her kumandada mod tuşunun içinde bir seçenektir. Beko ve Arçelik kılavuzlarında mod sırası Soğutma, Otomatik, Nem giderme, **Isıtma**, Fan; Mitsubishi Electric'te AUTO, SOĞUTMA, KURUTMA, **ISITMA**, FAN. Isıtmaya geldiğinde ekranda ısıtmanın simgesi belirir. Simgenin çizimi markadan markaya değişir; Daikin kılavuzunun LCD tablosunda o simgenin karşısında **"İşletim modu = Isıtma"** yazıyor. Kendi kumandandaki simgeyi kılavuzun kumanda sayfasındaki tablodan doğrula.

**2. Oda sıcaklığını öğren.** Neye göre ayarlayacağını bilmek için önce odanın sıcaklığına bak. Beko kılavuzunda ayrı bir oda sıcaklığı gösterge tuşu var; değer 5 saniye ekranda kalır. Kılavuz, kumandanın oda içindeki yerine göre okunan değerin değişebileceğini de not ediyor.

**3. Ayarı oda sıcaklığının üstüne al.** Isıtmada en sık yapılan hata burada. Beko ve Arçelik kılavuzları aynı cümleyi kuruyor: ayarlanan sıcaklık değeri oda sıcaklık değerinden düşükse cihaz **ısıtma modunda çalışmaz**; ayarlanan değeri artır. Örneğin yazdan 18 °C'de kalmış bir ayar, 21 °C'lik odada ısıtmayı başlatmaz.

**4. Kılavuzun aralığını esas al.** Sayı veren kılavuz Daikin: Sensira kılavuzu enerji tasarrufu için sistemi önerilen aralıkta çalıştırmanı istiyor, ısıtmada **20–24 °C**. Aynı sayfada çok fazla ısıtmamaya dikkat etmen ve ayarı **orta kararda** tutman isteniyor. Beko kılavuzu da klimayı sürekli en düşük ya da en yüksek ayarda değil, ihtiyacına uygun bir değerde kullanmanı öneriyor. Ayar aralığının kendisi modele göre değişir: Beko ve Arçelik'te ısıtmada **16–30 °C**, Mitsubishi Electric MSZ-AP'de asgari **16 °C**.

**5. Hava yönünü aşağı al.** Sıcak hava yükselir; kılavuzlar ısıtmada kanadı aşağı istiyor. Beko: daha verimli ısıtma için yatay kanat en alt konumda. Mitsubishi Electric: ısıtma için aşağı konum. Daikin: tavanda sıcak hava toplanmasın diye ısıtmada hava akış yönü aşağı.

**6. Gece ve boş odada düşür.** Mitsubishi Electric kılavuzunun düşük enerji örneği: ısıtma modunda sıcaklığı **2–3 °C azalt**; bu ayar boş bir oda için ve uyurken uygun. Beko'nun uyku fonksiyonu bunu kendisi yapar: ısıtmada ayar 60 dakika sonra **1 °C**, 2 saat sonra **2 °C** düşer.

**7. Ayar doğruysa ve oda ısınmıyorsa.** Önce birkaç dakika bekle: ısıtma açılınca hava akımı sıcaklık yeterli dereceye ulaşınca başlar, dış ünite buz çözerken de sıcak hava kesilir. Mitsubishi Electric bu molayı en fazla 10 dakika olarak veriyor. Ayrıntılar [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) ve [klima dış ünite buzlanma](/blog/klima-dis-unite-buzlanma/) yazılarında. Sonra filtreye bak; kirli filtre ısıtma kapasitesini düşürür. Kapı ve pencereleri kapat. Mitsubishi Electric'e göre dışarısı çok soğuksa ısıtma yetersiz kalabilir. Bunlardan sonra sorun sürüyorsa kılavuzların hükmü aynı: kullanmayı bırak, satıcına ya da yetkili servise danış.

## Otomatik modda derece

Otomatik modda klima ısıtma ile soğutma arasında kendi geçer. Mitsubishi Electric kılavuzuna göre oda sıcaklığı 15 dakikadan uzun süre ayarın 2 °C dışında kalırsa ünite modu değiştirir. Beko ve Arçelik'te de otomatik mod ayarlanan değere göre ısıtır ya da soğutur. Kışın ısıtmanın kesin çalışmasını istiyorsan modu açıkça ısıtmaya al.

## Ne zaman servis

- Ayar oda sıcaklığının üstünde, mod ısıtmada, buz çözme bitti ama sıcak hava yine gelmiyorsa
- Filtre temiz, kapı-pencere kapalı olduğu hâlde oda bir türlü ısınmıyorsa
- Kumanda ya da iç ünite bir hata kodu gösteriyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, mod, ayar, kanat ve filtre sende; dış ünite, gaz, kablo ve iç ünitenin içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Klimanın markası ve modeli ne?
2. Kumandada ısıtma seçili mi?
3. Ayar kaç derece, oda kaç derece?
4. Dışarısı kaç derece?
5. Filtreyi en son ne zaman temizledin?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Filtre yöntemi [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında. Bil, gör, çağır.
