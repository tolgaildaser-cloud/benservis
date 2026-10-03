---
title: "DemirDöküm klima soğutmuyor: kontrol listesi"
description: "DemirDöküm klima serinletmiyorsa kılavuzun yetersiz soğutma satırları: mod ve ayar, güneş ve kapı-pencere, filtre, hava çıkışı, tasarruf ve uyku modu."
slug: "demirdokum-klima-sogutmuyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belge bu koşuda (07:51) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı demirdokum.com.tr (DemirDöküm'ün kendi alan adı).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/dd-kion.pdf · sayfa = PDF sayfası (basılı numara bir eksik).
#  DK) DemirDöküm "Kion lnverter" Kullanma kılavuzu 8000034092_00 (18.12.2024), DDAl2-090/120/180/240 WNO/WNI, 24 s., md5 19e3967d670a1373896a358349b1a2e5
#      https://www.demirdokum.com.tr/downloads/kion-klima-kullanma-kilavuzu-3005527.pdf
#      s.19 "Yetersiz soğutma veya ısıtma" Olası nedenler | Giderilmesi:
#        "Kapılar ve/veya pencereler açık | Kapıları ve/veya pencereleri kapatın." / "Oda içinde ısı kaynağı oluşmuş (odada çok sayıda insan var) | Mümkünse ısı kaynağından kurtulun." / "Termostat soğutma devresinde çok yüksek bir sıcaklık değerine ayarlanmış | Sıcaklığı optimum seviyeye ayarlayın." / "Hava filtresi kirlenmiş veya tıkanmış | Hava filtrelerini temizleyin." / "Hava girişinin veya çıkışının önünde engel var | Sağlıklı bir hava sirkülasyonu sağlamak için engeller varsa bunları kaldırın." / "Oda sıcaklığı belirlenen seviyeye ulaşmıyor | Biraz bekleyin." / "Ürün soğutma devresinde çalışırken pencereden doğrudan güneş ışığı giriyor | İç üniteyi güneş ışınlarına karşı koruyun (Örn.: Perde asın, kepenkleri kapatın …)."
#      s.14 "Soğutma modu: Ayarlanan sıcaklık oda sıcaklığından yüksekse, soğutma modu başlatılmaz. Ayarlanan sıcaklık değerini düşürün."
#      s.12 "4.4.2 Soğutma konumu" → "Soğutma devresini seçmek için Soğut tuşuna basın." / "Sıcaklık aralığı: 18 - 30 °C" / "Sıcaklığı oda sıcaklığından daha düşük bir değere ayarlayın." · "4.4.4 Devridaim devresi (fan)" → "Bu sırada oda sıcaklığı değişmez. Bu işletme modunda, dış ünitenin kompresörü çalışmaz." · "4.4.1 ... Hızlı soğutma fonksiyonu ile ürün, oda sıcaklığının hızla düşmesi için çok yüksek bir fan hızı ile soğutma devresinde sıcaklığı 30 dakika boyunca 18 °C'ye ayarlar." / "Hızlı soğutma / hızlı ısıtma fonksiyonunu etkinleştirmek için Hızlı düğmesine basın." · Bilgi: "Ürün uzun süre soğutma devresinde çalışırsa ön plakada ve yatay lamellerde yoğuşma oluşabilir."
#      s.13 "4.4.5 Nem alma işletimi" Bilgi: "Bu işletme modunda, ürün oda sıcaklığını ölçer ve fan devir sayısı buna göre otomatik olarak ayarlanır. Oda sıcaklığını değiştiremezsiniz."
#      s.15 "5.7 Soğutma devresinde enerji tasarrufu modunu etkinleştirin" → "Bu fonksiyon soğutma devresinde enerji tüketimini en aza indirir ve nominal güç tüketimini %20 oranında azaltır." / "Soğutma devresinde enerji tasarrufu fonksiyonunu etkinleştirmek için Dikey tuşuna 3 saniye süreyle basın." / "Enerji tasarrufu işlevi seçilirse ürünün performansı düşebilir." · Sleep: "Soğutma konumunda Sleep modu etkinleştirildiğinde, oda sıcaklığı talep edilen değeri, 30 dakika sonra ayarlanan sıcaklıktan 1 °C daha yüksektir ve 1 saat sonra 2 °C daha yüksektir."
#      s.17 "6.3.1" → "İç üniteyi asla hava filtresi olmadan çalıştırmayın." / "Hava filtresini çalışma sezonunun başında ve sonunda temizleyin." / "Hava filtresini her 2 yılda bir veya hasar gördüğünde değiştirin." · "6.3.2 Hava filtresinin temizlenmesi" → "1. Ürünü elektrik beslemesinden ayırın." "2. Hava filtresini tutamaklarından tutun ve hafifçe yukarı doğru çekin." "3. Hafa filtresini çıkarın." "4. Hava filtresini bir elektrikli süpürge ile veya sıcak su (maks. 45 °C) ve doğal bir temizleme maddesi kullanarak temizleyin." "5. Temizlik tamamlandığında, hava filtresini gölgede kurutun ve hava filtresini değiştirin." "Yeniden takmadan önce filtrelerin tamamen kuru olduğundan emin olun." · Uyarı: "Hava filtresini çıkarırken metal parçalara dokunmayın."
#      s.8 "İç ünitenin soğutma gücü/ısıtma gücü, dış ünitenin oda sıcaklığına bağlı olarak değişir." Soğutma dış sıcaklık: DDAI2-090/120WNI "−10 - 48 °C", DDAI2-180/240WNI "−15 - 48 °C".
#      s.17 "Yoğuşma suyunun doğru şekilde tahliye edildiğinden emin olmak için yoğuşma suyu gider hortumunu kontrol edin."
#      s.5 "Soğutucu madde kaçağı varsa kaçağı gidermesi için yetkili bayiye başvurun." · s.16 "Ürünün sürekli çalışmaya hazır olması ve işletim güvenliği, güvenirliği ve yüksek kullanım ömrü için ön koşul bir yetkili bayi tarafından ürünün yıllık kontrolünün/bakımının yapılmasıdır."
# YAKIN KOPYA: DemirDöküm'ün yayında klima sayfası yok. Ölçüm .KAYNAK.md'de (yayındaki *-klima-sogutmuyor sayfaları + bugünkü kardeşler).
# BİLEREK YAZILMAYANLAR: soğutucu madde / gaz (servis) · dış ünitenin temizliği ve yoğuşma suyu gider hortumu temizliği (kılavuz periyot veriyor ama yöntem vermiyor) · fiyat.
# Alıntı denetim tablosu: demirdokum-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (filtre kuruma hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge ya da en fazla 45°C su ve doğal bir temizleme maddesi"]
steps:
  - "Kumandada Soğut tuşuna bas ve sıcaklığı oda sıcaklığından daha düşük bir değere ayarla."
  - "Ayarlanan sıcaklık çok yüksekse 18-30°C aralığında daha düşük bir değere indir."
  - "Klima çalışırken odanın kapı ve pencerelerini kapat."
  - "Güneş doğrudan pencereden giriyorsa perdeyi çek ya da kepengi kapat."
  - "Klimanın hava giriş ve çıkışının önündeki engelleri kaldır."
  - "Enerji tasarrufu ya da uyku modu açıksa kapat."
  - "Klimanın elektriğini kes, hava filtresini tutamaklarından çekip çıkar, elektrikli süpürgeyle ya da en fazla 45°C suyla temizle, gölgede kurutup tak."
  - "Oda hedef sıcaklığa henüz ulaşmadıysa biraz bekle; sürerse DemirDöküm yetkili servisine başvur."
