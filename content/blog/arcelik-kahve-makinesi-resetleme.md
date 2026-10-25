---
title: "Arçelik kahve makinesi resetleme: Telve ışıkları ve hatalar"
description: "Arçelik Telve kahve makinesi resetleme: pişirmeyi iptal etme, kapatıp açma, pembe ve kırmızı hata ışıkları, sensör temizliği. Arçelik kılavuzlarına göre."
slug: "arcelik-kahve-makinesi-resetleme"
date: "2026-10-25"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z6, grup C). origin/main'de Arçelik kahve makinesi slug/başlık/gövdesi yok ("telve" yalnız kahve telvesi anlamında başka yazılarda). Dalga 6/7/8 klasörlerinde aynı slug yok.
# Arama kanıtı (#164, bu koşu 25 Eki, hl=tr gl=tr, _kaynak/ot-ozet.txt): "arçelik kahve makinesi r" → 1. "arçelik kahve makinesi resetleme", 6. "…resetleme nasıl yapılır"; "arçelik telve r" → 1. "arçelik telve resetleme"; "arçelik kahve makinesi" → 7. "…resetleme"; "arçelik telve" → 9. "arçelik telve kahve makinesi resetleme". GSC: "arçelik kahve/telve" satırı yok.
# Belge (#88). arcelik.com.tr curl 403 (bot koruması) → ürün sayfaları yerleşik tarayıcıda (kendi sekmem) açıldı; "Kullanma Kılavuzu" bağlantıları Arçelik sitesinin dosya deposunu (gsim2hwnpbvwtwmb1dg11z6.blob.core.windows.net/media/documents/) gösteriyor → PDF'ler curl ile 200 application/pdf:
#  (T) TKM 9961 Telve "Türk Kahvesi Makinesi Kolay Kullanım Kartı", 2 s. (6 panel), md5 cb9c937e40efecb341561788a1818550, …/7489470101_MDM2_USER_MANUAL_FILE_tr_TR.pdf — s.1 genel bakış, ilk kullanım, pompa, bildirimler · s.2 su yok, pişirme, önemli uyarılar, temizlik (sayfa görüntüsünden de okundu)
#  (K) K 3300 / CR / LS / LT (Mini Telve) kullanım kılavuzu, 24 s., md5 0a630bebbc66ffe03b0cb19f1f3cc70f, …/7489770132_MDM2_USER_MANUAL_FILE_tr_TR.pdf — s.13-14 pişirme/iptal · s.15 uyku modu · s.16 bildirimler · s.17-18 temizlik · s.20 servis öncesi
#  (X) TKM 3341 Telve X kullanım kılavuzu, 22 s., md5 59bebde5ee0fb18e7c5d878be5018b9d, …/7465000102_MDM2_USER_MANUAL_FILE_tr_TR.pdf — s.12-13 pişirme/iptal · s.15 bildirimler · s.16 temizlik · s.18 uyku modu
# BİLEREK YAZILMAYANLAR: ayrı bir reset tuşu ya da fabrika ayarı (üç belgede de yok; yazıda açıkça "kılavuzda yok") · fişi çekme dışında gizli kombinasyon · Telve Pro (K 3700) ayarlar menüsü (ayrı belge, bu yazıda yok) · rezistans/kart/sensör onarımı (#31) · fiyat (#46).
# Alıntı denetimi: arcelik-kahve-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Nemli, yumuşak bez", "Kuru bez", "İçme suyu"]
steps:
  - "Başlatma butonundaki ışığın rengine ve yanıp sönüp sönmediğine bak; modeline göre tablodan anlamını bul."
  - "Pişirmeyi iptal etmek için kahve pişirme başlatma butonuna üç saniye basılı tut."
  - "Hata ışığında makineyi kapat; Telve'de ON/OFF düğmesini kapalı konuma getir."
  - "Pişirme haznesini yuvasından al; ısıtıcı yüzeyi soğuyunca hazne tabanını, ısıtıcı yüzeyini ve sensör camını nemli bezle sil."
  - "Makineyi yeniden aç; ışık sabit beyaza dönünce yeni bir pişirme başlat."
  - "Telve'de su gösterge ışığı kırmızıysa depoyu max çizgisine kadar doldur; depoyu çıkarıp taktıysan pompa işlemini tekrarla."
  - "Hata temizlik ve kapatıp açmadan sonra tekrar ediyorsa Arçelik yetkili servisine başvur."
