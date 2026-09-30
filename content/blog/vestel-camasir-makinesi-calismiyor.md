---
title: "Vestel çamaşır makinesi çalışmıyor"
description: "Vestel çamaşır makinesi çalışmaya başlamıyorsa Vestel'in sırası: fiş, elektrik, açma/kapama, kapı ve Başlat/Beklet tuşu; ardından servis sınırı."
slug: "vestel-camasir-makinesi-calismiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Beş belge bu koşuda curl -sL -A "Mozilla/5.0" ile statik.vestel.com.tr'den yeniden indirildi,
#   hepsi HTTP 200; md5'ler 27 Eyl yerel kopyalarıyla (blog-taslaklar/kaynak-vestel-sprint/) 5/5 birebir. Okuma pdftotext -layout, sayfa = PDF sayfası (\f).
# Web araması KULLANILMADI: adresler yayındaki vestel-camasir-makinesi-e02-hatasi provenansından ve 29 Eyl bulunamadi-vestel notundan alındı.
#  A) CMI 86201       https://statik.vestel.com.tr/webfiles/20264687_k.pdf  41 s.  md5 7a5f38c8ae4890b1b1e7e691f2de1950  (sayfa atıfları bu belgeye göre)
#  B) CMI 106221      https://statik.vestel.com.tr/webfiles/20264677_k.pdf  41 s.  md5 00dc59105bf528b9c00b0f116d220f77
#  C) CMI 87302 WIFI  https://statik.vestel.com.tr/webfiles/20265394_k.pdf  44 s.  md5 609c99fc8bc6b4bc3d75f8c31017b37f
#  D) KCMI 98142 WIFI https://statik.vestel.com.tr/webfiles/20263189_k.pdf  50 s.  md5 9e654374ff661c2fb154e0c548526d7c
#  E) CMI 128222 WIFI https://statik.vestel.com.tr/webfiles/20264675_k.pdf  44 s.  md5 c7607ad9886b39d7be76043a5285bfba
# "KÜÇÜK ARIZALARIN GİDERİLMESİ" — "Makineniz çalışmaya başlamıyor." satırı beş belgede aynı (A s.30, B s.30, C s.33, D s.39, E s.33). Sebep | çözüm:
#   "Fiş prize takılı değil. | Fişi prize takın." · "Sigortanız arızalı. | Sigortanızı değiştirtin." · "Elektrik kesik. | Elektriği kontrol edin."
#   "Başlat/ beklet tuşuna basılmamış. | Başlat/ beklet tuşuna dokunun." · "Açma / kapatma butonuna basılmamış. | Açma / kapatma butonuna basınız."
#   "Makinenizin kapısı tam olarak kapalı değil. | Makinanızın kapısı kapatın."
# Diğer: A s.19 "Makinenizin kapısı tam olarak kapatılmazsa, makineniz yıkama işlemini başlatmayacaktır." + 5.4 çalıştırma sırası (fiş, musluk, kapı "kilitlendiğini duyana kadar itin")
#   · A s.18 kapak ile körüklü conta arasına çamaşır girmemesi · A s.21 Başlat/Beklet (bekleme modunda led yanıp söner) + 5.8 Çocuk Kilidi (CL yanar; tuşa basınca CL yanıp söner;
#   aynı tuşlara 3 sn'den fazla basınca devreden çıkar; A'da 4. ve 5. tuşlar) · A s.20 gecikmeli başlatma (1-23 saat; çalışması için Başlat/Beklet'e basılması gerekir)
#   · A s.5 "Herhangi bir arıza durumunda, öncelikle cihazın fişini prizden çıkarın ve musluğu kapatın. Kendiniz tamir etmeye çalışmayın..." · A s.30 tablo girişi (tamirat yetkili serviste).
# BİLEREK YAZILMAYANLAR: sigorta değişimini kullanıcıya adım olarak vermek (#31; belge "değiştirtin" diyor) · kart/kilit/motor teşhisi (belgede yok)
#   · "fişi çekip bekle, yeniden dene" reseti (belgede yok) · çocuk kilidi tuş çiftini genellemek (modele göre; yalnız A'daki çift anıldı) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-camasir-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Makinenin fişinin prize takılı olduğunu kontrol et."
  - "Evde elektrik kesintisi olup olmadığını kontrol et."
  - "Makinenin açma/kapama butonuna bas."
  - "Kapağı kilitlendiğini duyana kadar it; kapak ile conta arasında çamaşır kalmadığına bak."
  - "Programı seç ve Başlat/Beklet tuşuna dokun."
  - "Makine yine başlamıyorsa fişini çek, musluğu kapat ve yetkili servise başvur."
