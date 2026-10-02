---
title: "LG bulaşık makinesi kurutmuyor"
description: "LG bulaşık makinesi bulaşıkları ıslak bırakıyorsa LG'nin sırası: parlatıcı ve seviyesi, tablet, Ekstra Kurutma, otomatik kapı açma, kapağı aralama."
slug: "lg-bulasik-makinesi-kurutmuyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, LG grubu, belirti rehberi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi, HTTP 200.
# Belge kimliği lg.com/tr DFC325HD.ABDPLTK ürün destek sayfasının kılavuz listesinden (www.lg.com/ncms/api/v1/support/proxy/retrieveManualSoftwareList?locale=TR) alındı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ (MD5.txt) · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
# Kurutma tablosu (L s.66) "Bulaşıklar kurumuyor.":
#   "Parlatıcı haznesi boş. • Boşsa, parlatıcı haznesini kontrol edin ve parlatıcı takviye edin. Daha iyi kurutma sonucu için kullanımdan sonra kapağı hafifçe açın."
#   · "Kullanılan tabletlerde parlatıcı olmayabilir. Bu durum kurutma performansını azaltır. • Parlatıcı içeren bir tablet kullanmaya başlayın ... Tabletler parlatıcı içermiyorsa alternatif olarak parlatıcı gözünde sıvı parlatıcı kullanabilirsiniz."
#   · "Ekstra Kurutma seçeneği olmadan bir program seçildi. • Ekstra Kurutma seçeneği varsayılan olan bir program seçin."
# Diğer: L s.26 Parlatıcı Ekleme (tırnakla kapağı aç; maksimum seviyeye kadar sıvı parlatıcı; kapağı kapat; dökülen parlatıcıyı sil) · "Çok fazla ya da çok az parlatıcı kurutma sonuçlarını etkileyebilir."
#   · L s.26 Parlatıcı Seviyesini Ayarlama: beş seviye, varsayılan 2; cihaz kapalıyken Güç + Çift Duşlama eş zamanlı; Gecikmeli Başlatma ile L0(kapalı)-L4; BAŞLAT ile kaydet, sonra enerji kapanır
#   · L s.27 NOT: "Parlatıcı ayarını çok düşük seviyeye ayarlamak ... kötü kurutma sonuçlarına neden olabilir." · "Ayarın çok yüksek seviyeye ayarlanması köpürmeye yol açarak kötü yıkama sonucuna neden olabilir."
#   · L s.28 Parlatıcı Takviye simgesi düşük seviyede yanıp söner · L s.30 Turbo'da Ekstra Kurutma varsayılan; Durulama ve Hızlı programda "kurutma uygulanmaz" · L s.31 Ekstra Kurutma: ekstra kurutma süresi + durulama sıcaklığını yükseltir; "Parlatıcı olmadığında bu seçenek otomatik olarak seçilir."
#   · L s.32 Otomatik Açık Kurutma (modele bağlı): kapıyı otomatik açarak kurutmayı artırır; "End" yazısını bekle; Enerji Tasarrufu + Yüksek Sıcaklık 3 sn ile aç/kapat · L s.39 Enerji Tasarrufu, Ekstra Kurutma ile birlikte mevcut değil
#   · L s.49 Faydalı İpuçları/Kurutma: plastik daha kötü kurur; "Kurutmaya yardım etmek için, programdan sonra kapak kısa bir süreliğine açılabilir."; bulaşıklar birbirine değmesin; Ekstra Kurutma ya da durulama seviyesi; 2'si/3'ü 1 arada tablet; otomatik kapı açılma önerisi; önce alt raf boşaltılır
#   · L s.40 "Hatalı yükleme, daha düşük kurutma ya da temizlik performansı ile sonuçlanabilir."
# BİLEREK YAZILMAYANLAR: ısıtıcı/fan teşhisi (belgede kurutma satırında yok) · tuş kombinasyonlarını başka modellere genelleme (DFC325HD'ye göre yazıldı, modele göre değişir uyarısıyla) · fiyat.
# Alıntı denetim tablosu: lg-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Sıvı bulaşık makinesi parlatıcısı", "Kuru bir bez"]
steps:
  - "Parlatıcı kapağını tırnağıyla aç, hazneyi maksimum seviyeye kadar sıvı parlatıcıyla doldur, kapağı kapat ve dökülen parlatıcıyı sil."
  - "Makine kapalıyken parlatıcı seviyesini kontrol et; L0 ya da düşük bir seviyedeyse bir kademe artırıp kaydet."
  - "Parlatıcı içermeyen tablet kullanıyorsan parlatıcı içeren tablete geç ya da parlatıcı gözüne sıvı parlatıcı koy."
  - "Ekstra Kurutma seçeneğini aç ya da bu seçeneğin varsayılan olduğu bir program seç; Hızlı ve Durulama'da kurutma yok."
  - "Modelinde Otomatik Açık Kurutma varsa bu özelliği etkinleştir."
  - "Bulaşıkları birbirine değmeyecek şekilde, kılavuzdaki yükleme düzenine göre yerleştir."
  - "Program bitince kapağı kısa bir süre hafifçe aç, sonra önce alt raftan başlayarak boşalt."
