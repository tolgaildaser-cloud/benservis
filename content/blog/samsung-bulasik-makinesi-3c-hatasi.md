---
title: "Samsung bulaşık makinesi 3C hatası: yıkama pompası"
description: "Samsung bulaşık makinesinde 3C, kılavuza göre yıkama pompası kontrolü. Kapat-aç, filtre ve püskürtücü bakımı ve servisi çağırma sınırı adım adım."
slug: "samsung-bulasik-makinesi-3c-hatasi"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork A). Konu seçimi: origin/main'de samsung-bulasik-makinesi-3c-hatasi yok
#   (Samsung bulaşıkta 4C, 5C, LC, HC, BC2 tek kod sayfaları ve hata-kodlari merkezi var; 3C için ayrı sayfa yok).
# GSC (https___www-5 son 3 ay, https___www-6 son 7 gün): bu sorguya gösterim YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "samsung bulaşık makinesi 3c":
#   1. "…3c hatası" · 2. "…3e hatası" · 3. "…3 program".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile org.downloadcenter.samsung.com'dan indirildi: HTTP 200 application/pdf, md5 yerel kopyalarla aynı.
#   #88: üçüncü taraf kullanılmadı. pdftotext -layout, sayfa = PDF sayfası.
#  (A) DW8500AM / DW60A8050FS kılavuzu (EN+TR, 172 s.)  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60A8050FS&CttFileID=9233776&CDCttType=UM&VPath=UM%2F202306%2F20230628135053892%2FDW8500AM_DW60A8050FS_TR_DD81-03206J-04_EN_TR.pdf  md5 0bac38bffb63954fc975765ab1c13167
#  (H) DW9000H kılavuzu (EN+TR+AR, 132 s.)  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=DW60H5050FW%2FTR&CttFileID=7034806&CDCttType=UM&VPath=UM%2F201805%2F20180510194713724%2FDW9000H_DD68-00158F-09_EN_TR_AR_R.pdf  md5 370daab2b2de63dacb7920a1e1e60c79
# 3C satırı A s.156 ("Yıkama pompası kontrolü"), H s.80 ("Pompa işlemi kontrolü · Fonksiyonel kontrol. Bulaşık makinesini kapatın ve yeniden başlatın.")
#   · filtre aylık bakım A s.151-152 · püskürtücüler A s.150 · püskürtücü bulaşığa çarpıyor / dönmüyor A s.155 · garanti/yetkili servis A s.153 · uzun süreli bakım A s.152.
# BİLEREK YAZILMAYANLAR: filtrenin ya da püskürtücünün 3C'ye yol açtığı iddiası (belgede yok; bakım olarak verildi) · pompa sökümü, pompa testi (servis)
#   · reset kombinasyonu · fiyat/süre (#46).
# Alıntı denetim tablosu: samsung-bulasik-makinesi-3c-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesinin kullanma kılavuzu", "Yumuşak bir fırça"]
steps:
  - "Ekrandaki kodun 3C olduğunu doğrula; kılavuzda bu satır yıkama pompası kontrolüdür."
  - "Bulaşık makinesini kapat ve yeniden başlat; kılavuzun 3C için verdiği işlevsel kontrol budur."
  - "Makine dururken alt sepeti çıkar, kaba filtreyi ve mikro filtreyi çıkarıp akan su altında temizle ve yerine kilitle."
  - "Üst ve alt püskürtücülerin tıkalı olmadığını ve serbestçe döndüğünü kontrol et, bulaşıkları püskürtücüye çarpmayacak şekilde yerleştir."
  - "Yeniden başlatmadan sonra 3C geri geliyorsa pompaya dokunmadan modeli ve kodu not alıp Samsung yetkili servisine haber ver."
