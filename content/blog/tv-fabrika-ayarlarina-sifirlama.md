---
title: "TV fabrika ayarlarına nasıl sıfırlanır: Samsung ve Vestel"
description: "TV sıfırlama adımları: önce görüntü, ses ve ağı sıfırla, gerekirse fabrika ayarına dön. PIN, yedek ve ilk kurulum notlarıyla Samsung ve Vestel kılavuzları."
slug: "tv-fabrika-ayarlarina-sifirlama"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P38 (YK #197 boşluk, 2. dalga, PAKETLER.md #227). Slug origin/main'de yok. Yakın yazılar: skytech-tv-resetleme, sunny-tv-resetleme (markalı). Markasız genel sayfa yok.
# Kaynak (#88): 2 üretici belgesi. S1 Samsung TV e-Manual Türkçe BN81-27185C-680 (313 s., md5 03df07cf22f30da3db8dc896307fa67a), V1 Vestel 43U9540 kılavuzu 20277113_k (73 s., md5 5051f2408bc00470c905cab3dfc7b548). URL, sayfa ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · PIN'i uzaktan sıfırlama tuş dizisi (metinde simgeler okunmuyor, kılavuza yönlendirildi) · "bu fonksiyon kullanılamıyor" uyarısı, Onvo/Arçelik/LG/Dijitsu sıfırlama yolları (bu koşuda belge indirilmedi) · servis menüsü, gizli kod ile sıfırlama (hiçbir kılavuzda yok).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kumanda", "Güvenlik PIN'i"]
steps:
  - "Sorun yalnız görüntü ya da sestense yalnız o ayarı sıfırla."
  - "Televizyonu yeniden başlat."
  - "Sorun internetteyse yalnız ağ ayarlarını sıfırla."
  - "Uygulama ve hesap sorunuysa Smart Hub'ı sıfırlamanın neleri sildiğini oku."
  - "Fabrika sıfırlamadan önce yedek al, PIN'i hazırla, kanalların silineceğini bil."
  - "Menüden fabrika verilerine sıfırlamayı seç, PIN'i gir, onayla."
  - "İlk kurulumu tamamla; sorun sürüyorsa servise başvur."
faq:
  - q: "Fabrika ayarına dönünce neler silinir?"
    a: "Samsung kılavuzuna göre tüm TV ayarları fabrika varsayılanlarına döner, televizyon kapanıp açılır ve İlk Kurulum ekranı gelir. Vestel kılavuzunda Kurulum menüsündeki İlk Kurulum öğesinin kayıtlı tüm kanalları ve ayarları sildiği, televizyonu fabrika ayarlarına sıfırladığı yazıyor. Kanalları yeniden aratman gerekir."
  - q: "Sıfırlama PIN'ini unuttum, ne yapmalıyım?"
    a: "Samsung kılavuzu, PIN unutulursa televizyon açıkken kumandadaki belirli tuşlara sırayla basarak PIN'in 0000 olarak sıfırlanabildiğini yazıyor; tuş dizisi kılavuzun güvenlik bölümünde (PIN değiştirme başlığının altında) veriliyor. Vestel kılavuzunda varsayılan PIN'in 0000 ya da 1234 olabileceği, ilk kurulumda PIN tanımladıysan onu girmen gerektiği belirtiliyor."
  - q: "Yeniden başlatma ile sıfırlama aynı şey mi?"
    a: "Hayır. Vestel kılavuzunda bekleme tuşunu basılı tutunca çıkan Sıfırlama seçeneği yeniden başlatma olarak adlandırılıyor. Fabrika ayarlarına dönüş ayrı bir menüde yapılıyor."
  - q: "Kanallar eksikse fabrika ayarı çözüm olur mu?"
    a: "Samsung kılavuzu televizyon tüm kanalları çekmiyorsa koaksiyel kablonun sıkıca bağlandığını doğrulamanı, sonra Fabrika verilerine sıfırlama ya da Otomatik Ayarlama öğesini çalıştırmanı söylüyor."
images:
  coverAlt: "Televizyon ekranında ayarlar menüsü açık, önünde sehpada kumanda"
  steps:
    - "Kumandayla görüntü ayarları menüsünde sıfırla satırını seçen beyaz eldivenli sade siluet el"
    - "Kumandadaki bekleme tuşuna basılı tutan beyaz eldivenli sade siluet el"
    - "Kumandayla ağ ayarları menüsünde sıfırla satırını seçen beyaz eldivenli sade siluet el"
    - "Kumandayla uygulamalar ekranında bir satırı seçen beyaz eldivenli sade siluet el"
    - "Kumandayla yedekleme satırını seçen beyaz eldivenli sade siluet el, yanında kâğıda yazılmış PIN notu"
    - "Kumandayla fabrika sıfırlama satırını seçen beyaz eldivenli sade siluet el"
    - "Kumandayla ilk kurulum ekranında dil seçen beyaz eldivenli sade siluet el"
---

Televizyon yavaşladı, bir uygulama açılmıyor, görüntü tuhaf ya da kanallar karıştı. Akla hemen "fabrika ayarına döneyim" geliyor. Oysa üreticilerin kılavuzlarında sıfırlamanın birkaç basamağı var ve çoğu zaman en küçüğü yetiyor. Bu yazı Samsung'un Türkçe e-Kılavuzu ile Vestel'in kullanım kılavuzuna dayanıyor. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ **Fabrika sıfırlaması geri alınmaz.** Kayıtlı ayarlar gider, kanallar yeniden aranır. Televizyonun arka kapağını açma; sıfırlama bile çözmediyse iş yetkili servisindir.

## Adım adım: küçükten büyüğe sıfırlama

**1. Yalnız bozuk ayarı sıfırla.** Samsung'da Görüntüyü Sıfırla geçerli resim ayarlarını, Ses Sıfırlama ses ayarlarını varsayılana döndürür. Vestel'de Resim ve Ses menülerinin sonundaki Sıfırlama satırı aynı işi yapar; Vestel'de görüntü sıfırlaması oyun modunu kapsamaz. Samsung, ekran çok karanlık göründüğünde Görüntüyü Sıfırla altındaki ayarlara bakmanı ve Parlaklık Optimizasyonu ile Enerji Tasarruflu Çözümü devre dışı bırakmayı denemeni öneriyor.

**2. Yeniden başlat.** Vestel kılavuzuna göre bekleme tuşunu basılı tuttuğunda Sıfırlama (Yeniden Başlatma), Bekleme ve Güç Kapatma seçenekleri çıkar. Samsung kılavuzunda ise televizyonun güç kablosunu çıkarıp takmak ya da güç düğmesine en az üç saniye basmak, ağ sorunu başlığında adımlardan biri olarak geçiyor.

**3. Ağı sıfırla.** Sorun yalnız internetteyse Samsung'da Ayarlar, Tüm Ayarlar, Bağlantılar, Ağ, Ağı Sıfırla yolu tüm ağ ayarlarını fabrika ayarlarına döndürür. Bağlantı kurulamıyorsa önce Wi-Fi adımlarına bak: [Vestel televizyon Wi-Fi'ye bağlanmıyor](/blog/vestel-televizyon-wifi-baglanmiyor/).

