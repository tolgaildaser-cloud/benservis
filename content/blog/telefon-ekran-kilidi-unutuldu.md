---
title: "Telefon ekran kilidi unutuldu: iPhone ve Samsung'da çözüm"
description: "Ekran kilidini unuttuysan resmî yol ne? Apple'ın parola sıfırlama ve kurtarma modu adımları, Samsung'un Find My Mobile ile uzaktan kilit açma yöntemi."
slug: "telefon-ekran-kilidi-unutuldu"
date: "2026-10-30"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, P42, satır #169). Slug origin/main'de ve diğer paketlerde yok. Yakın yazı: yok (main'de ekran kilidi konusu yok).
# OT (30 Eki, hl=tr): "telefon ekran kilidi" #1 "telefon ekran kilidi unuttum", #2 "…unuttum nasıl açılır", #10 "…unuttum iphone"; "telefon ekran" #5; "iphone ekran" #8; "samsung telefon ekran" #10.
# Kaynaklar (#88): support.apple.com/tr-tr/HT204306 · samsung.com/az/support/mobile-devices/how-can-i-unlock-my-samsung-galaxy-if-i-forget-the-pattern-lock-pin-code-or-password/ (Azerbaycanca resmî Samsung sayfası; Türkiye sitesinde karşılığı 404). md5 ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · üçüncü taraf kilit açma yazılımları ve tuş kombinasyonu (Samsung'un Azerbaycan sayfası Güç + Sesi artırma 10 sn diyor, Türkiye sayfaları Sesi kısma 7 sn; çelişki yüzünden girmedi) · Recovery Mode tuş sırası (sayfada yok) · Redmi/Xiaomi (belge yok).
guide:
  difficulty: "Orta"
  time: "~60 dakika"
  totalTime: "PT60M"
  cost: "Ücretsiz"
  tools: ["Bilgisayar", "Şarj kablosu", "İnternet bağlantısı", "Apple Hesabı ya da Samsung hesabı bilgileri"]
steps:
  - "Önce kilit türünü ayır: parmak izi çalışmıyorsa kayıtlı PIN, parola ya da deseni gir."
  - "iPhone'da önce Parola Sıfırlama seçeneğini dene."
  - "Samsung'da Find My Mobile ile kilidi uzaktan açmayı dene."
  - "iPhone'u bilgisayarla sıfırlayacaksan önce iPhone'u kapat."
  - "Kabloyu bilgisayara, sonra iPhone'a tak ve bilgisayar ile kablo resmi görünene kadar düğmeyi basılı tut."
  - "Bilgisayarda iPhone'unu seç ve Geri Yükle'yi seç."
  - "Samsung'da uzaktan açma olmadıysa verileri sıfırla ya da servise git."
faq:
  - q: "Ekran kilidini unutunca verilerim silinir mi?"
    a: "Apple'ın sayfasına göre parolanı unuttuğunda iPhone'una erişmek için aygıtı sıfırlaman gerekir ve bu işlem iPhone'da olan verileri siler. Samsung'a göre ise Find My Mobile ile uzaktan kilit açma en basit ve güvenli yol; olmazsa fabrika ayarlarına dönmek tüm verileri siler. Yedeğin varsa geri yükleyebilirsin."
  - q: "Bilgisayarım yoksa ne yapmalıyım?"
    a: "Apple, bilgisayarın yoksa ve ödünç alamıyorsan yardım için Apple Store'a ya da Apple Yetkili Servis Sağlayıcısı'na gitmeni söylüyor."
  - q: "Parmak izim çalışmıyor ama PIN'imi biliyorum. Ne yapayım?"
    a: "Samsung'a göre parmak izi kilidi etkin ve çalışmıyorsa, parmak izinle birlikte belirlediğin PIN, parola ya da deseni girmek kilidi açmaya yeter. Sonra parmak izini yeniden tanımlayabilirsin."
  - q: "Redmi, Xiaomi ya da başka bir markada ne yapmalıyım?"
    a: "Bu yazı yalnızca Apple ve Samsung belgelerine dayanıyor. Diğer markalar için üreticinin kendi destek sayfasına bakman gerekir."
