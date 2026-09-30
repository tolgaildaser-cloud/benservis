---
title: "Profilo bulaşık makinesi kurutmuyor"
description: "Profilo bulaşık makinesi kurutmuyorsa Profilo'nun sırası: parlatıcı, kurutmalı program, VarioSpeed, Ekstra Kuru, yerleştirme ve 30 dakika bekleme."
slug: "profilo-bulasik-makinesi-kurutmuyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200.
# Belge adresi Profilo'nun kendi ürün sayfasından (www.profilo.com/tr/tr/product/beyaz-esya/bulasik-makineleri/BM6380MA) alındı; titleKey "user-manuals". #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Bosch/Siemens'in yayındaki belirti sayfaları açılmadı, metin Profilo belgesinden yeniden yazıldı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-profilo-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (C) Profilo BM6380MA kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001951966_E.pdf  52 s.  md5 2e7b3ee8867b8a5fe2e9a021a73228f8
#  (D) Profilo BMS623V5 kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002038110_A.pdf  52 s.  md5 024c3cd56f8521f96d6f5af2b6d9aa38 — D'nin arıza tablosunda "kuru değil" satırı YOK; bu sayfa yalnız C'ye dayanır.
# Arıza tablosu (C s.39-41) "Bulaşıklar kuru değil.": parlatıcı kullanılmadı/dozaj çok düşük → "1. Parlatıcı doldurunuz. 2. Parlatıcı ilave etme miktarını ayarlayınız."
#   · kurutma aşaması yok/çok kısa → "Kurutma fonksiyonlu bir program seçiniz, örn. Yoğun, Güçlü veya EKO programı." + "Bazı opsiyonel tuşlar kurutma sonucunu azaltır, örn. Variospeed."
#   · girintilerde su → "Bulaşıkları mümkün olduğunca yanlamasına yerleştiriniz." · kombine temizleyici → parlatıcı kullan / başka kombine deterjan
#   · "Kurutmayı yoğunlaştırmak için ekstra kurutma fonksiyonu etkinleştirilmemiş." → etkinleştir · erken çıkarma → "Bulaşıkları ancak program sona erdikten 30 dakika sonra boşaltınız."
#   · parlatıcının kurutma performansı sınırlı → "Marka parlatıcı kullanınız. Ekolojik ürünlerin etkinlik gücü sınırlı olabilir."
#   · "Plastik bulaşıklar kurumamış." → "Hata yok. Plastik, ısı depolama özelliği daha düşük olduğundan daha kötü kurur." · "Çatal bıçaklar kuru değil." → tek tek yerleştir, temas yerleri önle
#   · "Yıkama işleminden sonra cihazın iç kısımları ıslak." → "Hata yok. Kondansasyon kurutma ..." "Herhangi bir işlem uygulamaya gerek yoktur."
# Diğer: C s.25 parlatıcı doldurma (dile bastır, kapağı kaldır; max işaretine kadar; taşarsa temizle → aşırı köpük; kapak duyulur şekilde oturur; "En iyi kurutma sonuçlarını elde etmek için parlatıcı kullanınız.")
#   · C s.26 miktar ayarı: fabrika r:05; "Yüksek kademede ... daha iyi bir kurutma sonucu elde edilir." · C s.33 İlave parlatıcı r:00-r:06, "r:00 kademesi ile parlatıcı sistemini kapatınız."
#   · C s.33 Yoğun kurutma d:00/d:01 ("Hassas bulaşıklar için uygun değildir.") · C s.19 Ekstra Kuru ek fonksiyonu (durulama sıcaklığı artırılır, kurutma uzar; plastik için uygun; enerji biraz yüksek, süre uzar)
#   · C s.16-18 program akışları: Güçlü / 1 Saat 65° / Ekonomik 50° / Hassas 40° "Kurutma" içerir; Ekspres 30' 45° akışında Kurutma yok · C s.18 VarioSpeed: süre %20-%50 kısalır
#   · C s.30 "çukur veya derinliği olan parçaları suyun akıp boşalabilmesi için yanlamasına yerleştiriniz" · C s.31 "bulaşıkları alttan üste doğru boşaltınız"
#   · C s.28 "Parlatıcının fonksiyonu, kombine deterjanlarda sınırlıdır." + "Özel kurutma performansına sahip tabletler kullanınız." · C s.27 kombine deterjan 21 °dH sınırı · C s.37 uzman personel uyarısı · C s.47 E-Nr./FD
# BİLEREK YAZILMAYANLAR: fan/rezistans/ısıtıcı teşhisi (belgede yok) · kurutma için kapak aralama tavsiyesi (C s.35'te yalnız uzun süre kullanılmayınca koku için) · tuş sembolleri (metin katmanında okunmuyor).
# Alıntı denetim tablosu: profilo-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Kuru bir bez"]
steps:
  - "Parlatıcı kabının kapağını açıp parlatıcıyı max işaretine kadar doldur, taşanı temizle."
  - "Temel ayarlardan parlatıcı miktarını kontrol et; r:00 ya da düşük bir kademedeyse yükselt."
  - "Akışında kurutma aşaması olan bir program seç; örneğin Güçlü ya da Ekonomik 50°."
  - "VarioSpeed ek fonksiyonu açıksa kapat."
  - "Modelinde varsa Ekstra Kuru ek fonksiyonunu ya da Yoğun kurutma ayarını aç."
  - "Çukur parçaları yanlamasına, çatal bıçakları birbirine değmeyecek şekilde yerleştir."
  - "Program bittikten sonra bulaşıkları 30 dakika bekleyip alttan üste doğru boşalt."
