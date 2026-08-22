---
title: "Samsung buzdolabı hata kodları: 5E, 6E, 22E, 84E ve OF OF ne demek"
description: "Samsung buzdolabı ekranında 5E, 6E, 22E, 84E gibi bir kod mu var? Kodların doğrulanmış anlamları, OF OF demo modu tuzağı ve hangi noktada servis gerekir."
slug: "samsung-buzdolabi-hata-kodlari"
date: "2026-08-20"
category: "Buzdolabı"
# 🔴 22 Ağu 2026 — 85E DÜZELTİLDİ, 86E EKLENDİ (kod tablosu denetimi, TARAMA-1).
# Yazı 85E'yi "besleme voltajı çok düşük YA DA ÇOK YÜKSEK" diye veriyordu. Samsung
# ikisini AYIRIYOR: 85E "Compressor Under Voltage Error" (yalnız DÜŞÜK, brown-out),
# 86E "Compressor Over Voltage Error" (YÜKSEK, power surge). Tek satırda iki kod
# birleştirilmişti; okur yüksek voltaj vakasında karşılığını bulamıyordu.
# 22E'nin tanımı da gevşekti: Samsung 21E = dondurucu fanı, 22E = SOĞUTUCU fanı diyor;
# yazı "iç/evaporatör fanı" diyerek ikisini birbirine karıştırıyordu.
# Kaynak: samsung.com/us/support/troubleshooting/TSG10007315
# 📌 Eksik yayındı, eklendi: 21E · 83E · 85C (85C zararsızdır, OK 3 sn ile silinir).
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Telefon kamerası", "Kuru fırça", "Kullanım kılavuzu"]
steps:
  - "Kodu fotoğrafla. Ekranda ne yazıyorsa olduğu gibi kaydet; servisle konuşurken model numarasıyla birlikte en değerli bilgin bu olacak."
  - "Fişi çek ve 1-5 dakika bekle. Kart yeniden başlar ve geçici kodlar silinir; elektrik kesintisi sonrası bu durum Samsung'da özellikle yaygındır."
  - "Fişi tekrar tak ve kodun geri gelip gelmediğine bak. Geri gelmeyen kod çoğunlukla anlık bir takılmaydı; geri gelen kod gerçek bir bildirimdir."
  - "Ekranda OF OF varsa demo modunu kontrol et. Panel çalışıyor ama cihaz soğutmuyorsa büyük ihtimalle mağaza/demo modundasın; çıkış panelden tuş kombinasyonuyla yapılır, kılavuzundaki \"demo modu / cooling off\" bölümüne bak."
  - "85E, 86E ya da 85C görüyorsan beslemeyi sadeleştir. Buzdolabını uzatma kablosundan değil doğrudan duvar prizinden besle ve evde başka cihazların da etkilendiği bir voltaj sorunu olup olmadığına bak."
  - "22E görüyorsan cihazı fişten çekip birkaç saat dinlendir. Fanı kilitleyen buz çözülürse kod kaybolur; kısa sürede geri geliyorsa buzu üreten asıl neden duruyordur."
  - "Arka ızgarayı dışarıdan fırçayla temizle. Izgara tozla kaplıysa temizle ve cihazı duvardan birkaç santim öne çek; bu, kod beklemeden yapılabilecek ücretsiz bir iyileştirmedir."
  - "Kod hâlâ duruyorsa deneme yapmayı bırak. Kodu ve model numarasını birlikte söyleyerek servisle konuş; panellerin ve iç kapakların arkası servise aittir."
faq:
  - q: "Samsung buzdolabında hata kodunu nasıl resetlerim?"
    a: "En güvenli yöntem cihazın fişini çekip yaklaşık 1-5 dakika bekledikten sonra tekrar takmaktır; kart yeniden başlar ve geçici kodlar silinir. Bazı modellerde panel üzerindeki iki tuşa birlikte basılı tutarak da reset yapılır, ancak tuş kombinasyonu modele göre değiştiği için kılavuzuna bakmalısın. Reset sonrası kod geri geliyorsa arıza gerçektir ve servise anlatılmalıdır."
  - q: "Ekranda OF OF yazıyor ve buzdolabı soğutmuyor, bozuldu mu?"
    a: "Büyük ihtimalle bozulmadı. OF OF, soğutmanın kapalı olduğu mağaza/demo modunun göstergesidir; bu modda panel çalışır ama cihaz soğutmaz. Genellikle taşınma ya da temizlik sırasında tuşlara yanlışlıkla basılı tutulmasıyla devreye girer ve panelden yine tuş kombinasyonuyla kapatılır. Kombinasyon modele göre değiştiği için kılavuzdaki demo modu bölümüne bakmak en sağlıklısı."
  - q: "22E kodu varken cihazı kullanmaya devam edebilir miyim?"
    a: "22E soğutucu bölmenin fanını işaret eder (dondurucu fanı ayrı bir koddur: 21E) ve çoğu durumda arkasında fanı kilitleyen buzlanma vardır. Cihaz bir süre daha kısmen soğutabilir ama sorun kendiliğinden düzelmez; fan dönemedikçe soğuk hava bölmelere dağıtılamaz. Fişi çekip cihazı birkaç saat dinlendirmek buzu çözerek kodu geçici olarak giderebilir; kod tekrar geliyorsa defrost hattı için servis gerekir."
  - q: "Kod listelerinde cihazımın kodu yok, ne yapmalıyım?"
    a: "Samsung'un kod tablosu model ailesine ve üretim yılına göre ciddi biçimde değişir; her listede her kod bulunmaz. Kodu aynen not et ve model numaranla birlikte üreticinin destek sayfasından ya da kullanım kılavuzundan doğrula. Servisle konuşurken kodu ve model numarasını birlikte söylemen doğru teşhis için yeterlidir."
