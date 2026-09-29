---
title: "Daikin klima ısıtmıyor: evde kontrol"
description: "Daikin klima ısıtmıyorsa Daikin'in sırası: ısıtma modu ve sıcaklık, ısınma ve buz çözme beklemesi, hava yönü, filtre ve servis sınırı."
slug: "daikin-klima-isitmiyor"
date: "2026-09-29"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# Belgeler 2026-09-28'de curl -sL -A "Mozilla/5.0" ile indirildi (HTTP 200); 2026-09-29'da yeniden indirildi, hepsi HTTP 200; PDF'ler ve T1 md5'i birebir aynı.
# PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu. Web araması yalnız belgelerin YERİNİ bulmak için.
#  T1) daikin.com.tr "Daikin Klima Neden Isıtmıyor? En Yaygın Sorunlar ve Çözümleri"  https://www.daikin.com.tr/bilgi-ve-ipuclari/daikin-klima-neden-isitmiyor-en-yaygin-sorunlar-ve-cozumleri  md5 8b2cdcba4f7207cfed198e5b96db7b89
#     "Kumandada “Heat” modu seçili olmalıdır. Bazı modellerde bu mod güneş sembolüyle gösterilir." / "Yanlış modda (Cool, Fan, Dry) çalışıyorsa sıcak hava üflemez."
#     "Isıtma modunda sıcaklık ayarı oda sıcaklığından yüksek olmalıdır." / "Kirli filtre hava akışını engeller." / "Filtreler yoğun kullanımda iki haftada bir temizlenmeli, yılda minimum bir kez profesyonel bakım yapılmalıdır."
#     "Soğutucu akışkan seviyesi düşükse klima ısıtma verimini kaybeder. ... Bu durumda mutlaka yetkili servis müdahalesi gereklidir." / "Fan veya Kompresör Arızası ... Daikin Yetkili Servisi tarafından kontrol edilmelidir."
#     "Uğultu, sürtme sesi, titreşim veya anormal çalışma varsa ... Cihazı kapatarak yetkili servise başvurmanız önerilir."
#     ⚠️ Sayfa önerilen dereceyi iki yerde farklı veriyor (22-24 °C ve 24–26°C) → gövdeye derece rakamı YAZILMADI, yalnız "oda sıcaklığından yüksek".
#  M) Daikin FTXM-M/CTXM-M kullanım kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1  (sayfa = PDF sayfası; basılı numara bir eksik)
#     s.43 "ISITMA modu başladıktan hemen sonra belirli bir süre sıcak hava üflenmiyor." → "Klima ısınıyordur. 1 ila 4 dakika kadar beklemeniz gerekir."
#     s.41 "ISITMA modu aniden duruyor ve bir akış sesi duyuluyor." → "Dış ünitedeki donlar temizleniyordur. ... Yaklaşık 4 ila 12 dakika beklemeniz gerekir."
#     s.41 "Dış üniteden su veya buhar geliyor." ISITMA modunda → "Dış ünite üzerindeki don, klima defrost moduna geçtiğinde su veya buhar olarak atılır."
#     s.41 "Klima çalışma sırasında hava üflemeyi kesiyor." → ayar sıcaklığına ulaşılınca "(ısıtma modunda) soğuk hava üflenmesini önlemek" için çalışma durdurulur
#     s.42 "Soğutma (Isıtma) etkisi zayıf." kontrol listesi (filtre, engel, sıcaklık ayarı, pencere-kapı, hava hızı ve yönü)
#     s.43 "Ünite, ısı pompası modeli olmasına rağmen ISITMA modu seçilemiyor." → "Atlatma kablosunun (J8) kesilmediğini kontrol edin. Kesilmişse, yetkili servise başvurun."
#     s.14 çalışma koşulları ISITMA: "Dış ortam sıcaklığı: –15-24°C" / "İç ortam sıcaklığı : 10-30°C" / "Çalışmanın durdurulması için bir emniyet cihazı kullanılabilir."
#     s.35 İKAZ temizlik öncesi durdur + kesiciyi kapat; s.37 filtre adımları
#  F) Daikin FTXF50~71 kullanıcı başvuru kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
#     s.34 "(üniteden hava ÜFLENMİYOR)" → "Klima ısıtma işletimi için ısınıyor olabilir. 1 ila 4 dakika bekleyin." / "Ünite buz çözme işletiminde olabilir."
#     s.34 "(üniteden hava üfleniyor)" → filtre, kapı-pencere, Econo, iç ünitenin altı/yanındaki mobilya
#     s.26 hava akış yönü "ısıtma işletimi sırasında ise aşağı doğru" · s.18 Isıtma çalışma aralığı "Dış sıcaklık: –15~24°C DB"
#  T2) daikin.com.tr "Hangi Durumlarda Servis Çağırmalısınız?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/hangi-durumlarda-servis-cagirmalisiniz  md5 1d34c92f2cffccf7fd7c11edc8844f94 (2026-09-29)
# BİLEREK YAZILMAYANLAR: gaz dolumu (#31); J8 atlatma kablosu kontrolü (kart üzerinde, kullanıcıya verilmedi → "yetkili servis"); derece önerisi (T1 kendi içinde çelişkili); dış ünitedeki buzu elle/suyla çözme (belgede yok).
# Alıntı denetim tablosu: daikin-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Nötr deterjan", "Sağlam bir tabure"]
steps:
  - "Kumandada ISITMA modunun seçili olduğunu kontrol et; bazı modellerde bu mod güneş simgesiyle gösterilir."
  - "Sıcaklığı oda sıcaklığından yüksek bir değere ayarla."
  - "Isıtmayı başlattıktan sonra sıcak hava gelmesi için 1-4 dakika bekle; ısıtma durup akış sesi geliyorsa buz çözme için 4-12 dakika bekle."
  - "Hava akış yönünü aşağı al ve hava üfleme hızını kontrol et."
  - "Kapı ve pencereleri kapat, iç ünitenin altındaki ya da yanındaki mobilyaları çek."
  - "Klimayı durdur ve kesiciyi kapalı konuma getir."
  - "Ön paneli aç, hava filtrelerini çıkar, süpürgeyle ya da suyla temizle, gölgede kurut ve yerine tak."
  - "Sorun sürerse belirtiyi, model adını ve kurulum tarihini not edip Daikin yetkili servisine başvur."
