---
title: "Samsung fırın ısınmıyor: evde kontrol"
description: "Samsung ankastre fırın ısıtmıyorsa Samsung'un tablosundaki sıra: kapak, ayarlar, sigorta, kilit, bölücü, C kodlarında güç sıfırlama ve servis."
slug: "samsung-firin-isinmiyor"
date: "2026-10-01"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-01, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200. Kılavuz bağlantıları samsung.com/tr/support/model/<model>/TR/ sayfalarından alındı. PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu (sayfa no = PDF sayfası).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  S1) Samsung TR kılavuz NV7B4420ZAK (Bespoke AI Fırın İkili Pişirme 76L), 64 s., md5 776e6d02867f930dbda6362c94ea2db8
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=NV7B4420ZAK&CttFileID=10050757&CDCttType=UM&VPath=UM%2F202501%2F20250124222105993%2FO_DG68_01413G_03_IB_FULL_NV7B4420ZAK_TR_250113.pdf
#      s.51 "Fırın ısınmıyor." → "Kapak açıksa" → "Kapağı kapatın ve yeniden çalıştırın." / "Fırın kontrolleri doğru ayarlanmamışsa" → "Fırının çalıştırılması bölümüne bakın ve fırını yeniden ayarlayın." / "Evdeki sigorta patlamış veya devre kesici açmışsa." → "Sigortayı değiştirin veya devreyi sıfırlayın. Art arda tekrarlanması halinde elektrikçi çağırın."
#      s.50 "Fırın çalışmıyor." → "Güç yok" → "Güç olup olmadığını kontrol edin." / "Fırın çalışırken duruyor." → "Elektrik prizine bağlı değildir" → "Gücü tekrar bağlayın."
#      s.50 "Düğmelere gereken şekilde basılamıyor." → "Düğmeler arasında yabancı madde var" → "Yabancı maddeyi çıkarın ve tekrar deneyin." / "Dokunmatik model: Dış kısımda nem var" → "Nemi giderin ve tekrar deneyin." / "Kilit fonksiyonu ayarlanmış" → "Kilit fonksiyonunun ayarlanmış olup olmadığını kontrol edin."
#      s.50 "Fırın çalışırken kapanıyor." → "Uzun süreli pişirme sonrasında fırını soğumaya bırakın." / "Soğutma fanının sesini dinleyin." / "Ürün kurulum kılavuzunda belirtilen boşlukları bırakın." / "Aynı prizde birden fazla fiş kullanılıyor" → "Tek fiş kullanın."
#      s.52 "İkili pişirme modu çalışmıyor." → "Bölücüyü doğru şekilde takın ve kullanın." / "Tekli pişirme modu çalışmıyor." → "Bölücü fırına takılmışsa." → "Bölücüyü çıkarın ve kullanın."
#      s.52 Bilgi kodları: C-d1 "Kapak kilidi arızası"; C-20/C-21/C-22/C-23 "Sensör arızası" → "Fırını kapatın ve yeniden çalıştırın. Sorun devam ederse gücü en az 30 saniye kapatın ve tekrar açın. Sorun ortadan kalkmazsa lütfen servis merkezi ile iletişim kurun."
#      s.11 "Fırın çalışırken kapak açıldığında fırının lambası yanar ve fan ve ısıtma elemanları çalışmayı durdurur." / "Böyle bir durumda kapağı kapatın; sistem arızası söz konusu olmadığından fırın çalışmaya devam eder."
#      s.50 "Sorun devam ederse yerel Samsung servis merkezi ile iletişim kurun."
#  S2) Samsung TR kılavuz NV75R7647RS (İkili Pişirme Özellikli Elektrikli Fırın 75L), 60 s., md5 490e1295d41df2ad78feebc5da52ddf7
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=NV75R7647RS&CttFileID=8939495&CDCttType=UM&VPath=UM%2F202212%2F20221229143240044%2FFULL_NV75R7647RS_TR_DG68-01056L-04_TR.pdf
#      s.48 "Fırın ısınmıyor." → "Kapağı kapatın ve yeniden başlatın." / "Fırını çalıştırma ve fırını sıfırlama hakkındaki bölüme bakın." / "Sigortayı değiştirin veya devreyi sıfırlayın. Bu durum sürekli meydana gelirse bir elektrik teknisyeni çağırın."
#      s.49 C-20/C-21/C-22 "Sensör arızaları." → "... 30 saniye veya daha uzun süre tüm gücü kapatın ve sonra yeniden bağlayın. Sorun onarılmazsa lütfen bir servis merkezine başvurun." / "Çift pişirme modu çalışmıyor." → "Bölücüyü düzgün şekilde takın ve kullanın."
# BİLEREK YAZILMAYANLAR: sigorta değiştirme (kılavuzda geçiyor; #31 elektrik müdahalesi → yalnız devre kesiciyi sıfırlama); topraklama kontrolü (elektrikçi işi); sensör/PCB/kapak kilidi arızasına kullanıcı müdahalesi; lamba değişimi (kılavuz bıçak gibi sert araç diyor → ALET KURALI).
# Alıntı denetim tablosu: samsung-firin-isinmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Fırının kapağını tam kapat ve fırını yeniden çalıştır."
  - "Pişirme modunu ve sıcaklığı kılavuzundaki fırını çalıştırma bölümüne göre yeniden ayarla."
  - "Düğmeler tepki vermiyorsa kilit fonksiyonunun açık olup olmadığını kontrol et; dokunmatik panelde nem ya da düğmeler arasında yabancı madde varsa temizleyip yeniden dene."
  - "İkili pişirme özellikli modelde bölücüyü kontrol et: ikili modda doğru takılı olmalı, tekli modda fırından çıkarılmış olmalı."
  - "Güç geldiğini kontrol et; fırın prize bağlıysa fişin takılı olduğuna, aynı prizde başka fiş olmadığına bak."
  - "Evdeki devre kesici atmışsa bir kez sıfırla; art arda atıyorsa elektrikçi çağır."
  - "Ekranda C-20, C-21 ya da C-22 gibi bir bilgi kodu varsa fırını kapatıp yeniden çalıştır; sürerse gücü en az 30 saniye kesip yeniden ver."
  - "Kod geri geliyorsa ya da fırın yine ısınmıyorsa kodu ve model numarasını not edip Samsung servis merkezine başvur."
