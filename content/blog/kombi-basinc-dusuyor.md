---
title: "Kombi basıncı sürekli düşüyor: sebebi ve çözümü"
description: "Kombinin su basıncı sürekli düşüyor, sık sık su mu ekliyorsun? Tesisat kaçağı, genleşme tankı, emniyet ventili ve servis sınırı. Bil, gör, çağır."
slug: "kombi-basinc-dusuyor"
date: "2026-06-19"
updated: "2026-09-17"
category: "Kombi"
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru bez"]
steps:
  - "Kombi ve petekler soğukken basınç göstergesini oku."
  - "Doldurma vanasını yavaşça açıp basıncı soğukken kombinin kılavuzundaki değere getir."
  - "Doldurma musluğunu tam kapat."
  - "Radyatör vanalarının altını, rakorları ve kombinin altını kuru bezle kontrol et."
  - "Emniyet ventilinin dış tahliye borusundan su damlayıp damlamadığına bak."
  - "Aynı göstergeyi bir de tesisat ısınmışken oku."
  - "Sınırı aşan belirtilerde dur ve yetkili servis çağır."
# --- 17 Eyl 2026 · BASINÇ KÜMESİ ÜRETİCİ BELGESİYLE DOĞRULANDI (YK #88) — yayında görünmez ---
# Belgeler 2026-09-17 curl -sL ile indirildi (hepsi HTTP 200), pdftotext ile okundu.
# 1) Vaillant ecoTEC plus VU/VUW/VUI ..6/5-5 F A Kullanma Kılavuzu 0020228719_00
#    https://www.vaillant.com.tr/pdf/ecotecplus5-5-813748.pdf
#    HTTP 200 · 16 sf · md5 c999bf8603f8fc703b823341ebcae02d · soğukta 1,0-2,0 bar, çok katlı s.9 · doldurma vanası yerini bayiye sor, yavaşça aç s.10
# 2) DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01
#    https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 16 sf · md5 3340a11b923b7332f8eb8685297970b6 · soğukta 1,0-1,5 bar, doldurma vanasını yavaşça aç s.12
# 3) Baymak Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 sf · md5 df4c42a6604e3ec39b2d152606464cb0 · soğukken 0,7-1,5 bar, çok yavaş aç, basınç düşmesi sık tekrarlanıyorsa servis s.14 · sürekli basınçlandırma = su kaçağı olabilir s.15
# 4) Baymak Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122
#    https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf
#    HTTP 200 · 28 sf · md5 723546ecd63c99eaecb5c3143c687c2a · 0,7-1,5 bar s.14
# 5) Baymak Lunatec Montaj ve Kullanma Kılavuzu 300036785
#    https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 36 sf · md5 dec11a69fd55c366d613da7ba31d6d98 · soğukken 1-1,5 bar, sık basınç azalmasında servis s.27
# 6) E.C.A. Proteus Premix Kullanma ve Montaj Kılavuzu
#    https://eca.com.tr/uploads/documents//aff/a1a45d25-44e3-4ca3-8001-786e45e7a0d3.pdf
#    HTTP 200 · 48 sf · md5 28a5d7565ffbc9c1faaf1e97e45553d9 · soğukken 1,5-2 bar, doldurma vanasını mutlaka kapatın (tesisat suyu akarak zarar verebilir), basınç sık düşüyorsa su kaçağı / tesisatçı s.25
# Kapsam: basınç kümesi (değer, doldurma tarifi, 'en sık'). Genleşme tankı / emniyet ventili / çek valf / kombi içi conta mekanizmaları bu turda DENETLENMEDİ (❓).
# ✅ 19 Eyl: public/tamir-gorsel/kombi-basinc-dusuyor/adim-02 GRF 18 Eyl basımıyla değişti — karede artık 'soğukken kombinin kılavuzundaki değere getir' yazıyor (md5 png 64c6df3b… / webp fda4968b…).
# Belgede olmadığı için ÇIKARILDI: "1-1.5 bar" (tek aralık) · "en sık sebep" / "en çok düşüren" / "çoğu zaman" · "kombinin altındaki doldurma musluğu" · "bunu güvenle kendin yapabilirsin" · "yarım kapalı vana basıncı kendiliğinden oynatır, çek valf de aynı sonucu verir"
faq:
  - q: "Kombinin su basıncı neden sürekli düşer?"
    a: "Sebeplerden biri tesisatta bir kaçaktır (radyatör vanası, rakor, kombi içi conta). Ayrıca genleşme tankının basıncını yitirmesi ve emniyet (tahliye) ventilinin su kaçırması da basıncı düşürür. Sürekli su eklemek geçici çözümdür; kaynak bulunmalıdır."
  - q: "Basınç ne olmalı, nasıl su eklenir?"
    a: "Tek bir değer yok; kombinin kılavuzundaki değere bak. Örneğin tesisat soğukken Vaillant ecoTEC plus 1,0–2,0 bar, DemirDöküm Nitromix 1,0–1,5 bar, Baymak Lunatec 1–1,5 bar, Baymak Duotec 0,7–1,5 bar, ECA Proteus Premix 1,5–2 bar veriyor. Doldurma vanasını yavaşça açıp göstergeyi bu değere getir, sonra kapat. Vananın yerini bilmiyorsan montajı yapan yetkili servise sor."
  - q: "Basınç ısınınca yükselip soğuyunca normale dönüyorsa?"
    a: "Bu farklı bir durumdur: ısınınca aşırı yükselip emniyet ventilinden su boşalıyorsa genellikle genleşme tankı arızalıdır (membran/şarj). Servis kontrolü gerekir."
  - q: "Kaçağı nasıl bulurum?"
    a: "Radyatör vanalarının altını, tesisat rakorlarını ve kombinin altını kuru bezle kontrol et; ıslaklık/damla var mı bak. Görünür kaçak yoksa kombi içi olabilir — servis gerekir."
