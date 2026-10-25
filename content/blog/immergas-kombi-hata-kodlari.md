---
title: "Immergas kombi hata kodları: 01, 10, 27 ve diğerleri"
description: "Immergas kombi hata kodları Immergas'ın listesinden: 01 gaz yok, 10 basınç yetersiz, 27 sirkülasyon, 08 reset sınırı. Evde neye bakılır, ne zaman servis."
slug: "immergas-kombi-hata-kodlari"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork B). Konu seçimi: origin/main'de Immergas sayfası yok (slug + başlık + gövde grep'i: 0 sonuç); Dalga 3 klasörlerinde Immergas yok.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr; tohum yankısı sayılmadı): "immergas kombi hata" → 1. "immergas kombi hata kodları", 2. "…hata kodu 10", 3. "…hata kodu 11".
#   "immergas kombi hata kodu" → 1. "…hata kodu 10", 2. "…hata kodu 11", 3. "…e11 hata kodu", 4. "…28 hata kodu", 5. "…27 hata kodu". 10/11/27/28 bu hub'da satır; ayrı sayfa açılmadı.
# GSC (https___www-6 7 gün, https___www-5 3 ay): Immergas sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi:
#  (TR) Immergas Türkiye "Ürün Arıza Kodlarının Tanımları" https://www.immergas.com.tr/urun-ariza-kodlari/  HTTP 200 text/html  md5 c7814f5fc62e80e219d2e318286c01e2
#  (HU) Immergas Victrix Tera 28 1 - 32 1 kezelési útmutató 1.040295 (Macarca, Immergas Macaristan alan adı), 56 s.
#       https://rendeles.immergas.hu/sites/rendeles.immergas.hu/files/Victrix-Tera-28-1_32-1-1040295_001_HU.pdf  HTTP 200 application/pdf  md5 0199fe879b56f18e6bf175715252c954
# Kod adları ve "ne yap" cümleleri TR sayfasından birebir. HU alıntıları PAZ çevirisi (KAYNAK.md'de Macarca asılları): reset tuşu panelde 3 numara s.24,
#   1–1,2 bar s.25 ve s.28, 08 = 5 deneme / 1 saat s.26, 31 = elektrik kes-aç s.27. 08 için TR sayfası "3'ten fazla" diyor, HU kılavuzu 5 diyor: iki belge çelişiyor, yazıda ikisi de verildi.
# BİLEREK YAZILMAYANLAR: kodların belgede olmayan nedenleri · kazan (E1…E207, 0A/0E) kodları (kombi değil; TR sayfası ARES / Victrix 35-50 / Pro kazanlara bağlıyor) · servis menüsü · su doldurma adımı (kılavuz anlatıyor ama #31 gereği yetkili servise bırakıldı) · fiyat (#46) · pazar bağlantısı.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ekrandaki kodu olduğu gibi not et; uzaktan kumanda varsa orada da aynı numara görünür."
  - "Kod 01 ise kombiye giden gaz vanasının açık olduğunu kontrol et."
  - "Kod 10 ise kombi soğukken manometreyi oku ve petek vanalarının açık olduğunu kontrol et."
  - "Kod 02, 27 ya da 45 ise tesisattaki ve peteklerdeki vanaların açık olduğunu kontrol et."
  - "Reset tuşuna bir kez bas ve kombinin yeniden çalışıp çalışmadığını izle."
  - "Ekranda 08 görürsen reset denemeyi bırak."
  - "Kod geri gelirse Immergas yetkili servisini ara ve kodu söyle."
