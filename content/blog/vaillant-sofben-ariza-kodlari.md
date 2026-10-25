---
title: "Vaillant şofben arıza kodları: F01, F04, F05 ve diğerleri"
description: "Vaillant turboMAG şofbende F01 aşırı ısınma, F04 ateşleme, F05 atık gaz. Kılavuzun kod tablosu, açma/kapama ile sıfırlama ve ne zaman servis gerektiği."
slug: "vaillant-sofben-ariza-kodlari"
date: "2026-10-25"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, ajan A). origin/main 829cec5'te "vaillant-sofben" slug'ı ve "Vaillant şofben" başlığı yok.
#   Şofben sayfaları: demirdokum-sofben-f4-arizasi, eca-sofben-ariza-kodlari, ariston-sofben-a1-hatasi (başka markalar). Dalga 6/7/8 klasörlerinde Vaillant şofben yok.
# Hub kuralı: F.01–F.09 ve E bu sayfada tablo satırı; tekil kod sayfası (vaillant-sofben-f1/f4/f5) açılmadı, açılmamalı.
# Arama kanıtı (25 Eki 08:48 ve 08:50 +03, suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot.tsv):
#   "vaillant şofben" → 3. f1 arızası, 7. f5 arızası nasıl giderilir, 8. f4 arızası nasıl giderilir; "vaillant şofben f" → 2. f1, 3. f5, 4. f4;
#   "vaillant şofben a" → 4. arıza kodları. GSC: satır yok.
# Belgeler (bu koşuda curl -sL; zincir https://www.vaillant.com.tr/urunler/turbomag/ 200 text/html → PDF'ler 200 application/pdf):
#  (KK) turboMAG MAG 125/1 3R, 145/1 3R (H-TR) kullanma kılavuzu 0020265477_04  /api/download/product/tr/_turbomag_482325.pdf  md5 082f78c94845c71e8b100ebc757e03d6
#  (MB) aynı modeller montaj ve bakım kılavuzu 0020265476_07  /api/download/product/tr/_turbomag_1417460.pdf  md5 f95465f5331c729d88dafbcf234ba3f2
# Sayfalar: gaz/atık gaz kokusu KK s.4 · ekran sembolleri (FXX, reset sembolü) KK s.9 · açma KK s.10 · kapama, bakım sembolü KK s.11
#   · kullanıcı arıza tablosu (F04, F05) KK s.13 · kod tablosu F.01–F.09, E ve arıza giderme tablosu MB s.19.
# BİLEREK YAZILMAYANLAR: atık gaz borusu eğimi/gaz giriş basıncı/gerilim ölçümü (MB'de teknisyen işi) · NTC, Hall sensörü, presostat, gaz armatürü teşhisi
#   · atmoMAG ve eski modellerin kodları (bu koşuda belgesi yok) · servis telefonu · fiyat (#46).
# Alıntı denetim tablosu: vaillant-sofben-ariza-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa şofbene dokunma; gaz sayacındaki vanayı kapat, kapı ve pencereleri aç, binayı terk et ve dışarıdan gaz şirketinin acil hattını ara."
  - "Ekranda yanıp sönen F kodunu not al; kod ana ekranın yerine gösterilir."
  - "Şofben hiç çalışmıyorsa dıştaki ve şofbendeki gaz kesme vanalarının açık olduğunu, binadaki sigortanın atmadığını kontrol et."
  - "F04 görürsen açma/kapama şalterini kapatıp yeniden aç; üç denemede düzelmezse yetkili servise başvur."
  - "F01, F05 ya da F07 görürsen şalteri bir kez kapatıp aç; kod geri gelirse yetkili servisi ara."
  - "F06, F09 ya da E görürsen bekle; kılavuza göre sebep kalkınca şofben kendiliğinden normal çalışmaya döner."
  - "F02, F08 ya da tekrarlayan bir kod varsa şofbeni kullanmaya zorlama; kodu ve tip etiketindeki bilgileri yetkili servise bildir."
