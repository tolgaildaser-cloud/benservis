---
title: "Samsung bulaşık makinesi 5C hatası: tahliye sorunu ve evde yapılacaklar"
description: "Samsung bulaşık makinesinde 5C (5E) tahliye sorunu demek. Kılavuzdaki filtre temizliği, boşaltma hortumu kontrolü, sıfırlama ve servis sınırı."
slug: "samsung-bulasik-makinesi-5c-hatasi"
date: "2026-09-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-24 PAZ. #88: bilgiler YALNIZ Samsung'un kendi belgelerinden; web araması yalnız belgelerin yerini bulmak için.
# (1) Kod tanımı — Samsung Türkiye "Bulaşık Makinesi Hakkında SSS" https://www.samsung.com/tr/home-appliances/faq-dishwasher/
#     HTTP 200, ham HTML md5 cbeee153… : "5C/5E: Tahliye sorunları · 4C/4E: Su tedariki sorunları · 1C: Düşük su seviyesi …"
# (2) Kılavuz DW5500MM (DW60M5052F* / DW60M5062F* / DW60M5042F* / DW60M5050BB), DD81-02615C-11, TR, 2024-11-08
#     org.downloadcenter.samsung.com (DW60M5052FW destek sayfasından), md5 2ad54a56… — kullanılan bölümler:
#     s.37-38 "Filtre" (her ay; 7 adım: alt sepet → kolu saat yönünün tersine → kaba + mikro filtre → durula, kurula → geri tak → saat yönünde kilitle; "gevşek kapak filtreleme performansını düşürebilir")
#     s.38 "Fişi prizden çıkarma: Temizlikten veya bakım gerçekleştirmeden önce, fişi prizden mutlaka çıkarın."
#     s.43-44 boşaltma hortumu: bükülmemeli/sıkışmamalı · üst kısmı 30-80 cm · boru çapı min. 4 cm · serbest uç suya batırılmamalı · uzatma en fazla 4 m
#     s.12 "Sıfırla: BAŞLAT 3 sn basılı tut → program iptal, su boşaltılır"
#     s.56 bilgi kodları NOTU: "Herhangi bir bilgi kodu ekranda görünmeye devam ederse yerel bir Samsung servis merkezine başvurun."
#     ⚠️ Bu kılavuzun kod tablosunda 5C YOK (LC·4C·AC·HC·tC·PC·bc2); DW5000H (DW60H5050, 2017, md5 7c65d2a4…) tablosunda da yok (4E·HE·LE·tE).
#     → Yazı bunu gizlemiyor: kod tanımı SSS'den, adımlar kılavuzun bakım/kurulum bölümlerinden.
# Samsung'un "tabanda su birikiyor" destek sayfası 24 Eyl'de /support/contact/'a yönleniyor → KAYNAK ALINMADI.
# Kaynak dosyalar: blog-taslaklar/kaynak-samsung-5c/
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Havlu", "Sığ bir kap"]
steps:
  - "Programı iptal etmek ve suyu boşaltmayı denemek için BAŞLAT düğmesini üç saniye basılı tut."
  - "Makineyi kapat ve fişini prizden çıkar."
  - "Kapağı aç, alt sepeti çıkar; tabanda su varsa altına havlu ser."
  - "Filtre kolunu saat yönünün tersine çevirip kaba filtreyi, ardından alttaki silindirik mikro filtreyi çıkar."
  - "İki filtredeki kiri ve artıkları al, akan suyun altında durula ve kurula."
  - "Önce mikro filtreyi, sonra kaba filtreyi tak; kolu saat yönünde çevirerek kilitle."
  - "Boşaltma hortumunu izle: bükülme ya da sıkışma olmasın, ucu suya batmasın."
  - "Fişi tak, programı yeniden başlat; kod sürerse Samsung servisine başvur."
