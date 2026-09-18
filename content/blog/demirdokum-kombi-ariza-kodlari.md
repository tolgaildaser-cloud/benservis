---
title: "DemirDöküm kombi arıza kodları: iki ayrı kod ailesi var"
description: "DemirDöküm'de noktalı (F.22, F.28) ve noktasız (F04, F05, F10) iki kod ailesi var. Hangi seride hangisi geçerli, kılavuzdaki anlamları ve servis sınırı."
slug: "demirdokum-kombi-ariza-kodlari"
date: "2026-06-19"
updated: "2026-09-17"
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
# --- 17 Eyl 2026 · BASINÇ KÜMESİ ÜRETİCİ BELGESİYLE DOĞRULANDI (YK #88) — yayında görünmez ---
# Belgeler 2026-09-17 curl -sL ile indirildi (hepsi HTTP 200), pdftotext ile okundu.
# 1) DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01
#    https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 16 sf · md5 3340a11b923b7332f8eb8685297970b6 · soğukta 1,0-1,5 bar, çok katlı, <0,4 bar kapanır F.22, <1,0 doldur, doldurma vanasını yavaşça aç, uyarı kendiliğinden söner s.12 · F.22 tesisat basıncı çok düşük; F.28 reset 1 sn, ≤3 deneme s.15
# 2) DemirDöküm ademiX Montaj ve Bakım Kılavuzu 0020313926_02
#    https://www.demirdokum.com.tr/products-2/a5-1/ademix-mk-0020313926-02-2323451.pdf
#    HTTP 200 · 44 sf · md5 5bc84f7e4bc6a4fe70867bd0682dbb9e · dolum 1,00-1,40 bar s.15 · F.22 Tesisat basıncı çok düşük s.33
# 3) DemirDöküm Atron Condense Kullanma Kılavuzu 0020281171_00
#    https://www.demirdokum.com.tr/downloads/products-1/kullanma-kilavuzu-1772624.pdf
#    HTTP 200 · 12 sf · md5 7746b6a9d980072b5109b1b27926bd81 · 1,0-2,0 bar, <0,80 doldur, F10 aralık dışı, çok katlı s.7-8 · F10 yetersiz su, F04 reset + 3 deneme s.10
# 4) DemirDöküm Nitron Plus Kullanma Kılavuzu 0020193908_03
#    https://www.demirdokum.com.tr/products-2/nitronplus/nitronplus-klavuz-466829.pdf
#    HTTP 200 · 20 sf · md5 51e63dec4da2dcf111d41350fa586e65 · F10 aralık dışı, 1,0-2,0 bar, <0,80 doldur, çok katlı s.11 · F10 yetersiz su, F04 reset + 3 deneme s.16
# Kapsam: basınç kümesi (F.22/F10 anlamı ve seri eşlemesi, doldurma tarifi, reset). Seri eşlemesi doğrulandı: F.22 Nitromix KK s.15 + ademiX MK s.33 · F10 Atron s.7/s.10 + Nitron Plus s.11/s.16.
# Kod tablosunun geri kalanı 22 Ağu denetimindedir, bu turda yeniden denetlenmedi.
# Belgede olmadığı için ÇIKARILDI: "1-1.5 bar" (Nitromix'te 1,0-1,5; Atron/Nitron Plus'ta 1,0-2,0) · "1 barın altındaysa" (Atron/Nitron Plus'ta 0,80) · "kombinin altındaki doldurma musluğu" (Atron/Nitron Plus: soğuk su borusundaki vana) · "en sık" · "birkaç saniye" reset · "resetlemeyi tekrarlamak sorunu büyütebilir" · "basınç sürekli düşüyorsa kaçak vardır" (DemirDöküm belgelerinde yok)
faq:
  - q: "DemirDöküm kombi düşük su basıncı kodu nedir, nasıl çözülür?"
    a: "Serine göre değişir: Nitromix ve ademiX gibi noktalı kod kullanan modellerde F.22, Atron Condense ve Nitron Plus gibi noktasız kod kullanan modellerde F10. İkisinde de kılavuzun çözümü ısıtma sistemini doldurmaktır; hedef değer modele göre değişir: Nitromix kılavuzu soğuk sistemde 1,0–1,5 bar, Atron Condense ve Nitron Plus kılavuzları 1,0–2,0 bar veriyor. Doldurma vanasını yavaşça aç, değere gelince kapat. Arızayı gideremiyorsan yetkili servise başvur."
  - q: "DemirDöküm'de neden iki farklı kod ailesi var?"
    a: "Çünkü DemirDöküm iki ayrı elektronik platform kullanıyor. Nitromix ve ademiX gibi modeller Vaillant Group platformundan gelir ve kodları noktalıdır: F.22, F.28, F.29 gibi. Atron Condense ve Nitron Plus gibi modeller ise kendi platformunu kullanır ve kodları noktasızdır: F04, F05, F10. Aynı numara iki ailede farklı anlama gelebildiği için önce ekranındaki kodun noktalı mı noktasız mı olduğuna bakmak gerekir."
  - q: "DemirDöküm kombi ateşleme yapmıyor, hangi kod?"
    a: "Noktalı ailede F.28 'ateşleme başarısız' demektir. Noktasız ailede karşılığı F04'tür: kombi üç ateşleme denemesinden sonra arıza konumuna geçer ve kılavuz burada reset tuşuna basmayı söyler. İki kodda da önce gaz vanasının açık olduğunu kontrol et ve bir kez resetle; kod geri geliyorsa gazla ilgili bir arıza vardır ve yetkili servis gerekir."
