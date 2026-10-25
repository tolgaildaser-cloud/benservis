---
title: "LG bulaşık makinesi HE hatası: ısıtıcı devre arızası"
description: "LG bulaşık makinesinde HE kodu LG kılavuzuna göre ısıtıcı devre arızası demek. Evde güvenle yapılabilecekler, bakım kontrolleri ve servis sınırı."
slug: "lg-bulasik-makinesi-he-hatasi"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork B). Konu seçimi: origin/main'de lg-bulasik-makinesi-he-hatasi yok
#   (LG bulaşıkta tek kod sayfası yalnız lg-bulasik-makinesi-be-hatasi ve OE için su-bosaltmiyor; HE yalnız lg-bulasik-makinesi-hata-kodlari tablosunda bir satır).
# GSC: son 3 ay (https___www-5) ve son 7 gün (https___www-6) dışa aktarımlarında "lg bulaşık" + "he" satırı YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "lg bulaşık makinesi he": 1. "…he hatası" · 2. "…he hatası çözümü" · 3. "…hepsiburada" · 4. "…he arızası".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan yeniden indirildi: ikisi de HTTP 200 (application/octet-stream, PDF), md5 yerel kopyalarla
#   (kaynak-lg-2eki/MD5.txt) aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
#  (B) LG DFB425FP / DFB325HD kullanıcı el kitabı (MFL70282407, 22/06/2018, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=oC7YeOPxpjM19dFWaPA  76 s.  md5 cf083d6bb68d82058de6cffa41b747fb
# HE satırı L s.61 ("Isıtıcı devre arızası" · "Aynı sorun yeniden meydana gelirse servisi çağırın.") · B s.65 aynı ifade · tuhaf ses/koku/duman → fiş + LG L s.7
#   · parçaları onarmayın/değiştirmeyin L s.7 · çoklu priz/uzatma yok, servis öncesi fiş/sigorta L s.5 · topraklı priz L s.6 · 15 A devre kesici, uzatma/çift adaptör yok, 65 ºC altı yoksa soğuk su L s.20
#   · sigorta/devre kesici, CL ekran kilidi L s.62 · kapak açınca bip, sıcak iç L s.62 · güç kesilince su kalması → programı yeniden başlat L s.62
#   · Yüksek Sıcaklık / Enerji Tasarrufu L s.31 · iç kısım ve filtreler iki haftada bir L s.55 · filtre temizliği L s.56-57 · su sıcaklığı düşük → su besleme bağlantısı / su ısıtıcı ayarı L s.65.
# BİLEREK YAZILMAYANLAR: ısıtıcı, termistör, kart, kablo teşhisi ya da ölçümü (#31) · "en sık neden" sıralaması (belgede yok) · reset tuş kombinasyonu (belgede HE için yok)
#   · bekleme süresi rakamı (belgede yok) · sigortayı değiştirme (L s.62 diyor ama ev elektriği; yazıda yalnız "sigorta atmış mı bak, şalteri kaldır" denildi) · fiyat/süre (#46).
# Alıntı denetim tablosu: lg-bulasik-makinesi-he-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak fırça", "Yumuşak, nemli bez", "Bulaşık makinesinin kullanıcı el kitabı"]
steps:
  - "Makineden tuhaf ses, koku ya da duman geliyorsa fişini hemen çek ve LG servisine haber ver."
  - "Kapağı açtığında içerisi sıcaksa makine ve bulaşıklar soğuyana kadar kapağı kapalı tut."
  - "Gücü kapatıp aç ve programı yeniden başlat; içeride su kaldıysa programı baştan çalıştır."
  - "Makinenin topraklı bir prize doğrudan bağlı olduğunu, uzatma kablosu ya da çoklu priz kullanılmadığını ve sigortanın atmadığını kontrol et."
  - "Seçtiğin programa ve seçeneğe bak; Enerji Tasarrufu seçeneği yıkama ve durulama sıcaklığını düşürür."
  - "Fişi çektikten sonra alt rafı çıkar, filtreleri çıkarıp akan su altında yumuşak bir fırçayla temizle ve yerine oturt."
  - "HE kodu yeniden başlatmadan sonra tekrar çıkıyorsa makineyi kullanmayı bırak ve LG yetkili servisini çağır."
