---
title: "Viessmann kombi E3 hatası"
description: "Viessmann kombide E3 çoğu zaman arıza değil: ViCare'de Evde tatil ya da Tatil programı açık. Nasıl kontrol edilir, eski serilerde neden farklıdır."
slug: "viessmann-kombi-e3-hatasi"
date: "2026-09-27"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27 · curl -sL -A "Mozilla/5.0" ile BU KOŞUDA indirildi, hepsi HTTP 200; pdftotext -layout ile sayfa sayfa okundu.
# Belgelerin yeri Viessmann'ın kendi ViBooks veritabanından (vibooks.viessmann-climatesolutions.com → api.viessmann-climatesolutions.com
# arama uç noktası) bulundu. Web araması yalnız yer bulmak için; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
# A) Kullanma Kılavuzu · Vitodens 100-W/111-W/111-F · 6135864 TR 03/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf
#    44 s. · 2.171.321 B · md5 5513c22c39f416336369c7d3cbe6d0fe
#    "„Evde tatil" fonksiyonu açık olduğu müddetçe standart göstergede „E 3" gösterilir." (s.21)
#    "„Tatil programı" fonksiyonu açık olduğu müddetçe standart göstergede „E 3" gösterilir." (s.22)
#    Ne yapmalı tablosu: Ortam çok soğuk → Tatil programı / Ortam çok sıcak → Evde tatil; giderilmesi: ViCare'den kontrol et,
#    değiştir ya da kapat (s.33)
# B) Kullanma Kılavuzu · Vitodens Connect / Vitodens Trend · 6173992 TR 05/2026
#    https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6173992VBA00005_1.pdf
#    36 s. · 1.787.756 B · md5 5c0d0900f6f66d9eb9dc09855ae7cb04
#    "„Evde tatil" fonksiyonu yalnızca ViCare termostat (aksesuar) ile birlikte kullanılabilir." + aynı cümle Tatil programı için;
#    "Fonksiyon açıkken ekranda „E3" gösterilir." (s.17) · Ne yapmalı tablosu (s.27)
# C) Viessmann Türkiye · Vitodens 200-W/300-W hata kodları sayfası (Vitotronic kontrol üniteli eski seriler)
#    https://www.viessmann.com.tr/tr/bilgi/bakim-ve-onarim/vitodens-200-w-300-w-hata-kodlari.html
#    HTTP 200 · 132.316 B · md5 fe253fad0bb4e49ce18f1a297ef42cab (dinamik sayfa; md5 indirme anına ait, 20 Eyl md5'inden farklı)
#    E3 satırı: "Brülör arıza durumunda | Kalibrasyon sırasında ısı transferi çok düşük. Sıcaklık sınırlayıcı kapandı"
# Bilerek YAZILMAYANLAR: E3'ün Vitodens 100-W/Connect/Trend'de bir arıza anlamı (belgede yok) · "reset atınca geçer" (belgede yok)
#  · eski serideki E3 için kullanıcı adımı (Viessmann sayfası önlemleri yetkili yükleniciye bırakıyor) · Vitodens 200-W 3,5 inç
#  ekranlı yeni kılavuzda (6172120) E3 geçmiyor → o seri için anlam yazılmadı.
# Alıntı denetim tablosu: viessmann-kombi-e3-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["ViCare uygulaması yüklü telefon"]
steps:
  - "Kombinin modelini kılavuzundan ya da tip etiketinden doğrula: Vitodens 100-W, 111-W, 111-F, Connect ya da Trend mi?"
  - "E3'ün kombinin standart göstergesinde tek başına durduğunu, yanında yanıp sönen bir uyarı üçgeni olmadığını kontrol et."
  - "Telefonunda ViCare uygulamasını aç."
  - "Evde tatil fonksiyonunun açık olup olmadığına bak."
  - "Tatil programının açık olup olmadığına ve başlangıç ile bitiş tarihlerine bak."
  - "Açık olan fonksiyonun ayarını değiştir ya da fonksiyonu kapat."
  - "Kombinin ekranına dön; fonksiyonlar kapalıyken E3 sürüyorsa kodu ve modeli not edip yetkili servise danış."
