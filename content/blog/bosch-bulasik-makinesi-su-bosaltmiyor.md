---
title: "Bosch bulaşık makinesi su boşaltmıyor"
description: "Bosch bulaşık makinesi su boşaltmıyorsa Bosch'un sırası: program bitti mi, süzgeçler, tahliye hortumu, sifon bağlantısı ve servis sınırı."
slug: "bosch-bulasik-makinesi-su-bosaltmiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
# md5'ler 28 Eyl yerel kopyalarıyla birebir aynı. #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (K) Bosch bulaşık makinesi SM.../SB... kullanma kılavuzu  https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#  (B) Bosch "Bulaşık Makineleri Bilgilendirme Kılavuzu"  https://media3.bosch-home.com/Documents/MCDOC02761050_BULASIK_MAKINELERI_BILGILENDIRME_KILAVUZU.PDF  2 s.  md5 e42639a08cc28269147fe723597350d3
# Arıza tablosu satırı (K s.38): "Program sona erdikten sonra cihazın içinde su kalıyor." → "Filtre sistemi veya filtrelerin alt bölümü tıkanmış." → "Filtreleri ve alt kısımlarını temizleyiniz."
#   · "Program henüz sona ermedi" → "Program sonunu bekleyiniz veya Reset fonksiyonunu uygulayınız."
# Aynı tablonun E:24 satırı (K s.38): "Atık su hortumu tıkanmış veya katlanmış." → "Hortumu katlanmayacak şekilde yerleştiriniz, gerekirse artıkları gideriniz."
#   · "Sifon bağlantısı henüz kapalı." → "Sifondaki bağlantıyı kontrol ediniz ve gerekirse açınız." · "Atık su pompasının kapağı gevşek." → "Kapağı doğru oturtunuz."
# Diğer: K s.32 Reset ("START tuşuna yakl. 3 saniye basınız ... Program süresi yakl. 1 dakikadır") · K s.34 süzgeç sistemi (kaba/yassı ince/mikro süzgeç; çevirip çözünüz; musluktan akan su altında; ok işaretleri karşı karşıya)
#   · K s.36 atık su pompası ("bulaşık suyu süzgeçten daha yüksek bir seviyede olur"; elektrik şebekesinden ayırınız; sepetler; süzgeçler; "Suyu boşaltınız; gerekirse bir sünger kullanınız.")
#   · K s.47 su çıkış hortumu katlanmamış/dolanmamış, çıkışta akışı engelleyen kapak olmamalı · K s.35 "Onarım çalışmalarını daima uzman kişilere yaptırınız." · K s.46 yetkili servis, E-Nr/FD
#   · B s.2 "Makinenizin boşaltma yapmaması durumunda problem, boşaltma pompasının tıkanmasından kaynaklanıyor olabilir." + makine hareket ettirilince boşaltma hortumu katlanmamalı.
# BİLEREK YAZILMAYANLAR: pompa kapağını açma adımları (K s.36'da var ama cam kırığı uyarılı; bu rehberin kapsamı süzgeç+hortum — pompa için yayındaki E25 rehberine link) ·
#   pompa/kart/seviye müşiri teşhisi (belgede yok) · Reset'in suyu dışarı pompaladığı iddiası (belge yalnız "yakl. 1 dakika" diyor) · makineyi yatırma/eğme (Bosch E15 sayfası buna karşı).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Sünger", "Küçük bir kap"]
steps:
  - "Programın bitip bitmediğine bak; bitmediyse sonunu bekle ya da START tuşuna yaklaşık 3 saniye basarak Reset uygula."
  - "Makineyi AÇIK/KAPALI şalterinden kapat ve fişini prizden çek."
  - "Alt sepeti çıkar, süzgeç silindirini çevirip süzgeç sistemini dışarı al."
  - "Tabanda kalan suyu bir süngerle kaba al."
  - "Kaba süzgeci, yassı ince süzgeci ve mikro süzgeci musluktan akan su altında temizle."
  - "Süzgeç sistemini ok işaretleri karşı karşıya gelecek şekilde geri takıp sepeti yerleştir."
  - "Tahliye hortumunun görebildiğin kısmında katlanma, ezilme ya da dolanma olup olmadığını kontrol et."
  - "Hortumun bağlandığı sifon bağlantısının açık olduğunu kontrol et."
