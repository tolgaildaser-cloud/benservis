---
title: "Electrolux çamaşır makinesi santrifüj yapmıyor"
description: "Electrolux çamaşır makinesi santrifüj yapmıyorsa: sıkma hızı ayarı, Sessiz seçeneği, Sıkma/Boşaltma programı, çamaşırı dağıtma ve pompa filtresi."
slug: "electrolux-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-10-02"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, belirti rehberi). Belge 1 Eki'de curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi (HTTP 200, application/pdf);
#   bu koşuda yerel kopyanın md5'i yeniden alındı, MD5.txt ile birebir aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (E) Electrolux EW8F7417QT çamaşır makinesi kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/ad871a8b-e93c-46e3-b647-bd0475695b2c/E4RM3Q/2408314AXD/PDF/2408314AXD.pdf  56 s.  md5 d1fe605dbe55bda4a842f4f7671dca3e
# Arıza tablosu (E s.48) "Sıkma aşaması çalışmıyor ya da yıkama işlemi normalden uzun sürüyor.":
#   · "Sıkma programını ayarlayın. Tahliye programı program düğmesinde yoksa, Uygulama üzerinden ayarlanabilir."
#   · "Tahliye filtresinin tıkalı olmadığından emin olun. Gerekirse, filtreyi temizleyin."
#   · "Kazan içindeki çamaşırları manuel olarak ayarlayın ve sıkma aşamasını tekrar başlatın. Bu soruna denge sorunları neden olabilir."
# Diğer: E s.28 12.2 Sıkma ayarı sağ ekran tuşuyla · E s.20-21 Sıkma Hızı satırında "Son Suda Bırakma" ve "Sıkmasız"; dipnot "Sıkmasız seçeneğini ayarladığınızda makine sadece suyu boşaltır."
#   · E s.30 12.7 Sessiz: "tüm ara sıkmalar ve son sıkma işlemleri iptal edilir"; Menü → kadran → sağ tuş Açık/Kapalı; Başlat/Beklet → yalnız su boşaltma; ~18 saat
#   · E s.18 Sıkma/Boşaltma ("Çamaşırı sıkmak ve tamburdaki suyu boşaltmak için.") · Durulama ("Düşük sıkma hızıyla cihaz, hassas durulama ve kısa süreli bir sıkma gerçekleştirir.")
#   · E s.39 15.1 "Çok az çamaşır yüklenmesi sıkma aşamasında aşırı titreşime neden olarak denge sorunlarının yaşanmasına yol açabilir." + a/b/c (durdur-kapağı aç, elle dağıt, Başlat/Beklet)
#   · E s.38 14.11 kapağı açma (Başlat/Beklet, kapak kilidi göstergesi söner; su sıcak/yüksekse ya da tambur dönüyorsa açma) · E s.49 ses/titreşim satırı · E s.15 SmartSelect sıkma hızını değiştirebilir
#   · E s.44-45 16.9 pompa temizliği ("Tambur dönmüyorsa." tetikleyicisi; fiş; su soğusun; çark dönmüyorsa servis) · E s.48 başka alarm kodu · E s.50 tekrarlanırsa servis, bilgi etiketi
# BİLEREK YAZILMAYANLAR: motor/kart/kömür/rulman teşhisi (belgede yok) · "Son Suda Bırakma"nın işlevi (belgede yalnız adı var, tanımı yok) · s.18 dipnot 2'deki "tambur yavaş döner" notu (hangi programa ait olduğu metinden okunmuyor)
#   · nakliye cıvatası sökümü ve ayak ayarı (montaj işi; belge alet/yöntem vermiyor → gövdede yalnız "Montaj talimatları" diye anıldı) · pompa filtresinin adım adım temizliği (kardeş sayfada; burada tek adım + link) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Geniş bir kap", "Bez"]
steps:
  - "Sıkma hızı ayarına bak; Sıkmasız seçiliyse bir sıkma hızı seç."
  - "Menü'den Sessiz seçeneğine gel, açıksa kapat."
  - "Tamburda ıslak çamaşır kaldıysa Sıkma/Boşaltma programını seç ve başlat."
  - "Başlat/Beklet tuşuna dokunarak programı duraklat ve kapak kilidi göstergesi sönünce kapağı aç."
  - "Çamaşırları tamburun içinde elle eşit şekilde dağıt, kapağı kapat ve Başlat/Beklet'e dokun."
  - "Tamburda çok az çamaşır varsa biraz daha çamaşır ekle."
  - "Fişi çek ve tahliye pompası filtresinin tıkalı olmadığını kontrol et, gerekirse temizle."
