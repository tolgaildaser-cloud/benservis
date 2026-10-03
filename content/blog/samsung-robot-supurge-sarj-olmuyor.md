---
title: "Samsung robot süpürge şarj olmuyor"
description: "Samsung robot süpürge şarj olmuyorsa Samsung'un sırası: güç anahtarını aç, robotu istasyona tam oturt, temas noktalarını sil, istasyonun yerini düzelt."
slug: "samsung-robot-supurge-sarj-olmuyor"
date: "2026-10-03"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, süpürge). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un KENDİ alan adından indirildi
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com, 1 yönlendirme, ikisi de samsung.com alt alanı), HTTP 200. Adresler samsung.com/tr/support/model/<model>/TR/
#   destek sayfalarından alındı; web araması yalnız model sayfasını bulmak için. Yerel: blog-taslaklar/kaynak-supurge-3eki/ · okuma pdftotext -layout, sayfa = PDF sayfası
#   (her PDF sayfasında iki basılı sayfa var).
#  S1) Samsung VR7700 (VR3MB77312K) robot süpürge kullanıcı kılavuzu  https://downloadcenter.samsung.com/content/UM/202406/20240603183421710/VR7700_TR_IB_TR_02_240515.pdf  14 s.  md5 ef1bd406164020431fc0900b2b6eb5d6
#  S2) Samsung VR5000 (VR05R50**** serisi) robot süpürge kullanıcı kılavuzu  https://downloadcenter.samsung.com/content/UM/202409/20240920152410821/O_VR5000_TR_FULL_TR_02_240902.pdf  18 s.  md5 5767bf0089b74508de873beb1a7d456e
# Ana satırlar: S1 s.10 · S2 s.14 "Cihaz şarj olmuyor" → "Güç anahtarı şarj sırasında açık değil" / "Cihazı açın" · "Cihaz ve şarj terminalleri tam temas etmiyor" /
#   "Cihazın şarj terminaline tam temas ettiğinden emin olun"
# Temas: S1 s.9 "Hem robot süpürge hem de şarj istasyonunda bulunan şarj temas noktalarını ... kuru ve yumuşak bir bezle silin." · S2 s.12 "şarj tabanını ve şarj yuvasını ... bir temizleme aleti veya yumuşak bir bezle temizleyin."
# Yer: S1 s.4 NOT 1 "şarj istasyonunu halı veya yumuşak bir zemin üzerine yerleştirmeyin ve alanı kuru olarak tutun." · S2 s.6 "Yerleştirme istasyonunu bir duvara yerleştirin ve ... çevresindeki tüm engelleri kaldırın." (şekilde 1.5 M)
# Güç: S2 s.6 "Kapağı açtıktan sonra gücü açın." · S2 s.7 "Kapağı açın, güç anahtarını "AÇIK" konuma getirerek gücü açın" · S1 s.4 "Robot süpürgeyi çalıştırmak için basılı tutun." · "Şarj etmek için düğmesine kısa süreli basın."
# Işık: S2 s.6 "Şarj ederken, iki saniyelik aralıklarla düğmenin beyaz ışığı yanıp söner" · "Şarj işlemi tamamlandığında, düğmenin beyaz ışığı sürekli yanar" · "pil gücü düşük olduğunda ve kırmızı ışık yanıp söndüğünde"
# Paspas: S1 s.4 NOT 2 "Robot süpürge şarj durumundayken paspas bezi tutucusunu çıkarın." · S2 s.6 "Şarj ederken, su haznesini boşaltın ve paspas ekini çıkarın."
# Süre: S1 s.4 NOT 4 "3 aydan fazla kullanılmamışsa kullanmaya başlamadan önce en az 12 saat şarj" · S2 s.7 "Cihaz 3 aydan fazla kullanılmadıysa, cihazı 12 saat şarj edin." · S1 s.5 ilk kullanım "en az 6 saat" · S2 s.7 "İlk kullanım için lütfen 12 saat şarj edin"
# Pil: S1 s.11 "Bu üründe bulunan pil, kullanıcı tarafından değiştirilemez." · S2 s.15 "Bataryayı değiştirmek için servis sağlayıcınıza veya bağımsız bir kalifiye uzmana başvurmalısınız."
# BİLEREK YAZILMAYANLAR: batarya sökümü (S1 s.11 / S2 s.15'te vidalı söküm anlatılıyor; ALET + #31 → yalnız "servis") · prizi/kabloyu kontrol et cümlesi (Samsung tablosunda yok) ·
#   batarya ömrü yıl/döngü rakamı (belgede yok) · başka Samsung modellerine genelleme · fiyat (#46).
# Alıntı denetim tablosu: samsung-robot-supurge-sarj-olmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika (sonrasında şarj süresi)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru, yumuşak bez", "Robot süpürgenin kullanım kılavuzu"]
steps:
  - "Robotun güç anahtarını aç; VR5000'de kapağı açıp anahtarı AÇIK konuma getir, VR7700'de güç düğmesini basılı tut."
  - "Robotu istasyona, şarj terminallerine tam temas edecek şekilde yerleştir."
  - "Robotun ve istasyonun şarj temas noktalarını kuru, yumuşak bir bezle sil."
  - "İstasyonu duvara daya ve çevresindeki engelleri kaldır."
  - "İstasyonu halı ya da yumuşak zemine koyma, çevresini kuru tut."
  - "Şarj ederken paspas tutucusunu çıkar ve su haznesini boşalt."
  - "Robot üç aydan uzun süre kullanılmadıysa kullanmadan önce 12 saat şarj et ve şarj ışığını izle."
