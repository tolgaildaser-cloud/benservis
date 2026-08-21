---
title: "Laptop şarj olmuyor: adaptörden batarya koruma moduna adım adım eleme"
description: "Fişe takılı ama şarj olmuyorsa önce adaptör, kablo ve prizi ele; %80'de duran şarjın sebebi çoğu zaman batarya koruma modudur. Soket gevşekliği servis işi."
slug: "laptop-sarj-olmuyor"
date: "2026-08-20"
category: "Bilgisayar / yazıcı"
faq:
  - q: "Laptop 'takılı, şarj olmuyor' yazıyor, bozuldu mu?"
    a: "Çoğu zaman hayır. Bu yazı, cihazın adaptörü gördüğünü ama bataryaya akım göndermediğini söyler. En sık iki sebep vardır: batarya koruma modu şarjı belirli bir seviyede bilerek durdurmuştur ya da adaptör cihazın ihtiyacından güçsüzdür. İkisi de arıza değildir; yazıdan önce bu ikisini ele."
  - q: "Laptop neden %80'de duruyor?"
    a: "Bu bir arıza değil, çoğu üreticinin yazılımında bulunan batarya koruma özelliğidir. Sürekli fişte kalan cihazlarda bataryayı yüzde yüzde tutmak ömrü kısalttığı için üretici yazılımı şarjı %60-80 civarında durdurur. Üreticinin batarya uygulamasından bu modu görebilir, istersen kapatabilirsin."
  - q: "Laptop bataryası kaç yıl gider?"
    a: "Batarya ömrü yıla değil şarj döngüsüne bağlıdır; tipik kullanımda birkaç yıl sonra kapasitenin hissedilir şekilde düşmesi normaldir. Sürekli fişte ve sıcak ortamda çalışmak bu süreyi kısaltır. Batarya sağlığını Windows'un ürettiği batarya raporundan ya da üreticinin uygulamasından görebilirsin."
  - q: "Şarj ucu oynuyor, kendim sıkabilir miyim?"
    a: "Hayır. Şarj soketi anakarta lehimli ya da ayrı bir kartla bağlı bir parçadır; gevşekliği dışarıdan sıkılacak bir vida değildir. Fişi zorlayarak açıyı tutturmaya çalışmak soketi daha çok yıprattığı gibi kısa devre riski de doğurur. Soket gevşekliği net bir servis işidir."
images:
  coverAlt: "Ahşap masada kapalı duran dizüstü bilgisayar ve yan porta takılı şarj kablosu"
---

Akşam laptopu fişe taktın, sabah kalktığında pil hâlâ %15. Ya da ekranın köşesinde o tanıdık yazı: **"takılı, şarj olmuyor"**. İlk akla gelen "batarya bitti, cihaz elden gitti" olur ama gerçek çoğu zaman çok daha basittir: sorun ya prizde, ya kabloda, ya da hiç arıza olmayan bir **yazılım ayarında**dır. Bu yazıda dışarıdan içeriye doğru eleyerek gidiyoruz; hiçbir adımda cihazın kapağını açmıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 🔌 **Önce şu ayrımı yap:** cihaz **hiç şarj almıyor mu**, yoksa **belirli bir yüzdede mi duruyor**? Hiç şarj almamak adaptör-kablo-soket hattını işaret eder. Belirli bir yüzdede durmak ise çoğu zaman arıza bile değildir — birazdan geleceğiz.

## 1) Priz, kablo, adaptör: dış hattı ele

Şarj zinciri dört halkadır: priz → kablo → adaptör kutusu → cihaza giren uç. Arıza aramaya cihazdan değil bu zincirin en dışından başlanır, çünkü şikâyetlerin büyük kısmı burada biter.

**Kendin kontrol et:**
- Laptopu **başka bir prize** tak; mümkünse çoklu priz ve uzatmayı aradan çıkarıp doğrudan duvar prizini dene.
- Adaptör kutusunun ve kablonun boyunu gözden geçir: **ezik, kıvrılmış, dışı soyulmuş** bölge var mı? Özellikle fişe yakın ve cihaza giren uçtaki kırışmalar tipiktir.
- Adaptörde ya da laptopta **şarj ışığı** varsa izle: taktığında ışık hiç yanmıyorsa sorun büyük ihtimalle cihazdan öncedir.
- Aynı adaptörden çevrende varsa (aynı marka-model ya da uyumlu USB-C güç adaptörü) onunla dene. Kablo değişince sorun bitiyorsa cevabı bulmuşsun demektir.

⚠️ **Dışı soyulmuş, teli görünen kabloyu kullanmaya devam etme.** Bantlayarak idare etmek kısa devre ve ısınma riskidir; hasarlı kablo kullanım dışı kalır.

Bir nokta daha: USB-C ile şarj olan cihazlarda her adaptör her laptopu beslemez. Telefon adaptörü gibi düşük güçlü bir kaynak taktığında cihaz "takılı" der ama şarj etmeye gücü yetmez ya da çok yavaş şarj eder. Cihazın kendi adaptörünün gücünde bir kaynak kullan.

## 2) "Takılı, şarj olmuyor" yazısı — çoğu zaman arıza değil

Bu yazının en çok korkutan hâli aslında en masum olanıdır. Windows'un pil simgesinde "takılı, şarj olmuyor" görüyorsan cihaz adaptörü **görüyor** demektir; bataryaya akım gitmemesinin ise bilinçli bir sebebi olabilir.

