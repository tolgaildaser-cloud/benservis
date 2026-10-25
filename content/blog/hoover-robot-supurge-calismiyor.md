---
title: "Hoover robot süpürge çalışmıyor: ışıklar ve kontrol sırası"
description: "Hoover robot süpürge çalışmıyor ya da şarj olmuyorsa: güç düğmesi, pil, ışık kombinasyonları, fırçalar, hazne, sensörler. Hoover HG5 kılavuzuna göre sıra."
slug: "hoover-robot-supurge-calismiyor"
date: "2026-10-24"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X5, çatal C). origin/main (7481159) content/blog/'da Hoover robot ya da süpürge yazısı yok
#   (hoover-* yalnız çamaşır, bulaşık, kurutma); genel supurge-calismiyor ve robot-supurge-* yazıları Hoover ışık kombinasyonlarını vermiyor.
# Arama kanıtı (#164, bu koşu 24 Eki, suggestqueries hl=tr gl=tr): "hoover süpürge ç" → 1. "hoover robot süpürge çalışmıyor" (tek öneri).
#   "hoover robot süpürge" → 3. "…bataryası", 4. "…kurulumu". GSC: "hoover" satırı yok.
# Belge (#88). Zincir: https://www.hoover-home.com/tr_TR/robot-elektrikli-supurgeler/38383008/hg530h-011/ (200)
#   → page-data.json (200, "manuals" alanı, lang TR) → https://d15v10x8t3bz3x.cloudfront.net/Libretti/2023/3/16777714/48700043%20_01%20_ROBOT%20HG5%20HYDRO%20UM%20ML (200, application/pdf)
#  (H) Hoover HG5 Hydro robot süpürge kullanım kılavuzu, çok dilli, 154 s., md5 28413cea49a8de69c748d59d7452aefe — Türkçe bölüm s.138–145
#  Hoover'ın Türkiye sitesinde listelenen tek robot modeli HG530H 011; kılavuz bu modelin ürün sayfasından bağlanıyor.
# BİLEREK YAZILMAYANLAR: pil değişimi adımları (robotun altını tornavidayla açmak gerekiyor; #31, servis) · radar kulesi arızası teşhisi · uygulama menüleri · fiyat (#46).
# Alıntı denetimi: hoover-robot-supurge-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Robotla gelen temizlik fırçası", "Kuru bez", "İnce bir iğne"]
steps:
  - "Robot kapalıysa Açık/Kapalı düğmesine üç ila beş saniye uzun bas; uyku modundaysa temizliğe başlatmak için düğmeye iki kez bas."
  - "Düşük güç yüzünden açılmıyorsa robotu elle şarj altlığına taşı, temas noktalarının hizalı ve temiz olduğundan emin ol."
  - "Açık/Kapalı ve Ev düğmelerindeki ışık kombinasyonunu tabloyla eşleştir."
  - "Robotu kapat, kenar fırçalarını ve döner fırçayı temizle, doğru yerleştirildiklerini kontrol et."
  - "Toz haznesini boşalt, filtreyi temizle ve hazneyi yerine tam oturt."
  - "Tahrik tekerleklerindeki saç ve kirleri al, düşme önleyici sensörleri ve ön tamponu kuru bezle sil."
  - "Robot bir çarpmadan sonra yanıt vermiyorsa Sıfırlama düğmesine ince bir iğneyle iki üç saniye bas."
