---
title: "Baymak klima soğutmuyor: evde kontrol"
description: "Baymak klima yetersiz soğutuyorsa kılavuzun nedenleri: sıcaklık ayarı, fan hızı ve MUTE, tıkalı hava yolu, kirli filtre; servis sınırı."
slug: "baymak-klima-sogutmuyor"
date: "2026-10-01"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, 1 Eki klima belirti partisi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Baymak'ın kendi alan adı (baymak.com.tr).
# Web araması YALNIZ belgenin yerini bulmak için. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-sprint/ · pdftotext -layout -f N -l N, PDF sayfası = basılı sayfa.
#  B1) Baymak "Montaj ve Kullanma Kılavuzu · Duvar Tipi Split Klima · Baymak Elegant Air 09/12/18/24" (300037670-Rev.03-04.01.2024), 40 s., md5 22a60cc0f0dbbd4bba127d632f8fac52
#      https://www.baymak.com.tr/media/6926/elegant-air-montaj-ve-kullanim-kilavuzu.pdf
#      s.30 "Sorun Giderme" ARIZA | OLASI NEDENLER · "Sıcak veya soğuk, yetersiz hava akışı" → "Sıcaklık ayarı uygun şekilde ayarlanmamış olabilir." / "Klima giriş ve çıkışları tıkalı durumda olabilir." / "Hava filtresi kirlenmiş olabilir." / "Fan hızı en düşüğe ayarlanmış olabilir." / "Odada başka ısı kaynakları bulunuyor olabilir." / "Soğutucu akışkan tükenmiş/yok olabilir."
#      s.30 "Hava çıkışından ince bir sis çıkıyor | Bu durum, odadaki havanın çok soğuk olması durumunda, örneğin "SOĞUTMA" veya "NEM ALMA/KURUTMA" modlarında meydana gelir."
#      s.30 "Aşağıdaki durumlarda klimayı derhal kapatın ve elektrik bağlantısını kesin." → "Çalışma sırasında garip ses duyulması durumunda" / "Elektronik kontrol kartında arıza olması durumunda" / "Sigorta ya da anahtarlarda arıza varsa" / "Cihazın içerisine su sıçraması veya cisim girmesi durumlarında" / "Kablo ya da fişlerin aşırı ısınması durumlarında" / "Cihazdan çok güçlü koku gelmesi durumunda"
#      s.31 "EKRANDAKİ HATA KODU Hata durumunda iç ünite ekranında aşağıdaki hata kodları gösterilir" (kod simgeleri görsel; açıklamalar arasında "Soğutucu çevriminde sızıntı veya arıza")
#      s.29 "Bakım" "Temizlik yaparken mutlaka klimayı kapatmalı ve elektrik bağlantısını 5 dakikadan fazla süreyle kesmelisiniz." / "Klima kesinlikle su ile yıkanmamalıdır." / "Filtre süzgecinin etkisini azaltabilecek şekilde toz birikmesini önlemek için filtre süzgecinin düzenli olarak temizlenmesine dikkat edin." / "Filtreyi çıkardıktan sonra, çizilmeyi önlemek için iç ünite kanatçıklarına dokunmayın." / şekil: "Filtreyi üniteden çıkarın | Filtreyi sabunlu suyla temizleyin ve tamamen kurumaya bırakın | Filtreyi yerleştirin" (≤40°C simgesi) / "Klima uzun süre kapalı kaldıktan sonra ... 2. İç ve dış ünitelerin hava giriş ve çıkışlarında engel olup olmadığını kontrol edin"
#      s.12 "SOĞUTMA MODU ... MODE butonuna basın. V veya V butonlarıyla oda sıcaklığından daha düşük bir sıcaklık ayarlayın." / "FAN HIZI fonksiyonu (FAN butonu) ... OTOMATİK/ SESSİZ/ DÜŞÜK/ DÜŞÜK-ORTA/ ORTA/ ORTA-YÜKSEK/ YÜKSEK/ TURBO hızına devirli olarak ayarlanabilir."
#      s.13 "TURBO ... SOĞUTMA/ISITMA modunda, TURBO özelliğini seçtiğinizde, cihaz hızlı SOĞUTMA veya hızlı ISITMA moduna geçecek ve güçlü hava akışı sağlamak için en yüksek üfleme devrinde çalışacaktır." / "SLEEP ... Klima uyku modunda 10 saat çalıştıktan sonra daha önce ayarlanan moda dönecektir."
#      s.14 "MUTE fonksiyonu çalıştığında, uzaktan kumanda otomatik fan hızını görüntüler ve iç ünite sessiz bir ortam sağlamak için en düşük fan hızında çalışır. FAN/TURBO butonuna basıldığında MUTE fonksiyonu iptal edilecektir."
#      s.15 "Klimayı belirtilen sıcaklık aralığının dışında kullanmaya çalışmak, klima koruma cihazının etkinleşmesine ve klimanın çalışmamasına neden olabilir." / "Güç kaynağı bağlıyken, klimayı kapattıktan sonra yeniden başlattığınızda veya çalışma sırasında başka bir moda aldığınızda, klima koruma cihazı çalışacaktır. Kompresör 3 dakika sonra tekrar çalışmaya başlayacaktır."
#      s.13 "Hava giriş veya çıkış deliklerine asla parmak, çubuk veya başka cisimler sokmayın."
# BİLEREK YAZILMAYANLAR: soğutucu akışkan teşhisi/dolumu (servis) · acil durum butonu (panel açma + yalıtkan malzeme gerektiriyor, alet kuralı) · I CLEAN işlevi (kılavuz ortam sıcaklık koşulu koyuyor, soğutmama satırında yok) · "odadaki başka ısı kaynakları" için örnek (belgede örnek yok) · fiyat.
# Alıntı denetim tablosu: baymak-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Sabunlu ılık su"]
steps:
  - "MODE ile SOĞUTMA'yı seç ve oda sıcaklığından daha düşük bir sıcaklık ayarla."
  - "Klimayı yeni başlattıysan ya da mod değiştirdiysen kompresör için 3 dakika bekle."
  - "Kumandada MUTE açıksa ya da fan hızı en düşükteyse FAN butonuyla fan hızını yükselt."
  - "İç ve dış ünitenin hava giriş ve çıkışlarında engel olup olmadığını güvenle erişebildiğin kadar kontrol et."
  - "Klimayı kapat ve elektrik bağlantısını 5 dakikadan uzun süre kes."
  - "Filtreyi üniteden çıkar, sabunlu suyla temizle, tamamen kurumaya bırak ve yerine tak."
  - "Sorun sürerse ya da ekranda hata kodu varsa Baymak yetkili servisine başvur."
