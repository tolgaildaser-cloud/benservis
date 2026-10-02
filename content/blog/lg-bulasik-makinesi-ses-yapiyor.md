---
title: "LG bulaşık makinesi ses yapıyor"
description: "LG bulaşık makinesi ses yapıyorsa LG'ye göre bir kısmı normal. Kollara çarpan bulaşık, alçak üst raf, makinenin dengesi ve kapak kontrolü."
slug: "lg-bulasik-makinesi-ses-yapiyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2. koşu 10:51, LG). Belge bu koşuda yeniden curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200, md5 yerel kopyayla aynı.
# Belge kimliği lg.com/tr DFC325HD.ABDPLTK ürün destek sayfasının kılavuz listesinden (www.lg.com/ncms/api/v1/support/proxy/retrieveManualSoftwareList?locale=TR). #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
#  (M) LG DFB425FP/DFB325HD kullanıcı el kitabı (MFL70282407, 2018)  https://gscs-b2c.lge.com/downloadFile?fileId=oC7YeOPxpjM19dFWaPA  76 s.  md5 cf083d6bb68d82058de6cffa41b747fb — gürültü satırı aynı; yalnız teyit.
# Kullanım tablosu (L s.61) "Gürültü": "Çalışma sırasında bir miktar gürültü seviyesi normaldir. • Deterjan kapağı açılmıyor. • Boşaltma pompası, boşaltma programının başında. / Cihaz hizalanmamış. • Hizalama ayaklarını ayarlayın.
#   / Püskürtücü kol bulaşıklara çarpıyor. • Bulaşıkları farklı şekilde yerleştirin. / Su basıncı çok yüksek. • Su basıncını ayarlayın."
# Diğer: L s.45 üst raf alçak konumdayken "püskürtücü kol da dahil olmak üzere üst rafın alt kısmının alt raftaki eşyalara çarpıp çarpmadığını kontrol edin." · raf ayarından sonra kolların serbest dönmesini kontrol et
#   · L s.22 bulaşıklar püskürtücü kolları engellemesin; bir bulaşığı diğerinin üzerine koyma · L s.41 bulaşıklar birbirine değmesin · L s.17 üst plakayı çapraz it, sallanırsa ayakları tekrar ayarla; doğru hizada kapak açılırken
#   meyil/basıklık/sürtünme sesi olmaz · L s.20 hizalıysa kapak sorunsuz ve gürültüsüz açılıp kapanmalı · L s.14 yükseklik ayarı anahtarla, montaj yetkili servis elemanınca; gürültü bandı tabana yapıştırılır
#   · L s.13 izin verilen giriş su basıncı 0,05-1,0 MPa · L s.62 kapak açıkken sürekli bip: cihaz ve bulaşıklar soğuyana kadar kapağı kapat · L s.29 düğme sesleri Çift Duşlama + Enerji Tasarrufu 3 sn; hata uyarı sesi kapatılamaz
#   · L s.7 güvenlik: tuhaf ses, koku ya da duman → derhal fişi çıkar, LG müşteri hizmetleri.
# BİLEREK YAZILMAYANLAR: "Deterjan kapağı açılmıyor." maddesi yorumlanmadı (çeviri belirsiz; normal ses mi arıza mı belgeden kesinleşmiyor) · su basıncını ayarlama yöntemi (belgede yöntem yok; tesisat)
#   · ayak ayarı (anahtar → alet kuralı) · kolu elle çevirme (L s.57 değişken açılı kol ucunu elle döndürmeyi yasaklıyor) · pompa/motor teşhisi (belgede yok) · başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-bulasik-makinesi-ses-yapiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Sesin programın hangi anında geldiğini not et; programın başındaki boşaltma pompası sesi LG'ye göre normal."
  - "Püskürtücü kolların çarptığı bulaşık varsa bulaşıkları farklı yerleştir."
  - "Bulaşıkların birbirine değmediğinden ve üst üste konmadığından emin ol."
  - "Üst raf alçak konumdaysa rafın altının ve üst kolun alt raftaki eşyalara çarpıp çarpmadığını kontrol et."
  - "Makinenin üst plakasını çapraz iterek sallanıp sallanmadığını kontrol et."
  - "Kapağı açıp kapat; kapak sürtünme sesi olmadan açılıp kapanmalı."
