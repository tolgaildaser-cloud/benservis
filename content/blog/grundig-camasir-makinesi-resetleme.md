---
title: "Grundig çamaşır makinesi resetleme nasıl yapılır"
description: "Grundig çamaşır makinesinde reset, kılavuzdaki adıyla programı iptal etmek. GWM modellerinde tuş ve düğme yolu, çocuk kilidi, kapak ve servis sınırı."
slug: "grundig-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de grundig-camasir-makinesi-resetleme yok, repoda "reset" geçen slug yok;
#   Grundig çamaşırda yalnız hata-kodlari, deterjan-almiyor, temiz-yikamiyor var.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "grundig çamaşır makinesi r" → 1. "grundig çamaşır makinesi resetleme",
#   2. "…resetleme nasıl yapılır". GSC (https___www-5/6): bu sorguda satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.grundig.com'dan yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) GWM 4701 Y / GWM 4701 X  http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_2820522687.pdf  40 s.  md5 3f77ddc32ee71b427090ef3d0c89a84d
#  (B) GWM 9701 Y  http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_202012281339697_User%20Manual%20-%20File%20(Long)tr_TR.pdf  36 s.  md5 a4587b21fd0c0725e0879dec061e1031
# Çocuk kilidi A s.25-26, B s.20-21 · kapak/değişiklik B s.23 · iptal A s.26, B s.24 · program sonu B s.24 · sorun giderme A s.30, B s.29 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · fişi çekerek reset · Err ve diğer kodların silinmesi · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: grundig-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Çocuk kilidi açıksa önce kapat; kilit açıkken program düğmesini çevirmek programı iptal etmez."
  - "Başla / Bekle / İptal tuşu olan modelde bu tuşu 3 saniye basılı tut; ekranda End görününce program iptal olmuştur."
  - "Program seçim düğmesiyle çalışan modelde düğmeyi başka bir programa çevir ya da aynı düğmeyle makineyi kapatıp yeniden aç."
  - "Kapak açılmıyorsa program seçim düğmesini Pompa+Sıkma programına getirip suyu tahliye et."
  - "Kapak kilidi sembolü sönene kadar bekle; bu sırada kapağı zorlama."
  - "Yeni programı seç ve başlat; gerekiyorsa deterjanı yeniden koy."
  - "Program yine başlamıyor ya da aynı uyarı tekrar ediyorsa Grundig yetkili servisine haber ver."
faq:
  - q: "Grundig çamaşır makinesinde reset tuşu var mı?"
    a: "Grundig'in GWM 4701 Y ve GWM 9701 Y kılavuzlarında Reset adında ayrı bir tuş yok; karşılığı programı iptal etmek. GWM 4701 Y'nin sorun giderme tablosu, program başlatılamadığında Başla / Bekle / İptal tuşuna 3 saniye basarak makineyi fabrika ayarlarına getirmeyi söylüyor."
  - q: "Grundig çamaşır makinesi resetleme yapmıyor, neden?"
    a: "Çoğu zaman çocuk kilidi yüzünden. GWM 9701 Y kılavuzuna göre çocuk kilidi devredeyken program seçim düğmesini çevirirsen program iptal edilmez; önce kilidin kapatılması gerekir. GWM 4701 Y'de kilit açıksa ekranda Con görünür."
  - q: "Makineyi kapatıp açmak programı siler mi?"
    a: "Modele göre değişiyor. GWM 9701 Y'de program seçim düğmesiyle makine kapatılıp tekrar açıldığında program iptal olur. Ama çocuk kilidi açıkken Açma / Kapatma ile kapatıp açarsan program kaldığı yerden devam eder; iki kılavuz da bunu yazıyor."
  - q: "İptalden sonra kapak neden açılmıyor?"
    a: "Grundig'e göre makinenin içindeki su sıcaklığı yüksekse ya da su seviyesi kapak hizasının üzerindeyse yükleme kapağı açılmaz. GWM 9701 Y kılavuzu su sıcaklığı 50 °C'nin üzerindeyse güvenlik sebebiyle kapak kilidinin devre dışı bırakılamayacağını yazıyor. Çözüm Pompa+Sıkma ile suyu tahliye etmek."
  - q: "Ekran tamamen kapandı, makine sıfırlandı mı?"
    a: "Hayır. GWM 9701 Y kılavuzuna göre program tamamlandıktan sonra 10 dakika boyunca hiçbir düğmeye basılmazsa makine OFF moduna girer, ekran ve tüm göstergeler kapanır. Açma / Kapatma düğmesine bastığında tamamlanan program adımları görüntülenir."
