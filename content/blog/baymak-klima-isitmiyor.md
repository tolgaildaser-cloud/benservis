---
title: "Baymak klima ısıtmıyor: evde kontrol"
description: "Baymak klima ısıtmıyorsa kılavuzun notları: HEAT modu ve ayar, 2-5 dakikalık ön ısıtma, buz çözme, 8°C ısıtma fonksiyonu, fan hızı, filtre."
slug: "baymak-klima-isitmiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki 2. koşu, ek-1051, klima). Belge bu koşuda (10:55) curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200; md5 1 Eki ve sabah kopyalarıyla birebir. Baymak'ın kendi alan adı (baymak.com.tr).
# Web araması KULLANILMADI: adres yayındaki baymak-klima-sogutmuyor provenansından. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-ek1051/baymak-elegant-air.pdf · pdftotext -layout -f N -l N, PDF sayfası = basılı sayfa.
#  B1) Baymak "Montaj ve Kullanma Kılavuzu · Duvar Tipi Split Klima · Baymak Elegant Air 09/12/18/24" (300037670-Rev.03-04.01.2024), 40 s., md5 22a60cc0f0dbbd4bba127d632f8fac52
#      https://www.baymak.com.tr/media/6926/elegant-air-montaj-ve-kullanim-kilavuzu.pdf
#      s.15 "Isıtma işleminin özellikleri- Ön ısıtma (Soğuk hava engelleme): Isıtma fonksiyonu aktif hale getirildiğinde iç ünitenin ön ısıtması yaklaşık 2-5 dakika sürecektir, bundan sonra klima, mekânı ısıtmaya başlayacak ve sıcak hava üfleyecektir." / "Buz çözme (Defrost): Isıtma esnasında dış ünite buzlandığında, klima ısıtma etkisini artırmak için otomatik buz çözme fonksiyonunu devreye sokacaktır. Buz çözme işlemi sırasında iç ve dış fanlar çalışmayı durdurur. Buz çözme işlemi tamamlandıktan sonra klima otomatik olarak ısıtmaya devam edecektir." / "Klimayı belirtilen sıcaklık aralığının dışında kullanmaya çalışmak, klima koruma cihazının etkinleşmesine ve klimanın çalışmamasına neden olabilir." / tablo (Inverter) Isıtma: oda 0~27°C, dış -15~24°C, "Düşük sıcaklıkta ısıtma: -20oC ~ 24oC" / "Güç kaynağı bağlıyken, klimayı kapattıktan sonra yeniden başlattığınızda veya çalışma sırasında başka bir moda aldığınızda, klima koruma cihazı çalışacaktır. Kompresör 3 dakika sonra tekrar çalışmaya başlayacaktır."
#      s.12 "ISITMA MODU HEAT Isıtma fonksiyonu klimanın odayı ısıtmasını sağlar. Isıtma fonksiyonunu (HEAT) etkinleştirmek için, ekranda sembolü görünene kadar MODE butonuna basın. V veya V butonlarıyla oda sıcaklığından daha yüksek bir sıcaklık ayarlayın." / "ISITMA işlemi sırasında cihaz, kondenserdeki buzun temizlenmesi ve ısı alışverişi fonksiyonunun tekrar kazanılması için gerekli olan buz çözme (defrost) çevrimini otomatik olarak etkinleştirebilir. Bu işlem genellikle 2-10 dakika kadar sürmektedir. Buz çözme sırasında iç ünite fanı çalışmayı durdurur. Buz çözme işlemi tamamlandıktan sonra otomatik olarak ISITMA moduna döner." / "FAN HIZI fonksiyonu (FAN butonu) ... OTOMATİK/ SESSİZ/ DÜŞÜK/ DÜŞÜK-ORTA/ ORTA/ ORTA-YÜKSEK/ YÜKSEK/ TURBO hızına devirli olarak ayarlanabilir."
#      s.14 "8oC ısıtma fonksiyonu Bu fonksiyonu etkinleştirmek için ECO butonuna 3 saniyeden uzun süre bastığınızda uzaktan kumanda ekranında 8°C görünecektir. Bu fonksiyonu devre dışı bırakmak için işlemi tekrar edin. Bu fonksiyon, oda sıcaklığı 8oC'nin altına düştüğünde ısıtma modunu otomatik olarak başlatır ve sıcaklık 9oC'ye ulaştığında bekleme moduna döner. Oda sıcaklığı 18oC'den yüksekse cihaz bu fonksiyonu otomatik olarak iptal edecektir." / "MUTE fonksiyonu çalıştığında, uzaktan kumanda otomatik fan hızını görüntüler ve iç ünite sessiz bir ortam sağlamak için en düşük fan hızında çalışır. FAN/TURBO butonuna basıldığında MUTE fonksiyonu iptal edilecektir."
#      s.13 "SOĞUTMA/ISITMA modunda, TURBO özelliğini seçtiğinizde, cihaz hızlı SOĞUTMA veya hızlı ISITMA moduna geçecek ve güçlü hava akışı sağlamak için en yüksek üfleme devrinde çalışacaktır." / "Hava giriş veya çıkış deliklerine asla parmak, çubuk veya başka cisimler sokmayın."
#      s.30 "Sıcak veya soğuk, yetersiz hava akışı" → "Sıcaklık ayarı uygun şekilde ayarlanmamış olabilir." / "Klima giriş ve çıkışları tıkalı durumda olabilir." / "Hava filtresi kirlenmiş olabilir." / "Fan hızı en düşüğe ayarlanmış olabilir." / "Odada başka ısı kaynakları bulunuyor olabilir." / "Soğutucu akışkan tükenmiş/yok olabilir." · "Aşağıdaki durumlarda klimayı derhal kapatın ve elektrik bağlantısını kesin." (garip ses, kart arızası, sigorta/anahtar arızası, su sıçraması/cisim girmesi, kablo-fiş aşırı ısınması, çok güçlü koku)
#      s.29 "Temizlik yaparken mutlaka klimayı kapatmalı ve elektrik bağlantısını 5 dakikadan fazla süreyle kesmelisiniz." / "Klima kesinlikle su ile yıkanmamalıdır." / "Filtreyi çıkardıktan sonra, çizilmeyi önlemek için iç ünite kanatçıklarına dokunmayın." / şekil: "Filtreyi üniteden çıkarın | Filtreyi sabunlu suyla temizleyin ve tamamen kurumaya bırakın | Filtreyi yerleştirin" (≤40°C simgesi) / "İpucu: Filtrede toz biriktiğini gördüğünüzde, klimanızın temiz, sağlıklı ve verimli çalışmasını sağlamak için lütfen filtreyi zamanında temizleyin."
#      s.31 "EKRANDAKİ HATA KODU Hata durumunda iç ünite ekranında aşağıdaki hata kodları gösterilir" (simgeler görsel)
# YAKIN KOPYA: kardeş yayında baymak-klima-sogutmuyor (aynı "Sıcak veya soğuk, yetersiz hava akışı" satırı). Bu taslak ısıtmaya özgü notları öne alıyor: HEAT modu ve "oda sıcaklığından daha yüksek" ayar, ön ısıtma 2-5 dk, buz çözme 2-10 dk ve fanların durması, 8°C ısıtma fonksiyonu, ısıtma sıcaklık aralığı, TURBO ile hızlı ısıtma. Soğutmaya özgü "ince sis", "odadaki başka ısı kaynakları" ve dış ünite hava yolu kontrolü bu sayfada yok. Ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: dış ünitedeki buza ya da kara müdahale (kılavuz kullanıcıya böyle bir adım vermiyor) · soğutucu akışkan (servis) · acil durum butonu (panel açma + yalıtkan malzeme, ALET KURALI) · ECO fonksiyonunun ısıtma gücüne etkisi (kılavuz yalnız "enerji tasarrufu modunda çalışır" diyor; yorum yapılmadı) · SLEEP'in ısıtmadaki ayar değişimi (bu kılavuzda yazmıyor) · hata kodu anlamları (simgeler görsel) · fiyat.
# Alıntı denetim tablosu: baymak-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Sabunlu ılık su"]
steps:
  - "MODE butonuyla ekranda ısıtma (HEAT) sembolünü getir ve oda sıcaklığından daha yüksek bir sıcaklık ayarla."
  - "Isıtmayı yeni açtıysan iç ünitenin ön ısıtması için 2-5 dakika bekle."
  - "Isıtırken iç ünite fanı durduysa buz çözmenin bitmesini bekle; klima kendiliğinden ısıtmaya döner."
  - "Kumanda ekranında 8°C görünüyorsa ECO butonuna 3 saniyeden uzun basarak 8°C ısıtma fonksiyonunu kapat."
  - "MUTE açıksa ya da fan en düşük hızdaysa FAN butonuyla hızı artır; çabuk ısınma için TURBO'yu dene."
  - "Klimayı kapatıp elektrik bağlantısını 5 dakikadan uzun kes, filtreyi çıkar, sabunlu ılık suyla temizle, tamamen kurutup yerine tak."
  - "Sorun sürerse ya da iç ünite ekranında hata kodu varsa Baymak yetkili servisine başvur."
