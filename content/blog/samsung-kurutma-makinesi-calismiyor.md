---
title: "Samsung kurutma makinesi çalışmıyor"
description: "Samsung kurutma makinesi başlamıyorsa kılavuzun sırası: fiş ve sigorta, kapak, Başlat'a basılı tutma, Çocuk Kilidi, su tankı ve tiftik filtresi."
slug: "samsung-kurutma-makinesi-calismiyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, Haier/Samsung koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com · www.samsung.com/tr) indirildi, HTTP 200.
# #88: web araması yalnız destek sayfalarının yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-3eki/ (MD5.txt) · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  S) Kılavuz ısı pompalı kurutucu "SimpleUX" DC68-04268H-03 (AH) TR (DV90T5240AW/AH), 60 s., md5 7d07cd0444389e478b7625ea26e2134a
#     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90T5240AW&CttFileID=8770643&CDCttType=UM&VPath=UM%2F202209%2F20220917120549513%2FU-PJT_DRYER_SimpleUX_DC68-04268H-03_AH_TR.pdf
#  D) Kılavuz DV5000T DC68-04209V-02 TR (DV90TA040AE/AH), 68 s., md5 af744046e6c457b037ef2e270349d072
#     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90TA040AE&CttFileID=8770640&CDCttType=UM&VPath=UM%2F202209%2F20220917120230960%2FDV5000T_DC68-04209V-02_TR.pdf
#  K2) Samsung TR "Kurutma Makinesi Hakkında SSS"  https://www.samsung.com/tr/home-appliances/faq-dryer/  md5 a567d6a742153db5bd32ea6a4c1c8ec2 (dinamik HTML; md5 bu indirmenin)
# Belirti satırları:
#   S s.48 "Kurutucu başlamıyor." → "Kurutucunun prize takılı olduğundan emin olun." · "Kapağın düzgün bir şekilde kapatıldığından emin olun." · "Sigortayı kontrol edin veya devre kesiciyi sıfırlayın."
#     · "Bir program sırasında kapağı açarsanız, üzerine tekrar dokunun ve basılı tutun." · "Filtreyi temizleyin." · "Çocuk Kilidi öğesinin etkin olmadığından emin olun."
#   D s.50 "Kurutma makinesi çalışmıyor" → "Kapağın tamamen kapatıldığından emin olun." · "Güç kablosunun fişinin takılı olduğundan emin olun." · "Evin şalter ve sigortalarını kontrol edin."
#     · "Su tankını boşaltın." · "Tiftik filtresini temizleyin."
# Bilgi kodları: S s.50 "Kapak açik" (kapağı kapat, yeniden başla; Çocuk Kilidi açıksa kapağı açınca da çıkabilir) · "Kapagi açin ve içini kontrol edin (Çocuk Kilidi açik)"
#   · "Filtreyi kontrol edin" (tiftik filtresi tertibatı) · "Isi esanjörü kapagini kontrol edin" · "Bosaltmayi kontrol et/Tanki bosaltin" · D s.52 dC (kapak açık çalışıyor), 5C (su tankı dolu)
# Diğer: S s.28 Başlat/Duraklat "Bir işlemi başlatmak veya duraklatma için dokunun ve basılı tutun." · D s.39 "Başlat/Duraklat (Başlamak için Basılı Tutunuz)"
#   · S s.35 Çocuk Kilidi (kapak kapalıyken menüden; kapak açıkken açılamaz, "Kapak açik") · D s.43 Çocuk Kilidi (iki düğme 3 sn; kapatıp açınca etkin kalır) · K2 Çocuk Kilidi (güç hariç tüm düğmeler devre dışı; kilit simgesi; modele göre değişen 3 sn tuş ikilileri)
#   · S s.26 "Kurutucu, tiftik filtresi olmadan çalışmaz." · S s.43 "Tanki bosaltin" + uzun dokun · D s.47 tank + Başlat'a basılı tut, gösterge söner · S s.44-46 tiftik filtresi
#   · S s.49 "Sorun devam ederse, yerel bir Samsung servis merkezine başvurun."
# BİLEREK YAZILMAYANLAR: sigorta değiştirme / elektrik panosu müdahalesi (yalnız "kontrol et / devre kesiciyi sıfırla") · kompresör/sensör/kart kodlarının (tC5, tCA, 3C, 3CA, AC6, HC) kullanıcı adımı
#   · Çocuk Kilidi tuş ikilisinin senin modelinde hangisi olduğu (modele göre değişiyor; kılavuza yönlendirildi) · başka modellere genelleme.
# Alıntı denetim tablosu: samsung-kurutma-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makineyle gelen temizleme fırçası"]
steps:
  - "Kurutucunun fişinin prize takılı olduğunu kontrol et."
  - "Evin sigortasını kontrol et ya da atmış devre kesiciyi sıfırla."
  - "Kapağın düzgün ve tamamen kapandığından emin ol."
  - "Programı başlatmak için Başlat/Duraklat düğmesine dokunup basılı tut."
  - "Ekranda kilit simgesi varsa Çocuk Kilidi'ni kılavuzundaki tuşlarla kapat."
  - "Su tankını iki elinle çıkar, boşalt ve yerine tak."
  - "Tiftik filtresini çıkar, temizle ve kuruyken yerine düzgün tak."
