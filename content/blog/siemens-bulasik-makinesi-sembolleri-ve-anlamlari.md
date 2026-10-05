---
title: "Siemens bulaşık makinesi sembolleri ve anlamları"
description: "Siemens iQ300 panelindeki musluk, tuz, parlatıcı ve anahtar sembolleri ile ekrandaki H04, r:05, h:01 yazıları, Siemens kılavuzundaki karşılıklarıyla."
slug: "siemens-bulasik-makinesi-sembolleri-ve-anlamlari"
date: "2026-10-05"
category: "Bulaşık makinesi"
faq:
  - q: "Siemens bulaşık makinesinde musluk işareti yanıyor, ne demek?"
    a: "Siemens'in iQ300 kılavuzuna göre musluk sembolü su girişinde veya çıkışında bir arıza olduğunu gösterir. Sabit yanıyorsa kılavuz bunu E:32-00 ile aynı satırda veriyor: giriş hortumu bükülmüş, musluk kapalı, musluk sıkışmış ya da kireçlenmiş veya hortumun su bağlantısındaki süzgeç tıkanmış olabilir. Kılavuzun eşiği şu: musluk açıkken akan su en az 10 litre/dakika olmalı."
  - q: "Musluk sembolü yanıp sönüyorsa ne yapmalıyım?"
    a: "Kılavuz yanıp sönen su beslemesi göstergesini teknik bir arıza olarak tanımlıyor. Sıra şu: cihazı kapat, fişi çek ya da sigortayı indir, en az 2 dakika bekle, elektriği ver ve cihazı çalıştır. Sorun yeniden çıkarsa cihazı kapat, musluğu kapat, fişi çek ve müşteri hizmetlerine hata kodunu bildir."
  - q: "Siemens bulaşık makinesinde anahtar işareti ne anlama geliyor?"
    a: "Anahtar biçimindeki sembol tuş kilidinin açık olduğunu gösterir. Kilit, tuşuna yaklaşık 3 saniye basılarak açılır ve aynı şekilde kapatılır. Kılavuza göre program bitince kilit kendiliğinden kalkar, elektrik kesintisinde ise açık kalmaya devam eder."
  - q: "Ekranda H04 yazıyor, bu bir hata mı?"
    a: "Hayır. H ile başlayan değerler su sertliği ayarıdır ve H00 ile H07 arasında değişir. Siemens'in kılavuzuna göre fabrika ayarı H04'tür. H00 seçilirse su yumuşatma sistemi kapanır ve tuz ilave etme göstergesi devre dışı kalır."
  - q: "Ekranda 0h:01m görünüyor ve makine su boşaltıyor, normal mi?"
    a: "Evet. Kılavuza göre Reset 4 sec. tuşuna yaklaşık 4 saniye basılarak program iptal edildiğinde yaklaşık 1 dakika tüm LED'ler yanar; LED'ler sönünce göstergede 0h:01m çıkar ve kalan su boşaltılır. Program bittiğinde ise ekranda 0h:00m görünür."
  - q: "Tuz eklediğim halde tuz göstergesi neden sönmüyor?"
    a: "Kılavuzun arıza tablosunda tuz göstergesinin yanması için iki sebep var: özel tuz eksik ya da sensör özel tuz tabletlerini algılamıyor. Çözüm olarak tablet değil, bulaşık makineleri için toz özel tuz kullanılması isteniyor; kılavuz sofra tuzunu da kabul etmiyor."
  - q: "Bütün ışıklar aynı anda yanıp sönüyor, makine bozuldu mu?"
    a: "Kılavuz bu durum için iki ihtimal veriyor. Birincisi yazılım güncellemesi: yaklaşık 30 dakika beklenir, cihaz hâlâ hazır değilse ana şalter tuşuna yaklaşık 4 saniye basılarak sıfırlanır. İkincisi elektronik sistemin bir hata tespit etmesi: önce 4 saniyelik sıfırlama, sonra fişi çekip en az 2 dakika bekleme; sorun sürerse müşteri hizmetleri."
images:
  coverAlt: "Solo bulaşık makinesinin kumanda paneli yakın planda; ekranın yanında musluk, tuz, parlatıcı ve kablosuz ağ sembolleri görünüyor"
---

Siemens bulaşık makinenin panelinde bir sembol yandı ya da ekranda **H04**, **r:05**, **h:01** gibi bir yazı belirdi. Bunların çoğu arıza değil; bir ayarın, bir sarf malzemesinin ya da bir fonksiyonun durumunu gösterir. Bu yazıdaki karşılıkların tamamı **Siemens'in kendi kullanım kılavuzundan** alındı.

