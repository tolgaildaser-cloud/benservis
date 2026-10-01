---
title: "Electrolux bulaşık makinesi temiz yıkamıyor"
description: "Electrolux bulaşık makinesi temiz yıkamıyorsa: üç parçalı filtre, alt ve üst püskürtme kolu, yerleştirme, yoğun program ve ExtraPower. Electrolux'un sırası."
slug: "electrolux-bulasik-makinesi-temiz-yikamiyor"
date: "2026-10-01"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi, HTTP 200, application/pdf.
# (Düz -A "Mozilla/5.0" ile electrolux.com.tr 000/zaman aşımı veriyor.) #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · sayfa = PDF sayfası (= basılı sayfa no).
#  (D) Electrolux ESM89400SX bulaşık makinesi kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/b2ae98c1-3fd9-40a1-83fc-72a427d6db65/E4RM3Q/103f2880-7d03-46f7-bfd7-8755d9984a60/ORIGINAL/103f2880-7d03-46f7-bfd7-8755d9984a60.pdf  32 s.  md5 e37f3fbbf7c05e07671a8ea7be8b21b1
# Tablo (D s.24, 12.1) "Yetersiz yıkama sonuçları.": "'Günlük kullanım', 'İpuçları ve yararlı bilgiler' bölümlerine ve sepet yerleştirme broşürüne bakın." · "Daha yoğun yıkama programları kullanın."
#   · "Seçilmiş programda daha iyi yıkama sonuçları almak için ExtraPower seçeneğini etkinleştirin." · "Püskürtme kollarındaki delikleri ve filtreyi temizleyin. 'Bakım ve Temizlik' bölümüne bakın."
# Diğer: D s.18 11 "Bakım işleminden önce, cihazı devre dışı bırakın ve fişi prizden çıkarın." + "Kirli filtreler ve tıkalı püskürtme kolları yıkamadan alınacak sonucu kötüleştirir." + uzun programları ayda en az iki kez
#   · D s.19-20 11.4 filtre (A yassı, B, C; B saat tersi çıkar; C'yi B'den çıkar; A'yı çıkar; yıka; hazne kenarı; A'yı 2 kılavuzun altına; B+C tak; B'yi kilitlenene kadar saat yönünde) + yanlış konum uyarısı
#   · D s.20 11.5 alt kol (yukarı çek; akan su altında yıka; aşağı bastırarak tak) · D s.20-21 11.6 üst kol (üst sepeti çıkar; yukarı çek + saat yönünde çevir; yıka; yukarı bastır + saat tersi kilitle)
#   · D s.10 6.2 ExtraPower (yıkama sıcaklığını ve süresini artırır; seçenek program başlamadan etkinleştirilir) · D s.16-17 10.1 ipuçları (büyük kalıntıyı temizle, elle ön durulama yapma, yapışmışı ıslat, birbirine temas etmesin)
#   · D s.17 10.2 tabletler kısa programlarda tamamen çözünmez; yetersiz deterjan → kötü temizleme · D s.17-18 10.4/10.5 (kolların tam tur dönmesi; filtreler temiz/doğru; tuz kapağı sıkı; kollar tıkalı değil)
#   · D s.24-25 tablo "Programın sonunda deterjan gözünde deterjan kalıntıları var" · D s.24 tanımsız alarm kodu → servis · D s.18 11.2 yabancı madde çıkarılamıyorsa servis · D s.2 Model, PNC, Seri No
# BİLEREK YAZILMAYANLAR: delikler için kürdan gibi sivri uçlu alet (D s.20-21) → alet kuralı, numaralı adımlara alınmadı · tavan püskürtme kolu (çekmece + montaj elemanı; yalnız bölüm adı)
#   · program adları (kılavuzda simge) · pompa/ısıtıcı teşhisi (belgede yok) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-bulasik-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Mutfak lavabosu (akan su)"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Filtreyi (B) saat yönünün tersine çevirip çıkar, (C) filtresini ayır, yassı filtreyi (A) çıkar."
  - "Filtreleri yıka, haznenin içinde ve kenarında kalıntı olmadığını kontrol et."
  - "Yassı filtreyi kılavuzlarının altına oturt, (B) ve (C)'yi tak, (B)'yi kilitlenene kadar saat yönünde çevir."
  - "Alt püskürtme kolunu yukarı çekip çıkar, akan su altında yıka, aşağı bastırarak yerine tak."
  - "Üst sepeti çıkar, üst püskürtme kolunu ayırıp akan su altında yıka ve yerine kilitle."
  - "Bulaşıkları birbirine değmeyecek şekilde yerleştir, kolların tam tur döndüğünü kontrol et."
  - "Daha yoğun bir program seç ya da ExtraPower seçeneğini aç."
