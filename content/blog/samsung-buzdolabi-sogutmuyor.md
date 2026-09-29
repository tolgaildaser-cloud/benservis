---
title: "Samsung buzdolabı soğutmuyor: evde kontrol"
description: "Samsung buzdolabı soğutmuyorsa Samsung'un sırası: fiş, sıcaklık ayarı, kapı ve conta, hava kanalları, 5 cm boşluk ve servis sınırı."
slug: "samsung-buzdolabi-sogutmuyor"
date: "2026-09-29"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200.
# Yerel kopya: blog-taslaklar/kaynak-samsung-buzdolabi-sprint/2026-09-29/ (MD5-2026-09-29.txt). PDF'ler pdftotext -layout; sayfa = basılı sayfa (bu belgelerde PDF sayfasıyla aynı).
# #88: bilgiler YALNIZ Samsung Türkiye'nin kendi belgelerinden. Web araması kullanılmadı; destek sayfalarının yeri Samsung TR destek sayfalarındaki iç linklerden alındı.
# (S9) Samsung TR destek "Samsung Buzdolabım soğutmadığında ne yapabilirim?" (Son Güncelleme 2025-01-23)
#      https://www.samsung.com/tr/support/home-appliances/buzdolabim-sogutmadiginda-ne-yapabilirim/  md5 f059a5872be39cd8549348efae864b6d (HTML, dinamik)
#      "Güç kablosunun düzgün bağlandığından emin olun." / "Sıcaklık ayarını kontrol edin." / "Uzun süreli elektrik kesintisi, kapıların çok sık açılıp kapatılması, yoğun gıda yüklemeleri gibi durumlar buzdolabınızın soğutmasını etkileyecektir."
#      "Buzdolabını doğrudan güneş ışığından veya ısı kaynaklarından uzak tutun." / "Buzdolabı ile arka ve yan duvarlar veya kabin arasında 5'er cm açıklık olduğundan emin olun." / "Soğuk havayı içeriye üfleyen kanalların kapanmamasına özen gösterin."
# (S11) Samsung TR destek "Samsung Buzdolabım neden soğutmuyor?" (Son Güncelleme 2026-08-21)
#      https://www.samsung.com/tr/support/home-appliances/why-my-samsung-refrigerator-is-not-cooling/  md5 f7046055b95e55c86d4ce95d3d4ac108 (HTML, dinamik)
#      Fiş: "Gücü kesin: Fişi prizden çekin." / "Cihazın içindeki elektrik yükünün tamamen boşalması için 5 dakika kadar bekleyin." / "fişi yeniden takarak cihazı devreye alın."
#      Conta: "Temizlik yapın" / "Temizleme işleminden sonra, buzdolabının uygun sıcaklığa dönebilmesi için 24 saat bekleyin." / "Contalarda yırtılma veya yıpranma gibi bir hasar mevcutsa yetkili servis desteği talep edin."
#      Sıcaklık: "Dondurucu bölmesi için ideal sıcaklık: -19°C" / "Soğutucu bölmesi için ideal sıcaklık: 3°C"; boşluk: "en az 5 cm"; aşırı doluluk hava deliklerini tıkayabilir; temizlik: "Yılda bir kez derinlemesine temizlik".
# (G) Samsung TR kılavuz RB52DS****, 71 s.  md5 edae9a5819b091bc55152ce19142f777
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf
#      s.54: "Sıkıca prize takın." / "Sigortanın çalışır konuma getirilmesini sağlayın." / başka prizde deneme / "Sıcaklık ayarlarını daha soğuk konuma getirin." / "Özellikle bu durumda birkaç saat kapıları açıp kapatmayın."
#      s.55: kapıya temas eden yiyecek; "Bu durumu düzelttiğiniz halde kapılar kapanmıyorsa yetkili teknik servisten yardım talep ediniz."; arka duvara temas eden kap; "Fazla yüklenmiş yiyecekleri dolaptan çıkartmalısınız."; ortam sıcaklığı limitleri.
#      s.36: ilk çalıştırmada "24 saate kadar kesintisiz çalışması gerekir"; s.59: kesinti/fiş sonrası "5-10 dakika sonra buzdolabınız çalışmaya başlayacaktır".
# (C) Samsung TR kılavuz RT6300C, 72 s.  md5 e366feed0f8f0864a2c0acc5f72434f1
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RT47CG6636WW&CttFileID=9644610&CDCttType=UM&VPath=UM%2F202405%2F20240507181007123%2FTMF_RT6300C_DA68-04657M-02_TR.pdf
#      s.52: "Tatil modu etkin." → "Tatil modunu devre dışı bırakın." / "Buzdolabını aşırı yüklemeyin." / boşluk "50 mm'den fazla olması önerilir".
# BİLEREK YAZILMAYANLAR: gaz, kompresör, fan, sensör teşhisi (belgede kullanıcıya verilmiyor); kondenser borularının temizliği adım olarak yazılmadı (arka panel erişimi — yalnız S11'deki yıllık temizlik notuna atıf); soğutma "reset"i dışında hiçbir sıfırlama yazılmadı.
# Kod çıkıyorsa: E09/E10/E11/PC/DE ON yayındaki kod sayfalarına link (bu sayfa kod anlatmaz).
# Alıntı denetim tablosu: samsung-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (dengelenme süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu", "Yumuşak bez", "Ilık su"]
steps:
  - "Buzdolabının fişinin prize tam ve doğru oturduğunu kontrol et."
  - "Fiş takılı olduğu hâlde çalışmıyorsa fişi çek, 5 dakika bekle ve yeniden tak."
  - "Sıcaklık ayarını kontrol et; Samsung soğutucu için 3 °C, dondurucu için -19 °C öneriyor."
  - "Kapıların tam kapandığını ve içerideki yiyeceklerin kapıya değmediğini kontrol et."
  - "Kapı contalarını temizle ve contada yırtık ya da yıpranma olup olmadığına bak."
  - "Yiyecekleri hava kanallarının önünü kapatmayacak, arka duvara değmeyecek şekilde yerleştir; aşırı doluysa azalt."
  - "Buzdolabını güneşten ve ısı kaynaklarından uzak tut; arkasında ve yanlarında en az 5 cm boşluk bırak."
  - "Ayarlardan sonra dengelenmesi için bekle; hâlâ soğutmuyorsa Samsung müşteri hizmetlerine ya da yetkili servise başvur."
