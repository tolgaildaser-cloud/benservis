---
title: "Bosch bulaşık makinesi çalışmıyor"
description: "Bosch bulaşık makinesi çalışmıyor ya da program başlamıyorsa Bosch'un sırası: sigorta, fiş, kapak, duraklatma, 5 saniye ayırma ve Reset."
slug: "bosch-bulasik-makinesi-calismiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
# md5'ler 28 Eyl yerel kopyalarıyla birebir aynı. #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (K) Bosch bulaşık makinesi SM.../SB... kullanma kılavuzu  https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#  (B) Bosch "Bulaşık Makineleri Bilgilendirme Kılavuzu"  https://media3.bosch-home.com/Documents/MCDOC02761050_BULASIK_MAKINELERI_BILGILENDIRME_KILAVUZU.PDF  2 s.  md5 e42639a08cc28269147fe723597350d3
# Arıza tablosu (K s.44): "Cihaz çalışmıyor." → "Evin sigortasında bir arıza var." → "Sigortayı kontrol ediniz." · "Cihazın fişi prize takılı değil." → "Elektrik şebekesi kablosunun cihazın arka yüzüne ve prize
#   tamamen takılmış olmasını sağlayınız. Prizin işler durumda olduğunu kontrol ediniz." · "Cihazın kapağı iyi kapatılmamış." → "Cihazın kapağını kapatınız." · "Duraklatma fonksiyonu aktiftir. *" → "START tuşuna X basınız. *"
#   · "Cihaz devreye sokulamıyor veya kullanılamıyor." → "İşlev bozuk." → "...fişini prizden çekip çıkarınız veya sigortayı kapatınız. En az 5 saniye bekleyiniz ve sonra cihazı elektrik şebekesine bağlayınız."
#   · "Cihaz kapağı kapatılamıyor." → kapak kilidinin konumu değişmiş → daha fazla kuvvetle kapat; kurulum engelliyor → kapaklar/monte parçalar hiçbir yere çarpmamalı
# K s.45 "Cihaz program esnasında duruyor veya program devre dışı kalıyor.": kapak tam kapalı değil · üst sepet kapağın iç kısmına bastırıyor · arka yüz priz/hortum tutucu nedeniyle içeri bastırılıyor mu · elektrik/su kesilmiş → yeniden sağla
# K s.35 Bilgi: "Eğer cihaz bulaşık yıkama işlemi esnasında belli olmayan sebeplerden dolayı duracak olursa veya çalışmaya başlamazsa, önce Program iptal (Reset) işlevini uygulayınız"
# Diğer: K s.31 cihazın açılması (musluğu sonuna kadar aç, AÇIK/KAPALI, START) + zaman ön seçimi (24 saate kadar; silmek için göstergede 00h:00m görününceye kadar - / +) · K s.32 Reset (START yakl. 3 sn) ve programa ara verme (AÇIK/KAPALI kapat → program hafızada kalır)
#   · K s.32 program değiştirme yalnız Reset ile · K s.30 Auto Power Off (program sonundan 1 dakika sonra kapanma) · K s.38 başka hata kodu → kapat, kısa süre sonra aç; tekrarlarsa musluk kapat, fiş çek, müşteri hizmetleri
#   · K s.44 "Kapak zor açılabiliyor." → çocuk emniyeti · B s.1 topraklı priz, çoklu priz/uzatma kablosu yok, tesisat için yetkili elektrikçi · K s.46 yetkili servis, E-Nr/FD.
# BİLEREK YAZILMAYANLAR: kart/kapı kilidi/güç kaynağı teşhisi (belgede yok) · çocuk emniyetinin tuş kombinasyonu (bu kılavuzda metin olarak yok) · Auto Power Off ayar kodları (sembol okunmuyor, yalnız "1 dakika" plain metni kullanıldı).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Evdeki sigorta kutusunda bulaşık makinesinin sigortasını kontrol et."
  - "Fişin prize tam takılı olduğunu ve prizin çalıştığını kontrol et; çoklu priz ya da uzatma kablosu kullanma."
  - "Su musluğunu sonuna kadar aç."
  - "Kapağı tam kapat; üst sepetin kapağa dayanmadığını ve kapağın kapanırken hiçbir yere çarpmadığını kontrol et."
  - "Makineyi AÇIK/KAPALI şalterinden aç, programı seç ve START tuşuna bas; duraklatma açıksa START'a yeniden bas."
  - "Göstergede zaman ön seçimi görünüyorsa geri sayımın bitmesini bekle ya da ön seçimi sil."
  - "Panel tepki vermiyorsa fişi çek ya da sigortayı kapat, en az 5 saniye bekle ve yeniden bağla."
  - "Program başlamıyor ya da yarıda durduysa START tuşuna yaklaşık 3 saniye basarak Reset uygula."
