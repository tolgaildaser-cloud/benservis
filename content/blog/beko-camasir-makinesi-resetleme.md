---
title: "Beko çamaşır makinesi resetleme nasıl yapılır"
description: "Beko çamaşır makinesinde reset, kılavuzdaki adıyla programın iptali. Tuşlu ve düğmeli modelde adımlar, çocuk kilidi, içerideki su ve servis sınırı."
slug: "beko-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de beko-camasir-makinesi-resetleme yok, repoda "reset" geçen slug yok.
#   beko-camasir-makinesi-calismiyor ayrı sorgu (çalışmama belirtisi); resetlemeye ayrılmış sayfa yok.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "beko çamaşır makinesi r" → 1. "beko çamaşır makinesi resetleme",
#   2. "…resetleme nasıl yapılır". GSC (https___www-5/6): bu sorguda satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) D4 9101 E  http://download.beko.com/Download.UsageManualsBeko/d4-9101-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820523451.pdf  40 s.  md5 38f838f5c669c87f517618be9a11edcb
#  (B) D3 5061 B / D3 5062 B  https://download.beko.com/Download.UsageManualsBeko/32349_2820522636.pdf  36 s.  md5 6f40d18cb25aca2c9cebb4cecdea108f
# Kapak kilidi A s.26 · çocuk kilidi A s.26-28, B s.22-23 · iptal A s.27-28, B s.23-24 · standby B s.24 · sorun giderme A s.32 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · fişi çekerek reset · hata kodu silme hilesi · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: beko-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Çocuk kilidi açıksa önce kılavuzdaki yardımcı fonksiyon tuşlarına 3 saniye basarak kilidi kapat."
  - "Ekranlı modelde Başla / Bekle / İptal tuşunu 3 saniye basılı tut; ekranda End görününce program iptal olmuştur."
  - "Düğmeli modelde Program Seçim düğmesini başka bir programa çevir; Bitti / İptal ışığı yanıp sönerek iptali bildirir."
  - "Düğmeyle iptal ettiysen içeride su kalabileceğini hesaba kat; yeni program bu suyla devam edebilir."
  - "Kapak açılmıyorsa Pompa+Sıkma programıyla suyu tahliye et, kapak kilitli sembolünün sönmesini bekle."
  - "İstediğin programı seç, gerekiyorsa deterjanı yeniden koy ve Başla / Bekle ile başlat."
  - "İptalden sonra da program başlamıyor ya da aynı uyarı tekrar ediyorsa Beko yetkili servisine haber ver."
faq:
  - q: "Beko çamaşır makinesinde reset tuşu var mı?"
    a: "Beko'nun D4 9101 E ve D3 5061 B kılavuzlarında Reset adında ayrı bir tuş yok; karşılığı Programın iptal edilmesi bölümü. D4 9101 E'nin sorun giderme tablosu, program başlatılamadığında Başla / Bekle / İptal düğmesine 3 saniye basarak makineyi fabrika ayarlarına getirmeyi söylüyor."
  - q: "Beko çamaşır makinesi resetleme yapmıyor, ne yapmalıyım?"
    a: "Önce çocuk kilidine bak. D3 5061 B kılavuzuna göre çocuk kilidi açıkken Program Seçim düğmesiyle başka bir program seçilse bile önceki program çalışmaya devam eder. D4 9101 E'de ekranda Con görünür. Kilidi kapattıktan sonra iptali tekrarla; yine olmuyorsa yetkili servis."
  - q: "Düğmeyle iptal ettim, makinenin içinde su kaldı; normal mi?"
    a: "D3 5061 B kılavuzuna göre evet. Program Seçim düğmesini çevirdiğinde makine programı sonlandırır ama içindeki suyu boşaltmaz. Yeni programı başlattığında, önceki programın iptal edildiği adıma bağlı olarak ilave su alabilir ya da içindeki suyla yıkamaya devam edebilir."
  - q: "Elektrik gidip gelince çocuk kilidi kapanır mı?"
    a: "Hayır. D3 5061 B kılavuzu, elektrik kesilip geldikten ya da fiş çıkarılıp takıldıktan sonra makine tekrar çalıştığında çocuk kilidinin devreden çıkmadığını yazıyor. D4 9101 E'de kilit devredeyken makineyi Açma / Kapama tuşuyla kapatıp açabilirsin; program kilit devrede kalacak şekilde kaldığı yerden devam eder."
