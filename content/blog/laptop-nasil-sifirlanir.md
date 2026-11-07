---
title: "Laptop nasıl sıfırlanır? Windows 11 ve 10'da fabrika ayarı"
description: "Laptop nasıl sıfırlanır? Microsoft ve ASUS sayfalarına göre yedek, BitLocker anahtarı, Dosyalarımı koru ya da Her şeyi kaldır seçimi ve adaptör kuralı."
slug: "laptop-nasil-sifirlanir"
date: "2026-11-10"
category: "Bilgisayar / yazıcı"
updated: "2026-11-10"
kisaCevap: "Windows 11'de laptopu Ayarlar > Sistem > Kurtarma > Bilgisayarı sıfırla yoluyla sıfırlarsın. Microsoft önce dosyaları yedeklemeni ve BitLocker kurtarma anahtarını hazır tutmanı istiyor. ASUS'a göre işlem cihaza göre 30 dakika ile birkaç saat sürüyor; bu sürede adaptörü çıkarma."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 hafta sonu seti B; BOSLUK.md sürüm 4 #416 "bilgisayar / laptop nasıl sıfırlanır"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.321 dosya). Main'de Windows bilgisayar sıfırlama yazısı yok; yakın: asus-bilgisayar-otomatik-onarim-ve-bios (otomatik onarım döngüsü), telefon-sifirlama-nasil-yapilir ve tv-fabrika-ayarlarina-sifirlama (başka cihaz), bilgisayar-yavas-calisiyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "bilgisayar nasıl" #1 "bilgisayar nasıl sıfırlanır"; "laptop nasıl" #2 "laptop nasıl sıfırlanır", #10 "…resetlenir"; "laptop nasıl sıfırlanır" #1, #2 "…windows 10", #3 "…windows 11", #5-#10 marka sürümleri (lenovo, asus, hp, casper, acer, toshiba). GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Microsoft Destek "Bilgisayarınızı sıfırlama" (Windows 11, Windows 10) https://support.microsoft.com/tr-tr/windows/experience/backup-recovery/reset-your-pc md5 ef11837c54ff26a45120a69b51e80f8e · (B) ASUS Destek SSS 1013063 "[Windows 11/10] İşletim Sisteminin Sıfırlanması (Yeniden Kurulması)" https://www.asus.com/tr/support/faq/1013063/ md5 ecbcdc9298f39225571147a23504bb59.
# BİLEREK YAZILMAYANLAR: BIOS/UEFI ayarları, disk bölümleme, yükleme medyasından temiz kurulum (ayrı Microsoft sayfaları) · üreticiye özel kurtarma tuşları (belge yok) · fiyat (#46).
# Alıntı denetimi: laptop-nasil-sifirlanir.KAYNAK.md
guide:
  difficulty: "Orta"
  time: "~30 dakika ile birkaç saat"
  totalTime: "PT2H"
  cost: "Ücretsiz"
  tools: ["Harici disk ya da bulut yedeği", "Laptopun şarj adaptörü", "BitLocker kurtarma anahtarı"]
steps:
  - "Önemli dosyalarını yedekle."
  - "Cihaz şifreliyse BitLocker kurtarma anahtarını hazırla."
  - "Şarj adaptörünü tak ve sıfırlama bitene kadar çıkarma."
  - "Ayarlar'da Sistem > Kurtarma'yı aç ve Bilgisayarı sıfırla'yı seç."
  - "Dosyalarımı koru ya da Her şeyi kaldır seçeneğini seç."
  - "Bulut indirme ya da Yerel yeniden yükleme yolunu seç."
  - "Sıfırla'ya bas ve ekran kararsa da cihazı zorla kapatma."
faq:
  - q: "Laptop sıfırlanınca dosyalar silinir mi?"
    a: "Seçeneğe bağlı. Microsoft'a göre Dosyalarımı koru uygulamaları ve ayarları kaldırır ama belgelerini, fotoğraflarını ve diğer kişisel verilerini korur. Her şeyi kaldır ise tüm kişisel dosyaları, uygulamaları ve ayarları siler. İki durumda da Microsoft önce yedek almanı istiyor."
  - q: "Laptop sıfırlama ne kadar sürer?"
    a: "ASUS, Windows'u yeniden kurmanın cihazın modeline ve özelliklerine göre 30 dakika ile birkaç saat arasında sürebildiğini yazıyor. Microsoft da ekranın bazen 15 dakikadan fazla kararabileceğini ve cihazın kendini yeniden başlatabileceğini belirtiyor."
  - q: "Windows açılmıyorsa laptop nasıl sıfırlanır?"
    a: "Microsoft ve ASUS, Windows Kurtarma Ortamı (Windows RE) üzerinden sıfırlamayı anlatıyor: Sorun Giderme > Bu bilgisayarı sıfırla. ASUS'a göre bu yolda hesabını seçip parolasını girmen gerekiyor; cihaz şifreliyse BitLocker anahtarı da isteniyor."
  - q: "Laptopu satmadan önce hangi seçeneği kullanmalıyım?"
    a: "Microsoft, bilgisayarı bağışlamayı, geri dönüştürmeyi ya da satmayı planlıyorsan Her şeyi kaldır ile birlikte Verileri temizle seçeneğini kullanmanı öneriyor. Bu silme işlevi tüketicilere yönelik; kamu ve endüstri veri silme standartlarını karşılamıyor."
