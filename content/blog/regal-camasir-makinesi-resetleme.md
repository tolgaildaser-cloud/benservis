---
title: "Regal çamaşır makinesi resetleme nasıl yapılır"
description: "Regal çamaşır makinesinde reset, kılavuzdaki adıyla programı iptal etmek: düğmeyi İPTAL konumuna getir, suyu boşalt. CL çocuk kilidi ve servis sınırı."
slug: "regal-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de regal-camasir-makinesi-resetleme yok, repoda "reset" geçen slug yok;
#   Regal çamaşırda yalnız regal-camasir-makinesi-su-almiyor var.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "regal çamaşır makinesi" → 2. öneri "regal çamaşır makinesi resetleme";
#   "regal çamaşır makinesi resetleme" → "…nasıl yapılır", "regal pratica çamaşır makinesi resetleme", "vestel regal çamaşır makinesi resetleme". GSC: satır yok.
# Belgeler: regal-tr.com ürün sayfalarındaki "Kullanım Kılavuzu" bağlantısı → statik.vestel.com.tr (Regal, Vestel çatısındaki marka).
#   Bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) CMI 100122 / CMI 100122 G  https://statik.vestel.com.tr/webfiles/20268729_k.pdf  40 s.  md5 2c4393417f13bb73b069981ab6a4ef32
#  (B) CMI 71101                  https://statik.vestel.com.tr/webfiles/20350104_k.pdf  40 s.  md5 09852f9fd5d5735589cc98944b2779a3
# Başlat/Beklet ve çocuk kilidi A s.21, B s.21-22 · iptal A s.21-22, B s.22 · program bitimi A s.22 · küçük arızalar A s.30 · otomatik arıza uyarıları A s.32 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · fişi çekerek reset · E kodlarını silme hilesi · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: regal-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Göstergede CL yanıyorsa çocuk kilidi açıktır; kılavuzdaki iki tuşa birlikte 3 saniyeden uzun basarak kilidi kapat."
  - "Program düğmesini İPTAL konumuna getir; makine yıkamayı durdurur ve program iptal olur."
  - "İçerideki suyu boşaltmak için program düğmesini herhangi bir programa getir ve makinenin boşaltmayı bitirmesini bekle."
  - "Yeni programı seç ve Başlat / Beklet tuşuna basarak başlat."
  - "Makine hiç çalışmıyorsa fişi, sigortayı, elektriği, Açma / Kapama'yı ve kapının tam kapandığını kontrol et."
  - "Göstergede E ile başlayan bir kod varsa kılavuzun otomatik arıza uyarıları tablosundaki işlemi uygula."
  - "İptal ve kontrollerden sonra da program başlamıyorsa ya da kod tekrar ediyorsa yetkili servise haber ver."
faq:
  - q: "Regal çamaşır makinesinde reset tuşu var mı?"
    a: "Regal'in CMI 100122 ve CMI 71101 kılavuzlarında Reset adında bir tuş yok. Karşılığı Çalışmakta olan bir programı iptal etmek istiyorsanız bölümü: program düğmesini İPTAL konumuna getirirsin, makine yıkama işlemini durdurur ve program iptal olur."
  - q: "Regal çamaşır makinesi resetleme yapmıyor, neden?"
    a: "Muhtemelen çocuk kilidi açık. Kılavuza göre bir program çalışırken çocuk kilidi devredeyse program düğmesi İPTAL konumuna getirilip başka bir program seçilse bile daha önce çalışan program kaldığı yerden devam eder. Göstergede CL sembolü görürsün; önce kilidi kapat."
  - q: "Regal çamaşır makinesinin çocuk kilidi nasıl kapatılır?"
    a: "Modele göre tuşlar değişiyor. CMI 100122'de göstergedeki 4. ve 5. tuşa, CMI 71101'de 2. ve 3. tuşa aynı anda 3 saniyeden uzun basılarak kilit devreye girer; devreden çıkarmak için aynı tuşlara yine 3 saniyeden uzun basılır. Kilit kapanınca CL sembolü söner."
  - q: "İptalden sonra makinenin içinde su kaldı, nasıl boşaltırım?"
    a: "Kılavuza göre makine içindeki suyu boşaltmak için program düğmesini herhangi bir programa getirirsin; makine gerekli boşaltma işlemini yapıp programı iptal eder. Sonra yeni bir program seçerek çalıştırabilirsin."
  - q: "Göstergede E01 ya da E02 var, iptal etmek yeter mi?"
    a: "Hayır, önce kodun gösterdiği sorunu gider. Regal'in otomatik arıza uyarıları tablosuna göre E01 kapının açık kalması, E02 su basıncının ya da kazan su seviyesinin düşük olması, E03 pompa ya da pompa filtresi, E04 makinede aşırı su. Tablodaki işlemden sonra kod sürüyorsa yetkili servis."