faq:
  - q: "Durulama programında santrifüj çok kısa sürdü. Arıza mı?"
    a: "Electrolux'un EW8F7417QT program tablosuna göre Durulama'da varsayılan sıkma hızı pamuklu programlarda kullanılan hızdır ve sıkma hızını çamaşır tipine göre düşürmen öneriliyor. Kılavuz şunu da yazıyor: düşük sıkma hızıyla cihaz hassas bir durulama ve kısa süreli bir sıkma yapar. Yani sıkma hızını düşürdüysen kısa bir santrifüj beklenen davranış."
  - q: "Sessiz seçeneği tam olarak ne yapıyor?"
    a: "Electrolux'a göre Sessiz seçeneğinde tüm ara sıkmalar ve son sıkma iptal edilir, program kazandaki su boşaltılmadan biter; böylece kırışıklık önlenir. Kapak kilitli kalır ve tambur belirli aralıklarla döner. Bu durumda Başlat/Beklet tuşuna dokunursan makine yalnız su boşaltma aşamasını yapar; yaklaşık 18 saatlik azami süre aşılınca su kendiliğinden boşaltılır. Çamaşırın santrifüjlenmesini istiyorsan Sıkma/Boşaltma programını seç."
  - q: "Makine santrifüje geçerken çok sallanıyor ve ses yapıyor. Ne yapmalıyım?"
    a: "Electrolux'un sorun giderme tablosunda normal olmayan ses ve titreşim için üç kontrol var: cihaz seviyesinin doğru olması, ambalajın ve nakliye cıvatalarının çıkarılmış olması ve tamburdaki çamaşırın çok az olmaması. İlk ikisi için kılavuz 'Montaj talimatları' bölümünü gösteriyor; bu bölüme göre seviye ayaklarla ayarlanır, ayakların altına karton ya da tahta konmaz. Montaj işini yapmaktan emin değilsen yetkili servise bırak."
  - q: "Ekranda süre değişiyor, program uzun sürüyor. Bu da santrifüj sorunu mu?"
    a: "Her zaman değil. Electrolux'un tablosunda uzayan yıkama süresi santrifüj satırıyla aynı başlıkta geçiyor ve çözümleri aynı: sıkma programı, tahliye filtresi, çamaşırı elle dağıtmak. Ayrı bir satıra göre de SensiCare System seçeneği çamaşır tipine ve yük miktarına göre program süresini ayarlayabilir; program çalışırken sürenin artması ya da azalması bu yüzden olabilir."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin açık kapağından görünen, tamburun bir yanında toplanmış ıslak havlular ve onları tamburun içine yayan bir el"
---

Yıkama bitiyor, durulama da geçiyor ama makine santrifüje geçmiyor; çamaşır sırılsıklam çıkıyor ya da program bir türlü bitmiyor. Electrolux'un EW8F7417QT kullanma kılavuzunda bu durum için tek satır var: **"Sıkma aşaması çalışmıyor ya da yıkama işlemi normalden uzun sürüyor."** Electrolux bu satırda üç şey söylüyor: sıkma programını ayarla, tahliye filtresine bak ve tamburdaki çamaşırı elle düzelt, çünkü **"Bu soruna denge sorunları neden olabilir."** Kılavuzun seçenekler bölümü bir ipucu daha veriyor: bazı ayarlar santrifüjü bilerek kapatıyor. Bu rehber önce bu ayarlara, sonra yük dengesine, en son filtreye bakıyor. Kaynak tek bir modelin kılavuzu; tuş ve seçenek adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıkma hızı "Sıkmasız"da mı → Sessiz seçeneği açık mı → ıslak çamaşır için Sıkma/Boşaltma programı → programı duraklat, çamaşırı tamburda elle dağıt, devam ettir → çok az çamaşır varsa biraz ekle → fişi çekip pompa filtresine bak. Pompa çarkı dönmüyorsa Electrolux'un yönlendirmesi Yetkili Servis.

## Adım adım: evde denenecekler

**1. Sıkma hızı ayarına bak.** EW8F7417QT'de program seçtikten sonra varsayılan sıkma ayarı **sağ ekran tuşuyla** değiştiriliyor; her dokunuşta değer seçilen programın en düşüğünden en yükseğine doğru ilerliyor. Kılavuzun seçenek tablosunda **Sıkma Hızı** satırının altında **"Sıkmasız"** ayrı bir seçenek olarak geçiyor (tabloya göre yalnız bazı programlarda var) ve Electrolux'un notu açık: **Sıkmasız seçeneğini ayarladığında makine sadece suyu boşaltır.** Ekranda bu seçili görünüyorsa bir sıkma hızı seç.

**2. Sessiz seçeneğini kapat.** Electrolux'a göre **Sessiz** seçeneğinde **tüm ara sıkmalar ve son sıkma işlemleri iptal edilir** ve program kazandaki su boşaltılmadan biter. Bu seçenek açık kaldıysa makinenin santrifüj yapmaması beklenen davranış. Kapatmak için **Menü** tuşuna dokun, ekranda Sessiz görünene kadar kadranı çevir ve **sağ tuşla** göstergeyi Kapalı konuma getir.

