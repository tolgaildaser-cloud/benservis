---
title: "Baxi kombi sıcak su gelmiyor: önce ayarlara bak"
description: "Baxi kombiden sıcak su gelmiyorsa önce çalışma moduna, sıcak su ayarına ve ekrandaki koda bak. Kılavuzdaki sıra ve servisi arama zamanı."
slug: "baxi-kombi-sicak-su-gelmiyor"
date: "2026-10-24"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "baxi" geçen slug ya da başlık yok (ls-tree + title grep boş).
#   baymak-kombi-sicak-su-vermiyor başka marka sorgusu; bağlantı verilmedi, metin alınmadı. Dalga 3 G kümesi Baxi'yi "Türkiye belgesi yok" diye elemişti; Dalga 6'da baxi.it belgesi #88'e göre geçerli.
# Arama kanıtı (suggestqueries client=firefox hl=tr gl=tr; ham: _kaynak/ot-kanit.txt): 12:44 "baxi kombi s" → 1. "baxi kombi sıcak su gelmiyor";
#   "baxi kombi" → 2.; "baxi " → 6.; 13:03 "baxi kombi sıcak" → 1. "baxi kombi sıcak su gelmiyor". GSC: satır yok (www-3..6 Sorgular.csv'de "baxi" yok).
# Belge zinciri (bu koşu 13:07–13:08): www.baxi.com.tr → 301 → www.baxi.it (200).
#  (X3) https://www.baxi.it/prodotti/caldaie-residenziali/murali-convenzionali/eco5blue (200) → https://edge.sitecorecloud.io/bdrthermea1-platform-production-864a/media/Project/BaxiIT/BaxiIT/Documents/Manuali-Instal-e-uso/Eco5Blue.pdf
#       (200 application/pdf) ECO5 BLUE, çok dilli, İtalyanca bölüm, 124 s., 7729106 (02-05/19), md5 679514bf516c236fa4662726e0e246bc; kapakta BAXI logosu + "ECO5 BLUE"
#  (X1) https://www.baxi.it/prodotti/caldaie-residenziali/murali-a-condensazione/luna-century (200) → …/Manuali-Instal-e-uso/Manuale-inst-e-uso-Luna-Century.pdf
#       (200 application/pdf) LUNA CENTURY, İtalyanca, 116 s., 7914797-01-20012026, md5 8dcf3219453d0d2350ab064ee03e7679; kapakta BAXI logosu + "LUNA CENTURY"
#  Kaynak sayfalar: X3 s.4 (sıcak su tasarrufu), s.5 (simgeler, tuşlar, Yaz modu), s.6 (Yaz/Kış/OFF), s.7 (E06, E10, E01); X1 s.5 (65 °C), s.11 (standby hata ekranı), s.12 (ana ekran simgesi),
#       s.14 (sıcak su modları, tatil), s.15 (tatil kapatma), s.21–22 (2.6.1–2.6.3), s.108 (E00.44/E00.45).
# BİLEREK YAZILMAYANLAR: plakalı eşanjör, üç yollu vana, akış sensörü teşhisi (X1 s.8'de çalışma ilkesi olarak geçiyor; parça teşhisi servis işi) · su sertliği ve kireç önleyici kurulumu (kurulumcu işi)
#   · sonda direnç ölçümü · Türkiye'de başka adla satılan modeller (belgesiz) · fiyat (#46).
# Alıntı denetimi: baxi-kombi-sicak-su-gelmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanım kılavuzu"]
steps:
  - "Ekranda bir arıza kodu ya da uyarı olup olmadığına bak ve not al."
  - "Kombinin kapalı modda olmadığından emin ol; tuşlu modelde Yaz ya da Kış modunu seç."
  - "Ekranlı modelde menüden sıcak su işlevinin açık olduğunu kontrol et."
  - "Ekranlı modelde sıcak su modunun Tatil ya da Eco'da kalmadığına bak, gerekirse Konfor ya da programa al."
  - "Sıcak su sıcaklık ayarını kontrol et ve gerekirse yükselt."
  - "Bir sıcak su musluğunu aç ve ekranda musluk simgesiyle alev simgesinin görünüp görünmediğine bak."
  - "Kod varsa kılavuzdaki karşılığını uygula; sıcak su sondası arızası gibi kodlarda yetkili servisi ara."
