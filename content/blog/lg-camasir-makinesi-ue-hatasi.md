---
title: "LG çamaşır makinesi UE hatası"
description: "LG çamaşır makinesi UE hatası: LG'ye göre dengesizlik algılandı, sıkma durdu. Çamaşırı yeniden dağıtma, yük ekleme ve makine dengesi adım adım."
slug: "lg-camasir-makinesi-ue-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi; pdftotext (-layout ve sayfa sayfa) ile okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle forumdan, servis sitesinden ya da kılavuz arşiv sitesinden alınmadı.
# PDF bağlantıları lg.com/tr ürün destek sayfalarındaki "Kılavuzlar" düğmesinden (gscs-b2c.lge.com, LG'nin kendi alan adı) alındı. Üç resmî LG Türkçe kılavuz, hepsi HTTP 200 application/pdf:
#  A) F4V5RGP2T  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739  (sayfa atıfları bu belgeye göre)
#  B) F4V3VYW3WE https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a
# UE satırı üç belgede birebir aynı (A s.52, B s.42-43, C s.44-45):
#   "UE DENGESİZLİK HATASI | Cihazın, dengesizliği tespit eden ve düzelten bir sistemi vardır. • Kıyafetler döngünün sonunda çok ıslak olabilir, düzgün bir sıkma sağlamak için
#    çamaşırları yeniden düzenleyin. Kapıyı kapatın ve Başlat/Durdur düğmesine basın. Cihazın dönmeye başlaması biraz zaman alabilir. Sıkma gerçekleşmeden önce kapı kilitlenmelidir.
#    Çamaşırlar çok az. Tek tek ağır eşyalar (örneğin banyo paspası, bornoz vb.) yüklendiğinde, bu sistem sıkmayı durdurabilir veya sıkma döngüsünü tamamen kesebilir.
#    • Yükün dengelenmesi için 1 veya 2 kıyafet veya daha küçük eşyalar ekleyin. Kapıyı kapatın ve Başlat/Durdur düğmesine basın. Cihazın sıkmayı yapması için kapı kilitlenmelidir."
# Yükleme (A s.26), ses/titreşim tablosu (A s.53-54), seviyelendirme (A s.16-17), nakliye cıvataları (A s.16).
# Bilerek YAZILMAYANLAR: "UE = motor/rulman/amortisör arızası" (LG metninde yok), "aşırı yük UE yapar" (LG'nin UE satırı az yük ve tek ağır eşyayı sayıyor), söküm, fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-ue-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Su terazisi (isteğe bağlı)"]
steps:
  - "Programı durdur ve kapının kilidi açıldıktan sonra kapağı aç."
  - "Tamburdaki çamaşırları elle ayırıp eşit dağıt."
  - "Tek bir ağır eşya (banyo paspası, bornoz) varsa yükü dengelemek için 1-2 kıyafet ya da daha küçük eşya ekle."
  - "Kapıyı kapat ve Başlat/Durdur düğmesine bas; sıkmanın başlaması biraz zaman alabilir."
  - "UE tekrarlıyorsa makineyi durdur, üst plakanın kenarlarına çapraz bastırarak sallanıp sallanmadığını kontrol et."
  - "Makine sallanıyorsa ayakları çevirerek dört ayağın da zemine tam basmasını sağla; altına tahta ya da karton koyma."
  - "Dengeli makinede ve düzgün dağıtılmış yükte UE sürüyorsa yetkili LG servisine başvur."
