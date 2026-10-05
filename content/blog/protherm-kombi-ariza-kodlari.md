---
title: "Protherm kombi arıza kodları"
description: "Protherm kombide F.22, F10, F.28, F04, F05 ve ekrandaki rE ne demek? Puma, Lynx ve Gepard Condens kullanma kılavuzlarındaki arıza tablosu."
slug: "protherm-kombi-ariza-kodlari"
date: "2026-10-05"
category: "Kombi"
faq:
  - q: "Protherm kombide F.22 ne demek?"
    a: "Isıtma sisteminde su yetersiz, yani tesisat basıncı çok düşük demek. Puma Condens kılavuzu kodu Tesisat basıncı çok düşük diye adlandırıyor; Lynx Condens kılavuzu aynı kodu sistem basıncı yeterli değil satırında veriyor. İki kılavuzun tedbiri de aynı: önce ekrandan dolum basıncını kontrol et, sonra ısıtma sistemini doldur. Lynx kılavuzu ekliyor: basınç düşmesi sık yaşanıyorsa yetkili bayiye başvur."
  - q: "Protherm Gepard kombide F10 hatası ne demek?"
    a: "Gepard Condens kılavuzunda F10 ısıtma sisteminde yetersiz su anlamına geliyor; kılavuz ayrıca tesisat basıncı müsaade edilen aralığın dışındaysa ekranda F10 görüntülendiğini yazıyor. Puma ve Lynx'teki F.22'nin Gepard'daki karşılığıdır. Sistem basıncı 0,80 barın altındaysa kılavuz ısıtma sistemini doldurmanı istiyor; hedef aralık 1,0 ile 2,0 bar."
  - q: "Protherm kombide F.28 hatası nasıl düzelir?"
    a: "F.28 ateşleme başarısız demek: kombi arka arkaya ateşleme denemesinde alev alamamış ve arıza konumuna geçmiştir. Puma Condens kılavuzu önce gaz kesme vanasının açık olup olmadığını kontrol etmeni, sonra ürün arızasını gidermeni (açma/kapama tuşuna 3 saniyeden uzun basmak) söylüyor. Lynx Condens kılavuzu reset tuşuna basınca ürünün yeni bir ateşleme denemesi yaptığını yazıyor. Puma kılavuzu ateşleme arızasını gideremiyorsan, Lynx kılavuzu üç arıza giderme denemesiyle gideremiyorsan yetkili servise başvurmanı istiyor."
  - q: "Protherm kombi ekranında rE yazıyor, ne demek?"
    a: "rE, Puma Condens'te kombiyi resetlediğinde ekranda görünen ifadedir; bir arıza kodu değildir. Kılavuza göre ana ekranda açma/kapama düğmesine 3 saniyeden uzun basarak ürünün arızalarını giderirsin ve ekranda rE görüntülenir. Bu en fazla beş kez yapılabilir. Beşinci denemeden sonra rE hızlı yanıp söner; yanıp sönmeyi durdurmak ve ürünü yeniden başlatmak için düğmeye basılır."
  - q: "Protherm kombide F05 ne anlama geliyor?"
    a: "Gepard Condens kılavuzunda F05, atık gaz hattında bir arıza olduğunu gösterir. Bu kodda kılavuz kullanıcıya bir adım vermiyor; tedbir sütununda yalnız arızanın yetkili servis tarafından giderilmesini sağlayın yazıyor. Reset ya da su doldurma bu kodun çözümü değildir."
  - q: "Protherm kombi kaç kez resetlenebilir?"
    a: "Modele göre değişiyor. Puma Condens'te açma/kapama düğmesiyle arıza giderme en fazla beş kez yapılabiliyor. Lynx Condens ve Gepard Condens kılavuzları ateşleme arızasını üç arıza giderme denemesiyle gideremiyorsan yetkili servise başvurmanı söylüyor. Sınırı aşıp tekrar tekrar resetlemek kılavuzun tarif ettiği bir yol değildir."
  - q: "Protherm kombimdeki kod bu listede yok, ne yapmalıyım?"
    a: "Protherm'in kullanma kılavuzları kullanıcıya yalnız birkaç kodu açıklıyor: Puma ve Lynx'te F.22 ile F.28, Gepard'da F10, F04 ve F05. Ekranında başka bir kod varsa kullanıcının yapacağı bir adım kılavuzda tanımlı değil demektir. Lynx kılavuzunun genel kuralı şu: ürünün bir arıza kodu gösteriyorsa yetkili bayiye başvur. Kodu ekranda gördüğün gibi not et ve servise bu kodla ulaş."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin dijital ekranında F harfiyle başlayan bir kod, altında basınç değerini gösteren gösterge ve ekrana bakan bir kişinin eli"
