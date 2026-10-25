---
title: "Grundig çamaşır makinesi sembolleri ve anlamları"
description: "Grundig çamaşır makinesi ekran işaretleri: kapak kilidi, çocuk kilidi, su yok, sıkma yok, suda bırakma ve Bluetooth sembolleri kılavuza göre adım adım."
slug: "grundig-camasir-makinesi-sembolleri-ve-anlamlari"
date: "2026-10-25"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ küme ajanı (YK #182 Dalga 8, küme Z3 büyük markalar GSC). Konu seçimi: GSC www-5 (3 ay) "grundig çamaşır makinesi ekran işaretleri" 29 gösterim, poz 6.34;
#   origin/main'de grundig-camasir-makinesi-sembolleri* yok; Grundig çamaşırda hata-kodlari, resetleme, deterjan-almiyor, temiz-yikamiyor var. Dalga 6/7/8 klasörlerinde yok.
# OT (bu koşu) "grundig çamaşır makinesi sembolleri" → 1. "…sembolleri ve anlamları" 2. "…sembolleri"; "grundig çamaşır makinesi ekran işaretleri" → 1. aynı sorgu.
# Hub: grundig-camasir-makinesi-hata-kodlari satırları E5, E8, E12, E17, E18, E27, E29, E84, Err, SC → kodlar burada açıklanmadı, bağlantı verildi.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.grundig.com'dan indirildi, HTTP 200, md5 yerel kopyalarla (blog-taslaklar/kaynak-grundig-sprint/cm2, cm3) aynı.
#  (A) GWM 9701 Y  https://download.grundig.com/Download.UsageManualsGrundig/tr_TR_202012281339697_User%20Manual%20-%20File%20(Long)tr_TR.pdf  md5 a4587b21fd0c0725e0879dec061e1031
#  (B) GWM 91014   https://download.grundig.com/Download.UsageManualsGrundig/tr_TR_Manual_7167420600_tr_TR20210319-141313-819.pdf  md5 eafeccdc1e23e0125b86ef9af802d8c2
# A s.12 Sembol Tablosu · s.13 4.3.2 Ekran sembolleri · s.18 sıkma yok / suda beklet · s.20-21 çocuk kilidi, Bluetooth, zaman ekranı · s.23 kapak kilidi · s.24 iptal, End · s.29-30 sorun giderme.
# BİLEREK YAZILMAYANLAR: hata kodlarının açıklaması (hub'da) · acil kapak açma kolunun "alet yardımıyla" çıkarılması (ALET KURALI) · kart/kilit mekanizması · fiyat.
# Alıntı denetim tablosu: grundig-camasir-makinesi-sembolleri-ve-anlamlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Kapak kilidi sembolü yanıyorsa kapağı zorlama; Başlat / Duraklat ile duraklat ve sembolün sönmesini bekle."
  - "Çocuk kilidi sembolü varsa Yardımcı Fonksiyon düğmesi 3'e üç saniye basılı tutup geri sayımla kilidi kapat."
  - "Su yok göstergesi yanıyorsa muslukları, giriş hortumunu ve su girişi filtresini kontrol et."
  - "Sıkma yok ya da suda bırakma göstergesi yanıyorsa sıkma devrini ayarlayıp Başlat / Duraklat'a bas."
  - "Bluetooth ya da uzaktan kontrol ikonu yanıp sönüyorsa makine akıllı cihazla eşleşmeye çalışıyordur; uygulamadan bağlantıyı tamamla."
  - "Süre bilgisi geri saymıyorsa makinenin su alma, ısıtma ya da sıkma adımında beklediğini bil."
  - "Ekranda bir hata kodu görüyorsan Grundig hata kodları sayfasına bak; tekrar ediyorsa yetkili servisi ara."
faq:
  - q: "Grundig çamaşır makinesinde kilit işareti ne demek?"
    a: "Ekranda iki ayrı kilit sembolü olabilir. Grundig GWM 9701 Y kılavuzuna göre biri Kapak kilidi devrede sembolü, diğeri Çocuk Kilidi Devrede sembolüdür. Kapak kilidi su seviyesi ya da sıcaklık uygunken Başlat / Duraklat ile kalkar; çocuk kilidi Yardımcı Fonksiyon düğmesi 3'e üç saniye basılı tutularak kapatılır."
  - q: "Grundig çamaşır makinesinde musluk işareti yanıyor, neden?"
    a: "Kılavuzun ekran listesinde f harfiyle gösterilen Su yok göstergesi var; simgenin şekli modele göre değişebilir, kendi kılavuzundaki çizime bak. Sorun giderme tablosu su almama için dört neden sayıyor: musluk kapalı, su girişi hortumu bükülmüş, su girişi filtresi tıkalı ya da yükleme kapağı kapanmamış."
  - q: "Ekranda End yazıyor, makine bozuk mu?"
    a: "Hayır. Grundig kılavuzuna göre program tamamlandığında ekranda End (Bitiş) sembolü görüntülenir. On dakika boyunca hiçbir düğmeye basılmazsa makine kapalı moda girer, ekran ve tüm göstergeler kapanır."
  - q: "Çocuk kilidi açıkken düğmelere basınca bip sesi geliyor, normal mi?"
    a: "Evet. Kılavuza göre çocuk kilidi etkinken düğmelere basılırsa sesli uyarı verilir; düğmelere arka arkaya beş kez basılırsa sesli uyarı iptal olur. Çocuk kilidi devredeyken makineyi açma kapama düğmesiyle kapatıp açabilirsin; program kaldığı yerden devam eder."
  - q: "Ekrandaki sembollerin hepsi benim makinemde var mı?"
    a: "Olmayabilir. Grundig kılavuzu bu bölümdeki görsellerin şematik olduğunu, makinenin özellikleriyle birebir aynı olmayabileceğini yazıyor. Kendi modelinin kılavuzundaki ekran çizimine bak."
images:
  coverAlt: "Banyoda duran beyaz bir önden yüklemeli çamaşır makinesi"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda ilgili filtre"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Grundig çamaşır makinenin ekranında bir kilit, bir musluk ya da tanımadığın küçük bir ikon yanıyor ve ne anlama geldiğini bilmiyorsun. Grundig'in **GWM 9701 Y** ve **GWM 91014** kullanma kılavuzlarında ekrandaki işaretler "Ekran sembolleri" başlığı altında harflerle tek tek sayılıyor. Bu yazıda bu listeyi, en çok sorulan sembollerin ne zaman yandığını ve ekranda gördüğünde ne yapman gerektiğini kılavuzdan çıkardık. Kılavuzun kendi notu da var: bu bölümdeki görseller şematiktir, **makinenle birebir aynı olmayabilir;** kendi modelinin çizimine bak.

Çamaşır makinendeki soruna özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kilit sembolü ya kapak kilidi ya çocuk kilidi. "Su yok" göstergesi yanıyorsa musluk, hortum ve su girişi filtresine bak. Ekranda **End** programın bittiğini söyler. E ile başlayan kodlar sembol değil hata kodudur; [Grundig çamaşır makinesi hata kodları](/blog/grundig-camasir-makinesi-hata-kodlari/) sayfasına bak.

## Ekran sembolleri listesi

GWM 9701 Y kılavuzundaki ekran çiziminde semboller harflerle işaretli:

| Harf | Sembol | Harf | Sembol |
|---|---|---|---|
| a | Sıcaklık göstergesi | j | Gecikmeli Başlatma Etkin göstergesi |
| b | Sıkma devri göstergesi | k | Yardımcı Fonksiyon göstergeleri 3 |
| c | Süre bilgisi | l | Çocuk Kilidi Devrede sembolü |
| d | Kapak kilidi devrede sembolü | m | Yardımcı Fonksiyon göstergeleri 2 |
| e | Program takip göstergesi | n | Yardımcı Fonksiyon göstergeleri 1 |
| f | Su yok göstergesi | o | Sıkma Yok göstergesi |
| g | Çamaşır ekle göstergesi | p | Suda Bırakma göstergesi |
| h | Bluetooth bağlantı göstergesi | r | Soğuk Su göstergesi |
| i | Uzaktan Kontrol göstergesi | | |

Kılavuzun ayrıca bir **Sembol Tablosu** var; orada Ön yıkama, Hızlı, Ekstra Su, Kırışık Önleme, Buhar, Gece Modu, Kapak Kilidi, Çocuk Kilidi, Su Yok, Erteleme, Giysi Ekle ve Program İndirme gibi simgelerin adları veriliyor.

## Adım adım: Grundig ekranında sembol görünce

**1. Kapak kilidi sembolü.** Makine çalışırken kapak kilitlidir ve sembol yanar. Kılavuza göre **Başlat / Duraklat** düğmesine bastığında makinedeki su seviyesi uygunsa kapak kilidi devre dışı kalır ve **sembol kaybolur.** Su seviyesi yetersizse kilit kalkmaz, sembol görünmeye devam eder. Makinenin içindeki su **50°C'nin üzerindeyse** güvenlik nedeniyle kilit su seviyesi uygun olsa da açılmaz. Kapağı zorlama.

**2. Çocuk kilidi sembolü.** Kılavuza göre çocuk kilidini kapatmak için **Yardımcı Fonksiyon düğmesi 3'e 3 saniye** basılı tut; ekrandaki **"3-2-1"** geri sayımı bitince Çocuk Kilidi simgesi yok olur. Kilit açıkken düğmelere basarsan sesli uyarı verilir. Kilit devredeyken program seçim düğmesini çevirmek programı **iptal etmez;** önce kilidi kapatman gerekir.

**3. Su yok göstergesi.** Kılavuz bu göstergeyi yalnız adıyla listeliyor; adından, makinenin yeterli su alamadığını gösterdiğini çıkarıyoruz (çıkarım). Kılavuzun sorun giderme tablosu "Ürün su almıyor" satırında dört neden sayıyor: **musluk kapalı** olabilir, **su girişi hortumu bükülmüş** olabilir, **su girişi filtresi tıkalı** olabilir ya da **yükleme kapağı kapanmamış** olabilir. Muslukları aç, hortumu düzelt, filtreyi temizle, kapağı kapat. Genel kontroller [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısında.

**4. Sıkma yok ve suda bırakma göstergeleri.** Bu iki sembol arıza değil, senin ya da programın seçimi. Kılavuza göre sıkma devrini azalttıkça ekranda modele bağlı olarak **"Suda Beklet"** ve **"Sıkma Yok"** seçenekleri görünür. Suda bıraktığın çamaşırları sıkmak istiyorsan **sıkma devrini ayarla ve Başlat / Duraklat'a bas;** program kaldığı yerden devam eder, suyu tahliye edip çamaşırları sıkar. Sıkmadan yalnız suyu boşaltmak istiyorsan sıkma devrini değiştirmeden Başlat / Duraklat'a basman yeterli.

**5. Bluetooth ve uzaktan kontrol ikonları.** Kılavuza göre Bluetooth'u açmak için **Uzaktan Kontrol düğmesine 3 saniye** basılı tutulur; ürün akıllı cihazla eşleşirken **Bluetooth ikonu yanıp söner,** bağlantı başarılı olursa ışığı açık kalır. Bağlantının etkinleşmesi için HomeWhiz uygulamasının ilk kurulumu tamamlanmış olmalı. Yanıp sönen ikon tek başına arıza değildir.

**6. Süre bilgisi geri saymıyor.** Ekrandaki süre "01:30" biçiminde kalan zamanı gösterir. Kılavuza göre süre **su alırken,** **ısıtma adımında** ve **sıkma adımında** durabilir: makine yeterli suyu alana, seçili sıcaklığa ulaşana ya da dengesiz yükü düzeltene kadar geri saymaz. Su basıncı, voltaj ve su sıcaklığı da süreyi uzatabilir.

**7. Hata kodu varsa.** Ekranda harf ve rakamdan oluşan bir kod görüyorsan bu bir sembol değil, hata kodudur. Kodların anlamı ve ilk kontroller [Grundig çamaşır makinesi hata kodları](/blog/grundig-camasir-makinesi-hata-kodlari/) sayfasında. Kod temizlendikten sonra da tekrar ediyorsa **Grundig yetkili servisine** haber ver.

## Program bitince

Kılavuza göre program tamamlandığında ekranda **End (Bitiş)** sembolü görüntülenir. **On dakika** boyunca hiçbir düğmeye basılmazsa makine kapalı moda girer, ekran ve bütün göstergeler kapanır. Açma / Kapatma düğmesine bastığında tamamlanan program adımları yeniden görüntülenir. Programı yarıda iptal ettiysen ve su kapak hizasının üzerindeyse kılavuz, Program Seçim düğmesini **Pompa+Sıkma** programına getirip suyu tahliye etmeni söylüyor.

## Ne zaman servis

- Su yok göstergesi musluk, hortum ve filtre kontrolünden sonra da yanıyorsa
- Kapak kilidi sembolü program bittiği hâlde sönmüyor, kapak açılmıyorsa
- Ekranda bir hata kodu tekrar ediyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortum, su girişi filtresi, pompa filtresi ve tuş ayarları sende; kapak kilit mekanizması, elektronik kart ve gövdenin içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ne?
2. Ekranda hangi sembol ya da kod yanıyor?
3. Musluk açık, filtre temiz mi?
4. Sorun hangi program adımında başladı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Makineyi sıfırlamak istiyorsan [Grundig çamaşır makinesi resetleme](/blog/grundig-camasir-makinesi-resetleme/) yazısına bak. Bil, gör, çağır.
