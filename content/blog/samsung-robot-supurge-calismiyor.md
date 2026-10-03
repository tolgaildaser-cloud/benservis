---
title: "Samsung robot süpürge çalışmıyor"
description: "Samsung robot süpürge çalışmıyor ya da takılıp kalıyorsa: güç anahtarı, şarj, tekerlek, yerdeki eşyalar, fırça sarımı ve tampon. Samsung kılavuzuna göre sıra."
slug: "samsung-robot-supurge-calismiyor"
date: "2026-10-03"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, süpürge). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un KENDİ alan adından indirildi
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com, 1 yönlendirme, samsung.com alt alanı), HTTP 200. Adresler samsung.com/tr/support/model/<model>/TR/ sayfalarından.
#   Yerel: blog-taslaklar/kaynak-supurge-3eki/ · okuma pdftotext -layout, sayfa = PDF sayfası.
#  S1) Samsung VR7700 (VR3MB77312K) kullanıcı kılavuzu  https://downloadcenter.samsung.com/content/UM/202406/20240603183421710/VR7700_TR_IB_TR_02_240515.pdf  14 s.  md5 ef1bd406164020431fc0900b2b6eb5d6
#  S2) Samsung VR5000 (VR05R50**** serisi) kullanıcı kılavuzu  https://downloadcenter.samsung.com/content/UM/202409/20240920152410821/O_VR5000_TR_FULL_TR_02_240902.pdf  18 s.  md5 5767bf0089b74508de873beb1a7d456e
# Tablo (S1 s.10 · S2 s.14): "Cihaz çalışmıyor" → "Güç anahtarı açık değil"/"Güç anahtarını açın" · "Düşük pil"/"Cihazı şarj edin" · "Tekerlekler düşmüş ve üç grup düşme sensörü
#   düşme durumunda"/"Cihazı yere yakın koyun" + "Satış sonrası servis merkezi ile iletişim kurun"
#   "Cihaz takıldı" → "Cihaz yerdeki kablolara, düşen perde kumaşına ya da kıvrılmış battaniyeye dolanmış" / "Cihaz, otomatik olarak kaçış modunu başlatır. Sorunu gideremezse elle yardım
#   gerekebilir" · "Yan fırça ve fırça silindiri vb. takılmış" / "Yan fırçanın sarımlarını temizleyin ve yeniden başlatın. Aksi halde satış sonrası departmanı ile görüşün"
#   "Cihaz yeniden başlatılıyor" → "Önde bir engele var"/"Öndeki engelleri temizleyin" · "Tampon rayı sıkışmış"/"Sıkışan yabancı bir nesne olup olmadığını kontrol etmek için tampon kızağına dokunun"
#   "Mevcut süreye göre temizlik yok" → "Programlanan görev iptal edildi"/"Sıfırlayın ve görevlendirme yapın"
#   S2 s.14 "Cihaz bazen yeniden başlatılır." → "halıdan kaynaklanan anlık static elektrik deşarjı" / "3 saniye içinde yeniden başlarsa cihaz normal durumdadır."
#   S2 s.14 "Engellere çarpmaya devam ediyor." / "Hareket ederken mobilyalara ve engellere çarpabilir." → "Bu normaldir."
# Sıfırla: S1 s.4 "Robot süpürge, yanıt vermiyorsa veya düzgün çalışmıyorsa "Sıfırlama" düğmesine basın." (düğme "kapağın altında")
# Hazırlık: S1 s.6 "yere saçılmış telleri ve küçük nesneleri toplayın" · S2 s.6 "terlik, kablo, perde vb. Eşyaları kaldırın." · "ıslak yüzeylerde ya da durgun su içeren yüzeylerde kullanmayın"
# Fırça: S1 s.7 · S2 s.11 "Yan fırçanın hasarlı ya da sarılmış olup olmadığını kontrol edin" "Yan fırçayı bir temizleme aleti ya da bir bez ile temizleyin" · S2 s.13 fırça rulosu: kapağı indir,
#   "Fırça rulosu bloğunu yukarı doğru açın ve fırça rulosunu çıkarın", "temizleme aletiyle veya yumuşak bir bezle temizleyin. (fırça rulosu su ile yıkanabilir)", "tamamen kuruduktan sonra ... tekrar takın"
# BİLEREK YAZILMAYANLAR: düşme sensörü/tekerlek teşhisi (tablo servisi gösteriyor) · batarya sökümü · Wi-Fi/uygulama satırları (konu dışı) · model genellemesi · fiyat (#46).
# Alıntı denetim tablosu: samsung-robot-supurge-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Robotla gelen temizleme fırçası"]
steps:
  - "Güç anahtarının açık olduğunu kontrol et; kapalıysa aç."
  - "Pil düşükse robotu istasyona koyup şarj et."
  - "Robotu tekerlekleri yere değecek şekilde zemine koy."
  - "Yerdeki kablo, terlik, perde ucu ve küçük eşyaları kaldır."
  - "Yan fırçaya ve fırça rulosuna dolanan sarımları temizle."
  - "Öndeki engelleri kaldır ve sıkışan bir nesne var mı diye tampona dokunarak kontrol et."
  - "Robot yanıt vermiyorsa Sıfırlama düğmesine bas; programlı temizlik yapmıyorsa görevi yeniden kur."