faq:
  - q: "Samsung bulaşık makinesinde 5C hatası ne demek?"
    a: "Samsung, 5C'yi (bazı modellerde 5E) tahliye sorunu olarak tanımlıyor: makine içindeki suyu boşaltmakta sorun yaşıyor. Evde bakılacak yerler kılavuzun bakım bölümünde anlatılan filtre ve kurulum bölümündeki boşaltma hortumudur."
  - q: "5C ile 5E aynı şey mi?"
    a: "Samsung'un Türkiye destek sayfasındaki kod listesinde iki kod birlikte, 5C/5E olarak ve aynı anlamla, tahliye sorunları başlığıyla geçiyor. Ekranda hangisini görürsen gör aynı kontrolleri yapabilirsin."
  - q: "Kullanım kılavuzumda 5C yazmıyor, neden?"
    a: "İncelediğimiz iki Samsung kılavuzunun bilgi kodu tablosunda 5C yer almıyor; tablo modele göre farklı kodlar listeliyor. Kodun tanımını Samsung'un kendi destek sayfasındaki genel listeden aldık. Kendi modelinin kılavuzunda farklı bir açıklama varsa o geçerlidir."
  - q: "Filtreyi ne sıklıkla temizlemeliyim?"
    a: "Samsung kılavuzu filtrenin her ay temizlenmesini öneriyor. Kaba filtrenin yerine tam oturup kilitlenmesi de önemli; kılavuza göre gevşek kalan bir kapak filtreleme performansını düşürebilir."
  - q: "Ne zaman servis çağırmalıyım?"
    a: "Filtreler temiz, boşaltma hortumu düzgün ve kod yine de ekrana geliyorsa. Samsung'un kılavuzu herhangi bir bilgi kodu ekranda görünmeye devam ederse yetkili bir Samsung servis merkezine başvurulmasını söylüyor. Makinenin içindeki parçalar kullanıcı bakımına dahil değildir."
images:
  coverAlt: "Kapağı açık bir bulaşık makinesinin önünde tezgâha serilmiş havlu ve üzerinde duran silindirik bir filtre"
---

Makine programı tamamlayamadı ve ekranda **5C** yazıyor. Bazı Samsung modellerinde aynı durum **5E** olarak görünür. Samsung bu kodu **tahliye sorunu** olarak tanımlıyor: makine, içindeki suyu boşaltmakta sorun yaşıyor.

Evde bakılacak yerler belli ve ikisi de Samsung'un kendi kılavuzunda anlatılıyor: makinenin tabanındaki **filtre** ve arkadaki **boşaltma hortumu**.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 5C / 5E = tahliye sorunu. Sıra: BAŞLAT'ı 3 saniye basılı tutup programı iptal et → fişi çek → kaba ve mikro filtreyi çıkar, temizle, kilitleyerek geri tak → boşaltma hortumunda bükülme ya da sıkışma var mı bak → yeniden dene. Kod sürerse servis.

## 5C'nin anlamı: Samsung ne diyor?

Samsung Türkiye'nin bulaşık makinesi destek sayfasındaki kod listesi şöyle:

| Kod | Samsung'un tanımı |
|---|---|
| **5C / 5E** | Tahliye sorunları |
| 4C / 4E | Su tedariki sorunları |
| 1C | Düşük su seviyesi kontrolü |
| LC / LE | Sızıntı sorunları |
| HC / HE | Yüksek sıcaklıkta ısıtma kontrolü |

Bir not: incelediğimiz iki Samsung kullanım kılavuzunun bilgi kodu tablosunda 5C **yer almıyor**; tablolar modele göre farklı kodlar listeliyor. Kodun tanımını bu yüzden Samsung'un genel destek listesinden veriyoruz. Kendi modelinin kılavuzunda farklı bir açıklama varsa o geçerlidir.

Diğer kodların karşılıkları için [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/) yazımıza bakabilirsin. Su **girmiyorsa** konu 5C değil, [4C](/blog/samsung-bulasik-makinesi-4c-hatasi/) olur.

## Adım adım: evde denenecekler

**1. Programı iptal et.** Samsung kılavuzuna göre çalışan bir programı iptal etmek ve makinenin suyunu boşaltmak için **BAŞLAT** düğmesini **üç saniye** basılı tutarsın. Makine suyu atabiliyorsa taban boşalır; atamıyorsa su durmaya devam eder, bu da bir bilgi.

**2. Fişi çek.** Kılavuz açık: temizlik ya da bakım yapmadan önce **fişi prizden mutlaka çıkar.**

**3. Alt sepeti çıkar.** Kapağı aç, alt sepeti dışarı al. Tabanda su varsa önüne havlu ser; filtreyi çıkarırken bir miktar su gelebilir.

