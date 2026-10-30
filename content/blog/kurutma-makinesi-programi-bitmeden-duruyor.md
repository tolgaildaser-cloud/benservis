---
title: "Kurutma makinesi programı bitmeden duruyor: kılavuza göre"
description: "Kurutma makinesi programı bitmeden duruyor. Arçelik ve Samsung kılavuzlarına göre su tankı, kapak, yük ve filtre kontrolü; hangi kodda servis gerekir."
slug: "kurutma-makinesi-programi-bitmeden-duruyor"
date: "2026-10-30"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, YK #197 boşluk yazıları 2. dalga, P18 / BOSLUK.md #38. Slug origin/main'de yok (ls-tree). Genel yazı yok; yakın: kurutma-makinesi-kurutmuyor, kurutma-makinesi-su-tanki-dolu-uyarisi, kurutma-makinesi-hata-kodlari, markalı kurutma "calismiyor" yazıları.
# Konu kanıtı: Google otomatik tamamlama "kurutma makinesi program" #4, #6 (BOSLUK.md #38). GSC kanıt sayılmadı.
# Belgeler (#88/#89), curl -sL -A "Mozilla/5.0", HTTP 200, ham dosyalar _kaynak/kurutma-makinesi-programi-bitmeden-duruyor/:
#  (AR) Arçelik 3886 KT çamaşır kurutma makinesi kullanma kılavuzu, 36 s., md5 62fe5d46146e92058583492074c9d509 — s.6, 24, 25, 30, 31
#  (SA) Samsung DV5000T kurutma makinesi kullanıcı kılavuzu DC68-04209V-02 TR, 68 s., md5 af744046e6c457b037ef2e270349d072 — s.11, 51, 52
#  Sayfa = PDF sayfası.
# BİLEREK YAZILMAYANLAR: kompresör, kart, sensör değişimi ya da söküm (belgede yok, servis işi) · tC5/AC6/3C kodlarının ayrıntısı · modele özel kodlar · fiyat (#46).
# Alıntı denetimi: kurutma-makinesi-programi-bitmeden-duruyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu", "Kuru bez"]
steps:
  - "Ekrana bak: su tankı uyarı sembolü yanıp sönüyor mu ya da bir bilgi kodu görünüyor mu?"
  - "Su tankını çıkarıp boşalt, yerine tak ve programı sürdür."
  - "Yükleme kapağını kapanma sesini duyana kadar iterek tam kapat."
  - "Elektrik kesintisi olduysa programı Başla/Bekle tuşuyla yeniden başlat."
  - "Yükü kontrol et: çok azsa çamaşır ekle, çok fazlaysa bir kısmını çıkar."
  - "Tiftik filtresini temizle; sıcaklık sensörü koduna ısı değiştiriciyi de temizle."
  - "Aynı kod geri geliyorsa kendin onarmaya kalkma, yetkili servisi ara."
faq:
  - q: "Kurutma makinesini program bitmeden durdurmak sorun olur mu?"
    a: "Arçelik ve Samsung durdurmamanı söylüyor. Zorunluysan tüm çamaşırları hızlıca çıkarıp ısıları hemen dağılacak şekilde sermen gerekiyor. Arçelik ayrıca çalışırken programı iptal edersen çamaşırların aşırı sıcak olacağını, Tazeleme programıyla soğutmanı yazıyor."
  - q: "Su tankı dolup makine durunca program baştan mı başlar?"
    a: "Arçelik'e göre hayır. Tankı boşaltıp Başla/Bekle tuşuna basınca uyarı sembolü söner ve program kaldığı yerden devam eder. Samsung'da 5C bilgi kodu çıkar; tankı boşaltıp gücü açıp yeniden başlatman istenir."
  - q: "Samsung ekranında dC yazıyor, bu ne?"
    a: "Samsung kılavuzu dC kodunu kurutma makinesinin kapağı açık durumda çalışması diye açıklıyor. Kapağı kapatıp yeniden başlatman, devam ederse servisi aramanı istiyor."
  - q: "Ekranda HC kodu görürsem ne yapmalıyım?"
    a: "Samsung kılavuzunda HC kompresör aşırı ısınması anlamına geliyor ve tek önerisi servisi aramak. Kodu evde gidermeye çalışma."
