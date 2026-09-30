---
title: "Arçelik bulaşık makinesi su boşaltmıyor"
description: "Arçelik bulaşık makinesinde program sonunda su kalıyorsa Arçelik'in sırası: programı iptal edip tahliye, filtreler, makinenin dibi ve tahliye hortumu."
slug: "arcelik-bulasik-makinesi-su-bosaltmiyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den indirildi, hepsi HTTP 200.
# Web araması YALNIZ belgenin adresini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-buzdolabi-bulasik-sprint/ · okuma pdftotext, sayfa = PDF sayfası (basılı sayfa no + 2).
#  (K) 6366 / 6366 I Bulaşık Makinesi Kullanma Kılavuzu
#      https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201703271206470_User%20Manual%20-%20Filetr_TR.pdf  46 s.  md5 e941e0ee68ba8698139fd77c492459a7
#  Aynı sorun giderme satırı ("Program bittikten sonra bulaşık makinesinde su kalıyor.") şu Arçelik kılavuzlarında da var, hepsi bu koşuda HTTP 200:
#  (K2) 6343 / 6343 I / 6343 S  https://download.arcelik.com.tr/download.usagemanuals/6343-4-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201610180836552_User-20Manual-20-20Filetr_TR.pdf  35 s.  md5 83c5e77d8267b635e721604f87bececc
#  (K3) 9242 MI  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180312110164_User%20Manual%20-%20Filetr_TR.pdf  42 s.  md5 8d1f4fef3a6a67cb281b8b6be4643d2a
#  (K4) 63101 I  https://download.arcelik.com.tr/download.usagemanuals/63101-i-10-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201610171211945_User-20Manual-20-20Filetr_TR.pdf  50 s.  md5 7afb5b5c9206dee18b975edb965fbd67
# Sorun giderme (K s.41): "Program bittikten sonra bulaşık makinesinde su kalıyor." → filtreler tıkanmış → filtre sistemini kontrol et, Temizlik ve bakım'daki gibi temizle
#   · "Tahliye hortumu tıkanmıştır / bloke olmuştur. >>> Tahliye hortumunu kontrol edin. Gerekirse çıkarıp tıkanıklığı giderin ve montaj talimatında belirtildiği gibi tekrar takın."
# Makinenin içinin temizlenmesi (K s.34): "Makinenin içinde su kalmışsa, 'Programın iptal edilmesi' bölümündeki işlemleri uygulayarak makinedeki suyun tahliye edilmesini sağlayın.
#   Su tahliye edilemiyorsa, filtreleri 'Filtrelerin temizlenmesi' bölümünde belirtildiği gibi çıkararak makinenin dip kısmında birikerek su yolunu tıkamış kir parçaları olup olmadığını kontrol edin, gerekiyorsa temizleyin."
# Programın iptal edilmesi (K s.32, 6366): Başla / Bekle / İptal tuşuna 3, 2, 1 geri sayımı bitene kadar bas; gösterge yanıp söner, makine birkaç dakika gerekli işlemleri yapar.
# Filtreler (K s.34-35): temizlemeden önce fişi çek, musluğu kapat · haftada en az bir kez · grup saat yönünün tersine çevrilip çekilir · metal/plastik filtre çekilir · kaba filtre iki dil bastırılarak ayrılır
#   · musluk altında fırçayla · tık sesi gelene kadar saat yönünde · filtresiz kullanma. Kurulum (K s.11): montaj/temizlik sonrası yerine koyarken tahliye hortumu katlanmasın, sıkışmasın, kırılmasın.
# BİLEREK YAZILMAYANLAR: pompa teşhisi ve pompa kapağı (bu kılavuzlarda kullanıcıya verilmiyor) · hortum söküp takma numaralı adım olarak (montaj işi; gövdede numarasız anıldı)
#   · gider/sifon müdahalesi (belgede yok) · hata kodu anlamı (belgede yok; hub'a link) · fiyat (#46).
# Alıntı denetim tablosu: arcelik-bulasik-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bulaşık fırçası"]
steps:
  - "Makinenin içinde su kaldıysa kılavuzundaki 'Programın iptal edilmesi' adımlarıyla programı iptal et ve makinenin suyu tahliye etmesini bekle."
  - "Su yine tahliye edilmiyorsa makineyi kapat, fişini çek ve musluğu kapat."
  - "Mikro ve kaba filtre grubunu saat yönünün tersine çevirip çekerek, ardından metal/plastik filtreyi çekerek çıkar."
  - "Makinenin dip kısmında su yolunu tıkamış kir parçası olup olmadığına bak, varsa temizle."
  - "Kaba filtreyi iki dilini bastırarak gruptan ayır ve üç filtreyi musluk altında fırçayla temizle."
  - "Filtreleri yerine tak; kaba filtreyi mikro filtrenin içine yerleştirip tık sesi gelene kadar saat yönünde çevir."
  - "Tahliye hortumunun katlanmadığını ve sıkışmadığını kontrol et."
