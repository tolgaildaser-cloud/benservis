---
title: "Uğur bulaşık makinesi su almıyor (E10)"
description: "Uğur bulaşık makinesi su almıyor ve ekranda E10 görünüyorsa Uğur'un tablosu: musluk, hortum kıvrımı, hortum filtresi, su akışı ve basınç kontrolü."
slug: "ugur-bulasik-makinesi-su-almiyor"
date: "2026-10-03"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, Uğur). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile ugur.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adresler ugur.com.tr ürün sayfalarındaki "Kullanım Kılavuzu" indirme bağlantısından (göreli /Data/EditorFiles/docs/). Web araması yok. Sayfa = PDF sayfası.
#  B1) UBL 21014 G301 / B301  https://ugur.com.tr/Data/EditorFiles/docs/101103_KK.pdf  40 s.  md5 4251945165193e42f7e88a187e40b54d  (sayfa atıfları buna göre)
#  B2) UBL 10814 B501         https://ugur.com.tr/Data/EditorFiles/docs/101102_KK.pdf  40 s.  md5 1766f337c6f828de737b017448af406c  (aynı tablo s.32)
# Kod: "Ekrandaki hata kodları" tablosunda kod simge olarak basılmış (metin katmanında yok); B1 s.31 ve B2 s.32 sayfa görüntüsünden okundu: "E10".
# Ana satır (B1 s.31): "Sesli alarm, ekranda [E10] hata kodu görüntülenmektedir." / "Cihaz su almıyor." →
#   "Su musluğu kapalı." / "Su musluğunu açın. Not: Hata '[E10]' çözüldüğünde cihazı kapatınız ve programı yeniden başlatınız."
#   · "Su giriş hortumu kıvrılmış veya bükülmüş." / "Hortumun konumunun doğru olduğundan emin olunuz."
#   · "Aqua-stop sistemi durumunda: su koruması devreye girmiş;" / "Hortum değiştirilmelidir."
#   · "Su giriş hortumundaki filtre tıkalı." / "Musluktaki ve cihazın arkasındaki su giriş hortumu bağlantılarındaki filtreyi temizleyiniz."
#   · "Su girişi tıkalı." / "Musluktan su akışını kontrol ediniz." · "Su basıncı çok düşük." / "Yerel su idaresi ile iletişime geçiniz."
#   Tablo üstü: "Bakım işlemine geçmeden önce cihazı kapatınız ve güç fişini prizden çekiniz."
# Kurulum (B1 s.8): "En düşük: 0,3 bar ... Basınç 1 bar'ın altındaysa, yetkili bir tesisatçıyla iletişime geçiniz." · "En yüksek: 10 bar" · "Su akışını kısıtlayabileceğinden
#   dolayı hortumda kıvrılma olmadığından emin olunuz. 90°'lik bir bükülme için kıvrıksız bir eğri sağlamak amacıyla minimum yükseklik 200 mm olmalıdır." ·
#   "Su boruları uzun süre kullanılmadıysa, içindeki suyun berrak ve tortusuz olduğundan emin olmak için suyu bir süre akıtınız. Bunun yapılmaması durumunda, su giriş
#   hortumu tıkanabilir" · "borulardaki tortuları süzmek için bir filtre aparatı ... Uğur Yetkili Servisinden veya Uğur Müşteri Hizmetlerinden talep edilebilir." ·
#   "Conta temas ettikten sonra hortum bağlantısını yarım tur daha sıkınız." · "Bağlantının sızdırmadığını kontrol ediniz." · "Giriş hortumunu kısaltmayınız."
#   B1 s.32 sızıntı satırı: "Anti-taşma cihazı aktif" → "Su musluğunu kapatınız." / "Cihazı elektrik beslemesinden ayırınız." / "Uğur Yetkili Servisi ile iletişime geçiniz."
# BİLEREK YAZILMAYANLAR: cihaz ARKASINDAKİ hortum bağlantısının sökülmesi (makineyi yerinden çekmek gerekebilir; belge yöntemi vermiyor → yalnız musluk tarafı adım,
#   arka bağlantı servise) · Aqua-stop hortum değişimi (parça, #31) · basınç düşürme valfi/tesisat (tesisatçı) · "E10 = valf arızası" teşhisi (belgede yok) · fiyat.
# Alıntı denetim tablosu: ugur-bulasik-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru bir bez"]
steps:
  - "Makineyi besleyen su musluğunun açık olduğunu kontrol et; kapalıysa aç."
  - "Musluktan su akıp akmadığına bak; uzun süre kullanılmayan tesisatta suyu berrak akana kadar akıt."
  - "Giriş hortumunun kıvrılmadığını ve bükülmediğini kontrol et, konumunu düzelt."
  - "Makineyi kapat, fişini çek ve musluğu kapat; hortumu musluk tarafından elle ayır."
  - "Hortumun musluk bağlantısındaki filtreyi temizle."
  - "Hortumu musluğa geri tak, musluğu aç ve bağlantının sızdırmadığını kontrol et."
  - "Fişi tak, makineyi kapatıp aç ve programı yeniden başlat."
