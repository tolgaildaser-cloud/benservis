---
title: "Samsung mikrodalga kendiliğinden kapanıyor"
description: "Samsung mikrodalga çalışırken kapanıyorsa: fırını soğut, fanı dinle, boş çalıştırma, havalandırma boşluğunu aç, ayrı priz kullan. Samsung kılavuzuna göre."
slug: "samsung-mikrodalga-kendiliginden-kapaniyor"
date: "2026-10-03"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, mikrodalga koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un KENDİ alan adından indirildi:
#   org.downloadcenter.samsung.com → 302 → downloadcenter.samsung.com, HTTP 200, application/pdf. Sayfa = PDF sayfası. Yerel: blog-taslaklar/kaynak-mikrodalga-3eki/
#  S1) MS23K3555ES (solo)     https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=MS23K3555ES&CttFileID=10050739&CDCttType=UM&VPath=UM%2F202501%2F20250124214349803%2FO_DE68_04422C_09_IB_FULL_MW3500K_MS23K3555ES_ND_TR_250113.pdf  36 s.  md5 f6807838775fcda408d8b59dd9004d70
#  S2) MG22M8074AT (ankastre) https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=MG22M8074AT&CttFileID=10050745&CDCttType=UM&VPath=UM%2F202501%2F20250124215510421%2FO_DE68_04500A_05_IB_FULL_MQ8000M_MG22M8074AT_TR_250113.pdf  44 s.  md5 9fa416f0c1553481e0291524183ee472
# Ana satır: S1 s.26 · S2 s.36 "Çalışma sırasında güç kapanıyor." → "Fırın uzun süredir pişiriyordur." / "Uzun süre pişirdikten sonra, fırının soğumasını sağlayın."
#   · "Soğutma fanı çalışmıyor." / "Soğutma fanının sesini dinleyin." · "İçinde yiyecek olmadan fırın çalıştırılmaya çalışılıyordur." / "Fırına yiyecek koyun."
#   · "Fırın için yeterince havalandırma alanı yoktur." / "Havalandırma için fırının önünde ve arkasında giriş/çıkışlar vardır. Ürün kurulum kılavuzunda belirtilen
#   boşlukları koruyun." · "Aynı prizde çok sayıda fiş kullanılıyordur." / "Yalnızca fırın için kullanılacak bir priz belirleyin."
# Yan satırlar: S1 s.26 "Çalıştırma sırasında fırının dışı çok sıcak." → havalandırma + "Fırının üzerinde nesneler vardır." / "Fırının üzerindeki tüm nesneleri kaldırın."
#   · S1 s.26 "Fırın çalışırken duruyor." → kapak açılmış / "...Start (Başlat) düğmesine yeniden basın." · S1 s.27 soğutma fanı pişirmeden sonra "yaklaşık 3 dakika"
#   · S1 s.9 kurulum: "arka duvardan ve her iki taraftan en az 10 cm ve üstten 20 cm yer bırakın", "Zeminden yaklaşık 85 cm yukarıda düz, dengeli bir yüzey",
#   "radyatörlerin yanı gibi sıcak veya nemli ortamlara kurmayın", "Kullanmanız gerekiyorsa yalnızca onaylı uzatma kabloları kullanın."
#   · S1 s.28 NOT "Önerilen çözüm sorunu çözmezse, yerel Samsung Müşteri Hizmetleri Merkezi'ne başvurun."
# Bilerek yazılmayanlar: "fan duyulmuyorsa fan arızalı" teşhisi (tablo yalnız "sesini dinleyin" diyor) · termik koruma/sigorta açıklaması (belgede yok) · ankastre nişe müdahale · fiyat.
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika (soğuma beklemesi dahil)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Mikrodalganın kullanım ve kurulum kılavuzu"]
steps:
  - "Uzun bir pişirmeden sonra kapandıysa fırının soğumasını bekle."
  - "Fırını çalıştırınca soğutma fanının sesini dinle."
  - "Fırını içinde yiyecek olmadan çalıştırma; içine yiyecek koy."
  - "Fırının önündeki ve arkasındaki hava giriş-çıkışlarını aç, kurulum kılavuzundaki boşlukları koru, üstündeki eşyaları kaldır."
  - "Aynı prizde başka fiş kullanma; fırın için ayrı bir priz belirle."
  - "Kapağı açtıysan, kapattıktan sonra Start (Başlat) düğmesine yeniden bas."