images:
  coverAlt: "Programı yarıda kalmış, ekranında bekleme göstergesi yanan bir kurutma makinesinin sade çizimi"
  steps:
    - "Kurutma makinesinin panelinde yanıp sönen su damlası simgesi çizimi"
    - "Su tankını makinenin üstünden çekip çıkaran beyaz eldivenli sade siluet el"
    - "Yükleme kapağını tam kapanana kadar iten beyaz eldivenli sade siluet el"
    - "Başla ve bekle tuşuna basan beyaz eldivenli sade siluet el"
    - "Tambura gevşekçe konmuş çamaşırlar ve yanında çıkarılan birkaç parça"
    - "Tiftik filtresini yukarı çekip çıkaran beyaz eldivenli sade siluet el"
    - "Telefon simgesi ve yanında kurutma makinesi çizimi"
---

Kurutma makinesi çalışıyordu, ekranda kalan süre sürüyordu, sonra durdu. Çamaşır ıslak ya da yarı nemli. Bunun birkaç basit nedeni var ve çoğu evde kontrol edilebiliyor. Bu yazı Arçelik 3886 KT ve Samsung DV5000T kullanma kılavuzlarındaki bölümlere dayanıyor. İki üretici de aynı yerlere işaret ediyor, ama Samsung kodları, Arçelik semboller üzerinden anlatıyor.

> ⚠️ **Önce güvenlik:** Arçelik de Samsung da kurutma programı bitmeden makineyi durdurmamanı istiyor. Zorunluysan tüm çamaşırları hızlıca çıkarıp ısı dağılsın diye serin. Tambur ve çamaşırlar sıcak olabilir. Kompresör, kart ya da iç aksam kılavuzlarda yok; bunlar servis işi, kendin müdahale etme.

## Önce ekrana bak

Makinenin neden durduğunu çoğu zaman ekran söylüyor. Arçelik'te su tankı uyarı sembolü yanıp sönüyorsa makine beklemeye geçmiş demektir. Samsung'da ekranda bir bilgi kodu çıkar. Kod yoksa kapak, yük ve elektrik kesintisi gibi sade nedenlere bak. İki üreticinin sorun giderme tablosu, aşağıdaki adımların temeli.

## Adım adım: program bitmeden duruyorsa

**1. Ekrana bak.** Arçelik'te su tankı sembolü yanıp sönüyorsa sebep büyük ihtimalle dolu tank. Samsung'da ekranda 5C, dC, tC ya da HC görebilirsin. Kodu not al, sonraki adımlarda karşılığı var.

**2. Su tankını boşalt.** Arçelik'e göre program sırasında su tankı dolarsa uyarı sembolü yanıp sönmeye başlar ve makine beklemeye geçer. Tankı boşaltıp Başla/Bekle tuşuna bas: sembol söner, program kaldığı yerden sürer. Samsung'da aynı durum 5C kodudur ve kılavuz bunu su tankı dolu ya da boşaltma pompası arızalı diye yazar. Önce tankı boşalt, gücü aç ve yeniden başlat; sürerse servisi ara. Arçelik, doğrudan giderli kurulumda su boşaltma hortumunun katlanmış olabileceğini de yazıyor. Uyarının ayrıntısı için: [su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/).

**3. Kapağı tam kapat.** Arçelik'in "program nedensiz yarıda kesildi" satırı kapağı tam kapanmamış olabilir diyor ve çözüm olarak kapanma sesini duyana kadar itmeni söylüyor. Samsung'da dC kodu makinenin kapak açıkken çalıştığını gösteriyor. Kapağı kapatıp yeniden başlat. Devam ederse servis.

