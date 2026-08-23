---
title: "Beko bulaşık makinesi hata kodları: üreticinin yayımladığı beş kod"
description: "Beko bulaşık makinesinde E01, E02, E06, E07 ve E26 ne demek? Üreticinin listesi, E03-E05'in neden bu listede olmadığı ve servis sınırı."
slug: "beko-bulasik-makinesi-hata-kodlari"
date: "2026-08-20"
category: "Bulaşık makinesi"
# 🔴 22 Ağu 2026 — TABLO BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
# Üreticinin yayımladığı bulaşık makinesi listesi BEŞ koddur: E01 · E02 · E06 · E07 · E26.
# Yazıdaki E03, E04, E05, E08 ve E09 bu listede YOK.
# En keskin bulgu: E03 ve E04 aslında Arçelik KOMBİ kodlarıdır —
#   E03 = baca sigortası · E04 = düşük su basıncı. Yani tablo yanlış CİHAZDAN kopyalanmış.
#   (Aynı desen çamaşırda da çıktı: kombi kodları çamaşır sayfasına taşınmıştı, bkz. #105.)
# E05 "üç yollu vana", E08 "kart hafıza", E09 "haberleşme" hiçbir üretici yayınında yok.
# Kaynak (bu koşuda tarayıcı başlık setiyle 200 çekildi):
#   arcelik.com.tr/blog/bulasik-makinesi-hata-kodlari
#   beko.com.tr/blog/bulasik-makinesi-hata-kodlari-rehberi   → ikisi BİREBİR aynı liste
# 📌 Eksik yayındı, eklendi: E07 (sürekli su alma) ve E26.
# 📌 E26 tartışmalı görünüyor ama üreticinin KENDİ metni: "15°C Üstü Kompresör Arızalı".
#    Beko'nun sayfası "kompresör veya ısı pompasında bir problem" diyor — yani ısı pompalı
#    modelleri anlatıyor. Bu nüansla yayımlandı, uydurulmadı.
# ⛔ guide ve steps DEĞİŞMEDİ — sekiz adım kod-bağımsız (musluk, filtre, pervane, gözlem).
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kullanım kılavuzu", "Küçük fırça", "Kuru bez"]
steps:
  - "Ekrandaki kodu yaz ve kendi makinenin kullanım kılavuzundan anlamını teyit et."
  - "Makineyi kapat, fişini çek ve su musluğunu kapat."
  - "Makinenin altına ve önüne bak: zeminde ıslaklık varsa kurula ve nereden geldiğini not et."
  - "Eviyenin altındaki makine musluğunun tam açık olduğunu ve evde su olduğunu kontrol et."
  - "Giriş hortumu dolap içinde büküldüyse ya da ezildiyse düzelt."
  - "Tabandaki filtreyi çıkar, fırçayla akan suda yıka ve yerine tak."
  - "Pervaneleri yerinden alıp deliklerini akan suda durula ve serbestçe döndüklerini kontrol et."
  - "Fişi tak, birkaç dakika bekle ve kısa bir programla dene; aynı kod tekrar geliyorsa kodu ve gözlemlerini not ederek servisle konuş."
