---
title: "Vaillant kombi sıcak su veriyor, ısıtmıyor"
description: "Vaillant kombi sıcak su verip petekleri ısıtmıyorsa kılavuz önce ayara bakıyor: yaz konumu, OFF ayarı, oda termostatı ve S.31 kodu."
slug: "vaillant-kombi-kalorifer-isitmiyor"
date: "2026-09-28"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 08:28 · Kaynak denetimi: vaillant-kombi-kalorifer-isitmiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200, application/pdf), pdftotext -layout ile
# sayfa sayfa okundu. Sayfa = PDF sayfası. Web araması KULLANILMADI.
# KULLANMA KILAVUZLARI (tek kaynak):
# A) ecoTEC intro · 8000037574_02 · https://www.vaillant.com.tr/api/download/product/tr/_ecotec-intro-24-28-kw_1452962.pdf
#    HTTP 200 · 236.350 B · 16 sf · md5 2ad2ae698770f850da164d67e3ac3637
#    Ek B s.12: "Isıtma işletime geçmiyor (Sıcak su hazırlama çalışıyor)" · "Haricî regler doğru parametrelendirilmemiş."
#    → "Harici regleri doğru ayarlayın (→ Regler kullanma kılavuzu)." · s.8 4.4 yaz konumu: gidiş suyu sıcaklığı oF'ye,
#    "oF iki kere hızla yanıp söner, ısıtma modu devreden çıkartılır." · regler bağlıysa reglerde · s.7 4.2 gidiş suyu ayarı
#    · s.7 ekran koruyucu: regler bağlıysa "on veya oF iletisi" · s.3-4 gaz kokusu
# B) ecoTEC plus / exclusive · 0020282305_07 · https://www.vaillant.com.tr/api/download/product/tr/_ecotec-plus-26-40-kw_1491931.pdf
#    HTTP 200 · 196.382 B · 20 sf · md5 7019a6c065efd6227ebac697dc91f175
#    Ek D s.17: aynı satır ("Harici regler doğru ayarlanmamış.") · s.10 4.4.2 yaz konumu: sembole en az 3 sn · s.10 4.4.1
#    · s.9 4.1 regler bağlıysa ısıtma ayarları sistem reglerinde · s.8 "Sistem regleri ile bağlı" sembolü · s.10 4.6 durum kodu
#    MENÜ → BİLGİ → Durum kodu · s.16 S.031 "Isıtma modu devre dışı ve hiçbir sıcak su talebi yok." · S.008 bekleme süresi
# C) ecoTEC pure · 0020250679_02 · https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pure_844161.pdf
#    HTTP 200 · 458.267 B · 20 sf · md5 f48176844c2865cf7cd48c96cd902121
#    C.1 s.17: "Sıcak su hazırlama arızasız; Isıtma çalışmıyor" → harici regler · s.8 "OFF – Isıtma devresi kapalı (yaz konumu)"
#    · s.11 4.6.1 OFF · s.10 4.4 + Bilgi: eBUS oda termostatı bağlıysa gösterge üzerinden ayarlanamaz · s.16 gidiş suyu
#    "< 10 = OFF", radyatör 35-80, 75 °C üstü yalnız yetkili servis · s.13 5.2 durum kodu (iki tuşa aynı anda)
#    · s.16 S.31 "Isıtma talebi yok: Yaz konumu, e-Veri yolu regleri, bekleme süresi" · S.08
# D) ecoTEC pro · 0020228720_02 · https://www.vaillant.com.tr/api/download/product/tr/_ecotec-pro_842041.pdf
#    HTTP 200 · 297.230 B · 12 sf · md5 5958d4db9b178710d1bf7c4ef3147f2e
#    Ek B s.11: "Sıcak su hazırlama arızasız; Isıtma çalışmıyor." → harici regler cihazı · s.8 4.8 regler bağlıysa "Üründe mümkün
#    olan maksimum gidiş suyu sıcaklığını ayarlayın" + istenen değer reglerde · s.8 4.11.1 yaz konumu off · s.9 5.2 Live Monitor
#    · s.11 S.31 "Yaz konumu aktif" · S.08 "Kalorifer kalan bekleme süresi xx dakika"
# ⛔ Bilerek YAZILMAYANLAR: petek hava alma (bu satırın tedbiri değil; ayrıca petekler-isinmiyor'da #31 bekliyor) · termostatik vana
#    ayarı (kılavuzda yalnız doldurma bağlamında geçiyor) · 3 yollu vana/pompa gibi parça teşhisi (belgede bu satırda yok)
#    · 75 °C üstü ayar (yalnız yetkili servis) · regler markası/modeline özel tarif (regler kılavuzu ayrı belge, indirilmedi)
#    · maliyet/süre (#46) · kapak açma (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının (regler) kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, binadan çık ve gaz şirketinin acil hattını dışarıdan ara."
  - "Kombiye bir oda termostatı (regler) bağlı olup olmadığını öğren."
  - "Regler bağlıysa ısıtmanın açık olduğunu ve istenen sıcaklığı reglerin kendi kılavuzuna göre kontrol et."
  - "Regler bağlı değilse kombinin ekranında ısıtma için OFF ya da oF (yaz konumu) görünüp görünmediğine bak."
  - "Isıtma kapalıysa ya da gidiş suyu sıcaklığı çok düşükse kılavuzundaki tuşla gidiş suyu sıcaklığını yükselt ve onayla."
  - "Kombinin durum kodunu görüntüle; S.31 yaz konumunu, S.08 ise kombinin bekleme süresinde olduğunu gösterir."
  - "Ayarlar doğru olduğu hâlde ısıtma çalışmıyorsa yetkili servise başvur."
