---
title: "Vestel çamaşır makinesi resetleme nasıl yapılır"
description: "Vestel çamaşır makinesinde reset, kılavuzdaki adıyla program iptali: düğme İPTAL konumuna. CL kilidi, E01-E03 sonrası doğru sıra ve servis sınırı."
slug: "vestel-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de vestel-camasir-makinesi-resetleme yok, repoda "reset" geçen slug yok.
#   vestel-camasir-makinesi-calismiyor / e01 / e02 / e03 ayrı sorgular; resetlemeye ayrılmış sayfa yok.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "vestel çamaşır makinesi" → 2. öneri "vestel çamaşır makinesi resetleme";
#   "vestel çamaşır makinesi resetleme" → "…nasıl yapılır", "…eko 9711", "vestel dokunmatik çamaşır makinesi resetleme".
# GSC https___www-5 (3 ay): "vestel çamaşır makinesi e01 hatası resetleme" 5 gösterim, poz 9.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile statik.vestel.com.tr'den yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) CMI 86201       https://statik.vestel.com.tr/webfiles/20264687_k.pdf  41 s.  md5 7a5f38c8ae4890b1b1e7e691f2de1950
#  (B) KCMI 98142 WIFI https://statik.vestel.com.tr/webfiles/20263189_k.pdf  49 s.  md5 9e654374ff661c2fb154e0c548526d7c
# Başlat/Beklet, çocuk kilidi, iptal A s.21-22, B s.27 · program bitimi A s.22 · küçük arızalar A s.30 · otomatik arıza uyarıları A s.32, B s.41 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · "dokunmatik model" için ayrı yöntem (belgede yok) · fişi çekerek kod silme · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: vestel-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Göstergede CL varsa çocuk kilidi açıktır; göstergedeki 4. ve 5. tuşa aynı anda 3 saniyeden uzun basarak kilidi kapat."
  - "Program düğmesini İPTAL konumuna getir; makine yıkamayı durdurur ve program iptal olur."
  - "İçeride su kaldıysa program düğmesini herhangi bir programa getir; makine suyu boşaltıp programı iptal eder."
  - "Göstergede E01, E02 ya da E03 varsa önce kodun sebebini gider: kapı, musluk ya da pompa filtresi."
  - "Yeni programı seç ve Başlat / Beklet tuşuyla başlat."
  - "Makine hiç tepki vermiyorsa fişi, sigortayı, elektriği, Açma / Kapama'yı ve kapıyı kontrol et."
  - "Kod tekrar ediyor ya da program başlamıyorsa fişi çekip musluğu kapat ve Vestel yetkili servisine haber ver."
faq:
  - q: "Vestel çamaşır makinesinde reset tuşu var mı?"
    a: "Vestel'in CMI 86201 ve KCMI 98142 WIFI kılavuzlarında Reset adında bir tuş yok. Karşılığı Çalışmakta olan bir programı iptal etmek istiyorsanız bölümü: program düğmesini İPTAL konumuna getirirsin, makine yıkamayı durdurur ve program iptal olur."
  - q: "Vestel çamaşır makinesi E01 hatası resetleme nasıl yapılır?"
    a: "Önce kodun sebebini gider. Vestel'in otomatik arıza uyarıları tablosuna göre E01, makinenin kapısının açık kalması. Kapıyı kapat; makine hâlâ hata veriyorsa tablo makineyi kapatıp fişini çekmeyi ve en yakın yetkili servise başvurmayı söylüyor. Kod giderilmeden programı iptal edip yeniden başlatmak sorunu çözmez."
  - q: "Düğmeyi İPTAL'e getirdim ama makine yıkamaya devam ediyor."
    a: "Çocuk kilidi açık olabilir. Kılavuza göre bir program çalışırken çocuk kilidi devredeyse program düğmesi İPTAL konumuna getirilip başka bir program seçilse bile önceki program kaldığı yerden devam eder. Göstergede CL sembolünü görürsün; önce kilidi kapat."
  - q: "Göstergedeki Başlat / Beklet ledi yanıp sönüyor, makine bozuldu mu?"
    a: "Hayır. Kılavuza göre makine bekleme moduna alındığında göstergedeki Başlat / Beklet ledi yanıp söner. Programa devam etmek için Başlat / Beklet tuşuna bas."
  - q: "Dokunmatik Vestel modelde resetleme farklı mı?"
    a: "İncelediğimiz iki Vestel kılavuzu da iptali program düğmesinin İPTAL konumuyla anlatıyor; dokunmatik panel için ayrı bir sıfırlama yöntemi bu belgelerde yok. Kendi modelinin kılavuzundaki Çalışmakta olan bir programı iptal etmek bölümüne bak."
