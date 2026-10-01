---
title: "Vestel fırın ısınmıyor: evde kontrol"
description: "Vestel fırın ısıtmıyorsa Vestel'in tablosundaki sıra: enerji, sigorta, saat ayarı, sıcaklık düğmesi, kapak, ER mesajları ve servis sınırı."
slug: "vestel-firin-isinmiyor"
date: "2026-10-01"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-01, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200. PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu (sayfa no = PDF sayfası).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  V1) Vestel "FIRIN KULLANIM KILAVUZU AF-107892 X WIFI", 43 s., md5 9c525e3e577fee7daf2037e2d3ef3414
#      https://statik.vestel.com.tr/webfiles/20264178_k.pdf
#      s.36 "Fırın açılmıyor." → "Enerji kapatılmıştır." → "Enerji verildiğini kontrol ediniz. Ayrıca diğer mutfak cihazlarının çalıştığını kontrol ediniz."
#      s.36 "Pişirim yapmıyor veya fırın ısınmıyor." → "Fırının sıcaklık kumandası yanlış ayarlanmıştır." / "Fırının kapağı açık bırakılmıştır." → "Fırının sıcaklık kumanda düğmesinin doğru ayarlandığını kontrol ediniz."
#      s.36 "Fan destekli bir fonksiyon sırasında kapak açıldığında, iç fan duracaktır." / "Kapak kapatıldığı zaman, fırını normal çalışmaya yeniden başlayacaktır."
#      s.36 "Fırın kendi kendine kapanıyor." → "... herhangi bir işlem yapılmazsa, enerji tasarrufu için fırın kendini otomatik olarak kapatacaktır."
#      s.29 "Bu durumda fırına herhangi bir şey yapmayın ve Yetkili Servis ile iletişime geçin. ER06 ve ER09 hata mesajları değildir."
#      s.29 ER06 "6 saatten uzun bir süre pişirme yaptığınızda ekrana gelen uyarı mesajıdır. Herhangi bir butona dokunduğunuzda hata ekrandan silinecektir."
#      s.29 ER09 "Fırın iç sıcaklığının normal kullanım sıcaklığı limitinin üzerine çıktığında ekrana gelen hata mesajıdır. Fırını çalıştırmadan soğumasını bekleyiniz."
#      s.29 ER10 "Ürünün uygun voltajda çalışmadığı, ürünün sorunsuz bir şekilde çalışması için gerekli voltaj değerinin sağlanması gerekmektedir."
#      s.36 "Cihazınız hala normal çalışmasına devam etmiyorsa Vestel İletişim Merkezi veya size en yakın Vestel Yetkili Servisi ile irtibata geçiniz."
#  V2) Vestel "FIRIN KULLANIM KILAVUZU AF-9786 S / B / G", 40 s., md5 b9d6e4d2f710e98a2bb9550e94c0a040
#      https://statik.vestel.com.tr/webfiles/20265328_k.pdf
#      s.32 aynı "Fırın açılmıyor" ve "Pişirim yapmıyor veya fırın ısınmıyor" satırları.
#      s.23-25 Er0/Er1 "Sıcaklık sensörü arızasıdır. Servisle iletişime geçiniz."
#  V3) Vestel "ANKASTRE FIRIN KULLANIM KILAVUZU IST016M VAF460W VAF461MX VAF462X VAF661MS ...", 33 s., md5 6fc56d1616d4abbdf595213c15aafa0d
#      https://static.vestel.com.tr/kullanimkilavuzlari/52041101.pdf
#      s.28 "Fırın Çalışmıyor ise; Fırının fişi çekilmiş, sigorta atmış olabilir. Saatli modellerde ise, saat ayarlanmamış olabilir."
#      s.28 "Fırın Isıtmıyor ise; Fırın ısıtıcı kumanda düğmesi ile sıcaklık ayarı yapılmamış olabilir."
# BİLEREK YAZILMAYANLAR: sigorta değiştirme, priz/kablo/voltaj müdahalesi (#31); rezistans, termostat, sensör, kart teşhisi (belgede kullanıcıya verilmiyor); ER kodlarında ER06/ER09/ER10 dışındaki kodlara kullanıcı adımı (belge "herhangi bir şey yapmayın" diyor); lamba değişimi (alet ve kapak sökme gerektiriyor).
# Alıntı denetim tablosu: vestel-firin-isinmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Fırına enerji geldiğini kontrol et: mutfaktaki diğer cihazlar çalışıyor mu, fırının fişi takılı mı?"
  - "Sigorta kutusunda fırının bağlı olduğu sigortanın atıp atmadığına bak."
  - "Saatli bir modelse saatin ayarlı olduğundan emin ol."
  - "Sıcaklık kumanda düğmesinin bir sıcaklığa ayarlı olduğunu kontrol et."
  - "Fırın kapağının tam kapalı olduğundan emin ol; fanlı programda kapak açılınca iç fan durur, kapak kapanınca fırın normal çalışmaya döner."
  - "Ekranda ER09 varsa fırını çalıştırmadan soğumasını bekle; ER06 görürsen herhangi bir butona dokunarak sil."
  - "Fırın hâlâ ısınmıyorsa ya da ekranda başka bir ER kodu varsa fırına müdahale etmeden kodu ve modeli not edip Vestel Yetkili Servisi'ne başvur."
