---
title: "LG bulaşık makinesi su boşaltmıyor (OE)"
description: "LG bulaşık makinesinin dibinde su kaldıysa ya da ekranda OE varsa LG'nin sırası: yarım kalan program, İptal ile boşaltma, hortum ve filtreler."
slug: "lg-bulasik-makinesi-su-bosaltmiyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, LG grubu, belirti rehberi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi, HTTP 200.
# Belge kimliği lg.com/tr DFC325HD.ABDPLTK ürün destek sayfasının kılavuz listesinden (www.lg.com/ncms/api/v1/support/proxy/retrieveManualSoftwareList?locale=TR) alındı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ (MD5.txt) · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
#  (M) LG DFB425FP/DFB325HD kullanıcı el kitabı (MFL70282407, 2018)  https://gscs-b2c.lge.com/downloadFile?fileId=oC7YeOPxpjM19dFWaPA  76 s.  md5 cf083d6bb68d82058de6cffa41b747fb — OE tablosu (s.65) aynı üç neden/çözüm; yalnız teyit için.
# Hata tablosu (L s.60) "OE  Boşaltma Sorunu. • Boşaltma hortumunun tıkanmış, bükülmüş ya da donmuş olup olmadığını kontrol edin. / Atık tıkacı tıkanmış. • Atık tıkacındaki çöküntüleri temizleyin. / Filtreler tıkanmış. • Filtreleri Temizleyin."
# Kullanım tablosu (L s.62) "Program tamamlandıktan sonra tamburun dibinde su kalıyor.": "Tahliye hortumu kıvrılmış veya tıkanmıştır. • Hortumu ayarlayın ya da tıkanmayı ortadan kaldırın."
#   / "Program normal olarak sonlanmadan önce güç beslemesi kaybedilmişse ya da el ile bağlantı kesilmişse su kalabilir. • Programı yeniden başlatın."
# Diğer: L s.29 İptal: "Boşaltma pompası çalışmaya başlar ve program iptal edilir. Cihaz boşaltma işlemini tamamladıktan sonra güç kapanır." · "İptal fonksiyonunu etkinleştirmek için BAŞLAT düğmesine 3 saniye basılı tutun."
#   · L s.28 güç kesintisi: "Güç yeniden mevcut olduğunda otomatik olarak açılır ve program devam eder."
#   · L s.56 Filtreleri Temizleme: 1 alt rafı çıkar, alt püskürtücü kolu önde daha geniş V açık konuma getir · 2 iç filtreyi saat yönünün tersine döndür, iç filtreyi ve paslanmaz çelik filtreyi çıkar
#     · 3 filtreleri akan su altında yumuşak fırça ile temizle, takmadan önce yeniden monte et · 4 kolu V konumuna getir, filtreleri tutuculara tak, iç filtreyi yerleşene kadar saat yönünde çevir · UYARI paslanmaz çelik filtrenin keskin kenarları
#   · L s.57 DİKKAT: "Temizlenmeyen gıda atıkları kötü kokuya neden olabilir. Ayrıca filtrelerde takılan gıda atıkları nedeniyle boşaltma konusunda sorun yaşanabilir." · NOT: "klik sesiyle yerine oturduğunu duyana kadar sıkıca kapatın."
#   · L s.55 "İç kısmın, püskürtücü kollarının veya filtrelerin iki haftada bir temizlenmesi tavsiye edilir." · L s.22 "yıkamadan sonra ya da yıkamadan önce filtreyi her zaman temizleyin."
#   · L s.18 Gider bağlantısı: "Lavabo altındaki atık tıkacında doğru şekilde delik açılmadığında OE hatası meydana gelebilir." en az 15 mm delik; "Atık deliğini bir tornavida ve çekiç kullanarak açmaya çalışmayın." · bükülme/kıvrılma tahliye arızasına neden olabilir
#   · L s.65 Koku satırı: program tamamlanmadan durdurulup atık su kalmışsa "Gücü açın, atık suyu boşaltmak için İptal programı seçeneğini çalıştırın" · L s.59 kışa hazırlama yetkili servis elemanı
# BİLEREK YAZILMAYANLAR: pompa/kart teşhisi (belgede yok) · atık tıkacına delik açma ya da tıkaç sökümü (alet işi; belge tornavida-çekiçle açmayı yasaklıyor) · donmuş hortumu çözme yöntemi (bulaşık kılavuzunda yok)
#   · fişi çekme adımı (L'nin filtre talimatında yok; yerine İptal ile boşaltıp gücün kapanması yazıldı) · başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-bulasik-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bir fırça", "Bez"]
steps:
  - "Program elektrik kesintisi ya da elle kapatma yüzünden yarıda kaldıysa programı yeniden başlat."
  - "Suyu boşaltmak için BAŞLAT düğmesini 3 saniye basılı tutup İptal'i çalıştır, boşaltma bitince güç kendiliğinden kapanır."
  - "Boşaltma hortumunun bükülmediğini, kıvrılmadığını ve tıkanmadığını kontrol et; gerekiyorsa düzelt."
  - "Alt rafı çıkar ve alt püskürtücü kolu önde daha geniş V açılacak konuma getir."
  - "İç filtreyi saat yönünün tersine çevir; iç filtreyi ve paslanmaz çelik filtreyi çıkar."
  - "Filtreleri akan su altında yumuşak bir fırçayla temizle ve takmadan önce birbirine geçir."
  - "Filtreleri tutuculara yerleştir, iç filtreyi klik sesiyle oturana kadar saat yönünde çevir ve programı yeniden başlat."
