---
title: "Siemens çamaşır makinesi su boşaltmıyor"
description: "Siemens çamaşır makinesi suyu boşaltmıyorsa Siemens kılavuzundaki sıra: tahliye hortumu, pis su pompası temizliği, pompa kapağı, deterjan ve Sıkma/Boşaltma."
slug: "siemens-camasir-makinesi-su-bosaltmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Siemens çamaşır belirti koşusu). Sekiz belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, sekizi de HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da Bosch sayfalarından alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası; pompa sayfaları pdftoppm görüntüsüyle teyit edildi (bakım kapağı elle açılıyor, alet yok).
#  A) WG54K2Y0TR  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (sayfa atıfları esas olarak bu belgeye göre)
#  B) WG64K2Y0TR  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  K) WN54C2A0TR  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# Arızaları giderme satırları (A s.39-40, G s.34):
#   "E:36 -10 / E:30 -80 (G: + E:18) Deterjanlı su cihazdan pompalanıp boşaltılmıyor. — Su tahliye hortumu çok yükseğe bağlanmış, bükülmüş, sıkışmış veya izin verilmeyen şekilde uzatılmış. ▶ Su tahliye hortumunun montajını kontrol ediniz. · Tahliye borusu veya su tahliye hortumu tıkanmış. ▶ Tahliye borusunu ve su tahliye hortumunu temizleyiniz. · Tahliye pompası tıkalı veya pompa kapağı doğru takılmamış. ▶ Pompa kapağının doğru takılıp takılmadığını kontrol ediniz. ▶ Pis su pompasını temizleyiniz. · Deterjan dozajı çok fazla. ▶ Akıllı dozajlama aktifse, temel dozaj miktarını azaltınız. ▶ Manuel dozajlama yapıyorsanız, aynı miktarda çamaşır yükü olan bir sonraki yıkama işleminde deterjan miktarını azaltınız."
#   "E:36 -25 -26 — Deterjanlı su pompası tıkanmış. ▶ Pis su pompasını temizleyiniz." (A s.40)
# Diğer: A s.14 "Maksimum pompalama yüksekliği 100 cm'dir." · A s.36-38 18.3 Pis su pompasının boşaltılması/temizlenmesi (musluk kapat, Standby, fiş çek, bakım kapağını aç, kap, hortum, kapatma kapağı; pompa kapağını dikkatlice çıkar, temizle, tak, dayanağa kadar çevir, tutamak dik, bakım kapağını kapat) · A s.37 "Sıcak deterjanlı suya dokunulmamalıdır." · A s.38 renk ve kir tutucu kağıtlar pompayı tıkayabilir · A s.24 "Sıkma/Boşaltma — Sıkma ve su boşaltma." · A s.29 su seviyesi yüksekken kapak kilitli kalır.
# BİLEREK YAZILMAYANLAR: pompa motoru/kart/seviye sensörü teşhisi (belgede yok) · tahliye hortumunu sifondan sökme yordamı (belgede yok; yalnız "temizleyiniz") · pompa temizliğinin 8 alt adımı burada tek adımda özetlendi, ayrıntı yayındaki E:36-25 sayfasına link.
# Alıntı denetim tablosu: siemens-camasir-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Düz ve geniş bir kap", "Havlu"]
steps:
  - "Tahliye hortumunun bükülmediğini ve bir yere sıkışmadığını kontrol et."
  - "Hortumun çok yükseğe bağlanmadığını ve izin verilmeyen şekilde uzatılmadığını kontrol et."
  - "Tahliye borusu ya da hortumu tıkalıysa temizle."
  - "Musluğu kapat, cihazı bekleme moduna al ve fişini prizden çek."
  - "Bakım kapağını elle aç, suyu boşaltma hortumuyla bir kaba al ve pis su pompasını temizle."
  - "Pompa kapağını takıp dayanağa kadar çevir, tutamağın dik durduğunu gör ve bakım kapağını kapat."
  - "Deterjan fazlaysa sonraki yıkamada azalt; akıllı dozaj açıksa temel dozaj miktarını düşür."
  - "Fişi tak, musluğu aç ve Sıkma/Boşaltma programını başlat."
