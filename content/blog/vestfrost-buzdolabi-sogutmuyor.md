---
title: "Vestfrost buzdolabı soğutmuyor: servisten önce kontrol"
description: "Vestfrost buzdolabı soğutmuyorsa kılavuza göre elektrik, ayar, kapı, aşırı yük, kondenser tozu, duvar mesafesi, 5 dakika gecikme ve servis sınırı."
slug: "vestfrost-buzdolabi-sogutmuyor"
date: "2026-10-24"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 7, küme Y4). origin/main'de vestfrost slug'ı, başlığı ve gövde geçişi yok.
# OT (#164, bu koşu): "vestfrost buzdolabı s" → 2. "vestfrost buzdolabı soğutmuyor"; "vestfrost buzdolabı a" → 3. "…alt kısmı soğutmuyor".
# GSC: www-6'da yalnız "vestfrost çamaşır makinesi e01 hatası"; buzdolabı satırı yok.
# Belge (#88, zincir resmî sayfa → PDF): vestfrost.dk ürün sayfası https://www.vestfrost.dk/vcf-20180-nofrost-28560 (curl 200)
#   → api.eico.dk VCF 20180 NoFrost kılavuzu HTTP 200, 132 s., md5 4545ee3ca4469afbbdb94aaf7ffce6e1 (DA/EN/SE/FI/NO; İngilizce baskı kullanıldı).
# EN bölümü: kurulum ve mesafeler s.33, ilk kullanım s.34, uyarılar s.36, saklama s.38, temizlik ve defrost s.42, servis öncesi s.44-45.
# Alıntı denetimi (orijinal İngilizce): vestfrost-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu", "Süpürge ya da yumuşak fırça", "Çalıştığını bildiğin başka bir elektrikli alet"]
steps:
  - "Buzdolabı hiç çalışmıyorsa elektriği, sigortayı ve prizi başka bir aletle kontrol et."
  - "Fişi yeni taktıysan ya da elektrik geldiyse kompresör için 5 dakika bekle."
  - "Ayarın en sıcak kademede kalmadığından emin ol, uygun bir kademeye getir."
  - "Kapıların tam kapandığını ve contanın temiz olduğunu kontrol et."
  - "İçeriyi aşırı doldurduysan boşalt; sıcak yiyecek koyma, hava kanalının önünü kapatma."
  - "Fişi çekip arkadaki kondenserin tozunu süpür."
  - "Arka ve yan duvarlarda yeterli boşluk, ocak ve kaloriferden mesafe olduğunu kontrol et."
  - "Bunlara rağmen soğutmuyorsa yetkili servisi ara."
faq:
  - q: "Vestfrost buzdolabı soğutmuyor, ilk ne yapmalıyım?"
    a: "Vestfrost'un VCF 20180 NoFrost kılavuzunun İngilizce baskısındaki servis öncesi listesine göre cihaz hiç çalışmıyorsa elektriği, evin ana şalterini ve prizi kontrol et; prizi çalıştığını bildiğin başka bir aletle dene. Çalışıyor ama zayıf soğutuyorsa aşırı yük, termostat ayarı, kapılar, kondenser tozu ve duvar mesafesine bak."
  - q: "Elektrik geldi ama buzdolabı hemen çalışmadı, arıza mı?"
    a: "Hayır. Kılavuza göre ani elektrik kesintisinde ya da fişi çekip taktığında soğutma sistemindeki gaz basıncı dengelenmediği için kompresör koruması açılıyor; buzdolabı 4-5 dakika sonra çalışmaya başlıyor. Bu normal."
  - q: "Yeni aldım, neden yeterince soğuk değil?"
    a: "Kılavuz buzdolabının fişe takıldıktan sonra tamamen soğuması için ortam sıcaklığına göre 24 saate kadar kesintisiz çalışması gerektiğini yazıyor. Bu sürede kapıları sık açma ve içine çok yiyecek koyma."
  - q: "Buzdolabının altında su birikiyor."
    a: "Kılavuza göre soğutucunun alt kısmında su varsa defrost suyunun tahliye deliğinin tıkalı olup olmadığını kontrol et; deliği temizlemek için defrost tahliye tıpasını kullan."
  - q: "Buzdolabından gelen sesler arıza mı?"
    a: "Kılavuz çatırtı, kısa tık sesi, kompresör sesi, fokurdama, su akış sesi ve no frost modellerde fan üfleme sesini normal sesler olarak sayıyor. Bunlar tek başına arıza işareti değil."
