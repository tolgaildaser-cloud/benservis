---
title: "Telefonda sürekli reklam çıkıyor: Samsung ve Xiaomi'ye göre"
description: "Telefon ekranına sürekli reklam çıkıyorsa ne yapılır? Samsung ve Xiaomi'nin destek sayfalarına göre bildirim, uygulama, tarayıcı ve reklam ayarı sırası."
slug: "telefon-ekrana-reklam-cikiyor"
date: "2026-10-30"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk, P43 / PAKETLER #175). origin/main'de genel "telefon-ekrana-reklam-cikiyor" yok; telefon yazıları markalı ve reklam konusu yok.
# Arama kanıtı: PAKETLER #175: OT "telefon ekran" #2; "samsung telefon ekran" #1; "xiaomi telefon neden" #5,#10; "redmi telefon" #10.
# Belgeler (#88, curl -sL -A "Mozilla/5.0", HTTP 200): (S) Samsung UK "How to remove ads from a Galaxy smartphone" https://www.samsung.com/uk/support/mobile-devices/how-to-remove-ads-from-a-galaxy-smartphone/ (İngilizce, güncelleme 24 Nisan 2026; Samsung TR "reklam uyarıları" sayfası içeriksiz geldi) · (X) Xiaomi TR "Redmi 13C'de Reklamlar nasıl kapatılır?" https://www.mi.com/tr/support/faq/details/KA-711738/ (Redmi 13C örneği, İngilizceden otomatik çeviri).
# BİLEREK YAZILMAYANLAR: MSA/Güvenli mod/DNS/AdGuard tüyoları (forum, belge değil) · reklam engelleyici uygulama önerisi · fiyat (#46) · cihaz içi müdahale.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Telefonun Ayarlar uygulaması"]
steps:
  - "Reklamın nerede çıktığına bak: ana ekran, kilit ekranı, tarayıcı ya da bir uygulama."
  - "Bildirim olarak gelen reklamın bildirimini basılı tutup kapat."
  - "Son kullanılan uygulamalara bak ve reklama yol açtığından şüphelendiğin uygulamayı kaldır."
  - "Chrome'da açılır pencereleri ve reklamları kapat."
  - "Samsung İnternet kullanıyorsan açılır pencereleri engelle."
  - "Kişiselleştirilmiş reklam ayarını telefonun gizlilik menüsünden kapat."
  - "Reklamlar durmuyorsa servis ya da üretici desteğiyle görüş."
faq:
  - q: "Telefonda reklamlar neden çıkıyor?"
    a: "Samsung'a göre açılır reklamlar telefonun kendisinden değil, telefona indirilen üçüncü taraf uygulamalardan geliyor. Uygulama geliştiricileri bu yolla gelir kazanıyor. Xiaomi de reklamların belirli uygulamalarda, sistem arayüzünde ya da yazılım güncellemeleri sırasında görünebildiğini söylüyor."
  - q: "Kişiselleştirilmiş reklamları kapatınca reklamlar tamamen biter mi?"
    a: "Hayır. Xiaomi'nin sayfasına göre kapalıyken sistem uygulamalarında özelliğin açık olduğu zamanki kadar reklam görmeye devam edersin; yalnızca reklamlar kişisel tercihine dayanmaz. Samsung da bu ayarın reklamları tamamen kapatmadığını, kişisel verinle kişiselleştirmeyi durdurduğunu söylüyor."
  - q: "Açılır pencere reklamlarını tamamen durdurabilir miyim?"
    a: "Samsung'un sayfası, muhtemelen tamamen durduramayacağını ancak adımların reklamları olabildiğince azaltacağını söylüyor."
  - q: "Reklamlar bir türlü bitmiyorsa ne anlama gelir?"
    a: "Samsung, açılır reklamları yukarıdaki adımlarla durduramıyorsan bunun telefonda virüs olduğuna işaret edebileceğini belirtiyor. Bu durumda Samsung Members uygulamasından destek istenebileceğini söylüyor."
