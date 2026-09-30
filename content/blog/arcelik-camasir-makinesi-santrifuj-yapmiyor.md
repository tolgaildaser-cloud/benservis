---
title: "Arçelik çamaşır makinesi santrifüj yapmıyor"
description: "Arçelik çamaşır makinesi sıkma adımına geçmiyor ya da çamaşırlar ıslak çıkıyorsa Arçelik kılavuzundaki sıra: devir ayarı, dengesiz yük, tahliye, köpük."
slug: "arcelik-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Arçelik çamaşır belirti koşusu). Belgeler 28 Eyl'de download.arcelik.com.tr'den indirildi; A/B bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54  (sayfa atıfları esas olarak A)
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d
# Sorun giderme satırları: A s.36 / B s.34 "Ürün sıkma adımına geçmiyor. (*)": dengesizlik → otomatik dengesiz yük algılama sistemi · su tahliye edilemediği için sıkma yapmamış → Filtre ve tahliye hortumunu kontrol edin
#   · fazla deterjan → aşırı köpük, otomatik köpük sönümleme → Önerilen miktarda deterjan kullanın. A s.39 / B s.36 "Program sonunda çamaşırlar ıslak kalıyor. (*)": aynı köpük satırı.
#   (*) A s.39: "Çamaşırlar ürünün içinde iyi dağılmadığı zaman, ürün, kendisine ve çevresine zarar vermemek için sıkma adımına geçmez. Çamaşırları düzeltip tekrar sıkma yaptırın."
# Diğer: A s.30 C notu "Eğer makine sıkma adımına geçmiyorsa, Suda Bırakma fonksiyonu etkin olabilir ya da … dengesiz yük algılama sistemi devreye girmiş olabilir." (B s.27 aynı)
#   · A s.26 devir seçimi: Suda Bırakma / Sıkma Yok; suda bırakılan çamaşırı sıkmak için devri ayarla + Başla/Bekle · A s.26 Sıkma+Pompa programı · A s.31 çamaşır ekleme/çıkarma (Başla/Bekle ile beklemeye al)
#   · A s.14 tahliye hortumu 40 cm altında → tahliye zorlaşır, çamaşırlar aşırı ıslak çıkabilir · A s.35 titreşim satırı "çamaşırları elinizle düzelterek … eşit bir şekilde dağıtın" · A s.18 aşırı yük uyarısı.
# BİLEREK YAZILMAYANLAR: motor, kömür, tako, kart teşhisi (belgede yok) · devir/kalan nem rakamları (modele bağlı) · hata kodu (kaynağı 28 Eyl'de 403) · fiyat.
# Alıntı denetim tablosu: arcelik-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Sıkma devri göstergesine bak; Sıkma Yok seçiliyse istediğin sıkma devrini seç."
  - "Suda Bırakma seçiliyse sıkma devrini ayarla ve Başla/Bekle tuşuna bas."
  - "Başla/Bekle tuşuyla makineyi beklemeye al, kapak açılınca çamaşırları elinle düzelterek tambura eşit dağıt."
  - "Tahliye hortumunun kıvrılmadığını ve en az 40 cm yükseklikte olduğunu kontrol et."
  - "Su tahliye edilmediyse pompa filtresini kontrol et ve temizle."
  - "Bir sonraki yıkamada deterjanı önerilen miktarda kullan."
  - "Kapağı kapat ve sıkma devrini seçerek sıkmayı yeniden yaptır."
