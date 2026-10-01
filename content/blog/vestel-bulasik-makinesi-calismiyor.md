---
title: "Vestel bulaşık makinesi çalışmıyor"
description: "Vestel bulaşık makinesinde program başlamıyorsa Vestel'in sırası: elektrik, fiş, Açma/Kapama, kapı, su musluğu, filtreler, Başlat/Beklet ve servis."
slug: "vestel-bulasik-makinesi-calismiyor"
date: "2026-10-01"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, 1 Eki belirti damarı). Üç belge bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200; md5'ler 27 Eyl yerel kopyalarıyla (blog-taslaklar/kaynak-vestel-sprint/) 3/3 birebir.
# Web araması KULLANILMADI: adresler yayındaki vestel-bulasik-makinesi-* provenanslarından. pdftotext -layout -f N -l N; sayfa = PDF sayfası (basılı sayfa numarası dört eksik: B1 s.45 = basılı 41).
#  B1) BM 10502 X GI WIFI   https://statik.vestel.com.tr/webfiles/20263192_k.pdf  56 s.  md5 bdbd31789107cc96048ad674595fd6ff  (sayfa atıfları bu belgeye göre)
#  B2) BM 8402 GI Pro WIFI  https://statik.vestel.com.tr/webfiles/20264050_k.pdf  61 s.  md5 dd6a67c9fefe3c49867c92fa7e66e410  ("Program başlamıyor" satırı s.46, birebir aynı)
#  B3) BM-401               https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf  46 s.  md5 ebe98e45d57fc21fc293e5c88ab47b8e  ("Program başlamıyor" satırı s.36, birebir aynı)
# B1 s.45 "Sorun Giderme": "Cihazınızda normal olmayan bir durum tespit ettiğinizde aşağıdaki açıklamalar doğrultusunda sorunu çözmeye çalışabilirsiniz. Cihazınız hala normal çalışmasına devam etmiyorsa İletişim Merkezi ile irtibata geçiniz. Yetkili servis listesine ve iletişim bilgilerine web sitesinden ulaşabilirsiniz."
#   "Program başlamıyor." → "Elektrik kesintisi. / Elektriklerin gelmesini bekleyin." · "Açma / kapama düğmesi açık değil. / Bulaşık makinenizi açın." · "Sigorta yanmış. / Sigortanın değiştirilmesini sağlayın." · "Fiş takılı değil. / Fişi takınız." · "Makinenin kapısı açık. / Makinenin kapısını kapatınız." · "Su giriş musluğu kapalı. / Su giriş musluğunu açınız." · "Su giriş ve makine filtreleri tıkalı. / Su giriş ve makine filtrelerini temizleyiniz."
# B1 s.47: "Makine yıkama esnasında duruyor." → "Elektirikler kesilmiş. / Elektiriklerin gelmesini bekleyiniz." · "Program bekleme konumunda olabilir. / Programı bekleme konumundan çalışır konuma getiriniz." · "Su girişinde problem. / Su hortumunun tıkalı olup olmadığını kontrol ediniz tıkalı ise tıkanıklığı gideriniz."
# B1 s.36: "Açma/Kapama tuşuna basarak makineyi açın." / "Çalıştırmak istediğiniz programın tuşuna basarak uygun programı seçin." / "Başlat/ Beklet tuşuna basarak seçtiğiniz programı başlatın."
# B1 s.37: "Programı seçtikten sonra Erteleme tuşuna basarak erteleme süresini ayarlayın. Ardından, Başlat/ Beklet tuşuna basarak erteleme zamanlayıcısını başlatın. Erteleme sembolü bu süre boyunca yanar."
# B1 s.38: "Çocuk kilidini aktif etmek için Çocuk Kilidi tuşuna 3 saniye basılı tutun. ... ekranda ‘CL’ mesajı görüntülenir. Çocuk Kilidi etkinken tüm tuşlar devre dışıdır."
# B1 s.39 "Makinenin Kapatılması": "Program sonlandığında ve bitiş ışığı yandığında makinenizi Açma/Kapama tuşu ile kapatın." / "Fişi prizden çekin. Su musluğunu kapatın." / "NOT: Yıkama sırasında makinenin kapağı açılırsa veya gücü kesilirse kapak kapatıldığında ya da güç geri geldiğinde program kaldığı yerden devam eder."
# B1 s.42 Filtreler: "Filtreleri ve püskürtme kollarını en az haftada bir temizleyin." / "Filtre kombinasyonunu çıkarmak ve temizlemek için saatin aksi yönde çevirip yukarı kaldırmak suretiyle çıkarın (1). Kalın filtreyi çekerek mikro filtreden çıkarın (2). Ardından metal filtreyi çekip çıkarın (3). Filtreyi, kalıntılardan temizlenene kadar bol suyla durulayın. Filtreleri tekrar birleştirin. Filtre grubunu yerine takın ve saat yönünde (4) çevirin." / "Bulaşık makinesini asla filtresiz kullanmayın." / "Filtrenin hatalı takılması yıkama verimini azaltacaktır." / "Makinenin uygun şekilde çalışması için filtrelerin temiz olması gerekir."
# B1 s.17: "Makinenizin temizlik ve bakımına başlamadan önce mutlaka cihazın fişini prizden çekin, musluğu kapatın." / "Cihazınızı su dökerek yıkamayın."
# B1 s.8: "Fişi prizden çıkartırken mutlaka fişten tutun ve dışa doğru çekin, kablodan çekmeyin." / "Çoklu priz ve uzatma kablosu kullanmayınız."
# B1 s.50: "Olası riskleri önlemek için kurulum ve onarım prosedürleri her zaman Yetkili Servis tarafından gerçekleştirilmelidir."
# B1 s.12: "Cihazın kapısı düzgün bir şekilde kapanmıyorsa, cihazın bulunduğu zeminde dengeli olup olmadığını kontrol ediniz, değilse ayarlı ayaklarla ayar yaparak dengeli durmasını sağlayınız."
# B1 s.49 FF: "Su giriş musluğunun açık olduğundan ve suyun aktığından emin olun." / "Giriş hortumunu musluktan ayırıp hortumun filtresini temizleyin." / "Arıza devam ederse servisle iletişime geçin."
# BİLEREK YAZILMAYANLAR: sigortayı kendin değiştirme (#31; belge "değiştirilmesini sağlayın" diyor, gövdede böyle anıldı) · ayarlı ayakların ayarı (alet gerekebilir; numarasız anıldı, kılavuza yönlendirildi) · tahliye pompası temizliği (konu dışı, kesik riski uyarılı) · çocuk kilidini kapatma yöntemi (B1 yalnız açmayı anlatıyor; kapatma yazılmadı) · erteleme iptal yöntemi (B1'de yok) · F kodlarının anlamı (ayrı sayfalar yayında).
# Alıntı denetim tablosu: vestel-bulasik-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak fırça ya da sünger", "Akan su"]
steps:
  - "Evde elektrik olup olmadığına bak; kesinti varsa elektriğin gelmesini bekle."
  - "Makinenin fişinin prize takılı olduğunu kontrol et; çoklu priz ya da uzatma kablosu kullanma."
  - "Makineyi Açma/Kapama tuşuyla aç."
  - "Kapıyı tam kapat."
  - "Su giriş musluğunun açık olduğunu kontrol et."
  - "Programı seç ve Başlat/Beklet tuşuna bas."
  - "Hâlâ başlamıyorsa fişi çek, musluğu kapat ve taban filtre grubunu elle çıkarıp bol suyla durulayarak yerine tak."
  - "Makine yine başlamıyorsa Vestel İletişim Merkezi'ne ya da yetkili servise başvur."
