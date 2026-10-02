---
title: "Arçelik klima çalışmıyor: evde kontrol"
description: "Arçelik klima açılmıyorsa kılavuzun sırası: sigorta, elektrik kesintisi sonrası bekleme, 3 dakika, zamanlayıcı ve saat, kumanda pili ve sinyal alıcı."
slug: "arcelik-klima-calismiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki 2. koşu, ek-1051, klima). Belgeler bu koşuda (10:55) curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200; md5'ler sabah ve 1 Eki kopyalarıyla birebir. Arçelik'in kendi alan adı (download.arcelik.com.tr).
# Web araması KULLANILMADI: adres yayındaki arcelik-klima-isitmiyor provenansından. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-ek1051/arcelik-182410.pdf · pdftotext -layout -f N -l N; sayfa = PDF sayfası (basılı numara aynı).
#  A1) Arçelik "Eco Ionizer Inverter serisi ev tipi klima kullanma kılavuzu" 182410 A / 232410 A (Doküman 5400721583 Rev.:c), 28 s., md5 cef5414dfc998a5217f8be6310bd2be3
#      https://download.arcelik.com.tr/download.usagemanuals/182410-a-eco-ionizer-inverter-serisi-ev-tipi-klima-kullanim-kilavuzu-tr_TR_20151106181318_User20Manual20-20Filetur-A.pdf
#      s.25 "7 Problemler için çözüm önerileri" · "Klima çalışmıyor." → "• Sigorta veya devre kesici atmış olabilir. >>> Sigortanın atıp atmadığını ve devre kesiciyi kontrol edin." / "• Zamanlayıcı yanlış ayarlanmış olabilir. >>> Zamanlayıcıyı ayarlama sırasında bir hata yapıp yapmadığınızı kontrol edin."
#      s.25 "Klima tekrar çalıştırıldığında 3 dakika kadar çalışmıyor. C Bu, klimanın korunması için geliştirilmiş bir önlemdir. 3 dakika sonunda klima çalışmaya başlayacaktır."
#      s.25 "Uzaktan kumandanın göstergesi silik veya hiç göstermiyor. • Piller bitmiş veya yanlış yerleştirilmiş olabilir. >>> Pilleri kontrol edin."
#      s.25 "A Bu bölümdeki talimatları uygulamanıza rağmen sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı asla denemeyin."
#      s.15 "Klimayı açma 1. Klimanın sigortası kapalıysa açın. 2. Uzaktan kumandayı, iç ünitede bulunan Çalışma durumu gösterge ekranına yönlendirip, kumanda üzerindeki “d” tuşa basın. Ön paneldeki çalışma durumu gösterge ekranı yanacak ve klimadan uyarı sinyali gelecektir."
#      s.14 "İki adet AAA 1,5 V pili (+) ve (-) yönlerinin doğru olduğuna dikkat ederek yuvalarına yerleştirin ve kapağı tekrar takın." / "C Uzaktan kumandanın ekran görüntüsü kaybolursa, pilleri tekrar takın." / "• Uzaktan kumandayı kullanacağınız zaman, klimanın üzerindeki sinyal alıcıya doğru tutun. • Uzaktan kumanda ile klima alıcısı arasında herhangi bir engel olmamasına dikkat edin. • Uzaktan kumanda tuşlarına bastığınızda klimadan bip sesi gelmiyorsa sinyal alınmamış demektir. Tuşa tekrar basın." / "• Uzaktan kumandayı, güneş ışınlarını doğrudan alacağı bir yere veya ısı yayan bir cihazın yakınına koymayın." / "C Uzaktan kumandaya şekli, boyutları ve performansı standart pillerden farklı olan, şarj edilebilir piller takmayın." / "Klimayı çalıştırmak için, uzaktan kumandayı, klimanın alt tarafındaki sinyal alıcıya doğru yöneltin." / "C Uzaktan kumanda yöneltildiği taktirde başka elektronik cihazları çalıştırabilir. Uzaktan kumandayı klimanın sinyal alıcısına doğru yöneltin." / "C Uygun çalışma şartları için, sinyal verici ve alıcısını, yumuşak bir bez kullanarak temizleyin."
#      s.9 "Biten pilleri sadece aynı model, değer ve özelliklerdeki pillerle değiştirin. Şarj edilebilir piller kullanmayın." / "Kullanılmış pillerle yeni pilleri bir arada kullanmayın." / "Pillerin akmış olması halinde uzaktan kumandayı kullanmayın." / "Üründen garip bir ses, duman ve koku gelirse ürünü sigortadan kapatın ve Yetkili Servisi arayın." / "Ürünün elektriksel parçaları suyla temas ettiyse ürünü kapatın ve Yetkili Servisi arayın."
#      s.20-21 otomatik açılma/kapanma: "Otomatik açılma ayarı fonksiyonunu iptal etmek için uzaktan kumanda üzerindeki “p” tuşuna bir kez basın." / "Otomatik kapanma ayarı fonksiyonunu iptal etmek için uzaktan kumanda üzerindeki “p” tuşuna bir kez basın." / "C Saati ayarlarken AM (Öğleden önce), PM (Öğleden sonra) ibarelerine dikkat edin. Klimaya vereceğiniz program ayarı için uzaktan kumandanın saatini esas alacağından saatin doğru ayarlanması büyük önem taşımaktadır." / "C Bu fonksiyon bazı ürünlerde olmayabilir veya çalışmayabilir."
#      s.21 "Otomatik başlatma Elektrik kesilip tekrar geldiğinde klima, otomatik başlatma özelliği sayesinde elektrik kesilmeden önceki ayarlardan çalışmaya başlar. İlk kalkışta fan en düşük hızda çalışır ve kompresör 2.5-3 dakika sonra devreye girer." / "1. Bu fonksiyonunu devre dışı bırakmak için “Manuel Çalıştırma” düğmesini 6 saniye basılı tutun."
#      s.22 "2. Otomatik Başlatma fonksiyonunu tekrar etkinleştirmek için, “Manuel Çalıştırma” düğmesini tekrar 6 saniye basılı tutun. Açma/Kapama ışığı 1.5 saniye aralıklarla 4 defa yanıp sönecektir." / "C Klima, çalışır durumdayken elektrik kesildiğinde ayarlı olan değerlerini hafızasında saklama yeteneğine sahiptir." / "C Bu fonksiyon bazı ürünlerde olmayabilir veya çalışmayabilir."
#      s.23 "Ürünü temizlerken ya da bakımını yaparken sağlam bir tabure ya da merdiven kullanın."
#      s.26 "Arçelik Çağrı Merkezi haftanın 7 günü 24 saat hizmet vermektedir." / "Yetkili servislerimizin, güncel iletişim bilgilerine www.arcelik.com.tr adresinden ulaşabilirsiniz"
# YAKIN KOPYA: Beko klima için ayrı sayfa yazılmadı (aynı grup). Yayında Arçelik/Beko/Grundig/Altus klima "çalışmıyor" sayfası yok; aynı belirtinin başka marka sayfalarıyla (vestel/toshiba/daikin/lg/samsung/mitsubishi-electric-klima-calismiyor) gövde ölçümü .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: sigorta değiştirme ya da pano müdahalesi (#31; kılavuz yalnız "kontrol edin" ve "kapalıysa açın" diyor) · "Manuel Çalıştırma" düğmesinin yeri (kılavuz yalnız "iç ünite üzerinde" diyor; adım yapılmadı, SSS'de bilgi) · test çalıştırma modu · tuş harfleri ("d", "p" font glifleri; tuş adı yazılmadı) · çağrı merkezi numarası · fiyat.
# Alıntı denetim tablosu: arcelik-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "2 adet AAA 1,5 V pil", "Yumuşak kuru bez"]
steps:
  - "Klimanın sigortasının ya da devre kesicisinin atıp atmadığına bak; kapalıysa aç."
  - "Elektrik yeni geldiyse kompresörün devreye girmesi için 2,5-3 dakika bekle."
  - "Klimayı kapatıp hemen yeniden açtıysan 3 dakika bekle."
  - "Kumandada otomatik açılma ya da kapanma ayarı varsa kontrol et; kumanda saatinin ve AM/PM seçiminin doğru olduğuna bak, gerekmiyorsa ayarı iptal et."
  - "Kumanda ekranı silik ya da boşsa iki adet AAA 1,5 V pili artı-eksi yönüne dikkat ederek yeniden tak ya da aynı tipte yenileriyle değiştir."
  - "Kumandayı iç ünitenin alt tarafındaki sinyal alıcıya doğrult, arada engel bırakma; bip sesi gelmezse tuşa yeniden bas."
  - "Kumandanın sinyal vericisini ve iç ünitedeki alıcıyı yumuşak bir bezle sil."
  - "Sorun sürerse ürünü aldığın bayiye ya da Arçelik yetkili servisine başvur."
