---
title: "King robot süpürge kurulumu: istasyon, şarj ve uygulama"
description: "King KRS360 Sebastian robot süpürge kurulumu: istasyonun yeri, ilk şarj, açma, KINGHOME uygulaması ve Wi-Fi, su tankı. King kılavuzuna göre sıra."
slug: "king-robot-supurge-kurulumu"
date: "2026-10-24"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X5, çatal C). origin/main (7481159) content/blog/'da "king" slug'ı ya da başlığı yok
#   ("king" yalnız başka kelimelerin içinde: parking, booking vb.); genel robot-supurge-* yazıları King kurulum sorgusunu karşılamıyor.
# Arama kanıtı (#164, bu koşu 24 Eki, suggestqueries hl=tr gl=tr): "king robot süpürge k" → 1. "king robot süpürge kurulumu", 2. "king sebastian robot süpürge kurulumu",
#   3. "king sebastian robot süpürge kullanımı"; "king robot süpürge" → 2. "…uygulaması", 5. "…kurulumu". GSC: "king" satırı yok.
# Belge (#88). Zincir: https://www.king.com.tr/pages/dokumanlar (curl 200 12:47; sonraki curl denemeleri 429 rate limit; 13:02 yerleşik tarayıcıda fetch 200, sayfada "KRS360 Sebestian" ve PDF adı var)
#   → https://cdn.shopify.com/s/files/1/0656/1382/4241/files/KRS360_Kullanma_compressed.pdf?v=1761302809 (200, application/pdf)
#  (K) King KRS360 Sebastian Robot Süpürge kullanma kılavuzu, TR, 28 s., md5 ecaf937abb37a754a9dcac73ad99dab0 — s.2, s.6–19, s.23
#  PDF'te metin katmanı yok; metin tesseract (tur) OCR ile okundu, s.23 sorun giderme tablosu sayfa görüntüsünden okundu.
# BİLEREK YAZILMAYANLAR: uygulama içi menüler ve ekran adları (kılavuzda yalnız adım başlıkları var) · 2,4 GHz koşulu (King kılavuzunda yazmıyor) · pil değişimi (kılavuz: yalnız kalifiye kişi) · fiyat (#46).
# Alıntı denetimi: king-robot-supurge-kurulumu.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (ilk şarj süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Robotun kullanma kılavuzu", "Akıllı telefon", "Ev Wi-Fi adı ve şifresi", "Saf ya da yumuşatılmış su"]
steps:
  - "Temizlenecek alanı hazırla: kabloları, küçük eşyaları ve alçak nesneleri kaldır, kilim püsküllerini altına katla."
  - "Bağlantı istasyonunu duvara dayalı koy; iki yanında yarım metre, önünde bir buçuk metre boşluk bırak, adaptörü istasyona ve prize tak."
  - "İlk kullanımdan önce güç düğmesi açıkken robotu sekiz saatten uzun şarj et; gösterge sabit yanınca şarj tamamdır."
  - "Robotu güç düğmesinden aç; düğme ışığı yanar ve bir ikaz sesi duyulur."
  - "KINGHOME uygulamasını indir, kaydol ve giriş yap."
  - "Robottaki temizlik düğmesini ikaz sesi duyana kadar basılı tut, uygulamada cihazı ekleyip Wi-Fi şifresini gir ve AP modunu seç."
  - "Paspas kullanacaksan su tankını doldur, ıslak bezi tanka yapıştır ve tankı robota geri tak."
  - "Robottaki temizlik düğmesine bir kez basarak ilk otomatik temizliği başlat."
