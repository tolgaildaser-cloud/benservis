---
title: "Arçelik infrared ısıtıcı çalışmıyor ya da az ısıtıyor: kılavuza göre kontrol"
description: "Arçelik taşınabilir infrared ısıtıcı açılmıyorsa ya da düşük güçte çalışıyorsa: sigorta, fiş, On-Off şalteri, devrilme emniyeti ve termostat. Arçelik kılavuzundan."
slug: "arcelik-infrared-isitici-calismiyor"
date: "2026-10-04"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-04 PAZ (Tolga: "ilk UFO yazısını yaz" → UFO markasının kılavuzları erişilemez, aynı tip cihaz için Arçelik kılavuzu).
# Belge Arçelik ürün sayfasının "Dokümanlar → Kullanma Kılavuzu" bağlantısından alındı (sayfa 4 Eki'de tarayıcıda açıldı), curl HTTP 200 application/pdf.
# #88: web araması YALNIZ belgenin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-ufo-4eki/ · okuma pdftotext -layout + s.14-15 görüntüden (metin katmanı yok), sayfa = PDF sayfası.
#  K) Arçelik Taşınabilir Infrared Isıtıcı Kullanma Kılavuzu, ARC II 1500 M / 2000 M / 2500 M, 20 s.
#     https://gsim2hwnpbvwtwmb1dg11z6.blob.core.windows.net/media/documents/8899621100_202109151550176_User%20Manual%20-%20File%20%28Long%29tr_TR.pdf  md5 0d74a9facee028da5f88b8c066e19a72
#     Ürün sayfası: https://www.arcelik.com.tr/infrared-isitici/arc-ii-1500-m-elektrikli-isitici
# Alıntı denetim tablosu: arcelik-infrared-isitici-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmez"]
steps:
  - "Isıtıcının fişinin prize takılı olduğunu kontrol et."
  - "Sigortanı kontrol et; kapalıysa aç."
  - "Evdeki diğer elektrikli cihazların çalışıp çalışmadığına bak."
  - "Isıtıcının On-Off şalterini On konumuna al."
  - "Devrilme emniyeti şalterinin devrede olduğunu kontrol et; değilse devreye sok."
  - "Isıtıcı düşük güçte çalışıyorsa termostat düğmesini saat yönünde On konumuna çevir."
faq:
  - q: "Arçelik infrared ısıtıcıda neden yalnız bir tel kızarıyor?"
    a: "Arçelik kılavuzuna göre bu bir arıza değil, çalışma şekli. Isıtıcıyı On-Off şalteriyle açınca önce flamanın içindeki küçük rezistans teli kızarır. Termostat saat yönünde çevrilince büyük tel devreye girer ve ısıtıcı en yüksek güçte çalışır. Oda ayarlanan sıcaklığa ulaşınca termostat devreden çıkar; büyük tel söner, küçük tel çalışmaya devam eder. Sıcaklık düşünce termostat yeniden devreye girer."
  - q: "Termostatı nasıl ayarlamalıyım?"
    a: "Kılavuz en yüksek sıcaklık için termostat düğmesini saat yönünde sonuna kadar, en düşük için saat yönünün tersine sonuna kadar çevirmeni söylüyor. Oda istediğin sıcaklığa gelince düğmeyi termostat devreden çıkana kadar saat yönünün tersine çevir; bundan sonra termostat odayı o seviyede tutar."
  - q: "Infrared ısıtıcıyı uzatma kablosuyla kullanabilir miyim?"
    a: "Hayır. Arçelik kılavuzu cihazın uzatma kablosuyla kullanılmamasını ve kesinlikle topraklı prizde kullanılmasını istiyor. Elektrik hattının 220-240 V ve sigortalı olmasını, 16 A sigorta kullanılmasını da yazıyor. Isıtıcı bir prizin hemen altına ya da yakınına konmamalı."
  - q: "Infrared ısıtıcı nasıl temizlenir?"
    a: "Kılavuza göre ısıtıcıyı kapat, fişini çek ve soğumasını bekle. Toz ve kir miktarına göre en az ayda bir, uzun saplı ince bir toz alıcı fırçayla temizle. Cihazı hiçbir sıvıya daldırma, suyla doğrudan temas ettirme; benzin, tiner, solvent gibi maddeler kullanma. Reflektör ve flaman temizliği yalnız cihaz yetkili personel tarafından açıldığında, nemli ve tüy bırakmayan bir bezle yapılır."
  - q: "Isıtıcı yere düştü, kullanabilir miyim?"
    a: "Arçelik kılavuzu yere düşmüş ya da üzerinde gözle görülür hasar olan ısıtıcının kullanılmamasını istiyor. Isıtıcı tüpünde çatlak, kırık varsa, cam paneller hasarlıysa ya da elektrik kablosu zarar görmüşse cihazı çalıştırmadan yetkili servise başvur."
