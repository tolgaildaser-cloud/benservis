---
title: "Ecovacs Deebot istasyonu bulamıyor: ne yapmalı?"
description: "Deebot şarj istasyonunu bulamıyorsa Ecovacs'ın sırası: istasyonu oynatma, çevresini boşalt, kapıyı aç, aynayı uzaklaştır, temizliği istasyondan başlat."
slug: "ecovacs-deebot-istasyonu-bulamiyor"
date: "2026-10-23"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M4 Ecovacs/Tineco, YK #185). origin/main 75980e0'da "ecovacs/deebot" geçen yazı/başlık yok; "istasyon bulamıyor" konulu yazı da yok
#   (robot-supurge-sarj-olmuyor ve robot-supurge-haritalama-sorunu yakın ama bu sorguyu karşılamıyor).
# OT (#164, bu koşu, _kaynak/ot-ecovacs-2.log): "deebot istasyon" 1. **deebot istasyonunu bulamıyor** · "ecovacs istasyonu" 1. **ecovacs istasyonu bulamıyor** ·
#   "deebot şarj" 1. deebot şarj istasyonunu bulamıyor.
# GSC: Ecovacs/Deebot satırı yok.
# Belgeler (#88) bu koşuda indirildi. Zincir: https://help.ecovacs.com/tr/support/owners-manuals (200) → site-static.ecovacs.com PDF (200):
#  (E1) DEEBOT N8 TR md5 c7d95850a37a2c9459336a4323994919 · (E3) DEEBOT N10 TR md5 4d3038e4aa426f4b80cfbad1ee4769fe · (E4) DEEBOT T9 TR md5 eac99b51616a1bf7a7719154bc191d92
#  (F) https://help.ecovacs.com/tr/support/deebot-n8 (200) → faq-detail id=279, 267, 280 (200)
# Ana satırlar: E1 s.17 · E4 s.18 "DEEBOT Şarj İstasyonuna yanıt vermiyor." · E3 s.16 "DEEBOT Şarj İstasyonuna geri dönemiyor." · F id=279.
# BİLEREK YAZILMAYANLAR: sensör/kart teşhisi · istasyon sinyal vericisi onarımı · fiyat (#46) · pazar.
# Alıntı denetim tablosu: ecovacs-deebot-istasyonu-bulamiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru, yumuşak bez", "ECOVACS HOME uygulaması"]
steps:
  - "Robotu istasyona götür, şarj olmaya başladığını duyduktan sonra temizliği istasyondan başlat."
  - "Temizlik sırasında istasyonu ve robotu elle yerinden oynatma."
  - "İstasyonu duvara daya; yanlarını ve önünü engelden boşalt."
  - "Ayna, cam ve metal gibi yansıtıcı eşyaları istasyonun önünden uzaklaştır."
  - "İstasyonun bulunduğu odanın kapısını açık tut, temizlik sırasında odayı aydınlık bırak."
  - "Robotu uzun süre duraklatma; duraklattıysan temizliği yeniden istasyondan başlat."
  - "Düşme önleyici sensörleri sil, tekerleklere dolanan saçı al; sorun sürerse müşteri hizmetleri."
faq:
  - q: "Deebot temizliği bitiriyor ama istasyona dönmüyor, neden?"
    a: "Ecovacs'ın N8 ve T9 Türkçe kılavuzlarındaki tablo bu belirti için üç neden veriyor: istasyon temizlik sırasında elle hareket ettirilmiş, robot 90 dakikadan uzun duraklatılmış ya da temizliğe istasyondan başlamamış. Çözümler de buna göre: istasyonu oynatmamak, robotu 90 dakikadan uzun duraklatmamak ve temizliği istasyondan başlatmak."
  - q: "İstasyonun etrafında ne kadar boşluk olmalı?"
    a: "Ecovacs'ın N8 destek sayfası istasyonun iki yanında 0,5 metre ve önünde 1 metrelik alanı engellerden ve yansıtıcı nesnelerden uzak tutmanı istiyor. N8 kılavuzunun yerleştirme şekli yanlarda yarım metreden, önde bir buçuk metreden fazla boşluk gösteriyor."
  - q: "İstasyon halının üzerinde, sorun olur mu?"
    a: "Olabilir. Destek sayfasına göre istasyon halının üzerindeyse ve robot dönmekte zorlanıyorsa istasyonun yönünü ayarla. Paspas modundaki N8 halıya varsayılan olarak çıkmadığı için Ecovacs istasyonu sert zemine koymanı öneriyor."
  - q: "Robot istasyonu bulamıyor ve yerinde daireler çiziyor. Ne yapmalıyım?"
    a: "Ecovacs'ın N8 destek sayfası bu davranış için düşme önleyici sensörlerin tozlanmasını, tekerleklere saç dolanmasını ve tampon rayının sıkışmasını sayıyor. Sensörleri robotla gelen temizleme aletiyle sil, tekerlekteki saçı al ve tamponun her iki yanına bastırıp geri geldiğini kontrol et."
