---
title: "Fujitsu klima arıza ışıkları: hangi lamba ne demek?"
description: "Fujitsu klimada Çalışma, Zamanlayıcı ve Ekonomi lambası yanıp sönüyorsa: buz çözme, filtre uyarısı, saat hatası, bekleme ve hata kodu. Kılavuza göre."
slug: "fujitsu-klima-ariza-isiklari"
date: "2026-11-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-27 PAZ alt ajanı (günlük yazı, tek marka). origin/main 9ed539dc content/blog/ altında "fujitsu" geçen yazı, slug ya da başlık YOK
#   (yalnız src/kullanim-kilavuzlari.js, src/constants.js, src/services-data.json). Klima hub'ı klima-ariza-kodlari içinde Fujitsu satırı yok.
#   Dalga 6–8, marka-25eki ve blog-taslaklar klasörlerinde Fujitsu yazısı yok (2026-10-29 TESLIM'de belge onayı beklediği için atlanmıştı).
# OT (#164, bu koşu 27 Eki 09:57, hl=tr gl=tr): "fujitsu klima arıza" → 1. fujitsu klima arıza ışıkları · 2. …arıza kodları.
#   "fujitsu klima ışık" → 1. …ışık yanıp sönüyor · 2. …arıza ışıkları · 3. …kırmızı ışık yanıp sönüyor · 4. …yeşil ışık yanıp sönüyor. GSC (www-5, www-6): "fujitsu" satırı yok.
# Belge (#88) bu koşuda indirildi; Tolga'nın açık onayıyla "Utilization requirement for document" kutusu işaretlendi. Zincir:
#   generalww.com/global/support/downloads/search/index.html (200) → document-type.html?…model_inner=ASYG12KMTB (200; OPERATION MANUAL)
#   → download.html?…&doc_type=DOM,, (200; dil Tr, kutu "accepted") → https://www.generalww.com/datafiles/W9387858020-0201_OM_Tr_ASYG12KMTB.pdf (200 application/pdf, 12 s.)
#   md5 5bd1e63566d50444f0f177f2fd0e52db. TÜRKÇE kılavuz.
# BİLEREK YAZILMAYANLAR: hata kodlarının anlamı (kullanım kılavuzu yalnız "hata kodu gösterimi → yetkili servis" diyor) · kırmızı ışık
#   (kılavuzda kırmızı lamba yok) · diğer Fujitsu iç ünitelerinin lamba düzeni · sigorta değişimi (#31) · fiyat (#46).
# Alıntı denetim tablosu: fujitsu-klima-ariza-isiklari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Fujitsu klima kumandası", "Elektrikli süpürge ya da ılık su ve yumuşak deterjan", "Yumuşak bez"]
steps:
  - "İç ünitedeki üç lambayı simgesinden tanı ve hangisinin yanıp söndüğünü, hızlı mı yavaş mı söndüğünü not et."
  - "Isıtmadayken yalnız Çalışma lambası yanıp sönüyorsa buz çözme sürüyordur, en çok 15 dakika bekle."
  - "Çalışma lambası saniyede bir yanıp sönüyor ve ünite bekliyorsa aynı dış üniteye bağlı diğer iç ünitelerin modunu eşitle."
  - "Ekonomi lambası 21 saniye arayla üç kez yanıp sönüyorsa hava filtresini temizle ve filtre göstergesini sıfırla."
  - "Yalnız Zamanlayıcı lambası yanıp sönüyorsa elektrik kesintisinden sonra saati ve zamanlayıcıyı kumandadan yeniden kur."
  - "Üç lamba bip sesiyle yanıp sönüyorsa kablolu kumanda varken kısıtlı bir işlev seçmişsindir, o işlevi kullanma."
  - "Ekonomi hızlı, diğer ikisi normal yanıp sönüyorsa klimayı durdur, şalteri kapat ve yetkili servisi çağır."
