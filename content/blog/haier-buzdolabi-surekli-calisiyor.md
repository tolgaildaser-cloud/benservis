---
title: "Haier buzdolabı sürekli çalışıyor"
description: "Haier buzdolabı sık sık ya da çok uzun çalışıyorsa Haier kılavuzundaki sebepler: ortam sıcaklığı, ilk soğuma, kapı, dondurucu ayarı, conta ve havalandırma."
slug: "haier-buzdolabi-surekli-calisiyor"
date: "2026-10-03"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu ek iş, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/cok-kapili/34005004/hcr5919enmp/  md5 4f81b4464db0cdfbb06c2800c37c9a1a
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2026/2/17709677/MAN-000176823_007  616 s. çok dilli (model listesinde HCR5919ENMP)  md5 ef65ee3c32c88974b4c6a9b6c9231c3d
#   TR bölümü PDF s.351-~388; sayfa = PDF sayfası. pdftotext -layout. Web araması yok.
# Ana satır (s.376): "Cihaz sık sık çalışıyor veya çok uzun süre çalışıyor." · "İç veya dış ortam sıcaklığı çok yüksek. → Bu durumda cihazın daha uzun süre çalışması normaldir."
#   · "Cihaz bir süredir kapalı durumda. → Normalde, cihazın tamamen soğuması 8 ila 12 saat alır." · "Cihazın bir kapısı/çekmecesi sıkıca kapatılmamış. → Kapıyı/çekmeceyi kapatın ve cihazın düz bir zemine yerleştirildiğinden ve kapıyı sarsan yiyecek veya kap olmadığından emin olun."
#   · "Kapı/çekmece çok sık veya çok uzun süre açıldı. → Kapıyı/çekmeceyi çok sık açmayın." · "Dondurucu bölmesi için sıcaklık ayarı çok düşük. → Uygun bir buzdolabı sıcaklığı elde edilene kadar sıcaklığı daha yükseğe ayarlayın. Buzdolabı sıcaklığının sabit hale gelmesi 24 saat sürer."
#   · "Kapı/çekmece contası kirli, aşınmış, çatlamış veya uyumsuz. → Kapı/çekmece contasını temizleyin veya müşteri hizmetleri tarafından değiştirilmesini sağlayın." · "Gerekli hava sirkülasyonu sağlanmamış. → Yeterli havalandırma sağlayın."
# Diğer: s.364 dondurucu "B" düğmesi; "maksimum -14°C'den minimum -24°C'ye 1°C'lik kademeler" · "Dondurucudaki optimum sıcaklık -18°C'dir. Daha düşük sıcaklıklar, gereksiz enerji tüketimi anlamına gelir." · s.368 "Super-Freeze işlevi 50 saat sonra otomatik olarak kapatılacaktır."
#   · s.373 "POWER- FREEZE gibi işlevler daha fazla enerji tüketir." · "Cihazı doğrudan güneş ışığı alan bir yere veya ısı kaynaklarının (örn. soba, ısıtıcı) yakınına kurmayın." · "Sıcak yiyecekleri cihaza yerleştirmeden önce soğumaya bırakın." · "Hava akışını engellememek için cihazı aşırı doldurmayın."
#   · s.379 "oda sıcaklığı her zaman 10°C ile 43 °C arasında olmalıdır" · "Cihazı izolasyonu olmayan diğer ısı yayan cihazların (fırınlar, buzdolapları) yanına kurmayın." · s.378 "Akan suya benzer hafif bir ses" / "Hafif bir uğultu" → "Bu normaldir." / "Yoğuşma önleyici sistem çalışıyor." · s.377 "Kabinin kenarları ve kapı şeridi ısınıyor." → "Bu normaldir." · s.362 "doğru sıcaklıklara ulaşılması 12 saate kadar sürebilir."
# BİLEREK YAZILMAYANLAR: kompresör/fan/termostat teşhisi · cihazı yerinden çekme ve ayak/kapı ayarı adım olarak (kurulum; ayırıcıda "pense gibi aletler") · arka ızgara/kondenser temizliği (belgede bu bölümde yok) · fiyat.
# Alıntı denetim tablosu: haier-buzdolabi-surekli-calisiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (soğumayı bekleme hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Sünger", "Yumuşak bez"]
steps:
  - "Odanın çok sıcak olup olmadığına ve buzdolabının güneş, soba ya da fırın yanında durup durmadığına bak."
  - "Cihaz yeni çalıştırıldıysa ya da bir süre kapalı kaldıysa tamamen soğuması için 8-12 saat bekle."
  - "Kapı ve çekmecelerin sıkıca kapandığını, kapıyı iten yiyecek ya da kap olmadığını kontrol et."
  - "Kapıyı sık ve uzun süre açık tutmamaya dikkat et."
  - "B (Dondurucu) düğmesiyle dondurucu ayarını kontrol et; çok düşükse -18 °C civarına yükselt ve 24 saat bekle."
  - "Fişi çekip kapı contasını ılık suya batırılmış sünger ya da yumuşak havluyla temizle ve kurula; fişi takmadan önce en az 7 dakika bekle."
  - "Buzdolabının çevresinde havanın dolaşabileceği boşluk bırak ve içini aşırı doldurma."