faq:
  - q: "Baymak klimayı ısıtmaya aldım, ilk dakikalarda hava gelmiyor. Arıza mı?"
    a: "Hayır. Baymak kılavuzuna göre ısıtma açıldığında iç ünitenin ön ısıtması yaklaşık 2-5 dakika sürer; bu süre soğuk hava üflemeyi engellemek içindir ve sonra klima sıcak hava üflemeye başlar. Klimayı kapatıp yeniden başlattıysan ya da mod değiştirdiysen kompresör de 3 dakika sonra çalışır."
  - q: "Isıtırken klima birden durdu, fan dönmüyor. Neden?"
    a: "Büyük olasılıkla buz çözme. Isıtma sırasında dış ünite buzlanınca klima otomatik buz çözmeye geçer; bu sırada iç ve dış fanlar durur. Kılavuz işlemin genellikle 2-10 dakika sürdüğünü ve bitince klimanın kendiliğinden ısıtmaya döndüğünü yazıyor."
  - q: "Kumandada 8°C yazıyor ve oda hiç ısınmıyor. Bu ne?"
    a: "Bu, Baymak'ın 8°C ısıtma fonksiyonu. Oda sıcaklığı 8°C'nin altına düşünce ısıtmayı kendiliğinden başlatır, 9°C'ye ulaşınca bekleme moduna döner. Bu fonksiyon açıkken oda daha fazla ısınmaz. ECO butonuna 3 saniyeden uzun basınca kapanır."
  - q: "Dışarısı çok soğukken klima ısıtabilir mi?"
    a: "Baymak Elegant Air'in inverter tablosu ısıtma için dış sıcaklık aralığını -15 ile 24°C, düşük sıcaklıkta ısıtma için -20 ile 24°C olarak veriyor; oda sıcaklığı için 0-27°C. Kılavuza göre bu aralıkların dışında koruma cihazı etkinleşebilir ve klima çalışmayabilir."
