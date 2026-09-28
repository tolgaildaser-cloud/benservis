---
title: "LG çamaşır makinesi IE (1E) hatası"
description: "LG çamaşır makinesi IE (1E) hatası: LG'ye göre su yeterli gelmiyor. Musluk ve giriş hortumu kontrolü ile servis sınırı adım adım."
slug: "lg-camasir-makinesi-ie-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi; pdftotext (-layout ve sayfa sayfa) ile okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle forumdan, servis sitesinden ya da kılavuz arşiv sitesinden alınmadı.
# PDF bağlantıları lg.com/tr ürün destek sayfalarındaki "Kılavuzlar" düğmesinden (gscs-b2c.lge.com, LG'nin kendi alan adı) alındı. Üç resmî LG Türkçe kılavuz, hepsi HTTP 200 application/pdf:
#  A) F4V5RGP2T  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739  (sayfa atıfları bu belgeye göre)
#  B) F4V3VYW3WE https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a
#  D) LG TR destek sayfası "[LG Çamaşır Makinesi] Ekranda 1E (IE) hata kodu görünüyor" https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153354538348/
#     HTML md5 7bc88641bf1aca9c0d9d54ed432f8c23 (sayfa her istekte oturum belirteci değiştirdiği için HTML md5 koşuya özgü); yalnız başlıktaki "1E (IE)" eşlemesi için kullanıldı.
# Kılavuzlarda kod "1E" olarak yazılır, başlığı "GİRİŞ HATASI"; satır üç belgede birebir aynı (A s.51, B s.42, C s.44):
#   "1E GİRİŞ HATASI | Bu konumda su yeterli şekilde sağlanmıyor. Su cihaza girmiyor veya yavaşça giriyor. • Evdeki başka bir musluğu kontrol edin.
#    Su besleme musluğu tamamen açık değil. ... • Musluğu tamamen açın. Su giriş hortumu (hortumları) kıvrılmıştır. • Hortumu düzeltin veya su giriş hortumunu tekrar takın
#    Giriş hortumlarının filtresi tıkanmıştır. • Muslukları kapattıktan ve çamaşır makinesine olan hortum bağlantılarını çıkardıktan sonra giriş vanasını kontrol edin ve temizleyin."
# Bakım bölümü (A s.48-49, B s.39-40, C s.41-42): "Su, deterjan bölmesine girmediğinde kontrol panelinde 1E hata mesajı gösterilecektir."
#   "1 Gücü ve su musluğunu kapatın ve su giriş hortumunu çıkarın. 2 Küçük penselerle su giriş filtresini çıkarın ve ardından orta sertlikle diş fırçası kullanarak filtreyi temizleyin."
# Bilerek YAZILMAYANLAR: giriş ventili / basınç sensörü teşhisi (LG'nin 1E satırında yok), "fişi çek 1 dk bekle" reseti (1E satırında yok), fiyat, söküm.
# Alıntı denetim tablosu: lg-camasir-makinesi-ie-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Küçük pense", "Orta sertlikte diş fırçası", "Yumuşak bir bez"]
steps:
  - "Evdeki başka bir musluğu açıp suyun gelip gelmediğini kontrol et."
  - "Makinenin bağlı olduğu su musluğunu sonuna kadar aç."
  - "Su giriş hortumunun kıvrılmadığını kontrol et; kıvrılmışsa düzelt ya da hortumu yeniden tak."
  - "Fişi tak ve programı başlat; 1E sürüyorsa yetkili LG servisine başvur."
faq:
  - q: "LG çamaşır makinesinde IE (1E) hatası ne demek?"
    a: "LG'nin Türkçe kullanım kılavuzlarında bu kod 1E olarak yazılır ve başlığı giriş hatasıdır. Karşılığı: bu konumda su yeterli şekilde sağlanmıyor; su cihaza girmiyor ya da yavaş giriyor. Bakım bölümüne göre su deterjan bölmesine girmediğinde panelde 1E görünür."
  - q: "IE mi, 1E mi? Ekranda hangisi yazar?"
    a: "LG'nin Türkçe kılavuzlarındaki hata tablosu kodu 1E olarak veriyor; LG Türkiye destek sayfası da aynı kodu 1E (IE) diye anıyor. İkisi aynı uyarıdır."
  - q: "IE hatasında önce neye bakmalıyım?"
    a: "LG'nin tablosundaki sıra şu: evdeki başka bir musluğu kontrol et, makinenin musluğunu tamamen aç, giriş hortumu kıvrılmışsa düzelt ya da yeniden tak, son olarak musluğu kapatıp hortumu ayırdıktan sonra giriş filtresini kontrol edip temizle. Filtre temizliği pense gerektirdiği için bunu servise bırakmanı öneriyoruz."
  - q: "Su giriş filtresini ne sıklıkla temizlemeliyim?"
    a: "LG, su giriş filtresinin altı ayda bir, su çok sertse ya da kireç izi taşıyorsa daha sık temizlenmesini öneriyor. Filtre, makineye giden sudaki kireci ve tortuları tutar."
images:
  coverAlt: "Çamaşır makinesinin arkasında duvardaki su musluğuna bağlı beyaz giriş hortumu; musluk kolu açık konumda"
---