**4. Smart Hub'a dikkat.** Samsung'da Destek, Cihaz Bakımı altındaki Smart Hub'ı Sıfırla, Smart Hub ayarlarını fabrika varsayılanına döndürür ve Samsung hesaplarını, bağlı hizmet hesaplarını, hizmet sözleşmelerini ve Smart Hub uygulama bilgilerini siler. Hesapların gitmesini göze almadan basma.

**5. Hazırlan.** Samsung hesabında Yedekleme seçeneği televizyon ayarlarını bulut depolamaya yedekleyip sıfırlama sonrası geri yüklemeni sağlıyor. PIN'ini hazır tut: Samsung sıfırlamada güvenlik PIN'i istiyor. Vestel'de varsayılan PIN 0000 ya da 1234 olabilir; ilk kurulumda kendi PIN'ini tanımladıysan onu girmen gerekir. Vestel'in İlk Kurulum işlemi kayıtlı tüm kanalları da sildiği için kanal listesinin gideceğini bil.

**6. Fabrika sıfırlamasını yap.** Samsung'da Ayarlar, Tüm Ayarlar, Genel ve Gizlilik, Fabrika verilerine sıfırlama yolunu aç, güvenlik PIN'ini gir, Sıfırla'yı seç. Kılavuz, televizyonun otomatik olarak kapanıp açılacağını ve İlk Kurulum ekranının geleceğini yazıyor. Vestel'de Kurulum menüsündeki İlk Kurulum aynı sonucu verir.