images:
  coverAlt: "Kapısı açık, iç ışığı yanan ve rafları dolu beyaz bir buzdolabı"
  steps:
    - "Mutfak duvarındaki prize takılı bir buzdolabı fişi"
    - "Prizden yeni takılmış fişi ve kapısı kapalı buzdolabı"
    - "Buzdolabı kapağındaki gösterge ışıkları ve tek tuş"
    - "Buzdolabı kapısının kenarındaki temiz kapı contası"
    - "Fazla doldurulmuş, arka duvara dayanmış yiyeceklerle dolu raf"
    - "Buzdolabının arkasındaki siyah ızgara biçimli kondenserin tozunu alan süpürge ucu"
    - "Duvarla buzdolabının arkası arasındaki boşluk"
    - "Tezgâhta duran buzdolabı kılavuzu ve garanti belgesi"
---

Vestfrost buzdolabın çalışıyor gibi ama içerisi serin değil; ya da elektrik kesintisinden sonra hiç ses gelmiyor. "Vestfrost buzdolabı soğutmuyor" diye arıyorsan önce servis çağırmadan yapabileceğin kontrollere bak. Bu yazıda Vestfrost'un Danimarka'daki resmî sitesinden bağlanan VCF 20180 NoFrost kılavuzunu kullandık. Vestfrost'un Türkiye sitesi artık açılmıyor ve Türkçe kılavuz bulunmuyor; bu yüzden **kılavuzun İngilizce baskısını** kullandık, alıntıları Türkçeye çevirdik. Türkiye'de satılmış Vestfrost modellerinde panel ve iç düzen farklı olabilir; buradaki kontroller ise kılavuzun genel "servisi aramadan önce" listesinden geliyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Hiç çalışmıyorsa elektrik ve prizi kontrol et, elektrik geldiyse 5 dakika bekle. Zayıf soğutuyorsa ayarı, kapıları, aşırı yükü, kondenser tozunu ve duvar boşluğunu kontrol et. Yeni buzdolabının tam soğuması 24 saati bulabilir.

| Belirti | Kılavuzun kontrol listesi |
|---|---|
| Hiç çalışmıyor | Elektrik var mı; ana şalter kapalı mı; priz sağlam mı (başka aletle dene) |
| Zayıf soğutuyor | Aşırı yük; termostat en sıcak kademede mi; kapılar kapalı mı; kondenserde toz; arka ve yanlarda boşluk |
| Elektrikten sonra çalışmıyor | Kompresör koruması; 4-5 dakika sonra kendiliğinden başlar |
| Altta su var | Defrost tahliye deliği tıkalı mı |
| Ses yapıyor | Çatırtı, tık, kompresör, fokurdama, fan sesi normal |

## Adım adım: servisten önce kontrol

**1. Elektriği kontrol et.** Kılavuzun ilk maddesi cihaz hiç çalışmıyorsa elektrik olup olmadığı, evin ana şalterinin kapalı olup olmadığı ve prizin arızalı olup olmadığı. Prizi denemek için oraya çalıştığını bildiğin başka bir alet tak.

**2. Beş dakika bekle.** Ani bir elektrik kesintisinden sonra ya da fişi çekip yeniden taktığında soğutma sistemindeki gaz basıncı henüz dengelenmediği için kompresörün koruma elemanı açılıyor. Kılavuza göre buzdolabı **4-5 dakika sonra** çalışmaya başlıyor ve bu normal. Fişi bu sürede tekrar tekrar çekip takma.

**3. Ayara bak.** Kılavuzun zayıf soğutma listesinde termostatın en sıcak kademede ("1") olup olmadığını kontrol etmen ve uygun bir değere getirmen isteniyor. VCF 20180 panelinde ayar tuşuna her basış sıcaklığı bir kademe düşürüyor; 3 saniye beklersen ayar kaydediliyor. Normal kullanım için kılavuz soğutucuyu +4 °C'ye ayarlamayı yeterli buluyor. Ayrıntılar [Vestfrost buzdolabı ayarı](/blog/vestfrost-buzdolabi-ayari/) yazısında.

