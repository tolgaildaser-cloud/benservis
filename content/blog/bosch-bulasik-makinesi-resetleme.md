---
title: "Bosch bulaşık makinesi resetleme nasıl yapılır"
description: "Bosch bulaşık makinesinde reset, kılavuzdaki adıyla programın iptali: START'a yaklaşık 3 saniye ya da düğme Reset konumuna. Tuş kilidi ve servis sınırı."
slug: "bosch-bulasik-makinesi-resetleme"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork B). Konu seçimi: origin/main'de bosch-bulasik-makinesi-resetleme yok; başlıklarda "Bosch bulaşık … reset" yok.
#   Yakın sayfalar: bosch-bulasik-makinesi-hata-kodlari, -calismiyor, -sembolleri-ve-anlamlari (hiçbirinin başlığı resetleme sorgusunu hedeflemiyor).
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "bosch bulaşık makinesi r" → 1. "…resetleme", 3. "…resetleme yapmıyor";
#   "bosch bulaşık makinesi" → 3. "…resetleme". GSC (https___www-5, 3 ay): "bosch bulaşık makinesi e15 hatası resetleme" 1 gösterim, poz 35.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (D) Bosch SM… / SB… bulaşık makinesi kullanma kılavuzu  https://media3.bsh-group.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#  (A) Bosch bulaşık makinesi (program seçme düğmeli) kullanma kılavuzu  https://media3.bsh-group.com/Documents/9000222371_A.pdf  28 s.  md5 bd871eea924ef78e545f905c79ce56b3
# Reset D s.32, A s.16 · tuş kilidi D s.8 · program değiştirme D s.32 · "önce Reset" D s.35, A s.18 · Reset satırları D s.38/s.44, A s.20
#   · başka hata kodu D s.38 · suyun boşaltılması A s.24 · kapağı açarken basınç uyarısı D s.32 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · fişi çekerek reset (bu iki belgede yok) · hata kodu silme hilesi · kart/parça teşhisi
#   · D'deki gösterge değerleri (PDF yazı tipi bozuk, rakamlar okunamıyor) · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Gösterge tuş kilidini gösteriyorsa önce F tuşunu yaklaşık 4 saniye basılı tutarak kilidi kaldır."
  - "Dijital panelli modelde START tuşuna yaklaşık 3 saniye bas; düğmeli modelde ana şalter açıkken program seçme düğmesini Reset konumuna çevir."
  - "Reset programının bitmesini bekle; kılavuza göre yaklaşık 1 dakika sürer."
  - "Reset bitince AÇIK/KAPALI şalterine basarak makineyi kapat."
  - "Kapağı açman gerekirse ısınmış makinede kapağı önce birkaç dakika aralık bırak, sonra aç."
  - "İçeride su kaldıysa süzgeçleri ve atık su pompasını kılavuzdaki gibi kontrol et."
  - "Makineyi yeniden aç, programı seç ve START ile başlat."
  - "Ekrandaki hata kodu kapatıp açmaya rağmen geri geliyorsa musluğu kapat, fişi çek ve yetkili servise kodu bildir."
faq:
  - q: "Bosch bulaşık makinesinde reset tuşu var mı?"
    a: "Bosch kılavuzlarında bunun adı Programın iptal edilmesi (Reset). SM ve SB serisinin dijital panelli modellerinde ayrı tuş yok, START tuşuna yaklaşık 3 saniye basılıyor. Program seçme düğmeli eski modellerde ise düğmenin üzerinde Reset konumu bulunuyor."
  - q: "Bosch bulaşık makinesi resetleme ne kadar sürer?"
    a: "İki kılavuzda da reset programının süresi yaklaşık 1 dakika. Bu süre bitince makine AÇIK/KAPALI şalteriyle kapatılıyor."
  - q: "Bosch bulaşık makinesi resetleme yapmıyor, neden?"
    a: "En sık sebep tuş kilidi. Bosch kılavuzuna göre tuş kilidi açıkken program akışı sırasında bir tuşa basıldığında göstergede tuş kilidi işareti belirir ve programın iptal edilmesi mümkün olmaz. F tuşunu yaklaşık 4 saniye basılı tutarak kilidi kaldır, sonra START'a tekrar 3 saniye bas."
  - q: "Başlattığım programı değiştirebilir miyim?"
    a: "Bosch kılavuzuna göre START tuşuna bastıktan sonra program değiştirmek mümkün değil. Değişiklik ancak program iptali (Reset) üzerinden yapılabiliyor: önce reset, sonra yeni programın seçimi."
  - q: "Elektrik kesilince tuş kilidi açılır mı?"
    a: "Hayır. Kılavuz, elektrik kesintisinde tuş kilidinin aktif kalmaya devam ettiğini yazıyor. Program sona erdiğinde ise kilit kendiliğinden kaldırılıyor."
