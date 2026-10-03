---
title: "TCL klima ısıtmıyor: kış kontrolü"
description: "TCL klima kışın ısıtmıyorsa kılavuzun notları: 2-10 dakikalık buz çözme, ısıtma modu ve ayar, kanatları aşağı çevirme, fan hızı, filtre ve dış sıcaklık sınırı."
slug: "tcl-klima-isitmiyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belgeler bu koşuda (07:52) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı tcl.com.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/ · sayfa = PDF sayfası.
#  TE) TCL "DUVAR TİPİ SPLİT KLİMA KULLANMA KILAVUZU" Elite Plus serisi TAC-09/12/18/24CHSD/XA51I, 72 s., md5 fe33431694806ff1731a376d548d7af9
#      https://www.tcl.com/content/dam/brandsite/region/turkey/user-manual/ac/User_Manual_Elite_Series_TR_V1.pdf
#      s.16 "ISITMA MODU Isıtma işlevi, klimanın odayı ısıtmasını sağlar. Isıtma işlevini (ISITMA) etkinleştirmek için ekranda [sembol] sembolü görünene kadar [mod] düğmesine basın. [yukarı] veya [aşağı] düğmesiyle odanın sıcaklığından daha yüksek bir sıcaklığa ayarlayın." / "ISITMA işleminde cihaz, ısı değiştirme işlevini geri kazanmak amacıyla kondenserdeki buzu temizlemek için gerekli olan bir buz çözme çevrimini otomatik olarak etkinleştirebilir. Bu prosedür genellikle 2-10 dakika sürer. Buz çözme sırasında iç ünite fanı çalışmayı durdurur. Buz çözme işleminden sonra otomatik olarak ISITMA moduna döner."
#      s.40 "Yetersiz hava akışı, sıcak ya da soğuk | Sıcaklık ayarı uygun değildir. / Klima girişleri ve çıkışları tıkanmıştır. / Hava filtresi kirlidir. / Fan hızı minimuma ayarlanmıştır. / Odada başka ısı kaynakları vardır. / Soğutucu akışkan yoktur." · "Garip bir ses duyuluyor | Bu ses, sıcaklıktaki değişimler nedeniyle ön panelin genleşmesi veya büzülmesinden kaynaklanır ve bir sorun olduğunu göstermez."
#      s.6 "Hava akış yönü uygun şekilde ayarlanmalıdır. Kanatlar, ısıtma modunda aşağıya doğru, soğutma modunda ise yukarıya doğru yönlendirilmelidir." / "Cihazı her zaman hava filtresi takılıyken kullanın."
#      s.7 "İç veya dış ünitenin hava giriş ve çıkışını engellemeyin. Bu açıklıkların tıkanması, klimanın çalışma verimliliğinde bir azalmaya ve akabinde olası arızalara veya hasarlara neden olur."
#      s.12 "FAN | Fan hızını ayarlamak: otomatik, sessiz, düşük, orta-düşük, orta, orta-yüksek, yüksek, Turbo." · s.18 "SOĞUTMA/ISITMA modunda TURBO özelliğini seçtiğinizde cihaz, en yüksek fan hızıyla hızlı soğutma / hızlı ısıtma işlemini gerçekleştirecektir."
#      s.22 "8 °C ısıtma işlevi (Opsiyonel) 1. 8 °C ısıtmayı etkinleştirmek için hem ECO/DISPLAY hem de HEALTH/CLEAN düğmelerine basın ve 2 saniye basılı tutun. 2. Klima bekleme modundaysa bu işlev, iç ortam sıcaklığı 8 °C'ye eşit veya daha düşük olduğunda klimanın otomatik olarak ısıtmaya başlamasını sağlar; sıcaklık 18 °C'ye eşit veya daha yüksek olduğunda ise bekleme moduna geri döner. 3. Klima kapatıldığında 8 °C ısıtmasından çıkış yapmak için hem ECO/DISPLAY hem de HEALTH/CLEAN düğmelerine basın ve 2 saniye basılı tutun."
#      s.23 Çalışma sıcaklığı: On/Off klima ısıtma oda "0 °C ~ 27 °C", dış "-7 °C ~ 24 °C" · İnverterli klima ısıtma oda "0 ~ 30 °C", dış "-20 °C ~ 30 °C" · "bu koşulların dışında kullanılırsa bazı emniyet koruma özellikleri devreye girebilir." · "Ünite kapatıldıktan sonra veya çalışma sırasında modu değiştirdikten sonra açılırsa hemen çalışmaz. Bu normal bir kendini koruma işlemidir, yaklaşık 3 dakika beklemeniz gerekir."
#      s.39 "Her türlü bakım öncesi, fişini prizden çekerek, klimayı güç kaynağından ayırınız." / TOZ FİLTRELERİ 1-5 (bkz. tcl-klima-sogutmuyor provenansı)
# NOT: TCL tablosu çözüm sütunu vermiyor; adımlar nedenin karşılığı + kılavuzun ilgili bölümü. Eşleme .KAYNAK.md'de.
# YAKIN KOPYA: TCL'nin yayında klima sayfası yok. Kardeş tcl-klima-sogutmuyor ile aynı "Yetersiz hava akışı" satırını paylaşıyor; bu sayfa ısıtmaya özgü satırları (buz çözme 2-10 dk, kanat aşağı, 3 dk mod değişimi, 8 °C işlevi, dış sıcaklık sınırı) öne alıyor. Ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: soğutucu akışkan (servis) · dış ünitedeki buza müdahale (kılavuzda kullanıcı adımı yok) · ısı eşanjörü temizliği · sıcak esinti işlevinin etkisi (kılavuz yalnız nasıl açılacağını yazıyor) · fiyat.
# Alıntı denetim tablosu: tcl-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (filtre kuruma hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Su"]
steps:
  - "Kumandada ısıtma sembolü görünene kadar mod düğmesine bas ve sıcaklığı oda sıcaklığından daha yüksek bir değere ayarla."
  - "Modu yeni değiştirdiysen ya da klimayı kapatıp açtıysan yaklaşık 3 dakika bekle."
  - "Isıtma sırasında iç ünitenin fanı durduysa buz çözme için 2-10 dakika bekle."
  - "Kumandadaki yön düğmesiyle kanatları ısıtmaya uygun olarak aşağı doğru yönlendir."
  - "Fan hızı sessiz ya da düşük kademedeyse FAN düğmesiyle yükselt."
  - "Klimanın fişini çek, ön paneli açıp hava filtresini çıkar, suyla yıka, kuru bir yerde kurutup yerine tak; giriş ve çıkışın önünü de aç."
  - "Odayı hızlı ısıtmak için TURBO düğmesine bas; ısıtma yine zayıfsa TCL yetkili servisine başvur."
