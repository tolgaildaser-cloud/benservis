---
title: "Midea çamaşır makinesi resetleme nasıl yapılır"
description: "Midea çamaşır makinesinde ayrı reset tuşu yok. Duraklatma, kapat-aç, hata sonrası yeniden başlatma, çocuk kilidi CL ve WiFi sıfırlama; kılavuzdaki sıra."
slug: "midea-camasir-makinesi-resetleme"
date: "2026-10-24"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X4). origin/main b4098f8'de "midea" slug/başlık yok; "midea" yalnız arcelik-klima-hata-kodlari.md provenans yorumunda (klima sorgusu, ilgisiz). Diğer markaların resetleme yazıları başka marka sorgusu.
# Arama kanıtı (ham: _kaynak/ot-kanit.txt, 24 Eki 12:44 ve 13:03): "midea çamaşır makinesi r" → 1. "…resetleme" (tek öneri); "midea çamaşır makinesi res" → 1.; "midea çamaşır makinesi" → 5. GSC: satır yok (www-3..6 Sorgular.csv).
# Belge zinciri: Midea UK resmî ürün sayfası (www.midea.com/uk/..., bu koşu 200) → www.midea.com/content/dam/midea-aem/uk/... PDF (GET 200 application/pdf).
#  (M1) MF20EW80 kullanım kılavuzu EN, 54 s., md5 6cbc56b159733cad80716e00d1c695cb
#  (M5) MF205W100WBA30 kullanım kılavuzu EN, 45 s., md5 b1d7f92cddf127cf1eb656039089025f
# BİLEREK YAZILMAYANLAR: gizli reset kombinasyonu / servis-test modu (belgelerde yok) · kart teşhisi (#31) · fiyat (#46) · Türkiye modeli ayrıntısı (midea.com.tr bu koşuda erişilemedi).
# Alıntı denetimi: midea-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Panelinde ayrı bir reset tuşu olmadığını bil; işi Başlat/Duraklat ve Açma/Kapama düğmeleri görüyor."
  - "Programı yalnızca durdurmak istiyorsan Başlat/Duraklat düğmesine bas."
  - "Başlamış programı bırakmak için makineyi kapatıp yeniden aç ve yeni program seç; gecikmeli başlatmayı program başlamadan Gecikme düğmesiyle sıfırla."
  - "Ekrandaki koda göre kapağı düzgün kapatıp yeniden başlat; kapak açılmıyorsa gücü kesip yeniden başlat."
  - "Düğmeler tepki vermiyor ve ekranda CL yazıyorsa çocuk kilidini aynı düğmelere yaklaşık üç saniye birlikte basarak kapat."
  - "Uyarı sesi kapalıysa Ekstra Durulama düğmesine yaklaşık üç saniye basarak geri aç."
  - "Uygulama bağlantısı koptuysa WiFi düğmesine yaklaşık üç saniye basıp ağ ayarını baştan yap; kod dönüyorsa servisi ara."
faq:
  - q: "Midea çamaşır makinesinde reset tuşu var mı?"
    a: "İncelediğimiz MF20EW80 ve MF205W100WBA30 kılavuzlarında ayrı bir reset tuşu ya da gizli tuş kombinasyonu yok. Kılavuzlar duraklatma, kapatıp açma ve yeniden başlatma yollarını tarif ediyor."
  - q: "Ekranda CL yazıyor, düğmeler çalışmıyor. Ne yapmalıyım?"
    a: "CL çocuk kilidinin açık olduğunu gösteriyor. MF20EW80'de üzerinde '3s for Child Lock' yazan iki düğmeye yaklaşık üç saniye birlikte bas. MF205W100WBA30'da bu düğmeler Sıcaklık ve Sıkma. Kilit yalnız aynı düğmelerle kapanıyor."
  - q: "Fişi çekip takmak reset yerine geçer mi?"
    a: "Kılavuzun sorun tablosunda kapak açılmıyorsa çözüm gücü kesip yeniden başlatmak. E12 ve diğer kodlarda da çözüm makineyi yeniden başlatmak. Kod geri gelirse bu bir arıza işareti; müşteri hizmetlerini ara."
  - q: "t19 kalibrasyonu makineyi sıfırlar mı?"
    a: "Kılavuzlar onu sıfırlama diye anlatmıyor. Kalibrasyon, makinenin yüklenen çamaşır miktarını algılamasını ayarlıyor. MF205W100WBA30 kılavuzu onu kurulumdan sonra yapılacak işler arasında sayıyor."
  - q: "WiFi bağlantısını nasıl sıfırlarım?"
    a: "MF20EW80 kılavuzuna göre WiFi düğmesine yaklaşık üç saniye basınca ağ ayarı baştan başlıyor ve ekranda AP görünüyor. Sonra uygulamadaki adımlarla yeniden bağlanıyorsun."
