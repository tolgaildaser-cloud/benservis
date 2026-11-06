---
title: "Kombi havası nasıl alınır: ECA ve DemirDöküm'e göre"
description: "Kombi havası nasıl alınır? ECA Citius Premix ve DemirDöküm Ademix kılavuzuna göre basınç kontrolü, AP hava tahliye modu, radyatör purjörü ve servis sınırı."
slug: "kombi-havasi-nasil-alinir"
date: "2026-11-10"
category: "Kombi"
updated: "2026-11-10"
kisaCevap: "Kombi havası iki yoldan çıkar: kombinin kendi hava tahliye modu ve radyatör purjörleri. ECA Citius Premix kılavuzuna göre basınç 0,8 barı geçince kombi 160 saniyelik AP moduna geçer. DemirDöküm Ademix kılavuzu purjörden hava alıp basıncı yeniden kontrol etmeni istiyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı, parti 3 (YK #215; BOSLUK.md sürüm 4 #324 "kombi havası nasıl alınır (pompa / tesisat)"; BOSLUK notu: petek-havasi-nasil-alinir kısmen). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: petek-havasi-nasil-alinir (purjör sırası, beş marka), kombi-su-ekleme-nasil-yapilir, kombi-basinci-kac-olmali. Bu yazı kombinin kendi hava tahliye modu, purjör adımı ve servis sınırı üzerine; petek ayrıntısı için petek yazısına bağlanıyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "kombi h" #1 "kombi havası nasıl alınır", #10 "kombi hava purjörü"; "kombi havası" #1 "…nasıl alınır", #2 "…alma", #4 "…kaç bar olmalı", #7 "…alınmazsa ne olur", #8 "…nereden alınır". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) E.C.A. Citius Premix yoğuşmalı kombi kılavuzu (40 s. PDF) https://eca.com.tr/uploads/documents//ccd/cba/eac/cba/303a9386-28c1-4d2f-b9e8-5eadf3729585.pdf md5 023164f7b7cebedc931411900edd72b0 — PDF s.6, 21, 24 · (C) DemirDöküm ademiX P24/24-AS/2, P28/28-AS/2 (H-TR) kullanma kılavuzu 8000037599_01 (16 s. PDF) https://www.demirdokum.com.tr/downloads/ademix-kullanm-klavuzu-3072082.pdf md5 49d7b83510651364a8bf6cc1fd7b654b — PDF s.9, 10, 13.
# BİLEREK YAZILMAYANLAR: kombi içindeki otomatik purjörü ya da pompayı açma, kapak sökme · servis menüsündeki hava alma programı (kullanıcı kılavuzunda yok) · kombi sosyal/video (yasak; yalnız blog) · fiyat (#46).
# Alıntı denetimi: kombi-havasi-nasil-alinir.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Hava tahliye anahtarı", "Bez", "Küçük kap"]
steps:
  - "Kombi soğukken ekrandaki basıncı oku."
  - "Isıtma sistemindeki tüm radyatör vanalarını aç."
  - "Basınç düşükse doldurma vanasını yavaşça açıp kapat."
  - "Kombinin AP hava tahliye modunu bitirmesini bekle."
  - "Radyatörlerin purjöründen su gelene kadar havayı al."
  - "Basıncı yeniden kontrol et, gerekirse doldurma ve hava almayı tekrarla."
  - "Hava kombinin içindeyse ya da sorun sürüyorsa servise başvur."
