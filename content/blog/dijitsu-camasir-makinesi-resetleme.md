---
title: "Dijitsu çamaşır makinesi resetleme nasıl yapılır"
description: "Dijitsu çamaşır makinesi nasıl resetlenir? DCM 8000 kılavuzuna göre program iptali, fişten sıfırlama, hata kodları, çocuk kilidi ve elektrik kesintisi."
slug: "dijitsu-camasir-makinesi-resetleme"
date: "2026-10-24"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "dijitsu" geçen slug/başlık/blog gövdesi YOK; Dijitsu hata kodları hub'ı da YOK.
# GSC: "dijitsu" satırı yok. OT (bu koşu): "dijitsu çamaşır makinesi r" → 1. "dijitsu çamaşır makinesi resetleme" · 2. "…resetleme nasıl yapılır"; "dijitsu camasir makinesi " → 3. "dijitsu çamaşır makinesi resetleme".
# Belge zinciri (#88): dijitsu.com.tr/dcm-8000 (200) ürün sayfası "Ürün Kullanım Formu" → dijitsu.com.tr/storage/pdfs/info_dcm-8000_2025_12_10_07_05_43_776.pdf "DCM 8000 Çamaşır Makinesi Kullanım Kılavuzu" (200 application/pdf), 35 s., md5 4da65137ea6659c8fb97512320576e56.
# Görüntü tabanlı; tesseract tur OCR + sayfa görüntüsü (kod tablosu s.29-30 görüntüden okundu). Sayfa = PDF sayfası (basılı numara bir eksik).
# Diğer DCM modellerinin ürün sayfasında kullanım formu YOK (dcm-7000/7300/7500/9000/9800/10000/12000 kontrol edildi); yazı DCM 8000'e göre, bu girişte söylendi.
# BİLEREK YAZILMAYANLAR: servis test modu / gizli tuş kombinasyonu · kart sıfırlama · tekil kod sayfası (hub kuralı) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Çamaşır makinesinin kontrol paneli"]
steps:
  - "Ekranda bir kod ya da çocuk kilidi simgesi olup olmadığına bak."
  - "Çocuk kilidi açıksa kilit tuşunu üç saniye basılı tutarak kaldır."
  - "Programı duraklatmak için Başlat/Durdur düğmesine kısa bas."
  - "Programı tamamen iptal etmek için Başlat/Durdur'a bas, program düğmesini Sıkma konumuna çevirip suyu boşalt."
  - "Yeni programı seç ve Başlat/Durdur ile yeniden başlat."
  - "Kod sürüyorsa makineyi kapatıp fişi kılavuzdaki süre kadar çek, sonra yeniden tak."
  - "Kapak açılmıyorsa suyun boşalmasını ve tamburun soğumasını bekle, kod sürerse servisi ara."
faq:
  - q: "Dijitsu çamaşır makinesinde reset tuşu var mı?"
    a: "DCM 8000 kılavuzunda ayrı bir reset tuşu geçmiyor. Resetleme iki yolla yapılıyor: Başlat/Durdur ve program düğmesiyle programı iptal etmek ya da bazı hata kodlarında kılavuzun dediği gibi fişi bir süre çekip yeniden takmak."
  - q: "Çalışan programı nasıl iptal ederim?"
    a: "Kılavuza göre Başlat/Durdur düğmesine bas, suyu boşaltmak için program düğmesini Sıkma konumuna çevirip yeniden Başlat/Durdur'a bas. Sonra yeni programı seçip Başlat/Durdur ile başlat. Çalışan programın ayarları da yalnız programı iptal edip yeniden başlatarak değiştirilebiliyor."
  - q: "Fişi çekmek hangi kodlarda işe yarar?"
    a: "DCM 8000 kılavuzu E8 su koruma hatasında fişi çekip bir dakika beklemeyi, FC0, FC1 ve FC2 iletişim hatasında fişi beş dakika çekmeyi, FA'da fişi kısaca çekip yeniden denemeyi, F3'te cihazı kapatıp açmayı öneriyor. Kod sürerse servis gerekiyor."
  - q: "Elektrik kesildi, program silinir mi?"
    a: "Hayır. Kılavuza göre güç kesintisinde mevcut program ve ayarlar saklı kalıyor, elektrik gelince çalışma kaldığı yerden devam ediyor. Bu sırada kapak mekanik olarak kilitli kalabiliyor."
  - q: "Ekranda cLoK yazıyor, makine düğmelere tepki vermiyor."
    a: "Çocuk kilidi açık. Kılavuza göre bu modda hiçbir ayar değiştirilemiyor. Kilidi açmak için çocuk kilidi düğmesini üç saniye basılı tut; ekrandaki kilit simgesi söner."
