---
title: "Daikin klima soğutmuyor: evde kontrol"
description: "Daikin klima yeterince soğutmuyorsa Daikin kılavuzunun sırası: mod ve sıcaklık, Econo, hava akışı, kapı-pencere, filtre ve servis sınırı."
slug: "daikin-klima-sogutmuyor"
date: "2026-09-29"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# Belgeler 2026-09-28'de curl -sL -A "Mozilla/5.0" ile indirildi (HTTP 200); 2026-09-29'da yeniden indirildi, hepsi HTTP 200, PDF md5'leri birebir aynı.
# PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu. Web araması yalnız belgelerin YERİNİ bulmak için; hiçbir cümle forumdan/servis sitesinden alınmadı.
#  M) Daikin FTXM-M/CTXM-M kullanım kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1  (sayfa = PDF sayfası; basılı numara bir eksik)
#     s.42 "Soğutma (Isıtma) etkisi zayıf." → "Hava filtreleri temiz mi?" / "İç ve dış ünitelerin hava giriş veya çıkışını engelleyen bir şey var mı?" / "Sıcaklık ayarı doğru mu?" / "Pencereler ve kapılar kapalı mı?" / "Hava üfleme hızı ve hava üfleme yönü doğru şekilde ayarlandı mı?"
#     s.42 "İç üniteden buğu çıkıyor." → "soğutma çalıştırması sırasında soğuk hava akışı nedeniyle buğuya dönüşmesi durumunda karşılaşılır."
#     s.41 "Klima çalışma sırasında hava üflemeyi kesiyor." → "Ayar sıcaklığına ulaşıldıktan sonra hava üfleme hızı düşürülür ve ... (soğutma modunda) nem seviyesinin yükselmemesini sağlamak için çalışma durdurulur."
#     s.41 "Çalışma hemen başlamıyor." → "Bu önlem klimanın korunması içindir. Yaklaşık 3 dakika beklemeniz gerekir."
#     s.14 "Pencereleri bir güneşlik veya perdeyle örtün." / "Tıkalı hava filtreleri çalışma verimliliğini düşürür ... Filtreleri yaklaşık 2 haftada bir temizleyin."
#     s.35 İKAZ "Temizlemeden önce, çalışmayı durdurduğunuzdan ve kesiciyi kapalı konuma getirdiğinizden emin olun." / "İç ünitenin alüminyum kanatlarına dokunmayın." / 40°C'den sıcak su, sert fırça kullanmayın
#     s.37 filtre: "Hava filtrelerini çekerek çıkartın." / "Hava filtrelerini suyla yıkayın veya elektrik süpürgesiyle temizleyin." / "ılık suyla seyreltilmiş nötr deterjanla yıkayın ve ardından gölgede kurumasını bekleyin." / "Filtreleri başlangıçtaki şekilde yerleştirin ve ön paneli kapatın."
#     s.40 "düzenli aralıklarla soğutucu kaçaklarının kontrol edilmesi gerekebilir. Daha fazla bilgi için lütfen yetkili servise başvurun." / uzman bakımı önerisi
#     s.5  "Dış ünite üzerine oturmayın, ünite üzerine bir şey koymayın ve üniteyi çekmeyin."
#  F) Daikin FTXF50~71 kullanıcı başvuru kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
#     s.34 "Sistem çalışıyor ancak soğutma veya ısıtma yetersiz." → hava debisi, sıcaklık ayarı, hava akış yönü, engeller; "(üniteden hava üfleniyor)" → "Hava filtrelerinin tıkalı olup olmadığını kontrol edin." / "Rüzgarın içeri girmesini önlemek için kapıları ve pencereleri kapatın." / "Ünitenin Econo işletiminde çalışıp çalışmadığını kontrol edin." / "İç ünitenin doğrudan altında veya yanında mobilyaların olup olmadığını kontrol edin. Mobilyaları taşıyın."
#     s.34 son paragraf: "montajcınızla temas kurun ve belirtileri, ünitenin tam model ismini (mümkünse imalat numarası ile birlikte) ve kurulma tarihini ... bildirin."
#     s.26 "Soğutma işletimi sırasında, perdeler veya güneşlikler kullanarak odaya direk güneş ışığı girişini önleyin." / hava akış yönü "Soğutma veya kurutma işletimi sırasında yukarı"
#  T2) daikin.com.tr "Hangi Durumlarda Servis Çağırmalısınız?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/hangi-durumlarda-servis-cagirmalisiniz  md5 1d34c92f2cffccf7fd7c11edc8844f94 (2026-09-29; sayfa dinamik, metin 28 Eyl kopyasıyla birebir)
#     "Doğru moda ayarlanmasına rağmen klima soğuk ya da sıcak hava üflemiyorsa, ... Sorun gaz eksikliği, kompresör arızası veya sensör kaynaklı olabilir. Servis müdahalesi gereklidir."
#  T5) daikin.com.tr "Klima Kendiliğinden Kapanma Nedenleri"  https://www.daikin.com.tr/bilgi-ve-ipuclari/klima-kendiliginden-kapanma-nedenleri  md5 fcd8fe01220ebf81f5e7d831cdb6f9da
#     "Sıcaklık ayarını ortamdan birkaç derece daha düşük (soğutma için) veya yüksek (ısıtma için) yapmayı deneyin."
# BİLEREK YAZILMAYANLAR: gaz dolumu / kaçak arama (servis işi, #31); "kaç BTU gerekir" hesabı; önerilen derece rakamı (Daikin kılavuzunda soğutma için sayı yok); dış ünitenin yıkanması; iç ünitenin iç temizliği (kılavuza göre uzman bakımı).
#   M s.37'de "Hava filtrelerinin haftada 2 defa temizlenmesi önerilir" yazıyor, aynı kılavuzun s.14 ve s.35'i "2 haftada bir" diyor → gövdede "yaklaşık 2 haftada bir" kullanıldı.
# Alıntı denetim tablosu: daikin-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Nötr deterjan", "Sağlam bir tabure"]
steps:
  - "Kumandada modun SOĞUTMA olduğunu ve sıcaklığın oda sıcaklığından birkaç derece düşük ayarlandığını kontrol et."
  - "Ekranda ECONO işletiminin açık olup olmadığına bak."
  - "Hava üfleme hızını ve hava akış yönünü kontrol et; soğutmada Daikin akış yönünü yukarı öneriyor."
  - "Kapı ve pencereleri kapat, güneş alan pencereleri perde ya da güneşlikle ört."
  - "İç ünitenin altındaki ya da yanındaki mobilyaları çek; iç ve dış ünitenin hava giriş-çıkışındaki engelleri kaldır."
  - "Klimayı durdur ve kesiciyi kapalı konuma getir."
  - "Ön paneli aç, hava filtrelerini çıkar, süpürgeyle ya da suyla temizle, gölgede kurut ve yerine tak."
  - "Sorun sürerse belirtiyi, model adını ve kurulum tarihini not edip Daikin yetkili servisine başvur."
