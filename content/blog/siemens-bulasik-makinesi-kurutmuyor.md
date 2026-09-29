---
title: "Siemens bulaşık makinesi kurutmuyor"
description: "Siemens bulaşık makinesi kurutmuyorsa Siemens'in kontrolleri: program seçimi, parlatıcı, yoğun kurutma ayarı ve yerleştirme; kapaktaki damlalar neden normal."
slug: "siemens-bulasik-makinesi-kurutmuyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Siemens'in kendi alan adlarından indirildi, HTTP 200.
# #88: web araması KULLANILMADI; belgeler siemens-home.bsh-group.com/tr menülerinden ve ürün sayfalarındaki kılavuz bağlantılarından bulundu.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-bulasik-sprint/ · PDF okuma pdftotext -layout, sayfa = PDF sayfası = basılı sayfa no.
#  (W4) Siemens TR "Bulaşık makinen kurutma yapmıyor mu?"  https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/bulasik-makineniz-hakkinda/kurutma-yapmiyor  gövde metni md5 e659cdf42031a1849ae4cffcbb8767fb (HTML dinamik; iki indirmede gövde birebir aynı)
#  (K1) SN23HW62MT kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001706611_H.pdf  52 s.  md5 168ec8d8b1f400c2cb09856890782627  (sayfa atıfları bu belgeye göre)
#  (K2) SN45EB01NT  https://media3.bsh-group.com/Documents/9002038247_A.pdf  52 s.  md5 02b0114f050e3292c565f1404f08be4c  (autoOpen Dry s.10 ve s.34)
#  (K3) SN25EI83CT  https://media3.bsh-group.com/Documents/9002038027_A.pdf  56 s.  md5 d4a5a736e405a027d5f2230f9a841418  ("Ekstra kurutma d:00-d:01" s.35; autoOpen Dry s.11, s.37)
#  (K4) SN63HX62MT  https://media3.bsh-group.com/Documents/9002017437_B.pdf  52 s.  md5 2379b88f4e313307fdeb303ce8eda0b5
# Not: İndirilen dört kılavuzun "Arızaları giderme" tablosunda "bulaşıklar kurumuyor" satırı YOK. Yazı Siemens'in ayrı destek sayfası (W4) ile kılavuzların parlatıcı (K1 s.25-26),
#   program (K1 s.17), temel ayar (K1 s.33 "Yoğun kurutma d00-d01"), deterjan (K1 s.26-28), yerleştirme (K1 s.30) ve boşaltma (K1 s.31) bölümlerine dayanıyor.
# BİLEREK YAZILMAYANLAR: rezistans/fan/sensör teşhisi (belgede yok; W4 "cihazlarda kurutma aşamasında eski makinelerdeki gibi rezistans çalıştırılmaz" dışında) · parlatıcı ayarının tuş kombinasyonu (modele göre sembol farklı, "kendi kılavuzu" dendi) ·
#   W4'teki program listesi yalnız örnek olarak ve "modele göre değişir" notuyla kullanıldı · süre ve #46 kapsamındaki rakamlar.
# Alıntı denetim tablosu: siemens-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Bez", "Makinenin kullanım kılavuzu"]
steps:
  - "Seçtiğin programın kurutma aşaması içerdiğini kontrol et; kurutma yapmayan programlarda bulaşıkların ıslak çıkması normaldir."
  - "Parlatıcı göstergesi yanıyorsa parlatıcı kabını max işaretine kadar doldur, taşan parlatıcıyı sil."
  - "Kılavuzundaki temel ayarlardan parlatıcı miktarını daha yüksek bir kademeye al."
  - "Modelinde varsa yoğun ya da ekstra kurutma ayarını aç; hassas bulaşıklarda kullanma."
  - "Kapları girinti kısmı aşağı bakacak, çukur ve derin parçaları suyun akabileceği şekilde yanlamasına yerleştir."
  - "Bulaşıklar arasında yeterince boşluk bırak."
  - "Program tamamen bitene kadar kapıyı açma; ekranda program sonu göstergesini bekle."
  - "Bulaşıkları önce alt sepetten, sonra üst sepetten boşalt."
