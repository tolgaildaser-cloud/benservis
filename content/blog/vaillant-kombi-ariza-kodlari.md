---
title: "Vaillant kombi arıza kodları: F.22, F.28, F.29, F.75"
description: "Vaillant kombi arıza kodları: F.22 düşük su basıncı, F.28 ateşleme, F.29 alev sönmesi, F.75 pompa ve anlamları. Bil, gör, çağır."
slug: "vaillant-kombi-ariza-kodlari"
date: "2026-06-19"
updated: "2026-09-17"
category: "Kombi"
# 🔴 22 Ağu 2026 — ÜÇ İFADE DÜZELTİLDİ (kod tablosu denetimi, TARAMA-1 kalan tur).
# Yazı külliyatın en sağlam kombi yazısıydı (12/14 doğru) ama üç yeri hatalıydı:
#   F.23 / F.24 TEK SATIRDA BİRLEŞTİRİLMİŞTİ. Vaillant ikisini ayırıyor:
#     F.23 = sıcaklık FARKI çok büyük · F.24 = sıcaklık ARTIŞI çok hızlı. Ayrı arızalar.
#   F.22'ye "(kuru çalışma)" eklenmişti — Vaillant'ta kuru çalışma AYRI kod: F.83.
#   F.54 "gaz basıncı düşük" diye daralttılmıştı; Vaillant'ın ifadesi daha geniş:
#     "gaz besleme arızası" ve genelde F.28/F.29 ile BİRLİKTE görülür. Ayrıca bu kod
#     resmî kod sayfasında var ama taranan 4 kurulum kılavuzunun hiçbirinde yok →
#     tek kaynaklı olduğu okura da söylendi.
# --- 17 Eyl 2026 · BASINÇ KÜMESİ ÜRETİCİ BELGESİYLE DOĞRULANDI (YK #88) — yayında görünmez ---
# Belgeler 2026-09-17 curl -sL ile indirildi (hepsi HTTP 200), pdftotext ile okundu.
# 1) Vaillant ecoTEC plus VU/VUW/VUI ..6/5-5 F A Kullanma Kılavuzu 0020228719_00
#    https://www.vaillant.com.tr/pdf/ecotecplus5-5-813748.pdf
#    HTTP 200 · 16 sf · md5 c999bf8603f8fc703b823341ebcae02d · F.22 <0,5 bar kapanır, soğukta 1,0-2,0 bar, <0,80 doldur, çok katlı s.9 · doldurma vanası yerini bayiye sor, yavaşça aç s.10 · F.22 yetersiz su, F.28 reset 1 sn / 3 deneme s.13
# 2) Vaillant ecoTEC intro VUW 24/24 AS/2-1 Kullanma Kılavuzu 8000037574_01
#    https://www.vaillant.com.tr/downloads/ecotec-intro-kullanm-klavuzu-3050427.pdf
#    HTTP 200 · 16 sf · md5 ec496873b94ac3277a9f095e39a8a636 · <0,5 bar doldur, 1,0-1,4 bar s.9 · F.22, reset açma/kapatma >3 sn en fazla 5, gideremiyorsan servis s.10 · F.22 s.12
# 3) Vaillant ecoTEC pure Kullanma Kılavuzu 0020231736_01
#    https://www.vaillant.com.tr/pdf/ecotec-pure-kullanm-klavuzu-1099614.pdf
#    HTTP 200 · 20 sf · md5 4a40080e85860d29faf39771b38855b4 · yalnız kılavuzdaki işler s.4 · reset >3 sn s.9 · 0,80-2,0 bar, <0,5 bar arıza konumu s.12, s.17
# Kapsam: basınç kümesi (F.22, doldurma tarifi, reset süresi, 'en sık'). Kod tablosunun geri kalanı 22 Ağu denetimindedir, bu turda yeniden denetlenmedi.
# Belgede olmadığı için ÇIKARILDI: "1-1.5 bar" (Vaillant belgelerinde yok) · "1 barın altındaysa" · "kombinin altındaki doldurma musluğu" (yer modele göre; ecoTEC plus bayiye sor diyor) · "en sık kod" · "çoğu Vaillant modelde" · "birkaç saniye" reset · "basınç sürekli düşüyorsa kaçak vardır" (Vaillant belgelerinde yok)
faq:
  - q: "Vaillant F.22 ne demek ve nasıl çözülür?"
    a: "F.22 tesisat basıncının çok düşük olduğunu, ısıtma sisteminde yetersiz su bulunduğunu gösterir. Kılavuzun çözümü ısıtma sistemini doldurmaktır: doldurma vanasını yavaşça aç, göstergede modelinin kılavuzundaki değere gelince kapat. Değer modele göre değişir; örneğin ecoTEC plus kılavuzu soğuk sistemde 1,0–2,0 bar, ecoTEC intro kılavuzu 1,0–1,4 bar veriyor. Doldurma vanasının yerini bilmiyorsan montajı yapan yetkili bayiye sor. Arızayı bu adımla gideremiyorsan yetkili servise başvur."
  - q: "Vaillant F.28 ve F.29 farkı ne?"
    a: "F.28 kombinin çalışma başlangıcında ateşleme yapamadığını (alev oluşmuyor) gösterir. F.29 ise çalışırken alevin sönmesidir; genelde gaz yetersizliği ya da topraklama sorunudur. İkisi de gazla ilgilidir ve yetkili servis ister."
  - q: "Vaillant F.75 ne anlama gelir?"
    a: "F.75 pompa çalıştığında basınç farkının algılanmadığını gösterir; genelde pompa veya su basıncı sensörü arızasıdır. Servis gerekir."
  - q: "Vaillant kombi nasıl reset edilir?"
    a: "Reset şekli modele göre değişir: ecoTEC plus kılavuzu reset tuşuna bir saniye, ecoTEC pure kılavuzu 3 saniyeden uzun basmayı söylüyor; ecoTEC intro'da açma/kapatma düğmesine 3 saniyeden uzun basılır (en fazla beş kez). Su basıncı düşükse önce ısıtma sistemini doldur. Ateşleme arızasını üç denemede gideremiyorsan yetkili bayiye başvur."
