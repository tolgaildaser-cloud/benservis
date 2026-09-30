---
title: "Siemens çamaşır makinesi su almıyor"
description: "Siemens çamaşır makinesi su almıyor ya da E:30-10 veriyorsa Siemens kılavuzundaki sıra: musluk, giriş hortumu, su basıncı ve 2 dakikalık yük algılama."
slug: "siemens-camasir-makinesi-su-almiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Siemens çamaşır belirti koşusu). Sekiz belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, sekizi de HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da Bosch sayfalarından alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası; simge satırları pdftoppm görüntüsüyle teyit edildi.
#  A) WG54K2Y0TR  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (sayfa atıfları esas olarak bu belgeye göre)
#  B) WG64K2Y0TR  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  K) WN54C2A0TR  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# Arızaları giderme satırları (A s.40 ve s.42, G s.34-37):
#   "E:30 -10 / [musluk simgesi] — Musluk kapalı. ▶ Musluğu açınız. · Su giriş hortumu katlanmış veya sıkışmış. ▶ Su giriş hortumunun montajını kontrol ediniz. · Su girişindeki süzgeçler tıkanmış. ▶ Su girişindeki süzgeçleri temizleyiniz. Sürecin animasyonunu görmek için QR kodu taratınız. · Su basıncı düşük. ▶ Muslukta yeterli su basıncı olup olmadığını kontrol ediniz. · Su seviyesi ölçüm sistemi arızalı. Hata mesajı ile cihaz bir su boşaltma işlemini başlatır. 1. Pompalama işlemi tamamlanana kadar yaklaşık 5 dakika bekleyiniz. 2. Cihazı yeniden başlatınız. Gerekirse pompalama işlemini yeniden başlatınız. 3. Arıza devam ederse, müşteri hizmetlerini arayınız." (A s.40)
#   "Tambur dönüyor, su girişi gerçekleşmiyor. — Hata yoktur. Dolum algılama 2 dakikaya kadar aktiftir." · "Tamburun içinde su görünmüyor. — Hata yoktur. Su, görünür alanın altında." (A s.42)
# Diğer: A s.21 musluk simgesi "Su basıncı yok. · Musluktaki su basıncı çok düşük." · A s.28 "Tambur döner ve 2 dakikaya kadar sürebilen bir yük algılama işlemi yürütülür, bunun ardından su girişi gerçekleşir." · A s.13 "Su giriş hortumundaki vidalar elle sıkılmalıdır." · A s.14 "Musluk dikkatlice açılmalı ve bağlantı yerlerinin sızdırmazlığı kontrol edilmelidir."
# DİKKAT satır sınırı: "Kritik fonksiyon arızası / Musluğu kapatınız" E:30-20 satırına ait (A s.40 alt) — bu yazıya YAZILMADI; E:30-20 yayındaki kendi sayfasına link.
# BİLEREK YAZILMAYANLAR: su giriş süzgecini sökme yordamı (kılavuzda metin yok, yalnız QR animasyonu; hortum sökülmesi gerekiyor → numaralı adım yapılmadı, gövdede numarasız anıldı) · valf/basınç şalteri/kart teşhisi (belgede yok) · bar/litre basınç değeri (belgede bu satırda yok).
# Alıntı denetim tablosu: siemens-camasir-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekranda musluk simgesi ya da E:30-10 kodu var mı bak."
  - "Musluğu aç."
  - "Su giriş hortumunun katlanmadığını ve bir yere sıkışmadığını kontrol et."
  - "Muslukta yeterli su basıncı olup olmadığını kontrol et."
  - "Program başladıktan sonra tamburun dönmesi sırasında 2 dakikaya kadar bekle."
  - "Kod sürerse makinenin başlattığı boşaltmanın bitmesi için yaklaşık 5 dakika bekle ve cihazı yeniden başlat."
faq:
  - q: "Siemens çamaşır makinesinde E:30-10 ne demek?"
    a: "Siemens'in arıza tablosunda E:30-10 su girişiyle ilgili satır. Sayılan sebepler: musluk kapalı, su giriş hortumu katlanmış ya da sıkışmış, su girişindeki süzgeçler tıkanmış, su basıncı düşük ya da su seviyesi ölçüm sistemi arızalı. Aynı satırda ekranda musluk simgesi de görünebiliyor; kılavuza göre bu simge su basıncının olmadığını ya da musluktaki basıncın çok düşük olduğunu gösteriyor."
  - q: "Program başladı, tambur dönüyor ama su gelmiyor. Arıza mı?"
    a: "Siemens'e göre hayır. Program başlatılınca tambur döner ve 2 dakikaya kadar sürebilen bir yük algılama işlemi yapılır; su girişi bunun ardından gerçekleşir. Kılavuzun arıza tablosu bu durum için 'Hata yoktur' diyor."
  - q: "Kapak camından hiç su görmüyorum, makine su almıyor mu?"
    a: "Tek başına bu arıza sayılmıyor. Siemens'in tablosundaki 'Tamburun içinde su görünmüyor' satırının karşılığı: hata yoktur, su görünür alanın altında."
  - q: "Giriş süzgecini kendim temizleyebilir miyim?"
    a: "Siemens E:30-10 satırında tıkalı giriş süzgeçlerini temizlemeyi sayıyor ama yordamı kılavuzun metninde değil, satırdaki QR koddan açılan animasyonda veriyor. Animasyonu izleyip adımlardan emin olamıyorsan bu işi yetkili servise bırak."