images:
  coverAlt: "Banyo köşesinde beyaz, ön yüklemeli bir çamaşır makinesi ve kapalı cam kapak"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda deterjan bölmesi"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Program yarıda takıldı, tuşlar tepki vermiyor ya da yanlış programı başlattın. Akla ilk gelen "makineyi resetlemek". Beko'nun çamaşır makinesi kılavuzlarında **Reset adında ayrı bir tuş yok**; karşılığı **"Programın iptal edilmesi"** bölümü. D4 9101 E kılavuzunun sorun giderme tablosu bu işi açıkça **"makineyi fabrika ayarlarına getirmek"** diye anlatıyor. Bu yazıda ekranlı D4 9101 E ile Program Seçim düğmesiyle çalışan D3 5061 B kılavuzlarından doğru sıfırlama yolunu sıraladık. İki modelde yol farklı; tuş yerleri için kendi kılavuzuna bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çocuk kilidi açıksa önce onu kapat. Ekranlı modelde Başla / Bekle / İptal'e 3 saniye bas, End görünsün. Düğmeli modelde Program Seçim düğmesini çevir; bu yol suyu boşaltmaz. Kapak açılmıyorsa Pompa+Sıkma. Sonra yeni programı başlat. Olmuyorsa Beko yetkili servisi.

## İki modelde iptal nasıl görünür

| | D4 9101 E (ekranlı) | D3 5061 B (düğmeli) |
|---|---|---|
| **İptal yolu** | Başla / Bekle / İptal'e 3 saniye | Program Seçim düğmesini çevir |
| **İptal işareti** | Ekranda End | Bitti / İptal ışığı yanıp söner |
| **Çocuk kilidi** | 2. ve 4. yardımcı fonksiyon tuşu, 3 saniye; Con / COFF | 1. ve 2. yardımcı fonksiyon tuşu, 3 saniye |
| **İçerideki su** | Kapak açılmıyorsa Pompa+Sıkma | Düğmeyle iptal suyu boşaltmaz |

## Adım adım: Beko çamaşır makinesini sıfırlama

**1. Çocuk kilidini kapat.** Sıfırlama denemesinin en sık takıldığı yer burası. D3 5061 B kılavuzuna göre çocuk kilidi devredeyken Program Seçim düğmesi çevrilirse 1. ve 2. yardımcı fonksiyon tuşlarının üzerindeki ışıklar **3 kez yanıp söner** ve **başka bir program seçilse bile daha önce seçilmiş program çalışmaya devam eder.** Bu modelde kilit, program çalışırken **1. ve 2. Yardımcı Fonksiyon tuşlarına 3 saniye** basılarak kapanır. D4 9101 E'de aynı iş **2. ve 4. yardımcı fonksiyon tuşlarına 3 saniye** basılarak yapılır; kilit açıkken ekranda **"Con"**, kapanınca **"COFF"** görünür. Kılavuzun uyarısı: kilidi program bitince kapatmazsan makine **yeni bir program seçimine izin vermez.**

**2. Ekranlı modelde: 3 saniye.** D4 9101 E kılavuzuna göre **Başla / Bekle / İptal tuşunu 3 saniye basılı tut.** Başla sembolü yanıp söner, program hangi adımda iptal edildiyse o adımın sembolü yanık kalır, ekranda **"End"** görünür ve program iptal edilmiş olur. Aynı kılavuzun sorun giderme tablosuna göre şebeke voltajı, su basıncı gibi **altyapı kaynaklı problemler yüzünden makine kendini korumaya almış** olabilir; çözüm bu tuşa 3 saniye basarak makineyi **fabrika ayarlarına** getirmek.

