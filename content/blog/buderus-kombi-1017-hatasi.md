---
title: "Buderus kombi 1017 ve 2971 hatası"
description: "Buderus GB022i ve GB122i'de 1017 su basıncı çok düşük, 2971 çalışma basıncı çok düşük demek. Basınç, radyatör havası ve reset adım adım."
slug: "buderus-kombi-1017-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF'ler pdftotext -layout ile okundu, sayfa no \f ayracına göre.
# Alıntı denetim tablosu: buderus-kombi-1017-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: 1017 ve 2971 aynı iki modelin (GB122i, GB022i) listesinde, ikisi de düşük basınç; 2971'in çözümü
#   1017'ninkine "önce ısıtma tesisatının havasını al" adımını ekliyor. İki ayrı sayfa birbirinin tekrarı olurdu.
# K1) Buderus TR "1017 Arıza Kodu" · https://www.buderus.com/tr/tr/hizmetler/ariza-kodlari-ve-coezuemleri/1017-ariza-kodu/
#     HTTP 200 · 128.342 B · md5 c7cf660b1fd59a2e5889b8ef2bf81954
#     Birebir: "Su basıncının çok düşük olması" | "Öncelikle su basıncını kontrol ediniz ve gerekir ise öngörülen basınca
#     ulaşılana kadar su ilave ediniz."
# K2) Buderus TR "2971 Arıza Kodu" · .../2971-ariza-kodu/ · HTTP 200 · 128.813 B · md5 f3a5b14293cd51c09d4c1ea8a79ff60e
#     Birebir: "Çalışma basıncının çok düşük olması" | "Isıtma tesisatının havasını alınız. Su basıncını kontrol ediniz ve
#     gerekir ise öngörülen basınca ulaşılana kadar su ilave ediniz."
# K3) Dizin sayfası md5 ff763f86f479cd5ba6b5c8935ee0960a — GB122i ve GB022i listesi: 227 · 356 · 1017 · 2971 · 2972
# B1) Logamax plus GB022i-20 KD H Kullanma Kılavuzu 6721835260 (2021/03)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835260.pdf
#     HTTP 200 · 577.309 B · 16 s. · md5 285eeb793f4a256196ab942d187cff31
#     Gaz kokusu s.3 · dış sacı sökme / yetkili servis s.4 · sık su = kaçak s.5 · manometre Res.1 [9] s.7 ·
#     H sembolü + örnek kod 214 + iki reset yolu + servis + tip etiketi "kumanda paneli kapağındaki" s.11 ·
#     "İşletme basıncı normal durumlarda 1 ila 2 bar" + manometreden oku + doldurma tesisata göre farklı/servisten göstermesini iste +
#     yalnız soğukken, maks. gidiş 40 °C + 3 bar + "Radyatör dengesiz ısındığında: Radyatörlerin havasını alın" s.12
# B2) Logamax Plus GB122i.2-24 KD H Kullanma Kılavuzu 6721843895 (2023/04)
#     https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721843895.pdf
#     HTTP 200 · 974.060 B · 12 s. · md5 14a8d326f557827c9670b4d367e65098
#     Aynı metinler: gaz vanası + reset + tip etiketi s.8 · basınç/doldurma/soğukken/3 bar/radyatör havası s.9
# BİLEREK yazılmayanlar:
#  - "Öngörülen basınç" için Buderus'un kod sayfasında rakam yok; rakam kılavuzdan (1–2 bar) verildi, 4C sayfasının 1,2–1,5'i bu
#    modellere taşınmadı.
#  - Doldurma vanasının yeri / yönü: GB022i ve GB122i.2 kılavuzları tarif etmiyor, servisten göstermesini iste diyor → uydurulmadı.
#  - Radyatör havasının NASIL alınacağı (anahtar, yön): kılavuz yalnız "havasını alın" diyor; yöntem için iç link verildi.
#  - GB122i (.2 olmayan) kullanma kılavuzu bu koşuda indirilmedi; GB122i.2 kılavuzu kullanıldı, sayfadaki "GB122i" listesiyle
#    aynı cihaz olduğu iddia edilmedi.
#  - Kılavuzdaki reset için iki ok tuşunun hangileri olduğu (kılavuzda simge olarak basılı).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombinin soğumasını bekle; ısıtma suyu yalnız cihaz soğukken, gidiş suyu en fazla 40 °C iken eklenir."
  - "Ekranda 2971 varsa önce radyatörlerin havasını al."
  - "Kombinin kumanda panelindeki manometreden basıncı oku; normal aralık 1 ila 2 bar."
  - "Basınç düşükse ısıtma suyunu ilave et; nasıl yapıldığını bilmiyorsan servisten göstermesini iste."
  - "Kombiyi kapatıp aç ya da kılavuzdaki iki tuşla H ve ! sembolleri kaybolana kadar resetle."
  - "Kod sürüyorsa ya da basınç sık düşüyorsa kod ve cihaz bilgisiyle Buderus yetkili servisini ara."
