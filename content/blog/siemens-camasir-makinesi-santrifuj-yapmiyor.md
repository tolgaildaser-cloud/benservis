---
title: "Siemens çamaşır makinesi santrifüj yapmıyor"
description: "Siemens çamaşır makinesi sıkmıyor ya da çamaşırlar ıslak çıkıyorsa Siemens kılavuzundaki sıra: sıkma devri, Kırışıklık önleme, çamaşır dağılımı, Sıkma programı."
slug: "siemens-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Siemens çamaşır belirti koşusu). Sekiz belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, sekizi de HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da Bosch sayfalarından alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
#  A) WG54K2Y0TR  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (sayfa atıfları esas olarak bu belgeye göre)
#  B) WG64K2Y0TR  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  K) WN54C2A0TR  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# Arızaları giderme satırları (A s.40, s.43-44; G s.34, s.37):
#   "H:32 (G: E:60 -2B / E:32 / H:32) — Cihaz, çamaşırların eşit olmayan dağılımı nedeniyle sıkma döngüsünü iptal etti. ▶ Tamburun içindeki çamaşırları yeniden dağıtınız." (A s.40)
#   "Yüksek sıkma devir sayısına ulaşılamadı. — Kırışıklık önleme etkinleştirildi. ▶ Kumaş türüne uygun bir program seçiniz. · Cihaz, sıkma devrini düşürerek dengesizliği telafi eder. Herhangi bir işlem uygulamaya gerek yoktur." (A s.43)
#   "Sıkma işleminden sonra çamaşırlar çok ıslak. — Düşük sıkma devir sayısı ayarlanmış. ▶ Programı Sıkma başlatınız. ▶ Bir sonraki yıkamada yüksek bir sıkma devir sayısı ayarlayınız. · Cihaz, sıkma devrini düşürerek dengesizliği telafi eder. 1. Tamburun içindeki çamaşırları yeniden dağıtınız. 2. Programı Sıkma başlatınız. · Kırışıklık önleme etkinleştirildi. ▶ Uygun bir program ayarlayınız." (A s.44)
#   "Birden fazla kez sıkma. — Hata yoktur. Cihaz, çamaşırları birkaç kez dağıtarak dengesizlikleri eşitler." (A s.43)
# Diğer: A s.19 ekran "Dev/dak cinsinden ayarlanan sıkma devir sayısı" + "Son sıkma yok, sadece boşaltma" + "Durulama suyunda bekletme, boşaltma yok" · A s.21 Sıkma devri tuşu ("seçimiyle su boşaltılır ve sıkma devre dışı bırakılır. Çamaşırlar ıslak halde tamburda kalır.")
#   · A s.22 Kırışıklık önleme ("Sıkma işlemi ve sıkma devri uygun hale getirilir. Çamaşırlar yıkandıktan sonra daha yüksek artık nem içeriğine sahiptir.") · A s.23-24 program tablosu (Narin/İpek ve Yünlüler maks. 800 dev/dak; Süper kısa 15'/30' ve Yorgan maks. 1000; Sıkma/Boşaltma "Sıkma ve su boşaltma.")
#   · A s.29 13.9 "Durulama suyunda bekletmede programa devam edilmesi: 1. Sıkma programını veya bir tahliye programını ayarlayınız. 2. Başlat/Reload seçeneğine basınız." (Durulama suyunda bekletme A-F'de var; G ve K kılavuzunda yok.)
# BİLEREK YAZILMAYANLAR: motor, kömür, tako, kart, rulman teşhisi (belgede yok) · pompa temizliği bu yazıda adım değil (su boşaltmıyor kardeş taslağına ve yayındaki E:36-25'e link) · Siemens'in sıkma satırlarında tahliye hortumu sebebi yok → yazılmadı.
# Alıntı denetim tablosu: siemens-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekrandaki sıkma devrine bak; sıkma kapalı ya da devir düşükse daha yüksek bir devir seç."
  - "Kırışıklık önleme seçiliyse kapat ya da kumaş türüne uygun bir program seç."
  - "Seçtiğin programın en yüksek sıkma devrini kontrol et; hassas programlarda devir sınırlıdır."
  - "Ekranda durulama suyunda bekletme simgesi varsa Sıkma ya da bir tahliye programı ayarlayıp Başlat/Reload'a bas."
  - "Tamburdaki çamaşırları yeniden dağıt."
  - "Sıkma programını başlat."
