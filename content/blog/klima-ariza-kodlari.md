---
title: "Klima arıza kodları: Vestel, Arçelik ve Daikin'de ekrandaki kod ne diyor"
description: "Klima ekranında E1, U4 ya da F3 gibi bir kod mu var? Split klimalarda kod okuma mantığı, Vestel, Arçelik ve Daikin'de doğrulanmış karşılıklar ve servis sınırı."
slug: "klima-ariza-kodlari"
# 🔴 22 Ağu 2026 — ARÇELİK BÖLÜMÜ DEĞİŞTİ (kod tablosu denetimi, TARAMA-1).
# "E1-E4 bandı sıcaklık sensörü" iddiası 6 Arçelik klima kılavuzunda ve Arçelik'in
# kendi kod sayfasında yok; E serisi jenerik OEM listesi. Arçelik'in yayımladığı tek
# tablo CH serisidir. Bölüm doğrusuyla değiştirildi.
# 📌 #93 bu bloğu "canlı arcelik-klima yazısıyla birebir uyumlu" diye bırakmıştı —
#    ama o yazı da aynı uydurma kaynaktan besleniyordu. İç tutarlılık doğrulama değildir.
date: "2026-08-20"
category: "Klima"
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Telefon kamerası", "Ilık su", "Yumuşak fırça"]
steps:
  - "Kodu aynen not al. Harfle rakam karışabilir; iç ünitenin göstergesini fotoğraflamak en garantisidir."
  - "Göstergesiz modelde ışık düzenini videoya al. Ekranı olmayan modellerde ışıkların yanıp sönme düzeni kod yerine geçer; sonra kılavuzun arıza tablosuyla karşılaştır."
  - "Klimayı kumandadan kapat. Kod okunurken cihazı çalışır durumda bırakma."
  - "Şalterinden ya da fişinden enerjisini kes ve birkaç dakika bekle. Elektrik kesintisi sonrası cihazın kendini koruma modunda bekletmesi normaldir; süre dolunca kendiliğinden çalışır."
  - "Enerjiyi geri ver ve klimayı yeniden aç. Elektrik dalgalanması sonrası görülen geçici kodlar bu resetle silinir; şalterin ve kumandanın doğru konumda olduğunu da doğrula."
  - "Filtreleri çıkar ve temizle. Kirli filtre hava akışını boğar, sensörler gerçek dışı değer okur ve cihaz korumaya geçer; ılık suyla durula, gölgede tamamen kurut ve yerine tak."
  - "Kod geri geliyorsa cihazı ısrarla çalıştırma. Kodu ve model numarasını not edip servisle konuş; gaz, voltaj ve haberleşme kodları ile dış ünite tarafı tamamen servis işidir."
faq:
  - q: "Klima hata kodu verdi ama çalışıyor, kullanmaya devam edebilir miyim?"
    a: "Koda göre değişir. Sensör kaynaklı kodlarda cihaz genelde çalışmaya devam eder ama sıcaklığı doğru okuyamadığı için verimsiz çalışır. Gaz kaçağı, yüksek sıcaklık ya da kompresör koruması gibi kodlarda ısrarla çalıştırmak arızayı büyütebilir; bu kodlarda cihazı kapatıp servisle konuşmak doğru olur."
  - q: "Elektrik kesintisinden sonra klima çalışmıyor, bozuldu mu?"
    a: "Hemen hüküm verme. Birçok klima elektrik kesintisi sonrası kendini birkaç dakikalığına koruma moduna alır ve bu bekleme sırasında göstergede bir mesaj görünebilir. Koruma süresi dolunca cihaz kendiliğinden normale döner. Birkaç dakika bekledikten sonra hâlâ çalışmıyorsa şalteri ve kumandayı kontrol et, sonra koda bak."
  - q: "Aynı kod her klima markasında aynı anlama mı gelir?"
    a: "Hayır. Markalar aynı şeyi bile farklı biçimde yazar: biri tek harf ve rakam, biri Er ile başlayan iki hane, biri harf grubu kullanır. Aynı karakter dizisi bir markada haberleşme hatasıyken başka bir markada sensör arızası olabilir; aynı markanın salon tipi ve duvar tipi modellerinde bile tablo değişir. Bu yüzden kodun kesin karşılığı için cihazının kullanım kılavuzuna ya da üreticinin destek sayfasına bakmak şart."
  - q: "Kod silindikten sonra klima normale döndü, servise gerek var mı?"
    a: "Kod bir daha gelmiyorsa büyük ihtimalle geçici bir korumaydı ve izlemek yeterli. Ama aynı kod tekrar tekrar geliyorsa cihaz aynı devreden sürekli hata okuyor demektir; bu kendiliğinden düzelmez. Tekrarlayan kodu ve model numarasını not edip servise iletmek, doğru parçayla tek seferde çözüm ihtimalini artırır."
