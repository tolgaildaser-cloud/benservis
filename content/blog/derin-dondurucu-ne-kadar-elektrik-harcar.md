---
title: "Derin dondurucu ne kadar elektrik harcar"
description: "Derin dondurucu yılda kaç kWh harcar? Üreticinin enerji etiketlerinden 7 model, günlük tüketim hesabı ve kılavuzdaki tüketimi düşüren adımlar."
slug: "derin-dondurucu-ne-kadar-elektrik-harcar"
date: "2026-09-23"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-23 PAZ. Tüm rakamlar ÜRETİCİNİN KENDİ belgelerinden (#88); web araması yalnız belgelerin yerini bulmak için kullanıldı,
# üçüncü taraf ürün siteleri (epey, hepsiburada vb.) KAYNAK ALINMADI.
# Enerji etiketi (_e) + ürün bilgi formu (_u), statik.vestel.com.tr/webfiles/, hepsi HTTP 200, pdftotext ile okundu;
# PDF linkleri vestel.com.tr ürün sayfalarından alındı:
#   CDS301   20268716  103 L  170 kWh/annum  E   (_e 901dede4… _u 006ade90…)
#   SD15011  20268376  142 L  182 kWh/annum  E   (_e 97b881d6… _u 81fcb549…)
#   CDM601 E 20268714  196 L  197 kWh/annum  E   (_e 3da647b5… _u eb08af67…)
#   CDM701   20265698  259 L  219 kWh/annum  E   (_e 8596e16d… _u d2647614…)
#   SD30111  20268401  268 L  222 kWh/annum  E   (_e cace42ff… _u 002b88bb…)
#   CDL711 E NF 20350573  280 L (formda toplam 279)  249 kWh/annum  E   (_e 734cd337… _u b324b478…)
#   SD50011  20268372  435 L  281 kWh/annum  E   (_e 9239d78a… _u 4d688eda…)
# Hacim = etiketteki L değeri. Günlük değer = yıllık / 365 (bizim aritmetiğimiz, yuvarlanmış).
# Kılavuzlar (_k): 20310001 SD 100 V A+ sandık (md5 55942886…) → iklim sınıfı tablosu, "Enerji Tasarrufu için Öneriler",
#   eritme: "yaklaşık 4 mm kalınlığına ulaştığında … kazıma küreği", "yılda en az bir veya iki kez eritilip temizlenmelidir",
#   "10°C den daha soğuk ortamlarda çalıştırılması verimliliği açısından tavsiye edilmez".
#   20266850 CD 30001 (md5 a1bcbc48…) → "Ürünün beyan edilen enerji tüketimi, dondurucu rafı olmadan ve maksimum yüklü halde belirlenmiştir."
# YAZILMAYANLAR: fiyat/fatura tutarı (#46) · "eski dondurucu X kat yakar" gibi kaynaksız kıyas · marka-dışı genelleme ·
#   no-frost/statik tüketim farkı iddiası (belgelerde kıyas yok) · kompresör/gaz teşhisi · söküm (#31).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Kuru ve yumuşak bir boya fırçası", "Dondurucuyla gelen buz kazıma küreği"]
steps:
  - "Cihazın bilgi etiketinden model adını oku ve üreticinin sitesinde aynı modelin enerji etiketini bul."
  - "Etiketteki kWh/annum değerini 365'e bölerek günlük tüketimi hesapla."
  - "Cihazı serin, havalandırması iyi bir yere al; doğrudan güneşten ve radyatör, fırın gibi ısı kaynaklarından uzak tut."
  - "Etiketteki iklim sınıfına bak; bulunduğu odanın sıcaklığı o aralığın içinde kalsın."
  - "Sıcak yiyecek ve içecekleri dondurucuya koymadan önce dışarıda soğumaya bırak; sulu yemekleri kapalı kaplarda koy."
  - "Kapağı ne alacağını bilerek aç ve mümkün olduğunca kısa süre açık tut."
  - "Kapı contasının temiz ve esnek olduğunu kontrol et."
  - "Fişi çek ve cihazın arkasını yumuşak, kuru bir boya fırçasıyla temizle."
  - "Statik bir dondurucuda kar tabakası yaklaşık 4 mm olduysa cihazla gelen kazıma küreğiyle al."
faq:
  - q: "Derin dondurucu yılda kaç kWh elektrik harcar?"
    a: "Kendi cihazının değeri enerji etiketindeki kWh/annum satırında yazar. Örnek olarak Vestel'in yedi güncel modelinin etiketlerinde bu değer 103 litrelik çekmeceli modelde 170, 435 litrelik sandık tipinde 281 kWh/yıl; aradaki modeller 182 ile 249 arasında."
  - q: "Derin dondurucu günde kaç kWh harcar?"
    a: "Etiketteki yıllık değeri 365'e bölmen yeterli. Vestel'in etiketlerine göre 170 kWh/yıl günde yaklaşık 0,47 kWh, 281 kWh/yıl günde yaklaşık 0,77 kWh eder."
  - q: "Etiketteki tüketim evdeki gerçek tüketimle aynı mı?"
    a: "Her zaman değil. Vestel, beyan edilen enerji tüketiminin standart koşullarda, dondurucu rafı olmadan ve maksimum yüklü hâlde belirlendiğini yazıyor. Cihazın durduğu odanın sıcaklığı, kapağın açılma sıklığı ve içeriye konan sıcak yemek gerçek tüketimi değiştirir."
  - q: "Derin dondurucunun elektrik faturasına etkisi nasıl hesaplanır?"
    a: "Etiketteki yıllık kWh değerini faturandaki birim fiyatla çarp. Birim fiyat tarifene göre değiştiği için güncel değeri faturandaki birim bedel satırından almak en doğrusu."
  - q: "Derin dondurucu soğuk bir odada daha az mı yakar?"
    a: "Sınırı var. Vestel, cihazın etiketindeki iklim sınıfının ortam sıcaklığı aralığında çalışacak şekilde tasarlandığını ve 10°C'den daha soğuk ortamlarda çalıştırılmasının verimlilik açısından tavsiye edilmediğini yazıyor. Serin ama o aralığın içinde bir oda hedeflenmeli."
images:
  coverAlt: "Serin bir kilerde duvardan biraz aralıklı duran beyaz sandık tipi derin dondurucu; kapağın üstünde katlanmış bir kâğıt ve yanında kuru bir boya fırçası"
---

Derin dondurucu evin en göze batmayan cihazlarından biridir: genellikle kilerde, balkonda ya da bir köşede durur, günlerce kapağı açılmaz. Ama fişte kaldığı her saat çalışmaya hazırdır. "Ne kadar yakıyor?" sorusunun cevabı ise tahmin gerektirmez — cihazın enerji etiketinde tek bir satırda yazar.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tüketimi gösteren satır, etiketteki **kWh/annum** değeridir. Vestel'in yedi güncel derin dondurucusunun etiketlerinde bu değer **170 ile 281 kWh/yıl** arasında, yani günde yaklaşık **0,47-0,77 kWh**. Kendi cihazının maliyeti = **yıllık kWh × faturandaki birim fiyat.** Üreticinin kılavuzuna göre tüketimi artıran başlıca şeyler: sıcak ya da güneşli bir yer, dışarıda soğumamış yemek, uzun açık kalan kapak, kirli conta ve tozlu arka yüzey.

## Adım adım: dondurucunun tüketimini bul ve düşür

**1. Modeli bul.** Cihazın üzerindeki bilgi etiketinden model adını oku. Üreticinin sitesinde aynı modelin ürün sayfasında enerji etiketi ve ürün bilgi formu yer alır.

**2. Günlüğe çevir.** Etiketteki kWh/annum değerini 365'e böl. Çıkan sayı, dondurucunun bir günde çektiği elektriktir.

**3. Yerini kontrol et.** Vestel'in önerisi: cihazı serin, havalandırması iyi bir odaya yerleştir; doğrudan güneş ışığından ve radyatör, fırın gibi ısı kaynaklarının yakınından uzak tut. Bu mümkün değilse yalıtım plakası kullan.

**4. İklim sınıfına bak.** Etiketteki iklim sınıfı, cihazın hangi oda sıcaklıklarında çalışmak üzere tasarlandığını söyler (aşağıdaki tablo). Balkon ya da ısıtılmayan bir depo kışın bu aralığın altına düşebilir.

**5. Sıcağı içeri koyma.** Sıcak yiyecek ve içecekleri önce dışarıda soğumaya bırak. Sulu yemekleri kapalı kaplarda koy; açık kaptan çıkan nem cihazın çalışma süresini uzatır.

**6. Kapağı kısa aç.** Ne alacağını bilerek aç, mümkün olduğunca kısa süre açık tut.

**7. Contaya bak.** Kapı contası temiz ve esnek olmalı. Kılavuz eskimiş contaların değiştirilmesini söylüyor — bu bir servis işidir.

**8. Arkasını temizle.** Fişi çek; cihazın arkasını arada sırada yumuşak ve kuru bir boya fırçasıyla temizle. Vestel bunu doğrudan "enerji tüketiminin artmasını önlemek için" diye yazıyor.

**9. Karı kazı.** Statik (otomatik eritme yapmayan) bir dondurucuda kar tabakası yaklaşık 4 mm kalınlığa ulaştığında, cihazla verilen buz kazıma küreğiyle alınmalı. Ayrıntı için [derin dondurucu buz çözme](/blog/derin-dondurucu-buz-cozme/) yazımıza bakabilirsin.

## Etiketteki tek önemli satır: kWh/annum

Derin dondurucunun enerji etiketinde birkaç bilgi yer alır: sınıf harfi, yıllık tüketim, hacim ve gürültü seviyesi. Tüketimi soran biri için işe yarayan satır **kWh/annum**'dur — cihazın standart test koşullarında bir yılda çektiği elektrik.

Harf sınıfı tek başına tüketimi söylemez. Aşağıdaki yedi modelin yedisi de **aynı sınıfta (E)**, ama yıllık tüketimleri 170 ile 281 kWh arasında değişiyor. Tabloda tüketim, hacimle birlikte artıyor.

## Üreticinin etiketlerinden 7 örnek

Aşağıdaki değerler Vestel'in kendi web sitesindeki ürün sayfalarında yayımlanan enerji etiketlerinden ve ürün bilgi formlarından alındı. Günlük değer, yıllık değerin 365'e bölünmesiyle bulunmuş yaklaşık bir sayıdır.

| Model | Tip | Hacim (etiket) | Yıllık tüketim | Günlük (yaklaşık) | Sınıf |
|---|---|---|---|---|---|
| CDS301 | Çekmeceli dikey | 103 L | 170 kWh | 0,47 kWh | E |
| SD15011 DuoMode | Sandık | 142 L | 182 kWh | 0,50 kWh | E |
| CDM601 E | Çekmeceli dikey | 196 L | 197 kWh | 0,54 kWh | E |
| CDM701 | Dikey | 259 L | 219 kWh | 0,60 kWh | E |
| SD30111 DuoMode | Sandık | 268 L | 222 kWh | 0,61 kWh | E |
| CDL711 E NF | Dikey | 280 L | 249 kWh | 0,68 kWh | E |
| SD50011 DuoMode | Sandık | 435 L | 281 kWh | 0,77 kWh | E |

İki şey göze çarpıyor:

- **Hacim dört katına çıkarken tüketim dört katına çıkmıyor.** 103 litreden 435 litreye geçişte yıllık tüketim 170'ten 281 kWh'e çıkıyor.
- **Bu tablo bir marka karşılaştırması değildir.** Yalnızca kendi etiketini yayımlayan bir üreticinin güncel modellerini gösterir. Senin cihazının değeri kendi etiketinde yazar.

**Kendin kontrol et:** Cihazının etiketi elinde yoksa bilgi etiketindeki model adıyla üreticinin sitesinde aynı modeli bul. Ürün sayfasında enerji etiketi ve ürün bilgi formu genellikle indirilebilir belge olarak durur.

## Etiket değeri neden evdeki değerden farklı olabilir?

Vestel kılavuzunda bunu açıkça yazıyor: ürünün beyan edilen enerji tüketimi, **dondurucu rafı olmadan ve maksimum yüklü hâlde** belirlenmiştir. Yani etiket, laboratuvarda standart koşullarda ölçülmüş bir değerdir.

Evdeki gerçek tüketimi etiketin üzerine çıkaran başlıca şeyler de aynı kılavuzun enerji tasarrufu önerilerinde sayılıyor: cihazın sıcak ya da güneş alan bir yerde durması, ısı kaynaklarına yakınlık, dışarıda soğumamış yemek, kapalı kaba konmamış sulu yemek, uzun süre açık kalan kapak, eskimiş conta ve tozlanmış arka yüzey.

## İklim sınıfı: dondurucunun rahat ettiği oda sıcaklığı

Vestel kılavuzuna göre derin dondurucu, bilgi etiketinde belirtilen iklim sınıfının ortam sıcaklığı aralığında çalışacak şekilde tasarlanır:

| İklim sınıfı | Ortam sıcaklığı |
|---|---|
| SN | 10-32 °C |
| N | 16-32 °C |
| ST | 16-38 °C |
| T | 16-43 °C |

Kılavuzun iki uyarısı var: cihazın belirtilen değerlerin dışındaki ortamlarda çalıştırılması soğutma verimliliği açısından tavsiye edilmez; **10 °C'den daha soğuk ortamlarda** çalıştırılması da verimlilik açısından tavsiye edilmez. Yani "ne kadar soğuk oda, o kadar az elektrik" kuralı sınırsız işlemez — kışın ısıtılmayan bir balkon bu alt sınırın altına inebilir.

## Maliyet hesabı: iki satırlık çarpım

**Yıllık maliyet = yıllık tüketim (kWh) × faturandaki birim fiyat**

Birim fiyat tarifene göre değişir ve güncellenir; güncel değeri faturandaki birim bedel satırından al. Günlük maliyet için yıllık kWh'i 365'e bölüp aynı birim fiyatla çarp.

İç sıcaklığın doğru ayarı da tüketimi etkiler — gereksiz düşük bir ayar cihazı boşuna çalıştırır. Hangi derecenin yeterli olduğunu [derin dondurucu kaç derece olmalı](/blog/derin-dondurucu-kac-derece-olmali/) yazımızda anlattık.

## Ne zaman servis gerekir?

Yukarıdaki adımlar tüketimi azaltmak içindir; bir arızayı çözmez. Kılavuzun sorun giderme bölümüne göre aşırı dolu bir dondurucu, kılavuzdaki sınırların dışında bir ortam sıcaklığı ya da çok kalın bir buz tabakası soğutmayı etkileyebilir. Bunlar düzeltildiği hâlde cihaz soğutmuyorsa ya da sürekli çalışıp yine de dondurmuyorsa sorun kullanıcı seviyesinin dışındadır. Belirtiler için [derin dondurucu dondurmuyor](/blog/derin-dondurucu-dondurmuyor/) yazımıza bakabilirsin; conta değişimi ve soğutma sistemi ise yetkili servisin işidir.

Diğer cihazların tüketimini merak ediyorsan [buzdolabı ne kadar elektrik harcar](/blog/buzdolabi-ne-kadar-elektrik-harcar/) ve [elektrik faturası neden yüksek](/blog/elektrik-faturasi-neden-yuksek/) yazılarımız da işine yarayabilir.