faq:
  - q: "Siemens çamaşır makinemin ekranında H:32 yazıyor, ne demek?"
    a: "Siemens'in arıza tablosuna göre H:32, cihazın çamaşırların eşit olmayan dağılımı nedeniyle sıkma döngüsünü iptal ettiğini gösteriyor. Çözüm tamburun içindeki çamaşırları yeniden dağıtmak. WG52A203TR kılavuzunda aynı satırda E:60-2B ve E:32 de geçiyor."
  - q: "Makine birkaç kez sıkmaya başlayıp duruyor, bozuk mu?"
    a: "Siemens'e göre hayır. 'Birden fazla kez sıkma' satırının karşılığı: hata yoktur, cihaz çamaşırları birkaç kez dağıtarak dengesizlikleri eşitler. Siemens ayrıca cihazın dengesizliği telafi etmek için sıkma devrini düşürebildiğini yazıyor; bu durumda da işlem gerekmiyor, çamaşırlar fazla ıslak kalırsa yeniden dağıtıp Sıkma programını başlatabilirsin."
  - q: "Kırışıklık önleme seçince çamaşırlar neden ıslak çıkıyor?"
    a: "Siemens'in kılavuzuna göre Kırışıklık önleme açıkken sıkma işlemi ve sıkma devri uygun hale getiriliyor; çamaşırlar yıkandıktan sonra daha yüksek artık nem içeriğine sahip oluyor ve hemen asılmaları öneriliyor. Arıza tablosu da Kırışıklık önlemeyi yüksek devre ulaşılamamasının sebepleri arasında sayıyor."
  - q: "Program bitti ama çamaşırlar suyun içinde duruyor. Neden?"
    a: "Modelinde durulama suyunda bekletme seçeneği varsa ve açıksa bu beklenen davranış: Siemens'in ekran tablosundaki karşılığı 'Durulama suyunda bekletme, boşaltma yok.' Devam etmek için Sıkma programını ya da bir tahliye programını ayarlayıp Başlat/Reload'a basman gerekiyor. Makine suyu hiç atamıyorsa su boşaltmıyor yazımıza bak."
images:
  coverAlt: "Açık kapaklı ön yüklemeli çamaşır makinesinin tamburunda bir tarafa toplanmış ıslak çamaşırlar"
---

Program bitti, kapağı açtın ve çamaşırlar sırılsıklam. Siemens'in çamaşır makinesi kılavuzlarındaki arıza tablosunda bu durum birkaç satıra dağılıyor: **"Yüksek sıkma devir sayısına ulaşılamadı"**, **"Sıkma işleminden sonra çamaşırlar çok ıslak"** ve ekranda **H:32** kodu. Siemens'in bu satırlarda saydığı sebepler çoğunlukla ayar ve yerleştirme: düşük seçilmiş devir, açık kalmış Kırışıklık önleme ve tamburda eşit dağılmamış çamaşır. Bu yazıda Siemens'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıkma devri kapalı ya da düşük mü → yükselt. Kırışıklık önleme açık mı → kapat ya da uygun programı seç. Hassas programlar düşük devirle sıkar. Durulama suyunda bekletme açıksa Sıkma ya da tahliye programıyla devam et. Çamaşırları yeniden dağıt, Sıkma programını başlat. Birkaç kez sıkmaya başlayıp durması Siemens'e göre arıza değil.

## Adım adım: evde denenecekler

**1. Sıkma devrine bak.** Siemens'in "çamaşırlar çok ıslak" satırındaki ilk sebep: **düşük sıkma devir sayısı ayarlanmış.** Ekran ayarlanan devri dev/dak olarak gösteriyor. Siemens'e göre **Sıkma devri** tuşunda sıkmayı kapatan seçim yapıldığında **su boşaltılır ve sıkma devre dışı bırakılır; çamaşırlar ıslak halde tamburda kalır.** Ekranda "son sıkma yok, sadece boşaltma" simgesi varsa durum bu. Siemens'in çözümü: **Sıkma programını başlat** ve **bir sonraki yıkamada yüksek bir sıkma devir sayısı ayarla.**