images:
  coverAlt: "Oturma odasında duvar dibindeki şarj istasyonu ve önündeki boş parke zemin"
  steps:
    - "Şarj istasyonuna yerleşmiş, temizliğe başlamaya hazır robot süpürge"
    - "Zemin üzerinde yerinde duran şarj istasyonu ve uzaktan gelen robot süpürge"
    - "Duvara dayalı şarj istasyonunun iki yanında boş bırakılmış alan"
    - "Şarj istasyonunun önünden kaldırılmış boy aynası"
    - "Ardına kadar açık bir oda kapısı ve gün ışığı alan koridor"
    - "Telefon ekranında robot süpürge uygulamasının temizlik sayfası"
    - "Ters çevrilmiş robot süpürgenin alt yüzündeki tekerlekler ve sensörler"
---

Robot salonu süpürdü, sonra koridorda durup bekledi ya da istasyonun etrafında dönüp yanaşamadı. Ecovacs'ın Türkçe kılavuzlarında bu belirti sorun giderme tablosunun ikinci satırı: **"DEEBOT Şarj İstasyonuna yanıt vermiyor."** Ecovacs Türkiye destek sayfasında da ayrı bir soru olarak geçiyor: **"DEEBOT, Yerleştirme İstasyonuna dönmekte zorlanıyor veya Yerleştirme istasyonunu bulamıyor."** Bu yazı Ecovacs'ın **DEEBOT N8**, **N10** ve **T9** Türkçe kılavuzlarına ve N8 destek sayfasına dayanıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Temizliği istasyondan başlat → istasyonu yerinden oynatma → duvara daya, yanlarını ve önünü boşalt → aynayı, camı, metali uzaklaştır → kapıyı açık, odayı aydınlık tut → robotu 90 dakikadan uzun duraklatma → sensörleri ve tekerlekleri temizle.

## Kılavuzun tablosu

| Olası neden | Ecovacs'ın çözümü |
|---|---|
| İstasyon temizlik sırasında elle hareket ettirilmiş | Temizlik sırasında istasyonu oynatma |
| DEEBOT 90 dakikadan fazla duraklatılmış | 90 dakikadan uzun duraklatma |
| DEEBOT temizliğe istasyondan başlamamış | Temizliğin istasyondan başladığından emin ol |

N10 kılavuzunda aynı satır **"DEEBOT Şarj İstasyonuna geri dönemiyor."** başlığıyla geçiyor.

## Adım adım: robot yolunu bulsun

**1. Temizliği istasyondan başlat.** Robot dönüş yolunu başladığı noktaya göre buluyor; tablonun üçüncü satırı bu. Destek sayfasının tarifi: robot istasyondan uzaktaysa onu istasyona taşı, **"Şarj olmaya başlıyorum"** uyarısını duyduktan sonra **AUTO Modu Düğmesine bas** ya da temizliği telefondan başlat.

**2. İstasyonu ve robotu oynatma.** Temizlik sırasında istasyon yer değiştirirse robot eski yere döner. Kılavuz bunu açıkça yazıyor: temizlik sırasında **istasyonun hareket ettirilmemesi önerilir**. Destek sayfası ayrıca istasyonun etrafında yeterli boşluk olacak şekilde **sağlam bir yüzeye** konmasını istiyor; nem riskini azaltmak için istasyon ve robot **serin ve kuru bir yerde** durmalı. Banyo kapısının önü ya da mutfakta lavabonun dibi bu yüzden iyi bir yer değil (çıkarım).

