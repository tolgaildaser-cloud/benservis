---
title: "Bosch çamaşır makinesi hata kodları: E16'dan E28'e resmî liste"
description: "Bosch'un yayımladığı on çamaşır makinesi kodu: E16, E17, E18, E19, E20, E23, E25, E26, E27, E28. Anlamları, Bosch'un kendi çözümü ve servis sınırı."
slug: "bosch-camasir-makinesi-hata-kodlari"
date: "2026-06-19"
category: "Çamaşır makinesi"
# 23 Eki 2026 (YK #182 Dalga 2, PAZ): E23 satırı Bosch WAK24210TR kılavuzuna göre düzeltildi
# (9000941315_A, md5 e1a8d222…, s.26: "Küvet içinde su var, cihaz sızdırıyor"); eski "Aquastop etkinleştirildi" yanlıştı.
# 🔴 22 Ağu 2026 — TABLO BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
# Beş kod satırı çıkarıldı; hiçbiri BSH'nin yayımladığı listelerde yok:
#   F21 "motor sistemi arızası (kömür)"  → BSH'nin tahrik kodu E80
#   F31 "aşırı su / fazla köpük"          → BSH'de köpük kodu E33/F33
#   E42/F42 · E43/F43 "motor dönmüyor"    → hiçbir BSH listesinde yok
#   E61/F61 "kapı kilidi sinyali"         → BSH kapı kodları E16/F16 ve E34/F34
#   E63/F63 "güvenlik/yazılım"            → yok
# F21 yazının BAŞLIĞINDAYDI ve "en sık 3 kod" kutusundaydı; başlık da değişti.
# F25'in adı da yanlıştı: "Aquasensor" BSH'nin BULAŞIK makinesi parçasıdır (00165279);
# Bosch'un çamaşırdaki tanımı "Bulanıklık sensörü arızası".
#
# Kaynak: bosch-home.com.tr/musteri-hizmetleri/yardim-destek/camasir-makinesi-hatalari
# ve altındaki 10 ayrı kod sayfası, bu koşuda tek tek indirildi. Bosch TR'nin yayımladığı
# liste tam olarak şu ondur: E16 E17 E18 E19 E20 E23 E25 E26 E27 E28.
# 📌 Eksik yayındı, eklendi: E20/F20 "beklenmeyen ısınma" ve E27/F27 "basınç sensörü".
# 📌 F29 ve F34 TR sayfasında yok ama diğer BSH bölge sitelerinde geçiyor → ayrı başlıkta,
#    çekinceyle verildi. Uydurma değil, ama TR teyidi de yok.
# 📌 "F21 aradıysan" bölümü BİLEREK duruyor: arama gerçek, okuru boşa düşürmemek için
#    doğrusu söyleniyor. (Beko E10 vakasındaki kararın aynısı.)
# 📌 Neff iddiası yumuşatıldı: BSH platform ortaklığı belgeli, Neff'in KOD TABLOSU değil —
#    neff-home.com'da hata kodu sayfası bulunamadı. Siemens teyitli, o kaldı.
images:
  coverAlt: "Çamaşır odasında yan yana duran iki ön yüklemeli makine ve arkalarındaki mavi duvar"
video:
  youtubeId: "0uQV4Y_hjXY"
  title: "Bosch çamaşır makinesi hata kodları"
  description: "Bosch çamaşır makinesinde E16, E17 ve E18'de kullanıcının yapabilecekleri; üreticinin servise yönlendirdiği kodlar."
  uploadDate: "2026-09-13T05:16:52Z"
  duration: "PT1M16S"
