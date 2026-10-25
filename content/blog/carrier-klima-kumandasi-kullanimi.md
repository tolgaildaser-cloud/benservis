---
title: "Carrier klima kumandası kullanımı: sıcak ayarı ve tuşlar"
description: "Carrier klima kumandasında sıcak ayarı, mod sırası, fan, zamanlayıcı, EKO uyku, Turbo, kilit ve pil. Carrier'ın uzaktan kumanda kılavuzuna göre tuş tuş."
slug: "carrier-klima-kumandasi-kullanimi"
date: "2026-10-25"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, fork D). origin/main'de carrier-klima-kumandasi-* yok; Carrier'da carrier-klima-calismiyor,
#   -isitmiyor, -sogutmuyor var. carrier-klima-isitmiyor kış belirtisini (F.P, kumanda modu, sessiz, defrost) işliyor; bu yazı kumandanın bütün kullanımı,
#   ısıtmıyor belirtisini tekrar etmez, ona bağlanır.
# Arama kanıtı (#164, bu koşuda OT, 25 Eki 08:47): "carrier klima kumandası" → 1. "…kullanımı", 2. "…soğuk ayarı", 3. "…sıcak ayarı",
#   4. "…pil değişimi", 5. "carrier klima kumandasız çalıştırma"; "carrier klima kumandası k" → 1. "…kullanımı", 3. "…kilit açma";
#   "carrier klima" → 4. "carrier klima kumandası kullanımı". GSC www-5 (3 ay): "carrier klima kumandası sıcak ayarı" 29 gösterim,
#   "carrier klima sıcak ayarı nasıl yapılır" 13; www-6 (7 gün): aynı iki satır 29 / 13, "carrier klima sıcak ayarı" 7.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile alarko-carrier.com.tr'den indirildi (HTTP 200 application/pdf). pdftotext -layout, sayfa = PDF sayfası;
#   tuş simgeleri sayfa görüntüsünden (pdftoppm) okundu.
#  (CR) Carrier "UZAKTAN KUMANDA KULLANIM KILAVUZU", 13 s.  https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/klima-carrier-xpowerfresh-kumanda-kk.pdf
#       md5 b9bd8c2723f9e92eb0f12719248e0a83 · zincir: üretici alan adı + kapakta Carrier logosu (YK #88 SEG kararı); bağlayan ürün sayfası bu koşuda bulunamadı.
#  (CA) Carrier AMBI split klima kullanıcı kılavuzu 42QCE…D8SP, 92 s. (TR bölümü s.53-63)  …/Carrier_AMBI_klima_TR_kullanici-kilavuz.pdf
#       md5 f593fc2dff57c6fc8557963a7ccfefa6 · zincir: alarko-carrier.com.tr/urun/klima/carrier-ambi-split-klima-12000-btuh (200) → PDF (200).
# Piller, 8 m, bip CR s.2 · gösterge CR s.4 · tuşlar CR s.5 · temel işlemler CR s.6 · zamanlayıcı CR s.7 · salınım/sabit/EKO uyku CR s.8 · Benim Modum/
#   Beni izle/LED/Turbo CR s.9 · F.P/kilit/sessiz CR s.10 · X-ECO/kumanda modu CR s.11 · 3 dk koruma, zamanlayıcı, pil CA s.63 · manuel düğme CA s.57.
# BİLEREK YAZILMAYANLAR: kumanda kodu eşleştirme/kilit dışı gizli menüler (belgede yok) · Wi-Fi uygulaması · kumandanın hangi Carrier serisiyle geldiği
#   (CR'de model adı yok) · kumanda tamiri · fiyat (#46). Tuş düzeni modele göre değişir; CR s.5 notu yazıda.
# Alıntı denetim tablosu: carrier-klima-kumandasi-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Klima kumandası", "İki adet 1,5 V alkali pil"]
steps:
  - "Kumandaya iki yeni alkali pil tak; eski ve yeni pili ya da farklı tip pilleri birlikte kullanma."
  - "Kumandayı iç üniteye doğru tut ve Açma/Kapatma tuşuna bas; sinyal alınınca iç üniteden bip sesi gelir."
  - "Mod tuşuyla Otomatik, Soğutma, Nem Alma, Isıtma ya da Fan modunu seç."
  - "Sıcaklık tuşlarıyla ayar değerini 17 ile 30 °C arasında, 1 derecelik adımlarla belirle."
  - "Fan tuşuyla düşük, orta, yüksek ya da otomatik fan devrini seç."
  - "Açma ya da kapatma zamanlayıcısını kur; süreyi sıcaklık tuşlarıyla seç, kumandayı cihaza tutup 2 saniye bekle."
  - "Salınım, EKO Uyku, Turbo ve X-ECO gibi ek işlevleri ihtiyacına göre aç ya da kapat."
  - "Tuşlar yanıt vermiyorsa ekranda kilit simgesini ara; kilidi açan iki tuşa birlikte 2 saniyeden uzun bas."