faq:
  - q: "LG çamaşır makinesinde UE hatası ne demek?"
    a: "LG'nin Türkçe kullanım kılavuzlarında UE'nin başlığı dengesizlik hatasıdır. LG'ye göre makinede dengesizliği tespit eden ve düzelten bir sistem var; yük dengesizse bu sistem sıkmayı durdurabilir ya da sıkma döngüsünü tamamen kesebilir."
  - q: "Makinede az çamaşır varken neden UE veriyor?"
    a: "LG'nin tablosu bunu açıkça sayıyor: çamaşırlar çok azsa ve tek tek ağır eşyalar (banyo paspası, bornoz gibi) yüklendiyse sistem sıkmayı durdurabilir. LG'nin çözümü yükün dengelenmesi için 1 ya da 2 kıyafet veya daha küçük eşyalar eklemek."
  - q: "UE sonrası çamaşırlar neden ıslak çıkıyor?"
    a: "LG'ye göre dengesizlik algılandığında kıyafetler döngünün sonunda çok ıslak kalabilir. Çamaşırları yeniden düzenleyip kapıyı kapatman ve Başlat/Durdur düğmesine basman gerekiyor; sıkmanın başlaması biraz zaman alabilir ve sıkmadan önce kapı kilitlenmelidir."
  - q: "UE ile LE aynı şey mi?"
    a: "Hayır. LG'nin tablosunda UE dengesizlik hatası, LE ise motor kilitli hatasıdır ve karşılığı motorda aşırı yüklenmedir. İkisinin çözüm adımları farklıdır."
images:
  coverAlt: "Ön yüklemeli beyaz çamaşır makinesinin açık kapağından görünen tamburda tek başına duran kalın bir banyo paspası"
---

Yıkama bitti, sıkma başlamadı ya da yarıda kesildi; çamaşırlar ıslak ve ekranda **UE** yazıyor. LG'nin Türkçe kullanım kılavuzlarındaki hata tablosunda UE'nin başlığı **dengesizlik hatası**. LG'nin açıklaması şu: **"Cihazın, dengesizliği tespit eden ve düzelten bir sistemi vardır."** Tambur içindeki yük dengesiz olduğunda bu sistem sıkmayı durdurabilir ya da sıkma döngüsünü tamamen kesebilir. Kod bir arızadan çok bir korumayı gösterir ve çözümü çoğu zaman elindedir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** UE = LG'ye göre dengesizlik algılandı, sıkma durdu. Sıra şu: kapı kilidi açılınca kapağı aç → çamaşırı eşit dağıt → tek ağır eşya varsa 1-2 parça ekle → kapıyı kapat, Başlat/Durdur. Tekrarlıyorsa makinenin dengesini kontrol et. Dengeli makinede ve düzgün yükte UE sürüyorsa → yetkili LG servisi.

## Adım adım: evde denenecekler

**1. Programı durdur, kilidin açılmasını bekle.** LG'nin sorun giderme tablosundaki sıra: programı durdur ve **kapının kilidi açıldıktan sonra** kıyafetleri yeniden dağıt. Kapağı zorlama; kılavuza göre cihaz çalışmaya başladıktan sonra güvenlik nedeniyle kapı açılamaz.

**2. Çamaşırı eşit dağıt.** LG'nin UE için ilk çözümü: düzgün bir sıkma sağlamak için **çamaşırları yeniden düzenle**. Birbirine dolanmış çamaşırları elle ayır ve tamburun çevresine yay.

**3. Tek ağır eşyaya parça ekle.** LG'nin ikinci satırı: çamaşırlar **çok azsa** ve **tek tek ağır eşyalar** (banyo paspası, bornoz gibi) yüklendiyse sistem sıkmayı durdurabilir. Çözüm: yükün dengelenmesi için **1 ya da 2 kıyafet veya daha küçük eşyalar** ekle.

**4. Kapıyı kapat, yeniden başlat.** Kapıyı kapat ve **Başlat/Durdur** düğmesine bas. LG'ye göre cihazın dönmeye başlaması biraz zaman alabilir ve sıkmadan önce kapı kilitlenmelidir.

**5. Makinenin dengesini kontrol et.** UE tekrarlıyorsa makinenin duruşuna da bak: LG'ye göre cihaz hizalanmamış ve düz durmuyorsa hasar görebilir ya da düzgün çalışmayabilir. LG'nin kurulum bölümündeki test: **üst plakanın kenarlarından çapraz şekilde aşağı bastırdığında** makine hiçbir şekilde yukarı aşağı hareket etmemeli; iki çaprazı da dene.