faq:
  - q: "Siemens bulaşık makinesi neden bulaşıkları ıslak bırakır?"
    a: "Siemens'in destek sayfası dört kontrol öneriyor: bulaşıklar doğru yerleştirilmiş mi, parlatıcı kullanılıyor mu, program sonrası kalan damlalar yoğuşma mı ve seçilen program kurutma içeriyor mu. Siemens'e göre bazı programlarda kurutma işlemi hiç bulunmaz; kılavuzlar da en iyi kurutma sonuçları için mutlaka parlatıcı kullanılmasını istiyor."
  - q: "Program bittiğinde kapağın içinde ve gövdede su damlaları oluyor, arıza mı?"
    a: "Siemens'e göre hayır. Daha az enerji tüketimi için Siemens cihazlarında kurutma aşamasında eski makinelerdeki gibi rezistans çalıştırılmaz; bulaşıkların üzerindeki su buharlaşır ve havalandırma çıkışından dışarı yönlendirilir. Makinenin bulunduğu ortam içeriden daha soğuk olduğu için metal gövde ve kapak daha hızlı soğur ve buhar üzerlerinde yoğuşabilir. Siemens bunun tamamen normal olduğunu ve önlem gerekmediğini söylüyor."
  - q: "Plastik kaplar neden hep ıslak çıkıyor?"
    a: "Siemens'e göre plastikler ısıyı etkili tutamadığı için bulaşık makinesinde diğer bulaşıklara göre kuruma performansları daha düşüktür. Siemens'in destek sayfasına göre bazı modellerdeki ekstra kurutma fonksiyonu durulama sıcaklığını artırıp kurutma süresini uzatır ve özellikle plastik parçaları kurutmak için idealdir; kılavuz aynı ayarın hassas bulaşıklar için uygun olmadığını da not ediyor."
  - q: "Kombine tablet kullanıyorum, yine de parlatıcı gerekir mi?"
    a: "Siemens kılavuzuna göre parlatıcının fonksiyonu kombine deterjanlarda sınırlıdır ve parlatıcı kullandığında genelde daha iyi sonuç alırsın. Kılavuz ayrıca özel kurutma performansına sahip tabletlerin kullanılmasını öneriyor ve 14 °dH su sertliğinden itibaren en iyi yıkama ve kurutma sonucu için özel tuz ve parlatıcı kullanılmasını tavsiye ediyor."
images:
  coverAlt: "Programı bitmiş bulaşık makinesinin açık kapağı, üst sepette üzerinde su damlaları kalmış bardaklar ve plastik kaplar"
---

Program bitti, bulaşıklar temiz ama ıslak: bardakların dibinde su, plastik kaplarda damlalar. Siemens bunun için ayrı bir destek sayfası yayımlıyor ve sayfanın ilk cümlesi rahatlatıcı: yıkama döngüsü bittiği hâlde kurutma performansının düşük olmasının **birkaç nedeni** olabilir ve bunlar **tavsiyeler uygulanarak** iyileştirilebilir. Siemens'in dört kontrolü şunlar: **yerleştirme, parlatıcı, program sonrası su damlaları ve program seçimi.** Kullanım kılavuzları da parlatıcı ve kurutma ayarı tarafını tamamlıyor. Bu yazıda ikisini birleştirip adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Programın kurutma içerdiğinden emin ol → parlatıcıyı doldur, miktarını yükselt → modelinde varsa yoğun/ekstra kurutmayı aç → kapları ağzı aşağı, çukur parçaları yan yerleştir, boşluk bırak → program bitmeden kapıyı açma → önce alt sepeti boşalt. Kapağın içindeki damlalar Siemens'e göre normaldir.

## Önce şunu bil: kapaktaki damlalar arıza değil

Siemens'in açıklaması şöyle: daha az enerji tüketimi için Siemens cihazlarında kurutma aşamasında eski makinelerdeki gibi **rezistans çalıştırılmaz.** Bulaşıkların üzerindeki su buharlaşır ve **havalandırma çıkışından** dışarı yönlendirilir. Makinenin bulunduğu ortam içeriden daha soğuk olduğu için metal gövde ve kapak daha hızlı soğur; içerideki buhar **gövde ve iç kapak sacının üzerinde yoğuşabilir.** Siemens'e göre bu **tamamen normaldir**, performans kaybına neden olmaz ve bir önlem almana gerek yoktur.

Yani sorun bulaşıkların ıslak çıkmasıysa aşağıdaki adımlara bak; sorun yalnız kapağın ve iç duvarın buğulu olmasıysa makine olması gerektiği gibi çalışıyor.

## Adım adım: evde denenecekler

**1. Programın kurutma içerdiğinden emin ol.** Siemens'e göre bulaşık makinesinin **bazı programlarında kurutma işlemi bulunmaz.** Siemens'in destek sayfasındaki örneklere göre durulama/duşlama programı kurutma yapmaz; **Hızlı 45°** programı da kurutma yapmaz, bu programda kurutma için ek kurutma fonksiyonunu açman gerekir. SN23HW62MT kılavuzunun program tablosunda da **Speed 45°** programının akışında kurutma yok; Yoğun 70°, Eko 50° ve Speed 65° ise kurutma aşamasıyla bitiyor. Programlar modele göre değiştiği için kendi kılavuzundaki program tablosuna bak.

**2. Parlatıcıyı doldur.** Siemens'in kılavuzdaki cümlesi açık: **en iyi kurutma sonuçlarını elde etmek için parlatıcı kullanınız.** Parlatıcı ilave etme göstergesi yandığında parlatıcı kabının kapağını aç, **max işaretine** kadar doldur ve kapağı duyulur şekilde kapat. Yalnız evde kullanılan bulaşık makinelerine uygun parlatıcı kullan. Kılavuzun uyarısı: parlatıcı taşarsa **yıkama kabından sil**; taşan parlatıcı aşırı köpüğe yol açabilir.

