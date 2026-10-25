---
title: "Kiwi IP kamera kurulumu: Yi IoT ile KBABY-93 ve 96"
description: "Kiwi Baby KBABY-93 ve KBABY-96 IP kamerayı Yi IoT uygulamasıyla 2.4 GHz Wi-Fi'ye bağlama: kayıt, QR kod, Bluetooth, hotspot, TF kart ve temizlik."
slug: "kiwi-ip-kamera-kurulumu"
date: "2026-10-25"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ yazı alt ajanı (YK #182 Dalga 8, küme Z1, çatal A). Konu: origin/main 829cec5'te slug grep'i "kamera|yi-iot" boş, başlık grep'i "ip kamera|yi iot" boş. Dalga 6/7/8'de Yi IoT ya da IP kamera yazısı yok.
# Kardeş yazı: kiwi-bebek-kamerasi-kurulumu (KBABY-99, TuyaSmart, 2.4+5 GHz). Bu yazı Yi IoT uygulamalı iki modeli tek ailede topluyor; sorgu ayrımı başlıkta "Yi IoT".
# GSC: ~/Downloads/https___www-3..6/Sorgular.csv içinde "kiwi", "ip kamera", "yi iot" satırı YOK.
# Arama kanıtı (#164, bu koşu 25 Eki, suggestqueries hl=tr gl=tr; _kaynak/ot.tsv): "kiwi ip kamera" → 1. kendisi · 2. …kbaby 99 · 3. kiwi ip kamera kurulumu · 5. …uygulama;
#   "kiwi kbaby 96" → 1. …bebek kamera · 2. kiwi kbaby 96 ip kamera · 4. kiwi ekranlı ip kamera kbaby 96; "kiwi kbaby 93" → 1. kiwi baby kbaby 93 ip kamera;
#   "yi iot kamera kurulumu" → 1. yı ıot kamera kurulumu; "kiwi kamera" → 3. kiwi kamera kurulumu.
# Belgeler (#88): kiwi.com.tr ürün sayfaları HTTP 200, PDF adları sayfada 2 kez; PDF'ler static.kiwi.com.tr HTTP 200 application/pdf.
#  (A) KBABY-93 52 s. (EN s.2-21, TR s.22-52), md5 0e3c8983725cc7d4c4f6d86cdd25fef3
#  (B) KBABY-96 52 s., md5 d4ab2c1f2d309d2e1a036eda4a934d51. TR metni s.22-43 arasında yalnız s.24 (parça listesi) farklı, diğer sayfalar model adı dışında aynı (diff).
# Belge çelişkisi: KBABY-93 parça listesinde "Duy Bağlantı" ve "AC 110-220V" var, ama ortak kurulum metni "USB kablosu ve güç adaptörü"nden söz ediyor; yazıda iki model ayrı anlatıldı, (çıkarım) işaretli.
# BİLEREK YAZILMAYANLAR: bulut depolamanın ücret koşulları (yalnız "ücret karşılığında, 7 gün ücretsiz deneme" cümlesi var) · duy montajı/elektrik bağlantısı (#31) · kasa açma · fiyat (#46).
# Alıntı denetim tablosu: kiwi-ip-kamera-kurulumu.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Akıllı telefon", "2.4 GHz Wi-Fi ağı", "Kâğıda yazılmış Wi-Fi şifresi", "En çok 64 GB TF kart"]
steps:
  - "Wi-Fi şifreni kâğıda yaz, ağının 2.4 GHz olduğundan emin ol; kamera 5 GHz ağları görmez."
  - "Telefona Yi IoT uygulamasını indir, e-postayla kaydol, gelen aktivasyon bağlantısına tıklayıp giriş yap."
  - "Kamerayı çalıştır; yaklaşık on beş ile yirmi saniye içinde açılıp mavi ışık yakmasını bekle."
  - "Uygulamada + düğmesine, sonra Wi-Fi bağlantı düğmesine bas, sesi duyunca devam et ve Wi-Fi şifreni gir."
  - "Telefonda çıkan QR kodu kameraya on beş ile kırk santim arasından tut, bağlantı sesini bekle."
  - "Kameraya ad ver, Bitir'e bas; ana menüde görüntüye dokunarak canlı izlemeyi aç."
  - "TF kartı tak, hareket algılamayı aç; temizlikte cihazı kapat ve yalnız nemli bezle sil."
faq:
  - q: "Kiwi IP kamera 5 GHz Wi-Fi'ye bağlanır mı?"
    a: "Hayır. KBABY-93 ve KBABY-96 kılavuzu kameranın internet için 2.4 GHz Wi-Fi ağını kullanabildiğini, 5 GHz ağları görmediğini ve desteklemediğini yazıyor. Modemin iki bandı aynı adla yayınlıyorsa bu durum bağlanmayı zorlaştırabilir (çıkarım)."
  - q: "Kiwi KBABY-93 ve KBABY-96 arasındaki fark ne?"
    a: "İki modelin Türkçe kurulum metni aynı, fark parça listesinde. KBABY-93'te HD objektif, beyaz LED'ler ve duy bağlantısı var, besleme AC 110-220V yazıyor. KBABY-96'da IPS ekran, çağrı ve çağrı sonlandırma düğmeleri, kızılötesi aydınlatma, fabrika ayarlarına sıfırlama düğmesi ve DC5V 1.5A adaptör var."
  - q: "Aktivasyon e-postası gelmiyor, ne yapayım?"
    a: "Kılavuz aktivasyon bağlantısının internet hızına bağlı olduğunu ve 10 dakika içinde e-posta kutusuna geleceğini yazıyor. Kayıtta şifre en az 8 karakter olmalı, büyük harf ve rakam içermeli."
  - q: "Kamera çevrimdışı görünüyor, neden?"
    a: "Kılavuzun sorun giderme bölümü önce güç kaynağının çalışıp çalışmadığına bakılmasını, sonra cihazın kapatılıp yeniden başlatılmasını öneriyor. Sinyal kapsama alanının zayıf olması ve bazı yerlerde sinyal parazitinin olması da sebep olarak sayılıyor."
  - q: "Kamera videoyu nereye kaydeder?"
    a: "Kamera en çok 64 GB TF kartı destekler. Kart tanınınca otomatik kayıt başlar, depolama dolunca en eski kaydın üzerine yazarak döngüye girer. Ayrıca uygulamanın ücretli bulut depolama hizmeti var; kılavuz 7 günlük ücretsiz deneme kullanımından söz ediyor."
images:
  coverAlt: "Rafta duran beyaz bir IP kamera ve yanında akıllı telefon, sade bir oturma odası"
  steps:
    - "Masada bir kâğıt ve kalem, yanında modem"
    - "Telefon ekranında açılmış bir kamera uygulamasının kayıt formu"
    - "Önünde mavi ışığı yanan beyaz bir IP kamera"
    - "Telefon ekranında Wi-Fi ağ adı ve şifre alanı"
    - "Telefon ekranındaki QR kodun kameranın objektifine dönük tutulması"
    - "Uygulamanın ana menüsünde canlı görüntü ve altında sıralı simgeler"
    - "Kameranın yan yüzündeki hafıza kartı yuvası, yanında küçük bir TF kart"
---

Kiwi Baby'nin KBABY-93 ve KBABY-96 IP kameraları aynı uygulamayla, Yi IoT ile kurulur. İki modelin Türkçe kurulum metni neredeyse birebir aynı; fark donanımda. Kurulumda en sık takılınan nokta Wi-Fi bandıdır. Kılavuz bunu baştan söylüyor: **"IP Kameranız internet için 2.4 GHZ WIFI ağını kullanabilir. 5 GHZ ağları görmez ve desteklemez."** Bu yazıdaki adımlar iki modelin Türkçe kılavuzlarından alındı.

> ⚡ **Kısa özet:** Wi-Fi şifreni kâğıda yaz, 2.4 GHz ağ kullan. Yi IoT'yi indir, e-postayla kaydol, aktivasyon bağlantısını aç. Kamerayı çalıştır, mavi ışığı bekle. Uygulamada + ve Wi-Fi bağlantısını seç, şifreyi gir, QR kodu kameraya 15–40 cm'den göster. Kayıt için en çok 64 GB TF kart tak.

## İki model ve kılavuzdaki farklar

| | KBABY-93 | KBABY-96 |
|---|---|---|
| Uygulama | Yi IoT | Yi IoT |
| Wi-Fi | Yalnız 2.4 GHz | Yalnız 2.4 GHz |
| Besleme | Duy bağlantı, AC 110-220V | Güç bağlantısı, adaptör, USB kablosu, DC5V 1.5A |
| Öne çıkan parçalar | HD objektif, ışık sensörü, beyaz LED'ler, mikrofon, dahili hoparlör, hafıza kartı yuvası, sıfırlama düğmesi | Lens, kızılötesi aydınlatma, ışık sensörü, IPS ekran, çağrı ve çağrı sonlandırma düğmeleri, dahili hoparlör, hafıza kartı yuvası, fabrika ayarlarına sıfırlama düğmesi |
| Kayıt | TF kart, en çok 64 GB | TF kart, en çok 64 GB |

Ortak kurulum metni kamerayı "paketteki USB kablosu ve güç adaptörüyle" açmayı söylüyor. KBABY-93'ün parça listesinde ise duy bağlantısı ve AC 110-220V yazıyor; bu modelde güç duy üzerinden geliyor olmalı (çıkarım). Duy montajı elektrik işidir, emin değilsen bir elektrikçiye bırak.

## Adım adım: Yi IoT ile kurulum

**1. Ağını hazırla.** Kılavuz evdeki Wi-Fi şifresini önceden bir kâğıda yazmanı öneriyor. Kameranın yalnız 2.4 GHz ağı gördüğünü unutma. Hızlı bir internet bağlantısı görüntünün daha hızlı gelmesini ve kameranın daha hızlı hareket ettirilmesini sağlar.

**2. Uygulamayı indir ve kaydol.** App Store ya da Google Play'de "Yi IoT" diye ara ya da kılavuzdaki barkodu okut. Formu doldur, şifreni seç ve Kaydol'a bas. Şifre en az 8 karakter olmalı, büyük harf ve rakam içermeli. E-postanı kontrol et, aktivasyon bağlantısına tıkla; bağlantı 10 dakika içinde gelir. Giriş ekranına dönüp e-posta ve şifrenle oturum aç.

**3. Kamerayı çalıştır.** Kamera ekle düğmesine basmadan önce kamerayı açman gerekir. Kılavuza göre IP kamera yaklaşık 15–20 saniye içinde açılır ve mavi LED ışığı yanar.

**4. Wi-Fi bağlantısını başlat.** Uygulamada kamera ekleme düğmesine (+), sonra Wi-Fi bağlantı düğmesine bas. Uygulama telefonunun bağlı olduğu Wi-Fi adını kendiliğinden gösterir, istersen başka bir ağ seçebilirsin. Kameradan sesi duyduktan sonra düğmeye bas, Wi-Fi şifreni gir ve ilerle.

**5. QR kodu kameraya göster.** Telefonda çıkan QR barkodunu kameraya doğru tut, 15–40 cm mesafeden yaklaştır. Kılavuz bu işlemin 2–3 dakika sürebileceğini yazıyor. Bağlanınca bir ses duyarsın; sonraki adım düğmesine bas.

**6. Adlandır ve izlemeye başla.** Kameraya bir ad ver ya da hazır adlardan birini seç, Bitir'e bas. Sonraki tanıtım ekranlarını geçebilirsin. Ana menüde kamera görseline dokununca kamera etkinleşir. Ekrandaki simgeler sırasıyla ortam sesi, kayıt, mikrofon, kamera yön ayarı, ekran görüntüsü, hareket uyarıları, tam ekran ve kamera ayarıdır.

**7. Kaydı ayarla, doğru temizle.** Hafıza kartını tak ve seçeneklerden ayarla; kayıt kendiliğinden başlar. Hareket algılamayı kamera seçeneklerinden aç; uyarı sekmesinde hareket anının kısa videosunu görürsün. Temizlemeden önce cihazın kapalı olduğundan emin ol. Nemli bir bezle sil; aşındırıcı temizleyici, bulaşık süngeri ya da çelik yünü kullanma, suya batırma.

## Diğer bağlantı yolları

- **Bluetooth eşleştirme:** Yalnız Bluetooth destekli kameralar için. Kamerayı aç; kılavuza göre yaklaşık 20 saniye sonra bip sesi gelir. Ana sayfanın sağ üstündeki "+"ya dokun, "Yi IoT Bluetooth kullanmak istiyor" penceresinde "Tamam"a bas. Pencere çıkmazsa telefonun Bluetooth'unu açıp "Bluetooth+WiFi"yi seç. Uygulama konum iznine ihtiyaç duyar.
- **Hotspot Direct Watch:** Telefonu doğrudan kameranın "CAM_" ile başlayan kablosuz ağına bağlarsın; varsayılan şifre 12345678. Kılavuz bu yolun uzun mesafeler için uygun olmadığını yazıyor.

## Kılavuzdaki sorun giderme

| Sorun | Kılavuzun önerisi |
|---|---|
| Kamera çevrimdışı ya da çalışmıyor | Güç kaynağını kontrol et, cihazı kapatıp yeniden başlat, sinyal zayıflığına ve parazite bak |
| Kayıt nerede | En çok 64 GB TF kart, dolunca eski kaydın üzerine yazar; isteğe bağlı bulut |

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Ağa bağlanmıyor | Senin; 2.4 GHz ağ, doğru şifre, yakın mesafe |
| Kart tanınmıyor | Senin; en çok 64 GB TF kart |
| Duy bağlantısı, elektrik tesisatı | Elektrikçi |
| Kamera düştü, ıslandı, açılmıyor | Kullanma; yetkili servis |

⛔ Kılavuz "cihazı kendiniz sökmeyin veya onarmayın" diyor; arızada servis merkezine başvurulur.

TuyaSmart uygulamalı KBABY-99 için [Kiwi bebek kamerası kurulumu](/blog/kiwi-bebek-kamerasi-kurulumu/) yazısına, odanın iklimini izlemek için [Kiwi sıcaklık nem ölçer kullanımı](/blog/kiwi-sicaklik-nem-olcer-kullanimi/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Uygulama adı, Wi-Fi bandı, kayıt ve kurulum adımları, bağlantı seçenekleri, parça listeleri, kayıt kapasitesi ve temizlik Kiwi Baby'nin KBABY-93 ve KBABY-96 Türkçe kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