**6. Ayakları ayarla.** Makine sallanıyorsa LG'nin talimatı: zemin düz değilse ayarlama ayağını gerektiği gibi çevir, **dört ayağın da sabit ve zeminde durduğundan** emin ol. Ayakların altına **tahta vb. parçalar koyma**. Elinde varsa bir su terazisiyle dengeyi kontrol et.

**7. Hâlâ sürüyorsa servise.** Yük dağıtıldı, parça eklendi, makine dengede ve UE her sıkmada geliyorsa kılavuzun bu kod için verdiği kontroller bitmiştir: yetkili LG servisine başvur.

## UE tam olarak neyi söylüyor?

LG'nin tablosunda UE için iki durum var. İlki genel dengesizlik: kıyafetler döngünün sonunda **çok ıslak** kalabilir, çözüm çamaşırı yeniden düzenlemek. İkincisinde yük **fazla değil, az**. LG'ye göre tek başına bir banyo paspası ya da bornoz, sistemin sıkmayı durdurmasına ya da tamamen kesmesine yol açabilir. Bu yüzden UE aldığında ilk refleks çamaşır çıkarmak değil, dağıtmak ve gerekirse eklemek olmalı.

LG'nin sorun giderme tablosu dengesizliği iki yerde daha anar. **"Döngü süreleri normalden daha uzun sürüyor"** satırında çamaşır yükünün çok az olması, ağır ve hafif çamaşırların karıştırılması ve yükün dengesiz olması sayılır; çözüm, benzer ağırlıktaki parçaları birlikte yıkamak ve dolanmış yükü elle dağıtmaktır. **"Döngü sonu ertelendi"** satırında da dengesizlik tespit edildiğinde bunun normal olduğu, ekrandaki kalan sürenin yalnızca tahmini olduğu yazılır.

## Kodu önlemek için: yükleme alışkanlığı

LG kılavuzundaki yükleme önerileri UE'yi doğrudan hedef alır:

- **Büyük ve küçük parçaları bir yüklemede birleştir**; önce büyük parçaları yerleştir.
- Büyük parçalar toplam çamaşırın **yarısından fazla olmamalı**.
- **Tekli parçaları yıkama**; LG'ye göre bu dengenin bozulmasına neden olabilir. Bir ya da iki benzer parça ekle.

Makine yeni kurulduysa bir kontrol daha var: LG, şiddetli titreşimi ve kırılmayı önlemek için **nakliye cıvatalarının ve tutucuların çıkarılmasını** istiyor. Sorun giderme tablosunda da titreme sesinin ilk sebebi paketleme malzemelerinin çıkarılmamış olmasıdır.

Sıkmada gürültü ve titreşim için marka bağımsız sıra [çamaşır makinesi ses ve titreşim](/blog/camasir-makinesi-ses-titresim/) yazısında, kod vermeden sıkma yapmayan makineler için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısında.

## Sınır nerede biter

Yük, ayaklar ve zemin kullanıcıya aittir; makinenin içi değildir. LG'nin uyarısı açık: **cihazın üzerindeki panelleri veya cihazın kendisini sökmeye çalışmayın**; cihaz tamiri yalnızca yetkili personel tarafından yapılmalı.

⛔ **Kendin-çöz sınırı burada biter.** Makine dengede, yük dağıtılmış, tek ağır eşya yok ve UE sürüyor: yetkili LG servisine başvur.

## Servisi aramadan önce iki dakikalık özet

1. Tamburda tek bir ağır eşya mı vardı?
2. Çamaşır dağıtılıp parça eklenince UE geçti mi?
3. Üst plakaya çapraz bastırınca makine sallanıyor mu?
4. Makine yeni mi kuruldu, nakliye cıvataları çıkarıldı mı?
5. UE her yıkamada mı, yalnız belli programlarda mı çıkıyor?

Bu beşine cevabın varsa servise "sıkma yapmıyor" yerine somut bir tablo anlatabilirsin. LG'nin diğer kodları için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
