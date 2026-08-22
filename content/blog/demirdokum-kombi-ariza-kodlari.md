---
title: "DemirDöküm kombi arıza kodları: iki ayrı kod ailesi var"
description: "DemirDöküm'de noktalı (F.22, F.28) ve noktasız (F04, F05, F10) iki kod ailesi var. Hangi seride hangisi geçerli, kılavuzdaki anlamları ve servis sınırı."
slug: "demirdokum-kombi-ariza-kodlari"
date: "2026-06-19"
updated: "2026-08-22"
category: "Kombi"
# 🔴 22 Ağu 2026 — TABLO BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
# Altı kod satırı dayanaksızdı ve ikisinin anlamı TERSTİ. Gaz cihazı → A önceliği.
#
# Kaynak (bu koşuda indirildi, pdftotext ile okundu):
#   demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf  (31 kod)
#   demirdokum.com.tr/products-2/a5-1/ademix-mk-0020313926-02-2323451.pdf         (41 kod)
#   demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf (Atron Condense)
#
# 📌 ASIL BULGU: DemirDöküm'ün İKİ AYRI kod ailesi var ve yazı ikisini karıştırmıştı.
#   ① Vaillant platformu (Nitromix, ademiX) → NOKTALI  F.22 · F.28 · F.29 …
#   ② Kendi platformu (Atron Condense, Nitron Plus) → NOKTASIZ  F04 · F05 · F10
#   Yazı noktasız ailenin numaralarını alıp noktalı yazmış ve anlamlarını uydurmuş.
#
# Anlamı TERS olan ikisi (kılavuzdan birebir):
#   F04 → "NTC/sıcaklık sensörü" DEĞİL; gerçek: ateşleme arızası, üç denemeden sonra
#         arıza konumu. Kılavuzun çözümü: RESET TUŞUNA BAS. Yani kullanıcı işi.
#   F05 → "Fan arızası" DEĞİL; gerçek: atık gaz hattında (baca) arıza. Fan = F.32.
# Diğer dayanaksızlar: F.07 (gaz valfi → gerçekte F.26/F.61/F.62) · F.08 (kart →
#   F.63/F.64/F.65) · F.15 (pompa → F.75) · F.30 (baca → F.77, Atron'da F05).
#
# 🔴 "F.22 (bazı modellerde F.37)" ÇIKARILDI: F37 DemirDöküm kodu DEĞİL, BAYMAK'ın
#    kodu. İkinci platformda düşük basıncın karşılığı F10. (Aynı takas #104'te genel
#    kombi yazısından da temizlenmişti.)
# 📌 "F.28 (bazı modellerde F.01)" da çıkarıldı: F.01 = dönüş sıcaklık sensöründe kesinti.
faq:
  - q: "DemirDöküm kombi düşük su basıncı kodu nedir, nasıl çözülür?"
    a: "Serine göre değişir: Nitromix ve ademiX gibi noktalı kod kullanan modellerde F.22, Atron Condense ve Nitron Plus gibi noktasız kod kullanan modellerde F10. İkisi de aynı şeyi söyler ve ikisini de güvenle çözebilirsin: kombinin altındaki doldurma musluğundan manometreyi 1–1.5 bara getir, sonra kapat. Basınç sürekli düşüyorsa kaçak vardır ve servis gerekir."
  - q: "DemirDöküm'de neden iki farklı kod ailesi var?"
    a: "Çünkü DemirDöküm iki ayrı elektronik platform kullanıyor. Nitromix ve ademiX gibi modeller Vaillant Group platformundan gelir ve kodları noktalıdır: F.22, F.28, F.29 gibi. Atron Condense ve Nitron Plus gibi modeller ise kendi platformunu kullanır ve kodları noktasızdır: F04, F05, F10. Aynı numara iki ailede farklı anlama gelebildiği için önce ekranındaki kodun noktalı mı noktasız mı olduğuna bakmak gerekir."
  - q: "DemirDöküm kombi ateşleme yapmıyor, hangi kod?"
    a: "Noktalı ailede F.28 'ateşleme başarısız' demektir. Noktasız ailede karşılığı F04'tür: kombi üç ateşleme denemesinden sonra arıza konumuna geçer ve kılavuz burada reset tuşuna basmayı söyler. İki kodda da önce gaz vanasının açık olduğunu kontrol et ve bir kez resetle; kod geri geliyorsa gazla ilgili bir arıza vardır ve yetkili servis gerekir."
  - q: "İnternette gördüğüm F.07, F.08, F.15 kodları neden bu yazıda yok?"
    a: "Çünkü bu numaralar DemirDöküm'ün kendi kılavuzlarında geçmiyor. Doğruları başka numaralarda: gaz armatürü tarafı F.26, F.61 ve F.62; elektronik kart F.63, F.64 ve F.65; pompa F.75. Doğrulayamadığımız bir kod için anlam yazmıyoruz, çünkü yanlış kod yanlış parçaya yönlendirir ve gaz cihazında bunun bedeli büyük olur."
