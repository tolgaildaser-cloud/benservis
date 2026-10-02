---
title: "LG çamaşır makinesi santrifüj yapmıyor"
description: "LG çamaşır makinesi çamaşırı ıslak bırakıyorsa LG'nin sırası: sıkma seviyesi 0 mı, sıkma hızı, kapı kilidi, yük dengesi ve Sadece Sıkma."
slug: "lg-camasir-makinesi-santrifuj-yapmiyor"
date: "2026-10-02"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2. koşu 10:51, LG). Belgeler bu koşuda yeniden curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200 application/pdf, md5 yerel kopyalarla aynı.
# Belge yeri lg.com/tr ürün destek sayfalarındaki "Kılavuzlar" listesi (28 Eyl'de bulundu, yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-camasir-sprint/). #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
#  (C) LG F4Y5EYW0W kullanım kılavuzu (Türkçe)  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a  (sayfa atıfları bu belgeye göre; PDF sayfası = basılı sayfa no)
#  (A) LG F4V5RGP2T kullanım kılavuzu (Türkçe)  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739  (yalnız "No" yazımı ve teyit, A s.39)
# Sıkma düğmesi (C s.35): "Sıkma yoğunluğu seviyesi bu düğmeye art arda basılarak seçilebilir. • Sıkma hızını seçmek için Sıkma düğmesine basın. NOT • Sıkma seviyesi olarak 0 seçilmişse, çamaşır makinesinin tamburu tahliyeden önce dönecektir."
#   (A s.39 aynı not "No" ile) · Sadece Sıkma (C s.35): 1 kıyafetleri yükle 2 Güç (program seçme, deterjan ekleme) 3 Sıkma 4 Başlat/Durdur · C s.36 NOT: program seçilirse sıkma döngüsü seçilemez → Güç'e iki kez bas
# C s.3 + s.32: "sıkma hızı ne kadar yüksekse ... kalan nem içeriği o kadar düşük olur." · C s.32 dönme hızı tablosu (ör. Hızlı 14 varsayılan 400 dev/dak), "Gerçek maksimum dönme hızı, yük koşullarına göre değişiklik gösterebilir."
# C s.44-45 UE: "Sıkma gerçekleşmeden önce kapı kilitlenmelidir." · "Cihazın sıkmayı yapması için kapı kilitlenmelidir." · az/tek ağır eşya → 1-2 parça ekle · C s.23 "Program başladığında ve kapak kitlendiğinde H yanar."
# C s.25 "Tek küçük parçaları yıkamayın. Dengesizliği önlemek için 1-2 benzer öğe ekleyin." · büyük ve küçük çamaşırları bir yükte birleştir · C s.26 çamaşır filesi: yarısından az doldur, diğer çamaşırlarla yıka;
#   "Tamburda dengesizliğe yol açarak yetersiz bir sıkma döngüsüne yol açabileceği için fileyi aşırı doldurmaktan veya ayrı yıkamaktan kaçının."
# C s.49 "Döngü süreleri normalden daha uzun sürüyor." (az yük / ağır-hafif karışık → benzer ağırlık / dengesiz → elle dağıt) · "Döngü sonu ertelendi: Dengesizlik tespit edildi veya köpük kaldırma programı açık. • Bu normal."
# C s.47 "Kapağı kapatın ve kapının altına tamamen kapanmasını engelleyen hiçbir şeyin sıkışmadığından emin olun." · C s.13 ayaklar nakliye cıvatası anahtarıyla · C s.40 panelleri/cihazı sökmeye çalışma
# C s.48 motor koruma: "Cihaz birkaç dakika durur ve ardından yeniden başlar ... Bu normaldir." · C s.26 "Çok fazla köpüklenme olursa, deterjan miktarını azaltın." · C s.45 OE: tahliye hortumu/filtre, su boşalmaz veya yavaş boşalır.
# BİLEREK YAZILMAYANLAR: motor/kömür/kart/amortisör teşhisi (belgede yok) · "köpük sıkmayı engeller" genellemesi (belge yalnız döngü sonunun ertelendiğini söylüyor) · tahliye filtresi açma (alet/acil tahliye; OE sayfasına link)
#   · ayak ayarı (C s.13: nakliye cıvatası anahtarıyla → alet kuralı) · aşırı yükün sıkmayı durdurduğu iddiası (LG'nin satırı az yükü sayıyor) · başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-santrifuj-yapmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika (Sadece Sıkma süresi hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekranda sıkma seviyesine bak; 0 ya da No seçiliyse Sıkma düğmesine art arda basarak bir sıkma hızı seç."
  - "Çamaşırlar fazla ıslak çıkıyorsa programın izin verdiği daha yüksek bir sıkma hızını seç."
  - "Kapağı tam kapat ve kapı kilidi simgesinin yandığını gör; kapı kilitlenmeden sıkma başlamaz."
  - "Tamburda tek bir ağır ya da tek küçük parça varsa 1-2 benzer parça ekle."
  - "Ağır ve hafif çamaşırları ayır, benzer ağırlıktaki parçaları birlikte yıka."
  - "Çamaşır filesini kapasitesinin yarısından az doldur ve tek başına değil, diğer çamaşırlarla yıka."
  - "Islak kalan çamaşır için Güç düğmesine bas, program seçmeden Sıkma'ya ve ardından Başlat/Durdur'a basarak Sadece Sıkma'yı çalıştır."
