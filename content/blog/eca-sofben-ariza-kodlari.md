---
title: "ECA şofben arıza kodları: AL kodları ve reset"
description: "ECA şofben arıza kodları: AL01 alev kaybı, AL02 aşırı ısınma, AL28 sürekli reset, FE ve FX. 3 saniyelik reset ve servis sınırı, ECA kılavuzundan."
slug: "eca-sofben-ariza-kodlari"
date: "2026-10-23"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork C). Konu seçimi: origin/main'de hiç şofben sayfası yok (slug + başlık grep'i "şofben/sofben" boş);
#   eca-kombi-ariza-kodlari kombi kodlarını veriyor, şofbeni kapsamıyor. Diğer Dalga 3 klasörlerinde aynı slug yok.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "eca şofben" → (yankı hariç) 1. "…fiyatları", 2. "eca şofben arıza kodları", 3. "eca şofben resetleme", 4. "…lt arızası".
# GSC (https___www-6 7 gün, https___www-5 3 ay): şofben sorgusu yok.
# Belge bu koşuda curl -sL -A "Mozilla/5.0" ile eca.com.tr'den indirildi (adres ECA'nın Phoenix PH HM 11 LT/DK ürün sayfasındaki belge bağlantısı; eca.com.tr'nin hermetik şofben kategorisinde tek model bu); HTTP 200 application/pdf.
#  (P) PHOENIX PH HM 11 LT/DK hermetik şofben kullanım ve montaj kılavuzu, 28 s.  https://eca.com.tr/uploads/documents//bca/a1c4190f-91a0-4373-b6e2-98f0fa1674be.pdf  md5 7d865330a00d6a65b9af9c2564734fc9
# Gaz kokusu s.5 · emniyet listesi (akış sensörü 2,5 l/dk, sürekli çalışma emniyeti) s.7 · ilk çalıştırma yetkili servis s.15 · tek düğme, 35–60 °C, 3 sn reset s.15 · AL + kod dönüşümlü, RESET yanıp sönünce bırak, kapatma s.16
#   · donma koruması 7/9 °C, elektrik ve gaz vanası açık s.17 · arıza tablosu Tablo 5 s.17-18 · minimum akış 2,5 l/dk, min su basıncı 0,2 bar Tablo 6 s.18.
# BİLEREK YAZILMAYANLAR: baca kontrolü kullanıcı adımı olarak (AL81/AL82'de kılavuz "baca giriş ve çıkışını kontrol ediniz" diyor; baca işi servise bırakıldı, D dalgası ECA F07 kararıyla aynı)
#   · AL71 limit termostat kontrolü (kapak içi) · kalibrasyon ve parametre menüsü (kılavuz: teknik personel) · baca boyu ayarı (servis) · diğer ECA şofben modelleri (sitede belge yok) · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: eca-sofben-ariza-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanım kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa şofbene dokunma; gaz vanalarını kapat, kapı ve pencereleri aç, elektrik düğmelerine dokunma ve 187'yi ara."
  - "Ekranda AL yazısıyla dönüşümlü görünen kodu olduğu gibi not et."
  - "Kodu tablodaki satırıyla karşılaştır; AL83 gibi kendiliğinden geçen bir uyarıysa bekle."
  - "Reset gereken bir kodsa düğmeye 3 saniye bas, ekranda RESET yazısı yanıp sönmeye başlayınca bırak."
  - "Kod geri geliyorsa resetlemeyi bırak; art arda çok reset yapmak AL28 sürekli reset hatasına yol açar."
  - "Düşük voltaj kodu AL37'de evin elektrik beslemesini kontrol ettir, FX'te şofbeni resetle."
  - "Tabloda yetkili servisi arayınız denen bir kod görürsen kodu ve şofbenin modelini not edip ECA yetkili servisini ara."
