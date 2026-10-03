---
title: "Haier buzdolabı soğutmuyor"
description: "Haier buzdolabının içi yeterince soğuk değilse Haier kılavuzundaki sebepler: sıcaklık ayarı, Holiday modu, sıcak ürün, aşırı yük, hava boşluğu ve kapı."
slug: "haier-buzdolabi-sogutmuyor"
date: "2026-10-03"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/cok-kapili/34005004/hcr5919enmp/  md5 4f81b4464db0cdfbb06c2800c37c9a1a
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2026/2/17709677/MAN-000176823_007  616 s. (çok dilli; HCR5919 ailesi dahil model listesi)  md5 ef65ee3c32c88974b4c6a9b6c9231c3d
#   TR bölümü PDF s.351-~390 (basılı sayfa no + 350). Sayfa atıfları = PDF sayfası. pdftotext -layout. Web araması yok.
# Ana satır (s.377): "Cihazın içi yeterince soğuk değil." · "Sıcaklık çok yüksek ayarlanmış. → Sıcaklığı sıfırlayın." · "Çok sıcak ürünler saklanmış. → Ürünleri saklamadan önce daima soğutun."
#   · "Bir seferde çok fazla yiyecek depolanmış. → Her zaman az miktarda yiyecek saklayın." · "Ürünler birbirine çok yakın. → Birkaç yiyecek arasında hava akışına izin verecek bir boşluk bırakın."
#   · "Cihazın bir kapısı/çekmecesi sıkıca kapatılmamış. → Kapıyı/çekmeceyi kapatın." · "Kapı/çekmece çok sık veya çok uzun süre açıldı. → Kapıyı/çekmeceyi çok sık açmayın."
# Diğer: s.376 "Kompresör çalışmıyor." → fiş / "Cihaz buz çözme döngüsünde. → Otomatik buz çözme için bu normaldir." · "Buzdolabı sıcaklığının sabit hale gelmesi 24 saat sürer." · "cihazın tamamen soğuması 8 ila 12 saat alır." · conta "müşteri hizmetleri tarafından değiştirilmesini sağlayın" · "Yeterli havalandırma sağlayın."
#   · s.378 "İç aydınlatma veya soğutma sistemi çalışmıyor." → fiş · "Odanın elektrik beslemesini kontrol edin." · s.362 "önerilen 5°C (buzdolabı) ve -18°C (dondurucu)" · "doğru sıcaklıklara ulaşılması 12 saate kadar sürebilir." · panel kilidi
#   · s.363 "Kilitliyse "F" düğmesine basarak panelin kilidini açın." · "A" (Soğutucu) · "maksimum 9°C'den minimum 1°C'ye 1°C'lik kademeler" · "Buzdolabındaki optimum sıcaklık 4 °C'dir." · s.364 "Başka bir işlev (Power-Freeze, Super-Cool, Holiday veya Auto Set modu) etkinleştirilirse ... ilgili bölmedeki sıcaklık ayarlanamaz."
#   · s.365 Holiday "buzdolabı sıcaklığını kalıcı olarak 17°C'ye ayarlar." · ""c1" göstergesi yanar" · "Yukarıdaki adımlar tekrarlanarak veya başka bir işlev seçilerek bu işlev tekrar kapalı duruma getirilebilir." · s.369 "hava kanalı veya sensörler arasındaki mesafeyi 10 mm'den fazla tutun." · "yiyecekleri arka duvara dayalı olarak saklamayın"
#   · s.373 "Cihazı doğrudan güneş ışığı alan bir yere veya ısı kaynaklarının (örn. soba, ısıtıcı) yakınına kurmayın." · "Kapının her zaman doğru şekilde kapanması için kapı contalarını temiz tutun." · s.374 "cihazı yeniden başlatmadan önce en az 7 dakika bekleyin."
# BİLEREK YAZILMAYANLAR: gaz/kompresör/fan teşhisi (belgede yok) · conta değişimi (servis) · cihazı yerinden taşıma/kurulum boşlukları (KURULUM bölümü; bu yazıda adım değil) · fiyat.
# Alıntı denetim tablosu: haier-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (soğumayı bekleme hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Panel kilitliyse F düğmesiyle kilidi aç; ekranda c1 yanıyorsa Holiday işlevini kapat."
  - "A (Soğutucu) düğmesiyle buzdolabı sıcaklığını kontrol et ve 4 °C civarına ayarla."
  - "Sıcak yiyecekleri buzdolabına koymadan önce oda sıcaklığına soğut."
  - "Bir seferde çok fazla yiyecek koyma; fazlaysa bir kısmını çıkar."
  - "Yiyecekler arasında ve hava kanalı ile sensörlerin önünde 10 mm'den fazla boşluk bırak."
  - "Tüm kapı ve çekmecelerin sıkıca kapandığını kontrol et."
  - "Kapıyı sık ve uzun süre açmamaya dikkat et, sonra sıcaklığın oturması için 24 saat bekle."