faq:
  - q: "Daikin klima neden yeterince soğutmaz?"
    a: "Daikin kılavuzları soğutma etkisi zayıfsa önce şunları kontrol etmeni istiyor: hava filtreleri temiz mi, iç ve dış ünitenin hava giriş-çıkışında engel var mı, sıcaklık ayarı doğru mu, pencere ve kapılar kapalı mı, hava üfleme hızı ve yönü doğru mu. FTXF kılavuzu buna Econo işletimini ve iç ünitenin hemen altındaki ya da yanındaki mobilyaları ekliyor."
  - q: "Klima ayarladığım dereceye gelince üflemeyi kesiyor, arıza mı?"
    a: "Hayır. Daikin kılavuzuna göre ayar sıcaklığına ulaşıldıktan sonra hava üfleme hızı düşürülür ve soğutma modunda nem seviyesinin yükselmemesi için çalışma durdurulur. Oda ısınınca klima kendiliğinden yeniden başlar."
  - q: "Klimayı kapatıp açtım, hemen soğutmaya başlamıyor. Neden?"
    a: "Daikin kılavuzu bunu sorun saymıyor: çalışma durdurulduktan hemen sonra açıldığında ya da mod yeniden seçildiğinde klima kendini korumak için bekler. Yaklaşık 3 dakika beklemen gerekir."
  - q: "Soğuturken iç üniteden buğu çıkıyor, normal mi?"
    a: "Daikin kılavuzuna göre odadaki hava, soğutma sırasında soğuk hava akışıyla buğuya dönüşebilir. Bu bir arıza belirtisi değildir."
  - q: "Filtreyi temizledim, hâlâ soğutmuyor. Gaz mı bitti?"
    a: "Bunu evde anlamanın yolu yok. Daikin Türkiye, doğru moda ayarlandığı hâlde klima soğuk hava üflemiyorsa sorunun gaz eksikliği, kompresör arızası ya da sensör kaynaklı olabileceğini ve servis müdahalesi gerektiğini yazıyor. Soğutucu kaçak kontrolü de kılavuza göre yetkili servisin işidir."
