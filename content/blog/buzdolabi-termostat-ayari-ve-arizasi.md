---
title: "Buzdolabı termostat ayarı ve arızası: önce ayarı kontrol et"
description: "Buzdolabı termostatı bozuk mu, ayar mı yanlış? Regal ve Beko kılavuzlarına göre ayar konumları, fazla ve az soğutmada ne yapılacağı, servise gidiş sınırı."
slug: "buzdolabi-termostat-ayari-ve-arizasi"
date: "2026-10-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 acil boşluk, 2. dalga, paket P09). BOSLUK.md #55: "buzdolabı termostat arızası / termostat ayarı" belirti · AC "t" #5, #9; Arçelik destek. Genel yazı: iki üreticinin belgesi.
# Envanter: origin/main'de termostat odaklı genel buzdolabı yazısı yok. Yakınlar: buzdolabi-kac-derece-olmali, buzdolabi-yaz-ayari, buzdolabi-cok-sogutuyor, buzdolabi-sogutmuyor-nedenleri, buzdolabi-hic-durmuyor, kombi-termostat-sensor-arizasi-ve-degisimi (kombi, ayrı cihaz).
# Belgeler (bu paketin diğer iki yazısı için de kullanılan, curl -sL -A "Mozilla/5.0" ile üreticinin kendi alan adından indirilmiş PDF'ler; okuma pdftotext -layout/-raw, sayfa = PDF sayfası):
#  (R) Regal ST 25010 Buzdolabı Kullanım Kılavuzu  https://statik.regal-tr.com/webfiles/20264253_k.pdf  md5 4990d5e348de4e1c562e682b6620f3a0
#  (B) Beko Buzdolabı Kullanma Kılavuzu (BK9611NE, 9625NDEX, 984611 EI …)  http://download.beko.com/Download.UsageManualsBeko/984611-ei-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_Manual_7289120284_en_US20180112-100911-151.pdf  md5 2b4510ba146966baa86e0ac3a3388a76
# Regal düğme/konumlar R s.18 · Regal sorun giderme R s.28-29 · Regal ilk takış R s.18 · Beko sıcaklık butonları B s.12, s.16 · Beko hızlı fonksiyonlar B s.17 · Beko sorun giderme B s.36-38.
# BİLEREK YAZILMAYANLAR: ücret (#46) · termostat parçasının ölçülmesi/sınanması/değişimi (iki belgede de kullanıcı adımı yok; servis işi) · "termostat bozuktur" teşhisi (belgeler bunu söylemiyor) · elektronik kart/sensör anlatımı.
# Alıntı denetim tablosu: buzdolabi-termostat-ayari-ve-arizasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (bekleme hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu"]
steps:
  - "Termostatın cihazında hangi biçimde olduğuna bak; düğmeli modelde 1-5 ölçeği, ekranlı modelde sıcaklık butonu vardır."
  - "Ayarın soğutmayı kapatan konumda ya da yanlış değerde kalıp kalmadığını kontrol et."
  - "Yeterince soğutmuyorsa ayarı bir kademe yükselt, kılavuza göre soğutucu ayarı dondurucuyu da etkiler."
  - "Fazla soğutuyor, yiyecekler donuyorsa ayarı bir kademe düşür."
  - "Süper dondurma, hızlı soğut ya da hızlı dondur gibi fonksiyonların açık kalıp kalmadığına bak."
  - "Ayarı değiştirdikten sonra cihaza sıcaklığa ulaşma zamanı tanı; hemen yeniden ayar yapma."
  - "Ayar, kapı ve yerleşim doğruyken sorun sürüyorsa yetkili servise başvur; termostatı kendin sökme."