images:
  coverAlt: "Kombi çizimi, ekranında hata göstergesi; yanında basınç göstergesi ve kod listesi"
---

DemirDöküm kombin ekranında bir arıza kodu gösteriyor. Bu markada kodu okumadan önce bilmen gereken bir ayrım var, işini kolaylaştırır:

> ⚠️ **DemirDöküm'ün iki ayrı kod ailesi var.**
>
> **① Noktalı aile** — `F.22`, `F.28`, `F.29` biçiminde. Nitromix, ademiX gibi **Vaillant Group platformundan** gelen modeller.
>
> **② Noktasız aile** — `F04`, `F05`, `F10` biçiminde. Atron Condense, Nitron Plus gibi **kendi platformunu** kullanan modeller.
>
> Aynı numara iki ailede farklı anlama gelebilir. Önce ekrandaki kodun **noktalı mı noktasız mı** olduğuna bak.

> 🔥 **Güvenlik:** Kombi gaz ve basınçlı sıcak su ile çalışır. Kılavuzların kullanıcıya bıraktığı işler **gaz vanasının açık olduğuna bakmak**, **su basıncını kontrol edip ısıtma sistemini doldurmak** ve **reset**'tir. Gaz, alev, baca, fan ve kart kodlarında **cihazı kapat ve yetkili servise** başvur.

## ⚡ Öne çıkan üç durum
> **Düşük su basıncı** — noktalıda `F.22`, noktasızda `F10` → 🛠️ ısıtma sistemini kılavuzdaki değere kadar doldur
>
> **Ateşleme başarısız** — noktalıda `F.28`, noktasızda `F04` → 🛠️ bir kez reset; geçmezse servis
>
> **Atık gaz / baca** — noktalıda `F.77`, noktasızda `F05` → 🔧 servis

## ① Noktalı aile — Nitromix, ademiX ve benzeri
🛠️ = güvenle kendin · 🔧 = yetkili servis

| Kod | Kılavuzdaki tanım | Ne yapmalı |
|-----|-------------------|------------|
| **F.22** | Tesisat basıncı çok düşük | 🛠️ Isıtma sistemini doldur (Nitromix: soğukken 1,0–1,5 bar) |
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
| **F10** | Isıtma sisteminde yetersiz su; tesisat basıncı izin verilen aralığın dışında | 🛠️ Isıtma sistemini doldur (1,0–2,0 bar) |
| **F04** | Ateşleme arızası — üç denemeden sonra cihaz arıza konumuna geçer | 🛠️ Kılavuzun çözümü: **reset tuşuna bas** |
| **F05** | Atık gaz hattında (baca) arıza | 🔧 Yetkili servis |

