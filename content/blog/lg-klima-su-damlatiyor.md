---
title: "LG klima su damlatıyor: ne yapılır?"
description: "LG klimanın iç ünitesinden su sızıyorsa LG'nin talimatı: klimayı kapat, fişini çek, servise bildir. Dış ünitedeki su ve iç ünitedeki sis normal."
slug: "lg-klima-su-damlatiyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, 30 Eyl belirti damarı). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. ABD LG kaynağı kullanılmadı; ikisi de LG Türkiye (gscs-b2c.lge.com, Türkçe).
# #88: web araması YALNIZ belgelerin yerini bulmak için. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-mitsubishi-klima-sprint/ · pdftotext -layout, sayfa = PDF sayfası.
#  D) LG "KULLANICI EL KİTABI KLİMA · TİP: DUVAR TİPİ" (5401758648, Türkçe; lg.com/tr S12ETK ürün sayfasının kılavuz listesinden, csSalesCode S12ETK.NSJ)
#     https://gscs-b2c.lge.com/downloadFile?fileId=oWezd6acEM51ZIvWrjKjw  42 s.  md5 370ac02f4f4bcfa0bf866058acdccd8e  (metin katmanı kısmen 29 kod noktası kaymalı; dec.py ile çözüldü)
#  K) LG "KULLANICI EL KİTABI KLİMA" gizli tavan tipi kanallı (MFL67522523, Türkçe)
#     https://gscs-b2c.lge.com/open/downloadFile?fileId=RMV9u3J8EsbYsPNl3uhxw  28 s.  md5 88e9d7e61b646813e3b6f4cf868612b7
# D s.34 "Klima normal şekilde çalışmıyor": "Nem seviyesi düşük olduğunda bile iç mekan ünitesinden su sızıyor. x Klimayı kapatın, güç kablosunu prizden çekin veya güç kaynağı bağlantısını kesin ve servis merkezi ile iletişime geçin."
# K s.22 "Servisi Aramanın Gerekli Olduğu Durumlar": "Nem seviyesi düşük olsa bile cihazdan su sızması."
# D s.37: "İç mekan ünitesindeki hava çıkışından sis çıkıyor. | Klimadan gelen soğuk hava sis yapıyor. x Oda sıcaklığı azaldığında, bu durum ortadan kalkar."
#   "Dış mekan ünitesinden su sızıyor. | Isıtma işlemlerinde, ısı dönüştürücüden yoğunlaşmış su damlar. x Bu durum taban tepsisinin altına tahliye hortumu kurmanızı gerektirir. Tesisatçı ile iletişime geçin."
# K s.20: "Klimadan bir yoğuşma sızıntısı var gibi görünüyor. | Klimadan gelen hava akışı ılık oda havasını serinlettiğinde yoğuşma meydana gelir. • Bu, normal bir semptomdur."
# D s.5: "Su taşması nedeniyle klimanın ıslanması halinde yetkili servis merkezi ile iletişime geçin." · D s.6 Kurulum: "Su yoğunlaşmasının düzgün şekilde tahliye olması için tahliye hortumu takın."
# D s.7: "Nem çok yüksek olduğunda veya kapı ya da pencere açık bırakıldığında klimayı uzun süre çalıştırmayın."
# D s.31 bakım tablosu: "Kondensat drenaj tavasını temizlemek için uzman birinden yardım alın." (yılda bir) / "Kondensat drenaj borusunu temizlemek için uzman birinden yardım alın." (4 ayda bir)
# BİLEREK YAZILMAYANLAR: drenaj hortumunu açma, üfleme, tel sokma; iç ünitenin eğimini düzeltme (#31, belgede yok) · "filtre kirliliği damlatır" ya da "gaz eksikliği damlatır" gibi LG belgesinde olmayan teşhis · eşyaları kaldırma/kova koyma adımı (LG belgesinde yok; teknik iddia olmadığı için yalnız gövdede tek cümle, numaralı adıma alınmadı) · fiyat.
# Alıntı denetim tablosu: lg-klima-su-damlatiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda"]
steps:
  - "Suyun iç üniteden mi dış üniteden mi geldiğini ayırt et; ısıtmada dış üniteden damlayan su normaldir."
  - "İç ünitenin hava çıkışından gelen şeyin su mu, oda soğudukça geçen sis mi olduğuna bak."
  - "İç üniteden su sızıyorsa klimayı kumandadan kapat."
  - "Klimanın fişini prizden çek ya da şalterden güç bağlantısını kes."
  - "İç üniteden su sızıntısını model adıyla birlikte LG yetkili servisine bildir."
faq:
  - q: "LG klimanın iç ünitesinden su sızıyor, ne yapmalıyım?"
    a: "LG'nin Türkçe kullanım kılavuzu nem seviyesi düşükken bile iç üniteden su sızıyorsa klimayı kapatmanı, güç kablosunu prizden çekmeni ya da güç kaynağı bağlantısını kesmeni ve servis merkeziyle iletişime geçmeni istiyor. LG bu belirtiyi servis çağrılması gereken durumlar arasında sayıyor."
  - q: "Klimanın hava çıkışından beyaz buhar gibi bir şey çıkıyor, sızıntı mı?"
    a: "Hayır. LG kılavuzuna göre klimadan gelen soğuk hava sis yapabilir ve oda sıcaklığı düştüğünde bu durum ortadan kalkar. LG'nin kanallı tip el kitabı da klimanın havası ılık oda havasını serinlettiğinde oluşan yoğuşmanın normal olduğunu yazıyor."
  - q: "Isıtma modunda dış üniteden su akıyor, sorun mu?"
    a: "LG kılavuzuna göre ısıtma sırasında dış ünitenin ısı dönüştürücüsünden yoğunlaşmış su damlar. LG bu suyun yönlendirilmesi için taban tepsisinin altına tahliye hortumu kurulmasını ve bunun için tesisatçıyla iletişime geçilmesini öneriyor."
  - q: "Drenaj borusunu kendim temizleyebilir miyim?"
    a: "LG'nin bakım tablosu kondensat drenaj borusunun ve drenaj tavasının temizliği için uzman yardımı alınmasını istiyor. Hortumu açmaya, içine tel sokmaya ya da üflemeye çalışma."
