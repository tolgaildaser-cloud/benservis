---
title: "Tineco kendini temizleme: nasıl yapılır, neden başlamaz?"
description: "Tineco Floor One kendi kendini temizleme döngüsü: başlatma sırası, gereken pil ve su seviyesi, sesli uyarılar ve döngü başlamazsa kılavuzun önerileri."
slug: "tineco-kendini-temizleme"
date: "2026-10-23"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M4 Ecovacs/Tineco). origin/main 75980e0'da "tineco" geçen yazı/başlık/gövde yok; kiwi-islak-kuru-supurge-kullanimi farklı marka.
# OT (#164, bu koşu) "tineco kendini": 1. **tineco kendini temizleme** · 2. tineco ifloor 3 kendini temizleyen islak kuru kablosuz şarjlı süpürge. "tineco temizleme": 3. tineco kendini temizleme · "tineco k": 6. tineco kendini temizleme.
#   GSC: "tineco" satırı yok.
# Bağlantı zinciri (#88): https://www.tineco.com.tr/support/instruction-manual (HTTP 200) → PDF'ler HTTP 200 application/pdf:
#  (S3) md5 f213a3039964fd79aaabfc1bc20bf959 · (S5) md5 37b04f8b9c111a75db10822fdb0bc240 · (S7) md5 0f90da188c09fc019572fe2f34860afe · (IF3) md5 793240c7de9e5b322b7f625ddfbf9de4
# Not: pil eşiği modele göre farklı: S3 ve S5 "%10'dan fazla", S7 FlashDry "> %30", iFloor 3 "yeterli güç". Yazı bunu tabloyla veriyor.
# BİLEREK YAZILMAYANLAR: kurutma sıcaklığı/süresi (belgede yok) · döngü süresi (belgede yok) · fiyat (#46) · pazar.
# Alıntı denetim tablosu: tineco-kendini-temizleme.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika hazırlık (döngü süresi ayrı)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Cihazla gelen şarj tabanı", "Musluk suyu", "Temizleme fırçası"]
steps:
  - "Kirli su deposunu boşaltıp temizle ve yerine tak."
  - "Temiz su deposunu en az yüzde 40'ın üzerine kadar doldur."
  - "Şarj tabanının prize takılı olduğundan ve pilin yeterli olduğundan emin ol."
  - "Kullanımdan sonra cihazı şarj tabanına dikey olarak yerleştir."
  - "Kendi kendini temizleme simgesi yanıp sönünce ya da sesli uyarıyı duyunca kendi kendini temizleme düğmesine bas."
  - "Döngü bitip tamamlandı uyarısı gelince cihazı şarjda bırak ve kirli su deposunu boşaltıp temizle."
faq:
  - q: "Tineco kendi kendini temizleme neden başlamıyor?"
    a: "Kılavuzlardaki koşullar üç tane: cihaz şarj tabanında olmalı ve taban prize takılı olmalı, pil yeterli olmalı, temiz su deposunda su seviyesi yüzde 40'ın üzerinde ve kirli su deposu temizlenmiş olmalı. Bunlardan biri eksikse cihaz sesli uyarıyla söylüyor: cihazı şarj tabanına yerleştirmeni, düşük pilde önce şarj etmeni ya da S7 FlashDry'da su eklemeni istiyor."
  - q: "Ne kadar pil gerekiyor?"
    a: "Floor One S3 ve S5 kılavuzlarında pil seviyesinin yüzde 10'dan fazla, S7 FlashDry kılavuzunda yüzde 30'dan fazla olması isteniyor. iFloor 3 kılavuzu yalnızca pilin yeterli güce sahip olmasını yazıyor."
  - q: "Kendi kendini temizleme simgesi yanıp sönüyor, ne yapmalıyım?"
    a: "Sorun giderme tablolarına göre bu simgenin yanıp sönmesi yıkama başlığının ya da fırça silindirinin kirli olduğunu gösteriyor. Çözüm kendi kendini temizleme döngüsünü başlatmak."
  - q: "Döngüden sonra yine de elle temizlik gerekir mi?"
    a: "Evet. Döngü bitince kılavuzlar kirli su deposunu temizlemeni istiyor; S7 kılavuzu bunu koku oluşmaması için yazıyor. Bakım bölümleri de her kullanımdan sonra kirli su deposunu, filtreleri, fırça silindirini ve kapağını temizleyip kurutmanı öneriyor."