faq:
  - q: "Profilo bulaşık makinesi bulaşıkları ıslak bırakıyor, arıza mı?"
    a: "Önce Profilo'nun listesine bak. BM6380MA kullanım kılavuzundaki arıza tablosu 'Bulaşıklar kuru değil' satırında şunları sayıyor: parlatıcı kullanılmamış ya da dozaj çok düşük, programın kurutma aşaması yok ya da çok kısa, girintilerde su birikmiş, kombine tabletin kurutma özellikleri iyi değil, ekstra kurutma açık değil, bulaşıklar çok erken çıkarılmış veya kullanılan parlatıcının kurutma performansı sınırlı. Bunların hepsi kullanıcı tarafında düzeltilebilir."
  - q: "Plastik kaplar hep ıslak çıkıyor, neden?"
    a: "Profilo'nun tablosu bunu arıza saymıyor: plastik, ısı depolama özelliği daha düşük olduğu için daha kötü kurur. Tabloda bunun için bir çözüm yazmıyor. Kılavuzdaki Ekstra Kuru ek fonksiyonu ise durulama sıcaklığını artırıp kurutma aşamasını uzatıyor ve Profilo'ya göre özellikle plastik parçaları kurutmak için uygun; enerji tüketimi biraz daha yüksek, çalışma süresi daha uzun oluyor."
  - q: "Program bitince makinenin içi ıslak, normal mi?"
    a: "Evet. Profilo'nun tablosu bu durum için 'Hata yok' diyor: kondansasyon kurutmada havadaki nem makinenin iç yüzlerinde yoğuşur, aşağı akar ve pompalanıp boşaltılır. Profilo bu durumda herhangi bir işlem gerekmediğini yazıyor."
  - q: "Hepsi bir arada tablet kullanıyorum, yine de parlatıcı koymalı mıyım?"
    a: "Profilo'ya göre parlatıcının fonksiyonu kombine deterjanlarda sınırlıdır ve parlatıcı kullanıldığında genelde daha iyi sonuç alınır. Arıza tablosu da kombine temizleyicinin kurutması iyi değilse kurutma performansını artırmak için parlatıcı kullanmayı ya da kurutması daha iyi başka bir kombine deterjana geçmeyi öneriyor. Profilo ayrıca kombine deterjanların genelde 21 °dH su sertliğine kadar etki ettiğini, bunun üzerinde özel tuz ve parlatıcı eklenmesi gerektiğini yazıyor."
