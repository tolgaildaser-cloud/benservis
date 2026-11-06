---
title: "Yazıcı açılmıyor: Canon ve Brother'a göre ne yapılır?"
description: "Yazıcı açılmıyorsa Canon G2000 ve Brother DCP-L3520CDW kılavuzlarına göre güç düğmesi, kablo, fişi çekip bekleme ve priz kontrolünü sırayla yap."
slug: "yazici-acilmiyor"
date: "2026-11-10"
category: "Bilgisayar / yazıcı"
updated: "2026-11-10"
kisaCevap: "Yazıcı açılmıyorsa önce güç düğmesine bas ve kablonun prize sağlam takılı olduğuna bak. Canon G2000 kılavuzu fişi çekip en az 2 dakika beklemeni, Brother DCP-L3520CDW kılavuzu ani güç yükselmesinden sonra 10 dakika beklemeni istiyor. Yine açılmazsa servis gerekir."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 hafta sonu seti B; BOSLUK.md sürüm 4 #423 "yazıcı açılmıyor (Epson, Canon, HP)"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.321 dosya). Yakın: yazici-yazdirmiyor, yazici-cevrimdisi-gorunuyor, epson-yazici-hata-isiklari, canon-yazici-hata-kodlari (güç açılmama niyetini karşılamıyor).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "yazıcı açılmıyor" #1 "…ne yapmalıyım", #2 "yazıcı açılmıyor", #3 "epson…", #4 "canon…", #5 "hp…", #6 "brother…", #10 "yazıcı neden açılmıyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Canon G2000 series çevrimiçi kılavuz (TR) — Güç Yok UG026 https://ij.manual.canon/ij/webmanual/ErrorCode/G2000%20series/TR/ERR/err_ug_body01_0100.html md5 2a88dded1fcdfe3dac47b970c52290ee; Güç Kaynağı S715–S718 https://ij.manual.canon/ij/webmanual/Manual/All/G2000%20series/TR/BG/bg-component2100.html , bg-component2200.html , bg-component2300.html , Bg-Sm_Page5.html · (B) Brother DCP-L3520CDW / MFC-L3760CDW çevrimiçi kullanım kılavuzu (TR) — Diğer Sorunlar https://support.brother.com/g/s/id/htmldoc/mfc/cv_dcpl3520cdw/tur/html/GUID-7A0D7CF8-FE10-4366-AA5F-3C12864AC898_1.html md5 db864b5d01b23e7b3475ad303d8dd933.
# Epson ve HP: Epson'un Türkçe güç sorun sayfası bulunamadı; HP Türkçe destek sayfası düz curl'e 403 verdi (atlandı). Metin yalnız Canon G2000 ve Brother'ı anlatıyor.
# BİLEREK YAZILMAYANLAR: güç kartı, adaptör içi, sigorta sökümü (servis) · başka marka ışık kodları · fiyat (#46).
# Alıntı denetimi: yazici-acilmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Çalıştığı bilinen başka bir priz"]
steps:
  - "Güç düğmesine bir kez bas ve lambaya bak."
  - "Güç kablosunun hem yazıcıya hem prize sağlam takılı olduğunu kontrol et."
  - "Fişi çek, bekle, yeniden tak ve yazıcıyı aç."
  - "Uzatma ya da akım koruyucu kullanıyorsan aradan çıkar."
  - "Yazıcıyı çalıştığından emin olduğun başka bir prize tak."
  - "Kabloda ve prizde ısınma, bükülme ya da aşınma var mı, bak."
  - "Yine açılmıyorsa yetkili servise başvur."