# --- Provenans (yayında görünmez) ---
# 2026-10-05 PAZ alt ajanı (#159 trafik testi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Protherm'in kendi alan adından indirildi, hepsi HTTP 200, hepsi gerçek PDF.
# Puma ve Lynx belgelerinin bağlantıları protherm.com.tr ürün sayfalarından (yogusmali-kombiler/protherm-puma-condens, yogusmali-kombiler/lynx-condens) bu koşuda okundu.
# Hiçbir satır web aramasından, forumdan ya da servis sitesinden alınmadı. Okuma pdftotext -layout; sayfa no = PDF sayfası (basılı sayfa no ile aynı, tek tek doğrulandı).
# Yerel kopya: blog-taslaklar/2026-10-05/kaynak-protherm/
#  (P2) Puma Condens 24/24, 28/28 MKV-AS/2 (H-TR) kullanma kılavuzu 8000037577_02 (25.09.2025), 16 s., md5 a132a92b1c90a1fe3a04fb6af89ea575
#       https://www.protherm.com.tr/_temp/protherm-puma-condens-kullanma-kilavuzu.pdf
#  (P1) Puma Condens 18/24 MKV-AS/1 kullanma kılavuzu 0020289282_02, 16 s., md5 ef689d0d0cd29a076485d66f769ceee4
#       https://www.protherm.com.tr/_temp/protherm-puma-condens-kullanma-kilavuzu-18-24.pdf
#  (L)  Lynx Condens 24 kW, 28 kW kullanma kılavuzu 0020277896_02, 20 s., md5 a062e2f5414dde91e8e73afb33559a11
#       https://www.protherm.com.tr/_temp/7ba8cc34-c05a-44d9-90c1-607f1a2c579d.pdf
#  (G)  Gepard Condens 20/24 KTV-FC/3 (H-TR) kullanma kılavuzu 0020281180_03, 16 s., md5 e007ac08696eee927eb59ddd827dfb63
#       https://www.protherm.com.tr/_temp/c2f54fd4-f5ad-4a4c-a6a3-195cd32bb5f9.pdf
# Satır → sayfa eşlemesi ve alıntı denetimi: protherm-kombi-ariza-kodlari.KAYNAK.md
# BİLEREK YAZILMAYANLAR: montaj/bakım kılavuzundaki servis kodları (kullanıcı belgesi değil) · radyatör hava alma adımı (Ek B tabloları havayı servise veriyor) · F05/atık gaz için herhangi bir kullanıcı adımı · gaz hattı/brülör/elektrik müdahalesi · fiyat.
---

Protherm kombinin ekranında **F** ile başlayan bir kod var. Bu yazıdaki her satır Protherm'in kendi kullanma kılavuzlarındaki arıza tablosundan alındı: **Puma Condens**, **Lynx Condens** ve **Gepard Condens**.

Baştan bilmen gereken iki şey var. Birincisi, Protherm'in kullanma kılavuzları kullanıcıya **yalnız birkaç kodu** açıklıyor; servis kodlarının tamamı bu listede yok. İkincisi, **aynı arıza modele göre farklı kodla** görünebiliyor: Puma ve Lynx'te düşük basınç **F.22**, Gepard'da **F10**.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⛔ **Önce sınır.** Kombi gazlı bir cihaz. Bu yazı yalnız kılavuzun **kullanıcıya bıraktığı** adımları anlatır: basıncı okumak, su doldurmak, gaz kesme vanasının açık olduğuna bakmak ve reset. Puma Condens kılavuzunun uyarısı açık: *"Hatalı tamir nedeniyle ölüm tehlikesi"*. Kapağın arkası, brülör, baca ve elektrik bağlantıları **yetkili servisin** işidir.

## Protherm arıza kodları tablosu