images:
  coverAlt: "Duvardaki beyaz split klimanın iç ünitesi kapalı, altında kuru bir zemin ve elinde uzaktan kumanda tutan bir kişi"
---

Klimanın altında damlalar ya da duvarda ıslaklık fark ettin. LG'nin Türkçe kullanım kılavuzu bu belirtiyi, kontrol listesiyle çözülen konulardan değil, doğrudan servis isteyen satırlardan sayıyor: **"Nem seviyesi düşük olduğunda bile iç mekan ünitesinden su sızıyor."** Talimat da açık: **"Klimayı kapatın, güç kablosunu prizden çekin veya güç kaynağı bağlantısını kesin ve servis merkezi ile iletişime geçin."** Bu yazı, sızıntının gerçekten iç üniteden olup olmadığını ayırt etmeni ve servisi çağırmadan önce güvenle yapabileceklerini LG'nin belgelerinden anlatıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ayırt et: hava çıkışındaki sis ve ısıtmada dış üniteden damlayan su normal. İç üniteden su sızıyorsa klimayı kapat, fişini çek ya da şalterden gücü kes ve LG yetkili servisine bildir.

## Normal olan hangisi?

Her damla ya da buhar arıza değil. LG kılavuzları şu durumları normal sayıyor:

| Gördüğün | LG'nin açıklaması |
|---|---|
| İç ünitenin hava çıkışından sis çıkıyor | Klimadan gelen soğuk hava sis yapar; oda sıcaklığı düşünce geçer |
| Klimadan yoğuşma sızıntısı var gibi görünüyor | Klimanın havası ılık oda havasını serinlettiğinde yoğuşma olur; normal (LG kanallı tip el kitabı) |
| Isıtmada dış üniteden su damlıyor | Isı dönüştürücüden yoğunlaşmış su damlar; taban tepsisi altına tahliye hortumu için tesisatçıya başvur |

İç ünitenin kendisinden su sızması ise bu listede yok. LG bunu, nem seviyesi düşükken bile oluyorsa, servis çağrılması gereken durumlar arasında sayıyor.

## Adım adım: evde denenecekler

**1. Kaynağı ayırt et.** Suyun iç üniteden mi dış üniteden mi geldiğini ayırt et; ısıtmada dış üniteden damlayan su normaldir. LG'ye göre ısıtma sırasında dış ünitenin ısı dönüştürücüsünden yoğunlaşmış su damlar.

**2. Sis mi, su mu?** İç ünitenin hava çıkışından gelen şeyin su mu, oda soğudukça geçen sis mi olduğuna bak. LG'ye göre klimadan gelen soğuk hava sis yapabilir ve oda sıcaklığı düştüğünde bu durum ortadan kalkar.

**3. Kapat.** İç üniteden su sızıyorsa klimayı kumandadan kapat.

**4. Gücü kes.** Klimanın fişini prizden çek ya da şalterden güç bağlantısını kes. Elin ıslakken klimaya dokunma. LG, su taşması nedeniyle klima ıslandıysa da yetkili servisle iletişime geçilmesini istiyor. Beklerken damlayan yerin altındaki eşyaları kaldırıp suyu bir kapla toplayabilirsin.

**5. Servise bildir.** İç üniteden su sızıntısını model adıyla birlikte LG yetkili servisine bildir.

## Ne zaman servis?

Bu belirtide servis sınırı en baştan çizili: LG, **nem seviyesi düşükken bile iç üniteden su sızıyorsa** klimayı kapatıp gücü kesmeni ve servis merkezini aramanı istiyor. Bakım tablosu da kondensat drenaj borusu ve drenaj tavasının temizliği için **uzman yardımı** alınmasını istiyor.

| Durum | Kimin işi |
|---|---|
| Hava çıkışında sis, klimanın havasıyla oluşan yoğuşma | Kimsenin; normal çalışma |
| Isıtmada dış üniteden damlayan su | Taban tepsisi altına tahliye hortumu için tesisatçı |
| İç üniteden su sızıntısı | Klimayı kapat, gücü kes, LG yetkili servisi |
| Kondensat drenaj borusu ve tavası temizliği | Uzman, LG yetkili servisi |
| Su taşması yüzünden klima ıslandı | LG yetkili servisi |

LG kılavuzu ayrıca nem çok yüksekken ya da kapı veya pencere açık bırakılmışken klimanın uzun süre çalıştırılmamasını istiyor.

⛔ Drenaj hortumunu açmaya, içine tel sokmaya, üflemeye, iç üniteyi yerinden oynatmaya ya da dış üniteye çıkmaya çalışma.

Markadan bağımsız anlatım için [klima su damlatıyor](/blog/klima-su-damlatiyor/) yazısına bakabilirsin. İç üniteden koku da geliyorsa [LG klima koku yapıyor](/blog/lg-klima-koku-yapiyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Servis talimatı, sis ve dış ünite notları, su taşması uyarısı, kullanım uyarısı ve drenaj bakımı LG'nin Türkçe duvar tipi klima kullanıcı el kitabından; yoğuşma notu ve servis listesi LG'nin Türkçe kanallı tip klima el kitabından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
