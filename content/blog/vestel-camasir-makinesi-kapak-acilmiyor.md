---
title: "Vestel çamaşır makinesi kapağı açılmıyor"
description: "Vestel çamaşır makinesinin kapağı açılmıyorsa End yazısını ve 2 dakikalık kilidi bekle; program sürüyorsa CL'yi kapatıp İPTAL ile suyu boşalt."
slug: "vestel-camasir-makinesi-kapak-acilmiyor"
date: "2026-10-02"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Vestel grubu). Beş belge bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in kendi alan adından
#   (statik.vestel.com.tr) yeniden indirildi, hepsi HTTP 200; md5'ler 27 Eyl yerel kopyalarıyla (blog-taslaklar/kaynak-vestel-sprint/) 5/5 birebir.
#   Okuma pdftotext -layout -f N -l N; sayfa = PDF sayfası (pdfinfo). Web araması KULLANILMADI.
#  A) CMI 86201       https://statik.vestel.com.tr/webfiles/20264687_k.pdf  40 s.  md5 7a5f38c8ae4890b1b1e7e691f2de1950  (sayfa atıfları bu belgeye göre)
#  B) CMI 106221      https://statik.vestel.com.tr/webfiles/20264677_k.pdf  40 s.  md5 00dc59105bf528b9c00b0f116d220f77
#  C) CMI 87302 WIFI  https://statik.vestel.com.tr/webfiles/20265394_k.pdf  43 s.  md5 609c99fc8bc6b4bc3d75f8c31017b37f
#  D) KCMI 98142 WIFI https://statik.vestel.com.tr/webfiles/20263189_k.pdf  49 s.  md5 9e654374ff661c2fb154e0c548526d7c
#  E) CMI 128222 WIFI https://statik.vestel.com.tr/webfiles/20264675_k.pdf  43 s.  md5 c7607ad9886b39d7be76043a5285bfba
# NOT: Kılavuzların sorun giderme tablosunda "kapak açılmıyor" satırı YOK. Sayfa, kılavuzların kullanım/önemli bilgiler bölümlerindeki kapı kurallarından kuruldu.
# Program bitimi: A s.22 (5.10) "Elektronik göstergede ”End” yazısı görünecektir." / "Makinenin kapısını açıp çamaşırları çıkartabilirsiniz." (D s.28 · E s.25)
# 2 dakika: A s.26 (6.1 Önemli Bilgiler) "Çamaşır Makinesi çalışıyorken kapağı asla zorlayarak açmayın. Yıkama işlemi sona erdikten 2 dakika sonra makinenizin
#   kapağını açabilirsiniz. *" + "Çamaşır Makinesi çalışıyorken kapağı asla zorlayarak açmayın. Yıkama çevrimi sona erdikten hemen sonra kapak açılır. *"
#   + "(*) Makine özellikleri satın alınan ürün özelinde değişiklik gösterebilir." (D s.35 aynı) · A s.24 program tablosu notu "Makinenizin kapısını yıkama
#   işlemini bitirdikten 2 dk. sonra açabilirsiniz. (Makinenin kapısının açılması için gereken 2 dk. yıkama süresine dahil değildir.)"
# Zorlama: A s.5 "Makineniz çalışır durumdayken kapısını açmak için zorlamayınız."
# Çocuk kilidi: A s.21 (5.8) "Çocuk kilidi, elektronik gösterge üzerinde 4. ve 5. tuşlarının ikisine aynı anda 3 sn den daha fazla bir süre basıldıktan sonra
#   devreye girecektir. Devreye girdiğinde elektronik gösterge üzerinde “CL” sembolü yanar." / "Herhangi bir program çalışırken ve çocuk kilidi devredeyken,
#   program düğmesi “İPTAL” konumuna getirilip sonrasında başka bir program seçilirse daha önce çalışmakta olan program kaldığı yerden devam eder."
#   / "Devreden çıkarmak için aynı tuşlara 3 sn den daha fazla bir süre basmanız gerekmektedir." (B s.21 · C s.24 · D s.27 · E s.24)
# İptal ve boşaltma: A s.22 (5.9) "Program düğmesini “İPTAL” konumuna getirin. Makineniz yıkama işlemini durduracak ve program iptal olacaktır.
#   Makine içerisinde bulunan suyu boşaltmak için; program düğmesini herhangi bir programa getirin. Makineniz gerekli boşaltma işlemini yapıp programı
#   iptal edecektir." (C s.25 · E s.25)
# Tahliye programı: A s.23 "Tahliye programını, makinenizin içinde biriken suyun boşaltılması gereken durumlarda, (çamaşır ekleme, çamaşır çıkartma vb.)
#   kullanabilirsiniz, tahliye programını aktif hale getirmek için sıkma tahliye programı üzerine program düğmesini getirerek, ek fonsiyon düğmesinden,
#   sıkma iptal seçimini aktif hale getirdikten sonra çalışmaya başlayacaktır." (D s.30 "Sıkma/Tahliye")
# Elektrik kesintisi: B s.6 · D s.6 · E s.6 "Acil durumda kapı açma fonksiyonu" — "Makine çalışıyorken, herhangi bir elektrik kesintisi durumunda ya da program
#   henüz tamamlanmadan makinenin enerjisinin kesilmesi durumunda, kapı kilitli kalacaktır." + 1) fişi çek 2) pompa filtresi talimatıyla pis su boşaltma
#   3) "Acil durumda açma düzenini bir alet ile aşağı doğru çekiniz ve aynı anda kapıyı açınız." 4) yeniden kapatılırsa kilitli kalır. (A ve C'de bu bölüm yok)
# Servis: A s.5 "Herhangi bir arıza durumunda, öncelikle cihazın fişini prizden çıkarın ve musluğu kapatın. Kendiniz tamir etmeye çalışmayın ve danışma hattını arayınız."
# ALET KURALI: acil açma düzeni "bir alet ile" çekiliyor ve pompa kapağı plastik plakayla açılıyor → numaralı adımlara ve steps'e GİRMEDİ; gövdede numarasız, servise yönlendirmeli anıldı.
# BİLEREK YAZILMAYANLAR: kapı kilidi (kilit mekanizması) arızası teşhisi (belgede yok) · Başlat/Beklet ile beklemede kapının açılıp açılmadığı (belgede yazmıyor)
#   · acil açma düzeninin yeri ve kullanımı (alet gerekiyor, #31) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-camasir-makinesi-kapak-acilmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Havlu"]
steps:
  - "Program bittiyse göstergede End yazısının çıkmasını bekle."
  - "End'den sonra kapağı açmadan önce 2 dakika bekle."
  - "Kapağı hiçbir zaman zorlayarak açmaya çalışma."
  - "Göstergede CL yanıyorsa çocuk kilidini aynı iki tuşa 3 saniyeden uzun basarak kapat."
  - "Program sürüyorsa program düğmesini İPTAL konumuna getir."
  - "Suyu boşaltmak için program düğmesini herhangi bir programa getir ve boşaltmanın bitmesini bekle."
  - "Boşaltma bittikten sonra 2 dakika bekleyip kapağı aç."
