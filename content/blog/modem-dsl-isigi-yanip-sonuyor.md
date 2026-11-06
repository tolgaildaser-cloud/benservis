---
title: "Modem DSL ışığı yanıp sönüyor: TP-Link'e göre ne yapılır?"
description: "Modemde DSL ışığı yanıp sönüyor ya da sönükse TP-Link belgeleri hattın eşleşmediğini söylüyor. Işık tablosu, splitter, kablo, reset ve operatör sırası."
slug: "modem-dsl-isigi-yanip-sonuyor"
date: "2026-11-10"
category: "Bilgisayar / yazıcı"
updated: "2026-11-10"
kisaCevap: "TP-Link Archer VR300 kılavuzuna göre DSL ışığının yanıp sönmesi hat eşleşmesinin sürdüğünü, sönük kalması bağlantı olmadığını gösterir. TP-Link SSS 735 önce modem türünü, sonra splitter ve 2 telefon kablosunu, sonra reseti, en son servis sağlayıcıyı kontrol etmeni istiyor. Işık dili markaya göre değişir."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #213 Salı paketi; BOSLUK.md sürüm 4 #410 "modem ışığı kırmızı yanıyor / yanıp sönüyor (internet, DSL, PON, power ışığı)"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya); envanterde hiç modem yazısı yok. Yakın: laptop-wifi-baglanmiyor, tv-internete-baglanmiyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "modem ışığı" #1 "…kırmızı yanıyor", #2 "…kırmızı yanıp sönüyor", #5 "…yanıp sönüyor", #6 "…yanıyor ama internet yok"; "modem yanıp sönüyor" #1, #5 "modem ds yanıp sönüyor", #7 "modem dsl yanıp sönüyor", #10 "modem power yanıp sönüyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200, ikisi de TP-Link'in kendi sayfası (HTML, İngilizce metin; TP-Link Türkiye alan adında): (A) TP-Link SSS 735 "What can I do if the xDSL LED indicator is not on constantly on my xDSL modem router?" https://www.tp-link.com/tr/support/faq/735/ md5 4b2811d3c57f5f0a3bcf5ce66b1a833d · (B) TP-Link Archer VR300 V1.2 kullanım kılavuzu, Bölüm 1 "Get to Know Your Modem Router" (LED tablosu) https://www.tp-link.com/en/user-guides/Archer-VR300_V1.2/chapter-1-get-to-know-about-your-modem-router md5 378ad4be0600fe719a0b30fe762eaa37. HTML'in md5'i indirme anına aittir (sayfa dinamik öğe içerebilir).
# IŞIK DİLİ: Yalnız Archer VR300'ün ışık tablosu yazıldı. Kırmızı renk bu tabloda tanımlı değil; operatör modemleri (Zyxel, Huawei vb.) belgelenmedi, genelleme yapılmadı.
# BİLEREK YAZILMAYANLAR: operatör modemlerinin renk dili · arayüz şifresi, PPPoE kullanıcı bilgileri · bina içi telefon hattı ve dış hat onarımı (operatör işi) · fiyat (#46).
# Alıntı denetimi: modem-dsl-isigi-yanip-sonuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yedek telefon kablosu", "İnce uçlu kalem"]
steps:
  - "Hangi ışığın nasıl yandığını tabloyla eşleştir."
  - "Power ışığı yanıp sönüyorsa modemi kapatma, bekle."
  - "DSL ışığı yanıp sönüyorsa hat eşleşmesinin bitmesini bekle."
  - "Modemin internet paketinle uyumlu olduğunu kontrol et."
  - "Splitter'ı çıkarıp modemi doğrudan duvar prizine bağla."
  - "Son çare olarak modemi resetle."
  - "Işık düzelmiyorsa servis sağlayıcını ara."