faq:
  - q: "Fujitsu klimada ışık yanıp sönüyor, ne demek?"
    a: "Hangi lambanın yanıp söndüğüne bağlı. Kılavuza göre ısıtmada yalnız Çalışma lambası yanıp sönüyorsa otomatik buz çözme sürüyordur; Ekonomi lambası üç kez yanıp sönüyorsa filtre uyarısıdır; yalnız Zamanlayıcı yanıp sönüyorsa elektrik kesintisinden sonra saat ve zamanlayıcı ayarı bozulmuştur."
  - q: "Fujitsu klimada üç ışık birden yanıp sönüyor, ne yapmalıyım?"
    a: "Ekonomi lambası hızlı, Çalışma ve Zamanlayıcı normal hızda yanıp sönüyorsa bu hata kodu gösterimidir. Kılavuz klimayı hemen durdurmanı, şalteri kapatmanı ve yetkili servise danışmanı istiyor. Üçü bip sesiyle yanıp sönüyorsa ve kablolu kumanda kullanıyorsan, kablosuz kumandadan kısıtlı bir işlev seçmişsindir."
  - q: "Fujitsu klimada kırmızı ışık yanıp sönüyor, bu arıza mı?"
    a: "İncelediğimiz Türkçe kılavuzda kırmızı lamba yok; lambalar Çalışma (yeşil), Zamanlayıcı (turuncu) ve Ekonomi (yeşil). Senin iç ünitende farklı renkte lamba varsa kendi modelinin kılavuzuna bak; emin değilsen yetkili servise danış."
  - q: "Fujitsu klimada yeşil ışık yanıp sönüyor ama klima çalışmıyor?"
    a: "Isıtmadaysan önce buz çözmenin bitmesini bekle, en çok 15 dakika sürer. Evde birden fazla iç ünite aynı dış üniteye bağlıysa ve Çalışma lambası saniyede bir yanıp sönüyorsa ünite bekleme modundadır; diğer odadaki klimanın modunu kontrol et."
  - q: "Filtre uyarısı nasıl sıfırlanır?"
    a: "Filtreyi temizleyip yerine taktıktan sonra iç ünitedeki MANUAL AUTO düğmesine 2 saniye ya da daha kısa bas. Kılavuza göre bu işlev, kurulumda doğru ayarlanmışsa kullanılabiliyor."
images:
  coverAlt: "Duvara monte edilmiş beyaz split klima iç ünitesi ve ön yüzündeki küçük gösterge lambaları"
  steps:
    - "Split klima iç ünitesinin alt köşesinde yan yana duran üç küçük gösterge lambası"
    - "Kış günü buzlanmış bir klima dış ünitesinin peteği"
    - "Bir evde iki ayrı odaya takılmış duvar tipi klima iç üniteleri"
    - "İç üniteden çıkarılmış, tozlu ince örgülü klima hava filtresi"
    - "Ekranında saat ayarı görünen klima kumandası"
    - "Duvara monte edilmiş kablolu klima kumandası ve yanında kablosuz kumanda"
    - "Ön paneli kapalı duran ve kullanılmayan split klima iç ünitesi"
---

Fujitsu klimanın iç ünitesinde üç küçük lamba var ve arıza bildirimi bu üçünün yanıp sönme düzeniyle yapılıyor. Her yanıp sönme arıza değil: buz çözme, filtre uyarısı ya da elektrik kesintisi sonrası saat hatası da lambayla bildiriliyor. Bu yazı, Fujitsu General'in resmî belge arşivinde ASYG12KMTB duvar tipi iç ünite için yayımlanan **Türkçe kullanım kılavuzuna** dayanıyor. Senin iç ünitenin modeli farklıysa lamba düzeni değişebilir; model adı iç ünitenin yanındaki etikette yazar.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Isıtmada yalnız Çalışma lambası yanıp sönüyorsa buz çözme sürüyor, 15 dakika bekle. Ekonomi lambası üç kez yanıp sönüyorsa filtreyi temizle. Yalnız Zamanlayıcı yanıp sönüyorsa saati yeniden kur. Ekonomi hızlı, diğer ikisi normal yanıp sönüyorsa klimayı durdur, şalteri kapat, servisi çağır.

## Lambalar ve anlamları

Kılavuzdaki lambalar: **Çalışma** (yeşil, dikey çizgi simgesi), **Zamanlayıcı** (turuncu, saat simgesi) ve **Ekonomi** (yeşil). Kılavuza göre Ekonomi lambasının sürekli yanması ekonomi çalışmasını ya da 10 °C ısıtmayı gösterir.

| Lamba düzeni | Kılavuzdaki anlamı | Ne yapılır |
|---|---|---|
| Çalışma yanıp söner (ısıtmada) | Otomatik buz çözme | En çok 15 dakika bekle |
| Ekonomi 3 kez yanıp söner | Filtre göstergesi | Filtreyi temizle, göstergeyi sıfırla |
| Zamanlayıcı yanıp söner | Elektrik kesintisi sonrası zamanlayıcı hatası | Saati ve zamanlayıcıyı yeniden kur |
| Çalışma yavaş yanıp söner | Çoklu bağlantıda bekleme modu | İç ünitelerin modunu kontrol et |
| Çalışma ve Zamanlayıcı yanıp söner | Test çalışması (yalnız yetkili personel) | Başlat/durdur düğmesine bas |
| Üçü yanıp söner | Kısıtlanmış işlev | Seçtiğin işlevi kullanma |
| Ekonomi hızlı, diğer ikisi normal yanıp söner | Hata kodu gösterimi | Yetkili servis |

## Adım adım: lambayı okumak ve gidermek

**1. Lambayı tanı.** Hangi lambanın yanıp söndüğüne, kaç kez ve ne hızda söndüğüne bak. Kılavuzun tablosu lambaları simgesiyle ayırıyor; renk tek başına yetmiyor, çünkü Çalışma ile Ekonomi aynı renkte.