faq:
  - q: "Samsung fırınım ısınmıyor, ilk neye bakmalıyım?"
    a: "Samsung'un tablosundaki ilk neden kapağın açık olması: kapağı kapatıp fırını yeniden çalıştırmanı istiyor. Samsung'a göre fırın çalışırken kapak açıldığında lamba yanar, fan ve ısıtma elemanları durur; kapak kapanınca fırın çalışmaya devam eder. İkinci neden kontrollerin doğru ayarlanmamış olması; kılavuzdaki fırını çalıştırma bölümüne göre yeniden ayarlaman gerekiyor."
  - q: "İkili pişirme modunda fırın ısıtmıyor, neden?"
    a: "Samsung'un NV7B4420ZAK ve NV75R7647RS kılavuzlarına göre ikili pişirme modu bölücü doğru takılmadığında çalışmaz; bölücüyü doğru şekilde takman gerekir. Tersi de geçerli: bölücü fırına takılıyken tekli pişirme modu çalışmaz, bölücüyü çıkarman gerekir."
  - q: "Ekranda C-21 yazıyor, ne yapmalıyım?"
    a: "Samsung kılavuzunda C-20, C-21 ve C-22 sensör arızası olarak geçiyor. Önerilen sıra: fırını kapatıp yeniden çalıştır; sorun sürerse gücü en az 30 saniye kapatıp yeniden aç; yine geçmezse servis merkeziyle iletişim kur. C-d1 ise kapak kilidi arızası olarak listeleniyor."
  - q: "Sigorta attı, tekrar kaldırdım ama yine atıyor."
    a: "Samsung'un tablosu sigorta ya da devre kesici atmışsa devreyi sıfırlamanı, bu durum art arda tekrarlanıyorsa elektrikçi çağırmanı söylüyor. Kesiciyi defalarca kaldırmaya devam etme."
images:
  coverAlt: "Ortasına yatay bölücü takılmış iki bölmeli ankastre fırının kapağı aralık, iç lambası yanıyor"
---

Fırını ayarladın, lamba yanıyor ama içerisi ısınmıyor. Samsung'un Türkçe ankastre fırın kılavuzlarındaki sorun giderme tablosunda bu belirti **"Fırın ısınmıyor."** diye geçiyor ve üç neden sayılıyor: **kapak açık, fırın kontrolleri doğru ayarlanmamış, evdeki sigorta ya da devre kesici atmış.** Samsung'un ikili pişirme özellikli modellerinde bir neden daha var: **bölücü.** Bu yazıda Samsung'un NV7B4420ZAK ve NV75R7647RS kılavuzlarındaki tabloları ve bilgi kodlarını birlikte okuyoruz; menü ve tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapağı kapat, fırını yeniden başlat. Modu ve sıcaklığı yeniden ayarla. Düğmeler tepkisizse kilit fonksiyonuna bak. İkili pişirmede bölücü takılı, tekli pişirmede çıkarılmış olmalı. Devre kesici atmışsa bir kez sıfırla. Ekranda C ile başlayan bir kod varsa kapat-aç, sonra en az 30 saniye güç kes. Kod geri geliyorsa → Samsung servis merkezi.

## Samsung'un tablosunda ısıtmayla ilgili satırlar

| Samsung'un satırı | Neden | Evde yapılacak |
|---|---|---|
| Fırın ısınmıyor | Kapak açık | Kapağı kapat, yeniden çalıştır |
| Fırın ısınmıyor | Fırın kontrolleri doğru ayarlanmamış | Çalıştırma bölümüne göre yeniden ayarla |
| Fırın ısınmıyor | Sigorta ya da devre kesici atmış | Devreyi sıfırla; tekrarlarsa elektrikçi |
| Fırın çalışmıyor / Fırında güç yok | Güç yok | Güç olup olmadığını kontrol et |
| Düğmelere gereken şekilde basılamıyor | Kilit fonksiyonu, nem ya da yabancı madde | Kilidi kontrol et, nemi ve kiri gider |
| İkili pişirme modu çalışmıyor | Bölücü doğru takılmamış | Bölücüyü doğru tak |
| Tekli pişirme modu çalışmıyor | Bölücü fırına takılı | Bölücüyü çıkar |