faq:
  - q: "Uğur bulaşık makinesinde E10 ne demek?"
    a: "Uğur'un UBL kılavuzlarındaki hata tablosunda E10, sesli alarmla birlikte 'Cihaz su almıyor.' satırında geçiyor. Tablo altı neden sayıyor: su musluğunun kapalı olması, giriş hortumunun kıvrılmış ya da bükülmüş olması, Aqua-stop sisteminde su korumasının devreye girmesi, hortumdaki filtrenin tıkalı olması, su girişinin tıkalı olması ve su basıncının çok düşük olması."
  - q: "E10 gitti, makine yine çalışmıyor. Ne yapmalıyım?"
    a: "Kılavuzun notu açık: E10 hatası çözüldüğünde cihazı kapat ve programı yeniden başlat. Musluk açık, hortum düz ve filtre temizken kod yeniden geliyorsa Uğur Müşteri Hizmetleri'ne ya da Uğur Yetkili Servisi'ne başvur."
  - q: "Aqua-stop hortumum var, ne yapacağım?"
    a: "Kılavuz Aqua-stop sistemli hortumda su korumasının devreye girdiği durumda hortumun değiştirilmesi gerektiğini yazıyor. Bu bir parça değişimi; Uğur Yetkili Servisi'ne bırak."
  - q: "Su basıncı ne olmalı?"
    a: "Uğur kılavuzunda izin verilen en düşük basınç 0,3 bar, en yüksek 10 bar. Kılavuz basınç 1 bar'ın altındaysa yetkili bir tesisatçıyla, 10 bar'ın üzerindeyse basınç düşürme valfi için yine tesisatçıyla iletişime geçilmesini istiyor. Sorun giderme tablosu da basınç çok düşükse yerel su idaresiyle görüşmeni söylüyor."
images:
  coverAlt: "Tezgâh altında bulaşık makinesine giden su giriş hortumu ve hortumun bağlı olduğu açık ara musluk"
---

Programı başlattın, makineden su sesi gelmiyor; birkaç dakika sonra sesli alarm çalıyor ve ekranda **E10** yazıyor. Uğur'un UBL serisi bulaşık makinesi kılavuzlarındaki hata tablosunda bu kodun satırı **"Cihaz su almıyor."** Karşısındaki altı nedenden dördü musluk ve hortumla ilgili, yani önce tezgâhın altına bakmak gerekiyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Musluk açık mı → musluktan su akıyor mu → hortum kıvrılmış mı → fişi çek, musluğu kapat, hortumu musluktan ayır → bağlantıdaki filtreyi temizle → geri tak, sızıntı var mı bak → makineyi kapatıp aç, programı yeniden başlat. Aqua-stop hortumda su koruması devreye girdiyse → servis.

## Adım adım: evde denenecekler

**1. Musluğu kontrol et.** Tablodaki ilk neden **"Su musluğu kapalı."**, çözümü **"Su musluğunu açın."**