faq:
  - q: "Modemde DSL ışığı yanıp sönüyorsa ne demek?"
    a: "TP-Link Archer VR300 kılavuzuna göre DSL ışığı yanıp sönüyorsa hat eşleşmesi (senkronizasyon) sürüyordur. Işık sabit yanınca eşleşme tamamlanmıştır; sönükse DSL portunda bağlantı yoktur ya da eşleşme başarısız olmuştur."
  - q: "Modemde kırmızı ışık ne anlama gelir?"
    a: "Renk dili markaya ve modele göre değişir. TP-Link Archer VR300'ün ışık tablosunda kırmızı renk tanımlı değil; ışıklar yalnız yanar, yanıp söner ya da söner. Kırmızı ışık gösteren bir modemde kendi modelinin kılavuzundaki tabloya bak."
  - q: "Modemi resetlemek ayarları siler mi?"
    a: "Evet. Archer VR300 kılavuzu RESET düğmesine yaklaşık 2 saniye basmanın modemi fabrika ayarlarına döndürdüğünü yazıyor. TP-Link SSS 735 reset deliğine 7-10 saniye, tüm ışıklar bir kez yanıp sönene kadar basmanı söylüyor."
  - q: "Power ışığı yanıp sönerken modemi kapatabilir miyim?"
    a: "Hayır. Archer VR300 kılavuzuna göre Power ışığı yanıp sönüyorsa sistem açılıyor ya da yazılım güncelleniyordur; bu sırada modemin bağlantısını kesmemeni ve kapatmamanı istiyor."
images:
  coverAlt: "Sade modem ve üstünde yanıp sönen küçük ışık çizimi"
  steps:
    - "Modemin ön ışıklarına bakan beyaz eldivenli sade siluet el"
    - "Modemin yanında bekleyen ve fişe dokunmayan beyaz eldivenli sade siluet el"
    - "Modemin ışıklarını izleyen beyaz eldivenli sade siluet el"
    - "Modem kutusunun etiketine bakan beyaz eldivenli sade siluet el"
    - "Telefon kablosunu duvar prizine takan beyaz eldivenli sade siluet el"
    - "Modemin arkasındaki küçük deliğe kalem ucuyla basan beyaz eldivenli sade siluet el"
    - "Telefonla arama yapan beyaz eldivenli sade siluet el"
---

Modemde DSL ışığı yanıp sönüyorsa modem telefon hattıyla eşleşmeye çalışıyor ama bağlantıyı kuramıyor demektir. TP-Link Archer VR300 kılavuzu yanıp sönen DSL ışığını "eşleşme sürüyor", sönük ışığı "bağlantı yok ya da eşleşme başarısız" olarak tanımlıyor; TP-Link SSS 735 bu durum için 4 adımlık bir kontrol sırası veriyor.

Bu sıra modem türü, splitter ve 2 telefon kablosu, reset ve en son servis sağlayıcıdan oluşuyor. Işık dili markaya ve modele göre değişir; aşağıdaki tablo yalnız Archer VR300'e aittir. Operatörden aldığın modem başka markaysa **kendi modelinin kılavuzu esastır.**

> ⚠️ **Sınır.** Bu yazı kullanıcı kontrollerini anlatıyor. Bina içi telefon hattı, dış hat ve santral tarafı servis sağlayıcının işidir; modemi açmak ya da adaptörü onarmak servis işidir.

## Modem ışıkları ne anlama gelir?

| Işık | Yanıyor | Yanıp sönüyor | Sönük |
|---|---|---|---|
| Power | Sistem açıldı | Açılıyor ya da yazılım güncelleniyor | Güç yok, adaptörü kontrol et |
| DSL | Hat eşleşmesi tamam | Eşleşme sürüyor | Bağlantı yok ya da eşleşme başarısız |
| Internet | İnternet var | — | İnternet bağlantısı kurulamadı |
| Wireless | Kablosuz ağ çalışıyor | WPS eşleşmesi sürüyor | Kablosuz kapalı |
| LAN | En az bir cihaz bağlı | — | Kablolu cihaz yok |

Kaynak: TP-Link Archer VR300 kılavuzu. Bu tabloda kırmızı renk tanımlı değil.

## Adım adım: modem DSL ışığı yanıp sönüyorsa ne yapılır?

**1. Hangi ışığın nasıl yandığını tabloyla eşleştir.** DSL sabit, Internet sönükse sorun hat eşleşmesinde değil, internet bağlantısının kurulmasındadır. DSL yanıp sönüyor ya da sönükse aşağıdaki sırayla ilerle.

**2. Power ışığı yanıp sönüyorsa modemi kapatma, bekle.** Archer VR300 kılavuzuna göre bu sırada sistem açılıyor ya da yazılım güncelleniyordur; modemin bağlantısını kesmemeni ve kapatmamanı istiyor. Power hiç yanmıyorsa güç adaptörünün doğru takıldığını kontrol et.

