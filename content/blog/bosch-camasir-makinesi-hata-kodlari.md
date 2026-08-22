---
title: "Bosch çamaşır makinesi hata kodları: E16'dan E28'e resmî liste"
description: "Bosch'un yayımladığı on çamaşır makinesi kodu: E16, E17, E18, E19, E20, E23, E25, E26, E27, E28. Anlamları, Bosch'un kendi çözümü ve servis sınırı."
slug: "bosch-camasir-makinesi-hata-kodlari"
date: "2026-06-19"
updated: "2026-08-22"
category: "Çamaşır makinesi"
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
faq:
  - q: "Bosch çamaşır makinesi F18 (E18) ne demek?"
    a: "E18/F18, makinenin atık suyu tahliye edemediğini gösterir; tamburda su kalmış olabilir. Bosch'un kendi sayfası bunu çoğu zaman kullanıcının çözebileceğini söylüyor: tahliye hortumunun bükülmediğini kontrol et, alt kapağı açıp pompa filtresine yabancı cisim kaçıp kaçmadığına bak. Aynı arıza bazı Bosch modellerinde d02 koduyla da görünür."
  - q: "Bosch'ta E ve F kodları arasındaki fark ne?"
    a: "Aynı arıza, model neslinine göre farklı önekle gösterilir: yeni Bosch modelleri 'E', eski modeller 'F' önekiyle aynı numarayı verir. Yani E18 ile F18 aynı anlama gelir. Bosch kendi sayfalarında da kodları 'E18 veya F18' biçiminde ikili yazar."
  - q: "Bosch F21 kodu ne anlama gelir?"
    a: "Bosch'un yayımladığı çamaşır makinesi listesinde F21 diye bir kod yok. İnternette çok dolaşan 'F21 motor kömürü' eşleşmesi BSH'nin hiçbir bölge sitesinde ve kılavuzunda geçmiyor. BSH'nin tahrik tarafı için kullandığı kod E80'dir. Ekranında F21 gördüğünü düşünüyorsan kodu bir kez daha kontrol et ve kendi modelinin kılavuzundan teyit et."
  - q: "Siemens ve Neff'te de aynı kodlar mı geçerli?"
    a: "Siemens'te evet: Siemens'in kendi destek sayfalarındaki tablo Bosch'unkiyle kelime kelime aynıdır. Neff için aynı şeyi söyleyemiyoruz; Neff BSH grubunun markası olmasına rağmen kendi sitesinde bir hata kodu sayfası yayımlamıyor. Platform ortaklığı belgeli, kod tablosu ortaklığı değil."
  - q: "Bosch çamaşır makinesinde köpük (kabarcık) işareti ne demek?"
    a: "Köpük/kabarcık sembolü aşırı köpük algılandığını gösterir; bir hata kodu değildir. Daha az ve makineye uygun deterjan kullan — program köpüğü atmak için kendini uzatabilir. Sürekli çıkıyorsa deterjan dozunu ve cinsini gözden geçir."
  - q: "Ekrandaki kod bu listede yok, ne yapmalıyım?"
    a: "Bosch yüzlerce model üretir ve yayımladığı liste on kodludur. Bu listenin dışında kalan numaraların anlamını uydurmayız; yanlış teşhis pahalıya patlar. Ekrandaki kodu ve cihaz modelini Benservis'e yaz, olası arızayı ve tahmini maliyeti saniyede söyleyelim."
images:
  coverAlt: "Çamaşır odasında yan yana duran iki ön yüklemeli makine ve arkalarındaki mavi duvar"
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
| **E23 / F23** | Aquastop etkinleştirildi | 🔧 "Kendi kendine düzeltilemez" — servis |
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

Bunlar uydurma kodlar değil, ama **Bosch'un Türkiye sayfasında geçmiyorlar.** Kendi modelinin kılavuzundan teyit et.

## Öne çıkan kodlar

### E18 / F18 — Atık su tahliye edilemiyor
En sık çıkan Bosch koddur ve Bosch bunu kullanıcının çözebileceğini açıkça yazıyor. Tamburda su kalmış olabilir. Önce **tahliye hortumunun** su akışını engellemediğinden, bükülmediğinden ve katlanmadığından emin ol. Sonra alt kısımdaki kapağı açıp **pompa filtresine** bozuk para, düğme gibi yabancı bir cisim kaçıp kaçmadığını kontrol et (havlu hazırla, su gelir).

