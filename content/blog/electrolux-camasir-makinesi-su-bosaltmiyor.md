---
title: "Electrolux çamaşır makinesi su boşaltmıyor"
description: "Electrolux çamaşır makinesi suyu boşaltmıyorsa önce program ve Sessiz seçeneği, sonra hortum, lavabo borusu ve pompa filtresi. Electrolux'un sırası."
slug: "electrolux-camasir-makinesi-su-bosaltmiyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi, HTTP 200, application/pdf.
# (Düz -A "Mozilla/5.0" ile electrolux.com.tr 000/zaman aşımı veriyor; Chrome UA + Accept/Accept-Language/Sec-Fetch başlıklarıyla 200.) #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Belge adresi: electrolux.com.tr ürün sayfası (/laundry/laundry/washing-machines/front-loader-washing-machine/ew8f7417qt/) "Kullanma Kılavuzu" bağlantısı electrolux.bynder.com/.../2408314AXD-pdf.pdf;
#   aynı belge kimliği (2408314AXD) www.electrolux.com.tr/services/eml/ yolundan indirildi, iki dosyanın md5'i birebir aynı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (E) Electrolux EW8F7417QT çamaşır makinesi kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/ad871a8b-e93c-46e3-b647-bd0475695b2c/E4RM3Q/2408314AXD/PDF/2408314AXD.pdf  56 s.  md5 d1fe605dbe55bda4a842f4f7671dca3e
# Arıza tablosu (E s.48) "Cihaz suyu tahliye etmiyor." (uyarı: "Tahliye filtresinin tıkalı olmadığını kontrol edin"):
#   · "Lavabo borusunun tıkalı olmadığından emin olun." · "Tahliye hortumunda dolanma veya bükülme olmadığından emin olun."
#   · "Tahliye filtresinin tıkalı olmadığından emin olun. Gerekirse, filtreyi temizleyin." · "Tahliye hortumunun bağlantısının doğru olduğundan emin olun."
#   · "Tahliye aşaması olmayan bir program ayarladıysanız, tahliye programını ayarlayın. Tahliye programı program düğmesinde yoksa, Uygulama üzerinden ayarlanabilir."
#   · "Kazanda su bırakacak bir seçenek ayarladıysanız, tahliye programını ayarlayın."
# Diğer: E s.47 "Herhangi bir kontrol yapmadan önce, cihazı devre dışı bırakın." · E s.48 "Makine hemen suyla doluyor ve su hemen tahliye ediliyor" → hortum çok alçakta olabilir
#   · E s.30 12.7 Sessiz: program kazandaki su boşaltılmadan sona erer, kapak kilitli kalır; Başlat/Beklet'e dokunulursa yalnız su boşaltma; ~18 saat aşılınca otomatik boşaltma
#   · E s.38 14.13 suyun boşaltılmadığı program/seçenek: kapak kilitli, Başlat/Beklet göstergesi yanıp söner, "Kapıyı açmak için suyu tahliye etmelisiniz."
#   · E s.10-11 hortum ucu 60-100 cm, boğum, ucun boşaltılan suyun içinde kalmaması (sifon), boru iç çapı min 38 mm · E s.19 Sıkma/Boşaltma programı
#   · E s.44-46 16.9 pompa temizliği (fiş çek; su sıcaksa soğuyana kadar bekle; kap + bez; filtreyi 180° çevir; çıkar; tüy/nesne temizle; çark dönüyor mu → değilse servis; saat yönünde sıkıca tak; kapağı kapat)
#   · E s.46 acil boşaltma sonrası: "Deterjan gözünün ana yıkama bölmesine 2 litre su koyun." + programı başlat · E s.41 pompa filtresi "Yılda iki kez" · E s.50 servis, bilgi etiketi
# BİLEREK YAZILMAYANLAR: pompa/motor/kart teşhisi (belgede yok) · pompa çarkını elle çevirme talimatı (belge yalnız "döndüğünden emin olun, değilse servis" diyor; servis bölümünde anıldı)
#   · giriş hortumu/valf filtresi sökümü (halka somun, diş fırçası; bu belirtiyle ilgisiz) · Uygulama üzerinden program ayarının adımları (belgede yok) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-camasir-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Geniş bir kap", "Bez"]
steps:
  - "Seçtiğin program ya da seçenek suyu kazanda bırakıyorsa tahliye programını ayarla."
  - "Tahliye hortumunda dolanma ya da bükülme olmadığını kontrol et."
  - "Tahliye hortumunun bağlantısını ve lavabo borusunun tıkalı olmadığını kontrol et."
  - "Makineyi kapat, fişini çek; içerideki su sıcaksa soğumasını bekle."
  - "Pompa kapağını aç, altına geniş bir kap koy, yanına bez al."
  - "Filtreyi çıkarmadan saat yönünün tersine 180 derece çevir, suyu kaba boşalt."
  - "Filtreyi çıkar, tüy ve cisimleri temizle, saat yönünde sıkıca geri tak ve kapağı kapat."
  - "Ana yıkama bölmesine 2 litre su koy ve programı başlat."
