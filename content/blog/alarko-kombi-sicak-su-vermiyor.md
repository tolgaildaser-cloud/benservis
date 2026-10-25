---
title: "Alarko kombi su ısıtmıyor: sıcak su kontrol sırası"
description: "Alarko kombi su ısıtmıyorsa kılavuzun sırası: çalışma konumu, musluk sembolü, kullanım suyu sıcaklığı, E01, E04 ve E06 kodları, reset ve kireç."
slug: "alarko-kombi-sicak-su-vermiyor"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, fork D). origin/main'de alarko-kombi-sicak-su-* / su-isitmiyor yok; Alarko'da
#   alarko-kombi-kalorifer-isitmiyor (petek, ters belirti), alarko-kombi-e01/e04/e47-hatasi var. Bu yazı musluktan sıcak su belirtisi; kod sayfalarına bağlanır.
# Arama kanıtı (#164, bu koşuda OT, hl=tr gl=tr, 25 Eki 08:47): "alarko kombi s" → 2. "alarko kombi su ısıtmıyor";
#   "alarko kombi su ısıtmıyor" → 1. "…ne yapmalıyım", 2. "alarko serena kombi su ısıtmıyor", 3. "alarko seradens kombi su ısıtmıyor";
#   "alarko kombi sıcak su" → 1. "…nasıl açılır", 5. "…vermiyor". GSC (www-5 3 ay / www-6 7 gün): Alarko sıcak su satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi (HTTP 200 application/pdf). Zincir: alarko-carrier.com.tr/urun/kombi/<model> ürün
#   sayfası (200) → Data/Files/Dokumanlar/kullanim-kilavuzu/<pdf> (200). pdftotext -layout, sayfa = PDF sayfası.
#  (S) Seradens Super SRS 20/24/28/36, Kod No A.1.4.8, Rev. 6/02/2026, 64 s.  …/alarko-kombi-srs-kk-2026-tr.pdf  md5 7b43539c6e752eace53915dbb79ebadb
#  (P) Seradens Super Plus SSP 20/24/28/36, 67 s.  …/alarko-kombi-ssp-kk-2026-tr.pdf  md5 aa8026bf7271673f6e005a0713b30fb5
#  (F) Super Fit 24/28/35, 62 s.  …/alarko-super-fit-kombi-kk-tr.pdf  md5 f67df03703d208474557f26e19b067f8
#  (M) Smart Fit 25/30/35, 65 s.  …/alarko-kombi-smf-kk-2026-tr.pdf  md5 da6397825df81590a9f389cfdc6be5da
# Gaz sızıntısı S s.10 · kumanda paneli S s.13, F s.14, M s.14 · info ı00/ı02/ı04 S s.14 · su ekleme 1,2 bar S s.14-15 · konumlar S s.16 · çalıştırma,
#   kullanım suyu 30-60 °C S s.17, F s.17 · E01, E04, E06, E46 S s.18-19 · PnP run F s.18, M s.18 · ön ısıtma P s.23 · kireç 17,5 Fr S s.11, s.44.
# BİLEREK YAZILMAYANLAR: plaka eşanjör/3 yollu vana/akış sensörü teşhisi · kireç temizliğini kullanıcı adımı yapmak · ön ısıtmayı kullanıcının açması
#   (servis parametresi) · Serena/Trendy gibi eski modellerin paneli (bu koşuda Alarko sitesinde kılavuz bulunamadı) · müşteri hattı numarası · fiyat (#46).
# Slug gerekçesi: OT'de en güçlü ifade "su ısıtmıyor"; başlık bu ifadeyle kuruldu, slug sitedeki diğer markaların "…-kombi-sicak-su-vermiyor" ailesine uyuldu.
# Alıntı denetim tablosu: alarko-kombi-sicak-su-vermiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin montaj ve kullanım kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa elektrik düğmelerine dokunma; gaz vanalarını kapat, kapı ve pencereleri aç, gaz şirketini 187'den ara."
  - "Ekranda OFF ya da yalnız radyatör sembolü varsa konum düğmesiyle YAZ ya da KIŞ konumunu seç; musluk sembolü sürekli yanmalı."
  - "Sıcak su musluğunu aç; ekranda musluk sembolünün yanıp söndüğünü ve alev sembolünün çıktığını kontrol et."
  - "Kullanım suyu sıcaklığını artırma tuşuyla yükselt; ayar aralığı 30 ile 60 °C arası."
  - "Ekranda E01 varsa gaz sayacını ve kombinin gaz vanasını kontrol et, kombiyi kapatıp yeniden aç."
  - "Ekranda E04 varsa basıncı bilgi menüsünden ya da manometreden oku; soğukken 1,2 bar olmalı."
  - "E06 ya da sürekli yanan başka bir kod varsa kodu not al ve yetkili servisi ara."