faq:
  - q: "Beko bulaşık makinesinde E01 hatası ne demek?"
    a: "E01, yaygın serilerde taşma korumasının devreye girdiğini gösterir: makine ya fazla su almıştır ya da bir yerden sızan su şasiye inmiştir. Güvenlik sistemi bu durumda içerideki suyu tahliye etmeye çalışır ve programı durdurur. Tek seferlik bir taşmadan geldiyse kuruma sonrası tekrarlamayabilir; kısa sürede yeniden geliyorsa içeride aktif bir sızıntı vardır ve kaynağını servis bulmalıdır."
  - q: "E02 hatasında makine bozulmuş mu oluyor?"
    a: "Çoğu zaman hayır. E02 su kesik uyarısıdır: şebeke suyu kesiktir, musluk kapalı kalmıştır ya da giriş hortumu bükülmüştür. Yani makine arızadan değil, susuzluktan durmuştur. Musluğu ve hortumu kontrol edip programı yeniden başlatmak genelde yeterlidir; su geldiği hâlde kod sürüyorsa giriş hattına servis bakmalıdır."
  - q: "Bulaşıklar yıkanıyor ama makine sıcaklıkla ilgili kod veriyor — hangi kodlar ısıtmayla ilgili?"
    a: "Üreticinin yayımladığı listede ısıtma bölgesinin tek kodu E06'dır: sıcaklığı ölçen NTC sensörünün arızası. Belirtisi nettir — makine düzgün ve sürekli ısıtma yapmaz, bulaşıklar soğuk yıkanır, yağlı çıkar, kurutma zayıflar. İnternette bu bölgeye yerleştirilen E03 kodu üreticinin bulaşık makinesi listesinde geçmiyor; o numara Arçelik kombide baca sigortası demek. E06'da parça gövde içindedir ve teşhis ölçü aletiyle yapılır; bu bölge kullanıcıya değil servise aittir."
  - q: "Hata kodunu sildim, makine çalıştı — servise yine de gerek var mı?"
    a: "Kodun ne olduğuna bağlı. E02 gibi dış sebepli uyarılar, sebep ortadan kalkınca gerçekten biter. Ama E01 gibi güvenlik kodları ve E06, E07, E26 gibi parça kodları tekrar geldiyse, kod silmek sorunu değil yalnızca ekranı temizler. Aynı kod üçüncü kez geldiğinde artık deneme yapmayı bırakıp belirtiyi not ederek servisle konuşmak en doğrusudur."
images:
  coverAlt: "Ahşap tezgâh altındaki bulaşık makinesinin açık kapağındaki kumanda şeridi"
---

Akşam yemeğinin ardından makineyi doldurdun, programı başlattın; bir süre sonra makine sustu ve panelde E ile başlayan bir kod belirdi. Beko bulaşık makinelerinde bu kodlar makinenin kendi kendine koyduğu teşhistir: hangi bölgede sorun olduğunu söyler. Bu yazıda yaygın serilerde görülen E01-E06 kodlarını tek tek ele alıyoruz — her kodda önce ne anlama geldiğini, sonra evde neye bakabileceğini, en sonda da işin nerede servise geçtiğini bulacaksın.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ℹ️ Kod-anlam eşleşmeleri model serisine göre değişebilir; aşağıdaki liste yaygın serilerde geçerlidir. Emin olmak için ekrandaki kodu kendi makinenin kullanım kılavuzuyla teyit et.

## Adım adım: kod geldiğinde evde denenecekler

Hangi kod gelirse gelsin, aşağıdaki sıra önce denenecek **ücretsiz ve aletsiz** kontrollerdir. Kodun kendi bölümüne inmeden önce bu listeyi yürüt; vakaların çoğu burada kapanır.

**1. Kodu yaz ve kılavuzdan teyit et.** Ekrandaki kodu not et ve kendi makinenin kullanım kılavuzundan doğrula; kod-anlam eşleşmeleri model serisine göre değişir.

**2. Güvenliği al.** Makineyi kapat, **fişini çek ve su musluğunu kapat**.

**3. Zemine bak.** Makinenin altında ve önünde ıslaklık var mı? Varsa kurula ve suyun nereden geldiğini not et — taşma kodunda servise söyleyeceğin ilk bilgi budur.

**4. Musluğu ve şebekeyi kontrol et.** Eviyenin altındaki makine musluğu tam açık mı, evde su var mı? Mahalle kesintisi su kesik kodunun en masum sebebidir.

**5. Giriş hortumunu düzelt.** Hortum dolap içinde büküldüyse ya da mobilya altında ezildiyse rahatlat, keskin kıvrımları aç.

**6. Filtreyi çıkar ve yıka.** Tabandaki filtreyi çıkar, küçük bir fırçayla akan suda temizle ve yerine tak.

**7. Pervaneleri kontrol et.** Pervaneleri elle yerinden al, deliklerinin tıkalı olmadığını gözle, akan suda durula ve serbestçe döndüklerinden emin ol.

**8. Resetleyip dene.** Fişi tak, birkaç dakika bekle ve kısa bir programla dene. Aynı kod ikinci-üçüncü kez geliyorsa makineyi zorlama; kodu ve gözlemlerini not ederek servisle konuş.

⛔ Bu listede sökme yok. Rezistans, sensörler, vana ve taşma tavası gövdenin içindedir; o bölge servis alanıdır.

## E01 — taşma

Makine fazla su almış ya da bir yerden sızan su şasiye inmiştir; taşma koruması cihazı durdurur.

