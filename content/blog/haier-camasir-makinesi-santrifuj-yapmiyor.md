---
title: "Haier çamaşır makinesi santrifüj yapmıyor"
description: "Haier çamaşır makinesi sıkmıyor ya da Unb yazıyorsa Haier kılavuzundaki sebepler: dengesiz yük, aşırı yük ve aşırı köpük. Kontrol ve çözüm adım adım."
slug: "haier-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-10-03"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/onden-yuklemeli-camasir-makineleri/31019076/hw90-b14939s8-s/  md5 14a35b60366ffc305527dc9845a45d04
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2022/7/16577223/UM-HW80-90-100_B14939S8-HW80-90-100_B14939_TR  32 s.  md5 88af8065db36183897d4d7a6b8fa32bf
#   pdftotext -layout, sayfa = PDF sayfası. Web araması yok.
# Ana satırlar: s.24 "Sıkmada sorun var. • Çamaşırlar dengesiz olabilir. • Makinedeki yükü kontrol edin ve tekrar bir sıkma programı çalıştırın."
#   · s.23 "Unb • Dengesiz yük sorunu. • Kazandaki yükü kontrol ederek dengeleyin.Yükü azaltın."
#   · s.24 Not: Köpük oluşumu "Sıkma döngüsü sırasında çok fazla köpük gözlenirse motor durur ve tahliye pompası 90 saniye süreyle devreye girer. Bu köpük giderme denemesi 3 defa başarısız olursa program sıkma işlemi yapılmadan sona erer."
#   · s.24 "Kazanda ve/veya deterjan gözünde aşırı köpük oluşuyor." → "Deterjan uygun olmayabilir. → Deterjanla ilgili önerileri kontrol edin." · "Aşırı deterjan kullanılmış olabilir. → Deterjan miktarını azaltın."
# Diğer: s.14 6.4 "Çamaşırları tek tek yerleştirin" · "Aşırı yükleme yapmayın." · "Yük ile tambur üstü arasında yaklaşık 15 cm'lik bir boşluk bırakın." · s.15 "Az köpüklü veya köpüksüz toz deterjan kullanılması daha iyidir." · "Su sıcaklığını 60°C ve üzerinde seçerseniz daha az deterjan kullanmanızı tavsiye ederiz."
#   · s.16 "Aşırı miktarda deterjan veya yumuşatıcı kullanmayın." · s.20 8.6 Pompa filtresi "Sıkmıyor." durumunda kontrol (servis kapağı "Bir bozuk para veya tornavida kullanabilirsiniz") · s.22 CLR FLTR / E5 tahliye.
# BİLEREK YAZILMAYANLAR: pompa filtresi temizliği numaralı adım olarak (servis kapağı bozuk para/tornavida ile açılıyor — ALET KURALI) · nakliye cıvatası sökme (anahtar gerekir) · motor/kart teşhisi (F7 servis) · fiyat.
# Alıntı denetim tablosu: haier-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ekranda Unb yazıp yazmadığına bak."
  - "Kapağı açabildiğinde tamburdaki çamaşırları elle açıp tambura dengeli dağıt."
  - "Yük fazlaysa bir kısmını çıkar; yük ile tambur üstü arasında yaklaşık 15 cm boşluk kalsın."
  - "Kapağı kapat ve tekrar bir sıkma programı çalıştır."
  - "Tamburda ya da deterjan gözünde çok köpük gördüysen bir sonraki yıkamada deterjan miktarını azalt."
  - "Deterjan paketindeki ve kılavuzdaki önerilere uy; mümkünse az köpüklü ya da köpüksüz toz deterjan seç."
faq:
  - q: "Haier çamaşır makinemde Unb ne demek?"
    a: "Haier kılavuzunun kod tablosunda Unb 'Dengesiz yük sorunu.' anlamında. Çözüm: 'Kazandaki yükü kontrol ederek dengeleyin. Yükü azaltın.' Evde yapılacak iş tamamen bu."
  - q: "Makine yıkadı ama sıkmadan bitirdi, neden?"
    a: "Haier'in köpük notuna göre sıkma sırasında çok fazla köpük görülürse motor durur ve tahliye pompası 90 saniye çalışır; bu köpük giderme denemesi 3 kez başarısız olursa program sıkma yapılmadan sona erer. Kılavuz aşırı köpükte deterjan miktarını azaltmanı ve deterjan önerilerini kontrol etmeni istiyor."
  - q: "Birkaç parça yıkarken neden sıkmıyor?"
    a: "Kılavuzun 'Sıkmada sorun var' satırındaki sebep 'Çamaşırlar dengesiz olabilir.' Çözüm, makinedeki yükü kontrol edip tekrar bir sıkma programı çalıştırmak. Haier çamaşırları tek tek yerleştirmeni de öneriyor."
  - q: "Pompa filtresine bakmam gerekir mi?"
    a: "Haier, makine sıkmıyorsa pompa filtresinin kontrol edilmesini de öneriyor. Ancak bu modelde servis kapağı bozuk para ya da tornavida ile açılıyor; alet gerektiren bu adımı burada vermiyoruz. Yük ve köpük kontrolünden sonra sorun sürüyorsa yetkili servise bırak."
