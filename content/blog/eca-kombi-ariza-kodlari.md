---
title: "ECA kombi arıza kodları"
description: "ECA Proteus, Confeo ve Citius Premix kombilerde E ve F kodlarının anlamı, reset ve basınç ekleme adımları; üç ailenin kendi kılavuzlarından."
slug: "eca-kombi-ariza-kodlari"
date: "2026-09-15"
category: "Kombi"
faq:
  - q: "ECA kombide E ile başlayan kodla F ile başlayan kod arasındaki fark ne?"
    a: "ECA kılavuzlarına göre E ile başlayan kodlar kalıcı arızadır: önce hatanın düzelmesi gerekir, sonra Reset tuşuna 1 kez basılınca cihaz normal çalışmaya döner. F ile başlayan kodlar geçici arızadır: Reset tuşuyla ekrandan silinmez, hata durumu düzelince kod kendiliğinden kaybolur."
  - q: "ECA kombide F37 kodu ne demek, ne yapmalıyım?"
    a: "F37 düşük su basıncı hatasıdır; su basınç sensörü 0,4 bar algıladığında çıkar. Kılavuzun çözümü: kalorifer devresi su basıncını kontrol et, basınç 1,5-2 bar'a ulaşana kadar sisteme su doldur (basınç 0,8 bar'ın üzerine çıkınca cihaz arızadan çıkar), vanaları ve tesisatı kaçaklara karşı kontrol et. Sorun sürüyor ya da tekrarlıyorsa yetkili servise haber ver."
  - q: "E01 ateşleme hatasında ne yapmalıyım?"
    a: "Kılavuz sırayla şunları söylüyor: gaz vanasının açık olduğunu kontrol et, hatta gaz olup olmadığını kontrol et, Reset tuşuna bas. Reset sonrası hata sürüyor ya da tekrarlıyorsa E.C.A. yetkili servisine haber ver."
  - q: "Aynı kod farklı ECA modellerinde farklı anlama gelebilir mi?"
    a: "Evet. Örneğin E83, Proteus Premix kılavuzunda ateşleme devresi hatası; Confeo Premix kılavuzunda ise son bir ay içinde iki kez F07 hatası görülmesiyle çıkan egzoz gazı yüksek sıcaklık uyarısıdır. Citius Premix kılavuzunun tablosunda E83 yoktur. Kodu yorumlamadan önce kombinin modelini öğren."
  - q: "Reset tuşuna kaç kez basabilirim?"
    a: "Kılavuzlar E kodlarında Reset'e basmayı, hata sürüyor ya da tekrarlıyorsa yetkili servise haber vermeyi söylüyor. 1 saat içinde 5'ten fazla Reset'e basılırsa kombi F13 fazla resetleme hatası verir; bu kodun çözümü doğrudan yetkili servistir. Ekranda AP yazarken de Reset'e basılmaz."
  - q: "Ekranda AP ya da ASE yazıyor, bu bir arıza mı?"
    a: "İkisi de arıza kodu değil. AP, kombinin 160 saniye boyunca tesisattaki havayı boşalttığı hava tahliye modudur; kılavuz bu sırada Reset'e kesinlikle basılmamasını istiyor. ASE, yıllık bakım zamanının geldiğini hatırlatan moddur; cihaz ısıtmayı aksatmadan çalışır, kılavuz bakım için E.C.A. yetkili servisiyle iletişime geçilmesini istiyor."
  - q: "Kombiden gaz kokusu gelirse ne yapmalıyım?"
    a: "ECA kılavuzlarının emniyet bölümüne göre: cihazın ve gazla çalışan diğer tüm cihazların gaz vanalarını kapat, ocak ve fırın gibi cihazların alevlerini söndür, kibrit ve çakmak yakma, kapı ve pencereleri açıp havalandır, elektrikli cihazların düğme ve fişlerine dokunma, gaz kokusu olan ortamda telefon kullanma, daire ve bina girişindeki gaz vanalarını kapat ve zaman kaybetmeden 187'yi arayıp gaz şirketine haber ver, durumu yetkili servise bildir."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombinin ekranında yanıp sönen bir uyarı simgesi; kombinin altındaki vanaya uzanan bir el ve tezgâhta açık duran kalın bir kullanma kılavuzu"