images:
  coverAlt: "Program sonunda kapağı açılmış bulaşık makinesinin üst sepetinde üzerinde su damlaları kalmış plastik saklama kapları ve bardaklar"
---

Program bitti, kapağı açtın ve bulaşıklar hâlâ ıslak. Profilo'nun bulaşık makinesi kullanım kılavuzundaki arıza tablosunda bu durum için ayrı bir satır var: **"Bulaşıklar kuru değil."** Profilo'nun bu satırda saydığı nedenlerin hepsi kullanıcı tarafında: **parlatıcı, seçilen program ve ek fonksiyonlar, yerleştirme ve bulaşıkları çıkarma zamanı.** Bu yazıda Profilo'nun listesini sırayla açıyoruz; plastik kaplar ve makinenin iç duvarındaki damlalar için de Profilo'nun ne dediğine bakıyoruz. Kaynak, Profilo'nun BM6380MA modeli için yayımladığı kullanım kılavuzu; tuş ve ayar adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Parlatıcıyı doldur ve miktarını kontrol et → kurutma aşaması olan bir program seç → VarioSpeed'i kapat → varsa Ekstra Kuru ya da Yoğun kurutmayı aç → çukur parçaları yanlamasına koy → bulaşıkları program bittikten 30 dakika sonra çıkar. Plastiklerin geç kuruması ve iç duvarlardaki damlalar Profilo'ya göre arıza değil.

## Adım adım: evde denenecekler

**1. Parlatıcıyı doldur.** Profilo'nun tablosundaki ilk neden: **parlatıcı kullanılmadı veya dozaj çok düşük ayarlandı.** Profilo'ya göre **en iyi kurutma sonuçları için parlatıcı** kullanılmalı; panelde parlatıcı ilave etme göstergesi yandığında parlatıcı eklenir. Parlatıcı kabının kapağındaki dile bastırıp kapağı kaldır, parlatıcıyı **max işaretine kadar** doldur. Taşan parlatıcıyı temizle; Profilo'ya göre taşan parlatıcı yıkama sırasında **aşırı köpük** oluşturabilir. Kapağı kapat, duyulur şekilde yerine oturur. Yalnız evde kullanılan bulaşık makineleri için uygun parlatıcı kullan.

**2. Parlatıcı miktarını kontrol et.** Tablonun ikinci önerisi: **parlatıcı ilave etme miktarını ayarla.** Profilo'nun temel ayarlar tablosunda parlatıcı miktarı **r:00 ile r:06** arasında seçiliyor, fabrika ayarı **r:05;** **r:00 parlatıcı sistemini kapatır.** Profilo'ya göre **yüksek kademede** yıkama sırasında daha fazla parlatıcı uygulanır, su lekeleri azalır ve **daha iyi bir kurutma sonucu** elde edilir. Ayar adımları kılavuzundaki "Parlatıcı ilave etme miktarının ayarlanması" bölümünde.

**3. Kurutmalı bir program seç.** Tablodaki neden: **programın veya program seçeneğinin kurutma aşaması yok veya çok kısa.** Profilo'nun çözümü **kurutma fonksiyonlu bir program** seçmek. BM6380MA'nın program tablosunda **Güçlü, 1 Saat 65°, Ekonomik 50°** ve **Hassas 40°** programlarının akışında "Kurutma" aşaması yazıyor; **Ekspres 30' 45°** programının akışında ise kurutma aşaması yok.

**4. VarioSpeed'i kapat.** Aynı satırdaki not: **bazı opsiyonel tuşlar kurutma sonucunu azaltır, örneğin VarioSpeed.** Profilo'ya göre VarioSpeed çalışma süresini programa bağlı olarak **yüzde 20 ile 50 arasında** kısaltıyor. Kurutma sorunu yaşıyorsan bu ek fonksiyonu kapalı tut.

