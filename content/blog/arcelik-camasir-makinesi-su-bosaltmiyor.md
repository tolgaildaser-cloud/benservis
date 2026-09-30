---
title: "Arçelik çamaşır makinesi su boşaltmıyor"
description: "Arçelik çamaşır makinesi suyu tahliye etmiyorsa Arçelik kılavuzundaki iki sebep: tıkalı ya da kıvrık tahliye hortumu ve pompa filtresi. Temizlik adım adım."
slug: "arcelik-camasir-makinesi-su-bosaltmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Arçelik çamaşır belirti koşusu). Belgeler 28 Eyl'de download.arcelik.com.tr'den indirildi; A/B/C bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54  (sayfa atıfları esas olarak A)
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d
#  (C) 5063 FYE https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7171720100_tr_TR20161027-150509-278.pdf  36 s.  md5 c2d007a7792c6a021e92aeb1c1fa7961
# Sorun giderme satırı (A s.35 · B s.33): "Ürün su tahliye etmiyor." Su gideri hortumu tıkanmış veya kıvrılmış olabilir → Hortumu temizleyin veya düzeltin ·
#   Pompa filtresi tıkanmış olabilir → Pompa filtresini temizleyin.
# Diğer: A s.33-34 4.7.5 kalan suyun tahliyesi ve pompa filtresinin temizlenmesi (fişi çek; su 90 °C'ye çıkabilir, soğumasını bekle; kapak; kap; saat yönünün tersine gevşet; çıkar; kalıntı ve lif; tak; kapak)
#   · C s.26 iki parçalı filtre kapağı: tırnağı aşağı bastır, kendine çek · C s.27 acil su tahliye hortumu olan modeller · A s.14 tahliye hortumu 40-100 cm, bükülmesin, 15 cm'den fazla sokma
#   · B s.33 "Pompa filtresi tamamen kapanmamış olabilir" (altından su satırı) · A s.35 "Yükleme kapağı açılmıyor … Pompa ya da Sıkma programını çalıştırarak suyu tahliye edin."
# BİLEREK YAZILMAYANLAR: tek parça filtre kapağının "ince plastik uçlu bir aletle" çıkarılması (C s.27; ALET KURALI) · pompa/motor/kart teşhisi (belgede yok)
#   · hortum kesme/uzatma (kurulum işi, belirti satırında yok) · hata kodu (kaynağı 28 Eyl'de 403) · fiyat.
# Alıntı denetim tablosu: arcelik-camasir-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Geniş bir kap", "Bez"]
steps:
  - "Tahliye hortumunun kıvrılmadığını, üzerine basılmadığını ve katlanmadığını kontrol et; tıkanmışsa temizle."
  - "Makinenin fişini çek ve içerideki suyun soğumasını bekle."
  - "Filtre kapağı iki parçalıysa üzerindeki tırnağı aşağı bastırıp parçayı kendine doğru çekerek aç."
  - "Filtrenin önüne geniş bir kap koy, yanında bez bulundur."
  - "Pompa filtresini su akmaya başlayana kadar saat yönünün tersine çevirerek gevşet ve suyu kaba al."
  - "Su bitince filtreyi çevirerek tamamen çıkar."
  - "Filtrenin içindeki kalıntıları ve pervane bölgesindeki lifleri temizle."
  - "Filtreyi yerine tak, tamamen kapandığından emin ol ve filtre kapağını kapat."