faq:
  - q: "Kombi havası kaç bar olmalı?"
    a: "Kılavuzlar hava için değil, tesisat suyunun basıncı için değer veriyor. ECA Citius Premix soğuk sistemde 1,5–2 bar istiyor. DemirDöküm Ademix 0,5 barın altında doldurmanı, gerekli sistem basıncını 1,0–1,4 bar olarak yazıyor."
  - q: "Kombi kendi havasını alır mı?"
    a: "ECA Citius Premix'te otomatik hava purjörü var. Kombi ilk elektrikte, elektrik kapatılıp açıldıktan sonra ve basınç hataları geçtikten sonra 160 saniyelik AP hava tahliye modunu uygular; bu sırada RESET'e basılmamalı."
  - q: "Kombi havası nereden alınır?"
    a: "Kullanıcı olarak radyatörlerden alırsın. DemirDöküm Ademix havayı tüm radyatörlerin öngörülen bağlantı noktasından, yani radyatörün üst sol ya da sağ tarafından almanı istiyor; bunun için hava tahliye anahtarı kullanılabilir."
  - q: "Hava alındıktan sonra basınç neden düşer?"
    a: "Purjörden çıkan hava ve suyla tesisattaki su azalır. DemirDöküm Ademix hava aldıktan sonra tesisat basıncını yeniden kontrol etmeni, gerekirse doldurma ve hava alma adımlarını tekrarlamanı istiyor."
images:
  coverAlt: "Duvarda sade bir kombi ve yanında sade bir petek çizimi"
  steps:
    - "Kombinin ekranındaki basınç göstergesine bakan beyaz eldivenli sade siluet el"
    - "Petek vanasını açan beyaz eldivenli sade siluet el"
    - "Kombinin altındaki doldurma vanasını çeviren beyaz eldivenli sade siluet el"
    - "Kombinin önünde bekleyen beyaz eldivenli sade siluet el"
    - "Petek üst köşesindeki purjöre anahtar takan, altta bez tutan beyaz eldivenli sade siluet el"
    - "Kombinin basınç göstergesini yeniden kontrol eden beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında sade kombi"
---

Kombi havası iki yoldan çıkar: kombinin kendi hava tahliye modu ve radyatörlerdeki purjörler. ECA Citius Premix kılavuzuna göre doldurmada su basıncı 0,8 barı geçince kombi 160 saniye süren AP hava tahliye moduna geçer. DemirDöküm Ademix kılavuzu ise tüm radyatörlerin havasını alıp tesisat basıncını yeniden kontrol etmeni istiyor.

İki kılavuz basınç değerini farklı veriyor: ECA soğuk sistemde 1,5–2 bar, Ademix 1,0–1,4 bar istiyor. Kendi kombinin kılavuzu başka bir değer veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız basınç okuma, vana açma ve radyatör purjöründen hava almayı anlatıyor. DemirDöküm Ademix ısıtma sistemindeki havanın aldırılması için yetkili servise başvurmanı istiyor; kombinin kapağı, pompası ve içindeki purjör servis işidir.

## Kombide hava nereden çıkar?

| | ECA Citius Premix | DemirDöküm Ademix |
|---|---|---|
| Kombinin kendisi | Otomatik hava purjörü; 160 sn AP modu | Isıtma sisteminde hava varsa yetkili servis |
| Radyatör | Purjörler gevşetilir, su gelene kadar hava çıkar | Üst sol ya da sağ bağlantı noktasından, hava tahliye anahtarıyla |
| Basınç | Soğukken 1,5–2 bar | 0,5 bar altında doldur; gerekli değer 1,0–1,4 bar |
| Sonra | Basınç yeniden 1,5–2 bara çıkarılır | Basınç kontrol edilir, gerekirse adımlar tekrarlanır |

## Adım adım: kombi havası nasıl alınır?