images:
  coverAlt: "Bir oda köşesinde, ayaklı uzun gövdeli bir infrared ısıtıcı; yatay ısıtıcı tüpü turuncu kızarmış"
---

Arçelik'in ayaklı, taşınabilir infrared ısıtıcısı hiç açılmıyorsa ya da açılıyor ama az ısıtıyorsa, önce kılavuzun kontrollerinden geç. Arçelik kullanma kılavuzunun sorun giderme tablosu "Ürün çalışmıyor" için altı kontrol, "Cihaz düşük güçte çalışıyor" için tek bir kontrol sayıyor. Bu yazıdaki adımlar Arçelik ARC II 1500 M / 2000 M / 2500 M taşınabilir infrared ısıtıcı kılavuzundan.

Bu kontroller sonuç vermezse yazının sonundaki bağlantılardan Arçelik'in destek sayfasına ya da yakınındaki servise ulaşabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı, sigorta açık mı, evdeki diğer cihazlar çalışıyor mu bak. On-Off şalterini On'a al, devrilme emniyeti şalterini devreye sok. Az ısıtıyorsa termostatı saat yönünde On'a çevir. Tek tel kızarıyorsa bu normal olabilir: oda ayarlanan sıcaklığa gelmiştir.

## Önce çalışma şeklini bil: iki tel, bir termostat

Arçelik'in bu ısıtıcısında flamanın içinde iki rezistans teli var. Kılavuz hangisinin ne zaman kızardığını şöyle anlatıyor:

| Durum | Ne kızarır | Kılavuzdaki karşılığı |
|---|---|---|
| On-Off şalteriyle yeni açıldı | Küçük tel | İlk etapta flaman içindeki küçük rezistans teli ısınıp kızarır |
| Termostat saat yönünde On konumuna çevrildi | Büyük tel | Küçük tel söner, büyük tel kızarır, ısıtıcı en yüksek güçte çalışır |
| Oda ayarlanan sıcaklığa ulaştı | Küçük tel | Termostat devreden çıkar (OFF), büyük tel söner, küçük tel çalışmaya devam eder |
| Oda soğudu | Büyük tel | Termostat otomatik olarak yeniden devreye girer |

Yani ısıtıcı çalışırken büyük telin sönüp yalnız küçük telin kızarması, termostatın görevini yaptığını gösterir. "Az ısıtıyor" diye düşünmeden önce termostat düğmesinin konumuna bak.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Isıtıcının fişinin prize takılı olduğunu kontrol et. Kılavuz cihazın kesinlikle topraklı prizde kullanılmasını istiyor.

**2. Sigortayı kontrol et.** Sigortan kapalı olabilir; kapalıysa aç. Kılavuz bu ısıtıcı için 16 A sigorta kullanılmasını yazıyor.

**3. Evdeki diğer cihazlara bak.** Evdeki diğer elektrikli cihazların çalışıp çalışmadığını kontrol et. Kılavuza göre şebeke gerilimi 220-240 V arasında olmalı.

**4. On-Off şalterini On'a al.** Isıtıcının On-Off şalteri Off konumunda kalmış olabilir. Şalteri On konumuna al.

**5. Devrilme emniyetini kontrol et.** Kılavuzun sorun giderme tablosu, ısıtıcı çalışmıyorsa devrilme emniyeti şalterinin devrede olup olmadığına bakmanı ve değilse devreye sokmanı istiyor. Isıtıcı, kılavuzun tarif ettiği gibi yatay konumda ve sağlam bir zeminde durmalı; halı, perde gibi şeylerin üzerine konmamalı.