En yaygını **batarya koruma modu**. Bataryayı sürekli %100'de tutmak kimyasal olarak yıprattığı için üreticiler (ASUS, Lenovo, Huawei, HP ve diğerleri) kendi yazılımlarına şarjı **%60-80 civarında durduran** bir koruma özelliği koyar. Bu mod açıksa cihaz %80'e gelir, durur ve "şarj olmuyor" gibi görünür. Bu bir arıza değil, tam tersine bataryanın ömrünü uzatan bir özelliktir.

**Kendin kontrol et:** Üreticinin cihazla gelen uygulamasını aç (MyASUS, Lenovo Vantage, PC Manager gibi — markaya göre adı değişir) ve **batarya / güç** bölümüne bak. "Pil koruma", "şarj sınırı", "conservation" gibi bir anahtar görürsen durum netleşti demektir. Yolculuk öncesi tam şarj istiyorsan modu geçici kapatabilirsin; sürekli fişte çalışıyorsan açık kalması bataryanın lehinedir.

Bunun dışında iki basit hamle daha var:

**Kendin kontrol et:** Laptopu tamamen kapat, adaptörü tak ve **kapalıyken** şarj ışığını izle — kapalıyken şarj oluyorsa sorun donanımda değil yazılım tarafındadır. Windows Update'ten bekleyen güncellemeleri kur; batarya sürücüsündeki bir takılma bazen basit bir **kapat-aç** ile bile düzelir.

## 3) Şarj soketi gevşek — belirtileri tanı, elleme

Zincirin cihaz tarafındaki zayıf halkası şarj soketidir. Her gün tak-çıkar yaşayan bu parça yıllar içinde yorulur; fişin ağırlığıyla çekiştirilen, ucunda cihaz kaldırılan kablolar süreci hızlandırır.

Belirtileri tanıdıktır:

- Fiş yuvada **oynuyor**, eskisi gibi "oturdu" hissi vermiyor.
- Şarj **kabloyu belirli bir açıda tutunca** başlıyor, bırakınca kesiliyor.
- Şarj ışığı sen kabloya dokundukça **yanıp sönüyor**.

**Kendin kontrol et:** Buradaki kontrol yalnız teşhis içindir: fişi takıp kabloyu çok hafifçe farklı yönlere aldığında şarj gidip geliyorsa sorun büyük ihtimalle sokette ya da kablonun ucundadır. Önce başka bir kabloyla dene — çünkü aynı belirtiyi yıpranmış kablo ucu da verir.

⛔ **Kendin-çöz sınırı burasıdır.** Soket anakarta bağlı bir parçadır; sıkıştırmak, içine bir şey sokup ayarlamak ya da fişi zorla açıda sabitlemek hem soketi bitirir hem kısa devre riski doğurur. Kablo değişimiyle düzelmeyen soket gevşekliği servis işidir — üstelik erken gidilirse çoğu zaman iş büyümeden çözülür.

## 4) Batarya ömrünü doldurduysa

Adaptör sağlam, koruma modu kapalı, soket sıkı — ama cihaz şarjı ya hiç almıyor ya da yüzde birkaç dakikada eriyip bitiyorsa sıra bataryanın kendisine gelir. Batarya bir sarf malzemesidir: ömrü yıldan çok **şarj döngüsüyle** ölçülür ve birkaç yıllık yoğun kullanım sonunda kapasitenin düşmesi arıza değil, doğal sondur.

**Kendin kontrol et:** Windows'ta komut satırına `powercfg /batteryreport` yazarak cihazın ürettiği batarya raporuna bakabilirsin: **tasarım kapasitesi** ile **mevcut tam şarj kapasitesi** arasındaki fark, bataryanın ne kadar yıprandığını sayıyla gösterir. Üretici uygulamalarının çoğu da benzer bir "batarya sağlığı" ekranı sunar.

⛔ Batarya değişimi — vidalı arka kapaklı modellerde bile — kullanıcı işi değildir: şişmiş ya da yıpranmış lityum batarya delinme ve ısınma riski taşır. **Şişme fark edersen** (kasa kabarması, touchpad'in yükselmesi) cihazı fişten çek, kullanma ve servise götür.

## Hangi belirti hangi tarafa işaret ediyor

| Belirti | Muhtemel taraf | Kendin bakılır mı |
|---|---|---|
| Şarj ışığı hiç yanmıyor | Priz, kablo, adaptör | ✅ Evet |
| %80 civarında duruyor | Batarya koruma modu | ✅ Evet (ayar) |
| Telefon adaptörüyle çok yavaş | Yetersiz güçte kaynak | ✅ Evet |
| Kablo açısına göre şarj gidip geliyor | Kablo ucu ya da soket | ⚠️ Kabloyu dene, soketse servis |
| Fiş yuvada oynuyor | Soket gevşekliği | ⛔ Servis |
| Şarj dakikalar içinde eriyor | Batarya ömrü | ⛔ Servis |
| Kasa kabarmış, touchpad yükselmiş | Şişmiş batarya | ⛔ Kullanma, servis |

## Servis çağırmadan önce üç dakika

1. **Başka priz + mümkünse başka kablo/adaptör** dene; çoklu prizi aradan çıkar.
2. Üretici uygulamasında **batarya koruma modunu** kontrol et — %80'de durmak arıza değil.
3. Kabloyu hafifçe oynatıp şarjın **gidip gelip gelmediğine** bak; geliyorsa bunu not et.

Bu üç adım, "laptop şarj olmuyor" şikâyetlerinin önemli bir kısmını yerinde çözer. Çözmediyse elinde artık servise anlatabileceğin somut bir tablo var: hangi kabloyla denendi, hangi yüzdede duruyor, soket oynuyor mu. Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