faq:
  - q: "Siemens çamaşır makinesinde E:36-10 ya da E:30-80 ne demek?"
    a: "Siemens'in arıza tablosunda bu iki kodun satırı 'Deterjanlı su cihazdan pompalanıp boşaltılmıyor.' Sayılan sebepler: tahliye hortumu çok yükseğe bağlanmış, bükülmüş, sıkışmış ya da izin verilmeyen şekilde uzatılmış; tahliye borusu ya da hortumu tıkanmış; tahliye pompası tıkalı ya da pompa kapağı doğru takılmamış; deterjan dozajı çok fazla. WG52A203TR kılavuzunda aynı satırda E:18 de geçiyor."
  - q: "Pompayı açınca içinden çok su gelir mi?"
    a: "Evet, bu yüzden Siemens önce suyu boşaltmanı istiyor: bakım kapağını açıp altına uygun bir kap koyuyorsun, boşaltma hortumunu tutma düzeneğinden çıkarıp kapatma kapağını çekiyorsun. Siemens'in uyarısı: yüksek sıcaklıkta yıkama yapıldıysa deterjanlı su sıcak olur, sıcak suya dokunma. Pompa kapağını açarken de içeride su kalmış olabileceği için dikkatli çıkar."
  - q: "Pis su pompasını ne sıklıkla temizlemeliyim?"
    a: "Siemens'in kılavuzuna göre pis su pompası tıkanma ya da tıkırtı sesi gibi durumlarda ve düzenli olarak en az yılda bir kez temizlenmeli. Renk ve kir tutucu kağıtlar pompayı tıkayabildiği için Siemens bunları yalnız çamaşır filesi içinde kullanmanı öneriyor."
  - q: "Su boşalmadığı için kapak açılmıyor. Ne yapmalıyım?"
    a: "Siemens'e göre su seviyesi yüksekken kapak güvenlik nedeniyle kilitli kalır. Önce Sıkma programını ya da uygun bir boşaltma programını başlatmayı dene. Program da suyu atamıyorsa suyu yukarıdaki 5. adımdaki gibi boşaltma hortumundan kaba alabilirsin; kapakla ilgili ayrıntılar kapak yazımızda."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin alt ön köşesinde açık bakım kapağı ve önüne konmuş düz bir su kabı"
---

Program durdu, tamburun dibinde su duruyor ya da ekranda **E:36-10** veya **E:30-80** var. Siemens'in çamaşır makinesi kılavuzlarındaki arıza tablosunda bu tablonun adı açık: **"Deterjanlı su cihazdan pompalanıp boşaltılmıyor."** Siemens'in bu satırda saydığı sebepler: tahliye hortumunun duruşu, tıkanmış tahliye hattı, tıkalı pis su pompası ya da yanlış takılmış pompa kapağı ve fazla deterjan. Bu yazıda Siemens'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tahliye hortumu bükülmüş, sıkışmış ya da çok yükseğe mi bağlanmış → düzelt. Hortum tıkalıysa temizle. Musluğu kapat, fişi çek, suyu kaba al, pis su pompasını temizle, pompa kapağını düzgün tak. Deterjanı azalt. Sonra Sıkma/Boşaltma programını başlat. Sıcak suya dokunma.

## Adım adım: evde denenecekler

**1. Tahliye hortumunun duruşuna bak.** Siemens'in tablosundaki ilk sebep: **su tahliye hortumu bükülmüş veya sıkışmış.** Siemens'in çözümü: **su tahliye hortumunun montajını kontrol et.**

**2. Hortumun yüksekliğini ve uzunluğunu kontrol et.** Aynı sebebin devamı: hortum **çok yükseğe bağlanmış** ya da **izin verilmeyen şekilde uzatılmış** olabilir. Siemens'in kurulum bölümüne göre **maksimum pompalama yüksekliği 100 cm.**

**3. Tahliye hattını temizle.** İkinci sebep: **tahliye borusu veya su tahliye hortumu tıkanmış.** Siemens'in çözümü: **tahliye borusunu ve su tahliye hortumunu temizle.** Siemens'in kurulum notu da aynı yere işaret ediyor: çıkış tıkalıysa biriken atık su cihaza geri akabilir; cihazı çalıştırmadan önce atık suyun hızlıca çıktığından ve tıkanmaların giderildiğinden emin olunmalı.

**4. Pompa temizliğine hazırlan.** Üçüncü sebep: **tahliye pompası tıkalı.** Siemens'in pompa bölümündeki ilk adımlar: **musluğu kapat, cihazı bekleme (Standby) moduna getir, fişini elektrik şebekesinden ayır.**

