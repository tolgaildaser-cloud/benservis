---
title: "Termosifon ışığı yanmıyor: arıza mı, ayar mı?"
description: "Termosifonun ışığı yanmıyorsa önce hangi ışık olduğuna bak. Kılavuzlara göre ısıtıcı ışığının sönmesi çoğu zaman suyun ısındığını gösterir."
slug: "termosifon-isigi-yanmiyor"
date: "2026-10-23"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme E). origin/main'de termosifon-isigi-yanmiyor yok; termosifonda yalnız
#   termosifon-suyu-isitmiyor ve vestel-/demirdokum-termosifon-suyu-isitmiyor var. Işık sorgusu karşılanmıyor.
# Arama kanıtı: GSC son 7 gün (https___www-6) "vestel termosifon ışığı yanmıyor" 6 gösterim (poz. 19,5), "vestel termosifon sıcak su
#   gelmiyor" 7 gösterim. Otomatik tamamlama (bu koşu, hl=tr gl=tr): "termosifon ışığı" → "termosifon ışığı yanmıyor",
#   "termosifon ışığı yanıp sönüyor", "termosifon ışığı neden yanıp söner".
# Belgeler: Vestel elektrikli termosifon 20214615_k (statik.vestel.com.tr, bu koşuda HTTP 200, md5 5b2d7d441b5c5d5fc6b34451d428e8e0)
#   · Arçelik T 7350 B (yerel kopya, md5 51d9eda80694c637271a099e175a0722). Alıntı denetimi: termosifon-isigi-yanmiyor.KAYNAK.md
# BİLEREK YAZILMAYANLAR: lamba/LED değişimi · kart ve termostat teşhisi · V-otomat bağlantısı (yetkili kişi) · "ışık yanıp sönüyor"un
#   genel anlamı (belgelerde yalnız ilk açılış ve hata kodu bağlamında) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Termosifonun kullanma kılavuzu"]
steps:
  - "Hangi ışığın yanmadığını ayır; güç ışığı mı, ısıtıcı ya da rezistans ışığı mı, sıcak su hazır ışığı mı?"
  - "Yalnız ısıtıcı ışığı sönükse sıcak suyu aç ve suyun ısınmış olup olmadığına bak; su sıcaksa bu normaldir."
  - "Hiçbir ışık yanmıyorsa termosifonun V-otomat şalterini, prizini ve evin sigortasını kontrol et."
  - "Göstergeli modelde kontrol panelindeki açma/kapama düğmesiyle termosifonu çalışma konumuna al."
  - "Ekranda E1, E2 ya da E3 görüyorsan kılavuzdaki anlamına göre davran; E3'te şalteri kapatıp kazanın suyla dolduğundan emin ol."
  - "Şalter ve sigorta açık olduğu hâlde ışık yanmıyor ve su ısınmıyorsa termosifonun elektriğini kes ve yetkili servisi çağır."
faq:
  - q: "Termosifonun ışığı neden söner?"
    a: "Göstergeli Vestel termosifonlarda su istenen sıcaklığa ulaşınca rezistans devreden çıkar, rezistans işareti söner ve duş işaretli sıcak su hazır lambası yanar. Arçelik T 7350 B'de de ısıtıcı devreye girdiğinde ısıtıcı sembolünün altındaki ışık yanıyor. Yani ısıtıcı ışığının sönmesi çoğu zaman suyun ısındığını gösterir."
  - q: "Hiçbir ışık yanmıyor, ne yapmalıyım?"
    a: "Arçelik kılavuzuna göre elektrik geldiğinde güç ışığı sürekli yanar; o da yanmıyorsa elektrik gelmiyordur. Vestel'in sorun giderme tablosu termosifon çalışmıyorsa şalterin kapalı olabileceğini, elektriğin kesik ya da bina ana sigortasının atmış olabileceğini yazıyor."
  - q: "Işık yanıyor ama su ısınmıyor?"
    a: "Vestel tablosunda suyu ısıtmama için çözüm servis çağırmak; geç ısıtmada ise gerilimin düşük olması ya da rezistansın kireçlenmesi sayılıyor. Rezistans temizliği yetkili kişilerin işi."
  - q: "Ekranda E2 yazıyor, ışıklar söndü mü?"
    a: "Vestel'e göre E2 düşük voltaj uyarısı: şebeke voltajı cihaza zarar verecek kadar düşerse koruma devreye girer. Voltaj normale dönünce hata kendiliğinden kalkar ve cihaz kaldığı yerden çalışır."
  - q: "Donma koruması ışığı ne zaman yanar?"
    a: "Vestel'de su sıcaklığı 5 °C altına düştüğünde rezistans otomatik devreye girer ve suyu 16 °C'ye ısıtır; donma önleme ve rezistans göstergeleri yanar. Bunun için termosifon stand-by konumunda olmalı, elektriği ve sigortası açık olmalı."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir termosifonun ön yüzündeki küçük gösterge paneli"
  steps:
    - "Çizim: solda duvar tipi şofben, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi şofben, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi şofben, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda duvar tipi şofben, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi şofben, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda duvar tipi şofben, sağda telefon ve kullanım kılavuzu"