faq:
  - q: "Arçelik bulaşık makinesinde program bitince dipte su kalıyor, neden?"
    a: "Arçelik'in kullanma kılavuzundaki sorun giderme bölümü 'Program bittikten sonra bulaşık makinesinde su kalıyor' satırında iki neden sayıyor: filtrelerin tıkanmış olması ve tahliye hortumunun tıkanmış ya da bloke olmuş olması. Filtreler için çözüm, filtre sistemini kontrol edip bakım bölümündeki gibi temizlemek; hortum için ilk adım hortumu kontrol etmek."
  - q: "Makinenin içinde kalan suyu nasıl boşaltırım?"
    a: "Arçelik'in bakım bölümüne göre makinenin içinde su kalmışsa 'Programın iptal edilmesi' bölümündeki işlemler uygulanarak suyun tahliye edilmesi sağlanır. 6366 modelinde bunun için Başla / Bekle / İptal tuşuna ekrandaki 3, 2, 1 geri sayımı bitene kadar basılıyor; makine birkaç dakika boyunca iptal için gerekli işlemleri yapıyor. Su yine tahliye edilemiyorsa filtreler çıkarılıp makinenin dibinde su yolunu tıkamış kir parçası olup olmadığına bakılıyor."
  - q: "Filtreleri ne sıklıkla temizlemeliyim?"
    a: "Arçelik makinenin verimli çalışması için filtrelerin haftada en az bir kez temizlenmesini istiyor. Filtreler üzerinde yemek artığı kalmışsa filtreler çıkarılıp musluk altında iyice temizleniyor. Kılavuzun uyarısı: makine filtresiz kullanılmamalı."
  - q: "Tahliye hortumunu kendim söküp temizleyebilir miyim?"
    a: "Arçelik'in listesi hortumun tıkanması durumunda önce hortumun kontrol edilmesini, gerekirse çıkarılıp tıkanıklığın giderilmesini ve montaj talimatında belirtildiği gibi tekrar takılmasını söylüyor. Hortumu söküp takmak montaj işi olduğu için bu yazı onu adım olarak vermiyor; montaj talimatın elinde değilse ya da emin değilsen bu kısmı yetkili servise bırak."
images:
  coverAlt: "Program sonunda kapısı açılmış bulaşık makinesinin tabanında kalan su ve yerinden çıkarılmış filtre grubu"
---

Program bitti, kapağı açtın ve makinenin dibinde su duruyor. Arçelik'in bulaşık makinesi kullanma kılavuzlarındaki sorun giderme bölümünde bu durumun ayrı bir satırı var: **"Program bittikten sonra bulaşık makinesinde su kalıyor."** Arçelik bu satırda iki neden sayıyor: **filtreler tıkanmış** ve **tahliye hortumu tıkanmış ya da bloke olmuş.** Kılavuzun bakım bölümü de içeride kalan suyun nasıl boşaltılacağını sırayla anlatıyor. Aynı satır Arçelik'in 6366, 6343, 9242 MI ve 63101 I kılavuzlarında birebir yer alıyor. Bu yazıda Arçelik'in kendi sırasını izliyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Programı iptal edip makinenin suyu atmasını bekle → atmıyorsa fişi çek, musluğu kapat → filtreleri çıkar, dipteki kiri temizle → filtreleri fırçayla yıka ve tık sesiyle geri tak → tahliye hortumunun katlanmadığını kontrol et. Hortumu söküp takmak montaj işi.

## Adım adım: evde denenecekler

**1. Programı iptal et, tahliyeyi bekle.** Arçelik'in bakım bölümündeki ilk talimat: **makinenin içinde su kalmışsa "Programın iptal edilmesi" bölümündeki işlemleri uygulayarak** makinedeki suyun tahliye edilmesini sağla. 6366 kılavuzunda bu iş şöyle: **Başla / Bekle / İptal tuşuna** ekranda **3, 2, 1** geri sayımı bitene kadar bas; Başla / Bekle göstergesi yanıp sönmeye başlar ve makine **birkaç dakika** boyunca iptal için gerekli işlemleri yapar. Kendi modelinin tuşu için kılavuzundaki aynı başlıklı bölüme bak.

