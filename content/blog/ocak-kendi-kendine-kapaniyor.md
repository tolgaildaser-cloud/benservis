---
title: "Ocak kendi kendine kapanıyor: sebepleri ve çözümü"
description: "İndüksiyonlu ocak kendi kendine kapanıyorsa: seçim süresi, uygun olmayan kap, ıslak kumanda, uzun çalışma sınırı, aşırı ısınma. İki kılavuzdan."
slug: "ocak-kendi-kendine-kapaniyor"
date: "2026-10-30"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P23 #212). origin/main'de genel "ocak kendi kendine kapanıyor" yazısı yok; markalı yakın yazı: ugur-ocak-kendiliginden-kapaniyor (Uğur vitroseramik).
#   Yakın sayfalar: ugur-ocak-kendiliginden-kapaniyor, cam-seramik-ocak-isinmiyor, siemens-induksiyon-ocak-tencereyi-algilamiyor, vestel-ocak-u-hatasi, ocak-gaz-emniyeti-sonduruyor, dogalgazli-ocak-neden-yanmaz.
# Arama kanıtı: BOSLUK.md #212, Google otomatik tamamlama hl=tr: "ocak kendi kendine kapanıyor" tam liste (Kumtel, Arçelik ifadeleri satırda; bu iki markanın belgesi bulunmadı, bkz. KAYNAK.md).
# Belgeler (curl -sL -A "Mozilla/5.0", HTTP 200, yönlendirme 0, application/pdf; sayfa = PDF sayfası):
#  (S) Siemens ED..HQB.. indüksiyonlu ocak, TR kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001975506_E.pdf  24 s.  md5 4d60dc0eeae245d550f9340e16655b7d
#  (V) Vestel AO-6470 S indüksiyonlu ocak kullanım kılavuzu        https://statik.vestel.com.tr/webfiles/20210044_k.pdf        27 s.  md5 6e4db4a2cc90868aa9df9dc2c933f18f
# Sayfalar: S s.8 (59 saniye, quickStart) · S s.9 (kapatma zamanlayıcısı) · S s.11 (Duraklat, bağımsız emniyet kapatması) · S s.17 (arıza tablosu) · S s.3 (boş ocak) · V s.15 (kap, 2 dakika) · V s.16 (20 saniye) · V s.17 (güvenlik kapatması, akıllı duraklatma) · V s.18 (zamanlayıcı) · V s.19 (E3, E4, E5) · V s.22 (sorun giderme).
# BİLEREK YAZILMAYANLAR: gazlı ocağın alev emniyeti (belgeler indüksiyon; ayrı yazılara bağlantı var) · hata kodlarının tamamı · elektronik kart, bobin ve fan müdahalesi · Kumtel ve Arçelik iddiaları (belge yok) · fiyat.
# Alıntı denetim tablosu: ocak-kendi-kendine-kapaniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Mutfak mıknatısı", "Kuru bez", "Ocağın kullanım kılavuzu"]
steps:
  - "Ocağı açtıktan sonra süre dolmadan gözü ve güç kademesini seç."
  - "Gözün üzerinde uygun bir kap olup olmadığına bak; mıknatısla dene."
  - "Kumanda bölümünü kurula, üzerindeki nesneyi ve sıcak kabı kaldır."
  - "Göz için kurulu bir süre ya da duraklatma olup olmadığını kontrol et."
  - "Aynı kademede çok uzun çalıştıysa ocağı yeniden aç."
  - "Aşırı ısınma uyarısı varsa ocağı kapatıp soğumasını bekle, sonra yeniden aç."
  - "Ekranda hata kodu varsa kılavuzdaki adımı uygula; tekrarlarsa servis çağır."