faq:
  - q: "Vestel çamaşır makinesi çalışmaya başlamıyor, neden?"
    a: "Vestel'in kullanım kılavuzlarındaki küçük arızalar tablosu 'Makineniz çalışmaya başlamıyor' satırında altı sebep sayıyor: fiş prize takılı değil, sigorta arızalı, elektrik kesik, Başlat/Beklet tuşuna basılmamış, açma/kapatma butonuna basılmamış ya da makinenin kapısı tam olarak kapalı değil."
  - q: "Tuşlara basıyorum ama tepki yok, ekranda CL yanıp sönüyor. Ne demek?"
    a: "Vestel kılavuzlarına göre CL çocuk kilidi sembolüdür. Çocuk kilidi devredeyken herhangi bir tuşa basıldığında göstergede CL yanıp söner. Kilidi devreden çıkarmak için kilidi devreye sokan aynı iki tuşa 3 saniyeden uzun süre basılır; hangi iki tuş olduğu modelin kılavuzundaki Çocuk Kilidi bölümünde yazar (CMI 86201 kılavuzunda 4. ve 5. tuşlar)."
  - q: "Kapı kapalı görünüyor ama makine başlamıyor, neden?"
    a: "Vestel'e göre makinenin kapısı tam olarak kapatılmazsa makine yıkama işlemini başlatmaz. Kılavuz kapının kilitlendiğini duyana kadar itilmesini ve kapak ile körüklü conta arasına çamaşır girmemesine dikkat edilmesini istiyor. Ekranda E01 görüyorsan kodun ayrıntısı Vestel E01 sayfasında."
  - q: "Sigorta attıysa ne yapmalıyım?"
    a: "Vestel'in tablosu bu sebep için tek cümle yazıyor: 'Sigortanızı değiştirtin.' Kılavuz ayrıca herhangi bir arıza durumunda önce fişin çekilmesini, musluğun kapatılmasını ve kullanıcının kendi tamir etmeye çalışmamasını istiyor."
images:
  coverAlt: "Kapağı kapalı bir çamaşır makinesinin kontrol panelinde program düğmesine uzanan bir el; ekran boş, tamburun içinde çamaşırlar görünüyor"
---

Çamaşırları koydun, programı seçtin ama makine hiçbir şey yapmıyor. Vestel'in çamaşır makinesi kullanım kılavuzlarındaki küçük arızalar tablosunda bu durumun ayrı bir satırı var: **"Makineniz çalışmaya başlamıyor."** Altında sayılan altı sebebin beşi kullanıcının birkaç dakikada kontrol edebileceği şeyler: **fiş, elektrik, açma/kapama butonu, Başlat/Beklet tuşu ve kapı.** Altıncısı, **sigorta**, tabloda "değiştirtin" diye geçiyor. Bu yazıda Vestel'in listesini, aynı kılavuzların çalıştırma ve çocuk kilidi bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı → evde elektrik var mı → açma/kapama butonuna bas → kapağı kilitlendiğini duyana kadar it → programı seç, Başlat/Beklet'e dokun. Ekranda CL yanıp sönüyorsa çocuk kilidi devrede. Makine yine başlamıyorsa fişi çek, musluğu kapat, yetkili servis.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Vestel'in tablosundaki ilk sebep: **fiş prize takılı değil**; çözüm **fişi prize takmak.**

**2. Elektriğe bak.** Tablodaki bir sonraki sebep: **elektrik kesik**; Vestel'in önerisi **elektriği kontrol etmek.** Evde genel bir kesinti olup olmadığına bak.

**3. Açma/kapama butonuna bas.** Tablodaki sebep: **açma/kapatma butonuna basılmamış**; çözüm **açma/kapatma butonuna basmak.**

**4. Kapıyı tam kapat.** Tablodaki sebep: **makinenin kapısı tam olarak kapalı değil.** Vestel'in çalıştırma bölümü bu konuda net: kapının kapanması için **kilitlendiğini duyana kadar it.** Kılavuza göre kapı tam olarak kapatılmazsa **makine yıkama işlemini başlatmaz.** Kapatırken kapak ile körüklü contanın arasına çamaşır girmemesine dikkat et.

**5. Programı seç ve Başlat/Beklet'e dokun.** Tablodaki sebep: **Başlat/Beklet tuşuna basılmamış**; çözüm **Başlat/Beklet tuşuna dokunmak.** Vestel'e göre bu tuş seçilen programı başlatır ya da çalışan bir programı beklemeye alır. Kılavuza göre makine bekleme modundayken göstergedeki **Başlat/Beklet ledi yanıp söner.**

