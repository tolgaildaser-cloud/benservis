---
title: "Vestel termosifon suyu ısıtmıyor"
description: "Vestel termosifon ısıtmıyor ya da ekranda E1, E2, E3 mü var? TRV kılavuzunun sırası: şalter, göstergeler, 4 derece kuralı ve kodların anlamı."
slug: "vestel-termosifon-suyu-isitmiyor"
date: "2026-10-03"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in KENDİ alan adından indirildi, HTTP 200, yönlendirme 0.
#   Web araması yalnız belge yerini bulmak için. Sayfa = PDF sayfası (pdftotext -f N -l N).
#  T1) Vestel TRV-50 E / TRV-65 E / TRV-80 E termosifon kullanım kılavuzu  https://statik.vestel.com.tr/webfiles/20214615_k.pdf  24 s.  md5 5b2d7d441b5c5d5fc6b34451d428e8e0
# Ana satırlar: s.18 "Sorun Giderme" → "Arıza durumunda teknik servisimizi aramadan önce arızanın geçici su ya da elektrik kesintisi gibi sorunlardan
#   kaynaklanmadığından emin olun." · "Termosifon çalışmıyor." → "Şalter kapalı." / "Şalteri açın." · "Elektrik kesik." / "Şebekeden yeniden elektrik gelmesini
#   bekleyin." · "Bina ana sigortası atmış." / "Sigortayı onarın." · "Termosifon suyu ısıtmıyor." → "Termosifon doğru çalışmıyor" / "Servis çağırın." ·
#   "Termosifon suyu geç ısıtıyor." → "Gerilim düşük olabilir" / "Uygun bir regülatör kullanın." · "Rezistans kireçlenmiş olabilir." / "Servis çağırın." ·
#   "Termosifon suyu aşırı ısıtıyor (su buharlı akıyor)." / "Servis çağırın." · "Emniyet ventilinden su damlıyor." / "Normal bir durumdur." / "Ürün ile birlikte
#   verilen hortum gidere bağlanmalıdır." · "E1 (E1) Termistör Hatası Yetkili servise başvurunuz" · "E2 (E2) Düşük Voltaj Uyarısı Voltaj normale döndüğünde
#   hata kendiliğinden kalkacaktır." · "E3 (E3) Susuz çalıştırma Kazana su doldurulduktan sonra enerji kesilip yeniden verilir."
#   s.13 panel: "1. Sıcak su hazır göstergesi ... 2. Açma / kapama düğmesi ... 3. Rezistans göstergesi ... 4. Donma önleme göstergesi ... 5. Sıcaklık arttırma/azaltma
#   düğmesi ... 6. Sıcaklık/hata göstergesi ... 7. Akıllı temizleme göstergesi"
#   s.14 "V-Otomat şalter sigorta görevi görür. Kapalı konuma getirildiğinde yada herhangi bir elektrik kaçağında termosifonun elektrik şebekesi ile olan bağlantısını
#   keser." · "Cihazınız herhangi bir nedenden dolayı susuz çalıştırıldığında sistem otomatik olarak devreye girecek ve ekranda E3 hata kodu görüntülenecektir. Bu
#   durumda enerji beslemesini V-otomattan keserek termosifonunuzun suyla doldurulmasını sağlayınız. Su dolu olduğundan emin olduktan sonra tekrar enerji
#   beslemesini açarsanız termosifon normal çalışmasına devam edecektir." · "Şebeke dalgalanmalarında voltaj cihaza zarar verecek kadar düşerse düşük voltaj koruma
#   sistemi devreye girecek ve ekran üzerinde E2 hatası görüntülenecektir." · Donma: "su sıcaklığı 5ºC altına düştüğünde ısıtıcı rezistans otomatik olarak devreye
#   girer ve su sıcaklığını 16ºC'ye kadar ısıtır." · "stand-by konumunda olması gerekmektedir."
#   s.15 "Voltaj tekrar istenilen değere geldiğinde E2 hatası ortadan kalkıp cihaz kaldığı yerden çalışmaya devam edecektir." · "İlk kullanımdan önce termosifonunuzun
#   su ile dolu olduğundan emin olun. V-Otomat şalteri açın." · "İlk açılışta display paneli üzerindeki göstergede ayarlanan sıcaklık yanıp sönecektir. Kısa bir süre
#   sonra yanıp sönme duracak, display kazan içindeki su sıcaklığını gösterecektir." · "aşağı yukarı okları ile ayarlayabilirsiniz." · "sıcaklığı 55ºC'ye
#   getirdiğinizde sıcaklık göstergesinde "EC" simgesi görünecektir." · "Sıcaklık ayarından sonra rezinstans devreye girecek ve sol alt köşedeki rezinstans işareti
#   aktif hale gelecektir." · "rezinstans işareti sönüp duş işaretinin olduğu lamba aktif hale gelecektir. Bu durumda sıcak suyunuz kullanıma hazırdır." · "Sıcaklık
#   ayarladığınız değerin 4 derece altına düştüğünde rezinstans tekrar devreye girecek" · Akıllı temizleme: "en az haftada bir kez su sıcaklığını 65ºC'ye çıkarır
#   ve 1 saat boyunca sıcaklığı bu seviyede tutar."
#   s.16 "Emniyet ventilinden boşaltma yapılmışsa sıcak su musluğundan suyun aktığını görmeden sistemi çalıştırmayın." · "Eco modda (55°C) çalıştırılması tavsiye
#   edilmektedir." · "rezistansı üzerinde oluşabilecek kireç Yetkili Servis'e temizletilmelidir." · "Cihaz uzun süre kullanılmayacaksa termostat ayarı en düşük
#   seviyeye ayarlanmalıdır."
# BİLEREK YAZILMAYANLAR: kazana su doldurma yöntemi (belge yöntem vermiyor; "doldurulmasını sağlayınız" aynen aktarıldı) · sigorta onarımı/değişimi (pano işi →
#   elektrikçi) · magnezyum anot, rezistans kireç temizliği (servis) · regülatör montajı (ad olarak anıldı) · markasız sayfadaki Arçelik/Baymak kodları (bu sayfa
#   yalnız Vestel TRV) · fiyat (#46).
# Alıntı denetim tablosu: vestel-termosifon-suyu-isitmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Evde geçici bir su ya da elektrik kesintisi olmadığından emin ol."
  - "Termosifonun V-otomat şalterinin açık olduğunu kontrol et; elektrik kesikse gelmesini bekle."
  - "Panelde açma/kapama düğmesiyle cihazın açık olduğunu ve ekranın su sıcaklığını gösterdiğini kontrol et."
  - "Sıcaklığı ok düğmeleriyle ayarla ve sol alt köşedeki rezistans işaretinin yandığını izle."
  - "Ekranda E2 varsa voltajın normale dönmesini bekle; hata kendiliğinden kalkar."
  - "Ekranda E3 varsa enerjiyi V-otomattan kes; kazan su dolu olmadan ve sıcak su musluğundan su akmadan enerjiyi geri verme."
  - "Duş işaretli sıcak su hazır göstergesi yanana kadar bekle."