faq:
  - q: "Yazıcı neden hiç açılmaz?"
    a: "Brother DCP-L3520CDW kılavuzuna göre yıldırım ya da ani güç yükselmesi gibi olumsuz koşullar makinenin dahili güvenlik mekanizmalarını tetikleyebiliyor. Canon G2000 kılavuzu ise önce Açma düğmesini ve güç kablosunun prize sağlam bağlı olmasını kontrol etmeni istiyor."
  - q: "Yazıcının fişini çekip ne kadar beklemeliyim?"
    a: "Canon G2000 kılavuzu fişi prizden çıkarıp en az 2 dakika beklemeni, sonra tekrar takıp makineyi açmanı istiyor. Brother DCP-L3520CDW kılavuzu güç kablosunu çıkarıp on dakika beklemeni yazıyor."
  - q: "Yazıcı kendi kendine kapanıyor, bu arıza mı?"
    a: "Canon G2000'de belirli bir süre işlem yapılmadığında makineyi otomatik kapatma özelliği varsayılan olarak açık. Yani bir süre kullanılmayan yazıcının kapanmış olması arıza değil; Açma düğmesine basınca yeniden açılır."
  - q: "Yazıcı açılmıyorsa ne zaman servise gitmeliyim?"
    a: "Canon kontrolleri işe yaramazsa onarım için en yakın Canon servis merkezine başvurmanı istiyor. Kablo ya da priz sıcak, paslı, bükülmüş ya da aşınmışsa Canon kabloyu çıkarıp servisi aramanı söylüyor."
images:
  coverAlt: "Sade yazıcı ve yanında sigorta kutusu çizimi"
  steps:
    - "Yazıcının güç düğmesine basan beyaz eldivenli sade siluet el çizimi"
    - "Yazıcının arkasındaki güç kablosunu yerine oturtan beyaz eldivenli sade siluet el"
    - "Duvardaki prizden fişi çeken beyaz eldivenli sade siluet el"
    - "Uzatma kablosunu aradan çıkaran beyaz eldivenli sade siluet el"
    - "Fişi başka bir duvar prizine takan beyaz eldivenli sade siluet el"
    - "Güç kablosunu boydan boya inceleyen beyaz eldivenli sade siluet el"
    - "Telefonla arama yapan beyaz eldivenli sade siluet el, yanında yazıcı"
---

Yazıcı açılmıyorsa önce güç düğmesine bir kez bas ve güç kablosunun prize sağlam takılı olduğuna bak. Canon G2000 kılavuzu bu iki kontrolden sonra fişi prizden çıkarıp en az 2 dakika beklemeni, ardından yeniden takıp makineyi açmanı istiyor. Brother DCP-L3520CDW kılavuzu da güç kablosunu çıkarıp on dakika bekledikten sonra yeniden denemeni yazıyor.

Brother'a göre yıldırım ya da ani güç yükselmesi gibi olumsuz koşullar makinenin dahili güvenlik mekanizmalarını tetikleyebiliyor. Canon G2000'de ise bir süre işlem yapılmadığında makineyi otomatik kapatma özelliği varsayılan olarak açık. Kendi yazıcının kılavuzu farklı bir sıra veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Güvenlik.** Kablo ya da priz sıcaksa, paslanmış, bükülmüş ya da aşınmışsa Canon kabloyu çıkarıp servisi aramanı istiyor; bu durumda kullanım yangın ya da elektrik çarpması riski taşıyor. Yazıcının içini ve güç kartını açmak servis işidir.

## Yazıcı neden açılmaz?

| Durum | Canon G2000 | Brother DCP-L3520CDW |
|---|---|---|
| Düğme | Açma düğmesine bas; lamba yanıp söner, sonra sürekli yanar | Makineyi açmak için güç düğmesine bas |
| Kablo | Prize güvenli bağlı olmalı | Farklı bir elektrik kablosu dene |
| Bekleme | Fişi çek, en az 2 dakika bekle | Kabloyu çıkar, on dakika bekle |
| Priz | Kablo ve prizi ayda bir kontrol et | Çalıştığı bilinen başka bir prize tak |
| Kendiliğinden kapanma | Otomatik kapatma varsayılan olarak açık | Güç kesiciyi aradan çıkar |

## Adım adım: yazıcı açılmıyorsa ne yapılır?

**1. Güç düğmesine bir kez bas ve lambaya bak.** Canon G2000'de makine açıldığında Açma lambası yanıyor; açarken lamba önce yanıp sönüyor, sonra sürekli yanıyor. Lamba yanıp sönerken düğmeye tekrar basma, bekle. Canon açıldıktan sonra yazdırmanın başlamasının biraz zaman alabileceğini de yazıyor.

**2. Güç kablosunun hem yazıcıya hem prize sağlam takılı olduğunu kontrol et.** Canon'un "Güç Yok" sayfasındaki ikinci kontrol bu: kablo prize güvenli bağlanmış mı, bak ve makineyi tekrar aç. Kablonun yazıcı tarafındaki ucu da yuvasına tam oturmalı.