images:
  coverAlt: "Mutfak tezgâhının altına yerleştirilmiş beyaz, ön yüklemeli bir çamaşır makinesi"
  steps:
    - "Çamaşır makinesi ekranında küçük bir kilit simgesinin yakın planı"
    - "Çamaşır makinesi kumanda panelinde yuvarlak başlat ve bekle tuşu"
    - "Çamaşır makinesinin büyük, yuvarlak program seçim düğmesi"
    - "Çamaşır makinesinin alt köşesinde kapalı duran pompa filtresi kapağı"
    - "Kapalı cam yükleme kapağı ve yanındaki gri kapak kolu"
    - "Açık deterjan çekmecesi ve yanında bir ölçü kabı"
    - "Çamaşır makinesinin üstünde katlanmış duran bir kullanma kılavuzu"
---

Program yarıda kaldı, tuşlar tepki vermiyor ya da yanlış programı başlattın; çözüm olarak "resetleme" aranıyor. Grundig'in çamaşır makinesi kılavuzlarında **Reset adında ayrı bir tuş yok.** Karşılığı programı iptal etmek; GWM 4701 Y kılavuzunun sorun giderme tablosu bu işi açıkça **"makineyi fabrika ayarlarına getirmek"** diye anlatıyor. Bu yazıda iki Grundig kılavuzundan, Başla / Bekle / İptal tuşuyla çalışan GWM 4701 Y ile program seçim düğmesiyle iptal edilen GWM 9701 Y'den, doğru sıfırlama yolunu sıraladık. Kendi modelinin tuş yerleri için kılavuzuna bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce çocuk kilidini kapat; kilit açıkken düğme çevirmek programı iptal etmez. GWM 4701 Y'de Başla / Bekle / İptal'e 3 saniye bas. GWM 9701 Y'de program seçim düğmesini başka programa çevir. Kapak açılmıyorsa Pompa+Sıkma. Sonra yeni programı başlat. Olmuyorsa Grundig yetkili servisi.

## İki modelde sıfırlama

| | GWM 4701 Y | GWM 9701 Y |
|---|---|---|
| **İptal yolu** | Başla / Bekle / İptal'e 3 saniye | Program seçim düğmesini çevir ya da düğmeyle kapat-aç |
| **İptal işareti** | Ekranda End | Seçilen yeni program baştan başlar |
| **Çocuk kilidi** | 2. ve 4. yardımcı fonksiyon tuşu, 3 saniye; Con / COFF | Yardımcı Fonksiyon düğmesi 3, 3 saniye; 3-2-1 geri sayımı |
| **Kapak** | Su seviyesi uygunsa açılır | Su 50 °C üzerindeyse kilit açılmaz |

## Adım adım: Grundig çamaşır makinesini sıfırlama

**1. Çocuk kilidini kapat.** GWM 9701 Y kılavuzunun notu net: **çocuk kilidi devredeyken program seçim düğmesini çevirirsen program iptal edilmez; önce çocuk kilidinin iptal edilmesi gerekir.** Bu modelde kilit, **Yardımcı Fonksiyon düğmesi 3'e 3 saniye** basılı tutularak kapanır; ekrandaki "3-2-1" geri sayımı bitince kilit simgesi kaybolur. GWM 4701 Y'de kilit **2. ve 4. yardımcı fonksiyon tuşlarına 3 saniye** basılarak açılıp kapanır; açıkken ekranda **"Con"**, kapanınca **"COFF"** görünür. 4701 Y'nin uyarısı: kilidi program bitince kapatmazsan makine **yeni bir program seçimine izin vermez.**

