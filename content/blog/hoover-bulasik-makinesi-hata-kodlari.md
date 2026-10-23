---
title: "Hoover bulaşık makinesi hata kodları: E2, E3, E4, E8"
description: "Hoover bulaşık makinesinde E2, E3, E4, E8, E18 ve E21 ne anlatıyor? Kılavuzun hata tablosu, ekransız modelde ışık sayımı ve evde yapılacak kontroller."
slug: "hoover-bulasik-makinesi-hata-kodlari"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3). origin/main 75980e0 content/blog'da slug/başlık/gövde "hoover" grep 0 sonuç.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "hoover bulaşık makinesi h" → 1. hata kodları, 2. hangi ülkenin, 3. h dish 300;
#   "hoover bulaşık makinesi a" → 1. arızaları, 2. a101, 3. arıza kodları. GSC: satır yok.
# Belge: Hoover HF 3E53E0W-17 ve HF 6C7F0X-17 kullanım kılavuzları (TR), hoover-home.com ürün sayfası → page-data.json → cloudfront PDF,
#   bu koşuda HTTP 200, md5 5f6058c164d737e0b2b1bd76de17483d ve 255d0c8bda1be774bc49b056d46103d0.
# BİLEREK YAZILMAYANLAR: tablo dışındaki kodların anlamı · ısıtıcı/pompa teşhisi · fiyat (#46).
#   Alıntı denetimi: hoover-bulasik-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu", "Küçük fırça", "Emici bez"]
steps:
  - "Ekrandaki kodu ya da ekransız modelde yanıp sönen ışığı not et."
  - "E2 ya da SU YOK için musluğun açık olduğuna ve giriş hortumunun bükülmediğine bak."
  - "Musluğu kapatıp giriş hortumunu makinenin arkasından sök, ağzındaki kum filtresini kontrol et."
  - "E3 ve E4 için tahliye hortumunu ve evdeki sifonu kontrol et."
  - "E3, E4, E8, E18 ve E21 için makinenin dibindeki filtre ünitesini çıkarıp musluk altında yıka, düzgün geri tak."
  - "Diğer kodlarda makineyi kapat, fişi çek, bir dakika bekle, yeniden bir program başlat."
  - "Kod tekrar ederse kodu not edip yetkili servise bildir."
faq:
  - q: "Hoover bulaşık makinesinde E8 hatası ne demek?"
    a: "Kılavuza göre E8, su ısıtma elemanının düzgün çalışmadığını ya da filtre plakasının tıkalı olduğunu gösteriyor ve çözüm olarak filtre plakasını temizlemen isteniyor. E18 için de aynı açıklama veriliyor. Filtre temizken kod sürüyorsa ısıtıcı tarafı servis işidir."
  - q: "E21 hatası neden çıkar?"
    a: "Kılavuz E21'i su seviyesi problemleri olarak açıklıyor ve tıkalı filtre plakasını kontrol edip temizlemeni öneriyor."
  - q: "Ekranı olmayan modelde hata nasıl görünür?"
    a: "Kılavuza göre ekransız modellerde tüm ışıklar hata numarası kadar yanıp söner, ardından 5 saniye durur. Program çalışırken arıza olursa seçili programın ışığı hızla yanıp söner ve kesik kesik bir ses duyulur; makineyi açma/kapatma düğmesiyle kapatıp su, hortum ve filtreleri kontrol ettikten sonra programı yeniden ayarlaman isteniyor."
  - q: "E4 su sızıntısı uyarısında ne yapmalıyım?"
    a: "Kılavuz E4 için tahliye hortumunun bükülmediğini, filtrenin ve sifonun tıkalı olmadığını kontrol etmeni söylüyor. Makinede taşan suyu otomatik boşaltan bir taşma güvenlik cihazı var; bunun doğru çalışması için makineyi çalışırken hareket ettirme ya da eğme."
