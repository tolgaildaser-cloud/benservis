---
title: "Klima kendi kendine açılıyor: Arçelik ve Vestel'e göre"
description: "Klima kendi kendine açılıp kapanıyorsa Arçelik ve Vestel kılavuzları önce zamanlayıcıyı ve elektrik kesintisinden sonra otomatik başlatmayı gösteriyor."
slug: "klima-kendi-kendine-aciliyor"
date: "2026-11-10"
category: "Klima"
updated: "2026-11-10"
kisaCevap: "Klima kendi kendine açılıyorsa önce kumandadaki otomatik açma saatine ve elektrik kesintisinden sonraki otomatik başlatmaya bak. Arçelik 09340–24340 kılavuzunda otomatik başlatma fabrika ayarıdır, düğme 6 saniye basılı tutularak kapatılır. Vestel Nova Inverter 12 de kaldığı yerden devam eder."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #213 Salı paketi; BOSLUK.md sürüm 4 #291 "klima kendi kendine açılıyor / duruyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: vestel-klima-kendiliginden-kapaniyor (yalnız Vestel, kapanma niyeti), klima-saatte-ne-kadar-elektrik-harcar.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "klima kendi kendine" #1 "…açılıyor", #2 "…kapanıp açılıyor", #3 "…açılır mı", #4 "…duruyor", #6 "…neden açılıp kapanır"; "klima kendiliğinden açılıyor" #1. GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Arçelik 09340 / 12340 / 18340 / 24340 split klima kullanma kılavuzu (36 s. PDF) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20170709223782_User%20Manual%20-%20Filetr_TR.pdf md5 b32d672736be2af608f33e697848e8e3 — PDF s.22, 23, 24 · (B) Vestel Nova Inverter 12 klima kullanım kılavuzu 20234421_k (40 s. PDF) https://statik.vestel.com.tr/webfiles/20234421_k.pdf md5 8814dd2a3ddbfd95d191e6e3b3af5d7e — PDF s.7, 10, 28, 29, 33, 34, 35.
# BİLEREK YAZILMAYANLAR: kart, sensör, kumanda alıcısı arızası teşhisi (servis) · Wi-Fi uygulamasıyla zamanlama (belgede tarif yok) · Arçelik sorun tablosunun bozuk kodlu satırları (metin okunamadı) · fiyat (#46).
# Alıntı denetimi: klima-kendi-kendine-aciliyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Klimanın kullanma kılavuzu"]
steps:
  - "Kumanda ekranında zamanlayıcı ya da uyku simgesi var mı, bak."
  - "Kurulu otomatik açma ya da kapama saatini iptal et."
  - "Kumandanın saatini ve sabah-akşam ayarını düzelt."
  - "Uyku modunun süresini kontrol et."
  - "Açılma elektrik kesintisinden sonra mı oldu, hatırla."
  - "İstersen otomatik yeniden başlatmayı kapat."
  - "Sorun sürerse yetkili servise başvur."
faq:
  - q: "Klima neden kendi kendine açılır?"
    a: "İki kılavuzda iki ana neden var: kumandadan kurulmuş otomatik açma saati ve elektrik geri geldiğinde klimanın önceki ayarla yeniden çalışması. Arçelik bu otomatik başlatmanın fabrika varsayılan ayarı olduğunu yazıyor."
  - q: "Elektrik gidip gelince klima neden açılıyor?"
    a: "Vestel kılavuzuna göre enerji kesintisinin ardından enerji geri geldiğinde klima kaldığı yerden çalışmaya devam eder. Arçelik de klimanın elektrik kesilmeden önceki ayarlarla başladığını, kompresörün 2,5-3 dakika sonra devreye girdiğini yazıyor."
  - q: "Otomatik yeniden başlatma nasıl kapatılır?"
    a: "Arçelik kılavuzunda yatay kanatçığı açıp Açma/Kapatma düğmesini 6 saniye basılı tutuyorsun; cihaz 2 kez bip sesi çıkarır, ışık 4 kez yanıp söner. 3-5 saniyede bırakırsan klima 18 dakikalık test çalışmasına geçer."
  - q: "Klima kurduğum saatte açılmıyor ya da yanlış saatte açılıyor, neden?"
    a: "Arçelik klima program ayarında kumandanın saatini esas aldığı için saatin ve sabah-akşam (AM/PM) ayarının doğru olmasını istiyor. Kumanda saati yanlışsa klima beklemediğin saatte açılabilir."
