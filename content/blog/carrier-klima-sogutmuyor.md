---
title: "Carrier klima soğutmuyor: zayıf soğutma"
description: "Carrier klima az soğutuyorsa Alarko Carrier kılavuzunun zayıf soğutma satırları: ayar, X-ECO ve sessiz mod, filtre, hava yolu, güneş ve ısı kaynakları."
slug: "carrier-klima-sogutmuyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belgeler bu koşuda (07:51) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı alarko-carrier.com.tr.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/ · sayfa = PDF sayfası.
#  CK) "CARRIER SPLIT KLİMA KULLANIM KILAVUZU QHA009DS, QHA012DS, QHA018DS, QHA024DS", 17 s., md5 4972ac8cac45c5428a453789de2a5a51
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/klima-carrier-xpowerfresh-kk.pdf
#      s.14 "Zayıf Soğutma Performansı" Muhtemel Nedenleri | Çözüm → "Sıcaklık ayarı ortam sıcaklığından fazla olabilir. | Isı ayarını düşürün." / "İç ve dış ünitedeki ısı değiştirici kirlidir. | Etkilenen ısıdeğiştiriciyi temizleyin." / "Hava filtresi kirlidir. | Filtreyi çıkartın ve talimatlara göre temizleyin." / "Cihazlardan birinin hava giriş veya çıkış kısmı bloke olmuştur. | Cihazı kapatın. Blokajı kaldırın ve tekrar çalıştırın." / "Kapılar ve pencereler açıktır. | Cihazı çalıştırırken tüm kapı ve pencerelerin kapalı olduğundan emin olunuz." / "Güneş ışığı ile fazla ısı meydana geliyorsa | Yüksek ısı veya parlak güneş ışığı durumlarında pencereleri ve perdeleri kapatın." / "Odada çok fazla ısı kaynağı varsa (insanlar, bilgisayarlar, elektronikler vb.) | Isı kaynaklarının miktarını azaltın." / "Sızıntı veya uzun süre kullanım nedeniyle az soğutma olması | Sızıntıları kontrol edin. Gerekirse yeniden test ederek ve soğutucu akışkan dolumu yaptırın." / "Sessiz çalışma fonksiyonu aktifleştirilir (opsiyonel fonksiyon) | Sessiz çalışma fonksiyonu çalışma sıklığını azaltarak ürün performansını düşürebilir. Sessiz çalışma fonksiyonunu sonlandırın."
#      s.12 "Cihaz Soğutma/Isıtma modundan Fan moduna geçiyorsa | Ayar ısısına erişildiğinde cihaz kompresörü kapatır. Sıcaklık değişiklik gösterdiğinde cihaz tekrar çalışmaya devam edecektir." / "İç ünite beyaz sis çıkartıyorsa | Rutubetli bölgelerde oda havası ile dış ortam havası arasında büyük ısı farkı olursa beyaz sis oluşabilir."
#      s.10 "Hava Filtresinin Temizliği" → "Temizliği yapılmamış bir filtre soğutma verimliliğini azaltabilir ve sağlığınız için kötü olabilir. Filtreyi iki haftada bir temizlediğinizden emin olun." "1. İç ünitenin ön panelini kaldırın. 2. Önce tokayı gevşetmek için filtre ucundaki sekmeye basın ve onu kaldırın. Sonra kendinize çekin. 3. Şimdi filtreyi dışarı çıkarın ... 5. Hava filtresini ılık sabunlu suyla temizleyin. Hafif bir deterjan kullanın. 6. Filtreyi taze suyla çalkalayın ve sonra fazla suyu arıtın. 7. Onu serin, kuru bir yerde kurulayın ve direkt güneş ışığına maruz bırakmayın. 8. ... iç üniteye geri kaydırın. 9. İç ünitenin ön panelini kapatın." / "Temizlik ve bakım öncesinde her zaman klimanızı kapatın ve güç bağlantısını kesin."
#      s.11 "Filtreyi çıkartırken cihazın metal kısımlarına dokunmayın. Keskin metal kenarları sizi kesebilir." / "İç ünitenin içini temizlemek için su kullanmayın." / "240 saat kullanım sonrası iç ünite göstergesinde “CL” belirecektir. Bu filtre temizleme hatırlatıcısıdır." / "Hatırlatıcıyı başlatmak için uzaktan kumandanızdaki LED düğmesine 4 kez veya MANUEL KONTROL düğmesine 3 kez basın." / "Dış ünitenin bakımı ve temizliği yetkili bir bayi veya lisanslı bir hizmet sağlayıcı tarafından yapılmalıdır."
#      s.9 "Soğutma veya kurutma modunu kullanırken, uzun süre boyunca panjuru çok dik açıda tutmayın. Bu suyun panjur kanadında yoğunlaşmasına yol açabilir ve zemine veya döşemelerinize damlayabilir. Soğutma veya ısıtma modunu kullanırken panjuru çok dik açıda ayarlamak sınırlanan hava akışı nedeniyle ünitenin performansını azaltabilir." / "NOT: Panjuru elinizle hareket ettirmeyin."
#      s.8 Normal çalışma sıcaklığı, Soğutma modu iç ortam "17°C - 32°C" · "Cihazınızın performansını daha fazla optimize etmek için ... Kapıları ve pencereleri kapalı tutun. ... Hava giriş veya çıkışlarını engellemeyin. Düzenli olarak hava filtrelerini kontrol edip temizleyin."
#  CR) "UZAKTAN KUMANDA KULLANIM KILAVUZU", 12 s., md5 b9bd8c2723f9e92eb0f12719248e0a83
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/klima-carrier-xpowerfresh-kumanda-kk.pdf
#      s.10 Sessiz: "Sessiz fonksiyonunu aktif etmek/devre dışı bırakmak için Fan tuşuna 2 saniyeden uzun süreyle basılı tutun. Kompresörün düşük devirde çalışması nedeniyle, soğutma veya ısıtma kapasitesi yeterli gelmeyebilir." · X-ECO: "Soğutma modundayken bu butona bastığınızda uzaktan kumanda, enerji tasarrufu sağlamak için otomatik olarak sıcaklığı 24°C'ye ayarlar ve fan devrini Otomatik ayarına getirir (yalnızca eğer ayarlı sıcaklık 24°C'nin altında ise)." / "EKO çalışması sırasında ayarlı sıcaklık 24°C veya üzerinde olmalıdır; aksi halde yetersiz soğutma meydana gelebilir. Eğer rahatsız olursanız durdurmak için X-EKO butonuna tekrar basmanız yeterlidir."
#      s.9 "Yüksek Güç (Turbo) fonksiyonunu aktif etmek için bu tuşa basın. Ayar sıcaklığına en kısa sürede ulaşılabilmesine olanak sağlar." · s.5 "Sıcaklık Düşürme Sıcaklık değerini 1°C aralıklarla düşürür. En düşük sıcaklık 17°C'dir" · s.8 EKO Uyku "İlk 2 saatte, ayar sıcaklığı saat başına 1°C yükselecek (soğutma)"
# YAKIN KOPYA: Carrier'ın yayında klima sayfası yok. CK tablosu yayındaki airfel-klima-sogutmuyor'un kaynağıyla aynı OEM metnine yakın → bu sayfa X-ECO, Sessiz, CL hatırlatıcı ve panjur notlarını öne alıyor; ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ısı değiştirici temizliği (kılavuz "temizleyin" diyor ama iç ünitenin içinde su yasak, dış ünite bakımı yetkiliye ait → servis) · soğutucu akışkan dolumu (servis) · plazma filtre/iyonizer temizliği (bazı ünitelerde; elle tutulan vakum gerektiriyor) · fiyat.
# Alıntı denetim tablosu: carrier-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (filtre kuruma hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Ilık sabunlu su ve hafif deterjan"]
steps:
  - "Kumandada soğutma modunu seç ve ayar sıcaklığını oda sıcaklığının altına, en düşük 17°C'ye kadar indir."
  - "Kumandada X-ECO açıksa ve ayar 24°C'nin altındaysa X-ECO tuşuna yeniden basıp kapat."
  - "Sessiz fonksiyonu açıksa Fan tuşunu 2 saniyeden uzun basılı tutarak kapat."
  - "Klima çalışırken tüm kapı ve pencereleri kapat; güneş yüksekse perdeleri de çek."
  - "Odadaki ısı kaynaklarını, örneğin çalışan bilgisayar ve elektronik cihazları azalt."
  - "Klimayı kapat, iç ya da dış ünitenin hava giriş ve çıkışını kapatan engeli kaldır ve yeniden çalıştır."
  - "Klimayı kapatıp gücünü kes, ön paneli kaldırıp hava filtresini çıkar, ılık sabunlu suyla yıka, durula, gölgede kurutup tak."
  - "Bu adımlardan sonra da soğutma zayıfsa yetkili servise başvur."