faq:
  - q: "Samsung buzdolabı neden soğutmaz?"
    a: "Samsung Türkiye'nin destek sayfaları evde kontrol edilebilecek nedenleri şöyle sayıyor: fişin prize tam oturmaması, yanlış sıcaklık ayarı, kapıların tam kapanmaması, kirli ya da hasarlı kapı contası, güneş ışığı ya da ısı kaynağı, duvara çok yakın yerleşim ve buzdolabının aşırı doldurulması. Samsung ayrıca uzun elektrik kesintisinin, kapıların çok sık açılmasının ve yoğun gıda yüklemesinin soğutmayı etkileyeceğini yazıyor."
  - q: "Samsung buzdolabı kaç derecede olmalı?"
    a: "Samsung Türkiye'nin destek sayfası soğutucu bölme için 3 °C, dondurucu için -19 °C öneriyor. Bazı kılavuzlar farklı bir değer verebilir; örneğin RB52DS kılavuzu soğutucu için +4 °C yazıyor. Kendi modelinin kılavuzundaki değer esastır."
  - q: "Buzdolabı yeni kuruldu, henüz soğumadı. Normal mi?"
    a: "Samsung'un RB52DS kılavuzuna göre buzdolabının prize ilk takıldıktan sonra tamamen soğuyabilmesi için ortam sıcaklığına bağlı olarak 24 saate kadar kesintisiz çalışması gerekir. Bu sürede kapıları sık açıp kapatma ve buzdolabını aşırı doldurma."
  - q: "Elektrik gidip geldi, buzdolabı hemen çalışmadı. Arıza mı?"
    a: "Kılavuza göre ani elektrik kesilmesinde ya da fiş takılıp çıkarıldığında kompresör koruyucu termiği atar ve buzdolabı 5-10 dakika sonra çalışmaya başlar. Samsung bunun için endişe edilecek bir durum olmadığını yazıyor."
  - q: "Kontrolleri yaptım, hâlâ soğutmuyor. Ne yapmalıyım?"
    a: "Samsung'un kılavuzu bu noktada yetkili teknik servisle irtibata geçilmesini istiyor. Contada yırtık ya da yıpranma varsa, ya da yiyecekleri düzelttiğin hâlde kapı kapanmıyorsa da Samsung yetkili servis desteği öneriyor."
images:
  coverAlt: "Mutfakta kapağı açık duran gri, iki kapılı bir buzdolabı; raflarda aralıklı dizilmiş kaplar ve kapının iç kenarındaki lastik conta görünüyor"
---