images:
  coverAlt: "Duvarda sade split klima ve yanında küçük saat çizimi"
  steps:
    - "Klima kumandasının ekranına bakan beyaz eldivenli sade siluet el"
    - "Kumandadaki zamanlayıcı tuşuna basan beyaz eldivenli sade siluet el"
    - "Kumanda üzerinde saat ayarı yapan beyaz eldivenli sade siluet el"
    - "Yatak başında kumandayı tutan beyaz eldivenli sade siluet el"
    - "Duvardaki sigorta kutusuna bakan beyaz eldivenli sade siluet el"
    - "Klimanın ön kapağını kaldırıp düğmeye uzanan beyaz eldivenli sade siluet el"
    - "Telefonu ve kılavuzu tutan beyaz eldivenli sade siluet el"
---

Klima kimse dokunmadan açılıyorsa çoğu zaman sebep bir ayardır: kumandada kurulu bir otomatik açma saati ya da elektrik geri geldiğinde klimanın önceki ayarla yeniden başlaması. Arçelik 09340–24340 serisi klima kılavuzu bu otomatik başlatmanın fabrika varsayılan ayarı olduğunu, elektrik gelince kompresörün 2,5-3 dakika sonra devreye girdiğini yazıyor.

Vestel Nova Inverter 12 kılavuzu da enerji yeniden geldiğinde klimanın kaldığı yerden çalışmaya devam ettiğini söylüyor; otomatik kapatma için 30 dakika ile 5 saat arasında beş süre sunuyor. Kendi klimanın kılavuzu farklı tuş ya da süre veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız kumanda ve ayar kontrollerini anlatıyor. Kart, sensör ya da kablo arızası, iç ünitenin sökülmesi ve elektrik tesisatı yetkili servis işidir.

## Klima kendi kendine neden açılır ya da kapanır?

| Durum | Arçelik 09340–24340 | Vestel Nova Inverter 12 |
|---|---|---|
| Kurulu saatte açılma | Otomatik açılma/kapanma fonksiyonu | Otomatik açma kapatma işlevi |
| Süre sonunda kapanma | Uyku modu 1-7 saat | Otomatik kapatma: 30 dakika, 1, 2, 3, 5 saat |
| Elektrik gelince açılma | Otomatik başlatma, fabrika ayarı | Kaldığı yerden devam eder |
| Kapatıp açınca gecikme | Kompresör 2,5-3 dakika sonra | Kompresör koruması 3 dakika |

## Adım adım: klima kendi kendine açılıyorsa ne yapılır?

**1. Kumanda ekranında zamanlayıcı ya da uyku simgesi var mı, bak.** Arçelik otomatik açılma ve kapanmanın, sen evde yokken ya da uyurken klimanın kendiliğinden açılıp kapanmasını sağladığını yazıyor. Simge ekrandaysa açılma büyük olasılıkla bu programdandır.

**2. Kurulu otomatik açma ya da kapama saatini iptal et.** Arçelik'te ayarı kumandadaki ilgili tuşa basarak iptal edersin. Vestel'de aynı düğmeye yeniden basarsan ya da klimayı ayarlanan saatten önce açarsan ayar iptal olur. Vestel sorun tablosu, klima beklenen saatte açılmıyorsa belirlenen zamana henüz ulaşılmamış olabileceğini, beklemeni ya da ayarı iptal etmeni söylüyor.

