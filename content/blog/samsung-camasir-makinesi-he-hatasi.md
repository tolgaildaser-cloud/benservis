---
title: "Samsung çamaşır makinesi HE ve HE1 hatası ne demek?"
description: "Samsung çamaşır makinesinde HE, HE1, HE2, HE3, HC ve HOT kodları Samsung'a göre ne anlatıyor; evde hortum ve yeniden başlatma, sonra servis sınırı."
slug: "samsung-camasir-makinesi-he-hatasi"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork A). Konu seçimi: origin/main'de samsung-camasir-makinesi-he-hatasi yok
#   (Samsung çamaşırda 4C, 5C, DC, OC, UC, UE tek kod sayfaları ve hata-kodlari merkezi var; HE merkezde bir kez geçiyor; kopuk-yapiyor'daki
#   HE "yüksek etkililik deterjanı" anlamında, kod değil).
# GSC (https___www-5 son 3 ay, https___www-6 son 7 gün): bu sorguya gösterim YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "samsung çamaşır makinesi he":
#   1. "…he hatası" · 2. "…he1 hatası" · 3. "…hepsiburada"; tohum "samsung çamaşır makinesi he1": 1. "…he1 hatası".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından indirildi, hepsi HTTP 200. #88: üçüncü taraf kullanılmadı.
#  (U) Samsung UK "What do the codes on my washing machine mean?"  https://www.samsung.com/uk/support/home-appliances/what-do-the-codes-on-my-washing-machine-mean/
#      HTML md5 b19c93514b604dd1afd7480d0f8b41c1 (dinamik sayfa; md5 bu indirmenin) — H1/HC/HE, HE1, HE2, HE3, HOT satırları
#  (I) Samsung UK "Check out the information codes on my washing machine"  https://www.samsung.com/uk/support/home-appliances/check-out-the-information-codes-on-my-washing-machine/
#      HTML md5 1d44dfeae7fd27b6947d81a809a1c3bd (dinamik) — "HC, HE (High temperature heating)" satırı
#  (C) WW5000C kılavuzu TR, 68 s.  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf  md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
#  (T) WW4000T kılavuzu TR, 72 s.  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf  md5 2a8fa3df96d4d49f5da7294316f4a2ae
# HC satırı C s.59, T s.59 · soğuk su hortumu (4C2) C s.58, T s.58 · kapağı zorla açmama C s.8 · boşaltılan su sıcak C s.10 · uzatma kablosu yok C s.6.
#   Sayfa = PDF sayfası. UK sayfalarının metni İngilizce; yazıda Türkçeye çevrildi.
# BİLEREK YAZILMAYANLAR: rezistans/ısıtıcı ölçümü ya da değişimi (servis) · kireç çözücü önerisi (belgede HE ile ilişkilendirilmemiş) · HE'nin en sık nedeni · fiyat/süre (#46).
# Alıntı denetim tablosu: samsung-camasir-makinesi-he-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Çamaşır makinesinin kullanma kılavuzu"]
steps:
  - "Ekrandaki kodu tam oku; HE, HE1, HE2, HE3, HC ve HOT Samsung'da farklı anlamlara geliyor."
  - "Ekranda HOT yazıyorsa bekle; makine soğuyunca kapak kendiliğinden açılır, kapağı zorlama."
  - "Makineyi kapat, programı yeniden başlat ve kodun geri gelip gelmediğine bak."
  - "Su besleme hortumunun soğuk su musluğuna bağlı olduğunu kontrol et; sıcak su musluğuna bağlıysa düzelt."
  - "Yüksek sıcaklıkta yıkamadan sonra boşaltılan suya dokunma ve fişin doğrudan duvar prizinde olduğunu kontrol et."
  - "HE, HE1 ya da HE3 sürüyorsa modeli ve kodu not al, makineyi açmadan Samsung yetkili servisine haber ver."