faq:
  - q: "LG bulaşık makinesi bulaşıkları ıslak bırakıyor, arıza mı?"
    a: "Önce LG'nin listesine bak. DFC325HD kullanıcı el kitabındaki 'Bulaşıklar kurumuyor' satırı üç neden sayıyor: parlatıcı haznesi boş, kullanılan tablette parlatıcı yok ya da Ekstra Kurutma seçeneği olmadan bir program seçilmiş. Üçü de kullanıcı tarafında düzeltilebilir."
  - q: "Plastik kaplar hep ıslak çıkıyor, neden?"
    a: "LG'nin faydalı ipuçları bölümüne göre plastik eşyalar diğer eşyalarla karşılaştırıldığında daha kötü kuruma sonuçları gösterebilir. Kurutmaya yardım etmek için LG programdan sonra kapağın kısa bir süre açılabileceğini yazıyor."
  - q: "Parlatıcı seviyesini sonuna kadar açsam daha iyi kurur mu?"
    a: "Her zaman değil. LG'ye göre çok fazla ya da çok az parlatıcı kurutma sonucunu etkileyebilir; ayarın çok yüksek olması köpürmeye ve kötü yıkamaya, çok düşük olması da nokta, leke ve kötü kurutmaya yol açabilir. DFC325HD'de seviye L0 (kapalı) ile L4 arasında, varsayılan 2."
  - q: "Ekstra Kurutma'yı Enerji Tasarrufu ile birlikte seçemiyorum, neden?"
    a: "DFC325HD'nin seçenek tablosuna göre Enerji Tasarrufu seçeneği Yüksek Sıcaklık ya da Ekstra Kurutma ile birlikte mevcut değil. Kurutma sorunu yaşıyorsan Ekstra Kurutma'yı tercih et. LG'ye göre bu seçenek programa ekstra kurutma süresi ekler ve durulama sıcaklığını yükseltir; parlatıcı olmadığında da kendiliğinden seçilir."
images:
  coverAlt: "Program sonunda hafifçe aralanmış bulaşık makinesi kapağı, üst sepette üzerinde su damlaları kalmış plastik kaplar ve bardaklar"
---