**3. Islak çamaşır için Sıkma/Boşaltma programını çalıştır.** Tablodaki ilk çözüm: **sıkma programını ayarla.** EW8F7417QT'nin program tablosunda bu iş için **Sıkma/Boşaltma** programı var; Electrolux onu "çamaşırı sıkmak ve tamburdaki suyu boşaltmak için" diye tarif ediyor ve yünlüler ile çok hassas kumaşlar dışındaki tüm kumaşlara uygun gösteriyor. Kılavuza göre bu program program düğmesinde yoksa Uygulama üzerinden ayarlanabiliyor.

**4. Programı duraklat ve kapağı aç.** Tablodaki üçüncü çözüm çamaşırı elle düzeltmek; bunun için önce **Başlat/Beklet** tuşuna dokun. Electrolux'a göre ekrandaki **kapak kilidi göstergesi söner** ve kapağı açabilirsin. Kılavuzun uyarısı: tamburdaki **su sıcaklığı ve seviyesi çok yüksekse ya da tambur dönmeye devam ediyorsa** kapağı açma; bekle.

**5. Çamaşırı elle dağıt ve devam ettir.** Electrolux'un ipuçları bölümündeki sıra: **çamaşırları elinle tamburun içinde dağıt,** böylece kazanın içine eşit şekilde yerleşsinler. Sonra kapağı kapat ve **Başlat/Beklet** tuşuna dokun; kılavuza göre **sıkma aşaması devam eder.**

**6. Çok az çamaşır varsa biraz ekle.** Electrolux'un ipuçlarına göre **çok az çamaşır yüklenmesi sıkma aşamasında aşırı titreşime neden olarak denge sorunlarına** yol açabilir. Kılavuzun ses ve titreşim satırındaki çözüm de aynı yönde: **tambura daha fazla çamaşır ekle; çamaşır yükü çok az olabilir.** Kapağı yine 4. adımdaki gibi aç.

**7. Pompa filtresine bak.** Tablodaki son kontrol: **tahliye filtresinin tıkalı olmadığından emin ol, gerekirse temizle.** Electrolux pompa temizliğini gerektiren durumlar arasında **"Tambur dönmüyorsa."** maddesini de sayıyor. Önce **fişi prizden çek;** kılavuza göre cihaz çalışırken filtre çıkarılmaz ve makinedeki su sıcaksa **soğuyana kadar beklenir.** Filtreyi kap ve bez yardımıyla boşaltma ve temizleme sırasını kardeş rehberimiz [Electrolux çamaşır makinesi su boşaltmıyor](/blog/electrolux-camasir-makinesi-su-bosaltmiyor/) adım adım anlatıyor.

## Arıza olmayan durumlar

**Durulamada kısa santrifüj.** Electrolux'a göre Durulama programında sıkma hızını düşürürsen cihaz **hassas bir durulama ve kısa süreli bir sıkma** yapar.

**SmartSelect sıkma hızını değiştirdi.** Kılavuza göre her **SmartSelect** seviyesi, seçilen programın sıcaklığını, **sıkma hızını** ve program süresini değiştirebilir. Seçtiğin seviyeden sonra sıkma hızını ekranda kontrol et.

**Program bitti ama çamaşır sulu, kapak kilitli.** Suyun boşaltılmadığı bir program ya da seçenek seçildiyse Electrolux'a göre program tamamlanır ama kapak kilitli kalır ve Başlat/Beklet göstergesi yanıp söner; kapağı açmak için önce suyu tahliye etmen gerekir.

Markadan bağımsız anlatım için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısına, sallanma ve ses için [çamaşır makinesi ses ve titreşim](/blog/camasir-makinesi-ses-titresim/) sayfasına bakabilirsin.

## Ne zaman servis

Electrolux'un kılavuzu şu durumlarda Yetkili Servis Merkezi'ni gösteriyor:

- Pompa temizliğinde **pompa çarkının döndüğünden emin olunması** isteniyor; dönmüyorsa Yetkili Servis Merkezi ile iletişime geç.
- Ekranda tablodakilerden **başka bir alarm kodu** varsa: cihazı kapatıp yeniden çalıştır; sorun devam ederse Yetkili Servis Merkezi ile temasa geç.
- Yukarıdaki kontrollerden sonra **sorun tekrarlanırsa.**

Servis için gerekli bilgiler cihazın **bilgi etiketinde** yazıyor.

⛔ **Kendin-çöz sınırı burada biter.** Sıkma ayarı, seçenekler, yük dengesi ve pompa filtresi kullanıcıya; montaj işleri ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Hangi programı seçmiştin, sıkma hızı ekranda ne görünüyordu?
2. Sessiz seçeneği açık mıydı?
3. Tamburda ne kadar ve ne tür çamaşır vardı?
4. Çamaşırı elle dağıttıktan sonra sıkma aşaması devam etti mi?
5. Pompa filtresinden su ve tüy çıktı mı, ekranda bir uyarı var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
