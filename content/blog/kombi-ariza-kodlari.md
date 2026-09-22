---
title: "Kombi arıza kodları ne demek? (marka marka rehber)"
description: "Kombinde arıza kodu mu var? Vaillant, DemirDöküm, Baymak kodlarının anlamı, düşük su basıncında kılavuzdaki değer ve servis sınırı. Bil, gör, çağır."
slug: "kombi-ariza-kodlari"
date: "2026-06-19"
updated: "2026-09-17"
category: "Kombi"
# --- 17 Eyl 2026 · BASINÇ KÜMESİ ÜRETİCİ BELGESİYLE DOĞRULANDI (YK #88) — yayında görünmez ---
# Belgeler 2026-09-17 curl -sL ile indirildi (hepsi HTTP 200), pdftotext ile okundu.
# 1) Vaillant ecoTEC plus VU/VUW/VUI ..6/5-5 F A Kullanma Kılavuzu 0020228719_00
#    https://www.vaillant.com.tr/pdf/ecotecplus5-5-813748.pdf
#    HTTP 200 · 16 sf · md5 c999bf8603f8fc703b823341ebcae02d · F.22, soğukta 1,0-2,0 bar, <0,80 doldur, çok katlı s.9 · doldurma vanası yerini bayiye sor s.10
# 2) Vaillant ecoTEC intro VUW 24/24 AS/2-1 Kullanma Kılavuzu 8000037574_01
#    https://www.vaillant.com.tr/downloads/ecotec-intro-kullanm-klavuzu-3050427.pdf
#    HTTP 200 · 16 sf · md5 ec496873b94ac3277a9f095e39a8a636 · <0,5 doldur, 1,0-1,4 bar s.9 · F.22 s.10, s.12
# 3) DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01
#    https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 16 sf · md5 3340a11b923b7332f8eb8685297970b6 · soğukta 1,0-1,5 bar, <1,0 doldur, uyarı kendiliğinden söner s.12 · F.22 s.15
# 4) DemirDöküm ademiX Montaj ve Bakım Kılavuzu 0020313926_02
#    https://www.demirdokum.com.tr/products-2/a5-1/ademix-mk-0020313926-02-2323451.pdf
#    HTTP 200 · 44 sf · md5 5bc84f7e4bc6a4fe70867bd0682dbb9e · F.22 s.33
# 5) DemirDöküm Atron Condense Kullanma Kılavuzu 0020281171_00
#    https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf
#    HTTP 200 · 12 sf · md5 7746b6a9d980072b5109b1b27926bd81 · F10, 1,0-2,0 bar, <0,80 doldur s.7-8
# 6) DemirDöküm Nitron Plus Kullanma Kılavuzu 0020193908_03
#    https://www.demirdokum.com.tr/products-2/nitronplus/nitronplus-klavuz-466829.pdf
#    HTTP 200 · 20 sf · md5 51e63dec4da2dcf111d41350fa586e65 · F10, 1,0-2,0 bar, <0,80 doldur s.11
# 7) Baymak Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 sf · md5 df4c42a6604e3ec39b2d152606464cb0 · soğukken 0,7-1,5, çok yavaş aç s.14 · <0,7 doldur, su kaçağı olabilir s.15 · F37 s.17
# 8) Baymak Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122
#    https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf
#    HTTP 200 · 28 sf · md5 723546ecd63c99eaecb5c3143c687c2a · 0,7-1,5 bar s.14 · F37 s.17
# 9) Baymak Eco CT 20 Premix Montaj & Kullanma Kılavuzu 300035751
#    https://www.baymak.com.tr/media/4887/baymak-eco-ct-20-premix-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 sf · md5 e43149e6b888491b718ae20b1251eb37 · 0,7-1,5 bar s.15 · F37 s.18
# 10) Baymak Lunatec Montaj ve Kullanma Kılavuzu 300036785
#    https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 36 sf · md5 dec11a69fd55c366d613da7ba31d6d98 · soğukken 1-1,5 bar, sık basınç azalmasında servis s.27 · H geçici s.28 · H.02.07 s.29
# 11) Brötje Startec 20-24-30-35 Montaj ve Kullanma Kılavuzu 300036787 (baymak.com.tr)
#    https://www.baymak.com.tr/media/5777/brotje-yeni-startec-tam-yogusmali-kombi-montaj-ve-kullanma-klavuzu.pdf
#    HTTP 200 · 36 sf · md5 284e88e755d663da19c35b54e0ed15fe · soğukken 1-1,5 bar s.28 · H.02.07 s.30
# Kapsam: basınç kümesi (düşük basınç kodları, değer, doldurma tarifi, 'en sık'). Diğer satırlar bu turda denetlenmedi.
# Belgede olmadığı için ÇIKARILDI: "en sık çıkan kod" / "en yaygın anlamlar" (sıklık bilgisi yok) · "1-1.5 bar" (tek aralık) · "1 barın altındaysa" · "kombinin altındaki doldurma musluğu" · "gerekirse reset tuşuna bas" (düşük basınç kodu için belgede yok) · "basınç sürekli düşüyorsa kaçak vardır" (belgede "olabilir")
faq:
  - q: "Kombi arıza kodları markaya göre değişir mi?"
    a: "Evet. Vaillant 'F' önekli noktalı kodlar (F.22, F.28, F.29) kullanır; DemirDöküm'ün iki ailesi vardır — Nitromix/ademiX noktalı (F.22), Atron/Nitron noktasız (F10); Baymak'ta ise düzen seriye göre değişir: Duotec/Eco serisi E01 gibi kodlar, Lunatec/Startec serisi H.02.07 gibi noktalı kodlar verir. Aynı arıza farklı markada farklı kodla gösterilir."
  - q: "Düşük su basıncı kodu markaya göre hangisi?"
    a: "Vaillant ecoTEC plus ve ecoTEC intro'da F.22; DemirDöküm Nitromix ve ademiX'te F.22, Atron Condense ve Nitron Plus'ta F10; Baymak Duotec ve Eco CT 20'de F37, Lunatec ve Startec'te H.02.07. Kılavuzlar bu durumda ısıtma sistemini doldurmayı söylüyor. Hedef basınç modele göre değişir; örneğin Vaillant ecoTEC plus 1,0–2,0 bar, DemirDöküm Nitromix 1,0–1,5 bar, Baymak Duotec 0,7–1,5 bar veriyor. Kendi kombinin kılavuzundaki değere getir."
  - q: "Kombi arıza kodunu kendim çözebilir miyim?"
    a: "Kılavuzların kullanıcıya bıraktığı işler gaz vanasının açık olduğuna bakmak, düşük su basıncında ısıtma sistemini doldurmak ve reset'tir. Gaz, alev, fan, baca veya elektronik kart kodlarında cihazı kapat ve yetkili servise başvur — gazla ilgili işe kendin müdahale etme."
  - q: "Kod tekrar tekrar çıkıyorsa ne yapmalıyım?"
    a: "Reset ve su basıncı düzeltmesinden sonra kod hemen geri geliyorsa arıza sürüyordur. Markanı, modelini ve kodu Benservis'e yaz; olası arızayı ve tahmini maliyeti gör."