images:
  coverAlt: "Sıcak bir yaz gününde oturma odasının duvarında çalışan beyaz Daikin tipi split klima, önünde perdeleri çekilmiş pencere"
---

Klima çalışıyor, üflüyor ama oda serinlemiyor. Daikin'in Türkçe kullanım kılavuzu bu durumu sorun giderme bölümünde **"Soğutma (Isıtma) etkisi zayıf."** başlığıyla ele alıyor ve servis çağırmadan önce kontrol edilecek beş soru veriyor: **"Hava filtreleri temiz mi?"**, iç ve dış ünitenin hava giriş-çıkışında engel var mı, **"Sıcaklık ayarı doğru mu?"**, **"Pencereler ve kapılar kapalı mı?"**, hava üfleme hızı ve yönü doğru mu. Bu yazıda bu listeyi, FTXF kılavuzunun ek maddeleriyle birlikte sırasıyla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ayar: mod SOĞUTMA mı, sıcaklık oda sıcaklığının altında mı, ECONO açık mı, hava hızı ve yönü doğru mu? Sonra hava yolu: kapı-pencere kapalı mı, iç ünitenin önünde mobilya, dış ünitenin önünde engel var mı? Sonra filtre: klimayı durdur, kesiciyi kapat, filtreyi temizle. Hâlâ soğutmuyorsa ya da ÇALIŞMA lambası yanıp sönüyorsa → Daikin yetkili servisi.

## Önce bunlar arıza değil

Daikin kılavuzu bazı durumları açıkça "sorun değil" diye listeliyor:

| Gördüğün | Daikin'in açıklaması |
|---|---|
| Ayarlanan dereceye gelince üfleme azalıyor ya da duruyor | Ayar sıcaklığına ulaşılınca hava hızı düşürülür, soğutmada nem yükselmesin diye çalışma durur; oda ısınınca kendiliğinden yeniden başlar |
| Kapatıp hemen açınca ya da mod değiştirince çalışmıyor | Klimayı korumak için; yaklaşık 3 dakika beklemek gerekir |
| Soğuturken iç üniteden buğu çıkıyor | Odadaki hava soğuk hava akışıyla buğuya dönüşür |

Bunlardan biri değilse aşağıdaki sırayı izle.

## Adım adım: evde denenecekler

**1. Mod ve sıcaklık.** Kumandada modun SOĞUTMA olduğunu ve sıcaklığın oda sıcaklığından birkaç derece düşük ayarlandığını kontrol et. Daikin Türkiye, ayar oda sıcaklığına çok yakınsa klimanın kısa sürede hedefe ulaşıp kapanabileceğini yazıyor.

**2. Econo işletimi.** Ekranda ECONO işletiminin açık olup olmadığına bak. FTXF kılavuzu, soğutma yetersizse Econo işletiminin kontrol edilmesini istiyor.

