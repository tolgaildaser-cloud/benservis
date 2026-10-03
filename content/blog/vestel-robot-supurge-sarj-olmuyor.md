---
title: "Vestel robot süpürge şarj olmuyor"
description: "Vestel V-Bot şarj olmuyor ya da istasyona dönmüyorsa: kablo ve fiş, şarj kontakları, istasyonun yeri ve mesafeleri. Vestel kılavuzuna göre sıra."
slug: "vestel-robot-supurge-sarj-olmuyor"
date: "2026-10-03"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, süpürge). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in KENDİ alan adından (statik.vestel.com.tr) indirildi,
#   HTTP 200, yönlendirme 0. Web araması yalnız dosya adresini bulmak için. Yerel: blog-taslaklar/kaynak-supurge-3eki/ · okuma pdftotext -layout, sayfa = PDF sayfası
#   (basılı sayfa no + 3).
#  V1) Vestel V-Bot Pro robot süpürge kullanım kılavuzu  https://statik.vestel.com.tr/webfiles/20264632_k.pdf  32 s.  md5 47fbb5ac536d65b911f05ed77f96c4d9
#  V2) Vestel V-Bot robot süpürge kullanım kılavuzu      https://statik.vestel.com.tr/webfiles/20262133_k.pdf  27 s.  md5 6dffe4453e824478a97c4b61ed68af56
# Tablo V1 s.25: "Robot süpürge şarj olmuyor" → "Şarj istasyonuna güç gitmiyordur. Lütfen güç kablosunun her iki ucunun da doğru şekilde takıldığından emin olun. Kontak zayıftır.
#   Şarj istasyonunun ve robot süpürgenin şarj kontaklarını temizleyin." · "Robot süpürge şarj istasyonuna geri dönmüyor" → "Şarj istasyonunun etrafında çok fazla engel vardır.
#   Şarj istasyonunu daha açık bir alana yerleştirin. Şarj istasyonunun sinyal alanını temizleyin." · "Robot süpürge açılmıyor" → "Batarya seviyesi düşüktür..." / "çalışma sıcaklığı 0°C ile 40°C arasıdır."
#   V1 s.26 "Robot süpürge yerinden hareket ettirildikten sonra şarj istasyonuna dönmüyor" → "... istasyondan çok uzaksa istasyona kendi başına dönemeyebilir. Bu durumda, robot süpürgeyi
#   şarj istasyonuna manuel olarak koymanız gerekir." · "Rahatsız Etme modunda olmadığından emin olun"
# Tablo V2 s.21: "Şarj sırasında şarj gösterge ışıkları yanmıyor." → "Şarj cihazının fişinin prize tamamen takılı olduğundan emin olun." "Şarj fişinin istasyona iyice yerleştirilmiş olduğundan
#   emin olun." "İstasyondaki şarj kontakları ile robottaki şarj kontaklarının doğru hizada olduğundan ve üzerinin herhangi bir şeyle kaplı olmadığından emin olun. Gerekirse, ... kuru bir bezle temizleyin."
# Kurulum V1 s.17: "İstasyonun arkasını bir duvara sıfır şekilde yerleştirin ... her iki tarafındaki duvar boyunca en az 10 cm mesafe" · "önündeki 1,5 metrelik ve ... yanlarındaki 0,5 metrelik
#   alanlarda herhangi bir nesne olmadığından" · "Şarj aletini istasyonun sağ alt tarafındaki porta, ... diğer ucunu ise duvar prizine takın."
# V1 s.18: "metal şarj kontaklarının istasyondaki kontaklara temas ettiğinden emin olun. Robot doğru hizalandığında bir bip sesi duyulacak ve robottaki güç düğmesi yanacaktır." · "gevşek kabloları
#   düzenleyin" · "beyaz ışık robot şarj olurken yanıp sönecek ... tamamen şarj olduğunda beyaz yanacaktır" · "Şarj istasyonunu doğrudan güneş ışığı alan veya başka nesnelerin sinyali
#   engelleyebileceği yerlere koymayın." · "İlk kullanımdan önce robotu en az 4 saat süreyle tamamen şarj edin." · "3 aydan uzun ... 12 saat" · "%15 altına düşerse ... şarj istasyonuna geri dönecektir"
# V1 s.10: "şarj istasyonu farklı yere taşındığında robot süpürge şarj istasyonunu bulmaz. İlk önce şarj istasyonun yeri değiştirildikten sonra Süpürme / Mop işlemi başlatılmalıdır."
# V1 s.24: "Şarj Kontaklarının Temizlenmesi ... kuru bez kullanın." · "Islak bezler, robot süpürgenin ve şarj istasyonunun içinde bulunan hassas elemanlara zarar verebilir." (s.23) · "en geç 3 ayda bir şarj edin."
# BİLEREK YAZILMAYANLAR: batarya değişimi/sökümü · devre kesici kontrolü (V2 tablosunda "Motor çalışmıyor" satırında geçiyor; elektrik panosu kapsam dışı → yazılmadı) · model genellemesi · fiyat (#46).
# Alıntı denetim tablosu: vestel-robot-supurge-sarj-olmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru bez", "Robot süpürgenin kullanım kılavuzu"]
steps:
  - "Şarj aletinin bir ucunun istasyondaki porta, diğer ucunun duvar prizine tam takılı olduğunu kontrol et."
  - "Robotu, altındaki metal kontaklar istasyondaki kontaklara değecek şekilde yerleştir; bip sesini ve güç düğmesinin yandığını izle."
  - "İstasyonun ve robotun şarj kontaklarını kuru bezle temizle; ıslak bez kullanma."
  - "İstasyonun arkasını duvara sıfır daya; yanlarda 0,5 metre, önde 1,5 metre alanı boşalt."
  - "İstasyonu doğrudan güneş alan ya da sinyalini engelleyen eşyaların yanına koyma."
  - "İstasyonun kaymasına ya da fişin çıkmasına yol açabilecek gevşek kabloları düzenle."
  - "Robot istasyondan çok uzaktaysa ya da yerinden oynatıldıysa onu elle istasyona koy."