Program bitti, kapağı açtın ve bulaşıklar hâlâ ıslak. LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabında bunun için ayrı bir kurutma tablosu var ve tek satırı şu: **"Bulaşıklar kurumuyor."** LG bu satırda üç neden sayıyor: **parlatıcı haznesi boş, tablette parlatıcı yok, Ekstra Kurutma seçeneği olmadan bir program seçilmiş.** Kılavuzun başka bölümleri buna parlatıcı seviyesini, Otomatik Açık Kurutma özelliğini ve program sonrası kapağı aralamayı ekliyor. Bu yazıda hepsini LG'nin kendi sözleriyle sıraladık. Kaynak tek bir modelin kılavuzu; tuş adları ve tuş kombinasyonları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Parlatıcı haznesini doldur → parlatıcı seviyesi L0 ya da çok düşükse bir kademe artır → tabletin parlatıcı içermiyorsa sıvı parlatıcı ekle → Ekstra Kurutma'yı aç (Hızlı ve Durulama'da kurutma yok) → varsa Otomatik Açık Kurutma'yı etkinleştir → bulaşıklar birbirine değmesin → program bitince kapağı kısa süre arala. Plastiklerin geç kuruması LG'ye göre beklenen bir durum.

## Adım adım: evde denenecekler

**1. Parlatıcı haznesini doldur.** LG'nin tablosundaki ilk neden: **parlatıcı haznesi boş** → kontrol et ve **parlatıcı takviye et.** Parlatıcı azaldığında ekranda **Parlatıcı Takviye simgesi** yanıp söner. Doldurma sırası: **tırnağı kullanarak parlatıcı kapağını aç,** hazneye **maksimum doldurma seviyesine kadar sıvı parlatıcı** ekle, **kapağı kapat.** LG'nin iki uyarısı: yalnız **sıvı parlatıcı** kullan ve köpük oluşmaması için **dökülen parlatıcıyı silerek temizle.** Kılavuza göre kapak doğru kapanmazsa tambura fazla parlatıcı salınabiliyor.

**2. Parlatıcı seviyesine bak.** DFC325HD'de parlatıcı haznesinin **beş ayar seviyesi** var, varsayılan **2.** Ayar adımları kılavuza göre: makinenin **kapalı olduğundan emin ol,** mevcut ayarı görmek için **Güç ve Çift Duşlama** düğmelerine birlikte bas, **Gecikmeli Başlatma** düğmesiyle ayarı **L0 (kapalı) ile L4** arasında değiştir, istediğin seviyede **BAŞLAT** ile kaydet; kayıttan sonra makine kapanır. LG'ye göre parlatıcı ayarını **çok düşük** tutmak noktalara, lekelere ve **kötü kurutmaya** yol açabiliyor; **çok yüksek** tutmak ise köpürme ve kötü yıkamaya. Bu yüzden ayarı birer kademe değiştir.

**3. Tabletine bak.** Tablodaki ikinci neden: **kullanılan tabletlerde parlatıcı olmayabilir** ve bu kurutma performansını düşürür. LG'nin çözümü: **parlatıcı içeren bir tablete** geç; emin değilsen tablet üreticisine sor. Tabletin parlatıcı içermiyorsa **parlatıcı gözünde sıvı parlatıcı** kullan. Faydalı ipuçları bölümüne göre 2'si 1 arada, 3'ü 1 arada tabletlerde bulaşık hacmine göre ek durulama gerekebiliyor; bu durumda da LG Ekstra Kurutma'yı ya da durulama seviyesini öneriyor.

**4. Ekstra Kurutma'yı aç.** Tablodaki üçüncü neden: **Ekstra Kurutma seçeneği olmadan bir program seçilmiş** → **Ekstra Kurutma seçeneği varsayılan olan bir program** seç. LG'ye göre bu seçenek programa **ekstra kurutma süresi ekler ve durulama sıcaklığını yükseltir;** parlatıcı olmadığında kendiliğinden seçilir. DFC325HD'de **Turbo** programında Ekstra Kurutma varsayılan olarak açık. **Hızlı** ve **Durulama** programlarında ise kılavuza göre **kurutma uygulanmaz.** Not: seçenek tablosuna göre **Enerji Tasarrufu**, Ekstra Kurutma ile birlikte seçilemiyor.

**5. Otomatik Açık Kurutma'yı kullan.** Bu özellik LG'ye göre **satın alınan modele bağlı.** Varsa seçili program süresi içinde **kapıyı otomatik olarak açarak** kurutmayı artırıyor ve LG faydalı ipuçlarında bu özelliğin **etkinleştirilmesini tavsiye ediyor.** DFC325HD'de açıp kapatmak için **Enerji Tasarrufu ve Yüksek Sıcaklık** düğmelerine birlikte **3 saniye** basılı tutuluyor. En iyi sonuç için bulaşıkları çıkarmadan önce programın bitmesini bekle; LG'ye göre program, ekranda **"End"** yazısı belirdiğinde tamamen bitmiş olur.

**6. Bulaşıklar birbirine değmesin.** Kurutma ipuçlarındaki not: **bulaşıkların birbirine değmediğinden emin ol.** Kılavuzun yükleme bölümüne göre **hatalı yükleme daha düşük kurutma** performansıyla sonuçlanabiliyor; doğru yükleme kılavuzdaki resimlere göre yapılıyor.

**7. Kapağı kısa süre arala.** LG iki yerde aynı şeyi söylüyor: kurutma tablosunda **daha iyi kurutma sonucu için kullanımdan sonra kapağı hafifçe aç,** ipuçlarında **kurutmaya yardım etmek için programdan sonra kapak kısa bir süreliğine açılabilir.** Boşaltırken önce **alt rafı,** sonra üst rafı boşalt; LG'ye göre böylece üst raftan alttaki bulaşıklara su damlamaz. Bulaşıkları çıkarmadan önce **el sıcaklığına** gelip gelmediklerine bak.

## Arıza olmayan durum: plastik kaplar

LG'nin faydalı ipuçlarına göre **plastik eşyalar diğer eşyalarla karşılaştırıldığında daha kötü kuruma** sonuçları gösterebilir. Plastikler ıslak, cam ve porselen kuruysa bu beklenen bir durum; kapağı kısa süre aralamak LG'nin önerdiği yardım.

Parlatıcı ve tuz ayarının markadan bağımsız anlatımı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına, genel nedenler için [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/) sayfasına bakabilirsin. Bulaşıklar kuru ama kirli çıkıyorsa kardeş rehberimiz [LG bulaşık makinesi temiz yıkamıyor](/blog/lg-bulasik-makinesi-temiz-yikamiyor/) yazısına geç.

## Ne zaman servis

Parlatıcı dolu ve seviyesi uygun, Ekstra Kurutma açık, yerleştirme doğru ve kapağı program sonunda araladığın hâlde cam ve porselen de ıslak çıkıyorsa ya da ekranda bir hata kodu beliriyorsa yetkili LG servisine başvur. LG'nin hata tablosunda örneğin **HE** (ısıtıcı devre arızası) ve **tE** (termistör arızası) için yönlendirme: **aynı sorun yeniden meydana gelirse servisi çağırın.**

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, tablet, program, seçenekler ve yerleştirme kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Islak kalan hangi bulaşıklar: yalnız plastik mi, cam ve porselen de mi?
2. Parlatıcı simgesi yanıp sönüyor mu, parlatıcı seviyen kaç?
3. Hangi programı seçiyorsun, Ekstra Kurutma açık mı?
4. Tabletin parlatıcı içeriyor mu?
5. Modelinde Otomatik Açık Kurutma var mı, açık mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
