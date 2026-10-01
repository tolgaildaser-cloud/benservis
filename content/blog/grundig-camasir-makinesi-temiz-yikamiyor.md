---
title: "Grundig çamaşır makinesi temiz yıkamıyor"
description: "Grundig çamaşır makinesinde grileşme, çıkmayan leke ya da yağlı iz varsa Grundig kılavuzunun yıkama performansı satırları ve evde yapılacaklar."
slug: "grundig-camasir-makinesi-temiz-yikamiyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Grundig belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf.
#   download.grundig.com https'te bağlantı kurmadı (curl 000); aynı yol http ile 200. www.grundig.com.tr arşivi Akamai 403. Web araması yalnız PDF adresini bulmak için.
#   Okuma pdftotext -layout; sayfa = PDF sayfası. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-grundig-sprint/
#  (A) GWM 91014  http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_Manual_7167420600_tr_TR20210319-141313-819.pdf  40 s.  md5 eafeccdc1e23e0125b86ef9af802d8c2  (sayfa atıfları esas olarak A)
#  (B) GWM 9701 Y http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_202012281339697_User%20Manual%20-%20File%20(Long)tr_TR.pdf  36 s.  md5 a4587b21fd0c0725e0879dec061e1031
#  (C) GWM 9801   http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_201901111413193_User%20Manual%20-%20File%20(Long)tr_TR.pdf  40 s.  md5 9fadc3336071419d3033d52ed435d69c
# Sorun giderme satırları (A s.31-33 · B s.30-32): "Yıkama performansı kötü: Grileşme var." · "...Lekeler çıkmadı veya çamaşılar beyazlaşmadı." · "...Çamaşırlarda yağlı lekeler oluştu."
#   · "Çamaşırlar yıkandıktan sonra sertleşti." · "Çamaşırların rengi soldu." · dipnot (**) "Düzenli kazan temizliği uygulanmamış olabilir."
# Diğer: A s.9 zorlu lekelere ön müdahale, aşırı yükleme · A s.10 deterjan miktarı, el yıkama sabunu yok · A s.11 çamaşır suyu ile deterjanı karıştırma · A s.21 Kazan Temizleme programı (yardımcı fonksiyon 1'e 3 sn, 1-2 ayda bir, boş)
#   · A s.28 kazan temizliği 2 ayda bir · C s.29 kazan temizleme programı olmayan ürünlerde yöntem.
# BİLEREK YAZILMAYANLAR: körük deliklerini kürdanla açma (A s.28; ALET KURALI) · rezistans/ısıtma teşhisi (belgede bu belirtide yok) · deterjan markası önerisi · fiyat.
# Alıntı denetim tablosu: grundig-camasir-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Deterjan ölçü kabı"]
steps:
  - "Deterjanı su sertliğine ve çamaşırın miktarına, kirine göre önerilen miktarda koy; azını da fazlasını da kullanma."
  - "Makineyi aşırı yükleme; Program ve tüketim tablosunda yazan miktarda çamaşır koy."
  - "Kumaşa uygun program ve sıcaklığı seç; uzun süre hep düşük ısıda yıkama."
  - "Yalnızca çamaşır makinesine uygun deterjan kullan; el yıkama sabunu koyma."
  - "Deterjanı doğru göze koy ve çamaşır suyuyla deterjanı karıştırma."
  - "Zorlu lekelere yıkamadan önce uygun şekilde müdahale et."
  - "Makinende Kazan Temizleme programı varsa makine boşken 1-2 ayda bir çalıştır."
