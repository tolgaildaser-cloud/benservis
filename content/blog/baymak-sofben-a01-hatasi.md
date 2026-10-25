---
title: "Baymak şofben A01 hatası: ateşleme yok, RESET adımı"
description: "Baymak hermetik şofbende A01 ateşleme hatası demek. Gaz vanası, elektrik, RESET konumunda 3 saniye bekleme ve kod geri gelirse yetkili servis; kılavuzdan."
slug: "baymak-sofben-a01-hatasi"
date: "2026-10-25"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, ajan A). origin/main 829cec5'te "baymak-sofben" slug'ı ve "Baymak şofben" başlığı yok.
#   Baymak'ta yalnız kombi sayfaları var (baymak-kombi-ariza-kodlari, -e01-hatasi vb.; başka cihaz). Şofben sayfaları: ariston-sofben-a1-hatasi, demirdokum-sofben-f4-arizasi, eca-sofben-ariza-kodlari.
#   Dalga 6/7/8 klasörlerinde Baymak şofben yok. Baymak şofben hub'ı yok; kılavuzun kısa kod listesi bu sayfada tablo olarak var, ileride ayrı "baymak şofben arıza kodları" sayfası açılırsa bu sayfayla çakışır.
# Arama kanıtı (25 Eki 08:48 ve 08:50 +03, suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot.tsv):
#   "baymak şofben a" → 1. a01 hatası, 2. a01 arızası nasıl giderilir, 3. ateşleme yapmıyor; "baymak şofben" → 3. a01 hatası, 4. nasıl resetlenir, 5. a01 arızası nasıl giderilir. GSC: satır yok.
# Belge (bu koşuda curl -sL; zincir https://www.baymak.com.tr/urunler/su-isiticilari/sofbenler/baymak-sofben 200 text/html → PDF 200 application/pdf):
#  (BH) Baymak Hermetik Şofben BH12 Montaj ve Kullanma Kılavuzu 300035744 Rev.: 00 (10.07.2020), 20 s.
#       https://www.baymak.com.tr/media/5075/baymak-hermetik-sofben-kullanma-kilavuzu.pdf  md5 ae16b6c1593654acf22ba2b793e53dc2
#       Metin katmanı tarama kalitesinde; s.7 kod tablosu sayfa görüntüsünden (pdftoppm) gözle doğrulandı.
#  BH 14 kılavuzu (/media/5820/…, md5 ad4f6a25ecbc5ec4bc872c40da30ccc9) da indirildi; görüntü tabanlı, bu yazıda kullanılmadı.
# Sayfalar: gaz/baca gazı kokusu, yıllık bakım BH s.4 · çalıştırma sırası ve ilk ateşleme uyarısı BH s.6 · sorun giderme ve kod tablosu BH s.7
#   · 195–253 V aralığı BH s.5 · alev iyonizasyon detektörü, emniyet termostatı BH s.12 · periyodik bakım BH s.13.
# BİLEREK YAZILMAYANLAR: ateşleme elektrodu, iyonizasyon çubuğu, gaz valfi, kart teşhisi · gaz basıncı ölçümü · BH 14'e özgü bilgi · fiyat (#46).
# Alıntı denetim tablosu: baymak-sofben-a01-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa şofbene dokunma; gaz kaynağını kapat, kapı ve pencereleri aç, elektrik düğmelerini kullanma ve binadaki diğer insanları uyar."
  - "Ekranda A01 kodunu ve sol alt köşede RESET yazısını kontrol et; RESET yazısı resetle düzelebilecek bir arıza olduğunu gösterir."
  - "Şofbenin elektriğinin geldiğini ve gaz vanasının açık olduğunu kontrol et."
  - "Açma-kapama düğmesini RESET konumuna çevir ve RESET yazısı sönene kadar, yaklaşık üç saniye bekle."
  - "Düğmeyi yeniden ON konumuna getir ve sıcaklık ayarını kontrol et."
  - "Sıcak su musluğunu aç; ekranda alev sembolü görünüyorsa şofben devreye girmiştir."
  - "A01 geri gelirse resetlemeyi tekrarlama; kodu ve model bilgisini yetkili servise bildir."