images:
  coverAlt: "Buzdolabı kapağındaki gösterge paneli"
---

Samsung buzdolapları panel konusunda konuşkandır: bir sensör veri gönderemediğinde ya da bir fan dönmediğinde ekrana 5E, 6E, 22E gibi bir kod düşer. Sorun şu ki bu kodların dili kullanıcıya hiçbir şey söylemez ve internette her listede farklı bir karşılık dolaşır. Bu yazıda yalnızca birden çok kaynakla doğrulayabildiğimiz kodları anlatıyoruz; emin olamadıklarımızı da dürüstçe söylüyoruz. Bir de neredeyse arıza sanılan ama arıza olmayan meşhur bir ekran var: OF OF.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ Samsung'da kod tablosu model ailesine göre değişir; aynı kod iki farklı seride farklı anlama gelebilir. Aşağıdakiler yaygın serilerde geçerli, birden çok kaynakla doğrulanmış karşılıklardır. Kesin tablo cihazının kullanım kılavuzundadır.

## Adım adım: kod görünce evde denenecekler

**1. Kodu fotoğrafla.** Ekranda ne yazıyorsa olduğu gibi kaydet; servisle konuşurken model numarasıyla birlikte en değerli bilgin bu olacak.

**2. Fişi çek ve 1-5 dakika bekle.** Kart yeniden başlar ve geçici kodlar silinir; elektrik kesintisi sonrası bu durum Samsung'da özellikle yaygındır.

**3. Fişi tekrar tak ve kodun geri gelip gelmediğine bak.** Geri gelmeyen kod çoğunlukla anlık bir takılmaydı; geri gelen kod gerçek bir bildirimdir.

**4. Ekranda OF OF varsa demo modunu kontrol et.** Panel çalışıyor ama cihaz soğutmuyorsa büyük ihtimalle mağaza/demo modundasın; çıkış panelden tuş kombinasyonuyla yapılır, kılavuzundaki "demo modu / cooling off" bölümüne bak.

**5. 85E, 86E ya da 85C görüyorsan beslemeyi sadeleştir.** Buzdolabını uzatma kablosundan değil doğrudan duvar prizinden besle ve evde başka cihazların da etkilendiği bir voltaj sorunu olup olmadığına bak.

**6. 22E görüyorsan cihazı fişten çekip birkaç saat dinlendir.** Fanı kilitleyen buz çözülürse kod kaybolur; kısa sürede geri geliyorsa buzu üreten asıl neden duruyordur.

**7. Arka ızgarayı dışarıdan fırçayla temizle.** Izgara tozla kaplıysa temizle ve cihazı duvardan birkaç santim öne çek; bu, kod beklemeden yapılabilecek ücretsiz bir iyileştirmedir.

**8. Kod hâlâ duruyorsa deneme yapmayı bırak.** Kodu ve model numarasını birlikte söyleyerek servisle konuş; panellerin ve iç kapakların arkası servise aittir.

## Kod görünce ilk hamle: not al, resetle

**Kendin kontrol et:** Kodu fotoğrafla, sonra fişi çekip 1-5 dakika bekle ve tekrar tak. Elektrik kesintisi sonrası kartın geçici kod göstermesi Samsung'da özellikle yaygındır; resetle silinen ve geri gelmeyen kod çoğunlukla anlık bir takılmadır. Geri gelen kod ise gerçek bir bildirimdir — silmeye uğraşmak yerine anlamını çöz.

## Doğrulanmış kodlar ve anlamları

| Kod | En yaygın karşılığı | Ne olur |
|---|---|---|
| 5E | Buz çözme (defrost) sensörü hatası | Karlanma çözülemez, soğutma zayıflar |
| 6E | Ortam sensörü hatası | Genelde elektrik kesintisi sonrası görülür |
| 21E | Dondurucu fanı hatası | Dondurucuya soğuk hava dağıtılamaz |
| 22E | Soğutucu fanı hatası | Soğutucu bölmeye soğuk hava dağıtılamaz |
| 83E | Kompresöre anormal akım algılandı | Cihaz kendini korumaya alır |
| 84E | Kompresör kilitli / kalkamıyor | Soğutma tamamen durabilir |
| 85E | Kompresör **düşük** voltaj hatası (brown-out) | Cihaz kendini korumaya alır |
| 86E | Kompresör **yüksek** voltaj hatası (ani yükselme) | Cihaz kendini korumaya alır |
| 85C | Beslemede düşük voltaj algılandı | ⚠️ Arıza değil — OK tuşuna 3 sn basınca silinir |

