---
title: "Buzdolabı kendi kendine derece değiştiriyor ya da ötüyor"
description: "Buzdolabı kendi kendine derece değiştiriyor ya da ötüyorsa Bosch KGE ve Arçelik 5845 NFEY kılavuzlarına göre otomatik biten modlar, alarmlar ve kontroller."
slug: "buzdolabi-kendi-kendine-derece-degistiriyor"
date: "2026-11-10"
category: "Buzdolabı"
updated: "2026-11-10"
kisaCevap: "Buzdolabının derecesi kendi kendine değişiyorsa çoğu zaman süresi dolan bir mod normal ayara dönmüştür. Bosch KGE kılavuzunda süper soğutma yaklaşık 15 saat sonra önceki dereceye geçer, tatil modu soğutucuyu +14 °C yapar. Ötme genelde kapı alarmıdır: Bosch ve Arçelik 5845 NFEY'de kapı 1 dakika açık kalınca öter."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 2; BOSLUK.md sürüm 4 #308 "buzdolabı kendi kendine derece değiştiriyor / kendi kendine ötüyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya, a3d7ec3b). Yakın (marka): lg-buzdolabi-kapi-alarmi, liebherr-buzdolabi-alarm-veriyor, siemens-buzdolabi-alarm-resetleme; jenerik derece/alarm yazısı yok. buzdolabi-kac-derece-olmali ayar rehberi, kendi kendine değişme niyeti değil.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-ham-alinti.txt; teyit 07:17 _kaynak/OT-2026-11-06-teyit-p2.txt): "buzdolabı kendi kendine" #1 "…derece değiştiriyor", #2 "…ötüyor", #8 "samsung … derece değiştiriyor", #10 "bosch … alarm veriyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Bosch KGE.. soğutucu/dondurucu kombine cihazı kullanma kılavuzu 9000942062_D (31 s. PDF) https://media3.bosch-home.com/Documents/9000942062_D.pdf md5 fe03b1c8098c2a98f81913dd32feeca2 — PDF s.9, 10, 11, 12, 15, 23, 24 · (B) Arçelik 5845 NFEY / 8541 NFEY / 5850 NFY ve diğerleri buzdolabı kullanma kılavuzu (44 s. PDF) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7289120181_tr_TR20190724-090854-735.pdf md5 15ab677d45027c5992101461a78df4fa — PDF s.11, 18, 19, 21.
# BİLEREK YAZILMAYANLAR: Samsung modeli (belge bu koşuda yok) · E.. hata kodlarının anlamı (A s.23 yalnız "servisi çağırınız") · sensör/kart arızası teşhisi · sergileme modundan çıkış tuşu ayrıntısı dışında kendi kendini test · fiyat (#46).
# Alıntı denetimi: buzdolabi-kendi-kendine-derece-degistiriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu"]
steps:
  - "Ekranda yanan mod simgesine bak."
  - "Süper ya da hızlı soğutma bittiyse önceki dereceye döndüğünü bil."
  - "Tatil modu açıksa kapat."
  - "Eko modu açıksa otomatik ayarı kabul et ya da kapat."
  - "Ötme sesi geliyorsa kapıları kontrol et."
  - "Isı alarmını sustur ve göstergeyi izle."
  - "Ekranda E harfi ya da kod varsa servise haber ver."
faq:
  - q: "Buzdolabı neden kendi kendine derece değiştiriyor?"
    a: "Bosch KGE kılavuzunda süper soğutma yaklaşık 15 saat sonra otomatik olarak önceki dereceye döner, tatil modu soğutucuyu kendiliğinden +14 °C'ye ayarlar. Arçelik 5845 NFEY'de hızlı soğutma ve hızlı dondurma da süreleri dolunca otomatik iptal olur."
  - q: "Buzdolabı kapı kapalıyken neden öter?"
    a: "Bosch KGE'de ısı alarmı, dondurucu bölmesi çok ısınınca devreye girer ve alarm tuşuyla susturulur. Cihaz ilk çalıştırıldığında, çok taze gıda konulduğunda ya da kapı uzun açık kaldıysa gıdalar için tehlike olmadan da çalabilir."
  - q: "Buzdolabı kapısı kaç dakika açık kalınca öter?"
    a: "Bosch KGE kılavuzunda kapı alarmı soğutucu bölmesinin kapısı bir dakikadan uzun açık kalınca devreye girer. Arçelik 5845 NFEY'de kapı 1 dakika açık kalınca uyarı sesi duyulur; kapı kapatılınca ya da ekran düğmesine basılınca kesilir."
  - q: "Buzdolabının ekranı kendi kendine kararıyor, arıza mı?"
    a: "Arçelik 5845 NFEY kılavuzuna göre kapılar açılıp kapanmadığında enerji tasarrufu fonksiyonu otomatik devreye girer ve tasarruf simgesi dışındaki simgeler söner. Bir düğmeye basınca ya da kapı açılınca ekran normale döner; bu fonksiyon iptal edilemez."
