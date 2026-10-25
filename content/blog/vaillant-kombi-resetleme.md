---
title: "Vaillant kombi resetleme nasıl yapılır? Tuş ve sınır"
description: "Vaillant kombide reset modele göre değişir: ecoTEC pro'da bir saniye, plus ve pure'da 3 saniyeden uzun, intro'da açma düğmesi. Kaç deneme, ne zaman servis."
slug: "vaillant-kombi-resetleme"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, ajan A). origin/main 829cec5'te vaillant-kombi-resetleme yok, başlıkta "Vaillant" + "reset" yok.
#   Yakın: vaillant-kombi-ariza-kodlari (kod tablosu + tek SSS "nasıl reset edilir"), vaillant-kombi-f28-hatasi, vaillant-kombi-f22-hatasi. Kod tablosu kopyalanmadı, hub'a bağlandı.
#   Emsal: baymak-kombi-resetleme / bosch-kombi-resetleme hub'larıyla birlikte yayında.
# Arama kanıtı (25 Eki 08:47–08:50 +03, suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot.tsv):
#   "vaillant kombi r" → 1. resetleme, 2. resetleme nasıl yapılır, 3. reset tuşu; "vaillant kombi reset" → 1.–3. aynı; "vaillant kombi" → 7. resetleme. GSC: satır yok.
# Belgeler (bu koşuda curl -sL, HTTP 200 application/pdf; zincir vaillant.com.tr ürün sayfası 200 → PDF 200):
#  (P)  ecoTEC pro kullanma kılavuzu 0020228720_02  /api/download/product/tr/_ecotec-pro_842041.pdf  md5 5958d4db9b178710d1bf7c4ef3147f2e  (sayfa /urunler/ecotec-pro-combi/)
#  (PL) ecoTEC plus/exclusive 0020282305_07 (18.05.2026)  /api/download/product/tr/_ecotec-plus-26-40-kw_1491931.pdf  md5 7019a6c065efd6227ebac697dc91f175  (sayfa /urunler/ecotec-plus-vcw/)
#  (PU) ecoTEC pure 0020250679_02  /api/download/product/tr/_ecotec-pure_844161.pdf  md5 f48176844c2865cf7cd48c96cd902121  (sayfa /urunler/ecotec-pure/)
#  (I)  ecoTEC intro 8000037574_02  /api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf  md5 2ad2ae698770f850da164d67e3ac3637  (sayfa /urunler/ecotec-intro/)
# Sayfalar: gaz kokusu P s.3 · resetleme tuşu P s.6 · bir saniye/üç deneme P s.11 · reset >3 s PL s.7, s.17 (maks. 3 tekrar, beş başarısız ateşleme)
#   · açma/kapama <3 s, reset >3 s PU s.9; üç deneme PU s.17 · intro >3 s, en fazla beş, rE I s.10 · F.22 geçişi I s.10 · tip etiketi P s.6, seri no P s.7.
# BİLEREK YAZILMAYANLAR: hub'daki kod tablosu · kart/ateşleme elektrodu/gaz valfi teşhisi · su doldurma adımları (F22 sayfasına bağlandı) · fiyat (#46).
# NOT: hub SSS'i ecoTEC plus için "bir saniye" diyor; plus kılavuzunun bu koşuda indirilen 18.05.2026 baskısı ">3 saniye" diyor. Bu yazı güncel baskıyı izliyor.
# Alıntı denetim tablosu: vaillant-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa reset yapma; gaz sayacındaki vanayı kapat, kapı ve pencereleri aç, binayı terk et ve dışarıdan gaz şirketinin acil hattını ara."
  - "Ekrandaki arıza kodunu not al; reset kodu siler ama sebebini gidermez."
  - "Kod F.22 ise ya da basınç değeri yanıp sönüyorsa reset değil, düşük basınç sorunudur; önce basıncı kılavuza göre düzelt."
  - "Kod F.28 ise resetten önce gaz kesme vanalarının açık olduğunu kontrol et."
  - "Modeline göre reset yap: ecoTEC pro'da reset tuşuna bir saniye, ecoTEC plus ve pure'da 3 saniyeden uzun bas; ecoTEC intro'da açma/kapatma düğmesini 3 saniyeden uzun basılı tut."
  - "Deneme sınırına uy: pro, plus ve pure'da üç deneme, intro'da en fazla beş deneme."
  - "Kod geri geliyorsa resetlemeyi bırak; kodu ve tip etiketindeki bilgileri yetkili servise bildir."
