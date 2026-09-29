---
title: "Siemens bulaşık makinesi su almıyor"
description: "Siemens bulaşık makinesi su almıyorsa Siemens'in sırası: musluk, giriş hortumu, hortum süzgeci, zaman ön seçimi ve reset; E:32-00 ne anlatıyor."
slug: "siemens-bulasik-makinesi-su-almiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Siemens'in kendi alan adlarından indirildi, HTTP 200.
# #88: web araması KULLANILMADI; belgeler siemens-home.bsh-group.com/tr menülerinden ve ürün sayfalarındaki kılavuz bağlantılarından bulundu.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-bulasik-sprint/ · PDF okuma pdftotext -layout, sayfa = PDF sayfası = basılı sayfa no; s.40-41 pdftoppm görüntüsüyle teyit edildi.
#  (W3) Siemens TR "Bulaşık makinen su almıyor mu?"  https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/bulasik-makineniz-hakkinda/su-almiyor  gövde metni md5 fa517c97fc526492f4568a424dd239c3 (HTML dinamik; iki indirmede gövde birebir aynı)
#  (K1) SN23HW62MT kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001706611_H.pdf  52 s.  md5 168ec8d8b1f400c2cb09856890782627  (sayfa atıfları bu belgeye göre)
#  (K2) SN45EB01NT  https://media3.bsh-group.com/Documents/9002038247_A.pdf  52 s.  md5 02b0114f050e3292c565f1404f08be4c
#  (K3) SN25EI83CT  https://media3.bsh-group.com/Documents/9002038027_A.pdf  56 s.  md5 d4a5a736e405a027d5f2230f9a841418
#  (K4) SN63HX62MT  https://media3.bsh-group.com/Documents/9002017437_B.pdf  52 s.  md5 2379b88f4e313307fdeb303ce8eda0b5
# Kod satırları (K1 s.40-41; K2 s.42-43, K3 s.46-47, K4 s.40-41 aynı):
#   "E:32-00 değişimli olarak yanıyor veya su girişi göstergesi yanıyor. | Besleme hortum bükülmüş. Giriş hortumunu bükülme olmadan döşeyiniz. Musluk kapalı. Musluğu açınız. Musluk sıkışmış veya kireçlenmiş. Musluğu açınız.
#    Musluk açıkken akan su miktarı (debi) en az 10 l/dk olmalıdır. Besleme hortumunun veya AquaStop hortumunun su bağlantısındaki süzgeçler tıkanmış. 1. Cihazı kapatınız. 2. ... fişini prizden çekiniz. 3. Musluğu kapatınız.
#    4. Su bağlantısını sökünüz. 5. Süzgeci giriş hortumundan çıkarınız 6. Süzgeci temizleyiniz. 7. ... yerleştiriniz. 8. Su bağlantısını vidalayınız. 9. ... sızdırmazlığını kontrol ediniz. 10. Elektrik beslemesini sağlayınız. 11. Cihazı açınız."
#   "'Su beslemesinin kontrolü' göstergesi yanıp sönüyor | Teknik bir arıza mevcut. [güç tuşu] · fişi çek/sigortayı kapat · en az 2 dakika bekle · fişi tak · çalıştır · sorun yeniden ortaya çıkarsa: [güç tuşu], musluğu kapat, fişi çek, müşteri hizmetleriyle irtibata geçip hata kodunu bildir." (K1 s.40)
# Diğer: K1 s.32 "15.5 Zaman ön seçiminin ayarlanması" (24 saate kadar; h:00'a dek basarak devre dışı) · K1 s.48 Teknik veriler "Su giriş miktarı min. 10 l/dak", "Su basıncı min. 50 kPa (0,5 bar) maks. 1000 kPa (10 bar)".
# BİLEREK YAZILMAYANLAR: E:30-00/E:31-00/E:34-00 (su koruma / sürekli su akışı) — kullanıcı adımı yalnız "musluğu kapat + servisi ara", bu yazıya yalnız sınır olarak girdi ·
#   su giriş valfi / AquaStop parça değişimi (belgede kullanıcıya verilmiyor, #31) · W3'teki "cihazla verilen yeni hortum kullanılmalı" yalnız kurulum cümlesi olarak geçti, hortum değişimi adımı yazılmadı · E15 ile eşleme (belgede yok) · süre ve #46 kapsamındaki rakamlar.
# Alıntı denetim tablosu: siemens-bulasik-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Makinenin kullanım kılavuzu"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Makinenin bağlı olduğu musluğun tam açık olduğunu ve vananın çevresinde görünür hasar olmadığını kontrol et."
  - "Makineyi hafifçe öne çekip giriş hortumunda bükülme ya da ezilme varsa düzelt."
  - "Musluğu kapat, su bağlantısını musluktan ayır ve süzgeci giriş hortumundan çıkar."
  - "Süzgeci akan temiz su altında küçük bir fırçayla temizle ve hortuma geri yerleştir."
  - "Su bağlantısını musluğa vidala, musluğu aç ve bağlantıda sızıntı olup olmadığını kontrol et."
  - "Fişi tak, makineyi aç; zaman ön seçimi (h:..) ayarlıysa kapat ya da programı iptal edip yeniden başlat."
  - "Musluk ışığı sönmüyorsa modeline göre Reset tuşuna 3-4 saniye basarak makineyi sıfırla."