**3. Düğmeli modelde: düğmeyi çevir.** D3 5061 B'de program, **Program Seçim düğmesini çevirip başka bir program seçerek** iptal edilir. Bir önceki program iptal olur, **Bitti / İptal ışığı sürekli yanıp sönerek** bunu bildirir.

**4. İçerideki suyu hesaba kat.** D3 5061 B kılavuzu önemli bir ayrıntı veriyor: Program Seçim düğmesini çevirdiğinde makine **programı sonlandırır ama içindeki suyu boşaltmaz.** Yeni programı başlattığında, önceki programın iptal edildiği adıma bağlı olarak **ilave su alabilir ya da içindeki suyla yıkamaya devam edebilir.** Yani yarım kalmış bir yıkamadan sonra içeride su görmek bu modelde tek başına arıza değil.

**5. Kapak açılmıyorsa suyu boşalt.** Beko'ya göre makinenin içindeki **su sıcaklığı yüksekse ya da su seviyesi kapak hizasının üzerindeyse kapak açılmaz.** D4 9101 E kılavuzunun çözümü: programı iptal ettikten sonra program düğmesini **Pompa+Sıkma** programına getirip suyu tahliye et. Kapak Kilitli sembolü söndükten sonra kapağı açabilirsin; kılavuz bu aşamada **kapağı zorlamamanı** istiyor. Daha fazlası [Beko çamaşır makinesi kapağı açılmıyor](/blog/beko-camasir-makinesi-kapagi-acilmiyor/) yazısında.

**6. Yeni programı başlat.** Programı, sıcaklığı ve devri seç, **Başla / Bekle** tuşuna bas. İptalin yapıldığı adıma göre deterjan ve yumuşatıcıyı yeniden koyman gerekebilir. D3 5061 B'nin notu: makine yaklaşık **4 dakika** yıkama yapmadığında **Standby** moduna geçer ve gereksiz ışıklar söner; bu bir arıza değil, düğmeyi çevirince ekran geri gelir.

**7. Olmuyorsa servis.** Kilit kapalı, iptal yapıldı, program yine başlamıyor ya da aynı uyarı geri geliyorsa ev ayar turu bitmiştir; **Beko yetkili servisine** haber ver.

## Fişi çekmek sıfırlar mı

Kılavuzlar bunu bir sıfırlama yolu olarak anlatmıyor. D3 5061 B'nin notu açık: **elektrik kesilip geldikten ya da fiş çıkarılıp takıldıktan sonra çocuk kilidi devreden çıkmaz.** D4 9101 E'de de kilit devredeyken makineyi Açma / Kapama tuşuyla kapatıp açarsan program **kilit devrede kalacak şekilde kaldığı yerden devam eder.** Doğru yol, tuşla ya da düğmeyle iptal.

## Ne zaman servis

- İptal adımı uygulandığı hâlde tuşlar ve ekran tepki vermiyorsa
- Makine her denemede kendini korumaya alıyor, program başlamıyorsa
- Su boşaltıldığı hâlde kapak uzun süre kilitli kalıyorsa
- Ekranda bir kod tekrar ediyorsa: liste [Beko çamaşır makinesi hata kodları](/blog/beko-camasir-makinesi-hata-kodlari/) sayfasında

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, program düğmesi, çocuk kilidi ve pompa filtresi kapağı sende; gövdenin içi, elektronik kart ve kapak kilidi mekanizması yetkili servisin.

## Servisi aramadan önce kısa özet

1. Model ekranlı mı, düğmeli mi?
2. Ekranda Con, End ya da bir kod var mı?
3. İptali hangi yolla denedin?
4. İçeride su kaldı mı, kapak açılıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Makine hiç tepki vermiyorsa [Beko çamaşır makinesi çalışmıyor](/blog/beko-camasir-makinesi-calismiyor/) yazısına bak. Bil, gör, çağır.
