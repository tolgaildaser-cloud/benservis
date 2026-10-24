---
title: "Warmhaus kombi hata kodları: Er 02, Er 06 ve diğerleri"
description: "Warmhaus kombide Er 02 düşük basınç, Er 06 iyonizasyon, Er 07 güvenlik termostatı. Kılavuzun kod tablosu, SIFIRLAMA tuşu ve ne zaman servis gerektiği."
slug: "warmhaus-kombi-hata-kodlari"
date: "2026-10-24"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme R-yedekler; Dalga 3 G yedeği). origin/main'de "warmhaus" geçen blog sayfası yok (slug + başlık grep boş).
# Arama kanıtı (#164, bu koşu, hl=tr gl=tr): "warmhaus kombi h" → 1. "warmhaus kombi hangi ülkenin", 2. "warmhaus kombi hata kodları"; "warmhaus kombi" → ilk 5'te niyetli öneri yok (servis, fiyat, yorum). GSC: satır yok.
# Belge (#88), bu koşuda curl -sL -A "Mozilla/5.0":
#   resmî sayfa https://www.warmhaus.com/tr/urunler/kombiler/yogusmali-kombiler/warmhaus-glowa-yogusmali-kombi (200; "Kılavuz ve dokümanlar" bölümünde PDF bağlantısı; warmhaus.com.tr → warmhaus.com/tr yönleniyor)
#   → https://www.warmhaus.com/storage/product/March2026/warmhaus-glowa-montaj-ve-kullanim-kilavuzu-tr.pdf (200, application/pdf)
#  (W) Warmhaus Glowa kurulum ve kullanma kılavuzu, TR, 38 s., kod 15011606000269, md5 9018b4be5bb22670e55cdca77229d794 — PDF s.5, s.24, s.25, s.27, s.29
# BİLEREK YAZILMAYANLAR: kodların belgede olmayan nedenleri · parametre menüsü (P09, A23, A53, A63 servis ayarı) · su doldurma adımı (#31, servis) · fiyat (#46) · pazar bağlantısı.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa hiçbir düğmeye dokunma; gaz vanasını kapat, ortamı havalandır ve gaz şirketini ya da yetkili servisi ara."
  - "Ekranda yanıp sönen Er yazısının yanındaki kodu not et ve aşağıdaki tablodan anlamına bak."
  - "Er 02 görüyorsan kombinin altındaki manometreye bak; kılavuz basıncın 1 ile 1,5 bar arasında olmasını istiyor."
  - "Gaz vanasının, radyatör ve musluk suyu vanalarının açık, kombinin elektrik sigortasının açık olduğunu kontrol et."
  - "Kod kilitleme tipindeyse SIFIRLAMA düğmesine üç saniye basılı tut ve kombinin yeniden çalışıp çalışmadığını izle."
  - "Kendiliğinden silinen arıza kodlarında koşul düzelince kombinin kendi kendine çalışmasını bekle."
  - "Kod geri geliyorsa ya da SIFIRLAMA işe yaramıyorsa Warmhaus yetkili servisini ara."
faq:
  - q: "Warmhaus kombide Er 02 ne demek?"
    a: "Kılavuzda Er 02 düşük su basıncı. Basınç sensörlü yapılandırmada basınç 0,4 barın altına inince veriliyor ve 1 barın üstüne çıkınca kendiliğinden siliniyor. Kılavuz kullanım öncesinde manometrede 1 ile 1,5 bar arası bekliyor. Su doldurmayı yetkili servise bırak."
  - q: "Warmhaus kombi nasıl resetlenir?"
    a: "Ekranda yanıp sönen Er ve bir kod değeri varsa SIFIRLAMA düğmesine üç saniye basıyorsun. Kılavuz bu düğmeyi kombi arızasında kombinin tekrar çalıştırılması için tarif ediyor."
  - q: "Er 06 hatası neden çıkar?"
    a: "Er 06 iyonizasyon hatası. Kılavuza göre doğal gazda art arda üç, LPG'de bir alev hatası olursa kombi kilitleniyor ve arızanın silinmesi için SIFIRLAMA gerekiyor. Gaz vanasının açık olduğunu kontrol et; kod tekrar ederse servis."
  - q: "Hangi kodlar kendiliğinden kaybolur?"
    a: "Tabloda tipi Arıza ve Uyarı olan kodlar koşul düzelince kendiliğinden siliniyor; örneğin Er 02 basınç 1 barı geçince, Er 18 donma arızası sıcaklık 3 dereceye çıkınca. Tipi Kilitleme olan Er 06, 07, 13, 15, 41, 80 ve 96 ise SIFIRLAMA istiyor."
  - q: "Er 18 donma arızası ne demek?"
    a: "Radyatör sıcaklık probu on saniye boyunca 1 derecenin altında ölçerse veriliyor; brülör ve pompa durduruluyor. Sıcaklık 3 dereceye çıkınca normal çalışma kendiliğinden başlıyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmında dijital ekranlı kontrol paneli"
  steps:
    - "Mutfakta açık bir pencere ve kapatılmış sarı kollu bir gaz vanası"
    - "Kombi ekranında yanıp sönen kısa bir hata kodu"
    - "Kombinin altında yuvarlak kadranlı bir manometre"
    - "Kombinin altında yan yana dizilmiş vanalar"
    - "Kombi panelinde iki basmalı düğme ve iki döner düğme"
    - "Kombi ekranında sıcaklık değeri ve radyatör simgesi"
    - "Kombinin yanındaki tezgâhta açık duran bir not defteri"