images:
  coverAlt: "Duvara asılı kombi çizimi, ekranında yanıp sönen hata göstergesi ve yanında kod listesi"
---

Kombin ekranında bir **arıza kodu** gösteriyor (F.22, F.28, E01…) ve ne demek olduğunu çözmek istiyorsun. Düşük su basıncı için markalar ayrı kodlar kullanıyor ve kılavuzlar bu durumda kullanıcıya **ısıtma sistemini doldurmayı** tarif ediyor. Bu rehberde marka marka öne çıkan kodları, **güvenle kendin yapabileceklerini** ve ne zaman servis gerektiğini topladık.

> 🔥 **Güvenlik önce:** Kombi gaz ve basınçlı sıcak su ile çalışır. Kılavuzların kullanıcıya bıraktığı işler gaz vanasının açık olduğuna bakmak, **su basıncını kontrol edip doldurmak** (düşük basınç kodunda) ve **reset**'tir. Gaz, alev, fan, baca ya da kart kodlarında **cihazı kapat ve yetkili servise** başvur — gazla ilgili işe kendin müdahale etme.

> ⚠️ Kodların anlamı model ve seriye göre değişebilir; aşağıdakiler genel çerçevedir. Kesin teşhis için modelini ve kodu [Benservis'e](/) yaz.

## Düşük su basıncı: marka marka kod ve kılavuzdaki değer

| Model | Kod | Kılavuzdaki basınç |
|-------|-----|--------------------|
| Vaillant ecoTEC plus | **F.22** | soğukken 1,0–2,0 bar; 0,80 barın altındaysa doldur |
| Vaillant ecoTEC intro | **F.22** | 0,5 barın altındaysa doldur, 1,0–1,4 bara getir |
| DemirDöküm Nitromix | **F.22** | soğukken 1,0–1,5 bar; 1,0 barın altındaysa doldur |
| DemirDöküm Atron Condense, Nitron Plus | **F10** | 1,0–2,0 bar; 0,80 barın altındaysa doldur |
| Baymak Duotec, Eco CT 20 | **F37** | soğukken 0,7–1,5 bar; 0,7 barın altındaysa doldur |
| Baymak Lunatec, Startec | **H.02.07** | soğukken 1–1,5 bar |

Kılavuzların ortak tarifi:
1. Basıncı kombi ve tesisat **soğukken** oku, kendi modelinin kılavuzundaki değerle karşılaştır.
2. **Doldurma vanasının** yerini bilmiyorsan kılavuza bak ya da montajı yapan yetkili servise sor.
3. Vanayı **yavaşça** aç, göstergede gerekli değere gelince **kapat**.
4. Yeterince su eklediğinde düşük basınç uyarısı kendiliğinden söner (Vaillant ecoTEC plus, DemirDöküm Nitromix); Baymak Lunatec ve Startec'te H.02.07 geçici arızadır, sorun giderilince kaybolur.

Tesisat birden fazla kata yayılıyorsa daha yüksek bir basınç gerekebilir; değeri yetkili servisten öğren. Basınç düşmesi sık tekrarlanıyorsa tesisatta su kaçağı olabilir → yetkili servis.

## Marka marka hızlı bakış
| Marka | Kod tipi | Detaylı rehber |
|-------|----------|----------------|
| Vaillant | F. (F.22, F.28, F.29, F.75) | [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) |
| DemirDöküm | İki aile: noktalı (F.22, F.28) ve noktasız (F04, F05, F10) | [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) |
| Baymak | Seriye göre E ya da noktalı H (E01, E05, F37) | [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) |

## Arıza türüne göre genel anlamlar
🛠️ = güvenle kendin · 🔧 = yetkili servis (gaz/elektronik)

| Arıza türü | Ne anlama gelir | Ne yapmalı |
|-----------|-----------------|------------|
| Düşük su basıncı | Isıtma sisteminde su yetersiz | 🛠️ Isıtma sistemini kılavuzdaki değere kadar doldur |
| Ateşleme yok / gaz yok | Kombi yanmıyor | 🔧 Gaz vanası açık mı bak, reset; geçmezse servis |
| Alev sönmesi | Çalışırken alev kayboluyor | 🔧 Servis (gaz/topraklama) |
| Fan / baca arızası | Hava-baca güvenliği | 🔧 Servis |
| Aşırı ısınma | Güvenlik kapatması | 🔧 Servis |
| Gaz valfi / elektronik kart | Donanım arızası | 🔧 Cihazı kapat, servis |

## Tahmini maliyet
Kombine ve arızaya göre tahmini tamir maliyetini [Benservis](/) saniyede söyler; sonra yakınındaki yüksek puanlı kombi servisini ara. Hangi işin ne kadar tuttuğunu belirleyen faktörler: [Kombi tamirinde fiyatı ne belirler?](/blog/kombi-tamiri-kac-para/)

## Cihazına göre rehberler
- [Kombi yanmıyor / ateşlemiyor](/blog/kombi-yanmiyor/)
- [Kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/)
- [Kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/)
- [Petekler ısınmıyor: kombi yanıyor ama radyatörler soğuk](/blog/petekler-isinmiyor/)

## Sık sorulan sorular

**Kodlar markaya göre değişir mi?**
Evet — Vaillant "F" önekli noktalı kodlar kullanır; DemirDöküm'ün iki ailesi var (noktalı ve noktasız); Baymak'ta düzen seriye göre değişir (Duotec/Eco "E", Lunatec/Startec noktalı "H").

**Düşük su basıncı kodu hangisi?**
Vaillant ecoTEC plus/intro ve DemirDöküm Nitromix/ademiX'te F.22, Atron/Nitron Plus'ta F10, Baymak Duotec/Eco CT 20'de F37, Lunatec/Startec'te H.02.07; ısıtma sistemini kılavuzdaki değere kadar doldur.

**Kendim çözebilir miyim?**
Kılavuzun tarif ettiği işler: gaz vanası, su basıncı ve reset; gaz/alev/fan/kart kodlarında servis.

**Kod tekrar çıkıyorsa?**
Arıza sürüyordur; markanı, modelini ve kodu Benservis'e yaz.