faq:
  - q: "Tablet kullanıyorum, bulaşıklarda deterjan kalıntısı oluyor. Neden?"
    a: "Electrolux'un ESM89400SX kılavuzuna göre deterjan tabletleri kısa programlarda tamamen çözünmez; yemek takımlarında deterjan artığı kalmaması için tabletleri uzun programlarla kullanmanı öneriyor. Sorun giderme tablosunda program sonunda deterjan gözünde kalıntı kalması için de üç neden var: tablet bölmeye sıkışmış olabilir, püskürtme kolları tıkalı ya da önleri kapalı olabilir veya sepetteki bir parça deterjan gözü kapağının açılmasını engelliyor olabilir."
  - q: "Bulaşıkları makineye koymadan önce durulamalı mıyım?"
    a: "Electrolux'un önerisi hayır: elle ön durulama yapma, bu su ve enerji tüketimini artırır; gerekirse ön yıkamalı bir program seç. Kılavuz bunun yerine tabak ve bardaklardaki büyük yiyecek kalıntılarını makineye koymadan önce temizlemeni, pişirme kaplarına yapışmış yiyecekleri ıslatmanı ya da hafifçe fırçalamanı istiyor."
  - q: "ExtraPower ne işe yarar?"
    a: "Electrolux'a göre ExtraPower, seçilen programın yıkama gücünü artırarak daha iyi sonuç sağlar; bunu yıkama sıcaklığını ve süresini artırarak yapar. Kılavuza göre seçenekler program başlatılmadan önce etkinleştirilmeli; program çalışırken açılıp kapatılamaz ve seçenekler su ve enerji tüketimi ile program süresini etkileyebilir."
  - q: "Filtreyi ve kolları ne sıklıkla temizlemeliyim?"
    a: "Electrolux, bulaşık makinesinin her kullanımından sonra filtreleri ve tekneyi kontrol etmeni istiyor; yabancı maddeler (cam, plastik, kemik, kürdan gibi) temizleme performansını düşürür. Püskürtme kolları için öneri, delikler tıkanmasın diye düzenli temizlik. Kılavuza göre sürekli kısa programlar makinenin içinde yağ ve kireç birikmesine yol açabilir; bunu önlemek için uzun süreli programları ayda en az iki kez çalıştır."
images:
  coverAlt: "Bulaşık makinesinin tabanından çıkarılmış silindir ve yassı filtre parçaları ile alt püskürtme kolu, mutfak lavabosunda akan suyun altında"
---

Program bitti ama tabaklarda yemek izi, bardaklarda tortu kaldı. Electrolux'un ESM89400SX kullanma kılavuzunda bu durum **"Yetersiz yıkama sonuçları."** başlığıyla geçiyor ve Electrolux'un listesi kısa: yerleştirme, daha yoğun program, **ExtraPower** seçeneği ve **püskürtme kollarındaki deliklerle filtrenin temizliği.** Kılavuzun bakım bölümü bunun nedenini tek cümleyle söylüyor: **kirli filtreler ve tıkalı püskürtme kolları yıkamadan alınacak sonucu kötüleştirir.** Bu yüzden bu rehber temizlikle başlıyor, ayarla bitiyor. Kaynak tek bir modelin kılavuzu; filtre ve kol yapısı modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → üç parçalı filtreyi çıkar, yıka, doğru yerine kilitle → alt ve üst püskürtme kolunu çıkarıp akan suda yıka → bulaşıkları birbirine değmeden yerleştir, kolların döndüğüne bak → daha yoğun program ya da ExtraPower. Tablet kullanıyorsan kısa programı bırak.

## Adım adım: evde denenecekler

**1. Fişi çek.** Electrolux'un bakım bölümündeki ilk uyarı: **bakım işleminden önce cihazı devre dışı bırak ve fişi prizden çıkar.**

**2. Filtreyi parçalarına ayır.** ESM89400SX'te filtre sistemi **üç parçadan** oluşuyor: yassı filtre **(A)** ve onun içine oturan **(B)** ile **(C)** filtreleri. Electrolux'un sırası: **(B) filtresini saatin tersi yönünde çevirip çıkar,** (C) filtresini (B)'den ayır, ardından **yassı filtreyi (A)** çıkar.

