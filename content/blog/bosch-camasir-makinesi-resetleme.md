---
title: "Bosch çamaşır makinesi resetleme nasıl yapılır"
description: "Bosch çamaşır makinesinde reset; programı iptal, kapatıp açma, 30 saniye güç kesme ve fabrika ayarı. Kılavuzdaki sıra, çocuk kilidi ve servis sınırı."
slug: "bosch-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork A). Konu: origin/main'de bosch-camasir-makinesi-resetleme yok; başlığında reset/sıfırlama geçen Bosch çamaşır sayfası yok.
#   Yakın: bosch-camasir-makinesi-hata-kodlari (hub, kod listesi), bosch-camasir-makinesi-kapak-acilmiyor. Siemens'in ayrı sayfası (siemens-camasir-makinesi-hata-kodu-sifirlama) farklı marka sorgusu.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "bosch çamaşır makinesi r" → 1. "…resetleme", 2. "…resetleme serie 4", 3. "…resetleme serie 6". GSC (www-5 3 ay, www-6 7 gün): satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, ikisi de HTTP 200, md5 yerel kopyayla (kaynak-bosch-camasir-sprint, 28 Eyl) aynı.
#  (A) Bosch WGB244A0TR kullanım ve kurulum kılavuzu  9001708433_H.pdf  md5 a02d83edad66dc95cd9392b467b767f1
#  (B) Bosch WAK24210TR kullanım ve kurma kılavuzu  9000941315_A.pdf  39 s.  md5 e1a8d222a420af7849035015ebba996a
# İptal A s.31 · çocuk kilidi A s.31, B s.19 · tuş tablosu A s.22 · kapak kilitli göstergesi A s.21 · fabrika ayarı (rES) A s.36 · yeniden başlatma + 30 sn A s.44, s.47
#   · program değiştirme B s.20 · kapatma B s.21 · "kapat, 5 sn bekle, aç" B s.26 · kendin halledemezsen sırası B s.28 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: servis menüsü / gizli tuş kombinasyonu (belgede yok) · kod silip çalışmaya devam etme · kart, kilit, pompa teşhisi · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Önce çocuk kilidine bak; kilit açıksa kılavuzdaki tuşla 3 ya da 5 saniye basılı tutarak kapat."
  - "Programı iptal et ya da değiştir: Başlat/Beklet tuşuna bas, yeni programı seç, yeniden başlat."
  - "Kapak kilitli kalıyorsa sıcaklık yüksekse Durulama, su seviyesi yüksekse Sıkma ya da boşaltma programını çalıştır."
  - "Ekranda anlamadığın bir gösterge varsa makineyi kapat, 5 saniye bekle, yeniden aç."
  - "Gösterge geri geliyorsa cihazı fişten ya da sigortadan en az 30 saniye ayır."
  - "Dokunmatik ekranlı modelde son adım olarak temel ayarlar menüsünden fabrika ayarlarına dön."
  - "Hata sürüyorsa program düğmesini Kapalı'ya al, fişi çek, musluğu kapat ve ürün numarasıyla servisi ara."
faq:
  - q: "Bosch çamaşır makinesinde reset tuşu var mı?"
    a: "Bosch'un WGB244A0TR ve WAK24210TR kılavuzlarında Reset adında ayrı bir tuş yok. Kılavuzlar dört ayrı işlem anlatıyor: programı iptal etmek, cihazı kapatıp açmak, en az 30 saniye güç kaynağından ayırmak ve dokunmatik ekranlı modelde temel ayarlar menüsünden fabrika ayarlarına dönmek."
  - q: "Bosch Serie 4 ve Serie 6 resetleme aynı mı?"
    a: "Tuş adları ve yerleri seriye ve modele göre değişiyor. Düğmeli WAK24210TR'de iş Başlat/Beklet tuşu ve program düğmesiyle yapılıyor; dokunmatik ekranlı WGB244A0TR'de yeniden başlatma, iptal ve fabrika ayarı için ayrı tuşlar var. Kendi kılavuzunun Arızaları giderme tablosuna bak."
  - q: "Resetleme hata kodunu siler mi?"
    a: "Kılavuz yeniden başlatmayı bir deneme olarak veriyor. WGB244A0TR'ye göre diğer tüm hata kodlarında önce cihaz yeniden başlatılıyor, arıza tekrar ederse en az 30 saniye güçten ayrılıyor, yine devam ederse müşteri hizmetleri aranıyor. Kod geri geliyorsa sorun yerinde duruyor demektir."
  - q: "Çocuk kilidi fişi çekince kapanır mı?"
    a: "Hayır. WGB244A0TR kılavuzuna göre çocuk kilidi, cihaz bekleme modundayken ve elektrik kesintisinde de etkin kalır. WAK24210TR kılavuzu da kilidin makine kapatıldıktan sonra bir sonraki program başlatılana kadar etkin kalabileceğini yazıyor."
  - q: "Fabrika ayarına dönmek ne zaman mantıklı?"
    a: "Kılavuz fabrika ayarına dönüşü temel ayarlar menüsünde veriyor, bir arıza çözümü olarak sunmuyor. Bu yüzden önce iptal, kapatıp açma ve 30 saniye güç kesme adımlarını dene. Home Connect bağlantısı sorunluysa kılavuz ayrıca yalnız ağ ayarlarını sıfırlamayı öneriyor."
