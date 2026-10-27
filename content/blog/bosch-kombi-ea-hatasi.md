---
title: "Bosch kombi 227 ve EA hatası: ne demek, nasıl giderilir"
description: "Bosch kombide 227 ve EA, alevin algılanmadığını gösterir. Ekranda H ve ! ne demek, gaz vanası, su basıncı, reset ve servis sınırı Bosch kılavuzlarından."
slug: "bosch-kombi-ea-hatasi"
date: "2026-09-28"
updated: "2026-10-30"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ (YK #189 fırsat sayfası, yayın 30 Eki): içerik iyileştirmesi; slug, şablon ve adım sayısı (7) aynı (YK #179).
# Eski bosch-kombi-227-hatasi adresi vercel.json'da bu sayfaya 301 ile yönleniyor; sayfa 227 sorgusunu da karşılar.
# GSC (www-9 Sorgular.csv, 7 gün): "bosch kombi 227 hatası" 1/242 poz 10 · "bosch 227 hatası" 0/76 · "227 kombi hatası" 0/30 ·
#   "bosch kombi ünlem işareti 227" 0/13 · "bosch kombi 227 arızası nasıl giderilir" 0/12 · "bosch 1200 kombi 227 hatası" 0/10. EA'lı sorgu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF'ler pdftotext -layout, sayfa = PDF sayfası.
#  K1) Bosch TR EA sayfası  https://www.bosch-homecomfort.com/tr/tr/residential/servis-hizmetlerimiz/ariza-kodlari-ve-cozumleri/ea/  md5 93f6e3f5b50c2d39b3f7217800fb3056
#  K2) Bosch TR 227 sayfası  .../ariza-kodlari-ve-cozumleri/227/  md5 0350d3aee86fbfc495b06804dd09495b
#  K3) Bosch TR arıza kodları dizini  .../ariza-kodlari-ve-cozumleri/  md5 13286b3893059e6c28e77d7d06dbff56
#  B1) Condens 7000i W KK 6721835270  md5 a485d15ed4c4466367fc4daa73fa1afb (H + "EA 227", reset s.12)
#  B2) Condens 2500 W KK 6721835246  md5 81853ab2ff146ad75d9398dc0c9832b0 (H, !, EA s.13; doldurma s.8)
#  B3) Condens 2300i W KK 6721830375  md5 167bfab2336acd938ef5e1d26bd5dec9 (H ve ! reset s.11)
#  B4) Condens 2200i W KK 6721839341  https://bosch-tr-tr-b.boschhc-documents.com/download/file/file/6721839341.pdf  md5 e06a7d8792003fe41f2a63b08204887b (H + "örn. arıza kodu 214" s.9)
#  B5) Condens 2200i W Montaj 6721839338  md5 893b7ca3cab946a214536c6fd3f9b7f7 ("Örnek 227 Arıza kodu" s.23)
#  C40) Condens 1200W KK 6721835940 (2023/04)  md5 a22315e51db093d2642aeb55bcbc8c02 (gaz vanası, H ve ! reset, 1-2 bar s.7)
#  C41) Condens 1200W Bakım Kılavuzu 6721835941 (2025/12)  md5 74d6fff3d9dbbea91e95ddf2f9ddf877 (227 B/V satırı ve servis kontrolleri s.52)
# Tam liste, alıntılar: bosch-kombi-ea-hatasi.KAYNAK.md
# Bilerek YAZILMAYANLAR: servis kontrollerinin kullanıcıya adım olarak verilmesi (#31; yalnız "servis neye bakar" diye aktarıldı);
#   1200 W bakım tablosunun öbür modellere genellenmesi; reset tuşlarının adı ve basılı tutma süresi; parça, süre, maliyet (#46).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Gaz kokusu alıyorsan kontrole başlama: gazı ana vanadan kes, pencereleri aç, binadan çık ve dışarıdan gaz dağıtım şirketini ara."
  - "Doğalgazlı ocağın varsa bir gözü yakmayı dene."
  - "Ocak da yanmıyorsa daire dışındaki gaz vanasına bak; kapalıysa aç."
  - "Ocak yanıyorsa kombinin yanındaki gaz vanasının kolunun boruyla aynı hizada, yani açık olduğundan emin ol."
  - "Kombinin manometresinden su basıncını oku; 1 bar'ın altındaysa basıncı yükselt."
  - "Kombiyi bir kez sıfırla: kapatıp aç ya da kılavuzundaki reset yolunu kullan."
  - "227 ya da EA sürüyorsa kodu ve tip etiketindeki cihaz bilgisini not al, Bosch yetkili servisini ara."
faq:
  - q: "Bosch kombide 227 hatası ne demek?"
    a: "Bosch'un 227 sayfası kodu \"Alev Algılanmıyor\" diye tanımlıyor ve çözüm olarak gaz vanasının açık olup olmadığını kontrol etmeyi söylüyor. Condens 1200 W bakım kılavuzu da 227'yi \"Alev algılanmıyor\" satırında veriyor. Gaz vanası açık, su basıncı yerinde ve bir resetten sonra kod geri geliyorsa iş Bosch yetkili servisinindir."
  - q: "Bosch kombide 227 kodu ile EA aynı şey mi?"
    a: "Tanımları aynı: Bosch 227'yi \"Alev Algılanmıyor\", EA'yı alev algılanmaması sorunu olarak tanımlıyor. 227, Bosch'un listesinde Condens 2300i W altında; Condens 1200 W bakım kılavuzunun arıza tablosunda ve 2200i W montaj kılavuzunda da geçiyor. EA ise Bosch'un listesinde Condens 2500 W, Class ve Comfort gibi harfli kod kullanan modellerde. Condens 7000i W kullanma kılavuzu arıza kodu örneğini \"EA 227\" diye ikisi bir arada gösteriyor."
  - q: "Ekranda 227 ile birlikte ünlem (!) işareti var, ne yapmalıyım?"
    a: "Condens 1200 W ve 2300i W kılavuzlarına göre bazı arızalar kombiyi kapatır ve kombi sıfırlanmadan tekrar çalışmaz. Kılavuzdaki iki yol: kombiyi kapatıp yeniden çalıştırmak ya da kılavuzda gösterilen iki tuşu H ve ! sembolleri kaybolana kadar aynı anda basılı tutmak. Önce gaz vanasını ve su basıncını kontrol et, sonra bir kez sıfırla; kod geri gelirse servisi ara."
  - q: "227 hatası verince kombiye su basmak gerekir mi?"
    a: "Yalnız basınç düşükse. Bosch'un EA sayfası ideal aralığı 1,2–1,5 bar olarak veriyor ve basınç 1 bar'ın altındaysa su basılabileceğini söylüyor. Condens 1200 W, 2300i W, 2500 W ve 7000i W kılavuzlarına göre çalışma basıncı normalde 1 ila 2 bar arasındadır. 1200 W, 2300i W ve 7000i W kılavuzları suyun nasıl ilave edildiğini yetkili servisin göstermesini istiyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin altındaki sarı kollu gaz vanası, kolu borusuyla aynı hizada; kombinin ekranında harfli bir arıza kodu"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda not defteri ve kalem"
---

Bosch kombinin ekranında **227** yanıp sönüyor, yanında belki **H** ya da **!** var; harfli ekranlı modellerde aynı arıza **EA** olarak çıkıyor. Kısa cevap: Bosch'un 227 sayfası kodu **"Alev Algılanmıyor"**, EA sayfası **"alev algılanmaması sorunu"** diye tanımlıyor. Bosch'un sırası net: önce gaz vanası, sonra su basıncı, ikisi de yerindeyse yetkili servis.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 227 / EA = Bosch'a göre alev algılanmıyor. Sıra şu: gaz kokusu varsa önce güvenlik → ocağı yakmayı dene → dış vana ya da kombinin gaz vanası → manometreden basınç → bir kez reset → kod sürüyorsa Bosch yetkili servis.

## Modeline göre ekranda ne görünür

Bosch'un arıza kodları sayfası ve Türkçe kılavuzlar kodu şöyle gösteriyor:

| Model | Ekranda | Belge |
|---|---|---|
| Condens 2300i W | **227**; arızada **H**, sıfırlama gerekince **H ve !** | Bosch kod listesi · kullanma kılavuzu |
| Condens 1200 W | **227** "Alev algılanmıyor"; **H ve !** | bakım ve kullanma kılavuzu |
| Condens 2200i W | **H** ve arıza kodu; kılavuz örnekleri **214** ve **227** | kullanma ve montaj kılavuzu |
| Condens 7000i W | **H** sembolü, örnek kod **"EA 227"** | kullanma kılavuzu |
| Condens 2500 W | **H**, bazen **!**, **EA** yanıp söner | kullanma kılavuzu |
| Comfort Condense, Class 2000 W ve 6000 W, Classic Silver, ClassicPlus, Exclusive, Comfort | **EA** | Bosch kod listesi |

Modelini kumanda paneli kapağındaki **tip etiketinden** öğrenirsin. Ekranındaki diğer işaretler için: [Bosch kombi sembolleri](/blog/bosch-kombi-sembolleri-ve-anlamlari/).

## 227 neden kendiliğinden gidip geliyor

Condens 1200 W bakım kılavuzu 227'yi iki sınıfta veriyor. Önce **blokaj hatası** olarak çıkar: kombi bir süre kapanır, neden ortadan kalkınca kendiliğinden yeniden çalışır. Kılavuza göre 227, **5. ateşleme denemesinden sonra** kilitleyici arızaya dönüşür; bu durumda kombi sıfırlanmadan çalışmaz. Kod bir görünüp bir kayboluyorsa da kontrollere aynı sırayla başla.

## Önce güvenlik: gaz kokusu varsa

Bosch'un Condens 1200 W, 2300i W, 2500 W ve 7000i W kılavuzları gaz kokusunda şunu istiyor: sigara, çakmak ve kibrit kullanma; elektrik şalterine, fişe, telefona ve kapı ziline dokunma; gazı **ana kapama tertibatından** ya da **gaz sayacındaki vanadan** kes; pencere ve kapıları aç, apartman sakinlerini uyar ve binayı terk et; binanın dışından **itfaiyeyi, polisi ve gaz dağıtım şirketini** ara. Koku yoksa aşağıdaki adımlara geç.

## Adım adım: evde denenecekler

**1. Gaz kokusunu ele.** Kombinin çevresinde gaz kokusu varsa bu yazıdaki hiçbir kontrole başlama; yukarıdaki güvenlik listesini uygula: gazı ana vanadan kes, pencereleri aç, binadan çık ve dışarıdan gaz dağıtım şirketini ara.

**2. Ocağı yakmayı dene.** Bosch'un EA sayfası gaz vanasını evdeki doğalgazlı cihazlarla kontrol etmeyi öneriyor. Doğalgazlı ocağın varsa bir gözü yakmayı dene. Bosch'un bir sonraki adımı ocağın yanıp yanmamasına göre ayrılıyor.

**3. Ocak yanmıyorsa dış vanaya bak.** Bosch'a göre ocak da çalışmıyorsa **daire dışındaki gaz vanasını** kontrol et; kapalıysa açık duruma getir. Ocağın kendi sorunları için: [doğalgazlı ocak neden yanmaz](/blog/dogalgazli-ocak-neden-yanmaz/).

**4. Ocak yanıyorsa kombinin gaz vanasına bak.** Bosch'un EA sayfasındaki ölçüt: kombinin yanındaki gaz vanası **boruyla aynı hizada** olmalı, o zaman açıktır. Condens 1200 W, 2300i W ve 7000i W kılavuzları aynı vanayı şöyle anlatıyor: **kol akış yönündeyse açık**, akış yönüne **enine** duruyorsa kapalı. Vana kapalıysa kılavuzdaki tarif: kolu **bastır ve sola doğru sonuna kadar çevir.** Vananın yeri ve görünüşü için: [kombi gaz vanası](/blog/kombi-gaz-valfi-ve-vanasi/).

**5. Su basıncını oku.** Gaz vanası açıksa Bosch'un ikinci kontrolü su basıncı. Basıncı kombinin **manometresinden** okursun. Bosch'un EA sayfası ideal aralığı **1,2–1,5 bar** olarak veriyor; Condens 1200 W, 2300i W, 2500 W ve 7000i W kılavuzlarında çalışma basıncı normalde **1 ila 2 bar** arasında. Basınç **1 bar'ın altındaysa** EA sayfası kombiye su basılmasını söylüyor; nasıl yapılacağı modele göre değişiyor, ayrıntısı aşağıda.

**6. Bir kez sıfırla (reset).** Kılavuzlara göre bazı arızalar ısıtma tesisatını kapatır ve tesisat sıfırlanmadan tekrar çalışmaz. Reset yolu modele göre değişiyor:

- **Condens 1200 W ve 2300i W:** kombiyi kapatıp yeniden çalıştır ya da kılavuzda gösterilen iki tuşu, **H ve !** sembolleri kaybolana kadar aynı anda basılı tut.
- **Condens 7000i W:** cihazı kapatıp aç ya da ekranda **"Sıfırla"** görünene kadar **reset tuşuna** bas.
- **Condens 2500 W:** ekranda **H ve !** varsa kılavuzda gösterilen tuşa, iki sembol kaybolana kadar basılı tut; **yalnız H** varsa cihazı açma-kapama tuşuyla kapatıp yeniden çalıştır.

Kombi yeniden çalışınca ekranda gidiş suyu sıcaklığı görünür. Model model ayrıntı: [Bosch kombi resetleme](/blog/bosch-kombi-resetleme/).

**7. Kod sürüyorsa servisi ara.** Gaz vanası açık, basınç yerinde ve 227 ya da EA hâlâ geliyorsa Bosch'un EA sayfasına göre kombinin bazı parçalarında arıza yaşanmış olabilir; Bosch yetkili servisine ulaş. Kılavuzlar servisi ararken **gösterilen arıza kodunu ve cihaz bilgilerini** bildirmeni istiyor.

## Su basıncı düşükse: modele göre tarif

- **Bosch'un EA sayfası:** kombinin altındaki **su takviye musluğunu saat yönünün tersine** çevir, basıncı 1,2–1,5 bar'a getir.
- **Condens 2500 W kılavuzu:** doldurma ünitesi cihazın **alt tarafında**; doldurma vanasını aç, manometre **1 ile 2 bar** arası gösterince **tekrar kapat.**
- **Condens 1200 W, 2300i W ve 7000i W kılavuzları:** doldurma **tesisata göre farklılık gösterir**; yetkili servisten nasıl yapıldığını **göstermesini iste.** Tesisatı **yalnız soğukken** doldur (gidiş suyu en fazla 40 °C).

Kılavuzlarda ortak üst sınır **3 bar**; aşılırsa emniyet ventili açılır. Markadan bağımsız anlatım: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

## Servis neye bakar

Condens 1200 W bakım kılavuzu, 227'de gaz valfinin açık olup olmadığından sonra yetkili servisin kontrol edeceği noktaları sayıyor: **gaz bağlantı basıncı, iyonizasyon sinyali, şebeke bağlantısı, elektrotlar ve kabloları, atık gaz donanımı, gaz/hava oranı, ısı bloğu, gaz valfi ve brülör ayarı.** Bunların hepsi kombinin içinde; kılavuzlar dış sacın **asla sökülmemesini** istiyor. Bu liste 1200 W'nin; diğer modellerin servis belgeleri ayrı.

Bosch, kesin tespit için **Müşteri İletişim Merkezi**ni (444 24 74) de gösteriyor.

## Servisi aramadan önce kısa kontrol

1. Ekrandaki kod 227 mi, EA mı, yanında H ya da ! var mı?
2. Ocak yanıyor mu?
3. Kombinin gaz vanasının kolu boruyla aynı hizada mı?
4. Manometre kaç bar gösteriyor?
5. Reset bir kez denendi mi, kod geri geldi mi?

Markadan bağımsız anlatım için: [kombi yanmıyor](/blog/kombi-yanmiyor/). Bosch'un bütün kodları: [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/). Buderus kombide aynı numaralı kod için: [Buderus kombi 227 hatası](/blog/buderus-kombi-227-hatasi/).

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
