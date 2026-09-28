---
title: "Vaillant kombi S.34 kodu: donma koruması"
description: "Vaillant kombide S.34 arıza değil, donmaya karşı koruma çalışıyor demek. Kışın ve tatilde korumanın açık kalması için kılavuzun şartları."
slug: "vaillant-kombi-s34-kodu"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 08:28 · Kaynak denetimi: vaillant-kombi-s34-kodu.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200, application/pdf), pdftotext -layout ile
# sayfa sayfa okundu. Sayfa = PDF sayfası. Web araması KULLANILMADI.
# KULLANMA KILAVUZLARI (tek kaynak):
# A) ecoTEC pro · 0020228720_02 · https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pro_842041.pdf
#    HTTP 200 · 297.230 B · 12 sf · md5 5958d4db9b178710d1bf7c4ef3147f2e
#    Ek A s.11: "S.34 | Isıtma konumunda donmaya karşı koruma | Donmaya karşı koruma fonksiyonu, donmaya karşı koruma"
#    · s.9 4.13.1: "5 °C'nin altına düşerse, ürün işletime geçer" ... "yakl. 30 °C'ye ısıtır" (s.9-10) · regler takılı ise regler
#    üzerinden açıp kapat · s.9 4.13.2 boşaltma için yetkili bayi · s.10 7.1 donma koruması şartları + "Ürünü sadece donma riski
#    yoksa geçici olarak kapatın." · tatilde gaz kesme + soğuk su vanası · s.4 1.3.8 · s.9 5.2 Live Monitor
# B) ecoTEC pure · 0020250679_02 · https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_844161.pdf
#    HTTP 200 · 458.267 B · 20 sf · md5 f48176844c2865cf7cd48c96cd902121
#    s.16 "S.34 Donmaya karşı koruma aktif" · s.13 4.9.1 (5 °C / 30 °C, tüm sistem ısıtılamaz uyarısı) · s.13 4.9.2 boşaltma →
#    yetkili bayi · s.12 4.8 bekleme modu: "Ürünün donmaya karşı koruma fonksiyonu aktif." · s.14 7.1 şartlar · s.5 1.3.8
#    · s.13 5.2 durum kodu görüntüleme
# C) ecoTEC plus / exclusive · 0020282305_07 · https://www.vaillant.com.tr/api/download/product/tr/_ecotec-plus-26-40-kw_1491931.pdf
#    HTTP 200 · 196.382 B · 20 sf · md5 7019a6c065efd6227ebac697dc91f175
#    s.16 "S.034 Donmaya karşı koruma fonksiyonu aktif." · s.12 7.1 "Koşul: Donma tehlikesi" → tuş: ekran söner, bekleme konumu
#    tuşu yanar, donma koruması etkin · "Koşul: Donma tehlikesi yok" → ana şalter: donma koruması devre dışı · s.4 1.3.4 · s.10 4.6
# D) ecoTEC intro · 8000037574_02 · https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf
#    HTTP 200 · 236.350 B · 16 sf · md5 2ad2ae698770f850da164d67e3ac3637
#    Kullanma kılavuzunda S kodu listesi YOK. s.4 1.3.4 donma: evde yokken ısıtma işletimde kalsın, regler üzerinden aç/kapat,
#    ısıtamıyorsan yetkili servis boşaltsın · s.10 7.1 "Ürünü sadece donma riski yoksa geçici olarak kapatın." + tatilde vanalar
# ⛔ Bilerek YAZILMAYANLAR: S.34'ün ne kadar süreceği / kaç derecede biteceği (belgede yok; yalnız 5 °C'de devreye girip suyu
#    yakl. 30 °C'ye ısıttığı yazıyor) · ısıtma sistemini kullanıcının boşaltması (kılavuz yetkili bayiye/servise bırakıyor)
#    · antifriz katkısı (belgede yok) · intro için 5 °C eşiği (intro kılavuzunda yazmıyor) · maliyet/süre (#46) · kapak açma (#31).
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, binadan çık ve gaz şirketinin acil hattını dışarıdan ara."
  - "Ekrandaki kodun F değil S ile başladığını kontrol et; S.34 bir arıza kodu değil, durum kodudur."
  - "Donma riski olan günlerde kombinin elektriğini kesme ve ana şalterden kapatma."
  - "Kombinin gaz kesme vanasını açık tut."
  - "Kombiye oda termostatı (regler) bağlıysa kombiyi reglerin üzerinden açıp kapat."
  - "Evden uzun süre uzak kalacaksan ısıtmanın çalışır kaldığından ve odaların yeterince ısındığından emin ol."
  - "Isıtmayı sürdüremeyeceksen ısıtma sistemini boşaltması için yetkili servise başvur."