faq:
  - q: "Arçelik kahve makinesi resetleme nasıl yapılır?"
    a: "Arçelik'in Telve (TKM 9961), Mini Telve (K 3300) ve Telve X (TKM 3341) kılavuzlarında ayrı bir reset tuşu ya da fabrika ayarı yok. Kılavuzdaki karşılığı hata ışığında makineyi kapatıp hazne tabanını, ısıtıcı yüzeyini ve sensör camını nemli bezle temizlemek, sonra makineyi yeniden açmak. Pişirmeyi iptal etmek için başlatma butonuna üç saniye basılı tutuluyor."
  - q: "Arçelik Telve'de pembe ışık yanıp sönüyor, ne demek?"
    a: "Mini Telve (K 3300) ve Telve X (TKM 3341) kılavuzlarında yanıp sönen pembe ışık pişirme hatası. Hazneyi yuvadan al, ısıtıcı soğukken hazne tabanını, ısıtıcı yüzeyini ve sensör camını nemli bezle temizle. Işık beyaza dönünce yeni pişirme başlatabilirsin; tekrar ederse servise başvur."
  - q: "Arçelik kahve makinesi kendiliğinden kapanıyor mu?"
    a: "Kapanmıyor, uyku moduna geçiyor. Kılavuzlara göre makinede üç dakika hiçbir işlem yapılmazsa bip sesiyle bekleme konumuna geçiyor. Başlatma butonuna bastığında uyarı sesi duyuluyor, durum ışığı beyaz yanıyor ve makine kullanıma hazır hale geliyor; Mini Telve'de hazneyi yuvaya koyup çıkarmak da yetiyor."
  - q: "Arçelik kahve makinesi hiç çalışmıyor, önce neye bakmalıyım?"
    a: "Mini Telve kılavuzunun servis öncesi listesi üç şey sayıyor: cihazın prize takılı olup olmadığı, kabloda kopukluk ya da zedelenme olup olmadığı ve pişme algılama sensörünün temizliği. Pişirme haznesi yerine tam oturmazsa da makine çalışmıyor."
images:
  coverAlt: "Mutfak tezgâhında çelik cezveli otomatik bir Türk kahvesi makinesi ve yanında iki fincan"
  steps:
    - "Türk kahvesi makinesinin ön yüzünde ışığı yanan yuvarlak başlatma butonu"
    - "Kahve makinesinin ön yüzündeki yuvarlak başlatma butonunun yakın çekimi"
    - "Arka yüzünde açma kapama düğmesi görünen Türk kahvesi makinesi"
    - "Yuvasından alınmış pişirme haznesi ve nemli bir bezle silinen ısıtıcı yüzeyi"
    - "Işığı sabit beyaz yanan, cezvesi yuvasında duran kahve makinesi"
    - "Kahve makinesinin yan tarafındaki şeffaf su deposu ve su seviyesi çizgisi"
    - "Tezgâhta kahve makinesinin yanında duran kullanım kılavuzu ve telefon"
---

