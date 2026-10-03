---
title: "Samsung mikrodalga ısıtmıyor"
description: "Samsung mikrodalga ısıtmıyorsa Samsung'un sırası: bardak su testi yap, yükü azalt, düz tabanlı kap kullan, kapağı ve kapak mandalını kontrol et."
slug: "samsung-mikrodalga-isitmiyor"
date: "2026-10-03"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, mikrodalga koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un KENDİ alan adından indirildi:
#   org.downloadcenter.samsung.com → 302 → downloadcenter.samsung.com (ikisi de samsung.com), HTTP 200, application/pdf.
#   Web araması yalnız model destek sayfalarını bulmak için; PDF adresleri samsung.com/tr/support/model/... sayfalarının kaynağından alındı.
#   Sayfa = PDF sayfası (pdftotext -f N -l N). Yerel: blog-taslaklar/kaynak-mikrodalga-3eki/
#  S1) MS23K3555ES (solo, 23 L)  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=MS23K3555ES&CttFileID=10050739&CDCttType=UM&VPath=UM%2F202501%2F20250124214349803%2FO_DE68_04422C_09_IB_FULL_MW3500K_MS23K3555ES_ND_TR_250113.pdf  36 s.  md5 f6807838775fcda408d8b59dd9004d70
#  S2) MG22M8074AT (ankastre)    https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=MG22M8074AT&CttFileID=10050745&CDCttType=UM&VPath=UM%2F202501%2F20250124215510421%2FO_DE68_04500A_05_IB_FULL_MQ8000M_MG22M8074AT_TR_250113.pdf  44 s.  md5 9fa416f0c1553481e0291524183ee472
# Ana satır: S1 s.27 · S2 s.36 "Sıcak Tutma fonksiyonu dahil Isıtma düzgün çalışmıyor." → "Fırın çalışmıyor olabilir, çok fazla yiyecek pişirilmekte olabilir
#   veya uygun olmayan pişirme malzemesi kullanılıyor olabilir." / "Mikrodalgaya uygun bir kaba bir bardak su koyun ve suyun ısınıp ısınmadığını kontrol etmek
#   için mikrodalgayı 1-2 dakika çalıştırın. Yiyecek miktarını azaltın ve fonksiyonu yeniden başlatın. Alt kısmı düz olan bir pişirme malzemesi kullanın."
#   "Çözme fonksiyonu çalışmıyor." → "Çok fazla yiyecek pişirilmektedir." / "Yiyecek miktarını azaltın ve fonksiyonu yeniden başlatın."
# Çalışmıyor/duruyor: S1 s.27 · S2 s.35 "Fırın çalışmıyor." → "Güç sağlanmıyordur." / "Gücün sağlandığından emin olun." · "Kapak açıktır." / "Kapağı kapatın ve
#   yeniden deneyin." · "Kapak açık güvenlik mekanizmaları yabancı maddeyle kaplıdır." / "Yabancı maddeyi çıkarın ve yeniden deneyin." · "Fırın çalışırken duruyor."
#   → "Kullanıcı yiyeceği çevirmek için kapağı açmıştır." / "Yiyeceği çevirdikten sonra, işlemi başlatmak için Start (Başlat) düğmesine yeniden basın."
# Diğer: S1 s.27 "Pişirme sırasında kıvılcımlar çıkıyor." → "Metal kaplar kullanmayın." · "Pişirme sırasında bir bip sesi çıkıyor." → Auto Cook'ta yiyeceği çevirme
#   sinyali, çevirip Start'a yeniden basın · S1 s.27 "Pişirme sırasında güç çıkışı değişiklikleri arıza değildir." (iç parlaklık değişimi) · S1 s.28 NOT "Önerilen
#   çözüm sorunu çözmezse, yerel Samsung Müşteri Hizmetleri Merkezi'ne başvurun." · S1 s.8 "Döner halka ve döner tabla takılı olmadan mikrodalga fırını ÇALIŞTIRMAYIN."
# Bilerek yazılmayanlar: magnetron/kapak anahtarı teşhisi (belgede yok) · kapak/kasa açma · fiyat · S1 dışındaki modellere genelleme (iki kılavuzun satırları aynı).
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Mikrodalgaya uygun bir kap", "Bir bardak su"]
steps:
  - "Mikrodalgaya uygun bir kaba bir bardak su koy, fırını 1-2 dakika çalıştır ve suyun ısınıp ısınmadığına bak."
  - "Kapağın tam kapandığından emin ol; kapak mandalı ve güvenlik deliklerinin çevresinde yabancı madde varsa temizle."
  - "Kapağı yiyeceği çevirmek için açtıysan, kapadıktan sonra Start (Başlat) düğmesine yeniden bas."
  - "Yiyecek miktarını azalt ve fonksiyonu yeniden başlat; buz çözmede de aynı kural geçerli."
  - "Alt kısmı düz, mikrodalgaya uygun bir kap kullan; metal kap kullanma."
  - "Fırının elektriğinin geldiğinden emin ol; sorun sürerse Samsung Müşteri Hizmetleri'ne başvur."