faq:
  - q: "Vaillant kombide reset tuşu hangisi?"
    a: "Modele göre değişir. ecoTEC pro'nun kumanda panelinde ayrı bir resetleme tuşu var. ecoTEC plus ve ecoTEC pure'da reset, aynı tuşun uzun basışıyla yapılıyor: pure kılavuzuna göre 3 saniyeden kısa basış açma/kapama, 3 saniyeden uzun basış reset. ecoTEC intro'da reset için açma/kapatma düğmesi 3 saniyeden uzun basılı tutulur ve ekranda rE görünür."
  - q: "Vaillant kombi resetleme yapmıyor, neden?"
    a: "Kılavuzlara göre en sık karışan iki durum var. Birincisi basınç: F.22 ya da yanıp sönen basınç göstergesi resetle değil, tesisata su eklenerek geçer. İkincisi deneme sınırı: ecoTEC intro'da beş denemeden sonra rE hızlı yanıp söner; pro, plus ve pure'da üç denemede giderilemeyen ateşleme arızası için yetkili bayiye başvurulması isteniyor."
  - q: "Kaç kez reset atabilirim?"
    a: "ecoTEC pro ve pure kılavuzları ateşleme arızası için üç deneme diyor, ecoTEC plus kılavuzu 'Maksimum tekrar sayısı: 3' yazıyor. ecoTEC intro'da sınır en fazla beş deneme. Bu sayılara ulaştıysan aynı tuşa basmaya devam etme; kodu not edip servisi ara."
  - q: "Reset atınca F.28 kayboldu ama tekrar geldi, ne yapmalıyım?"
    a: "F.28, arka arkaya başarısız ateşleme denemelerinden sonra kombinin arıza konumuna geçtiğini gösterir. Kılavuzun ilk tedbiri gaz kesme vanasının açık olup olmadığına bakmak. Vana açıksa ve kod deneme sınırı içinde geri geliyorsa sorun ev turunun dışında; ayrıntılar F28 yazısında."
  - q: "Elektriği kapatıp açmak reset yerine geçer mi?"
    a: "Kılavuzlar reseti tuşla anlatıyor; sigortayla kapatıp açmayı reset yöntemi olarak vermiyor. Elektrik kesilip geri geldiğinde kombi kendiliğinden çalışmaya başlar, ama kilitli bir arızayı silmek için kendi modelinin reset adımını uygula."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin kumanda paneli ve yanında küçük bir ekran"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Kombi ekranında yanıp sönen kısa bir uyarı kodunun yakın planı"
    - "Kombinin önünde duran yuvarlak kadranlı bir basınç göstergesi"
    - "Kombinin altında borular arasında duran sarı kollu bir gaz vanası"
    - "Kombi kumanda panelindeki yuvarlak bir tuşun yakın planı"
    - "Tezgâhta açık duran bir kullanma kılavuzunun sorun giderme sayfası"
    - "Kombinin alt kısmındaki tip etiketinin yakın planı"
---

Vaillant kombi durdu, ekranda F ile başlayan bir kod var ve ilk akla gelen reset. Ama Vaillant'ta reset her modelde aynı tuşla, aynı sürede yapılmıyor. ecoTEC pro, ecoTEC plus, ecoTEC pure ve ecoTEC intro kullanma kılavuzlarını bu koşuda yeniden indirdik; tuşun yerini, ne kadar basılı tutulacağını, kaç kez deneneceğini ve resetin işe yaramadığı durumları bu dört kılavuzdan topladık. Kendi kombinin adı kumanda panelinde ve tip etiketinde yazar; kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kodu oku. F.22 ya da yanıp sönen basınç reset değil su ister. F.28'de önce gaz vanası. Reset: pro'da reset tuşuna bir saniye, plus ve pure'da 3 saniyeden uzun, intro'da açma/kapatma düğmesine 3 saniyeden uzun. Üç deneme (intro'da beş) yetmediyse servis.

## Hangi modelde reset nasıl yapılıyor

| Model | Reset nasıl | Deneme sınırı |
|---|---|---|
| **ecoTEC pro** | Panelde ayrı resetleme tuşu, **bir saniye** bas | Üç deneme |
| **ecoTEC plus / exclusive** | Reset tuşu, **3 saniyeden uzun** bas | En fazla üç tekrar |
| **ecoTEC pure** | Aynı tuş: 3 saniyeden kısa açma/kapama, **3 saniyeden uzun** reset | Üç deneme |
| **ecoTEC intro** | Açma/kapatma düğmesi **3 saniyeden uzun**, ekranda rE | En fazla beş deneme |

## Adım adım reset

**1. Gaz kokusu varsa reset yapma.** Vaillant'ın güvenlik bölümü açık: gaz kokusu olan mekânda bulunma, kapı ve pencereleri açıp cereyan yap, çakmak ve kibrit gibi açık alevden kaçın, sigara içme. Elektrik şalterlerini, prizleri, zili ve telefonu kullanma. Gaz sayacı ya da ana kapatma düzeneğini kapat, mümkünse kombideki gaz kesme vanasını da kapat. Diğer bina sakinlerini uyar, binayı terk et; polisi, itfaiyeyi ve gaz şirketinin acil durum birimini evin dışındaki bir telefondan ara. Atık gaz kokusu alırsan kapı ve pencereleri aç, kombiyi kapat ve yetkili servisi bilgilendir.