Buzdolabı çalışıyor gibi ama içerisi yeterince soğumuyor. Samsung Türkiye'nin destek sayfası bu durumda önce evde kontrol edilecek maddeleri sayıyor ve bir uyarıyla başlıyor: **"Uzun süreli elektrik kesintisi, kapıların çok sık açılıp kapatılması, yoğun gıda yüklemeleri gibi durumlar buzdolabınızın soğutmasını etkileyecektir."** Bu yazıda Samsung'un iki destek sayfasındaki sırayı, Türkçe kullanım kılavuzlarının sorun giderme tablosuyla birlikte açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce güç: fiş tam oturuyor mu? Sonra ayar: soğutucu 3 °C, dondurucu -19 °C (Samsung destek sayfası). Sonra hava: kapı ve conta tam kapatıyor mu, hava kanallarının önü açık mı, arkada ve yanlarda en az 5 cm boşluk var mı? Ekranda E09, E10 ya da E11 gibi bir kod varsa önce o kodun sayfasına bak. Hepsi tamamsa ve hâlâ soğutmuyorsa → Samsung yetkili servisi.

## Samsung'a göre nedenler

Samsung'un "Buzdolabım neden soğutmuyor?" sayfası ve kılavuzların sorun giderme tablosu şu nedenleri sayıyor:

| Neden | Evde kontrol edilebilir mi? |
|---|---|
| Fiş prize tam oturmamış | Evet |
| Sıcaklık ayarı yanlış | Evet, kontrol panelinden |
| Kapılar tam kapanmıyor, yiyecekler kapıya değiyor | Evet |
| Kapı contası kirli | Evet, temizlik |
| Kapı contası yırtık ya da yıpranmış | Hayır, yetkili servis |
| Güneş ışığı ya da ısı kaynağı yakınında | Evet, yerleşim |
| Duvara çok yakın, 5 cm'den az boşluk | Evet, yerleşim |
| Aşırı doluluk, hava kanallarının önü kapalı | Evet |
| Tatil modu açık (bu modu olan modellerde) | Evet, kontrol panelinden |

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Samsung'un ilk maddesi: güç kablosunun düzgün bağlandığından emin ol. Kılavuzun tablosu fiş prize uygun takılmamışsa **sıkıca prize takılmasını** istiyor.

**2. Gerekirse yeniden başlat.** Fiş takılı olduğu hâlde cihaz çalışmıyorsa Samsung'un tarifi şu: **fişi prizden çek** (ya da bağlı olduğu sigortadan gücü kapat), cihazın içindeki elektrik yükünün boşalması için **5 dakika kadar bekle**, sonra fişi yeniden tak. Kılavuza göre fiş takılıp çıkarıldıktan sonra buzdolabı 5-10 dakika sonra çalışmaya başlar; bu bekleme normaldir.

**3. Sıcaklık ayarına bak.** Samsung'un destek sayfası ideal değerleri şöyle veriyor: **soğutucu 3 °C, dondurucu -19 °C.** Kılavuzun tablosu da yetersiz soğutmada sıcaklık ayarlarının daha soğuk konuma getirilmesini istiyor. Bazı modellerde **Tatil modu** vardır; RT6300C kılavuzuna göre bu mod açıksa soğutma zayıf kalabilir ve modun devre dışı bırakılması gerekir.

**4. Kapıları kontrol et.** Samsung, kapıların aralık kalmasının soğuk havanın dışarı kaçmasına neden olduğunu yazıyor. Kılavuza göre sebep çoğu zaman **dolabın içine yüklenen yiyeceklerin kapıya temas etmesidir.** Kılavuz ayrıca kapıların sık açılıp uzun süre açık kalmasının da soğutmayı zayıflattığını, bu durumda **birkaç saat kapıların açılıp kapatılmamasını** istiyor.

**5. Contayı temizle.** Samsung'a göre kapı contaları temiz, yıpranmamış ve yırtılmamış olmalı; kirlenen conta soğuk havanın kaçtığı boşluklar oluşturur. Conta kirliyse ya da üzerinde buzlanma varsa temizle; Samsung'un kapı sayfası lastiklerin **ılık ya da sıcak suyla dikkatlice silinmesini** öneriyor. Samsung, temizlikten sonra buzdolabının uygun sıcaklığa dönebilmesi için **24 saat beklenmesini** istiyor.

**6. Hava kanallarını aç.** Samsung'un notu: çok fazla gıda buzdolabının havalandırmasını engelleyebilir, **soğuk havayı içeri üfleyen kanalların kapanmamasına** özen göster. Kılavuzun tablosu arka duvara temas eden kap ya da yiyeceklerin hava dolaşımını engelleyebileceğini ve buzdolabı aşırı doluysa **fazla yüklenmiş yiyeceklerin çıkarılmasını** yazıyor.

**7. Yerleşime bak.** Samsung buzdolabının **doğrudan güneş ışığından ve ısı kaynaklarından uzak** tutulmasını, arka ve yan duvarlarla ya da dolapla arasında **en az 5 cm** boşluk bırakılmasını istiyor. Destek sayfasına göre duvara çok yakın yerleşim, ısının dışarı atılması için gereken hava akışını kısıtlar.

