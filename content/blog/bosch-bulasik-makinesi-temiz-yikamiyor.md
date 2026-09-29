---
title: "Bosch bulaşık makinesi temiz yıkamıyor"
description: "Bosch bulaşık makinesi bulaşıkta artık bırakıyorsa Bosch'un sırası: yerleştirme, püskürtme kolları, süzgeçler, program ve sensör ayarı."
slug: "bosch-bulasik-makinesi-temiz-yikamiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
# md5'ler 28 Eyl yerel kopyalarıyla birebir aynı. #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (K) Bosch bulaşık makinesi SM.../SB... kullanma kılavuzu  https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#  (B) Bosch "Bulaşık Makineleri Bilgilendirme Kılavuzu"  https://media3.bosch-home.com/Documents/MCDOC02761050_BULASIK_MAKINELERI_BILGILENDIRME_KILAVUZU.PDF  2 s.  md5 e42639a08cc28269147fe723597350d3
# Arıza tablosu satırı (K s.40) "Bulaşıklarda yemek artıkları var.": çok yakın/sepet fazla dolu → boşluklu yerleştir, temas yeri olmasın · püskürtme kolu dönmesi engelleniyor → serbest dönecek şekilde yerleştir
#   · memeler tıkanmış → memeleri temizle · filtreler pislenmiş → temizle · filtreler yanlış takılmış → doğru tak · yeterince güçlü program seçilmemiş → daha güçlü program, sensör hassaslığını yükselt
#   · çok fazla ön temizleme → ön yıkama yapma, yalnız kaba artık; sensör hassaslığını yükselt · inatçı kir → "Program önerisi Eko 50° veya Yoğun." · yüksek ince kaplar köşede → çok eğik/köşede koyma
#   · "Üst sepet 12, sağ ve sol tarafta aynı seviyeye ayarlanmamış." → "Üst sepeti, yandaki kollar ile aynı seviyeye ayarlayınız."
# Diğer: K s.18 yerleştirme kuralları · K s.23 üst sepet "her iki tarafta aynı seviyede" · K s.25 kısa programlarda tablet tam çözülmeyebilir, toz daha uygun · K s.29 sensör ayarı 3 kademe
#   · K s.34 süzgeç sistemi · K s.35 püskürtme kolları (üst kolu çöz, aşağı çek; alt kolu yukarı çek; musluktan akan su altında temizle; yerine tak/vidala) · K s.41 deterjan artıkları satırı
#   · K s.42 "çay veya ruj artıkları" satırı · B s.1 fıskiyeleri elle çevirip kontrol et; elde yıkama yapma, kaba artığı sıyır · K s.46 yetkili servis.
# BİLEREK YAZILMAYANLAR: sirkülasyon pompası/ısıtıcı/su seviyesi teşhisi (belgede yok) · ayar tuşunun adı (kılavuzda sembol olarak basılı, metin katmanında okunmuyor → "kılavuzundaki ayar bölümü" dendi)
#   · sensör kademe kodları (sembol okunmuyor; yalnız "3 kademe" yazıldı).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Bulaşıkları aralarında boşluk kalacak şekilde, ağızları aşağı bakacak ve sepeti fazla doldurmadan yerleştir."
  - "Püskürtme kollarını elle çevirerek hiçbir bulaşığa takılmadan döndüklerini kontrol et."
  - "Üst sepetin sağ ve sol tarafının aynı seviyede olduğunu kontrol et."
  - "Makineyi kapat, fişini çek ve süzgeç sistemini çıkarıp musluk altında temizle; ok işaretleri karşı karşıya gelecek şekilde geri tak."
  - "Üst ve alt püskürtme kolunu çıkar, memelerini kontrol et, musluk altında temizleyip yerine tak."
  - "Bulaşıkları elde ön yıkamadan geçirme; yalnız kaba artıkları sıyır."
  - "Kirliliğe uygun, daha güçlü bir program seç; inatçı kirde Eko 50° ya da Yoğun, kısa programda tablet yerine toz deterjan kullan."
  - "Sorun sürerse ayar menüsünden sensör hassaslığını bir kademe yükselt."