faq:
  - q: "Samsung kurutma makinesi neden çalışmıyor?"
    a: "Samsung'un iki Türkçe kılavuzundaki 'başlamıyor' ve 'çalışmıyor' satırları aynı kontrolleri sayıyor: fişin takılı olması, kapağın tam kapanması, evin sigortası ya da devre kesicisi, tiftik filtresinin temizliği ve Çocuk Kilidi. DV5000T kılavuzu bunlara su tankının boşaltılmasını ekliyor. Program sırasında kapağı açtıysan Samsung Başlat düğmesine yeniden dokunup basılı tutmanı istiyor."
  - q: "Düğmelere basıyorum ama hiçbir şey olmuyor. Neden?"
    a: "Çocuk Kilidi açık olabilir. Samsung Türkiye'nin SSS sayfasına göre Çocuk Kilidi etkinken güç düğmesi dışındaki tüm düğmeler devre dışı kalır ve ekranda bir kilit simgesi görünür. Açıp kapatma yöntemi modele göre değişiyor (çoğunlukla iki düğmeyi birlikte 3 saniye basılı tutmak); DV5000T kılavuzuna göre makineyi kapatıp açmak Çocuk Kilidi'ni kaldırmaz."
  - q: "Ekranda 'Kapak açik' yazıyor ama kapak kapalı. Ne yapmalıyım?"
    a: "Samsung'un bilgi kodu tablosu önce kapağı kapatıp yeniden başlamanı istiyor. Aynı tablo, Çocuk Kilidi açıksa kurutucu çalışmıyor olsa bile kapağı açtığında bu mesajı alabileceğini yazıyor. Kapak açıkken Çocuk Kilidi'ni de kapatamazsın; önce kapağı kapat. Mesaj sürerse Samsung servisini ara."
  - q: "Tiftik filtresi olmadan çalışır mı?"
    a: "Hayır. Samsung'un kılavuzu açık: kurutucu tiftik filtresi olmadan çalışmaz. Ekranda 'Filtreyi kontrol edin' görürsen tiftik filtresinin yerine düzgün takıldığını kontrol et; mesaj sürerse servisi ara."
images:
  coverAlt: "Ekranı kapalı ön yüklemeli kurutma makinesi; kapak kapalı, önünde yere bırakılmış çıkarılmış su tankı ve kontrol panelini işaret eden bir el"
---

Kurutucuyu çalıştırmak istiyorsun ama düğmeye bastığında hiçbir şey olmuyor, ya da program başlıyor gibi yapıp duruyor. Samsung'un ısı pompalı kurutucular için Türkçe kılavuzunda bu durumun satırı **"Kurutucu başlamıyor."**, DV5000T kılavuzunda **"Kurutma makinesi çalışmıyor"**. İki satır neredeyse aynı kontrolleri sayıyor ve çoğu, bir servis çağırmadan önce evde iki dakikada bakılabilecek şeyler. Bir madde ise gözden kaçıyor: Samsung'un kurutucularında programı başlatmak için düğmeye **dokunup basılı tutmak** gerekiyor. Aşağıdaki sıra bu iki satırı ve kılavuzların ilgili bölümlerini izliyor. Kaynak DV90T5240AW ve DV5000T (DV90TA040AE) kılavuzları; tuş ve mesaj adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı → sigorta ya da devre kesici → kapak tam kapalı mı → Başlat'a **basılı tut** → kilit simgesi varsa Çocuk Kilidi'ni kapat → su tankını boşalt → tiftik filtresini temizleyip düzgün tak. Ekranda bir mesaj ya da kod varsa önce aşağıdaki tabloya bak.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** İki kılavuzun da ilk maddesi: kurutucunun **prize takılı** olduğundan emin ol.

**2. Sigortaya bak.** Samsung **sigortayı kontrol etmeni ya da devre kesiciyi sıfırlamanı** istiyor; DV5000T kılavuzu bunu "evin şalter ve sigortaları" diye yazıyor.

