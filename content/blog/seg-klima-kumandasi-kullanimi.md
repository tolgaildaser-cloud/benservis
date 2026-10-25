---
title: "SEG klima kumandası kullanımı: tuşlar ve işaretler"
description: "SEG klima kumandasında soğut ve ısıt tuşları, mod sırası, fan, turbo, uyku, saat ve zamanlayıcı ayarı, pil değişimi ve kumandasız çalıştırma."
slug: "seg-klima-kumandasi-kullanimi"
date: "2026-10-24"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme S, çatal A). origin/main 08904bf'de "seg" geçen slug ve başlık YOK; markasız klima-kumandasi-calismiyor farklı sorgu (arıza).
# OT (#164, bu koşu, suggestqueries hl=tr gl=tr) tohum "seg klima kumanda": 1. "seg klima kumandası" · 2. "…kullanımı" · 3. "…işaretleri"; tohum "seg klima": 4. "…kumandası", 7. "…kumandası kullanımı". GSC: SEG klima satırı yok.
# Belge zinciri (#88): SEG'in kendi sitesi yok (seg.com.tr DNS'te çözülmüyor). YK kararı 23 Eki: üretici Vestel. PDF Vestel'in kendi alan adındaki kılavuz sunucusunda (static.vestel.com.tr), bu koşuda HTTP 200 application/pdf; vestel.com.tr aramasında SEG ürün sayfası yok, destekmerkezi.vestel.com.tr kılavuz uç noktası reCAPTCHA istiyor, bu yüzden HTML bağlantı sayfası açılamadı ⚠️ (YK teyidi). Kapakta "SEG INV 9/12/18/24", üretici "VESTEL BEYAZ EŞYA A.Ş.".
#  (K) SEG INV 9/12/18/24 duvar tipi split klima kullanım kılavuzu  https://static.vestel.com.tr/kullanimkilavuzlari/52158416.pdf  44 s.  md5 509214ae86ee66c043d812483a976207
# Kumanda tuş listesi K s.18 · pil ve saat s.17, s.19 · kullanım noktaları ve kumandasız çalıştırma s.20 · hızlı kullanım s.21 · işlevler s.22-26 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: tuş kilidi / kilit açma (kılavuzda yok) · kumanda uygulaması, Wi-Fi · kumanda eşleştirme · hata kodları (kılavuzda yok) · fiyat (#46).
# Alıntı denetim tablosu: seg-klima-kumandasi-kullanimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Klima kumandası", "İki adet AAA 1,5 V kalem pil"]
steps:
  - "Pil kapağını ok yönünde aç, iki AAA 1,5 V pili artı ve eksi yönlerine dikkat ederek yerleştir, kapağı kapat."
  - "Saat düğmesine bas, yanıp sönen saati aşağı ve yukarı ok tuşlarıyla ayarla, ayar düğmesiyle kaydet."
  - "Kumandayı iç ünitedeki sinyal alıcısına doğru, en fazla 6 metreden ve arada engel olmadan tut."
  - "Açma/kapama düğmesine bas; soğut ya da ısıt hızlı erişim düğmesiyle veya mod düğmesiyle modu seç."
  - "Sıcaklık artırma ve düşürme düğmeleriyle ayarı birer derece değiştir."
  - "Fan düğmesiyle üç hız arasında geç, yatay kanat düğmesiyle hava yönünü ayarla."
  - "Turbo, uyku, kapat ve otomatik açma/kapama işlevlerini ihtiyaca göre kur."
  - "Kumanda yoksa iç ünitenin ön kapağını kaldırıp sağdaki düğmeye basarak klimayı çalıştır."
