---
title: "Siemens çamaşır makinesi E35 hatası: cihaz sızdırıyor"
description: "Siemens çamaşır makinesinde E:35-10, cihazın sızdırdığını gösterir. Musluk, fiş, hortumlar, kapı contası kontrolü ve servis sınırı kılavuz sırasıyla."
slug: "siemens-camasir-makinesi-e35-hatasi"
date: "2026-10-23"
category: "Çamaşır Makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork A). Konu seçimi: origin/main'de siemens-camasir-makinesi-e35-hatasi yok.
#   Yakın slug'lar: siemens-camasir-makinesi-hata-kodu-sifirlama (E:35-10 yalnız tablo satırı), siemens-camasir-makinesi-hata-kodlari (hub),
#   siemens-camasir-makinesi-e10/-e18/-e30-20, genel camasir-makinesi-su-kaciriyor. Siemens'te E35 tekil sayfası ve "su kaçırıyor" sayfası yok.
# GSC: https___www-3…6 dışa aktarımlarında bu sorgu yok.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "siemens çamaşır makinesi e35" → 1. "…e35 hatası", 2. "…e35 hatası nasıl giderilir",
#   3. "…e35 hatası nedir", 4. "…e35 10 hatası".
# Belge yerel kopya (blog-taslaklar/kaynak-siemens-camasir-sprint/, BSH media3.bsh-group.com kaynaklı, 28 Eyl indirme, HTTP 200). #88: forum/servis sitesi kullanılmadı.
#   Taranan diğer 7 Siemens WG kılavuzunda (9001980838_B, 9001980893_B, 9002013652_D, 9002023719_C, 9002046516_A, 9002046535_A, 9002056894_B) E:35 satırı yok.
#   Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile ayrıldı).
#  (N) Siemens WN54C2A0TR kurutmalı çamaşır makinesi kullanım kılavuzu ve kurulum talimatları  9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# E:35 -10 N s.42 · hasarlı cihaz, fiş, sigorta, musluk N s.6 · hortum uyarıları N s.10 · giriş hortumu bağlantısı N s.13-14 · tahliye bağlantısı N s.14
#   · köpük satırı N s.43 · "diğer tüm hata kodları" (fotoğraf/video) N s.43 · su giriş/tahliye hortumundan, kapının altından su N s.47
#   · acil kilit açma N s.48 · Aqua-Stop garantisi, tip etiketi N s.50.
# BİLEREK YAZILMAYANLAR: E:35-10'un hangi parçadan kaynaklandığı (belgede yok) · makineyi eğme/yatırma, alt tabla açma · conta değişimi · kodu silip çalıştırma
#   · E:35'in WG serisi Siemens'lerde de aynı olduğu iddiası (diğer 7 kılavuzda satır yok) · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: siemens-camasir-makinesi-e35-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak, nemli bir bez", "Makinenin kullanım kılavuzu"]
steps:
  - "Ekranda E:35-10 görünce önce musluğu kapat; kılavuzun bu kod için ilk talimatı bu."
  - "Fişi kablosundan değil fişin kendisinden tutarak çek ya da sigorta kutusundan makinenin sigortasını kapat."
  - "Kapak camında su görünüyorsa kapağı açma; acil kilit açma ancak pis su pompası boşken kullanılır."
  - "Su giriş hortumunun musluk ve makine tarafındaki bağlantısına bak; gevşekse vidaları yalnızca elle sık, hortum hasarlıysa kullanma."
  - "Su tahliye hortumunun doğru bağlandığını ve yerinden çıkmaya karşı emniyette olduğunu kontrol et."
  - "Kapının altından su geldiyse kapıyı ve contayı yumuşak, nemli bir bezle temizle; yoğun köpük varsa bir sonraki yıkamada deterjanı azalt."
  - "E:35-10 sürüyorsa musluğu kapalı bırak, hata mesajını eksiksiz not et ve Siemens müşteri hizmetlerini ara."
