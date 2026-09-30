---
title: "Bosch buzdolabı ses yapıyor: normal mi?"
description: "Bosch buzdolabı ses mi yapıyor? Bosch'un arıza tablosuna göre hangi ses normal, hangisini düzeltirsin: ayar, mesafe, raf ve şişeler."
slug: "bosch-buzdolabi-ses-yapiyor"
date: "2026-09-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgenin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-siemens-buzdolabi-sprint/bosch-8001233803_C.pdf · okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (K) Bosch "Soğutucu/Dondurucu kombine cihazı KGN76.." kullanım kılavuzu  https://media3.bosch-home.com/Documents/8001233803_C.pdf  36 s.  md5 d3c476746c93359c81b2153194c1adec
# Arıza tablosu (K s.28, "14 Arızaları giderme"):
#   "Cihaz uğultu, kabarcık, vızıltı, lıkırdama, tıklama veya çatlama sesi çıkarıyor." → "Hata yok. Soğutma ünite grubu, vantilatör gibi bir motor çalışıyor. Boruların içinde soğutma maddesi akıyor.
#     Motor, şalter veya manyetik valfler açılıyor veya kapanıyor. Otomatik buz çözme yapılıyor. Herhangi bir işlem uygulamaya gerek yoktur."
#   "Cihazdan sesler geliyor." → "Cihaz düz yerleştirilmemiş. ▶ Cihazı bir su terazisi ve vidalı ayakların yardımı ile hizalayınız." · "Cihaz açıkta durmuyor. ▶ Cihazın asgari mesafelerine uyunuz."
#     · "Donanım parçaları sallanıyor veya sıkışıyor. ▶ Çıkarılabilir donanım parçalarını kontrol ediniz ve gerekirse yeniden takınız." · "Şişeler veya kaplar birbirine değiyor. ▶ Şişeleri veya kapları birbirinden uzaklaştırınız."
#     · "Süper dondurma açık. Herhangi bir işlem uygulamaya gerek yoktur."
# Diğer: K s.17 "Not: Süper soğutma açıldığında daha çok ses oluşabilir." (Yakl. 6 saat sonra normal mod) · K s.18 "Not: Süper dondurma açıldığında daha çok ses oluşabilir." (Yakl. 54 saat sonra normal mod)
#   · K s.10 "Duvarla yandan küçük bir mesafe korunmalıdır." / "Asla dış hava açıklıklarını kapatmayınız veya örtmeyiniz." · K s.12 "Cihazı ekteki montaj kılavuzuna göre monte ediniz."
#   · K s.25 "Cihazınızdaki küçük arızaları kendiniz giderebilirsiniz." / "Sadece bunun eğitimini almış uzman personel cihazda onarımlar yapabilir." · K s.30-31 müşteri hizmetleri, E-Nr./FD tip etiketinde.
# BİLEREK YAZILMAYANLAR: kompresör/fan arızası teşhisi, "hangi ses hangi parçanın bozukluğu" eşlemesi (belgede yok) · asgari mesafenin santim değeri (montaj kılavuzunda; bu belgede yalnız ocak 30 mm / soba 300 mm var, ses için verilmedi)
#   · ayakların alet ile çevrilmesi (belgede alet adı yok; alet gerektiriyorsa servise bırakılır) · süre/fiyat (#46).
# Alıntı denetim tablosu: bosch-buzdolabi-ses-yapiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Su terazisi"]
steps:
  - "Sesin türünü ayırt et; uğultu, kabarcık, vızıltı, lıkırdama, tıklama ya da çatlama sesi Bosch'a göre hata değildir."
  - "Panelde Süper soğutma ya da Süper dondurma açık mı bak; açıkken daha çok ses normaldir."
  - "Cihazın düz durup durmadığını su terazisiyle kontrol et ve vidalı ayaklarla hizala."
  - "Cihazın açıkta durduğundan, duvarla yandan küçük bir mesafe kaldığından ve dış hava açıklıklarının kapanmadığından emin ol."
  - "Raf, kap ve çekmeceleri kontrol et; sallanan ya da takılan parçayı çıkarıp yeniden tak."
  - "Birbirine değen şişe ve kapları birbirinden uzaklaştır."
