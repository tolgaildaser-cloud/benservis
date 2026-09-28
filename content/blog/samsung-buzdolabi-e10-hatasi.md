---
title: "Samsung buzdolabı E10 hatası"
description: "Samsung buzdolabı E10 hatası: Samsung'a göre soğutucu bölme yeterince soğuk değil. Hızlı soğutma, kapı ve hava dolaşımı kontrolü adım adım."
slug: "samsung-buzdolabi-e10-hatasi"
date: "2026-09-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# PDF'ler pdftotext -layout ile okundu; sayfa numarası = kılavuzun basılı sayfası.
# #88: bilgiler YALNIZ Samsung'un kendi belgelerinden. Web araması yalnız TR destek sayfalarının yerini bulmak için kullanıldı.
# (S3) Samsung TR destek "Samsung Buzdolabım E10 uyarısı verdiğinde ne yapabilirim?" (güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/buzdolabim-e10-uyarisi-veriyor-ne-yapabilirim/  md5 3d613ec36b92473a5084deb1d34d47b6
#      "Buzdolabınızın soğutucu bölümü yeteri kadar soğuk olmadığında bu hata kodu görüntülenir."
#      "Bu uyarı genellikle uzun süreli elektrik kesintisi olduğunda ya da buzdolabınız ilk çalıştırıldığında ya da sıcak yiyeceklerin buzdolabına yüklenmesi durumunda görünür."
#      "Buzdolabınız normal çalışma sıcaklığına (+4 derece) gelene kadar hızlı soğutma modunda çalıştırın."
# (S9) Samsung TR destek "Buzdolabım soğutmadığında ne yapabilirim?" (2025-01-23)
#      https://www.samsung.com/tr/support/home-appliances/buzdolabim-sogutmadiginda-ne-yapabilirim/  md5 cf366c2c5830c12606ac9ba6a96932d0
# (S10) Samsung TR destek "Buzdolabımda buzlanma veya su sızıntısı…" (2026-08-21) — sıcak yiyecek maddesi
#      https://www.samsung.com/tr/support/home-appliances/why-does-my-refrigerator-have-frost-or-a-leak/  md5 9d745377c5e5afb6d0f8b67fe54c6bed
# (G) Kılavuz RB52DS**** TR, 71 s.  md5 edae9a5819b091bc55152ce19142f777
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf
#      s.53 E10 satırı (5 madde) · s.31 hızlı soğutma · s.35 soğutucu ayarı · s.36 ayar tablosu + 24 saat ilk soğuma · s.54-55 "yeterli soğutma yapmıyor"
# (I) Kılavuz RB58DS TR, 69 s.  md5 7709e8f5960be52747efadcc6f4dc677 — E10 satırı s.51, G ile birebir.
# BİLEREK YAZILMAYANLAR: sensör/fan/gaz/kompresör teşhisi (belgede yok) · reset (belgede yok) · hızlı soğutmanın kendiliğinden bitip bitmediği (G'de soğutma için yazmıyor).
# Alıntı denetim tablosu: samsung-buzdolabi-e10-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Soğutucu bölmeyi seç ve hızlı soğutma modunu aç."
  - "Hata geçene kadar buzdolabının kapısını sık açıp kapatma."
  - "Yiyecekleri hava dolaşımını engellemeyecek şekilde, arka duvara değmeden yerleştir."
  - "Sıcak yiyecekleri soğumadan buzdolabına koyma."
  - "Kapının tam kapandığını ve içerideki yiyeceklerin kapıya değmediğini kontrol et."
  - "Buzdolabının arkasında ve yanlarında 5'er cm boşluk olduğundan, güneş ve ısı kaynağından uzak durduğundan emin ol."
  - "Soğutucu normal çalışma sıcaklığına geldiğinde ayarı +4 °C'ye getir."
  - "E10 sürüyorsa Samsung müşteri hizmetlerini arayıp teknik destek iste."