**8. Bekle, sürerse servis.** Ayarları değiştirdikten ya da contayı temizledikten sonra buzdolabına dengelenmesi için zaman tanı. Kılavuzun cümlesi açık: cihaz hâlâ normal çalışmasına devam etmiyorsa **Samsung yetkili teknik servisi ile irtibata geç.**

## Yeni kurulduysa ya da elektrik yeni geldiyse

Samsung'un RB52DS kılavuzunda bu iki durum için bekleme süresi yazıyor:

- Buzdolabının prize ilk takıldıktan sonra tamamen soğuyabilmesi için, ortam sıcaklığına bağlı olarak **24 saate kadar** kesintisiz çalışması gerekir. Bu sürede kapıları sık açıp kapatma ve buzdolabını aşırı doldurma.
- Ani elektrik kesilmesinde ya da fiş takılıp çıkarıldığında kompresör koruyucu termiği atar; buzdolabı **5-10 dakika sonra** çalışmaya başlar.

Kılavuz ayrıca çalışma ortam sıcaklığının kılavuzda belirtilen limitler içinde olması gerektiğini hatırlatıyor; soğuk ya da çok sıcak bir odadaysa kendi modelinin kılavuzundaki aralığa bak.

## Ekranda kod varsa

Bazı Samsung serilerinde buzdolabı soğutma sorununu göstergede bir kodla bildirir. Kod varsa o kodun sayfası daha nokta atışıdır:

- Soğutucu yeterince soğuk değil: [Samsung buzdolabı E10 hatası](/blog/samsung-buzdolabi-e10-hatasi/)
- Dondurucu yeterince soğuk değil: [Samsung buzdolabı E09 hatası](/blog/samsung-buzdolabi-e09-hatasi/)
- Soğutucu gereğinden soğuk: [Samsung buzdolabı E11 hatası](/blog/samsung-buzdolabi-e11-hatasi/)
- Ekranda PC ya da DE ON: [Samsung buzdolabı PC hatası](/blog/samsung-buzdolabi-pc-hatasi/) · [Samsung buzdolabı DE ON hatası](/blog/samsung-buzdolabi-de-on-hatasi/)

Diğer kodlar için [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) yazısına bakabilirsin.

## Ne zaman servis

| Durum | Kimin işi |
|---|---|
| Fiş, sıcaklık ayarı, Tatil modu, yiyecek düzeni, yerleşim | Senin, bu rehberdeki adımlar |
| Conta kirli | Senin, temizlik |
| Contada yırtılma ya da yıpranma | Samsung yetkili servisi |
| Yiyecekleri düzelttiğin hâlde kapı kapanmıyor | Samsung yetkili servisi |
| Başka prizde de çalışmıyor, sigorta sorunu | Kılavuza göre uzman bir elektrikçi |
| Bütün kontrollere rağmen soğutmuyor | Samsung yetkili servisi |

⛔ **Kendin-çöz sınırı burada biter.** Ayar, yükleme, kapı, conta temizliği ve yerleşim kullanıcıya; soğutma sisteminin içi servise aittir. Samsung'un destek sayfası da bazı soğutma sorunlarının uzman bir teknisyenin müdahalesini gerektirdiğini yazıyor.

Contayı nasıl temizleyeceğini [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısında anlattık. Markadan bağımsız diğer sebepler için [buzdolabı soğutmuyor](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısına bakabilirsin. Soğutmayla birlikte içeride buz birikiyorsa kardeş yazı: [Samsung buzdolabı buzlanma yapıyor](/blog/samsung-buzdolabi-buzlanma-yapiyor/).

## Servisi aramadan önce iki dakikalık özet

1. Sorun bir elektrik kesintisinden, ilk kurulumdan ya da çok yiyecek koyduktan sonra mı başladı?
2. Ekranda bir kod var mı?
3. Sıcaklık ayarı kaç derecede, Tatil modu açık mı?
4. Kapı tam kapanıyor mu, contada yırtık var mı?
5. Buzdolabının arkasında ve yanlarında 5 cm boşluk var mı?

Bu beşine cevabın varsa servise "buzdolabı soğutmuyor" yerine somut bir tablo anlatabilirsin.

Buzdolabının modelini ve belirtisini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Nedenler ve adımlar Samsung Türkiye'nin "Buzdolabım soğutmadığında ne yapabilirim?" ve "Buzdolabım neden soğutmuyor?" destek sayfalarından; sorun giderme tablosu, bekleme süreleri ve servis sınırı Samsung'un Türkçe kullanım kılavuzlarından (RB52DS ve RT6300C serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