faq:
  - q: "Alarko kombi petekleri ısıtıyor ama musluktan sıcak su gelmiyor, neden?"
    a: "İlk bakılacak yer çalışma konumu. Alarko kılavuzlarına göre SADECE ISITMA konumunda kombi yalnız kalorifer için çalışır, sıcak su hazırlamaz. Konum düğmesine basarak KIŞ konumunu seç; ekranda musluk ve radyatör sembolleri birlikte sürekli yanmalı. Konum doğruysa kullanım suyu sıcaklığına ve ekrandaki koda bak."
  - q: "Alarko kombide sıcak su sıcaklığı kaç derece ayarlanır?"
    a: "Seradens Super ve Super Fit kılavuzlarında kullanım suyu ayar sıcaklığı en az 30 °C, en fazla 60 °C. Ekran ışığı sönükken kullanım suyu tuşlarından birine bir kez basınca o anki ayar görünür; sonraki basışlar değeri değiştirir."
  - q: "E06 hatası sıcak suyu etkiler mi?"
    a: "E06, kılavuzda kullanım suyu sensörü arızası olarak geçiyor. Kodun karşısındaki talimat tek satır: yetkili servisi arayın. Bu kodda evde yapılacak bir ayar yok; kodu not alıp servise bildir."
  - q: "Elektrik kesintisinden sonra kombi birkaç dakika çalışmıyor, arıza mı?"
    a: "Super Fit ve Smart Fit kılavuzlarına göre değil. Cihaz ilk devreye girerken ve her elektrik kesintisinden sonra yaklaşık 3 dakika süren bir hava atma işlevi çalışır; bu sürede ekranda PnP run yazısı görünür. Yazı kaybolunca kombi normal çalışmaya döner."
  - q: "Sıcak su eskisine göre geç ve az geliyor, ne yapmalıyım?"
    a: "Alarko kılavuzları çok kireçli suyun kullanım suyu eşanjörünü tıkayabileceğini, şebeke suyunun en fazla 17,5 Fransız sertliğinde olması gerektiğini söylüyor. Plakalı eşanjörün temizliği kombinin içinde yapılan bir iştir; yetkili servise bırak."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir kombi ve altında açık duran bir lavabo musluğu"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Beyaz bir kombinin kumanda panelinde musluk biçimli bir simgenin yakın planı"
    - "Lavabo üzerinde açık duran bir sıcak su musluğu"
    - "Kombinin kumanda panelinde artırma ve azaltma tuşlarının yakın planı"
    - "Kombinin altında borular arasında duran sarı kollu bir gaz vanası"
    - "Kombi ekranında beliren küçük bir basınç simgesinin yakın planı"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve yanında bir not kâğıdı"
---

Kalorifer belki ısınıyor, ama musluğu açınca su soğuk akıyor. Alarko'nun Seradens Super, Seradens Super Plus, Super Fit ve Smart Fit kılavuzlarında "sıcak su gelmiyor" diye ayrı bir tablo yok; ama dört kılavuz da sıcak suyu belirleyen konum düğmesini, kullanım suyu sıcaklık ayarını, ekran sembollerini ve hata kodlarını açıkça anlatıyor. Bu yazıda servisi çağırmadan önce evde bakabileceğin her şeyi bu kılavuzlardan sırayla topladık. Düğmelerin numarası modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce konuma bak: SADECE ISITMA seçiliyse kombi sıcak su hazırlamaz. Sonra musluk sembolü, kullanım suyu sıcaklığı (30–60 °C) ve ekrandaki kod. E01'de gaz vanası, E04'te basınç, E06'da yetkili servis.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **OFF** | Kombi kapalı; sıcak su ve kalorifer ihtiyacında çalışmaz | 🛠️ Konum düğmesiyle YAZ ya da KIŞ seç |
| **Yalnız radyatör sembolü** | SADECE ISITMA konumu; yalnız kalorifer | 🛠️ KIŞ konumuna geç |
| **Musluk sembolü yanıp sönüyor** | Kullanım suyu kullanılıyor | Normal |
| **E01** | Alev yok veya sahte alev | 🛠️ Gaz vanası, kapatıp açma |
| **E04** | Düşük tesisat suyu basıncı | 🛠️ Basıncı oku |
| **E06** | Kullanım suyu sensörü arızası | 📞 Yetkili servis |

## Adım adım kontrol

**1. Gaz kokusu var mı?** Alarko'nun talimatı açık: sakin ol, yanan ateşleri söndür, bütün kapı ve pencereleri aç, gazlı cihazların ve daire girişindeki gaz vanalarını kapat. Kibrit ya da çakmak yakma, elektrik düğmeleriyle oynama, fiş çekme ya da takma, zil ve telefon kullanma. Gaz şirketini 187'den, itfaiyeyi 110'dan haber ver.

**2. Çalışma konumu doğru mu?** Konum düğmesine her basışta kombi sırasıyla YAZ, KIŞ, SADECE ISITMA ve KAPALI konumları arasında geçer. **YAZ** konumunda ekranda musluk sembolü sürekli yanar ve kombi yalnız kullanım suyu için çalışır. **KIŞ** konumunda musluk ve radyatör sembolleri birlikte yanar. **SADECE ISITMA** konumunda yalnız radyatör sembolü vardır ve kombi sıcak su hazırlamaz. Petekler ısınıyor ama su soğuksa ilk şüphe bu konumdur.