faq:
  - q: "Samsung buzdolabı E10 hatası ne demek?"
    a: "Samsung Türkiye destek sayfasına göre buzdolabının soğutucu bölümü yeteri kadar soğuk olmadığında E10 görüntülenir. Samsung, bu uyarının genellikle uzun süreli elektrik kesintisinde, buzdolabı ilk çalıştırıldığında ya da buzdolabına sıcak yiyecek yüklendiğinde göründüğünü yazıyor."
  - q: "Buzdolabı yeni kuruldu, ekranda E10 var. Normal mi?"
    a: "Samsung, ilk çalıştırmayı E10'un görüldüğü durumlar arasında sayıyor. Kılavuza göre buzdolabının prize ilk takıldıktan sonra tamamen soğuyabilmesi için ortam sıcaklığına bağlı olarak 24 saate kadar kesintisiz çalışması gerekir; bu sürede kapıları sık açıp kapatma ve buzdolabını aşırı doldurma."
  - q: "Hızlı soğutmayı nasıl açarım?"
    a: "Samsung'un tarifine göre önce bölme seçme butonuyla soğutucu bölmeyi seç, sonra hızlı soğutma işareti görünene kadar sıcaklık azaltma butonuna bas. Mod açıkken ekranda su damlası işareti görünür ve cihaz bip sesi verir. Kılavuza göre mod, açıldığı gibi aynı işlemlerle kapatılır."
  - q: "E10 geçmiyorsa ne yapmalıyım?"
    a: "Samsung'un talimatı: hata hâlâ devam ediyorsa en kısa zamanda Samsung müşteri hizmetlerini arayarak teknik destek iste. Belge bu noktadan sonra kullanıcıya başka adım vermiyor."
images:
  coverAlt: "Kapağı açık bir buzdolabının soğutucu bölmesinde aralıklı dizilmiş gıdalar ve kapaktaki dijital sıcaklık göstergesi"
---

Buzdolabının göstergesinde **E10** yazıyor. Samsung Türkiye'nin destek sayfasındaki karşılığı: **"Buzdolabınızın soğutucu bölümü yeteri kadar soğuk olmadığında bu hata kodu görüntülenir."** Samsung sebepleri de sayıyor: uyarı **genellikle uzun süreli elektrik kesintisinde, buzdolabı ilk çalıştırıldığında ya da sıcak yiyecekler yüklendiğinde** görünür. Bu yazıda Samsung'un destek sayfası ve kullanım kılavuzundaki adımları sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E10 = Samsung'a göre soğutucu bölme yeterince soğuk değil. Sıra şu: hızlı soğutmayı aç → kapıyı sık açma → yiyecekleri hava dolaşımını kapatmayacak şekilde diz → soğutucu +4 °C'ye gelince ayarı normale al. E10 sürüyorsa → Samsung müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Hızlı soğutmayı aç.** Samsung'un ilk talimatı: buzdolabını **normal çalışma sıcaklığına (+4 °C) gelene kadar hızlı soğutma modunda** çalıştır. Nasıl açıldığı aşağıda.

**2. Kapıyı sık açma.** Samsung, hızlı soğutmayı açtıktan sonra ve **hata geçene kadar** kapının sık sık açılıp kapatılmamasını istiyor.

**3. Hava dolaşımını kapatma.** Samsung'un bir sonraki notu: **hava sirkülasyonunu engelleyecek şekilde yiyecek yerleştirme.** Kılavuzun sorun giderme tablosu, arka duvara temas eden kap ya da yiyeceklerin hava dolaşımını engelleyebileceğini ve buzdolabının aşırı dolu olmasının da soğutmayı zayıflatabileceğini yazıyor.

**4. Sıcak yiyeceği bekle.** Sıcak yiyecek yüklemek E10'un sebeplerinden biri. Samsung'un önerisi: sıcak ya da yeni pişmiş yiyecekleri buzdolabına koymadan önce **oda sıcaklığında soğumalarını bekle.**

**5. Kapıyı kontrol et.** Kılavuza göre kapılar tam kapanmamışsa soğutma yetersiz kalabilir; sebebi çoğu zaman dolabın içine yüklenen yiyeceklerin kapıya temas etmesidir. Kapının tam kapandığından emin ol.

**6. Yerleşime bak.** Samsung'un "buzdolabım soğutmuyor" sayfası buzdolabı ile **arka ve yan duvarlar arasında 5'er cm** açıklık bırakılmasını ve cihazın **doğrudan güneş ışığından ve ısı kaynaklarından uzak** tutulmasını istiyor; aksi hâlde soğutma performansı etkilenebilir.

