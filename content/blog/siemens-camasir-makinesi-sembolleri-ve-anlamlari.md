---
title: "Siemens çamaşır makinesi sembolleri ve anlamları"
description: "Siemens ekranındaki simgeler çoğunlukla arıza değil, durum bilgisi. WG64K2Y0TR kılavuzuna göre anahtar, kapak, musluk, tambur, köpük ve iki nokta."
slug: "siemens-camasir-makinesi-sembolleri-ve-anlamlari"
date: "2026-10-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ yazı alt ajanı (YK #189, Cum 30 Eki sembol yazısı). Konu: yk189/SEMBOL-ENVANTERI.md kuyruğunda 3. sıra.
#   origin/main'de siemens-camasir-makinesi-sembolleri* yok (yalnız siemens-bulasik-makinesi-sembolleri-ve-anlamlari var).
# Otomatik tamamlama (bu koşuda, hl=tr gl=tr): tohum "siemens çamaşır makinesi sembolleri" → 1. "…sembolleri ve anlamları";
#   tohum "siemens çamaşır makinesi" → 9. "…sembolleri ve anlamları". GSC www-9 (7 gün): "siemens çamaşır makinesi musluk işareti" 9 gösterim.
# Belge bu koşuda indirildi (curl, HTTP 200): Siemens WG64K2Y0TR Kullanım kılavuzu ve kurulum talimatları (TR), 52 s.,
#   https://media3.bsh-group.com/Documents/9002056894_B.pdf  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#   Zincir: siemens-home.bsh-group.com/tr ürün sayfası WG64K2Y0TR (HTTP 200) → bu PDF bağlantısı.
# Simge şekilleri sayfa görüntüsünden okundu (s.19-20-21-41 PNG'leri _kaynak/ altında, md5 KAYNAK.md'de). Profilo yazısından kopya yok.
# BİLEREK YAZILMAYANLAR: pompa/süzgeç sökme · parça teşhisi · simgelerin Profilo/Bosch'la aynı olduğu iddiası · fiyat (#46) · pazar bağlantısı.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Musluk simgesi yanıyorsa musluğun açık olduğunu ve giriş hortumunun katlanmadığını kontrol et."
  - "Kapak simgesi yanıp sönüyorsa kapağa çamaşır sıkışmadığından emin ol ve kapağı kapat."
  - "Tuşlar tepki vermiyor ve anahtar simgesi yanıyorsa çocuk kilidini 3 sn. işaretli iki tuşla kapat."
  - "Tambur temizleme simgesi yanıp sönüyorsa tambur boşken Pamuklular 90° programını çalıştır."
  - "Köpük simgesi yandıysa sonraki yıkamada deterjanı ya da akıllı dozajın temel miktarını azalt."
  - "İki nokta yanıp sönüyor ve program durduysa bekle; gerilim düzelince program devam eder."
  - "E: ile başlayan kod tekrar ediyorsa makineyi yeniden başlat, sürerse müşteri hizmetlerine haber ver."
faq:
  - q: "Siemens çamaşır makinesinde musluk işareti ne demek?"
    a: "WG64K2Y0TR kılavuzuna göre musluk simgesi su basıncı olmadığını ya da musluktaki su basıncının çok düşük olduğunu gösterir. Sorun giderme tablosu önce musluğun açık olup olmadığına, giriş hortumunun katlanıp sıkışmadığına ve muslukta yeterli basınç olup olmadığına bakmayı önerir."
  - q: "Anahtar simgesi neden yanıp sönüyor?"
    a: "Anahtar çocuk kilididir. Sabit yanıyorsa kilit etkindir; yanıp sönüyorsa kilit etkinken cihaz kumanda edilmiş, yani bir tuşa dokunulmuştur. Kilit, panelde anahtar ve 3 sn. işaretiyle gösterilen iki tuşa yaklaşık 3 saniye birlikte basılarak açılıp kapanır. Kılavuza göre bekleme modunda ve elektrik kesintisinde de etkin kalır."
  - q: "Ekranda yanıp sönen iki nokta arıza mı?"
    a: "Hayır. Kılavuz, iki nokta yanıp sönüp program duraklarsa cihazın gerilim beslemesinde dalgalanma algıladığını yazar. Herhangi bir işlem gerekmez; gerilim stabil hale geldiğinde program normal biçimde devam eder, yalnız program süresi uzar."
  - q: "Tambur temizleme simgesi ne zaman çıkar?"
    a: "Kılavuza göre 40 °C veya altındaki 20 yıkamadan sonra yanıp söner. Simge yanıp sönüyorsa tambur ve pis su haznesinin bakımı için Pamuklular 90° programının çalıştırılması istenir. Hatırlatma temel ayarlardan açılıp kapatılabilir."
  - q: "Semboller bütün Siemens çamaşır makinelerinde aynı mı?"
    a: "Değil. Bu yazıdaki tablo WG64K2Y0TR kılavuzundan; akıllı dozaj, buhar, Wi-Fi ve Smart Energy gibi simgeler yalnız o donanımı olan modellerde çıkar. Kılavuz yazılım güncellemeleriyle yeni fonksiyonlar gelebileceğini de belirtiyor. Kesin karşılık kendi modelinin kılavuzundadır."
