---
title: "Baymak kombi arıza kodları ve anlamları"
description: "Baymak kombi arıza kodları: E01 ateşleme, E05 fan, F37 düşük su basıncı ve diğerlerinin anlamı, güvenle kendin yapabileceklerin. Bil, gör, çağır."
slug: "baymak-kombi-ariza-kodlari"
date: "2026-06-19"
updated: "2026-09-17"
category: "Kombi"
# 🔴 22 Ağu 2026 — YAZI BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
# Eski hâlinde düşük su basıncı kodu "E04" diye veriliyordu ve yazının omurgası buydu:
# description, FAQ, güvenlik kutusu, öne çıkan kutu, tablo, bölüm başlığı ve kapanış.
# Baymak'ta E04 diye bir kod YOK. Gerçek kod F37 (Lunatec/Startec'te H.02.07).
# Yazının "güvenle kendin çözebilirsin" diye öne çıkardığı TEK kod, var olmayan bir koddu.
# Ayrıca çıkarılanlar (4 Baymak kılavuzu, 3 ayrı platform — hiçbirinde yok ya da çelişiyor):
#   E06 → NTC değil; NTC = E18/E33/E35, kullanım suyu sensörü = F52
#   E07 → gaz valfi değil; gaz valfi geri beslemesi = E09
#   E08 → kart değil; elektronik kart = E21
#   E10 → hiçbir kılavuzda yok
#   E15 → kod gerçek ama anlamı "sensör sıcaklık değişim hatası", pompa değil
#   E25/E26 → yok; sirkülasyon = E.01.17 / H.01.18
# ⛔ Yalnız üreticinin kendi kılavuzunda birebir bulunan kodlar yayımlandı.
#    E12, E16, E17 tam listede var ama kılavuzda anlamları teyit edilemedi → tabloya alınmadı.
# --- 17 Eyl 2026 · BASINÇ KÜMESİ ÜRETİCİ BELGESİYLE DOĞRULANDI (YK #88) — yayında görünmez ---
# Belgeler 2026-09-17 curl -sL ile indirildi (hepsi HTTP 200), pdftotext ile okundu.
# 1) Baymak Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 sf · md5 df4c42a6604e3ec39b2d152606464cb0 · kombi soğukken 0,7-1,5 bar, doldurma musluğunu çok yavaş aç, sık tekrarlanırsa servis s.14 · <0,7 doldur, <0,5 çalışmaz, sürekli basınçlandırma = su kaçağı olabilir s.15 · RESET (K1), F37 s.17
# 2) Baymak Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122
#    https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf
#    HTTP 200 · 28 sf · md5 723546ecd63c99eaecb5c3143c687c2a · 0,7-1,5 bar s.14 · <0,5 çalışmaz s.15 · RESET (K1), F37 s.17
# 3) Baymak Eco CT 20 Premix Montaj & Kullanma Kılavuzu 300035751
#    https://www.baymak.com.tr/media/4887/baymak-eco-ct-20-premix-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 28 sf · md5 e43149e6b888491b718ae20b1251eb37 · 0,7-1,5 bar s.15 · <0,7 doldur, <0,5 çalışmaz s.16 · RESET, F37 s.18
# 4) Baymak Lunatec Montaj ve Kullanma Kılavuzu 300036785
#    https://www.baymak.com.tr/media/5622/baymak-lunatec-tam-yogusmali-kombi-kullanma-kilavuzu.pdf
#    HTTP 200 · 36 sf · md5 dec11a69fd55c366d613da7ba31d6d98 · min 0,8 / önerilen 1-1,5 bar s.4 · açık mavi musluk kombinin altında, elle sola, 1-1,5 barda kapat, sızıntı kontrol s.18 · soğukken 1-1,5, sık basınç azalmasında servis s.27 · H geçici / E kalıcı, reset 1 sn s.28 · H.02.07 s.29
# 5) Brötje Startec 20-24-30-35 Montaj ve Kullanma Kılavuzu 300036787 (baymak.com.tr)
#    https://www.baymak.com.tr/media/5777/brotje-yeni-startec-tam-yogusmali-kombi-montaj-ve-kullanma-klavuzu.pdf
#    HTTP 200 · 36 sf · md5 284e88e755d663da19c35b54e0ed15fe · soğukken 1-1,5 bar s.28 · H.02.07 s.30 (metin katmanı özel font kodlamalı; karakter kaydırması çözülerek okundu)
# Kapsam: basınç kümesi (F37/H.02.07 anlamı ve seri eşlemesi, doldurma tarifi, reset). 'Duotec' iki kılavuzla (Compact 24 + 24-45), 'Eco' yalnız Eco CT 20 kılavuzuyla doğrulandı.
# Kod tablosunun geri kalanı 22 Ağu denetimindedir, bu turda yeniden denetlenmedi.
# Belgede olmadığı için ÇIKARILDI: "1-1.5 bar" Duotec/Eco için (belgede 0,7-1,5) · "1 barın altındaysa" · "en sık" · "çoğu modelde" · "birkaç saniye" reset · "reset'le" H.02.07 için (geçici arıza, kendiliğinden kaybolur)
faq:
  - q: "Baymak kombi düşük su basıncı kodu nedir, nasıl çözülür?"
    a: "Duotec ve Eco CT 20 kılavuzlarında F37, Lunatec ve Startec kılavuzlarında H.02.07 kodudur. Kılavuzlar su doldurmayı tarif ediyor ama hedef değer seriye göre farklı: Duotec ve Eco CT 20 kılavuzları kombi soğukken 0,7–1,5 bar, Lunatec ve Startec kılavuzları tesisat soğukken 1–1,5 bar veriyor. Doldurma musluğunu çok yavaş aç, değere gelince kapat. Basınç düşmesi sık tekrarlanıyorsa yetkili servise başvur."
  - q: "Baymak E01 ne demek?"
    a: "E01, kılavuzda 'başarısız ateşleme' olarak geçer: kombi yanmıyordur. Önce gaz vanasının açık olduğunu kontrol et ve reset'le; geçmezse gazla ilgili bir arızadır ve yetkili servis gerekir."
  - q: "Baymak kombi nasıl reset edilir?"
    a: "Duotec ve Eco CT 20 kılavuzları RESET tuşuna basmayı söylüyor. Lunatec ve Startec'te E ile başlayan kalıcı arızalarda RESET tuşuna 1 saniye basılır; H ile başlayan geçici arızalar sorun giderilince kendiliğinden kaybolur. Su basıncı düşükse önce kılavuzdaki değere kadar doldur. Sorun devam ederse yetkili servisi ara."
  - q: "Kodlar her Baymak modelinde aynı mı?"
    a: "Hayır. Baymak'ın iki ayrı kod düzeni var: Duotec ve Eco serisi E01/E02 gibi kodlar verir, Lunatec ve Startec serisi ise H.02.07 gibi noktalı kodlar kullanır. Kesin teşhis için modelini ve kodu Benservis'e yaz."