| Kod | Model | Kılavuzdaki anlamı | Kılavuzun kullanıcıya verdiği adım |
|---|---|---|---|
| **F.22** | Puma Condens | Tesisat basıncı çok düşük; ısıtma sistemindeki su yetersiz | Dolum basıncını kontrol et, ısıtma sistemini doldur |
| **F.22** | Lynx Condens | Sistem basıncı yeterli değil; ısıtma sisteminde yetersiz su | Isıtma sistemini doldur; basınç sık düşüyorsa yetkili bayi |
| **F10** | Gepard Condens | Isıtma sisteminde yetersiz su; tesisat basıncı izin verilen aralığın dışında | Isıtma sistemini doldur |
| **F.28** | Puma Condens | Ateşleme başarısız; arka arkaya üç başarısız ateşleme denemesinden sonra arıza konumu | Gaz kesme vanası açık mı bak, arızayı gider (reset), kalkmazsa yetkili servis |
| **F.28** | Lynx Condens | Arka arkaya beş başarısız ateşleme denemesinden sonra arıza konumu | Reset tuşuna bas; üç denemede kalkmazsa yetkili servis |
| **F04** | Gepard Condens | Doğalgazda üç, sıvı gazda bir başarısız ateşleme denemesinden sonra arıza konumu | Reset tuşuna bas; üç denemede kalkmazsa yetkili servis |
| **F05** | Gepard Condens | Atık gaz hattında bir arıza mevcut | Kullanıcı adımı yok: yetkili servis |

Tabloyu iki gruba ayırarak okumak işini kolaylaştırır: **su tarafı** (F.22, F10) çoğu zaman senin çözebileceğin bir durum; **yanma tarafı** (F.28, F04, F05) ise kılavuzun sana yalnız bir-iki deneme hakkı verdiği, sonrasını servise bıraktığı bir durum.

## F.22 ve F10: basınç düşük

İki kod aynı şeyi söylüyor: ısıtma sisteminde su az. Kılavuzların tedbiri de aynı: **önce basıncı oku, sonra doldur.**

**Basıncı okumak.** Puma Condens'te kılavuzun gösterdiği tuşa ana ekranda **üç kez** basınca güncel dolum basıncı görünür ve ekrandaki sembol yanıp söner. Puma kılavuzu ayrıca F.22 varken ekranın kendiliğinden kod, basınç ve sıcaklık arasında geçiş yaptığını yazıyor: *"F. → 22 → X,X bar → XX °C"*. Lynx ve Gepard'da basınç zaten ana ekranda gösteriliyor.

**Ne zaman doldurulur, hedef kaç bar?** Değerler modele göre farklı:

| Model | "Doldur" eşiği | Kılavuzdaki hedef / aralık |
|---|---|---|
| Puma Condens | Dolum basıncı 0,5 barın altında | 1,0 – 1,4 bar |
| Lynx Condens | Basınç çok düşükse | Ayda bir kontrol: 0,5 – 2,7 bar arasında olmalı |
| Gepard Condens | Sistem basıncı 0,80 barın altında | 1,0 – 2,0 bar |

Puma ve Gepard kılavuzlarının ortak notu: ısıtma sistemi **birden fazla kata** uzanıyorsa daha yüksek basınç gerekebilir; doğru değeri yetkili servise sor.

Doldurma vanasının yeri ve adım adım doldurma sırası modele göre değiştiği için ayrı bir yazıda anlattık: [Protherm kombi F22 hatası](/blog/protherm-kombi-f22-hatasi/). Lynx kılavuzunun sınırı burada da geçerli: *"Basınç düşmesi sık yaşanıyorsa, yetkili bayiye başvurun."* Sürekli su eklemek gerekiyorsa sorun basınçta değil, basıncın neden düştüğündedir.

## F.28 ve F04: ateşleme başarısız

Bu iki kod kombinin alev alamadığını söyler. Kombi belirli sayıda denedikten sonra kendini **arıza konumuna** alır. Deneme sayısı kılavuzlarda farklı: Puma'da üç, Lynx'te beş, Gepard'da doğalgazda üç ve sıvı gazda bir.

Kılavuzların sana bıraktığı adımlar şunlar, bu sırayla:

1. **Gaz kesme vanası açık mı?** Puma Condens tablosunun F.28 için ilk adımı bu. Vanayı açık bulursan dokunmana gerek yok.
2. **Reset.** Lynx ve Gepard'da reset tuşuna basılır; Lynx kılavuzu *"Ürün yeni bir ateşleme denemesi yürütür."* diyor. Puma'da reset açma/kapama düğmesiyle yapılır (aşağıda).
3. **Kalkmıyorsa servis.** Lynx ve Gepard'ın ortak cümlesi: *"Ateşleme arızasını üç arıza giderme denemesi ile gideremiyorsanız, yetkili servise başvurun."*

