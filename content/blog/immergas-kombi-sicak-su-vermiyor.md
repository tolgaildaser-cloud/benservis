---
title: "Immergas kombi sıcak su vermiyor: evde bakılacaklar"
description: "Immergas kombi sıcak su vermiyorsa kılavuzun sırası: yaz/kış modu, sıcak su ayarı, gaz vanası, 1–1,2 bar, 01 ve 06 kodları, güneş gecikmesi, servis."
slug: "immergas-kombi-sicak-su-vermiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork B). Konu seçimi: origin/main'de Immergas sayfası yok (slug + başlık + gövde grep'i: 0 sonuç); Dalga 3 klasörlerinde yok.
#   Genel sayfa kombi-sicak-su-vermiyor marka belirtmiyor; bu yazı Immergas'ın kendi kılavuzundaki mod/ayar/kod sırası.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr; tohum yankısı sayılmadı): "immergas kombi sıcak su" → 1. "immergas kombi sıcak su vermiyor", 2. "…sıcak su ayarı", 3. "…sıcak su ısıtmıyor";
#   "immergas kombi" → 1. "…servis", 2. "…fiyatları", 3. "…resetleme", 4. "…sıcak su vermiyor".
# GSC (https___www-6 7 gün, https___www-5 3 ay): Immergas sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi:
#  (HU) Immergas Victrix Tera 28 1 - 32 1 kezelési útmutató 1.040295 (Macarca, Immergas Macaristan alan adı), 56 s.
#       https://rendeles.immergas.hu/sites/rendeles.immergas.hu/files/Victrix-Tera-28-1_32-1-1040295_001_HU.pdf  HTTP 200 application/pdf  md5 0199fe879b56f18e6bf175715252c954
#  (TR) Immergas Türkiye "Ürün Arıza Kodlarının Tanımları" https://www.immergas.com.tr/urun-ariza-kodlari/  HTTP 200 text/html  md5 c7814f5fc62e80e219d2e318286c01e2
# HU alıntıları PAZ çevirisi (asılları KAYNAK.md'de): panel s.24 · ±3°C s.24 · mod/yaz/kış/bekleme/kapalı, gaz musluğu, 1–1,2 bar, güneş gecikmesi, AmicoV2 s.25
#   · 01 ve 06 s.26 · sıcak su ayar aralığı 30–60°C s.43.
# BİLEREK YAZILMAYANLAR: 3 yollu vana, akış anahtarı, sensör ve eşanjör teşhisi (servis) · su doldurma adımı (#31, servise) · "sıcak su az akıyor" (belgede kullanıcı adımı yok)
#   · bilgi menüsü parametreleri · fiyat (#46) · pazar bağlantısı.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Kombinin yaz ya da kış modunda olduğunu kontrol et; bekleme ya da kapalı moddaysa mod tuşuyla yaz ya da kışa geç."
  - "Sıcak su sıcaklığını sıcak su artırma tuşuyla yükselt ve ekrandaki seviye göstergesine bak."
  - "Bir sıcak su musluğunu aç ve ekranda sıcak su ile alev işaretlerinin yanıp yanmadığını izle."
  - "Kombiye giden gaz vanasının açık olduğunu kontrol et."
  - "Kombi soğukken manometrenin 1 ile 1,2 bar arasını gösterdiğini kontrol et; düşükse yetkili servise haber ver."
  - "Ekranda 01 varsa reset tuşuna bir kez bas; 06 varsa yetkili servisi ara."
  - "Kombiye güneş enerjisi sistemi bağlıysa ve ekranda güneş işareti yanıp sönüyorsa bir süre bekle."
  - "Sorun sürerse modeli ve ekrandaki işaretleri not edip Immergas yetkili servisini ara."