images:
  coverAlt: "Masada duran bir telefon, ekranında kapatma işaretli bir reklam penceresi"
  steps:
    - "Telefon ekranında kenarda duran bir pencere çizimi ve onu işaret eden beyaz eldivenli sade siluet el"
    - "Bildirim penceresine uzun basan beyaz eldivenli sade siluet el"
    - "Telefon ekranında uygulama simgeleri sırası ve birini kaldırmak için çöp kutusu simgesi çizimi"
    - "Tarayıcı ekranında açılır pencere simgesi ve anahtarı kapatan beyaz eldivenli sade siluet el"
    - "Telefon ekranında bir tarayıcı menüsü ve kapalı konumdaki bir anahtar çizimi"
    - "Gizlilik menüsünde kapalı konumdaki bir anahtara dokunan beyaz eldivenli sade siluet el"
    - "Telefonu servis çalışanına uzatan beyaz eldivenli sade siluet el"
---

Ana ekranda, kilit ekranında ya da bir uygulamayı açarken birden bir reklam penceresi çıkıyor. Kapatıyorsun, birazdan yenisi geliyor. "Telefon ekrana sürekli reklam çıkıyor nasıl engellerim" aramasının sebebi çoğu zaman telefon değil, üstüne yüklenen bir uygulama ya da bir ayar. Bu yazıdaki sıra **Samsung**'un reklam kaldırma destek sayfasından ve **Xiaomi**'nin Türkçe reklam kapatma sayfasından geliyor. Menü adları model ve yazılım sürümüne göre değişir; kendi telefonunun kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> 📱 **Önce şunu bil:** Samsung'a göre açılır reklamlar telefonun kendisinden değil, indirilmiş **üçüncü taraf uygulamalardan** geliyor. Bu yüzden sıra önce reklamın kaynağını bulmakla başlıyor.

## Belgeler ne diyor

| Konu | Samsung | Xiaomi |
|---|---|---|
| **Neden çıkıyor** | Üçüncü taraf uygulamalar | Uygulamalar, sistem arayüzü, güncellemeler |
| **Bildirim reklamı** | Ayarlar > Bildirimler ya da bildirime uzun bas | Belgede yok |
| **Kişiselleştirme** | Samsung hesabı > Gizlilik | Gizlilik > Reklam hizmetleri |
| **Tamamen biter mi** | Tamamen durdurulamayabilir | Sistem reklamları sürebilir |

## Reklamlar neden çıkıyor?

Samsung'a göre açılır reklamlar uygulama geliştiricileri için bir gelir yolu: reklam ekrana ne kadar sık çıkarsa geliştirici o kadar kazanıyor. Bazı reklamlar işine yarayabilir ama Samsung, her işlem sırasında ekranın her yerinde çıkmaları için bir neden olmadığını söylüyor. Xiaomi de reklamların genellikle ücretsiz uygulamalara ya da hizmetlere entegre edildiğini, ücretsiz erişim sağlasalar da müdahaleci ve dikkat dağıtıcı olabildiklerini yazıyor.

## Kurulumda bir seçenek var

Samsung'un sayfasındaki en ilginç nokta şu: Samsung'un kendi reklamları **isteğe bağlı** (opt-in). Samsung hesabı kurulurken "özelleştirme hizmetini kullan" anahtarı kişiselleştirilmiş promosyonları Samsung uygulamalarında açıyor. Yeni bir telefon kurarken bu ekranı hızlıca geçmemek, reklamları baştan engellemenin en kolay yolu. Kurulumu geçmiş olsan da 6. adımdaki yoldan kapatabilirsin.

## Adım adım: ekrana çıkan reklamı azalt

**1. Reklam nerede çıkıyor?** Ana ekranda, kilit ekranında, tarayıcıda ya da bir uygulamanın içinde mi? Xiaomi'ye göre reklamlar belirli uygulamalarda, sistem arayüzünde ya da yazılım güncellemeleri sırasında görünebilir. Hangi yerde çıktığını bilmek aşağıdaki adımlardan hangisinin işe yarayacağını belirler.