faq:
  - q: "LG bulaşık makinesinin çalışırken ses yapması normal mi?"
    a: "Bir ölçüde evet. LG'nin DFC325HD kullanıcı el kitabındaki gürültü satırı, çalışma sırasında bir miktar gürültünün normal olduğunu yazıyor ve örnek olarak programın başındaki boşaltma pompasını sayıyor. Aynı satırda anormal sesin üç nedeni de var: cihazın hizalanmamış olması, püskürtücü kolun bulaşıklara çarpması ve su basıncının çok yüksek olması."
  - q: "Kapağı açınca makine sürekli bip sesi çıkarıyor. Neden?"
    a: "LG'nin tablosuna göre program sırasında ya da program biter bitmez kapak açıldığında cihazın içi sıcak olduğu için bip sesi gelir. LG'nin önerisi, cihaz ve bulaşıklar soğuyana kadar kapağı kapatmak; kapak kapandığında ya da iç sıcaklık düştüğünde bip sesi duruyor."
  - q: "Düğme seslerini kapatabilir miyim?"
    a: "DFC325HD'de düğme sesleri Çift Duşlama ve Enerji Tasarrufu düğmelerine 3 saniye birlikte basılı tutularak açılıp kapatılıyor. LG'ye göre hata uyarı sesi kapatılamıyor. Tuş adları modele göre değişebilir."
  - q: "Su basıncı ses yapar mı?"
    a: "LG'nin gürültü satırında su basıncının çok yüksek olması da bir neden olarak geçiyor. Kılavuza göre makinenin izin verilen giriş su basıncı 0,05-1,0 MPa. Evdeki basıncı ölçmek ve ayarlamak bu rehberin kapsamında değil; yetkili servise danış."
images:
  coverAlt: "Açık bulaşık makinesinin alt sepetinde püskürtücü kolun hemen üstüne denk gelen uzun saplı bir tava"
---

Bulaşık makinesi çalışırken tıkırtı, takırtı ya da alışılmadık bir uğultu duyuyorsun. LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabında bunun için **"Gürültü"** diye ayrı bir satır var ve ilk cümlesi rahatlatıcı: **"Çalışma sırasında bir miktar gürültü seviyesi normaldir."** LG örnek olarak **programın başındaki boşaltma pompasını** sayıyor. Aynı satırda sesin normal olmadığı üç durum da yazıyor: **cihaz hizalanmamış,** **püskürtücü kol bulaşıklara çarpıyor** ya da **su basıncı çok yüksek.** Bu yazıda önce hangi sesin beklenen olduğunu, sonra çarpan bulaşığı ve makinenin dengesini LG'nin kendi kontrolleriyle anlatıyoruz. Kaynak tek bir modelin kılavuzu; tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ses programın başındaysa boşaltma pompası olabilir, LG'ye göre normal → kolların çarptığı bulaşığın yerini değiştir → bulaşıklar birbirine değmesin → alçak üst rafta kolun alt raftaki eşyaya çarpıp çarpmadığına bak → üst plakaya çapraz bastır, makine sallanıyor mu → kapak sürtünmeden kapanıyor mu. Ayak ayarı ve su basıncı servise.

## Adım adım: evde denenecekler

**1. Sesin zamanlamasına bak.** LG'nin gürültü satırına göre çalışma sırasında bir miktar ses normal ve LG burada **boşaltma pompasını, boşaltma programının başında** diye anıyor. Ses yalnız programın başında geliyorsa bu, LG'nin saydığı beklenen seslerden biri olabilir. Başka bir anda geliyorsa sonraki adımlara geç.

**2. Kolların yolunu aç.** LG'nin tablosundaki ikinci neden: **püskürtücü kol bulaşıklara çarpıyor** → **bulaşıkları farklı şekilde yerleştir.** Alt raftan aşağı sarkan bir tava sapı, uzun bir kepçe ya da kesme tahtası kolun dönüş yoluna giriyor olabilir. LG'nin kullanım bölümü de hiçbir bulaşığın **püskürtücü kolları engellememesini** istiyor.

**3. Bulaşıklar birbirine değmesin.** LG'nin yükleme talimatına göre bulaşıklar **birbirine değmemeli** ve bir bulaşık **diğerinin üzerine** konmamalı. Yerleştirmeyi buna göre düzelt.

