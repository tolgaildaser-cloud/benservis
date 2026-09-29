---
title: "Samsung bulaşık makinesi kokuyor"
description: "Samsung bulaşık makinesi kokuyorsa Samsung'un önerisi: boş makinede deterjanlı program, kalan su ve hortum kontrolü, conta temizliği, aralık kapak."
slug: "samsung-bulasik-makinesi-kokuyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, PAZ belirti damarı). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung TÜRKİYE'den indirildi, HTTP 200.
# #88: web araması kullanılmadı; URL'ler 27 Eyl sprint kaynak klasöründen. ABD Samsung kaynağı YOK.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-bulasik-sprint/2026-09-29/ · pdftotext -layout · sayfa = BASILI sayfa no (PDF sayfası parantezde).
#  (A) DW5500MM DD81-02615C-11 (KA/TR, 2024-11-08) …CttFileID=10095923…  200 s. md5 2ad54a56734b93dbaeefbcd4fdc3b385
#  (C) DW8500AM DD81-03206J-04 (TR, 2023-06-28) …CttFileID=9233776…  172 s. md5 0bac38bffb63954fc975765ab1c13167
#  (D) DW9000H DD68-00158F-09 (TR, 2018-05-09) …CttFileID=7034806…  132 s. md5 370daab2b2de63dacb7920a1e1e60c79
#  (S) Samsung TR "Bulaşık Makinesi Hakkında SSS" https://www.samsung.com/tr/home-appliances/faq-dishwasher/  md5 2c207b04ed68b499fb1fbbb3f7711441 (HTML dinamik)
#  (tam URL'ler: samsung-bulasik-makinesi-kokuyor.KAYNAK.md)
# "Bulaşık makinesinde kötü kokular var." — C s.69 (PDF 153): "Önceki programdan su kalıyor. → Bulaşık makinesi boşken deterjan ekleyin ve sonra Hızlı programını çalıştırın. Bu yalnızca bazı modellerde vardır."
# "Kötü bir koku var." — D s.36 (PDF 78): "Son programdan sonra su kalmıştır. → Bulaşık yüklemeden deterjan ekleyin ve bulaşık makinesini temizlemek için Kendi Kendine Temizleme programını çalıştırın."
# "Bir program bittikten sonra bulaşık makinesinde su kalıyor." — C s.69 / D s.36: "Boşaltma hortumu katlanmıştır veya tıkanmıştır. → Hortumu düzleştirin veya tıkayan öğeleri temizleyin."
# "Borunun altında su kalıyor" — A s.55 (PDF 119): "Bu normaldir. → Borunun altındaki çıkış çevresinde az bir miktar su kalması su contasının nemli kalmasını sağlar." (EN bölümünde "tub" = yıkama haznesi)
# A s.40 (PDF 104) Bulaşık makinesi bakımı: "Her yıkamadan sonra, cihaza giden su kaynağını kapatın ve içerideki nemin ve kokunun gitmesi için kapağı hafif aralık bırakın." · "Temizlikten veya bakım gerçekleştirmeden önce, fişi prizden mutlaka çıkarın." ·
#   "Tatile giderken, boş bulaşık makinesinde bir yıkama döngüsü çalıştırmanız ve ardından fişi prizden çıkarmanız, su kaynağını kapatmanız ve cihazın kapağını hafif açık bırakmanız önerilir. Bu contaların daha uzun ömürlü olmasını sağlar ve cihaz içinde koku oluşumunu önler." ·
#   "Bulaşık makinesinde koku oluşumuna neden olan faktörlerden birisi de contalarda kalan yiyecektir. Nemli bir süngerle düzenli temizlik bunun gerçekleşmesini önler."
# C s.65 (PDF 149) İç Kısım: "Bulaşık makinesinin içini ve kapağın içini ıslak bir bulaşık beziyle silin." + İKAZ "Ön contayı çıkarmayın (bulaşık makinesinin açıklığını kapatan uzun lastik conta)."
# S: "Makine Bakımı: Kir ve kokuya neden olan bakterileri sert kimyasallar kullanmadan temizler ve her 20–22 yıkamada bir programı çalıştırmanız gerektiğini hatırlatır. (Belirli modellerde mevcuttur)" · D s.13 (PDF 55) Kendi Kendine Temizleme göstergesi her 20-22 programda bir 5 sn yanıp söner.
# Diğer: A s.37-39 (PDF 101-103) içini her ay temizleme + filtre her ay (koku NEDENİ olarak değil, genel bakım olarak anıldı).
# BİLEREK YAZILMAYANLAR: "koku = tıkalı filtre / tahliye / lağım" nedensellikleri (Samsung TR belgelerinde koku satırı yalnız 'önceki programdan kalan su' diyor; filtre yalnız genel bakım olarak anıldı) ·
#   sirke/karbonat gibi ev yöntemleri (Samsung TR belgesinde koku için yok) · hortumun sökülmesi / tahliye bağlantısının açılması (#31) · süre/parça/fiyat (#46).
# Alıntı denetim tablosu: samsung-bulasik-makinesi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika + bir program"
  totalTime: "PT2H"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi deterjanı", "Sünger", "Bez"]
