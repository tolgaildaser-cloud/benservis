---
title: "Beko bulaşık makinesi resetleme nasıl yapılır"
description: "Beko bulaşık makinesinde reset, kılavuzdaki adıyla programın iptali: Başla / Bekle / İptal tuşuna 3 saniye. Çocuk kilidi, kalan su ve servis sınırı."
slug: "beko-bulasik-makinesi-resetleme"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork D). Konu seçimi: origin/main'de beko-bulasik-makinesi-resetleme yok, başlığında
#   "reset" geçen Beko bulaşık sayfası yok. Yakın: beko-bulasik-makinesi-hata-kodlari, -calismiyor, -su-bosaltmiyor, -e01/-e02 (ayrı sorgular).
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "beko bulaşık makinesi r" → 1. "beko bulaşık makinesi resetleme",
#   2. "…resetleme nasıl yapılır". GSC (https___www-5 3 ay, https___www-6 7 gün): satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Beko'nun alan adından (download.beko.com) indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) BM 5005 kullanım kılavuzu  36 s.  md5 91a260cf53261252526fea072f2d7eb4
#  (B) 3938 IL kullanım kılavuzu  34 s.  md5 86ef266bafb482f3a888acf3e8d7b975
#  (C) D3 3001 SY kullanım kılavuzu  29 s.  md5 fcfebfdf9fa48f34af026ec3d5739b45
# İptal A s.24, B s.24-25, C s.3 · çocuk kilidi B s.24 · program değiştirme B s.25 · erteleme iptali A s.24 · içeride su A s.26, A s.33
#   · makine çalışmıyor B s.31 · program sonu C s.4 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: Reset tuşu (belgelerde yok) · fişi çekerek sıfırlama · gizli tuş kombinasyonu / servis menüsü · E kodu silme hilesi
#   · pompa/kart teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: beko-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekranda çocuk kilidi göstergesi varsa kilidi kılavuzdaki tuş ikilisine 3 saniye basarak kapat."
  - "Program çalışırken Başla / Bekle / İptal tuşunu 3 saniye basılı tut."
  - "Gösterge yanıp sönmeye başlayınca tuşu bırak; makine iptal işlemine geçer."
  - "Makinenin içindeki suyu tahliye etmesini bekle; Bitti lambası yanınca iptal tamamdır."
  - "Yeni programı seç ve Başla / Bekle / İptal tuşuna basarak baştan başlat."
  - "İptalden sonra makinede su kaldıysa iptali tekrarla, sonra filtreleri temizle."
  - "Program bitince makineyi Açma / Kapatma ile kapat, musluğu kapa ve fişi çek."
  - "İptal ve kontrollerden sonra makine çalışmıyorsa ya da su boşalmıyorsa Beko yetkili servisine başvur."
faq:
  - q: "Beko bulaşık makinesinde reset tuşu var mı?"
    a: "BM 5005, 3938 IL ve D3 3001 SY kılavuzlarında Reset adında bir tuş yok. Karşılığı programın iptal edilmesi: program çalışırken Başla / Bekle / İptal tuşu 3 saniye basılı tutulur, gösterge yanıp sönünce bırakılır ve makine iptal için gereken işlemleri yapar."
  - q: "Beko bulaşık makinesi resetleme ne kadar sürer?"
    a: "BM 5005 ve 3938 IL kılavuzlarına göre makine birkaç dakika boyunca programın iptali için gerekli işlemleri yapar. D3 3001 SY kılavuzu daha net: makinedeki su 45 saniye içinde tahliye edilir, Yıkama ve Kurutma lambaları sönüp Bitti lambası yanınca program iptal edilmiş olur."
  - q: "Başla / Bekle / İptal tuşu tepki vermiyor, neden?"
    a: "Çocuk kilidi açık olabilir. 3938 IL kılavuzuna göre çocuk kilidi Başla / Bekle / İptal tuşunu etkisiz hale getirir. Kilit, Program Seçim ve Yarım Yük tuşlarına aynı anda 3 saniye basılarak açılıp kapanır. Kilit kapı kilidi değildir, kapıyı kilitlemez."
  - q: "Programı değiştirmekle iptal etmek aynı şey mi?"
    a: "Hayır. 3938 IL kılavuzuna göre makineyi bekletip yeni program seçersen yeni program öncekinin kaldığı yıkama adımından başlar; durulamada kaldıysa durulamadan devam eder. Programın en baştan çalışmasını istiyorsan önce iptal etmen gerekir."
  - q: "İptalden sonra bulaşıklarda deterjan kaldı, normal mi?"
    a: "Evet. Beko kılavuzları, iptal edilen programın kaldığı adıma bağlı olarak makinede ya da yıkanan parçalarda deterjan veya parlatıcı kalabileceğini yazıyor. Yeni bir program seçip çalıştırman yeterli."
