---
title: "Kurutma makinesi ışığı yanmıyor: Arçelik ve Bosch'a göre"
description: "Kurutma makinesi ışığı yanmıyor ya da yanıyor ama çalışmıyorsa Arçelik 3886 KT ve Bosch WQG244C1TR kılavuzu fişi, kapağı ve çocuk kilidini gösteriyor."
slug: "kurutma-makinesi-isigi-yanmiyor"
date: "2026-11-10"
category: "Kurutma makinesi"
updated: "2026-11-10"
kisaCevap: "Kurutma makinesinin ışığı hiç yanmıyorsa önce fişe ve açma düğmesine bak; Arçelik 3886 KT kılavuzu iç lamba için de aynı kontrolü, lamba bozuksa servisi gösteriyor. Işık var ama çalışmıyorsa neden kapak, Başla/Bekle ya da çocuk kilidi. Bosch WQG244C1TR'de ekran kararıp Başlat yanıp sönüyorsa enerji tasarrufu açıktır."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 1; BOSLUK.md sürüm 4 #303 "kurutma makinesi ışığı yanmıyor / ışığı yanıyor ama çalışmıyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Jenerik "kurutma makinesi çalışmıyor" yazısı main'de yok; yalnız marka yazıları (arcelik-, bosch-, samsung-, haier-, ugur-kurutma-makinesi-calismiyor). Yakın: kurutma-makinesi-programi-bitmeden-duruyor, kurutma-makinesi-su-tanki-dolu-uyarisi.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "kurutma makinesi ışığı" #1 "…yanmıyor", #2 "…yanıyor ama çalışmıyor", #3 "…tambur ışığı ne işe yarar", #6 "…tambur ışığı"; "kurutma makinesi ışıkları" #1 "…yanmıyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Arçelik 3886 KT / KTS / KTR çamaşır kurutma makinesi kullanma kılavuzu, doküman 2960310873 (36 s. PDF) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180102154833_User%20Manual%20-%20Filetr_TR.pdf md5 62fe5d46146e92058583492074c9d509 — PDF s.23, 24, 30, 31 · (B) Bosch WQG244C1TR kurutma makinesi kullanım kılavuzu ve kurulum talimatları (40 s. PDF) https://media3.bsh-group.com/Documents/9001847050_E.pdf md5 7ff40c3f2504844ca9cbd584bda38b53 — PDF s.16, 22, 23, 27, 31, 32, 33.
# BİLEREK YAZILMAYANLAR: iç lamba değişimi (Arçelik: Yetkili Servis) · kart, kapak kilidi, motor teşhisi · priz ve tesisat ölçümü · fiyat (#46).
# Alıntı denetimi: kurutma-makinesi-isigi-yanmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kurutma makinesinin kullanma kılavuzu"]
steps:
  - "Fişin takılı olduğunu ve sigortayı kontrol et."
  - "Makineyi açma düğmesinden ya da program düğmesinden aç."
  - "Ekran karanlıksa ve Başlat yanıp sönüyorsa Başlat'a bas."
  - "Yükleme kapağını kapanma sesini duyana kadar it."
  - "Çocuk kilidi ve bitiş süresi ayarına bak."
  - "Su tankı uyarısı yanıyorsa tankı boşalt."
  - "Hata sürüyorsa makineyi güçten ayırıp yeniden dene."
faq:
  - q: "Kurutma makinesinin tambur ışığı neden yanmıyor?"
    a: "Arçelik 3886 KT kılavuzuna göre lambalı modellerde iç aydınlatma yanmıyorsa makine açma kapama düğmesiyle açılmamıştır ya da lamba bozuktur. Makine açıksa ve lamba yine yanmıyorsa lambanın değiştirilmesi için Yetkili Servise başvurulmasını istiyor."
  - q: "Kurutma makinesinin ışığı yanıyor ama çalışmıyor, neden?"
    a: "Arçelik sorun tablosu dört neden sayıyor: fiş takılı değil, yükleme kapağı açık, Başla / Bekle düğmesine basılmamış ya da çocuk kilidi devrede. Bosch WQG244C1TR'de program çalışmaya başlamıyorsa neden etkin çocuk kilidi ya da kalan süre ayarıdır."
  - q: "Bosch kurutma makinesinde ekran karanlık, Başlat yanıp sönüyor; ne demek?"
    a: "Bosch WQG244C1TR kılavuzunda bu, enerji tasarrufu modunun aktif olduğu anlamına geliyor. Başlat / Reload tuşuna basınca ekran geri geliyor. Başlat ışığı yanıp sönerken program başlatılabilir ya da devam ettirilebilir durumda."
  - q: "Kurutma makinesinin iç ışığı sürekli yanıyor, normal mi?"
    a: "Arçelik'e göre fiş takılı, açma kapama düğmesi basılı ve kapak açıksa iç ışık yanar. Söndürmek için makinenin fişini çıkarmanı ya da açma kapama düğmesini kapalı konuma getirmeni istiyor."
