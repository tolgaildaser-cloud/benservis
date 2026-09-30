---
title: "Beko çamaşır makinesi santrifüj yapmıyor"
description: "Beko çamaşır makinesi sıkma adımına geçmiyorsa Beko kılavuzundaki sıra: çamaşır dağılımı, Suda Bırakma, tahliye filtresi ve hortumu, deterjan miktarı."
slug: "beko-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Beko çamaşır belirti koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (A) D4 9101 E  http://download.beko.com/Download.UsageManualsBeko/d4-9101-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820523451.pdf  40 s.  md5 38f838f5c669c87f517618be9a11edcb  (sayfa atıfları esas olarak bu belgeye göre)
#  (B) D4 9122 E  http://download.beko.com/Download.UsageManualsBeko/d4-9122-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820522537.pdf  37 s.  md5 89ab7801f624fc4f2a85f358033baa58
#  (C) D4 8102 E  http://download.beko.com/Download.UsageManualsBeko/32636_2820522712.pdf  37 s.  md5 eea66a69dc2384321a6f7227d0fe81f2
#  (D) D3 5061 B / D3 5062 B  https://download.beko.com/Download.UsageManualsBeko/32349_2820522636.pdf  36 s.  md5 6f40d18cb25aca2c9cebb4cecdea108f
# Sorun giderme satırı (A s.33, B s.31, C s.31, D s.30):
#   "Makine sıkma adımına geçmiyor. • Çamaşır, makinede dengesizlik yaratmış olabilir. >>> ... otomatik dengesiz yük algılama sistemi devreye girmiş olabilir. • Makine içindeki su tahliye edilemediği için
#    sıkma yapmamış olabilir. >>> Filtre ve tahliye hortumunu kontrol edin. • Fazla deterjan kullanılması nedeniyle aşırı köpük oluşmuş ve otomatik köpük sönümleme sistemi devreye girmiş olabilir. >>> Önerilen miktarda deterjan kullanın."
#   Dipnot (A s.35; B s.30-31): "Çamaşırlar makine içinde iyi dağılmadığı zaman, makine, kendisine ve çevresine zarar vermemek için sıkma adımına geçmez. Çamaşırları düzeltip tekrar sıkma yaptırın."
#   A s.35: "Program sonunda çamaşırlar ıslak kalıyor. • Fazla deterjan ... otomatik köpük sönümleme sistemi ... >>> Önerilen miktarda deterjan kullanın."
# Diğer: A s.26 "Eğer makine sıkma adımına geçmiyorsa, Suda Bırakma fonksiyonu etkin olabilir ya da ... otomatik dengesiz yük algılama sistemi devreye girmiş olabilir."
#   · A s.27 5.19 suda bekletme modu: Sıkma sembolü yanıp söner, Bekleme sembolü yanar; sıkma için devri ayarla + Başla / Bekle / İptal · A s.24 Suda bırakma fonksiyonu
#   · A s.22 5.10 devir seçimi ("Suda Bırakma" / "Sıkma Yok" seçenekleri) + Sıkma+Pompa programı (ilave sıkma) · "Narin çamaşırlar için düşük sıkma devirlerini kullanın."
#   · A s.10 tahliye hortumu 40 cm altında yerleştirilip sonradan yükseltilirse "su tahliyesi zorlaşır ve çamaşırlar makineden aşırı ıslak bir şekilde çıkabilir"
#   · A s.33 / s.32 "Program süresi geri saymıyor" — sıkma adımında dengesiz yük algılama.
# BİLEREK YAZILMAYANLAR: motor, kömür, kart, rulman teşhisi (belgede yok) · pompa filtresi temizliği burada tek adım (ayrıntı kardeş taslak su-bosaltmiyor'da) · devir rakamları (modele bağlı).
# Alıntı denetim tablosu: beko-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekranda seçili sıkma devrine bak; Sıkma Yok ya da Suda Bırakma seçiliyse değiştir."
  - "Sıkma sembolü yanıp sönüyor ve Bekleme sembolü yanıyorsa sıkma devrini ayarlayıp Başla / Bekle / İptal tuşuna bas."
  - "Programı beklemeye al, kapak açılabilir olunca çamaşırları elinle tambur içinde eşit dağıt."
  - "Tahliye hortumunun kıvrılmadığını ve doğru yükseklikte olduğunu kontrol et."
  - "Makine suyu boşaltamıyorsa pompa filtresini Beko'nun bakım talimatına göre temizle."
  - "Bir sonraki yıkamada deterjanı önerilen miktarda kullan."
  - "Kapağı kapat ve Sıkma+Pompa programıyla ilave sıkma yaptır."