faq:
  - q: "DemirDöküm klima neden az soğutur?"
    a: "Kion kılavuzunun 'Yetersiz soğutma veya ısıtma' satırı yedi neden sayıyor: açık kapı ve pencereler, odadaki ısı kaynakları (örneğin çok sayıda insan), çok yüksek ayarlanmış sıcaklık, kirli ya da tıkalı hava filtresi, hava giriş ve çıkışının önündeki engel, odanın henüz hedef sıcaklığa ulaşmamış olması ve pencereden doğrudan giren güneş."
  - q: "Klima fan modunda, hava geliyor ama serin değil. Neden?"
    a: "Kılavuza göre devridaim (fan) modunda dış ünitenin kompresörü çalışmaz ve oda sıcaklığı değişmez. Serinletmek için Soğut tuşuyla soğutma moduna geç. Nem alma modunda da oda sıcaklığını sen değiştiremezsin; ünite fanı kendisi ayarlar."
  - q: "Enerji tasarrufu modu soğutmayı etkiler mi?"
    a: "Evet. DemirDöküm'e göre bu mod soğutmada nominal güç tüketimini yüzde 20 azaltır ve seçildiğinde ürünün performansı düşebilir. Mod, Dikey tuşuna 3 saniye basılarak açılıp kapanır."
  - q: "Odayı çabuk serinletmenin bir yolu var mı?"
    a: "Kion kumandasındaki Hızlı düğmesi soğutmada sıcaklığı 30 dakika boyunca 18°C'ye ayarlar ve çok yüksek fan hızıyla çalışır. Herhangi bir mod ya da sıcaklık tuşuna basınca işlev kapanır, klima en yüksek fan hızında çalışmaya devam eder."
  - q: "Ön panelde ve kanatlarda su damlacıkları var. Normal mi?"
    a: "Kılavuz, ürün uzun süre soğutmada çalışırsa ön plakada ve yatay lamellerde yoğuşma oluşabileceğini yazıyor. Kılavuz ayrıca yoğuşma suyunun doğru tahliye edildiğinden emin olmak için gider hortumunun kontrol edilmesini istiyor."
