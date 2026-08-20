---
title: "Yazıcı Wi-Fi'a bağlanmıyor: modemden porta doğru sırayla eleme"
description: "Yazıcı Wi-Fi'a bağlanmıyorsa sıra önemli: önce modem, sonra yazıcı. Çoğu yazıcının yalnız 2.4GHz desteklediğini biliyor muydun? WPS ve port kontrolüyle eleme."
slug: "yazici-wifi-baglanmiyor"
date: "2026-08-20"
category: "Bilgisayar / yazıcı"
faq:
  - q: "Yazıcı neden 5GHz Wi-Fi ağını görmüyor?"
    a: "Çünkü ev yazıcılarının büyük bölümü yalnız 2.4GHz bandını destekler; 5GHz ağlar bu yazıcılar için görünmezdir. Modemin iki bandı ayrı adlarla yayınlıyorsa yazıcıyı adında 5G geçmeyen ağa bağlamalısın. Tek ad altında birleşik yayın yapan modemlerde yazıcı bazen banda tutunamaz; bandları ayırmak en sağlam çözümdür."
  - q: "Önce modemi mi yazıcıyı mı yeniden başlatmalıyım?"
    a: "Önce modemi. Modemi kapatıp bir dakika bekleyip aç, internet ışıklarının oturmasını bekle; ağ tamamen ayağa kalktıktan sonra yazıcıyı kapatıp aç. Sıra önemlidir çünkü yazıcı açılırken ağı arar; modem henüz hazır değilken açılan yazıcı bağlantıyı yine bulamaz."
  - q: "WPS ile bağlanmak güvenli mi, nasıl yapılır?"
    a: "WPS, şifre yazmadan modemle yazıcıyı eşleştiren pratik bir yoldur: önce modemdeki WPS düğmesine basılır, ardından birkaç dakika içinde yazıcının WPS/kablosuz düğmesine basılı tutularak eşleşme beklenir. Eşleşme penceresi kısa süre açık kaldığı için pratik kullanımda risk düşüktür; istersen bağlantı kurulduktan sonra modem arayüzünden WPS'i kapatabilirsin."
  - q: "Yazıcı ağa bağlı görünüyor ama bilgisayar yine de basmıyor, neden?"
    a: "Bu durumda sorun Wi-Fi'da değil, bilgisayardaki yazıcı kaydındadır: sürücü, yazıcıyı eski bir adreste arıyor olabilir. Yazıcının IP adresi modem yeniden başlayınca değişebilir ve sürücüdeki port eski adreste kalır. Çözüm, yazıcıyı Windows'tan kaldırıp üreticinin uygulamasıyla yeniden eklemek ya da sürücü portunu güncel adrese çevirmektir."
---

Telefondan her şey açılıyor, televizyon internetten film oynatıyor — ama yazıcı köşesinde inatla "bağlanamadı" diyor. Wi-Fi yazıcı sorunlarının kendine has bir huyu vardır: sorun neredeyse hiçbir zaman tek bir yerde değildir; modem, bant, şifre ve bilgisayardaki sürücü kaydı arasında bir yerde kopmuştur ve doğru sırayla bakılırsa çoğu evde çözülür. Bu yazıda o sırayı takip ediyoruz — ve çoğu rehberin atladığı kritik bilgiyi baştan söylüyoruz: **ev yazıcılarının büyük bölümü yalnız 2.4GHz ağını görür.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 📶 **Önce şu ayrımı yap:** yazıcı **ağa hiç mi bağlanamıyor** (kendi ekranında/ışığında bağlantı yok), yoksa **ağa bağlı ama bilgisayar mı basamıyor**? İlkinde konu modem-bant-şifre üçgenidir. İkincisinde Wi-Fi tamamdır, sorun bilgisayardaki sürücü ve port kaydındadır — o da bu yazının son bölümü.

## 1) Yeniden başlatma — ama doğru sırayla

Klasik tavsiye "kapat aç" olur da sırası söylenmez; oysa burada sıra işin kendisidir.

**Kendin kontrol et:**
1. **Önce modemi** kapat (ya da fişini çek), bir dakika bekle, aç.
2. Modemin **internet ışıklarının oturmasını bekle** — bu birkaç dakika sürebilir. Ağ tam ayağa kalkmadan sonraki adıma geçme.
3. **Sonra yazıcıyı** kapat-aç ve ağa bağlanmasını bekle.

Sıranın mantığı basit: yazıcı açılırken ağını arar. Modem henüz kendine gelmemişken açılan yazıcı ağı bulamaz ve "bağlanamadı"da kalır. Bu basit sıralama, uzun süredir sorunsuz çalışırken "bir sabah birdenbire" kopan bağlantıların önemli kısmını geri getirir.

Bir de mesafe gerçeği: yazıcı modemden çok uzaksa ya da arada kalın duvarlar varsa bağlantı kurulur ama sık sık düşer. Denemeler sırasında yazıcıyı geçici olarak modeme yaklaştırmak, "sinyal mi zayıf, ayar mı yanlış" sorusunu net ayırır.

## 2) 2.4GHz / 5GHz ayrımı — en çok atlanan sebep

Modern modemler iki ayrı bantta yayın yapar: 2.4GHz (uzağa giden, yavaş) ve 5GHz (hızlı, kısa menzilli). Telefon ve bilgisayarlar ikisini de kullanır; **ev yazıcılarının büyük bölümü ise yalnız 2.4GHz destekler.** Yazıcı 5GHz ağı göremez bile — arıza olduğundan değil, donanımı o bandı hiç dinlemediğinden.

Bu yüzden şu tablo çok tipiktir: eve yeni modem gelir ya da modem ayarı değişir, her şey çalışır ama yazıcı bir daha bağlanamaz.

