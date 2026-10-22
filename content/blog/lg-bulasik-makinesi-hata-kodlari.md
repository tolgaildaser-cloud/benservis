---
title: "LG bulaşık makinesi hata kodları: IE, OE, bE, AE, HE"
description: "LG bulaşık makinesinde IE, OE, bE, HE, FE, AE, tE, LE ve NE kodları LG kılavuzuna göre ne demek; hangisini sen kontrol edersin, hangisi servis işi."
slug: "lg-bulasik-makinesi-hata-kodlari"
date: "2026-10-21"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-21 PAZ yazı alt ajanı. Konu seçimi (YK #179 sembol/hata kodu kümesi): origin/main'de lg-bulasik-makinesi-hata-kodlari yok (yalnız tek kod: lg-bulasik-makinesi-be-hatasi).
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "lg bulaşık makinesi hata kodları" → "... hata kodları oe", "... hata kodları ae", "lg bulaşık makinesi ie hata kodları", "... 0e hata kodları".
# Belge bu koşuda yeniden curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200, md5 yerel kopyayla aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
# Kod tablosu L s.60-61 "Hata Kodları": IE Su girişi sorunu · OE Boşaltma Sorunu / Atık tıkacı tıkanmış / Filtreler tıkanmış · bE uygun olmayan deterjandan aşırı köpük / Cihaz hizalanmamış
#   · HE Isıtıcı devre arızası · FE Aşırı su beslenmiş · AE Su kaçağı sorunu · tE Termistör arızası · LE Motor sorunu · NE Değişken motor sorunu → altı kodun hepsinde "Aynı sorun yeniden meydana gelirse servisi çağırın."
# Kurulum kontrolü kodları L s.21 (IE bükülmüş hat / ev su beslemesi açılmamış, basınç; OE bükülmüş/sıkışmış hortum, atık tıkacı) · L s.18 atık tıkacı deliği açılmamışsa OE
# Filtre L s.55-57 · donmuş hortum L s.10 · taşma L s.7 · Smart Diagnosis L s.53 · kendi kendine tamir L s.54 · servisi aramadan önce L s.60
# BİLEREK YAZILMAYANLAR: kod "resetleme"/sıfırlama yöntemi (belgede yok) · servis kodlarının parça/maliyet teşhisi · su besleme hortumu filtresi temizliği (L s.58: hortum sökülüyor + pense/cımbız → alet kuralı)
#   · ayak ayarı (anahtarla, montaj yetkili servis) · başka modellere genelleme · "0E" ile "OE" eşitliği (belgede yok) · fiyat · pazar bağlantısı.
# Alıntı denetim tablosu: lg-bulasik-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak fırça", "Derin olmayan bir kap", "Makinenin kullanım kılavuzu"]
steps:
  - "IE görüyorsan evin su beslemesinin ve makinenin musluğunun açık olduğunu kontrol et."
  - "Su besleme hortumunun makinenin altında bükülmediğine ya da sıkışmadığına bak."
  - "Kışın hortumlar donmuşsa makineyi kullanmadan önce buzun çözülmesini bekle."
  - "OE görüyorsan boşaltma hortumunun bükülmediğine ya da sıkışmadığına bak."
  - "Alt rafı çıkar, iç filtreyi saat yönünün tersine çevirip filtreleri al ve akan su altında yumuşak fırçayla temizle."
  - "Filtreleri yerine tak ve iç filtreyi yerine oturana kadar saat yönünde çevir."
faq:
  - q: "LG bulaşık makinesinde IE ne demek?"
    a: "LG'nin DFC325HD kullanıcı el kitabındaki hata tablosuna göre IE su girişi sorunudur. LG'nin istediği iki kontrol var: su besleme hortumunun tıkanmış, bükülmüş ya da donmuş olup olmadığına bakmak ve su beslemesini kontrol etmek. Kılavuzun kurulum bölümü, evin su beslemesinin açılmamış olmasını da IE nedenleri arasında sayıyor."
  - q: "LG bulaşık makinesinde OE ne demek?"
    a: "OE, LG'nin tablosunda boşaltma sorunudur. Üç neden yazıyor: boşaltma hortumu tıkanmış, bükülmüş ya da donmuş; atık tıkacı tıkanmış; filtreler tıkanmış. Filtre temizliği kullanıcı bakımıdır, LG kılavuzu filtrelerin iki haftada bir temizlenmesini tavsiye ediyor."
  - q: "AE kodu su kaçağı mı demek?"
    a: "Evet. LG'nin tablosunda AE su kaçağı sorunu olarak geçiyor ve tek talimat şu: aynı sorun yeniden meydana gelirse servisi çağırın. Kılavuzun güvenlik bölümüne göre taşma durumunda fişi çekip LG müşteri bilgi merkeziyle iletişime geçmek gerekiyor."
  - q: "HE, tE, LE ve NE kodlarını ben çözebilir miyim?"
    a: "LG bu dört kod için kullanıcıya bir kontrol vermiyor. HE ısıtıcı devre arızası, tE termistör arızası, LE motor sorunu, NE değişken motor sorunu; FE ve AE de aynı gruptadır. Hepsinde LG'nin cümlesi aynı: aynı sorun yeniden meydana gelirse servisi çağırın. LG ayrıca kendi kendine tamir etmenin cihaza zarar verebileceğini ve garantiyi geçersiz kılabileceğini yazıyor."
  - q: "Kodları telefonla okutabilir miyim?"
    a: "Bazı modellerde var. LG kılavuzuna göre Smart Diagnosis özelliği Wi-Fi'li cihazlarda LG ThinQ uygulamasıyla, işitilebilir tanılama yöntemiyle de telefonun mikrofonu ekranın önüne tutularak kullanılabiliyor. LG bu özelliğin yalnız bazı modellerde bulunduğunu belirtiyor."
images:
  coverAlt: "Kapağı kapalı ankastre bir bulaşık makinesinin kontrol panelinde yanan iki harfli bir hata kodu"
  steps:
    - "Lavabo altında açık konumda duran bir su vanası ve ona bağlı esnek hortum"
    - "Bulaşık makinesinin arkasından düz biçimde uzanan, hiçbir yerde katlanmamış bir su besleme hortumu"
    - "Pencere kenarında buğulu cam ve önünde düz uzanan, buzu çözülmüş bir su hortumu"
    - "Lavabo altına düzgün kıvrımla giden, ezilmemiş gri bir boşaltma hortumu"
    - "Akan musluk suyunun altında yumuşak bir fırçanın yanında duran bulaşık makinesi filtresi"
    - "Bulaşık makinesinin tabanındaki yuvasına oturmuş silindirik filtre ve yanında saat yönünü gösteren dönüş oku"
---

Bulaşık makinen durdu ve ekranda iki harfli bir kod yanıyor. LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabı bu kodları tek bir tabloda topluyor: **IE, OE, bE, HE, FE, AE, tE, LE ve NE.** Tablonun mantığı basit: ilk üç kodun her birinde LG kullanıcıya yapılacak kontroller veriyor, kalan altısında tek bir cümle var: **aynı sorun yeniden meydana gelirse servisi çağırın.** Bu yazıda her kodun LG'ye göre ne demek olduğunu, hangisinde neye bakacağını ve servisin nerede başladığını sırayla anlatıyoruz. Kaynak tek bir modelin kılavuzu; senin modelinde tuş adları ya da kod listesi farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** IE = su girişi, OE = boşaltma, bE = köpük. Bu üçünde kontrol sende: musluk ve hortumlar, boşaltma hortumu ve filtreler, deterjan. HE, FE, AE, tE, LE ve NE ısıtıcı, su seviyesi, kaçak, sensör ve motor tarafı; LG'ye göre tekrar ediyorsa servis işi.

## LG'nin hata kodu tablosu

![LG bulaşık makinesi hata kodları tablosu: IE, OE, bE kullanıcı kontrolü; HE, FE, AE, tE, LE, NE tekrar ederse servis](/tamir-gorsel/lg-bulasik-makinesi-hata-kodlari/kod-tablosu.png)

| Kod | LG'nin tanımı | Kim ne yapar |
|-----|---------------|--------------|
| **IE** | Su girişi sorunu | 🛠️ Su beslemesini, hortumun tıkanma, bükülme ve donmasını kontrol et |
| **OE** | Boşaltma sorunu · atık tıkacı tıkanmış · filtreler tıkanmış | 🛠️ Boşaltma hortumunu kontrol et, filtreleri temizle |
| **bE** | Uygun olmayan deterjandan aşırı köpük · cihaz hizalanmamış | 🛠️ Doğru deterjan, sütle temizlik; hizalama kurulumcuya |
| **HE** | Isıtıcı devre arızası | 🔧 Tekrar ediyorsa servis |
| **FE** | Aşırı su beslenmiş | 🔧 Tekrar ediyorsa servis |
| **AE** | Su kaçağı sorunu | 🔧 Tekrar ediyorsa servis |
| **tE** | Termistör arızası | 🔧 Tekrar ediyorsa servis |
| **LE** | Motor sorunu | 🔧 Tekrar ediyorsa servis |
| **NE** | Değişken motor sorunu | 🔧 Tekrar ediyorsa servis |

LG'nin sorun giderme bölümü bu tabloyu bir amaçla veriyor: kılavuza göre sorunların çoğunu servis merkezini aramadan **kendiniz giderebilirsiniz.** Aşağıdaki adımlar o kısmı kapsıyor.

## Adım adım: kodu görünce evde yapılacaklar

### IE: su gelmiyor

LG'nin tablosu IE için iki kontrol istiyor: **su besleme hortumunun tıkanmış, bükülmüş ya da donmuş olup olmadığını kontrol edin** ve **su beslemesini kontrol edin.**

**1. Musluğu ve evin suyunu kontrol et.** Kılavuzun kurulum bölümündeki kontrol tablosunda IE'nin bir nedeni de açıkça yazıyor: **ev su beslemesi açılmamış.** LG aynı satırda su basıncının çok yüksek ya da çok düşük olabileceğini de not ediyor. Evde başka musluklardan su akıyor mu, makinenin bağlı olduğu vana açık mı, ona bak.

**2. Hortumun yoluna bak.** Kurulum tablosuna göre IE'nin bir başka nedeni **su besleme hattının bulaşık makinesinin altında bükülmüş** olması. Görebildiğin kısımda hortum katlanmış ya da sıkışmışsa düzelt. Makinenin altındaki kısmı görmek için makineyi dolaptan çekmen gerekiyorsa bu kurulumcunun işi.

**3. Kışın donma.** LG'nin güvenlik bölümü açık: **kışın boşaltma hortumu ve su besleme hortumu donmuşsa, kullanmadan önce buzu çözün.** Soğuk bir balkon ya da kullanılmayan bir yazlık söz konusuysa ilk şüphe bu.

Markadan bağımsız kontroller [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısında.

### OE: su boşalmıyor

LG'ye göre OE'nin üç nedeni var: **boşaltma hortumu tıkanmış, bükülmüş ya da donmuş; atık tıkacı tıkanmış; filtreler tıkanmış.**

**4. Boşaltma hortumunu kontrol et.** Kurulum tablosundaki karşılığı: **boşaltma hortumu bükülmüş ya da sıkışmış.** Lavabo altında hortumun ezilmediğine, üzerine bir şey konmadığına bak.

**5. Filtreleri temizle.** LG kılavuzunun bakım bölümü, filtrelerde takılan gıda atıklarının **boşaltma konusunda sorun** yaratabileceğini yazıyor ve filtrelerin **iki haftada bir** temizlenmesini tavsiye ediyor. Sıra şöyle: alt rafı çıkar, alt püskürtücü kolu önde daha geniş bir V açıklığı kalacak konuma getir, **iç filtreyi saat yönünün tersine döndür** ve iç filtreyle paslanmaz çelik filtreyi çıkar. Filtreleri **akan su altında yumuşak bir fırçayla** temizle.

**6. Filtreleri geri tak.** Filtreleri tutuculara yerleştir ve iç filtreyi **yerleşene kadar saat yönünde** çevir. LG'nin notu: filtreyi takarken **klik sesiyle yerine oturduğunu duyana kadar** sıkıca kapat. Kılavuz bir uyarı da ekliyor: paslanmaz çelik filtreyi tutarken **keskin kenarlara** dikkat et.

**Atık tıkacı ne demek?** Lavabonun altındaki gider bağlantısı. LG'ye göre makine ilk monte edildiğinde tıkaçta doğru şekilde delik açılmamışsa **OE hatası meydana gelebilir.** Makine yeni kurulduysa ve ilk yıkamalardan itibaren OE veriyorsa, kurulumu yapan kişiyi ara. Lavabo altı gider tesisatını sökmek bu rehberin konusu değil.

LG'ye özel ayrıntılı kontroller [LG bulaşık makinesi su boşaltmıyor](/blog/lg-bulasik-makinesi-su-bosaltmiyor/) yazısında, filtre temizliğinin genel anlatımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) sayfasında.

### bE: köpük

LG'nin bE satırı uygun olmayan deterjandan, örneğin sıvı bulaşık sabunundan kaynaklanan **aşırı köpük oluşumu** diyor. Çözüm iki adım: el bulaşığında kullanılan deterjanı bırakıp yalnız otomatik bulaşık makinesi deterjanı kullanmak ve **derin olmayan bir kaba yaklaşık 100~200 ml süt** döküp kabı üst rafa koyarak makineyi **Otomatik programıyla** çalıştırmak. **7.** adım bu. Satırdaki ikinci neden **cihaz hizalanmamış**; ayak ayarı anahtarla yapıldığı için kurulumcunun işi. Ayrıntılar [LG bulaşık makinesi bE hatası](/blog/lg-bulasik-makinesi-be-hatasi/) yazısında.

## HE, FE, AE, tE, LE, NE: servis grubu

Bu altı kodda LG kullanıcıya kontrol vermiyor; her satırda aynı talimat var: **aynı sorun yeniden meydana gelirse servisi çağırın.** **8.** adım bu.

- **HE:** ısıtıcı devre arızası
- **FE:** aşırı su beslenmiş
- **AE:** su kaçağı sorunu. LG'nin güvenlik bölümüne göre **taşma durumunda fişi çıkarın** ve LG müşteri bilgi merkeziyle iletişime geçin. Kapağın önünde su görüyorsan [LG bulaşık makinesi su kaçırıyor](/blog/lg-bulasik-makinesi-su-kaciriyor/) yazısına da bak.
- **tE:** termistör arızası
- **LE:** motor sorunu
- **NE:** değişken motor sorunu

LG kılavuzu bu noktada net: **kendi kendine tamir etmek, cihaza daha fazla zarar verebileceği ve garantiyi geçersiz kılabileceği için önerilmez.** Kılavuz ayrıca cihaza servis çalışması yapılmadan önce enerji kablosunun, ev sigortasının ya da devre kesicinin bağlantısının kesilmesini istiyor. Bu iş servisin.

## Telefonla tanılama

Bazı LG modellerinde **Smart Diagnosis** var. Kılavuza göre Wi-Fi'li cihazlarda LG ThinQ uygulamasından Smart Diagnosis seçilerek sorun giderme verisi telefona aktarılabiliyor. İşitilebilir tanılamada makineyi Güç düğmesiyle açıyorsun, telefonun mikrofonunu ekranın önüne tutuyorsun ve uygulamanın talimatına göre ilgili düğmeyi basılı tutuyorsun. LG bu özelliğin **yalnız bazı modellerde** bulunduğunu belirtiyor.

## Ne zaman servis

- IE ya da OE, hortum ve filtre kontrollerinden sonra da geri geliyorsa
- Makine yeni kurulmuşsa ve OE ilk yıkamadan beri çıkıyorsa (kurulum)
- HE, FE, AE, tE, LE ya da NE yeniden çıkıyorsa
- Makinenin altında ya da önünde su birikiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumun görünen yolu, filtre ve deterjan sende; makinenin içi, ısıtıcı, motor, sensör ve tesisat uzmanın.

## Servisi aramadan önce kısa özet

1. Ekrandaki kod hangisi, makinenin modeli ne?
2. Evin suyu ve makinenin vanası açık mı?
3. Görebildiğin hortumlarda bükülme ya da donma var mı?
4. Filtreleri en son ne zaman temizledin?
5. Deterjan bulaşık makinesi deterjanı mı?

Ekrandaki kodu ve makinenin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Diğer markaların kodları [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) sayfasında. Bil, gör, çağır.
