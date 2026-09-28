---
title: "Samsung klima DF hatası: buz çözme"
description: "Samsung klimada DF arıza değil, buz çözme göstergesi: ısıtmada dış ünitedeki buz 5-12 dakikada eritilir. Neden sıcak hava gelmez, ne yapılır?"
slug: "samsung-klima-df-hatasi"
date: "2026-09-28"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF'ler pdftotext (-layout ve sayfa sayfa) + pdftoppm görüntüsüyle okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  S1) Samsung TR destek, "Samsung Klima hata kodları ve çözümleri nelerdir?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/what-are-samsung-air-conditioner-error-codes-and-solutions/  md5 da8a426aab29d0b534308ccf3ee87a15 (HTML, dinamik sayfa: md5 indirme anına ait)
#      DF satırı: "Klimanız buz çözme işlemi yaptığında görüntülenir. klima dış ısı eşanjöründeki buzu gidermek için Buz Çözme işlevini 5-12 dakika boyunca çalıştırır." | Çözüm: "Klimanız buzu çözene kadar bekleyin."
#  M1) Samsung TR kullanım kılavuzu AR9500T WindFree (AR09TSFYCWK/SK, AR12TSFYCWK/SK), 50 s., md5 5c6daf15aa6a54b37e7af4186f36708a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12TSFYCWK%2FSK&CttFileID=7963378&CDCttType=UM&VPath=UM%2F202102%2F20210203204244405%2FRAC029-02_IB_AR9500T_GEO_WIND_TR_TR-WEB_.pdf
#      s.21 "Otomatik buz çözme": "Dış sıcaklık düşük ve nem yüksek olduğunda, dış ısı eşanjöründe buz oluşarak ısıtma verimliliğini azaltabilir. Isıt modu açıkken bu koşullar karşılandığında, klima dış ısı eşanjöründeki buzu gidermek için Buz Çözme işlevini 5-12 dakika boyunca çalıştırır."
#      s.21 NOT: "Buz Çözme işlevi açıkken iç ünite ekranında (Buz Çözme) göstergesi görünür dış ünitede buhar üretilir, klima iç üniteden soğuk hava çıkmasını önlemek için hava akış kanatlarını en alt konuma getirir." / "Bu Çözme işlevi bitene kadar uzaktan kumanda ile başka işlevleri seçemezsiniz." (gösterge görselde "dF")
#      s.34 Sorun giderme "Hava akışı sıcaklığı uygun değil": "Buz Çözme işlevinin açık olup olmadığını kontrol edin (sayfa 21). Buz çözme sırasında fan durur ve sıcak hava gelmez." + filtre ve dış ünite örtü/engel maddeleri
#      s.35 "Dış üniteden duman geliyor.": "Kışın bu muhtemelen Buz Çözme işlevi açıkken dış ısı eşanjöründen gelen buhardır." / "İç ünite göstergesi yanıp sönüyorsa hata kodunu not edin. Servis sağlayıcınızla iletişime geçin ve onlara hata kodunu verin."
#      s.8 "Çalışırken klimayı devre kesiciden kapatmayın."  s.10 "Temizlik veya bakım yapmadan önce, güç kaynağını kesin ve fan durana kadar bekleyin."
#  M2) Samsung TR kullanım kılavuzu (AR09JSFSCWK/SK, AR12JSFSCWK/SK), 47 s., md5 140a45cb498831b61bf9d6035592c6bd
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12MSFSCWKXSK&CttFileID=7023832&CDCttType=UM&VPath=UM%2F201804%2F20180419115020221%2F180205_SK_GOOD_INV_A3050_IB_TR_DB68-06583A-02.pdf
#      s.17: "Buz çözme işlevi çalışırken, soğuk havanın gelmesini önlemek için iç üniteden hiç hava gelmez. Buz çözme işlevi bittiğinde, sıcak hava bir süre sonra gelir." / "Dış ünitedeki buz miktarına bağlı olarak buz çözme işlevi programı kısalabilir."
#      s.28: "Dış ünitede buhar oluşuyor." → "Yangın değildir, ancak buz çözme işlevi kışın Isıtma modunda çalışırken dış ısı eşanjöründen çıkan buhardır."
# BİLEREK YAZILMAYANLAR: DF'nin "kaç kez / ne sıklıkla" tekrarlanacağı (belgede yok); "DF uzun sürüyorsa şu parça arızalı" teşhisi (belgede yok); dış ünitedeki buzu elle/sıcak suyla eritme (belgede yok, #31 dışı); fişi çekip reset (belge çalışırken devre kesiciden kapatmayı yasaklıyor).
# Alıntı denetim tablosu: samsung-klima-df-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika (buz çözme süresi dahil)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Saat ya da telefon"]
steps:
  - "Ekranda DF göründüğünde klimanın Isıt modunda çalıştığını kontrol et."
  - "Klimayı kapatma ve devre kesiciden kesme; buz çözmenin bitmesini bekle."
  - "Buz çözme sürerken kumandadan başka işlev seçmeye çalışma."
  - "Dış üniteden çıkan buharı ve iç ünitenin üflememesini buz çözmenin parçası say."
  - "DF söndükten sonra sıcak havanın bir süre içinde gelmesini bekle."
  - "Isıtma yine yetersizse klimayı kapat, güç bağlantısını kes ve hava filtresini kontrol et."
  - "Dış ünitenin üzerinde örtü ya da önünde engel varsa kaldır."
  - "İç ünite göstergesi yanıp sönüyor ya da E ile başlayan bir kod çıkıyorsa kodu not edip Samsung yetkili servisine ilet."