# --- Provenans (yayında görünmez) ---
# Kaynak belgeler, 2026-09-15 curl -sL -A "Mozilla/5.0" ile indirildi; pdftotext -layout ile okundu.
# Hata kodu tabloları ayrıca 100-300 dpi render edilip gözle ve tesseract (tur) OCR ile karşılaştırıldı
# (Proteus s.30 tablosunda metin katmanı eksik: E83 adı, F39 adı ve F40 çözümü yalnız render/OCR'da okunuyor).
# PDF bağlantıları eca.com.tr ürün sayfalarındaki "DÖKÜMANLAR > Kullanım Klavuzu" düğmesinden alındı:
#   eca.com.tr/urun/proteus-premix · eca.com.tr/urun/confeo-premix · eca.com.tr/urun/citius-premix
# 1) E.C.A. PROTEUS PREMIX PPR 14-20-24-28-30-35-42-45 HM/HCH/HST Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf
#    HTTP 200, 50014023 B, PDF 1.7, 48 sayfa, md5 28a5d7565ffbc9c1faaf1e97e45553d9
#    Hata kodları: PDF s.29-30 (Tablo 4); emniyet: s.5; su doldurma: s.25; Reset/E-F ayrımı: s.26
# 2) E.C.A. CONFEO PREMIX P 14/20/24/28/30/35 HM/HCH/HST Kullanma ve Montaj Kılavuzu (7006991302-5.0)
#    https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf
#    HTTP 200, 19804518 B, PDF 1.7, 44 sayfa, md5 4ef56163ac14c46f9cb1dcb9ea189681
#    Hata kodları: PDF s.27-29 (Tablo 4); emniyet: s.5; su doldurma: s.22; Reset/E-F ayrımı: s.23
# 3) E.C.A. CITIUS PREMIX 14/20/24/28 HM/HCH/HST Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf
#    HTTP 200, 20513422 B, PDF 1.7, 40 sayfa, md5 023164f7b7cebedc931411900edd72b0
#    Hata kodları: PDF s.25-26 (Tablo 4); emniyet: s.4; su doldurma: s.21; Reset/E-F ayrımı: s.22
# Belgenin söylemediği ya da kapsam dışı olduğu için BİLEREK yazılmayanlar:
#  - "En sık görülen kod" iddiası (kılavuzlarda sıklık bilgisi yok).
#  - "Muhtemel neden" sütunundaki parça yorumları (elektronik kart, fan kablosu, gaz valfi vb.) okura sebep/parça olarak verilmedi.
#  - E02 sebebi: Proteus/Citius "gaz valfi kapalı iken", Confeo "gaz valfi açıkken" diyor; çelişkili olduğu için sebep cümlesi yazılmadı.
#  - Reset tuşuna kaç saniye basılacağı (kılavuz yalnız "1 kez" diyor).
#  - Doldurma vanasının kombi üzerindeki yeri/rengi (yalnız "kılavuzdaki çizimde" denildi).
#  - F40'ta basıncı düşürme / su boşaltma (kılavuz tarif etmiyor).
#  - F64 ve Citius F39'daki kablo kontrolü, Citius E06'daki baca kontrolü: kullanıcıya tarif edilmedi, servis olarak verildi.
#  - Radyatör purjöründen hava alma (kılavuz ilk çalıştırmada anlatıyor; bu yazının kapsamı dışında bırakıldı).
#  - F39, F47, F50, F51 (sensör/boyler/solar) tablolara alınmadı; aileler arası çözüm adımı farklı, satır kalabalığı yaratıyor.
#  - Onarım süresi, parça adı, tamir yöntemi; ECA'nın bu üç aile dışındaki (eski/atmosferik) modellerinin kodları.
---

ECA kombinin ekranında bir harf ve iki rakam yanıp sönüyor: E01, F37, belki E83. Kodun ne dediğini bilmek, servisi aramadan önce yapabileceğin birkaç basit kontrolü de gösterir.

