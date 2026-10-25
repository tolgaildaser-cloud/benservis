---
title: "Alarko kombi E01 hatası: alev yok"
description: "Alarko kombide E01 alev yok ya da sahte alev demek. Gaz sayacı ve vana kontrolü, kombiyi iki kez kapatıp açma ve servis sınırı; Alarko kılavuzundan."
slug: "alarko-kombi-e01-hatasi"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme D, fork C). Konu seçimi: origin/main'de alarko-kombi-e01-hatasi yok.
#   Alarko'da origin/main'de yalnız alarko-kombi-e04-hatasi ve alarko-kombi-e47-hatasi var (ikisi de basınç). Dalga 1'deki
#   alarko-kombi-kalorifer-isitmiyor ayrı belirti; çakışma yok.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "alarko kombi e" → 1. "alarko kombi e01 hatası", 2. "…e16 hatası",
#   3. "…eski modelleri"; "alarko kombi e01" → "…e01 hatası", "…e01 hatası resetleme", "…e01 hatası çözümü", "…e01 hatası nedir".
# GSC (https___www-6, 7 gün): Alarko E01 sorgusu yok (Alarko'da yalnız e47 sorguları var).
# Belge bu koşuda curl -sL -A "Mozilla/5.0" ile alarko-carrier.com.tr'den yeniden indirildi: HTTP 200 application/pdf, md5 yerel kopyayla
#   (kaynak-protherm-alarko-sprint/) birebir. pdftotext -layout, sayfa = PDF sayfası. #88: forum/servis sitesi kullanılmadı.
#  (A) Alarko Seradens Super SRS 20/24/28/36 Premiks Yoğuşmalı Kombi Montaj ve Kullanım Kılavuzu, 59 s.
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/kombi-alarko-srs-kk.pdf  md5 1d7022ad1322561828a456f621227d10
# Gaz sızıntısı A s.10-11 · panel (1) düğmesi = çalışma konumu + reset A s.13 · OFF/Yaz/Kış/Sadece Isıtma, alev sembolü A s.16
#   · E01 tanımı ve üç madde A s.18 · E35 alev algılama → servis A s.20 · uzun süre kullanılmama: gaz besleme vanası A s.20
#   · gaz dönüşümü yalnız yetkili servis A s.11 · info menüsü A s.14.
# BİLEREK YAZILMAYANLAR: iyonizasyon elektrodu, ateşleme kartı, gaz valfi gibi parça teşhisi · gaz basıncı ayarı · "kaç kez denenir" sayısı
#   (kılavuz iki kapatıp açma diyor, fazlasını yazmadık) · fiyat (#46) · pazar bağlantısı. Alıntı denetim tablosu: alarko-kombi-e01-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, gaz vanalarını kapat, dışarıdan 187'yi ara."
  - "Gaz sayacını ve kombi üzerindeki gaz vanasını kontrol et; şebekeden gaz geldiğinden emin ol."
  - "Kumanda panelindeki çalışma konumu düğmesiyle kombiyi kapat ve tekrar aç, ateşlemeyi bekle."
  - "E01 yeniden görünürse kombiyi bir kez daha kapatıp aç; bu, borulardaki gazın kombiye ulaşması içindir."
  - "Kod kaybolunca kombinin yeniden çalıştığını ve ekranda alev simgesinin göründüğünü kontrol et."
  - "E01 devam ederse ya da ekranda E35 görürsen Alarko yetkili servisini ara."