faq:
  - q: "Samsung klimada DF ne demek?"
    a: "Samsung Türkiye'nin destek sayfasına göre DF, klima buz çözme işlemi yaptığında görüntülenir. Klima, dış ısı eşanjöründeki buzu gidermek için Buz Çözme işlevini 5-12 dakika boyunca çalıştırır. Samsung'un bu kod için verdiği çözüm: klimanız buzu çözene kadar bekleyin."
  - q: "DF yanarken neden sıcak hava gelmiyor?"
    a: "Samsung kılavuzuna göre buz çözme sırasında fan durur ve sıcak hava gelmez; klima soğuk hava çıkmasını önlemek için hava akış kanatlarını en alt konuma getirir. Buz çözme bittiğinde sıcak hava bir süre sonra gelir."
  - q: "Dış üniteden duman çıkıyor, yangın mı?"
    a: "Samsung kılavuzları bu durumu sorun giderme tablosunda anlatıyor: kışın bu, büyük olasılıkla Buz Çözme işlevi açıkken dış ısı eşanjöründen çıkan buhardır. Buna karşılık cihazdan yanık kokusu, garip ses ya da duman geliyorsa Samsung güç bağlantısının hemen kesilmesini ve servis merkezine başvurulmasını istiyor."
  - q: "DF neden bazen çok kısa sürüyor?"
    a: "Samsung kılavuzuna göre buz çözme programı dış ünitedeki buz miktarına ve yağmur ya da kardan kaynaklanan nemliliğe bağlı olarak kısalabilir."
  - q: "DF sırasında klimayı kapatıp açsam düzelir mi?"
    a: "DF bir arıza değil, cihazın kendi yürüttüğü bir işlemdir; Samsung'un talimatı bitene kadar beklemektir. Buz çözme sürerken kumandadan başka işlev seçilemez. Samsung ayrıca klimanın çalışırken devre kesiciden kapatılmamasını istiyor."
images:
  coverAlt: "Kışın balkonda duran klima dış ünitesi; ızgaranın çevresinden ince bir buhar yükseliyor"
---

Kış günü klimayı ısıtmaya aldın; bir süre sonra iç ünite üflemeyi kesti ve ekranda **DF** yazıyor. Bu bir arıza kodu değil. Samsung Türkiye'nin destek sayfasındaki karşılığı: **"Klimanız buz çözme işlemi yaptığında görüntülenir."** Aynı sayfaya göre klima dış ısı eşanjöründeki buzu gidermek için Buz Çözme işlevini 5-12 dakika çalıştırır; Samsung'un önerdiği çözüm de tek cümle: **"Klimanız buzu çözene kadar bekleyin."**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** DF = buz çözme. Isıt modunda, dış hava soğuk ve nemliyken dış ünitede buz oluşur; klima bunu 5-12 dakikada eritir. Bu sürede iç ünite üflemez, dış üniteden buhar çıkabilir, kumandadan başka işlev seçilemez. Bekle. Gösterge yanıp sönüyor ya da E ile başlayan bir kod çıkıyorsa kodu not et → yetkili servis.

## DF neden çıkar?

Samsung'un kullanım kılavuzu durumu şöyle anlatıyor: dış sıcaklık düşük ve nem yüksek olduğunda dış ısı eşanjöründe buz oluşur ve bu, ısıtma verimliliğini azaltabilir. Klima Isıt modundayken bu koşullar oluşunca buzu eritmek için Buz Çözme işlevini kendisi başlatır ve iç ünite ekranında buz çözme göstergesi (dF) yanar.

Yani DF, klimanın ısıtmayı sürdürebilmek için yaptığı olağan bir işlemdir. Kılavuza göre bu sırada:

