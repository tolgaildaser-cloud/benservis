---
title: "TCL klima soğutmuyor: yetersiz hava akışı"
description: "TCL klima serinletmiyorsa kılavuzun yetersiz hava akışı satırı: sıcaklık ayarı, fan hızı, kanat yönü, tıkalı giriş-çıkış, ısı kaynakları ve filtre yıkama."
slug: "tcl-klima-sogutmuyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belgeler bu koşuda (07:52) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı tcl.com.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/ · sayfa = PDF sayfası.
#  TE) TCL "DUVAR TİPİ SPLİT KLİMA KULLANMA KILAVUZU" Elite Plus serisi TAC-09/12/18/24CHSD/XA51I, 72 s., md5 fe33431694806ff1731a376d548d7af9
#      https://www.tcl.com/content/dam/brandsite/region/turkey/user-manual/ac/User_Manual_Elite_Series_TR_V1.pdf
#      s.40 "Yetersiz hava akışı, sıcak ya da soğuk | Sıcaklık ayarı uygun değildir. / Klima girişleri ve çıkışları tıkanmıştır. / Hava filtresi kirlidir. / Fan hızı minimuma ayarlanmıştır. / Odada başka ısı kaynakları vardır. / Soğutucu akışkan yoktur." · "Hava çıkışından ince bir sis geliyor | Bu, örneğin "SOĞUTMA" veya "NEM ALMA/KURU" modlarında odadaki hava çok soğuduğunda meydana gelir." · "Tuhaf koku | Hava filtresi kirlidir."
#      s.15 "SOĞUTMA MODU Soğutma işlevi, klimanın odayı soğutmasını sağlar ve aynı zamanda Hava nemini azaltır. Soğutma işlevini (SOĞUTMA) etkinleştirmek için ekranda [sembol] sembolü görünene kadar [mod] düğmesine basın. [yukarı] veya [aşağı] düğmesiyle odanın sıcaklığından daha düşük bir sıcaklığa ayarlayın." · "Hava çıkışının yönü, kanatlarla yukarı ve aşağıya doğru motorla hareket ettirilir ve dikey yönlendiriciler ile manuel olarak sağa ve sola hareket ettirilir"
#      s.12 "FAN | Fan hızını ayarlamak: otomatik, sessiz, düşük, orta-düşük, orta, orta-yüksek, yüksek, Turbo." / "6 | Hava akış yönünü dikey olarak (opsiyonel) ayarlamak" / "7 | Hava akış yönünü yatay olarak ayarlamak"
#      s.18 "Turbo işlevini etkinleştirmek için TURBO düğmesine basın ... Bu işlevi iptal etmek için tekrar basın. SOĞUTMA/ISITMA modunda TURBO özelliğini seçtiğinizde cihaz, en yüksek fan hızıyla hızlı soğutma / hızlı ısıtma işlemini gerçekleştirecektir."
#      s.6 "Hava akış yönü uygun şekilde ayarlanmalıdır. Kanatlar, ısıtma modunda aşağıya doğru, soğutma modunda ise yukarıya doğru yönlendirilmelidir." / "Cihazı her zaman hava filtresi takılıyken kullanın."
#      s.7 "İç veya dış ünitenin hava giriş ve çıkışını engellemeyin. Bu açıklıkların tıkanması, klimanın çalışma verimliliğinde bir azalmaya ve akabinde olası arızalara veya hasarlara neden olur."
#      s.39 "BAKIM ... Her türlü bakım öncesi, fişini prizden çekerek, klimayı güç kaynağından ayırınız." / "TOZ FİLTRELERİ 1. Ok yönünü takip ederek, ön paneli açınız. 2. Ön paneli bir elinizle yukarıda tutarak, diğer elinizle hava filtresini dışarı çıkartınız. 3. Filtreyi suyla temizleyiniz; filtreye yağ bulaşması söz konusu ise, 45°C'yi aşmayacak sıcak suyla yıkanabilir. Kuru bir yerde kurumaya bırakınız. 4. Ön paneli bir elinizle yukarıda tutarak, diğer elinizle hava filtresini yerleştiriniz. 5. Kapatınız." / "Elektrostatik ve deodorantlı filtreler (eğer monteliyse) yıkanır veya geri kazanılır olmadıklarından, 6 ayda bir yenileriyle değiştirilmeleri gereklidir."
#      s.23 İnverterli klima Soğutma işlemi: oda "17 °C ~ 32 °C", dış ortam "15 °C ~ 53 °C" ("-15 °C ~ 53 °C Düşük ısılı soğutma sistemi olan modeller için") · "bu koşulların dışında kullanılırsa bazı emniyet koruma özellikleri devreye girebilir."
#      s.19 "Uyku modunda klima, odayı gece boyunca daha konforlu hâle getirmek için sıcaklığı ve fan hızını otomatik olarak ayarlayacaktır."
#  TF) TCL C-FRESH serisi TAC-12CHSD/FAI kılavuzu, 37 s., md5 b603b5b2e0d34e1e43e0769216c94a18
#      https://www.tcl.com/content/dam/brandsite/region/turkey/user-manual/ac/User_Manual_Fresh_Air_Series_TR_V1.pdf
#      s.22 aynı "Yetersiz hava akışı" satırı · s.21 "İpucu: Filtrede birikmiş toz bulduğunuzda klimanın temiz, sağlıklı ve verimli çalışmasını sağlamak için lütfen filtreyi zamanında temizleyin." / "Uzun süreli kapatmadan sonra kullanmaya başlarken: 1. Üniteyi ve filtre süzgecini temizleyin; 2. İç ve dış ünitelerin hava giriş ve çıkışında engeller olup olmadığını kontrol edin; 3. Drenaj hortumunun engellenmediğini kontrol edin;"
# NOT: TCL tablosu çözüm sütunu vermiyor; adımlar nedenin karşılığı + kılavuzun ilgili bölümü (mod s.15, fan s.12, kanat s.6, giriş-çıkış s.7, filtre s.39, turbo s.18). Eşleme .KAYNAK.md'de.
# YAKIN KOPYA: TCL'nin yayında klima sayfası yok. Kardeş tcl-klima-isitmiyor aynı tablo satırını paylaşıyor; bu sayfa soğutmaya özgü notları (kanat yukarı, ince sis, ısı kaynakları) öne alıyor. Ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: soğutucu akışkan (servis) · ısı eşanjörü temizliği (s.39'da var ama ön paneli menteşesinden ayırmayı ve hava püskürtmeyi içeriyor → kullanıcı adımına alınmadı) · elektrostatik filtre değişimi (parça) · fiyat.
# Alıntı denetim tablosu: tcl-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (filtre kuruma hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Su"]
steps:
  - "Kumandada soğutma sembolü görünene kadar mod düğmesine bas ve sıcaklığı oda sıcaklığından daha düşük bir değere ayarla."
  - "Fan hızı sessiz ya da düşük kademedeyse FAN düğmesiyle daha yüksek bir kademeye al."
  - "Kumandadaki yön düğmesiyle kanatları soğutmaya uygun olarak yukarı doğru yönlendir."
  - "İç ve dış ünitenin hava giriş ve çıkışını tıkayan engeli kaldır."
  - "Odadaki başka ısı kaynaklarını azalt."
  - "Klimanın fişini çek, ön paneli açıp hava filtresini çıkar, suyla yıka, kuru bir yerde kurutup yerine tak."
  - "Odayı hızlı serinletmek için TURBO düğmesine bas; soğutma yine zayıfsa TCL yetkili servisine başvur."
