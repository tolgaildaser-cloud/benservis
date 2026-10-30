---
title: "Yazıcı çizgili çıkarıyor: Canon ve Epson kılavuzuna göre"
description: "Yazıcı çizgili ya da şeritli basıyorsa sırayla bak: kâğıt yönü, kâğıt tipi, kafa temizleme, kafa hizalama, kartuş. Canon ve Epson kılavuzlarından."
slug: "yazici-cizgili-cikariyor"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P45 (YK #197 boşluk, BOSLUK.md #104). Slug origin/main'de yok. Yakın yazılar: yazici-silik-basiyor (nozzle check, temizlik sırası), yazici-kartus-tanimiyor.
# Kaynak (#88): Epson SX100 çevrimiçi kılavuz ("Baskı Kalitesi Sorunları": Yatay çizgiler, Dikey hizalamada hata veya çizgi) ve Canon PIXMA E410 el kitabı ("Beyaz Çizgiler Var"). URL, md5 ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · lazer yazıcı (belgeler mürekkep püskürtmeli; lazer için üretici belgesi indirilmedi) · HP ve Brother · kafa sökme, silme, iğneleme.
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Çıktıdaki çizgilere bak: yatay çizgi mi, dikey hizalama hatası mı, beyaz çizgi mi?"
  - "Kâğıdın yazdırılacak yüzünün doğru yönde yüklendiğini kontrol et."
  - "Sürücüde seçili kâğıt tipinin yüklü kâğıtla aynı olduğunu kontrol et."
  - "Püskürtme ucu denetim desenini yazdır ve çizgilerin eksiksiz çıkıp çıkmadığına bak."
  - "Yazıcı kafası temizliğini çalıştır, desenini yeniden yazdır."
  - "Düzelmediyse yoğun temizleme yap; gerekirse yazıcıyı kapatıp 24 saat sonra tekrarla."
  - "Dikey hizalama hatası varsa kafa hizalama aracını çalıştır, yüksek hız seçeneğini kapat."
  - "Kartuşun mürekkebini ve ışıkları kontrol et; kopyada çizgi varsa tarayıcı camını temizle."
faq:
  - q: "Çizgili çıktının en sık sebebi nedir?"
    a: "Hem Epson hem Canon kılavuzu tıkanmış püskürtme uçlarını gösteriyor ve çözümü kafa temizlemede veriyor. Ardından kâğıt yönü, kâğıt tipi ve mürekkep durumu geliyor."
  - q: "Yatay çizgi ile dikey hizalama hatası aynı çözümle mi düzelir?"
    a: "Epson kılavuzu ikisini ayrı başlıklarda anlatıyor. Yatay çizgide kâğıt yönü, kafa temizleme, kartuş ve kâğıt tipi sayılıyor. Dikey hizalama hatasında bunlara ek olarak kafa hizalama aracı ve yüksek hız seçeneğinin kapatılması geliyor."
  - q: "Kafa temizliğini kaç kez tekrarlayabilirim?"
    a: "Canon kılavuzu iki temizlikten sonra yoğun temizlemeyi, düzelmezse yazıcıyı kapatıp 24 saat sonra yoğun temizlemeyi bir kez daha öneriyor. Epson'un baskı kalitesi sayfası ise temizleme sayısı vermiyor."
images:
  coverAlt: "Yatay çizgilerle bozulmuş bir çıktı sayfası ve yanında yazıcının bakım düğmesine uzanan beyaz eldivenli sade siluet el"
  steps:
    - "Çizgili çıktıyı ışığa tutup inceleyen beyaz eldivenli sade siluet el"
    - "Kâğıt tepsisine kâğıdı yazdırılacak yüzü yukarı bakacak şekilde koyan beyaz eldivenli sade siluet el"
    - "Bilgisayar ekranındaki kâğıt tipi listesinde seçimi onaylayan beyaz eldivenli sade siluet el"
    - "Yazıcıdan çıkan çizgi bloklu desen sayfasını tutan beyaz eldivenli sade siluet el"
    - "Bilgisayardaki bakım penceresinde temizleme düğmesine basan beyaz eldivenli sade siluet el"
    - "Yazıcının fişini prizden çeken beyaz eldivenli sade siluet el ve yanında saat çizimi"
    - "Bakım penceresindeki hizalama düğmesine basan beyaz eldivenli sade siluet el"
    - "Tarayıcı camını yumuşak bezle silen beyaz eldivenli sade siluet el"
---

Sayfanın üstünden altına ince çizgiler geçiyor. Bazen yatay şeritler, bazen yazıların kenarında kayma, bazen de kopyada beyaz çizgiler. "Yazıcı çizgili çıkarıyor" diye arayanlar için Epson ve Canon'un kendi kılavuzlarını okuduk. İkisi de önce kâğıda ve ayara, sonra püskürtme uçlarına bakıyor. Aşağıdaki sıra, bu iki kılavuzun ortak mantığından çıkarıldı ve her adım kılavuzlardaki bir kontrole dayanıyor.

> ⚠️ **Önce şu sınırı bil:** burada yazıcının içini açmak, kafayı sökmek ya da bir şeyle kurcalamak yok. Anlatılan her işlem yazıcının kendi yazılım araçlarıyla yapılır. Kılavuzlar mürekkep püskürtmeli yazıcılar için; lazer yazıcıda bu adımlar geçerli olmayabilir.

## Adım adım: çizgili çıktı

**1. Çizgi tipini belirle.** Epson kılavuzu baskı kalitesi sorununu şekille karşılaştırmanı istiyor: çıktına en çok benzeyen resmin altındaki yazıyı seç. Yatay çizgiler, dikey hizalamada hata ya da çizgi, yanlış renkler ve bulanık çıktı ayrı başlıklarda. Canon'da ise boş kâğıt, bulanık baskı ve beyaz çizgiler aynı sayfada.

**2. Kâğıt yönüne bak.** Epson, sayfa besleyicide kâğıdın yazdırılabilir yüzünün üstte olmasını istiyor. Canon da tek yüzü yazdırılabilir kâğıtta yazdırılacak yüzün yukarı bakmasını söylüyor ve yanlış tarafa yazdırmanın baskıyı kötüleştirebileceğini yazıyor.

**3. Kâğıt tipini eşleştir.** Epson, yazıcı sürücüsünde seçilmiş kâğıt tipinin yüklü kâğıtla uyuşmasını istiyor. Canon'un ilk kontrolü de kâğıt ve baskı kalitesi ayarlarını denetlemek.

**4. Desen yazdır.** Canon, mürekkebin püskürtme uçlarından düzgün çıkıp çıkmadığını anlamak için püskürtme ucu denetim desenini yazdırmanı istiyor. Çizgilerde boşluk varsa uçlar tıkalıdır.

**5. Kafayı temizle.** Epson, tıkanmış mürekkep püskürtme uçlarını temizlemek için Head Cleaning yardımcı programını çalıştırmanı söylüyor. Canon'da temizlikten sonra deseni yeniden yazdırıp incelersin.

**6. Yoğun temizleme.** Canon'a göre temizlik iki kez yapıldıktan sonra sorun sürerse yoğun temizleme başlatılır. Düzelmediyse yazıcıyı kapat ve 24 saat sonra bir yoğun temizleme daha yap.

**7. Hizalama ve hız.** Epson'da dikey hizalama hatası ya da çizgi varsa Print Head Alignment (Yazdırma Kafası Hizalama) yardımcı programı çalıştırılır. Aynı başlıkta, Windows'ta sürücünün Gelişmiş penceresindeki High Speed (Yüksek Hızlı) onay kutusunun işaretini kaldırmak da var.

**8. Kartuşa ve kopyaya bak.** Epson, hata ışığı yanıp sönüyorsa uygun mürekkep kartuşunu değiştirmeni, kartuşları paketi açtıktan sonra altı ay içinde kullanmanı ve mümkünse orijinal Epson kartuşu kullanmanı istiyor. Canon, mürekkep bittiyse kartuşu değiştirmeni söylüyor. Çizgi yalnız kopyada çıkıyorsa Canon plaka camının kirli olup olmadığına bakmanı ve camı temizlemeni istiyor.

## Epson ve Canon'un ortak yanı

İki kılavuz da aynı noktaya varıyor: önce kâğıt, sonra desen, sonra temizlik. Epson buna hizalama ve hız ayarını ekliyor; Canon ise temizlik sayısını ve bekleme süresini açık yazıyor. İki kılavuzda da çizgilerin sebebi olarak yazıcının içindeki bir parçanın arızası geçmiyor. Bu adımlardan sonra sorun sürerse servise gitmek gerekir, ama o zaman elinde hangi işlemleri denediğine dair net bir liste olur.

## Hangi çizgi neye işaret eder?

Kılavuzlarda çizginin yönü ayrı başlıkta ele alınıyor. Epson, yatay çizgiler için beş şey sayıyor: kâğıt yönü, Head Cleaning, kartuşları altı ay içinde kullanmak, orijinal Epson kartuşu ve sürücüdeki doğru kâğıt tipi. Dikey hizalamada hata ya da çizgi oluşması başlığında ise kafa hizalama aracı ve yüksek hız seçeneği de var. Canon'da beyaz çizgiler, boş kâğıt, bulanık baskı ve yanlış renklerle aynı kontrol listesinde yer alıyor.

## Temizliği hangi sırayla yap?

Canon'un sırası açık: önce desen yazdır, sonra yazıcı kafası temizliğini çalıştır ve deseni yeniden yazdırıp incele. İki temizlikten sonra düzelme yoksa yoğun temizleme gelir. Yoğun temizlemeden sonra da düzelme yoksa yazıcıyı kapat, 24 saat bekle ve bir yoğun temizleme daha yap. Bunun da ardından çizgiler sürüyorsa Canon mürekkebin bitmiş olabileceğini yazıyor ve kartuşun değiştirilmesini istiyor. Epson aynı sırayı bu kadar ayrıntılı vermiyor; Head Cleaning'i çalıştırmanı, kartuşu ve kâğıdı kontrol etmeni söylüyor. Her iki durumda da her adımdan sonra deseni yeniden basıp önceki çıktıyla karşılaştırmak, hangi adımın işe yaradığını görmeni sağlar.

## Kopyada çizgi çıkıyorsa

Çizgiler bilgisayardan yazdırırken yok da yalnız kopyada varsa Canon dört ek kontrol veriyor. Plaka camı kirliyse temizlenmeli. Orijinal belge cama düzgün yerleştirilmeli. Kopyalanacak taraf aşağı bakmalı. Bu yazıcıdan alınmış bir çıktıyı orijinal olarak kullanırsan kalite düşebilir; kılavuz mümkünse bilgisayardan yeniden yazdırmanı söylüyor. 

Baskı çizgi yerine genel olarak soluksa [yazıcı silik basıyor](/blog/yazici-silik-basiyor/) yazısındaki nozzle check okuma adımlarına bak. Kartuşu tanıtamıyorsan [yazıcı kartuş tanımıyor](/blog/yazici-kartus-tanimiyor/) yazısı işine yarar.

## Servise giderken not al

1. Yazıcının marka ve modelini yaz.
2. Çizgilerin yönünü not et: yatay mı, dikey mi.
3. Denetim deseninin çıktısını sakla.
4. Kaç temizlik ve hizalama yaptığını yaz.

Cihazının belirtisine göre yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