images:
  coverAlt: "Küçük bir çamaşır odasında beyaz, ön yüklemeli bir çamaşır makinesi"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kullanım kılavuzu ve tablosu"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Program takıldı ya da yanlış programı başlattın; Regal çamaşır makinesini "resetlemek" istiyorsun. Regal'in kılavuzlarında **Reset adında bir tuş yok.** Karşılığı kılavuzun **"Çalışmakta olan bir programı iptal etmek istiyorsanız"** bölümü ve yolu çok basit: **program düğmesi İPTAL konumuna.** Bu yazıda Regal'in CMI 100122 ve CMI 71101 kullanma kılavuzlarından sıfırlamanın sırasını, onu engelleyen çocuk kilidini ve iptalin işe yaramadığı durumları çıkardık. Tuş numaraları modele göre değişiyor; kendi kılavuzuna bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Göstergede CL varsa önce çocuk kilidini kapat. Program düğmesini İPTAL konumuna getir. Su kaldıysa düğmeyi herhangi bir programa getir, makine boşaltıp iptal eder. Sonra yeni programı Başlat / Beklet ile başlat. E kodu varsa önce o kodun işlemini uygula. Olmuyorsa yetkili servis.

## Göstergede ne var

| Gördüğün | Kılavuza göre anlamı | Ne yaparsın |
|---|---|---|
| **CL sabit yanıyor** | Çocuk kilidi devrede | 🛠️ Kilidi kapat |
| **CL yanıp sönüyor** | Kilit açıkken bir tuşa basıldı | 🛠️ Kilidi kapat |
| **Başlat / Beklet ledi yanıp sönüyor** | Makine bekleme modunda | Başlat / Beklet'e bas |
| **End** | Program bitti | Düğmeyi İPTAL'e getir |
| **E01 – E04** | Otomatik arıza uyarısı | 🛠️ Tablodaki işlem, sürerse servis |

## Adım adım: Regal çamaşır makinesini sıfırlama

**1. Çocuk kilidini kapat.** Regal kılavuzlarına göre çocuk kilidi devreye girdiğinde göstergede **"CL"** sembolü yanar; kilit açıkken bir tuşa basılırsa CL yanıp söner. Asıl önemli not şu: bir program çalışırken çocuk kilidi devredeyse **program düğmesi "İPTAL" konumuna getirilip başka bir program seçilse bile, daha önce çalışan program kaldığı yerden devam eder.** Yani kilit açıkken sıfırlama olmaz. Kilit CMI 100122'de göstergedeki **4. ve 5. tuşa**, CMI 71101'de **2. ve 3. tuşa** aynı anda **3 saniyeden uzun** basılarak devreye girer; devreden çıkarmak için **aynı tuşlara yine 3 saniyeden uzun** basılır ve CL söner.

**2. Düğmeyi İPTAL konumuna getir.** Kılavuzun tarifi: **program düğmesini "İPTAL" konumuna getirin; makineniz yıkama işlemini durduracak ve program iptal olacaktır.** Ek bir tuş kombinasyonu ya da bekleme süresi yok.

