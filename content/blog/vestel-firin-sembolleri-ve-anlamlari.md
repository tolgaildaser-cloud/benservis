---
title: "Vestel fırın sembolleri ve anlamları"
description: "Vestel fırın düğmesindeki semboller: statik, turbo fan, fanlı statik, grill, tavuk çevirme, pizza ve buz çözme. Hangi ısıtıcı çalışır, ne için seçilir."
slug: "vestel-firin-sembolleri-ve-anlamlari"
date: "2026-10-23"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de vestel-firin-sembolleri-ve-anlamlari yok; repoda hiçbir markada "firin-sembolleri" yok.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "vestel fırın s" → 2. öneri "vestel fırın sembolleri ve anlamları".
# GSC https___www-5 (3 ay): "vestel fırın düğmelerinin anlamları" 2 (poz 31), "vestel fırın işaretleri anlamları" 2 (poz 40,5), "vestel fırın göstergeleri" 1 (poz 38),
#   "vestel fırın pişirme işaretleri" 1 (poz 33): gösterim var, kendi sayfası yok.
# Belge bu koşuda curl -sL -A "Mozilla/5.0" ile static.vestel.com.tr'den yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı (kaynak-firin-sprint/vestel-52041101.pdf).
#  (A) VAF460W … VAF868DX çok modelli ankastre fırın kılavuzu  https://static.vestel.com.tr/kullanimkilavuzlari/52041101.pdf  33 s.  md5 6fc56d1616d4abbdf595213c15aafa0d
# İlk çalıştırma s.6 · saat ön koşulu s.10 · paneller s.11-13 · PIPO düğme, fonksiyon/termostat düğmesi s.14 · Tablo 2 + buz çözme s.15 · statik/turbo/fanlı statik s.16
#   · grill/grill+çevirme/grill+fan s.17 · grill+çevirme+fan ve iki grill+çevirme varyantı s.18 · turbo fan+alt s.19 (sayfa = PDF sayfası).
# Semboller kılavuzda çizim olarak basılı; yazıda sembolün çizimi tarif edilmedi, fonksiyon adı + Tablo 2'deki devreye giren eleman yazıldı.
# BİLEREK YAZILMAYANLAR: sembol çizim tarifi (metin kaynağı yok) · başka Vestel modelinin (AF serisi dokunmatik) menü simgeleri · rezistans/fan teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: vestel-firin-sembolleri-ve-anlamlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanma kılavuzu"]
steps:
  - "Düğmelerin gömme tip olup olmadığına bak; gömme düğmeyi kullanmak için önce üzerine basıp açık konuma getir."
  - "Fonksiyon düğmesindeki sembolü kılavuzdaki fonksiyon tablosuyla eşleştir ve hangi ısıtıcının çalıştığını öğren."
  - "Seçtiğin fonksiyonla birlikte termostat düğmesini de bir sıcaklığa getir; aksi hâlde fonksiyon çalışmaz."
  - "Saatli modelde fırın saatinin ayarlı olduğundan emin ol."
  - "Yemeğe göre fonksiyonu seç ve kılavuzdaki ön ısıtma süresine uy."
  - "Pişirme bitince fonksiyon ve termostat düğmesini kapat, varsa saat programını iptal et."
faq:
  - q: "Vestel fırında hangi sembol alt üst pişirme?"
    a: "Kılavuzda adı Alt - Üst Isıtıcı Fonksiyonu (Statik Pişirme). Kılavuzun fonksiyon tablosuna göre bu konumda fırının operasyon lambası ile alt ve üst ısıtıcılar devreye girer. Kek, pandispanya, börek, fırında makarna, lazanya ve pizza için tercih ediliyor; yaklaşık 10 dakika ön ısıtma öneriliyor."
  - q: "Vestel fırında turbo fan ile fanlı statik farkı ne?"
    a: "Turbo fan konumunda fan ve turbo ısıtıcı çalışır; kılavuza göre ısıyı eşit yayar ve birden çok yemeği aynı anda pişirmeye uygundur. Fanlı statik konumunda fan ile alt ve üst ısıtıcılar çalışır; hamur işlerinde iyi sonuç verir ve tek tepsi için uygundur."
  - q: "Vestel fırında pizza için hangi sembol seçilir?"
    a: "Kılavuz Turbo Fan ve Alt Isıtıcı fonksiyonunu pizza için ideal diye tanımlıyor: turbo fan ısıyı eşit yayarken alt ısıtıcı hamurun pişmesini sağlar. Bu konumda fan, alt ve turbo ısıtıcılar devreye girer. Alt - üst statik pişirme de kılavuzun pizza için saydığı konumlardan biri."
  - q: "Fırın düğmesini sembole getirdim ama çalışmıyor, neden?"
    a: "Kılavuza göre fonksiyon düğmesiyle birlikte termostat düğmesini de bir sıcaklık değerine getirmen gerekir; aksi hâlde seçtiğin fonksiyon kademesi çalışmaz. Saatli modellerde fırın saatinin de ayarlanmış olması gerekir; mekanik saat düğmesi sıfırdayken fırın çalışmaz."
  - q: "Termostat ışığı yanıp sönüyor, arıza mı?"
    a: "Hayır. Kılavuza göre fırının içi ayarladığın sıcaklığa ulaşınca termostat devreyi keser ve termostat ışığı söner; sıcaklık ayarın altına düşünce termostat yeniden devreye girer ve ışık yanar. Pişirme boyunca ışığın yanıp sönmesi bu yüzden normal."
