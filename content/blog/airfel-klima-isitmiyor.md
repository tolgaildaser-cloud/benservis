---
title: "Airfel klima ısıtmıyor: evde kontrol"
description: "Airfel klima ısıtmıyorsa kılavuzun notları: HEAT modu, buz çözme ve fana geçiş, 3 dakika, kapı-pencere, çok soğuk dış hava, uyku modu, filtre."
slug: "airfel-klima-isitmiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki 2. koşu, ek-1051, klima). Belgeler bu koşuda (10:53) curl -sL -A "Mozilla/5.0" ile indirildi, ikisi de HTTP 200, application/pdf. Airfel'in kendi alan adı (airfel.com; adresler Airfel'in ürün sayfalarındaki doküman bağlantılarından, web araması kullanılmadı).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-ek1051/ · pdftotext -layout -f N -l N; sayfa = PDF sayfası. Satır gruplaması AF1'in İngilizce eş sayfası s.71 ile doğrulandı.
#  AF1) Airfel "Duvar Tipi Split Klima · Kullanım ve Kurulum Kılavuzu" LTXM25/35/50/71NV1B · LRXM25/35/50/71NV1B, 108 s., md5 b4650da08d110b4a7001a401bb303284
#      https://airfel.com/uploads/files/Airfel_Klima_Kullan%C4%B1m_K%C4%B1lavuzu1.pdf (ürün sayfası: https://airfel.com/tr/tr/detail/sezonsal-inverter-split-klima/duvar-tipi-inverter-klima-ltxm25n-9000-btuh-a)
#      s.17 "Düşük ısıtma performansı" Olası Nedenler | Çözüm → "Dış sıcaklık çok düşük | Yardımcı ısıtma cihazı kullanın" / "Kapılardan ve pencerelerden soğuk hava giriyor | Ünite çalışırken tüm kapıların ve pencerelerin kapalı olduğundan emin olun" / "Sızıntı ya da uzun süreli kullanım nedeniyle soğutucu akışkan miktarında azalma | Sızıntıları kontrol edin, gerekirse yeniden sızdırmazlık sağlayın ve soğutucu akışkanı tamamen doldurun" · "NOT: Yukarıda anlatılan kontroller ve arıza tespitleri yapıldıktan sonra sorun devam ederse ünitenizi derhal kapatın ve yetkili servis merkeziyle irtibata geçin."
#      s.15 "Ünite SOĞUTMA/ISITMA modundan FAN moduna geçiyor" → "Buzlanmayı önlemek için ünite kendi kendine ayar değiştirebilir. Sıcaklık arttığı zaman, ünite önceden seçilen modda yeniden çalışmaya başlayacaktır." / "Ayarlanan sıcaklığa ulaşılmıştır, bu noktada ünite kompresörü kapatır. Sıcaklık değiştiği zaman ünite yeniden çalışmaya başlayacaktır." · "Hem iç hem de dış üniteden beyaz buğu çıkıyor" → "Ünite buz çözme işleminden sonra ISITMA modunda yeniden başladığında, buz çözme sırasında oluşan nem nedeniyle beyaz buğu çıkabilir." · "İç üniteden ses geliyor" → "Ünite ISITMA modunda çalıştıktan sonra plastik parçalarının genleşmesi ve büzüşmesi nedeniyle gıcırdama sesi gelebilir." · "Sistem çalışmaya başladığında, biraz önce durdurulduğunda veya buz çözme sırasında düşük tıslama sesi: Bu ses normaldir, soğutucu gazın durmasından veya yön değiştirmesinden kaynaklanır." · "AÇMA/KAPATMA düğmesine basıldığında ünite açılmıyor" → "Ünitede aşırı yüklenmeyi önleyen 3 dakikalık koruma özelliği bulunur. Kapatıldıktan sonraki üç dakika içinde ünite yeniden çalıştırılamaz."
#      s.9 iç ünite ekranı: ekran pencereleri "temiz hava · buz çözme · çalıştır · zamanlayıcı" / "buz çözme özelliği etkinleştirildiğinde." / "soğuk hava önleme özelliği açıldığında" / "buz çözme (soğutma ve ısıtma üniteleri) sırasında" / "8 oC ısıtma özelliği etkinleştirildiğinde (bazı üniteler)" (kod glifleri metin katmanında yok; İngilizce s.63 aynı)
#      s.10 İnverter "ISITMA modu" oda 0°C-30°C, dış -15°C-24°C · "Klimanız aşağıdaki sıcaklık aralıklarının dışında kullanıldığında belirli güvenlik koruma özellikleri etkinleşebilir ve ünitenin devre dışı kalmasına sebep olabilir." / "YARDIMCI ELEKTRİKLİ ISITICISINA SAHİP DIŞ ÜNİTELER İÇİN Dış sıcaklık 0°C'nin (32°F) altında olduğunda performansın kesintisiz bir şekilde devam etmesini sağlamak için ünitenin daima fişe takılı tutulmasını şiddetle tavsiye ederiz." / "• Kapıları ve pencereleri kapalı tutun. ... • Hava girişlerini ve çıkışlarını engellemeyin. • Hava filtrelerini düzenli olarak kontrol edip temizleyin."
#      s.11 "Uyku Modunda Çalışma ... Ünite ISITMA modunda çalışırken 1 saat sonra sıcaklık 1°C (2°F) azalacaktır ve sonraki bir saat sonunda 1°C (2°F) daha azalacaktır. Uyku özelliği 8 saat sonra devreden çıkacaktır ve sistem en son kaldığı ayardan çalışmaya devam edecektir."
#      s.42 "MODE Düğmesi ... AUTO COOL DRY HEAT FAN" / "NOT: Satın aldığınız cihaz yalnızca soğutma işlevli bir modelse lütfen HEAT modunu seçmeyin." / "SLEEP Düğmesi • Uyku fonksiyonunu etkinleştirir/devre dışı bırakır." / "NOT: Ünite UYKU modunda çalışırken MODE, FAN SPEED veya ON/OFF düğmesine basılırsa bu fonksiyon iptal edilecektir." / "TURBO Düğmesi ... Turbo fonksiyonu, soğutma veya ısıtma sırasında ünitenin önceden belirlenen sıcaklığa en kısa sürede ulaşmasını sağlar (iç ünite bu fonksiyonu desteklemiyorsa bu düğmeye basıldığında herhangi bir işlem gerçekleşmez.)"
#      s.43 "YUKARI Düğmesi İç ortam sıcaklığını 1oC'lik aralıklarla 30oC'ye kadar yükseltmek için bu düğmeye basın."
#      s.46 "Soğutma/Isıtma/Fan modunda çalıştırma ... 1. SOĞUTMA, ISITMA (yalnızca soğutma ve ısıtma işlevli modeller) veya FAN modunu seçmek için MODE düğmesine basın. 2. İstenen sıcaklığı seçmek için YUKARI/AŞAĞI düğmesine basın. Sıcaklık 1OC'lik aralıklarla 17OC~ 30OC arasında ayarlanabilir. 3. Dört adımda (Otomatik, Düşük, Orta veya Yüksek) fan hızını seçmek için FAN düğmesine basın. 4. Klimayı başlatmak için ON/OFF düğmesine basın."
#      s.13 "TEMİZLİK VEYA BAKIMDAN ÖNCE DAİMA KLİMA SİSTEMİNİZİ KAPATIN VE FİŞİNİ PRİZDEN ÇEKİN." / filtre tarifi 1-9 (ön paneli kaldır, filtre ucundaki çıkıntıya bas, yukarı kaldır, kendine doğru çek; "Büyük hava filtresini sabunlu ılık suyla temizleyin. Yumuşak bir deterjan kullanın." / "Soğuk, kuru bir yerde kurumasını bekleyin, doğrudan güneş ışığına maruz bırakmayın.") / "Filtreyi iki haftada bir temizleyin."
#      s.14 "Filtreyi çıkarırken ünitenin içindeki metal parçalara dokunmayın." / "İç ünitenin içini temizlemek için su kullanmayın." / "Dış ünitenin her türlü bakım ve temizlik işlemi yetkili satıcı veya lisanslı bir servis sağlayıcısı tarafından yapılmalıdır."
#  AF2) Airfel "Kullanım kılavuzu · Airfel duvar tipi split klima" LTXQ25~71AV1B (Vibe), 2P795333-1C – 2026.03, 12 s., md5 0f2f98e5a61cfbe0750538a1b26d89be
#      https://airfel.com/uploads/files/User_Manual.pdf (ürün sayfası: https://airfel.com/tr/tr/detail/vibe-split-klima/airfel-vibe-inverter-klima-ltxq25a-9000-btuh-a)
#      s.10 "7.4 Hava filtreleri hakkında Üniteyi kirli filtrelerle çalıştırmak, şu anlama gelir: ▪ Havadaki koku GİDERİLEMEZ, ▪ Hava TEMİZLENEMEZ, ▪ yetersiz ısıtma/soğutma, ▪ kokuya neden olunur." / "Hava filtrelerinin 2 haftada bir temizlenmesi önerilir."
# YAKIN KOPYA: Airfel'in yayında klima sayfası yok; aynı gün kardeş airfel-klima-sogutmuyor ile ortak kısım yalnız filtre adımı (bu sayfada kısa tutuldu, farklı cümleyle). Aynı belirtinin yayındaki başka marka sayfalarıyla ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: "yardımcı ısıtma cihazı"nın türü (kılavuz belirtmiyor) · yardımcı elektrikli ısıtıcılı dış ünite için kullanıcı adımı (yalnız SSS'de kılavuzun "fişe takılı tutun" tavsiyesi) · ekran kodlarının glifleri (metin katmanında yok) · 8°C ısıtma özelliğinin nasıl açılıp kapandığı (bu kılavuzun kumanda bölümünde düğmesi yok) · soğutucu akışkan (servis) · dış ünitedeki buza müdahale · fiyat.
# Alıntı denetim tablosu: airfel-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Yumuşak deterjanlı ılık su"]
steps:
  - "Klimanın ısıtma işlevli olduğundan emin ol; MODE düğmesiyle HEAT'i seç ve YUKARI düğmesiyle istediğin sıcaklığı ayarla."
  - "İç ünite ekranında buz çözme göstergesi yanıyorsa ya da ünite ısıtmadan fana geçtiyse bekle; ünite önceki moduna kendiliğinden döner."
  - "Klimayı kapatıp hemen yeniden açtıysan 3 dakika bekle."
  - "Ünite çalışırken odanın kapı ve pencerelerini kapat."
  - "Dış hava çok soğuksa klimanın yanında yardımcı bir ısıtma cihazı kullan."
  - "Uyku modu açıksa SLEEP düğmesiyle kapat."
  - "Klimayı kapatıp fişini çek, hava filtresini çıkarıp yumuşak deterjanlı ılık suyla yıka, gölgede kurutup tak."
  - "Sorun sürerse klimayı kapat ve model numarasıyla Airfel yetkili servisine başvur."
