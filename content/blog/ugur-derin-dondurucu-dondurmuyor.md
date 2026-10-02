---
title: "Uğur derin dondurucu dondurmuyor"
description: "Uğur derin dondurucu dondurmuyorsa Uğur'un sırası: modu ve ayarı kontrol et, kapağı kapat, yükü parça parça koy, havalandırmayı ve ısı kaynağını düzelt."
slug: "ugur-derin-dondurucu-dondurmuyor"
date: "2026-10-02"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, ek-1051). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Uğur'un KENDİ alan adından (ugur.com.tr) indirildi,
#   hepsi HTTP 200, yönlendirme 0. Not: ürün sayfalarındaki "Kullanım Kılavuzu" bağlantısı ugur.tsoftstatic.com'u gösteriyor; aynı dosya yolu
#   ugur.com.tr/Data/EditorFiles/docs/ altında doğrudan 200 dönüyor ve kaynak olarak YALNIZ ugur.com.tr adresi kullanıldı (alan adı kapısı).
#   Web araması KULLANILMADI (adresler ugur.com.tr kategori/ürün sayfalarından). Sayfa = PDF sayfası (pdftotext -f N -l N).
#  D1) UED 200 G D/S · 250 D/S · 290 D/S · 375 D/S R65 (sandık, çok modlu)  https://ugur.com.tr/Data/EditorFiles/docs/T1301_KK.pdf  28 s.  md5 46ff7502fb7a47b3da8943fd2057e59b
#  D2) UED 100 R65 (sandık, tuşlu)                                         https://ugur.com.tr/Data/EditorFiles/docs/100992_KK.pdf  28 s.  md5 fad072c83b0e537447ba0b4cb4fc2d61
#  D3) UED 3060 DTK R65 (dikey)                                            https://ugur.com.tr/Data/EditorFiles/docs/T1304_KK.pdf  32 s.  md5 38fbc147873c82b3f6a48f2865468ec3
#  D4) UED 5175 / 5218 / 7266 DTK (dikey, göstergeli)                      https://ugur.com.tr/Data/EditorFiles/docs/T1306_KK-1783425041.pdf  32 s.  md5 283a44edfa6f98d55efd7e92aff41ba5
#  D5) UED 6204 DTK NF / NFI R65 (dikey, no frost)                         https://ugur.com.tr/Data/EditorFiles/docs/100935_KK.pdf  30 s.  md5 dc2a65938bae76104152ca928404b108
#  D6) UED 8274 DTK NF / NFI D/S DGT R65 (dikey, ekranlı)                  https://ugur.com.tr/Data/EditorFiles/docs/101101_KK.pdf  32 s.  md5 ba8a55e1923db5cc76fc9eb5da07062c
# Ana satırlar: D2 s.20 "Yiyecekler donmuyor." → "Sıcaklık ayarı yüksektir." / "Sıcaklık ayarını düşürünüz (Bölüm 4.2)." · "Cihaz kapağı çok sık açılıyor." /
#   "Kapağı gereksiz yere açmayınız." · "24 saat içinde yüksek miktarda gıda yerleştirildi." / "Sıcaklık ayarını düşürün." · "Cihaz bir ısı kaynağına yakın." /
#   "Cihaz yerleşimini bölümünü kontrole ediniz (Bölüm 3.1)."
#   D5 s.18 · D6 s.19 "Cihaz soğutmuyor." → "Kapı açık kalmış." / "Cihazın kapısını kontrol ediniz. Kapanmasını engelleyen çekmeceleri kontrol ediniz ve kaldırınız."
#   · "Çok fazla gıda yerleştirilmiş." / "Gıdaları parça parça yükleyiniz." · "Havalandırma delikleri kapalı." / "Cihaz etrafındaki nesneleri kaldırınız. Gerekli
#   mesafeyi koruyunuz." · "Cihaz yakınında ısı kaynağı bulunuyor." / "Isı kaynaklarını cihazdan uzaklaştırınız."
#   D4 s.22 "Kırmızı gösterge (Resim C /3) devamlı yanıyor. (Cihaz soğutmuyor.)" aynı dört satır + "Süper Dondurma fonksiyonunu devreye alınız." +
#   "Termostat arızalı." / "24 saat boyunca kırmızı gösterge sönmediyse Uğur Müşteri Hizmetleri Merkezi ile iletişime geçiniz." · D4 s.21 kırmızı gösterge:
#   "Cihaza yeni gıda yüklemesi yapıldı/cihaz ilk kez çalıştırılıyor." / "Cihaz kritik sıcaklık değerinin altına düştükten sonra kırmızı gösterge sönecektir."
# Mod: D1 s.11 "Soğutucu modu 0°C üzeri, dondurucu modu 0°C altında performans sağlar." · D1 s.18 "Cihazınızın kontrol düğmesinin hangi modda kullanmak
#   istiyorsanız o konumda olmasına dikkat ediniz." · "Kapağı açık kalan veya sürekli açılıp kapanan ürünlerde karlanma artacak ve cihazınızın soğutma işlemi
#   gerçekleşmeyecektir." · "sepet üst hizasını geçmeyiniz" · "Tek seferde yüklenebilecek gıda miktarını aşmayınız." · "Sıcak yiyecekleri oda sıcaklığına geldikten sonra cihaza yerleştiriniz."
# Ayar: D2 s.11 "tuşuna her basıldığında iç sıcaklık azalır ve ürün içi daha soğuk olur. Sıcaklık ayarı 5 saniye sonra aktif olur." · ilk çalıştırma: "Süper
#   Dondurma fonksiyonunu aktif hale getiriniz. 24 saat boyunca boş halde çalıştırınız." · D1 s.12 NOT "12 saat boyunca boş şekilde çalıştırınız." · D3 s.11 NOT
#   "Cihazı kullanmaya başlamadan önce "MAX" konumuna alıp 24 saat boş halde çalıştırınız." (D3 s.11: düğme "bir madeni para ile" çevriliyor → ALET KURALI, adımda değil)
# Mesafe: D1 s.8 "havalandırma delikleri ile duvar arasında en az 10 cm, üst tarafı ile 70 cm boşluk" · D2 s.8 "arka ve yan duvarlar arasında en az 10 cm boşluk"
# Alarm: D5 s.19 "Cihaz içi sıcaklık yüksek ise 4 ışık yanar ve alarm sesi duyulur. Alarmı kapatmak için SET butonuna basınız ve Uğur Müşteri Hizmet leri Merkezini
#   arayınız." · D6 s.18 "Cihaz içi sıcaklık yüksek ise ekranda ht kodu görüntülenir ve alarm sesi duyulur. Cihaz içi normal sıcaklığa döndüğünde alarm kendiliğinden
#   duracaktır." · D2 s.19 "Sıcaklık sensöründe bağlantı kopması ya da kısa devre durumlarında yarım dakikada bir indikatörler soldan sağa yanar."
# Elektrik kesintisi: D1 s.18 "Elektrik kesintilerinde cihazınızın kapağını kesinlikle açmayınız. ... 24 saat içerisinde tüketiniz ya da pişirme/kızartma vb.
#   işlemlerinden geçirerek tekrar dondurunuz." · D2 s.11 "Tekrar çalıştırmak için elektrik geldikten 20 dakika sonra ürününüzün fişini prize takınız."
# BİLEREK YAZILMAYANLAR: gaz eksikliği/kompresör/termostat teşhisi (belgede kullanıcıya yok) · D3 düğmesinin madeni parayla çevrilmesi (alet) · model genellemesi
#   (her satırın hangi belgede olduğu yazıldı) · ht kodu için ayrı adım (belge yalnız "normal sıcaklığa dönünce durur" diyor) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: ugur-derin-dondurucu-dondurmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~20 dakika (sonrasında bekleme)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Derin dondurucunun kullanım kılavuzu"]
steps:
  - "Çok modlu sandık modelde kontrol düğmesinin soğutucu değil dondurucu konumunda olduğunu kontrol et."
  - "Sıcaklık ayarı yüksekse kılavuzundaki ayar bölümüne göre ayarı düşür (daha soğuk)."
  - "Kapağın ya da kapının tam kapandığından emin ol; kapanmayı engelleyen çekmece veya cismi düzelt, kapağı gereksiz açma."
  - "Yükü azalt: gıdaları parça parça yükle, sepet üst hizasını ve tek seferde yüklenebilecek miktarı aşma."
  - "Havalandırma deliklerinin önündeki nesneleri kaldır ve kılavuzdaki duvar mesafesini koru."
  - "Cihazın yakınındaki ısı kaynaklarını uzaklaştır, sıcak yiyeceği oda sıcaklığına inmeden koyma."
  - "Yeni yükleme ya da ilk çalıştırmadan sonra cihazın kritik sıcaklığa inmesini bekle; göstergeli modelde kırmızı göstergeyi izle."
