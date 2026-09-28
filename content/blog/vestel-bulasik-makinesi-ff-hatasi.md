---
title: "Vestel bulaşık makinesi FF hatası"
description: "Vestel bulaşık makinesi FF hatası: Vestel'e göre su giriş sistemi arızası. Musluk, giriş hortumu ve hortum filtresi kontrolü adım adım."
slug: "vestel-bulasik-makinesi-ff-hatasi"
date: "2026-09-27"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; pdftotext (düz ve -layout, sayfa sayfa) ile okundu.
# Sayfa numaraları PDF sayfasıdır (pdftotext -f/-l), basılı sayfa numarası değil.
# Web araması bu belgeler için KULLANILMADI: üçünün yeri hub'ın (vestel-bulasik-makinesi-hata-kodlari) provenans bloğundan alındı.
#  A) BM 8402 GI Pro WIFI   https://statik.vestel.com.tr/webfiles/20264050_k.pdf  61 s.  md5 dd6a67c9fefe3c49867c92fa7e66e410  (sayfa atıfları bu belgeye göre)
#  B) BM 10502 X GI WIFI    https://statik.vestel.com.tr/webfiles/20263192_k.pdf  56 s.  md5 bdbd31789107cc96048ad674595fd6ff
#  C) BM-401 (eski nesil)   https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf  46 s.  md5 ebe98e45d57fc21fc293e5c88ab47b8e
# FF satırı ("Basit Arıza Durumunda Yapılması Gerekenler") A s.50 ve B s.49'da BİREBİR aynı:
#   "FF | Su giriş sistemi arızası | Su giriş musluğunun açık olduğundan ve suyun aktığından emin olun.
#    Giriş hortumunu musluktan ayırıp hortumun filtresini temizleyin. Arıza devam ederse servisle iletişime geçin."
# C (eski nesil) tablosunda FF YOK; aynı işi eski nesilde F5 "Su girişi yetersiz." yapıyor (C s.40) — ayrı sayfa: vestel-bulasik-makinesi-f5-hatasi.
# Hortum filtresini temizleme sırası ("önce musluğu kapatınız ve hortumu sökünüz ... musluk altına tutarak temizleyiniz ... yeniden hortum
#   içindeki yerine yerleştiriniz. Hortumu yerine takınız.") yalnız C s.34 "Hortum Filtresi" bölümünde var; A/B'de ayrı bakım başlığı yok.
# Su basıncı "en az 0.03 MPa (0,3 bar), en fazla 1 MPa (10 bar)" A s.13, B s.13, C s.11-12. Güvenlikli hortum uyarısı A s.13, C s.12.
# YAZILMAYANLAR: "FF = su giriş valfi arızası" teşhisi (belgede yok) · akış ölçer/debimetre yorumu (belgede yok) · hortum ya da valf
#   DEĞİŞİMİ (#31) · "fişi çek, bekle, reset" adımı (FF satırında yok) · süre/fiyat/parça tahmini (#46).
# Alıntı denetim tablosu: vestel-bulasik-makinesi-ff-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Küçük bir kap", "Kuru bir bez"]
steps:
  - "Makineyi Açma/Kapama tuşuyla kapat ve fişini prizden çek."
  - "Makineyi besleyen musluğun sonuna kadar açık olduğunu kontrol et."
  - "Mutfakta başka bir musluğu açıp evde su olup olmadığına bak."
  - "Tezgâh altındaki giriş hortumunun bükülmediğini ve ezilmediğini kontrol et."
  - "Musluğu kapat ve giriş hortumunu musluk tarafından ayır; kalan suyu küçük bir kaba al."
  - "Hortumun bağlantı ucundaki filtreyi akan suyun altında temizle ve yerine yerleştir."
  - "Hortumu musluğa geri tak, musluğu sonuna kadar aç ve bağlantıda sızıntı olmadığını kontrol et."
  - "Fişi tak ve programı yeniden başlat; FF sürerse servisle iletişime geç."