**3. Kapağı tam kapat.** Samsung kapağın **düzgün ve tamamen** kapandığından emin olmanı istiyor. Ekranda **"Kapak açik"** (DV5000T'de **dC**) görürsen kılavuzun talimatı: kapağı kapat ve yeniden başlat.

**4. Başlat'a basılı tut.** Samsung'un kurutucularında Başlat/Duraklat düğmesine kısa basmak yetmeyebilir: kılavuza göre bir işlemi başlatmak için düğmeye **dokunup basılı tutman** gerekiyor; DV5000T'de düğmenin adı bile "Başlat/Duraklat (Başlamak için Basılı Tutunuz)". Program sırasında kapağı açtıysan Samsung'un talimatı: kapağı kapat ve düğmeye **tekrar dokunup basılı tut.**

**5. Çocuk Kilidi'ni kapat.** Samsung Türkiye'nin SSS sayfasına göre Çocuk Kilidi etkinken **güç düğmesi dışındaki tüm düğmeler** devre dışı kalır ve ekranda bir **kilit simgesi** görünür. Kapatma yöntemi modele göre değişir: DV90T5240AW'de menüden (kapak kapalıyken), DV5000T'de iki düğmeyi birlikte **3 saniye** basılı tutarak. Kapak açıkken Çocuk Kilidi kapatılamaz; önce kapağı kapat. DV5000T kılavuzuna göre makineyi kapatıp açmak kilidi kaldırmaz.

**6. Su tankını boşalt.** DV5000T kılavuzunun "çalışmıyor" satırındaki maddelerden biri: **su tankını boşalt.** Tankı **iki elinle** çıkar, suyu boşaltma deliğinden boşalt ve yerine yerleştir; dolu tank ağırdır. Kurutucu "Tanki bosaltin" mesajıyla durduysa tankı boşaltıp Başlat düğmesine **uzun dokun**; kılavuza göre mesaj kaybolur ve kurutma devam eder.

**7. Tiftik filtresini temizle ve düzgün tak.** İki satırda da var: **filtreyi temizle.** Samsung'un bir notu bu satırın sebebini açıklıyor: **kurutucu tiftik filtresi olmadan çalışmaz.** Filtreyi yukarı çekerek çıkar, iç ve dış filtredeki tiftiği al, fırçayla temizle. Suyla yıkadıysan tamamen kurumasını bekle; iç filtreyi dış filtrenin içine koyup yerine **düzgün** tak.

## Ekranda bir mesaj varsa

| Mesaj / kod | Samsung'a göre anlamı | Kullanıcının yapacağı |
|---|---|---|
| Kapak açik / dC (DV5000T) | Kapak açıkken kurutucu çalıştırılmak isteniyor | Kapağı kapat, yeniden başlat; sürerse servis. Çocuk Kilidi açıksa kapağı açınca da çıkabilir |
| Kapagi açin ve içini kontrol edin (Çocuk Kilidi açik) | Çocuk Kilidi açıkken kapak açılıp kapandı | Çocuk Kilidi'ni ya da gücü kapat |
| Filtreyi kontrol edin | Tiftik filtresi sorunu | Tiftik filtresinin takılı olduğunu kontrol et; sürerse servis |
| Isi esanjörü kapagini kontrol edin | Isı eşanjörü iç kapağı sorunu | Dahili ısı eşanjörü kapak tertibatını kontrol et; sürerse servis |
| Tanki bosaltin / 5C (DV5000T) | Su tankı dolu ya da boşaltma sorunu | Tankı boşalt, gücü açıp yeniden başlat; sürerse servis |

Isı eşanjörü kapağının nasıl açılıp kilitlendiği ve tank, filtre bakımının ayrıntısı [Samsung kurutma makinesi kurutmuyor](/blog/samsung-kurutma-makinesi-kurutmuyor/) yazısında. Tank uyarısının markadan bağımsız anlatımı için [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/) yazısına bakabilirsin.

## Ne zaman servis

Fiş, sigorta kontrolü, kapak, Çocuk Kilidi, su tankı ve tiftik filtresi kullanıcıya aittir. Bunlardan sonra kurutucu hâlâ başlamıyorsa Samsung'un kılavuzu açık: **sorun devam ederse yerel bir Samsung servis merkezine başvur.** Kompresör, sensör, motor ve kart kodlarında (tC5, tCA, 3C, 3CA, AC6) Samsung'un verdiği kullanıcı adımı yalnız birkaç dakika beklemek, gücü yeniden açmak ya da programı yeniden başlatmak; kod sürerse servis. **HC** için tek talimat: servisi ara.

⛔ **Kendin-çöz sınırı burada biter.** Sigortayı kontrol etmek ve atmış devre kesiciyi kaldırmak dışında elektrik tesisatına müdahale etmek, kurutucunun panellerini açmak ya da parça sökmek kullanıcı işi değildir.

## Servisi aramadan önce iki dakikalık özet

- Ekran hiç yanıyor mu, yanıyorsa hangi mesaj ya da kod var?
- Ekranda kilit simgesi görünüyor mu?
- Başlat düğmesine kısa mı bastın, basılı mı tuttun?
- Su tankı ve tiftik filtresi en son ne zaman temizlendi?
- Evin sigortası ya da devre kesicisi attı mı?

Bu sorulara cevabın varsa servise "çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