faq:
  - q: "LG bulaşık makinesinde HE ne demek?"
    a: "LG'nin DFC325HD ve DFB425FP kullanıcı el kitaplarındaki hata tablosunda HE, ısıtıcı devre arızası olarak geçiyor. Tablodaki tek talimat: aynı sorun yeniden meydana gelirse servisi çağırın. Yani bir kez görünen HE için yeniden başlatmayı denersin; geri geliyorsa iş servise kalır."
  - q: "HE hatası çözümü var mı, kendim tamir edebilir miyim?"
    a: "Isıtıcı tarafında kullanıcıya bırakılan bir onarım yok. LG kılavuzu cihazın herhangi bir parçasını onarmamanı ya da değiştirmemeni, tüm onarımların yetkili servis tarafından yapılmasını istiyor. Senin yapabileceklerin yeniden başlatma, priz ve sigorta kontrolü, program seçimi ve filtre bakımı."
  - q: "HE kodu çıktı, bulaşıklar yine de yıkandı; kullanmaya devam edebilir miyim?"
    a: "Kılavuz tek seferlik HE ile tekrarlayan HE arasında ayrım yapıyor: talimat, aynı sorun yeniden meydana gelirse servisi çağırmak. Kod tekrar ediyorsa makineyi çalıştırmayı bırakıp LG servisine haber vermek en güvenli yol."
  - q: "Enerji Tasarrufu seçeneği HE hatasına yol açar mı?"
    a: "Kılavuzda böyle bir bilgi yok. LG'ye göre Enerji Tasarrufu yıkama ve durulama sıcaklıklarını düşürerek enerji tasarrufu sağlıyor ve çok kirli bulaşıklarda önerilmiyor. Bu, bulaşıkların neden ılık çıktığını açıklayabilir ama HE kodunun nedeni olarak geçmiyor."
  - q: "Bulaşık makinesini uzatma kablosuyla kullanabilir miyim?"
    a: "Hayır. LG kılavuzu cihazın çoklu prizlere, uzatma kablolarına ya da adaptörlere takılmamasını, yerel düzenlemelere uygun kurulmuş topraklı bir prize bağlanmasını istiyor."
images:
  coverAlt: "Mutfakta tezgâh altına yerleştirilmiş, kapağı kapalı paslanmaz görünümlü bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Bulaşık makinesi yıkamanın ortasında durdu ya da program bitince ekranda **HE** yazıyor. LG'nin Türkçe kullanıcı el kitaplarına göre bu kod **ısıtıcı devre arızası** anlamına geliyor. Isıtıcı ve onun devresi senin işin değil; ama servisi çağırmadan önce güvenle yapabileceğin birkaç şey var ve bazıları, aynı kodun bir daha çıkıp çıkmadığını anlamanın tek yolu. Bu yazıda LG'nin DFC325HD ve DFB425FP kılavuzlarında HE ile ve ısıtmayla ilgili ne varsa sırayla topladık. Senin modelinde tuş adları farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** HE, ısıtıcı devre arızası. Tuhaf koku ya da duman varsa fişi çek. Yoksa makine soğusun, gücü kapatıp aç ve programı yeniden başlat; priz, sigorta, program seçimi ve filtrelere bak. HE yeniden çıkarsa LG yetkili servisi.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **HE** | Isıtıcı devre arızası | ⏳ Yeniden başlat; tekrar ederse 🔧 servis |
| **tE** | Termistör arızası | Tekrar ederse 🔧 servis |
| **FE** | Aşırı su beslenmiş | Tekrar ederse 🔧 servis |
| **CL** | Ekran kilidi açık; tuşlar çalışmaz | 🛠️ Ekran kilidini kapat |
| **Kapak açılınca sürekli bip** | İçerisi hâlâ sıcak | ⏳ Soğuyana kadar kapağı kapat |

## Adım adım: evde denenecekler

**1. Önce güvenlik.** LG kılavuzunun kullanım bölümü açık: cihazdan tuhaf bir ses, koku ya da duman geldiğini fark edersen **elektrik fişini hemen çıkar** ve LG müşteri hizmetleriyle iletişim kur. Bu durumda aşağıdaki adımlara geçilmez. Elektrikli bir arızada ıslak elle prize ya da kontrollere dokunma; kılavuz bunu da ayrıca yasaklıyor.