faq:
  - q: "Vestel bulaşık makinesi program başlamıyor, ilk neye bakmalıyım?"
    a: "Vestel'in sorun giderme tablosu \"Program başlamıyor\" satırında yedi sebep sayıyor: elektrik kesintisi, açma/kapama düğmesinin açık olmaması, yanmış sigorta, takılı olmayan fiş, açık kapı, kapalı su giriş musluğu ve tıkalı su giriş ya da makine filtreleri. Önce elektrik, fiş, Açma/Kapama tuşu, kapı ve musluğa bak."
  - q: "Ekranda CL yazıyor ve tuşlar çalışmıyor. Arıza mı?"
    a: "BM 10502 X GI WIFI kılavuzuna göre çocuk kilidi devreye girdiğinde ekranda CL mesajı görünür ve çocuk kilidi etkinken tüm tuşlar devre dışıdır. Kilidi kapatma yöntemi için kendi modelinin kılavuzundaki Çocuk Kilidi bölümüne bak."
  - q: "Başlat'a bastım ama makine hemen yıkamaya başlamadı. Neden?"
    a: "Erteleme ayarlıysa makine hemen başlamaz. Vestel kılavuzuna göre erteleme süresi ayarlanıp Başlat/Beklet tuşuna basıldığında erteleme zamanlayıcısı başlar ve erteleme sembolü bu süre boyunca yanar."
  - q: "Makine yıkarken durdu. Ne yapmalıyım?"
    a: "Vestel'in tablosu \"Makine yıkama esnasında duruyor\" satırında üç sebep sayıyor: elektrik kesilmiş olabilir (elektriğin gelmesini bekle), program bekleme konumunda olabilir (çalışır konuma getir) ya da su girişinde sorun olabilir (su hortumunun tıkalı olup olmadığını kontrol et). Kılavuza göre yıkama sırasında kapak açılır ya da güç kesilirse, kapak kapatıldığında ya da güç geri geldiğinde program kaldığı yerden devam eder."
