---
title: "Ariston kombi resetleme nasıl yapılır"
description: "Ariston kombi resetleme: RESET tuşu hangi durmada işe yarar, 15 dakikada 5 deneme sınırı, basınç doldurma ve servis anı. CLAS One ve Clas X kılavuzu."
slug: "ariston-kombi-resetleme"
date: "2026-10-24"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "ariston" slug'ı ve başlığı yok (ferroli-kombi-ariza-kodlari provenansında Ariston'un belge bulunamadığı notu var; hotpoint-* yazıları beyaz eşya, başka marka/ürün).
# Arama kanıtı (bu koşu, suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot-kanit.txt): "ariston kombi r" → 1. resetleme, 2. resetleme yapmıyor, 3. reset hatası;
#   "ariston kombi reset" → aynı ilk üç; "ariston kombi" → 6. resetleme. GSC: satır yok (www-3..6 Sorgular.csv'de "ariston" yok).
# Belge zinciri: Ariston İtalya resmî ürün sayfası (200) → aynı alan adında PDF (200 application/pdf); ayrıca https://www.ariston.com/it-it/download sayfasının dizini
#   https://www.ariston.com/it-it/product-downloads-index.json (200). TR indirme alanı (ariston.com/tr-tr/indirme-alani) bu koşuda yalnız JS model kodu arama kutusu gösterdi, PDF bağlantısı vermedi.
#  (A1) CLAS One kullanım kılavuzu IT, 12 s., …/boilers/condensation/clas-one/manuale-uso-clas-one.pdf md5 e53e196bcb92c98604f6c57482cc50a7
#  (A3) Genus One Net kullanım kılavuzu IT, 20 s., …/boilers/condensation/genus-one-net/manuale-uso-genus-one-net.pdf md5 ffb6e0a34620675fdaef9532a1006d51
#  (A8) CLAS X CF kullanım kılavuzu IT, 12 s., …/boilers/traditional/clas-x-cf/manuale-uso-clas-x.pdf md5 4fa29bc030be46e1da6376b9e1197422
#  Bu koşuda (13:11 +03) ürün sayfaları ve PDF'ler curl ile yeniden ölçüldü, md5 -q ile _kaynak kopyalarıyla aynı.
# BİLEREK YAZILMAYANLAR: fişi çekme/sigorta indirme gibi belgede olmayan sıfırlama yolları · "reset ışığı" ve "reset düğmesi nerede" için kılavuzdaki simge çizimi (metinde simge adı yok, yalnız "RESET basma isteği" diye tarif ediliyor) · 104/105 gibi tekil kodların ayrı anlamı (tabloda 103–107 hep "yetersiz sirkülasyon") · kart (3xx) teşhisi · Türkiye modellerine özgü panel · fiyat (#46).
# Alıntı denetimi: ariston-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanım kılavuzu"]
steps:
  - "Güçlü gaz kokusu, yanık kokusu ya da duman varsa resetlemeye çalışma; gaz vanasını kapat, pencereleri aç ve teknisyene haber ver."
  - "Ekrandaki kodu ve yanındaki simgeyi not al."
  - "Kod kendiliğinden kalkan bir güvenlik durmasıysa bekle; nedeni geçince kombi kendisi yeniden çalışır."
  - "Kod su eksikliğini gösteriyorsa reset yerine kılavuzdaki doldurma yolunu uygula ve basıncı soğuk tesisatta 0,6 ile 1,5 bar arasına getir."
  - "Kod kendiliğinden kalkmıyorsa paneldeki RESET tuşuna bir kez bas."
  - "Kod geri geliyorsa art arda basma; kombi on beş dakikada en fazla beş denemeye izin veriyor."
  - "Sorun sürerse kombiyi kapat, dış şalteri kapalıya al, gaz vanasını kapat ve yetkili servisi ara."
