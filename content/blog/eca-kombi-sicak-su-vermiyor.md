---
title: "ECA kombi sıcak su vermiyor: evde bakılacaklar"
description: "ECA kombi sıcak su vermiyorsa kılavuzun sırası: OFF modu, musluk simgesi, musluğun açıklığı, kullanım suyu sıcaklığı, E01, F37 ve F52 kodları."
slug: "eca-kombi-sicak-su-vermiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme D, fork B). origin/main'de eca-kombi-sicak-su-vermiyor yok. ECA'da eca-kombi-ariza-kodlari,
#   E01/E03/F37/F40 tek kod sayfaları ve eca-kombi-kalorifer-isitmiyor (ters belirti: sıcak su var, petek soğuk) var.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "eca kombi" → 3. "eca kombi sıcak su vermiyor";
#   "eca kombi sıcak su" → 1. "eca kombi sıcak su vermiyor", 2. "…vermiyor ama petekler ısınıyor", 3. "…sıcak su ayarı nasıl yapılır". GSC (3 ay/7 gün): yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile ECA'nın kendi alan adı eca.com.tr'den yeniden indirildi: üçü de HTTP 200 application/pdf,
#   md5 yerel kopyalarla (kaynak-eca-sprint/) aynı. #88: forum/servis sitesi kullanılmadı. pdftotext -layout, sayfa = PDF sayfası.
#  (P) E.C.A. Proteus Premix Kullanma ve Montaj Kılavuzu  https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf  md5 28a5d7565ffbc9c1faaf1e97e45553d9
#  (C) E.C.A. Confeo Premix  https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf  md5 4ef56163ac14c46f9cb1dcb9ea189681
#  (T) E.C.A. Citius Premix  https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf  md5 023164f7b7cebedc931411900edd72b0
# Gaz kokusu P s.5, C s.5 · konum seçme/bekleme P s.26, T s.22 · OFF P s.27, C s.25, T s.23 · kış/yaz modu, musluk simgesi P s.28, C s.26, T s.24
#   · kullanım suyu 30–65 °C P s.27, C s.24, T s.23 · Eco/Comfort "Kullanım suyu devresine etkisi yoktur" P s.28, C s.26, T s.24
#   · minimum aktifleşme debisi 2,5 L/dk P s.36, C s.35, T s.31 (P Premix 42/45'te 3 L/dk) · E01 P s.29 · F37, F13, F52 P s.30, C s.28-29, T s.25-26
#   · su doldurma 1,5–2 bar, AP P s.25 · kuyu suyu/kireç uyarısı P s.25.
# BİLEREK YAZILMAYANLAR: akış sensörü, 3 yollu vana, plaka eşanjör, NTC teşhisi (kombi içi) · radyatör purjörü (bu belirtiyle ilgisiz) ·
#   "en sık neden" sıralaması · Eco modunun sıcak suyu kestiği iddiası (belge tersini yazıyor) · fiyat (#46).
# Alıntı denetim tablosu: eca-kombi-sicak-su-vermiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; gaz vanalarını kapat, kapı ve pencereleri aç, gaz kokusu olmayan bir yerden 187'yi ara."
  - "Ekranda OFF yazıyorsa kombi bekleme modundadır; konum seçme düğmesine bir kez basarak çalışma konumuna al."
  - "Ekranda musluk simgesinin göründüğünü, sıcak su musluğunu açınca yanıp söndüğünü kontrol et."
  - "Sıcak su musluğunu tam aç; çok az açılmış musluk kombiyi devreye sokmayabilir."
  - "Kullanım suyu sıcaklığı çok düşük bırakılmışsa kullanım suyu sıcaklık artırma düğmesiyle yükselt."
  - "Eco ya da Comfort modunu değiştirmekle uğraşma; bu modlar kullanım suyunu etkilemez."
  - "Ekranda E01, F37 ya da başka bir kod varsa kılavuzdaki çözüm adımlarını uygula."
  - "Ayarlar doğru olduğu hâlde sıcak su gelmiyorsa ya da kod tekrar ediyorsa E.C.A. yetkili servisine haber ver."
