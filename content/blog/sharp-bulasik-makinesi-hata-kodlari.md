---
title: "Sharp bulaşık makinesi hata kodları: F5, F2 ve FF"
description: "Sharp bulaşık makinesinde FF su girişi, F5 basınç sistemi, F2 tahliye hatası. Kılavuzun tablosu, evde yapılacak kontroller ve servis gereken kodlar."
slug: "sharp-bulasik-makinesi-hata-kodlari"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme R-yedekler; Dalga 4 M1 yedeği). origin/main'de Sharp bulaşık sayfası yok (sharp-* yalnız çamaşır, buzdolabı, mikrodalga, TV).
# Arama kanıtı (#164, bu koşu, hl=tr gl=tr): "sharp bulaşık makinesi hata" → 1. "…f5 hatası", 2. "…f2 hatası", 3. "…ff hatası"; "sharp bulaşık makinesi" → 4. f5, 5. f2. GSC: satır yok.
# Belge (#88). Zincir: https://sharphome.eu/products/sharp-qw-na1ff45dw-freestanding-60cm-dishwasher-16ps-45-db-d-class-with-multifunctional-rack-copy
#   (tarayıcıda açıldı; curl 429 hız sınırı) → sayfanın bağladığı https://cdn.shopify.com/s/files/1/0722/9485/8997/files/10811702_k.pdf (curl 200, application/pdf)
#  (S) Sharp QW-NA1FF45DW kullanım kılavuzu (EN), 32 s., md5 5d795d300b0568090352d1ef260c6cd1 — PDF s.9, s.24, s.25, s.27, s.28, s.31
#  Kılavuzun İngilizce baskısı; alıntılar çevrildi, orijinaller KAYNAK'ta.
# BİLEREK YAZILMAYANLAR: kodların belgede olmayan nedenleri (basınç sensörü, pompa, kart teşhisi) · F5'te evde onarım (belge "servis" diyor) · tahliye pompasına söküm · fiyat (#46).
# Alıntı denetimi: sharp-bulasik-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Sünger", "Kova"]
steps:
  - "Ekranın kalan süre alanında görünen kodu not et ve aşağıdaki tablodan anlamına bak."
  - "FF görüyorsan su musluğunun tam açık olduğunu ve suyun aktığını kontrol et."
  - "FF sürerse makinenin fişini çek, musluğu kapat, giriş hortumunu musluktan ayırıp hortumun filtresini temizle."
  - "F2 görüyorsan programı iptal et: Başlat/Duraklat tuşunu üç saniye basılı tut."
  - "Fişi çekip filtre grubunu saat yönünün tersine çevirerek çıkar, filtreleri bol suyla durula ve yerine tak."
  - "Filtrelerin üstünde su kaldıysa suyu sünger ve kovayla al, haznede yabancı cisim varsa çıkar."
  - "F5, F3, F1 ya da listedeki diğer kodlardan birini görüyorsan makineyi kullanma ve Sharp yetkili servisini ara; F3 ve F1'de önce musluğu kapat."
faq:
  - q: "Sharp bulaşık makinesinde F5 hatası ne demek?"
    a: "Sharp'ın kılavuzunda F5 basınç sistemi arızası olarak geçiyor ve yapılacak tek iş servisi aramak. Kılavuz bu kod için evde bir kontrol vermiyor."
  - q: "F2 hatası nasıl giderilir?"
    a: "F2 suyun boşaltılamadığını gösteriyor. Kılavuz tahliye hortumunun ve filtrelerin tıkalı olabileceğini yazıyor ve programı iptal etmeni istiyor. Filtreleri temizledikten sonra hata sürerse servis gerekiyor."
  - q: "FF hatası çıkıyor, makine su almıyor; ne yapmalıyım?"
    a: "FF su giriş sistemi arızası. Önce musluğun açık olduğunu ve suyun aktığını kontrol et, sonra giriş hortumunu musluktan ayırıp hortumun filtresini temizle. Hata devam ederse servisi ara."
  - q: "Programı nasıl iptal ederim?"
    a: "Program çalışırken Başlat/Duraklat tuşunu üç saniye basılı tut. İptal sırasında kurutma lambası yanıyor ve makine içindeki suyu yaklaşık otuz saniyede boşaltıyor. Bitiş lambası yanınca makineyi Açma/Kapama tuşuyla kapat."
  - q: "HI ve LO kodları ne anlama geliyor?"
    a: "Kılavuzda HI yüksek gerilim, LO düşük gerilim arızası olarak listeleniyor; ikisinde de yapılacak iş servisi aramak."