faq:
  - q: "Uğur derin dondurucum neden dondurmuyor?"
    a: "Uğur'un kılavuzlarındaki arıza tablolarında bu belirtinin karşısında aynı nedenler yazıyor: sıcaklık ayarının yüksek olması, kapağın sık açılması ya da açık kalması, cihaza çok fazla gıda yerleştirilmesi, havalandırma deliklerinin kapalı olması ve cihazın bir ısı kaynağına yakın olması. Çok modlu sandık modellerde ayrıca düğmenin hangi modda olduğu önemli: kılavuza göre soğutucu modu 0°C üzerinde, dondurucu modu 0°C altında performans sağlıyor."
  - q: "Kırmızı gösterge sürekli yanıyor, bozuk mu?"
    a: "UED 5175 / 5218 / 7266 DTK kılavuzuna göre kırmızı gösterge cihaza yeni gıda yüklendiğinde ya da cihaz ilk kez çalıştırıldığında yanar ve cihaz kritik sıcaklık değerinin altına düştükten sonra söner. Kapı, yük, havalandırma ve ısı kaynağı kontrol edildiği hâlde kırmızı gösterge 24 saat boyunca sönmediyse kılavuz Uğur Müşteri Hizmetleri Merkezi ile iletişime geçilmesini istiyor."
  - q: "Ekranda ht yazıyor ve alarm çalıyor, ne demek?"
    a: "UED 8274 DTK NF D/S DGT kılavuzuna göre cihaz içi sıcaklık yüksek olduğunda ekranda ht kodu görüntülenir ve alarm sesi duyulur; cihaz içi normal sıcaklığa döndüğünde alarm kendiliğinden durur. UED 6204 DTK NF modelinde aynı durumda 4 ışık yanar ve alarm duyulur; kılavuz bu modelde alarmı SET butonuyla kapatıp Uğur Müşteri Hizmetleri Merkezi'nin aranmasını istiyor."
  - q: "Elektrik kesildi, içerideki gıdalar ne olacak?"
    a: "Uğur'un sandık tipi kılavuzuna göre elektrik kesintisinde kapak kesinlikle açılmaz. Kesinti yüzünden gıdalar çözülmeye başlarsa 24 saat içinde tüketilmeli ya da pişirme, kızartma gibi işlemlerden geçirilip tekrar dondurulmalı; cihazın gıdaları koruma süresi ürün etiketinde yazıyor. UED 100 kılavuzu ani kesintide fişin çekilmesini ve elektrik geldikten 20 dakika sonra yeniden takılmasını istiyor."