faq:
  - q: "Vaillant kombi sıcak su veriyor ama petekleri ısıtmıyor, neden?"
    a: "Vaillant'ın ecoTEC intro, ecoTEC plus, ecoTEC pure ve ecoTEC pro kullanma kılavuzlarının arıza giderme tablosunda bu durumun ayrı bir satırı var: sıcak su hazırlama çalışıyor, ısıtma çalışmıyor. Dördünde de verilen olası neden aynı: harici regler, yani oda termostatı doğru ayarlanmamış. Tedbir de reglerin kendi kullanma kılavuzuna göre doğru ayarlanması. Regler yoksa kombinin kendi ısıtma ayarına bakılır; ısıtma yaz konumunda ya da OFF'ta kalmış olabilir."
  - q: "Vaillant kombide yaz konumu nasıl kapatılır?"
    a: "Modele göre değişiyor. ecoTEC intro'da yaz konumu gidiş suyu sıcaklığı oF'ye indirilerek açılıyor; kılavuz yeniden açmayı ayrı anlatmıyor, ama oF gidiş suyu sıcaklığının en alt değeri olduğu için gidiş suyu sıcaklığı ayarıyla yeniden bir değer seçip onaylamak gerekir. ecoTEC plus'ta ısıtma konumu ana ekrandaki ısıtma sembolüne en az 3 saniye basılı tutularak kapatılıyor. ecoTEC pure ve ecoTEC pro'da gidiş suyu sıcaklığı OFF ya da off konumuna getiriliyor. Kombiye regler bağlıysa ısıtma konumu reglerden açılıp kapatılır; ecoTEC pure kılavuzuna göre bu durumda ısıtma devresi kombinin üstünden kapatılamaz."
  - q: "Vaillant kombide S.31 ne demek?"
    a: "S.31 bir arıza değil, durum kodu. ecoTEC pro kılavuzunda karşılığı 'Yaz konumu aktif'. ecoTEC pure kılavuzu 'Isıtma talebi yok: Yaz konumu, e-Veri yolu regleri, bekleme süresi' diye veriyor. ecoTEC plus ve exclusive'te kod üç haneli yazılıyor: S.031, 'Isıtma modu devre dışı ve hiçbir sıcak su talebi yok.'"
  - q: "Oda termostatı bağlıyken kombinin üstünden sıcaklığı ayarlayabilir miyim?"
    a: "ecoTEC pure kılavuzuna göre eBUS oda termostatı bağlıysa sıcak su ve gidiş suyu sıcaklığı kombinin göstergesi üzerinden ayarlanamaz. ecoTEC pro kılavuzu regler bağlıyken üründe mümkün olan en yüksek gidiş suyu sıcaklığının ayarlanmasını, istenen sıcaklığın ise reglerden seçilmesini istiyor. ecoTEC intro ve ecoTEC plus kılavuzları da regler bağlıysa ısıtma ayarlarının reglerde yapılacağını yazıyor."
  - q: "Kombi ısıtma talebi olduğu hâlde bir süre yanmıyor, arıza mı?"
    a: "Olmayabilir. Kılavuzların durum kodu listesinde S.08 var: ecoTEC pure'da 'Isıtma işleminden sonra geçici kapatma', ecoTEC pro'da 'Kalorifer kalan bekleme süresi xx dakika', ecoTEC plus'ta S.008 'brülör bekleme süresinde'. Bu kodu görüyorsan kombi bilerek bekliyor. Uzun süre geçtiği hâlde ısıtma başlamıyorsa yetkili servise başvur."