faq:
  - q: "Arçelik çamaşır makinem neden sıkma adımına geçmiyor?"
    a: "Arçelik'in sorun giderme tablosu üç sebep sayıyor: çamaşırlar dengesiz dağıldığı için otomatik dengesiz yük algılama sisteminin devreye girmesi, içerideki suyun tahliye edilememesi ve fazla deterjan yüzünden oluşan aşırı köpük nedeniyle otomatik köpük sönümleme sisteminin devreye girmesi. Kılavuzun bir notu dördüncüsünü ekliyor: Suda Bırakma fonksiyonu etkin olabilir."
  - q: "Makine sıkmadı ama arızalı değil mi?"
    a: "Olabilir. Arçelik'in kılavuzuna göre çamaşırlar makinenin içinde iyi dağılmadığında makine, kendisine ve çevresine zarar vermemek için sıkma adımına geçmez. Arçelik'in önerisi çamaşırları düzeltip tekrar sıkma yaptırmak."
  - q: "Suda Bırakma nedir, çamaşırı nasıl sıkarım?"
    a: "Arçelik'e göre Suda Bırakma, makineyi program biter bitmez boşaltmayacaksan çamaşırların buruşmasını önlemek için onları son durulama suyunda bekletiyor. Sıkmak istersen sıkma devrini ayarlayıp Başla/Bekle tuşuna basıyorsun; program devam ediyor, su tahliye ediliyor ve çamaşırlar sıkılıyor."
  - q: "Program süresi sıkma adımında duruyor, neden?"
    a: "Arçelik'in tablosuna göre sıkma adımında zamanlayıcı durabilir; sebep çamaşırların dengesiz dağılmış olması nedeniyle otomatik dengesiz yük algılama sisteminin devreye girmiş olabilmesi."
images:
  coverAlt: "Açık kapaklı ön yüklemeli çamaşır makinesinin tamburunda bir yana toplanmış ıslak nevresim ve havlular"
---

Program bitti, kapağı açtın ve çamaşırlar sırılsıklam; ya da süre göstergesi sıkma adımında takılıp kaldı. Arçelik'in çamaşır makinesi kullanma kılavuzundaki sorun giderme tablosunda bu durum iki satırda geçiyor: **"Ürün sıkma adımına geçmiyor"** ve **"Program sonunda çamaşırlar ıslak kalıyor."** Arçelik'in bu satırlarda saydığı sebepler dengesiz dağılmış çamaşır, tahliye edilemeyen su ve fazla deterjanın yaptığı köpük. Kılavuzun başka bir notu buna bir ayarı ekliyor: **Suda Bırakma fonksiyonu etkin olabilir.** Bu yazıda Arçelik'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıkma Yok ya da Suda Bırakma seçili mi → devri ayarla. Çamaşırlar bir yana toplanmış mı → elinle eşit dağıt. Su boşalmadıysa hortum ve pompa filtresine bak. Fazla deterjan köpük yapar, makine sıkmaz. Sonra sıkmayı yeniden yaptır.

## Adım adım: evde denenecekler

**1. Sıkma devri ayarına bak.** Arçelik'in devir seçimi bölümüne göre Sıkma Devri Ayar tuşuna bastıkça devir kademelerle azalıyor ve ardından, modele bağlı olarak, **"Suda Bırakma"** ve **"Sıkma Yok"** seçenekleri çıkıyor. **Sıkma Yok** seçildiğinde sıkma seviyesi gösterge ışıkları yanmıyor. Işıkların hepsi sönükse devri yeniden seç.

**2. Suda Bırakma'yı kontrol et.** Arçelik'in notu: **makine sıkma adımına geçmiyorsa Suda Bırakma fonksiyonu etkin olabilir.** Bu seçenek çamaşırları buruşmasınlar diye **son durulama suyunda bekletiyor.** Arçelik'e göre suda bıraktığın çamaşırları sıkmak istiyorsan **sıkma devrini ayarla ve Başla/Bekle tuşuna bas**; program devam eder, su tahliye edilerek çamaşırlar sıkılır.

**3. Çamaşırları eşit dağıt.** Tablodaki ilk sebep: **çamaşır, üründe dengesizlik yaratmış olabilir**; bu durumda **otomatik dengesiz yük algılama sistemi** devreye girer. Arçelik'in kılavuzuna göre çamaşırlar iyi dağılmadığında makine, **kendisine ve çevresine zarar vermemek için sıkma adımına geçmez.** Makineyi **Başla/Bekle** tuşuyla beklemeye al, yükleme kapağı açılabilir duruma gelene kadar bekle, sonra çamaşırları **elinle düzelterek** tamburun içine **eşit** dağıt. Arçelik aşırı yüklemeye karşı da uyarıyor: aşırı yüklendiğinde yıkama performansı düşer, ses ve titreşim problemleri oluşabilir.