**3. Filtreleri yıka, hazneye bak.** Filtreleri yıka. Electrolux, filtrelerin oturduğu **haznenin içinde ya da kenarının çevresinde yiyecek veya kir kalıntısı** olmadığından emin olmanı istiyor. Kılavuza göre cam, plastik, kemik gibi yabancı maddeler temizleme performansını azaltır ve tahliye pompasına zarar verebilir; bunları elle çıkar.

**4. Filtreleri doğru yerine tak.** Yassı filtreyi (A) yerine koy; Electrolux'a göre filtre **2 kılavuzun altına** düzgün şekilde yerleşmeli. Sonra (B) ve (C) filtrelerini yerine tak, (B)'yi yassı filtrenin içine geri tak ve **kilitlenene kadar saat yönünde çevir.** Bu adım önemli: kılavuza göre filtrelerin yanlış konumlanması **tatmin edici olmayan yıkama sonuçlarına ve cihazın zarar görmesine** neden olabilir.

**5. Alt püskürtme kolunu temizle.** Electrolux'a göre tıkanmış delikler tatmin edici olmayan yıkama sonuçlarına neden olur. Alt püskürtme kolunu **yukarı doğru çekerek** çıkar, **akan su altında** yıka. Geri takmak için kolu **aşağı doğru bastır.**

**6. Üst püskürtme kolunu temizle.** Önce **üst sepeti çekip çıkar.** Kolu sepetten ayırmak için **yukarı çekip aynı anda saat yönünde çevir,** akan su altında yıka. Yerine takmak için kolu **yukarı doğru bastırıp aynı anda kilitleninceye kadar saatin ters yönünde** çevir.

**7. Yerleştirmeyi düzelt.** Tablodaki ilk madde, kılavuzun ipuçları bölümüne ve sepet yerleştirme broşürüne yönlendiriyor. Oradaki öneriler: sepetlerdeki bulaşıklar **birbirine temas etmesin ya da birbirinin üzerini kapatmasın,** aksi hâlde su bulaşıkların tüm noktalarına ulaşamaz; sepetleri aşırı yükleme. Programı başlatmadan önce **püskürtme kollarının bir yere çarpmadan rahatça tam bir tur dönebildiğinden** emin ol.

**8. Programı güçlendir.** Tablodaki son iki çözüm: **daha yoğun yıkama programları kullan** ya da seçtiğin programda daha iyi sonuç almak için **ExtraPower** seçeneğini etkinleştir. Electrolux'a göre ExtraPower yıkama sıcaklığını ve süresini artırır. Seçenekleri programı başlatmadan önce açmalısın; kılavuza göre program çalışırken açılıp kapatılamıyor.

Kılavuzdaki bakım bölümü, kol deliklerindeki toprak parçacıkları için ince uçlu bir yardımcı kullanmayı ve cihazın tavanındaki üçüncü püskürtme kolunun ayrı bir yöntemle sökülmesini de anlatıyor (11.7 "Tavan püskürtme kolunun temizlenmesi"). Bu iki işlemde emin değilsen yetkili servise bırak.

Markadan bağımsız anlatım için [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) yazısına, filtre temizliğinin genel adımları için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) rehberine bakabilirsin. Bulaşıklar temiz ama ıslak çıkıyorsa kardeş rehberimiz [Electrolux bulaşık makinesi kurutmuyor](/blog/electrolux-bulasik-makinesi-kurutmuyor/) yazısına geç.

## Ne zaman servis

Electrolux'un kılavuzu şu durumlarda Yetkili Servis Merkezi'ni gösteriyor:

- Filtrede ya da teknede gördüğün **yabancı maddeleri çıkaramıyorsan.**
- Ekranda **tabloda tanımlanmamış bir alarm kodu** varsa.
- Kontrollerden sonra **sorun tekrarlanırsa.**

Kılavuzun genel uyarısı da açık: **her türlü onarım işlemi yetkili personel tarafından yapılmalıdır.** Ararken bilgi etiketindeki **Model, PNC ve Seri Numarası** bilgilerini hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Filtre, püskürtme kolu, yerleştirme ve program seçimi kullanıcıya; pompa ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Kir hangi sepette kalıyor: altta mı, üstte mi, her yerde mi?
2. Filtreyi en son ne zaman temizledin, içinden yabancı madde çıktı mı?
3. Püskürtme kolları elle rahatça dönüyor mu?
4. Hangi programı seçiyorsun, ExtraPower açık mı?
5. Tablet mi, toz ya da jel deterjan mı kullanıyorsun?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
