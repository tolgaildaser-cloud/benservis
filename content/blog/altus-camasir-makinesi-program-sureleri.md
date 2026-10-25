---
title: "Altus çamaşır makinesi program süreleri: pamuklu 60 kaç saat"
description: "Altus AL CM 81050 kılavuzunda pamuklu 60 için 3 sa 30 dk, sentetik 40 için 2 sa 15 dk yazıyor. Ekrandaki yarım yük süresi ve Hızlı / Yoğun ayarı."
slug: "altus-camasir-makinesi-program-sureleri"
date: "2026-10-25"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z3). Konu seçimi küme ajanının; origin/main'de slug yok, Altus'a özel program süresi sayfası yok.
# GSC (7 gün, www-6): "pamuklu 60 derece kaç saat sürer altus" 5 · "altus ön yıkamalı pamuklu 60 kaç saat" 3 · "altus pamuklu 40 derece kaç saat sürer" 2 ·
#   "altus pamuklu 60 kaç dakika" 2 · "altus çamaşır makinesi pamuklu 40 kaç dakika" 2 · "altus çamaşır makinesi pamuklu 60 kaç dakika" 2 ·
#   "pamuklu 40 derece kaç saat sürer altus" 2. TOPLAM 3 ay 0 · 7 gün 18.
# OT (bu koşu): "altus pamuklu 60 derece kaç saat sürer" → 1. "ön yıkamalı pamuklu 60 derece kaç saat sürer altus" (tek öneri)
#   · "altus çamaşır makinesi program süreleri" → 1. aynı 2. "altus 6 kg …" 3. "altus çamaşır makinesi 7 kg …".
# Belge: Altus AL CM 81050 kullanma kılavuzu, 44 s., kapak "2820532737/ TR/ / 9.01.2025". Zincir: https://www.altus.com.tr/urunler/camasir-makinesi/camasir-makinesi-al-cm-81050
#   (ürün sayfası, bu koşuda yerleşik tarayıcıda açıldı) → https://www.altus.com.tr/content/dam/altus-rainbow-tr-aem/altus-rainbow-tr-aemProductCatalog/product-documents/457100031500-AL-CM-81050/tr-TR-457100031500-MDM2-USER-MANUAL-FILE-tr-TR.pdf
#   curl 403 (bot koruması); PDF ürün sayfasında fetch ile alındı: HTTP 200, 1.394.073 bayt, sayfada SparkMD5 ile md5 a62b93e9d38a9cdd63b1bcc8c749b41e = yerel kopya (kaynak-altus-regal-sprint) birebir.
# Görüntülenen Program Süresi s.19 · Program ve Tüketim Tablosu s.22 · Tüketim Değerleri ve notlar s.23 · programlar s.24-25 · Hızlı / Yoğun s.27 · Ön Yıkama, Bitiş Zamanı s.28 · sorun giderme s.34-35.
# BİLEREK YAZILMAYANLAR: Pamuklu 40 için süre (tüketim değerlerinde satır yok) · ön yıkamalı Pamuklu 60 için dakika (belgede yok) · 6 / 7 kg Altus modelleri (belgesi yok) · fiyat (#46).
# Alıntı denetim tablosu: altus-camasir-makinesi-program-sureleri.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Programı seç ve ekrandaki süreyi oku; Pamuklu ve Eko'da bu ilk süre yarım yük süresidir."
  - "Program başladıktan 20-25 dakika sonra ekrana tekrar bak; makine gerçek yükü algılayıp süreyi düzeltir."
  - "Az kirli çamaşırda Hızlı / Yoğun tuşuyla Hızlı ledini yak; süre %50'ye kadar kısalabilir."
  - "Ön yıkamayı yalnız çok kirli çamaşırda, ilgili tuşa 3 saniye basarak aç."
  - "Çok az kirli, az çamaşır için Mini 14' programını seç; Hızlı ile en fazla 2 kg yükle."
  - "Süre geri saymıyorsa su alma, ısıtma ya da dengesiz yük adımını bekle; çamaşırı düzelt."