faq:
  - q: "Haier buzdolabım neden yeterince soğutmuyor?"
    a: "Haier HCR5919 ailesini de kapsayan kılavuzun 'Cihazın içi yeterince soğuk değil' satırı altı sebep sayıyor: sıcaklık çok yüksek ayarlanmış, çok sıcak ürünler saklanmış, bir seferde çok fazla yiyecek depolanmış, ürünler birbirine çok yakın, bir kapı ya da çekmece sıkıca kapatılmamış ve kapı çok sık ya da çok uzun açılmış."
  - q: "Haier buzdolabı kaç derecede olmalı?"
    a: "Kılavuza göre cihaz fabrikada buzdolabı için 5 °C, dondurucu için -18 °C'ye ayarlı geliyor. Buzdolabındaki optimum sıcaklık 4 °C; daha düşük sıcaklıklar gereksiz enerji tüketimi anlamına geliyor. Buzdolabı 9 °C ile 1 °C arasında 1 °C'lik kademelerle ayarlanıyor."
  - q: "Ekranda c1 yazıyor ve içerisi ılık, neden?"
    a: "Haier'in anlatımına göre c1 göstergesi Holiday işlevinin açık olduğunu gösteriyor. Bu işlev buzdolabı sıcaklığını kalıcı olarak 17 °C'ye ayarlıyor ve Haier bu sırada soğutucu bölmesinde hiçbir ürün saklanmamasını istiyor. Aynı adımları tekrarlayarak ya da başka bir işlev seçerek kapatabilirsin."
  - q: "Sıcaklığı değiştiremiyorum, tuşlar çalışmıyor mu?"
    a: "Kılavuza göre kapılar kapalıyken 30 saniye hiçbir tuşa basılmazsa panel otomatik kilitlenir; F düğmesiyle kilidi açman gerekir. Ayrıca Power-Freeze, Super-Cool, Holiday ya da Auto Set modu etkinse ilgili bölmenin sıcaklığı ayarlanamaz, gösterge sesli uyarıyla yanıp söner."
  - q: "Elektrik kesildi, buzdolabı ne zaman eski sıcaklığına döner?"
    a: "Haier'e göre güç bağlantısı kesildikten sonra cihaz açıldığında doğru sıcaklıklara ulaşılması 12 saate kadar sürebilir. Güç geri geldiğinde cihaz kesintiden önceki ayarlarla devam ediyor."
images:
  coverAlt: "Kapısı açık çok kapılı bir buzdolabının raflarında aralarında boşluk bırakılarak dizilmiş kaplar ve şişeler"
---

Süt eskisi kadar soğuk değil, içerideki yiyecekler çabuk bozuluyor. Haier'in HCR5919 ailesini de kapsayan çok kapılı buzdolabı kılavuzunda bu durumun satırı **"Cihazın içi yeterince soğuk değil."** Haier bu satırda altı sebep sayıyor ve hepsi kullanımla ilgili: **sıcaklık çok yüksek ayarlanmış**, **çok sıcak ürünler saklanmış**, **bir seferde çok fazla yiyecek depolanmış**, **ürünler birbirine çok yakın**, **cihazın bir kapısı/çekmecesi sıkıca kapatılmamış** ve **kapı/çekmece çok sık veya çok uzun süre açıldı.** Kılavuz, bir sorunla karşılaşınca satış sonrası servise gitmeden önce **gösterilen tüm olasılıkları kontrol etmeni** istiyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Panel kilidini aç, Holiday (c1) açık mı bak, buzdolabını 4 °C civarına ayarla. Sıcak yemek koyma, aşırı doldurma, hava kanalının önünü boş bırak, kapıları sıkı kapat ve sıcaklığın oturması için 24 saat bekle.

## Adım adım: evde denenecekler

**1. Paneli aç, Holiday modunu kontrol et.** Haier'in paneli kapılar kapalıyken **30 saniye** hiçbir tuşa basılmazsa **otomatik olarak** kilitleniyor; kılavuzun her ayar adımı **"Kilitliyse "F" düğmesine basarak panelin kilidini açın."** diye başlıyor. Ekranda **"c1"** görüyorsan **Holiday işlevi** açık: Haier'e göre bu işlev **buzdolabı sıcaklığını kalıcı olarak 17°C'ye ayarlar** ve bu sırada **soğutucu bölmesinde hiçbir ürün saklanmamalıdır.** Kapatmak için aynı adımları tekrarla ya da **başka bir işlev seç.** Kılavuz, **Power-Freeze, Super-Cool, Holiday veya Auto Set** etkinken ilgili bölmenin sıcaklığının **ayarlanamayacağını** da yazıyor.