faq:
  - q: "Buzdolabı termostatı bozuk olduğunu nasıl anlarım?"
    a: "İncelediğimiz Regal ve Beko kılavuzları termostat parçasının bozulduğunu anlamak için kullanıcıya bir sınama adımı vermiyor. Önce ayarı, kapıyı, contayı ve yerleşimi kontrol etmeni, sorun sürerse yetkili servisi aramanı söylüyorlar."
  - q: "Regal buzdolabında termostat düğmesi kaçta olmalı?"
    a: "Regal ST 25010 kılavuzuna göre düğme 1 ile 5 arasında ayarlanır, 3-4 normal kullanım konumudur. 1-2 daha az soğutma içindir ve kış aylarında enerji tasarrufu sağlar. Düğmeyi 1'den önceki konuma getirme; kılavuz o konumda dolabın soğutma yapmayacağını yazıyor."
  - q: "Beko buzdolabında termostat nerede?"
    a: "İncelediğimiz Beko kılavuzunda düğme yok; sıcaklık dondurucu ve soğutucu için ayrı butonlarla ayarlanıyor. Butona her basışta değer bir kademe değişiyor. Sorun giderme listesinde ise yine de termostatın çok soğuk bir değere ayarlanmış olabileceği ve uygun değere getirilmesi gerektiği yazıyor."
  - q: "Buzdolabı ayarı değiştirdikten sonra ne kadar beklemeli?"
    a: "Beko, soğutucu ya da dondurucu sıcaklığını değiştirdikten sonra ilgili bölmelerin sıcaklığı yeterli seviyeye gelene kadar beklemeni; fiş yeni takıldığında ya da yeni yiyecek konduğunda ise ayarlanan sıcaklığa ulaşmanın normalden uzun sürdüğünü yazıyor. Regal ise ilk takıştan sonra tamamen soğuması için ortam sıcaklığına bağlı olarak 24 saate kadar kesintisiz çalışması gerektiğini söylüyor."
images:
  coverAlt: "Düğmeli bir termostatı ve ekranlı bir paneli yan yana gösteren iki sade buzdolabı çizimi"
  steps:
    - "Buzdolabının içindeki termostat düğmesini ve kapıdaki sıcaklık butonunu işaret eden beyaz eldivenli sade siluet el"
    - "Termostat düğmesinin kapalı konumundan bir kademe ileriye çeviren beyaz eldivenli sade siluet el"
    - "Termostat düğmesini bir kademe yukarı çeviren beyaz eldivenli sade siluet el; yanında güneş simgesi"
    - "Termostat düğmesini bir kademe aşağı çeviren beyaz eldivenli sade siluet el; yanında donmuş bir salatalık"
    - "Panelde yanan hızlı fonksiyon simgesine dokunan beyaz eldivenli sade siluet el"
    - "Buzdolabının yanında duran kum saati ve ayar düğmesine dokunmayan beyaz eldivenli sade siluet el"
    - "Alet çantalı yüzsüz bir servis teknisyeni siluetinin buzdolabının önünde durduğu sade çizim"
---

"Buzdolabı bozuldu, termostat arızalı olmalı" diye düşünmeden önce, üreticilerin kendi kılavuzları önce **ayarı** kontrol etmeni söylüyor. Bu yazıda iki kılavuzu yan yana okuduk: **Regal ST 25010** (termostat düğmeli) ve **Beko** BK9611NE / 984611 EI serisi (ekranlı, sıcaklık butonlu). Aşağıdaki adımların hepsi bu iki belgeden. Termostat parçasının kendisini sınamak ise iki belgede de yok; onu sonda açıkça yazdık.

