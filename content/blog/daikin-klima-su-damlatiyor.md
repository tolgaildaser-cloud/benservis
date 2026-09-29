---
title: "Daikin klima su damlatıyor: ne yapılır?"
description: "Daikin klimanın iç ünitesinden su damlıyorsa Daikin'in talimatı: durdur, kesiciyi kapat, eşyaları koru, filtreye bak, yetkili servise bildir."
slug: "daikin-klima-su-damlatiyor"
date: "2026-09-29"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# Belgeler 2026-09-28'de curl -sL -A "Mozilla/5.0" ile indirildi (HTTP 200); 2026-09-29'da yeniden indirildi, hepsi HTTP 200; PDF md5'leri birebir aynı.
# PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu. Web araması yalnız belgelerin YERİNİ bulmak için.
#  M) Daikin FTXM-M/CTXM-M kullanım kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1  (sayfa = PDF sayfası; basılı numara bir eksik)
#     s.44 "Aşağıdaki belirtilerden biriyle karşılaşırsanız, derhal yetkili servisi arayın." → "İç ünitede su kaçağı varsa." → "Kesiciyi kapalı konuma getirin ve yetkili servisi arayın."
#     s.40 "SOĞUTMA veya NEM ALMA çalıştırması sırasında tahliye hortumunun sorunsuz şekilde tahliye olduğundan emin olun." / "Tahliye edilen su görünmüyorsa, iç ünitede su kaçağı meydana gelmiş olabilir. Böyle bir durumda çalışmayı durdurun ve yetkili servise danışın."
#     s.5  "İç veya dış ünitelerin doğrudan alt kısmına neme karşı duyarlı olan nesneler yerleştirmeyiniz. Belli başlı koşullarda, ana ünitedeki veya soğutucu borulardaki nemlilik, hava filtresindeki kirlilik veya drenaj sisteminin bloke olmasından dolayı damlama ortaya çıkabilir"
#     s.14 SOĞUTMA / NEM ALMA çalışma koşulları (iç 18-32°C, iç nem maks. %80) dışında: "İç ünitede yoğuşma meydana gelebilir ve damlamaya neden olabilir."
#     s.41 "Dış üniteden su veya buhar geliyor." → ısıtmada defrost; "SOĞUTMA veya NEM ALMA modunda • Havadaki nem, dış ünite borularının soğuk yüzeyinde su olarak yoğunlaşır ve damlamaya başlar."
#     s.42 "İç üniteden buğu çıkıyor." → soğutmada soğuk hava akışıyla buğu
#     s.35 İKAZ temizlik öncesi durdur + kesiciyi kapat; s.37 filtre adımları
#  F) Daikin FTXF50~71 kullanıcı başvuru kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
#     s.33 "Aşağıdaki arızalardan biri meydana gelirse, aşağıda gösterilen önlemleri alın ve satıcınızla iletişime geçin." → "Üniteden su sızıyorsa. | İşletimi durdurun." / "Sistem yetkili bir servis elemanı tarafından ONARILMALIDIR."
#     s.26 DİKKAT: "ünitede veya soğutucu borularında yoğuşma, hava filtresindeki pislik veya drenaj tıkanması damlamaya neden olarak ünitenin altındaki nesnelerin kirlenmesine veya hasar görmesine yol açabilir." / "Nem %80’in üzerinde veya drenaj çıkışı tıkanmışsa yoğuşma oluşabilir."
#     s.18 "(b) Ünite çalışma aralığının dışında çalışırsa, yoğuşma ve su damlaması meydana gelebilir."
#  T2) daikin.com.tr "Hangi Durumlarda Servis Çağırmalısınız?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/hangi-durumlarda-servis-cagirmalisiniz  md5 1d34c92f2cffccf7fd7c11edc8844f94 (2026-09-29)
#     "4. Klimadan Su Damlıyor · İç üniteden damlama veya akıntı varsa, Su sesi, rutubet veya nem kokusu duyuluyorsa, Drenaj hattı tıkanmış ya da hatalı montaj yapılmış olabilir. Servis kontrolü gereklidir."
# BİLEREK YAZILMAYANLAR: drenaj hortumunu açma, üfleme, tel sokma; iç üniteyi sökme ya da eğimini düzeltme; "gaz eksikliği damlatır" gibi belgede olmayan teşhis; filtre temizliğinin servisi gereksiz kıldığı iddiası (Daikin iç ünitede su kaçağında derhal servis istiyor).
# Alıntı denetim tablosu: daikin-klima-su-damlatiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (filtre kuruma hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru bez ya da havlu", "Kova ya da kap", "Elektrikli süpürge", "Sağlam bir tabure"]
steps:
  - "Klimayı kumandadan durdur."
  - "Klimanın kesicisini kapalı konuma getir."
  - "Damlayan yerin altındaki ıslanabilecek eşyaları kaldır, suyu bir kapla topla ve zemini kurula."
  - "Suyun iç üniteden mi dış üniteden mi geldiğini ayırt et; dış ünitenin damlatması soğutmada normaldir."
  - "Ön paneli aç, hava filtrelerini çıkar; kirliyse süpürgeyle ya da suyla temizle, gölgede kurut ve yerine tak."
  - "İç ünitede su kaçağını model adı ve belirtiyle birlikte Daikin yetkili servisine bildir."