steps:
  - "Makine boşken deterjan koy ve Hızlı programını ya da modelindeki Kendi Kendine Temizleme / Makine Bakımı programını çalıştır."
  - "Program bittiğinde tabanda belirgin su kalıyorsa boşaltma hortumunun katlanmadığını kontrol et; katlanmışsa düzleştir."
  - "Temizliğe geçmeden önce makinenin fişini prizden çek."
  - "Kapak contalarını nemli bir süngerle sil; ön contayı yerinden çıkarma."
  - "Makinenin içini ve kapağın içini ıslak bir bulaşık beziyle sil."
  - "Her yıkamadan sonra makineye giden suyu kapat ve kapağı hafif aralık bırak."
  - "Makineyi uzun süre kullanmayacaksan boşken bir yıkama çalıştır, fişi çek, suyu kapat ve kapağı hafif açık bırak."
faq:
  - q: "Samsung bulaşık makinesi neden kötü kokuyor?"
    a: "Samsung'un Türkçe kılavuzlarındaki sorun giderme tablosu kötü koku için tek bir neden veriyor: önceki programdan makinede su kalması. Samsung ayrıca bakım bölümünde koku oluşumuna neden olan faktörlerden birinin contalarda kalan yiyecek olduğunu yazıyor."
  - q: "Kokuyu gidermek için hangi programı çalıştırmalıyım?"
    a: "Samsung'un DW60A serisi kılavuzuna göre makine boşken deterjan ekleyip Hızlı programını çalıştır; bu program yalnızca bazı modellerde var. DW60H serisinde öneri, bulaşık yüklemeden deterjan ekleyip Kendi Kendine Temizleme programını çalıştırmak. Samsung Türkiye'nin sayfasına göre bazı modellerdeki Makine Bakımı programı kir ve kokuya neden olan bakterileri temizler ve her 20-22 yıkamada bir çalıştırmanı hatırlatır."
  - q: "Makinenin dibinde biraz su kalıyor, bu normal mi?"
    a: "Az miktarda su normal. Samsung'un tablosuna göre makinenin altındaki çıkış çevresinde az miktarda su kalması su contasının nemli kalmasını sağlar. Program bittikten sonra makinede belirgin su kalıyorsa Samsung boşaltma hortumunun katlanmış ya da tıkanmış olabileceğini yazıyor; ekranda 5C görüyorsan tahliye kontrolü içindir."
  - q: "Kokunun tekrar oluşmaması için ne yapabilirim?"
    a: "Samsung'un bakım önerileri: her yıkamadan sonra makineye giden suyu kapat ve içerideki nemin ve kokunun gitmesi için kapağı hafif aralık bırak; contaları nemli bir süngerle düzenli temizle; tatile giderken boş makinede bir yıkama çalıştırıp fişi çek, suyu kapat ve kapağı hafif açık bırak."
images:
  coverAlt: "Kapağı hafif aralık bırakılmış bir bulaşık makinesi; içte boş sepetler ve kapak kenarındaki lastik conta görünüyor"
---

Kapağı açtığında makineden kötü bir koku geliyor. Samsung'un Türkçe kullanım kılavuzlarındaki sorun giderme tablosunda bunun ayrı bir satırı var: **"Bulaşık makinesinde kötü kokular var."** Samsung'un bu satırda verdiği neden tek: **önceki programdan makinede su kalması.** Kılavuzların bakım bölümü de kokuyu önlemek için somut alışkanlıklar sayıyor: **contaların temizliği** ve **kapağın aralık bırakılması.** Bu yazıda Samsung'un önerilerini sırasıyla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Makine boşken deterjanla bir temizlik programı çalıştır (Hızlı, Kendi Kendine Temizleme ya da Makine Bakımı, modeline göre) → program sonunda belirgin su kalıyorsa boşaltma hortumuna bak → fişi çek, contaları ve iç yüzeyi sil → her yıkamadan sonra suyu kapat, kapağı hafif aralık bırak. Ekranda kod varsa kodun anlamına bak.

## Adım adım: evde denenecekler

**1. Boş makinede temizlik programı çalıştır.** Samsung'un DW60A serisi kılavuzundaki çözüm: **bulaşık makinesi boşken deterjan ekle ve Hızlı programını çalıştır** (Samsung'a göre bu yalnızca bazı modellerde var). DW60H serisinde öneri aynı mantıkta: **bulaşık yüklemeden deterjan ekle ve Kendi Kendine Temizleme programını çalıştır.** Samsung Türkiye'nin sayfasına göre belirli modellerde **Makine Bakımı** programı var; kir ve kokuya neden olan bakterileri sert kimyasallar kullanmadan temizliyor. Modelinde hangisi varsa onu kullan.