**7. İlk kurulumu bitir.** Dili, ağı ve kanalları yeniden ayarla. Samsung, ilk kurulumda atlanan adımlar için TV'yi Ayarla'yı çalıştırmanı söylüyor. Televizyon sıfırlamadan sonra da aynı davranıyorsa servise başvur; arka kapağı açma.

## Hangi sıfırlama ne zaman?

| Belirti | Önce bu |
|---|---|
| Görüntü ya da ses bozuk | Yalnız görüntü ya da ses sıfırlaması |
| Wi-Fi ya da internet sorunu | Ağı sıfırla |
| Kanallar eksik | Koaksiyel kablo kontrolü, sonra Otomatik Ayarlama ya da fabrika verileri |
| Uygulama ya da hesap karışıklığı | Smart Hub sıfırlaması (hesaplar silinir) |
| Başka hiçbir adım yetmedi | Fabrika sıfırlaması |

Sunny ya da Skytech televizyonun varsa markaya özel anlatım için [Sunny TV resetleme](/blog/sunny-tv-resetleme/) ve [Skytech TV resetleme](/blog/skytech-tv-resetleme/) yazılarına bak.

## İki üreticinin farkı

Samsung fabrika sıfırlamasını Genel ve Gizlilik altında tek bir öğe olarak veriyor, güvenlik PIN'i soruyor ve işlem bitince televizyonu kendisi kapatıp açıyor. Vestel'in kılavuzunda aynı iş Kurulum menüsündeki İlk Kurulum öğesinde; kılavuz bunu "kayıtlı tüm kanalları ve ayarları siler" diye anlatıyor. Yani ikisinde de sonuç aynı: televizyon kutudan çıktığı hâle döner. Samsung ayrıca resim, ses, ağ ve Smart Hub için ayrı sıfırlama düğmeleri sunuyor; bu yüzden büyük adıma geçmeden önce küçüklerini denemek mümkün.

PIN konusunda iki kılavuz farklı. Samsung unutulan PIN'in kumandadaki tuş dizisiyle 0000'a döndürülebildiğini yazıyor; tuş dizisini güvenlik bölümündeki PIN değiştirme başlığında bulabilirsin. Vestel'de PIN'in 0000 ya da 1234 olarak gelmiş olabileceğini, ilk kurulumda tanımladıysan onu girmen gerektiğini belirtiyor.

## Sıfırlamadan önce kontrol listesi

1. Kanal listen çok önemliyse hangi yayın türünü (anten, kablo, uydu) izlediğini not et.
2. Wi-Fi şifreni hazırla; ağa yeniden bağlanman gerekecek.
3. Samsung hesabının giriş bilgilerini bil; Smart Hub sıfırlamasında hesaplar silinir.
4. Güvenlik PIN'ini yaz.
5. HDMI ile bağlı bir oynatıcın varsa sıfırlama bitene kadar ondan komut verme; Samsung, fabrika sıfırlaması sürerken Anynet+ cihazında oynat işlevinin kullanılamadığını yazıyor.

## Servise gitmeden önce

1. Marka, model ve ekranda yazan mesaj.
2. Hangi sıfırlamayı yaptığın.
3. Sıfırlamadan sonra belirtinin sürüp sürmediği.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Sıfırlama adımları Samsung'un Türkçe TV e-Kılavuzundan (BN81-27185C-680) ve Vestel'in 43U9540 Smart TV kullanım kılavuzundan alınmıştır. Menü adları modele göre değişir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
