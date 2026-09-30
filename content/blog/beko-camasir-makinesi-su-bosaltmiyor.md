---
title: "Beko çamaşır makinesi su boşaltmıyor"
description: "Beko çamaşır makinesi suyu boşaltmıyorsa Beko kılavuzundaki iki sebep: tahliye hortumu ve pompa filtresi. Filtreyi elle temizleme sırası burada."
slug: "beko-camasir-makinesi-su-bosaltmiyor"
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
# Sorun giderme satırı (A s.32, B s.29, C s.29, D s.28), dört belgede aynı:
#   "Makine su tahliye etmiyor. • Su gideri hortumu tıkanmış veya kıvrılmış olabilir. >>> Hortumu temizleyin veya düzeltin. • Pompa filtresi tıkanmış olabilir. >>> Pompa filtresini temizleyin."
# Bakım 7.5 "Kalan suyun tahliye edilmesi ve pompa filtresinin temizlenmesi" (A s.30-31, B s.27-28, C s.27-28, D s.26-27): fişi çek · su 90 ºC'ye kadar çıkabilir, su soğuduktan sonra ·
#   kapak iki parça: tırnağı aşağı bastırıp çek; tek parça: üst iki yanından çekerek aç · acil tahliye hortumu varsa: yuvasından çek, ucu geniş kaba, tıpayı çek, dolunca tıpayla kapa, tekrarla, bitince tıpayla kapayıp sabitle ·
#   yoksa: filtrenin önüne geniş kap, filtreyi su akmaya başlayıncaya kadar (saat yönünün tersine) çevirerek gevşet, yanında bez; su bitince filtreyi çevirerek çıkar · kalıntı ve pervane bölgesindeki lifleri temizle ·
#   filtreyi tak · kapak: iki parçaysa tırnaktan bastırarak, tek parçaysa önce alt tırnaklar sonra üst · "her tıkandığında ya da 3 ayda bir" · "düğme, bozuk para, kumaş lifi gibi katı maddeler".
#   B s.28: "Ürün sujeti özelliğine sahipse ... Filtreyi yerine takarken kesinlikle zorlamayın. ... Aksi takdirde filtre kapağından su sızıntısı olabilir."
# Kurulum 3.5 (A s.10): tahliye hortumu en az 40, en çok 100 cm; ucunu pis suya daldırma, gidere 15 cm'den fazla sokma; bükülmesin, üzerine basılmasın, katlanmasın.
# Çalıştırma (A s.22, B s.19): Sıkma+Pompa programı — "makinenin içindeki suyu tahliye etmek için"; yalnız tahliye için Sıkma Yok seçilir.
# BİLEREK YAZILMAYANLAR: kapağı aletle açma (A s.31 "ince plastik uçlu bir aletle ... de çıkarabilirsiniz" notu adım yapılmadı; ALET KURALI) · pompa motoru/kart teşhisi (belgede yok) · hortumu kesip kısaltma (A s.10'da var; kullanıcıya adım olarak verilmedi).
# Alıntı denetim tablosu: beko-camasir-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Geniş, sığ bir kap", "Bez ya da havlu"]
steps:
  - "Programı iptal et, makinenin fişini çek ve içerideki suyun soğumasını bekle."
  - "Tahliye hortumunun kıvrılmadığını, üzerine basılmadığını ve ucunun pis suya dalmadığını kontrol et."
  - "Pompa filtresi kapağını elle aç: iki parçaysa tırnağa bastırıp çek, tek parçaysa üst iki yanından çek."
  - "Filtrenin önüne geniş bir kap ve bez koy; acil tahliye hortumu varsa onunla, yoksa filtreyi saat yönünün tersine gevşeterek suyu boşalt."
  - "Su bitince pompa filtresini çevirerek çıkar, içindeki kalıntıları ve pervane bölgesindeki lifleri temizle."
  - "Filtreyi zorlamadan yerine tam oturt ve kapağı tırnaklarından bastırarak kapat."
  - "Fişi tak ve Sıkma+Pompa programıyla makinenin suyu boşaltıp boşaltmadığını dene."