**2. Kodu oku ve not al.** Arıza olduğunda ana ekran arıza koduna geçer. ecoTEC intro kılavuzuna göre ekran etkin kod ile ısıtma gidiş sıcaklığı arasında dönüşümlü gösterim yapar. Reset bu kodu siler ama sebebini gidermez; servis seni bu kodla dinleyecek. Kodların anlamı [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) sayfasında.

**3. Basınç kodunda reset değil su.** F.22, ısıtma sisteminde suyun yetersiz olduğunu söyler; ecoTEC pure'da aynı durum kod yerine yanıp sönen basınç göstergesiyle anlatılıyor. Kılavuzların tedbiri reset değil, ısıtma sistemini doldurmak. Doldurma vanasının yerini montajı yapan yetkili bayiye sormanı istiyorlar. Değerler ve adımlar [Vaillant kombi F22 hatası](/blog/vaillant-kombi-f22-hatasi/) yazısında.

**4. F.28'de önce gaz vanası.** F.28 ateşleme başarısız demek: arka arkaya başarısız denemelerden sonra kombi arıza konumuna geçer. Dört kılavuzun da ilk tedbiri gaz kesme vanasının açık olup olmadığına bakmak; ecoTEC plus'ta aynı adım F.028 ve F.281 için de geçerli. Vana kapalıyken reset atarsan aynı kod geri gelir. Ayrıntılar [Vaillant kombi F28 hatası](/blog/vaillant-kombi-f28-hatasi/) yazısında.

**5. Modeline göre reset tuşunu kullan.** ecoTEC pro kılavuzu: "Reset tuşuna bir saniye boyunca basın", kombi yeniden ateşleme denemesi başlatır. ecoTEC plus ve pure'da reset tuşuna **3 saniyeden uzun** basılı tutulur. Pure'da dikkat: aynı tuşa 3 saniyeden kısa basarsan kombi bekleme moduna geçer. ecoTEC intro'da açma/kapatma düğmesini 3 saniyeden uzun basılı tutarsın; ekranda **rE** görünür.

**6. Deneme sınırına uy.** ecoTEC pro ve pure, ateşleme arızasını üç denemede gideremezsen yetkili bayiye başvurmanı istiyor. ecoTEC plus kılavuzu bunu "Maksimum tekrar sayısı: 3" diye yazıyor. ecoTEC intro'da en fazla beş deneme var; beşinci denemeden sonra rE hızlı yanıp söner. Kılavuza göre yanıp sönmeyi durdurmak ve kombiyi yeniden başlatmak için düğmeye basılır; sorun sürüyorsa yetkili servise başvurulur.

**7. Kod geri geliyorsa servis.** Kılavuzların ortak cümlesi: arızayı belirtilen önlemlerle gideremiyorsan ya da F kodları tekrar ortaya çıkıyorsa yetkili bayiye danış. Aradığında kodu, kombinin adını ve tip etiketindeki bilgileri söyle. ecoTEC pro'da tip etiketi ürünün alt tarafında; seri numarası ön kaplamanın arkasındaki plastik etikette de yazıyor.

## Reset ne zaman işe yaramaz

Reset, kombinin kendini kilitlediği arızadan çıkarır. Sebep hâlâ duruyorsa kilit tekrar devreye girer. Kılavuzların tablosuna göre:

- Basınç düşükse çözüm su eklemek; F.22'de reset tuşu sonucu değiştirmez.
- Gaz vanası kapalıysa çözüm vanayı açmak.
- Ekran tamamen kapalıysa önce binadaki sigortaya bak; kombi elektrik geri gelince kendiliğinden çalışır. Bu durumda reset değil [Vaillant kombi çalışmıyor](/blog/vaillant-kombi-calismiyor/) yazısındaki sıra geçerli.

⛔ **Kendin-çöz sınırı burada biter.** Reset tuşu, açma/kapatma düğmesi, gaz kesme vanasının kolu ve ekrandaki basınç değeri sende. Kombinin kapağının içi, ateşleme, gaz hattı, baca, elektronik kart ve tesisatın havasının alınması yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (ecoTEC pro, plus, pure, intro)?
2. Ekranda hangi kod var?
3. Basınç kaç bar, yanıp sönüyor mu?
4. Gaz kesme vanası açık mı?
5. Kaç kez reset attın, kod geri geldi mi?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Sıcak su sorunu için [Vaillant kombi sıcak su vermiyor](/blog/vaillant-kombi-sicak-su-vermiyor/) yazısına bak. Bil, gör, çağır.