**2. Buz çözmeyi bekle.** Isıtma modunda yalnız **Çalışma** lambası yanıp sönüyorsa klima otomatik buz çözme yapıyor. Kılavuza göre dış hava çok soğuk ve nemliyken dış ünitede buz oluşabiliyor; klima geçici olarak duruyor ve buz çözme en çok **15 dakika** sürüyor. Bu sırada dış üniteden buhar ya da su gelmesi ve cızırtı sesi normal.

**3. Çoklu sistemde modu eşitle.** Birden fazla iç ünite aynı dış üniteye bağlıysa ve Çalışma lambası **1 saniye açık, 1 saniye kapalı** yanıp sönüyorsa ünite bekleme moduna geçmiştir. Kılavuza göre ısıtma ile soğutma (ya da kurutma) ve ısıtma ile fan modu aynı anda çalışmaz; dış ünitenin modunu ilk çalıştırılan iç ünite belirler. Diğer odalardaki klimaları aynı moda al.

**4. Filtreyi temizle.** **Ekonomi** lambası 21 saniye arayla üç kez yanıp sönüyorsa filtre uyarısıdır. Klimayı kapat ve gücünü kes. Giriş ızgarasını açıp filtrenin kolunu kaldır, iki alt tırnağı ayırıp filtreyi çek. Tozu elektrikli süpürgeyle al ya da ılık su ve yumuşak deterjanla yıka, gölgede iyice kurut. Filtreyi tak, ızgarayı dört noktasından bastırarak tam kapat. Sonra iç ünitedeki **MANUAL AUTO** düğmesine 2 saniye ya da daha kısa bas. Kılavuz filtre temizliğini iki haftada bir öneriyor.

**5. Saati yeniden kur.** Yalnız **Zamanlayıcı** lambası yanıp sönüyorsa elektrik kesintisinden sonra iç saat bozulmuştur. Kılavuza göre klima elektrik gelince kendiliğinden yeniden çalışır, ama zamanlayıcının geri sayımı sıfırlanır. Kumandada **CLOCK ADJUST** düğmesine bas, saati SELECT tuşlarıyla ayarla, yine CLOCK ADJUST ile bitir; sonra zamanlayıcıyı yeniden kur.

**6. Kısıtlı işlevi kapat.** Üç lamba birlikte yanıp sönüyor ve bip sesi geliyorsa klimaya kablolu kumanda bağlı olabilir. Kılavuza göre kablolu kumanda varken kablosuz kumandadan **Güçlü çalışma, Dış Ünite Düşük Gürültü ve 10 °C Isıtma** seçilemiyor. O işlevi kullanmadan devam et. Çalışma ve Zamanlayıcı birlikte yanıp sönüyorsa ünite test çalışmasında kalmıştır; başlat/durdur düğmesine bas.

**7. Hata kodunda servisi çağır.** **Ekonomi** lambası hızlı, Çalışma ve Zamanlayıcı normal hızda yanıp sönüyorsa bu hata kodu gösterimidir. Kılavuz klimayı hemen durdurmanı, şalteri kapatmanı ve yetkili servise danışmanı istiyor. Lambanın düzenini ve iç ünitenin model adını servise söyle.

## Lamba yanmıyorsa ya da klima hiç çalışmıyorsa

Kılavuz önce şunlara bakmanı istiyor: elektrik kesildi mi, şalter kapalı mı, zamanlayıcı mı devrede, kumandanın pili bitti mi. Elektrik gidip geldiyse kompresör yaklaşık 3 dakika kalkmaz, bu bir koruma. Kılavuza göre yakında kullanılan tıraş makinesi ya da telsiz verici gibi bir cihaz da arızaya yol açabiliyor; böyle bir durumda şalteri kapatıp aç ve klimayı kumandayla yeniden başlat.

## Ne zaman servis

- Ekonomi lambası hızlı, diğer ikisi normal yanıp sönüyorsa (hata kodu)
- Üniteden yanık kokusu, duman ya da su sızıntısı geliyorsa; kılavuz bu durumda klimayı durdurup şalteri kapatmanı istiyor
- Buz çözme, filtre ve saat kontrollerinden sonra lamba yanıp sönmeye devam ediyorsa

⛔ **Kendin-çöz sınırı burada biter.** Filtre, saat, mod ve kumanda sende; kart, sensör, gaz, dış ünite ve elektrik bağlantıları Fujitsu yetkili servisinin. Kılavuz, ısı eşanjörünün alüminyum kanatlarına dokunmamanı da istiyor.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kod yazan diğer markalar için [klima arıza kodları](/blog/klima-ariza-kodlari/), filtre bakımı için [klima filtresi temizleme](/blog/klima-filtresi-temizleme/), buzlanma için [klima dış ünite buzlanma](/blog/klima-dis-unite-buzlanma/), kumanda sorunu için [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazısına bak. Bil, gör, çağır.

---

**Kaynak künyesi.** Lamba düzenleri, anlamları ve çözümler Fujitsu General'in resmî belge arşivinde (generalww.com) ASYG12KMTB duvar tipi iç ünite için yayımlanan Türkçe kullanım kılavuzundan (W9387858020-0201) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