faq:
  - q: "LG bulaşık makinesinde OE ne demek?"
    a: "LG'nin DFC325HD kullanıcı el kitabındaki hata tablosunda OE'nin karşılığı 'Boşaltma Sorunu'. LG üç neden sayıyor: boşaltma hortumu tıkanmış, bükülmüş ya da donmuş olabilir; lavabo altındaki atık tıkacı tıkanmış olabilir; filtreler tıkanmış olabilir."
  - q: "Elektrik gitti, makinenin dibinde su kaldı. Arıza mı?"
    a: "Her zaman değil. LG'nin tablosuna göre program normal olarak bitmeden güç kesilmişse ya da makine elle kapatılmışsa tamburda su kalabilir; çözüm programı yeniden başlatmak. Kılavuza göre güç geri geldiğinde makine kendiliğinden açılır ve program devam eder."
  - q: "Filtreleri ne sıklıkla temizlemeliyim?"
    a: "LG iç kısmın, püskürtücü kolların ve filtrelerin iki haftada bir temizlenmesini tavsiye ediyor; kullanım bölümünde de filtrenin yıkamadan önce ya da sonra her zaman temizlenmesini istiyor. Kılavuza göre filtrelerde takılan gıda atıkları boşaltma sorununa ve kötü kokuya yol açabilir."
  - q: "Makine yeni kuruldu ve hemen OE verdi. Neden olabilir?"
    a: "LG'nin kurulum bölümünde bunun için ayrı bir not var: lavabo altındaki atık tıkacında doğru şekilde delik açılmadığında OE hatası meydana gelebilir. Kılavuz bu deliğin tornavida ve çekiçle açılmaya çalışılmamasını istiyor. Bu bir montaj işi; kurulumu yapan kişiye ya da yetkili servise bırak."
images:
  coverAlt: "Alt sepeti dışarı alınmış bulaşık makinesinin tabanında silindir biçimli filtre yuvası ve dibinde biraz kalmış su"
---

Program bitti, kapağı açtın ve makinenin dibinde su duruyor; belki ekranda **OE** de yazıyor. LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabında bu belirti iki yerde geçiyor. Hata tablosunda OE'nin karşılığı **"Boşaltma Sorunu"**; kullanım tablosunda ise ayrı bir satır var: **"Program tamamlandıktan sonra tamburun dibinde su kalıyor."** LG'nin saydığı nedenlerin ilki bir arıza bile değil: program elektrik kesintisi ya da elle kapatma yüzünden yarıda kalmış olabilir. Bu yazıda önce bunu, sonra hortumu, en son da filtreleri LG'nin kendi talimatıyla anlatıyoruz. Kaynak tek bir modelin kılavuzu; tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Program yarıda mı kaldı, yeniden başlat → suyu boşaltmak için BAŞLAT'ı 3 saniye basılı tutup İptal'i çalıştır → boşaltma hortumunda büküm, kıvrım ya da tıkanma var mı bak → alt rafı çıkar, iç filtreyle paslanmaz çelik filtreyi çıkarıp akan suyla temizle → filtreleri klik sesiyle yerine tak. Lavabo altındaki atık tıkacı montaj işi; orası servise ya da kurulumu yapana.

## Adım adım: evde denenecekler

**1. Program yarıda mı kaldı?** LG'nin tablosundaki ikinci neden aslında en masum olanı: program normal olarak sonlanmadan **güç beslemesi kaybedilmişse ya da el ile bağlantı kesilmişse** tamburda su kalabilir. LG'nin çözümü kısa: **programı yeniden başlat.** Kılavuzun kontrol paneli bölümüne göre elektrik dalgalanması ya da kesintisinde güç güvenlik için kapanır, güç yeniden geldiğinde makine **otomatik olarak açılır ve program devam eder.**