**Kendin kontrol et:**
- Telefonunda Wi-Fi listesine bak: ağ adların **iki ayrı ad** mı (örneğin biri sonu "5G" ile biten), yoksa **tek ad** mı?
- İki ayrı ad varsa: yazıcıyı **adında 5G geçmeyen** ağa bağla. Yazıcının ağ kurulum menüsünde de bu adı seçtiğinden emin ol.
- Tek ad varsa (birleşik yayın): bazı yazıcılar bu düzende banda tutunamaz. Modem arayüzünden bandları **iki ayrı ada** ayırmak en sağlam çözümdür; modemin arayüzüne girmek istemiyorsan internet sağlayıcının müşteri hizmetlerinden bu ayarı isteyebilirsin.
- Şifreyi elle giriyorsan büyük-küçük harfe dikkat: yazıcı ekranlarında şifre girişi hataya en açık adımdır.

## 3) WPS: şifresiz eşleştirme

Yazıcının küçük ekranında uzun şifre yazmakla uğraşmak istemiyorsan çoğu modem ve yazıcının desteklediği WPS kısayolu var: iki cihaza birer düğmeyle "birbirinizi bulun" demek.

**Kendin kontrol et:**
1. Modemin üzerindeki **WPS düğmesine** bas (bazı modemlerde birkaç saniye basılı tutulur; WPS ışığı yanıp sönmeye başlar).
2. **Birkaç dakika içinde** yazıcının WPS ya da kablosuz düğmesine basılı tut (modele göre menüden "WPS ile bağlan" da seçilebilir).
3. Işıkların sabitlenmesini bekle; eşleşme kurulunca yazıcı ağı ve şifreyi kendisi almış olur.

WPS de yalnız 2.4GHz üzerinden çalışacağı için önceki adımdaki bant düzenini bozmaz. Eşleşme penceresi kısa süre açık kalır; yine de içi rahat etmeyenler bağlantı kurulduktan sonra modem arayüzünden WPS özelliğini kapatabilir.

## 4) Yazıcı bağlı ama bilgisayar basmıyor: sürücüde port

Burası Wi-Fi yazıcıların en sinsi bölgesidir. Yazıcı ağa bağlandı, kendi ekranında her şey yeşil — ama bilgisayar "yazıcı çevrimdışı" diyor ya da iş kuyrukta bekliyor. Sorun ağda değil, **bilgisayarın yazıcıyı aradığı adrestedir.**

Şöyle olur: bilgisayardaki sürücü, yazıcıyı ağdaki adresiyle (IP) tanır. Modem yeniden başlayınca yazıcıya **farklı bir adres** verebilir; sürücü ise eski adreste aramaya devam eder. Yazıcı orada olmadığı için bilgisayara göre "yok"tur.

**Kendin kontrol et:**
- En pratik yol: Windows'ta Ayarlar → Bluetooth ve cihazlar → Yazıcılar'dan yazıcıyı **kaldır**, sonra üreticinin kurulum uygulamasıyla (HP Smart, Epson uygulaması gibi) **yeniden ekle**. Uygulama yazıcıyı ağda güncel adresiyle bulur ve portu doğru kurar.
- Elle uğraşmayı sevenler için: yazıcı özelliklerindeki **Bağlantı noktaları (Ports)** sekmesinde, seçili portun adresinin yazıcının güncel adresiyle aynı olup olmadığına bakılır. Yazıcının güncel adresi, çoğu modelde yazıcının kendi menüsünden yazdırılan **ağ durumu raporunda** yazar.
- Kalıcı çözüm istersen modem arayüzünden yazıcıya **sabit IP** ayrılabilir; böylece adres bir daha değişmez. Bu ayara güvenmiyorsan servis ya da sağlayıcı desteğiyle yapılabilir.

Bu bölüm, sitedeki [yazıcı çevrimdışı görünüyor](/blog/yazici-cevrimdisi-gorunuyor/) yazısıyla kardeştir; belirtin "bağlıyken basmıyor" ise oradaki adımlar da işine yarar.

## 5) Buradan sonrası servis işi

Modem sırayla başlatıldı, doğru banda bağlandı, WPS denendi, sürücü yeniden kuruldu — yazıcı hâlâ ağ tutmuyorsa iki ihtimal kalır: yazıcının kablosuz alıcısında donanım sorunu ya da ağ tarafında modemin derin bir ayar meselesi.

⛔ **Kendin-çöz sınırı burasıdır.** Yazıcının içindeki anten/alıcı ünitesine müdahale kullanıcı işi değildir; modemin güvenlik ayarlarını bilinçsizce değiştirmek de evdeki bütün cihazların bağlantısını riske atar. Bu noktada tabloyu — hangi bant, hangi adımlar, hangi sonuç — servise aktar; geçici çözüm olarak yazıcı USB kablosuyla bilgisayara bağlanıp işler yürütülebilir.

## Servis çağırmadan önce üç dakika

1. **Önce modem, sonra yazıcı** — bu sırayla kapat-aç; modem oturmadan yazıcıyı açma.
2. Yazıcının **2.4GHz ağa** bağlı olduğundan emin ol; adında 5G geçen ağı seçme.
3. Yazıcı bağlı ama basmıyorsa yazıcıyı bilgisayardan **kaldırıp üretici uygulamasıyla yeniden ekle**.

İlgili: [Yazıcı çevrimdışı görünüyor](/blog/yazici-cevrimdisi-gorunuyor/) · [Yazıcı kartuş tanımıyor](/blog/yazici-kartus-tanimiyor/)

Bu üçlü, Wi-Fi yazıcı şikâyetlerinin büyük kısmını evde bitirir. Bitmediyse cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