images:
  coverAlt: "Yaz öğleden sonrası güneş alan bir salonda yarıya kadar çekilmiş açık renk perde, duvarda kanatları açık beyaz split klima ve sehpada bir bardak buzlu su"
---

Klima çalışıyor, sesi geliyor, ama oda bir türlü serinlemiyor. DemirDöküm'ün Kion inverter kullanma kılavuzu bunu arıza giderme tablosunda **"Yetersiz soğutma veya ısıtma"** başlığıyla ele alıyor ve yedi ayrı neden sıralıyor; çoğunun çözümü evde birkaç dakikalık iş: **"Kapıları ve/veya pencereleri kapatın."**, **"Hava filtrelerini temizleyin."**, **"İç üniteyi güneş ışınlarına karşı koruyun (Örn.: Perde asın, kepenkleri kapatın …)."** Tablodaki satırlardan biri de yalnızca **"Biraz bekleyin."** diyor. Aşağıda DemirDöküm'ün bu satırlarını, kumandadaki mod ve tasarruf ayarlarıyla birlikte kontrol sırasına koyduk.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Soğut modu açık mı, ayar odanın altında mı? Kapı-pencereyi kapat, güneşe perde çek. Ünitenin önünü aç. Enerji tasarrufu ve uyku modunu kapat. Filtreyi temizle. Oda yeni açıldıysa biraz bekle. Sürerse → DemirDöküm yetkili servisi.

## DemirDöküm'ün yedi nedeni

| Kılavuzdaki neden | Kılavuzdaki çözüm |
|---|---|
| Termostat soğutmada çok yüksek ayarlı | Sıcaklığı uygun seviyeye ayarla |
| Kapılar ya da pencereler açık | Kapat |
| Pencereden doğrudan güneş giriyor | Perde as, kepengi kapat |
| Odada ısı kaynağı var (örneğin çok sayıda insan) | Mümkünse ısı kaynağından kurtul |
| Hava giriş ya da çıkışının önünde engel | Engeli kaldır |
| Hava filtresi kirli ya da tıkalı | Filtreyi temizle |
| Oda henüz hedef sıcaklığa ulaşmadı | Biraz bekle |

Kılavuz ayrıca soğutma gücünün dış ortam sıcaklığına göre değiştiğini yazıyor; Kion iç ünitelerinde soğutma için dış sıcaklık aralığı 09 ve 12 modellerde −10 ile 48°C, 18 ve 24 modellerde −15 ile 48°C.