faq:
  - q: "Baymak şofben A01 hatası ne demek?"
    a: "Baymak hermetik şofben kılavuzunun sorun giderme tablosunda A01 ateşleme hatası olarak geçiyor. Kılavuzun tedbiri açma-kapama düğmesini RESET konumuna getirip 3 saniye beklemek; arıza devam ederse yetkili servisi aramak."
  - q: "Baymak şofben nasıl resetlenir?"
    a: "Kılavuza göre resetle düzelebilecek arızalarda ekranın sol alt köşesinde RESET yazısı görünür. Açma-kapama düğmesini RESET konumuna getir, RESET yazısı sönene kadar bekle, sonra düğmeyi tekrar ON konumuna getir. Arıza devam ederse yetkili servise haber verilmesi isteniyor."
  - q: "Şofben ilk çalıştırmada A01 veriyor, neden?"
    a: "Kılavuzun uyarısına göre ilk ateşleme sırasında gaz borularındaki havanın tümü atılıncaya kadar brülör yanmayabilir ve cihaz üç ateşleme denemesinden sonra bloke olur. Bu durumda düğmeyi RESET konumuna çevirip 3 saniye beklemek ve tekrar ON konumuna getirmek yazıyor. Kılavuz ilk çalıştırmanın yetkili servis tarafından yapılmasını istiyor."
  - q: "A02 ya da A03 de çıkıyor, aynı şey mi?"
    a: "Değil. A02 APS kaybı hatası: ateşleme sırasında ya da yanmanın ilk 60 saniyesinde üç kez APS kaybı olursa verilir, düşük voltajda da çıkabilir ve çalışmak için RESET gerekir. A03 emniyet termostatı arızası; kılavuzun tedbiri yine RESET konumunda 3 saniye beklemek, arıza sürerse yetkili servis."
  - q: "E ile başlayan kodlarda reset işe yarar mı?"
    a: "Kılavuzun tablosunda E03, E06, E26, E35, E36 ve E40 için tek tedbir yetkili servisi aramak. E16'da sensör sorunu kaybolunca şofben normal çalışmaya kendiliğinden döner. Bu kodlarda reset tedbir olarak verilmiyor."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir şofben ve altında lavabo"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Şofbenin küçük ekranında yanan kısa bir uyarı yazısının yakın planı"
    - "Şofbenin altında borular arasında duran sarı kollu bir gaz vanası"
    - "Şofbenin önündeki döner açma kapama düğmesinin yakın planı"
    - "Şofbenin önündeki ikinci döner ayar düğmesi"
    - "Lavabo üzerinde buharı yükselen açık bir musluk"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve kapalı bir alet çantası"
---

Musluğu açıyorsun, şofben bir an çalışıyor gibi oluyor, sonra ekranda A01 beliriyor ve su soğuk akıyor. Baymak'ın hermetik şofben (BH12) montaj ve kullanma kılavuzunda bu kodun karşılığı tek kelime: ateşleme hatası. Kılavuzu bu koşuda baymak.com.tr'deki ürün sayfasından indirdik. Bu yazıda kodun ne söylediğini, kılavuzun verdiği RESET adımını, aynı tablodaki öteki kodlarla farkını ve ne zaman servise bırakman gerektiğini bu kılavuzdan topladık. Senin şofbenin başka bir modelse kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** A01 ateşleme hatası. Önce gaz kokusu, sonra elektrik ve gaz vanası. Düğmeyi RESET konumuna çevir, RESET yazısı sönene kadar yaklaşık 3 saniye bekle, ON'a al. Musluğu aç, alev sembolüne bak. A01 geri geliyorsa yetkili servis.

## Kılavuzun kod tablosu

| Kod | Kılavuza göre anlamı | Kılavuzun tedbiri |
|---|---|---|
| **A01** | Ateşleme hatası | 🛠️ RESET konumunda 3 saniye bekle; sürerse servis |
| **A02** | APS kaybı hatası (birbirini izleyen) | 🛠️ RESET gerekli; düşük voltajda da çıkabilir |
| **A03** | Emniyet termostatı arızası | 🛠️ RESET konumunda 3 saniye bekle; sürerse servis |
| **E03** | Hava basınç anahtarı arızası | 📞 Yetkili servis |
| **E06** | Çıkış suyu sıcaklığı sensörü arızası | 📞 Yetkili servis |
| **E16** | Eşanjör giriş suyu NTC arızası | ⏳ Sorun kalkınca kendiliğinden normal çalışma |
| **E26** | Kullanım suyu aşırı ısınma arızası | 📞 Yetkili servis |
| **E35 / E36** | Alev oluşum / alev iyonizasyon detektörü arızası | 📞 Yetkili servis |
| **E40** | Gaz valfi modülasyon arızası | 📞 Yetkili servis |

## Adım adım: A01'de ne yapmalı