images:
  coverAlt: "Kapağı açık, içi karanlık sade kurutma makinesi çizimi"
  steps:
    - "Prize takılı fişi kontrol eden beyaz eldivenli sade siluet el"
    - "Program düğmesini çeviren beyaz eldivenli sade siluet el çizimi"
    - "Başlat tuşuna basan beyaz eldivenli sade siluet el çizimi"
    - "Yükleme kapağını iterek kapatan beyaz eldivenli sade siluet el"
    - "Paneldeki kilit simgesini gösteren beyaz eldivenli sade siluet el"
    - "Su tankını çekmeceden çıkaran beyaz eldivenli sade siluet el"
    - "Fişi prizden çeken beyaz eldivenli sade siluet el çizimi"
---

Kurutma makinesinin ışığı hiç yanmıyorsa önce fişe ve açma düğmesine bak. Arçelik 3886 KT kılavuzu "kurutma makinesi açılmıyor veya program başlatılamıyor" sorununda ilk neden olarak takılmamış elektrik fişini sayıyor; lambalı modellerde iç aydınlatma yanmıyorsa da makinenin açma kapama düğmesiyle açılıp açılmadığını kontrol etmeni, lamba bozuksa Yetkili Servise başvurmanı istiyor.

Işıklar yanıyor ama makine çalışmıyorsa Arçelik bunun için açık kalmış yükleme kapağını, basılmamış Başla / Bekle düğmesini ve devredeki çocuk kilidini gösteriyor. Bosch WQG244C1TR kılavuzunda ekran karanlık ve Başlat / Reload yanıp sönüyorsa enerji tasarrufu modu aktif; tuşa basınca ekran geri geliyor. Kendi makinenin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Güvenlik.** Fiş, kablo ya da priz hasarlıysa makineyi kullanma. Bosch usulüne aykırı onarımların elektrik çarpması tehlikesi taşıdığını, cihazı yalnız eğitimli uzman personelin onarmasını yazıyor. Lamba değişimi de Arçelik'e göre Yetkili Servis işidir.

## Kurutma makinesi ışığı neden yanmaz ya da yanar ama çalışmaz?

| Belirti | Arçelik 3886 KT | Bosch WQG244C1TR |
|---|---|---|
| Hiç ışık yok | Fiş takılı değil | Program seçme düğmesi Kapalı konumda |
| İç ışık yanmıyor | Makine açık değil ya da lamba bozuk | Kılavuzda tarif yok |
| Ekran karanlık, Başlat yanıp sönüyor | Kılavuzda tarif yok | Enerji tasarrufu modu |
| Işık var, program başlamıyor | Kapak açık, Başla / Bekle, çocuk kilidi | Çocuk kilidi, kalan süre |
| Program yarıda kaldı | Kapak, elektrik kesintisi, su tankı | Yoğuşma suyu kabı dolu |

## Adım adım: kurutma makinesi ışığı yanmıyorsa ne yapılır?

**1. Fişin takılı olduğunu ve sigortayı kontrol et.** Arçelik ilk adım olarak elektrik fişinin takılı olduğunu kontrol etmeni istiyor. Sigorta kutusunda makinenin sigortası kapalıysa aç; sigorta tekrar tekrar atıyorsa makineyi kullanma ve servise haber ver.