**5. Ekstra kurutmayı aç.** Tablodaki bir diğer neden: **kurutmayı yoğunlaştırmak için ekstra kurutma fonksiyonu etkinleştirilmemiş.** Profilo'nun kılavuzunda iki seçenek var: **Ekstra Kuru** ek fonksiyonu durulama sıcaklığını artırıp kurutma aşamasını uzatıyor; enerji tüketimi biraz daha yüksek, süre daha uzun. Temel ayarlardaki **Yoğun kurutma** (d:01) da durulama sıcaklığını artırıyor; Profilo'ya göre bu ayar **hassas bulaşıklar için uygun değil.** Hangi seçeneğin olduğu modele göre değişir.

**6. Doğru yerleştir.** Tablodaki neden: **bulaşıkların veya çatal bıçakların girintilerinde su birikiyor.** Profilo'nun çözümü bulaşıkları **mümkün olduğunca yanlamasına** yerleştirmek; yerleştirme bölümüne göre çukur ya da derin parçalar suyun akıp boşalabilmesi için yanlamasına, kaplar girinti kısmı aşağı bakacak şekilde konur. Çatal bıçaklar için tablodaki çözüm: mümkünse **tek tek** yerleştir ve **temas yerleri** olmasını önle.

**7. 30 dakika bekle, alttan başla.** Tablodaki son neden: **bulaşıklar cihazdan çok erken çıkarıldı veya kurutma süreci henüz sona ermemişti.** Profilo'nun önerisi programın bitmesini beklemek ve bulaşıkları **program sona erdikten 30 dakika sonra** boşaltmak. Boşaltırken Profilo'nun sırası: bulaşıklara su damlamaması için **alttan üste doğru** boşalt.

## Arıza olmayan iki durum

**Plastik kaplar daha geç kurur.** Profilo'nun tablosu bunu **"Hata yok"** diye açıklıyor: plastik, ısı depolama özelliği daha düşük olduğundan daha kötü kurur.

**İç duvarlarda su damlaları.** Profilo'ya göre bu da **hata değil:** makine kondansasyon kurutmayla çalışır; havadaki nem iç yüzlerde yoğuşur, aşağı akar ve pompalanıp boşaltılır.

Parlatıcının yanında kullandığın ürün de sonucu etkiliyor: Profilo'nun tablosu kullanılan parlatıcının kurutma performansı sınırlıysa **marka parlatıcı** kullanmayı öneriyor ve ekolojik ürünlerin etkinliğinin sınırlı olabileceğini yazıyor. Parlatıcı ve tuz ayarının ayrıntısı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına, markadan bağımsız anlatım için [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/) sayfasına bakabilirsin. Bulaşıklar kurusa da kirli çıkıyorsa kardeş rehberimiz [Profilo bulaşık makinesi temiz yıkamıyor](/blog/profilo-bulasik-makinesi-temiz-yikamiyor/) yazısına geç.

## Ne zaman servis

Parlatıcı dolu ve miktarı uygun, kurutmalı program seçili, VarioSpeed kapalı, yerleştirme doğru ve bulaşıkları 30 dakika bekleyip çıkardığın hâlde cam ve porselen de ıslak çıkıyorsa ya da ekranda bir hata kodu görünüyorsa müşteri hizmetlerine başvur. Profilo'nun uyarısı açık: **cihazda onarımları sadece bunun eğitimini almış uzman personel yapabilir.** Ararken cihaz kapağının iç tarafındaki tip etiketinde yazan **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, program, ayar ve yerleştirme kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Islak kalan hangi bulaşıklar: yalnız plastik mi, cam ve porselen de mi?
2. Parlatıcı göstergesi yanıyor mu, kap dolu mu?
3. Hangi programı seçiyorsun, VarioSpeed açık mı?
4. Kombine tablet mi, ayrı deterjan mı kullanıyorsun?
5. Bulaşıkları program bittikten ne kadar sonra çıkarıyorsun?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
