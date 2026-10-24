---
title: "Sunny TV resetleme: yeniden başlatma ve fabrika ayarı"
description: "Sunny televizyon nasıl resetlenir? Kılavuza ve Sunny'nin destek sayfasına göre yeniden başlatma, fabrika ayarları menüsü, şifre ve silinen bilgiler."
slug: "sunny-tv-resetleme"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "sunny" geçen slug/başlık/blog gövdesi YOK; TV resetleme/fabrika ayarı başlıklı yazı da YOK.
# GSC: "sunny" satırı yok. OT (bu koşu): "sunny tv r" → 1. "sunny tv resetleme" · 2. "…reset düğmesi nerede"; "sunny tv f" → 5. "…fabrika ayarlarına döndürme" · 6. "…fabrika ayarları şifresi".
# Belge zinciri (#88): sunny.com.tr/televizyon-kullanim-kilavuzlari/ (200) → wp-content/uploads PDF (200 application/pdf), görüntü tabanlı, tesseract tur OCR + sayfa görüntüsü:
#  (U) Uydulu-32-39-inc-Kullanim-Kilavuzu.pdf, 28 s., md5 f35e6683446e4ff2063221ce5ba6aa12 (s.14: Kilit 0000, Sistem > Fabrika Ayarları, Gelişmiş Ayarlar, Güç Modu)
#  (S) Smart-32-39-inc-Kullanim-Kilavuzu.pdf, 28 s., md5 aba7354b88464d1065e90b9d5123dec9 (s.12: Cihaz Tercihleri > Yeniden başlat, Sıfırla)
#  (F) Üretici sitesi /sikca-sorulan-sorular/televizyonlar/ (200, "Yazılım ve Sistem", dateModified 2026-07-17), html md5 40fa96f74eae1ff655f0de47d1a27400
# Fiziksel "reset düğmesi" belgede YOK; yazıda öyle söylendi. BİLEREK YAZILMAYANLAR: servis menüsü tuş kombinasyonu (Sunny açıkça yasaklıyor) · yazılım sürüm düşürme · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası"]
steps:
  - "Önce televizyonu yeniden başlat: kumandadan kapat, fişi birkaç dakika çekip yeniden tak."
  - "Sorun sürüyorsa tek bir ayar mı bozuk, ona bak ve o ayarı kendi menüsünden varsayılana döndür."
  - "Fabrika ayarına geçmeden önce uygulama hesaplarını ve gerekli ayarları not et."
  - "Uydulu modelde MENU, SİSTEM, Fabrika Ayarları yolunda Sıfırla'yı seçip uyarıyı onayla."
  - "Smart modelde Ayarlar, Cihaz Tercihleri bölümünde Sıfırla seçeneğini kullan."
  - "Şifre sorulursa kılavuzdaki başlangıç şifresini dene."
  - "Sıfırlama bitince ilk kurulumu ve kanal aramasını yeniden yap."
faq:
  - q: "Sunny televizyonda reset düğmesi nerede?"
    a: "İncelediğimiz Sunny kılavuzlarında ve destek sayfasında ayrı bir fiziksel reset düğmesi geçmiyor. Sıfırlama menüden yapılıyor: uydulu modellerde Sistem menüsündeki Fabrika Ayarları, Smart modellerde Cihaz Tercihleri altındaki Sıfırla satırı."
  - q: "Yeniden başlatmak ile fabrika ayarına dönmek aynı şey mi?"
    a: "Hayır. Sunny'nin destek sayfasına göre yeniden başlatma televizyonu kapatıp açar ve kişisel ayarları silmez. Fabrika ayarı ise kanal listesini, ağ bağlantılarını, uygulama hesaplarını ve diğer kişisel ayarları silebilir. Geçici sorunlarda önce yeniden başlatma öneriliyor."
  - q: "Fabrika ayarları şifresi nedir?"
    a: "Sunny'nin uydulu 32-39 inç kılavuzunda sistem kilidinin başlangıç şifresi 0000 olarak yazıyor; Gelişmiş Ayarlar'da istenen şifre de bu sistem kilit şifresiyle aynı. Şifreyi değiştirip unuttuysan Sunny rastgele kod denememeni, model koduyla Müşteri İletişim Merkezi'ne başvurmanı öneriyor."
  - q: "Fabrika ayarı yazılım sürümünü eskiye döndürür mü?"
    a: "Sunny'nin sayfasına göre genellikle hayır: fabrika ayarı mevcut yazılım sürümünü değiştirmiyor, yalnız kullanıcı ayarlarını ve kişisel verileri sıfırlıyor. Sürüm düşürme ayrı bir teknik işlem ve kullanıcının yapmaması isteniyor."
  - q: "Televizyonu satmadan önce ne yapmalıyım?"
    a: "Sunny uygulama hesaplarından çıkış yapmanı, kayıtlı Wi-Fi ağlarını silmeni ve kişisel bilgilerin kalkması için televizyonu fabrika ayarlarına döndürmeni öneriyor. İşlem bitince cihazın ilk kurulum ekranında açıldığını kontrol et."