**3. Kumandanın saatini ve sabah-akşam ayarını düzelt.** Arçelik klima programı kumandanın saatini esas aldığı için saatin doğru ayarlanmasının büyük önem taşıdığını, AM (öğleden önce) ve PM (öğleden sonra) ibarelerine dikkat etmeni istiyor.

**4. Uyku modunun süresini kontrol et.** Arçelik'te uyku modu 1-7 saat arasında kurulur ve belirlediğin süre sonunda klima durur. Uyku modunda Arçelik soğutmada ayarı 30 dakika sonra 1°C, 1 saat sonra 2°C yükseltiyor; ısıtmada 60 dakika sonra 1°C, 2 saat sonra 2°C düşürüyor. Vestel uyku moduyla otomatik kapamanın birlikte çalışabildiğini, uyku moduna aldıktan sonra otomatik kapama kurabileceğini yazıyor. Gece kapanma bu ayardan geliyorsa arıza değildir.

**5. Açılma elektrik kesintisinden sonra mı oldu, hatırla.** Vestel enerji kesintisinden sonra klimanın en son çalıştığı modda başladığını, kesinti sürerken evden çıkacaksan klimanın otomatını kapalı konuma getirmeni istiyor. Gök gürültülü havada da sigortayı ya da şalteri indirerek güç bağlantısını kesmeni öneriyor.

**6. İstersen otomatik yeniden başlatmayı kapat.** Arçelik'te yatay kanatçığı aç, Açma/Kapatma düğmesini 6 saniye basılı tut; cihaz 2 kez bip sesi çıkarır, ışık 4 kez yanıp söner. Aynı işlem fonksiyonu yeniden açar. Düğmeyi 3-5 saniyede bırakırsan klima test çalışmasına geçer ve 18 dakika kuvvetli hava üfler; süreyi tam tut.

**7. Sorun sürerse yetkili servise başvur.** Zamanlayıcı kapalı, saat doğru ve kesinti yokken klima yine kendiliğinden açılıp kapanıyorsa Vestel iletişim merkezine ya da en yakın yetkili servise başvurmanı istiyor. Kumanda alıcısına, karta ya da kablolara kendin müdahale etme.

## Kapatıp hemen açınca klima neden çalışmıyor?

Bu kendiliğinden kapanma değildir. Vestel sorun tablosu kompresör koruması için 3 dakikalık beklemeyi gösteriyor. Arçelik de elektrik gelince ilk kalkışta fanın en düşük hızda çalıştığını, kompresörün 2,5-3 dakika sonra devreye girdiğini, ardından fan hızının önceki ayara döndüğünü yazıyor. Birkaç dakika beklemek yeterli.

## Otomatik başlatma açık kalırsa sorun olur mu?

İki kılavuz da bunu bir özellik olarak anlatıyor; Arçelik'te fabrika varsayılan ayarıdır. Uzun süre evde olmayacaksan ve elektrik gidip gelebiliyorsa Vestel'in önerisine uyup klimanın otomatını kapatman, boş evde klimanın çalışmasını önler. Klimanın tüketimi için [klima saatte ne kadar elektrik harcar](/blog/klima-saatte-ne-kadar-elektrik-harcar/) yazısına bakabilirsin.

## Bu konuda hangi yazılara bakılır?

Vestel klimada kapanma tarafının ayrıntısı, buz çözme ve voltaj koruması için [Vestel klima kendiliğinden kapanıyor](/blog/vestel-klima-kendiliginden-kapaniyor/) yazısını kullan.

---

**Kaynak künyesi.** Otomatik açılma ve kapanma, uyku modu, otomatik başlatma ve iptal bilgisi Arçelik 09340 / 12340 / 18340 / 24340 klima kullanma kılavuzundan; otomatik kapatma süreleri, enerji kesintisi ve sorun tablosu Vestel Nova Inverter 12 klima kullanım kılavuzundan alınmıştır. Kendi klimanın kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu kontrollerden sonra da klima kendiliğinden açılıp kapanıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
