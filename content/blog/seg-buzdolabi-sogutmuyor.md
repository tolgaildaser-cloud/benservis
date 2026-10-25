---
title: "SEG buzdolabı soğutmuyor: servis çağırmadan önce 8 kontrol"
description: "SEG buzdolabı soğutmuyorsa kılavuza göre önce fiş, termostat, kapı, yerleşim ve duvar mesafesine bak; ilk çalıştırmada 24 saat bekle, kondenseri temizle."
slug: "seg-buzdolabi-sogutmuyor"
date: "2026-10-24"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme S, çatal C). origin/main 08904bf'de "seg" geçen slug ve başlık YOK; markasız buzdolabi-sogutmuyor-nedenleri farklı sorgu.
# OT (#164, bu koşu, suggestqueries hl=tr gl=tr) tohum "seg buzdolabı soğutmuyor": 1. "…soğutmuyor" · 2. "…ne yapmalıyım" · 3. "…buzluk soğutmuyor" · 4. "…alt kısmı soğutmuyor" · 5. "…çalışıyor ama soğutmuyor". Ham kayıt _kaynak/ot.log.
# GSC: www-3…6 Sorgular.csv'de "seg buzdolabı soğutmuyor" satırı yok (SEG satırları: tv hdmi, cm 580, derin dondurucu ayarı, bulaşık ff, çamaşır e02).
# Belge zinciri (#88): SEG'in kendi sitesi yok (seg.com.tr DNS'te çözülmüyor). YK kararı 23 Eki: üretici Vestel. PDF'ler Vestel'in kendi alan adındaki kılavuz sunucusunda
#   (static/statik.vestel.com.tr), bu koşuda HTTP 200 application/pdf. vestel.com.tr aramasında SEG ürün sayfası yok; destekmerkezi.vestel.com.tr kılavuz uç noktası
#   reCAPTCHA istiyor, bu yüzden HTML bağlantı sayfası açılamadı ⚠️ (YK teyidi). Kapaklarda model adı + "VESTEL BEYAZ EŞYA A.Ş.".
#  (A) SEG STW 902 buzdolabı  https://statik.vestel.com.tr/webfiles/20268755_k.pdf  36 s.  md5 1689f0e4ac5a383c348446464dba436a
#  (B) SEG RF4540 A No Frost  https://static.vestel.com.tr/kullanimkilavuzlari/52065130.pdf  24 s.  md5 8ffbdc290dbbc725665f676400bc6c0c
#  (C) SEG 455A çift kapılı   https://static.vestel.com.tr/kullanimkilavuzlari/52028151.pdf  24 s.  md5 e2afd06619a389ef008084a02f6333ee
# Sorun tabloları A s.24-26 · B s.19-20 · C s.19 · 3 saat dik B s.6, C s.7 · 24 saat A s.18, B s.7, C s.9 · termik 5-10 dk A s.27, B s.21 · yerleşim A s.13-14, B s.6, C s.7 · kondenser A s.21, B s.17, C s.16.
# BİLEREK YAZILMAYANLAR: gaz kaçağı / kompresör / termostat / fan teşhisi (#31, belgede yok) · "alt kısmı soğutmuyor" için ayrı neden (belgede satırı yok; yalnız STW 902 yaz modu anlatıldı) · fiyat (#46).
# Alıntı denetimi: seg-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (soğuma süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Çalıştığından emin olduğun başka bir priz", "Kuru yumuşak fırça ya da elektrikli süpürge"]
steps:
  - "Fişin prize tam takılı olduğunu, sigortanın atmadığını kontrol et, gerekirse çalışan başka bir prizde dene."
  - "Termostat düğmesinin 0'da ya da 1'in altında olmadığını kontrol et, soğutma yetersizse düğmeyi bir kademe yükselt."
  - "Dolap yeni kurulduysa ya da taşındıysa dik bekletme ve ilk soğuma süresine uyulduğunu kontrol et."
  - "Elektrik kesintisinden ya da fişi çekip taktıktan sonra dolabın kendiliğinden çalışmasını birkaç dakika bekle."
  - "Kapıların sık açılmadığını ve tam kapandığını, yiyeceklerin kapıya değmediğini kontrol et."
  - "Arka duvara değen kapları geri çek, dolabı aşırı doldurduysan bir kısmını çıkar."
  - "Dolabın duvar ve ısı kaynaklarına olan mesafesini ve ortam sıcaklığını kontrol et."
  - "Fişi çekip arkadaki siyah kanatlı kondenserin tozunu kuru bir fırça ya da süpürgeyle al."
