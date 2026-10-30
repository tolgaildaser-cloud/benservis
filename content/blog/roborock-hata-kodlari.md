---
title: "Roborock hata kodları: Error 1'den 28'e kılavuz tablosu"
description: "Roborock hata kodları: S7 kılavuzundaki Error 1, 4, 5, 8, 13 ve diğer kodların anlamı, çözümü; Q7 Max'ten farklar ve kılavuzda olmayan 38, 52, 53, 108."
slug: "roborock-hata-kodlari"
date: "2026-10-30"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P32 (YK #197 boşluk, 2. dalga, BOSLUK.md #156). Slug origin/main'de yok. Yakın yazı: roborock-ana-tekerlek-sikismasi (yalnız Error 7), dreame-hata-kodlari (Dreame), tineco-hata-kodlari. Roborock'un hata kodu hub'ı yok.
# Kaynak (#88): 2 üretici kılavuzu, İngilizce baskı (Türkçe baskı bulunamadı; alıntılar çevrildi): Roborock S7 CE EN User Manual (support.roborock.com, hata tablosu s.36–37) ve Roborock Q7 Max CE EN User Manual (help.roborock.com, s.12). URL, md5, sayfa ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: OT'de aranan 38, 52, 53, 108 kodları (iki kılavuzda da yok; yazıda bunu açıkça yazdık) · kodların sebep tahmini ya da kılavuzda olmayan çözüm (Error 14 için çözüm kılavuzda yazılı değil) · lazer kulesini elle çevirme gibi destek sayfası önerileri (support.roborock.com sayfaları curl'de 403; belgesi alınamadığı için yazılmadı) · fiyat (#46) · söküm (#31).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak kuru bez", "Robotun kullanım kılavuzu"]
steps:
  - "Güç ışığının hızlı yanıp sönen kırmızı olduğunu ve sesli uyarıyı doğrula."
  - "Hata kodunu aşağıdaki tabloda bul ve kılavuzun çözümünü uygula."
  - "Sensör hatalarında sensörü yumuşak kuru bezle sil."
  - "Hatayı giderince robotu başka bir yere taşıyıp temizliği yeniden başlat."
  - "Pil anormal sıcaklıktaysa normale dönmesini bekle."
  - "Hata sürüyorsa sistemi sıfırla."
  - "Hâlâ geçmiyorsa üreticinin satış sonrası ekibine yaz."
faq:
  - q: "Roborock Error 8 ne demek?"
    a: "Roborock S7 ve Q7 Max kılavuzlarındaki hata tablosunda Error 8, robotun sıkıştığı anlamına geliyor ve çözüm olarak robotun çevresindeki engellerin kaldırılması yazıyor."
  - q: "Roborock'ta 38, 52, 53 ve 108 hata kodları ne demek?"
    a: "Roborock S7 ve Q7 Max kullanım kılavuzlarının hata tablolarında bu kodlar yok. Anlamını uydurmak yerine yazmıyoruz. Bu numaralar başka bir modelin ya da robotun istasyonunun kılavuzunda olabilir; kendi modelinin kılavuzuna ya da uygulamadaki mesaja bak."
  - q: "Roborock Error 1 hatası nasıl çözülür?"
    a: "İki kılavuza göre Error 1, LiDAR kulesinin ya da lazerin engellenmiş olması. Çözüm olarak engel olup olmadığını kontrol edip yeniden denemen isteniyor. Kılavuzun genel notu da sensör hatalarından sonra sensörün temizlenip yeniden denenmesini söylüyor."
  - q: "Hata kodu sürekli çıkıyorsa ne yapmalıyım?"
    a: "S7 kılavuzu önce sistemi sıfırlamayı, geçmezse Roborock'un satış sonrası ekibine e-posta atmayı öneriyor. Sıfırlamada temizlik programları, Wi-Fi ve diğer ayarlar fabrika ayarlarına döner."
images:
  coverAlt: "Düz zeminde duran jenerik robot süpürge ve üstünde yanıp sönen uyarı ışığı çizimi"
  steps:
    - "Robot süpürgenin güç ışığındaki uyarıya bakan beyaz eldivenli sade siluet el"
    - "Kılavuzdaki hata tablosunu parmağıyla takip eden beyaz eldivenli sade siluet el"
    - "Robotun altındaki sensör gözünü kuru bezle silen beyaz eldivenli sade siluet el"
    - "Robotu başka bir odaya taşıyan beyaz eldivenli sade siluet el"
    - "Robotun yanında bekleyen saat simgesi ve sıcaklık göstergesi çizimi"
    - "Robotun üstündeki sıfırlama düğmesine basan beyaz eldivenli sade siluet el"
    - "Robotun yanında telefon simgesi bulunan servis çağırma çizimi"
---

Roborock robotun güç ışığı hızlı hızlı kırmızı yanıp sönüyor, sesli bir uyarı geliyor ve temizlik duruyor. "Roborock hata kodları" diye arayanların ilk sorusu hangi kodun ne anlama geldiği. Bu yazıdaki liste Roborock'un iki kullanma kılavuzundan geliyor: **S7** ve **Q7 Max**. İkisinin de Türkçe baskısını bulamadık; İngilizce baskıyı okuyup çevirdik. Kodların anlamı modele göre değişebiliyor, bu yüzden aşağıda iki kılavuzun farkını da gösterdik. Kendi modelinin kılavuzu farklı söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Önce şu sınırı bil:** kılavuzların kullanıcıya verdiği çözümler hazneyi, fırçayı, sensörü ve temas noktalarını temizlemek ya da robotu taşımak gibi işlerdir. Pil, fan ve lazer kulesi hatalarında robotun gövdesini açma; bunlar servis işidir.

## Hata kodları tablosu (S7 kılavuzu)

- **Error 1:** LiDAR kulesi ya da lazer engellenmiş. Engeli kontrol et, yeniden dene.
- **Error 2:** Tampon sıkışmış. Temizle, hafifçe vurup serbest bırak.
- **Error 3:** Tekerlekler havada. Robotu taşı, yeniden başlat.
- **Error 4:** Düşme (uçurum) sensörü hatası. Sensörleri temizle, robotu düşme noktalarından uzaklaştır, yeniden başlat.
- **Error 5:** Ana fırça sıkışmış. Ana fırçayı ve yataklarını temizle.
- **Error 6:** Yan fırça sıkışmış. Yan fırçayı çıkarıp temizle.
- **Error 7:** Tekerlekler sıkışmış. Robotu taşı, yeniden başlat.
- **Error 8:** Robot sıkışmış. Çevresindeki engelleri kaldır.
- **Error 9:** Toz haznesi yok. Hazneyi ve filtreyi tak.
- **Error 12:** Pil zayıf. Şarj et, yeniden dene.
- **Error 13:** Şarj hatası. Şarj temas noktalarını temizle, yeniden dene.
- **Error 14:** Pil hatası. Kılavuz çözüm yazmıyor.
- **Error 15:** Duvar sensörü kirli. Sensörü temizle.
- **Error 16:** Robot eğik. Düz zemine taşı, yeniden başlat.
- **Error 17:** Yan fırça hatası. Robotu sıfırla.
- **Error 18:** Fan hatası. Robotu sıfırla.
- **Error 21:** Dikey tampon basılı. Robotu taşı, yeniden dene.
- **Error 22:** Şarj istasyonu bulucu hatası. Temizle, yeniden dene.
- **Error 23:** İstasyona dönemedi. İstasyon konum işaretçisini temizle.
- **Error 27:** VibraRise sistemi sıkışmış. Engel var mı bak.
- **Error 28:** Robot halıda. Zemine taşı.

Numarası olmayan dört uyarı da var: filtre tıkalı ya da ıslak (temizle, kurut), yasak bölge ya da görünmez duvar algılandı (robotu bu alandan çıkar), halıyı geçemiyor (robotu halının öbür tarafına taşıyıp yeniden başlat) ve dahili hata (robotu sıfırla).

## Q7 Max'te ne farklı?

Q7 Max tablosunda Error 15, 27 ve 28 yok. Duvar sensörünün kirli olması orada **Error 26** olarak geçiyor. Diğer kodlar iki kılavuzda aynı anlamı taşıyor. Yani aynı numara her modelde aynı olmayabilir; kodu kendi modelinin tablosundan oku.

## Kılavuzda olmayan kodlar: 38, 52, 53, 108

Arama sonuçlarında 38, 52, 53 ve 108 gibi kodlar çok geçiyor. S7 ve Q7 Max kılavuzlarının hata tablolarında bu numaralar bulunmuyor. Anlamlarını tahmin etmek yerine yazmadık; robotun uygulamasındaki mesaja ve kendi modelinin kılavuzuna bak.

## Adım adım: hata kodunu gidermek

**1. Işığa ve sese bak.** Kılavuza göre hata olunca güç göstergesi hızlı hızlı kırmızı yanıp sönüyor ve sesli uyarı veriyor. Robot hata durumunda 10 dakikadan uzun kalırsa kendiliğinden uyku moduna geçiyor. Hata varken robotu istasyona koyarsan o anki temizlik sona eriyor.

**2. Kodu tabloda bul.** Yukarıdaki listeden kodunu bul ve yanındaki çözümü uygula.

**3. Sensör hatasında sensörü sil.** Kılavuz, herhangi bir sensör hatasından sonra sensörün temizlenip yeniden denenmesini istiyor. Roborock S7 kılavuzunda sensörler yumuşak, kuru bezle siliniyor: istasyon bulucu, duvar sensörü, halı sensörü ve altı düşme sensörü.

**4. Robotu başka bir yere taşı.** Kılavuza göre listedeki hatalardan birini giderdikten sonra robotu başka bir yere taşıyıp temizliği yeniden başlatman gerekiyor. Error 7 için ayrıntılı kontrol [Roborock ana tekerlek sıkışma hatası](/blog/roborock-ana-tekerlek-sikismasi/) yazısında.

**5. Pil sıcaklığını bekle.** Pil anormal sıcaklıktaysa normale dönmesini bekle, sonra kullan. S7 kılavuzu robotun 4 ile 40 derece arasında kullanılmasını istiyor; çok soğuk ya da çok sıcak odada robot açılmayabiliyor. Şarj sorunlarında [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/) yazısındaki sırayı da dene.

**6. Sistemi sıfırla.** S7 kılavuzu bazı sorunların sistem sıfırlamayla çözülebileceğini yazıyor. Sıfırlama sonrası temizlik programları, Wi-Fi ve diğer ayarlar fabrika ayarlarına dönüyor.

**7. Geçmiyorsa desteğe yaz.** Önerilerden sonra sorun sürüyorsa kılavuz, satış sonrası ekibine e-posta atmanı istiyor. Adres bölgeye göre değişiyor; kılavuzdaki adresi kullan. Mesajına robotun modelini, ekrandaki ya da sesli mesajdaki kodu ve denediğin adımları yaz.

## Servis çağırmadan üç not

1. Hata numarasını ve robotun modelini yaz.
2. Kodun ne zaman çıktığını (temizlik başında mı, şarjdayken mi) not et.
3. Denediğin adımları ve sonucunu sırayla yaz.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
