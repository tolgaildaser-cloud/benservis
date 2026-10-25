---
title: "Kiwi şarjlı çırpıcı: şarj, süt köpürtme ve temizlik"
description: "Kiwi KCW-1223 ve KCW-1224 şarjlı çırpıcı ile pilli KCW-1112 kılavuzlarına göre şarj ışığı, şarj süresi, süt köpürtme, çalışma süresi ve temizlik."
slug: "kiwi-sarjli-cirpici-kullanimi"
date: "2026-10-24"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ yazı alt ajanı (YK #182 Dalga 7, küme Y2, çatal A). Konu: origin/main 26ffd7d'de "çırpıcı" ya da "köpürtücü" geçen slug ya da başlık yok (slug + başlık grep'i boş); Dalga 6 ve Dalga 7 klasörlerinde de yok.
# GSC: Sorgular.csv (www-3..6) içinde "kiwi", "çırpıcı", "kcw" satırı YOK.
# Arama kanıtı (#164, bu koşuda suggestqueries.google.com, hl=tr gl=tr; _kaynak/ot.tsv):
#   tohum "kiwi şarjlı çırpıcı": 1. kendisi · 2. …a101 · 3. "…1224" · 4. …migros · 5. "…süt köpürtücü" · 6. "…süt köpürtücü kcw-1223"
#   tohum "kiwi çırpıcı": 5. "kiwi çırpıcı pili". Kiwi'de Tolga talimatıyla ürün kapsamı yeterli.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, HTTP 200 application/pdf; ürün sayfaları kiwi.com.tr HTTP 200, PDF dosya adı sayfa HTML'inde geçiyor. #88: yalnız üretici belgesi.
#  (A) KCW-1223 Şarjlı Çırpıcı, 2 s. çok dilli föy, md5 268cfd9ddd7f491d8ac89a4a80e6c5c5 (TR s.1-2, garanti s.2)
#  (B) KCW-1224 Şarjlı Çırpıcı, 2 s. çok dilli föy, md5 48f3f6c98d279d3dc6a32dc560a60276 (TR s.1-2). ⚠ Föyde Kiwi/BMVA metni yok, ithalatçı satırı başka bir dağıtıcı; belgeyi Kiwi'nin iki resmî ürün sayfası (kcw-1224-376-pt, kcw-1224-1-472-pt) bağlıyor, kapakta model kodu ve "TR Şarjlı Çırpıcı" var.
#  (C) KCW-1112 Kablosuz Çırpıcı, 2 s. çok dilli föy, md5 a5faf9e85669fdd9dd086d2595129543 (TR s.1-2, garanti s.2)
# BİLEREK YAZILMAYANLAR: pil sökümü ve pil değişimi yordamı (B: "Ürünü kendiniz sökmeyin") · KCW-1112 pil takma yönü (föyde tarif yok) · KCW-1223 hız kademe sayısı (föyde yok) · tarif · fiyat (#46). KMX-3600 otomatik karıştırıcı ayrı ürün, kapsam dışı.
# Alıntı denetim tablosu: kiwi-sarjli-cirpici-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika (şarj süresi hariç)"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["USB Type-C şarj kablosu", "5V çıkışlı telefon şarj adaptörü", "Sıcak sabunlu su", "Kuru bez"]
steps:
  - "Adaptörün, kablo fişinin ve cihazdaki şarj soketinin kuru olduğundan emin olup çırpıcıyı şarja tak."
  - "Şarj ışığını izle; ışık sönene kadar cihazı kullanma."
  - "KCW-1224'te çırpıcının koruyucu kapağını çıkar."
  - "Çırpıcıyı süte, kahveye ya da yumurtaya daldırıp düğmeyle çalıştır."
  - "Kısa çalıştır; iki dakikalık çalışmadan sonra en az on dakika ara ver."
  - "Çırpıcı ucunu sıcak sabunlu suya batırıp kısa süre çalıştırarak temizle."
  - "Cihazı temiz ve kuru bir yerde sakla; uzun süre kullanmayacaksan arada şarj et."
faq:
  - q: "Kiwi şarjlı çırpıcı kaç saatte şarj olur?"
    a: "KCW-1223 kılavuzuna göre cihaz 1 saat sonra tamamen şarj olur. KCW-1224 kılavuzu pilin tamamen dolmasının yaklaşık 2,5 saat sürdüğünü yazıyor. İki modelde de şarj sırasında cihaz kullanılmaz."
  - q: "Şarj ışığı ne renk yanar?"
    a: "KCW-1223'te ışık kırmızıya döner, tam dolunca kırmızı ışık söner. KCW-1224'te güç gösterge ışığı yanar ve pil dolunca söner; föy ışığın rengini yazmıyor."
  - q: "Kiwi çırpıcı hangi pille çalışır?"
    a: "Şarjsız KCW-1112 Kablosuz Çırpıcı'nın föyünde güç kaynağı 2x AA (LR06) olarak yazıyor. KCW-1223 ve KCW-1224 ise dahili şarjlı pille çalışır; KCW-1224'te 3.7 V, 500 mAh Li-ion."
  - q: "Adaptör kutudan çıkıyor mu?"
    a: "Hayır. İki şarjlı modelin föyü de adaptörün dahil olmadığını yazıyor. KCW-1223 telefon şarj adaptörünü örnek veriyor; KCW-1224 UL/GS ya da eşdeğer güvenlik onaylı, 5V çıkışlı adaptör istiyor."
  - q: "Çırpıcıyı musluğun altında durulayabilir miyim?"
    a: "Gövdeyi durulama. KCW-1224 föyüne göre su ana üniteye girip hasara yol açabilir. Kiwi'nin tarifi çırpıcı ucunu sıcak sabunlu suya batırıp cihazı çalıştırmak; sap ve pil dahil cihazın tamamı suya batırılmaz, bulaşık makinesine konmaz."
images:
  coverAlt: "Bir fincan sütün üstünde köpük oluşturan ince çubuklu küçük bir çırpıcı"
  steps:
    - "Küçük bir çırpıcının şarj soketine takılı kablo ve prizdeki adaptör"
    - "Çırpıcı gövdesinde yanan küçük şarj gösterge ışığı, yakın plan"
    - "Çırpıcının ucundan çıkarılmış şeffaf koruyucu kapak"
    - "Süt dolu bir bardağa daldırılmış çalışan çırpıcı ucu"
    - "Tezgâhta dinlenmeye bırakılmış kapalı çırpıcı ve köpüklü süt bardağı"
    - "Sabunlu su dolu bir kaba daldırılmış çırpıcı ucu"
    - "Temiz ve kuru bir mutfak çekmecesinde duran çırpıcı ve şarj kablosu"
---

Kiwi'nin şarjlı çırpıcıları küçük süt köpürtücüleri: süt, kahve ve yumurtayı köpürtmek için tasarlanmışlar. Kiwi'ye göre içecek ve sos yapmak için de kullanılabilirler. Bu yazı Kiwi'nin üç kısa föyüne dayanıyor: şarjlı KCW-1223 ve KCW-1224, bir de pille çalışan KCW-1112 Kablosuz Çırpıcı. Föylerde en çok tekrar eden kural süre sınırı: **"2 dakikalık çalışmadan sonra, çalışmaya devam etmeden önce en az 10 dakika bekleyin."** Şarj, kullanım ve temizlik adımları aşağıda modele göre veriliyor.

> ⚡ **Kısa özet:** Şarjlı modeli kuru bir kablo ve 5V adaptörle şarj et. Işık sönünce dolmuştur: KCW-1223'te 1 saat, KCW-1224'te yaklaşık 2,5 saat. KCW-1224'te koruyucu kapağı çıkar. Ucu süte daldırıp düğmeyle çalıştır, 2 dakikadan sonra 10 dakika ara ver. Temizlik için ucu sıcak sabunlu suda çalıştır; gövde suya ve bulaşık makinesine girmez.

## Model ve föydeki değerler

| | KCW-1223 | KCW-1224 | KCW-1112 |
|---|---|---|---|
| Föydeki adı | Şarjlı Çırpıcı | Şarjlı Çırpıcı | Kablosuz Çırpıcı |
| Güç kaynağı | DC5V, 1A giriş | DC 3.7 V, 500 mAh Li-ion | 2x AA (LR06) pil |
| Şarj soketi | USB C tipi giriş | Type-C, köpürtücünün arkasında | Yok |
| Şarj süresi | 1 saat | Yaklaşık 2,5 saat | — |
| Düğmeler | Güç/hız seçim düğmesi, şarj ve hız gösterge ışığı | Güç düğmesi, gösterge ışığı | Anahtar düğmesi, pil kapağı |
| Ek parça | — | Koruyucu kapak | — |

## Adım adım: şarj, köpürtme, temizlik

**1. Şarja tak.** Şarj kablosunu cihazın şarj soketine tak, diğer ucunu bir adaptöre bağla ve adaptörü prize tak. Adaptör kutudan çıkmıyor. KCW-1223 föyü telefon şarj adaptörünü örnek veriyor. KCW-1224 föyü UL/GS ya da eşdeğer güvenlik onaylı, 5V çıkışlı bir adaptör istiyor. Bağlamadan önce adaptörün, kablo fişinin ve cihazdaki şarj soketinin tamamen kuru olduğundan emin ol. Pilli KCW-1112'de bu adım yok; föyde güç kaynağı iki AA (LR06) pil olarak geçiyor ve pil kapağı ayrı bir parça.

**2. Işığı izle.** KCW-1223'te ışık kırmızıya döner, cihaz dolunca kırmızı ışık söner; şarj 1 saat sürer. KCW-1224'te güç gösterge ışığı yanar, pil dolunca söner; şarj yaklaşık 2,5 saat sürer. Şarj sırasında cihazı kullanma.

**3. Koruyucu kapağı çıkar.** KCW-1224'ün çırpıcı ucunda koruyucu bir kapak var. Kullanmadan önce bu kapağı çıkar.

**4. Daldır ve çalıştır.** Çırpıcı ucunu köpürteceğin süte, kahveye ya da yumurtaya daldır. KCW-1224'te düğmeye basınca köpürtücü çalışır, düğmeyi bırakınca durur. KCW-1223'te güç düğmesine bas ve uygun hızı seç. Çırpıcı çalışırken parmaklarını ve mutfak aletlerini uçtan uzak tut.

**5. Kısa çalıştır.** KCW-1223 ve KCW-1224 föyleri, 2 dakikalık çalışmadan sonra devam etmeden önce en az 10 dakika beklemeni istiyor. KCW-1224 föyü ayrıca sürekli çalışmanın 3 dakikayı geçmemesini öneriyor ve uzun süreli kullanıma izin vermiyor. İki süre farklı olduğu için kısa olanına, 2 dakikaya uymak en güvenlisi; bu bir çıkarım. Cihazı aşırı yükleme.

**6. Ucu sabunlu suda temizle.** Kiwi'nin tarifi şu: çırpıcı ucunu sıcak sabunlu suya batır ve cihazı çalıştır. Sap ve pil dahil cihazın tamamını suya batırma, bulaşık makinesine koyma. KCW-1224 föyü kullanımdan sonra ürünü doğrudan durulamamanı da yazıyor, çünkü su ana üniteye girip hasara neden olabilir.

**7. Sakla ve arada şarj et.** Kullanmadığında cihazı temiz ve kuru bir yerde sakla. KCW-1224 föyüne göre bu lityum pilli bir ürün; pil ömrünü uzatmak için kullanılmadığı zamanlarda üç ayda bir şarj edilmesi öneriliyor.

## Güvenlikte dikkat

- Cihazı yüksek sıcaklığa ve doğrudan güneş ışığına bırakma.
- Föylere göre cihaz 0-8 yaş arası çocuklarca kullanılmaz; çocukların erişemeyeceği yerde sakla. Bu bir oyuncak değil.
- Her kullanımdan önce cihazın ve kablonun sağlam olduğunu kontrol et; kablo hasarlıysa cihazı kullanma.
- Gözetimsiz bırakacaksan cihazı güç kaynağından ayır.
- Temizlikte asitli, alkali ya da aşındırıcı deterjan kullanma.
- Yanıcı ve patlayıcı gazlardan uzak tut.

## Pilli KCW-1112 için pil uyarıları

- Pilleri ateşe atma; föy patlama tehlikesi olduğunu yazıyor.
- Pilleri çocuklardan uzak tut.
- Kısa devre olursa piller çok ısınabilir, hatta alev alabilir.
- Pil sızdırırsa gözlerini ovma. Sıvıya temas ettiysen ellerini iyice yıka, gözünü temiz suyla durula.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Şarj ışığı yanmıyor | Önce senin: kablo ve soket kuru mu, adaptör 5V mi, prizde mi |
| Cihaz şarj sırasında çalışmıyor | Normal; föye göre şarjda kullanılmaz |
| Kablo hasarlı | Kullanma |
| Cihaz düzgün çalışmıyor | Kiwi müşteri hizmetleri ya da yetkili servis |

⛔ Cihazı kendin sökme. KCW-1224 föyüne göre bu durumda garanti geçersiz olur. Föylerde pilin nasıl değiştirileceği yazmıyor.

Şarjlı başka bir mutfak aleti için [Kiwi şarjlı doğrayıcı](/blog/kiwi-sarjli-dograyici-kullanimi/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Şarj talimatı, şarj süresi, parça adları, çalışma süresi ve temizlik talimatları Kiwi'nin Türkçe KCW-1223 ve KCW-1224 Şarjlı Çırpıcı ile KCW-1112 Kablosuz Çırpıcı föylerinden alınmıştır. Kendi cihazının föyü farklı bir tarif veriyorsa **kendi föyün esastır.**