faq:
  - q: "Bosch bulaşık makinesi bulaşıklarda yemek artığı bırakıyor, ilk neye bakmalıyım?"
    a: "Bosch'un kullanma kılavuzundaki arıza tablosu 'Bulaşıklarda yemek artıkları var' satırında önce yerleştirmeyi sayıyor: bulaşıklar birbirine çok yakın olabilir, sepet fazla dolu olabilir ya da bir parça püskürtme kolunun dönmesini engelliyor olabilir. Ardından tıkanmış püskürtme kolu memeleri, pislenmiş ya da yanlış takılmış filtreler ve yeterince güçlü olmayan program geliyor."
  - q: "Bulaşıkları makineye koymadan önce elde yıkıyorum, yine de temiz çıkmıyor. Neden?"
    a: "Bosch'un kılavuzuna göre bulaşıklara çok fazla ön temizleme uygulandığında sensör sistemi daha zayıf bir program seçmeye karar veriyor. Bosch'un önerisi bulaşıkları ön yıkamaya tabi tutmamak, yalnız kaba yemek artıklarını temizlemek ve gerekirse sensör sisteminin hassaslığını yükseltmek."
  - q: "Fincanlarda çay, bardaklarda ruj izi kalıyor. Ne yapmalıyım?"
    a: "Bosch'un arıza tablosu bu durum için şunları sayıyor: ayarlanan yıkama sıcaklığı çok düşük olabilir (daha yüksek ısılı bir program seç), deterjan çok az ya da uygun olmayabilir (doğru dozajlı uygun bir deterjan kullan) veya fazla ön temizleme yüzünden sensör zayıf bir program seçmiş olabilir. İnatçı kirler için Bosch'un program önerisi Eko 50°."
  - q: "Tablet program sonunda tam erimemiş duruyor, bu da temizliği etkiler mi?"
    a: "Bosch'a göre tabletin çözünme süresi hızlı ya da kısa programlar için çok uzun olabilir; bu durumda toz deterjan ya da daha güçlü bir program önerilir. Tablet tutma kabına bulaşık parçası konmamalı; tablet deterjan bölmesine dik değil yatay yerleştirilmeli. Uzun süre bekletilen deterjanın etkisi azalabilir; Bosch bu durumda deterjanı değiştirmeyi öneriyor."
images:
  coverAlt: "Açık bulaşık makinesinin alt sepetinde yıkama sonrası üzerinde yemek artığı kalmış tabaklar; püskürtme kolu görünüyor"
---

Program bitti ama tabaklarda yemek artığı, fincanlarda çay izi var. Bosch'un bulaşık makinesi kullanma kılavuzundaki arıza tablosunda bu şikâyetin kendi satırı var: **"Bulaşıklarda yemek artıkları var."** Bosch'un bu satırda saydığı nedenlerin neredeyse hepsi evde kontrol edilebilir: **yerleştirme, püskürtme kolları, süzgeçler, seçilen program ve sensör ayarı.** Bu yazıda Bosch'un listesini sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sepeti fazla doldurma, bulaşıklar arasında boşluk bırak → püskürtme kolları serbest dönüyor mu → üst sepet iki yanda aynı seviyede mi → süzgeçleri ve püskürtme kolu memelerini temizle → elde ön yıkama yapma → daha güçlü program seç, gerekirse sensör hassaslığını yükselt. Bunlara rağmen sonuç değişmiyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Yerleştirmeyi düzelt.** Bosch'un tablosundaki ilk neden: **bulaşıklar birbirine çok yakın yerleştirilmiş, bulaşık sepeti fazla doldurulmuş.** Çözüm, bulaşıkları yeterli boşluk kalacak ve püskürtme kollarından çıkan su yüzeylerine ulaşacak şekilde yerleştirmek; **temas yerleri** olmamalı. Bosch'un yerleştirme kuralları da aynı yönde: bulaşıklar sağlam durmalı, **tüm kapların ağzı aşağıya** bakmalı, çukur parçalar yanlamasına konmalı. Fazla kirli tencereleri alt sepete koymak, Bosch'a göre daha güçlü su huzmesi sayesinde daha iyi sonuç verir. Yüksek ince kapları çok eğik ya da köşede bırakma; Bosch'a göre köşelerde yeterince yıkanmazlar.

**2. Püskürtme kollarının döndüğünü kontrol et.** İkinci neden: **püskürtme kolunun dönmesi engelleniyor.** Bosch'un bilgilendirme kılavuzu, makineyi çalıştırmadan önce püskürtme kollarının **dönüp dönmediğini elle çevirerek** kontrol etmeni öneriyor. Takılan bir tabak ya da tencere sapı varsa yerini değiştir.

**3. Üst sepetin seviyesine bak.** Bosch'un tablosunda bir madde daha var: **üst sepet sağ ve sol tarafta aynı seviyeye ayarlanmamış.** Çözüm, üst sepeti yandaki kollar ile aynı seviyeye ayarlamak. Yan kolları olan modellerde Bosch, üst sepetin **her iki tarafta aynı seviyede** olmasını istiyor.