faq:
  - q: "Airfel klima neden az ısıtır?"
    a: "Airfel kılavuzunun 'Düşük ısıtma performansı' satırında üç olası neden var: dış sıcaklık çok düşük, kapı ve pencerelerden soğuk hava giriyor ya da sızıntı veya uzun süreli kullanım nedeniyle soğutucu akışkan azalmış. İlk ikisi için çözüm yardımcı ısıtma cihazı ve kapalı kapı-pencere; soğutucu akışkan servis işidir."
  - q: "Isıtırken klima fana geçti, sıcak hava kesildi. Arıza mı?"
    a: "Kılavuz bunu arıza saymıyor. Ünite buzlanmayı önlemek için kendi ayarını değiştirebilir ve sıcaklık artınca önceki modda yeniden çalışır; ayarlanan sıcaklığa ulaşıldığında da kompresörü kapatır, sıcaklık değişince yeniden başlar. Buz çözmeden sonra ısıtmaya dönerken iç ve dış üniteden beyaz buğu çıkabilir."
  - q: "Dışarısı çok soğuk, klima hiç çalışmıyor. Neden?"
    a: "Airfel kılavuzu inverter modellerde ısıtma için dış sıcaklık aralığını -15°C ile 24°C, oda sıcaklığı aralığını 0°C ile 30°C olarak veriyor; bu aralıkların dışında güvenlik koruma özellikleri etkinleşip üniteyi devre dışı bırakabilir. Yardımcı elektrikli ısıtıcısı olan dış ünitelerde, dış sıcaklık 0°C'nin altındayken ünitenin daima fişe takılı tutulmasını öneriyor."
  - q: "Gece uyku modunda oda serinliyor. Normal mi?"
    a: "Evet. Airfel kılavuzuna göre uyku modunda ısıtma ayarı 1 saat sonra 1°C, bir saat sonra 1°C daha düşer; uyku özelliği 8 saat sonra devreden çıkar. MODE, FAN ya da ON/OFF düğmesine basmak da uyku modunu iptal eder."
