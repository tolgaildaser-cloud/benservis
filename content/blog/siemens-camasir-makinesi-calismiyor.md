---
title: "Siemens çamaşır makinesi çalışmıyor"
description: "Siemens çamaşır makinesi açılmıyor ya da program başlamıyorsa Siemens kılavuzundaki sıra: fiş, enerji tasarrufu, kapak, çocuk kilidi, yeniden başlatma."
slug: "siemens-camasir-makinesi-calismiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Siemens çamaşır belirti koşusu). Sekiz belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, sekizi de HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da Bosch sayfalarından alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası; simge satırları pdftoppm görüntüsüyle teyit edildi.
#  A) WG54K2Y0TR  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (sayfa atıfları esas olarak bu belgeye göre)
#  B) WG64K2Y0TR  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  K) WN54C2A0TR  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# Arızaları giderme satırları (A s.39-42, G s.34-36; sekiz belgede aynı satırlar):
#   "Ekran karanlık ve yanıp sönüyor. — Enerji tasarrufu modu aktif. ▶ Başlat/Reload tuşuna basınız." (A s.39)
#   "Program çalışmaya başlamıyor. — Çocuk kilidi etkinleştirildi. ▶ Çocuk kilidini devre dışı bırakınız. · Bitiş Erteleme etkinleştirildi. ▶ İlgili Bitiş Erteleme seçeneğinin etkin olup olmadığını kontrol ediniz." (A s.42; K'de "Kalan süre")
#   "[kapak simgesi] yanıp sönüyor. — Kapak tamamen kapatılmamış. 1. Çamaşırların kapağa sıkışmadığından emin olunuz. 2. Kapağı kapatınız." (A s.41-42)
#   "Ekran ve düğmeler yanıt vermiyor. — Yazılım arızası var. 1. Cihazı yeniden başlatmak için yakl. 3 saniye boyunca Ön Yıkama ve Kırışıklık önleme üzerine aynı anda basınız. 2. Arıza tekrar oluşursa, cihazı en az 30 saniye boyunca güç kaynağından ayırınız." (A s.42; C/D "İlave durulama ve Kırışıklık önleme", E/F "İlave durulama ve Kırışık önleme", K tek tuş ~5 sn)
#   "Program başlatıldıktan sonra tambur sarsılıyor. — Hata yoktur. Dahili motor testi başlatıldı." · "Tambur dönüyor, su girişi gerçekleşmiyor. — Hata yoktur. Dolum algılama 2 dakikaya kadar aktiftir." (A s.42)
# Diğer: A s.14 "Elektrik fişinin sıkı bir şekilde oturduğunu kontrol ediniz." · A s.27 "açılış işlemi bir dakika kadar sürer" + "Program seçme düğmesi bir programa ayarlanmalıdır." · A s.29 çocuk kilidi 3 sn, "cihaz çalıştırılmalıdır" · A s.20 çocuk kilidi simgesi · A s.21 kapak simgesi · A s.47 E-Nr./FD/Z-Nr.
# BİLEREK YAZILMAYANLAR: kart, kablo, priz arızası teşhisi (belgede yok) · sigorta/elektrik tesisatı müdahalesi (yalnız belgedeki "sigortayı kapatınız" aktarıldı) · Home Connect kurulumu (belirtiyle ilgisiz) · tuş kombinasyonunun her model için listesi yalnız belgelerde görülen modellerle sınırlı.
# Alıntı denetim tablosu: siemens-camasir-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Elektrik fişinin prize sıkı oturduğunu kontrol et."
  - "Ekran karanlıksa ve yanıp sönüyorsa Başlat/Reload tuşuna bas."
  - "Program seçme düğmesini bir programa getir; ilk açılışta yaklaşık bir dakika bekle."
  - "Kapak simgesi yanıp sönüyorsa çamaşırların kapağa sıkışmadığından emin ol ve kapağı kapat."
  - "Ekranda çocuk kilidi simgesi yanıyorsa ilgili iki tuşa yaklaşık 3 saniye basarak kilidi kapat."
  - "Bitiş Erteleme ayarlı mı kontrol et."
  - "Ekran ve düğmeler yanıt vermiyorsa modelindeki tuş kombinasyonuyla cihazı yeniden başlat."
  - "Arıza tekrar ederse cihazı en az 30 saniye güçten ayır: fişi çek ya da sigortayı kapat."
