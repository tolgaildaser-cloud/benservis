---
title: "Teka bulaşık makinesi hata kodları: E1, E3, E4, E:01, E:02"
description: "Teka bulaşık makinesi hata kodları model model: E1, E3, E4, Ed, E1–E9, E:01, E:02 ve yanıp sönen ışık uyarıları; anlamı, ilk kontrol ve servis sınırı."
slug: "teka-bulasik-makinesi-hata-kodlari"
date: "2026-10-25"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı B (YK #182 Dalga 8, küme Z5). origin/main 829cec5'te Teka bulaşık için yalnız teka-bulasik-makinesi-kullanimi var (E:01/E:02 bölümü); "hata kodları" slug'ı ve başlığı yok; genel bulasik-makinesi-hata-kodlari'nda Teka satırı yok. Dalga 6/7/8 klasörlerinde yok.
# Arama kanıtı (#164, _kaynak/ot.tsv, 25 Eki 08:50 +03, client=firefox hl=tr gl=tr): "teka bulaşık makinesi h" → 1. "…hata kodları", 2. "…e4 hatası", 3. "…e02 hatası", 4. "…e01 hatası"; "teka bulaşık makinesi e" → 1. e4, 2. e02, 3. e1. GSC: satır yok.
# Belge zinciri (#88, bu koşu): teka.com/tr-tr/destek/kilavuzlari-indir/?se=<ref> (200) → d7rh5s3nxmpy4.cloudfront.net/CMP1219/… (200).
#  (S) DFS 76850 Kullanım Kılavuzu TR, 52 s., md5 a0a3115e6168ba29273cf9447f97331e — s.49
#  (W) DW8 80 FI User instructions EN, 35 s., md5 e55ce7bb3333e2c1b21192d92a897808 — s.33–34 (kılavuzun İngilizce baskısı)
#  (T) DFI 46700 TTM Kullanım Kılavuzu TR, 40 s., md5 02d106f72938ba15bc918e7dd495267e — s.31
#  (V) DW 605 S Kullanım Kılavuzu TR, 46 s., md5 903360b65fefeebf278e8ab2a530fd94 — s.30
#  (L) LP8 410 User Manual EN, 29 s., md5 1e842cd3d95c11c99f76113a4f8cac4c — s.24
#  (G) DW8 55 FI manual EN (görüntü tabanlı, OCR), 31 s., md5 798ccc8f3bb7a4dc404d965f48a86eba — s.27
# Hub kuralı: E:01/E:02 ayrıntısı teka-bulasik-makinesi-kullanimi'nde; burada tablo satırı + bağlantı. Tekil kod sayfası açılmaz.
# BİLEREK YAZILMAYANLAR: ısıtıcı, kart, kablo, pompa onarımı (#31) · servis menüsü (belgede yok) · fiyat (#46).
# Alıntı denetimi: teka-bulasik-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Emici bir bez"]
steps:
  - "Makinenin model adını bul ve ekrandaki kodu ya da yanıp sönen ışığı not et."
  - "Kodun anlamını kendi modelinin satırından oku; aynı kod başka modelde başka anlama gelebilir."
  - "Su girişi uyarısında musluğun tam açık olduğunu ve hortumun bükülmediğini kontrol et."
  - "Taşma uyarısında ana su vanasını kapat ve tabanda biriken suyu servis öncesi aldır."
  - "Boşaltma uyarısında tahliye hortumunu, sifonu ve filtreyi kontrol et."
  - "DW8 80 FI gibi modellerde kapağı açıp kapatarak ya da makineyi kapatıp açarak alarmı sıfırla."
  - "Programı yeniden başlat; kod geri gelirse modeli ve kodu not edip Teka yetkili servisini ara."
faq:
  - q: "Teka bulaşık makinesinde E4 ne demek?"
    a: "Modele göre değişiyor. DFS 76850'nin Türkçe kılavuzunda E4 taşma: makinede sızıntı var. DW8 80 FI kılavuzunun İngilizce baskısında ise E4 su sıcaklığı izleme arızası. Önce kendi modelini bul; taşma ise ana su beslemesini kapatıp servisi ara."
  - q: "E02 ve E01 hatası ne demek?"
    a: "DFI serisinde (DFI 46700, 46900, 46950, 76950 ve benzeri) E:02 su kesintisi uyarısı, E:01 taşma uyarısı. Su gelince E:02 kendiliğinden sönüp program kaldığı yerden sürüyor. E:01 sönmüyorsa hata kalıcı, servis gerekiyor. Ayrıntı Teka bulaşık makinesi kullanımı yazısında."
  - q: "E1 hatası nasıl geçer?"
    a: "DFS 76850'de E1 uzun su giriş süresi: musluk açık değil, su alımı kısıtlı ya da basınç düşük. Musluğu ve hortumu kontrol et. DW8 80 FI'da ise E1 Acquastop, yani taşma önleme sisteminin devreye girdiği anlamına geliyor; kılavuz bu durumda servisi aramanı istiyor."
  - q: "Ekranda kod yok ama ışıklar yanıp sönüyor, neden?"
    a: "DW 605 S, LP8 410 ve DW8 55 FI gibi modeller arızayı kodla değil program ışıklarıyla bildiriyor. Örneğin DW 605 S'te Hızlı yıkama ışığı yanıp sönüyorsa su girişi uzun sürüyor, Bardak yıkama ışığı yanıp sönüyorsa taşma var."
images:
  coverAlt: "Mutfak dolapları arasında kapağı kapalı ankastre bir bulaşık makinesi"
  steps:
    - "Bulaşık makinesinin üst kenarındaki dijital gösterge ve tuşlar"
    - "Açık duran bir bulaşık makinesi kılavuzunun arıza tablosu sayfası"
    - "Tezgâh altındaki su musluğu ve bağlı giriş hortumu"
    - "Bulaşık makinesinin önünde yere serilmiş emici bir bez"
    - "Bulaşık makinesinin tabanından çıkarılmış filtre grubu"
    - "Kapağı aralık duran bir ankastre bulaşık makinesi"
    - "Kapağı kapatılmış, göstergesi sönük bir bulaşık makinesi"
---

Teka bulaşık makinenin ekranında bir harf ve rakam yanıp sönüyor, program yarıda kaldı. İnternette "Teka E4" diye aratınca birbirini tutmayan cevaplar çıkıyor; bunun nedeni basit: Teka'nın farklı serilerinde **aynı kod farklı anlama geliyor**. Bu yazı Teka'nın Türkiye sitesinde yayımlanan altı bulaşık makinesi kılavuzundaki arıza tablolarını model model topluyor. DFS 76850, DFI 46700 TTM ve DW 605 S kılavuzları Türkçe; DW8 80 FI, LP8 410 ve DW8 55 FI için yalnız kılavuzun İngilizce baskısı var, alıntıları Türkçeye çevirdik.

Bir şey ters gidiyorsa olası arızayı benservis.com'daki ücretsiz teşhisten öğrenebilirsin.

> ⚡ **Kısa özet:** Önce modelini bul. DFS 76850: E1 su girişi uzun, E3 ısınmıyor, E4 taşma, Ed ekran iletişimi. DW8 80 FI: E1–E9, E4 burada sıcaklık izleme. DFI serisi: E:01 taşma, E:02 su yok. Taşmada ana suyu kapat, servisi ara.

## DFS 76850 kodları (Türkçe kılavuz)

| Kod | Kılavuzdaki anlamı | Olası neden | Kim |
|---|---|---|---|
| **E1** | Daha uzun giriş süresi | Musluk açık değil, su alımı sınırlı ya da basınç düşük | 🛠️ Sen |
| **E3** | Gerekli sıcaklığa ulaşılamıyor | Isıtıcı eleman arızası | 🔧 Servis |
| **E4** | Taşma | Makinede sızıntı var | 🔧 Servis |
| **Ed** | Ana kart ile ekran kartı arasında iletişim hatası | Açık devre ya da kopuk kablo | 🔧 Servis |

## DW8 80 FI kodları (İngilizce baskı)

Bu kılavuza göre arıza anında modele göre ekranda "E" ya da "Err" de görünüyor.

| Kod | Anlamı | Kılavuzun önerisi |
|---|---|---|
| **E1** | Acquastop: taşma önleme sistemi devrede | Servisi ara |
| **E2** | Güvenlik seviyesi: su seviyesi sınırı aşıldı | Kapat, aç, programı yeniden başlat |
| **E3** | Su ısınmıyor ya da ısıtma değerleri yanlış | Programı tekrarla |
| **E4** | Su sıcaklığı izleme arızası | Kapat, aç, yeniden başlat |
| **E5** | Su girişi arızası | Bağlantı, musluk, filtre |
| **E6** | Su boşaltma arızası | Hortum, sifon, filtre |
| **E7** | Türbinli debi ölçer arızası (ilgili modellerde) | Kapat, aç, yeniden başlat |
| **E8** | Dönüşümlü yıkama sistemi arızası | Kapat, aç, yeniden başlat |
| **E9** | Su giriş sistemi arızası | Servisi ara |

Kılavuza göre E1, E2, E3, E4, E8 ve E9 programı hemen durduruyor; E5 ve E6'da neden giderilince program kaldığı yerden sürüyor; E7 ise döngü sonunda gösteriliyor. Hepsinde sorun sürerse servis gerekiyor.

## DFI serisi: E:01 ve E:02

DFI 44700, 46700, 46900, 46950, 74910, 74950 ve 76950 kılavuzlarında yalnız iki uyarı var. **E:02** su kesintisi: şebeke suyu kesik ya da musluk kapalı, program duraklıyor, su gelince sürüyor. **E:01** taşma: güvenlik algoritması suyu boşaltmaya çalışıyor, sönmüyorsa hata kalıcı. İkisinin ayrıntısı ve programı iptal etme yolu [Teka bulaşık makinesi kullanımı](/blog/teka-bulasik-makinesi-kullanimi/) yazısında.

## Kod yerine ışık yanıp sönen modeller

| Model | Yanıp sönen ışık | Anlamı |
|---|---|---|
| DW 605 S | Hızlı yıkama | Uzun su giriş süresi |
| DW 605 S | Bardak yıkama | Taşma |
| LP8 410, DW8 55 FI | Rapid | Uzun su giriş süresi |
| LP8 410, DW8 55 FI | ECO | Taşma |
| LP8 410, DW8 55 FI | 90 min ve Rapid birlikte | Gerekli sıcaklığa ulaşılamıyor |

## Adım adım: Teka bulaşık makinesinde hata kodu çıkınca

**1. Modeli ve kodu not et.** Modelin adını kılavuzun kapağından ya da makinenin etiketinden (çıkarım) öğren, ekrandaki kodu ya da hangi ışığın yanıp söndüğünü yaz. Servisle konuşurken bu iki bilgi ilk sorulanlar.

**2. Kendi modelinin satırını oku.** Yukarıdaki tablolar modele göre ayrı. DFS 76850'de E4 taşma, DW8 80 FI'da sıcaklık izleme arızası; DFS'de E1 su girişi, DW8 80 FI'da Acquastop. Başka bir modelin açıklamasına göre işlem yapma.

**3. Su girişi uyarısında musluğa bak.** DFS'de E1, DW8 80 FI'da E5, ışıklı modellerde Rapid ya da Hızlı yıkama ışığı su alamama demek. Musluğun tam açık olduğunu, giriş hortumunun bükülmediğini kontrol et; kılavuz basıncın düşük olabileceğini de yazıyor. Genel kontrol listesi [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısında.

**4. Taşmada önce suyu kapat.** DFS 76850 ve DW 605 S kılavuzlarının uyarısı aynı: taşma görülürse servisi aramadan önce ana su beslemesini kapat. Tabanda su birikmişse makine yeniden çalıştırılmadan önce bu suyun alınması gerekiyor. Makinenin altını açma; sızıntının yerini servis bulsun. Belirtiler için [bulaşık makinesi su kaçırıyor](/blog/bulasik-makinesi-su-kaciriyor/) yazısına bakabilirsin.

**5. Boşaltma uyarısında hortum ve filtre.** DW8 80 FI'da E6 için kılavuz tahliye hortumunun bükülmediğini, ezilmediğini, sifonun ve filtrenin tıkalı olmadığını kontrol etmeni istiyor. Filtre bakımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/), genel belirtiler [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) yazısında.

**6. Alarmı sıfırla.** DW8 80 FI kılavuzuna göre alarmı sıfırlamak için kapağı açıp kapatıyor ya da makineyi kapatıp açıyorsun; ardından makineyi yeniden programlayabiliyorsun. DFI serisinde E:02 su gelince kendiliğinden sönüyor.

**7. Kod geri gelirse servis.** Programı yeniden başlat. Isıtma (E3, E4), kart iletişimi (Ed), Acquastop (E1) ya da su giriş sistemi (E9) kodu tekrar çıkıyorsa modeli ve kodu not edip Teka yetkili servisini ara.

## Ne zaman servis

- Musluk açıkken su girişi uyarısı geçmiyorsa
- Taşma kodu ya da ışığı varsa, her durumda
- Isıtma, ekran iletişimi ya da Acquastop kodu tekrar ediyorsa
- E:01 kendiliğinden sönmüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumun bükülmesi, filtre ve alarm sıfırlama sende; ısıtıcı, pompa, ventil, kart, kablo ve sızıntı onarımı Teka yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Modelin ne?
2. Ekranda hangi kod ya da hangi ışık yanıp sönüyor?
3. Musluk açık mı, tabanda su var mı?
4. Alarmı sıfırlayıp programı yeniden başlattın mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