faq:
  - q: "Baxi kombi kalorifer ısıtıyor ama sıcak su vermiyor, neden?"
    a: "Önce ayarlara bak. LUNA CENTURY kılavuzunun İtalyanca baskısına göre sıcak su işlevi menüden ayrıca kapatılabiliyor; ana menüde sıcak suyu açıp kapatan bir seçenek var. Ayar doğruysa ve ekranda bir kod varsa kodun karşılığına bak. Kod yoksa ve sorun sürüyorsa yetkili servis."
  - q: "Kombim OFF konumunda, sıcak su gelir mi?"
    a: "Hayır. ECO5 BLUE kılavuzuna göre kapalı (OFF) modda yalnız donma koruması çalışıyor; sıcak su ve ısıtma talepleri karşılanmıyor. Yaz modunda yalnız sıcak su, Kış modunda hem sıcak su hem ısıtma çalışıyor."
  - q: "Sıcak su ılık geliyor, ne yapmalıyım?"
    a: "Sıcak su sıcaklık ayarını yükselt. LUNA CENTURY'de konfor ve eco olmak üzere iki ayrı sıcak su ayarı var; tatil modu da sıcak su sıcaklığını düşürüyor. Kılavuz sıcak suyu soğuk suyla karıştırmadan istediğin sıcaklığa ayarlamanın tasarruf sağladığını da yazıyor."
  - q: "Ekranda E06 yazıyor, ne demek?"
    a: "ECO5 BLUE kılavuzunda E06 sıcak su sondasının arızası. Kullanıcıya verilen çözüm yetkili servisi aramak. LUNA CENTURY'de sıcak su sensörünün arızası E00.44 ve E00.45 kodlarıyla görünüyor; bunlar da servis işi."
  - q: "Sıcak su çok sıcak geliyor, tehlikeli mi?"
    a: "LUNA CENTURY kılavuzu, ayarlara göre sıcak su sıcaklığının 65 °C'yi geçebileceği uyarısını yapıyor. Musluğu açarken dikkatli ol ve ayarı ihtiyacına göre düşür."
images:
  coverAlt: "Banyo lavabosunda açık bir musluk ve arkada duvara asılı beyaz bir kombi"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda su giriş musluğu"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Baxi kombin peteği ısıtıyor ya da hiç ses çıkarmıyor, ama musluğu açınca sıcak su gelmiyor. Bu belirtinin bir kısmı arıza değil, ayardır: kombi kapalı modda kalmış, sıcak su işlevi menüden kapatılmış ya da sıcaklık düşük ayarlanmış olabilir. Bu yazıda Baxi'nin tuşlu ECO5 BLUE ve ekranlı LUNA CENTURY kombilerinin kullanım kılavuzlarını sıraya koyduk; ikisi de kılavuzun İtalyanca baskısı, alıntılar Türkçeye çevrildi. Senin modelinde menü adları farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ekranda kod var mı bak. Tuşlu modelde kombi OFF'ta ise sıcak su gelmez; Yaz ya da Kış'a al. Ekranlı modelde sıcak su işlevinin açık, modun Tatil ya da Eco'da olmadığını kontrol et. Sıcaklık ayarını yükselt. Musluğu açıp alev simgesine bak. Sonda kodu ya da kod yoksa ve sorun sürüyorsa servis.

## Belirti ve kılavuzdaki karşılığı

| Gördüğün | Kılavuzdaki karşılığı | Kim |
|---|---|---|
| **Ekranda OFF** | Kapalı mod: yalnız donma koruması, sıcak su yok | 🛠️ Sen: Yaz ya da Kış modu |
| **Sıcak su işlevi kapalı** | Menüden sıcak su kapatılmış | 🛠️ Sen: menüden aç |
| **Su ılık** | Sıcaklık ayarı düşük, tatil ya da eco modu | 🛠️ Sen: ayarı yükselt |
| **E10** | Basınç düşük | 🛠️ Sen: basıncı kontrol et |
| **Alev yok simgesi, E01** | Ateşleme olmadı | 🛠️ Sen: R tuşu, tekrar ederse servis |
| **E06, E00.44, E00.45** | Sıcak su sondası ya da sensörü arızalı | 🔧 Servis |

## Adım adım: Baxi kombide sıcak suyu geri getirmek

**1. Önce ekrana bak.** ECO5 BLUE'da arızalar **E** ve bir numarayla görünüyor ve ekranın arka ışığı kodla birlikte yanıp sönüyor. LUNA CENTURY'de bir hata olduğunda bekleme ekranı sorun çözülene kadar kırmızı kalıyor ve "sistem hatası" yazıyor. Kod varsa not al, 7. adıma geç; yoksa ayarlara bak.

**2. Kapalı modda kalmadığından emin ol.** ECO5 BLUE'da açma tuşu üç mod arasında geçiş yapıyor. Kılavuza göre **Yaz** modunda kombi yalnız sıcak su istemini karşılıyor, ısıtma kapalı; **Kış** modunda hem sıcak su hem ısıtma çalışıyor; **kapalı (OFF)** modda ekranda OFF yazıyor ve yalnız donma koruması çalışıyor, sıcak su istemi karşılanmıyor. OFF görüyorsan Yaz ya da Kış'a al.

