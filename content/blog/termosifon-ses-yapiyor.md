---
title: "Termosifon ses yapıyor: Vestel kılavuzuna göre nedenleri"
description: "Termosifon sesli çalışıyorsa Vestel kılavuzu üç neden sayıyor: kireçli rezistans, ventilde kireç ya da kum, düzensiz basınç. Ne yapılır, ne zaman servis?"
slug: "termosifon-ses-yapiyor"
date: "2026-11-10"
category: "Kombi/Termosifon"
updated: "2026-11-10"
kisaCevap: "Vestel 20214615 sorun tablosu sesli çalışma için üç neden sayıyor: kireçlenmiş rezistans, emniyet ventilinde kireç ya da kum, düzensiz şebeke basıncı. İlk ikisi servis işi, üçüncüsünde basınç regülatörü taktırılır. Sesle birlikte duman ya da koku varsa cihazı hemen kapat."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 4; BOSLUK.md sürüm 4 #335 "termosifon ses yapıyor / öter / sesli çalışıyor"; ⚠ #90'da ikinci belge yokluğundan düşmüştü). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: termosifon-suyu-isitmiyor, termosifon-emniyet-ventili-su-damlatiyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-detay.txt): "termosifon ses" #1 "termosifon ses çıkarıyor", #2 "termosifon sesli çalışıyor", #3 "termosifon ses gelmesi", #4 "elektrikli termosifon ses yapıyor", #5 "termosifon neden ses çıkarır"; "termosifon neden" #3 "…neden ses yapar", #4 "…neden öter". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Vestel elektrikli termosifon kullanım kılavuzu 20214615_k (24 s. PDF) https://statik.vestel.com.tr/webfiles/20214615_k.pdf md5 5b2d7d441b5c5d5fc6b34451d428e8e0 — PDF s.8, 14, 16, 18 · (B) Arçelik T 7350 SM E / T 7365 SM E / T 7380 SM E elektrikli termosifon kullanma kılavuzu (20 s. PDF) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201701250927303_User%20Manual%20-%20Filetr_TR.pdf md5 284ff9d02e4e70d3947c1ee13a56df29 — PDF s.4, 5 (yalnız basınç düşürücü ve emniyet ventili; ses satırı B'de yok).
# ⚠ Ses tarifi tek belgede (A). B yalnız basınç ve ventil bilgisini destekliyor. "Öter" (dijital modellerin sesli ikazı) bu iki belgede yok, yazılmadı.
# BİLEREK YAZILMAYANLAR: sesin türüne göre teşhis (tıkırtı, ıslık, kaynama; belgede yok) · ventil ya da rezistans sökme (servis) · basınç regülatörü montajı (tesisatçı) · fiyat (#46).
# Alıntı denetimi: termosifon-ses-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Termosifonun kullanma kılavuzu", "Kâğıt ve kalem"]
steps:
  - "Sesle birlikte duman ya da koku varsa cihazı kapatıp elektriği kes."
  - "Sesin ne zaman çıktığını not et."
  - "Emniyet ventilindeki damlamayı normal sesle karıştırma."
  - "Ayda bir ventil mandalını kaldırıp suyun aktığını gör."
  - "Su geç ısınıyorsa kireç ihtimalini not et."
  - "Şebeke basıncının yüksek ya da düzensiz olup olmadığını sor."
  - "Ses sürüyorsa servis çağır."