**4. Tahliye hortumunu kontrol et.** İkinci sebep: **ürün içindeki su tahliye edilemediği için sıkma yapmamış olabilir.** Çözüm: **filtre ve tahliye hortumunu kontrol et.** Arçelik'in kurulum bölümüne göre hortum **en az 40, en çok 100 cm** yüksekliğe takılmalı; zemin seviyesinde ya da yere yakın (40 cm altında) yerleştirilirse **su tahliyesi zorlaşır ve çamaşırlar aşırı ıslak çıkabilir.** Hortumun bükülmemesine ve katlanmamasına da dikkat et.

**5. Pompa filtresine bak.** Aynı satırın diğer yarısı filtre. Su tamburda duruyorsa pompa filtresinin temizliği, Arçelik'in sırasıyla [Arçelik çamaşır makinesi su boşaltmıyor](/blog/arcelik-camasir-makinesi-su-bosaltmiyor/) yazısında adım adım anlatılıyor. Temizlikten önce makinenin fişini çek ve içerideki suyun soğumasını bekle.

**6. Deterjanı azalt.** Üçüncü sebep: **fazla deterjan kullanılması nedeniyle aşırı köpük oluşmuş ve otomatik köpük sönümleme sistemi devreye girmiş olabilir.** Arçelik'in çözümü: **önerilen miktarda deterjan kullan.** Kılavuz deterjan ambalajında tavsiye edilenden **fazla deterjan kullanılmamasını** istiyor.

**7. Sıkmayı yeniden yaptır.** Arçelik'in notundaki son adım: **çamaşırları düzeltip tekrar sıkma yaptır.** 7103 D kılavuzundaki **Sıkma+Pompa** programı, önce içerideki suyu tahliye edip sonra ayarlanmış sıkma devriyle çamaşırları sıkıyor; programı seçmeden önce istediğin sıkma devrini seçip **Başla/Bekle** tuşuna basıyorsun.

## Süre göstergesi sıkmada duruyorsa

Arçelik'in tablosuna göre ekranlı modellerde **sıkma adımında zamanlayıcı durabilir**; sebep çamaşırların dengesiz dağılmış olması nedeniyle **otomatik dengesiz yük algılama sisteminin** devreye girmiş olabilmesi. Çözüm yukarıdaki üçüncü adımla aynı: çamaşırları eşit dağıt.

Sıkma sırasında makine sallanıyor ya da ses yapıyorsa markadan bağımsız [çamaşır makinesi ses ve titreşim](/blog/camasir-makinesi-ses-titresim/) yazısına bak. Markadan bağımsız genel liste için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısı var.

## Sınır nerede biter

Devir ayarı, çamaşır dağılımı, deterjan miktarı, tahliye hortumu ve pompa filtresi kullanıcıya aittir. Arçelik'in tablosu bu belirti için kullanıcıya başka adım vermiyor. Sorun giderme bölümünün sonundaki uyarı açık: talimatları uygulamana rağmen sorun sürüyorsa ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Devir ayarlı, çamaşırlar dağıtılmış, su boşalıyor, deterjan normal ve makine hâlâ hiç sıkmıyorsa yetkili servise başvur. Diğer Arçelik konuları için [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Hangi programı ve kaç devri seçtin?
2. Suda Bırakma ya da Sıkma Yok seçili miydi?
3. Tamburda tek büyük parça mı vardı, yoksa çok mu doluydu?
4. Makine suyu boşaltıyor mu?
5. Yıkama sırasında çok köpük görüldü mü?

Bu beşine cevabın varsa servise "santrifüj yapmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