faq:
  - q: "Vestel termosifon ekranında E1, E2, E3 ne demek?"
    a: "Vestel TRV-50 E / 65 E / 80 E kılavuzunda E1 termistör hatası, E2 düşük voltaj uyarısı, E3 susuz çalıştırmadır. E1'de yetkili servise başvurulur. E2 voltaj normale döndüğünde kendiliğinden kalkar ve cihaz kaldığı yerden çalışır. E3'te kazana su doldurulduktan sonra enerji kesilip yeniden verilir."
  - q: "Sıcaklığı biraz düşürüp yükselttim, ısıtma neden başlamadı?"
    a: "Kılavuza göre rezistans, su sıcaklığı ayarladığın değerin 4 derece altına düştüğünde yeniden devreye giriyor. Su sıcaklığı ayarın 4 dereceden daha az altındaysa rezistans işaretinin yanmaması bu çalışma biçiminin sonucu."
  - q: "Ekranda EC yazıyor, bu bir hata mı?"
    a: "Hayır. TRV kılavuzunda sıcaklığı 55 °C'ye getirdiğinde göstergede EC simgesi görünür; bu Eco işlevidir. Sıcaklığı yeniden ayarladığında ya da termosifonu kapattığında Eco işlevi sona erer. Vestel cihazın Eco modda çalıştırılmasını tavsiye ediyor."
  - q: "Emniyet ventilinden su damlıyor, arıza mı?"
    a: "Kılavuzun tablosuna göre bu normal bir durum: termosifon çalıştıkça basınç artar ve ventil su damlatır. Kılavuz ürünle birlikte verilen hortumun gidere bağlanmasını istiyor."