images:
  coverAlt: "Çamaşır makinesinin dokunmatik kumanda paneli ve ekranı"
  steps:
    - "Çamaşır makinesinin arkasında açık su musluğu ve giriş hortumu"
    - "Çamaşır makinesinin kapalı yuvarlak kapağı yakın plan"
    - "Çamaşır makinesi ekranında anahtar biçimli çocuk kilidi simgesi"
    - "Boş tamburlu çamaşır makinesinin içi"
    - "Deterjan çekmecesi açık duran çamaşır makinesi"
    - "Çamaşır makinesi ekranında bekleme durumu"
    - "Kumanda paneli kapalı duran çamaşır makinesi"
---

Siemens çamaşır makinesinin ekranında tanımadığın bir işaret belirince akla ilk gelen "arıza mı?" sorusu oluyor. Siemens'in kendi kılavuzundaki gösterge tablosuna bakınca durum farklı: işaretlerin büyük kısmı **ayar değeri, program durumu ya da hatırlatma**. Gerçek arıza bildirimi ayrı bir küme.

Bu yazıda simgeleri Siemens'in **WG64K2Y0TR** Türkçe kullanım kılavuzundaki "Ekran" bölümünden (s.19–21) ve arıza giderme tablosundan açıklıyoruz.

Olası arızayı benservis.com'daki ücretsiz teşhisten de öğrenebilirsin.

> ⚠️ **Aynı simge sabit yanarken ve yanıp sönerken farklı şey söyler.** Kılavuz bu ayrımı anahtar, kapak, Wi-Fi ve tambur satırlarında ayrı ayrı yapıyor.

## Ekrandaki sayılar ve ayar işaretleri

| Gösterge | Kılavuzdaki anlamı |
|---|---|
| `0:40` gibi süre | Tahmini program süresi ya da kalan süre |
| Artı işareti ve `10 h` gibi değer | Program bitiş zamanı |
| `max 11,0` | Seçilen program için kg cinsinden önerilen **maksimum** dolum |
| Devir değeri | Ayarlanan sıkma devri |
| Sıcaklık değeri | Ayarlanan sıcaklık; **kar tanesi soğuk** demek |

Devir alanında iki seçenek daha var. Üstü çizili daire **son sıkma yok, sadece boşaltma** demek. Düz bir tekne simgesi ise **durulama suyunda bekletme, boşaltma yok**: çamaşır suyun içinde bekler. Kılavuza göre devam etmek için Sıkma ya da bir tahliye programı seçip Başlat/Reload'a basman yeterli. Makine boşaltmadı diye arıza sanma.

## Program durumu: makine o an ne yapıyor

Başlatma göstergesi bir **oynat üçgeni**:

- **Yanıyor:** program devam ediyor; iptal edilebilir ya da bekletilebilir.
- **Yanıp sönüyor:** program başlatılabilir ya da devam ettirilebilir.

Program bitince ekranda **End** yazar. Üzerinde çapraz çizgi olan tişört simgesi "program durumu: kırışıklık önleme" demek. Kılavuza göre çamaşırı program sonunda almazsan 15 dakika sonra yaklaşık 30 dakika süren bir kırışık azaltma aşaması başlıyor; bir tuşa basınca iptal oluyor.

## Seçenek simgeleri

Bunlar senin seçtiğin ya da makinenin bildirdiği ek işlevler:

- Ütü: **kırışıklık azaltma** etkin
- İçinde tek çizgi olan kazan: **ön yıkama** etkin
- Üstünde buhar dalgası olan tişört: **buharla ısıtma ve buharlama** etkin
- Artılı daire içinde tişört: **çamaşır ekleyebilir ya da çıkarabilirsin**
- Oklu saat: **kısaltılmış program süresi** (vario Speed); kılavuz enerji tüketiminin arttığını not ediyor
- Dişli: **temel ayarlar** değiştiriliyor

## Bağlantı ve dozaj simgeleri

- **Wi-Fi:** yanıyorsa cihaz ev ağına bağlı, yanıp sönüyorsa bağlanmaya çalışıyor.
- **Sinyal çıkan telefon:** uzaktan çalıştırma etkin.
- **Fiş:** cihaz Smart Energy System'e bağlandı.
- **Onay işaretli telefon:** bazı ayarlar Home Connect uygulamasından yapılmış.
- **Eğik dozaj kabı:** yanıyorsa sıvı deterjan için akıllı dozaj etkin; yanıp sönüyorsa dozaj haznesi minimum seviyenin altına inmiş, doldurma zamanı.

## Uyarı simgeleri: asıl karışan küme

### Anahtar: çocuk kilidi

Sabit yanıyorsa kilit etkin; yanıp sönüyorsa kilit etkinken bir tuşa dokunulmuş. Kilit, panelde **anahtar ve "3 sn." işaretiyle birleştirilmiş iki tuşa** yaklaşık 3 saniye birlikte basılarak açılıp kapanıyor (örnek panelde vario Speed ile Bitiş Erteleme; kendi panelindeki işarete bak). Kılavuz, kilidin bekleme modunda ve elektrik kesintisinde de etkin kaldığını yazıyor; "program çalışmaya başlamıyor" satırında ilk sebep olarak da bunu sayıyor.