Arçelik Türk kahvesi makinen pembe ya da kırmızı yanıp sönüyor, kahveyi pişirmiyor ya da hiç tepki vermiyor; aklına ilk gelen "resetleme". Önce bilmen gereken şu: Arçelik'in **Telve (TKM 9961)**, **Mini Telve (K 3300)** ve **Telve X (TKM 3341)** Türkçe kılavuzlarında ayrı bir reset tuşu ya da fabrika ayarı yok. Kılavuzların anlattığı, makinenin ışıklarla ne söylediği, pişirmenin nasıl iptal edildiği ve hata ışığında makinenin nasıl kapatılıp temizlenip yeniden açıldığı. Resetleme dediğimiz iş pratikte bu. Bu yazı Arçelik'in ürün sayfalarındaki bu üç kılavuza dayanıyor; başka bir modelin varsa ışık renkleri farklı olabilir, kendi kılavuzunla karşılaştır.

> ⚡ **Kısa özet:** Reset tuşu yok. Pişirmeyi durdurmak için başlatma butonuna üç saniye bas. Hata ışığında makineyi kapat, hazneyi al, ısıtıcı soğuyunca hazne tabanını, ısıtıcı yüzeyini ve sensör camını nemli bezle sil, yeniden aç. Işık sabit beyazsa makine hazır. Telve'de su ışığı kırmızıysa depoyu doldur. Tekrarlarsa servis.

## Işıklar ne söylüyor?

| Işık | Telve (TKM 9961) | Mini Telve (K 3300) | Telve X (TKM 3341) |
|---|---|---|---|
| Sabit beyaz | Pişirmeye hazır | Pişirmeye hazır | Pişirmeye hazır |
| Sabit kırmızı | Zaman aşımı hatası (seçilen buton) | Pişiriyor | Pişiyor |
| Yanıp sönen kırmızı | Seviye aşım hatası | Pişirdi, hazneyi al | Pişirdi, hazneyi al |
| Yanıp sönen pembe | — | Pişirme hatası | Pişirme hatası |
| Sabit pembe | — | Zaman aşımı hatası | Sensör hatası (sürekli sesle) |
| Kırmızı-beyaz yanıp sönme | — | — | Zaman aşımı hatası |

Telve'de (TKM 9961) pişiriyor durumu sabit beyaz, pişirdi durumu yanıp sönen beyaz. İlgili gözün butonları kırmızı yanıp sönüyorsa pişirme hatası 1, bütün butonlar kırmızı yanıyorsa pişirme hatası 2. Su gösterge ışığı sabit kırmızıysa su bitmiş.

## Adım adım: Arçelik kahve makinesi resetleme

**1. Işığı oku.** Hangi modelin olduğuna ve ışığın rengine bak; yukarıdaki tablo hangi durumda olduğunu söylüyor. Aynı renk modele göre farklı anlama gelebiliyor: Mini Telve'de sabit kırmızı "pişiriyor" demekken Telve'de seçili butondaki sabit kırmızı zaman aşımı hatası.

**2. Pişirmeyi iptal et.** Mini Telve ve Telve X kılavuzlarına göre herhangi bir sebeple pişirmeyi iptal etmek istersen kahve pişirme başlatma butonuna üç saniye basılı tut. Telve'de de ilk kullanımdaki su basma işlemi aynı butona üç saniye basılı tutularak sonlandırılıyor. Pişirme sürerken hazneyi yuvadan alma; kılavuz "bekleyin" diyor.

**3. Makineyi kapat.** Telve'nin hata satırlarının hepsi "ürünü kapatın" diye başlıyor; Telve'de bunun için ON/OFF düğmesi var. Mini Telve'nin zaman aşımı satırı da cihazı kapatıp açmanı istiyor. Mini Telve'de ayrı bir açma düğmesi anlatılmıyor, fiş prize takılınca makine kendiliğinden açılıyor; kapatıp açmak için fişi çekip yeniden takabilirsin (çıkarım).

**4. Hazneyi al ve temizle.** Pişirme haznesini yuvasından al. Isıtıcı yüzeyinin soğuk olduğundan emin ol; sonra hazne tabanını, ısıtıcı yüzeyini ve sensör camını nemli bir bezle temizle. Telve X'te sensör camıyla birlikte ısı sensörünü de silmen isteniyor. Kılavuzlar pişme algılama sensörünü her 15–20 pişirmede bir nemli bezle silmeni, peş peşe pişirmeden sonra sensör camındaki su damlacıklarını kuru bezle almanı istiyor.