faq:
  - q: "King robot süpürgeyi ilk kaç saat şarj etmeliyim?"
    a: "KRS360 Sebastian kılavuzu ilk kullanım için sekiz saatten daha uzun şarj etmeni ve şarj sırasında güç düğmesini açık tutmanı istiyor. Teknik özellikler tablosunda normal şarj süresi 5–6 saat, çalışma süresi 120–140 dakika olarak veriliyor."
  - q: "King robot süpürge Wi-Fi'ya bağlanmıyor, ne yapmalıyım?"
    a: "Kılavuzun sorun giderme tablosu dört neden sayıyor: ev Wi-Fi adı ya da şifresi yanlış, robot Wi-Fi kapsama alanında değil, ağ ayarı robot hazır olmadan yapılmış ya da telefonun işletim sistemi eski. Ağ ayarı için güç düğmesini aç, robottaki düğmeyi 3 saniyeden uzun basılı tut; robot bir müzik çalıp düğmesi yavaşça yanıp söndüğünde ağ ayarına hazırdır. Uygulama iOS 9.0 ve Android 4.0 ile bunların daha yeni sürümlerinde çalışıyor."
  - q: "Bağlantı istasyonunu nereye koymalıyım?"
    a: "Kılavuza göre istasyon duvara dayanmalı, iki yanında 0,5 metre, önünde 1,5 metre boşluk olmalı ve üzerine hiçbir nesne konmamalı. Robot pil zayıfladığında istasyonu kendisi bulur."
  - q: "Su tankına ne koymalıyım?"
    a: "King, su tankının ömrünü uzatmak için saf su ya da yumuşatılmış su öneriyor. Paspas işlevini halı ve kilim üzerinde kullanma; paspaslama bitince su tankını temizle."
  - q: "Robot temizliğe başlamıyor, kurulumda bir şey mi atladım?"
    a: "Tablonun ilk satırına göre robot çalışmıyorsa ya AÇIK değildir ya da pili tamamen bitmiştir; çözüm robotu açmak ve adaptörle şarj etmek. Şarj olmuyorsa robotun şarj temas noktalarının istasyonun pimlerine değdiğinden emin ol, iki taraftaki temas noktalarını temizle."
images:
  coverAlt: "Duvar dibine yerleştirilmiş bir şarj istasyonu ve önünde, boş bir zeminde duran yuvarlak robot süpürge"
  steps:
    - "Çizim: solda robot süpürge, sağda anten girişi ve kablo"
    - "Çizim: solda robot süpürge, sağda prizden çekilen fiş"
    - "Çizim: solda robot süpürge, sağda şarj edilen batarya"
    - "Çizim: solda robot süpürge, sağda çalışma sesi"
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda robot süpürge, sağda su ya da toz haznesi"
    - "Çizim: solda robot süpürge, sağda kontrol panelindeki tuş ya da düğme"
---

King'in **KRS360 Sebastian** robot süpürgesini kutudan çıkardın; şimdi istasyonu nereye koyacağını, ilk şarjın ne kadar süreceğini ve telefona nasıl bağlanacağını bilmek istiyorsun. King'in Türkçe kullanma kılavuzu bunları "Çalıştırma ve Programlama" bölümünde adım adım veriyor. Bu yazı o sırayı izliyor; kılavuzun metin katmanı olmadığı için alıntılar sayfa görüntüsünden okundu.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Odayı topla → istasyonu duvara dayalı koy (yanlarda 0,5 m, önde 1,5 m boş) → güç düğmesi açık, ilk şarj 8 saatten uzun → aç → KINGHOME uygulaması → düğmeyi ikaz sesine kadar basılı tut, AP modu → su tankı ve bez → tek basışla ilk temizlik.

## Kılavuzda geçen parçalar

| Parça | Kılavuzdaki adı |
|---|---|
| Robot | KRS360 Sebastian, 2600 mAh Li-ion pil |
| İstasyon | Bağlantı İstasyonu (KCH217) |
| Paspas | Su tankı ve temizlik bezi |
| Fırçalar | Sol fırça ve sağ fırça |
| Kumanda | Uzaktan kumanda |

Kılavuzun özellik tablosuna göre emiş gücü 2200 Pa, şarj süresi 5–6 saat, çalışma süresi 120–140 dakika, temizleme alanı 130–150 m².

## Adım adım: kutudan ilk temizliğe

**1. Alanı hazırla.** King temizlikten önce masa, sandalye ve diğer nesneleri en geniş alanı sağlayacak biçimde düzenlemeni istiyor. Robotun temizliğini etkileyebilecek tartı, fan kaidesi gibi alçak nesneleri kaldır; zemindeki güç kablolarını ve küçük nesneleri topla. Kilim püskülleri kilimin altına katlanmalı. Düşme olabilecek kenarlara fiziksel bariyer gerekebilir; ayna ya da cam gibi güçlü yansıtıcı yüzeyler temizliği olumsuz etkiler.

**2. İstasyonu yerleştir.** Bağlantı İstasyonunu **duvara dayayıp** üzerine hiçbir nesne koyma. Kılavuzdaki mesafe: **iki yan tarafta 0,5 metre, önde 1,5 metre.** Adaptörü istasyona ve prize tak. Robot pil zayıfladığında istasyonu otomatik olarak bulacak.