images:
  coverAlt: "Aydınlık bir çamaşır odasında beyaz, ön yüklemeli bir çamaşır makinesi"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda ilgili filtre"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
---

Program takıldı, göstergede bir kod var ya da makine söz dinlemiyor; Vestel çamaşır makinesini "resetlemek" istiyorsun. Vestel'in kılavuzlarında **Reset adında bir tuş yok.** Kılavuzdaki karşılığı **"Çalışmakta olan bir programı iptal etmek istiyorsanız"** bölümü ve yolu tek cümle: **program düğmesini İPTAL konumuna getir.** Bu yazıda Vestel'in CMI 86201 ve KCMI 98142 WIFI kullanma kılavuzlarından sıfırlamanın doğru sırasını, onu engelleyen çocuk kilidini ve bir hata kodundan sonra neden önce sebebin giderilmesi gerektiğini çıkardık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** CL yanıyorsa önce çocuk kilidini kapat. Program düğmesini İPTAL'e getir. Su kaldıysa düğmeyi herhangi bir programa getir, makine boşaltıp iptal eder. E01–E03 varsa önce kodun sebebini gider. Sonra yeni programı Başlat / Beklet ile başlat. Kod geri geliyorsa fişi çek, musluğu kapat, Vestel yetkili servisi.

## Göstergede ne var

| Gördüğün | Kılavuza göre anlamı | Önce ne yapılır |
|---|---|---|
| **CL** | Çocuk kilidi devrede | 🛠️ 4. ve 5. tuş, 3 saniyeden uzun |
| **Başlat / Beklet ledi yanıp sönüyor** | Makine bekleme modunda | Başlat / Beklet'e bas |
| **E01** | Kapı açık kalmış | 🛠️ Kapıyı kapat |
| **E02** | Su basıncı ya da kazan su seviyesi düşük | 🛠️ Musluğu sonuna kadar aç |
| **E03** | Pompa ya da pompa filtresi | 🛠️ Pompa filtresini temizle |
| **E04** | Makinede aşırı su var | ⏳ Makine kendisi boşaltır |

## Adım adım: Vestel çamaşır makinesini sıfırlama

**1. CL varsa önce kilit.** İki kılavuza göre çocuk kilidi, göstergedeki **4. ve 5. tuşa aynı anda 3 saniyeden uzun** basıldığında devreye girer ve göstergede **"CL"** yanar. Kilit açıkken bir tuşa basılırsa CL yanıp söner. Sıfırlamayı engelleyen not şu: program çalışırken çocuk kilidi devredeyse **program düğmesi İPTAL konumuna getirilip başka bir program seçilse bile önceki program kaldığı yerden devam eder.** Kilidi kapatmak için aynı tuşlara yine **3 saniyeden uzun** bas; CL söner.

**2. Düğmeyi İPTAL'e getir.** Kılavuzun tarifi: **program düğmesini "İPTAL" konumuna getirin; makineniz yıkama işlemini durduracak ve program iptal olacaktır.** Vestel'de sıfırlama bu kadar.