images:
  coverAlt: "Önden yüklemeli çamaşır makinesinin açık kapağından görünen, bir tarafa toplanmış ıslak çamaşırlar"
---

Yıkama bitti ama çamaşırlar sırılsıklam, ya da ekranda **Unb** yazıyor. Haier'in HW80/90/100-B14939S8 kılavuzunda bu durumun satırı **"Sıkmada sorun var."** ve Haier'in gösterdiği sebep tek: **çamaşırlar dengesiz olabilir.** Kod tablosunda da **Unb** aynı şeyi söylüyor: **dengesiz yük sorunu.** Kılavuzun köpük notu ise üçüncü bir ihtimali açıyor: çok fazla köpük olursa program **sıkma işlemi yapılmadan** sona erebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda Unb var mı bak; çamaşırları tambura dengeli dağıt, yük fazlaysa azalt, tekrar sıkma programı çalıştır. Köpük çoksa bir sonraki yıkamada deterjanı azalt.

## Adım adım: evde denenecekler

**1. Ekrana bak.** Haier'in kod tablosunda **Unb** görünüyorsa sorun **dengesiz yük**. Kod yoksa ve makine yine sıkmadıysa kılavuzun "Sıkmada sorun var" satırı geçerli; o satırın sebebi de aynı: **çamaşırlar dengesiz olabilir.**

**2. Çamaşırları dengele.** Haier'in Unb için çözümü: **kazandaki yükü kontrol ederek dengeleyin.** Kapağın kilidi açıldığında topaklanmış çamaşırları açıp tambura yay. Haier'in yükleme bölümü de **çamaşırları tek tek yerleştirmeni** istiyor.

**3. Yükü azalt.** Unb satırının ikinci cümlesi: **yükü azaltın.** Haier'in yükleme kuralı: **aşırı yükleme yapmayın**; maksimum yük programdan programa değişiyor ve temel ölçü **yük ile tambur üstü arasında yaklaşık 15 cm'lik bir boşluk** bırakmak.

**4. Sıkma programını tekrar çalıştır.** Haier'in "Sıkmada sorun var" satırındaki çözüm: **makinedeki yükü kontrol edin ve tekrar bir sıkma programı çalıştırın.**

**5. Köpüğü azalt.** Haier'in köpük notu: sıkma sırasında **çok fazla köpük** görülürse **motor durur** ve **tahliye pompası 90 saniye** devreye girer; bu deneme **3 defa başarısız olursa program sıkma işlemi yapılmadan sona erer.** Kılavuzun "aşırı köpük" satırındaki çözüm: **deterjan miktarını azaltın.** Haier ayrıca **aşırı miktarda deterjan veya yumuşatıcı kullanmamanı** ve su sıcaklığını **60°C ve üzerinde** seçiyorsan **daha az deterjan** kullanmanı öneriyor.

**6. Deterjan seçimini gözden geçir.** Aynı satırın diğer sebebi: **deterjan uygun olmayabilir** → **deterjanla ilgili önerileri kontrol edin.** Haier'in deterjan bölümü **sadece makinede yıkama için onaylı deterjanlar** kullanmanı ve **az köpüklü veya köpüksüz toz deterjan** kullanmanın daha iyi olduğunu söylüyor.

## Pompa filtresi ve tahliye

Haier'in bakım bölümü, cihaz **suyu tahliye etmiyor**, **sıkmıyor** ya da **çalışırken anormal şekilde ses çıkarıyorsa** pompa filtresinin kontrol edilmesini öneriyor. Bu modelde filtreye giden servis kapağı için kılavuz **bir bozuk para veya tornavida** kullanılabileceğini yazıyor; alet gerektiren bu işi burada adım olarak vermiyoruz. Ekranda **CLR FLTR** ya da **E5** görüyorsan Haier'e göre su süresinde tamamen **tahliye edilemiyor**; kılavuzun çözümü pompa filtresi ve tahliye hortumunun takılışı. Filtreye kendin ulaşmak istemiyorsan yetkili servise bırak.

Makine hiç başlamıyorsa [Haier çamaşır makinesi çalışmıyor](/blog/haier-camasir-makinesi-calismiyor/), yıkama sonucu kötüyse [Haier çamaşır makinesi temiz yıkamıyor](/blog/haier-camasir-makinesi-temiz-yikamiyor/) yazısına bak. Markadan bağımsız anlatım için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) ve [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazıları var.

## Ne zaman servis

Ekranda **F7** görürsen Haier'in kod tablosunda bu **motor arızası** ve çözüm **satış sonrası hizmetler ile görüşün.** Kılavuz **kendi kendine onarım veya profesyonel olmayan onarım önerilmez** diyor.

⛔ **Kendin-çöz sınırı burada biter.** Yük dengeli ve normal miktarda, köpük yok, sıkma programı tekrar çalıştırıldı ve makine hâlâ sıkmıyorsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