images:
  coverAlt: "Mutfakta tezgâh altına yerleştirilmiş kapağı kapalı bir bulaşık makinesi ve kontrol paneline uzanan bir el"
---

Bulaşıkları yerleştirdin, programı seçtin ama makine başlamıyor. Vestel'in Türkçe kullanım kılavuzlarındaki sorun giderme tablosu bu durumu **"Program başlamıyor."** satırında ele alıyor ve yedi sebep sayıyor; ilki **"Elektrik kesintisi."** Bu sebeplerin çoğu evde birkaç dakikada kontrol edilebilir. Bu yazıda Vestel'in tablosunu, makineyi çalıştırma ve filtre temizliği bölümleriyle birlikte adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Elektrik var mı → fiş takılı mı → Açma/Kapama tuşuyla aç → kapıyı tam kapat → musluk açık mı → programı seçip Başlat/Beklet'e bas. Ekranda CL varsa çocuk kilidi açık; erteleme sembolü yanıyorsa makine ertelenmiş. Hâlâ başlamıyorsa fişi çekip filtreleri temizle. Sürerse → Vestel İletişim Merkezi ya da yetkili servis.

## Vestel'in tablosu: program neden başlamaz?

| Vestel'in yazdığı sebep | Vestel'in çözümü |
|---|---|
| Elektrik kesintisi | Elektriğin gelmesini bekle |
| Açma/kapama düğmesi açık değil | Makineyi aç |
| Sigorta yanmış | Sigortanın değiştirilmesini sağla |
| Fiş takılı değil | Fişi tak |
| Makinenin kapısı açık | Kapıyı kapat |
| Su giriş musluğu kapalı | Musluğu aç |
| Su giriş ve makine filtreleri tıkalı | Filtreleri temizle |

Bu satır BM 10502 X GI WIFI, BM 8402 GI Pro WIFI ve BM-401 kılavuzlarında aynı. Vestel, program bitince makinenin Açma/Kapama tuşuyla kapatılmasını, **fişin prizden çekilmesini ve su musluğunun kapatılmasını** istiyor; yeni bir yıkamaya başlarken bu ikisini geri açmak gerekiyor.

## Adım adım: evde denenecekler

**1. Elektrik.** Evde elektrik olup olmadığına bak; kesinti varsa elektriğin gelmesini bekle. Vestel'in tablosundaki ilk sebep bu.

