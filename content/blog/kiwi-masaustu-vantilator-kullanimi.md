---
title: "Kiwi masaüstü vantilatör kullanımı: kurulum, hız ve salınım"
description: "Kiwi masaüstü vantilatör kılavuza göre: arka ızgara, pervane ve ön ızgara nasıl takılır, başlık nasıl eğilir, hız ve salınım nasıl açılır, temizlik."
slug: "kiwi-masaustu-vantilator-kullanimi"
date: "2026-10-24"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 7, küme Y1, çatal C). origin/main'de "masaüstü vantilatör" geçen slug ya da başlık yok; kiwi-vantilator-kurulumu ayaklı (standlı) ve soğuk buharlı modelleri anlatıyor, masaüstü modelleri kapsamıyor. Dalga 6/7 klasörlerinde aynı slug yok.
# OT (#164, bu koşu, suggestqueries hl=tr gl=tr): "kiwi masa vantilatörü" → 1. kendisi · 2. a101 · 3. şarjlı masa vantilatörü; "kiwi vantilatör" → 8. "…masaüstü". Kiwi ürün kapsamı Tolga talimatıyla yeterli. GSC: Sorgular.csv'de "kiwi" satırı yok.
# Belge zinciri (#88): kiwi.com.tr ürün sayfası (HTTP 200, PDF dosya adı sayfa HTML'inde) → static.kiwi.com.tr PDF (HTTP 200 application/pdf), bu koşuda curl ile indirildi.
#  (A) KFAN-7621 masaüstü vantilatör kılavuzu, 14 s. md5 75f14700d2e3762919f2bf601b94e111 (TR s.6-7, güvenlik s.9)
#  (B) KFAN-7625 masaüstü vantilatör kılavuzu, 14 s. md5 c3b236b673042d887cdcfae594ca2473 (TR s.6-7, güvenlik s.9)
#  (C) KFAN-7626 masaüstü vantilatör kılavuzu, 14 s. md5 c57aff0624bb8a7bff9c85b31489a22c (TR s.6-7, güvenlik s.9)
# BİLEREK YAZILMAYANLAR: şarjlı modeller (çatal B'nin yazısı) · KFAN-7627 (ürün sayfasında 124-125 cm boy, ayaklı; masaüstü değil) · motor, kondansatör, kablo teşhisi · tork/alet ölçüsü · fiyat (#46).
# Alıntı denetim tablosu: kiwi-masaustu-vantilator-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yıldız tornavida", "Sıvı sabunlu suyla nemlendirilmiş yumuşak bez"]
steps:
  - "Vantilatörü kutudan çıkar, koruyucu plastikleri sök ve etiketteki voltajın şebekeyle aynı olduğunu kontrol et."
  - "Pervane çeviricisini ve ızgara bağlama somununu motor gövdesinden ayır."
  - "Arka ızgarayı tutma yeri yukarıda olacak biçimde motorun önüne oturt ve bağlama somununu sıkıca vidala."
  - "Motor milindeki plastik kılıfı çıkar, pervaneyi tahrik pimine oturt ve çeviriciyi sıkıca vidala."
  - "Ön ızgarayı arka ızgaraya getir, klipsleri kapat ve ızgaranın ortasındaki küçük somunu sık."
  - "Vantilatörü düz bir yüzeye koy, fişi tak, başlığı istediğin açıya eğ ve hız düğmesiyle çalıştır."
  - "Salınım için salınım düğmesine bas, durdurmak için düğmeyi yukarı çek."
faq:
  - q: "Kiwi masaüstü vantilatörde hız kademeleri ne anlama geliyor?"
    a: "KFAN-7621, KFAN-7625 ve KFAN-7626 kılavuzlarında kademeler aynı: 0 kapalı, 1 düşük hız, 2 orta hız, 3 yüksek hız. KFAN-7621 ve 7625'te basmalı düğmeler, KFAN-7626'da çevrilen bir hız anahtarı var."
  - q: "Salınım nasıl kapatılır?"
    a: "Üç kılavuzda da salınım, motor gövdesinin üstündeki salınım düğmesine basınca başlar. Durdurmak için vantilatör sallanırken düğmeyi yukarı çek."
  - q: "Uzatma kablosuyla kullanabilir miyim?"
    a: "Kiwi'nin güvenlik bilgilerinde uzatma kablosu kullanılması önerilmiyor. Fişi doğrudan prize tak; fişi çekmeden önce cihazı gövdesindeki anahtardan kapat ve fişi kablodan değil, fişin kendisinden tutarak çıkar."
  - q: "Masaüstü vantilatör periyodik bakım ister mi?"
    a: "Kılavuza göre cihaz periyodik bakım gerektirmez. Her kullanımdan sonra temizlemekte fayda olduğunu yazıyor: fişi çek, yüzeyi sıvı sabun ve suyla nemlendirilmiş bir sünger ya da yumuşak bezle sil, kullanmadan önce kurula."