images:
  coverAlt: "Kış akşamı loş bir oturma odasında kanepeye örtülmüş battaniye, duvarda kanatları açık beyaz split klima ve sehpada duran kumanda"
---

Kış geldi, klimayı ısıtmaya aldın ama oda bir türlü ısınmıyor ya da üfleyen hava ara ara kesiliyor. Baymak'ın Elegant Air kullanma kılavuzu ısıtmanın nasıl başladığını açıkça yazıyor: **"Isıtma fonksiyonu aktif hale getirildiğinde iç ünitenin ön ısıtması yaklaşık 2-5 dakika sürecektir, bundan sonra klima, mekânı ısıtmaya başlayacak ve sıcak hava üfleyecektir."** Kılavuz ayrıca buz çözme sırasında fanların durduğunu, kumandadaki 8°C ısıtma fonksiyonunun odayı yalnız 9°C'ye kadar ısıttığını ve sorun giderme tablosunda "Sıcak veya soğuk, yetersiz hava akışı" için olası nedenleri veriyor. Bu yazıda ısıtmaya özgü notları önce, genel kontrolleri sonra anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda HEAT var mı, ayar oda sıcaklığının üstünde mi? Yeni açtıysan 2-5 dakika ön ısıtmayı bekle. Fan durduysa buz çözme bitsin. Kumandada 8°C yazıyorsa o fonksiyonu kapat. MUTE ya da düşük fan hızını kaldır. Sonra filtre. Sürerse ya da hata kodu varsa → Baymak yetkili servisi.

## Isıtmada "arıza değil" durumlar

| Ne görüyorsun | Baymak'ın açıklaması | Ne yapmalı |
|---|---|---|
| Isıtmayı açtın, hava gelmiyor | Ön ısıtma, soğuk hava engelleme; yaklaşık 2-5 dakika | Bekle |
| Kapatıp açtın ya da mod değiştirdin | Koruma; kompresör 3 dakika sonra çalışır | Bekle |
| Isıtırken iç ve dış fanlar durdu | Dış ünite buzlanınca otomatik buz çözme; genellikle 2-10 dakika | Bekle, klima ısıtmaya döner |
| Kumandada 8°C, oda soğuk | 8°C ısıtma fonksiyonu: odayı 9°C'ye kadar ısıtıp beklemeye geçer | Fonksiyonu kapat |
| Dışarısı çok soğuk | Kılavuzdaki aralık dışında koruma cihazı etkinleşebilir | Isıtma aralığına bak |

