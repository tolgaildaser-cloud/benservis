---
title: "Samsung buzdolabı E11 hatası"
description: "Samsung buzdolabı E11 hatası: Samsung'a göre soğutucu bölme gereğinden soğuk, yiyecekler donmaya başlar. Hızlı soğutma ve ayar kontrolü adım adım."
slug: "samsung-buzdolabi-e11-hatasi"
date: "2026-09-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# PDF'ler pdftotext -layout ile okundu; sayfa numarası = kılavuzun basılı sayfası.
# #88: bilgiler YALNIZ Samsung'un kendi belgelerinden. Web araması yalnız TR destek sayfalarının yerini bulmak için kullanıldı.
# (S4) Samsung TR destek "Samsung Buzdolabım E11 uyarısı verdiğinde ne yapabilirim?" (güncelleme 2024-11-20)
#      https://www.samsung.com/tr/support/home-appliances/buzdolabim-e11-uyarisi-veriyor-ne-yapabilirim/  md5 4c622f2a5db4b3b22c7191b74fd93f9a
#      "Buzdolabınız normal çalışma aralığından daha düşük bir değerde soğutma yapmış ise bu hata görünür. Bu hata görüldüğünde buzdolabınızdaki yiyecekler donmaya başlar."
#      Adım 1: hızlı soğutma (su damlası işareti) açıksa soğutucu bölmeyi seç, sıcaklık arttırma ile 4 °C'ye ayarla · Adım 2: sıcaklığı 4 °C üzerinde bir değere ayarla · "ideal sıcaklığı, soğutucu bölümü için +4°C'dir"
# (G) Kılavuz RB52DS**** TR, 71 s.  md5 edae9a5819b091bc55152ce19142f777
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf
#      s.54 E11 satırı (3 madde; 3. "Eğer hata hala devam ediyorsa, en kısa zamanda Samsung iletişim merkezini arayıp teknik destek talep ediniz.")
#      s.55 "Buzdolabınızda yiyecekler gereğinden fazla soğuyor" · s.56 "Buzdolabınızda bazı yiyecekler donuyor" · s.31/35 hızlı soğutma ve soğutucu ayarı
# (I) Kılavuz RB58DS TR, 69 s.  md5 7709e8f5960be52747efadcc6f4dc677 — E11 satırı s.52, G ile birebir.
# NOT: S4'te 1. adım "4°C ayarlayın", 2. adım "4°C üzerinde bir sıcaklığa ayarlayın" diyor; yazıda önce +4, sürerse bir kademe daha sıcak diye sıralandı (G s.55 "bir konum daha sıcak konuma getirin").
# BİLEREK YAZILMAYANLAR: sensör/damper/kart teşhisi (belgede yok) · reset (belgede yok) · donan gıdanın güvenliği hakkında yorum (belgede yok).
# Alıntı denetim tablosu: samsung-buzdolabi-e11-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Göstergede su damlası işareti var mı bak; varsa hızlı soğutma açıktır."
  - "Hızlı soğutma açıksa soğutucu bölmeyi seç ve sıcaklık arttırma butonuyla 4 °C'ye ayarla."
  - "Hızlı soğutma kapalıysa soğutucu sıcaklığını bir kademe daha sıcak bir değere ayarla."
  - "Dondurucuya yakın zamanda çok miktarda yeni yiyecek koyduysan bir süre bekle."
  - "Nemli yiyecekleri arka duvardan uzak, ağzı kapalı kaplarda sakla."
  - "E11 sürüyorsa Samsung iletişim merkezini arayıp teknik destek iste."
faq:
  - q: "Samsung buzdolabı E11 hatası ne demek?"
    a: "Samsung Türkiye destek sayfasına göre buzdolabı normal çalışma aralığından daha düşük bir değerde soğutma yapmışsa E11 görünür. Samsung'a göre bu hata görüldüğünde buzdolabındaki yiyecekler donmaya başlar."
  - q: "E11 görünce ilk neye bakmalıyım?"
    a: "Samsung'un ilk talimatı buzdolabının hızlı soğutma modunda çalışıp çalışmadığını kontrol etmek. Mod açıkken ekranda su damlası işareti görünür; bu durumda soğutucu bölmeyi seçip sıcaklık arttırma butonuyla 4 °C'ye ayarla."
  - q: "Soğutucu bölme kaç derece olmalı?"
    a: "Samsung'a göre soğutucu bölmenin ideal sıcaklığı +4 °C'dir. RB52DS kılavuzundaki ayar kademeleri Hızlı soğutma, 2, 4, 5, 6 ve 8 °C'dir."
  - q: "Hızlı soğutma kapalı ama E11 çıkıyor, ne yapmalıyım?"
    a: "Samsung'un ikinci adımı soğutucu bölmenin sıcaklık değerini arttırmak. Kılavuzun sorun giderme tablosu ayrıca dondurucuya çok miktarda yeni yiyecek konduysa kompresörün daha uzun çalışacağını ve soğutucudaki yiyecekleri de gereğinden fazla soğutabileceğini, bunun bir süre sonra kendiliğinden düzelebileceğini yazıyor. Hata sürüyorsa Samsung iletişim merkezini ara."
images:
  coverAlt: "Kapağı açık bir buzdolabının soğutucu bölmesinde sebzelik ve raflar, kapakta dijital sıcaklık göstergesi"
---

