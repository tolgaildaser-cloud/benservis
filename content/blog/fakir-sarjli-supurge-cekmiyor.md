---
title: "Fakir şarjlı süpürge çekmiyor"
description: "Fakir şarjlı dikey süpürgenin emişi zayıfladıysa: hazne, filtre, teleskopik boru, hazne kanalı ve rulo fırça. Fakir kılavuzlarındaki sırayla kontrol."
slug: "fakir-sarjli-supurge-cekmiyor"
date: "2026-10-03"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, süpürge). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Fakir'in KENDİ alan adından (www.fakir.com.tr) indirildi,
#   HTTP 200, yönlendirme 0. Not: ürün sayfalarındaki kılavuz bağlantısı fakir.witcdn.net'i (üçüncü taraf CDN) gösteriyor; aynı dosya yolu www.fakir.com.tr/Data/EditorFiles/... altında
#   doğrudan 200 dönüyor ve kaynak olarak YALNIZ fakir.com.tr adresi kullanıldı (alan adı kapısı). Yerel: blog-taslaklar/kaynak-supurge-3eki/ · sayfa = PDF sayfası (= basılı no).
#  F1) Fakir Purevac Ultra dikey şarjlı süpürge (otomatik temizleme istasyonlu) kullanma kılavuzu  https://www.fakir.com.tr/Data/EditorFiles/kullanim-kilavuzlari/41005129.pdf  152 s.  md5 29c8c07875e43933fcb450798455092d
#  F2) Fakir Inovator 6158 dikey şarjlı süpürge kullanma kılavuzu  https://www.fakir.com.tr/Data/EditorFiles/kullanim-kilavuzlari/41005383.pdf  112 s.  md5 245d22deb2b68ddf0563e4c939fc48a7
#   (iki kılavuz çok dilli; Türkçe bölüm F1 s.~60-75, F2 s.~45-58)
# Tablo F1 s.74 "Emiş zayıf" → "Toz haznesinin filtresi tozla dolu"/"Toz haznesi filtresini temizleyin veya değiştirin" · "Elektrikli fırça borusu tıkalı"/"Elektrikli fırçadaki çöpü temizleyin" ·
#   "Kağıt veya peluş elyaf tüpe sıkışmış"/"Tüpün tıkalı olup olmadığını kontrol edin" · "Toz haznesi ile makine arasındaki kanal tıkalı"/"Kanalın çöpünü kontrol et" · istasyon: "Emiş zayıf"/
#   "Toz torbası full dolu"/"Toz torbasını temizleyin veya değiştirin." · "Güç fırçası çalışmıyor"/"Çok fazla saçın veya diğer uzun kirliliklerin sarılması"/"Bu karışıklıkları temizle"
# F1 s.73 ekran ikonları: "... ana makinenin emme konumunda tozun tıkanması anlamına gelir. Teleskopik tüpü çıkarmak, emme noktasındaki tozu teyit etmek ve temizlemek için gereklidir." ·
#   "giriş Hepa filtresi veya toz kabının emme girişi tıkanmış demektir ... kontrol edilip temizlenmesi gerekmektedir." · "yumuşak rulo fırçasının saç veya çöp tarafından tıkandığı anlamına gelir"
# F1 s.69 "toz kabı kilidini açmak için basın, alt kısım otomatik olarak açılacak" · "Outlet Hepa'yı ... yumuşak bir fırça ile temizleyin (not: su ile temizlemeyin)" · "Filtreleri ve Hepa'yı yumuşak saç
#   fırçasıyla temizleyin veya suya koyarak yıkayın." · "kuruduktan sonra tekrar takın. Emiş gücü zayıfladığında yıkamanızı öneririz." · F1 s.70 "Kullanmadan önce lütfen tüm filtrelerin doğru konumda takıldığından emin olun." · "Kilidi açmak için düğmeyi çevirin, rulo fırçayı çıkarın ve temizleyin"
# Tablo F2 s.58 "Emiş gücü azalması" → "Toz haznesi tozla dolmuş"/"Tozu dökerek çıkarın" · "Filtre tozla dolmuştur"/"Filtreyi yıkayın veya değiştirin" · "Elektrikli fırça giriş kanalı tıkalı veya rulo fırça tıkalı"/
#   "Elektrikli rulo fırçanın içindeki pisliği temizleyin"
# F2 s.55 "Maksimum emme etkisine temiz bir filtre ve boş bir hazne ile ulaşılır." · "sert temizlik maddeleri veya sıcak su kullanmayın" · "EPA filtresinin ... kuru bir temizleme yöntemi" · "EPA filtre bir
#   defadan fazla yıkanamaz." · "6 ayda bir EPA filtrenizi değiştirmenizi" · "Toz haznesini her kullanımdan sonra boşaltmanızı öneririz."
# F2 s.56 "Herhangi bir bakım yapmadan önce, şarj adaptörünü cihazdan ayırınız." · "Her vakumlamadan sonra, dönen fırçaya herhangi bir kirin sıkışıp kalmadığını kontrol ediniz. Fırça kirli ise, zemin başlığından ayırınız."
#   F2 s.57 "Zemin başlığını doğrudan akan suda yıkamayın" · F2 s.54 "turbo modda iken emiş ağzı, boru ... tıkandığı durumda 5 sn sonra ürün kendini korumaya almak için kapanacak, batarya durum LEDleri kırmızı renkte 10 sn boyunca yanıp sönecektir."
# BİLEREK YAZILMAYANLAR: toz sensörü arızası ikonu (F1 s.73 → "Satış sonrası hizmete danışmanız gerekmektedir" → servis) · motor teşhisi · batarya değişimi · model genellemesi · fiyat (#46).
# Alıntı denetim tablosu: fakir-sarjli-supurge-cekmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre yıkandıysa kuruma süresi ayrı)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak fırça", "Süpürgenin kullanım kılavuzu"]
steps:
  - "Bakımdan önce süpürgeyi kapat ve şarj adaptörünü cihazdan ayır."
  - "Toz haznesini boşalt."
  - "Filtreleri kılavuzdaki gibi temizle; sert temizlik maddesi ve sıcak su kullanma, kurumadan takma."
  - "Teleskopik boruyu çıkar ve borunun ve emme noktasının içinde kağıt ya da peluş elyaf olup olmadığını kontrol et."
  - "Toz haznesi ile gövde arasındaki kanalı ve haznenin emme girişini kontrol et, çöpü temizle."
  - "Zemin başlığındaki rulo fırçayı çıkar, sarılan saç ve çöpü temizle."
  - "Tüm filtrelerin doğru konumda takılı olduğunu kontrol et ve süpürgeyi yeniden çalıştır."