**3. Parlatıcı miktarını yükselt.** Siemens kılavuzuna göre parlatıcı ilave miktarı temel ayarlardan değiştirilir (ekranda **r** ile başlayan değer). Kılavuzun açıklaması: **yüksek kademede** yıkama sırasında daha fazla parlatıcı uygulanır, **su lekeleri azalır ve daha iyi bir kurutma sonucu elde edilir.** Tuş sırası modele göre değiştiği için kendi kılavuzundaki "Parlatıcı ilave etme miktarının ayarlanması" bölümüne bak. Kılavuzdaki bir ters not da önemli: bardaklarda ve çatal bıçaklarda **iz** kalıyorsa miktar çok yüksek olabilir; o durumda bir kademe geri al.

**4. Yoğun ya da ekstra kurutmayı aç.** Siemens kılavuzlarında bu bir temel ayar: SN23HW62MT'de **"Yoğun kurutma" (d00-d01)**, SN25EI83CT'de **"Ekstra kurutma" (d:00-d:01)** adıyla geçiyor. Açıldığında **durulama sırasında sıcaklık artırılır** ve daha iyi bir kurutma sonucu elde edilir; çalışma süresi biraz uzayabilir. Kılavuzun notu: **hassas bulaşıklar için uygun değildir.** Siemens'in destek sayfasına göre bu fonksiyon enerji tüketimini biraz artırır ve özellikle **plastik parçaları** kurutmak için idealdir.

**5. Kapları doğru yönde yerleştir.** Siemens'in kuralı: kapları, içinde su birikmemesi için **girinti kısmı aşağı bakacak** şekilde yerleştir. Çukur ya da derin parçaları suyun akıp boşalabilmesi için **yanlamasına** koy.

**6. Boşluk bırak.** Siemens'e göre bulaşıklar arasında **yeterince boşluk** bıraktığında ısı ve su daha dengeli dağılır; böylece daha iyi yıkama ve kurutma sonuçları alırsın. Fincan, bardak ve küçük bulaşıkları üst sepete, tencere ve tabakları alt sepete yerleştir.

**7. Program bitmeden kapıyı açma.** Kılavuza göre ekranda **"0h:00m"** gösterildiğinde program sona ermiştir. Kurutma sırasında kapısını kendiliğinden aralayan **autoOpen Dry** özellikli modellerde (ör. SN45EB01NT, SN25EI83CT) Siemens'in önerisi açık: en iyi kurutma sonucu için bulaşıkları boşaltmadan önce **programın sona ermesini bekle.** Aynı kılavuzlara göre otomatik kapı açılması devre dışıysa kurutma aşaması çoğu zaman kısalır.

**8. Önce alt sepeti boşalt.** Siemens kılavuzu, bulaşıklara **su damlası düşmemesi** için bulaşıkları **alttan üste doğru** boşaltmanı istiyor. Kılavuzun bir uyarısı da var: sıcak bulaşıklar darbeye karşı hassastır; boşaltmadan önce biraz soğumalarını bekle.

## Plastikler ve deterjan

- **Plastikler:** Siemens'e göre plastikler ısıyı etkili tutamadığı için bulaşık makinesinde diğer bulaşıklara göre **daha az kurur.** Siemens hafif parçaları sabitlemek için küçük parça tutucular kullanmayı ve biberon, saklama kabı gibi plastik bulaşıkları parçalarına ayırmayı öneriyor.
- **Kombine tabletler:** kılavuza göre parlatıcının fonksiyonu kombine deterjanlarda **sınırlıdır**; parlatıcı kullandığında genelde daha iyi sonuç alırsın. Kılavuz ayrıca **özel kurutma performansına sahip tabletler** kullanılmasını öneriyor.
- **Tuz ve parlatıcı:** kılavuz, en iyi yıkama ve kurutma sonucu için **14 °dH** su sertliğinden itibaren özel tuz ve parlatıcı kullanılmasını tavsiye ediyor. Ayar ayrıntısı [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında.

## Ne zaman servis

Program kurutmalı, parlatıcı dolu ve yüksek kademede, yoğun kurutma açık, yerleştirme doğru, program sonuna kadar beklenmiş ve bulaşıklar hâlâ belirgin şekilde ıslak çıkıyorsa Siemens'in kullanıcıya verdiği adımlar bitmiş demektir. Siemens bu noktada **servis randevusu oluşturarak** uzman teknisyenlerinden destek almanı öneriyor.

Kılavuzun genel uyarısı: usulüne uygun olmayan onarımlar tehlikelidir, cihazda onarımı yalnız eğitimini almış uzman personel yapar.

⛔ **Kendin-çöz sınırı:** program seçimi, parlatıcı, temel ayarlar ve yerleştirme kullanıcıya; makinenin içindeki parçalar servise aittir.

Konunun markadan bağımsız anlatımı [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/) yazısında. Ekranda bir kod varsa [Siemens bulaşık makinesi hata kodları](/blog/siemens-bulasik-makinesi-hata-kodlari/) yazısına bak. Bulaşıklar ıslak değil de **kirli** çıkıyorsa [Siemens bulaşık makinesi temiz yıkamıyor](/blog/siemens-bulasik-makinesi-temiz-yikamiyor/) yazısına geç.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