images:
  coverAlt: "Çamaşır makinesinin arkasındaki su musluğunu açan bir el ve musluğa bağlı gri su giriş hortumu"
---

Programı başlattın ama makine su almıyor; ya ekranda bir musluk simgesi beliriyor ya da **E:30-10** kodu çıkıyor. Siemens'in çamaşır makinesi kılavuzlarındaki arıza tablosunda bu durumun satırı E:30-10 ve ilk sebebi en basiti: **"Musluk kapalı."** Aynı satır giriş hortumunu, su basıncını ve giriş süzgeçlerini de sayıyor. Siemens'in tablosu ayrıca iki durumu açıkça "hata yoktur" diye ayırıyor: suyun ilk 2 dakika gelmemesi ve camdan su görünmemesi. Bu yazıda Siemens'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda musluk simgesi ya da E:30-10 → musluğu aç → giriş hortumu katlanmış mı bak → musluktaki su basıncını kontrol et. Program başlayınca tamburun 2 dakika su almadan dönmesi Siemens'e göre normal. Kod sürerse makinenin başlattığı boşaltmanın bitmesini bekle, cihazı yeniden başlat; olmazsa müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Ekrana bak.** Siemens'in ekran tablosuna göre **musluk simgesi** iki şeyi gösteriyor: **su basıncı yok** ya da **musluktaki su basıncı çok düşük.** Arıza tablosunda aynı simge **E:30-10** koduyla birlikte geçiyor. Ekranda hangisi varsa not et.

**2. Musluğu aç.** E:30-10 satırındaki ilk sebep: **musluk kapalı.** Siemens'in çözümü: **musluğu aç.** Siemens'in kurulum bölümü musluğun **dikkatlice** açılmasını ve bağlantı yerlerinin sızdırmazlığının kontrol edilmesini istiyor.

**3. Giriş hortumunu kontrol et.** İkinci sebep: **su giriş hortumu katlanmış veya sıkışmış.** Siemens'in çözümü: **su giriş hortumunun montajını kontrol et.**

**4. Su basıncını kontrol et.** Tablodaki bir diğer sebep: **su basıncı düşük.** Siemens'in çözümü: **muslukta yeterli su basıncı olup olmadığını kontrol et.**

**5. İlk 2 dakikayı bekle.** Siemens'e göre program başlatılınca **tambur döner ve 2 dakikaya kadar sürebilen bir yük algılama işlemi yapılır, bunun ardından su girişi gerçekleşir.** Arıza tablosunda da "Tambur dönüyor, su girişi gerçekleşmiyor" satırının karşılığı: **hata yoktur, dolum algılama 2 dakikaya kadar aktiftir.**

**6. Kod sürerse boşaltmayı bekle ve yeniden başlat.** E:30-10 satırının son sebebi **su seviyesi ölçüm sistemi arızası.** Siemens'e göre bu durumda cihaz hata mesajıyla birlikte **bir su boşaltma işlemi başlatır.** Talimat: **pompalama işlemi tamamlanana kadar yaklaşık 5 dakika bekle, sonra cihazı yeniden başlat; gerekirse pompalama işlemini yeniden başlat.** Arıza devam ederse Siemens'in sonraki adımı müşteri hizmetleri.

## Giriş süzgeçleri

E:30-10 satırındaki bir sebep daha var: **su girişindeki süzgeçler tıkanmış.** Siemens'in çözümü bunları temizlemek; ancak kılavuz yordamı metinde değil, satırdaki **QR koddan açılan animasyonda** veriyor. Animasyonu izleyip adımlardan emin olamıyorsan bu işi yetkili servise bırak. Siemens'in kurulum bölümündeki kural da hatırlatmaya değer: **su giriş hortumundaki vidalar elle sıkılmalı.**

## Arıza sanılan normal durum

Kapak camından içeride su göremiyorsan bu tek başına arıza değil. Siemens'in tablosunda **"Tamburun içinde su görünmüyor"** satırının karşılığı: **hata yoktur, su görünür alanın altında.**

Ekranda E:30-10 değil **E:30-20** varsa talimat farklı; Siemens bu kodda önce musluğu **kapatmanı** istiyor. Ayrıntısı [Siemens çamaşır makinesi E:30-20 hatası](/blog/siemens-camasir-makinesi-e30-20-hatasi/) yazısında. Diğer kodlar için [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) listesine bak. Makine hiç açılmıyorsa [Siemens çamaşır makinesi çalışmıyor](/blog/siemens-camasir-makinesi-calismiyor/) yazısıyla başla. Markadan bağımsız genel liste için [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısı var.

## Sınır nerede biter

Musluk açık, hortum düz, basınç yeterli, 2 dakika beklenmiş, cihaz yeniden başlatılmış ve kod hâlâ duruyorsa Siemens'in talimatı: **arıza devam ederse müşteri hizmetlerini ara.** Kılavuzun uyarısı: **usulüne aykırı onarımlar tehlike teşkil eder; cihazda onarımları yalnız bunun eğitimini almış uzman personel yapabilir.**

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumun duruşu ve bekleme kullanıcıya; makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Ekranda musluk simgesi mi, E:30-10 mu, başka bir kod mu var?
2. Musluk açık ve giriş hortumu düz mü?
3. Tambur 2 dakikadan uzun süre su almadan döndü mü?
4. Yeniden başlatma denendi mi?
5. Cihazın E-Nr. ve FD numarası elinde mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