faq:
  - q: "Alarko kombide E01 ne demek?"
    a: "Alarko Seradens Super kılavuzuna göre E01 alev yok ya da sahte alev hatası. Kod, yakıcı üzerinde alev (iyonizasyon akımı) görülmediğinde ekranda belirir."
  - q: "Alarko kombi E01 hatası nasıl resetlenir?"
    a: "Seradens Super'de ayrı bir reset tuşu yok; kumanda panelindeki 1 numaralı çalışma konumu düğmesi hata durumunda sıfırlama düğmesi olarak çalışıyor. Kılavuzun E01 talimatı bu düğmeyle kombiyi kapatıp tekrar açmak, kendini ateşlemesini beklemek, E01 yeniden görünürse bir kez daha kapatıp açmak."
  - q: "Yazdan sonra ilk çalıştırmada E01 çıktı, normal mi?"
    a: "Kılavuz bu hataya daha çok uzun süre gaz girişi olmayan cihazlarda rastlandığını yazıyor; böyle bir durumda gaz verildiğinde ve birkaç ateşleme denemesinden sonra cihaz kendini çalıştırıyor. Yazın kombinin gaz besleme vanasını kapattıysan önce o vanayı açtığından emin ol."
  - q: "E01 ile E35 arasındaki fark ne?"
    a: "E01 alev yok ya da sahte alev hatası; kılavuz gaz kontrolü ve kapatıp açma adımlarını kullanıcıya veriyor. E35 alev algılama hatası; kılavuzun tek talimatı yetkili servisi aramak."
  - q: "Tüplü gaz kullanıyorum, E01 için neye bakmalıyım?"
    a: "Kılavuzun E01 maddesi şebekeden gaz geldiğinden ya da tankın içinde gaz olduğundan emin olmanı istiyor. Doğal gazdan LPG'ye ya da tersine dönüşüm ise yalnız yetkili servis tarafından yapılabiliyor."
images:
  coverAlt: "Koridor duvarına asılı beyaz bir kombi ve ekranında sabit duran bir uyarı yazısı"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Kombi çalışmıyor, ekranda E01 sabit duruyor. Alarko Seradens Super kombilerin kullanım kılavuzunda bu kodun adı açık: **alev yok ya da sahte alev**. Kılavuz bu kod için kullanıcıya üç adım bırakıyor ve hepsi gazla, yani kombinin dışındaki bir şeyle başlıyor. Bu yazıda o adımları, sırasını ve nerede durman gerektiğini Alarko'nun kendi kılavuzundan topladık. Kaynak Seradens Super SRS 20/24/28/36 kılavuzu; başka bir Alarko modelinde düğme yerleri farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E01, kombinin yakıcıda alev göremediği anlamına gelir. Önce gaz sayacına ve kombinin gaz vanasına bak. Sonra çalışma konumu düğmesiyle kombiyi kapatıp aç, ateşlemeyi bekle; E01 dönerse bir kez daha kapatıp aç. Kod kaybolursa kombi çalışır. Devam ederse Alarko yetkili servisi.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **E01** | Alev yok ya da sahte alev; yakıcıda iyonizasyon akımı görülmedi | 🛠️ Gaz kontrolü, iki kez kapatıp açma |
| **E35** | Alev algılama hatası | Yetkili servis |
| **E04** | Düşük tesisat suyu basıncı | 🛠️ Basıncı oku, doldur |
| **Alev simgesi** | Yanma odasında alev oluştu | Kombi ateşledi |

## Adım adım

**1. Gaz kokusu varsa hiçbir şeye dokunma.** Alarko'nun gaz sızıntısı bölümündeki sıra: sakin ol, yanan ateşleri söndür, bütün kapı ve pencereleri aç, bütün gazlı cihazların vanalarını kapat, daire ve apartman girişindeki gaz vanalarını kapat. Kibrit ya da çakmak yakma, sigara içme. Elektrik düğmeleriyle oynama; açıksa kapatma, kapalıysa açma. Fişleri çekme ya da takma, zilleri ve gaz bulunan ortamdaki telefonları kullanma. Yöneticiye, **187** numaradan gaz şirketine ve **110** numaradan itfaiyeye haber ver.

**2. Gaz geliyor mu?** Kılavuzun E01 için ilk maddesi: gaz sayacını ve kombi üzerindeki gaz vanasını kontrol et, şebekeden gaz geldiğinden emin ol. Tüplü ya da tanklı sistemde tankta gaz olduğundan emin ol.

