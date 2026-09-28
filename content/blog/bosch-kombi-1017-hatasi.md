---
title: "Bosch kombi 1017 ve 2971 hatası"
description: "Bosch Condens 2300i W'de 1017 su basıncı, 2971 çalışma basıncı çok düşük demek. Radyatör havası, basınç okuma, su ilavesi ve reset adım adım."
slug: "bosch-kombi-1017-hatasi"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi; PDF pdftotext (-raw ve -layout) ile okundu, sayfa no -f/-l ile.
# Web araması kullanılmadı; belgelerin yeri Bosch'un kendi dizin sayfası ve bosch-tr-tr-b.boschhc-documents.com/td arama sayfasından bulundu.
# Alıntı denetim tablosu: bosch-kombi-1017-hatasi.KAYNAK.md
# Tek sayfa gerekçesi: 1017 ve 2971 aynı modelin (Condens 2300i W) listesinde, ikisi de düşük basınç; 2971'in çözümü 1017'ninkine
#   "Isıtma tesisatının havasını alın." adımını ekliyor.
# Kardeş sayfa notu: Buderus'un canlı buderus-kombi-1017-hatasi yazısı Buderus belgelerine dayanıyor; bu metin yalnız Bosch'un kendi
#   kod sayfalarından ve Condens 2300i W kullanma kılavuzundan yazıldı, cümle aktarılmadı.
# K1) Bosch TR "1017 Arıza Kodu" · https://www.bosch-homecomfort.com/tr/tr/residential/servis-hizmetlerimiz/ariza-kodlari-ve-cozumleri/1017/
#     HTTP 200 · 143.279 B · md5 05660f213202876692f25f0185d37681
#     Birebir: "Su Basıncı Çok Düşük" | "Su basıncını kontrol edin ve gerektiğinde öngörülen basınca ulaşılana kadar su ilave edin."
# K2) Bosch TR "2971 Arıza Kodu" · .../ariza-kodlari-ve-cozumleri/2971/ · HTTP 200 · 143.364 B · md5 0b8d03431a3e60ff74fff4851415bffd
#     Birebir: "Çalışma Basıncı Çok Düşük" | "Isıtma tesisatının havasını alın. Su basıncını kontrol edin ve gerektiğinde öngörülen
#     basınca ulaşılana kadar su ilave edin."
# K3) Bosch TR dizin · .../ariza-kodlari-ve-cozumleri/ · HTTP 200 · md5 92d4b4cafaffae97b4a3b4f58851a8ee
#     Condens 2300i W listesi: 227 · 356 · 1017 · 2971 · 2972
# K4) Bosch TR "356 Arıza Kodu" md5 b14821795fd2757a2ffaa4e1a6bfb8ef · "2972 Arıza Kodu" md5 68f4ff0fa50a05ba710670480de7379f (HTTP 200)
#     356: "Isıtma cihazı için besleme gerilimi çok düşük" · 2972: "Şebeke gerilimi çok düşük"
# B1) Condens 2300i W Kullanma Kılavuzu 6721830375 (2021/03) · https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721830375
#     HTTP 200 · 1.286.203 B · 16 s. · md5 167bfab2336acd938ef5e1d26bd5dec9
#     Gaz kokusu s.3 · dış sac / yetkili servis s.4 · sık su = kaçak s.5 · manometre Res.1 [9], arıza göstergesi Res.2 [3] s.7 ·
#     H sembolü + örnek kod 214 + "sıfırlanmadan tekrar çalışmaz" + iki reset yolu + servis + kod/cihaz bilgisi + tip etiketi +
#     "İşletme basıncı normal durumlarda 1 ila 2 bar" + doldurma tesisata göre farklı/servisten göstermesini iste + yalnız soğukken,
#     maks. gidiş 40 °C + 3 bar + "Radyatör dengesiz ısındığında: Radyatörlerin havasını alın." s.11
# BİLEREK yazılmayanlar:
#  - "Öngörülen basınç" için Bosch'un kod sayfalarında rakam yok; rakam 2300i W kılavuzundan (1–2 bar). E9/EA sayfalarındaki 1,2–1,5 bar
#    ve su takviye musluğu tarifi bu modele taşınmadı (kılavuz "servisten göstermesini isteyin" diyor).
#  - Radyatör havasının NASIL alınacağı: kılavuz yalnız "havasını alın" diyor → iç link verildi.
#  - Reset için iki tuşun adı (kılavuzda simge olarak basılı).
#  - 1017/2971'in Condens 2200i W'de de çıktığı iddiası (Bosch'un kod listesi 2200i W başlığı açmıyor).
#  - 356/2972'de kullanıcı adımı (gerilim ölçümü) → servis. Tamir süresi, parça, maliyet.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kombiyi soğumaya bırak; ısıtma suyu yalnız soğukken, gidiş suyu en fazla 40 °C iken eklenir."
  - "Ekranda 2971 varsa önce radyatörlerin havasını al."
  - "Kumanda panelindeki manometreden basıncı oku; kılavuza göre normal aralık 1 ila 2 bar."
  - "Basınç düşükse ısıtma suyu ilave et; nasıl yapıldığını bilmiyorsan yetkili servisten göstermesini iste."
  - "Kombiyi kapatıp aç ya da kılavuzdaki iki tuşu H ve ! kaybolana kadar birlikte basılı tut."
  - "Kod sürüyorsa ya da basınç çabuk düşüyorsa kodu ve cihaz bilgisini not al, Bosch yetkili servisini ara."
