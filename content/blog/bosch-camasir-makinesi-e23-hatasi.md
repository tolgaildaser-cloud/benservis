---
title: "Bosch çamaşır makinesi E23 hatası: cihaz sızdırıyor"
description: "Bosch çamaşır makinesinde E:23, küvette su olduğunu ve cihazın sızdırdığını söyler. Musluk, fiş, hortum bağlantıları ve servis sınırı adım adım."
slug: "bosch-camasir-makinesi-e23-hatasi"
date: "2026-10-23"
category: "Çamaşır Makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork A). Konu seçimi: origin/main'de bosch-camasir-makinesi-e23-hatasi yok.
#   Yakın slug'lar: bosch-camasir-makinesi-hata-kodlari (hub, E23 yalnız tablo satırı + kısa bölüm), bosch-camasir-makinesi-e17/-e18/-e30-10/-e30-80,
#   genel camasir-makinesi-su-kaciriyor. Bosch'ta E23 tekil sayfası yok.
# GSC kanıtı (https___www-5, Sorgular, 3 ay 18 Tem–17 Eki): "bosch çamaşır makinesi e23 hatası" 22 gösterim, poz 9,68, tık 0.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "bosch çamaşır makinesi e23" → 1. "…e23 hatası", 2. "…e23 hatası nasıl düzeltilir",
#   3. "…e23 hatası nedir".
# Belgeler yerel kopya (blog-taslaklar/kaynak-bosch-camasir-sprint/, BSH media3.bsh-group.com kaynaklı, 28 Eyl indirme). #88: forum/servis sitesi kullanılmadı.
#   Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile ayrıldı).
#  (A) Bosch WAK24210TR kullanım ve kurma kılavuzu  9000941315_A.pdf  39 s.  md5 e1a8d222a420af7849035015ebba996a
#  (B) Bosch WAK20200TR kullanım ve kurma kılavuzu  9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d
#  (W) Bosch WAT… kullanım ve kurma kılavuzu  9001006315_I.pdf  36 s.  md5 ae469964e1edcc11a031b297303113a8
#  (V) Bosch WIW…V2 kullanım ve kurma kılavuzu  9001358632_A.pdf  56 s.  md5 3f82f8e669abe64a21dfa431933dc267
# E:23 satırı A s.26, B s.29, W s.25, V s.49 · "Dışarı su akarsa" A s.26, B s.29, W s.26 · köpük/N sembolü A s.27 · kendin halledemiyorsan sırası A s.28
#   · ürün/imalat numarası A s.28 · acil kilit açma ve "camdan su" A s.25 · bağlantı sızdırmazlığı, vidalar elle, su basıncı 1–10 bar, tahliye hortumu emniyeti A s.35
#   · su hasarı uyarısı ve "emin değilsen uzman" A s.33 · Aquastop garantisi, tatilde musluk A s.39.
# BİLEREK YAZILMAYANLAR: E23'ün Aquastop ya da taban sensörüyle ilişkisi (bu belgelerde yok) · makineyi yatırma/eğip tabanı boşaltma · kapak plakasını açma (A s.33 yasak)
#   · conta, hazne, pompa gibi parça teşhisi · kodu silip çalışmaya devam etme hileleri · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-camasir-makinesi-e23-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekranda E:23 görünce önce su musluğunu kapat; kılavuzun bu kod için ilk talimatı bu."
  - "Program ayar düğmesini Kapalı konumuna getir ve makinenin fişini prizden çek."
  - "Kapak camından tamburun içine bak; camda su görünüyorsa kapağı açma ve acil kilit açmayı deneme."
  - "Kapak plakasını sökmeden dışarıda görünen yerlere bak: tahliye hortumunun ucu, giriş hortumunun bağlantısı ve deterjan çekmecesinin çevresi."
  - "Tahliye hortumunun lavaboda, giderde ya da sifonda sabit durduğunu kontrol et; yerinden kaymışsa doğru sabitle."
  - "Su giriş hortumunun musluk ve makine tarafındaki vida dişli bağlantılarına bak; gevşekse yalnızca elle sık."
  - "Deterjan çekmecesinin çevresinde köpük izi varsa bir sonraki yıkamada deterjan miktarını azalt."
  - "E:23 yeniden çıkıyorsa ya da su kaynağını bulamadıysan musluğu kapalı bırak, ürün ve imalat numarasıyla yetkili servisi çağır."
