---
title: "Bosch bulaşık makinesi E18 hatası: su girişi"
description: "Bosch bulaşık makinesi E18: hortum bükük, giriş filtresi ya da AquaStop tıkalı veya musluk basıncı düşük. Bosch'un kontrol sırası ve servis sınırı."
slug: "bosch-bulasik-makinesi-e18-hatasi"
date: "2026-09-28"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-bulasik-sprint/
#  (W) Bosch TR "Bulaşık Makinesi Hata Kodu E18" https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/bulasik-makinesi-hata-kodu-e18
#      HTML md5 a511e9a65caf6341d7b8aa78e01ae480 (sayfa dinamik) · gövde metni md5 390bf2388a4c2b85a6a03eec76cbf8c7 (iki indirmede birebir aynı)
#      "A) Su giriş hortumu bükülmüş - Su giriş hortumunun bükülmemiş olduğundan emin olun."
#      "B) Su şebeke bağlantısındaki filtreler veya AquaStop hortumu tıkanmış. - Su giriş hortumu filtrelerini temizleyin. Dikkat: AquaStop güvenlik cihazında bir elektrik vanası bulunur. Bu vanayı suya sokmayın."
#      "Talimatlar: 1. Musluğu kapatın. 2. Musluğun ucundaki hortumu çıkarın. 3. Filtreleri küçük bir fırça yardımıyla temizleyin.
#       4. Cihazda AquaStop yoksa cihazın arkasındaki hortumu da çıkarın. Filtreyi bir pense yardımıyla çıkarıp temizleyin. 5. Hortumu yeniden bağlayıp sızıntı olup olmadığını kontrol edin."
#      "C) Su basıncının düşük olması nedeniyle musluk sıkışmış veya kireçlenmiş. Bir kova yardımıyla musluktaki su basıncını kontrol edin. Tamamen açtığınızda musluktan dakikada yaklaşık 10 litre su akması gerekir. Su basıncı düşükse tesisatçınızla iletişime geçin."
#  (M) Bosch TR "Bulaşık makinemin ekranında temiz su musluğu hatası veriyor" https://www.bosch-home.com.tr/musteri-hizmetleri/yardim-destek/ekranda-su-muslugu-hatasi
#      HTML md5 ec824c71ef99eb691d60d9ee87136cc0 (dinamik) · gövde metni md5 d81cfb00321cef3237236eeed44ea546 (iki indirmede aynı)
#      "Cihazı hafifçe öne doğru çekerek soğuk su giriş hortumunda ve atık su hortumunda bükülme olup olmadığını kontrol edin. Görünürde bükülme veya dolanma varsa düzeltin."
#      Basınç: "Musluğu kapatıp hortumu çıkarın. Musluğun altına bir kova koyduktan sonra musluğu açın. Musluk dakikada yaklaşık 10 litre su akıtmalıdır."
#      Filtre: "Musluğu kapatın. Musluğa bağlı olan hortumu çıkarın. Filtreyi akan temiz suyla temizleyin. Küçük bir fırça kullanarak temizleyin. Hortumu yeniden bağlayıp sızıntı olup olmadığını kontrol edin."
#      "Verilen talimatları takip etmenize rağmen … sorun yaşamaya devam ediyorsanız cihazınızı Bosch yetkili servis uzmanına kontrol ettirebilirsiniz."
#  (K) Bosch kısa kılavuz SMS4IKW61T (9001626280) https://media3.bosch-home.com/Documents/9001626280_A.pdf  2 s.  md5 8392c0fbccf9c23bb06945067b41989d
#      s.2 süzgeç yordamı: "1. Cihazı kapatınız. 2. Elektrik fişini prizden çekiniz. 3. Musluğu kapatınız. … 9. Su bağlantısının sızdırmazlığını kontrol ediniz. 10. Elektrik beslemesini sağlayınız. 11. Cihazı çalıştırınız."
#  (D) Bosch kullanma kılavuzu SM.../SB... https://media3.bosch-home.com/Documents/9001220403_D.pdf  52 s.  md5 9f92bf10cb382b056aeddad76140bcc7
#      s.37 "Su girişi kontrolü" satırı: filtre tıkanmışsa "Cihazı kapatınız ve fişi prizden çekiniz. Su musluğunu kapatınız." · "Su musluğu açıkken akan su miktarı (debi) dakikada asg. 10 litre olmalıdır."
#      (D'nin tablosunda E:18 satırı YOK; D yalnız yordam cümleleri için kullanıldı.)
# BİLEREK YAZILMAYANLAR: E18 = "su seviyesi düşük" (Bosch tanımı değil) · giriş valfi/su sayacı teşhisi (belgede yok) ·
#   W'nin 4. adımı (AquaStop'suz cihazda arkadaki hortumun sökülüp filtrenin pense ile çıkarılması) ADIM olarak yazılmadı: makineyi yerinden çıkarmak ve pense gerektirdiği için #31 gereği gövdede
#   Bosch'un talimatı olarak anıldı, kullanıcı adımı yapılmadı · Siemens/Profilo ortaklığı (bu koşuda onların belgesi indirilmedi).
# Alıntı denetim tablosu: bosch-bulasik-makinesi-e18-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Küçük bir fırça", "Kova", "Saat ya da telefon kronometresi"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Makineyi hafifçe öne çekip su giriş hortumunda bükülme ya da dolanma varsa düzelt."
  - "Musluğu kapat ve musluğun ucundaki hortumu çıkar."
  - "Hortum ucundaki filtreyi akan temiz su altında küçük bir fırçayla temizle."
  - "Musluğun altına kova koyup musluğu tam aç; dakikada yaklaşık 10 litre akıp akmadığına bak."
  - "Musluğu kapat, hortumu yeniden bağla, musluğu açıp bağlantıda sızıntı olup olmadığını kontrol et."
  - "Fişi tak ve makineyi çalıştır."
