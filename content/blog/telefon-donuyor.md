---
title: "Telefon donuyor, kasıyor: Samsung ve Xiaomi'ye göre sıra"
description: "Telefon donuyor ya da kasıyor mu? Samsung ve Xiaomi'nin Türkçe destek sayfalarına göre uygulamayı kapatmaktan yedek alıp sıfırlamaya kadar sıra."
slug: "telefon-donuyor"
date: "2026-10-30"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, P44 #217). Genel (markasız) yazı. origin/main'de genel telefon-donuyor yok; yakın: samsung-telefon-donuyor (yalnız Samsung). iPhone donuyor: aynı Apple kaynağı iphone yazılarında, burada kullanılmadı.
# Arama kanıtı (PAKETLER.md #217): OT "telefon neden" #4,#5; "telefon donuyor" #1-#10; "telefon kasıyor" #1-#10; "iphone donuyor" #1-#10.
# Belgeler (30 Eki, curl -sL -A "Mozilla/5.0", HTTP 200, HTML): (S) samsung.com/tr/support/mobile-devices/how-can-i-fix-freezing-problem-on-my-galaxy-phone/ (güncelleme 2026-08-20) · (X) mi.com/tr/support/faq/details/KA-03342/ (Telefon donuyor ve işlemlere yanıt vermiyor, tüm modeller).
# BİLEREK YAZILMAYANLAR: root yöntemleri · Recovery adımları Xiaomi'nin belgesinde var, yazıda veri silme uyarısıyla ve yalnız Xiaomi kutusunda · cihazı açma, parça değişimi · iPhone (Apple belgesi indirilmedi).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yedekleme için bulut hesabı ya da bilgisayar"]
steps:
  - "Telefon takıldığında biraz bekle; yanıt vermiyor uyarısı çıkarsa uygulamayı kapat ya da yeniden aç."
  - "Ana ekrana dönmeyi dene; dönebilirsen arka plandaki uygulamaları kapat."
  - "Telefon hiç yanıt vermiyorsa zorla yeniden başlat."
  - "Yazılım ve uygulama güncellemelerini kontrol et."
  - "Depolamada gereksiz içerikleri sil; sürekli çöken uygulamayı kaldır."
  - "Verileri yedekle ve fabrika ayarlarına sıfırla."
  - "Sorun sürüyorsa yetkili servise git."
faq:
  - q: "Telefon ara sıra donarsa sorun mu var?"
    a: "Xiaomi'nin Türkçe destek sayfası telefonun ara sıra takılmasını ya da donmasını normal sayıyor. Sık sık donuyorsa aşağıdaki adımlara geç."
  - q: "Telefon hiç yanıt vermiyorsa ne yapmalıyım?"
    a: "Xiaomi, güç düğmesine 10 saniyeden uzun süre basılı tutarak zorla yeniden başlatmayı öneriyor. Samsung ise telefonu yeniden başlatmanı istiyor."
  - q: "Fabrika ayarı verilerimi siler mi?"
    a: "Evet. Samsung bu adımdan önce mutlaka yedek almanı öneriyor. Xiaomi de sıfırlamadan önce verilerini yedeklemeni istiyor."
  - q: "Hangi durumda servise gitmeliyim?"
    a: "Samsung, tüm adımlardan sonra da donma sürüyorsa en yakın Samsung servisine gitmeni söylüyor. Xiaomi de güncellemeden sonra sorun sürerse teknik servise başvurmanı istiyor."
images:
  coverAlt: "Ekranı donmuş bir akıllı telefonun sade çizimi, ekranda dönen yükleme simgesi"
  steps:
    - "Telefon ekranındaki bir uygulama penceresini kapatan beyaz eldivenli sade siluet el"
    - "Telefon ekranında arka plandaki uygulamaları yukarı kaydıran beyaz eldivenli sade siluet el"
    - "Telefonun yan düğmesini basılı tutan beyaz eldivenli sade siluet el"
    - "Telefon ekranında güncelleme simgesi ve yanında beyaz eldivenli sade siluet el"
    - "Telefon ekranında bir uygulama simgesini çöp kutusuna sürükleyen beyaz eldivenli sade siluet el"
    - "Telefondan buluta giden yedek oku ve yanında sıfırlama simgesi çizimi"
    - "Servis tezgâhına telefon bırakan beyaz eldivenli sade siluet el"
---

Ekrana dokunuyorsun, telefon cevap vermiyor. Biraz sonra her şey bir anda akıyor. "Telefon donuyor" ve "telefon kasıyor" aramalarında aranan şey bu. Aşağıdaki sırayı iki üreticinin Türkçe destek sayfasından aldık: **Samsung**'un "Galaxy telefonumda donma problemini nasıl çözerim?" sayfası ve **Xiaomi**'nin "Telefon donuyor ve işlemlere yanıt vermiyor" makalesi (tüm modeller, Redmi dahil). Kendi tahminimizi eklemedik. Markan başka biriyse aynı mantık işleyebilir ama **kendi üreticinin sayfası esastır.** Yalnız Samsung için [Samsung telefon donuyor](/blog/samsung-telefon-donuyor/) yazısına bak.

> 💾 **Önce şunu bil:** Listenin son adımı fabrika ayarlarına sıfırlamadır ve verileri siler. Samsung sıfırlamadan önce mutlaka yedek almanı öneriyor. Önceki adımlar veri silmez.

## Adım adım: donan telefon için sıra

