---
title: "Kiwi oto buzdolabı kullanımı: bağlantı, soğutma, temizlik"
description: "Kiwi oto buzdolabı kılavuza göre: kabloyu çakmak soketine tak, soğutmayı aç, havalandırmayı kapatma; KIM-4755'te ECO, MAX ve akü koruması."
slug: "kiwi-oto-buzdolabi-kullanimi"
date: "2026-10-24"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 7, küme Y1, çatal D). origin/main'de "oto buzdolab" / "araç buzdolab" geçen slug ya da başlık yok; Dalga 6-7 klasörlerinde yok.
# OT (#164, bu koşu, suggestqueries client=firefox hl=tr gl=tr): "kiwi oto buzdolabı" → 1. kendisi · 2. "…8 lt" · 3. "…10 lt" · 5. "…21 lt"; "kiwi mini buzdolabı" → 7. "…araç". Kiwi kapsamı Tolga talimatıyla yeterli. GSC: Sorgular.csv'lerde "kiwi" satırı yok.
# Belge zinciri (#88): kiwi.com.tr ürün sayfası (HTTP 200) → static.kiwi.com.tr PDF (HTTP 200 application/pdf), bu koşuda curl ile indirildi.
#  (A) KIM-4750 föy 2 s. md5 c05d7afef43b9a68f4d82cef54209a3a · (B) KIM-4751 föy 2 s. md5 ecdfed5d9f76696b1b7599f677d4402a
#  (C) KIM-4752 föy 2 s. md5 aac908d21b6e37a5b908754c46a803b2 · (D) KIM-4753 föy 2 s. md5 ec13af49d88b6950e3192f64c15dafce
#  (E) KIM-4754 föy 2 s. md5 0103390469d7439749727729394bd1ca · (F) KIM-4755 kılavuz 28 s. (TR s.14-24) md5 03e0bea03f416e6fc23460f7f75f9995
# Hacimler: A 8 L, B 10 L (teknik bilgi kutusu, görüntüden okundu) · C 21 L · D 40 L · E 45 L · F 35 L (metin katmanı).
# BİLEREK YAZILMAYANLAR: sigorta değişimi, kablo/soket onarımı, kompresör ve fan teşhisi, F2-F8 için kullanıcı müdahalesi (bekle-yeniden başlat dışında) · uygulamanın adı (belgede yok) · termoelektrik modellerin ev prizinde kullanımı (föylerde yok) · fiyat (#46).
# Alıntı denetim tablosu: kiwi-oto-buzdolabi-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak nemli bez", "Kuru bez"]
steps:
  - "Buzdolabını kutudan çıkar, etiketleri ve koruyucu folyoyu sök, içini ve dışını nemli bezle sil; kompresörlü modeli dik konumda bekletmeden çalıştırma."
  - "Cihazı sabit ve düz bir yüzeye koy, havalandırma ve ısı dağıtım açıklıklarının önünü boş bırak."
  - "Yan taraftaki anahtar kapalıyken güç kablosunu ünitenin soketine, diğer ucunu aracın çakmak soketine tak."
  - "Anahtarı soğutma konumuna getir ya da açma/kapama düğmesine bas, gösterge yanınca soğutmanın başladığını kontrol et."
  - "Önceden soğutulmuş ya da dondurulmuş yiyecek ve içecekleri yerleştir, kapağı sık açma."
  - "Kompresörlü KIM-4755'te ECO ya da MAX modunu ve akü koruma seviyesini seç."
  - "Temizlikten önce fişi araçtan çek, cihazı nemli bezle sil, içte biriken suyu temizle."
faq:
  - q: "Kiwi oto buzdolabı evde prize takılır mı?"
    a: "KIM-4750, 4751, 4752, 4753 ve 4754 föyleri cihazın yalnız araç prizine (12 V ya da 12/24 V) bağlanmasını yazıyor; ev prizi tarif edilmiyor. KIM-4755 kılavuzu ise hem araç hem ev kullanımını anlatıyor: araçta 12 V DC, evde AC 220–240 V adaptörle."
  - q: "Kiwi oto buzdolabı kaç derece soğutur?"
    a: "Termoelektrik KIM-4753'ün föyüne göre soğutma sıcaklığı ortam sıcaklığının yaklaşık 20–24°C altında çalışır. Kompresörlü KIM-4755'te sıcaklık +20 ile -20°C arasında ayarlanır; -20°C değeri 25°C test ortamında verilmiş."
  - q: "Oto buzdolabında et dondurulur mu?"
    a: "Termoelektrik modellerin föyleri ürünün geleneksel bir buzdolabı olmadığını, taze et ürünlerinin dondurulamayacağını, ama dondurulmuş yiyecek ve içeceklerin saklanması için ideal olduğunu yazıyor. KIM-4755 kılavuzu ete -10°C, dondurmaya -15°C öneriyor."
  - q: "KIM-4755 ekranında F1 yazıyor, ne yapmalıyım?"
    a: "Kılavuza göre F1 düşük voltaj korumasıdır. Akü koruma seviyesini bir kademe düşür: H'den M'ye ya da L'ye. Araç aküsüyle kullanırken H, harici ya da yedek aküde M veya L öneriliyor."