faq:
  - q: "Termosifon neden sesli çalışır?"
    a: "Vestel 20214615 kılavuzunun sorun tablosunda üç neden var: kireçlenmiş rezistans, emniyet ventili içinde kireç ya da kum parçası, düzensiz şebeke basıncı dağılımı."
  - q: "Termosifondan ses geliyorsa tehlikeli mi?"
    a: "Vestel kılavuzu cihazdan garip bir ses, duman ve koku gelirse cihazı hemen kapatmanı, güç bağlantısını kesmeni ve yetkili servisle irtibata geçmeni istiyor. Sesle birlikte duman ya da koku varsa bekleme."
  - q: "Termosifon sesini kendim giderebilir miyim?"
    a: "Kılavuz kireç ve ventil nedenlerinde servis çağırmanı istiyor. Basınç düzensizse çözüm basınç regülatörü taktırmak. Senin yapabileceğin, ayda bir emniyet ventili mandalını kaldırıp suyun aktığını görmek."
  - q: "Şebeke basıncı ne zaman yüksek sayılır?"
    a: "Arçelik T 7350 SM E kılavuzu şebeke suyu basıncı 6 bar işletme basıncını geçerse emniyet ventilinden önce soğuk su hattına bir basınç düşürücü bağlanmasını istiyor. Basınç düşürücü sayaç yakınında olmalı."
images:
  coverAlt: "Duvarda sade termosifon ve yanında ses dalgası simgesi çizimi"
  steps:
    - "Duvardaki şalteri aşağı indiren beyaz eldivenli sade siluet el"
    - "Termosifonun önünde not defterine yazan beyaz eldivenli sade siluet el"
    - "Emniyet ventiline bağlı hortumun ucunu gösteren beyaz eldivenli sade siluet el"
    - "Emniyet ventilinin mandalını kaldıran beyaz eldivenli sade siluet el"
    - "Musluktan akan suyun sıcaklığını yoklayan beyaz eldivenli sade siluet el"
    - "Su sayacının yanındaki boruyu gösteren beyaz eldivenli sade siluet el"
    - "Telefonu ve kılavuzu tutan beyaz eldivenli sade siluet el"
---

Termosifondan ses geliyorsa ve sesle birlikte duman ya da koku varsa cihazı hemen kapat ve şalterden elektriği kes; Vestel'in 20214615 numaralı elektrikli termosifon kılavuzu bu durumda yetkili servisle irtibata geçmeni istiyor. Duman ya da koku yoksa aynı kılavuzun sorun tablosu termosifonun sesli çalışması için üç neden sayıyor: kireçlenmiş rezistans, emniyet ventili içinde kireç ya da kum parçası, düzensiz şebeke basıncı dağılımı.

Kılavuz ilk iki neden için servis çağırmanı, üçüncüsü için basınç regülatörü taktırmanı yazıyor. Arçelik T 7350 SM E kılavuzu da şebeke suyu basıncı 6 bar işletme basıncını geçerse soğuk su hattına basınç düşürücü bağlanmasını istiyor. Kendi termosifonunun kılavuzu farklı bir tablo veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız gözlem ve emniyet ventili kontrolünü anlatıyor. Vestel kılavuzu cihazın içinde kullanıcının müdahale edebileceği parça bulunmadığını yazıyor. Rezistans, emniyet ventili değişimi ve basınç regülatörü montajı yetkili servis ya da tesisatçı işidir.

## Termosifon neden ses yapar?

| Vestel sorun tablosundaki neden | Kılavuzun çözümü | Kim yapar |
|---|---|---|
| Rezistans kireçlenmiş olabilir | Servis çağırın | Yetkili servis |
| Emniyet ventili içinde kireç ya da kum parçası bulunabilir | Servis çağırın | Yetkili servis |
| Şebeke basıncı dağılımı düzensiz olabilir | Basınç regülatörü taktırın | Tesisatçı / servis |
| Garip ses, duman ve koku birlikte | Cihazı hemen kapat, güç bağlantısını kes | Sen, sonra servis |

Kılavuz sesin türüne (tıkırtı, ıslık, kaynama) göre ayrı bir neden yazmıyor; bu yazı da öyle bir ayrım yapmıyor. Servise anlatırken sesi kendi kelimelerinle tarif etmen ve ne zaman duyduğunu söylemen yeterli.

## Adım adım: termosifon ses yapıyorsa ne yapılır?