**1. Gaz kokusu varsa reset yapma.** Kılavuzun güvenlik sayfasındaki sıra: gaz kaynağını kapat, kapı ve pencereleri aç, çıplak alev kullanma, sigara içme, kapı zili ve asansör dahil elektrik düğmelerini ve elektrikli cihazları kullanma, binadaki diğer insanları uyar. Sızıntı gaz sayacı üzerindeyse gaz dağıtım şirketini bilgilendir. Baca gazı kokusu alırsan cihazı kapat, kapı ve pencereleri aç.

**2. Ekrana bak.** Kılavuza göre arıza olduğunda LCD ekranda hata kodu görünür. Resetleyerek düzelebilecek arızalarda ekranın **sol alt köşesinde "RESET" yazısı** çıkar. A01 ile birlikte bu yazıyı görüyorsan sıradaki adımlar sana uyar. Kodu not al.

**3. Elektrik ve gaz geliyor mu?** Kılavuzun çalıştırma sırası üç adımla başlıyor: enerji beslemesini sağla, gaz vanasını aç, açma-kapama düğmesini ON konumuna getir. Ekran kapalıysa enerji beslemesine, gaz vanasının kolu kapalıysa vanaya bak; ikisi de bu sıranın ilk adımları. Kılavuz cihazın 195–253 V arasında çalışacak şekilde tasarlandığını, şebeke bu aralığı sağlamıyorsa voltaj regülatörü kullanılmasını tavsiye ettiğini yazıyor.

**4. RESET konumunda bekle.** Açma-kapama düğmesini çevirerek **RESET** konumuna getir. A01 satırındaki tedbir 3 saniye beklemek; sorun giderme bölümü ise RESET yazısı sönene kadar beklemeni söylüyor. İkisi birlikte okunduğunda: yazı sönene kadar, yaklaşık 3 saniye (çıkarım).

**5. Düğmeyi ON'a al.** Yazı söndükten sonra düğmeyi tekrar **ON** konumuna getir. Ekranda şofbenin mevcut çıkış suyu sıcaklığı görünür. Sıcaklık ayar düğmesiyle MIN ve MAX arasında istediğin sıcaklığı seçebilirsin; düğmeyi çevirdikçe ayarlanan sıcaklık ekranda görünür.

**6. Musluğu aç, alevi gör.** Kılavuza göre kullanım suyu musluğu açıldığında şofben otomatik olarak devreye girer. Ekranda brülörün devrede olduğunu gösteren **alev sembolü** görünür ve musluk sembolü yanıp söner. Alev sembolü geldiyse ateşleme gerçekleşmiştir.

**7. A01 geri gelirse servis.** Kılavuzun cümlesi net: arıza devam ederse yetkili servisi ara. Güvenlik sistemleri bölümü, alev iyonizasyon detektörünün gaz hatası ya da brülörün tam yanmaması durumunda cihazı üç ateşleme girişiminden sonra bloke ettiğini anlatıyor. Bunun sebebi şofbenin içinde; elektrot, gaz valfi ve brülör yetkili servisin işi.

## İlk çalıştırmada A01

Kılavuz özel bir durumu ayrıca yazıyor: ilk ateşleme sırasında gaz borularındaki havanın tümü atılıncaya kadar brülör yanmayabilir, cihaz üç ateşleme denemesinden sonra bloke olur. Bu durumda yine düğmeyi RESET konumuna çevirip 3 saniye beklemek ve ON konumuna getirmek yeterli. Kılavuz ayrıca cihazın ilk çalıştırmasının mutlaka yetkili servis tarafından yapılmasını istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Açma-kapama düğmesi, sıcaklık ayarı, gaz vanasının kolu ve sigorta sende. Kılavuz cihazın mühürlü parçalarına müdahaleyi yasaklıyor; brülör, ateşleme ve iyonizasyon çubuğu, gaz valfi, fan ve baca bağlantısı yetkili servisin. Yıllık bakımı da yetkili servise yaptırman isteniyor.

## Servisi aramadan önce kısa özet

1. Şofbenin modeli ne (BH12, BH 14)?
2. Ekranda A01 mi, başka bir kod mu var?
3. Gaz vanası açık, elektrik geliyor mu?
4. RESET adımını uyguladın mı, kod geri geldi mi?
5. Ortamda gaz ya da baca gazı kokusu var mı?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Başka markalarda aynı belirti için [Ariston şofben A1 hatası](/blog/ariston-sofben-a1-hatasi/) ve [Vaillant şofben arıza kodları](/blog/vaillant-sofben-ariza-kodlari/) yazılarına bak. Bil, gör, çağır.
