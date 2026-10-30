---
title: "İndüksiyon ocak hata kodları: Vestel ve Arçelik kılavuzu"
description: "İndüksiyon ocak göstergesinde E1, E3, E5 gibi kod mu çıktı? Vestel ve Arçelik kılavuzlarındaki kod tablosuna göre ne anlama geldiğini ve ne yapacağını gör."
slug: "induksiyon-ocak-hata-kodlari"
date: "2026-10-30"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P22 (YK #197 boşluk, #145). Slug origin/main'de yok.
# Kanıt: BOSLUK.md #145 — OT "indüksiyon ocak hata" #1–#8. Envanter: genel indüksiyon hata kodu yazısı yok; yakın: vestel-ocak-u-hatasi (yalnız U), siemens-induksiyon-ocak-tencereyi-algilamiyor.
# Belgeler (#88, iki üretici, curl HTTP 200): Vestel AO-78430 S ocak kullanım kılavuzu (20263658_k) s.28 · Arçelik OD 834 F ocak kullanma kılavuzu s.26. Alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: belgede olmayan kodlar (E0, F...) · forum/üçüncü taraf kod listesi · bobin, sensör, fan, kart onarımı (servis işi) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru bez"]
steps:
  - "Göstergedeki kodu harfi ve rakamıyla aynen not et."
  - "Kumanda bölümünün üzerinde su, kap ya da mutfak eşyası varsa kaldır ve yüzeyi kurula."
  - "Sıcaklık kodunda ocağı kapat ve ısıtıcıların soğumasını bekle."
  - "Besleme kodlarında ocağı kapatıp tüm bölmelerde H kaybolana kadar bekle, sonra yeniden aç."
  - "Aynı kod tekrar çıkarsa kullanmayı bırak ve kodu söyleyerek yetkili servisi ara."
  - "Fan, sensör ve haberleşme kodlarında kendin müdahale etme, doğrudan servis çağır."
faq:
  - q: "İndüksiyon ocakta E5 ne demek?"
    a: "Vestel kılavuzuna göre E5, ocağın iç sıcaklığının çok yüksek olduğunu gösterir. Ocağı kapatıp ısıtıcıların soğumasını beklemen istenir. Arçelik OD 834 F kılavuzunda benzer anlamı E2 taşır: komut bölmesi aşırı yüksek sıcaklık nedeniyle kapanır ve ocağı tekrar kullanmadan önce soğumasını beklemen gerekir."
  - q: "Hata kodu çıktı ama kılavuzumda yazmıyorsa ne yapmalıyım?"
    a: "Arçelik kılavuzu, tabloda olmayan E ya da U ile başlayan sinyallerde müşteri hizmetlerini aramanı ve hata kodunu söylemeni istiyor. Vestel kılavuzu da aynı hatanın tekrarında yetkili servisi aramanı söylüyor. Kodu tahmin etmeye çalışma."
  - q: "Her üreticide aynı kod aynı şeyi mi gösterir?"
    a: "Hayır. Kod anlamları markaya ve modele göre değişir. Vestel E5'i iç sıcaklık için kullanırken Arçelik aynı durumu E2 ile gösteriyor. Kendi ocağının kılavuzundaki tablo esastır."
  - q: "Ocak ekranında ERR03 ve bip sesi ne demek?"
    a: "Arçelik OD 834 F kılavuzuna göre sürekli tuş algılanıyor demektir. Arayüzün üstünde su, kap ya da mutfak eşyası vardır ve arayüz 10 saniye sonra kapanır. Çözüm yüzeyi temizleyip üzerindeki tüm nesneleri kaldırmaktır."
images:
  coverAlt: "Cam yüzeyli indüksiyon ocağın dokunmatik kumanda bölümünde yanan gösterge"
  steps:
    - "Ocağın gösterge alanını işaret eden beyaz eldivenli sade siluet el"
    - "Ocağın kumanda bölümündeki kabı kaldırıp yüzeyi bezle silen beyaz eldivenli sade siluet el"
    - "Kapalı ocağın yanında bekleyen, soğumayı gösteren sade zaman simgesi ve beyaz eldivenli sade siluet el"
    - "Ocağın açma kapatma tuşuna dokunan beyaz eldivenli sade siluet el"
    - "Telefon ahizesini tutan beyaz eldivenli sade siluet el ve yanında ocak çizimi"
    - "Kapalı ocağa dokunmadan uzakta duran beyaz eldivenli sade siluet el ve servis aleti simgesi"
---

İndüksiyon ocağın göstergesinde bir anda "E5" ya da "E3" yazıyor ve ocak kapanıyor. Her kod arıza anlamına gelmez: bazıları ocağın kendini aşırı ısınmadan koruması, bazıları kumanda bölümünün üstünde unutulmuş bir kap.

Bu yazı iki üreticinin kılavuzuna dayanıyor: **Vestel AO-78430 S** (hava çekme üniteli indüksiyon ocak) ve **Arçelik OD 834 F**. Kod anlamları markadan markaya değişir. Aşağıdaki tablolar yalnızca bu iki kılavuzda yazanı anlatıyor; senin ocağın başka bir markaysa kendi kılavuzundaki tabloya bak.

> ⚡ **Kısa özet:** Sıcaklık kodlarında (Vestel E5, Arçelik E2) ocağı kapat, soğumasını bekle. Besleme kodlarında kapatıp yeniden aç. Fan, sensör ve haberleşme kodlarında servisi ara.

## Adım adım: kodu gördüğünde

**1. Kodu aynen not et.** Vestel kodları ısıtıcı göstergelerinde gösteriyor. Harf ve rakamı değiştirmeden yaz: E3 ile EC ya da C1 ile C8 aynı şey değildir. Arçelik, tabloda olmayan bir sinyalde müşteri hizmetlerine kodu söylemeni istiyor.

**2. Kumanda bölümünü kontrol et.** Arçelik'in ERR03 kodu, kumanda arayüzünün üstünde su, kap ya da mutfak eşyası olduğunda çıkıyor ve arayüz 10 saniye sonra kapanıyor. Kılavuzun çözümü bu: yüzeyi temizle ve üzerindeki tüm nesneleri kaldır.

**3. Sıcaklık kodunda soğumasını bekle.** Vestel E5'i "ocağın iç sıcaklığı çok yüksek" diye tanımlıyor ve ocağı kapatıp ısıtıcıların soğumasını bekle diyor. Arçelik E2 için aynı şeyi söylüyor: komut bölmesi aşırı sıcaklık nedeniyle kapanır, tekrar kullanmadan önce soğumasını bekle.

**4. Besleme kodunda kapat, bekle, aç.** Vestel E3 (besleme voltajı nominal değerlerin dışında) için ocağı kapatıp tüm bölmelerde "H" kaybolana kadar beklemeni, sonra açıp devam etmeni istiyor. E4 (besleme frekansı) için aynı yol geçerli; hata sürerse kılavuz fişi prizden çekip tekrar takmanı söylüyor. EA, EC ve C1-C8 kodlarında ocağı kapatıp aynı tuşla yeniden açman yeterli diyor.

**5. Aynı kod geri gelirse servis.** Vestel, kapat-aç yolunu anlattığı kodların sonunda "aynı hata tekrarlarsa yetkili servis temsilcisini arayın" diyor. Arçelik de tabloda olmayan her E ya da U sinyali için müşteri hizmetlerini arıyor.

**6. Servis kodlarına müdahale etme.** Vestel E1, E6, E7 ve E8 için yalnızca yetkili servisi çağırmanı istiyor. Bunlar fan, haberleşme ve sensör kodlarıdır.

## Vestel ve Arçelik kodları yan yana

| Kod | Kılavuzdaki anlamı | Kılavuzun yönlendirmesi |
|---|---|---|
| Vestel E1 | Soğutma fanı devre dışı | Yetkili servis çağır |
| Vestel E3 | Besleme voltajı nominal değerlerin dışında | Kapat, H kaybolunca aç; tekrarlarsa servis |
| Vestel E4 | Besleme frekansı nominal değerlerin dışında | Kapat, H kaybolunca aç; sürerse fişi çekip tak; tekrarlarsa servis |
| Vestel E5 | Ocağın iç sıcaklığı çok yüksek | Kapat, soğumasını bekle |
| Vestel E6 | Dokunmatik kontrol ile ısıtıcı arasında haberleşme hatası | Yetkili servis çağır |
| Vestel E7 | Bobin sıcaklık sensörü devre dışı | Yetkili servis çağır |
| Vestel E8 | Soğutucu sıcaklık sensörü devre dışı | Yetkili servis çağır |
| Vestel EA | Büyük bobin satürasyon hatası | Kapat-aç; tekrarlarsa servis |
| Vestel EC | Voltaj besleme hatası | Kapat-aç; tekrarlarsa servis |
| Vestel C1-C8 | Mikroişlemci uyarısı | Kapat-aç; tekrarlarsa servis |
| Arçelik E2 | Aşırı yüksek sıcaklık nedeniyle komut bölmesi kapanır | Soğumasını bekle |
| Arçelik ERR03 + sinyal | Sürekli tuş aktivasyonu | Yüzeyi temizle, nesneleri kaldır |
| Arçelik diğer E, U | Tabloda tanımlı değil | Müşteri hizmetlerini ara, kodu söyle |

## Aşırı ısınma kodları neden çıkar?

Sıcaklık kodları çoğu zaman ocağın kendini korumasıdır. Vestel E5'te iç sıcaklığın çok yüksek olduğunu söylüyor. Arçelik E2'de elektronik parçaların sıcaklığının çok yüksek olduğunu yazıyor. İki kılavuz da çözümü aynı veriyor: ocağı tekrar kullanmadan önce soğumasını bekle.

Ocağı kapattıktan sonra hemen yeniden açıp devam etme; kılavuzlar önce soğumayı bekle diyor. Kod her seferinde aynı biçimde geri geliyorsa kılavuzun yönlendirmesi nettir: servisi ara.

## Servise ne söylemelisin?

Servisi aradığında tek cümlede şunları ver: ocağın markası ve modeli, ekranda görünen kodun harf ve rakamı, kodun ne zaman çıktığı (açarken mi, pişirirken mi, uzun süre sonra mı) ve kapat-aç denemesinin sonucu. Arçelik kılavuzu tam olarak bunu istiyor: müşteri hizmetlerini ara ve hata kodunu söyle. Kodu bu şekilde vermek servisin doğru parçayla gelmesini kolaylaştırır.

## Kodsuz ama benzer belirtiler

Ocak kod göstermeden de ısıtmayabilir. O durumda kabı kontrol et: Arçelik kılavuzu pişirme kabının manyetik olup olmadığını mıknatısla denemeni istiyor. Kap manyetik olarak algılanamıyorsa o kap bu ocağa uygun değildir. Tencere algılama sorunları için [Siemens indüksiyon ocak tencereyi algılamıyor](/blog/siemens-induksiyon-ocak-tencereyi-algilamiyor/) ve Vestel'deki U göstergesi için [Vestel ocak U hatası](/blog/vestel-ocak-u-hatasi/) yazılarına bak. Camın kendisi ısınmıyorsa [cam seramik ocak ısınmıyor](/blog/cam-seramik-ocak-isinmiyor/) yazısı da işine yarar.

## Buradan sonrası servis işi

Kapat-aç ve soğumayı beklemek kullanıcıya aittir. Ocağın içindeki fan, bobin, sensör ve kumanda kartı yetkili servisin işidir; ocağı sökme, camı kaldırma. Cam yüzeyde çatlak varsa ocağı hiç kullanma ve servis çağır.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
