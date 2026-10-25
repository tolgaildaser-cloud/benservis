---
title: "Alarko kombi resetleme: hangi düğme, hangi kod"
description: "Alarko kombi resetleme: Seradens'te konum düğmesi, Super Fit ve Smart Fit'te ayrı Reset düğmesi. Hangi kodda reset işe yarar, hangisinde servis gerekir."
slug: "alarko-kombi-resetleme"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, fork D). origin/main'de alarko-kombi-resetleme ve Alarko hata kodları hub'ı yok;
#   alarko-kombi-e01/e04/e47-hatasi ve alarko-kombi-kalorifer-isitmiyor var. E01 sayfasının bir SSS'i E01'e özel resetten söz ediyor; bu yazı
#   bütün modellerde reset düğmesini ve kod bazında reset sınırını anlatır, E01/E04/E47 ayrıntısını tekrar etmez, onlara bağlanır.
# Arama kanıtı (#164, bu koşuda OT, 25 Eki 08:47): "alarko kombi" → 3. "alarko kombi resetleme"; "alarko kombi r" → 1. "…resetleme",
#   3. "…resetleme yapmıyor", 4. "…reset tuşu"; "alarko kombi reset" → 1. "…resetleme", 2. "…resetleme yapmıyor", 3. "…reset tuşu",
#   5. "alarko serena kombi resetleme", 6. "alarko seradens kombi resetleme". GSC (www-5/www-6): Alarko reset satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (HTTP 200 application/pdf). Zincir: alarko-carrier.com.tr/urun/kombi/<model> (200) →
#   Data/Files/Dokumanlar/kullanim-kilavuzu/<pdf> (200). pdftotext -layout, sayfa = PDF sayfası.
#  (S) Seradens Super SRS, Rev. 6/02/2026, 64 s.  …/alarko-kombi-srs-kk-2026-tr.pdf  md5 7b43539c6e752eace53915dbb79ebadb
#  (P) Seradens Super Plus SSP, 67 s.  …/alarko-kombi-ssp-kk-2026-tr.pdf  md5 aa8026bf7271673f6e005a0713b30fb5
#  (F) Super Fit 24/28/35, 62 s.  …/alarko-super-fit-kombi-kk-tr.pdf  md5 f67df03703d208474557f26e19b067f8
#  (M) Smart Fit 25/30/35, 65 s.  …/alarko-kombi-smf-kk-2026-tr.pdf  md5 da6397825df81590a9f389cfdc6be5da
# Panel S s.13, P s.13, F s.14, M s.14 · hata bölümü giriş + genel kural S s.18, F s.18, M s.19 · E01 S s.18, M s.19 · E44 S s.18 · E04/E46/E47 S s.18-19 ·
#   kod listesi S s.19-20 · PnP run F s.18 · ekran ikon 5 Reset S s.39 · gaz sızıntısı S s.10 · uzun süre kullanmama S s.20.
# DİKKAT: P s.16'da pdftotext'in verdiği "2.5.5 RESET DÜĞMESİ … 3 ateşleme denemesi" metni sayfa görüntüsünde GÖRÜNMÜYOR (gizli katman);
#   pdftoppm ile doğrulandı, yazıda KULLANILMADI.
# BİLEREK YAZILMAYANLAR: reset sayısı sınırı (kılavuzda sayı yok, yalnız "tekrar ederse servis") · Smart Fit kilit düğmesinin kullanımı (kılavuzda yalnız
#   panel etiketi) · Serena/Trendy gibi eski modeller (bu koşuda kılavuz bulunamadı) · kart/sensör teşhisi · müşteri hattı numarası · fiyat (#46).
# Alıntı denetim tablosu: alarko-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin montaj ve kullanım kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa resetleme; elektrik düğmelerine dokunma, gaz vanalarını kapat, kapı ve pencereleri aç, gaz şirketini 187'den ara."
  - "Ekrandaki kodu not al ve kılavuzun hata kodları bölümünde karşısında ne yazdığına bak."
  - "Kod E01 ise önce gaz sayacını ve kombinin altındaki gaz vanasını kontrol et."
  - "Kod E04 ya da E47 ise basıncı oku; basınç düzelince kombi resetsiz kendiliğinden çalışır."
  - "Modeline göre düğmeyi bul: Seradens'te çalışma konumu düğmesi, Super Fit ve Smart Fit'te panelde ayrı Reset düğmesi var."
  - "Kılavuzun tarif ettiği işlemi bir kez yap, kombinin kendini ateşlemesini bekle."
  - "Kod geri geliyorsa ya da karşısında yetkili servisi arayın yazıyorsa resetlemeyi bırak ve servisi ara."