### Kapak (yuvarlak, yanında asma kilit)

| Davranış | Anlamı |
|---|---|
| Yanıyor | Kapak kilitli |
| Yanıp sönüyor | Kapak açık ya da tam kapanmamış |

Program duraklatıldığı hâlde kapak açılmıyorsa kılavuz iki sebep sayıyor: sıcaklık yüksekse Durulama programını başlat ya da sıcaklığın düşmesini bekle; su seviyesi yüksekse Sıkma ya da uygun bir boşaltma programını başlat.

### Musluk

Musluk simgesi **su basıncı yok** ya da **musluktaki basınç çok düşük** demek. Sorun giderme tablosunun sırası: musluk kapalıysa aç, giriş hortumu katlanmış ya da sıkışmışsa düzelt, muslukta yeterli basınç olup olmadığını kontrol et.

### Tambur temizleme

Köşesinde yıldız olan daire yanıp sönüyorsa tambur ve pis su haznesinin bakımı gerekiyor. Kılavuza göre hatırlatma **40 °C veya altındaki 20 yıkamadan sonra** çıkıyor ve çözüm, tambur boşken **Pamuklular 90°** programı. Bakım bölümü ayrıca temel ayarlardan ya da Home Connect uygulamasından seçilen bir tambur temizleme programı tarif ediyor; o da çamaşır olmadan çalıştırılıyor.

### Köpük

Kabarcıklı kazan simgesi **cihaz çok fazla köpük tespit etti** demek. Kılavuzun çözümü: bir yemek kaşığı yumuşatıcıyı 0,5 litre suyla karıştırıp manuel dozaj haznesine dökmek (outdoor, spor kıyafet ve kaz tüyü için değil). Akıllı dozaj açıksa temel dozaj miktarını, elle dozajlıyorsan sonraki yıkamada deterjanı azalt.

### İki nokta

Yanıp sönen iki nokta ve duraklayan program, cihazın gerilim beslemesinde dalgalanma algıladığını gösteriyor. Kılavuz: **herhangi bir işleme gerek yok**, gerilim stabil olunca program devam ediyor; yalnız süre uzuyor.

## Hata kodu ayrı bir küme

Gösterge tablosunun son satırı **hata kodu, hata göstergesi, sinyal**; örnek `E:35`. `E:` ya da `H:` ile başlayan her şey simge değil koddur ve anlamı [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) yazısındadır.

## Adım adım: simge yandığında yapılacaklar

**1.** Musluk simgesi yanıyorsa musluğun açık olduğunu ve giriş hortumunun katlanmadığını kontrol et.

**2.** Kapak simgesi yanıp sönüyorsa kapağa çamaşır sıkışmadığından emin ol ve kapağı kapat.

**3.** Tuşlar tepki vermiyor ve anahtar simgesi yanıyorsa çocuk kilidini 3 sn. işaretli iki tuşla kapat.

**4.** Tambur temizleme simgesi yanıp sönüyorsa tambur boşken Pamuklular 90° programını çalıştır.

**5.** Köpük simgesi yandıysa sonraki yıkamada deterjanı ya da akıllı dozajın temel miktarını azalt.

**6.** İki nokta yanıp sönüyor ve program durduysa bekle; gerilim düzelince program devam eder.

**7.** `E:` ile başlayan kod tekrar ediyorsa makineyi yeniden başlat, sürerse müşteri hizmetlerine haber ver.

## Ne zaman servis işi

Anahtar, kapak, musluk, tambur, köpük ve iki nokta bilgilendirme simgeleri; çözümleri senin elinde. Kod işin rengini değiştirir. Kılavuz listede olmayan kodlar için önce Ön Yıkama ile Kırışıklık önleme tuşlarına yaklaşık 3 saniye birlikte basarak yeniden başlatmayı, arıza tekrarlarsa cihazı en az 30 saniye güç kaynağından ayırmayı, devam ederse müşteri hizmetlerini aramayı yazıyor. Aynı kılavuz usulüne aykırı onarımın tehlikeli olduğunu ve onarımı yalnız eğitimli uzmanın yapabileceğini belirtiyor: kasa açmak, parça sökmek **servis işi**.

Simge seti donanıma göre değişir; akıllı dozaj, buhar ya da Wi-Fi olmayan modelde o simgeler hiç çıkmaz. Buradaki tablo yön gösterir; kesin karşılık kendi modelinin kılavuzundadır.

Belirtiyi yaz, olası arızayı ücretsiz öğren. Önce öğren, sonra çağır.

İlgili: [Siemens çamaşır makinesi kapak açılmıyor](/blog/siemens-camasir-makinesi-kapak-acilmiyor/) · [Siemens çamaşır makinesi su almıyor](/blog/siemens-camasir-makinesi-su-almiyor/) · [Siemens bulaşık makinesi sembolleri ve anlamları](/blog/siemens-bulasik-makinesi-sembolleri-ve-anlamlari/)