faq:
  - q: "Bosch bulaşık makinesi program bitince içinde su bırakıyor, neden?"
    a: "Bosch'un kullanma kılavuzundaki arıza tablosu 'Program sona erdikten sonra cihazın içinde su kalıyor' satırında iki neden veriyor: filtre sistemi ya da filtrelerin alt bölümü tıkanmış olabilir (çözüm: filtreleri ve alt kısımlarını temizlemek) veya program henüz sona ermemiştir (çözüm: program sonunu beklemek ya da Reset fonksiyonunu uygulamak)."
  - q: "Su süzgecin üstüne kadar çıkmış duruyor, bu ne demek?"
    a: "Bosch'un kılavuzuna göre süzgeçlerin tutamadığı kaba yemek artıkları ya da yabancı cisimler atık su pompasını bloke edebilir; bu durumda bulaşık suyu süzgeçten daha yüksek bir seviyede kalır. Bosch pompa temizliğini kılavuzda ayrı bir bölüm olarak anlatıyor ve cam parçalarına karşı kesilme uyarısı yapıyor. Bunu kendin yapmak istemiyorsan yetkili servise başvur."
  - q: "Makineyi yerinden oynattıktan sonra su boşaltmaz oldu, bağlantılı olabilir mi?"
    a: "Olabilir. Bosch'un bilgilendirme kılavuzu, makine hareket ettirildiğinde boşaltma hortumunun ezilmemesine ve katlanmamasına dikkat edilmesini istiyor. Kullanma kılavuzundaki arıza tablosu da katlanmış ya da tıkanmış atık su hortumu için hortumu katlanmayacak şekilde yerleştirmeyi ve gerekirse artıkları gidermeyi söylüyor."
  - q: "Ekranda E24 ya da E25 yazıyor, bu yazı işime yarar mı?"
    a: "Bosch'un kılavuzunda E24 atık su hortumu, sifon bağlantısı ve pompa kapağıyla; E25 ise atık su pompasının bloke olması ya da kapağının yerine oturmamasıyla ilgili. Kod görüyorsan önce o koda ait sayfamıza bak: Bosch E24 ve Bosch E25 rehberleri bu yazının altında bağlı."
images:
  coverAlt: "Kapağı açık ankastre bulaşık makinesinin tabanında süzgecin çevresinde biriken su; alt sepet dışarı çekilmiş"
---

Program bitti, kapağı açtın ve makinenin tabanında su duruyor. Bosch'un bulaşık makinesi kullanma kılavuzundaki arıza tablosunda bu durumun kendi satırı var: **"Program sona erdikten sonra cihazın içinde su kalıyor."** Bosch'un bu satırda verdiği iki neden de evde kontrol edilebilir: **tıkanmış süzgeçler** ve **henüz bitmemiş bir program.** Aynı tablo, su boşaltma koduyla birlikte **tahliye hortumu** ve **sifon bağlantısını** da sayıyor. Bu yazıda Bosch'un sırasını adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Program gerçekten bitti mi, bitmediyse Reset → fişi çek → süzgeçleri çıkar, tabandaki suyu süngerle al, süzgeçleri musluk altında temizle → tahliye hortumu katlanmış mı → sifon bağlantısı açık mı. Su süzgecin üstünde duruyorsa pompa tıkanmış olabilir; pompa ya da tekrar eden sorun yetkili servisin işi.

## Adım adım: evde denenecekler

**1. Programın bitip bitmediğine bak.** Bosch'un tablosundaki ikinci neden: **program henüz sona ermedi.** Çözüm, program sonunu beklemek ya da **Reset** fonksiyonunu uygulamak. Bosch'un SM/SB kılavuzuna göre Reset için **START tuşuna yaklaşık 3 saniye basılır**; program süresi yaklaşık 1 dakikadır. Gösterge sıfırı gösterdiğinde AÇIK/KAPALI şalterine basarsın.

**2. Makineyi kapat ve fişini çek.** Süzgeçlere dokunmadan önce makineyi AÇIK/KAPALI şalterinden kapat ve fişini prizden çek. Bosch'un kılavuzu, taban bölümüyle ilgili temizlik işine de makineyi **elektrik şebekesinden ayırarak** başlıyor.

**3. Süzgeç sistemini çıkar.** Alt sepeti dışarı al. Bosch'a göre süzgeç sistemi üç parçadan oluşur: **kaba süzgeç, yassı ince süzgeç ve mikro süzgeç.** Süzgeç silindirini çevirip çözerek sistemi dışarı çıkar.