faq:
  - q: "Samsung çamaşır makinesinde HE hatası ne demek?"
    a: "Samsung'un kod sayfasında H1, HC ve HE birlikte su sıcaklığı sorunu olarak geçiyor. Önerilen kontrol, su hortumunun sıcak değil soğuk su beslemesine bağlı olması. Samsung'un bilgi kodları sayfası HC ve HE'yi yüksek sıcaklık ısıtma kontrolü olarak veriyor ve makineyi kapatıp programı yeniden başlatmayı öneriyor. Kod ekranda kalmaya devam ederse Samsung servis merkezine başvurulmalı."
  - q: "HE1 hatası ile HE hatası aynı mı?"
    a: "Hayır. Samsung'a göre HE1, su ısıtıcısının çalışmadığını söylüyor ve tek talimat Samsung servis merkezine başvurmak. HE ise önce hortum bağlantısı ve yeniden başlatma ile kontrol edilebilecek bir su sıcaklığı uyarısı."
  - q: "HE2 ve HE3 ne anlatıyor?"
    a: "Samsung'a göre HE2, kurutma bölümünün ısıtıcısıyla ilgili: makine sıcaklığın fazla yükseldiğini algıladığı için kurutma bölümü güvenlik amacıyla kapanmış. HE3 ise buhar fonksiyonunun normal çalışmadığını söylüyor; bunun için de servis merkezine başvurulması isteniyor."
  - q: "Ekranda HOT yazıyor, bu arıza mı?"
    a: "Hayır. Samsung bunun arıza olmadığını, makinenin içinin çok sıcak olduğunu söylüyor. Fan, çamaşırların güvenle alınabileceği sıcaklığa, yani 55 °C'ye inene kadar çalışmaya devam eder; soğuyunca kapak kilidi açılır."
  - q: "TR kılavuzunda HE yok, HC var. Neden?"
    a: "Samsung'un yeni Türkçe kılavuzları kodları C ile bitiren biçimde veriyor: WW5000C ve WW4000T kılavuzlarında HC, yüksek sıcaklıkta ısıtma kontrolü. Samsung'un bilgi kodları sayfası HC ve HE'yi aynı satırda topluyor ve modele göre kodun farklı görünebileceğini not ediyor."
images:
  coverAlt: "Banyoda duran önden yüklemeli beyaz bir çamaşır makinesi ve kapalı cam kapağı"
  steps:
    - "Çamaşır makinesinin kontrol panelinde kısa bir kod gösteren küçük ekran"
    - "Cam kapağı kapalı, içi buharlı görünen önden yüklemeli bir çamaşır makinesi"
    - "Çamaşır makinesinin kontrol panelindeki güç düğmesinin yakın planı"
    - "Duvardaki mavi işaretli soğuk su musluğuna bağlı bir su besleme hortumu"
    - "Duvar prizine doğrudan takılı tek bir beyaz fiş"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve yanında bir not kâğıdı"
---

Yıkama sırasında makine durdu, ekranda **HE** ya da **HE1** yazıyor. Samsung çamaşır makinelerinde H ile başlayan kodlar ailesi sıcaklıkla ilgili, ama hepsi aynı şeyi söylemiyor: biri hortum bağlantısıyla ilgili, biri ısıtıcıyla, biri yalnız "makine çok sıcak, bekle" demek. Bu yazıda Samsung'un kendi kod sayfalarına ve WW5000C, WW4000T Türkçe kullanma kılavuzlarına göre her kodun anlamını ve evde güvenle yapabileceklerini topladık. Senin modelinde kod biraz farklı görünebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** HE ve HC, Samsung'a göre su sıcaklığı ya da yüksek sıcaklıkta ısıtma kontrolü. Makineyi kapatıp programı yeniden başlat, su hortumunun soğuk musluğa bağlı olduğuna bak. HOT arıza değil, soğumasını bekle. HE1 ve HE3'te iş doğrudan Samsung yetkili servisinin.

## Ekran ne söylüyor

| Ekranda gördüğün | Samsung'a göre anlamı | Kim ne yapar |
|---|---|---|
| **H1, HC, HE** | Su sıcaklığı sorunu / yüksek sıcaklık ısıtma kontrolü | 🛠️ Hortum, kapat-aç; sürerse servis |
| **HE1** | Su ısıtıcısı çalışmıyor | 🔧 Samsung servis merkezi |
| **HE2** | Kurutma bölümü aşırı sıcaklık algıladı, güvenlik için kapandı | ⏳ Bekle; tekrarlarsa servis |
| **HE3** | Buhar fonksiyonu normal çalışmıyor | 🔧 Samsung servis merkezi |
| **HOT** | Arıza değil; makine çok sıcak | ⏳ Soğumasını bekle |

## Adım adım: evde denenecekler

