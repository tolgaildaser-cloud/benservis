---
title: "Miele kurutma makinesi hata kodları: F 066 ve uyarılar"
description: "Miele kurutma makinesinde F 066, su haznesi simgesi, 0:00, UP, PIN çizgileri ya da Con, noC görüyorsan: kılavuzdaki anlamları ve evde yapılacaklar."
slug: "miele-kurutma-makinesi-hata-kodlari"
date: "2026-10-24"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme R-yedekler, Miele fork'u). Dalga 4 M2 TESLIM'inde "kod satırları glif, belge var, sonraki dalgaya aday" diye bırakılan konu.
# Arama kanıtı (#164, bu koşu 24 Eki, hl=tr gl=tr): "miele kurutma makinesi h" → 2. "miele kurutma makinesi hata kodları" (5. "…hataları"). GSC: satır yok.
# Belge (#88, zincir: ürün sayfası https://www.miele.com.tr/product/12719250/t1-isi-pompali-kurutma-makinesi-twd640wp-9kg (tarayıcıda 200; curl 403) → sayfa altı "İndirmeler · Kullanıcı kılavuzu PDF"
#   → https://media.miele.com/downloads/9f/e7/01_C7F1282861C81FE098F3B3C0DA369FE7.pdf (curl 200, application/pdf)):
#  (T) TWD640WP 9kg ısı pompalı kurutma makinesi kullanım kılavuzu tr-TR, M.-Nr. 12 719 910, 84 s., md5 -q bc75ea66fa499b6df65eb5ddc5568128 — s.46, s.47, s.48, s.50, s.51
#  TWD 360 WP ürün sayfası sitede yok; en yakın güncel model TWD640WP seçildi. Kodlar PUA glif; s.46–48 pdftoppm ile görüntüye çevrilip okundu.
# Çakışma: filtre temizliğinin ayrıntısı origin/main miele-kurutma-makinesi-filtresi-nasil-temizlenir; bu sayfa kod hub'ı, ona bağlanır.
# BİLEREK YAZILMAYANLAR: ısı eşanjörü sökümü/yıkama · servis menüsü · belgede olmayan kod anlamları · programlama fonksiyonu numaraları (bu kılavuzda verilmiyor) · fiyat (#46).
# Alıntı denetimi: miele-kurutma-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Elektrikli süpürge", "Nemli bez"]
steps:
  - "Program durduğunda süre göstergesinde F ile birlikte yanan sayıyı ya da yanan simgeyi not et."
  - "F 066 görüyorsan bildirimi kapatmak için program seçim düğmesini Kapalı konumuna getir; hav filtrelerini ve baza filtresini temizle."
  - "Temizlikten sonra F 066 geri gelirse baza filtresinin fazla ıslak takılıp takılmadığına bak, derin kısımlarını ve ısı eşanjörünü kontrol et."
  - "Su haznesi simgesi yanıyorsa makine açıkken kapağı açıp kapat, yoğuşma suyunu boşalt ve tahliye hortumunu kontrol et."
  - "Göstergede 0:00 yanıyor ve program durduysa çamaşırları birbirinden ayır, gerekirse bir kısmını çıkar, makineyi kapatıp açıp programı başlat."
  - "Listede olmayan bir F kodunda makinenin gücünü kapatıp aç ve bir program başlat."
  - "Program yine durup hata uyarısı görünüyorsa Miele yetkili servisine haber ver."
