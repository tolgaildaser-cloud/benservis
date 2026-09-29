---
title: "Samsung bulaşık makinesi kurutmuyor"
description: "Samsung bulaşık makinesi kurutmuyorsa Samsung'un sırası: parlatıcı, parlatıcı ayarı, yükleme, tablet seçeneği, program ve boşaltma sırası."
slug: "samsung-bulasik-makinesi-kurutmuyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, PAZ belirti damarı). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung TÜRKİYE'den indirildi, HTTP 200.
# #88: web araması kullanılmadı; URL'ler 27 Eyl sprint kaynak klasöründen. ABD Samsung kaynağı YOK.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-bulasik-sprint/2026-09-29/ · pdftotext -layout · sayfa = BASILI sayfa no (PDF sayfası parantezde).
#  (A) DW5500MM DD81-02615C-11 (KA/TR, 2024-11-08) …CttFileID=10095923…  200 s. md5 2ad54a56734b93dbaeefbcd4fdc3b385
#  (C) DW8500AM DD81-03206J-04 (TR, 2023-06-28) …CttFileID=9233776…  172 s. md5 0bac38bffb63954fc975765ab1c13167
#  (D) DW9000H DD68-00158F-09 (TR, 2018-05-09) …CttFileID=7034806…  132 s. md5 370daab2b2de63dacb7920a1e1e60c79
#  (S) Samsung TR "Bulaşık Makinesi Hakkında SSS" https://www.samsung.com/tr/home-appliances/faq-dishwasher/  md5 2c207b04ed68b499fb1fbbb3f7711441 (HTML dinamik)
#  (tam URL'ler: samsung-bulasik-makinesi-kurutmuyor.KAYNAK.md)
# "Bulaşıklar iyi kurumamış." — C s.70 (PDF 154): "Dağıtıcıda parlatıcı yoktur veya yeterli miktarda parlatıcı kullanılmıyordur. → Parlatıcı ekleyin. Parlatıcı ayarlarını kontrol edin." ·
#   "Çok fazla bulaşık yerleştirilmiştir. → Çok fazla bulaşık yerleştirme kurutma performansını düşürebilir. Bulaşıklarınızı önerilen şekilde yerleştirin." ·
#   "Bardaklar ve fincanlar çıkarılırken diğer bulaşıkların üzerine su sıçrıyor. → Önce alt sepeti ve sonra üst sepeti boşaltın." ·
#   "Yüksek Sıcaklıkta Yıkama seçeneği kullanılmadan birden fazla deterjan tableti kullanılmıştır. → Yüksek Sıcaklıkta Yıkama seçeneğini seçin veya parlatıcı kullanın."
#   D s.37 (PDF 79) "Bulaşıklar iyi kurumuyor" aynı (Kurutma+ fonksiyonu) + "Altları içbükey olan bardak ve fincanlarda su birikir…"
# "Bulaşıklar kuru değil" — A s.53 (PDF 117): "Parlatıcı dağıtıcısı boştur. → Parlatıcı dağıtıcısının doldurulduğundan emin olun." · "Uygun olmayan program. → Daha yoğun bir yıkama programı seçin."
# S: "Bulaşıklarınız düzgün kuramıyorsa bulaşık makinesinin aşırı doldurulmadığından emin olun. Bu durum hava akışını engelleyebilir. Daha iyi sonuçlar için parlatıcı kullanın ve doğru ayar için kullanıcı kılavuzunuzu kontrol edin. Düşük parlatıcı seviyesi mesajı görüntülenirse parlatıcı haznesini doldurun." · AutoRelease (kapağı ~10 cm açar).
# Diğer: A s.23 (PDF 87) parlatıcı doldurma, yalnız sıvı parlatıcı, maks. seviye · A s.24 (PDF 88) parlatıcı miktarı d1-d5 + Çoklu tablet seçeneği · C s.55-56 (PDF 139-140) Otomatik kapı açma A0/A1 + parlatıcı F1-F5 (varsayılan F4) ·
#   D s.13 (PDF 55) Kurutma+ açıklaması · A s.25 (PDF 89) boşaltma sırası · A s.41 (PDF 105) aşırı doldurma yıkama ve kurutmayı düşürür.
# BİLEREK YAZILMAYANLAR: ısıtıcı/rezistans/fan teşhisi (Samsung tablosunda kurutma için yok) · "plastikler kurumaz" gibi genel bilgi (Samsung TR belgesinde bu belirti için yok) ·
#   parlatıcı ayarının hangi değere getirileceği (Samsung yalnız aralığı veriyor) · süre/parça/fiyat (#46, #31).
# Alıntı denetim tablosu: samsung-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Sıvı parlatıcı", "Makinenin kullanma kılavuzu"]
steps:
  - "Parlatıcı Doldur göstergesi yanıyorsa parlatıcı haznesini sıvı parlatıcıyla, maksimum seviyeyi geçmeden doldur."
  - "Parlatıcı miktarı ayarını kılavuzundaki tuş sırasıyla kontrol et."
  - "Makineyi aşırı doldurma; bulaşıkları önerilen şekilde ve eğimli yerleştir."
  - "Çoklu deterjan tableti kullanıyorsan modelindeki ilgili seçeneği seç ya da parlatıcı kullan."
  - "Kuruma yetersizse daha yoğun bir yıkama programı seç."
  - "Program bitince önce alt sepeti, sonra üst sepeti boşalt."
  - "Modelinde otomatik kapı açma işlevi varsa ayarının açık olduğunu kontrol et."
