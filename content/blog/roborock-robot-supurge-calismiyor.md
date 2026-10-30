---
title: "Roborock robot süpürge çalışmıyor: hata ve çözüm adımları"
description: "Roborock robot süpürge açılmıyor, şarj olmuyor ya da kırmızı yanıp sönüyorsa: pil, 4-40 °C sınırı, hata numaraları, sıfırlama. Q7 Max ve S8 kılavuzları."
slug: "roborock-robot-supurge-calismiyor"
date: "2026-10-30"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P31 (YK #197 boşluk, BOSLUK.md #151). Slug origin/main'de yok (ls-tree). Yakın yazı: roborock-ana-tekerlek-sikismasi (yalnız Error 7), robot-supurge-sarj-olmuyor, robot-supurge-firca-donmuyor, robot-supurge-haritalama-sorunu; "Roborock çalışmıyor" başlığı yok. Hata kodları satırı #156 (Roborock hata kodları) ayrı satır; bu yazı #151 "çalışmıyor" kontrol sırası, hata tablosu yalnız özet.
# Kaynak (#88): iki Roborock belgesi, ikisi İngilizce CE kullanım kılavuzu (Türkçe baskı bulunamadı), 13 s. her biri:
#  (Q) Roborock Q7 Max kullanım kılavuzu, md5 ad4b8ba1040d276d375ba4b042e48aaa — s.9 açma/kapama, uyku, DND, sistem sıfırlama, fabrika ayarı · s.10 bakım · s.12 hata tablosu · s.13 SSS
#  (S) Roborock S8 kullanım kılavuzu, md5 b94698992faafa9718a5e9d056c480af — s.9 aynı bölümler · s.12-13 "Common Issues"
#  Her ikisi yk182/marka-25eki B kümesinde help.roborock.com'dan indirilmişti (zincir: help.roborock.com → mi-img CDN, 200 application/pdf); kopya _kaynak/roborock/ altında.
# KAPSAM SINIRI: Q7 Max ve S8; başka Roborock modellerinde (S7, S6, Q Revo...) hata listesi ve düğmeler farklı olabilir. Yazıda belirtildi. Reset düğmesinin yeri ve "tuş simgesi" kılavuzda çizimle verildiğinden yazıda tarif edilmedi.
# BİLEREK YAZILMAYANLAR: batarya, fan, LiDAR, ana tekerlek modülü sökümü (#31) · Error 38/52/53/108 (bu kılavuzlarda yok) · uygulama menüleri · fiyat (#46).
# Alıntı denetimi: roborock-robot-supurge-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak, kuru bez", "Robotun kullanım kılavuzu"]
steps:
  - "Robotu şarj istasyonuna yerleştir ve şarj olmaya bırak."
  - "Ortamın 4 ile 40 °C arasında olduğundan emin ol; değilse robotu uygun odaya al."
  - "İstasyonun güç göstergesine bak, kablonun iki ucunu kontrol et, şarj temaslarını kuru bezle sil."
  - "Güç düğmesine basılı tutup robotu aç; şarjdayken kapanmayacağını bil."
  - "Güç göstergesi kırmızı yanıp sönüyorsa hata numarasına göre sensörü, fırçayı ya da tekerleği temizle."
  - "Robot duruyorsa herhangi bir düğmeye bas; DND saatlerini ve pil seviyesini kontrol et."
  - "Düğmelere yanıt vermiyorsa Reset düğmesine basarak sistemi sıfırla."
faq:
  - q: "Roborock açılmıyor, ne yapmalıyım?"
    a: "Q7 Max ve S8 kılavuzlarının sorun tablosuna göre açılmama iki nedenden olabiliyor: batarya zayıf (robotu istasyona koyup şarj et) ya da batarya sıcaklığı çok düşük ya da çok yüksek (robotu yalnız 4-40 °C arasında kullan). İstasyonun güç kablosunun iki ucunun da takılı olduğunu kontrol et."
  - q: "Roborock şarjdayken neden kapanmıyor?"
    a: "Q7 Max kılavuzu robotun şarj edilirken kapatılamayacağını yazıyor. Kapatmak için önce istasyondan al."
  - q: "Roborock sistem sıfırlama ayarlarımı siler mi?"
    a: "Kılavuza göre sistem sıfırlamadan sonra zamanlanmış temizlik ve Wi-Fi gibi ayarlar fabrika ayarlarına dönüyor. Uygulamadan robotu yeniden bağlaman gerekebilir."
  - q: "Roborock zamanlanmış temizliği neden yapmıyor?"
    a: "Q7 Max kılavuzunda zamanlanmış temizlik yalnız pil seviyesi yüzde yirmiyi geçince başlıyor. DND modu (varsayılan 22:00-08:00) da otomatik devamı engelliyor."
images:
  coverAlt: "Parke zeminde şarj istasyonunun yanında duran yuvarlak bir robot süpürge"
  steps:
    - "Robot süpürgeyi şarj istasyonuna yerleştiren beyaz eldivenli sade siluet el"
    - "Robot süpürgeyi ılık bir odaya taşıyan beyaz eldivenli sade siluet el"
    - "İstasyondaki şarj temaslarını kuru bezle silen beyaz eldivenli sade siluet el"
    - "Robotun güç düğmesine basılı tutan beyaz eldivenli sade siluet el"
    - "Robotun altındaki sensörü yumuşak bezle silen beyaz eldivenli sade siluet el"
    - "Robotun herhangi bir düğmesine dokunan beyaz eldivenli sade siluet el"
    - "Robotun sıfırlama düğmesine basan beyaz eldivenli sade siluet el"
---

Roborock robot süpürgen açılmıyor, şarj olmuyor ya da kırmızı ışık yakıp duruyorsa panik yapma: Roborock'un kendi kılavuzları bu belirtileri küçük bir kontrol listesine bağlıyor. Bu yazı Roborock'un **Q7 Max** ve **S8** kullanım kılavuzlarının İngilizce baskısına dayanıyor; Türkçe baskıya ulaşamadık, ifadeler çeviridir. Başka Roborock modellerinde hata listesi ve düğmeler farklı olabilir. **Kendi kılavuzun esastır.**

> ⚡ **Kısa özet:** Önce şarj istasyonuna koy; ortam 4-40 °C olmalı. İstasyonun güç kablosunu ve şarj temaslarını kontrol et. Güç göstergesi kırmızı yanıp sönüyorsa hata numarasına bak. Herhangi bir düğmeye yanıt yoksa Reset düğmesiyle sistemi sıfırla.

## Kılavuzdaki sorun tablosu

| Belirti | Kılavuzdaki çözüm |
|---|---|
| Açılmıyor | Batarya zayıf: istasyonda şarj et. Batarya sıcaklığı uygunsuz: 4-40 °C arası kullan |
| Şarj olmuyor | İstasyonun güç göstergesi ve kablonun iki ucu; temasları kuru bezle sil |
| İstasyona dönemiyor | İstasyonu açık alana taşı, robotu yaklaştır |
| Garip ses | Ana fırça, yan fırça ya da tekerlek takılmış olabilir; kapat ve temizle |
| Zamanlanmış temizlik yok | Pil yüzde yirminin üstünde olmalı |

## Adım adım: çalışmayan Roborock

**1. Önce istasyona koy.** Q7 Max'in sorun tablosu açılmamanın ilk nedenini bataryanın zayıf olmasına bağlıyor ve robotu şarj istasyonuna koyup kullanmadan önce şarj etmeni söylüyor. Şarj bitmeden karar verme.

**2. Sıcaklığa bak.** Her iki kılavuz da batarya sıcaklığı çok düşük ya da çok yüksekse robotun açılmayabileceğini yazıyor ve robotu yalnız 4 ile 40 °C arasında kullanmanı istiyor. Soğuk balkonda ya da güneş alan camın önünde duran robotu odaya al.

**3. İstasyonu ve temasları kontrol et.** İstasyonun güç göstergesinin yandığından ve güç kablosunun iki ucunun da düzgün takıldığından emin ol. Kılavuzlara göre temas kötüyse hem istasyondaki hem robottaki şarj temaslarını kuru bezle silmen gerekiyor. S8'in tablosu şarj hızının sıcak ya da soğuk ortamda kendiliğinden düşürüldüğünü de not ediyor.

**4. Güç düğmesini basılı tut.** Q7 Max kılavuzuna göre robotu açmak için güç düğmesine basılı tutuyorsun; güç göstergesi yanıyor ve robot komut bekliyor. Aynı kılavuz robotun şarj edilirken kapatılamadığını da yazıyor.

**5. Kırmızı ışığı oku.** Çalışırken bir hata olursa güç göstergesi hızla kırmızı yanıp sönüyor ve sesli uyarı geliyor. Q7 Max'in hata tablosundan bazıları: **Error 1** lazer kulesi ya da lazer engelli; **Error 2** tampon sıkışmış; **Error 4** uçurum sensörü hatası (sensörü temizle); **Error 5** ana fırça sıkışmış; **Error 6** yan fırça sıkışmış; **Error 7** tekerlek sıkışmış; **Error 9** hazne takılı değil; **Error 12** batarya zayıf; **Error 13** şarj hatası. Sensör hatalarında sensörü yumuşak bezle temizleyip yeniden dene. Tekerlek için [Roborock ana tekerlek sıkışması](/blog/roborock-ana-tekerlek-sikismasi/) yazısı var.

**6. Duruyorsa uyandır, programı kontrol et.** Robot 10 dakikadan fazla duraklatılırsa uyku moduna geçiyor; herhangi bir düğme onu uyandırıyor. DND modunda (varsayılan 22:00-08:00) robot otomatik devam etmiyor. Zamanlanmış temizlik yalnız pil seviyesi yüzde yirminin üstündeyse başlıyor. Duraklatılmış robotu elle istasyona koyarsan mevcut temizlik sona eriyor.

**7. Sistemi sıfırla.** Kılavuza göre robot bir düğmeye basılınca yanıt vermiyorsa ya da kapatılamıyorsa Reset düğmesine basman gerekiyor; robot kendiliğinden sıfırlanıyor. Bu işlem zamanlanmış temizliği, Wi-Fi'yi ve benzeri ayarları fabrika ayarına döndürüyor. Düğmenin yeri kılavuzda çizimle gösterilir. Sıfırlamadan sonra da robot düzgün çalışmıyorsa kılavuz fabrika ayarlarına dönmeyi anlatıyor; tuş kombinasyonunu kendi kılavuzundaki çizimden uygula.

## Düzenli bakım ve saklama

Q7 Max kılavuzu bakım aralıklarını da veriyor: ana fırça iki haftada bir temizlenir ve altı ile on iki ayda bir değiştirilir; yan fırça ayda bir temizlenir ve üç ile altı ayda bir değiştirilir; toz haznesi ile su haznesi birimi haftada bir temizlenir, filtre altı ile on iki ayda bir değiştirilir; ana tekerlekler ayda bir yumuşak, kuru bezle silinir. Robotu uzun süre saklayacaksan tamamen şarj edip kapat ve serin, kuru bir yerde tut; pilin aşırı boşalmaması için en az üç ayda bir yeniden şarj et.

## Ne zaman servis?

- Sıfırlamadan sonra da robot açılmıyor ya da hep hata veriyorsa
- Batarya hatası (Error 14) ya da fan hatası (Error 18) sıfırlamadan sonra sürüyorsa
- Şarj temasları temiz, kablo takılıyken robot hiç şarj olmuyorsa

⛔ **Kendin-çöz sınırı burada biter.** Fırça, filtre, sensör ve temas temizliği senin; batarya, fan, lazer kulesi ve anakart Roborock yetkili servisinin. Şarj sorunlarında ayrıca [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/) yazısına bak.

Servisi aramadan önce robotun modelini (Q7 Max, S8 ya da başka), kırmızı ışığın ne zaman yandığını ve sesli uyarıyı not et. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Sorun tabloları, hata numaraları, uyku, DND ve sıfırlama bilgisi Roborock Q7 Max ve S8 kullanım kılavuzlarının İngilizce baskısından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