images:
  coverAlt: "Kış sabahı buğulu pencereli bir yatak odasında kapalı perdeler, duvarda kanatları aşağı bakan beyaz split klima ve yatağın ucunda katlı bir battaniye"
---

Soğuk bir sabah klimayı ısıtmaya aldın, ama ya hava ılık geliyor ya da klima bir süre sonra sıcak hava vermeyi bırakıp sadece fan çalıştırıyor. Airfel'in Türkçe kullanım kılavuzu ısıtmadaki zayıflığı sorun giderme tablosunda **"Düşük ısıtma performansı"** satırıyla veriyor ve üç neden sayıyor: dış sıcaklığın çok düşük olması, kapı ve pencerelerden giren soğuk hava ve azalmış soğutucu akışkan. Isıtırken fana geçmeyi ise "arıza değil" listesinde açıklıyor: **"Buzlanmayı önlemek için ünite kendi kendine ayar değiştirebilir. Sıcaklık arttığı zaman, ünite önceden seçilen modda yeniden çalışmaya başlayacaktır."** Bu yazıda Airfel'in ısıtma notlarını kumanda kılavuzundaki mod ve uyku ayarlarıyla birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod HEAT mi, model ısıtma işlevli mi? Ekranda buz çözme göstergesi yanıyorsa ya da ünite fana geçtiyse bekle. Kapatıp açtıysan 3 dakika. Kapı ve pencereleri kapat; dışarısı çok soğuksa yardımcı ısıtıcı. Uyku modunu kapat, filtreyi yıka. Sürerse → Airfel yetkili servisi.

