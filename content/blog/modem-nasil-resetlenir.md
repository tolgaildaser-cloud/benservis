---
title: "Modem nasıl resetlenir: TP-Link Archer VR300'e göre"
description: "Modem nasıl resetlenir ya da yeniden başlatılır? TP-Link Archer VR300 kılavuzuna göre ON/OFF düğmesi, yedekleme, Factory Restore ve RESET düğmesi sırası."
slug: "modem-nasil-resetlenir"
date: "2026-11-10"
category: "Bilgisayar / yazıcı"
updated: "2026-11-10"
kisaCevap: "TP-Link Archer VR300 kılavuzuna göre modemi yeniden başlatmak için ON/OFF düğmesiyle kapatıp açarsın; fabrika ayarına döndürmek için RESET düğmesine yaklaşık 2 saniye basarsın. Kılavuz sıfırlamadan önce ayarları yedeklemeni ve işlem sürerken modemi kapatmamanı istiyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 hafta sonu seti A; BOSLUK.md sürüm 4 #413 "modem nasıl resetlenir / yeniden başlatılır / sıfırlama"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.321 dosya); main'de modem yazısı yalnız modem-dsl-isigi-yanip-sonuyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "modem nasıl" #1 "…resetlenir", #5 "…yeniden başlatılır", #8 "…kapatılır"; "modem yeniden başlatma" #1, #2 "…nedir", #3 "…nasıl yapılır". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200, ikisi de TP-Link'in kendi kılavuz sayfası (HTML, İngilizce): (A) TP-Link Archer VR300 V1.2 kullanım kılavuzu Bölüm 1 https://www.tp-link.com/en/user-guides/Archer-VR300_V1.2/chapter-1-get-to-know-about-your-modem-router md5 378ad4be0600fe719a0b30fe762eaa37 · (B) TP-Link Archer VR300 V1.2 kullanım kılavuzu Bölüm 14 "Administrate Your Network" https://www.tp-link.com/en/user-guides/Archer-VR300_V1.2/chapter-14-administrate-your-network md5 522d4040e2a4fdae368f3a8b20e2b303.
# MODEL SINIRI: Yalnız Archer VR300 yazıldı. Operatör modemleri (Zyxel, Huawei, ZTE, Keenetic vb.) ve operatör destek sayfaları belgelenmedi; reset süresi ve düğme yeri genellenmedi.
# BİLEREK YAZILMAYANLAR: PPPoE kullanıcı adı/şifre girişi · uzaktan yönetim · yazılım yükleme ayrıntısı · fiyat (#46).
# Alıntı denetimi: modem-nasil-resetlenir.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bilgisayar ya da telefon", "Tarayıcı"]
steps:
  - "Yeniden başlatma mı sıfırlama mı gerektiğine karar ver."
  - "Yeniden başlatmak için ON/OFF düğmesiyle modemi kapatıp aç."
  - "Power ışığı yanıp sönerken modemi kapatma."
  - "Sıfırlamadan önce ayarlarını yedekle."
  - "Arayüzden Restore ya da Factory Restore seç."
  - "Arayüze giremiyorsan RESET düğmesine yaklaşık 2 saniye bas."
  - "Modem açılınca ışıkları kontrol et, gerekirse servis sağlayıcını ara."
faq:
  - q: "Modemi yeniden başlatmak ile resetlemek aynı şey mi?"
    a: "Hayır. TP-Link Archer VR300 kılavuzunda ON/OFF düğmesi modemi kapatıp açar; RESET düğmesi ise modemi fabrika ayarlarına döndürür. Yeniden başlatmada ayarların kalır, fabrika ayarına dönüşte sonradan yaptığın ayarlar silinir."
  - q: "Modem RESET düğmesine kaç saniye basılır?"
    a: "Archer VR300 kılavuzu RESET düğmesine yaklaşık 2 saniye basılı tutmanın modemi fabrika ayarlarına döndürdüğünü yazıyor. Süre ve düğmenin yeri modele göre değişir; başka marka modemde kendi kılavuzuna bak."
  - q: "Modemi resetlemeden önce ayarlar kaydedilebilir mi?"
    a: "Evet. Archer VR300 kılavuzuna göre Advanced > System Tools > Backup & Restore sayfasında Backup düğmesine basınca bilgisayarına conf.bin adlı bir yedek dosyası kaydedilir. Kılavuz sıfırlamadan önce bu yedeği almanı özellikle öneriyor."
  - q: "Sıfırlama sırasında modem kapatılırsa ne olur?"
    a: "Archer VR300 kılavuzu sıfırlama sürerken modemi kapatmamanı yazıyor. Power ışığı yanıp sönüyorsa sistem açılıyor ya da yazılım güncelleniyordur; bu sırada da bağlantıyı kesmemeni ve kapatmamanı istiyor."
