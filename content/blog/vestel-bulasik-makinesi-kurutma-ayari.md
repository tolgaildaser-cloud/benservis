---
title: "Vestel bulaşık makinesi kurutma ayarı nasıl yapılır"
description: "Vestel bulaşık makinesinde kurutmayı artıran ayarlar: kurutmalı program, Ekstra Kurutma, Enerji Tasarrufu ile otomatik kapak açma ve parlatıcı seviyesi."
slug: "vestel-bulasik-makinesi-kurutma-ayari"
date: "2026-10-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-29b PAZ alt ajanı (YK #189 günlük yazı, tür: hata/belirti; koşu 27 Eki 2026 Sal 16:31 +03). origin/main b930c112.
# GSC (#164, www-9, son 7 gün): "vestel bulaşık makinesi kurutma ayarı" 0 tık · 13 gösterim · ort. poz. 8,31.
#   Aynı dosyada Vestel bulaşık için F2, FF, F5 satırları var; üçünün de tekil sayfası canlıda, F5 ayrıca FIRSAT-30 listesinde → seçilmedi.
#   Hub'daki diğer kodlar (F1 F3 F6 F7 F8 F9 FE HI LO) tablo satırı → tekil sayfa açılmaz. "çalışmıyor" canlıda. Geriye kalan tek Vestel bulaşık sorgusu bu.
# OT (bu koşu 16:34, hl=tr gl=tr): "vestel bulaşık makinesi kurutma" → 1. …kurutma ayarı · 8. …kurutma ayarı nasıl yapılır.
# Bizde olmama: slug yok; başlıkta "kurutma ayarı" geçen Vestel sayfası yok. En yakın sayfa vestel-bulasik-makinesi-kurutmuyor (belirti sayfası:
#   sorun giderme tablosu + parlatıcı). Bu yazı ayar sayfası; o sayfada OLMAYAN Enerji Tasarrufu/otomatik kapak açma ayarını ve
#   30 dk / 1 dk kurallarını taşıyor, kurutmuyor sayfasına bağlanıyor.
# Belge (#88; üretici alan adı + kapak "VESTEL" ibaresi, YK #88 SEG 24 Eki) bu koşuda curl ile indirildi, ikisi HTTP 200:
#  B) BM 10502 X GI WIFI  https://statik.vestel.com.tr/webfiles/20263192_k.pdf  56 s.  md5 bdbd31789107cc96048ad674595fd6ff
#  A) BM 8402 GI Pro WIFI https://statik.vestel.com.tr/webfiles/20264050_k.pdf  61 s.  md5 dd6a67c9fefe3c49867c92fa7e66e410
# BİLEREK YAZILMAYANLAR: hangi programın kurutma adımı olduğu (program tablosunda sütun yok; yalnız "kısa programlar kurutmaz") ·
#   BM 4212 gibi eski tuşlu modellerin tuş sırası (belge yok) · turbo kurutma ünitesi/fan/rezistans arızası · fiyat (#46).
# Alıntı denetim tablosu: vestel-bulasik-makinesi-kurutma-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Makinenin kullanım kılavuzu"]
steps:
  - "Kılavuzundaki program tablosuna bakarak kurutma adımı olan bir program seç; kısa programlar kurutmaz."
  - "Modelinde Ekstra Kurutma tuşu varsa programı seçtikten sonra bu tuşa bas ve göstergenin yandığını kontrol et."
  - "Modelinde varsa Enerji Tasarrufu opsiyonunu seç; program sonunda kapak kendiliğinden açılır."
  - "Kapak otomatik açıldığında bir dakika boyunca zorlayarak kapatma ve kapağı 30 dakika açık bırak."
  - "Otomatik kapak açma yoksa program bitip Bitiş ışığı yandıktan sonra kapağı kendin arala."
  - "Parlatıcı bölmesini MAX seviyesine kadar doldur, taşan parlatıcıyı bezle sil."
  - "Parlatıcı seviyesini kılavuzundaki yöntemle ayarla; bulaşıklar kurumuyorsa bir kademe yükselt."
