---
title: "Siemens bulaşık makinesi hata kodları: E22, E24 ve E25 ne anlatıyor"
description: "Siemens bulaşık makinesinde E22, E24, E25, E12 ve E09 kodlarının doğrulanmış anlamı, Bosch ile ortak kod dili, evde ücretsiz kontroller ve servis sınırı."
slug: "siemens-bulasik-makinesi-hata-kodlari"
date: "2026-08-21"
category: "Bulaşık makinesi"
# 🔴 22 Ağu 2026 — E08 ve E11 KALDIRILDI (kod tablosu denetimi, TARAMA-1).
# İkisi de BSH'nin yayımladığı bulaşık makinesi kod sayfalarında geçmiyor.
# Bosch TR'nin yayımladığı liste: E09 E12 E14 E15 E16/E17 E18 E22 E23 E24 E25 + "diğer".
# BSH E16 ile E17'yi TEK sayfada, TEK anlamla veriyor: "su alma sisteminde hata veya
# temiz su girişinde hata". E18'in anlamı da "su seviyesi düşük" değil: "su şebeke
# bağlantısındaki filtreler veya AquaStop hortumu tıkanmış".
# 📌 Neff iddiası yumuşatıldı: neff-home.com'da hata kodu sayfası yok.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Havlu", "Sığ bir kap", "Küçük fırça (eski diş fırçası)", "Sünger"]
steps:
  - "Ekrandaki kodu fotoğrafla ve model numarasını kapağın yan kenarındaki etiketten oku."
  - "Makineyi kapat, fişini çek, birkaç dakika bekle ve yeniden dene."
  - "Alt sepeti çıkar, tabandaki filtre grubunu çevirerek al ve akan suda temizle."
  - "Püskürtme kollarının deliklerini kontrol et, tıkalı delik varsa fırçayla aç."
  - "Tahliye hortumunu gidere kadar izle; bükülme, ezilme ya da tıkalı sifon var mı bak."
  - "Musluğun tam açık olduğunu ve giriş hortumunun ezilmediğini kontrol et."
  - "Kısa bir programla dene; kod tekrar geliyorsa kodu ve model numarasını not edip servisi ara."
faq:
  - q: "Siemens bulaşık makinesi E22 hatası ne demek?"
    a: "E22, makinenin filtre sisteminin kirlendiğini ya da tıkandığını bildirir. Tabandaki filtre grubunda biriken yağ, yemek artığı ve kireç suyun dolaşımını zorlaştırır; makine bunu algılayınca programı durdurur. İyi haber, bu kodun çözümü neredeyse her zaman kullanıcı tarafındadır: filtre grubunu çıkarıp akan suda temizlemek çoğu vakayı kapatır. Filtre tertemizken tekrar eden E22'de ise şüphe tahliye hattının devamına kayar."
  - q: "E24 ile E25 arasındaki fark ne?"
    a: "İkisi de suyun dışarı atılamadığını söyler ama farklı noktayı işaret eder. E24 daha çok makinenin dışındaki hattı anlatır: tıkalı ya da bükülmüş tahliye hortumu, kapalı sifon bağlantısı, yağla dolmuş gider. E25 ise tahliye pompasının önünün kapandığını, yabancı bir cismin ya da tıkanıklığın pompayı bloke ettiğini bildirir. Bu yüzden E24'te önce hortum ve gider, E25'te önce filtre bölgesi kontrol edilir."
  - q: "Siemens ve Bosch bulaşık makinelerinde kodlar gerçekten aynı mı?"
    a: "Siemens, Bosch ve Profilo için büyük ölçüde evet: üçü de BSH grubunun ortak platformunu kullanır ve E22, E24, E25 gibi kodlar bu üçünde aynı durumu anlatır. Farklılaşan şey kodun anlamı değil, panelin onu nasıl gösterdiğidir. Neff ve Gaggenau için aynı şeyi söyleyemiyoruz; ikisi de kendi sitelerinde bir hata kodu sayfası yayımlamıyor, dolayısıyla kod tablosu ortaklığının belgesi yok."
  - q: "E12 kodunu bir daha görmemek için ne yapmalıyım?"
    a: "E12, ısıtıcının üzerinde kireç ya da kir tabakası oluştuğunu bildirir; sert sulu bölgelerde bu tabaka zamanla kaçınılmaz biçimde birikir. Kalıcı çözüm makinenin su yumuşatma tarafını doğru kurmaktan geçer: tuz haznesini boş bırakmamak, sertlik ayarını bölgenin suyuna göre yapmak ve düzenli aralıklarla makine temizleyicisiyle boş bir program çalıştırmak. Bu üçü birlikte yapıldığında hem kod uzaklaşır hem de yıkama kalitesi belirgin biçimde düzelir."