images:
  coverAlt: "Bir aracın bagajında duran, kapağı kapalı taşınabilir bir soğutucu kutu"
  steps:
    - "Çizim: solda oto buzdolabı, sağda ambalaj kutusu"
    - "Çizim: solda oto buzdolabı, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda oto buzdolabı, sağda anten girişi ve kablo"
    - "Çizim: solda oto buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda oto buzdolabı, sağda iç bölme ve raflar"
    - "Çizim: solda oto buzdolabı, sağda uzaktan kumanda"
    - "Çizim: solda oto buzdolabı, sağda prizden çekilen fiş"
---

Kiwi'nin oto buzdolabı ailesinde iki farklı cihaz var. KIM-4750, 4751, 4752, 4753 ve 4754 föylerinde soğutma tipi **termoelektrik**; bunlar aracın çakmak soketinden çalışan, soğuk tutmaya yönelik kutular. KIM-4755 ise **kompresörlü** bir araç içi taşınabilir buzdolabı; dijital paneli, ECO ve MAX modları, akü koruması ve telefon bağlantısı var. Bu yazı altı modelin Kiwi kılavuzlarına dayanıyor.

> ⚡ **Kısa özet:** Etiketleri sök, cihazı nemli bezle sil. Düz zemine koy, havalandırmayı kapatma. Anahtar kapalıyken kabloyu ünitenin soketine, sonra aracın çakmak soketine tak, soğutmayı aç. Sıcak yiyecek koyma, taze et dondurmayı bekleme. KIM-4755'te kompresör için kutudan çıkınca en az 2 saat bekle.

## Hangi model, ne kadar hacim

| Model | Hacim | Güç kaynağı | Kılavuzdaki öne çıkan bilgi |
|---|---|---|---|
| KIM-4750 | 8 L | DC 12 V | Bardak tutucu, iki USB-A şarj portu, LED ışık düğmesi, taşıma kemeri |
| KIM-4751 | 10 L | DC 12 V | Bardak tutucu, bir USB-C portu, taşıma kemeri |
| KIM-4752 | 21 L | DC 12 V | Kulp, SOĞUTMA konumlu güç anahtarı |
| KIM-4753 | 40 L | DC 12/24 V | Dijital ekran, sıcaklık ayar düğmeleri, tekerlekler, USB portu |
| KIM-4754 | 45 L | DC 12/24 V | Şişe açacağı, tekerlekler, kapakta kablo saklama alanı |
| KIM-4755 | 35 L | DC 12 V ya da AC 220–240 V | Kompresörlü soğutma, +20 / -20°C, ECO ve MAX, akü koruma |

Föylerin ortak uyarısı: ürün geleneksel bir buzdolabı değildir, taze et dondurulamaz; dondurulmuş yiyecek ve içecek saklamak için idealdir. KIM-4753 föyüne göre cihaz sıcak ürünleri soğutmak için tasarlanmamıştır, soğutma ortam sıcaklığının yaklaşık 20–24°C altında çalışır.

## Adım adım: oto buzdolabını kurmak ve çalıştırmak

**1. Kutudan çıkar ve temizle.** Cihazı ve aksesuarları kutudan çıkar, etiketleri, koruyucu folyoyu ya da plastiği sök. Kiwi kullanmadan önce cihazın nemli bir bezle temizlenmesini istiyor. Kompresörlü KIM-4755'te bir kural daha var: ambalajdan çıkınca cihazı dik bırak ve çalıştırmadan önce en az 2 saat beklet. Bekleme, yağın kompresöre akması için.

**2. Yerini seç.** Cihazı sabit ve düz bir yüzeye koy. Normal kullanımda havalandırma ve ısı dağıtım açıklıklarını kapatma; föyler çevrede 10 cm'lik bir havalandırma payı, yağmurdan, sobadan ve kavurucu güneşten uzak bir yer istiyor. KIM-4755 için ölçü daha net: soğutma ızgarası tarafında en az 200 mm, hava giriş ızgarası tarafında en az 100 mm boşluk. Eğim uzun süreli kullanımda 5 dereceden az olmalı.

**3. Kabloyu bağla.** KIM-4750 ve 4751'de önce ünitenin yanındaki anahtarın KAPALI konumda olduğundan emin ol, sonra güç kablosunu ünitenin soketine tak. DC güç kablosunun fişini aracın çakmak soketine bağla. KIM-4754 föyü bir sıra daha veriyor: güç dalgalanmasını önlemek için soğutucu kutuyu prize takmadan önce aracın motorunu çalıştır, sonra kablonun diğer ucunu çakmağa tak. KIM-4753'te de cihazı araç çalışırken aç; föye göre motor durduğunda cihaz otomatik kapanır.