Kılavuz **iQ300 serisinden SN23IW62KT ve SN23II62KT** solo bulaşık makinelerine ait. Siemens'in diğer modellerinde panel düzeni ve semboller farklı olabilir; kendi modelinin kılavuzu her zaman esastır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

## Göstergedeki 7 sembol

Kılavuzun kumanda elemanları bölümünde göstergede yanabilecek sembollerin ayrı bir tablosu var. Kılavuzun notu: semboller *"cihazın donanımına göre"* değişir.

| Sembol | Ne zaman yanar | Ne yapmalı |
|---|---|---|
| Musluk | Su girişinde veya çıkışında arıza olduğunda; yanar ya da yanıp söner | Aşağıdaki "Musluk sembolü" bölümüne bak |
| İki oklu tuz sembolü | Özel tuz azaldığında | Programı başlatmadan hemen önce tuz kabını doldur |
| Işıltı (yıldız) sembolü | Parlatıcı azaldığında | Parlatıcı kabını max işaretine kadar doldur |
| Saat | Başlama zamanı erteleme (zaman ön seçimi) açıkken | Bilgi amaçlı; arıza değil |
| Ok ve dikey çizgi | Bir program başlatıldığında | Bilgi amaçlı; program çalışıyor |
| Anahtar | Tuş kilidi açıkken | Tuşuna yaklaşık 3 saniye basarak kapatılır |
| Kablosuz ağ (Wi-Fi) yayları | Cihaz WLAN ev ağına bağlandığında | Bilgi amaçlı; Home Connect bağlantısı |

Yedi sembolden yalnız **musluk** bir arızayı haber veriyor. Tuz ve parlatıcı sembolleri "doldur" der; diğer dördü sadece durum bildirir.

## Musluk sembolü: yanıyor mu, yanıp sönüyor mu?

Bu ayrım önemli, çünkü kılavuz iki durumu farklı satırlarda ele alıyor.

**Sabit yanıyorsa.** Kılavuz bunu E:32-00 koduyla aynı satırda veriyor: *"E:32-00 değişimli olarak yanıyor veya su girişi göstergesi yanıyor."* Yani su makineye yeterince gelmiyor. Tablodaki sebepler:

| Sebep | Kılavuzun çözümü |
|---|---|
| Giriş hortumu bükülmüş | Hortumu bükülme olmadan döşe |
| Musluk kapalı | Musluğu aç |
| Musluk sıkışmış veya kireçlenmiş | Musluğu aç |
| Giriş hortumu veya AquaStop hortumunun su bağlantısındaki süzgeç tıkanmış | Süzgeci çıkarıp temizle (adımlar aşağıda) |

Kılavuzun ölçülebilir şartı: *"Musluk açıkken akan su miktarı (debi) en az 10 l/dk olmalıdır."* Bunu bir kova ve saatle kendin kontrol edebilirsin.

Süzgeç temizliği için kılavuzun sırası: cihazı kapat, fişi prizden çek, musluğu kapat, su bağlantısını sök, süzgeci giriş hortumundan çıkar, temizle, geri yerleştir, bağlantıyı vidala, sızdırmazlığı kontrol et, elektriği ver ve cihazı aç.

**Yanıp sönüyorsa.** Kılavuz bu durumu doğrudan *"Teknik bir arıza mevcut"* diye tanımlıyor. Kullanıcıya bırakılan adımlar şunlar: cihazı kapat, fişi çek ya da sigortayı kapat, **en az 2 dakika** bekle, elektriği geri ver ve cihazı çalıştır. Sorun yeniden çıkarsa cihazı kapat, musluğu kapat, fişi çek ve müşteri hizmetlerine hata kodunu bildir.

## Tuz göstergesi

Kılavuza göre tuz göstergesi yandığında özel tuz, **programı başlatmadan hemen önce** doldurulmalı. Sebebi de yazıyor: taşan özel tuz yıkama kabında korozyona yol açabilir, hemen başlayan program bunu temizler.

Dikkat edilecek üç nokta:

- **Yalnız bulaşık makinesi tuzu.** Kılavuz tuz tableti ve sofra tuzu kullanılmamasını istiyor.
- **İlk kullanımda kap suyla doldurulur.** Sonra tuz eklenir; kaptan taşan su akıp gider, bu normal.
- **Tuz kabına deterjan konmaz.** Kılavuzun uyarısı: deterjan su yumuşatma sistemine hasar verebilir.