images:
  coverAlt: "Kombi çizimi, ekranında hata göstergesi; yanında basınç göstergesi ve kod listesi"
---

DemirDöküm kombin ekranında bir arıza kodu gösteriyor. Bu markada internetteki listelerin birbirini tutmamasının somut bir sebebi var ve bilmen işini kolaylaştırır:

> ⚠️ **DemirDöküm'ün iki ayrı kod ailesi var.**
>
> **① Noktalı aile** — `F.22`, `F.28`, `F.29` biçiminde. Nitromix, ademiX gibi **Vaillant Group platformundan** gelen modeller.
>
> **② Noktasız aile** — `F04`, `F05`, `F10` biçiminde. Atron Condense, Nitron Plus gibi **kendi platformunu** kullanan modeller.
>
> Aynı numara iki ailede farklı anlama gelebilir. Önce ekrandaki kodun **noktalı mı noktasız mı** olduğuna bak.

> 🔥 **Güvenlik:** Kombi gaz ve basınçlı sıcak su ile çalışır. Güvenle yapabileceğin şey **su basıncı eklemek** ve **reset**'tir. Gaz, alev, baca, fan ve kart kodlarında **cihazı kapat ve yetkili servise** başvur.

## ⚡ En sık karşılaşılan üç durum
> **Düşük su basıncı** — noktalıda `F.22`, noktasızda `F10` → 🛠️ doldurma musluğundan 1–1.5 bara getir
>
> **Ateşleme başarısız** — noktalıda `F.28`, noktasızda `F04` → 🛠️ bir kez reset; geçmezse servis
>
> **Atık gaz / baca** — noktalıda `F.77`, noktasızda `F05` → 🔧 servis

## ① Noktalı aile — Nitromix, ademiX ve benzeri
🛠️ = güvenle kendin · 🔧 = yetkili servis

| Kod | Kılavuzdaki tanım | Ne yapmalı |
|-----|-------------------|------------|
| **F.22** | Tesisat basıncı çok düşük | 🛠️ Doldurma musluğundan 1–1.5 bara tamamla |
| **F.20** | Sıcaklık sınırlayıcı emniyet kapatması | 🔧 Servis |
| **F.23** | Emniyet kapatması: sıcaklık | 🔧 Servis |
| **F.26** | Gaz armatürü işlevsiz | 🔧 Cihazı kapat, servis |
| **F.27** | Sahte alev emniyet kapatması | 🔧 Cihazı kapat, servis |
| **F.28** | Ateşleme başarısız | 🛠️ Gaz vanası açık mı bak, bir kez reset; geçmezse 🔧 |
| **F.29** | İşletim sırasında alev sönmesi | 🔧 Servis |
| **F.32** | Fan arızası | 🔧 Servis |
| **F.61 / F.62** | Gaz emniyet ventili arızası | 🔧 Cihazı kapat, servis |
| **F.63 / F.64 / F.65** | EEPROM ve elektronik arızaları | 🔧 Servis |
| **F.73 / F.74** | Su basıncı sensörü sinyali hatalı | 🔧 Servis |
| **F.75** | Pompa arızası / su eksikliği | 🔧 Servis (önce basıncı kontrol et) |
| **F.77** | Atık gaz klapesi arızalı | 🔧 Servis |

Bu ailenin tam listesi daha uzundur ve sensör kodlarını da içerir (`F.00`, `F.01`, `F.10`, `F.11`, `F.71`, `F.72`, `F.83`–`F.86`). Ekranındaki kod yukarıda yoksa kendi modelinin kılavuzuna bak; hepsi servis konusudur.

## ② Noktasız aile — Atron Condense, Nitron Plus ve benzeri