faq:
  - q: "Vestel bulaşık makinesi FF hatası ne demek?"
    a: "Vestel'in kullanım kılavuzlarındaki arıza kodu tablosunda FF'nin karşılığı su giriş sistemi arızasıdır. Tablonun çözüm sütunu üç adım veriyor: su giriş musluğunun açık olduğundan ve suyun aktığından emin ol, giriş hortumunu musluktan ayırıp hortumun filtresini temizle, arıza devam ederse servisle iletişime geç."
  - q: "Giriş hortumunun filtresi nerede, nasıl temizlenir?"
    a: "Vestel kılavuzuna göre filtre, su giriş hortumunun bağlantı ucundadır ve şebekeden gelebilecek kum, kil gibi kirleri tutar. Temizlemek için önce musluğu kapat ve hortumu sök; filtreyi hortumdan çıkarıp musluk altına tutarak temizle, yeniden hortumun içindeki yerine yerleştir ve hortumu geri tak."
  - q: "Su basıncı düşükse FF çıkar mı?"
    a: "Vestel kılavuzları musluktan gelen basıncın en az 0,03 MPa (0,3 bar), en fazla 1 MPa (10 bar) olması gerektiğini yazıyor. FF satırı basıncı ayrıca saymıyor; talimatı musluğun açık olması ve suyun akmasıdır. Evde genel bir su kesintisi ya da çok zayıf akış varsa önce onun düzelmesini bekle."
  - q: "Eski Vestel makinemde FF yok, F5 yazıyor. Aynı şey mi?"
    a: "Eski nesil Vestel kılavuzunda FF kodu yok; su girişiyle ilgili kod F5'tir ve karşılığı su girişi yetersizdir. Yeni nesil kılavuzlarda ise F5 basınç sistemi arızası anlamına gelir ve doğrudan servise yönlendirir. Ayrıntısı Vestel bulaşık makinesi F5 hatası yazısında."
  - q: "Hortumda 'güvenlikli hortum' yazıyor, sökebilir miyim?"
    a: "Vestel, bazı modellerde güvenlikli hortum kullanıldığını ve bu hortumda tehlikeli gerilim bulunduğunu belirtiyor: güvenlikli hortum kesilmemeli, kıvrılmasına ve bükülmesine izin verilmemeli. Fişi çekmeden hortuma dokunma; musluk tarafındaki bağlantıyı zorlamadan ayıramıyorsan servise bırak."
images:
  coverAlt: "Tezgâh altında bulaşık makinesine bağlı beyaz su giriş hortumu ve açık duran ara musluk"
---

Bulaşıkları yerleştirdin, programı başlattın ve ekranda **FF** yazıyor. Vestel'in bulaşık makinesi kullanım kılavuzlarındaki arıza kodu tablosunda bu kodun karşılığı kısa: **"Su giriş sistemi arızası."** Tablonun çözüm sütunu da kullanıcıya iş veren iki kod satırından biri: musluğun açık ve suyun akıyor olmasını sağla, giriş hortumunun filtresini temizle; arıza devam ederse servisle iletişime geç. Bu yazıda o talimatı, aynı kılavuzların kurulum ve bakım bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** FF = Vestel'e göre su giriş sistemi arızası. Sıra şu: fişi çek → musluk sonuna kadar açık mı, evde su var mı → hortum bükülmüş mü → musluğu kapatıp hortumu ayır, bağlantı ucundaki filtreyi temizle → geri tak, musluğu aç → yeniden başlat. FF sürüyorsa → servis.

## Adım adım: evde denenecekler

**1. Makineyi kapat ve fişini çek.** Hortuma ve bağlantıya dokunmadan önce makineyi Açma/Kapama tuşuyla kapat, fişini prizden çıkar.

**2. Musluğa bak.** Vestel'in FF talimatının ilk cümlesi bu: **su giriş musluğunun açık olduğundan ve suyun aktığından emin ol.** Kılavuz ayrıca güvenlik için her program bitiminden sonra musluğun kapatılmasını istiyor; bir önceki yıkamadan sonra kapatılan musluğun açılıp açılmadığı ilk bakılacak yerdir.

**3. Evde su var mı?** Mutfakta başka bir musluğu aç. Genel bir kesinti ya da çok zayıf akış varsa makinede yapılacak bir şey yok; suyun gelmesini bekle.

**4. Hortumu izle.** Vestel, cihaz yerine yerleştirilirken **su giriş ve çıkış hortumlarının sıkışmamasına** dikkat edilmesini istiyor. Tezgâh altında hortumun bükülmediğini, dolap kapağıyla ya da makinenin arkasıyla ezilmediğini kontrol et.