faq:
  - q: "Beko çamaşır makinesi suyu neden boşaltmıyor?"
    a: "Beko'nun kullanma kılavuzlarındaki 'Makine su tahliye etmiyor' satırı iki sebep sayıyor: su gideri hortumu tıkanmış veya kıvrılmış olabilir ya da pompa filtresi tıkanmış olabilir. Çözümleri hortumu temizlemek ya da düzeltmek ve pompa filtresini temizlemek."
  - q: "Pompa filtresini ne sıklıkla temizlemeliyim?"
    a: "Beko'ya göre pompa filtresi her tıkandığında ya da 3 ayda bir temizlenmeli. Filtre, tahliye sırasında düğme, bozuk para, kumaş lifi gibi katı maddelerin pompa pervanesine takılmasını engelliyor; filtreyi temizlemek için önce makinedeki suyun boşaltılması gerekiyor."
  - q: "Filtreyi açınca sıcak su gelir mi?"
    a: "Gelebilir. Beko'nun uyarısına göre makinenin içindeki suyun sıcaklığı 90 ºC'ye kadar çıkabilir; yanma tehlikesinden kaçınmak için filtre temizliği makinedeki su soğuduktan sonra yapılmalı. Önce fişi çek, sonra suyun soğumasını bekle."
  - q: "Filtreyi taktıktan sonra kapaktan su sızıyor, neden?"
    a: "Beko'nun D4 9122 E kılavuzuna göre filtre yerine takılırken zorlanmamalı ve tam olarak oturtulmalı; aksi hâlde filtre kapağından su sızıntısı olabilir. Filtreyi çıkarıp yeniden, zorlamadan ve tam oturtarak tak. Makinenin altından su geliyorsa Beko'nun tablosu pompa filtresinin tamamen kapalı olup olmadığının kontrol edilmesini istiyor."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin alt köşesinde açılmış filtre kapağı, önünde su toplanan geniş sığ bir kap ve katlanmış bir havlu"
---

Program bitti ama tamburun dibinde su duruyor, ya da makine boşaltma adımında takılı kaldı. Beko'nun çamaşır makinesi kullanma kılavuzlarındaki sorun giderme bölümünde bunun karşılığı tek satır: **"Makine su tahliye etmiyor."** Beko bu satırda iki sebep sayıyor: **su gideri hortumu tıkanmış veya kıvrılmış olabilir** ya da **pompa filtresi tıkanmış olabilir.** İkisi de evde, alet kullanmadan kontrol edilebiliyor. Bu yazıda Beko'nun kendi bakım talimatıyla sırayı açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek, suyun soğumasını bekle. Tahliye hortumu kıvrık mı bak. Pompa filtresi kapağını elle aç, suyu kaba boşalt, filtreyi çıkarıp temizle, zorlamadan tak. Sonra Sıkma+Pompa programıyla dene.

## Adım adım: evde denenecekler

**1. Fişi çek ve suyun soğumasını bekle.** Beko'nun pompa filtresi temizliğindeki ilk adım: **makinenin fişini çekerek elektriği kes.** Beko'nun uyarısı: makinenin içindeki suyun sıcaklığı **90 ºC'ye kadar** çıkabilir; yanma tehlikesinden kaçınmak için filtre temizliğini **makinedeki su soğuduktan sonra** yap.

**2. Tahliye hortumunu kontrol et.** Tablodaki ilk sebep: **su gideri hortumu tıkanmış veya kıvrılmış olabilir.** Çözüm: **hortumu temizle veya düzelt.** Beko'nun kurulum bölümüne göre hortumun ucunun **bükülmemesine, üzerine basılmamasına** ve hortumun gider ile makine arasında **katlanmamasına** dikkat edilmeli; ucu **pis suya daldırılmamalı**, gidere **15 cm'den fazla** sokulmamalı. Hortum en az **40**, en çok **100 cm** yüksekliğe takılmalı.

**3. Pompa filtresi kapağını elle aç.** Tablodaki ikinci sebep: **pompa filtresi tıkanmış olabilir.** Beko'nun tarifi: filtre kapağı **iki parçaysa** kapağın üzerindeki **tırnağı aşağıya doğru bastırıp** parçayı kendine doğru çek; **tek parçaysa** kapağı **üst iki yanından çekerek** aç.