faq:
  - q: "Vaillant kombide S.34 ne demek?"
    a: "S.34 bir durum kodu ve anlamı donmaya karşı koruma. ecoTEC pure kılavuzunda karşılığı 'Donmaya karşı koruma aktif', ecoTEC pro kılavuzunda 'Isıtma konumunda donmaya karşı koruma'. ecoTEC plus ve exclusive'te kod üç haneli yazılıyor: S.034, 'Donmaya karşı koruma fonksiyonu aktif.' Yani kombi bozulmadı; donmaya karşı kendini ve tesisatı korumak için çalışıyor."
  - q: "Donma koruması ne zaman devreye girer?"
    a: "ecoTEC pure ve ecoTEC pro kılavuzlarına göre açma/kapatma düğmesi açıkken kalorifer gidiş suyu sıcaklığı 5 °C'nin altına düşerse ürün işletime geçer ve hem kalorifer tesisatında hem de varsa kullanma suyu tesisatında dolaşan suyu yaklaşık 30 °C'ye ısıtır."
  - q: "Donma koruması varken tatile giderken kombiyi kapatabilir miyim?"
    a: "Vaillant kılavuzlarının kuralı açık: ürünü sadece donma riski yoksa geçici olarak kapatın. ecoTEC pure ve ecoTEC pro kılavuzlarına göre donmaya karşı koruma ve kontrol tertibatları yalnızca ürün elektrik şebekesinden ayrılmamışsa, açma/kapatma düğmesi üzerinden açıksa ve gaz kesme vanası açıksa aktiftir. Tatilde gaz kesme vanasını ve soğuk su vanasını kapatma tavsiyesi de donma riski olmayan dönem içindir. Kışın evden uzaktaysan kılavuzların istediği şey ısıtma sisteminin işletimde kalması ve odaların yeterince ısınması."
  - q: "Donma koruması tüm tesisatı korur mu?"
    a: "Hayır. ecoTEC pure ve ecoTEC pro kılavuzları bunu uyarı olarak yazıyor: donmaya karşı koruma fonksiyonu ile tüm ısıtma sisteminin ısıtılması sağlanamaz, bu nedenle ısıtma sisteminin bazı bölümleri donabilir ve hasar görebilir. Kılavuzların önerisi evde bulunmadığın süre içinde ısıtma sisteminin işletimde kalması ve odaların yeterince ısıtılması."
  - q: "Kombiyi uzun süre kullanmayacağım, ne yapmalıyım?"
    a: "ecoTEC pure ve ecoTEC pro kılavuzlarına göre cihazın uzun süre kullanılmadığı durumlarda donmaya karşı koruma, ısıtma sistemi ve ürün tamamen boşaltılarak sağlanabilir; bunun için yetkili bayiye başvurulur. ecoTEC intro kılavuzu da sistemin ısıtılmasını sağlayamıyorsan yetkili servisin ısıtma sistemini boşaltmasını istiyor. Boşaltmayı kendin yapma."
