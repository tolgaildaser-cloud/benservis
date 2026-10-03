---
title: "Arçelik kurutma makinesi çalışmıyor"
description: "Arçelik kurutma makinesi açılmıyor, program başlamıyor ya da yarıda kesiliyorsa: fiş, kapak, Başla/Bekle, çocuk kilidi ve su tankı. Arçelik kılavuzundaki sıra."
slug: "arcelik-kurutma-makinesi-calismiyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den indirildi, HTTP 200, application/pdf, yönlendirme 0.
#   Adresler 2 Eki'de yayındaki arcelik-kurutma-makinesi-kurutmuyor için kullanılan belgelerle aynı; md5 bu koşuda yeniden alındı, birebir aynı. Okuma pdftotext -layout; sayfa = PDF sayfası.
#  (A) 3886 KT / KTS / KTR  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180102154833_User%20Manual%20-%20Filetr_TR.pdf  36 s.  md5 62fe5d46146e92058583492074c9d509
#  (B) 2772 KT / KTS / KTİ  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201801031501235_User%20Manual%20-%20Filetr_TR.pdf  32 s.  md5 af5f6e8ada2c00d238838e438d29edb3
# Ana satırlar (A s.30; B s.27 aynı): "Kurutma makinesi açılmıyor veya program başlatılamıyor. Kurutma makinesi ayarlandığında devreye girmiyor." →
#   "Elektrik fişi takılmamış olabilir. >>> Elektrik fişinin takılı olduğunu kontrol edin." · "Yükleme kapağı açık kalmış olabilir. >>> Yükleme kapağının doğru bir şekilde kapandığından emin olun."
#   · "Başla / Bekle düğmesine basılmamış olabilir. >>> Programın bekle konumunda olmadığını kontrol edin." (B: "Program ayarlanmamış ya da Başla / Bekle düğmesine basılmamış olabilir. >>> Programın ayarlandığından ve Bekle konumunda olmadığından emin olun.")
#   · "Çocuk kilidi devrede olabilir. >>> Çocuk kilidini devreden çıkarın."
#   "Program nedensiz olarak yarıda kesildi." → "Yükleme kapağı tam kapanmamış olabilir. >>> Yükleme kapağını kapanma sesini duyana kadar itin." · "Elektrik kesintisi yaşanmış olabilir. >>> Programı başlatmak için
#   Başla / Bekle düğmesine basın." · "Su tankı dolu olabilir. >>> Su tankını boşaltın."
# A s.31: "Yükleme kapağı kendiliğinden açılıyor." → kapanma sesi + "Aşırı çamaşır yüklenmiş olabilir. >>> Kurutma makinesine aşırı çamaşır yüklemeyin." · "Su tankı uyarı sembolü yanıyor/yanıp sönüyor." → su tankı dolu
#   / "Ürün doğrudan su giderine bağlıysa su boşaltma hortumunu kontrol edin." · "Son sembolü yanıyor." → "Program tamamlanmıştır." · UYARI: "Bu bölümdeki talimatları uygulamanıza rağmen sorunu gideremezseniz
#   ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı asla denemeyin."
# A s.24: "Çocuk Kilidini Etkinleştirmek için: Çocuk Kilidi düğmesine 3 saniye boyunca basın." · "Çocuk Kilidi etkinleştirildiğinde ekrandaki kilit sembolü yanar." · "Çocuk Kilidi etkinken, panelde bulunan Açma/
#   Kapama/İptal ve çocuk kilidi düğmesi dışındaki tüm düğmeler devre dışı kalır." · "Program düğmesi çevrildiğinde ve fonksiyon düğmelerine basıldığında ekranda CL uyarısı görülür." · "Program devam ederken su tankı
#   dolarsa, uyarı sembolü yanıp sönmeye başlar ve kurutma makinesi beklemeye geçer. Bu durumda su tankındaki suyu boşaltın ve Başla / Bekle düğmesine basarak programı başlatın." · 5.8 "Başla/Bekle düğmesine basarak programı başlatın."
# A s.25: "Program bittikten sonra yeni bir program başlatabilmek veya programa müdahale edebilmek için çocuk kilidini devreden çıkarmak gerekir." · "Çocuk kilidi düğmesine 3 saniye boyunca basın." · "Kurutma makinesi
#   Açma/Kapama/İptal düğmesiyle kapatılıp yeniden açıldığında da çocuk kilidi devreden çıkar." · 5.12 "Program tamamlandıktan sonra çamaşırlar makineden çıkarılmazsa, 2 saat süren Kırışık Önleme programı devreye girer."
# A s.27: "Su tankını program çalışırken kesinlikle yerinden çıkarmayın!" · "Su tankını boşaltmayı unutursanız ... makine durur ve Su Tankı uyarı sembolü yanıp söner. Bu durumda su tankını boşaltın ve kurutma işlemine devam
#   etmek için Başla / Bekle düğmesine basın." · "Çekmeceyi çekerek su tankını dikkatlice çıkarın." · "Su tankındaki suyu dökün." · "Su tankını yerine yerleştirin." · "Yoğuşturulan su, içme suyu değildir!"
#   · A s.19 panel: "6. Sesli uyarı seviye düğmesi/çocuk kilidi" (çocuk kilidi bu modelde sesli uyarı düğmesiyle ortak; 3'' işareti).
# BİLEREK YAZILMAYANLAR: sigorta/priz (tabloda yok) · lamba değişimi (servis) · filtre çekmecesi sökümü (tekmelik, gövdede yok) · Beko/Grundig/Vestel kurutma makinelerine genelleme (Vestel KM 96201 tablosu bu metinle
#   neredeyse aynı; yalnız bu sayfa yazıldı) · fiyat.
# Alıntı denetim tablosu: arcelik-kurutma-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Elektrik fişinin takılı olduğunu kontrol et."
  - "Yükleme kapağını kapanma sesini duyana kadar it."
  - "Programın seçili olduğunu kontrol et ve Başla/Bekle düğmesine bas; makine Bekle konumunda kalmasın."
  - "Ekranda kilit sembolü ya da CL uyarısı varsa çocuk kilidi düğmesine 3 saniye basarak kilidi kapat."
  - "Su tankı uyarı sembolü yanıp sönüyorsa çekmeceyi çekip su tankını çıkar, suyu dök, tankı yerine tak ve Başla/Bekle'ye bas."
  - "Elektrik gidip geldiyse programı yeniden başlatmak için Başla/Bekle düğmesine bas."
