---
title: "Siemens buzdolabı fazla soğutuyor: yiyecekler donuyor"
description: "Siemens buzdolabında sebze ve süt ürünleri donuyorsa Siemens'in sırası: süper soğutma, fresh modu, sıcaklık ayarı, sensörün önü ve hava kanalları."
slug: "siemens-buzdolabi-fazla-sogutuyor"
date: "2026-10-23"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork B). Konu seçimi: origin/main'de siemens-buzdolabi-fazla-sogutuyor yok.
#   Yakın slug'lar: siemens-buzdolabi-sogutmuyor (ters belirti; tatil/eco/stand-by, kapı, hava açıklığı) ve marka bağımsız buzdolabi-cok-sogutuyor.
#   Bu yazı ters yöndeki Siemens destek sayfasına (fazla-sogutma) dayanıyor; sogutmuyor yazısının adımları kopyalanmadı, yalnız bağlantı verildi.
# GSC: https___www-3…6 dışa aktarımlarında sorgu yok.
# Arama kanıtı (#164, 23 Eki Google otomatik tamamlama, hl=tr gl=tr): "siemens buzdolabı fazla" → 1. "…fazla soğutuyor", 2. "…fan sesi", 3. "…fanı çalışmıyor".
# Belgeler (#88, yalnız üretici; yerel kopyalar, md5 -q 23 Eki). Okuma: HTML gövde metni; PDF için pdftotext -layout, sayfa = PDF sayfası (\f).
#  (W) Siemens TR destek sayfası "Siemens Buzdolabı Fazla Soğutuyor" (dinamik HTML) md5 34286f50babc2ac31f0cd39445e249f3
#      https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/buzdolabi-hakkinda/fazla-sogutma · yerel: kaynak-siemens-profilo-2eki/siemens-buzdolabi-fazla-sogutma.html
#  (A) Siemens KG56N.. kullanım kılavuzu 8001263930_A.pdf md5 7fbc7de0e85475abf39711c9c89cf326 (media3.bsh-group.com/Documents/8001263930_A.pdf; yerel kaynak-bosch-siemens-buzdolabi-sprint/siemens-8001263930_A.pdf)
#  (C) Siemens KGN.. kullanma kılavuzu 9000987392_C.pdf md5 749d560fc2ff0474fc287de622385886 (media3.bsh-group.com/Documents/9000987392_C.pdf; yerel aynı klasör)
# Ayar önerileri (+6/+8, +2, mekanik düğme), sensör, hava kanalı/arka duvar, 0° haznesi, "cold" yönü, süper 6 saat, fresh +2, çağrı merkezi W
#   · panel tuşları (süper, eco, tatil, taze) A s.15 · saklama haznesi 0 °C altı, 2 °C A s.15 · ilk çalıştırma, önerilen 4 °C A s.17 · süper soğutma 6 saat A s.18
#   · ayardan farklı sıcaklık, "çok düşükse sonraki gün" A s.31 · süper soğutma "SU"/"super" göstergesi C s.14 · "E.." C s.23.
# BİLEREK YAZILMAYANLAR: sensör, termostat, damper, fan teşhisi ya da değişimi (#31) · "ayar bozuldu/kart arızası" tahmini · arka duvardaki buzlanmaya müdahale
#   · ortam sıcaklığının fazla soğutmaya etkisi (bu belgelerde fazla soğutma için yok) · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: siemens-buzdolabi-fazla-sogutuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (sonucu görmek için bir gün)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Panelde süper soğutma göstergesi yanıyorsa kapat; Siemens'e göre bu mod yaklaşık altı saat sonra kendiliğinden de kapanır."
  - "Taze tutma ya da fresh modu açıksa kapat; bu modda soğutucu bölme kasten daha soğuk tutulur."
  - "Soğutucu bölmenin ayarını kullanımına göre yükselt; kapıyı az açıyor ve az yiyecek saklıyorsan daha sıcak bir derece seç."
  - "Ayarı değiştirdikten sonra sıcaklığı ertesi gün yeniden kontrol et."
  - "Tencere, sürahi ve kavanoz gibi uzun eşyaları buzdolabının sıcaklık sensörünü kapatmayacak şekilde yerleştir."
  - "Yiyecekleri hava kanallarının önünden ve buzdolabının arka duvarından uzak tut."
  - "Donma saklama haznesinde ya da sebze çekmecesindeyse haznenin sıcaklık ayar düğmesini cold yönüne it."