faq:
  - q: "Fakir şarjlı süpürgemin emişi neden zayıfladı?"
    a: "Fakir'in Purevac Ultra ve Inovator 6158 kılavuzlarındaki tablolarda emiş zayıflığının nedenleri aynı yöne bakıyor: toz haznesinin ya da filtrenin tozla dolması, elektrikli fırça borusunun veya giriş kanalının tıkanması, tüpe kağıt ya da peluş elyaf girmesi ve toz haznesi ile makine arasındaki kanalın tıkanması. Inovator 6158 kılavuzu maksimum emişe temiz bir filtre ve boş bir hazneyle ulaşıldığını yazıyor."
  - q: "Filtreyi suyla yıkayabilir miyim?"
    a: "Modele göre değişiyor. Purevac Ultra kılavuzu filtreleri ve Hepa'yı yumuşak saç fırçasıyla temizlemeyi ya da suya koyarak yıkamayı, kuruduktan sonra takmayı söylüyor; çıkış (Outlet) Hepa için ise suyla temizlememeyi, yumuşak fırça kullanmayı istiyor. Inovator 6158 kılavuzu EPA filtre için kuru temizleme öneriyor, EPA filtrenin bir defadan fazla yıkanamayacağını ve 6 ayda bir değiştirilmesini tavsiye ediyor."
  - q: "Süpürge çalışırken birden kapandı, ışıklar kırmızı yanıp sönüyor."
    a: "Inovator 6158 kılavuzuna göre süpürge turbo modda iken emiş ağzı ya da boru tıkanırsa 5 saniye sonra kendini korumak için kapanır ve batarya LED'leri 10 saniye kırmızı yanıp söner. Fırçanın merdanesine bir şey dolanırsa fırça durur, motor çalışmaya devam eder ve LED'ler kırmızı yanıp söner; fırça temizlenip süpürge açıp kapatılınca kırmızı ışıklar söner."
  - q: "Otomatik temizleme istasyonlu modelde emiş zayıf, neye bakmalıyım?"
    a: "Purevac Ultra kılavuzunun istasyon tablosuna göre emiş zayıfsa toz torbası tamamen dolmuş olabilir; çözüm toz torbasını temizlemek ya da değiştirmek. Kılavuz torbayı yumuşak bir fırçayla temizlemeyi, çok kirlendiğinde yedek torbayla değiştirmeyi söylüyor."
