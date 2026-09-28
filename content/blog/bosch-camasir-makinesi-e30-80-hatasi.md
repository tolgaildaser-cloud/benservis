---
title: "Bosch çamaşır makinesi E:30-80 hatası"
description: "Yeni Bosch çamaşır makinelerinde E:30-80 (bazı modellerde E:36-10): su tahliye edilemiyor. Hortum, gider ve pis su pompası temizliği adım adım."
slug: "bosch-camasir-makinesi-e30-80-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext -layout ile okundu, tablo satırları sayfa görüntüsüyle (pdftoppm) teyit edildi.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; I ve J, bosch-home.com.tr ürün sayfalarındaki kılavuz bağlantısından bulundu.
#  I) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679  (sayfa atıfları bu belgeye göre)
#  J) WGB244A0TR  https://media3.bosch-home.com/Documents/9001708433_H.pdf  56 s.  md5 a02d83edad66dc95cd9392b467b767f1
#  H) WGA142X1TR  https://media3.bosch-home.com/Documents/9001583102_B.pdf  52 s.  md5 42506a8ca9a5e07e2a54a74b856293f4
# "E:30 / -80" satırı I s.40-41 ve H s.38-39'da; J s.42'de "E:36 -10 / E:30 -80 — Deterjanlı su cihazdan pompalanıp boşaltılmıyor."
#   Sebepler (I): tahliye borusu/hortumu tıkanmış · bükülmüş veya sıkışmış · deterjanlı su pompası tıkanmış · hortum çok yükseğe bağlanmış ("maksimum 1 metre") ·
#   pompa kapağı doğru birleştirilmemiş / tamamen vidalanmamış · deterjan dozajı çok fazla · izin verilmeyen uzatma.
# Pompa boşaltma/temizleme: I s.36-39 "17.3 Pis su pompasının temizlenmesi" + "Sonraki yıkama işleminden önce".
# J s.42: "E:36 -25 -26 Deterjanlı su pompası tıkanmış. Pis su pompasını temizleyiniz." / "E:38 -25 -26 ... 1. Tambur temizleyiniz. 2. Arıza devam ederse, tahliye pompasını temizleyiniz. / Lastik manşonun giriş açıklığı tıkanmış."
# Bilerek YAZILMAYANLAR: pompa motoru/kart teşhisi; "kapat-aç reseti" (E:30-80 satırında Bosch vermiyor); hortum uzatma/montaj değişikliği tarifi (yalnız "izin verilmeyen uzatmayı çıkarınız" aktarıldı).
# Alıntı denetim tablosu: bosch-camasir-makinesi-e30-80-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Yeterince büyük bir kap", "Havlu"]
steps:
  - "Tahliye hortumunun bükülmediğinden ve sıkışmadığından emin ol."
  - "Hortumun en fazla 1 metre yükseğe bağlandığını ve üzerinde izin verilmeyen bir uzatma olmadığını kontrol et."
  - "Musluğu kapat, cihazı kapat ve fişini çek."
  - "Bakım kapağını açıp çıkar, deliğin altına büyük bir kap koy ve boşaltma hortumunu tutma düzeneğinden çıkar."
  - "Kapatma kapağını çekip suyu kaba al, sonra kapatma kapağına bastır ve hortumu yerine tak."
  - "Pompa kapağını dikkatlice çıkar; iç kısmı, vida dişlerini ve pompa gövdesini temizle, çarkın dönebildiğini kontrol et."
  - "Pompa kapağını dayanağa kadar çevir, tutamağın dik durduğunu gör ve bakım kapağını tak."
  - "Musluğu aç, fişi tak, manuel dozajlama bölmesine 1 litre su koy ve bir boşaltma programı çalıştır."
