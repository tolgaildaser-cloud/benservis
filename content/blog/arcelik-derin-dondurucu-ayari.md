---
title: "Arçelik derin dondurucu ayarı nasıl yapılır? Reset var mı?"
description: "Arçelik derin dondurucuda sıcaklık ve soğutma ayarı nasıl yapılır, hızlı dondurma ne zaman açılır, reset var mı? Arçelik kılavuzlarına göre adımlar."
slug: "arcelik-derin-dondurucu-ayari"
date: "2026-10-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P11 satır #65). BOSLUK.md #65: "Arçelik derin dondurucu ayarı / soğutma ayarı nasıl yapılır / resetleme"
#   AC "arçelik derin dondurucu" #4, #6-8, #10 (kullanım).
# Envanter: origin/main'de arcelik-derin-dondurucu-ayari yok; Arçelik markalı derin dondurucu yazısı yok. Yakınlar: derin-dondurucu-kac-derece-olmali (marka bağımsız derece),
#   ugur-derin-dondurucu-ayar-dugmesi (başka marka), arcelik-derin-dondurucu-hata-kodlari (aynı paket), buzdolabi-resetleme.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Arçelik'in belge deposundan (gsim2hwnpbvwtwmb1dg11z6.blob.core.windows.net/media/documents/) indirildi, ikisi de HTTP 200 application/pdf;
#   iki belgede de üretici "Arçelik A.Ş." (A garanti sayfasında Markası: Arçelik). Okuma pdftotext (-layout, -raw), sayfa = PDF sayfası.
#  (A) Arçelik 2161 NFB Derin Dondurucu Kullanma Kılavuzu (58 5789 0000/AE), 28 s.  md5 d1e9ece9bbb2148d2c209855d1ad7656
#  (B) Arçelik 2780 EB Derin Dondurucu Kullanma Kılavuzu (58 4491 0000/AB), 23 s.  md5 f2297733251dd2f9ee228b45957cbca1
# İlk kullanım A s.11, B s.10 · termostat 1-4 ve -18 A s.12 · hızlı dondurma A s.13/s.15, B s.11/s.13 · dijital ayar B s.11, tavsiye tablosu B s.14 · tuş kilidi, açma/kapama B s.11-12 · kompresör gecikmesi A s.13, A/B arıza tablosu.
# BİLEREK YAZILMAYANLAR: reset (iki belgede de "reset"/"sıfırla" geçmiyor; yazıda açıkça belirtildi) · termostat için tek derece-konum eşlemesi (belgede yok) · termostat değişimi, sensör, kart (servis) · fiyat (#46).
# Alıntı denetim tablosu: arcelik-derin-dondurucu-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika (bekleme hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Dondurucunun kullanma kılavuzu", "Dondurucu termometresi"]
steps:
  - "Panelini tanı: termostat düğmeli ışıklı model mi, dijital ekranlı model mi? Ayar yöntemi buna göre değişir."
  - "İlk kez çalıştırıyorsan ürünü altı saat yiyecek koymadan boş çalıştır ve kapıyı gerekmedikçe açma."
  - "Termostat düğmeli modelde düğmeyi birden dörde doğru çevirerek soğutmayı artır; normal saklama sıcaklığı eksi on sekiz derece."
  - "Dijital ekranlı modelde ayar düğmesine her basışta değer sırayla değişir; normalde önerilen değer eksi yirmi derece."
  - "Çok taze gıda koyacaksan yüklemeden yirmi dört saat önce hızlı dondurmayı aç; işlem bitince normal ayara dön."
  - "Ayarı değiştirdikten sonra bekle; kompresör hemen çalışmayabilir. Sıcaklığı termometreyle kontrol et."
  - "Ayar değişmiyorsa tuş kilidini kontrol et; kılavuzda ayrı bir reset yok, yalnız açma/kapama ve elektrik kesintisi sonrası bekleme var."
