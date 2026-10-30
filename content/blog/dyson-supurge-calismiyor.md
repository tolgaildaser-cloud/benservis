---
title: "Dyson süpürge çalışmıyor: ışıklar ve çözüm adımları"
description: "Dyson V8 kablosuz süpürge çalışmıyor, açılmıyor ya da duruyorsa: batarya ve mod ışıklarını oku, 5 °C sınırını, tıkanıklığı ve filtreyi kontrol et."
slug: "dyson-supurge-calismiyor"
date: "2026-10-30"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P31 (YK #197 boşluk, BOSLUK.md #149). Slug origin/main'de yok (ls-tree). Yakın yazı: dyson-supurge-temizligi (temizlik sorgusu, aynı V8 kılavuzu; "çalışmıyor" sorgusu açılmadı). Diğer: supurge-calismiyor (genel), lg-sarjli-supurge-calismiyor (başka marka).
# Kaynak (#88): tek üretici belgesi, Dyson V8 Cyclone Kullanım Kılavuzu, Türkçe, 13 s., md5 0f4981849dfcd2936b31cbda3ed87029 (dyson.co.uk, markets/turkey klasörü; dyson-supurge-temizligi'nde SEG kararıyla üretici belgesi sayıldı). Yerel kopya Dalga 7 _kaynak/pdf/dyson/v8.pdf; bu pakette _kaynak/dyson/ altına kopyalandı. s.3 düğmeler · s.4 LED tabloları · s.5-6 hazne · s.7 tıkanıklık · s.8-9 filtre · s.10 başlık · s.13 bakım ve 5 °C.
# KAPSAM SINIRI: yalnız V8 Cyclone belgesi; V10, V11, V12, V15 belgesi bu koşuda yok. Yazıda açıkça yazıldı.
# Batarya LED tablosunda "yanıp sönen mavi" (şarj) ve "mavi renkte yanıp sönüyor" (batarya hatası) metin olarak benzer; ikisi kılavuzda farklı simgelerle verilmiş (s.4 görüntüden doğrulandı). Yazı simgeyi tarif etmiyor, "kılavuzdaki iki simgeyi karşılaştır" diyor.
# BİLEREK YAZILMAYANLAR: batarya ve motor sökümü (#31, servis) · yedek batarya değişimi (çalışmıyor sorgusuyla ilgisiz) · kılavuzda olmayan model kodları · fiyat (#46).
# Alıntı denetimi: dyson-supurge-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (filtre kuruması hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Tüy bırakmayan nemli bez", "Bozuk para", "Soğuk musluk suyu"]
steps:
  - "Makineyi şarj ünitesine tak ve batarya ışığının yanıp sönmesini izle."
  - "Ortam 5 °C'nin altındaysa makineyi ısınmış bir odaya al ve bekle."
  - "Güç düğmesine bas ve mod düğmesindeki ışığın rengine bak."
  - "Işık yanıp sönen beyazsa siklonu, yanıp sönen sarıysa başlığı doğru tak."
  - "Makineyi şarjdan çıkar, soğumasını bekle ve boruda, hazne ile başlıkta tıkanıklık ara."
  - "Hazneyi boşalt; ön ve arka filtreyi çıkar, soğuk suyla yıka ve kurumaya bırak."
  - "Başlığı ters çevir, uç kapağını bozuk parayla aç ve silindir fırçadaki tıkanıklığı temizle."
faq:
  - q: "Dyson süpürgem açılmıyor, ışık yanmıyor, ne yapmalıyım?"
    a: "V8 Cyclone kılavuzuna göre mod düğmesinde ışığın hiç yanmaması bataryanın boşaldığı anlamına geliyor. Makineyi şarj ünitesine tak; tamamen şarj olması yaklaşık dört saat sürüyor. Ortam sıcaklığı 5 °C'nin altındaysa makine hem çalışmıyor hem şarj olmuyor."
  - q: "Dyson'da sabit sarı ışık ne demek?"
    a: "Kılavuzun mod ışığı tablosunda sabit sarı ışık motor arızası, yanıp sönen sarı ışık ise uyumsuz başlık demek. Motor arızasında kendin müdahale etme; Dyson yetkili servisine ver."
  - q: "Dyson süpürge titreyip duruyor, neden?"
    a: "Kılavuza göre makine otomatik olarak duracak biçimde tasarlandı; herhangi bir parçası tıkanırsa motor titriyor ve tıkanıklık giderilene kadar çalışmıyor. Önce şarjdan çıkar ve soğumasını bekle."
  - q: "Yanıp sönen beyaz ışık neyi gösteriyor?"
    a: "Kılavuz bu ışığı 'siklon doğru şekilde takılmamış' diye açıklıyor. Siklonu ana gövdenin oluklarına oturtup aşağı bastır, hazne tabanını kapanana kadar yukarı it."
images:
  coverAlt: "Duvara monte şarj ünitesinde duran kablosuz dikey süpürge"
  steps:
    - "Süpürgeyi şarj ünitesine takan beyaz eldivenli sade siluet el"
    - "Odanın sıcaklığını gösteren duvar termostatına bakan beyaz eldivenli sade siluet el"
    - "Süpürgenin güç düğmesine basan beyaz eldivenli sade siluet el"
    - "Siklonu gövdeye oturtan beyaz eldivenli sade siluet el"
    - "Boruyu gövdeden ayıran beyaz eldivenli sade siluet el"
    - "Filtreyi akan suyun altında tutan beyaz eldivenli sade siluet el"
    - "Başlığın uç kapağını bozuk parayla açan beyaz eldivenli sade siluet el"
---

Dyson kablosuz süpürgen birden açılmıyorsa ya da çalışırken susuyorsa çoğu zaman makine seni ışıklarla uyarıyor. Bu yazı Dyson'ın Türkiye için yayımladığı **Dyson V8 Cyclone** Türkçe kullanım kılavuzunu okuyup "çalışmıyor" belirtisini sırayla eler: batarya, sıcaklık, mod ışığı, siklon, tıkanıklık, filtre ve fırça. V10, V11, V12 ve V15 gibi başka Dyson modellerinin kılavuzuna bu çalışmada ulaşamadık; onlarda ışık düzeni ve parça yerleri farklı olabilir. **Kendi kılavuzun esastır.**

> ⚡ **Kısa özet:** Önce şarj ünitesine tak. Ortam 5 °C'nin altındaysa makine çalışmaz. Mod ışığında sabit sarı motor arızası, yanıp sönen sarı uyumsuz başlık, yanıp sönen beyaz takılmamış siklon demek. Işık normalse tıkanıklığı, haznenin doluluğunu, filtreleri ve fırçayı kontrol et.

## Işıklar ne diyor?

| Işık | Kılavuzdaki anlamı |
|---|---|
| Batarya: ışık yok | Makine tamamen şarj edildi |
| Batarya: yanıp sönen mavi | Makine şarj ediliyor |
| Mod düğmesi: ışık yok | Batarya boşalmıştır |
| Mod düğmesi: yanıp sönen mavi, yeşil veya kırmızı | Düşük batarya seviyesi |
| Mod düğmesi: sabit sarı | Motor arızası |
| Mod düğmesi: yanıp sönen sarı | Uyumsuz başlık |
| Mod düğmesi: yanıp sönen beyaz | Siklon doğru şekilde takılmamış |

Batarya ışığında kılavuz ayrıca "mavi renkte yanıp sönüyor" için **batarya hatası** diyor. Bu satır ile şarj satırı kılavuzda farklı simgelerle çizilmiş; kendi kılavuzundaki iki simgeyi karşılaştır.

## Adım adım: çalışmayan Dyson'ı kontrol et

**1. Şarj ünitesine tak.** Kılavuza göre batarya şarj olurken ışık yanıp sönüyor ve tamamen şarj olması yaklaşık dört saat sürüyor; makine tamamen şarj olunca ışık sönüyor. Mod düğmesinde ışık hiç yanmıyorsa batarya boşalmıştır. Bu yüzden önce şarja tak ve beklemeden karar verme.

**2. Odanın sıcaklığına bak.** Kılavuz açık: ortam sıcaklığı 5 °C'nin altındayken makine çalışmaz ya da şarj olmaz. Bunun amacı motoru ve bataryayı korumak. Garajda ya da soğuk balkonda duran makineyi ısınmış bir odaya al ve bir süre bekle.

**3. Güç düğmesine bas, ışığa bak.** Üstteki düğme süpürgeyi açıp kapatıyor, alttaki düğme güç modunu değiştiriyor. Düğmeye bastıktan sonra mod ışığının rengine bak; yukarıdaki tablo hangi ışığın ne dediğini veriyor. **Sabit sarı ışık motor arızası demek; burada dur ve servise ver.**

**4. Siklonu ve başlığı doğru tak.** Yanıp sönen beyaz ışık siklonun doğru takılmadığını gösteriyor. Siklonu ana gövdenin oluklarında kaydır, yerine oturana kadar aşağı bastır, sonra hazne tabanını kapanana kadar yukarı it. Yanıp sönen sarı ışıkta uyumsuz bir başlık takılı; başlığı çıkarıp doğru olanı tak.

**5. Tıkanıklık ara.** Kılavuza göre makine otomatik duracak biçimde tasarlanmış: bir parçası tıkanırsa motor titriyor ve tıkanıklık giderilene kadar çalışmıyor. Önce şarjdan çıkar, tetiğe dokunma, makineyi soğumaya bırak ve keskin nesnelere dikkat et. Kılavuz, tıkanıklık aranırken makineyi açmanın yaralanmaya yol açabileceğini de yazıyor.

**6. Hazneyi boşalt, filtreleri yıka.** Kir en üst seviyeye ulaştığında hazneyi boşalt; dolu hazneyle kullanmak performansı etkiliyor ve filtreyi daha sık yıkamanı gerektiriyor. Ön filtre siklonun üstünden, arka filtre saatin aksi yönünde çevrilerek çıkıyor. İkisini de yalnız soğuk suyla, su berrak akana kadar yıka, havadar bir yerde en az 24 saat kurut. Kılavuz, nemli filtreyle kullanmanın makineye zarar verebileceğini söylüyor; ıslak filtreyi takma.

**7. Fırça başlığındaki tıkanıklığı temizle.** Başlığı ters çevir, uç kapağını bozuk parayla aç, silindir fırçayı çıkar ve tıkanıklığı al. Başlığı ve fırçasını yıkama; yalnız tüy bırakmayan nemli bezle sil. Daha ayrıntılı bakım için [Dyson süpürge temizliği](/blog/dyson-supurge-temizligi/) yazısına bak.

## Bataryayı korumak için

Kılavuz batarya ömrü için MAX modunu yalnız ihtiyaç halinde kullanmanı istiyor. Batarya şarj ünitesinde şarj edilecek biçimde tasarlanmış ve şarj seviyesi yüzde yüze ulaşınca şarj işlemi duruyor; bu yüzden makineyi her kullanımdan sonra şarj ünitesine geri koymak yeterli. Makineyi tozlandıkça tüy bırakmayan nemli bezle sil.

## Temizlikten sonra da çalışmıyorsa

Mod ışığı sabit sarıysa ya da batarya ışığı batarya hatası simgesiyle yanıp sönüyorsa sorun makinenin içinde. Süpürgenin emişi de zayıfsa [süpürge çekmiyor](/blog/supurge-cekmiyor/) yazısını, şarj tutmuyorsa [şarjlı dikey süpürge şarj tutmuyor](/blog/sarjli-supurge-sarj-tutmuyor/) yazısını oku.

## Ne zaman servis?

- Mod düğmesinde sabit sarı ışık varsa (motor arızası)
- Batarya ışığı batarya hatasını gösteriyorsa
- Şarj, sıcaklık, tıkanıklık ve filtre kontrolünden sonra da makine açılmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Hazne, filtreler, başlık ve fırça senin; motor, batarya içi ve elektronik Dyson yetkili servisinin.

Servisi aramadan önce modelin adını ve seri numarasını (kılavuza göre şeffaf haznenin arkasında, ana gövdede), mod ışığının rengini (sabit mi yanıp sönüyor mu) ve makinenin son ne zaman şarj edildiğini not et. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Işık tabloları, sıcaklık sınırı, tıkanıklık ve filtre bakımı Dyson V8 Cyclone Türkçe kullanım kılavuzundan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
