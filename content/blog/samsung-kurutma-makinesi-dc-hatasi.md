---
title: "Samsung kurutma makinesi dC hatası: kapak açık uyarısı"
description: "Samsung kurutma makinesinde dC ya da Kapak açık uyarısı kılavuza göre ne demek; kapak, çocuk kilidi ve yükleme kontrolleri, ne zaman servis gerekir."
slug: "samsung-kurutma-makinesi-dc-hatasi"
date: "2026-10-23"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork B). Konu seçimi: origin/main'de samsung-kurutma-makinesi-dc-hatasi yok
#   (samsung-kurutma-makinesi-calismiyor dC'yi bir adım + tablo satırı olarak anıyor; tek kod sayfası yok. samsung-camasir-makinesi-dc-hatasi çamaşır makinesi, ayrı cihaz).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) dışa aktarımlarında "samsung kurutma" + "dc" satırı YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "samsung kurutma makinesi dc": 1. "…dc hatası" · 2. "…dc hatası nasıl düzeltilir"
#   · 3. "…dc uyarısı" · 4. "…dc arızası". ("samsung kurutma makinesi hata" tohumunda 5. öneri "…dc hatası".)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile org.downloadcenter.samsung.com'dan yeniden indirildi: HTTP 200 application/pdf, md5 yerel kopyalarla aynı. #88: üçüncü taraf yok.
#  (D) DV5000T kılavuzu DC68-04209V-02 TR (DV90TA040AE/AH), 68 s.  md5 af744046e6c457b037ef2e270349d072
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90TA040AE&CttFileID=8770640&CDCttType=UM&VPath=UM%2F202209%2F20220917120230960%2FDV5000T_DC68-04209V-02_TR.pdf
#  (S) SimpleUX ısı pompalı kurutucu kılavuzu DC68-04268H-03 (AH) TR, 60 s.  md5 7d07cd0444389e478b7625ea26e2134a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DV90T5240AW&CttFileID=8770643&CDCttType=UM&VPath=UM%2F202209%2F20220917120549513%2FU-PJT_DRYER_SimpleUX_DC68-04268H-03_AH_TR.pdf
# dC satırı D s.52 · "Kapak açik" + Çocuk Kilidi notu + "Kapagi açin ve içini kontrol edin" S s.50 · "Kurutucu başlamıyor" (kapak, program sırasında açılan kapak, çocuk kilidi) S s.48
#   · "Kurutma makinesi çalışmıyor" (kapağın tamamen kapatılması) D s.50 · başlatma adımları (yükle, kapağı kapat, Başlat/Duraklat basılı tut) D s.39
#   · karışık parçalar kapağın açılmasına neden olabilir + aşırı yükleme S s.27, D s.39 · kapak iç temizliği + lastik contayı çıkarmayın S s.44
#   · kapak camı ısınır D s.13 · çocuk kapağı içeriden açamaz D s.13.
# BİLEREK YAZILMAYANLAR: kapak yönünü değiştirme (D s.28-31; vida, menteşe, kapak kilidi sökümü → #31 servis/kurulum işi) · kapak kilidi/sensör/kart teşhisi
#   · çocuk kilidini açıp kapatan tuş kombinasyonu (bu iki kılavuzun okunan sayfalarında net değil) · tiftik filtresinin dC'ye yol açtığı iddiası (belgede yok) · fiyat (#46).
# Alıntı denetim tablosu: samsung-kurutma-makinesi-dc-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez ya da fırça", "Kurutma makinesinin kullanım kılavuzu"]
steps:
  - "Kapağı tamamen kapat ve Başlat/Duraklat düğmesini basılı tutarak programı yeniden başlat."
  - "Program sırasında kapağı açtıysan kapağı kapat ve başlatma düğmesine yeniden basılı tut."
  - "Ekranda çocuk kilidi göstergesi yanıyorsa çocuk kilidini ya da gücü kapat ve yeniden dene."
  - "Çamaşırları birbirinden ayırıp çöz ve makineyi aşırı yükleme; bir seferde tek yıkama yükü koy."
  - "Fişi çek, kapağın iç yüzünü yumuşak bir bez ya da fırçayla temizle ve lastik contayı yerinden çıkarma."
  - "Kapak kapalıyken uyarı sürüyorsa makineyi kullanmayı bırak ve Samsung yetkili servisini ara."
