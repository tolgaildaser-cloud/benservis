---
title: "Vestel derin dondurucu dondurmuyor"
description: "Vestel derin dondurucu yeterince dondurmuyorsa: sandıkta mod ve termostat, dikeyde sıcaklık kademesi, ilk 24 saat, kapak, doluluk ve yerleşim. Vestel'in sırası."
slug: "vestel-derin-dondurucu-dondurmuyor"
date: "2026-10-03"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile statik.vestel.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adresler vestel.com.tr ürün sayfalarındaki kılavuz bağlantılarından (_k = kullanım kılavuzu). Okuma pdftotext -layout; sayfa = PDF sayfası.
#  S) SD50011 DuoMode sandık   https://statik.vestel.com.tr/webfiles/20268372_k.pdf  28 s.  md5 70c6369bb7f21cb18c0744d5c4637713
#  D) CDL711 E NF / EX NF dikey https://statik.vestel.com.tr/webfiles/20350573_k.pdf  44 s.  md5 8f9e5fd548cdf89c259b9f7d73cbca77
#  (indirildi, aynı sandık tablosu: SD15011 20268376_k md5 ae4897b2298613fb0c59555e137f14ec · SD30111 20268401_k md5 33a75d4b2b3e2112d79bc8a7569b5150)
# S s.22 tablo "Derin dondurucu yeterince soğutmuyor.": "Termostat ayar düğmesi yetersiz konumdadır." / "Termostat ayar düğmesi uygun konuma getirin."
#   · "Kapağı sık sık açılıyor ya da uzun süre açık bırakılıyor olabilir." / "...dikkat edin." · "Çok dolu olması nedeniyle hava akımı yetersizdir." / "Dondurucunuzu çok fazla doldurmayın."
# S s.13: "Dondurucunuz Kontrol Panelinde belirtilen aralıklarda yaptığınız ayara göre soğutucu veya dondurucu olarak çalışacaktır." · "Düğmeyi sonuna kadar sağa (saat yönünde)
#   çevirdiğinizde ürününüzde en düşük ısıyı (soğukluğu) elde edersiniz." · "Ortam sıcaklığı çok yüksek ise, termostat ayar düğmesini daha yüksek konumlara getiriniz."
#   · hızlı dondurma: "dondurucunuz en yüksek performansta çalışır. (Kompresörü sürekli olarak çalışır.)" · S s.14: "Dolabınız soğutucu konumunda çalışıyorsa dondurucu modu hızlı dondurma
#   düğmesine kesinlikle basmayınız." · "düğmenin uzun süre basılı unutulması fazla enerji tüketimine ve kompresör arızalarına neden olabilir." · "İlk çalıştırıldığında veya taşınma
#   işlemlerini takiben ... 3 saat beklettikten sonra fişi prize takınız." · "Kompresör ışığı söndüğünde yiyeceklerinizi dondurucunun içine yerleştirebilirsiniz." · vakum 10 dakika.
#   · S s.12: "yan ve arka tarafından en az 10'ar cm boşluk bırakılmalıdır." · "arka bölgede hava sirkülasyonu şarttır."
# D s.35 "Derin dondurucunuz yeterli soğutma yapmıyor.": "Sıcaklık ayarını 1 oC daha soğuk ayarlayın. Bir süre sonra tekrar inceleyin." · kapı sık açılıyor → "Kapıyı sık açıp kapatmayın.
#   Özellikle bu durumda birkaç saat kapıları açıp kapatmayın." · kapı tam kapanmamış → "yiyecekler kapıya temas ediyor olabilir ya da sepetler tam yerine oturmamış olabilir. Bu durumu
#   düzelttiğiniz halde kapısı kapanmıyorsa yetkili teknik servisten yardım talep ediniz." · aşırı dolu → "Fazla yüklenmiş yiyecekleri dondurucudan çıkartmalısınız." · arka duvar mesafesi
#   → "mesafe ayar plastiği ile gerekli boşluğu bırakabilirsiniz." · ortam sıcaklığı → "kılavuzda belirtilen limitler içinde olduğundan emin olun."
# D s.24: ayar -16/-18/-20/-22/-24 °C; tavsiye: az yiyecek -16, normal -18/-20, çok yiyecek -22/-24 · "Dondurucu kapısının 2 dakikadan uzun süre açık kalması durumunda, "bip" alarmı duyulur."
# D s.25: "tamamen soğuyabilmesi için, ortam sıcaklığına bağlı olarak 24 saate kadar kesintisiz çalışması gerekir." · "5 dakika gecikmeyle çalışmasını sağlayan bir fonksiyon" · iklim sınıfları
#   SN 10-32 / N 16-32 / ST 16-38 / T 16-43 °C · D s.21: hızlı dondurma "taze yiyeceği dondurucuya koymadan 3 saat önce ayarlayın" · "24 saat sonra ... otomatik olarak iptal" · D s.15: 75 mm.
# D s.34 E09 "Dondurucunuzun sıcaklık değeri yeteri kadar soğuk değil" (yalnız anıldı; yayındaki vestel-buzdolabi-e09-hatasi'na link).
# BİLEREK YAZILMAYANLAR: termostat düğmesini madeni parayla çevirme (alet kuralı; yalnız "çevir" dendi) · kondenser bakımı (S s.23: yetkili servis) · sigorta (#31) · E01-E07 sensör kodları
#   (yalnız servis) · yayındaki vestel-buzdolabi-sogutmuyor ile aynı satır sırası kurulmadı (yakın kopya kapısı): sandığa özgü mod/termostat ve ilk çalıştırma satırları öne alındı · fiyat.
# Alıntı denetim tablosu: vestel-derin-dondurucu-dondurmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika + bekleme"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Sandık tipinde termostat düğmesinin dondurucu aralığında olduğunu kontrol et; değilse cihaz soğutucu olarak çalışır."
  - "Sandıkta termostatı daha soğuk konuma çevir; dikey modelde sıcaklık ayarını 1 °C daha soğuğa al ve bir süre sonra yeniden bak."
  - "Cihaz yeni kurulduysa ya da taşındıysa ilk soğumayı bekle; dikey modelde bu süre ortam sıcaklığına göre 24 saate kadar çıkabilir."
  - "Kapağı sık açma, uzun süre açık bırakma; kapıya değen yiyecekleri ve yerine oturmamış sepetleri düzelt."
  - "Dondurucuyu aşırı doldurduysan fazla yiyecekleri çıkar."
  - "Çok miktarda taze yiyecek koyacaksan hızlı dondurma modunu önceden aç."
  - "Sandıkta yanlarda ve arkada en az 10'ar cm boşluk bırak; dikey modelde arka duvar mesafesini ve oda sıcaklığını kontrol et."
