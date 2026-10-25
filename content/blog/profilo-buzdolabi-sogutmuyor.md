---
title: "Profilo buzdolabı soğutmuyor: evde kontrol"
description: "Profilo buzdolabı soğutmuyorsa kılavuzun sırası: elektrik, sergileme modu, tatil ve eco modu, sıcaklık ayarı, kapı, hava açıklıkları ve buz çözme."
slug: "profilo-buzdolabi-sogutmuyor"
date: "2026-10-23"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork B). Konu seçimi: origin/main'de hiç Profilo buzdolabı sayfası yok (profilo-buzdolabi-* yok).
#   Kardeş sayfalar: bosch-, siemens-, arcelik-, beko-, vestel-buzdolabi-sogutmuyor ve marka bağımsız buzdolabi-sogutmuyor-nedenleri.
# GSC: https___www-3…6 dışa aktarımlarında Profilo buzdolabı sorgusu yok (yalnız "profilo no frost buzdolabı buzlanma sorunu" 1).
# Arama kanıtı (#164, 23 Eki Google otomatik tamamlama, hl=tr gl=tr): "profilo buzdolabı so" → 1. "…soğutmuyor", 2. "…soğutmuyor ne yapmalıyım",
#   3. "…soğutma ayarı", 4. "…soğutmuyor neden"; "profilo buzdolabı" → 4. "…soğutmuyor".
# Belgeler (#88, yalnız üretici; yerel kopyalar blog-taslaklar/kaynak-siemens-profilo-2eki/, md5 -q 23 Eki). Okuma pdftotext -layout, sayfa = PDF sayfası (\f).
#  (D) Profilo BD3056… soğutucu/dondurucu kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001758506_D.pdf  md5 ca5f5c281e44daec72358a3d06a4560c
#  (C) Profilo BD20..NN / BD20..VN kullanma kılavuzu  https://media3.bsh-group.com/Documents/9000781313_C.pdf  md5 0081d8067ea642d5e661a57745f0a513
#  (G) Profilo BD20..VV kullanma kılavuzu  https://media3.bsh-group.com/Documents/9000677073_G.pdf  md5 989d340e0f416cb975fbd9ffce06b213
# Ortam 10–43 °C D s.11 · panel öğeleri D s.14-15 · ilk çalıştırma, 4 °C/−18 °C, sıcaklığı etkileyenler, kapak D s.18 · süper soğutma 6 saat, tatil 14 °C D s.19
#   · eco 8 °C/−16 °C D s.20 · sergileme modu, sık çalışma, dış hava açıklıkları D s.29 · arka panelde buz, "E"/"d" D s.30 · NoFrost buz çözme D s.31 (C s.19 aynı)
#   · ayardan farklı sıcaklık D s.32 · gösterge yanmıyor, soğutucu çok soğuk G s.18, C s.18 · klima sınıfı ve havalandırma C s.7 · E-Nr./FD C s.19.
# BİLEREK YAZILMAYANLAR: gaz, kompresör, termostat, fan, sensör teşhisi ya da "gaz bitti" iddiası (belgede yok; #31) · damper termostat · "en sık sebep" sıralaması
#   · cihazı yatırma/taşıma "hileleri" · başka Profilo modellerine genelleme (tuş adları BD3056'ya göre) · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: profilo-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (sıcaklığın oturması için birkaç saat hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu", "Sünger", "Kuru bez"]
steps:
  - "Paneldeki göstergeler hiç yanmıyorsa fişin prize iyi oturduğunu, elektriğin geldiğini ve sigortayı kontrol et."
  - "Göstergeler ve aydınlatma yandığı hâlde cihaz soğutmuyorsa sergileme modu açık olabilir; kılavuzdaki tuşa sinyal duyulana kadar basılı tutarak kapat."
  - "Panelde tatil modu ya da eco enerji tasarrufu modu açıksa kapat; tatil modunda soğutucu bölme kasten ılık tutulur."
  - "Soğutucu bölmenin ayarına bak; önerilen değer 4 derece, dondurucu için eksi 18 derece. Ayarı değiştirdiysen sonucu birkaç saat sonra kontrol et."
  - "Kapağı gereksiz açma, kapanırken yiyeceklerin kapağı engellemediğinden ve kapağın tam kapandığından emin ol."
  - "Dış hava açıklıklarının önündeki engelleri kaldır, buzdolabını radyatör, ocak ve doğrudan güneş ışığından uzak tut."
  - "Sıcak yemeği soğumadan koyma; çok miktarda yiyecek koyacaksan önceden süper soğutmayı aç."
  - "Dondurucu kapağı uzun süre açık kaldıysa ve ayarlanan sıcaklığa ulaşılamıyorsa kılavuzdaki buz çözme sırasını uygula; sorun sürerse müşteri hizmetlerini ara."