faq:
  - q: "SEG klima kumandasında sıcak ayarı nasıl yapılır?"
    a: "Kılavuza göre ısıt düğmesine basarak klimayı ısıtma moduna geçirirsin, sonra sıcaklık artırma ve düşürme düğmeleriyle istediğin sıcaklığı seçersin. Aynı modu, ekranda ısıtma simgesi çıkana kadar mod düğmesine basarak da seçebilirsin."
  - q: "Kumandaya basınca klimadan ses gelmiyor, ne demek?"
    a: "SEG kılavuzu tuşa bastığında klimadan bip sesi gelmiyorsa sinyalin alınmadığını yazıyor; tuşa tekrar bas. Kumanda alıcıdan en fazla 6 metre uzakta olmalı ve arada engel bulunmamalı."
  - q: "Kumandadaki yıldızlı tuşlar neden çalışmıyor?"
    a: "Kılavuzda yıldız işaretli düğmelerin, örneğin iyonizer, hisset, otomatik temizleme ve düşey kanat, satın alınan üründe bulunmayabileceği için çalışmayabileceği yazıyor. Bu bir arıza değil, modelin özelliği yok demektir."
  - q: "Kumanda kaybolursa klimayı nasıl açarım?"
    a: "İç ünitenin ön kapağını sol ve sağ alt kısımlarından tutup çekerek yukarı kaldır, cihazın sağ tarafındaki düğmeye bas. Kılavuza göre çalışma göstergesi yanar ve klima oda sıcaklığına göre en uygun modda çalışır."
  - q: "Pilleri değiştirince saat neden sıfırlandı?"
    a: "Kılavuz pil değiştirdiğinde saatin yeniden ayarlanması gerektiğini yazıyor. Otomatik açma ve kapamanın doğru çalışması da kumandadaki saatin doğru olmasına bağlı."
images:
  coverAlt: "Beyaz bir klima kumandası ve arkada duvara monte edilmiş beyaz split klima iç ünitesi"
  steps:
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kumandanın pilleri"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
---

SEG klima kumandasında otuzdan fazla tuş ve gösterge var, ama günlük kullanımda işin çoğunu birkaç tuş görüyor: açma/kapama, soğut, ısıt ve sıcaklık okları. Kumandadaki işaretlerin ne anlama geldiğini bilmek, "tuşa basıyorum ama olmuyor" durumunu da büyük ölçüde açıklıyor. Bu yazı SEG INV 9/12/18/24 duvar tipi split klima kullanım kılavuzuna dayanıyor. Kılavuz Vestel'in kılavuz sunucusunda duruyor; SEG klimaları Vestel Beyaz Eşya üretiyor. Senin kumandan farklı bir modele aitse tuş yerleri değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** İki AAA pil tak, saati kur. Kumandayı en fazla 6 metreden alıcıya tut. Soğut ya da ısıt tuşuyla modu seç, oklarla sıcaklığı ayarla. Bip sesi yoksa sinyal gitmemiştir, tekrar bas. Yıldızlı tuşlar her modelde çalışmaz.

## Kumandadaki işaretler ne anlama geliyor?

| Tuş ya da gösterge | Ne yapar |
|---|---|
| Açma/kapama | Klimayı açar, kapatır |
| Soğut / Isıt | Doğrudan soğutma ya da ısıtma moduna geçirir |
| Mod | Soğutma, ısıtma, oto, nem alma ve fan arasında sırayla geçer |
| Sıcaklık artırma / düşürme | Ayarı her basışta 1 °C değiştirir |
| Fan hız ayarı | Üç hız arasında döner |
| Yatay kanat | Havanın yönünü aşağı ve yukarı ayarlar |
| Turbo | En hızlı soğutma ya da ısıtma, 30 dakika |
| Uyku | Sıcaklığı saatler içinde kademeli değiştirir |
| Saat / Ayar | Kumanda saatini kurar ve kaydeder |
| Açma kapama ayar | Otomatik açılma ve kapanma saatini kurar |
| Fabrika ayarları (Reset) | Kişisel ayarları silip varsayılana döner |
| Pil doluluk göstergesi | Pilin durumunu gösterir |

İyonizer, hisset, otomatik temizleme, düşey kanat, klima ışığı ve otomatik kapama tuşları kılavuzda yıldızla işaretli. Kılavuza göre bu düğmeler satın aldığın üründe bulunmayabileceği için çalışmayabilir.

## Adım adım: SEG klima kumandasını kullanmak

**1. Pilleri tak.** Pil yuvasının kapağını ok yönünde aç. İki adet AAA 1,5 V kalem pili artı ve eksi yönleri doğru olacak şekilde yerleştir; yönler pil yuvasında gösteriliyor. Kapağı kapat. Kılavuz şarj edilebilir pil kullanılmamasını, eski ve yeni pilin birlikte kullanılmamasını istiyor. Pil akmışsa kumandayı kullanma.