images:
  coverAlt: "Mutfak dolabına yerleştirilmiş, iki döner düğmeli ankastre bir fırın"
  steps:
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda kullanım kılavuzu ve tablosu"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ankastre fırın, sağda kontrol panelindeki tuş ya da düğme"
---

Vestel fırının fonksiyon düğmesinin etrafında bir sıra küçük sembol var ve hangisinin ne yaptığı çoğu zaman ilk bakışta anlaşılmıyor. Bu semboller rastgele değil: her biri fırının içinde **hangi ısıtıcının ve fanın çalışacağını** gösteriyor. Vestel'in çok modelli ankastre fırın kılavuzunda bu eşleşme **Tablo 2**'de, her fonksiyonun ne için kullanılacağı da ayrı başlıklarda anlatılıyor. Bu yazıda o kılavuzdan sembollerin anlamını ve hangi yemekte hangisinin seçileceğini çıkardık. Kılavuza göre **fonksiyonların varlığı ürün modeline göre değişir;** senin fırınında bazıları olmayabilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sembol hangi ısıtıcının çalışacağını söyler. Statik: alt + üst. Turbo fan: fan + turbo ısıtıcı. Fanlı statik: fan + alt + üst. Grill: ızgara ısıtıcısı. Pizza: fan + alt + turbo. Buz çözme: yalnız fan, pişirmez. Fonksiyonla birlikte termostatı da bir sıcaklığa getir; saatli modelde saat ayarlı olmalı.

## Sembollerin anlamı

Tablo, kılavuzun Tablo 2'sindeki "devreye giren" listesiyle bölüm başlıklarını birleştiriyor. Bütün pişirme konumlarında fırının **operasyon lambası** da yanar.

| Fonksiyon (kılavuzdaki adı) | Devreye girenler | Ne için |
|---|---|---|
| **Buz Çözücü (Defrost)** | Operasyon lambası ve fan | Pişirmez, yalnız buzu çözer |
| **Alt - Üst Isıtıcı (Statik)** | Alt ve üst ısıtıcılar | Kek, börek, lazanya, pizza |
| **Turbo Fan** | Fan ve turbo ısıtıcı | Birden çok yemek aynı anda |
| **Fan ve Alt - Üst (Fanlı Statik)** | Fan, alt ve üst ısıtıcılar | Hamur işleri, tek tepsi |
| **Grill** | Izgara ısıtıcısı | Üstünü pişirme, kızartma |
| **Grill ve Tavuk Çevirme** | Izgara ısıtıcısı ve tavuk çevirme | Izgara, tavuk ve şiş |
| **Grill ve Fan** | Fan ve ızgara ısıtıcısı | Büyük et parçaları |
| **Grill, Tavuk Çevirme ve Fan** | Fan, ızgara ısıtıcısı ve tavuk çevirme | Daha geniş yüzeyde ızgara |
| **Grill + üst ısıtıcı + çevirme** (fanlı ve fansız iki konum) | Izgara ve üst ısıtıcılar, tavuk çevirme; birinde fan da | Hızlı, geniş yüzeyli ızgara |
| **Turbo Fan ve Alt Isıtıcı** | Fan, alt ve turbo ısıtıcılar | Pizza |

## Adım adım: sembolü doğru kullanmak