faq:
  - q: "Immergas kombi kışın peteği ısıtıyor ama sıcak su vermiyor, neden?"
    a: "Kılavuz bu durumu ayrı bir arıza satırı olarak vermiyor. Senin yapabileceğin kontroller ayar tarafında: sıcak su sıcaklığı, ekrandaki işaretler ve hata kodu. Kod yoksa ve ayarlar doğruysa sıcak su devresinin içindeki parçalara yetkili servis bakmalı."
  - q: "Immergas kombide sıcak su ayarı nasıl yapılır?"
    a: "Victrix Tera kılavuzuna göre sıcak su sıcaklığı paneldeki sıcak su artırma ve azaltma tuşlarıyla ayarlanıyor. Ayarlanan değer ekranda görünüyor, yanında bir seviye göstergesi de var. Teknik verilere göre ayar aralığı 30–60°C. AmicoV2 uzaktan kumanda bağlıysa ayar kumandadan yapılıyor."
  - q: "Yaz modu ne işe yarar?"
    a: "Yaz modunda kombi yalnız sıcak su üretir, peteklere su göndermez. Kış modunda hem sıcak su hem ısıtma yapar. Bekleme modunda yalnız donma koruması ve birkaç koruma işlevi açık kalır; bu modda musluktan sıcak su gelmez."
  - q: "06 kodu çıktı, sıcak su yine geliyor. Normal mi?"
    a: "Kılavuza göre 06 sıcak su sensöründe bir sorun demek. Kombi sıcak su üretmeye devam eder ama tam performansla değil, donma koruması da devre dışı kalır. Sıcak su gelse bile yetkili servisi ara."
  - q: "Ekrandaki sıcaklık musluktan gelen sudan farklı. Arıza mı?"
    a: "Victrix Tera kılavuzu ekranda gösterilen sıcaklıklarda kombiden bağımsız etkenler yüzünden artı eksi 3°C sapmaya izin veriyor. Küçük farklar normal."
images:
  coverAlt: "Banyoda açık bir lavabo musluğu ve arkada duvara asılı beyaz bir kombi"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda su giriş musluğu"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Musluğu açıyorsun, su ısınmıyor. Kombi çalışıyor gibi görünüyor, belki petekler de ısınıyor, ama banyoya sıcak su gelmiyor. Immergas'ın Victrix Tera 28 1 - 32 1 kılavuzunda "sıcak su yok" diye ayrı bir arıza satırı yok. Kullanıcıya bıraktığı kontroller kombinin modu, sıcak su ayarı, basınç ve ekrandaki işaretlerle kodlar. Bu yazıda o kontrolleri sırayla verdik. Kılavuzun Türkçesine ulaşamadık; alıntıları Immergas'ın Macarca sürümünden biz çevirdik. Kodların Türkçe adlarını Immergas Türkiye'nin kod sayfasından aldık. Senin modelin farklıysa kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod yaz ya da kış mı? Sıcak su ayarı düşük mü? Musluğu açınca ekranda alev yanıyor mu? Gaz vanası açık mı, basınç 1–1,2 bar mı? 01 görürsen bir kez reset, 06 görürsen servis. Güneş sistemi bağlıysa kombi biraz gecikmeli devreye girer. Sürerse → Immergas yetkili servisi.

## Adım adım: Immergas kombi sıcak su vermiyorsa

**1. Modu kontrol et.** Victrix Tera'da mod tuşuna her bastığında kombi bekleme, yaz ve kış modları arasında sırayla geçiyor. Kılavuza göre **yaz modunda** kombi yalnız sıcak su üretiyor, **kış modunda** hem sıcak su hem ısıtma yapıyor. **Bekleme modunda** yalnız donma koruması, pompa ve motorlu vananın sıkışma koruması açık kalıyor. Tuşu 8 saniye basılı tutarsan kombi tamamen kapanıyor. Ekranda bekleme işareti varsa ya da ekran sönükse sıcak su gelmemesinin sebebi bu olabilir.

**2. Sıcak su ayarına bak.** Sıcak su sıcaklığı paneldeki iki ayrı tuşla artırılıp azaltılıyor. Ayarlanan değer ekranda görünüyor, yanında bir seviye göstergesi de var. Teknik verilerde ayar aralığı **30–60°C**. Ayar en altta kaldıysa su ılık gelir. Kılavuz ekrandaki sıcaklıklarda artı eksi 3°C sapmaya izin veriyor, küçük farklar normal.

**3. Musluğu aç, ekranı izle.** Panel açıklamasında sıcak su üretiminin aktif olduğunu gösteren ayrı bir işaret var. Brülör her yandığında ekranda alev işareti ve anlık güç seviyesi görünüyor. Musluk açıkken alev hiç yanmıyorsa sorun ateşleme tarafındadır. Ekranda bir kod çıkıp çıkmadığına bak.

