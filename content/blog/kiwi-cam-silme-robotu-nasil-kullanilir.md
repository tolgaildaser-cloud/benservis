---
title: "Kiwi cam silme robotu nasıl kullanılır?"
description: "Kiwi KWC-7131 ve KWC-7140 cam silme robotu, Kiwi kılavuzuna göre: şarj, güvenlik ipi, ped ve su haznesi, cama yerleştirme, modlar ve LED uyarıları."
slug: "kiwi-cam-silme-robotu-nasil-kullanilir"
date: "2026-10-23"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme K1 Kiwi temizlik). origin/main 1c05771'de "kiwi" geçen blog yazısı ve başlık yok; cam silme robotu yazısı da yok.
# OT (#164, bu koşu, hl=tr gl=tr) tohum "kiwi cam silme robotu nasıl": 1. …nasıl kullanılır · 2. …nasıl çalışır · 3. …nasıl. "kiwi cam silme robotu": 5. …kullanımı · 6. …7140 · 9. …su püskürtme nasıl yapılır. GSC: "kiwi" satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, HTTP 200 application/pdf (#88):
#  (A) KWC-7131 Pencere Temizleme Robotu kullanım kılavuzu, 2 s. çok dilli föy  md5 53ea490405d4efb4a3129ad661f1a162
#  (B) KWC-7140 Pencere Temizleme Robotu kullanım kılavuzu, 2 s. çok dilli föy  md5 81d4b71bfee3c6e9cc66421435cfc46f
# BİLEREK YAZILMAYANLAR: kumandanın pil türü ve eşleştirme (belgede yok) · otomatik su püskürtme aralığı (belge "belirli aralıklarla" diyor) · cam temizleyici markası/oranı · emiş fanı ya da tahrik tekerleği teşhisi · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: kiwi-cam-silme-robotu-nasil-kullanilir.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika hazırlık (şarj süresi hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Robotun güç adaptörü ve güvenlik ipi", "Temizlik pedleri ve halkası", "Temiz su", "Kuru bez"]
steps:
  - "Robotu şarj et; şarj sırasında cihazı kapalı tut ve adaptörü bağla."
  - "Güvenlik ipini ve tokasını kontrol et, ipi robota ve iç mekândaki sabit bir mobilyaya bağla."
  - "Temizlik halkasını ve pedleri doğru tak, camdaki büyük toz ve kiri al."
  - "Su haznesini yalnız temiz suyla doldur; hazneye deterjan koyma."
  - "Adaptörü prize ve robota bağla, fan çalışana kadar güç düğmesine basılı tut."
  - "Robotu cama yerleştir, vakum oluşmasını bekle ve robot sağlam tutununca elini çek."
  - "Otomatik modu çalıştır ya da kumandayla yön ver; durdurmak için STOP tuşuna bas."
  - "Robotu tutarak kapat, camdan al, pedleri 30–40 °C'de yıka ve robotu kuru yerde sakla."
faq:
  - q: "Kiwi cam silme robotu şarjla mı çalışıyor, fişe mi takılı olmalı?"
    a: "Fişe takılı olmalı. KWC-7131 ve KWC-7140 kılavuzları robotun normal çalışması için güç adaptörüne bağlı kalmasını istiyor. KWC-7140 kılavuzuna göre dahili pil yalnız acil durumlarda robotun camda tutunması içindir."
  - q: "Su haznesine cam temizleyici koyabilir miyim?"
    a: "Hayır. İki kılavuz da su haznesini temiz suyla doldurmanı ve deterjan kullanmamanı söylüyor. Daha derin temizlik için az miktarda cam temizleyiciyi hazneye değil pedlerin üzerine uygula, pedleri aşırı ıslatma."
  - q: "Robotun ışığı kırmızı yanıyor, ne demek?"
    a: "KWC-7131 kılavuzunda kırmızı sabit ışık hata ya da hava kaçağı, KWC-7140'ta hata anlamına geliyor. Kırmızı ışık yanıp sönüyor ve robot sürekli uyarı sesi veriyorsa kılavuz güç adaptörünün düzgün bağlı olup olmadığını ve güç kablosunun gevşek olup olmadığını kontrol etmeni istiyor."
  - q: "Her camda kullanılır mı?"
    a: "Hayır. Kiwi çatlak, yansıtıcı ve kaplamalı camlarda kullanılmamasını istiyor; KWC-7140 kılavuzu kırık ve buzlu camı da sayıyor. KWC-7140 için cam en az 5 mm kalınlıkta, en az 50 × 70 cm ölçüsünde ve dikey olmalı; robot yatay camda ya da ters çalıştırılmaz."