faq:
  - q: "ECA şofbende AL ne demek?"
    a: "ECA'nın Phoenix kılavuzuna göre bir hata durumunda ekranda AL yazısı ve hata kodu dönüşümlü olarak görünür. AL'nin yanındaki iki haneli sayı arızayı söyler; AL01 alev kaybı, AL02 aşırı ısınma gibi."
  - q: "ECA şofben nasıl resetlenir?"
    a: "Kılavuzun tarifi: düğmeye 3 saniye basılı tut, ekranda RESET harfleri yanıp sönmeye başlayınca bırak. Resetten sonra hata devam ederse sorun giderme tablosuna bak ya da yetkili servisi ara."
  - q: "AL28 sürekli reset hatası neden çıkar?"
    a: "Tablodaki açıklama: art arda 6 kez reset yapma hatası. Yani aynı arızayı resetle geçirmeye çalışmak şofbeni bu koda kilitler. Kılavuzun çözümü yetkili servisi aramak."
  - q: "Şofben uzun süre çalışınca kapanıyor, FX çıkıyor. Arıza mı?"
    a: "Kılavuza göre FX uzun süreli çalışma hatası; şofben 6 saat boyunca sürekli çalıştığında görülür ve reset yapılarak düzeltilebilir. Sorun devam ederse yetkili servis aranmalı."
  - q: "Sıcak suyu az açınca şofben yanmıyor. Neden?"
    a: "Kılavuzun emniyet listesinde akış sensörü ile kuru yanmanın önlendiği yazıyor: dakikada 2,5 litrenin altındaki su akışına izin verilmiyor. Musluk çok az açıksa şofben ateşleme yapmayabilir; bu bir çıkarım, tablo bu durumu ayrı bir kodla vermiyor."
images:
  coverAlt: "Banyo duvarında tek düğmeli ve küçük ekranlı beyaz bir şofben"
  steps:
    - "Çizim: solda duvar tipi şofben, sağda açık bir pencere"
    - "Çizim: solda duvar tipi şofben, sağda not defteri ve kalem"
    - "Çizim: solda duvar tipi şofben, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi şofben, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi şofben, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi şofben, sağda prizden çekilen fiş"
    - "Çizim: solda duvar tipi şofben, sağda not defteri ve kalem"
---

Duş için sıcak suyu açtın ama şofben yanmadı; ekranda AL yazısı ile bir sayı sırayla yanıp sönüyor. ECA'nın Phoenix hermetik şofben kılavuzu bu ekranı açıklıyor: bir hata olduğunda AL ve hata kodu dönüşümlü görünür. Kılavuzun sonundaki sorun giderme tablosu her kodun muhtemel sebebini ve çözümünü veriyor. Çoğunun çözümü "yetkili servisi arayınız"; birkaçı ise reset ya da beklemeyle geçiyor. Bu yazıda tabloyu senin yapabileceklerin ve servise bırakman gerekenler diye ayırdık. Kılavuz PH HM 11 LT/DK modeline ait; şofbenin farklıysa kendi kılavuzuyla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kodu not et. AL83 kendiliğinden geçer, FX resetle düzelir, AL37'de elektrik beslemesine bakılır. Reset için düğmeye 3 saniye bas, RESET yanıp sönünce bırak. Kod geri geliyorsa durmadan resetleme: art arda 6 reset AL28 kilidi demek. Geri kalan kodlar servis.

## ECA şofben arıza kodları tablosu

| Kod | Kılavuzdaki adı | Kılavuzdaki çözüm |
|---|---|---|
| **AL01** | Alev kaybı | Kendiliğinden geçmez ya da sürekli görünürse servis |
| **AL02** | Aşırı ısınma | Kendiliğinden geçmez ya da sürekli görünürse servis |
| **AL06** | NTC hatası | Servis |
| **AL07** | Solar sensör hatası | Servis |
| **AL11 / AL12** | Gaz vanası parazit / kablo hatası | Servis |
| **AL28** | Sürekli reset (art arda 6 reset) | Servis |
| **AL37** | Düşük voltaj | Elektrik beslemesi yeterli hale getirilir, servis |
| **AL40 – AL44** | Frekans ölçüm, art arda alev kaybı, buton, Opentherm, gaz vanası zaman aşımı | Servis |
| **AL62** | Kalibrasyon isteği | Servis |
| **AL70 / AL72** | Solar sensör aşırı ısınma / NTC ölçüm | Servis |
| **AL71** | Yüksek sıcaklık uyarısı | Limit termostat kontrol edilmeli (kapak içi, servis işi) |
| **AL80** | Gaz valfi sürücü hatası | Servis |
| **AL81 / AL82** | İlk kalkışta / sürekli kötü yanma | Baca giriş ve çıkışı kontrol, sürerse servis |
| **AL83** | Geçici hatalı yanma uyarısı | Kendiliğinden kaybolur |
| **AL84 / AL86** | Geçici yanma hatası / fan sensörü | Servis |
| **AL98 / AL99** | Yazılım / tanımlanamayan hata | Servis |
| **FE** | Donma koruma (4 °C altında) | Servis |
| **FX** | Uzun süreli çalışma (6 saat) | Reset; sürerse servis |