faq:
  - q: "Immergas kombi hata kodu 10 ne demek?"
    a: "Immergas'ın listesinde 10 tesisat basıncı yetersiz uyarısı. Kombi düzgün çalışmak için tesisatta yeterli basınç bulamıyor. Immergas petek vanalarını kontrol edip reset yapmayı, tekrarlarsa çağrı merkezini aramayı söylüyor. Victrix Tera kılavuzu manometrede 1 ile 1,2 bar arası bekliyor."
  - q: "Immergas kombi hata kodu 11 var mı?"
    a: "Immergas Türkiye'nin kod listesinde kombiler için 11 diye bir satır yok. Listede E11 var: brülör ateşleme çevriminden önce alev tespit edildi. Ama bu satır kombiler için değil, ARES kazan için verilmiş. Ekranında 11 görüyorsan modelini ve kodu not edip yetkili servise sor."
  - q: "08 kodu neden çıkıyor?"
    a: "08 maksimum reset sayısı. Immergas Türkiye'nin sayfası nedeni 3'ten fazla resetleme olarak veriyor. Victrix Tera kılavuzu ise art arda en fazla 5 deneme hakkı tanıyıp sonra fonksiyonu bir saat kapatıyor. İki belge sayıda ayrışıyor; ortak mesaj aynı: reset sorunu çözmüyorsa servis."
  - q: "27 kodu çıktı, ne yapmalıyım?"
    a: "27 yetersiz su sirkülasyonu. Ana devrede su yeterince dolaşmadığı için kombi aşırı ısınmış. Victrix Tera kılavuzu tesisatın bir yerde kapanıp kapanmadığına ve havasının alınıp alınmadığına bakmayı söylüyor; pompa sıkışmışsa uzman çağrılıyor."
  - q: "Immergas çağrı merkezi numarası ne?"
    a: "Immergas Türkiye'nin arıza kodu sayfasında her kod için verilen numara 444 88 22."
images:
  coverAlt: "Beyaz duvara asılı bir kombi ve küçük ekranında yanan iki haneli bir uyarı"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Immergas kombinin ekranında iki haneli bir sayı yanıyor ve kombi çalışmıyor. Immergas Türkiye'nin sitesinde "Ürün Arıza Kodlarının Tanımları" diye bir sayfa var. Her kodun adını, nedenini ve senden ne yapmanı istediğini orada tek tek yazıyor. Bu yazıda o sayfadaki kombi kodlarını topladık. Reset tuşu, basınç değeri ve reset sınırı içinse Immergas'ın Victrix Tera 28 1 - 32 1 kılavuzuna baktık. Bu kılavuzun Türkçesine ulaşamadık, alıntıları Macarca sürümden biz çevirdik. Senin modelin farklıysa kod adını kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kodu not et. 01'de gaz vanasına, 10'da basınca ve petek vanalarına, 02, 27 ve 45'te tesisat vanalarına bak. Reset tuşuna bir kez bas. 08 görürsen dur. Kod geri geliyorsa Immergas yetkili servisi.

## Kod tablosu

Kod adları Immergas Türkiye'nin sayfasından. "Ne yap" sütununda sayfanın kodla birlikte verdiği kontrol yazıyor. Sayfa bütün kodlarda aynı sonla bitiyor: resetleme yap, tekrarlarsa 444 88 22'yi ara.

| Kod | Immergas'ın verdiği ad | Ne yap |
|---|---|---|
| **01** | Gaz yok | Vanaları kontrol et, reset |
| **02** | Aşırı ısı termostatı arızası (emniyet) | Tesisat ve petek vanalarını kontrol et, reset |
| **03** | Baca (atık gaz) termostat arızası | Baca servis işi; reset |
| **04** | Elektromekanik kontaklar (devre kartı) | Reset; tekrarlarsa servis |
| **05** | Gidiş sensörü arızası | Reset; tekrarlarsa servis |
| **06** | Sıcak kullanım suyu sensör arızası | Reset; tekrarlarsa servis |
| **08** | Maksimum reset sayısı | Reset denemeyi bırak, servis |
| **10** | Tesisat basıncı yetersiz | Petek vanalarını kontrol et, reset |
| **23** | Geri dönüş sondasında arıza | Reset; tekrarlarsa servis |
| **24** | Tuş takımı anormalliği | Reset; tekrarlarsa servis |
| **27** | Yetersiz su sirkülasyonu | Reset; tekrarlarsa servis |
| **28** | Sızıntı durumu | Reset; tekrarlarsa servis |
| **31** | Uzaktan kumanda ile iletişim kaybı | Reset; tekrarlarsa servis |
| **37** | Düşük güç kaynağı gerilimi | Elektrik voltajını kontrol et, reset |
| **38** | Alev sinyali kaybı | Reset; tekrarlarsa servis |
| **43** | Alev sinyal kaybı nedeniyle kilit | Reset; tekrarlarsa servis |
| **45** | Yüksek ΔT | Petek vanalarını kontrol et, reset |
| **47** | Düşük brülör gücü | Reset; tekrarlarsa servis |

Bazı kodlar her modelde çıkmaz. Immergas her satırın altına geçerli olduğu modelleri yazıyor. Örneğin 28 yalnız Eolo Star 24 3 E ve 24 5 E için verilmiş. Listede E ile başlayan ve 0A, 0E gibi üç haneli kodlar da var, ama sayfa onları kombilere değil kazanlara bağlıyor. Bu yüzden tabloya almadık.