faq:
  - q: "Vestel fırınım hiç açılmıyor, ilk neye bakmalıyım?"
    a: "Vestel'in arıza tablosu ilk olarak enerjiyi gösteriyor: enerji verildiğini ve diğer mutfak cihazlarının çalıştığını kontrol etmeni istiyor. Vestel'in VAF serisi kılavuzu fırının fişinin çekilmiş ya da sigortanın atmış olabileceğini, saatli modellerde ise saatin ayarlanmamış olabileceğini de yazıyor."
  - q: "Fırının ışığı yanıyor ama ısıtmıyor, neden?"
    a: "Vestel'in tablosunda 'Pişirim yapmıyor veya fırın ısınmıyor' satırı iki neden sayıyor: sıcaklık kumandası yanlış ayarlanmış olabilir ya da fırının kapağı açık bırakılmış olabilir. Çözüm olarak sıcaklık kumanda düğmesinin doğru ayarlandığını kontrol etmeni istiyor."
  - q: "Ekranda ER09 yazıyor, fırın bozuldu mu?"
    a: "Vestel'e göre ER06 ve ER09 hata mesajı değil, koruma mesajıdır. ER09 fırın iç sıcaklığı normal kullanım sınırının üzerine çıktığında görünür; fırını çalıştırmadan soğumasını beklemen yeterli, soğuduktan sonra normal kullanıma devam edilebilir. ER06 ise 6 saatten uzun pişirmede çıkan uyarıdır ve herhangi bir butona dokununca silinir."
  - q: "Ekranda başka bir ER kodu var, ne yapmalıyım?"
    a: "Vestel kılavuzu ER06 ve ER09 dışındaki hata kodlarında fırına herhangi bir şey yapmamanı ve Yetkili Servis ile iletişime geçmeni söylüyor. Örneğin AF-9786 kılavuzunda Er0 ve Er1 sıcaklık sensörü arızası olarak geçiyor. Kodu ve model adını not et."
images:
  coverAlt: "Mutfakta tezgâh altına yerleştirilmiş, kapağı kapalı ve içi karanlık bir ankastre fırının önünde sıcaklık düğmesine uzanan bir el"
---

Fırını açtın, süre geçti ama içerisi hâlâ soğuk. Vestel'in ankastre fırın kılavuzlarındaki sorun giderme tablosunda bu belirtinin karşılığı var: **"Pişirim yapmıyor veya fırın ısınmıyor."** Tablonun saydığı iki neden de kullanıcı tarafında: sıcaklık kumandasının yanlış ayarı ve açık bırakılan kapak. Bu yazıda Vestel'in AF-107892 X WIFI, AF-9786 ve VAF serisi kılavuzlarındaki sırayı tek tek açıyoruz; düğme ve ekran adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Enerji var mı, sigorta atmış mı? Saatli modelde saat ayarlı mı? Sıcaklık düğmesi bir sıcaklıkta mı, kapak tam kapalı mı? Ekranda ER09 varsa fırın aşırı ısınmıştır, soğumasını bekle. Başka bir ER kodu görüyorsan fırına dokunma → Vestel Yetkili Servisi.

## Vestel'e göre nedenler

Vestel'in üç kılavuzundaki "fırın açılmıyor", "fırın ısınmıyor" ve "fırın çalışmıyor" satırları şu maddeleri sayıyor:

| Neden | Evde kontrol edilebilir mi? |
|---|---|
| Enerji kapalı, fiş çekilmiş | Evet, diğer mutfak cihazlarına ve fişe bakma |
| Sigorta atmış | Evet, sigorta kutusuna bakma |
| Saatli modelde saat ayarlanmamış | Evet, saati ayarlama |
| Sıcaklık kumandası yanlış ayarlanmış ya da sıcaklık seçilmemiş | Evet, düğmeyi bir sıcaklığa getirme |
| Fırın kapağı açık bırakılmış | Evet, kapağı kapatma |
| ER09: iç sıcaklık kullanım sınırının üstüne çıkmış | Evet, fırını soğumaya bırakma |
| ER10: voltaj uygun değil | Hayır, uygun voltajın sağlanması gerekiyor |
| Diğer ER kodları (ör. Er0, Er1 sıcaklık sensörü) | Hayır, Vestel Yetkili Servisi |