---

Banyoya girdin, termosifonun önündeki ışık yanmıyor. İlk düşünce "termosifon bozuldu" oluyor, ama termosifonlarda birden fazla ışık var ve her biri farklı bir şey söylüyor. Vestel'in göstergeli elektrikli termosifon kılavuzu ile Arçelik'in T 7350 B kılavuzu ışıkların ne zaman yanıp ne zaman söndüğünü anlatıyor. İşin ilginci, **ısıtıcı ışığının sönmesi çoğu zaman iyi haber**: su istenen sıcaklığa ulaşmış demek. Bu yazıda hangi ışığın neyi gösterdiğini ve gerçekten arıza olduğunda ne yapılacağını iki kılavuzdan topladık. Senin termosifonunda ışıklar farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yalnız ısıtıcı ya da rezistans ışığı sönükse sıcak suyu aç: su sıcaksa termosifon ısıtmayı bitirmiştir, normal. Hiçbir ışık yanmıyorsa elektrik gelmiyordur; V-otomat şalterine, prize ve sigortaya bak. Ekranda E kodu varsa anlamına göre davran. Elektrik geldiği hâlde ışık yok ve su soğuksa yetkili servis.

## Hangi ışık neyi gösterir

| Işık | Kılavuza göre | Sönükse |
|---|---|---|
| **Güç ışığı** (Arçelik) | Elektrik gelince sürekli yanar | Elektrik gelmiyor |
| **Isıtıcı / rezistans ışığı** | Isıtıcı devredeyken yanar | Su ısınmış olabilir, normal |
| **Sıcak su hazır (duş) lambası** (Vestel) | Su istenen sıcaklığa ulaşınca yanar | Su henüz ısınıyor |
| **Donma önleme** (Vestel) | Su 5 °C altına düşünce yanar | Normal |
| **E1 / E2 / E3** (Vestel) | Hata ya da uyarı | Koda göre |

## Adım adım: evde denenecekler

**1. Hangi ışık?** Önce panele bak. Vestel'in göstergeli modelinde yedi ayrı öğe var: **sıcak su hazır göstergesi**, açma/kapama düğmesi, **rezistans göstergesi**, **donma önleme göstergesi**, sıcaklık artırma/azaltma düğmesi, **sıcaklık/hata göstergesi** ve akıllı temizleme göstergesi. Arçelik T 7350 B'de ise bir **güç ışığı** ve **ısıtıcı sembolünün altındaki ışık** var. Yanmayan ışığın hangisi olduğu, sorunun ne olduğunu büyük ölçüde belirler.

**2. Isıtıcı ışığı sönükse suya bak.** Vestel kılavuzuna göre sıcaklık ayarından sonra rezistans devreye girer ve **rezistans işareti** yanar; su istenen değere ulaşınca **rezistans devreden çıkar, rezistans işareti söner** ve duş işaretinin olduğu lamba yanar. Su ayarlanan değerin **4 derece** altına düşünce rezistans yeniden devreye girer. Arçelik'te de ısıtıcı devreye girdiğinde ısıtıcı sembolünün altındaki ışık **sürekli** yanıyor. Yani ısıtıcı ışığı sönük ama su sıcaksa termosifon görevini yapmış; arıza yok.