faq:
  - q: "Bosch buzdolabım vızıltı ve lıkırdama sesi çıkarıyor, bozuk mu?"
    a: "Bosch'un kullanım kılavuzuna göre hayır. Arıza tablosu uğultu, kabarcık, vızıltı, lıkırdama, tıklama ve çatlama seslerini 'Hata yok' diye sınıflıyor: soğutma ünite grubu ya da vantilatör gibi bir motor çalışıyor, borularda soğutma maddesi akıyor, motor, şalter ya da manyetik valfler açılıp kapanıyor veya otomatik buz çözme yapılıyor. Bosch'a göre bu durumda herhangi bir işlem gerekmiyor."
  - q: "Süper dondurmayı açtım, buzdolabı daha gürültülü çalışıyor. Normal mi?"
    a: "Evet. Bosch'un kılavuzu hem Süper soğutma hem Süper dondurma için 'açıldığında daha çok ses oluşabilir' notunu düşüyor; arıza tablosu da 'Süper dondurma açık' durumunda işlem gerekmediğini yazıyor. Kılavuza göre Süper soğutma yaklaşık 6 saat, Süper dondurma yaklaşık 54 saat sonra cihaz kendiliğinden normal moda geçer."
  - q: "Normal sayılan seslerden farklı bir ses geliyor, ne yapmalıyım?"
    a: "Bosch'un 'Cihazdan sesler geliyor' satırında dört kullanıcı kontrolü var: cihaz düz değilse su terazisi ve vidalı ayaklarla hizala; cihaz açıkta durmuyorsa asgari mesafelere uy; donanım parçaları sallanıyor ya da takılıyorsa kontrol edip yeniden tak; şişeler ya da kaplar birbirine değiyorsa onları ayır."
  - q: "Ses kontrollerden sonra da sürüyorsa kime başvurmalıyım?"
    a: "Bosch'un kılavuzu cihazdaki onarımların yalnız bunun eğitimini almış uzman personel tarafından yapılabileceğini yazıyor. Müşteri hizmetlerine başvururken cihazın tip etiketindeki ürün numarası (E-Nr.) ve imalat numarasını (FD) hazır bulundur."
images:
  coverAlt: "Mutfakta duvarın önünde duran alt bölmesi dondurucu olan beyaz kombi buzdolabı; önünde yerde küçük bir su terazisi"
---

Mutfakta sessizce çalışan buzdolabından birden vızıltı, lıkırdama ya da tıkırtı geliyor. Bosch'un KGN76.. serisi kombi buzdolabı kullanım kılavuzundaki arıza tablosu bu belirtiyi iki satıra ayırıyor. İlki **"Cihaz uğultu, kabarcık, vızıltı, lıkırdama, tıklama veya çatlama sesi çıkarıyor."** ve Bosch'un cevabı kısa: **"Hata yok."** İkincisi **"Cihazdan sesler geliyor."** ve burada senin düzeltebileceğin dört şey var: cihazın düz durması, çevresindeki mesafe, raf ve kapların oturması, birbirine değen şişeler. Bu yazıda Bosch'un sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Uğultu, kabarcık, vızıltı, lıkırdama, tıklama, çatlama → Bosch'a göre normal çalışma sesi. Süper soğutma ya da Süper dondurma açıkken daha çok ses → normal. Bunların dışında bir ses → cihazı hizala, mesafeyi aç, rafları yerine oturt, şişeleri ayır.

## Hangi ses ne anlatıyor?

| Duyduğun | Bosch'a göre sebebi | Kimin işi |
|---|---|---|
| Uğultu, vızıltı | Soğutma ünite grubu ya da vantilatör gibi bir motor çalışıyor | Kimsenin, hata yok |
| Kabarcık, lıkırdama | Borularda soğutma maddesi akıyor | Kimsenin, hata yok |
| Tıklama | Motor, şalter ya da manyetik valfler açılıp kapanıyor | Kimsenin, hata yok |
| Çatlama | Otomatik buz çözme yapılıyor | Kimsenin, hata yok |
| Genel olarak daha çok ses | Süper soğutma ya da Süper dondurma açık | Kimsenin, işlem gerekmez |
| Bunların dışında gelen sesler | Cihaz düz değil, açıkta durmuyor, parçalar sallanıyor ya da şişeler birbirine değiyor | Senin |

