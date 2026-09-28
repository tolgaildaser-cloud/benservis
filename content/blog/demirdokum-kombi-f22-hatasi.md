---
title: "DemirDöküm kombi F22 hatası"
description: "DemirDöküm kombide F.22 tesisat basıncı çok düşük demek. Basıncı okuma, modele göre bar değeri ve doldurma; DemirDöküm kılavuzlarından."
slug: "demirdokum-kombi-f22-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi (hepsi HTTP 200); pdftotext ve pdftotext -layout ile okundu.
# Sayfa = PDF sayfası (\f ayracıyla sayıldı). Web araması yalnız ademiX/vintomiX kullanma kılavuzlarının YERİNİ bulmak için
# kullanıldı (allowed_domains: demirdokum.com.tr); hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
# Alıntı denetim tablosu: demirdokum-kombi-f22-hatasi.KAYNAK.md
# A) Nitromix P 24/28/35 NG (HEP) Kullanma Kılavuzu 0020309468_01
#    https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 16 s. · md5 3340a11b923b7332f8eb8685297970b6 (hub'ın 17 Eyl md5'iyle birebir)
#    "Isıtma sistemi dolum basıncı 0,04 MPa (0,4 bar) değerinin altına düşerse, ürün kapanır. Ekranda arıza mesajı F.22 görünür." s.12
#    soğuk sistemde 1,0-1,5 bar · <1,0 bar doldur · "Yeterince ısıtma suyu ilave ettiğinizde, gösterge kendiliğinden söner." s.12
#    doldurma sırası (termostatik vanalar → doldurma vanasını yavaşça aç → hava al → kontrol → takviye → kapat) s.12
#    F.22 "Tesisat basıncı çok düşük" / "Isıtma sisteminde yetersiz su." / "Isıtma sistemini doldurun." s.15
#    ana ekranda tesisat basıncı görünür, arızada ana ekran arıza koduna geçer s.10
# B) ademiX P24/24-AS/2, P28/28-AS/2 (H-TR) Kullanma Kılavuzu 8000037599_01
#    https://www.demirdokum.com.tr/downloads/ademix-kullanm-klavuzu-3072082.pdf
#    HTTP 200 · 16 s. · md5 49d7b83510651364a8bf6cc1fd7b654b
#    <0,5 bar doldur · gerekli 1,0-1,4 bar · doldurma adımları · "tesisat için uygun değilse yetkili bayiye" s.9
#    radyatör havası üst sol/sağ · hava tahliye anahtarı · tekrar kontrol s.10 · F. → 22 → X,X bar → XX °C s.10
#    F.22 tedbiri: dolum basıncını kontrol et + doldur s.13
# C) vintomiX P18/24-AS/1, P24/28-AS/1 Kullanma Kılavuzu 0020313925_01
#    https://www.demirdokum.com.tr/downloads/products-1/example-training-1/vintomix-kk-0020313925-01-2344252.pdf
#    HTTP 200 · 16 s. · md5 8f95c967c9b46f5954feb833fd596467
#    "Ana ekranda [tuşuna] üç kere basın" → dolum basıncı s.8 · <0,5 bar doldur s.8 · 1,0-1,4 bar s.9 · F.→22→X,X bar s.9-10 · F.22 s.12
# D) Nitromix Montaj ve Bakım Kılavuzu 0020309469_02 (servise yönelik)
#    https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf
#    HTTP 200 · 40 s. · md5 bdff16276288ebddd6c6cbf82d47c864
#    F.22 olası nedenleri: üründe su çok az/yok · su basıncı sensörü arızalı · kablo demetinde kesinti · pompaya/su basınç sensörüne giden kablo s.31
# BİLEREK yazılmayanlar:
#  - Tek bir "doğru bar" rakamı: Nitromix 1,0-1,5 · ademiX/vintomiX 1,0-1,4 · eşikler 1,0 ve 0,5 bar; yan yana verildi.
#  - Doldurma vanasının yeri (A ve B vanayı yalnız resimde/numarayla gösteriyor; tarif yok).
#  - "Basınç sürekli düşüyorsa kaçak vardır", genleşme tankı, emniyet ventili: DemirDöküm kullanma kılavuzlarında yok.
#  - F.22 için reset: kılavuzların F.22 tedbirinde reset yok.
#  - Atron Condense / Nitron Plus: bu modellerde düşük basınç kodu F10; ayrı yazı (demirdokum-kombi-f10-hatasi).
#  - Sensör/kablo/pompa kontrolü: servis işi (#31), yalnız "servisin bakacağı yerler" olarak anıldı.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Radyatör hava tahliye anahtarı"]
steps:
  - "Ekrandaki kodun F.22 olduğunu ve kombinin model adını not et."
  - "Ekranda güncel tesisat basıncını oku."
  - "Okuduğun değeri kendi modelinin kılavuzundaki basınç aralığıyla karşılaştır."
  - "Isıtma sistemindeki tüm radyatörlerin termostatik vanalarını aç."
  - "Doldurma vanasını yavaşça aç, gerekli basınca gelince kapat."
  - "Tüm radyatörlerin havasını al ve basıncı ekrandan yeniden kontrol et; gerekirse doldurma ve hava almayı tekrarla."
  - "F.22 bu adımlarla gitmiyorsa yetkili servise başvur."
