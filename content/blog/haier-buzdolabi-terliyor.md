---
title: "Haier buzdolabı terliyor"
description: "Haier buzdolabının içinde nem ve su damlacıkları varsa Haier kılavuzunun dört sebebi: nemli hava, kapı, sık açma ve açık kaplar. Dıştaki terleme ayrı."
slug: "haier-buzdolabi-terliyor"
date: "2026-10-04"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-04 PAZ alt ajanı (sprint #144 kapılarıyla, YK #158 sonrası ek iş). Tolga kararı (3 Eki): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i Haier'in kendi belgesi sayılır.
#   Ürün sayfası (4 Eki, curl -sL -A "Mozilla/5.0", HTTP 200): https://www.haier-europe.com/tr_TR/cok-kapili/34005004/hcr5919enmp/  md5 4f81b4464db0cdfbb06c2800c37c9a1a (sayfada MAN-000176823_007 bağlantısı var)
#   Kılavuz (4 Eki yeniden indirildi, HTTP 200, application/pdf, 47023470 bayt): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2026/2/17709677/MAN-000176823_007  616 s. çok dilli (model listesinde HCR5919ENMP)  md5 ef65ee3c32c88974b4c6a9b6c9231c3d (yerel kopyayla aynı)
#   TR bölümü PDF s.351-~388; sayfa = PDF sayfası (basılı no + 349). pdftotext -layout. Web araması yok; Haier blog yazıları kaynak değil.
# Ana satır (s.377): "Soğutucu bölmesinin iç kısmında nem oluşumu." · "İklim çok sıcak ve çok nemli. → Sıcaklığı artırın." · "Cihazın bir kapısı/çekmecesi sıkıca kapatılmamış. → Kapıyı/çekmeceyi kapatın."
#   · "Kapı/çekmece çok sık veya çok uzun süre açıldı. → Kapıyı/çekmeceyi çok sık açmayın." · "Yiyecek kapları veya sıvılar açık bırakılmış. → Sıcak yiyecekleri oda sıcaklığına soğumaya bırakın ve yiyecek ve sıvıları kapatın."
# Dış satır (s.377): "Nem, buzdolabının dış yüzeyinde veya kapılar/kapı ile çekmece arasında birikiyor." · "İklim çok sıcak ve çok nemli. → Nemli iklimde bu normaldir ve nem azaldığında değişecektir." · "Kapı/çekmece sıkıca kapatılmamış. Cihazdaki soğuk hava ve dışındaki sıcak hava yoğunlaşır. → Kapının/çekmecenin sıkıca kapatıldığından emin olun."
# Diğer: s.363 "İç ortam sıcaklıkları aşağıdaki faktörlerden etkilenir: Ortam sıcaklığı · Kapı açma sıklığı · Depolanan gıda miktarı · Cihazın kurulumu" · "Buzdolabı kapısı 1 dakikadan fazla açık kaldığında, kapı açma alarmı çalacaktır."
#   · s.363 "A" (Soğutucu) düğmesi: "Sıcaklık, maksimum 9°C'den minimum 1°C'ye 1°C'lik kademeler halinde düşer ve daha fazla basıldığında tekrar 9°C'ye geçer." · "5 saniye içinde hiçbir tuşa basılmazsa, ayar otomatik olarak onaylanır." · "Kilitliyse "F" düğmesine basarak panelin kilidini açın."
#   · s.364 "Başka bir işlev (Power-Freeze, Super-Cool, Holiday veya Auto Set modu) etkinleştirilirse veya ekran kilitliyse, ilgili bölmedeki sıcaklık ayarlanamaz." · s.376 "Buzdolabı sıcaklığının sabit hale gelmesi 24 saat sürer."
#   · s.369 "Sıcak yiyecekler cihaza yerleştirilmeden önce oda sıcaklığına soğutulmalıdır." · "Buzdolabında saklanan yiyecekler saklanmadan önce yıkanmalı ve kurutulmalıdır." · "Saklanacak yiyecekler, koku veya tat değişikliklerini önlemek için uygun şekilde kapatılmalıdır." · "Buzdolabınızın sıcaklığını 4°C'nin altında tutun."
#   · s.373 "Cihaz kapısını mümkün olduğunca az ve kısa süreliğine açın." · "Kapının her zaman doğru şekilde kapanması için kapı contalarını temiz tutun."
#   · s.358 "Kapıyı kapattığınızda, sol kapıdaki dikey kapı çıtası içe doğru bükülmelidir" · "Sol kapıyı kapatmaya çalışırsanız ve dikey kapı şeridi bükülmemişse, önce onu bükmelisiniz, aksi takdirde kapı şeridi sabitleme miline veya sağ kapıya çarpacaktır. Böylece kapıda bir hasar kayması veya sızıntı meydana gelecektir." · "Çerçevenin içinde bir ısıtma ipliği vardır. Yüzey sıcaklığı biraz artacaktır, bu normaldir"
#   · s.371 Humidity box "Bu bölmede nem oranı soğutucu bölmesine göre daha yüksektir. Sistem tarafından otomatik olarak kontrol edilir" · "İki bölgenin içindeki plastik kapağı çıkarmayın. Nemi korurlar." · My Zone "nem seviyesi, buzdolabı bölmesinden daha düşüktür"
#   · s.378 "Hafif bir uğultu duyacaksınız." → "Yoğuşma önleyici sistem çalışıyor." → "Bu, yoğuşmayı önler ve normaldir." · s.377 "Kabinin kenarları ve kapı şeridi ısınıyor." → "Bu normaldir."
#   · s.376 conta: "Kapı/çekmece contasını temizleyin veya müşteri hizmetleri tarafından değiştirilmesini sağlayın." · s.380 "Aksi takdirde çerçeve bükülebilir; sonuç olarak kapı contaları sızdırabilir." · s.380 ayırıcı "elle veya pense gibi aletler kullanarak"
# BİLEREK YAZILMAYANLAR: iç yüzeydeki suyu bezle silme adımı (belgenin nem satırında yok) · belirli bir derece önerisi (satır yalnız "Sıcaklığı artırın" diyor; s.369 4 °C altı ile s.362 5 °C ön ayarı arasında belge tek değer vermiyor) · gider deliği/drenaj temizliği (belgede yok) · conta değişimi kullanıcıya · ayak/kapı ince ayarı adım olarak (kurulum; ayırıcıda "pense gibi aletler") · fan/ısıtıcı teşhisi · fiyat.
# Kardeş sayfalarla (haier-buzdolabi-buzlanma-yapiyor, -surekli-calisiyor, -sogutmuyor) ortak satırlar (kapı kapat / sık açma) farklı belge satırlarıyla kuruldu: dikey kapı çıtası (s.358), s.363 etki faktörleri, s.369 yıkayıp kurutma, dış nem satırı, Humidity box.
# Alıntı denetim tablosu: haier-buzdolabi-terliyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika (sıcaklığın oturmasını bekleme hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Yiyecek ve sıvıların kabını kapat; yıkadığın yiyecekleri buzdolabına kurulayıp koy."
  - "Sıcak yemekleri buzdolabına koymadan önce oda sıcaklığına soğumaya bırak."
  - "Sol kapıdaki dikey kapı çıtasının içe katlandığını görerek kapıları ve çekmeceleri sıkıca kapat."
  - "Kapıyı mümkün olduğunca az ve kısa süreliğine aç."
  - "Hava çok sıcak ve nemliyse panelin kilidini F düğmesiyle açıp A (Soğutucu) düğmesiyle buzdolabı sıcaklığını artır, sonra 24 saat bekle."
faq:
  - q: "Haier buzdolabımın içi neden terliyor?"
    a: "Haier'in HCR5919 ailesini de kapsayan kılavuzunda 'Soğutucu bölmesinin iç kısmında nem oluşumu' satırı dört sebep sayıyor: iklimin çok sıcak ve çok nemli olması, bir kapı ya da çekmecenin sıkıca kapatılmaması, kapının çok sık ya da çok uzun açılması ve yiyecek kapları ya da sıvıların açık bırakılması."
  - q: "Buzdolabının dışı ve kapıların arası terliyor, arıza mı?"
    a: "Haier'in tablosunda bu ayrı bir satır. İklim çok sıcak ve nemliyse kılavuz bunu nemli iklimde normal sayıyor ve nem azaldığında değişeceğini yazıyor. Diğer sebep kapının sıkıca kapanmaması: cihazdaki soğuk hava dışarıdaki sıcak havayla buluşup yoğuşuyor; çözüm kapının sıkıca kapandığından emin olmak."
  - q: "Sebze çekmecesinde daha çok nem var, normal mi?"
    a: "Evet. Kılavuza göre Humidity box çekmecesinde nem oranı soğutucu bölmesine göre daha yüksek ve sistem tarafından otomatik kontrol ediliyor. Haier iki bölgenin içindeki plastik kapağın çıkarılmamasını istiyor; kapaklar nemi koruyor."
  - q: "Sıcaklığı neden değiştiremiyorum?"
    a: "Haier'e göre Power-Freeze, Super-Cool, Holiday veya Auto Set modu etkinse ya da ekran kilitliyse ilgili bölmenin sıcaklığı ayarlanamıyor ve gösterge sesli uyarıyla yanıp sönüyor. Panel kapılar kapalıyken 30 saniye tuşa basılmazsa kendiliğinden kilitleniyor; kilidi F düğmesiyle açılıyor."
images:
  coverAlt: "Buzdolabı rafındaki ağzı açık bir sürahi ve iç duvarda biriken küçük su damlacıkları"
---

Buzdolabı rafının üstünde, arka duvarda ya da kapların çevresinde ince su damlacıkları birikiyor. Haier'in HCR5919 ailesini de kapsayan çok kapılı buzdolabı kılavuzunda bu durumun satırı **"Soğutucu bölmesinin iç kısmında nem oluşumu."** Haier bu satırda dört sebep sayıyor: **iklim çok sıcak ve çok nemli**, **cihazın bir kapısı/çekmecesi sıkıca kapatılmamış**, **kapı/çekmece çok sık veya çok uzun süre açıldı** ve **yiyecek kapları veya sıvılar açık bırakılmış.** Kılavuzun sıcaklık bölümü de iç sıcaklığı etkileyen dört etkeni sayıyor: **ortam sıcaklığı, kapı açma sıklığı, depolanan gıda miktarı ve cihazın kurulumu.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapları kapat, sıcak yemeği soğutarak koy, sol kapının dikey çıtası içe katlanmış hâlde kapıları sıkı kapat ve kapıyı az aç. Hava çok sıcak ve nemliyse buzdolabı sıcaklığını artırıp 24 saat bekle. Dıştaki terleme nemli havada normaldir.

## Adım adım: evde denenecekler

**1. Kapları kapat.** Tablonun son sebebi: **yiyecek kapları veya sıvılar açık bırakılmış.** Haier'in çözümünün ikinci yarısı **yiyecek ve sıvıları kapatın.** Ağzı açık sürahi, kapaksız tencere ya da üstü açık tabak bu satırın kapsamında. Kılavuzun saklama ipuçları da yiyeceklerin **saklanmadan önce yıkanmasını ve kurutulmasını**, koku ve tat değişikliğini önlemek için **uygun şekilde kapatılmasını** istiyor; ıslak sebzeyi kurulamadan koyma.

**2. Sıcak yemeği soğut.** Aynı satırın çözümünün ilk yarısı: **sıcak yiyecekleri oda sıcaklığına soğumaya bırakın.** Saklama bölümü de aynı şeyi söylüyor: **sıcak yiyecekler cihaza yerleştirilmeden önce oda sıcaklığına soğutulmalıdır.**

**3. Kapıları sıkıca kapat, dikey çıtaya dikkat et.** Haier'in ikinci sebebi: **cihazın bir kapısı/çekmecesi sıkıca kapatılmamış** → **kapıyı/çekmeceyi kapatın.** Çok kapılı modelde kılavuzun özel bir uyarısı var: kapıyı kapattığında **sol kapıdaki dikey kapı çıtası içe doğru bükülmelidir.** Çıta bükülmeden sol kapıyı kapatmaya çalışırsan önce onu bükmen gerekiyor; aksi hâlde çıta sağ kapıya ya da sabitleme miline çarpıyor ve Haier'e göre **kapıda bir hasar kayması veya sızıntı** oluşuyor. Kılavuz, kapının her zaman doğru kapanması için **kapı contalarını temiz** tutmanı da öneriyor.

**4. Kapıyı az ve kısa aç.** Üçüncü sebep: **kapı/çekmece çok sık veya çok uzun süre açıldı** → **kapıyı/çekmeceyi çok sık açmayın.** Haier'in enerji ipuçlarındaki ifade daha net: **cihaz kapısını mümkün olduğunca az ve kısa süreliğine açın.** Kapı **1 dakikadan** fazla açık kalırsa kapı açma alarmı çalıyor; alarm, kapı kapatılarak ya da kumanda paneline dokunularak susturuluyor.

**5. Nemli havada sıcaklığı artır.** İlk sebep: **iklim çok sıcak ve çok nemli** → Haier'in çözümü **sıcaklığı artırın.** Panel kilitliyse önce **"F" düğmesiyle** kilidi aç. Buzdolabı **"A" (Soğutucu)** düğmesiyle seçiliyor; her basışta sıcaklık **9°C'den 1°C'ye 1°C'lik kademelerle düşüyor**, 1°C'den sonra **tekrar 9°C'ye** geçiyor. Sıcaklığı yükseltmek için düğmeye istediğin değere gelene kadar basarsın; **5 saniye** içinde başka tuşa basmazsan ayar onaylanıyor. Power-Freeze, Super-Cool, Holiday ya da Auto Set açıksa sıcaklık değiştirilemiyor. Kılavuzun saklama ipucu buzdolabı sıcaklığını **4°C'nin altında** tutmanı öneriyor; ayarı bunu gözeterek seç. Haier'e göre **buzdolabı sıcaklığının sabit hale gelmesi 24 saat sürer.**

## Dışarıdaki terleme ve normal sayılanlar

Su damlacıkları buzdolabının **dış yüzeyinde ya da kapıların arasındaysa** Haier'in tablosu bunu ayrı bir satırda ele alıyor. İklim çok sıcak ve nemliyse **nemli iklimde bu normaldir ve nem azaldığında değişecektir.** Diğer sebep yine kapı: kapı sıkıca kapanmadığında **cihazdaki soğuk hava ve dışındaki sıcak hava yoğunlaşır**; çözüm **kapının/çekmecenin sıkıca kapatıldığından emin olun.**

Kılavuz iki şeyi daha normal sayıyor: çerçevenin içinde bir **ısıtma ipliği** var ve **yüzey sıcaklığının biraz artması normal**; **hafif bir uğultu** ise **yoğuşma önleyici sistemin** çalıştığını gösteriyor ve Haier'e göre **bu, yoğuşmayı önler.** Sebze çekmecesindeki nem de tasarım gereği: **Humidity box** çekmecesinde nem oranı soğutucu bölmesine göre **daha yüksek** ve **sistem tarafından otomatik olarak kontrol** ediliyor; Haier iki bölgenin içindeki **plastik kapağın çıkarılmamasını** istiyor, çünkü kapaklar nemi koruyor.

Buzdolabı aynı zamanda yeterince soğutmuyorsa [Haier buzdolabı soğutmuyor](/blog/haier-buzdolabi-sogutmuyor/), dondurucuda kalın buz varsa [Haier buzdolabı buzlanma yapıyor](/blog/haier-buzdolabi-buzlanma-yapiyor/), motor hiç durmuyorsa [Haier buzdolabı sürekli çalışıyor](/blog/haier-buzdolabi-surekli-calisiyor/) yazısına bak. Markadan bağımsız anlatım için [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/) ve [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazıları var.

## Ne zaman servis

Haier, kapının her zaman doğru kapanması için contaların temiz tutulmasını istiyor. Conta kirliyse temizle; **aşınmış, çatlamış veya uyumsuzsa** Haier'in arıza giderme tablosu contanın **müşteri hizmetleri tarafından değiştirilmesini** söylüyor. Kılavuzun kurulum bölümü, cihaz dengeli durmazsa **çerçevenin bükülebileceğini ve kapı contalarının sızdırabileceğini** de yazıyor; kapı seviyesinin ayırıcıyla ince ayarında **pense gibi aletler** geçtiği için bunu burada adım olarak vermiyoruz.

⛔ **Kendin-çöz sınırı burada biter.** Kaplar kapalı, kapılar sıkı kapanıyor, kapıyı az açıyorsun ve sıcaklığı artırıp 24 saat beklediğin hâlde iç yüzeyde nem birikmeye devam ediyorsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