**2. Bildirim reklamını sustur.** Samsung'a göre Ayarlar > Bildirimler'e gir; reklam yeni geldiyse "yakın zamanda gönderilenler" altında görünür. İstersen o uygulamanın bildirimini düğmeyle kapatabilirsin. Reklam bildirimi geldiği anda üzerine **uzun basıp** o uygulamanın bildirim düğmesini kapatmak da mümkün.

**3. Kaynak uygulamayı bul.** Samsung, reklamı göstermek için uygulamanın etkin olması gerektiğini söylüyor. Google Play'de son kullanılan uygulamalara bak. Uzun süredir kullanmadığın ama listede görünen bir uygulama şüphelidir. Samsung, en son kullanılan uygulamalardan başlayarak reklamlar duruncaya kadar **kaldırmanı** öneriyor.

**4. Chrome'daki reklamları kapat.** Samsung'un sayfasına göre: Chrome'da üç nokta simgesine dokun, Ayarlar'a gir, Site ayarları'nı seç. "Açılır pencereler ve yönlendirmeler" kapalı olmalı. "Reklamlar" seçeneğinin de kapalı olduğundan emin ol.

**5. Samsung İnternet'te açılır pencereleri engelle.** Uygulamayı açıp üç çizgi simgesine dokun, Ayarlar'a gir. Siteler ve indirmeler altında "Açılır pencereleri engelle" düğmesini aç.

**6. Kişiselleştirilmiş reklamları kapat.** **Samsung'da** yol: Ayarlar > Samsung hesabı > Gizlilik > özelleştirme hizmeti. Buradan hizmeti kapat. Samsung bunun reklamları tamamen kapatmadığını, yalnızca verinle kişiselleştirmeyi durdurduğunu ve reklam sayısını azaltabileceğini söylüyor. **Xiaomi'de** yol: Ayarlar > Parmak izleri, yüz verileri ve ekran kilidi > Gizlilik > Reklam hizmetleri > Reklamları kişiselleştir seçeneğini kapat. Xiaomi'ye göre kapalıyken sistem uygulamalarında hâlâ aynı sayıda reklam görebilirsin; yalnızca reklamlar kişisel tercihine dayanmaz.

**7. Bitmiyorsa destek al.** Samsung, bu adımlara rağmen açılır reklamlar durmuyorsa telefonda **virüs** olabileceğini belirtiyor ve Samsung Members uygulaması üzerinden destek istemeni öneriyor. Telefonu açmak ya da sistem dosyalarına müdahale etmek bu listenin parçası değildir.

## Hangi markada ne var?

İki belge de aynı noktada birleşiyor: reklamı tek bir düğmeyle kapatmak mümkün değil. Samsung "muhtemelen tamamen durduramazsın, ama olabildiğince azaltabilirsin" diyor. Kişiselleştirmeyi kapatmanın etkisinde ise fark var: Samsung bunun reklam sayısını azaltabileceğini söylüyor, Xiaomi ise sistem uygulamalarında reklam sayısının değişmeyeceğini, yalnızca reklamların kişisel tercihe dayanmayacağını yazıyor. Yani yapılacaklar şöyle özetlenebilir: kaynağı bul (uygulama), tarayıcıdaki pencereyi engelle ve kişiselleştirmeyi kapat.

## Reklam gelen yeri not et

Destek isterken ya da bir uygulamayı kaldırmadan önce reklamın nerede çıktığını (ana ekran, kilit ekranı, tarayıcı ya da belirli bir uygulama), ne sıklıkla geldiğini ve en son hangi uygulamayı yüklediğini not etmek işini kolaylaştırır. Samsung'un yolu da zaten en son kullanılan uygulamalardan geriye doğru gitmek.

## Buradan sonrası servis işi

Uygulamayı kaldırmak, bildirimi kapatmak ve ayarları değiştirmek kullanıcı seviyesindeki işlerdir. Reklam sistem uygulamalarından geliyorsa ya da telefonda virüs şüphesi varsa üreticinin destek kanalına başvur. Telefon donuyorsa [Samsung telefon donuyor](/blog/samsung-telefon-donuyor/) yazısına bakabilirsin.

Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