images:
  coverAlt: "Kombi çizimi, ekranında hata göstergesi ve yanında kod listesi"
---

Vaillant kombin ekranında **F.** ile başlayan bir arıza kodu gösteriyor (F.22, F.28, F.75…). Bu rehberde Vaillant (ecoTEC ve diğer seriler) kombinin **başlıca kodlarını**, anlamlarını ve hangisini **güvenle kendin** çözebileceğini topladık.

> 🔥 **Güvenlik:** Kombi gaz ve basınçlı sıcak su ile çalışır. Yalnız kullanma kılavuzunda anlatılan işleri yap: gaz vanasının açık olduğuna bakmak, **su basıncını kontrol edip doldurmak** (F.22) ve **reset**. Gaz/alev/fan/kart kodlarında **cihazı kapat ve yetkili servise** başvur.

> ⚠️ Kod anlamları modele göre küçük farklar gösterebilir; kesin teşhis için modelini ve kodu [Benservis'e](/) yaz.

## ⚡ Öne çıkan 3 kod
> **F.22** — Düşük su basıncı → 🛠️ ısıtma sistemini kılavuzdaki değere kadar doldur
>
> **F.28** — Ateşleme yok / gaz yok → 🔧 servis (önce gaz vanası + reset)
>
> **F.75** — Pompa / su basıncı sensörü → 🔧 servis

## Vaillant kombi arıza kodları (seçilmiş liste)
🛠️ = güvenle kendin · 🔧 = yetkili servis

| Kod | Anlamı | Ne yapmalı |
|-----|--------|------------|
| **F.22** | Düşük su basıncı | 🛠️ Isıtma sistemini kılavuzdaki değere kadar doldur |
| **F.23** | Sıcaklık farkı çok büyük | 🔧 Servis (pompa/dolaşım) |
| **F.24** | Sıcaklık artışı çok hızlı | 🔧 Servis (pompa/dolaşım) |
| **F.83** | Kuru çalışma | 🔧 Servis (önce basıncı kontrol et) |
| **F.27** | Gaz yokken alev algılandı | 🔧 Cihazı kapat, servis |
| **F.28** | Başlangıçta ateşleme yok / gaz yok | 🔧 Gaz vanası açık mı bak, reset; geçmezse servis |
| **F.29** | Çalışırken alev sönmesi (gaz/topraklama) | 🔧 Servis |
| **F.32** | Fan arızası | 🔧 Servis |
| **F.49** | eBUS gerilim hatası | 🔧 Servis |
| **F.54** | Gaz besleme arızası ⚠️ genelde F.28/F.29 ile birlikte | 🔧 Cihazı kapat, servis |
| **F.61** | Gaz armatürü kumanda arızası | 🔧 Cihazı kapat, servis |
| **F.62** | Gaz armatürü / elektronik kart | 🔧 Cihazı kapat, servis |
| **F.73 / F.74** | Su basıncı sensörü hatası | 🔧 Servis |
| **F.75** | Pompa basınç farkı algılanmıyor | 🔧 Servis (pompa/sensör) |
| **F.77** | Baca / yoğuşma / klape | 🔧 Servis |

## Öne çıkan kodlar

### F.22 — Düşük su basıncı (güvenle çözülür)
Tesisat basıncı çok düşük, ısıtma sisteminde su yetersiz. ecoTEC plus kılavuzuna göre dolum basıncı 0,5 barın altına düşerse ürün kapanır ve ekranda F.22 görünür. Çözüm ısıtma sistemini doldurmaktır:

- Basıncı sistem soğukken oku ve modelinin kılavuzundaki değerle karşılaştır: ecoTEC plus'ta **1,0–2,0 bar** (0,80 barın altındaysa doldur), ecoTEC pure'da **0,80–2,0 bar**, ecoTEC intro'da 0,5 barın altındaysa doldurup **1,0–1,4 bara** getir.
- **Doldurma vanasını** yavaşça aç, göstergede gerekli değere gelince kapat. Vananın yerini bilmiyorsan montajı yapan yetkili bayiye sor.
- Isıtma sistemi birden fazla kata yayılıyorsa daha yüksek bir basınç gerekebilir; değeri yetkili bayiden öğren.

Arızayı bu adımlarla gideremiyorsan yetkili servise başvur.

### F.28 — Ateşleme yok / gaz yok
Kombi yanmıyor. Önce **gaz vanasının açık** olduğunu, doğalgaz sayacında sorun olmadığını kontrol et ve **reset**'le. Geçmezse ateşleme/gaz armatürü arızası olabilir → servis.

### F.75 — Pompa / basınç sensörü
Pompa çalışırken basınç farkı algılanmıyor; pompa ya da su basıncı sensörü arızasıdır. Servis gerekir.

## Reset nasıl yapılır?
Reset şekli modele göre değişir: ecoTEC plus kılavuzu **reset tuşuna bir saniye**, ecoTEC pure kılavuzu **3 saniyeden uzun** basmayı söylüyor; ecoTEC intro'da **açma/kapatma düğmesine 3 saniyeden uzun** basılır (en fazla beş kez). Önce su basıncını kontrol et. Ateşleme arızasını üç denemede gideremiyorsan yetkili bayiye başvur.

## Tahmini maliyet
Vaillant modeline ve arızaya göre tahmini maliyeti [Benservis](/) söyler; sonra yakınındaki yüksek puanlı kombi servisini ara.

İlgili: [Kombi arıza kodları (marka marka)](/blog/kombi-ariza-kodlari/) · [DemirDöküm kombi arıza kodları](/blog/demirdokum-kombi-ariza-kodlari/) · [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) · [Kombi yanmıyor](/blog/kombi-yanmiyor/) · [Kombi tamirinde fiyatı ne belirler?](/blog/kombi-tamiri-kac-para/) · [Vaillant kombi sembolleri ve anlamları](/blog/vaillant-kombi-sembolleri-ve-anlamlari/)

## Sık sorulan sorular

**F.22 ne demek?**
Tesisat basıncı çok düşük; ısıtma sistemini modelinin kılavuzundaki değere kadar doldur. Gideremiyorsan servis.

**F.28 / F.29 farkı?**
F.28 başlangıçta ateşleme yok; F.29 çalışırken alev sönmesi. İkisi de gazla ilgili, servis ister.

**F.75 ne anlama gelir?**
Pompa/su basıncı sensörü arızası; servis gerekir.

**Nasıl reset edilir?**
Modeline göre reset tuşuna ya da açma/kapatma düğmesine bas (süre kılavuzda); önce su basıncını kontrol et.
