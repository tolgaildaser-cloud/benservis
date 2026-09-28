---
title: "Daikin klima F3 hatası"
description: "Daikin klimada F3, deşarj borusu sıcaklık kontrolü. Daikin'in önerdiği dış ünite hava çıkışı kontrolü, yeniden başlatma ve servis sınırı adım adım."
slug: "daikin-klima-f3-hatasi"
date: "2026-09-28"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext -layout; Sensira kod tablosu glif olduğu için pdftoppm ile görüntüden okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için. PDF'ler daikin.com.tr/daikin-kullanim-kilavuzlari sayfasının bağladığı st-daikin.mncdn.com ve daikin.eu'dan:
#  S) Sensira FTXF20~42E5V1B  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf  16 s.  md5 ab2d928437bec2a3d5f374f3aee85cb1
#  U) Ururu Sarara  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf  48 s.  md5 55395d5dca925e6c5a3e29a64e180cd5  (sayfa = PDF sayfası)
#  M) FTXM-M/CTXM-M  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1
#  F) FTXF50~71 başvuru  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
# F3 satırı: S s.13 "F3 | Deşarj borusu sıcaklık kontrolü" (Dış ünite) · M s.45 "F3 YÜKSEK SICAKLIKLIK DEŞARJ BORUSU KONTROLÜ" (belgedeki yazım aynen; gövdede S'nin ifadesi kullanıldı)
#   İlgili sensör kodu: S s.13 "J3 | Deşarj borusu termistör anormalliği" · M s.45 "J3 ARIZALI DEŞARJ BORUSU SICAKLIK SENSÖRÜ"
#   U s.41: "F3,F6,L3,L4,L5 | Dış ünitenin hava çıkışı bir araç ya da benzeri ile tıkalı durumda mı? • Devre kesiciyi kapatın ve engeli ortadan kaldırın.
#   Devre kesiciyi açın ve işlemi başlatın." · Lamba sabit → kullanmayı sürdürün; tekrar yanıp söner → model adı + yetkili servis.
#   U s.41 genel: "İŞLETİM lambası (yeşil) yanıp sönerken, devre kesiciyi kapatın. Yaklaşık 1 dakika sonra, yeniden açın ve işlemi başlatın."
# Hava yolu + filtre: M s.42 · F s.33 (bkz. F6 provenansı).
# Bilerek YAZILMAYANLAR: gaz eksikliği/kompresör/genleşme valfi gibi sebep teşhisi (belgede F3'e bağlanmıyor); dış üniteye tırmanma, kapak açma (#31).
# Alıntı denetim tablosu: daikin-klima-f3-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda"]
steps:
  - "Klimayı kumandadan durdur ve devre kesicisini kapat."
  - "Dış ünitenin hava çıkışının bir araç, eşya ya da benzeri bir şeyle tıkalı olup olmadığına bak."
  - "Engeli, dış üniteye tırmanmadan ve kapağını açmadan kaldır."
  - "İç ve dış ünitenin hava giriş ve çıkışlarının açık, iç ünite filtrelerinin temiz olduğundan emin ol."
  - "Kesiciyi aç ve klimayı kumandayla yeniden çalıştır."
  - "İşletim lambası yeniden yanıp sönerse klimayı zorlamadan model adıyla yetkili servise başvur."
faq:
  - q: "Daikin klimada F3 hatası ne demek?"
    a: "Daikin'in Sensira kılavuzundaki hata kodu tablosunda F3 dış ünite bölümündedir ve karşılığı deşarj borusu sıcaklık kontrolüdür. FTXM kılavuzu da aynı kodu yüksek sıcaklıkta deşarj borusu kontrolü olarak veriyor. Kod, dış ünitedeki deşarj borusu sıcaklığı için koruma kontrolünün devreye girdiğini bildirir."
  - q: "F3'te kendim ne yapabilirim?"
    a: "Daikin'in Ururu Sarara kılavuzu F3 için dış ünitenin hava çıkışının bir araç ya da benzeri ile tıkalı olup olmadığını soruyor. Talimat: devre kesiciyi kapat, engeli ortadan kaldır, kesiciyi aç ve işlemi başlat. Kullanıcıya düşen kontrol bundan ibaret."
  - q: "F3 ile J3 aynı şey mi?"
    a: "Hayır. Daikin'in tablosunda F3 deşarj borusu sıcaklık kontrolüdür; J3 ise deşarj borusu termistörünün, yani o sıcaklığı ölçen sensörün anormalliğidir. J3 için Daikin kılavuzlarında kullanıcıya verilen bir kontrol yok; o kod doğrudan yetkili servisin konusudur."
  - q: "Engeli kaldırdım, F3 yine geliyor. Ne yapmalıyım?"
    a: "Daikin kılavuzlarının talimatı bu noktada servis: işletim lambası tekrar yanıp sönüyorsa model adını kontrol et ve yetkili servisle temasa geç. Klimayı tekrar tekrar açıp kapatarak zorlama; servise kodu, ünitenin tam model adını ve mümkünse kurulum tarihini ilet."
images:
  coverAlt: "Balkon köşesindeki klima dış ünitesinin önü; hava çıkış ızgarasına yaslanmış katlanmış bir masa ve sandalyeler"