images:
  coverAlt: "Modern bir mutfakta tezgâh altına yerleştirilmiş, kapağı kapalı beyaz bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Program yarıda kaldı, yanlış programı seçtin ya da makine bir türlü bitmiyor; Beko bulaşık makinesini "resetlemek" istiyorsun. Beko'nun kılavuzlarında **Reset adında bir tuş yok.** Karşılığı **programın iptal edilmesi** ve yolu üç kılavuzda da aynı: **Başla / Bekle / İptal tuşunu 3 saniye basılı tutmak.** Bu yazıda Beko'nun BM 5005, 3938 IL ve D3 3001 SY kullanım kılavuzlarından iptalin sırasını, ne kadar sürdüğünü, onu engelleyen çocuk kilidini ve iptalden sonra makinede su kalırsa ne yapılacağını çıkardık. Gösterge adları modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çocuk kilidi açıksa önce kapat. Program çalışırken Başla / Bekle / İptal tuşuna 3 saniye bas, gösterge yanıp sönünce bırak. Makine birkaç dakika içinde iptali tamamlar; D3 3001 SY'de su 45 saniyede boşalır ve Bitti lambası yanar. Sonra yeni programı baştan seç. Makinede su kalıyorsa filtreler, makine hiç çalışmıyorsa servis.

## Üç modelde iptal

| | BM 5005 | 3938 IL | D3 3001 SY |
|---|---|---|---|
| **Tuş** | Başla / Bekle / İptal, 3 saniye | Başla / Bekle / İptal, 3 saniye | Başla / Bekle / İptal, 3 saniye |
| **Ne zaman bırakılır** | Program göstergesi yanıp sönünce | Başla / Bekle göstergesi yanıp sönünce | Yıkama ve Kurutma lambaları yanıp sönünce |
| **Süre** | Birkaç dakika | Birkaç dakika | Su 45 saniyede tahliye |
| **Bitti işareti** | Kılavuzda ayrıca yazmıyor | Kılavuzda ayrıca yazmıyor | Bitti lambası |

## Adım adım: Beko bulaşık makinesini sıfırlama

**1. Çocuk kilidini kapat.** 3938 IL kılavuzuna göre çocuk kilidi, seçilen programın ya da fonksiyonların değiştirilmesini önler ve **Başla / Bekle / İptal tuşunu etkisiz hale getirir.** Yani kilit açıkken iptal de çalışmaz. Kilit, **Program Seçim ve Yarım Yük tuşlarına aynı anda üç saniye** basılarak açılır; ekranda Çocuk Kilidi göstergesi belirir. Kapatmak için aynı işlem tekrarlanır. Kılavuzun notu: çocuk kilidi **makinenin kapısını kilitlemez.**

**2. Başla / Bekle / İptal'e 3 saniye.** Üç kılavuzda da iptalin ilk adımı aynı: program çalışırken **Başla / Bekle / İptal tuşunu üç saniye basılı tut.** Kısa basmak programı yalnızca bekletir; kılavuzlar kısa basışı kapıyı açmadan önce makineyi durdurmak ve program değiştirmek için kullanıyor.

**3. Gösterge yanıp sönünce bırak.** BM 5005'te **program göstergesi,** 3938 IL'de **Başla / Bekle göstergesi** yanıp sönmeye başlayınca tuşu bırakırsın. D3 3001 SY'de işaret **Yıkama ve Kurutma lambalarının** yanıp sönmesidir.