images:
  coverAlt: "Kombi panelinin yakın plan çizimi: hata göstergesi yanan ekran ve basınç göstergesi"
---

Baymak kombin ekranında bir arıza kodu gösteriyor. Bu rehberde Baymak'ın **kendi kullanım kılavuzlarında birebir geçen** kodları, anlamlarını ve hangisini **güvenle kendin** çözebileceğini topladık.

> 🔥 **Güvenlik:** Kombi gaz ve basınçlı sıcak su ile çalışır. Kılavuzların kullanıcıya bıraktığı işler **su basıncını kontrol edip doldurmak** (F37 / H.02.07), gaz vanasının açık olduğuna bakmak ve **reset**'tir. Gaz/alev/fan/kart kodlarında **cihazı kapat ve yetkili servise** başvur.

> ⚠️ **Baymak'ta tek bir kod düzeni yok.** Duotec ve Eco serisi `E01` biçiminde kod verir; Lunatec ve Startec serisi `H.02.07` biçiminde noktalı kod kullanır. Aynı arıza iki seride farklı görünür — ekrandaki kodu modelinle birlikte değerlendir.

## ⚡ Öne çıkan 3 kod
> **F37** (Lunatec/Startec'te **H.02.07**) — Düşük su basıncı → 🛠️ doldurma musluğundan kılavuzdaki değere getir
>
> **E01** — Başarısız ateşleme → 🔧 gaz vanası + reset; geçmezse servis
>
> **E05** — Fan geri besleme hatası → 🔧 servis

## Baymak kombi arıza kodları
🛠️ = güvenle kendin · 🔧 = yetkili servis

| Kod | Anlamı | Ne yapmalı |
|-----|--------|------------|
| **F37** | Düşük su basıncı | 🛠️ Kombi soğukken 0,7–1,5 bar aralığına doldur (Duotec, Eco CT 20) |
| **E01** | Başarısız ateşleme | 🔧 Gaz vanası açık mı bak, reset; geçmezse servis |
| **E02** | Hatalı alev oluşumu | 🔧 Servis (gaz/iyonizasyon) |
| **E03** | Aşırı ısınma hatası | 🔧 Servis (önce su basıncı/dolaşım) |
| **E05** | Fan geri besleme hatası | 🔧 Servis |
| **E09** | Gaz valfi geri besleme hatası | 🔧 Cihazı kapat, servis |
| **E15** | Sensör sıcaklık değişim hatası | 🔧 Servis |
| **E18 / E33 / E35** | NTC sıcaklık sensörü | 🔧 Servis |
| **E21** | Elektronik kart arızası | 🔧 Servis |
| **F52** | Kullanım suyu sensörü | 🔧 Servis |

Duotec Compact 24 ve Eco CT 20 kılavuzlarındaki tam E listesi şudur: **E01, E02, E03, E05, E09, E12, E15, E16, E17, E18, E21, E33, E35.** **E12, E16 ve E17** için karşılık cihazının kendi kullanım kılavuzundadır; ekranında bu üçünden biri varsa modelinle birlikte [Benservis'e](/) yaz.

Sirkülasyon tarafındaki kodlar noktalı düzende gelir: **E.01.17** ve **H.01.18**.

## Öne çıkan kodlar

### F37 / H.02.07 — Düşük su basıncı (güvenle çözülür)
Basıncı kombi soğukken oku ve serinin kılavuzundaki değerle karşılaştır:

- **Duotec ve Eco CT 20 (F37):** kombi soğukken 0,7–1,5 bar aralığında olmalı; 0,7 barın altındaysa su doldur. Kılavuza göre su basıncı 0,5 barın altına düşerse kombi çalışmaz.
- **Lunatec ve Startec (H.02.07):** tesisat soğukken önerilen basınç 1–1,5 bar. Lunatec kılavuzuna göre açık mavi doldurma musluğu kombinin altındadır ve el aleti kullanmadan, elle sola çevrilerek açılır. H.02.07 geçici bir arızadır; sorun giderilince kod kendiliğinden kaybolur.

**Doldurma musluğunu** hava yapmaması için çok yavaş aç, değere gelince kapat ve su sızıntısı olmadığını kontrol et. Kombi sürekli su doldurmayı gerektiriyorsa su kaçağı olabilir → yetkili servis.

### E01 — Başarısız ateşleme
Kombi yanmıyor. Önce **gaz vanasının açık** olduğunu ve doğalgaz girişini kontrol et, **reset**'le. Geçmezse ateşleme/gaz arızasıdır → servis. Gaz işine kendin müdahale etme.

### Fan / sensör / kart kodları
E05, E09, E15, E18, E21 ve F52 donanım arızasıdır ve yetkili servis ister.

## Reset nasıl yapılır?
Önce su basıncını kontrol et. Duotec ve Eco CT 20 kılavuzları **RESET tuşuna basmayı** söylüyor; sorun devam ederse yetkili servisi ara. Lunatec ve Startec'te E ile başlayan kalıcı arızalarda **RESET tuşuna 1 saniye** basılır, H ile başlayan geçici arızalar ise kendiliğinden kaybolur.

## Tahmini maliyet
Baymak modeline ve arızaya göre tahmini maliyeti [Benservis](/) söyler; sonra yakınındaki yüksek puanlı servisi ara.

İlgili: [Kombi arıza kodları (marka marka)](/blog/kombi-ariza-kodlari/) · [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) · [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) · [Kombi yanmıyor](/blog/kombi-yanmiyor/) · [Kombi tamirinde fiyatı ne belirler?](/blog/kombi-tamiri-kac-para/)

## Sık sorulan sorular

**Düşük su basıncı kodu nasıl çözülür?**
Duotec/Eco CT 20'de F37 (soğukken 0,7–1,5 bar), Lunatec/Startec'te H.02.07 (soğukken 1–1,5 bar); doldurma musluğundan bu değere getir. Sık sık düşüyorsa servis.

**E01 ne demek?**
Başarısız ateşleme; gaz vanası + reset, geçmezse servis.

**Nasıl reset edilir?**
Önce su basıncını kontrol et, sonra RESET tuşuna bas (Lunatec/Startec'te E kodlarında 1 saniye).

**Kodlar her modelde aynı mı?**
Hayır. Duotec/Eco serisi E kodları, Lunatec/Startec serisi noktalı H kodları kullanır; modelini ve kodu Benservis'e yaz.
