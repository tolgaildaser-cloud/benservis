---
title: "Epson yazıcı hata ışıkları: L3250 kılavuzuna göre anlamları"
description: "Epson yazıcıda ışıklar yanıp sönüyor: L3250 kılavuzundaki tabloya göre güç, mürekkep, kağıt ve Wi-Fi ışıklarının anlamı ve kendi yapabileceğin adımlar."
slug: "epson-yazici-hata-isiklari"
date: "2026-10-30"
category: "Bilgisayar / yazıcı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P46 (YK #197 boşluk, BOSLUK.md #108). Slug origin/main'de yok. Yakın yazılar: yazici-kartus-tanimiyor, yazici-kagit-sikisti, yazici-wifi-baglanmiyor — Epson ışık tablosu yazısı yok.
# Kaynak (#88): Epson L3250 sorun giderme sayfası "Estado das luzes do produto" (files.support.epson.com, Portekizce). URL, md5 ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · "E-01" anlamı (bu belgede E-01 tanımı yok; başka belge indirilmedi, üçüncü taraf yorumu kanıt değil) · ped (atık mürekkep yastığı) sıfırlama / reset (belgede "Epson'a başvurun" diyor, servis işi) · başka Epson serilerinin ışık tabloları.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru bez"]
steps:
  - "Hangi ışığın yandığına ya da yanıp söndüğüne bak."
  - "Güç ışığı yanıp sönüyorsa yazıcının işini bitirmesini bekle."
  - "Mürekkep ışığı yanıyorsa ilk mürekkep yüklemesinin bitip bitmediğine bak."
  - "Kağıt ışığı yanıyorsa kağıt yükle ve kopya düğmesine bas."
  - "Kağıt ışığı yanıp sönüyorsa sıkışan kağıdı çıkar."
  - "Tüm ışıklar yanıp sönüyorsa ön kapağı aç, kağıdı çıkar, yazıcıyı kapatıp aç."
  - "Wi-Fi ışıkları yanıp sönüyorsa Wi-Fi düğmesine bas ve yeniden dene."
  - "Mürekkep ve kağıt ışığı birlikte yanıp sönüyorsa servise bırak."
faq:
  - q: "Epson yazıcıda tüm ışıklar yanıp sönüyorsa ne yapmalıyım?"
    a: "Epson'un L3250 sayfasına göre bu, yazıcı hatasıdır: içeride kağıt ya da koruyucu malzeme sıkışmış olabilir. Ön kapağı aç, sıkışanı çıkar, yazıcıyı kapatıp yeniden aç. Hata sürerse Epson'dan yardım iste."
  - q: "Mürekkep ve kağıt ışığı birlikte yanıp sönerse ne demek?"
    a: "Epson'a göre bir mürekkep yastığı (yazıcının kullanılmayan mürekkebi tuttuğu emici parça) ömrünün sonuna yaklaşıyor ya da bitmiş. Bu parçayı kendin değiştirme; Epson'a başvur. Bilgisayarda devam mesajı çıkarsa kopya düğmesine basarak yazdırmayı sürdürebilirsin."
  - q: "E-01 hatası ışıklarla aynı şey mi?"
    a: "L3250 sayfasında E-01 kodunun tanımı yok; sayfa yalnızca ışık düzenlerini anlatıyor. Kodun anlamını kendi modelinin Epson kılavuzundan öğren, tahmine dayalı anlatımlara güvenme."
images:
  coverAlt: "Üstünde birkaç ışığı yanıp sönen mürekkep tanklı yazıcı çizimi"
  steps:
    - "Yazıcının kumanda panelindeki ışıklara bakan beyaz eldivenli sade siluet el"
    - "Güç ışığı yanıp sönen yazıcıya dokunmadan bekleyen beyaz eldivenli sade siluet el"
    - "Mürekkep ışığının yandığı yazıcı kumanda paneli çizimi"
    - "Kağıt tepsisine kağıt yerleştiren beyaz eldivenli sade siluet el"
    - "Yazıcının içinden sıkışan kağıdı çeken beyaz eldivenli sade siluet el"
    - "Yazıcının ön kapağını kaldıran beyaz eldivenli sade siluet el"
    - "Yazıcıdaki Wi-Fi düğmesine basan beyaz eldivenli sade siluet el"
    - "Yazıcının yanında servis simgesi bulunan çizim"