---

Warmhaus kombinin ekranında **Er** yazısı yanıp sönüyor, yanında bir sayı var ve kombi ısıtmıyor ya da sıcak su vermiyor. Warmhaus'un kurulum ve kullanma kılavuzunda bu kodların hepsi "Arıza Kodları Tablosu"nda tek tek yazıyor; her kodun tipi de belli: kimi kendiliğinden siliniyor, kimi **SIFIRLAMA** düğmesi istiyor. Bu yazıda Warmhaus'un sitesindeki Glowa yoğuşmalı kombi sayfasından bağlanan Türkçe kılavuzu kullandık. Senin modelin farklıysa kod adını kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gaz kokusu varsa dur, vanayı kapat, gaz şirketini ara. Kodu not et. Er 02'de manometreye bak (1–1,5 bar). Vanaları ve sigortayı kontrol et. Kilitleme kodlarında SIFIRLAMA'ya üç saniye bas. Kod tekrar ediyorsa Warmhaus yetkili servisi.

## Kod tablosu

Tip sütunu kılavuzdan. **Arıza** ve **Uyarı** tipindeki kodlar koşul düzelince kendiliğinden siliniyor; **Kilitleme** tipindekiler SIFIRLAMA istiyor. Kılavuz tablonun altına tek bir not düşüyor: arıza devam ederse yetkili servisi ara.

| Kod | Kılavuzdaki adı | Tip | Kılavuzun açıklaması |
|---|---|---|---|
| **Er 02** | Düşük su basıncı | Arıza | Basınç 0,4 bar ya da altına inince; 1 bar ve üstünde kendiliğinden silinir |
| **Er 03** | Yüksek su basıncı | Arıza | Basınç 3,5 bar ya da üstüne çıkınca; 3 bar ve altında silinir |
| **Er 04** | Sıcak su (DHW) NTC prob hatası | Uyarı | Prob açık, kısa devre ya da hasarlı |
| **Er 05** | Radyatör (CH) akışı NTC prob hatası | Arıza | Isıtma ve sıcak su talebi durur |
| **Er 06** | İyonizasyon hatası | Kilitleme | Doğal gazda art arda üç, LPG'de bir alev hatası |
| **Er 07** | Güvenlik termostatı açık | Kilitleme | Termostat üç saniye açık kalırsa |
| **Er 08** | İyonizasyon bileşeni hatası | Arıza | Alev sinyali aralık dışında |
| **Er 09** | Pompa enkoder sinyali | Arıza | Yalnız PWM pompalı yapılandırmada |
| **Er 10** | Radyatör dönüşü NTC prob hatası | Arıza | Prob açık ya da kısa devre |
| **Er 13** | Baca gazı NTC yüksek sıcaklığı | Kilitleme | Baca gazı 95 °C üstünde |
| **Er 14** | Baca gazı NTC prob hatası | Arıza | Prob açık ya da kısa devre |
| **Er 15** | Fan enkoder sinyali eksik | Kilitleme | Fan açıkken sinyal yok |
| **Er 18** | Donma arızası | Arıza | Radyatör probu 1 °C altında; 3 °C'de silinir |
| **Er 020** | Radyatör akışı aşırı sıcaklık | Arıza | 95 °C üstünde; 85 °C'de silinir |
| **Er 22** | Yanlış alev hatası | Arıza | Brülör kapalıyken alev algılanırsa |
| **Er 41** | Alev kaybı birçok kez | Kilitleme | Kısa sürede art arda alev kaybı |
| **Er 80** | Gaz vanası geri bildirimi | Kilitleme | Gaz vanası kontrol devresinde hata |
| **Er 91** | Reküperatör hatası | Arıza | Yalnız reküperatörlü yapılandırmada |
| **Er 96** | Fan enkoder sinyali aralık dışı | Kilitleme | Fan devri hedeften farklı |

