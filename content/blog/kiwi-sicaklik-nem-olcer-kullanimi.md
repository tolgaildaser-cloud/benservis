---
title: "Kiwi sıcaklık nem ölçer kullanımı: KBABY-90 ve KBABY-92"
description: "Kiwi Baby KBABY-90 ve KBABY-92 sıcaklık ve nem ölçer kılavuzuna göre pil takma, °C/°F geçişi, min-maks bellek, konfor simgeleri, saat ayarı ve temizlik."
slug: "kiwi-sicaklik-nem-olcer-kullanimi"
date: "2026-10-25"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ yazı alt ajanı (YK #182 Dalga 8, küme Z1, çatal A). Konu: origin/main 829cec5'te slug grep'i "nem-olcer|higrometre|termometre" boş, başlık grep'i "nem ölçer|higrometre" boş. Dalga 6/7/8'de sıcaklık-nem ölçer yazısı yok.
# GSC: ~/Downloads/https___www-3..6/Sorgular.csv içinde "kiwi", "nem ölçer" satırı YOK.
# Arama kanıtı (#164, bu koşu 25 Eki, suggestqueries hl=tr gl=tr; _kaynak/ot.tsv): "kiwi sıcaklık nem ölçer" → 1. kiwi baby sıcaklık nem ölçer · 2. kiwi sıcaklık ve nem ölçer;
#   "kiwi nem ölçer" → 1. kendisi · 3. kiwi baby nem ölçer · 4. kiwi baby sıcaklık nem ölçer; "kiwi termometre" → 4. kiwi baby termometre · 6. kiwi oda termometre.
# Belgeler (#88): kiwi.com.tr ürün sayfaları HTTP 200, PDF adları sayfada 2 kez; PDF'ler static.kiwi.com.tr HTTP 200 application/pdf, A4 yatay çok sütunlu föy, 2 s.
#  (A) KBABY-90 md5 e85ca90a3efeff23816cd755ba4a3987 (TR sütunu s.1; garanti s.2 "Ürünün Cinsi: Sıcaklık ve Nem Ölçer")
#  (B) KBABY-92 md5 6f5123398a42e3744e260f29a88fccd6 (TR sütunu s.1)
#  TR metni pdftotext -bbox-layout blok ayıklamasıyla ve -x/-y kırpmasıyla çıkarıldı (_kaynak/pdf/txt/KBABY-90.TR.txt, KBABY-92.TR.txt).
# Belge sorunları: KBABY-92'nin saat/alarm tarifi Türkçe ve İngilizce bölümlerde aynı biçimde bozuk; yalnız açık olan tuş işlevleri yazıldı. KBABY-92 "Sıcaklık çözünürlüğü: %1" satırı nem çözünürlüğü olmalı (çıkarım). KBABY-90 pil "dahil", KBABY-92 "dahil değildir".
# Sağlık notu: oda için ideal değer önerisi YAZILMADI; yalnız cihazın kendi simge eşikleri aktarıldı.
# BİLEREK YAZILMAYANLAR: kalibrasyon (kılavuzda yok) · kasa açma (#31) · fiyat (#46).
# Alıntı denetim tablosu: kiwi-sicaklik-nem-olcer-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["AAA 1,5V pil", "Kuru bez", "Hafif nemli bez"]
steps:
  - "Cihazı kutusundan çıkar, etiket, koruyucu folyo ve plastikleri sök."
  - "Pil bölmesi kapağını aç, AAA pili artı ve eksi işaretlerine göre tak, kapağı kapat."
  - "KBABY-90 pil takılınca kendiliğinden çalışır; ölçeri ısı kaynaklarından ve ıslak ortamdan uzak bir yere koy."
  - "Birim düğmesine kısa basarak °C ile °F arasında geç."
  - "KBABY-90'da düğmeye uzun basarak kayıtlı en düşük ve en yüksek değerleri sil; KBABY-92'de bellek tuşunu kullan."
  - "Ekrandaki kuru, konfor ve ıslak simgelerini kılavuzdaki nem ve sıcaklık eşiklerine göre oku."
  - "Temizlikten önce pili çıkar, cihazı yalnız kuru ya da hafif nemli bezle sil, suya batırma."
faq:
  - q: "Kiwi nem ölçer ekranındaki simgeler ne demek?"
    a: "KBABY-90 kılavuzuna göre nem yüzde 30'un altındaysa Kuru, yüzde 60'ın üzerindeyse Islak simgesi çıkar. Nem yüzde 30 ile 60 arasında ve sıcaklık 20–26°C arasındaysa Konfor simgesi görünür. Bu koşulların hiçbiri sağlanmıyorsa simge gösterilmez."
  - q: "Ekran ne sıklıkla güncellenir?"
    a: "KBABY-90'ın teknik verilerinde yenileme hızı 10 saniye yazıyor. Sıcaklık çözünürlüğü 0,1°C, nem aralığı yüzde 10–99, sıcaklık aralığı −50°C ile 70°C arası."
  - q: "Kayıtlı en yüksek ve en düşük değerleri nasıl silerim?"
    a: "KBABY-90'da °F/°C düğmesine kısa basınca birim değişir, uzun basınca kayıtlı en düşük ve en yüksek sıcaklık ile nem silinir. KBABY-92'de bu iş bellek (MEMORY) tuşuyla yapılır; kılavuz tuşa basılınca en yüksek ve en düşük değerlerin silinebildiğini yazıyor."
  - q: "Pil kutudan çıkıyor mu?"
    a: "KBABY-90'da 1 adet AAA 1,5V pil gerekli ve kılavuz pilin dahil olduğunu yazıyor. KBABY-92'de de AAA 1,5V pil kullanılıyor ama kılavuzu pilin dahil olmadığını belirtiyor."
  - q: "Cihazı uzun süre kullanmayacaksam ne yapmalıyım?"
    a: "KBABY-90 kılavuzu dört aydan uzun saklanacaksa pilin çıkarılmasını istiyor. Temizlik ve bakım bölümü de cihaz kullanılmadığında pillerin çıkarılmasını ve çocukların erişemeyeceği yerde saklanmasını yazıyor."
images:
  coverAlt: "Bebek odasındaki bir rafta duran küçük beyaz dijital sıcaklık ve nem ölçer"
  steps:
    - "Çizim: solda sıcaklık ve nem ölçer, sağda ambalaj kutusu"
    - "Çizim: solda sıcaklık ve nem ölçer, sağda kumandanın pilleri"
    - "Çizim: solda sıcaklık ve nem ölçer, sağda kumandanın pilleri"
    - "Çizim: solda sıcaklık ve nem ölçer, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda sıcaklık ve nem ölçer, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda sıcaklık ve nem ölçer, sağda panel ekranındaki uyarı"
    - "Çizim: solda sıcaklık ve nem ölçer, sağda kumandanın pilleri"
---

Kiwi Baby'nin iki sıcaklık ve nem ölçeri var. KBABY-90 yalnız sıcaklık ve nem gösteren, mıknatıslı küçük bir ekrandır. KBABY-92 bunlara saat, günlük alarm ve takvim ekler. İkisi de AAA pille çalışır. Bu yazıdaki adımlar iki modelin Kiwi kılavuzlarının Türkçe sütunundan alındı. Önce en sık sorulan şey, birim ve bellek düğmesi: KBABY-90 kılavuzu düğme için **"°C ve °F arasında geçiş yapmak için kısa basın Kaydedilen Min&Maks sıcaklık ve nemi silmek için uzun basın."** diyor.

> ⚡ **Kısa özet:** Pili işaretlere göre tak; KBABY-90 kendiliğinden çalışır. Birim düğmesine kısa bas, °C/°F değişir; uzun bas, en düşük ve en yüksek kayıt silinir. Kuru, konfor ve ıslak simgeleri cihazın kendi nem ve sıcaklık eşiklerine göre yanar. Temizlikte pili çıkar, yalnız bezle sil, suya batırma.

## İki model ve kılavuzdaki değerler

| | KBABY-90 | KBABY-92 |
|---|---|---|
| Gösterge | Mevcut nem, en düşük/en yüksek nem, şu anki sıcaklık, en düşük/en yüksek sıcaklık | Sıcaklık/nem ekranı, en düşük/en yüksek bellek, saat, alarm, takvim |
| Sıcaklık aralığı | −50°C ~ 70°C | −10°C ~ +50°C |
| Nem aralığı | %10 ~ %99 | %10 ~ %99 RH |
| Çözünürlük | Sıcaklık 0,1°C | Sıcaklık 0,1°C |
| Yenileme | 10 saniye | Kılavuzda yok |
| Pil | 1 adet AAA 1,5V (dahil) | AAA 1,5V (dahil değil) |
| Diğer | Mıknatıs, °F/°C/ayar düğmesi | MODE, SET, ADJ, BELLEK, °C/°F tuşları; 12/24 saat |

KBABY-92'nin nem doğruluğu ±%5 RH olarak veriliyor. Aynı tabloda "Sıcaklık çözünürlüğü: %1" satırı ikinci kez geçiyor; yüzde birimiyle verildiği için bunun nem çözünürlüğü olması gerekir (çıkarım).

## Adım adım: pil, birim, bellek ve temizlik

**1. Kutudan çıkar.** Cihazı ve aksesuarları kutusundan çıkar. Cihazdaki etiketleri, koruyucu folyoyu ve plastiği sök.

**2. Pili doğru yönde tak.** Pil bölmesi kapağını çıkar. KBABY-92'de kapak, cihazın arkasında gösterilen yöne itilerek açılır. Pili takarken artı ve eksi işaretlerine dikkat et, sonra kapağı kapat.

**3. Çalıştır ve yerleştir.** KBABY-90 pil takılınca kendiliğinden çalışmaya başlar. Ölçeri soba ve diğer ısı kaynaklarından uzak tut; kılavuz ısının plastik parçaları deforme edebileceğini yazıyor. Ürün su geçirmez değildir, nemli ve ıslak ortamlarda bulundurulmaz. KBABY-90'ın parça şemasında mıknatıs da var, yani metal bir yüzeye tutturulabilir (çıkarım).

**4. Birimi seç.** KBABY-90'da °F/°C/ayar düğmesine kısa basınca birim °C ile °F arasında değişir. KBABY-92'de °C/°F tuşu sıcaklığın ekranda Santigrat ya da Fahrenheit olarak gösterilmesini sağlar.

**5. Bellek değerlerini oku ve sil.** KBABY-90 ekranında en düşük ve en yüksek nem ile sıcaklık ayrı bölümlerde görünür. Aynı düğmeye uzun basınca kayıtlı en düşük ve en yüksek değerler silinir. KBABY-92'de BELLEK (MEMORY) tuşu bellekteki en yüksek ve en düşük sıcaklık ile nemi gösterir; kılavuza göre tuşa basılınca bu değerler silinebilir.

**6. Simgeleri oku.** KBABY-90'ın simgeleri cihazın kendi eşiklerine göre yanar. Nem yüzde 30'un altındaysa Kuru simgesi çıkar. Nem yüzde 30 ile 60 arasında ve sıcaklık 20–26°C arasındaysa Konfor simgesi görünür. Nem yüzde 60'ın üzerindeyse Islak simgesi yanar. Hiçbir koşul sağlanmıyorsa simge yoktur. Bu eşikler cihazın gösterim kuralıdır; oda için bir öneri değildir.

**7. Pili çıkar, bezle temizle.** Temizlemeden önce cihazın kapalı olduğundan emin ol ve pilleri çıkar. Dışını kuru bir bezle ya da hafif nemli bir bezle sil; aşındırıcı temizleyici, bulaşık süngeri ya da bulaşık teli kullanma. Temizleme sıvısı elektroniğe zarar verebilir. Cihazı suya ya da başka bir sıvıya batırma.

## KBABY-92'de saat ve alarm

KBABY-92 kılavuzunun saat bölümü Türkçe ve İngilizce baskıda aynı biçimde karışık yazılmış. Açıkça anlaşılan kısım şu:

- MODE tuşunu 2 saniye basılı tutunca saatin dakika hanesi yanıp sönmeye başlar; SET tuşu yanıp sönen değeri değiştirir.
- MODE'a art arda basarak saat, 12/24 saat sistemi, ay ve gün ayarlarına geçilir.
- Saat modunda ADJ tuşu alarm ile güncel saat gösterimi arasında geçiş yapar.
- Alarm modunda hiçbir tuşa basılmazsa bir dakika içinde güncel saate dönülür.

Bunların dışındaki ayrıntılar için cihazın kendi kutusundaki föye bak.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Ekran boş | Senin; pil yönünü kontrol et, yeni AAA pil tak |
| Birim yanlış | Senin; birim düğmesine kısa bas |
| Eski en düşük/en yüksek değerler kaldı | Senin; KBABY-90'da uzun bas, KBABY-92'de bellek tuşu |
| Cihaz düzgün çalışmıyor, suya düştü | Yetkili servis |

⛔ Gövdeyi açma. Kılavuz cihaz düzgün çalışmıyorsa yetkili bir servis acentesine başvurulmasını istiyor.

Odanın nemini artırmak için kullandığın cihazda sorun varsa [Kiwi hava nemlendirici buhar vermiyor](/blog/kiwi-hava-nemlendirici-buhar-vermiyor/) yazısına, odayı uzaktan izlemek için [Kiwi bebek kamerası kurulumu](/blog/kiwi-bebek-kamerasi-kurulumu/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Parça adları, teknik değerler, pil bilgisi, tuş işlevleri, simge eşikleri ve temizlik kuralları Kiwi Baby'nin KBABY-90 ve KBABY-92 kullanım kılavuzlarının Türkçe sütunundan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
