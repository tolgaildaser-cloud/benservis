---
title: "Bosch çamaşır makinesi E:30-10 hatası"
description: "Yeni Bosch çamaşır makinelerinde E:30-10: su girişi sorunu. Musluk, hortum, basınç ve süzgeç kontrolü; 5 dakika bekleyip yeniden başlatma."
slug: "bosch-camasir-makinesi-e30-10-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext -layout ile okundu, tablo satırları sayfa görüntüsüyle (pdftoppm) teyit edildi.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; I ve J, bosch-home.com.tr ürün sayfalarındaki (WGA244A0TR, WGB244A0TR) kılavuz bağlantısından bulundu.
#  I) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679  (sayfa atıfları bu belgeye göre)
#  J) WGB244A0TR  https://media3.bosch-home.com/Documents/9001708433_H.pdf  56 s.  md5 a02d83edad66dc95cd9392b467b767f1
#  A) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d  (yalnız süzgeç temizleme yöntemi, s.27)
# I s.41-42 birebir: "E:30 / -10" ve/veya [musluk sembolü] → "Su basıncı düşük." / "Su girişindeki süzgeçler tıkanmış. ▶ Su girişindeki süzgeçleri temizleyiniz." /
#   "Musluk kapalı. ▶ Musluğu açınız." / "Su giriş hortumu katlanmış veya sıkışmış." / "Su seviyesi ölçüm sistemi arızalı." /
#   "Not: Hata mesajı ile cihaz bir su boşaltma işlemi başlatır. 1. ... yakl. 5 dakika bekleyiniz. 2. Hata mesajını sıfırlamak için cihazı kapatınız. 3. Cihazı tekrar açınız. 4. Hata mesajı yeniden görünürse müşteri hizmetlerini arayınız."
# J s.43 aynı satır ("E:30 -10 / [musluk]"), ek: "Muslukta yeterli su basıncı olup olmadığını kontrol ediniz."
# E:30-20: I s.42 "Manyetik valf arızalı. ▶ Müşteri hizmetlerini arayınız."; J s.43 "Kritik fonksiyon arızası. ▶ Musluğu kapatınız."
# Yeni nesil kılavuzlar süzgecin NASIL temizleneceğini yazmıyor (J: QR animasyon) → yöntem A'dan, gövdede "Bosch'un önceki nesil kılavuzu" diye atıfla verildi.
# Bilerek YAZILMAYANLAR: E:30'un diğer ekleri için genelleme; "valf değiştir"; E:30-10'u E17 ile "aynı kod" ilan etmek (Bosch böyle bir eşleme yapmıyor, yalnız benzer konu).
# Alıntı denetim tablosu: bosch-camasir-makinesi-e30-10-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Havlu"]
steps:
  - "Su musluğunun açık olduğunu kontrol et."
  - "Su giriş hortumunun katlanmadığından ve sıkışmadığından emin ol."
  - "Muslukta yeterli su basıncı olup olmadığını kontrol et."
  - "Musluğu kapat, fişi çek, hortumu musluktan çıkar ve süzgeci küçük bir fırçayla temizle."
  - "Hortumu yeniden bağla, musluğu aç ve fişi tak."
  - "Hata mesajıyla başlayan su boşaltma bitene kadar yaklaşık 5 dakika bekle."
  - "Hata mesajını sıfırlamak için cihazı kapat ve tekrar aç."
  - "Hata mesajı yeniden görünürse Bosch müşteri hizmetlerini ara."