faq:
  - q: "Bosch bulaşık makinesi hiç çalışmıyor, ilk neye bakmalıyım?"
    a: "Bosch'un kullanma kılavuzundaki arıza tablosu 'Cihaz çalışmıyor' satırında şu nedenleri sayıyor: evin sigortasında bir arıza olabilir, cihazın fişi prize takılı olmayabilir, cihazın kapağı iyi kapatılmamış olabilir ya da duraklatma fonksiyonu aktif olabilir (bazı modellerde). Çözümler de aynı sırayla: sigortayı kontrol et, kablonun makineye ve prize tam takılı olduğunu ve prizin çalıştığını kontrol et, kapağı kapat, duraklatma açıksa START tuşuna bas."
  - q: "Ekran yanıyor ama tuşlara tepki vermiyor. Ne yapmalıyım?"
    a: "Bosch'un tablosunda 'Cihaz devreye sokulamıyor veya kullanılamıyor' satırı bu durum için. Çözüm: makineyi elektrikten ayırmak için fişi prizden çek ya da sigortayı kapat, en az 5 saniye bekle ve sonra makineyi yeniden elektriğe bağla."
  - q: "Program bittikten kısa süre sonra ekran kendiliğinden söndü, arıza mı?"
    a: "Büyük ihtimalle değil. Bosch'un kılavuzuna göre makine enerji tasarrufu için program sona erdikten 1 dakika sonra kendini kapatır (Auto Power Off). Bu davranış ayar menüsünden değiştirilebiliyor."
  - q: "Programı başlattıktan sonra başka program seçebilir miyim?"
    a: "Bosch'un kılavuzuna göre START tuşuna bastıktan sonra program değişikliği mümkün değil; değişiklik ancak program iptal (Reset) üzerinden yapılabiliyor. Reset için START tuşuna yaklaşık 3 saniye basılır; bu işlem yaklaşık 1 dakika sürer."
  - q: "Ekranda bir hata kodu var ve makine çalışmıyor. Ne yapmalıyım?"
    a: "Bosch'un kılavuzu tabloda olmayan bir hata kodu için şunu söylüyor: makineyi AÇIK/KAPALI şalterinden kapat, kısa süre sonra yeniden çalıştır. Sorun yeniden oluşursa su musluğunu kapat, fişi prizden çek ve müşteri hizmetlerini arayıp hata kodunu bildir. Bosch'un yayımladığı kodların anlamları için hata kodları sayfamıza bakabilirsin."
images:
  coverAlt: "Mutfakta kapağı kapalı ankastre bulaşık makinesinin üst kenarındaki kontrol paneli, ekranı kapalı; yanında açık duran kullanma kılavuzu"
---

Bulaşıkları yerleştirdin, START'a bastın ve hiçbir şey olmadı; ya da program başladı, yarıda durdu. Bosch'un bulaşık makinesi kullanma kılavuzundaki arıza tablosunda bu durumlar için birkaç satır var: **"Cihaz çalışmıyor."**, **"Cihaz devreye sokulamıyor veya kullanılamıyor."** ve **"Cihaz program esnasında duruyor veya program devre dışı kalıyor."** Bosch'un bu satırlarda saydığı nedenlerin çoğu makinenin dışında ya da ön panelde: **sigorta, fiş, kapak, duraklatma, elektrik ve su beslemesi.** Bu yazıda Bosch'un sırasını adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sigorta → fiş ve priz → musluk açık mı → kapak tam kapalı mı, üst sepet kapağa dayanıyor mu → AÇIK/KAPALI, program, START → zaman ön seçimi var mı → panel tepkisizse 5 saniye elektrikten ayır → program başlamıyorsa Reset. Hata kodu tekrar ediyorsa musluğu kapat, fişi çek, servisi ara.

## Adım adım: evde denenecekler

**1. Sigortaya bak.** Bosch'un "Cihaz çalışmıyor" satırındaki ilk neden: **evin sigortasında bir arıza var.** Bosch'un çözümü sigortayı kontrol etmek. Sigorta kutusunda inmiş bir sigorta görüyorsan bunu not et.

**2. Fişi ve prizi kontrol et.** İkinci neden: **cihazın fişi prize takılı değil.** Bosch, elektrik kablosunun **makinenin arka yüzüne ve prize tamamen takılmış** olmasını sağlamanı ve **prizin işler durumda** olduğunu kontrol etmeni istiyor. Bosch'un bilgilendirme kılavuzuna göre makine **topraklı bir prize** takılmalı; bağlantıda **grup (çoklu) priz ve uzatma kablosu kullanılmamalı.** Tesisatın kontrolü için Bosch yetkili bir elektrikçiye başvurulmasını öneriyor.

**3. Musluğu aç.** Bosch'un kılavuzunda makineyi çalıştırmanın ilk adımı **musluğu sonuna kadar açmak.** Program esnasında duran makine için de tablodaki nedenlerden biri **elektrik akımı ve/veya su beslemesinin kesilmesi;** çözüm beslemeyi yeniden sağlamak.

**4. Kapağı tam kapat.** Üçüncü neden: **cihazın kapağı iyi kapatılmamış.** Bosch'un tablosu kapağın neden tam kapanmayabileceğini de sayıyor: **üst sepet cihaz kapağının iç kısmına bastırıyor** olabilir ya da makinenin kurulumu kapanmayı engelliyor olabilir. Bosch'a göre kapaklar veya monte edilen parçalar kapanırken **hiçbir yere çarpmamalı.** Kapak kilidinin konumu değiştiyse Bosch'un önerisi kapağı **biraz daha kuvvet uygulayarak** kapatmak.