**1. Bekle, uygulamayı kapat.** Xiaomi'ye göre bazı yazılımları kullanırken telefon donabilir. Bir süre bekle; "program yanıt vermiyor, kapatılsın mı?" benzeri bir ifade çıkacaktır. Uygulamayı kapatmak ya da yeniden açmak için dokun. Xiaomi telefonun ara sıra takılmasını ya da donmasını **normal** sayıyor.

**2. Ana ekrana dön, arka planı kapat.** Telefon uzun süre yanıt vermezse önce ana ekran düğmesini dene. Tam ekran hareketlerle kullanıyorsan ekranı yukarı kaydır. Ana ekrana dönebilirsen görev yöneticisini aç ve arka plandaki uygulamaları sonlandır, sonra uygulamayı yeniden aç. Samsung da ilk adım olarak uygulamaları arka planda kapatmanı söylüyor.

**3. Zorla yeniden başlat.** Telefon hiç yanıt vermiyorsa Xiaomi güç düğmesine **10 saniyeden uzun** süre basılı tutmanı istiyor. Çıkarılabilir pilli cihazlarda fişten çekip yeniden takmak gerekiyor. Samsung ise genel olarak telefonu **yeniden başlatmanı** öneriyor.

**4. Güncellemeleri kontrol et.** Samsung hem **yazılım** hem **uygulama** güncellemelerini kontrol etmeni istiyor. Xiaomi de önceki yöntemler sonuç vermezse cihazı **en son sürüme** güncellemeni söylüyor.

**5. Depolamayı boşalt, sorunlu uygulamayı ayır.** Samsung depolama alanındaki gereksiz ve kullanmadığın içerikleri silmeni öneriyor. Xiaomi'ye göre belirli bir uygulama sürekli çöküyorsa sorunun uygulamadan gelip gelmediğini kontrol et; uygulamayı kaldır ya da benzer işlevli başka bir uygulama indir. Xiaomi ayrıca telefonun **rootlu** olup olmadığına bakmanı istiyor; root sonrası sistem kararsız davranabilir.

**6. Yedekle ve sıfırla.** Samsung, donma sürüyorsa telefonu **sıfırlamanı** ve bu adımdan önce yedek almanı söylüyor. Xiaomi de sorun belirli bir uygulamadan gelmiyorsa verileri yedekleyip fabrika ayarlarına geri yüklemeni istiyor.

**7. Servise git.** Samsung, tüm adımlardan sonra sorun sürerse telefonu en yakın **Samsung servisine** götürmeni söylüyor. Xiaomi de yöntemler ve güncelleme sonuç vermezse **teknik servise** başvurmanı istiyor. Telefonu kendin açma.

## Neden bu sırayla?

Xiaomi'nin makalesi iki durumu ayırıyor. Birincisi **nadiren** yaşanan çökmeler ve takılmalar: bunlar için uygulamayı kapatmak, arka planı temizlemek ve zorla yeniden başlatmak yetiyor. İkincisi **sıklıkla** tekrarlayan çökmeler ve donmalar: burada önce sorunun tek bir uygulamadan gelip gelmediğine bakılıyor, gelmiyorsa yedek alıp fabrika ayarına dönülüyor, olmazsa sürüm güncelleniyor ve son olarak servise gidiliyor. Samsung'un sayfası da aynı yönde ilerliyor: arka plan, yeniden başlatma, güncelleme, depolama, sıfırlama ve servis. Yani önce telefonu hiç bozmayan adımlar geliyor, veri silen adım en sona kalıyor. Sırayı değiştirmemek, gereksiz yere veri kaybetmemenin yolu.

## Yalnız Xiaomi: logoda takılırsa

Xiaomi'nin makalesinde ayrı bir durum var: telefon çöktükten ya da yeniden başladıktan sonra **Mi logosunda** takılı kalıyor veya sürekli yeniden başlıyorsa, verilerin silinmesini kabul ediyorsan ses açma ve güç düğmesine uzun basarak **Kurtarma Moduna** girmeyi dene. Orada ses düğmeleriyle seçenekler arasında gezinip güç düğmesiyle **Wipe data** ve ardından **Wipe all data** seçeneğini onaylıyorsun. Bu işlem telefondaki **tüm verileri siler.** Mi hesabı açıksa sonrasında hesabın şifresi gerekir. Kurtarma moduna girilemiyorsa Xiaomi teknik servisi öneriyor. Samsung'un sayfasında böyle bir adım yok.

## İki üreticinin farkı

| Konu | Samsung | Xiaomi |
|---|---|---|
| Yeniden başlatma | Telefonu yeniden başlat | Güç düğmesi 10 saniyeden uzun |
| Depolama | Gereksiz içerikleri sil | Çöken uygulamayı kaldır |
| Sıfırlama | Önce yedek | Yedekle, sıfırla |
| Logoda takılma | Sayfada yok | Kurtarma moduyla veri silme |

## Ne zaman servis?

Kullanıcının yapabileceği her şey yukarıdaki yedi adımla sınırlı. Güncelleme, uygulama kaldırma ve sıfırlama sonrasında da telefon donuyorsa sorun yazılımın ötesine geçmiş olabilir. İki üretici de bu noktada servisi gösteriyor. Telefonun içini açmak, parça değiştirmek ya da root işlemi yapmak bu listenin parçası değildir. Servise giderken yedeğini almış olman işi kolaylaştırır.

## Servis çağırmadan önce üç not

1. Donma **tek bir uygulamada** mı, her yerde mi oluyor, yaz.
2. Telefonun **kaç gündür** donduğunu ve son güncellemeden önce mi sonra mı başladığını not et.
3. Yedeğini aldığından emin ol.

Bu notlarla servise gitmek işi hızlandırır. Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