**5. Musluğu kapat, hortumu ayır.** FF satırındaki ikinci adım: **giriş hortumunu musluktan ayır.** Vestel'in bakım bölümü bu iş için sırayı da veriyor: önce musluğu kapat, sonra hortumu sök. Hortumda kalan az miktarda su için altına küçük bir kap tut.

**6. Filtreyi temizle.** Hortumun musluk tarafındaki **bağlantı ucunda** küçük bir filtre var. Kılavuzdaki sırayla: filtreyi hortumdan çıkar, **musluk altına tutarak** temizle, yeniden hortumun içindeki yerine yerleştir.

**7. Hortumu geri tak ve sızıntıya bak.** Hortumu musluğa tak. Vestel'e göre bağlantılar yapıldıktan sonra **musluk sonuna kadar açılmalı ve su sızdırmazlığı kontrol edilmelidir.**

**8. Yeniden dene.** Fişi tak, programı başlat. FF yine geliyorsa kılavuzun son adımı geçerli: **servisle iletişime geç.**

## Hortum filtresi ne işe yarıyor?

Vestel kılavuzları, su giriş hortumundaki filtrenin şehir şebekesinden ya da tesisattan zaman zaman gelebilecek **kum, kil gibi kirleri** engellediğini yazıyor ve filtreyle hortumun zaman zaman kontrol edilip gerektiğinde temizlenmesini istiyor. Aynı kılavuzlar, şebekeden gelen bu kirliliğin makineye zarar vermemesi için evin ya da apartmanın girişine filtre takılmasını da öneriyor.

İki not daha:

- **Eski hortumu kullanma.** Vestel, eski cihazdan kalan su giriş hortumu yerine makineyle birlikte verilen yeni hortumun kullanılmasını istiyor.
- **Yeni ya da uzun süre kullanılmamış hortum:** bağlamadan önce içinden bir süre su akıt.

## Su basıncı için Vestel'in verdiği aralık

Kılavuzlara göre musluktan gelen basınç **en az 0,03 MPa (0,3 bar), en fazla 1 MPa (10 bar)** olmalı; 1 MPa'nın üzerindeyse araya basınç düşürücü vana konulmalı. FF satırı basınç ölçümü istemiyor; senin yapacağın kontrol, musluğun tam açık olması ve suyun gerçekten akmasıdır.

## Güvenlikli hortum varsa dikkat

Vestel, bazı modellerde **güvenlikli hortum** kullanıldığını ve bu hortumda **tehlikeli gerilim bulunduğunu** belirtiyor. Kural net: güvenlikli hortumu kesme, kıvrılmasına ve bükülmesine izin verme. Hortuma dokunmadan önce fişin çekili olduğundan emin ol; musluk bağlantısını zorlamadan ayıramıyorsan bu adımı servise bırak.

## Eski nesilde FF yerine F5

Vestel kod tablosunu nesiller arasında değiştirmiş. Eski nesil bir kılavuzda FF hiç yok; su girişi sorunu **F5 — "Su girişi yetersiz"** olarak geçiyor ve aynı kontrolleri istiyor. Yeni nesilde ise F5 **basınç sistemi arızası** anlamına gelir ve doğrudan servise yönlendirir. Makinende hangisinin geçerli olduğunu anlamak için [Vestel bulaşık makinesi F5 hatası](/blog/vestel-bulasik-makinesi-f5-hatasi/) yazısına, tüm kod tablosu için [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/) yazısına bakabilirsin. Kod olmadan su almama belirtisi için [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısı da işine yarar.

## Sınır nerede biter

Musluk açık, evde su var, hortum düz, filtre temiz ve FF sürüyorsa Vestel'in tablosu kullanıcıya başka adım vermiyor: **servisle iletişime geç.** Kılavuzun genel kuralı da aynı yönde: kurulum ve onarım işlemleri her zaman yetkili servis tarafından yapılmalı, onarımlar yalnızca teknisyenlerce yapılabilir.

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum ve hortum filtresi kullanıcıya; makinenin içindeki su giriş tarafı servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Musluk sonuna kadar açık mı, evde su var mı?
2. Giriş hortumu bükülmüş ya da ezilmiş mi?
3. Hortumun bağlantı ucundaki filtre temizlendi mi?
4. Hortum geri takıldıktan sonra bağlantıda sızıntı var mı?
5. Makine hangi nesil: ekranda FF mi, F5 mi görünüyor?

Bu beşine cevabın varsa servise "makine su almıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
