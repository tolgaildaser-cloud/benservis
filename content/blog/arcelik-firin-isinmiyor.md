---
title: "Arçelik fırın ısınmıyor: evde kontrol"
description: "Arçelik ankastre fırın ısıtmıyorsa kılavuzdaki sıra: saat ayarı, açma tuşu, fonksiyon ve sıcaklık, tuş kilidi, elektrik ve servis sınırı."
slug: "arcelik-firin-isinmiyor"
date: "2026-10-01"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-01, curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. pdftotext -layout -f N -l N ile sayfa sayfa okundu (sayfa no = PDF sayfası).
# Web araması yalnız belgenin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
# arcelik.com.tr/destek/firin/firin-isitmiyor sayfası curl ile 403 (Access Denied) döndü → kaynak olarak KULLANILMADI.
#  A1) Arçelik ankastre fırın kullanma kılavuzu (dosya adı: 9658 SYTİ tek bölmeli 60 cm ankastre fırın), 32 s., md5 cc4cfd75c500496d1ee5ade673f5bff5
#      https://download.arcelik.com.tr/download.usagemanuals/9658-syti-tek-bolmeli-60-cm-ankastre-firinlar-kullanim-kilavuzu-tr_TR_201505070836921_User20Manual20-20Filetur-A.pdf
#      s.31 "Fırın ısınmıyor." → "Fonksiyon ve/veya Sıcaklık düğmesi ayarlanmamış olabilir. >>> Fonksiyon ve/veya Sıcaklık düğmesiyle fonksiyon ve sıcaklığı ayarlayın." / "Elektrik gelmiyordur. >>> Evinizde elektrik olup olmadığını ve sigorta kutusundaki sigortaları kontrol edin. Gerekirse, sigortaları değiştirin veya yeniden devreye sokun."
#      s.31 "Ürün çalışmıyor." → "Sigorta bozuk veya atmış olabilir." / "Ürünün fişi (topraklı) prize takılmamış olabilir. >>> Fişin prize takılıp takılmadığını kontrol edin." / "Kontrol paneldeki tuşlar çalışmıyor. >>> Tuş kilidi etkin olabilir, Tuş kilidini devre dışı bırakın."
#      s.15/s.18 "Fırını kullanmadan önce saat ayarı yapılmalıdır. Saat ayarı yapılmazsa fırın çalışmayacaktır."
#      s.16 "Elektrik kesintisinde ve ya fiş çıkarılıp tekrar takıldığında saat ayarlama ekranı tekrar gelir. Kısa süreli kesintilerde ayarlanmış olan günün saati korunur. Bu durumda saat değerini onaylayarak ilerleyebilirsiniz."
#      s.18 "Bu ekranda [açma/kapama] tuşuna kısa süreli dokunursanız, fırın sesli uyarı verecektir. Fırını açmak için 1 saniyeden daha uzun süre [açma/kapama] tuşuna dokunun."
#      s.19 "Pişirme fonksiyonu ve sıcaklık uygunsa [başlat] tuşuna dokunarak pişirmeyi başlatın." / "Elektrik kesintisi halinde yapılan program iptal olur. Yeniden programlama yapmanız gerekir." / "Pişirme sırasında fırın kapağı açılırsa ekranda [açık kapı] sembolü görünür."
#      s.24 "Tuş Kilidi fonksiyonu devredeyken fırın düğmeleri kullanılamaz. Elektrik kesintisi halinde tuş kilidi iptal olmaz." / "[tuş kilidi] tuşuna iki kez dokunarak tuş kilidini devreden çıkarın."
#      s.13 "Soğutma fanı, fırın kapandıktan sonra yaklaşık 20-30 dakika daha çalışmaya devam eder."
#      s.31 "Bu bölümdeki talimatları uygulamanıza rağmen sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı asla denemeyin."
# BİLEREK YAZILMAYANLAR: sigorta değiştirme (kılavuzda geçiyor ama #31 elektrik müdahalesi; yalnız "kontrol et / atmışsa yeniden devreye sok"); rezistans, termostat, kart teşhisi (belgede yok); lamba değişimi; tuş simgelerinin adı (PDF'te simge, metin değil → "kılavuzundaki simge" diye anıldı).
# Alıntı denetim tablosu: arcelik-firin-isinmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekranda 00.00 yanıp sönüyorsa önce günün saatini ayarla ve onayla; saat ayarlanmazsa fırın çalışmaz."
  - "Fırını açmak için açma/kapama tuşuna 1 saniyeden uzun dokun; kısa dokunuşta fırın yalnız sesli uyarı verir."
  - "Fonksiyonu ve sıcaklığı seç, ardından başlatma tuşuna dokunarak pişirmeyi başlat."
  - "Tuşlar tepki vermiyorsa tuş kilidinin açık olup olmadığına bak; açıksa kilit tuşuna iki kez dokunarak kapat."
  - "Fırın kapağının tam kapalı olduğunu kontrol et; ekranda açık kapı sembolü görünmemeli."
  - "Evde elektrik olduğunu, fırının topraklı fişinin prize takılı olduğunu ve sigorta kutusundaki sigortanın atmadığını kontrol et; atmışsa yeniden devreye sok."
  - "Bu adımlardan sonra fırın hâlâ ısınmıyorsa ürünü kendin onarmaya çalışma; bayine ya da Arçelik Yetkili Servisi'ne başvur."