faq:
  - q: "Beko çamaşır makinem neden sıkma adımına geçmiyor?"
    a: "Beko'nun kullanma kılavuzlarındaki 'Makine sıkma adımına geçmiyor' satırı üç sebep sayıyor: çamaşır makinede dengesizlik yaratmış ve otomatik dengesiz yük algılama sistemi devreye girmiş olabilir; makine içindeki su tahliye edilemediği için sıkma yapmamış olabilir; ya da fazla deterjan yüzünden aşırı köpük oluşmuş ve otomatik köpük sönümleme sistemi devreye girmiş olabilir. Kılavuzun başka bir notuna göre Suda Bırakma fonksiyonu etkinse de makine sıkma adımına geçmez."
  - q: "Dengesiz yük algılama ne demek, arıza mı?"
    a: "Arıza değil, koruma. Beko'ya göre çamaşırlar makine içinde iyi dağılmadığı zaman makine, kendisine ve çevresine zarar vermemek için sıkma adımına geçmez. Beko'nun çözümü: çamaşırları düzeltip tekrar sıkma yaptırmak."
  - q: "Sıkma sırasında süre göstergesi neden duruyor?"
    a: "Beko'nun tablosuna göre sıkma adımında zamanlayıcı durabilir; sebebi çamaşırların dengesiz dağılması nedeniyle otomatik dengesiz yük algılama sisteminin devreye girmiş olması. Beko'nun bu durumdaki önerisi çamaşırları düzeltip tekrar sıkma yaptırmak."
  - q: "Suda Bırakma seçiliyken sıkmayı nasıl yaptırırım?"
    a: "Beko'nun kılavuzuna göre makine suda bekletme modundayken Sıkma sembolü yanıp söner ve Bekleme sembolü yanar. Sıkma yapmak istiyorsan sıkma devrini ayarlayıp Başla / Bekle / İptal tuşuna bas; program devam ederek suyu tahliye eder ve sıkma yapar. Sıkmadan yalnız suyu boşaltmak istiyorsan yalnızca Başla / Bekle / İptal tuşuna basman yeterli."
images:
  coverAlt: "Açık kapaklı ön yüklemeli çamaşır makinesinin tamburunda bir tarafa toplanmış ıslak çamaşırlar, önünde boş bir çamaşır sepeti"
---

Program bitti, kapağı açtın ve çamaşırlar sırılsıklam; ya da makine sıkma adımına bir türlü geçmiyor. Beko'nun çamaşır makinesi kullanma kılavuzlarındaki sorun giderme bölümünde bunun karşılığı: **"Makine sıkma adımına geçmiyor."** Beko bu satırda üç sebep sayıyor: **çamaşırın makinede dengesizlik yaratması**, **suyun tahliye edilememesi** ve **fazla deterjanın yaptığı aşırı köpük.** Kılavuzun kullanım bölümü bir dördüncüsünü ekliyor: **Suda Bırakma fonksiyonu etkin olabilir.** Bu yazıda Beko'nun sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıkma Yok ya da Suda Bırakma seçili mi → değiştir. Çamaşırları eşit dağıt. Tahliye hortumu ve pompa filtresine bak. Deterjanı önerilen miktarda kullan. Sonra Sıkma+Pompa programıyla ilave sıkma yaptır. Dengesiz yükte sıkmaya geçmemesi Beko'ya göre koruma, arıza değil.

## Adım adım: evde denenecekler

**1. Sıkma devri seçimine bak.** Beko'nun kılavuzuna göre sıkma devrini azalttıkça ekranda, modele bağlı olarak **"Suda Bırakma"** ve **"Sıkma Yok"** seçenekleri görünüyor. Bunlardan biri seçiliyse makine bilerek sıkmıyor. Beko'nun kullanım bölümündeki not: **eğer makine sıkma adımına geçmiyorsa, Suda Bırakma fonksiyonu etkin olabilir.** Beko ayrıca **narin çamaşırlar için düşük sıkma devirlerinin** kullanılmasını öneriyor; hassas bir yıkamada çamaşırın daha nemli çıkması bu seçimden.

**2. Suda bekletme modundaysa sıkmayı başlat.** Beko'ya göre makine suda bekletme modundayken **Sıkma sembolü yanıp söner ve Bekleme sembolü yanar.** Bu modda sıkma yapmak istiyorsan **sıkma devrini ayarlayıp Başla / Bekle / İptal tuşuna bas;** program devam ederek **suyu tahliye eder ve sıkma yapar.**