faq:
  - q: "TCL klima neden yeterince soğutmaz?"
    a: "TCL kılavuzunun 'Yetersiz hava akışı, sıcak ya da soğuk' satırı altı olası neden sayıyor: uygun olmayan sıcaklık ayarı, tıkanmış giriş ve çıkışlar, kirli hava filtresi, minimuma ayarlanmış fan hızı, odadaki başka ısı kaynakları ve soğutucu akışkanın olmaması. Sonuncusu dışındakiler evde kontrol edilebilir; soğutucu akışkan yetkili servisin işi."
  - q: "Hava çıkışından ince bir sis geliyor. Bozuk mu?"
    a: "Hayır. TCL kılavuzuna göre bu, soğutma ya da nem alma modunda odadaki hava çok soğuduğunda görülür ve tablo bunu arıza olarak vermiyor."
  - q: "Filtreyi ne kadar sık temizlemeliyim?"
    a: "TCL kılavuzu filtrede toz biriktiğini gördüğünde zamanında temizlemeni öneriyor. Filtre suyla yıkanır; yağ bulaştıysa 45°C'yi aşmayan sıcak su kullanılabilir. Takılıysa elektrostatik ve deodorantlı filtreler yıkanmaz, 6 ayda bir yenileriyle değiştirilir. Klimayı filtresiz çalıştırma."
  - q: "Klimadan tuhaf bir koku geliyor, soğutması da zayıf. İlişkili mi?"
    a: "Kılavuz hem tuhaf koku hem de yetersiz hava akışı satırında kirli hava filtresini olası neden olarak sayıyor. Filtreyi yıkayıp kuruttuktan sonra iki belirtiyi yeniden kontrol et."
images:
  coverAlt: "Yaz öğleden sonrası bir çalışma odasında lavabonun yanında süzülmeye bırakılmış ince plastik klima filtresi, arkada duvarda ön paneli kaldırılmış beyaz split klima"
---

Klimadan hava geliyor ama ne yeterince güçlü ne yeterince serin. TCL'nin Türkçe kullanma kılavuzu bu belirtiyi sorun giderme tablosunda **"Yetersiz hava akışı, sıcak ya da soğuk"** satırıyla veriyor ve altı olası neden sayıyor. Bunların beşi evde kontrol edilebilir: **"Sıcaklık ayarı uygun değildir."**, **"Klima girişleri ve çıkışları tıkanmıştır."**, **"Hava filtresi kirlidir."**, **"Fan hızı minimuma ayarlanmıştır."**, **"Odada başka ısı kaynakları vardır."** Tablo çözüm sütunu vermiyor; aşağıdaki adımları kılavuzun soğutma, fan, hava yönü ve bakım bölümlerinden kurduk.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Soğutma modu ve odanın altında bir ayar. Fan sessiz ya da düşükteyse yükselt. Kanatları yukarı çevir. Giriş-çıkışın önünü aç, ısı kaynaklarını azalt. Fişi çek, filtreyi suyla yıka. Hızlı serinletmek için TURBO. Sürerse → TCL yetkili servisi.

