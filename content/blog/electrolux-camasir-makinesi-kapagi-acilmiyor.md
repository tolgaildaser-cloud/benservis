---
title: "Electrolux çamaşır makinesi kapağı açılmıyor"
description: "Electrolux çamaşır makinesinin kapağı açılmıyorsa: program sonu, suyu kazanda bırakan seçenek, Sıkma/Boşaltma, elektrik ve Uzaktan Başlatma kontrolü."
slug: "electrolux-camasir-makinesi-kapagi-acilmiyor"
date: "2026-10-02"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, belirti rehberi). Belge 1 Eki'de curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi (HTTP 200, application/pdf);
#   bu koşuda yerel kopyanın md5'i yeniden alındı, MD5.txt ile birebir aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (E) Electrolux EW8F7417QT çamaşır makinesi kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/ad871a8b-e93c-46e3-b647-bd0475695b2c/E4RM3Q/2408314AXD/PDF/2408314AXD.pdf  56 s.  md5 d1fe605dbe55bda4a842f4f7671dca3e
# Arıza tablosu (E s.49) "Cihazın kapağı açılmıyor.":
#   · "Kazanda su bırakacak bir yıkama programı seçilmediğinden emin olun." · "Yıkama programının bittiğinden emin olun."
#   · "Tambur içerisinde su bulunuyorsa tahliye ya da sıkma programını seçin. Sıkma ve tahliye programları program düğmesinde yoksa, Uygulama üzerinden ayarlanabilirler."
#   · "Cihazın elektrik gücünü aldığından emin olun." · "Bu sorunun nedeni bir cihaz arızası olabilir. Yetkili Servis Merkezi ile iletişime geçin. Kapağı açmanız gerekiyorsa, lütfen "Acil durumda kapağın açılması" başlığını dikkatle okuyun."
#   · "Uzaktan Başlatma Modu özelliğinin etkinleştirilmediğinden emin olun. Devre dışı bırakın."
# Diğer: E s.38 14.12 Program sonu (Tamamlandı, Çamaşırları Çıkarın, kapak kilidi açılır) · 14.13 suyun boşaltılmadığı program/seçenek (kapak kilitli, Başlat/Beklet yanıp söner, "Kapıyı açmak için suyu tahliye etmelisiniz.")
#   · E s.38 14.11 program ya da gecikmeli başlatma sırasında kapak kilitli; Başlat/Beklet → kapak kilidi göstergesi söner → aç; su sıcak/yüksek ya da tambur dönüyorsa açma · E s.37 14.7 "Program başlar, kapak kilitlenir."
#   · E s.30 12.7 Sessiz (kapak kilitli kalır; Başlat/Beklet → yalnız su boşaltma; ~18 saat) · E s.18 Sıkma/Boşaltma · E s.21 Sıkmasız dipnotu · E s.15 7.5 Uzaktan Başlatma Modu (kapağı kilitler; çıkmak için düğmeye tekrar dokun)
#   · E s.39 Bekleme fonksiyonu suyu boşaltılmamış programda makineyi kapatmaz · E s.50 17.2 acil açma (elektrik kesintisi/arıza → kapak kilitli; elektrik gelince program devam eder; sıcaklık/tambur/su seviyesi uyarıları)
# BİLEREK YAZILMAYANLAR: acil kilit açma tetiğinin adım adım kullanımı ve acil boşaltma (alet kuralı + brif: numaralı adıma girmez; gövdede yalnız bölüm adıyla, "emin değilsen servis") · kapı kilidi/kart teşhisi (belgede yok)
#   · Çocuk Kilidi (belgede kapak açılmıyor satırında yok) · "Son Suda Bırakma"nın işlevi (belgede yalnız adı var) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-camasir-makinesi-kapagi-acilmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekranda Tamamlandı ve Çamaşırları Çıkarın mesajını görene kadar programın bitmesini bekle."
  - "Program Sessiz seçeneğiyle bittiyse Başlat/Beklet tuşuna dokun ve su boşaltma aşamasını bekle."
  - "Tamburda hâlâ su varsa Sıkma/Boşaltma programını seç ve başlat."
  - "Cihazın elektrik aldığını kontrol et; elektrik kesildiyse gelmesini bekle."
  - "Uzaktan Başlatma Modu açıksa düğmesine tekrar dokunarak kapat."
  - "Program sürerken açman gerekiyorsa Başlat/Beklet tuşuna dokun ve kapak kilidi göstergesi sönünce kapağı aç."