faq:
  - q: "Baymak klima neden yetersiz soğutur?"
    a: "Baymak kılavuzunun sorun giderme tablosu 'Sıcak veya soğuk, yetersiz hava akışı' satırında altı olası neden sayıyor: sıcaklık ayarı uygun değil, klima giriş ve çıkışları tıkalı, hava filtresi kirli, fan hızı en düşükte, odada başka ısı kaynakları var ya da soğutucu akışkan tükenmiş. Sonuncusu servis işidir."
  - q: "MUTE açıkken klima daha az mı soğutur?"
    a: "Baymak kılavuzuna göre MUTE çalışırken iç ünite sessiz bir ortam sağlamak için en düşük fan hızında çalışır. Tablo da fan hızının en düşüğe ayarlı olmasını yetersiz hava akışının nedenleri arasında sayıyor. FAN ya da TURBO butonuna basınca MUTE iptal olur."
  - q: "Klimayı kapatıp açtım, hemen soğuk hava gelmedi. Normal mi?"
    a: "Evet. Baymak kılavuzuna göre klimayı kapattıktan sonra yeniden başlattığında ya da çalışırken mod değiştirdiğinde koruma devreye girer ve kompresör 3 dakika sonra yeniden çalışır."
  - q: "Hava çıkışından ince bir sis geliyor, arıza mı?"
    a: "Baymak kılavuzu bunu, odadaki havanın çok soğuk olduğu durumlarda, örneğin SOĞUTMA ya da NEM ALMA modlarında görülen bir durum olarak açıklıyor."
images:
  coverAlt: "Banyo lavabosunun kenarında kurumaya bırakılmış, ince plastik ızgaralı bir split klima hava filtresi"
---

Klima çalışıyor ama üflediği hava odayı serinletmeye yetmiyor. Baymak'ın Türkçe montaj ve kullanma kılavuzu bu belirtiyi sorun giderme tablosunda **"Sıcak veya soğuk, yetersiz hava akışı"** satırıyla veriyor ve altı olası neden sayıyor. Bunların dördü kumandadan ya da filtreden kontrol edilebilir; biri, **"Soğutucu akışkan tükenmiş/yok olabilir."** maddesi ise yalnız servisin işidir. Bu yazıda Baymak'ın listesini, kılavuzun fan hızı, MUTE ve bakım bölümleriyle birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod SOĞUTMA mı, sıcaklık oda sıcaklığının altında mı? Yeni açtıysan 3 dakika bekle. MUTE açık ya da fan en düşükte mi? İç ve dış ünitenin önü açık mı? Sonra elektriği 5 dakikadan uzun kes ve filtreyi sabunlu suyla temizle. Sürerse ya da ekranda hata kodu varsa → Baymak yetkili servisi.

