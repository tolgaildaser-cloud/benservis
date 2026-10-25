---
title: "Grundig bulaşık makinesi resetleme nasıl yapılır"
description: "Grundig bulaşık makinesinde reset: Başla/Bekle/İptal tuşunu üç saniye basılı tut, 3-2-1 sayımı ve tahliyeyi bekle. Çocuk kilidi, erteleme ve E kodları."
slug: "grundig-bulasik-makinesi-resetleme"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme R-yedekler; Dalga 3 F yedeği). origin/main'de grundig-bulasik-* yalnız kirec-izi-birakiyor; Grundig bulaşık resetleme/hata kodu sayfası yok.
# Arama kanıtı (#164, bu koşu, hl=tr gl=tr): "grundig bulaşık makinesi r" → 1. "grundig bulaşık makinesi resetleme", 2. "…resetleme nasıl yapılır". GSC: satır yok.
# Belge (#88). Zincir: https://www.grundig.com.tr/bulasik-makinesi/gpdf-11853-i-bulasik-makinesi (curl 403 Akamai; yerleşik tarayıcıda açıldı, "Kullanma Kılavuzu" bağlantısı)
#   → https://gsim2hwnpbvwtwmb1dg11z6.blob.core.windows.net/media/documents/7673910877_MDM2_USER_MANUAL_FILE_tr_TR.pdf (curl 200, application/pdf)
#  (G) GPDF 11853 I kullanma kılavuzu, TR, 60 s., md5 62879a7cf4b4cdd03e542de8fa415218 — PDF s.30, s.35, s.37, s.42, s.43, s.47
#  Çapraz: aynı model eski baskı http://download.grundig.com/…tr_TR_202209191404641_User%20Manual%20-%20File%20(Long)tr_TR.pdf (200, 44 s., md5 a1fd74a5334d0f0ebbcb3b054fb0ec15) s.25, s.27, s.28, s.30, s.31 aynı metin.
# BİLEREK YAZILMAYANLAR: fabrika ayarına dönüş (belgede yok) · servis/test menüsü · kart reseti · fişi çekip bekleme süresi (belgede yok) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Makinenin kapısını kapat; Grundig'e göre kapı açıkken tuşlar çalışmıyor."
  - "Başla/Bekle/İptal tuşunu üç saniye basılı tut."
  - "Ekranda 3-2-1 geri sayımından sonra 0:01 görününce tahliyenin bitmesini bekle; bitince sesli uyarı geliyor."
  - "İptal edilen programın kaldığı adıma göre bulaşıkta deterjan ya da parlatıcı kalmış olabilir; bak, gerekirse yeni program seç."
  - "Tuşlar tepki vermiyorsa ve çocuk kilidi göstergesi yanıyorsa P4 ve P5 tuşlarına aynı anda basılı tutarak kilidi kapat."
  - "Erteleme kurulmuşsa makine açıkken Başla/Bekle/İptal tuşunu üç saniye basılı tutarak ertelemeyi iptal et."
  - "Ekranda E01, E02, E06 ya da E07 görüyorsan kılavuzun hata tablosundaki adımları uygula; hata sürerse Grundig yetkili servisini ara."
faq:
  - q: "Grundig bulaşık makinesinde reset tuşu hangisi?"
    a: "Kılavuzda ayrı bir reset tuşu yok. Programın sıfırlanması ya da iptali için Başla/Bekle/İptal tuşunu kapı kapalıyken üç saniye basılı tutuyorsun."
  - q: "Reset sonrası ekranda 0:01 yazıyor, normal mi?"
    a: "Evet. Grundig'e göre 3-2-1 geri sayımından sonra ekranda 0:01 görünüyor ve tahliye başlıyor. Tahliye iki dakika içinde bitiyor ve makine sesli uyarı veriyor. Bazı modellerde sesli uyarı yok."
  - q: "Makineyi kapatıp açmak çocuk kilidini kapatır mı?"
    a: "Kılavuza göre makineyi Açma/Kapatma tuşuyla kapatırsan çocuk kilidi otomatik olarak devreden çıkıyor. İstersen kilidi P4 ve P5 tuşlarına aynı anda basılı tutarak da kapatabilirsin."
  - q: "E02 hatası ne demek?"
    a: "Grundig'in tablosunda E02 su kesik hatası ya da tıkalı filtre. Şebekeyi kontrol etmeni, sonra elektrik ve su bağlantısını kesip su giriş hortumunu çıkarmanı, filtreyi kontrol edip temizlemeni istiyor. Hata devam ederse makineyi kapatıp yetkili servisi arıyorsun."
  - q: "Reset sırasında deterjan neden kaldı?"
    a: "Kılavuz, iptal ettiğin programın kaldığı adıma bağlı olarak makinede ya da bulaşıklarda deterjan veya parlatıcı kalabileceğini yazıyor. Bu bir arıza değil."