images:
  coverAlt: "Kış günü buğulu bir pencerenin yanında duvara asılı beyaz bir kombi; ekranında soyut bir durum göstergesi, dışarıda karla kaplı bir balkon korkuluğu"
---

Kış geldi, kombinin ekranında ya da durum kodu menüsünde **S.34** gördün. İlk akla gelen "arıza mı?" sorusunun cevabı Vaillant'ın kendi kılavuzunda: S ile başlayan kodlar **durum kodu**, ve S.34'ün ecoTEC pure kılavuzundaki karşılığı tek cümle: **"Donmaya karşı koruma aktif."** Yani kombi soğuğu algılamış ve tesisattaki su donmasın diye kendiliğinden çalışıyor. Bu yazıda S.34'ün ne yaptığını ve korumanın gerçekten işe yaraması için kılavuzların senden istediği birkaç şeyi anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** S.34 = donma koruması çalışıyor, arıza değil. Korumanın açık kalması için kombinin elektriği kesilmemeli, açma/kapatma düğmesi açık olmalı, gaz kesme vanası açık olmalı. Regler varsa kombi reglerden açılıp kapatılır. Evden uzaktayken ısıtma çalışır kalmalı; kalamayacaksa sistemi yetkili servis boşaltır.

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** Vaillant kullanma kılavuzlarının ilk güvenlik başlığı gaz kokusu. Koku varsa o mekânda durma; mümkünse kapı ve pencereleri açıp cereyan yap; açık alevle yaklaşma; binadaki elektrik şalterlerini, prizleri, zili, telefonu kullanma. Binayı terk et ve gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber ver. Bu durumda aşağıdaki adımlara geçilmez.

**2. Kod S mi, F mi?** Vaillant'ta **F** ile başlayan kodlar arıza, **S** ile başlayanlar durum kodudur. S.34 (ecoTEC plus ve exclusive'te S.034) kombinin o an ne yaptığını söylüyor: donmaya karşı koruma çalışıyor. Yapman gereken bir onarım yok; aşağıdaki adımlar korumanın **açık kalması** için.

**3. Elektriği kesme.** ecoTEC pure ve ecoTEC pro kılavuzlarındaki uyarıya göre donmaya karşı koruma ve kontrol tertibatları **yalnızca** ürün elektrik şebekesinden ayrılmamışsa ve açma/kapatma düğmesi üzerinden açıksa aktiftir. ecoTEC plus kılavuzu da aynı ayrımı yapıyor: donma tehlikesi varsa kombi yalnızca tuşla kapatılır (ekran söner, bekleme konumu tuşu yanmaya devam eder, donma koruması etkin kalır); ana şalterden kapatılırsa donma koruması **devre dışı** kalır. ecoTEC pure'da tuşa 3 saniyeden az basılarak geçilen bekleme modunda da kılavuza göre donma koruması aktiftir.

**4. Gaz kesme vanası açık kalsın.** Aynı uyarının üçüncü şartı: **gaz kesme vanası açık** olmalı.

**5. Regler varsa kombiyi reglerden aç-kapat.** ecoTEC pure ve ecoTEC pro kılavuzları, ayrıca ecoTEC intro ve ecoTEC plus'ın güvenlik bölümü aynı şeyi söylüyor: donmaya karşı koruma tertibatlarının aktif kalması için, kombiye bir regler takılıysa ürünü **regler üzerinden** açıp kapat.

**6. Evden uzaktayken ısıtma çalışsın.** Kılavuzlar donma korumasının sınırını da açıkça yazıyor: bu fonksiyonla **tüm ısıtma sisteminin ısıtılması sağlanamaz**, sistemin bazı bölümleri donabilir ve hasar görebilir. Bu yüzden kılavuzların önerisi, evde bulunmadığın süre içinde ısıtma sisteminin **işletimde kalması ve odaların yeterince ısıtılması.**