**6. Sürüyorsa dur.** Bunların hepsini denediğin hâlde makine başlamıyorsa Vestel'in genel kuralı geçerli: herhangi bir arıza durumunda önce **fişi prizden çıkar ve musluğu kapat**, kendin tamir etmeye çalışma, yetkili servise başvur.

## Ekranda CL yanıp sönüyorsa

Vestel çamaşır makinelerinde yıkama sırasında tuşlara basıldığında ya da program düğmesi çevrildiğinde program akışının etkilenmemesi için bir **çocuk kilidi** var. Kilit devreye girdiğinde göstergede **"CL"** sembolü yanar; kilit devredeyken herhangi bir tuşa basarsan CL **yanıp söner.** Tuşlar tepki vermiyor ve ekranda CL yanıp sönüyorsa, kılavuza göre çocuk kilidi devrededir.

Kilidi devreden çıkarmak için kilidi devreye sokan **aynı iki tuşa 3 saniyeden uzun** bas; CL söner. Hangi iki tuş olduğu modelden modele değişebilir; modelinin kılavuzundaki "Çocuk Kilidi" bölümüne bak (CMI 86201 kılavuzunda göstergedeki 4. ve 5. tuşlar). Vestel bir ayrıntıyı daha yazıyor: kilit devredeyken program düğmesi "İPTAL" konumuna getirilip başka bir program seçilirse, önceki program **kaldığı yerden devam eder.**

## Gecikmeli başlatma seçiliyse

Vestel'in gecikmeli başlatma fonksiyonu makinenin yıkamaya **1 ile 23 saat arasında geç başlamasını** sağlıyor; bu fonksiyon seçiliyken göstergede ilgili sembol yanar. Kılavuza göre zaman geciktirmenin çalışması için de Başlat/Beklet tuşuna basılması gerekir. Gecikmeyi iptal etmek istersen: Başlat/Beklet'e bastıysan **zaman geciktirme tuşuna bir kez** basman yeter; basmadıysan göstergedeki sembol sönene kadar zaman geciktirme tuşuna basmaya devam et.

## Sigorta: tabloda "değiştirtin"

Vestel'in tablosu **sigortanın arızalı** olabileceğini de sayıyor ve karşısına tek kelime yazıyor: **"Sigortanızı değiştirtin."** Sigorta ve elektrik panosuyla ilgili işlem bu rehberin kapsamında değil. Makine her çalıştığında sigorta atıyorsa markadan bağımsız anlatım için [çamaşır makinesi sigorta attırıyor](/blog/camasir-makinesi-sigorta-attiriyor/) yazısına bakabilirsin.

Ekranda bir hata kodu görüyorsan önce kodun anlamına bak: kapıyla ilgili kod için [Vestel çamaşır makinesi E01 hatası](/blog/vestel-camasir-makinesi-e01-hatasi/), tüm kodlar için [Vestel çamaşır makinesi hata kodları](/blog/vestel-camasir-makinesi-hata-kodlari/). Makine çalışıyor ama deterjan çekmecesinden köpük taşıyorsa: [Vestel çamaşır makinesi köpük yapıyor](/blog/vestel-camasir-makinesi-kopuk-yapiyor/). Markadan bağımsız kontrol listesi: [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/).

## Ne zaman servis

Fiş takılı, evde elektrik var, makine açık, kapı kilitlenmiş, CL yanmıyor, Başlat/Beklet'e dokundun ve makine hâlâ başlamıyorsa Vestel'in kılavuzu kullanıcıya başka adım vermiyor. Tablonun girişindeki cümle net: makinede yapılması gereken **tüm tamiratlar yetkili servisler tarafından** yapılmalı; arızayı tablodaki bilgilerle gideremediğinde **fişi prizden çek, musluğu kapat** ve yetkili servise başvur.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, butonlar, kapı ve kilit kullanıcıya; sigorta, elektrik tesisatı ve makinenin içi uzmana aittir.

## Servisi aramadan önce iki dakikalık özet

1. Göstergede hiç ışık yanıyor mu?
2. Evde elektrik var mı, fiş prize takılı mı?
3. Kapı kilitlenme sesiyle kapandı mı?
4. Ekranda CL, E01 ya da başka bir kod var mı?
5. Başlat/Beklet ledi yanıyor mu, yanıp sönüyor mu?

Bu beşine cevabın varsa servise "makine çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