## Adım adım: Warmhaus kombide hata kodu çıkınca

**1. Önce gaz kokusuna bak.** Warmhaus'un kullanıcı bölümündeki ilk kural: ortamda gaz kokusu varsa evin gaz giriş hattını ve vanalarını kapat, elektrik düğmelerini açıp kapatma, kıvılcım oluşturabilecek hiçbir şey yapma ve gaz şirketini ya da yetkili servisi ara. Kılavuzun gaz kaçağı sayfası ayrıca kapı ve pencereleri açıp ortamı havalandırmanı ve telefonla o ortamda arama yapmamanı istiyor.

**2. Kodu not et.** Kılavuza göre arıza durumunda ekranda **yanıp sönen Er ve hata kodu değeri** görünüyor; ekranda ayrıca SIFIRLAMA gereksinimini gösteren bir sembol var. Kodu yukarıdaki tabloda bul ve tipine bak.

**3. Er 02'de manometreye bak.** Er 02 düşük su basıncı. Warmhaus kullanmaya başlamadan önce kombinin altındaki **manometrede basıncın 1 ile 1,5 bar** arasında olmasını istiyor. Kod, basınç sensörlü yapılandırmada basınç **0,4 bar** ya da altına inince çıkıyor ve **1 bar**'ın üstüne çıkınca kendiliğinden siliniyor. Basınç düşükse tesisata su doldurmayı Warmhaus yetkili servisine bırak (#31). Er 03'te ise basınç fazla yüksek; bu da servis işi.

**4. Vanaları ve sigortayı kontrol et.** Kılavuzun kullanım öncesi kontrol listesi: kombinin altındaki radyatör, musluk suyu ve gaz vanaları açık olmalı; gaz hattında gaz olmalı (kılavuz bunu gazlı ocaklarından birini yakarak kontrol edebileceğini yazıyor); kombinin elektrik sigortası açık olmalı. Özellikle Er 06 iyonizasyon hatası alev oluşmadığında çıktığı için önce gaz vanasına bakmak mantıklı (çıkarım).

**5. Kilitleme kodunda SIFIRLAMA.** Kılavuzun "Kombinin Sıfırlanması (Yeniden Çalıştırma)" bölümü şöyle: ekranda hata kodu yazıyorsa, yani yanıp sönen Er ve kod değeri görünüyorsa, **SIFIRLAMA düğmesine üç saniye bas**. Tabloya göre Er 06, Er 07, Er 13, Er 15, Er 41, Er 80 ve Er 96 kilitleme kodları; bunların silinmesi için SIFIRLAMA gerekiyor. Er 07'de kılavuz önce güvenlik termostatının kapanması gerektiğini de yazıyor.

**6. Kendiliğinden silinen kodda bekle.** Tipi Arıza ya da Uyarı olan kodlarda kılavuz, koşul ortadan kalkınca normal çalışmanın kendiliğinden başladığını yazıyor. Örneğin Er 18 donma arızasında radyatör sıcaklığı 3 °C'ye çıkınca, Er 020'de sıcaklık 85 °C'ye düşünce kombi yeniden çalışıyor.

**7. Kod geri gelirse servis.** Tablonun altındaki not açık: arıza devam ederse yetkili servisi ara. SIFIRLAMA'dan sonra aynı kod tekrar çıkıyorsa düğmeye art arda basmayı sürdürme; kodu servise bildir.

## Ne zaman servis

- Ortamda gaz kokusu varsa (önce gaz şirketi)
- Er 02 ya da Er 03 sürüyorsa; su doldurma ve basınç ayarı servis işi
- Kilitleme kodu SIFIRLAMA'dan sonra yeniden geliyorsa
- Prob, fan, pompa, gaz vanası ya da baca gazı kodlarında

⛔ **Kendin-çöz sınırı burada biter.** Kod okuma, vanalar, sigorta ve SIFIRLAMA sende; gaz bağlantısı, baca, su doldurma, parametre ayarları ve kart Warmhaus yetkili servisinin işi. Kılavuz ilk çalıştırmanın da yetkili servis tarafından yapılmasını istiyor.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne?
2. Ekranda hangi Er kodu var?
3. Manometre kaç bar gösteriyor?
4. SIFIRLAMA'ya bastın mı, kod geri geldi mi?

Basınç düşmesi sık oluyorsa [kombi basınç düşüyor](/blog/kombi-basinc-dusuyor/), doğru değer için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) sayfasına bak. Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