faq:
  - q: "Alarko kombinin reset tuşu nerede?"
    a: "Modele göre değişiyor. Seradens Super ve Seradens Super Plus'ta ayrı bir reset tuşu yok; 1 numaralı çalışma konumu düğmesi hata durumunda sıfırlama düğmesi olarak çalışıyor. Super Fit ve Smart Fit'in kumanda panelinde ise 2 numaralı ayrı bir Reset düğmesi bulunuyor."
  - q: "Alarko kombi resetleme yapmıyor, neden?"
    a: "Kodun türüne bak. Kılavuzlarda E02, E03, E05, E06, E16, E22 gibi pek çok kodun karşısındaki talimat yalnız 'Yetkili servisi arayın'. Bu kodlarda reset evde çözüm değil. E04 ve E47 gibi basınç kodlarında ise reset gerekmez: basınç 1,2 bara gelince kombi kendiliğinden yeniden çalışır."
  - q: "Elektrik gidip gelince ekranda PnP run yazıyor, reset atmalı mıyım?"
    a: "Hayır. Super Fit ve Smart Fit kılavuzlarına göre cihaz ilk devreye girerken ve her elektrik kesintisinden sonra güvenli çalışma için yaklaşık 3 dakika süren bir hava atma işlevi çalışır. Bu sırada ekranda PnP run yazar; bitince kombi normal çalışır."
  - q: "Kaç kez reset atabilirim?"
    a: "Alarko kılavuzlarında bir sayı yok. E01 için talimat kombiyi kapatıp açmak, E01 yeniden görünürse bir kez daha kapatıp açmak. Genel kural da yazılı: anlatılan işlemler yapıldıktan sonra sorun tekrar meydana gelirse yetkili servisi arayın."
  - q: "E46 kodunda ne yapmalıyım?"
    a: "E46, Seradens Super kılavuzunda basınç sensörü arızası. Talimat: 1 numaralı düğmeye 2 saniye basarak sistemi yeniden kurun, hata devam ederse yetkili servisi arayın."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombinin kumanda paneli ve küçük ekranı"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Kombi ekranında beliren küçük bir uyarı simgesinin yakın planı"
    - "Kombinin altında borular arasında duran sarı kollu bir gaz vanası"
    - "Kombinin altında yuvarlak kadranlı bir basınç göstergesi"
    - "Beyaz bir kombinin kumanda panelindeki düğme sırasının yakın planı"
    - "Kombi ekranında beliren küçük bir alev simgesinin yakın planı"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve yanında bir not kâğıdı"
---

Ekranda bir kod belirdi, kombi durdu ve aklına ilk gelen reset tuşu. Alarko'nun dört güncel kılavuzunda (Seradens Super, Seradens Super Plus, Super Fit, Smart Fit) resetin iki farklı yolu var: bazı modellerde ayrı bir Reset düğmesi, bazılarında ise çalışma konumu düğmesinin kendisi. Daha önemlisi, kılavuzlar her kodun karşısına ne yapılacağını yazıyor ve kodların çoğunda reset evde çözüm değil. Bu yazıda hangi modelde hangi düğmeye basılacağını ve hangi kodda resetin işe yaradığını kılavuzlardan topladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kodu oku. E01'de gaz vanasına bak, kombiyi kapatıp aç. E04 ve E47'de reset gerekmez; basınç 1,2 bara gelince kombi kendiliğinden çalışır. Karşısında "yetkili servisi arayın" yazan kodlarda reset yerine servis.

## Hangi modelde hangi düğme

| Model | Reset için | Kılavuzdaki ifade |
|---|---|---|
| **Seradens Super (SRS)** | 1 numaralı çalışma konumu düğmesi | "hata durumunda sıfırlama (reset) düğmesi olarak işlev görür" |
| **Seradens Super Plus (SSP)** | 1 numaralı çalışma konumu düğmesi | Aynı ifade |
| **Super Fit** | 2 numaralı Reset düğmesi | Panelde ayrı düğme |
| **Smart Fit** | 2 numaralı Reset düğmesi; ayrıca 8 numaralı On/Off | Panelde ayrı düğme |

## Kod bazında: reset işe yarar mı

| Kod | Anlamı | Kılavuzun talimatı |
|---|---|---|
| **E01** | Alev yok veya sahte alev | 🛠️ Gaz vanası, kapatıp açma |
| **E04** | Düşük tesisat suyu basıncı | 🛠️ Basıncı 1,2 bara tamamla; kombi kendiliğinden çalışır |
| **E47** | Yüksek tesisat suyu basıncı | 🛠️ Basıncı 1,2 bara indir; kombi kendiliğinden çalışır |
| **E44** | Eşanjör sensörü arızası | 🛠️ Cihazı resetle |
| **E46** | Basınç sensörü arızası | 🛠️ 1 numaralı düğmeye 2 saniye bas; sürerse servis |
| **E02, E03, E05, E06, E16, E22, E32, E35, E62, E98, E99** | Çeşitli arızalar | 📞 Yetkili servisi arayın |

## Adım adım: resetlemeden önce ve resetlerken

**1. Gaz kokusu var mı?** Varsa resetleme. Alarko'nun sırası: sakin ol, yanan ateşleri söndür, kapı ve pencereleri aç, gazlı cihazların ve daire girişindeki gaz vanalarını kapat. Elektrik düğmeleriyle oynama, fiş çekme ya da takma, zil ve telefon kullanma. Gaz şirketini 187'den, itfaiyeyi 110'dan haber ver.