faq:
  - q: "Samsung bulaşık makinesinde 3C ne demek?"
    a: "Samsung DW8500AM kılavuzunda 3C, yıkama pompası kontrolü olarak geçiyor: yıkama pompası anormal çalışıyor. DW9000H kılavuzunda aynı kod pompa işlemi kontrolü adıyla yer alıyor. Her iki kılavuzda da sorun devam ederse Samsung servis merkezi ile iletişime geçilmesi isteniyor."
  - q: "3C hatasında ilk ne yapmalıyım?"
    a: "DW9000H kılavuzu 3C için işlevsel bir kontrol tarif ediyor: bulaşık makinesini kapatın ve yeniden başlatın. Kod geri gelmezse makineyi izlemeye devam et; geri gelirse servis."
  - q: "Filtreyi temizlemek 3C'yi giderir mi?"
    a: "Kılavuzun 3C satırında filtre geçmiyor; bu yüzden böyle bir söz veremeyiz. Filtre temizliği Samsung'un her ay önerdiği bir bakım. Servis gelmeden önce makinenin bakımlı olduğundan emin olmak için yapılır."
  - q: "3C ile 3E aynı şey mi?"
    a: "Bu yazıdaki kılavuzlarda yalnız 3C var. Ekranda gördüğün kodu harfi harfine not al ve servise öyle bildir; kod adını tahminle değiştirme."
  - q: "Pompayı kendim kontrol edebilir miyim?"
    a: "Hayır. Pompa makinenin içinde; sökümü ve kontrolü yetkili servis işi. Samsung kılavuzu, yetkili servis dışı müdahaleyle oluşan arızaların garanti kapsamından çıkacağını da yazıyor."
images:
  coverAlt: "Kapağı açık bir bulaşık makinesinin boş sepetleri ve iç gövdesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Bulaşık makinesi program sırasında durdu ve ekranda **3C** yazıyor. Samsung'un DW8500AM kılavuzunda bu kodun adı **yıkama pompası kontrolü**, açıklaması tek cümle: yıkama pompası anormal çalışıyor. DW9000H kılavuzunda aynı kod **pompa işlemi kontrolü** adıyla geçiyor ve kullanıcıya bir işlevsel kontrol tarif ediyor. Bu yazıda o kontrolü, kılavuzun önerdiği bakımı ve servisi çağırma sınırını sırayla topladık. Senin modelinde kod tablosu farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 3C, yıkama pompasının anormal çalıştığını söylüyor. Önce makineyi kapatıp yeniden başlat; kılavuzun işlevsel kontrolü bu. Beklerken filtreyi ve püskürtücüleri bakım için kontrol et. Kod geri geliyorsa pompaya dokunma, Samsung yetkili servisine haber ver.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **3C** | Yıkama pompası kontrolü: pompa anormal çalışıyor | 🛠️ Kapat, yeniden başlat; sürerse servis |
| **5C** | Filtre ve drenaj borusu kontrolü | 🛠️ Filtre ve hortum; ayrı yazıda |
| **4C** | Su besleme kontrolü | 🛠️ Vana ve hortum; ayrı yazıda |
| **HC** | Yüksek sıcaklık ısıtma kontrolü | 🛠️ Boş program; sürerse servis |
| **LC** | Sızıntı kontrolü | ⛔ Vanayı ve sigortayı kapat, servis |

## Adım adım: evde denenecekler

**1. Kodu doğrula.** Ekrandaki kod **3C** ise bu yazı senin için. Su almayla ilgili kod 4C, tahliyeyle ilgili kod 5C; ikisi de evde daha çok şey yapabileceğin kodlar: [Samsung bulaşık makinesi 4C hatası](/blog/samsung-bulasik-makinesi-4c-hatasi/) ve [5C hatası](/blog/samsung-bulasik-makinesi-5c-hatasi/). 3C ise doğrudan yıkama pompasını işaret ediyor. Kodu harfi harfine not al; servise aynen bildireceksin.

**2. Kapat ve yeniden başlat.** DW9000H kılavuzunun 3C satırı şöyle: **fonksiyonel kontrol, bulaşık makinesini kapatın ve yeniden başlatın.** Sorun devam ederse yetkili bir Samsung servis merkezi ile iletişime geçin. Bu, evde yapılacak asıl iş. Makineyi kapat, kısa bir süre bekle, yeniden aç ve bir program başlat. Kod çıkmıyorsa makine bu yıkamayı bitirebilir; birkaç yıkama boyunca ekranı takip et.