**5. Suyu boşalt ve pis su pompasını temizle.** Siemens'in sırası: **bakım kapağını aç ve çıkar**, açıklığın altına **uygun bir kap** koy, **su boşaltma hortumunu tutma düzeneğinden çıkar** ve **kapatma kapağını çekerek** suyun kaba akmasını sağla. Boşalınca kapağa bastır, hortumu yerine tak. Sonra **pompa kapağını dikkatlice çıkar**; pompada su kalmış olabilir. Siemens'e göre yoğun kir yüzünden filtre ünitesi sıkışabilir; **kirleri gider**, **pompa kapağının iç kısmını, vida dişli bölümünü ve pompa gövdesini temizle.** Bakım kapağı elle açılıyor, alet gerekmiyor. Siemens'in uyarısı: yüksek sıcaklıkta yıkama yapıldıysa **deterjanlı su sıcak olur; sıcak suya dokunma.** Bu işin fotoğraflı ayrıntısı [Siemens çamaşır makinesi E:36-25 hatası](/blog/siemens-camasir-makinesi-e36-25-hatasi/) yazısında sırasıyla anlatılıyor.

**6. Pompa kapağını doğru tak.** Siemens aynı satırda ikinci bir sebep sayıyor: **pompa kapağı doğru takılmamış.** Kapağı tak, **dayanağa kadar çevir**; Siemens'e göre **pompa kapağının tutamağı dik konumda durmalı.** Sonra **bakım kapağını tak ve kapat.**

**7. Deterjanı azalt.** Son sebep: **deterjan dozajı çok fazla.** Siemens'in çözümü iki yollu: **akıllı dozajlama aktifse temel dozaj miktarını azalt**; **manuel dozajlama yapıyorsan aynı miktarda çamaşırla bir sonraki yıkamada deterjan miktarını azalt.**

**8. Sıkma/Boşaltma programını başlat.** Fişi tak, musluğu aç. Siemens'in program tablosunda **Sıkma/Boşaltma** programı **sıkma ve su boşaltma** yapıyor.

## Neden ve ne sıklıkla

Siemens'in kılavuzuna göre pis su pompası **tıkanma ya da tıkırtı sesi** gibi durumlarda ve düzenli olarak **en az yılda bir kez** temizlenmeli. Siemens'in bir notu da tıkanmanın kaynaklarından birini gösteriyor: **renk ve kir tutan örtüler gider pompasını tıkayabilir**; bu kağıtları yalnız çamaşır filesi içinde kullan. Siemens'in tablosunda **"Deterjanlı su pompasında tıkırtı"** satırının sebebi de **tahliye pompasında yabancı cisim**; çözüm yine pompa temizliği.

Ekranda **E:36-25** ya da **E:36-26** görürsen Siemens'e göre deterjanlı su pompası tıkanmış; çözüm aynı pompa temizliği. Diğer kodlar için [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) listesine bak. Su boşalmadığı için kapak açılmıyorsa [Siemens çamaşır makinesi kapak açılmıyor](/blog/siemens-camasir-makinesi-kapak-acilmiyor/) yazısına geç. Markadan bağımsız genel liste için [çamaşır makinesi su atmıyor](/blog/camasir-makinesi-su-atmiyor/) yazısı var.

## Sınır nerede biter

Hortum düz ve temiz, pompa temizlenmiş ve kapağı dik oturmuş, deterjan azaltılmış ve makine Sıkma/Boşaltma programında da suyu atmıyorsa Siemens'in tablosu kullanıcıya başka adım vermiyor. Siemens'in uyarısı: **usulüne aykırı onarımlar tehlike teşkil eder; cihazda onarımları yalnız bunun eğitimini almış uzman personel yapabilir.** Kod tabloda başka bir satıra karşılık gelmiyorsa Siemens'in son adımı: **müşteri hizmetlerini ara.**

⛔ **Kendin-çöz sınırı burada biter.** Hortum, pompa temizliği ve deterjan ayarı kullanıcıya; pompa motoru ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Ekranda hangi kod var: E:36-10, E:30-80, E:36-25 ya da başka?
2. Pompa temizlendi mi, içinden bir cisim çıktı mı?
3. Tahliye hortumu nereye, hangi yükseklikte bağlı?
4. Sıkma/Boşaltma programı denendi mi?
5. Cihazın E-Nr. ve FD numarası elinde mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