updated: "2026-11-10"
kisaCevap: "Bosch Türkiye destek sayfası çamaşır makinesi için 10 kod yayımlar: E16, E17, E18, E19, E20, E23, E25, E26, E27, E28. Yeni modeller E, eski modeller F önekiyle aynı numarayı gösterir (E18 = F18). E16, E17, E18 ve E20'de Bosch kullanıcıya bir kontrol tarif eder, diğerlerinde servise yönlendirir."
faq:
  - q: "Bosch çamaşır makinesi E18 (F18) ne demek?"
    a: "Bosch'a göre E18/F18, makinenin atık suyu tahliye edemediğini gösterir; su tamburda kalır. Bosch tahliye hortumunun bükülmediğini kontrol etmeyi ve alt kapağı açıp pompa filtresine yabancı cisim kaçıp kaçmadığına bakmayı söyler. Aynı arıza bazı modellerde d02 koduyla görünür."
  - q: "Bosch'ta E ve F kodları arasındaki fark ne?"
    a: "Aynı arıza, model nesline göre farklı önekle gösterilir: yeni Bosch modelleri E, eski modeller F önekiyle aynı numarayı verir. E18 ile F18 aynı anlama gelir; Bosch kendi sayfalarında kodları 'E18 veya F18' biçiminde ikili yazar."
  - q: "Bosch E23 hatası ne demek?"
    a: "Bosch WAK24210TR kullanım kılavuzu E23 için 'Küvet içinde su var, cihaz sızdırıyor' der ve önce su musluğunu kapatıp yetkili servisi çağırmayı ister. Kaçağın kaynağını servis bulur."
  - q: "Bosch E20 hatası arıza mı?"
    a: "Bosch E20'yi 'beklenmeyen ısınma' olarak tanımlar ve önce makineyi açıp kapatarak sıfırlamayı önerir. Sıfırlamadan sonra kod tekrar geliyorsa servis randevusu gerekir."
  - q: "Bosch F21 kodu ne anlama gelir?"
    a: "Bosch'un yayımladığı çamaşır makinesi listesinde F21 diye bir kod yok; listedeki E/F eşlerinin arasında 21 bulunmaz. BSH'nin tahrik tarafı için kullandığı kod E80'dir. Ekrandaki kodu kendi modelinin kılavuzundaki arıza tablosundan teyit et."
  - q: "Siemens ve Neff'te de aynı kodlar mı geçerli?"
    a: "Siemens'te evet: Siemens'in kendi destek sayfalarındaki tablo Bosch'unkiyle kelime kelime aynıdır. Neff kendi sitesinde hata kodu sayfası yayımlamadığı için Neff tablosu teyit edilemiyor."
---

Bosch çamaşır makinen ekranında bir hata kodu gösteriyor ve ne demek olduğunu çözmek istiyorsun. Bu rehberde **Bosch'un kendi destek sayfalarında yayımladığı on kodu**, Bosch'un verdiği çözümle birlikte topladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 💡 **E mi F mi?** Yeni Bosch modelleri **E**, eski modeller **F** önekiyle **aynı numarayı** gösterir — yani **E18 = F18**. Bosch kendi sayfalarında da "E18 veya F18" biçiminde ikili yazar.

## ⚡ En sık karşılaşılan 3 kod
> **E18 / F18** — Atık su tahliye edilemiyor · genelde tıkalı filtre → 🛠️ kendin
>
> **E17 / F17** — Su besleme süresi aşıldı → 🛠️ musluğu aç
>
> **E16 / F16** — Kapak açık / kapanmadı → 🛠️ kapağı kapat

## Bosch'un yayımladığı kod listesi
🛠️ = Bosch kullanıcıya bir iş tarif ediyor · 🔧 = Bosch doğrudan servise yönlendiriyor

| Kod | Bosch'un tanımı | Bosch ne diyor |
|-----|-----------------|----------------|
| **E16 / F16** | Kapak açık, tam kilitlenmedi | 🛠️ Kapağı kapatın; düzelmezse servis randevusu |
| **E17 / F17** | Su besleme süresi aşıldı | 🛠️ Musluğu açın; düzelmezse servis randevusu |
| **E18 / F18** | Atık su tahliye edilemiyor | 🛠️ Tahliye hortumunu ve pompa filtresini kontrol edin |
| **E19 / F19** | Isıtma süresi aşıldı | 🔧 "Kendi kendine düzeltilemez" — servis |
| **E20 / F20** | Beklenmeyen ısınma | 🛠️ Makineyi açıp kapatarak sıfırlayın; düzelmezse servis |
| **E23 / F23** | Küvette su var, cihaz sızdırıyor | 🔧 Su musluğunu kapat, yetkili servisi çağır |
| **E25 / F25** | Bulanıklık sensörü arızası | 🔧 Servis |
| **E26 / F26** | Analog basınç sensörü arızası | 🔧 Servis |
| **E27 / F27** | Basınç sensörü arızası | 🔧 Servis |
| **E28 / F28** | Akış sensörü arızası | 🔧 Servis |

"Bosch ne diyor" sütunu bizim yorumumuz değil — Bosch'un kendi sayfalarındaki çözüm cümlesinin özeti.

### TR sayfasında olmayan ama diğer BSH sitelerinde geçen iki kod

| Kod | Anlamı | Not |
|---|---|---|
| **E29 / F29** | Su yok / yetersiz şebeke basıncı | Bosch US sayfası "E17, F17 or F29" diyerek su alma grubuna koyuyor |
| **E34 / F34** | Kapak düzgün kilitlenmedi | "E16, E34, F16 or F34" grubunda; E16'nın kardeşi |

Bu iki kod Bosch'un Türkiye sayfasında yer almıyor; kendi modelinin kılavuzundan teyit et.

## Öne çıkan kodlar