faq:
  - q: "Vestel sandık dondurucum soğutuyor ama dondurmuyor, neden?"
    a: "Vestel'in DuoMode sandık kılavuzuna göre cihaz kontrol panelinde belirtilen aralıklarda yaptığın ayara göre soğutucu ya da dondurucu olarak çalışır. Termostat düğmesi soğutucu aralığındaysa cihaz dondurmaz; düğmeyi dondurucu aralığına getir."
  - q: "Vestel dikey derin dondurucu kaç dereceye ayarlanmalı?"
    a: "CDL711 kılavuzunun tavsiye tablosu: az miktarda yiyecek için -16 °C, normal kullanım için -18 °C ya da -20 °C, çok miktarda yiyecek için -22 °C ya da -24 °C."
  - q: "Yeni aldığım dondurucu ilk gün yeterince soğumadı."
    a: "Vestel dikey kılavuzuna göre dondurucunun tamamen soğuması için ortam sıcaklığına bağlı olarak 24 saate kadar kesintisiz çalışması gerekir; bu sürede kapıyı sık açma ve aşırı doldurma. Sandık kılavuzu ilk çalıştırmada ve taşımadan sonra cihazı 3 saat bekletip sonra fişe takmanı, kompresör ışığı sönünce yiyecek koymanı söylüyor."
  - q: "Ekranda E09 yazıyor, ne demek?"
    a: "Vestel'in dikey kılavuzunda E09, dondurucunun sıcaklık değerinin yeteri kadar soğuk olmadığını gösteriyor ve özellikle uzun süreli elektrik kesintilerinden sonra görünüyor. Ayrıntı için Vestel buzdolabı E09 yazısına bakabilirsin."
images:
  coverAlt: "Kapağı açık beyaz sandık tipi derin dondurucunun içinde sepetlere dizilmiş donmuş gıda paketleri"
---

Dondurucunun motoru çalışıyor, içi serin; ama et paketleri taş gibi donmuyor. Vestel'in sandık tipi kılavuzunda bu durumun satırı **"Derin dondurucu yeterince soğutmuyor."**, dikey kılavuzunda **"Derin dondurucunuz yeterli soğutma yapmıyor."** İki tabloda da ilk bakılacak yer aynı: ayar. Ama sandık tipinde ayrıca cihazın **hangi modda** çalıştığına bakmak gerekiyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sandıkta düğme dondurucu aralığında mı → daha soğuk ayar → yeni kurulduysa bekle → kapak ve sepetler → aşırı yük → taze yük öncesi hızlı dondurma → yanlarda, arkada boşluk ve oda sıcaklığı. Kapı düzelttiğin hâlde kapanmıyorsa ya da E01-E07 kodu görünüyorsa → servis.

## Adım adım: evde denenecekler

**1. Sandıkta modu kontrol et.** Vestel'in DuoMode sandık kılavuzuna göre cihaz, kontrol panelinde belirtilen aralıklarda yaptığın ayara göre **soğutucu veya dondurucu** olarak çalışır. Düğme soğutucu aralığındaysa dondurucu dondurmaz. Kılavuzun bir uyarısı daha var: dolap soğutucu konumundayken **hızlı dondurma düğmesine basma**; termostat devreden çıkar ve içindekiler donar.