images:
  coverAlt: "Kombi çizimi ve yanında ibresi düşük basınç göstergesi"
  steps:
    - "Basınç göstergesi çizimi; ibre, doğru aralığı gösteren mavi bandın altında duruyor"
    - "Doldurma musluğu açık; oklar suyun boru içinden tesisata girdiğini gösteriyor, yanındaki gösterge ibresi banda giriyor"
    - "Doldurma musluğunun kolu boruya dik konumda, yani tam kapalı; yanında onay işareti"
    - "Boru rakoru çizimi; birleşme yerinin altında bir damla ve zeminde ıslaklık lekesi"
    - "Emniyet ventili ve dışarı çıkan tahliye borusu; borunun ucundan su damlıyor"
    - "Yan yana iki gösterge: soğukken ibre bantta, ısınınca bandın üstünde; yanlarında membranı yırtık genleşme tankı"
    - "Servis çağırmayı gerektiren dört durumun listelendiği kart"
---

Kombine sık sık su ekliyorsun ama **basınç yine düşüyor**. Kombi kılavuzları, basınç düşmesi sık tekrarlanıyorsa tesisatta su kaçağı olabileceğini ve yetkili servisin bakması gerektiğini söylüyor. Bu yazıda nedenleri, güvenle yapabileceğin kontrolleri ve hangi noktadan sonra yetkili servis gerektiğini anlatıyoruz. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 🔥 **Güvenlik:** Su eklemek ve görünür kaçak aramak güvenlidir. Genleşme tankı, emniyet ventili ve kombi içi parçalara kendin müdahale etme — yetkili servise başvur.

## Basınç neden düşer? Olası nedenler

**1. Tesisat / radyatör kaçağı.** Radyatör vanaları, rakorlar ya da boru ek yerlerinden sızan az miktarda su zamanla basıncı düşürür.

**2. Genleşme tankı arızası.** Tank membranı patlar ya da hava şarjını yitirirse, ısınınca basınç aşırı yükselir, emniyet ventilinden su boşalır ve soğuyunca basınç düşer.

**3. Emniyet (tahliye) ventili su kaçırıyor.** Ventil tam kapanmazsa basınç sürekli dışarı sızar (genelde kombi altından/dış tahliyeden damlar).

**4. Kombi içi conta / hidrolik grup kaçağı.** Kombinin içindeki contalar ya da plakalı eşanjör iç kaçağı basıncı düşürebilir.

