---
title: "Liebherr buzdolabı alarm veriyor: alarm nasıl kapatılır"
description: "Liebherr buzdolabı ötüyorsa kapı, elektrik kesintisi, sıcaklık alarmı ya da hata uyarısı olabilir. Onay simgesiyle kapatma ve kapı alarmı süresi."
slug: "liebherr-buzdolabi-alarm-veriyor"
date: "2026-10-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-28 PAZ alt ajanı (günlük yazı, tek marka; koşu 26 Eki 22:17). origin/main 9ed539dc content/blog/ altında "liebherr" geçen yazı, slug ya da başlık YOK.
#   Yakın sayfalar başka marka: siemens-buzdolabi-alarm-resetleme, lg-buzdolabi-kapi-alarmi. buzdolabi-hata-kodlari hub'ında Liebherr satırı yok.
#   Dalga 6–8, marka-25eki ve blog-taslaklar klasörlerinde Liebherr yazısı yok.
# OT (#164, bu koşu 26 Eki 22:18, hl=tr gl=tr): "liebherr buzdolabı alarm" → 1. …alarm veriyor · 2. …alarm kapatma.
#   "liebherr derin dondurucu" → 9. …alarm lambası neden yanar. GSC (www-5, www-6): "liebherr" satırı yok.
# Belge (#88) bu koşuda curl ile indirildi (HTTP 200); zincir:
#   https://www.liebherr.com/en-tr/fridges-freezers/freestanding-fridge-freezers-3228109 (200) → https://www.liebherr.com/en-tr/p/cnsfb-5703-3228110 (200; ürün sayfası "Operating instructions" varlığı)
#   → https://assets-cdn.liebherr.com/versions/01a117a6-695c-739c-b2af-79133ce1e8e9/original/ (200 application/pdf, OI_CNsff5703_001_22_en_GB, 52 s.)
#   md5 b417216a350b316ec52abbf245b39437. en-tr ürün sayfası yalnız en_GB baskı veriyor; Türkçe baskı bulunamadı.
# BİLEREK YAZILMAYANLAR: hata kodlarının anlamı (kılavuz yalnız "kodu not al, servisi ara" diyor) · eski tuşlu panelli modellerin alarm tuşu ve "alarm lambası"
#   (bu belge dokunmatik ekranlı seri) · elektriği kesip reset · sensör, kart, kompresör teşhisi · fiyat (#46).
# Alıntı denetim tablosu: liebherr-buzdolabi-alarm-veriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu", "Not almak için kâğıt ya da telefon"]
steps:
  - "Ekrandaki uyarı mesajına bak; kapı alarmı mı, elektrik kesintisi alarmı mı, sıcaklık alarmı mı, hata mı olduğunu belirle."
  - "Kapı alarmıysa kapağı kapat ya da ekrandaki onay simgesine bas."
  - "Elektrik kesintisi ya da sıcaklık alarmıysa onay simgesine bas ve ekranda görünen en sıcak dondurucu sıcaklığını not al."
  - "Dondurucu sıcaklığı -9 °C'nin üstüne çıktıysa yiyecekleri kontrol et, çözülmüş yiyeceği yeniden dondurma, sonra onay simgesine yeniden bas."
  - "Sıcaklık alarmının sebebini gider: kapağı uzun açık bırakma, sıcak yiyeceği soğumadan koyma, cihazı ısı kaynağının yanından uzaklaştır."
  - "Kapı alarmı çok erken çalıyorsa Ayarlar menüsünden kapı alarmı süresini 1, 2 ya da 3 dakikaya ayarla."
  - "Ekranda hata uyarısı varsa onay simgesine bas, görünen hata kodunu not al ve Liebherr müşteri hizmetlerini ara."