faq:
  - q: "Bosch çamaşır makinesinde E:30-10 ne demek?"
    a: "Yeni nesil Bosch kılavuzlarında E:30-10, su girişiyle ilgili satırdadır ve musluk sembolüyle birlikte görünebilir. Kılavuzun saydığı sebepler: musluk kapalı, su giriş hortumu katlanmış ya da sıkışmış, su girişindeki süzgeçler tıkanmış, su basıncı düşük ya da su seviyesi ölçüm sistemi arızalı."
  - q: "E:30-10 çıkınca makine neden su boşaltıyor?"
    a: "Bosch kılavuzuna göre bu hata mesajıyla birlikte cihaz bir su boşaltma işlemi başlatır. Kılavuz, boşaltma bitene kadar yaklaşık 5 dakika beklenmesini, sonra hata mesajını sıfırlamak için cihazın kapatılıp tekrar açılmasını istiyor."
  - q: "E:30-10 ile E:30-20 aynı şey mi?"
    a: "Hayır. İlk kısım aynı olsa da ek farklı durumu anlatır. WGA244A0TR kılavuzunda E:30-20'nin karşılığı manyetik valf arızasıdır ve talimat müşteri hizmetlerini aramaktır; WGB244A0TR kılavuzunda ise kritik fonksiyon arızası olarak geçer ve ilk talimat musluğu kapatmaktır. E:30-20'de evde yapılacak bir onarım yoktur."
  - q: "Eski Bosch'umda E17 yazıyor, bu yazı bana uyar mı?"
    a: "Konu yakın ama kod farklı. Eski Bosch modelleri su besleme süresinin aşıldığını E17 ya da F17 koduyla gösterir. O kod için ayrı rehberimiz var: Bosch çamaşır makinesi E17 hatası."
images:
  coverAlt: "Yeni nesil bir çamaşır makinesinin dijital ekranında iki parçalı hata kodu ve yanında yanan musluk sembolü"
---

Yeni bir Bosch çamaşır makinen var; program başladı, tambur döndü ama bir süre sonra ekranda **E:30-10** belirdi, belki yanında bir **musluk sembolü** de yanıyor. Bosch'un yeni nesil kullanım kılavuzlarında bu satır su girişine ayrılmıştır. Kılavuzun saydığı sebeplerin çoğu evde kontrol edilebilecek şeylerdir: **musluk kapalı**, **giriş hortumu katlanmış ya da sıkışmış**, **su girişindeki süzgeçler tıkanmış** ya da **su basıncı düşük.** Listenin sonunda bir de "su seviyesi ölçüm sistemi arızalı" satırı var; o kısım servisin alanıdır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:30-10 = su girişi sorunu. Sıra şu: musluk açık mı → hortum katlanmış mı → musluk basıncı yeterli mi → süzgeci temizle → makinenin başlattığı boşaltmanın bitmesini ~5 dakika bekle → kapat-aç. Kod yeniden gelirse → Bosch müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Musluğu kontrol et.** Kılavuzdaki satırlardan biri doğrudan **"Musluk kapalı"** der ve çözüm olarak musluğun açılmasını ister.

**2. Hortumu izle.** Bosch'un talimatı: **su giriş hortumunun katlanmadığından veya sıkışmadığından emin ol.** Hortumu musluktan makinenin arkasına kadar takip et; makine duvara itilirken ya da yanındaki bir dolap ayağının altında ezilmiş olabilir.

**3. Musluk basıncına bak.** WGB244A0TR kılavuzu burada bir adım daha ekliyor: **muslukta yeterli su basıncı olup olmadığını kontrol et.** Aynı muslukta ya da evin başka bir yerinde su zayıf akıyorsa sorun makinede değil, şebekededir. Bosch'un WGA244A0TR tablosu düşük basınç için "gidermek mümkün değil" diyor; yani bu durumda makinede yapılacak bir şey yoktur, basıncın normale dönmesi beklenir.

**4. Süzgeci temizle.** Tablonun talimatı **"Su girişindeki süzgeçleri temizleyiniz"**dir. Yeni nesil kılavuzlar yöntemi ayrıntılı yazmıyor; Bosch'un önceki nesil kılavuzundaki yöntem şöyle: musluğu kapat, fişi çek, hortumu musluktan çıkar ve musluk tarafındaki süzgeci **küçük bir fırçayla** temizle. Önüne havlu koy; hortumda kalan su akabilir.

**5. Yeniden bağla.** Hortumu musluğa yeniden bağla, bağlantıdan su sızmadığını kontrol et, musluğu aç ve fişi tak.