### E18 / F18 — Atık su tahliye edilemiyor
En sık çıkan Bosch koddur ve Bosch bunu kullanıcının çözebileceğini açıkça yazıyor. Tamburda su kalmış olabilir. Önce **tahliye hortumunun** su akışını engellemediğinden, bükülmediğinden ve katlanmadığından emin ol. Sonra alt kısımdaki kapağı açıp **pompa filtresine** bozuk para, düğme gibi yabancı bir cisim kaçıp kaçmadığını kontrol et (havlu hazırla, su gelir).

Makine hâlâ suyu pompalamıyorsa pompada arıza olabilir; orası servis işidir.

> ℹ️ Aynı arıza bazı Bosch modellerinde **d02** koduyla görünür — Bosch'un kendi sayfası bunu böyle yazıyor. Farklı kod, aynı iş.

### E17 / F17 — Su besleme süresi aşıldı
Bosch'un verdiği çözüm tek cümle: **musluğu açın.** Pratikte musluğun tam açık olduğunu, evde su olduğunu ve giriş hortumunun ezilmediğini kontrol etmek gerekir. Hortumun makine tarafındaki küçük süzgeci de kireçle tıkanabilir.

### E23 / F23 — Küvette su var, cihaz sızdırıyor
Bosch'un kullanım kılavuzu (WAK24210TR) bu kod için açık: *"Küvet içinde su var, cihaz sızdırıyor. Su musluğunu kapatınız. Yetkili servisi çağırınız!"* Yani önce musluğu kapat; kaçağın kaynağını servis bulmalıdır.

### E20 / F20 — Beklenmeyen ısınma
Listedeki en az bilinen koddur ve iyi haber taşır: Bosch burada önce **makineyi açıp kapatarak sıfırlamayı** öneriyor. Yani her E20 bir arıza değildir; geçici bir okuma hatasından da gelebilir. Reset sonrası tekrar geliyorsa servis.

## Hata kodu nasıl sıfırlanır?
Çoğu modelde: program düğmesini **"Kapalı"ya** al, makineyi **fişten 1 dakika** çek, tekrar tak. Arızanın kaynağı düzelmediyse kod tekrar çıkar.

## Bosch çamaşır makinesi panel işaretleri (kod değil, sembol)
Ekrandaki her uyarı bir hata kodu değildir; bazı **semboller** normal bilgi verir. Bosch (Serie 4/6/8) panelinde en sık görülenler:

| İşaret | Anlamı | Ne yapmalı |
|--------|--------|------------|
| 🔑 **Anahtar / kilit** | Tuş kilidi (çocuk kilidi) açık | 🛠️ İlgili tuşu 3-4 sn basılı tut → kapanır |
| 🫧 **Köpük / kabarcık** | Aşırı köpük algılandı | 🛠️ Daha az ve makineye uygun deterjan kullan |
| 🚰 **Musluk** | Su girişi sorunu | 🛠️ Musluğu aç, giriş hortumu/süzgecini kontrol et |
| 👕 **Ütü / düşük devir** | Kolay ütüleme modu (sıkma düşük) | ℹ️ Arıza değil; istersen devri yükselt |
| ⏱ **Saat** | Gecikmeli başlatma aktif | ℹ️ İptal için programı sıfırla |

Sembolün ne olduğundan emin değilsen modelini yaz, [Benservis](/) söylesin.

## Kodun listede yok mu?
Bosch yüzlerce farklı model üretir ve yayımladığı liste on kodludur. Ekrandaki kodu ve cihaz modelini [Benservis'e yaz](/); olası arızayı, kendin çözüp çözemeyeceğini ve tahmini maliyeti saniyede söyleyelim.

> 🔧 **Servis çağırmadan önce:** Cihazının markasını ve belirtiyi yaz — Benservis olası arızayı ve **tahmini maliyet aralığını** ücretsiz söylesin, sonra sana en yakın Google puanlı servisleri göstersin. [Ücretsiz teşhis et →](/)

## Tahmini tamir maliyeti
Hangi işin ne kadar tuttuğunu belirleyen faktörler: [Çamaşır makinesi tamirinde fiyatı ne belirler?](/blog/camasir-makinesi-tamiri-kac-para/)

İlgili: [Çamaşır makinesi hata kodları (marka marka)](/blog/camasir-makinesi-hata-kodlari/) · [Su almıyor](/blog/camasir-makinesi-su-almiyor/) · [Su atmıyor](/blog/camasir-makinesi-su-atmiyor/) · [Işıklar yanıp sönüyor](/blog/camasir-makinesi-isik-yanip-sonuyor/) · [Bosch çamaşır makinesi sembolleri ve anlamları](/blog/bosch-camasir-makinesi-sembolleri-ve-anlamlari/)