faq:
  - q: "Samsung mikrodalgam çalışırken neden kendi kendine kapanıyor?"
    a: "Samsung'un sorun giderme tablosunda 'Çalışma sırasında güç kapanıyor' satırının karşısında beş neden yazıyor: fırının uzun süredir pişirmesi, soğutma fanının çalışmaması, fırının içinde yiyecek olmadan çalıştırılması, yeterli havalandırma alanının olmaması ve aynı prizde çok sayıda fiş kullanılması. Önerilen işlemler sırasıyla fırını soğutmak, fanın sesini dinlemek, içine yiyecek koymak, kurulum kılavuzundaki boşlukları korumak ve fırın için ayrı bir priz belirlemek."
  - q: "Mikrodalganın etrafında ne kadar boşluk olmalı?"
    a: "MS23K3555ES kurulum bölümüne göre havalandırma için arka duvardan ve her iki yandan en az 10 cm, üstten 20 cm boşluk bırakılmalı; fırın zeminden yaklaşık 85 cm yukarıda, düz ve dengeli bir yüzeye konmalı. Radyatör yanı gibi sıcak ya da nemli yerlere kurulmamalı. Ankastre modellerde ölçüler kendi kurulum kılavuzunda yazıyor."
  - q: "Pişirme bitti ama fan hâlâ çalışıyor, normal mi?"
    a: "Evet. Samsung'a göre soğutma fanı fırını havalandırmak için pişirme tamamlandıktan sonra yaklaşık 3 dakika çalışmaya devam eder; bu bir arıza değildir."
  - q: "Fırının dışı çok ısınıyor, tehlikeli mi?"
    a: "Samsung tablosunda 'Çalıştırma sırasında fırının dışı çok sıcak' satırının iki nedeni var: yetersiz havalandırma alanı ve fırının üzerinde duran nesneler. Çözüm, kurulum kılavuzundaki boşlukları korumak ve fırının üzerindeki tüm nesneleri kaldırmak."
images:
  coverAlt: "Mutfak tezgâhında duvardan ve yanlardan boşluk bırakılarak yerleştirilmiş, üstünde hiçbir eşya olmayan bir solo mikrodalga fırın"
---

Mikrodalgayı üç dakikaya kurdun, bir dakika sonra ekran kararıyor ve fırın susuyor. Samsung'un MS23K3555ES ve ankastre MG22M8074AT kılavuzlarında bu belirti kendi satırıyla geçiyor: **"Çalışma sırasında güç kapanıyor."** Tablonun saydığı beş nedenin hepsi kullanıcının kontrol edebileceği şeyler: uzun pişirme, soğutma fanı, boş çalıştırma, havalandırma ve priz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Uzun pişirmeden sonraysa soğumasını bekle → fanın sesini dinle → boş çalıştırma → önünü, arkasını ve üstünü aç → ayrı priz kullan → kapağı açtıysan Start'a yeniden bas. Sürüyorsa Samsung Müşteri Hizmetleri.

## Adım adım: evde denenecekler

**1. Uzun pişirmeden sonra soğumasını bekle.** Tablodaki ilk neden **"Fırın uzun süredir pişiriyordur."** İşlem: **"Uzun süre pişirdikten sonra, fırının soğumasını sağlayın."** Arka arkaya uzun programlar çalıştırdıysan fırına mola ver, sonra yeniden dene.