images:
  coverAlt: "Oturma odasında duvara monte edilmiş beyaz split klima iç ünitesi"
---

Ağustos ortası, termometre 35'i gösteriyor ve klima tam sezonun ortasında ekrana bir kod düşürüp duruyor. Sıcakta kod çözmeye çalışmak sinir bozucudur ama işin aslı şu: split klimalarda kodlar rastgele değildir, cihaz sana hangi devresinden veri alamadığını söyler. Bu yazıda kod okuma mantığını, Türkiye'de yaygın üç markada üreticinin kendi kılavuzuyla doğrulanabilen karşılıkları ve hangi noktadan sonra işin servise kaldığını anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ Klimada kod tablosu markaya VE model ailesine göre değişir; aynı markanın duvar tipi, salon tipi ve inverter serileri bile farklı tablolar kullanır. Aşağıdaki karşılıklar en yaygın serilere aittir; kesin tablo kullanım kılavuzundadır.

## Adım adım: kod görünce evde denenecekler

**1. Kodu aynen not al.** Harfle rakam karışabilir; iç ünitenin göstergesini fotoğraflamak en garantisidir.

**2. Göstergesiz modelde ışık düzenini videoya al.** Ekranı olmayan modellerde ışıkların yanıp sönme düzeni kod yerine geçer; sonra kılavuzun arıza tablosuyla karşılaştır.

**3. Klimayı kumandadan kapat.** Kod okunurken cihazı çalışır durumda bırakma.

**4. Şalterinden ya da fişinden enerjisini kes ve birkaç dakika bekle.** Elektrik kesintisi sonrası cihazın kendini koruma modunda bekletmesi normaldir; süre dolunca kendiliğinden çalışır.

**5. Enerjiyi geri ver ve klimayı yeniden aç.** Elektrik dalgalanması sonrası görülen geçici kodlar bu resetle silinir; şalterin ve kumandanın doğru konumda olduğunu da doğrula.

**6. Filtreleri çıkar ve temizle.** Kirli filtre hava akışını boğar, sensörler gerçek dışı değer okur ve cihaz korumaya geçer; ılık suyla durula, gölgede tamamen kurut ve yerine tak.

**7. Kod geri geliyorsa cihazı ısrarla çalıştırma.** Kodu ve model numarasını not edip servisle konuş; gaz, voltaj ve haberleşme kodları ile dış ünite tarafı tamamen servis işidir.

## Split klimada kod nasıl okunur?

Kod, iç ünitenin dijital göstergesinde belirir — normalde sıcaklık ya da saat gösteren alanda. Bazı modellerde kod sabit yanar, bazılarında yanıp söner; göstergesiz modellerde ise iç ünite üzerindeki ışıkların yanıp sönme düzeni kod yerine geçer. İlk yapılacak şey kodu aynen not etmek: harfle rakam karışabilir, fotoğraf çekmek en garantisi.

**Kendin kontrol et:** Kodu not ettikten sonra klimayı kumandadan kapat, şalterinden ya da fişinden enerjisini kes, birkaç dakika bekle ve yeniden aç. Elektrik dalgalanması sonrası görülen geçici kodlar bu resetle silinir. Kod geri geliyorsa gerçek bir bildirimdir.

## Vestel klimalarda mesaj biçimi: Er + iki hane

Vestel'in güncel inverter kullanım kılavuzlarında iç ünitenin göstergesindeki mesaj tek bir biçimde verilir: önce **Er** ibaresi, ardından o hataya özel iki haneli sayı. Mesaj önce koda özel sayıda yanıp söner, sonra otuz beş ile kırk saniye arası sabit kalır ve sorun giderilene kadar bu tur tekrarlanır — yani mesajı bir kere kaçırmak sorun değil.

Burada dürüst olmak gerekiyor: **kılavuzlar bu sayıların tek tek karşılığını kullanıcıya açmıyor.** Verdikleri talimat net — cihaza herhangi bir şey yapma, yetkili servisle iletişime geç. Bu yüzden bu yazıda Er sayılarının doğrulanmamış bir karşılığını vermiyoruz. Sayıyı doğru not etmek yine de değerlidir; servis için teşhisi kısaltan asıl bilgi odur.

Er ile başlamayan iki harfli mesajlar ise arıza bildirimi değil koruma bildirimidir; **Er11 ve Er13** de kılavuzda açıkça hata mesajı değil, kompresörü aşırı akımdan koruma mesajı olarak tanımlanır. Bu ayrımın tamamını benservis.com blogundaki Vestel klima hata kodları yazısında bulabilirsin.

