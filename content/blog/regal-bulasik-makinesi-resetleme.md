---
title: "Regal bulaşık makinesi resetleme nasıl yapılır"
description: "Regal bulaşık makinesinde reset: Başlat/Beklet'i üç saniye basılı tut, tahliye ve Bitiş ışığını bekle. Program değiştirme, çocuk kilidi, FF ve F2."
slug: "regal-bulasik-makinesi-resetleme"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme R-yedekler; Dalga 3 F yedeği). origin/main'de regal-* yalnız çamaşır (resetleme, su almıyor); Regal bulaşık sayfası yok.
# Arama kanıtı (#164, bu koşu, hl=tr gl=tr): "regal bulaşık makinesi r" → 1. "regal bulaşık makinesi resetleme", 2. "…resetleme nasıl yapılır".
#   GSC (ilgili, ayrı sorgu): "regal bulaşık makinesi ff ne demek" www-6 (7 gün) 2 gösterim, poz 9 · "regal bulaşık makinesi kurutmuyor" www-4 2 gösterim.
# Belge (#88), bu koşuda curl -sL -A "Mozilla/5.0":
#   resmî sayfa https://www.regal-tr.com/bm-424-4-program-bulasik-makinesi-p-2445 (200; sayfada statik.vestel.com.tr/webfiles/20265511_k.pdf bağlantısı; Regal, Vestel çatısındaki marka)
#   → https://statik.vestel.com.tr/webfiles/20265511_k.pdf (200, application/pdf)
#  (R) Regal BM 424 bulaşık makinesi kullanım kılavuzu, TR, 50 s., md5 8a63ffe7ca4a6ee3cc91588253ca95eb — PDF s.7, s.33, s.34, s.35, s.43
# BİLEREK YAZILMAYANLAR: fabrika ayarına dönüş (belgede yok) · servis menüsü · kart reseti · "fişi çek N dakika bekle" (belgede yok) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Program çalışırken Başlat/Beklet düğmesini üç saniye basılı tut."
  - "Kurutma ışığı yanınca makinenin suyu yaklaşık otuz saniye tahliye etmesini bekle."
  - "Bitiş ışığı yanınca makineyi Açma/Kapama düğmesiyle kapat; yeniden açıp yeni programı seç."
  - "Yalnız programı değiştirmek istiyorsan Başlat/Beklet'e kısa bas, Program Seçim düğmesiyle yeni programı seç ve yeniden Başlat/Beklet'e bas."
  - "Düğmeler tepki vermiyorsa ve ekranda CL görünüyorsa Tablet düğmesini üç saniye basılı tutarak çocuk kilidini kapat."
  - "Ertelemeyi silmek için Erteleme düğmesiyle sıfır saate gel ya da makineyi kapat."
  - "Ekranda FF, F2 ya da başka bir kod varsa kılavuzun tablosundaki adımları uygula; kod sürerse Regal yetkili servisini ara."
faq:
  - q: "Regal bulaşık makinesinde reset tuşu hangisi?"
    a: "İncelediğimiz kılavuzda ayrı bir reset tuşu yok. Çalışan programı iptal etmek için Başlat/Beklet düğmesini üç saniye basılı tutuyorsun; makine suyu boşaltıyor, Bitiş ışığı yanınca kapatıyorsun."
  - q: "Reset sırasında hangi ışık yanar?"
    a: "Kılavuza göre iptal sırasında Kurutma ışığı yanıyor ve makine içindeki suyu yaklaşık otuz saniye boyunca tahliye ediyor. Ardından Bitiş ışığı yanıyor."
  - q: "Ekranda CL yazıyor, ne demek?"
    a: "CL çocuk kilidi. Tablet düğmesine üç saniye basılı tutunca kilit açılıp kapanıyor. Kilit devreye girince bütün LED'ler yanıp sönüyor ve CL bir kez görünüyor; kilit kapanınca bütün ışıklar ve CL iki kez yanıp sönüyor."
  - q: "Regal bulaşık makinesinde FF ne demek?"
    a: "Kılavuzda FF su giriş sistemi arızası. Musluğun açık olduğunu ve suyun aktığını kontrol etmeni, giriş hortumunu musluktan ayırıp hortum filtresini temizlemeni istiyor. Arıza sürerse servis gerekiyor. Bazı modellerde bu kod F5 olarak gösteriliyor."
  - q: "Elektrik kesilirse program silinir mi?"
    a: "Hayır. Kılavuza göre yıkama sırasında kapak açılırsa ya da güç kesilirse, kapak kapanınca ya da güç geri gelince program kaldığı yerden devam ediyor."