faq:
  - q: "Arçelik çamaşır makinem suyu neden boşaltmıyor?"
    a: "Arçelik'in sorun giderme tablosu 'Ürün su tahliye etmiyor' satırında iki sebep sayıyor: su gideri hortumunun tıkanmış ya da kıvrılmış olması ve pompa filtresinin tıkanması. Çözümler de iki: hortumu temizlemek ya da düzeltmek ve pompa filtresini temizlemek."
  - q: "Pompa filtresi ne kadar sıklıkla temizlenmeli?"
    a: "Arçelik 7103 D kılavuzuna göre filtrenin her tıkandığında ya da 3 ayda bir temizlenmesi gerekiyor. Kılavuz, pompa filtresinin içinde kalan yabancı cisimlerin makineye zarar verebileceğini ya da ses problemine yol açabileceğini de yazıyor."
  - q: "Filtreyi açarken sıcak su gelir mi?"
    a: "Gelebilir. Arçelik'in uyarısına göre makinenin içindeki suyun sıcaklığı 90 °C'ye kadar çıkabilir; yanma tehlikesine karşı filtre temizliğini içerideki su soğuduktan sonra yap. Önce makinenin fişini çekerek elektriği kes."
  - q: "Makinemin filtre kapağının yanında küçük bir hortum var, o ne?"
    a: "Arçelik 5063 FYE kılavuzuna göre bazı modellerde acil su tahliye hortumu bulunuyor. Hortumu yuvasından çekip ucunu geniş bir kaba yerleştiriyorsun, tıpayı çıkararak suyu boşaltıyorsun; kap dolunca tıpayı takıp kabı boşaltıyor ve işlemi tekrarlıyorsun. Su bitince tıpayı takıp hortumu yerine sabitliyorsun."
images:
  coverAlt: "Çamaşır makinesinin alt önündeki açık filtre kapağı, önünde yere konmuş geniş bir plastik kap ve katlanmış bez"
---

Program ilerlemiyor, tamburun dibinde su duruyor ya da çamaşırlar suyun içinde kaldı. Arçelik'in çamaşır makinesi kullanma kılavuzundaki sorun giderme tablosunda bu durum tek satır: **"Ürün su tahliye etmiyor."** Arçelik'in bu satırda saydığı iki sebep de kullanıcının ulaşabileceği yerde: **su gideri hortumu tıkanmış veya kıvrılmış olabilir** ve **pompa filtresi tıkanmış olabilir.** Kılavuzun bakım bölümü de aynı şeyi söylüyor: makine içindeki suyu tahliye etmiyorsa **pompa filtresi tıkanmış olabilir.** Bu yazıda Arçelik'in temizlik sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce tahliye hortumu: kıvrık, ezik ya da tıkalı mı? Sonra fişi çek, suyun soğumasını bekle, filtrenin önüne kap koy, pompa filtresini yavaşça gevşetip suyu al, filtreyi çıkar, kalıntı ve lifleri temizle, tam kapatarak geri tak.

## Adım adım: evde denenecekler

**1. Tahliye hortumunu kontrol et.** Arçelik'in tablosundaki ilk sebep: **su gideri hortumu tıkanmış veya kıvrılmış olabilir.** Çözüm: **hortumu temizle veya düzelt.** Arçelik'in kurulum bölümüne göre hortumun ucunun **bükülmemesine**, **üzerine basılmamasına** ve hortumun gider ile makine arasında **katlanmamasına** dikkat et. Kılavuz hortumun ucunun **pis suya daldırılmamasını** ve gidere **15 cm'den fazla sokulmamasını** da istiyor.

**2. Fişi çek, suyun soğumasını bekle.** İkinci sebep pompa filtresi. Arçelik'in sırası fişle başlıyor: **ürünün fişini çekerek elektriği kes.** Kılavuzun uyarısı: makinenin içindeki suyun sıcaklığı **90 °C'ye kadar** çıkabilir; yanma tehlikesine karşı filtre temizliğini **içerideki su soğuduktan sonra** yap.

**3. Filtre kapağını elle aç.** Filtre kapağı modeline göre **tek parça ya da iki parça** olabilir. Arçelik 5063 FYE kılavuzuna göre kapak iki parçaysa **kapağın üzerindeki tırnağı aşağıya doğru bastırıp** parçayı **kendine doğru çek.** Kapağı elle açamıyorsan zorlama; aşağıdaki "Sınır nerede biter" bölümüne bak.

**4. Kap ve bez hazırla.** Arçelik'e göre makinende **acil su tahliye hortumu yoksa** filtreden akacak su için filtrenin önüne **geniş bir kap** yerleştir; etrafa dökülecek suyu temizlemek için yanında **bir bez** bulundur. Acil tahliye hortumu olan modellerde suyu önce o hortumdan boşaltırsın (sorular bölümünde anlatılıyor).