images:
  coverAlt: "Sade modem ve yanında kontrol paneli çizimi"
  steps:
    - "Modemin önünde düşünen beyaz eldivenli sade siluet el"
    - "Modemin arkasındaki açma kapama düğmesine basan beyaz eldivenli sade siluet el"
    - "Modemin ışıklarını izleyen ve fişe dokunmayan beyaz eldivenli sade siluet el"
    - "Dizüstü bilgisayarda yedek dosyası kaydeden beyaz eldivenli sade siluet el"
    - "Dizüstü bilgisayarda ayar sayfasında düğmeye tıklayan beyaz eldivenli sade siluet el"
    - "Modemin arkasındaki küçük düğmeye basan beyaz eldivenli sade siluet el"
    - "Modemin ışıklarına bakıp telefonla arama yapan beyaz eldivenli sade siluet el"
---

Modemi resetlemek iki ayrı iş demektir: yeniden başlatmak ya da fabrika ayarlarına döndürmek. TP-Link Archer VR300 kılavuzuna göre yeniden başlatma için arka paneldeki ON/OFF düğmesiyle modemi kapatıp açarsın; fabrika ayarına dönüş için RESET düğmesine yaklaşık 2 saniye basılı tutarsın ya da arayüzde Factory Restore seçersin.

Kılavuz sıfırlamadan önce ayarları bir yedek dosyasına almanı ve işlem sürerken modemi kapatmamanı istiyor. Bu yazıdaki düğme adları ve süreler yalnız Archer VR300'e aittir; operatörden aldığın modem başka markaysa **kendi modelinin kılavuzu esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız kullanıcının yapabildiği yeniden başlatma ve sıfırlamayı anlatıyor. Modemi açmak, güç adaptörünü onarmak ya da bina içi telefon hattına müdahale etmek servis ve servis sağlayıcı işidir.

## Yeniden başlatma ile sıfırlama arasındaki fark nedir?

| İşlem | Archer VR300'de nasıl yapılır | Ayarlara ne olur |
|---|---|---|
| Yeniden başlatma | ON/OFF düğmesiyle kapat, sonra aç | Ayarlar kalır |
| Restore | Arayüzde Backup & Restore sayfasında Restore | Ayarlar varsayılana döner; giriş ve TP-Link ID bilgisi kalır |
| Factory Restore | Aynı sayfada Factory Restore | Modem fabrika ayarına döner |
| RESET düğmesi | Yaklaşık 2 saniye basılı tut | Modem fabrika ayarına döner |

Kaynak: TP-Link Archer VR300 kılavuzu, Bölüm 1 ve Bölüm 14.

## Adım adım: modem nasıl resetlenir?

**1. Yeniden başlatma mı sıfırlama mı gerektiğine karar ver.** Yalnız modemi kapatıp açmak istiyorsan yeniden başlatma yeter; ayarların yerinde kalır. Kılavuzun 14. bölümüne göre fabrika ayarına dönüş mevcut ayarları siler ve modemi varsayılan fabrika ayarlarına getirir. Bu yüzden sıfırlamayı yeniden başlatmadan sonraya bırak.

**2. Yeniden başlatmak için ON/OFF düğmesiyle modemi kapatıp aç.** Archer VR300'ün arka panelindeki ON/OFF düğmesi güç anahtarıdır; basınca modem kapanır ya da açılır. Modemi prize bağlayan POWER girişi de aynı paneldedir; kılavuz bu girişte cihazla birlikte verilen güç adaptörünü kullanmanı söylüyor. Modem kapandıktan sonra düğmeye yeniden basıp aç ve ışıkların yanmasını bekle.