images:
  coverAlt: "Banyoda duran beyaz önden yüklemeli çamaşır makinesi"
  steps:
    - "Çamaşır makinesinin kontrol panelindeki dijital ekran"
    - "Çamaşır makinesinin kontrol panelindeki fonksiyon düğmeleri"
    - "Çamaşır makinesinin kontrol panelindeki başlat düğmesi"
    - "Çamaşır makinesinin kontrol panelindeki program seçim düğmesi"
    - "Kapağı kapalı ve çalışmaya hazır bir çamaşır makinesi"
    - "Duvar prizinden çekilmiş bir çamaşır makinesi fişi"
    - "Çamaşır makinesinin kapalı kapağı ve tambur camı"
---

Dijitsu çamaşır makinen programın ortasında takıldı, ekranda bir kod çıktı ya da düğmeler tepki vermiyor ve "resetleme" arıyorsun. Bu yazıda Dijitsu'nun kendi sitesinde DCM 8000 ürün sayfasına bağladığı kullanım kılavuzunu temel aldık. Kılavuz görüntü tabanlı olduğu için kodları ve düğme adlarını sayfa görüntülerinden okuduk. Diğer DCM modellerinin ürün sayfalarında kullanım formu bulunmadığından anlatım DCM 8000'e göre; başka modelde düğme adları farklı olabilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Reset tuşu yok. Programı iptal et: Başlat/Durdur, program düğmesi Sıkma, Başlat/Durdur, yeni program. Bazı hata kodlarında fişi çekip beklemek kılavuzun önerdiği sıfırlama. Çocuk kilidini üç saniye basarak kaldır.

## Kılavuzdaki kodlar ve sıfırlama önerisi

| Kod | Kılavuza göre neden | Kılavuzun çözümü |
|---|---|---|
| **CLr FLtr** | Tahliye: altı dakikada su tamamen boşalmadı | Pompa filtresini temizle, tahliye hortumuna bak |
| **E2** | Kapak kilitleme hatası | Kapağı doğru kapat |
| **E4** | Su on iki dakikada seviyeye ulaşmadı | Musluğu aç, su basıncına ve tahliye hortumuna bak |
| **E8** | Su koruma sistemi hatası | Fişi çek, bir dakika bekle, tak; gerekirse servis |
| **E5** | Tahliye: bir dakikada su boşalmadı | Pompa filtresi ve tahliye hortumu; gerekirse servis |
| **F3** | Sıcaklık sensörü hatası | Kapatıp aç; sürerse servis |
| **F4** | Isıtıcı ya da kablo hatası | Yeterli su var mı bak; sürerse servis |
| **F7** | Motor ya da kablo bağlantısı | Programı yeniden başlat, tambur sıkışık mı bak; gerekirse servis |
| **FA** | Su seviyesi sensörü, basınç sensörü ya da hortum tıkalı | Giriş ve tahliyeye bak, fişi kısaca çekip yeniden dene |
| **FC0 / FC1 / FC2** | İletişim hatası | Fişi beş dakika çek, yeniden tak; gerekirse servis |

## Adım adım: Dijitsu çamaşır makinesi resetleme

**1. Ekrana bak.** Kılavuza göre ekran kalan süreyi, gecikmeli başlatmayı, hata kodlarını, kapak kilidini ve çocuk kilidini gösteriyor. Ekranda bir kod varsa yukarıdaki tablodan anlamına bak. **LocK** kapağın yüksek su seviyesi, yüksek sıcaklık ya da sıkma yüzünden kilitli olduğunu, **cLoK** çocuk kilidinin açık olduğunu gösteren bilgi kodları; bunlar arıza değil.