faq:
  - q: "Vestel bulaşık makinesinde kurutma ayarı nerede?"
    a: "Vestel kılavuzlarında ayrı bir kurutma düğmesi yok; kurutmayı birkaç ayar belirliyor. Kurutma adımı olan bir program seçmek, modelinde varsa Ekstra Kurutma ve Enerji Tasarrufu opsiyonları ve parlatıcı seviyesi. BM 10502 X GI WIFI modelinde Ekstra Kurutma ve Enerji Tasarrufu için kontrol panelinde ayrı tuşlar var; BM 8402 GI Pro WIFI modelinde opsiyonlar Opsiyon tuşuyla seçilip Onay tuşuyla onaylanıyor."
  - q: "Ekstra Kurutma ne işe yarar?"
    a: "Vestel'in BM 10502 kılavuzuna göre Ekstra Kurutma, bulaşıkların daha kuru olması için programa ekstra kurutma adımları ekler. Bu opsiyon son durulamada suyun sıcaklığını artırır ve kurutma aşamasının süresini uzatır."
  - q: "Program bitince kapak kendiliğinden açıldı, bozuk mu?"
    a: "Hayır. Vestel'e göre Enerji Tasarrufu opsiyonu seçildiyse kapak program sonunda otomatik açılır; bu kurutmanın etkinliğini artırmak için yapılır. Kılavuz, mekanizmaya zarar vermemek için kapağı bir dakika boyunca zorla kapatmamanı ve etkili kurutma için kapağın 30 dakika açık kalmasını istiyor. Bu kural yalnız otomatik kapı açma mekanizmalı modeller için."
  - q: "Kurutma ışığı yanıyor ama makine ses çıkarmıyor, normal mi?"
    a: "Evet. Vestel kılavuzlarına göre kurutma sembolü yanarken makine seçilen programa göre 15 ile 100 dakika arası sessiz kalır. Bu süre kurutma aşamasıdır; programı erken kesme."
  - q: "Hızlı programda bulaşıklar neden ıslak?"
    a: "Vestel'in program tablosu notuna göre kısa programlar kurutma adımı içermez. Kuru bulaşık istiyorsan program tablosundan kurutma adımı olan bir program seçmelisin."
images:
  coverAlt: "Programı bitmiş, kapağı kendiliğinden aralanmış ankastre bir bulaşık makinesi ve üst sepette ağzı aşağı bakan bardaklar"
  steps:
    - "Bulaşık makinesinin yanında açık duran kullanım kılavuzu ve program tablosu"
    - "Bulaşık makinesi kontrol panelinde yanan bir opsiyon göstergesi"
    - "Kontrol panelinde opsiyon ve onay tuşlarının bulunduğu bölüm"
    - "Program sonunda kendiliğinden aralanmış bulaşık makinesi kapağı"
    - "Kapağı hafifçe aralık bırakılmış bulaşık makinesi ve içindeki temiz tabaklar"
    - "Kapak iç yüzünde açık duran parlatıcı bölmesi"
    - "Kontrol paneli ekranında ayar menüsü görünümü"
---

Vestel bulaşık makinesinde "kurutma" diye tek bir düğme aramak çoğu zaman sonuçsuz kalıyor. Vestel'in kullanım kılavuzlarına göre bulaşıkların ne kadar kuru çıkacağını birkaç ayar birlikte belirliyor: **kurutma adımı olan bir program**, modelinde varsa **Ekstra Kurutma** ve **Enerji Tasarrufu** opsiyonları ve **parlatıcı seviyesi**. Bu yazı Vestel'in kendi sitesinde yayımlanan iki kılavuza dayanıyor: **BM 10502 X GI WIFI** ve **BM 8402 GI Pro WIFI**. Senin modelinde tuş adları ve yerleri farklı olabilir; tuş sırası için kendi kılavuzuna bak.

Bulaşıkların ıslak çıkıyorsa ve sebebini arıyorsan önce [Vestel bulaşık makinesi kurutmuyor](/blog/vestel-bulasik-makinesi-kurutmuyor/) yazısına göz at. Burada ayarların kendisini anlatıyoruz.