- iç ünitenin fanı durur ve sıcak hava gelmez,
- hava akış kanatları, soğuk hava çıkmasın diye en alt konuma iner,
- dış ünitede buhar oluşur,
- buz çözme bitene kadar kumandadan başka işlev seçilemez.

Buz çözme bittiğinde sıcak hava bir süre sonra yeniden gelir. Kılavuza göre program, dış ünitedeki buz miktarına ya da yağmur ve kardan gelen neme bağlı olarak daha kısa da sürebilir.

## Adım adım: evde denenecekler

**1. Modu kontrol et.** Ekranda DF göründüğünde klimanın Isıt modunda çalıştığını kontrol et. Samsung buz çözmeyi Isıt modu için tarif ediyor.

**2. Kapatma, bekle.** Klimayı kapatma ve devre kesiciden kesme; buz çözmenin bitmesini bekle. Samsung'un verdiği süre 5-12 dakika. Kılavuz ayrıca klimanın çalışırken devre kesiciden kapatılmamasını istiyor.

**3. Kumandayı zorlama.** Buz çözme sürerken kumandadan başka işlev seçmeye çalışma. Kılavuza göre bu sırada başka işlev seçilemez; bu bir kumanda arızası değildir.

**4. Buharı ve sessizliği normal say.** Dış üniteden çıkan buharı ve iç ünitenin üflememesini buz çözmenin parçası say. Samsung'un sorun giderme tablosu, kışın dış üniteden gelen "duman"ın büyük olasılıkla buz çözme sırasında dış ısı eşanjöründen çıkan buhar olduğunu yazıyor.

**5. Sıcak havayı bekle.** DF söndükten sonra sıcak havanın bir süre içinde gelmesini bekle. Isıtma başlarken de kılavuza göre fan, soğuk hava üflememek için ilk 3-5 dakika çalışmayabilir.

**6. Filtreye bak.** Isıtma yine yetersizse klimayı kapat, güç bağlantısını kes ve hava filtresini kontrol et. Samsung'a göre tıkalı filtre soğutma ve ısıtma performansını düşürebilir; filtre iki haftada bir temizlenir. Temizliğin sırası [Samsung klima CF hatası](/blog/samsung-klima-cf-hatasi/) yazısında.

**7. Dış üniteyi aç.** Dış ünitenin üzerinde örtü ya da önünde engel varsa kaldır. Samsung'un sorun giderme tablosu, dış ünitenin örtülü olup olmadığının ya da engellerin yakınına takılıp takılmadığının kontrol edilmesini istiyor.

**8. Kod varsa servise ilet.** İç ünite göstergesi yanıp sönüyor ya da E ile başlayan bir kod çıkıyorsa kodu not edip Samsung yetkili servisine ilet. Kılavuzun talimatı hata kodunu not edip servis sağlayıcısına vermektir.

## Ne zaman servis?

DF'nin kendisi servis gerektirmez; beklemek yeterlidir. Şu durumlar ise buz çözmenin dışına çıkar:

| Durum | Ne yapmalı |
|---|---|
| DF yanıyor, iç ünite üflemiyor, dış üniteden buhar çıkıyor | Normal buz çözme; 5-12 dakika bekle |
| DF bitti ama ısıtma hâlâ yetersiz | Filtre, kapı-pencere ve dış ünite önündeki engelleri kontrol et |
| İç ünite göstergesi yanıp sönüyor ya da E ile başlayan kod var | Kodu not et, Samsung yetkili servisine ilet |
| Cihazdan yanık kokusu, garip ses ya da duman geliyor | Samsung'un talimatı: güç bağlantısını hemen kes, servis merkezine başvur |

⛔ Dış ünitedeki buzu kendin eritmeye, kazımaya ya da ünitenin kapağını açmaya çalışma. Kılavuz iç ve dış ünitenin içinin temizliğini ve soğutucu akışkan borularının kontrolünü kalifiye teknisyen işi olarak sayıyor.

E ile başlayan kodların Samsung Türkiye tablosu [Samsung klima hata kodları](/blog/samsung-klima-hata-kodlari/) yazısında. Isıtmada sıcak hava gelmemesinin diğer sebepleri için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısına bakabilirsin.

---

**Kaynak künyesi.** DF tanımı Samsung Türkiye'nin "Samsung Klima hata kodları ve çözümleri nelerdir?" destek sayfasından; buz çözme sırasındaki davranış ve sorun giderme maddeleri Samsung'un Türkçe kullanım kılavuzlarından (AR9500T WindFree ve AR09/12JSFSCWK serisi) alınmıştır. Samsung, kodların modele göre değişebileceğini belirtiyor; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
