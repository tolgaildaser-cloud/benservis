---
title: "Canon yazıcı hata kodları: lamba sayısı ve destek kodu"
description: "Canon yazıcıda Alarm lambası yanıp sönüyor ya da 5200, 5B00 kodu çıktı: Canon kılavuzundaki lamba tablosu, destek kodları ve 5200 için adımlar."
slug: "canon-yazici-hata-kodlari"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P46 (YK #197 boşluk, BOSLUK.md #107). Slug origin/main'de yok. Yakın yazılar: yazici-kartus-tanimiyor, yazici-silik-basiyor, yazici-cevrimdisi-gorunuyor — Canon destek kodu/lamba tablosu yazısı yok.
# Kaynak (#88): Canon PIXMA El Kitapları, G2000 series, "Bir Hata Meydana Geliyor" (UG044) ve "5200" sayfaları (ij.manual.canon, Türkçe). URL ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · 5B00 için "atık mürekkep pedi sıfırlama" gibi belgede olmayan yorum (belgede 5B00 yalnız "Yazıcı hatası oluştu") · yazıcı kafası ve mürekkep emici değişimi (servis) · G2000 dışındaki serilerin tabloları (kılavuz seriye göre değişir).
guide:
  difficulty: "Orta"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Kuru bez"]
steps:
  - "Alarm lambasının kaç kez yanıp söndüğünü say ve bilgisayardaki destek koduna bak."
  - "Açma ve Alarm lambaları sırayla mı yanıp sönüyor, ona bak."
  - "Kalan mürekkep düzeyini kontrol et, gerekirse mürekkep kutularını doldur."
  - "Yazıcıyı kapat ve fişini prizden çek."
  - "Fişi yeniden tak ve yazıcıyı aç."
  - "Durdur düğmesiyle yazıcı kafası temizliğini başlat."
  - "Hata sürüyorsa kılavuzdaki sırayla sistem temizliğini yap."
  - "Hata yine geliyorsa yazıcıyı eğmeden Canon servisine götür."
faq:
  - q: "Canon yazıcıda 5200 hatası ne demek?"
    a: "Canon'un G2000 serisi kılavuzunda 5200 için tek bir neden yazıyor: yazıcı hatası oluştu. Çözüm de kılavuzda sırayla veriliyor: mürekkep düzeyini kontrol et, yazıcıyı kapatıp fişini çek, yeniden tak, yazıcı kafası temizliği ve sistem temizliği yap. Sıradaki adımları atlamak başka sorunlara yol açabilir."
  - q: "Canon yazıcıda 5B00 hatası ne demek?"
    a: "G2000 serisi kılavuzu 5B00 ve 5B01 kodlarını Açma ve Alarm lambalarının yedi kez sırayla yanıp sönmesine bağlıyor ve yalnızca yazıcı hatası olarak tanımlıyor. Kılavuzda bu kod için ayrı bir sayfa ya da kullanıcı adımı yok; ne olduğunu kodun kendisinden değil, modelinin kılavuzundan öğrenmelisin."
  - q: "Aynı tablo her Canon modelinde geçerli mi?"
    a: "Hayır. Burada okunan tablo Canon G2000 serisinin kılavuzundan. Canon destek kodlarını her seri için kendi kılavuzunda ayrı sayfalarda veriyor; modelinin serisini kasadan öğrenip ilgili kılavuza bak."
images:
  coverAlt: "Üstünde Alarm lambası yanıp sönen mürekkep tanklı yazıcı çizimi"
  steps:
    - "Yazıcının Alarm lambasına bakan beyaz eldivenli sade siluet el"
    - "Açma ve Alarm lambalarının sırayla yandığı yazıcı kumanda paneli çizimi"
    - "Mürekkep tankının yanındaki seviye çizgisine bakan beyaz eldivenli sade siluet el"
    - "Yazıcının açma kapama düğmesine basan beyaz eldivenli sade siluet el"
    - "Yazıcının fişini prize takan beyaz eldivenli sade siluet el"
    - "Yazıcıdaki Durdur düğmesini basılı tutan beyaz eldivenli sade siluet el"
    - "Durdur düğmesini basılı tutarken yanıp sönen lamba çizimi"
    - "Yazıcıyı düz tutarak taşıyan beyaz eldivenli sade siluet el ve servis simgesi"
---

Yazıcının üstündeki turuncu lamba yanıp sönüyor ya da ekranda "destek kodu 5200" yazıyor. Canon, hatanın ne olduğunu iki yerden söylüyor: lambanın kaç kez yanıp söndüğü ve bilgisayarda görünen destek kodu. Bu yazıdaki bilgiler Canon'un kendi çevrimiçi kılavuzundan, G2000 serisinin hata sayfalarından alındı. Seri değiştikçe tablo da değişir; bu yüzden aşağıda her yerde "G2000 serisi" diye belirttik.

> ⚠️ **Önce şu sınırı bil:** kılavuz sırayı değiştirmeyi ya da adım atlamayı yasaklıyor, çünkü bu başka sorunlara yol açabilir. Mürekkep sızabileceği için yazıcıyı taşırken eğme. Kafa ya da mürekkep emici değişimi servis işidir.

## Adım adım: Canon yazıcı hata kodu

**1. Lambayı say.** Canon'a göre hata olduğunda Alarm lambası yanıp söner ve bilgisayar ekranında destek kodu (hata numarası) görünür. Kaç kez yanıp söndüğü nedeni gösterir: iki kez yanıp sönme kağıt bitmesi ya da kağıt beslenmemesi (kod 1000), üç kez kağıt sıkışması (1300), dört kez kartuşun doğru takılmaması (1470).

**2. Sırayla yanıp sönmeye bak.** Bazı hatalarda Açma ve Alarm lambaları sırayla yanıp söner. İki kez yanıp sönme yazıcı hatasıdır (5100), yedi kez yanıp sönme yine yazıcı hatasıdır (5B00, 5B01). On kez yanıp sönme ise onarım gerektiren hatadır (B202, B203, B204, B205). 5200 gibi diğer kodlar tabloda "yukarıdakilerden farklı durumlar" satırında yazıcı hatası olarak geçiyor.

**3. Mürekkebi kontrol et.** 5200 için kılavuzun ilk adımı kalan mürekkep düzeyini kontrol etmek ve gerekirse mürekkep kutularını yeniden doldurmak.

**4. Yazıcıyı kapat, fişi çek.** Kılavuzdaki ikinci adım bu: makineyi kapat ve fişini prizden çıkar.

**5. Fişi tak, yazıcıyı aç.** Üçüncü adım: fişi yeniden tak ve makineyi aç. Kılavuz bu adımdan sonra da sıradaki adımlara geçmeni istiyor; sırayı bozma.

**6. Yazıcı kafası temizliği.** Canon'a göre kumanda panelinden bunu yapmak için Alarm lambası iki kez yanıp sönene kadar Durdur düğmesini basılı tut, sonra bırak. Yazıcı temizliği başlatır ve yaklaşık bir dakika sürer. Açma lambası yanıp söndükten sonra sabit yanarsa temizlik bitmiştir; bitene kadar başka işlem yapma. Aynı temizliği bilgisayardan da başlatabilirsin.

**7. Sistem temizliği.** Hata hâlâ duruyorsa kılavuz sistem temizliğini istiyor; panelden bunun için Alarm lambası beş kez yanıp sönene kadar Durdur düğmesini basılı tutup bırakırsın. Dikkat: kalan mürekkep düzeyi yetersizken sistem temizliği yapılırsa makine zarar görebilir. Yoğun temizlik ise 5200 için gerekli değil.

**8. Sürüyorsa servise bırak.** Bu işlemlerden sonra hata tekrar ederse Canon yazıcı kafasının değiştirilmesini söylüyor. Kafa değişimi servis işidir. Kafa değişiminden sonra da hata sürerse Canon, size en yakın Canon servis merkeziyle iletişime geçmeni istiyor.

## Lamba sayısına göre kodlar (G2000 serisi)

Canon iki ayrı tablo veriyor. Birincisi yalnızca Alarm lambasının yanıp sönme sayısını sayar; ikincisi Açma lambasıyla Alarm lambasının sırayla yanıp sönmesini sayar ve yukarıdaki 5100, 5B00 ve B202 gibi kodları orada bulursun. Yalnızca Alarm lambası yanıp sönüyorsa tablo şöyle: beş kez yanıp sönme yazıcı kafasının zarar görmüş olabileceğini (1403), kartuşun algılanamadığını (1471) ya da yanlış kartuşu (1476) gösteriyor. Yedi kez yanıp sönme kartuşun doğru konumda takılmadığını (1474) ya da aynı renkte birden fazla kartuş takıldığını (1475) söylüyor. Sekiz kez yanıp sönme mürekkep emicinin neredeyse dolduğunu (1700, 1701) bildiriyor. Dokuz kez yanıp sönme koruyucu malzeme ya da bandın kartuş tutucuda kalmış olabileceğini (1890) gösteriyor. On dört ve on beş kez yanıp sönme kartuşun algılanamadığını (1473, 1472) anlatıyor.

Mürekkep emici kodunda (1700, 1701) kendi başına yapacağın bir adım yok; mürekkep emiciyle ilgili işlem servis işidir, sen yalnızca kodu ve lamba sayısını not edip servise ilet.

## Destek kodunu nereden görürsün

Canon destek kodunun bilgisayar ekranında göründüğünü, ekranın işletim sistemine göre farklı olduğunu yazıyor; Windows ve Mac için ayrı örnekler veriyor. Kodu not ettikten sonra Canon'un kılavuzunda o kodu aratabilirsin: kılavuz, gösterilen destek koduyla belirtilen hataların giderilmesine ilişkin ayrıntıları aramayı öneriyor. Her kodun kendi sayfası var ve 5200 sayfasındaki sıra gibi, o koda özel adımları veriyor.

Lambanın yanıp sönme sayısı ile destek kodu aynı bilginin iki yüzü. Bilgisayara bağlı değilsen yalnızca lambayı sayarak yukarıdaki tablodan nedeni bulabilirsin. Aynı sayıda yanıp sönmenin birden fazla kodu olabilir; bu yüzden mümkünse bilgisayardaki kodu da oku.

## Kodsuz sorunlar

Ekranda destek kodu görünmüyorsa Canon bunun için ayrı bir sayfa veriyor ("Mesaj Görünüyor"). Kartuş sorununu [yazıcı kartuşu tanımıyor](/blog/yazici-kartus-tanimiyor/) yazısında, silik baskıyı [yazıcı silik basıyor](/blog/yazici-silik-basiyor/) yazısında, kağıt sıkışmasını [yazıcı kağıt sıkıştı](/blog/yazici-kagit-sikisti/) yazısında bulabilirsin.

## Servise gitmeden önce üç not

1. Yazıcının tam modelini ve serisini yaz.
2. Lambanın kaç kez yanıp söndüğünü ve ekrandaki destek kodunu not et.
3. Mürekkep düzeyini, yaptığın temizlikleri ve sonucu yaz.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
