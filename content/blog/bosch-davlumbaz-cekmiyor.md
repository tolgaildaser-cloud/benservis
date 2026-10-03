---
title: "Bosch davlumbaz çekmiyor"
description: "Bosch davlumbaz zayıf mı çekiyor? Kılavuzun arıza tablosu üç neden yazıyor: alüminyum filtre, hava çıkış bacası ve karbon filtre. Adımlar ve servis sınırı."
slug: "bosch-davlumbaz-cekmiyor"
date: "2026-10-03"
category: "Davlumbaz"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, davlumbaz/termosifon koşusu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile Bosch'un KENDİ alan adından
#   indirildi, HTTP 200, yönlendirme 0. Web araması yalnız belgenin yerini bulmak için kullanıldı. Sayfa = PDF sayfası (pdftotext -f N -l N).
#  B1) Bosch DWK065G20T / DWK095G20T / DWK065G60T / DWK095G60T duvar tipi davlumbaz kullanma kılavuzu
#      https://media3.bosch-home.com/Documents/9001132467_A.pdf  38 s.  md5 2e3561ced6c3e1577e484713adb1df63
#      (yerel: blog-taslaklar/kaynak-davlumbaz-termosifon-3eki/bosch-9001132467_A.pdf; belgede www.bosch-home.com/tr bağlantısı var)
# Ana satırlar: s.23 "12.2 Oluşabilecek Hatalar ve Çözümler" → "Ürün Hava Çekişi Zayıf." / "Alüminyum filtre" / "Alüminyum kaset filtre normal şartlarda
#   ayda 1 kez yıkanmalıdır. Alüminyum filtrelerin temizliğini kontrol ediniz." · "Hava çıkış bacası" / "Hava çıkış bacasını kontrol ediniz. Hava çıkış
#   bacası açık olmalıdır." · "Karbon filtre" / "Karbon filtre kullanılan ürünlerde karbon filtre normal şartlarda 3 ayda bir değiştirilmelidir. Karbon
#   filtreleri kontrol ediniz." · "Dışarı Hava Vermiyor (Bacasız Kullanım)" → alüminyum filtre + karbon filtre satırları.
# Bakım: s.11 "Her bakım ve temizlik öncesinde davlumbazın fişi çekilerek, cihaz akımsız hale getirilmelidir" · "normal bir kullanım halinde (günde 1–2 saat)
#   yaklaşık her üç ayda bir temizleyiniz." · "Alüminyum filtrenin tırnağına ok yönünde bastırarak kendize doğru çekiniz." · "alüminyum yağ filtresini
#   bükmeyiniz." · "Alüminyum yağ filtrelerini, bulaşık deterjanlı sıcak su içinde yumuşatınız." · "Temizleme işi için bir fırça kullanınız" · "iyice durulayınız."
#   · "bulaşık makinesine gevşek veya serbest şekilde yerleştiriniz." · "Çok kirlenmiş alüminyum yağ filtrelerini, bulaşıklar ile birlikte yıkamayınız." ·
#   "metal yağ filtrelerinin tutucu düzenlerini de nemli bir bez ile temizleyiniz." · "hafif renk değişimi ... fonksiyonu açısından bir etkisi yoktur."
#   s.10 "her 3-5 ayda bir yenisi ile değiştirilmelidir." · "Karbon filtre hiçbir zaman yıkanmamalıdır." · "her durumda yağ filtreleri üründe takılı olmalıdır."
#   · "Karbon filtreyi saat yönünde çevirerek tamamen takıldığından emin olunuz." · "Aktif karbon filtre servisten veya satıcınızdan temin edilmelidir."
#   s.12 "kirli filtre hava geçişini engelleyeceği için cihazınızı daha yüksek kademede kullanmak zorunda kalabilirsiniz." · "en az 470 mm" / "en az 570 mm"
#   s.13 "Uzun ve pürüzlü hava çıkış boruları ile çok sayıda boru dirsekleri veya 150’mm den küçük boru çapları kullanıldığında optimum havalandırma
#   performansına ulaşılamaz ve fanın ses seviyesi artar." · s.19 tuş 1/2/3 = hız kademesi, 4 = lamba; timer 3 sn → 15 dk sonra kapanır.
#   s.21 "TR 444 6 333"
# Belge iç çelişkisi (bilerek ikisi de yazıldı, sayfasıyla): alüminyum filtre s.11 "yaklaşık her üç ayda bir" ↔ s.23 "ayda 1 kez"; karbon filtre s.10 "her 3-5 ayda
#   bir" ↔ s.23 "3 ayda bir".
# BİLEREK YAZILMAYANLAR: motor/fan/kart teşhisi (belgede yok) · LED lamba değişimi (s.20 belgede var; parça değişimi → #31) · baca borusuna müdahale, boru
#   değiştirme (montaj işi) · başka Bosch modellerine genelleme · fiyat/süre (#46).
# Alıntı denetim tablosu: bosch-davlumbaz-cekmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika (+ kuruma)"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Bulaşık deterjanı", "Fırça", "Nemli bez"]
steps:
  - "Davlumbazın fişini çek; cihaz akımsız kalsın."
  - "Alüminyum filtrenin tırnağına ok yönünde bastır ve filtreyi kendine doğru çekerek çıkar."
  - "Filtreyi bulaşık deterjanlı sıcak suda yumuşat, fırçayla temizle ve iyice durula ya da bulaşık makinesine gevşek yerleştirerek yıka."
  - "Filtre tutucularını nemli bezle sil, filtreyi bükmeden yerine tak."
  - "Bacasız kullanımdaysan karbon filtrenin süresine bak; dolduysa yenisini saat yönünde çevirerek tam oturt."
  - "Hava çıkış bacasının açık olduğunu dışarıdan kontrol et."
  - "Davlumbazı 3 numaralı tuşla en yüksek kademede çalıştırıp çekişi yeniden dene."
