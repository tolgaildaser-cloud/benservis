---
title: "Samsung buzdolabı buzlanma yapıyor"
description: "Samsung buzdolabında karlanma varsa Samsung'un sırası: kapı ve conta, yiyecek düzeni, havalandırma delikleri, sıcak yiyecek ve tahliye."
slug: "samsung-buzdolabi-buzlanma-yapiyor"
date: "2026-09-29"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200.
# Yerel kopya: blog-taslaklar/kaynak-samsung-buzdolabi-sprint/2026-09-29/ (MD5-2026-09-29.txt). PDF'ler pdftotext -layout; sayfa = basılı sayfa.
# #88: bilgiler YALNIZ Samsung Türkiye'nin kendi belgelerinden. Web araması kullanılmadı.
# (S10) Samsung TR destek "Samsung Buzdolabımda buzlanma veya su sızıntısı varsa ne yapmalıyım?" (Son Güncelleme 2026-08-21)
#      https://www.samsung.com/tr/support/home-appliances/why-does-my-refrigerator-have-frost-or-a-leak/  md5 9640826497653f4687ce49d23f8fb599 (HTML, dinamik)
#      "Kapı düzgün kapanmazsa, buzdolabı ısınır ve su oluşmaya başlar." / "Kauçuk kapı contaları düzenli olarak, en az altı ayda bir temizlenmelidir."
#      "Kapılarda yoğuşma veya su damlacıkları oluşursa, Enerji Tasarrufu modunu kapatın. Enerji Tasarrufu modu açıkken kapıdaki ısıtıcı çalışmaz." / güç verildiğinde mod otomatik açılır.
#      "Yiyecekleri buzdolabının arka duvarına yaslamayın. Bu durum alt kısma giden hava akışını etkiler ve alt kısımda buzlanmaya neden olabilir."
#      "Buzdolabı ve dondurucunun havalandırma deliklerinin tıkanmadığından emin olmak için kontrol edin."
#      Tahliye: "gücü kapatın ve buzların erimesini bekleyin. Kalıntıların etrafını temizleyin. Buz çözme tahliyesine veya buzdolabının içine doğrudan sıcak su dökmeyin." / "arıza tespiti için Samsung Müşteri Hizmetleri ile iletişime geçmeniz önerilir."
#      "Sıcak veya yeni pişirilmiş yiyecekleri doğrudan buzdolabına koymayın. Bu durum dondurucudaki nemi artırabilir ve buz oluşumuna neden olabilir."
# (S11) Samsung TR destek "Samsung Buzdolabım neden soğutmuyor?" (2026-08-21) https://www.samsung.com/tr/support/home-appliances/why-my-samsung-refrigerator-is-not-cooling/  md5 f7046055b95e55c86d4ce95d3d4ac108
#      Kapı aralık kalınca: "Dondurucu bölmesinde buzlanma oluşması"; conta: "Contaların kirli olduğunu veya üzerinde buzlanma oluştuğunu fark ederseniz bu alanları temizleyin."; hasar → "yetkili servis desteği talep edin".
# (S12) Samsung TR destek "Samsung Buzdolabımın su sızdırdığından şüpheleniyorum ne yapmalıyım?" (2026-08-21) https://www.samsung.com/tr/support/home-appliances/what-should-i-do-if-i-suspect-my-samsung-fridge-freezer-is-leaking-water/  md5 0f7229fd334bb069c99db9a54eda40a6
#      Kağıt testi: "Kağıt hiçbir dirençle karşılaşmadan kolayca çekiliyorsa kapı düzgün şekilde kapanmıyor demektir." / "Kapı contasının (lastiğinin) işlevini yitirdiğini tespit ederseniz, bu parçanın onarılması veya değiştirilmesi gerekir."
# (S8) Samsung TR destek "Samsung Buzdolabımın kapıları düzgün kapanmadığında ne yapabilirim?" (2025-01-23) https://www.samsung.com/tr/support/home-appliances/buzdolabimin-kapilari-duzgun-kapanmadiginda-ne-yapabilirim/  md5 6207fe2d4e49ddff5b4a5c9d1239a396
#      "Buzdolabı lastiklerinizi ılık veya sıcak su ile dikkatli şekilde silerek tekrar deneyin."
# (A) Samsung TR kılavuz RB6000D, 84 s. md5 46c445aa7e37c25159e8d24902d1e2d6
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB50DG601ES9&CttFileID=9578531&CDCttType=UM&VPath=UM%2F202404%2F20240410150912065%2FBMF_RB6000D_DA68-04780M-02_TR.pdf
#      s.69 "Karlanma": havalandırma delikleri çevresinde karlanma → delikleri gıdaların engellemediğinden emin olun; iç duvarlarda karlanma → kapı düzgün kapatılmamış, "Kapı contalarını temizleyin."; dondurucuda aşırı buz birikmesi → kapılar ters çevrildikten sonra conta ters çevrilmemiş (conta çıkarılıp 180° döndürülerek takılır).
#      s.7: "Üretici tarafından önerilenler dışında, buz çözme işlemini hızlandırmak için mekanik cihazlar veya herhangi başka bir araç kullanmayın."
#      s.69 "Yoğuşma": kapı açık bırakıldıysa nem girer → "Nemi temizleyin ve kapıyı uzun süre açmayın."; çok nemli yiyecek → hava geçirmez sarın.
# (G) Samsung TR kılavuz RB52DS****, 71 s. md5 edae9a5819b091bc55152ce19142f777 (URL KAYNAK dosyasında) — s.56: nem → kapıları daha seyrek açın; bazı yiyecekler donuyor → arka kısma nemli yiyecek koymayın, kapalı kapta saklayın.
# BİLEREK YAZILMAYANLAR: conta sökme/180° çevirme (A s.69'da var ama söküm işi → servise bırakıldı, #31); tahliye kanalına su dökme (S10 "doğrudan sıcak su dökmeyin" diyor; S12'deki ılık su tarifi panel/vida sökmeyle birlikte anlatıldığı için yazılmadı); buz çözme ısıtıcısı/sensör/fan teşhisi (belgede kullanıcıya verilmiyor).
# Alıntı denetim tablosu: samsung-buzdolabi-buzlanma-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (buz erime süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["A4 kâğıt", "Yumuşak bez", "Ilık su"]
steps:
  - "Kapının tam kapandığını ve kapıyı engelleyen bir yiyecek ya da kap olmadığını kontrol et."
  - "Kapının arasına bir kâğıt koyup çek; kâğıt hiç direnç görmeden çıkıyorsa kapı tam kapanmıyordur."
  - "Kapı contasını ılık suyla dikkatlice silerek temizle."
  - "Yiyecekleri aralarında boşluk bırakarak diz ve hiçbir paketi arka duvara yaslama."
  - "Soğutucu ve dondurucunun havalandırma deliklerinin önünü aç."
  - "Sıcak ya da yeni pişmiş yiyecekleri oda sıcaklığına inmeden buzdolabına koyma."
  - "Tahliyenin tıkalı olduğunu düşünüyorsan gücü kapat, buzun erimesini bekle ve görünen kalıntıları temizle; içeriye sıcak su dökme."
  - "Buzlanma sürüyorsa Samsung müşteri hizmetlerinden arıza tespiti iste."