**2. Su akışına bak.** Tablodaki başka bir neden **"Su girişi tıkalı."**; çözüm **"Musluktan su akışını kontrol ediniz."** Uğur'un kurulum bölümü bir uyarı daha veriyor: su boruları **uzun süre kullanılmadıysa** suyun berrak ve tortusuz olduğundan emin olmak için suyu bir süre akıt; aksi hâlde **su giriş hortumu tıkanabilir.**

**3. Hortumun yolunu düzelt.** Neden: **"Su giriş hortumu kıvrılmış veya bükülmüş."** Çözüm: **"Hortumun konumunun doğru olduğundan emin olunuz."** Kurulum bölümüne göre hortumda kıvrılma su akışını kısıtlar; 90°'lik bir dönüşte kıvrıksız bir eğri için **en az 200 mm** yükseklik gerekiyor. Giriş hortumunu **kısaltma.**

**4. Fişi çek, musluğu kapat, hortumu ayır.** Uğur'un sorun giderme bölümü her bakım işinden önce **cihazı kapatıp güç fişini prizden çekmeni** istiyor. Ardından musluğu kapat ve giriş hortumunu **musluk tarafından** elle ayır.

**5. Filtreyi temizle.** Tablodaki neden **"Su giriş hortumundaki filtre tıkalı."** Uğur'un çözümü **"Musluktaki ve cihazın arkasındaki su giriş hortumu bağlantılarındaki filtreyi temizleyiniz."** Musluk tarafındaki filtreyi temizleyebilirsin. Cihazın arkasındaki bağlantıya ulaşmak için makineyi yerinden çekmen gerekiyorsa o kısmı servise bırak; kılavuz arka bağlantının nasıl ayrılacağını anlatmıyor.

**6. Hortumu geri tak.** Hortumu musluğa bağla; kılavuz conta temas ettikten sonra bağlantının **yarım tur daha** sıkılmasını ve **bağlantının sızdırmadığının** kontrol edilmesini istiyor. Sonra musluğu aç.

**7. Makineyi yeniden başlat.** E10 satırının notu: hata **çözüldüğünde cihazı kapat ve programı yeniden başlat.** Fişi tak, makineyi aç ve programı baştan seç.

## Basınç ve tesisat

Uğur kılavuzunda izin verilen su basıncı **en az 0,3 bar, en çok 10 bar.** Kılavuz basınç **1 bar'ın altındaysa** yetkili bir tesisatçıyla görüşmeni yazıyor; tablodaki "Su basıncı çok düşük" satırının çözümü de **yerel su idaresi ile iletişime geçmek.** Şebeke suyunda tortu varsa Uğur borulardaki tortuyu süzmek için bir **filtre aparatı** öneriyor; aparatı Uğur Yetkili Servisi'nden ya da Uğur Müşteri Hizmetleri'nden talep edebilirsin.

Markadan bağımsız kontrol listesi için [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısına bakabilirsin. Makine su alıyor ama bulaşıklar temiz çıkmıyorsa: [Uğur bulaşık makinesi temiz yıkamıyor](/blog/ugur-bulasik-makinesi-temiz-yikamiyor/).

## Ne zaman servis

- **Aqua-stop sistemli hortumda su koruması devreye girdiyse:** kılavuzun çözümü **"Hortum değiştirilmelidir."** Bu parça değişimi; Uğur Yetkili Servisi'ne bırak.
- Musluk açık, su akıyor, hortum düz ve filtre temiz ama **E10 yeniden geliyorsa.**
- Cihazın arkasındaki hortum bağlantısındaki filtreye ulaşman gerekiyorsa.
- Ekranda sesli alarmla birlikte **sızıntı** satırındaki kod görünüyor ve tahliye pompası sürekli çalışıyorsa: kılavuza göre **su musluğunu kapat, cihazı elektrikten ayır ve Uğur Yetkili Servisi ile iletişime geç.**

Uğur Müşteri Hizmetleri: **444 84 87.** Kılavuzun genel uyarısı: elektrikli ekipmanlar yalnızca **nitelikli elektrik uzmanları** tarafından servis işlemine alınmalıdır.

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumun yolu ve musluk tarafındaki filtre kullanıcıya; Aqua-stop hortum, giriş valfi ve iç aksam servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
