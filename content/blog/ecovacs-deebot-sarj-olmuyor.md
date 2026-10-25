---
title: "Ecovacs Deebot şarj olmuyor: ne yapmalı?"
description: "Ecovacs Deebot şarj olmuyorsa Ecovacs'ın Türkçe kılavuzundaki sırayla bak: güç anahtarı, temas noktaları, istasyonun kablosu ve prizi, istasyonun yeri."
slug: "ecovacs-deebot-sarj-olmuyor"
date: "2026-10-23"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M4 Ecovacs/Tineco, YK #185). origin/main 75980e0'da "ecovacs/deebot" geçen yazı, slug ya da başlık yok
#   (yalnız src/constants.js marka listesi ve src/kullanim-kilavuzlari.js bağlantısı). Genel robot-supurge-sarj-olmuyor ve Samsung/Vestel marka yazıları var; Ecovacs sorgusunu karşılamıyorlar.
# OT (#164, bu koşu, _kaynak/ot-ecovacs.log): "deebot şarj olmuyor" 1. **deebot şarj olmuyor** · "ecovacs şarj olmuyor" 1. **ecovacs şarj olmuyor** · "deebot şarj" 2. deebot şarj olmuyor.
# GSC: Ecovacs/Deebot satırı yok; genel www-5 "robot süpürge şarj olmuyor" 14 gösterim.
# Belgeler (#88) bu koşuda indirildi. Zincir: https://help.ecovacs.com/tr/support/owners-manuals (200) → site-static.ecovacs.com PDF (200, application/pdf):
#  (E1) DEEBOT N8 Kullanım Kılavuzu TR, 24 s.  md5 c7d95850a37a2c9459336a4323994919
#  (E2) DEEBOT N8 PRO Kullanım Kılavuzu TR, 24 s.  md5 deda1926243d2f3b723e81d16a57174e
#  (E3) DEEBOT N10 Kullanım Kılavuzu TR, 22 s.  md5 4d3038e4aa426f4b80cfbad1ee4769fe
#  (E4) DEEBOT T9 Kullanım Kılavuzu TR, 24 s.  md5 eac99b51616a1bf7a7719154bc191d92
#  (F) help.ecovacs.com/tr/support/deebot-n8 SSS: faq-detail id=276, 274 (200)
# Ana satır: E1 s.17 · E2 s.17 · E3 s.16 · E4 s.18 Sorun Giderme 1 "DEEBOT şarj olmuyor."
# BİLEREK YAZILMAYANLAR: pil sökümü/değişimi (kılavuz: yetkili kişiler) · voltaj ölçümü · istasyon içi onarım · pil ömrü rakamı · fiyat (#46) · pazar.
# Alıntı denetim tablosu: ecovacs-deebot-sarj-olmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika (sonrasında şarj süresi)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru, yumuşak bez", "Robotun kullanım kılavuzu"]
steps:
  - "Üst kapağı aç, güç anahtarını AÇIK konuma getir."
  - "Robotu istasyona, şarj bağlantıları istasyon bağlantılarına değecek şekilde yerleştir."
  - "Güç kablosunun istasyona, fişin prize sıkıca bağlı olduğunu kontrol et."
  - "Robotun ve istasyonun şarj bağlantılarını, robotu kapatıp fişi çektikten sonra kuru bezle sil."
  - "İstasyonu duvara daya, yanlarını ve önünü boş bırak; temizlik sırasında yerinden oynatma."
  - "Şarjdan önce su deposunu boşaltıp depoyla paspas levhasını çıkar."
  - "Gösterge ışığını izle; şarj olmuyorsa Ecovacs müşteri hizmetlerine başvur."
