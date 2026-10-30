---
title: "Bilgisayar donuyor: fare ve klavye tepkisizse ne yapılır"
description: "Fare kıpırdamıyor, klavye yanıt vermiyor, ekran takılı kalmış. HP ve ASUS destek belgelerine göre donan bilgisayar için adım adım kontrol."
slug: "bilgisayar-donuyor"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P48 (YK #197 boşluk, BOSLUK.md #116). Slug origin/main'de yok (doğrulayıcı). Yakın yazılar: bilgisayar-yavas-calisiyor (yavaşlık), laptop-isiniyor-fan-sesi (ısınma) — donma için genel yazı yok.
# Kaynak (#88): HP "Computer locks up or freezes" destek sayfası (belirti tanımı, Microsoft sorun gidericisi, PC Hardware Diagnostics) + ASUS FAQ 1038855 (zorla kapatma, çevre birimleri, güncelleme, tanılama, sürücü geri alma, geri yükleme noktası, sıfırlama). URL ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · "ses çıkarıyor" belirtisi (belgede tanımlı değil) · RAM/disk/soğutucu söküm ve değişimi (servis) · mavi ekran hata kodları (ASUS ayrı makaleye yönlendiriyor) · HP'nin adım numaralı sayfası (bu koşuda erişilemedi, yalnız erişilen sayfadaki içerik kullanıldı).
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Fare ve klavye cevap vermiyorsa bilgisayarı donmuş say; güç düğmesine ışık sönene kadar basılı tutup kapat."
  - "Yeniden açmadan önce harici cihazları ve harici ekranları çıkar."
  - "Windows, sürücü ve BIOS güncellemelerini kontrol et, eksikleri yükle."
  - "Microsoft'un sorun gidericisini çalıştır."
  - "Üreticinin donanım tanılama aracını çalıştır."
  - "Sorun bir kurulum ya da güncellemeden sonra başladıysa o yazılımı kaldır, sürücüyse eski sürüme dön."
  - "Sorun yeni başladıysa geri yükleme noktasına dön."
  - "Hiçbiri işe yaramadıysa dosyalarını yedekle, sonra sistemi sıfırla ya da servise götür."
faq:
  - q: "Fare ve klavye çalışmıyorsa bilgisayar kesin donmuş mudur?"
    a: "HP'nin destek sayfasına göre fareyi hareket ettirdiğinde ya da klavyede yazdığında bilgisayar cevap vermiyorsa donmuş olabilir. ASUS'un belgesi de ekran tepkisizse ve hiçbir işlem yapamıyorsan zorla kapatmayı ilk adım olarak veriyor."
  - q: "Güç düğmesine basılı tutarak kapatmak zararlı mı?"
    a: "ASUS bunu donmuş cihaz için doğru ilk adım olarak veriyor: güç ışığı sönene kadar basılı tut. Tek bedeli, kaydedilmemiş çalışmanın kaybolması. Bu yüzden donma sık oluyorsa dosyaları düzenli kaydetmek ve yedeklemek gerekir."
  - q: "Donma tek bir programda mı oluyor, tüm bilgisayarda mı?"
    a: "Belgeler bunu ayrı ayrı ele almıyor. ASUS'un sırasına göre sorun bir kurulumdan ya da güncellemeden sonra başladıysa o yazılımı kaldır ya da sürücüyü eski sürüme döndür. Hiçbir değişiklik yapmadığın halde donuyorsa güncellemelere ve donanım tanılamasına bak."
images:
  coverAlt: "Masada açık dizüstü bilgisayarın ekranında takılı kalmış sade pencere ve yanında hareketsiz fare çizimi"
  steps:
    - "Dizüstü bilgisayarın güç düğmesine basılı tutan beyaz eldivenli sade siluet el"
    - "Bilgisayardan harici diski ve fareyi çıkaran beyaz eldivenli sade siluet el"
    - "Güncelleme okları dönen sade bilgisayar ekranı ve yanında onay işareti"
    - "Ekranda sorun giderici penceresi, yanında büyüteç tutan beyaz eldivenli sade siluet el"
    - "Ekranda tanılama çubuğu dolan sade bilgisayar, önünde işaret eden beyaz eldivenli sade siluet el"
    - "Sürücü listesinde geri alma okuna dokunan beyaz eldivenli sade siluet el"
    - "Takvim ve geriye dönen ok simgeli sade geri yükleme penceresi"
    - "Yanında yedek diski duran sade bilgisayar ve yanında servis simgesi"
---

Fare kıpırdamıyor, klavye tepki vermiyor, ekran olduğu yerde duruyor. HP'nin destek sayfası bu durumu açıkça tarif ediyor: fareyi oynattığında ya da klavyede yazdığında bilgisayar cevap vermiyorsa donmuş olabilir. "Bilgisayar donuyor" diye arayanlar için HP ve ASUS'un destek belgelerini okuduk. Aşağıdaki adımlar bu belgelerden alındı, markaların ayrıldığı yerleri ayrıca yazdık.

> ⚠️ **Önce şu sınırı bil:** ekranda mavi bir hata mesajı varsa bu yazı değil, ASUS'un kendi mavi ekran makalesi geçerli. Bilgisayarı açıp içine bakmak, bellek ya da disk çıkarıp takmak bu yazının kapsamı değil; belgeler de bunu kullanıcıdan istemiyor. Bu işler servise kalır.

## Adım adım: donan bilgisayar

**1. Zorla kapat.** ASUS'un belgesi net: ekran tepkisizse ve hiçbir işlem yapamıyorsan zorla kapatmayı dene. Güç düğmesini güç ışığı sönene kadar basılı tut. Kaydedilmemiş çalışma gider, ama donmuş bir sistemde başka yol yok. ASUS, cihaz yeniden açıldıktan sonra sorunun tekrarlamaması için aşağıdaki adımların uygulanmasını istiyor; zorla kapatma tek başına çözüm değil, yalnız ilk adım.

**2. Harici cihazları çıkar.** Yeniden açmadan önce klavye, fare, harici disk, yazıcı, hafıza kartı, optik sürücüdeki disk ve kart okuyucudaki kartları çıkar. ASUS'a göre bu cihazlardan biri sistemin arızalanmasına yol açabilir. Harici ekranları da çıkar.

**3. Güncellemeleri kontrol et.** ASUS, BIOS'un, Windows'un ve sürücülerin düzenli güncellenmesinin sistem kararlılığını artırdığını yazıyor. Windows güncellemelerini ve sürücüleri kontrol et, eksik olanı yükle. ASUS ayrıca BIOS'u da listeye koyuyor; BIOS güncellemesini üreticinin kendi makalesindeki adımlarla yapman gerekir, bu yazı o işlemi anlatmıyor.

**4. Microsoft'un sorun gidericisini çalıştır.** HP'nin sayfası Windows sorun gidericisini öneriyor: önce belirtiyi seçiyorsun, sonra sorun gidericiyi indirip çalıştırıyorsun. HP'ye göre bu araç tek bir sorunu da birkaç sorunu da düzeltebilir.

**5. Donanım tanılamasını çalıştır.** HP, yavaş ya da donan bilgisayarın sebebinin donanım olabileceğini söylüyor ve kendi PC Hardware Diagnostics aracını öneriyor. ASUS'ta karşılığı MyASUS'taki System Diagnosis sekmesi; bu sekme yoksa ASUS'a göre cihazın bu işlevi desteklemiyor demektir.

**6. Yeni bir kurulumu geri al.** Sorun bir yazılım, sürücü ya da Windows güncellemesinden sonra başladıysa ASUS o yazılımı kaldırmanı ya da önceki sürüme dönmeni söylüyor. Sürücü için yolu belge veriyor: Başlat simgesine sağ tıkla, Aygıt Yöneticisi'ni aç, sorunlu sürücünün olduğu aygıta (belgede örnek olarak ekran bağdaştırıcısı var) sağ tıklayıp Özellikler'i seç, Sürücü sekmesinde "Sürücüyü geri al"a bas. Pencere neden geri aldığını sorar; nedeni seçip Evet dediğinde sistem bir önceki sürücüye döner.

**7. Geri yükleme noktasına dön.** ASUS'a göre sorun yeni başladıysa ve önceden bir geri yükleme noktası oluşturulduysa ya da Windows otomatik oluşturduysa, cihazı sorundan önceki noktaya döndürebilirsin.

**8. Son çare: yedekle ve sıfırla.** ASUS'un son basamağı sistemi sıfırlamak. Önce kişisel dosyaları yedekle, çünkü belge bu sırayı özellikle yazıyor. Bu da işe yaramazsa ASUS müşteri hizmetine başvurmanı istiyor.

## Hangi adım neyi değiştirir?

Sıra rastgele değil. İlk dört adım dosyalarına ve ayarlarına dokunmaz; yalnız cihazı kapatır, çevre birimlerini ayırır ve güncelleme yükler. Altıncı ve yedinci adım yazılım ve sürücü düzeyinde geri dönüş yapar. ASUS sistem geri yüklemeyi "sorun yeni başladıysa" şartıyla veriyor. Sekizinci adım ise ASUS'un kendi ifadesiyle son çare: sistemi ilk yapılandırmasına döndürür. Bu yüzden yedek almadan sıfırlamaya geçme.

## HP ve ASUS ne diyor, nerede ayrılıyor?

İki belge de donmayı tek bir sebebe bağlamıyor, sırayla eleme yapıyor. HP donanım tanılamasını ve Microsoft'un sorun gidericisini öne çıkarıyor. HP Support Assistant uygulamasının 8.5 ya da daha yeni sürümü yüklüyse HP'nin Performance Tune Check aracı donmuş bilgisayarı otomatik teşhis edip düzeltmeye çalışıyor; araç HP uygulamasına bağlı. HP ayrıca düzenli bakım taramalarının bu tür sorunları azaltabileceğini söylüyor. ASUS ise önce cihazı zorla kapatmayı, ardından çevre birimlerini ve güncellemeleri sıralıyor, geri yükleme ve sıfırlamaya en sonda geliyor. Bu iki yaklaşım çelişmiyor, birbirini tamamlıyor: önce kolay ve geri alınabilir olanı dene, sonra tanıla, en son sıfırla.

## Isınma ve yavaşlık da donma yapar mı?

ASUS'un belgesine göre cihazın içindeki sıcaklık yükselirse sistem performansı düşer. Fan sesi hiç kesilmiyorsa [laptop çok ısınıyor, fan sesi kesilmiyor](/blog/laptop-isiniyor-fan-sesi/) yazısına bak. Bilgisayar tamamen donmuyor, yalnız yavaşsa [bilgisayar yavaş çalışıyor](/blog/bilgisayar-yavas-calisiyor/) yazısı daha uygun. Hiç açılmıyorsa ya da açılıp ekran gelmiyorsa [bilgisayar açılıyor ama ekran gelmiyor](/blog/bilgisayar-acilmiyor-ekran-gelmiyor/) yazısına geç.

## Servis çağırmadan önce üç not

1. Donmanın ne zaman olduğunu yaz: açılışta mı, bir programda mı, belirli bir süre sonra mı?
2. Son kurulum, güncelleme ya da sürücü değişikliği tarihini hatırla.
3. Zorla kapatma sonrası ışığın nasıl davrandığını not et.

Bu üç bilgi, servisin sorunu daha çabuk daraltmasını sağlar. Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