images:
  coverAlt: "Ankastre bir bulaşık makinesinin kapak üstündeki tuşlu kontrol paneli"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda kapak"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda parlatıcı haznesi"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Grundig bulaşık makinen programın ortasında takıldı, yanlış programı başlattın ya da ekranda bir E kodu yanıyor ve "Grundig bulaşık makinesi nasıl resetlenir" diye arıyorsun. Grundig'in kullanma kılavuzunda ayrı bir reset tuşu yok. Bu işin adı kılavuzda **"Programın Sıfırlanması / İptal Edilmesi"** ve tek bir tuşla yapılıyor: **Başla / Bekle / İptal**. Bu yazıda Grundig Türkiye'nin GPDF 11853 I ürün sayfasındaki Türkçe kullanma kılavuzunu kullandık; aynı modelin eski baskısında da metin aynı. Tuş adları ve numaraları modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapı kapalıyken Başla/Bekle/İptal tuşunu üç saniye basılı tut. 3-2-1 sayımından sonra ekranda 0:01 çıkar, tahliye iki dakikada biter. Tuşlar kilitliyse P4 ve P5'e birlikte basılı tut. E kodu varsa tablodaki adımları uygula, sürerse servis.

## Hangi durumda hangi yol

| Durum | Grundig'in yolu | Ne sıfırlanır |
|---|---|---|
| **Program takıldı ya da yanlış program** | Başla/Bekle/İptal, üç saniye | Çalışan program; makine suyu tahliye eder |
| **Tuşlar tepki vermiyor** | P4 + P5 birlikte basılı tut ya da makineyi kapat | Çocuk (tuş) kilidi |
| **Erteleme kurulmuş** | Makine açıkken Başla/Bekle/İptal, üç saniye | Erteleme; program seçimine dönülür |
| **Fonksiyonu yanlış seçtim** | Fonksiyon tuşuna gösterge sönene kadar yeniden bas | Seçilen ek fonksiyon |
| **Ekranda E kodu** | Hata tablosundaki adımlar | Hata durumu |

## Adım adım: Grundig bulaşık makinesini resetlemek

**1. Kapıyı kapat.** Grundig'in kuralı açık: kapı açıkken tuşlar çalışmıyor, tuşların çalışması için kapının kapalı olması gerekiyor. Kılavuz ayrıca ekrana ıslak elle dokunmamanı istiyor. Reset tuşuna basıp bir şey olmuyorsa ilk bakacağın yer kapı.

**2. Başla/Bekle/İptal tuşunu üç saniye basılı tut.** Kılavuzun "Programın Sıfırlanması / İptal Edilmesi" bölümü şöyle: kapı kapalıyken **Başla / Bekle / İptal** tuşuna **üç saniye** boyunca bas. Kısa basış programı başlatıyor ya da bekletiyor; sıfırlama için tuşu basılı tutman gerekiyor.

**3. Geri sayımı ve tahliyeyi bekle.** Ekranda **3 – 2 – 1** geri sayımı görünüyor, ardından **0:01** çıkıyor ve makine içindeki suyu boşaltmaya başlıyor. Grundig'e göre tahliye **iki dakika** içinde tamamlanıyor ve bitince makine sesli uyarı veriyor. Kılavuz bazı modellerde sesli uyarı olmadığını da not ediyor; bu durumda ekranı izle. Tahliye bitmeden kapıyı açma (çıkarım: içeride sıcak su ve buhar olabilir; kılavuz çalışırken kapıyı açarken buhara dikkat etmeni istiyor).

