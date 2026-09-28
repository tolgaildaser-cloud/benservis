---
title: "Daikin klima F6 hatası"
description: "Daikin klimada F6, soğutma modunda yüksek basınç kontrolü. Daikin'in önerdiği dış ünite hava çıkışı kontrolü, filtre ve servis sınırı adım adım."
slug: "daikin-klima-f6-hatasi"
date: "2026-09-28"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext -layout; Sensira kod tablosu glif olduğu için pdftoppm ile görüntüden okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için. PDF'ler daikin.com.tr/daikin-kullanim-kilavuzlari sayfasının bağladığı st-daikin.mncdn.com ve daikin.eu'dan:
#  S) Sensira FTXF20~42E5V1B  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf  16 s.  md5 ab2d928437bec2a3d5f374f3aee85cb1
#  U) Ururu Sarara  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf  48 s.  md5 55395d5dca925e6c5a3e29a64e180cd5  (sayfa = PDF sayfası)
#  M) FTXM-M/CTXM-M  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1
#  F) FTXF50~71 başvuru  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
#  W) daikin.com.tr hata kodları sayfası  https://www.daikin.com.tr/bilgi-ve-ipuclari/daikin-klima-hata-kodlari-nelerdir-nasil-cozulur  md5 c2a49add61690e63ffe56243ecaf46ba
# F6 satırı: S s.13 "F6 | Yüksek basınç kontrolü (soğutma modunda)" · M s.45 "F6 YÜKSEK BASINÇ KONTROLÜ (SOĞUTMA MODUNDA)" — iki tablo birebir aynı.
#   U s.41: "F3,F6,L3,L4,L5 | Dış ünitenin hava çıkışı bir araç ya da benzeri ile tıkalı durumda mı? • Devre kesiciyi kapatın ve engeli ortadan kaldırın.
#   Devre kesiciyi açın ve işlemi başlatın." · Lamba sabit → kullanmayı sürdürün; tekrar yanıp söner → model adı (veya kontrol kodu) + yetkili servis.
#   U s.41 genel: "İŞLETİM lambası (yeşil) yanıp sönerken, devre kesiciyi kapatın. Yaklaşık 1 dakika sonra, yeniden açın ve işlemi başlatın."
# Grup kodları: S s.13 F3 "Deşarj borusu sıcaklık kontrolü", L3 "Elektrikli parçalar ısı hatası", L4 "Radyasyon kanadı sıcaklık yükselmesi", L5 "İnverter anlık aşırı akımı (DC)"
#   M s.45 L3 "ELEKTRİK PARÇALARI ISI ARIZASI", L4 "INVERTER DEVRESİ SOĞUTMA BLOĞUNDA YÜKSEK SICAKLIK", L5 "ÇIKIŞ AŞIRI AKIM".
#   ⚠️ W, L5'i "Kompresör Kilitlenmesi ... Hemen cihazı kapatıp servise başvurun" diye veriyor → L5 için gövdede W'nin talimatı esas alındı, U'nun kontrolü L5'e önerilmedi.
# Hava yolu + filtre: M s.42 "Hava filtreleri temiz mi? ... İç ve dış ünitelerin hava giriş veya çıkışını engelleyen bir şey var mı? Kesiciyi kapalı konuma getirin ve tüm engelleri kaldırın..."
#   F s.33 "Dış veya iç ünitenin hava giriş ya da çıkışının bir engelle tıkalı OLMADIĞINI kontrol edin. Engelleri kaldırın ve havanın serbestçe akabileceğinden emin olun."
# Bilerek YAZILMAYANLAR: "fazla gaz", basınç anahtarı, kondenser yıkama, "yazın/sıcak günde olur" gibi belgede olmayan sebep/koşul; dış üniteye tırmanma/kapak açma (#31).
# Alıntı denetim tablosu: daikin-klima-f6-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda"]
steps:
  - "Klimayı kumandadan durdur ve devre kesicisini kapat."
  - "Dış ünitenin hava çıkışının bir araç, eşya ya da benzeri bir şeyle kapanıp kapanmadığına bak."
  - "Hava çıkışını ve girişini kapatan engeli, dış üniteye tırmanmadan ve kapağını açmadan kaldır."
  - "İç ünitenin filtrelerini kontrol et; kirliyse temizleyip yerine tak."
  - "Kesiciyi aç ve klimayı kumandayla yeniden çalıştır."
  - "İşletim lambası sabit yanıyorsa kullanmaya devam et; yeniden yanıp sönerse model adıyla yetkili servise başvur."