faq:
  - q: "DemirDöküm kombide F22 hatası ne demek?"
    a: "DemirDöküm'ün Nitromix, ademiX ve vintomiX kullanma kılavuzlarındaki arıza tablosu F.22'yi 'Tesisat basıncı çok düşük' diye adlandırıyor; olası neden ısıtma sisteminde yetersiz su. Nitromix kılavuzuna göre ısıtma sistemi dolum basıncı 0,4 barın altına düşerse ürün kapanır ve ekranda F.22 görünür. Tedbir ısıtma sistemini doldurmaktır."
  - q: "DemirDöküm kombide basınç kaç bar olmalı?"
    a: "Modele göre değişiyor. Nitromix kılavuzu soğuk ısıtma sisteminde 1,0 ila 1,5 bar veriyor ve 1,0 barın altında doldurmanı istiyor. ademiX (AS/2) ve vintomiX kılavuzları gerekli sistem basıncını 1,0 ila 1,4 bar veriyor ve dolum basıncı 0,5 barın altındaysa doldurmanı istiyor. Isıtma sistemi birçok kata uzanıyorsa üç kılavuz da daha yüksek değer gerekebileceğini ve yetkili servise başvurulmasını yazıyor."
  - q: "Suyu doldurduktan sonra F22 kendiliğinden gider mi?"
    a: "Nitromix kılavuzuna göre yeterince ısıtma suyu ilave ettiğinde gösterge kendiliğinden söner. Kılavuzların F.22 tedbirinde reset adımı yer almıyor; tedbir ısıtma sistemini doldurmak. Arızayı bu önlemle gideremiyorsan kılavuz yetkili servise başvurmanı söylüyor."
  - q: "Kombime hangi suyu doldurmalıyım?"
    a: "DemirDöküm kılavuzları ısıtma sistemine yalnız uygun kalorifer suyu doldurulmasını istiyor; çok kireçli, aşırı korozif ya da kimyasal içeren suyun contalara ve diyaframlara zarar verebileceğini, su geçen parçaları tıkayabileceğini ve ses yapabileceğini yazıyor. Emin değilsen yetkili bayiye başvur. Kılavuza göre ilk dolumdan yetkili bayi sorumludur."
  - q: "Benim kombimin ekranında F22 değil F10 yazıyor, aynı şey mi?"
    a: "DemirDöküm'ün Atron Condense ve Nitron Plus gibi noktasız kod kullanan modellerinde yetersiz su durumu F10 koduyla gösteriliyor ve basınç aralığı farklı (1,0–2,0 bar). O modeller için DemirDöküm kombi F10 hatası yazısına bak."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmı; dijital ekranda soyut bir basınç göstergesi, altındaki borular arasında küçük bir doldurma vanası ve yanında bir radyatör"