faq:
  - q: "Siemens çamaşır makinesinde E35 ne demek?"
    a: "Siemens'in WN54C2A0TR kurutmalı çamaşır makinesi kılavuzunun arıza tablosunda E:35 -10 satırı tek cümle: cihaz sızdırıyor. Kılavuzun talimatı iki adım: musluğu kapatmak ve müşteri hizmetlerini aramak."
  - q: "E35 hatasını sıfırlayıp yıkamaya devam edebilir miyim?"
    a: "Kılavuz E:35-10 için yeniden başlatma ya da sıfırlama önermiyor; doğrudan musluğu kapatıp müşteri hizmetlerini aramayı söylüyor. Güvenlik bölümü de hasarlı cihazların kesinlikle kullanılmamasını ve arızalı cihazda fişin çekilip musluğun kapatılmasını istiyor."
  - q: "Makineden su akıyor ama ekranda kod yok; ne yapmalıyım?"
    a: "Siemens kılavuzunda bunun için ayrı satırlar var. Su giriş hortumundan su geliyorsa hortumun montajını kontrol et, hasarlıysa müşteri hizmetlerini ara. Tahliye hortumundan geliyorsa montajını kontrol et, hasarlıysa hortumu değiştir. Kapının altından geliyorsa sebep kapı ya da conta üzerindeki kirliliktir; kapıyı ve contayı temizle."
  - q: "Kapağı açıp çamaşırları çıkarabilir miyim?"
    a: "Camdan su görünüyorsa hayır. Kılavuza göre acil kilit açmanın şartı pis su pompasının boş olması; camdan su görünüyorsa kapak açılmamalı, çünkü dışarı akan su maddi hasara neden olabilir. Su varken bu işi servise bırak."
  - q: "Benim Siemens'imde E35 hiç yazmıyor, başka modellerde de var mı?"
    a: "Bu yazının dayandığı WN54C2A0TR kılavuzunda var. Taradığımız yedi Siemens WG çamaşır makinesi kılavuzunun arıza tablosunda E:35 satırı yok. Kendi modelinin kılavuzunda kod farklı yazılabilir; arıza tablosuna bak."
images:
  coverAlt: "Beyaz bir kurutmalı çamaşır makinesi ve önündeki fayans zeminde ince bir su izi"
  steps:
    - "Çamaşır makinesinin arkasındaki duvarda kolu kapalı konuma çevrilmiş bir musluk"
    - "Prizden çekilmiş, fişi zeminde duran beyaz bir elektrik kablosu"
    - "Kapalı çamaşır makinesi kapağının camında görünen su ve köpüklü çamaşır"
    - "Musluğa vidalanmış su giriş hortumunun beyaz bağlantı somunu"
    - "Sifon borusuna kelepçeyle bağlanmış gri bir tahliye hortumu"
    - "Açık çamaşır makinesi kapağının lastik contası ve yanında yumuşak bir bez"
    - "Çamaşır makinesinin üstünde açık duran bir kullanım kılavuzu ve not kâğıdı"
---

Ekranda E:35-10 yanıyor ve büyük ihtimalle makinenin çevresinde su var. Siemens'in WN54C2A0TR kurutmalı çamaşır makinesi kılavuzunda bu kodun karşılığı kısa: **cihaz sızdırıyor.** Talimat da iki adım: musluğu kapat, müşteri hizmetlerini ara. Yani E:35 evde onarılan bir kod değil. Ama servisi beklerken yapılacak doğru işler var ve kılavuzun sızıntıyla ilgili başka satırları, suyun dışarıdan gelip gelmediğini ayırmana yardım ediyor. Bu yazıda hepsini aynı kılavuzdan sırayla topladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:35-10 = cihaz sızdırıyor. Musluğu kapat, fişi çek ya da sigortayı kapat. Camda su varsa kapağı açma. Dışarıda görünen yerlere bak: giriş hortumu, tahliye hortumu, kapı ve conta. Kod sürüyorsa makineyi kullanma, Siemens müşteri hizmetlerini ara.

## Ekran ve belirti ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **E:35 -10** | Cihaz sızdırıyor | 🛠️ Musluğu kapat, 🔧 müşteri hizmetleri |
| **Giriş hortumundan su** | Hortum doğru bağlanmamış ya da hasarlı | 🛠️ Montajı kontrol et; hasarlıysa 🔧 |
| **Tahliye hortumundan su** | Hortum doğru bağlanmamış ya da hasar görmüş | 🛠️ Montajı kontrol et; hasarlıysa değiştir |
| **Kapının altından su** | Kapı ya da conta üzerinde kirlilik | 🛠️ Kapıyı ve contayı temizle |
| **Yoğun köpük** | Deterjan dozajı çok fazla | 🛠️ Sonraki yıkamada deterjanı azalt |

## Adım adım: servisi beklerken yapılacaklar

**1. Musluğu kapat.** E:35-10 satırının ilk talimatı bu: **musluğu kapatınız.** Siemens'in kurulum bölümü su giriş hortumunun usulüne uygun bağlanmamasının maddi hasarlara neden olabileceğini yazıyor.

**2. Elektriği kes.** Güvenlik bölümüne göre cihaz arızalıysa **fiş derhal çekilmeli ya da sigorta kutusundan sigorta kapatılmalı ve musluk kapatılmalı**, ardından müşteri hizmetleriyle iletişime geçilmeli. Fişi çekerken kablodan değil, **her zaman fişin kendisinden** tut. Kılavuz cihaza nem girmesinin elektrik çarpmasına neden olabileceğini de hatırlatıyor.