faq:
  - q: "Daikin klimanın iç ünitesinden neden su damlar?"
    a: "Daikin kılavuzları damlamanın nedenlerini şöyle sayıyor: ünitede ya da soğutucu borularda yoğuşma, hava filtresindeki kirlilik ve drenaj sisteminin tıkanması. Kılavuzlara göre nem yüzde 80'in üzerindeyse ya da klima çalışma aralığının dışında kullanılıyorsa da yoğuşma ve damlama olabilir. Daikin Türkiye ayrıca drenaj hattının tıkanmış ya da montajın hatalı yapılmış olabileceğini ve servis kontrolü gerektiğini yazıyor."
  - q: "Filtreyi temizledim, klimayı yeniden çalıştırabilir miyim?"
    a: "Daikin kılavuzu iç ünitede su kaçağı varsa kesiciyi kapatıp derhal yetkili servisi aramanı istiyor. Filtre temizliği güvenli bir bakım işi ama bu talimatın yerine geçmez; iç üniteden damlama olduysa önce yetkili servise danış."
  - q: "Dış üniteden su damlıyor, sorun mu?"
    a: "Hayır. Daikin kılavuzuna göre soğutma ya da nem alma modunda havadaki nem dış ünite borularının soğuk yüzeyinde yoğunlaşır ve damlar; ısıtma modunda da dış ünitedeki don, buz çözme sırasında su ya da buhar olarak atılır."
  - q: "Tahliye hortumundan su gelmiyor, ne anlama gelir?"
    a: "Daikin kılavuzu soğutma ya da nem alma sırasında tahliye hortumunun sorunsuz tahliye yaptığından emin olmanı istiyor. Tahliye edilen su görünmüyorsa iç ünitede su kaçağı meydana gelmiş olabilir; bu durumda çalışmayı durdurup yetkili servise danışman gerekir."
images:
  coverAlt: "Duvardaki beyaz split klimanın iç ünitesinin altına konmuş bir kap ve yerden kaldırılmış eşyalar"
---

Klimanın altında damlalar ya da duvarda ıslaklık fark ettin. Daikin'in kullanım kılavuzu bu belirtiyi **"derhal yetkili servisi arayın"** listesine koyuyor: **"İç ünitede su kaçağı varsa."** Talimat da açık: **"Kesiciyi kapalı konuma getirin ve yetkili servisi arayın."** Bu yazı servisi çağırmadan önce ve beklerken güvenle yapabileceklerini, damlamanın normal sayıldığı durumları Daikin'in belgelerinden anlatıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Klimayı durdur, kesiciyi kapat, altındaki eşyaları kaldır. Su dış üniteden geliyorsa soğutmada normaldir. İç üniteden geliyorsa filtreye bak, kirliyse temizle; Daikin'in talimatı iç ünitede su kaçağında yetkili servisi aramak. Filtre temizliği bu çağrının yerine geçmez.

## Normal olan damlama hangisi?

Her damla arıza değil. Daikin kılavuzu şu durumları "sorun değil" diye sayıyor:

| Gördüğün | Daikin'in açıklaması |
|---|---|
| Soğutma ya da nem almada dış üniteden su damlıyor | Havadaki nem dış ünite borularının soğuk yüzeyinde yoğunlaşır ve damlar |
| Isıtmada dış üniteden su ya da buhar çıkıyor | Dış ünitedeki don, buz çözme sırasında su ya da buhar olarak atılır |
| Soğutmada iç üniteden buğu çıkıyor | Odadaki hava soğuk hava akışıyla buğuya dönüşür |
| Soğutmada tahliye hortumunun ucundan su akıyor | Beklenen durum; kılavuz soğutma ve nem almada tahliyenin sorunsuz yapılmasını istiyor |