faq:
  - q: "Altus pamuklu 60 derece kaç saat sürer?"
    a: "Altus AL CM 81050 kılavuzunun Tüketim Değerleri tablosunda Pamuklu 60 °C, 8 kg yük ve 1000 devirde program süresi 03:30, yani 3 saat 30 dakika. Kılavuz bu değerin gösterge niteliğinde olduğunu yazıyor; gerçek süre yüke göre ekranda güncellenir."
  - q: "Altus ön yıkamalı pamuklu 60 kaç saat sürer?"
    a: "Kılavuz ön yıkamalı Pamuklu 60 için ayrı bir süre vermiyor. Yalnızca ön yıkamayı kullanmadığında enerji, su, deterjan ve zaman tasarrufu sağladığını yazıyor; ön yıkama açıkken süre tablodaki 3 saat 30 dakikanın üzerine çıkar (çıkarım). Kesin süreyi seçimden sonra ekranda görürsün."
  - q: "Altus pamuklu 40 kaç dakika?"
    a: "AL CM 81050'nin Tüketim Değerleri tablosunda Pamuklu 40 °C için satır yok; Pamuklu yalnız 20 °C ve 60 °C ile, ikisi de 03:30 olarak verilmiş. 40 °C'de normal kirli pamuklu için kılavuzun test programı Eko 40-60: 8 kg'da 03:38, 4 kg ve 2 kg'da 02:47."
  - q: "Altus sentetik 40 kaç saat sürer?"
    a: "Aynı tabloda Sentetik 40 °C, 3 kg yük ve 1000 devirde 02:15, yani 2 saat 15 dakika yazıyor. Hızlı / Yoğun tuşuyla Hızlı seçildiğinde süre kısalabilir."
  - q: "Ekrandaki süre program başladıktan sonra neden uzadı?"
    a: "Kılavuzun açıklaması: Pamuklu ve Pamuklu Eko programlarının başında ekranda yarım yük süresi görünür. Program başladıktan sonra 20-25 dakika içinde makine gerçek yükü algılar; yük yarımdan fazlaysa program buna göre ayarlanır ve süre otomatik olarak uzar."
images:
  coverAlt: "Önden yüklemeli beyaz çamaşır makinesi, ekranında kalan süre görünüyor"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda tambur ve içindeki çamaşır"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
---

Altus çamaşır makinesinde pamukluyu 60 dereceye ayarladın, ekranda bir süre gördün, yıkama başladıktan sonra süre uzadı. Bu Altus'un kılavuzunda anlatılan bir durum. Bu yazıda **Altus AL CM 81050** kullanma kılavuzundaki **Tüketim Değerleri** tablosunu, ekranda gösterilen sürenin nasıl hesaplandığını ve süreyi kısaltan ayarları çıkardık. 8 kg'lık bu modelin değerleri başka bir Altus modelinde farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** AL CM 81050'de Pamuklu 60 **03:30**, Sentetik 40 **02:15**, Eko 40-60 tam yükte **03:38.** Pamuklu ve Eko'da ekrandaki ilk süre **yarım yük süresidir;** makine 20-25 dakikada gerçek yükü algılayıp süreyi düzeltir. Kısaltmak için **Hızlı / Yoğun** tuşu.

## AL CM 81050 tüketim değerleri

Kılavuzun **Tüketim Değerleri (TR)** tablosundan, 1000 devirde:

| Program | Sıcaklık | Yük | Süre (sa:dk) |
|---|---|---|---|
| Eko 40-60 | 40 °C | 8 kg | 03:38 |
| Eko 40-60 | 40 °C | 4 kg | 02:47 |
| Eko 40-60 | 40 °C | 2 kg | 02:47 |
| Pamuklu | 60 °C | 8 kg | 03:30 |
| Pamuklu | 20 °C | 8 kg | 03:30 |
| Sentetik | 40 °C | 3 kg | 02:15 |
| Mini / Mini 14' | 30 °C | 8 kg | 00:28 |

Tablonun altındaki not birebir şöyle: **"Eko 40-60 programı dışındaki programlar için verilen tüketim değerleri sadece gösterge niteliğindedir."** Yani Pamuklu 60'ın 3 saat 30 dakikası bir kılavuz değeridir. Tabloda **Pamuklu 40 °C için satır yok;** 40 °C'de normal kirli pamuklu için kılavuzun standart test programı **Eko 40-60**. Kılavuz Eko 40-60 için diğer programlara göre **daha uzun sürede** yıkadığını ama enerji ve su bakımından **daha verimli** olduğunu yazıyor.

## Ekrandaki süre nasıl hesaplanıyor?

Kılavuzun **5.8 Görüntülenen Program Süresi** bölümü: program seçerken süreyi ekranda görürsün; süre çamaşır miktarına, köpüklenmeye, dengesiz yüke, güç beslemesindeki dalgalanmalara, su basıncına ve program ayarlarına göre **program çalışırken otomatik olarak ayarlanır.** Özel durum: **Pamuklu ve Pamuklu Eko** programlarının başında ekranda **yarım yük süresi** görünür, çünkü bu en yaygın kullanım şeklidir. Program başladıktan sonra **20-25 dakika** içinde makine gerçek yükü algılar; yük yarımdan fazlaysa süre **otomatik olarak uzar.** Tablonun yanındaki notta ayrıca ekrandaki süreyle gerçek süre arasında **1-1,5 saatlik** fark olabileceği yazıyor.

