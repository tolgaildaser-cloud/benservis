---
title: "Beko buzdolabı hata kodları: kodu gördün, şimdi ne yapacaksın"
description: "Beko buzdolabında E0, E1, E2, E3 ve E4 kodlarının üreticideki karşılığı, defrost hattının mantığı, evde buz çözdürme ve servis sınırı."
slug: "beko-buzdolabi-hata-kodlari"
date: "2026-08-21"
category: "Buzdolabı"
# 🔴 22 Ağu 2026 — EKSİK YAYIN GİDERİLDİ (kod tablosu denetimi, TARAMA-1).
# Yazı yalnız E0, E1 ve E4'ü veriyor ve E2/E3 için "kaynaklar birbirini tutmuyor"
# gerekçesiyle susuyordu. Bu gerekçe HATALIYDI: ikisi de üreticinin resmî listesinde
# ve servis el kitabında net. Doğrulanamayanı yazmamak doğru ilke, ama doğrulanabiliri
# "doğrulanamıyor" diye atlamak da bir hata — burada ikincisi olmuş.
# Kaynak: beko.com.tr/blog/buzdolabi-hata-kodlari-rehberi (Arçelik birebir aynı liste).
# 📌 "Kod şeması seriye göre değişir" ifadesi de yumuşatıldı: üretici YİRMİ kodluk
#    TEK bir liste yayımlıyor (E0-E5, E8-E20, E24; E6/E7/E21-E23 tabloda yok).
# 📌 E4'teki "termal sigorta" ibaresi üreticide geçmiyor; üreticinin ifadesi
#    "Freezer Defrost Sistem Hatası".
guide:
  difficulty: "Kolay"
  time: "~25 dakika"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Telefon kamerası", "Havlu", "Kuru fırça", "Soğutucu çanta ya da kalın poşet"]
steps:
  - "Kodu fotoğrafla ve model numarasını soğutucu bölmenin iç yan duvarındaki etiketten oku."
  - "Dondurucudaki bozulabilir yiyecekleri toparla, kapıyı gereksiz açmayı bırak."
  - "Fişi çek, 5-10 dakika bekle, tekrar tak ve kodun geri gelip gelmediğine bak."
  - "Kod geri geldiyse dondurucunun arka duvarına bak; kalın buz tabakası var mı diye kontrol et."
  - "Her iki kapının tam kapandığını, contaların temiz ve esnek olduğunu kontrol et."
  - "Cihazı duvardan birkaç santim öne çek ve arka ızgaranın tozunu dışarıdan fırçayla al."
  - "Kalın karlanma varsa fişi çek, kapıları aç, altına havlu ser ve buzun kendiliğinden çözülmesini bekle."
  - "Buz çözülüp cihaz yeniden çalıştıktan sonra kod tekrar geliyorsa notunla birlikte servisi ara."
faq:
  - q: "Beko buzdolabında E1 kodu ne demek?"
    a: "E1, dondurucu evaporatörü üzerindeki defrost sensörünün açık ya da kısa devre olduğunu bildirir. Bu sensör, karlanmayı çözen ısıtıcının ne zaman devreye gireceğini kartın anlamasını sağlar. Sensör veri gönderemeyince buz çözme çevrimi doğru yönetilemez ve zamanla evaporatörde buz birikir. Yani E1 çoğu zaman tek başına gelmez, arkasında büyüyen bir karlanma sorunu vardır."
  - q: "E4 kodunda buzdolabı çalışmaya devam eder mi?"
    a: "Genellikle eder ama performansı düşerek eder. E4, karlanmayı eriten defrost ısıtıcısını ya da onun termal sigortasını işaret eder; kompresör çalışmaya devam ettiği için cihaz bir süre daha soğutur. Ancak evaporatör üzerindeki buz kalınlaştıkça hava kanalları daralır ve özellikle soğutucu bölme belirgin biçimde ılıklaşır. Bu yüzden E4'ü ertelemek, tabloyu iyileştirmez."
  - q: "Fişi çekip buz çözdürmek kodu tamamen giderir mi?"
    a: "Kodu geçici olarak silebilir ama sebebini ortadan kaldırmaz. Buz çözüldüğünde fan yeniden rahat döner ve cihaz bir süre normal çalışır; buzu üreten asıl neden defrost hattındaysa aynı kod haftalar içinde geri gelir. Buz çözdürmeyi kalıcı çözüm değil, hem yiyeceği kurtaran hem de teşhisi netleştiren bir ara adım olarak düşün."
  - q: "Listelerde gördüğüm E5, E6, E7 kodları neden birbirini tutmuyor?"
    a: "Çünkü Beko buzdolaplarında kod şeması model ailesine göre değişir ve internetteki listeler çoğu zaman hangi seriyi anlattığını söylemez. Aynı kod bir seride tek bir sensörü, başka bir seride birden fazla sensörün birleşimini bildirebilir. Bu yüzden düşük kodların ötesine geçtiğinde tek güvenilir kaynak cihazının kendi kullanım kılavuzudur; kodu ve model numarasını birlikte servise iletmek de aynı işi görür."
