---
title: "Mutfak robotu ısınınca çalışmıyor: aşırı yük koruması"
description: "Mutfak robotu ısınınca duruyor ya da çalışmıyorsa Bosch MultiTalent 3 ve Arzum AR 1064 kılavuzuna göre aşırı yük emniyeti, soğuma, miktar ve süre."
slug: "mutfak-robotu-isininca-calismiyor"
date: "2026-11-10"
category: "Küçük Ev Aletleri"
updated: "2026-11-10"
kisaCevap: "Mutfak robotu ısınıp durduysa aşırı yük emniyeti devreye girmiştir. Bosch MultiTalent 3 kılavuzu döner şalteri 0'a almanı, malzemeyi azaltmanı ve emniyetin devre dışı kalması için cihazın soğumasını beklemeni istiyor. Arzum AR 1064 robotu 20 saniyeden fazla sürekli çalıştırmamanı, 1 dakika ara vermeni yazıyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı, parti 8 (YK #215; BOSLUK.md sürüm 4 #388 "mutfak robotu ısınınca çalışmıyor (aşırı ısınma koruması)"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: kiwi-rondo-kullanimi (aşırı yük notu, tek ürün), philips-blender-calismiyor. #389 "mutfak robotu çalışmıyor" ayrı satır; bu yazı yalnız ısınma/aşırı yük niyeti.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "mutfak robotu ı" #1 "mutfak robotu ısınınca çalışmıyor" (tek öneri). GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Bosch MultiTalent 3 / 3Plus MCM3... kompakt mutfak robotu kullanım kılavuzu 8001381371_C (104 s. PDF, TR s.76-81) https://media3.bsh-group.com/Documents/8001381371_C.pdf md5 cdc91ac37306204d3f2714b5cdbdf421 — PDF s.76, 77, 78, 79, 80, 81 · (B) Arzum AR 1064 Maxthon mutfak robotu kullanma kılavuzu (19 s. PDF, TR s.2-6) https://www.arzum.com.tr/Data/EditorFiles/kullanma-kilavuzlari/8693184957905.pdf md5 b87e0c73f75986592474571f20e90381 — PDF s.3, 4, 5, 6.
# BİLEREK YAZILMAYANLAR: soğuma için dakika (Bosch MCM3 süre vermiyor; yazı süre uydurmuyor) · Arzum'da aşırı ısınma koruması olup olmadığı (belgede yok; yalnız süre sınırı) · motor, termik, kart onarımı (servis) · fiyat (#46).
# Alıntı denetimi: mutfak-robotu-isininca-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika (soğuma dahil)"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Yemek kaşığı ya da spatula", "Mutfak robotunun kullanma kılavuzu"]
steps:
  - "Döner şalteri 0'a al ve fişi prizden çek."
  - "Haznedeki malzeme miktarını azalt."
  - "Bıçağı ya da aleti tıkayan parçayı çıkar."
  - "Robotu soğumaya bırak."
  - "Kabı, kapağı ve aleti yeniden doğru tak."
  - "Kısa süreler halinde çalıştır ve aralarda dinlendir."
  - "Soğuduktan sonra da çalışmıyorsa yetkili servise başvur."
faq:
  - q: "Mutfak robotu neden ısınınca kapanır?"
    a: "Bosch MultiTalent 3 kılavuzuna göre aşırı yüklenme emniyeti, motorun ve diğer parçaların çok yüksek yüklenme nedeniyle hasar görmesini önler. Sorun tablosu cihazın işleme sırasında kapanmasını çok yüksek işleme miktarına ya da çok uzun işleme süresine bağlıyor."
  - q: "Mutfak robotu ısındıktan sonra ne kadar beklemeliyim?"
    a: "Bosch MultiTalent 3 kılavuzu dakika vermiyor; aşırı yüklenme emniyetinin devre dışı kalması için cihazın soğumasını beklemeni istiyor. Arzum AR 1064 normal kullanımda 20 saniyelik çalışmadan sonra 1 dakika ara veriyor."
  - q: "Hangi malzemeler mutfak robotunu zorlar?"
    a: "Bosch kemik, kıkırdak ya da çekirdek gibi sert parçalar içeren gıdaları işlememeni ve küp buz dışındaki dondurulmuş gıdaları mikser üst parçasında sıvısız işlememeni istiyor. Arzum bıçaklarla buz gibi çok sert cisimleri parçalamamanı yazıyor."
  - q: "Mutfak robotu hiç çalışmıyorsa da ısınma mı nedendir?"
    a: "Her zaman değil. Bosch tablosu iki ayrı neden daha sayıyor: cihaza güç gitmemesi ya da kabın, kapağın veya aksesuarın doğru yerleştirilmemesi. Arzum'da da hazne ve kapak tam yerine oturup kilitlenmeden robot çalışmaz."
