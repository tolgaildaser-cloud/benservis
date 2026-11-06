---
title: "Kombi kendi kendine çalışıyor: ECA ve Bosch'a göre"
description: "Kombi kendi kendine çalışıyor ya da basıncı yükseliyorsa ECA Citius Premix ve Bosch Condens 1200W kılavuzundaki donma ve blokaj korumasına bak."
slug: "kombi-kendi-kendine-calisiyor"
date: "2026-11-10"
category: "Kombi"
updated: "2026-11-10"
kisaCevap: "Kombi kendi kendine çalışıyorsa çoğu zaman bir koruma işlevi devrededir. ECA Citius Premix kılavuzuna göre tesisat suyu 6 °C altına inince donma koruması devreye girer, elektrik gelince 160 saniyelik AP hava tahliye modu çalışır. Bosch Condens 1200W'de blokaj koruması pompayı korur."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı, parti 3 (YK #215; BOSLUK.md sürüm 4 #322 "kombi kendi kendine çalışıyor / kendi kendine su alıyor / petekleri ısıtıyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: kombi-basinci-kac-olmali, kombi-su-ekleme-nasil-yapilir, kombi-emniyet-ventili-ve-presostat, kombi-kis-moduna-nasil-alinir (hiçbiri kendiliğinden çalışma niyetini karşılamıyor).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "kombi kendi kendine" #1 "…su alıyor", #2 "…neden çalışır", #3 "…petekleri ısıtıyor", #4 "…çalışıyor", #7 "…bar yükseliyor", #10 "…devreye giriyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) E.C.A. Citius Premix 14/20/24/28 yoğuşmalı kombi kullanım ve montaj kılavuzu (40 s. PDF) https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf md5 023164f7b7cebedc931411900edd72b0 — PDF s.4, 5, 21, 24, 26 · (B) Bosch Condens 1200W GC1200W kullanma kılavuzu 6721835940 (2023/04) (12 s. PDF) https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835940 md5 a22315e51db093d2642aeb55bcbc8c02 — PDF s.3, 4, 7.
# BİLEREK YAZILMAYANLAR: eşanjör ya da doldurma vanası kaçağı teşhisi (belgede yok) · emniyet ventilini açma/kurcalama · kart arızası · kombi sosyal/video (yasak; yalnız blog) · fiyat (#46).
# Alıntı denetimi: kombi-kendi-kendine-calisiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Basınç göstergesi"]
steps:
  - "Kombinin ekranına bak, AP ya da değişmeli gösterim var mı not et."
  - "Elektrik yeni geldiyse hava tahliye modunun bitmesini bekle."
  - "Hava soğuksa donma korumasının devreye girdiğini hesaba kat."
  - "Kış ya da yaz modunu, program saatini ve oda termostatını kontrol et."
  - "Basınç göstergesini kombi soğukken oku."
  - "Doldurma vanasının tam kapalı olduğundan emin ol."
  - "Basınç yükselmeye devam ediyorsa servise haber ver."
faq:
  - q: "Kombi kapalıyken neden çalışır?"
    a: "ECA Citius Premix kılavuzuna göre cihaz OFF konumda olsa da donma koruması aktif kalır. Tesisat suyu 6 °C altına düşünce koruma devreye girer ve tesisat suyu çıkışı 15 °C'ye yükselene kadar cihaz çalışır."
  - q: "Elektrik gelince kombi neden kendi kendine çalışıyor?"
    a: "ECA Citius Premix, cihaza ilk kez elektrik verildiğinde ya da elektrik kapatılıp açıldıktan sonra 160 saniyelik hava tahliye modunu (AP) uygular. Bu sürede pompa her 20 saniyenin 15 saniyesinde çalışır; kılavuz bu sırada RESET'e basmamanı istiyor."
  - q: "Kombi kendi kendine petekleri neden ısıtır?"
    a: "ECA Citius Premix kış modunda cihazın kalorifer devresindeki suyu ısıttığını yazıyor; program saati varsa kombi ayarladığın saatlerde çalışır. Petekler beklemediğin saatte ısınıyorsa önce mod ve saat ayarına bak."
  - q: "Kombinin basıncı kendi kendine yükselirse ne yapmalıyım?"
    a: "ECA Citius Premix doldurma vanasının mutlaka kapatılmasını istiyor ve 3,3 ± 0,3 bar basınçta F40 hatası veriyor. Bosch Condens 1200W'de 3 bar aşılmamalı, emniyet ventili açılır. Hata sürerse yetkili servise haber ver."
images:
  coverAlt: "Sade kombi ve yanında sigorta kutusu çizimi"
  steps:
    - "Kombinin ekranına bakan beyaz eldivenli sade siluet el"
    - "Kombinin yanında bekleyen, düğmeye dokunmayan beyaz eldivenli sade siluet el"
    - "Kar taneli pencere önünde sade kombi ve yanında beyaz eldivenli sade siluet el"
    - "Duvardaki oda termostatına uzanan beyaz eldivenli sade siluet el"
    - "Kombinin basınç göstergesini işaret eden beyaz eldivenli sade siluet el"
    - "Kombinin altındaki doldurma vanasını kapatan beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında sade kombi"
---

Kombi kendi kendine çalışıyorsa önce kılavuzdaki koruma işlevlerine bakarsın; çoğu, kombi kapalıyken bile devreye giriyor. ECA Citius Premix kılavuzuna göre tesisat suyu 6 °C altına düşünce donma koruması çalışır, elektrik gelince 160 saniyelik hava tahliye modu başlar. Bosch Condens 1200W kılavuzu da pompayı koruyan bir blokaj korumasından söz ediyor.

Kendiliğinden su alma şikâyetinde iki kılavuzun verdiği ölçü basınç göstergesidir. ECA Citius Premix normal değeri soğuk sistemde 1,5–2 bar, Bosch Condens 1200W 1–2 bar olarak veriyor. Kendi kombinin kılavuzu farklı bir değer veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız ekran, ayar ve basınç kontrolünü anlatıyor. Bosch kılavuzu ısıtma cihazının dış sacını asla sökmemeni, gerekli çalışmaları yalnız yetkili servise yaptırmanı istiyor. Emniyet ventili, gaz ve elektrik aksamı servis işidir.

## Kombi neden kendi kendine çalışır?

| Durum | ECA Citius Premix | Bosch Condens 1200W |
|---|---|---|
| Soğuk hava | Tesisat suyu 6 °C altında donma koruması; OFF konumda da aktif | Yaz işletiminde yalnız cihaz donma koruması var |
| Elektrik geldi | 160 sn AP hava tahliye modu | — |
| Uzun süre kullanılmadı | Pompa sıkışma emniyeti | Blokaj koruması pompa ve 3 yollu vanayı korur |
| İlk çalıştırma | — | Sifonu doldurmak için yaklaşık 15 dk en düşük güç |
| Petek ısınıyor | Kış modu, program saati, oda termostatı | — |

## Adım adım: kombi kendi kendine çalışıyorsa ne yapılır?

**1. Kombinin ekranına bak, AP ya da değişmeli gösterim var mı not et.** ECA Citius Premix hava tahliye modunda ekranda AP yazısı gösteriyor. Bosch Condens 1200W'de ekranda bir sembolle gidiş suyu sıcaklığı değişmeli görünüyorsa cihaz, yoğuşma suyu sifonunu doldurmak için yaklaşık 15 dakika en düşük ısıl güçte kalıyor.

**2. Elektrik yeni geldiyse hava tahliye modunun bitmesini bekle.** ECA bu modu cihaza ilk kez elektrik verildiğinde ya da elektrik kapatılıp açıldıktan sonra uyguluyor. 160 saniye boyunca sirkülasyon pompası her 20 saniyenin 15 saniyesinde çalışıyor. Kılavuz AP modu çalışırken kesinlikle RESET'e basmamanı istiyor.

**3. Hava soğuksa donma korumasının devreye girdiğini hesaba kat.** ECA kış sezonunda tesisat suyu 6 °C altına düşünce donma korumasının devreye girdiğini, tesisat suyu çıkışı 15 °C'ye yükselene kadar cihazın çalıştığını yazıyor. Koruma için elektriğin açık, gaz ve radyatör vanalarının açık, basıncın uygun olması gerekiyor.

**4. Kış ya da yaz modunu, program saatini ve oda termostatını kontrol et.** ECA kış modunda cihazın, kullanım suyu ihtiyacı olana kadar kalorifer devresindeki suyu ısıttığını yazıyor. Program saati varsa kombi ayarladığın saatlerde çalışır; oda termostatı da mekan sıcaklığını ayarladığın seviyede tutar. Mod değişimi için [kombi kış moduna nasıl alınır](/blog/kombi-kis-moduna-nasil-alinir/) yazısına bak.

**5. Basınç göstergesini kombi soğukken oku.** ECA sistem soğukken 1,5–2 bar arasını istiyor. Bosch normal çalışma basıncını 1–2 bar, cihazın çalışma aralığını 0,6–3 bar olarak veriyor. Değerlerin ayrıntısı [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

**6. Doldurma vanasının tam kapalı olduğundan emin ol.** ECA su doldurma vanasını mutlaka kapatmanı, aksi halde tesisat suyunun akarak ortama zarar verebileceğini yazıyor. Doldurma sırası [kombi su ekleme nasıl yapılır](/blog/kombi-su-ekleme-nasil-yapilir/) yazısında.

**7. Basınç yükselmeye devam ediyorsa servise haber ver.** ECA su basınç sensörü 3,3 ± 0,3 bar algılayınca F40 hatası veriyor; hata devam ederse yetkili servisi istiyor. Bosch ısıtma suyunun en yüksek sıcaklığında 3 barın aşılmaması gerektiğini, aşılırsa emniyet ventilinin açıldığını yazıyor. Ventil hakkında [kombi emniyet ventili ve presostat](/blog/kombi-emniyet-ventili-ve-presostat/) yazısına bak.

## Kombi kapalıyken neden hâlâ çalışabilir?

ECA Citius Premix cihaz OFF konumda olsa da donma korumasının aktif kaldığını yazıyor; kombiyi düğmesinden kapattığında da bu işlev sürüyor. Bosch ise tersini hatırlatıyor: cihaz kapalıyken blokaj koruması söz konusu olmuyor. Isıtma tesisatı uzun süre kullanılmadığında pompanın ve 3 yollu vananın bloke olmasını bu koruma önlüyor; bu yüzden Bosch tesisatın sürekli devrede kalmasını istiyor.

## Basınç sık düşüyor ya da yükseliyorsa ne anlama gelir?

ECA basınç sık sık düşüyorsa sistemde su kaçağı olduğunu, bir tesisatçı çağırmak gerektiğini yazıyor. Bosch da sisteme sık su ekleniyorsa bunun çok su kaçağını gösterdiğini, her doldurmada sisteme oksijen girdiğini belirtiyor. Yükselen basınçta ise iki kılavuz da üst sınırı veriyor; nedenin bulunması servis işi.

---

**Kaynak künyesi.** Donma koruması, hava tahliye modu, kış modu, doldurma vanası ve F40 bilgisi E.C.A. Citius Premix kullanım ve montaj kılavuzundan; blokaj koruması, sifon doldurma, çalışma basıncı ve su kaçağı bilgisi Bosch Condens 1200W kullanma kılavuzundan alınmıştır. Kendi kombinin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu kontrollerden sonra da kombi beklenmedik biçimde çalışıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