faq:
  - q: "LG çamaşır makinem hiç sıkma yapmıyor. İlk neye bakmalıyım?"
    a: "Sıkma seviyesine. LG'nin kılavuzunda sıkma seviyesi Sıkma düğmesine art arda basılarak seçiliyor ve LG'nin notu: 'Sıkma seviyesi olarak 0 seçilmişse, çamaşır makinesinin tamburu tahliyeden önce dönecektir.' Bazı modellerde bu seviye No diye yazıyor. Ekranda bu seviye görünüyorsa bir sıkma hızı seç."
  - q: "Sıkma yaptı ama çamaşırlar yine ıslak. Neden?"
    a: "LG'ye göre sıkma hızı ne kadar yüksekse sıkma sonunda kalan nem o kadar düşük oluyor. Programların varsayılan sıkma hızları farklı; F4Y5EYW0W'de örneğin Hızlı 14 programı varsayılan olarak 400 dev/dak ile sıkıyor. LG ayrıca gerçek en yüksek dönme hızının yük koşullarına göre değişebileceğini yazıyor."
  - q: "Makine sıkmadan önce birkaç dakika durup bekliyor. Arıza mı?"
    a: "Her zaman değil. LG'nin sorun giderme tablosuna göre motorun aşırı ısınmasını önleyen bir koruma devreye girdiğinde makine birkaç dakika durup yeniden başlıyor ve bu normal. Ekrandaki kalan sürenin uzaması da dengesizlik algılandığında ya da köpük kaldırma programı açıldığında LG'ye göre normal."
  - q: "Ekranda UE ya da OE varsa ne yapmalıyım?"
    a: "O zaman sorun bir koda bağlanmış demektir. LG'nin tablosunda UE dengesizlik hatası, OE ise su çıkış hatası. İkisinin LG kılavuzuna göre adımlarını ayrı rehberlerde anlattık: LG çamaşır makinesi UE hatası ve LG çamaşır makinesi OE hatası."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin kontrol panelinde sıkma ayarı düğmesine uzanan bir el, tamburda ıslak çamaşırlar"
---

Program bitti, kapağı açtın ve çamaşırlar sırılsıklam; ya makine hiç sıkmadı ya da sıktıysa bile yeterince değil. Ekranda bir hata kodu yoksa ilk bakılacak yer ayarlar. LG'nin F4Y5EYW0W kullanım kılavuzunda sıkma seviyesi **Sıkma düğmesine art arda basılarak** seçiliyor ve kılavuzun notu şu: **"Sıkma seviyesi olarak 0 seçilmişse, çamaşır makinesinin tamburu tahliyeden önce dönecektir."** Bazı modellerde bu seviye **No** diye görünüyor. Bu yazıda önce ayarları, sonra LG'nin yük dengesi için verdiği kuralları, en son da ıslak kalan çamaşırı **Sadece Sıkma** ile kurtarmayı anlatıyoruz. Ekranda **UE** ya da **OE** varsa aşağıdaki bağlantılardan o kodun kendi rehberine geç. Kaynak LG'nin iki modelinin kılavuzu; tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıkma seviyesi 0 / No mu, değiştir → çamaşır ıslaksa daha yüksek sıkma hızı seç → kapı kilitlendi mi bak → tek ağır ya da tek küçük parçaya 1-2 benzer parça ekle → ağır ve hafif çamaşırı ayır → fileyi yarısından az doldur → ıslak çamaşırı Sadece Sıkma ile yeniden sık. Kod varsa (UE, OE) o kodun rehberine.

## Adım adım: evde denenecekler

**1. Sıkma seviyesine bak.** LG'nin kontrol paneli bölümüne göre **sıkma yoğunluğu seviyesi Sıkma düğmesine art arda basılarak** seçiliyor. Aynı yerdeki not önemli: **"Sıkma seviyesi olarak 0 seçilmişse, çamaşır makinesinin tamburu tahliyeden önce dönecektir."** F4V5RGP2T kılavuzunda aynı seviye **No** diye yazıyor. Ekranda bu seviye görünüyorsa Sıkma düğmesine basarak bir sıkma hızı seç.

**2. Sıkma hızı yeterli mi?** Makine sıkıyor ama çamaşır yine ıslaksa sıkma hızına bak. LG'ye göre **sıkma hızı ne kadar yüksekse sıkma sonunda kalan nem o kadar düşük** oluyor. Her programın kendi varsayılan ve izin verilen sıkma hızı var; F4Y5EYW0W'de örneğin **Hızlı 14** programının varsayılanı **400 dev/dak.** Çamaşır türüne uygunsa programın izin verdiği daha yüksek bir hızı seç. LG ayrıca **gerçek en yüksek dönme hızının yük koşullarına göre değişebileceğini** yazıyor.