**3. Kombiyi kapatıp aç.** Seradens Super'de ayrı bir reset tuşu yok. Kumanda panelindeki **1 numaralı çalışma konumu düğmesi** Yaz, Kış, Sadece Isıtma ve Kapalı konumları arasında geçiş yapar ve kombi hata durumundayken **sıfırlama düğmesi** olarak çalışır. Kılavuzun talimatı: bu düğmeyle cihazı kapat, tekrar aç ve sistemin kendini ateşlemesini bekle.

**4. E01 dönerse bir kez daha.** Kod yeniden görünürse kılavuz cihazı **bir kez daha** kapatıp açmanı istiyor ve nedenini de yazıyor: bu işlem borulardaki gazın cihaza ulaştığından emin olmak için yapılıyor. Kılavuz iki denemeden sonrası için başka bir kullanıcı adımı vermiyor.

**5. Kod kayboldu mu?** Kılavuza göre ekrandaki hata kodu kaybolduğunda kombi tekrar çalışır. Yanma odasında alev oluşunca ekranda **alev simgesi** görünür. Kış konumunda musluk ve radyatör simgeleri birlikte, yaz konumunda yalnız musluk simgesi sürekli yanar.

**6. Devam ediyorsa servis.** E01 satırının son cümlesi: problem devam ederse yetkili servisi ara. Kod bölümünün başındaki genel kural da aynı: kılavuzdaki işlemler yapıldıktan sonra problem tekrar meydana gelirse yetkili servisi ara. Ekranda **E35** alev algılama hatası görürsen kılavuz doğrudan yetkili servisi istiyor.

## Neden en çok yazdan sonra çıkıyor?

Alarko kılavuzu bunu açıkça yazıyor: bu hataya daha çok **gaz girişi uzun süre olmayan cihazlarda** rastlanıyor. Böyle bir durumda cihaza gaz verildiğinde ve birkaç ateşleme denemesinden sonra cihaz kendini çalıştırıyor.

Aynı kılavuz, kombi yazın uzun süre kullanılmayacaksa fişin çekilmesini, kombi gaz besleme vanasının ve kullanım suyu şebeke giriş vanasının kapatılmasını öneriyor. Sonbaharda ilk çalıştırmada E01 görürsen ilk bakacağın yer o vananın yeniden açılıp açılmadığı. Yaz kapatması hakkında daha fazlası [kombi yazın kapatılır mı](/blog/kombi-yazin-kapatilir-mi/) yazısında.

Tüplü ya da tanklı gazla çalışan bir kombide E01'in ilk kontrolü tankta gaz kalıp kalmadığı. Kombinin doğal gazdan LPG'ye ya da LPG'den doğal gaza dönüştürülmesi ise kullanıcı işi değil; Alarko kılavuzu gaz dönüşüm işlemlerinin yalnız yetkili servisler tarafından yapılmasını istiyor. Dönüşümden sonra E01 başladıysa bunu servise mutlaka söyle.

## Ne zaman servis

- İki kapatıp açmadan sonra E01 hâlâ duruyorsa
- E01 sık sık, her gün ya da her ateşlemede geri geliyorsa
- Ekranda E35 varsa
- Gaz geliyor, vana açık, yine de alev simgesi hiç görünmüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Gaz sayacına bakmak, kombinin gaz vanasını açmak ve çalışma konumu düğmesi sende. Kombinin kapağının içi, ateşleme ve alev algılama parçaları, gaz hattı ve gaz dönüşümü Alarko yetkili servisinin; kılavuz yetkisiz kişilerin cihaza müdahale etmesine izin vermemeni istiyor.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Seradens Super ya da başka)?
2. Ekranda tam olarak E01 mi, E35 mi?
3. Gaz sayacı ve kombinin gaz vanası açık mı?
4. Kaç kez kapatıp açtın?
5. Kombi bir süre kapalı mı kalmıştı?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Basınç kodları için [Alarko kombi E04 hatası](/blog/alarko-kombi-e04-hatasi/) ve [Alarko kombi E47 hatası](/blog/alarko-kombi-e47-hatasi/) yazılarına, marka bağımsız nedenler için [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısına bak. Bil, gör, çağır.
