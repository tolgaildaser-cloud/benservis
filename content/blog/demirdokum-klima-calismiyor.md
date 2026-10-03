---
title: "DemirDöküm klima çalışmıyor: evde kontrol"
description: "DemirDöküm klima açılmıyorsa kılavuzun arıza giderme tablosu: fiş ve besleme, kumanda pilleri, 3 dakika koruma, kumandasız acil durum işletimi."
slug: "demirdokum-klima-calismiyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belgeler bu koşuda (07:51) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı demirdokum.com.tr (DemirDöküm'ün kendi alan adı; adres yalnız yer bulmak için web aramasından).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/ · sayfa = PDF sayfası (Kion'da basılı sayfa numarası bir eksik: PDF s.19 = basılı 18).
#  DK) DemirDöküm "Kion lnverter" Kullanma kılavuzu 8000034092_00 (18.12.2024), DDAl2-090/120/180/240WNO dış · WNI iç, 24 s., md5 19e3967d670a1373896a358349b1a2e5
#      https://www.demirdokum.com.tr/downloads/kion-klima-kullanma-kilavuzu-3005527.pdf
#      s.19 "A Arıza giderme" Arıza | Olası nedenler | Giderilmesi:
#        "Uzaktan kumanda ekranı açılmıyor | Pillerin doğru takılıp takılmadığını kontrol edin. | Kutup bağlantılarının doğru olmasına dikkat edin." / "Piller boşalmış | Pilleri değiştirin. Her zaman iki pili aynı anda değiştirin."
#        "Sistem hemen çalışmaya başlamıyor | Sistem bir kapatma sonrasında hemen çalışmaya başlamıyor. Fiş prizden çekilip tekrar takıldığında ürünü korumak için koruma devresi etkinleşir. | Koruma amacıyla sistem her durdurma sonrasında en az 3 dakika kapalı kalır. Bu sürenin sonunda yeniden açın."
#        "Sistem tamamen devre dışı (fan çalışmıyor) | Şebeke bağlantı kablosu bağlı değil | Fişi prize takın ve iç üniteyi çalıştırın." / "Elektrik beslemesi kesilmiş | Sistemin/Tesisatın elektrik beslemesini tekrar açın." / "Sigorta arızalı | Yetkili servisi bilgilendirin."
#      s.11 "4.2 Pillerin takılması" → "Ürünü uzaktan kumanda ile çalıştırıyorsanız, uzaktan kumandayı doğrudan iç üniteye doğrultun. Şarj edilebilir pil kullanmayın." / "Sistem uzun süre kullanılmayacaksa pilleri uzaktan kumandadan çıkarın." / "Uzaktan kumandayı doğrudan güneş ışığı alan bir yere veya ısı yayan bir cihazın yakınına koymayın." / "1. Pil bölmesi kapağını (1) ok yönünde kaydırarak çıkarın. 2. 2 adet AAA pil yerleştirin (2). Kutupların doğru olduğundan emin olun (pil bölmesine bakın). 3. Pil bölmesi kapağını (1) yerine sıkıca oturana kadar geriye doğru iterek yerine takın. ▽ Ekran açılmazsa pillerin doğru takılıp takılmadığını kontrol edin." / "4.3 ... Ürünü açmak veya kapatmak için [Açık/Kapalı] butonuna basın."
#      s.16 "5.9 Acil durum işletiminin kullanılması" → "Uzaktan kumanda yoksa, klimayı aşağıdaki ayarlarla çalıştırmak için Açma/Kapama (1) tuşunu kullanın:" Oda sıcaklığı > 24 °C → Soğutma, 22 °C · 21-24 °C → Nem alma, 23 °C · < 21 °C → Isıtma, 24 °C · iç ünite fan hızı yüksek.
#      s.16 "5.10 Test işletiminin etkinleştirilmesi" → "Ünitenin Açma/Kapama (1) tuşunu yaklaşık 3 saniye basılı tutun." / "Test işletimi sırasında ürün, oda sıcaklığından bağımsız olarak 18 dakika boyunca maksimum fan devir sayısında soğutma devresinde çalışır." / "Test işletimini iptal etmek için iç ünitedeki Açma/Kapama tuşuna veya uzaktan kumandadaki [Açık/Kapalı] tuşuna basın." / "Test işletiminde uzaktan kumandadan bir sinyal alındığında, ürün uzaktan kumanda ayarlarına göre çalışmaya başlar."
#      s.14 "Soğutma modu: Ayarlanan sıcaklık oda sıcaklığından yüksekse, soğutma modu başlatılmaz. Ayarlanan sıcaklık değerini düşürün. Isıtma devresi: Ayarlanan sıcaklık oda sıcaklığından düşükse, ısıtma devresi başlatılmaz. Ayarlanan sıcaklık değerini artırın."
#      s.18 "7.1 Ürünü geçici olarak devre dışı bırakma" → "Sezon sonunda pilleri uzaktan kumandadan çıkarın."
#      s.5 "1.3.8 Yanlış veya yapılmayan bakım ve onarım nedeniyle yaralanma ve maddi hasar tehlikesi" → "Hiçbir şekilde kendi başınıza üründe bakım çalışmaları veya onarım gerçekleştirmeyin." / "Arızaların ve hasarların hemen yetkili bir teknik servis tarafından giderilmesini sağlayın." · s.5 "Elleriniz ıslak veya nemli iken ürüne temas etmeyin."
#      s.10 "Tüm yetkili servis istasyonu bilgilerimiz Ticaret Bakanlığı tarafından oluşturulan ''Servis Bilgi Sistemi''nde (www.servis.gov.tr ) yer almaktadır."
#  A7) DemirDöküm "A7 inverter 09/12/18/24 İç" Kullanma kılavuzu 8000014592_01 (19.12.2023), 28 s., md5 9e5fd019bca38f63bf0cbd8a0bce4e1d
#      https://www.demirdokum.com.tr/downloads/dokumanlar-kullanma-klavuzu-2860543.pdf
#      s.23 "İç ünite ekranında E07 gösteriliyor. | Klima sisteminin münferit iç üniteleri aynı işletme modunda konfigüre edilmemiş. | Tüm iç üniteleri soğutma devresine veya ısıtma devresine ayarlayın." · s.22 kumanda ve "Sistem tamamen devre dışı" satırları Kion ile aynı.
# YAKIN KOPYA: DemirDöküm'ün yayında klima sayfası yok (yalnız kombi). Vaillant grubunun yayında klima sayfası yok. Aynı belirtinin yayındaki başka marka sayfalarıyla ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: sigorta (kılavuz "Yetkili servisi bilgilendirin" diyor) · tesisat/pano müdahalesi (#31; "beslemeyi tekrar açın" satırı yalnız kesintinin bitmesi ve klimanın anahtarının açık olması olarak verildi) · E07 dışında hata kodu anlamı (Kion kılavuzunda yok) · fiyat.
# Alıntı denetim tablosu: demirdokum-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "2 adet AAA pil"]
steps:
  - "İç ünite hiç tepki vermiyor, fan da dönmüyorsa klimanın fişinin prize takılı olduğunu kontrol et."
  - "Evde elektrik kesintisi varsa beslemenin geri gelmesini bekle, sonra iç üniteyi kumandayla yeniden çalıştır."
  - "Kumandanın ekranı açılmıyorsa pil bölmesini kaydırıp aç ve iki pilin artı-eksi yönünün bölmedeki işaretle aynı olduğunu kontrol et."
  - "Piller boşsa iki AAA pili aynı anda yenisiyle değiştir; şarj edilebilir pil kullanma."
  - "Kumandayı tuşa basarken doğrudan iç üniteye doğrult."
  - "Klimayı kapatıp hemen açtıysan ya da fişi çekip yeniden taktıysan en az 3 dakika bekle, sonra yeniden aç."
  - "Kumanda hâlâ çalışmıyorsa iç ünitedeki Açma/Kapama tuşuna basarak acil durum işletimini başlat."
