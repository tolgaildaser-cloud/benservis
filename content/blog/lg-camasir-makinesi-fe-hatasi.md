---
title: "LG çamaşır makinesi FE hatası: su aşırı doluyor"
description: "LG çamaşır makinesinde FE kodu, LG kılavuzuna göre aşırı akış hatası: olası arızalı su vanası yüzünden su fazla doluyor. Musluk, fiş, su ve servis."
slug: "lg-camasir-makinesi-fe-hatasi"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork C). Konu seçimi: origin/main'de lg-camasir-makinesi-fe-hatasi yok
#   (LG çamaşırda IE, OE, UE, dE, LE tek kod sayfaları ve hata-kodlari merkezi var; FE yalnız hata-kodlari'nda 1, sembolleri-ve-anlamlari'nda 3 kez geçiyor).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) Sorgular.csv'de "lg" + "fe" satırı YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "lg çamaşır makinesi fe":
#   1. "…fe hatası" · 2. "…fe hatası nasıl giderilir" · 3. "…fe hata kodu".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200 application/pdf,
#   md5 yerel kopyalarla (blog-taslaklar/kaynak-lg-camasir-sprint/) aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. pdftotext -layout.
#  (A) F4V5RGP2T kullanma kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  (B) F4V3VYW3WE kullanma kılavuzu https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw  52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  (C) F4Y5EYW0W kullanma kılavuzu  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a
# FE satırı A s.52, B s.43, C s.45 · kullanımdan sonra fiş + su takviyesi kapat A s.6 · tatilde muslukları kapat A s.48 · fişi çek A s.47
#   · acil su tahliyesi/tahliye pompası filtresi A s.49 · dış yüzey su lekesi A s.47 · AE su sızıntısı A s.53 · tamir yalnız yetkili personel A s.6.
# BİLEREK YAZILMAYANLAR: su giriş vanasının sökümü/değişimi (servis) · FE'nin deterjan/köpükten olduğu iddiası (belgede yok) · "reset" yöntemi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: lg-camasir-makinesi-fe-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (suyun soğuması için bekleme hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Çamaşır makinesinin kullanma kılavuzu", "Sığ bir kap", "Kuru bez"]
steps:
  - "Ekranda FE gördüğün anda makineye su veren musluğu kapat."
  - "Güç fişini prizden çek."
  - "Makinenin çevresine ve altına bak; zemine su geldiyse kuru bezle sil."
  - "Tamburdaki su soğuyana kadar bekle; kapağı zorlama."
  - "Kapağı açmak gerekiyorsa kılavuzdaki acil su tahliyesini uygula ve tahliye pompası filtresini yerine sıkıca tak."
  - "Çamaşırları çıkar, kapağı ve kapak lastiğini silip kapağı aralık bırak."
  - "Servis gelene kadar musluğu kapalı tut; makineyi yeniden çalıştırmayı deneme."
  - "LG yetkili servisini ara; servis numarası garanti kartında yazar."
faq:
  - q: "LG çamaşır makinesinde FE hatası ne demek?"
    a: "LG'nin F4V5RGP2T, F4V3VYW3WE ve F4Y5EYW0W kullanma kılavuzlarında FE, aşırı akış hatası başlığıyla geçiyor: olası arızalı su vanası nedeniyle su aşırı doluyor. Yani makine gereğinden fazla su almış."
  - q: "LG FE hatası nasıl giderilir?"
    a: "Evde giderilmez. LG'nin bu kod için verdiği çözüm: su musluğunu kapatın, güç fişini çekin, servisi arayın. Su vanası makinenin içindeki bir parça; kılavuz cihaz tamirinin yalnız yetkili personel tarafından yapılmasını istiyor."
  - q: "Musluğu neden hemen kapatmalıyım?"
    a: "FE, suyun durması gerektiği hâlde gelmeye devam ettiğini anlatan bir kod. Makineye suyu musluk getirdiği için onu kapatmak suyu dışarıdan keser. LG zaten kullanımdan sonra su takviyesinin kapatılmasını, uzun süre kullanılmayacaksa (tatil gibi) musluğun kapatılmasını öneriyor."
  - q: "FE ile AE ve OE arasındaki fark ne?"
    a: "LG tablosunda FE su aşırı doluyor (olası vana arızası), AE su sızıntısı var, OE ise su boşalmıyor ya da yavaş boşalıyor demek. OE'de tahliye hortumu ve filtresi senin işin; FE ve AE'de çözüm servis."
  - q: "Makinede kalan suyu nasıl boşaltırım?"
    a: "Fiş çekiliyken ve su soğuduktan sonra kılavuzdaki acil su tahliyesiyle: tahliye kapağının başlığını aç, tahliye borusunu çek, ucundaki tahliye fişini çıkarıp suyu kaba boşalt, kalan suyu tahliye pompası filtresini sökerek al. Filtreyi geri takarken sızdırmaması için dikkatle yerine oturt."