faq:
  - q: "Bosch davlumbazım neden zayıf çekiyor?"
    a: "DWK serisi kılavuzunun arıza tablosu 'Ürün Hava Çekişi Zayıf' satırına üç olası sebep yazıyor: alüminyum filtre, hava çıkış bacası ve karbon filtre. Çözümleri de sırasıyla filtre temizliğini kontrol etmek, bacanın açık olduğundan emin olmak ve karbon filtre kullanılan üründe karbon filtreyi kontrol etmek."
  - q: "Alüminyum filtreyi ne sıklıkla yıkamalıyım?"
    a: "Kılavuz iki farklı aralık veriyor. Bakım bölümünde günde 1–2 saatlik normal kullanımda yaklaşık her üç ayda bir temizlik öneriliyor; arıza tablosunda ise normal şartlarda ayda 1 kez yıkanması yazıyor. Çekiş zayıfladıysa tablodaki kısa aralığı esas almak mantıklı."
  - q: "Karbon filtre yıkanır mı?"
    a: "Hayır. Bosch kılavuzu karbon filtrenin hiçbir zaman yıkanmaması gerektiğini yazıyor. Bacasız kullanımda kullanıma bağlı olarak her 3-5 ayda bir yenisiyle değiştirilir; arıza tablosu normal şartlar için 3 ay diyor. Karbon filtre servisten ya da satıcıdan temin edilir."
  - q: "Filtreler temiz ama hâlâ çekmiyor, ne yapmalıyım?"
    a: "Kılavuz, uzun ve pürüzlü hava çıkış borusu, çok sayıda dirsek ya da 150 mm'den küçük boru çapı kullanıldığında optimum havalandırma performansına ulaşılamayacağını yazıyor. Bu bir montaj konusu; boruya kendin müdahale etme, kurulumu yapan tarafa ya da Bosch müşteri hizmetlerine başvur."