## Adım adım: evde denenecekler

**1. Kapağı kapat.** Fırının kapağını tam kapat ve fırını yeniden çalıştır. Samsung'un "akıllı güvenlik mekanizması" açıklamasına göre fırın çalışırken kapak açıldığında **lamba yanar, fan ve ısıtma elemanları çalışmayı durdurur;** kapak kapandığında fırın çalışmaya devam eder.

**2. Ayarları yenile.** Pişirme modunu ve sıcaklığı kılavuzundaki fırını çalıştırma bölümüne göre yeniden ayarla. Tablodaki ikinci neden **fırın kontrollerinin doğru ayarlanmamış olması.**

**3. Kilit, nem, kir.** Düğmeler tepki vermiyorsa kilit fonksiyonunun açık olup olmadığını kontrol et; dokunmatik panelde nem ya da düğmeler arasında yabancı madde varsa temizleyip yeniden dene. Samsung'un tablosu düğmelere basılamamasının bu üç nedenini ayrı ayrı sayıyor.

**4. Bölücü.** İkili pişirme özellikli modelde bölücüyü kontrol et: ikili modda doğru takılı olmalı, tekli modda fırından çıkarılmış olmalı. Samsung'un tablosuna göre bölücü doğru takılmadığında **ikili pişirme modu,** bölücü takılıyken de **tekli pişirme modu** çalışmıyor.

**5. Güç ve priz.** Güç geldiğini kontrol et; fırın prize bağlıysa fişin takılı olduğuna, aynı prizde başka fiş olmadığına bak. Samsung'un tablosu fırın çalışırken duruyorsa elektrik prizine bağlı olmayabileceğini, fırın çalışırken kapanıyorsa aynı prizde birden fazla fiş kullanılmamasını ve **tek fiş** kullanılmasını söylüyor.

**6. Devre kesici.** Evdeki devre kesici atmışsa bir kez sıfırla; art arda atıyorsa elektrikçi çağır. Samsung'un kuralı: devreyi sıfırla, **art arda tekrarlanması halinde elektrikçi çağır.**

**7. Bilgi kodu varsa güç sıfırlaması.** Ekranda C-20, C-21 ya da C-22 gibi bir bilgi kodu varsa fırını kapatıp yeniden çalıştır; sürerse gücü en az 30 saniye kesip yeniden ver. Samsung bu kodları **sensör arızası** olarak listeliyor ve sırayı böyle veriyor.

**8. Sürerse servis.** Kod geri geliyorsa ya da fırın yine ısınmıyorsa kodu ve model numarasını not edip Samsung servis merkezine başvur.

## Arıza olmayan iki durum

- **Pişirme bitti, soğutma fanı hâlâ çalışıyor.** Samsung'a göre fan, fırının iç havalandırması için bir süre otomatik çalışır; bu ürün arızası değildir.
- **Uzun pişirmeden sonra fırın kendini kapattı.** Samsung'un tablosu uzun süreli pişirmeden sonra fırını soğumaya bırakmanı, soğutma fanının sesini dinlemeni ve fırının kurulum kılavuzunda belirtilen boşluklarla havalandırılan bir yere kurulmuş olmasını istiyor.

## Ne zaman servis?

Samsung kılavuzu tablonun başında sınırı koyuyor: önerileri denedikten sonra **sorun devam ederse yerel Samsung servis merkezi ile iletişim kur.** Bilgi kodlarında da sıra aynı: kapat-aç, en az 30 saniye güç kes, geçmezse servis.

| Durum | Kimin işi |
|---|---|
| Kapak, ayarlar, kilit, bölücü, priz | Senin, bu rehberdeki adımlar |
| Atmış devre kesiciyi bir kez sıfırlama | Senin |
| Devre kesici art arda atıyor | Elektrikçi |
| C-20/C-21/C-22 güç sıfırlamasından sonra geri geliyor, C-d1 kapak kilidi | Samsung servis merkezi |
| Her şey doğru ama fırın ısınmıyor | Samsung servis merkezi |

⛔ Sigortayı değiştirmeye, fırının arka panelini açmaya ya da kabloya, prize müdahale etmeye çalışma.

Fırın ısınıyor ama yemeği eşit pişirmiyorsa [fırın eşit pişirmiyor](/blog/firin-esit-pisirmiyor/) yazısına bakabilirsin. Markadan bağımsız anlatım için [fırın ısınmıyor](/blog/firin-isinmiyor/) sayfası var.

---

**Kaynak künyesi.** Sorun giderme adımları ve bilgi kodları Samsung'un Türkçe kullanım kılavuzlarından (NV7B4420ZAK ve NV75R7647RS) alınmıştır; kılavuzlar Samsung Türkiye'nin model destek sayfalarından indirilmiştir. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