images:
  coverAlt: "Bir pencere camının iç yüzüne tutunmuş kare biçimli bir cam silme robotu ve ona bağlı güvenlik ipi"
  steps:
    - "Masada şarj adaptörüne bağlı, kapalı duran bir cam silme robotu"
    - "Robota takılı güvenlik ipinin iç mekândaki ağır bir mobilyanın ayağına bağlanmış ucu"
    - "Robotun alt yüzüne takılmış temiz mikrofiber temizlik pedi"
    - "Robotun su doldurma girişine küçük bir şişeyle temiz su dökülmesi"
    - "Prize takılı adaptör ve robota giden güç kablosu"
    - "Pencere camına yeni yerleştirilmiş, camda sabit duran cam silme robotu"
    - "Camın üst bölümünde yatay ilerleyen robot ve arkasında temizlenmiş bir şerit"
    - "Leğende yıkanmayı bekleyen mikrofiber pedler ve yanında kapalı robot"
---

Kiwi'nin pencere temizleme robotu camda vakumla tutunur ve kendi rotasında siler, ama doğru hazırlanmazsa ya tutunamaz ya da düşme riski doğar. Bu yazı Kiwi'nin **KWC-7131** ve **KWC-7140** kullanım kılavuzlarına dayanıyor: şarj, güvenlik ipi, ped ve su haznesi, cama yerleştirme, temizlik modları ve LED uyarıları. İki model büyük ölçüde aynı çalışıyor; ayrıldıkları yerleri ayrıca belirttik.

> ⚡ **Kısa özet:** Robotu şarj et, güvenlik ipini robota ve içerideki sabit bir mobilyaya bağla. Pedleri ve halkayı tak, hazneye yalnız temiz su koy. Adaptörü bağla, fan çalışana kadar güç düğmesine bas, robotu cama yerleştir ve sağlam tutununca elini çek. Bitince robotu tutarak kapat, pedleri yıka.

## İki model arasındaki farklar

| | KWC-7131 | KWC-7140 |
|---|---|---|
| Kullanıma hazır ışığı | Şarj bitince yeşil, çalışmaya hazırken mavi sabit | Mavi sabit |
| Şarj göstergesi | Turuncu şarj oluyor, yeşil şarj tamam | Mavi ve kırmızı sırayla yanıp sönerse pil düşük |
| Otomatik mod | Yukarı sonra aşağı, sola sonra aşağı, sağa sonra aşağı | Varsayılan olarak otomatik başlar; Z + N tuşu |
| Su püskürtme | Kumanda tuşlarında su püskürtme yok | Kumandada otomatik ve tek seferlik su püskürtme |
| Cam şartı | Çatlak, yansıtıcı, kaplamalı cam olmaz | Ayrıca en az 5 mm kalınlık, en az 50 × 70 cm, yalnız dikey cam |

İki modelde de robotun normal çalışması için **güç adaptörüne bağlı** olması gerekiyor. KWC-7140 kılavuzu bunu açıkça yazıyor: dahili pil yalnızca acil durumlarda tutunma amaçlı.

## Adım adım: cama yerleştirmeden temizliğe

**1. Şarj et.** Kullanmadan önce robotun şarjlı olduğundan emin ol. Kiwi şarj sırasında cihazı kapatmanı ve adaptörü bağlamanı istiyor. KWC-7131'de turuncu ışık şarjı, yeşil ışık şarjın bittiğini gösterir. KWC-7140'ta mavi ışık yandığında robot kullanılabilir; mavi ve kırmızı ışıkların sırayla yanıp sönmesi pilin düşük olduğunu söyler.

**2. Güvenlik ipini bağla.** Düşmeyi önlemek için ipi robota tak ve içeride sabit bir mobilyaya bağla. Önce ipi ve tokayı kontrol et; KWC-7140 kılavuzu hasarlı ya da gevşekse cihazı kullanmamanı istiyor. Balkonu olmayan bir pencereyi siliyorsan Kiwi aşağıdakileri uyarmak için pencerenin altına bir uyarı levhası koymanı öneriyor.

**3. Pedleri ve halkayı tak.** Temizlik pedlerini ve temizlik halkasını doğru tak. Kılavuza göre halka doğru takılı değilse hava kaçağı olur ve robot iyi tutunamaz. Sonra camdaki büyük toz ve kirleri al.