faq:
  - q: "Vestel çamaşır makinesinin kapağı program bitince neden hemen açılmıyor?"
    a: "Vestel'in kullanım kılavuzlarına göre yıkama işlemi sona erdikten 2 dakika sonra kapak açılabilir; program tablosu notu bu 2 dakikanın yıkama süresine dahil olmadığını da yazıyor. Kılavuz bazı makinelerde kapağın yıkama çevrimi biter bitmez açıldığını, özelliklerin modele göre değiştiğini belirtiyor."
  - q: "Yıkama sırasında içine bir şey koymam gerekirse ne yapmalıyım?"
    a: "Vestel'in program tablosuna göre makinenin içinde biriken suyun boşaltılması gereken durumlarda (çamaşır ekleme, çamaşır çıkarma gibi) Sıkma-Tahliye programı kullanılabilir: program düğmesi bu programa getirilir, ek fonksiyon düğmesinden sıkma iptal seçilir ve program çalışmaya başlar."
  - q: "İPTAL'e aldım ama program kaldığı yerden devam ediyor, neden?"
    a: "Göstergede CL yanıyorsa çocuk kilidi açıktır. Vestel kılavuzuna göre çocuk kilidi devredeyken program düğmesi İPTAL konumuna getirilip başka bir program seçilirse önceki program kaldığı yerden devam eder. Kilidi kapatmak için açarken basılan aynı iki tuşa 3 saniyeden uzun basılır; CL sembolü söner."
  - q: "Elektrik kesildi, kapak kilitli kaldı. Ne yapmalıyım?"
    a: "CMI 106221, KCMI 98142 ve CMI 128222 kılavuzlarına göre program bitmeden elektrik kesilirse kapı kilitli kalır. Kılavuzun acil açma talimatı pis suyun pompa filtresinden boşaltılmasını ve açma düzeninin bir aletle çekilmesini istiyor; bu iş için yetkili servise başvurmak en güvenli yoldur."
images:
  coverAlt: "Programı bitmiş bir çamaşır makinesinin kapalı kapağı ve camın ardında bekleyen ıslak çamaşırlar"
---

Program bitti, çamaşırı almak için kapağın koluna uzandın ama kapak yerinden kıpırdamıyor. Vestel'in çamaşır makinesi kullanım kılavuzlarında bunun bir açıklaması var: makine **yıkama işlemi sona erdikten 2 dakika sonra** kapağı açtırıyor ve kılavuz bu süreyi programın sonuna değil, ayrıca ekliyor. Kapak program sürerken açılmıyorsa da kılavuzun yolu belli: **çocuk kilidini kapat, programı İPTAL'e al, suyu boşalt.** Hiçbirinde kapağı zorlamak yok; Vestel bunu ayrı ayrı iki yerde yasaklıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Program bitince göstergede End yazısını gör → 2 dakika bekle → kapağı aç. Program sürüyorsa: CL yanıyorsa çocuk kilidini kapat → program düğmesini İPTAL'e getir → herhangi bir programa getir, makine suyu boşaltsın → 2 dakika bekle. Kapağı asla zorlama.