images:
  coverAlt: "Şarj tabanında dik duran ve fırça silindiri yıkanan ıslak kuru süpürge"
  steps:
    - "Çizim: solda dikey süpürge, sağda su ya da toz haznesi"
    - "Çizim: solda dikey süpürge, sağda su ya da toz haznesi"
    - "Çizim: solda dikey süpürge, sağda prizden çekilen fiş"
    - "Çizim: solda dikey süpürge, sağda şarj edilen batarya"
    - "Çizim: solda dikey süpürge, sağda çalışma sesi"
    - "Çizim: solda dikey süpürge, sağda şarj edilen batarya"
---

Islak kuru süpürgenin en çok sevilen özelliği, işi bitince fırçasını kendisinin yıkaması. Ama bazen düğmeye basıyorsun, cihaz yalnızca bir cümle söyleyip duruyor. Tineco'nun Türkiye sitesindeki **Floor One S3, S5, S7 FlashDry** ve **iFloor 3** kılavuzları döngünün sırasını ve başlaması için gereken koşulları açıkça yazıyor. Kılavuzlarda parçanın adı S3 ve iFloor 3'te **yıkama başlığı**, S5 ve S7'de **fırça silindiri**; ikisi aynı yumuşak silindir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kirli su deposunu boşalt → temiz suyu yüzde 40'ın üstüne doldur → taban prizde, pil yeterli → cihazı tabana koy → simge yanıp sönünce ya da sesli uyarı gelince düğmeye bas → bitince kirli su deposunu yeniden boşalt.

## Modele göre koşullar

| Model | Pil | Temiz su | Başlatma |
|---|---|---|---|
| Floor One S3 | Yüzde 10'dan fazla | Yüzde 40'ın üzerinde | Sesli uyarıyı duyunca düğmeye bas |
| Floor One S5 | Yüzde 10'dan fazla | Yüzde 40'ın üzerinde | Sesli uyarıyı duyunca düğmeye bas |
| Floor One S7 FlashDry | Yüzde 30'dan fazla | Yüzde 40'ın üzerinde | Sesli uyarıyı duyunca düğmeye bas |
| iFloor 3 | "Yeterli güç" | Yüzde 40'ın üzerinde | Simge yanıp sönerken düğmeye bas |

Dört kılavuzda da döngüden önce **kirli su deposunun temizlenmesi** ve **şarj tabanının takılı olması** isteniyor.

## Adım adım: döngüyü çalıştır

**1. Kirli su deposunu boşalt.** Kılavuzların notu: kendi kendini temizleme döngüsünden önce kirli su deposunu temizle. Kapağı yukarı çekip boşalt, birikintiyi temizleme fırçasıyla al, içini durula ve yerine tak. S3 kılavuzunda döngü sırasında depo dolarsa "Kirli Su Deposu dolu, lütfen boşaltın" uyarısı çalıyor.

**2. Temiz suyu tamamla.** Temiz su deposundaki seviye **yüzde 40'ın üzerinde** olmalı. Depoyu çıkar, Max çizgisine kadar 60°C'nin altında musluk suyuyla doldur ve tık sesiyle tak. S7 FlashDry su yetersizse "Lütfen su ekleyin ve kendi kendini temizlemeyi başlatın" diyor.

**3. Tabanı ve pili kontrol et.** Şarj tabanının fişi takılı olmalı. Pil S3 ve S5'te yüzde 10'dan, S7 FlashDry'da **yüzde 30'dan** fazla olmalı. Yetersizse S5 ve S7'de "Düşük pil, şarj edin" uyarısı gelir; önce şarj et. Şarj sorunu için [Tineco şarj olmuyor](/blog/tineco-sarj-olmuyor/).