faq:
  - q: "Samsung kurutma makinesinde dC ne demek?"
    a: "Samsung'un DV5000T kılavuzunda dC, kurutma makinesinin kapağı açık durumdayken çalıştırılmak istendiği anlamına geliyor. Kılavuzun talimatı kapağı kapatıp yeniden başlatmak; sürerse servisi aramak."
  - q: "Ekranımda dC değil 'Kapak açik' yazıyor, aynı şey mi?"
    a: "Evet. Samsung'un SimpleUX ekranlı ısı pompalı kurutucuları bu durumu kod yerine 'Kapak açik' yazısıyla gösteriyor. Anlamı da çözümü de aynı: kapak açıkken kurutucu çalıştırılmak isteniyor; kapağı kapat ve yeniden başla, sürerse servisi ara."
  - q: "Kapak kapalı ama yine de uyarı veriyor, neden?"
    a: "SimpleUX kılavuzuna göre Çocuk Kilidi açıksa, kurutucu çalışmıyor olsa bile kapağı açtığında bu mesaj gelebilir. Önce çocuk kilidine bak. Kapak gerçekten kapalıyken ve çocuk kilidi kapalıyken uyarı sürüyorsa kapak tarafındaki parçalar servis işi."
  - q: "Kurutma sırasında kapak kendiliğinden açılabilir mi?"
    a: "Samsung'un SimpleUX kılavuzu, birbirine dolanmış çamaşırların kurutma verimini düşürebileceğini ya da kapağın açılmasına neden olabileceğini yazıyor. Bu yüzden çamaşırları makineye koymadan önce birbirinden ayırıp çözmen ve makineyi aşırı yüklememen isteniyor."
  - q: "Kapağın kilidini ya da menteşesini kendim söküp bakabilir miyim?"
    a: "Hayır. Kılavuzda kapak yönünü değiştirmek için menteşe ve kapak kilidi vidalarının söküldüğü bir bölüm var, ama bu bir kurulum işi. Kapak kapanmasıyla ilgili arıza için Samsung yetkili servisini çağır."
images:
  coverAlt: "Çamaşır odasında kapağı kapalı duran beyaz bir kurutma makinesi ve ekranında kısa bir uyarı"
  steps:
    - "Kurutma makinesinin kapağı tamamen kapanmış hâlde yandan görünümü"
    - "Kurutma makinesinin kontrol panelinde başlatma düğmesinin yakın planı"
    - "Kurutma makinesi ekranında küçük bir kilit simgesi"
    - "Birbirinden ayrılmış çamaşırların makine kapağının önünde sepette beklemesi"
    - "Açık duran kurutma makinesi kapağının iç yüzü ve lastik conta çevresi"
    - "Kapağı kapalı kurutma makinesinin yanında kullanım kılavuzu ve telefon"
---

Kurutma makinesini çalıştırmak istedin ama ekranda **dC** belirdi ya da makine "Kapak açik" yazıp başlamadı. Samsung'un tarifiyle bu, makinenin kapağı açık durumdayken çalıştırılmak istendiğini düşündüğü anlamına geliyor. Çoğu zaman kapağın tam kapanmamasıyla ilgili; bazen de çocuk kilidi ya da yükleme. Bu yazıda Samsung'un DV5000T ve ısı pompalı SimpleUX Türkçe kılavuzlarında kapakla ilgili ne varsa topladık. DV5000T bu durumu dC koduyla, SimpleUX ekranlı modeller "Kapak açik" yazısıyla gösteriyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** dC, kapak açıkken çalıştırma demek. Kapağı tamamen kapat, Başlat/Duraklat'ı basılı tutarak yeniden başlat. Çocuk kilidine bak, çamaşırları çöz, aşırı yükleme. Kapak kapalıyken uyarı sürüyorsa Samsung yetkili servisi.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **dC** (DV5000T) | Kapak açık durumdayken çalıştırılmak isteniyor | 🛠️ Kapağı kapat, yeniden başlat |
| **"Kapak açik"** (SimpleUX) | Aynı durum, yazıyla | 🛠️ Kapağı kapat, yeniden başla; çocuk kilidine bak |
| **"Kapagi açin ve içini kontrol edin"** | Çocuk kilidi açık; kazanın içini kontrol et | 🛠️ Çocuk kilidini ya da gücü kapat |
| **Uyarı kapak kapalıyken sürüyor** | Kılavuzda kullanıcı adımı yok | 🔧 Servis |

## Adım adım: evde denenecekler

**1. Kapağı tamamen kapat.** İlk iş en basiti. DV5000T kılavuzu makine çalışmadığında ilk kontrol olarak kapağın **tamamen kapatıldığından** emin olmanı istiyor. Sonra programı yeniden başlat. DV5000T'de program **Başlat/Duraklat düğmesine basılı tutarak** başlıyor; kısa bir dokunuş yetmeyebilir. Aynı tablo satırı fişin takılı olduğunu ve evin şalter ile sigortalarını da kontrol etmeni istiyor.

**2. Program sırasında kapağı mı açtın?** Kurutma sürerken bir çamaşırı almak için kapağı açmak programı durdurur. SimpleUX kılavuzunun "Kurutucu başlamıyor" satırı bunu söylüyor: program sırasında kapağı açarsan, kapağı kapattıktan sonra başlatma düğmesine **tekrar dokunup basılı tutman** gerekiyor. Kurutma sırasında ya da hemen sonrasında kazanın içine dokunma; Samsung kazanın çok sıcak olacağını hatırlatıyor. Kapak camı da kurutma sırasında ısınıyor.