faq:
  - q: "Ocağı açıyorum ama birkaç saniye sonra kapanıyor, neden?"
    a: "Siemens kılavuzuna göre ocak tüm gözleri 59 saniyeden uzun süre kapalı bulursa kapanır; kapları tanıyıp otomatik göz seçen quickStart durumunda da 59 saniye içinde güç kademesi seçilmezse ocak kendini kapatır. Vestel kılavuzu süreyi 20 saniye olarak veriyor: o süre içinde pişirme bölgesi seçilmezse ocak otomatik olarak kapanıyor."
  - q: "Üzerinde tencere yokken ocak kapanır mı?"
    a: "Evet. Vestel kılavuzuna göre uygun olmayan bir kap konursa ya da hiç kap konmazsa güç seçilince ekranda sembol yanıp söner ve 2 dakika sonra pişirme bölgesi otomatik olarak kapanır. Siemens da kap yoksa ya da kap uygun değilse güç kademesinin yanıp söndüğünü ve bir süre sonra bölgenin kapandığını yazıyor. Siemens ayrıca boş ocağın otomatik kapanmasını beklememeni, kullandıktan sonra ocağı ana şalterden kapatmanı öneriyor."
  - q: "Aynı kademede saatlerce çalışınca ocak kendini kapatıyor, normal mi?"
    a: "Evet, iki üretici de bu koruma işlevini yazıyor. Siemens'te süre kademeye göre 1 ile 10 saat arasında, Vestel'de 1,5 ile 6 saat arasında. Vestel'de ısı ayarını değiştirmek süreyi başa döndürüyor; Siemens'te kapanan alanı açmak için herhangi bir tuşa dokunmak yeterli."
  - q: "Ekranda F yanıp sönüyor ve ocak kapanıyor."
    a: "Vestel kılavuzuna göre bu, kumandaların nemli olduğunu ya da üzerine bir nesne bırakıldığını gösteriyor. Çözüm olarak kumandaları kurutman veya nesneyi kaldırman isteniyor. Siemens de göstergelerin yanıp sönme nedenini nemli kumanda bölümü ya da üzerindeki cisim olarak veriyor."
images:
  coverAlt: "Dört gözlü siyah indüksiyon ocağın dokunmatik paneli, gözler sönük, yanında kuru bez"
  steps:
    - "Ocağın dokunmatik panelinde bir göze dokunan beyaz eldivenli sade siluet el"
    - "Ocak gözü üzerinde tencere tabanına mıknatıs tutan beyaz eldivenli sade siluet el"
    - "Ocağın dokunmatik panelini kuru bezle silen beyaz eldivenli sade siluet el"
    - "Ocağın panelinde bir göz için kurulmuş süreyi gösteren sade saat çizimi"
    - "Uzun süre çalışan ocak gözü ve yanında dolmuş bir kum saati, sade çizim"
    - "Soğumaya bırakılmış ocağın yanında bekleyen beyaz eldivenli sade siluet el"
    - "Ocağın hata ekranını gösteren sade çizim, yanında telefon ahizesi"
---

Ocağı açıyorsun, tencereyi koyuyorsun, birkaç dakika sonra ışıklar sönüyor ve ocak kapanıyor. Çoğu zaman bu bir arıza değil: indüksiyonlu ve elektrikli ocakların kendini kapatması için kılavuzlarda yazılı, tek tek sayılmış güvenlik kuralları var. Bu yazıda iki üreticinin Türkçe kılavuzuna baktık: **Siemens** ED serisi indüksiyonlu ocak ve **Vestel** AO-6470 indüksiyonlu ocak. Kendi ocağın başka bir şey söylüyorsa **kendi kılavuzun esastır.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Süre içinde göz ve güç seç → uygun kap kullan → kumandayı kuru tut → kurulu süreyi ya da duraklatmayı kontrol et → çok uzun çalışma sınırını bil → aşırı ısınmada soğumasını bekle → hata kodu varsa kılavuzdaki adımı uygula.

Gazlı ocak alevinin sönmesi ayrı bir konu: bunun için [ocak gaz emniyeti söndürüyor](/blog/ocak-gaz-emniyeti-sonduruyor/) ve [doğalgazlı ocak neden yanmaz](/blog/dogalgazli-ocak-neden-yanmaz/) yazılarına bak. Uğur vitroseramik ocak için ayrı bir yazımız var: [Uğur ocak kendiliğinden kapanıyor](/blog/ugur-ocak-kendiliginden-kapaniyor/).

## Adım adım: kapanma nedenini ayır

**1. Süre dolmadan göz ve güç seç.** Siemens'te tüm gözler **59 saniyeden** uzun süre kapalı kalırsa ocak kapanır. Kabı ocağı açmadan önce yerleştirirsen ocak kabı tanıyıp gözü kendisi seçer (quickStart); sonraki 59 saniye içinde güç kademesini seçmezsen ocak kendini kapatır. Vestel'de süre kısa: ocağı açtıktan sonra **20 saniye içinde** bir pişirme bölgesi seçilmezse ocak otomatik olarak kapanıyor. Yani önce ocağı aç, hemen gözü seç, sonra kademeyi ayarla.