**3. Fişi çek, bekle, yeniden tak ve yazıcıyı aç.** Canon G2000 için bekleme en az 2 dakika. Brother DCP-L3520CDW, ani güç yükselmesinden sonra dahili güvenlik mekanizmasının devreye girdiği durumda on dakika beklemeni istiyor. Hangisinin yazıcın olduğunu bilmiyorsan on dakika bekle; iki kılavuzun da süresini karşılarsın.

**4. Uzatma ya da akım koruyucu kullanıyorsan aradan çıkar.** Brother, sorun sürüyorsa ve bir güç kesici kullanıyorsan, sorunun bu olmadığından emin olmak için bağlantısını kesmeni istiyor. Yazıcıyı doğrudan duvar prizine tak.

**5. Yazıcıyı çalıştığından emin olduğun başka bir prize tak.** Brother bu adımı açıkça yazıyor: makinenin güç kablosunu, çalıştığından emin olduğun farklı bir prize tak. Hâlâ güç yoksa Brother farklı bir elektrik kablosu denemeni öneriyor.

**6. Kabloda ve prizde ısınma, bükülme ya da aşınma var mı, bak.** Canon güç prizini ve kablosunu ayda bir kontrol etmeni istiyor: sıcaklık, pas, bükülme, aşınma ya da ayrılma. Bunlardan birini görürsen kabloyu çıkar ve yazıcıyı kullanma.

**7. Yine açılmıyorsa yetkili servise başvur.** Canon bu kontroller sorunu çözmezse onarım için en yakın Canon servis merkezine başvurmanı istiyor. Mürekkep tanklı G2000'i taşırken eğme; Canon mürekkebin sızabileceğini yazıyor.

## Yazıcı kapalı mı, kendiliğinden mi kapandı?

Canon G2000'de belirli bir süre işlem yapılmadığında ya da makineye yazdırma işi gönderilmediğinde yazıcıyı otomatik olarak kapatma özelliği var ve bu özellik varsayılan olarak açık. Bir süre kullanmadığın yazıcıyı kapalı bulman bu yüzden arıza değil; Açma düğmesine basınca yeniden açılır. Canon yazdırma ya da tarama işi gönderildiğinde makineyi otomatik olarak açma özelliğini de anlatıyor, ancak bu özellik varsayılan olarak kapalı. Bilgisayardan iş gönderince yazıcının kendiliğinden açılmasını bekliyorsan bu ayarın açık olup olmadığına yazıcı sürücüsünün güç yönetimi bölümünden bak.

## Fişi çekmeden önce neye dikkat etmeli?

Canon, güç kablosunu prizden çıkarmadan önce Açma düğmesine basıp lambanın tamamen söndüğünü görmeni istiyor. Lamba yanarken ya da yanıp sönerken fişi çekmek yazıcı kafasının kurumasına ya da tıkanmasına yol açabiliyor ve baskı kalitesini düşürüyor. Yazıcı hiç açılmıyorsa lamba zaten sönük olduğu için bu adımı atlarsın; ama yazıcı açılıyor ve kilitleniyorsa önce düğmeyle kapat, sonra fişi çek.

## Bu konuda hangi yazılara bakılır?

Yazıcı açılıyor ama baskı başlamıyorsa [yazıcı yazdırmıyor](/blog/yazici-yazdirmiyor/), bilgisayar yazıcıyı görmüyorsa [yazıcı çevrimdışı görünüyor](/blog/yazici-cevrimdisi-gorunuyor/), ışıklar yanıp sönüyorsa [Epson yazıcı hata ışıkları](/blog/epson-yazici-hata-isiklari/) ya da [Canon yazıcı hata kodları](/blog/canon-yazici-hata-kodlari/) yazısına bak.

---

**Kaynak künyesi.** Güç düğmesi, kablo, bekleme süresi, otomatik kapanma ve kablo uyarısı bilgileri Canon G2000 series çevrimiçi kılavuzundan; güvenlik mekanizması, güç kesici, farklı priz ve kablo bilgisi Brother DCP-L3520CDW çevrimiçi kullanım kılavuzundan alınmıştır. Kendi yazıcının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu kontrollerden sonra da yazıcı açılmıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