images:
  coverAlt: "Ahşap dolaplı mutfakta duran, alt bölmesi derin dondurucu olan iki kapılı buzdolabı"
---

Buzdolabının panelinde derece yerine bir kod var, dondurucu hâlâ soğuk ama alt bölme sabahtan beri ılık. İnternette baktığın listeler birbirini tutmuyor ve içeride bir haftalık alışveriş duruyor. Bu yazıda Beko buzdolaplarında birden çok kaynakla doğrulayabildiğimiz kodları, o kodların arkasındaki hattın nasıl çalıştığını ve **kodu gördükten sonra evde güvenle yapabileceğin şeyleri** sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ℹ️ Beko ve Arçelik buzdolabı kod tablosunu kendi sitelerinde **birebir aynı** yayımlar; yirmi kodluk tek bir liste vardır ve her kod tek bir şeyi bildirir. Aşağıdakiler defrost hattını ilgilendiren beş kod. Kesin karşılık için üreticinin listesine ya da kendi cihazının kullanım kılavuzuna bak.

## Adım adım: Beko buzdolabında kod sonrası ilk 25 dakika

**1. Kodu ve modeli kayda geçir.** Ekranı fotoğrafla, model numarasını soğutucu bölmenin iç yan duvarındaki etiketten oku. Kod tek başına yarım bilgidir, model numarasıyla birlikte tam bilgidir.

**2. Yiyeceği güvene al.** Dondurucudaki bozulabilir ürünleri bir soğutucu çantada topla ve **kapıyı gereksiz açmayı bırak**. Kapalı bir dondurucu, kompresör hiç çalışmasa bile saatlerce soğuk kalır.

**3. Resetle.** Fişi çek, **5-10 dakika bekle**, tekrar tak. Elektrik kesintisi sonrası kartta kalan geçici kodlar bu adımda silinir.

**4. Karlanmaya bak.** Kod geri geldiyse dondurucunun arka duvarını incele. Kalın ve düzgün bir buz tabakası varsa defrost hattı karlanmayı çözemiyor demektir.

**5. Kapıları ve contaları kontrol et.** İki kapının da tam kapandığından, contaların temiz ve esnek olduğundan emin ol. Yarım kapanan kapı hem karlanmayı hem sıcaklık uyarısını besler.

**6. Arkayı havalandır.** Cihazı duvardan **birkaç santim öne çek**, arka ızgaranın tozunu **dışarıdan** kuru fırçayla al. ⚠️ Kapağı açıp içeri girmek gerekmez.

**7. Buzu çözdür.** Kalın karlanma varsa fişi çek, kapıları aç, zemine havlu ser ve buzun **kendiliğinden** çözülmesini bekle. ⛔ Buzu bıçak, tornavida ya da sivri bir aletle kırma; evaporatör borusu ince malzemedir ve delinirse tamir değil komple değişim konusuna döner.

**8. Tekrar dene ve not al.** Cihaz kuruduktan sonra fişi tak. Kod yine geliyorsa elindeki notu — kod, model, karlanma durumu, hangi bölmenin ılıkladığı — servisle paylaş.

## E0, E1 ve E4: aynı hattın üç durağı

Yaygın no-frost serilerde birden çok kaynakla doğrulayabildiğimiz üç kod var ve ilginç olan şu: üçü de aynı hikâyenin farklı noktalarını anlatıyor.

| Kod | Doğrulanmış karşılığı | Tipik belirti |
|---|---|---|
| E0 | Dondurucu bölme hava sensörü hatası | Sıcaklık düzensizleşir, kompresör ya çok çalışır ya hiç kalkmaz |
| E1 | Dondurucu evaporatörü defrost sensörü hatası | Arka duvarda kalınlaşan karlanma |
| E2 | Fresh food (soğutucu) bölmesi evaporatör sensörü hatası | Soğutucu bölme düzensiz soğur |
| E3 | Fresh food (soğutucu) bölmesi hava sensörü hatası | Bölme sıcaklığı doğru ölçülemez |
| E4 | Freezer defrost sistem hatası | Dondurucu soğuk kalırken soğutucu bölme ılıklaşır |