**2. Fişi çek, musluğu kapat.** Kılavuza göre **su tahliye edilemiyorsa** sıra filtrelere geliyor. Filtrelere dokunmadan önce Arçelik'in uyarısı: **makineyi temizlemeden önce fişini çekin ve musluğu kapatın.**

**3. Filtreleri çıkar.** Arçelik'in tarifi: **mikro filtre ve kaba filtre grubunu saat yönünün tersine çevirip çekerek** yerinden çıkar, ardından **metal/plastik filtreyi** çekerek al.

**4. Makinenin dibine bak.** Bakım bölümünün talimatı: filtreleri çıkardıktan sonra **makinenin dip kısmında birikerek su yolunu tıkamış kir parçaları** olup olmadığını kontrol et, gerekiyorsa temizle.

**5. Filtreleri temizle.** Tablodaki neden: **filtreler tıkanmış.** Kaba filtreyi üzerindeki **iki dili içeri doğru bastırarak** gruptan ayır ve üç filtreyi de **musluk altında bir fırça yardımıyla** temizle. Arçelik makinenin verimli çalışması için filtrelerin **haftada en az bir kez** temizlenmesini istiyor.

**6. Filtreleri doğru tak.** Metal/plastik filtreyi yerine tak, kaba filtreyi mikro filtrenin içine yerleştir, doğru yerleştiğinden emin ol ve **tık sesi duyana kadar saat yönünde** çevir. Arçelik'in iki uyarısı: **makine filtresiz kullanılmamalı** ve filtrelerin doğru takılmaması yıkama etkinliğini azaltır.

**7. Tahliye hortumuna bak.** Tablodaki ikinci neden: **tahliye hortumu tıkanmış / bloke olmuş.** Arçelik'in ilk çözümü **tahliye hortumunu kontrol etmek.** Kurulum bölümü de makine yerine yerleştirilirken su giriş ve tahliye hortumlarının **katlanmaması, sıkışmaması ve kırılmaması** gerektiğini yazıyor. Hortumun görebildiğin kısmında katlanma ya da sıkışma varsa düzelt. Makine montaj ya da temizlik için yerinden oynatıldıysa Arçelik'in kurulum uyarısı tam da bu an için.

Adımlardan sonra musluğu aç, fişi tak ve makineyi yeniden çalıştır.

## Hortumu sökmek gerekiyorsa

Arçelik'in listesi hortum tıkalıysa **gerekirse çıkarıp tıkanıklığı gidermeyi ve montaj talimatında belirtildiği gibi tekrar takmayı** söylüyor. Bu bir montaj işi: hortum atık su giderine ya da lavabonun giderine bağlı ve Arçelik bağlantının ayrıntısı için makineyle birlikte verilen montaj talimatını gösteriyor. Montaj talimatın elinde değilse ya da emin değilsen bu kısmı yetkili servise bırak.

Ekranda bir hata kodu görüyorsan [Arçelik bulaşık makinesi hata kodları](/blog/arcelik-bulasik-makinesi-hata-kodlari/) sayfasına, paneldeki uyarı göstergeleri için [Arçelik bulaşık makinesi sembolleri ve anlamları](/blog/arcelik-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfasına bak. Markadan bağımsız anlatım için [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) ve [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazıları var. Su boşalıyor ama bulaşıklar kirli çıkıyorsa [Arçelik bulaşık makinesi temiz yıkamıyor](/blog/arcelik-bulasik-makinesi-temiz-yikamiyor/) rehberine geç.

## Ne zaman servis

Filtreler temiz ve doğru takılı, makinenin dibinde kir yok, hortumun görünen kısmı düz ve makine hâlâ su bırakıyorsa Arçelik'in bu satırda kullanıcıya verdiği liste bitmiş demektir. Kılavuzun tüketici hizmetleri bölümüne göre ürününle ilgili hizmet talebin olduğunda Arçelik Çağrı Merkezi'ne başvurursun; yetkili servislerin güncel iletişim bilgileri arcelik.com.tr'de.

⛔ **Kendin-çöz sınırı burada biter.** Programı iptal etmek, filtre ve dip temizliği ve hortumun görünen kısmı kullanıcıya; hortum bağlantısı ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Su program bittikten sonra mı kalıyor, yoksa program ortasında mı durdu?
2. Programı iptal edince makine suyu boşalttı mı?
3. Filtreler en son ne zaman temizlendi, dipte kir var mıydı?
4. Tahliye hortumu düz mü, makine montaj ya da temizlik için yerinden oynatıldı mı?
5. Ekranda bir hata kodu var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
