---
title: "BenQ projeksiyon Sinyal Yok hatası: görüntü gelmiyorsa"
description: "BenQ projeksiyon Sinyal Yok diyorsa kaynak cihazı, kablo, KAYNAK tuşu ve dizüstünün harici ekran ayarı sırayla elenir. Türkçe kılavuza göre adım adım."
slug: "benq-projeksiyon-sinyal-yok"
date: "2026-10-29"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-29 PAZ alt ajanı (Apple+BenQ dalgası, grup D). origin/main'de "benq", "projeksiyon", "projektor" geçen slug yok; genel monitör yazısı monitor-sinyal-yok var (bağlantı verildi, kopya değil).
# Arama kanıtı (#164, 29 Eki 10:43, hl=tr gl=tr): "benq projeksiyon s" → 1. "benq projeksiyon sinyal yok hatası"; "benq sinyal yok" → 1. aynı; "benq projeksiyon b" → 1. "…bilgisayara nasıl bağlanır", 7. "…laptopa nasıl bağlanır".
# Belge (#88): BenQ Türkçe kullanım kılavuzları, esupportdownload.benq.com (200, application/pdf):
#  (T) TK700_UM_TR_240717160127.pdf md5 04cef5c02227ee4a077d88c12fd06744 · (W) W2700i_UM_TR_200804170632.pdf md5 6e5cb99b60bdd6cafcece48ce0681b34
#  (Q) benq.com/tr-tr/business/support/products/projector/lw720/qa.html (200) md5 f5134a5e63c98afc027581cd16c890dc
# BİLEREK YAZILMAYANLAR: kablosuz yansıtma/Android TV kurulumu · ekran kartı onarımı · fiyat (#46).
# Alıntı denetimi: benq-projeksiyon-sinyal-yok.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yedek HDMI kablosu (varsa)"]
steps:
  - "Görüntü kaynağı olan cihazın açık ve çalışır durumda olduğunu doğrula."
  - "Cihazları kapatıp kabloyu iki uçtan sıkıca yeniden tak; kaynağa uygun kabloyu kullan."
  - "Projektörde ya da kumandada KAYNAK tuşuna basıp kablonun takılı olduğu girişi seç."
  - "Projektörün sinyali kendisi araması için menüde otomatik kaynak aramayı aç."
  - "Dizüstü bilgisayardaysan harici ekran çıkışını FN tuşu ve ekran simgeli tuşla aç."
  - "Ekranda Aralık Dışı yazıyorsa bilgisayarın çözünürlüğünü düşür."
  - "Lens kapağı olan modelde kapağın açık olduğunu kontrol et."
  - "Hepsine rağmen görüntü gelmiyorsa BenQ yetkili servisine başvur."
faq:
  - q: "BenQ projeksiyon açılıyor ama Sinyal Yok yazıyor, neden?"
    a: "Kılavuza göre projektör açılınca giriş sinyallerini arar ve geçerli bir sinyal bulamazsa bulana kadar Sinyal Yok mesajını gösterir. Yani projektör çalışıyor, ama seçili girişten görüntü gelmiyor. En sık sebepler kapalı ya da yanlış bağlanmış kaynak cihaz ve yanlış seçilmiş giriştir."
  - q: "Laptopu bağladım, projektörde görüntü yok. Ne yapmalıyım?"
    a: "BenQ kılavuzu dizüstü bilgisayarların çoğunun projektöre bağlanınca harici görüntü çıkışını kendiliğinden açmadığını yazıyor. Genellikle FN tuşuyla birlikte ekran simgeli bir işlev tuşuna basmak gerekiyor. Tuş birleşimi markaya göre değiştiği için bilgisayarının belgelerine bak."
  - q: "Görüntü gelmeyince projektör kendiliğinden kapanıyor mu?"
    a: "TK700 kılavuzuna göre 3 dakika içinde hiçbir sinyal algılanmazsa projektör otomatik olarak koruma moduna geçiyor. Kaynağı bağlayıp açtıktan sonra projektörü yeniden kullanmaya başlayabilirsin."
  - q: "Sinyal Yok yazısını hiç görmüyorum ama ekran yine boş."
    a: "BenQ Türkiye destek sayfasına göre menüde Hatırlatma Mesajı kapatılırsa Sinyal Yok, kaynak arama ve Aralık dışı gibi mesajlar artık görüntülenmiyor. Boş ekranda önce bu ayarı aç; mesaj geri gelirse aynı elemeye buradan devam et."