**3. Çocuk kilidine bak.** SimpleUX kılavuzunun tablosunda önemli bir not var: **Çocuk Kilidi açıksa**, kurutucu çalışmıyor olsa bile kapağı açtığında "Kapak açik" mesajını alabilirsin. Ekranda "Kapagi açin ve içini kontrol edin" yazıyorsa kılavuz bunun çocuk kilidinin açık olduğu anlamına geldiğini söylüyor; çözüm Çocuk Kilidini ya da gücü kapatmak. Kilidi nasıl kapatacağın kendi modelinin kılavuzunda yazıyor.

**4. Çamaşırları çöz, aşırı yükleme.** Samsung'un SimpleUX kılavuzu bu konuda net: birbirine dolanmış parçalar kurutma verimini düşürebilir ya da **kapağın açılmasına neden olabilir**. Çamaşırları makineye koymadan önce birbirinden ayır ve çöz. Bir seferde tek yıkama yükü koy; aşırı yükleme hem kuruma hem de kırışma açısından sorun. Çamaşır koyup alırken tiftik filtresinin yerinde olduğundan emin ol; filtre takılı değilken küçük parçalar filtre yuvasına düşebilir.

**5. Kapağın iç yüzünü temizle.** Önce fişi çek; Samsung temizlikten önce bunu istiyor. SimpleUX kılavuzuna göre kapağın iç kısmında yabancı maddeler birikebilir; yumuşak bir bez ya da fırçayla temizle. Kılavuzun uyarısı: **kapağın lastik contasını çıkarma.** Bu bir bakım adımı. Kılavuz dC'nin nedeni olarak kapak içindeki kiri saymıyor, ama kapağın düzgün kapanması için kapak tarafının temiz olması işini kolaylaştırır.

**6. Sürerse servis.** Kapak tamamen kapalı, çocuk kilidi kapalı, çamaşır düzgün yerleşmiş ve uyarı hâlâ ekrandaysa evde yapılacak iş bitti. İki kılavuzun dC ve "Kapak açik" satırındaki son cümle aynı: **bu devam ederse servisi arayın.** Kapak kilidi, menteşe ve kapağı algılayan parçalar Samsung yetkili servisinin işi.

## Kapakla ilgili güvenlik notu

Samsung'un DV5000T kılavuzu kapak konusunda bir uyarı daha yapıyor: küçük çocukların ya da evcil hayvanların makinenin üstünde veya içinde oynamasına izin verme. Ürünün kapağı içeriden kolayca açılmıyor ve içeride kalan bir çocuk ciddi şekilde yaralanabilir. Kurutma bittikten sonra SimpleUX kılavuzu, içini daha temiz tutmak için kurutucu kapağını açık bırakmanı öneriyor; evde küçük çocuk varsa bunu göz önünde tut.

## Ne zaman servis

- Kapak kapalıyken dC ya da "Kapak açik" uyarısı sürüyorsa
- Kapak kapanmıyor, mandal tutmuyor ya da kapak eğri duruyorsa
- Çocuk kilidi kapalı olduğu hâlde "Kapagi açin ve içini kontrol edin" mesajı geliyorsa
- Makineden garip ses, yanık kokusu ya da duman geliyorsa: Samsung gücü hemen kapatmanı ve servisi aramanı istiyor

⛔ **Kendin-çöz sınırı burada biter.** Kapağı kapatmak, çocuk kilidi, yükleme ve kapağın iç yüzünü silmek sende; kapak kilidi, menteşe, vidalar ve kapağı algılayan elektronik Samsung yetkili servisinin. Kılavuzda kapak yönünü değiştirme bölümü olsa da o, vida ve kilit sökümü gerektiren bir kurulum işi.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (DV5000T, SimpleUX ekranlı ya da başka)?
2. Ekranda dC mi, "Kapak açik" mı yazıyor?
3. Uyarı başlatırken mi, kurutma sırasında mı çıkıyor?
4. Çocuk kilidi göstergesi yanıyor mu?
5. Kapak kapanırken bir takılma ya da boşluk hissediyor musun?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Makine hiç başlamıyorsa [Samsung kurutma makinesi çalışmıyor](/blog/samsung-kurutma-makinesi-calismiyor/) yazısına, çamaşır nemli çıkıyorsa [Samsung kurutma makinesi kurutmuyor](/blog/samsung-kurutma-makinesi-kurutmuyor/) yazısına bak; marka bağımsız tablo [kurutma makinesi hata kodları](/blog/kurutma-makinesi-hata-kodlari/) sayfasında. Bil, gör, çağır.