**5. Makineyi aç ve programı başlat.** Bosch'un sırası: **AÇIK/KAPALI şalterini aç**, programı seç ve **START tuşuna bas.** Bosch'a göre makine her açıldığında ön ayar olarak Eko 50° programı seçili gelir; başka bir program tuşuna basmazsan bu program seçili kalır. Tablodaki son neden: **duraklatma fonksiyonu aktif** (bazı modellerde). Bosch'un çözümü **START tuşuna basmak.**

**6. Zaman ön seçimine bak.** Bazı Bosch modellerinde programın başlaması **24 saate kadar** geciktirilebiliyor. Ön seçim ayarlandıysa programın başlaması geciktirilmiş demektir. Bosch'a göre ön seçimi silmek için göstergede **00h:00m** görüntüleninceye kadar - ya da + tuşuna basılır.

**7. Panel tepki vermiyorsa 5 saniye elektrikten ayır.** Bosch'un tablosunda **"Cihaz devreye sokulamıyor veya kullanılamıyor"** satırının çözümü: makineyi elektrik şebekesinden ayırmak için **fişi prizden çek ya da sigortayı kapat, en az 5 saniye bekle** ve sonra makineyi yeniden elektriğe bağla.

**8. Reset uygula.** Bosch'un arıza bölümünün başındaki not açık: makine yıkama sırasında belli olmayan bir sebeple durursa **veya çalışmaya başlamazsa, önce Program iptal (Reset) işlevini uygula.** Bosch'un SM/SB kılavuzuna göre Reset için **START tuşuna yaklaşık 3 saniye basılır;** program süresi yaklaşık 1 dakikadır. Gösterge sıfırı gösterdiğinde AÇIK/KAPALI şalterine bas, sonra programı yeniden seçip başlat.

## Program yarıda durduysa

Bosch'un tablosundaki **"Cihaz program esnasında duruyor"** satırı üç yere bakmanı istiyor: kapak tam kapalı mı, üst sepet kapağın iç kısmına bastırıyor mu ve makinenin **arka yüzü bir priz ya da sökülmemiş bir hortum tutucu yüzünden içeri bastırılıyor mu.** Elektrik ya da su kesildiyse beslemeyi yeniden sağlaman yeterli.

Programı kendin durdurduysan: Bosch'a göre AÇIK/KAPALI şalteriyle kapattığında **program hafızada kayıtlı kalır;** devam etmek için şalteri yeniden açarsın. Bosch'un uyarısı: sıcak su bağlantısı varsa ya da makine ısınmışsa kapağı açtıktan sonra önce **birkaç dakika aralık bırak**, sonra kapat.

Program bitince ekranın kendiliğinden sönmesi arıza değil: Bosch'a göre makine enerji tasarrufu için **program sona erdikten 1 dakika sonra** kendini kapatır.

Program uzun sürüyor ya da bitmiyor gibi görünüyorsa [bulaşık makinesi programı bitirmiyor](/blog/bulasik-makinesi-programi-bitirmiyor/) yazısına, paneldeki simgeler için [Bosch bulaşık makinesi sembolleri ve anlamları](/blog/bosch-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfasına bakabilirsin.

## Ekranda hata kodu varsa

Bosch'un kılavuzuna göre tabloda açıklanmayan bir hata kodu görünüyorsa **muhtemelen bir teknik arıza** oluşmuştur. Bosch'un sırası: makineyi AÇIK/KAPALI şalterinden kapat, **kısa süre sonra yeniden çalıştır.** Sorun yeniden oluşursa **su musluğunu kapat, fişi prizden çek** ve müşteri hizmetlerini arayıp **hata kodunu bildir.** Bosch'un yayımladığı kodların anlamları [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/) sayfasında.

## Ne zaman servis

Sigorta, fiş, musluk, kapak ve duraklatma yerinde, 5 saniyelik elektrik kesme ve Reset denendi ve makine hâlâ çalışmıyorsa Bosch'un kılavuzu şunu söylüyor: **hatayı veya arızayı gidermeyi başaramazsan yetkili servisine başvur.** Bosch'a göre **onarım çalışmaları daima uzman kişilere** yaptırılmalı. Servisi ararken cihaz kapısındaki tip etiketindeki **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** bildir.

⛔ **Kendin-çöz sınırı burada biter.** Sigorta, fiş, musluk, kapak ve paneldeki ayarlar kullanıcıya; makinenin içi ve elektrik tesisatı uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ekran hiç yanıyor mu, yanıyorsa tuşlara tepki veriyor mu?
2. Fiş doğrudan duvardaki prize mi takılı, sigorta yerinde mi?
3. Musluk açık, kapak tam kapalı mı?
4. 5 saniye elektrikten ayırma ve Reset denendi mi?
5. Ekranda bir hata kodu var mı, varsa hangisi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