images:
  coverAlt: "Sade buzdolabı kapağındaki dijital ekran çizimi"
  steps:
    - "Buzdolabı kapağındaki ekrana bakan beyaz eldivenli sade siluet el"
    - "Buzdolabı ekranındaki soğutma tuşuna basan beyaz eldivenli sade siluet el"
    - "Buzdolabı ekranındaki tatil tuşuna basan beyaz eldivenli sade siluet el"
    - "Buzdolabı ekranındaki yaprak simgeli tuşa uzanan beyaz eldivenli sade siluet el"
    - "Buzdolabı kapısını bastırarak kapatan beyaz eldivenli sade siluet el"
    - "Buzdolabı ekranındaki alarm tuşuna basan beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında buzdolabı"
---

Buzdolabının derecesi kendi kendine değişiyorsa çoğu zaman süresi dolan bir mod normal ayara dönmüştür. Bosch KGE kılavuzuna göre süper soğutma, soğutucu bölmesini yaklaşık 15 saat boyunca mümkün olduğu kadar soğuk tutar, ardından otomatik olarak önceki dereceye geçer; süper dondurma da yaklaşık 2½ gün sonra kendiliğinden kapanır. Kapı 1 dakikadan uzun açık kalınca hem Bosch KGE hem Arçelik 5845 NFEY uyarı sesi verir.

Arçelik 5845 NFEY kılavuzu hızlı soğutmanın en fazla 4 saat, hızlı dondurmanın en fazla 8 saat sonra ya da bölme yeterli soğukluğa ulaşınca otomatik iptal olduğunu yazıyor; aynı kılavuzdaki ikinci ekran tipinde bu süreler 2 ve 4 saat. Kendi buzdolabının kılavuzu farklı süre veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız ekran ve ayar kontrollerini anlatıyor. Ekranda E harfi ya da hata kodu görünüyorsa Bosch yetkili servisi çağırmanı istiyor. Sensör, elektronik kart ve soğutma devresi servis işidir.

## Buzdolabı neden kendi kendine derece değiştirir ya da öter?

| Durum | Bosch KGE | Arçelik 5845 NFEY |
|---|---|---|
| Hızlı/süper soğutma bitti | Yaklaşık 15 saat sonra önceki dereceye döner | En fazla 4 saat (diğer ekran: 2 saat) sonra iptal |
| Tatil modu | Soğutucu otomatik +14 °C | Soğutucuda "- -", soğutma yapılmaz |
| Kapı açık | 1 dakikadan uzun açıkta uyarı sesi | 1 dakika açıkta uyarı sesi |
| Sıcaklık uyarısı | Isı alarmı; alarm tuşu yanar | Ünlem işareti bir süre yanabilir |

## Adım adım: buzdolabı kendi kendine derece değiştiriyor ya da ötüyorsa ne yapılır?

**1. Ekranda yanan mod simgesine bak.** Bosch KGE'de süper soğutma, süper dondurma ve tatil modu açıkken ilgili tuş yanar. Arçelik 5845 NFEY'de hızlı soğut ve hızlı dondur simgeleri animasyonlu olarak yanıp söner; tatil, eko-ekstra ve ekonomik kullanım için ayrı göstergeler var.

**2. Süper ya da hızlı soğutma bittiyse önceki dereceye döndüğünü bil.** Bosch süper soğutmanın yaklaşık 15 saat sonra önceki ayarlanmış dereceye geçtiğini yazıyor. Arçelik hızlı soğut iptal edilmezse en fazla 4 saat sonra kendiliğinden kapanır ve elektrik kesintisinden sonra bu fonksiyon hatırlanmaz.