images:
  coverAlt: "Paslanmaz duvar tipi bir davlumbazın altından çıkarılmış alüminyum kaset filtre, mutfak tezgâhında köpüklü suyla dolu bir leğenin yanında"
---

Ocakta yemek pişiyor, davlumbaz açık ama buhar dolaplara doğru yayılıyor. Bosch'un DWK065G20T / DWK095G20T / DWK065G60T / DWK095G60T duvar tipi davlumbaz kılavuzu bu durumu arıza tablosunda **"Ürün Hava Çekişi Zayıf."** diye adlandırıyor ve karşısına üç satır yazıyor: **alüminyum filtre**, **hava çıkış bacası** ve **karbon filtre**. Üçünün de ilk kontrolü kullanıcının elinde.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → alüminyum filtreyi tırnağından çıkar → deterjanlı sıcak suda yumuşatıp fırçala ya da bulaşık makinesinde yıka → tutucuları sil, filtreyi bükmeden tak → bacasızsan karbon filtrenin süresine bak → bacanın açık olduğunu kontrol et → en yüksek kademede dene. Sorun sürüyorsa Bosch müşteri hizmetleri.

## Kılavuzun tablosu ne diyor?

| Belirti | Olası sebep | Kılavuzun çözümü |
|---|---|---|
| Hava çekişi zayıf | Alüminyum filtre | Normal şartlarda **ayda 1 kez** yıkanmalı; temizliğini kontrol et |
| Hava çekişi zayıf | Hava çıkış bacası | Baca **açık olmalı**; kontrol et |
| Hava çekişi zayıf | Karbon filtre | Karbon filtreli üründe normal şartlarda **3 ayda bir** değiştirilmeli |
| Dışarı hava vermiyor (bacasız kullanım) | Alüminyum filtre / karbon filtre | Aynı iki kontrol |

Kılavuz ayrıca filtrenin çekişe etkisini enerji tasarrufu bölümünde açıkça yazıyor: **kirli filtre hava geçişini engellediği için** cihazı daha yüksek kademede kullanmak zorunda kalabilirsin. Yani filtre kirlendikçe aynı çekiş için daha yüksek kademeye ihtiyaç duyulur.

## Adım adım: evde denenecekler

**1. Fişi çek.** Bosch'un bakım bölümündeki ilk uyarı bu: her bakım ve temizlik öncesinde davlumbazın **fişi çekilerek cihaz akımsız hale getirilmeli.**

**2. Alüminyum filtreyi çıkar.** Kılavuzun tarifi: alüminyum filtrenin **tırnağına ok yönünde bastır** ve filtreyi **kendine doğru çek.** Takarken aynı işlemin tersi uygulanıyor.

**3. Filtreyi yıka.** İki yol var, ikisi de kılavuzda:
- **Elde:** filtreyi **bulaşık deterjanlı sıcak suda yumuşat**, bir **fırçayla** temizle ve **iyice durula.** Kılavuz sıvının iyice akmasını beklemeni de istiyor.
- **Bulaşık makinesinde:** filtreyi makineye **gevşek, sıkıştırmadan** yerleştir. **Çok kirlenmiş** filtreyi bulaşıklarla birlikte yıkama.

Makinede yıkamadan sonra filtrede **hafif renk değişimi** olabilir; kılavuza göre bunun filtrenin işlevine bir etkisi yok. Aşındırıcı, asitli ya da ovucu temizlik maddesi kullanma.

**4. Tutucuları sil, filtreyi bükmeden tak.** Kılavuz filtreyi temizlerken cihazın içindeki **filtre tutucularını da nemli bir bezle** silmeni istiyor. Takarken bir uyarı daha var: hasar oluşmasını engellemek için alüminyum filtreyi **bükme.**