faq:
  - q: "Bosch bulaşık makinesi E18 hatası ne demek?"
    a: "Bosch'un Türkiye destek sayfası E18 için üç sebep sıralıyor: su giriş hortumu bükülmüş; su şebeke bağlantısındaki filtreler veya AquaStop hortumu tıkanmış; su basıncının düşük olması nedeniyle musluk sıkışmış veya kireçlenmiş. Üçü de makineye su gelişiyle ilgili."
  - q: "E18'de giriş filtresi nasıl temizlenir?"
    a: "Bosch'un talimatı: musluğu kapat, musluğun ucundaki hortumu çıkar, filtreleri küçük bir fırça yardımıyla temizle, hortumu yeniden bağlayıp sızıntı olup olmadığını kontrol et. Bosch'un musluk sembolü sayfası filtrenin akan temiz suyla da yıkanmasını söylüyor."
  - q: "Su basıncının yeterli olup olmadığını nasıl anlarım?"
    a: "Bosch bir kova testi tarif ediyor: hortumu musluktan ayır, musluğun altına bir kova koy ve musluğu tamamen aç. Musluktan dakikada yaklaşık 10 litre su akması gerekir. Su basıncı düşükse Bosch tesisatçınla iletişime geçmeni öneriyor."
  - q: "AquaStop hortumunda nelere dikkat etmeliyim?"
    a: "Bosch'un uyarısı şu: AquaStop güvenlik cihazında bir elektrik vanası bulunur, bu vanayı suya sokma. Hortumu temizlerken vana bölümünü suyun altına tutma, yalnız hortum ucundaki filtreyi yıka."
  - q: "Ekranda E18 değil musluk sembolü yanıyor, aynı şey mi?"
    a: "Bosch'un musluk sembolü için ayrı bir destek sayfası var ve orada sayılan üç sebep E18'dekilerle aynı: bükülmüş veya tıkanmış hortum, düşük su basıncı ve filtre tıkanıklığı. Kontrol adımları da aynı. Bosch, bu adımlara rağmen sorun sürerse cihazın yetkili servis uzmanına kontrol ettirilmesini söylüyor."
images:
  coverAlt: "Musluğun altındaki kovaya su akıyor; yanında bulaşık makinesinin su giriş hortumu ucu, içindeki küçük süzgeç ve küçük bir fırça"
---

Bosch bulaşık makinenin ekranında **E18** yazıyor. Bosch'un Türkiye destek sayfası bu kod için üç sebep sayıyor: **"Su giriş hortumu bükülmüş"**, **"Su şebeke bağlantısındaki filtreler veya AquaStop hortumu tıkanmış"** ve **"Su basıncının düşük olması nedeniyle musluk sıkışmış veya kireçlenmiş."** Üçünün de kontrolü makinenin dışında, hortumda ve muslukta yapılıyor. Bu yazıda Bosch'un verdiği sırayı adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E18 = Bosch'a göre makineye su gelişinde bir engel var. Sıra şu: fişi çek → hortumun bükülmesini düzelt → musluğu kapat, hortumu sök, filtreyi fırçayla temizle → kova testiyle musluk basıncına bak (dakikada yaklaşık 10 litre) → hortumu bağla, sızıntıya bak → çalıştır. Basınç düşükse tesisatçı, her şey yerindeyse ve sürüyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Makineyi kapat ve fişini çek.** Bosch'un kılavuzlarındaki su girişi süzgeci yordamı bu iki adımla başlıyor: cihazı kapat, elektrik fişini prizden çek.