**2. Makine soğusun.** HE yıkamanın ortasında çıktıysa içerisi sıcak olabilir. LG'nin sorun giderme tablosuna göre program sırasında ya da hemen sonra kapak açıldığında makine sürekli bip sesi çıkarıyorsa içerisi sıcaktır; **makine ve bulaşıklar soğuyana kadar kapağı kapat**, iç sıcaklık düşünce ses kesilir. Elini makinenin içine sokarken dikkatli ol.

**3. Gücü kapatıp aç, programı yeniden başlat.** HE satırındaki talimat "aynı sorun yeniden meydana gelirse servisi çağırın". Bu, kodun bir kez görülmesiyle tekrar etmesi arasında fark olduğunu söylüyor. Makineyi kapat, yeniden aç ve programı baştan başlat. Program yarıda kaldıysa makinenin dibinde su görebilirsin; LG'ye göre program normal sonlanmadan güç kesilirse su kalabilir ve çözümü programı yeniden başlatmak. Ekranda **CL** varsa ekran kilidi açıktır ve tuşlar tepki vermez; kılavuzdaki tuş kombinasyonuyla kilidi kapat.

**4. Priz ve sigortaya bak.** LG bu makinenin **topraklı bir prize** bağlanmasını, çoklu prize, uzatma kablosuna ya da çift adaptöre takılmamasını istiyor. Kurulum bölümüne göre priz en az 15 amperlik bir devre kesici ya da geciktirici sigortayla korunmalı. Makine hiç çalışmıyorsa sigortanın atıp atmadığına, devre kesicinin inip inmediğine bak. Prizin ya da tesisatın kendisi elektrikçi işi.

**5. Program ve seçenekleri kontrol et.** Isıtmayla ilgili iki seçenek var. **Yüksek Sıcaklık** ana yıkama ya da sıcak durulama sıcaklığını artırıyor. **Enerji Tasarrufu** ise yıkama ve durulama sıcaklıklarını düşürüyor ve LG bunu çok kirli bulaşıklarda önermiyor. Bulaşıklar ılık ve kirli çıkıyorsa yanlış seçenek olabilir; ama kılavuz bu seçenekleri HE kodunun nedeni olarak saymıyor.

**6. Filtreleri temizle.** Bu bir bakım adımı, HE'nin doğrudan çözümü değil. LG iç kısmın, püskürtücü kolların ve filtrelerin **iki haftada bir** temizlenmesini öneriyor. Önce fişi çek. Alt rafı çıkar, iç filtreyi saat yönünün tersine çevirip filtreleri çıkar, akan su altında yumuşak bir fırçayla temizle ve iç filtreyi yerine oturana kadar saat yönünde çevir. Paslanmaz çelik filtrenin keskin kenarlarına dikkat et. Ayrıntılar [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

**7. Tekrar ederse servis.** Yeniden başlattığın hâlde HE geri geliyorsa evde yapılacak iş bitti. LG kılavuzu cihazın hiçbir parçasını kendin onarmamanı ya da değiştirmemeni, onarımların yetkili servis tarafından yapılmasını istiyor.

## Ne zaman servis

- HE yeniden başlatmadan sonra tekrar görünüyorsa
- Makineden tuhaf ses, koku ya da duman geliyorsa (önce fişi çek)
- HE ile birlikte tE ya da FE gibi başka kodlar da çıkıyorsa
- Bulaşıklar her programda soğuk ve kirli çıkıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Yeniden başlatma, priz ve sigorta kontrolü, program seçimi ve filtreler sende; ısıtıcı, termistör, kablolar ve elektronik kart LG yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. HE hangi aşamada çıktı: yıkamada mı, durulamada mı?
3. Yeniden başlattıktan sonra kod geri geldi mi?
4. Makine uzatma kablosuna ya da çoklu prize mi bağlı?
5. Hangi programı ve seçenekleri kullandın?

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. LG'nin bütün kodları [LG bulaşık makinesi hata kodları](/blog/lg-bulasik-makinesi-hata-kodlari/) sayfasında; bulaşıklar ıslak çıkıyorsa [LG bulaşık makinesi kurutmuyor](/blog/lg-bulasik-makinesi-kurutmuyor/), kirli çıkıyorsa [LG bulaşık makinesi temiz yıkamıyor](/blog/lg-bulasik-makinesi-temiz-yikamiyor/) yazısına bak. Bil, gör, çağır.