**4. Gaz vanasını kontrol et.** Kılavuzun çalıştırma sırası gaz musluğunu açmakla başlıyor. Kombiye giden gaz vanası kapalıysa ne petek ısınır ne su. Vana açıksa ve kombi yine yanmıyorsa gaz tarafı yetkili servisin işi.

**5. Basıncı oku.** Kılavuz kombi çalıştırılmadan önce tesisatın suyla dolu olmasını ve manometrenin **1 ile 1,2 bar** arasını göstermesini istiyor. Basınç düşükse Immergas'ın kod listesinde 10 "tesisat basıncı yetersiz" çıkar. Kılavuz suyun kombinin altındaki musluktan eklenmesini anlatıyor, ama biz bu işi yetkili servise bırakmanı öneriyoruz. Ayrıntılar [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

**6. Kodlara bak.** Kılavuzun tablosunda **01** ateşleme hatası yüzünden durma. Kombi ısıtma başlarken ya da sıcak su üretirken belirlenen süre içinde yanmazsa bu kod çıkıyor. Kılavuzun talimatı reset tuşuna basmak. **06** sıcak su sensöründe bir sorun. Kılavuza göre bu durumda kombi sıcak su üretmeye devam ediyor ama tam performansla değil, donma koruması da kapanıyor. 06'da reset yerine yetkili servisi ara. Bütün kodlar [Immergas kombi hata kodları](/blog/immergas-kombi-hata-kodlari/) sayfasında.

**7. Güneş sistemi bağlıysa bekle.** Kombiye güneş enerjisi sensörü bağlıysa ya da güneş için gecikme ayarı açıksa kılavuz şöyle anlatıyor: musluk açıkken gelen su yeterince sıcaksa ya da gecikme süresi işliyorsa kombi devreye girmiyor. Bu sırada ekranda güneş işareti yanıp sönüyor. Gelen su ayarlanan değerden soğuksa ya da gecikme süresi dolunca kombi yanıyor.

**8. Sürerse servisi ara.** Kılavuzun tablo notu, arıza sürerse Immergas yetkili servisine başvurmanı istiyor. Immergas Türkiye'nin kod sayfasında verilen numara 444 88 22.

## Uzaktan kumanda bağlıysa

Kombiye AmicoV2 uzaktan kumanda bağlıysa kılavuza göre ayarlar kumandadan yapılıyor. Kombinin panelinde yalnız reset tuşu ve kapatma tuşu çalışıyor. Paneldeki sıcak su tuşlarına basıp sonuç alamıyorsan ayarı kumandada kontrol et.

## Su ısınıyor ama yetmiyorsa

Kılavuzun teknik verilerinde kombinin sürekli sıcak su verme kapasitesi var: suyu 30°C ısıtırken Victrix Tera 28 1 için dakikada **14,1 litre**, 32 1 için dakikada **16,5 litre**. Sıcak su devresinin çalışması için şebeke suyunun en az **0,3 bar** basınçla gelmesi gerekiyor. Bizim çıkarımımız: aynı anda iki banyoda duş açıksa ya da şebeke basıncı çok düşükse su beklediğin kadar ısınmayabilir. Kılavuz bunu ayrıca yazmıyor; değerler için kendi modelinin kılavuzuna bak.

## Ne zaman servis

- Musluk açıkken alev hiç yanmıyorsa ve gaz vanası açıksa
- 01 bir resetten sonra geri geliyorsa
- Ekranda 06 varsa
- Basınç 1 barın altındaysa ya da sık sık düşüyorsa
- Ayarlar doğru, kod yok, ama su yine ısınmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Mod tuşu, sıcak su ayarı, ekran, reset tuşu, manometre ve gaz vanasının açık-kapalı konumu sende. Su doldurma, gaz hattı, yanma odası, sensörler, sıcak su devresinin parçaları ve elektronik kart yetkili servisin işi.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne?
2. Mod yaz mı kış mı, sıcak su ayarı kaç derece?
3. Musluk açıkken ekranda alev yanıyor mu?
4. Ekranda bir kod var mı?
5. Basınç soğukken kaç bar?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Markadan bağımsız genel liste [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısında. Bil, gör, çağır.