faq:
  - q: "SEG buzdolabı soğutmuyor, ne yapmalıyım?"
    a: "SEG kılavuzlarının servis çağırmadan önce listesine göre önce fişi, sigortayı ve prizi kontrol et. Ardından termostat ayarına, kapıların tam kapanmasına, arka duvara değen kaplara, dolabın aşırı dolu olup olmadığına ve duvar mesafesine bak. Bunların hepsi uygunsa İletişim Merkezi'ni ya da yetkili servisi ara."
  - q: "Yeni aldığım SEG buzdolabı soğumadı, arızalı mı?"
    a: "Kılavuzlara göre dolap prize ilk takıldıktan sonra tamamen soğuması için ortam sıcaklığına bağlı olarak 24 saate kadar kesintisiz çalışmalı. RF4540 A ve 455A kılavuzları ilk çalıştırmada ya da taşımadan sonra dolabın 3 saat dik bekletildikten sonra prize takılmasını istiyor."
  - q: "Elektrik gidip gelince SEG buzdolabı neden hemen çalışmıyor?"
    a: "Kılavuzlara göre gazın basıncı henüz dengelenmediği için kompresör koruyucu termiği atar; dolap 5-10 dakika sonra kendiliğinden çalışmaya başlar. RF4540 A ve 455A'da bu amaçla 5 dakikalık bir gecikme işlevi var."
  - q: "SEG buzdolabının buzluğu soğutmuyor, sebebi ne olabilir?"
    a: "Kılavuzlar dondurucuya özel bir arıza satırı vermiyor. Termostat ayarını, dondurucu kapısının tam kapandığını ve dondurucuya bir anda çok miktarda taze yiyecek konmadığını kontrol et. Bunlar uygunsa yetkili servis gerekir."
images:
  coverAlt: "Kapısı açık bir buzdolabının içinde raflara dizilmiş yiyecekler"
  steps:
    - "Çizim: solda buzdolabı, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda buzdolabı, sağda bekleme süresi için saat"
    - "Çizim: solda buzdolabı, sağda prizden çekilen fiş"
    - "Çizim: solda buzdolabı, sağda iç bölme ve raflar"
    - "Çizim: solda buzdolabı, sağda duvarla arasındaki boşluk"
    - "Çizim: solda buzdolabı, sağda duvarla arasındaki boşluk"
    - "Çizim: solda buzdolabı, sağda prizden çekilen fiş"
---

SEG buzdolabı soğutmayı bıraktığında ilk akla gelen gaz ya da motor olur. Oysa SEG'in kılavuzlarındaki "servis çağırmadan önce" listesi bambaşka sırayla başlıyor: fiş, termostat, kapı, dolabın içi ve yerleşim. Bu yazı üç SEG kılavuzuna dayanıyor: tezgâh altı **STW 902**, No Frost **RF4540 A** ve çift kapılı **455A**. SEG'in kendi sitesi yok; kılavuzlar üretici Vestel'in kılavuz sunucusunda duruyor. Senin modelin farklıysa kendi kılavuzundaki sorun tablosu esastır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş, sigorta, priz → termostat 0'da mı, 1'in altında mı → yeni dolapsa 24 saat bekle → kesintiden sonra 5-10 dakika bekle → kapılar tam kapanıyor mu → arka duvara değen kap, aşırı yük → duvar mesafesi → kondenser temizliği. Hepsi tamamsa servis.

## Adım adım: kılavuzun kontrol sırası

**1. Elektriği kontrol et.** Kılavuzların ilk satırı dolabın hiç çalışmaması: elektrik arızası olabilir, fiş prize tam takılmamış olabilir, prizin ya da ana sigorta atmış olabilir. Prizde arıza olup olmadığını anlamak için fişi çalıştığından emin olduğun başka bir prize takıp dene. Arıza prizdeyse STW 902 kılavuzu ehliyetli bir elektrik teknisyenine prizin değiştirilmesini öneriyor.

**2. Termostatı kontrol et.** Düğme "0" konumunda kalmışsa dolap çalışmaz; STW 902 kılavuzu düğmenin 1'den önceki konuma getirilmemesini, bu konumda dolabın soğutma yapmayacağını yazıyor. Dolap çalışıyor ama yeterli soğutmuyorsa kılavuzların çözümü **termostat düğmesinin konumunu yükseltmek.** Normal kullanım konumu 3-4; ayrıntı [SEG buzdolabı ayarı kaç olmalı](/blog/seg-buzdolabi-ayari-kac-olmali/) yazısında.

