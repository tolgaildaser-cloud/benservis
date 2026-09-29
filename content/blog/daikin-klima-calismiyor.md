---
title: "Daikin klima çalışmıyor: evde kontrol"
description: "Daikin klima açılmıyor ya da kumandaya tepki vermiyorsa Daikin'in sırası: elektrik, kesici, kumanda pili, zamanlayıcı ve servis sınırı."
slug: "daikin-klima-calismiyor"
date: "2026-09-29"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# Belgeler 2026-09-28'de curl -sL -A "Mozilla/5.0" ile indirildi (HTTP 200); 2026-09-29'da yeniden indirildi, hepsi HTTP 200; PDF md5'leri birebir aynı.
# PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu. Web araması yalnız belgelerin YERİNİ bulmak için.
#  M) Daikin FTXM-M/CTXM-M kullanım kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/operation-manuals/ac/split/CTXM-M_FTXM-M_3PTR393186-10J_Operation%20manuals_Turkish.pdf  50 s.  md5 58ac4c9cad23c9351b2671093b4084f1  (sayfa = PDF sayfası; basılı numara bir eksik)
#     s.42 "Klima çalışmıyor. (ÇALIŞMA lambası yanmıyor.)" → "Kesici kapalı konuma mı getirildi veya sigorta mı patladı?" / "Bir güç kesintisi mi var?" / "Piller uzaktan kumandaya doğru şekilde takıldı mı?" / "Saat ayarı doğru mu?"
#     s.42 "Çalışma aniden duruyor. (ÇALIŞMA lambası yanıp sönüyor.)" → filtre, engeller, "Kesiciyi kapalı konuma getirin ve tüm engelleri kaldırın. Kesiciyi tekrar açık konuma getirin ... Lamba hala yanıp sönüyorsa, ... yetkili servisine danışın."
#     s.42 "Çalışma aniden duruyor. (ÇALIŞMA lambası yanıyor.)" → gerilim dalgalanmasında durur, "Yaklaşık 3 dakika içerisinde çalışmayı otomatik olarak tekrar başlatır."
#     s.42 "Çalışma sırasında normal olmayan bir durum meydana geliyor." → "Kesiciyi önce kapalı ve ardından açık konuma getirin ve klimayı uzaktan kumandadan çalıştırmayı deneyin."
#     s.41 "Çalışma hemen başlamıyor." → durdurulduktan hemen sonra AÇMA/KAPAMA ya da mod yeniden seçildiğinde "Yaklaşık 3 dakika beklemeniz gerekir."
#     s.43 "AÇMA/KAPATMA ZAMANLAYICI ayarlara uygun çalışmıyor." → "AÇMA/KAPATMA ZAMANLAYICI ve HAFTALIK ZAMANLAYICI modlarının aynı zamana ayarlandığını kontrol edin. HAFTALIK ZAMANLAYICI ayarlarını değiştirin veya devre dışı bırakın."
#     s.43 "Uzaktan kumanda doğru çalışmıyor." → "Piller kuruyordur ... Tüm pilleri yeni AAA.LR03 (alkali) pillerle değiştirin."
#     s.44 derhal servis: "Güvenlik kesicisi, sigorta veya toprak kaçağı kesicisi üniteyi sık sık devre dışı bırakıyorsa." / "Bir düğme sık sık işlevini yerine getiremiyorsa." / "Güç kablosu anormal şekilde ısınıyorsa veya hasar görmüşse." → "Kesiciyi kapalı konuma getirin ve yetkili servisi arayın."
#     s.44 "Bir güç kesintisi sonrası • Klima yaklaşık 3 dakika içerisinde çalışmayı otomatik olarak tekrar başlatır."
#  F) Daikin FTXF50~71 kullanıcı başvuru kılavuzu (TR)  https://www.daikin.eu/content/dam/document-library/user%20reference%20guide/ac/Split/FTXF-D.FTXF-A_User%20reference%20guide_4PTR513685-9E_Turkish.pdf  40 s.  md5 cde3ce8b09d3fdaf4cdfe02b26ebd622
#     s.33 "Ünite hiç ÇALIŞMIYORSA." → "Elektrik kesintisi olup olmadığını kontrol edin. Elektrik gelene kadar bekleyin." / "Sigortaların yanık olmadığını veya kesicilerin devreye girmediğini kontrol edin." / "Kullanıcı arabirimindeki pilleri kontrol edin."
#     s.34 "Ünite kullanıcı arabiriminden sinyalleri ALMIYOR." → piller / "Vericinin doğrudan güneş ışığına maruz KALMADIĞINI kontrol edin." / "Odada elektronik starter tipi floresan lambası olup olmadığını kontrol edin. Satıcınıza başvurun."
#     s.34 "Kullanıcı arabirim ekranı boş." → "Kullanıcı arabirimindeki pilleri değiştirin."
#  U) Daikin Ururu Sarara kullanım kılavuzu (TR)  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Ururu-Sarara-Kullanim-Kilavuzu.pdf  48 s.  md5 55395d5dca925e6c5a3e29a64e180cd5
#     s.45 kumanda: "Tüm pilleri yeni kuru AA.LR6 (alkalin) pillerle değiştirin." → pil tipi modele göre değişiyor (M: AAA.LR03, U: AA.LR6); gövdede tip yazılmadı, "kılavuzdaki tip" dendi.
#  T4) daikin.com.tr "Klima Çalışmama Sorunu ve Çözümleri"  https://www.daikin.com.tr/bilgi-ve-ipuclari/klima-calismama-sorunu-ve-cozumleri  md5 d70c9bff360c986acb663cc0cba88de7 (2026-09-29; dinamik, metin 28 Eyl kopyasıyla birebir)
#     "Klimanın açılmama nedenlerinden en yaygını, kumanda pillerinin bitmesidir." / "Sigorta kutusunda klimanın bağlı olduğu hattın aktif olduğundan emin olun." / timer: "bu ayar klimayı otomatik olarak kapatmış olabilir." / "Kumandadan “OFF” ya da “FAN” moduna alınmış olabilir."
#     "Tüm bu adımlara rağmen cihaz hâlâ çalışmıyorsa, durum kart arızası, sensör problemi veya elektriksel bileşen arızası olabilir." → Daikin Yetkili Servis Ağı
#  T2) daikin.com.tr "Hangi Durumlarda Servis Çağırmalısınız?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/hangi-durumlarda-servis-cagirmalisiniz  md5 1d34c92f2cffccf7fd7c11edc8844f94 (2026-09-29)
#     "Priz ve sigorta kontrolüne rağmen cihaz devreye girmiyorsa, Bu durum elektronik devre kartı veya güç kaynağı arızası olabilir. Yetkili servis çağırılmalıdır." / "Klima açıldığında evin sigortası atıyorsa ... Yetkili servise başvurulmalıdır."
# BİLEREK YAZILMAYANLAR: F s.33'teki "Gerekirse sigortayı değiştirin" (elektrik müdahalesi, #31 → yalnız kesici kolunu açma verildi); kart/sensör teşhisi; kumandayı açıp onarma; priz/kablo kontrolü için gövdeyi açma.
# Alıntı denetim tablosu: daikin-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Kumandanın kılavuzda yazan tipte yeni piller"]
steps:
  - "Evde elektrik kesintisi olup olmadığına bak; kesinti olduysa elektrik geldikten sonra klimanın kendiliğinden başlaması için yaklaşık 3 dakika bekle."
  - "Sigorta kutusunda klimanın bağlı olduğu kesicinin kapalı konuma düşmediğini kontrol et; düşmüşse bir kez aç."
  - "Kumandanın ekranı boşsa ya da sinyal gitmiyorsa pillerin doğru yönde takılı olduğuna bak ve hepsini yeni alkali pillerle değiştir."
  - "Kumandayı iç üniteye doğrult; doğrudan güneş ışığı ya da odadaki elektronik starterli floresan lamba sinyali engelliyor mu kontrol et."
  - "Kumandadaki saat, açma-kapama zamanlayıcısı ve haftalık zamanlayıcı ayarlarını kontrol et, gerekmiyorsa kapat."
  - "Klimayı az önce kapatıp açtıysan ya da mod değiştirdiysen yaklaşık 3 dakika bekle."
  - "Hâlâ tepki yoksa kesiciyi kapat, sonra aç ve klimayı kumandadan yeniden çalıştırmayı dene."
  - "Klima yine çalışmıyorsa, kesici sık sık atıyorsa ya da ÇALIŞMA lambası yanıp sönüyorsa model adıyla Daikin yetkili servisine başvur."