images:
  coverAlt: "Mutfakta tezgâh altına yerleştirilmiş, kapağı kapalı paslanmaz yüzlü bir bulaşık makinesi"
  steps:
    - "Bulaşık makinesi kumanda panelinde küçük bir kilit simgesinin yandığı gösterge penceresi"
    - "Bulaşık makinesi panelinde yuvarlak bir başlat tuşu ve yanında küçük gösterge ışıkları"
    - "Kapağı kapalı, sessizce bekleyen bir bulaşık makinesi"
    - "Bulaşık makinesi panelinde açma kapama şalteri ve sönmüş gösterge ışıkları"
    - "Hafifçe aralanmış bulaşık makinesi kapağından yükselen ince bir buhar"
    - "Bulaşık makinesinin tabanında yerinden çıkarılmış silindir biçimli süzgeç"
    - "Bulaşık makinesinin açık kapağında deterjan bölmesine tablet yerleştirilmiş görünüm"
    - "Bulaşık makinesinin yanında tezgâhta katlanmış bir kullanma kılavuzu ve kapalı bir su musluğu"
---

Program yarıda kaldı, yanlış programı seçtin ya da makine bir yerde takıldı; Bosch bulaşık makinesini "resetlemek" istiyorsun. Bosch bunu kılavuzda açıkça adlandırıyor: **Programın iptal edilmesi (Reset).** Yöntem panel tipine göre değişiyor. SM ve SB serisinin dijital panelli modellerinde **START tuşuna yaklaşık 3 saniye** basılıyor; program seçme düğmeli eski modellerde ise düğme **Reset konumuna** çevriliyor. Bu yazıda iki Bosch kullanma kılavuzundan resetin sırasını, süresini ve onu engelleyen tuş kilidini çıkardık. Tuş adları ve göstergeler modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tuş kilidi açıksa önce F tuşunu yaklaşık 4 saniye basılı tut. Dijital panelde START'a yaklaşık 3 saniye bas; düğmeli modelde düğmeyi Reset'e çevir. Yaklaşık 1 dakika bekle, sonra AÇIK/KAPALI şalteriyle kapat. Hata kodu geri geliyorsa musluk, fiş, yetkili servis.

## İki panel, iki yol

| | Dijital panel (SM… / SB…) | Program seçme düğmeli model |
|---|---|---|
| **Ne yapılır** | START tuşuna yaklaşık 3 saniye bas | Ana şalter açıkken düğmeyi Reset konumuna çevir |
| **Süre** | Yaklaşık 1 dakika | Yaklaşık 1 dakika |
| **Sonra** | AÇIK/KAPALI şalterine bas | Ana şalteri kapat |
| **Engel** | Tuş kilidi açıksa reset mümkün değil | Kılavuzda tuş kilidi satırı yok |

## Adım adım: Bosch bulaşık makinesini sıfırlama

**1. Tuş kilidini kaldır.** Bosch'un SM/SB kılavuzuna göre tuş kilidi, makineyi **istem dışı program iptaline** karşı korumak için var. Kilit açıkken program akışı sırasında bir tuşa basarsan göstergede tuş kilidi işareti belirir ve kılavuzun ifadesiyle **"Programın iptal edilmesi (Reset) mümkün değildir."** Kilidi kaldırmak için bu işaret kaybolana kadar **F tuşunu yaklaşık 4 saniye** basılı tut. Kılavuzun iki notu: program sona erince kilit de kalkar, **elektrik kesintisinde ise kilit aktif kalır.**

**2. Reset komutunu ver.** Dijital panelli modelde **START tuşuna yaklaşık 3 saniye** bas. Program seçme düğmeli modelde kılavuz bir şart koyuyor: **sadece ana şalter açıkken** düğmeyi **Reset konumuna** çevir; yaklaşık 3 saniye sonra sayı göstergesinde bir değer belirir. Kısa basmak ya da şalteri kapatmak reset değildir. Bosch'a göre şalteri kapattığında ışıklar söner ama **program hafızada kayıtlı kalır** ve şalteri açınca devam eder.