faq:
  - q: "Siemens buzdolabı neden fazla soğutur?"
    a: "Siemens'in destek sayfası dört başlık sayıyor: sıcaklık ayarının kullanım alışkanlığına uymaması, sıcaklık sensörünün önünün kapanması, yiyeceklerin hava kanallarının önüne ya da arka duvara dayanması ve süper soğutma ya da fresh gibi bir modun açık kalması."
  - q: "Siemens buzdolabını kaç dereceye ayarlamalıyım?"
    a: "KG56N.. kılavuzunda soğutucu bölme için önerilen sıcaklık 4 °C. Siemens'in destek sayfası kullanımına göre ayarlamanı öneriyor: kapıyı gün içinde çok az açıyor ya da az yiyecek saklıyorsan +6 veya +8, sık açıyor ya da çok miktarda taze yiyecek koyuyorsan +2 derece."
  - q: "Süper soğutmayı kapatmazsam ne olur?"
    a: "Siemens'e göre süper soğutma soğutucu bölmeyi mümkün olan en soğuk dereceye getirir ve yaklaşık 6 saat sonra cihaz önceki ayarına döner. Bazı modellerde modu daha önce kapatmak için super tuşuna yeniden basmak ya da soğutucu bölmeyi seçip istenen sıcaklığı ayarlamak gerekiyor."
  - q: "Saklama haznesinde yiyecekler donuyor, normal mi?"
    a: "KG56N.. kılavuzuna göre saklama haznesindeki sıcaklık soğutucu bölmesinden düşüktür ve zaman zaman 0 °C'nin altına inebilir. Siemens'in destek sayfası, saklama haznesinde ya da sebze çekmecesinde donma görürsen haznenin sıcaklık ayar düğmesini cold yönüne itmeni öneriyor."
  - q: "Ayarı değiştirdim ama hâlâ çok soğuk, ne zaman servis çağırmalıyım?"
    a: "Kılavuz, sıcaklık ayardan çok farklıysa cihazı kapatıp yaklaşık 5 saniye sonra yeniden açmayı ve sıcaklık çok düşükse sonraki gün tekrar kontrol etmeyi söylüyor. Siemens'in destek sayfasına göre bütün önerilere rağmen fazla soğutma sürüyorsa Siemens çağrı merkezini aramak gerekiyor."
images:
  coverAlt: "Açık bir buzdolabının sebze çekmecesinde üzeri hafifçe buz tutmuş marul yaprakları"
  steps:
    - "Buzdolabı kapağındaki kumanda panelinde parlayan bir süper soğutma göstergesi"
    - "Buzdolabı panelinde yanan bir taze tutma simgesi"
    - "Buzdolabı panelindeki sıcaklık göstergesi ve yanındaki ayar tuşları"
    - "Kapağı kapalı bir buzdolabının önünde mutfak masasında duran bir termometre"
    - "Buzdolabı rafında sensörün önünü kapatmayacak şekilde kenara alınmış uzun bir sürahi"
    - "Arka duvarla arasında boşluk bırakılarak dizilmiş yiyecek kapları"
    - "Buzdolabı saklama haznesinin üzerindeki küçük sürgülü sıcaklık ayar düğmesi"
---

Marul yaprakları buz tutmuş, tereyağı taş gibi, süt şişesinin dibinde kristaller var. Siemens'in Türkiye destek sayfası bu durumu "fazla soğutma" olarak adlandırıyor ve sebzelerin, meyvelerin, tereyağı ve peynir gibi yumuşak süt ürünlerinin donmasını örnek veriyor. Çoğu durumda sebep arıza değil; bir mod açık kalmış, ayar kullanımla uyuşmuyor ya da yiyecekler yanlış yerde. Bu yazıda Siemens'in destek sayfasındaki önerileri ve iki Siemens buzdolabı kılavuzundaki ilgili bölümleri sırayla topladık. Panel ve tuş adları modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce süper soğutma ve fresh modu açık mı bak. Sonra ayarı kullanımına göre yükselt ve ertesi gün kontrol et. Uzun eşyalar sıcaklık sensörünü kapatmasın, yiyecekler arka duvara ve hava kanallarına değmesin. Donma saklama haznesindeyse haznenin düğmesini cold yönüne it. Hepsine rağmen sürüyorsa Siemens çağrı merkezi.

## Ekran ve belirti ne söylüyor

| Gördüğün | Siemens'e göre | Kim ne yapar |
|---|---|---|
| **super / SU göstergesi** | Süper soğutma açık; bölme en soğuk derecede | 🛠️ Kapat ya da 6 saat bekle |
| **fresh göstergesi** | Taze tutma modu; soğutucu +2 derece | 🛠️ Kapat |
| **Rafta, kapı yanında donma** | Ayar kullanıma göre fazla soğuk | 🛠️ Ayarı yükselt |
| **Arka duvara yakın yiyecek donuyor** | Hava kanalı önünde, soğuk hava akışında | 🛠️ Yeri değiştir |
| **Saklama haznesinde donma** | Hazne zaman zaman 0 °C altına iner | 🛠️ Düğmeyi cold yönüne it |
| **Göstergede E..** | Elektronik sistem hata tespit etti | 🔧 Yetkili servis |

## Adım adım: evde denenecekler