images:
  coverAlt: "Çalışma masasının köşesinde duran beyaz bir masaüstü vantilatör"
  steps:
    - "Çizim: solda vantilatör, sağda ambalaj kutusu"
    - "Çizim: solda vantilatör, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda vantilatör, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda vantilatör, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda vantilatör, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda vantilatör, sağda prizden çekilen fiş"
    - "Çizim: solda vantilatör, sağda kontrol panelindeki tuş ya da düğme"
---

Kiwi'nin fişli masaüstü vantilatörleri kutudan başlık, ızgaralar ve pervane ayrı çıkıyor. Kurulum kısa, ama pervane çeviricisinin ve ızgara klipslerinin sırası karışabiliyor. Bu yazı Kiwi'nin **KFAN-7621**, **KFAN-7625** ve **KFAN-7626** masaüstü vantilatör kılavuzlarına dayanıyor. KFAN-7621 ile KFAN-7625 aynı montaj sırasını kullanıyor; KFAN-7626'nın sırası biraz farklı, onu ayrıca yazdık. Şarjlı masa vantilatörleri bu yazının kapsamında değil.

> ⚡ **Kısa özet:** Arka ızgarayı motorun önüne vidala, pervaneyi mile oturtup çeviriciyi sık, ön ızgarayı klipsleyip ortadaki somunu sık. Vantilatörü düz yüzeye koy, fişi doğrudan prize tak, başlığı eğ, hız düğmesiyle çalıştır. Salınım için düğmeye bas, durdurmak için yukarı çek.

## Senin modelin hangisi?

| Model | Kılavuzdaki güç | Hız kontrolü | Başlık açısı |
|---|---|---|---|
| KFAN-7621 | 22 W, 220-240 V, 50-60 Hz | Basmalı düğmeler | Kilitleme mekanizmasıyla yukarı-aşağı |
| KFAN-7625 | 35 W, 220-240 V, 50 Hz | Basmalı düğmeler | Kilitleme mekanizmasıyla yukarı-aşağı |
| KFAN-7626 | 35 W, 220-240 V, 50/60 Hz | Çevrilen hız anahtarı | Ayar açısı düğmesi gevşetilip sıkılır |

Üç modelde de hız kademeleri aynı: 0 kapalı, 1 düşük, 2 orta, 3 yüksek. Parça listelerinde ön ızgara, pervane (kanat), arka ızgara, motor şaftı, salınım kontrolü ve hız kontrolü var; KFAN-7626'da bunlara taban ve taban kilitleme vidası ekleniyor.

## Adım adım: kurulum ve ilk çalıştırma

**1. Kutudan çıkar, voltajı kontrol et.** Parçaları kutudan çıkar, koruyucu plastikleri sök. Kiwi'nin güvenlik bilgileri, cihazı açmadan önce şebeke voltajının ürün etiketindeki değerle aynı olduğundan emin olmanı istiyor. KFAN-7626 kılavuzu kuruluma başlamadan önce ana güç kaynağının kapalı olmasını da yazıyor; pratikte bu, kurulum bitene kadar fişin prizde olmaması demek (çıkarım).

**2. Çeviriciyi ve somunu ayır.** KFAN-7621 ve 7625'te önce pervane çeviricisini motor milinden ayırmak için vidaları sök, sonra ızgara bağlama somununu motor yuvasının önünden ayır. Bu iki parça birazdan aynı yere geri takılacak, kaybetme.

**3. Arka ızgarayı tak.** Arka ızgarayı tutma yeri en üstte kalacak biçimde motor yuvasının önüne yasla. Kılavuz, motor yuvasındaki yerleştirme milinin ızgaradaki deliklere doğru oturduğundan emin olmanı istiyor. Ardından bağlama somununu motor yuvasındaki çıkıntılı vida yivine sıkıca vidala.

**4. Pervaneyi yerleştir.** Motor milindeki plastik kılıfı çıkar. Pervaneyi, arkasındaki boşluktan tahrik pimi geçecek şekilde milin üstüne koy. Çeviriciyi mile vidala ve pervanenin önüne karşı sıkıca sık.