**1. Kodu tam oku.** Ekranda HE mi, HE1 mi, HC mi yazıyor? Samsung'un kod sayfası bu kodları ayrı satırlarda veriyor ve sayılarla harflerin karışabileceği konusunda uyarıyor; emin olamadığın kodu iki kez kontrol et. Yeni Türkçe kılavuzlarda (WW5000C, WW4000T) aynı ailenin karşılığı **HC: yüksek sıcaklıkta ısıtma kontrolü**. Samsung'un bilgi kodları sayfası HC ile HE'yi aynı satırda topluyor ve modele göre kodun farklı görünebileceğini not ediyor.

**2. HOT görüyorsan bekle.** Samsung'a göre HOT bir arıza değil: makinenin içi çok sıcak. Fan, çamaşırların güvenle alınabileceği **55 °C**'ye inene kadar çalışmaya devam eder; soğuyunca kapak kilidi açılır. Kılavuzun güvenlik bölümü de yüksek sıcaklıkta yıkama, kurutma ya da sıkma sırasında kapağın **zorla açılmamasını** istiyor; su taşması yanığa, kapağın zorlanması hasara ya da yaralanmaya yol açabilir.

**3. Kapat ve yeniden başlat.** Samsung'un bilgi kodları sayfası HC ve HE için tek bir çözüm veriyor: **makineyi kapatın ve programı yeniden başlatın.** Kod ekranda kalmaya devam ederse Samsung servis merkezine başvurulmasını istiyor. Türkçe kılavuzun HC satırı da aynı yönde: bilgi kodu kalırsa müşteri servis merkezine başvurun.

**4. Su hortumunu kontrol et.** Samsung'un kod sayfası H1, HC ve HE için şu kontrolü öneriyor: su hortumunun **sıcak değil soğuk su beslemesine** bağlı olduğundan emin ol; soğuk su musluğu genellikle mavi işaretlidir. Türkçe kılavuzun su besleme satırı da soğuk su besleme hortumunun soğuk su musluğuna sıkıca bağlı olmasını istiyor ve sıcak su musluğuna bağlanırsa bazı programlarda çamaşırın deforme olabileceğini yazıyor. Hortumu yeni taktırdıysan ya da makineyi taşıdıysan bu kontrolü atlama.

**5. Sıcak suya ve prize dikkat.** Kılavuza göre yüksek sıcaklıkta yıkama ve kurutma sırasında boşaltılan su sıcaktır; dokunma. Su sıcaklığı çok yüksekse boşaltma su soğuduktan sonra başlar, yani makinenin beklemesi normal olabilir. Aynı kılavuz güç kablosunun yalnız bu cihaz için olan prize takılmasını ve **uzatma kablosu kullanılmamasını** istiyor. Fiş terminallerindeki tozu kuru bir bezle temizlemek de kılavuzun önerdiği bir bakım.

**6. HE, HE1 ya da HE3 sürüyorsa servis.** Samsung'a göre **HE1** su ısıtıcısının çalışmadığını, **HE3** buhar fonksiyonunun normal çalışmadığını söylüyor; ikisinde de tek talimat Samsung servis merkezine başvurmak. **HE2**, kurutmalı modellerde kurutma bölümünün aşırı sıcaklık nedeniyle güvenlik için kapandığını bildiriyor. Isıtıcı, sensör ve kablolar makinenin içinde; bunlar yetkili servis işi.

## HE ile HE1 farkı neden önemli

İkisi aynı aileden görünse de evdeki payın farklı. HE (ve HC) için Samsung önce hortum bağlantısına ve yeniden başlatmaya bakmanı istiyor. HE1 için böyle bir adım yok; Samsung doğrudan servise yönlendiriyor. Bu yüzden servisi ararken kodu tam haliyle söylemek, teknisyenin doğru hazırlıkla gelmesini sağlar.

## Ne zaman servis

- Hortum soğuk musluğa bağlı ve makine yeniden başlatıldığı hâlde HE ya da HC geri geliyorsa
- Ekranda HE1 ya da HE3 görüyorsan
- HE2 kurutma programlarında tekrar tekrar çıkıyorsa
- HOT uzun süre sönmüyor ve kapak açılmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ekran, güç düğmesi, hortum bağlantısı ve fiş sende; ısıtıcı, sensörler, kablolar ve makinenin iç aksamı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne?
2. Ekrandaki kod tam olarak ne (HE, HE1, HE2, HE3, HC)?
3. Hangi programda ve kaç derecede çıktı?
4. Yeniden başlatınca kod geri geldi mi?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bütün kodlar [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) sayfasında, voltajla ilgili UC kodu [Samsung çamaşır makinesi UC hatası](/blog/samsung-camasir-makinesi-uc-hatasi/) yazısında. Bil, gör, çağır.
