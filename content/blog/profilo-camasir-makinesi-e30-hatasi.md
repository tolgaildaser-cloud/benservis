---
title: "Profilo çamaşır makinesi E30 hatası: -10, -20 ve -80"
description: "Profilo çamaşır makinesinde E:30 üç farklı satırdır: -10 su girişi, -20 kritik fonksiyon arızası, -80 tahliye. Kılavuzdaki sırayla ne yapılacağı."
slug: "profilo-camasir-makinesi-e30-hatasi"
date: "2026-10-23"
category: "Çamaşır Makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork A). Konu seçimi: origin/main'de profilo-camasir-makinesi-e30-hatasi yok.
#   Yakın slug'lar: profilo-camasir-makinesi-e18-hatasi (E:36-10 / E:30-80 / E:18 tahliye satırını işliyor → bu yazıda yalnız tablo satırı + bağlantı),
#   profilo-camasir-makinesi-e17-hatasi (eski kod, su alma), profilo-camasir-makinesi-hata-kodlari (hub, E:30 geçmiyor).
#   Ağırlık E:30-10 (su girişi) ve E:30-20 (kritik fonksiyon arızası).
# GSC: https___www-3…6 dışa aktarımlarında bu sorgu yok.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "profilo çamaşır makinesi e3" → 1. "…e30 hatası", 4. "…e30 hatası nasıl giderilir";
#   tohum "profilo çamaşır makinesi e" → 2. "profilo çamaşır makinesi e30 hatası".
# Belgeler yerel kopya (blog-taslaklar/kaynak-profilo-sprint/, BSH media3.bsh-group.com kaynaklı; MD5SUMS-2026-09-30.txt ile aynı). #88: forum/servis sitesi kullanılmadı.
#   Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile ayrıldı).
#  (B) Profilo CGA242X3TR kullanım kılavuzu ve kurulum talimatları  9002022851_B.pdf  44 s.  md5 26e5f99b6a19ecada2fa682a657b7d76
#  (F) Profilo CGK264Z0TR kullanım kılavuzu ve kurulum talimatları  9002013778_F.pdf  48 s.  md5 e8d78fecbda5478f066c2a5a79daf68d
# E:30 -80 satırı B s.34, F s.37 · E:30 -10 B s.34-35, F s.37-38 · E:30 -20 B s.35, F s.38 · su basıncı 1-10 bar ve giriş hortumu kuralları B s.9
#   · giriş hortumu bağlantısı ve sızdırmazlık B s.12-13 · teknik veriler B s.42 · arıza giderme uyarısı B s.33 · acil kilit, yeniden başlatma B s.38 · E-Nr./FD B s.40.
# BİLEREK YAZILMAYANLAR: su seviyesi ölçüm sistemi, valf, kart gibi parça teşhisi · süzgeç sökme adımları (Profilo kılavuzu metinde vermiyor, QR animasyona
#   yönlendiriyor) · E:30 kodlarının Bosch/Siemens'le aynı olduğu iddiası · E:30-80 tahliye adımlarının tekrarı · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: profilo-camasir-makinesi-e30-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekrandaki kodun tamamını oku: E:30 -10 su girişi, E:30 -20 kritik fonksiyon arızası, E:30 -80 tahliye satırıdır."
  - "E:30 -10 görüyorsan önce musluğun açık olduğunu kontrol et; kapalıysa aç."
  - "Su giriş hortumunu musluktan makineye kadar izle; katlanmış ya da sıkışmış yer varsa düzelt."
  - "Su girişindeki süzgeçleri temizle; kılavuz bu işi QR koddaki animasyonla gösteriyor."
  - "Muslukta yeterli su basıncı olup olmadığını kontrol et; kılavuza göre şebeke basıncı en az 1, en fazla 10 bar olmalı."
  - "E:30 -20 görüyorsan önce musluğu kapat; çalışma sırasında makineye ilave su koyma ve deterjanı azalt."
  - "İki kodda da makine kendiliğinden suyu boşaltır; yaklaşık beş dakika bekle, sonra cihazı yeniden başlat."
  - "Kod yeniden başlatmadan sonra geri geliyorsa ürün ve imalat numarasıyla Profilo müşteri hizmetlerini ara."