**3. Hava hızı ve yönü.** Hava üfleme hızını ve hava akış yönünü kontrol et; soğutmada Daikin akış yönünü yukarı öneriyor. Kılavuz, zeminde serin hava toplanmasın diye soğutma ve kurutmada yukarı, ısıtmada aşağı yönü tarif ediyor.

**4. Kapı, pencere ve güneş.** Kapı ve pencereleri kapat, güneş alan pencereleri perde ya da güneşlikle ört. Daikin'e göre açık kapı-pencereden hava dışarı akar ve soğutma etkisi azalır; güneş ışığını engellemek soğutma etkisini artırır.

**5. Engeller.** İç ünitenin altındaki ya da yanındaki mobilyaları çek; iç ve dış ünitenin hava giriş-çıkışındaki engelleri kaldır. Dış üniteye yalnız balkondan, güvenle erişebildiğin kadar bak; Daikin dış ünitenin üzerine oturulmamasını, üzerine bir şey konmamasını istiyor. Ulaşılamayan bir cephedeyse bu kontrolü servise bırak.

**6. Güvenlik.** Klimayı durdur ve kesiciyi kapalı konuma getir. Daikin kılavuzu temizlikten önce bunu şart koşuyor.

**7. Filtreyi temizle.** Ön paneli aç, hava filtrelerini çıkar, süpürgeyle ya da suyla temizle, gölgede kurut ve yerine tak. Toz kolay çıkmıyorsa kılavuz ılık suyla seyreltilmiş nötr deterjanı öneriyor; 40°C'den sıcak su ve sert fırça kullanma, iç ünitenin alüminyum kanatlarına dokunma. Ön panele uzanırken sağlam ve dengeli bir tabure kullan. Daikin filtrelerin yaklaşık 2 haftada bir temizlenmesini istiyor; genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse servis.** Sorun sürerse belirtiyi, model adını ve kurulum tarihini not edip Daikin yetkili servisine başvur. FTXF kılavuzu servise tam model adının, mümkünse imalat numarasının ve kurulum tarihinin bildirilmesini istiyor.

## Ne zaman servis?

Daikin Türkiye sınırı kendisi çiziyor: doğru moda ayarlandığı hâlde klima soğuk hava üflemiyorsa ya da oda sıcaklığı değişmiyorsa sorun **gaz eksikliği, kompresör arızası veya sensör kaynaklı olabilir** ve servis müdahalesi gerekir.

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, Econo, hava hızı-yönü, kapı-pencere, engeller, filtre | Senin, bu rehberdeki adımlar |
| ÇALIŞMA lambası yanıp sönüyor ya da kumandada hata kodu var | Kodu oku, [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) yazısına bak; gerekirse yetkili servis |
| Kontrollerden sonra hâlâ soğutmuyor | Daikin yetkili servisi |
| Soğutucu kaçak kontrolü, iç ünitenin uzman bakımı | Kılavuza göre yetkili servis |

⛔ Gaz hattına, dış ünitenin kapağına ve elektrik bağlantılarına dokunma. Daikin kılavuzu klimanın kendin onarılmaya ya da üzerinde değişiklik yapılmaya çalışılmamasını istiyor.

Soğutmada ÇALIŞMA lambası yanıp sönüyorsa kodun ne olduğuna bak: örneğin [Daikin klima A5 hatası](/blog/daikin-klima-a5-hatasi/) donma koruması ya da yüksek basınç kontrolü, [Daikin klima F6 hatası](/blog/daikin-klima-f6-hatasi/) soğutma modunda yüksek basınç kontrolüdür. Kış tarafı için [Daikin klima ısıtmıyor](/blog/daikin-klima-isitmiyor/) yazısına, markadan bağımsız sebepler için [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Kontrol listesi, "sorun değil" durumları, filtre temizliği ve bakım notları Daikin'in Türkçe kullanım kılavuzlarından (FTXM-M/CTXM-M ve FTXF50~71 serisi); servis sınırı ve sıcaklık ayarı notu daikin.com.tr'deki "Hangi Durumlarda Servis Çağırmalısınız?" ve "Klima Kendiliğinden Kapanma Nedenleri" sayfalarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
