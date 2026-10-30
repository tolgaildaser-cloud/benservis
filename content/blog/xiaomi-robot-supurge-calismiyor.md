---
title: "Xiaomi robot süpürge çalışmıyor: nedenleri ve çözümü"
description: "Xiaomi (Mi) robot süpürge açılmıyor, şarj olmuyor ya da yanıt vermiyorsa: pil, 0-40 °C sınırı, istasyon, yeniden başlatma ve fabrika ayarı."
slug: "xiaomi-robot-supurge-calismiyor"
date: "2026-10-30"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P31 (YK #197 boşluk, BOSLUK.md #152). Slug origin/main'de yok (ls-tree). Yakın yazılar: xiaomi-robot-supurge-resetleme (yalnız sıfırlama sırası), xiaomi-robot-supurge-wifi-degistirme, robot-supurge-sarj-olmuyor, robot-supurge-firca-donmuyor; "çalışmıyor" başlığı yok. Satırdaki "Xiaomi / Mi": kılavuzlarda uygulama adı Mi Home/Xiaomi Home; yazıda ikisi birlikte geçiyor.
# Kaynak (#88): iki Xiaomi belgesi, ikisi Türkçe (çok dilli PDF'in TR bölümü), Dalga 7'de mi.com/tr/support/user-guide → mi-img CDN (200 application/pdf) zinciriyle indirilmişti; kopya _kaynak/xiaomi/ altında.
#  (S) Xiaomi Robot Vacuum S20 kullanım kılavuzu, 194 s. çok dilli, TR bölümü PDF s.74-82, md5 c16bc2342081edbc40078e231ff125a1 — s.77 yerleştirme ve ilk şarj · s.78 başlatma · s.79 yeniden başlatma, uyku, fabrika ayarı · s.81 "Sorun Giderme" tablosu · s.82 devamı
#  (X) Xiaomi Robot Vacuum X10 kullanım kılavuzu, 124 s. çok dilli, TR bölümü PDF s.58-64, md5 6844de9fbffdda002a8d1b59fd0be5dd — s.59 düğmeler ve gösterge · s.60 yerleştirme ve ilk şarj · s.62 yeniden başlatma, fabrika ayarı, uyku
# FARK (yazıda açık): zorla kapatma S20'de sıfırlama düğmesine 10 sn, X10'da 15 sn basılı tutularak yapılır. X10'un TR bölümünde "Sorun Giderme" tablosu yok; tablo yalnız S20'den.
# KAPSAM SINIRI: S20 ve X10; diğer Xiaomi/Mi robotlarında (Mop 2, S10, E10) düğme ve süreler farklı olabilir. Yazıda belirtildi.
# BİLEREK YAZILMAYANLAR: pil sökümü (#31) · uygulama menü adları (kılavuz da sürüme göre değişir diyor) · otomatik boşaltma standı hava kanalı sökümü (X10; vida söküm, servise yakın) · fiyat (#46).
# Alıntı denetimi: xiaomi-robot-supurge-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak, kuru bez", "İğne (fabrika ayarı için)", "Robotun kullanım kılavuzu"]
steps:
  - "Robotu şarj istasyonuna yerleştir ve temasların hizalandığından emin ol."
  - "Ortamın 0 ile 40 °C arasında olduğundan emin ol; değilse robotu uygun odaya al."
  - "Kablonun istasyona ve prize takılı olduğunu kontrol et, şarj temaslarını kuru bezle sil."
  - "Düğmeye basarak temizliği başlat; açılmıyorsa güç düğmesini basılı tut."
  - "Robot duruyorsa herhangi bir düğmeye bas, DND ayarını ve pil seviyesini kontrol et."
  - "Yanıt vermiyorsa sıfırlama düğmesini basılı tutarak robotu kapat, sonra yeniden aç."
  - "Hâlâ düzgün çalışmıyorsa fabrika ayarlarını geri yükle."
faq:
  - q: "Xiaomi robot süpürge neden açılmıyor?"
    a: "S20 kılavuzunun sorun tablosuna göre iki neden var: pil seviyesi düşük (robotu tamamen şarj et) ya da ortam sıcaklığı 0 °C'den düşük veya 40 °C'den yüksek. Robotun bu aralıkta olduğundan emin ol."
  - q: "Xiaomi robot süpürge şarj olmuyor, ne yapmalıyım?"
    a: "S20 kılavuzu kablo setinin hem şarj istasyonuna hem prize düzgün takıldığını ve şarj temaslarının temiz olduğunu kontrol etmeni istiyor. Hem istasyondaki hem robottaki şarj temaslarını kuru bezle sil."
  - q: "Xiaomi robot süpürge kapanmıyor, düğmelere yanıt vermiyor."
    a: "S20 kılavuzuna göre sıfırlama düğmesini 10 saniye basılı tutarak robotu zorla kapat, sonra açmak için güç düğmesini 3 saniye basılı tut. X10 kılavuzunda aynı işlem için süre 15 saniye."
  - q: "Planlanmış temizlik neden başlamıyor?"
    a: "S20 kılavuzuna göre robot planlanmış temizliğe yalnız kalan pil seviyesi yüzde otuzun üzerindeyse başlıyor. Temizlik şarj sonrası devam etmiyorsa DND modunu da kontrol et."
images:
  coverAlt: "Parke zeminde şarj istasyonunun yanında duran yuvarlak bir robot süpürge"
  steps:
    - "Robot süpürgeyi şarj istasyonuna yerleştiren beyaz eldivenli sade siluet el"
    - "Robot süpürgeyi uygun ısıdaki bir odaya taşıyan beyaz eldivenli sade siluet el"
    - "İstasyondaki şarj temaslarını kuru bezle silen beyaz eldivenli sade siluet el"
    - "Robotun üstündeki düğmeye basan beyaz eldivenli sade siluet el"
    - "Robotun herhangi bir düğmesine dokunan beyaz eldivenli sade siluet el"
    - "Sıfırlama düğmesine basılı tutan beyaz eldivenli sade siluet el"
    - "Sıfırlama düğmesine iğneyle basan beyaz eldivenli sade siluet el"
---

Xiaomi robot süpürgen (Mi Home ya da Xiaomi Home uygulamasıyla çalışan robot) açılmıyor, şarj olmuyor ya da düğmelere yanıt vermiyorsa kılavuzdaki sorun tablosu çoğu zaman yeterli. Bu yazı Xiaomi'nin Türkçe kullanım kılavuzlarına dayanıyor: **Robot Vacuum S20** ve **Robot Vacuum X10**. Başka Xiaomi ve Mi robotlarında düğmeler ve süreler farklı olabilir. İki kılavuzun farkını da yazdık. **Kendi kılavuzun esastır.**

> ⚡ **Kısa özet:** Robotu istasyona koy; ortam 0-40 °C olmalı. Kablonun iki ucunu ve şarj temaslarını kontrol et. Yanıt vermiyorsa sıfırlama düğmesini basılı tutarak kapat, güç düğmesini 3 saniye basılı tutarak aç. Düzelmezse fabrika ayarı.

## Kılavuzdaki sorun tablosu

| Belirti | S20 kılavuzundaki çözüm |
|---|---|
| Açılmıyor | Pil düşük: tamamen şarj et. Sıcaklık 0 °C altı ya da 40 °C üstü: aralığa getir |
| Şarj olmuyor | Kablo hem istasyonda hem prizde takılı olsun; şarj temaslarını kuru bezle sil |
| İstasyona dönemiyor | İstasyonun çevresi boş olsun; engelsiz bir yere koy |
| Beklenildiği gibi çalışmıyor | Robotu kapatıp aç |
| Garip ses | Fırçaya, yan fırçaya ya da tekerleğe yabancı cisim takılmış olabilir; robotu durdur, temizle |
| Eskisi gibi temizlemiyor | Toz haznesini boşalt, filtreyi temizle, fırçaya dolanan şeyi al |

## Adım adım: çalışmayan Xiaomi robot

**1. İstasyona yerleştir.** Her iki kılavuza göre robotu istasyona elle yerleştir ve robot ile istasyondaki şarj temaslarının tamamen hizalandığından emin ol. Robot otomatik olarak açılıp şarj olmaya başlıyor. S20'de tamamen şarj olduktan 10 dakika sonra gösterge kapanıyor. Pil bitikse şarj bitmeden karar verme.

**2. Sıcaklığa bak.** S20'nin sorun tablosu robotun ortam sıcaklığı 0 °C'den düşük ya da 40 °C'den yüksekse açılmadığını yazıyor. Robotun 0 ile 40 °C arasında olduğundan emin ol; soğuk balkondan ya da güneş alan camın önünden kaldır.

**3. Kablo ve temasları kontrol et.** Kablo setinin hem şarj istasyonuna hem prize düzgün takılı olduğunu kontrol et. Sonra hem istasyondaki hem robot üzerindeki şarj temaslarını kuru bezle sil. Kılavuz, temasların ve sensörlerin yumuşak, kuru bezle temizlenmesini öneriyor. İstasyonun iki yanına 0,5 m, önüne 1,5 m boşluk bırak.

**4. Düğmeyle başlat.** Temizliği robotun üstündeki düğmeyle ya da uygulamadan başlatırsın. X10 kılavuzunda robotu açmak ya da kapatmak için güç düğmesine 3 saniye basılı tutuluyor ve açıldıktan sonra temizliği başlatmak için düğmeye basılıyor.

**5. Duruyorsa uyandır.** Robot duraklatıldıktan 10 dakika sonra uyku moduna giriyor ve göstergesi kapanıyor; herhangi bir düğme onu uyandırıyor. Uyku 12 saati geçerse robot otomatik kapanıyor. Duraklatılmış robotu kaldırma ya da taşıma; harita kaybolabilir. Planlanmış temizlik yalnız pil seviyesi yüzde otuzun üzerindeyse başlıyor. DND modu açıksa şarjdan sonra temizliğe devam etmiyor.

**6. Yeniden başlat.** Düğmeler çalışmadığında ya da robot kapatılamadığında S20 kılavuzu sıfırlama düğmesine 10 saniye basılı tutmanı, ardından robotu açmak için güç düğmesine 3 saniye basılı tutmanı istiyor. **X10 kılavuzunda süre 15 saniye.** Kılavuza göre bu işlem robotu zorla kapatıyor. Ayrıca S20 tablosu "robot beklenildiği gibi çalışmıyor" için kapatıp açmayı öneriyor.

**7. Fabrika ayarı.** Yeniden başlatmadan sonra da düzgün çalışmıyorsa her iki kılavuz da sıfırlama düğmesini bir iğne yardımıyla, fabrika ayarlarının geri yüklendiğini belirten ses gelene kadar basılı tutmanı istiyor. Bu işlem robotu orijinal fabrika ayarlarına döndürüyor.

## Beklenmedik ama normal olan

Tamamen şarj olmuş robot istasyonda bırakılınca S20 kılavuzuna göre az miktarda elektrik tüketiyor; kılavuz bunun pilin uyku modunda en iyi performansı korumasına izin verdiğini yazıyor. Robot temizlik sırasında azalan şarjla istasyona dönüyor ve yeterince şarj olunca kaldığı yerden devam ediyor.

## Düzenli bakım, "çalışmıyor" sorununu azaltır

S20 kılavuzu bakım sıklığını şöyle veriyor: fırça ve filtre iki haftada bir, yan fırça iki haftada bir, toz haznesi haftada bir, sensörler ve şarj temasları üç ayda bir temizlenmeli; çok yönlü tekerlek gerektikçe temizlenir. Toz haznesini temiz suyla yıkarken deterjan kullanma; haznesini ve filtreyi takmadan önce iyice kurut. Robotu uzun süre kullanmayacaksan kapat ve kaldır; pilin aşırı boşalmaması için en az üç ayda bir yeniden şarj et.

## Ne zaman servis?

- Şarj temasları temiz, kablo takılıyken robot hiç şarj olmuyorsa
- Fabrika ayarından sonra da robot açılmıyorsa
- Robot sık sık uyarı verip istasyona dönemiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Fırça, yan fırça, tekerlek, sensör ve temas temizliği senin; pil ve iç elektronik servisin. Ayarları baştan kurmak için [Xiaomi robot süpürge resetleme](/blog/xiaomi-robot-supurge-resetleme/), bağlantı sorunları için [Xiaomi robot süpürge wifi değiştirme](/blog/xiaomi-robot-supurge-wifi-degistirme/), şarj için [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/) yazılarına bak.

Servisi aramadan önce robotun modelini, göstergenin rengini ve robotun son ne zaman şarj olduğunu not et. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Sorun tablosu, düğme süreleri, uyku ve fabrika ayarı Xiaomi Robot Vacuum S20 ve X10 Türkçe kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