images:
  coverAlt: "Duvara monte beyaz bir kombi ve yanında duvara asılı dijital bir oda termostatı; önde soğuk görünen beyaz bir panel radyatör"
---

Musluktan sıcak su geliyor, ama petekler soğuk. Kombi çalışıyor gibi görünüyor, sadece ısıtma yapmıyor. Vaillant'ın ecoTEC kullanma kılavuzlarının dördünde de bu durumun kendi satırı var: **"Isıtma işletime geçmiyor (Sıcak su hazırlama çalışıyor)."** Kılavuzların bu satır için verdiği neden bir parça değil, bir ayar: **"Harici regler doğru ayarlanmamış."** Regler, kombiye bağlı oda termostatı demek. Bu yazıda o satırı ve kombinin kendi ısıtma ayarlarını, dört Vaillant kılavuzundan sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su var ama ısıtma yoksa kılavuzun ilk şüphelisi ayar. Regler bağlıysa → reglerde ısıtma açık mı, sıcaklık ne. Regler yoksa → kombide ısıtma OFF / oF (yaz konumu) mu, gidiş suyu sıcaklığı çok mu düşük. Durum kodu S.31 ise yaz konumu, S.08 ise kombi bekliyor. Ayarlar doğruysa yetkili servis.

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** Vaillant kullanma kılavuzlarının ilk güvenlik başlığı gaz kokusu. Koku varsa o mekânda durma; mümkünse kapı ve pencereleri açıp cereyan yap; açık alevle yaklaşma; binadaki elektrik şalterlerini, prizleri, zili, telefonu kullanma. Binayı terk et ve gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber ver. Bu durumda aşağıdaki adımlara geçilmez.

**2. Regler bağlı mı?** Doğru yere bakmak için önce bunu bilmek gerekiyor; kılavuzların hemen her ayar adımı "regler bağlı" ve "regler bağlı değil" diye ikiye ayrılıyor. Kılavuzlar ekranda ipucu da veriyor: ecoTEC plus'ın sembol listesinde **"Sistem regleri ile bağlı"** diye ayrı bir sembol var; ecoTEC intro'da regler bağlıyken ekran koruyucuda **on** ya da **oF** iletisi görünüyor.

**3. Regler bağlıysa: reglere bak.** Dört kılavuzun da bu satır için verdiği tedbir aynı: **harici regleri doğru ayarlayın** ve bunun için reglerin kendi kullanma kılavuzuna bakın. ecoTEC plus kılavuzu da sistem regleri bağlıysa ısıtma konumu ayarlarının **sistem reglerinde** yapılması gerektiğini yazıyor. Reglerde ısıtmanın kapalı olup olmadığını ve istenen oda sıcaklığını kontrol et. ecoTEC pro'da ek bir şart var: regler bağlıyken kombinin üstünde **mümkün olan en yüksek gidiş suyu sıcaklığı** ayarlı olmalı, istenen sıcaklık reglerden seçilir.

**4. Regler yoksa: yaz konumu mu açık?** Yaz konumu, ısıtmayı kapatıp sıcak suyu çalışır bırakan ayar. Kombinin ekranında bunu ararsın:

- **ecoTEC intro:** gidiş suyu sıcaklığı **oF**'ye indirilip onaylanınca oF iki kez hızla yanıp söner, ısıtma modu devreden çıkar ve ekranda sıcak su sıcaklığının itibari değeri görünür.
- **ecoTEC pure:** ekran listesinde **OFF** için ilk karşılık *"Isıtma devresi kapalı (yaz konumu)"*.
- **ecoTEC plus:** ısıtma konumu kapatıldığında ekranda ısıtmanın devre dışı olduğunu gösteren bir sembol çıkar.
- **ecoTEC pro:** gidiş suyu sıcaklığı **off** konumuna getirilmişse ısıtma konumu kapalıdır ve ekranda yaz konumu sembolü görünür.

**5. Gidiş suyu sıcaklığını geri aç.** Isıtma kapalıysa ya da gidiş suyu sıcaklığı çok düşük bırakılmışsa kombinin ısıtma tuşuyla gidiş suyu sıcaklığını seç, yükselt ve **onayla**; Vaillant kılavuzlarına göre yeni ayar ancak onaydan sonra kaydedilir. ecoTEC plus kılavuzu ısıtma konumunun kapatılmasını (sembole en az 3 saniye basılı tutarak) anlatıyor, yeniden açılmasını ayrıca tarif etmiyor; ekranda ısıtmanın devre dışı olduğunu gösteren sembol duruyor ve açamıyorsan yetkili servise sor. ecoTEC pure'da gidiş suyu sıcaklığı 10 °C'nin altındaysa OFF sayılıyor; kılavuzun kullanıcı tablosu radyatörlü sistem için 35–80 °C, yerden ısıtma için 35–50 °C aralığını veriyor ve 75 °C'nin üzerindeki bir aralığın **yalnız yetkili servis** tarafından ayarlanabileceğini ekliyor.