faq:
  - q: "Vestel robot süpürgem şarj olmuyor, ilk neye bakmalıyım?"
    a: "V-Bot Pro kılavuzunun tablosu iki neden gösteriyor: şarj istasyonuna güç gitmemesi ve zayıf kontak. Çözüm güç kablosunun her iki ucunun da doğru takıldığından emin olmak ve istasyon ile robotun şarj kontaklarını temizlemek. V-Bot kılavuzu aynı belirtiyi 'şarj gösterge ışıkları yanmıyor' diye yazıyor ve fişin prize, şarj fişinin istasyona tam takılı olmasını, kontakların doğru hizada ve üzerinin açık olmasını istiyor."
  - q: "Robot temizlikten sonra istasyona dönmüyor, neden?"
    a: "Vestel'in tablosuna göre istasyonun etrafında çok fazla engel olabilir; çözüm istasyonu daha açık bir alana yerleştirmek ve sinyal alanını temizlemek. Kurulum bölümü istasyonu doğrudan güneş ışığı alan ya da sinyali engelleyen yerlere koymamanı istiyor. Robot elle yerinden oynatıldıysa kendini yeniden konumlandırması gerekebilir; istasyondan çok uzaksa kendi başına dönemeyebilir ve elle konması gerekir."
  - q: "İstasyonun yerini değiştirdim, robot bulamıyor."
    a: "V-Bot Pro kılavuzuna göre temizlik başladıktan sonra şarj istasyonu başka bir yere taşınırsa robot istasyonu bulmaz. Kılavuzun kuralı: önce istasyonun yerini değiştir, süpürme ya da mop işlemini ondan sonra başlat."
  - q: "Şarj olduğunu nasıl anlarım?"
    a: "V-Bot Pro kılavuzuna göre robot doğru hizalandığında bir bip sesi duyulur ve güç düğmesi yanar. Şarj sırasında güç düğmesinin üzerindeki ve etrafındaki beyaz ışık yanıp söner, robot tamamen şarj olunca beyaz yanar. Batarya göstergesi beyazsa seviye %15'in üstünde, turuncuysa altındadır."
images:
  coverAlt: "Arkası duvara dayalı şarj istasyonuna yanaşan bir robot süpürge ve istasyonun önünde boş bırakılmış zemin"
---

Robot istasyonda duruyor ama ışığı yanmıyor, ya da temizlik bitince istasyonu bulamayıp odanın ortasında kalıyor. Vestel'in V-Bot Pro kılavuzunun sorun giderme tablosunda bu iki belirti yan yana: **"Robot süpürge şarj olmuyor"** ve **"Robot süpürge şarj istasyonuna geri dönmüyor"**. İkisinin çözümü de kablo, kontak ve istasyonun yeri.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kablonun iki ucu tam takılı mı → robotu kontaklara oturt, bip sesini dinle → kontakları kuru bezle sil → istasyonu duvara daya, önünü ve yanlarını boşalt → güneşten ve sinyali kesen eşyalardan uzak tut → gevşek kabloları topla → uzakta kalan robotu elle istasyona koy.

## Adım adım: evde denenecekler

**1. Kabloyu iki ucundan kontrol et.** V-Bot Pro tablosunun ilk nedeni **"Şarj istasyonuna güç gitmiyordur."**; çözüm **güç kablosunun her iki ucunun da doğru şekilde takıldığından** emin olmak. Kurulum bölümüne göre şarj aletinin bir ucu **istasyonun sağ alt tarafındaki porta**, diğer ucu **duvar prizine** takılır. V-Bot kılavuzu da aynı şeyi iki madde hâlinde yazıyor: fişin **prize tamamen**, şarj fişinin **istasyona iyice** takılı olması.

