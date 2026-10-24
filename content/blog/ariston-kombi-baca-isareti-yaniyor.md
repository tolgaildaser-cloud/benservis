---
title: "Ariston kombi baca işareti yanıyor: ne yapmalı?"
description: "Ariston kombide baca işareti ya da 601 kodu duman tahliye arızası demek. On iki dakikalık bekleme, kapatma, şalter, gaz vanası ve servis; Clas X kılavuzu."
slug: "ariston-kombi-baca-isareti-yaniyor"
date: "2026-10-24"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "ariston" slug'ı ve başlığı yok; "baca işareti" başlığı yok.
#   Yakın: kombi-baca-borusu-ve-hortumu (genel baca yazısı; provenansında "Ariston … elimizde üretici belgesi yok" notu var). Bu yazı marka sorgusu: "ariston kombi baca işareti".
# Arama kanıtı (bu koşu, suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot-kanit.txt): "ariston kombi b" → 1. baca işareti yanıyor, 2. baca işareti, 4. baca işareti yanıp sönüyor;
#   "ariston kombi baca" → 1. baca işareti yanıyor, 2. baca işareti, 3. baca işareti yanıp sönüyor; "ariston kombi" → 8. baca işareti yanıyor. GSC: satır yok (www-3..6 Sorgular.csv'de "ariston" yok).
# Belge zinciri: Ariston İtalya resmî ürün sayfası https://www.ariston.com/it-it/prodotti/caldaie/tradizionali/clas-x-cf (200) → aynı alan adında PDF (200 application/pdf);
#   dizin https://www.ariston.com/it-it/product-downloads-index.json (200). TR indirme alanı bu koşuda yalnız JS model kodu arama kutusu gösterdi, PDF bağlantısı vermedi.
#  (A8) CLAS X CF kullanım kılavuzu IT, 12 s., …/boilers/traditional/clas-x-cf/manuale-uso-clas-x.pdf md5 4fa29bc030be46e1da6376b9e1197422
#  (A9) CLAS X CF kurulum ve bakım kılavuzu IT, 36 s., …/clas-x-cf/manuale-installazione-e-manutenzione-clas-x.pdf md5 be5f6da26a53c33cdf890f6995a47533
#  (A2) CLAS One kurulum ve bakım kılavuzu IT, 40 s. (C tipi tanımı), md5 bc581e31b6d7960cdeb8434245f8b6b8 · (A1) CLAS One kullanım kılavuzu (güvenlik), md5 e53e196bcb92c98604f6c57482cc50a7
#  (A4) FAST EVO X şofben kılavuzu IT, 76 s. (B tipi cihazda karbonmonoksit uyarısı), md5 ac71851811e4a6cdcc7d2afdc3fb0e12. Bu koşuda (13:11 +03) curl + md5 -q ile yeniden doğrulandı.
# Çıkarımlar (gövdede işaretli): paneldeki baca biçimli ışığın duman tahliye uyarısı olduğu · oda havalandırmasının kapatılmaması.
# BİLEREK YAZILMAYANLAR: baca borusu sökme/temizleme/uzatma, sensör (sonda fumi) kontrolü, CO2 ölçümü (A9'da montör işi) · Clas X belgesinde karbonmonoksit adı geçmiyor; CO uyarısı yalnız A4'ten ve kaynağıyla · CO dedektörü önerisi (belgede yok) · fiyat (#46).
# Alıntı denetimi: ariston-kombi-baca-isareti-yaniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanım kılavuzu"]
steps:
  - "Gaz kokusu, yanık kokusu ya da duman varsa beklemeden gaz vanasını kapat, pencereleri aç ve teknisyene haber ver."
  - "Kombinin bacalı mı yoksa dışarıdan hava alan kapalı hazneli bir model mi olduğunu kılavuzundan ya da etiketinden öğren."
  - "Ekrandaki kodu not al; Clas X CF'de duman sondası kodu 601."
  - "Kombiyi kendi hâline bırak; kılavuza göre on iki dakika sonra kendisi yeniden yakmayı dener."
  - "Kombinin bulunduğu odanın hava girişlerini ve havalandırmasını kapatma."
  - "Kod tekrar ediyorsa kombiyi kapat, dış şalteri kapalıya al, gaz vanasını kapat ve yetkili servisi ara."
  - "Baca borusuna, kombinin içine ve duman sondasına dokunma; bu işler yetkili servisin."