images:
  coverAlt: "Çamaşır odasında beyaz bir önden yüklemeli çamaşır makinesi ve camından görünen yüksek su seviyesi"
  steps:
    - "Duvardaki su musluğunun kapalı konuma getirilmiş kolu"
    - "Prizden çekilmiş, zeminde duran bir çamaşır makinesi fişi"
    - "Çamaşır makinesinin önündeki zeminde kuru bir bez"
    - "Kapağı kapalı çamaşır makinesinin camından görünen tamburdaki durgun su"
    - "Çamaşır makinesinin önünde açılmış küçük tahliye kapağı ve önünde sığ bir kap"
    - "Kapağı aralık bırakılmış boş bir çamaşır makinesi ve temiz kapak lastiği"
    - "Kapalı duran bir musluk ve ona bağlı beyaz su giriş hortumu"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve garanti kartı"
---

Makine su almaya devam ediyor, ekranda **FE** yazıyor. LG'nin F4V5RGP2T, F4V3VYW3WE ve F4Y5EYW0W kullanma kılavuzlarında bu kodun başlığı **aşırı akış hatası**, açıklaması tek cümle: **olası arızalı su vanası nedeniyle su aşırı doluyor.** Çözüm satırı da aynı netlikte: su musluğunu kapatın, güç fişini çekin, servisi arayın. Aşağıda bu üç talimatın evde nasıl uygulanacağını ve servise kadar dikkat edilecekleri kılavuza dayanarak sıraladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** FE, makinenin gereğinden fazla su aldığını söyler; LG'ye göre olası neden arızalı su vanası. Önce musluğu kapat, sonra fişi çek. Zemine bak, su soğuyunca gerekirse acil tahliye yap, çamaşırları çıkar. Musluğu servis gelene kadar kapalı tut ve LG yetkili servisini ara.

## Ekran ne söylüyor

| Ekranda gördüğün | LG tablosuna göre anlamı | Kim ne yapar |
|---|---|---|
| **FE** | Aşırı akış: olası arızalı su vanası nedeniyle su aşırı doluyor | 🛠️ Musluk kapat, fiş çek → 🔧 servis |
| **PE** | Su seviyesi sensörü hatalı | 🛠️ Musluk kapat, fiş çek → 🔧 servis |
| **AE** | Su sızıntısı var | 🔧 Servis |
| **OE** | Su boşalmıyor ya da yavaş boşalıyor | 🛠️ Tahliye hortumu ve filtresi |
| **1E** | Su yeterince gelmiyor ya da yavaş geliyor | 🛠️ Musluk, hortum, giriş filtresi |

FE'nin kendine has yanı şu: sorun suyun gelmemesi değil, durması gerektiği hâlde gelmeye devam etmesi. Bu yüzden ilk iş suyu dışarıdan kesmek. Su giriş filtresi ise ayrı bir bakım konusu: LG, kireci ve tortuyu tutan bu filtrenin altı ayda bir, su çok sertse daha sık temizlenmesini istiyor. Bu bakım FE'yi gidermez, ama servis sonrasında düzenli bakım listende dursun. Aynı listede tahliye pompası filtresi de var; LG onu da altı ayda bir kontrol edip temiz tutmanı istiyor.

## Adım adım: servise kadar yapılacaklar