**1. Süper soğutmayı kapat.** Siemens'e göre süper soğutma seçildiğinde buzdolabı **mümkün olan en azami soğutmayı** sağlar; fazla miktarda yiyecek koymadan önce açılması öneriliyor. Mod yaklaşık **6 saat** sonra kendiliğinden kapanıp önceki ayara dönüyor. Eski KGN.. kılavuzuna göre mod açıkken soğutucu bölme göstergesinde **"SU"** ve **"super"** yazar. Bazı modellerde daha önce kapatmak için super simgesine yeniden basmak yeterli.

**2. Fresh modunu kontrol et.** Siemens'in destek sayfasına göre taze tutma ya da fresh modu açıldığında soğutucu bölme **+2 dereceye** ayarlanır, dondurucu değişmez. Panelde fresh tuşu varsa ona, "mode" tuşu olan modellerde fresh göstergesi sönene kadar mode tuşuna basarak modu kapat.

**3. Ayarı kullanımına göre seç.** Siemens'in önerisi ayarı yiyecek miktarına ve kapıyı açma sıklığına göre yapmak. Kapıyı gün içinde **çok az açıyor** ya da az yiyecek saklıyorsan soğutucu bölmeyi **+6 veya +8** dereceye, **sık açıyor** ya da çok miktarda taze yiyecek koyuyorsan **+2** dereceye ayarlayabilirsin. KG56N.. kılavuzunda önerilen değer **4 °C**. Mekanik düğmeli modellerde düğmeyi saat yönünün **tersine** çevirmek daha sıcak bir ayar demek.

**4. Sonucu ertesi gün kontrol et.** Kılavuza göre cihaz ayarlanan sıcaklığa ancak birkaç saat sonra ulaşır. Sıcaklık ayardan çok farklıysa cihazı kapatıp yaklaşık 5 saniye sonra yeniden aç; sıcaklık çok düşükse **sonraki gün** yeniden kontrol et.

**5. Sensörün önünü aç.** Siemens'e göre buzdolabındaki sıcaklık sensörü iç sıcaklığı sürekli ölçer. Sensörün önü kapanırsa buzdolabı iç sıcaklığı doğru algılayamaz ve soğutucu bölmeye soğuk hava göndermeye devam eder. Tencere, sürahi ve kavanoz gibi uzun eşyaları sensörü kapatmayacak şekilde yerleştir.

**6. Yiyecekleri arka duvardan uzaklaştır.** Hava kanallarının önündeki yiyecekler soğuk hava akışına maruz kalıp donabilir. Siemens'in önerisi yiyecekleri buzdolabının **arka duvarına temas etmeyecek** şekilde koymak. Sert peynir ve tereyağı için en üst raf öneriliyor. Taze meyve ve sebzeler ambalajsız olarak sebze çekmecesinde, kesilmişleri ise üstü kapalı ve hava geçirmeyecek şekilde saklanmalı.

**7. Saklama haznesini ayarla.** Siemens'e göre buzdolabının en soğuk bölgesi **0° ile işaretli saklama haznesi**; KG56N.. kılavuzu burada zaman zaman 0 °C'nin altına inildiğini yazıyor. Saklama haznesinde, sebze çekmecesinde ya da diğer raflarda donma görürsen haznenin sıcaklık ayar düğmesini **"cold" yönüne** it. KG56N.. kılavuzu ayrıca soğuğa duyarlı meyve ve sebzeleri, örneğin ananas, muz, narenciye, salatalık, kabak, biber, domates ve patatesi, buzdolabının dışında yaklaşık 8–12 °C'de saklamanı öneriyor.

## Ne zaman servis

- Bütün ayar ve yerleşim önerilerine rağmen fazla soğutma sürüyorsa: Siemens'in önerisi çağrı merkezini aramak
- Göstergede **E..** görünüyorsa: eski KGN.. kılavuzuna göre elektronik sistem hata tespit etmiştir, yetkili servis
- Ayarı değiştirip cihazı kapatıp açtıktan sonraki gün sıcaklık hâlâ ayardan çok düşükse

⛔ **Kendin-çöz sınırı burada biter.** Panel, modlar, ayar düğmeleri ve yiyeceklerin yeri sende; sensör, soğutma devresi ve elektronik uzmanın. Kılavuza göre cihazda yalnız eğitimini almış uzman personel onarım yapabilir.

## Servisi aramadan önce kısa özet

1. Model numarası ne (KG56N.., KGN.. ya da başka)?
2. Hangi bölmede donma var: raflar, saklama haznesi, sebze çekmecesi?
3. Panelde süper, fresh, eco ya da tatil göstergesi yanıyor mu?
4. Ayar kaç derece ve en son ne zaman değiştirildi?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Ters durum için [Siemens buzdolabı soğutmuyor](/blog/siemens-buzdolabi-sogutmuyor/) rehberine, marka bağımsız nedenler için [buzdolabı çok soğutuyor](/blog/buzdolabi-cok-sogutuyor/) yazısına bak. Bil, gör, çağır.