**2. Fiş.** Makinenin fişinin prize takılı olduğunu kontrol et. Kılavuz çoklu priz ve uzatma kablosu kullanılmamasını, fiş çıkarılırken kablodan değil fişten tutulmasını istiyor. Tablodaki bir başka sebep yanmış sigorta; Vestel'in çözümü sigortanın değiştirilmesini sağlamak. Sigortaya ya da prize kendin müdahale etme.

**3. Açma/Kapama.** Makineyi Açma/Kapama tuşuyla aç. Tabloda bu sebep "açma/kapama düğmesi açık değil" diye geçiyor.

**4. Kapı.** Kapıyı tam kapat. Kapı düzgün kapanmıyorsa Vestel makinenin bulunduğu zeminde dengeli durup durmadığına bakmanı istiyor; denge ayarı için kılavuzunun kurulum bölümüne bak.

**5. Su musluğu.** Su giriş musluğunun açık olduğunu kontrol et. Kapalı musluk tablodaki sebeplerden biri.

**6. Program ve Başlat/Beklet.** Programı seç ve Başlat/Beklet tuşuna bas. Vestel'in çalıştırma sırası: Açma/Kapama tuşuyla makineyi aç, program tuşuyla programı seç, Başlat/Beklet tuşuyla başlat. Ekranda CL görüyorsan çocuk kilidi açık; BM 10502 X GI WIFI kılavuzuna göre bu durumda tüm tuşlar devre dışıdır. Erteleme sembolü yanıyorsa makine erteleme süresinin bitmesini bekliyor.

**7. Filtreler.** Hâlâ başlamıyorsa fişi çek, musluğu kapat ve taban filtre grubunu elle çıkarıp bol suyla durulayarak yerine tak. Vestel'in tarifi: filtre grubunu saatin tersine çevirip yukarı kaldırarak çıkar, kalın filtreyi mikro filtreden, ardından metal filtreyi çekip ayır, kalıntılar gidene kadar bol suyla durula, birleştir, yerine takıp saat yönünde çevir. Makineyi asla filtresiz çalıştırma; filtrenin hatalı takılması yıkama verimini düşürür. Su giriş hortumundaki filtre için [Vestel bulaşık makinesi FF hatası](/blog/vestel-bulasik-makinesi-ff-hatasi/) yazısındaki adımlara bak.

**8. Sürerse servis.** Makine yine başlamıyorsa Vestel İletişim Merkezi'ne ya da yetkili servise başvur.

## Ne zaman servis?

Vestel'in sorun giderme bölümü, bu açıklamalara rağmen cihaz normal çalışmıyorsa **İletişim Merkezi ile irtibata geçmeni** istiyor; yetkili servis listesi Vestel'in web sitesinde.

| Durum | Kimin işi |
|---|---|
| Elektrik, fiş, Açma/Kapama, kapı, musluk, Başlat/Beklet, taban filtreleri | Senin, bu rehberdeki adımlar |
| Yanmış sigorta | Sigortanın değiştirilmesini sağla; kendin müdahale etme |
| Ekranda F ile başlayan bir kod | Kodun anlamı [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/) yazısında |
| Bütün adımlara rağmen program başlamıyor | Vestel İletişim Merkezi ya da yetkili servis |

⛔ Makineyi su dökerek yıkama, kapakları açıp iç parçalara müdahale etme. Vestel kurulum ve onarım işlemlerinin her zaman yetkili servis tarafından yapılmasını istiyor.

Markadan bağımsız anlatım için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısına bakabilirsin. Program başlıyor ama bulaşıklar temiz çıkmıyorsa [Vestel bulaşık makinesi temiz yıkamıyor](/blog/vestel-bulasik-makinesi-temiz-yikamiyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Sorun giderme satırları Vestel'in BM 10502 X GI WIFI, BM 8402 GI Pro WIFI ve BM-401 bulaşık makinesi Türkçe kullanım kılavuzlarından; çalıştırma, çocuk kilidi, erteleme ve filtre temizliği bilgileri BM 10502 X GI WIFI kılavuzundan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