**2. Kırışıklık önlemeyi kontrol et.** İkinci sebep: **Kırışıklık önleme etkinleştirildi.** Siemens'e göre bu seçenek açıkken **sıkma işlemi ve sıkma devri uygun hale getirilir, çamaşırlar yıkandıktan sonra daha yüksek artık nem içeriğine sahip olur.** Siemens'in çözümü: **kumaş türüne uygun bir program seç.**

**3. Programın devir sınırını hesaba kat.** Siemens'in program tablosunda her programın bir üst devir sınırı var. WG54K2Y0TR'de örneğin **Narin/İpek** ve **Yünlüler** en fazla **800 dev/dak**, **Süper kısa 15'/30'** ve **Yorgan** en fazla **1000 dev/dak** sıkıyor. Hassas bir programla yıkadığın çamaşırın daha nemli çıkması bu sınırdan.

**4. Durulama suyunda bekletmeye bak.** Bu seçenek bazı Siemens modellerinde var (örneğin WG54K2Y0TR ve WG42K2Z0TR kılavuzlarında). Ekran tablosundaki karşılığı: **"Durulama suyunda bekletme, boşaltma yok."** Yani seçenek açıksa son durulamadan sonra çamaşırlar suyun içinde bekler; bu bir arıza değil. Siemens'in devam etme sırası: **Sıkma programını veya bir tahliye programını ayarla, Başlat/Reload'a bas.**

**5. Çamaşırları yeniden dağıt.** Ekranda **H:32** varsa Siemens'e göre **cihaz, çamaşırların eşit olmayan dağılımı nedeniyle sıkma döngüsünü iptal etti.** Çamaşırlar ıslak kaldıysa ve cihaz dengesizliği telafi etmek için devri düşürdüyse de Siemens'in ilk adımı aynı: **tamburun içindeki çamaşırları yeniden dağıt.**

**6. Sıkma programını başlat.** Siemens'in "çamaşırlar çok ıslak" satırındaki ortak son adım: **Sıkma programını başlat.** Program tablosunda **Sıkma/Boşaltma** programı **sıkma ve su boşaltma** yapıyor. Ayarı düzelttikten ve çamaşırları dağıttıktan sonra kapağı kapat ve bu programı çalıştır.

## Arıza sanılan normal durumlar

Siemens'in tablosunda iki satır açıkça işlem gerekmediğini söylüyor:

- **Birden fazla kez sıkma:** Hata yoktur. Cihaz, çamaşırları birkaç kez dağıtarak dengesizlikleri eşitler.
- **Yüksek sıkma devrine ulaşılamadı:** Cihaz, sıkma devrini düşürerek dengesizliği telafi eder.

Makine suyu hiç atamıyorsa (ekranda **E:36-10** ya da **E:30-80**) Siemens'in ilgili satırı **"Deterjanlı su cihazdan pompalanıp boşaltılmıyor"**; o satırdaki sıra [Siemens çamaşır makinesi su boşaltmıyor](/blog/siemens-camasir-makinesi-su-bosaltmiyor/) yazısında. Diğer kodlar için [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) listesine bak. Markadan bağımsız genel liste için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısı var.

## Sınır nerede biter

Devir yüksek, Kırışıklık önleme kapalı, çamaşırlar dağıtılmış, Sıkma programı başlatılmış ve makine hâlâ hiç sıkmıyorsa Siemens'in tablosu kullanıcıya başka adım vermiyor. Siemens'in uyarısı: **usulüne aykırı onarımlar tehlike teşkil eder; cihazda onarımları yalnız bunun eğitimini almış uzman personel yapabilir.** Tabloda satırı olmayan bir hata kodu çıkarsa Siemens'in son adımı: **müşteri hizmetlerini ara.**

⛔ **Kendin-çöz sınırı burada biter.** Ayar ve çamaşır dağılımı kullanıcıya; motor ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Hangi programı ve kaç devri seçtin?
2. Kırışıklık önleme ya da durulama suyunda bekletme açık mıydı?
3. Tamburda tek büyük parça mı vardı?
4. Makine hiç mi sıkmıyor, yoksa sıkmaya başlayıp duruyor mu?
5. Ekranda H:32 ya da başka bir kod görünüyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
