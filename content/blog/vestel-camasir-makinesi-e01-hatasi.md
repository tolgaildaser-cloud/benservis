---
title: "Vestel çamaşır makinesi E01 hatası"
description: "Vestel çamaşır makinesi E01 hatası: Vestel'e göre kapı açık kalmış. Kapağı doğru kapatma, conta ve yük kontrolü ve servis sınırı adım adım."
slug: "vestel-camasir-makinesi-e01-hatasi"
date: "2026-09-18"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-18, curl -sL -A "Mozilla/5.0" ile indirildi; pdftotext (düz, -layout ve sayfa sayfa) ile okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
# Beş resmî Vestel kılavuzu, hepsi statik.vestel.com.tr, hepsi HTTP 200:
#  A) CMI 86201   https://statik.vestel.com.tr/webfiles/20264687_k.pdf  40 s.  md5 7a5f38c8ae4890b1b1e7e691f2de1950  (sayfa atıfları bu belgeye göre)
#  B) CMI 106221  https://statik.vestel.com.tr/webfiles/20264677_k.pdf  40 s.  md5 00dc59105bf528b9c00b0f116d220f77
#  C) CMI 87302 WIFI  https://statik.vestel.com.tr/webfiles/20265394_k.pdf  43 s.  md5 609c99fc8bc6b4bc3d75f8c31017b37f
#  D) KCMI 98142 WIFI https://statik.vestel.com.tr/webfiles/20263189_k.pdf  49 s.  md5 9e654374ff661c2fb154e0c548526d7c
#  E) CMI 128222 WIFI https://statik.vestel.com.tr/webfiles/20264675_k.pdf  43 s.  md5 c7607ad9886b39d7be76043a5285bfba
# E01 satırı ("10. OTOMATİK ARIZA UYARILARI VE YAPILMASI GEREKENLER") beş belgede birebir aynı:
#   "E01 Makinenizin kapısı açık kalmış. | Makinenizin kapısını kapatın. Makineniz hala hata veriyorsa,
#    makinenizi kapatıp, fişini çekin ve hemen en yakın yetkili servise başvurun."  (A s.32, B s.32, C s.35, D s.41, E s.35)
# Kapı kilidi/kilit mekanizması arızası E01'in anlamı olarak YAZILMADI (Vestel metninde yok).
# "Fişi çekip birkaç dakika bekleyip tekrar dene" reseti YAZILMADI: Vestel'in E01 talimatı fişi çektikten sonra servise yönlendiriyor.
# Alıntı denetim tablosu: 2026-09-18-vestel-camasir-makinesi-e01-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru bir bez"]
steps:
  - "Kapağı aç ve kazanın içini kontrol et; önceki yıkamadan kalan eşya varsa çıkar."
  - "Kapak ile körüklü conta arasına sıkışmış bir çamaşır ucu olup olmadığına bak."
  - "Körükte yabancı cisim kalmadığını kontrol et ve körüğü kuru bir bezle kurula."
  - "Yükün, seçtiğin programın azami çamaşır miktarını aşmadığından emin ol; çamaşırları iyi yayılmış olarak yerleştir."
  - "Kapağı, kilitlendiğini duyana kadar it ve tam kapandığından emin ol."
  - "Programı seç ve Başlat/Beklet tuşuyla başlat."
  - "E01 sürüyorsa makineyi kapat, fişini çek ve yetkili servise başvur."