images:
  coverAlt: "Solo bir bulaşık makinesinin üst kenarındaki kontrol paneli ve küçük ekran"
  steps:
    - "Bulaşık makinesi panelinde başlat ve beklet düğmesi"
    - "Bulaşık makinesi panelinde yanan kurutma adımı göstergesi"
    - "Bulaşık makinesi panelinde açma kapama düğmesi"
    - "Bulaşık makinesi panelinde program seçim düğmesi ve yanan program ışıkları"
    - "Bulaşık makinesi ekranında harflerden oluşan kısa bir kilit kodu"
    - "Bulaşık makinesi panelinde saat simgeli erteleme düğmesi"
    - "Bulaşık makinesinin yanında köşe musluğu ve giriş hortumu"
---

Regal bulaşık makinen programın ortasında takıldı, yanlış programı seçtin ya da ekranda bir kod yanıyor ve "Regal bulaşık makinesi nasıl resetlenir" diye arıyorsun. Regal'in kullanım kılavuzunda ayrı bir reset tuşu yok; bu işin adı kılavuzda **"Programın iptal edilmesi"** ve tek bir düğmeyle yapılıyor: **Başlat/Beklet**. Bu yazıda Regal'in sitesindeki BM 424 bulaşık makinesi sayfasından bağlanan Türkçe kullanım kılavuzunu kullandık. Regal, Vestel çatısındaki bir marka; kılavuz da Vestel'in belge sunucusunda duruyor. Düğme adları modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Başlat/Beklet'i üç saniye basılı tut. Kurutma ışığı yanar, makine suyu yaklaşık otuz saniye boşaltır. Bitiş ışığı yanınca Açma/Kapama ile kapat. Ekranda CL varsa Tablet düğmesine üç saniye bas. FF'de musluğa ve hortum filtresine bak.

## Hangi durumda hangi yol

| Durum | Regal'in yolu | Sonuç |
|---|---|---|
| **Program takıldı ya da tamamen iptal** | Başlat/Beklet, üç saniye | Su tahliye edilir, program silinir |
| **Yalnız programı değiştirmek** | Başlat/Beklet kısa, yeni program, Başlat/Beklet | Yeni program eskinin yerine devam eder |
| **Düğmeler tepki vermiyor, ekranda CL** | Tablet düğmesi, üç saniye | Çocuk kilidi kapanır |
| **Erteleme kurulmuş** | Erteleme düğmesiyle sıfır saat ya da makineyi kapat | Erteleme iptal |
| **Ekranda FF, F2, F5…** | Kod tablosundaki adımlar | Hata durumu |

## Adım adım: Regal bulaşık makinesini resetlemek

**1. Başlat/Beklet düğmesini üç saniye basılı tut.** Kılavuzun "Programın iptal edilmesi" bölümü, program çalışırken iptal etmek istersen **Başlat/Beklet** düğmesini **üç saniye** basılı tutmanı söylüyor. Kısa basış programı başlatıyor ya da bekletiyor; iptal için düğmeyi basılı tutman gerekiyor.

**2. Tahliyeyi bekle.** Kılavuza göre iptal sırasında **Kurutma** ışığı yanıyor ve makine içindeki suyu **yaklaşık otuz saniye** boyunca tahliye ediyor. Bu sırada kapağı açma; Regal genel bir not olarak programın bitmeden kapağın açılmamasını istiyor.