faq:
  - q: "Samsung robot süpürgem hiç çalışmıyor, ilk neye bakmalıyım?"
    a: "Samsung'un VR7700 ve VR5000 kılavuzlarındaki arıza tablosunda 'Cihaz çalışmıyor' satırının karşısında üç neden var: güç anahtarının açık olmaması, pilin düşük olması ve tekerleklerin düşmüş, düşme sensörlerinin devrede olması. İlk ikisinin çözümü güç anahtarını açmak ve cihazı şarj etmek; üçüncüsünde kılavuz cihazı yere yakın koymanı, sorun sürerse satış sonrası servis merkeziyle iletişim kurmanı istiyor."
  - q: "Robot sürekli bir yere takılıp kalıyor, ne yapmalıyım?"
    a: "Tabloya göre robot yerdeki kablolara, düşen perde kumaşına ya da kıvrılmış battaniyeye dolanırsa otomatik olarak kaçış modunu başlatır; bununla kurtulamazsa elle yardım gerekebilir. Yan fırça ya da fırça silindiri takıldıysa sarımları temizleyip yeniden başlatman isteniyor; olmazsa satış sonrası departmanıyla görüşülmeli. Temizlikten önce yerdeki telleri, terlikleri ve küçük nesneleri toplamak da kılavuzun önerisi."
  - q: "Robot kendi kendine yeniden başlıyor, bozuk mu?"
    a: "VR5000 kılavuzuna göre bu halıdan kaynaklanan anlık statik elektrik deşarjından olabilir; robot 3 saniye içinde yeniden başlıyorsa cihaz normal durumdadır. Tablodaki diğer nedenler öndeki bir engel ya da tampon rayının sıkışması; çözüm engelleri kaldırmak ve tampon kızağına dokunarak sıkışan bir nesne olup olmadığını kontrol etmek."
  - q: "Programladığım saatte temizlik yapmıyor, neden?"
    a: "Tablonun 'Mevcut süreye göre temizlik yok' satırına göre nedenler güç anahtarının açık olmaması ya da programlanan görevin iptal edilmesi. Çözüm güç anahtarını açmak, sıfırlayıp görevi yeniden tanımlamak."
images:
  coverAlt: "Oturma odasında halı kenarında durmuş bir robot süpürge ve yerden toplanmış kablolar ile terlikler"
---

Düğmeye basıyorsun, robot kımıldamıyor; ya da yola çıkıyor, birkaç dakika sonra bir halı kenarında takılıp kalıyor. Samsung'un VR7700 ve VR5000 robot süpürge kılavuzlarının arıza tablosu bu durumları ayrı satırlarda topluyor: **"Cihaz çalışmıyor"**, **"Cihaz takıldı"** ve **"Cihaz yeniden başlatılıyor"**. Satırların çoğunun çözümü kullanıcının elinde.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Güç anahtarı açık mı → pil dolu mu → tekerlekler yerde mi → yerdeki kablo ve eşyaları topla → fırça sarımlarını temizle → tampona dokun, engelleri kaldır → yanıt yoksa Sıfırlama. Tekerlek ve düşme sensörü sorunu sürerse servis.

## Adım adım: evde denenecekler

**1. Güç anahtarını kontrol et.** "Cihaz çalışmıyor" satırının ilk nedeni **"Güç anahtarı açık değil"**, çözümü **"Güç anahtarını açın"**. VR5000'de anahtar kapağın altında; VR7700'de robotu çalıştırmak için düğmeyi **basılı tutuyorsun**.

**2. Pili şarj et.** Aynı satırın ikinci nedeni **"Düşük pil"**, çözümü **"Cihazı şarj edin"**. VR5000'de bekleme modunda **kırmızı ışığın yanıp sönmesi** pilin düşük olduğunu gösterir. Şarj tarafında sorun varsa: [Samsung robot süpürge şarj olmuyor](/blog/samsung-robot-supurge-sarj-olmuyor/).