faq:
  - q: "Arçelik klima neden hiç açılmaz?"
    a: "Arçelik kılavuzunun çözüm önerileri 'Klima çalışmıyor' başlığında iki neden veriyor: sigorta ya da devre kesici atmış olabilir veya zamanlayıcı yanlış ayarlanmış olabilir. Kumanda göstergesi silik ya da boşsa ayrı bir satır pillerin bitmiş ya da yanlış yerleştirilmiş olabileceğini yazıyor."
  - q: "Elektrik gidip geldi, klima hemen soğuk hava vermedi. Bozuk mu?"
    a: "Büyük olasılıkla hayır. Kılavuza göre elektrik kesilip geldiğinde klima, otomatik başlatma sayesinde kesintiden önceki ayarlarla çalışmaya başlar; ilk kalkışta fan en düşük hızda döner ve kompresör 2,5-3 dakika sonra devreye girer. Kılavuz bu fonksiyonun bazı ürünlerde olmayabileceğini de not ediyor."
  - q: "Elektrik geldikten sonra klima kendiliğinden açılmıyor. Neden?"
    a: "Otomatik başlatma kapatılmış olabilir. Arçelik kılavuzuna göre bu fonksiyon iç ünite üzerindeki 'Manuel Çalıştırma' düğmesi 6 saniye basılı tutularak kapatılır ve aynı şekilde yeniden açılır; açıldığında Açma/Kapama ışığı 1,5 saniye aralıklarla 4 kez yanıp söner. Düğmenin yerini kendi modelinin kılavuzunda bul."
  - q: "Kumandaya basınca klimadan ses gelmiyor. Ne demek?"
    a: "Arçelik'e göre tuşa bastığında klimadan bip sesi gelmiyorsa sinyal alınmamış demektir; kumandayı iç ünitenin alt tarafındaki sinyal alıcıya doğrultup tuşa yeniden bas ve arada engel olmadığından emin ol. Kılavuz, kumanda başka yöne tutulursa başka elektronik cihazları çalıştırabileceğini de yazıyor."
  - q: "Klimadan garip bir ses ya da koku geliyor. Ne yapmalıyım?"
    a: "Arçelik kılavuzu üründen garip bir ses, duman ya da koku gelirse ürünü sigortadan kapatmanı ve yetkili servisi aramanı istiyor. Bu durumda klimayı yeniden çalıştırmayı deneme."