faq:
  - q: "Miele kurutma makinesinde F 066 ne demek?"
    a: "TWD640WP kılavuzuna göre havlar ve deterjan kalıntıları yüzünden bir tıkanma var. Bildirimi kapatmak için program seçim düğmesini Kapalı konumuna getiriyorsun, sonra hav filtrelerini ve baza filtresini temizliyorsun. Hasarlı ya da deforme olmuş filtreler değiştirilmeli."
  - q: "Filtreleri temizledim, F 066 hâlâ çıkıyor."
    a: "Kılavuz üç olası neden sayıyor: baza filtresi çok ıslak takılmış olabilir, baza filtresinin derin kısımlarında çıkarılamayan artık kalmış olabilir ya da ısı eşanjörü tıkanmış olabilir. Islak filtreyi dikkatlice sıkıp kurumaya bırak; hasarsız filtre çamaşır makinesinde yenilenebiliyor."
  - q: "Su haznesi simgesi yanıyor, program durdu."
    a: "Yoğuşma suyu haznesi dolmuş ya da tahliye hortumu katlanmış. Makine açıkken kapağı açıp kapatarak ışığı söndür, yoğuşma suyunu boşalt ve hortumu kontrol et."
  - q: "Ekranda UP yazıyor ve program başlamıyor."
    a: "Bu arıza değil. Kılavuza göre kurutma makinesi için bir güncelleme mevcut; ayrıntı kılavuzun programlama fonksiyonları bölümünde."
  - q: "Ekranda Con, Ctr, OFF ya da noC yazıyor."
    a: "Kılavuz dördünü de arıza saymıyor. Con ve Ctr makinenin ağa bağlandığını, OFF uzaktan kumandanın kapalı olduğunu, noC makinenin ağa bağlanmadığını gösteriyor."
images:
  coverAlt: "Önden yüklemeli bir kurutma makinesinin kumanda panelinde süre göstergesi"
  steps:
    - "Çizim: solda kurutma makinesi, sağda not defteri ve kalem"
    - "Çizim: solda kurutma makinesi, sağda ilgili filtre"
    - "Çizim: solda kurutma makinesi, sağda ilgili filtre"
    - "Çizim: solda kurutma makinesi, sağda su ya da toz haznesi"
    - "Çizim: solda kurutma makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda kurutma makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda kurutma makinesi, sağda telefon ve kullanım kılavuzu"
---

Miele kurutma makinen programı kesti, sinyal sesi duyuldu ve süre göstergesinde **F** harfiyle bir sayı ya da bir simge yanıyor. Miele bu bildirimleri kılavuzun "Sorunların giderilmesi" bölümünde açıklıyor. Bu yazıda Miele'nin Türkiye sitesindeki TWD640WP ısı pompalı kurutma makinesi ürün sayfasından indirdiğimiz kullanım kılavuzunu kullandık. Kod ve simge anlamları o kılavuzdan. Modelin farklıysa kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F 066 tıkanma demek: düğmeyi Kapalı'ya getir, hav filtrelerini ve baza filtresini temizle. Su haznesi simgesinde hazneyi boşalt. 0:00'da çamaşırı ayır. UP güncelleme, çizgiler PIN kodu; Con, Ctr, OFF ve noC arıza değil. Bilinmeyen F kodunda kapatıp aç; tekrar ederse servis.

## Kod ve simge tablosu

| Göstergede | Kılavuzdaki anlamı | Senin yapacağın |
|---|---|---|
| **F 066** | Havlar ve deterjan kalıntıları sonucu tıkanma | Düğmeyi Kapalı'ya getir, filtreleri temizle |
| **Su haznesi simgesi** | Yoğuşma suyu haznesi dolmuş veya hortum katlanmış | Kapağı aç kapa, hazneyi boşalt, hortumu kontrol et |
| **0:00** | Çamaşırlar iyi dağılmamış veya dolanmış | Çamaşırı ayır, gerekirse azalt, kapatıp aç |
| **F ve başka sayı** | Sebep kesin olarak belirlenemiyor | Kapatıp aç, program başlat; tekrarlarsa servis |
| **-0-** | Program seçme düğmesinin konumu değiştirilmiş | İlk programı yeniden seç |
| **Çizgiler, program seçilemiyor** | PIN kodu etkin | Kılavuzun programlama fonksiyonları bölümü |
| **UP** | Kurutma makinesi için güncelleme var | Kılavuzun programlama fonksiyonları bölümü |
| **Con, Ctr** | Arıza yok, makine ağa bağlanmış | Bir şey yapmana gerek yok |
| **OFF** | Arıza yok, uzaktan kumanda kapalı | İstersen programlama fonksiyonlarından aç |
| **noC** | Arıza yok, makine ağa bağlanmamış | Programlama fonksiyonları bölümü |
| **Program sonunda yanıp sönen çizgiler** | Program bitti, çamaşırlar soğutuluyor | Çamaşırı alabilir ya da bekleyebilirsin |