faq:
  - q: "Arçelik kurutma makinemde düğmeler çalışmıyor, ekranda CL yazıyor."
    a: "Arçelik kılavuzuna göre çocuk kilidi etkinken Açma/Kapama/İptal ve çocuk kilidi düğmesi dışındaki tüm düğmeler devre dışı kalır; program düğmesi çevrildiğinde ya da fonksiyon düğmelerine basıldığında ekranda CL görünür. Kilidi kapatmak için çocuk kilidi düğmesine 3 saniye bas ya da makineyi Açma/Kapama/İptal düğmesiyle kapatıp yeniden aç."
  - q: "Kurutma makinem programın ortasında durdu."
    a: "Arçelik tablosu üç neden sayıyor: kapağın tam kapanmaması, elektrik kesintisi ve su tankının dolması. Kapağı kapanma sesini duyana kadar it; tank doluysa boşalt; sonra Başla/Bekle düğmesine basarak programı başlat."
  - q: "Program bitti ama tambur arada bir dönüyor, normal mi?"
    a: "Arçelik'e göre program tamamlandıktan sonra çamaşırlar makineden çıkarılmazsa 2 saat süren Kırışık Önleme programı devreye girer. Kırışık önleme sembolü yanıyorsa makineyi kapat ve çamaşırları çıkar."
  - q: "Su tankını program çalışırken çıkarabilir miyim?"
    a: "Hayır. Kılavuz su tankının program çalışırken kesinlikle yerinden çıkarılmamasını istiyor. Tank program sırasında dolarsa makine kendiliğinden beklemeye geçer; o zaman tankı boşaltıp Başla/Bekle ile devam ettirebilirsin."
images:
  coverAlt: "Çamaşırla dolu tamburu görünen, kapağı aralık beyaz kurutma makinesinin önünde duran sepet"
---

Islak çamaşırları tambura koydun, programı çevirdin ama kurutma makinesi ses vermiyor ya da bir süre çalışıp duruyor. Arçelik'in yoğuşmalı kurutma makinesi kılavuzunda iki ayrı satır var: **"Kurutma makinesi açılmıyor veya program başlatılamıyor."** ve **"Program nedensiz olarak yarıda kesildi."** İkisinin nedenleri de kapak, düğmeler ve su tankı etrafında dönüyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı → kapak kapanma sesiyle kapandı mı → program seçili ve Başla/Bekle'ye basıldı mı → kilit sembolü ya da CL var mı → su tankı dolu mu → elektrik gidip geldiyse Başla/Bekle'ye yeniden bas. Hepsine rağmen çalışmıyorsa → yetkili servis.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Tablodaki ilk neden: **"Elektrik fişi takılmamış olabilir."** Çözüm: **"Elektrik fişinin takılı olduğunu kontrol edin."**