faq:
  - q: "Deebot istasyonda duruyor ama şarj olmuyor, neden?"
    a: "Ecovacs'ın N8, N8 PRO, N10 ve T9 Türkçe kılavuzlarındaki sorun giderme tablosu bu belirti için beş neden sayıyor: robot açık değil, robot istasyona bağlı değil, güç kablosu istasyona bağlı değil, istasyon güç kaynağına bağlı değil ya da pil tamamen boşalmış. İlk dördü senin elinde; tamamen boşalmış pil için kılavuz müşteri hizmetlerini gösteriyor."
  - q: "Deebot kapalıyken şarj olur mu?"
    a: "Olmaz. N8 kılavuzunun hızlı başlangıç sayfası açıkça DEEBOT KAPALI durumdayken şarj edilemez diyor. Anahtarda I açık, O kapalı demek."
  - q: "Robot şarj olurken istasyondan çıkıp odada dolaşıyor. Bu normal mi?"
    a: "Ecovacs'ın N8 destek sayfası bunun iki nedenini yazıyor: voltaj dengesizliği ve sinyal paraziti. Sorun sürerse Ecovacs müşteri hizmetleriyle iletişime geçmeni istiyor."
  - q: "Robotu uzun süre kullanmayacağım, pili nasıl korurum?"
    a: "N8 ve N10 kılavuzlarına göre robotu tamamen şarj et, kaldırmadan önce kapat ve pilin bitmesini önlemek için her 1,5 ayda bir şarj et. Temizlik yapmadığı zamanlarda robotun açık ve şarjda tutulması öneriliyor."
images:
  coverAlt: "Duvar dibindeki şarj istasyonuna yanaşmış yuvarlak bir robot süpürge"
  steps:
    - "Çizim: solda robot süpürge, sağda kapak"
    - "Çizim: solda robot süpürge, sağda şarj edilen batarya"
    - "Çizim: solda robot süpürge, sağda prizden çekilen fiş"
    - "Çizim: solda robot süpürge, sağda prizden çekilen fiş"
    - "Çizim: solda robot süpürge, sağda duvarla arasındaki boşluk"
    - "Çizim: solda robot süpürge, sağda şarj edilen batarya"
    - "Çizim: solda robot süpürge, sağda şarj edilen batarya"
---

Robot temizliği bitirdi, istasyona döndü ama sabah yerinden kalkmıyor; uygulamada pil boş görünüyor. Ecovacs'ın Türkçe kullanım kılavuzlarında bu belirtinin karşılığı sorun giderme tablosunun ilk satırı: **"DEEBOT şarj olmuyor."** Tablo beş neden sayıyor ve dördü kullanıcının elinde. Bu yazı Ecovacs'ın **DEEBOT N8**, **N8 PRO**, **N10** ve **T9** Türkçe kılavuzlarına ve Ecovacs Türkiye destek sayfasındaki N8 sorularına dayanıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Güç anahtarını aç → robotu istasyona tam oturt → istasyonun kablosunu ve prizini kontrol et → temas noktalarını kuru bezle sil → istasyonu duvara daya ve yerinden oynatma → su deposunu boşaltıp çıkar → hâlâ şarj olmuyorsa pil için müşteri hizmetleri.

## Kılavuzun tablosu: beş neden

| Olası neden | Ecovacs'ın çözümü |
|---|---|
| DEEBOT açık değil | DEEBOT'u aç |
| DEEBOT istasyona bağlı değil | Robotun şarj bağlantıları istasyon bağlantılarına değsin |
| Güç kablosu istasyona bağlı değil | Kablonun istasyona bağlı olduğundan emin ol |
| İstasyon güç kaynağına bağlı değil | İstasyonun prize bağlı olduğundan emin ol |
| Pil tamamen boşalmış | Yardım için müşteri hizmetleri |

Satırlar N8, N8 PRO, N10 ve T9 kılavuzlarında aynı.

## Adım adım: şarj geri gelsin

**1. Güç anahtarını aç.** Ecovacs'ın N8 destek sayfasındaki ilk adım: **üst kapağı aç ve robotun açık olduğundan emin ol.** Kılavuzun hızlı başlangıç sayfası nedenini söylüyor: **DEEBOT KAPALI durumdayken şarj edilemez.** Anahtarda I açık, O kapalı demek.

**2. Robotu istasyona tam oturt.** Tablonun ikinci satırına göre robotun **şarj bağlantıları istasyon bağlantılarına temas etmeli**. Robotu elle koyuyorsan bağlantıların karşı karşıya geldiğinden emin ol. Destek sayfası da **elektrotların istasyon bağlantılarıyla tamamen temas halinde** olmasını istiyor.

**3. Kabloyu ve prizi kontrol et.** Tablonun iki satırı buraya çıkıyor: güç kablosu istasyona, istasyon da güç kaynağına bağlı olmalı. Destek sayfası ayrıca **çıkışta elektrik olduğundan** emin olmanı istiyor; aynı prize başka bir cihaz takıp deneyebilirsin (çıkarım). Kılavuz, istasyon hasarlıysa kullanmamanı ve hasarlı güç kaynağının onarılmamasını yazıyor.