Ateşleme arızasının nedenini aramak, gaz hattına ya da brülöre müdahale etmek kılavuzun kullanıcıya verdiği bir adım değildir.

## Ekranda rE: Puma Condens'te reset

**rE** bir arıza kodu değil; Puma Condens'i resetlediğinde ekranda görünen ifade. Kılavuzdaki sıra:

- Ana ekranda açma/kapama düğmesine **3 saniyeden uzun** bas. Ekranda **rE** görünür.
- Bu en fazla **beş kez** yapılabilir.
- Beşinci denemeden sonra **rE hızlı yanıp söner.** Yanıp sönmeyi durdurmak ve ürünü yeniden başlatmak için düğmeye bas.

Beş denemede kalkmayan bir arıza için kılavuzun yönü yine aynı: belirtilen önlemlerle gideremiyorsan **yetkili servise başvur.**

## F05: atık gaz hattı

Bu kod yalnız Gepard Condens kılavuzunda var: *"Atık gaz hattında bir arıza mevcut"*. Tedbir sütununda kullanıcıya hiçbir adım yok; kılavuz yalnız arızanın **yetkili servis tarafından** giderilmesini istiyor. Reset ya da su doldurmak bu kodun çözümü değildir.

## Gaz ya da atık gaz kokusu alırsan

Bu durum bir ekran kodu değil, ama Puma Condens kılavuzunun güvenlik bölümünde açıkça yazıyor. **Gaz kokusu** varsa kılavuzun sırası özetle şöyle: gaz kokan yerde kalma, mümkünse kapı ve pencereleri aç, açık alevden uzak dur, sigara içme, elektrik şalterlerine, prizlere, zile ve telefona dokunma, gaz sayacının ya da ana kapatma düzeneğinin vanasını kapat, diğer sakinleri uyar, binayı hemen terk et; dışarıdan itfaiyeyi, polisi ve gaz şirketinin acil birimini ara.

**Atık gaz kokusu** varsa: kapı ve pencereleri aç, ürünü kapat, yetkili servisi ara.

## Bu liste hangi Protherm kombiler için geçerli

Tablo şu dört kullanma kılavuzundan alındı:

- **Puma Condens 24/24 MKV-AS/2** ve **28/28 MKV-AS/2** (2025 tarihli kılavuz)
- **Puma Condens 18/24 MKV-AS/1**
- **Lynx Condens 24 kW** ve **28 kW**
- **Gepard Condens 20 KTV-FC/3** ve **24 KTV-FC/3**

Diğer Protherm modellerinde kodlar ve anlamları farklı olabilir. Modelini kombinin **tip etiketinden** doğrula; Protherm'in kılavuzlarına göre Lynx'te tip etiketi ürünün yan tarafında; Puma'da seri numarası ön kapağın alt tarafında ve cihaz tip etiketinde.

Ekranında bu tabloda olmayan bir kod varsa, kullanıcının yapabileceği bir adım kılavuzda tanımlı değil demektir. Lynx kılavuzunun genel kuralı: *"Ürününüz bir arıza kodu (F.xx) gösteriyorsa, yetkili bayiye başvurun."*

## Kod yokken kombi çalışmıyorsa

Kılavuzların tablosunda kodsuz satırlar da var: gaz kesme vanaları kapalı, soğuk su vanası kapalı, binada elektrik kesik, kombi kapalı ya da sıcaklık çok düşük ayarlı. Bu kontrol sırasını [Protherm kombi çalışmıyor](/blog/protherm-kombi-calismiyor/) yazısında modellere göre anlattık.

Basıncın genel olarak kaç bar olması gerektiğini [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/), basıncın neden düştüğünü [kombi basınç düşüyor](/blog/kombi-basinc-dusuyor/) yazısında bulabilirsin. Başka markadaysan [kombi arıza kodları](/blog/kombi-ariza-kodlari/) derlemesine bak.

## Servisi ararken ne söylemelisin

1. **Ekrandaki kod**, gördüğün gibi: F.22 ile F10, F.28 ile F04 farklı modellerin kodlarıdır.
2. **Model adı**: tip etiketinden.
3. **Kaç kez resetlediğin** ve sonuç.
4. **Ekrandaki basınç değeri.**

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