faq:
  - q: "Samsung robot süpürgem istasyonda duruyor ama şarj olmuyor, neden?"
    a: "Samsung'un VR7700 ve VR5000 kılavuzlarındaki arıza tablosunda bu belirtinin karşısında iki neden yazıyor: güç anahtarının şarj sırasında açık olmaması ve cihazla şarj terminallerinin tam temas etmemesi. Çözümler de buna göre: cihazı açmak ve şarj terminaline tam temas ettiğinden emin olmak. Temas noktalarının kuru, yumuşak bir bezle silinmesi kılavuzların bakım bölümünde ayrıca yer alıyor."
  - q: "Şarj olup olmadığını nasıl anlarım?"
    a: "VR5000 kılavuzuna göre şarj sırasında düğmenin beyaz ışığı iki saniyelik aralıklarla yanıp söner, şarj tamamlanınca beyaz ışık sürekli yanar. Bekleme modunda kırmızı ışığın yanıp sönmesi pil gücünün düşük olduğunu gösterir."
  - q: "Robotu uzun süre kullanmadım, şimdi şarj almıyor gibi. Ne yapmalıyım?"
    a: "İki kılavuz da süreyi veriyor: robot üç aydan fazla kullanılmadıysa VR7700 kılavuzuna göre kullanmadan önce en az 12 saat, VR5000 kılavuzuna göre 12 saat şarj edilmeli. VR7700 kılavuzu pil ömrünü korumak için pilin en az altı ayda bir tam şarj edilmesini, uzun süre kullanılmayacak robotun kapatılıp serin ve kuru bir yerde saklanmasını öneriyor."
  - q: "Pili kendim değiştirebilir miyim?"
    a: "Hayır. VR7700 kılavuzu bu üründeki pilin kullanıcı tarafından değiştirilemeyeceğini yazıyor; VR5000 kılavuzu da bataryayı kendi başına çıkarmaya çalışmamayı, değişim için servis sağlayıcıya ya da kalifiye bir uzmana başvurmayı istiyor."
images:
  coverAlt: "Duvar dibindeki şarj istasyonuna yanaşmış yuvarlak bir robot süpürge ve önünde boş bırakılmış parke zemin"
---

Robot temizliği bitirip istasyona dönüyor ama ertesi gün yerinden kalkmıyor. Samsung'un VR7700 ve VR5000 robot süpürge kılavuzlarının arıza tablosunda bu belirti tek satırla geçiyor: **"Cihaz şarj olmuyor"**. Tablonun gösterdiği iki neden de kullanıcının elinde: güç anahtarı ve temas.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Güç anahtarını aç → robotu istasyona tam oturt → temas noktalarını kuru bezle sil → istasyonu duvara daya, çevresini boşalt → halıya koyma → şarjda paspası çıkar → üç aydan uzun kullanılmadıysa 12 saat şarj et. Pil kullanıcı tarafından değiştirilmez; o iş servise.

## Adım adım: evde denenecekler

**1. Güç anahtarını aç.** Samsung tablosunun ilk nedeni **"Güç anahtarı şarj sırasında açık değil"**, çözümü **"Cihazı açın"**. VR5000'de anahtar kapağın altında: kılavuz **kapağı açıp güç anahtarını "AÇIK" konuma** getirmeni söylüyor. VR7700'de ise robotu çalıştırmak için Başlat/Duraklat/Kapat düğmesini **basılı tutuyorsun**. Kapalı bırakılan robot istasyonda dursa da tabloya göre şarj olmuyor.