faq:
  - q: "Vestel çamaşır makinesi E01 hatası ne demek?"
    a: "Vestel'in kullanım kılavuzlarındaki otomatik arıza uyarıları tablosunda E01'in karşılığı tek cümle: makinenizin kapısı açık kalmış. Aynı kılavuzlara göre kapı tam olarak kapatılmazsa makine yıkama işlemini başlatmaz."
  - q: "E01 hatasında ne yapmalıyım?"
    a: "Vestel'in tablosundaki talimat iki adımlı: önce makinenin kapısını kapat. Makine hâlâ hata veriyorsa makineyi kapat, fişini çek ve en yakın yetkili servise başvur."
  - q: "Kapı kapalı görünüyor ama E01 gitmiyor, neye bakmalıyım?"
    a: "Vestel, kapıyı kapatırken kapak ile körüklü conta arasına çamaşır sıkışmamasına dikkat edilmesini ve kapının kilitlendiği duyulana kadar itilmesini istiyor. Kapağı açıp conta kenarını kontrol et ve bu şekilde yeniden kapat. Hata sürüyorsa kılavuzun talimatı makineyi kapatıp fişini çekmek ve yetkili servise başvurmaktır."
  - q: "Ekranda E01 yerine CL yazıyor, bu ne?"
    a: "Vestel kılavuzlarına göre CL çocuk kilidinin devrede olduğunu gösterir. Çocuk kilidi, yıkama sırasında tuşlara basılması ya da program düğmesinin çevrilmesiyle program akışının etkilenmesini önler. Devreden çıkarmak için kılavuzda gösterilen iki tuşa aynı anda 3 saniyeden uzun basılır; kilit kalkınca CL söner."
  - q: "Program çalışırken kapağı açabilir miyim?"
    a: "Vestel, makine çalışırken kapağın zorlanmamasını istiyor. Kılavuzlara göre modele bağlı olarak kapak yıkama bittikten 2 dakika sonra ya da yıkama çevrimi biter bitmez açılır. Çalışan programı durdurmak için program düğmesi İPTAL konumuna getirilir."
images:
  coverAlt: "Aydınlık bir çamaşır odasında kapağı yarı aralık duran beyaz, ön yüklemeli bir çamaşır makinesi; kapak camının çevresindeki gri lastik conta ve boş tambur görünüyor"
---

Çamaşırları yerleştirdin, programı seçtin, başlat tuşuna bastın; makine çalışmadı ve ekranda **E01** yazıyor. Vestel'in çamaşır makinesi kullanım kılavuzlarındaki otomatik arıza uyarıları tablosunda bu kodun karşılığı tek cümledir: **"Makinenizin kapısı açık kalmış."** Tablonun önerdiği işlem de kısadır: kapıyı kapat; makine hâlâ hata veriyorsa makineyi kapat, fişini çek ve yetkili servise başvur. Bu yazıda o kısa talimatı, aynı kılavuzların yükleme, kapı ve bakım bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E01 = Vestel'e göre kapı açık kalmış. Sıra şu: kapağı aç → kazanı, körüğü ve conta kenarını kontrol et → kapağı kilitlendiğini duyana kadar it → programı başlat. Kapı kapalıyken E01 sürüyorsa makineyi kapat, fişini çek → yetkili servis.

## Adım adım: evde denenecekler

**1. Kapağı aç ve kazana bak.** Vestel, yüklemeden önce kazanın içinin kontrol edilmesini istiyor; içeride önceki yıkamalardan kalan eşya olabilir. Varsa program seçmeden önce çıkar.

**2. Conta kenarını kontrol et.** Kılavuzun yükleme bölümündeki uyarı açık: kapıyı kapatırken **kapak ile körüklü contanın arasına çamaşır sıkışmamasına** dikkat et. Bir kol, çorap ya da havlu ucu bu aralığa taşmışsa içeri it.

**3. Körüğü temizle ve kurula.** Vestel, her yıkamadan sonra kazanda ve körükte yabancı cisim kalmadığının kontrol edilmesini ve körüğün **kuru bir bezle** kurulanmasını istiyor. Körükteki delikler tıkalıysa bunların da temizlenmesi gerekiyor.

**4. Yüke bak.** Makineye, seçtiğin programda belirtilen **azami çamaşır miktarını** aşmayacak kadar çamaşır koy. Vestel, çamaşırların iyi yayılmış olarak ve her birinin ayrı yerleştirilmesini, yorgan ve battaniye gibi eşyaların katlanarak konmasını istiyor.

**5. Kapağı doğru kapat.** Kılavuzdaki ifade şu: kapının kapanması için **kilitlendiğini duyana kadar it**. Ardından kapının tam olarak kapandığından emin ol.

**6. Programı başlat.** Programı seç ve **Başlat/Beklet** tuşuna bas.

**7. Hata sürüyorsa dur.** Vestel'in E01 talimatı bu noktada nettir: makine hâlâ hata veriyorsa makineyi kapat, **fişini çek** ve en yakın yetkili servise başvur.

## E01 tam olarak neyi söylüyor?

Vestel kılavuzları, makinenin yıkama sırasında kendini sürekli kontrol ettiğini ve bir arıza oluştuğunda hem gerekli önlemleri alıp hem de kullanıcıyı uyaran sistemlerle donatıldığını yazıyor. E01, bu uyarıların kapıyla ilgili olanıdır ve metni yalnızca kapının açık kaldığını söyler.