Hedef sıcaklığı merak ediyorsan [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına bakabilirsin.

> ⚠️ **Güvenlik sınırı:** Bu listede yalnız ayar, kapı ve yerleşim kontrolü var. Kasanın içindeki elektrik aksamına, termostat parçasına ya da kartlara müdahale etmek servis işidir. Regal kılavuzu da arızada cihazı kendi başına tamir etmeye kalkışmamanı, içinde kullanıcının onarabileceği parça olmadığını yazıyor.

## Adım adım: termostat ayarı kontrol sırası

**1. Termostatın biçimini tanı.** Regal'de termostat, soğutucu bölmede aydınlatmayla aynı kutuda bir **düğme**dir; **1 ile 5** arasında ayarlanır ve 1'den 5'e doğru çevirdikçe soğutma artar. Beko kılavuzunda düğme yok: dondurucu ve soğutucu için ayrı **sıcaklık butonları** var. Dondurucu butonuna her basışta değer -18'den -24'e, soğutucu butonunda 8'den 2'ye doğru bir kademe değişir.

**2. Ayarın yanlış konumda olmadığını doğrula.** Regal'in "çalışmıyor" satırında nedenlerden biri termostatın **1'den önceki konumda** kalması; çözüm düğmeyi 1-5 aralığına getirmek. Kılavuz bu konumda dolabın soğutma yapmayacağını açıkça uyarıyor. Beko'da benzer satır "sıcaklık ayarları doğru yapılmamıştır"; çözüm uygun ayarı seçmek.

**3. Yeterince soğutmuyorsa ayarı yükselt.** Regal'in "yeterli soğutma yapmıyor" satırında "termostat ayarı doğru olmayabilir" yazıyor ve düğmenin **konumunu yükseltmeni** söylüyor. Beko'ya göre soğutucu bölme ayarının **dondurucu bölmeyi de etkilediğini** unutma; ikisini birlikte değerlendir.

**4. Fazla soğutuyorsa ayarı düşür.** Regal'de yiyecekler gereğinden fazla soğuyorsa düğme konumu **küçültülür**. Beko'da soğutucu çekmecelerdeki yiyecekler donuyorsa soğutucu ayarı **daha yüksek bir değere** alınır; sorun giderme listesinde ayrıca termostatın çok soğuk bir değere ayarlanmış olabileceği ve uygun değere getirilmesi yazıyor. Daha geniş bir liste için [buzdolabı çok soğutuyor](/blog/buzdolabi-cok-sogutuyor/) yazısına bak.

**5. Hızlı fonksiyonlar açık kalmış olabilir.** Regal'de **5 konumu** ya da süper anahtar hızlı dondurma içindir; dondurucu soğuyunca eski konuma dönülür. Anahtar yiyeceği koymadan 24 saat önce açılır, 24 saat sonra **kapatılır**. Beko'da hızlı soğut en fazla **4 saat**, hızlı dondur en fazla **8 saat** sonra kendiliğinden iptal olur. Bu fonksiyonlar aklında kalmadıysa dolap normalden çok soğuyor olabilir.

**6. Sabırlı ol.** Beko, bölme sıcaklığını değiştirdikten sonra ilgili bölmelerin sıcaklığı **yeterli seviyeye gelene kadar beklemeni** söylüyor. Ayrıca fiş yeni takıldığında ya da yeni yiyecek konulduğunda ürünün **ayarlanan sıcaklığa ulaşması normalden uzun sürer** ve bu normaldir. Regal da ilk takıştan sonra tamamen soğuması için ortam sıcaklığına bağlı olarak **24 saate kadar** kesintisiz çalışmasını, bu sürede kapıyı sık açıp kapamamayı ve aşırı doldurmamayı istiyor. Her saat ayarı oynamak durumu belirsizleştirir.

**7. Ayar doğruysa kapıya, contaya ve yerleşime bak.** İki belge de benzer nedenleri sayıyor. Beko: kapılar sık açılmış ya da aralık kalmış, kapı contası kirlenmiş, eskimiş veya tam oturmamış, yakın zamanda sıcak yemek konmuş. Regal: kapılar tam kapanmamış, arka duvara temas eden kap ya da yiyecek hava dolaşımını engelliyor, dolap aşırı dolu, arka duvarla yeterli mesafe yok, ortam sıcaklığı cihazın standartlarına uygun değil. Bunlar da tamamsa servis aşaması gelmiştir.

## Mevsim değişince ayar değişir mi?

Regal kılavuzu ayarın kapının açılma sıklığına, içindeki yiyecek miktarına ve ortam sıcaklığına göre yapılmasını istiyor; kış aylarında enerji tasarrufu için dolabı **daha düşük konumda** çalıştırabileceğini de yazıyor. Yani mevsimle gelen küçük bir ayar farkı arıza değildir. Sıcak aylar için [buzdolabı yaz ayarı](/blog/buzdolabi-yaz-ayari/) yazısına bakabilirsin.

## Termostat arızasını belgeler nasıl anlatıyor?

Hiç anlatmıyor. Regal ve Beko kılavuzlarında termostat parçasının bozulduğunu anlamak için bir ölçüm, bir tuş kombinasyonu ya da bir sınama adımı yok. Belgelerin verdiği tek yol, yukarıdaki ayar ve ortam kontrollerinden sonra sorun sürüyorsa **yetkili servise** başvurmak. Bu yüzden "termostat bozuk" teşhisini internette bulduğun parça listelerine bırakma; belirtiyi ve modeli not edip servise ilet.

## Ne zaman servis

- Ayar doğru konumda, kapılar kapalı, yerleşim düzgün olduğu hâlde dolap günlerce soğutmuyor ya da donduruyorsa
- Beko'da hata göstergesi yanıp dondurucuda **E** harfi görünüyorsa
- Fişi taktıktan sonra Beko'da yaklaşık 6, Regal'de 5-10 dakika geçtiği hâlde kompresör çalışmaya başlamıyorsa

⛔ Termostat ve sensörler kasanın içindedir; sınama ve değişimi yetkili servisin işidir. Soğutmama için [buzdolabı soğutmuyor nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısına da bakabilirsin.

## Servisi aramadan önce kısa özet

1. Dolabın markası ve modeli ne, ayar şu an ne gösteriyor?
2. Dolap az mı soğutuyor, fazla mı?
3. Hızlı fonksiyon açık mı?
4. Ayarı en son ne zaman, ne kadar değiştirdin?

Belirtiyi ve modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