faq:
  - q: "Profilo buzdolabı soğutmuyor ama ışığı yanıyor, neden?"
    a: "Profilo BD3056 kılavuzunun arıza tablosunda bu belirtinin karşılığı sergileme modu: cihaz soğutmuyor, göstergeler ve aydınlatma yanıyor. Kılavuz ilgili tuşa akustik bir sinyal duyulana kadar 5 saniye basılı tutmayı, kısa süre sonra cihazın soğutup soğutmadığını kontrol etmeyi söylüyor. Eski BD20 kılavuzunda aynı durum için cihazın kendini test etme programı başlatılıyor."
  - q: "Profilo buzdolabı kaç derecede olmalı?"
    a: "BD3056 kılavuzuna göre soğutucu bölme için önerilen sıcaklık 4 °C, derin dondurucu bölüm için −18 °C. Cihazı yeni çalıştırdıysan ayarlanan sıcaklığa ancak birkaç saat sonra ulaşılır; kılavuz bu süre dolmadan yiyecek konmamasını istiyor."
  - q: "Tatil modu açık kalırsa ne olur?"
    a: "Tatil modunda cihaz soğutucu bölmeyi 14 °C'ye ayarlıyor, dondurucunun sıcaklığı değişmiyor. Kılavuz bu modda soğutucu bölmede yiyecek saklanmamasını istiyor; bölme ısınır ve yiyecekler bozulabilir. Eco modunda ise soğutucu 8 °C, dondurucu −16 °C'ye ayarlanıyor."
  - q: "Soğutucunun arka duvarında buz oluşuyor, arıza mı?"
    a: "Kılavuza göre hata değil. Soğutma bölmesinin arka panelinin buzu düzenli aralıklarla otomatik olarak çözülür. Kılavuzun önerileri kapağı kısa süre açmak, yiyecekleri kapalı saklamak, sıcak yiyecekleri soğuduktan sonra koymak ve iç duvarlarla yiyecekler arasında boşluk bırakmak."
  - q: "Ekranda E ya da d görünüyor, ne yapmalıyım?"
    a: "BD3056 kılavuzuna göre elektronik sistem bir hata tespit etmiş. Cihazı kapat, fişini çek ya da sigortayı kapat, 5 dakika sonra yeniden bağlayıp aç. Mesaj hâlâ görünüyorsa müşteri hizmetlerini ara."
images:
  coverAlt: "Mutfakta kapağı aralık duran beyaz bir alttan donduruculu buzdolabı ve içindeki dolu raflar"
  steps:
    - "Çizim: solda buzdolabı, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda buzdolabı, sağda uzaktan kumanda"
    - "Çizim: solda buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda buzdolabı, sağda iç bölme ve raflar"
    - "Çizim: solda buzdolabı, sağda panel radyatör ve vanası"
    - "Çizim: solda buzdolabı, sağda iç bölme ve raflar"
    - "Çizim: solda buzdolabı, sağda telefon ve kullanım kılavuzu"
---

Buzdolabının ışığı yanıyor, motor çalışıyor gibi, ama içerisi ılık. Profilo'nun buzdolabı kılavuzlarında bu durumun karşılığı tek bir arıza değil, bir dizi kontrol: bazı modlar soğutmayı kasten azaltıyor, bazı kullanım alışkanlıkları da sıcaklığı yükseltiyor. Bu yazıda Profilo'nun BD3056 ile iki BD20 serisinin kullanım kılavuzlarındaki arıza tablolarını ve ayar bölümlerini sırayla topladık. Tuş adları modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce elektrik ve panel. Işık yanıp soğutma yoksa sergileme modu; tatil ve eco modu soğutmayı kasten azaltır. Ayar soğutucuda 4 °C, dondurucuda −18 °C olmalı ve oturması saatler sürer. Kapak, hava açıklıkları, sıcak yiyecek ve dondurucudaki buzlanma sırada. Ekranda E ya da d varsa ya da kontroller sonuç vermiyorsa servis.

## Ekran ve belirti ne söylüyor

| Gördüğün | Kılavuza göre | Kim ne yapar |
|---|---|---|
| **Hiçbir gösterge yanmıyor** | Elektrik kesintisi, sigorta kapalı ya da fiş iyi takılmamış | 🛠️ Fiş, elektrik, sigorta |
| **Işık ve göstergeler yanıyor, soğutma yok** | Sergileme modu açık | 🛠️ Modu kapat |
| **Tatil modu açık** | Soğutucu bölme 14 °C | 🛠️ Modu kapat |
| **Eco açık** | Soğutucu 8 °C, dondurucu −16 °C | 🛠️ Gerekirse kapat |
| **Ayarlanan sıcaklığa ulaşılamıyor** | NoFrost evaporatörü fazla buzlanmış | 🛠️ Buz çözme sırası |
| **Göstergede E ya da d** | Elektronik sistem hata tespit etti | 🛠️ Kapat, 5 dakika bekle; sürerse servis |

## Adım adım: evde denenecekler

**1. Elektriğe bak.** Eski BD20 kılavuzlarının arıza tablosuna göre hiçbir gösterge yanmıyorsa sebep elektrik kesintisi, kapalı sigorta ya da prize iyi takılmamış fiş olabilir. Fişi tak, elektriğin gelip gelmediğini ve sigortaları kontrol et.