images:
  coverAlt: "Sade mutfak robotu ve yanında kum saati çizimi"
  steps:
    - "Mutfak robotunun döner şalterini sıfıra çeviren beyaz eldivenli sade siluet el"
    - "Robot haznesinden kaşıkla malzeme alan beyaz eldivenli sade siluet el"
    - "Robot bıçağının etrafındaki parçayı kaşıkla ayıran beyaz eldivenli sade siluet el"
    - "Kapalı mutfak robotunun yanında kum saati tutan beyaz eldivenli sade siluet el"
    - "Hazne kapağını çevirerek kilitleyen beyaz eldivenli sade siluet el"
    - "Robotun düğmesine kısa basan beyaz eldivenli sade siluet el"
    - "Mutfak robotunu kutusuna koyan beyaz eldivenli sade siluet el"
---

Mutfak robotu çalışırken ısınıp durduysa ya da ısındıktan sonra açılmıyorsa önce döner şalteri 0 konumuna al ve fişi çek. Bosch MultiTalent 3 kılavuzuna göre bu durumda aşırı yüklenme emniyeti devreye girmiştir: işleme miktarı çok yüksek ya da işleme süresi çok uzundur. Bosch malzemeyi azaltmanı ve emniyetin devre dışı kalması için cihazın soğumasını beklemeni istiyor.

Arzum AR 1064 kılavuzu süre sınırını rakamla veriyor: robotu 20 saniyeden fazla sürekli çalıştırma, gerekirse 1 dakikalık aradan sonra devam et ve cihazı fazla yük ve kapasiteyle kullanma. İşlem haznesinin en fazla karıştırma kapasitesi 1,2 litredir.

> ⚠️ **Sınır.** Motor, termik koruma ve elektrik onarımı servis işidir. Bosch onarımı yalnız eğitimli uzman personele bırakıyor; Arzum herhangi bir aksaklıkta robotu çalıştırmamanı ve yetkili servise başvurmanı istiyor.

## Mutfak robotu neden ısınınca çalışmaz?

| Belirti | Bosch MultiTalent 3 | Arzum AR 1064 |
|---|---|---|
| İşleme sırasında kapanıyor | Miktar çok yüksek ya da süre çok uzun: şalter 0, miktarı azalt, soğumasını bekle | 20 sn'den uzun sürekli çalıştırma; 1 dk ara ver |
| Bıçak dönmüyor | Cihaz ya da aksesuar bloke: şalter 0, blokajı kaldır | Bıçakla buz gibi çok sert cisim parçalama |
| Hiç başlamıyor | Kap, kapak ya da aksesuar yanlış takılı | Hazne ve kapak kilitlenmeden çalışmaz |
| Güç yok | Cihaza akım gidip gitmediğini kontrol et | Belgede ayrı satır yok |

## Adım adım: mutfak robotu ısınıp durduysa ne yapılır?

**1. Döner şalteri 0'a al ve fişi prizden çek.** Bosch sorun tablosu ilk iş olarak döner şalteri kapalı konuma getirmeni istiyor. Bosch cihazı her kullanımdan sonra, parçalarına ayırmadan ya da dönen parçalara yaklaşmadan önce elektrik şebekesinden ayırmanı yazıyor. Arzum aksesuar çıkarmadan önce motorun iyice durduğundan emin olmanı söylüyor.