images:
  coverAlt: "Banyo duvarına monte beyaz bir elektrikli termosifonun ön panelinde dijital sıcaklık göstergesi ve yanında akmayan bir duş başlığı"
---

Duşu açıyorsun, su ısınmıyor. Vestel'in TRV-50 E / TRV-65 E / TRV-80 E termosifon kılavuzu bu tabloyu iki satıra ayırıyor: termosifon **hiç çalışmıyorsa** sebepler şalter ve elektrikle ilgili; çalışıyor ama **"Termosifon suyu ısıtmıyor."** ise kılavuzun tek çözümü servis. Arada bir de dijital panel var: göstergeler ve **E1, E2, E3** kodları hangi durumda olduğunu sana söylüyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Su ya da elektrik kesintisi var mı bak → V-otomat şalter açık mı → panel açık mı, ekran su sıcaklığını gösteriyor mu → sıcaklığı ayarla, rezistans işareti yansın → E2'de bekle, E3'te enerjiyi kesip kazanın dolmasını sağla → duş işaretli lamba yanınca su hazır. E1 ya da kodsuz ısıtmama: servis.

## Paneldeki yedi işaret

Kılavuz panelin yedi elemanını sayıyor; ısıtma sorununda bakacağın yer bunlar:

| No | Eleman | Ne söyler |
|---|---|---|
| 1 | **Sıcak su hazır göstergesi** (duş işareti) | Su ayarlanan sıcaklığa ulaştı |
| 2 | **Açma/kapama düğmesi** | Cihazı çalıştırır |
| 3 | **Rezistans göstergesi** (sol alt) | Rezistans şu an ısıtıyor |
| 4 | **Donma önleme göstergesi** | Donma emniyeti devrede |
| 5 | **Sıcaklık arttırma/azaltma düğmesi** | Ayar okları |
| 6 | **Sıcaklık/hata göstergesi** | Su sıcaklığı ya da E kodu |
| 7 | **Akıllı temizleme göstergesi** | Haftalık 65 °C hijyen çevrimi |

## Adım adım: evde denenecekler

**1. Kesinti olmadığından emin ol.** Vestel'in sorun giderme bölümü bu cümleyle başlıyor: teknik servisi aramadan önce arızanın **geçici su ya da elektrik kesintisi** gibi sorunlardan kaynaklanmadığından emin ol.

**2. V-otomat şaltere bak.** Termosifon hiç çalışmıyorsa tablonun ilk sebebi **şalterin kapalı olması**, çözüm **şalteri açmak.** Kılavuza göre V-otomat şalter **sigorta görevi görür**: kapalı konuma getirildiğinde ya da herhangi bir **elektrik kaçağında** termosifonun şebeke bağlantısını keser. **Elektrik kesikse** şebekeden yeniden gelmesini bekle. Tablonun üçüncü satırı **bina ana sigortasının atmış** olması; kılavuz burada "sigortayı onarın" diyor. Sigortayla ilgili bir onarım gerekiyorsa bu iş bir elektrik ustasınındır.

**3. Panelin açık olduğunu kontrol et.** Termosifon panelin üzerindeki **açma/kapama düğmesiyle** çalışır duruma geçiyor. İlk açılışta göstergede **ayarlanan sıcaklık yanıp söner**, kısa süre sonra yanıp sönme durur ve ekran **kazandaki su sıcaklığını** gösterir. Ekran tamamen kapalıysa 2. adıma dön.

**4. Sıcaklığı ayarla, rezistans işaretini izle.** Sıcaklık göstergenin sağındaki **aşağı-yukarı oklarla** ayarlanıyor. Ayardan sonra rezistans devreye giriyor ve **sol alt köşedeki rezistans işareti** yanıyor. Bir ayrıntı önemli: rezistans, su sıcaklığı **ayarladığın değerin 4 derece altına düştüğünde** yeniden devreye giriyor.