**3. Filtreyi temizle (bakım).** Bu adım 3C satırında yazmıyor; kodu silme yöntemi olarak değil, makinenin bakımlı olduğundan emin olmak için yapılır. Samsung filtrenin **her ay** temizlenmesini öneriyor. DW8500AM kılavuzundaki sıra: kapağı aç, alt sepeti çıkar; filtre kolunu saat yönünün tersine çevirerek kaba filtrenin kilidini aç; kaba filtreyi ve altındaki silindirik mikro filtreyi çıkar; toz ve kiri temizle, akan su altında durula ve iyice kurula; filtreleri yerine takıp kolu saat yönünde çevirerek kilitle. Kılavuzun uyarısı: kaba filtre düzgün kapatılmazsa filtreleme performansı düşer. Ayrıntılı tarif [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

**4. Püskürtücülere ve yerleşime bak (bakım).** Kılavuz püskürtücülerin tıkanmasını önlemek için onları temizlemeyi öneriyor. Alt püskürtücü, alt sepet çıkarılınca en altta görünür; tıkanıklığı gider, yerine tak ve düzgün oturduğunu görmek için çevir. Üst püskürtücü üst sepetin altındadır ve bir somunla tutturulmuştur; kılavuz kırılabilecekleri için dikkatli olunmasını istiyor. Sorun giderme tablosuna göre püskürtücü bulaşıklara çarpıyorsa bulaşıkları yeniden düzenlemek gerekir. Bunlar da 3C'nin açıklaması değil; makinenin kılavuza uygun kullanıldığını gösteren kontroller.

**5. Kod geri geliyorsa servis.** Yeniden başlatmadan sonra 3C tekrar çıkıyorsa evdeki iş bitti. Yıkama pompası makinenin içinde; sökümü, testi ve değişimi yetkili servis işi. Samsung kılavuzu, ürüne yetkili servis dışında bir kişinin müdahalesiyle oluşan arızaların garanti kapsamından çıkacağını da yazıyor.

## Kod tekrar ederse ne değişir

İki kılavuzda da 3C satırının son cümlesi aynı: sorun devam ederse Samsung servis merkezi ile iletişime geç. Kılavuz 3C için sana filtre, hortum ya da vana kontrolü vermiyor; bu yüzden kodu "evde kesin çözülür" gibi okuma. Evdeki rolün, makineyi yeniden başlatarak kodun kalıcı olup olmadığını görmek ve servise doğru bilgiyle gitmek. DW8500AM kılavuzu tablonun altına bir not daha düşüyor: ürünün kullanım ömrü olan on sene boyunca bakım ve onarım işlemleri yetkili servislerce, yedek parça tedariki ile yürütülüyor. DW9000H kılavuzu da tabloda listelenmeyen bütün kodlar için Samsung Müşteri Hizmetleri'nin aranmasını istiyor. Servisi beklerken makineyi uzun süre kullanmayacaksan kılavuzun uzun süreli bakım kuralını uygula: önce üniteyi tamamen boşalt, su hortumu bağlantısını kes, su besleme vanasını ve devre kesiciyi kapat. Kılavuza göre hortumlarda ya da iç bileşenlerde kalan su makineye hasar verebilir.

## Ne zaman servis

- Kapat-aç sonrası 3C aynı programda ya da sonraki yıkamada yeniden çıkıyorsa
- Ekranda 3C ile birlikte başka bir kod da görünüyorsa
- Ekranda LC görürsen ya da sızıntı fark edersen: kılavuzun sızıntı satırına göre su besleme vanasını ve makinenin devre kesicisini kapat, sonra servis

⛔ **Kendin-çöz sınırı burada biter.** Kontrol paneli, filtreler, püskürtücüler ve bulaşık yerleşimi sende; pompa, kablolar ve makinenin iç aksamı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne?
2. 3C hangi aşamada çıktı?
3. Kapatıp açınca kod geri geldi mi?
4. Filtreler en son ne zaman temizlendi?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bütün kodlar [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/) sayfasında. Bil, gör, çağır.
