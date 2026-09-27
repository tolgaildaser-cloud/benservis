---
title: "Vestel buzdolabı E11 hatası"
description: "Vestel buzdolabı E11 hatası: Vestel'e göre soğutucu bölme gereğinden soğuk, gıdalar donmaya başlar. Hızlı soğutma ve ayar kontrolü adım adım."
slug: "vestel-buzdolabi-e11-hatasi"
date: "2026-09-27"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext (düz ve -layout, sayfa sayfa) ile okundu.
# Sayfa numaraları PDF sayfasıdır (pdftotext -f/-l), basılı sayfa numarası değil.
# Web araması YALNIZ belgelerin YERİNİ bulmak için kullanıldı (allowed_domains: vestel alan adları); hiçbir cümle arama sonucundan alınmadı.
#  R1) NF52001 / NF52001 S           https://statik.vestel.com.tr/webfiles/20263682_k.pdf  48 s.  md5 686a18210032057be328243bd73f033b  (sayfa atıfları bu belgeye göre)
#  R2) NFK52002 E / ES / EX WIFI     https://statik.vestel.com.tr/webfiles/20263704_k.pdf  48 s.  md5 70b85e8c382ca01b421f743d8117c15a
#  R3) NFK64012 E GI WIFI / EX GI    https://statik.vestel.com.tr/webfiles/20264529_k.pdf  52 s.  md5 3315ec7d9a3a928facd0f2d7df92092a
# E11 satırı — İKİ METİN VAR:
#  R1 s.37 ve R3 s.40 (birebir): Anlamı "Buzdolabınızın sıcaklık değeri gereğinden fazla soğuk" · Oluşma: "Buzdolabınız normal çalışma
#   aralığından daha düşük bir değerde soğutma yapmış ise bu hata görünür. Bu hata görüldüğünde buzdolabınızdaki yiyecekler donmaya başlar."
#   Ne yapmalı: "1. Buzdolabınız süper soğutma modunda çalışıp çalışmadığını kontrol ediniz. Süper soğutma modunda çalışıyorsa moddan
#   çıkartıp daha yüksek bir sıcaklıkta çalışmasını devam ettirin. 2. Buzdolabınızın sıcaklık değerini arttırın. Eğer hata hala devam
#   ediyorsa, en kısa zamanda Vestel iletişim merkezsini arayıp teknik destek talep ediniz."
#  R2 s.38: Anlamı "Soğutucu bölme çok soğuk." · Oluşma: "Buzdolabınızın soğutucu bölmesindeki gıdalarınız aşırı soğuması nedeniyle donmaya başlar."
#   Ne yapmalı: "1. Buzdolabınız hızlı soğutma modunda mı çalışıyor? Eğer böyleyse, sıcaklık ayarını normal çalışma konumuna getiriniz.
#   2. Buzdolabınızın soğutucu bölmesinin ayarlanmış sıcaklık değeri fazla soğuk bir konumdaysa, normal kullanım derecesine getiriniz.
#   Uyarı devam ediyorsa ... teknik destek talep ediniz."
# Normal ayar +4 °C ve 0-8 °C aralığı: R1 s.28 · +4/+6 °C yeterli: R1 s.27 · soğutucu kademeleri +8…+2 °C: R1 s.20 ·
#   hızlı soğutma modunu kapatma ve 8 saat otomatik iptal: R2 s.20, R3 s.21 · -5 °C altındaki ortamda soğutucuya gıda konmaması: R1 s.21 ·
#   arka kısma nemli yiyecek koyma → donabilir: R1 s.28, R2 s.30, R3 s.31.
# YAZILMAYANLAR: "E11 = termostat / sensör / damper arızası" (belgede yok) · söküm (#31) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-buzdolabi-e11-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Buzdolabının hızlı (süper) soğutma modunda çalışıp çalışmadığını kontrol et."
  - "Hızlı soğutma açıksa soğutucu sıcaklık ayar butonuna basarak modu kapat."
  - "Soğutucu bölmenin ayarlı sıcaklığına bak; fazla soğuk bir değerdeyse normal kullanım derecesine (+4 °C) getir."
  - "Nemli yiyecekleri buzdolabının arka kısmından al ve kapalı kaplara koy."
  - "Buzdolabı çok soğuk bir ortamdaysa (-5 °C altı) soğutucu bölmeye gıda koyma."
  - "E11 sürerse Vestel iletişim merkezini arayıp teknik destek iste."
faq:
  - q: "Vestel buzdolabı E11 hatası ne demek?"
    a: "Vestel'in no-frost buzdolabı kılavuzlarındaki kontrol uyarıları tablosunda E11, soğutucu bölmenin gereğinden fazla soğuk olduğunu gösterir. Vestel'e göre buzdolabı normal çalışma aralığından daha düşük bir değerde soğutma yaptığında bu uyarı görünür ve soğutucudaki yiyecekler donmaya başlar."
  - q: "E11'de ilk neye bakmalıyım?"
    a: "Vestel'in ilk talimatı buzdolabının hızlı (bazı kılavuzlarda süper) soğutma modunda çalışıp çalışmadığını kontrol etmek. Çalışıyorsa moddan çıkar ve daha yüksek bir sıcaklıkta çalışmaya devam ettir."
  - q: "Soğutucu kaç dereceye ayarlanmalı?"
    a: "Vestel kılavuzlarına göre normal çalışma koşulları için soğutucu ayarını +4 °C'ye getirmek yeterlidir. Soğutucu bölmenin çalışma sıcaklığı 0 ile 8 °C arasında olmalı; 0 °C'nin altında yiyecekler buzlanıp çürür, 8 °C'nin üzerinde sıcaktan bozulur."
  - q: "Kod yok ama arka duvara yakın yiyecekler donuyor, neden?"
    a: "Vestel, buzdolabının arka kısmına nemli yiyecek konmamasını istiyor; soğuk havayla temas edince donabilirler. Bunu önlemek için yiyecekleri kapalı bir kapta sakla."