faq:
  - q: "Carrier klima neden az soğutur?"
    a: "Alarko Carrier kılavuzunun 'Zayıf Soğutma Performansı' satırı dokuz neden sayıyor: ortam sıcaklığından yüksek ayar, kirli ısı değiştirici, kirli hava filtresi, tıkanmış hava girişi ya da çıkışı, açık kapı ve pencereler, güneşten gelen fazla ısı, odadaki ısı kaynakları, sızıntı ya da uzun kullanım nedeniyle azalmış soğutucu ve açık kalan sessiz çalışma fonksiyonu."
  - q: "X-ECO'ya bastım, oda eskisi kadar serinlemiyor. Neden?"
    a: "Carrier kumanda kılavuzuna göre X-ECO, soğutmada ayar 24°C'nin altındaysa sıcaklığı 24°C'ye çeker ve fanı otomatiğe alır. Kılavuz, EKO çalışmasında ayarın 24°C ya da üzerinde olması gerektiğini, aksi halde yetersiz soğutma olabileceğini yazıyor. Rahatsız olursan X-ECO tuşuna yeniden basman yeterli."
  - q: "Ekranda CL yazıyor. Ne demek?"
    a: "CL, 240 saatlik kullanımdan sonra beliren filtre temizleme hatırlatıcısıdır. Filtreyi temizledikten sonra hatırlatıcıyı sıfırlamak için kumandadaki LED düğmesine 4 kez ya da MANUEL KONTROL düğmesine 3 kez bas; sıfırlamazsan CL her açılışta yeniden görünür."
  - q: "Soğuturken klima fana geçti. Arıza mı?"
    a: "Hayır. Kılavuza göre ayar sıcaklığına ulaşıldığında cihaz kompresörü kapatır, sıcaklık değişince yeniden çalışır. Rutubetli havada iç üniteden beyaz sis çıkması da kılavuzun arıza saymadığı durumlar arasında."
  - q: "Panjurun açısı soğutmayı etkiler mi?"
    a: "Evet. Kılavuz panjuru çok dik açıda ayarlamanın hava akışını sınırlayıp performansı düşürebileceğini, soğutmada uzun süre dik tutulursa kanatta su yoğunlaşıp zemine damlayabileceğini yazıyor. Panjuru elle değil, kumandadaki Swing ya da Sabit tuşuyla ayarla."