**6. Az ısıtıyorsa termostatı çevir.** Isıtıcı düşük güçte çalışıyorsa termostatın On konumunda olup olmadığını kontrol et. En yüksek sıcaklık için termostat düğmesini saat yönünde sonuna kadar çevir. Oda istediğin sıcaklığa gelince düğmeyi, termostat devreden çıkana kadar saat yönünün tersine çevir; ısıtıcı bundan sonra odayı o seviyede tutar.

## Güvenli kullanım: kılavuzun altını çizdikleri

Arçelik kılavuzu bu ısıtıcı için birçok uyarı veriyor. Kış boyunca en sık karşılaşılabilecek olanlar:

- **Uzatma kablosu yok.** Cihazı uzatma kablosuyla kullanma; prizin hemen altına ya da yakınına koyma.
- **1 metre mesafe.** Isıtıcı mobilya, perde, kâğıt, karton gibi kolay tutuşabilecek şeylerden en az 1 metre uzakta olmalı.
- **Üstünü örtme, çamaşır kurutma.** Aşırı ısınmayı önlemek için ısıtıcının üstünü örtme; elbise, havlu gibi eşyaları kurutmak için kullanma.
- **Banyoda değil.** Banyo, duş ya da yüzme havuzunun yakınında kullanma. Islakken cihaza, nemli ya da ıslak elle fişe dokunma.
- **Gözetimsiz bırakma.** Kullanım sırasında ısıtıcıyı gözetimsiz bırakma; çalışır durumdayken yerini değiştirme. Taşımak için fişini çek ve soğumasını bekle.
- **Çubuğa dokunma.** Quartz çubuğa sigara, metal gibi şeyler değdirme. Dış yüzey çalışırken ısınır; sıcak yüzeylere dokunma.
- **Çocuklar.** 3 yaşından küçük çocuklar sürekli gözetim altında değilse cihazdan uzak tutulmalı. 3-8 yaş arası çocuklar fişi prize takmamalı, cihazı ayarlamamalı ve temizlememeli.

## Temizlik

Kılavuza göre ısıtıcıyı kapat, fişini çek ve soğumasını bekle. Toz ve kir miktarına göre **en az ayda bir**, uzun saplı ince bir toz alıcı fırçayla temizle. Cihazı hiçbir sıvıya daldırma, suyla doğrudan temas ettirme; benzin, tiner, solvent gibi aşındırıcı maddeler kullanma. Reflektör ve flaman temizliği, cihaz yalnız yetkili personel tarafından açıldığında nemli ve tüy bırakmayan bir bezle yapılır; ısıtıcıyı kendin açma.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Fiş, sigorta, On-Off şalteri, devrilme emniyeti, termostat | Senin, bu yazıdaki adımlar |
| Yalnız küçük tel kızarıyor, oda zaten ılık | Kimsenin; termostat odayı ayarlanan seviyede tutuyor |
| Isıtıcı tüpünde çatlak ya da kırık, cam paneller hasarlı | Kullanma; yetkili servis |
| Elektrik kablosu hasarlı | Kullanma; yetkili servis |
| Isıtıcı yere düşmüş ya da üzerinde gözle görülür hasar var | Kullanma; yetkili servis |

⛔ Isıtıcıyı parçalarına ayırma. Arçelik kılavuzu hatalı ya da yetersiz onarımın kullanıcı için tehlike oluşturabileceğini yazıyor; ürün ya da kablo hasar görürse bayi, servis merkezi ya da yetkili bir servis tarafından onarılmasını istiyor.

Kapalı cihazın elektrik tüketimi için [cihazlar bekleme modunda elektrik harcar mı](/blog/cihazlar-bekleme-modunda-elektrik-harcar-mi/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Sorun giderme adımları, çalışma şekli, termostat ayarı, güvenlik uyarıları ve temizlik talimatı Arçelik'in Türkçe "Taşınabilir Infrared Isıtıcı Kullanma Kılavuzu"ndan (ARC II 1500 M, ARC II 2000 M, ARC II 2500 M) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