faq:
  - q: "Vaillant şofben F1 arızası ne demek?"
    a: "Kılavuzda F.01 aşırı ısınma olarak geçiyor: NTC sensörü suyun 85 °C'nin üzerine çıktığını tespit etmiş ve gaz girişi kesilmiştir. Kılavuzun ilk tedbiri açma/kapama şalterini OFF konumuna getirip tekrar ON konumuna getirmek. Kod sürerse müşteri hizmetleriyle irtibat kurulması isteniyor."
  - q: "Vaillant şofben F4 arızası nasıl giderilir?"
    a: "F.04 ateşleme arızası: brülör ateşlenmiyor ya da beklenmedik biçimde sönüyor. Kullanma kılavuzuna göre doğal gazda üç, sıvı gazda bir başarısız ateşleme denemesinden sonra şofben arıza konumuna geçer. Önce gaz vanalarının açık olduğuna bak, sonra şalteri KAPALI yapıp yeniden AÇIK konumuna getir. Üç denemede düzelmezse yetkili bayiye başvur."
  - q: "Vaillant şofben F5 arızası nedir?"
    a: "F.05, hava basınç sensörünün hata verdiğini gösterir: yanma havası ya da atık gaz sisteminde veya fanda arıza var. Kullanma kılavuzu bu kodun yetkili bayi tarafından giderilmesini istiyor. Şalteri bir kez kapatıp açmak kılavuzda yazıyor; kod geri gelirse bacaya ve şofbenin içine sen müdahale etme."
  - q: "Ekranda E harfi var, şofben bozuk mu?"
    a: "Kılavuzun tablosunda E donmaya karşı korumanın devrede olduğunu gösterir. Soğuk su girişinde 5 °C'nin altında sıcaklık algılanınca brülör kısa bir süre minimum gazla çalıştırılır; sıcaklık 7 °C'nin üzerine çıkınca E durumu sona erer."
  - q: "Ekranda bakım sembolü var, ne yapmalıyım?"
    a: "Kullanma kılavuzuna göre bu sembol bakım gerektiğini gösterir. Şofben arıza konumunda değildir ve çalışmaya devam eder. Bakım için yetkili teknik servise başvurman isteniyor; Vaillant yıllık kontrol ve iki yılda bir bakım öneriyor."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir şofben ve altında açık duran bir musluk"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Şofbenin küçük ekranında yanıp sönen kısa bir uyarı kodunun yakın planı"
    - "Şofbenin altında borular arasında duran sarı kollu bir gaz vanası"
    - "Şofbenin önündeki yuvarlak açma kapama düğmesinin yakın planı"
    - "Duvara asılı bir şofbenin yan tarafından görünen beyaz kasası"
    - "Buzlu bir pencerenin önünde duran duvar tipi bir su ısıtıcısı"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve kapalı bir alet çantası"
---

Vaillant şofbenin ekranında F harfiyle başlayan bir kod yanıp sönüyor ve musluktan sıcak su gelmiyor. Bu kodların anlamı, Vaillant'ın turboMAG MAG 125/1 3R ve MAG 145/1 3R (H-TR) şofbenleri için yayımladığı kullanma kılavuzunda ve montaj-bakım kılavuzunda yazıyor; ikisini de bu koşuda vaillant.com.tr'den indirdik. Bu sayfada kodların tamamını tek tabloda topladık: hangisinde açma/kapama şalteriyle sıfırlama denenebilir, hangisi kendiliğinden geçer, hangisi doğrudan servis işi. Senin şofbenin farklı bir modelse kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F04 ateşleme, F01 aşırı ısınma, F05 atık gaz ve fan tarafı. Önce gaz vanaları ve sigorta. F04'te şalteri kapatıp aç, üç denemede olmazsa servis. F06, F09 ve E kendiliğinden geçer. F02, F08 ve geri dönen her kod servis işi.

## Vaillant şofben kod tablosu

| Kod | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **F.01** | Aşırı ısınma: su 85 °C'nin üzerinde, gaz girişi kesildi | 🛠️ Şalteri kapat-aç; sürerse servis |
| **F.02** | Sıcak su NTC sensörü arızası | 📞 Servis |
| **F.04** | Ateşleme arızası: brülör yanmıyor ya da sönüyor | 🛠️ Gaz vanası, sonra şalteri kapat-aç; üç denemede olmazsa servis |
| **F.05** | Hava basınç sensörü: yanma havası, atık gaz ya da fan arızası | 🛠️ Şalteri bir kez kapat-aç; sürerse servis |
| **F.06** | Elektrik gerilimi çok düşük | ⏳ Gerilim düzelince kendiliğinden geçer |
| **F.07** | Gaz armatürü arızası | 🛠️ Şalteri kapat-aç; sürerse servis |
| **F.08** | Hall sensörü arızalı ya da bağlı değil | 📞 Servis |
| **F.09** | Basınç şalteri arızası | ⏳ Basınç şalteri yeniden çalışınca otomatik olarak geçer |
| **E** | Donmaya karşı koruma devrede | ⏳ Sıcaklık yükselince kendiliğinden biter |

## Adım adım: kodu okuyup ne yapacağına karar ver

**1. Gaz kokusu varsa dur.** turboMAG kullanma kılavuzunun güvenlik bölümü: gaz kokusu olan mekânda bulunma, kapı ve pencereleri açıp cereyan yap, açık alevden kaçın, sigara içme. Elektrik şalterlerini, prizleri, zili ve telefonu kullanma. Gaz sayacı kapatma düzeneğini kapat, mümkünse şofbendeki gaz kesme vanasını da kapat. Diğer sakinleri uyar, binayı terk et; polisi, itfaiyeyi ve gaz şirketinin acil durum birimini evin dışından ara. Atık gaz kokusunda ise kapı ve pencereleri aç, şofbeni kapat ve yetkili servisi bilgilendir.