faq:
  - q: "Liebherr buzdolabı neden alarm veriyor?"
    a: "Kılavuza göre dört uyarı var: kapı çok uzun açık kaldığında kapı alarmı, elektrik kesintisi yüzünden dondurucu ısındığında elektrik kesintisi alarmı, dondurucu sıcaklığı ayarlanan değere uymadığında sıcaklık alarmı ve cihazın bir parçası arızalandığında hata uyarısı. Uyarı ekranda görünür, ses giderek yükselir, bazı uyarılarda iç ışık yanıp söner."
  - q: "Liebherr buzdolabı alarmı nasıl kapatılır?"
    a: "Kapı alarmında kapağı kapatmak ya da ekrandaki onay simgesine basmak yeterli. Elektrik kesintisi ve sıcaklık alarmında onay simgesine basınca ekran en sıcak dondurucu sıcaklığını gösterir; yiyecekleri kontrol edip simgeye yeniden basınca ekran normal görünüme döner."
  - q: "Kapı alarmı kapatılabilir mi?"
    a: "Evet. Kılavuza göre kapı alarmı cihaz teslim edildiğinde açık geliyor. Ayarlar menüsündeki kapı alarmı seçeneğinde süreyi 1, 2 ya da 3 dakika yapabilir ya da Off seçerek kapatabilirsin."
  - q: "Alarmdan sonra dondurucudaki yiyecekler bozulmuş mudur?"
    a: "Kılavuz bir eşik veriyor: ekranda görünen en sıcak dondurucu sıcaklığı -9 °C'nin altında kaldıysa yiyecekler tüketilebilir. -9 °C'nin üstüne çıktıysa yiyecekleri kontrol etmen gerekir. Çözülmüş yiyeceği yeniden dondurma."
  - q: "Kapı alarmından sonra ekrandaki sıcaklık neden yüksek?"
    a: "Kılavuza göre kapı uzun süre açık kalıp kapı alarmı çalınca cihaz daha güçlü soğutur. Bu sırada ekrandaki sıcaklık içerideki gerçek sıcaklıktan yüksek görünebilir ve çalışma sesi artabilir. Kapağı kapatıp beklemen yeterli."
images:
  coverAlt: "Mutfakta duran, dokunmatik ekranlı, gümüş renkli, alttan dondurucusu olan iki kapılı bir buzdolabı"
  steps:
    - "Buzdolabı kapağındaki dokunmatik ekranda görünen uyarı mesajı"
    - "Tamamen kapatılmış buzdolabı kapağı ve kenarındaki conta"
    - "Dokunmatik ekranda daire içinde onay işareti simgesi"
    - "Açık dondurucu çekmecesinde dondurulmuş yiyecek paketleri"
    - "Duvardan ve fırından uygun mesafede duran bir buzdolabı"
    - "Dokunmatik ekranda ayarlar menüsünü gösteren simge"
    - "Buzdolabı iç duvarındaki model ve seri numarası etiketi"
---

Liebherr buzdolabının ötmesi çoğu zaman bir arıza değil, cihazın sana bir şey söylemesi. Yeni dokunmatik ekranlı Liebherr modellerinde dört ayrı uyarı var ve her birinin kapatma yolu farklı. Kapı açık mı kaldı, elektrik mi kesildi, dondurucu mu ısındı, yoksa bir parça mı arızalı? Bu yazı Liebherr'in Türkiye sitesinde ürün sayfalarına bağlı **CNsff 5703 kullanma kılavuzuna** dayanıyor. Türkçe baskı bulunamadı; **kılavuzun İngilizce baskısı** kullanıldı, alıntılar Türkçeye çevrildi. Senin cihazın tuşlu panelli eski bir modelse tuş ve ışık adları farklı olabilir; kendi kılavuzuna bak.

## Liebherr buzdolabı alarm türleri

Kılavuza göre bir uyarı geldiğinde ekranda mesaj görünüyor, alarm sesi **giderek yükselen** bir sesle çalıyor ve bazı uyarılarda iç ışık yanıp sönüyor. Basit uyarıları kendin kapatabiliyorsun; ciddi arızalarda müşteri hizmetlerini araman gerekiyor.

| Uyarı | Ne zaman çıkar | Nasıl kapanır |
|---|---|---|
| **Kapı alarmı** | Kapı çok uzun açık kaldığında | Kapağı kapat ya da onay simgesine bas |
| **Elektrik kesintisi alarmı** | Kesinti yüzünden dondurucu ısındığında | Onay simgesi, yiyecek kontrolü, yeniden onay |
| **Sıcaklık alarmı** | Dondurucu sıcaklığı ayarlanan değere uymadığında | Onay simgesi, yiyecek kontrolü, sebebi gider |
| **Hata** | Cihazın bir parçası arızalandığında | Kodu not al, müşteri hizmetlerini ara |

Bunların dışında kılavuz bir de **hatırlatma** sınıfı sayıyor. Örneğin FreshAir aktif karbon filtresinin değişme zamanı geldiğinde ekranda mesaj çıkıyor ve ses çalıyor; bu bir arıza uyarısı değil.

## Adım adım: alarmı kapatmak

**1. Mesajı oku.** Önce ekrana bak. Uyarının adı ekranda yazıyor; kapatma yolu buna göre değişiyor. Ekran uyku modundaysa herhangi bir gezinme tuşuna basınca açılıyor. Kılavuzdaki ekran görüntüleri İngilizce; senin ekranın Türkçe olabilir.

**2. Kapı alarmında kapağı kapat.** Kılavuza göre kapı alarmı, kapağı kapatınca ya da ekrandaki **onay simgesine** (daire içinde tik) basınca susuyor. Kapı uzun süre açık kaldıysa cihaz bundan sonra daha güçlü soğutur. Bu sırada ekrandaki sıcaklık içerideki gerçek sıcaklıktan yüksek görünebilir ve çalışma sesi artabilir. Bu beklenen bir durum.