**3. Yeni ya da taşınmış dolapta süreye uy.** RF4540 A ve 455A kılavuzlarına göre ilk çalıştırmada ya da taşımadan sonra dolap **3 saat dik konumda** bekletildikten sonra fişe takılmalı, aksi hâlde kompresör zarar görebilir. Üç kılavuz da dolabın tamamen soğuması için ortam sıcaklığına bağlı olarak **24 saate kadar** kesintisiz çalışması gerektiğini yazıyor; bu sürede kapıyı sık açma ve dolabı aşırı doldurma. İlk çalıştırmada bir koku duyabilirsin; kılavuza göre dolap soğutmaya geçince kaybolur.

**4. Kesintiden sonra bekle.** Ani elektrik kesilmesinde ya da fişi çekip taktığında gazın basıncı henüz dengelenmediği için kompresör koruyucu termiği atar. Kılavuzlara göre dolap **5-10 dakika** sonra kendiliğinden çalışır, endişe edilecek bir durum yoktur.

**5. Kapılara bak.** Kılavuzlar yetersiz soğutmanın sebepleri arasında kapının sık açılmasını, uzun süre açık kalmasını ve tam kapanmamasını sayıyor. Böyle olduysa birkaç saat kapıyı açıp kapatma. STW 902 kılavuzuna göre dolabın içindeki yiyecekler kapıya temas ediyor olabilir; bunu düzelttiğin hâlde kapı kapanmıyorsa yetkili teknik servisten yardım iste. Bozuk ya da yırtık conta da servis işidir.

**6. Dolabın içini düzenle.** Hava dolaşımını engelleyecek şekilde **arka duvara temas eden** kap ya da yiyecek varsa geri çek. Dolap aşırı doluysa fazla yiyecekleri çıkar. 455A kılavuzu ayrıca arka duvara dayanan paketlerin, soğutma sırasında oluşan kara yapışabileceğini yazıyor.

**7. Mesafe ve ortam.** Kılavuzlar dolabın ocak, fırın, kalorifer peteği ve soba gibi ısı kaynaklarından en az **50 cm**, elektrikli fırınlardan en az 5 cm uzakta, üstünde en az **15 cm** boşlukla durmasını istiyor. Kondenserin duvara dayanmaması için verilen **mesafe ayar plastiği** 90° döndürülerek takılmalı; STW 902'de duvarla dolabın arkası arasındaki boşluk 75 mm'yi aşmamalı. Dolabın altında hava dolaşımını engelleyen halı ya da kilim olmamalı. Ortam sıcaklığı da dolabın bilgi etiketindeki iklim sınıfına uymalı; kılavuzlar dolabın 10 °C'den soğuk ortamda çalıştırılmasını önermiyor.

**8. Kondenseri temizle.** Kılavuzlar arkadaki siyah kanatlı kondenserin **yılda en az bir kez** kuru ve yumuşak bir fırçayla ya da elektrikli süpürgeyle temizlenmesini istiyor; bu dolabın daha verimli çalışmasını sağlar. Temizliğe başlamadan önce mutlaka fişi çek.

## Buzluk ya da alt bölüm soğutmuyorsa

- **Dondurucuya çok yiyecek kondu:** RF4540 A ve 455A kılavuzlarına göre dondurucuya çok miktarda yeni yiyecek konunca kompresör daha uzun çalışır. Büyük miktar için RF4540 A'nın tarifi yiyecekleri koymadan 24 saat önce dondurucu düğmesini en yüksek konuma almak.
- **STW 902'de alt bölüm:** Damlalığın arkasındaki profilin **yaz modu** dolabın alt bölümlerinin daha soğuk olması istendiğinde kullanılır.
- **Uzun elektrik kesintisi:** 455A kılavuzuna göre derin dondurucu kapısını açma; dolap donmuş yiyecekleri yaklaşık 17 saat korur. Daha uzun kesintide yiyecekleri yeniden dondurma, en kısa zamanda tüket.
- **Fazla soğutma:** Soğutucudaki yiyecekler donuyorsa düğmeyi bir kademe düşür; nemli yiyecekleri arka duvardan uzak, kapalı kapta sakla.

Ses de geliyorsa kılavuzlar kompresör, fokurtu ve çıtırtı seslerini normal sayıyor. Buz birikmesi için [SEG buzdolabı buzlanma](/blog/seg-buzdolabi-buzlanma/), markadan bağımsız anlatım için [buzdolabı soğutmuyor nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısına bak.

## Ne zaman servis

Sekiz kontrol tamam, dolap 24 saattir kapı açılmadan çalışıyor ve hâlâ soğutmuyorsa kılavuzların kapanış cümlesi geçerli: uyarıların hepsini yerine getirdiğin hâlde sorun sürüyorsa İletişim Merkezi'ni ara ve teknik destek iste.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, ayar, kapı, yerleşim ve kondenser tozu sende; gaz devresi, kompresör, termostat, conta değişimi ve kasa açma yetkili servisin.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