⚠️ Kod şeması seriye ve modele göre değişir; kesin karşılık cihazınla gelen kullanım kılavuzundadır. Ekranda gördüğünü kılavuzunla teyit etmeden bir parçaya karar verme.

## Arçelik klimalarda CH serisi

Arçelik'in yayımladığı klima kod tablosu **CH serisidir** ve otuz dört kod içerir.

CH tablosu otuz dört kod içerir ve `CH01` ile `CH93` arasında **atlamalı** gider — yani CH07, CH08 ya da CH11 gibi numaralar tabloda bulunmaz. En sık görülenlerden birkaçı:

| Kod | Arçelik'in karşılığı |
|---|---|
| CH01 | İç ünite oda sıcaklık sensör hatası |
| CH05 | İç ünite ve dış ünite arasında iletişim hatası |
| CH10 | İç ünite BLDC motor pervane kilidi |
| CH29 | Kompresör faz hatası, aşırı akım hatası |
| CH36 – CH38 | Soğutucu akışkan gaz kaçak hatası |

Kullanıcı açısından pratik sonuç net: **Arçelik, otuz dört kodun her birinde yetkili servisle iletişime geçilmesini yazıyor.** Yani kendi kapatacağın bir CH kodu tanımlı değil. Evde yapabileceğin şey kodu silmek değil, koda yol açabilecek durumu ortadan kaldırmak — enerjiyi kesip yeniden vermek, filtreye bakmak, dış ünitenin önünü açmak. Tam listeyi benservis.com blogundaki Arçelik klima hata kodları yazısında topladık.

## Daikin klimalarda U4, E7 ve F3

Daikin harf gruplarıyla konuşur ve yaygın serilerde üç kod öne çıkar. **U4**, iç ünite ile dış ünite arasındaki haberleşmenin koptuğunu bildirir; ara kablo bağlantısı, voltaj dengesizliği ya da kart kaynaklı olabilir. Şalteri kapatıp açmak bazı durumlarda çözer, düzelmiyorsa servis gerekir. **E7** dış ünite fan motorunun dönmediğini işaret eder. **F3** ise basma borusu sıcaklığının anormal yükseldiğini bildirir; arkasında çoğu zaman gaz eksikliği ya da devrede tıkanıklık vardır ve cihazı bu kodla çalıştırmaya zorlamak kompresörü riske atar.

⛔ **Dış üniteyi ve gaz devresini kurcalama.** Klimanın gaz hattı basınçlı kapalı bir devredir; açmak da doldurmak da yetki ve ekipman ister. Dış ünite ayrıca 220V beslenir ve fanı güçlüdür. Kullanıcıya ait alan kumanda, şalter ve filtre kapağı seviyesidir; panelin ötesi servise aittir.

## Göstergesiz modellerde ışık dili

Her iç ünitede dijital ekran yoktur; ekransız modellerde arıza bildirimi ön paneldeki ışıkların yanıp sönme düzeniyle yapılır. Hangi ışığın kaç kez yanıp söndüğü belirli bir koda karşılık gelir ve bu eşleştirme tamamen modele özeldir. Böyle bir durumda ışık düzenini videoya almak, sonra kullanım kılavuzunun arıza tablosuyla karşılaştırmak en sağlıklı yoldur; servisle konuşurken de o video kodun kendisi kadar iş görür.

**Kendin kontrol et:** Işık düzeni "timer" ya da "defrost" ışığının tek başına yanmasıysa panik yok — bunlar çoğu modelde arıza değil, çalışma modu göstergesidir. Arıza bildirimi genelde birden çok ışığın birlikte ve ritmik yanıp sönmesiyle yapılır.

## Kod gelmeden yapılacak en iyi bakım

Sezon ortasında kodların bir kısmı aslında bakımsızlıktan tetiklenir: kirli filtre hava akışını boğar, iç ünite sensörleri gerçek dışı değerler okur ve cihaz korumaya geçer. Filtre temizliği kullanıcının güvenle yapabildiği tek işlemdir ve on beş dakika sürer — adım adım anlatımı benservis.com blogundaki klima filtresi nasıl temizlenir yazısında bulabilirsin.

## Hangi noktadan sonra servis işi

Reset sonrası tekrar gelen her kod, gaz ve voltaj kodlarının tamamı ve haberleşme hataları servis konusudur. Elinde kod ve model numarası varsa servisi aramadan önce işin yarısı bitmiş demektir: doğru parça, tek seferde çözüm.

Cihazının koduna ve belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