images:
  coverAlt: "Önden yüklemeli beyaz bir çamaşır makinesinin program düğmesi ve dijital ekranı"
  steps:
    - "Çamaşır makinesinin kontrol panelindeki düğme sırası"
    - "Panelde başlat duraklat düğmesi ve yanında ekran"
    - "Panelde açma kapama düğmesi ve program düğmesi"
    - "Kapağı kapatılmış önden yüklemeli çamaşır makinesi"
    - "Ekranında kısa harfler görünen çamaşır makinesi paneli"
    - "Panelde ekstra durulama düğmesi"
    - "Çamaşır makinesinin yanında masada duran telefon ve panelde kablosuz simgesi"
---

Midea çamaşır makinen bir kod gösterip durdu, yanlış programı başlattın ya da düğmeler hiçbir şeye tepki vermiyor. Panelde "reset" yazan bir tuş arıyorsan bulamayacaksın: Midea'nın kılavuzları ayrı bir reset tuşu tarif etmiyor. Duruma göre değişen birkaç yol var. Bu yazıda Midea'nın İngiltere sitesindeki MF20EW80 ve MF205W100WBA30 kullanım kılavuzlarını (ikisi de kılavuzun İngilizce baskısı, alıntılar Türkçeye çevrildi) sıraya koyduk. Türkiye'de satılan modelde düğme adları ve ayrıntılar farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Duraklatma: Başlat/Duraklat. Başlamış programı bırakmak: kapat, aç, yeni program seç. Kapak açılmıyorsa gücü kes, yeniden başlat. CL yazıyorsa çocuk kilidi. WiFi'de üç saniyelik basış ağı baştan kurar. Kod dönerse servis.

## Hangi "reset" ne işe yarar

| İstediğin | Kılavuzdaki yol | Kim |
|---|---|---|
| **Programı durdurup sürdürmek** | Başlat/Duraklat | 🛠️ Sen |
| **Başlamış programı bırakmak** | Kapat, aç, yeni program seç | 🛠️ Sen |
| **Kod sonrası yeniden denemek** | Yeniden başlat; kapak açılmıyorsa gücü kes | ⏳ Dene |
| **Düğmeler kilitli (CL)** | Çocuk kilidini aynı düğmelerle kapat | 🛠️ Sen |
| **Uygulama bağlanmıyor** | WiFi düğmesine uzun bas, AP | 🛠️ Sen |
| **Kod geri geliyor** | — | 🔧 Servis |

## Adım adım: Midea çamaşır makinesini sıfırlama

**1. Panelini tanı.** MF20EW80 kılavuzunun panel listesinde Açma/Kapama, Başlat/Duraklat, program düğmesi, ekran ve seçenek düğmeleri var; reset adında bir düğme yok. Kılavuzlarda gizli bir reset kombinasyonu ya da servis modu da tarif edilmiyor. Bu yüzden internette gördüğün tuş dizilerini deneme; aşağıdaki yollar kılavuzun kendi yolları.

**2. Sadece duraklat.** Programı silmeden durdurmak istiyorsan Başlat/Duraklat'a bas. Kılavuzun tarifi kısa: bu düğme programı başlatıyor ya da duraklatıyor. Tekrar basınca program sürüyor. Program ortasında çamaşır eklemek için MF20EW80 kılavuzu ayrı bir "Reload" işlevi tarif ediyor: ilgili düğmeye yaklaşık üç saniye basıyorsun, tambur durup kapak kilidi açılınca çamaşırı ekliyorsun.

**3. Başlamış programı bırak.** MF20EW80 kılavuzu bunu gecikmeli başlatma bölümünde anlatıyor. Program başlamadan önceyse Gecikme düğmesine ekranda 0 h görünene kadar bas. **Program başladıysa makineyi kapatıp yeniden aç ve yeni bir program seç.** Yanlış programla başladıysan yol bu.

