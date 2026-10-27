---
title: "DemirDöküm kombi F28 hatası: ne demek, nasıl giderilir?"
description: "DemirDöküm F28 hatası ateşleme başarısız demek. ademiX, Nitromix, vintomiX ve isomiX kılavuzlarına göre gaz vanası, reset yöntemi ve deneme sınırı."
slug: "demirdokum-kombi-f28-hatasi"
date: "2026-09-28"
updated: "2026-10-30"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ (YK #189 fırsat sayfası 3/30, yayın Cum 30 Eki): içerik iyileştirmesi; slug, şablon ve yapı aynı (YK #179 dondurması).
# GSC (www-9 Sorgular.csv): "demirdöküm kombi f28 hatası" 124 gösterim poz. 10,68 · "demirdöküm f28 hatası" 116 · "demirdöküm f 28 hatası" 53 ·
#   "demirdöküm ademix f28 hatası" 39 · "nitromix kombi f28 hatası" 38 · "ademix f28 hatası" 26 · "demirdöküm kombi f28 hatası nasıl giderilir" 21.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
# Zincir: demirdokum.com.tr/urunler/kombiler/ → ürün sayfası → PDF (A, D Nitromix · B, H ademiX · G, I vintomiX · E Ioni · F isomiX sayfasında bağlı). C (eski vintomiX baskısı), J, K: üretici alan adı + kapak (YK #88 SEG).
#  A) Nitromix KK 0020309468_01  /downloads/nitromix-kk-0020309468-01-2557203.pdf  16 s.  md5 3340a11b923b7332f8eb8685297970b6  (F.28 s.15; gaz kokusu s.4; vanalar s.10)
#  B) ademiX AS/2 KK 8000037599_01  /downloads/ademix-kullanm-klavuzu-3072082.pdf  16 s.  md5 49d7b83510651364a8bf6cc1fd7b654b  (F.28 s.13; reset s.11)
#  C) vintomiX KK 0020313925_01  /downloads/products-1/example-training-1/vintomix-kk-0020313925-01-2344252.pdf  md5 8f95c967c9b46f5954feb833fd596467  (F.28 s.12; reset s.10)
#  D) Nitromix MK 0020309469_02  /downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf  40 s.  md5 bdff16276288ebddd6c6cbf82d47c864  (F.28 s.31-32; F.29 s.32)
#  E) Nitromix Ioni KK 8000012394_02  /downloads/kullanma-klavuzu-2951233.pdf  20 s.  md5 20af9c9662047778a60b915b068770e4  (F.028, F.281 s.15; reset tuşu s.7)
#  F) isomiX KK 0020294213_03  /downloads/products-1/isomix-kklz-0020294213-03-2557202.pdf  20 s.  md5 512a3ea2803e25473404e9d84ba3f626  (F.028 s.19; reset tuşu s.7)
#  G) vintomiX AS/2 KK 8000023884_01  /downloads/vintomix-kullanma-klavuzu-3072079.pdf  16 s.  md5 44582ead51f15270f17023c715827c61  (F.28 s.12; reset s.10)
#  H) ademiX AS/2 MK 8000037604_01  /downloads/ademix-montaj-ve-bakm-klavuzu-3072083.pdf  44 s.  md5 f8dda08fa00ee026fe82feec9740f176  (F.28, F.29 s.34)
#  I) vintomiX AS/2 MK 8000023883_01  /downloads/vintomix-montaj-ve-bakm-klavuzu-3072080.pdf  44 s.  md5 ba414dd011660cb99eb3e3c73b732506  (F.28, F.29 s.34)
#  J) Nitron Plus KK 0020193908_03 md5 51e63dec4da2dcf111d41350fa586e65 (F04 s.16) · K) Atron Condense KK 0020281171_00 md5 7746b6a9d980072b5109b1b27926bd81 (F04 s.10)
# Tam liste, satır numaraları ve alıntılar: demirdokum-kombi-f28-hatasi.KAYNAK.md
# BİLEREK YAZILMAYANLAR: Atromix (bu koşuda DemirDöküm sitesinde kullanma kılavuzu bulunamadı, yalnız Ioni SSS'te baca uyumu satırı var);
#  tek reset süresi; F.28'in parça teşhisi; gaz giriş basıncı ölçümü, gaz hattının havasını alma (#31); "kod bozulma demek değil" yorumu (belgede yok, çıkarıldı).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, binadan çık ve gaz şirketinin acil birimini dışarıdan ara."
  - "Gaz kokusu yoksa ekrandaki kodu (F.28 ya da F.028) ve kombinin model adını not et."
  - "Kombideki gaz kesme vanasının açık olduğunu kontrol et."
  - "Dışarıya monte edilmiş ikinci bir gaz kesme vanası varsa onun da açık olduğunu kontrol et; yerini bilmiyorsan montajı yapan servise sor."
  - "Kombiyi kendi modelinin kılavuzundaki yöntemle resetle."
  - "Yoğuşma suyu gider hattına ve gider hunisine gözle bak; bir tıkanıklık görürsen dokunmadan yetkili bayiye bildir."
  - "Kılavuzdaki deneme sınırında kod hâlâ duruyorsa resetlemeyi bırak ve yetkili servise başvur."
faq:
  - q: "DemirDöküm kombide F28 hatası ne demek?"
    a: "DemirDöküm'ün kullanma kılavuzlarındaki arıza tablosu F.28'i 'Ateşleme başarısız' diye adlandırıyor: kombi art arda birkaç kez yanmayı denedi, olmadı ve arıza konumuna geçti. Deneme sayısı modele göre değişiyor: Nitromix'te iki, ademiX ve vintomiX'te üç, Nitromix Ioni ve isomiX'te beş. Ioni ve isomiX'te kod F.028 olarak yazılıyor ve 'Başlatma evresinde alev sinyali algılanmadı' diye tanımlanıyor. Kılavuzların ilk tedbiri gaz kesme vanasının açık olup olmadığını kontrol etmek."
  - q: "DemirDöküm kombi F28 hatası nasıl giderilir?"
    a: "Kullanma kılavuzlarının sırası aynı: önce gaz kesme vanasının açık olduğunu kontrol et, sonra kombiyi kendi modelinin yöntemiyle resetle, deneme sınırında kod sürüyorsa yetkili servise başvur. Dışarıda ikinci bir gaz kesme vanası varsa onun da açık olması gerekiyor. Gaz kokusu varsa bu adımların hiçbiri yapılmaz."
  - q: "DemirDöküm kombi nasıl resetlenir?"
    a: "Modele göre değişiyor. Nitromix: reset tuşuna 1 saniye bas, en fazla üç deneme. Nitromix Ioni ve isomiX: reset tuşunu 3 saniyeden uzun basılı tut, en fazla üç tekrar. ademiX (AS/2): ana ekranda açma/kapatma düğmesine 5 saniyeden uzun bas. vintomiX: açma/kapatma düğmesine 3 saniyeden uzun bas, en fazla beş kez; ekranda rE görünür."
  - q: "ademiX ile Nitromix'te F28 farklı mı?"
    a: "Kodun adı aynı, 'Ateşleme başarısız'. Fark deneme sayısında ve resette: ademiX kılavuzu arka arkaya üç başarısız denemeden sonra arıza konumunu, reset için açma/kapatma düğmesine 5 saniyeden uzun basmayı söylüyor. Nitromix kılavuzu iki denemeden sonra arıza konumunu, reset tuşuna 1 saniye basmayı ve en fazla üç resetleme denemesini söylüyor."
  - q: "F28 ile F29 arasındaki fark ne?"
    a: "DemirDöküm'ün servise yönelik Nitromix, ademiX ve vintomiX montaj kılavuzları F.28'i 'Ateşleme başarısız', F.29'u 'İşletim sırasında ateşleme ve kontrol arızası - Alev sönüyor' diye tanımlıyor. F.29 kullanma kılavuzlarının tablosunda yer almıyor, yani kullanıcıya adım verilmemiş; F.29 gördüysen yetkili servise başvur."
  - q: "Ekranımda F28 değil F04 yazıyor, aynı şey mi?"
    a: "DemirDöküm'ün Atron Condense ve Nitron Plus kullanma kılavuzlarında ateşleme arızası F04 koduyla gösteriliyor. O modeller için DemirDöküm kombi F04 hatası yazısına bak."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin alt kısmı; borular arasında sarı kollu bir gaz kesme vanası ve kombinin ön panelinde soyut, rakamsız bir ekran"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda sarı kollu gaz vanası"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

DemirDöküm kombide **F28 hatası, "Ateşleme başarısız" demek.** DemirDöküm'ün kendi arıza tablosuna göre kombi yanmayı art arda birkaç kez denedi, alevi tutturamadı ve **arıza konumuna geçti.** Kullanma kılavuzu sana bu noktada üç iş bırakıyor: gaz kesme vanasına bakmak, resetlemek ve sonuç alamazsan yetkili servise başvurmak. Bu yazıda bu adımları DemirDöküm'ün Nitromix, Nitromix Ioni, ademiX, vintomiX ve isomiX kullanma kılavuzlarından, modelden modele değişen yerleriyle birlikte anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F.28 (Ioni ve isomiX'te F.028) = DemirDöküm'e göre ateşleme başarısız. Sıra şu: gaz kokusu var mı → gaz kesme vanası (varsa ikisi de) açık mı → modelinin kılavuzundaki yöntemle reset → deneme sınırında dur → yetkili servis. Gaz kokusu varsa hiçbir düğmeye dokunma.

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** DemirDöküm kullanma kılavuzlarının güvenlik bölümünde gaz kokusu için ayrı bir talimat var. Koku varsa o mekânda durma; mümkünse kapı ve pencereleri açıp cereyan yap; açık alevden kaçın, sigara içme; binadaki elektrik şalterlerini, prizleri, zili, telefonu ve diğer iletişim sistemlerini kullanma. Nitromix kılavuzu gaz sayacı kapatma düzeneğinin ya da ana kapatma düzeneğinin, mümkünse üründeki gaz kesme vanasının kapatılmasını istiyor. Diğer bina sakinlerini uyar, binayı hemen terk et; binadan çıkınca polisi ve itfaiyeyi ara, gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber ver. Bu durumda aşağıdaki adımlara geçilmez.

**2. Kodu ve modeli not et.** Reset yöntemi ve deneme sınırı modele göre değişiyor. Nitromix Ioni ve isomiX kılavuzları kodu üç haneli, **F.028** olarak yazıyor. Atron Condense ya da Nitron Plus'ta ise ateşleme arızası F04 olarak görünür; o durumda [DemirDöküm kombi F04 hatası](/blog/demirdokum-kombi-f04-hatasi/) yazısına geç.

**3. Kombinin gaz kesme vanası açık mı?** Beş kullanma kılavuzunda da F.28 satırının ilk tedbiri aynı: **gaz kesme vanasının açık olup olmadığını kontrol et.**

**4. İkinci vana var mı?** Kılavuzların "ürün çalışmıyor" satırı, harici olarak monte edilen gaz kesme vanası ve/veya üründeki gaz kesme vanası kapalıysa **her iki gaz kesme vanasını** açmanı istiyor. Vanaların yerini bilmiyorsan Nitromix kılavuzunun tavsiyesi net: kapatma vanalarının konumunu ve kullanımını **montajı yapan yetkili servise sor.**

**5. Resetle, kendi modelinin yöntemiyle.** Tuş ve süre modele göre değişiyor; tablosu aşağıda. Genel anlatım [DemirDöküm kombi resetleme](/blog/demirdokum-kombi-resetleme/) yazısında.

**6. Yoğuşma suyu gider hattına göz at.** Kullanma kılavuzları yoğuşma suyu gider hattının ve gider hunisinin **daima açık (tıkanmamış)** olmasını, düzenli olarak özellikle tıkanmalara karşı kontrol edilmesini istiyor. DemirDöküm'ün servise yönelik montaj kılavuzları da F.28'in olası nedenleri arasında **tıkalı yoğuşma suyu gider hattını** sayıyor. Bir sorun görürsen kılavuzun talimatı: yetkili bayiye giderttir. Burada senin işin yalnızca bakmak.

**7. Deneme sınırında dur.** Kılavuzların hepsi resete bir sınır koyuyor. Sınıra gelip kod hâlâ duruyorsa evde denenecek bir şey kalmamıştır: **yetkili servise başvur.**

## F.28 tam olarak ne diyor: modeline göre

| Kılavuz | Kod ve adı | Olası neden |
|---|---|---|
| **Nitromix** | F.28: Ateşleme başarısız | Arka arkaya **iki** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer |
| **ademiX (AS/2)** | F.28: Ateşleme başarısız | Arka arkaya **üç** başarısız ateşleme denemesinden sonra |
| **vintomiX** | F.28: Ateşleme başarısız | Arka arkaya **üç** başarısız ateşleme denemesinden sonra |
| **Nitromix Ioni** | F.028: Başlatma evresinde alev sinyali algılanmadı | Arka arkaya **beş** başarısız ateşleme denemesinden sonra |
| **isomiX** | F.028: Başlatma evresinde alev sinyali algılanmadı | Arka arkaya **beş** başarısız ateşleme denemesinden sonra |

📌 Kod, kombinin **ateşlemeyi tutturamadığı için arıza konumuna geçtiğini** söylüyor. Nedenin ne olduğunu kod tek başına söylemiyor; kılavuzların ilk baktırdığı yer gaz kesme vanası.

## Reset: modeline göre tuş ve süre

| Kılavuz | Nasıl | Deneme sınırı |
|---|---|---|
| **Nitromix** | **Reset tuşuna 1 saniye** boyunca bas | En fazla **3** resetleme denemesi; üçte gitmezse yetkili bayi |
| **Nitromix Ioni · isomiX** | **Reset tuşunu 3 saniyeden uzun** basılı tut | Maksimum tekrar sayısı **3**; gitmezse yetkili servis |
| **ademiX (AS/2)** | Ana ekranda **açma/kapatma düğmesine 5 saniyeden uzun** bas | Ateşleme arızasını gideremiyorsan yetkili servis |
| **vintomiX** | Ana ekranda **açma/kapatma düğmesine 3 saniyeden uzun** bas; ekranda **rE** görünür | En fazla **beş** kez; sonra rE hızlı yanıp söner, durdurmak ve ürünü yeniden başlatmak için düğmeye basılır |

➡️ Tek bir süre ezberlemek, modellerin bir kısmında yanlış olur. Kendi kılavuzundaki yöntemi esas al.

⚠️ Sınırı aşan reset bir çözüm değil. Kılavuzlar deneme sayısını bilerek kısıtlıyor; sınıra gelindiyse sıradaki adım servistir.

## Servisin bakacağı yerler

DemirDöküm'ün servise yönelik Nitromix, ademiX ve vintomiX montaj ve bakım kılavuzları F.28'in olası nedenlerini uzun bir listeyle veriyor. Aralarında şunlar var: gaz kesme vanasının kapalı olması, gaz sayacı arızası, gaz hattında hava bulunması (örneğin ilk çalıştırmada), gaz giriş basıncının çok düşük olması, yoğuşma suyu gider hattının tıkalı olması, gaz armatürü arızası, ateşleme sisteminin arızalı olması, hatalı topraklama ve elektronik arıza.

Bu liste **servis için yazılmış** bir kontrol listesi; kontrollerin çoğu ölçüm ve parça işi. Gaz kaçağı şüphesi, gaz giriş basıncı, brülör ve ateşleme elektrodu senin değil, yetkili servisin alanı. Kullanıcıya düşen kısım, kullanma kılavuzunun verdiği vana ve reset adımlarıyla sınırlı. Kullanma kılavuzlarının genel uyarısı da aynı yönde: yalnız kılavuzda belirtilen çalışmaları yap; güvenlik tertibatları çıkarılmaz, köprülenmez, bloke edilmez.

⛔ **Kendin-çöz sınırı burada biter:** vana ve reset sende; kombinin kapağının arkası servisin.

## F.28 ile F.29 karışmasın

F.29 **kullanma kılavuzlarının arıza tablosunda yer almıyor**; kullanıcıya adım verilmemiş. Servise yönelik montaj kılavuzları onu *"İşletim sırasında ateşleme ve kontrol arızası - Alev sönüyor"* diye tanımlıyor. Ioni ve isomiX'in F.028 tanımı da farkı gösteriyor: F.28'de alev **başlatma evresinde** algılanmıyor; F.29'da çalışırken alev sönüyor. F.29 gördüysen yetkili servise başvur. Nitromix Ioni kılavuzunda ayrıca **F.281** var: *"Alev stabilizasyon süresi boyunca söndü."* Tedbiri F.028 ile aynı: vana, 3 saniyelik reset, en fazla üç tekrar, sonra servis.

## Servisi aramadan önce iki dakikalık özet

- Ortamda gaz kokusu var mı?
- Kombideki gaz kesme vanası açık mı?
- Dışarıda ikinci bir gaz kesme vanası var mı, açık mı?
- Kılavuzundaki yöntemle kaç kez reset denendi?
- Kod F.28 mi, F.028 mi, F.29 mu, ve model adı ne?

DemirDöküm'ün diğer kodları için [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) yazısına, düşük basınç kodu için [DemirDöküm kombi F22 hatası](/blog/demirdokum-kombi-f22-hatasi/) yazısına, kod göstermeden duran kombi için [DemirDöküm kombi çalışmıyor](/blog/demirdokum-kombi-calismiyor/) yazısına bakabilirsin. Ekranındaki marka Vaillant ise [Vaillant kombi F28 hatası](/blog/vaillant-kombi-f28-hatasi/) yazısına geç. Markadan bağımsız sıralama [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısında.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