images:
  coverAlt: "No-frost buzdolabının kapağındaki dijital panelde soğutucu sıcaklık göstergesi ve ayar tuşları"
---

Buzdolabının göstergesinde **E11** var; sebzeler ya da içecekler donmaya başlamış olabilir. Vestel'in no-frost buzdolabı kullanım kılavuzlarındaki kontrol uyarıları tablosunda bu kodun karşılığı: soğutucu bölme **gereğinden fazla soğuk.** Vestel'e göre buzdolabı normal çalışma aralığından daha düşük bir değerde soğutma yaptığında bu uyarı görünür ve **soğutucudaki yiyecekler donmaya başlar.** Tablonun verdiği iki adım da ayarla ilgili; bu yazıda onları sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E11 = Vestel'e göre soğutucu gereğinden soğuk. Sıra şu: hızlı soğutma açık mı → açıksa kapat → soğutucu ayarı fazla soğuksa +4 °C'ye getir. E11 sürüyorsa → Vestel iletişim merkezi.

## Adım adım: evde denenecekler

**1. Hızlı soğutma açık mı?** Vestel'in E11 talimatının ilk maddesi: buzdolabının **hızlı soğutma** (bazı kılavuzlarda "süper soğutma") **modunda çalışıp çalışmadığını kontrol et.** Yakın zamanda modu açtıysan ya da göstergede hızlı soğutma simgesi görüyorsan buradan başla.

**2. Açıksa kapat.** Talimatın devamı: mod açıksa **moddan çıkar** ve buzdolabını daha yüksek bir sıcaklıkta çalıştır. Hızlı soğutma modu olan Vestel kılavuzlarına göre mod, **soğutucu sıcaklık ayar butonuna tekrar basılarak** devreden çıkarılır. Açık unutulsa bile kılavuza göre ortam sıcaklığına bağlı olarak 8 saat sonra ya da soğutucu yeterli sıcaklığa ulaşınca kendiliğinden kapanır.

**3. Ayara bak.** İkinci madde: soğutucu bölmenin ayarlı sıcaklığı **fazla soğuk bir konumdaysa normal kullanım derecesine** getir. Vestel'e göre normal çalışma koşulları için soğutucu ayarını **+4 °C**'ye getirmek yeterlidir.

**4. Arka duvara bak.** Kod bağımsız ama işe yarar bir kontrol: Vestel, buzdolabının **arka kısmına nemli yiyecek konmamasını** istiyor, çünkü soğuk havayla temas edince donabilirler. Böyle yiyecekleri öne al ve kapalı kaplarda sakla.

**5. Ortam çok soğuk mu?** Buzdolabı ısıtılmayan bir yerdeyse: Vestel, **-5 °C'nin altındaki ortam sıcaklıklarında soğutucu bölüme gıda konmasını önermiyor**, çünkü bu bölüme konan gıdalar ortam sıcaklığına yakın olur ve donar.

**6. Sürüyorsa ara.** Tablonun son cümlesi: hata hâlâ devam ediyorsa **en kısa zamanda Vestel iletişim merkezini arayıp teknik destek talep et.**

## Doğru aralık: 0-8 °C

Vestel kılavuzları soğutucu bölmenin çalışma sıcaklığının **0 ile 8 °C** arasında olması gerektiğini yazıyor: 0 °C'nin altında yiyecekler buzlanıp çürür, 8 °C'nin üzerinde sıcaktan bozulur. Hızlı soğutma modu olmayan NF52001 kılavuzunda soğutucu ayarı +8, +6, +5, +4 ve +2 °C kademelerinden oluşuyor; kılavuzun ayar tablosu +4 °C'yi normal kullanım için, 2 °C'yi ise yalnız soğutucunun yeterince soğuk olmadığı düşünüldüğünde veriyor. Ayarı en soğuk kademeye aldıysan ve E11 geldiyse +4 °C'ye dön.

Ayar değerlerinin ayrıntısı için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına bakabilirsin.

## Aynı tablonun öteki ucu: E10

E11'in tersi **E10**'dur: Vestel'e göre soğutucu bölme yeterince soğuk değildir ve çözüm soğutucuyu geçici olarak daha soğuğa ya da hızlı soğutmaya almaktır. Ayrıntısı [Vestel buzdolabı E10 hatası](/blog/vestel-buzdolabi-e10-hatasi/) yazısında; tüm kod tablosu [Vestel buzdolabı E09 hatası](/blog/vestel-buzdolabi-e09-hatasi/) yazısında.

## Sınır nerede biter

Hızlı soğutma kapalı, soğutucu +4 °C'de ve E11 hâlâ duruyorsa Vestel'in tablosu kullanıcıya başka adım vermiyor: **Vestel iletişim merkezini arayıp teknik destek talep et.**

⛔ **Kendin-çöz sınırı burada biter.** Ayar ve mod kullanıcıya; soğutma sisteminin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Hızlı (süper) soğutma modu açık mıydı, kapatıldı mı?
2. Soğutucu ayarı şu an kaç derecede?
3. E11 çıkmadan önce ayar ya da mod değiştirildi mi?
4. Buzdolabının bulunduğu ortam çok soğuk mu?
5. Ayar +4 °C'ye alındıktan sonra E11 hâlâ duruyor mu?

Bu beşine cevabın varsa servise "buzdolabı donduruyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki kodu ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