images:
  coverAlt: "Bulaşık makinesi çizimi, panelinde yanıp sönen hata göstergesi ve yanında kod listesi"
---

Akşam programını kurdun, makine birkaç dakika çalıştı ve durdu. Kapağı açtın, tabanda su birikmiş, ekranda ise **E24** yazıyor. Ya da hiç durmadı ama bulaşıklar soğuk ve yağlı çıktı, panelde **E09** duruyor. Siemens bulaşık makineleri arızayı bu kısa kodlarla anlatır ve bu kodların iyi tarafı şu: büyük bir kısmı bir parçanın yandığını değil, suyun ya da havanın gitmesi gereken yere gidemediğini söyler. Bu yazıda Siemens'te **birden çok kaynakla doğrulayabildiğimiz** kodları, hangisinin evde ücretsiz çözüldüğünü ve nerede durman gerektiğini anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ **Uyarı:** Kod şeması model kuşağına göre değişebilir; aşağıdakiler yaygın serilerde birden çok bağımsız kaynakla doğrulanmış karşılıklardır. Kesin tablo cihazının kullanım kılavuzundadır. Doğrulayamadığımız kodları bilerek yazmadık — nedenini aşağıda ayrı bir başlıkta anlattık.

## Adım adım: kod geldiğinde ilk 20 dakika

**1. Kodu ve modeli kayda geçir.** Ekranı fotoğrafla, model numarasını kapağın yan kenarındaki etiketten oku. Kod tek başına yarım bilgidir; model numarasıyla birlikte tam bilgidir.

**2. Bir kez resetle.** Makineyi kapat, **fişini çek**, birkaç dakika bekle ve yeniden dene. Geçici bir takılma buradan sonra geri gelmez.

**3. Filtre grubunu temizle.** Alt sepeti çıkar, tabandaki filtreyi çevirerek al, akan suyun altında durula ve oyuğunu küçük bir fırçayla temizle. Kodların en büyük grubu buradan çözülür.

**4. Püskürtme kollarına bak.** Kolları çevir, deliklerin tıkalı olup olmadığını kontrol et. Tıkalı delik hem yıkama kalitesini düşürür hem de su dolaşımı kodlarını besler.

**5. Tahliye hattını izle.** Tahliye hortumunu makinenin arkasından gidere kadar gözünle takip et; ezilme, keskin bükülme ya da tıkalı bir sifon arıyorsun. Aynı hattaki başka bir gider de yavaş boşalıyorsa sorun makinede değildir.

**6. Su girişini kontrol et.** Musluk sonuna kadar açık mı, giriş hortumu mobilya altında ezilmiş mi? Su alma kodlarının en yaygın sebebi bu ikisidir.

**7. Dene ve not al.** Kısa bir programla tekrar dene. Kod aynı noktada geri geliyorsa artık silmeyi bırak: kodu, model numarasını ve makinenin hangi adımda durduğunu not edip servisle konuş.

## Aynı kod dili, farklı panel