**5E ve 22E** aynı hattın iki ucudur: defrost sistemi karlanmayı çözemezse buz zamanla fanı kilitler ve fan koduna da yol açabilir. Bu yüzden 22E gören birçok kullanıcı fişi çekip cihazı birkaç saat dinlendirdiğinde kodun kaybolduğunu görür — buz çözülmüştür. Ama kod kısa sürede geri geliyorsa buzu üreten asıl neden (defrost hattı) duruyordur; bu servis işidir.

**6E** çoğunlukla masum çıkar: elektrik kesintisi sonrası ortam sensörü verisi karışmıştır ve reset ile silinir. **84E, 85E ve 86E** ise ciddi tarafın kodlarıdır; 84E kompresörün kalkamadığını bildirir.

**85E ile 86E'yi karıştırma** — Samsung bunları ayrı ayrı tanımlıyor ve ikisi zıt durumları anlatıyor: **85E** şebeke geriliminin cihazın çalışma aralığının **altına** düştüğünü (brown-out), **86E** ise **üstüne** çıktığını (ani gerilim yükselmesi) bildirir. İnternetteki listelerin ikisini tek satırda birleştirmesinin Samsung tarafında bir dayanağı yok.

Bir de kolayca panik yaratan bir kod var: **85C**. Bu bir arıza değil, beslemede düşük voltaj algılandığını söyleyen bir bilgi mesajıdır ve Samsung'a göre **OK tuşuna 3 saniye basınca silinir**.

**Kendin kontrol et:** 85E, 86E ya da 85C görüyorsan buzdolabını uzatma kablosundan değil doğrudan duvar prizinden beslediğinden emin ol ve evde başka cihazların da etkilendiği bir voltaj sorunu olup olmadığına bak. Bina kaynaklı gerilim sorunu varsa bu buzdolabının değil tesisatın konusudur — ve tekrarlayan gerilim dalgalanmaları zamanla kompresörü yıpratır.

## OF OF: arıza değil, demo modu

Ekranda **OF OF** (bazı modellerde O FF benzeri) görüyorsan ve panel çalıştığı hâlde cihaz soğutmuyorsa, büyük ihtimalle arızayla değil **mağaza/demo moduyla** karşı karşıyasın. Bu mod, teşhir cihazlarında paneli gösterip soğutmayı kapatmak için vardır ve evde genellikle taşınma ya da temizlik sırasında tuşlara yanlışlıkla uzun basılmasıyla devreye girer.

Çıkış da panelden yapılır: birçok modelde iki tuşa birlikte birkaç saniye basılı tutmak yeterlidir, ancak hangi ikili olduğu modele göre değişir — kılavuzundaki "demo modu / cooling off" bölümüne bak. Bu tek kontrol, "buzdolabım bozuldu" telaşlarının hatırı sayılır bir kısmını beş dakikada bitirir.

## Kod yokken de dinlemeye değer belirtiler

Ekran temiz diye cihaz sağlam demek değildir; kod sistemi yalnızca elektronik kartın izleyebildiği devreleri görür. Dondurucu bölmenin arka duvarında kalın karlanma birikiyorsa defrost hattı kod üretmeden zayıflıyor olabilir. Fan sesi eskisinden belirgin biçimde arttıysa çoğu zaman pervaneye buz sürtünüyordur — bu, ileride gelecek 22E'nin erken habercisidir. Soğutma kademeli zayıflıyorsa ve arka ızgara tozla kaplıysa, kod beklemeden ızgarayı dışarıdan fırçayla temizlemek ve cihazı duvardan birkaç santim öne çekmek yerinde bir hamledir.

⛔ **Panelin ve iç kapakların arkasına girme.** Sensörler, fanlar ve defrost ısıtıcısı iç panellerin arkasındadır; orada 220V hat ve delinirse cihazı bitiren soğutucu borular var. Tuş kombinasyonları ve reset kullanıcıya aittir; söküm servise.

## Hangi noktadan sonra servis işi

Reset ve demo modu kontrolünden sonra hâlâ kod varsa sıra teşhise gelir. 5E ve 22E kalıcıysa defrost/fan hattında parça değişimi gerekir; 84E kompresör tarafını işaret eder ve kesinlikle kullanıcı işi değildir. Servisle konuşurken elindeki en değerli bilgi kodun kendisi ve model numarasıdır — ikisini birlikte söylediğinde doğru parçayla gelinme ihtimali belirgin şekilde artar.

Bir not: bazı listelerde geçen ama farklı kaynaklarda farklı anlamlar verilen kodları (örneğin kapı sensörü / buz yapıcı karışan 8E gibi) bu yazıya bilerek almadık; onlarda tek doğru adres kılavuz ve yetkili servistir.

Markadan bağımsız kod mantığını ve Beko ile Vestel modellerinin kodlarını merak ediyorsan, benservis.com blogundaki buzdolabı hata kodları yazısı geniş resmi anlatıyor.

Cihazının koduna göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