images:
  coverAlt: "Kapağı açık bir sandık tipi derin dondurucunun içinde düzenli poşetlenmiş donuk gıdalar ve sepetin üst hizasında duran yük"
---

Dondurucuya koyduğun et ertesi gün hâlâ yumuşak, ya da içeride biriken poşetler eskisi kadar sert değil. Uğur'un derin dondurucu kılavuzlarının arıza tablosunda bu belirti iki adla geçiyor: sandık modellerde **"Yiyecekler donmuyor."**, dikey modellerde **"Cihaz soğutmuyor."** İki tablonun sıraladığı nedenlerin çoğu kullanıcının elinde: ayar, kapak, yük, havalandırma ve ısı kaynağı.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çok modlu sandıkta düğme dondurucu konumunda mı bak → sıcaklık ayarını düşür → kapağı tam kapat, gereksiz açma → yükü parça parça koy → havalandırma deliklerinin önünü aç, duvar mesafesini koru → ısı kaynağını uzaklaştır → yeni yüklemeden sonra bekle. Göstergeli modelde kırmızı ışık 24 saatte sönmüyorsa servisi ara.

## Adım adım: evde denenecekler

**1. Modu kontrol et.** Uğur'un UED 200 G / 250 / 290 / 375 D/S sandık modelleri çok modlu: aynı düğmeyle hem soğutucu hem dondurucu olarak çalışıyor. Kılavuza göre **soğutucu modu 0°C üzeri, dondurucu modu 0°C altında** performans sağlar. İpuçları bölümündeki madde açık: kontrol düğmesinin **hangi modda kullanmak istiyorsan o konumda olmasına** dikkat et. Düğme soğutucu konumundaysa cihaz kılavuza göre 0°C üzerinde çalışır.