## Airfel ısıtma hakkında ne diyor?

| Ne görüyorsun | Airfel'in açıklaması | Ne yapmalı |
|---|---|---|
| Isıtırken ünite fana geçti | Buzlanmayı önlemek için ayar değiştirebilir ya da ayarlanan sıcaklığa ulaşılmıştır | Bekle, önceki moda döner |
| Ekranda buz çözme göstergesi | Buz çözme sürüyor | Bekle |
| Isıtmaya dönerken beyaz buğu | Buz çözme sırasında oluşan nem | Arıza değil |
| Kapatıp açtın, ünite açılmıyor | 3 dakikalık koruma | Bekle |
| Hava ılık, oda ısınmıyor | Dış sıcaklık çok düşük ya da kapı-pencereden soğuk hava giriyor | Yardımcı ısıtma cihazı, kapı-pencereyi kapat |
| Bu kontrollerden sonra da zayıf | Soğutucu akışkan azalmış olabilir | Yetkili servis |

Kılavuzun inverter tablosu ısıtma için oda sıcaklığını 0-30°C, dış sıcaklığı -15 ile 24°C aralığında veriyor; bu aralıkların dışında güvenlik koruma özellikleri üniteyi devre dışı bırakabilir.

## Adım adım: evde denenecekler

**1. HEAT modu.** Klimanın ısıtma işlevli olduğundan emin ol; MODE düğmesiyle HEAT'i seç ve YUKARI düğmesiyle istediğin sıcaklığı ayarla. Airfel kumanda kılavuzu yalnız soğutma işlevli modellerde HEAT seçilmemesini istiyor; ayar 17-30°C arasında 1°C adımlarla yapılır. Desteklenen iç ünitelerde TURBO düğmesi, ısıtmada ayarlanan sıcaklığa en kısa sürede ulaşılmasını sağlar.