**1. Sesle birlikte duman ya da koku varsa cihazı kapatıp elektriği kes.** Vestel kılavuzu cihazdan garip bir ses, duman ve koku gelirse cihazı hemen kapatmanı, güç bağlantısını kesmeni ve yetkili servisle irtibata geçmeni istiyor. Kılavuz ıslak ve nemli ellerle cihaza dokunmamanı da yazıyor.

**2. Sesin ne zaman çıktığını not et.** Sesin ısıtma sırasında mı, musluk açıldığında mı, yoksa cihaz beklerken mi geldiğini yaz. Vestel'de ısıtma sırasında sol alt köşedeki rezistans işareti yanar; sesin bu işaretle birlikte başlayıp başlamadığını görmek, servise anlatırken işini kolaylaştırır.

**3. Emniyet ventilindeki damlamayı normal sesle karıştırma.** Vestel termosifon çalışırken basınç artışı olduğunu ve emniyet ventilinden su damlamasının normal olduğunu yazıyor; ventil kazan iç basıncı yükselince su akıtarak basıncı dengeler. Arçelik de yüksek su basınçlarında ventilden güvenlik amacıyla su akacağını, bunun arıza olmadığını söylüyor. Ayrıntısı [termosifon emniyet ventili su damlatıyor](/blog/termosifon-emniyet-ventili-su-damlatiyor/) yazısında.

**4. Ayda bir ventil mandalını kaldırıp suyun aktığını gör.** Vestel emniyet ventilinin çalışmasını kontrol etmek için ayda bir kere mandalın dik konuma getirilip suyun aktığının görülmesini tavsiye ediyor. Mandal kalkmıyorsa ya da su hiç akmıyorsa bunu not et; ventilin içindeki kireç ya da kum kılavuzun saydığı nedenlerden biri ve çözümü servis.

**5. Su geç ısınıyorsa kireç ihtimalini not et.** Vestel sorun tablosu suyun geç ısınması için de rezistansın kireçlenmiş olabileceğini yazıyor. Ses ile geç ısınma birlikteyse servise ikisini birden söyle. Kılavuz şebeke suyunun sertliğine bağlı olarak rezistans kirecinin her iki yılda bir temizlenmesini tavsiye ediyor.

**6. Şebeke basıncının yüksek ya da düzensiz olup olmadığını sor.** Arçelik kılavuzu basınç 6 bar işletme basıncını geçerse emniyet ventilinden önce soğuk su hattına basınç düşürücü bağlanmasını, bunun cihazdan mümkün olduğunca uzakta sayaç yakınında olmasını istiyor. Bina yönetimine ya da tesisatçına basıncı ölçtür; regülatör montajı kullanıcı işi değil.

**7. Ses sürüyorsa servis çağır.** Vestel kılavuzu arıza halinde cihazı kendin tamir etmeye kalkışmamanı yazıyor. Sorun tablosundaki çözümlerden sonra cihaz normal çalışmıyorsa İletişim Merkezi ile irtibata geçmeni istiyor.

## Termosifondan ses gelirken su da çok sıcak akıyorsa ne demek?

Vestel sorun tablosunda termosifonun suyu aşırı ısıtması (su buharlı akması) ayrı bir satır ve nedeni cihazda kireçlenmenin artmış olabilmesi; çözüm yine servis. Kılavuza göre aşırı ısınmada limit termostat rezistansı devreden çıkararak emniyeti sağlar. Su ılık geliyorsa [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/), emniyetlerin görevi için [termosifon nasıl çalışır](/blog/termosifon-nasil-calisir/) yazısına bak.

---

**Kaynak künyesi.** Sesli çalışma nedenleri, garip ses, duman ve koku uyarısı, emniyet ventili ve limit termostat bilgisi Vestel 20214615 elektrikli termosifon kullanım kılavuzundan; 6 bar basınç düşürücü ve emniyet ventili notu Arçelik T 7350 / T 7365 / T 7380 SM E elektrikli termosifon kullanma kılavuzundan alınmıştır. Kendi termosifonunun kılavuzu farklı bir tablo veriyorsa **kendi kılavuzun esastır.**

Ses kesilmiyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
