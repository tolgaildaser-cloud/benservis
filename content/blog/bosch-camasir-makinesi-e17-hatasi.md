---
title: "Bosch çamaşır makinesi E17 hatası"
description: "Bosch çamaşır makinesi E17 (F17) hatası: su besleme süresi aşıldı. Musluk, giriş hortumu ve süzgeç temizliği Bosch kılavuzundaki sırayla."
slug: "bosch-camasir-makinesi-e17-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF'ler pdftotext -layout ile, sayfa ayracı \f sayılarak okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  W) Bosch TR E17 sayfası  https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e17-veya-f17-camasir-makinesi  md5 d8552693d09f4df45a60591f84d4cd8b
#  A) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d  (sayfa atıfları bu belgeye göre)
#  B) WAK20211TR  https://media3.bosch-home.com/Documents/9001112382_B.pdf  42 s.  md5 ff2f36e5bf68f896e405682fbb95700d
#  C) WAK20202TR  https://media3.bosch-home.com/Documents/9001113797_C.pdf  40 s.  md5 b8c8d9f6f905f0e142149204d8535673
#  D) WAK24210TR  https://media3.bosch-home.com/Documents/9000941315_A.pdf  39 s.  md5 e1a8d222a420af7849035015ebba996a
# W birebir: "Hata E17 / F17: Su besleme süresi aşıldı" / "Musluğu açın. Eğer hata düzeltilemiyorsa lütfen müşteri hizmetlerimiz ile iletişime geçin ve bir servis randevusu ayarlayın."
# E:17 satırı A s.29, B s.29, C s.28, D s.26'da birebir aynı: "Musluğu sonuna kadar açınız." / "Su giriş hortumu katlanmış/sıkıştırılmış," / "Su basıncı çok düşük. Süzgeci temizleyiniz."
# Süzgeç temizliği (basıncın alınması, musluk ve arka süzgeç): A s.27-28, "Su girişindeki süzgeç tıkalı".
# Bilerek YAZILMAYANLAR: "E17 = giriş valfi / basınç anahtarı arızası" teşhisi (Bosch metninde yok); fişi çekip bekleme reseti (E17 için Bosch vermiyor); valf değişimi, söküm.
# Alıntı denetim tablosu: bosch-camasir-makinesi-e17-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Havlu", "Pense (yalnız arka süzgeç için)"]
steps:
  - "Su musluğunun sonuna kadar açık olduğunu kontrol et."
  - "Su giriş hortumunun katlanmadığını ve bir yere sıkışmadığını kontrol et."
  - "Süzgeci temizlemek için önce su musluğunu kapat."
  - "Durulama, Sıkma ve Boşaltma dışında bir program seç, Başlat/Beklet'e bas ve yaklaşık 40 saniye çalıştır."
  - "Program seçme düğmesini Kapalı (İptal) konumuna getir ve fişi çek."
  - "Hortumu musluktan çıkar ve musluk tarafındaki süzgeci küçük bir fırçayla temizle."
  - "Hortumu yeniden bağla, sızdırmazlığını kontrol et, musluğu aç ve programı yeniden başlat."
  - "E17 sürüyorsa cihazı kapat, fişi çek, musluğu kapat ve yetkili servisi çağır."
faq:
  - q: "Bosch çamaşır makinesi E17 hatası ne demek?"
    a: "Bosch'un Türkiye destek sayfasındaki tanım: su besleme süresi aşıldı. Yani makine, beklediği süre içinde yeterli suyu alamadı. Bosch aynı kodu eski modellerde F17 olarak da yazıyor; ikisi aynı durumu anlatır."
  - q: "E17'de önce neye bakmalıyım?"
    a: "Bosch'un sayfası tek cümleyle başlıyor: musluğu açın. Kullanım kılavuzundaki tablo buna iki kontrol ekliyor: su giriş hortumu katlanmış ya da sıkışmış olabilir; su basıncı çok düşükse de süzgecin temizlenmesi gerekir."
  - q: "Süzgeci temizlemeden önce neden program çalıştırılıyor?"
    a: "Bosch kılavuzu, süzgeci çıkarmadan önce giriş hortumundaki su basıncının alınmasını istiyor. Bunun için musluk kapatılır, durulama, sıkma ve boşaltma dışında bir program yaklaşık 40 saniye çalıştırılır, sonra düğme Kapalı konumuna alınıp fiş çekilir."
  - q: "Her şeyi kontrol ettim ama E17 gitmiyor, ne yapmalıyım?"
    a: "Bosch'un sayfasındaki yönlendirme bu noktada net: hata düzeltilemiyorsa müşteri hizmetleriyle iletişime geçip servis randevusu ayarlayın. Kılavuz da kendi başına giderilemeyen arızada cihazın kapatılmasını, fişin çekilmesini, musluğun kapatılmasını ve yetkili servisin çağrılmasını istiyor."
images:
  coverAlt: "Çamaşır makinesinin arkasındaki su musluğu ve musluğa bağlı beyaz su giriş hortumu, hortum düz ve gergin değil"
---

Çamaşırları koydun, programı başlattın; makine bir süre bekledi ve ekranda **E17** belirdi. Bosch'un Türkiye destek sayfasında bu kodun karşılığı kısadır: **"Su besleme süresi aşıldı."** Makine su almayı denedi ama beklediği süre içinde yeterli suyu alamadı. Bosch'un ilk önerisi de aynı kısalıkta: **"Musluğu açın."** Bu yazıda o cümleyi, Bosch kullanım kılavuzlarındaki E:17 satırı ve süzgeç temizliği bölümüyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E17 (eski modellerde F17) = su besleme süresi aşıldı. Sıra şu: musluk sonuna kadar açık mı → giriş hortumu katlanmış mı → hortumdaki basıncı al, fişi çek → musluk tarafındaki süzgeci temizle → yeniden başlat. Hata sürüyorsa → yetkili servis.