**3. Elektrik kesintisi ya da sıcaklık alarmında onaya bas.** Onay simgesine basınca ekran, dondurucuda ölçülen **en sıcak** dondurucu sıcaklığını gösteriyor. Bu değeri not al. Kılavuza göre elektrik geldiğinde cihaz, sen mesajı onaylamasan da daha önce ayarlanan sıcaklığa kendiliğinden iner. Mesajın ekrandan kalkması için ise onaylaman gerekiyor.

**4. Yiyecekleri kontrol et.** Kılavuz net bir eşik veriyor: en sıcak dondurucu sıcaklığı **-9 °C'nin altında** kaldıysa yiyecekler tüketilebilir. -9 °C'nin üstüne çıktıysa yiyecekleri kontrol et. Sonra onay simgesine yeniden bas; ekran güncel ve ayarlanan sıcaklığı gösteren normal görünüme döner. Kılavuz çözülmüş yiyeceğin yeniden dondurulmamasını istiyor.

**5. Sıcaklık alarmının sebebini gider.** Kılavuz dört sebep sayıyor: içeri sıcak, taze yiyecek koymak; dondurucuyu düzenlerken ya da bir şey alırken içeri fazla sıcak hava girmesi; uzun bir elektrik kesintisi; cihazın arızalı olması. İlk üçünü gidermek senin elinde. Sebep kalkınca cihaz önceki ayar sıcaklığına iner. Cihazın fırın, kalorifer gibi bir ısı kaynağının yanında olmaması da kılavuzdaki çözümler arasında.

**6. Kapı alarmı süresini ayarla.** Kılavuza göre kapı alarmı cihaz teslim edildiğinde açık geliyor. **Ayarlar menüsünde** kapı alarmı seçeneğinden süreyi **1, 2 ya da 3 dakika** yapabilirsin; buzdolabını sık sık uzun süre açık tutuyorsan süreyi uzat. **Off** seçeneği alarmı tamamen kapatıyor, ama o zaman açık kalan kapıyı fark etmeyebilirsin.

**7. Hata uyarısında kodu not al.** Ekranda hata uyarısı varsa onay simgesine bas; ekranda bir **hata kodu** görünür. Kodu not al, onay simgesine yeniden bas ve Liebherr müşteri hizmetlerini ara. Kılavuz, cihazın bir parçasının arızalandığını söylüyor ama kodların anlamını vermiyor; kodu tahmin etmeye çalışma.

## Alarm çalmıyorsa da dikkat

Kılavuza göre **SabbathMode** açıkken kapı alarmı ve sıcaklık alarmı çalışmıyor, uyarı ve hatırlatmalar ekranda görünmüyor. Bu mod 80 saat sonra kendiliğinden kapanıyor. Ekranda "DEMO" yazıyorsa cihaz **demo modunda**: bu modda bütün soğutma işlevleri kapalı, cihaz soğutmaz. Kılavuz demo modunun bayilerin cihazı sergilemesi için olduğunu yazıyor.

Cihazı ilk kez çalıştırdıysan kılavuz yiyecek koymadan önce ayarlanan sıcaklığa ulaşılması için yaklaşık **6 saat** beklemeni istiyor. Dondurulmuş yiyecekler -18 °C ya da daha soğukta saklanmalı.

## Ne zaman servis

- Ekranda hata uyarısı ve hata kodu görünüyorsa
- Sebepleri giderdiğin hâlde sıcaklık alarmı tekrar ediyorsa ya da ayarlanan sıcaklığa ulaşılmıyorsa
- Kapı contası yerinden çıkmış, yırtılmış ya da kapı tam kapanmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kapak, onay simgesi, kapı alarmı süresi ve yiyecek kontrolü sende. Soğutma devresi, kompresör, kart, sensör ve elektrik bağlantıları Liebherr yetkili servisinin. Kılavuz da tarif edilmeyen her onarımın yalnız servis personelince yapılmasını istiyor. Servisi ararken iç duvardaki etiketten cihaz adını, servis numarasını ve seri numarasını yanında bulundur.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Soğutma sorunu varsa [buzdolabı soğutmuyor nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/), kapı kapanmıyorsa [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/), doğru ayar için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına bak. Bil, gör, çağır.

---

**Kaynak künyesi.** Uyarı türleri, kapatma adımları, -9 °C eşiği, kapı alarmı süreleri, SabbathMode, demo modu ve servis bilgileri Liebherr'in Türkiye sitesindeki ürün sayfalarında yayımlanan CNsff 5703 kullanma ve kurulum kılavuzunun ("OI_CNsff5703_001_22") İngilizce baskısından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