images:
  coverAlt: "Sıcak bir yaz gününde perdeleri kapatılmış bir oturma odası, duvarda çalışan beyaz split klima ve masada kapağı kapatılmış bir dizüstü bilgisayar"
---

Klima saatlerdir çalışıyor ama oda ancak biraz serinliyor. Alarko Carrier'ın Carrier split klima kullanım kılavuzu bu tabloyu **"Zayıf Soğutma Performansı"** başlığıyla veriyor ve dokuz olası neden sayıyor. Listedeki neredeyse her satırın çözümü evde yapılabilecek bir iş: **"Isı ayarını düşürün."**, **"Filtreyi çıkartın ve talimatlara göre temizleyin."**, **"Isı kaynaklarının miktarını azaltın."** Kılavuzun bu listede kumandaya dair bir uyarısı da var: sessiz çalışma fonksiyonu **"ürün performansını düşürebilir"**. Carrier kumandasındaki X-ECO tuşu da benzer bir etki yapabiliyor. Aşağıda önce kumanda ayarlarını, sonra odayı, en son filtreyi kontrol ediyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Soğutma modu ve odanın altında bir ayar. X-ECO ve Sessiz kapalı mı? Kapı-pencere ve perde kapalı, ısı kaynakları az mı? Ünitenin önünü aç. Filtreyi ılık sabunlu suyla yıka. Sürerse → yetkili servis.

## Carrier'ın dokuz nedeni

| Muhtemel neden | Kılavuzdaki çözüm | Kimin işi |
|---|---|---|
| Ayar ortam sıcaklığından yüksek | Ayarı düşür | Senin |
| Sessiz çalışma fonksiyonu açık | Sessiz çalışmayı sonlandır | Senin |
| Kapılar ve pencereler açık | Kapat | Senin |
| Güneşten gelen fazla ısı | Pencereleri ve perdeleri kapat | Senin |
| Odada çok ısı kaynağı (insanlar, bilgisayarlar, elektronikler) | Isı kaynaklarını azalt | Senin |
| Hava giriş ya da çıkışı tıkalı | Cihazı kapat, engeli kaldır, yeniden çalıştır | Senin |
| Hava filtresi kirli | Filtreyi çıkar, talimata göre temizle | Senin |
| İç ve dış ünitedeki ısı değiştirici kirli | Isı değiştiriciyi temizleme | Yetkili servis |
| Sızıntı ya da uzun kullanım nedeniyle az soğutucu | Sızıntı kontrolü ve soğutucu dolumu | Yetkili servis |