images:
  coverAlt: "Teleskopik borusu çıkarılmış dikey şarjlı süpürge, yanında boşaltılmış şeffaf toz haznesi ve filtre"
---

Süpürge çalışıyor, motorun sesi geliyor ama halıdaki kırıntılar yerinde duruyor. Fakir'in Purevac Ultra kılavuzunun sorun giderme tablosunda bu belirti **"Emiş zayıf"**, Inovator 6158 kılavuzunda **"Emiş gücü azalması"** diye geçiyor. İki tablonun sıraladığı nedenlerin tamamı hava yolunun bir yerinde biriken toz ve çöp.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Adaptörü ayır → hazneyi boşalt → filtreleri temizle → teleskopik boruya ve emme noktasına bak → hazne ile gövde arasındaki kanalı aç → rulo fırçadaki saçları temizle → filtreleri doğru tak, yeniden dene. İstasyonlu modelde toz torbasını da kontrol et.

## Adım adım: evde denenecekler

**1. Adaptörü ayır.** Inovator 6158 kılavuzunun bakım bölümü şöyle başlıyor: herhangi bir bakım yapmadan önce **şarj adaptörünü cihazdan ayır.**

**2. Toz haznesini boşalt.** Inovator 6158 tablosunun ilk satırı **"Toz haznesi tozla dolmuş"**, çözümü **"Tozu dökerek çıkarın."** Purevac Ultra'da **toz kabı kilidine bastığında alt kısım otomatik açılır** ve toz dökülür. Fakir'in önerisi hazneyi **her kullanımdan sonra** boşaltmak.

**3. Filtreleri temizle.** İki tabloda da filtre satırı var: Purevac Ultra'da **"Toz haznesinin filtresi tozla dolu"** → **temizle ya da değiştir**, Inovator 6158'de **"Filtre tozla dolmuştur"** → **yıka ya da değiştir.** Yöntem modele göre değişiyor:

- **Purevac Ultra:** filtreleri ve Hepa'yı **yumuşak saç fırçasıyla temizle ya da suya koyarak yıka**, kuruduktan sonra tak. Çıkış (Outlet) Hepa'yı ise **suyla temizleme**, yumuşak fırça kullan. Kılavuz **emiş gücü zayıfladığında** yıkamayı öneriyor.
- **Inovator 6158:** **sert temizlik maddeleri ve sıcak su kullanma**; EPA filtre için **kuru temizleme** önerilir, EPA filtre **bir defadan fazla yıkanamaz**. Fakir EPA filtrenin **6 ayda bir** değiştirilmesini tavsiye ediyor.

**4. Teleskopik boruya bak.** Purevac Ultra tablosunda **"Kağıt veya peluş elyaf tüpe sıkışmış"** satırının çözümü **"Tüpün tıkalı olup olmadığını kontrol edin."** Ekran uyarısı da aynı yeri gösteriyor: emme konumunda toz tıkanması varsa **teleskopik tüpü çıkarıp emme noktasındaki tozu kontrol etmek ve temizlemek** gerekiyor.