**3. Ekranlı modelde sıcak su işlevini kontrol et.** LUNA CENTURY'de sıcak su ayrı bir işlev olarak kapatılabiliyor. Kılavuzun yolu: menü tuşuna bas, **Acqua Calda Sanitaria Abilit./Disab.** (sıcak su aç/kapat) menüsüne git, **Acceso** (açık) seç ve onayla. Aynı işi ana ekrandaki kombi simgesinden de yapabiliyorsun: simgeyi seç, sıcak su satırını seç, düğmeyi çevirerek etkinleştir.

**4. Tatil ve eco modlarına bak.** LUNA CENTURY'nin sıcak su modları tablosuna göre **Tatil** modu tatil boyunca sıcak su sıcaklığını düşürüyor; **Eco** satırında ise yalnız donma korumasının etkin olduğu yazıyor. Tatilden döndüysen menüdeki tatil seçeneğine girip **Disabilita** (kapat) seç. Sıcak su modunu **Comfort** (sabit sıcaklık) ya da **Programmazione** (saat programı) olarak seçebilirsin.

**5. Sıcaklık ayarını kontrol et.** ECO5 BLUE'da sıcak su sıcaklığı panelindeki sıcak su artı ve eksi tuşlarıyla ayarlanıyor. LUNA CENTURY'de menüden **Temperatura dell'acqua** bölümüne girip **konfor** ve **eco** sıcak su ayarlarını ayrı ayrı değiştirebiliyorsun. Kısa süre daha sıcak su istersen **hızlı artış** seçeneği var; kılavuza göre bu yalnız sıcak su sensörü takılı kombide çalışıyor ve süre bitince önceki moda dönülüyor.

**6. Musluğu aç, simgeleri izle.** ECO5 BLUE kılavuzuna göre kombi sıcak su verirken ekranda **musluk simgesi yanıp sönüyor** ve çıkış suyu sıcaklığı görünüyor; brülör yanınca da **alev simgesi** çıkıyor. Üstü çizili alev simgesi ateşlemenin olmadığını gösteriyor. Yaz modunda brülör yalnız sıcak su çekildiğinde yanıyor, bu normal.

**7. Kodun karşılığını uygula.** **E10** görüyorsan basınç düşük; ECO5 BLUE kombi soğukken 1–1,5 bar istiyor, ayrıntı [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında. **E01** ateşleme olmadığını gösteriyor; kılavuz R tuşuna en az iki saniye basmanı söylüyor, sonrası [Baxi kombi resetleme](/blog/baxi-kombi-resetleme/) yazısında. **E06** sıcak su sondasının arızası; kılavuzun çözümü yetkili servisi aramak. LUNA CENTURY'de sıcak su sensörünün açık devre ve kısa devre arızaları **E00.44** ve **E00.45** kodlarıyla çıkıyor; bunlar da servis işi.

## Yanık uyarısı

LUNA CENTURY kılavuzunun güvenlik bölümü açık: kombinin ayarlarına göre sıcak su sıcaklığı **65 °C'yi geçebilir.** Sıcaklığı yükselttiysen musluğu açarken dikkatli ol, özellikle çocuk varsa. ECO5 BLUE kılavuzu da tasarruf için sıcak suyu soğuk suyla karıştırmadan, istediğin sıcaklığa ayarlamanı öneriyor; fazladan ısıtmanın enerji kaybına ve daha çok kirece yol açtığını yazıyor.

Kombinin içindeki sıcak su parçalarını ayırt etmek senin işin değil. Genel belirtiler için [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısına bakabilirsin; Baxi'ne özel parça teşhisini yetkili servis yapar.

## Ne zaman servis

- Ayarlar doğru, kod yok ama sıcak su hâlâ gelmiyorsa
- Ekranda E06, E00.44 ya da E00.45 görüyorsan
- E01 R tuşundan sonra tekrar tekrar geliyorsa
- Basınç sık sık düşüyorsa
- Ortamda gaz ya da yanık kokusu varsa

⛔ **Kendin-çöz sınırı burada biter.** Mod tuşu, menü, sıcaklık ayarı, R tuşu ve basınç göstergesi sende; kombinin kapağının içi, sonda, sensör, kart ve gaz hattı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (tanıtım etiketinde yazar)?
2. Ekranda hangi kod var?
3. Kombi hangi modda, sıcak su işlevi açık mı?
4. Sıcak su ayarı kaç derece?
5. Musluk açılınca alev simgesi çıkıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