images:
  coverAlt: "Solo bir bulaşık makinesinin kontrol paneli ve küçük dijital ekranı"
  steps:
    - "Bulaşık makinesi panelinde harf ve rakamdan oluşan bir kod gösteren küçük ekran"
    - "Duvardaki su musluğu ve ona bağlı beyaz giriş hortumu"
    - "Musluktan ayrılmış bir hortum ucunda küçük süzgeç"
    - "Bulaşık makinesi panelinde başlat ve duraklat tuşu"
    - "Bulaşık makinesinin tabanından çıkarılmış silindir biçimli filtre grubu"
    - "Bulaşık makinesinin tabanında sünger ve yanında küçük bir kova"
    - "Tezgâh altında kapatılmış bir köşe musluğu"
---

Sharp bulaşık makinesinin ekranında FF, F2 ya da F5 yanıyor ve makine durdu. Bu kodların ne demek olduğunu Sharp'ın kendi kullanım kılavuzu "otomatik arıza uyarıları ve yapılacaklar" tablosunda tek tek yazıyor. Sharp'ın Türkçe bir kılavuzuna ulaşamadık; bu yazıda Sharp'ın Avrupa sitesindeki QW-NA1FF45DW solo bulaşık makinesi sayfasından indirdiğimiz kılavuzun **İngilizce baskısını** kullandık, alıntılar bizim çevirimiz. Kod listesi modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** FF su girişi: musluğu ve hortum filtresini kontrol et. F2 tahliye: programı iptal et, filtreleri temizle. F5 basınç sistemi, F3 sürekli su girişi, F1 taşma ve diğer kodlar: makineyi kullanma, servisi ara. F3 ve F1'de önce musluğu kapat.

## Kod tablosu

| Kod | Kılavuzdaki anlamı | Kılavuzun dediği |
|---|---|---|
| **FF** | Su giriş sistemi arızası | Musluk açık mı, su akıyor mu bak; hortum filtresini temizle; sürerse servis |
| **F5** | Basınç sistemi arızası | Servis |
| **F2** | Su boşaltılamıyor | Hortum ve filtreler tıkalı olabilir; programı iptal et; sürerse servis |
| **F3** | Sürekli su girişi | Musluğu kapat, servis |
| **F1** | Taşma | Fişi çek, musluğu kapat, servis |
| **F8** | Isıtıcı hatası | Servis |
| **F6** | Hatalı ısıtıcı sensörü | Servis |
| **F7** | Aşırı ısınma | Servis |
| **F9** | Yönlendirici konum hatası | Servis |
| **FE** | Hatalı elektronik kart | Servis |
| **HI / LO** | Yüksek / düşük gerilim arızası | Servis |

## Adım adım: Sharp bulaşık makinesinde kod çıkınca

**1. Kodu not et.** Kod, kontrol panelindeki kalan süre göstergesinde görünüyor. Hangi kodun, programın hangi aşamasında çıktığını yaz; servis için de lazım olacak.

**2. FF'de musluğa bak.** FF su giriş sistemi arızası. Kılavuzun ilk kontrolü, su giriş musluğunun açık olduğundan ve suyun aktığından emin olmak. Kılavuz kurulum bölümünde ayrıca giriş ve tahliye hortumlarının ezilmemesini ve sıkışmamasını istiyor; makine yakın zamanda yerinden oynadıysa hortuma da bak.