faq:
  - q: "Program bitti ama tamburda su kaldı, kapak açılmıyor. Arıza mı?"
    a: "Her zaman değil. Electrolux'un kılavuzuna göre son durulamadan sonra suyun boşaltılmadığı bir program ya da seçenek seçildiyse program tamamlanır ama kapak kilitli kalır, Başlat/Beklet göstergesi yanıp söner ve kapağı açmak için suyu tahliye etmen gerekir. EW8F7417QT'deki Sessiz seçeneği de programı kazandaki su boşaltılmadan bitirir; bu durumda Başlat/Beklet tuşuna dokunursan makine yalnız su boşaltma aşamasını yapar. Kılavuza göre yaklaşık 18 saatlik azami süre aşılırsa makine suyu kendiliğinden boşaltır."
  - q: "Pompa filtresini ne sıklıkla temizlemeliyim?"
    a: "Electrolux'un periyodik temizlik takviminde tahliye pompası filtresi için 'yılda iki kez' yazıyor. Kılavuz ayrıca pompanın şu durumlarda temizlenmesini istiyor: cihaz suyu tahliye etmiyorsa, tambur dönmüyorsa, tahliye pompası engellendiği için normal olmayan sesler geliyorsa ve ekranda 'Tahliye filtresinin tıkalı olmadığını kontrol edin' mesajı belirirse."
  - q: "Makine su alırken suyu hemen boşaltıyor. Neden?"
    a: "Electrolux'un sorun giderme tablosunda bu durum ayrı bir satır: tahliye hortumunun doğru konumda olduğundan emin olun, hortum çok alçakta olabilir. Kılavuzun montaj bölümüne göre tahliye hortumunun ucu 60 cm'den az ve 100 cm'den fazla olmayacak bir yüksekliğe sabitlenmeli; hortum ucu boşaltılan suyun içinde kalırsa kirli su sifon etkisiyle makineye geri dönebilir."
  - q: "Filtreyi temizledikten sonra makine yine su boşaltmıyorsa ne yapmalıyım?"
    a: "Electrolux'un pompa temizliği talimatında bir kontrol daha var: pompa çarkının döndüğünden emin olunması; dönmüyorsa kılavuz Yetkili Servis Merkezi ile iletişime geçmeni söylüyor. Kontrollerden sonra sorun tekrarlanırsa da kılavuzun yönlendirmesi aynı: Yetkili Servis Merkezi. Servis için gereken bilgiler cihazın bilgi etiketinde."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin alt köşesinde açılmış küçük pompa kapağı, önünde zemine konmuş geniş bir plastik kap ve katlanmış bir bez"
---

Program bitti, tamburda hâlâ su var ya da makine tahliye aşamasında takılı kalıyor. Electrolux'un EW8F7417QT kullanma kılavuzundaki sorun giderme tablosunda bu durum **"Cihaz suyu tahliye etmiyor."** diye geçiyor; ekranda da **"Tahliye filtresinin tıkalı olmadığını kontrol edin"** uyarısı çıkabiliyor. Electrolux bu satırda altı kontrol sayıyor ve bunların ikisi doğrudan seçtiğin programla ilgili. Bu yüzden bu yazıda sırayı tersten kuruyoruz: önce ayar, sonra hortum ve lavabo, en son pompa filtresi. Kaynak tek bir modelin kılavuzu; tuş ve seçenek adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Suyu kazanda bırakan bir program ya da seçenek (ör. Sessiz) seçili mi bak → hortumda büküm var mı → hortum bağlantısı ve lavabo borusu → fişi çek, su soğusun → pompa filtresinden suyu kaba boşalt, filtreyi temizle → ana yıkama bölmesine 2 litre su koyup programı başlat. Pompa çarkı dönmüyorsa Electrolux'un yönlendirmesi Yetkili Servis.

## Adım adım: evde denenecekler

**1. Önce programa bak.** Electrolux'un tablosundaki iki çözüm doğrudan ayarla ilgili: **tahliye aşaması olmayan bir program** ya da **kazanda su bırakacak bir seçenek** ayarladıysan **tahliye programını** ayarla. Kılavuza göre tahliye programı program düğmesinde yoksa Uygulama üzerinden ayarlanabiliyor. EW8F7417QT'nin program tablosunda **Sıkma/Boşaltma** programı var; Electrolux bunu çamaşırı sıkmak ve tamburdaki suyu boşaltmak için tarif ediyor. Kazanda su bırakan seçeneğe bir örnek **Sessiz**: bu seçenekle ara ve son sıkmalar iptal edilir, program kazandaki su boşaltılmadan biter ve kapak kilitli kalır. Bu durumda **Başlat/Beklet** tuşuna dokunursan makine yalnız su boşaltma aşamasını yapar.