---

DemirDöküm kombinin ekranında **F.22** görüyorsan DemirDöküm'ün kendi arıza tablosu bunu açıkça adlandırıyor: **"Tesisat basıncı çok düşük."** Olası nedeni de aynı tabloda yazılı: **"Isıtma sisteminde yetersiz su."** Nitromix kullanma kılavuzuna göre ısıtma sistemi dolum basıncı 0,4 barın altına düştüğünde ürün kendini kapatır ve bu kodu gösterir. Kılavuzun verdiği çözüm de kullanıcıya bırakılmış bir iş: ısıtma sistemini doldurmak. Bu yazıda o işi DemirDöküm'ün Nitromix, ademiX ve vintomiX kullanma kılavuzlarından, modelden modele değişen basınç değerleriyle birlikte adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F.22 = ısıtma sisteminde su yetersiz, basınç düşük. Sıra şu: ekrandaki basıncı oku → modelinin kılavuzundaki değerle karşılaştır → radyatör vanalarını aç → doldurma vanasını yavaşça aç, değere gelince kapat → radyatörlerin havasını al, basıncı yeniden kontrol et. Kod gitmiyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Kodu ve modeli not et.** DemirDöküm'de iki ayrı kod ailesi var. F.22, Nitromix, ademiX ve vintomiX gibi **noktalı kod** kullanan modellerin kodudur. Atron Condense ya da Nitron Plus kullanıyorsan aynı durum F10 olarak görünür; o modeller için [DemirDöküm kombi F10 hatası](/blog/demirdokum-kombi-f10-hatasi/) yazısına geç.

**2. Basıncı ekrandan oku.** ademiX ve vintomiX kılavuzlarına göre F.22 çıktığında ana ekran sırayla **arıza kodu, güncel su basıncı ve ısıtma gidiş sıcaklığı** arasında geçiş yapar: `F. → 22 → X,X bar → XX °C`. Ekranı bir tur izlemek basıncı görmen için yeterli. vintomiX kılavuzu basıncı ayrıca görmek için ana ekranda ilgili tuşa **üç kere** basmayı tarif ediyor; Nitromix kılavuzuna göre ana ekranda tesisat basıncı zaten görünür.

**3. Değeri kendi modelinle karşılaştır.** Kılavuzların verdiği aralık aynı değil; tablo aşağıda. Nitromix'te **1,0 barın altı**, ademiX ve vintomiX'te **0,5 barın altı** doldurma işaretidir.

**4. Radyatör vanalarını aç.** Üç kılavuzun doldurma tarifi de aynı adımla başlıyor: ısıtma sistemindeki **tüm radyatör termostatik vanalarını** aç.

**5. Doldurma vanasını yavaşça aç.** Doldurma vanasını **yavaşça** aç, göstergede gerekli sistem basıncına ulaşana kadar su doldur ve **vanayı kapat**. ademiX ve vintomiX kılavuzları doldurmanın tesisatın gerçek yapısına bağlı olduğunu, bu adımlar senin tesisatına uygun değilse yetkili bayiye başvurmanı yazıyor.

**6. Havayı al, basıncı yeniden kontrol et.** Tüm radyatörlerin havasını al. ademiX ve vintomiX kılavuzlarına göre hava, radyatörün **üst sol ya da sağ tarafındaki** bağlantı noktasından alınır; bunun için bir hava tahliye anahtarı kullanılabilir. Ardından basıncı ekrandan yeniden kontrol et; gerekirse doldurma ve hava alma adımlarını tekrarla. Nitromix kılavuzuna göre yeterince su eklediğinde uyarı kendiliğinden söner.

**7. Gitmiyorsa servis.** Nitromix kılavuzunun cümlesi net: hatayı belirtilen önlemlerle gideremiyorsan **yetkili servise başvur.**