**2. Sergileme modunu kapat.** BD3056 kılavuzunda "cihaz soğutmuyor, göstergeler ve aydınlatma yanıyor" satırının sebebi sergileme modu. Çözüm, kılavuzdaki tuşa **akustik bir sinyal duyulana kadar 5 saniye** basılı tutmak ve kısa süre sonra soğutmayı kontrol etmek. BD20..VV kılavuzunda aynı durum için cihazın kendini test etme programı başlatılıyor; program bitince cihaz normal moda dönüyor.

**3. Tatil ve eco modunu kontrol et.** Tatil modunda soğutucu bölme **14 °C**'ye ayarlanır, dondurucu değişmez; kılavuz bu modda soğutucuda yiyecek saklanmamasını istiyor. Eco modunda soğutucu **8 °C**, dondurucu **−16 °C** olur. Panelde bu fonksiyonların yanında bir nokta görünüyorsa açıklar; aynı tuşa basınca kapanır ve önceden ayarlanan sıcaklık görüntülenir.

**4. Sıcaklık ayarına bak.** Kılavuza göre soğutucu için önerilen sıcaklık **4 °C**, derin dondurucu için **−18 °C**. Cihazı yeni çalıştırdıysan ayarlanan sıcaklığa ancak birkaç saat sonra ulaşılır. Sıcaklık ayardan çok farklıysa kılavuz cihazı kapatıp yaklaşık 5 saniye sonra yeniden açmayı, sıcaklık yüksekse birkaç saat sonra tekrar kontrol etmeyi söylüyor.

**5. Kapağı kontrol et.** Kılavuz, cihazdaki sıcaklığın açılma sıklığına, doldurma miktarına, konan yiyeceğin sıcaklığına, ortam sıcaklığına ve güneş ışığına göre değiştiğini yazıyor. Kapağı gereksiz açma, kapanırken yiyeceklerin kapağı engellemediğinden emin ol. Kılavuz kapağın her zaman doğru şekilde kapatılmasını istiyor. Kapattıktan hemen sonra kapak zor açılıyorsa sebep oluşan vakumdur; dengelenene kadar bekle.

**6. Hava açıklıklarını aç.** Kılavuz, dış hava açıklıklarının önündeki engellerin kaldırılmasını, cihazın radyatör, ocak ve diğer ısı kaynaklarından uzak tutulmasını istiyor. BD20 kılavuzu nedenini açıklıyor: arka ve yan yüzlerde ısınan hava kolayca çıkamazsa soğutucu daha fazla çalışmak zorunda kalır. BD3056 10–43 °C arasındaki ortam sıcaklıkları için tasarlanmış.

**7. Yükü düzenle.** Sıcak yiyecek ve içecekleri soğumadan koyma, yiyeceklerle iç duvarlar arasında boşluk bırak. Çok miktarda yiyecek koyacaksan önce **süper soğutmayı** aç; kılavuza göre yaklaşık 6 saat sonra cihaz normal moda geçer.

**8. Buzlanmayı çöz.** Dondurucu kapağı uzun süre açık kaldıysa NoFrost evaporatörü fazla buzlanıp otomatik buz çözme çalışamayabilir. Kılavuzun sırası: dondurulmuş yiyecekleri serin, izole bir yere al, cihazı kapat, fişini çek, duvardan uzaklaştır ve kapağı açık bırak. Yaklaşık 20 dakika sonra eriyen su arkadaki buharlaşma kabına akar; taşmaması için suyu süngerle al. Akış bitince içini temizleyip cihazı yeniden aç.

## Ne zaman servis

- Göstergede **E** ya da **d** varsa: kılavuza göre cihazı kapat, fişini çek, 5 dakika sonra bağlayıp aç; mesaj sürüyorsa servis
- Modlar, ayar, kapak, hava açıklıkları ve buz çözme tamam olduğu hâlde soğutma gelmiyorsa
- LED aydınlatma çalışmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Panel, ayarlar, kapak, cihazın çevresi ve kılavuzdaki buz çözme sende; soğutma devresi ve elektronik uzmanın. Kılavuza göre cihazda yalnız eğitimini almış uzman personel onarım yapabilir.

## Servisi aramadan önce kısa özet

1. Modelin ne? Ürün numarası (E-Nr.) ve imalat numarası (FD) tip levhasında yazar.
2. Hangi bölme soğutmuyor: soğutucu mu, dondurucu mu?
3. Panelde hangi mod açık, ekranda kod var mı?
4. Buz çözme yapıldı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka bağımsız nedenler [buzdolabı soğutmuyor nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısında, buzlanma için [buzdolabı buzlanma yapıyor](/blog/buzdolabi-buzlanma-yapiyor/) rehberinde, aynı aileden kardeş marka için [Siemens buzdolabı soğutmuyor](/blog/siemens-buzdolabi-sogutmuyor/) sayfasında. Bil, gör, çağır.
