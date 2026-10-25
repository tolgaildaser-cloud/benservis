---
title: "Ariston şofben A1 hatası: brülör yanmıyor"
description: "Ariston şofben A1 hatası brülörün yanmaması demek. Su ve gaz vanası, ON/OFF ile sıfırlama, tekrarında servis; Next Evo X ve Next Evo SFT kılavuzundan."
slug: "ariston-sofben-a1-hatasi"
date: "2026-10-24"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "ariston" slug'ı ve başlığı yok; "A1" geçen tek başlık "Bosch kombi CE ve 0Y-A1 hatası" (başka marka, kombi).
#   Şofben sayfaları: demirdokum-sofben-f4-arizasi, eca-sofben-ariza-kodlari (başka marka).
# Arama kanıtı (bu koşu, suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot-kanit.txt): "ariston şofben a" → 1. a1 hatası; "ariston şofben a1" → 1. a1 hatası, 2. hermetik şofben a1 hatası;
#   "ariston şofben" → 6. a1 hatası. GSC: satır yok (www-3..6 Sorgular.csv'de "ariston" yok).
# Belge zinciri: Ariston İtalya resmî ürün sayfası (200) → aynı alan adında PDF (200 application/pdf); dizin https://www.ariston.com/it-it/product-downloads-index.json (200).
#   TR indirme alanı bu koşuda yalnız JS model kodu arama kutusu gösterdi, PDF bağlantısı vermedi.
#  (A7) NEXT EVO X SFT kullanım+kurulum IT/ES/PT, 72 s., …/water-heater/gas/next-evo-x/manuale-uso-e-installazione-next-evo-x.pdf md5 bf16f851ec79595be7bd0e5b5f11b71c
#  (A10) NEXT EVO SFT kullanım+kurulum IT, 32 s., …/water-heater/instantaneous/next-evo-eu/manuale-uso-e-installazione-next-evo-sft.pdf md5 66d4d6b462cc300b284629018bedf02b
#  (A4) FAST EVO X ONT kullanım+kurulum IT/RO/ES/PT, 76 s., …/water-heater/gas/fast-evo-x/manuale-uso-e-installazione-fast-evo-x.pdf md5 ac71851811e4a6cdcc7d2afdc3fb0e12
#  Bu koşuda (13:11 +03) ürün sayfaları ve PDF'ler curl ile yeniden ölçüldü, md5 -q ile _kaynak kopyalarıyla aynı.
# BİLEREK YAZILMAYANLAR: elektrot kontrolü (teknik tabloda, yetkili servis işi) · A2/A3/A4 kodlarının kullanıcı adımları (kullanıcı tablosunda yok) · Fast Evo X LED yanıp sönme sayılarının anlamı (tabloda hepsi "kapat, servis") · gaz ayarı · fiyat (#46).
# Alıntı denetimi: ariston-sofben-a1-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanım kılavuzu"]
steps:
  - "Ortamda güçlü gaz kokusu varsa sıfırlamaya çalışma; ana gaz vanasını kapat, pencereleri aç ve teknisyene haber ver."
  - "Ekranda A1 göründüğünü ve alev simgesinin söndüğünü not al."
  - "Soğuk su girişindeki vananın ve gaz vanasının açık olduğuna, şofbene elektrik geldiğine bak."
  - "Şofbeni ON/OFF tuşuyla sıfırla; Next Evo SFT'de tuşu RESET yazısı çıkana kadar basılı tut ve bırak."
  - "Bir sıcak su musluğu aç; ekranda alev simgesi çıkıyorsa brülör yanmıştır. Suyun sıcaklığını kullanmadan önce kontrol et."
  - "A1 geri geliyorsa şofbeni kapat, gaz vanasını kapat, dış şalteri kapalıya al ve yetkili servisi ara."
  - "Ekransız Fast Evo X'te A1 yerine kırmızı ışığa bak; sabit yanıyorsa pilleri değiştir, yanıp sönüyorsa kapat ve servisi ara."
