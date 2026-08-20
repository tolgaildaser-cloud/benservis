---
title: "Yazıcı silik basıyor: püskürtme başlığından kâğıt tipine, nedenler ve güvenli çözüm"
description: "Yazıcı silik basıyorsa ilk şüpheli tıkalı püskürtme başlığıdır ve temizliği yazılımdan güvenle yapılır. Nozzle check okuma, doluluk yanılgısı ve kâğıt kontrolü."
slug: "yazici-silik-basiyor"
date: "2026-08-20"
category: "Bilgisayar / yazıcı"
faq:
  - q: "Yazıcı neden silik basmaya başlar?"
    a: "Mürekkepli yazıcılarda en sık sebep, kâğıda mürekkep püskürten mikroskobik kanalların kurumuş mürekkeple kısmen tıkanmasıdır; uzun süre kullanılmayan yazıcılarda neredeyse kaçınılmazdır. İkinci sırada azalmış ya da kurumuş kartuş, üçüncü sırada yanlış kâğıt ve kalite ayarı gelir. Üçüne de evden, cihazı açmadan bakılabilir."
  - q: "Püskürtme başlığı temizliğini ne kadar sık çalıştırabilirim?"
    a: "İhtiyaç oldukça, ama üst üste en fazla iki-üç kez. Her temizlik döngüsü ciddi miktarda mürekkep harcar; arka arkaya çok tekrar hem kartuşu eritir hem atık mürekkep dolumunu hızlandırır. İki-üç döngü ve arada dinlendirmeye rağmen düzelme yoksa yolun devamı derin temizlik ve sonrasında servistir."
  - q: "Mürekkep göstergesi dolu görünüyor ama çıktı silik, nasıl olur?"
    a: "Göstergeler çoğu yazıcıda ölçüm değil tahmindir ve özellikle dolum yapılmış ya da muadil kartuşlarda gerçeği yansıtmayabilir. Ayrıca mürekkep yerinde olsa bile uzun süre kullanılmayan kartuşta kuruma olabilir. Bu yüzden karar göstergeye değil nozzle check desenindeki eksik çizgilere bakılarak verilir."
  - q: "Nozzle check (püskürtme denetimi) deseni nasıl okunur?"
    a: "Desen, her rengin bütün kanallarını çalıştıran çizgi bloklarından oluşur. Sağlıklı yazıcıda bloklar kesiksiz çıkar; çizgilerde boşluk ya da eksik satır görüyorsan o rengin kanalları kısmen tıkalı demektir. Hangi renk bloğu bozuksa sorun o kartuş-başlık hattındadır; temizlik sonrası deseni tekrar yazdırıp karşılaştırırsın."
---

Çıktıyı aldın: yazılar soluk gri, fotoğrafın bir şeridi eksik, bazı satırlar sanki yarım basılmış. Daha geçen ay gayet net basan yazıcı birden "yorulmuş" gibi. Mürekkepli yazıcılarda bu tablonun bir numaralı sebebi bellidir: kâğıda mürekkep püskürten kıl inceliğindeki kanalların bir kısmı kurumuş mürekkeple tıkanmıştır — özellikle yazıcı haftalarca çalışmadan beklediyse. İyi haber şu ki bu sorunun asıl çözümü tornavida değil, yazıcının kendi yazılımındaki iki düğmedir. Basitten teknike gidelim.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 🖨️ **Önce şu ayrımı yap:** silik basma **her yerde mi**, yoksa **belirli bir renkte/şeritte mi**? Sayfanın tamamı soluksa kalite ayarı, kâğıt ya da genel mürekkep durumu öne çıkar. Belirli renk eksikse ya da yatay çizgi/şerit hâlinde boşluklar varsa neredeyse kesin püskürtme kanalı tıkanıklığıdır — bu yazının ana konusu.

## 1) Önce fotoğraf çek: nozzle check (püskürtme denetimi)

Körlemesine temizlik yapmadan önce yazıcının durum fotoğrafını çekmek gerekir; bunun aracı her mürekkepli yazıcıda bulunan **püskürtme denetimi deseni**dir (nozzle check). Bu desen, her rengin bütün kanallarını sırayla çalıştıran çizgi blokları basar ve hangi kanalların tıkalı olduğunu gözle görünür hâle getirir.

**Kendin kontrol et:**
- Bilgisayarda yazıcının **bakım/yardımcı program** sekmesini aç (yazıcı özelliklerinde "Bakım", "Maintenance" ya da üreticinin kendi uygulaması) ve **"Püskürtme denetimi" / "Nozzle check"** desenini yazdır. Çoğu modelde aynı işlem yazıcının kendi menüsünden de başlatılabilir.
- Deseni ışığa tut: bloklardaki çizgiler **kesiksiz** mi? Boşluk, eksik satır, hiç çıkmayan renk var mı?
- Sonucu yorumla: bloklar tam ise tıkanıklık yok demektir — silikliğin sebebini kâğıt ve ayar bölümünde arayacağız. Bloklarda eksik varsa sıradaki adım temizlik.

Bu iki dakikalık test, hem gereksiz temizlik döngüsünden hem de yanlış teşhisten kurtarır; temizlik sonrası aynı deseni tekrar basıp **öncesi-sonrası** karşılaştırması yapacaksın.

## 2) Püskürtme başlığı temizliği — yazılımdan, güvenle

Desende eksik çıktıysa çözüm aracı yine aynı menüde: **"Kafa temizleme" / "Head cleaning"**. Bu işlemde yazıcı, kanallardan basınçla mürekkep geçirerek kurumuş tıkacı söker — tamamen cihazın kendi güvenli prosedürüdür, hiçbir kapak açılmaz.