faq:
  - q: "Beyazlarım neden grileşti?"
    a: "Grundig'in tablosu grileşme için dört sebep sayıyor: uzun süre yetersiz deterjan, uzun süre düşük ısıda yıkama, sert suda yeterli deterjan kullanmamak ve fazla deterjan. Kılavuza göre sert suda deterjan yetersiz kalırsa kir çamaşıra yapışır ve zamanla grileşme olur; grileşme oluştuktan sonra gidermek zordur. Çözüm su sertliğine ve çamaşıra göre önerilen miktarda deterjan ve kumaşa uygun sıcaklık."
  - q: "Makinemde Kazan Temizleme programı yok, ne yapmalıyım?"
    a: "Grundig GWM 9801 kılavuzu bu durum için bir yol veriyor: İlave Su ya da İlave Durulama yardımcı fonksiyonunu seç, ön yıkamasız Pamuklu programı kullan, sıcaklığı kazan temizleme maddesinin üzerinde önerilen seviyeye ayarla ve makine boşken çalıştır. Programdan önce 2 numaralı ana yıkama gözüne özel kazan temizleme kimyasalından bir poşet, bulunamazsa en çok 100 gram çamaşır makinesi toz kireç önleyicisi koy. Program bitince körüğün içini temiz bir bezle kurula."
  - q: "Çamaşırlar yıkandıktan sonra sert çıkıyor, sebebi ne?"
    a: "Grundig'in tablosunda bu ayrı bir satır. Sebepler: yeterli deterjan kullanılmaması, ön yıkama seçilmeden ön yıkama gözüne deterjan konması ve deterjanla yumuşatıcının karışması. Kılavuz su sertliğine uygun miktarda deterjan kullanmanı, deterjanı doğru göze koymanı, yumuşatıcıyı deterjanla karıştırmamanı ve çekmeceyi sıcak suyla yıkamanı öneriyor."
  - q: "Renkliler soluyor, makine mi bozuk?"
    a: "Grundig'in tablosu renk solmasını üç kullanıcı tarafı sebebe bağlıyor: aşırı çamaşır yükleme, deterjanın nemlenmesi ve yüksek sıcaklık seçimi. Çözümler: makineyi aşırı yüklememek, deterjanı nemsiz ve kapalı saklamak, çamaşırın türüne ve kirine uygun program ve sıcaklık seçmek."
images:
  coverAlt: "Çamaşır makinesinden yeni çıkarılmış, yakası hafif grileşmiş beyaz bir gömleğin katlanmış beyaz havlular yanında tutulması"
---

Makine çalışıyor, program bitiyor ama beyazlar grileşmiş, leke yerinde duruyor ya da çamaşırda yağlı izler var. Grundig'in çamaşır makinesi kullanma kılavuzlarında bu durum tek bir başlık altında değil, üç ayrı satırda geçiyor: **"Yıkama performansı kötü: Grileşme var."**, **"Lekeler çıkmadı veya çamaşırlar beyazlaşmadı."** ve **"Çamaşırlarda yağlı lekeler oluştu."** Grundig'in bu satırlarda saydığı sebeplerin hiçbiri parça arızası değil: deterjan miktarı, yük, program ve sıcaklık, deterjan türü ve kazan temizliği. Bu yazı Grundig'in GWM 91014 ve GWM 9701 Y kılavuzlarındaki tabloya dayanıyor; kazan temizleme programı olmayan modeller için GWM 9801 kılavuzuna da bakıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Grileşme çoğu zaman uzun süre az deterjan ya da hep düşük ısı demek; leke çıkmıyorsa doz, yük, program ve deterjan türüne bak; yağlı leke Grundig'e göre kazan temizliği eksikliği. Doğru dozu, doğru yükü, kumaşa uygun sıcaklığı seç ve kazanı düzenli temizle.

## Adım adım: evde denenecekler

**1. Dozu su sertliğine göre ayarla.** Grundig'in tablosunda hem grileşme hem leke satırında ilk sebep deterjan miktarı. Grileşme satırı iki yönü de sayıyor: **uzun süre yetersiz miktarda** deterjan ve **fazla deterjan.** Çözüm her ikisinde aynı: **su sertliğine ve çamaşıra göre önerilen miktarda** deterjan kullan. Kılavuz sert sudaki durumu ayrıca açıklıyor: yeterli deterjan kullanılmazsa **kir çamaşıra yapışır** ve zamanla grileşme olur; **grileşme oluştuktan sonra gidermek zordur.**

**2. Aşırı yükleme yapma.** Leke satırındaki ikinci sebep: **aşırı çamaşır yüklenmiş** olabilir. Grundig'in çözümü **"Program ve tüketim tablosu"** bölümünde tavsiye edilen miktarda çamaşır yüklemek. Kılavuzun yükleme bölümü de aynı şeyi söylüyor: aşırı yüklendiğinde **yıkama performansı düşecektir**; çamaşırları makineye **gevşek biçimde** yerleştir.

**3. Kumaşa uygun program ve sıcaklık seç.** Grileşme satırında bir sebep **uzun süre düşük ısıda yıkama**, leke satırında **yanlış program ve sıcaklık** seçimi. Grundig'in çözümü: **yıkanan kumaşa uygun** program ve sıcaklığı seç. Kılavuzdaki "Doğru yıkama önerileri" tablosu açık renkliler ve beyazlar için kir miktarına göre **40-90 °C** aralığını, renkliler için **soğuk-40 °C** aralığını veriyor.