faq:
  - q: "Bosch kombide 1017 hatası ne demek?"
    a: "Bosch'un 1017 sayfasına göre 1017 su basıncının çok düşük olduğunu gösterir. Bosch'un çözümü su basıncını kontrol etmek ve gerektiğinde öngörülen basınca ulaşılana kadar su ilave etmek. 1017, Bosch'un listesinde rakamlı kod kullanan Condens 2300i W modelinde geçiyor."
  - q: "2971 ile 1017'nin farkı ne?"
    a: "Bosch 1017'yi su basıncının, 2971'i çalışma basıncının çok düşük olması olarak tanımlıyor. İkisinin çözümü de basıncı kontrol edip gerekirse su ilave etmek; 2971'de Bosch bunun önüne bir adım koyuyor: ısıtma tesisatının havasını al."
  - q: "Condens 2300i W'de basınç kaç bar olmalı?"
    a: "Condens 2300i W kullanma kılavuzuna göre işletme basıncı normal durumlarda 1 ila 2 bar arasında olmalı; daha yüksek bir basınç gerekiyorsa değeri yetkili servis verir. Isıtma suyunun en yüksek sıcaklığında 3 bar aşılmamalı, aşılırsa emniyet ventili açılır. Basınç kumanda panelindeki manometreden okunur."
  - q: "Bosch Condens 2300i W nasıl sıfırlanır (reset)?"
    a: "Kılavuza göre bazı arızalarda kombi sıfırlanmadan tekrar çalışmaz. İki yol var: cihazı kapatıp tekrar çalıştırmak ya da kılavuzda gösterilen iki tuşu, ekranda H ve ! sembolleri artık görünmeyene kadar aynı anda basılı tutmak. Kombi yeniden çalışınca gidiş suyu sıcaklığı görünür. Arıza giderilemezse servisi ya da müşteri hizmetlerini arayıp kodu ve cihaz bilgilerini bildir."
images:
  coverAlt: "Beyaz bir kombinin kumanda panelinde rakamlı arıza kodu gösteren ekran ve yanında küçük yuvarlak manometre; arka planda bir kalorifer peteği"
---

Bosch kombinin ekranında **H** sembolüyle birlikte **1017** ya da **2971** duruyorsa konu basınç. Bosch'un kod sayfalarında 1017'nin karşılığı **"Su Basıncı Çok Düşük"**, 2971'in karşılığı **"Çalışma Basıncı Çok Düşük."** İkisinin de çözümü basıncı kontrol edip gerektiğinde **öngörülen basınca ulaşılana kadar su ilave etmek.** 2971'de Bosch buna bir ön adım ekliyor: **"Isıtma tesisatının havasını alın."**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 1017 / 2971 = Bosch'a göre basınç çok düşük. Sıra şu: kombi soğusun → (2971'de önce radyatör havası) → manometreden basınç (normal 1–2 bar) → gerekirse su ilave → bir kez reset → kod sürüyor ya da basınç çabuk düşüyorsa Bosch yetkili servis.

## Bu kodlar hangi Bosch kombide çıkar

Bosch'un arıza kodları sayfasında 1017 ve 2971, rakamlı kod kullanan **Condens 2300i W** listesinde. Aynı listedeki diğer kodlar **227** (alev algılanmıyor), **356** ve **2972** (besleme ya da şebeke gerilimi çok düşük). Harfli kod kullanan Bosch modellerinde basınçla ilgili kodlar başka: [CE ve 0Y-A1](/blog/bosch-kombi-ce-hatasi/) ile [E9](/blog/bosch-kombi-e9-hatasi/).

Condens 2300i W kullanma kılavuzuna göre arızayı ekranda **H sembolü** gösterir, nedenini ise bir kod belirtir (kılavuzdaki örnek 214). Kılavuzun kumanda paneli resminde **manometre** panelin bir parçası; ekranda ayrıca bir **arıza göstergesi** var.

## Adım adım: evde denenecekler