**4. Filtreleri çıkar.** Filtre kolunu **saat yönünün tersine** çevirerek kaba filtrenin kilidini aç. Önce kaba filtreyi, sonra alttaki **silindirik mikro filtreyi** çıkar.

**5. Temizle.** İki filtredeki kiri ve yemek artıklarını al, akan suyun altında durula ve iyice kurula.

**6. Geri tak ve kilitle.** Önce mikro filtreyi, sonra kaba filtreyi yerine tak; kolu **saat yönünde** çevirerek kilitle. Kılavuz burada ayrıca uyarıyor: kaba filtre düzgün kapanmazsa, gevşek kalan kapak filtreleme performansını düşürebilir.

**7. Boşaltma hortumunu kontrol et.** Makinenin arkasından çıkan boşaltma hortumunu gözünle takip et: dolap arkasında **bükülmüş** ya da bir şeyin altında **sıkışmış** olmasın. Hortumun serbest ucu, bağlandığı yerde **suya batmış** olmamalı.

**8. Yeniden dene.** Fişi tak ve programı yeniden başlat. Program ilerliyor ve kod gelmiyorsa evde yaptığın bakım işe yaramış demektir.

⚠️ Bu adımların hepsi kılavuzda kullanıcıya bırakılan bakım işleridir. Makinenin içini sökmek, pompaya ya da kart tarafına müdahale etmek bu listenin dışındadır.

## Filtreyi ne sıklıkla temizlemeli?

Samsung kılavuzu filtrenin **her ay** temizlenmesini öneriyor. 5C ekrana gelmeden de bu bakımı takvime koymak, filtrede kir ve artık birikmesinin önüne geçer. Temizlik sonrası kaba filtrenin kolunu saat yönünde çevirip **kilitlemeyi** unutma; kılavuza göre gevşek kalan kapak filtreleme performansını düşürebilir.

Filtre temizliğini adım adım, görsellerle anlattığımız ayrı bir yazımız var: [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/).

## Boşaltma hortumu: kurulumda nelere dikkat edilmeli?

Makine yeni taşındıysa ya da yeri değiştiyse, boşaltma hortumunun kurulumunu kılavuzun ölçüleriyle karşılaştırmak iyi olur. Samsung kılavuzunun kurulum bölümü şunları söylüyor:

- Boşaltma hortumu **bükülmemeli ve sıkışmamalı.**
- Hortumun **üst kısmı** zeminden **30 ile 80 cm** arasında bir yükseklikte olmalı.
- Hortumun bağlandığı boşaltma borusunun çapı en az **4 cm** olmalı.
- Hortumun serbest ucu **suya batırılmamalı** (geri akışı önlemek için).
- Uzatma gerekirse benzer boyut ve kalitede hortum kullanılmalı; hortum **4 metreden uzun** olmamalı.

Hortumun yüksekliğini ya da bağlantısını değiştirmek gerekiyorsa bu bir kurulum işidir; emin değilsen kurulumu yapan servise ya da montaj ustasına bırak.

## Ne zaman servis çağırmalısın?

Filtreler temiz ve doğru kilitli, hortum düzgün, ama 5C yine de ekrana geliyorsa evde yapılacak iş bitmiştir. Samsung'un kılavuzu, herhangi bir bilgi kodu ekranda görünmeye devam ederse **yetkili bir Samsung servis merkezine** başvurulmasını söylüyor.

Makinenin içindeki parçalar (kılavuzda kirli suyu boşaltan **boşaltma pompası** da bunlardan biri) kullanıcı bakımına dahil değildir. Servisi çağırırken ekrandaki kodu (5C ya da 5E), makinenin model adını ve hangi adımları denediğini söylemen teşhisi hızlandırır.

## Kısaca

5C, Samsung bulaşık makinesinin suyu boşaltmakta sorun yaşadığını söylüyor. Evde yapabileceklerin kılavuzun kendi sınırları içinde: programı iptal et, fişi çek, filtreleri temizleyip kilitle, hortumu kontrol et. Bunlar sonuç vermezse iş servisin. Markadan bağımsız genel tahliye kontrollerini görmek istersen [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) yazımıza da bakabilirsin.