**4. Elektrik kesintisini düşün.** Arçelik elektrik kesintisini de bu sorunun nedenlerinden sayıyor. Çözüm sade: Başla/Bekle tuşuna basıp programı yeniden başlat.

**5. Yükü ayarla.** Samsung'un sorun giderme tablosunda "kurutma makinesi yük kurumadan önce kapanıyor" satırı var. İki ihtimal yazıyor: yük çok azsa daha fazla öğe ekleyip programı yeniden başlat, yük çok fazlaysa öğeleri çıkar. Az yük için kılavuz başka bir yerde kuru havlu eklemeyi de öneriyor.

**6. Filtreyi temizle.** Samsung aynı satırda her yükten önce tiftik filtresinin temizlendiğinden emin olmanı istiyor. tC kodunda (hava sıcaklığı sensörü sorunu) önerisi tiftik filtresini ve ısı değiştiriciyi temizlemek. Arçelik de lif filtresi ve filtre çekmecesi uyarı sembollerinde aynı temizliği istiyor. Ayrıntı için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazısına bak.

**7. Aynı kod dönüyorsa servis çağır.** Samsung dC ve tC kodları geri gelirse, HC kodunda ise hemen servisi aramanı istiyor. Arçelik de kılavuzdaki adımlara rağmen sorun sürerse bayiye ya da yetkili servise başvurmanı, çalışmayan ürünü asla kendin onarmamanı yazıyor.

## Yanlışlıkla durdurmuş olabilirsin

Bazen makine arızalı değil, bekleme ya da iptal konumunda. Arçelik'e göre Başla/Bekle tuşuna 1 saniye basmak programı bekleme moduna alır; Açma/Kapama/İptal tuşuna 3 saniye basmak programı iptal eder. Bekleme durumundayken program düğmesini çevirirsen çalışan program sonlanır ve yeni programın bilgileri ekrana gelir. Samsung da programı değiştirmek için önce Başlat/Duraklat'a basıp işlemi durdurmanı, sonra yeni programı seçip tuşu basılı tutarak başlatmanı istiyor.

Çamaşır eklemek ya da çıkarmak da programı keser: Arçelik önce Başla/Bekle tuşuyla makineyi bekleme konumuna almanı, kapağı ondan sonra açmanı, kapattıktan sonra yine Başla/Bekle'ye basmanı istiyor. Bu işlemi program süresini uzatan bir kesinti olarak tarif ediyor ve çamaşır eklemenin program başlamadan yapılmasını öneriyor.

## İki üreticiyi yan yana koyunca

| Belirti | Arçelik 3886 KT | Samsung DV5000T |
|---|---|---|
| Tank dolu | Sembol yanıp söner, makine bekler | 5C |
| Kapak sorunu | Kapak tam kapanmamış olabilir | dC |
| Yük sorunu | Aşırı yük, kapağın kendiliğinden açılmasına yol açabilir | Yük az ya da çok olabilir |
| Filtre tıkanıklığı | Lif filtresi ve filtre çekmecesi uyarı sembolleri | tC (tiftik filtresi, ısı değiştirici) |
| Kompresör ısınması | Kılavuzda yok | HC, servis |

## Bu yazının sınırı

Her model aynı uyarıyı vermez. Bu iki kılavuz bir fikir verir, ama senin makinenin kılavuzu esastır. Başka bir marka ya da farklı bir kod görüyorsan genel hata kodu yazısına bak: [kurutma makinesi hata kodları](/blog/kurutma-makinesi-hata-kodlari/). Makine hiç ısıtmıyorsa ayrı bir konu: [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/).

## Servis çağırmadan önce üç dakika

1. Ekranda tank sembolü ya da bir kod var mı, kodu not ettin mi?
2. Tankı boşalttın, kapağı kapattın, filtreyi temizledin mi?
3. Yük çok mu az, çok mu fazlaydı?

Bunlar sonuç vermediyse yetkili servis zamanı. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