**2. Kodu not al.** Kılavuzların hata kodları bölümü, her kodun belirtisini ve kombiyi yeniden kurmak (reset) için **kullanıcının yapabileceği işlemleri** listeliyor. Kodun karşısında ne yazdığı, resetin işe yarayıp yaramayacağını söyler. Kodu yazmadan reset atarsan servise anlatacak bilgiyi kaybedersin.

**3. E01: önce gaz.** Kılavuz önce gaz sayacını ve kombi üzerindeki gaz vanasını kontrol etmeni, şebekeden gaz geldiğinden emin olmanı istiyor. Kılavuza göre bu hata daha çok uzun süre gaz girişi olmayan cihazlarda görülüyor ve gaz verilince birkaç ateşleme denemesinden sonra kombi kendini çalıştırıyor. Ayrıntı [Alarko kombi E01 hatası](/blog/alarko-kombi-e01-hatasi/) yazısında.

**4. E04 ve E47: reset gerekmez.** İki kod da tesisat basıncıyla ilgili. Kılavuzun iki kod için de son cümlesi aynı: basınç 1,2 bar değerine geldiğinde **kombi otomatik olarak yeniden çalışacaktır**. Seradens Super'de basınç bilgi menüsündeki ı00 satırından, Super Fit'te ön kapaktaki manometreden okunur. Basıncı tamamlama ve indirme adımları [Alarko kombi E04 hatası](/blog/alarko-kombi-e04-hatasi/) ve [Alarko kombi E47 hatası](/blog/alarko-kombi-e47-hatasi/) sayfalarında.

**5. Düğmeyi bul.** Seradens Super ve Seradens Super Plus'ta ayrı bir reset tuşu arama: 1 numaralı **çalışma konumu düğmesi** Yaz, Kış, Sadece Isıtma ve Kapalı konumları arasında geçer ve hata durumunda sıfırlama düğmesi olarak çalışır. Super Fit ve Smart Fit'in panelinde 2 numaralı ayrı bir **Reset** düğmesi var. Seradens Super'in ekranında ayrıca bir Reset ikonu bulunuyor.

**6. İşlemi bir kez yap.** E01 için talimat: kombiyi panelden kapat, tekrar aç ve kendini ateşlemesini bekle; Seradens ve Super Fit'te bu 1 numaralı düğmeyle, Smart Fit'te 8 numaralı On/Off düğmesiyle yapılıyor. E01 yeniden görünürse bir kez daha kapatıp aç. E46'da talimat 1 numaralı düğmeye 2 saniye basmak, E44'te cihazı resetlemek. Kod kaybolunca kombi tekrar çalışır.

**7. Kod geri geliyorsa dur.** Kılavuzun genel kuralı açık: anlatılan işlemler yapıldıktan sonra problem tekrar meydana gelirse yetkili servisi arayın. Kodun karşısında zaten "yetkili servisi arayın" yazıyorsa resetle uğraşma; kodu ve modeli servise bildir.

## Reset sanılan durumlar

Super Fit ve Smart Fit, ilk devreye girerken ve her elektrik kesintisinden sonra güvenli çalışma için yaklaşık **3 dakika** süren bir hava atma işlevi çalıştırır; bu sırada ekranda **PnP run** yazar. Bu bir arıza değil, beklemek yeter. Ekranda **OFF** yazıyorsa kombi kapalı konumdadır; konum düğmesiyle Kış ya da Yaz konumunu seçmen gerekir. Kışın uzun süre evde olmayacaksan kılavuz kombiyi bekleme modunda, elektrik ve gaz bağlantısı açık bırakmanı söylüyor; donma koruması ancak böyle çalışır.

## Ne zaman servis

- Karşısında "yetkili servisi arayın" yazan bir kod sürekli yanıyorsa
- E01 iki kapatıp açmadan sonra geri geliyorsa
- E46 iki saniyelik basıştan sonra sürüyorsa
- Basınç sık sık düşüyorsa ya da yükseliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Panel düğmeleri, bilgi menüsü, gaz vanasının kolu ve basınç göstergesi sende; kombinin kapağının içi, gaz hattı, elektrik bağlantısı, sensörler ve kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Seradens Super, Super Plus, Super Fit, Smart Fit)?
2. Ekranda hangi kod var, sürekli mi yanıyor?
3. Reseti kaç kez denedin, kod geri geldi mi?
4. Gaz vanası açık mı?
5. Soğukken basınç kaç bar?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Petekler ısınmıyorsa [Alarko kombi petekleri ısıtmıyor](/blog/alarko-kombi-kalorifer-isitmiyor/), sıcak su gelmiyorsa [Alarko kombi su ısıtmıyor](/blog/alarko-kombi-sicak-su-vermiyor/) yazısına bak. Bil, gör, çağır.