faq:
  - q: "DemirDöküm klima neden hiç açılmaz?"
    a: "DemirDöküm'ün Kion kılavuzu 'Sistem tamamen devre dışı (fan çalışmıyor)' satırında üç neden sayıyor: şebeke bağlantı kablosunun bağlı olmaması, elektrik beslemesinin kesilmesi ve sigortanın arızalı olması. İlk ikisini evde kontrol edebilirsin; sigorta arızasında kılavuz yetkili servisi bilgilendirmeni istiyor."
  - q: "Klimayı kapatıp açınca hemen çalışmıyor. Arıza mı?"
    a: "Hayır. Kılavuza göre sistem koruma amacıyla her durdurmadan sonra en az 3 dakika kapalı kalır; fiş prizden çekilip takıldığında da koruma devresi devreye girer. Bu sürenin sonunda klimayı yeniden aç."
  - q: "Kumandam kayboldu ya da bozuldu. Klimayı nasıl çalıştırırım?"
    a: "Kion kılavuzu bu durum için iç ünitedeki Açma/Kapama tuşunu gösteriyor. Ünite oda sıcaklığına göre modu kendisi seçer: 24°C'nin üstünde 22°C'de soğutma, 21-24°C arasında 23°C'de nem alma, 21°C'nin altında 24°C'de ısıtma; fan yüksek devirde çalışır. Tuşu yaklaşık 3 saniye basılı tutarsan 18 dakikalık test işletimi başlar."
  - q: "Birden fazla iç ünitem var, ekranda E07 yazıyor. Ne yapmalıyım?"
    a: "DemirDöküm'ün A7 inverter kılavuzuna göre E07, sistemdeki iç ünitelerin aynı işletme modunda olmadığını gösterir. Çözüm olarak tüm iç üniteleri soğutmaya ya da tüm iç üniteleri ısıtmaya ayarlaman isteniyor."
