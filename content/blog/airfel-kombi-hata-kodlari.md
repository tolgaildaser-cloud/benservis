---
title: "Airfel kombi hata kodları: Maestro serisi kod tablosu"
description: "Airfel kombi hata kodları: Maestro Optimum, Comfort ve Power kılavuzundaki 11-64, HJ-09, 1J-64, U4-67 ve diğer kodlar, evde bakılacaklar, servis sınırı."
slug: "airfel-kombi-hata-kodlari"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork A). Konu seçimi: origin/main'de Airfel kombi sayfası yok (slug + başlık grep'i); kombi-ariza-kodlari hub'ında Airfel satırı yok,
#   main'de 11-64 / HJ-09 / U4-67 geçen sayfa yok (git grep).
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "airfel kombi hata" → 1. "airfel kombi hata kodları", 2. "…hata veriyor", 3. "…hataları".
# GSC (https___www-6 7 gün, https___www-5 3 ay): Airfel kombi sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile airfel.com'dan indirildi; hepsi HTTP 200 application/pdf. Okuma pdftotext, sayfa = PDF sayfası.
#  (O) Maestro Optimum A2CBP020AATR kullanım kılavuzu, 12 s.  https://airfel.com/uploads/files/maestro-optimum-kullanim1.pdf  md5 ecf05d1114c39903970bdc2957e40d04
#  (C) Maestro Comfort A2CPP024/028 kullanım kılavuzu, 12 s.  https://airfel.com/uploads/files/maestro-comfort-kullanim_-_TR2.pdf  md5 4d7af0685b4da770154148f0d78fce2c
#  (P) Maestro Power A2CPN023/026/030/036 kullanım kılavuzu, 16 s.  https://airfel.com/uploads/files/Maestro-power-kullanim_k%C4%B1lavuzu.pdf  md5 a2baa3594773e0d54b7fd0054439ce3d
#  (B) airfel.com "Airfel Kombi Arıza Kodları ve Çözümü" (üretici sitesi)  https://airfel.com/tr/tr/blog/airfel-kombi-ariza-kodlari-ve-cozumu  HTML md5 ff1a97d83b98cdf4de6756e70a724278 (yalnız SSS anahtar işareti)
# Kod tabloları O s.10, C s.11, P s.14 (P = C + U5-01) · Err gösterimi O s.6 · hata tipleri O s.9, C s.8, P s.11 · sistem basıncı bekleme ekranında C s.5-6 · gaz kokusu O s.3 · bakım/onarım yetkili O s.3, s.9.
# Tabloda kod adları kılavuzdan birebir; "ne yaparsın" sütunu kılavuzun "Hata giderme" sütununun kısaltması. #31: "düşükse tamamlayın" / "doldurun" / "boşaltın" satırları kullanım kılavuzunda vana yeri
#   ve yöntem gösterilmediği için kullanıcı adımı olarak yazılmadı, servise yönlendirildi.
# BİLEREK YAZILMAYANLAR: kodların kılavuzda olmayan nedenleri · Maestro Smart (kullanım kılavuzu sitede yok, yalnız sertifika) · servis menüsü · fiyat (#46) · pazar bağlantısı.
#   Alıntı denetim tablosu: airfel-kombi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa koda bakmakla uğraşma; binanın gaz vanasını kapat, kapı ve pencereleri aç, binayı terk et."
  - "Ekrandaki kodu harf ve rakamlarıyla, tire işaretinin iki yanıyla birlikte not et."
  - "Kombinin modelini öğren; Optimum ile Comfort ve Power'ın kod tabloları farklı."
  - "Kodu tabloda bul ve yanında reset sembolü olup olmadığına bak."
  - "Kılavuzun kullanıcıya bıraktığı kontrolleri yap: gaz vanası, radyatör vanaları, termostat alıcısının elektriği."
  - "Kılavuz reset diyorsa bir kez resetle; kod geri gelirse ya da servis yazıyorsa Airfel yetkili servisini ara."