faq:
  - q: "Daikin klimada F6 hatası ne demek?"
    a: "Daikin'in Sensira ve FTXM kullanım kılavuzlarındaki hata kodu tablosunda F6 dış ünite bölümündedir ve iki tabloda da karşılığı aynıdır: yüksek basınç kontrolü (soğutma modunda). Kod, soğutma sırasında koruma kontrolünün devreye girdiğini bildirir."
  - q: "F6'da servis çağırmadan önce ne yapabilirim?"
    a: "Daikin'in Ururu Sarara kılavuzu F6 için dış ünitenin hava çıkışının bir araç ya da benzeri bir şeyle tıkalı olup olmadığını soruyor. Talimat şu: devre kesiciyi kapat, engeli ortadan kaldır, kesiciyi aç ve işlemi başlat. Lamba sabit kalırsa kullanmayı sürdürebilirsin; yeniden yanıp sönerse yetkili servise başvurulur."
  - q: "F3, L3, L4 ve L5 de aynı şey mi?"
    a: "Anlamları farklı ama Daikin'in Ururu Sarara kılavuzu F3, F6, L3, L4 ve L5'i aynı kontrol satırında topluyor: dış ünitenin hava çıkışı tıkalı mı? L5 için Daikin Türkiye'nin hata kodları sayfası ayrıca cihazın hemen kapatılıp servise başvurulmasını istiyor; L5 görüyorsan bu talimatı esas al."
  - q: "Engel yok, filtre temiz, F6 yine geliyor. Ne yapmalıyım?"
    a: "Daikin kılavuzlarının talimatı bu noktada servis: işletim lambası tekrar yanıp sönüyorsa model adını kontrol et ve yetkili servisle temasa geç. Klimayı tekrar tekrar zorlama; servise kodu, ünitenin tam model adını ve mümkünse kurulum tarihini ilet."
images:
  coverAlt: "Bina avlusunda duvar dibindeki klima dış ünitesi; hava çıkış ızgarasının hemen önüne üst üste konmuş karton kutular"
---

Klima soğuturken durdu, işletim lambası yanıp sönüyor ve kumandadan okuduğun kod **F6**. Daikin'in Sensira ve FTXM kullanım kılavuzlarındaki tabloda bu kodun karşılığı birebir aynıdır: **"Yüksek basınç kontrolü (soğutma modunda)."** Kod dış ünite bölümündedir. Daikin'in Ururu Sarara kılavuzu F6 için kullanıcıya bir kontrol veriyor: **"Dış ünitenin hava çıkışı bir araç ya da benzeri ile tıkalı durumda mı?"** Bu yazıda o kontrolü adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F6 = Daikin'e göre soğutma modunda yüksek basınç kontrolü (dış ünite). Sıra şu: klimayı durdur, **kesiciyi kapat** → dış ünitenin hava çıkışını kapatan engeli kaldır → iç ünite filtresine bak → kesiciyi aç, yeniden çalıştır. Lamba yine yanıp sönüyorsa → yetkili servis.

## Adım adım: evde denenecekler

**1. Klimayı durdur, kesiciyi kapat.** Önce kumandadan kapat, ardından klimanın **devre kesicisini** kapat. Daikin'in talimatı engel kaldırma işini kesici kapalıyken istiyor.

**2. Dış ünitenin hava çıkışına bak.** Dış ünitenin önünde, hava çıkışını kapatan bir **araç, eşya ya da benzeri** bir şey var mı? Duvar dibine park edilmiş bir araç, üniteye dayanmış kutular ya da üzerine örtülmüş bir branda buna örnektir.