Bu yazıdaki kodlar ECA'nın üç yoğuşmalı kombi ailesinin kendi kullanma kılavuzlarındaki hata kodu tablolarından alındı: **Proteus Premix**, **Confeo Premix** ve **Citius Premix**. Kodların çoğu üçünde aynı anlama geliyor; birkaçı modele göre değişiyor. Bu yüzden tablolar aileye göre ayrıldı.

> ⚠️ **Bu yazı kullanım ve kontrol rehberidir, tamir değil.** Gaz, baca, fan, kart ve kombinin iç kısmı yetkili servis işidir. Kod tabloları modele ve kılavuz sürümüne göre değişebilir; **kendi kombinin kılavuzu esastır.**

## Gaz kokusu alıyorsan önce bunu yap

Üç kılavuzun emniyet bölümü de aynı adımları sayıyor. Gaz kokusu hissedersen:
- Kombinin gaz vanasını ve gazla çalışan diğer tüm cihazların vanalarını kapat.
- Ocak, fırın gibi cihazları kapatıp alevlerini söndür; kibrit, çakmak yakma, sigaranı söndür.
- Kapı ve pencereleri açıp ortamı havalandır.
- Elektrikli cihazların düğmelerine ve fişlerine dokunma; gaz kokusu olan ortamda telefon kullanma.
- Daire ve bina girişindeki gaz vanalarını kapat.
- Zaman kaybetmeden **187**'yi arayıp gaz şirketine haber ver, durumu yetkili servise bildir.

Bu durumda kod okumakla uğraşma; önce güvenlik.

## Önce iki şeyi öğren: model ve kodun harfi

**Model.** Kılavuzun kapağında kombinin model adı yazar. Confeo Premix ve Citius Premix kılavuzlarındaki kumanda paneli çiziminde model adı panelin üzerinde de görünüyor.

**Harf.** Üç kılavuz da iki tip arıza tanımlıyor:
- **E ile başlayan kodlar kalıcı arızadır.** Önce hatanın düzelmesi gerekir; sonra **Reset** tuşuna 1 kez basılınca cihaz normal çalışmaya döner.
- **F ile başlayan kodlar geçici arızadır.** Reset tuşuyla ekrandan silinmez; hata durumu düzelince kod kendiliğinden kaybolur.

Proteus Premix ve Citius Premix'te arıza kodu ekranda yanıp söner. Confeo Premix'te kodla birlikte tanımı da ekranda görünür ve cihaz periyodik olarak sesli uyarı verir.

> 🛠️ = kılavuzun sana bıraktığı kontrol · 🔧 = yetkili servis

## Üç ailede aynı anlama gelen kodlar

