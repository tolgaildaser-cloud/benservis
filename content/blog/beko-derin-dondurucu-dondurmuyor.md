---
title: "Beko derin dondurucu dondurmuyor"
description: "Beko sandık tipi derin dondurucu dondurmuyor ve kırmızı ışık yanıyorsa: düğme konumu, kapak, yerleşim, ısı kaynağı ve ilk çalıştırma süresi. Beko'nun listesi."
slug: "beko-derin-dondurucu-dondurmuyor"
date: "2026-10-03"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan (Beko'nun kendi alan adı) indirildi, HTTP 200, yönlendirme 0.
#   Web araması YALNIZ belgenin yerini bulmak için. Okuma pdftotext -layout; sayfa = PDF sayfası (basılı numara 2 eksik).
#  K1) BK 3315 A+ CF  http://download.beko.com/Download.UsageManualsBeko/bk-3315-a-cf-sandik-tipi-derin-dondurucu-derin-dondurucu-kullanim-kilavuzu-tr_TR_201708181133935_User-20Manual-20-20Filetr_TR.pdf  20 s.  md5 d5090406c2360d2bd58484cd637b725e
#  K2) BK 3215 Joker A+ http://download.beko.com/Download.UsageManualsBeko/bk-3215-joker-a-sandik-tipi-derin-dondurucu-derin-dondurucu-kullanim-kilavuzu-tr_TR_201708251156505_User-20Manual-20-20Filetr_TR.pdf  20 s.  md5 73089872c709a8ba1828a5e4a9667810 (aynı tablo s.15)
# Ana satır (K1 s.15 "Arıza tespit kılavuzu"): "Sıcaklık değerleri yeteri kadar düşük değildir (kırmızı LED ışık açık)." →
#   "Dolaptaki yiyecekler kapının kapanmasına engel oluyor." · "Cihaz düzgün bir şekilde yerleştirilmemiştir." · "Cihaz bir ısı kaynağının çok yakınına yerleştirilmiştir."
#   · "Termostat düğmesi doğru konumda değildir." · aynı sayfa "Cihaz çalışmıyor." → "Elektrik kesilmiştir." / "Dolabın fişi prize tam olarak takılı değildir." / "Sigorta atmış olabilir." / "Termostat "OFF" konumundadır."
# K1 s.11: "Kırmızı LED ışık – hasar – bu ışık bölmedeki sıcaklık çok yüksek olduğunda yanar. LED ışık, cihaz çalışmaya başladıktan sonra 15-45 dakika yanar, daha sonra sönmelidir.
#   LED ışık çalışma sırasında yanmaya devam ederse, bu birtakım hataların oluştuğu anlamına gelir." · "Yeşil LED ışık – cihaza enerji verildiğini gösterir."
# K1 s.10: "Düğme, sıcaklığı artırmak için sola, düşürmek için sağa doğru çevrilir." · üç işlev: buzdolabı (~5 °C), sıfır derece (3 ila -2 °C), dondurucu ("kabindeki sıcaklık -18°C civarında")
#   · "Taze yiyeceklerin dondurulması en az 20 saatlik bir çalıştırmadan sonra mümkündür." · K1 s.9: "Cihazın içine herhangi bir gıda maddesi koymadan önce 2 saat kadar boş çalıştırın."
# K1 s.8: "+10°C ile +40°C arasındaki ortam sıcaklıklarında" · "Ortam sıcaklığı +40°C'nin üzerinde ise, cihaz içindeki sıcaklık artabilir." · ısı kaynakları: "Kömür veya gazyağıyla çalışan
#   ocaklardan 100 cm; Elektrik veya gazla çalışan ocaklardan 150 cm." · "cihazın etrafında serbest hava sirkülasyonunu sağlayın." · "Cihazı tümüyle düz, kuru ve iyi havalandırmalı bir yere yerleştirin."
#   · "Cihaz ile "üzerine asılan" herhangi bir mobilya arasında lütfen en az 25 cm boşluk bırakın." · K1 s.12: "Dondurucunun içerisine bir defada çok fazla miktarda yiyecek koymayın."
#   · "Taze yiyecekler halihazırda donmuş olan yiyeceklerle temas etmemelidir." · K1 s.13: "Kompresörün ve kondansatörün iyi şekilde havalandırılmasını sağlayın." · "Soğutucunuzun kapısını gerekenden daha fazla açık tutmayın"
# BİLEREK YAZILMAYANLAR: sigorta (#31) · kondansatöre ara parça takma ve kondansatör temizliği (cihaz arkası, numaralı adım değil) · lamba değişimi · Arçelik'e genelleme (grup kuralı; Arçelik derin dondurucu
#   belgeleri arcelik.com.tr'de 403 verdi) · Uğur derin dondurucu sayfasıyla aynı sıra kurulmadı · fiyat.
# Alıntı denetim tablosu: beko-derin-dondurucu-dondurmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika + bekleme"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Yeşil ışığın yandığını, termostat düğmesinin OFF'ta olmadığını ve fişin prize tam takılı olduğunu kontrol et."
  - "Termostat düğmesinin dondurucu ayarında olduğunu kontrol et; sıcaklığı düşürmek için düğmeyi yavaşça sağa çevir."
  - "Cihaz yeni çalıştırıldıysa kırmızı ışığın sönmesini bekle; taze yiyecek dondurmak için en az 20 saatlik çalışmayı tamamla."
  - "Kapağın kapanmasını engelleyen yiyecekleri düzelt ve kapağı gerekenden fazla açık tutma."
  - "Bir defada çok fazla yiyecek koyduysan yükü azalt; taze yiyecekleri donmuş olanlara değdirme."
  - "Cihazın düz, kuru ve havadar bir yerde durduğunu, etrafında hava dolaşımı olduğunu kontrol et."
  - "Isı kaynaklarına olan mesafeyi ve oda sıcaklığının 10-40 °C arasında olduğunu kontrol et."
faq:
  - q: "Beko derin dondurucumda kırmızı ışık neden yanıyor?"
    a: "Beko kılavuzuna göre kırmızı LED bölmedeki sıcaklık çok yüksek olduğunda yanar. Cihaz çalışmaya başladıktan sonra 15-45 dakika yanması normaldir, sonra sönmelidir. Çalışma sırasında yanmaya devam ederse kılavuz bunun bazı hataların oluştuğu anlamına geldiğini yazıyor."
  - q: "Beko sandık dondurucum soğutuyor ama dondurmuyor."
    a: "Bu modeller buzdolabı, sıfır derece bölmesi ya da dondurucu olarak çalışabiliyor. Düğme buzdolabı ayarındaysa kabin yaklaşık 5 °C, sıfır derece ayarındaysa 3 °C ile -2 °C arasında olur. Dondurucu ayarında kabin -18 °C civarına iner."
  - q: "Yeni aldığım Beko dondurucuya hemen yiyecek koyabilir miyim?"
    a: "Kılavuz cihazı yiyecek koymadan önce yaklaşık 2 saat boş çalıştırmanı istiyor. Taze yiyeceklerin dondurulması ise en az 20 saatlik bir çalışmadan sonra mümkün."
  - q: "Dondurucuyu garaja koydum, sorun olur mu?"
    a: "Beko'ya göre cihaz +10 °C ile +40 °C arasındaki ortam sıcaklıklarında çalışacak şekilde tasarlanmış; +40 °C'nin üzerinde iç sıcaklık artabilir. Kılavuz cihazın düz, kuru ve iyi havalandırmalı bir yere konmasını istiyor. Nemli ya da havasız ortamda dış duvarlarda nem oluşmasını ise normal sayıyor; damlaları yumuşak bir bezle silmen yeterli."
images:
  coverAlt: "Garajda duvar dibinde duran beyaz sandık tipi derin dondurucunun ön yüzündeki termostat kutusu"
---

Sandık dondurucunun ön yüzündeki **kırmızı ışık** sönmüyor ve içerideki paketler yumuşak. Beko'nun BK serisi sandık tipi derin dondurucu kılavuzunda bu tablonun satırı **"Sıcaklık değerleri yeteri kadar düşük değildir (kırmızı LED ışık açık)."** Beko bu satıra dört neden yazıyor: kapağı engelleyen yiyecek, yanlış yerleşim, yakındaki ısı kaynağı ve termostat düğmesinin konumu.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yeşil ışık yanıyor mu, düğme OFF'ta mı → düğme dondurucu ayarında mı → yeni çalıştırıldıysa bekle → kapak engelleniyor mu → yük fazla mı → cihaz düz ve havadar yerde mi → ısı kaynağı ve oda sıcaklığı. Kırmızı ışık hepsine rağmen sönmüyorsa → servis.

## Adım adım: evde denenecekler

**1. Elektriği ve düğmeyi kontrol et.** Beko'nun termostat kutusunda **yeşil LED** cihaza enerji verildiğini gösterir. Tablonun **"Cihaz çalışmıyor."** satırındaki nedenler: **"Elektrik kesilmiştir."**, **"Dolabın fişi prize tam olarak takılı değildir."** ve **"Termostat "OFF" konumundadır."** Yeşil ışık hiç yanmıyorsa önce fişe ve düğmeye bak.

**2. Düğmeyi dondurucu ayarına al.** Tablodaki neden: **"Termostat düğmesi doğru konumda değildir."** Bu Beko modelleri üç işlevle çalışıyor: **buzdolabı** ayarında kabin yaklaşık **5 °C**, **sıfır derece bölmesi** ayarında **3 °C ile -2 °C** arası, **dondurucu** ayarında **-18 °C civarı.** Düğme sıcaklığı **düşürmek için sağa**, artırmak için sola çevrilir; yavaşça çevir.

**3. İlk çalışmayı tamamla.** Kılavuza göre kırmızı LED cihaz çalışmaya başladıktan sonra **15-45 dakika** yanar, sonra sönmelidir. Beko yiyecek koymadan önce cihazı **2 saat kadar boş** çalıştırmanı istiyor; taze yiyeceklerin dondurulması ise **en az 20 saatlik** çalışmadan sonra mümkün.

**4. Kapağı serbest bırak.** Neden: **"Dolaptaki yiyecekler kapının kapanmasına engel oluyor."** Sepetlerin üstüne taşan paketleri düzelt. Beko'nun enerji önerilerinden biri de kapağı **gerekenden daha fazla açık tutmamak** ve yalnız gerektiğinde açmak.

**5. Yükü parça parça koy.** Beko **bir defada çok fazla miktarda yiyecek** konmamasını istiyor; yiyecekler ne kadar hızlı donarsa kalitesini o kadar korur. **Taze yiyecekler** donmuş olanlarla **temas etmemeli.**

**6. Yerleşimi düzelt.** Neden: **"Cihaz düzgün bir şekilde yerleştirilmemiştir."** Kurulum bölümüne göre cihaz **tümüyle düz, kuru ve iyi havalandırmalı** bir yerde durmalı ve etrafında **serbest hava dolaşımı** olmalı. Üstüne asılı bir raf ya da dolap varsa aradaki boşluk **en az 25 cm** olmalı. Beko kompresörün ve kondansatörün iyi havalandırılmasını da istiyor.

**7. Isı kaynağını ve odayı kontrol et.** Neden: **"Cihaz bir ısı kaynağının çok yakınına yerleştirilmiştir."** Kılavuzdaki en küçük mesafeler: kömür ya da gazyağıyla çalışan ocaklardan **100 cm**, elektrikli ya da gazlı ocaklardan **150 cm.** Güneş alan yer de uygun değil. Oda sıcaklığı **+10 °C ile +40 °C** arasında olmalı; **+40 °C'nin üzerinde** iç sıcaklık artabilir.

## Dondurucu ses yapıyorsa ya da dışı terliyorsa

Beko'nun listesine göre kompresörün **periyodik çalışması**, uğultu ve borulardaki soğutucu gazın çıkardığı **fokurtu ve gurultu** normal çalışma sesleri; cihaz çalışma sıcaklığına ulaşınca azalır. Nemli ya da havasız bir yerde (mahzen, garaj) **dış duvarlarda nem** oluşması da normal; damlaları **yumuşak bir bezle** silmen yeterli.

İçeride buz kalınlaştıysa: [Beko derin dondurucu buzlanma yapıyor](/blog/beko-derin-dondurucu-buzlanma-yapiyor/). Markadan bağımsız kontrol listesi için [derin dondurucu dondurmuyor](/blog/derin-dondurucu-dondurmuyor/) yazısına bakabilirsin.

## Ne zaman servis

- Düğme dondurucu ayarında, kapak serbest, yerleşim düzgünken **kırmızı LED çalışma sırasında yanmaya devam ediyorsa:** kılavuz bunun bazı hataların oluştuğu anlamına geldiğini yazıyor.
- Fiş takılı, düğme açıkken **yeşil ışık hiç yanmıyorsa** ve evde elektrik varsa.
- Evdeki sigorta atıyorsa: tesisat işini bir elektrikçiye bırak.

Beko'nun uyarısı: cihazı ve elektrikli parçalarını **asla kendin onarmaya çalışma**; yetkisiz onarım tehlikelidir ve garantiyi geçersiz kılabilir. Beko Tüketici Hizmetleri: **444 1 404.**

⛔ **Kendin-çöz sınırı burada biter.** Düğme, kapak, yük ve yerleşim kullanıcıya; termostat, kompresör ve soğutma devresi servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