faq:
  - q: "Daikin klima hiç açılmıyor, önce neye bakmalıyım?"
    a: "Daikin kılavuzu ÇALIŞMA lambası yanmıyorsa dört soru soruyor: kesici kapalı konuma mı geldi ya da sigorta mı attı, güç kesintisi var mı, kumandanın pilleri doğru takılı mı, saat ayarı doğru mu. Daikin Türkiye ayrıca açılmamanın en yaygın nedeninin kumanda pillerinin bitmesi olduğunu yazıyor."
  - q: "Elektrik gidip geldi, klima çalışmıyor. Bozuldu mu?"
    a: "Büyük olasılıkla hayır. Daikin kılavuzuna göre güç kesintisinden sonra klima yaklaşık 3 dakika içinde çalışmaya kendiliğinden yeniden başlar. Ani gerilim dalgalanmalarında da sistemi korumak için durur ve yaklaşık 3 dakika içinde kendiliğinden başlar."
  - q: "Kumanda ekranı yanıyor ama klima tepki vermiyor, neden?"
    a: "FTXF kılavuzu bu durumda pilleri, doğrudan güneş ışığını ve odada elektronik starterli floresan lamba olup olmadığını kontrol etmeni istiyor. Kumandayı iç üniteye doğrultarak dene. Floresan lamba varsa Daikin satıcıya başvurulmasını öneriyor."
  - q: "Klima kendi kendine kapanıyor, arıza mı?"
    a: "Önce zamanlayıcıya bak. Daikin Türkiye, önceden ayarlanmış bir zamanlayıcının klimayı otomatik olarak kapatmış olabileceğini yazıyor; kılavuz da açma-kapama zamanlayıcısı ile haftalık zamanlayıcının aynı saate ayarlanıp ayarlanmadığını kontrol etmeni istiyor. ÇALIŞMA lambası yanıp sönerek duruyorsa bu bir hata kodudur."
  - q: "Klimayı açınca evin sigortası atıyor, ne yapmalıyım?"
    a: "Kesiciyi tekrar tekrar açmaya çalışma. Daikin kılavuzu güvenlik kesicisi, sigorta ya da toprak kaçağı kesicisi üniteyi sık sık devre dışı bırakıyorsa kesiciyi kapalı konuma getirip yetkili servisi aramanı istiyor. Daikin Türkiye de bu durumda elektriksel bağlantılarda sorun olabileceğini ve yetkili servise başvurulması gerektiğini yazıyor."
