---
title: "Bosch çamaşır makinesi E16 hatası"
description: "Bosch çamaşır makinesi E16 (F16) hatası: Bosch'a göre kapak açık. Kapağı doğru kapatma, lastik manşona sıkışan çamaşır ve servis sınırı adım adım."
slug: "bosch-camasir-makinesi-e16-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF'ler pdftotext -layout ile okundu, yeni nesil tablo satırları sayfa görüntüsüyle teyit edildi.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  W) Bosch TR E16 sayfası  https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/hata-e16-veya-f16-camasir-makinesi  md5 5795d9056ffddd2465eaad88731efc7a
#  A) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d
#  I) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
#  H) WGA142X1TR  https://media3.bosch-home.com/Documents/9001583102_B.pdf  52 s.  md5 42506a8ca9a5e07e2a54a74b856293f4
# W birebir: "Hata E16 / F16: Kapak açık" / "Kapağı kapatın. Eğer hata düzeltilemiyorsa lütfen müşteri hizmetlerimiz ile iletişime geçin ve bir servis randevusu ayarlayın."
# ⚠️ E16 kodu indirilen KILAVUZLARIN tablosunda geçmiyor (kılavuzlar kapak durumunu sembolle gösteriyor). Kodun anlamı ve iki adımlı talimat YALNIZ W'den.
#   Kılavuzlardan alınanlar kapak kapatmanın genel Bosch talimatlarıdır ve gövdede "Bosch kılavuzları kapak uyarısı için..." diye ayrı atıfla verildi, E16'nın satırıymış gibi sunulmadı:
#   A s.20 "Çamaşır doldurma kapağı ve lastik manşon arasına çamaşır sıkışmamış olmasına dikkat ediniz ve çamaşır doldurma kapağını kapatınız."
#   A s.29 kapak sembolü yanıp söner: "Muhtemelen çamaşır sıkışmış olabilir. Lütfen çamaşır doldurma kapağını yeniden açıp kapatınız ve Başlat/Beklet tuşuna basınız." / "Gerekirse cihazı kapatınız ve yeniden açınız."
#   A s.30 "Program çalışmaya başlamazsa: ... Çamaşır doldurma kapağı kapalı mı? ... Çocuk emniyeti aktifleştirildi mi?"
#   I s.42-43 / H s.39: "Kapak kapatılmamış. 1. Kapağı kapatınız. 2. ... Başlat / Reload tuşuna basınız." · "Çamaşır kapağa sıkışmış. 1. Kapağı yeniden açınız. 2. Sıkışan çamaşırları çıkarınız. 3. Kapağı kapatınız. 4. ..."
#   A s.31 "Bir hatayı kendiniz halledemiyorsanız (Kapatma/Açma sonrasında) ...: Program ayar düğmesi Kapalı (İptal) ... Elektrik fişini prizden çekip çıkarınız. Su musluğunu kapatınız ve yetkili servisi çağırınız."
# Bilerek YAZILMAYANLAR: "E16 = kapı kilidi / kilit anahtarı arızası" teşhisi (W'de yok); E34/F34 (TR belgelerinde yok); kilit mekanizmasına müdahale.
# Alıntı denetim tablosu: bosch-camasir-makinesi-e16-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Kapağı yeniden aç ve kapak ile lastik manşon arasına bak."
  - "Arada kalan çamaşırı tamburun içine al ya da çıkar."
  - "Kapağı kapat ve tam kapandığından emin ol."
  - "Programı başlatmak için Başlat tuşuna bas."
  - "Kod sürüyorsa cihazı kapatıp yeniden aç, programı seçip yeniden başlat."
  - "E16 hâlâ geliyorsa cihazı kapat, fişini çek, musluğu kapat ve yetkili servisle randevu ayarla."
faq:
  - q: "Bosch çamaşır makinesi E16 hatası ne demek?"
    a: "Bosch'un Türkiye destek sayfasındaki karşılığı iki kelime: kapak açık. Bosch aynı kodu eski modellerde F16 olarak da yazıyor. Sayfanın verdiği talimat da kısa: kapağı kapatın; hata düzeltilemiyorsa müşteri hizmetleriyle iletişime geçip servis randevusu ayarlayın."
  - q: "Kapak kapalı görünüyor ama E16 gitmiyor, neye bakmalıyım?"
    a: "Bosch kılavuzları kapakla ilgili uyarıda çamaşırın kapağa sıkışmış olabileceğini yazıyor ve kapağın yeniden açılıp sıkışan çamaşırların çıkarılmasını, sonra kapağın kapatılıp programın başlatılmasını istiyor. Yükleme bölümünde de kapak ile lastik manşon arasına çamaşır sıkışmamasına dikkat edilmesi isteniyor."
  - q: "E16 kapı kilidi bozuk demek mi?"
    a: "Bosch'un E16 sayfası böyle bir teşhis koymuyor; kodun karşılığını yalnızca 'kapak açık' olarak veriyor. Kapak doğru kapatıldığı hâlde hata düzelmiyorsa Bosch'un yönlendirmesi müşteri hizmetleri ve servis randevusudur; sebebi servis belirler."
  - q: "Program bitti ama kapak açılmıyor, bu E16 ile ilgili mi?"
    a: "Hayır, o farklı bir durum. Bosch kılavuzlarına göre sıcaklık ya da su seviyesi çok yüksekse kapak güvenlik için açılmaz; sıcaklığın düşmesi beklenir ya da uygun bir boşaltma programı seçilir. Elektrik kesintisinde kapak, kılavuzda anlatılan acil kilit açma mekanizmasıyla açılır."