## TCL'nin altı nedeni

| Kılavuzdaki olası neden | Kılavuzun ilgili bölümü | Kimin işi |
|---|---|---|
| Sıcaklık ayarı uygun değil | Soğutmada ayar odanın sıcaklığından düşük olmalı | Senin |
| Fan hızı minimumda | FAN düğmesi: otomatik, sessiz, düşük … yüksek, Turbo | Senin |
| Giriş ve çıkışlar tıkalı | İç ya da dış ünitenin hava giriş-çıkışı engellenmemeli | Senin |
| Odada başka ısı kaynakları var | — | Senin |
| Hava filtresi kirli | Bakım: toz filtrelerini suyla temizle | Senin |
| Soğutucu akışkan yok | — | Yetkili servis |

Kılavuz, inverterli modellerde soğutma için oda sıcaklığı aralığını 17-32°C, dış ortam aralığını 15-53°C olarak veriyor; bu koşulların dışında emniyet koruma özellikleri devreye girebilir.

## Adım adım: evde denenecekler

**1. Soğutma modu ve ayar.** Kumandada soğutma sembolü görünene kadar mod düğmesine bas ve sıcaklığı oda sıcaklığından daha düşük bir değere ayarla. TCL'nin soğutma modu odayı soğuturken havanın nemini de azaltır.

**2. Fan hızı.** Fan hızı sessiz ya da düşük kademedeyse FAN düğmesiyle daha yüksek bir kademeye al. Kılavuz fan hızının minimumda kalmasını yetersiz hava akışının ayrı bir nedeni olarak sayıyor. Uyku modunda klima sıcaklığı ve fan hızını kendisi ayarlar.

**3. Kanat yönü.** Kumandadaki yön düğmesiyle kanatları soğutmaya uygun olarak yukarı doğru yönlendir. TCL'nin güvenlik notlarına göre kanatlar soğutmada yukarı, ısıtmada aşağı bakmalı. Kanatlar motorla hareket eder; sağa sola yön veren dikey yönlendiriciler ise elle ayarlanır.

**4. Giriş ve çıkış.** İç ve dış ünitenin hava giriş ve çıkışını tıkayan engeli kaldır. Kılavuz bu açıklıkların tıkanmasının çalışma verimliliğini düşürdüğünü ve arızaya yol açabileceğini yazıyor.

**5. Isı kaynakları.** Odadaki başka ısı kaynaklarını azalt. TCL bunu ayrı bir neden olarak sayıyor.

**6. Hava filtresi.** Klimanın fişini çek, ön paneli açıp hava filtresini çıkar, suyla yıka, kuru bir yerde kurutup yerine tak. Ön paneli ok yönünde kaldırıp bir elinle tutarken filtreyi diğer elinle çekersin. Filtreye yağ bulaşmışsa 45°C'yi aşmayan sıcak su kullanabilirsin. Klimayı filtresiz çalıştırma.

**7. Turbo ve servis.** Odayı hızlı serinletmek için TURBO düğmesine bas; soğutma yine zayıfsa TCL yetkili servisine başvur. Turbo, soğutmada en yüksek fan hızıyla hızlı soğutma yapar; iptal etmek için düğmeye yeniden basılır. Tablonun son nedeni olan soğutucu akışkan eksikliği kullanıcının giderebileceği bir şey değil.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod ve ayar, fan, kanat, giriş-çıkış, ısı kaynakları, filtre, turbo | Senin, bu rehberdeki adımlar |
| Soğutucu akışkan eksik | TCL yetkili servisi |
| Isı eşanjörü temizliği | Yetkili servis |
| Klima hiç açılmıyor ya da ekranda hata kodu | [TCL klima çalışmıyor](/blog/tcl-klima-calismiyor/) yazısındaki sıra |

⛔ TCL kılavuzu onarımların yalnızca üreticinin yetkili servis merkezince yapılmasını istiyor; her bakımdan önce fişi prizden çek.

Kışın ısıtma zayıfsa [TCL klima ısıtmıyor](/blog/tcl-klima-isitmiyor/) yazısına bak. Markadan bağımsız anlatım [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısında; filtre için genel rehber [klima filtresi temizleme](/blog/klima-filtresi-temizleme/).

---

**Kaynak künyesi.** Sorun giderme tablosu, soğutma modu, fan ve turbo, hava yönü, bakım ve çalışma sıcaklıkları TCL'nin tcl.com'daki Türkçe "Duvar Tipi Split Klima Kullanma Kılavuzu"ndan (Elite Plus serisi, TAC-09/12/18/24CHSD/XA51I), filtre ipucu C-FRESH serisi kılavuzundan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