## Adım adım: evde denenecekler

**1. Mod.** Kumandada Soğut tuşuna bas ve sıcaklığı oda sıcaklığından daha düşük bir değere ayarla. Kılavuza göre ayarlanan sıcaklık oda sıcaklığından yüksekse soğutma hiç başlamaz. Fan (devridaim) modunda ise dış ünitenin kompresörü çalışmaz, oda sıcaklığı değişmez.

**2. Ayar sıcaklığı.** Ayarlanan sıcaklık çok yüksekse 18-30°C aralığında daha düşük bir değere indir. Kion'da soğutma için ayar aralığı bu. Odayı hızlı serinletmek istersen Hızlı düğmesi 30 dakika boyunca 18°C'ye ve çok yüksek fan hızına geçer.

**3. Kapı ve pencere.** Klima çalışırken odanın kapı ve pencerelerini kapat. Odada ısı kaynağı varsa, örneğin oda çok kalabalıksa, kılavuz mümkünse ısı kaynağından kurtulmanı öneriyor.

**4. Güneş.** Güneş doğrudan pencereden giriyorsa perdeyi çek ya da kepengi kapat. DemirDöküm bunu soğutmaya özgü ayrı bir satır olarak veriyor.

**5. Hava yolu.** Klimanın hava giriş ve çıkışının önündeki engelleri kaldır. Kılavuz bunu sağlıklı hava dolaşımı için istiyor.

**6. Tasarruf ve uyku.** Enerji tasarrufu ya da uyku modu açıksa kapat. Enerji tasarrufu soğutmada güç tüketimini yüzde 20 azaltır ve performansı düşürebilir; Dikey tuşuna 3 saniye basarak kapatılır. Uyku modunda ise oda sıcaklığı 30 dakika sonra ayardan 1°C, 1 saat sonra 2°C yükseğe ayarlanır.

**7. Hava filtresi.** Klimanın elektriğini kes, hava filtresini tutamaklarından çekip çıkar, elektrikli süpürgeyle ya da en fazla 45°C suyla temizle, gölgede kurutup tak. Su kullanırsan doğal bir temizleme maddesi yeterli. Filtreyi çıkarırken iç ünitenin metal parçalarına dokunma, kenarları keskin. Filtre tamamen kurumadan takma, üniteyi filtresiz de çalıştırma. Kılavuz filtrenin her sezonun başında ve sonunda temizlenmesini, 2 yılda bir ya da hasar gördüğünde değiştirilmesini öneriyor.

**8. Bekleme ve servis.** Oda hedef sıcaklığa henüz ulaşmadıysa biraz bekle; sürerse DemirDöküm yetkili servisine başvur.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod, ayar, kapı-pencere, güneş, hava yolu, tasarruf ve uyku modu, filtre | Senin, bu rehberdeki adımlar |
| Soğutucu madde kaçağı şüphesi | Yetkili bayi ya da servis |
| Adımlardan sonra da yetersiz soğutma | DemirDöküm yetkili servisi |
| Yıllık kontrol ve bakım | Yetkili bayi |

⛔ Ürünü su ile durulama ve iç ünitenin içine müdahale etme; DemirDöküm kılavuzu bakım ve onarımın yetkili teknik servis tarafından yapılmasını istiyor.

Klima hiç açılmıyorsa [DemirDöküm klima çalışmıyor](/blog/demirdokum-klima-calismiyor/), kışın ısıtma zayıfsa [DemirDöküm klima ısıtmıyor](/blog/demirdokum-klima-isitmiyor/) yazısına bak. Markadan bağımsız anlatım [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısında; filtre için genel rehber [klima filtresi temizleme](/blog/klima-filtresi-temizleme/).

---

**Kaynak künyesi.** Yetersiz soğutma satırları, mod ve sıcaklık ayarı, hızlı soğutma, enerji tasarrufu ve uyku modu, hava filtresi bakımı ve çalışma sıcaklıkları DemirDöküm'ün demirdokum.com.tr'deki "Kion lnverter" kullanma kılavuzundan (8000034092_00) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