**5. Doldurma musluğu / çek valf.** Doldurma vanası tam kapanmazsa ya da çek valf arızalıysa basınç oynar.

## Adım adım

**1. Önce soğukken oku.** Kombi ve petekler soğukken göstergeye bak. Sıcakken basınç zaten yükselir; sıcak okuma seni yanıltır. İbre, doğru aralığı gösteren bandın altındaysa basınç düşüktür.

**2. Doldurma vanasını aç.** Doldurma vanasının yerini bilmiyorsan kombinin kılavuzuna bak ya da montajı yapan yetkili servise sor. Vanayı yavaşça aç; su tesisata girer. Göstergeyi izleyerek soğukken **kombinin kılavuzundaki değere** getir. Değer modele göre değişiyor:

- Vaillant ecoTEC plus: 1,0–2,0 bar
- DemirDöküm Nitromix: 1,0–1,5 bar
- Baymak Lunatec: 1–1,5 bar
- Baymak Duotec: 0,7–1,5 bar
- ECA Proteus Premix: 1,5–2 bar

Tesisat birden fazla kata yayılıyorsa daha yüksek bir değer gerekebilir; bunu yetkili servisten öğren.

**3. Vanayı tam kapat.** Doldurma vanasını mutlaka kapat; açık kalan vanadan tesisat suyu akarak ortama zarar verebilir.

**4. Görünür kaçak ara.** Radyatör vanalarının altı, rakorlar ve kombinin altı kuru mu? Kuru bezle gez, ıslaklık ya da damla var mı bak.

**5. Dış tahliyeye bak.** Emniyet ventilinin dışarı çıkan borusundan su damlıyorsa basınç oradan gidiyor demektir. Ventil ya da genleşme tankı şüphesi; ikisi de servis işi.

**6. Isınınca ne olduğunu izle.** Aynı göstergeyi bir de tesisat ısındıktan sonra oku. Isınınca bandın üstüne çıkıp soğuyunca yine düşüyorsa genleşme tankı şüphesi güçlenir. Bu davranış kaçak aramakla çözülmez, parça şüphesidir.

**7. Burada dur, servis çağır.** Görünür kaçak yokken basınç sürekli düşüyorsa, emniyet ventilinden sürekli su boşalıyorsa, ısınınca çok yükselip ventilden taşıyorsa ya da radyatör/tesisat kaçağı gözle görülüyorsa kendin uğraşma. Basıncın ne kadar sürede düştüğünü de söyle — günlerde mi, saatlerde mi. Bu tarif servisin doğru parçayla gelmesini sağlar.

## Tamir maliyeti ne kadar olur?

Bu arızanın maliyeti markaya, modele ve gerçek arızaya göre değişir; bu sayfada aralık vermiyoruz. **[Cihazına göre tahmini maliyeti ücretsiz öğren →](/)** Belirtiyi yaz, olası arızayı ve tahmini maliyeti saniyede gör.

İlgili: [Kombi basıncı kaç olmalı?](/blog/kombi-basinci-kac-olmali/) · [Kombi tamirinde fiyatı ne belirler?](/blog/kombi-tamiri-kac-para/) · [Kombi yanmıyor / ateşlemiyor](/blog/kombi-yanmiyor/) · [Kombi arıza kodları (marka marka)](/blog/kombi-ariza-kodlari/) · [Petekler ısınmıyor](/blog/petekler-isinmiyor/)

## Sık sorulan sorular

**Basınç neden sürekli düşer?**
Tesisatta su kaçağı olabilir; ayrıca genleşme tankı ve emniyet ventili.

**Basınç ne olmalı?**
Kombinin kılavuzundaki değer (örneğin soğukken Vaillant ecoTEC plus 1,0–2,0 · DemirDöküm Nitromix 1,0–1,5 · Baymak Duotec 0,7–1,5 bar); doldurma vanasından eklersin.

**Isınınca yükselip soğuyunca düşüyorsa?**
Genleşme tankı arızası olabilir; servis kontrolü gerekir.

**Kaçağı nasıl bulurum?**
Radyatör vanaları, rakorlar ve kombi altını kuru bezle kontrol et; yoksa kombi içi → servis.