images:
  coverAlt: "Karanlık bir odada perdeye mavi bir boş ekran yansıtan projektör ve yanında dizüstü bilgisayar"
  steps:
    - "Çizim: solda projektör, sağda açık durumdaki dizüstü bilgisayar"
    - "Çizim: solda projektörün arka bağlantı paneli, sağda iki ucu da takılan bir görüntü kablosu"
    - "Çizim: solda projektör, sağda kaynak seçim listesi açık bir uzaktan kumanda"
    - "Çizim: solda projektör, sağda menüde açık konuma getirilmiş bir anahtar"
    - "Çizim: solda dizüstü bilgisayar klavyesi, sağda ekran simgeli bir işlev tuşu"
    - "Çizim: solda büyük ekran ikonu, sağda küçülen ekran ikonu ve aşağı ok"
    - "Çizim: solda kapağı takılı bir mercek, sağda kapağı çıkarılmış mercek"
    - "Çizim: solda projektör, sağda telefon ve servis simgesi"
---

Projektörün ışıkları yanıyor, perdede mavi bir ekran var ve ortasında tek bir yazı: **Sinyal Yok**. Projektör çalışıyor ama ona görüntü ulaşmıyor. Sebep çoğu zaman projektörün kendisinde değil, zincirin başka bir halkasındadır: kaynak cihaz, kablo, yanlış giriş ya da dizüstü bilgisayarın kapalı harici ekran çıkışı. Bu yazı BenQ'nun **TK700** ve **W2700i** Türkçe kullanım kılavuzlarındaki bağlantı ve sorun giderme bölümlerine dayanıyor.

> 🖥️ **Önce ayır:** Projektör hiç açılmıyorsa konu güç tarafıdır; kılavuz bu durumda elektrik kablosunu ve prizdeki anahtarı kontrol etmeni, soğutma sürüyorsa bitmesini beklemeni söylüyor. Projektör açılıp **Sinyal Yok** yazıyorsa doğru yerdesin.

## Sinyal Yok ne demek?

BenQ kılavuzuna göre projektör açıldığında giriş sinyallerini kendisi arar. Geçerli bir sinyal bulamazsa, bir giriş sinyali bulunana kadar ekranda **Sinyal Yok** mesajı kalır. Kılavuz bir de süre veriyor: TK700'de 3 dakika boyunca sinyal algılanmazsa projektör otomatik olarak koruma moduna geçiyor. Yani projektörün kapanması da bu tablonun parçası olabilir.

## Adım adım: BenQ projektörde Sinyal Yok elemesi

**1. Kaynağı aç.** Kılavuzun "Resim yok" tablosundaki ilk sebep, video kaynağının açılmamış ya da doğru bağlanmamış olması. Bilgisayar, oyun konsolu ya da medya oynatıcı açık ve çalışıyor mu, önce buna bak.

**2. Kabloyu yeniden tak.** Kılavuz bağlantı yaparken üç şey istiyor: bağlantıdan önce tüm cihazları kapat, her kaynak için doğru sinyal kablosunu kullan, kabloların sıkıca takılı olduğunu kontrol et. Kabloyu iki uçtan çıkarıp yeniden tak; elinde yedek bir kablo varsa onunla da dene.

**3. Doğru girişi seç.** Projektör aynı anda birden fazla cihaza bağlanabilir ama aynı anda yalnız birinden görüntü gösterir. **KAYNAK** (SOURCE) tuşuna bas, açılan çubukta kablonun takılı olduğu girişi ok tuşlarıyla seç ve OK'a bas. Kılavuza göre seçilen kaynak bilgisi birkaç saniye ekranın köşesinde görünür.

**4. Otomatik aramayı aç.** Projektörün sinyali kendisi bulmasını istiyorsan TK700'de **Gelişmiş menü - Ekran > Oto Kaynak Ara**, W2700i'de **SİSTEM KURULUMU: Basit Menü > Otomatik Kaynak** ayarının **Açık** olduğundan emin ol.