## Adım adım: Immergas kombide hata kodu çıkınca

**1. Kodu not et.** Victrix Tera kılavuzuna göre kombi arızayı ekranda bir kodla gösteriyor. Uzaktan kumanda bağlıysa aynı numara kumandada da çıkar. Kılavuzdaki örnek AmicoV2 için "Exx". Kodu olduğu gibi yaz, servis seninle bu kod üzerinden konuşacak.

**2. 01'de gaz vanasına bak.** Immergas 01'i "Gaz Yok" uyarısı olarak veriyor ve gaz eksikliğinden kaynaklanabileceğini yazıyor. Sayfanın talimatı: vanalarınızı kontrol edip resetleme yapınız. Kombiye giden gaz vanası açık mı, ona bak. Vana açıksa sorun gaz hattında ya da kombinin içindedir. Gaz tesisatı ve kombinin içi yetkili servisin işi.

**3. 10'da basıncı oku.** 10 tesisat basıncı yetersiz demek. Immergas petek vanalarını kontrol etmeni istiyor. Victrix Tera kılavuzu, kombi soğukken manometrenin **1 ile 1,2 bar** arasını göstermesini bekliyor. Kılavuz, basınç 1 barın altındaysa kombinin altındaki musluktan su eklenmesini ve işin sonunda musluğun kapatılmasını anlatıyor. Biz bu adımı yetkili servise bırakmanı öneriyoruz. Kılavuz basınç sık sık düşüyorsa servisi çağırmanı da istiyor, çünkü tesisatta kaçak olabilir. Ayrıntılar [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

**4. 02, 27 ve 45'te vanalara bak.** Immergas 02'nin nedenini "tesisat ve petek vanaları" diye veriyor. 45 için de petek vanalarını kontrol etmeni istiyor. 27 yetersiz su sirkülasyonu. Victrix Tera kılavuzu bu kodda tesisatın bir yerde kapanıp kapanmadığına bakmanı söylüyor. Pompa sıkışmışsa yeniden çalıştırmak için bir uzman çağrılması gerekiyor. Bütün petek vanaları açık mı, tek tek kontrol et.

**5. Reset tuşuna bir kez bas.** Victrix Tera'nın panelinde reset tuşu **3** numaralı tuş. Ekranda kombinin durduğunu ve reset tuşuyla yeniden başlatılabileceğini gösteren ayrı bir işaret de var. Bazı kodlar reset istemiyor. Kılavuza göre 24, 37 ve 38'de çalışma koşulları düzelince kombi reset tuşuna basılmadan kendiliğinden yeniden başlıyor. 31'de kılavuz kombinin elektriğini kesip yeniden vermeni söylüyor.

**6. 08 görürsen dur.** 08 maksimum reset sayısı demek. Immergas Türkiye'nin sayfası nedeni "3'ten fazla resetleme yapılması" olarak veriyor. Victrix Tera kılavuzu ise art arda en fazla 5 deneme hakkı tanıyor. Sonra reset fonksiyonu bir saat kapanıyor. İki belge sayıda ayrışıyor. Ama mesaj aynı: reset işe yaramıyorsa sebep başka yerde.

**7. Kod geri geliyorsa servisi ara.** Immergas'ın her kod için yazdığı son cümle aynı: tekrarlaması durumunda 444 88 22'yi arayınız. Victrix Tera kılavuzunun tablo notu da arıza sürerse Immergas yetkili servisine başvurmanı istiyor.

## Ne zaman servis

- Aynı kod bir resetten sonra geri geliyorsa
- Ekranda 08 çıktıysa
- 01'de gaz vanası açık olduğu halde kod sürüyorsa
- 03 (baca), 04 (kart) ya da 05, 06, 23 (sensör) çıkıyorsa
- Basınç sık sık düşüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ekran, reset tuşu, manometre, gaz vanasının açık-kapalı konumu ve petek vanaları sende. Su doldurma, gaz hattı, baca, yanma odası, elektronik kart, sensörler ve pompa yetkili servisin işi.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Victrix Tera, Eolo Star, Victrix Exa...)?
2. Ekrandaki kod tam olarak ne?
3. Reset'e kaç kez bastın, kod geri geldi mi?
4. Basınç soğukken kaç bar?
5. Gaz vanası ve petek vanaları açık mı?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Başka markaların kodları [kombi arıza kodları](/blog/kombi-ariza-kodlari/) sayfasında. Bil, gör, çağır.