**2. Soğutma fanını dinle.** İkinci neden **"Soğutma fanı çalışmıyor."**, Samsung'un önerdiği işlem: **soğutma fanının sesini dinle.** Fan normalde çalışırken duyulur; Samsung'a göre pişirme bittikten sonra da fırını havalandırmak için **yaklaşık 3 dakika** dönmeye devam eder. Fan sesini hiç duymuyorsan bunu servise anlatacağın notlara ekle.

**3. Boş çalıştırma.** Üçüncü neden: **"İçinde yiyecek olmadan fırın çalıştırılmaya çalışılıyordur."** İşlem tek cümle: **"Fırına yiyecek koyun."** Fırını denemek istiyorsan içine mikrodalgaya uygun bir kapta su koy.

**4. Havalandırmanın önünü aç.** Dördüncü neden yetersiz havalandırma alanı. Samsung'a göre fırının **önünde ve arkasında hava giriş-çıkışları** var ve kurulum kılavuzundaki boşluklar korunmalı. Solo MS23K3555ES için bu boşluklar kılavuzda yazıyor: arka duvardan ve iki yandan **en az 10 cm**, üstten **20 cm.** Aynı tabloda fırının dışı çok ısınıyorsa ikinci bir neden daha var: **fırının üzerinde nesneler.** Üstündeki her şeyi kaldır.

**5. Fırına ayrı priz ver.** Beşinci neden: **"Aynı prizde çok sayıda fiş kullanılıyordur."** Samsung'un işlemi: **yalnızca fırın için kullanılacak bir priz belirle.** Kurulum bölümü uzatma kablosu gerekiyorsa **yalnızca onaylı uzatma kabloları** kullanılmasını istiyor.

**6. Kapağı açtıysan Start'a yeniden bas.** Her duruş bir kapanma değil. Tablodaki **"Fırın çalışırken duruyor."** satırına göre yiyeceği çevirmek için kapak açıldıysa fırın bekler; yiyeceği çevirdikten sonra **Start (Başlat) düğmesine yeniden bas.**

## Yerleşim kontrolü

MS23K3555ES kılavuzunun kurulum bölümü yeri de tarif ediyor: zeminden **yaklaşık 85 cm** yukarıda, fırının ağırlığını taşıyabilecek **düz ve dengeli** bir yüzey; **radyatör yanı gibi sıcak ya da nemli** ortamlar değil. Fırını kapalı bir dolap köşesine sıkıştırdıysan ya da üstüne eşya koyduysan, kapanma sorunu yerleşimden kaynaklanabilir. Ankastre modellerde ölçüler modelin kendi kurulum kılavuzunda yazıyor; dolabın içine müdahale bu rehberin kapsamı dışında.

Mikrodalga hiç ısıtmıyorsa: [Samsung mikrodalga ısıtmıyor](/blog/samsung-mikrodalga-isitmiyor/). Markadan bağımsız ısıtma kontrol listesi: [mikrodalga çalışıyor ama ısıtmıyor](/blog/mikrodalga-isitmiyor/).

## Ne zaman servis

- Fırın soğuk, havalandırması açık, ayrı prize takılı ve içinde yiyecek varken **yine çalışma sırasında kapanıyorsa.**
- **Soğutma fanının sesi hiç duyulmuyorsa.**
- Samsung'un genel notu: önerilen çözüm sorunu çözmezse **yerel Samsung Müşteri Hizmetleri Merkezi'ne** başvur.

⛔ **Kendin-çöz sınırı burada biter.** Soğutma, yerleşim, priz ve yük kullanıcıya; fan, iç kablolama ve elektronik servise aittir. Mikrodalganın kasası açılmaz.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (ürün etiketinde)? Solo mu, ankastre mi?
2. Kapanma kaç dakika sonra oluyor, her programda mı?
3. Fan sesi duyuluyor mu?
4. Fırın ayrı prizde mi, etrafında ve üstünde boşluk var mı?

Bu dördüne cevabın varsa servise "kendiliğinden kapanıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