**4. Makineye uygun deterjan kullan.** Leke satırındaki bir diğer sebep: **hatalı deterjan** kullanılmış olabilir. Grundig'in çözümü **ürüne uygun, orijinal deterjan.** Kılavuz yalnızca **çamaşır makinelerine uygun** deterjan kullanılmasını ve **doğal el yıkama sabunu** kullanılmamasını istiyor.

**5. Doğru göz, çamaşır suyuyla karıştırma yok.** Aynı satırda Grundig şunu da yazıyor: **deterjanı doğru göze koy, çamaşır suyuyla deterjanı birbirine karıştırma.** Çekmecede ana yıkama gözü **2 numara.** Kılavuz çamaşır suyunun ön yıkamalı programda ön yıkamanın başında ya da ilave durulamalı programda birinci durulamada eklenmesini, **renkli çamaşırlarda** kullanılmamasını öneriyor.

**6. Zorlu lekelere önceden müdahale et.** Grundig'in yıkama hazırlığı bölümüne göre **zorlu lekelere yıkama öncesinde uygun şekilde müdahale edilmeli.** "Doğru yıkama önerileri" tablosu da çok kirli beyazlar için **lekelere ön işlemde bulunmak veya ön yıkama yapmak** gerekebileceğini yazıyor; örnek olarak **çimen, kahve, meyve, kan lekesi** gibi zor lekeleri sayıyor.

**7. Kazanı düzenli temizle.** Grundig'in tablosu **yağlı lekeler** satırını doğrudan buna bağlıyor: **düzenli kazan temizliği uygulanmamış olabilir.** Tablonun dipnotu, iki yıldızla işaretli bütün yıkama performansı satırları için de aynı sebebi hatırlatıyor. GWM 91014 kılavuzuna göre **Kazan Temizleme** programı **yardımcı fonksiyon düğmesi 1'e 3 saniye** basılı tutularak seçiliyor; **1-2 ayda bir** ve **makine tamamen boşken** çalıştırılıyor. Daha verimli sonuç için **2 numaralı göze** çamaşır makinelerine uygun **toz kireç çözücü** konabiliyor; program bitince kapağı **aralık bırakarak** içinin kurumasını sağla. Kazan temizleme programı olmayan modeller için yöntem sorular bölümünde.

## Tablodaki diğer yıkama satırları

Grundig'in aynı tablosunda iki satır daha var. **Çamaşırlar kötü kokuyorsa** kılavuz, devamlı düşük sıcaklıkta ya da kısa programlarda yıkama yüzünden kazanda **koku ve bakteri tabakaları** oluşabileceğini yazıyor ve **deterjan çekmecesini ve yükleme kapağını her yıkamadan sonra aralık bırakmanı** öneriyor. **İyi durulamıyorsa** sebepler: deterjanın miktarı, markası ya da saklama koşulları, yanlış göz, tıkalı pompa filtresi ve kıvrılmış tahliye hortumu. Markadan bağımsız anlatım için [çamaşır makinesi çamaşırlarda leke bırakıyor](/blog/camasir-makinesi-camasirlarda-leke-birakiyor/) ve [çamaşır makinesi kireç ve tambur temizliği](/blog/camasir-makinesi-kirec-ve-tambur-temizligi/) yazılarına bakabilirsin.

## Ne zaman servis

Doz, yük, program, deterjan türü ve kazan temizliği yerindeyken çamaşırlar hâlâ kirli çıkıyorsa durumu yetkili servise anlat. Grundig'in sorun giderme bölümünün sonundaki uyarı: talimatları uygulamana rağmen sorunu gideremezsen ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Deterjan, yük, program ve kazan temizliği sana; makinenin içindeki parçalar yetkili servise aittir. Grundig çamaşır makinelerindeki diğer konular için [Grundig çamaşır makinesi hata kodları](/blog/grundig-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce kısa özet

1. Sorun ne: grileşme, çıkmayan leke, yağlı iz, koku?
2. Hangi programı ve kaç dereceyi çoğunlukla kullanıyorsun?
3. Deterjanı ölçüyor musun, hangi türü kullanıyorsun?
4. Makineyi ne kadar dolduruyorsun?
5. Kazan temizliğini en son ne zaman yaptın?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