**4. Tabandaki suyu al.** Tabanda su birikmişse Bosch'un tarifi basit: **suyu boşalt; gerekirse bir sünger kullan.** Süngerde topladığın suyu bir kaba boşaltarak devam et.

**5. Süzgeçleri temizle.** Bosch'un tablodaki çözümü: **filtreleri ve alt kısımlarını temizle.** Olası artıkları gider ve süzgeçleri **musluktan akan su altında** temizle. Bosch, her yıkamadan sonra süzgeçlerde kaba pislik toplanıp toplanmadığının kontrol edilmesini de öneriyor; kaba pislikler süzgeçlerde tıkanmaya yol açabilir.

**6. Süzgeçleri doğru tak.** Süzgeç sistemini söktüğün yönün tersine geri tak ve kapattıktan sonra **ok işaretlerinin karşı karşıya** olmasına dikkat et. Sonra sepeti yerine koy.

**7. Tahliye hortumuna bak.** Bosch'un su boşaltma koduyla ilgili satırında ilk neden: **atık su hortumu tıkanmış veya katlanmış.** Hortumun görebildiğin kısmında katlanma, ezilme ya da dolanma varsa düzelt. Bosch'un kurulum bölümü de su çıkış hortumunun katlanmamış ve kendi içinde dolanmamış olmasını, çıkışta suyun akışını engelleyen bir kapak olmamasını istiyor. Makineyi yakın zamanda yerinden oynattıysan buna özellikle bak.

**8. Sifon bağlantısını kontrol et.** Aynı satırdaki ikinci neden: **sifon bağlantısı henüz kapalı.** Bosch'un çözümü sifondaki bağlantıyı kontrol etmek ve gerekirse açmak. Bosch'un kurulum bölümüne göre su çıkış hortumu, sifonun tahliye ucuna bağlanır.

Adımlardan sonra fişi tak ve makineyi yeniden çalıştır.

## Su süzgecin üstünde duruyorsa: pompa

Bosch'un kılavuzu bir ipucu daha veriyor: süzgeçlerin tutamadığı kaba artıklar ya da yabancı cisimler **atık su pompasını bloke edebilir; bu durumda bulaşık suyu süzgeçten daha yüksek bir seviyede kalır.** Bosch'un bilgilendirme kılavuzu da makine boşaltma yapmıyorsa sorunun **boşaltma pompasının tıkanmasından** kaynaklanabileceğini söylüyor.

Pompa kapağının temizliği kılavuzda anlatılıyor ama Bosch'un uyarısı açık: **keskin ve sivri cisimler veya cam parçaları** pompayı bloke edebilir, yabancı cisimler dikkatle çıkarılmalı. Pompa temizliğini Bosch'un kendi sırasıyla [Bosch bulaşık makinesi E25 hatası](/blog/bosch-bulasik-makinesi-e25-hatasi/) rehberinde anlattık. Ekranda su boşaltmayla ilgili kod görüyorsan [Bosch bulaşık makinesi E24 hatası](/blog/bosch-bulasik-makinesi-e24-hatasi/) yazısına bak; diğer kodlar [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/) sayfasında.

Markadan bağımsız anlatım için [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) ve [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazılarına bakabilirsin.

## Ne zaman servis

Süzgeçler temiz, hortum düz, sifon bağlantısı açık ve makine hâlâ su bırakıyorsa Bosch'un kılavuzu şunu söylüyor: **hatayı veya arızayı gidermeyi başaramazsan yetkili servisine başvur.** Bosch'un uyarısına göre gerektiği şekilde yapılmayan onarımlar ciddi tehlikelere yol açabilir; **onarım çalışmaları daima uzman kişilere** yaptırılmalı.

Servisi ararken Bosch, cihaz kapısındaki tip etiketinde yazan **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** bildirmeni istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Süzgeç, hortum ve sifon bağlantısı kullanıcıya; makinenin içi ve pompanın arızası uzmana aittir.

## Servisi aramadan önce kısa özet

1. Su program bittikten sonra mı kalıyor, yoksa program ortasında mı durdu?
2. Su süzgecin altında mı kalıyor, üstüne kadar mı çıkmış?
3. Süzgeçler temizlendi mi, doğru takıldı mı?
4. Tahliye hortumu düz mü, sifon bağlantısı açık mı?
5. Ekranda bir hata kodu var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