faq:
  - q: "Arçelik derin dondurucu nasıl resetlenir?"
    a: "İncelediğimiz Arçelik 2161 NFB ve 2780 EB kılavuzlarında ayrı bir reset ya da sıfırlama işlemi yok. Dijital ekranlı 2780 EB'de Açma/Kapatma düğmesine 3 saniye basılı tutarak dondurucuyu durdurabilir, aynı düğmeye tekrar 3 saniye basarak çalıştırabilirsin. Fiş çıkarılıp takılırsa kompresör yaklaşık 6 dakika sonra çalışmaya başlar."
  - q: "Arçelik derin dondurucu kaç derecede çalışmalı?"
    a: "2161 NFB kılavuzu normal saklama sıcaklığının -18 °C olması gerektiğini yazıyor. 2780 EB kılavuzu -18 °C'yi en ekonomik ayar sayıyor ve normalde tavsiye edilen ayar olarak -20 °C'yi gösteriyor."
  - q: "Hızlı dondurma kendiliğinden kapanır mı?"
    a: "Evet. 2780 EB kılavuzuna göre iptal etmezsen 52 saat sonra kendini iptal eder. 2161 NFB kılavuzu aktiflendikten 50 saat sonra kendiliğinden iptal olacağını yazıyor; iki kılavuzda süre farklı."
  - q: "Termostat düğmesi kaça getirilmeli?"
    a: "2161 NFB kılavuzu tek bir konum vermiyor. Düğme birden dörde doğru çevrildikçe soğutma artıyor; bir en düşük soğutma (en sıcak ayar), dört en yüksek soğutma (en soğuk ayar). Sıcaklığı termometreyle kontrol etmen öneriliyor."
images:
  coverAlt: "Kapağı kapalı, kontrol panelinde ayar düğmesi görünen beyaz dikey bir derin dondurucunun sade çizimi"
  steps:
    - "Dikey derin dondurucunun kontrol panelini gösteren beyaz eldivenli sade siluet el; panel yazısız"
    - "Boş ve kapalı duran dondurucunun yanında bekleme simgesi olarak kum saati"
    - "Panel üzerindeki termostat düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Dijital panelde sıcaklık ayar düğmesine dokunan beyaz eldivenli sade siluet el; ekran yazısız"
    - "Dondurucuya taze gıda paketleri yerleştirmeden önce hızlı dondurma düğmesine dokunan beyaz eldivenli sade siluet el"
    - "Dondurucudan çıkarılmış termometreyi okuyan beyaz eldivenli sade siluet el"
    - "Panelde tuş kilidi düğmesini basılı tutan beyaz eldivenli sade siluet el"
---

Arçelik derin dondurucunun ayarını nasıl yapacağını arıyorsan iki durum var: ya cihazında ışıklı bir **termostat düğmesi** vardır ya da önünde **dijital ekran** ve tuşlar. Bu yazıda iki Arçelik derin dondurucu kullanma kılavuzunu baz aldık: termostat düğmeli **2161 NFB** ve dijital ekranlı **2780 EB**. Önce kısa cevaplar: ayar yöntemi modele göre değişir, normal saklama sıcaklığı **-18 °C** ve kılavuzlarda ayrı bir **reset** işlemi yok. Aşağıdaki adımların hepsi bu iki belgeden geliyor; modelinin paneli farklıysa kendi kılavuzun esastır.

> ⚠️ **Güvenlik sınırı:** Bu listede yalnız panel ayarı ve kullanım var. Termostat, sensör ya da kart değişimi servis işidir. Arçelik, çalışmayan ürünü kendin onarmayı denememeni istiyor.

## İki panel, iki ayar yöntemi

| Panel | Ayar | Dikkat |
|---|---|---|
| Termostat düğmesi (2161 NFB) | Düğme birden dörde doğru çevrilir | Dört en soğuk ayar; sarı ışık MAX konumunda yanar |
| Dijital ekran (2780 EB) | Ayar düğmesine her basışta değer değişir | -18 ile -24 arası; -20 normalde önerilen |

## Adım adım: ayar nasıl yapılır

**1. Panelini tanı.** 2161 NFB'de çalışma sıcaklığı **sıcaklık kumandası** ile ayarlanır; cihazın içinde dondurucunun çalışma modunu gösteren üç renkli ışık var. 2780 EB'de ise **Dondurucu Ayarlama** düğmesi ve ekranda **Dondurucu Bölme Sıcaklık Ayar Göstergesi** bulunuyor.

**2. İlk kullanımda boş çalıştır.** Her iki kılavuz da ürünü **6 saat** boyunca yiyecek koymadan boş çalıştırmanı ve kapısını çok gerekmedikçe açmamanı istiyor.

**3. Termostat düğmesi (2161 NFB).** Kılavuzda 1 en düşük soğutma ayarı (en sıcak), 4 en yüksek soğutma ayarı (en soğuk). Cihazın normal saklama sıcaklığı **-18 °C** olmalı; düğme 4 konumuna doğru çevrilince daha düşük sıcaklıklar elde edilir. İç sıcaklık ortama, kapının açılma sıklığına ve içerideki gıda miktarına da bağlı.