**2. Hortumda büküm var mı bak.** Tablodaki bir sonraki kontrol: **tahliye hortumunda dolanma veya bükülme olmadığından emin ol.** Hortumu makinenin arkasından lavaboya ya da duvar borusuna kadar gözle takip et.

**3. Bağlantıyı ve lavabo borusunu kontrol et.** Electrolux iki şey daha istiyor: **tahliye hortumunun bağlantısının doğru olması** ve **lavabo borusunun tıkalı olmaması.** Kılavuzun montaj bölümüne göre hortumun ucu **60 cm'den az ve 100 cm'den fazla olmayan** bir yükseklikte sabitlenir; hortum ucu boşaltılan suyun içinde kalmamalı, tahliye borusunun iç çapı da hortumun dış çapından geniş olmalı.

**4. Fişi çek, suyun soğumasını bekle.** Buradan sonrası pompa filtresi. Electrolux'un iki uyarısı var: herhangi bir kontrol yapmadan önce **cihazı devre dışı bırak**, pompa temizliğinde **elektrik fişini prizden çek.** Kılavuza göre cihaz çalışırken filtre çıkarılmaz; makinedeki su sıcaksa **su soğuyana kadar beklenir.**

**5. Kap ve bezi hazırla.** **Pompanın kapağını aç.** Electrolux'un sırası: dışarı sızan suyu biriktirmek için tahliye pompası erişiminin altına **uygun bir kap** koy, kanalı aşağı doğru aç ve filtreyi çıkarırken dökülen suyu silmek için yanında mutlaka **bir bez** bulundur.

**6. Suyu kaba boşalt.** Filtreyi **çıkarmadan**, açmak için **saat yönünün tersine 180 derece** çevir ve suyun akmasına izin ver. Kap dolunca filtreyi tekrar çevirip kabı boşalt; Electrolux'a göre bu iki adım **su sızıntısı sona erene kadar** tekrarlanır.

**7. Filtreyi temizle ve geri tak.** Filtreyi saatin tersi yönünde çevirerek çıkar, gerekirse **tüyleri ve nesneleri** filtre gözünden çıkar. Electrolux'un sırasına göre filtre **saat yönünde çevrilerek** özel yuvasına geri takılır; sızıntı olmaması için filtreyi **doğru şekilde sıktığından** emin ol. Sonra pompa kapağını kapat.

**8. Tahliye sistemini yeniden başlat.** Bu adım Electrolux'a özgü: suyu bu yolla boşalttığında kılavuza göre **tahliye sistemini tekrar etkinleştirmen** gerekiyor. Fişi tak, **deterjan gözünün ana yıkama bölmesine 2 litre su koy** ve suyu boşaltmak için programı başlat.

## Arıza olmayan durumlar

**Program bitti ama kapak kilitli, su içeride.** Electrolux'a göre suyun boşaltılmadığı bir program ya da seçenek seçildiyse program tamamlanır, ekranda su boşaltma aşaması gösterilir, Başlat/Beklet göstergesi yanıp söner ve kırışmayı önlemek için tambur aralıklarla döner. Kapağı açmak için suyu tahliye etmen gerekir; bu bir arıza değil, seçilen ayarın sonucu.

**Makine su almadan önce kısa süre boşaltma yapıyor.** Kılavuza göre cihaz su almadan önce tahliye pompası kısa bir süreliğine çalışabilir.

Filtre temizliğinin markadan bağımsız anlatımı için [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) rehberine, genel nedenler için [çamaşır makinesi su atmıyor](/blog/camasir-makinesi-su-atmiyor/) yazısına bakabilirsin. Makine hiç başlamıyorsa kardeş rehberimiz [Electrolux çamaşır makinesi çalışmıyor](/blog/electrolux-camasir-makinesi-calismiyor/) sayfasına geç.

## Ne zaman servis

Electrolux'un kılavuzu iki yerde doğrudan servisi gösteriyor:

- Pompa temizliğinde **pompa çarkının döndüğünden emin olunması** isteniyor; **dönmüyorsa** Yetkili Servis Merkezi ile iletişime geç.
- Ekranda tablodakilerden **başka alarm kodları** görünüyorsa kılavuzun yönlendirmesi: cihazı kapatıp yeniden çalıştır; sorun devam ederse Yetkili Servis Merkezi ile temasa geç.

Yukarıdaki kontrollerden sonra sorun tekrarlanırsa da Electrolux'un sözü aynı: **Yetkili Servis Merkezi ile iletişim kur.** Servis için gerekli bilgiler cihazın **bilgi etiketinde** yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Program, hortum, lavabo borusu ve pompa filtresi kullanıcıya; pompa ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Hangi programı ve hangi seçenekleri seçmiştin, Sessiz açık mıydı?
2. Ekranda hangi uyarı ya da alarm yazıyor?
3. Hortumda büküm var mı, hortum ucu hangi yükseklikte?
4. Pompa filtresinden su ve tüy çıktı mı?
5. Filtreyi temizledikten sonra 2 litre suyla başlattığın program suyu boşalttı mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