Siemens, Bosch ve Profilo aynı grubun (BSH) ortak platformu üzerinde çalışır ve üçünün kod tabloları da yayımlanmıştır. Bunun pratik sonucu şu: **kodların anlamı bu üç markada ortaktır**, değişen şey panelin o kodu nasıl gösterdiğidir. Neff ve Gaggenau da aynı gruptandır ama kendi kod sayfalarını yayımlamıyorlar; onlar için aynı kesinlikle konuşamayız.

Siemens'te kod çoğu zaman kalan süreyi gösteren rakamların yerinde belirir. Tam ankastre modellerde gösterge kapağın üst kenarındadır ve kapak kapalıyken görünmez; bazı modellerde kodla birlikte bir uyarı sembolü de yanar.

Bunun tersi de doğru: Bosch için bulduğun bir çözüm Siemens'te de geçerlidir. Tabanda su ve taşma güvenliği anlamına gelen **E15** için ayrı bir rehberimiz var; o kod sende yanıyorsa Siemens bulaşık makinesi E15 hatası yazımız işi baştan sona anlatıyor, burada tekrar etmiyoruz.

## Tahliye zinciri: E22, E24, E25 ve E23

Şikâyetlerin en büyük kümesi burada toplanır; dördü aynı zincirin halkalarıdır.

| Kod | Doğrulanmış karşılığı | İlk hamle |
|---|---|---|
| E22 | Filtre sistemi kirli ya da tıkalı | 🛠️ Filtre grubunu çıkar, akan suda temizle |
| E24 | Su atılamıyor: tahliye hortumu ya da gider tarafı | 🛠️ Hortumdaki bükülmeyi ve sifonu kontrol et |
| E25 | Tahliye pompasının önü kapalı, yabancı cisim ya da tıkanıklık | 🛠️ Filtre bölgesini temizle, sonra dene |
| E23 | Tahliye (pis su) pompası arızası | 🔧 Servis |

Sıralama önemli: **E22 filtreyi**, **E24 makinenin dışındaki hattı**, **E25 pompanın önündeki tıkanıklığı**, **E23 ise pompanın kendisini** işaret eder. İlk üçü çoğu zaman ücretsiz biter; sonuncusu servis işidir.

**Kendin kontrol et:** Filtreyi çıkardığında haznenin dibine bak. Su duruyorsa tıkanıklık filtrenin arkasındadır ve E24/E25 tarafını düşünmelisin. Hazne boş, filtre tertemiz ve kod hâlâ geliyorsa artık ölçüm ya da pompa tarafındasın — orası senin alanın değil.

## Su alma tarafı: E16, E17 ve E18

**E18**, makineye giren su akışının yetersiz kaldığını bildirir. Sebep neredeyse her zaman makinenin dışındadır: kısık musluk, ezilmiş giriş hortumu ya da hortumun makine tarafındaki küçük süzgecinde biriken kireç ve tortu.

**E16 ve E17** BSH'nin sayfalarında **tek başlık altında ve tek anlamla** verilir: su alma sisteminde ya da temiz su girişinde hata. Üreticinin çözümü de tek: temiz su girişini kontrol et — köşe vana açık mı, giriş hortumu bükülmemiş mi. Bu hatayla sık karşılaşıyorsan cihazda gerçek bir arıza olma ihtimali yüksektir ve teknisyen ister.

⚠️ İnternetteki listelerin bu iki koda ayrı ve birbirine zıt anlamlar vermesinin (biri "beklenmedik su alma", diğeri "şamandıra") üretici tarafında bir dayanağı yok.

**Kendin kontrol et:** Musluğu kapat, giriş hortumunu elinle sök ve makine tarafındaki süzgeci akan suda fırçala; altına havlu ser, bir miktar su gelir. Sonra elle sıkıca geri tak.

## Isıtma tarafı: E09 ve E12