**4. Tahliyeyi bekle.** BM 5005 ve 3938 IL kılavuzlarına göre makine **birkaç dakika boyunca** programın iptal edilmesi için gerekli işlemleri yerine getirir. D3 3001 SY kılavuzu süreyi veriyor: makinedeki su **45 saniye içinde** tahliye edilir, Yıkama ve Kurutma lambaları sönüp **Bitti lambası yandığında** program iptal edilmiş olur. Bu sırada kapağı açma.

**5. Yeni programı baştan seç.** İptalden sonra yeni bir program seçip çalıştırabilirsin. Burada fark önemli: 3938 IL kılavuzuna göre makineyi yalnızca bekletip yeni program seçersen yeni seçim **önceki programın kaldığı yıkama adımından** başlar; durulamada kaldıysa durulamadan devam eder. Programın en baştan çalışmasını istiyorsan **önce iptal etmen** gerekir. Kılavuzlar ayrıca iptal edilen programın kaldığı adıma bağlı olarak makinede ya da bulaşıklarda **deterjan veya parlatıcı kalabileceğini** yazıyor.

**6. Makinede su kaldıysa.** BM 5005'in bakım bölümü makinenin içinde su kalmışsa **"Programın iptal edilmesi" adımlarıyla suyun tahliye edilmesini** istiyor. Su yine boşalmıyorsa makinenin dip kısmında birikip su yolunu tıkayan kir parçaları temizlenir. Sorun giderme tablosu da program sonunda su kalmasının sebebi olarak **tıkalı filtreleri** ve tıkanmış ya da bükülmüş **tahliye hortumunu** sayıyor. Filtreleri temizlemeden önce fişi çek ve musluğu kapat. Ayrıntı [Beko bulaşık makinesi su boşaltmıyor](/blog/beko-bulasik-makinesi-su-bosaltmiyor/) yazısında.

**7. Program bitince kapat.** D3 3001 SY kılavuzuna göre kurutmanın tamamlanması beklenir, **Bitti lambası yandıktan sonra** makine Açma / Kapatma tuşuyla kapatılır, ardından **musluk kapanır ve fiş prizden çıkarılır.**

**8. Olmuyorsa servis.** 3938 IL'nin sorun giderme tablosu makine hiç çalışmıyorsa sırayla fişe, sigortaya, su musluğuna, kapının kapalı olmasına, Açma / Kapatma tuşuna ve filtrelere bakmanı istiyor. Bunlara rağmen sorun sürüyorsa **bayiye ya da Yetkili Servise** başvurulur; kılavuz çalışmayan ürünü **kendin onarmayı denememeni** yazıyor.

## Ertelemeyi iptal etmek

Erteleme açıkken makine çalışmaya başlamamış olabilir. BM 5005 kılavuzuna göre ertelemeyi iptal etmek için de **Başla / Bekle / İptal tuşu 3 saniye basılı tutulur;** erteleme süresi ve başlat-bekle ikonu söner. Ardından yeni bir program seçip çalıştırabilirsin. Kılavuzun notu: erteleme, program başladıktan sonra ayarlanamaz.

## Kapıyı açman gerekirse

Program sürerken kapıyı açmak iptal değil. Kılavuzlara göre önce Başla / Bekle / İptal tuşuna **kısa basarak** makineyi durdurursun, sonra kapıyı açarsın; içeriden **buhar çıkabilir,** dikkatli ol. Kapıyı kapatıp tuşa tekrar bastığında program **kaldığı yerden devam eder.**

## Ne zaman servis

- Çocuk kilidi kapalıyken de tuşlar tepki vermiyorsa
- İptal ve filtre temizliğinden sonra su hâlâ boşalmıyorsa
- Fiş, sigorta ve musluk tamamken makine çalışmıyorsa
- Ekranda bir hata kodu tekrar ediyorsa

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, çocuk kilidi, filtreler, musluk ve fiş sende; gövdenin içi, pompa, ısıtıcı ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda çocuk kilidi göstergesi ya da bir kod var mı?
3. 3 saniyelik iptalden sonra gösterge yanıp söndü mü?
4. İçeride su kaldı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kodlar [Beko bulaşık makinesi hata kodları](/blog/beko-bulasik-makinesi-hata-kodlari/), çalışmama belirtileri [Beko bulaşık makinesi çalışmıyor](/blog/beko-bulasik-makinesi-calismiyor/) yazısında. Bil, gör, çağır.
