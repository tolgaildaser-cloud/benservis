---
title: "Termosifon nasıl çalışır? Vestel ve Arçelik kılavuzları"
description: "Termosifon nasıl çalışır? Vestel ve Arçelik kılavuzlarına göre rezistans, termostat, ısıtıcı ışığı, emniyet ventili ve donma korumasının görevi."
slug: "termosifon-nasil-calisir"
date: "2026-11-03"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-11-02 Pzt PAZ alt ajanı (YK #197 boşluk yazısı; BOSLUK.md "2 Kas 2026 haftalık tarama" #236 [KU] "termosifon nasıl çalışır / nedir"). Slug origin/main content/blog/'da yok. Yakın yazılar: termosifon-nasil-kullanilir (açma, ayar, kapatma), termosifon-suyu-isitmiyor, termosifon-isigi-yanmiyor, termosifon-sigorta-attiriyor, termosifon-emniyet-ventili-su-damlatiyor, termosifon-elektrik-kacirir-mi. Bu yazı çalışma düzenini ve emniyetleri anlatır, kullanım adımı yazısıyla çakışmaz.
# Konu kanıtı: Google otomatik tamamlama 2 Kas 2026 (bu koşu, ham: _kaynak/OT-2026-11-03b.txt): "termosifon nasıl" #1 "termosifon nasıl çalışır"; "termosifon nasıl çalışır" #3 baymak, #4 arçelik, #5 demirdöküm, #8 vestel. GSC kanıt sayılmadı.
# Belgeler (#88), hepsi düz curl -sL (özel başlık yok), HTTP 200, ham dosyalar _kaynak/termosifon-nasil-calisir/:
#  (V) Vestel elektrikli termosifon TRV-50 E / TRV-65 E / TRV-80 E kullanım kılavuzu 20214615_k, md5 5b2d7d441b5c5d5fc6b34451d428e8e0 — PDF s.5, 6, 11, 14, 15, 16 https://statik.vestel.com.tr/webfiles/20214615_k.pdf
#  (A) Arçelik elektrikli termosifon T 7350 B / T 7365 B / T 7380 B kullanım kılavuzu, md5 51d9eda80694c637271a099e175a0722 — PDF s.5, 8, 10, 13 (s.13 görüntü sayfası, görselden teyit) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201711221231276_User%20Manual%20-%20Filetr_TR.pdf
#  Elendi: yok (iki belge de erişilebildi).
# BİLEREK YAZILMAYANLAR: kurulum, elektrik bağlantısı, V-otomat bağlantısı, rezistans, anot, limit termostat, kart ve emniyet ventili değişimi (servis işi) · kireç temizliği adımı · kaç dakikada ısındığı (iki kılavuz da dakika vermiyor) · fiyat (#46).
# Alıntı denetimi: termosifon-nasil-calisir.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Termosifonun kullanma kılavuzu"]
steps:
  - "Sıcak su musluğunu aç; su geliyorsa termosifon doludur, elektriği ancak o zaman ver."
  - "Elektriğin geldiğini gösteren ışığı ya da ekranı kontrol et."
  - "Sıcaklığı ayarla: Vestel'de ok düğmeleriyle, Arçelik'te termostat düğmesini çevirerek."
  - "Isıtıcı ışığını izle; ışık yanıyorsa rezistans suyu ısıtıyordur."
  - "Işık sönünce su ayarlanan sıcaklığa gelmiştir; sıcak su musluğunu dikkatle aç."
  - "Emniyet ventilinin drenaj hortumundan damlayan suyu gör; damlama kılavuza göre normaldir."
  - "Rezistans ve anot bakımını iki yılda bir yetkili servise yaptır."
faq:
  - q: "Termosifon nasıl çalışır?"
    a: "Termosifon, kazandaki suyu elektrikli rezistansla ısıtan depolu bir su ısıtıcısıdır. Vestel TRV-50/65/80 E kılavuzuna göre su ayarlanan sıcaklığa ulaşınca rezistans devreden çıkar; sıcaklık ayarın 4 derece altına düşünce rezistans yeniden devreye girer. Arçelik T 7350 B'de ısıtıcı ışığı suyun ısındığı sürece yanar."
  - q: "Termosifonun suyu kaç dereceye ayarlanır?"
    a: "Arçelik T 7350 B kılavuzu termostat düğmesinin 10 ile 75 derece arasında ayarlandığını yazar; ECO konumunda cihaz 47-53 derece aralığında çalışır. Vestel TRV serisinin teknik tablosunda su sıcaklık ayar aralığı 25-75 derecedir ve ECO işlevi 55 derecede devreye girer."
  - q: "Termosifon donma korumasını nasıl sağlar?"
    a: "Vestel kılavuzuna göre su sıcaklığı 5 dereceden aşağı düşünce rezistans devreye girer ve suyu 16 dereceye kadar ısıtır; bunun için elektrik beslemesi kesilmemeli. Arçelik'te su 6 derecenin altına inince koruma devreye girer ve suyu 10 dereceye çıkarır; ürün sigortası kapalıysa koruma çalışmaz."
  - q: "Emniyet ventilinden su damlaması normal mi?"
    a: "Vestel kılavuzu termosifon çalışırken basıncın artacağını ve emniyet ventilinden su damlamasının normal olduğunu yazar. Arçelik de ventilin tahliye borusundan su damlayabileceğini, bunun arıza olmayıp güvenlik standardı gereği olduğunu belirtir. Damlama durmuyorsa servise haber ver."
images:
  coverAlt: "Beyaz elektrikli termosifon ve önündeki ayar düğmesinin sade çizimi"
  steps:
    - "Termosifon ve yanında vanaya uzanan beyaz eldivenli sade siluet el çizimi"
    - "Termosifonun elektrik ışığını gösteren beyaz eldivenli sade siluet el çizimi"
    - "Termosifonun ayar düğmesine uzanan beyaz eldivenli sade siluet el çizimi"
    - "Termosifonun ısıtıcı ışığına bakan beyaz eldivenli sade siluet el çizimi"
    - "Sıcak su musluğunu dikkatle açan beyaz eldivenli sade siluet el çizimi"
    - "Emniyet ventilinin drenaj hortumunu gösteren beyaz eldivenli sade siluet el çizimi"
    - "Telefonla yetkili servisi arayan beyaz eldivenli sade siluet el çizimi"
---

Termosifon, kazandaki suyu elektrikli rezistansla ısıtan depolu bir su ısıtıcısıdır. Vestel TRV-50/65/80 E kılavuzuna göre su ayarlanan sıcaklığa ulaşınca rezistans devreden çıkar, sıcaklık ayarın 4 derece altına düşünce yeniden devreye girer. Arçelik T 7350 B kılavuzu aynı düzeni ısıtıcı ışığıyla anlatıyor: ışık suyun ısındığı sürece yanar, sıcaklık 10 ile 75 °C arasında ayarlanır.

Bu yazıda **Vestel TRV-50/65/80 E** ve **Arçelik T 7350 B** kılavuzlarını yan yana okuyoruz. Düğme adları ve gösterge simgeleri modele göre değişir; kendi tip etiketine ve kılavuzuna bak. Kurulum, elektrik bağlantısı, rezistans, anot ve limit termostat servis işidir; bu yazıda anlatılmıyor.

> ⚠️ **Önce su, sonra elektrik.** Vestel ve Arçelik kılavuzlarının ikisi de termosifonu tamamen su dolu olduğundan emin olmadan çalıştırmamanı istiyor. Sıcak su musluğunu açtığında su geliyorsa cihaz doludur.

## Termosifonun içinde hangi parçalar var?

Arçelik'in parça listesinde iç kazan, rezistans, mekanik termostat, anot, emniyet ventili ve monoblok poliüretan yalıtım sayılıyor. Vestel iç kazanın emaye kaplı olduğunu, rezistansı aşınmaya karşı magnezyum çubukla koruduğunu ve kazanın üretimde 12 bar basınçla test edildiğini yazıyor.

| Parça | Kılavuza göre görevi |
|---|---|
| Rezistans | Kazandaki suyu ısıtır; ısıttığı sürece ısıtıcı ışığı yanar |
| Termostat | Hedef sıcaklığı belirler; su o sıcaklığa ulaşınca ısıtıcı ışığı söner |
| Limit termostat (Vestel) | Su aşırı ısınırsa ya da ayar termostatı bozulursa rezistansı devreden çıkarır |
| Anot, magnezyum çubuk | Rezistansı aşınmaya karşı korur |
| Emniyet ventili | Soğuk su girişindedir; kazan basıncı yükselince su akıtarak basıncı dengeler |
| Poliüretan yalıtım | Vestel'e göre kazandaki suyun çabuk ısınmasını, geç soğumasını sağlar |

## Termosifon suyu nasıl ısıtır ve sıcak tutar?

Vestel'de sıcaklığı ayarladıktan sonra rezistans devreye girer ve ekrandaki rezistans işareti yanar. Su istenen değere ulaşınca rezistans devreden çıkar, rezistans işareti söner ve duş işaretli lamba yanar; sıcak su kullanıma hazırdır. Arçelik'te termostat uyarı ışığı suyun ısındığı sürece yanar ve ayarlanan sıcaklığa ulaşınca söner.

İki kılavuz da suyun uzun süre düşük sıcaklıkta kalmamasını istiyor. Vestel'in akıllı temizleme sistemi suyu en az haftada bir 65 °C'ye çıkarıyor ve sıcaklığı 1 saat o seviyede tutuyor. Arçelik suyu haftada bir en az bir saat 60 °C'nin üstünde ısıtmanı istiyor. ECO ayarı iki kılavuzda da önerilen çalışma noktası: Vestel'de 55 °C, Arçelik'te 47-53 °C. Arçelik bu aralığın kireçlenmeyi azalttığını yazıyor.

## Termosifonun emniyetleri nasıl devreye girer?

Vestel susuz çalıştırma emniyetini ekranda E3 koduyla, düşük voltaj korumasını E2 koduyla bildiriyor; voltaj normale dönünce E2 kendiliğinden kalkıyor. Donma emniyeti iki kılavuzda farklı eşikle çalışıyor: Vestel'de su 5 °C'nin altına inince rezistans suyu 16 °C'ye kadar ısıtıyor, Arçelik'te 6 °C'nin altında koruma devreye giriyor ve suyu 10 °C'ye çıkarıyor. Vestel'de bunun için elektrik beslemesinin kesilmemesi gerekiyor; Arçelik ürün sigortası kapalıysa donma korumasının çalışmadığını yazıyor.

## Adım adım: termosifon çalışırken ne görürsün?

**1. Sıcak su musluğunu aç.** Su geliyorsa kazan doludur. Elektriği ancak o zaman ver. Su gelmiyorsa elektrik verme.

**2. Elektriğin geldiğini gör.** Arçelik'te güç ışığı elektrik geldiğinde sürekli yanar. Vestel'de şalteri açıp panelden açma/kapama düğmesine basarsın.

**3. Sıcaklığı ayarla.** Vestel'de ekranın sağındaki yukarı ve aşağı oklarla, Arçelik'te termostat düğmesini saat yönünde çevirerek ayarlarsın. Her iki kılavuz da ECO ayarını öneriyor.

**4. Isıtıcı ışığını izle.** Arçelik'te ısıtıcı simgesinin ışığı, Vestel'de sol alttaki rezistans işareti rezistansın çalıştığını gösterir. Işık yandığı sürece su ısınıyordur.

**5. Işık sönünce sıcak suyu kullan.** Işık sönmüşse su ayarladığın sıcaklığa gelmiştir. Vestel'de duş işaretli lamba yanar. Musluğu dikkatle aç; Vestel, musluktan akan 50 °C üzerindeki suyun ciddi yanıklara yol açabileceğini uyarıyor.

**6. Emniyet ventilinin damlamasına bak.** Soğuk su girişindeki ventilin boşaltma ucundan su damlayabilir; Vestel bunun normal olduğunu, ucun atmosfere açık kalması ya da hortumla gidere bağlanması gerektiğini yazıyor. Vestel ayrıca ayda bir ventil mandalını dik konuma getirip suyun aktığını görmeni öneriyor; kılavuza göre bakım işlemlerinden önce elektrik bağlantısı kesilir. Ventilden boşaltma yaptıysan sıcak su musluğundan su aktığını görmeden sistemi çalıştırma.

**7. Rezistans ve anot bakımını servise bırak.** İki kılavuz da 2 yılda bir rezistansın temizlenmesini ve anodun (Vestel'de magnezyum çubuğun) değiştirilmesini istiyor. Vestel bu işlerin yetkili kişilerce yapılmasını şart koşuyor. Kireçli bölgelerde anot ve ısıtıcı her yıl kontrol edilmeli.

## Sorun varsa hangi yazıya bakmalı?

Şalteri açtığın hâlde ışık yanmıyorsa ya da su ısınmıyorsa [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/) yazısına bak. Açma, kapama ve ayar sırası için [termosifon nasıl kullanılır](/blog/termosifon-nasil-kullanilir/), ventil damlaması için [emniyet ventili su damlatıyor](/blog/termosifon-emniyet-ventili-su-damlatiyor/) yazılarını kullan.

⛔ **Kendin-çöz sınırı burada biter.** Sıcaklığı ayarlamak, ışıkları okumak ve musluktan akan suyu izlemek sende; kurulum, elektrik bağlantısı, kablo, rezistans, anot, limit termostat ve emniyet ventili değişimi yetkili servisin işi.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