**6. Boşaltmayı bekle.** Bosch'un notu önemli: bu hata mesajıyla birlikte **cihaz kendiliğinden bir su boşaltma işlemi başlatır.** Kılavuz, boşaltma bitene kadar **yaklaşık 5 dakika** beklemeni istiyor. Bu sırada makineyi zorlamaya, kapağı açmaya çalışma.

**7. Kapat ve aç.** Boşaltma bittikten sonra **hata mesajını sıfırlamak için cihazı kapat**, ardından tekrar aç ve programı yeniden başlat.

**8. Kod geri gelirse dur.** Kılavuzun son adımı: **hata mesajı yeniden görünürse müşteri hizmetlerini ara.** Buraya kadar her şey yerindeyse sebep, tablonun son satırındaki su seviyesi ölçüm sistemi olabilir; bu evde bakılacak bir parça değildir.

## Kodu doğru okumak: E:30 tek başına bir anlam taşımaz

Yeni nesil Bosch ekranlarında hata iki parça hâlinde görünür: **E:30** ve arkasından gelen **-10, -20, -80** gibi bir ek. Anlamı belirleyen ektir. Kılavuzlardaki üç satır şöyle:

| Ekrandaki kod | Bosch kılavuzundaki karşılığı | Kim yapar |
|---|---|---|
| **E:30-10** | Su girişi: musluk, hortum, süzgeç, basınç (ya da seviye ölçüm sistemi) | 🛠️ Kontroller sende, sürerse servis |
| **E:30-20** | WGA244A0TR: manyetik valf arızalı · WGB244A0TR: kritik fonksiyon arızası, musluğu kapat | 🔧 Müşteri hizmetleri |
| **E:30-80** | Su tahliye edilemiyor | 🛠️ Hortum ve pompa temizliği |

Suyun gitmediği E:30-80 için ayrı rehberimiz var: [Bosch çamaşır makinesi E:30-80 hatası](/blog/bosch-camasir-makinesi-e30-80-hatasi/).

## Eski Bosch'larda aynı konu: E17

Önceki nesil Bosch makineler su besleme sorununu **E17 / F17** koduyla gösterir; Bosch bunu "su besleme süresi aşıldı" diye tanımlıyor ve kontroller benzer: musluk, hortum, süzgeç. Ekranındaki kod iki haneliyse doğru adres şu: [Bosch çamaşır makinesi E17 hatası](/blog/bosch-camasir-makinesi-e17-hatasi/). Bosch'un yayımladığı iki haneli kodların tamamı: [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/).

## Kod yok ama su girmiyorsa

Bosch kılavuzunda iki durum "hata yoktur" olarak geçer ve telaşa gerek yoktur:

- Program başladığında tambur döner ve **2 dakikaya kadar** süren bir yük algılama yapılır; su girişi bundan sonra gelir.
- Tamburun içinde su görünmüyorsa, su **görünür alanın altında** olabilir.

## Sınır nerede biter

Musluk açık, hortum düz, basınç yeterli, süzgeç temiz ve E:30-10 yeniden geliyorsa Bosch'un kılavuzu kullanıcıya başka bir adım vermiyor. Kılavuzun arıza bölümündeki uyarı açık: usulüne uygun olmayan onarımlar tehlikelidir, onarımı yalnız bunun eğitimini almış uzman personel yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **musluk, hortum ve süzgeç kullanıcıya; valf ve ölçüm sistemi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Musluk açık mı, başka musluklarda su normal akıyor mu?
2. Giriş hortumu katlanmış ya da ezilmiş mi?
3. Süzgeç temizlendi mi?
4. Makinenin başlattığı boşaltma bitti mi, kapat-aç sonrası kod geri geldi mi?
5. Ekrandaki kodun eki tam olarak ne: -10 mu, -20 mi?

Bu soruların cevabı hazırsa servise "makine su almıyor" yerine kodun tam hâlini ve denediklerini anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