**4. Dijital ayar (2780 EB).** Dondurucu Ayarlama düğmesine basarak sıcaklığı sırasıyla **-18, -19, -20, -21, -22, -23 ve -24** değerlerine ayarlarsın. Kılavuz **-20 °C**'yi normalde önerilen ayar olarak veriyor; -21 ile -24 arası değerleri ortam 30 °C'den sıcaksa ya da kapı çok açılıp kapandığı için dolabın yeterince soğuk olmadığını düşünüyorsan öneriyor. -18 ise en ekonomik ayar.

**5. Hızlı dondurmayı doğru kullan.** Her iki kılavuz da taze gıdayı yüklemeden **24 saat önce** hızlı dondurma fonksiyonunu açmanı istiyor. 2161 NFB'de bunun için termostat düğmesi **MAX** konumuna getirilir ve sarı gösterge yanar; 2780 EB'de Hızlı Dondur düğmesine basılır. Elle kapatmazsan fonksiyon kendiliğinden iptal olur: 2161 NFB'de **50 saat**, 2780 EB'de **52 saat** sonra.

**6. Değişiklikten sonra bekle.** 2161 NFB'ye göre hızlı dondurma düğmesine bastığında ya da sıcaklığı ayarladığında kompresörün çalışmaya başlaması **kısa bir süre gecikebilir**; bu normaldir ve kompresör arızası değildir. Kılavuz, saklama bölmelerinin sıcaklığını termometreyle **periyodik** kontrol etmeni öneriyor. Kapıyı sık açmak iç sıcaklığı yükseltir.

**7. Reset yerine bunlara bak.** Kılavuzlarda "reset" ya da "sıfırlama" geçmiyor. 2780 EB'de ayarlar değişmiyorsa **tuş kilidi** açık olabilir: kilit açıkken düğmeler çalışmaz, kilidi kapatmak için kilit düğmesine 3 saniye basılı tutulur. Açma/Kapatma düğmesi 3 saniye basılı tutulunca dondurucuyu durdurur, tekrar 3 saniye basınca çalıştırır. Elektrik kesilip gelirse ya da fiş çıkarılıp takılırsa kompresörün koruyucu termiği atar; ürün **yaklaşık 6 dakika** sonra çalışmaya başlar.

## İki kılavuz nerede ayrışıyor?

2161 NFB dört konumlu bir **termostat düğmesi** kullanıyor ve tek bir derece-konum eşlemesi vermiyor; 2780 EB ise ekranda doğrudan **derece** gösteriyor. Hızlı dondurmanın otomatik iptal süresi de farklı: 50 saat ve 52 saat. Aynı marka olsa da senin modelinde hangisinin geçerli olduğunu kendi kılavuzundan kontrol et.

## Ayar tek başına yetmez

Düğmeyi doğru kurmak kadar yükleme alışkanlığın da iç sıcaklığı belirliyor. İki kılavuzun enerji tasarrufu bölümü aynı şeyleri söylüyor: kapıları uzun süre açık tutma, ürüne **sıcak yiyecek ya da içecek koyma** ve ürünü **aşırı doldurma**; içerideki hava akımı engellendiğinde soğutma kapasitesi düşer. 2161 NFB ayrıca yiyeceklerin **kapalı kaplarda** konmasını istiyor.

## Ne zaman servis

- Ayarı yaptığın hâlde dondurucu günlerce yeterince dondurmuyorsa
- Fiş ve sigorta sağlamken ürün hiç çalışmıyorsa
- Yaklaşık 6 dakika sonra kompresör çalışmaya başlamıyorsa
- Sıcaklık ayarını doğru yaptığın hâlde alarm sürekli geri geliyorsa

⛔ Termostat, sensör ve kart değişimi servis işidir. Marka bağımsız derece bilgisi için [derin dondurucu kaç derece olmalı](/blog/derin-dondurucu-kac-derece-olmali/), dondurmama sorunu için [derin dondurucu dondurmuyor](/blog/derin-dondurucu-dondurmuyor/) yazısına bakabilirsin.

## Servisi aramadan önce kısa özet

1. Modelin ne, düğmeli mi ekranlı mı?
2. Ayar şu an kaçta, en son ne zaman değişti?
3. Son 24 saatte çok miktarda gıda kondu mu?
4. Kapı tam kapanıyor mu, tuş kilidi açık mı?

Belirtiyi ve modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