faq:
  - q: "ECA kombi petekleri ısıtıyor ama sıcak su vermiyor, neden?"
    a: "ECA kılavuzlarında bu belirti için ayrı bir satır yok; ama kılavuzlar sıcak suyu etkileyen her ayarı anlatıyor. Kış modunda kombi kullanım suyu ihtiyacı olana kadar kaloriferi ısıtır; musluk açılınca musluk simgesi yanıp söner ve kombi suya döner. Simge yanıp sönmüyorsa kombi talebi algılamıyor demektir: musluğun yeterince açık olup olmadığına bak. Simge yanıp sönüyor ama su soğuk geliyorsa sıcaklık ayarına ve ekrandaki koda bak."
  - q: "ECA kombide sıcak su sıcaklığı nasıl ayarlanır?"
    a: "Proteus ve Citius Premix'te kumanda panelinde kullanım suyu için ayrı artırma ve azaltma düğmeleri var; Confeo Premix'te ayrıca dokunmatik kaydırmalı bir ayar da bulunuyor. Kullanım suyu sıcaklığı 30 °C ile 65 °C arasında ayarlanabiliyor."
  - q: "Eco moduna almak sıcak suyu keser mi?"
    a: "Hayır. ECA'nın üç kılavuzu da Eco ve Comfort modlarının yalnız kalorifer devresi için olduğunu ve kullanım suyu devresine etkisi olmadığını yazıyor."
  - q: "Yaz modunda sıcak su gelir mi?"
    a: "Gelir. Yaz modunda kombi yalnız kullanım suyu taleplerine cevap verir; ekranda musluk simgesi sabit görünür, petek simgesi görünmez. Sıcak su istendiğinde musluk simgesi yanıp söner. Sıcak su yalnız OFF yani bekleme modunda hazırlanmaz."
  - q: "Ekranda F52 yazıyor, ne yapmalıyım?"
    a: "Proteus ve Citius Premix kılavuzlarına göre F52 kullanım suyu sıcaklık sensörü hatası; sensör arızalı olabilir. Kılavuzun tek çözümü E.C.A. yetkili servisine haber vermek. Sensör kombinin içinde, evde yapılacak bir kontrolü yok."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve altında açık duran bir lavabo musluğu"
  steps:
    - "Açık duran bir pencere ve önünde boş, sakin bir mutfak"
    - "Duvara asılı beyaz bir kombinin karanlık ekranının yakın planı"
    - "Kombi ekranında beliren musluk biçimli küçük bir simge"
    - "Lavabo üzerinde sonuna kadar açılmış, gür akan bir musluk"
    - "Kombinin kumanda panelinde yukarı ve aşağı ok biçimli sıcaklık düğmeleri"
    - "Kombinin sade kumanda panelinde tek bir yuvarlak tuşun yakın planı"
    - "Kombinin önünde duran yuvarlak kadranlı bir basınç göstergesi"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve kapalı bir alet çantası"
---

Musluğu açıyorsun, su akıyor ama ısınmıyor; belki petekler sıcak bile. ECA'nın Proteus Premix, Confeo Premix ve Citius Premix kullanma kılavuzlarında bu belirtinin tek bir satırı yok; ama üç kılavuz da kombinin kullanım suyuna nasıl cevap verdiğini, ekran simgelerini ve sıcak suyu ilgilendiren hata kodlarını aynı mantıkla anlatıyor. Bu yazıda servisi çağırmadan önce evde bakabileceğin her şeyi bu üç kılavuzdan sırayla topladık. Tuş yerleri modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda OFF varsa kombi bekleme modunda. Musluğu açınca musluk simgesi yanıp sönmeli; sönmüyorsa musluğu tam aç. Kullanım suyu sıcaklığı 30–65 °C arasında ayarlanır. Eco/Comfort sıcak suyu etkilemez. E01'de gaz, F37'de basınç, F52'de servis.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **OFF** | Bekleme modu; kalorifer ve kullanım suyu talebi yapılmaz | 🛠️ Konum seçme düğmesine bir kez bas |
| **Musluk simgesi yanıp sönüyor** | Kullanım suyu ısıtma isteği var | Kombi suyu ısıtmaya çalışıyor |
| **AP** | 160 saniyelik otomatik hava tahliye modu | Bekle, Reset'e basma |
| **E01 / F37 / F52** | Ateşleme / düşük basınç / sıcak su sensörü | Aşağıdaki adımlar |

## Adım adım kontrol

**1. Gaz kokusu var mı?** ECA'nın emniyet kurallarına göre gaz kokusu hissedersen cihazın ve gazla çalışan diğer cihazların vanalarını kapat, ocak ve fırını söndür, kibrit ya da çakmak yakma. Kapı ve pencereleri açıp ortamı havalandır, elektrikli cihazların düğmelerine ve fişlerine dokunma, daire ve bina girişindeki gaz vanalarını kapat. Gaz kokusu olan ortamdaki telefonu kullanma; **187**'den gaz şirketine haber ver.

**2. OFF modunda mı?** Kılavuzlara göre OFF yani bekleme modunda **kalorifer ve kullanım suyu ısıtma talepleri yapılmaz**. Proteus ve Citius'ta konum seçme düğmesine bir kez basmak kombiyi çalışma konumuna alır. Confeo'da bu iş açma/kapama ve konum seçme işlevli 6 numaralı butonda.