**3. FF sürerse hortum filtresini temizle.** Kılavuzun ikinci adımı, giriş hortumunu musluktan ayırıp hortumun filtresini temizlemek. Bunu yapmadan önce makinenin fişini çek ve musluğu kapat (çıkarım: su ve elektrik güvenliği için). Hortumu geri takınca musluğu tam aç ve sızıntı var mı bak. Hata bundan sonra da sürerse kılavuz servisi aramanı söylüyor.

**4. F2'de programı iptal et.** F2 suyun boşaltılamadığı anlamına geliyor ve kılavuz tahliye hortumunun ve filtrelerin tıkalı olabileceğini yazıyor. İlk iş programı iptal etmek: program çalışırken **Başlat/Duraklat** tuşunu **üç saniye** basılı tut. İptal sırasında kurutma lambası yanıyor ve makine içindeki suyu yaklaşık otuz saniyede boşaltmaya çalışıyor. **Bitiş** lambası yanınca makineyi Açma/Kapama tuşuyla kapat.

**5. Filtreleri temizle.** Fişi çek. Kılavuza göre filtre grubunu saat yönünün tersine çevirip yukarı kaldırarak çıkarıyorsun. Kaba filtreyi mikro filtreden ayır, sonra metal filtreyi çek. Filtreleri artık kalmayana kadar bol suyla durula, birleştir, yerine koy ve saat yönünde çevirerek sabitle. Sharp filtrelerin ve fıskiye kollarının en az haftada bir temizlenmesini istiyor ve makinenin asla filtresiz çalıştırılmamasını yazıyor.

**6. Filtrenin üstünde su kaldıysa haznedeki cismi çıkar.** Kılavuza göre filtrelerin tutamadığı büyük yemek artıkları ya da yabancı cisimler atık su pompasını tıkayabiliyor; o zaman durulama suyu filtrenin üstünde kalıyor. Sharp'ın sırası şöyle: önce elektriği kes, sepetleri çıkar, filtreleri çıkar, suyu gerekirse süngerle al, bölgeyi kontrol edip yabancı cisimleri çıkar, filtreleri ve sepetleri yerine tak. Kılavuz burada kırık cam parçalarına karşı kesilme uyarısı yapıyor; dikkatli çalış. Pompanın kendisine dokunma, sökme.

**7. Diğer kodlarda servis.** F5 için kılavuz yalnız "servisle iletişime geç" diyor; evde yapılacak bir kontrol yok. **F3** sürekli su girişinde önce musluğu kapat. **F1** taşmada fişi çek ve musluğu kapat. F8, F6, F7, F9, FE, HI ve LO kodlarının hepsinde yapılacak iş servisi aramak.

## Elektrik ya da kapak kesintisi

Kılavuza göre yıkama sırasında kapak açılırsa ya da elektrik kesilirse program, kapak kapanınca ya da elektrik gelince kaldığı yerden devam ediyor. Bu bir hata kodu değil; kod yalnız arızada çıkıyor.

## Ne zaman servis

- F5, F3, F1, F8, F6, F7, F9, FE, HI ya da LO görüyorsan
- FF musluk ve hortum filtresi kontrolünden sonra da sürüyorsa
- F2 filtre temizliğinden sonra da geri geliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum filtresi, program iptali ve filtre temizliği sende; pompa, ısıtıcı, sensör ve elektronik kart Sharp yetkili servisinin işi. Kılavuz da kurulum ve onarımın yalnız yetkili servis tarafından yapılmasını istiyor.

## Servisi aramadan önce kısa özet

1. Ekranda hangi kod var?
2. Kod programın hangi aşamasında çıktı?
3. Musluk açık, hortum ezik değil mi?
4. Filtreleri temizledin mi?

Marka fark etmeksizin su alma sorunları [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/), tahliye sorunları [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) sayfasında. Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