**2. Hortumdaki bükülmeye bak.** Bosch'un tarifi: cihazı **hafifçe öne doğru çekerek** soğuk su giriş hortumunda bükülme olup olmadığını kontrol et. Görünürde bükülme ya da dolanma varsa düzelt. Makineyi geri iterken hortumu yeniden kıvırmamaya dikkat et.

**3. Musluğu kapat ve hortumu çıkar.** Musluğu kapat, ardından **musluğun ucundaki** hortumu çıkar.

**4. Filtreyi temizle.** Hortumun musluk tarafındaki ucunda küçük bir süzgeç vardır. Bosch, filtrenin **akan temiz suyla** ve **küçük bir fırça** yardımıyla temizlenmesini istiyor.

⚠️ **AquaStop uyarısı:** Bosch'un kendi cümlesiyle, *"AquaStop güvenlik cihazında bir elektrik vanası bulunur. Bu vanayı suya sokmayın."* Yalnız hortum ucundaki filtreyi yıka, vana bölümünü suyun altına tutma.

**5. Musluk basıncını kontrol et.** Hortum sökülüyken musluğun altına bir **kova** koy ve musluğu **tamamen** aç. Bosch'a göre musluktan **dakikada yaklaşık 10 litre** su akması gerekir. Bir dakika tutup kovadaki suya bakman yeterli. Su bundan belirgin biçimde azsa Bosch'un önerisi tesisatçınla iletişime geçmen.

**6. Hortumu yeniden bağla.** Musluğu kapat, hortumu yeniden bağla, musluğu aç ve bağlantıda **sızıntı olup olmadığını** kontrol et.

**7. Makineyi çalıştır.** Fişi tak ve makineyi çalıştır. Bosch'un yordamı da bu iki adımla bitiyor: elektrik beslemesini sağla, cihazı çalıştır.

## Bosch'un talimatında olup bu rehbere adım olarak koymadığımız kısım

Bosch'un E18 sayfasında bir adım daha var: cihazda **AquaStop yoksa** makinenin arka tarafındaki hortumun da çıkarılması ve oradaki filtrenin bir pense yardımıyla çıkarılıp temizlenmesi. Bu iş makineyi yerinden çıkarmayı gerektiriyor. Musluk tarafındaki kontroller sonuç vermediyse ve bu bağlantıya güvenle ulaşamıyorsan, bu kontrolü yetkili servise bırakmak daha doğru olur.

## Musluk sembolü ve E18

Bosch'un bulaşık makineleri için ayrı bir **"su musluğu" sembolü** sayfası da var. Orada sayılan üç sebep E18'dekilerle aynı: bükülmüş veya tıkanmış hortum, düşük su basıncı ve filtre tıkanıklığı. Yani panelinde E18 yerine musluk sembolü yanıyorsa da yukarıdaki kontroller geçerli. Sembollerin genel listesi için: [Bosch bulaşık makinesi sembolleri ve anlamları](/blog/bosch-bulasik-makinesi-sembolleri-ve-anlamlari/). Yeni nesil Serie 4 modellerin kısa kılavuzunda benzer sebepler (bükülmüş hortum, kapalı ya da kireçlenmiş musluk, tıkalı giriş süzgeci) **E:32-00** satırında veriliyor; o modeller için [Bosch Serie 4 sembolleri ve kodları](/blog/bosch-serie-4-bulasik-makinesi-sembolleri-ve-anlamlari/) yazısına bakabilirsin.

## Ne zaman servis

- **Kova testinde basınç düşük çıktıysa:** Bosch'un önerisi tesisatçınla iletişime geçmen.
- **Hortum düz, filtre temiz, basınç yerinde ve E18 sürüyorsa:** Bosch'un musluk sayfasındaki ifadeyle, talimatlara rağmen sorun devam ediyorsa cihazı **Bosch yetkili servis uzmanına** kontrol ettir.

⛔ **Kendin-çöz sınırı burada biter.** Hortum, musluk ve hortum ucundaki filtre senin alanın; makinenin içindeki su alma sistemi yetkili servisin.

Diğer Bosch kodlarının karşılıkları: [Bosch bulaşık makinesi hata kodları](/blog/bosch-bulasik-makinesi-hata-kodlari/). Markadan bağımsız kontrol sırası: [Bulaşık makinesi su almıyor](/blog/bulasik-makinesi-su-almiyor/).

Ekrandaki kodu ve cihaz modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