| Kod | Kılavuzdaki anlam | Ne yapmalı |
|---|---|---|
| E01 | Ateşleme hatası | 🛠️ Gaz vanasının açık olduğunu ve hatta gaz olup olmadığını kontrol et, Reset'e bas. Sürüyor ya da tekrarlıyorsa 🔧 |
| E02 | Yanlış alev sinyali | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| E03 | Aşırı sıcaklık uyarısı: gidiş veya dönüş sıcaklığı 90°C'yi aşmış | 🛠️ Kombinin tesisat su vanalarının açık olduğunu, kış modundaysa en az bir radyatörün vanasının açık olduğunu kontrol et, Reset'e bas; sürüyorsa 🔧 |
| E15 · E16 · E17 · E18 · E33 · E35 | Sıcaklık sensörü hataları | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| E80 | Swap test hatası | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| E82 | Alev kaybı hatası (art arda 12'den fazla alev kaybı) | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| F07 | Baca gazı sıcaklığı 95°C'yi aşmış | 🔧 |
| F13 | Fazla resetleme: 1 saat içinde 5'ten fazla Reset | 🔧 |
| F34 | Düşük besleme gerilimi: 170V'un altı | 🔧 |
| F37 | Düşük su basıncı: sensör 0,4 bar algılamış | 🛠️ Basıncı 1,5–2 bar'a kadar doldur (aşağıda), vanaları ve tesisatı kaçağa karşı kontrol et; sürüyorsa 🔧 |
| F40 | Yüksek su basıncı | 🛠️ Su basıncını kontrol et, cihazı kapatıp yeniden çalıştır; sürüyorsa 🔧 |
| F52 · F53 · F81 | Kullanım suyu (DHW) sıcaklık sensörü, baca gazı sıcaklık sensörü, sensör sapma testi | 🔧 |

F40'ın eşiği kılavuza göre değişiyor: Proteus Premix'te 3±0,3 bar, Citius Premix'te 3,3±0,3 bar, Confeo Premix'te ≥2,9 bar.

## Confeo Premix kodları

| Kod | Kılavuzdaki anlam | Ne yapmalı |
|---|---|---|
| E10 | Yetersiz su sirkülasyonu uyarısı (F10 hatası 24 saat içinde dört kez) | 🔧 |
| F10 | Yetersiz su sirkülasyonu hatası | 🔧 |
| E38 | Son su dolumundan 1 hafta sonra su basıncı düşük | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| E44 | Gaz valfinde arıza | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| E64 · E65 · E98 · E99 | Donanım hatası 1–4 | 🛠️ Kombiyi kapatıp tekrar aç; sürüyorsa 🔧 |
| E83 | Egzoz gazı yüksek sıcaklık uyarısı (son bir ay içinde iki kez F07 hatası) | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| F05 | Fan geri bildirim hatası | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| F36 | Şebeke frekansı hatası | 🔧 |
| F41 · F42 · F43 | Otomatik su doldurma: işlem devam ediyor · işlem tamamlanmadı · doldurma sonrası düşük su basıncı | 🔧 |
| F49 | Oda termostatı haberleşme hatası | 🛠️ Kombiyi kapatıp aç, Reset'e bas; sürüyorsa 🔧 |
| F201 | Anakart - arayüz kartı iletişim hatası | 🔧 |

## Proteus Premix ve Citius Premix kodları

| Kod | Kılavuzdaki anlam | Ne yapmalı |
|---|---|---|
| E05 | Fandan 1 dakikadan uzun süre geri bildirim alınamaması | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| E06 | Proteus: fan sinyal hatası · Citius: fan dönüş hızı olması gerekenden farklı | Proteus: 🛠️ Reset'e bas, sürüyorsa 🔧 · Citius: 🔧 |
| E09 | Valf geri bildirim vermiyor | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| E12 | EEPROM kontrol hatası | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| E21 | Analog-dijital çevirici (ADC) hatası | 🛠️ Reset'e bas; sürüyorsa 🔧 |
| F08 | İyonizasyon komponenti hatası | 🔧 (Proteus kılavuzu önce bir Reset öneriyor) |
| F58 | Baca gazı yüksek sıcaklıkta kitlenme (1 ayda iki kez F07 hatası) | 🔧 |
| F64 | Fan koruma hatası | 🔧 |

Proteus Premix tablosunda ayrıca: **E07** eşanjör yüksek sıcaklık hatası, **E08** alev devresi hatası, **E54** sifon hatası, **E83** ateşleme devresi hatası (bu dördünde önce Reset, sürüyorsa 🔧); **F22** gaz valfi devresi hatası ve **F25** elektronik kart arızası (🔧). Proteus Premix'te **F41, F42, F43** otomatik doldurma sorunlarını gösterir; kılavuz önce Reset'i, sürerse servisi söylüyor.

## Aynı numara, farklı anlam

- **E83:** Proteus Premix'te ateşleme devresi hatası; Confeo Premix'te egzoz gazı yüksek sıcaklık uyarısı. Citius Premix tablosunda E83 yok.
- **Ayda iki kez F07:** Proteus ve Citius'ta F58, Confeo'da E83 olarak çıkıyor.
- **Fan geri bildirimi:** Proteus ve Citius'ta E05, Confeo'da F05.
- **F41:** Proteus'ta doldurma hatası, Confeo'da otomatik su doldurma işleminin sürdüğü bilgisi.

Ekrandaki kodu yorumlamadan önce modelini bu yüzden kontrol et.

## Basınç düşükse (F37): kılavuzun doldurma adımları

Üç kılavuzun ilk çalıştırma bölümünde aynı adımlar var:

1. **Basınç göstergesine bak.** Kılavuz, sistem soğukken basıncın **1,5–2 bar** arasında olmasına dikkat edilmesini istiyor.
2. **Su doldurma vanasını yavaşça aç.** Ekranda 1,5–2 bar okununca **vanayı kapat.** Kılavuzun uyarısı: *"Su doldurma vanasını mutlaka kapatınız, tesisat suyu akarak ortama zarar verebilir."*
3. **Bekle.** Basınç 0,8 bar'ın üstüne çıkınca ekranda **AP** yazar ve kombi otomatik hava boşaltma moduna geçer. Bu sırada **Reset'e basmadan** 160 saniyelik modun bitmesini bekle.

Doldurma vanasının yeri kılavuzundaki çizimde gösterilir. Proteus Premix kılavuzu, F37 sonrası su doldururken basınç değerinin ekranda sıcaklık bölümünde gösterildiğini de yazıyor. Kılavuzların garanti bölümü, Reset işlemini ve kalorifer sistemine doldurma musluğuyla su doldurmayı kullanıcı seviyesindeki işlemler arasında sayıyor.

Kılavuzun hükmü net: **basınç sık sık düşüyorsa sistemde bir su kaçağı söz konusudur** ve bir tesisatçı çağırmak gerekir. Confeo Premix'in bunun için ayrı kodu var: E38; kılavuz muhtemel sebep olarak tesisatta veya kombide su kaçağını gösteriyor. Ayrıntı için: [kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) · [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

## Ekranda kod değil: AP ve ASE

- **AP:** Hava tahliye modu. Kombi 160 saniye boyunca tesisattaki havayı boşaltır. Kılavuza göre cihaza ilk kez elektrik verildiğinde ya da elektrik kapatılıp açıldıktan sonra, E03 sonrası Reset ardından ve F37 ya da F40 hatası geçtikten sonra çalışır. **AP sürerken Reset'e basma.**
- **ASE:** Bakım hatırlatıcısı. Cihaz ısıtmayı aksatmadan çalışmaya devam eder; kılavuz yıllık bakım için E.C.A. yetkili servisiyle iletişime geçilmesini istiyor.

## Reset'in sınırı

Reset, E kodlarının çoğunda kılavuzun ilk önerisi; ama sınırı var. 1 saat içinde 5'ten fazla Reset'e basılırsa kombi **F13 fazla resetleme hatası** verir ve bu kodun çözümü doğrudan yetkili servis. Bir kez bas; kod sürüyor ya da geri geliyorsa tekrar tekrar deneme.

## Ne zaman doğrudan servis

- Tablolarda yalnız 🔧 olan kodlarda: baca gazı (F07, F58), besleme gerilimi (F34), fan, kart ve sensör kodları.
- Reset ya da kılavuzun önerdiği kontrolden sonra kod sürüyor ya da tekrarlıyorsa.
- F13 çıktıysa.
- Basınç sık sık düşüyorsa.
- Gaz vanası açık olduğu hâlde E01 sürüyorsa. Belirti tarafı için: [kombi yanmıyor](/blog/kombi-yanmiyor/).

Kılavuzlar periyodik bakımın mutlaka E.C.A. yetkili servislerine yaptırılmasını istiyor. Başka markaların kodları için: [kombi arıza kodları](/blog/kombi-ariza-kodlari/).

## Servisi aramadan önce üç kontrol

1. Kombinin **modeli** ve kodun **harfi** (E mi, F mi) belli mi?
2. Basınç soğukken **1,5–2 bar** arasında, **gaz vanası** açık mı?
3. Kılavuzun önerdiği **tek Reset** denendi mi?

Üçüne de "evet" diyorsan servise anlatacağın cümle hazır: "ECA Confeo Premix, ekranda E01; gaz vanası açık, bir kez resetledim, kod geri geldi."

Kombinin koduna göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.

---

**Kaynak künyesi.** Bu yazıdaki kodlar ve alıntılar E.C.A.'nın kendi kullanma ve montaj kılavuzlarından alınmıştır: **Proteus Premix** 14–45 HM/HCH/HST, **Confeo Premix** 14–35 HM/HCH/HST ve **Citius Premix** 14–28 HM/HCH/HST. Kod tabloları modele ve kılavuz sürümüne göre değişebilir; kendi kombinin kılavuzu farklı bir şey yazıyorsa **kendi kılavuzun esastır.**