**2. İptal ile suyu boşalt.** Kontrol paneli bölümündeki **İptal** işlevi tam bu iş için: etkinleştirildiğinde **boşaltma pompası çalışmaya başlar ve program iptal edilir;** boşaltma bitince güç kendiliğinden kapanır. LG'ye göre İptal'i çalıştırmak için **BAŞLAT düğmesine 3 saniye basılı tut.** Kılavuzun koku satırı da yarıda kalan programdan kalan atık su için aynı yolu gösteriyor.

**3. Boşaltma hortumuna bak.** İki tablo da hortumu sayıyor: OE satırında **boşaltma hortumunun tıkanmış, bükülmüş ya da donmuş** olup olmadığını kontrol et deniyor; kullanım tablosunda da **tahliye hortumu kıvrılmış veya tıkanmışsa hortumu ayarla ya da tıkanmayı gider.** Kurulum bölümüne göre montajda hortumun bükülmesi ya da kıvrılması tahliye arızasına yol açabiliyor. Hortumu makinenin arkasından lavabo altına kadar gözle takip et.

**4. Alt rafı çıkar.** Buradan sonrası filtreler. OE satırındaki üçüncü neden **filtrelerin tıkanması;** LG'nin bakım bölümüne göre filtrelerde takılan gıda atıkları **boşaltma konusunda sorun** yaratabiliyor. Filtre temizliğinin ilk adımı: **alt rafı çıkar ve alt püskürtücü kolu, önde daha geniş bir V açılacak** konuma getir.

**5. Filtreleri çıkar.** **İç filtreyi saat yönünün tersine** döndür; ardından birbirine takılı iç filtreyi ve **paslanmaz çelik filtreyi** çıkar. LG'nin uyarısı: paslanmaz çelik filtreyi tutarken **keskin kenarlara** dikkat et.

**6. Akan suyla temizle.** Filtreleri **akan su altında yumuşak bir fırçayla** temizle. LG'ye göre filtreler yeniden takılmadan önce birbirine geçirilip **monte edilir.**

**7. Yerine tak ve yeniden başlat.** Püskürtücü kolu yine önde geniş V olacak konumda tut, filtreleri **filtre tutucuların yerine** oturt ve iç filtreyi **yerleşene kadar saat yönünde** çevir. LG'nin notu: filtreyi **klik sesiyle yerine oturduğunu duyana kadar** sıkıca kapat. Sonra programı yeniden başlat.

## Lavabo altındaki atık tıkacı

OE satırında LG'nin saydığı bir neden daha var: **atık tıkacı tıkanmış** → **atık tıkacındaki çöküntüleri temizleyin.** Atık tıkacı, boşaltma hortumunun lavabo altında bağlandığı gider ağzı. Kılavuzun kurulum bölümüne göre bu tıkaçta **doğru şekilde delik açılmadığında da OE hatası** görülebiliyor; delik en az 15 mm olmalı ve LG bu deliğin **tornavida ve çekiçle açılmaya çalışılmamasını** istiyor. Makine yeni kurulduysa ve OE hemen başladıysa bu kısım montaj işi; kurulumu yapan kişiye ya da yetkili servise bırak.

Filtre temizliğinin markadan bağımsız anlatımı için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) rehberine, genel nedenler için [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) yazısına bakabilirsin. Su boşalıyor ama bulaşıklar kirli çıkıyorsa kardeş rehberimiz [LG bulaşık makinesi temiz yıkamıyor](/blog/lg-bulasik-makinesi-temiz-yikamiyor/) sayfasına geç.

## Ne zaman servis

- Hortum düz ve açık, filtreler temiz ve program baştan çalıştırıldığı hâlde OE sürüyorsa yetkili LG servisine başvur. LG'nin sorun giderme bölümü, servis merkezini aramadan önce bu tabloların kontrol edilmesini istiyor; kontroller bittiyse sıra servisin.
- Makine dondurucu soğuklarda uzun süre kullanılmayacaksa LG'ye göre su hatlarının ve cihazın **kışa hazırlanması yetkili bir servis elemanı** tarafından yapılmalı.
- Atık tıkacına delik açmak ya da gider bağlantısını değiştirmek montaj işi; bunu da kurulumu yapana ya da servise bırak.

⛔ **Kendin-çöz sınırı burada biter.** Program, İptal, hortum ve filtreler kullanıcıya; pompa ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ekranda OE mi yazıyor, yoksa yalnız dipte su mu var?
2. Program sırasında elektrik kesildi ya da makineyi elle kapattın mı?
3. İptal'i (BAŞLAT 3 saniye) çalıştırınca su boşaldı mı?
4. Hortumda büküm, kıvrım ya da tıkanma var mı?
5. Filtrelerden gıda artığı çıktı mı, filtreleri klik sesiyle yerine taktın mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