**3. Hiç ışık yoksa elektrik.** Arçelik kılavuzuna göre ürüne elektrik geldiğinde **güç ışığı sürekli yanar**. Hiçbir ışık yanmıyorsa termosifona elektrik gelmiyordur. Vestel'in sorun giderme tablosu "termosifon çalışmıyor" satırında üç neden sayıyor: **şalter kapalı**, **elektrik kesik**, **bina ana sigortası atmış**. Vestel'de termosifon **V-otomat şalteriyle** açılıp kapatılıyor; şalter sigorta görevi görüyor ve herhangi bir elektrik kaçağında bağlantıyı kesiyor. Şalteri ve evin sigortasını kontrol et. Şalter tekrar tekrar atıyorsa zorlamadan bırak; kılavuz V-otomatın mutlaka yetkili birine bağlatılmasını istiyor.

**4. Açma/kapama düğmesi.** Göstergeli Vestel modelde termosifon, yetkili servis tarafından kurulduktan sonra **kontrol panelindeki açma/kapama düğmesine** basılarak çalışır hâle getiriliyor. İlk kullanımdan önce termosifonun suyla dolu olduğundan emin olup V-otomat şalteri açmak gerekiyor. Şalter açık ama panel karanlıksa termosifon kapalı konumda kalmış olabilir; düğmeye bas.

**5. E kodlarını oku.** Vestel'in sıcaklık/hata göstergesinde üç kod var. **E1** termistör hatası: yetkili servise başvur. **E2** düşük voltaj uyarısı: şebeke voltajı cihaza zarar verecek kadar düşerse koruma devreye girer, voltaj normale dönünce hata **kendiliğinden kalkar** ve cihaz kaldığı yerden çalışır. **E3** susuz çalıştırma: enerjiyi V-otomattan kes, termosifonun **suyla dolmasını sağla**, dolu olduğundan emin olunca enerjiyi yeniden ver. Kılavuz termosifonun tamamen su dolu olmadan çalıştırılmamasını istiyor; sıcak su musluğunu açınca su geliyorsa cihaz doludur.

**6. Sürüyorsa servis.** Şalter ve sigorta açık, panel hâlâ karanlık ya da ışıklar yanıyor ama su ısınmıyorsa ev kontrolü bitmiştir. Vestel tablosunda "termosifon suyu ısıtmıyor" satırının çözümü doğrudan **servis çağırın**. Termosifonun elektriğini şalterden kes ve **yetkili servisi** çağır. Kılavuz kurulum ve tamirin her zaman yetkili servise yaptırılmasını, hasarlı besleme kablosunun yalnız yetkili servis personelince değiştirilmesini istiyor.

## Işık yanıyor, su ılık

Işıklar normal ama su yeterince ısınmıyorsa Vestel tablosu iki neden sayıyor: **gerilim düşük** olabilir (uygun bir regülatör kullanılması öneriliyor) ya da **rezistans kireçlenmiş** olabilir (servis). Kılavuz Eco modunda cihazın 55 °C'de çalıştığını da hatırlatıyor; Arçelik'in ECO modu 47-53 °C aralığında çalışıyor. Sıcaklık ayarı düşük bırakıldıysa su "ılık" kalabilir. Ayrıntılı kontrol [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/) ve [Vestel termosifon suyu ısıtmıyor](/blog/vestel-termosifon-suyu-isitmiyor/) yazılarında.

## Ne zaman servis

- Şalter ve sigorta açık olduğu hâlde hiçbir ışık yanmıyorsa
- V-otomat şalteri tekrar tekrar atıyorsa
- Ekranda E1 görünüyorsa
- Işıklar yanıyor ama su hiç ısınmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Şalter, sigorta, açma/kapama düğmesi ve sıcaklık ayarı sende; rezistans, termostat, elektronik kart, V-otomat bağlantısı ve elektrik kablosu yetkili servisin.

## Servisi aramadan önce kısa özet

1. Termosifonun markası ve modeli ne?
2. Hangi ışık yanmıyor, hangileri yanıyor?
3. Sıcak su musluğundan gelen su sıcak mı?
4. Ekranda bir kod var mı?
5. Şalter ve sigorta açık mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