**4. Cihazı tabana koy.** Kullanımdan sonra cihazı şarj tabanına yerleştir; S3, S5 ve S7'de sensör kir seviyesini **otomatik olarak algılar**. Cihaz tabanda değilse S3 "Lütfen cihazı şarj tabanına yerleştirin", S5 "Lütfen cihazı şarj ünitesine yerleştirin", S7 "Kendi kendini temizlemeye başlamak için lütfen cihazı şarj ünitesine yerleştirin" uyarısını verir.

**5. Düğmeye bas.** S3, S5 ve S7'de "Lütfen kendi kendini temizleme döngüsünü başlatın" sesli uyarısını duyduğunda **kendi kendini temizleme düğmesine** bas. iFloor 3'te kendi kendini temizleme simgesi yanıp sönerken düğmeye bas. Döngü sırasında cihaz aşamaları sesli söyler: S3'te "Yıkama başlığı temizliği", "Gider kanalı temizliği", "Derin temizlik"; S5'te "Fırça silindiri temizleniyor", "Atık kanalı temizleniyor"; S7'de bunlara "Fırça Silindiri kurutuluyor" ekleniyor.

**6. Bitince depoyu yeniden boşalt.** Döngü tamamlanınca "kendi kendini temizleme tamamlandı, lütfen Kirli Su Deposunu temizleyin" uyarısını duyarsın ve cihaz **şarj olmaya başlar**. Kirli su deposunu boşalt ve durula; S7 kılavuzu bunu koku oluşmasını önlemek için istiyor.

## S7 FlashDry'da kurutma

S7 FlashDry döngüden sonra fırça silindirini kurutuyor. Kılavuzun notu: **kurutma sırasında kendi kendini temizleme düğmesine basarsan kurutma kesintiye uğrar**; döngüyü yeniden başlatmak için düğmeye tekrar basabilirsin. Kurutma arızasının kılavuzdaki nedenleri: fırça silindirinin temizlenmesi zor kalıntılarla kaplanması, şeffaf tepsinin hava girişini engelleyecek şekilde normal seviyenin altında su dolu bir alana konması ya da tepsinin düzgün takılmaması. Şeffaf tepsiyi kilit mandalını sağa kaydırıp kaldırarak çıkar, suyla ya da havluyla temizle ve iyice kurulayıp tak. Kurutma ve şarj ünitesini doğrudan suyla yıkama.

## Döngü yetmiyorsa

Kendi kendini temizleme saçı tam çözmeyebilir. Bakım bölümleri her kullanımdan sonra fırça silindirini çıkarıp dolanan saçı temizleme fırçasıyla almanı, suyla durulayıp tamamen kurutmanı istiyor. S5 ve S7 kılavuzları optimum performans için fırça silindirini **altı ayda bir** değiştirmeyi öneriyor; kutudan yedek bir silindir çıkıyor. Emiş de düştüyse [Tineco suyu çekmiyor](/blog/tineco-suyu-cekmiyor/), ekrandaki diğer simgeler için [Tineco hata kodları](/blog/tineco-hata-kodlari/) yazısına bak. Islak kuru süpürgelerde genel kullanım mantığı için [Kiwi ıslak kuru süpürge kullanımı](/blog/kiwi-islak-kuru-supurge-kullanimi/) yazısı da fikir verir.

## Ne zaman servis

- Koşullar tamamken döngü hiç başlamıyorsa.
- S7 FlashDry'da kurutma arızası tepsi ve silindir temizliğinden sonra sürüyorsa.
- Motor arızası göstergesi yanıp sönüyorsa.

⛔ **Kendin-çöz sınırı burada biter.** Depo, silindir ve tepsi temizliği senin; pompa, kurutma ünitesi ve elektronik Tineco yetkili servisinin.

## Servisi aramadan önce iki dakikalık özet

1. Model adı ne?
2. Döngüye basınca hangi sesli uyarı geliyor?
3. Temiz su yüzde 40'ın üzerinde, kirli su boş mu?
4. Pil seviyesi ne gösteriyor?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