> 📌 **Dikkat:** bu üç numara noktalı ailede bambaşka şeyler anlatır. Noktasız `F05` baca demektir; noktalı ailede baca kodu `F.77`'dir ve fan `F.32`'dir.

## Öne çıkan durumlar

### Düşük su basıncı — F.22 ya da F10
Basıncı sistem soğukken oku ve modelinin kılavuzundaki değerle karşılaştır:

- **Nitromix:** 1,0–1,5 bar; 1,0 barın altındaysa doldur. Basınç 0,4 barın altına düşerse ürün kapanır ve ekranda F.22 görünür.
- **Atron Condense ve Nitron Plus:** 1,0–2,0 bar; 0,80 barın altındaysa doldur. Basınç izin verilen aralığın dışındaysa ekranda F10 görünür.

**Doldurma vanasını** yavaşça aç, göstergede gerekli değere gelince kapat; ardından radyatörlerin havasını alıp basıncı yeniden kontrol et. Nitromix kılavuzuna göre yeterince su eklediğinde uyarı kendiliğinden söner. Isıtma sistemi birden fazla kata dağıldıysa kılavuz daha yüksek bir sistem basıncının gerekebileceğini söylüyor — o durumda yetkili bayiye danış.

Arızayı bu adımlarla gideremiyorsan yetkili servise başvur.

### Ateşleme başarısız — F.28 ya da F04
Kombi yanmıyor. Noktasız ailede kılavuzun verdiği çözüm doğrudan **reset tuşuna basmaktır**; cihaz üç başarısız denemeden sonra kendini kilitler ve reset onu tekrar devreye alır.

Önce **gaz vanasının açık** olduğunu ve doğalgaz girişini kontrol et, sonra **bir kez** resetle. Kod geri geliyorsa ateşleme ya da gaz tarafında gerçek bir arıza vardır. Gaz işine kendin müdahale etme.

### Atık gaz ve baca — F.77 ya da F05
Bu kodlarda beklemek doğru değil: atık gaz yolundaki bir arıza yanma ürünlerinin doğru tahliye edilmediği anlamına gelebilir. Kılavuzun talimatı net — **yetkili servis tarafından giderilmesi** gerekir.

## Reset nasıl yapılır?
Önce su basıncını kontrol et. Nitromix kılavuzu ateşleme arızasında **reset tuşuna 1 saniye** basmayı söylüyor; Atron Condense ve Nitron Plus kılavuzları **reset tuşuna basmayı** söylüyor. Üç kılavuz da ateşleme arızası üç denemede gitmiyorsa yetkili servise ya da bayiye başvurmayı söylüyor; denemeye devam etme.

## Tahmini maliyet
DemirDöküm modeline ve arızaya göre tahmini maliyeti [Benservis](/) söyler; sonra yakınındaki yüksek puanlı servisi ara.

İlgili: [Kombi arıza kodları (marka marka)](/blog/kombi-ariza-kodlari/) · [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) · [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) · [Kombi yanmıyor](/blog/kombi-yanmiyor/) · [Kombi tamirinde fiyatı ne belirler?](/blog/kombi-tamiri-kac-para/)

## Sık sorulan sorular

**Düşük su basıncı kodu nasıl çözülür?**
Noktalıda F.22, noktasızda F10; ısıtma sistemini modelinin kılavuzundaki değere kadar doldur (Nitromix 1,0–1,5 bar · Atron/Nitron Plus 1,0–2,0 bar). Gideremiyorsan servis.

**Neden iki kod ailesi var?**
Nitromix/ademiX Vaillant platformundan gelir (noktalı), Atron/Nitron kendi platformunu kullanır (noktasız).

**Ateşleme yapmıyor, hangi kod?**
Noktalıda F.28, noktasızda F04. Gaz vanası + bir kez reset; geçmezse servis.

**F.07 / F.08 / F.15 ne demek?**
Bu numaralar DemirDöküm kılavuzlarında yok. Doğruları F.26/F.61/F.62, F.63/F.64/F.65 ve F.75.