**3. Çamaşırları eşit dağıt.** Beko'nun tablosundaki ilk sebep: **çamaşır, makinede dengesizlik yaratmış olabilir;** bu durumda **otomatik dengesiz yük algılama sistemi** devreye giriyor. Beko'nun açıklaması: çamaşırlar makine içinde iyi dağılmadığı zaman makine, **kendisine ve çevresine zarar vermemek için sıkma adımına geçmez.** Çözüm: **çamaşırları düzeltip tekrar sıkma yaptır.** Beko'nun tarifiyle önce **Başla / Bekle / İptal** tuşuna basarak makineyi bekleme durumuna al, **yükleme kapağı açılabilir duruma gelene kadar bekle,** sonra kapağı açıp çamaşırları elinle eşit dağıt.

**4. Tahliye hortumunu kontrol et.** Tablodaki ikinci sebep: **makine içindeki su tahliye edilemediği için sıkma yapmamış olabilir.** Beko'nun çözümü: **filtre ve tahliye hortumunu kontrol et.** Hortumun kıvrılmadığına bak. Beko'nun kurulum bölümüne göre hortum en az **40**, en çok **100 cm** yüksekliğe takılmalı; zemin seviyesinde ya da 40 cm'nin altında yerleştirilip sonradan yükseltilirse **su tahliyesi zorlaşır ve çamaşırlar makineden aşırı ıslak çıkabilir.**

**5. Pompa filtresini temizle.** Makine suyu hiç boşaltamıyorsa Beko'nun tablosu **pompa filtresinin tıkanmış** olabileceğini söylüyor. Filtreyi Beko'nun bakım talimatına göre, **fişi çekip su soğuduktan sonra** elle temizle. Bu işin sırası [Beko çamaşır makinesi su boşaltmıyor](/blog/beko-camasir-makinesi-su-bosaltmiyor/) yazısında ayrıntılı anlatılıyor.

**6. Deterjan miktarını azalt.** Tablodaki üçüncü sebep: **fazla deterjan kullanılması nedeniyle aşırı köpük oluşmuş ve otomatik köpük sönümleme sistemi devreye girmiş olabilir.** Beko'nun çözümü: **önerilen miktarda deterjan kullan.** Beko'nun tablosu "Program sonunda çamaşırlar ıslak kalıyor" satırında da aynı sebebi ve aynı çözümü veriyor.

**7. İlave sıkma yaptır.** Beko'nun özel programlar bölümüne göre **Sıkma+Pompa** programı çamaşırlara **ilave sıkma uygulamak** için kullanılıyor. Programı seçmeden önce istediğin sıkma devrini seç ve **Başla / Bekle / İptal** tuşuna bas; makine çamaşırları ayarlanan devirle sıktıktan sonra suyu tahliye eder.

## Arıza sanılan normal durumlar

- **Sıkma adımında süre göstergesi duruyor:** Beko'nun tablosuna göre sıkma adımında zamanlayıcı durabilir; sebebi çamaşırların dengesiz dağılması nedeniyle otomatik dengesiz yük algılama sisteminin devreye girmesi.
- **Dengesiz yükte sıkmaya geçmiyor:** Beko'ya göre bu, makinenin kendisini ve çevresini koruması.

Sıkma sırasında makine sallanıp ses yapıyorsa [Beko çamaşır makinesi titriyor](/blog/beko-camasir-makinesi-titriyor/) yazısına bak. Markadan bağımsız genel liste için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısı var. Ekranında bir hata kodu varsa [Beko çamaşır makinesi hata kodları](/blog/beko-camasir-makinesi-hata-kodlari/) yazısına geç.

## Sınır nerede biter

Sıkma seçimi doğru, çamaşırlar dağıtılmış, hortum ve pompa filtresi temiz, deterjan önerilen miktarda ve makine hâlâ sıkma adımına geçmiyorsa Beko'nun tablosu kullanıcıya başka adım vermiyor. Beko'nun uyarısı: talimatları uygulamana rağmen sorun sürüyorsa **ürünü satın aldığın bayiye ya da Yetkili Servise başvur; çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Ayar, çamaşır dağılımı, hortum ve filtre kullanıcıya; motor ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Hangi programı ve hangi sıkma devrini seçtin?
2. Suda Bırakma ya da Sıkma Yok seçili miydi?
3. Tamburda tek büyük parça mı vardı, yoksa karışık yük mü?
4. Makine suyu boşaltıyor mu, yoksa tamburda su mu kalıyor?
5. Ekranda bir hata kodu görünüyor mu?

Bu beşine cevabın varsa servise "santrifüj yapmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