images:
  coverAlt: "Banyoda beyaz, önden yüklemeli bir çamaşır makinesi ve kapalı cam kapak"
  steps:
    - "Çamaşır makinesi ekranında küçük bir kilit simgesinin yakın planı"
    - "Çamaşır makinesi kumanda panelinde başlat ve beklet tuşunun yakın planı"
    - "Cam kapağın ardında suyla dolu, sakin duran bir tambur"
    - "Kumanda paneli sönmüş, kapalı duran bir çamaşır makinesi"
    - "Prizden çekilmiş bir çamaşır makinesi fişi ve boş priz"
    - "Dokunmatik ekranlı bir çamaşır makinesi kumanda panelinin geniş planı"
    - "Çamaşır makinesi kapağının iç kenarında ürün etiketi ve yanında katlanmış bir kullanım kılavuzu"
---

Program takıldı, ekran tepki vermiyor ya da yanlış programı başlattın; ilk akla gelen "makineyi resetlemek". Bosch'un çamaşır makinesi kılavuzlarında **Reset adında ayrı bir tuş yok.** Kılavuzlar bunun yerine dört ayrı işlem anlatıyor: **programı iptal etmek, cihazı kapatıp açmak, en az 30 saniye güç kaynağından ayırmak** ve dokunmatik ekranlı modellerde **temel ayarlar menüsünden fabrika ayarlarına dönmek.** Bu yazıda sırayı iki Bosch kılavuzundan çıkardık: dokunmatik ekranlı WGB244A0TR ve program düğmeli WAK24210TR. Tuş adları ve yerleri seriye göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce çocuk kilidini kapat. Programı Başlat/Beklet ile iptal et ya da değiştir. Kapak kilitliyse Durulama ya da Sıkma çalıştır. Gösterge için kapat, 5 saniye bekle, aç. Tekrar ederse 30 saniye güçten ayır. Dokunmatik modelde son çare fabrika ayarı. Olmuyorsa servis.

## Ekran ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Ne yaparsın |
|---|---|---|
| **Kilit simgesi yanıyor** | Çocuk kilidi etkin, tuşlar kilitli | 🛠️ Önce kilidi kapat |
| **Kapak kilitli simgesi yanıyor** | Kapak kilitli; açmak için program iptal edilebilir | 🛠️ İptal et |
| **End** | Program bitti | Yeni program seç |
| **Ekran ve tuşlar tepki vermiyor** | Yazılım arızası | 🛠️ Yeniden başlat |
| **Diğer hata kodları** | Fonksiyonel arıza | 🛠️ Yeniden başlat, 🔧 sürerse servis |

## Adım adım: Bosch çamaşır makinesini sıfırlama

**1. Çocuk kilidine bak.** Reset denemelerinin çoğu burada takılır. WGB244A0TR'de kilit, ilgili tuşa **yaklaşık 3 saniye** basılarak açılıp kapanır; kapatmak için cihazın açık olması gerekir. Kılavuza göre çocuk kilidi **bekleme modunda ve elektrik kesintisinde de etkin kalır.** WAK24210TR'de aynı iş **Başlat/Beklet butonuna yaklaşık 5 saniye** basılarak yapılır; göstergede E sembolü yanıyorsa kilit açıktır.