---

Epson yazıcının üstündeki küçük ışıklar sırayla yanıyor, bazıları yanıp sönüyor ve ekran olmadığı için kod da görünmüyor. "Epson yazıcı hata kodu" diye arayanların büyük kısmı aslında bu ışıkların anlamını arıyor. Bu yazıdaki bilgiler Epson'un kendi L3250 sorun giderme sayfasından alındı. Sayfa Portekizce yayımlanmış; biz Türkçeye çevirdik. Işık düzeni modelden modele değişebilir, bu yüzden tabloyu L3250 olarak okuyup kendi modelinin kılavuzuyla karşılaştır.

> ⚠️ **Önce şu sınırı bil:** Sayfada senden istenenler kağıt çıkarmak, kapağı açmak ve düğmelere basmak. Mürekkep yastığı için ise sayfa Epson'a başvurmanı söylüyor; iç parçaları sökme. Yazıcıyı her zaman güç düğmesiyle kapat.

## Adım adım: Epson ışıklarını okuma

**1. Işıklara bak.** Epson L3250 sayfası, ürünün ışıklarına bakarak sorunları çoğu zaman teşhis edebileceğini söylüyor. Panelde beş ışık sayılıyor: güç, Wi-Fi, Wi-Fi Direct, mürekkep ve kağıt. Önce hangisinin sabit yandığını, hangisinin yanıp söndüğünü ayır.

**2. Güç ışığı yanıp sönüyorsa bekle.** Bu, ürünün meşgul olduğu anlamına geliyor. Epson'a göre ışık yanıp sönmeyi bırakana kadar bekle; bitmeden yazıcıyı kapatma.

**3. Mürekkep ışığı yanıyorsa.** Sayfaya göre ilk mürekkep yüklemesi bitmemiş olabilir. Epson bunun için kurulum posterine bakmanı söylüyor.

**4. Kağıt ışığı yanıyorsa.** Epson'a göre kağıt yok ya da birden çok yaprak birlikte beslenmiş. Kağıt yükle ve hatayı gidermek için siyah-beyaz kopya düğmesine ya da renkli kopya düğmesine bas.

**5. Kağıt ışığı yanıp sönüyorsa.** Kağıt ürünün içine sıkışmış. Sıkışan kağıdı çıkar, sonra aynı kopya düğmelerinden birine basarak hatayı temizle. Ayrıntıları [yazıcı kağıt sıkıştı](/blog/yazici-kagit-sikisti/) yazısında bulabilirsin.

**6. Tüm ışıklar yanıp sönüyorsa.** Epson bunu yazıcı hatası olarak tanımlıyor: içeride kağıt ya da koruyucu malzeme sıkışmış olabilir. Ön kapağı aç ve sıkışan kağıdı ya da koruyucu malzemeyi çıkar. Sonra ürünü kapatıp yeniden aç. Hata sürerse Epson'dan yardım iste.