faq:
  - q: "Buderus kombide 1017 hatası ne demek?"
    a: "Buderus'un 1017 sayfasına göre 1017 su basıncının çok düşük olduğunu gösterir. Çözüm olarak önce su basıncının kontrol edilmesini, gerekirse öngörülen basınca ulaşılana kadar su ilave edilmesini istiyor. 1017, Buderus'un listesinde Logamax plus GB122i ve GB022i modellerinde geçiyor."
  - q: "1017 ile 2971 arasındaki fark ne?"
    a: "1017 su basıncının çok düşük olduğunu, 2971 çalışma basıncının çok düşük olduğunu gösterir. Çözümleri neredeyse aynı: basıncı kontrol et, gerekirse su ilave et. 2971'de Buderus buna bir adım ekliyor ve önce ısıtma tesisatının havasının alınmasını istiyor."
  - q: "Buderus GB022i'de basınç kaç bar olmalı?"
    a: "GB022i ve GB122i.2 kullanma kılavuzlarına göre işletme basıncı normal durumlarda 1 ila 2 bar arasında olmalı; daha yüksek bir basınç gerekiyorsa değeri yetkili servis verir. Isıtma suyunun en yüksek sıcaklığında 3 bar aşılmamalı; aşılırsa emniyet ventili açılır. Basınç kombinin manometresinden okunur."
  - q: "Buderus GB022i nasıl resetlenir?"
    a: "Kılavuza göre iki yol var: cihazı kapatıp tekrar çalıştırmak ya da kılavuzda gösterilen iki ok tuşunu, ekranda H ve ! sembolleri artık görünmeyene kadar aynı anda basılı tutmak. Cihaz tekrar çalışır ve gidiş suyu sıcaklığı görünür. Arıza giderilemezse servisi ya da müşteri hizmetlerini arayıp arıza kodunu ve cihaz bilgilerini bildirmen isteniyor."
images:
  coverAlt: "Beyaz bir kombinin kumanda panelinde küçük yuvarlak bir basınç göstergesi; yanda bir kalorifer peteğinin üst köşesinde hava alma vidası"
---

Buderus kombinin ekranında **H** sembolü ve **1017** ya da **2971** yazıyorsa ikisinin de konusu basınç. Buderus'un kod sayfalarındaki tanımlar şu: **1017 = "Su basıncının çok düşük olması"**, **2971 = "Çalışma basıncının çok düşük olması."** Çözümleri de birbirine çok yakın: basıncı kontrol et, gerekirse öngörülen basınca ulaşılana kadar su ilave et. 2971'de Buderus bunun önüne bir adım daha koyuyor: **ısıtma tesisatının havasını al.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 1017 / 2971 = Buderus'a göre basınç çok düşük. Sıra şu: kombi soğusun → (2971'de önce radyatörlerin havasını al) → manometreden basıncı oku (normal 1–2 bar) → gerekirse su ilave et → bir kez reset → kod sürüyorsa ya da basınç sık düşüyorsa yetkili servis.

## Bu kodlar hangi Buderus kombilerde çıkar

Buderus'un arıza kodları sayfasında 1017 ve 2971, rakamlı kod kullanan **Logamax plus GB122i** ve **GB022i** listelerinde geçiyor. Aynı listedeki diğer kodlar 227, 356 ve 2972. Bu yazıdaki kullanım adımları Buderus'un **GB022i** ve **GB122i.2** kullanma kılavuzlarından; iki kılavuzun ilgili bölümleri aynı metni taşıyor.

Kılavuzlara göre arızayı ekranda **H sembolü** gösterir; arızanın nedeni ise bir kodla belirtilir (kılavuzdaki örnek 214).

## Adım adım: evde denenecekler