images:
  coverAlt: "Masada duran kilitli ekranlı telefonun ve yanındaki kilit simgesinin sade çizimi"
  steps:
    - "Parmak izi okuyucusu ile tuş takımı yan yana duran telefon çizimi"
    - "Ekrandaki sıfırlama seçeneğine dokunan beyaz eldivenli sade siluet el"
    - "Bilgisayar ekranında kilit açma düğmesine tıklayan beyaz eldivenli sade siluet el"
    - "Telefonun yan düğmesine ve ses düğmesine birlikte basan beyaz eldivenli sade siluet el"
    - "Telefonu kabloyla bilgisayara bağlayan beyaz eldivenli sade siluet el"
    - "Bilgisayar ekranında geri yükle düğmesine tıklayan beyaz eldivenli sade siluet el"
    - "Telefon simgesi ve yanında servis tezgâhı çizimi"
---

Parolayı ya da deseni art arda yanlış girdin, telefon kilitli kaldı. "Telefon ekran kilidi unuttum" diye arayanlar için Apple'ın ve Samsung'un kendi destek sayfalarını okuduk. İki üreticinin de resmî yolu var ve ikisinde de son çare cihazı silmek. Bu yüzden önce veri kaybı olmayan yolları deneyeceksin. Yazıdaki sıra da bu mantıkla kuruldu: önce kilidi açmayı deneyen adımlar, sonda cihazı silen adımlar. Menüden sıfırlamanın genel anlatımı ayrı bir yazıda; burada kilitliyken ulaşılabilen yollara bakıyoruz.

> ⚠️ **Önce şunu bil:** bu yazı yalnızca kendi telefonun içindir. Apple'ın sayfasına göre parolanı unuttuğunda iPhone'una erişmek için aygıtı sıfırlaman gerekir ve bu, iPhone'daki verileri siler. Yedeğin yoksa bu yola girmeden önce diğer seçenekleri dene.

## Adım adım: kilit unutulunca ne yapılır

**1. Kilit türünü ayır.** Samsung'un sayfası ilk adım olarak cihazında hangi kilidin kullanıldığını netleştirmeni istiyor: parmak izi ya da PIN, parola, desen. Parmak izi kilidi etkin ve çalışmıyorsa, parmak izinle birlikte belirlediğin PIN'i, parolayı ya da deseni girmek kilidi açmaya yetiyor. Sonra parmak izini yeniden tanımlayabilirsin.

**2. iPhone'da önce Parola Sıfırlama'yı dene.** Apple'ın sırası net: parolanı unutursan önce Parola Sıfırlama'yı dene. Kullanamıyorsan iPhone'u bilgisayar kullanmadan sıfırlayabilirsin. O da olmuyorsa son seçenek bilgisayarla sıfırlama.

**3. Samsung'da Find My Mobile'ı dene.** Samsung'a göre desenini, PIN'ini ya da parolanı unuttuysan en basit ve güvenli yol Find My Mobile hizmetiyle kilidi uzaktan açmak. Sayfa bu hizmetin ekran adımlarını vermiyor, yalnızca ilk tercih olarak gösteriyor.

**4. Bilgisayar yoluna geçersen iPhone'u kapat.** Apple'ın gerekenler listesi: Mac ya da Windows bilgisayar, şarj edebilen kablo, internet bağlantısı ve en fazla 60 dakika. Face ID'li iPhone'da yan düğmeyi ve Sesi kıs düğmesini Gücü kapat sürgüsü görünene kadar basılı tut, sürgüyü sürükle. Ana Ekran düğmeli ya da üst düğmeli iPhone'da üst veya yan düğmeyi basılı tutup sürgüyü sürükle.