**5. Dizüstünün çıkışını aç.** Kılavuz dizüstü bilgisayarların çoğunun projektöre bağlanınca harici görüntü çıkışını açmadığını yazıyor. Genellikle **FN** tuşu ile ekran simgeli bir işlev tuşuna aynı anda basman gerekir. Tuş birleşimi bilgisayara göre değişir; kendi bilgisayarının belgelerine bak.

**6. Aralık Dışı uyarısına bak.** Ekranda **Aralık Dışı** yazıyorsa sinyal geliyor ama projektörün desteklediği aralığın dışında. Kılavuz bu durumda projektörün çözünürlüğüyle uyumlu bir sinyale geçmeni ya da bilgisayarın çözünürlüğünü düşürmeni söylüyor. Desteklenen değerler kılavuzun Zamanlama çizelgesi bölümünde.

**7. Lens kapağına bak.** W2700i kılavuzu "Resim yok" sebepleri arasında açılmamış lens kapağını da sayıyor. Kapaklı bir modelin varsa kapağın açık olduğunu kontrol et.

**8. Servise git.** Kaynak açık, kablo doğru, giriş seçili, dizüstünün çıkışı açık ve hâlâ görüntü yoksa bu noktada eleme biter. Kılavuz projektörün sökülmemesini, içeride yüksek gerilim taşıyan parçalar olduğunu yazıyor. BenQ yetkili servisine başvur.

## Açılışta biraz bekle

Her şeyi doğru bağladığın hâlde ilk saniyelerde perde boş kalabilir. TK700 kılavuzuna göre açılış yaklaşık **30 saniye** sürüyor; sonunda bir açılış logosu yansıtılıyor. Projektör önceki kullanımdan hâlâ sıcaksa lamba yanmadan önce soğutma fanı yaklaşık **90 saniye** çalışıyor. Bu sürede kaynak değiştirmeye ya da kabloyu sökmeye başlama; logodan sonra sinyal araması başlar.

## Görüntü geliyor ama bulanık ya da bozuk

Sinyal gelip görüntü bulanıksa bu artık bağlantı sorunu değildir. Kılavuzun "Bozuk görüntü" tablosu iki sebep sayıyor: mercek odaklanmamış olabilir, bunun için odak halkasını çevir; ya da projektör ile perde düzgün hizalanmamıştır, bunun için açıyı, yönü ve gerekirse yüksekliği ayarla. Kılavuz ayrıca en iyi sonuç için projektörün doğal çözünürlüğünde çıkış veren bir kaynak seçmeni öneriyor; başka çözünürlükler ölçeklenirken netlik kaybolabiliyor.

## Mesaj hiç görünmüyorsa

Bazen perdede ne görüntü ne de "Sinyal Yok" yazısı olur. BenQ Türkiye'nin destek sayfasına göre menüde **Hatırlatma Mesajı** kapatılırsa "Sinyal yok", kaynak arama ve "Aralık dışı" gibi mesajlar artık görüntülenmiyor. Projektörün sana ne söylediğini görmek için bu ayarı geçici olarak aç; sonra yukarıdaki elemeye devam et.

## Projektör mü, kaynak mı?

BenQ kılavuzu bu konuda net: projektör açılıp doğru kaynak seçildiği hâlde görüntü gelmiyorsa önce kaynak cihazın açık olduğundan ve düzgün çalıştığından emin olmanı, sonra sinyal kablolarının doğru bağlandığını kontrol etmeni istiyor. Yani şüphe ilk olarak kaynak tarafındadır. Bilgisayarın kendisi görüntü vermiyor olabilir; bilgisayar tarafındaki eleme için [monitörde sinyal yok rehberimize](/blog/monitor-sinyal-yok/) bakabilirsin. Projektörü bir medya oynatıcıya ya da konsola bağlamak da hangi cihazın sorunlu olduğunu ayırmana yardım eder.

Servise giderken hangi kaynağı, hangi kabloyu ve hangi girişi denediğini not et. Bu notlar teşhisi kısaltır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin. Bil, gör, çağır.