**Kendin kontrol et:** Makineyi kapat, **fişini çek** ve **su musluğunu kapat**. Zemine bak — makinenin önünde ya da altında ıslaklık var mı? Son yıkamada aşırı köpük ya da yanlış deterjan kullandıysan not et; tek seferlik taşmaların klasik sebebidir. Kod kısa sürede yeniden geliyorsa içeride aktif bir sızıntı vardır ve kaynağını servis bulmalıdır.

⛔ Şasiye inen suya ulaşmak için alt paneli sökme; orası hem elektrikli hem sulu bir bölgedir.

## E02 — su kesik

Üreticinin tanımı doğrudan: şebeke suyu kesilmiş ya da makinenin su giriş musluğu açılmamıştır.

**Kendin kontrol et:** Önce evyenin altındaki makine musluğunun **tam açık** olduğunu, sonra evde su olup olmadığını kontrol et — şebeke kesintisi bu kodun en yaygın sebebidir. Giriş hortumunun dolap içinde bükülmediğine de bak. Bu üçü temizken kod sürüyorsa giriş hattının makine tarafında bir sorun vardır.

## E06 — NTC (ısı sensörü)

Makinenin ısı sensörü arızalıdır. Belirtisi nettir: makine **düzgün ve sürekli ısıtma yapmaz**, bulaşıklar soğuk ve yağlı çıkar, deterjan tam çözülmez.

**Kendin kontrol et:** Yalnızca gözlem: program sonunda kapaktan buhar çıkıyor mu, bulaşıklar sıcak mı? Bu bilgiyi servise aktarmak teşhisi kısaltır.

⛔ Sensör ve rezistans gövdenin içindedir; ölçümü ve değişimi servis işidir.

## E07 — sürekli su alma

Makine su almayı durduramıyor. Üreticinin gösterdiği sebep **akış ölçerdeki arızadır**: akış ölçer makinedeki su miktarını ölçüp maksimum seviyeyi kontrol eder; görevini yapamayınca su girişi kesilmez.

**Kendin kontrol et:** Burada beklemek doğru değil, çünkü kontrol edilemeyen su girişi taşmaya varır. Yapılacak tek şey durumu güvenliğe almaktır: **makineyi kapat, fişini çek ve musluğu kapat.** Sonrası servis alanıdır — akış ölçer ve vana gövdenin içindedir.

## E26 — kompresör (ısı pompalı modeller)

Üreticinin tanımı: **15°C üstü kompresör arızası.** Kompresörde yeterli soğutucu akışkan olmadığında sıcaklık yükselir ve makinenin performansı düşer. Bu kod **ısı pompalı** modelleri ilgilendirir — üreticinin kendi ifadesiyle "kompresör veya ısı pompasında bir problem" işaretidir.

**Kendin kontrol et:** Bu kodda evde yapılacak bir şey yok. Üreticinin talimatı net: **makineyi durdur ve yetkili servise başvur.** Kapalı soğutucu devresi basınçlıdır; açmak da doldurmak da yetki ve ekipman ister.

## Kodların özeti

| Kod | Üreticinin karşılığı | Kendin bakılır mı |
|---|---|---|
| **E01** | Taşma | ⚠️ Fişi çek, musluğu kapat, zemini kurut; tekrarlarsa servis |
| **E02** | Su kesik | ✅ Musluk açık mı, evde su var mı, hortum bükülmüş mü |
| **E06** | NTC (ısı sensörü) arızası | ⛔ Servis |
| **E07** | Sürekli su alma | ⛔ Fişi ve musluğu kapat, servis |
| **E26** | 15°C üstü kompresör arızası (ısı pompalı modeller) | ⛔ Makineyi durdur, servis |

## Hangi noktadan sonra servis işi

Musluk, hortum, filtre, pervaneler ve makine içi temizlik — bunlar senin alanın, hepsi kapak seviyesinde ve güvenli. Rezistans, sensörler, vana ve taşma tavası ise gövdenin içindedir: hem elektrik hem su barındırır, teşhisi ölçü aletiyle yapılır. Aynı kod evdeki kontrollerden sonra ikinci-üçüncü kez geliyorsa artık makineyi zorlama; kodu ve gözlemlerini not ederek servisle konuş.

Markalar arasında kodlar değişir; diğer markaların listesi için bulaşık makinesi hata kodları rehberimize bakabilirsin. Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.