**3. Power ışığı yanıp sönerken modemi kapatma.** Archer VR300'ün ışıkları üst paneldedir ve kılavuz modemin çalışma durumunu bu ışıklardan okumanı istiyor. Işık tablosuna göre Power ışığı yanıp sönüyorsa sistem açılıyor ya da yazılım güncelleniyordur. Bu sırada modemin bağlantısını kesmemeni ve kapatmamanı istiyor. Işık sabit yanınca sistem başarıyla açılmıştır; hiç yanmıyorsa güç adaptörünün doğru takıldığını kontrol et.

**4. Sıfırlamadan önce ayarlarını yedekle.** Bölüm 14'e göre tarayıcıda tplinkmodem.net adresine girip TP-Link ID'nle ya da belirlediğin şifreyle oturum açarsın. Advanced > System Tools > Backup & Restore sayfasında Backup düğmesine basınca bilgisayarına conf.bin adlı bir dosya kaydedilir. Kılavuz sıfırlamadan önce bu yedeği almanı özellikle öneriyor.

**5. Arayüzden Restore ya da Factory Restore seç.** Aynı sayfada Restore düğmesi tüm ayarları varsayılan değerlere döndürür, ama giriş ve TP-Link ID bilgini korur. Factory Restore ise modemi tamamen sıfırlar. İşlemin bitmesini bekle; modem kendiliğinden yeniden başlar. Sıfırlama sürerken modemi kapatma.

**6. Arayüze giremiyorsan RESET düğmesine yaklaşık 2 saniye bas.** Archer VR300'ün arka panelindeki RESET düğmesini yaklaşık 2 saniye basılı tutmak modemi fabrika ayarlarına döndürür. Bu yol arayüze giremediğinde de kullanılabilir, ama sonradan yaptığın tüm ayarlar silinir. Önceden aldığın yedek varsa bir sonraki bölümdeki gibi geri yükleyebilirsin.

**7. Modem açılınca ışıkları kontrol et, gerekirse servis sağlayıcını ara.** DSL ışığı sabit yanıyorsa hat eşleşmesi tamamdır; Internet ışığı sabitse internet hizmeti kullanılabilir. Kılavuz DSL ışığı sönükse önce kablo bağlantılarını kontrol etmeni, bağlantıyı daha önce başarıyla kurduysan servis sağlayıcınla görüşmeni istiyor.

## Yedek dosyası nasıl geri yüklenir?

Bölüm 14'e göre Advanced > System Tools > Backup & Restore sayfasında Browse ile daha önce kaydettiğin yedek dosyasını seçip Restore düğmesine basarsın. Geri yükleme bitince modem kendiliğinden yeniden başlar. Böylece fabrika ayarına dönen modemi ayarları tek tek girmeden eski hâline getirirsin. Yedek yoksa ayarları arayüzde baştan girmen gerekir. Yazılım güncellemesinden sonra da modem yeniden başlar; kılavuz güncelleme ve yeniden başlatma bitene kadar beklemeni istiyor.

## Bu konuda hangi yazılara bakılır?

Modemde DSL ışığı yanıp sönüyorsa [modem DSL ışığı yanıp sönüyor](/blog/modem-dsl-isigi-yanip-sonuyor/), modem çalışıyor ama dizüstü bağlanmıyorsa [laptop Wi-Fi bağlanmıyor](/blog/laptop-wifi-baglanmiyor/), televizyon internete çıkmıyorsa [TV internete bağlanmıyor](/blog/tv-internete-baglanmiyor/) yazısına bak.

---

**Kaynak künyesi.** ON/OFF ve RESET düğmeleri, POWER girişi ve ışık tablosu TP-Link Archer VR300 V1.2 kullanım kılavuzunun 1. bölümünden; yedekleme, geri yükleme, Restore ve Factory Restore bilgisi aynı kılavuzun 14. bölümünden alınmıştır. Kendi modeminin kılavuzu farklı bir düğme ya da süre veriyorsa **kendi kılavuzun esastır.**

Bu adımlardan sonra da modem düzgün çalışmıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