images:
  coverAlt: "Oturma odasında duvardaki kapalı beyaz split klimaya doğrultulmuş uzaktan kumanda, yanında yeni piller"
---

Kumandaya basıyorsun, klima hiç tepki vermiyor. Daikin'in Türkçe kullanım kılavuzu bu durumu **"Klima çalışmıyor. (ÇALIŞMA lambası yanmıyor.)"** başlığıyla ele alıyor ve dört soru soruyor: **"Kesici kapalı konuma mı getirildi veya sigorta mı patladı?"**, **"Bir güç kesintisi mi var?"**, **"Piller uzaktan kumandaya doğru şekilde takıldı mı?"**, **"Saat ayarı doğru mu?"** Daikin Türkiye'ye göre açılmamanın en yaygın nedeni kumanda pillerinin bitmesi. Bu yazıda kılavuzun ve Daikin Türkiye'nin sırasını anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Elektrik var mı, kesici düşmüş mü? Kumanda pillerini yenile, kumandayı üniteye doğrult. Zamanlayıcıyı kontrol et. Az önce kapatıp açtıysan 3 dakika bekle. Kesiciyi bir kez kapatıp aç. Hâlâ çalışmıyorsa, kesici sık sık atıyorsa ya da ÇALIŞMA lambası yanıp sönüyorsa → Daikin yetkili servisi.

## Önce lambaya bak

İç ünitedeki ÇALIŞMA lambası sorunun hangi tarafta olduğunu gösterir. Daikin kılavuzu üç durumu ayırıyor:

| ÇALIŞMA lambası | Daikin'in yönlendirmesi |
|---|---|
| Hiç yanmıyor | Elektrik, kesici-sigorta, kumanda pilleri ve saat ayarı kontrolü; bu rehberdeki adımlar |
| Yanıyor ama klima durdu | Ani gerilim dalgalanmasında koruma; yaklaşık 3 dakika içinde kendiliğinden yeniden başlar |
| Yanıp sönüyor | Hata var: filtre ve hava yolu kontrolü, kesiciyi kapatıp açma; sürerse yetkili servis. Kod için [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) |

## Adım adım: evde denenecekler

**1. Elektrik.** Evde elektrik kesintisi olup olmadığına bak; kesinti olduysa elektrik geldikten sonra klimanın kendiliğinden başlaması için yaklaşık 3 dakika bekle. Daikin'e göre işletim sırasında elektrik kesilirse klima elektrik gelince kendiliğinden yeniden çalışır.