**6. Durum koduna bak.** Kombi o an ne yaptığını durum koduyla söylüyor. ecoTEC pure'da durum kodu iki tuşa aynı anda basılarak, ecoTEC pro'da aynı yöntemle (Live Monitor), ecoTEC plus'ta **MENÜ → BİLGİ → Durum kodu** yolundan görüntülenir. İki kod bu konuda işine yarar: **S.31** (ecoTEC plus'ta S.031) ısıtmanın kapalı ya da talep olmadığını, **S.08** (ecoTEC plus'ta S.008) kombinin bir ısıtmadan sonra bekleme süresinde olduğunu gösteriyor. S.08 görüyorsan kombi bilerek bekliyor.

**7. Ayarlar doğruysa servis.** Regler doğru ayarlı, kombide ısıtma açık, sıcaklık makul ve yine de petekler ısınmıyorsa ayar turu bitmiştir. Kılavuzların genel kuralı: arızayı belirtilen önlemlerle gideremiyorsan yetkili servise başvur.

## S.31 kodu — dört kılavuzda ne yazıyor

| Kılavuz | Kod | Kılavuzdaki anlamı |
|---|---|---|
| **ecoTEC pro** | S.31 | Yaz konumu aktif (parametre adı: yaz konumu ısı talebi yok) |
| **ecoTEC pure** | S.31 | Isıtma talebi yok: yaz konumu, e-Veri yolu regleri, bekleme süresi |
| **ecoTEC plus / exclusive** | S.031 | Isıtma modu devre dışı ve hiçbir sıcak su talebi yok |
| **ecoTEC intro** | — | Kullanma kılavuzunda durum kodu listesi yok |

📌 **S** ile başlayan kodlar arıza değil, **durum** kodudur; arıza kodları **F** ile başlar. S.31 görüyorsan kombi bozuk değil, ısıtma şu an kapalı ya da talep yok demektir.

## Yaz konumu nasıl açılıp kapanıyor — modele göre

| Kılavuz | Regler yokken | Regler bağlıyken |
|---|---|---|
| **ecoTEC intro** | Gidiş suyu sıcaklığını oF'ye indir → onayla; ısıtma devreden çıkar | Reglerde ısıtma konumunu kapat |
| **ecoTEC plus / exclusive** | Ana ekranda ısıtma sembolüne en az 3 saniye basılı tut | Ayarlar sistem reglerinde yapılır |
| **ecoTEC pure** | Gidiş suyu sıcaklığını ekranda OFF görünene kadar düşür → onayla | Isıtma devresi kombinin üstünden kapatılamaz; regler kılavuzuna bak |
| **ecoTEC pro** | Gidiş suyu sıcaklığını off konumuna getir → onayla; sıcak su çalışmaya devam eder | Reglerde |

Kılavuzlar ısıtmanın yeniden açılmasını ayrı bir başlıkla anlatmıyor. ecoTEC intro, ecoTEC pure ve ecoTEC pro'da yaz konumu gidiş suyu sıcaklığının en alta (oF / OFF / off) indirilmesi olduğu için, gidiş suyu sıcaklığı ayar bölümüyle yeniden bir değer seçip onaylamak ısıtmayı geri getirir. ecoTEC plus'ta açamıyorsan yetkili servise sor.

## Ne zaman servis

- Regler ve kombi ayarları doğru olduğu hâlde ısıtma başlamıyorsa.
- Kombi ısıtmaya geçiyor ama petekler hâlâ soğuk kalıyorsa; bu durum kılavuzun bu satırının kapsamı dışında. Genel nedenler aşağıdaki petek yazısında; emin değilsen yetkili servis.
- Ekranda **F.** ile başlayan bir arıza kodu varsa; o kodun tedbiri önce gelir.

Ekrandaki sembollerin anlamı için [Vaillant kombi sembolleri](/blog/vaillant-kombi-sembolleri-ve-anlamlari/) sayfasına, kombi hiç çalışmıyorsa (sıcak su da yoksa) [Vaillant kombi çalışmıyor](/blog/vaillant-kombi-calismiyor/) yazısına, kodların tam listesi için [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) sayfasına bak. Marka bağımsız olarak peteklerin neden ısınmadığını [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
