---
title: "Samsung buzdolabı sembolleri ve arıza işaretleri"
description: "Samsung buzdolabı panel işaretleri: alarm/arıza sembolü, E ve -- yazısı, tatil, ekonomi, çocuk kilidi, hızlı soğutma ve Wi-Fi simgesi kılavuza göre."
slug: "samsung-buzdolabi-sembolleri-ve-anlamlari"
date: "2026-10-25"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ küme ajanı (YK #182 Dalga 8, küme Z3 büyük markalar GSC). Konu seçimi: GSC www-5 (3 ay) "samsung buzdolabı arıza işaretleri" 16 gösterim, 1 tık, poz 7; www-6 satır yok.
#   origin/main'de samsung-buzdolabi-sembol* yok; Samsung buzdolabında hata-kodlari, e09/e10/e11, pc, de-on ve belirti yazıları var; panel simgelerini anlatan sayfa yok. Dalga 6/7/8'de yok.
# Hub: samsung-buzdolabi-hata-kodlari (5E, 6E, 21E, 22E, 83E-86E, 85C) ve tekil kod sayfaları → kodlar açıklanmadı, bağlantı verildi.
# OT (bu koşu) "samsung buzdolabı arıza işaretleri" → 1. aynı sorgu (tek öneri); "samsung buzdolabı sembolleri" → öneri yok.
# Belgeler bu koşuda curl ile Samsung indirme merkezinden (org.downloadcenter.samsung.com, CDSite=UNI_TR) indirildi, HTTP 200, md5 yerel kaynak-samsung-buzdolabi-sprint kopyalarıyla aynı:
#  (A) RB52DS**** kullanım kılavuzu  md5 edae9a5819b091bc55152ce19142f777  PDF s.29 panel · s.30-35 modlar, çocuk kilidi, kapı alarmı · s.52-53 kontrol uyarıları
#  (B) RT6300C kullanıcı el kitabı    md5 e366feed0f8f0864a2c0acc5f72434f1  PDF s.34-35 panel, Hızlı Soğutma, Wi-Fi, AI Energy Mode · s.56 Wi-Fi simgesi yanıp sönüyor
# BİLEREK YAZILMAYANLAR: kod anlamları (hub) · sensör/kart teşhisi · sıcaklık ayar değeri önerisi (bu yazının konusu değil) · fiyat.
# Alıntı denetim tablosu: samsung-buzdolabi-sembolleri-ve-anlamlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Alarm / arıza sembolü yanıyor ve sıcaklık alanında kod varsa kodu not et ve Samsung buzdolabı hata kodları sayfasına bak."
  - "Sıcaklık alanında E görüyorsan ekonomi modu, -- görüyorsan tatil modu açıktır; istemiyorsan mod butonuyla kapat."
  - "Çocuk kilidi simgesi yanıyorsa çocuk kilidi butonuna beş saniye basarak kilidi kapat."
  - "Hızlı soğutma ya da hızlı dondurma simgesi yanıyorsa modu açtığın gibi aynı işlemle kapatabilirsin."
  - "Sıcaklık göstergeleri yanıp sönüyorsa kapıyı kapalı tut, gerekirse bir düğmeye dokunarak alarmı sustur ve sıcaklığın dönmesini bekle."
  - "Kapı açıkken bip-bip duyuyorsan kapıyı kapat; kapı iki dakikadan uzun açık kalmıştır."
  - "Wi-Fi simgesi yanıp sönüyorsa buzdolabını uygulamaya bağla ya da Soğutucu düğmesine on saniye basarak uyarıyı durdur."
faq:
  - q: "Samsung buzdolabında arıza işareti hangisi?"
    a: "Samsung RB52DS kılavuzundaki kontrol paneli listesinde 7 numara Alarm / Arıza sembolü. Kılavuza göre sıcaklıklar uygun olmayan seviyedeyse ya da cihazla ilgili bir problem varsa buzdolabı uyarı verir; uyarılar dondurucu ve soğutucu bölme ayar göstergelerinde hata kodlarıyla gösterilir. Kodun anlamı için Samsung buzdolabı hata kodları sayfasına bak."
  - q: "Samsung buzdolabının ekranında E harfi yazıyor, ne demek?"
    a: "RB52DS kılavuzuna göre ekonomi modu seçiliyken soğutucu ve dondurucu bölme sıcaklık göstergesinde E harfi görünür. Bu bir arıza değil; mod enerji tasarrufu için kullanılır. Dondurucu sıcaklığını değiştirirsen ya da hızlı soğutma veya hızlı dondurma seçersen ekonomi modu iptal olur."
  - q: "Soğutucu bölmesinde -- görünüyor, buzdolabı bozuk mu?"
    a: "Hayır. RB52DS kılavuzuna göre tatil modu aktifken soğutucu bölme sıcaklık gösterge alanında -- görünür ve mod süresince görünmeye devam eder. Tatil modu kapılar uzun süre açılmayacaksa ve dondurucuda saklanacak yiyecek varsa kullanılır."
  - q: "Samsung buzdolabında çocuk kilidi nasıl kapatılır?"
    a: "RB52DS kılavuzuna göre çocuk kilidi butonuna 5 saniye basılır. Kilit aktifken ekranda çocuk kilidi simgesi görünür. İçecek soğutma modu bitince çalan alarmı durdurmak için de, kilit açıksa önce çocuk kilidinin iptal edilmesi gerekir."
  - q: "Ekran kendiliğinden kararıyor, normal mi?"
    a: "Evet. RB52DS kılavuzuna göre buzdolabı ilk çalıştırıldıktan 30 saniye sonra kendiliğinden ekran koruma moduna geçer; herhangi bir tuşa basınca ekran aydınlanır, son tuştan 30 saniye sonra yine söner. Modu kapatmak için ekran yanarken mod seçme butonuna 3 saniye basılır."
images:
  coverAlt: "Mutfakta duran gümüş renkli iki kapılı bir buzdolabı"
  steps:
    - "Çizim: solda buzdolabı, sağda not defteri ve kalem"
    - "Çizim: solda buzdolabı, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda buzdolabı, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda buzdolabı, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda buzdolabı, sağda telefonda uygulama ve Wi-Fi bağlantısı"
---

Samsung buzdolabının kapağındaki panelde bir simge yanıyor, sıcaklık yerine **E** ya da **--** yazıyor ya da göstergeler yanıp sönüyor; bunun bir arıza işareti olup olmadığını öğrenmek istiyorsun. Samsung'un **RB52DS** buzdolabı kılavuzunda kontrol panelindeki simgeler numarayla tek tek sayılıyor, **RT6300C** el kitabında da yeni nesil panelin simgeleri anlatılıyor. Bu yazıda bu iki kılavuzdan hangi işaretin arıza, hangisinin yalnız bir modun göstergesi olduğunu ve ne yapman gerektiğini çıkardık. Kılavuzun kendi notu: kontrol panosunun görüntüsü **modele göre değişkenlik gösterebilir;** kendi kılavuzunla karşılaştır.

Buzdolabındaki soruna özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gerçek arıza uyarısı **Alarm / Arıza sembolü** ve sıcaklık alanında beliren **hata kodudur:** [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/). Sıcaklık alanındaki **E** ekonomi modu, **--** tatil modu demek; arıza değil. Çocuk kilidi simgesi için butona 5 saniye bas.

## RB52DS kontrol paneli simgeleri

| No | Simge | Anlamı |
|---|---|---|
| 1 | Hızlı dondurma | Hızlı dondurma modu açık |
| 2 | Hızlı soğutma | Hızlı soğutma modu açık |
| 3 | Dondurucu sıcaklığı | Dondurucunun ayarlanmış değeri |
| 4 | Soğutucu sıcaklığı | Soğutucunun ayarlanmış değeri |
| 5 | Tatil | Tatil modu açık |
| 6 | Ekonomi | Ekonomi modu açık |
| 7 | **Alarm / Arıza** | Sıcaklık uygun değil ya da cihazda problem var |
| 8 | Çocuk kilidi | Çocuk kilidi açık |
| 9-13 | Düğmeler | Bölme seçme, sıcaklık azaltma ve artırma, mod, çocuk kilidi butonu |

RT6300C el kitabındaki yeni nesil panelde **Soğutucu**, **Hızlı Soğutma**, **Ağ bağlantısı göstergesi** ve **AI Energy Mode** simgeleri var; son ikisi yalnız uygulanabilir modellerde.

## Adım adım: Samsung buzdolabında işaret görünce

**1. Alarm / arıza sembolü ve kod.** RB52DS kılavuzunun sorun giderme bölümüne göre soğutucu ve dondurucunun sıcaklıkları **uygun olmayan seviyelerdeyse** ya da **cihazla ilgili bir problem** varsa buzdolabı uyarır; uyarılar dondurucu ve soğutucu bölme ayar göstergelerinde **hata kodlarıyla** yapılır. Kodu not et; anlamı ve ilk kontroller [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) sayfasında. Uzun bir elektrik kesintisinden sonra çıkan dondurucu uyarısı için [Samsung buzdolabı E09 hatası](/blog/samsung-buzdolabi-e09-hatasi/) yazısına bak.

**2. E ve -- yazısı.** Bunlar mod göstergesi. Kılavuza göre **ekonomi modu** seçiliyken soğutucu ve dondurucu sıcaklık göstergesinde **"E"** harfi görünür; **tatil modu** açıkken soğutucu bölme sıcaklık alanında **"--"** görünür ve mod süresince kalır. İkisi de mod butonuna basılarak seçilir; ilgili simge görünene kadar butona bas, 1 saniye içinde başka tuşa basmazsan seçim olur. Kılavuz iki modun birlikte açılamadığını yazıyor: birini açmak için diğerini iptal etmelisin. Hızlı soğutma ya da hızlı dondurma seçmek de bu modları kendiliğinden kapatır.

**3. Çocuk kilidi simgesi.** Kilit açıkken tuşlar çalışmaz. RB52DS kılavuzuna göre kilidi açıp kapatmak için **çocuk kilidi butonuna 5 saniye** basılır; kilit aktifken ekranda çocuk kilidi simgesi görünür.

**4. Hızlı soğutma ve hızlı dondurma simgesi.** Bu simgeler modun açık olduğunu gösterir. RB52DS'de mod, bölme seçilip sıcaklık azaltma tuşuna simge görünene kadar basılarak açılır ve **aynı işlemle** kapatılır. RT6300C el kitabına göre Hızlı Soğutma soğutucuyu birkaç saat **tam fan hızında** çalıştırıp önceki sıcaklığa döner ve **güç tüketimini artırır;** kullanmayacaksan kapat.

**5. Yanıp sönen sıcaklık göstergeleri.** RT6300C el kitabına göre kapıyı çok sık açarsan ya da çok yiyecek koyarsan sıcaklık yükselir ve buzdolabı ayarlanan sıcaklığa dönene kadar **sıcaklığı gösteren tüm LED'ler yanıp söner.** Bu sırada alarm çalabilir; durdurmak için ekrandaki **herhangi bir düğmeye dokun.** Yanıp sönme **uzun süre** devam ederse kılavuz Samsung servisine başvurmanı söylüyor. RB52DS'deki içecek soğutma modunda da kalan süre ekranda yanıp sönerek görünür; bu bir arıza değildir.

**6. Kapı alarmı.** RB52DS kılavuzuna göre kapı **2 dakikadan uzun** açık kalırsa **"bip-bip"** şeklinde sesli alarm duyulur. Kapıyı kapat. Kapı kendiliğinden kapanmıyorsa [Samsung buzdolabı kapısı kapanmıyor](/blog/samsung-buzdolabi-kapisi-kapanmiyor/) yazısına bak.

**7. Wi-Fi simgesi.** RT6300C el kitabına göre buzdolabı SmartThings uygulamasına bağlı değilse kapıyı açarken **Wi-Fi simgesi yanıp söner.** Uygulamaya bağlandığında yanıp sönme durur. Bağlamak istemiyorsan **Soğutucu düğmesine 10 saniye** basılı tut; gösterge yanıp sönmeyi bırakır. Bu bir arıza işareti değildir.

## Ekran neden kararıyor

RB52DS kılavuzuna göre buzdolabı ilk çalıştırıldıktan **30 saniye** sonra kendiliğinden **ekran koruma moduna** geçer; herhangi bir tuşa basınca ekran aydınlanır, son tuştan 30 saniye sonra yine söner. Modu kapatmak için ekran yanarken mod seçme butonuna 3 saniye bas. Karanlık ekran tek başına arıza değildir.

## Ne zaman servis

- Alarm / arıza sembolüyle birlikte bir kod tekrar ediyorsa
- Sıcaklık göstergeleri kapı kapalıyken uzun süre yanıp sönmeye devam ediyorsa
- Buzdolabı soğutmuyorsa: önce [Samsung buzdolabı soğutmuyor](/blog/samsung-buzdolabi-sogutmuyor/) yazısındaki kontroller

⛔ **Kendin-çöz sınırı burada biter.** Mod seçimi, çocuk kilidi, kapı ve conta kontrolü sende; sensör, fan, kompresör, gaz ve kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Buzdolabının model adı ne?
2. Panelde hangi simge yanıyor, sıcaklık alanında ne yazıyor?
3. Sürekli mi yanıyor, yanıp sönüyor mu?
4. Yakın zamanda elektrik kesintisi oldu mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