**2. Haznedeki malzeme miktarını azalt.** Bosch azami işleme miktarlarını aşmamanı istiyor; tablolardaki azami miktarı işlediğinde önerilen azami süreye uymanı yazıyor. Arzum işlem haznesini 1,2 litreden, blenderi 1 litreden fazla doldurmamanı istiyor. Fazlayı bir yemek kaşığıyla al.

**3. Bıçağı ya da aleti tıkayan parçayı çıkar.** Bosch tablosu cihaz ya da aksesuar bloke olduğunda şalteri 0'a alıp blokajı kaldırmanı istiyor. Keskin bıçaklara çıplak elle dokunma; Bosch çok amaçlı bıçağı yalnız plastik kısmından tutmanı söylüyor. Kemik, kıkırdak, çekirdek gibi sert parçaları ayır.

**4. Robotu soğumaya bırak.** Bosch aşırı yüklenme emniyetinin devre dışı kalması için cihazın soğumasını beklemeni istiyor; kılavuz bunun için dakika vermiyor. Arzum blender bölümünde iki kullanımdan sonra cihazın oda sıcaklığına gelmesini beklemeni yazıyor.

**5. Kabı, kapağı ve aleti yeniden doğru tak.** Bosch'un çalışma emniyeti sistemi cihazı yalnız kap doğru takılıp kapakla doğru kapatıldığında çalıştırır. Kabı saat yönünde çevirip duyulacak şekilde yerine oturt. Arzum'da kapağı saat yönünde çevirip klik sesini duyarsın; Arzum kilitleme mekanizmasını başka araçlarla devre dışı bırakmamanı istiyor.

**6. Kısa süreler halinde çalıştır ve aralarda dinlendir.** Arzum 20 saniyeden uzun sürekli çalıştırmamanı istiyor; sert peyniri uzun süre rendelersen peynirin ısınıp erimeye ve topaklaşmaya başlayacağını yazıyor. Bosch cihazı gerekenden uzun ve malzemesiz çalıştırmamanı, anlık çalıştırma kademesini yalnız kısa ya da aralıklı karıştırmada kullanmanı söylüyor.

**7. Soğuduktan sonra da çalışmıyorsa yetkili servise başvur.** Bosch önce cihaza akım gidip gitmediğini kontrol etmeni istiyor. Arıza sürerse Arzum en yakın Arzum Yetkili Servisine başvurmanı yazıyor; Bosch'ta onarımı yalnız eğitimli uzman personel yapar. Elektrik kablosu zarar görmüşse Bosch kablonun üretici, müşteri hizmetleri ya da benzer kalifikasyonda bir kişi tarafından değiştirilmesini istiyor.

## Hangi işler mutfak robotunu zorlar?

Bosch mikser üst parçasında küp buz dışındaki dondurulmuş gıdaları sıvı olmadan işlememeni, çalışırken dolum ağzına ya da kaba kaşık gibi bir cisim sokmamanı ve tıkaçla çok fazla baskı uygulamamanı istiyor. Çok kuru ya da çok katı besinleri, örneğin muskat cevizi ve kuru zencefili genel doğrayıcıda öğütme. Arzum çırpıcı krema aparatını hamur yoğurmada ve katı yağlı karışımlarda kullanmamanı, bunun için yoğurma aksesuarını takmanı yazıyor.

## Bu konuda hangi yazılara bakılır?

Doğrayıcıda süre ve aşırı yük kuralı için [Kiwi rondo kullanımı](/blog/kiwi-rondo-kullanimi/), hamur işleri için [Kiwi standlı mikser kullanımı](/blog/kiwi-standli-mikser-kullanimi/), sürahili blender durursa [Philips blender çalışmıyor](/blog/philips-blender-calismiyor/) yazısına bak.

---

**Kaynak künyesi.** Aşırı yük emniyeti, sorun tablosu, süre ve miktar sınırları Bosch MultiTalent 3 kompakt mutfak robotu kullanım kılavuzundan ve Arzum AR 1064 Maxthon mutfak robotu kullanma kılavuzundan alınmıştır. Kendi robotunun kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Mutfak robotu soğuduktan sonra da çalışmıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