images:
  coverAlt: "Sade dizüstü bilgisayar ve yanında kontrol paneli çizimi"
  steps:
    - "Dizüstü bilgisayara harici disk takan beyaz eldivenli sade siluet el"
    - "Not kağıdına bakan beyaz eldivenli sade siluet el, yanında dizüstü bilgisayar"
    - "Dizüstü bilgisayara şarj kablosunu takan beyaz eldivenli sade siluet el"
    - "Dizüstü bilgisayarın dokunmatik yüzeyine dokunan beyaz eldivenli sade siluet el"
    - "Ekrandaki iki seçenekten birini gösteren beyaz eldivenli sade siluet el"
    - "Ekranda bulut simgesini gösteren beyaz eldivenli sade siluet el"
    - "Kararmış ekranlı dizüstü bilgisayarın yanında bekleyen beyaz eldivenli sade siluet el"
---

Windows 11'de laptopu Ayarlar uygulamasında Sistem > Kurtarma'yı açıp Bilgisayarı sıfırla'yı seçerek sıfırlarsın. Microsoft'un "Bilgisayarınızı sıfırlama" sayfası sıfırlamanın Windows'u yeniden yüklediğini ve seçimine göre uygulamaları, ayarları ve kişisel dosyaları kaldırabildiğini yazıyor; bu yüzden ilk iş önemli dosyaları yedeklemek.

ASUS'un sıfırlama sayfasına göre Windows'u yeniden kurmak cihazın modeline göre 30 dakika ile birkaç saat arasında sürüyor. Microsoft da işlem sırasında ekranın bazen 15 dakikadan fazla kararabileceğini ve cihazı elle yeniden başlatmanın sıfırlamayı bozabileceğini belirtiyor. Kendi laptopunun üreticisi farklı bir yol tarif ediyorsa **üreticinin sayfası esastır.**

> ⚠️ **Dikkat.** "Her şeyi kaldır" kişisel dosyalarını, uygulamalarını ve ayarlarını siler; bu işlem geri alınamaz. ASUS'a göre Windows 10'dan Windows 11'e yükseltilmiş bir cihazı sıfırladığında eski işletim sistemi sürümüne dönemezsin.

## Laptop sıfırlamada hangi seçenek ne yapar?

| Seçenek | Microsoft'un tarifi | Ne zaman |
|---|---|---|
| Dosyalarımı koru | Uygulamaları ve ayarları kaldırır, kişisel dosyaları korur | Yavaşlık, yazılım sorunu |
| Her şeyi kaldır | Tüm kişisel dosyaları, uygulamaları ve ayarları kaldırır | Yeni başlangıç, hediye, satış |
| Verileri temizle | Dosyaları kaldırır ve sürücüyü temizler | Bağış, geri dönüşüm, satış |
| Bulut indirme | Windows'un en son sürümünü buluttan indirir | Yerel dosyalar bozuk ya da eksikse |
| Yerel yeniden yükleme | Bilgisayardaki dosyaları kullanır | İnternet yavaşsa |

## Adım adım: laptop nasıl sıfırlanır?

**1. Önemli dosyalarını yedekle.** Microsoft sıfırlamadan önce önemli dosyaları yedeklemeni istiyor. "Dosyalarımı koru"yu seçecek olsan da yedek al; ASUS bu seçenekte de yüklü uygulamaların ve sürücülerin kaldırıldığını yazıyor.

**2. Cihaz şifreliyse BitLocker kurtarma anahtarını hazırla.** Microsoft, cihazın şifrelenmişse BitLocker kurtarma anahtarının elinde olmasını istiyor. ASUS da Aygıt Şifreleme ya da BitLocker açıksa sıfırlama için bu anahtara ihtiyacın olabileceğini belirtiyor.

**3. Şarj adaptörünü tak ve sıfırlama bitene kadar çıkarma.** ASUS sıfırlama sırasında adaptörü çıkarmamanı ve cihazı kapanmaya zorlamamanı istiyor. "Her şeyi sil" yolunda adaptör takılı değilse cihaz uyarı veriyor.