faq:
  - q: "Carrier klima kumandasında sıcak ayarı nasıl yapılır?"
    a: "Mod tuşuna basarak ISITMA modunu seç, sonra sıcaklık yükseltme tuşuyla ayar değerini oda sıcaklığının üstüne getir; en yüksek değer 30 °C. Fan devrini seçip kumandayı iç üniteye doğru tut. Isıtma modu listede hiç çıkmıyorsa kumanda sadece soğutma ayarında olabilir; bunun düzeltilmesi Carrier klima ısıtmıyor yazısında."
  - q: "Kumandada hangi modlar var?"
    a: "Carrier'ın kumanda kılavuzuna göre soğutma ve ısıtmalı modellerin kumandasında Otomatik, Soğutma, Nem Alma, Isıtma ve Fan modu seçilir. Sadece soğutmalı modelin kumandasında Soğutma, Nem Alma ve Fan; sadece ısıtmalı modelin kumandasında Isıtma ve Fan modu vardır."
  - q: "Kumanda pili ne kadar dayanır?"
    a: "Kılavuz normal kullanımda ortalama pil ömrünü yaklaşık 6 ay olarak veriyor. İç üniteden bip sesi gelmiyorsa ya da kumandadaki gösterge yanmıyorsa pilleri değiştir. Kumandayı iki aydan uzun kullanmayacaksan pilleri çıkar; aksi hâlde piller akıp kumandaya zarar verebilir."
  - q: "Kumandanın tuşları çalışmıyor, kilitlenmiş olabilir mi?"
    a: "Olabilir. Kilit Modu 1'de, Salınım ve Sabit tuşlarına birlikte yeniden basılmadıkça hiçbir tuş çalışmaz. Kilit Modu 2'de yalnız Açma/Kapatma ve zamanlayıcı tuşları çalışır; kilit Zamanlayıcı ve X-ECO tuşlarına birlikte 2 saniyeden uzun basınca açılır. Kilitliyken ekranda kilit simgesi görünür."
  - q: "Kumanda yokken klimayı çalıştırabilir miyim?"
    a: "Carrier AMBI kılavuzu iç ünitede bir manuel kontrol düğmesi tarif ediyor, ama bu düğmenin yalnız test ve acil durum için olduğunu söylüyor. Ön panel kaldırılıp düğmeye bir kez basınca zorla otomatik, ikinci basışta zorla soğutma çalışır, üçüncü basış üniteyi kapatır. Normal kullanıma kumandayla dönülür."
images:
  coverAlt: "Duvara monte beyaz bir split klima iç ünitesine doğru tutulan bir uzaktan kumanda"
  steps:
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kumandanın pilleri"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda panel ekranındaki uyarı"
---

Carrier split klimanın kumandası ilk bakışta kalabalık: Mod, Fan, iki sıcaklık tuşu, zamanlayıcı, Salınım, Sabit, EKO Uyku, Turbo, X-ECO, Benim Modum. Kışın en çok sorulan şey de sıcak ayarı. Bu yazıda Carrier'ın uzaktan kumanda kullanım kılavuzundaki her tuşu, kumandanın hangi durumda hiç yanıt vermediğini ve sıcak ayarının nasıl yapıldığını sırayla topladık. Kılavuzun kendi notu da var: tuş tasarımı senin kumandandan biraz farklı olabilir ve her model bütün işlevleri taşımaz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak ayarı için Mod tuşuyla ISITMA'yı seç, sıcaklığı oda sıcaklığının üstüne çıkar (en fazla 30 °C), fan devrini seç. Sıcaklık aralığı 17–30 °C. Tuşlar çalışmıyorsa önce pil, sonra kilit simgesi.

## Tuşlar ve ekrandaki simgeler

| Tuş | Ne yapar |
|---|---|
| **Açma/Kapatma** | Çalıştırır; bir kez daha basınca durdurur |
| **Mod** | Çalışma modunu sırayla seçer |
| **Sıcaklık yukarı / aşağı** | Ayarı 1 °C adımla değiştirir; 17–30 °C |
| **Fan** | Fan devrini seçer; 2 saniye basılı tutulursa Sessiz |
| **Zamanlayıcı** | Açma ve kapatma zamanlayıcısını kurar |
| **Salınım / Sabit** | Panjuru salındırır ya da her basışta 6 derece oynatır |
| **EKO Uyku** | Uyku moduna geçirir |
| **Turbo** | Ayar sıcaklığına en kısa sürede ulaşmak için en yüksek kapasite |
| **X-ECO** | Soğutmada enerji verimliliği modu |

Kumanda ekranında ayrıca pil göstergesi (düşük pil), iletim göstergesi (sinyal gönderilirken yanar) ve kilit göstergesi bulunur.

## Adım adım: kumandayı kullanmak

**1. Pilleri tak.** Kumanda iki adet **1,5 V alkali** pille çalışır. Eski ve yeni pilleri ya da farklı tipteki pilleri birlikte kullanma; kılavuza göre kumanda arızalanabilir. Normal kullanımda ortalama pil ömrü yaklaşık 6 ay.

**2. Kumandayı cihaza tut.** Kumandanın verici ucu iç ünitenin alıcısına bakmalı; en uzun çalışma mesafesi yaklaşık **8 metre**. Sinyal alındığında iç üniteden bip sesi gelir. Perde, kapı ya da arada duran eşya sinyali kesebilir. Alıcıya doğrudan güneş ışığı vuruyorsa klima düzgün çalışmayabilir; perdeyi kapat.