---

Klima çalışırken durdu, işletim lambası yanıp sönüyor ve kumandadan okuduğun kod **F3**. Daikin'in Sensira kullanım kılavuzundaki tabloda bu kodun karşılığı **"Deşarj borusu sıcaklık kontrolü"**dür; kod dış ünite bölümündedir. Daikin'in Ururu Sarara kılavuzu F3 için kullanıcıya tek bir kontrol veriyor: **"Dış ünitenin hava çıkışı bir araç ya da benzeri ile tıkalı durumda mı?"** Bu yazıda o kontrolü ve nerede durman gerektiğini adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F3 = Daikin'e göre deşarj borusu sıcaklık kontrolü (dış ünite). Sıra şu: klimayı durdur, **kesiciyi kapat** → dış ünitenin hava çıkışını kapatan engeli kaldır → iç ve dış hava yollarını, filtreyi kontrol et → kesiciyi aç, yeniden çalıştır. Lamba yine yanıp sönüyorsa klimayı zorlama → yetkili servis.

## Adım adım: evde denenecekler

**1. Klimayı durdur, kesiciyi kapat.** Önce kumandadan kapat, ardından klimanın **devre kesicisini** kapat. Daikin'in F3 talimatı engelin kesici kapalıyken kaldırılmasını istiyor.

**2. Dış ünitenin hava çıkışına bak.** Dış ünitenin önünde, hava çıkışını kapatan bir **araç, eşya ya da benzeri** bir şey var mı? Balkonda üniteye yaslanmış masa ya da sandalye, duvar dibine park edilmiş bir araç buna örnektir.

**3. Engeli kaldır.** Hava çıkışını kapatan şeyi kaldır. Bunu yerden ve balkondan ulaşabildiğin kadar yap: dış üniteye tırmanma, kapağını açma.

**4. Hava yollarını ve filtreyi kontrol et.** Daikin'in FTXF kılavuzu, sistem aniden durduğunda dış ya da iç ünitenin **hava giriş veya çıkışının bir engelle tıkalı olmadığının** kontrol edilmesini ve havanın serbestçe akabilmesini istiyor. FTXM kılavuzu aynı durumda **hava filtrelerinin temiz olup olmadığını** da soruyor. İç ünitenin önünü aç, filtre kirliyse temizle.

**5. Yeniden çalıştır.** Kesiciyi aç ve klimayı kumandayla yeniden çalıştır. Ururu Sarara kılavuzuna göre işletim lambası bir süre sonra **sabit yanıyorsa** klimayı kullanmayı sürdürebilirsin.

**6. Geri geliyorsa zorlama, servise.** İşletim lambası **tekrar yanıp sönüyorsa** klimayı açıp kapatarak denemeye devam etme. Daikin'in talimatı açık: model adını kontrol et ve **yetkili servisle** temasa geç.

## F3 neyi söylüyor?

Daikin'in kod tablosu kodları sistem, iç ünite ve dış ünite diye üçe ayırıyor. F3 dış ünite grubundadır ve adı bir **kontrol** kodudur: dış ünitedeki deşarj borusunun sıcaklığı için koruma devreye girmiştir. Aynı tabloda F3'e benzeyen ama farklı olan bir kod daha vardır: **J3**, yani deşarj borusu **termistörünün** (sıcaklığı ölçen sensörün) anormalliği. J3 için kılavuzlarda kullanıcıya verilen bir kontrol yoktur.

Daikin'in Ururu Sarara kılavuzu F3'ü F6, L3, L4 ve L5 ile aynı kontrol satırında topluyor. Bu grubun tablosu ve L5 için Daikin Türkiye'nin ayrı talimatı [Daikin klima F6 hatası](/blog/daikin-klima-f6-hatasi/) yazısında. Tüm Daikin kodları için [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) yazısına, dış ünitenin çevresini düzenli tutmak için [klima dış ünite temizliği](/blog/klima-dis-unite-temizligi/) yazısına bakabilirsin.

## Nerede durmalısın

Daikin'in kılavuzu, hata kodunu sıfırlamadan önce sorunun anlaşılması ve önlem alınmasının **yetkili bir montör ya da satıcı** tarafından yapılması gerektiğini yazıyor. F3'te kullanıcıya düşen kısım, dış ünitenin hava çıkışını açmak ve bir kez yeniden denemektir.

⛔ **Kendin-çöz sınırı burada biter.** Dış ünitenin çevresi ve iç ünitenin filtresi kullanıcıya aittir; dış ünitenin içi, borular ve soğutucu devresi servise aittir. Daikin, sistemin kullanıcı tarafından demonte edilmemesini istiyor.

## Servisi aramadan önce iki dakikalık özet

1. Kumandadan okunan kod gerçekten F3 mü, yoksa J3 mü?
2. Dış ünitenin hava çıkışının önünde bir engel var mıydı, kaldırıldı mı?
3. İç ünitenin filtreleri temiz, hava yolları açık mı?
4. Kesici kapatılıp açıldıktan sonra lamba sabit mi yanıyor, yine mi yanıp sönüyor?
5. Ünitenin tam model adı ve kurulum tarihi elinde mi?

Ekrandaki kodu ve klimanın modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