**1. Önce musluğu kapat.** LG'nin FE satırındaki ilk talimat su musluğunu kapatmak. Su makineye musluktan geliyor; vana içeride arızalıysa suyu kesebileceğin tek yer musluk. Kodu görür görmez bunu yap.

**2. Fişi çek.** İkinci talimat güç fişini çekmek. Kılavuzun bakım bölümü, cihazla ilgili bir iş yapmadan önce elektrik çarpması riskine karşı fişin çekilmesini istiyor.

**3. Çevreye bak.** Su fazla dolduğunda makinenin önüne ya da altına su gelmiş olabilir. Zemindeki suyu kuru bezle al. LG makinenin dış yüzeyindeki su lekelerinin de hemen silinmesini, önce nemli sonra kuru bezle geçilmesini öneriyor. Makinenin altından su gelmeye devam ediyorsa bu artık sızıntı belirtisi; LG tablosunda **AE** su sızıntısı da doğrudan servis kodu.

**4. Suyun soğumasını bekle, kapağı zorlama.** LG'ye göre cihaz çalışmaya başladıktan sonra güvenlik nedeniyle kapı açılamaz, kapı kilidi simgesi söndükten sonra açılır. İçerisi suyla doluyken kapağı asılarak açmaya çalışma. Kılavuz suyun sıcak olabileceği konusunda uyarıyor ve tahliyeden önce soğumasının beklenmesini istiyor.

**5. Gerekiyorsa acil su tahliyesi.** Kılavuzun bakım bölümündeki sıra: fişi çek, tahliye kapağının başlığını aç ve tahliye borusunu çek, borunun ucundaki tahliye fişini çıkarıp suyu sığ bir kaba boşalt. Kalan suyu almak için tahliye pompası filtresini sök, iplik ve küçük parçaları temizle, sonra sızdırmaması için filtreyi dikkatle ve sıkıca yerine tak, tahliye fişini boruya geri yerleştir. Ayrıntılı tarif [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazısında.

**6. Çamaşırları çıkar.** LG, nemli çamaşırın makinede bekletilmesinin buruşma, renk değişimi ve koku yapabileceğini yazıyor. Kapak açılınca çamaşırları al, kapağı ve kapak lastiğini sil, kapağı kuruması için hafif aralık bırak. Evde çocuk varsa kılavuzun uyarısına göre bunu yalnız gözetim altındayken yap.

**7. Musluğu kapalı tut.** Servis gelene kadar makineyi yeniden çalıştırıp kodun gidip gitmediğini deneme; LG'nin FE satırında böyle bir çözüm yok. LG'nin genel önerisi de bu yönde: kullanımdan sonra fişi çek ve su takviyesini kapat; makine uzun süre kullanılmayacaksa muslukları kapat.

**8. Servisi ara.** FE için LG'nin son talimatı servisi aramak. Kılavuz yerel LG servis numarasının garanti kartında olduğunu ve cihaz tamirinin yalnız yetkili personel tarafından yapılması gerektiğini söylüyor.

## Ne zaman servis

- Ekranda FE gördüğün her durumda (LG'nin tek çözümü servis)
- Musluk kapalıyken bile makinenin altından su geliyorsa
- FE ile birlikte ya da sonrasında AE görürsen
- Acil tahliyeden sonra filtre yuvasından su sızıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, fiş, zemin, acil su tahliyesi, tahliye pompası filtresi ve çamaşırlar sende. Su giriş vanası, makinenin içindeki hortumlar, kart ve paneller uzmanın; LG cihazın panellerini sökmeye çalışmamanı açıkça yazıyor.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne?
2. Ekranda tam olarak FE mi yazıyor?
3. Kod yıkamanın hangi aşamasında çıktı?
4. Zemine su geldi mi, musluk kapalıyken de geliyor mu?
5. Acil tahliye yaptın mı?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. LG'nin bütün kodları [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) sayfasında, sızıntı [LG çamaşır makinesi su kaçırıyor](/blog/lg-camasir-makinesi-su-kaciriyor/) yazısında, ekran simgeleri [LG çamaşır makinesi sembolleri ve anlamları](/blog/lg-camasir-makinesi-sembolleri-ve-anlamlari/) yazısında. Bil, gör, çağır.