faq:
  - q: "Airfel kombide 11-64 ne demek?"
    a: "Üç Maestro kılavuzunda da 11-64 alev oluşmaması. Kılavuz önce gaz vanasının açık olduğundan emin olmanı istiyor; kod 3. başarısız ateşleme denemesinden sonra çıkıyor. Optimum kılavuzuna göre sistemde gaz olduğu halde hata tekrarlarsa yetkili servise başvurulur."
  - q: "HJ-09 ne demek?"
    a: "HJ-09 düşük sistem basıncı. Kılavuzun talimatı doldurma vanasıyla basıncı 0,8 bar ya da üzerine çıkarmak. Kullanım kılavuzu vananın yerini ve kullanımını göstermediği için doldurmayı kendin yapma, yetkili servise bırak; basınç sık düşüyorsa zaten servis gerekir."
  - q: "U4-67 ne demek?"
    a: "U4-67 reset denetimi. Optimum kılavuzuna göre hata sebebi ortadan kalkmadan sürekli reset atılırsa cihaz kendini kilitler ve bu koda geçer. Kod yalnız elektrik beslemesi kesilip tekrar açıldığında gider."
  - q: "Ekranda anahtar işareti var, ne yapmalıyım?"
    a: "Airfel'in kendi sitesindeki arıza kodları yazısı anahtar işaretini cihazın teknik bir arızaya geçtiği şeklinde açıklıyor. Optimum kılavuzunun sembol listesinde de cihazın reset gerektirdiğini gösteren bir sembol var ve kalıcı hatada kodla birlikte çıkıyor. Yanındaki kodu tabloda bul, kılavuz reset diyorsa bir kez resetle, kod geri gelirse servisi ara."
  - q: "Kod tablosu bütün Airfel kombilerde aynı mı?"
    a: "Hayır. Maestro Comfort ve Maestro Power kılavuzlarının tabloları aynı, Power'da ek olarak U5-01 var. Maestro Optimum'un tablosunda bazı kodlar farklı; örneğin gaz valfi hatası Optimum'da 10-65, Comfort ve Power'da 10-64."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin küçük ekranında beliren kısa bir hata yazısı"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda not defteri ve kalem"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Kombi durdu ve ekranda "11-64" ya da "HJ-09" gibi tireli bir kod var. Airfel'in Maestro Optimum, Maestro Comfort ve Maestro Power kullanım kılavuzlarının sonunda kod tablosu var; tabloda her kodun adı ve Airfel'in önerdiği ilk adım yazıyor. Bu yazıda o tabloları birleştirip hangi kodda senin ne yapabileceğini, hangisinde servisi araman gerektiğini topladık. Optimum'un tablosu diğer ikisinden biraz farklı, modelini bilmen işe yarar.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kodu not et, modeli öğren. 11-64'te gaz vanasına bak, 1J-64'te radyatör vanalarına. HJ-09 basınç düşük; doldurma servise. U4-67'de elektriği kesip aç. Kılavuz reset diyorsa bir kez dene, kod dönerse ya da tablo servis diyorsa → Airfel yetkili servisi.

## Kod tablosu

O = Maestro Optimum, C = Maestro Comfort, P = Maestro Power.

| Kod | Kılavuzdaki adı | Model | Ne yaparsın |
|---|---|---|---|
| **10-64** | Gaz valfi devresi hatası | C, P | Reset; tekrarlarsa servis |
| **10-65** | Gaz valfi akımı hatası | O | Reset; tekrarlarsa servis |
| **11-64** | Alev oluşmaması | O, C, P | Gaz vanası açık mı; tekrarlarsa servis |
| **11-67** | Alev kaybı | C, P | Geçici; bekle, tekrarlarsa servis |
| **13-64** | Fan hızı hatası | O, C, P | Reset; tekrarlarsa servis |
| **16-64** | Yüksek baca gazı sıcaklığı | O, C, P | Optimum 15 dakika bekler; sürerse servis |
| **1J-64** | Isıtma suyu yüksek sıcaklık (O), limit termostat (C, P) | O, C, P | Radyatör vanaları açık mı; reset; tekrarlarsa servis |
| **80-01** | Dönüş suyu sıcaklık sensörü | O, C, P | Reset; tekrarlarsa servis |
| **81-01** | Gidiş suyu sıcaklık sensörü | O, C, P | Reset; tekrarlarsa servis |
| **81-65** | Solar sensör hatası | C, P | Servis |
| **8H-67 / 8H-68** | Gidiş / dönüş sensörü takılma | O | Reset; tekrarlarsa servis |
| **8A-46** | Donma koruması | O, C, P | C ve P'de su 1 °C'yi geçince kendiliğinden çalışır |
| **E1-64** | Yanlış alev sinyali | O, C, P | Reset; tekrarlarsa servis |
| **E1-65** | İyonizasyon bileşenleri | O | Reset; tekrarlarsa servis |
| **E1-69 / E1-73** | CRC parametre / dahili kart | C, P | Reset; tekrarlarsa servis |
| **E1-71** | EK kilitlenme | C, P | Kalıcı hata, servis |
| **E1-74** | ADC hatası | O | Reset; tekrarlarsa servis |
| **H9-01** | Dış hava sensörü | O, C, P | Sürerse servis |
| **HC-01** | Kullanım sıcak suyu hatası | C, P | Kombi çalışır, servis |
| **HJ-08** | Yüksek sistem basıncı | C, P | Basınç 0,8 bara inmeli; servis |
| **HJ-09** | Düşük sistem basıncı | O, C, P | Basınç 0,8 bara çıkmalı; servis |
| **HJ-10** | Su basıncı sensörü | C, P | Servis |
| **J6-01 / J6-20 / J6-21** | Yüksek gidiş / dönüş sıcaklığı | O, C, P | Radyatör vanaları açık mı; tekrarlarsa servis |
| **J6-64 / J6-65 / J6-66** | Drift testi, sensör çatlak testi | O | Testi bekle ya da reset; servis |
| **JJ-64** | Baca gazı sıcaklık sensörü | O, C, P | Reset; tekrarlarsa servis |
| **U4-67** | Reset denetimi | O, C, P | Elektriği kesip aç |
| **U5-01** | Termostat iletişim kaybı | O, P | Termostat alıcısının elektriği; elektrik kes-aç |