**2. Kapağı sesini duyana kadar kapat.** Açılmayan makinede neden **"Yükleme kapağı açık kalmış olabilir."**; yarıda kesilen programda **"Yükleme kapağı tam kapanmamış olabilir."** Arçelik'in çözümü: **"Yükleme kapağını kapanma sesini duyana kadar itin."** Kapak kendiliğinden açılıyorsa tabloya göre bir neden de **aşırı çamaşır yüklenmesi.**

**3. Programı seç ve başlat.** Neden: **"Başla / Bekle düğmesine basılmamış olabilir."** Çözüm: **"Programın bekle konumunda olmadığını kontrol edin."** 2772 KT kılavuzu buna programın **ayarlanmamış** olmasını da ekliyor. Program seçim düğmesiyle programı seç ve **Başla/Bekle** düğmesine bas; Arçelik'e göre program başladığında Başla sembolü yanar.

**4. Çocuk kilidini kapat.** Tablodaki neden: **"Çocuk kilidi devrede olabilir."** Kilit etkinken ekranda **kilit sembolü** yanar; Açma/Kapama/İptal ve çocuk kilidi düğmesi dışındaki **tüm düğmeler devre dışı** kalır ve program düğmesini çevirdiğinde ekranda **CL** görünür. Kilidi kapatmak için çocuk kilidi düğmesine **3 saniye** bas. Arçelik'e göre makineyi Açma/Kapama/İptal düğmesiyle kapatıp yeniden açtığında da kilit devreden çıkar.

**5. Su tankını boşalt.** Yarıda kesilen programın bir nedeni **"Su tankı dolu olabilir."** Kılavuza göre tank program sırasında dolarsa uyarı sembolü yanıp söner ve makine **beklemeye geçer.** Çekmeceyi çekerek tankı dikkatlice çıkar, suyu dök (yoğuşan su **içme suyu değildir**), tankı yerine tak ve **Başla/Bekle** düğmesine bas; program kaldığı yerden devam eder. Makine doğrudan su giderine bağlıysa tablonun önerisi **su boşaltma hortumunun** katlanıp katlanmadığına bakmak.

**6. Elektrik kesintisinden sonra yeniden başlat.** Neden: **"Elektrik kesintisi yaşanmış olabilir."** Çözüm: **"Programı başlatmak için Başla / Bekle düğmesine basın."**

## Arıza sayılmayan durumlar

- **Son sembolü yanıyor:** Arçelik'e göre program tamamlanmıştır; makineyi kapat ve çamaşırları çıkar.
- **Kırışık önleme sembolü yanıyor, tambur ara ara dönüyor:** program bittikten sonra çamaşırlar çıkarılmazsa **2 saat süren Kırışık Önleme programı** devreye girer.
- **Lif filtresi ya da filtre çekmecesi sembolü yanıyor:** filtre temizlenmemiştir. Temizlik için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazısına, sembollerin tamamı için [Arçelik kurutma makinesi sembolleri ve anlamları](/blog/arcelik-kurutma-makinesi-sembolleri-ve-anlamlari/) yazısına bakabilirsin.

Makine çalışıyor ama çamaşırlar nemli çıkıyorsa: [Arçelik kurutma makinesi kurutmuyor](/blog/arcelik-kurutma-makinesi-kurutmuyor/). Ekranda hata kodu varsa: [Arçelik kurutma makinesi hata kodları](/blog/arcelik-kurutma-makinesi-hata-kodlari/).

## Ne zaman servis

- Fiş takılı, kapak kapalı, kilit kapalı ve tank boşken makine **hâlâ açılmıyor ya da program başlamıyorsa.**
- İç aydınlatma lambası yanmıyorsa (lambalı modellerde): tabloya göre lambanın değişimi için **Yetkili Servis.**

Arçelik'in uyarısı: bu bölümdeki talimatlara rağmen sorun giderilemezse ürünü satın aldığın **bayiye ya da Yetkili Servis'e** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.** Arçelik Çağrı Merkezi: **444 0 888.**

⛔ **Kendin-çöz sınırı burada biter.** Fiş, kapak, düğmeler, kilit ve su tankı kullanıcıya; kart, motor, ısıtma ve iç aksam servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