**3. Tatil modu açıksa kapat.** Bosch tatil modunda soğutucu bölmesinin otomatik olarak +14 °C'ye ayarlandığını, bu sürede soğutucuda besin saklamamanı yazıyor. Arçelik'te tatil fonksiyonu aktifken soğutucu göstergesinde "- -" belirir ve soğutucu bölmede soğutma yapılmaz. İki markada da modu aynı tuşa yeniden basarak kapatırsın.

**4. Eko modu açıksa otomatik ayarı kabul et ya da kapat.** Arçelik eko-ekstra fonksiyonu açıkken buzdolabının en az kullandığın zamanları otomatik algılayıp enerji tasarruflu soğutma yaptığını yazıyor. Eco-fuzzy açıksa cihaz en az 6 saat sonra en ekonomik modda çalışmaya başlar. Bu değişim istemiyorsan ilgili tuşa tekrar bas. Ayarların değişmesini hiç istemiyorsan Arçelik tuş kilidini öneriyor.

**5. Ötme sesi geliyorsa kapıları kontrol et.** Bosch kapı alarmının soğutucu kapısı bir dakikadan uzun açık kalınca devreye girdiğini, kapı kapatılınca sesin de kapandığını yazıyor. Arçelik'te kapı 1 dakika açık kalınca uyarı sesi duyulur; kapı kapatılınca ya da ekran düğmelerinden birine basınca ses kesilir. Arçelik bu uyarının opsiyonel bir özellik olduğunu, yani her modelde bulunmadığını belirtiyor.

**6. Isı alarmını sustur ve göstergeyi izle.** Bosch'ta dondurucu bölmesi çok ısınınca ısı alarmı çalar; alarm tuşuna bastığında gösterge 5 saniye boyunca bölmede ölçülen en yüksek dereceyi gösterir. Alarm cihaz ilk çalıştırıldığında, çok miktarda taze gıda konulduğunda ya da kapı uzun açık kaldıysa da çalabilir. Arçelik sıcak gıda yükleyince ünlem işaretinin bir süre yanabileceğini, bunun arıza olmadığını yazıyor.

**7. Ekranda E harfi ya da kod varsa servise haber ver.** Bosch ısı derecesi göstergesinde "E.." görünürse elektronik sistemin bir hata tespit ettiğini ve yetkili servisi çağırmanı yazıyor. Arçelik'te hata göstergesi aktifken dondurucu göstergesinde "E", soğutucu göstergesinde rakam belirir; bu rakamlar servise bilgi verir.

## Derece doğru ama buzdolabı soğutmuyorsa ne olur?

Bosch KGE kılavuzu cihaz soğutmuyor, ama ısı derecesi göstergesi ve aydınlatma yanıyorsa sergileme modunun devrede olabileceğini yazıyor; çıkmak için alarm tuşunu bir tasdik sesi duyulana kadar 10 saniye basılı tutmanı istiyor. Sıcaklık yaptığın ayardan çok farklıysa bazı durumlarda cihazı 5 dakika kapatmanın yeterli olduğunu, sıcaksa birkaç saat sonra, çok soğuksa ertesi gün yeniden kontrol etmeni öneriyor.

## Bu konuda hangi yazılara bakılır?

Doğru ayar için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/), kapı tam kapanmıyorsa [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/), yeniden başlatma için [buzdolabı resetleme](/blog/buzdolabi-resetleme/) yazısına bak.

---

**Kaynak künyesi.** Süper soğutma, süper dondurma, tatil modu, kapı ve ısı alarmı, E kodu ve sergileme modu bilgisi Bosch KGE.. soğutucu/dondurucu kombine cihazı kullanma kılavuzundan (9000942062_D); kapı açık uyarısı, hızlı soğut ve hızlı dondur süreleri, tatil, eko-ekstra, eco-fuzzy, ünlem ve hata göstergesi bilgisi Arçelik 5845 NFEY buzdolabı kullanma kılavuzundan alınmıştır. Kendi buzdolabının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu kontrollerden sonra da derece değişmeye ya da buzdolabı ötmeye devam ediyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