**3. Modu seç.** Mod tuşuna her basışta mod değişir. Soğutma ve ısıtmalı modellerde seçilebilen modlar **Otomatik, Soğutma, Nem Alma, Isıtma ve Fan**. Otomatik modda ısı pompalı klima, oda sıcaklığı ile ayar sıcaklığı arasındaki farka göre soğutma, ısıtma ya da fan modunu kendisi seçer. Otomatik ve Nem Alma modlarında fan devri ayarlanamaz.

**4. Sıcaklığı ayarla.** Sıcaklık yükseltme tuşu ayarı 1 °C artırır, en yüksek değer **30 °C**. Düşürme tuşu 1 °C azaltır, en düşük değer **17 °C**. Fan modunda sıcaklık göstergesi boş görünür. **Sıcak ayarı** için ISITMA modunu seç ve değeri oda sıcaklığının üstüne çıkar. Kaç derecenin uygun olduğu [klima ısıtma modu kaç derece olmalı](/blog/klima-isitma-modu-kac-derece-olmali/) yazısında.

**5. Fan devrini seç.** Fan tuşu düşük, orta, yüksek ve otomatik devir arasında geçer. Fan tuşunu **2 saniyeden uzun** basılı tutarsan Sessiz işlev açılır ya da kapanır. Kılavuzun uyarısı: Sessiz modda kompresör düşük devirde çalıştığı için soğutma ya da ısıtma yetmeyebilir.

**6. Zamanlayıcıyı kur.** Açma ya da kapatma zamanlayıcısı tuşuna bas, süreyi sıcaklık tuşlarıyla seç, kumandayı cihaza tutup 2 saniye bekle. 10 saate kadar her basış 30 dakika, 10 ile 24 saat arasında 1 saat ekler; 2,5 saat için 5, 11 saat için 21 basış gerekir. Süreyi 0.0'a getirmek zamanlayıcıyı iptal eder. AMBI kılavuzuna göre zamanlayıcı açık kalmışsa ünite çalışmıyor gibi görünebilir.

**7. Ek işlevler.** **Salınım** yatay panjuru yukarı aşağı salındırır; 2 saniyeden uzun basış modele göre dikey salınımı açar. **EKO Uyku** soğutma ya da ısıtmada ilk 2 saatte ayarı saat başına 1 °C değiştirir. **Turbo** en yüksek kapasiteyle çalıştırır. **X-ECO** yalnız soğutmada çalışır ve ayar 24 °C'nin altındaysa onu 24 °C'ye çeker. **Benim Modum** 2 saniye basılı tutulunca mevcut mod, sıcaklık ve fan devrini hafızaya alır; fabrika ayarı Otomatik, 26 °C ve otomatik fan.

**8. Kilidi aç.** Kumanda yanıt vermiyorsa ekranda kilit simgesine bak. **Kilit Modu 1**, Salınım ve Sabit tuşlarına birlikte 2 saniyeden uzun basınca açılır ya da kapanır; açıkken hiçbir tuş çalışmaz. **Kilit Modu 2** Zamanlayıcı ve X-ECO tuşlarıyla açılır ya da kapanır; açıkken yalnız Açma/Kapatma ve zamanlayıcı tuşları çalışır.

## Kumanda ısıtma modunu göstermiyorsa

Carrier kumandası üç ayarda çalışabiliyor: soğutma ve ısıtma, sadece soğutma, sadece ısıtma. Sadece soğutma ayarında Isıtma modu listede hiç çıkmaz. Ayar, piller takıldıktan sonraki 3 dakika içinde **Mod ve Fan** tuşlarına birlikte 3 saniyeden uzun basılarak değiştirilir. Kliman yalnız soğutmalı bir modelse bu ayar ısıtma getirmez (çıkarım). Kış ayarlarının tamamı, 8 °C işlevi ve defrost [Carrier klima ısıtmıyor](/blog/carrier-klima-isitmiyor/) yazısında.

## Ne zaman servis

- Yeni pil, doğru mod ve açık kilitle kumanda yine bip sesi aldıramıyorsa
- İç ünitenin ekranında harfle başlayan bir hata kodu duruyorsa
- Kumanda çalışıyor ama klima soğutmuyor ya da ısıtmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, pil, ayarlar ve filtre sende; iç ünitenin içi, dış ünite, elektrik bağlantısı ve soğutucu gaz yetkili servisin.

## Servisi aramadan önce kısa özet

1. Klimanın modeli ne (iç ünite etiketinden)?
2. Piller yeni mi, iç üniteden bip geliyor mu?
3. Kumanda hangi modu ve sıcaklığı gösteriyor?
4. Ekranda kilit simgesi var mı?
5. İç ünitede bir kod görünüyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Klima hiç açılmıyorsa [Carrier klima çalışmıyor](/blog/carrier-klima-calismiyor/), kumanda tamamen ölü görünüyorsa [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazısına bak. Bil, gör, çağır.