## F.22 tam olarak ne diyor

DemirDöküm'ün üç kullanma kılavuzundaki arıza tablosu aynı satırı veriyor:

| Kod / Anlamı | Olası neden | Tedbir |
|---|---|---|
| **F.22** — Tesisat basıncı çok düşük | Isıtma sisteminde yetersiz su | Dolum basıncını kontrol et, ısıtma sistemini doldur |

Nitromix kılavuzu buna eşiği ekliyor: dolum basıncı **0,04 MPa (0,4 bar)** değerinin altına düşerse **ürün kapanır** ve ekranda F.22 görünür. Yani kombi arızalandığı için değil, **basınç yetersiz kaldığı için kendini durdurdu.**

## Kaç bar olmalı? Modeline göre değişiyor

| Kılavuz | Olması gereken | Doldurma işareti |
|---|---|---|
| **Nitromix** | Soğuk ısıtma sisteminde **1,0–1,5 bar** | 1,0 barın altı |
| **ademiX (AS/2)** | Gerekli sistem basıncı **1,0–1,4 bar** | 0,5 barın altı |
| **vintomiX** | Gerekli sistem basıncı **1,0–1,4 bar** | 0,5 barın altı |

➡️ Nitromix kılavuzu 1,0–1,5 bar aralığını **soğuk ısıtma sistemi** için veriyor.

📌 **Çok katlı tesisat:** Üç kılavuz da ısıtma sistemi birçok kata uzanıyorsa dolum basıncı için **daha yüksek değerler gerekebileceğini** yazıyor. Bu durumda doğru değeri yetkili servise sor.

## Hangi suyu, kim dolduruyor?

DemirDöküm kılavuzları ısıtma sistemine yalnız **uygun kalorifer suyu** doldurulmasını istiyor. Uyarıya göre çok kireçli, aşırı korozif ya da kimyasal içeren su contalara ve diyaframlara zarar verir, üründe ve tesisatta su geçen parçaları tıkar ve ses yapar. Kılavuza göre **ilk dolumdan yetkili bayi sorumludur**; senin yaptığın, eksilen suyu tamamlamaktır.

## Servisin bakacağı yerler

DemirDöküm'ün servise yönelik Nitromix montaj ve bakım kılavuzu F.22'nin olası nedenlerini daha geniş sayıyor: üründe suyun çok az ya da hiç olmaması, **su basıncı sensörünün arızalı olması**, kablo demetinde kesinti ve pompaya ya da su basınç sensörüne giden kablonun gevşek, takılı değil ya da arızalı olması. Birincisi doldurmayla giderilir; diğerleri ölçüm ve parça işidir.

Kullanma kılavuzlarının genel uyarısı da aynı yönde: güvenlik tertibatları çıkarılmaz, köprülenmez; üründe, gaz, su ve elektrik hatlarında değişiklik yapılmaz. Nitromix kılavuzu ayrıca kullanıcıdan **yalnız kullanma kılavuzunda belirtilen çalışmaları** yapmasını istiyor.

⛔ **Kendin-çöz sınırı burada biter:** basıncı okumak, radyatör vanaları, doldurma vanası ve radyatör havası sende; kombinin kapağının arkası servisin.

## Servisi aramadan önce iki dakikalık özet

- Ekrandaki kod F.22 mi, model adı ne?
- Ekranda okunan basınç kaç bar?
- Doldurma sonrası basınç kılavuzdaki aralığa geldi mi?
- Radyatörlerin havası alındı mı, ardından basınç yeniden kontrol edildi mi?
- Tesisat birden fazla kata yayılıyor mu?

Bu beşine cevabın varsa servise somut bir tablo anlatabilirsin. DemirDöküm'ün diğer kodları ve iki kod ailesi arasındaki farklar için [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) yazısına, ateşleme kodu için [DemirDöküm kombi F28 hatası](/blog/demirdokum-kombi-f28-hatasi/) yazısına bakabilirsin. Basınç konusunun genel çerçevesi [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
