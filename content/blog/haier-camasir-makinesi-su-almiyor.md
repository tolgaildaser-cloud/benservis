---
title: "Haier çamaşır makinesi su almıyor"
description: "Haier çamaşır makinesi su almıyor ya da E4 veriyorsa Haier kılavuzundaki sebepler: musluk, şebeke suyu, giriş hortumu, filtre, su basıncı ve kapak."
slug: "haier-camasir-makinesi-su-almiyor"
date: "2026-10-03"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/onden-yuklemeli-camasir-makineleri/31019076/hw90-b14939s8-s/  md5 14a35b60366ffc305527dc9845a45d04
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2022/7/16577223/UM-HW80-90-100_B14939S8-HW80-90-100_B14939_TR  32 s.  md5 88af8065db36183897d4d7a6b8fa32bf
#   pdftotext -layout, sayfa = PDF sayfası. Web araması yok.
# Ana satır (s.23): "Çamaşır makinesi su almıyor." · "Su olmayabilir. → Su musluğunu kontrol edin." · "Giriş hortumu dolaşmış olabilir. → Giriş hortumunu kontrol edin."
#   · "Giriş hortumu filtresi tıkanmış olabilir. → Giriş hortumu filtresinin tıkanıklığını giderin." · "Su basıncı 0,03 MPa altında. → Su basıncını kontrol edin." · "Kapak düzgünce kapatılmamış olabilir. → Kapağı düzgünce kapatın." · "Su kesik olabilir. → Su kaynağını kontrol edin."
# Kod (s.22): "E4 • 12 dakika sonra su seviyesine ulaşılmıyor. • Musluğun tamamen açık olduğundan ve su basıncının normal olduğundan emin olun." · "• Tahliye hortumu kendiliğinden akıyor. • Tahliye hortumunun nasıl takıldığını kontrol edin."
# Bakım (s.19, 8.3 Su giriş valfi ve giriş valfi filtresi): "Güç kablosunu çıkarın ve su kaynağını kapatın." · "Cihazın arkasındaki su giriş hortumunun (Şekil 8-3) ve ayrıca musluğun vidalarını çıkarın." · "Filtreyi su ve bir fırça ile yıkayın" · "Filtreyi yerleştirin ve giriş hortumunu takın."
# Diğer (s.23): "Makineye dolan su boşalıyor." → tahliye hortumu yüksekliği 80 cm'den kısa olabilir / ucu suya batmış olabilir. · s.20 8.5 "Bir sonraki kullanımdan önce güç kablosunu, su girişini ve tahliye hortumunu dikkatlice kontrol edin."
# BİLEREK YAZILMAYANLAR: su giriş valfi / basınç sensörü teşhisi (belgede yok; FA "Satış sonrası hizmetler") · tesisat basıncı ölçme yordamı (belgede yok) · tahliye hortumunu yeniden monte etme (kurulum işi) · fiyat.
# Alıntı denetim tablosu: haier-camasir-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Bez"]
steps:
  - "Makinenin bağlı olduğu musluğun tamamen açık olduğunu kontrol et."
  - "Evde suyun kesik olmadığını başka bir musluktan kontrol et."
  - "Makinenin arkasındaki giriş hortumunun dolaşmadığını, bükülmediğini kontrol et."
  - "Kapağı düzgünce kapat."
  - "Evdeki su basıncının düşük olup olmadığını kontrol et."
  - "Fişi çek, musluğu kapat, giriş hortumunun bağlantısını elle çözüp filtreyi su ve küçük bir fırçayla yıka."
  - "Filtreyi yerine yerleştir, giriş hortumunu tak, musluğu açıp bağlantıda sızıntı olmadığını kontrol et."
faq:
  - q: "Haier çamaşır makinemde E4 hatası ne demek?"
    a: "Haier kılavuzunun kod tablosunda E4 '12 dakika sonra su seviyesine ulaşılmıyor.' anlamında. Çözüm olarak musluğun tamamen açık ve su basıncının normal olduğundan emin olmanı istiyor. Aynı satırda ikinci bir sebep de var: tahliye hortumu kendiliğinden akıyor olabilir; o durumda tahliye hortumunun nasıl takıldığını kontrol etmen gerekiyor."
  - q: "Haier'e göre su basıncı ne kadar olmalı?"
    a: "Arıza giderme tablosu 'Su basıncı 0,03 MPa altında.' satırını su almama sebepleri arasında sayıyor ve çözüm olarak su basıncını kontrol etmeni istiyor."
  - q: "Giriş filtresi ne sıklıkla temizlenmeli?"
    a: "Haier, su kaynağının kireç gibi katı maddelerle tıkanmasını önlemek için giriş valfi filtresinin düzenli olarak temizlenmesini istiyor. Temizlikten önce güç kablosunu çıkarıp su kaynağını kapatman gerekiyor."
  - q: "Makine su alıyor ama hemen boşaltıyor, aynı sorun mu?"
    a: "Hayır, kılavuzda ayrı bir satır: 'Makineye dolan su boşalıyor.' Sebep olarak tahliye hortumunun yüksekliğinin 80 cm'den kısa olması ya da hortum ucunun suya batmış olması gösteriliyor. Çözüm hortumun düzgünce takıldığından ve suyun içinde olmadığından emin olmak."