**2. Çocuk kilidini kaldır.** Çocuk kilidi açıkken kılavuza göre hiçbir ayar değiştirilemiyor ve bir düğmeye basınca ekranda cLoK yazıyor. Kilidi açmak için çocuk kilidi düğmesini üç saniye basılı tut. Makine "tepki vermiyor" sandığın durum çoğu zaman bu.

**3. Programı duraklat.** Çalışan programı duraklatmak için **Başlat/Durdur** düğmesine kısaca bas; devam etmek için tekrar bas. Kılavuz çalışan programın ayarlarının yalnız programı iptal edip yeniden başlatarak değiştirilebildiğini yazıyor.

**4. Programı iptal et.** Programı tamamen iptal etmek için kılavuzdaki sıra şöyle: Başlat/Durdur düğmesine bas, suyu boşaltmak için program düğmesini **Sıkma** konumuna çevir ve yeniden Başlat/Durdur'a bas. Makinenin suyu boşaltmasını bekle. Kapak, program bittikten ya da düzgün iptal edildikten sonra açılıyor.

**5. Yeniden başlat.** Program düğmesiyle yeni programı seç; seçilen programın standart ayarları ve süresi ekranda görünüyor. Gerekli ayarları yapıp **Başlat/Durdur** ile başlat. Makineyi tamamen kapatmak için program düğmesini **Kapalı** konumuna çevirmen yeterli.

**6. Fişten sıfırlama.** Kod iptalden sonra da geri geliyorsa kılavuz bazı kodlar için fişi çekmeyi öneriyor: E8'de fişi çekip bir dakika bekle, sonra tak; FC0, FC1 ya da FC2 iletişim hatasında fişi beş dakika çekili tut; FA'da fişi kısaca çekip yeniden dene; F3'te cihazı kapatıp aç. Tahliye kodlarında (CLr FLtr, E5) önce pompa filtresini ve tahliye hortumunu kontrol et; filtre temizliği kılavuzun bakım bölümünde anlatılıyor. Musluk ve hortum tarafı için [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısına bakabilirsin.

**7. Kapak açılmıyorsa bekle.** Kılavuza göre kapak yalnız su seviyesi kapak açıklığının altındayken, tambur sıcaklığı 55 °C'nin altındayken ve tambur tamamen durmuşken açılıyor. Su ya da sıcaklık yüksekse ekranda LocK görünüyor ve kapak açılmıyor. Zorlamadan bekle. Kapak yine açılmıyorsa [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısındaki genel kontrollere bak.

## Elektrik kesilirse

DCM 8000 kılavuzuna göre güç kesintisinde mevcut program ve ayarlar saklı kalıyor; elektrik gelince çalışma devam ediyor. Program kesintiye uğrarsa kapak mekanik olarak kilitli kalıyor. Kılavuz bu durumda kapağı açmadan önce tamburda su kalmadığından emin olunmasını istiyor ve haşlanma riskine karşı uyarıyor; suyu pompa filtresinden boşaltma ve servis kapağının arkasındaki kolla kapağı açma adımlarını da anlatıyor. Sıcak su ve taşan su riski olduğu için bu adımlardan emin değilsen elektriğin gelmesini bekle ya da servisi çağır.

## Ne zaman servis

- F4, F7 ya da iletişim kodu (FC0, FC1, FC2) kılavuzdaki adımlardan sonra da sürüyorsa
- E8 su koruma kodu fişten sıfırlamadan sonra geri geliyorsa
- Makine hiç açılmıyor ya da hata mesajları düzeltici adımlara rağmen sürüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Program iptali, çocuk kilidi, fişten sıfırlama ve filtre temizliği sende. Kılavuz elektrikli onarımların yalnız yetkili teknisyenlerce yapılmasını istiyor; ısıtıcı, motor, sensör ve kart Dijitsu yetkili servisinin işi. Kılavuza göre hata sürerse makineyi kapat, suyu kes ve müşteri hizmetleriyle görüş.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (DCM 8000 mi)?
2. Ekranda hangi kod görünüyor?
3. Programı iptal etmeyi ve fişten sıfırlamayı denedin mi?
4. Kod hangi aşamada çıkıyor: su alırken, yıkarken, sıkarken?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Makine hiç çalışmıyorsa [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısına bak. Bil, gör, çağır.