**2. Kesici.** Sigorta kutusunda klimanın bağlı olduğu kesicinin kapalı konuma düşmediğini kontrol et; düşmüşse bir kez aç. Kesici klimayı açar açmaz yine düşüyorsa tekrar deneme, doğrudan 8. adıma geç.

**3. Kumanda pilleri.** Kumandanın ekranı boşsa ya da sinyal gitmiyorsa pillerin doğru yönde takılı olduğuna bak ve hepsini yeni alkali pillerle değiştir. Pil tipi modele göre değişiyor; kendi kılavuzunda yazan tipi kullan.

**4. Sinyal yolu.** Kumandayı iç üniteye doğrult; doğrudan güneş ışığı ya da odadaki elektronik starterli floresan lamba sinyali engelliyor mu kontrol et. FTXF kılavuzu ünite sinyal almıyorsa bu iki maddeye bakmanı istiyor; floresan lamba varsa satıcıya başvurulmasını öneriyor.

**5. Saat ve zamanlayıcı.** Kumandadaki saat, açma-kapama zamanlayıcısı ve haftalık zamanlayıcı ayarlarını kontrol et, gerekmiyorsa kapat. Daikin Türkiye, önceden ayarlanmış bir zamanlayıcının klimayı otomatik olarak kapatmış olabileceğini yazıyor; kılavuz da iki zamanlayıcının aynı saate ayarlanıp ayarlanmadığına bakmanı istiyor. Kumandanın OFF ya da FAN modunda kalmadığını da kontrol et.

**6. 3 dakika kuralı.** Klimayı az önce kapatıp açtıysan ya da mod değiştirdiysen yaklaşık 3 dakika bekle. Daikin bunu klimanın korunması için bir önlem olarak tanımlıyor, arıza değil.

**7. Yeniden başlat.** Hâlâ tepki yoksa kesiciyi kapat, sonra aç ve klimayı kumandadan yeniden çalıştırmayı dene. Daikin kılavuzu yıldırım düşmesi ya da radyo dalgaları sonrası normal olmayan bir durumda bu sırayı öneriyor.

**8. Sürerse servis.** Klima yine çalışmıyorsa, kesici sık sık atıyorsa ya da ÇALIŞMA lambası yanıp sönüyorsa model adıyla Daikin yetkili servisine başvur.

## Ne zaman servis?

Daikin Türkiye'ye göre priz ve sigorta kontrolüne rağmen cihaz devreye girmiyorsa **elektronik devre kartı veya güç kaynağı arızası olabilir** ve yetkili servis çağrılmalıdır. Kılavuz şu belirtilerde kesiciyi kapatıp **derhal** yetkili servisi aramanı istiyor:

| Belirti | Ne yapmalı |
|---|---|
| Güvenlik kesicisi, sigorta ya da toprak kaçağı kesicisi üniteyi sık sık devre dışı bırakıyor | Kesiciyi kapat, yetkili servisi ara |
| Bir düğme sık sık işlevini yerine getirmiyor | Kesiciyi kapat, yetkili servisi ara |
| Güç kablosu anormal ısınıyor ya da hasarlı | Kesiciyi kapat, yetkili servisi ara |
| Yanık kokusu var | Çalışmayı durdur, kesiciyi kapat, yetkili servisi ara |
| Kontrollerden sonra hâlâ açılmıyor | Daikin yetkili servisi |

⛔ Sigortayı değiştirmeye, prizi, kabloyu ya da iç ünitenin elektrik kutusunu açmaya çalışma. Daikin kılavuzu klimanın kendin onarılmaya çalışılmamasını istiyor; yanlış bir işlem elektrik çarpmasına ya da yangına yol açabilir.

Lamba yanıp sönüyorsa kodu okuyup ilgili yazıya bak; örneğin [Daikin klima E0 hatası](/blog/daikin-klima-e0-hatasi/). Kumanda tarafının markadan bağımsız anlatımı [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/), genel sebepler [klima çalışmıyor](/blog/klima-calismiyor/) yazısında.

---

**Kaynak künyesi.** Kontrol soruları, lamba durumları, 3 dakika kuralı, kumanda ve zamanlayıcı maddeleri ile derhal servis listesi Daikin'in Türkçe kullanım kılavuzlarından (FTXM-M/CTXM-M, FTXF50~71 ve Ururu Sarara); pil ve zamanlayıcı notları ile servis sınırı daikin.com.tr'deki "Klima Çalışmama Sorunu ve Çözümleri" ve "Hangi Durumlarda Servis Çağırmalısınız?" sayfalarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