**4. Deterjanı ve parlatıcıyı kontrol et.** Kılavuz önemli bir not düşüyor: iptal ettiğin programın kaldığı adıma bağlı olarak makinede ya da yıkanan parçaların üzerinde **deterjan veya parlatıcı kalabilir**. Bu bir arıza değil. Bulaşıklara bak, gerekirse deterjan haznesini doldurup yeni programı program seçim tuşlarından seç ve Başla/Bekle/İptal'e kısa basarak başlat.

**5. Tuşlar kilitliyse çocuk kilidini kapat.** Panelde çocuk (tuş) kilidi göstergesi yanıyorsa tuşlar çalışmaz. Kılavuza göre çocuk kilidi seçilen fonksiyonların değiştirilmesini önlüyor ve Başla/Bekle/İptal tuşunu etkisiz hale getiriyor; yani kilit açıkken reset de yapılamıyor. Kapatmak için kapı kapalıyken **P4** ve **P5** program tuşlarına **aynı anda** basılı tut; gösterge sönünce kilit kalkıyor. Grundig ayrıca makineyi Açma/Kapatma tuşuyla kapatırsan çocuk kilidinin otomatik olarak devreden çıktığını yazıyor. Kilit kapıyı kilitlemiyor; yalnız tuşları.

**6. Ertelemeyi iptal et.** Programı ileri bir saate ertelediysen kılavuzun yolu yine aynı tuş: kapı kapalı ve makine açıkken **Başla / Bekle / İptal** tuşuna üç saniye bas. Erteleme iptal olunca makine program seçim moduna dönüyor. Grundig'e göre erteleme etkinken program, ek fonksiyon ve süre değiştirilemiyor; değiştirmek istiyorsan önce ertelemeyi iptal etmen gerekiyor.

**7. E kodlarında tablodaki adımlar.** Reset her hatayı silmez. Kılavuzun hata tablosu dört kod veriyor:

| Kod | Sebep | Kılavuzun dediği |
|---|---|---|
| **E01** | Şasiye su dolma | Hata algoritması devreye girer, program biter; sürekli görürsen elektriği kes, vanayı kapat, servis |
| **E02** | Su kesik ya da filtre tıkalı | Şebekeyi kontrol et; elektrik ve suyu kes, giriş hortumunu çıkar, filtreyi temizle, bağlantıları geri yap; sürerse servis |
| **E06** | Sıcaklık sensörü arızalı | Sürekli görüyorsan ve yıkama kötüleştiyse makineyi kapat, servis |
| **E07** | Su sayacı arızalı | Sürekli görürsen elektriği kes, vanayı kapat, servis |

## Makine hiç çalışmıyorsa

Grundig'in sorun giderme listesi, makine hiç çalışmadığında beş şeye bakmanı istiyor: fiş takılı mı, evdeki sigorta atmış mı, su giriş musluğu açık mı, kapı kapalı mı ve Açma/Kapatma tuşuna basılmış mı. Kılavuz ayrıca enerji tasarrufu için makinenin program bitince ya da program başlatılmadığında bir süre sonra kendiliğinden kapandığını yazıyor; ekranın sönmesi bu yüzden olabilir.

## Ne zaman servis

- E01 ya da E07 sürekli geliyorsa
- E02 filtre temizliğinden sonra da sürüyorsa
- Başla/Bekle/İptal'e üç saniye bastığın hâlde geri sayım başlamıyorsa ve çocuk kilidi kapalıysa

⛔ **Kendin-çöz sınırı burada biter.** İptal, çocuk kilidi, erteleme ve hortum filtresi sende; sensör, su sayacı, elektronik kart ve şasideki su Grundig yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda hangi kod ya da gösterge var?
3. Başla/Bekle/İptal'e üç saniye bastığında ne oldu?
4. Musluk açık, filtre temiz mi?

Marka fark etmeksizin su alma sorunları [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/), filtre temizliği [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) sayfasında. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