Aynı kılavuzların başka iki yeri bu kodla aynı yöne bakar. Kullanım bölümüne göre **kapı tam olarak kapatılmazsa makine yıkama işlemini başlatmaz**. Küçük arızalar tablosunda da "makineniz çalışmaya başlamıyor" ve "makineniz su almıyor" şikâyetlerinin olası sebepleri arasında kapının tam kapalı olmaması sayılır; çözüm olarak da kapının kapatılması verilir.

Vestel'in yayımladığı çamaşır makinesi tablosunda E01'in yanında E02, E03 ve E04 de yer alır. Diğer kodların karşılıkları için [Vestel çamaşır makinesi hata kodları](/blog/vestel-camasir-makinesi-hata-kodlari/) yazısına, pompa filtresi temizliğinin anlatıldığı tahliye kodu için [Vestel çamaşır makinesi E03 hatası](/blog/vestel-camasir-makinesi-e03-hatasi/) yazısına bakabilirsin.

## Kapağı zorlamadan: açma, iptal ve bekleme

E01'le uğraşırken kapağı zorlamak ters etki yapar. Vestel, **makine çalışırken kapağın zorlanarak açılmamasını** istiyor. Kılavuzlara göre modele bağlı olarak kapak, yıkama bittikten **2 dakika sonra** ya da yıkama çevrimi biter bitmez açılır.

Çalışan bir programı durdurman gerekirse kılavuzdaki sıra şu:

- Program düğmesini **İPTAL** konumuna getir; makine yıkamayı durdurur ve program iptal olur.
- İçerideki suyu boşaltmak için program düğmesini herhangi bir programa getir; makine boşaltmayı yapıp programı iptal eder.
- Ardından yeni bir program seçerek makineyi çalıştırabilirsin.

Program bittiği hâlde kapak açılmıyorsa sırayla denenecekler [çamaşır makinesinin kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısında.

## Ekranda E01 değil, CL yazıyorsa

Vestel makinelerde **CL**, çocuk kilidinin devrede olduğunu gösterir. Kılavuza göre çocuk kilidi, yıkama sırasında tuşlara basılması ya da program düğmesinin çevrilmesiyle program akışının etkilenmesini önler. Kilit devredeyken bir tuşa basınca CL yanıp söner.

**Kendin kontrol et:** Kilidi devreden çıkarmak için kılavuzunda gösterilen iki tuşa aynı anda **3 saniyeden uzun** bas; kilit kalkınca CL söner. Bir not: çocuk kilidi devredeyken program düğmesi İPTAL'e getirilip başka bir program seçilirse, Vestel'e göre önceki program kaldığı yerden devam eder. Programı iptal edemiyorsan önce çocuk kilidine bak.

## Kapak ve çocuk güvenliği

Vestel kılavuzları iki alışkanlığı birlikte öneriyor. Yıkama bittiğinde çamaşırları çıkardıktan sonra makinenin içinin kuruyabilmesi için **kapıyı açık bırak**; makineyi uzun süre kullanmayacaksan da açık kapı nemden doğan kötü kokuyu önler. Öte yandan çocukları makinenin yanında **gözetimsiz bırakma**: kılavuzun uyarısına göre çocuklar kendilerini cihazın içine kilitleyebilir. Çalışma sırasında kapak camı ve yüzeyi de aşırı ısınmış olabilir.

## Sınır nerede biter

Kapak kapalı, conta kenarı temiz, yük uygun ve E01 hâlâ geliyorsa Vestel'in kılavuzu kullanıcıya başka adım vermiyor: makineyi kapat, fişini çek ve yetkili servise başvur. Kılavuzun genel uyarısı da aynı yönde: herhangi bir arıza durumunda önce fişi prizden çıkar ve musluğu kapat, **kendin tamir etmeye çalışma**.

⛔ **Kendin-çöz sınırı burada biter.** Vestel, makinede yapılması gereken tüm tamiratların yetkili servislerce yapılmasını istiyor. Kural basit: **kapak, conta ve yükleme kullanıcıya; makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Kazanda ve körükte yabancı cisim kaldı mı?
2. Kapak ile conta arasına çamaşır sıkışmış mı?
3. Yük, seçilen programın azami miktarını aşıyor mu?
4. Kapak, kilitlendiği duyulana kadar itildi mi?
5. Hata sürünce makine kapatılıp fişi çekildi mi?

Bu beşine cevabın varsa servise "makine çalışmıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