**5. Ön ızgarayı kapat.** Ön ızgarayı, çıkıntılardaki delikler vida somunu ve cıvatayla aynı hizaya gelecek biçimde arka ızgaranın üstüne getir. Cıvatayı deliğe tak ve somuna vidala, ama kılavuzun uyarısıyla bu aşamada tam sıkma. Izgarayı hareket ettirip tutma klipslerinin çıkıntılara doğru oturduğundan emin ol, sonra ızgaranın göbeğinden geçen küçük somunu ve cıvatayı tamamen sık.

**6. Yerleştir, eğ, çalıştır.** Vantilatörü düz ve sabit bir yüzeye koy, fişi uygun bir prize tak. KFAN-7621 ve 7625'te başlığı tutan kilitleme mekanizmasını kullanarak başlığı yukarı ya da aşağı eğ, sonra basmalı düğmelerle hızı seç.

**7. Salınımı aç ya da kapat.** Salınım için salınım düğmesine bas; durdurmak için düğmeyi çek. KFAN-7626 kılavuzu düğmenin motor gövdesinin üstünde olduğunu ve vantilatör sallanırken yukarı çekilmesi gerektiğini yazıyor.

## KFAN-7626'nın farklı sırası

KFAN-7626 kılavuzu montajı altı adımda veriyor. Önce gövdedeki dört ızgara kilitleme vidasını çıkar. Arka ızgarayı sapı yukarı gelecek şekilde yerleştir, vidaları deliklerden geçirip sık; kılavuz burada aşırı sıkmamanı istiyor. Plastik kılıfı çıkar, pervaneyi şafta oturt, pim yuvaya oturunca vidayı takıp yine aşırı zorlamadan sık. Ön ızgarayı üst kancasından arka ızgaraya geçir ve bütün klipsleri kapat. Alttaki kilit vidasını tak, cıvatayı yerleştir, kilit vidasını ve somunu sık. Son olarak tabanla fan başlığını birleştiren kilit vidasını çevirerek tamamen kilitle. Kullanımda açıyı değiştirmek için ayar açısı düğmesini gevşet, vantilatörü istediğin açıya getir ve düğmeyi sıkıca sık; çalıştırmak için hız anahtarını çevir.

## Güvenli kullanım ve temizlik

Kiwi'nin güvenlik bilgilerinden öne çıkanlar şunlar. Uzatma kablosu kullanılması önerilmiyor. Islak zeminde kablonun suyla temasını engelle, vantilatörü sobalardan ve diğer ısı kaynaklarından uzak tut; kılavuz ısının plastik parçaları deforme edebileceğini yazıyor. Cihazı nemli ortamda bulundurma, darbeden ve düşürmekten koru, kablosundan tutarak taşıma. Fişi çekmeden önce cihazı gövdesindeki anahtardan kapat, fişi kabloyu çekerek değil fişi tutarak çıkar. Kullanmadığın zamanlarda fişi prizden çek.

Temizlikten önce fişi daima çek. Yüzeyi sıvı sabun ve suyla nemlendirilmiş bir sünger ya da yumuşak bezle sil; sert temizleyici, aşındırıcı deterjan ya da solvent kullanma. Kullanmadan önce cihazı kurula. Kılavuza göre cihaz periyodik bakım gerektirmiyor, ama her kullanımdan sonra temizlemekte fayda var.

| Durum | Kimin işi |
|---|---|
| Pervane ızgaraya sürtüyor | Senin; çeviriciyi ve ızgara klipslerini yeniden oturt |
| Başlık eğik durmuyor | Senin; kilitleme mekanizmasını ya da ayar açısı düğmesini sık |
| Güç kablosu hasarlı | Kullanma; üretici, servis merkezi ya da ehliyetli kişi değiştirsin |
| Cihaz düzgün çalışmıyor | Güç kaynağını kapat; yetkili servis |

⛔ Kiwi kılavuzları arıza durumunda cihazı kendin onarmaya kalkışmamanı istiyor. Ayaklı modeller için [Kiwi vantilatör kurulumu](/blog/kiwi-vantilator-kurulumu/), büyük gövdeli model için [Kiwi endüstriyel fan kurulumu](/blog/kiwi-endustriyel-fan-kurulumu/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Montaj, kullanım, temizlik ve güvenlik bilgileri Kiwi'nin KFAN-7621, KFAN-7625 ve KFAN-7626 masaüstü vantilatör kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir sıra veriyorsa **kendi kılavuzun esastır.**