**3. DSL ışığı yanıp sönüyorsa hat eşleşmesinin bitmesini bekle.** Yanıp sönen DSL ışığı eşleşmenin sürdüğünü gösterir. Işık sabitlenmiyor, sürekli yanıp sönüyor ya da sönüyorsa TP-Link SSS 735 modemin internet hattıyla düzgün bağlantı kuramadığını söylüyor. Archer VR300 kılavuzu DSL ışığı sönükse önce internet bağlantısını, yani kabloların doğru takılıp takılmadığını kontrol etmeni istiyor.

**4. Modemin internet paketinle uyumlu olduğunu kontrol et.** TP-Link'e göre VDSL modem hem ADSL hem VDSL hizmetiyle çalışır, ADSL modem ise yalnız ADSL ile çalışır. Paketin VDSL ise ADSL modem eşleşmez; servis sağlayıcından aldığın paket bilgisini modem kutusundaki türle karşılaştır.

**5. Splitter'ı çıkarıp modemi doğrudan duvar prizine bağla.** SSS 735'e göre iki telefon kablosu vardır: modemden splitter'a giden ve splitter'dan duvardaki telefon prizine giden. Sorun ikisinden birinde olabilir. Splitter'ı çıkarıp modemi doğrudan duvar hattına bağla ya da iki kabloyu yenisiyle değiştir. Archer VR300'de DSL portu splitter'a ya da doğrudan telefon prizine bağlanır.

**6. Son çare olarak modemi resetle.** SSS 735 modem açıkken reset deliğine 7-10 saniye, tüm ışıklar bir kez yanıp sönene kadar basmanı söylüyor. Archer VR300 kılavuzu RESET düğmesine yaklaşık 2 saniye basmanın modemi fabrika ayarlarına döndürdüğünü yazıyor. Fabrika ayarına dönen modemde sonradan yaptığın ayarlar silinir; bu yüzden reseti kablo kontrollerinden sonraya bırak.

**7. Işık düzelmiyorsa servis sağlayıcını ara.** SSS 735 ilk üç kontrol işe yaramazsa servis sağlayıcıyla görüşmenin gerekli olduğunu, sunucunun çalışıp çalışmadığını, hattın sinyal verip vermediğini ya da bölgede bakım olup olmadığını sormanı öneriyor. Elinde eski modem varsa onu da dene; o da çalışmıyorsa sorun hattadır.

## DSL sabit ama internet yok, ne yapılır?

Archer VR300 tablosuna göre Internet ışığı sönükse başarılı bir internet bağlantısı yoktur, DSL ise eşleşmiş olabilir. Kılavuz, bağlantıyı daha önce başarıyla kurduysan internet hizmetinin şu an kullanılabilir olup olmadığını öğrenmek için servis sağlayıcıyla görüşmeni istiyor.

## Kablosuz ışığı neden yanıp söner?

Archer VR300'de kablosuz ışığının yanıp sönmesi WPS eşleşmesinin sürdüğünü gösterir. Bir cihaz bağlanırsa ışık sabitlenir; bağlantı olmazsa 2 dakika yanıp söndükten sonra sabit yanar. WPS eşleşmesi sırasında kablosuz özellik kapatılırsa ışık söner.

## Bu konuda hangi yazılara bakılır?

Modem ışıkları normal ama dizüstü bağlanmıyorsa [laptop Wi-Fi bağlanmıyor](/blog/laptop-wifi-baglanmiyor/), televizyon internete çıkmıyorsa [TV internete bağlanmıyor](/blog/tv-internete-baglanmiyor/) yazısına bak.

---

**Kaynak künyesi.** Işık tablosu, reset düğmesi ve DSL portu bilgisi TP-Link Archer VR300 V1.2 kullanım kılavuzunun 1. bölümünden; modem türü, splitter, kablo, reset ve servis sağlayıcı sırası TP-Link SSS 735 sayfasından alınmıştır. Kendi modeminin kılavuzu farklı bir ışık dili veriyorsa **kendi kılavuzun esastır.**

Bu adımlardan sonra da modem ışığı düzelmiyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