**4. Temas noktalarını sil.** N8 kılavuzunun bakım tablosunda **şarj bağlantıları** ve **şarj istasyonu bağlantıları** haftada bir bakım yapılacak parçalar arasında. Kılavuzun kuralı: temizlemeden önce **robotu KAPAT ve istasyonun fişini çek.** Kuru, yumuşak bir bezle sil (çıkarım: bez türünü kılavuz bu sayfada yazmıyor). İşin bitince robotu tekrar aç.

**5. İstasyonun yerini düzelt.** N8 kılavuzundaki yerleştirme şekli istasyonun yanlarında yarım metreden, önünde bir buçuk metreden fazla boşluk gösteriyor ve istasyon duvara dayalı. Tablonun ikinci satırı da uyarıyor: istasyon temizlik sırasında elle **hareket ettirilmemeli**. Yer değiştirdiysen robot istasyonu bulamayabilir; bunun için [Ecovacs Deebot istasyonu bulamıyor](/blog/ecovacs-deebot-istasyonu-bulamiyor/) yazısına bak.

**6. Şarjdan önce depoyu çıkar.** N8 kılavuzu şarj adımında açık: **şarj etmeden önce su deposunda kalan suyu boşalt, su deposunu ve paspas levhasını çıkar.**

**7. Işığı izle, sonra servis.** N8 kılavuzuna göre şarj göstergesi şarj sırasında yanıp söner, robot tamamen şarj olunca söner. İlk şarj için hızlı başlangıç sayfasında dört saat gösteriliyor. Bu adımlardan sonra da şarj başlamıyorsa tablonun son satırı geçerli olabilir: **pil tamamen boşalmıştır**, çözüm **müşteri hizmetleri**.

## Şarj oluyor ama çabuk bitiyor

Bu ayrı bir belirti. Ecovacs'ın destek sayfası iki neden yazıyor: robot uzun süre kullanılmadıysa istasyonda **tam şarj et**; pil hizmet ömrünün sonuna yaklaştığında temizlik süresi kısalır ve pil değişir. Kılavuzun tablosunda temizliği bitirmeden istasyona dönmek için de satır var: pil azalınca robot kendiliğinden şarja döner; uygulamada **Sürekli Temizleme** açıksa şarjdan sonra kaldığı yerden devam eder.

## Uzun süre kullanmayacaksan

Pilin kendiliğinden boşalması da şarjı başlatmayan nedenlerden biri olabilir (çıkarım). N8 ve N10 kılavuzlarının saklama notu: robot bir süre kullanılmayacaksa onu **tamamen şarj et** ve kaldırmadan önce **kapat**; pilin bitmesini önlemek için **her 1,5 ayda bir şarj et**. Kılavuz robot temizlik yapmıyorken **açık ve şarjda** tutulmasını öneriyor. Robot şarj olurken istasyondan çıkıp odada döngü hâlinde dolaşıyorsa destek sayfası iki neden yazıyor: **voltaj dengesizliği** ve **sinyal paraziti**; sorun sürerse müşteri hizmetleri.

Markadan bağımsız kontrol listesi için [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/) yazısına bakabilirsin. Kırmızı ışık yanıyorsa: [Ecovacs kırmızı ışık yanıp sönüyor](/blog/ecovacs-kirmizi-isik-yanip-sonuyor/).

## Ne zaman servis

- Anahtar açık, kablo ve priz sağlam, temas noktaları temizken şarj hiç başlamıyorsa.
- **Pil değişimi gerekiyorsa:** kılavuza göre robotta yalnız yetkili kişilerin değiştirebileceği piller var; değişim için Ecovacs müşteri hizmetleri.
- İstasyonun ya da güç kablosunun hasarlıysa; kılavuz hasarlı kablonun üretici ya da yetkili teknik servisçe değiştirilmesini istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Anahtar, temas temizliği, kablo ve istasyonun yeri senin; pil, istasyonun içi ve robotun elektroniği yetkili servisin.

## Servisi aramadan önce iki dakikalık özet

1. Model ne (N8, N10, T9 gibi; robotun altındaki etikette)?
2. Güç anahtarı açık mı?
3. İstasyonun fişi takılı, priz çalışıyor mu?
4. Temas noktalarını en son ne zaman sildin?
5. Robot uzun süre kullanılmadan mı bekledi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