**2. Makineyi açma düğmesinden ya da program düğmesinden aç.** Arçelik iç aydınlatmanın yanmamasını önce makinenin açılmamış olmasına bağlıyor. Bosch'ta cihazı açmak için program seçme düğmesini bir programa, kapatmak için Kapalı konumuna getiriyorsun.

**3. Ekran karanlıksa ve Başlat yanıp sönüyorsa Başlat'a bas.** Bosch bunu enerji tasarrufu modu olarak tanımlıyor. Bosch'ta Başlat / Reload yanıp sönerken program başlatılabilir; sürekli yanarken program devam ediyor.

**4. Yükleme kapağını kapanma sesini duyana kadar it.** Arçelik açık kalmış kapağı program başlamamasının, tam kapanmamış kapağı programın nedensiz yarıda kesilmesinin nedeni sayıyor.

**5. Çocuk kilidi ve bitiş süresi ayarına bak.** Arçelik'te çocuk kilidi devredeyse açma kapama ve kilit düğmesi dışındaki tüm düğmeler devre dışı kalıyor. Bosch program çalışmaya başlamıyorsa çocuk kilidini kaldırmanı ve kalan süre seçeneğinin etkin olup olmadığına bakmanı istiyor.

**6. Su tankı uyarısı yanıyorsa tankı boşalt.** Arçelik programın nedensiz yarıda kesilmesinde dolu su tankını da neden sayıyor ve tankı boşaltmanı istiyor. Bosch da yoğuşma suyu kabı dolunca programı iptal ediyor.

**7. Hata sürüyorsa makineyi güçten ayırıp yeniden dene.** Bosch önce cihazı yeniden başlatmanı, arıza tekrar oluşursa en az 30 saniye güçten ayırmanı, sürerse müşteri hizmetlerini aramanı istiyor. Ararken hata mesajını eksiksiz söyle.

## Uyarı ışığı yanıyorsa makine neden durur?

Arçelik'e göre program bittiğinde lif filtresinin temizlenmesi ve su tankının boşaltılması gerektiğini gösteren uyarı sembolleri sürekli yanıyor. Program sürerken su tankı dolarsa uyarı sembolü yanıp sönmeye başlıyor ve makine beklemeye geçiyor; tankı boşaltıp Başla / Bekle düğmesine basınca program kaldığı yerden devam ediyor. Bosch'ta ekranda "CrE" görünüyorsa basit cihaz bakımı yapılması gerekiyor.

## Elektrik kesilince kurutma programı ne olur?

Arçelik'e göre elektrik kesintisinden sonra program kendiliğinden başlamıyor; programı başlatmak için Başla / Bekle düğmesine basman gerekiyor. Bosch'ta ekranda "Hot" görünüyor ve tambur dönüyorsa bu arıza değil: soğutma işlemi yaklaşık 10 dakika sürüyor ve bu sırada programı değiştirmemeni istiyor.

## İç ışık neden sürekli yanar?

Arçelik'te lambalı modellerde fiş takılı, açma kapama düğmesi basılı ve kapak açıksa iç ışık yanıyor. Işığı söndürmek için fişi çıkar ya da açma kapama düğmesini kapalı konuma getir. Kırışık önleme sembolü yanıyorsa program bitmiş, makine kalan çamaşırı kırışmasın diye döndürüyor; makineyi kapatıp çamaşırları çıkar.

## Bu konuda hangi yazılara bakılır?

Program yarıda kalıyorsa [kurutma makinesi programı bitmeden duruyor](/blog/kurutma-makinesi-programi-bitmeden-duruyor/), su tankı uyarısı için [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/), marka sorunları için [Arçelik kurutma makinesi çalışmıyor](/blog/arcelik-kurutma-makinesi-calismiyor/) ve [Bosch kurutma makinesi çalışmıyor](/blog/bosch-kurutma-makinesi-calismiyor/) yazısına bak.

---

**Kaynak künyesi.** Işık, ekran ve başlamama nedenleri Arçelik 3886 KT çamaşır kurutma makinesi kullanma kılavuzundan ve Bosch WQG244C1TR kurutma makinesi kullanım kılavuzundan alınmıştır. Kendi makinenin kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Fiş, kapak ve kilit kontrolünden sonra da makine açılmıyor ya da program başlamıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