images:
  coverAlt: "Çamaşır makinesinin arkasında duvardaki açık su musluğuna bağlı gri su giriş hortumu"
---

Program başladı ama tambura su gelmiyor, ya da makine bir süre bekleyip ekrana **E4** yazıyor. Haier'in HW80/90/100-B14939S8 kılavuzunda bu durumun satırı **"Çamaşır makinesi su almıyor."** Haier bu satırda altı sebep sayıyor: **su olmayabilir**, **giriş hortumu dolaşmış olabilir**, **giriş hortumu filtresi tıkanmış olabilir**, **su basıncı 0,03 MPa altında**, **kapak düzgünce kapatılmamış olabilir** ve **su kesik olabilir.** Kod tablosunda da E4'ün anlamı aynı yere çıkıyor: **12 dakika sonra su seviyesine ulaşılmıyor.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Musluk sonuna kadar açık mı, evde su var mı, hortum dolaşmış mı, kapak kapalı mı, basınç yeterli mi? Hepsi tamamsa fişi çekip musluğu kapat ve giriş hortumu filtresini yıka.

## Adım adım: evde denenecekler

**1. Musluğu kontrol et.** Haier'in ilk sebebi **su olmayabilir**, çözümü **su musluğunu kontrol edin.** E4 satırı daha açık konuşuyor: **musluğun tamamen açık olduğundan** emin ol.

**2. Şebekede su olduğunu doğrula.** Tablodaki son sebep **su kesik olabilir**; Haier'in çözümü **su kaynağını kontrol edin.** Mutfaktaki ya da banyodaki bir musluğu açman yeterli.

**3. Giriş hortumuna bak.** Haier'e göre **giriş hortumu dolaşmış olabilir**; çözüm **giriş hortumunu kontrol edin.** Makine duvara itildiğinde arkada kıvrılan, ezilen bir hortum suyu keser.

**4. Kapağı düzgünce kapat.** Tabloda su almamanın sebepleri arasında **kapak düzgünce kapatılmamış olabilir** de var. Çözüm: **kapağı düzgünce kapatın.**

**5. Su basıncını kontrol et.** Haier'in eşiği belli: **su basıncı 0,03 MPa altında** ise makine su almayabilir; çözüm **su basıncını kontrol edin.** E4 satırı da **su basıncının normal olduğundan** emin olmanı istiyor.

**6. Giriş hortumu filtresini temizle.** Haier'in tablosundaki sebep: **giriş hortumu filtresi tıkanmış olabilir** → **giriş hortumu filtresinin tıkanıklığını giderin.** Kılavuzun bakım bölümündeki sıra: önce **güç kablosunu çıkarın ve su kaynağını kapatın**; sonra **cihazın arkasındaki su giriş hortumunun ve ayrıca musluğun** bağlantısını çöz; **filtreyi su ve bir fırça ile yıkayın.** Haier bu filtrenin, su kaynağının **kireç gibi katı maddelerle tıkanmasını önlemek** için **düzenli olarak** temizlenmesini istiyor.

**7. Filtreyi tak, hortumu bağla.** Haier'in son adımı: **filtreyi yerleştirin ve giriş hortumunu takın.** Musluğu açtıktan sonra bağlantıda damla olup olmadığına bak. Kılavuz, uzun süre kullanılmayan makinede de **güç kablosunu, su girişini ve tahliye hortumunu dikkatlice kontrol etmeni** ve **sızıntı yapmadığından** emin olmanı istiyor.

## E4 sürerse: tahliye hortumu

Haier'in E4 satırında ikinci bir sebep var: **tahliye hortumu kendiliğinden akıyor.** Bu durumda makine suyu alırken bir yandan kaybettiği için seviyeye ulaşamaz. Çözüm: **tahliye hortumunun nasıl takıldığını kontrol edin.** Arıza giderme tablosundaki "Makineye dolan su boşalıyor" satırı iki somut sebep veriyor: **tahliye hortumunun yüksekliği 80 cm'den kısa olabilir** ya da **tahliye hortumunun ucu suya batmış olabilir.** Hortumu yeniden konumlamak kurulum işi; emin değilsen yetkili servise bırak.

Makine su alıyor ama başka bir sorun varsa [Haier çamaşır makinesi çalışmıyor](/blog/haier-camasir-makinesi-calismiyor/) yazısına bakabilirsin. Markadan bağımsız anlatım için [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısı var.

## Ne zaman servis

Haier, bakım işlemine başlamadan önce **cihazı devre dışı bırakıp fişini prizden çekmeni** istiyor ve **kendi kendine onarım veya profesyonel olmayan onarım önerilmez** diyor. Ekranda **FA** görürsen kod tablosunda bu **su seviye sensöründe hata** ve tek çözüm **satış sonrası hizmetler ile görüşün.**

⛔ **Kendin-çöz sınırı burada biter.** Musluk açık, basınç normal, hortum düz ve filtre temiz olduğu hâlde makine su almıyorsa ya da E4 tekrar geliyorsa yetkili servise başvur. Haier'in kapanış cümlesi: **alınan önlemlerden sonra bile hata mesajları tekrar beliriyorsa** cihazı kapat, güç bağlantısını kes ve **müşteri hizmetleri ile görüş.**

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