images:
  coverAlt: "Oturma odasında ekranında sistem menüsü açık duran televizyon"
  steps:
    - "Duvar prizinden çekilmiş televizyon güç kablosu"
    - "Televizyon ekranında açık duran görüntü ayarları menüsü"
    - "Masada açık duran bir not defteri ve kalem"
    - "Televizyon ekranında sistem menüsünde fabrika ayarları satırı"
    - "Televizyon ekranında cihaz tercihleri listesi"
    - "Televizyon ekranında şifre giriş kutusu"
    - "Televizyon ekranında dil seçimiyle açılan ilk kurulum ekranı"
---

Sunny televizyonun donuyor, menüler karıştı ya da televizyonu başkasına vereceksin ve "resetleme" arıyorsun. Sunny'de bunun iki ayrı yolu var: yeniden başlatma ayarları silmeden sistemi tazeler, fabrika ayarı ise her şeyi ilk günkü hâline getirir. Bu yazıda Sunny'nin kendi sitesinde yayımladığı uydulu ve Smart televizyon kullanım kılavuzlarını ve Sunny'nin televizyon destek sayfasının "Yazılım ve Sistem" bölümünü temel aldık. Kılavuzlar görüntü tabanlı olduğu için menü yollarını sayfa görüntülerinden okuduk.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce yeniden başlat (fişi birkaç dakika çek). Olmazsa uydulu modelde MENU, SİSTEM, Fabrika Ayarları, Sıfırla; Smart modelde Ayarlar, Cihaz Tercihleri, Sıfırla. Başlangıç şifresi kılavuza göre 0000. Fabrika ayarı kanal listesini siler.

## Yeniden başlatma mı, fabrika ayarı mı

| İşlem | Ne yapar | Ne siler |
|---|---|---|
| **Yeniden başlatma** | Televizyonu kapatıp açar | Hiçbir kişisel ayarı silmez |
| **Tek ayarı varsayılana döndürme** | Yalnız o menünün ayarını sıfırlar | Yalnız o ayarı |
| **Fabrika ayarı** | Televizyonu ilk kurulum hâline getirir | Kanal listesi, Wi-Fi, uygulama hesapları, görüntü ve ses ayarları |

## Adım adım: Sunny TV resetleme

**1. Önce yeniden başlat.** Sunny'nin destek sayfası geçici sistem sorunlarında önce yeniden başlatmayı öneriyor: televizyonu kumandadan kapat, elektrik bağlantısını birkaç dakika kes, sonra yeniden aç. Bazı Smart modellerde güç tuşunu birkaç saniye basılı tutunca **Yeniden Başlat** seçeneği çıkıyor; Sunny'nin Smart kılavuzunda da **Cihaz Tercihleri** altında **Yeniden başlat** satırı var. Bu işlem kanal ve kullanıcı ayarlarını silmiyor. Televizyon açılış ekranında kalıyorsa Sunny ayrıca bağlı USB cihazlarını, HDMI kablolarını ve harici cihazları çıkarıp yeniden denemeni öneriyor; sürekli yeniden başlıyorsa da cihazın doğrudan sağlam bir prize bağlı olmasını istiyor.

**2. Tek ayarı düzelt.** Sorun yalnız görüntü, ses, ağ ya da kanal ayarındaysa Sunny önce o ayarı kendi menüsünden varsayılana döndürmeyi deneyip, hangi ayardan kaynaklandığını bilmiyorsan fabrika ayarından önce model koduyla teknik destek almanı öneriyor. Fabrika ayarı kişisel verileri ve kanal listesini silebiliyor. Sunny'ye göre görüntü ya da ses ayarları menüsündeki Sıfırla, Varsayılan Ayarlar ya da Ayarları Geri Yükle seçeneği yalnız o ayarları sıfırlıyor; uydulu kılavuzda Resim Modu ve Ses Modu listesinden hazır bir mod seçmek de mümkün.