Tuz koymana rağmen gösterge sönmüyorsa kılavuzun arıza tablosunda ikinci bir sebep var: *"Sensör, özel tuz tabletlerini algılamıyor."* Yani tablet kullandıysan gösterge yanmaya devam edebilir.

Tuz katkılı kombine deterjan kullanıyorsan göstergeyi kapatmak mümkün, ama kılavuz bunu iki koşula bağlıyor: su sertliği **en fazla 21 °dH** olmalı ya da suyun sertliği zaten **0-6 °dH** aralığında olmalı. Kapatma, su sertliği ayarını **H00**'a getirerek yapılır. Kombine deterjandan düz deterjana geri dönersen ayarı yeniden suyuna göre yapman gerekir.

## Parlatıcı göstergesi

Gösterge yandığında parlatıcı kabının kapağındaki dile basıp kapağı kaldır, parlatıcıyı **max** işaretine kadar doldur ve kapağı kapat; kapak duyulur şekilde yerine oturur. Taşan parlatıcıyı sil, kılavuza göre fazlası yıkamada aşırı köpüğe yol açabilir.

Parlatıcı miktarı ekranda **r** ile başlayan bir değerle ayarlanır; fabrika ayarı **r:05**. Kılavuza göre düşük kademe bulaşıktaki izleri azaltır, yüksek kademe su lekelerini azaltır ve kurutmayı iyileştirir. **r00** seçilirse parlatıcı sistemi ve göstergesi kapanır.

Bir not: kılavuz, parlatıcı sistemi kapalıyken ya da parlatıcı yetersizken program süresinin değiştiğini ve enerji tüketiminin arttığını söylüyor. Program süresindeki bir değişiklik her zaman arıza anlamına gelmez.

## Ekrandaki yazılar ne anlatıyor?

Ekranda harf ve rakamdan oluşan kısa yazılar görürsen bunların çoğu bir ayarın değeridir.

| Ekranda | Anlamı | Kılavuzdaki fabrika ayarı / not |
|---|---|---|
| Hxx (H00-H07) | Su sertliği ayarı | H04; H00 su yumuşatmayı kapatır |
| r:xx (r00-r06) | Parlatıcı ilave miktarı | r:05; r00 parlatıcıyı kapatır |
| d00 / d01 | Yoğun kurutma kapalı / açık | d00; hassas bulaşık için uygun değil |
| Cn0 / Cn1 | Kablosuz ağ kapalı / açık | Cn0 |
| rc0 / rc1 / rc2 | Uzaktan başlatma kapalı / tuşla seçilir / sürekli açık | rc1 |
| rE | Ayarları fabrika ayarına döndürme | YES ile onaylanır |
| h:01 … | Zaman ön seçimi; başlangıç 24 saate kadar ertelenebilir | h:00 ertelemeyi kapatır |
| 0h:00m | Program bitti | — |
| 0h:01m | Program iptal edildi, kalan su boşaltılıyor | Yaklaşık 1 dakika sürer |
| APP | Home Connect'ten indirilmiş program seçili | Kalan süreyle değişimli görünür |
| EnG | Smart Start açık; en uygun başlama zamanı gösteriliyor | Home Connect üzerinden etkinleştirilir |

Ayarlara giriş kılavuzda şöyle: **Setup 3 sec.** yazan tuşa yaklaşık 3 saniye basılır, ekranda Hxx görünür; istenen ayara gelinip değeri değiştirilir ve kaydetmek için yine 3 saniye basılır.

## Su sertliği: hangi H değeri?

Kılavuz, 7 °dH üzerindeki suyun cihaz hasarını önlemek için yumuşatılması gerektiğini söylüyor. Su sertliğini yerel su idaresinden ya da bir sertlik test cihazıyla öğrenebilirsin.

| °dH | Aralık | mmol/l | Ayar |
|---|---|---|---|
| 0-6 | yumuşak | 0 – 1,1 | H00 |
| 7-8 | yumuşak | 1,2 – 1,4 | H01 |
| 9-10 | orta | 1,5 – 1,8 | H02 |
| 11-12 | orta | 1,9 – 2,1 | H03 |
| 13-16 | orta | 2,2 – 2,9 | H04 |
| 17-21 | sert | 3,0 – 3,7 | H05 |
| 22-30 | sert | 3,8 – 5,4 | H06 |
| 31-50 | sert | 5,5 – 8,9 | H07 |