faq:
  - q: "Ariston kombide baca işareti ne demek?"
    a: "Clas X CF kullanım kılavuzunda baca şeklinde bir simge tarif edilmiyor; duman tahliye sorunu 601 koduyla ve hata simgesiyle gösteriliyor. Senin panelinde baca biçimli bir ışık yanıyorsa bunun duman tahliye arızası uyarısı olduğu bir çıkarım; kendi modelinin kılavuzuna bak."
  - q: "601 kodu kendiliğinden geçer mi?"
    a: "Kılavuza göre bu durma geçici: kombi on iki dakika sonra yeniden yakmayı deniyor. Koşullar normale döndüyse çalışmaya devam ediyor, dönmediyse yine duruyor ve döngü tekrarlanıyor. Durma sık ya da art arda geliyorsa kombiyi kapatıp servisi araman gerekiyor."
  - q: "Baca işareti yanıp sönüyor, bacayı kendim temizleyebilir miyim?"
    a: "Hayır. Ariston kullanıcıya cihazı açmayı ya da yerinden sökmeyi yasaklıyor; duman tahliye kusurunu gidermeyi servise veya yetkili teknisyene bırakıyor. Kılavuz duman sondasının hiçbir zaman devre dışı bırakılmaması gerektiğini, yoksa kullanıcı güvenliğinin tehlikeye gireceğini yazıyor."
  - q: "Benim kombim hermetik, bu yazı bana uyar mı?"
    a: "Kısmen. Clas X CF gibi bacalı kombiler yanma havasını kurulu oldukları odadan alıyor. C tipi denen kapalı hazneli modellerde yanma odası ve hava devresi odaya karşı sızdırmaz; havayı dışarıdan alıyor. Kendi kodunun anlamını kendi kılavuzundan oku; koku, duman ya da tekrar eden kodda yol aynı: kapat, gazı kapat, servis."
  - q: "Baca işareti yanarken kombiyi çalıştırmaya devam etmek tehlikeli mi?"
    a: "Clas X kılavuzu tekrar eden müdahalede kombiyi kapatmanı istiyor ve hatalı duman tahliyesinin zehirlenmeye yol açabileceğini yazıyor. Ariston'un bacalı Fast Evo X şofben kılavuzu da kötü çekişin yanma gazlarını odaya geri itebileceğini ve karbonmonoksit zehirlenmesi tehlikesini belirtiyor. Bu yüzden kod tekrar ediyorsa kombiyi kullanmaya devam etme."
images:
  coverAlt: "Duvara asılı beyaz bir kombi ve üstünden duvara giren metal baca borusu"
  steps:
    - "Ardına kadar açılmış bir pencere ve boş, aydınlık bir oda"
    - "Kombinin yan yüzündeki bilgi etiketi"
    - "Kombi ekranında yanan küçük bir uyarı simgesi"
    - "Duvarda sakin duran kombi ve yanında asılı bir saat"
    - "Bir mutfak duvarındaki açık havalandırma menfezi"
    - "Kombinin altında kapalı konumda bir gaz vanası ve duvarda bir şalter"
    - "Tavana doğru uzanan metal bir baca borusunun genel görünümü"
---

Ariston kombinin panelinde baca işareti yandı ya da ekranda 601 göründü, kombi durdu. Bu, duman tahliyesinde bir sorun olduğu anlamına geliyor. Kılavuz bunu geçici bir durma olarak anlatıyor, ama tekrar ederse kombiyi kapatmanı istiyor. Bu yazıda Ariston'un CLAS X CF kullanım ve kurulum kılavuzlarının kullanıcıya bıraktığı adımları topladık. Kılavuzun İtalyanca baskısı, alıntılar Türkçeye çevrildi. Türkiye'de satılan modelde panel ve simgeler farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Koku ya da duman varsa gazı kapat, pencereleri aç, teknisyene haber ver. Yoksa kodu not al ve kombiyi kendi hâline bırak; on iki dakika sonra kendisi yeniden dener. Odanın havalandırmasını kapatma. Kod tekrar ediyorsa kombiyi kapat, şalteri ve gazı kapat, servisi ara. Bacaya ve sensöre dokunma.

## Bacalı ve hermetik kombi farkı

| | Bacalı (Clas X CF, B11bs tipi) | Hermetik (C tipi) |
|---|---|---|
| **Yanma havası** | Kurulu olduğu odadan | Dışarıdan, kapalı devreyle |
| **Duman** | Doğal çekişle bacadan | Dış duvardan ya da çatıdan terminalle (C13, C33) |
| **Odanın havalandırması** | Şart; kılavuz uygun havalandırma olmayan odaya kurulamayacağını yazıyor | Kılavuza göre havalandırma ve oda hacmi sınırı yok |
| **Duman sorunu kodu** | 601 (duman sondası) | Modele göre değişir; kendi kılavuzuna bak |

Kurulum kılavuzu Clas X CF için şunu söylüyor: B11bs tipi cihazlar açık hazneli, yanma ürünlerini odanın dışına götüren bir bacaya bağlanıyor ve yanma havasını doğrudan kurulu oldukları odadan alıyor; duman çıkışı doğal çekişle. Ariston'un C tipi tanımı ise yanma odası ve hava devresi odaya karşı sızdırmaz olan cihazlar.