Bunlar değilse sorun giderme tablosunun "Sıcak veya soğuk, yetersiz hava akışı" satırına geçilir: uygun ayarlanmamış sıcaklık, tıkalı giriş ve çıkışlar, kirli hava filtresi, en düşüğe ayarlanmış fan hızı ve servisin bakacağı soğutucu akışkan.

## Adım adım: evde denenecekler

**1. HEAT ve ayar.** MODE butonuyla ekranda ısıtma (HEAT) sembolünü getir ve oda sıcaklığından daha yüksek bir sıcaklık ayarla. Baymak'ın ısıtma modu tarifi tam olarak böyle; sorun giderme tablosu da "Sıcaklık ayarı uygun şekilde ayarlanmamış olabilir." maddesini ilk sırada sayıyor.

**2. Ön ısıtma.** Isıtmayı yeni açtıysan iç ünitenin ön ısıtması için 2-5 dakika bekle. Kılavuz bu süreyi "soğuk hava engelleme" olarak adlandırıyor; klima ancak sonra sıcak hava üflemeye başlar.

**3. Buz çözme.** Isıtırken iç ünite fanı durduysa buz çözmenin bitmesini bekle; klima kendiliğinden ısıtmaya döner. Baymak'a göre dış ünite buzlandığında klima ısıtma etkisini artırmak için buz çözmeyi kendisi başlatır, bu genellikle 2-10 dakika sürer. Dış ünitedeki buza ya da kara kendin müdahale etme.

**4. 8°C fonksiyonu.** Kumanda ekranında 8°C görünüyorsa ECO butonuna 3 saniyeden uzun basarak 8°C ısıtma fonksiyonunu kapat. Kılavuza göre bu fonksiyon oda 8°C'nin altına düşünce ısıtmayı başlatır, 9°C'de bekleme moduna döner; oda 18°C'nin üstündeyse kendiliğinden iptal olur.

**5. Fan hızı.** MUTE açıksa ya da fan en düşük hızdaysa FAN butonuyla hızı artır; çabuk ısınma için TURBO'yu dene. Kılavuza göre MUTE açıkken iç ünite en düşük fan hızında çalışır; TURBO ise ısıtma modunda klimayı en yüksek üfleme devrine alıp hızlı ısıtmaya geçirir. FAN ya da TURBO'ya basınca MUTE iptal olur.

**6. Filtre.** Klimayı kapatıp elektrik bağlantısını 5 dakikadan uzun kes, filtreyi çıkar, sabunlu ılık suyla temizle, tamamen kurutup yerine tak. Kılavuzdaki şekil 40°C'yi aşmayan su gösteriyor. Filtreyi çıkarınca iç ünitenin kanatçıklarına dokunma, klimayı suyla yıkama. İç ünitenin hava giriş ve çıkışının önünde eşya varsa kaldır; deliklere parmak ya da çubuk sokma. Ayrıntılı anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**7. Sürerse servis.** Sorun sürerse ya da iç ünite ekranında hata kodu varsa Baymak yetkili servisine başvur. Tablodaki "Soğutucu akışkan tükenmiş/yok olabilir." maddesi yalnız servisin bakabileceği bir neden.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod ve ayar, ön ısıtma ve buz çözme için bekleme, 8°C fonksiyonu, fan hızı ve MUTE, filtre | Senin, bu rehberdeki adımlar |
| Bu kontrollerden sonra hâlâ yetersiz ısıtma | Baymak yetkili servisi |
| Soğutucu akışkan tükenmiş olabilir | Baymak yetkili servisi |
| İç ünite ekranında hata kodu | Kodu not et, Baymak yetkili servisi |
| Garip ses, çok güçlü koku, kablo ya da fişte aşırı ısınma | Klimayı hemen kapat, elektrik bağlantısını kes, servis |

⛔ Dış üniteye çıkma, gaz hattına ve iç ünitenin içine dokunma. Baymak kılavuzu klimanın kesinlikle suyla yıkanmamasını istiyor.

Klima hiç açılmıyorsa ya da kumandaya yanıt vermiyorsa [Baymak klima çalışmıyor](/blog/baymak-klima-calismiyor/) yazısına bak. Yazın serinletmiyorsa [Baymak klima soğutmuyor](/blog/baymak-klima-sogutmuyor/), markadan bağımsız anlatım için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Isıtma modu, ön ısıtma, buz çözme, 8°C ısıtma fonksiyonu, MUTE ve TURBO, çalışma sıcaklık aralıkları, sorun giderme tablosu ve filtre bakımı Baymak'ın baymak.com.tr'deki "Baymak Elegant Air 09/12/18/24 Montaj ve Kullanma Kılavuzu"ndan (Rev.03, 04.01.2024) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