## Adım adım: evde denenecekler

**1. Musluğa bak.** Bosch kılavuzundaki E:17 satırının ilk maddesi: **musluğu sonuna kadar aç.**

**2. Giriş hortumunu izle.** Hortumu musluktan makinenin arkasına kadar gözünle takip et. Kılavuzun ikinci maddesi, **hortumun katlanmış ya da sıkışmış** olmasıdır; makineyi duvara yaklaştırırken ya da bir dolabın arkasında ezilmiş olabilir.

**3. Süzgeç için musluğu kapat.** Kılavuzun üçüncü maddesi su basıncının çok düşük olması ve **süzgecin temizlenmesi**dir. Süzgece ulaşmadan önce hortumdaki basıncı almak gerekir; ilk iş musluğu kapatmak.

**4. Basıncı al.** Durulama, Sıkma ve Boşaltma **dışında** bir program seç, **Başlat/Beklet** tuşuna bas ve programı yaklaşık **40 saniye** çalıştır. Bosch'un tarif ettiği yol budur: böylece giriş hortumundaki su basıncı alınır.

**5. Makineyi kapat, fişi çek.** Program seçme düğmesini **Kapalı (İptal)** konumuna getir ve fişi prizden çek.

**6. Süzgeci temizle.** Hortumu musluktan çıkar; musluk tarafındaki süzgeci **küçük bir fırçayla** temizle. Bosch, **Standart ve Aqua-Secure** modellerde makinenin arka tarafındaki hortumun da çıkarılmasını ve oradaki süzgecin **penseyle çekilip** temizlenmesini tarif ediyor. Önüne bir havlu koy; hortumda kalan birkaç damla su akabilir.

**7. Bağla ve dene.** Hortumu yeniden bağla ve Bosch'un istediği gibi **sızdırmazlığını kontrol et.** Musluğu aç, fişi tak ve programı yeniden başlat.

**8. Hata sürüyorsa dur.** Bosch'un E17 sayfasının ikinci cümlesi burada devreye girer: hata düzeltilemiyorsa müşteri hizmetleriyle iletişime geçip servis randevusu ayarla. Kılavuzun genel talimatı da aynı: cihazı kapat, **fişi çek**, **musluğu kapat** ve yetkili servisi çağır.

## E17 tam olarak neyi söylüyor?

Bosch'un kodu iki önekle yazdığını hatırlatmak gerekir: destek sayfası bu hatayı **"E17 / F17"** diye verir. Eski modellerde F17, yenilerde E17 görünür; anlatılan durum aynıdır.

Bosch'un kullanım kılavuzlarındaki tabloda E:17'nin karşısında üç madde yazar ve üçü de suyun makineye **girişiyle** ilgilidir: musluk, giriş hortumu ve su basıncı ile süzgeç. Aynı kılavuzun "Cihaza su akmazsa" satırı da benzer bir liste verir: Başlat/Beklet seçilmemiş olabilir, su musluğu açılmamış olabilir, süzgeç tıkanmış olabilir, su hortumu katlanmış ya da sıkışmış olabilir.

Kısacası E17, makinenin içinden çok **makineye gelen suyun yolunu** işaret eder. Bu yüzden kontrollerin hepsi musluk ile makinenin arka yüzü arasında kalır.

## Suyun tersi: E18

E17 suyun **girememesi**, E18 ise suyun **çıkamaması**dır. İki kod yan yana okunduğunda kolayca karışır. Makinenin içinde su kalmışsa ve program sıkmaya geçemiyorsa aradığın kod büyük ihtimalle E18'dir: [Bosch çamaşır makinesi E18 hatası](/blog/bosch-camasir-makinesi-e18-hatasi/). Bosch'un yayımladığı kodların tamamı için: [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/).

Yeni nesil Bosch makinelerde su alma sorunu farklı bir kodla görünür: [Bosch çamaşır makinesi E:30-10 hatası](/blog/bosch-camasir-makinesi-e30-10-hatasi/).

## Sınır nerede biter

Musluk tam açık, hortum düz, süzgeç temiz ve E17 hâlâ geliyorsa Bosch kullanıcıya başka bir adım vermiyor; sıradaki yer müşteri hizmetleri ve servis randevusudur. Bosch kılavuzunun müşteri hizmetleri bölümü de onarımın eğitimli servis teknisyenleri tarafından, orijinal yedek parçalarla yapılmasını öneriyor; servisi ararken cihazın ürün numarasını (E-Nr.) ve üretim numarasını (FD) hazır tutmanı istiyor. Kılavuza göre bu bilgiler modele göre kapağın iç kısmında, servis kapağında ya da cihazın arka tarafında yazar.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **musluk, hortum ve süzgeç kullanıcıya; makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Musluk sonuna kadar açık mı?
2. Giriş hortumu katlanmış ya da ezilmiş mi?
3. Musluk tarafındaki süzgeç temizlendi mi, içinden ne çıktı?
4. Hortum yeniden bağlandıktan sonra sızıntı var mı?
5. Program yeniden başlatıldığında E17 aynı noktada mı geldi?

Bu beşine cevabın varsa servise "makine su almıyor" yerine net bir tablo anlatabilirsin. Kod vermeden su almayan makineler için sıra: [Çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/).

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