images:
  coverAlt: "Akşam saatinde bir oturma odasında sehpanın üzerinde pil bölmesi açık beyaz bir klima kumandası ve yanında iki ince kalem pil, arkada duvarda kapalı split klima"
---

Kumandanın tuşuna basıyorsun ama klimada ne ses var ne hareket. DemirDöküm'ün Kion inverter kullanma kılavuzu bu tabloyu kılavuzun sonundaki "Arıza giderme" ekinde üç ayrı satırla veriyor: kumanda ekranının açılmaması, sistemin hemen çalışmaya başlamaması ve sistemin **"tamamen devre dışı (fan çalışmıyor)"** kalması. Çözüm sütunu ise kısa: **"Fişi prize takın ve iç üniteyi çalıştırın."**, **"Pilleri değiştirin. Her zaman iki pili aynı anda değiştirin."**, **"Koruma amacıyla sistem her durdurma sonrasında en az 3 dakika kapalı kalır."** Kumanda hiç işe yaramıyorsa kılavuzun bir de kumandasız çalıştırma yolu var. Aşağıda hepsini sırasıyla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fan bile dönmüyorsa önce fiş ve elektrik. Kumanda ekranı karanlıksa pil yönüne bak, iki AAA pili birlikte değiştir. Kumandayı iç üniteye doğrult. Kapatıp açtıysan 3 dakika bekle. Kumanda yine işe yaramıyorsa iç ünitedeki Açma/Kapama tuşu. Sigorta arızası → DemirDöküm yetkili servisi.

## Kılavuzun "Arıza giderme" tablosu

| Ne oluyor | Kılavuzdaki olası neden | Ne yapmalı |
|---|---|---|
| Kumandanın ekranı açılmıyor | Piller ters takılmış ya da boşalmış | Kutupları düzelt, iki pili birlikte değiştir |
| Kapatıp açınca klima hemen başlamıyor | Koruma: her durmadan sonra en az 3 dakika kapalı kalır | Bekle, sonra yeniden aç |
| Fan da dahil hiçbir şey çalışmıyor | Kablo prize bağlı değil | Fişi tak, iç üniteyi çalıştır |
| Fan da dahil hiçbir şey çalışmıyor | Elektrik beslemesi kesilmiş | Beslemenin gelmesini sağla |
| Fan da dahil hiçbir şey çalışmıyor | Sigorta arızalı | Yetkili servis |

Klima açılıyor ama mod çalışmıyorsa ayarı kontrol et: kılavuza göre soğutmada ayarlanan sıcaklık odadan yüksekse soğutma, ısıtmada ayarlanan sıcaklık odadan düşükse ısıtma başlamaz.