**1. Kombiyi soğumaya bırak.** Condens 2300i W kılavuzunun uyarısı: sıcak kombiye soğuk ısıtma suyu eklenirken **termik gerilmeler** hasara yol açabilir. Isıtma tesisatını **yalnız soğuk durumdayken** doldur; gidiş suyu sıcaklığı en fazla **40 °C** olmalı.

**2. Ekranda 2971 varsa önce radyatörlerin havasını al.** Bosch'un 2971 çözümü bu cümleyle başlıyor: **"Isıtma tesisatının havasını alın."** Condens 2300i W kılavuzunun bakım bölümü de kullanıcıya aynı işi veriyor: radyatör dengesiz ısındığında **radyatörlerin havasını al.** Nasıl yapıldığını [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısında anlattık. Hava alındıktan sonraki iş, 2971 sayfasındaki sıraya göre basınca bakmak.

**3. Basıncı oku.** Kılavuz güncel çalışma basıncının **manometreden** okunmasını istiyor. Condens 2300i W'de işletme basıncı normal durumlarda **1 ila 2 bar** arasında olmalı. Tesisatın daha yüksek bir basınç gerektiriyorsa kılavuza göre o değeri yetkili servisin verir. Bosch'un 1017 ve 2971 sayfalarındaki "öngörülen basınç" ifadesi rakam vermiyor; bu model için rakamı kılavuzdan al.

**4. Basınç düşükse su ilave et.** Burada Condens 2300i W kılavuzunun özel bir notu var: ısıtma devresinin doldurulması **tesisata göre farklılık gösterir**; bu yüzden yetkili servisten ısıtma suyunun nasıl ilave edildiğini **göstermesini iste.** Sana daha önce gösterildiyse ve kombi soğuksa basıncı 1–2 bar aralığına getir. Üst sınır: ısıtma suyunun en yüksek sıcaklığında **3 bar** aşılmamalı; aşılırsa emniyet ventili açılır.

**5. Bir kez sıfırla (reset).** Kılavuza göre bazı arızalar ısıtma tesisatının kapanmasına yol açar ve tesisat **sıfırlanmadan tekrar çalışmaz.** İki yol var:

- Cihazı **kapat ve tekrar çalıştır**, ya da
- kılavuzda gösterilen **iki tuşu**, ekranda **H** ve **!** sembolleri artık görünmeyene kadar **aynı anda basılı tut.**

Kombi yeniden çalışır ve ekranda gidiş suyu sıcaklığı görünür.

**6. Kod sürüyorsa servisi ara.** Kılavuzun talimatı: arıza giderilemediğinde **servisi ya da müşteri hizmetlerini ara**, gösterilen **arıza kodunu ve cihaz bilgilerini** bildir.

## Su ekledim, basınç yine düşüyor

Bir kez su eklemek kodu susturabilir; sorun tekrar ediyorsa asıl mesele başka yerdedir. Condens 2300i W kılavuzunun "tesisat kaçakları" başlıklı uyarısı şöyle: sisteme **sık su ekleniyorsa** bu, sistemde su kaçağı olduğunu gösterir. Her doldurmada sisteme oksijen girer, korozyon artar ve cihazda hasar oluşabilir. **Kaçakların giderilmesi gerekir**; kılavuza göre bu tür hasarlar garanti dışı sayılıyor. Kaçağın aranması kombinin ve tesisatın içinde yapılacak bir iş olduğu için yetkili servise bırak. Markadan bağımsız anlatım: [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) · [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

## Ne zaman doğrudan servis

- Isıtma suyunun nasıl ilave edildiğini bilmiyorsan.
- Su ekledikten sonra 1017 ya da 2971 kısa sürede geri geliyorsa.
- Ekranda 1017 değil **356** ya da **2972** varsa: Bosch'a göre ikisi de gerilimin çok düşük olduğunu gösterir; elektrik beslemesinin ölçülmesi ve düzeltilmesi yetkili servis işidir.
- Kombinin dış sacını açma: kılavuz dış sacın **asla sökülmemesini** ve gerekli çalışmaların yalnız yetkili servis tarafından yapılmasını istiyor.

Servise bildireceğin cihaz adı ve seri numarası, kılavuza göre **kumanda paneli kapağındaki tip etiketinde** yazılı.

## Servisi aramadan önce kısa kontrol

1. Ekrandaki kod 1017 mi, 2971 mi?
2. Kombi soğukken manometre kaç bar?
3. 2971'de radyatörlerin havası alındı mı?
4. Son su eklemenin üzerinden ne kadar geçti?
5. Model adı tip etiketinden okundu mu?

Aynı modelin alev kodu için [Bosch kombi EA ve 227 hatası](/blog/bosch-kombi-ea-hatasi/), bütün modellerin kodları için [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) yazısına bakabilirsin.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