> ⚡ **Kısa özet:** Kurutmalı program seç (kısa programlar kurutmaz) → varsa Ekstra Kurutma → varsa Enerji Tasarrufu ile kapak program sonunda kendiliğinden açılır, 30 dakika açık kalsın → yoksa kapağı kendin arala → parlatıcıyı doldur ve seviyesini ayarla.

## Vestel'de kurutmayı etkileyen ayarlar

| Ayar | Kılavuza göre ne yapar | Hangi modelde |
|---|---|---|
| **Kurutmalı program** | Kısa programlar kurutma adımı içermez | BM 10502 ve BM 8402 |
| **Ekstra Kurutma** | Programa ekstra kurutma adımları ekler; son durulamada suyu daha sıcak yapar, kurutmayı uzatır | BM 10502 (BM 8402 kılavuzunda yok) |
| **Enerji Tasarrufu** | Program sonunda kapağı açar, kurutmanın etkinliğini artırır; daha düşük sıcaklıkta çalışır | BM 10502 ve BM 8402 (otomatik kapı açma mekanizmalı modeller) |
| **Parlatıcı seviyesi** | Parlatıcı bulaşıkların çizgi ve leke kalmadan kurumasına yardım eder | BM 10502 ve BM 8402 |

Kılavuzdaki parça listesinde ayrıca **turbo kurutma ünitesi** var; Vestel'e göre bu sistem bulaşıkların daha etkin kurumasını sağlıyor. Bu bir ayar değil, makinenin içindeki bir parça.

## Adım adım: kurutmayı ayarlamak

**1. Kurutmalı programı seç.** Vestel'in program tablosu notunda açıkça yazıyor: **kısa programlar kurutma adımı içermez.** Hızlı programla yıkadıysan bulaşıkların ıslak çıkması normal. Kılavuzundaki program tablosuna bak ve kurutma adımı olan bir program seç. Hangi programın kuruttuğu modelden modele değişiyor; tahmin etme, kendi tablona bak.

**2. Ekstra Kurutma'yı ekle.** BM 10502 kılavuzuna göre **Ekstra Kurutma** opsiyonu, bulaşıkların daha kuru olması için programa ekstra kurutma adımları ekliyor. Programı seç, Ekstra Kurutma tuşuna bas; **Ekstra Kurutma göstergesi yanar.** Vestel'e göre bu opsiyon son durulama aşamasında suyun sıcaklığını artırır ve kurutma aşamasının süresini uzatır. BM 8402 kılavuzunda bu opsiyon yer almıyor; panelinde bu tuş yoksa 3. adıma geç.

**3. Enerji Tasarrufu opsiyonunu seç.** Adı enerji ama işi kurutmaya da dokunuyor. Vestel'in iki kılavuzu da aynı cümleyi kuruyor: bu opsiyon **kurutma işleminin etkinliğini artırmak amacıyla programın sonunda kapağın açılmasını** sağlıyor ve daha düşük sıcaklıkta çalıştığı için enerji tasarrufu da yapıyor. BM 10502'de panelde **Enerji Tasarrufu tuşu** var. BM 8402'de opsiyonları **Opsiyon tuşuna** arka arkaya basarak seçiyorsun; seçtiğin opsiyon yanıp sönen bir ışıkla görünüyor, **Onay tuşuna** basınca ışık sabit yanıyor.

**4. Kapak açılınca dokunma.** Kılavuzun güvenlik bölümü net: Enerji Tasarrufu seçildiyse kapak program sonunda **otomatik açılır.** Otomatik kapı açma mekanizmasına zarar vermemek için **bir dakika boyunca kapağı zorla kapatma.** Etkili bir kurutma için kapak **30 dakika açık kalmalı.** Vestel bir uyarı daha ekliyor: otomatik kapı açma sinyalini duyduktan sonra **kapının önünde durma.** Bu kurallar yalnız otomatik kapı açma mekanizması olan modeller için.

**5. Otomatik kapak yoksa kendin arala.** Vestel'in iki kılavuzunda da aynı not var: **yıkama programının sonunda kurutma sürecini hızlandırmak için makinenin kapağını aralık bırakabilirsin.** Program tablosu notu da bunu öneriyor. Ama kapağı program bitmeden açma; Vestel bunu ayrıca yazıyor. Program bitince **Bitiş ışığı** yanar. Boşaltırken alt sepetten başla ki üstten su damlamasın.