**4. Kapıları kontrol et.** Kapıların tam kapandığından emin ol. Kılavuz kapı contasının temiz ve esnek olması gerektiğini, yıprandıysa değiştirilmesini yazıyor. Kapı uzun süre açık kalırsa iç lamba yanıp sönerek uyarıyor. Kapıları sık ve uzun açmak sıcak havanın içeri girmesine ve kompresörün gereksiz çalışmasına yol açıyor.

**5. Yükü ve yerleşimi düzelt.** Aşırı yük de listede. Sıcak yiyeceği soğumadan koyma; kılavuza göre içerideki sıcaklığı ve nemi yükseltiyor. Yiyecekleri hava akış kanalının önüne koyma ve arka duvara değdirme. Fişi yeni taktıysan buzdolabının tam soğuması **24 saate kadar** sürebilir; bu sürede içini doldurma.

**6. Kondenseri temizle.** Kılavuz kondenserin üzerinde toz olup olmadığını kontrol etmeni ve kondenseri **yılda en az iki kez** bir süpürgeyle temizlemeni istiyor. Bunu yapmadan önce **fişi mutlaka çek.** Kılavuzun temizlik kuralları: cihazın üzerine su dökme, lamba yuvasına ve elektrikli parçalara su kaçırma.

**7. Mesafeyi kontrol et.** Zayıf soğutmanın son maddesi arka ve yan duvarlarda yeterli boşluk olması. Kılavuza göre buzdolabı ocak, gazlı fırın ve kaloriferden en az **50 cm**, elektrikli fırından en az **5 cm** uzakta olmalı; derin dondurucunun yanındaysa aralarında en az 2 cm kalmalı. Arkadaki plastik mesafe parçası kondenserin duvara değmesini önlüyor. Doğrudan güneş alan ve ısı kaynağına yakın yerler soğutmayı zorluyor. Cihaz 16-43 °C ortam sıcaklığı için tasarlanmış.

**8. Servisi ara.** Kılavuzun son cümlesi: bu talimatları uyguladığın hâlde sorun sürüyorsa en yakın yetkili servise başvur. Servis gelene kadar kapıları açmamaya çalış.

Kılavuzun enerji ipuçları da soğutmaya yardım ediyor. Dondurulmuş yiyecekleri soğutucu bölmede çözdür; soğukları bölmeyi serinletiyor. İçecekleri ve sıvıları kapalı koy, yoksa nem artıyor ve kompresör daha uzun çalışıyor. Sebzelik gibi ayrı bölmelerin kapaklarını kapalı tut.

## Ne zaman servis

- Elektrik var, 24 saatten fazla geçti ve ayar uygun olduğu hâlde soğutmuyorsa
- Kompresör hiç çalışmıyor ya da hiç durmuyorsa
- Kondenser temiz ve mesafe yeterli olduğu hâlde içerisi giderek ısınıyorsa
- No frost modelde fan sesi tamamen kesildiyse

⛔ **Kendin-çöz sınırı burada biter.** Elektrik kontrolü, ayar, kapı, yükleme, kondenser tozu ve yerleşim sende. Kompresör, fan, sensör, kart, soğutucu gaz ve LED aydınlatma yetkili servisin işi; kılavuz LED'in bile yalnız yetkili personelce değiştirilmesini istiyor. Gaz dolumu evde yapılmaz.

## Servisi aramadan önce kısa özet

1. Buzdolabının model adı ne?
2. Soğutucu mu, dondurucu mu, ikisi birden mi soğutmuyor?
3. Ayar hangi kademede?
4. Son günlerde elektrik kesintisi oldu mu, kondenseri temizledin mi?

Alt bölme sıcak kalıyorsa [no frost buzdolabı alt bölme soğutmuyor](/blog/no-frost-buzdolabi-alt-bolme-sogutmuyor/), genel nedenler için [buzdolabı soğutmuyor nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) sayfasına bak. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