**3. İlk şarjı yap.** Şarj sırasında **güç düğmesi açık olmalı.** Elle şarj için adaptörü robota ve prize takabilirsin. Gösterge ışığı yanıp sönüyorsa robot şarj oluyor; **sabit yanması şarjın tamamlandığını** gösteriyor. King ilk kullanım için **8 saatten daha uzun** şarj etmeni istiyor.

**4. Robotu aç.** Robotu düğmesinden aç. Düğmenin ışığı yanar ve bir ikaz sesi duyulur; kılavuza göre bu, cihazın başarıyla açıldığını gösterir.

**5. KINGHOME uygulamasını kur.** Kılavuzdaki QR kodu tarat ya da uygulama mağazasında **"KİNGHOME"** uygulamasını arayıp indir. Uygulamayı açıp kaydol ve giriş yap. Kılavuza göre aynı kablosuz ağ için iki kez bağlanmaya gerek yok; Android ve iOS destekleniyor.

**6. Wi-Fi bağlantısını yap.** Güç düğmesini aç, ardından robottaki temizlik düğmesini **bir ikaz sesi duyana kadar basılı tut**; robot kablosuz ağ ayar moduna girer. Uygulamada sıra şöyle: cihazı ekle → "Küçük Ev Aleti" altında "Elektrikli Robot Süpürge"yi seç → ev Wi-Fi şifresini gir → **AP modunu** seç → düğmeyi ikaz sesine kadar basılı tut → "Sonraki" → "Go to connect" ile telefonun Wi-Fi listesinden **SmartLife-XXXX** noktasını seç → uygulamaya dönüp bağlanmayı bekle. XXXX kısmı her robotta farklı.

**7. Paspası hazırla.** Su tankını çıkar, kapağını açıp su doldur, kapağı kapat. Bezi ıslatıp yapıştır, bezi tanka tak ve tankı geri tak. King, tankın ömrünü uzatmak için **saf ya da yumuşatılmış su** öneriyor. Kilim üzerindeyken paspas işlevini kullanma. Robotu kaldırırken **su tankı serbest bırakma düğmesine basma**, yoksa robot düşer.

**8. İlk temizliği başlat.** Robottaki temizlik düğmesine **bir kez** bas; robot otomatik zikzak temizliğe başlar ve bitince başlangıç yerine döner. Tek oda temizlenecekse kapıyı kapat. Robotu yerinden oynatma; aksi halde rotaya baştan başlar. Kılavuzdaki beklemeye alma düğmesine (Şekil 2) bir kez basınca robot durur, tekrar basınca kaldığı yerden devam eder.

## Wi-Fi bağlanmıyorsa

Kılavuzun sorun giderme tablosundaki "Robot, ev Wi-Fi ağına bağlanamıyor" satırı:

| Olası neden | Çözüm |
|---|---|
| Wi-Fi adı ya da şifresi yanlış | Doğru adı ve şifreyi gir |
| Robot kapsama alanında değil | Robotu Wi-Fi sinyalinin kapsadığı alana al |
| Ağ ayarı robot hazır olmadan yapılmış | Güç düğmesini aç, düğmeyi 3 saniyeden uzun basılı tut; müzik çalıp düğme yavaşça yanıp sönünce hazır |
| Telefonun işletim sistemi eski | Güncelle; uygulama iOS 9.0 ve Android 4.0 ve üstünde çalışıyor |

Programlı temizliği de uygulamadan kuruyorsun: Ayarlar → zaman ayarı (timer) → ayarla ve kaydet. Emiş ayarı da uygulamanın ayarlar bölümünde.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Yerleşim, şarj, uygulama, su tankı | Senin, bu yazıdaki adımlar |
| Şarj olmuyor | Önce temas noktalarını temizle; bkz. [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/) |
| Pil değişimi | Kılavuza göre yalnız kalifiye kişi; King Müşteri Hizmetleri |
| Kablo ya da istasyon hasarlı | Kullanma; üretici ya da yetkili servis |

⛔ King'in uyarısı açık: tablodaki çözümler işe yaramazsa satış sonrası hizmet birimine başvur, makineyi kendin sökme. Haritalama ve rota sorunları için [robot süpürge haritalama sorunu](/blog/robot-supurge-haritalama-sorunu/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Kurulum, şarj, uygulama, su tankı ve sorun giderme bilgileri King'in KRS360 Sebastian Robot Süpürge Türkçe kullanma kılavuzundan (king.com.tr Kullanım Kılavuzları sayfası) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