images:
  coverAlt: "Akşamüstü bir yatak odasında komodinin üzerinde açık pil kapağıyla duran klima kumandası, yanında iki kalem pil ve arkada kapalı duvar kliması"
---

Kumandaya basıyorsun, klimadan ne ses geliyor ne de ön paneldeki gösterge yanıyor. Arçelik'in Türkçe kullanma kılavuzu bu durumu "Problemler için çözüm önerileri" bölümünde **"Klima çalışmıyor."** başlığıyla açıyor ve iki kontrol veriyor: **"Sigortanın atıp atmadığını ve devre kesiciyi kontrol edin."** ve **"Zamanlayıcıyı ayarlama sırasında bir hata yapıp yapmadığınızı kontrol edin."** Aynı bölümdeki iki satır daha bu belirtiye bağlanıyor: 3 dakikalık koruma ve silik kumanda göstergesi. Bu yazıda bunları, kılavuzun kumanda ve otomatik başlatma notlarıyla birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce sigorta ve devre kesici. Elektrik yeni geldiyse 2,5-3 dakika, klimayı kapatıp açtıysan 3 dakika bekle. Kumandadaki açılma-kapanma programına ve saate bak. Kumanda ekranı silikse pilleri yeniden tak ya da değiştir; kumandayı alıcıya doğrult, bip sesini dinle. Sürerse → bayi ya da Arçelik yetkili servisi.

## Arçelik'in bu belirti için verdiği satırlar

| Kılavuzdaki satır | Arçelik'in açıklaması | Kimin işi |
|---|---|---|
| Klima çalışmıyor: sigorta ya da devre kesici atmış olabilir | Sigortayı ve devre kesiciyi kontrol et | Kontrol senin; tesisata müdahale servisin |
| Klima çalışmıyor: zamanlayıcı yanlış ayarlanmış olabilir | Ayarda hata yapıp yapmadığını kontrol et | Senin, kumandadan |
| Tekrar çalıştırınca 3 dakika kadar çalışmıyor | Klimanın korunması için bir önlem; 3 dakika sonunda çalışır | Senin, bekle |
| Kumanda göstergesi silik ya da hiç göstermiyor | Piller bitmiş ya da yanlış yerleştirilmiş olabilir | Senin, pil |

Kılavuzun "Otomatik başlatma" notu da önemli: elektrik kesilip geldiğinde klima eski ayarlarıyla yeniden başlar, ama kompresör **2,5-3 dakika** sonra devreye girer. O arada fan en düşük hızda çalışır.

## Adım adım: evde denenecekler

