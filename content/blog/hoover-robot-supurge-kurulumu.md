---
title: "Hoover robot süpürge kurulumu: altlık, ilk şarj ve Wi-Fi"
description: "Hoover HG5 Hydro robot süpürge kurulumu: kutu içeriği, şarj altlığının yeri, fırçalar, ilk şarj, HG5 uygulaması, Wi-Fi ve ilk temizlik. Kılavuza göre."
slug: "hoover-robot-supurge-kurulumu"
date: "2026-10-25"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı D (YK #182 Dalga 8, küme Z5). origin/main 829cec5'te Hoover robot yazısı yalnız hoover-robot-supurge-calismiyor (arıza/ışık);
#   kurulum sorgusunu karşılayan Hoover sayfası yok. Genel "robot süpürge kurulumu" slug'ı yok; king-robot-supurge-kurulumu King'e özel. Dalga 6/7/8 klasörlerinde hoover kurulum dosyası yok.
# Arama kanıtı (#164, 25 Eki 08:50 +03, suggestqueries client=firefox hl=tr gl=tr; _kaynak/ot.tsv): "hoover robot süpürge k" → 1. "hoover robot süpürge kurulumu";
#   "hoover robot süpürge kurulumu" → 1. (kendisi); "hoover robot süpürge" → 4. "…kurulumu". Dalga 6'da yalnız "→4." diye elenmişti; bu koşuda "…k" → 1. GSC: "hoover" satırı yok.
# Belge (#88), bu koşuda curl. Zincir: https://www.hoover-home.com/tr_TR/robot-elektrikli-supurgeler/38383008/hg530h-011/ (200)
#   → https://www.hoover-home.com/tr_TR/page-data/robot-elektrikli-supurgeler/38383008/hg530h-011/page-data.json (200; "manuals" lang TR, type 50700)
#   → https://d15v10x8t3bz3x.cloudfront.net/Libretti/2023/3/16777714/48700043%20_01%20_ROBOT%20HG5%20HYDRO%20UM%20ML (200, application/pdf)
#  (H) Hoover HG5 Hydro robot süpürge kullanım kılavuzu, çok dilli, 154 s., md5 28413cea49a8de69c748d59d7452aefe — Türkçe bölüm s.138–145 (kurulum s.139–143)
# Kategori "Süpürge" (süpürge teşhiste var; kalıp hoover-robot-supurge-calismiyor ve king-robot-supurge-kurulumu).
# BİLEREK YAZILMAYANLAR: ışık/arıza tablosu (canlı hoover-robot-supurge-calismiyor'da; bağlantı verildi) · uygulama menülerinin ayrıntısı ve ekran adları dışındaki adımlar · pil değişimi (#31) · fiyat (#46).
# Alıntı denetimi: hoover-robot-supurge-kurulumu.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (ilk şarj süresi hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Akıllı telefon", "Ev Wi-Fi adı ve şifresi", "Soğuk ya da oda sıcaklığında temiz su"]
steps:
  - "Robotu ve aksesuarları kutudan çıkar, içeriği kontrol et, ambalajı garanti için sakla."
  - "Robotun yolundaki kabloları, devrilebilecek ve narin eşyaları, kilim kenarlarını ve yere sarkan perdeleri düzenle."
  - "Adaptörü prize ve şarj altlığına tak; altlığı duvara dayalı, yansıtmayan zemine koy, önünde iki metre, yanlarında birer metre boşluk bırak."
  - "Toz haznesinin yerinde olduğunu kontrol et, kenar fırçalarını işaretlerine göre tak, süngerleri çıkar."
  - "Robotu açıp altlığın önüne koy, Ev düğmesine bas ve ilk kullanımdan önce dört ila altı saat şarj et."
  - "HG5 uygulamasını indir, hesap aç, telefonu ev ağına bağla ve uygulamada cihaz ekle ile eşleştir."
  - "Paspas kullanacaksan su tankını temiz suyla doldur, bezi tutucuya takıp tankın altına yerleştir."
  - "Uygulamada AÇ'a dokunup ilk turu başlat, robot evin haritasını çıkarsın."
faq:
  - q: "Hoover robot süpürgenin şarj altlığını nereye koymalıyım?"
    a: "HG5 kılavuzuna göre altlık zemin seviyesindeki ışık yansıtmayan bir yüzeye, tercihen duvara karşı konmalı. Önünde 2 metre, her iki yanında 1 metre alanda hiçbir nesne olmamalı. Kablo altlığın altında kalmamalı, dolanmamalı ya da gerilmemeli. Zemin çok yansıtıcıysa robot altlığın yerini bulmakta zorlanabilir."
  - q: "İlk kullanımdan önce kaç saat şarj etmeliyim?"
    a: "Kılavuz ilk kullanımdan önce cihazı 4–6 saat şarj etmeni istiyor. Normal kullanımda tam şarj yaklaşık 4/5 saat sürüyor. Şarj sırasında Açık/Kapalı ve Ev düğmeleri beyaz yanıp söner, pil dolunca ışıklar söner. Pilleri 0°C'nin altında ya da 30°C'nin üstünde şarj etme."
  - q: "Hoover robot süpürge Wi-Fi'ya bağlanmıyor, ne yapmalıyım?"
    a: "Kılavuz üç kontrol sayıyor: yönlendirici Wi-Fi şifresini doğru girdiğinden, ağını 2.4 GHz'e ayarladığından ve robotun yönlendiriciden çok uzakta olmadığından emin ol. Wi-Fi adı 32 karakteri aşamaz. Ev düğmesine uzun basış uygulama bağlantısını başlatır; bu modda Ev düğmesindeki beyaz ışık hızla yanıp söner."
  - q: "Hangi uygulamayı indirmeliyim?"
    a: "HG5 Hydro için kılavuz HG5 uygulamasını App Store, Google Play ya da uygulama galerinden indirmeni, e-posta adresin ve bir parolayla hesap oluşturmanı söylüyor. Eşleştirmeden sonra evin haritası çıkarılabiliyor; her odaya ad verip ayrı temizlik programı kurabiliyorsun."
  - q: "Uygulama olmadan da çalışır mı?"
    a: "Evet. Robot üzerindeki Açık/Kapalı düğmesine uzun basış robotu açar ya da kapatır, kısa basış başlatır ya da duraklatır; uyku modundaysa temizliğe başlatmak için iki kez basman gerekir. Ev düğmesine kısa basınca robot şarja döner. Harita, oda seçimi ve girilmeyecek alanlar ise uygulamadan ayarlanıyor."
images:
  coverAlt: "Duvar dibindeki şarj altlığının önünde, boş parke zeminde duran yuvarlak robot süpürge"
  steps:
    - "Çizim: solda robot süpürge, sağda ambalaj kutusu"
    - "Çizim: solda robot süpürge, sağda anten girişi ve kablo"
    - "Çizim: solda robot süpürge, sağda prizden çekilen fiş"
    - "Çizim: solda robot süpürge, sağda temizlik fırçası"
    - "Çizim: solda robot süpürge, sağda şarj edilen batarya"
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda robot süpürge, sağda su ya da toz haznesi"
    - "Çizim: solda robot süpürge, sağda telefonda uygulama ve Wi-Fi bağlantısı"
---

Hoover'ın Türkiye sitesinde listelenen robot süpürgesi **HG530H (HG5 Hydro)**. Kutuyu açtın; şarj altlığını nereye koyacağını, ilk şarjın ne kadar süreceğini ve robotu telefona nasıl bağlayacağını merak ediyorsun. Hoover'ın kılavuzunun Türkçe bölümü bunları "Robot süpürgenizin hazırlanması" ve "Uygulamanın indirilmesi ve Wi-Fi ile bağlantı" başlıklarında veriyor. Bu yazı o sırayı izliyor. Kurulumdan sonra robot hareket etmez ya da ışıklar yanıp sönerse [Hoover robot süpürge çalışmıyor](/blog/hoover-robot-supurge-calismiyor/) yazısına geç.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Altlığı duvara dayalı, ışık yansıtmayan zemine koy; önünde 2 m, yanlarında 1 m boş kalsın. Kenar fırçalarını L ve R işaretine göre tak, süngerleri çıkar. İlk kullanımdan önce 4–6 saat şarj et. HG5 uygulamasını indir, hesap aç, "cihaz ekle" ile eşleştir. Ağın 2.4 GHz olmalı, Wi-Fi adı 32 karakteri geçmemeli.

## Kutudan ne çıkmalı?

Kılavuzun kutu içeriği listesi: robot süpürge, şarj altlığı, şebeke güç adaptörü, kullanma kılavuzu, dört köşe temizlik fırçası, robot için ek filtre, temizlik fırçası ve iki paspas bezi. Hoover ambalajı atmamanı istiyor; ileride garantinin geçerliliği için gerekebilir. Plastik poşetleri bebeklerden, çocuklardan ve hayvanlardan uzak tut.

## Adım adım: HG5 Hydro kurulumu

**1. Kutuyu boşalt ve kontrol et.** Robotu ve aksesuarları çıkar, yukarıdaki listeyle karşılaştır. Robotu düşürme; düşmüş ya da hasar görmüş aksesuarı kullanma. Kılavuz robotu ve aksesuarlarını 0–30°C arasında, içeride saklamanı yazıyor.

**2. Evi hazırla.** Robotun yolundaki engelleri kaldır. Kılavuzun listesi: kolayca devrilebilen nesneler, robotun takılabileceği halı ya da kilim kenarları, zemine değen perdeler ve masa örtüleri, ısı kaynakları ya da tutuşabilir maddeler, güç kabloları ve narin nesneler. Balkon ya da merdivene erişim varsa fiziksel bir engel kullan. Robot 8 cm'den kısa basamakları algılayamıyor; bu alanlar için kurulumdan sonra uygulamada girilmeyecek alan ya da sanal duvar tanımlayabilirsin.

**3. Şarj altlığını yerleştir.** Ana güç adaptörünü prize tak ve şarj altlığına bağla. Kablonun altlığın altında kalmadığından emin ol. Altlığı zemin seviyesindeki **ışık yansıtmayan** bir yüzeye, tercihen duvara karşı koy; zemin çok yansıtıcıysa robotun navigasyon sistemi altlığı bulmakta zorlanabilir. Altlığın **önünde 2 metre, iki yanında 1 metre** alanda hiçbir nesne olmasın. Kablo dolanmasın ya da gerilmesin; fazlası varsa güç kablosu gergisiyle topla.

**4. Hazneyi, fırçaları ve süngerleri hazırla.** Toz haznesinin robota doğru yerleştirildiğini kontrol et. İki kenar temizlik fırçasını yerine oturana kadar braketlere bastır; fırçalardaki ve robottaki **L ve R** işaretlerini eşleştir. Ardından süngerleri robot süpürgeden çıkar.

**5. Aç ve ilk şarjı yap.** Robotu açmak için Açık/Kapalı düğmesine **3–5 saniye** uzun bas ve robotu altlığın önüne koy. Ev (Şarj Altlığı) düğmesine bas; robotun altlığa doğru gittiğinden emin ol. İlk kullanımdan önce **4–6 saat** şarj et. Şarj sırasında Açık/Kapalı ve Ev düğmeleri beyaz yanıp söner, pil dolunca ışıklar söner. Pilleri 0°C'nin altında ya da 30°C'nin üstünde şarj etme; yalnız cihazla gelen şarj aletini kullan.

**6. Uygulamayı kur ve Wi-Fi'ya eşleştir.** "HG5" uygulamasını App Store, Google Play ya da uygulama galerinden indir. Uygulamayı açıp e-posta adresin ve bir parolayla hesap oluştur, oturum açmak istediğini onayla. Telefonunun Wi-Fi'ya bağlı olduğundan emin ol. Uygulamada **"cihaz ekle"**ye dokun ve eşleştirmeyi tamamlamak için ekrandaki talimatları izle. Robottaki Ev düğmesine uzun basış uygulama bağlantısını başlatır; bu sırada beyaz ışık hızla yanıp söner.

**7. Paspası hazırla (isteğe bağlı).** Su tankını çıkar ve özel açıklıktan belirtilen maksimum seviyeye kadar temiz suyla doldur. Yalnız soğuk ya da oda sıcaklığında su kullan; diğer sıvılar tankı aşındırabilir, sıcak su tanka zarar verebilir. Paspas bezini tutucuya tak, ikisini tankın altındaki açıklıklara yerleştir ve tankı robota geri tak. Bezin tamamen ıslanması birkaç dakika sürer.

**8. İlk turu başlat ve haritayı çıkar.** Yerdeki kablo, çorap ve ayakkabıları kaldır. Uygulamada harita sayfasına geçmek için Robot simgesine dokun, haritalamayı başlatmak için **AÇ** düğmesine bas. Robot bütün evi taradığında haritanın tamamı telefonda görünür; her odaya ad verip ayrı temizlik programı (emiş gücü, paspas seviyesi, temizlik sıklığı) kurabilirsin.

## Düğmeler kısaca

| Düğme | Basış | Ne yapar |
|---|---|---|
| Ev (Şarj Altlığı) | Kısa | Şarja gönderir |
| Ev (Şarj Altlığı) | Uzun | Uygulama bağlantısı |
| Açık/Kapalı | Uzun | Robot kapalıysa açar, açıksa kapatır |
| Açık/Kapalı | Kısa | Başlat / duraklat |

## Wi-Fi bağlantısı kurulmazsa

Kılavuzun kontrol listesi kısa: yönlendiricinin Wi-Fi şifresini doğru girdin mi, ağın **2.4 GHz**'e ayarlı mı, robot yönlendiriciden çok uzakta mı? Wi-Fi adının 32 karakteri aşmadığına da bak. Hoover robotun tüm işlevlerine her yerden erişmek için uygulamayı öneriyor; düğmelerle temel temizlik uygulamasız da yapılabiliyor.

⛔ Hoover'ın uyarısı: robotu demonte etme ve kendin tamir etmeye çalışma; arızada Hoover Satış Sonrası Servis'e başvur.

---

**Kaynak künyesi.** Kutu içeriği, hazırlık, şarj altlığı kurulumu, ilk şarj, uygulama ve Wi-Fi bağlantısı ile paspas bilgileri Hoover HG5 Hydro (HG530H) robot süpürge kullanım kılavuzunun Türkçe bölümünden (hoover-home.com/tr_TR ürün sayfası) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