**1. Düğme gömme tip mi.** Bazı modellerde düğmeler **PIPO** tip: üzerine basınca açık konuma çıkar, tekrar basınca panele gömülür. Kılavuza göre fırını kumanda etmek için **düğme açık konumda** olmalı. Bu modellerde fonksiyon ve termostat **sembolleri panelde değil, düğmenin üzerinde** yer alıyor. Fırın çalıştığı sürece ışıklı düğmeler önde kalır; geri gömmek için önce düğmeleri sıfır konumuna getirmek gerekir. Kılavuzun uyarısı: düğmeleri **fırının fişini çekmeden** çıkarma.

**2. Sembolü tabloyla eşleştir.** Fonksiyon düğmesi, fırın fonksiyonlarını seçmeni sağlar. Sembolün çizimi modele göre değişebilir; senin düğmendeki işaretin hangi fonksiyon olduğunu kılavuzunun **Tablo 2**'sinden doğrula ve yukarıdaki tabloyla hangi ısıtıcının çalıştığına bak.

**3. Termostatı da çevir.** En sık karışan nokta bu. Kılavuza göre fonksiyon düğmesiyle birlikte **termostat düğmesini de bir sıcaklık değerine** getirmen gerekir; **aksi hâlde seçtiğin fonksiyon kademesi çalışmaz.** Fırının içi ayarladığın sıcaklığa ulaşınca termostat devreyi keser ve **termostat ışığı söner;** sıcaklık düşünce yeniden yanar. Pişirme boyunca ışığın yanıp sönmesi normal.

**4. Saat ayarlı mı.** Saatli modellerde kılavuzun genel uyarısı geçerli: pişirme için fonksiyon ve sıcaklık düğmelerinin ayarlanması **ve fırın saatinin programlanması** gerekir, aksi durumda fırın çalışmaz. Mekanik saatli modellerde saat düğmesi **sıfırdayken fırın çalışmaz;** sürekli çalışma için düğme M konumuna getirilir.

**5. Yemeğe göre seç.** Kılavuzun önerileri: **statik** pişirmede yaklaşık **10 dakika ön ısıtma;** kek, pandispanya, börek, fırında makarna, lazanya ve pizza için. **Turbo fan** ısıyı eşit yayar ve birden çok yemeği aynı anda pişirmeye uygundur; iki tepsiyle pişirirken iki yemeğin önerilen sıcaklıklarından **düşük olanı** seç, ilave süre gerekir. **Fanlı statik** hamur işlerinde iyi sonuç verir, **tek tepsi** içindir. **Grill** konumlarında kapak **kapalı,** fırın sıcaklığı **190 °C,** yaklaşık **5 dakika** ön ısıtma; altta tepsi yağı toplar. **Buz çözmede** yiyecek alttan üçüncü raftaki tel rafa, suyu toplamak için alt rafa bir tepsi konur.

**6. Bitince kapat.** Her fonksiyon başlığının son cümlesi aynı: pişirme bitince **fonksiyon düğmesini ve termostat düğmesini kapat, varsa saat programını iptal et.** Yemeği güvenli bir yere al, fırın kapağını açık tutarak fırının tamamen soğumasını bekle; bu sırada çocukları uzak tut.

## İlk kullanımda koku

Kılavuza göre fırını ilk çalıştırdığında yalıtım malzemeleri ve ısıtıcılardan kaynaklanan bir koku yayılır. Bunun için fırını kullanmadan önce **en yüksek sıcaklıkta yaklaşık 45 dakika boş** çalıştır ve mutfağı iyi havalandır.

## Ne zaman servis

- Termostat ve saat doğru olduğu hâlde seçtiğin fonksiyonda fırın ısınmıyorsa: kontrol sırası [Vestel fırın ısınmıyor](/blog/vestel-firin-isinmiyor/) yazısında
- Fan ya da tavuk çevirme sembolü seçildiği hâlde dönmüyorsa
- Düğmeler takılıyor ya da tepki vermiyorsa: [Vestel fırın tuşları çalışmıyor](/blog/vestel-firin-tuslari-calismiyor/)

⛔ **Kendin-çöz sınırı burada biter.** Düğmeler, saat, raflar ve tepsiler sende; ısıtıcılar, fan motoru, termostatın kendisi ve kablolar Vestel yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Fırının modeli ne?
2. Hangi sembolde sorun var, diğerleri çalışıyor mu?
3. Termostat ışığı yanıyor mu?
4. Saat ayarlı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Eşit pişmeyen yemekler için [fırın eşit pişirmiyor](/blog/firin-esit-pisirmiyor/) yazısına bak. Bil, gör, çağır.