**2. Robotu istasyona tam oturt.** İkinci neden **"Cihaz ve şarj terminalleri tam temas etmiyor"**; çözüm **"Cihazın şarj terminaline tam temas ettiğinden emin olun"**. VR5000 kılavuzu robotu istasyona şekilde gösterildiği gibi yerleştirmeni istiyor. VR7700'de robotu istasyona göndermek için şarj düğmesine **kısa süreli basman** yeterli.

**3. Temas noktalarını sil.** VR7700 kılavuzunun bakım bölümü açık: **hem robot süpürgede hem de şarj istasyonunda** bulunan şarj temas noktalarını **kuru ve yumuşak bir bezle** sil. VR5000'de karşılığı robotun altındaki şarj tabanı ile istasyondaki şarj yuvası; kılavuz bunları yumuşak bir bezle temizlemeni söylüyor.

**4. İstasyonu duvara daya, çevresini boşalt.** VR5000 kılavuzuna göre yerleştirme istasyonu **bir duvara** yerleştirilir ve **çevresindeki tüm engeller kaldırılır**; şekilde istasyonun önü ve yanları için 1,5 metrelik boşluk gösteriliyor. VR7700 kılavuzunun şeklinde de istasyonun önünde ve yanlarında boş alan bırakılmış.

**5. Halıya koyma, kuru tut.** VR7700 kılavuzunun ilk notu: **şarj istasyonunu halı veya yumuşak bir zemin üzerine yerleştirme ve alanı kuru tut.**

**6. Şarjda paspası çıkar.** İki kılavuz da paspaslı kullanım sonrası aynı şeyi istiyor: VR7700'de **robot şarj durumundayken paspas bezi tutucusunu çıkar**, VR5000'de **şarj ederken su haznesini boşalt ve paspas ekini çıkar.**

**7. Uzun aradan sonra uzun şarj et, ışığı izle.** Robot **üç aydan fazla kullanılmadıysa** VR7700 kılavuzu kullanmadan önce **en az 12 saat**, VR5000 kılavuzu **12 saat** şarj istiyor. VR5000'de şarj sırasında düğmenin **beyaz ışığı iki saniyede bir yanıp söner**, şarj bitince **sürekli yanar**; bekleme modunda **kırmızı ışığın yanıp sönmesi** pilin düşük olduğunu gösterir.

## Temizlik yarıda kalıp robot istasyona dönüyorsa

Bu bir arıza değil, tablonun ayrı bir satırı: **"Tam temizlenmedi ve robot yeniden şarj olacak"**. VR5000'e göre robot pili **%20'den az** olduğunda kendiliğinden şarja döner; VR7700'de neden **"Cihazın yeterli pil gücü yok."** İki kılavuzun çözümü aynı: **cihazı şarj et.** VR5000 ayrıca robotu yeniden başlatıp ev düzenine daha uygun olabilecek **"oto" temizleme modunu** seçmeni öneriyor.

Markadan bağımsız kontrol listesi için [robot süpürge şarj olmuyor](/blog/robot-supurge-sarj-olmuyor/) yazısına bakabilirsin. Robot hiç çalışmıyor ya da bir yere takılıp kalıyorsa: [Samsung robot süpürge çalışmıyor](/blog/samsung-robot-supurge-calismiyor/).

## Ne zaman servis

- Güç anahtarı açık, temas noktaları temiz ve robot istasyona tam oturduğu hâlde **şarj ışığı hiç yanmıyorsa.**
- **Pil değişimi gerekiyorsa:** VR7700 kılavuzuna göre pil **kullanıcı tarafından değiştirilemez**; VR5000 kılavuzu da bataryayı kendin çıkarmaya çalışmamanı, değişim için **servis sağlayıcıya ya da kalifiye bir uzmana** başvurmanı istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Güç anahtarı, temas temizliği ve istasyonun yeri kullanıcıya; batarya ve iç aksam servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (VR ile başlayan kod, ürün etiketinde)?
2. Güç anahtarı açık mı?
3. İstasyonun ışığı ya da robotun şarj ışığı yanıyor mu, nasıl yanıyor (beyaz yanıp sönen, sabit, kırmızı)?
4. Temas noktalarını en son ne zaman sildin?
5. Robot son üç ayda kullanıldı mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