**5. Hazne kanalını aç.** Purevac Ultra'da bir satır daha var: **"Toz haznesi ile makine arasındaki kanal tıkalı"** → **"Kanalın çöpünü kontrol et."** Ekrandaki ilgili uyarıya göre **giriş Hepa filtresi ya da toz kabının emme girişi** tıkanmışsa bu parçaların **kontrol edilip temizlenmesi** gerekiyor.

**6. Rulo fırçayı temizle.** Purevac Ultra tablosunda **"Elektrikli fırça borusu tıkalı"** → **elektrikli fırçadaki çöpü temizle**; Inovator 6158'de **"Elektrikli fırça giriş kanalı tıkalı veya rulo fırça tıkalı"** → **rulo fırçanın içindeki pisliği temizle.** Purevac Ultra'da **kilidi açmak için düğmeyi çevirip** rulo fırçayı çıkarıyorsun. Inovator 6158 kılavuzu **her vakumlamadan sonra** dönen fırçaya kir sıkışıp sıkışmadığına bakmanı istiyor; zemin başlığını **doğrudan akan suda yıkama.**

**7. Filtreleri doğru tak, yeniden dene.** Purevac Ultra kılavuzunun uyarısı: kullanmadan önce **tüm filtrelerin doğru konumda takıldığından** emin ol.

## Kırmızı ışıklar ve kendiliğinden kapanma

Inovator 6158 kılavuzuna göre süpürge **turbo modda** iken emiş ağzı ya da boru tıkanırsa **5 saniye sonra** kendini korumaya alıp kapanır, batarya LED'leri **10 saniye kırmızı** yanıp söner. Fırçanın merdanesine bir şey dolanırsa **fırça durur, motor çalışmaya devam eder** ve LED'ler kırmızı yanıp söner; fırça temizlenip süpürge açma-kapama tuşuyla kapatılıp açılınca kırmızı ışıklar söner. Purevac Ultra'da da üç kırmızı LED'in yanıp sönmesi; aşırı ısınma, motorun yabancı cisimle tıkanması ya da zemin fırçasının tıkanması gibi durumları gösteriyor.

**İstasyonlu modelde:** Purevac Ultra'nın otomatik temizleme istasyonu tablosuna göre emiş zayıfsa **toz torbası tamamen dolmuş** olabilir; torbayı temizle ya da değiştir.

Markadan bağımsız kontrol listeleri için [süpürge çekmiyor](/blog/supurge-cekmiyor/) ve [şarjlı dikey süpürge şarj tutmuyor](/blog/sarjli-supurge-sarj-tutmuyor/) yazılarına bakabilirsin.

## Ne zaman servis

- Purevac Ultra ekranında **toz sensörü arızası** uyarısı çıkıyorsa kılavuz **satış sonrası hizmete** danışmanı istiyor.
- Hazne, filtre, boru, kanal ve fırça temizlendiği hâlde emiş dönmüyorsa: Fakir'in notu, sorunu çözemezsen **müşteri hizmetlerini** aramak; ararken **model adını ve seri numarasını** (tip etiketinde) hazır tut.
- Inovator 6158 kılavuzuna göre özel takım gerektiren arızalar **üreticinin görevlendirdiği bir profesyonel** tarafından giderilmeli.

⛔ **Kendin-çöz sınırı burada biter.** Hazne, filtre, boru ve fırça temizliği kullanıcıya; motor, sensör ve batarya servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (tip etiketinde)?
2. Hazne ve filtre en son ne zaman temizlendi, EPA filtre ne zaman değişti?
3. Emiş tüm aparatlarda mı zayıf, yoksa yalnız zemin başlığında mı?
4. Batarya LED'leri kırmızı yanıp sönüyor mu?
5. Süpürge çalışırken kendiliğinden kapanıyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