**5. Yeniden aç.** Makineyi aç. Mini Telve'de ışık sabit beyaza dönünce yeni pişirme başlatabiliyorsun. Telve X'te pişirme hatası ve zaman aşımından sonra başlatma butonuna basarak ürünü pişirmeye hazır duruma getiriyorsun. Hazneyi yuvasına tam oturt; kılavuz hazne yerine tam yerleşmezse cihazın çalışmayacağını yazıyor. Telve'de hazne yuvaya arkaya tam değecek şekilde ve dik konmalı.

**6. Telve'de suyu kontrol et.** Telve (TKM 9961) su deposuyla çalışıyor. Su gösterge ışığı sabit kırmızıysa su bitmiş; pişirme butonları sönüyor ve seçim yapılamıyor. Depoyu max çizgisine kadar doldur. Kılavuz ilk kullanımda pompanın ve su sisteminin suyla dolması, sistemdeki havanın atılması için bir işlem tarif ediyor: hazneyi sol göze koy, sol göz üç kişilik butona bas, su basma bitince aynı butona üç saniye basılı tut ve haznedeki suyu lavaboya dök. Su deposunu çıkarıp taktıktan sonra bu işlemi tekrarlayabilirsin.

**7. Tekrarlarsa servis.** Kılavuzların her hata satırı aynı cümleyle bitiyor: hatanın tekrarlanması halinde servise başvur. Telve X'teki sabit pembe ışık ve sürekli sesli uyarı sensör hatası; kapatıp açınca geçmiyorsa yetkili servise git.

## Bozuk değil, uyku modunda

Makine üç dakika boyunca hiçbir işlem yapılmazsa bip sesiyle bekleme konumuna geçiyor. Bu bir arıza değil. Başlatma butonuna bastığında uyarı sesi duyuluyor, ışık beyaz yanıyor ve makine hazır oluyor. Mini Telve'de hazneyi yuvaya koymak ya da çıkarmak da makineyi uyandırıyor.

## Hatayı azaltan temizlik

Mini Telve ve Telve X kılavuzlarına göre ısıtıcı yüzeyine kahve damlatırsan kurumadan hafif nemli bezle sil. Hazneyi her pişirmeden sonra elde yıka; bulaşık makinesine koyma. Telve X'te hazne de suya daldırılmıyor, içi suyla çalkalanıyor. Hazne tabanındaki tortular için kılavuz bir tatlı kaşığı limon tuzu ve haznenin üçte birini dolduracak kaynar su öneriyor; karışım on dakika bekletilip hazne durulanıyor. Benzer makineler için [Stilevs kahve makinesi arızaları](/blog/stilevs-kahve-makinesi-arizalari/) ve [Kiwi Türk kahvesi makinesi nasıl kullanılır](/blog/kiwi-turk-kahvesi-makinesi-nasil-kullanilir/) yazılarına bakabilirsin.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Hazır, pişiyor, pişirdi ışıkları | Normal |
| Pişirme hatası, zaman aşımı, seviye aşımı (ilk kez) | Senin: kapat, temizle, yeniden aç |
| Aynı hata temizlikten sonra da tekrar ediyor | Arçelik yetkili servisi |
| Telve X'te sabit pembe ve sürekli ses geçmiyor | Arçelik yetkili servisi |
| Kablo zedelenmiş | Arçelik yetkili servisi |

⛔ Makineyi açma, ısıtıcıyı ya da sensörü kendin onarmaya çalışma. Kablo hasarı, ısıtıcı ve elektronik yetkili servisin işi.

---

**Kaynak künyesi.** Işık tabloları, iptal, kapatıp açma ve temizlik adımları Arçelik'in TKM 9961 Telve kolay kullanım kartından ve K 3300 Mini Telve, TKM 3341 Telve X Türkçe kullanma kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