faq:
  - q: "Arçelik fırınım elektrik kesintisinden sonra ısıtmıyor, neden?"
    a: "Arçelik kılavuzuna göre elektrik kesintisinde ya da fiş çıkarılıp takıldığında saat ayarlama ekranı yeniden gelir ve saat ayarı yapılmazsa fırın çalışmaz. Kısa kesintilerde günün saati korunur; bu durumda saat değerini onaylayarak ilerleyebilirsin. Kesinti sırasında kurulu olan program da iptal olur, yeniden programlaman gerekir."
  - q: "Açma tuşuna basıyorum, fırın sadece bip sesi çıkarıyor."
    a: "Arçelik'in elektronik kumandalı ankastre fırın kılavuzunda bu durum açıklanıyor: açma/kapama tuşuna kısa süreli dokunursan fırın sesli uyarı verir. Fırını açmak için tuşa 1 saniyeden daha uzun dokunman gerekiyor."
  - q: "Hiçbir tuş çalışmıyor, fırın bozuk mu?"
    a: "Önce tuş kilidine bak. Arçelik'in arıza tablosu kontrol panelindeki tuşlar çalışmıyorsa tuş kilidinin etkin olabileceğini yazıyor. Kılavuza göre tuş kilidi devredeyken fırın düğmeleri kullanılamaz ve elektrik kesintisinde kilit kendiliğinden kalkmaz; kilit tuşuna iki kez dokunarak kapatabilirsin."
  - q: "Fırını kapattım ama fan hâlâ çalışıyor, normal mi?"
    a: "Evet. Arçelik kılavuzuna göre soğutma fanı fırın kapandıktan sonra yaklaşık 20-30 dakika daha çalışmaya devam eder. Fırın saatini programlayarak pişirdiysen pişirme süresi sonunda soğutma fanı da diğer fonksiyonlarla birlikte kapanır."
images:
  coverAlt: "Ankastre fırının dokunmatik kontrol panelinde yanıp sönen sıfırlanmış saat göstergesi ve panele dokunmak üzere olan bir parmak"
---

Elektrik gidip geldi ya da fırını yeni taktırdın; fırın açılıyor gibi ama içi ısınmıyor. Arçelik'in elektronik kumandalı ankastre fırın kılavuzundaki sorun giderme bölümünde bu belirti **"Fırın ısınmıyor."** başlığıyla geçiyor ve iki neden sayılıyor: **fonksiyon ve/veya sıcaklık düğmesinin ayarlanmamış olması** ve **elektriğin gelmemesi.** Aynı kılavuzun ilk kullanım bölümünde gözden kaçan bir kural daha var: **saat ayarı yapılmazsa fırın çalışmaz.** Bu yazı Arçelik'in bu kılavuzundaki kuralları kullanım sırasına göre diziyor. Kaynak, Arçelik'in tek bölmeli 60 cm ankastre fırın kılavuzu; tuş adları ve yerleri modelden modele değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda 00.00 yanıp sönüyorsa saati ayarla, saatsiz fırın çalışmaz. Açma tuşuna 1 saniyeden uzun dokun. Fonksiyonu ve sıcaklığı seçip başlat tuşuna bas. Tuşlar ölü gibiyse tuş kilidini kapat. Kapağı kapat, elektriğe ve sigortaya bak. Hâlâ ısınmıyorsa → Arçelik Yetkili Servisi.

## Arçelik kılavuzunda neyi neyle eşleştirmeli?

| Gördüğün şey | Arçelik'in açıklaması | Ne yapılır |
|---|---|---|
| Ekranda "00.00" ve yanıp sönen saat simgesi | Elektrik kesildi ya da fiş çıkarılıp takıldı; saat ayar ekranı geri geldi | Saati ayarla ya da korunmuşsa onayla |
| Açma tuşuna basınca yalnız bip sesi | Tuşa kısa dokunuldu | Tuşa 1 saniyeden uzun dokun |
| Fırın açık ama ısıtmıyor | Fonksiyon ve/veya sıcaklık ayarlanmamış | Fonksiyon ve sıcaklığı seç, pişirmeyi başlat |
| Tuşlar tepki vermiyor, "Tuş kilidi aktif" uyarısı | Tuş kilidi devrede | Kilit tuşuna iki kez dokun |
| Ekranda açık kapı sembolü | Pişirme sırasında kapak açıldı | Kapağı kapat |
| Ürün hiç çalışmıyor | Elektrik yok, fiş takılı değil ya da sigorta atmış | Elektrik, fiş ve sigorta kontrolü |