**Kendin kontrol et:**
1. Bakım menüsünden **temizlik döngüsünü** başlat ve bitmesini bekle.
2. Ardından **yeniden nozzle check** bas ve desenleri karşılaştır: boşluklar azaldıysa doğru yoldasın.
3. Gerekirse temizliği **bir-iki kez daha** tekrarla; ama üst üste ikiden-üçten fazla döngü çalıştırma. Her döngü ciddi mürekkep harcar; inatçı tıkanıklıkta en etkili hamle, yazıcıyı **birkaç saat ya da bir gece dinlendirip** ertesi gün bir döngü daha denemektir — bekleme süresi kurumuş mürekkebin yumuşamasına zaman tanır.
4. Bazı modellerde bir de **"derin/güçlü temizlik"** seçeneği vardır; normal döngüler işe yaramadıysa son koz olarak bir kez kullanılır (mürekkep tüketimi belirgin şekilde yüksektir).

⚠️ Püskürtme başlığını elle temizlemeye kalkma: iğneyle kanal açmak, alkollü-tinerli bezle başlığa bastırmak ya da kartuşun püskürtme yüzeyini kazımak, tıkanıklığı kalıcı hasara çevirir. Kullanıcının güvenli alanı yazılımdaki temizlik döngüsüdür; onun ötesi servis prosedürüdür.

## 3) Doluluk göstergesi yanılgısı

"Mürekkep dolu görünüyor, demek sorun başka yerde" cümlesi bu arızanın en yaygın yanlış çıkarımıdır. İki sebeple:

- Yazıcıların doluluk göstergesi çoğu modelde **ölçüm değil tahmindir**: basılan sayfa sayısından ve damla sayacından hesaplanır. Özellikle **dolum yapılmış ya da muadil** kartuşlarda gösterge gerçek seviyeyle tamamen alakasız olabilir — çip "dolu" derken kartuş fiilen bitmiş olabilir, tersi de mümkündür.
- Mürekkep fiziken yerinde olsa bile **kurumuş** olabilir: aylarca bekleyen kartuşun içindeki mürekkep koyulaşır ve akışı zayıflar. Gösterge bunu hiç görmez.

**Kendin kontrol et:** Karar verirken göstergeye değil **nozzle check desenine** bak: belirli bir rengin bloğu temizliklere rağmen hep eksikse ve o kartuş eskiyse (ya da dolumsa), o kartuşu yenilemek en net testtir. Tank sistemli (şişeden doldurmalı) yazıcılarda ise doluluk gözle görülür — orada bu yanılgı yoktur ama kuruma gerçeği aynen geçerlidir.

## 4) Kâğıt tipi ve kalite ayarı

Desen tertemiz çıktığı hâlde çıktılar soluksa mürekkep tarafını bırak, kâğıt-ayar ikilisine bak. Aynı yazıcı, aynı mürekkeple bambaşka sonuçlar basabilir; fark ayarlardadır.

**Kendin kontrol et:**
- Yazdırma penceresinde **kalite** "taslak/draft/ekonomik" modda kalmış olabilir — taslak modu bilerek az mürekkep atar ve çıktı soluk olur. "Normal" ya da "yüksek" seçip dene.
- **Kâğıt tipi** ayarı gerçek kâğıtla eşleşmeli: fotoğraf kâğıdına "düz kâğıt" ayarıyla basmak (ya da tersi) mürekkep miktarını yanlış hesaplatır.
- Kâğıdın kendisi de oyuncu: nemli ortamda beklemiş, çok ince ya da pütürlü kâğıt mürekkebi dağıtır ve soluk-lekeli görüntü verir. Paketten yeni, düzgün bir kâğıtla karşılaştırma çıktısı al.
- Lazer yazıcı kullanıyorsan tablo farklıdır: siliklik çoğu zaman **tonerin azalması** demektir; toner kartuşunu çıkarıp hafifçe iki yana çalkalayıp takmak kalan toneri dağıtır ve kısa süreliğine düzgün baskı verir — kalıcı çözüm toneri yenilemektir.

## 5) Buradan sonrası servis işi

Temizlik döngüleri, dinlendirme, gerekirse yeni kartuş ve doğru ayarlara rağmen desen hâlâ eksik basıyorsa tıkanıklık yazılımın sökebileceği seviyeyi aşmış demektir — ya da sorun başlığın kendisinde/besleme hattındadır.

⛔ **Kendin-çöz sınırı burasıdır.** Başlık sökmek, kimyasalla bekletmek gibi internette dolaşan yöntemler hem cihazı hem garantiyi riske atar; atık mürekkep dolumu ve besleme hattı işleri de tamamen servis alanıdır. Elindeki nozzle check çıktılarını sakla — öncesi-sonrası desenler, servise "silik basıyor" cümlesinden çok daha fazlasını anlatır ve işi hızlandırır.

## Servis çağırmadan önce üç dakika

1. **Nozzle check** bas, deseni oku: eksik çizgi var mı, hangi renkte?
2. Yazılımdan **temizlik döngüsü** çalıştır (en fazla iki-üç kez, arada dinlendir), deseni tekrar bas.
3. Desen temizse **kalite ve kâğıt tipi ayarına** bak; taslak modda olmadığından emin ol.

İlgili: [Yazıcı kartuş tanımıyor](/blog/yazici-kartus-tanimiyor/) · [Yazıcı kâğıt çekmiyor](/blog/yazici-kagit-cekmiyor/)

Bu adımlar "silik basıyor" şikâyetlerinin büyük kısmını evde çözer. Çözmediyse cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