**3. Musluk simgesine bak.** Hem kış hem yaz modunda ekranda musluk simgesi görünür. Kılavuzun tarifi: kullanım suyu ısıtma isteği oluştuğunda **musluk simgesi yanıp söner**. Kış modunda kombi, kullanım suyu ihtiyacı olana kadar kaloriferi ısıtır; musluk açılınca suya döner. Yani petekler sıcakken sıcak su gelmemesi, kombinin musluğu fark etmediğini ya da suyu ısıtamadığını gösterir.

**4. Musluğu tam aç.** Üç kılavuzun teknik tablosunda kullanım suyu için bir **minimum aktifleşme debisi** var: çoğu modelde dakikada 2,5 litre, Proteus Premix 42 ve 45'te 3 litre. Musluk bundan az açılırsa kombi sıcak su için devreye girmeyebilir. Musluğu sonuna kadar açıp musluk simgesinin yanıp sönmeye başladığını kontrol et. Tek bir musluktan sıcak su gelmiyorsa sorun o musluğun kendisinde olabilir; diğer musluklarla karşılaştır.

**5. Kullanım suyu sıcaklığı.** Kumanda panelinde kullanım suyu için ayrı artırma ve azaltma düğmeleri var; Confeo'da ayrıca dokunmatik kaydırmalı bir ayar bulunuyor. Kullanım suyu sıcaklığı **30 °C ile 65 °C** arasında ayarlanabiliyor. Değer en alta indirilmişse su ılık gelir; artırma düğmesiyle yükselt.

**6. Eco ve Comfort'a takılma.** İki mod da Reset tuşuyla değişir, ama ECA'nın üç kılavuzu da aynı cümleyi kuruyor: bu modlar **yalnız kalorifer devresi içindir, kullanım suyu devresine etkisi yoktur**. Sıcak su sorununu bu tuşla çözemezsin; üstelik Reset'e gereğinden fazla basmak başka bir koda yol açabilir.

**7. Ekrandaki kod.** **E01** ateşleme hatası: kombiye gaz gitmiyor. Kılavuzun sırası gaz vanasının açık olduğunu ve hatta gaz olup olmadığını kontrol etmek, sonra Reset'e basmak; ayrıntılar [ECA kombi E01 hatası](/blog/eca-kombi-e01-hatasi/) yazısında. **F37** düşük su basıncı: basıncı kontrol et, 1,5–2 bara ulaşana kadar su doldur, vanaları ve tesisatı kaçaklara karşı kontrol et; ayrıntılar [ECA kombi F37 hatası](/blog/eca-kombi-f37-hatasi/) yazısında. Basınç gelince ekranda **AP** çıkarsa 160 saniye bekle, Reset'e basma. **F52** kullanım suyu sıcaklık sensörü hatası; çözümü doğrudan yetkili servis.

**8. Ayarlar doğruysa servis.** Mod, musluk, sıcaklık ve basınç doğru, yine de sıcak su gelmiyorsa ev turu bitmiştir. ECA kılavuzlarının her hata satırındaki son cümle aynı: sorun devam ediyor ya da tekrarlıyorsa **E.C.A. yetkili servisine haber verin.**

## Kireç uyarısı

ECA, eşanjörün kireçlenmesini önlemek için kombiye şebeke suyu dışında kuyu suyu ya da doğal kaynak suyu verilmemesini tavsiye ediyor. Sıcak su zamanla azaldıysa ya da ısınması uzadıysa bunu servise söyle; eşanjör kombinin içinde ve temizliği servis işi.

## Ne zaman servis

- Musluk tam açıkken musluk simgesi yanıp sönmüyorsa
- Simge yanıp sönüyor ama su ısınmıyorsa
- E01 Reset'ten sonra geri geliyorsa
- Ekranda **F52** ya da **F13** (1 saatte 5'ten fazla Reset) varsa

⛔ **Kendin-çöz sınırı burada biter.** Ekran, düğmeler, musluk, basınç göstergesi ve doldurma vanası sende; kombinin kapağının içi, gaz hattı ve sensörler yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Proteus, Confeo, Citius ya da başka)?
2. Ekranda OFF ya da bir kod var mı?
3. Musluğu açınca musluk simgesi yanıp sönüyor mu?
4. Petekler ısınıyor mu?
5. Basınç soğukken kaç bar?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. ECA'nın bütün kodları [ECA kombi arıza kodları](/blog/eca-kombi-ariza-kodlari/) sayfasında, ters belirti için [ECA kombi kalorifer ısıtmıyor](/blog/eca-kombi-kalorifer-isitmiyor/), marka bağımsız nedenler için [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısında. Bil, gör, çağır.