## Adım adım: Altus'ta süreyi okuma ve kısaltma

**1. Programı seç, ilk süreyi oku.** Program seçim düğmesini çevirince süre ekranda görünür. Pamuklu ya da Eko 40-60 seçtiysen bu ilk değer **yarım yük** içindir. Tamburu doldurduysan gerçek sürenin daha uzun çıkması beklenir.

**2. 20-25 dakika sonra tekrar bak.** Makine bu sürede gerçek yükü algılar ve süreyi düzeltir; değişimi ekrandan takip edebilirsin. Çalışan programın kalan süresi kılavuza göre **01:30** örneğindeki gibi saat ve dakika olarak gösterilir.

**3. Hızlı / Yoğun tuşunu kullan.** Kılavuza göre bu fonksiyonla program süresini **kısaltabilir ya da artırabilirsin.** Hızlı veya Yoğun ledi yanmıyorsa ekranda normal kirli çamaşır için uygun süre görünür. Yoğun'un kendiliğinden seçili geldiği programlarda tuşa bir kez basınca led söner ve normal süreye inersin; ikinci basışta **Hızlı** ledi yanar, az kirli çamaşır için **minimum** süre gösterilir. Kılavuzun cümlesi: bu fonksiyon seçildiğinde ilgili programların süreleri **%50'ye kadar kısalabilir.** Pamuklu ve Sentetik'te Hızlı seçildiğinde süre ciddi şekilde kısalır.

**4. Ön yıkamayı gerekmedikçe açma.** AL CM 81050'de ön yıkama ilgili yardımcı fonksiyon düğmesine **3 saniye basılı tutularak** seçilir. Kılavuza göre ön yıkama yalnızca **çok kirli çamaşırlar** için gereklidir; kullanmadığında enerji, su, deterjan ve **zaman** tasarrufu sağlarsın. Kılavuz ön yıkamalı Pamuklu 60 için ayrı bir süre vermiyor; ön yıkama açıkken süre tablodaki değerin üstüne çıkar (çıkarım). Seçimden sonra ekrandaki süreye bak.

**5. Az çamaşırda Mini 14' programı.** Kılavuz bu programı çok az kirli ve lekesiz pamuklu çamaşırlar için öneriyor. **Hızlı** seçiliyken süre **14 dakikaya** kadar düşebilir; bu durumda en fazla **2 kg** çamaşır yıkanmalı. Hangi yıkamada kısa programın yeteceğini [çamaşır makinesi hızlı program ne zaman](/blog/camasir-makinesi-hizli-program-ne-zaman/) yazısıyla karşılaştır.

**6. Süre geri saymıyorsa beklediği adımı bil.** Kılavuzun sorun tablosuna göre ekranlı modellerde süre **su alırken** (yeterli su gelene kadar), **ısıtma adımında** (seçili sıcaklığa ulaşana kadar) ve **sıkma adımında** durabilir; sıkmada dengesiz yük algılanmış olabilir, çamaşırı tamburda düzelt. Fazla deterjan aşırı köpük yapar ve köpük sönümleme sistemi devreye girer; **önerilen miktarda** deterjan kullan.

## Ne zaman servis

- Süre her yıkamada ısıtma adımında uzun süre duruyorsa
- Musluk açık ve hortum düzgünken su alma adımı bitmiyorsa
- Su tahliye edilemediği için makine sıkmaya geçmiyorsa: kılavuz önce filtre ve tahliye hortumunu kontrol etmeni söylüyor

⛔ **Kendin-çöz sınırı burada biter.** Program, yük, deterjan ve yardımcı fonksiyon seçimi sende; ısıtıcı, motor ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ve seçtiğin program ne?
2. Süre hangi adımda duruyor: su alma, ısıtma, sıkma?
3. Hızlı / Yoğun hangi konumda?

Program takılırsa [Altus çamaşır makinesi resetleme](/blog/altus-camasir-makinesi-resetleme/), durulama sorunu için [Altus çamaşır makinesi iyi durulamıyor](/blog/altus-camasir-makinesi-iyi-durulamiyor/) yazısına bak. Markadan bağımsız süre bantları [çamaşır makinesi program süreleri](/blog/camasir-makinesi-program-sureleri/) yazısında. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