**2. Sıcaklık ayarını düşür.** UED 100 kılavuzunun tablosunda "Yiyecekler donmuyor" satırının ilk nedeni **"Sıcaklık ayarı yüksektir."**, çözümü **"Sıcaklık ayarını düşürünüz."** Bu modelde ayar tuşuna her basıldığında **iç sıcaklık azalır**; ayar **5 saniye sonra** devreye girer. Düğmeli modellerde de yön aynı: kılavuza göre düğme dondurucu (ya da MAX) tarafına doğru çevrildikçe çalışma oranı artar ve daha fazla soğutma elde edilir. Senin panelin farklı olabilir; Uğur'un notu da bu: talimatları kendi kontrol panelindeki işaretlere göre takip et.

**3. Kapağı tam kapat, gereksiz açma.** Dikey modellerin tablosunda ilk neden **"Kapı açık kalmış."** Çözüm: kapıyı kontrol et, **kapanmasını engelleyen çekmeceleri** düzelt ve cisimleri kaldır. Sandık modellerde neden **"Cihaz kapağı çok sık açılıyor."**, çözüm **"Kapağı gereksiz yere açmayınız."** Uğur'un ipuçları bölümü sonucu da yazıyor: kapağı açık kalan ya da sürekli açılıp kapanan ürünlerde **karlanma artar ve soğutma işlemi gerçekleşmez.**

**4. Yükü parça parça koy.** Dikey tabloda **"Çok fazla gıda yerleştirilmiş."** satırının çözümü **"Gıdaları parça parça yükleyiniz."** Göstergeli UED 5175 / 5218 / 7266 DTK modellerinde buna **Süper Dondurma fonksiyonunu devreye almak** ekleniyor. UED 100 tablosunda ise **24 saat içinde yüksek miktarda gıda** konduysa çözüm sıcaklık ayarını düşürmek. Sandık kılavuzunun iki kuralı daha var: gıdaları yerleştirirken **sepet üst hizasını geçme** ve **tek seferde yüklenebilecek gıda miktarını aşma.**

**5. Havalandırmanın önünü aç.** Tablodaki neden **"Havalandırma delikleri kapalı."**, çözüm **"Cihaz etrafındaki nesneleri kaldırınız. Gerekli mesafeyi koruyunuz."** Mesafe kılavuzda yazıyor: sandık UED 200–375 modellerinde havalandırma delikleri ile duvar arasında **en az 10 cm**, cihazın üst tarafında **70 cm** boşluk; UED 100'de arka ve yan duvarlarla arasında **en az 10 cm.**

**6. Isı kaynağını uzaklaştır.** Tabloda **"Cihaz yakınında ısı kaynağı bulunuyor."** satırının çözümü **"Isı kaynaklarını cihazdan uzaklaştırınız."** UED 100 kılavuzu aynı satırda seni yerleşim bölümüne (Bölüm 3.1) gönderiyor. Uğur'un enerji ipuçlarından biri de buraya bağlanıyor: **sıcak yiyecekleri oda sıcaklığına geldikten sonra** cihaza yerleştir.

**7. Yeni yüklemeden sonra bekle.** Göstergeli UED 5175 / 5218 / 7266 DTK kılavuzuna göre kırmızı gösterge **yeni gıda yüklendiğinde ya da cihaz ilk kez çalıştırıldığında** yanar ve cihaz **kritik sıcaklık değerinin altına düştükten sonra söner.** Cihaz yeni kurulduysa Uğur boş çalıştırma süresi veriyor: UED 100 için Süper Dondurma açık **24 saat**, UED 200–375 sandık için **12 saat**, UED 3060 DTK için MAX konumunda **24 saat** boş çalıştırma.