faq:
  - q: "Bosch çamaşır makinesinde E:30-80 ne demek?"
    a: "Yeni nesil Bosch kılavuzlarında E:30-80, deterjanlı suyun cihazdan pompalanıp boşaltılamadığı durumun kodudur. WGB244A0TR kılavuzunda aynı satır E:36-10 / E:30-80 olarak yazılır. Kılavuzun saydığı sebepler tahliye hortumu, gider bağlantısı, pis su pompası ve pompa kapağı ile ilgilidir; fazla deterjan da bunlardan biridir."
  - q: "Pis su pompasını temizlemeden önce neye dikkat etmeliyim?"
    a: "Bosch önce musluğun kapatılmasını, cihazın kapatılıp fişinin çekilmesini istiyor. Yüksek sıcaklıkta yıkama yapıldıysa deterjanlı su sıcak olur; kılavuz sıcak suya dokunulmamasını söylüyor. Pompada su kalmış olabileceği için pompa kapağı dikkatlice çıkarılır; altına yeterince büyük bir kap koymak gerekir."
  - q: "Pompayı temizledim ama kod gitmedi, sırada ne var?"
    a: "Bosch'un tablosunda pompa dışında da sebepler var: pompa kapağının dayanağa kadar vidalanmamış olması, hortumun 1 metreden yükseğe bağlanması, hortuma izin verilmeyen bir uzatma takılması ve fazla deterjan. Bunların hepsi kontrol edildiği hâlde kod sürüyorsa sıradaki yer Bosch müşteri hizmetleridir."
  - q: "Eski Bosch'umda E18 yazıyor, aynı iş mi?"
    a: "Konu aynı: suyun tahliye edilememesi. Eski modellerde Bosch bu durumu E18, F18 ya da d02 koduyla gösterir. O kod için ayrı rehberimiz var: Bosch çamaşır makinesi E18 hatası."
images:
  coverAlt: "Çamaşır makinesinin ön alt köşesinde açılmış bakım kapağı, önünde geniş bir kap ve yere serilmiş havlu"
---

Program sıkmaya geçmek üzereyken durdu, camdan bakınca tamburun dibinde su var ve ekranda **E:30-80** yazıyor. Bazı modellerde aynı durum **E:36-10** olarak da görünür. Bosch'un yeni nesil kullanım kılavuzlarında bu satırın karşılığı şu: **"Deterjanlı su cihazdan pompalanıp boşaltılmıyor."** Kılavuzun saydığı sebepler tahliye hortumundan pompa kapağına kadar uzanıyor ve çoğu evde kontrol edilebilecek noktalar.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:30-80 (bazı modellerde E:36-10) = su tahliye edilemiyor. Sıra şu: hortum bükülmüş mü → hortum 1 metreden yüksek mi, uzatma var mı → fişi çek, suyu boşalt → pis su pompasını temizle → kapağı dayanağa kadar kapat → 1 litre suyla boşaltma programı. Hepsi yerindeyse → Bosch müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Tahliye hortumunu izle.** Bosch'un talimatı: **çıkış borusunun ve su çıkış hortumunun bükülmediğinden veya sıkışmadığından emin ol.** Hortumu makinenin arkasından gidere kadar takip et. Kılavuz ayrıca **tahliye borusunun ve hortumun tıkanmış** olabileceğini yazıyor; aynı giderden başka bir lavabo da yavaş boşalıyorsa sorun tesisattadır.

**2. Yüksekliğe ve uzatmaya bak.** Kılavuza göre hortum çok yükseğe bağlanmışsa su gidemez: Bosch **en fazla 1 metre** yükseklik istiyor. Hortuma **izin verilmeyen bir uzatma** takıldıysa kılavuzun talimatı onu çıkarmaktır.

**3. Güvenliği al.** Pompaya geçmeden önce Bosch'un sırası: **musluğu kapat**, **cihazı kapat**, **fişini çek.**

**4. Kabı hazırla.** **Bakım kapağını** açıp çıkar. Deliğin altına **yeterince büyük bir kap** koy ve ince **boşaltma hortumunu** tutma düzeneğinden çıkar. ⚠️ Yüksek sıcaklıkta yıkama yapıldıysa deterjanlı su sıcaktır; Bosch sıcak suya dokunulmamasını söylüyor. Program yeni durduysa önce suyun soğumasını bekle.

**5. Suyu boşalt.** Boşaltma hortumunun **kapatma kapağını çekip çıkar**, suyun kaba akmasına izin ver. Bitince **kapatma kapağının üzerine bastır** ve hortumu tutma düzeneğine geri tak.

**6. Pompayı temizle.** Pompada su kalmış olabileceği için **pompa kapağını dikkatlice çıkar.** Kapağın iç kısmını, **vida dişli bölümünü** ve **pompa gövdesini** temizle. Bosch, yoğun kir nedeniyle pompa haznesindeki filtre ünitesinin sıkışabileceğini, bu durumda kirlerin giderilip filtre ünitesinin çıkarılması gerektiğini yazıyor. Son olarak **pompanın kanatlı çarkının dönebildiğinden** emin ol.