faq:
  - q: "Siemens bulaşık makinesi neden su almaz?"
    a: "Siemens'in destek sayfası beş sebep sayıyor: su kaynağı (musluk) kapalı ya da yetersiz, giriş hortumu bükülmüş veya sıkışmış, temiz su bağlantısındaki filtre ya da AquaStop hortumu tıkanmış, gecikmeli program başlatma (zaman ön seçimi) aktif ya da musluk ışığı yanıyor. Kılavuzdaki E:32-00 satırı da aynı yere bakıyor: bükülmüş hortum, kapalı ya da kireçlenmiş musluk ve tıkalı süzgeç."
  - q: "E:32-00 hatası ne demek?"
    a: "Siemens kılavuzunda E:32-00 değişimli olarak yanıyorsa ya da su girişi göstergesi yanıyorsa şu sebepler sayılıyor: besleme hortumu bükülmüş, musluk kapalı, musluk sıkışmış veya kireçlenmiş, ya da besleme hortumunun veya AquaStop hortumunun su bağlantısındaki süzgeçler tıkanmış. Kılavuza göre musluk açıkken akan su miktarı dakikada en az 10 litre olmalıdır."
  - q: "Musluktan yeterli su geldiğini nasıl anlarım?"
    a: "Siemens'e göre bulaşık makinesinin bağlı olduğu musluktaki debi dakikada 10 litre olmalıdır; kılavuzun teknik verilerinde de su giriş miktarı en az 10 litre/dakika olarak geçiyor. Debi bu değerde değilse Siemens bir tesisatçıyla iletişime geçmeni öneriyor."
  - q: "Su beslemesi göstergesi yanıp sönüyor, bu da su almıyor demek mi?"
    a: "Siemens kılavuzu bu durumu ayrı bir satırda veriyor: 'Su beslemesinin kontrolü' göstergesi yanıp sönüyorsa teknik bir arıza mevcuttur. Kılavuzun yolu şöyle: açma/kapama tuşuna bas, fişini çek ya da sigortayı kapat, en az 2 dakika bekle, fişi takıp cihazı çalıştır. Sorun yeniden ortaya çıkarsa açma/kapama tuşuna bas, musluğu kapat, fişi çek ve müşteri hizmetlerine hata kodunu bildir."
images:
  coverAlt: "Bulaşık makinesinin arkasındaki musluğa bağlı su giriş hortumu ve hortum ucundan çıkarılmış küçük süzgeç"
---

