---
title: "Petekler ısınmıyor: kombi yanıyor ama radyatörler soğuk"
description: "Kombi çalışıyor ama petekler soğuk mu? Peteğin üstü mü altı mı soğuk, hangi kat ısınmıyor — belirtiye göre sebep değişir. Hava alma, basınç ve servis sınırı."
slug: "petekler-isinmiyor"
date: "2026-08-31"
updated: "2026-09-17"
category: "Kombi"
# --- 17 Eyl 2026 · BASINÇ KÜMESİ ÜRETİCİ BELGESİYLE DOĞRULANDI (YK #88) — yayında görünmez ---
# Belgeler 2026-09-17 curl -sL ile indirildi (hepsi HTTP 200), pdftotext ile okundu.
# 1) Vaillant ecoTEC plus VU/VUW/VUI ..6/5-5 F A Kullanma Kılavuzu 0020228719_00
#    https://www.vaillant.com.tr/pdf/ecotecplus5-5-813748.pdf
#    HTTP 200 · 16 sf · md5 c999bf8603f8fc703b823341ebcae02d · soğukta 1,0-2,0 bar, çok katlı s.9 · doldurma vanası yerini bayiye sor, yavaşça aç s.10
# 2) Vaillant ecoTEC pure Kullanma Kılavuzu 0020231736_01
#    https://www.vaillant.com.tr/pdf/ecotec-pure-kullanm-klavuzu-1099614.pdf
#    HTTP 200 · 20 sf · md5 4a40080e85860d29faf39771b38855b4 · >3 bar: ısıtma suyu emniyet ventilinden boşalana kadar bekle s.17
# 3) DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01
#    https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 16 sf · md5 3340a11b923b7332f8eb8685297970b6 · soğukta 1,0-1,5 bar, çok katlı, radyatör havası sonrası basıncı kontrol et / su takviyesi s.12
# 4) Baymak Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 sf · md5 df4c42a6604e3ec39b2d152606464cb0 · soğukken 0,7-1,5 bar, sık tekrarlanırsa servis s.14 · 3 bar emniyet ventili, su kaçağı olabilir s.15
# 5) Baymak Lunatec Montaj ve Kullanma Kılavuzu 300036785
#    https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 36 sf · md5 dec11a69fd55c366d613da7ba31d6d98 · radyatör havası sonrası basıncı kontrol et, gerekirse doldur s.18 · soğukken 1-1,5 bar s.27
# 6) E.C.A. Proteus Premix Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf
#    HTTP 200 · 48 sf · md5 28a5d7565ffbc9c1faaf1e97e45553d9 · soğukken 1,5-2 bar, sık düşerse su kaçağı / tesisatçı s.25
# 7) Bosch Condens 2200i W Kullanma Kılavuzu 6721839341 (2023/04)
#    https://bosch-tr-tr-b.boschhc-documents.com/download/file/file/6721839341.pdf
#    HTTP 200 · 12 sf · md5 e06a7d8792003fe41f2a63b08204887b · 3 bar aşılmamalı, emniyet ventili açılır s.9
# Kapsam: basınç kümesi. Hava alma yöntemi, termostat/vana/pompa, tortu ve 'en sık' başlıkları bu turda denetlenmedi.
# Belgede olmadığı için ÇIKARILDI: "1-1,5 bar" (tek aralık) · "genelde tesisat basıncı düşüktür" · "basınç düşünce su üst kata çıkamaz" · "manometre kombinin ön yüzündedir" · "çalışırken iğne 2 bara çıkabilir, normaldir" · "2,5 barın üstü" · "sürekli su takviyesi kireç ve korozyonu hızlandırır" · "kaçak vardır" (belgede "olabilir")
faq:
  - q: "Peteğin üstü soğuk, altı sıcaksa sebep ne?"
    a: "Peteğin içinde hava kalmıştır. Su alttan girer, hava yukarıda toplanır; sıcak su üst bölüme ulaşamadığı için o kısım soğuk kalır. Peteğin üst köşesindeki hava alma vidası (purjör) yavaşça gevşetilerek hava boşaltılır, düzgün su gelince kapatılır. Bu ücretsiz bir işlemdir ve çoğu evde sorunu çözer."
  - q: "Peteğin altı soğuk, üstü sıcaksa ne anlama gelir?"
    a: "Bu havanın tersi bir tablodur ve genelde peteğin dibinde biriken tortu/çamuru işaret eder. Tesisatta yıllar içinde biriken çökelti alt kanalları tıkar, su üstten dolaşır, alt bölüm ısınmaz. Hava almakla geçmez; tesisat temizliği servis işidir."
  - q: "Kombi yanıyor ama hiçbir petek ısınmıyor, neden?"
    a: "Sıcak su üretiliyor ama tesisata dolaşmıyordur. En sık sebepler: sirkülasyon pompasının dönmemesi (yaz boyu hareketsiz kalan pompalarda görülür), tesisat vanalarının kapalı unutulması, oda termostatının kapalı ya da pilinin bitmiş olması. Musluktan sıcak su geliyor ama petekler soğuksa bu ayrım nettir."
  - q: "Üst kat ısınmıyor, alt kat sıcaksa ne yapmalı?"
    a: "Önce tesisat basıncına bak. Kombi kılavuzları, ısıtma sistemi birden fazla kata yayıldığında daha yüksek bir basınç gerekebileceğini söylüyor; bu değeri yetkili servisten öğren. Basıncı kombi soğukken oku ve kendi kombinin kılavuzundaki aralıkla karşılaştır (örneğin Vaillant ecoTEC plus 1,0–2,0 bar, DemirDöküm Nitromix 1,0–1,5 bar, Baymak Lunatec 1–1,5 bar). Radyatörlerin havasını aldıktan sonra basıncı yeniden kontrol et, gerekirse su ekle. Basınç düşmesi sık tekrarlanıyorsa tesisatta su kaçağı olabilir; yetkili servise başvur."
