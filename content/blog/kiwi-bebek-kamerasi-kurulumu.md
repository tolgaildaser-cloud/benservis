---
title: "Kiwi bebek kamerası kurulumu: KBABY-99 ve TuyaSmart"
description: "Kiwi Baby KBABY-99 IP bebek kamerasını TuyaSmart uygulamasıyla Wi-Fi'ye bağlama: Bluetooth ve QR kod kurulumu, SD kart, sıfırlama ve temizlik."
slug: "kiwi-bebek-kamerasi-kurulumu"
date: "2026-10-25"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ yazı alt ajanı (YK #182 Dalga 8, küme Z1, çatal A). Konu: origin/main 829cec5'te slug grep'i "bebek|kamera|tuya" boş, başlık grep'i "bebek|kamera|tuya|ip kamera" yalnız klima kumandası (telefon kamerası) yazısını buldu, aynı sorgu değil. Dalga 6/7/8'de bebek kamerası yazısı yok.
# Kardeş yazı: kiwi-ip-kamera-kurulumu (KBABY-93/96, Yi IoT uygulaması, yalnız 2.4 GHz). Bu yazı KBABY-99 + TuyaSmart; iki ürün farklı uygulama ve farklı Wi-Fi bandı kullanıyor, sorgu ayrımı başlıkta.
# GSC: ~/Downloads/https___www-3..6/Sorgular.csv içinde "kiwi", "bebek kamera", "tuya" satırı YOK.
# Arama kanıtı (#164, bu koşu 25 Eki, suggestqueries hl=tr gl=tr; _kaynak/ot.tsv): "kiwi bebek kamerası" → 1. kendisi · 2. …kurulumu · 3. …uygulaması;
#   "kiwi baby" → 1. kiwi baby kamera · 2. kiwi baby kamera uygulaması indir; "kiwi baby kamera kurulum" → 1. kendisi · 2. …kurulumu nasıl yapılır · 3. kiwi baby ip kamera kurulumu;
#   "kiwi kbaby 99" → 1. kiwi kbaby 99 ip bebek kamera · 2. …bebek kamera.
# Belge (#88): kiwi.com.tr ürün sayfası HTTP 200, PDF adı sayfada 2 kez; PDF static.kiwi.com.tr HTTP 200 application/pdf, 24 s. (EN s.2-9, TR s.10-24), md5 6f456463fc4e030b713ff450790bbc2d. Garanti belgesi s.21: Ürünün Cinsi IP Kamera, Markası Kiwi Baby, Modeli KBABY99.
# Sağlık notu: kılavuzdaki "yetişkin gözetiminin yerini alamaz" cümlesi aynen aktarıldı; bebek bakımı ya da uyku önerisi yazılmadı.
# BİLEREK YAZILMAYANLAR: kasa açma (#31) · bulut abonelik koşulları (TR metinde yok) · kurulum ekranlarındaki görsel adımların ayrıntısı (yalnız resimde) · fiyat (#46).
# Alıntı denetim tablosu: kiwi-bebek-kamerasi-kurulumu.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Akıllı telefon", "Wi-Fi ağ adı ve şifresi", "FAT32 biçimli SD kart", "Type-C kablo ve adaptör"]
steps:
  - "TuyaSmart uygulamasını App Store ya da Google Play'den indir, kaydol ya da giriş yap."
  - "Kamerayı DC5V 1.5A beslemeyle Type-C soketinden çalıştır, telefonu ve kamerayı yönlendiriciye yakın tut."
  - "Telefonda Wi-Fi ve Bluetooth'u aç; hızlı Bluetooth bağlantısında Wi-Fi şifreni girip İleri'ye dokun."
  - "Bluetooth olmazsa uygulamada + ile cihaz ekle, şifreyi onayla ve telefondaki QR kodu kameraya okut."
  - "Kameradan bip sesi gelince onayla, yaklaşık otuz saniye bekle, cihaza bir ad ver."
  - "SD kartı FAT32 biçimiyle tak, hareket algılama ve bildirim izinlerini uygulamadan aç."
  - "Kurulumdan sonra hesap şifreni değiştir; kamerayı kapatıp kablosunu çıkararak yalnız nemli bezle temizle."
faq:
  - q: "Kiwi KBABY-99 hangi uygulamayla çalışır?"
    a: "KBABY-99 kılavuzu TuyaSmart uygulamasını gösteriyor. Uygulama App Store'da ya da Google Play'de 'TuyaSmart' diye aranarak ya da kılavuzdaki QR kod okutularak indirilir. Kiwi'nin KBABY-93 ve KBABY-96 kameraları ise Yi IoT uygulamasını kullanıyor."
  - q: "Kamera 5 GHz Wi-Fi'ye bağlanır mı?"
    a: "Evet. KBABY-99 kılavuzu kameranın hem 2,4 GHz hem 5 GHz Wi-Fi ağlarını desteklediğini yazıyor. Kılavuz Wi-Fi şifresinde ~!@#$%^&*() gibi özel karakterler bulunmamasını istiyor."
  - q: "Kamera başka bir hesaba eklenemiyor, neden?"
    a: "Kılavuza göre bir cihaz yalnız bir uygulama hesabıyla eklenebilir. Daha önce başka bir hesaba eklenmişse önce o hesaptaki uygulamadan silinmesi gerekir. Uygulamadan silinen cihaz önceki hesapla bağlantısını keser ve ışığı maviden kırmızıya geçerek bir kez kendini sıfırlar."
  - q: "SD kartı neden tanımıyor?"
    a: "Kılavuzun soru-cevap bölümü SD kartın elektrik kesintisinden sonra takılmasını, kartın sağlam olup olmadığının ve biçiminin FAT32 olup olmadığının kontrol edilmesini öneriyor. İnternet bağlantısı iyi değilken kartın tanınmayabileceğini de not ediyor."
  - q: "Kamerayı başka bir modeme nasıl taşırım?"
    a: "Önce cihazı uygulamadan kaldırıp sıfırla, ardından uygulama üzerinden yeni ağla yeniden yapılandır. Kılavuz sıfırlamanın yalnız kameranın ağ ayarını sildiğini, uygulamadaki kaydı kaldırmadığını; onun uygulamadan ayrıca silinmesi gerektiğini yazıyor."
images:
  coverAlt: "Bebek odasında rafa konmuş küçük beyaz bir bebek kamerası, arkada yumuşak ışıklı duvar"
  steps:
    - "Çizim: solda kamera, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda kamera, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kamera, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda kamera, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda kamera, sağda bekleme süresi için saat"
    - "Çizim: solda kamera, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda kamera, sağda anten girişi ve kablo"
---

Kiwi Baby KBABY-99, TuyaSmart uygulamasıyla çalışan, Wi-Fi'ye bağlanan bir IP bebek kamerasıdır. Kurulumda en çok takılınan iki yer Wi-Fi şifresi ve kameranın daha önce başka bir hesaba eklenmiş olmasıdır. Bu yazıdaki adımlar KBABY-99'un Türkçe kullanım kılavuzundan alındı. Kılavuzun ilk uyarısı da şu: **"Bu bebek izleme cihazı yalnızca yardımcı bir üründür ve hiçbir koşulda 'YETİŞKİN GÖZETİMİ'nin yerini alamaz."**

> ⚡ **Kısa özet:** TuyaSmart'ı indir, kamerayı Type-C'den çalıştır. Telefonda Wi-Fi ve Bluetooth açıkken hızlı Bluetooth bağlantısını dene; olmazsa QR kodla ekle. Kamera 2,4 GHz ve 5 GHz ağları destekler, şifrede özel karakter olmasın. Bir kamera yalnız bir hesaba eklenir. SD kart FAT32 olmalı. Kurulumdan sonra şifreni değiştir.

## Kamera ve kılavuzdaki değerler

| | KBABY-99 |
|---|---|
| Uygulama | TuyaSmart (iOS ve Android) |
| Wi-Fi | 2,4 GHz ve 5 GHz |
| Besleme | Type-C şarj soketi, DC5V 1.5A |
| Parçalar | Mikrofon, lens, ışık sensörü, hafıza kartı yuvası, dahili hoparlör, Type-C soket, tripod montaj deliği, sabitleme yuvası |
| Çalışma sıcaklığı | 0 ila +35 °C (saklama −5 ila +45 °C) |
| Kayıt | SD kart (FAT32) |

Kılavuzda sayılan işlevler: telefonu kaydırarak kamerayı döndürme ve 360 derece görüş, görüntüyü yukarı ya da aşağı çevirme, hareket algılayınca anlık bildirim, SD kartla 24 saat kesintisiz kayıt ve gece görüşü.

## Adım adım: TuyaSmart ile kurulum

**1. Uygulamayı indir, hesabını aç.** Telefonunda App Store'u ya da Google Play'i aç, "TuyaSmart" diye ara ya da kılavuzdaki QR kodu okut. Yeni kullanıcıysan uygulamadaki adımlarla kayıt ol, kayıtlıysan yalnız giriş yap.

**2. Kamerayı çalıştır ve konumla.** Kamerayı Type-C şarj soketinden DC5V 1.5A beslemeyle çalıştır. Kılavuz, kurulum sırasında telefonun ve kameranın yönlendiriciye olabildiğince yakın durmasının yapılandırmayı hızlandırdığını yazıyor. Yönlendiricinin ayarlarını Wi-Fi yapılandırmasından önce yap; Wi-Fi şifresinde ~!@#$%^&*() gibi özel karakterler olmasın.

**3. Hızlı Bluetooth bağlantısını dene.** Telefonunun Wi-Fi ve Bluetooth özelliğini aç. Uygulama kamerayı bulunca Wi-Fi şifreni gir ve İleri'ye dokun. Bağlantı ekranı geçtikten sonra kurulum tamamlanır.

**4. Gerekirse QR kodla ekle.** TuyaSmart'ı aç, "+" ya da "Cihaz Ekle"ye dokun, "Cihaz Türünü Seç" sayfasında "Tümü"nü seç. Kılavuzun bir sonraki adımı "Güvenlik Sensörü"nü seçmeyi söylüyor. Cihazı aç; göstergenin hızlı yanıp söndüğünü ya da bir uyarı tonu duyduğunu doğrula. Wi-Fi şifreni gir, "Onayla"ya dokun ve telefonda çıkan QR kodu kameraya okut.

**5. Bip sesini onayla ve adlandır.** Kamera "ding" sesi verdiğinde "Bip sesini duydum"a dokun. Kılavuz yapılandırmanın yaklaşık 30 saniye içinde tamamlandığını yazıyor. Son ekranda cihaz eklenir; istersen takma adını değiştir.

**6. SD kartı ve bildirimleri ayarla.** Kayıt için hafıza kartı yuvasına bir SD kart tak. Kart tanınmazsa biçiminin FAT32 olup olmadığına bak; kılavuz kartın elektrik kesintisinden sonra takılmasını öneriyor. Bildirim gelmiyorsa uygulamanın telefonda çalıştığını, hatırlatma işlevinin açık olduğunu ve telefonun bildirim izninin verildiğini kontrol et.

**7. Şifreyi değiştir, doğru temizle.** Kılavuzun son sayfası kurulumu tamamladıktan sonra şifrenin güvenlik için değiştirilmesini ve periyodik aralıklarla yenilenmesini istiyor. Temizlemeden önce cihazın kapalı olduğundan emin ol, kabloları çıkar. Cihazı nemli bir bezle sil; aşındırıcı temizleyici, bulaşık süngeri ya da çelik yünü kullanma, cihazı suya batırma.

## Kılavuzun soru-cevap bölümü

| Sorun | Kılavuzun önerisi |
|---|---|
| Görüntü gelmiyor | Ağı kontrol et, kamerayı yönlendiriciye yaklaştır; olmazsa sıfırlayıp yeniden ekle |
| Başka modeme taşımak | Uygulamadan kaldır, sıfırla, yeniden yapılandır |
| SD kart tanınmıyor | Elektrik kesintisinden sonra tak, FAT32 olduğunu ve kartın sağlamlığını kontrol et |
| Bildirim yok | Uygulama açık mı, hatırlatma ve telefon bildirim izni açık mı |

Sıfırlamanın yalnız kameranın ağ ayarını sildiğini unutma; kamera uygulamadaki listeden ayrıca silinmezse başka bir hesaba eklenemez.

## Kullanırken dikkat

- Kamerayı ısı kaynaklarından (en çok 40°C) ve nemden koru; açık alev yanında kullanma.
- Kullanım sırasında adaptör ısınabilir, üzerini örtme.
- Cihazı düşürme, darbeye ve elektromanyetik radyasyon kaynaklarına maruz bırakma.
- Kılavuz sistemin özel görüşmeleri dinlemek için kullanılmasının yasa dışı olduğunu yazıyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Kamera ağa bağlanmıyor | Senin; şifreyi, yakınlığı ve hesap kaydını kontrol et, sıfırla |
| SD kart okunmuyor | Senin; FAT32 biçimi ve sağlam kart |
| Kamera düştü, suya maruz kaldı, kablo hasarlı | Kullanma; yetkili servis |
| Cihaz açılmıyor | Yetkili servis |

⛔ Kılavuz açıkça "cihazı kendiniz sökmeyin veya onarmayın" diyor; arızada servis merkeziyle iletişime geçilir.

Yi IoT uygulamasıyla çalışan KBABY-93 ve KBABY-96 için [Kiwi IP kamera kurulumu](/blog/kiwi-ip-kamera-kurulumu/) yazısına, odanın sıcaklık ve nem takibi için [Kiwi sıcaklık nem ölçer kullanımı](/blog/kiwi-sicaklik-nem-olcer-kullanimi/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Uygulama adı, Wi-Fi bandı, kurulum adımları, parça adları, sıcaklık sınırları, soru-cevaplar ve temizlik Kiwi Baby'nin KBABY-99 Türkçe kullanım kılavuzundan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