faq:
  - q: "Viessmann kombide E3 ne demek?"
    a: "Vitodens 100-W, 111-W ve 111-F ile Vitodens Connect ve Trend kullanma kılavuzlarına göre E3, ViCare uygulaması üzerinden Evde tatil ya da Tatil programı fonksiyonu açıkken standart göstergede görünür. Fonksiyon açık olduğu sürece ekranda kalır."
  - q: "E3 varken ev neden soğuk?"
    a: "Viessmann'ın kılavuzundaki arıza giderme tablosu bu durumu ayrıca sayıyor: Tatil programı açıkken odalar ayarlanan düşümlü oda sıcaklığına ısıtılır, bekleme modundaki ısıtma devrelerinde oda ısıtması yapılmaz ve sıcak su hazırlanmaz. Tablonun önerisi ViCare'den tatil programının açık olup olmadığını kontrol etmek, gerekirse ayarı değiştirmek ya da kapatmaktır."
  - q: "E3 varken ev neden fazla sıcak?"
    a: "Aynı tabloda ortamın çok sıcak olması Evde tatil fonksiyonuyla ilişkilendiriliyor. Kılavuza göre bu fonksiyon, zaman aşamaları arasındaki sürelerde oda sıcaklığını günün ilk zaman aşamasının ayar noktasına yükseltir. Önerilen işlem ViCare'den fonksiyonu kontrol etmek, gerekirse değiştirmek ya da kapatmaktır."
  - q: "Vitodens Connect ya da Trend kombimde ViCare termostatı yok, yine de E3 görebilir miyim?"
    a: "Vitodens Connect ve Trend kullanma kılavuzu, Evde tatil ve Tatil programı fonksiyonlarının yalnızca ViCare termostat (aksesuar) ile birlikte kullanılabileceğini yazıyor. Termostat yokken E3 görüyorsan modeli ve kodu not edip yetkili servise danış."
  - q: "Eski Vitodens 200-W ya da 300-W kombimde E3 de aynı anlama mı geliyor?"
    a: "Hayır. Viessmann Türkiye'nin Vitotronic kontrol üniteli Vitodens 200-W ve 300-W için yayımladığı hata kodu listesinde E3, kalibrasyon sırasında ısı transferinin çok düşük olduğunu ve sıcaklık sınırlayıcının kapandığını gösterir; brülör arıza durumuna geçer. Viessmann bu listedeki önlemleri yetkili yüklenici işi olarak tanımlıyor, yani o seride E3 servis konusudur."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin önünde, elinde akıllı telefon tutan bir kişi; telefon ekranında rakam okunmayan soyut bir takvim ve termometre simgesi"
---

Viessmann kombinin ekranında **E3** görünce ilk akla gelen bir arıza olur. Oysa Vitodens 100-W, 111-W, 111-F ile Vitodens Connect ve Trend kullanma kılavuzlarında bu kodun karşılığı bir arıza değil, bir ayardır: **„Evde tatil" ya da „Tatil programı" fonksiyonu açık olduğu müddetçe standart göstergede „E 3" gösterilir.** Bu iki fonksiyon ViCare uygulaması üzerinden açılıp kapatılıyor; E3'ü kaldırmanın yolu da oradan geçiyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Vitodens 100-W/111-W/111-F, Connect ve Trend'de E3 = ViCare'de Evde tatil ya da Tatil programı açık. ViCare'i aç → iki fonksiyonu kontrol et → gerekirse değiştir ya da kapat. Eski, Vitotronic kontrol üniteli Vitodens 200-W/300-W'de E3'ün anlamı farklıdır ve servis konusudur.

## Önce modelini ayır: E3 iki farklı şey söyleyebilir

Viessmann'ın belgelerinde E3 iki ayrı anlamda geçiyor ve hangisinin seninki olduğunu kombinin modeli belirliyor.

| Model | E3'ün belgedeki karşılığı | Kimin işi |
|---|---|---|
| **Vitodens 100-W / 111-W / 111-F** (siyah/beyaz yeni kontrol panel ekranlı) | Evde tatil ya da Tatil programı fonksiyonu açık | Sen, ViCare'den |
| **Vitodens Connect / Trend** (siyah/beyaz ekranlı) | Evde tatil ya da Tatil programı fonksiyonu açık | Sen, ViCare'den |
| **Vitodens 200-W / 300-W** (Vitotronic kontrol üniteli eski seriler) | Kalibrasyon sırasında ısı transferi çok düşük, sıcaklık sınırlayıcı kapandı; brülör arıza durumunda | Yetkili servis |

Modelini kombinin kullanma kılavuzunun kapağından ya da tip etiketinden okuyabilirsin. Vitotronic'li eski seriler için tüm listeyi [Viessmann kombi arıza kodları](/blog/viessmann-kombi-ariza-kodlari/) yazısında topladık.

## Adım adım: evde denenecekler

**1. Modeli doğrula.** Bu adımlar yalnız Vitodens 100-W, 111-W, 111-F, Connect ve Trend için geçerli. Vitotronic kontrol üniteli bir 200-W ya da 300-W'n varsa aşağıdaki "Ne zaman servis" bölümüne geç.