**4. Su haznesini doldur.** Hazneye yalnız temiz su koy, **deterjan kullanma**. Robotun üzerine doğrudan su püskürtme.

**5. Robotu aç.** Adaptörü prize, sonra robota bağla. Fan çalışmaya başlayana kadar güç düğmesine basılı tut. Kiwi robotu cama yerleştirmeden önce açmanı istiyor.

**6. Cama yerleştir.** Robotu cam yüzeye koy ve vakum oluşturmasını bekle. **Elini yalnızca robot cama sağlam şekilde tutunduktan sonra bırak.** KWC-7140'ta mavi ışığın yanıp sönmesi yüzeyle temasın zayıf olduğunu gösterir; bu durumda halkayı ve pedleri yeniden kontrol et (çıkarım: kılavuz zayıf temas için ayrı bir adım vermiyor, halka uyarısı hava kaçağıyla ilgili).

**7. Modu seç.** KWC-7131'de otomatik rotalardan birini başlat ya da kumandayla robotu yukarı, aşağı, sola, sağa yönlendir. KWC-7140 varsayılan olarak otomatik modda başlar; hassas konum ya da engelden kaçınma gerektiğinde kumandayı kullan. KWC-7140 kumandasındaki **otomatik su püskürtme** çalışma sırasında belirli aralıklarla su püskürtür, **manuel su püskürtme** tek seferlik püskürtür. Temizliği duraklatmak ya da bitirmek için STOP tuşuna bas.

**8. Bitir ve topla.** Robotu güvenli şekilde tut, STOP tuşuna basıp kapat ve camdan çıkar. Mikrofiber pedleri 30–40 °C'de yıka ve tamamen kuruyana kadar havayla kurut. Cihazı kuru bir yerde sakla; KWC-7140 kılavuzu saklamadan önce su haznesinde kalan suyu boşaltmanı da istiyor.

## Hangi camda, hangi havada?

Kiwi robotu yağmurlu, ıslak ya da yüksek nemli havada kullanmamanı istiyor. Çatlak, yansıtıcı ya da kaplamalı camlarda kullanma; temizlik tekerleği yüzeyi çizebilir. KWC-7140 kılavuzu kırık ve buzlu camı da sayıyor, ayrıca camın en az 5 mm kalınlıkta ve en az 50 × 70 cm ölçüsünde, dikey olmasını şart koşuyor; robot yatay camda ya da ters kullanılmaz. Pencerenin önünde korkuluk ya da mobilya gibi sabit bir engel varsa cam ile engel arasında 8,5 cm'den fazla mesafe olmalı.

Hafif toz için yalnız kuru pedler yeterli. Daha derin temizlik için pedlere az miktarda cam temizleyici uygula; pedleri aşırı ıslatma.

## LED ışıkları ne söylüyor?

| Işık | KWC-7131 | KWC-7140 |
|---|---|---|
| Mavi sabit | Çalışmaya hazır | Çalışmaya hazır |
| Mavi yanıp söner | — | Yüzeyle temas zayıf |
| Kırmızı sabit | Hata ya da hava kaçağı | Hata |
| Kırmızı yanıp söner, sürekli uyarı sesi | Adaptörü ve güç kablosunu kontrol et | Adaptörün bağlantısını ve kablonun gevşekliğini kontrol et |

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Robot tutunmuyor, halka ya da ped yanlış takılı | Senin; halkayı ve pedleri yeniden tak |
| Kırmızı yanıp sönme ve uyarı sesi | Senin; adaptörü ve kabloyu kontrol et |
| Güvenlik ipi ya da tokası hasarlı ya da gevşek | Robotu kullanma (KWC-7140 kılavuzu) |
| Adaptör ve kablo sağlamken kırmızı hata ışığı sürüyor | Kiwi müşteri hizmetleri ya da yetkili servis |

⛔ Robotun gövdesini açmaya, fan ya da tekerlek ünitesine müdahale etmeye çalışma. Dış yüzeyi yumuşak, hafif nemli bir bezle sil; cihazı suya daldırma ve açıklıklardan sıvı girmesine izin verme.

Aynı kümede Kiwi'nin [buharlı temizleyicisi](/blog/kiwi-buharli-temizleyici-nasil-kullanilir/) de camda kullanılabilecek bir aparatla geliyor.

---

**Kaynak künyesi.** Şarj, güvenlik, mod, su ve LED bilgileri Kiwi'nin KWC-7131 ve KWC-7140 Türkçe kullanım kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