**2. Kodu oku.** Kılavuzun sembol tablosuna göre arıza mesajı ana ekranın yerine yanıp sönerek gösterilir. Ekranda reset sembolü varsa reset fonksiyonu aktiftir ve şofben kapatılmıştır. Kodu bir kâğıda yaz; aşağıdaki adımların hangisinin sana uyduğunu bu belirler.

**3. Gaz ve elektrik geliyor mu?** Kullanıcı tablosunda "ürün çalışmıyor, sıcak su yok" satırının ilk iki nedeni şunlar: dıştaki ya da şofbendeki gaz kesme vanası kapalı, binadaki elektrik beslemesi kesilmiş. Kılavuz iki gaz vanasını da açmanı ve binadaki sigortayı kontrol etmeni istiyor; elektrik geri gelince şofben kendiliğinden çalışmaya başlar. Sıcak su sıcaklığı çok düşük ayarlanmışsa ayar düğmesini saat yönünde çevirerek yükselt.

**4. F04: kapat, aç, en fazla üç kez.** Kullanma kılavuzuna göre doğal gazda üç, sıvı gazda bir başarısız ateşleme denemesinden sonra şofben F04 ile arıza konumuna geçer. Tedbir: açma/kapama şalterini KAPALI konumuna getir, sonra tekrar AÇIK konumuna getir; şofben yeniden çalışmaya başlar. Montaj kılavuzu bu kodda önce gaz vanasının açık olup olmadığına bakılmasını istiyor. Kılavuzun sınırı açık: ateşleme arızasını üç arıza giderme denemesiyle gideremiyorsan yetkili bayiye başvur.

**5. F01, F05, F07: bir deneme, sonra servis.** Montaj kılavuzunun kod tablosu bu üç kod için de ilk adım olarak şalteri OFF konumuna getirip tekrar ON konumuna getirmeyi, ikinci adım olarak müşteri hizmetleriyle irtibatı yazıyor. F05 için kullanma kılavuzu ayrıca arızanın yetkili bayi tarafından giderilmesini istiyor, çünkü sebep atık gaz yolunda. Bacaya, fana ya da gaz armatürüne sen dokunma.

**6. F06, F09 ve E: bekle.** Bu üç gösterge arıza değil, korumadır. F06'da şofben gerilim 175 V civarının üzerine çıkınca normal çalışmaya döner. F09'da basınç şalteri yeniden çalıştığında normal çalışma otomatik başlar. E donma korumasıdır: soğuk su girişinde 5 °C'nin altı algılanınca brülör kısa süre minimum gazla çalışır, 7 °C'nin üzerinde E kalkar.

**7. F02, F08 ve geri dönen kodlar: servis.** F02 sıcak su sensörü, F08 Hall sensörü arızası; kılavuzun tek tedbiri müşteri hizmetleriyle irtibat. Ilık su geliyorsa ve ayar doğruysa montaj kılavuzu bunu da elektrik devresinde arıza sayıp servise yönlendiriyor. Aradığında kodu ve tip etiketindeki bilgileri söyle; etiket şofbenin alt kısmında, dış tarafta.

## Bakım sembolü ve kapatma

Ekranda bakım sembolü görünürse şofben arıza konumunda değildir, çalışmaya devam eder; kılavuz yetkili teknik servise başvurmanı istiyor. Vaillant yıllık kontrol ve iki yılda bir bakım öneriyor. Şofbeni geçici kapatacaksan açma/kapama şalterini dayanak noktasına kadar saat yönünün tersine çevir; ekran söner. Uzun süreli kapatmada gaz kesme vanasını ve soğuk su vanasını da kapat. Donma riski varsa şofbeni kapatma.

⛔ **Kendin-çöz sınırı burada biter.** Gaz vanalarının kolu, açma/kapama şalteri, sıcaklık ayarı ve binadaki sigorta sende. Şofbenin kapağının içi, gaz armatürü, sensörler, fan, baca ve elektrik bağlantıları yetkili servisin.

## Servisi aramadan önce kısa özet

1. Şofbenin modeli ne (tip etiketinden)?
2. Ekranda hangi kod yanıp sönüyor?
3. Gaz vanaları açık, sigorta yerinde mi?
4. Şalteri kaç kez kapatıp açtın, kod geri geldi mi?
5. Ortamda gaz ya da atık gaz kokusu var mı?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Başka markaların şofben kodları için [ECA şofben arıza kodları](/blog/eca-sofben-ariza-kodlari/) ve [DemirDöküm şofben F4 arızası](/blog/demirdokum-sofben-f4-arizasi/) yazılarına bak. Bil, gör, çağır.