**3. Engeli kaldır.** Hava çıkışını ve girişini kapatan şeyi kaldır; Daikin'in FTXF kılavuzundaki ifadeyle **havanın serbestçe akabileceğinden** emin ol. Bunu yerden ve balkondan ulaşabildiğin kadar yap: dış üniteye tırmanma, kapağını açma.

**4. Filtreye bak.** Daikin'in FTXM kılavuzu, çalışma aniden durup lamba yanıp söndüğünde ilk olarak **"Hava filtreleri temiz mi?"** diye soruyor. İç ünitenin filtreleri kirliyse temizle, kurut ve yerine tak.

**5. Yeniden çalıştır.** Kesiciyi aç ve klimayı kumandayla yeniden çalıştır.

**6. Lambayı izle.** Ururu Sarara kılavuzuna göre işletim lambası bir süre sonra **sabit yanıyorsa** klimayı kullanmayı sürdürebilirsin. **Tekrar yanıp sönüyorsa** model adını kontrol et ve **yetkili servisle** temasa geç.

## Aynı kontrolü isteyen diğer kodlar

Daikin'in Ururu Sarara kılavuzu F6'yı tek başına değil, beş kodluk bir grup içinde veriyor: **F3, F6, L3, L4, L5**. Beşi için de kullanıcıya sorulan soru aynıdır: dış ünitenin hava çıkışı tıkalı mı? Kodların anlamları ise farklıdır:

| Kod | Daikin kılavuzundaki karşılığı |
|---|---|
| F3 | Deşarj borusu sıcaklık kontrolü |
| F6 | Yüksek basınç kontrolü (soğutma modunda) |
| L3 | Elektrikli parçalar ısı hatası |
| L4 | Radyasyon kanadı sıcaklık yükselmesi (FTXM kılavuzunda: inverter devresi soğutma bloğunda yüksek sıcaklık) |
| L5 | İnverter anlık aşırı akımı (FTXM kılavuzunda: çıkış aşırı akım) |

⚠️ **L5 için ayrı not:** Daikin Türkiye'nin hata kodları sayfası L5'i uzman servis müdahalesi gerektiren bir arıza olarak veriyor ve **cihazın hemen kapatılıp servise başvurulmasını** istiyor. L5 görüyorsan klimayı yeniden denemek yerine bu talimatı uygula.

F3'ün ayrıntısı [Daikin klima F3 hatası](/blog/daikin-klima-f3-hatasi/) yazısında, tüm tablo [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) yazısında. Dış ünitenin çevresini düzenli tutmak için [klima dış ünite temizliği](/blog/klima-dis-unite-temizligi/) yazısına bakabilirsin.

## Nerede durmalısın

Daikin'in kılavuzu, hata kodunu sıfırlamadan önce sorunun anlaşılması ve önlem alınmasının **yetkili bir montör ya da satıcı** tarafından yapılması gerektiğini yazıyor. Kullanıcıya düşen kısım yukarıdaki kontrol kadardır.

⛔ **Kendin-çöz sınırı burada biter.** Dış ünitenin çevresi ve iç ünitenin filtresi kullanıcıya aittir; dış ünitenin içi, soğutucu devresi ve elektronik kart servise aittir. Daikin, sistemin kullanıcı tarafından demonte edilmemesini, soğutucu ve diğer parçalarla ilgili işlemlerin mevzuata uygun şekilde yapılmasını istiyor.

## Servisi aramadan önce iki dakikalık özet

1. Kumandadan okunan kod gerçekten F6 mi, yoksa aynı gruptaki F3 ya da L kodlarından biri mi?
2. Dış ünitenin hava çıkışının önünde bir araç, eşya ya da örtü var mıydı, kaldırıldı mı?
3. İç ünitenin filtreleri temiz mi?
4. Kesici kapatılıp açıldıktan sonra lamba sabit mi yanıyor, yine mi yanıp sönüyor?
5. Ünitenin tam model adı ve kurulum tarihi elinde mi?

Ekrandaki kodu ve klimanın modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