**3. Kapağı zorlama.** Tamburda su kalmış olabilir. Kılavuza göre acil kilit açmanın şartı **pis su pompasının boş olması**; **camdan su görünüyorsa kapak açılmamalı**, çünkü dışarı akan su maddi hasara neden olabilir. Sızıntı kodu varken pompayı boşaltma işini servise bırak.

**4. Giriş hortumuna bak.** Kılavuzdaki "su giriş hortumundan dışarı su akıyor" satırına göre sebep hortumun **doğru bağlanmamış ya da hasarlı** olması. Çözüm montajı kontrol etmek, **hasar durumunda müşteri hizmetlerini aramak.** Siemens giriş hortumundaki vidaların **elle** sıkılmasını, hortumun adaptör, uzatma ya da valf olmadan doğrudan musluğa bağlanmasını istiyor. Kurulum adımı da aynı: musluk dikkatlice açılmalı ve **bağlantı yerlerinin sızdırmazlığı** kontrol edilmeli.

**5. Tahliye hortumuna bak.** "Su tahliye hortumundan dışarı su akıyor" satırının sebebi hortumun doğru bağlanmamış ya da hasar görmüş olması; montajı kontrol et, hasarlıysa hortumu değiştir. Kılavuza göre boşaltma sırasında su çıkış hortumu **basınç altındadır** ve bağlı olduğu yerden çıkabilir; bu yüzden istenmeyen çıkmaya karşı emniyete alınmalı. Sifona bağlıysa bağlantı yeri bir **hortum kelepçesiyle (24-40 mm)** emniyete alınıyor. Hortumları asla bükme, ezme ya da kesme; Siemens yalnız ürünle gelen ya da orijinal yedek hortumların kullanılmasını istiyor.

**6. Kapıya ve köpüğe bak.** Su kapının altından geliyorsa kılavuzun açıklaması **kapı ya da conta üzerindeki kirlilik**; çözüm kapıyı ve contayı temizlemek. Siemens cihazın yalnız su ve **yumuşak, nemli bir bezle** temizlenmesini istiyor. Yoğun köpük gördüysen sebep çok fazla deterjan olabilir: bir sonraki yıkamada deterjanı azalt, akıllı dozajlama açıksa temel dozaj miktarını düşür.

**7. Kod sürüyorsa servis.** Dışarıda bir sebep bulamadıysan ya da E:35-10 ekrandan gitmiyorsa ev kontrolü bitmiştir. Musluğu kapalı tut, makineyi kullanma; güvenlik bölümü **hasarlı cihazların kesinlikle kullanılmamasını** istiyor. Siemens müşteri hizmetlerini ara. Kılavuzun "diğer tüm hata kodları" satırındaki öneri burada da işe yarar: aradığında **hata mesajını eksiksiz** söyle, mümkünse arızayı **fotoğraf ve videoyla** belgele.

## Aqua-Stop'lu modelde ne değişir

Siemens'in Aqua-Stop garantisi, Aqua-Stop sistemindeki bir hatanın suyun sebep olduğu bir hasara yol açması hâlinde cihazı ticari kullanmayan kişilerin hasarını karşılıyor; bunun şartı cihazın kılavuza uygun kurulmuş ve bağlanmış olması. Kılavuza göre su güvenliği için cihazın elektrik şebekesine bağlı olması gerekiyor ve musluğu normalde her yıkamadan sonra kapatmak gerekmiyor; yalnız birkaç hafta sürecek tatiller gibi uzun yokluklarda kapatılıyor. E:35-10 ekrandaysa bu kural değil, kodun kendi talimatı geçerli: musluk kapanır.

## Ne zaman servis

- E:35-10 ekranda kalıyorsa ya da geri geliyorsa
- Giriş hortumu hasarlıysa
- Su makinenin altından ya da içinden geliyorsa
- Camda su var ve çamaşırları çıkarman gerekiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, fiş, hortumların montajı, kapı ve conta temizliği sende; makinenin içi, kazan, iç hortumlar ve sızıntının teşhisi Siemens yetkili servisinde.

## Servisi aramadan önce kısa özet

1. Ekranda tam olarak ne yazıyor?
2. Su hangi taraftan geliyor: giriş hortumu, tahliye hortumu, kapı, alt taraf?
3. Musluk kapalı, fiş çekili mi?
4. Ürün numarası (E-Nr.), imalat numarası (FD) ve sayma numarası (Z-Nr.) ne? Tip etiketi modele göre kapağın ya da bakım kapağının iç tarafında veya cihazın arkasında.

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Siemens'in diğer kodları [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) sayfasında, yeniden başlatma kuralları [Siemens çamaşır makinesi hata kodu sıfırlama](/blog/siemens-camasir-makinesi-hata-kodu-sifirlama/) yazısında, marka bağımsız nedenler [çamaşır makinesi su kaçırıyor](/blog/camasir-makinesi-su-kaciriyor/) rehberinde. Bil, gör, çağır.