faq:
  - q: "Siemens çamaşır makinemin ekranı kararıp yanıp sönüyor, bozuldu mu?"
    a: "Siemens'in arıza tablosuna göre ekranın karanlık olup yanıp sönmesi enerji tasarrufu modunun aktif olduğunu gösteriyor. Çözüm Başlat/Reload tuşuna basmak."
  - q: "Programı başlattım, tambur dönüyor ama su gelmiyor. Makine çalışmıyor mu?"
    a: "Siemens'e göre bu bir hata değil. Program başlayınca tambur döner ve 2 dakikaya kadar süren bir yük algılama işlemi yapılır; su girişi bunun ardından gerçekleşir. Program başlatıldıktan sonra tamburun sarsılması da kılavuza göre dahili motor testidir ve müdahale gerekmez."
  - q: "Yeniden başlatmak için hangi tuşlara basmam gerekiyor?"
    a: "Modele göre değişiyor. Siemens'in kılavuzlarında WG54K2Y0TR ve WG64K2Y0TR için Ön Yıkama ile Kırışıklık önleme, WG42K2Z0TR ve WG44K2Z0TR için İlave durulama ile Kırışıklık önleme, WG52K2Z0TR ve WG64K2Z0TR için İlave durulama ile Kırışık önleme tuşlarına yaklaşık 3 saniye aynı anda basılması yazıyor. Kurutmalı WN54C2A0TR'de açma/kapama tuşu yaklaşık 5 saniye basılı tutuluyor. Kendi modelinin kılavuzundaki Arızaları giderme bölümüne bak."
  - q: "Hepsini denedim, makine yine çalışmıyor. Ne yapmalıyım?"
    a: "Siemens'in son adımı müşteri hizmetlerini aramak. Kılavuz aradığında hata mesajını eksiksiz belirtmeni, mümkünse arızayı fotoğraf ve videoyla belgelemeni istiyor. Cihazın ürün numarası (E-Nr.), imalat numarası (FD) ve sayma numarası (Z-Nr.) de hazır olmalı."
images:
  coverAlt: "Ekranı karanlık, kapağı kapalı ön yüklemeli bir çamaşır makinesinin kumanda paneline uzanan bir el"
---

Makineye bastın, bir şey olmadı; ya ekran kapalı ya da program bir türlü başlamıyor. Siemens'in çamaşır makinesi kılavuzlarındaki arıza tablosunda bu tablo birkaç satıra dağılıyor: **"Ekran karanlık ve yanıp sönüyor"**, **"Program çalışmaya başlamıyor"** ve **"Ekran ve düğmeler yanıt vermiyor."** Siemens'in bu satırlarda saydığı sebeplerin çoğu ayar ve kullanım: enerji tasarrufu modu, tam kapanmamış kapak, açık kalmış çocuk kilidi, ayarlı kalmış Bitiş Erteleme. Bu yazıda Siemens'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş yerinde mi → ekran karanlıksa Başlat/Reload'a bas → program seç → kapak simgesi yanıp sönüyorsa kapağı düzgün kapat → çocuk kilidi ve Bitiş Erteleme'yi kontrol et → ekran donduysa yeniden başlat, olmazsa 30 saniye güçten ayır. Tamburun dönüp suyun 2 dakika gelmemesi Siemens'e göre arıza değil.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Siemens'in kurulum bölümündeki talimat: elektrik fişini cihazın yakınındaki bir prize tak ve **fişin sıkı bir şekilde oturduğunu kontrol et.**

**2. Ekran karanlıksa Başlat/Reload'a bas.** Siemens'in tablosundaki ilk satır: **ekran karanlık ve yanıp sönüyorsa enerji tasarrufu modu aktif.** Çözüm: **Başlat/Reload tuşuna bas.**

**3. Bir program seç.** Siemens'in kılavuzuna göre cihazı açmak için **program seçme düğmesi bir programa ayarlanmalı.** Cihaz elektriğe bağlandıktan sonra ilk kez açıldığında **açılış işlemi bir dakika kadar sürüyor**; bu sürede ekranın gecikmesi normal.

**4. Kapağı tam kapat.** Ekranda kapak simgesi yanıp sönüyorsa Siemens'e göre **kapak tamamen kapatılmamış.** Siemens'in iki adımı: **çamaşırların kapağa sıkışmadığından emin ol, sonra kapağı kapat.** Kılavuzun ekran tablosunda da aynı simgenin yanıp sönmesi "kapak açıktır" demek. Siemens'in program başlatma koşullarından biri de kapının kapalı olması.