faq:
  - q: "Ariston şofbende A1 ne demek?"
    a: "NEXT EVO X SFT kullanım kılavuzunun hata tablosunda A1 brülörün yanmaması. Teknik bölümdeki tabloya göre ateşleme denemelerinden sonra alev algılanmayınca şofben duruyor. Kullanıcıya önerilen kontrol gaz vanasının açık olması ve ON/OFF tuşuna basmak."
  - q: "Hermetik şofbende A1 farklı mı?"
    a: "Hayır, kod aynı. NEXT EVO X SFT ve NEXT EVO SFT, yanma odası ve hava devresi odaya karşı sızdırmaz, havayı dışarıdan alan C tipi cihazlar; ikisinin kılavuzunda da A1 brülörün yanmaması. Fark sıfırlamada: Next Evo SFT'de ON/OFF tuşu RESET yazısı çıkana kadar basılı tutuluyor."
  - q: "Kaç kez ON/OFF yapabilirim?"
    a: "Kılavuz bir sayı vermiyor. Sıfırlamadan sonra kod hâlâ görünüyorsa ya da şofben sık sık duruyorsa Ariston şofbeni kapatmanı, gazı ve dış şalteri kapatıp teknisyen çağırmanı istiyor. Hata giderilmeden şofbeni yeniden çalıştırmamanı da yazıyor."
  - q: "Benim şofbenimde ekran yok, A1 göremiyorum."
    a: "Ekransız FAST EVO X'te arıza kodla değil kırmızı ışıkla gösteriliyor. Kılavuza göre ışık sabit yanıyorsa piller bitmiş, pilleri değiştirmen gerekiyor. Işık bir kez ya da daha çok yanıp sönüyorsa düğmeyi kapalıya al, gaz vanasını kapat, pilleri çıkar ve teknisyen çağır."
  - q: "Ekranda tabloda olmayan bir kod var, ne yapmalıyım?"
    a: "Kılavuzun talimatı: şofbeni kapat, gaz vanasını kapat, dış şalteri kapalı konuma al ve yetkili bir teknisyene haber ver. Hata giderilmeden şofbeni yeniden çalıştırma."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir şofben ve önündeki küçük ekran"
  steps:
    - "Çizim: solda duvar tipi şofben, sağda açık bir pencere"
    - "Çizim: solda duvar tipi şofben, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi şofben, sağda prizden çekilen fiş"
    - "Çizim: solda duvar tipi şofben, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi şofben, sağda su giriş musluğu"
    - "Çizim: solda duvar tipi şofben, sağda telefon ve kullanım kılavuzu"
    - "Çizim: solda duvar tipi şofben, sağda kumandanın pilleri"
---

Ariston şofbenden sıcak su gelmiyor, ekranda A1 yazıyor ve alev simgesi kayboldu. A1, Ariston'un ekranlı şofbenlerinde brülörün yanmadığını gösteren kod. Bu yazıda Ariston'un NEXT EVO X SFT ve NEXT EVO SFT kullanım kılavuzlarındaki sırayı ve ekransız FAST EVO X'teki karşılığını topladık. Kılavuzun İtalyanca baskısı, alıntılar Türkçeye çevrildi. Türkiye'de satılan modelde panel ve tuş adları farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gaz kokusu varsa sıfırlama yok. Su ve gaz vanası açık mı, elektrik var mı, bak. ON/OFF ile sıfırla. Sıcak su musluğunu aç, alev simgesini gör. A1 dönüyorsa kapat, gazı ve şalteri kapat, servisi ara. Ekransız modelde kırmızı ışığa bak.

## A1 hangi modelde ne demek

| Model | A1 ya da karşılığı | Kullanıcıya bırakılan |
|---|---|---|
| **NEXT EVO X SFT** (ekranlı, hermetik) | A1: brülör yanmadı | Gaz vanası açık mı bak, ON/OFF tuşuna bas |
| **NEXT EVO SFT** (ekranlı, hermetik) | A1: brülör yanmadı | Gaz vanası açık mı bak, ON/OFF'u RESET yazısı çıkana kadar basılı tut |
| **FAST EVO X** (ekransız, pilli) | A1 yok; kırmızı ışık | Sabit ışıkta pilleri değiştir, yanıp sönen ışıkta servis |

## Adım adım: Ariston şofbende A1 hatası

**1. Gaz kokusu varsa önce güvenlik.** Ariston'un güvenlik kurallarına göre güçlü gaz kokusu alırsan ana gaz vanasını kapat, pencereleri aç ve teknisyene haber ver. Yanık kokusu alırsan ya da şofbenden duman çıktığını görürsen şofbeni kapat, ana gaz vanasını kapat, pencereleri aç ve teknisyene haber ver.

**2. Kodu tanı.** Kılavuza göre şofben elektronik kartıyla kendini koruyor; bir kilitlenme olunca ekrandan **alev simgesi kayboluyor** ve bir hata kodu çıkıyor. Kullanıcı tablosunda **A1 brülörün yanmaması**. Teknik bölümdeki tablo NEXT EVO X SFT için ayrıntıyı veriyor: üç ateşleme denemesinden sonra alev algılanmayınca şofben duruyor.