faq:
  - q: "Haier buzdolabım neden hiç durmadan çalışıyor?"
    a: "Haier'in HCR5919 ailesini de kapsayan kılavuzunda 'Cihaz sık sık çalışıyor veya çok uzun süre çalışıyor' satırı yedi sebep sayıyor: iç ya da dış ortam sıcaklığının çok yüksek olması, cihazın bir süre kapalı kalmış olması, sıkı kapanmayan kapı ya da çekmece, kapının sık açılması, dondurucu ayarının çok düşük olması, kirli ya da bozuk conta ve yetersiz hava sirkülasyonu."
  - q: "Yaz aylarında daha uzun çalışması normal mi?"
    a: "Evet. Haier'e göre iç veya dış ortam sıcaklığı çok yüksekse cihazın daha uzun süre çalışması normal. Kılavuz oda sıcaklığının her zaman 10 °C ile 43 °C arasında olmasını istiyor."
  - q: "Yeni aldığım buzdolabı ne kadar süre çalışır?"
    a: "Kılavuza göre cihaz bir süre kapalı kaldıysa tamamen soğuması normalde 8 ila 12 saat alıyor. Güç bağlantısı kesildikten sonra açıldığında doğru sıcaklıklara ulaşması 12 saate kadar sürebiliyor."
  - q: "Super-Freeze'i açık unuttum, sorun olur mu?"
    a: "Haier'e göre Super-Freeze işlevi 50 saat sonra otomatik olarak kapanıyor ve cihaz önceden ayarlanan sıcaklıkta çalışmaya devam ediyor. Kılavuz Power-Freeze gibi işlevlerin daha fazla enerji tükettiğini de yazıyor."
  - q: "Buzdolabından su akar gibi ses ve uğultu geliyor, arıza mı?"
    a: "Kılavuzun tablosuna göre akan suya benzer hafif bir ses normal; hafif bir uğultu da yoğuşma önleyici sistemin çalışmasından kaynaklanıyor ve normal. Kabinin kenarlarının ve kapı şeridinin ısınması da tabloda 'Bu normaldir' diye geçiyor."
images:
  coverAlt: "Mutfakta güneş alan bir pencerenin yanında duran çok kapılı gri buzdolabı ve önündeki boş zemin"
---

Buzdolabının sesi kesilmiyor, motor sanki hiç durmuyor. Haier'in HCR5919 ailesini de kapsayan kılavuzunda bu durumun satırı **"Cihaz sık sık çalışıyor veya çok uzun süre çalışıyor."** Haier'in bu satırda saydığı yedi sebepten ikisi aslında arıza değil: **iç veya dış ortam sıcaklığı çok yüksek** ise ve **cihaz bir süredir kapalı** kaldıysa uzun çalışma beklenen bir durum. Kalan beş sebep evde kontrol edilebilir: **sıkıca kapatılmamış kapı/çekmece**, **çok sık açılan kapı**, **çok düşük dondurucu ayarı**, **kirli ya da bozuk conta** ve **sağlanmamış hava sirkülasyonu.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak oda ve ilk soğuma (8-12 saat) normaldir. Kapıyı iten bir şey var mı bak, kapıyı az aç, dondurucuyu -18 °C civarına getirip 24 saat bekle, contayı temizle, cihazın çevresinde hava dolaşsın.

## Adım adım: evde denenecekler

**1. Odayı ve yerini değerlendir.** Haier'in ilk satırı: **iç veya dış ortam sıcaklığı çok yüksek** ise **cihazın daha uzun süre çalışması normaldir.** Kurulum bölümü oda sıcaklığının **10°C ile 43 °C arasında** olmasını istiyor; cihazı **doğrudan güneş ışığı alan bir yere** ya da **soba, ısıtıcı** gibi ısı kaynaklarının, **fırın** gibi ısı yayan cihazların yanına kurmamanı öneriyor.