## Adım adım: ECA şofbende arıza kodu çıktığında

**1. Gaz kokusu varsa dur.** Kılavuzun emniyet bölümü gaz kokusunda cihazın ve gazla çalışan diğer cihazların vanalarını kapatmanı, kibrit ya da çakmak yakmamanı, kapı ve pencereleri açmanı, elektrikli cihazların düğmelerine ve fişlerine dokunmamanı, daire ve bina girişindeki gaz vanalarını kapatmanı istiyor. Gaz kokan ortamda telefon kullanma; kılavuz **187** numaralı telefondan gaz şirketine haber vermeni söylüyor.

**2. Kodu not et.** Kılavuza göre hata durumunda **AL** ve hata kodu ekranda dönüşümlü belirir. Ekranda ayrıca bir arıza sembolü yanar. Sayıyı tam olarak yaz; AL01 ile AL41 farklı şeyler söylüyor.

**3. Tablodaki satırına bak.** **AL83** geçici hatalı yanma uyarısı ve kılavuza göre hata otomatik olarak kaybolur. **AL01** ve **AL02** için çözüm cümlesi "kendiliğinden geçmez ise veya sürekli olarak görünürse yetkili servisi arayınız"; yani bu iki kod da kendi kendine silinebiliyor. Bekleyip tekrar sıcak suyu açmak yeterli olabilir.

**4. Gerekiyorsa resetle.** Kılavuzun tarifi: düğmeye **3 saniye** basılı tut, ekranda **RESET** harfleri yanıp sönmeye başlayınca bırak. Phoenix'te tek bir düğme var; döndürünce su sıcaklığını 35–60 °C arasında ayarlıyor, basınca açıp kapatıyor, 3 saniye basılı tutunca resetliyor.

**5. Kod geri geliyorsa resetlemeyi bırak.** Tablodaki **AL28** satırı bunun sınırını gösteriyor: art arda **6 kez** reset yapma hatası. **AL41** de 6 seferden fazla alev kaybı demek. Kılavuz resetten sonra hata devam ederse sorun giderme tablosuna bakmanı ya da yetkili servisi aramanı istiyor. Aynı kodu defalarca silmeye çalışmak bir sonraki kilidi getirir.

**6. AL37 ve FX'te kendi payına düşeni yap.** **AL37** düşük voltaj hatası; kılavuzun çözümü enerji beslemesi yetersizse elektrik tesisatını yeterli hale getirmek ve yetkili servisi aramak. Elektrik tesisatı işi bir elektrikçinin. **FX** ise şofben 6 saat boyunca sürekli çalıştığında görülüyor ve reset yapılarak düzeltilebiliyor.

**7. Geri kalanı servis.** Tablodaki kodların çoğunda çözüm tek: yetkili servisi arayınız. NTC, gaz vanası, fan sensörü, kalibrasyon ve yazılım hataları şofbenin içinde. Kılavuz kalibrasyon ve parametre ayarlarının da teknik personel tarafından yapılması gerektiğini yazıyor.

## AL81, AL82 ve baca

Kötü yanma kodlarında kılavuz "baca giriş ve çıkışını kontrol ediniz, sorun devam ederse yetkili servisi arayınız" diyor. Phoenix hermetik bir şofben; yanma havasını özel baca sistemiyle dışarıdan alıyor ve atık gazı aynı bacadan veriyor. Baca bağlantısı ve baca boyu ayarı kılavuzda servisin işi olarak geçiyor. Bu yüzden bacayı sökmeyi ya da kurcalamayı önermiyoruz; AL81 ve AL82'de servisi ara.

## Kış için iki not

Kılavuza göre donma koruması su sıcaklığı 7 °C'nin altına inince devreye giriyor, 9 °C'yi geçince kapanıyor. Bunun çalışması için **elektrik ve gaz vanasının açık** olması gerekiyor. **FE** kodu 4 °C'nin altındaki hava koşullarında görülüyor ve çözümü servis.

⛔ **Kendin-çöz sınırı burada biter.** Gaz vanası, düğme ve reset sende; baca, gaz hattı, elektrik tesisatı, kalibrasyon ve şofbenin kapağının içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Ekranda AL'nin yanında hangi sayı var?
2. Kaç kez resetledin?
3. Kod kendiliğinden geçip geri mi geliyor?
4. Hava çok soğuk mu, şofben dış duvarda mı?
5. Evde başka elektrik sorunu var mı?

ECA kombin varsa onun kodları [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) sayfasında. Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