**2. Robotu kontaklara oturt.** Kılavuza göre robotun altındaki **metal şarj kontakları istasyondaki kontaklara temas etmeli.** Robot doğru hizalandığında **bir bip sesi** duyulur ve **güç düğmesi yanar.** Vestel bir davranışı da önceden anlatıyor: robot kontaklarla daha iyi bağlantı gerektiğinde **geri geri çıkıp yeniden girerek** kendini hizalayabilir.

**3. Kontakları kuru bezle temizle.** Tablonun ikinci nedeni **"Kontak zayıftır."**, çözümü **istasyonun ve robotun şarj kontaklarını temizlemek.** V-Bot kılavuzu kontakların **doğru hizada ve üzerinin herhangi bir şeyle kaplı olmadığından** emin olmanı, gerekirse biriken toz ve tortuyu **kuru bir bezle** temizlemeni istiyor. Islak bez kullanma: Vestel'e göre ıslak bezler robotun ve istasyonun içindeki **hassas elemanlara zarar verebilir.**

**4. İstasyonu duvara daya, alanı boşalt.** Kurulum ölçüleri kılavuzda: istasyonun arkası **duvara sıfır**, iki yanında duvar boyunca **en az 10 cm**; istasyonun **önünde 1,5 metre**, **yanlarında 0,5 metre** alanda hiçbir nesne olmamalı. İstasyona dönmeme satırının çözümü de bu: **istasyonu daha açık bir alana yerleştir, sinyal alanını temizle.**

**5. Güneşten ve sinyal engelinden uzak tut.** V-Bot Pro kılavuzu istasyonu **doğrudan güneş ışığı alan ya da başka nesnelerin sinyali engelleyebileceği** yerlere koymamanı istiyor; aksi hâlde robot **istasyona dönemeyebilir.**

**6. Gevşek kabloları topla.** Kurulumun beşinci maddesi: istasyonun **yanlışlıkla hareket etmesine ya da fişinin prizden çıkmasına** yol açabilecek gevşek kabloları düzenle. Robot şarj olurken güç düğmesindeki **beyaz ışık yanıp söner**, tam şarjda **beyaz yanar.**

**7. Uzakta kalan robotu elle koy.** Tabloya göre robotu yerinden oynatmak, onun kendini **yeniden konumlandırmasına** ya da haritayı yeniden çıkarmasına neden olabilir. Robot istasyondan **çok uzaksa** kendi başına dönemeyebilir; bu durumda **elle istasyona koyman** gerekir. İstasyonun yerini değiştireceksen sıra önemli: Vestel'e göre temizlik başladıktan sonra istasyon taşınırsa robot onu **bulmaz**; önce istasyonu taşı, temizliği sonra başlat.

## Şarj ve batarya notları

- **İlk kullanım:** robotu en az **4 saat** tamamen şarj et (V-Bot Pro). V-Bot kılavuzu da kullanmadan önce bataryayı **dört saat** şarj etmeni söylüyor.
- **Uzun ara:** robot **3 aydan uzun** kullanılmadıysa **12 saat** şarj et; batarya fazla boşalmasın diye robotu **en geç 3 ayda bir** şarj et.
- **Robot açılmıyorsa:** tabloya göre batarya düşük olabilir ya da ortam sıcaklığı çalışma aralığının dışındadır; robotun çalışma sıcaklığı **0°C ile 40°C** arası.
- **Şarjdan sonra temizliğe devam etmiyorsa:** robotun **Rahatsız Etme** modunda olmadığından emin ol.

Markadan bağımsız kontrol listesi için [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/) yazısına bakabilirsin. Robot şarjlı ama iyi temizlemiyorsa: [Vestel robot süpürge iyi temizlemiyor](/blog/vestel-robot-supurge-iyi-temizlemiyor/).

## Ne zaman servis

- Kablo, kontak ve istasyonun yeri düzeltildiği hâlde **şarj göstergesi hiç yanmıyorsa:** Vestel'in genel kuralı, tablodaki açıklamalar sorunu çözmezse **Vestel İletişim Merkezi** ile irtibata geçmek.
- Robot çalışmıyor ya da güvenlik aygıtı onu tekrar tekrar kapatıyorsa kılavuz **yetkili servis** ile iletişime geçmeni istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Kablo, kontak temizliği ve istasyonun yeri kullanıcıya; batarya ve iç aksam servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Model V-Bot mu, V-Bot Pro mu (ürün etiketinde)?
2. Robot istasyona oturunca bip sesi geliyor mu, güç düğmesi yanıyor mu?
3. Şarj ışığı yanıp sönüyor mu, sabit mi, hiç mi yanmıyor?
4. İstasyonun önü ve yanları boş mu, duvara dayalı mı?
5. İstasyonun yerini son zamanlarda değiştirdin mi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
