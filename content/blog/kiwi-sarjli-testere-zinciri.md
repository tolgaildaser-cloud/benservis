---
title: "Kiwi şarjlı testere zinciri: takma, gerdirme ve batarya"
description: "Kiwi Garden KGCS-880 ve KGCS-882 şarjlı testere: zincir takma, gerginlik ayarı, batarya şarjı, çalıştırma, temizlik ve zincir yağı. Kiwi kılavuzuna göre."
slug: "kiwi-sarjli-testere-zinciri"
date: "2026-10-25"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı D (YK #182 Dalga 8, küme Z5). Konu: origin/main 829cec5'te "testere|zincir|chainsaw" slug ve "testere|zincir" başlık grep'i boş; gövdede "şarjlı testere|zincirli testere" geçen yazı yok;
#   Dalga 6/7/8 klasörlerinde testere dosyası yok (Z1 kapsamında KGCS yok).
# Kategori: origin/main'de bahçe kategorisi yok; Dalga 7 Garden yazıları gibi "Küçük Ev Aletleri". Teşhis çağrısı yok (#149).
# GSC: Sorgular.csv (www-5, www-6) içinde "kiwi" ya da "testere" satırı YOK.
# Arama kanıtı (#164, 25 Eki 08:50 +03, suggestqueries client=firefox hl=tr gl=tr; _kaynak/ot.tsv): "kiwi şarjlı testere z" → 1. "kiwi şarjlı testere zinciri";
#   "kiwi şarjlı testere b" → 1. "kiwi şarjlı testere bataryası"; "kiwi şarjlı testere" → 4. "…bataryası", 5. "…zinciri", 7. "…kgcs 882".
# Belgeler (#88), bu koşuda curl; ürün sayfaları 200 ve PDF adını 2 kez içeriyor:
#  (A) KGCS-880 Şarjlı Testere kılavuzu, 28 s., md5 53238be3ccc048020837cbdde1a31172 — TR s.12–21
#      https://kiwi.com.tr/tr/kiwi-garden/bahce-bakimi-126-c/bahce-bakimi-1-130-c/kgcs-880-760-pt → https://static.kiwi.com.tr/media/media/2652/files/media_kgcs-880-im-tr_04092026014623_6a9aa17f7619b.pdf
#  (B) KGCS-882 Şarjlı Testere kılavuzu, 28 s., md5 d268a0678133e85ed22670838ebc9d36 — metin A ile aynı, yalnız model adı farklı
#      https://kiwi.com.tr/tr/kiwi-garden/bahce-ve-arac-temizligi-128-c/bahce-ve-arac-temizligi-1-132-c/kgcs-882-761-pt → https://static.kiwi.com.tr/media/media/2658/files/media_kgcs-882-im-tr_04092026021336_6a9aa7e0c42e6.pdf
#  (P) İki ürün sayfasının teknik özellik listesi (aynı değerler).
# #31: zincir bileme yöntemi (kılavuz yalnız "üreticinin talimatı" diyor) · motor ve iç parça · pil değişimi/onarımı → servis. Kılavuzun kullanıcıya bıraktığı zincir takma, gerdirme, temizlik ve yağlama yazıldı.
# BİLEREK YAZILMAYANLAR: zincir yağı haznesinin doldurulması (belgede yok) · yedek pil uyumu (belgede yok) · güvenlik bölümündeki benzinli testere kalıntıları (yakıt deposu cümlesi; ürüne uymuyor) · fiyat (#46).
# Alıntı denetim tablosu: kiwi-sarjli-testere-zinciri.KAYNAK.md
guide:
  difficulty: "Orta"
  time: "~15 dakika (şarj süresi hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Cihazla gelen şarj cihazı", "Koruyucu eldiven", "Koruyucu gözlük", "Boya fırçası", "Zincir yağı"]
steps:
  - "Şarj cihazını prize tak, pil takımını şarj cihazına yerleştir; ışık sürekli yanınca pil doludur."
  - "Eldivenle sıkıştırma somununu gevşet, yan kapağı ve kılavuz plakayı çıkar."
  - "Zinciri, kesici dişler ileri bakacak şekilde kılavuz plakanın yuvasına yerleştir, ayar bloğunu plakanın ucundaki deliğe oturt."
  - "Plakayı ve yan kapağı tak, zincirin dişliye oturduğunu kontrol et."
  - "Ayar vidasını saat yönünde çevirerek zinciri ger; ortadan kaldırınca bir ila üç kılavuz diş görünmeli, sonra somunu sık."
  - "Koruma kapağı takılıyken açma/kapama düğmesine bas, gerekirse kilit düğmesiyle sürekli çalıştır ve iki elle kes."
  - "Zincir durunca boya fırçasıyla temizle, hafifçe zincir yağıyla yağla, gerginliği yeniden kontrol et."