**2. Uygun kabı kullan.** Vestel: gözün üzerine uygun olmayan bir kap koyarsan ya da hiç kap koymazsan güç seçildiğinde ekranda sembol yanıp söner ve **2 dakika sonra pişirme bölgesi otomatik olarak kapanır.** Siemens da kap yoksa ya da kap uygun değilse seçilen kademenin yanıp söndüğünü, belirli bir süre sonra bölgenin kapandığını yazıyor. Vestel uygunluk için mıknatıs testini öneriyor: mıknatıs kabın tabanına yapışıyorsa kap genellikle uygundur. Siemens de kabın ferromanyetik tabanlı olması ve mıknatısla çekilmesi gerektiğini yazıyor. Vestel'de ekranda **U** görünüyorsa nedeni bölgede kap olmaması ya da kabın uygun olmaması; çözüm uygun bir kap. Ayrıntı için [Siemens indüksiyon ocak tencereyi algılamıyor](/blog/siemens-induksiyon-ocak-tencereyi-algilamiyor/) ve [Vestel ocak U hatası](/blog/vestel-ocak-u-hatasi/) yazılarına bak.

**3. Kumandayı kuru ve boş tut.** Vestel sorun giderme tablosuna göre ocak kullanılmadığı zaman kapanıp her göstergede **F** yanıp sönüyorsa kumandalar nemlidir ya da üzerine bir nesne bırakılmıştır; çözüm kumandaları kurutmak veya nesneyi kaldırmak. Siemens aynı nedeni göstergelerin yanıp sönmesi için yazıyor. Ayrıca kumanda bölgesine sıcak kap koyma: Siemens'e göre bu durumda elektronik aşırı ısınabilir, sinyal sesi gelir ve pişirme alanı elektroniği korumak için kapatılabilir; kabı alıp birkaç saniye bekle, bir kumanda alanına dokun.

**4. Kurulu süreyi ve duraklatmayı kontrol et.** Siemens'te **kapatma zamanlayıcısı** ayarlanan sürenin sonunda gözü kapatır ve sinyal sesi verir. Vestel'de her pişirme bölgesi için 1-99 dakikalık zamanlayıcı kurulabiliyor; süre dolunca bölge kapanıyor, sıcaksa **H** görünüyor. Süre dolduktan sonra ocak kapandıysa yeniden aç ve zamanlayıcıyı iptal et ya da yeniden kur. Duraklatma da kapanmaya yol açabilir: Vestel'de Akıllı Duraklatma devre dışı bırakılmazsa ocak 30 dakika sonra kapanıyor; Siemens'te Duraklat en fazla 10 dakika sürüyor ve pişirme alanı 10 dakika sonra otomatik olarak kapanıyor.

**5. Uzun çalışma sınırını bil.** Siemens'in "bağımsız emniyet kapatması" ayar değişikliği yapılmadan uzun süre çalışan gözü kapatıyor: en düşük kademede **10 saat**, en yüksekte **1 saat**. Vestel'in güvenlik kapatması da kademeye göre **6 saat ile 1,5 saat** arasında. Süre sonunda ocağı yeniden açıp kullanabilirsin.

**6. Aşırı ısınmada bekle.** Siemens'e göre pişirme bölgesi aşırı ısınmışsa cam seramiği korumak için kapatılır; elektronik sistem soğuyana kadar bekleyip alanı yeniden açman gerekiyor. Elektronik fazla ısındığında bir ya da tüm alanlar kapanabilir; soğumasını bekleyip bir sembole dokunmak yeterli. Vestel'in E5 hatası da ocağın iç sıcaklığının çok yüksek olduğunu gösteriyor: ocağı kapat, ısıtıcıların soğumasını bekle.

**7. Hata kodu varsa kılavuza göre ilerle.** Vestel E3 ve E4'te (besleme gerilimi ya da frekansı anma değerinden farklı) ocağı kapatıp tüm bölgelerde H kayboluncaya kadar bekle, açıp kullanmaya devam et. Aynı hata tekrarlarsa yetkili servise başvur. Siemens'te kod tablodaysa ona göre davran; tabloda yoksa ocağın elektrik bağlantısını kes, 30 saniye bekle, yeniden bağla. Gösterge yeniden hata veriyorsa müşteri hizmetlerini ara ve kodu bildir. Elektrik bağlantısını kesmek senin için yalnız sigortayı ya da şalteri kapatmak demektir; kabloyla ya da bağlantı kutusuyla uğraşma.

## Ne zaman servis

- Yukarıdaki nedenlerin hiçbiri uymuyor ve ocak kullanımda sık sık kapanıyorsa
- Aynı hata kodu kapat-aç sonrası geri geliyorsa
- Ekranda soğutma fanı, sensör ya da kontrol kartı hatası görünüyorsa: Vestel E1, E6, E7 ve E8 için doğrudan yetkili servisi öneriyor

⛔ **Kendin-çöz sınırı burada biter.** Süre, kap, kumanda temizliği, zamanlayıcı ve bekleme senin; fan, sensör, bobin, kontrol kartı ve elektrik bağlantısı servise aittir. Siemens onarımları yalnızca eğitimli uzman personelin yapabileceğini yazıyor.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