**7. Ayarı normale al.** Samsung'a göre soğutucu bölmenin ideal sıcaklığı **+4 °C**'dir. Soğutucu bu sıcaklığa geldiğinde hızlı soğutmayı açtığın gibi kapat ve ayarı +4 °C'de bırak.

**8. Sürüyorsa ara.** Samsung'un son cümlesi: hata hâlâ devam ediyorsa **en kısa zamanda Samsung müşteri hizmetlerini arayarak teknik destek iste.**

## Hızlı soğutma nasıl açılır

Samsung'un destek sayfası ve RB52DS kılavuzu aynı yolu tarif ediyor:

- Önce **bölme seçme butonuna** basarak soğutucu bölmeyi seç.
- **Hızlı soğutma işareti** görünene kadar **sıcaklık azaltma butonuna** bas. Sıcaklık azaltma yönünde sıra 8, 6, 5, 4, 2 °C ve Hızlı soğutma şeklindedir.
- Mod açıkken ekranda **su damlası işareti** görünür; mod seçildiğinde buzdolabı bip sesi verir.

Kılavuza göre hızlı soğutma çalışırken dondurucunun sıcaklık ayarı yapılabilir; mod, açıldığı gibi aynı işlemlerle kapatılır. Kontrol panelinin görünümü modele göre değişebilir; tuşların yerini kendi kılavuzundaki panel çiziminden kontrol et.

## Yeni kurulduysa ya da elektrik yeni geldiyse

Samsung, ilk çalıştırmayı ve uzun kesintiyi E10'un görüldüğü durumlar arasında sayıyor. Kılavuzdaki iki not bu durumlarda beklemeyi açıklıyor:

- Buzdolabının prize ilk takıldıktan sonra **tamamen soğuyabilmesi için**, ortam sıcaklığına bağlı olarak **24 saate kadar** kesintisiz çalışması gerekir. Bu sürede kapıları sık açıp kapatma ve buzdolabını aşırı doldurma.
- Enerji kesilip geldiğinde ya da fiş yeniden takıldığında buzdolabı, kompresörü korumak için **5 dakika gecikmeyle** çalışır.

Soğutmanın genel olarak zayıfladığı durumlar için [buzdolabı soğutmuyor](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısına, doğru ayar için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına bakabilirsin.

## E10'un tersi: E11

Aynı tablodaki **E11**, E10'un tersini söyler: soğutucu bölme **gereğinden fazla soğuk** ve yiyecekler donmaya başlar. Samsung, E11'de ilk olarak hızlı soğutma modunun açık olup olmadığına bakılmasını istiyor; bu yüzden hata geçince 7. adımı atlama. Ayrıntısı [Samsung buzdolabı E11 hatası](/blog/samsung-buzdolabi-e11-hatasi/) yazısında. Dondurucu yeterince soğuk değilse Samsung'un kodu **E09**'dur: [Samsung buzdolabı E09 hatası](/blog/samsung-buzdolabi-e09-hatasi/). Bu kod tablosu her Samsung buzdolabında yok; örneğin RB52DS ve RB58DS serisinin Türkçe kılavuzlarında yer alıyor. Samsung'un başka serilerindeki kodlar için [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) yazısına bakabilirsin.

## Ne zaman servis

Hızlı soğutmayı açtın, kapıyı açmadan bekledin, yiyecekleri hava dolaşımını kapatmayacak şekilde dizdin, cihazın çevresindeki boşluğu kontrol ettin ve E10 hâlâ duruyorsa Samsung kullanıcıya başka adım vermiyor: **Samsung müşteri hizmetlerini arayıp teknik destek iste.**

⛔ **Kendin-çöz sınırı burada biter.** Ayar, yükleme, kapı ve yerleşim kullanıcıya; soğutma sisteminin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. E10 bir elektrik kesintisinden, ilk çalıştırmadan ya da sıcak yiyecek koyduktan sonra mı çıktı?
2. Hızlı soğutma açıldı mı?
3. Kapı tam kapanıyor mu, yiyecekler kapıya ya da arka duvara değiyor mu?
4. Buzdolabının arkasında ve yanlarında 5'er cm boşluk var mı?
5. Soğutucu +4 °C'ye geldikten sonra E10 geri geliyor mu?

Bu beşine cevabın varsa servise "buzdolabı soğutmuyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki kodu ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