faq:
  - q: "Samsung buzdolabı neden buzlanma yapar?"
    a: "Samsung Türkiye'nin destek sayfalarına göre başlıca nedenler kapının tam kapanmaması, kirli ya da işlevini yitirmiş kapı contası, arka duvara yaslanan yiyecekler, tıkanan havalandırma delikleri, sıcak yiyeceklerin buzdolabına konması ve buz çözme tahliyesinin kalıntıyla tıkanmasıdır."
  - q: "Kapının dışında su damlacıkları var. Bu da buzlanma mı?"
    a: "Samsung'a göre kapılarda yoğuşma ya da su damlacıkları oluşursa Enerji Tasarrufu modu kapatılmalı; bu mod açıkken kapıdaki ısıtıcı çalışmaz. Samsung ayrıca buzdolabına güç verildiğinde modun otomatik açıldığını, bu yüzden yeniden başlatmadan sonra modun kontrol edilmesini istiyor."
  - q: "Buzları bıçakla ya da sıcak suyla eritebilir miyim?"
    a: "Samsung'un tarifi gücü kapatıp buzun kendiliğinden erimesini beklemek. Destek sayfası buz çözme tahliyesine ya da buzdolabının içine doğrudan sıcak su dökülmemesini, bunun iç aksam sorunlarına neden olabileceğini yazıyor."
  - q: "Kapı contası ne sıklıkla temizlenmeli?"
    a: "Samsung, kauçuk kapı contalarının düzenli olarak, en az altı ayda bir temizlenmesini istiyor. Contanın işlevini yitirdiğini fark edersen Samsung'a göre parçanın onarılması ya da değiştirilmesi gerekir; bu iş yetkili servisindir."