## Adım adım: evde denenecekler

**1. Saati ayarla.** Ekranda 00.00 yanıp sönüyorsa önce günün saatini ayarla ve onayla; saat ayarlanmazsa fırın çalışmaz. Arçelik'in kuralı açık: **"Fırını kullanmadan önce saat ayarı yapılmalıdır."** Elektrik kesintisinde ya da fiş çıkarılıp takıldığında saat ayarlama ekranı yeniden gelir. Kısa kesintilerde günün saati korunur; o zaman yalnız saat değerini onaylaman yeterli.

**2. Fırını doğru aç.** Fırını açmak için açma/kapama tuşuna 1 saniyeden uzun dokun; kısa dokunuşta fırın yalnız sesli uyarı verir. Bu ayrıntı kılavuzun kontrol paneli bölümünde yazıyor.

**3. Fonksiyon, sıcaklık, başlat.** Fonksiyonu ve sıcaklığı seç, ardından başlatma tuşuna dokunarak pişirmeyi başlat. Arçelik'in tablosundaki ilk neden tam olarak bu: **fonksiyon ve/veya sıcaklık düğmesi ayarlanmamış olabilir.** Kılavuza göre pişirme fonksiyonu ve sıcaklık uygunsa başlatma tuşuna dokunduğunda pişirme başlar ve fırın içi sıcaklık simgesinin seviyesi arttıkça yükselir. Elektrik kesildiyse kurduğun program da iptal olmuştur; yeniden programla.

**4. Tuş kilidini kapat.** Tuşlar tepki vermiyorsa tuş kilidinin açık olup olmadığına bak; açıksa kilit tuşuna iki kez dokunarak kapat. Arçelik'e göre tuş kilidi devredeyken **fırın düğmeleri kullanılamaz** ve kilit **elektrik kesintisinde iptal olmaz.** Kilit açıkken bir tuşa basınca ekranda "Tuş kilidi aktif" uyarısı verilir.

**5. Kapağı kontrol et.** Fırın kapağının tam kapalı olduğunu kontrol et; ekranda açık kapı sembolü görünmemeli. Kılavuza göre pişirme sırasında kapak açılırsa ekranda bu sembol belirir.

**6. Elektrik, fiş, sigorta.** Evde elektrik olduğunu, fırının topraklı fişinin prize takılı olduğunu ve sigorta kutusundaki sigortanın atmadığını kontrol et; atmışsa yeniden devreye sok. Arçelik'in tablosu hem "Fırın ısınmıyor" hem "Ürün çalışmıyor" satırında elektriğe ve sigortalara bakmanı istiyor.

**7. Sürerse servis.** Bu adımlardan sonra fırın hâlâ ısınmıyorsa ürünü kendin onarmaya çalışma; bayine ya da Arçelik Yetkili Servisi'ne başvur.

## Arıza olmayan üç durum

- **Fırından buhar çıkıyor.** Arçelik'e göre çalışma sırasında buhar çıkması normaldir, **arıza değildir.**
- **Isınırken ve soğurken metal sesi.** Metal parçalar ısındıkça genleşerek ses çıkarabilir; bu da arıza değil.
- **Kapattıktan sonra fan çalışıyor.** Soğutma fanı fırın kapandıktan sonra yaklaşık **20-30 dakika** daha çalışır.

## Ne zaman servis?

Arçelik'in sorun giderme bölümünün son cümlesi sınırı çiziyor: talimatları uyguladığın hâlde sorunu gideremiyorsan ürünü satın aldığın **bayiye ya da Yetkili Servise** başvur ve çalışmayan ürünü **kendin onarmayı asla deneme.**

| Durum | Kimin işi |
|---|---|
| Saat ayarı, açma tuşu, fonksiyon ve sıcaklık seçimi, tuş kilidi, kapak | Senin, bu rehberdeki adımlar |
| Atmış sigortayı bir kez devreye sokma | Senin |
| Saat ayarlı, fonksiyon seçili, kapak kapalı ama fırın ısınmıyor | Arçelik Yetkili Servisi |

⛔ Fırının arka panelini ya da kumanda bölümünü açmaya, kabloya veya prize müdahale etmeye çalışma.

Fırın ısınıyor ama yemeği eşit pişirmiyorsa [fırın eşit pişirmiyor](/blog/firin-esit-pisirmiyor/) yazısına bakabilirsin. Markadan bağımsız anlatım için [fırın ısınmıyor](/blog/firin-isinmiyor/) sayfası var.

---

**Kaynak künyesi.** Adımlar Arçelik'in download.arcelik.com.tr'de yayımladığı Türkçe ankastre fırın kullanma kılavuzundan (tek bölmeli 60 cm, elektronik kumandalı model) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