**3. Kapı kilitlendi mi?** LG'nin tablosunda iki kez geçen kural: **sıkma gerçekleşmeden önce kapı kilitlenmelidir.** Kılavuza göre program başladığında ve kapak kilitlendiğinde ekranda **kilit simgesi** yanıyor. Kapağı tam kapat; LG'nin tablosuna göre kapının tamamen kapanmasını engelleyen hiçbir şey sıkışmamalı.

**4. Tek parçaya eş ekle.** LG'nin yükleme kuralı açık: **tek küçük parçaları yıkama, dengesizliği önlemek için 1-2 benzer öğe ekle.** Hata tablosu da tek tek ağır eşyalar (banyo paspası, bornoz gibi) yüklendiğinde sistemin **sıkmayı durdurabileceğini ya da tamamen kesebileceğini** yazıyor. Tek bir paspas ya da tek bir kot pantolon yıkıyorsan yanına 1-2 benzer parça koy.

**5. Ağır ve hafifi ayır.** LG'nin **"Döngü süreleri normalden daha uzun sürüyor"** satırında ağır ve hafif çamaşırların karıştırılması bir neden olarak geçiyor. Çözüm: makinenin yükü eşit dağıtabilmesi için **her zaman benzer ağırlıktaki parçaları** birlikte yıka. Kılavuz, büyük ve küçük çamaşırları **bir yükte birleştirmeyi** de öneriyor; yani amaç tek bir ağır parçayı yalnız bırakmamak.

**6. Fileyi aşırı doldurma.** Küçük çamaşırlar için file kullanıyorsan LG'nin kuralı: fileyi **kapasitesinin yarısından az** doldur ve **diğer çamaşırlarla birlikte** yıka. Kılavuza göre fileyi aşırı doldurmak ya da tek başına yıkamak **tamburda dengesizliğe yol açarak yetersiz bir sıkma döngüsüne** neden olabilir.

**7. Sadece Sıkma ile yeniden sık.** Islak kalan çamaşır için LG'nin kılavuzunda ayrı bir işlev var: **Sadece Sıkma.** Talimat: çamaşırlar tamburdayken **Güç** düğmesine bas; **program seçme ve deterjan ekleme;** **Sıkma** düğmesine, ardından **Başlat/Durdur** düğmesine bas. Kılavuzun notuna göre bir yıkama programı seçtiysen sıkma döngüsünü ayrıca seçemezsin; bu durumda makineyi kapatıp açmak için **Güç düğmesine iki kez** bas ve baştan başla.

## Normal sayılan beklemeler

LG'nin tablosunda sıkmayla karıştırılabilecek iki durum var ve ikisi de normal:

- **Makine birkaç dakika durup yeniden başlıyor:** motorun aşırı ısınmasını önlemek için bir **motor koruma** devreye giriyor; LG'ye göre makine birkaç dakika durup yeniden başlıyor ve **bu normal.**
- **Program sonu uzuyor:** "Döngü sonu ertelendi" satırına göre **dengesizlik tespit edildiğinde** ya da **köpük kaldırma programı** açıldığında süre uzayabiliyor; ekrandaki kalan süre yalnızca tahmini. Köpük çoksa LG'nin önerisi **deterjan miktarını azaltmak.**

## Kod varsa

Ekranda **UE** görüyorsan LG'ye göre makine dengesizlik algılamış; yükü yeniden dağıtma ve makinenin dengesini kontrol etme adımları [LG çamaşır makinesi UE hatası](/blog/lg-camasir-makinesi-ue-hatasi/) rehberinde. Tamburda su duruyorsa ve ekranda **OE** varsa LG'ye göre su boşalmıyor ya da yavaş boşalıyor; LG'nin hortum ve tahliye filtresi adımları [LG çamaşır makinesi OE hatası](/blog/lg-camasir-makinesi-oe-hatasi/) rehberinde. Diğer kodlar için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/), markadan bağımsız nedenler için [çamaşır makinesi santrifüj yapmıyor](/blog/camasir-makinesi-santrifuj-yapmiyor/) yazısına bakabilirsin.

## Ne zaman servis

- Sıkma seviyesi doğru, kapı kilitli, yük dengeli olduğu ve Sadece Sıkma çalıştırıldığı hâlde tambur hiç sıkma yapmıyorsa yetkili LG servisine başvur.
- Makine sıkmada şiddetli sallanıyorsa: LG'ye göre ayaklar **nakliye cıvatası anahtarıyla** ayarlanıyor; bu bir alet işi, kurulumu yapana ya da servise bırak.

⛔ **Kendin-çöz sınırı burada biter.** Ayarlar, yük ve programlar kullanıcıya; motor, kart ve makinenin içi uzmana aittir. LG'nin uyarısı açık: cihazın panellerini ya da kendisini sökmeye çalışma.

## Servisi aramadan önce kısa özet

1. Ekranda sıkma seviyesi kaç görünüyor?
2. Hangi programı kullandın, varsayılan sıkma hızı kaç?
3. Kapı kilit simgesi yanıyor mu?
4. Tamburda tek bir ağır parça ya da tek başına bir file mi vardı?
5. Ekranda UE ya da OE var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