faq:
  - q: "Hoover robot süpürge açılıyor ama hareket etmiyor, ışıklar ne anlatıyor?"
    a: "HG5 kılavuzunun sorun giderme tablosu Açık/Kapalı ve Ev düğmelerindeki ışıkları kontrol edilecek parçaya bağlıyor: beyaz ve mavi yanıp sönüyorsa kenar ve döner fırça, beyaz yanıyorsa toz haznesi, beyaz ve açık mavi yanıp sönüyorsa tahrik tekerlekleri, mavi ve açık mavi yanıp sönüyorsa düşme önleyici sensörler ve ön tampon, yalnız beyaz yanıp sönüyorsa ışıklı radar kulesi."
  - q: "Hoover robot süpürge otomatik olarak şarja gitmiyor, neden?"
    a: "Kılavuza göre robotla şarj altlığı arasında engel olmamalı ve altlığın önünde 2 metre, her iki yanında 1 metre boş alan bulunmalı. Altlık zemin seviyesinde, ışık yansıtmayan bir yüzeye, tercihen duvara karşı konmalı; zemin çok yansıtıcıysa robot altlığı bulmakta zorlanabilir. Şarj temas noktaları da temiz olmalı."
  - q: "Şarj olurken düğmelerde hangi ışığı görmeliyim?"
    a: "Pil şarj olurken Açık/Kapalı ve Ev düğmeleri beyaz yanıp söner; pil tamamen dolunca ışıklar söner. Kılavuz ilk kullanımdan önce robotu 4–6 saat şarj etmeni, normal kullanımda tam şarjın yaklaşık 4–5 saat sürdüğünü yazıyor."
  - q: "Robot çok gürültülü ya da az çekiyor, bozuk mu?"
    a: "Tabloda iki durumun çözümü aynı: toz haznesini ve filtreyi temizle, döner fırçayı ve tahrik tekerleklerini temizleyip kontrol et. Kılavuz filtrelerin toz haznesi beş kez boşaltıldıktan sonra temizlenmesini ve yıkanmamasını istiyor."
  - q: "Paspas işlevi çalışmıyor, ne yapmalıyım?"
    a: "Su tankında yeterince temiz su olup olmadığına, paspas bezi tutucunun ve bezin robota doğru takılıp takılmadığına bak. Tanka yalnız soğuk ya da oda sıcaklığında su koy; kılavuza göre başka sıvılar tankı aşındırabilir, sıcak su tanka zarar verebilir."
images:
  coverAlt: "Parke zeminde ters çevrilmiş bir robot süpürgenin alt yüzü, fırçaları ve tekerlekleri görünüyor"
  steps:
    - "Çizim: solda robot süpürge, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda robot süpürge, sağda şarj edilen batarya"
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda robot süpürge, sağda temizlik fırçası"
    - "Çizim: solda robot süpürge, sağda su ya da toz haznesi"
    - "Çizim: solda robot süpürge, sağda tekerlek"
    - "Çizim: solda robot süpürge, sağda kontrol panelindeki tuş ya da düğme"
---

Hoover robot süpürgen düğmeye bastığında kalkmıyor, birkaç saniye sonra ışıklar yanıp sönmeye başlıyor ya da şarj altlığına geri dönmüyor. Hoover'ın Türkiye sitesinde listelediği **HG530H (HG5 Hydro)** robotun kılavuzunun Türkçe bölümü, bu durumlar için kısa bir kontrol listesi veriyor. Listenin en kullanışlı kısmı, düğme ışıklarının hangi renk kombinasyonunun hangi parçayı gösterdiği.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Robot gerçekten açık mı → pil bitik mi, elle altlığa koy → ışık kombinasyonunu tabloyla eşleştir → fırçaları, hazneyi, filtreyi, tekerlekleri ve sensörleri temizle → çarpmadan sonra donduysa Sıfırlama düğmesi. Altlık çevresi önde 2 m, yanlarda 1 m boş olmalı.

## Işıklar ne söylüyor?

Kılavuzun "Robot açıldığında çalışmıyor" satırı, Açık/Kapalı ve Ev düğmelerindeki ışığa göre şunu kontrol etmeni istiyor:

| Işık | Kontrol et |
|---|---|
| Beyaz ve mavi yanıp sönüyor | Kenar fırçaları ve döner fırça temiz ve doğru yerleştirilmiş mi |
| Beyaz yanıyor | Toz haznesi doğru yerleştirilmiş mi |
| Beyaz ve açık mavi yanıp sönüyor | Tahrik tekerlekleri temiz ve çalışır durumda mı |
| Mavi ve açık mavi yanıp sönüyor | Düşme önleyici sensörler ve ön tampon temiz mi |
| Beyaz yanıp sönüyor | Işıklı radar kulesi çalışıyor mu |

Normal çalışmada ise Açık/Kapalı düğmesindeki **mavi ışık yanıp sönüyorsa bekleme**, **sürekli yanıyorsa çalışma**, **sönükse uyku** modundasın. Ev düğmesindeki beyaz ışık yanıp sönüyorsa robot şarj oluyor, hızla yanıp sönüyorsa uygulama bağlantısı modunda.

## Adım adım: evde denenecekler

**1. Açık olduğundan emin ol.** Robotu açmak için Açık/Kapalı düğmesine **3 ila 5 saniye** uzun bas. Robot bekleme modunda 3 dakika iş yapmazsa kendiliğinden uyku moduna geçer; bu sırada düğme ışığı kapalıdır ve robot hareketsizdir. Kılavuza göre uyku modundaki robotu temizliğe başlatmak için düğmeye **iki kez** bas.