| Kod | Kılavuzdaki tanım | Ne yapmalı |
|-----|-------------------|------------|
| **F10** | Isıtma sisteminde yetersiz su; tesisat basıncı izin verilen aralığın dışında | 🛠️ Isıtma sistemini doldur (1–1.5 bar) |
| **F04** | Ateşleme arızası — üç denemeden sonra cihaz arıza konumuna geçer | 🛠️ Kılavuzun çözümü: **reset tuşuna bas** |
| **F05** | Atık gaz hattında (baca) arıza | 🔧 Yetkili servis |

> 📌 **Dikkat:** bu üç numara noktalı ailede bambaşka şeyler anlatır. Noktasız `F05` baca demektir; noktalı ailede baca kodu `F.77`'dir ve fan `F.32`'dir.

## Öne çıkan durumlar

### Düşük su basıncı — F.22 ya da F10
Manometre 1 barın altındaysa: kombinin altındaki **doldurma musluğunu** yavaşça aç, **1–1.5 bar** olunca kapat, reset'le. Isıtma sistemi birden fazla kata dağıldıysa kılavuz daha yüksek bir sistem basıncının gerekebileceğini söylüyor — o durumda yetkili bayiye danış.

Basınç sürekli düşüyorsa **kaçak** vardır → servis.

### Ateşleme başarısız — F.28 ya da F04
Kombi yanmıyor. Noktasız ailede kılavuzun verdiği çözüm doğrudan **reset tuşuna basmaktır**; cihaz üç başarısız denemeden sonra kendini kilitler ve reset onu tekrar devreye alır.

Önce **gaz vanasının açık** olduğunu ve doğalgaz girişini kontrol et, sonra **bir kez** resetle. Kod geri geliyorsa ateşleme ya da gaz tarafında gerçek bir arıza vardır. Gaz işine kendin müdahale etme.

### Atık gaz ve baca — F.77 ya da F05
Bu kodlarda beklemek doğru değil: atık gaz yolundaki bir arıza yanma ürünlerinin doğru tahliye edilmediği anlamına gelebilir. Kılavuzun talimatı net — **yetkili servis tarafından giderilmesi** gerekir.

### "F.07, F.08, F.15 aramıştım"
Bu numaralar DemirDöküm'ün kendi kılavuzlarında geçmiyor. Doğruları başka yerde:

| Aradığın kod | Gerçek karşılığı |
|---|---|
| **F.07** "gaz valfi" | Gaz armatürü tarafı: **F.26 · F.61 · F.62** |
| **F.08** "elektronik kart" | Kart tarafı: **F.63 · F.64 · F.65** |
| **F.15** "pompa" | Pompa: **F.75** |
| **F.30** "baca" | Baca: **F.77** (noktasız ailede **F05**) |
| **F.04** "NTC sensörü" | F04 **ateşleme** arızasıdır; sensör kodları `F.00`/`F.01`/`F.71`/`F.72` |
| **F.05** "fan" | F05 **baca** arızasıdır; fan **F.32**'dir |
| **F.37** | DemirDöküm kodu değil — **Baymak**'ın düşük basınç kodudur |

## Reset nasıl yapılır?
Reset tuşuna birkaç saniye bas; önce su basıncını (1–1.5 bar) kontrol et. Kod tekrar çıkarsa arıza sürüyordur — resetlemeyi tekrarlamak sorunu büyütebilir.

## Tahmini maliyet
DemirDöküm modeline ve arızaya göre tahmini maliyeti [Benservis](/) söyler; sonra yakınındaki yüksek puanlı servisi ara.

İlgili: [Kombi arıza kodları (marka marka)](/blog/kombi-ariza-kodlari/) · [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) · [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) · [Kombi yanmıyor](/blog/kombi-yanmiyor/) · [Kombi tamirinde fiyatı ne belirler?](/blog/kombi-tamiri-kac-para/)

## Sık sorulan sorular

**Düşük su basıncı kodu nasıl çözülür?**
Noktalıda F.22, noktasızda F10; doldurma musluğundan 1–1.5 bara getir. Sürekli düşüyorsa kaçak → servis.

**Neden iki kod ailesi var?**
Nitromix/ademiX Vaillant platformundan gelir (noktalı), Atron/Nitron kendi platformunu kullanır (noktasız).

**Ateşleme yapmıyor, hangi kod?**
Noktalıda F.28, noktasızda F04. Gaz vanası + bir kez reset; geçmezse servis.

**F.07 / F.08 / F.15 ne demek?**
Bu numaralar DemirDöküm kılavuzlarında yok. Doğruları F.26/F.61/F.62, F.63/F.64/F.65 ve F.75.