faq:
  - q: "Bosch çamaşır makinesinde E23 ne demek?"
    a: "Bosch'un WAK24210TR, WAK20200TR, WAT ve WIW kılavuzlarındaki arıza tablosunda E:23'ün karşılığı aynı: küvet içinde su var, cihaz sızdırıyor. Kılavuzun talimatı iki adım: su musluğunu kapatmak ve yetkili servisi ya da müşteri hizmetlerini çağırmak."
  - q: "E23 hatasını kendim giderebilir miyim?"
    a: "Kılavuz E:23 için evde yapılacak bir onarım vermiyor; musluğu kapatıp servisi çağırmayı söylüyor. Senin yapabileceğin, suyu durdurmak, elektriği kesmek ve kılavuzun ayrıca saydığı dış sızıntı noktalarına, yani tahliye hortumunun yerinde durup durmadığına ve giriş hortumunun vida bağlantısına bakmak."
  - q: "E23 çıktı, tamburda su var; kapağı açabilir miyim?"
    a: "Hayır. Bosch kılavuzu camdan su görünüyorsa çamaşır doldurma kapağının açılmamasını istiyor; dışarı çıkan su su hasarına neden olabilir. Acil kilit açma ancak cihaz kapatılıp fişi çekildikten ve deterjanlı su boşaltıldıktan sonra kullanılıyor. Su varken bu işi servise bırak."
  - q: "Makinenin önünden su akıyor ama ekranda kod yok, bu da E23 mü?"
    a: "Kılavuzda bu ayrı bir satır: dışarı su akıyorsa boşaltma hortumunu doğru sabitlemek ya da değiştirmek ve besleme hortumunun vida dişli bağlantısını sıkmak öneriliyor. Ekranda E:23 yoksa önce bu iki noktaya bak."
  - q: "Servisi ararken hangi bilgileri vermeliyim?"
    a: "Bosch kılavuzu cihazın ürün numarasını (E-Nr.) ve üretim numarasını (FD) istiyor. Bu bilgiler modele göre çamaşır doldurma kapağının içinde, açık servis kapağında ya da cihazın arka tarafında yazıyor. Ekrandaki kodu da eksiksiz söyle."
images:
  coverAlt: "Banyoda beyaz önden yüklemeli bir çamaşır makinesi ve önündeki zeminde küçük bir su birikintisi"
  steps:
    - "Çamaşır makinesinin arkasında duvara monte, kolu kapalı konuma çevrilmiş bir su musluğu"
    - "Prizden çekilmiş bir çamaşır makinesi fişi ve yanında boş duran priz"
    - "Kapalı çamaşır makinesi kapağının camından görünen ıslak çamaşırlar"
    - "Çamaşır makinesinin yan tarafından arkaya doğru uzanan gri ve beyaz iki hortum"
    - "Lavabo kenarına sabitlenmiş gri bir tahliye hortumunun ucu"
    - "Musluğa vidalanmış beyaz bir su giriş hortumunun bağlantı somunu"
    - "Yarı açık bir deterjan çekmecesi ve kenarında kurumuş köpük izi"
    - "Çamaşır makinesi kapağının iç kenarındaki ürün etiketi ve yanında katlanmış bir kullanım kılavuzu"
---

Ekranda E:23 yanıyor, belki makinenin önünde de su var. Bosch bu kodu açık yazıyor: **küvet içinde su var, cihaz sızdırıyor.** WAK24210TR, WAK20200TR, WAT ve WIW serisinin Türkçe kılavuzlarında satır aynı, talimat da aynı: su musluğunu kapat, servisi çağır. Bu yazıda kodun anlamını, servisi beklerken evde güvenle yapabileceklerini ve kılavuzun sızıntıyla ilgili diğer satırlarını bu dört kılavuzdan topladık. Senin modelinde tuş ve kapak yerleri farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:23 = küvette su var, cihaz sızdırıyor. Önce musluğu kapat, program düğmesini Kapalı'ya al, fişi çek. Camdan su görünüyorsa kapağı açma. Tahliye hortumu yerinde mi, giriş hortumunun vida bağlantısı gevşek mi bak. Kod geri geliyorsa ya da su kaynağı belli değilse yetkili servis.

## Ekran ve belirti ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **E:23** | Küvet içinde su var, cihaz sızdırıyor | 🛠️ Musluğu kapat, 🔧 servisi çağır |
| **Kod yok, dışarı su akıyor** | Boşaltma hortumu yerinden çıkmış ya da besleme hortumu bağlantısı gevşek | 🛠️ Hortumu sabitle, bağlantıyı sık |
| **N sembolü yanıp sönüyor** | Fazla deterjan; çekmeceden köpük çıkıyor olabilir | 🛠️ Sonraki yıkamada deterjanı azalt |
| **E:18** | Pompa ya da boşaltma hortumu tıkanmış | 🛠️ Pis su pompasını temizle |
| **Diğer göstergeler** | Cihazı kapat, 5 saniye bekle, aç; tekrar ederse servis | 🔧 Servis |

## Adım adım: servisi beklerken evde yapılacaklar

**1. Musluğu kapat.** E:23 satırındaki ilk talimat bu: **su musluğunu kapatınız.** Bosch kılavuzlarının kurulum bölümü, su giriş ve çıkış hortumu bağlantı yerlerinin yüksek su basıncı altında bulunduğunu ve sızıntıları ya da su hasarlarını önlemek için bu bölümdeki uyarılara mutlaka dikkat edilmesi gerektiğini hatırlatıyor.

**2. Programı kapat, fişi çek.** Kılavuz, bir hatayı kapatıp açmakla halledemediğin ya da onarım gerektiği durumlar için sırayı veriyor: program ayar düğmesini **Kapalı (İptal)** konumuna getir, elektrik fişini prizden çek, su musluğunu kapat ve yetkili servisi çağır.