faq:
  - q: "Samsung bulaşık makinesi bulaşıkları ıslak bırakıyor, ilk neye bakmalıyım?"
    a: "Parlatıcıya. Samsung'un Türkçe kılavuzlarında 'Bulaşıklar iyi kurumamış' satırının ilk nedeni dağıtıcıda parlatıcı olmaması ya da yeterli miktarda kullanılmaması; çözüm parlatıcı eklemek ve parlatıcı ayarlarını kontrol etmek. Samsung'a göre parlatıcı makinenin kurutma performansını artırır ve yalnızca sıvı parlatıcı kullanılmalıdır."
  - q: "Tablet deterjan kullanıyorum, parlatıcıya yine de gerek var mı?"
    a: "Samsung'un tablosunda kurumama nedenlerinden biri, ilgili seçenek kullanılmadan birden fazla deterjan tableti (kılavuzun başka yerindeki adıyla çoklu deterjan tableti) kullanılması; öneri ilgili seçeneği seçmek ya da parlatıcı kullanmak. Seçeneğin adı modele göre değişiyor: DW60M serisinde Çoklu tablet, DW60A serisinde Yüksek Sıcaklıkta Yıkama, DW60H serisinde Kurutma+. Samsung ayrıca tablet deterjanların yanında parlatıcı kullanmanın kurutma performansını artıracağını yazıyor."
  - q: "Üst sepetten alt sepetteki bulaşıklara su damlıyor, neden?"
    a: "Samsung'a göre altları içbükey olan bardak ve fincanlarda su birikir ve boşaltırken bu su diğer bulaşıkların üzerine dökülebilir. Öneri program bittikten sonra önce alt sepeti, ardından üst sepeti boşaltmak."
  - q: "Parlatıcı haznesini ağzına kadar doldurabilir miyim?"
    a: "Hayır. Samsung'un uyarısına göre hazne maksimum seviyeyi geçecek kadar doldurulmamalı; fazla parlatıcı program sırasında taşabilir. Parlatıcı haznesinde herhangi bir tür deterjan da kullanılmaz. Dökülen parlatıcıyı nemli bir bezle sil."
images:
  coverAlt: "Program bitiminde kapağı açılmış bir bulaşık makinesinin üst sepetinde üzerinde su damlaları kalmış bardaklar ve fincanlar"
---

Program bitti, kapağı açtın ve bardaklar hâlâ ıslak. Samsung'un Türkçe kullanım kılavuzunda bu durum için ayrı bir satır var: **"Bulaşıklar iyi kurumamış."** Samsung'un bu satırda saydığı nedenlerin hepsi ayar ve kullanım konusu: **parlatıcı, aşırı yükleme, boşaltma sırası ve tablet deterjan seçeneği.** Samsung Türkiye'nin sıkça sorulan sorular sayfası da aynı noktaları öne çıkarıyor. Bu yazıda Samsung'un listesini sırasıyla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Parlatıcı Doldur göstergesi yanıyor mu → hazneyi sıvı parlatıcıyla doldur → parlatıcı ayarını kontrol et → makineyi aşırı doldurma → tablet kullanıyorsan ilgili seçeneği seç ya da parlatıcı ekle → gerekirse daha yoğun program → önce alt sepeti boşalt. Otomatik kapı açma varsa açık olsun.

## Adım adım: evde denenecekler

**1. Parlatıcıyı doldur.** Samsung'un iki kılavuzundaki ilk neden aynı: **parlatıcı dağıtıcısı boş** ya da yeterli miktarda parlatıcı kullanılmıyor. Samsung'a göre **parlatıcı, bulaşık makinesinin kurutma performansını artırır.** Kontrol panelinde **Parlatıcı Doldur** göstergesi yandığında hazneyi doldur: hazne kapağını aç, **yalnızca sıvı parlatıcı** koy (toz parlatıcı hazne deliğini tıkar), kapağı kapat. Samsung'un uyarısı: hazneyi **maksimum seviyeyi geçecek kadar doldurma**, fazla parlatıcı program sırasında taşabilir; parlatıcı haznesine deterjan da koyma.