**4. Soğutmayı aç.** KIM-4750, 4751 ve 4752'de güç anahtarını soğutma konumuna getir; gösterge yanarak cihazın soğutma modunda olduğunu gösterir. KIM-4750 ve 4751 föylerinin notu: soğutma modu kapalıyken ünite çalışmayı durdurur. KIM-4754'te anahtar SOĞUK konumuna, kapatmak için KAPALI konumuna getiriliyor. KIM-4753'te açma/kapama düğmesine bas, ekranı etkinleştir ve sıcaklığı ayar düğmeleriyle seç; fan sesi cihazın çalıştığını gösterir.

**5. Yiyecekleri yerleştir.** İçeriye önceden soğutulmuş ya da dondurulmuş yiyecek ve içecek koy; sıcak yemek koyma. İçerinin tazeliğini korumak için kapağı sık açma ve uzun süre açık bırakma. Kimyasal madde ya da yanıcı sprey saklama. KIM-4750 ve 4751'deki USB portundan kendi kablonla telefon şarj edebilirsin.

**6. KIM-4755'te modu ve akü korumayı seç.** Güç kaynağını bağla ve AÇIK/KAPALI düğmesine bas; ekran sıcaklığı ölçer ve kompresör soğutmaya başlar. Sıcaklığı + ve - ile ayarla, SET ile ECO (enerji tasarrufu) ya da MAX (hızlı soğutma) seç; fabrika ayarı MAX. Akü koruma için açılışta SET'i 3 saniye basılı tut, ekran yanıp sönerken L, M ya da H seç. Kılavuz araç aküsünde H, harici ya da yedek akülerde M veya L öneriyor. Kilitlenen paneli açmak için + ve - tuşlarına birlikte yaklaşık 3 saniye bas.

**7. Temizle ve kurut.** Temizlikten önce ünitenin fişini araçtan çek. Cihazı nemli bir bezle sil; sert ve aşındırıcı temizleyici, bulaşık teli ya da çelik yünü kullanma. Anahtar, priz ve ısı dağıtım ağızlarını doğrudan suyla yıkama, su sıçratma. İçeride su birikiyorsa düzenli temizle. KIM-4755'te buz kalınlaşınca kılavuzun manuel buz çözme sırası şu: içeriği çıkar, cihazın gücünü tamamen kes, kapağı aç ve eriyen suyu sil.

## KIM-4755 ekran kodları

| Kod | Kılavuzdaki anlamı | Kılavuzun tarifi |
|---|---|---|
| F1 | Düşük voltaj koruması | Akü koruma seviyesini bir kademe düşür (H → M → L) |
| F2 | Fan aşırı yük koruması | Kapat, 30 dakika bekle; tekrarlarsa satış sonrası destek |
| F3 | Sık kompresör koruması | Kapat, 30 dakika bekle; tekrarlarsa satış sonrası destek |
| F4 | Kompresör aşırı yüklenmiş | Tekrarlarsa satış sonrası destek |
| F5 | Kompresör modülü yüksek sıcaklık | Havalandırılan yere koy, kapat, 30 dakika bekle |
| F6 | Kontrol parametreleri okunamadı | Kapatıp yeniden başlat; tekrarlarsa destek |
| F7 / F8 | Sıcaklık algılama başlığında anormallik | Kılavuz algılama başlığının terminallerine bakılmasını söylüyor; bu iç parça, işi servise bırak (çıkarım) |

Kılavuz, araç motoru kapalıyken buzdolabı çalışıyorsa korumanın H konumunda olmasını istiyor; aksi hâlde akü fazla tüketilip araç çalışmayabilir. Kılavuza göre içeriden gelen su akış sesi de kasadaki su damlaları da normaldir. Ev buzdolabında doğru derece için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına bakabilirsin.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Cihaz çalışmıyor | Önce güç kaynağını, fişi, soketi ve anahtarı kontrol et; sürerse yetkili servis |
| Kablo ya da fiş hasarlı | Kullanma; üretici, servis temsilcisi ya da yetkin kişi değiştirsin |
| F2-F8 bekleme sonrası tekrarlıyor | Yetkili servis |

⛔ Cihazı kendin sökme; KIM-4755 kılavuzu izinsiz sökmenin arızaya yol açtığını yazıyor. Sigorta ve kompresör işini servise bırak.

---

**Kaynak künyesi.** Hacim ve güç bilgisi, kurulum, kablo bağlantısı, soğutma, akü koruma, ekran kodları ve temizlik talimatı Kiwi'nin KIM-4750, KIM-4751, KIM-4752, KIM-4753, KIM-4754 ve KIM-4755 kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