faq:
  - q: "Kiwi şarjlı testerenin zinciri nasıl gerdirilir?"
    a: "KGCS-880 kılavuzuna göre ayar vidasını saat yönünde çevirince zincir gerilir, saat yönünün tersine çevirince gevşer. Ölçü şu: zinciri kılavuz plakanın ortasından elle kaldırdığında bir ila üç orta kılavuz dişi görünmeli. Ayardan sonra vida somununu sık."
  - q: "Zincir neden sürekli gevşiyor?"
    a: "Kılavuz yeni zincirin kullanımın erken aşamasında uzayacağını yazıyor. Gerginliği sık sık kontrol edip ayarlamanı istiyor; gevşek zincir kolayca yerinden çıkar, zincirin ve kılavuz plakanın hızlı aşınmasına yol açar."
  - q: "Kiwi şarjlı testere bataryası kaç saatte dolar?"
    a: "İki kaynak farklı değer veriyor. Kılavuz, standart şarj cihazının tamamen boşalmış pili yaklaşık 4 saatte doldurduğunu yazıyor; ürün sayfası ve kılavuzun teknik özellikler kısmı ise şarj süresini 1,5 saat veriyor. Pil 18V, 1,3Ah lityum; çalışma süresi yaklaşık 15 dakika."
  - q: "Zinciri suyla yıkayabilir miyim?"
    a: "Hayır. Kılavuz zinciri her kullanımdan sonra bir boya fırçasıyla temizlemeni ya da silmeni, temizlik için herhangi bir sıvı kullanmamanı, temizledikten sonra zinciri hafifçe zincir yağıyla yağlamanı yazıyor."
  - q: "Zincir körleşti, kendim bileyebilir miyim?"
    a: "Kılavuz bileme yöntemi vermiyor; yalnız zinciri keskin tutmanı ve üreticinin bileme ve bakım talimatlarını izlemeni, yedek olarak da yalnız üreticinin belirttiği ya da eşdeğer çubuk ve zinciri kullanmanı söylüyor. Yöntem belgede olmadığı için bileme işini yetkili servise bırak."
images:
  coverAlt: "Bahçede kalın dalı kesen, koruyucu gözlük ve eldiven takmış kişi ve küçük şarjlı testere"
  steps:
    - "Masada şarj cihazına takılmış, gösterge ışığı yanan testere pili"
    - "Yan kapağı çıkarılmış küçük testerenin zincir dişlisi ve sıkıştırma somunu"
    - "Kılavuz plakanın yuvasına yerleştirilmiş testere zinciri, kesici dişler ileri bakıyor"
    - "Yan kapağı yerine takılmış, zinciri dişliye oturmuş küçük testere"
    - "Kılavuz plakanın ortasından hafifçe kaldırılmış zincir ve altında görünen kılavuz dişleri"
    - "Testere sapındaki açma kapama düğmesi ve yanındaki kilit düğmesi, yakın plan"
    - "Boya fırçasıyla temizlenen testere zinciri ve yanında küçük zincir yağı şişesi"
---

Kiwi Garden'ın **KGCS-880** ve **KGCS-882** modelleri, ahşap kesme, dal budama ve bambu kesme için yapılmış hafif, şarjlı mini testereler. İki modelin ürün sayfasındaki değerler ve Türkçe kılavuz metni aynı; yalnız model adı farklı. En çok sorulan iki konu zincir ve batarya. Kiwi'nin kılavuzu zinciri takmayı, gerginliği ayarlamayı, şarjı ve temizliği anlatıyor. Bu yazıdaki sıra o metinden. Kılavuzun temel kuralı: **koruma kapağı olmadan asla çalıştırma.**

> ⚡ **Kısa özet:** Pili şarj cihazında doldur; ışık sürekli yanınca hazır. Zinciri kesici dişler ileri bakacak şekilde plakaya tak, ayar vidasını saat yönünde çevirerek ger. Ölçü: zinciri ortadan kaldırınca 1–3 kılavuz diş görünmeli. Yeni zincir uzar, sık kontrol et. Her kullanımdan sonra zinciri sıvı kullanmadan fırçayla temizle, hafifçe zincir yağıyla yağla.

## Değerler ve parçalar

| Özellik | KGCS-880 / KGCS-882 |
|---|---|
| Pil | 18V Li-ion, 1.300 mAh |
| Güç | 600 W |
| Kılavuz pala uzunluğu | 100 mm |
| Yüksüz hız | 2.000 dev/dak |
| Çalışma süresi | Yaklaşık 15 dakika |
| Şarj süresi | Yaklaşık 1,5 saat (ürün sayfası); kılavuzun şarj bölümünde yaklaşık 4 saat |
| Ağırlık | 1,13 kg |

Kılavuzdaki parça listesi: zincir, zincir kılavuz rayı, zincirin koruyucu kapağı, yan sıkıştırma kapağının somunu, yan sıkıştırma kapağı, elektrik motoru, açma/kapama düğmesi, düğme kilidi, kulp, şarj edilebilir pil ve pil kilidi düğmesi.

## Adım adım: zincir, gerginlik ve batarya