**5. E2'de bekle.** Şebeke dalgalanmasında voltaj cihaza zarar verecek kadar düşerse **düşük voltaj koruması** devreye giriyor ve ekranda **E2** görünüyor. Kılavuza göre voltaj istenilen değere döndüğünde **E2 kendiliğinden kalkıyor** ve cihaz **kaldığı yerden** çalışmaya devam ediyor. Tablonun "suyu geç ısıtıyor" satırı da düşük gerilimi sayıyor ve **uygun bir regülatör** kullanılmasını öneriyor.

**6. E3'te enerjiyi kes.** **E3 susuz çalıştırma** demek: cihaz herhangi bir nedenle susuz çalıştırıldığında koruma devreye giriyor. Kılavuzun talimatı: **enerjiyi V-otomattan kes** ve termosifonun **suyla doldurulmasını sağla**; **su dolu olduğundan emin olduktan sonra** enerjiyi tekrar ver. Kontrol için kılavuzun başka bir satırı işe yarıyor: emniyet ventilinden boşaltma yapılmışsa **sıcak su musluğundan suyun aktığını görmeden sistemi çalıştırma.** Doldurma tesisata müdahale gerektiriyorsa bunu servise bırak.

**7. Sıcak su hazır göstergesini bekle.** Su ayarlanan sıcaklığa ulaşınca **rezistans işareti söner** ve **duş işaretli lamba** yanar; kılavuzun cümlesiyle **sıcak suyun kullanıma hazırdır.**

## Kodlar tek tabloda

| Kod | Kılavuzun tanımı | Kılavuzun çözümü |
|---|---|---|
| **E1** | Termistör hatası | Yetkili servise başvur |
| **E2** | Düşük voltaj uyarısı | Voltaj normale dönünce kendiliğinden kalkar |
| **E3** | Susuz çalıştırma | Kazana su doldurulduktan sonra enerji kesilip yeniden verilir |

**EC** ise bir hata değil: sıcaklığı **55 °C'ye** getirdiğinde görünen **Eco** simgesi. Vestel cihazın ömrü ve enerji tasarrufu için **Eco modda (55 °C)** çalıştırılmasını tavsiye ediyor.

## Isıtmayla karışan iki otomatik işlev

- **Akıllı temizleme:** su uzun süre 60 °C'nin altında kalırsa hijyen için termosifon **en az haftada bir** suyu **65 °C'ye** çıkarıp **1 saat** bu seviyede tutuyor. O sırada rezistansın kendiliğinden çalışması bu işlevin parçası.
- **Donma emniyeti:** su **5 °C'nin altına** düşerse rezistans kendiliğinden devreye girip suyu **16 °C'ye** kadar ısıtıyor; bunun için cihazın **stand-by** konumunda ve şalterinin açık olması gerekiyor.

Markadan bağımsız kontrol listesi ve başka markaların ekran kodları için [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/) yazısına bakabilirsin. Benzer depolu termosifonun LED'li panelini anlatan kardeş yazı: [DemirDöküm termosifon suyu ısıtmıyor](/blog/demirdokum-termosifon-suyu-isitmiyor/).

## Ne zaman servis

Vestel'in tablosunda "servis çağırın" yazan satırlar:
- Elektrik geldiği hâlde **termosifon suyu ısıtmıyor** ("termosifon doğru çalışmıyor").
- Ekranda **E1** (termistör hatası).
- Su **geç ısınıyor** ve sebep **rezistansın kireçlenmesi** olabilir; kılavuz rezistanstaki kirecin **Yetkili Servis'e temizletilmesini** istiyor.
- **Termosifon sesli çalışıyor** (kireç ya da emniyet ventilinde kum/kireç parçası olabilir).
- Su **aşırı ısınıyor, buharlı akıyor.**

⛔ **Kendin-çöz sınırı burada biter.** Şalter, panel ayarı ve kodların izin verdiği adımlar kullanıcıya; rezistans, termistör, magnezyum anot, sigorta ve tesisat servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