**2. Ayarı bir kademe soğut.** Sandık tablosunun nedeni **"Termostat ayar düğmesi yetersiz konumdadır."**, çözümü **"Termostat ayar düğmesi uygun konuma getirin."** Düğmeyi sağa (saat yönünde) çevirdikçe iç sıcaklık düşer; kılavuz ortam sıcaklığı çok yüksekse düğmeyi daha yüksek konuma almanı istiyor. Dikey CDL711 tablosunun çözümü: **"Sıcaklık ayarını 1 oC daha soğuk ayarlayın. Bir süre sonra tekrar inceleyin."** Dikey modelde ayar -16 °C ile -24 °C arasında; normal kullanım için Vestel **-18 °C ya da -20 °C**, çok miktarda yiyecek için **-22 °C ya da -24 °C** öneriyor.

**3. İlk soğumayı bekle.** Dikey kılavuza göre dondurucunun tamamen soğuması için ortam sıcaklığına bağlı olarak **24 saate kadar kesintisiz** çalışması gerekir. Fişi çekip taktıysan ya da elektrik gidip geldiyse cihaz kompresörü korumak için **5 dakika gecikmeyle** çalışmaya başlar. Sandık kılavuzu ilk çalıştırmada ve taşımadan sonra cihazı **3 saat bekletip** fişe takmanı, **kompresör ışığı sönünce** yiyecek koymanı söylüyor.

**4. Kapağa dikkat et.** İki tabloda da neden kapağın **sık açılması ya da uzun süre açık kalması.** Dikey kılavuz bu durumda **birkaç saat** kapıyı açıp kapatmamanı istiyor; kapı 2 dakikadan uzun açık kalırsa cihaz zaten bip sesi verir. Kapı tam kapanmıyorsa nedeni çoğu zaman **kapıya değen yiyecekler ya da yerine oturmamış sepetler.** Sandıkta kapağı kapatır kapatmaz yeniden açamıyorsan bu içeride oluşan vakumdur; kılavuza göre normal ve **10 dakika** içinde geçer, kolu zorlama.

**5. Yükü azalt.** Sandık tablosu: **"Çok dolu olması nedeniyle hava akımı yetersizdir."** → **"Dondurucunuzu çok fazla doldurmayın."** Dikey tablo: **"Fazla yüklenmiş yiyecekleri dondurucudan çıkartmalısınız."**

**6. Taze yükten önce hızlı dondurmayı aç.** Dikey kılavuza göre 24 saatte dondurulabilecek en fazla taze yiyecek miktarı **cihaz etiketinde** yazıyor; en iyi sonuç için hızlı dondurma modunu taze yiyeceği koymadan **3 saat önce** aç. Mod **24 saat** sonra kendiliğinden kapanır. Sandık modelde hızlı dondurma düğmesi kompresörü sürekli çalıştırır; kılavuz düğmenin **uzun süre açık unutulmamasını** istiyor.

**7. Yerleşimi ve odayı kontrol et.** Sandık kılavuzu cihazın **yan ve arka tarafında en az 10'ar cm** boşluk ister; arka bölgede hava dolaşımı şart. Dikey tablonun çözümü arka duvar için cihazla gelen **mesafe ayar plastiğini** kullanmak; arkadaki boşluk **75 mm'yi aşmamalı.** Oda sıcaklığı da cihazın etiketindeki iklim sınıfına uygun olmalı: Vestel'in listesinde **SN 10-32 °C, N 16-32 °C, ST 16-38 °C, T 16-43 °C.**

## Ekranda kod varsa

Vestel'in dijital dikey modellerinde dondurucu yeterince soğuk değilse ekranda **E09** görünebilir; kılavuza göre özellikle uzun elektrik kesintilerinden sonra çıkar. Ne yapacağını [Vestel buzdolabı E09 hatası](/blog/vestel-buzdolabi-e09-hatasi/) yazısında anlattık. **E01, E02, E03, E06, E07** kılavuzda **sensör hatası** uyarısı; çözümü Vestel İletişim Merkezi'ni arayıp teknik destek istemek.

Markadan bağımsız kontrol listesi için [derin dondurucu dondurmuyor](/blog/derin-dondurucu-dondurmuyor/), doğru ayar için [derin dondurucu kaç derece olmalı](/blog/derin-dondurucu-kac-derece-olmali/) yazısına bakabilirsin.

## Ne zaman servis

- Yiyecekleri ve sepetleri düzelttiğin hâlde **kapı kapanmıyorsa:** kılavuz yetkili teknik servisten yardım istemeni söylüyor.
- Ekranda **E01-E07** sensör kodlarından biri varsa.
- **E08** (düşük voltaj) gerilim normale döndüğü hâlde sürüyorsa.
- Ayar, kapak, yük ve yerleşim düzgünken dondurucu hâlâ dondurmuyorsa: Vestel İletişim Merkezi ya da Vestel Yetkili Servisi.

⛔ **Kendin-çöz sınırı burada biter.** Mod, ayar, kapak, yük ve yerleşim kullanıcıya; kondenser bakımı, sensör ve soğutma sistemi servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