images:
  coverAlt: "Çamaşır makinesinin yarı aralık kapağı ile gri lastik manşon arasından taşan bir havlu ucu"
---

Programı seçtin, başlat tuşuna bastın; makine çalışmadı ve ekranda **E16** yazıyor. Bosch'un Türkiye destek sayfasında bu kodun karşılığı iki kelimedir: **"Kapak açık."** Talimat da iki adımlı: **kapağı kapatın**; hata düzeltilemiyorsa müşteri hizmetleriyle iletişime geçip servis randevusu ayarlayın. Bu yazıda o kısa talimatı, Bosch kullanım kılavuzlarının kapak kapatma ve yükleme bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E16 (eski modellerde F16) = Bosch'a göre kapak açık. Sıra şu: kapağı yeniden aç → kapak ile lastik manşon arasına sıkışan çamaşırı al → kapağı kapat → Başlat → gerekirse kapat-aç. Kapak kapalıyken E16 sürüyorsa → fişi çek, musluğu kapat, yetkili servis.

## Adım adım: evde denenecekler

**1. Kapağı yeniden aç.** Bosch kılavuzları kapakla ilgili uyarıda ilk olarak **çamaşırın kapağa sıkışmış olabileceğini** yazıyor ve kapağın **yeniden açılmasını** istiyor. Kapağı aç ve kapak ile tamburun ağzındaki **lastik manşon** arasına bak.

**2. Arada kalan çamaşırı al.** Bir kol, çorap ya da havlu ucu bu aralığa taşmışsa Bosch'un talimatı **sıkışan çamaşırları çıkarmak**tır. Yükleme bölümündeki uyarı da aynı noktaya bakar: kapak kapatılırken **kapak ile lastik manşon arasına çamaşır sıkışmamasına** dikkat edilmeli.

**3. Kapağı kapat.** Bosch'un E16 sayfasındaki ilk talimat budur: **kapağı kapatın.** Eski nesil kılavuz, gerekirse kapağın **bastırılarak** kapatılmasını da öneriyor.

**4. Programı başlat.** Kapak kapandıktan sonra programı başlatmak için **Başlat** tuşuna bas (modele göre tuşun adı Başlat/Beklet ya da Başlat/Reload olabilir).

**5. Gerekirse kapat ve aç.** Eski nesil Bosch kılavuzu kapak uyarısı sürerse **cihazın kapatılıp yeniden açılmasını**, programın seçilip kişisel ayarların yapılmasını ve programın yeniden başlatılmasını tarif ediyor.

**6. Hata sürüyorsa dur.** Bosch'un E16 sayfasının ikinci cümlesi burada devreye girer: hata düzeltilemiyorsa **müşteri hizmetleriyle iletişime geç ve servis randevusu ayarla.** Kılavuzun genel talimatı da aynı yönde: kapatma/açma sonrasında giderilemeyen bir hatada program düğmesini **Kapalı (İptal)** konumuna getir, **fişi çek**, **musluğu kapat** ve yetkili servisi çağır.

## E16 tam olarak neyi söylüyor?

Bosch kodu iki önekle yazıyor: destek sayfası bu hatayı **"E16 / F16"** diye verir. Eski modellerde F16, yenilerde E16 görünür; anlatılan durum aynıdır.

Kodun metni yalnızca **kapağın açık** olduğunu söyler. Bosch sayfası bir parça arızasından söz etmiyor; bu yüzden ilk iş her zaman kapağın gerçekten ve tam kapandığını görmektir. Bosch kılavuzlarının arıza tablosunda da "program çalışmaya başlamıyor" satırının sebepleri arasında **kapağın kapatılmamış** olması sayılır.

Aynı satırda iki komşu sebep daha var ve E16'yla karıştırılabilir:

- **Çocuk kilidi** etkin olabilir. Bosch'un talimatı kilidi devre dışı bırakmaktır; yöntem modelin kılavuzunda yazar.
- **Kalan süre / bitiş zamanı** ayarlanmış olabilir; makine bozuk değildir, ayarlanan saati bekliyordur.

Kod vermeden çalışmayan makineler için genel sıra: [Çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/).

## Kapağı zorlamadan: açılmayan kapak ayrı bir konu

E16 kapağın **kapanmamasıyla** ilgilidir; programın sonunda kapağın **açılmaması** başka bir durumdur. Bosch kılavuzlarına göre:

- **Sıcaklık çok yüksekse** kapak açılmaz; sıcaklığın düşmesi beklenir.
- **Su seviyesi çok yüksekse** kapak açılmaz; tahliye için uygun bir program seçilir.
- **Elektrik kesintisinde** kapak, kılavuzda anlatılan **acil kilit açma** mekanizmasıyla açılır.

Adım adım sıra için: [Çamaşır makinesinin kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/).

## Sınır nerede biter

Kapak kapalı, arada çamaşır yok, makine kapatılıp açıldı ve E16 hâlâ geliyorsa Bosch kullanıcıya başka bir adım vermiyor: müşteri hizmetleri ve servis randevusu. Kapak kilidi mekanizması sökülmez, zorlanmaz.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **kapak, manşon ve yükleme kullanıcıya; kilit mekanizması servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Kapak ile lastik manşon arasında çamaşır kaldı mı?
2. Kapak tam kapandı mı?
3. Çocuk kilidi ya da kalan süre ayarı açık mı?
4. Cihaz kapatılıp açıldıktan sonra E16 yine geldi mi?

Bosch'un yayımladığı diğer kodlar için: [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/).

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