images:
  coverAlt: "Kapağı açık bir dondurucu çekmecesinin üst kenarında ve arka duvarında ince kar tabakası; önde düzenli dizilmiş kapalı saklama kapları"
---

Dondurucunun duvarları karla kaplanıyor, havalandırma deliklerinin çevresinde buz birikiyor ya da buzdolabının içinde yoğuşma var. Samsung Türkiye'nin destek sayfası bu durumda müşteri merkezini aramadan önce evde denenecek adımları sıralıyor ve ilk maddeyi net koyuyor: **"Kapı düzgün kapanmazsa, buzdolabı ısınır ve su oluşmaya başlar."** Bu yazıda Samsung'un destek sayfalarındaki sırayı, Türkçe kullanım kılavuzlarının "Karlanma" tablosuyla birlikte açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Buzlanmanın çoğu hava ile ilgilidir: dışarıdan nem giriyor ya da içeride hava dolaşmıyor. Sıra şu: kapı tam kapanıyor mu (kâğıt testi) → conta temiz mi → yiyecekler arka duvara ve deliklere yaslanmış mı → sıcak yiyecek konmuş mu. Tahliye tıkalıysa gücü kapat, buz kendiliğinden erisin; sıcak su dökme. Sürüyorsa → Samsung müşteri hizmetleri.

## Buz nerede birikiyor?

Samsung'un RB6000D kılavuzundaki "Karlanma" tablosu yerine göre sebep veriyor:

| Belirti | Kılavuzdaki olası neden | Çözüm |
|---|---|---|
| Havalandırma delikleri çevresinde karlanma | Yiyecek delikleri engelliyor | Deliklerin önünü aç |
| İç duvarlarda karlanma | Kapı düzgün kapanmamış | Kapıyı engelleyen yiyeceği kaldır, contayı temizle |
| Dondurucuda aşırı buz birikmesi | Kapı yönü değiştirildikten sonra conta ters çevrilmemiş | Yetkili servis (conta sökme işi) |
| İç duvarlarda yoğuşma | Kapı açık kalmış ya da nemli yiyecek | Nemi sil, kapıyı uzun açık tutma, yiyeceği sar |

Samsung'un destek sayfası bir yeri daha işaret ediyor: yiyecekler arka duvara yaslanırsa **alt kısma giden hava akışı etkilenir ve alt kısımda buzlanma** oluşabilir.

## Adım adım: evde denenecekler

**1. Kapıyı kontrol et.** Samsung'un ilk talimatı: kapının düzgün kapandığından ve **kapıyı hiçbir şeyin engellemediğinden** emin ol. Samsung'a göre kapılar aralık kaldığında içerideki soğuk hava dışarı kaçar ve dondurucu bölmesinde buzlanma oluşur.

**2. Kâğıt testi yap.** Samsung'un su sızıntısı sayfasındaki test: kapının arasına bir kâğıt parçası koy ve çekmeyi dene. **Kâğıt hiç direnç görmeden kolayca çekiliyorsa kapı düzgün kapanmıyor** demektir.

**3. Contayı temizle.** Samsung, kauçuk kapı contalarının **en az altı ayda bir** temizlenmesini istiyor; kapı sayfası lastiklerin ılık ya da sıcak suyla dikkatlice silinmesini öneriyor. Contanın üzerinde buzlanma varsa onu da temizle.

**4. Yiyecekleri aralıklı diz.** Samsung, yiyeceklerin aralarında yeterli boşluk bırakılarak yerleştirilmesini ve **hiçbir paketin arka duvara yaslanmamasını** istiyor. Kılavuz da nemli yiyeceklerin arka kısma konmamasını, kapalı kapta saklanmasını yazıyor.

**5. Havalandırma deliklerini aç.** Samsung'a göre buzdolabı ve dondurucunun **havalandırma deliklerinin tıkanmadığından** emin olmak gerekiyor. Kılavuzun tablosunda deliklerin çevresindeki karlanmanın sebebi, deliklerin önüne konan yiyeceklerdir.

**6. Sıcak yiyeceği bekle.** Samsung'un notu: sıcak ya da yeni pişmiş yiyecekler **dondurucudaki nemi artırabilir ve buz oluşumuna** neden olabilir. Yiyecekleri buzdolabına koymadan önce oda sıcaklığında soğumalarını bekle.