## Adım adım: evde denenecekler

**1. Fiş.** İç ünite hiç tepki vermiyor, fan da dönmüyorsa klimanın fişinin prize takılı olduğunu kontrol et. Kılavuz "fan çalışmıyor" durumunda ilk satıra bağlantı kablosunu koyuyor; fişi takınca iç üniteyi yeniden çalıştırmanı istiyor. Elin ıslakken fişe ve üniteye dokunma.

**2. Elektrik kesintisi.** Evde elektrik kesintisi varsa beslemenin geri gelmesini bekle, sonra iç üniteyi kumandayla yeniden çalıştır. Klima açma/kapama tuşuyla açılır ve kapanır.

**3. Pil yönü.** Kumandanın ekranı açılmıyorsa pil bölmesini kaydırıp aç ve iki pilin artı-eksi yönünün bölmedeki işaretle aynı olduğunu kontrol et. Kapağı yerine oturana kadar geriye doğru iterek kapat.

**4. Yeni piller.** Piller boşsa iki AAA pili aynı anda yenisiyle değiştir; şarj edilebilir pil kullanma. Kılavuz tek pil değiştirmeyi değil, ikisini birlikte değiştirmeyi öneriyor.

**5. Kumandanın yönü.** Kumandayı tuşa basarken doğrudan iç üniteye doğrult. Kumandayı doğrudan güneş alan bir yerde ya da ısı yayan bir cihazın yanında bırakma.

**6. Üç dakika.** Klimayı kapatıp hemen açtıysan ya da fişi çekip yeniden taktıysan en az 3 dakika bekle, sonra yeniden aç. DemirDöküm bu beklemeyi ürünü korumak için yapılan normal bir işlem olarak anlatıyor.

**7. Kumandasız çalıştırma.** Kumanda hâlâ çalışmıyorsa iç ünitedeki Açma/Kapama tuşuna basarak acil durum işletimini başlat. Tuşun yeri kılavuzun "Acil durum işletiminin kullanılması" bölümündeki şekilde gösteriliyor. Bu işletimde ünite modu oda sıcaklığına göre kendisi seçer ve fan yüksek devirde çalışır. Tuşu yaklaşık 3 saniye basılı tutarsan 18 dakikalık test işletimi başlar; iptal etmek için aynı tuşa yeniden bas.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Fiş, elektrik kesintisi, pil, kumandanın yönü, 3 dakika, acil durum tuşu | Senin, bu rehberdeki adımlar |
| Sigorta arızalı | DemirDöküm yetkili servisi |
| Bu adımlardan sonra da çalışmayan ünite | DemirDöküm yetkili servisi |
| Birden fazla iç ünitede E07 (A7 kılavuzu) | Tüm iç üniteleri aynı moda al; sürerse servis |
| Soğutucu madde kaçağı şüphesi | Yetkili bayi ya da servis |

⛔ DemirDöküm kılavuzu üründe kendi başına bakım ya da onarım yapılmamasını, arıza ve hasarların hemen yetkili teknik servis tarafından giderilmesini istiyor. Yetkili servis bilgileri kılavuzda belirtildiği gibi Ticaret Bakanlığı'nın Servis Bilgi Sistemi'nde (servis.gov.tr) yer alıyor.

Klima açılıyor ama serinletmiyorsa [DemirDöküm klima soğutmuyor](/blog/demirdokum-klima-sogutmuyor/), kışın ısıtmıyorsa [DemirDöküm klima ısıtmıyor](/blog/demirdokum-klima-isitmiyor/) yazısına bak. Markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) ve [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazılarında; ekrandaki kodlar için genel liste [klima arıza kodları](/blog/klima-ariza-kodlari/) yazısında.

---

**Kaynak künyesi.** Arıza giderme tablosu, pil takma, acil durum ve test işletimi, sıcaklık ayarı notu ve güvenlik uyarıları DemirDöküm'ün demirdokum.com.tr'deki "Kion lnverter" kullanma kılavuzundan (8000034092_00), E07 satırı DemirDöküm "A7 inverter" kullanma kılavuzundan (8000014592_01) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
