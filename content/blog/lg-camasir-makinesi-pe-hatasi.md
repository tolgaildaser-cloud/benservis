---
title: "LG çamaşır makinesi PE hatası: basınç sensörü"
description: "LG çamaşır makinesinde PE kodu, LG kılavuzuna göre su seviyesi sensörü hatası. Musluk, fiş, içerideki su, çamaşırlar ve servis sınırı adım adım."
slug: "lg-camasir-makinesi-pe-hatasi"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork C). Konu seçimi: origin/main'de lg-camasir-makinesi-pe-hatasi yok
#   (LG çamaşırda IE, OE, UE, dE, LE tek kod sayfaları ve hata-kodlari merkezi var; PE yalnız hata-kodlari'nda 1, sembolleri-ve-anlamlari'nda 3 kez geçiyor).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) Sorgular.csv'de "lg" + "pe" satırı YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "lg çamaşır makinesi pe": 1. "…pe hatası" · 2. "…perde yıkama programı".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200 application/pdf,
#   md5 yerel kopyalarla (blog-taslaklar/kaynak-lg-camasir-sprint/) aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. pdftotext -layout.
#  (A) F4V5RGP2T kullanma kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  (B) F4V3VYW3WE kullanma kılavuzu https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw  52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  (C) F4Y5EYW0W kullanma kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a
# PE satırı A s.52, B s.43, C s.45 · uyarı: tamir yalnız yetkili personel A s.6 · fişi çek A s.47 · acil su tahliyesi/tahliye pompası filtresi A s.49
#   · çamaşırı hemen çıkar, kapağı açık bırak A s.47-48 · kapak güvenlik kilidi A s.56 · garanti kartındaki servis numarası A s.52 (dE satırı).
# BİLEREK YAZILMAYANLAR: sensörün yeri, hortumu, kartı (servis) · "reset" kombinasyonu (belgede yok) · PE'nin en sık nedeni iddiası · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: lg-camasir-makinesi-pe-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (suyun soğuması için bekleme hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Çamaşır makinesinin kullanma kılavuzu", "Sığ bir kap ve bez"]
steps:
  - "Ekrandaki kodu tam oku; PE, LG tablosunda su seviyesi sensörü hatasıdır ve 1E, OE ya da FE ile karıştırılmamalı."
  - "Makineye su veren musluğu kapat."
  - "Güç fişini prizden çek."
  - "Tamburda su varsa önce suyun soğumasını bekle; kapağı zorlama."
  - "Gerekiyorsa kılavuzdaki acil su tahliyesini uygula: alt kapağı aç, tahliye borusundan suyu kaba boşalt, sonra tahliye pompası filtresini temizleyip yerine sıkıca tak."
  - "Kapak açılınca çamaşırları çıkar, kapağı ve kapak lastiğini silip kapağı kuruması için aralık bırak."
  - "Makineyi yeniden çalıştırmaya uğraşmadan LG yetkili servisini ara; servis numarası garanti kartında yazar."
faq:
  - q: "LG çamaşır makinesinde PE hatası ne demek?"
    a: "LG'nin F4V5RGP2T, F4V3VYW3WE ve F4Y5EYW0W kullanma kılavuzlarındaki hata tablosunda PE, basınç sensörü hatası başlığıyla geçiyor ve anlamı tek cümle: su seviyesi sensörü hatalı. Makine, içindeki su miktarını bu sensörden öğrenir."
  - q: "PE hatasını evde kendim giderebilir miyim?"
    a: "Hayır. LG'nin bu kod için verdiği çözüm üç adım: su musluğunu kapatın, güç fişini çekin, servisi arayın. Kılavuz ayrıca cihaz tamirinin yalnız yetkili personel tarafından yapılmasını, deneyimsiz kişilerin tamiratının yaralanmaya ya da ciddi arızaya yol açabileceğini yazıyor."
  - q: "PE hatası verdi, makinede su kaldı; ne yapmalıyım?"
    a: "Fiş çekiliyken suyun soğumasını bekle. Kılavuz, tahliye pompası filtresini temizlemeden önce suyun soğumasının sağlanmasını istiyor ve acil durumda kapıyı açmak için acil su tahliyesini tarif ediyor: alt kapağı aç, tahliye borusunu çek, tahliye fişini çıkarıp suyu boşalt, kalan suyu filtreyi sökerek al."
  - q: "PE ile 1E ve FE aynı şey mi?"
    a: "Değil. LG tablosunda 1E su girişi hatası (su gelmiyor ya da yavaş geliyor), FE aşırı akış hatası (olası arızalı su vanası nedeniyle su aşırı doluyor), PE ise su seviyesi sensörünün kendisinin hatalı olması. 1E'de musluk ve hortum kontrolü senin işin; FE ve PE'de musluk kapatılıp servis çağrılır."
  - q: "Kapak neden açılmıyor?"
    a: "LG kılavuzuna göre cihaz çalışmaya başladıktan sonra güvenlik nedeniyle kapı açılamaz; kapı kilidi simgesi söndükten sonra kapak güvenle açılır. İçeride su varken kapağı zorlama, kılavuzdaki acil su tahliyesini kullan."