## Adım adım

**1. Gaz kokusu varsa dur.** Airfel kılavuzlarının güvenlik sayfasına göre elektrikli cihazların düğmelerine ve fişlerine dokunma, kibrit ve çakmak yakma. Binanın gaz vanasını kapat, kapı ve pencereleri aç, binayı terk et, gaz şirketini ve yetkili servisi bilgilendir.

**2. Kodu tam yaz.** Optimum kılavuzuna göre hata olduğunda ekranda **Err** ve hata kodu görünür. Kod iki parçalı: tirenin iki yanını birlikte yaz, çünkü **E1-64** ile **E1-71** bambaşka şeyler.

**3. Modeli öğren.** Comfort ve Power'ın tablosu aynı, Power'da ek olarak **U5-01** var. Optimum'da bazı kodlar farklı ve 8H, J6-64 gibi yalnız ona ait satırlar var.

**4. Sembole bak.** Kılavuzlar hataları türlerine ayırıyor. Geçici ya da kapatma hatasında kombi durur, sebep ortadan kalkınca kendiliğinden çalışır. Kalıcı hatada ya da kilitlenmede kodun yanında reset gerektiğini gösteren sembol çıkar.

**5. Sana bırakılan kontrolleri yap.** **11-64**'te gaz vanasının açık olduğundan emin ol. **1J-64**, **J6-01** ve sensör kodlarında kılavuz radyatör vanalarının açık olmasını istiyor. **U5-01**'de termostat alıcısının elektriği olduğundan ve kablolarının takılı olduğundan emin ol. Comfort'ta bekleme modunda ekranda sistem basıncı da görünür; basınç kodunda bu değeri servise söyle.

**6. Bir kez resetle, sonra servis.** Kılavuz reset diyorsa resetle: Optimum'da Reset tuşuna bas, Comfort ve Power'da Mod/Giriş/Reset tuşunu 3 saniye basılı tut. Sebep ortadan kalkmadıysa reset geçersiz olur; sürekli reset Optimum'u **U4-67** ile kilitler. Ayrıntılar [Airfel kombi resetleme](/blog/airfel-kombi-resetleme/) yazısında.

## Basınç kodlarında sınır

Kılavuzun **HJ-09** talimatı doldurma vanasıyla sistemi 0,8 bar ya da üzerine çıkarmak, **HJ-08** talimatı ise basıncı 0,8 bara indirmek. Kullanım kılavuzu doldurma vanasının yerini ve kullanımını göstermiyor. Bu yüzden basınç ayarını kendin yapmaya çalışma; ekrandaki değeri not et ve servise bırak. Basınç değerlerinin genel mantığı [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

## Ne zaman servis

- Kod bir resetten sonra geri geliyorsa
- Tablo doğrudan servis diyorsa (81-65, E1-71, HC-01, HJ-10)
- Basınç kodları görüyorsan ya da basınç sık düşüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ekran, mod, reset, gaz vanası ve petek vanaları sende; kombinin kapağının içi, gaz hattı, kart, sensörler, servis menüsü ve tesisata su doldurma ya da boşaltma yetkili servisin.

Sıcak su sorunu için [Airfel kombi sıcak su gelmiyor](/blog/airfel-kombi-sicak-su-gelmiyor/), diğer markalar için [kombi arıza kodları](/blog/kombi-ariza-kodlari/) sayfasına bak. Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
