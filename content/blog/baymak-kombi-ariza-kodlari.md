---
title: "Baymak kombi arıza kodları ve anlamları"
description: "Baymak kombi arıza kodları: E01 ateşleme, E05 fan, F37 düşük su basıncı ve diğerlerinin anlamı, güvenle kendin yapabileceklerin. Bil, gör, çağır."
slug: "baymak-kombi-ariza-kodlari"
date: "2026-06-19"
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
faq:
  - q: "Baymak kombi düşük su basıncı kodu nedir, nasıl çözülür?"
    a: "Duotec ve Eco serisinde F37, Lunatec/Startec serisinde H.02.07 kodudur. Güvenle çözebilirsin: kombinin altındaki doldurma musluğundan manometreyi 1–1.5 bara getir, sonra kapat. Basınç sürekli düşüyorsa kaçak vardır, servis gerekir."
  - q: "Baymak E01 ne demek?"
    a: "E01, kılavuzda 'başarısız ateşleme' olarak geçer: kombi yanmıyordur. Önce gaz vanasının açık olduğunu kontrol et ve reset'le; geçmezse gazla ilgili bir arızadır ve yetkili servis gerekir."
  - q: "Baymak kombi nasıl reset edilir?"
    a: "Çoğu modelde reset tuşuna birkaç saniye basmak arızayı sıfırlar. Su basıncı düşükse önce 1–1.5 bara tamamla. Kod tekrar çıkarsa arıza sürüyordur."
  - q: "Kodlar her Baymak modelinde aynı mı?"
    a: "Hayır. Baymak'ın iki ayrı kod düzeni var: Duotec ve Eco serisi E01/E02 gibi kodlar verir, Lunatec ve Startec serisi ise H.02.07 gibi noktalı kodlar kullanır. Kesin teşhis için modelini ve kodu Benservis'e yaz."
images:
  coverAlt: "Kombi panelinin yakın plan çizimi: hata göstergesi yanan ekran ve basınç göstergesi"
---

Baymak kombin ekranında bir arıza kodu gösteriyor. Bu rehberde Baymak'ın **kendi kullanım kılavuzlarında birebir geçen** kodları, anlamlarını ve hangisini **güvenle kendin** çözebileceğini topladık.

> 🔥 **Güvenlik:** Kombi gaz ve basınçlı sıcak su ile çalışır. Güvenle yapabileceğin tek şey **su basıncı eklemek** (F37 / H.02.07) ve **reset**'tir. Gaz/alev/fan/kart kodlarında **cihazı kapat ve yetkili servise** başvur.

> ⚠️ **Baymak'ta tek bir kod düzeni yok.** Duotec ve Eco serisi `E01` biçiminde kod verir; Lunatec ve Startec serisi `H.02.07` biçiminde noktalı kod kullanır. Aynı arıza iki seride farklı görünür — ekrandaki kodu modelinle birlikte değerlendir.

## ⚡ En sık karşılaşılan 3 kod
> **F37** (Lunatec/Startec'te **H.02.07**) — Düşük su basıncı → 🛠️ doldurma musluğundan 1–1.5 bara getir
>
> **E01** — Başarısız ateşleme → 🔧 gaz vanası + reset; geçmezse servis
>
> **E05** — Fan geri besleme hatası → 🔧 servis

## Baymak kombi arıza kodları
🛠️ = güvenle kendin · 🔧 = yetkili servis

| Kod | Anlamı | Ne yapmalı |
|-----|--------|------------|
| **F37** | Düşük su basıncı | 🛠️ Doldurma musluğundan 1–1.5 bara tamamla |
| **E01** | Başarısız ateşleme | 🔧 Gaz vanası açık mı bak, reset; geçmezse servis |
| **E02** | Hatalı alev oluşumu | 🔧 Servis (gaz/iyonizasyon) |
| **E03** | Aşırı ısınma hatası | 🔧 Servis (önce su basıncı/dolaşım) |
| **E05** | Fan geri besleme hatası | 🔧 Servis |
| **E09** | Gaz valfi geri besleme hatası | 🔧 Cihazı kapat, servis |
| **E15** | Sensör sıcaklık değişim hatası | 🔧 Servis |
| **E18 / E33 / E35** | NTC sıcaklık sensörü | 🔧 Servis |
| **E21** | Elektronik kart arızası | 🔧 Servis |
| **F52** | Kullanım suyu sensörü | 🔧 Servis |

Duotec Compact 24 ve Eco CT 20 kılavuzlarındaki tam E listesi şudur: **E01, E02, E03, E05, E09, E12, E15, E16, E17, E18, E21, E33, E35.** Tabloya yalnız anlamı kılavuzda birebir teyit edilenleri aldık; **E12, E16 ve E17'nin anlamını doğrulayamadığımız için yazmıyoruz.** Ekranında bu üçünden biri varsa modelinle birlikte [Benservis'e](/) yaz.

Sirkülasyon tarafındaki kodlar noktalı düzende gelir: **E.01.17** ve **H.01.18**.

## Öne çıkan kodlar

### F37 / H.02.07 — Düşük su basıncı (güvenle çözülür)
Manometre 1 barın altındaysa: kombinin altındaki **doldurma musluğunu** yavaşça aç, **1–1.5 bar** olunca kapat, reset'le. Basınç sürekli düşüyorsa **kaçak** vardır → servis.

### E01 — Başarısız ateşleme
Kombi yanmıyor. Önce **gaz vanasının açık** olduğunu ve doğalgaz girişini kontrol et, **reset**'le. Geçmezse ateşleme/gaz arızasıdır → servis. Gaz işine kendin müdahale etme.

### Fan / sensör / kart kodları
E05, E09, E15, E18, E21 ve F52 donanım arızasıdır ve yetkili servis ister.

## Reset nasıl yapılır?
Reset tuşuna birkaç saniye bas; önce su basıncını (1–1.5 bar) kontrol et. Kod tekrar çıkarsa arıza sürüyordur.

## Tahmini maliyet
Baymak modeline ve arızaya göre tahmini maliyeti [Benservis](/) söyler; sonra yakınındaki yüksek puanlı servisi ara.

İlgili: [Kombi arıza kodları (marka marka)](/blog/kombi-ariza-kodlari/) · [Vaillant kombi arıza kodları](/blog/vaillant-kombi-ariza-kodlari/) · [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) · [Kombi yanmıyor](/blog/kombi-yanmiyor/) · [Kombi tamirinde fiyatı ne belirler?](/blog/kombi-tamiri-kac-para/)

## Sık sorulan sorular

**Düşük su basıncı kodu nasıl çözülür?**
Duotec/Eco serisinde F37, Lunatec/Startec serisinde H.02.07; doldurma musluğundan 1–1.5 bara getir. Sürekli düşüyorsa kaçak → servis.

**E01 ne demek?**
Başarısız ateşleme; gaz vanası + reset, geçmezse servis.

**Nasıl reset edilir?**
Reset tuşuna birkaç saniye bas; önce su basıncını kontrol et.

**Kodlar her modelde aynı mı?**
Hayır. Duotec/Eco serisi E kodları, Lunatec/Startec serisi noktalı H kodları kullanır; modelini ve kodu Benservis'e yaz.