**5. Kurtarma moduna al.** Face ID'li iPhone'da kabloyu bilgisayara, sonra iPhone'a tak ve hızlıca yan düğmeyi basılı tut. Apple logosu görününce bırakma. Bilgisayar ve kablo resmi görünene kadar basılı tut. iPhone 7 ve 7 Plus'ta Sesi kısma düğmesi, iPhone 6s ve öncesinde ve SE (1. nesil) modelinde Ana Ekran düğmesi kullanılır. Kurtarma ekranı gelmezse Apple aygıt için servis gerekebileceğini yazıyor.

**6. Geri Yükle'yi seç.** Mac'te Finder penceresi açıp kenar çubuğunda iPhone'unu seç; Geri Yükle ya da Güncelle sorulunca Geri Yükle'yi seç. Windows'ta Apple Aygıtları'nı aç, kenar çubuğundan iPhone'unu seç, Geri Yükle'yi seç. İndirme 15 dakikadan uzun sürüp iPhone kurtarma ekranından çıkarsa indirmenin bitmesini bekle, iPhone'u kapat ve kurtarma modunu yeniden başlat. İşlem bitince Merhaba ekranı gelir.

**7. Samsung'da uzaktan açma olmadıysa.** Samsung, uzaktan açılamıyorsa cihazı Kurtarma Modu (Recovery Mode) ile fabrika ayarlarına döndürmeyi anlatıyor; bunun tüm verilerini sileceğini özellikle belirtiyor. Sıfırlamadan sonra telefonun açılması bazen bir saate yakın sürebilir. Kendin yapamazsan Samsung resmî servis merkezlerinden birine gitmeni söylüyor. Apple de bilgisayarın yoksa ve ödünç alamıyorsan Apple Store'a ya da yetkili servise gitmeni istiyor.

## Hangi markada ne yapılır?

Apple üç aşamalı bir sıra veriyor: Parola Sıfırlama, sonra aygıtın kendisinde sıfırlama, en son bilgisayarla sıfırlama. Samsung de iki aşamalı: önce Find My Mobile, olmazsa fabrika ayarlarına dönmek. İki markada da son çare veriyi siler.

## Bilgisayarla sıfırlamadan önce hazırlık

Apple'ın listesine göre şunlar gerekiyor: Mac ya da Windows bilgisayar, telefonu şarj edebilen bir kablo, internet bağlantısı ve en fazla 60 dakika. Windows kullanıyorsan Apple Aygıtları uygulamasını Microsoft Store'dan indirmen gerekir. Geri yüklemeyi tamamlamak için iPhone'unu güncellemen gerekebilir ve bu indirme 15 dakikadan uzun sürebilir. Bu sırada iPhone yeniden başlarsa Apple'ın tarifi aygıtı kapatıp kurtarma modunu baştan başlatmak.

## Sıfırlamadan sonra ne olur?

Apple'a göre geri yükleme bitince iPhone'da Merhaba ekranı görünür. Bilgisayar bağlantısını kes, sonra iPhone'unu ayarlayıp kullanmaya başla. Samsung ise cihazın veri sıfırlandıktan sonra kilitli kalıp Google hesabı istediği durumu ayrı bir makalede anlatıyor. O durumla karşılaşırsan Google hesabı bilgilerini hazır tut.

## Kilidi biliyorsun ama kapatamıyorsan

Samsung bu durumu ayrı bir makalede ele alıyor: PIN'i, parolayı ya da deseni hatırlıyorsun ama ayarlarda kilidi devre dışı bırakamıyorsan unutma yolunu değil o makaleyi izlemen gerekir. Bu yazı yalnızca kilidi gerçekten hatırlamayanlar için.

## Başka markalar

Redmi, Xiaomi ve diğer markalar için bu yazıda adım yok. Her üreticinin kendi destek sayfasında farklı bir yol olabilir ve biz yalnızca Apple ile Samsung belgelerini kullandık.

## Servis çağırmadan önce üç not

1. Telefonun marka ve modelini yaz.
2. Parolayı, Find My Mobile'ı ya da bilgisayarla sıfırlamayı hangisini denediğini not et.
3. Apple Hesabı ya da Samsung hesabı bilgilerini yanında bulundur.

Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