**2. Tuşlu modelde: 3 saniye.** GWM 4701 Y'de **Başla / Bekle / İptal tuşunu 3 saniye basılı tut.** Başla sembolü yanıp söner, program hangi adımda iptal edildiyse o adımın sembolü yanık kalır, ekranda **"End"** görünür ve program iptal edilmiş olur. Kılavuzun sorun giderme tablosuna göre şebeke voltajı ya da su basıncı gibi **altyapı kaynaklı problemler yüzünden makine kendini korumaya almış** olabilir; çözüm bu tuşa 3 saniye basarak makineyi **fabrika ayarlarına** getirmek.

**3. Düğmeli modelde: çevir ya da kapat-aç.** GWM 9701 Y kılavuzuna göre **program seçim düğmesi başka bir programa çevrildiğinde ya da bu düğmeyle makine kapatılıp tekrar açıldığında** program iptal olur. Çocuk kilidi kapalıyken çalışan program da değiştirilebilir; bu işlem mevcut programı iptal eder ve **seçilen program baştan başlar.**

**4. Kapak açılmıyorsa suyu boşalt.** İki kılavuzun çözümü aynı: programı iptal ettikten sonra kapağı açmak istiyor, ama su seviyesi kapak hizasının üzerinde olduğu için açamıyorsan **program seçim düğmesini Pompa+Sıkma programına getirip suyu tahliye et.**

**5. Kapak kilidini bekle.** GWM 4701 Y'de kapak kilitliyken **Kapak Kilitli sembolü** yanar; makine bekleme durumuna alındığında kapak açılabilir konuma gelene kadar yanıp söner. Kılavuz bu aşamada **kapağı zorlamamanı** istiyor; sembol söndükten sonra kapağı açabilirsin. GWM 9701 Y'ye göre makinenin içindeki **su sıcaklığı 50 °C'nin üzerindeyse** su seviyesi uygun olsa bile güvenlik sebebiyle kapak kilidi devre dışı bırakılamaz.

**6. Yeni programı başlat.** Programı, sıcaklığı ve devri seç, başlat. Program iptal edildiği adıma göre deterjan ve yumuşatıcıyı yeniden koyman gerekebilir.

**7. Olmuyorsa servis.** Kilit kapalı, iptal yapıldı, program yine başlamıyor ya da aynı uyarı tekrar ediyorsa ev ayar turu bitmiştir; **Grundig yetkili servisine** haber ver.

## Kapatıp açmak her zaman sıfırlar mı

Hayır. İki kılavuz da aynı uyarıyı yapıyor: **çocuk kilidi devredeyken** makineyi Açma / Kapama ile kapatıp açabilirsin, ama makine tekrar çalıştığında **program kaldığı yerden devam eder.** Kapat-aç ile iptal, GWM 9701 Y'de kilit kapalıyken ve program seçim düğmesiyle yapıldığında geçerli. Ekranın tamamen kararması da sıfırlama değil: GWM 9701 Y'de program bittikten sonra **10 dakika** hiçbir düğmeye basılmazsa makine **OFF** moduna girer.

## Ne zaman servis

- Kilit kapalı ve iptal yapıldığı hâlde tuşlar ve ekran tepki vermiyorsa
- Makine her denemede kendini korumaya alıyor, program başlamıyorsa
- Su boşaltıldığı ve soğuduğu hâlde kapak açılmıyorsa
- Ekranda bir kod tekrar ediyorsa: liste [Grundig çamaşır makinesi hata kodları](/blog/grundig-camasir-makinesi-hata-kodlari/) sayfasında

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, program düğmesi, çocuk kilidi ve pompa filtresi kapağı sende; gövdenin içi, elektronik kart ve kapak kilidi mekanizması yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ne (GWM ile başlayan kod)?
2. Ekranda Con, End, kilit simgesi ya da bir kod var mı?
3. İptali hangi yolla denedin?
4. İçeride su var mı, kapak açılıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Yıkama sonucundan memnun değilsen [Grundig çamaşır makinesi temiz yıkamıyor](/blog/grundig-camasir-makinesi-temiz-yikamiyor/) yazısına bak. Bil, gör, çağır.