images:
  coverAlt: "Çamaşır odasında kapağı kapalı beyaz bir önden yüklemeli çamaşır makinesi ve yanında duvardaki su musluğu"
  steps:
    - "Çamaşır makinesinin kontrol panelinde iki harfli bir kod gösteren küçük ekranın yakın planı"
    - "Duvardaki su musluğuna bağlı beyaz su giriş hortumu"
    - "Prizden çekilmiş, zeminde duran bir çamaşır makinesi fişi"
    - "Kapağı kapalı çamaşır makinesinin camından görünen tamburdaki durgun su"
    - "Çamaşır makinesinin önünde açılmış küçük tahliye kapağı ve önünde sığ bir kap"
    - "Kapağı aralık bırakılmış boş bir çamaşır makinesi ve temiz kapak lastiği"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve garanti kartı"
---

Yıkama yarıda kaldı, ekranda **PE** yazıyor. LG'nin F4V5RGP2T, F4V3VYW3WE ve F4Y5EYW0W kullanma kılavuzlarındaki hata tablosu bu kodu tek satırla açıklıyor: **su seviyesi sensörü hatalı**. Çözüm satırı da kısa: musluğu kapat, fişi çek, servisi ara. Bu yazı, servise kadar evde yapabileceğin güvenli işleri ve yapmaman gerekenleri kılavuzun kendi cümleleriyle sıralıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** PE, LG'ye göre basınç (su seviyesi) sensörü hatası; evde çözülecek bir ayar değil. Musluğu kapat, fişi çek. İçeride su varsa soğumasını bekle, gerekirse kılavuzdaki acil su tahliyesini uygula, çamaşırları çıkar ve LG yetkili servisini ara.

## Ekran ne söylüyor

| Ekranda gördüğün | LG tablosuna göre anlamı | Kim ne yapar |
|---|---|---|
| **PE** | Su seviyesi sensörü hatalı (basınç sensörü hatası) | 🛠️ Musluk kapat, fiş çek → 🔧 servis |
| **FE** | Olası arızalı su vanası nedeniyle su aşırı doluyor | 🛠️ Musluk kapat, fiş çek → 🔧 servis |
| **1E** | Su yeterince gelmiyor ya da yavaş geliyor | 🛠️ Musluk, hortum, giriş filtresi |
| **OE** | Su boşalmıyor ya da yavaş boşalıyor | 🛠️ Tahliye hortumu ve filtresi |
| **AE** | Su sızıntısı var | 🔧 Servis |

PE'yi diğer su kodlarından ayırmak önemli: 1E ve OE'de sorun çoğu zaman musluk, hortum ya da filtrede, yani senin elinin yettiği yerde. PE'de ise arızalı olan, makinenin su miktarını ölçen parçanın kendisi. Servis sonrasında düzenli bakımı aksatma: LG, su giriş filtresinin altı ayda bir, tahliye pompası filtresinin de altı ayda bir kontrol edilip temizlenmesini istiyor.

## Adım adım: servise kadar yapılacaklar

**1. Kodu doğru oku.** Ekrandaki iki harfe bir kez daha bak. PE, LG'nin tablosunda "basınç sensör hatası" başlığıyla geçiyor. Benzer görünen **1E** su girişi, **FE** aşırı akış, **OE** su çıkışı hatası; her birinin yapılacakları farklı. Kodu not al, servis bunu soracak.