**2. Saati kur.** Pilleri taktıktan sonra saat düğmesine bas; ekranda saat yanıp sönmeye başlar. Aşağı ve yukarı ok tuşlarına her basışta zaman bir dakika değişir, basılı tutarsan hızlı ilerler. Doğru saate gelince ayar düğmesine bas. Pil her değiştiğinde saati yeniden kurman gerekir.

**3. Kumandayı doğru tut.** Kumandayı klimadaki sinyal alıcısına doğru tut. Kılavuza göre kumanda alıcıdan en fazla 6 metre uzakta olmalı ve arada engel bulunmamalı. Tuşa bastığında klimadan bip sesi gelmiyorsa sinyal alınmamıştır; tuşa tekrar bas. Kumandayı doğrudan güneş alan yerlere ya da ısı kaynağının yanına koyma, düşürme.

**4. Aç ve modu seç.** Açma/kapama düğmesiyle klimayı aç; klima son seçtiğin modda çalışmaya başlar. Soğut ya da ısıt düğmesi doğrudan o moda geçirir. Mod düğmesine her bastığında bir sonraki moda geçilir: soğutma, ısıtma, oto, nem alma ve fan. Modu istediğin anda değiştirebilirsin.

**5. Sıcaklığı ayarla.** Sıcaklık artırma ve düşürme düğmelerine her basışta ayar 1 °C değişir. Soğutma modunda en düşük ayar 18 °C. Kılavuz soğutma için 24-28 °C, ısıtma için 25-28 °C arasında ayarın daha uygun olduğunu yazıyor. Isıtmayla ilgili ayrıntılar [SEG klima sıcak modu](/blog/seg-klima-sicak-modu/) yazısında.

**6. Fanı ve hava yönünü ayarla.** Fan düğmesine her bastığında hız bir seviye artar; en hızlı seviyede bir kez daha basınca en düşük hıza döner. Yatay kanat düğmesine basınca kanat aşağı yukarı hareket etmeye başlar, bir kez daha basınca olduğu konumda durur. Kılavuz kanatlara elle müdahale edilmemesini istiyor; klima kapanınca kanatlar kendiliğinden kapanır.

**7. Zamanlı işlevleri kur.** Turbo 30 dakika en yüksek hızda çalışır, sonra önceki moda döner; erken durdurmak için tuşa bir kez daha bas. Uyku modunda soğutmada sıcaklık ilk iki saatin sonunda birer derece artar, ısıtmada ikişer derece düşer; toplam 8 saatte klima kapanır. Otomatik açma için klima kapalıyken, otomatik kapama için açıkken ilgili düğmeye bas, saati ortadaki sıcaklık tuşlarıyla 10'ar dakika adımlarla seç ve ayar düğmesiyle kaydet. Zamanlama düğmesine yeniden basarsan ayar iptal olur.

**8. Kumanda yoksa iç üniteden çalıştır.** Kumanda kaybolur ya da çalışmazsa iç ünitenin ön kapağını sol ve sağ alt kısımlarından tutarak çek ve yukarı kaldır. Cihazın sağ tarafındaki düğmeye bas. Çalışma göstergesi yanar ve klima oda sıcaklığına göre en uygun modda çalışır. Kapatmak için düğmeye yeniden bas.

## Ne zaman servis

- Yeni pille kumandanın ekranı hiç yanmıyorsa
- Ekran çalışıyor, alıcıya yakından basıyorsun ama bip sesi hiç gelmiyorsa
- Klima iç üniteden de çalışmıyorsa

Kılavuzun sorun giderme tablosu "klima çalışmıyor" için önce elektrik kesintisini, açma/kapamayı, sigortayı ve kumanda pilini kontrol etmeni istiyor. Markadan bağımsız kontroller [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazısında.

⛔ **Kendin-çöz sınırı burada biter.** Pil, saat, yön ve ayarlar sende; iç ünitenin kartı, sinyal alıcısı ve yerinden sökme yetkili servisin. Kılavuz klimanın montajını da yalnız yetkili servise bırakıyor.

## Servisi aramadan önce kısa özet

1. Klimanın model adı ne (SEG INV 9, 12, 18 ya da 24)?
2. Pil yeni mi, ekran net mi?
3. Tuşa basınca bip sesi geliyor mu?
4. İç ünitedeki düğmeyle klima çalışıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Filtre bakımı için [SEG klima filtre temizliği](/blog/seg-klima-filtre-temizligi/) yazısına bak. Bil, gör, çağır.