**3. Suyu boşalt.** İptal anında içeride su olabilir. Kılavuza göre suyu boşaltmak için **program düğmesini herhangi bir programa getir;** makine **gerekli boşaltma işlemini yapıp programı iptal eder.** Kapak su varken kilitli kalır; boşaltma bitmeden zorlama. Ayrıntı [Vestel çamaşır makinesi kapak açılmıyor](/blog/vestel-camasir-makinesi-kapak-acilmiyor/) yazısında.

**4. Kod varsa önce sebebi gider.** Vestel makineleri yıkama sırasında kendini sürekli kontrol eder ve bir sorun görünce göstergede kodla uyarır. Programı iptal edip yeniden başlatmak kodun sebebini ortadan kaldırmaz. Otomatik arıza uyarıları tablosuna göre: **E01** kapı açık kalmış, kapıyı kapat. **E02** su basıncı ya da kazan su seviyesi düşük, musluğu sonuna kadar aç ve suyun kesik olup olmadığına bak. **E03** pompa arızalı, pompa filtresi tıkalı ya da pompanın elektrik bağlantısı arızalı; pompa filtresini temizle. **E04** makinede aşırı su var; makine suyu kendiliğinden boşaltır. Kodların ayrıntılı tarifi [E01](/blog/vestel-camasir-makinesi-e01-hatasi/), [E02](/blog/vestel-camasir-makinesi-e02-hatasi/) ve [E03](/blog/vestel-camasir-makinesi-e03-hatasi/) yazılarında.

**5. Yeni programı başlat.** Sebep giderildikten sonra kılavuza göre makineyi **yeni bir program seçerek** çalıştırabilirsin. **Başlat / Beklet** tuşu seçilen programı başlatır ve çalışan programı beklemeye alır. Makine bekleme modundayken göstergedeki **Başlat / Beklet ledi yanıp söner**; bu bir arıza değil.

**6. Hiç tepki yoksa temel kontroller.** Küçük arızalar tablosunda "makineniz çalışmaya başlamıyor" satırının sebepleri: **fiş prize takılı değil, sigorta arızalı, elektrik kesik, Başlat / Beklet tuşuna basılmamış, Açma / Kapama butonuna basılmamış, makinenin kapısı tam kapalı değil.** Sıfırlamaya geçmeden önce bunlara bak. Daha fazlası [Vestel çamaşır makinesi çalışmıyor](/blog/vestel-camasir-makinesi-calismiyor/) yazısında.

**7. Kod geri geliyorsa servis.** Kılavuzun küçük arızalar bölümü, arızayı gideremediğinde önce **fişi prizden çekmeni ve su musluğunu kapatmanı**, sonra yetkili servise başvurmanı istiyor. E01 ve E02 satırlarının son cümlesi de aynı yere çıkıyor: sorun sürerse **Vestel yetkili servisi.** E04'te ise boşaltma bittikten sonra fişi çekip musluğu kapatarak **danışma hattını** aramanı söylüyor.

## Program bitince

Kılavuza göre program bittiğinde makine kendiliğinden durur ve göstergede **"End"** yazar. Çamaşırı aldıktan sonra **program düğmesini İPTAL konumuna getir, fişi çek, musluğu kapat**; makinenin içinin kuruması için kapağı açık bırak. Bir sonraki yıkamaya bu düzenle başlarsan takılan program sayısı da azalır.

## Ne zaman servis

- Düğme İPTAL'de, CL yok, ama makine yıkamaya devam ediyorsa
- Su boşaltma bitmiyorsa
- E01–E04 kodlarından biri tablodaki işlemden sonra geri geliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Program düğmesi, tuşlar, çocuk kilidi, musluk ve pompa filtresi sende; gövdenin içi, pompa, elektronik kart ve kapak kilidi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ne?
2. Göstergede CL, End ya da bir E kodu var mı?
3. Düğmeyi İPTAL'e getirince ne oldu?
4. İçeride su var mı, kapak açılıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bütün kodlar [Vestel çamaşır makinesi hata kodları](/blog/vestel-camasir-makinesi-hata-kodlari/) sayfasında. Bil, gör, çağır.