**2. Musluğu kapat.** LG'nin PE için ilk talimatı su musluğunu kapatmak. Kılavuzun elektrik bölümü de zaten kullanımdan sonra su takviyesinin kapatılmasını öneriyor. Sensör suyun seviyesini doğru okuyamadığında makineye su gitmeye devam etmesin.

**3. Fişi çek.** İkinci talimat güç fişini çekmek. Kılavuzun bakım bölümü, cihazla ilgili herhangi bir iş yapmadan önce elektrik çarpması riskine karşı fişin çekilmesini istiyor. Fiş elinin kolay yetiştiği yerde olmalı; LG, prizin cihazın bir yanında bir metre mesafede ve kolay erişilebilir olmasını söylüyor.

**4. Suyun soğumasını bekle, kapağı zorlama.** LG'ye göre cihaz çalışmaya başladıktan sonra güvenlik nedeniyle kapı açılamaz; kapı kilidi simgesi söndükten sonra açılır. Tamburda su görüyorsan kapağı asılarak açmaya çalışma. Kılavuz, tahliye pompası filtresini açmadan önce suyun soğumasının sağlanmasını istiyor ve suyun sıcak olabileceği konusunda uyarıyor.

**5. Gerekiyorsa acil su tahliyesi.** Kılavuzun bakım bölümü, kapıyı acil durumda açmak için şu sırayı veriyor: fişi çek, tahliye kapağının başlığını aç ve tahliye borusunu çek, borunun ucundaki tahliye fişini çıkarıp suyu sığ bir kaba boşalt. Kalan suyu almak için tahliye pompası filtresini sök, içindeki ipliği ve küçük parçaları temizle. Filtreyi geri takarken sızdırmaması için dikkatle ve sıkıca yerine oturt, tahliye fişini boruya geri tak, kapak başlığını kapat. Ayrıntılı tarif [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazısında.

**6. Çamaşırları çıkar, içini kurut.** LG, nemli çamaşırın makinede kalmasının buruşmaya, renk değişimine ve kokuya yol açabileceğini yazıyor. Kapak açılınca çamaşırları al, kapağı ve kapak lastiğini sil, kapağı kuruması için hafif aralık bırak. Kılavuzun uyarısı: kapağı açık bırakıyorsan evde çocuklar gözetim altında olsun.

**7. Servisi ara.** PE için LG'nin son talimatı açık: servisi arayın. Kılavuz, yerel LG servis numarasının garanti kartında yazdığını ve cihaz tamirinin yalnız yetkili personel tarafından yapılması gerektiğini söylüyor. Makineyi defalarca açıp kapatarak kodu silmeye çalışma; tabloda böyle bir çözüm yok. Servis gelene kadar musluğu kapalı, fişi çekili tut.

## Ne zaman servis

- Ekranda PE gördüğün her durumda (LG'nin tek çözümü servis)
- PE ile birlikte makinenin altında su görürsen (AE su sızıntısı da servis kodu)
- Acil tahliyeden sonra filtre yuvasından su sızıyorsa
- Kapak, su boşaltıldıktan ve kapı kilidi simgesi söndükten sonra da açılmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, fiş, acil su tahliyesi, tahliye pompası filtresi ve çamaşırlar sende. Su seviyesi sensörü, hortumu, kart ve makinenin panelleri uzmanın; LG cihazın panellerini sökmeye çalışmamanı açıkça yazıyor.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne?
2. Ekranda tam olarak PE mi yazıyor?
3. Kod yıkamanın hangi aşamasında çıktı?
4. Tamburda su kaldı mı, acil tahliye yaptın mı?
5. Makinenin altında ya da çevresinde su var mı?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. LG'nin bütün kodları [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) sayfasında, ekran simgeleri [LG çamaşır makinesi sembolleri ve anlamları](/blog/lg-camasir-makinesi-sembolleri-ve-anlamlari/) yazısında, su gelmiyorsa [LG çamaşır makinesi IE hatası](/blog/lg-camasir-makinesi-ie-hatasi/), su boşalmıyorsa [LG çamaşır makinesi OE hatası](/blog/lg-camasir-makinesi-oe-hatasi/) yazısında. Bil, gör, çağır.