**1. Kombi soğukken ekrandaki basıncı oku.** ECA basınç göstergesini sık sık kontrol etmeni ve sistem soğukken 1,5–2 bar arasında olmasına dikkat etmeni istiyor. DemirDöküm Ademix ana ekranda güncel dolum basıncını gösteriyor; değer 0,5 barın altındaysa sistemi doldurmanı istiyor. Değerlerin ayrıntısı [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında.

**2. Isıtma sistemindeki tüm radyatör vanalarını aç.** ECA doldurmadan önce tüm radyatör vanalarının açılmasını, kalorifer gidiş-dönüş vanalarının açık olmasını istiyor. Ademix de ısıtma sisteminin tüm radyatör termostat vanalarını açmanı yazıyor.

**3. Basınç düşükse doldurma vanasını yavaşça açıp kapat.** Ademix doldurma vanasını yavaşça açmanı, gerekli sistem basıncına ulaşınca vanayı kapatmanı istiyor. ECA da vananın mutlaka kapatılmasını, aksi halde tesisat suyunun akıp ortama zarar verebileceğini yazıyor. Sıra için [kombi su ekleme nasıl yapılır](/blog/kombi-su-ekleme-nasil-yapilir/) yazısına bak.

**4. Kombinin AP hava tahliye modunu bitirmesini bekle.** ECA bu modda ekranda AP yazısının göründüğünü, sirkülasyon pompasının her 20 saniyenin 15 saniyesinde çalıştığını yazıyor. Mod ilk elektrikte, elektrik kapatılıp açıldıktan sonra ve basınç hataları geçtikten sonra da uygulanıyor. Kılavuz AP modu çalışırken kesinlikle RESET'e basmamanı istiyor.

**5. Radyatörlerin purjöründen su gelene kadar havayı al.** ECA radyatör purjörlerinin gevşetilip su gelene kadar havanın dışarı çıkmasına izin verilmesini, bunun tüm radyatörlerde yapılmasını istiyor. Ademix havayı radyatörün üst sol ya da sağ tarafındaki bağlantı noktasından almanı, bunun için hava tahliye anahtarı kullanılabileceğini yazıyor. Purjör sırası için [petek havası nasıl alınır](/blog/petek-havasi-nasil-alinir/) yazısına bak.

**6. Basıncı yeniden kontrol et, gerekirse doldurma ve hava almayı tekrarla.** Ademix havayı aldıktan sonra tesisat basıncını yeniden kontrol etmeni, gerekirse doldurma ve hava alma adımlarını tekrarlamanı istiyor. ECA basıncın yeniden 1,5–2 bara çıkarılmasını, radyatörlerde tekrar hava olup olmadığına bakılmasını yazıyor; tam verimli ısınma için tüm havanın tesisattan çıkması gerekiyor.

**7. Hava kombinin içindeyse ya da sorun sürüyorsa servise başvur.** Ademix arıza tablosunda ürün çalışmıyor ve ısıtma soğuk kalıyorsa olası nedenlerden biri olarak ısıtma sisteminde hava olmasını sayıyor; tedbir olarak havanın aldırılması için yetkili servise başvurmanı istiyor. Çok katlı tesisatta daha yüksek basınç gerekebileceğini, bunun için de servise danışmanı yazıyor.

## AP modu ne zaman kendiliğinden başlar?

ECA Citius Premix bu modu üç durumda uyguluyor: cihaza ilk kez elektrik verildiğinde ya da elektrik kapatılıp açıldıktan sonra, aşırı ısınma hatasından sonraki reset işleminin ardından ve yüksek ya da düşük su basıncı hatası geçtikten sonra. Mod boyunca üç yollu vana motoru da 40 saniyede bir konum değiştiriyor. Pompanın bu sıradaki aralıklı çalışması modun parçası; 160 saniye dolmadan RESET'e basma.

## Hava alınmazsa ne olur?

ECA tam verimli ısınma için tüm havanın tesisattan tahliye edilmesi gerektiğini yazıyor. Ademix ise uygun olmayan şebeke suyunun ısıtma sisteminde su geçen parçaları tıkayabildiğini ve seslere neden olabildiğini hatırlatıyor; bu yüzden ısıtma sistemine yalnız uygun ısıtma suyu doldurmanı istiyor. Tesisattan gelen ses sürüyorsa [kombi ses yapıyor](/blog/kombi-ses-yapiyor/) yazısındaki kontrol sırasına bak.

---

**Kaynak künyesi.** Otomatik hava purjörü, AP hava tahliye modu, doldurma vanası ve radyatör purjörü bilgisi E.C.A. Citius Premix kullanım ve montaj kılavuzundan; dolum basıncı, radyatörden hava alma, tekrar kontrolü ve servis sınırı DemirDöküm ademiX kullanma kılavuzundan alınmıştır. Kendi kombinin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu adımlardan sonra da petekler ısınmıyor ya da basınç tutmuyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