Göstergede **E11** var ve buzdolabındaki bazı yiyecekler donmaya başladı. Samsung Türkiye'nin destek sayfasındaki karşılığı: **"Buzdolabınız normal çalışma aralığından daha düşük bir değerde soğutma yapmış ise bu hata görünür."** Samsung devamında şunu da yazıyor: **bu hata görüldüğünde buzdolabındaki yiyecekler donmaya başlar.** Kısacası E11, E10'un tersidir: soğutucu bölme yetersiz değil, gereğinden fazla soğuk. Bu yazıda Samsung'un destek sayfası ve kullanım kılavuzundaki adımları sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E11 = Samsung'a göre soğutucu gereğinden soğuk, yiyecekler donmaya başlar. Sıra şu: su damlası işareti varsa hızlı soğutma açıktır → soğutucuyu 4 °C'ye al → hızlı soğutma kapalıysa ayarı bir kademe daha sıcağa al. E11 sürüyorsa → Samsung iletişim merkezi.

## Adım adım: evde denenecekler

**1. Hızlı soğutma açık mı bak.** Samsung'un ilk talimatı: buzdolabının **hızlı soğutma modunda** çalışıp çalışmadığını kontrol et. Mod açıkken göstergede **su damlası işareti** görünür.

**2. Açıksa 4 °C'ye al.** Su damlası işareti varsa önce **bölme seçme butonuna** basarak soğutucu bölmeyi seç, sonra **sıcaklık arttırma butonuna** basarak 4 °C'ye ayarla. Sıcaklık arttırma yönünde sıra Hızlı soğutma, 2, 4, 5, 6, 8 °C şeklindedir.

**3. Kapalıysa ayarı yükselt.** Samsung'un ikinci adımı: **buzdolabının sıcaklık değerini arttır.** Soğutucu bölmeyi seç ve sıcaklık arttırma butonuyla ayarı 4 °C'nin üzerine, bir kademe daha sıcak bir değere getir. Kılavuzun sorun giderme tablosu da yiyecekler gereğinden fazla soğuyorsa sıcaklık ayarını **bir konum daha sıcak konuma** getirmeyi öneriyor.

**4. Dondurucuya bak.** Kılavuza göre derin dondurucu bölmesine **çok miktarda yeni yiyecek** yerleştirildiyse kompresör onları dondurmak için daha uzun çalışır ve bu, soğutma bölmesindeki yiyecekleri de gereğinden fazla soğutabilir. Samsung'a göre bu durumda sorun **bir süre sonra kendiliğinden düzelebilir.**

**5. Nemli yiyecekleri öne al.** Kılavuzun "bazı yiyecekler donuyor" satırına göre buzdolabının **arka kısmına konan nemli yiyecekler** soğuk havayla temas edip donabilir. Nemli yiyecekleri arkaya koyma, **kapalı bir kapta** sakla.

**6. Sürüyorsa ara.** Kılavuzdaki tablonun son maddesi: hata hâlâ devam ediyorsa **en kısa zamanda Samsung iletişim merkezini arayıp teknik destek talep et.**

## Soğutucu kaç derecede kalmalı

Samsung'a göre soğutucu bölmenin ideal sıcaklığı **+4 °C**'dir. RB52DS kılavuzundaki ayar tablosunda da normal kullanım için dondurucu -18 °C, soğutucu 4 °C önerilir ve en iyi performansın bu konumda alındığı yazılır. 2 °C ayarı, ortamın sıcak olması ya da kapının çok açılıp kapanması yüzünden soğutucunun yeterince soğuk olmadığı düşünüldüğünde kullanılır; hızlı soğutma ise soğutucu fazla yüklendiğinde ya da hızlı soğuması istenen yiyecekler olduğunda.

Hızlı soğutma geçici bir moddur: kılavuza göre açıldığı gibi aynı işlemlerle kapatılır. Samsung, E10 uyarısında bile hızlı soğutmayı yalnız soğutucu **normal çalışma sıcaklığına (+4 °C) gelene kadar** çalıştırmayı söylüyor. Ayarların genel mantığı için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/), fazla soğutma şikâyetinin diğer sebepleri için [buzdolabı çok soğutuyor](/blog/buzdolabi-cok-sogutuyor/) yazısına bakabilirsin.

## Aynı tablodaki diğer kodlar

Bu uyarı tablosu her Samsung buzdolabında yok; örneğin RB52DS ve RB58DS serisinin Türkçe kılavuzlarında yer alıyor.

- **E10:** soğutucu bölme yeterince soğuk değil → [Samsung buzdolabı E10 hatası](/blog/samsung-buzdolabi-e10-hatasi/)
- **E09:** dondurucu yeterince soğuk değil → [Samsung buzdolabı E09 hatası](/blog/samsung-buzdolabi-e09-hatasi/)
- **E01, E02, E03, E06, E07:** Samsung'a göre sensör hatası uyarısı; talimat en kısa zamanda Samsung iletişim merkezini arayıp teknik destek istemek.

Samsung'un başka serilerindeki kodlar için [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) yazısına bakabilirsin.

## Ne zaman servis

Hızlı soğutmayı kapattın, ayarı 4 °C'ye ya da bir kademe daha sıcağa aldın, dondurucuya yeni yük koymadın ve E11 hâlâ duruyorsa Samsung kullanıcıya başka adım vermiyor: **Samsung iletişim merkezini arayıp teknik destek talep et.**

⛔ **Kendin-çöz sınırı burada biter.** Ayar ve yerleşim kullanıcıya; soğutma sisteminin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Göstergede su damlası işareti (hızlı soğutma) var mıydı?
2. Soğutucu 4 °C'ye ya da bir kademe daha sıcağa alındı mı?
3. Dondurucuya yakın zamanda çok miktarda yeni yiyecek kondu mu?
4. Donan yiyecekler arka duvara yakın mıydı?
5. Ayar değiştikten sonra E11 geri geliyor mu?

Bu beşine cevabın varsa servise "buzdolabı donduruyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki kodu ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
