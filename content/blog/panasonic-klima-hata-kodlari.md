---
title: "Panasonic klima arıza kodları: H ve F kodları ne demek?"
description: "Panasonic klimada ZAMANLAYICI lambası yanıp sönüyorsa kodu kumandadan oku. H 11, H 99, F 91 gibi kodların kılavuzdaki anlamı ve evde yapılacaklar."
slug: "panasonic-klima-hata-kodlari"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3 Panasonic+Hoover). origin/main 75980e0'da "panasonic" geçen slug/başlık/gövde yok.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "panasonic klima arıza" → 1. panasonic klima arıza kodları, 2. panasonic klima timer arızası.
#   GSC (www-3..6 Sorgular.csv): panasonic satırı yok.
# Belge: Panasonic CS-TZ..ZKEW kullanım kılavuzu (TR, WEB-ACXF55-35140-TR, 24 s.), tda.panasonic-europe-service.com, bu koşuda HTTP 200,
#   md5 644a0a7789a6d5d38ed511829c6fe515. Zincir: aircon.panasonic.eu/TR_tr/downloadcenter → horizon.panasonic.eu/tdoc/34598039/tr-TR → PDF.
# BİLEREK YAZILMAYANLAR: kodların parça/kart düzeyinde çözümü · dış ünite, gaz, elektrik müdahalesi · başka serilerin kod listesi · fiyat (#46).
#   Alıntı denetimi: panasonic-klima-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Klimanın kullanma kılavuzu", "Uzaktan kumanda", "Kâğıt ve kalem"]
steps:
  - "İç ünitenin durduğunu ve ZAMANLAYICI göstergesinin yanıp söndüğünü doğrula."
  - "Kumandada kılavuzun gösterdiği düğmeye beş saniye basarak hata kontrolünü aç."
  - "Bip sesini duyana kadar ikinci düğmeye bas ve ekranda çıkan kodu not et."
  - "Hata kontrolünden çıkmak için düğmeye yeniden beş saniye bas ve klimayı kapat."
  - "Kodu kılavuzdaki tabloyla karşılaştır; H 99 çıktıysa filtreleri temizle."
  - "Sigorta sık atıyorsa, iç ünite su akıtıyorsa ya da kablo ısınıyorsa sigortayı kapat ve klimayı kullanma."
  - "Kodu ve modeli yetkili Panasonic servisine bildir."
faq:
  - q: "Panasonic klimada hata kodu nasıl okunur?"
    a: "TZ serisi kılavuzuna göre ünite durmuş ve ZAMANLAYICI göstergesi yanıp sönüyorsa kumandadaki ilgili düğmeye 5 saniye basılır, bip sesi duyulana kadar ikinci düğmeye basılır ve ekrandaki kod not edilir. Çıkmak için yine 5 saniye basılır. Düğme simgeleri kılavuzda resimle gösteriliyor, kendi kumandanla karşılaştır."
  - q: "H 00 ne demek?"
    a: "Kılavuzdaki tabloda H 00 'Bellekte arıza yok' olarak geçiyor. Yani kayıtlı bir hata yok demektir."
  - q: "H 11 hatası neden olur?"
    a: "Tabloda H 11 iç mekân ile dış mekân ünitesi arasındaki normal dışı haberleşme olarak tanımlanıyor. İki ünite arasındaki bağlantı kablosu ve kart tarafı kullanıcı işi değildir; kodu yetkili servise bildir."
  - q: "H 99 kodu filtreyle ilgili mi?"
    a: "Tabloda H 99 iç mekân işletim ünitesi donma koruması. Kılavuzun temizlik bölümü de kirli bir ünitenin arızaya yol açabileceğini ve H 99 kodu alınabileceğini yazıyor. Filtreleri temizlemek senin işin; kod sürerse servis çağır."
  - q: "Kod çıktı ama klima yine de çalışıyor, bu normal mi?"
    a: "Kılavuz bazı hatalarda başlangıçta 4 bip sesi duyulursa ünitenin kısıtlı özelliklerle çalıştırılabileceğini söylüyor. Bu geçici bir çözümdür; kodu not edip yetkili satıcıya bildir."
images:
  coverAlt: "Salon duvarında asılı beyaz bir split klima iç ünitesi ve önündeki gösterge lambaları"
  steps:
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda not defteri ve kalem"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kullanım kılavuzu ve tablosu"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda not defteri ve kalem"
---

Panasonic klima birden durdu, iç ünitede bir lamba yanıp sönüyor. Panasonic bu durumda klimanın arızayı bir kod olarak hafızaya yazdığını ve bu kodun kumandadan okunabildiğini söylüyor. Bu yazıda Panasonic'in TZ serisi (CS-TZ..ZKEW) Türkçe kullanım kılavuzundaki "Hata kodlarının alınması" bölümünü ve kod tablosunu sade bir dille topladık. Kılavuz bu seriye ait; senin modelinde düğme yerleri ya da bazı kodlar farklı olabilir. Kılavuzun kendisi de "bazı hata kodları modeliniz için geçerli olmayabilir" notunu düşüyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ünite durmuş ve **ZAMANLAYICI** göstergesi yanıp sönüyorsa kumandadan kodu oku, not et, klimayı kapat. H 99 çıktıysa önce filtreleri temizle. H 11 ve dış üniteye ait kodlar, sensör, kompresör ve basınç kodları servis işidir.

## Kodlar ne söylüyor

Kılavuzdaki tablonun sık karşılaşılabilecek satırları:

| Kod | Kılavuzdaki anlamı | Kim bakar |
|---|---|---|
| **H 00** | Bellekte arıza yok | Normal |
| **H 11** | İç mekân/dış mekân normal dışı haberleşme | Servis |
| **H 12** | İç ünite kapasitesi eşleşmiyor | Servis |
| **H 14** | İç mekân giriş havası sıcaklığı sensöründe anormallik | Servis |
| **H 19** | İç mekân fan motoru mekanizması kilidi | Servis |
| **H 23** | İç mekân ısı eşanjörü sıcaklık 1 no'lu sensörü anormallik | Servis |
| **H 27** | Dış mekân hava sıcaklığı sensöründe anormallik | Servis |
| **H 85** | İç mekân ve kablosuz LAN modülü arasında anormal iletişim | Servis |
| **H 97** | Dış mekân fan motoru mekanizması kilidi | Servis |
| **H 98** | İç mekân yüksek basınç koruması | Servis |
| **H 99** | İç mekân işletim ünitesi donma koruması | 🛠️ Filtre, sonra servis |
| **F 11** | 4 yollu valf anahtarlamada anormallik | Servis |
| **F 91** | Soğutma döngüsünde anormallik | Servis |
| **F 95** | Dış mekân soğutmasında yüksek basınç koruması | Servis |
| **F 97** | Kompresörde aşırı ısınma koruması | Servis |
| **F 99** | Dış mekân doğrudan akımında (DC) tepe akımı algılama | Servis |

Tablonun tamamı kılavuzun sorun giderme bölümünde; H 15'ten H 39'a sensör ve bağlantı kodları, F 87'den F 98'e koruma kodları ayrı satırlarda.

## Adım adım: kodu oku ve not et

**1. Durumu doğrula.** Kılavuzun cümlesi şu: **ünite durduysa ve ZAMANLAYICI göstergesi yanıp sönüyorsa**, hata kodunu almak için uzaktan kumandayı kullan. Ünite çalışırken GÜÇ göstergesi yanıp sönüyorsa bu çoğu zaman arıza değildir; o durum ayrı yazıda: [Panasonic klima POWER ışığı yanıp sönüyor](/blog/panasonic-klima-power-isigi-yanip-soniyor/).

**2. Hata kontrolünü aç.** Kılavuzdaki birinci adım: kumandadaki düğmeye **5 saniye basın**. Düğmenin simgesi kılavuzda resimle gösteriliyor; kendi kumandanla karşılaştır.

**3. Kodu bul.** İkinci adım: **bip sesini duyana kadar** düğmeye basmaya devam et, sonra ekrandaki **hata kodunu not et**. Kodu bir kâğıda yaz; servisle konuşurken işine yarar.

**4. Çık ve kapat.** Üçüncü adım: hata kontrolünden çıkmak için düğmeye yine 5 saniye bas. Dördüncü adım: ürünü kapat ve hata kodunu yetkili satıcına bildir. Kılavuz ayrıca bazı hatalarda **başlangıçta 4 bip sesi** duyulursa ünitenin **kısıtlı özelliklerle** çalıştırılabileceğini yazıyor. Bu, servis gelene kadarki geçici durumdur.

**5. H 99 ise filtreye bak.** Kılavuzun temizlik bölümü açık: kirli bir ünite arızalara neden olabilir ve **"H 99" hata kodunu** alabilirsin. Hava filtreleri **2 haftada bir** nazikçe yıkanıp durulanır, gölgede tamamen kurutulur, hasarlı filtre değiştirilir. Temizlikten önce güç kaynağını kapat ve ünitenin fişini çek. Yöntem [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında. Bobinler ve fanlar ise kılavuza göre yetkili bayi tarafından periyodik temizlenmeli.

**6. Kullanmayı bırakman gereken durumlar.** Kılavuzun "Bakım yapılamayan durumlar" kutusuna göre önce güç kaynağını kapatıp fişi çek, sonra yetkili satıcıya danış: çalışma sırasında **anormal gürültü**, kumandaya **su ya da yabancı madde** girmesi, **iç ünitenin su akıtması**, devre kesicinin **sık sık atması**, güç kablosunun **normalden sıcak** olması, düğmelerin düzgün çalışmaması.

**7. Servise bildir.** Kod ve model bilgisi hazırsa servis daha hızlı yönlendirir. Haberleşme (H 11), sensör, fan motoru, kompresör, basınç ve soğutma döngüsü (F 91) kodlarının hiçbiri evde çözülmez; dış ünite, gaz ve elektrik bağlantısı yetkili servisin işidir.

## Kod çıkmadan önce bakılacaklar

Her durma arıza değildir. Kılavuz, çalışma başlatıldıktan sonra birkaç dakikalık gecikmenin **kompresörü korumak** için olduğunu yazıyor. Ürün hiç çalışmıyorsa sigortanın atıp atmadığına ve zamanlayıcının ayarlı olup olmadığına bakılır. Kumanda çalışmıyorsa pilleri doğru takmak ya da zayıf pilleri değiştirmek gerekir. Bu son konu [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazısında da var.

## Ne zaman servis

- ZAMANLAYICI göstergesi yanıp sönüyor ve ekranda H 00 dışında bir kod çıkıyorsa
- Filtre temizliğinden sonra H 99 sürüyorsa
- Kod F ile başlıyorsa
- Sigorta klimayı her açtığında atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, filtre ve ön panel sende; iç ünitenin içi, dış ünite, gaz ve elektrik bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. İç ünitenin etiketindeki model ne?
2. Hangi gösterge yanıp sönüyor?
3. Kumandadan okunan kod ne?
4. Başlangıçta 4 bip duydun mu?
5. Filtreler en son ne zaman temizlendi?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Lamba yanıp sönüyor ama kod çıkmıyorsa [Panasonic klima timer ışığı yanıp sönüyor](/blog/panasonic-klima-timer-isigi-yanip-soniyor/) yazısına bak. Bil, gör, çağır.