images:
  coverAlt: "Mutfak tezgâhının altına yerleştirilmiş beyaz bir bulaşık makinesinin kapağı ve kontrol paneli"
  steps:
    - "Bulaşık makinesinin panelinde yanan kısa bir harf ve sayı kodu"
    - "Tezgâh altındaki su musluğuna bağlı bir giriş hortumu"
    - "Makinenin arkasından sökülmüş hortumun ağzındaki küçük kum filtresi"
    - "Lavabo altındaki sifona bağlanmış gri bir tahliye hortumu"
    - "Musluk altında yıkanan silindir biçimli bulaşık makinesi filtresi"
    - "Prizden çekilmiş fiş ve kapağı kapalı bulaşık makinesi"
    - "Kapalı bir alet çantası ve yanında katlanmış bir kullanma kılavuzu"
---

Hoover bulaşık makinen kısa bir sesli sinyal verdi, ekranda E ile başlayan bir kod belirdi ve yıkama durdu. Ekransız modelde ise bütün ışıklar sırayla yanıp sönmeye başladı. Hoover'ın HF 3E53E0W-17 ve HF 6C7F0X-17 modellerine ait Türkçe kullanım kılavuzları aynı hata tablosunu veriyor ve altı kodu açıklıyor. Bu yazıda tabloyu, ekransız modellerde ışıkları nasıl okuyacağını ve servisi aramadan önce yapabileceklerini topladık. Kılavuzlar bu modellere ait; senin makinende panel ve düğme adları farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E2 su dolmuyor, E3 suyu boşaltmıyor, E4 su sızıntısı, E8 ve E18 ısıtma ya da tıkalı filtre plakası, E21 su seviyesi. Musluk, hortumlar, sifon ve filtreler sende. Diğer kodlarda kapat, fişi çek, bir dakika bekle, yeniden başlat. Kod dönerse yetkili servis.

## Kodlar ne söylüyor

Kılavuza göre göstergeli modellerde hata, ardından sayı gelen **E** harfiyle ve kısa bir sesli sinyalle bildirilir: Hata 2 = E2. Ekransız modellerde **tüm ışıklar hatanın kodu kadar yanıp söner**, sonra 5 saniye durur ve sayım tekrar eder.

| Kod | Kılavuza göre anlamı | Ne yapılır |
|---|---|---|
| **E2** / "SU YOK" | Makineye su dolmuyor | 🛠️ Musluk, giriş hortumu, kum filtresi |
| **E3** | Suyu boşaltmıyor | 🛠️ Tahliye hortumu, filtre, sifon |
| **E4** | Su sızıntısı | 🛠️ Tahliye hortumu, filtre, sifon |
| **E8** | Isıtma elemanı düzgün çalışmıyor ya da filtre plakası tıkalı | 🛠️ Filtre plakasını temizle |
| **E18** | Isıtma elemanı düzgün çalışmıyor ya da filtre plakası tıkalı | 🛠️ Filtre plakasını temizle |
| **E21** | Su seviyesi problemleri | 🛠️ Filtre plakasını temizle |
| **Diğer kodlar** | Tabloda açıklanmıyor | ⏳ Kapat, fişi çek, bir dakika bekle |

## Adım adım: evde denenecekler

**1. Kodu not et.** Ekrandaki yazıyı olduğu gibi kâğıda yaz. Ekransız modelde ışıkların kaç kez yanıp söndüğünü say ve 5 saniyelik aradan sonra bir tur daha sayarak doğrula.

**2. E2: musluk ve hortum.** Kılavuzun ilk kontrolleri: **su beslemesinin açık olduğundan, su besleme hortumunun bükülmediğinden ve ezilmediğinden emin olun.** Tezgâh altındaki musluk bazen dolap düzenlerken kısılır; tamamen açık olduğuna bak. Boşaltma borusunun uygun yükseklikte olması da aynı satırda sayılıyor.