**3. Musluğu açınca ne oluyor?** Kılavuza göre YAZ konumunda kombinin ateşlenmesi için bir sıcak su musluğunun açılmış olması gerekir. Musluk açıkken ekranda musluk sembolü yanıp söner, alev oluştuğunda alev sembolü görünür. Sembol hiç değişmiyorsa kombi sıcak su talebini görmüyor olabilir (çıkarım); bu durumda kodu ve konumu not alıp servise bildir.

**4. Kullanım suyu sıcaklığı.** Sıcak su sıcaklığı panelin kullanım suyu artırma ve azaltma tuşlarıyla ayarlanır; Seradens Super'de bunlar 3 ve 4 numaralı, Super Fit'te 5 ve 6 numaralı tuşlar. Ayar en az **30 °C**, en fazla **60 °C**. Ekran ışığı sönükken tuşlardan birine bir kez basınca o anki ayar görünür. Değer en alta inmişse su ılık gelir.

**5. E01: alev yok.** Bu kod yakıcıda alev görülmediğinde çıkar. Kılavuzun sırası: gaz sayacını ve kombinin gaz vanasını kontrol et, şebekeden gaz geldiğinden emin ol. Sonra kombiyi panelden kapatıp yeniden aç ve ateşlemesini bekle; E01 tekrar çıkarsa bir kez daha kapatıp aç. Kılavuza göre bu, borulardaki gazın cihaza ulaşması için yapılır. Ayrıntılar [Alarko kombi E01 hatası](/blog/alarko-kombi-e01-hatasi/) yazısında.

**6. E04: basınç düşük.** Seradens Super'de bilgi düğmesine 2 saniye basınca ekranda ı00 ve kalorifer suyu basıncı görünür; Super Fit'te basınç ön kapaktaki manometreden okunur. Kombi soğukken **1,2 bar** olmalı. Kılavuz basıncın kombi soğuk ve kapalıyken, doldurma musluğuyla 1,2 bara tamamlanmasını tarif ediyor. Kılavuz bu işlemi kullanıcıya anlatıyor; doldurma musluğunu bilmiyorsan işi yetkili servise bırak. Basınç tamamlanınca kombi kendiliğinden yeniden çalışır. Ayrıntı [Alarko kombi E04 hatası](/blog/alarko-kombi-e04-hatasi/) sayfasında.

**7. E06 ya da sürekli yanan başka bir kod.** E06 kılavuzda **kullanım suyu sensörü arızası**. E02, E03, E05, E16, E22 gibi kodların karşısında da aynı talimat var: yetkili servisi arayın. Kodu not al. Kılavuzun genel kuralı da geçerli: anlatılan işlemlerden sonra sorun tekrar ederse yetkili servisi ara.

## Sıcak su geç geliyorsa

Seradens Super Plus'ta kullanım suyu **ön ısıtma** işlevi var. Bu işlev açıkken plaka eşanjördeki su önceden ısıtılır ve sıcak su daha hızlı gelir. Kılavuza göre ek tüketim yarattığı için işlev fabrikada kapalı gelir; yalnız yetkili servis açar. Seradens Super'de bilgi menüsündeki ı04 satırı bu işlevin durumunu gösterir: açıksa PhE, kapalıysa Phd. KIŞ konumunda ön ısıtmanın çalışması için oda termostatı gerekir.

Su yıllar içinde giderek azaldıysa kireç akla gelir. Alarko, çok kireçli suyun kullanım suyu eşanjörünü tıkayabileceğini ve şebeke suyunun en fazla **17,5 Fransız sertliğinde** olması gerektiğini yazıyor. Eşanjör kombinin içinde; temizliği servis işi.

## Ne zaman servis

- E06 ya da "yetkili servisi arayın" yazan bir kod sürekli yanıyorsa
- E01 iki kapatıp açmadan sonra geri geliyorsa
- Basınç sık sık düşüyor ya da E04 sürekli dönüyorsa
- Konum, sıcaklık ve kod doğru olduğu hâlde su ısınmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Konum düğmesi, sıcaklık tuşları, bilgi menüsü ve gaz vanasının kolu sende; kombinin kapağının içi, gaz hattı, elektrik bağlantısı, sensörler ve eşanjör temizliği yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Seradens Super, Super Plus, Super Fit, Smart Fit)?
2. Ekranda hangi konum ve hangi sembol var?
3. Kullanım suyu sıcaklığı kaça ayarlı?
4. Ekranda bir kod var mı, sürekli mi yanıyor?
5. Soğukken basınç kaç bar?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Petekler soğuksa [Alarko kombi petekleri ısıtmıyor](/blog/alarko-kombi-kalorifer-isitmiyor/), basınç çok yüksekse [Alarko kombi E47 hatası](/blog/alarko-kombi-e47-hatasi/), marka bağımsız nedenler için [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısına bak. Bil, gör, çağır.