**3. Ateşleme koşullarına bak.** Kılavuzun çalıştırma sırası üç kontrolle başlıyor: **soğuk su girişindeki vana açık mı, gaz vanası açık mı, şofbene elektrik geliyor mu.** A1 satırındaki ilk kontrol de gaz vanasının açık olması. Kılavuz şofben çalışmıyorsa gaz ya da soğuk su vanasının açık olduğunu, elektriğin geldiğini yeniden kontrol etmeni istiyor.

**4. ON/OFF ile sıfırla.** Kılavuza göre sistemi yeniden başlatmak için şofbeni ON/OFF ile kapatıp açmak gerekiyor. NEXT EVO X SFT'nin A1 satırı kısaca **ON/OFF tuşuna bas** diyor. NEXT EVO SFT'de yol biraz farklı: **ON/OFF tuşunu basılı tut**, şofben sıfırlamaya başlıyor; ekranda RESET yazısı çıkar çıkmaz tuşu bırak. Ariston kombide RESET tuşunun işleyişi farklı; o konu [Ariston kombi resetleme](/blog/ariston-kombi-resetleme/) yazısında.

**5. Sıcak suyu aç ve sıcaklığa dikkat et.** Bir sıcak su musluğu açınca şofben kendiliğinden çalışıyor; ekranda ayarlı sıcaklık ve brülörün yandığını gösteren **alev simgesi** görünüyor. Musluğu kapatınca şofben kendiliğinden sönüyor. Kılavuzun uyarısı: **50 °C'nin üstündeki su ağır yanıklara yol açar**; suyu kullanmadan önce sıcaklığını kontrol et.

**6. A1 dönüyorsa kapat ve servisi ara.** Sıfırlamadan sonra kod hâlâ görünüyorsa kılavuzun talimatı: şofbeni kapat, gaz vanasını kapat, **dış şalteri kapalı konuma al** ve yetkili bir teknisyene haber ver. Tabloda olmayan bir kod görürsen de yol aynı. Kılavuz bunu büyük harflerle ekliyor: **hata giderilmeden şofbeni yeniden çalıştırma.** Teknik tabloda geçen ateşleme ve alev algılama elektrotlarının kontrolü yetkili servisin işi.

**7. Ekransız modelde ışığa bak.** FAST EVO X'te ekran yok; kontrol paneli bir açma kapama ve sıcaklık düğmesiyle arızaları ve pil değişimini gösteren bir ışıktan oluşuyor. Kilitlenmede **kırmızı ışık** yanıyor ve sıfırlama yine kapatıp açmayla yapılıyor. Işık **sabit yanıyorsa piller bitmiş**, pilleri değiştir. Işık **yanıp sönüyorsa** düğmeyi kapalıya al, gaz vanasını kapat, pilleri çıkar ve teknisyen çağır.

## Kışın donma riski

Şofben borularının donabileceği bir yerdeyse kılavuz şofbeni boşaltmanı öneriyor. Sırası şöyle: dış şalteri kapalıya al, gaz vanasını kapat, soğuk su giriş vanasını kapat, sonra sıcak su musluklarını şofben ve borular tamamen boşalana kadar açık tut. Yeniden doldurmak için soğuk su giriş vanasını aç ve sıcak su musluklarını su gelene kadar açık tut. FAST EVO X'te bu sıraya pilleri çıkarmak da ekleniyor.

## Ne zaman servis

- ON/OFF ile sıfırlamadan sonra A1 geri geliyorsa
- Gaz ve su vanası açık, elektrik var ama brülör yanmıyorsa
- Ekranda tabloda olmayan bir kod varsa
- Ekransız modelde kırmızı ışık yanıp sönüyorsa
- Ortamda gaz, yanık kokusu ya da duman varsa

⛔ **Kendin-çöz sınırı burada biter.** Su ve gaz vanasının kolu, ON/OFF tuşu, dış şalter ve ekransız modelde pil değişimi sende. Kılavuz cihazı açmanı gerektiren her işi yasaklıyor; elektrotlar, gaz valfi, kart ve baca bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Şofbenin modeli ne, ekranlı mı?
2. Ekranda A1 mi, başka bir kod mu var?
3. Su ve gaz vanası açık mı, elektrik geliyor mu?
4. ON/OFF ile sıfırladın mı, kod döndü mü?
5. Ortamda koku var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