**3. E2: kum filtresi.** Kılavuzun tarifi: **su beslemesini kapatın, bulaşık makinesinin arkasından su besleme hortumunun vidasını sökün ve "kum" filtresinin tıkanmadığını kontrol edin.** Hortumda kalan su için altına bez ya da kap koy. Takarken vidayı elle sık, musluğu açıp sızıntı olup olmadığına bak. Ayrıntılar [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısında.

**4. E3 ve E4: tahliye ve sifon.** Bu iki kodun çözümü aynı: **boşaltma hortumunun bükülmediğinden, sıkışmadığından veya engellenmediğinden ve filtrenin tıkanmadığından emin olun; sifonun tıkanmadığından emin olun.** Lavabo altındaki sifon bağlantısında tortu birikmişse su geri döner. Kılavuz makinede taşan suyu otomatik boşaltan bir **taşma güvenlik cihazı** bulunduğunu, bunun doğru çalışması için makineyi çalışırken hareket ettirmemen ve eğmemen gerektiğini de yazıyor.

**5. Filtreleri temizle.** E3, E4, E8, E18 ve E21'in hepsinde filtre ya da filtre plakası geçiyor. Kılavuza göre filtre sistemi bir merkez kap, bir mikro filtre ve düz ince tel kafesli bir filtreden oluşuyor. Filtre ünitesini **kolu saat yönünün tersine çevirip yukarı çekerek** çıkar, ince tel kafesli filtreyi ayır ve hepsini musluk altında yıka; gerekirse küçük bir fırça kullan. Geri takarken filtrenin yerine tam oturduğundan emin ol; kılavuz filtreler takılı değilken makineyi **kesinlikle çalıştırmamanı** söylüyor. Ayrıntılı yöntem [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

**6. Diğer kodlar.** Tablo dışındaki her kod için kılavuzun önerisi: **bulaşık makinesini kapatın ve fişini çekin, bir dakika bekleyin. Makineyi açın ve bir program başlatın.** Sıfırlama ayrıntıları [Hoover bulaşık makinesi resetleme](/blog/hoover-bulasik-makinesi-resetleme/) yazısında.

**7. Sürüyorsa servis.** Aynı satırın devamı: **hata tekrar meydana gelirse Yetkili Müşteri Hizmetleri Merkezi ile iletişime geçin.** Filtreler temiz olduğu hâlde E8 ya da E18 sürüyorsa kılavuzun saydığı diğer olasılık ısıtma elemanıdır; bu parça makinenin içinde ve servis işidir.

## Kod çıkmadan yaşanan sorunlar

Kılavuzun "diğer arızalar" tablosu kod olmadan görülen belirtileri de topluyor. Hiç program çalışmıyorsa fişin takılı, açma/kapatma düğmesine basılmış ve kapağın kapalı olduğuna bak. Makine suyu sürekli boşaltıyorsa tablo boşaltma borusunun konumunun çok alçak olabileceğini, borunun zeminden en az 40 cm yukarı kaldırılması gerektiğini yazıyor. Suyu boşaltmama satırında, kılavuzun ifadesiyle "duvardaki priz bağlantısı yukarı değil aşağıya bakıyorsa" yetkili bir teknisyen çağrılması isteniyor. Genel liste [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) sayfasında.

## Ne zaman servis

- Filtreler ve hortumlar temiz olduğu hâlde aynı kod dönüyorsa
- E8 ya da E18 filtre temizliğinden sonra da sürüyorsa
- Makinenin altından su geliyorsa
- Sigorta makineyi her açtığında atıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum ağzı, sifon ve filtreler sende; ısıtma elemanı, pompa, su seviyesi algılama, kart ve kasanın içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (tip etiketinde yazar)?
2. Ekranda hangi kod var, ya da ışıklar kaç kez yanıp sönüyor?
3. Musluk ve kum filtresini kontrol ettin mi?
4. Filtre ünitesini yıkayıp düzgün taktın mı?
5. Fişi çekip yeniden başlattıktan sonra kod döndü mü?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