**3. Yanlarını ve önünü boşalt.** Destek sayfasına göre istasyonun **her iki yanında 0,5 m ve önünde 1 m'lik** alan engellerden uzak tutulmalı. N8 kılavuzunun yerleştirme şekli daha geniş bir boşluk gösteriyor: yanlarda yarım metreden, önde bir buçuk metreden fazla; istasyon duvara dayalı. Yer yetiyorsa geniş olanı uygula (çıkarım).

**4. Yansıtıcı eşyaları uzaklaştır.** Aynı maddede Ecovacs bu alanın **yansıtıcı nesnelerden (aynalar, metaller ve camlar gibi)** de uzak tutulmasını istiyor. Önüne boy aynası, cam sehpa ya da metal bir dolap gelmişse yerini değiştir.

**5. Kapıyı açık, odayı aydınlık tut.** Destek sayfasının ilk maddesi: istasyonun bulunduğu **odanın kapısının kapalı olmadığından** emin ol. Dördüncü maddesi: robot temizlik yaparken **odayı olabildiğince aydınlık** tut.

**6. Uzun duraklatma yapma.** Tablonun ikinci satırı: robotu **90 dakikadan fazla duraklatma.** Duraklatıp unuttuysan robotu istasyona taşı ve temizliği oradan yeniden başlat.

**7. Sensörleri ve tekerlekleri temizle.** Robot istasyonun etrafında daireler çiziyor ya da geri geri gidiyorsa destek sayfası üç neden sayıyor: **düşme önleyici sensörler** tozlanmış, **tekerleklere** saç dolanmış ya da **tampon rayı** sıkışmış. Robotu kapat, sensörleri robotla gelen temizleme aletiyle sil, tekerlekteki saçı al, tamponun iki yanına bastırıp geri geldiğini kontrol et. N8 kılavuzunun bakım tablosunda tekerlek, düşme önleyici sensör ve tampon haftalık bakım listesinde.

## Temizliği bitirmeden istasyona dönüyorsa

Bu ayrı bir satır ve her zaman arıza değil. Kılavuza göre çalışma süresi zemine, odanın karmaşıklığına ve seçilen moda göre değişir; pil azalınca robot kendiliğinden şarj moduna geçip istasyona döner. Uygulamada **Sürekli Temizleme** açıksa şarjdan sonra yarım kalan turu tamamlar. Robot mobilyaların kapattığı alanlara ulaşamıyorsa mobilyaları ve küçük eşyaları yerleştirerek alanı düzenle. Kılavuz istasyon evin merkezinden çok uzaksa onu **evin merkezi bir odasındaki duvara** koymanı öneriyor.

## İstasyon halının üzerindeyse

Destek sayfası bu durum için iki not düşüyor. İstasyon halıdaysa ve robot dönmekte zorlanıyorsa **istasyonun yönünü ayarla**. Robot paspas modundaysa N8 ultrasonik sensörü yüzünden **varsayılan olarak halının üzerinden geçmez**; Ecovacs bu yüzden istasyonu **sert zemine** koymanı öneriyor.

Şarj bağlantısıyla ilgili sorunlar için [Ecovacs Deebot şarj olmuyor](/blog/ecovacs-deebot-sarj-olmuyor/), harita kaybolduysa [Deebot haritalama nasıl yapılır](/blog/ecovacs-deebot-haritalama-nasil-yapilir/) yazısına bak. Markadan bağımsız liste: [robot süpürge haritalama sorunu](/blog/robot-supurge-haritalama-sorunu/).

## Ne zaman servis

- İstasyonun yeri, çevresi, kapı ve ışık düzgünken robot istasyonu hâlâ bulamıyorsa.
- Sensörler ve tekerlekler temizken robot daire çizmeye devam ediyorsa; destek sayfası bu durumda Ecovacs müşteri hizmetlerini gösteriyor.
- İstasyon ya da güç kablosu hasarlıysa; kılavuz hasarlı istasyonun kullanılmamasını istiyor.

⛔ **Kendin-çöz sınırı burada biter.** İstasyonun yeri, çevresi ve robotun dış temizliği senin; sensör, navigasyon ve elektronik arızası yetkili servisin.

## Servisi aramadan önce iki dakikalık özet

1. Model ne (robotun altındaki etikette)?
2. İstasyon son temizlikte yerinden oynadı mı?
3. Temizlik istasyondan mı başladı?
4. İstasyonun önünde ayna, cam ya da metal eşya var mı?
5. Robot dönerken daire mi çiziyor, yoksa bir yerde mi duruyor?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