Program sonunda hava kanalları kontrol ışığı yanıyorsa makine ideal ve ekonomik çalışmıyor demek; olası sebep yine hav ya da deterjan kalıntısı. Işığı söndürmek için makine açıkken kapağı açıp kapatıyorsun, sonra hav filtresini temizliyor, baza filtresini de kontrol ediyorsun. Işığın ne zaman yanacağını programlama fonksiyonlarından kendin belirleyebilirsin.

## Adım adım: Miele kurutma makinesinde kod çıkınca

**1. Göstergeyi not et.** Program durduğunda hangi sayının F ile yandığına ya da hangi simgenin göründüğüne bak. Kılavuz bu bildirimlerin çoğunda bir sinyal sesi de duyulduğunu yazıyor. Miele'ye göre arıza ve hataların çoğunu kendin giderebiliyorsun; tablolar bunun için hazırlanmış.

**2. F 066: düğmeyi Kapalı'ya getir, filtreleri temizle.** Miele'ye göre havlar ve deterjan kalıntıları yüzünden tıkanma var. Bildirimi kapatmak için program seçim düğmesini **Kapalı** konumuna getir; kılavuzda bu konum güç simgesiyle gösteriliyor. Ardından **hav filtrelerini ve baza filtresini** temizle. Kılavuza göre hasar görmüş, deforme olmuş ya da artık temizlenemeyen filtreler değiştirilmeli. Filtrelerin tek tek nasıl çıkarılıp yıkanacağı [Miele kurutma makinesi filtresi nasıl temizlenir](/blog/miele-kurutma-makinesi-filtresi-nasil-temizlenir/) yazısında.

**3. F 066 sürüyorsa üç nedene bak.** Temizlikten sonra hata bildirimi tekrar verilirse kılavuz üç olası neden sayıyor. Birincisi, **baza filtresi çok ıslak takılmış** olabilir: filtreyi dikkatli bir şekilde sık ve kurumaya bırak. İkincisi, baza filtresinin **daha derin kısımlarında çıkarılamayan artıklar** kalmış olabilir: filtreyi kontrol et; hasarlı ya da deforme değilse kılavuz onu çamaşır makinesinde yenileyebileceğini yazıyor. Üçüncüsü, **ısı eşanjörü tıkanmış** olabilir: kılavuzun "Isı eşanjörünün kontrolü" bölümüne göre kontrol et.

**4. Su haznesi simgesi: hazneyi boşalt.** Yoğuşma suyu haznesi dolmuş ya da su boşaltma hortumu katlanmış. Işığı kapatmak için makinenin gücü açıkken kapağı açıp kapat. Sonra yoğuşma suyunu boşalt ve hortumu kontrol et.

**5. 0:00: çamaşırları ayır.** Göstergede 0:00 yanıyor, program iptal edildi ve sinyal sesi duyulduysa Miele'ye göre çamaşırlar iyi dağılmamış ya da birbirine dolanmış olabilir. Çamaşırları birbirinden ayır, gerekirse bir kısmını dışarı al. Makineyi kapatıp aç ve programı yeniden başlat.

**6. Bilinmeyen F kodu: kapatıp aç.** F ile başka bir rakam kombinasyonu yanıp sönüyorsa kılavuz sebebin kesin olarak belirlenemediğini söylüyor. Makinenin gücünü kapatıp aç ve bir program başlat.

**7. Tekrar ederse servis.** Program yeniden duruyor ve ekranda hata uyarısı görünüyorsa Miele bir arıza olduğunu yazıyor ve yetkili servise haber vermeni istiyor.

## Ne zaman servis

- Bilinmeyen F kodu kapatıp açtıktan sonra yeniden çıkıyorsa
- F 066, filtreler ve ısı eşanjörü kontrol edildiği hâlde geri geliyorsa
- Su haznesi boş, hortum düz olduğu hâlde simge sönmüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Hav filtreleri, baza filtresi, su haznesi ve hortum sende; ısı pompası devresi ve elektronik Miele yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Göstergede hangi kod ya da simge var?
2. Hav filtrelerini ve baza filtresini en son ne zaman temizledin?
3. Kod hangi programda ve ne kadar süre sonra çıktı?
4. Makineyi kapatıp açtıktan sonra kod geri geldi mi?
5. Su haznesini en son ne zaman boşalttın?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka fark etmeksizin genel kontroller [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/) ve [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/) sayfalarında. Bil, gör, çağır.