**3. Robotu zemine düz koy.** Üçüncü neden **"Tekerlekler düşmüş ve üç grup düşme sensörü düşme durumunda"**. Robot bir eşiğin, halının ya da mobilyanın üstünde havada kaldıysa tablo **"Cihazı yere yakın koyun"** diyor.

**4. Yerdeki eşyaları topla.** "Cihaz takıldı" satırına göre robot **yerdeki kablolara, düşen perde kumaşına ya da kıvrılmış battaniyeye** dolanabilir. Böyle bir durumda robot **otomatik olarak kaçış modunu başlatır**; kurtulamazsa **elle yardım gerekebilir**. Kılavuzun temizlik öncesi önerisi bunu baştan önlüyor: VR7700'de **yere saçılmış telleri ve küçük nesneleri** topla, VR5000'de **terlik, kablo, perde vb. eşyaları** kaldır. Püsküllü halının kenarlarını halının altına katla.

**5. Fırça sarımlarını temizle.** Tablonun diğer nedeni **"Yan fırça ve fırça silindiri vb. takılmış"**; çözüm **"Yan fırçanın sarımlarını temizleyin ve yeniden başlatın."** Bakım bölümüne göre yan fırçanın **hasarlı ya da sarılmış** olup olmadığına bak ve onu **bir temizleme aleti ya da bez** ile temizle. VR5000'de fırça rulosu da çıkıyor: kapağı indir, bloğu yukarı aç, ruloyu çıkar ve temizleme aletiyle ya da yumuşak bezle temizle; kılavuza göre rulo **suyla yıkanabilir**, **tamamen kuruduktan sonra** yerine takılır.

**6. Tampona dokun, engelleri kaldır.** Robot sürekli yeniden başlıyorsa tablodaki nedenler **önde bir engel** ve **tampon rayının sıkışması**. Çözüm **öndeki engelleri temizlemek** ve **sıkışan yabancı bir nesne olup olmadığını kontrol etmek için tampon kızağına dokunmak.**

**7. Sıfırla ya da programı yeniden kur.** VR7700 kılavuzuna göre robot **yanıt vermiyorsa veya düzgün çalışmıyorsa** kapağın altındaki **"Sıfırlama" düğmesine** bas. Programladığın saatte temizlik yapmıyorsa tablonun satırı **"Programlanan görev iptal edildi"**, çözümü **"Sıfırlayın ve görevlendirme yapın."**

## Normal sayılan durumlar

VR5000 kılavuzu bazı davranışları arıza saymıyor:

- **Robot bazen yeniden başlıyor:** halıdan kaynaklanan anlık statik elektrik deşarjı olabilir; **3 saniye içinde** yeniden başlıyorsa cihaz normal durumdadır.
- **Engellere çarpmaya devam ediyor:** robot engeli algılayınca yavaşlar ve engele değene kadar yakın mesafede temizler; kılavuz **"Bu normaldir."** diyor.
- **Mobilyalara çarpıyor:** mobilyaların yanlarını temizlemeye çalışırken çarpabilir; bu da normal.

Markadan bağımsız kontrol listeleri için [robot süpürgenin fırçası dönmüyor](/blog/robot-supurge-firca-donmuyor/) ve [robot süpürge haritalama sorunu](/blog/robot-supurge-haritalama-sorunu/) yazılarına bakabilirsin.

## Ne zaman servis

- **Tekerlek ve düşme sensörü:** robot zemine düz konduğu hâlde çalışmıyorsa tablo **satış sonrası servis merkeziyle** iletişim kurmanı istiyor.
- **Fırça sarımı temizlendiği hâlde takılma sürüyorsa:** tabloya göre **satış sonrası departmanıyla** görüş.
- **Pil:** VR7700 kılavuzuna göre pil **kullanıcı tarafından değiştirilemez.**

⛔ **Kendin-çöz sınırı burada biter.** Güç, şarj, zemin düzeni, fırça ve tampon temizliği kullanıcıya; sensör, tekerlek mekanizması ve batarya servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (VR ile başlayan kod, ürün etiketinde)?
2. Robot hiç mi açılmıyor, yoksa açılıp bir yerde mi takılıyor?
3. Takılıyorsa nerede: halı kenarı, kablo, eşik?
4. Yan fırça ve fırça rulosunu en son ne zaman temizledin?
5. Robot kendiliğinden yeniden başlıyor mu, kaç saniyede?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