**7. Isıtamayacaksan boşaltma servisin işi.** ecoTEC intro kılavuzuna göre sistemin ısıtılmasını sağlayamıyorsan **yetkili servisin ısıtma sistemini boşaltmasını** sağla. ecoTEC pure ve ecoTEC pro kılavuzları da uzun süre kullanılmayacak bir cihazda donma korumasının, ısıtma sistemi ve ürün tamamen boşaltılarak sağlanabileceğini, bunun için **yetkili bayiye** başvurulmasını istiyor.

## S.34 ne yapıyor

ecoTEC pure ve ecoTEC pro kılavuzlarında donma koruması şöyle tarif ediliyor: açma/kapatma düğmesi açıkken kalorifer gidiş suyu sıcaklığı **5 °C'nin altına** düşerse ürün işletime geçer ve hem kalorifer tesisatında hem de (varsa) kullanma suyu tesisatında dolaşan suyu **yaklaşık 30 °C'ye** ısıtır.

| Kılavuz | Kod | Kılavuzdaki anlamı |
|---|---|---|
| **ecoTEC pure** | S.34 | Donmaya karşı koruma aktif |
| **ecoTEC pro** | S.34 | Isıtma konumunda donmaya karşı koruma |
| **ecoTEC plus / exclusive** | S.034 | Donmaya karşı koruma fonksiyonu aktif |
| **ecoTEC intro** | — | Kullanma kılavuzunda durum kodu listesi yok; donma uyarıları güvenlik bölümünde |

**Durum kodunu nereden görürsün?** ecoTEC pure ve ecoTEC pro'da iki tuşa aynı anda basarak (ecoTEC pro'da adı Live Monitor), ecoTEC plus'ta **MENÜ → BİLGİ → Durum kodu** yolundan.

## Tatilde kombiyi kapatmak: kılavuzun şartı

ecoTEC intro, ecoTEC pure ve ecoTEC pro kılavuzlarında kombiyi geçici olarak kapatmanın bir şartı var (ecoTEC plus aynı ayrımı "donma tehlikesi var / yok" koşuluyla yapıyor): **ürünü sadece donma riski yoksa geçici olarak kapatın.** Uzun süreli kapatmada (örneğin tatil) gaz kesme vanasını ve kombilerde soğuk su vanasını kapatma tavsiyesi de bu şartın içinde. Yani:

| Durum | Kılavuzun istediği |
|---|---|
| Donma riski yok (bahar, yaz) | Kombi kapatılabilir; uzun süre için gaz kesme vanası ve soğuk su vanası da kapatılır |
| Donma riski var (kış) | Kombi elektrikte ve açık kalır, gaz vanası açık kalır; evden uzaktayken ısıtma çalışır |
| Kış ve ısıtma sürdürülemeyecek | Isıtma sistemini yetkili servis / yetkili bayi boşaltır |

⚠️ Kışın kombinin elektriğini kesmek ya da onu ana şalterden kapatmak, kılavuzlara göre donma korumasını devre dışı bırakır.

## Ne zaman servis

- Ekranda S değil **F** ile başlayan bir kod varsa; bu bir arızadır ve kodun kendi tedbiri uygulanır.
- Kış boyunca evde olmayacaksan ve ısıtmayı çalışır bırakamayacaksan; sistemin boşaltılması yetkili servisin işi.

Ekranda kod yerine sembol varsa [Vaillant kombi sembolleri](/blog/vaillant-kombi-sembolleri-ve-anlamlari/) sayfasına, arıza kodları için [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) listesine bak. Isıtma çalışmıyor ve durum kodu S.31 ise [Vaillant kombi sıcak su veriyor, ısıtmıyor](/blog/vaillant-kombi-kalorifer-isitmiyor/) yazısı konuyu açıyor. Mevsim geçişinde kombiyi kapatma sorusu için [kombi yazın kapatılır mı](/blog/kombi-yazin-kapatilir-mi/) yazısına göz at.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