**2. Pili kontrol et.** Düşük güç yüzünden robot açılamıyorsa onu **elle şarj altlığına taşı**. Şarj temas noktaları hizalanmalı, kenar temizlik fırçası temas noktalarının arasına sıkışmamalı. Hoover robotun ve altlığın temas noktalarının kirli olmadığından emin olmanı istiyor. Pil şarj olurken iki düğme beyaz yanıp söner, dolunca ışıklar söner. Şarj sorunları için ayrıca: [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/).

**3. Işığı tabloyla eşleştir.** Yukarıdaki tablo hangi parçaya bakacağını söylüyor. Aşağıdaki adımlar o parçaların bakımı; her bakımdan önce robotu kapat.

**4. Fırçaları temizle.** Robotu kapatıp ters çevir. Taban plakasındaki klipslere bastırıp döner fırça kapağını çıkar, fırçayı bir ucundan kaldır. Dolananları ve kılların üzerindeki kiri temizlik fırçasıyla al; bilyalı yataktaki **lastik manşonu kaybetme.** Kenar fırçaları kirlendiyse temiz suyla temizleyip kurula. Takarken fırçadaki **L ve R** işaretlerini robotun altındakilerle eşleştir. Fırça dönmüyorsa: [robot süpürge fırça dönmüyor](/blog/robot-supurge-firca-donmuyor/).

**5. Hazneyi ve filtreyi temizle.** Serbest bırakma düğmesine basıp su tankını ve toz haznesini çekip çıkar. Hazneyi kulptan kaldır, klipsi açıp çöpe boşalt. EPA filtreyi filtre örgüsünden çıkarıp ayrı temizle; Hoover bu filtrelerin **toz haznesi beş kez boşaltıldıktan sonra** temizlenmesini ve **yıkanmamasını** istiyor. Hazneyi geri takarken yerine tam oturduğundan emin ol; tablo "beyaz yanıyor" ışığını buna bağlıyor.

**6. Tekerlekleri ve sensörleri sil.** Robotu kapatıp ters çevir, tekerleklere dolanan saç ve kirleri gider, tekerlekleri kuru bezle temizle. Robotun altında **3 düşme önleyici sensör** var; toz ve kalıntıyı kuru bezle sil. Ön tamponun da temiz ve serbest olduğuna bak.

**7. Gerekirse sıfırla.** Kılavuza göre robot bir çarpmayla karşılaşıp yanıt vermezse, zorla kapatmak için **Sıfırlama düğmesine 2 mm'den kısa bir iğneyle 2–3 saniye** bas. Parça listesinde bu düğme kırmızı renkli olarak gösteriliyor. Robot sıkıştıysa kendini kurtarmayı dener; bazı durumlarda ona elle yardım etmen gerekir.

## Diğer satırlar

| Belirti | Kılavuzun çözümü |
|---|---|
| Otomatik şarj olmuyor | Robotla altlık arasında engel olmasın; altlığın önünde 2 m, yanlarında 1 m boş alan |
| Çok gürültülü ya da temizleme gücü zayıf | Hazne ve filtreyi, döner fırçayı ve tahrik tekerleklerini temizle |
| Paspas çalışmıyor | Tankta yeterli temiz su, tutucu ve bez doğru takılı mı |

Kılavuz ayrıca robotun doğrudan güneş ışığında ya da koyu cilalı zeminlerde davranışının olumsuz etkilendiğini, 8 cm'den kısa basamakları algılayamadığını yazıyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Uyku modu, şarj, fırça, hazne, sensör | Senin, bu yazıdaki adımlar |
| Beyaz yanıp sönme sürüyor (radar kulesi) | Hoover Satış Sonrası Servis |
| Pil kapasitesi düştü | Orijinal Hoover yedek pil; robotun altı vidayla açıldığı için emin değilsen servis |
| Güç kablosu hasarlı | Kullanma; yetkili Hoover servisi değiştirir |

⛔ Hoover'ın uyarısı: robotu demonte etme ve kendin tamir etmeye çalışma. Genel belirtiler için [süpürge çalışmıyor](/blog/supurge-calismiyor/) yazısına da bakabilirsin.

---

**Kaynak künyesi.** Işık tablosu, şarj, bakım ve sorun giderme bilgileri Hoover HG5 Hydro (HG530H) robot süpürge kullanım kılavuzunun Türkçe bölümünden (hoover-home.com/tr_TR ürün sayfası) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