faq:
  - q: "Profilo çamaşır makinesinde E30 ne demek?"
    a: "Profilo'nun CGA242X3TR ve CGK264Z0TR kılavuzlarında E:30 tek başına bir anlam taşımıyor; arkasındaki ek önemli. E:30 -10 su girişiyle ilgili satırdır: musluk kapalı, giriş hortumu katlanmış, süzgeçler tıkanmış ya da su basıncı düşük. E:30 -20 kritik fonksiyon arızasıdır. E:30 -80 ise suyun pompalanıp boşaltılamadığını gösteren tahliye satırıdır."
  - q: "E30-10 hatası nasıl giderilir?"
    a: "Kılavuzun sırası: musluğu aç, su giriş hortumunun katlanmadığını ve sıkışmadığını kontrol et, su girişindeki süzgeçleri temizle, muslukta yeterli basınç olup olmadığına bak. Bu kodla makine bir su boşaltma işlemi başlatır; yaklaşık 5 dakika bekleyip cihazı yeniden başlat. Arıza sürerse müşteri hizmetlerini ara."
  - q: "E30-20 görünce ne yapmalıyım?"
    a: "Profilo'nun talimatı önce musluğu kapatmak. Makine kendiliğinden suyu boşaltmaya başlar; pompalama bitene kadar yaklaşık 5 dakika bekle ve cihazı yeniden başlat. Kılavuz bu satırda iki olası sebep daha sayıyor: çok fazla deterjan ve çalışma sırasında cihaza ilave su eklenmesi. Arıza devam ederse müşteri hizmetlerini ara."
  - q: "Ekranda E:30 -80 yazıyor, bu su almıyor mu demek?"
    a: "Hayır. Profilo kılavuzunda E:30 -80, E:36 -10 ve E:18 ile aynı satırda: deterjanlı su cihazdan pompalanıp boşaltılmıyor. Kontroller tahliye hortumu, tahliye borusu, pis su pompası ve deterjan miktarı üzerine. Ayrıntılı sıra Profilo E18 yazısında."
  - q: "Kapağı açıp çamaşırları alabilir miyim?"
    a: "Camdan su görünüyorsa hayır. Profilo'ya göre acil kilit açmanın şartı pis su pompasının boş olması; camdan su görünüyorsa kapak açılmamalı, çünkü dışarı akan su maddi hasara neden olabilir. E:30 -10 ve -20'de makine zaten bir boşaltma başlattığı için önce bunun bitmesini bekle."
images:
  coverAlt: "Banyoda duvar önünde duran beyaz önden yüklemeli bir çamaşır makinesinin kumanda paneli"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda su giriş musluğu"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda su giriş musluğu"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefonda uygulama ve Wi-Fi bağlantısı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda deterjan bölmesi"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Ekranda E:30 yanıyor ama arkasında bir ek daha var: -10, -20 ya da -80. Profilo'nun CGA242X3TR ve CGK264Z0TR kılavuzlarında bu üç kod üç ayrı satır ve her biri başka bir şey söylüyor. **E:30 -10** su girişiyle ilgilidir, **E:30 -20** kritik fonksiyon arızasıdır, **E:30 -80** ise tahliye satırıdır. Bu yazıda ilk ikisinin kılavuzdaki sırasını adım adım topladık; tahliye tarafı için ayrı bir yazımız var. Senin modelinde tuş adları farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kodun ekine bak. -10: musluk, giriş hortumu, süzgeçler, su basıncı. -20: musluğu kapat. İki durumda da makine suyu kendisi boşaltır; yaklaşık 5 dakika bekle ve yeniden başlat. -80: tahliye, yani hortum, gider ve pompa. Kod geri gelirse Profilo müşteri hizmetleri.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **E:30 -10** | Musluk kapalı, giriş hortumu katlanmış, süzgeçler tıkanmış ya da su basıncı düşük | 🛠️ Musluk, hortum, süzgeç, basınç |
| **E:30 -10** (kontrollerden sonra) | Su seviyesi ölçüm sistemi arızalı olabilir | ⏳ 5 dk bekle, yeniden başlat; sürerse 🔧 |
| **E:30 -20** | Kritik fonksiyon arızası | 🛠️ Musluğu kapat, bekle, yeniden başlat; sürerse 🔧 |
| **E:30 -80** | Deterjanlı su pompalanıp boşaltılamıyor | 🛠️ Tahliye kontrolleri (E18 yazısı) |

## Adım adım: evde denenecekler

**1. Kodun tamamını oku.** Profilo'nun arıza tablosunda E:30 her zaman bir ekle birlikte geçiyor ve ekler farklı satırlara gidiyor. -80 görüyorsan bu yazının adımları sana göre değil: kılavuz o satırı E:36 -10 ve E:18 ile birlikte "deterjanlı su cihazdan pompalanıp boşaltılmıyor" diye yazıyor. Sıra [Profilo çamaşır makinesi E18 hatası](/blog/profilo-camasir-makinesi-e18-hatasi/) yazısında.

**2. Musluğu kontrol et.** E:30 -10 satırının ilk sebebi **musluğun kapalı olması**; çözüm musluğu açmak. Profilo, su giriş hortumunun adaptör, uzatma ya da valf gibi ek bağlantı elemanları olmadan **doğrudan su musluğuna** bağlanmasını ve musluğun iç çapının en az 17 mm olmasını istiyor.