faq:
  - q: "Daikin klima açılıyor ama sıcak hava gelmiyor, neden?"
    a: "Daikin'e göre ilk bakılacak şey mod: kumandada ısıtma (Heat) modu seçili olmalı; Cool, Fan ya da Dry modunda klima sıcak hava üflemez. Isıtma modunda sıcaklık ayarı da oda sıcaklığından yüksek olmalı. Isıtma yeni başladıysa klima ısınıyordur; kılavuz 1-4 dakika beklemeyi söylüyor."
  - q: "Isıtırken klima aniden durdu ve akış sesi geliyor. Arıza mı?"
    a: "Daikin kılavuzu bunu sorun saymıyor: dış ünitedeki donlar temizleniyordur (buz çözme). Don giderildikten hemen sonra ısıtma yeniden başlar; yaklaşık 4-12 dakika beklemen gerekir."
  - q: "Dış üniteden buhar ya da su çıkıyor, normal mi?"
    a: "Isıtma modunda evet. Daikin kılavuzuna göre dış ünitenin üzerindeki don, klima buz çözme moduna geçtiğinde su ya da buhar olarak atılır."
  - q: "Dışarısı çok soğukken klima neden ısıtmayı bırakıyor?"
    a: "Daikin'in FTXM-M ve FTXF kılavuzlarında ısıtma için çalışma aralığı dış sıcaklıkta -15 ile 24°C arası. Bu aralığın dışında bir emniyet cihazı çalışmayı durdurabilir. Kendi modelinin aralığı için kılavuzuna bak."
  - q: "Kontrolleri yaptım, hâlâ ısıtmıyor. Ne yapmalıyım?"
    a: "Daikin Türkiye'ye göre soğutucu akışkan seviyesi düşükse ısıtma verimi düşer ve bu durumda yetkili servis müdahalesi gerekir; fan ya da kompresör kaynaklı sorunları da yetkili servis kontrol etmeli. Uğultu, sürtme sesi ya da titreşim varsa cihazı kapatıp yetkili servise başvur."
images:
  coverAlt: "Kış akşamı oturma odasının duvarındaki beyaz split klima, kumanda ekranında güneş simgeli ısıtma modu görünüyor"
---

Kış geldi, klimayı ısıtmaya aldın ama odaya sıcak hava gelmiyor. Daikin Türkiye'nin bu konudaki sayfası ilk sebebi net koyuyor: **"Kumandada “Heat” modu seçili olmalıdır."** Ardından sıcaklık ayarı ve filtre geliyor; gaz, fan ve kompresör sorunlarını ise yetkili servise bırakıyor. Daikin'in kullanım kılavuzları buna, arıza sanılan iki bekleme süresini ekliyor: ısınma ve buz çözme. Bu yazıda sırayı bu belgelerden kuruyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod ISITMA (güneş simgesi) mi, sıcaklık oda sıcaklığının üstünde mi? Yeni başladıysa 1-4 dakika, buz çözmedeyse 4-12 dakika bekle. Hava yönünü aşağı al, kapı-pencereyi kapat, filtreyi temizle. Hâlâ ısıtmıyorsa ya da ÇALIŞMA lambası yanıp sönüyorsa → Daikin yetkili servisi.

## Önce bunlar arıza değil

Daikin kılavuzu ısıtmada şu durumları "sorun değil" diye sayıyor:

| Gördüğün | Daikin'in açıklaması | Ne kadar |
|---|---|---|
| Isıtma başladı ama sıcak hava gelmiyor | Klima ısınıyor; sıcak havayı belirli bir sıcaklığa ulaşınca üfler | 1-4 dakika |
| Isıtma aniden durdu, akış sesi geliyor | Dış ünitedeki donlar temizleniyor (buz çözme) | Yaklaşık 4-12 dakika |
| Dış üniteden su ya da buhar çıkıyor | Buz çözmede don, su ya da buhar olarak atılır | Buz çözme süresince |
| Ayarlanan dereceye gelince üfleme azalıyor ya da duruyor | Soğuk hava üflenmesin diye çalışma durur, oda soğuyunca yeniden başlar | Kendiliğinden |

## Adım adım: evde denenecekler

**1. Mod.** Kumandada ISITMA modunun seçili olduğunu kontrol et; bazı modellerde bu mod güneş simgesiyle gösterilir. Daikin Türkiye'ye göre klima yanlışlıkla Cool, Dry ya da Fan modunda kaldıysa sıcak hava üflemez.

**2. Sıcaklık.** Sıcaklığı oda sıcaklığından yüksek bir değere ayarla. Daikin Türkiye, ısıtma modunda ayarın oda sıcaklığından yüksek olması gerektiğini, daha düşük ayarın cihazı yalnız fan gibi çalıştırabileceğini yazıyor.

**3. Bekle.** Isıtmayı başlattıktan sonra sıcak hava gelmesi için 1-4 dakika bekle; ısıtma durup akış sesi geliyorsa buz çözme için 4-12 dakika bekle. İki durum da kılavuzda "sorun değil" başlığı altında.

**4. Hava yönü ve hızı.** Hava akış yönünü aşağı al ve hava üfleme hızını kontrol et. Daikin, tavanda sıcak hava toplanmasın diye ısıtmada akış yönünü aşağı doğru öneriyor.

**5. Kapı, pencere, mobilya.** Kapı ve pencereleri kapat, iç ünitenin altındaki ya da yanındaki mobilyaları çek. FTXF kılavuzu, hava üflendiği hâlde ısıtma yetersizse bu iki maddeyi ve Econo işletiminin açık olup olmadığını kontrol etmeni istiyor.

**6. Güvenlik.** Klimayı durdur ve kesiciyi kapalı konuma getir. Daikin kılavuzu temizlikten önce bunu şart koşuyor.

**7. Filtreyi temizle.** Ön paneli aç, hava filtrelerini çıkar, süpürgeyle ya da suyla temizle, gölgede kurut ve yerine tak. Daikin'e göre kirli filtre hava akışını engeller ve ısıtma etkisi azalır; yoğun kullanımda filtre iki haftada bir temizlenmeli. 40°C'den sıcak su ve sert fırça kullanma, alüminyum kanatlara dokunma, ön panele uzanırken sağlam bir tabure kullan. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse servis.** Sorun sürerse belirtiyi, model adını ve kurulum tarihini not edip Daikin yetkili servisine başvur.

## Ne zaman servis?

Daikin Türkiye'nin ısıtma sayfası sınırı açık çiziyor: soğutucu akışkan seviyesi düşükse ya da fan veya kompresörde sorun varsa **yetkili servis müdahalesi gerekir.** Uğultu, sürtme sesi, titreşim ya da anormal çalışma varsa cihazı kapatıp yetkili servise başvurman öneriliyor.

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, bekleme süreleri, hava yönü, kapı-pencere, filtre | Senin, bu rehberdeki adımlar |
| Isı pompalı modelde ISITMA modu hiç seçilemiyor | Daikin yetkili servisi |
| ÇALIŞMA lambası yanıp sönüyor ya da hata kodu var | Kodu oku, [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) yazısına bak; gerekirse yetkili servis |
| Kontrollerden sonra hâlâ ısıtmıyor, uğultu ya da titreşim var | Daikin yetkili servisi |

⛔ Gaz hattına, dış ünitenin kapağına ve elektrik bağlantılarına dokunma; dış ünitedeki buzu elle ya da suyla çözmeye çalışma, buz çözmeyi klima kendisi yapar.

Isıtmada ÇALIŞMA lambası yanıp sönüyorsa [Daikin klima A5 hatası](/blog/daikin-klima-a5-hatasi/) (donma koruması ya da yüksek basınç kontrolü) ve [Daikin klima E7 hatası](/blog/daikin-klima-e7-hatasi/) (dış ünite fanı) yazıları yardımcı olabilir. Yaz tarafı için [Daikin klima soğutmuyor](/blog/daikin-klima-sogutmuyor/), markadan bağımsız sebepler için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Mod, sıcaklık, filtre ve servis sınırı daikin.com.tr'deki "Daikin Klima Neden Isıtmıyor?" sayfasından; bekleme süreleri, "sorun değil" durumları, çalışma aralığı ve filtre temizliği Daikin'in Türkçe kullanım kılavuzlarından (FTXM-M/CTXM-M ve FTXF50~71 serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