faq:
  - q: "TCL klima ısıtırken neden arada duruyor?"
    a: "TCL kılavuzuna göre ısıtmada cihaz, kondenserdeki buzu temizlemek için otomatik bir buz çözme çevrimi başlatabilir. Bu genellikle 2-10 dakika sürer, bu sırada iç ünitenin fanı durur ve iş bitince klima kendiliğinden ısıtmaya döner."
  - q: "Dışarısı çok soğukken TCL klima ısıtır mı?"
    a: "Kılavuz inverterli modellerde ısıtma için dış ortam aralığını -20 ile 30°C, oda aralığını 0 ile 30°C olarak veriyor. On/off (inverter olmayan) modellerde dış aralık -7 ile 24°C, oda aralığı 0 ile 27°C. Bu koşulların dışında emniyet koruma özellikleri devreye girebilir."
  - q: "Klima kapalıyken kendiliğinden ısıtmaya başladı. Neden?"
    a: "8°C ısıtma işlevi açık olabilir. Bu işlev olan modellerde klima bekleme modundayken oda 8°C'ye ya da altına düşünce otomatik ısıtmaya başlar, oda 18°C'ye ulaşınca bekleme moduna döner. Klima kapalıyken ECO/DISPLAY ve HEALTH/CLEAN düğmelerine birlikte 2 saniye basarak işlevden çıkarsın."
  - q: "Isıtırken iç üniteden çıtırtı geliyor. Normal mi?"
    a: "Evet. TCL tablosuna göre bu ses, sıcaklık değişimi nedeniyle ön panelin genleşip büzülmesinden kaynaklanır ve bir sorun olduğunu göstermez."
images:
  coverAlt: "Kış sabahı soğuk bir oturma odasında yere serili kalın halı, duvarda kanatları aşağıya dönük çalışan beyaz split klima ve koltuğun koluna atılmış örgü bir şal"
---

Klimayı kışın ısıtmaya aldın ama odaya gelen hava ılık kalıyor ya da iç ünitenin fanı arada tamamen duruyor. TCL'nin Türkçe kullanma kılavuzu bu iki durumu ayrı yerlerde anlatıyor. Fanın durması ısıtma bölümünde açıklanıyor: cihaz **"kondenserdeki buzu temizlemek için gerekli olan bir buz çözme çevrimini otomatik olarak etkinleştirebilir. Bu prosedür genellikle 2-10 dakika sürer."** Zayıf ısıtma ise sorun giderme tablosundaki **"Yetersiz hava akışı, sıcak ya da soğuk"** satırına düşüyor; bu satır sıcaklık ayarını, tıkalı giriş-çıkışı, kirli filtreyi ve minimumda kalan fan hızını sayıyor. Aşağıda önce ısıtmaya özgü notları, sonra bu kontrolleri sıraladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Isıtma modu ve odadan yüksek ayar. Modu yeni değiştirdiysen 3 dakika, fan durduysa buz çözme için 2-10 dakika bekle. Kanatları aşağı çevir, fanı yükselt. Fişi çekip filtreyi yıka, giriş-çıkışı aç. Hızlı ısıtma için TURBO. Sürerse → TCL yetkili servisi.