**2. Programı iptal et ya da değiştir.** Düğmeli WAK24210TR'de yanlış programı değiştirmek üç adım: **Başlat/Beklet'e bas, başka bir program seç, Başlat/Beklet'e yeniden bas;** yeni program baştan başlar. Dokunmatik WGB244A0TR'de programı başlatan, duraklatan ve iptal eden tuş aynı; programı iptal edip kapağı açarsın.

**3. Kapak kilitliyse suyu düşün.** WGB244A0TR kılavuzuna göre **sıcaklık ya da su seviyesi yüksekse kapak güvenlik nedeniyle kilitli kalır.** Sıcaklık yüksekse ilgili **Durulama** programını, su seviyesi yüksekse ilgili **Sıkma** programını ya da uygun bir tahliye programını başlat. Kapağı zorlama. Ayrıntılar [Bosch çamaşır makinesi kapak açılmıyor](/blog/bosch-camasir-makinesi-kapak-acilmiyor/) yazısında.

**4. Kapat, bekle, aç.** WAK24210TR'nin arıza tablosu, listede olmayan göstergeler için kısa bir sıra veriyor: **cihazı kapat, 5 saniye bekle ve tekrar aç.** Görüntü yeniden belirirse kılavuz yetkili servisi aramanı istiyor. WGB244A0TR'de ekran ve tuşlar yanıt vermiyorsa ya da başka bir hata kodu çıkıyorsa, cihazı yeniden başlatmak için kılavuzda gösterilen tuşa **yaklaşık 5 saniye** basılıyor.

**5. 30 saniye güçten ayır.** Yeniden başlatmadan sonra arıza tekrar oluşursa WGB244A0TR kılavuzunun ikinci adımı: **cihazı en az 30 saniye güç kaynağından ayır.** Bunun için fişi çekebilir ya da sigorta kutusundaki sigortayı kapatabilirsin.

**6. Son çare: fabrika ayarı.** Dokunmatik WGB244A0TR'de temel ayarlar menüsü **Ayarlar** sembolüyle açılıyor. Program düğmesiyle listedeki **rES** ayarını seçip kılavuzdaki tuşa **yaklaşık 3 saniye** basınca cihaz fabrika ayarlarına sıfırlanıyor; menüden yine Ayarlar'a basarak çıkıyorsun. Kılavuz bunu bir arıza çözümü olarak değil, temel ayarlardan biri olarak veriyor. Home Connect bağlantısı sorunluysa kılavuzun önerisi yalnız **ağ ayarlarını sıfırlamak.**

**7. Olmuyorsa servis.** Kod ya da gösterge geri geliyorsa ev ayar turu bitmiştir. WAK24210TR'nin sırası şu: **program ayar düğmesini Kapalı (İptal) konumuna getir, fişi çek, su musluğunu kapat ve yetkili servisi çağır.** Ararken ekrandaki mesajı eksiksiz söyle; WGB244A0TR kılavuzu mümkünse arızayı fotoğraf ve videoyla belgelemeni öneriyor.

## Fişi çekmek yeter mi

WGB244A0TR kılavuzunda fiş çekmek ya da sigortayı kapatmak, yeniden başlatma işe yaramazsa yapılan **ikinci adım**; süre de belli: **en az 30 saniye.** Ama çocuk kilidini kapatmaz, kilit elektrik kesintisinde de etkin kalır. Düşük voltaj da her zaman reset gerektirmez: WAK24210TR kılavuzuna göre güç kaynağı çok düşükse kalan süre göstergesindeki noktalar yanıp söner ve **yıkama programı uzar.**

## Ne zaman servis

- Yeniden başlatma ve 30 saniye güç kesme sonrası kod tekrar ediyorsa
- Ekran ve tuşlar hiçbir adımda tepki vermiyorsa
- Su boşaltıldığı hâlde kapak uzun süre kilitli kalıyorsa
- Kodun anlamını bilmiyorsan: [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/) sayfasına bak

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, program düğmesi, çocuk kilidi, fiş ve musluk sende; makinenin içi, elektronik kart ve kapak kilidi mekanizması yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli, ürün numarası (E-Nr.) ve üretim numarası (FD) ne?
2. Ekranda tam olarak hangi kod ya da simge var?
3. Hangi adımları denedin, kod geri geldi mi?
4. Tamburda su var mı, kapak açılıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ekrandaki simgeler için [Bosch çamaşır makinesi sembolleri ve anlamları](/blog/bosch-camasir-makinesi-sembolleri-ve-anlamlari/) yazısına bak. Bil, gör, çağır.