## Adım adım: evde denenecekler

**1. End yazısını bekle.** Vestel kılavuzuna göre program sona erdiğinde makine kendiliğinden durur ve elektronik göstergede **"End"** yazısı görünür.

**2. İki dakika ver.** Kılavuzun önemli bilgiler bölümüne göre yıkama işlemi sona erdikten **2 dakika sonra** kapak açılabilir. Program tablosunun notu bu sürenin **yıkama süresine dahil olmadığını** da yazıyor; yani göstergedeki süre bittiğinde kapak hemen açılmayabilir. Kılavuz bazı makinelerde kapağın yıkama çevrimi biter bitmez açıldığını, özelliklerin modele göre değiştiğini de belirtiyor.

**3. Zorlama.** Vestel aynı uyarıyı iki ayrı bölümde veriyor: makine çalışır durumdayken **kapağı açmak için zorlamayın.**

**4. CL varsa çocuk kilidini kapat.** Kılavuza göre çocuk kilidi açıkken göstergede **"CL"** sembolü yanar. Kilit açıkken program düğmesi İPTAL'e alınıp başka bir program seçilirse **önceki program kaldığı yerden devam eder.** Kilidi kapatmak için açarken basılan aynı tuşlara (kılavuzdaki modellerde göstergenin **4. ve 5. tuşları**) aynı anda **3 saniyeden uzun** bas; CL sembolü söner.

**5. Programı iptal et.** Program sürüyorsa Vestel'in sırası: program düğmesini **İPTAL** konumuna getir. Makine yıkamayı durdurur ve program iptal olur.

**6. Suyu boşalt.** Kılavuza göre makinenin içindeki suyu boşaltmak için program düğmesini **herhangi bir programa** getir; makine **gerekli boşaltma işlemini yapıp** programı iptal eder. Bu sırada kapağı açmaya çalışma.

**7. Bekle ve aç.** Boşaltma bittikten sonra kapağı açmadan önce yine **2 dakika** ver. Kapı açıldığında çamaşırı çıkar; kılavuz, içinin kuruması için kapağın açık bırakılmasını istiyor.

## Programın ortasında çamaşır eklemek ya da çıkarmak

Vestel'in program tablosunda bunun için ayrı bir yol var: **Sıkma-Tahliye** programı. Kılavuza göre makinenin içinde biriken suyun boşaltılması gereken durumlarda (çamaşır ekleme, çamaşır çıkarma gibi) program düğmesi Sıkma-Tahliye programına getirilir, **ek fonksiyon düğmesinden sıkma iptal** seçilir ve program çalışmaya başlar. Kurutmalı KCMI 98142 kılavuzunda bu programın adı **Sıkma/Tahliye.**

## Elektrik kesildiyse

CMI 106221, KCMI 98142 ve CMI 128222 kılavuzlarında ayrı bir bölüm var: makine çalışırken **elektrik kesilirse** ya da program tamamlanmadan makinenin enerjisi kesilirse **kapı kilitli kalır.** Bu kılavuzlardaki acil açma talimatı pis suyun **pompa filtresinden** boşaltılmasını ve açma düzeninin **bir aletle** çekilmesini istiyor; alet gerektiren bu işi kendin yapma, yetkili servise bırak. Kılavuz ayrıca acil açma kolu kullanıldıktan sonra kapı yeniden kapatılırsa, enerji yokken **kapının yine kilitli kalacağını** yazıyor.

Kapak açılmıyor ve ekranda bir hata kodu varsa, Vestel'in kod tablosu [Vestel çamaşır makinesi hata kodları](/blog/vestel-camasir-makinesi-hata-kodlari/) yazısında. Markadan bağımsız anlatım için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bakabilirsin. Makine sıkmaya geçmeden bekliyorsa: [Vestel çamaşır makinesi santrifüj yapmıyor](/blog/vestel-camasir-makinesi-santrifuj-yapmiyor/).

## Ne zaman servis

Göstergede End yazısı çıktı, 2 dakika geçti, CL kapalı, program İPTAL'den boşaltılarak sonlandırıldı ve kapak hâlâ açılmıyorsa Vestel'in kılavuzu kullanıcıya başka adım vermiyor. Güvenlik bölümündeki kural geçerli: herhangi bir arıza durumunda **önce fişi prizden çıkar ve musluğu kapat; kendin tamir etmeye çalışma** ve danışma hattını ara.

⛔ **Kendin-çöz sınırı burada biter.** Gösterge, program düğmesi ve bekleme süresi kullanıcıya; kapı kilidi, acil açma düzeni ve gövdenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Göstergede End yazısı çıktı mı, ardından kaç dakika beklendi?
2. Göstergede CL sembolü yanıyor muydu?
3. Program İPTAL'e alınıp su boşaltıldı mı?
4. Kazanda görünür su var mı?
5. Sorundan önce elektrik kesintisi oldu mu?

Bu beşine cevabın varsa servise "kapak açılmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