## Isıtmada normal olan ve olmayan

| Ne görüyorsun | TCL'nin açıklaması | Ne yapmalı |
|---|---|---|
| Isıtırken iç ünite fanı durdu | Buz çözme çevrimi, genellikle 2-10 dakika | Bekle, ısıtmaya kendisi döner |
| Mod değiştirince klima hemen çalışmadı | Kendini koruma, yaklaşık 3 dakika | Bekle |
| Ön panelden çıtırtı | Sıcaklık değişimiyle genleşme | Sorun değil |
| Kapalı klima kendiliğinden ısıtmaya başladı | 8°C ısıtma işlevi açık | İstemiyorsan kapat |
| Hava ılık, oda ısınmıyor | Ayar, tıkalı giriş-çıkış, kirli filtre, düşük fan, ısı kaynakları | Aşağıdaki adımlar |
| Bu kontrollerden sonra da zayıf | Soğutucu akışkan yok | Yetkili servis |

## Adım adım: evde denenecekler

**1. Isıtma modu ve ayar.** Kumandada ısıtma sembolü görünene kadar mod düğmesine bas ve sıcaklığı oda sıcaklığından daha yüksek bir değere ayarla. Kılavuz "uygun olmayan sıcaklık ayarı"nı zayıf hava akışının ilk nedeni olarak sayıyor.

**2. Üç dakika.** Modu yeni değiştirdiysen ya da klimayı kapatıp açtıysan yaklaşık 3 dakika bekle. TCL'ye göre ünite bu durumda hemen çalışmaz; bu normal bir kendini koruma işlemi.

**3. Buz çözme.** Isıtma sırasında iç ünitenin fanı durduysa buz çözme için 2-10 dakika bekle. Klima bu çevrimi kendisi başlatır ve bitince ısıtma moduna kendisi döner.

**4. Kanatlar aşağı.** Kumandadaki yön düğmesiyle kanatları ısıtmaya uygun olarak aşağı doğru yönlendir. TCL'nin güvenlik notları kanatların ısıtmada aşağıya, soğutmada yukarıya bakmasını istiyor.

**5. Fan hızı.** Fan hızı sessiz ya da düşük kademedeyse FAN düğmesiyle yükselt. Kumandadaki kademeler otomatik, sessiz, düşük, orta-düşük, orta, orta-yüksek, yüksek ve Turbo.

**6. Filtre ve hava yolu.** Klimanın fişini çek, ön paneli açıp hava filtresini çıkar, suyla yıka, kuru bir yerde kurutup yerine tak; giriş ve çıkışın önünü de aç. Filtreye yağ bulaşmışsa 45°C'yi aşmayan sıcak su kullanılabilir. Kılavuz iç ya da dış ünitenin giriş-çıkışının tıkanmasının verimi düşürdüğünü yazıyor; klimayı filtresiz çalıştırma. Filtrenin adım adım çıkarılışı [TCL klima soğutmuyor](/blog/tcl-klima-sogutmuyor/) yazısında.

**7. Turbo ve servis.** Odayı hızlı ısıtmak için TURBO düğmesine bas; ısıtma yine zayıfsa TCL yetkili servisine başvur. Turbo, ısıtmada en yüksek fan hızıyla hızlı ısıtma yapar. Kılavuzun inverterli modeller için verdiği ısıtma dış sıcaklık aralığı -20 ile 30°C; bunun dışında emniyet koruma özellikleri devreye girebilir.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod ve ayar, bekleme, kanat, fan, filtre, giriş-çıkış, turbo | Senin, bu rehberdeki adımlar |
| Soğutucu akışkan yok | TCL yetkili servisi |
| Klima hiç açılmıyor ya da ekranda hata kodu | [TCL klima çalışmıyor](/blog/tcl-klima-calismiyor/) yazısındaki sıra |

⛔ TCL kılavuzu onarımların yalnızca üreticinin yetkili servis merkezince yapılmasını istiyor; her bakımdan önce fişi prizden çek.

Markadan bağımsız anlatım [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısında; filtre için genel rehber [klima filtresi temizleme](/blog/klima-filtresi-temizleme/).

---

**Kaynak künyesi.** Isıtma modu ve buz çözme, sorun giderme tablosu, kanat yönü, fan ve turbo, 8°C ısıtma işlevi, bakım ve çalışma sıcaklıkları TCL'nin tcl.com'daki Türkçe "Duvar Tipi Split Klima Kullanma Kılavuzu"ndan (Elite Plus serisi, TAC-09/12/18/24CHSD/XA51I) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