**4. Süzgeçleri temizle.** Tablodaki diğer iki neden: **filtreler pislenmiş** ve **filtreler yanlış takılmış veya yerine oturmamış.** Makineyi kapat ve fişini çek. Süzgeç silindirini çevirip çözerek süzgeç sistemini çıkar, artıkları gider ve **musluktan akan su altında** temizle. Geri takarken söktüğün yönün tersine çevir ve **ok işaretlerinin karşı karşıya** olmasına dikkat et.

**5. Püskürtme kolu memelerini temizle.** Bosch'a göre bulaşık suyundaki **kireç ve pislikler püskürtme kollarının memelerini ve yataklarını bloke edebilir.** Kılavuzdaki sıra: memelerde tıkanıklık olup olmadığını kontrol et, **üst püskürtme kolunun bağlantısını çözüp aşağıya doğru çekerek** çıkar, gerekirse **alt püskürtme kolunu yukarıya doğru çekip** çıkar. Kolları **musluktan akan su altında** temizle ve yerlerine tak ya da vidala.

**6. Elde ön yıkamayı bırak.** Bosch'un tablosuna göre bulaşıklarda **çok fazla ön temizleme uygulandığında sensör sistemi daha zayıf bir program seçmeye karar veriyor.** Bosch'un önerisi: bulaşıkları ön yıkamaya tabi tutma, **yalnız kaba yemek artıklarını** temizle. Bosch'un bilgilendirme kılavuzu da artıkları sıyırırken bulaşık süngerinin sert kısmını ya da bulaşık telini kullanmamanı söylüyor.

**7. Daha güçlü bir program seç.** Tablodaki neden: **yeterince güçlü bir yıkama programı seçilmemiş.** İnatçı kirler için Bosch'un program önerisi **Eko 50° veya Yoğun.** Kısa programlarda dikkat: Bosch'a göre tabletler kısa programlarda farklı çözülme özellikleri yüzünden **tam temizleme etkisi göstermeyebilir;** bu tip programlar için **toz deterjan** daha uygun. Tableti deterjan bölmesine **dik değil, yatay** yerleştir ve tablet tutma kabına bulaşık parçası koyma.

**8. Sensör hassaslığını yükselt.** Bosch'un otomatik programları kirliliği sensörlerle ölçüp program gücünü buna göre ayarlıyor; sensör hassaslığı **3 kademede** ayarlanabiliyor. Tabloda iki satır aynı çözümü veriyor: **sensör sisteminin hassaslığını yükseltiniz.** Bosch'a göre en yüksek kademe, çok kuruyup yapışmış yemek artıkları gibi zor koşullar ve **biyolojik ya da ekolojik temizleyiciler** kullanıldığında öneriliyor. Ayarı kılavuzundaki "Ayarların değiştirilmesi" bölümündeki tuşlarla yap; tuşlar modele göre farklı olabilir.

## Çay, ruj ve deterjan izleri

Bosch'un tablosunda ayrı bir satır **çay veya ruj artıkları** için: ayarlanan yıkama sıcaklığı çok düşükse **daha yüksek ısılı bir program**, deterjan az ya da uygun değilse **doğru dozajlı uygun bir deterjan** öneriliyor. Bulaşıklarda deterjan kalıntısı görüyorsan Bosch'un sıraladığı nedenler şunlar: deterjan bölmesinin kapağı bir bulaşık parçası yüzünden tam açılamamış olabilir, tablet kısa programda çözünememiş olabilir ya da uzun süre bekletilen deterjan topaklanmış olabilir.

Bardaklardaki beyaz iz ve lekeler ayrı bir konu; onu [Bosch bulaşık makinesi leke bırakıyor](/blog/bosch-bulasik-makinesi-leke-birakiyor/) rehberinde anlattık. Markadan bağımsız anlatım için [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) ve [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazılarına bakabilirsin. Ekranda bir hata kodu da görüyorsan [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/) sayfasına bak.

## Ne zaman servis

Yerleştirme düzgün, süzgeçler ve püskürtme kolları temiz, program ve sensör ayarı uygun olduğu hâlde bulaşıklar hâlâ temiz çıkmıyorsa Bosch'un kılavuzu şunu söylüyor: **hatayı veya arızayı gidermeyi başaramazsan yetkili servisine başvur.** Bosch'un uyarısına göre **onarım çalışmaları daima uzman kişilere** yaptırılmalı.

Servisi ararken cihaz kapısındaki tip etiketinde yazan **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** hazır tut; Bosch bunları istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Yerleştirme, süzgeç, püskürtme kolu ve ayarlar kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Artık hep aynı sepette mi kalıyor, yoksa her yerde mi?
2. Püskürtme kolları elle çevrildiğinde serbest dönüyor mu?
3. Süzgeçler ve püskürtme kolu memeleri temizlendi mi?
4. Hangi programı ve hangi deterjanı kullanıyorsun?
5. Sensör ayarı değiştirildi mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