## Adım adım: evde denenecekler

**1. Enerji ve fiş.** Fırına enerji geldiğini kontrol et: mutfaktaki diğer cihazlar çalışıyor mu, fırının fişi takılı mı? Vestel'in tablosu "Fırın açılmıyor" satırında enerji verildiğini ve **diğer mutfak cihazlarının çalıştığını** kontrol etmeni istiyor.

**2. Sigorta.** Sigorta kutusunda fırının bağlı olduğu sigortanın atıp atmadığına bak. Vestel'in VAF serisi kılavuzu, fırın çalışmıyorsa ilk iki olasılık olarak fişin çekilmiş ya da **sigortanın atmış** olabileceğini yazıyor.

**3. Saat ayarı.** Saatli bir modelse saatin ayarlı olduğundan emin ol. Aynı kılavuzun "Fırın Çalışmıyor ise" maddesi: **saatli modellerde saat ayarlanmamış olabilir.** Saat ayarının adımları modelinin kılavuzunda.

**4. Sıcaklık düğmesi.** Sıcaklık kumanda düğmesinin bir sıcaklığa ayarlı olduğunu kontrol et. Vestel'in tablosundaki ilk neden **sıcaklık kumandasının yanlış ayarlanması;** VAF kılavuzu da fırın ısıtmıyorsa **sıcaklık ayarı yapılmamış olabileceğini** söylüyor. Pişirme fonksiyonunu ve sıcaklığı yeniden seç.

**5. Kapak.** Fırın kapağının tam kapalı olduğundan emin ol. Tablodaki ikinci neden **kapağın açık bırakılması.** AF-107892 kılavuzuna göre fan destekli bir fonksiyon sırasında kapak açılınca **iç fan durur;** kapak kapatıldığında fırın normal çalışmaya yeniden başlar.

**6. ER09 ve ER06.** Ekranda ER09 varsa fırını çalıştırmadan soğumasını bekle; ER06 görürsen herhangi bir butona dokunarak sil. Vestel'e göre bu ikisi hata değil **koruma mesajı:** ER09 iç sıcaklık normal kullanım sınırının üstüne çıktığında görünür ve soğuduktan sonra normal kullanıma devam edilebilir; ER06, 6 saatten uzun pişirmede çıkan uyarıdır.

**7. Sürerse servis.** Fırın hâlâ ısınmıyorsa ya da ekranda başka bir ER kodu varsa fırına müdahale etmeden kodu ve modeli not edip Vestel Yetkili Servisi'ne başvur.

## Arıza olmayan bir durum

**Fırın kendi kendine kapandı.** Vestel'in tablosuna göre elektronik kontrollü fırınlar, açıldıktan ya da pişirme programı bittikten sonra bir süre hiçbir işlem yapılmazsa **enerji tasarrufu için kendini otomatik olarak kapatır.** Fırını yeniden açıp fonksiyon ve sıcaklığı seçmen yeterli.

## Ne zaman servis?

Vestel kılavuzu sınırı ER kodlarında çiziyor: ER06 ve ER09 dışındaki bir hata kodu ekranda kalıyorsa **fırına herhangi bir şey yapmamanı** ve Yetkili Servis ile iletişime geçmeni istiyor. Tablodaki adımları uyguladığın hâlde fırın normal çalışmıyorsa da Vestel İletişim Merkezi'ne ya da en yakın Vestel Yetkili Servisi'ne başvurmanı söylüyor.

| Durum | Kimin işi |
|---|---|
| Enerji, fiş, sigortaya bakma, saat, sıcaklık düğmesi, kapak | Senin, bu rehberdeki adımlar |
| ER09 (aşırı sıcaklık) ya da ER06 (uzun pişirme uyarısı) | Senin: soğumasını bekle ya da butona dokun |
| ER10 (voltaj uygun değil) | Uygun voltaj sağlanmalı; fırına müdahale etme |
| Er0, Er1 ya da başka bir ER kodu | Vestel Yetkili Servisi |
| Adımlardan sonra fırın yine ısınmıyor | Vestel Yetkili Servisi |

⛔ Sigortayı değiştirmeye, prize, kabloya ya da fırının arka panelini açmaya çalışma. Sensör hatası gibi kodlar Vestel'e göre servis işidir.

Fırın ısınıyor ama yemeğin bir tarafı pişmiyorsa [fırın eşit pişirmiyor](/blog/firin-esit-pisirmiyor/) yazısına bakabilirsin. Markadan bağımsız anlatım için [fırın ısınmıyor](/blog/firin-isinmiyor/) sayfası var.

---

**Kaynak künyesi.** Sorun giderme adımları ve ER mesajları Vestel'in Türkçe fırın kullanım kılavuzlarından (AF-107892 X WIFI, AF-9786 S/B/G ve VAF serisi ankastre fırın) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