## Ekran ve ışık uyarıları

Uğur'un dijital modellerinde yüksek iç sıcaklık ayrıca haber veriliyor; kılavuzlara göre:

- **UED 8274 DTK NF D/S DGT:** cihaz içi sıcaklık yüksekse ekranda **ht** kodu görünür ve alarm duyulur; iç sıcaklık normale dönünce alarm **kendiliğinden durur.** Kapı 90 saniye kapatılmazsa da alarm çalar.
- **UED 6204 DTK NF:** iç sıcaklık yüksekse **4 ışık yanar** ve alarm duyulur. Kılavuz alarmı **SET** butonuyla kapatıp **Uğur Müşteri Hizmetleri Merkezi'ni aramanı** istiyor. Kapak 90 saniye açık kalırsa ışıklar yanar ve alarm çalar; çözümü kapıyı kapatmak.
- **UED 100:** sıcaklık sensöründe bağlantı kopması ya da kısa devre olduğunda göstergeler **yarım dakikada bir soldan sağa** yanar.

Markadan bağımsız kontrol listesi için [derin dondurucu dondurmuyor](/blog/derin-dondurucu-dondurmuyor/) yazısına, doğru ayar için [derin dondurucu kaç derece olmalı](/blog/derin-dondurucu-kac-derece-olmali/) yazısına bakabilirsin. Sorun içeride kalın buz birikmesiyle başladıysa: [Uğur derin dondurucu buzlanma yapıyor](/blog/ugur-derin-dondurucu-buzlanma-yapiyor/).

## Ne zaman servis

- Göstergeli dikey modelde **kırmızı gösterge 24 saat boyunca sönmediyse:** Uğur'un tablosu bu satırın nedenini **"Termostat arızalı."** olarak yazıyor ve Uğur Müşteri Hizmetleri Merkezi ile iletişime geçmeni istiyor.
- UED 6204 DTK NF'de **yüksek sıcaklık alarmı** geldiyse: SET'e bas, Müşteri Hizmetleri'ni ara.
- UED 100'de göstergeler **yarım dakikada bir soldan sağa** yanıyorsa: kılavuza göre sensör bağlantısı ya da kısa devre söz konusu.
- **Kapak contası hasarlıysa:** tablo değişim için Uğur Müşteri Hizmetleri Merkezi'ni gösteriyor.

Uğur'un genel kuralı: bu öneriler sorunu çözmüyorsa **444 84 87** numaralı Çağrı Merkezi'ne ya da Uğur Yetkili Servisi'ne başvur; cihazın fişi takılıyken **hiçbir tamir/servis işlemi** yapılmaz.

⛔ **Kendin-çöz sınırı burada biter.** Ayar, kapak, yük ve yerleşim kullanıcıya; termostat, sensör, conta ve soğutma sistemi servise aittir.

## Elektrik kesilirse

Uğur'un sandık kılavuzuna göre elektrik kesintisinde **kapağı kesinlikle açma.** Kesinti yüzünden gıdalar çözülmeye başlarsa **24 saat içinde** tüket ya da pişirme, kızartma gibi bir işlemden geçirip tekrar dondur; cihazın gıdaları koruma süresi **ürün etiketinde** yazıyor. UED 100 kılavuzu ani kesintide **fişi çekmeni** ve elektrik geldikten **20 dakika sonra** tekrar takmanı istiyor; ilk anda gelen yüksek voltaj cihaza zarar verebilir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (UED ile başlayan kod, ürün etiketinde)? Sandık mı, dikey mi?
2. Düğme dondurucu konumunda mı, ayar en son ne zaman değişti?
3. Son 24 saatte çok miktarda gıda kondu mu?
4. Kapak ya da kapı tam kapanıyor mu?
5. Göstergede kırmızı ışık, ht kodu ya da yanıp sönen ışık var mı, ne kadar süredir?

Bu beşine cevabın varsa servise "dondurmuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