**5. Filtreyi gevşet, suyu al.** Arçelik'in yordamı: pompa filtresini **su akmaya başlayıncaya kadar saat yönünün tersine** çevirerek gevşet. Akan suyu filtrenin önündeki kaba doldur.

**6. Su bitince filtreyi çıkar.** Arçelik'e göre makinedeki su bittiğinde pompa filtresini **çevirerek tamamen çıkar.**

**7. Kalıntıları ve lifleri temizle.** Arçelik'in sırasındaki temizlik adımı: **filtre içindeki kalıntıları** ve varsa **pervane bölgesindeki lifleri** temizle. Kılavuza göre bu filtre sistemi, tahliye sırasında **düğme, bozuk para, kumaş lifi** gibi katı maddelerin pompa pervanesine takılmasını engelliyor.

**8. Filtreyi tak, kapağı kapat.** Filtreyi yerine tak. Arçelik'in tablosunun başka bir satırı, **pompa filtresi tamamen kapanmamışsa** makinenin altından su gelebileceğini söylüyor; bu yüzden filtrenin **tamamen kapalı** olduğundan emin ol. Filtre kapağı iki parçalıysa **tırnağın bulunduğu yerden bastırarak**, tek parçaysa önce **alt taraftaki tırnakları yerine oturtup** sonra **üst tarafını bastırarak** kapat.

## Temizlikten sonra

Arçelik'in tablosundaki "Yükleme kapağı açılmıyor" satırı, kapak içerideki su seviyesi yüzünden kilitliyse **Pompa ya da Sıkma programını çalıştırarak** suyu tahliye etmeyi öneriyor. Arçelik filtrenin **her tıkandığında ya da 3 ayda bir** temizlenmesini öneriyor; kılavuza göre filtrede kalan yabancı cisimler makineye zarar verebilir ya da **ses problemine** yol açabilir.

Makine suyu aldığı gibi hemen boşaltıyorsa bu başka bir satır: Arçelik'e göre **tahliye hortumu yeterli yükseklikte olmayabilir.** Kılavuz hortumun **en az 40, en çok 100 cm** yüksekliğe takılmasını istiyor. Makine suyu boşaltıyor ama sıkmıyorsa [Arçelik çamaşır makinesi santrifüj yapmıyor](/blog/arcelik-camasir-makinesi-santrifuj-yapmiyor/), içeride su olduğu için kapak açılmıyorsa [Arçelik çamaşır makinesi kapağı açılmıyor](/blog/arcelik-camasir-makinesi-kapagi-acilmiyor/) yazısına bak. Markadan bağımsız anlatım için [çamaşır makinesi su atmıyor](/blog/camasir-makinesi-su-atmiyor/) ve [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazıları var.

## Sınır nerede biter

Tahliye hortumu ve pompa filtresi kullanıcıya aittir. Arçelik 5063 FYE kılavuzu filtre kapağının **ince plastik uçlu bir aletle** de çıkarılabileceğini yazıyor ve kapak için **metal uçlu alet kullanılmamasını** istiyor; alet gerektiren bu yolu burada adım olarak vermiyoruz. Kapağı elle açamıyorsan yetkili servise bırak. Arçelik'in sorun giderme bölümünün sonundaki uyarı açık: talimatları uygulamana rağmen sorun sürüyorsa ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Hortum düz ve temiz, pompa filtresi temizlenmiş ve makine hâlâ suyu boşaltmıyorsa yetkili servise başvur. Diğer Arçelik konuları için [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Makine suyu hiç mi boşaltmıyor, yoksa yavaş mı boşaltıyor?
2. Tahliye hortumu nereye bağlı, kaç santim yükseklikte?
3. Pompa filtresinden ne çıktı: lif, bozuk para, düğme?
4. Filtreyi açtığında ne kadar su geldi?
5. Ekranda bir kod ya da yanıp sönen bir ışık var mı?

Bu beşine cevabın varsa servise "su boşaltmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