faq:
  - q: "Program bitti, Başlat/Beklet yanıp sönüyor, tambur ara ara dönüyor ama kapak açılmıyor. Neden?"
    a: "Electrolux'un EW8F7417QT kılavuzuna göre son durulamadan sonra suyun boşaltılmadığı bir program ya da seçenek seçildiyse program tamamlanır ama ekranda su boşaltma aşaması gösterilir, Başlat/Beklet göstergesi yanıp sönmeye başlar, tambur kırışmayı önlemek için düzenli olarak döner ve kapak kilitli kalır. Kılavuzun ifadesiyle kapağı açmak için suyu tahliye etmen gerekiyor. Bu durumda Bekleme fonksiyonu da suyu boşaltman gerektiğini hatırlatmak için makineyi kapatmıyor."
  - q: "Elektrik kesildi, çamaşır içeride kaldı. Kapak ne zaman açılır?"
    a: "Electrolux'a göre elektrik kesintisinde cihazın kapağı kilitli kalır ve elektrik geldiğinde yıkama programı devam eder. Program bitince kapak kilidi açılır. Kapağın arıza nedeniyle kilitli kaldığı durumlar için kılavuzda ayrı bir 'Kapağı acil şekilde açma' bölümü var."
  - q: "Acil kilit açma özelliğini kendim kullanabilir miyim?"
    a: "Electrolux'un sorun giderme tablosu kapağı açılmayan makine için önce cihaz arızası olasılığını ve Yetkili Servis Merkezi'ni gösteriyor; kapağı açman gerekiyorsa 'Acil durumda kapağın açılması' başlığını dikkatle okumanı istiyor. O bölümdeki uyarılar: su ve çamaşır sıcak olmamalı, tambur dönmüyor olmalı, tamburdaki su seviyesi çok yüksek olmamalı; gerekirse önce acil su boşaltması yapılır. Bu işlemleri yapmaktan emin değilsen yetkili servise bırak."
  - q: "Yıkama sırasında içeri bir çorap eklemek istiyorum. Kapak açılır mı?"
    a: "Electrolux'a göre program ya da gecikmeli başlatma çalışırken kapak kilitlenir. Giysi eklemek ya da çıkarmak için Başlat/Beklet tuşuna dokun; ekrandaki kapak kilidi göstergesi söner, kapağı açıp giysiyi ekle, kapağı kapat ve Başlat/Beklet'e yeniden dokun. Kılavuzun uyarısı: tamburdaki su sıcaklığı ve seviyesi çok yüksekse ya da tambur dönmeye devam ediyorsa kapağı açma."
images:
  coverAlt: "Kapağı kapalı ön yüklemeli çamaşır makinesinin cam kapağının ardında, tamburun alt kısmında görünen su ve ıslak çamaşırlar"
---

Program bitti sanıyorsun, kulpu çekiyorsun ama kapak yerinden kıpırdamıyor. EW8F7417QT'nin kapağı, program çalışırken bilerek kilitli tutuluyor; Electrolux'un kılavuzuna göre **"Program başlar, kapak kilitlenir."** Kılavuza göre program bitince kapak kilidi açılıyor. Açılmadığında Electrolux'un sorun giderme tablosu **"Cihazın kapağı açılmıyor."** satırında altı madde sayıyor: programın gerçekten bitmesi, kazanda su bırakan bir seçenek, tamburdaki su, elektrik, Uzaktan Başlatma Modu ve son olarak olası bir cihaz arızası. İlk beşi kullanıcıya dönük kontroller. Kaynak tek bir modelin kılavuzu; tuş ve seçenek adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda Tamamlandı yazıyor mu → Sessiz seçiliyse Başlat/Beklet'e dokun, su boşalsın → tamburda su varsa Sıkma/Boşaltma → elektrik var mı → Uzaktan Başlatma Modu'nu kapat → program sürerken açman gerekiyorsa Başlat/Beklet ile duraklat. Bunlar sonuç vermezse Electrolux'un yönlendirmesi Yetkili Servis.

## Adım adım: evde denenecekler

**1. Programın bitmesini bekle.** Tablodaki madde: **yıkama programının bittiğinden emin ol.** Electrolux'a göre program bittiğinde cihaz kendiliğinden durur, ekranda **Tamamlandı**, tamamlanan ilerleme çizgisi ve **Çamaşırları Çıkarın** mesajı görünür, Başlat/Beklet göstergesi söner ve **kapak kilidi açılır.** Ekranda süre hâlâ akıyorsa program sürüyordur. **Program bitiş zamanı** (gecikmeli başlatma) geri sayımı sırasında da kapak kilitli kalır.

**2. Sessiz seçeneğiyle bittiyse suyu boşalttır.** Tablodaki ilk madde: **kazanda su bırakacak bir yıkama programı seçilmediğinden emin ol.** Bunun tipik örneği **Sessiz** seçeneği: Electrolux'a göre bu seçenekte program kazandaki su boşaltılmadan biter ve **kapak kilitli kalır;** kilidi açmak için suyu tahliye etmelisin. Kılavuza göre bu durumda **Başlat/Beklet** tuşuna dokunursan makine **yalnız su boşaltma aşamasını** yapar. Boşaltma bitince kapağı yeniden dene.