**5. Çocuk kilidini kapat.** "Program çalışmaya başlamıyor" satırındaki ilk sebep: **çocuk kilidi etkinleştirildi.** Ekranda çocuk kilidi simgesi yanıyorsa kilit açık demektir. Siemens'e göre kilidi kapatmak için cihaz açık olmalı; kılavuzda çocuk kilidi için gösterilen **iki tuşa yaklaşık 3 saniye** bas, simge söner. Siemens'in notu: çocuk kilidi cihaz bekleme modundayken ve elektrik kesintisinde de etkin kalıyor.

**6. Bitiş Erteleme'ye bak.** Aynı satırın ikinci sebebi: **Bitiş Erteleme etkinleştirildi.** Siemens'in çözümü: **Bitiş Erteleme seçeneğinin etkin olup olmadığını kontrol et.** Bu seçenekle program bitiş zamanı ayarlanıyor; kurutmalı WN54C2A0TR'nin kılavuzunda aynı satırda seçeneğin adı **Kalan süre.**

**7. Ekran donduysa yeniden başlat.** Siemens'in tablosunda **"Ekran ve düğmeler yanıt vermiyor"** satırının sebebi yazılım arızası. İlk adım cihazı yeniden başlatmak; tuşlar modele göre değişiyor. Örneğin WG54K2Y0TR'de **Ön Yıkama** ile **Kırışıklık önleme**, WG42K2Z0TR'de **İlave durulama** ile **Kırışıklık önleme** tuşlarına **yaklaşık 3 saniye aynı anda** basılıyor. Kurutmalı WN54C2A0TR'de açma/kapama tuşu yaklaşık 5 saniye basılı tutuluyor. Kendi modelinin tuşları kılavuzunun Arızaları giderme bölümünde yazıyor.

**8. Olmazsa 30 saniye güçten ayır.** Siemens'in ikinci adımı: arıza tekrar oluşursa **cihazı en az 30 saniye boyunca güç kaynağından ayır; elektrik fişini çek ya da sigorta kutusundaki sigortayı kapat.** Sonra fişi takıp yeniden dene.

## Arıza sanılan normal durumlar

Siemens'in tablosunda iki satır açıkça **"Hata yoktur"** diyor:

- **Tambur dönüyor, su girişi gerçekleşmiyor:** Dolum algılama 2 dakikaya kadar aktif. Kılavuza göre program başlayınca tambur döner, yük algılama bitince su girişi gerçekleşir.
- **Program başlatıldıktan sonra tambur sarsılıyor:** Dahili motor testi başlatıldı. Müdahale gerekmiyor.

Program ekranda bir hata koduyla duruyorsa önce [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) listesine bak; tabloda satırı olmayan kodlarda yeniden başlatma sırası [Siemens çamaşır makinesi hata kodu sıfırlama](/blog/siemens-camasir-makinesi-hata-kodu-sifirlama/) yazısında. Makine çalışıyor ama su almıyorsa [Siemens çamaşır makinesi su almıyor](/blog/siemens-camasir-makinesi-su-almiyor/) yazısına geç. Markadan bağımsız genel liste için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısı var.

## Sınır nerede biter

Fiş yerinde, kapak kapalı, çocuk kilidi ve Bitiş Erteleme kapalı, cihaz yeniden başlatılmış ve 30 saniye güçten ayrılmışsa Siemens'in tablosu kullanıcıya başka adım vermiyor. Siemens'in son talimatı: **arıza devam ederse müşteri hizmetlerini ara.** Kılavuzun uyarısı da açık: **usulüne aykırı onarımlar tehlike teşkil eder; cihazda onarımları yalnız bunun eğitimini almış uzman personel yapabilir.** Elektrik kablosu zarar görmüşse kılavuza göre değişimi üretici, müşteri hizmetleri ya da benzer kalifikasyona sahip bir kişi yapmalı.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, kapak, kilit ve yeniden başlatma kullanıcıya; kablo, kart ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Ekran tamamen mi kapalı, yoksa yanıp mı sönüyor?
2. Ekranda bir hata kodu ya da simge var mı? Fotoğrafını çek.
3. Tuşlara basınca bir tepki oluyor mu?
4. Yeniden başlatma ve 30 saniye güç kesme denendi mi?
5. Cihazın E-Nr. ve FD numarası elinde mi?

Siemens de aradığında hata mesajını eksiksiz söylemeni ve mümkünse arızayı fotoğraf ya da videoyla belgelemeni istiyor.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