Programı başlattın, makine birkaç dakika bekledi ve ekranda **IE** (bazı panellerde **1E**) belirdi. LG'nin Türkçe kullanım kılavuzlarındaki hata tablosunda bu kodun başlığı **giriş hatası**, karşılığı da şu: **"Bu konumda su yeterli şekilde sağlanmıyor. Su cihaza girmiyor veya yavaşça giriyor."** Yani makine, programın istediği suyu alamıyor. LG'nin tablosu dört olası sebep sayıyor ve dördü de evde kontrol edilebilir: evdeki su, musluk, giriş hortumu ve giriş filtresi.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** IE (1E) = LG'ye göre su yeterli gelmiyor. Sıra şu: evde su var mı → musluk sonuna kadar açık mı → giriş hortumu kıvrık mı → yeniden başlat. Kod sürüyorsa giriş filtresi dahil → yetkili LG servisi.

## Adım adım: evde denenecekler

**1. Evde su var mı, bak.** LG'nin 1E satırındaki ilk kontrol, evdeki **başka bir musluğu** açmak. Mutfakta ya da banyoda da su gelmiyorsa ya da çok zayıf akıyorsa sorun makinede değil, şebekededir.

**2. Musluğu sonuna kadar aç.** Tablodaki ikinci sebep, su besleme musluğunun **tamamen açık olmaması**. Makinenin bağlı olduğu musluğu sonuna kadar aç.

**3. Giriş hortumunu kontrol et.** Makinenin arkasından musluğa giden hortum bir dolap kenarında ya da duvarla makine arasında **kıvrılmışsa** su geçmez. LG'nin çözümü: hortumu düzelt ya da su giriş hortumunu yeniden tak. Kılavuzun kurulum bölümü de hortumun kıvrılmamış ve sıkışmamış olması gerektiğini yazıyor.

**4. Programı yeniden başlat.** Fişi tak ve programı başlat. Su sorunsuz geliyor, musluk açık, hortum düz ve 1E yine çıkıyorsa kılavuzun bu kod için verdiği kontroller bitmiştir: yetkili LG servisine başvur.

> 🔧 **Giriş filtresi:** LG, 1E'nin sebeplerinden birini tıkalı su giriş filtresi olarak veriyor. Filtre, hortumun makineye bağlandığı yerin içindedir; kılavuz onu hortumu makineden ayırıp **küçük bir penseyle** çıkarmayı tarif ediyor. Bu işi evde denenecekler listesine almıyoruz: yukarıdaki üç kontrol 1E'yi gidermediyse filtre temizliğini servise bırak.

## IE (1E) tam olarak neyi söylüyor?

LG kılavuzlarına göre makine, sorunları erken aşamada tespit etmek için otomatik bir hata izleme sistemiyle donatılmıştır. 1E bu sistemin **su girişiyle** ilgili uyarısıdır. Bakım bölümündeki not daha da açık: su deterjan bölmesine girmediğinde kontrol panelinde 1E hata mesajı gösterilir.

LG'nin tablosu dört sebep sayar:

| Sebep (LG'nin ifadesiyle) | LG'nin çözümü |
|---|---|
| Bu konumda su yeterli şekilde sağlanmıyor | Evdeki başka bir musluğu kontrol et |
| Su besleme musluğu tamamen açık değil | Musluğu tamamen aç |
| Su giriş hortumu kıvrılmış | Hortumu düzelt ya da yeniden tak |
| Giriş hortumlarının filtresi tıkanmış | Musluğu kapatıp hortumu ayırdıktan sonra giriş vanasını kontrol et ve temizle |

Kılavuzun kurulum bölümü bir sınır daha veriyor: su basıncı **50 kPa ile 800 kPa** (0,5–8,0 kgf/cm²) arasında olmalı. Evdeki basınç bu aralığın altına düşüyorsa makine suyu yavaş alır.

## Kodu önlemek için: filtre ve musluk alışkanlığı

LG, su giriş filtresinin **altı ayda bir**, su çok sertse ya da kireç izi taşıyorsa **daha sık** temizlenmesini öneriyor. Makineyi tatil gibi uzun bir süre kullanmayacaksan, özellikle yakında bir yer gideri yoksa, **su musluklarını kapat**.

Kış aylarında bir not: kılavuza göre makine donma derecelerinin görülebileceği bir odaya kurulmamalı. Hortum ya da pompa donduğunda LG'nin gösterdiği kod ayrıdır (FF); bu durum [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısındaki listeye bağlıdır.

Kod vermeden su almayan makinelerde marka bağımsız sıra için [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısına bakabilirsin.

## Sınır nerede biter

Musluk ve hortum kullanıcıya aittir; pense gerektiren filtre temizliği ve hortumun makinenin içine giden tarafı değildir. LG'nin genel uyarısı açık: **cihazın herhangi bir parçasını onarmayın veya değiştirmeyin**; cihaz tamiri yalnızca yetkili personel tarafından yapılmalı.

⛔ **Kendin-çöz sınırı burada biter.** Evde su var, musluk açık, hortum düz ve 1E sürüyor: makineyi kapat, fişini çek ve yetkili LG servisine başvur.

## Servisi aramadan önce iki dakikalık özet

1. Evdeki başka musluklardan su geliyor mu?
2. Makinenin musluğu sonuna kadar açık mı?
3. Giriş hortumu kıvrık ya da ezik mi?
4. Giriş filtresi en son ne zaman temizlendi?
5. Kod programın hangi anında çıktı?

Bu beşine cevabın varsa servise "makine su almıyor" yerine somut bir tablo anlatabilirsin. LG'nin diğer kodları için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