## Adım adım: evde denenecekler

**1. Sesi tanı.** Önce ne duyduğunu ayırt et. Bosch'un tablosuna göre **uğultu, kabarcık, vızıltı, lıkırdama, tıklama ya da çatlama** sesleri çalışan bir buzdolabının normal sesleri: motor çalışıyor, borularda soğutma maddesi akıyor, valfler açılıp kapanıyor ya da otomatik buz çözme yapılıyor. Bosch bu satır için **"Herhangi bir işlem uygulamaya gerek yoktur."** diyor.

**2. Süper modlara bak.** Panelde **Süper soğutma** ya da **Süper dondurma** simgesi yanıyor mu? Bosch'un kılavuzu ikisi için de **"açıldığında daha çok ses oluşabilir"** diyor ve arıza tablosunda "Süper dondurma açık" durumu için işlem gerekmiyor. Kılavuza göre cihaz Süper soğutmadan yaklaşık **6 saat**, Süper dondurmadan yaklaşık **54 saat** sonra kendiliğinden normal moda geçer.

**3. Cihazı hizala.** Bosch'un "Cihazdan sesler geliyor" satırındaki ilk neden: **cihaz düz yerleştirilmemiş.** Çözüm, cihazı **bir su terazisi ve vidalı ayakların yardımıyla** hizalamak. Ayaklar elle ayarlanamıyorsa zorlama; bu işi yetkili servise bırak.

**4. Mesafeyi kontrol et.** Tablodaki ikinci neden: **cihaz açıkta durmuyor.** Bosch'un çözümü **asgari mesafelere uymak.** Aynı kılavuzun enerji tasarrufu bölümü **duvarla yandan küçük bir mesafe** korunmasını ve **dış hava açıklıklarının asla kapatılmamasını** istiyor. Mesafenin genel mantığı [buzdolabı raf düzeni ve duvar mesafesi](/blog/buzdolabi-raf-duzeni-ve-duvar-mesafesi/) yazısında.

**5. Rafları ve kapları oturt.** Üçüncü neden: **donanım parçaları sallanıyor veya sıkışıyor.** Rafları, kapı raflarını, sebze kabını ve çekmeceleri tek tek kontrol et; yerine tam oturmayan parçayı çıkarıp **yeniden tak.**

**6. Şişeleri ayır.** Son kullanıcı nedeni: **şişeler veya kaplar birbirine değiyor.** Kapı rafındaki ve raflardaki şişe ve kapları **birbirinden uzaklaştır.**

## Ne zaman servis

Bu altı kontrolden sonra ses sürüyorsa, özellikle tabloda "normal" diye geçmeyen bir ses duyuyorsan, işi yetkili servise bırak. Bosch'un kılavuzu açık: **cihazda onarımları yalnız bunun eğitimini almış uzman personel yapabilir.** Müşteri hizmetlerini ararken cihazın **tip etiketindeki ürün numarasını (E-Nr.) ve imalat numarasını (FD)** hazır bulundur.

⛔ **Kendin-çöz sınırı burada biter.** Arka kapağı açmak, motor ya da fan tarafına ulaşmaya çalışmak kullanıcının işi değil.

Markadan bağımsız ses rehberi için [buzdolabı ses yapıyor](/blog/buzdolabi-ses-yapiyor/) yazısına bakabilirsin. Buzdolabın aynı zamanda iyi soğutmuyorsa Bosch'un soğutma sırası [Bosch buzdolabı soğutmuyor](/blog/bosch-buzdolabi-sogutmuyor/) yazısında; paneldeki alarm ve göstergeler için [Bosch buzdolabı hata kodları](/blog/bosch-buzdolabi-hata-kodlari/) sayfası var.

---

**Kaynak künyesi.** Nedenler ve adımlar Bosch'un "Soğutucu/Dondurucu kombine cihazı KGN76.." kullanım kılavuzunun "Arızaları giderme" tablosundan ve aynı kılavuzun kurulum ile ek fonksiyonlar bölümlerinden alınmıştır. Senin cihazın farklı bir seriyse **kendi kılavuzun esastır.**

Belirtiyi ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