**3. Bilgilerini not et.** Fabrika ayarına geçmeden önce uygulama hesap bilgilerini ve gerekli ayarları not et. Sunny'ye göre bu işlem kanal listesini, Wi-Fi şifrelerini, uygulama hesaplarını, görüntü ve ses ayarlarını ve kullanıcı tercihlerini silebiliyor.

**4. Uydulu modelde fabrika ayarı.** Sunny'nin uydulu 32-39 inç kılavuzunda MENU tuşuyla ana menüyü açıp sağ ve sol tuşlarla **SİSTEM** menüsünü seçiyor, OK'a basıyorsun. **Fabrika Ayarları** satırında yukarı ve aşağı tuşlarla **Sıfırla**'yı seçip OK'a bas, gelen uyarıyı kumandayla onayla. Aynı menüdeki **Gelişmiş Ayarlar**'a girerken şifre isteniyor; kılavuza göre bu şifre sistem kilit şifresiyle aynı.

**5. Smart modelde sıfırlama.** Sunny'nin Smart 32-39 inç kılavuzunda **Ayarlar** menüsü üzerinden cihaz tercihleri yönetiliyor. **Cihaz Tercihleri** altındaki **Sıfırla** satırı cihazı varsayılan fabrika ayarlarına getiriyor. Sunny'nin destek sayfası menünün adının modele göre **Sistem**, **Genel**, **Cihaz Tercihleri** ya da **Destek** olabileceğini, seçeneğin de **Fabrika Ayarları**, **Sıfırla** ya da **İlk Kuruluma Dön** diye geçebileceğini yazıyor.

**6. Şifre sorulursa.** Uydulu kılavuzda **KİLİT** menüsündeki sistem kilidinin başlangıç şifresi **0000** olarak yazıyor ve **Şifreyi Değiştir** satırından yeni şifre oluşturulabiliyor. Sunny'nin sayfasına göre fabrika ayarı sırasında güvenlik PIN'i istenebiliyor. Şifreyi değiştirip unuttuysan rastgele kod deneme; model ve seri numarasıyla Sunny Müşteri İletişim Merkezi'nden destek al.

**7. Yeniden kur.** Sıfırlamadan sonra ilk kurulum menüsü açılıyor. Sunny'nin kılavuzunda ilk kurulum dil ve ülke seçimiyle başlıyor; destek sayfasına göre kullanım modu, internet bağlantısı ve yayın türü de soruluyor. Ardından kanal aramasını yeniden yap; adımlar [Sunny TV kanallar silindi](/blog/sunny-tv-kanallar-silindi/) yazısında.

## Bilmen gereken iki uyarı

Sunny'nin destek sayfası servis menüsünün yalnız teknik servis için olduğunu, internette paylaşılan tuş kombinasyonlarıyla kullanıcı tarafından girilmemesi gerektiğini açıkça yazıyor; yanlış bir değişiklik görüntü, ses, panel ve sistem ayarlarını bozabiliyor. Fabrika ayarı genellikle yazılım sürümünü değiştirmiyor; sürüm düşürme de kullanıcının yapacağı bir işlem değil. Uydulu kılavuzdaki **Güç Modu** ayarı da işine yarayabilir: Açık konumda elektrik gelince televizyon kendiliğinden açılıyor, Kapalı'da bekleme modunda kalıyor, Son'da kapanmadan önceki durumuna dönüyor.

## Ne zaman servis

- Televizyon açılış ekranında kalıyor ve yeniden başlatmayla geçmiyorsa
- Sürekli yeniden başlıyorsa
- Sıfırlama yarıda kesildiyse ya da sonrasında menü donuyorsa

⛔ **Kendin-çöz sınırı burada biter.** Yeniden başlatma, fabrika ayarı ve yeniden kurulum sende. Sunny açılış ekranında kalma ve sürekli yeniden başlamada farklı yazılım yüklemeye çalışmadan yetkili servise başvurulmasını istiyor.

## Servisi aramadan önce kısa özet

1. Televizyonun tam model kodu ve seri numarası ne?
2. Yeniden başlatmayı denedin mi?
3. Fabrika ayarı tamamlandı mı, yarıda mı kaldı?
4. Ekranda bir hata yazısı var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