Kılavuz bir de şunu belirtiyor: cihaz su yumuşatma sisteminde düzenli aralıklarla kendiliğinden bir *"tekrar ısıtma"* işlemi yapar. Bu işlem ana yıkama bitmeden yapılır, program süresini uzatır ve su ile elektrik tüketimini artırır. Bu da normal bir çalışma.

## Ek fonksiyon tuşları

Programın yanında yanan ek fonksiyon tuşları kılavuzda dört başlıkta anlatılıyor. Hangisinin kullanılabileceği seçilen programa ve modele bağlı.

- **Extra Rinse:** yıkama ile parlatıcı adımları arasına ek bir durulama ekler; süre uzar, su tüketimi artar.
- **Hijyen +:** sıcaklığı yükseltir ve daha uzun tutar; kılavuz kesme tahtası ve biberon için öneriyor. Süre ve enerji tüketimi artar.
- **VarioSpeed:** programa göre süreyi **%15 ile %75** arasında kısaltır; su ve enerji tüketimi artar. Program başladıktan sonra da açılabilir.
- **Sıcak ön yıkama:** buhar aşamalı ısıtmalı ön yıkama ekler; süre uzar, su ve enerji tüketimi artar.

Ek fonksiyon seçildiğinde tuşu yanıp söner. Kılavuza göre bu, fonksiyonun ayarlandığını gösterir.

## Bütün ışıklar yanıyorsa

Kılavuzda iki ayrı durum var:

1. **Program iptalinde:** *Reset 4 sec.* tuşuna yaklaşık 4 saniye basarak programı iptal ettiğinde yaklaşık 1 dakika boyunca tüm LED'ler yanar. Bu normal; ardından ekranda 0h:01m görünür.
2. **Kendiliğinden yanıp sönüyorsa:** kılavuz önce yazılım güncellemesi ihtimalini veriyor. Yaklaşık **30 dakika** beklenir; cihaz hâlâ hazır değilse ana şalter tuşuna yaklaşık 4 saniye basılarak sıfırlanır. İkinci ihtimal elektronik sistemin bir hata tespit etmesi: sıfırlama yapılır, sorun sürerse fiş çekilip en az 2 dakika beklenir. Yine geçmezse müşteri hizmetleri aranır.

## Ekranda E: ile başlayan bir kod varsa

Bu modelin kodları **E:32-00** gibi iki parçalı gösterilir ve ekranda değişimli yanar. Kılavuzdaki kodlar kısaca şöyle:

- **E:32-00:** su girişi (yukarıdaki musluk bölümü)
- **E:61-02 / E:61-03:** tahliye; pompa, pompa kapağı, sifon bağlantısı veya atık su hortumu
- **E:92-40:** süzgeçler kirlenmiş
- **E:30-00, E:31-00, E:34-00:** su koruma sistemi devrede ya da cihaza sürekli su akıyor. Kılavuzun talimatı: **musluğu kapat ve müşteri hizmetlerini ara.**

Kodların ayrıntısı ve evde yapılabilecek kontroller için: [Siemens bulaşık makinesi hata kodları](/blog/siemens-bulasik-makinesi-hata-kodlari).

## Nerede durmalısın?

Kılavuzun kullanıcıya bıraktığı işler bu yazıda sayılanlar: musluk, giriş hortumu ve süzgeci, tuz, parlatıcı, ayarlar ve sıfırlama. Kılavuzun arıza bölümündeki uyarı açık: onarımları yalnız eğitimli uzman personel yapabilir ve yalnız orijinal yedek parça kullanılmalıdır. Su koruma kodlarında, yanıp sönen musluk sembolü sıfırlamadan sonra da geri geliyorsa ya da elektrik kablosu hasarlıysa cihazın içine girme; orası yetkili servisin işi.

---

**Kaynak künyesi.** Bu yazıdaki semboller, ekran yazıları, kodlar ve adımlar **Siemens'in kendi kullanım kılavuzundan** alınmıştır: SN23IW62KT ve SN23II62KT (iQ300 solo bulaşık makinesi) Türkçe kullanım kılavuzu. Kılavuz, Siemens Türkiye ürün sayfasındaki bağlantıdan üreticinin belge sunucusuna (media3.bsh-group.com) gidilerek indirilmiş ve tam metin olarak okunmuştur. Üçüncü taraf servis siteleri kaynak olarak kullanılmamıştır. Kendi modelinin kılavuzu farklı bir sembol, değer veya kod veriyorsa **kendi kılavuzun esastır.**