faq:
  - q: "Ariston kombide reset tuşu hangisi?"
    a: "CLAS One ve Clas X kullanım kılavuzlarının kontrol paneli listesinde 7 numaralı tuş RESET tuşu. Genus One Net'te RESET tuşu 8 numarada. Türkiye'de satılan modellerde panel düzeni farklı olabilir; kendi kılavuzuna bak."
  - q: "Resetledim ama kombi yine durdu, kaç kez deneyebilirim?"
    a: "Kılavuza göre kombi güvenlik nedeniyle on beş dakika içinde en fazla beş sıfırlamaya izin veriyor. Birkaç denemeden sonra sorun tekrar ediyorsa Ariston bir teknisyen çağırmanı istiyor. Tek seferlik bir durma ise kılavuza göre sorun değil."
  - q: "Ariston kombi resetleme yapmıyor, neden?"
    a: "Kod kendiliğinden kalkan türdense RESET tuşu bir işe yaramaz; nedeni geçince kombi kendi kalkar. Su eksikliği kodunda çözüm doldurmadır. Genus One Net'te panel tuş kilidiyle kilitlenmiş olabilir; kılavuza göre 10 numaralı tuşa bir kez daha basınca kilit açılıyor. Bunlar değilse ve kod sürüyorsa servis."
  - q: "Ekranda 501 yazıyor, ne demek?"
    a: "Ariston'un hata tablosunda 501 alev yokluğu demek. Kılavuz kilitlenme türündeki durmaya örnek olarak Err/501'i veriyor: kombi kendiliğinden yeniden çalışmıyor, ancak RESET tuşuyla açılıyor. Birkaç denemeden sonra tekrar ediyorsa teknisyen."
  - q: "Ekranda 108 çıkıyor, resetlemek yeter mi?"
    a: "Hayır. CLAS One tablosunda 108 su eksikliği, yani doldurma isteği. Kılavuz doldurma musluğunu açıp MODE tuşuna beş saniye basmanı, basınç 0,6 ile 1,5 bar arasına gelince musluğu kapatıp MODE'a yeniden basmanı söylüyor. Basınç sık düşüyorsa tesisatta su kaçağı olabilir; kılavuz tesisatçı çağırmanı istiyor."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin ekranlı kumanda paneli"
  steps:
    - "Açık bir mutfak penceresi ve önünde boş bir tezgâh"
    - "Kombi ekranında yanıp sönen kısa bir uyarı yazısı"
    - "Duvarda sessizce bekleyen beyaz bir kombi"
    - "Kombinin altında borular arasında duran küçük bir doldurma musluğu"
    - "Kombinin kumanda panelinde yuvarlak bir tuşun yakın planı"
    - "Duvarda asılı bir saat ve altında kapalı duran bir kombi"
    - "Kombinin altında kapatılmış bir gaz vanası ve duvardaki şalter"
---

Ariston kombinin ekranında bir kod belirdi, kombi durdu ve RESET tuşuna basmak işe yaramadı ya da kod hemen geri geldi. Ariston'da her durma reset istemiyor: kılavuz iki tür durmayı ayırıyor ve RESET tuşu yalnız birinde işe yarıyor. Bu yazıda Ariston'un CLAS One, Genus One Net ve CLAS X CF kullanım kılavuzlarındaki sırayı topladık. Kılavuzun İtalyanca baskısı, alıntılar Türkçeye çevrildi. Türkiye'de satılan modelde panel ve tuş numaraları farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gaz kokusu varsa reset yok. Kodu not al. Kendiliğinden kalkan durmada bekle. Su eksikliğinde reset değil doldurma. Kalkmayan kilitlenmede RESET tuşuna bir kez bas. On beş dakikada beşten fazla deneme yok. Kod dönüyorsa kapat, şalteri ve gazı kapat, servisi ara.

## Hangi durma ne ister

| Ekranda gördüğün | Kılavuzdaki yol | Kim |
|---|---|---|
| **Kod yanıp sönüyor, sonra kendisi kalkıyor** | Bekle; kombi kendisi yeniden çalışır | ⏳ Bekle |
| **Su eksikliği (108)** | Doldurma musluğu ve MODE tuşu, 0,6–1,5 bar | 🛠️ Sen |
| **Kod kalkmıyor, RESET isteği var (ör. Err/501)** | RESET tuşuna bir kez bas | 🛠️ Sen |
| **Kod birkaç denemeden sonra geri geliyor** | Kombiyi kapat, şalter ve gaz vanası | 🔧 Servis |
| **Kart hatası (305, 306, 307)** | — | 🔧 Servis |

## Adım adım: Ariston kombiyi sıfırlama

**1. Koku ya da duman varsa reset yok.** Ariston'un güvenlik kurallarına göre güçlü gaz kokusu alırsan ana gaz vanasını kapat, pencereleri aç ve teknisyene haber ver. Yanık kokusu alırsan ya da kombiden duman çıktığını görürsen elektriğini kes, ana gaz vanasını kapat, pencereleri aç ve teknisyene haber ver. Bu durumda sıfırlama denemesi yapılmaz.

**2. Kodu oku.** Kılavuza göre kombi kendini elektronik kartıyla koruyor; bir durma olunca ekranda durmanın türünü ve sebebini gösteren bir kod çıkıyor. Tablodaki başlıca kodlar şunlar: **101** aşırı ısınma, **501** alev yokluğu, **103–107** yetersiz su sirkülasyonu, **108** su eksikliği, **305–307** kart hatası. Kodu yaz; neye basacağını ve servise ne söyleyeceğini buna göre bileceksin. Genel kod listesi [kombi arıza kodları](/blog/kombi-ariza-kodlari/) sayfasında.