**1. Kombinin soğumasını bekle.** Kılavuzların uyarısı: sıcak kombiye soğuk ısıtma suyu eklenirken termik gerilmeler çatlaklara yol açabilir. Isıtma tesisatını **yalnız soğuk durumdayken** doldur; gidiş suyu sıcaklığı en fazla **40 °C** olmalı.

**2. Ekranda 2971 varsa önce radyatörlerin havasını al.** Buderus'un 2971 çözümünün ilk cümlesi **"Isıtma tesisatının havasını alınız."** Kılavuzların bakım bölümü de kullanıcıya aynı işi veriyor: radyatör dengesiz ısındığında **radyatörlerin havasını al.** Nasıl yapıldığını [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısında anlattık. Hava alındıktan sonra basınca bakmak 2971 sayfasının da sırasıdır.

**3. Basıncı oku.** Basınç kombinin **manometresinden** okunur; kılavuzun kumanda paneli resminde manometre panelin bir parçası olarak gösteriliyor. GB022i ve GB122i.2 kılavuzlarına göre işletme basıncı normal durumlarda **1 ila 2 bar** arasında olmalı. Tesisatın daha yüksek bir basınç istiyorsa bu değeri yetkili servisin verir.

**4. Basınç düşükse su ilave et.** Buderus'un 1017 ve 2971 sayfaları basınç düşükse **öngörülen basınca ulaşılana kadar su ilave** edilmesini istiyor. Burada kılavuzların önemli bir notu var: ısıtma devresinin doldurulması **tesisata göre farklılık gösterir**, bu yüzden yetkili servisten ısıtma suyunun nasıl ilave edildiğini **göstermesini iste.** Daha önce gösterildiyse ve soğuk kombide yapıyorsan basıncı 1–2 bar aralığına getir. Üst sınır: ısıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı; aşılırsa emniyet ventili açılır.

**5. Bir kez resetle.** Kılavuza göre bazı arızalar ısıtma tesisatının kapanmasına yol açar ve tesisat sıfırlanmadan tekrar çalışmaz. İki yol var:

- Cihazı **kapat ve tekrar çalıştır**, ya da
- kılavuzda gösterilen **iki ok tuşunu**, ekranda **H** ve **!** sembolleri artık görünmeyene kadar **aynı anda basılı tut.**

Cihaz tekrar çalışınca ekranda gidiş suyu sıcaklığı görünür.

**6. Kod sürüyorsa dur.** Kılavuzun talimatı: arıza giderilemediğinde **servisi ya da müşteri hizmetlerini ara**, gösterilen **arıza kodunu ve cihaz bilgilerini** bildir.

## Basınç sık düşüyorsa

Su ekleyip kodu susturmak bir kez işe yarar. GB022i kılavuzunun "tesisat kaçakları" uyarısı şöyle: sisteme **sık su ekleniyorsa** bu, sistemde su kaçağı olduğunu gösterir; her doldurmada sisteme oksijen girer, korozyon artar ve cihazda hasara yol açabilir. **Kaçakların giderilmesi gerekir** ve kılavuz bu tür hasarların garanti dışı sayıldığını yazıyor. Markadan bağımsız anlatım: [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) · [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

## Ne zaman doğrudan servis

- Su ekledikten sonra 1017 ya da 2971 kısa sürede geri geliyorsa.
- Isıtma suyunun nasıl ilave edildiğini bilmiyorsan.
- Ekranda 1017 değil **356** ya da **2972** varsa: Buderus'a göre ikisi de besleme ya da şebeke geriliminin çok düşük olduğunu gösterir; elektrik tarafı yetkili servis işidir.

Servisi ararken bildireceğin cihaz adı ve seri numarası, kılavuza göre **kumanda paneli kapağındaki tip etiketinde** yazılıdır. Kombinin dış sacını açma: kılavuz dış sacın **asla sökülmemesini** ve gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor.

## Servisi aramadan önce kısa kontrol

1. Ekrandaki kod 1017 mi, 2971 mi?
2. Kombi soğukken basınç kaç bar?
3. Son su eklemenin üzerinden ne kadar geçti?
4. 2971'de radyatörlerin havası alındı mı?
5. Model adı tip etiketinden okundu mu?

Aynı ailenin alev kodu için [Buderus kombi 227 hatası](/blog/buderus-kombi-227-hatasi/), tüm modellerin kodları için [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/) yazısına bakabilirsin.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