**7. Kapağı doğru kapat.** Bosch'un tablosundaki sebeplerden biri doğrudan **pompa kapağının tamamen vidalanmamış** olmasıdır. Pompa kapağının parçalarının doğru takıldığından emin ol, kapağı **dayanağa kadar çevir**; **tutamak dik konumda** durmalı. Sonra bakım kapağını takıp kapat.

**8. Boşaltma programıyla dene.** Bosch, pompa boşaltıldıktan sonra bir sonraki yıkamada deterjanın kullanılmadan gidere akmaması için bir **Boşaltma** programı istiyor: musluğu aç, fişi tak, cihazı aç, **manuel dozajlama bölmesine 1 litre su** koy ve tahliye için uygun bir program seç. Su gidiyorsa sorun hortumda ya da pompadaydı.

## Tabloda bir sebep daha: fazla deterjan

Bosch'un E:30-80 satırında şaşırtıcı bir madde var: **deterjan dozajı çok fazla.** Fazla köpük tahliyeyi engelleyebilir. Kılavuzun verdiği hızlı önlem şu: **bir yemek kaşığı yumuşatıcıyı 0,5 litre suyla karıştır** ve karışımı manuel dozajlama gözüne dök (Bosch'a göre outdoor, spor ve kaz tüyü çamaşırlar için geçerli değildir). Akıllı dozajlama kullanıyorsan temel dozaj miktarını azalt; elle dozlama yapıyorsan aynı miktardaki bir sonraki yıkamada **daha az deterjan** kullan.

## Kodu doğru okumak

Yeni nesil Bosch ekranlarında hata iki parçalıdır ve anlamı **ek** belirler. WGB244A0TR kılavuzunda tahliyeyle ilgili komşu satırlar da var:

| Ekrandaki kod | Bosch kılavuzundaki karşılığı | Bosch ne diyor |
|---|---|---|
| **E:30-80 · E:36-10** | Deterjanlı su pompalanıp boşaltılmıyor | Hortum, gider, pompa, pompa kapağı, deterjan miktarı |
| **E:36-25 · E:36-26** | Deterjanlı su pompası tıkanmış | Pis su pompasını temizle |
| **E:38-25 · E:38-26** | Deterjanlı su pompası tıkanmış | Önce tambur temizliği, sürerse pompa temizliği; lastik manşonun giriş açıklığı da tıkanmış olabilir |

Su girişi tarafındaki E:30-10 için: [Bosch çamaşır makinesi E:30-10 hatası](/blog/bosch-camasir-makinesi-e30-10-hatasi/).

## Eski Bosch'larda aynı konu: E18

Önceki nesil Bosch makineler suyun tahliye edilememesini **E18**, **F18** ya da **d02** koduyla gösterir. Ekranındaki kod iki haneliyse doğru adres: [Bosch çamaşır makinesi E18 hatası](/blog/bosch-camasir-makinesi-e18-hatasi/). Bosch'un yayımladığı iki haneli kodların tamamı: [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/).

## Tekrarını önlemek için

Bosch, pis su pompasının **tıkanma ya da tıkırtı sesi** gibi durumlarda temizlenmesini öneriyor. Tablodaki başka bir satır da aynı işe işaret eder: **deterjanlı su pompasında tıkırtı** duyuluyorsa pompada yabancı cisim vardır. Bosch'un çamaşır hazırlama bölümü ayrıca çalıştırmadan önce **ceplerdeki tüm cisimlerin boşaltılmasını**, küçük çamaşırlar (örneğin çocuk çorapları) için yıkama filesi kullanılmasını istiyor.

## Sınır nerede biter

Hortum düz ve 1 metreden alçakta, gider açık, pompa temiz, kapak dayanağa kadar kapalı, deterjan az ve kod hâlâ geliyorsa Bosch kullanıcıya başka adım vermiyor. Kılavuzun arıza bölümündeki uyarı açık: usulüne uygun olmayan onarımlar tehlikelidir ve cihazda onarımı yalnız bunun eğitimini almış uzman personel yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **hortum, bakım kapağı ve pompa filtresi kullanıcıya; makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Tahliye hortumu bükülmüş, ezilmiş ya da 1 metreden yüksekte mi?
2. Gider ve sifon açık mı?
3. Pis su pompası temizlendi mi, içinden ne çıktı?
4. Pompa kapağı dayanağa kadar çevrildi mi, tutamak dik mi?
5. Boşaltma programında su gitti mi, kod aynı noktada mı geldi?

Bu beşine cevabın varsa servise kodun tam hâlini ve denediklerini net biçimde anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