**4. Kod sonrası yeniden başlat.** Hata tablosundaki çözümler çoğunlukla yeniden başlatmaya dayanıyor. E30'da kapağı düzgün kapatıp yeniden başlatıyorsun. E12'de (su taşması) çözüm **makineyi yeniden başlatmak**. Tabloda olmayan EXX kodlarında da önce yeniden başlatıyorsun, sorun sürerse müşteri hizmetlerini arıyorsun. Kapak açılmıyorsa sebep güvenlik koruması, çözüm **gücü kesip yeniden başlatmak**. Su boşaltma kodu için [Midea çamaşır makinesi E21 hatası](/blog/midea-camasir-makinesi-e21-hatasi/) yazısına bak.

**5. Çocuk kilidini kapat.** Düğmeler tepki vermiyor ve ekranda kalan süreyle birlikte **CL** yanıp sönüyorsa çocuk kilidi açık. Kilitliyken Açma/Kapama ve kilit düğmeleri dışında hiçbir düğme çalışmıyor. MF20EW80'de üzerinde "3s for Child Lock" yazan iki düğmeye yaklaşık üç saniye birlikte basıyorsun; MF205W100WBA30'da bu düğmeler Sıcaklık ve Sıkma. Kılavuz kilidin yalnız bu düğmelerle kapandığını ve yeni program seçmeden önce kapatılması gerektiğini söylüyor.

**6. Uyarı sesini geri aç.** Makine bip demiyorsa ses kapalı olabilir. İki kılavuzda da Ekstra Durulama düğmesine yaklaşık üç saniye basmak sesi kapatıyor, aynı basış geri açıyor. Kılavuzun notu ilginç: bu ayar **bir sonraki sıfırlamaya kadar** korunuyor. Yani kapatıp açmak sesi kendiliğinden geri getirmeyebilir (çıkarım); düğmeyle aç.

**7. WiFi ayarını sıfırla.** Uygulama makineyi göremiyorsa MF20EW80 kılavuzunun yolu: WiFi düğmesine yaklaşık üç saniye bas, ağ ayarı baştan başlasın. Ekranda **AP** görünüyor; sonra uygulamadaki adımlarla yeniden bağlanıyorsun. Kılavuz yönlendiricinin 2,4 GHz bandını desteklemesi gerektiğini de hatırlatıyor. WiFi'yi tamamen kapatmak için Sıcaklık düğmesine üç saniye basılıyor.

## Kalibrasyon reset değil

Bazı anlatımlarda "t19 reseti" diye geçen işlem aslında bir kalibrasyon. MF20EW80 kılavuzuna göre makine yüklenen çamaşır miktarını algılayabiliyor; kalibrasyon bu algılamayı ayarlayıp enerji ve su tüketimini en aza indirmeye yarıyor. Tambur boşken kapağı kapatıp makineyi açıyorsun, on saniye içinde Turbo ve Ekstra Durulama düğmelerine birlikte basıyorsun, ekranda t19 görününce Başlat'a basıyorsun. Ekrandaki sayı değişmeyi bırakınca kalibrasyon tamam. MF205W100WBA30'da düğmeler Power Guard ve Buhar; başarıda ekranda PAS, başarısızlıkta FAL çıkıyor. FAL tekrar ederse kılavuz müşteri hizmetlerini işaret ediyor. Kılavuzlar kalibrasyonu arıza çözümü olarak anlatmıyor; MF205W100WBA30 kılavuzu onu kurulumdan sonra yapılacak işler arasında sayıyor.

## Ne zaman servis

- Yeniden başlattıktan sonra aynı kod dönüyorsa
- EXX tipi bir kod sürekli geliyorsa
- Panel hiç yanmıyor ya da ekran çalışmıyorsa
- Kalibrasyonda FAL tekrar ediyorsa

⛔ **Kendin-çöz sınırı burada biter.** Düğmeyle duraklatma, kapatıp açma, çocuk kilidi, ses ve WiFi ayarı sende; elektronik kart, kablo, pompa ve makinenin içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin ne (tanıtım levhasında yazar)?
2. Ekranda hangi kod var?
3. Makineyi kapatıp açtın mı, gücü kesip yeniden başlattın mı?
4. Çocuk kilidi (CL) kapalı mı?
5. Kod hangi aşamada çıkıyor?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