Programı başlattın ama makineden tanıdık su sesi gelmiyor; ya da ekranda **E:32-00** değişimli olarak yanıyor, su girişi göstergesi açık. Siemens'in kullanım kılavuzu bu kodun sebeplerini tek tek sayıyor ve hepsi makinenin dışında: **bükülmüş besleme hortumu, kapalı ya da kireçlenmiş musluk ve hortum bağlantısındaki tıkalı süzgeç.** Siemens'in destek sayfası buna iki madde daha ekliyor: **gecikmeli başlatma** açık kalmış olabilir ya da **musluk ışığı** yanıyor olabilir. Bu yazıda Siemens'in sırasını, kılavuzdaki süzgeç temizliği adımlarıyla birlikte anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → musluk tam açık mı → giriş hortumu bükülmüş mü → musluğu kapatıp hortum ucundaki süzgeci temizle → bağlantıyı vidala, sızıntıya bak → fişi tak, zaman ön seçimini kapat → musluk ışığı sönmüyorsa Siemens'in reset yöntemi. Göstergesi **yanıp sönüyorsa** ya da E:30-00, E:31-00, E:34-00 görüyorsan musluğu kapat ve servisi ara.

## E:32-00 ne anlatıyor?

Siemens Türkiye sitesinde satışta olan modellerin kılavuzlarında (SN23HW62MT, SN45EB01NT, SN25EI83CT, SN63HX62MT) su alma tarafındaki satır şöyle başlıyor: **"E:32-00 değişimli olarak yanıyor veya su girişi göstergesi yanıyor."** Altında sayılan sebepler:

- **"Besleme hortum bükülmüş."** Giriş hortumunu bükülme olmadan döşe.
- **"Musluk kapalı."** Musluğu aç.
- **"Musluk sıkışmış veya kireçlenmiş."** Musluğu aç. Kılavuza göre musluk açıkken akan su miktarı **en az dakikada 10 litre** olmalı.
- **"Besleme hortumunun veya AquaStop hortumunun su bağlantısındaki süzgeçler tıkanmış."** Süzgeci çıkar ve temizle.

Aynı sayfalarda iki satır daha var ve bunlar kullanıcıya değil servise bakıyor: **E:30-00 ve E:31-00** "Su koruma sistemi etkin", **E:34-00** "Cihazın içine sürekli su akıyor." Üçünde de Siemens'in talimatı aynı: **musluğu kapat ve müşteri hizmetlerini ara.** Başka bir kod görüyorsan [Siemens bulaşık makinesi hata kodları](/blog/siemens-bulasik-makinesi-hata-kodlari/) yazısına bak; kesin karşılık her zaman cihazının kendi kılavuzundadır.

## Adım adım: evde denenecekler

**1. Fişi çek.** Kılavuzun süzgeç yordamı bununla başlıyor: **cihazı kapat ve fişini prizden çek.** Hortum ve bağlantı kontrollerini makine kapalıyken yap.

**2. Musluğu kontrol et.** Siemens'in ilk önerisi su kaynağı: makinenin bağlı olduğu **vananın açık olup olmadığını** kontrol et ve vananın çevresinde **gözle görülür bir hasar** olmadığından emin ol. Kılavuzdaki iki madde de buraya bakıyor: musluk kapalıysa ya da sıkışmış veya kireçlenmişse **musluğu aç.** Siemens'e göre musluktaki debi **dakikada 10 litre** olmalı; değilse bir **tesisatçıyla** iletişime geçmeni öneriyor.

**3. Giriş hortumuna bak.** Siemens'in tarifi: cihazı **hafifçe öne doğru çekerek** soğuk su giriş hortumunda ve atık su hortumunda bükülme olup olmadığını kontrol et. Görünürde bükülme, dolanma ya da ezilme varsa **düzelt.** Kılavuzun cümlesi: giriş hortumunu **bükülme olmadan döşe.**

**4. Hortum süzgecini çıkar.** Kılavuzun sırasıyla: **musluğu kapat**, su bağlantısını musluktan ayır ve **süzgeci giriş hortumundan çıkar.**