**1. Bataryayı şarj et.** Pil takımını takmadan önce şarj cihazını uygun bir prize tak, sonra pil takımını şarj cihazına yerleştir. Yeşil LED yanıp sönerken pil şarj oluyor; sürekli yanık kalınca paket dolmuştur. Kılavuz boşalmış pili kullanımdan sonra mümkün olan en kısa sürede şarj etmeni öneriyor, aksi halde pil ömrü büyük ölçüde azalabilir.

**2. Yan kapağı aç.** Koruyucu eldiven tak; kılavuza göre zincirin kesicileri, zincir hareket etmese bile keser. Sıkıştırma somununu gevşet, yan kapağı çıkar, ardından kılavuz plakayı doğrudan çıkar. Eski zincir varsa bu sırayla sökülür.

**3. Zinciri plakaya yerleştir.** Zinciri önce kılavuz plakaya yükle; zincirin orta kılavuz dişleri plakanın yuvasına otursun. Kılavuzun notu önemli: **zincir bıçağı ileri bakmalı.** Testerede zincir gerginliğini ayarlayan bir düzenek var; plakayı takarken ayar bloğunun plakanın ucundaki konum ayarlama deliğine oturduğundan emin ol.

**4. Plakayı ve kapağı tak.** Plakayı yerine koy, yan kapağı tak. Zincir dişliye takılmış olmalı. Kılavuz kurulumdan sonra bunu yeniden kontrol etmeni istiyor.

**5. Zinciri ger ve somunu sık.** Ayar vidasını saat yönünde çevirdikçe zincir gerilir, saat yönünün tersine çevirdikçe gevşer. Ölçü şu: zinciri kılavuz plakanın ortasından elle kaldırdığında **1–3 orta kılavuz dişi** görünmeli. Ayar bitince vida somununu sık. Yeni zincir kullanımın ilk döneminde uzar; gerginliği sık sık kontrol et, çünkü gevşek zincir kolayca yerinden çıkar ve zincirle plakayı hızlı aşındırır.

**6. Çalıştır ve kes.** Yalnız zincir çubuğu, zincir ve dişli kapağı doğru takılıyken çalıştır; başlamadan önce testerenin hiçbir şeye değmediğinden emin ol. Pilin dolu olduğunu kontrol et, açma/kapama düğmesine bas; sürekli çalıştırmak istersen kilit düğmesine bas. Testereyi iki elle tut, ağırlığını iki ayağına eşit ver, zincirin yere değmemesine dikkat et. Kılavuz ilk kesimden önce bir numune üzerinde alıştırma yapmanı öneriyor. Kesim bitince zincir durmadan testereyi çıkarma.

**7. Temizle ve yağla.** Her kullanımdan sonra zinciri bir boya fırçasıyla temizle ya da sil; **hiçbir sıvı kullanma.** Temizledikten sonra zinciri hafifçe zincir yağıyla yağla. Havalandırma deliklerini ve yüzeyleri fırça ya da kuru bezle temizle. Kavrama kollarında benzin, yağ ya da gres kalmasın; onları sabunlu nemli bezle sil, solvent ya da benzin kullanma.

## Kılavuzdaki iki farklı değer

Şarj süresi için kaynaklar ayrışıyor. Ürün sayfası ve kılavuzun teknik özellikler kısmı **1,5 saat** yazıyor; kılavuzun "Pili şarj etmek" bölümü ise standart şarj cihazının tamamen boşalmış pili **yaklaşık 4 saatte** doldurduğunu söylüyor. Hangisinin geçerli olduğunu belge açıklamıyor. Şarjın bittiğini süreye göre değil, gösterge ışığının sürekli yanmasına göre anla (çıkarım).

Kılavuz ayrıca cihazın zincirin otomatik yağlanmasını sağladığını yazıyor, ama yağ haznesinin nasıl doldurulacağını anlatmıyor. Temizlik bölümündeki elle yağlama talimatı açık; bu yazı yalnız onu veriyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Zincir gevşedi | Senin; adım 5 |
| Zincir kirli, kesim yavaşladı | Senin; temizle ve yağla |
| Zincir körleşti | Kılavuz bileme yöntemi vermiyor; yetkili servis |
| Zincir ya da plaka hasarlı | Yalnız üreticinin belirttiği ya da eşdeğer parça; emin değilsen servis |
| Cihaz düzgün çalışmıyor | Kapat, yetkili servis acentesine başvur |

⛔ Kılavuz kesim alanında elektrik kablosu varsa dikkatli olmanı, geri tepme yapabilecek pozisyonlardan kaçınmanı ve testereyi tek elle kullanmamanı istiyor. Aynı serinin şarjlı çit aleti için [Kiwi şarjlı çit kesme makinesi](/blog/kiwi-sarjli-cit-kesme-makinesi/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Zincir montajı, gerginlik ayarı, şarj, kullanım ve temizlik talimatları Kiwi Garden'ın Türkçe KGCS-880 ve KGCS-882 Şarjlı Testere kılavuzlarından; teknik değerler Kiwi'nin iki ürün sayfasından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