**2. İlk soğumayı bekle.** Tablodaki ikinci sebep: **cihaz bir süredir kapalı durumda.** Haier'e göre **normalde, cihazın tamamen soğuması 8 ila 12 saat** alıyor. Yeni kurulan ya da temizlik için kapatılan buzdolabında bu süre dolmadan karar verme.

**3. Kapıyı neyin ittiğine bak.** Haier'in kapı satırı daha ayrıntılı: **kapıyı/çekmeceyi kapatın** ve **cihazın düz bir zemine yerleştirildiğinden** ve **kapıyı sarsan yiyecek veya kap olmadığından** emin olun. Kapı rafındaki uzun bir şişe ya da öne taşan bir kap, kapıyı fark edilmeyecek kadar aralık bırakabilir.

**4. Kapıyı az aç.** Haier'e göre **kapı/çekmece çok sık veya çok uzun süre açıldı** ise cihaz daha çok çalışır; çözüm **kapıyı/çekmeceyi çok sık açmayın.** Enerji ipuçlarına göre **sıcak yiyecekleri** de cihaza koymadan önce **soğumaya bırak.**

**5. Dondurucu ayarını yükselt.** Tablodaki sebep: **dondurucu bölmesi için sıcaklık ayarı çok düşük.** Haier'in çözümü: **uygun bir buzdolabı sıcaklığı elde edilene kadar sıcaklığı daha yükseğe ayarlayın.** Dondurucu **"B" (Dondurucu)** düğmesiyle **-14°C ile -24°C arasında 1°C'lik** kademelerle ayarlanıyor; Haier'e göre **dondurucudaki optimum sıcaklık -18°C** ve **daha düşük sıcaklıklar gereksiz enerji tüketimi** demek. Ayardan sonra sabırlı ol: **buzdolabı sıcaklığının sabit hale gelmesi 24 saat sürer.**

**6. Contayı temizle.** Haier'e göre **kapı/çekmece contası kirli, aşınmış, çatlamış veya uyumsuz** olabilir; çözüm **kapı/çekmece contasını temizleyin.** Temizlikten önce cihazı **güç kaynağından ayır**, contayı **ılık suya batırılmış süngerle** ya da **yumuşak bir havluyla** sil, sonra kurula. Fişi tekrar takmadan önce **en az 7 dakika** bekle; kılavuza göre sık çalıştırma kompresöre zarar verebilir.

**7. Havanın dolaşmasına izin ver.** Son sebep: **gerekli hava sirkülasyonu sağlanmamış** → **yeterli havalandırma sağlayın.** Kurulum bölümü güvenlik için **gerekli havalandırma kesitlerine** uyulmasını istiyor. Enerji ipuçları da **hava akışını engellememek için cihazı aşırı doldurmamanı** öneriyor.

## Normal sayılan çalışma ve sesler

Haier'in tablosuna göre bazı şeyler arıza değildir: **akan suya benzer hafif bir ses** normal; **hafif bir uğultu** **yoğuşma önleyici sistemin** çalıştığını gösteriyor; **kabinin kenarları ve kapı şeridinin ısınması** da normal. **Super-Freeze** açık kaldıysa merak etme: kılavuza göre işlev **50 saat sonra otomatik olarak** kapanıyor. Yine de **Power-Freeze gibi işlevler daha fazla enerji tüketir.**

İçerisi aynı zamanda yeterince soğumuyorsa [Haier buzdolabı soğutmuyor](/blog/haier-buzdolabi-sogutmuyor/), dondurucu buz tutuyorsa [Haier buzdolabı buzlanma yapıyor](/blog/haier-buzdolabi-buzlanma-yapiyor/) yazısına bak. Markadan bağımsız anlatım için [buzdolabı hiç durmuyor](/blog/buzdolabi-hic-durmuyor/) yazısı var.

## Ne zaman servis

Conta **aşınmış, çatlamış veya uyumsuzsa** Haier'in çözümü **müşteri hizmetleri tarafından değiştirilmesini sağlayın.** Kılavuz, uygun olmayan onarımlar ciddi hasara yol açabileceği için **elektrikli ekipmanın servisinin yalnızca kalifiye elektrik uzmanları tarafından** yapılmasını istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Oda sıcaklığı normal, 12 saatlik ilk soğuma geçti, kapılar sıkı kapanıyor, dondurucu -18 °C civarında ve conta temiz olduğu hâlde cihaz hiç durmuyorsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