**E2 ile E3'ün farkı** sensörün nerede durduğudur: **E2** soğutma serpantinini (evaporatör), **E3** bölme içindeki havayı ölçen sensörü işaret eder. İkisi de soğutucu bölme tarafına bakar.

> 📌 Üreticinin yayımladığı liste bu beşle sınırlı değil; buzmatik, joker bölme ve fan tarafını da kapsayan **yirmi kod** var (`E0`–`E5`, `E8`–`E20`, `E24`). Tam liste ve gruplandırılmış hâli için: [Arçelik buzdolabı hata kodları](/blog/arcelik-buzdolabi-hata-kodlari/) — Beko aynı tabloyu kullanır.

Hattı şöyle düşün: **E0** bölmenin havasını ölçen sensörü, **E1** buzu ne zaman eriteceğini söyleyen sensörü, **E4** ise buzu fiilen eriten ısıtıcıyı işaret eder. Ölçüm bozulduğunda ya da ısıtıcı görevini yapmadığında sonuç aynı yere çıkar: evaporatörde buz birikir, hava kanalları daralır ve soğuk hava bölmelere dağıtılamaz.

Bu yüzden Beko'da "dondurucu buz gibi ama alt raflar ılık" şikâyeti klasiktir ve neredeyse her zaman defrost tarafına bakılmasını gerektirir. Kodun kendisi bu şüpheyi doğruluyorsa teşhisin yarısı zaten tamamlanmış demektir.

**Kendin kontrol et:** Alt bölme ılıklarken dondurucu hâlâ iyi soğutuyorsa gaz kaybını değil defrost hattını düşün. Gaz tarafındaki bir sorunda **iki bölme birden** zayıflar; tek bölmenin ılıklaması hava dağıtımı sorununun tipik imzasıdır.

## E0-E4 bandının ötesi: neden burada duruyoruz

Yüksek numaralı kodlar için Beko'da tek bir tablo yok. Bazı serilerde kodlar tek tek arızaları, bazılarında birden fazla sensörün birleşimini bildirir; bu yüzden aynı kod için birbirini tutmayan cevaplar dolaşıyor. Doğrulayamadığımız bir karşılığı yazıp seni yanlış parçaya yönlendirmektense burada durmayı tercih ediyoruz.

Yapılacak şey basit: kodu aynen, model numarasıyla birlikte not et ve kılavuzun arıza tablosuyla karşılaştır. Kılavuz elinde yoksa model numarasıyla üreticinin destek sayfasından indirilebilir. E0-E4 bandının tam listesini benservis.com blogundaki buzdolabı hata kodları yazısında bulabilirsin.

## Kod değil de kapı uyarısı olabilir mi?

Olabilir. Panelde bir sesli uyarı ya da yanıp sönen bir gösterge varsa, bu bazen bir arıza kodu değil **kapı açık kaldı** ya da **iç sıcaklık yükseldi** uyarısıdır. Ayırt etmesi kolaydır: kapıyı düzgün kapatıp cihaza birkaç saat verdiğinde uyarı kendiliğinden kayboluyorsa arıza yoktur. Alışverişten sonra dolu bir dondurucuya sıcak yükleme yapmak, uzun süren bir kapı açıklığı ya da elektrik kesintisi bu uyarının en yaygın sebepleridir.

⛔ **İç panelleri ve arka kapağı sökme.** Sensörler, fan ve defrost ısıtıcısı panellerin arkasındadır; orada hem 220V hat hem de soğutucu borular var. Kapak ve panel seviyesi kullanıcıya, tablanın altı servise aittir.

## Hangi noktadan sonra servis işi

Buz çözdürdükten sonra kısa sürede geri gelen kod, kalıcı E1 ya da E4 bildirimi ve iki bölmenin birden soğutmayı bırakması servis konusudur. Sensör ve defrost ısıtıcısı değişimi panel sökümü gerektirir; kullanıcı tarafında denenecek bir şey kalmamıştır.

Ama elin boş değil: kod, model numarası, karlanma fotoğrafı ve "hangi bölme ılık" bilgisi servise arızayı yarı yarıya teşhis ettirir. Cihazının koduna ve belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