**2. Ekrana bak.** Kılavuz E3'ü **standart göstergede** gösterilen bir durum olarak tarif ediyor. Arızalar ise ayrı bir yolla gösteriliyor: kılavuza göre ekranda uyarı üçgeni sembolü görünür ya da uyarı üçgeni ve arıza kodu yanıp söner. Ekranında yanıp sönen bir üçgen varsa bu yazı değil, [Viessmann kombi CL hatası](/blog/viessmann-kombi-cl-hatasi/) yazısı seni ilgilendiriyor.

**3. ViCare uygulamasını aç.** Her iki fonksiyon da kılavuza göre ViCare uygulaması üzerinden açılıp kapatılıyor.

**4. Evde tatil'e bak.** Bu fonksiyon, bir ya da birkaç gün evde olacaksan ve zaman programını değiştirmek istemiyorsan kullanılıyor. Kılavuzun saydığı etkileri:

- Zaman aşamaları arasındaki sürelerde oda sıcaklığı, **günün ilk zaman aşamasının ayar noktasına** yükseltilir.
- Sıcak su hazırlanması etkindir.
- Fonksiyon, ayarlanan başlangıç ve bitiş tarihlerine göre başlar ve sona erer.

**5. Tatil programına bak.** Bu fonksiyon uzun süre evde olmadığında enerji tasarrufu için. Kılavuzdaki etkileri:

- Isıtma işletme programındaki devrelerde odalar ayarlanan **düşümlü oda sıcaklığına** ısıtılır.
- Bekleme modundaki devrelerde oda ısıtması yapılmaz; kombi ve boyler için donma koruması etkindir.
- **Sıcak su hazırlanmaz**; sıcak su deposu için donma koruması etkindir.
- Program ilk tatil günü saat 00:00'da başlar, son tatil günü saat 23:59'da sona erer.

**6. Ayarı değiştir ya da kapat.** Kılavuzun arıza giderme tablosundaki öneri iki durum için de aynı: fonksiyonun ViCare üzerinden açık olup olmadığını kontrol et, gerekirse ayarı değiştir ya da kapat.

**7. Ekrana dön.** Kılavuza göre E3 fonksiyon açık olduğu sürece gösteriliyor. İki fonksiyon da kapalıyken E3 hâlâ ekrandaysa kodu ve modeli not edip yetkili servise danış.

## Belirtiye göre: hangi fonksiyon?

Viessmann'ın "Ne yapmalı?" tablosu E3'ü iki ayrı şikâyetin altında sayıyor:

- **Ortam çok soğuk** ve ekranda E3 → tabloya göre sebep **Tatil programı**.
- **Ortam çok sıcak** ve ekranda E3 → tabloya göre sebep **Evde tatil**.

Vitodens Connect ve Trend için bir ek not: bu modellerin kılavuzu, iki fonksiyonun da **yalnızca ViCare termostat (aksesuar) ile birlikte** kullanılabileceğini yazıyor.

## Ne zaman servis

- **Vitotronic kontrol üniteli Vitodens 200-W ya da 300-W'de E3.** Viessmann Türkiye'nin bu seriler için yayımladığı listede E3'ün karşılığı "Kalibrasyon sırasında ısı transferi çok düşük. Sıcaklık sınırlayıcı kapandı" ve sistemin durumu "Brülör arıza durumunda". Viessmann aynı sayfada bu listedeki önlemlerin yalnız yetkili bir yüklenici tarafından uygulanmasını istiyor.
- **İki fonksiyon kapalıyken E3 sürüyorsa.** Kılavuz E3'ü yalnız bu iki fonksiyonla ilişkilendiriyor; başka bir açıklama vermiyor.
- **Ekranda uyarı üçgeni varsa.** Kılavuza göre üçgen sembolü göründüğünde yapılacak iş, gösterilen arıza kodunu yetkili teknik servise bildirmek.

⛔ **Kendin-çöz sınırı burada biter.** Bu yazıdaki her adım uygulamadaki bir ayardır; kombinin kapağını açmayı, gaz ya da elektrik tarafına dokunmayı gerektiren hiçbir iş yok ve olmamalı.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (kılavuz kapağı ya da tip etiketi)?
2. E3 standart göstergede mi, yanında yanıp sönen bir uyarı üçgeni var mı?
3. ViCare'de Evde tatil ve Tatil programı kapalı mı?
4. Ev soğuk mu, fazla sıcak mı?

Kombin koddan bağımsız olarak evi ısıtmıyorsa [kombi yanmıyor](/blog/kombi-yanmiyor/) ve [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazılarına bak. Başka bir markadaysan [kombi arıza kodları](/blog/kombi-ariza-kodlari/) derlemesi var.

Ekrandaki kodu ve kombinin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