**4. Alçak üst rafı kontrol et.** DFC325HD'de üst rafın yüksekliği üç konumda ayarlanabiliyor. LG'nin raf bölümündeki not doğrudan bu konuyla ilgili: üst raf **alçak konumdayken,** püskürtücü kol da dahil olmak üzere **üst rafın alt kısmının alt raftaki eşyalara çarpıp çarpmadığını** kontrol et. Kılavuz, raf ayarını değiştirdikten sonra kolların **serbestçe dönüp dönmediğinin** kontrol edilmesini de istiyor.

**5. Makine dengede mi?** Tablodaki diğer neden: **cihaz hizalanmamış** → **hizalama ayaklarını ayarlayın.** LG'nin kurulum bölümündeki kontrolü sen de yapabilirsin: **üst plakayı çapraz it;** makine sallanıyorsa ayaklar yeniden ayarlanmalı. Ayar ise kılavuza göre **anahtarla** yapılıyor ve LG montajın **yetkili servis elemanınca** yapılmasını istiyor; bu kısmı kurulumu yapana ya da servise bırak.

**6. Kapağı dinle.** LG'ye göre doğru hizalanmış bir makinede kapak açılırken **meyil, basıklık ya da sürtünme sesi** olmamalı; kapak **sorunsuz ve gürültüsüz** açılıp kapanmalı. Kapağı birkaç kez aç-kapa. Sürtünme, gıcırtı ya da bir tarafa düşme varsa beşinci adımdaki hizalama konusu servise gider.

## Normal sayılan diğer sesler

- **Kapağı açınca sürekli bip:** LG'nin tablosuna göre program sırasında ya da biter bitmez kapak açıldığında içerisi sıcak olduğu için makine bip sesi çıkarıyor. Çözüm: **cihaz ve bulaşıklar soğuyana kadar kapağı kapat.** Kapak kapanınca ya da iç sıcaklık düşünce ses duruyor.
- **Düğme sesleri:** DFC325HD'de **Çift Duşlama ve Enerji Tasarrufu** düğmelerine **3 saniye** birlikte basılı tutarak açılıp kapatılıyor. LG'ye göre **hata uyarı sesi kapatılamıyor;** böyle bir uyarı duyuyorsan ekrandaki kodu not al.

## Su basıncı

LG'nin gürültü satırındaki son neden **su basıncının çok yüksek** olması; çözüm olarak **su basıncını ayarlayın** yazıyor. Kılavuza göre bu makinenin izin verilen giriş su basıncı **0,05-1,0 MPa.** Evdeki basıncı ölçmek ve ayarlamak bu rehberin kapsamında değil; ilk beş adımdan sonra ses sürüyorsa bunu yetkili servise sor.

Gürültü ile birlikte bulaşıklar da kirli çıkıyorsa [LG bulaşık makinesi temiz yıkamıyor](/blog/lg-bulasik-makinesi-temiz-yikamiyor/) rehberine, makinenin önünde su da varsa kardeş rehberimiz [LG bulaşık makinesi su kaçırıyor](/blog/lg-bulasik-makinesi-su-kaciriyor/) sayfasına bakabilirsin.

## Ne zaman servis

- Cihazdan **tuhaf bir ses, koku ya da duman** geliyorsa LG'nin güvenlik talimatı açık: **derhal elektrik fişini çıkar** ve LG müşteri hizmetleriyle iletişime geç.
- Makine sallanıyorsa ya da kapak sürtünerek kapanıyorsa ayak ayarı için kurulumu yapanı ya da servisi çağır.
- Bulaşıklar yeniden yerleştirildiği, raf kontrol edildiği hâlde ses sürüyorsa yetkili LG servisine başvur.

⛔ **Kendin-çöz sınırı burada biter.** Yerleştirme, raf ve kontrol kullanıcıya; ayak ayarı, su tesisatı ve makinenin içi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ses programın hangi anında geliyor: başında mı, ortasında mı, sonunda mı?
2. Kollara çarpan bir bulaşık var mıydı?
3. Üst raf hangi konumda?
4. Üst plakaya çapraz bastırınca makine sallanıyor mu?
5. Ekranda bir hata kodu ya da uyarı sesi var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