**1. Sigorta ve devre kesici.** Klimanın sigortasının ya da devre kesicisinin atıp atmadığına bak; kapalıysa aç. Arçelik'in "Klimayı açma" tarifi de bu maddeyle başlıyor: "Klimanın sigortası kapalıysa açın." Kılavuz, uzun süre kullanılmayacak üründe elektriğin sigortadan kesilmesini istiyor; klimayı sezon sonunda böyle kapattıysan sigortayı açmayı unutma.

**2. Elektrik yeni geldiyse.** Elektrik yeni geldiyse kompresörün devreye girmesi için 2,5-3 dakika bekle. Kılavuza göre klima çalışırken elektrik kesilirse ayarlarını hafızasında tutar ve elektrik gelince önceki ayarlardan çalışmaya başlar.

**3. Üç dakikalık koruma.** Klimayı kapatıp hemen yeniden açtıysan 3 dakika bekle. Arçelik bunu arıza değil, klimayı korumak için geliştirilmiş bir önlem olarak tanımlıyor.

**4. Zamanlayıcı ve saat.** Kumandada otomatik açılma ya da kapanma ayarı varsa kontrol et; kumanda saatinin ve AM/PM seçiminin doğru olduğuna bak, gerekmiyorsa ayarı iptal et. Arçelik, program ayarında kumandanın saati esas alındığı için saatin doğru ayarlanmasının büyük önem taşıdığını yazıyor; öğleden önce ve sonra ibarelerine dikkat etmeni istiyor. Bu fonksiyon bazı ürünlerde yok.

**5. Kumanda pilleri.** Kumanda ekranı silik ya da boşsa iki adet AAA 1,5 V pili artı-eksi yönüne dikkat ederek yeniden tak ya da aynı tipte yenileriyle değiştir. Kılavuz eski ve yeni pili birlikte kullanmamanı, şarj edilebilir pil takmamanı istiyor. Pillerden sıvı akmışsa kumandayı kullanma.

**6. Kumandanın yönü.** Kumandayı iç ünitenin alt tarafındaki sinyal alıcıya doğrult, arada engel bırakma; bip sesi gelmezse tuşa yeniden bas. Arçelik'e göre bip sesi yoksa sinyal alınmamıştır. Kumandayı doğrudan güneş alan bir yerde ya da ısı yayan bir cihazın yanında bırakma.

**7. Verici ve alıcı.** Kumandanın sinyal vericisini ve iç ünitedeki alıcıyı yumuşak bir bezle sil. Kılavuz bunu uygun çalışma şartları için öneriyor. Alıcıya ulaşmak için uzanman gerekiyorsa sağlam bir tabure kullan.

**8. Sürerse servis.** Sorun sürerse ürünü aldığın bayiye ya da Arçelik yetkili servisine başvur. Yetkili servislerin güncel iletişim bilgileri arcelik.com.tr'de.

## Ne zaman servis?

Arçelik'in çözüm önerileri bölümü şu cümleyle kapanıyor: talimatları uygulamana rağmen sorunu gideremezsen ürünü satın aldığın bayi ya da yetkili servise başvur, **çalışmayan ürünü kendin onarmayı asla deneme.**

| Durum | Kimin işi |
|---|---|
| Sigortayı açma, bekleme süreleri, zamanlayıcı, pil, kumandanın yönü | Senin, bu rehberdeki adımlar |
| Bu kontrollerden sonra klima hâlâ açılmıyor | Bayi ya da Arçelik yetkili servisi |
| Klimadan garip ses, duman ya da koku | Ürünü sigortadan kapat, yetkili servisi ara |
| Klimanın elektriksel parçaları suyla temas etti | Ürünü kapat, yetkili servisi ara |

⛔ Sigortayı değiştirmeye, prize, kabloya ya da iç ünitenin içine müdahale etme. Kılavuz kurulum ve tamir işlerinin her zaman yetkili servise yaptırılmasını istiyor.

Klima açılıyor ama ekranda bir kod görüyorsan [Arçelik klima hata kodları](/blog/arcelik-klima-hata-kodlari/) yazısına bak. Klima çalışıyor ama serinletmiyorsa [Arçelik klima soğutmuyor](/blog/arcelik-klima-sogutmuyor/), ısıtmıyorsa [Arçelik klima ısıtmıyor](/blog/arcelik-klima-isitmiyor/) yazısı işine yarar. Markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) ve [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazılarında.

---

**Kaynak künyesi.** Çözüm önerileri, klimayı açma tarifi, kumanda ve pil notları, otomatik açılma-kapanma ile otomatik başlatma Arçelik'in download.arcelik.com.tr'deki Türkçe kullanma kılavuzundan (Eco Ionizer Inverter 182410 A / 232410 A) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