Makine hâlâ suyu pompalamıyorsa pompada arıza olabilir; orası servis işidir.

> ℹ️ Aynı arıza bazı Bosch modellerinde **d02** koduyla görünür — Bosch'un kendi sayfası bunu böyle yazıyor. Farklı kod, aynı iş.

### E17 / F17 — Su besleme süresi aşıldı
Bosch'un verdiği çözüm tek cümle: **musluğu açın.** Pratikte musluğun tam açık olduğunu, evde su olduğunu ve giriş hortumunun ezilmediğini kontrol etmek gerekir. Hortumun makine tarafındaki küçük süzgeci de kireçle tıkanabilir.

### E23 / F23 — Aquastop etkinleştirildi
Makine bir su kaçağı algılamış ve Aquastop güvenliği devreye girmiştir. Bosch bu kod için net: *"kendi kendine düzeltilemez"*. Kaynağı (conta, hortum, pompa) servis bulmalıdır.

### E20 / F20 — Beklenmeyen ısınma
Listedeki en az bilinen koddur ve iyi haber taşır: Bosch burada önce **makineyi açıp kapatarak sıfırlamayı** öneriyor. Yani her E20 bir arıza değildir; geçici bir okuma hatasından da gelebilir. Reset sonrası tekrar geliyorsa servis.

## "Ben F21 aramıştım" — o kodun durumu

Bu bölüm bilerek burada. **"Bosch F21 motor kömürü"** eşleşmesi internette çok yaygın ama **BSH'nin hiçbir bölge sitesinde ve kılavuzunda geçmiyor.** Aynı durum şu numaralar için de geçerli:

| Aradığın kod | Durumu |
|---|---|
| **F21** | BSH listelerinde yok. Tahrik/motor tarafının kodu **E80** |
| **F31** | Yok. BSH'de köpük kodu **E33 / F33** |
| **F42 · F43** | Yok |
| **F61** | Yok. Kapı kodları **E16/F16** ve **E34/F34** |
| **F63** | Yok |

Bunları listemizden çıkardık. Ekranında gerçekten bu numaralardan birini görüyorsan kodu bir kez daha kontrol et ve kendi modelinin kılavuzundan teyit et — çünkü yanlış kod, yanlış parçaya ve gereksiz masrafa yönlendirir.

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
Bosch yüzlerce farklı model üretir ve yayımladığı liste on kodludur. Bu listenin dışındaki numaralara **uydurma bir anlam vermeyiz** — yanlış teşhis sana pahalıya patlar. Ekrandaki kodu ve cihaz modelini [Benservis'e yaz](/); olası arızayı, kendin çözüp çözemeyeceğini ve tahmini maliyeti saniyede söyleyelim.

> 🔧 **Servis çağırmadan önce:** Cihazının markasını ve belirtiyi yaz — Benservis olası arızayı ve **tahmini maliyet aralığını** ücretsiz söylesin, sonra sana en yakın Google puanlı servisleri göstersin. [Ücretsiz teşhis et →](/)

## Tahmini tamir maliyeti
Hangi işin ne kadar tuttuğunu belirleyen faktörler: [Çamaşır makinesi tamirinde fiyatı ne belirler?](/blog/camasir-makinesi-tamiri-kac-para/)

İlgili: [Çamaşır makinesi hata kodları (marka marka)](/blog/camasir-makinesi-hata-kodlari/) · [Su almıyor](/blog/camasir-makinesi-su-almiyor/) · [Su atmıyor](/blog/camasir-makinesi-su-atmiyor/) · [Işıklar yanıp sönüyor](/blog/camasir-makinesi-isik-yanip-sonuyor/)

## Sık sorulan sorular

**E18 / F18 ne demek?**
Atık su tahliye edilemiyor. Tahliye hortumunu ve pompa filtresini kontrol et; Bosch bunu kullanıcının çözebileceğini yazıyor.

**E ve F farkı ne?**
Yeni modeller E, eski modeller F önekiyle aynı numarayı gösterir (E18 = F18).

**F21 ne anlama gelir?**
Bosch'un listesinde F21 diye bir kod yok. Tahrik/motor tarafının BSH kodu E80'dir.

**Siemens/Neff'te aynı mı?**
Siemens'te evet, tablo kelime kelime aynı. Neff kendi kod sayfasını yayımlamıyor, o yüzden aynı şeyi söyleyemiyoruz.