**2. Kalan suya ve boşaltma hortumuna bak.** Samsung'un koku satırındaki neden **önceki programdan su kalması.** Program bittiğinde makinede belirgin su kalıyorsa Samsung'un tablosuna göre **boşaltma hortumu katlanmış ya da tıkanmış** olabilir; öneri **hortumu düzleştirmek ya da tıkayan öğeleri temizlemek.** Hortumu makinenin arkasından tahliyeye kadar gözle izle; katlanmış bir yer varsa düzelt. Dipte çok az su kalması ise Samsung'a göre normal: çıkış çevresindeki bu su **su contasının nemli kalmasını sağlar.**

**3. Fişi çek.** Temizliğe geçmeden önce Samsung'un kuralı: **temizlikten ya da bakımdan önce fişi prizden mutlaka çıkar.**

**4. Contaları sil.** Samsung'un bakım bölümüne göre **koku oluşumuna neden olan faktörlerden birisi contalarda kalan yiyecektir** ve **nemli bir süngerle düzenli temizlik** bunu önler. Kapak kenarındaki contaları nemli bir süngerle sil. Samsung'un DW60A kılavuzundaki uyarı: makinenin açıklığını kapatan **uzun lastik ön contayı yerinden çıkarma;** conta makinenin iç tarafını mühürler.

**5. İç yüzeyi sil.** Samsung'a göre makinenin iç kısmı kir ve yiyecek parçacıklarına karşı düzenli olarak temizlenmeli: **makinenin içini ve kapağın içini ıslak bir bulaşık beziyle sil.** Kireç tortusu ve yağ kalıntısı için de nemli bez kullanılabilir.

**6. Her yıkamadan sonra kapağı aralık bırak.** Samsung'un bakım önerisi: **her yıkamadan sonra cihaza giden su kaynağını kapat ve içerideki nemin ve kokunun gitmesi için kapağı hafif aralık bırak.**

**7. Uzun süre kullanmayacaksan hazırlık yap.** Samsung'un tatil önerisi: **boş makinede bir yıkama döngüsü çalıştır**, ardından **fişi çek, su kaynağını kapat ve kapağı hafif açık bırak.** Samsung'a göre bu, contaların daha uzun ömürlü olmasını sağlar ve **cihaz içinde koku oluşumunu önler.**

## Önlemek için

Samsung Türkiye'nin sayfasına göre **Makine Bakımı** özelliği olan modeller, programı **her 20-22 yıkamada bir** çalıştırmanı hatırlatıyor. DW60H serisinin kılavuzuna göre (bazı modellerde) **Kendi Kendine Temizleme** göstergesi her 20-22 programda bir 5 saniye boyunca yanıp söner.

Samsung genel bakım olarak makinenin içini ve filtreyi **her ay** temizlemeni öneriyor. Filtre temizliğinin Samsung'un tarifine göre anlatımı [Samsung bulaşık makinesi temiz yıkamıyor](/blog/samsung-bulasik-makinesi-temiz-yikamiyor/) yazısında; markadan bağımsız anlatımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

## Ne zaman servis

Temizlik programı çalıştırıldı, contalar ve iç yüzey temizlendi, hortum düzgün ve koku sürüyorsa Samsung'un tablosu kullanıcıya başka adım vermiyor. Program sonunda makinede belirgin su kalmaya devam ediyorsa ya da ekranda **5C** görünüyorsa bu tahliye tarafıdır; Samsung'un 5C talimatı için [Samsung bulaşık makinesi 5C hatası](/blog/samsung-bulasik-makinesi-5c-hatasi/) yazısına bak. Bir bilgi kodu ekranda görünmeye devam ediyorsa Samsung'un notu: **yerel bir Samsung servis merkezine başvur.**

⛔ **Kendin-çöz sınırı burada biter.** Temizlik programı, contalar, iç yüzey ve hortumun gözle kontrolü kullanıcıya; hortum bağlantısının açılması ve makinenin içi uzmana aittir.

## Servisi aramadan önce iki dakikalık özet

1. Koku ne zaman belirgin: kapak açılınca mı, program sırasında mı?
2. Program bittikten sonra makinede ne kadar su kalıyor?
3. Boşaltma hortumu düz mü?
4. Contalar ve filtre en son ne zaman temizlendi?
5. Ekranda bilgi kodu var mı?

Markadan bağımsız genel anlatım için [bulaşık makinesi kokuyor](/blog/bulasik-makinesi-kokuyor/) yazısına bakabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