İç ünitenin kendisinden damlama ya da akıntı ise bu listede yok. Daikin kılavuzları bunun nedenlerini ünitede ya da borularda **yoğuşma**, **hava filtresindeki kirlilik** ve **drenaj sisteminin tıkanması** olarak sayıyor; nem yüzde 80'in üzerindeyse ya da klima kılavuzdaki çalışma aralığının dışında kullanılıyorsa da yoğuşma ve damlama olabileceğini yazıyor.

## Adım adım: evde denenecekler

**1. Durdur.** Klimayı kumandadan durdur. FTXF kılavuzunun su sızıntısı için ilk önlemi bu.

**2. Kesiciyi kapat.** Klimanın kesicisini kapalı konuma getir. FTXM kılavuzu iç ünitede su kaçağında önce bunu istiyor.

**3. Eşyaları koru.** Damlayan yerin altındaki ıslanabilecek eşyaları kaldır, suyu bir kapla topla ve zemini kurula. Daikin, damlamanın ünitenin altındaki eşyaları kirletebileceği ya da hasar verebileceği için iç ve dış ünitenin altına neme duyarlı eşya konmamasını istiyor.

**4. Kaynağı ayırt et.** Suyun iç üniteden mi dış üniteden mi geldiğini ayırt et; dış ünitenin damlatması soğutmada normaldir. Yukarıdaki tabloya bak.

**5. Filtreye bak.** Ön paneli aç, hava filtrelerini çıkar; kirliyse süpürgeyle ya da suyla temizle, gölgede kurut ve yerine tak. Daikin hava filtresindeki kirliliği damlama nedenlerinden biri olarak sayıyor. 40°C'den sıcak su ve sert fırça kullanma, alüminyum kanatlara dokunma, ön panele uzanırken sağlam bir tabure kullan. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**6. Servise bildir.** İç ünitede su kaçağını model adı ve belirtiyle birlikte Daikin yetkili servisine bildir. Filtre kirli çıkıp temizlenmiş olsa bile iç üniteden damlama olduysa Daikin'in talimatı bu.

## Ne zaman servis?

Bu belirtide servis sınırı en baştan çizili: Daikin kılavuzu **iç ünitede su kaçağı** varsa kesiciyi kapatıp **derhal** yetkili servisi aramanı istiyor. Daikin Türkiye de iç üniteden damlama ya da akıntı, su sesi, rutubet ya da nem kokusu varsa **drenaj hattının tıkanmış ya da montajın hatalı yapılmış olabileceğini** ve servis kontrolü gerektiğini yazıyor.

| Durum | Kimin işi |
|---|---|
| Dış üniteden su, soğutmada iç üniteden buğu | Kimsenin; normal çalışma |
| Klimayı durdurmak, kesiciyi kapatmak, eşyaları korumak, filtreyi temizlemek | Senin, bu rehberdeki adımlar |
| İç üniteden damlama ya da akıntı | Daikin yetkili servisi |
| Soğutmada tahliye hortumundan su gelmiyor | Çalışmayı durdur, yetkili servise danış |

⛔ Drenaj hortumunu açmaya, içine tel sokmaya, üflemeye ya da iç üniteyi yerinden oynatmaya çalışma. Daikin kılavuzu klimanın kendin onarılmaya çalışılmamasını istiyor.

Markadan bağımsız anlatım için [klima su damlatıyor](/blog/klima-su-damlatiyor/) yazısına, Daikin'in kod tablosu için [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) yazısına bakabilirsin. Soğutma zayıfladıysa [Daikin klima soğutmuyor](/blog/daikin-klima-sogutmuyor/) yazısı da işine yarar.

---

**Kaynak künyesi.** Derhal servis talimatı, damlama nedenleri, "sorun değil" durumları, tahliye hortumu notu ve filtre temizliği Daikin'in Türkçe kullanım kılavuzlarından (FTXM-M/CTXM-M ve FTXF50~71 serisi); drenaj ve montaj notu daikin.com.tr'deki "Hangi Durumlarda Servis Çağırmalısınız?" sayfasından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