images:
  coverAlt: "Radyatör peteği ve üst köşesindeki hava alma vidası"

---

Kombi çalışıyor, musluktan sıcak su geliyor, ama odalar ısınmıyor. Bu tabloda **arıza tek değildir** — peteğin neresinin soğuk olduğu, hangi katın ısınmadığı ve pompanın çalışıp çalışmadığı birbirinden farklı sebeplere işaret eder.

> ⚡ **Kısa özet:** Peteğin **üstü soğuk altı sıcaksa** içinde hava vardır — hava alma vidasından boşaltılır, ücretsizdir. **Altı soğuk üstü sıcaksa** dipte tortu birikmiştir, bu servis işidir. **Hiçbir petek ısınmıyorsa** su dolaşmıyordur: pompa, vana ya da oda termostatı. **Üst kat soğuksa** basınca bak — kombi soğukken, **kombinin kılavuzundaki aralıkla** karşılaştır.

## Önce belirtiyi ayır

| Belirti | En olası sebep | Kim çözer |
|---|---|---|
| Peteğin üstü soğuk, altı sıcak | İçinde hava kalmış | Kendin, ücretsiz |
| Peteğin altı soğuk, üstü sıcak | Dipte tortu/çamur birikmesi | Servis |
| Tüm petekler soğuk, musluk suyu sıcak | Pompa dönmüyor / vana kapalı / termostat | Önce kontrol, sonra servis |
| Üst kat soğuk, alt kat sıcak | Tesisat basıncı düşük olabilir | Önce basınç kontrolü; çok katlı tesisatta değer için servis |
| Tek oda soğuk, diğerleri sıcak | O peteğin vanası kapalı ya da denge bozuk | Önce kontrol |
| Petek sıcak ama oda ısınmıyor | Petek kapasitesi / yalıtım / pencere | Isıtma arızası değil |

Bu ayrımı yapmadan hava almak zaman kaybıdır: dipte tortu varsa purjörden ne kadar hava alırsan al alt bölüm soğuk kalmaya devam eder.

## Hava alma: en sık sebep, en kolay çözüm

Yaz boyunca duran tesisata hava girer. Su alttan girip yukarı doğru dolaştığı için hava peteğin üst bölümünde toplanır ve sıcak suyun oraya ulaşmasını engeller. Klasik tablo budur: **elini peteğin altına koyunca sıcak, üstüne koyunca soğuk.**

1. Kombiyi **kapat**, tesisatın soğumasını bekle.
2. Peteğin üst köşesindeki hava alma vidasını bul — küçük, çoğu modelde anahtarla ya da düz tornavidayla açılır.
3. Altına bir bez ve kap koy.
4. Vidayı **yavaşça, çeyrek tur** gevşet. Tıslama sesi havanın çıktığını gösterir.
5. Ses kesilip **düzgün su gelmeye başlayınca kapat.** Fazla gevşetme.
6. Evdeki bütün peteklere aynı işlemi uygula — **en alt kattan başlayıp yukarı doğru** git.

📌 **Hava aldıktan sonra basınç düşer, bu beklenen bir sonuçtur.** Sistemden hava çıktı, yerine su gerekiyor. Basıncı yeniden kontrol et, gerekirse kombinin kılavuzundaki aralığa getir.

## Basınç: kombi soğukken, kılavuzdaki aralıkta

Basınç kombinin göstergesinden ya da ekranından okunur. Kılavuzlar okumayı **tesisat soğukken** yapmayı söylüyor. Doğru aralık modele göre değişir:

- Vaillant ecoTEC plus: 1,0–2,0 bar
- DemirDöküm Nitromix: 1,0–1,5 bar
- Baymak Lunatec: 1–1,5 bar
- Baymak Duotec: 0,7–1,5 bar
- ECA Proteus Premix: 1,5–2 bar

- **Aralığın altındaysa:** ısıtma sistemini doldur. Doldurma vanasının yerini bilmiyorsan montajı yapan yetkili servise sor; vanayı yavaşça aç, değere gelince kapat. Tesisat birden fazla kata yayılıyorsa daha yüksek bir değer gerekebilir; bunu servisten öğren.
- **3 bar:** Bosch Condens 2200i W ve Baymak Duotec kılavuzlarında emniyet ventilinin açılıp su boşalttığı üst sınır. Vaillant ecoTEC pure kılavuzu 3 barı aşan basınçta suyun emniyet ventilinden boşalmasını beklemeyi söylüyor. Basınç yüksek kalıyorsa yetkili servise başvur.

🔴 **Basınç düşmesi sık tekrarlanıyorsa mesele doldurmak değildir.** Baymak ve ECA kılavuzları bu durumda tesisatta su kaçağı olabileceğini ve yetkili servise ya da tesisatçıya başvurmayı söylüyor.

## Hiçbir petek ısınmıyorsa: su dolaşmıyor demektir

Musluktan sıcak su geliyor ama petekler tümüyle soğuksa, kombi ısıtmayı yapıyor da tesisata gönderemiyor demektir. Servisi aramadan önce üç şeye bak:

- **Oda termostatı:** kapalı, yaz konumunda ya da pili bitmiş olabilir. En sık gözden kaçan kalem budur; termostat kombiye "ısıt" sinyali göndermezse kombi ısıtma devresini çalıştırmaz.
- **Tesisat vanaları:** kombinin altındaki gidiş-dönüş vanaları ve petek vanaları yaz temizliğinde kapatılıp unutulmuş olabilir.
- **Sirkülasyon pompası:** yaz boyu hiç çalışmayan pompa mevsim başında kilitlenebilir. Kombi yanıyor, ama pompa dönmediği için sıcak su tesisata basılmaz. Pompanın kendisine müdahale servis işidir.

## Tek oda soğuk kalıyorsa

Diğer odalar ısınıp yalnız biri soğuk kalıyorsa arıza kombide değildir. O peteğin vanası kısılmış ya da tesisat dengesi bozulmuş olabilir: kombiye en yakın petekler suyu önce ve bol aldığı için uzaktaki petek zayıf kalır. Vanayı tam açtıktan sonra da düzelmiyorsa denge ayarı gerekir.

Peteğin **kendisi sıcak ama oda ısınmıyorsa** bu bir ısıtma arızası değildir — petek kapasitesi o hacme yetmiyordur ya da pencere/yalıtım kaynaklı kayıp vardır.

## Servisi aramadan önce

1. Peteklerin **neresi soğuk** — üstü mü, altı mı, hepsi mi? Not et.
2. Oda termostatını kontrol et: açık mı, pili yerinde mi?
3. Kombi altındaki ve petek üstündeki vanaların açık olduğunu doğrula.
4. En alt kattan başlayarak bütün peteklerin havasını al.
5. Kombi soğukken basıncı oku, kombinin kılavuzundaki aralığa getir.
6. Musluktan sıcak su geliyor mu? Geliyorsa arıza ısıtma devresindedir, bunu servise söyle.

Bunlardan sonra da petekler ısınmıyorsa belirtiyi [Benservis'e](/) yaz — olası arızayı ve tahmini maliyeti **ücretsiz** öğren. Önce öğren, sonra çağır.

İlgili: [Kombi yanmıyor](/blog/kombi-yanmiyor/) · [Kombi basıncı düşüyor](/blog/kombi-basinc-dusuyor/) · [Kombi arıza kodları](/blog/kombi-ariza-kodlari/) · [Kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/)

## Sık sorulan sorular

**Peteğin üstü soğuk, altı sıcaksa?**
İçinde hava vardır. Üst köşedeki hava alma vidasından boşaltılır, ücretsizdir.

**Peteğin altı soğuk, üstü sıcaksa?**
Dipte tortu birikmiştir. Hava almakla geçmez, tesisat temizliği gerekir.

**Kombi yanıyor ama hiç petek ısınmıyor.**
Su dolaşmıyordur: oda termostatı, kapalı vana ya da dönmeyen pompa.

**Hava aldıktan sonra basınç düştü, normal mi?**
Düşebilir. Havası alınan tesisatta basıncı yeniden kontrol et; gerekirse kombi soğukken kılavuzdaki aralığa getir.