**7. Wi-Fi ışıkları yanıp sönüyorsa.** Epson, Wi-Fi ve Wi-Fi Direct ışıklarının birlikte yanıp sönmesini bağlantı hatası olarak veriyor. Hatayı gidermek için Wi-Fi düğmesine bas ve yeniden dene. Bağlantı sorunları için [yazıcı Wi-Fi'ye bağlanmıyor](/blog/yazici-wifi-baglanmiyor/) yazısına da bakabilirsin.

**8. Mürekkep ve kağıt birlikte yanıp sönüyorsa dur.** Epson'a göre bu, bir mürekkep yastığının ömrünün sonuna geldiğini gösteriyor. Yastık değişimi servis işidir; Epson'a başvurmalısın. Bilgisayarda devam etmeni soran bir mesaj çıkarsa kopya düğmelerinden birine basarak yazdırmayı sürdürebilirsin.

## Mürekkep yastığı nedir

Epson sayfasındaki nota göre yazıcının içindeki mürekkep yastıkları (emici keçeler), basılan sayfalarda kullanılmayan mürekkebi toplar, dağıtır ve tutar. Ürünün ömrü boyunca bir noktada baskı kalitesi sürdürülemeyebilir ya da yastıklar ömrünün sonuna gelebilir. Epson, bu parçaların değişmesi gerektiğinde Epson Status Monitor yazılımının, LCD ekranın ya da kumanda panelindeki ışıkların uyaracağını yazıyor. Bu yüzden mürekkep ve kağıt ışığı birlikte yanıp sönüyorsa ilk iş modeli, ışık düzenini ve kullanma süresini not edip Epson'a danışmak.

## Hatayı temizleyen düğmeler

Epson sayfasında hata giderme için iki tür düğme geçiyor. Kağıt hatalarında siyah-beyaz kopya düğmesi ya da renkli kopya düğmesi, hatayı kağıdı yükledikten ya da çıkardıktan sonra temizliyor. Wi-Fi hatasında ise Wi-Fi düğmesi aynı işi görüyor. Güç düğmesi ise ürünü kapatmak için kullanılıyor; Epson yazıcıyı her zaman bu düğmeyle kapatmanı istiyor. Yani kağıt hatasında sayfadaki sıra şöyle: önce kağıdı yükle ya da sıkışanı çıkar, ardından kopya düğmelerinden birine bas.

## Işıkları hızlı okuma özeti

Sabit yanan kağıt ışığı kağıt eksikliği, yanıp sönen kağıt ışığı sıkışma demek. Tüm ışıkların yanıp sönmesi yazıcı hatası, yalnızca Wi-Fi ışıklarının yanıp sönmesi bağlantı hatası demek. Güç ışığının yanıp sönmesi ise yalnızca yazıcının meşgul olduğunu gösterir; bir hata değildir. Bu özet Epson'un L3250 sayfasındaki satırların kısaltmasıdır. Kendi modelinin ışık sırası farklıysa kılavuzunda kendi tabloyu ara.

## İki ışığın birlikte yanıp sönmesi

Mürekkep ve kağıt ışıkları birlikte yanıp sönebiliyor, ya da sırayla (dönüşümlü) yanıp sönebiliyor. İkisinin anlamı farklı. Birlikte yanıp sönmede yastık ömrünün sonuna yaklaşıyor. Dönüşümlü yanıp sönmede ise kenarlıksız baskı için kullanılan yastık ömrünün sonuna geliyor; Epson bu durumda yastık değişene kadar kenarlıksız baskının kullanılamayacağını yazıyor.

## Yanlış kapatma ve yazılım güncellemesi

İki durumda ışıklar sabit yanık kalır. Mürekkep ve kağıt ışığı yanıyorsa ürün doğru kapatılmamıştır. Epson, bu hatayı kopya düğmelerinden birine basarak temizlemeni, ardından püskürtme ucu kontrolü yapmanı ve bekleyen yazdırma işlerini iptal etmeni istiyor. Hep güç düğmesiyle kapatmanı da yazıyor. Wi-Fi ve Wi-Fi Direct ışıkları yanıyorsa ürün yazılım güncellemesi sırasında hata vermiştir. Bu durumda yazıcıyı USB kabloyla bağla ve güncellemeyi yeniden dene.

## Servise gitmeden önce üç not

1. Yazıcının modelini yaz.
2. Hangi ışıkların sabit, hangilerinin yanıp söndüğünü yaz.
3. Yaptığın adımları sırasıyla not et.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