**2. Parlatıcı ayarını kontrol et.** Samsung'un tablosu parlatıcı eklemenin yanında **parlatıcı ayarlarını kontrol etmeni** de istiyor. Makine her programda verdiği parlatıcı miktarını ayarlamana izin veriyor; DW60M serisinde ayar **d1-d5** (minimum-maksimum), DW60A serisinde **F1-F5** arasında. Ayar moduna girmek için kullanılan tuşlar modele göre değişiyor; kendi kılavuzundaki "Parlatıcı miktarını ayarlama" bölümüne bak.

**3. Aşırı doldurma.** Samsung'a göre **çok fazla bulaşık yerleştirmek kurutma performansını düşürebilir;** bulaşıkları önerilen şekilde yerleştir. Samsung Türkiye'nin sıkça sorulan sorular sayfası nedenini de yazıyor: aşırı doldurma **hava akışını engelleyebilir.** Kılavuzun yerleştirme kuralı: bardak ve fincanlar **ters**, oyuklu parçalar suyun akabilmesi için **eğimli** durur.

**4. Tablet kullanıyorsan ilgili seçeneği seç.** Samsung'un tablosundaki bir neden: ilgili seçenek kullanılmadan **birden fazla deterjan tableti** (DW60M kılavuzundaki adıyla **çoklu deterjan tableti**) kullanılmış. Çözüm o seçeneği seçmek **ya da parlatıcı kullanmak.** Seçeneğin adı modele göre değişiyor: DW60M serisinde **Çoklu tablet**, DW60A serisinde **Yüksek Sıcaklıkta Yıkama**, DW60H serisinde **Kurutma+.** Samsung'un DW60M kılavuzuna göre çoklu tabletleri bu seçenek olmadan kullanırsan cihaz en iyi performansını göstermeyebilir; ayrıca tabletle birlikte parlatıcı kullanmak kurutmayı artırır.

**5. Daha yoğun bir program seç.** Samsung'un DW60M kılavuzundaki "Bulaşıklar kuru değil" satırında ikinci neden **uygun olmayan program**; öneri **daha yoğun bir yıkama programı** seçmek. DW60H serisinde **Kurutma+** seçeneği, Samsung'a göre daha uzun bir kurutma aşaması ve son durulamada daha yüksek sıcaklıkla kurutmayı iyileştirir (biraz daha fazla enerji harcar).

**6. Önce alt sepeti boşalt.** Samsung'a göre altları içbükey olan **bardak ve fincanlarda su birikir** ve boşaltırken bu su diğer bulaşıkların üzerine dökülebilir. Öneri: program bittikten sonra **önce alt sepeti, ardından üst sepeti** boşalt; böylece üst raftan damlayan su alttaki bulaşıklara gelmez.

**7. Otomatik kapı açmayı kontrol et.** Bazı Samsung modelleri kurutmayı iyileştirmek için programın sonunda kapağı kendiliğinden aralıyor. DW60A serisinin kılavuzuna göre bu işlev ayar modundan açılıp kapatılabiliyor (**A1: etkin, A0: devre dışı**; varsayılan A1). Samsung Türkiye'nin sayfasında bu özellik **AutoRelease** adıyla geçiyor: programın sonunda kapağı yaklaşık 10 cm açarak buharın çıkmasını sağlıyor. Modelinde bu işlev varsa kapalı olmadığına bak.

## Normal olanlar

Samsung'un tablosuna göre kurutma ve su boşaltma sırasında kapak kilidinin sağladığı havalandırma nedeniyle **biraz buhar gelmesi normaldir.** Borunun (makinenin iç haznesinin) altındaki çıkış çevresinde **az miktarda su kalması** da Samsung'a göre normaldir; su contasının nemli kalmasını sağlar.

## Ne zaman servis

Parlatıcı dolu ve ayarı kontrol edildi, makine aşırı doldurulmadı, tablet seçeneği ya da parlatıcı kullanıldı, daha yoğun program da denendi ve bulaşıklar hâlâ ıslak çıkıyorsa Samsung'un tablosu kullanıcıya başka adım vermiyor. Ekranda bir bilgi kodu görünüyorsa önce [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/) yazısına bak; örneğin HC yüksek sıcaklık ısıtma kontrolüdür, ayrıntısı [Samsung bulaşık makinesi HC hatası](/blog/samsung-bulasik-makinesi-hc-hatasi/) yazısında. Kod görünmeye devam ediyorsa Samsung'un notu: **yerel bir Samsung servis merkezine başvur.**

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, ayarlar, yükleme ve program seçimi kullanıcıya; makinenin içi uzmana aittir.

## Servisi aramadan önce iki dakikalık özet

1. Parlatıcı Doldur göstergesi yanıyor mu?
2. Parlatıcı ayarı hangi seviyede?
3. Tablet deterjan kullanıyor musun, ilgili seçeneği seçiyor musun?
4. Islaklık yalnız bardak ve fincanlarda mı, her yerde mi?
5. Ekranda bilgi kodu var mı?

Markadan bağımsız genel anlatım için [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/) ve [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazılarına bakabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