faq:
  - q: "Samsung mikrodalgam çalışıyor ama yemeği ısıtmıyor, neden?"
    a: "Samsung'un sorun giderme tablosunda 'Isıtma düzgün çalışmıyor' satırının karşısında üç neden yazıyor: fırın çalışmıyor olabilir, çok fazla yiyecek pişiriliyor olabilir ya da uygun olmayan pişirme malzemesi kullanılıyor olabilir. Önerilen işlemler: mikrodalgaya uygun bir kapta bir bardak suyu 1-2 dakika ısıtıp kontrol etmek, yiyecek miktarını azaltıp fonksiyonu yeniden başlatmak ve alt kısmı düz bir pişirme kabı kullanmak."
  - q: "Su testi ne işe yarıyor?"
    a: "Samsung kılavuzu, ısıtmanın gerçekten durup durmadığını anlamak için mikrodalgaya uygun bir kaba bir bardak su koyup fırını 1-2 dakika çalıştırmayı öneriyor. Su ısınıyorsa sorun büyük olasılıkla yükte ya da kapta; tabloya göre o durumda yiyecek miktarını azaltmak ve düz tabanlı kap kullanmak gerekiyor."
  - q: "Pişirme sırasında fırının içindeki ışık parlaklığı değişiyor, bozuk mu?"
    a: "Hayır. Samsung'un tablosuna göre fırın içindeki parlaklık, fonksiyona göre güç çıkışındaki değişikliklerle değişir; pişirme sırasındaki güç çıkışı değişiklikleri arıza değildir."
  - q: "Buz çözme işe yaramıyor, ne yapmalıyım?"
    a: "Samsung tablosunda 'Çözme fonksiyonu çalışmıyor' satırının nedeni çok fazla yiyecek pişirilmesi; çözüm yiyecek miktarını azaltıp fonksiyonu yeniden başlatmak. Otomatik pişirmede duyulan bip sesi ise kılavuza göre yiyeceği çevirme sinyali; çevirdikten sonra Start düğmesine yeniden basılır."
images:
  coverAlt: "Açık kapaklı bir solo mikrodalga fırının cam tablasının ortasında duran içi su dolu bir bardak"
---

Mikrodalga çalışıyor, tabla dönüyor, süre geri sayıyor; ama tabak soğuk çıkıyor. Samsung'un MS23K3555ES ve ankastre MG22M8074AT kılavuzlarındaki sorun giderme tablosunda bu belirtinin adı **"Isıtma düzgün çalışmıyor."** Tablonun yazdığı nedenler: **"Fırın çalışmıyor olabilir, çok fazla yiyecek pişirilmekte olabilir veya uygun olmayan pişirme malzemesi kullanılıyor olabilir."** Üçünün de ilk kontrolü senin elinde.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Bir bardak suyu 1-2 dakika ısıt → kapak tam kapanıyor mu, mandal çevresi temiz mi bak → kapağı açtıysan Start'a yeniden bas → yükü azalt → düz tabanlı, metal olmayan kap kullan → elektrik geliyor mu kontrol et. Su testi de ısınmıyorsa Samsung Müşteri Hizmetleri.

## Adım adım: evde denenecekler

**1. Önce su testi.** Samsung'un tablodaki ilk önerisi bir ölçüm: **mikrodalgaya uygun bir kaba bir bardak su koy** ve suyun ısınıp ısınmadığını görmek için mikrodalgayı **1-2 dakika** çalıştır. Su ısınıyorsa fırın mikrodalga üretiyor demektir; aşağıdaki yük ve kap adımlarına geç. Su soğuk kalıyorsa 2, 3 ve 6. adımlar önemli.