**2. Buz çözme ve fana geçiş.** İç ünite ekranında buz çözme göstergesi yanıyorsa ya da ünite ısıtmadan fana geçtiyse bekle; ünite önceki moduna kendiliğinden döner. Buz çözme sırasında düşük bir tıslama sesi gelmesi de Airfel'in normal saydığı durumlar arasında. Dış ünitedeki buza kendin müdahale etme.

**3. Üç dakika.** Klimayı kapatıp hemen yeniden açtıysan 3 dakika bekle. Kılavuza göre ünite, aşırı yüklenmeyi önlemek için kapatıldıktan sonraki üç dakika içinde yeniden çalıştırılamaz.

**4. Kapı ve pencere.** Ünite çalışırken odanın kapı ve pencerelerini kapat. Airfel bunu düşük ısıtma performansının nedenleri arasında ayrı bir satır olarak sayıyor.

**5. Çok soğuk dış hava.** Dış hava çok soğuksa klimanın yanında yardımcı bir ısıtma cihazı kullan. Kılavuzun çözüm sütunu bu durum için tam olarak bunu söylüyor.

**6. Uyku modu.** Uyku modu açıksa SLEEP düğmesiyle kapat. Airfel'e göre uyku modunda ısıtma ayarı ilk iki saatte saatte 1°C düşer ve özellik 8 saat sonra devreden çıkar.

**7. Hava filtresi.** Klimayı kapatıp fişini çek, hava filtresini çıkarıp yumuşak deterjanlı ılık suyla yıka, gölgede kurutup tak. Airfel'in Vibe (LTXQ) kılavuzu kirli filtreyle çalışmanın yetersiz ısıtmaya yol açtığını yazıyor; LTXM kılavuzu filtrenin iki haftada bir temizlenmesini öneriyor. İç ünitenin hava giriş ve çıkışının önünü de açık tut. Filtrenin nasıl çıkarıldığı [Airfel klima soğutmuyor](/blog/airfel-klima-sogutmuyor/) yazısında sırasıyla anlatılıyor.

**8. Sürerse servis.** Sorun sürerse klimayı kapat ve model numarasıyla Airfel yetkili servisine başvur. Kılavuz, kontrollerden sonra sorun sürüyorsa üniteyi kapatıp yetkili servis merkeziyle irtibata geçmeni istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod ve ayar, buz çözme ve 3 dakika için bekleme, kapı-pencere, yardımcı ısıtıcı, uyku modu, filtre | Senin, bu rehberdeki adımlar |
| Soğutucu akışkan azalmış ya da sızıntı | Airfel yetkili servisi |
| Ekranda hata kodu ya da sürekli yanıp sönen lamba | [Airfel klima çalışmıyor](/blog/airfel-klima-calismiyor/) yazısındaki sıra, sürerse servis |
| Dış ünitenin bakım ve temizliği | Yetkili satıcı ya da servis |
| Yanık kokusu, anormal ses, ısınan güç kablosu | Üniteyi hemen kapat, yetkili servis |

⛔ İç ünitenin içine su verme, dış üniteye kendin bakım yapmaya çalışma.

Markadan bağımsız anlatım [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısında; filtre için genel rehber [klima filtresi temizleme](/blog/klima-filtresi-temizleme/).

---

**Kaynak künyesi.** Isıtma performansı tablosu, "arıza değil" listesi, çalışma sıcaklıkları, uyku modu, kumanda düğmeleri ve filtre bakımı Airfel'in airfel.com'daki "Duvar Tipi Split Klima Kullanım ve Kurulum Kılavuzu"ndan (LTXM/LRXM 25-71 NV1B), kirli filtrenin ısıtmaya etkisi Airfel Vibe (LTXQ 25-71 AV1B) kullanım kılavuzundan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