**3. Suyu boşalt.** İptal anında içeride su kalmış olabilir. Kılavuza göre suyu boşaltmak için **program düğmesini herhangi bir programa getir**; makine **gerekli boşaltma işlemini yapıp programı iptal eder.** Bu arada düğmeyi tekrar tekrar çevirmek yerine boşaltmanın bitmesini bekle.

**4. Yeni programı başlat.** Kılavuza göre makineni **yeni bir program seçerek** çalıştırabilirsin. Programı seçtikten sonra **Başlat / Beklet** tuşuna bas; bu tuş seçilen programı başlatır, çalışan programı beklemeye alır. Makine bekleme modundayken göstergedeki **Başlat / Beklet ledi yanıp söner**; bu durumda makine bozuk değil, sadece duraklatılmış.

**5. Hiç çalışmıyorsa temel kontroller.** Regal'in küçük arızalar tablosunda "makineniz çalışmaya başlamıyor" satırının sebepleri sırayla şunlar: **fiş prize takılı değil, sigorta arızalı, elektrik kesik, Başlat / Beklet tuşuna basılmamış, Açma / Kapama butonuna basılmamış, makinenin kapısı tam olarak kapalı değil.** Sıfırlama denemeden önce bunların hepsine bak.

**6. Göstergede E kodu var mı.** Regal makineleri yıkama sırasında kendini kontrol eder ve sorun olunca bir kodla uyarır. CMI 100122 kılavuzunun otomatik arıza uyarıları tablosuna göre: **E01** makinenin kapısı açık kalmış; kapıyı kapat. **E02** su basıncı ya da kazan su seviyesi düşük; musluğu sonuna kadar aç, su kesik mi kontrol et. **E03** pompa arızalı, pompa filtresi tıkalı ya da pompanın elektrik bağlantısı arızalı; pompa filtresini temizle. **E04** makinede aşırı su var; makine suyu kendiliğinden boşaltır. Programı iptal etmek bu kodların sebebini ortadan kaldırmaz. Su tarafı için [Regal çamaşır makinesi su almıyor](/blog/regal-camasir-makinesi-su-almiyor/) yazısına bak.

**7. Olmuyorsa servis.** Kilit kapalı, düğme İPTAL'den geçirildi, temel kontroller tamam, ama program yine başlamıyor ya da aynı kod geri geliyorsa ev ayar turu bitmiştir. Kılavuzun tablosu E01 ve E02 sürerse **fişi çekip yetkili servise başvurmayı**, E04'te boşaltma bittikten sonra fişi çekip musluğu kapatarak **danışma hattını aramayı** söylüyor.

## Program bitince ne yapılır

Kılavuza göre program sona erdiğinde makine kendiliğinden durur ve göstergede **"End"** yazar. Çamaşırları aldıktan sonra **program düğmesini İPTAL konumuna getir, fişi prizden çek, su musluğunu kapat.** Kapağı açık bırakmak da makinenin içinin kurumasına yardım eder. Bir sonraki yıkamaya bu temiz başlangıçla geçersen sıfırlama ihtiyacı da azalır.

## Ne zaman servis

- Düğme İPTAL'e getirildiği hâlde makine yıkamaya devam ediyor ve CL görünmüyorsa
- Su boşaltma bitmiyor ya da kapak açılmıyorsa
- E01–E04 kodlarından biri tablodaki işlemden sonra geri geliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Program düğmesi, tuşlar, çocuk kilidi, musluk ve pompa filtresi sende; gövdenin içi, pompa, elektronik kart ve kapak kilidi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ne (CMI ile başlayan kod)?
2. Göstergede CL, End ya da bir E kodu var mı?
3. Düğmeyi İPTAL'e getirdiğinde ne oldu?
4. İçeride su var mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Marka bağımsız kontroller [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısında. Bil, gör, çağır.