**E09** ısıtma bölgesine bakar. BSH bu kod için ayrı bir sayfa yayımlıyor ve talimatı net: *sağlığınız ve güvenliğiniz için sorunu evde tek başınıza çözmeyi denemeyin, şebeke suyunu kesin ve cihazı kapatın.* Belirtisi klasiktir — program normal görünür ama bulaşıklar yağlı ve soğuk çıkar.

📌 İnternette bu bölgeye yerleştirilen **E11** kodu BSH'nin yayımladığı listelerde geçmiyor; o yüzden burada yer vermiyoruz.

**E12** ise farklıdır ve Türkiye'nin sert sulu bölgelerinde özellikle tanıdıktır: ısıtıcının üzerinde **kireç ya da kir tabakası** oluşmuştur. Bu bir parça arızası değil, bakım eksikliğidir.

**Kendin kontrol et:** Tuz haznesi dolu mu, sertlik ayarı bölgenin suyuna göre yapılmış mı, parlatıcı bitmiş mi? Bu üçünü düzeltip makine temizleyicisiyle boş bir program çalıştırmak E12'nin sebebini doğrudan hedefler. Tuz ve parlatıcı ayarını anlattığımız ayrı bir yazımız da var.

## Yıkama ve kurutma tarafı: E20, E21, E19 ve E07

- **E21** — sirkülasyon (yıkama) pompası arızası: su içeride dolaştırılamaz, bulaşıklar durgun suda kalır.
- **E20** — aynı bölgede algılanan pompa sorunu; belirtisi E21'e benzer.
- **E19** — deterjan gözünün açılmaması: tablet ya da toz haznede kalır, bulaşıklar yıkanmamış çıkar.
- **E07** — kurutma tarafında sorun: fan çalışmıyor ya da hava yolu engellenmiş.

E19'da denenecek ücretsiz bir şey var: haznenin kapağının önünde duran uzun bir tabak ya da tepsi, kapağın açılmasını fiziksel olarak engelleyebilir. Yükleme düzenini değiştirip yeniden dene. E20, E21 ve E07 ise gövdenin içindeki bölgeyi anlatır.

## Nerede durduk ve neden

Siemens için dolaşan listelerin bir kısmı birbirini tutmuyor. Örneğin **E14**, **E16** ve **E17** için kaynaklar birbirine zıt anlamlar veriyor; **E01-E06** bandında bir liste elektrik hatası derken bir diğeri sensör ya da su alma diyor. Bu kodlara doğrulanmamış bir anlam yazıp seni yanlış parçaya yönlendirmektense burada durmayı tercih ediyoruz. Yapılacak şey basit: kodu model numarasıyla birlikte not et ve kılavuzun arıza tablosuyla karşılaştır.

## E27: sorun makinede değil olabilir

**E27**, şebeke geriliminin düştüğünü bildirir. Yani makine "ben bozuldum" demez, "bana gelen elektrik yetersiz" der. Akşam saatlerinde ortaya çıkıp gündüz kaybolan bir E27 neredeyse her zaman evin ya da bölgenin elektrik tarafındandır. Uzatma kablosuyla çalışan bir makine varsa ilk düzeltilecek şey odur.

⛔ **Filtrenin altı ve gövde içi senin alanın değil.** Pompa, ısıtıcı, valf ve elektronik kart, 220V hattın suyla aynı gövdede bulunduğu bölgededir. Kural sade: **filtre ve püskürtme kolu seviyesi kullanıcıya, tablanın altı servise aittir.**

## Hangi noktadan sonra servis işi

Filtre temiz, hortum düz, gider açık ve musluk sonuna kadar açıkken aynı kod üçüncü kez geldiyse zorlamayı bırak. E23 ve E09 zaten baştan servis konusudur; BSH listenin dışındaki tüm kodlar için de "elektronik arıza, teknisyen ister" diyor.

Ama elin boş değil: kod, model numarası, makinenin hangi adımda durduğu ve filtreden ne çıktığı bilgisi servise arızayı yarı yarıya teşhis ettirir. Cihazının koduna ve belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