**6. Parlatıcıyı doldur.** Vestel'e göre parlatıcı bulaşıkların **çizgi ve leke kalmadan kurutulmasına** yardımcı olur ve sıcak durulama aşamasında kendiliğinden salınır. Parlatıcı bölmesinin kapağını aç, **MAX seviyesine kadar** doldur, kapağı kapat. Kılavuz taşırmamanı istiyor; taşan parlatıcı aşırı köpük yapıp yıkama performansını düşürdüğü için taşan kısmı bir bezle sil. Parlatıcı azaldığında paneldeki **parlatıcı eksik göstergesi** yanar.

**7. Parlatıcı seviyesini ayarla.** BM 10502 kılavuzundaki sıra şu: makineyi kapat, açtıktan hemen sonra **Erteleme** tuşuna en az **5 saniye** basılı tut. Ekranda **"rA"** görününce bırak; parlatıcı ayarı su sertliği ayarından sonra gelir ve son seviye ekranda görünür. Seviyeyi **Yarım Yük** tuşuyla **r1–r5** arasında değiştir, kaydetmek için makineyi kapat. Varsayılan seviye **4**. Bulaşıklar gerektiği gibi kurumuyorsa ya da lekeliyse seviyeyi **yükselt**; bulaşıklarda **mavi lekeler** varsa düşür.

## Seviye tablosu ve dikkat edilecekler

| Seviye | Parlatıcı dozu |
|---|---|
| r1 | Parlatıcı kullanılmaz |
| r2 | 1 doz |
| r3 | 2 doz |
| r4 | 3 doz (varsayılan) |
| r5 | 4 doz |

Vestel'e göre parlatıcı dozu **çok düşükse** bulaşıklarda beyaz lekeler kalır, bulaşıklar kurumaz ve iyi yıkanmaz. Doz **çok yüksekse** cam eşya ve tabaklarda mavimsi katmanlar görülebilir. Hepsi bir arada tablet kullanıyorsan kılavuz su sertliği ve parlatıcı ayarını en düşük konuma (1) getirmeyi öneriyor. Tuz ve parlatıcının ayrıntısı [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında.

**Kurutma ışığı yanıyor ama ses yok:** Vestel'e göre kurutma sembolü yanarken makine seçilen programa göre **15 ile 100 dakika** arası sessiz kalır. Bu kurutma aşamasıdır, arıza değil. Paneldeki diğer ışıklar için [Vestel bulaşık makinesi sembolleri](/blog/vestel-bulasik-makinesi-sembolleri-ve-anlamlari/) yazısına bakabilirsin.

## Sınır nerede biter

Kurutmalı program seçtin, Ekstra Kurutma ya da Enerji Tasarrufu açık, kapak program sonunda açılıyor, parlatıcı dolu ve seviyesi yükseltildi ama bulaşıklar hâlâ ıslaksa kullanıcının yapacağı ayar bitmiştir. Vestel'in sorun giderme bölümü bu durumda **İletişim Merkezi** ile irtibata geçmeni istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Program, opsiyon, kapak ve parlatıcı ayarı sende. Turbo kurutma ünitesi, ısıtıcı, otomatik kapı açma mekanizması ve elektronik kart Vestel yetkili servisinin işi. Kapak kendiliğinden açılmıyor ya da açıldıktan sonra kapanmıyorsa mekanizmayı zorlama.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bulaşıklarda beyaz iz kalıyorsa [Vestel bulaşık makinesi beyaz leke bırakıyor](/blog/vestel-bulasik-makinesi-beyaz-leke-birakiyor/) yazısına bak. Bil, gör, çağır.

---

**Kaynak künyesi.** Ayarlar, tuş sırası, 30 dakika ve bir dakika kuralları, parlatıcı seviyeleri ve sessiz kurutma süresi Vestel'in sitesinde yayımlanan BM 10502 X GI WIFI ve BM 8402 GI Pro WIFI bulaşık makinesi kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