**5. Bacasızsan karbon filtreye bak.** Karbon filtre, havanın dışarı atılmayıp süzülerek mutfağa geri verildiği **dolaşımlı hava modunda** kullanılıyor. Bosch'un kuralı net: karbon filtre **hiçbir zaman yıkanmaz**, kullanıma bağlı olarak **her 3-5 ayda bir yenisiyle değiştirilir** (arıza tablosu normal şartlar için 3 ay yazıyor). Yeni filtreyi yuvasına yerleştirip **saat yönünde çevirerek** tamamen takıldığından emin ol; kılavuza göre tam takılmayan filtre düşebilir. Karbon filtre servisten ya da satıcıdan temin ediliyor. Karbon filtre kullanılsa da kullanılmasa da **yağ filtreleri her durumda takılı olmalı.**

**6. Hava çıkış bacasının açık olduğunu kontrol et.** Tablonun ikinci satırı bu: **hava çıkış bacası açık olmalı.** Bacaya dışarıdan, görebildiğin kadarıyla bak; ezilmiş ya da kapanmış bir bölüm görürsen boruya müdahale etme, kurulumu yapan tarafa bildir.

**7. En yüksek kademede dene.** DWK kumandasında **1, 2 ve 3 numaralı tuşlar** hız kademeleri, **4 numaralı tuş** lamba. Filtreleri taktıktan sonra cihazı **3. kademede** çalıştırıp çekişi karşılaştır. İstersen 1, 2 ya da 3 numaralı tuşlardan birini **3 saniye basılı tutarak** 15 dakikalık zamanlayıcıyı açabilirsin; ürün 15 dakika sonunda kendiliğinden kapanır.

## Filtre temizse: boru ve kurulum

Kılavuzun hava çıkış hattı bölümü, kurulumun çekişi nasıl etkilediğini yazıyor: cihaz **mümkün olan en geniş çaplı, kısa ve düz** bir hava çıkış borusuyla en yüksek performansı veriyor. **Uzun ve pürüzlü borular, çok sayıda dirsek ya da 150 mm'den küçük boru çapı** kullanıldığında optimum havalandırma performansına ulaşılamıyor ve **fanın ses seviyesi artıyor.** Önerilen iç çap **150 mm, en az 120 mm.**

Kurulum sonrası mesafe de kılavuzda: davlumbaz ile **elektrikli ocak arasında en az 470 mm**, gazlı ocak arasında **en az 570 mm** olmalı. Bunlar ayar değil montaj ölçüsü; değiştirmek gerekiyorsa iş kurulumu yapan tarafındır.

Markadan bağımsız kontrol listesi için [davlumbaz çekmiyor](/blog/davlumbaz-cekmiyor/) yazısına, filtre temizliğini fotoğraflı adımlarla görmek için [davlumbaz yağ filtresi nasıl temizlenir](/blog/davlumbaz-yag-filtresi-nasil-temizlenir/) yazısına bakabilirsin. Çekiş düşerken ses de arttıysa: [davlumbaz gürültülü çalışıyor](/blog/davlumbaz-gurultulu-calisiyor/).

## Ne zaman servis

- Filtreler temiz, karbon filtre yeni, baca açık olduğu hâlde **çekiş hâlâ zayıfsa.**
- Davlumbaz **hiç çalışmıyorsa:** kılavuzun tablosu bu satıra şebeke voltajının 220-240 V olmasını ve ürünün **topraklı prize** bağlanmasını yazıyor; priz ve tesisat kontrolü gerekiyorsa bu iş bir elektrik uzmanınındır.
- **Aydınlatma lambası yanmıyorsa** ve lamba anahtarı açık konumdaysa: kılavuz arızalı ampul durumunda **servisle bağlantıya geçmeni** istiyor.

Bosch'un arıza ve danışma hattı kılavuzda **444 6 333** olarak yazıyor. Ararken cihazın **E-No.** ve **FD-No.** numaralarını hazırla; tip etiketi cihazın iç kısmında, **metal yağ filtresi çıkarılınca** görünüyor.

⛔ **Kendin-çöz sınırı burada biter.** Filtre, karbon filtre ve kademe kullanıcıya; motor, elektrik bağlantısı, lamba ve baca hattı servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