**3. Tamburda su kaldıysa Sıkma/Boşaltma'yı çalıştır.** Electrolux'un maddesi: **tambur içerisinde su bulunuyorsa tahliye ya da sıkma programını seç.** EW8F7417QT'de bu program **Sıkma/Boşaltma** adıyla geçiyor; çamaşırı sıkmak ve tamburdaki suyu boşaltmak için. Çamaşırın santrifüjlenmesini istemiyorsan kılavuza göre **Sıkmasız** seçeneğinde makine yalnız suyu boşaltır. Kılavuza göre bu programlar program düğmesinde yoksa Uygulama üzerinden ayarlanabiliyor.

**4. Elektriği kontrol et.** Tablodaki madde: **cihazın elektrik gücünü aldığından emin ol.** Electrolux'un acil açma bölümüne göre **elektrik kesintisinde cihazın kapağı kilitli kalır;** elektrik geldiğinde yıkama programı devam eder. Kesinti varsa elektriğin gelmesini ve programın bitmesini bekle.

**5. Uzaktan Başlatma Modu'nu kapat.** Tablodaki son kullanıcı maddesi: **Uzaktan Başlatma Modu özelliğinin etkinleştirilmediğinden emin ol; açıksa devre dışı bırak.** Kılavuza göre bu modun etkinleştirilmesi **kapağı kilitler** ve makine bekleme durumuna geçer. Bu durumdan çıkmak için kumanda panelindeki Uzaktan Başlatma Modu düğmesine **tekrar dokun.**

**6. Program sürerken açman gerekiyorsa duraklat.** Program ya da gecikmeli başlatma çalışırken kapak kilitlidir. Giysi eklemek ya da çıkarmak için Electrolux'un sırası: **Başlat/Beklet** tuşuna dokun, ekrandaki **kapak kilidi göstergesi söner,** kapağı aç; işin bitince kapağı kapatıp Başlat/Beklet'e yeniden dokun, program kaldığı yerden devam eder. Kılavuzun uyarısı: tamburdaki **su sıcaklığı ve seviyesi çok yüksekse ya da tambur dönmeye devam ediyorsa kapağı açma.**

## Acil açma hakkında

Electrolux'un kılavuzunda kapağın **arıza nedeniyle** kilitli kaldığı durumlar için ayrı bir "Kapağı acil şekilde açma" bölümü var. Bu bölüm önce üç şeyi istiyor: su ve çamaşırlar sıcak olmamalı (yanma tehlikesi), tambur dönmüyor olmalı (yaralanma riski) ve tamburdaki su seviyesi çok yüksek olmamalı; gerekirse önce acil su boşaltması yapılmalı. Tablonun kendisi ise bu satırda önce **cihaz arızası** olasılığını ve **Yetkili Servis Merkezi'ni** gösteriyor. Acil açma ve acil boşaltma işlemlerini yapmaktan emin değilsen yetkili servise bırak.

Markadan bağımsız anlatım için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bakabilirsin. Kapak, tamburda kalan su yüzünden açılmıyorsa kardeş rehberimiz [Electrolux çamaşır makinesi su boşaltmıyor](/blog/electrolux-camasir-makinesi-su-bosaltmiyor/) sayfasına, çamaşır sulu çıkıyorsa [Electrolux çamaşır makinesi santrifüj yapmıyor](/blog/electrolux-camasir-makinesi-santrifuj-yapmiyor/) rehberine geç.

## Ne zaman servis

Electrolux'un kılavuzu şu durumlarda Yetkili Servis Merkezi'ni gösteriyor:

- Yukarıdaki kontrollere rağmen kapak açılmıyorsa: tabloya göre **bu sorunun nedeni bir cihaz arızası olabilir;** Yetkili Servis Merkezi ile iletişime geç.
- Ekranda tablodakilerden **başka bir alarm kodu** varsa: cihazı kapatıp yeniden çalıştır; sorun devam ederse Yetkili Servis Merkezi ile temasa geç.

Servis için gerekli bilgiler cihazın **bilgi etiketinde** yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Program, seçenekler, elektrik ve Uzaktan Başlatma kontrolü kullanıcıya; kapak kilidi ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ekranda Tamamlandı mı, süre mi, yoksa bir uyarı mı yazıyor?
2. Hangi programı ve seçenekleri seçmiştin, Sessiz açık mıydı?
3. Cam kapaktan tamburda su görünüyor mu?
4. Elektrik kesintisi oldu mu?
5. Uzaktan Başlatma Modu açık mıydı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