**4. Suyu kaba boşalt.** Beko'ya göre filtreyi temizlemek için önce suyun boşaltılması gerekiyor. Modelinde **acil su tahliye hortumu** varsa: hortumu yuvasından çek, ucunu **geniş bir kaba** yerleştir, ucundaki **tıpayı çekip çıkararak** suyu kaba boşalt; kap dolunca tıpayı takıp kabı boşalt ve bunu su bitene kadar tekrarla, sonra tıpayla kapatıp hortumu yerine sabitle. Acil tahliye hortumu **yoksa**: filtrenin önüne **geniş bir kap** koy, pompa filtresini **su akmaya başlayıncaya kadar (saat yönünün tersine) çevirerek gevşet** ve akan suyu kaba doldur. Etrafa dökülebilecek su için yanında **bir bez** bulundur.

**5. Filtreyi çıkar ve temizle.** Makinedeki su bitince pompa filtresini **çevirerek tamamen çıkar.** Beko'nun tarifi: filtre içindeki **kalıntıları** ve varsa **pervane bölgesindeki lifleri** temizle. Beko'ya göre filtre, tahliye sırasında **düğme, bozuk para, kumaş lifi** gibi katı maddelerin pompa pervanesine takılmasını engelliyor; bu yüzden içinde bu tür şeyler bulman olağan.

**6. Filtreyi tak, kapağı kapat.** Filtreyi yerine tak. Beko'nun D4 9122 E kılavuzundaki uyarı: filtreyi takarken **kesinlikle zorlama** ve **yerine tam olarak oturt;** aksi takdirde filtre kapağından **su sızıntısı** olabilir. Kapağı, iki parçalıysa **tırnağın bulunduğu yerden bastırarak**, tek parçaysa **önce alt taraftaki tırnakları yerine oturtup sonra üst tarafını bastırarak** kapat.

**7. Suyu boşaltmayı dene.** Fişi tak. Beko'nun özel programlar bölümüne göre **Sıkma+Pompa** programı çamaşırlara ilave sıkma uygulamak ya da **makinenin içindeki suyu tahliye etmek** için kullanılıyor. Çamaşırları sıktırmadan yalnız suyu boşaltmak istiyorsan programı seçtikten sonra Sıkma Devri Ayar tuşuyla **Sıkma Yok**'u seç ve **Başla / Bekle / İptal** tuşuna bas.

## Filtreyi tıkanmadan tutmak için

Beko'ya göre pompa filtresi **her tıkandığında ya da 3 ayda bir** temizlenmeli. Makineyi başka bir eve taşımadan önce ve suyun donma tehlikesi olduğunda da suyun tamamen boşaltılması gerekebiliyor. Beko'nun başka bir uyarısı: pompa filtresinin içinde kalan yabancı cisimler makineye zarar verebilir ya da **ses problemine** neden olabilir.

Beko kılavuzunda filtre kapağının ince plastik uçlu bir aletle de çıkarılabileceği yazıyor; biz bu yazıda yalnız elle açma yolunu verdik. Kapak elle açılmıyorsa zorlama; kendi kılavuzundaki "Kalan suyun tahliye edilmesi ve pompa filtresinin temizlenmesi" bölümüne bak ya da işi yetkili servise bırak.

Markadan bağımsız anlatım için [çamaşır makinesi su atmıyor](/blog/camasir-makinesi-su-atmiyor/) ve [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazılarına bakabilirsin. Suyu boşaltamadığı için sıkma da yapmıyorsa [Beko çamaşır makinesi santrifüj yapmıyor](/blog/beko-camasir-makinesi-santrifuj-yapmiyor/) yazısına geç. Ekranında bir hata kodu varsa [Beko çamaşır makinesi hata kodları](/blog/beko-camasir-makinesi-hata-kodlari/) yazısı var.

## Sınır nerede biter

Hortum düz ve temiz, pompa filtresi temizlenip doğru takılmış ve makine hâlâ suyu boşaltmıyorsa Beko'nun tablosu kullanıcıya başka adım vermiyor. Beko'nun uyarısı: talimatları uygulamana rağmen sorun sürüyorsa **ürünü satın aldığın bayiye ya da Yetkili Servise başvur; çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Hortum ve pompa filtresi kullanıcıya; pompanın kendisi ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Makine hiç mi boşaltmıyor, yoksa yavaş mı boşaltıyor?
2. Pompa filtresinde ne çıktı (lif, düğme, bozuk para)?
3. Tahliye hortumu hangi yükseklikte ve nereye bağlı?
4. Filtreyi temizledikten sonra Sıkma+Pompa programı suyu attı mı?
5. Ekranda bir hata kodu görünüyor mu?

Bu beşine cevabın varsa servise "su boşaltmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