**2. Sıcaklığı ayarla.** Tablodaki ilk sebep: **sıcaklık çok yüksek ayarlanmış** → **sıcaklığı sıfırlayın.** Haier'de buzdolabı **"A" (Soğutucu)** düğmesiyle seçiliyor; her basışta sıcaklık **maksimum 9°C'den minimum 1°C'ye 1°C'lik kademeler halinde** düşüyor ve **5 saniye** içinde başka tuşa basılmazsa ayar onaylanıyor. Haier'e göre **buzdolabındaki optimum sıcaklık 4 °C'dir.**

**3. Sıcak yiyecek koyma.** İkinci sebep: **çok sıcak ürünler saklanmış** → **ürünleri saklamadan önce daima soğutun.** Saklama bölümü de sıcak yiyeceklerin **oda sıcaklığına soğutulmasını** istiyor.

**4. Aşırı doldurma.** Haier'e göre **bir seferde çok fazla yiyecek depolanmış** olabilir → **her zaman az miktarda yiyecek saklayın.** Kılavuzun saklama ipuçları da **aşırı miktarda yiyecek saklamamanı** öneriyor.

**5. Hava boşluğu bırak.** Dördüncü sebep: **ürünler birbirine çok yakın** → **birkaç yiyecek arasında hava akışına izin verecek bir boşluk bırakın.** Haier'in ölçüsü belli: soğutma etkisi için yiyecek ile **hava kanalı veya sensörler arasındaki mesafeyi 10 mm'den fazla** tut. Yiyecekleri **arka duvara dayalı olarak saklama**; kılavuza göre arka duvara yaslanan yiyecekler **donabilir.**

**6. Kapıları sıkı kapat.** Tablodaki sebep: **cihazın bir kapısı/çekmecesi sıkıca kapatılmamış** → **kapıyı/çekmeceyi kapatın.** Haier ayrıca **kapının her zaman doğru şekilde kapanması için kapı contalarını temiz** tutmanı istiyor. Kapı **1 dakikadan** fazla açık kalırsa kapı alarmı çalıyor.

**7. Kapıyı sık açma, sonra bekle.** Son sebep: **kapı/çekmece çok sık veya çok uzun süre açıldı** → **kapıyı/çekmeceyi çok sık açmayın.** Ayarı değiştirdikten sonra sabırlı ol: Haier'in tablosuna göre **buzdolabı sıcaklığının sabit hale gelmesi 24 saat sürer.**

## Kompresör sesi yoksa

Haier'in tablosunda **"Kompresör çalışmıyor"** satırı iki şey söylüyor: **elektrik fişi prize takılı değil** olabilir ya da **cihaz buz çözme döngüsünde**dir; ikincisi için kılavuzun cevabı **"Otomatik buz çözme için bu normaldir."** **İç aydınlatma veya soğutma sistemi çalışmıyorsa** fişi ve **odanın elektrik beslemesini** kontrol et. Elektrik kesintisinden sonra **doğru sıcaklıklara ulaşılması 12 saate kadar** sürebilir. Haier, cihazı kapatıp yeniden başlatmadan önce **en az 7 dakika** beklemeni istiyor; sık çalıştırma kompresöre zarar verebilir. Cihazı **doğrudan güneş ışığı alan bir yere veya ısı kaynaklarının yakınına** kurmamak da kılavuzun önerilerinden.

Markadan bağımsız anlatım için [buzdolabı soğutmuyor: nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/), [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) ve [buzdolabı raf düzeni ve duvar mesafesi](/blog/buzdolabi-raf-duzeni-ve-duvar-mesafesi/) yazıları var.

## Ne zaman servis

Kapı contası **kirli, aşınmış, çatlamış veya uyumsuzsa** Haier temizlemeni ya da **müşteri hizmetleri tarafından değiştirilmesini** istiyor; contayı kendin değiştirme. Kılavuzun uyarısı: **elektrikli ekipmanın servisi yalnızca kalifiye elektrik uzmanları tarafından yapılmalıdır.**

⛔ **Kendin-çöz sınırı burada biter.** Sıcaklık 4 °C civarında, Holiday kapalı, yükleme ve kapılar düzgün, 24 saat beklediğin hâlde içerisi soğumuyorsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