## Baymak'ın altı nedeni

| Baymak'ın olası nedeni | Kimin işi |
|---|---|
| Sıcaklık ayarı uygun şekilde ayarlanmamış | Senin, kumandadan |
| Fan hızı en düşüğe ayarlanmış | Senin, FAN butonu |
| Klima giriş ve çıkışları tıkalı | Güvenle erişebiliyorsan senin, değilse servis |
| Hava filtresi kirlenmiş | Senin, filtre temizliği |
| Odada başka ısı kaynakları bulunuyor | Senin, odada kontrol |
| Soğutucu akışkan tükenmiş ya da yok | Baymak yetkili servisi |

Baymak iki durumu da açıklıyor: klima kapatılıp yeniden başlatıldığında ya da mod değiştirildiğinde koruma devreye girer ve **kompresör 3 dakika sonra** yeniden çalışır; klima belirtilen sıcaklık aralığının dışında kullanılırsa koruma cihazı etkinleşip klimanın çalışmamasına yol açabilir.

## Adım adım: evde denenecekler

**1. Mod ve sıcaklık.** MODE ile SOĞUTMA'yı seç ve oda sıcaklığından daha düşük bir sıcaklık ayarla. Baymak'ın soğutma modu tarifi tam olarak bu; tablodaki ilk neden de uygun ayarlanmamış sıcaklık.

**2. Üç dakika.** Klimayı yeni başlattıysan ya da mod değiştirdiysen kompresör için 3 dakika bekle. Kılavuza göre bu bekleme koruma amaçlı.

**3. Fan hızı ve MUTE.** Kumandada MUTE açıksa ya da fan hızı en düşükteyse FAN butonuyla fan hızını yükselt. Baymak'a göre MUTE açıkken iç ünite en düşük fan hızında çalışır; FAN ya da TURBO butonuna basınca MUTE iptal olur. Hızlı soğutma istiyorsan kılavuzdaki TURBO, klimayı en yüksek üfleme devrinde çalıştırır.

**4. Hava giriş ve çıkışı.** İç ve dış ünitenin hava giriş ve çıkışlarında engel olup olmadığını güvenle erişebildiğin kadar kontrol et. Baymak bu kontrolü kullanıcının bakım listesine koyuyor; giriş ya da çıkış deliklerine parmak, çubuk ya da başka bir cisim sokma. Dış ünite ulaşılamayan bir cephedeyse bu kontrolü servise bırak.

**5. Önce elektrik.** Klimayı kapat ve elektrik bağlantısını 5 dakikadan uzun süre kes. Baymak kılavuzu temizlikten önce bunu şart koşuyor.

**6. Filtreyi temizle.** Filtreyi üniteden çıkar, sabunlu suyla temizle, tamamen kurumaya bırak ve yerine tak. Kılavuzdaki şekil 40°C'yi aşmayan su gösteriyor. Filtreyi çıkardıktan sonra iç ünitenin kanatçıklarına dokunma, klimayı suyla yıkama; dış yüzeyi yumuşak kuru bezle ya da nötr deterjanlı nemli bezle sil. Baymak çalışma ortamı tozluysa temizliğin daha sık yapılmasını istiyor. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**7. Sürerse servis.** Sorun sürerse ya da ekranda hata kodu varsa Baymak yetkili servisine başvur. Baymak'ın hata kodu listesinde soğutucu çevriminde sızıntı ya da arıza gibi yalnız servisin bakabileceği durumlar var.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, 3 dakika bekleme, fan hızı ve MUTE, hava yolu, filtre | Senin, bu rehberdeki adımlar |
| Soğutucu akışkan tükenmiş olabilir | Baymak yetkili servisi |
| İç ünite ekranında hata kodu | Kodu not et, Baymak yetkili servisi |
| Garip ses, çok güçlü koku, kablo ya da fişte aşırı ısınma, cihaza su sıçraması | Klimayı hemen kapat, elektrik bağlantısını kes, servis |

⛔ Gaz hattına, elektronik karta ve iç ünitenin içine dokunma; kılavuzdaki acil durum butonu da panel açmayı gerektirdiği için servise bırakılacak bir iş.

Klima hiç açılmıyorsa markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) yazısında. Genel sebepler için [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Sorun giderme tablosu, soğutma modu, fan hızı, MUTE ve TURBO, 3 dakikalık koruma ve bakım adımları Baymak'ın baymak.com.tr'deki "Baymak Elegant Air 09/12/18/24 Montaj ve Kullanma Kılavuzu"ndan (Rev.03, 04.01.2024) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