**3. Giriş hortumunu izle.** İkinci sebep **su giriş hortumunun katlanmış ya da sıkışmış** olması; çözüm hortumun montajını kontrol etmek. Kılavuzun maddi hasar bölümü su hortumlarının asla bükülmemesini, ezilmemesini, değiştirilmemesini ya da kesilmemesini ve yalnız ürünle gelen ya da orijinal yedek hortumların kullanılmasını istiyor. Bağlantıdaki vidalar **elle** sıkılmalı; musluğu açtıktan sonra bağlantı yerlerinin sızdırmazlığına bak.

**4. Süzgeçleri temizle.** Üçüncü sebep **su girişindeki süzgeçlerin tıkanması.** Profilo'nun çözümü süzgeçleri temizlemek; kılavuz bu işin adımlarını metin olarak değil, **QR koddaki animasyonla** gösteriyor. Kendi kılavuzundaki QR kodu taratıp o sırayı izle.

**5. Su basıncına bak.** Dördüncü sebep **düşük su basıncı.** Kılavuzun talimatı muslukta yeterli basınç olup olmadığını kontrol etmek. Profilo, su besleme sistemindeki basıncın **en az 100 kPa (1 bar), en fazla 1000 kPa (10 bar)** olmasını istiyor; çok düşük ya da çok yüksek basınç cihazın fonksiyonunu olumsuz etkileyebilir. Basınç azami değeri aşıyorsa musluk bağlantısı ile hortum seti arasına bir basınç düşürme valfi takılması gerekiyor.

**6. E:30 -20'de musluğu kapat.** Kritik fonksiyon arızasında Profilo'nun ilk talimatı ters yönde: **musluğu kapat.** Aynı satır iki olası sebep daha sayıyor. Biri çok fazla deterjan: aynı miktarda çamaşırla yapılacak bir sonraki yıkamada deterjan miktarını azalt. Diğeri **ilave su:** çalışma sırasında cihaza ilave su ekleme.

**7. Boşaltmayı bekle, yeniden başlat.** Kılavuza göre E:30 -10'da, kontrollerden sonra kalan sebep su seviyesi ölçüm sistemi olabilir; hem bu durumda hem E:30 -20'de **cihaz hata mesajıyla birlikte bir su boşaltma işlemi başlatır.** Pompalama tamamlanana kadar **yaklaşık 5 dakika bekle**, sonra cihazı yeniden başlat. Gerekirse pompalama işlemini yeniden başlat. Bu sırada camda su görünüyorsa kapağı açma.

**8. Kod sürüyorsa servis.** Yeniden başlatmadan sonra kod geri geliyorsa kılavuzun son adımı: **müşteri hizmetlerini ara.** Profilo, başvururken cihazın ürün numarasını (E-Nr.) ve imalat numarasını (FD) hazır bulundurmanı istiyor; ikisi de tip etiketinde, etiketin yeri modele göre değişiyor.

## E17 ile E30-10 farkı

Sitedeki [Profilo çamaşır makinesi E17 hatası](/blog/profilo-camasir-makinesi-e17-hatasi/) yazısı makinenin yeterli suyu alamamasını anlatıyor. Bu yazının dayandığı yeni nesil CGA242X3TR ve CGK264Z0TR kılavuzlarında su girişi sorunları E17 olarak değil, **E:30 -10** satırıyla yazılıyor. Kontrollerin ilk dördü, yani musluk, hortum, süzgeç ve basınç, her iki yazıda aynı yönde.

## Ne zaman servis

- E:30 -10 musluk, hortum, süzgeç ve basınç kontrollerinden sonra da geri geliyorsa
- E:30 -20 bekleme ve yeniden başlatmadan sonra sürüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Profilo kılavuzu usulüne aykırı onarımların tehlike teşkil ettiğini ve cihazda yalnız eğitimli uzman personelin onarım yapabileceğini yazıyor. Musluk, hortum, süzgeç ve yeniden başlatma sende; su seviyesi ölçüm sistemi ve makinenin içi serviste.

## Servisi aramadan önce kısa özet

1. Kodun tamamı ne: E:30 -10, -20 ya da -80?
2. Musluk açık mı, hortum düz mü, süzgeçler temiz mi?
3. Evde su basıncı normal mi?
4. Ürün numarası (E-Nr.) ve imalat numarası (FD) ne?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Profilo'nun diğer kodları [Profilo çamaşır makinesi hata kodları](/blog/profilo-camasir-makinesi-hata-kodlari/) sayfasında, marka bağımsız nedenler [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) rehberinde. Bil, gör, çağır.