**3. Bitiş ışığında kapat, yeniden başla.** **Bitiş** ışığı yanınca makineyi **Açma/Kapama** düğmesiyle kapat. Sonra makineyi yeniden açıp **Program Seçim** düğmesiyle uygun programı seç ve Başlat/Beklet'e bas. Kılavuzun bir notu var: son kullanılan programda yarım yük ya da tablet gibi ekstra bir seçenek açıksa, makine kapatılana kadar yeni seçilen programda da etkin kalıyor. Yeni programda istemiyorsan ilgili seçenek düğmesine bas.

**4. Yalnız programı değiştirmek istiyorsan.** Makine çalışırken her şeyi silmeden programı değiştirmenin yolu farklı. Başlat/Beklet düğmesine **kısa** bas; program durunca Program Seçim düğmesiyle istediğin programı seç ve Başlat/Beklet'e yeniden bas. Kılavuza göre yeni seçilen program eski programın **yerine devam ediyor**, yani baştan başlamıyor.

**5. Düğmeler tepki vermiyorsa çocuk kilidini kapat.** Kılavuzda çocuk kilidi **Tablet** düğmesine **üç saniye** basılı tutularak açılıp kapanıyor. Kilit devreye girince bütün LED'ler yanıp sönüyor ve kalan süre göstergesinde bir kez **CL** görünüyor. Kilit kapanınca bütün ışıklar ve CL iki kez yanıp sönüyor. Ekranda CL görüyorsan ya da hiçbir düğme çalışmıyorsa önce bunu dene.

**6. Ertelemeyi sil.** Programı ileri bir saate ertelediysen kılavuzun iki yolu var: **Erteleme** düğmesine basarak **sıfır saat** değerine gelmek ya da erteleme süresini seçip etkinleştirdikten sonra makineyi kapatmak. Kılavuza göre makine kapatılınca erteleme süresi iptal ediliyor.

**7. Kodlarda tablodaki adımlar.** İptal her kodu silmez. Regal'in "Basit arıza durumunda yapılması gerekenler" tablosu şöyle:

| Kod | Kılavuzdaki anlamı | Kılavuzun dediği |
|---|---|---|
| **FF / F5** (modele bağlı) | Su giriş sistemi arızası | Musluk açık mı, su akıyor mu bak; hortum filtresini temizle; sürerse servis |
| **F5** | Basınç sistemi arızası | Servis |
| **F3** | Sürekli su girişi | Musluğu kapat, servis |
| **F2** | Su tahliye edilmiyor | Hortum ve filtreler tıkalı olabilir; programı iptal et; sürerse servis |
| **F1** | Taşma | Makineyi ve musluğu kapat, servis |
| **F8, F7, F6, FE, HI, LO** | Isıtıcı, aşırı ısınma, ısıtma sensörü, elektronik kart, yüksek ve düşük voltaj | Servis |

## Elektrik kesilirse

Kılavuzun notu açık: yıkama sırasında makinenin kapağı açılırsa ya da güç kesilirse, kapak kapatıldığında ya da güç geri geldiğinde program **kaldığı yerden** devam ediyor. Yani kısa bir kesinti için reset gerekmiyor. Güç tasarrufu modu açıksa makine bir süre sonra kendiliğinden kapanıyor; ekranın sönmesi bu yüzden de olabilir.

## Ne zaman servis

- F5, F3, F1, F8, F7, F6, FE, HI ya da LO görüyorsan
- FF musluk ve hortum filtresi kontrolünden sonra da sürüyorsa
- F2 filtre temizliğinden sonra da geri geliyorsa
- Başlat/Beklet'e üç saniye bastığın hâlde tahliye başlamıyorsa ve çocuk kilidi kapalıysa

⛔ **Kendin-çöz sınırı burada biter.** İptal, program değiştirme, çocuk kilidi, erteleme ve hortum filtresi sende. Kılavuz cihazın içinde kullanıcının onarabileceği parça olmadığını, cihazın sökülmemesini ve onarım öncesi sigortanın kapatılıp musluğun kapatılmasını yazıyor; pompa, ısıtıcı, sensör ve kart Regal yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda hangi kod var?
3. Başlat/Beklet'e üç saniye bastığında Kurutma ışığı yandı mı?
4. Musluk açık, filtreler temiz mi?

Marka fark etmeksizin su alma sorunları [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/), filtre temizliği [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) sayfasında. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