**3. Camdan bak, kapağı zorlama.** Tamburda su kalmış olabilir. Bosch'un uyarısı net: **camdan su görünüyorsa çamaşır doldurma kapağını açmayınız**; dışarı çıkan su su hasarına neden olabilir. Acil kilit açma, cihaz kapatılıp fişi çekildikten ve deterjanlı su boşaltıldıktan sonra bir aletle kullanılıyor. Sızıntı varken bu işi servise bırak.

**4. Kapağı açmadan dışarıya bak.** Kılavuz iki durumu ayrı satırlarda yazıyor: E:23 **küvet içinde** su olduğunu söyler, kodsuz "dışarı su akarsa" satırı ise hortumlara bakar. Bu yüzden önce dışarıda görünen yerlere bak: tahliye hortumunun ucu, giriş hortumunun bağlantısı ve deterjan çekmecesinin çevresi. Kapak plakasını sökme; kılavuz, gerilim ileten parçalarla temasın **elektrik çarpma tehlikesi** doğurduğunu yazıyor.

**5. Tahliye hortumunu kontrol et.** Kılavuzdaki "dışarı su akarsa" satırının ilk maddesi **boşaltma hortumunu doğru sabitlemek ya da değiştirmek.** Kurulum bölümüne göre tahliye hortumu yüksek basınçla boşaltma sırasında lavabodan ya da bağlantı yerinden kayabilir; hortum kayarak çıkmaya karşı emniyete alınmalı, bükülmemeli ve uzunlamasına çekilmemeli.

**6. Giriş hortumunun bağlantısına bak.** Aynı satırın ikinci maddesi: **besleme hortumunun vida dişli bağlantısını sıkınız.** Bosch vidaların **yalnızca elle** sıkılmasını istiyor; pense gibi bir aletle fazla sıkılırsa dişler zarar görebilir. Kurulum notuna göre vida bağlantısı su hattı bağlantısının altında bulunur. Bağlantıyı sıktıysan musluğu dikkatlice aç ve bağlantı yerinde sızma olup olmadığına bak.

**7. Köpüğe bak.** Deterjan çekmecesinin çevresinde köpük izi varsa kılavuzun köpük satırına bak: ekranda **N** sembolü yanıp sönüyorsa çok fazla deterjan kullanılmış olabilir ve çekmeceden köpük çıkabilir. Bir sonraki yıkamada deterjan dozajını azalt. Ayrıntılar [Bosch çamaşır makinesi köpük taşıyor](/blog/bosch-camasir-makinesi-kopuk-tasiyor/) yazısında.

**8. Kod sürüyorsa servis.** Bağlantılar sağlam, hortum yerinde ve E:23 yine de geri geliyorsa ya da suyun kaynağını göremiyorsan ev kontrolü bitmiştir. Musluğu kapalı bırak ve kılavuzun dediği gibi **yetkili servisi çağır.** Servise cihazın ürün numarasını (E-Nr.) ve üretim numarasını (FD) bildir; bu bilgiler modele göre kapağın içinde, servis kapağında ya da cihazın arka tarafında yazıyor.

## Aquastop'lu modelde musluk ne zaman kapanır

Aquastop donanımlı Bosch makineler için kılavuzun garanti sayfası, normal kullanımda cihazı çalışırken gözetmenin ya da musluğu her seferinde kapatmanın gerekmediğini yazıyor; musluğun kapatılması yalnız birkaç hafta sürecek tatiller gibi uzun yokluklarda isteniyor. Ama ekranda E:23 varsa durum farklı: kodun kendi talimatı musluğu kapatmak. Kılavuza göre Aquastop garantisi, musluktaki Aquastop bağlantısına olan arızalı hatları ve bağlantı parçalarını kapsamıyor.

## Ne zaman servis

- E:23 ekranda duruyorsa ya da makine kapatılıp açıldığında geri geliyorsa
- Su makinenin altından ya da içinden geliyorsa
- Hortum bağlantıları sağlam olduğu hâlde zemin ıslanıyorsa
- Camda su var ve kapağı açman gerekiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, fiş, hortumların yerinde durması ve vida bağlantısını elle sıkmak sende; kapak plakasının arkası, küvet, hortumların makine içindeki uçları ve sızıntının teşhisi yetkili serviste.

## Servisi aramadan önce kısa özet

1. Makinenin modeli, ürün numarası (E-Nr.) ve üretim numarası (FD) ne?
2. Ekranda tam olarak ne yazıyor?
3. Su hangi taraftan geliyor: arka, ön, alt?
4. Tamburda su var mı?
5. Musluk kapalı ve fiş çekili mi?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bosch'un diğer kodları [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/) sayfasında, tahliye tarafı [Bosch çamaşır makinesi E18 hatası](/blog/bosch-camasir-makinesi-e18-hatasi/) yazısında, marka bağımsız nedenler [çamaşır makinesi su kaçırıyor](/blog/camasir-makinesi-su-kaciriyor/) rehberinde. Bil, gör, çağır.