**5. Süzgeci temizle.** Siemens'in destek sayfasına göre filtreyi **akan temiz suyla** ve **küçük bir fırça** kullanarak temizle. Sonra süzgeci **giriş hortumuna geri yerleştir.**

**6. Bağlantıyı vidala ve sızıntıya bak.** Su bağlantısını musluğa **vidala**, musluğu aç ve Siemens'in istediği gibi bağlantının **sızdırmazlığını kontrol et.**

**7. Fişi tak, zaman ön seçimine bak.** Elektrik beslemesini sağla ve cihazı aç. Siemens'in destek sayfasına göre bazı modellerde program başlangıcı **24 saate kadar** ertelenebilir; ekranda **h:01** gibi bir süre görüyorsan program henüz **başlamamıştır.** Kılavuza göre zaman ön seçimini, ekranda **h:00** görünene dek ilgili tuşa basarak kapatabilirsin. Makineyi zaman ön seçimli bir programla başlattıysan Siemens önce bu **programı iptal etmeni** istiyor.

**8. Musluk ışığı yanıyorsa sıfırla.** Siemens'in destek sayfasına göre musluk ışığı yanıyorsa makineye **reset** yapılır: modeline göre **"Reset"** yazan tuşa **3 ya da 4 saniye** basılı tut; kaç saniye gerektiği Start tuşunun altındaki reset ibaresinde yazar. **Ekranlı modellerde** göstergede 0:01 görünür ve makine devam eden programı sonlandırır; **0:00** görünene kadar bekle. **Ekransız modellerde** **ECO** ışığı yanana kadar bir dakika bekle.

## Gösterge yanıp sönüyorsa

Siemens kılavuzu **yanan** su girişi göstergesiyle **yanıp sönen** "Su beslemesinin kontrolü" göstergesini ayrı satırlarda veriyor. İkincisi için kılavuzun teşhisi **"Teknik bir arıza mevcut."** Kılavuzun yolu:

1. **Açma/kapama (⏻) tuşuna** bas, ardından **fişini çek** ya da sigortayı kapat.
2. **En az 2 dakika** bekle.
3. Fişi tak ya da sigortayı aç ve cihazı çalıştır.
4. Sorun yeniden ortaya çıkarsa açma/kapama tuşuna bas, **musluğu kapat**, fişi çek ve müşteri hizmetlerine **hata kodunu** bildir.

## Ne zaman servis

Musluk tam açık, debi yeterli, hortum düz, süzgeç temiz, zaman ön seçimi kapalı, reset yapılmış ve makine hâlâ su almıyorsa Siemens'in kullanıcıya verdiği adımlar bitmiş demektir. Siemens bu noktada servis randevusu oluşturmanı öneriyor. **E:30-00, E:31-00 ve E:34-00** ile yanıp sönen su beslemesi göstergesi ise baştan servis konusu: musluğu kapat ve müşteri hizmetlerini ara.

Kılavuzun genel uyarısı: usulüne uygun olmayan onarımlar tehlikelidir, cihazda onarımı yalnız eğitimini almış uzman personel yapar. Siemens'in destek sayfası kurulumla ilgili bir not da düşüyor: cihaz su şebekesine bağlanırken **daima cihazla birlikte verilen yeni su giriş hortumu** kullanılmalı, eski hortum tekrar kullanılmamalı.

⛔ **Kendin-çöz sınırı:** musluk, hortumun dış kısmı, hortum süzgeci ve kumanda paneli kullanıcıya; su koruma sistemi, valf ve makinenin içi servise aittir.

Konuyu markadan bağımsız anlattığımız [bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/) yazısı da işine yarayabilir. Ekranda musluk işaretiyle birlikte **E15** görüyorsan o kodun ayrı bir yazısı var: [Siemens bulaşık makinesi E15 hatası](/blog/siemens-bulasik-makinesi-e15-hatasi/). Makine su alıyor ama **boşaltmıyorsa** [Siemens bulaşık makinesi su boşaltmıyor](/blog/siemens-bulasik-makinesi-su-bosaltmiyor/) yazısına geç.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