**3. Kendiliğinden kalkan durmada bekle.** Kılavuz ilk türe **güvenlik durması** diyor ve bunu "geçici" diye tanımlıyor: sebebi ortadan kalkınca kod kendiliğinden siliniyor, kombi yeniden çalışıp normal işleyişine dönüyor. Bu türde RESET tuşuna basmana gerek yok. Kombi aynı durmayı göstermeye devam ederse kılavuzun talimatı açık: kombiyi kapat, dış şalteri kapalı konuma al, gaz vanasını kapat ve yetkili bir teknisyene haber ver.

**4. Su eksikliğinde doldur, resetleme.** Basınç yetersizse kombi yine bir güvenlik durması veriyor. Çözüm sıfırlama değil, tesisata su eklemek. CLAS One'ın tarifi: kombinin altındaki **doldurma musluğunu aç ve MODE tuşuna beş saniye bas**; ekranda "PURGE" ya da "AIRPURGE ATTIVA" yazısı çıkıyor, Genus One Net'te tesisatın havasını alma yazısı. Göstergede basınç **0,6 ile 1,5 bar** arasına gelince musluğu kapat ve MODE'a yeniden bas. Basınç değeri tesisat soğukken okunuyor. Doldurma sık gerekiyorsa kılavuz tesisatta su kaçağı olabileceğini yazıyor ve tesisatçı çağırmanı istiyor. Ayrıntı [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

**5. Kalkmayan kilitlenmede RESET'e bas.** İkinci tür **çalışma kilitlenmesi**. Kılavuza göre bu tür "kalıcı": kod kendiliğinden silinmiyor, ekranda Err/501 gibi bir kod ve RESET basma isteği görünüyor, kombi ancak RESET tuşuyla yeniden açılıyor. CLAS One ve Clas X panelinde RESET 7 numaralı tuş, Genus One Net'te 8 numaralı tuş. Genus One Net ekranında basınca önce sıfırlamanın sürdüğünü, sonra hatanın giderildiğini gösteren yazılar çıkıyor.

**6. Art arda basma.** Kılavuzun sınırı net: kombi güvenlik nedeniyle **on beş dakika içinde en fazla beş sıfırlamaya** izin veriyor. Tek seferlik bir kilitlenme kılavuza göre sorun değil; ama birkaç denemeden sonra aynı kod dönüyorsa teknisyen gerekiyor. "Resetleme yapmıyor" diyorsan iki olasılığa da bak: kod belki ilk türdendir ve tuş onu kaldırmaz; ya da Genus One Net'te panel kilitlidir. Kılavuza göre 10 numaralı tuş paneli kilitliyor, aynı tuşa yeniden basınca kilit açılıyor.

**7. Sürüyorsa kapat ve servisi ara.** Ariston'un genel kuralı: arıza ya da kötü çalışmada cihazı kapat, gaz vanasını kapat ve **onarmaya çalışma**, yetkili kişiye başvur. Tamamen kapatmak için ON/OFF yetmiyor; kılavuz dış şalteri kapalı konuma alıp gaz vanasını kapatmanı söylüyor. Servise ekrandaki kodu ve kombinin modelini söyle.

## Clas X CF'de duman kodu

Bacalı Clas X CF'nin tablosunda ayrıca **601** duman sondası kodu var. Bu kod kılavuza göre geçici bir durma; kombi on iki dakika sonra kendisi yeniden yakmayı deniyor. Bu kodda RESET ile uğraşma; ne yapacağın [Ariston kombi baca işareti yanıyor](/blog/ariston-kombi-baca-isareti-yaniyor/) yazısında.

## Ne zaman servis

- Aynı kod birkaç sıfırlamadan sonra geri geliyorsa
- Güvenlik durması kendiliğinden kalkmıyor ve tekrar ediyorsa
- Su sık sık eksiliyorsa
- Ekranda 305, 306 ya da 307 kart hatası varsa
- Gaz, yanık kokusu ya da duman varsa

⛔ **Kendin-çöz sınırı burada biter.** Ekranı okumak, RESET tuşu, doldurma musluğu, dış şalter ve gaz vanasının kolu sende. Kılavuz cihazı açmanı gerektiren her işi yasaklıyor; kombinin içi, gaz hattı ve elektrik bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne?
2. Ekranda hangi kod var, kendiliğinden kalkıyor mu?
3. RESET'e kaç kez bastın, kod döndü mü?
4. Soğuk tesisatta basınç kaç bar?
5. Gaz vanası açık mı, ortamda koku var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