## Adım adım: Ariston kombide baca işareti

**1. Koku ya da duman varsa önce güvenlik.** Ariston'un güvenlik kurallarına göre güçlü gaz kokusu alırsan ana gaz vanasını kapat, pencereleri aç ve teknisyene haber ver. Yanık kokusu alırsan ya da kombiden duman çıktığını görürsen elektriğini kes, ana gaz vanasını kapat, pencereleri aç ve teknisyene haber ver.

**2. Kombinin tipini öğren.** Yukarıdaki tabloya bak. Bacalı kombide duman sorunu odanın havasını doğrudan ilgilendiriyor; kurulum kılavuzu hatalı duman tahliyesinin zehirlenmeye yol açabileceğini yazıyor. Modelin adı kılavuzunda ve cihazın etiketinde yazar.

**3. Kodu oku.** CLAS X CF'nin hata tablosunda **601 duman sondası müdahalesi** var. Kılavuz baca şeklinde bir simgeden söz etmiyor; panel açıklamasında hata simgesi ve teknik servis isteği simgesi var. Senin panelinde baca biçimli bir ışık yanıyor ya da yanıp sönüyorsa bunun duman tahliye arızası uyarısı olduğu bir **(çıkarım)**; kendi modelinin kılavuzundan doğrula.

**4. Kombiyi bekle.** Kılavuz bu durumu **geçici durma** diye anlatıyor: duman tahliyesinde anormallik olunca kontrol kombiyi durduruyor ve 601 kodunu gösteriyor. **On iki dakika sonra** kombi yeniden yakmayı deniyor; koşullar normale döndüyse çalışmaya devam ediyor, dönmediyse yine duruyor ve döngü tekrarlanıyor. Bu kod için kılavuz bir tuş tarif etmiyor. Diğer kodlarda RESET tuşunun ne zaman işe yaradığı [Ariston kombi resetleme](/blog/ariston-kombi-resetleme/) yazısında.

**5. Odanın havasını kesme.** Kullanım kılavuzunun ilk kuralı: kombi dairenin içine kuruluysa hava girişi ve oda havalandırmasıyla ilgili kurallara uyulduğunu kontrol et. Bacalı kombi yanma havasını odadan aldığı için bekleme sırasında ya da sonrasında o odanın hava girişlerini, menfezini kapatmamak bu kuraldan çıkan bir **(çıkarım)**. Kılavuz ayrıca kombinin bulunduğu odada kolay tutuşan madde kullanılmamasını ve saklanmamasını istiyor.

**6. Tekrar ederse kapat ve servisi ara.** Kılavuzun uyarısı büyük harflerle: arıza ya da **tekrarlanan müdahalelerde** kombiyi kapat, dış şalteri kapalı konuma alarak elektriğini kes, gaz vanasını kapat ve duman tahliyesindeki kusuru nedenini bularak gidermesi için servisi ya da yetkili bir teknisyeni ara. Servise ekrandaki kodu, kombinin modelini ve kodun ne sıklıkla geldiğini söyle.

**7. Neye dokunmayacağını bil.** Ariston kullanıcıya cihazı açmayı ve yerinden sökmeyi yasaklıyor. Kurulum kılavuzu duman sondası için açık: **bu cihaz hiçbir zaman devre dışı bırakılmamalı**, yoksa kullanıcının güvenliği tehlikeye girer. Ariston'un bacalı Fast Evo X şofben kılavuzu da kötü çekişin yanma gazlarını odaya geri itebileceğini ve **karbonmonoksit zehirlenmesi** tehlikesini yazıyor. Binada baca çevresinde iş yapılacaksa kılavuz kombiyi kapatmanı ve iş bitince bacanın verimini yetkili bir teknisyene kontrol ettirmeni istiyor. Bacanın genel yapısı [kombi bacası ve baca borusu](/blog/kombi-baca-borusu-ve-hortumu/) yazısında.

## Ne zaman servis

- 601 ya da baca işareti tekrar tekrar geliyorsa
- Kombi on iki dakikalık bekleme sonrası çalışmaya dönmüyorsa
- Odada gaz, yanık ya da duman kokusu varsa
- Binada baca çevresinde iş yapıldıysa

⛔ **Kendin-çöz sınırı burada biter.** Kodu okumak, beklemek, kombiyi kapatmak, dış şalter, gaz vanasının kolu ve odanın havalandırmasını açık tutmak sende. Baca borusu, duman sondası, yanma odası ve kombinin içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne, bacalı mı?
2. Ekranda hangi kod ya da simge var?
3. On iki dakika bekledin mi, kombi yeniden çalıştı mı?
4. Kod ne sıklıkla geliyor?
5. Odada koku ya da duman var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