**2. Kapağı ve mandal çevresini kontrol et.** Tablonun "Fırın çalışmıyor" satırında iki kapak nedeni var: **"Kapak açıktır."** (kapağı kapatıp yeniden dene) ve **"Kapak açık güvenlik mekanizmaları yabancı maddeyle kaplıdır."** (yabancı maddeyi çıkarıp yeniden dene). Samsung'un bakım bölümü de kapağı ve kapak contasını temiz tutmanı, kapağın düzgün açılıp kapandığından emin olmanı istiyor.

**3. Kapağı açtıysan Başlat'a yeniden bas.** Tabloya göre **"Fırın çalışırken duruyor."** satırının nedeni çoğu zaman basit: yiyeceği çevirmek için kapak açılmıştır. Çözüm: yiyeceği çevirdikten sonra **Start (Başlat) düğmesine yeniden bas.** Otomatik pişirmede (Auto Cook) duyulan bip sesi de kılavuza göre yiyeceği çevirme sinyali; çevirip yine Start'a basıyorsun.

**4. Yükü azalt.** Çok fazla yiyecek, Samsung'un ısıtma ve buz çözme satırlarının ortak nedeni. İkisinde de önerilen işlem aynı: **yiyecek miktarını azalt ve fonksiyonu yeniden başlat.**

**5. Kabı değiştir.** Tablonun üçüncü önerisi: **alt kısmı düz olan bir pişirme malzemesi** kullan. Kıvılcım satırındaki kural da kapla ilgili: fırın ve çözme fonksiyonlarında **metal kap kullanma.** Hangi kabın uygun olduğunu merak ediyorsan: [mikrodalgada hangi kaplar kullanılır](/blog/mikrodalgada-hangi-kaplar-kullanilir/).

**6. Elektriği kontrol et.** Tablodaki "Fırın çalışmıyor" satırının ilk nedeni **"Güç sağlanmıyordur."**, işlemi **"Gücün sağlandığından emin olun."** Samsung'un genel notu: önerilen çözüm sorunu çözmezse **yerel Samsung Müşteri Hizmetleri Merkezi'ne** başvur.

## Arıza sanılan normal durumlar

- **İç ışığın parlaklığı değişiyor:** Samsung'a göre parlaklık, fonksiyona göre güç çıkışındaki değişikliklerle değişir; arıza değildir.
- **Pişirme bitti, fan hâlâ çalışıyor:** soğutma fanı fırını havalandırmak için pişirmeden sonra yaklaşık **3 dakika** çalışmaya devam eder.
- **Kapakta su damlası ya da buhar:** yiyeceğe bağlı olarak su veya buhar olabilir; fırın soğuyunca kuru bir bulaşık havlusuyla sil.

Markadan bağımsız kontrol listesi için [mikrodalga çalışıyor ama ısıtmıyor](/blog/mikrodalga-isitmiyor/) yazısına bakabilirsin. Fırın çalışırken kendi kendine kapanıyorsa: [Samsung mikrodalga kendiliğinden kapanıyor](/blog/samsung-mikrodalga-kendiliginden-kapaniyor/).

## Ne zaman servis

- **Su testinde bardaktaki su 1-2 dakikada ısınmıyorsa** ve kapak, mandal çevresi ve elektrik kontrol edildiyse: Samsung Müşteri Hizmetleri.
- **Kapak ya da kapak contası hasarlıysa:** Samsung'un güvenlik bölümü hasarlı fırının kalifiye bir teknisyen onarmadan çalıştırılmamasını istiyor.
- **Ekranda C-d0 gibi bir bilgi kodu varsa:** MS23K3555ES kılavuzuna göre C-d0, kontrol düğmelerine 10 saniyeden uzun basıldığını gösterir; önce düğmeleri temizle ve çevresindeki yüzeyde su var mı bak. Kod yeniden gelirse fırını en az 30 saniye kapatıp yeniden ayarlamayı dene; yine gelirse Samsung Müşteri Hizmetleri.
- **Kapak düzgün açılıp kapanmıyorsa:** Samsung'un bakım bölümü önce kapak contalarında pislik birikip birikmediğine bakmanı istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Yük, kap, kapak temizliği ve yeniden başlatma kullanıcıya; fırının içindeki elektrik ve mikrodalga parçaları servise aittir. Mikrodalganın kasası açılmaz.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (ürün etiketinde, ör. MS23K3555ES)? Solo mu, ankastre mi?
2. Su testinde su ısındı mı?
3. Kapak tam kapanıyor mu, kapağı açıp kapadıktan sonra Start'a bastın mı?
4. Ekranda bir kod var mı?

Bu dördüne cevabın varsa servise "ısıtmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