**4. Ayarlar'da Sistem > Kurtarma'yı aç ve Bilgisayarı sıfırla'yı seç.** Microsoft'un Windows 11 yolu bu. ASUS daha kısa bir yol da veriyor: Windows arama çubuğuna "Bu bilgisayarı sıfırla" yaz ve Aç'a tıkla. Windows 10'da aynı ekranda Başlayın düğmesine basarsın.

**5. Dosyalarımı koru ya da Her şeyi kaldır seçeneğini seç.** Laptopu kendin kullanmaya devam edeceksen "Dosyalarımı koru" yeter. Satacak ya da hediye edeceksen Microsoft "Her şeyi kaldır" ile birlikte "Verileri temizle" seçeneğini öneriyor; işlem uzun sürüyor ama silinen dosyaların kurtarılmasını zorlaştırıyor.

**6. Bulut indirme ya da Yerel yeniden yükleme yolunu seç.** Yerel yeniden yükleme bilgisayardaki dosyaları kullanır ve yavaş internette daha hızlıdır. ASUS, yerel yöntemle kurulum yapamazsan ya da hata alırsan Buluttan indirme yöntemini seçmeni, bunun için cihazın internete bağlı olmasını istiyor.

**7. Sıfırla'ya bas ve ekran kararsa da cihazı zorla kapatma.** ASUS'a göre kurulum bitince cihaz yeniden başlıyor. Microsoft bu sırada ekranın uzun süre kararabileceğini ve cihazın kendini yeniden başlatmayı deneyebileceğini yazıyor; düğmeye basıp araya girme.

## Windows açılmıyorsa laptop nasıl sıfırlanır?

Microsoft sıfırlamayı Windows Kurtarma Ortamı'ndan (Windows RE) da yapabileceğini yazıyor. ASUS'un tarifi şöyle: Windows Kurtarma Ortamı'na gir, Sorun Giderme'yi, sonra Bu bilgisayarı sıfırla'yı seç. "Dosyalarımı sakla"yı seçtiysen hesabını seçip parolasını girmen gerekiyor; parola belirlemediysen doğrudan Devam'a basarsın. Ardından Yerel yeniden kurma ya da Buluttan indirme seçilir ve Sıfırla'ya basılır. Microsoft bu yolda cihaz şifreliyse BitLocker anahtarının gerektiğini ayrıca hatırlatıyor. Windows her açılışta otomatik onarım ekranında takılıyorsa önce [ASUS bilgisayar otomatik onarım ve BIOS](/blog/asus-bilgisayar-otomatik-onarim-ve-bios/) yazısına bak.

## Sıfırladıktan sonra neyi yeniden kurman gerekir?

ASUS, sıfırlamadan sonra tüm uygulamaların kaldırılacağını ve Microsoft Store'dan yeniden yüklenemeyen uygulamaları internet sayfalarından ya da yükleme disklerinden yeniden kurman gerektiğini yazıyor. Sıfırlama ekranındaki "Kaldırılacak uygulamaları görüntüle" listesini bu yüzden önceden not et. ASUS, "Bu bilgisayarla birlikte gelen uygulamaları ve ayarları geri yükle" seçeneğini Hayır yaparsan cihazla gelen ASUS uygulamalarının ve ayarlarının da kaldırılacağını belirtiyor.

## Bu konuda hangi yazılara bakılır?

Sıfırlamayı yavaşlık için düşünüyorsan önce [bilgisayar yavaş çalışıyor](/blog/bilgisayar-yavas-calisiyor/) yazısındaki kontrolleri dene. Telefonu da sıfırlayacaksan [telefon sıfırlama nasıl yapılır](/blog/telefon-sifirlama-nasil-yapilir/) sayfasına, laptop şarj almıyorsa [laptop şarj olmuyor](/blog/laptop-sarj-olmuyor/) yazısına bak.

---

**Kaynak künyesi.** Sıfırlama seçenekleri, Ayarlar ve Windows RE yolu, BitLocker ve ekran kararması bilgisi Microsoft Destek "Bilgisayarınızı sıfırlama" sayfasından; süre, adaptör, arama çubuğu yolu, uygulamaların yeniden kurulması ve Windows 11 yükseltme notu ASUS Destek "İşletim Sisteminin Sıfırlanması" sayfasından alınmıştır. Kendi laptopunun üreticisi farklı bir tarif veriyorsa **üreticinin sayfası esastır.**

Sıfırlamadan sonra da laptop donuyor, açılmıyor ya da aynı hatayı veriyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