**3. Reset programını bekle.** İki kılavuzda da süre aynı: **program süresi yaklaşık 1 dakika.** Düğmeli modelin kılavuzu reseti içerideki suyu boşaltmak için de kullanıyor; yöntemi aşağıda. Bu sırada tuşlara art arda basma, kapağı zorlama.

**4. Makineyi kapat.** Reset bitince dijital panelde **AÇIK/KAPALI şalterine** bas; düğmeli modelde **ana şalteri** kapat. Bosch'un program değiştirme notu bu adımın neden önemli olduğunu söylüyor: START'a bastıktan sonra program değiştirmek mümkün değil, **değişiklik ancak program iptali (Reset) üzerinden** yapılabiliyor.

**5. Kapağı açarken dikkat.** Kılavuzdaki uyarı: genleşmeden doğan yüksek basınç yüzünden **kapak aniden açılabilir ve dışarıya su çıkabilir.** Sıcak su bağlantısı varsa ya da makine ısınmışsa kapağı önce **birkaç dakika aralık bırak,** sonra tam aç.

**6. İçeride su kaldıysa.** Bosch'un arıza tablosunda program sonrasında içeride su kalmasının sebepleri sayılıyor: atık su hortumu tıkalı ya da katlanmış, atık su pompasının kapağı yerine oturmamış, süzgeçler tıkanmış. Aynı satırdaki son madde: **program henüz sona ermemiş; sonunu bekle ya da Reset uygula.** Süzgeç temizliği için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/), tahliye tarafı için [Bosch bulaşık makinesi su boşaltmıyor](/blog/bosch-bulasik-makinesi-su-bosaltmiyor/) yazısına bak.

**7. Yeniden başlat.** Makineyi aç, programı seç ve START ile başlat. Kılavuzun ilginç bir satırı daha var: **program kendiliğinden çalışmaya başlıyorsa** sebebi programın sona ermesinin beklenmemesi, çözümü yine **Reset uygulamak.** Bosch ayrıca makine yıkama sırasında belli olmayan bir sebeple durursa ya da çalışmaya başlamazsa **önce Program iptal (Reset) işlevini** uygulamanı istiyor.

**8. Kod geri geliyorsa servis.** Göstergede başka bir hata kodu beliriyorsa kılavuzun sırası şu: makineyi AÇIK/KAPALI şalteriyle kapat, kısa süre sonra yeniden çalıştır. **Problem yeniden oluşursa su musluğunu kapat, elektrik fişini çek,** müşteri hizmetlerini ara ve hata kodunu bildir. Kodların anlamı [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/) sayfasında.

## Taşımadan önce suyu boşaltmak için de reset

Düğmeli modelin kılavuzu reseti bir de suyu boşaltmak için kullanıyor: musluğu aç, kapağı kapat, Eco programını seçip makineyi çalıştır, **yaklaşık 4 dakika** bekle, düğmeyi **Reset** konumuna çevir, bir dakika daha bekleyip ana şalteri ve musluğu kapat. Makineyi daima dik taşı.

## Ne zaman servis

- Reset yaptığın hâlde tuşlar ve gösterge tepki vermiyorsa
- Süzgeç ve pompa kapağı kontrolünden sonra içeride su kalıyorsa
- Aynı hata kodu kapatıp açmaya rağmen geri geliyorsa
- Makine hiç çalışmıyorsa: ilk kontroller [Bosch bulaşık makinesi çalışmıyor](/blog/bosch-bulasik-makinesi-calismiyor/) yazısında

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, tuş kilidi, süzgeçler ve pompa kapağı sende; gövdenin içi, pompa motoru ve elektronik kart yetkili servisin. Bosch da onarımların **daima uzman kişilere** yaptırılmasını istiyor.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ve panel tipi ne?
2. Göstergede bir kod ya da kilit işareti var mı?
3. Reset sırasında yaklaşık 1 dakikalık program çalıştı mı?
4. İçeride su kaldı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Panel ışıklarının anlamı [Bosch bulaşık makinesi sembolleri ve anlamları](/blog/bosch-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfasında. Bil, gör, çağır.