Kılavuz soğutma için iç ortam sıcaklığı aralığını 17-32°C olarak veriyor; aralığın dışında güvenlik koruma özellikleri devreye girebilir.

## Adım adım: evde denenecekler

**1. Mod ve ayar.** Kumandada soğutma modunu seç ve ayar sıcaklığını oda sıcaklığının altına, en düşük 17°C'ye kadar indir. Kumandadaki sıcaklık düşürme tuşu her basışta 1°C indirir. Odayı daha hızlı serinletmek istersen Yüksek Güç (Turbo) tuşu, ayar sıcaklığına en kısa sürede ulaşılmasını sağlar.

**2. X-ECO.** Kumandada X-ECO açıksa ve ayar 24°C'nin altındaysa X-ECO tuşuna yeniden basıp kapat. Bu mod soğutmada ayarı 24°C'ye çeker; kılavuz bu modda ayar 24°C'nin altında kalırsa yetersiz soğutma olabileceğini yazıyor.

**3. Sessiz fonksiyonu.** Sessiz fonksiyonu açıksa Fan tuşunu 2 saniyeden uzun basılı tutarak kapat. Sessizde kompresör düşük devirde çalıştığı için soğutma kapasitesi yeterli gelmeyebilir.

**4. Kapı, pencere, perde.** Klima çalışırken tüm kapı ve pencereleri kapat; güneş yüksekse perdeleri de çek. Carrier güneşli ve sıcak saatler için pencereyle birlikte perdenin de kapatılmasını istiyor.

**5. Isı kaynakları.** Odadaki ısı kaynaklarını, örneğin çalışan bilgisayar ve elektronik cihazları azalt. Kılavuz odadaki insanları da ısı kaynağı olarak sayıyor.

**6. Hava yolu.** Klimayı kapat, iç ya da dış ünitenin hava giriş ve çıkışını kapatan engeli kaldır ve yeniden çalıştır. Panjuru da çok dik açıda bırakma; kılavuza göre bu, hava akışını sınırlayıp performansı düşürür. Panjuru elle değil kumandayla ayarla.

**7. Hava filtresi.** Klimayı kapatıp gücünü kes, ön paneli kaldırıp hava filtresini çıkar, ılık sabunlu suyla yıka, durula, gölgede kurutup tak. Filtrenin ucundaki sekmeye basıp kaldırırsan filtre kendine doğru çekilerek çıkar. Hafif bir deterjan yeterli; filtreyi doğrudan güneşte kurutma ve metal kısımlara dokunma. Carrier filtreyi iki haftada bir temizlemeni öneriyor; ekranda CL görünmesi de temizlik zamanının geldiğini gösterir.

**8. Servis.** Bu adımlardan sonra da soğutma zayıfsa yetkili servise başvur. Kılavuzun kalan iki nedeni, kirli ısı değiştirici ve azalmış soğutucu, kullanıcının yapacağı işler değil.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Ayar, X-ECO, sessiz, kapı-pencere, perde, ısı kaynakları, hava yolu, filtre | Senin, bu rehberdeki adımlar |
| Kirli ısı değiştirici, dış ünitenin bakımı ve temizliği | Yetkili bayi ya da servis |
| Soğutucu sızıntısı, soğutucu dolumu | Yetkili servis |
| Klima hiç açılmıyor ya da ekranda hata kodu | [Carrier klima çalışmıyor](/blog/carrier-klima-calismiyor/) yazısındaki sıra |

⛔ İç ünitenin içini suyla temizleme; Carrier kılavuzu bunun yalıtımı bozup elektrik çarpmasına yol açabileceğini yazıyor.

Kışın ısıtma zayıfsa [Carrier klima ısıtmıyor](/blog/carrier-klima-isitmiyor/) yazısına bak. Markadan bağımsız anlatım [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısında; filtre için genel rehber [klima filtresi temizleme](/blog/klima-filtresi-temizleme/).

---

**Kaynak künyesi.** Zayıf soğutma tablosu, "işlev bozukluğu değil" listesi, panjur ve çalışma sıcaklığı notları ve hava filtresi bakımı Alarko Carrier'ın alarko-carrier.com.tr'deki "Carrier Split Klima Kullanım Kılavuzu"ndan (QHA009DS-QHA024DS), X-ECO, sessiz, turbo ve sıcaklık tuşları aynı serinin "Uzaktan Kumanda Kullanım Kılavuzu"ndan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