**7. Tahliyeyi zorlamadan aç.** Yiyecek parçacıkları buz çözme tahliyesinde birikip tahliyeyi tıkayabilir. Samsung'un tarifi: tahliyenin tıkalı olduğunu düşünüyorsan **gücü kapat ve buzların erimesini bekle**, sonra kalıntıların etrafını temizle. **Tahliyeye ya da buzdolabının içine doğrudan sıcak su dökme**; Samsung bunun iç aksam sorunlarına neden olabileceğini yazıyor.

**8. Sürüyorsa ara.** Samsung, tahliye konusunda arıza tespiti için **Samsung Müşteri Hizmetleri ile iletişime geçilmesini** öneriyor. Yukarıdaki adımlardan sonra buz yeniden birikiyorsa aynı yol geçerli.

## Kapının dışında su damlacıkları varsa

Bu, iç buzlanmadan farklı bir durumdur. Samsung'un destek sayfasına göre kapılarda yoğuşma ya da su damlacıkları oluşursa **Enerji Tasarrufu modunu kapat**: bu mod açıkken kapıdaki ısıtıcı çalışmaz. Samsung ayrıca buzdolabına güç verildiğinde Enerji Tasarrufu modunun **otomatik olarak açıldığını** yazıyor; elektrik kesintisinden ya da fişi çekip taktıktan sonra modu kontrol et. Ekran tasarımı modele göre değişir.

Buzdolabının içinde, duvarlarda yoğuşma varsa kılavuzun tarifi şu: nemi sil, **kapıyı uzun süre açık bırakma** ve nemli yiyecekleri hava geçirmez şekilde sar. RB52DS kılavuzu, kapı her açıldığında odadaki nemin içeri girdiğini ve odanın nemi yüksekse bu birikimin hızlandığını hatırlatıyor.

## Ne zaman servis

| Durum | Kimin işi |
|---|---|
| Kapıyı engelleyen yiyecek, yiyecek düzeni, delikler, sıcak yiyecek | Senin, bu rehberdeki adımlar |
| Conta kirli | Senin, temizlik |
| Conta işlevini yitirmiş, yırtık ya da yıpranmış | Samsung'a göre onarım ya da değişim: yetkili servis |
| Kapı yönü değiştirildi, dondurucuda aşırı buz birikiyor | Conta sökme işi: yetkili servis |
| Tahliye tıkalı, buz eridikten sonra da su birikiyor | Samsung müşteri hizmetleri, arıza tespiti |

⛔ **Kendin-çöz sınırı burada biter.** Panel sökme, buz çözme sistemine müdahale ve conta değişimi servise aittir. Samsung kılavuzu, üreticinin önerdikleri dışında **buz çözmeyi hızlandırmak için mekanik cihaz ya da başka bir araç kullanılmamasını** istiyor.

Buzlanma su sızıntısına dönüştüyse kardeş yazı: [Samsung buzdolabı su sızdırıyor](/blog/samsung-buzdolabi-su-sizdiriyor/). Soğutma da zayıfladıysa [Samsung buzdolabı soğutmuyor](/blog/samsung-buzdolabi-sogutmuyor/) yazısına bak. Contanın bakımı için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/), markadan bağımsız sebepler için [buzdolabı buzlanma yapıyor](/blog/buzdolabi-buzlanma-yapiyor/) yazısı var. Ekranda bir kod görüyorsan [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) yazısından başla.

## Servisi aramadan önce iki dakikalık özet

1. Buz nerede birikiyor: deliklerin çevresinde, iç duvarlarda, dondurucunun altında?
2. Kâğıt testinde kâğıt direnç görüyor mu?
3. Kapının yönü hiç değiştirildi mi?
4. Buz eridikten sonra içeride ya da altta su kalıyor mu?
5. Ekranda Enerji Tasarrufu modu açık mı?

Bu beşine cevabın varsa servise somut bir tablo anlatabilirsin.

Buzdolabının modelini ve belirtisini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Adımlar Samsung Türkiye'nin "Buzdolabımda buzlanma veya su sızıntısı varsa ne yapmalıyım?", "Buzdolabım neden soğutmuyor?", "Buzdolabımın su sızdırdığından şüpheleniyorum" ve "Buzdolabımın kapıları düzgün kapanmadığında ne yapabilirim?" destek sayfalarından; "Karlanma" ve "Yoğuşma" tabloları Samsung'un Türkçe kullanım kılavuzlarından (RB6000D ve RB52DS serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
