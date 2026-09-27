---
title: "Samsung bulaşık makinesi LC hatası: su kaçağı"
description: "Samsung bulaşık makinesinde LC (LE) sızıntı kontrolü demek. Kılavuzdaki ilk adımlar: suyu ve şalteri kapat, kaçak sebeplerine bak, servis sınırı."
slug: "samsung-bulasik-makinesi-lc-hatasi"
date: "2026-09-27"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-27 PAZ (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, pdftotext -layout ile okundu.
# #88: bilgiler YALNIZ Samsung'un kendi belgelerinden; web araması kullanılmadı (belge yerleri samsung.com/tr model destek sayfalarından).
# (S) Samsung TR "Bulaşık Makinesi Hakkında SSS" https://www.samsung.com/tr/home-appliances/faq-dishwasher/
#     md5 800f3dae1021411046adba7cc8ad8cc6 (24 Eyl kopyası cbeee153…; sayfa dinamik, kod listesi metni birebir aynı)
#     "LC/LE: Sızıntı sorunları" · "Sıradan bulaşık deterjanı kullanmak aşırı köpük oluşturabilir, etrafa taşarak dağınıklığa yol açabilir"
# (A) Kılavuz DW5500MM (DW60M5052F*/5062F*/5042F*/5050BB) DD81-02615C-11 TR 2024-11-08, 200 s., md5 2ad54a56734b93dbaeefbcd4fdc3b385
#     org.downloadcenter.samsung.com/…/DW5500MM_DD81-02615C-11_KA_TR_EN_241108.pdf
#     s.56 LC "Sızıntı kontrolü • Güç besleme vanasını kapatın. Evinizin devre kesici paneline gidin ve bulaşık makinesinin
#          devre kesicisini kapatın. Sonra, onarım işleri için montöre başvurun. Sorun devam ederse yerel bir Samsung servis merkezi ile iletişime geçin."
#     s.55 "Bulaşık makinesi kaçak yapıyor": dağıtıcı aşırı dolu / parlatıcı sıçramış → "Herhangi bir sıçramayı nemli bir bezle silin" · "Bulaşık makinesi dengeli değil" → "dengeli olduğundan emin olun"
#     s.53 "Borunun içindeki köpükler": uygun olmayan deterjan → kapağı aç, köpüğün uçmasını sağla, 4 litre soğuk su ekle, kapat, "suda bekletme" döngüsü, gerekirse tekrar
#     s.52 "Boşaltma pompası durmuyor — Taşma: Sistem taşmayı algılayacak şekilde tasarlanmıştır … devridaim pompası kapatılır ve boşaltma pompası çalıştırılır."
#     s.21 "Yalnızca bulaşık makinesi deterjanı kullanın. Diğer deterjan türleri aşırı köpük oluşturur"
# (B) Kılavuz DW5500MM IB (DW60DG550F**/DW60DG560F**) DD81-04448A-00 2024-01-30, 124 s., md5 cb6d487995a7756fdd098efb6f4986e6 — s.54 LC satırı A ile birebir
# (C) Kılavuz DW8500AM (DW60A807*/806*/805*/804*) DD81-03206J-04 2023-06-28, 172 s., md5 0bac38bffb63954fc975765ab1c13167 — s.72 LC: "…onarım işleri için yerel bir Samsung servis merkezi ile iletişime geçin"
# (D) Kılavuz DW9000H (DW60H9950/DW60K8550) DD68-00158F-09 2018-05-09, 132 s., md5 370daab2b2de63dacb7920a1e1e60c79
#     s.38 LC "Eğer su besleme valfi bağlantısında bir sızıntı meydana gelirse, su besleme valfini kapatın ve … şalterini kapatın ve ardından onarması için bir kurulumcu ile iletişime geçin."
# (E) Kılavuz DW5000H (DW60H6050/5050/3010) DD81-01651A-09 2017, 156 s., md5 7c65d2a4e2da01774637dc253f7f10d6
#     s.44 LE "Kaçak hatası — Eğer kaçak anahtarı 2 saniye için açıksa. … kapak kapalıysa, bulaşık makinesi, kapalıyken meydana gelen su kaçağı durumunda suyu otomatik olarak boşaltır."
# BİLEREK YAZILMAYANLAR: "alt tava/şamandıra/makineyi eğ" (Samsung belgelerinde yok) · kaçak sebebi olarak kapı contası/hortum yırtığı teşhisi (belgede yok) ·
#   "kuruyunca yeniden çalıştır" reseti (Samsung LC'de yeniden çalıştırma demiyor; montör/servise yönlendiriyor) · ayak ayarı (Alyan/tornavida gerektiren kurulum işi, #31).
# A'daki "Güç besleme vanası" ifadesi D'de "su besleme valfi" — yazıda "su besleme vanası (musluğu)" dendi.
# Alıntı denetim tablosu: samsung-bulasik-makinesi-lc-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Nemli bir bez", "El feneri"]
steps:
  - "Makineye su veren besleme vanasını (musluğu) kapat."
  - "Evin sigorta panelinden bulaşık makinesinin şalterini kapat."
  - "Musluk ile su giriş hortumunun bağlantısında damlama olup olmadığına bak."
  - "Parlatıcı dağıtıcısının çevresinde taşma ya da sıçrama varsa nemli bir bezle sil."
  - "Son yıkamada yalnız bulaşık makinesi deterjanı kullanıldığını kontrol et."
  - "Makinenin dengeli durup durmadığına bak; değilse ayarı kurulumu yapan montöre bırak."
  - "Kılavuzun dediği gibi onarım için montöre, sorun sürerse Samsung servisine başvur."
faq:
  - q: "Samsung bulaşık makinesinde LC hatası ne demek?"
    a: "Samsung, LC'yi (bazı modellerde LE) sızıntı sorunu olarak tanımlıyor; kılavuzlardaki başlık 'Sızıntı kontrolü'. Kılavuzun ilk talimatı su besleme vanasını ve makinenin şalterini kapatmak, ardından onarım için montöre, sorun sürerse Samsung servisine başvurmak."
  - q: "LC ile LE aynı şey mi?"
    a: "Samsung'un Türkiye destek sayfasındaki kod listesinde iki kod birlikte, LC/LE olarak ve aynı anlamla, sızıntı sorunları başlığıyla geçiyor. 2017 tarihli bir Samsung kılavuzunda aynı durum LE ve 'Kaçak hatası' adıyla yer alıyor."
  - q: "LC varken pompa sürekli çalışıyor, bu normal mi?"
    a: "Samsung kılavuzuna göre makine taşmayı algılayacak şekilde tasarlanmış; bu durumda devridaim pompası kapanır ve boşaltma pompası çalıştırılır. 2017 tarihli bir kılavuz da kapak kapalıysa makinenin kaçak durumunda suyu otomatik olarak boşalttığını yazıyor. Yine de su vanasını ve şalteri kapatıp servise haber vermek gerekir."
  - q: "Elde bulaşık deterjanı kullandım, sebep bu olabilir mi?"
    a: "Samsung, bulaşık makinesi deterjanı dışındaki deterjanların aşırı köpük oluşturduğunu ve sıradan bulaşık deterjanının köpüğünün etrafa taşabileceğini söylüyor. Kılavuzda makinenin içi köpük dolduğunda izlenecek bir yol da var; yazıda adım adım anlattık."
  - q: "LC geçti, makineyi yeniden çalıştırabilir miyim?"
    a: "Samsung'un LC talimatı yeniden çalıştırmayı değil, önce montöre, sorun sürerse Samsung servisine başvurmayı söylüyor. Kaçağın kaynağı belli değilse makineyi o hâliyle yeniden kullanmak yerine bu sırayı izlemek daha doğru olur."
images:
  coverAlt: "Kapağı kapalı bir bulaşık makinesinin önünde mutfak zemininde duran nemli bir bez"
---

Ekranda **LC** yazıyor. Bazı Samsung modellerinde aynı durum **LE** olarak görünür. Samsung bu kodu **"Sızıntı sorunları"** olarak tanımlıyor; kılavuzlardaki başlığı ise **"Sızıntı kontrolü"**. Yani makine bir su kaçağı algılamış.

Bu kodda Samsung'un kılavuzu önce **güvenliği** öne alıyor: su kapatılır, elektrik kesilir. Aşağıdaki adımlar bu sırayı izliyor ve kılavuzun kaçak için saydığı, evde bakılabilecek sebeplerle devam ediyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** LC / LE = sızıntı kontrolü. Sıra: su vanasını kapat → makinenin şalterini kapat → musluk bağlantısına, parlatıcı taşmasına, deterjan türüne ve makinenin dengesine bak → onarım için montöre, sorun sürerse Samsung servisine başvur.

## LC'nin anlamı: Samsung ne diyor?

Samsung Türkiye'nin bulaşık makinesi destek sayfasında kod **LC/LE: Sızıntı sorunları** olarak geçiyor. İncelediğimiz dört Samsung kullanım kılavuzunun bilgi kodu tablosunda da LC var ve talimat hepsinde aynı çizgide:

| Belge | Samsung'un LC talimatı |
|---|---|
| 2024 tarihli kılavuz (DW60M5052F* ailesi) | Su besleme vanasını kapat, devre kesici panelinden makinenin şalterini kapat, onarım için montöre başvur; sorun sürerse Samsung servis merkezi |
| 2023 tarihli kılavuz (DW60A80** ailesi) | Vanayı ve şalteri kapat, onarım için Samsung servis merkezi |
| 2018 tarihli kılavuz (DW60H9950 / DW60K8550) | Su besleme valfi bağlantısında sızıntı varsa vanayı ve şalteri kapat, onarım için kurulumcuya başvur; sorun sürerse Samsung servis merkezi |

2017 tarihli bir başka Samsung kılavuzu aynı durumu **LE** ve **"Kaçak hatası"** adıyla veriyor: kod, makinenin **kaçak anahtarı** devreye girdiğinde görünüyor.

Diğer kodların karşılıkları için [Samsung bulaşık makinesi hata kodları](/blog/samsung-bulasik-makinesi-hata-kodlari/) yazımıza bakabilirsin.

## Adım adım: evde denenecekler

**1. Suyu kapat.** Makineye su veren **besleme vanasını (musluğu)** kapat. Samsung'un LC talimatı bu adımla başlıyor.

**2. Elektriği kes.** Evin sigorta panelinden **bulaşık makinesinin şalterini** kapat. Kılavuz bu adımı "devre kesici" üzerinden anlatıyor.

**3. Musluk bağlantısına bak.** El feneriyle musluk ile su giriş hortumunun birleştiği yere bak; damlama var mı? Samsung'un 2018 tarihli kılavuzu LC'yi özellikle **su besleme valfi bağlantısındaki** sızıntı için anlatıyor. Bağlantıyı söküp takmak bir kurulum işidir; sen yalnız gözle kontrol et.

**4. Parlatıcı taşmasını sil.** Kılavuzun "Bulaşık makinesi kaçak yapıyor" satırında ilk sebep, **parlatıcı dağıtıcısının aşırı dolu olması** ya da parlatıcının **sıçraması**. Samsung'un önerisi: sıçramayı **nemli bir bezle** sil ve dağıtıcıyı aşırı doldurmamaya dikkat et; dökülen parlatıcı taşmaya neden olabilir.

**5. Deterjanı kontrol et.** Son yıkamada **yalnız bulaşık makinesi deterjanı** kullanıldı mı? Samsung'a göre diğer deterjan türleri aşırı köpük oluşturur; sıradan bulaşık deterjanının köpüğü etrafa taşabilir. İçerisi köpük doluysa aşağıdaki bölüme bak.

**6. Dengeye bak.** Aynı satırdaki ikinci sebep: **makinenin dengeli olmaması**. Makine gözle bakınca bir yana yatık duruyorsa bunu not et. Ayakların ayarı kılavuzda kurulum bölümünde, alet kullanılarak yapılan bir iş olarak anlatılıyor; bu ayarı kurulumu yapan montöre bırak.

**7. Montöre, gerekirse servise başvur.** Samsung'un LC talimatı yeniden çalıştırmayı değil, **onarım için montöre**, sorun sürerse **Samsung servis merkezine** başvurmayı söylüyor. Servise giderken ekrandaki kodu (LC ya da LE), model adını ve bulduğun şeyleri (damlama, parlatıcı taşması, köpük) söylemen işi hızlandırır.

⚠️ Bu adımların hiçbiri makinenin kapağını, alt panelini ya da gövdesini açmayı gerektirmez. Kaçağın kaynağını makinenin içinde aramak bu listenin dışındadır.

## Makinenin içi köpük doluysa

Yanlış deterjan kullanıldığında makinenin içi köpükle dolabilir. Samsung kılavuzu bu durum için şu yolu tarif ediyor:

- Kapağı aç ve **köpüğün dağılmasını** bekle.
- Makinenin içine **4 litre soğuk su** ekle.
- Kapağı kapat ve suyu boşaltmak için **"suda bekletme"** yıkama döngüsünü başlat. Gerekirse tekrarla.

Program adı modele göre farklı olabilir; kendi modelinin kılavuzuna bak. Bundan sonra yalnız **bulaşık makinesi deterjanı** kullan.

## LC varken pompa neden çalışıyor?

Samsung kılavuzuna göre makine **taşmayı algılayacak** şekilde tasarlanmış: bu durumda devridaim pompası kapanır ve **boşaltma pompası çalıştırılır.** 2017 tarihli kılavuz da kapak kapalıysa makinenin kaçak durumunda suyu **otomatik olarak boşalttığını** yazıyor. Yani LC ekrandayken pompa sesinin gelmesi bu tasarımın parçası olabilir. Yine de su vanasını ve şalteri kapatma adımını atlama.

## Ne zaman servis çağırmalısın?

LC'de Samsung'un kılavuzu evde yapılacak işi zaten kısa tutuyor: suyu kapat, elektriği kes, onarım için montöre ya da servise başvur. Musluk bağlantısında görünür bir damlama yoksa, parlatıcı ve deterjan tarafı temizse ve kod yine geliyorsa kaçağın kaynağı makinenin içindedir. Samsung'un kılavuzu da herhangi bir bilgi kodu ekranda görünmeye devam ederse **yetkili bir Samsung servis merkezine** başvurulmasını söylüyor.

Markadan bağımsız kaçak kontrollerini görmek istersen [bulaşık makinesi alttan su kaçırıyor](/blog/bulasik-makinesi-su-kaciriyor/) yazımıza da bakabilirsin.

## Kısaca

LC, Samsung bulaşık makinesinin bir su kaçağı algıladığını söylüyor. İlk iş suyu ve elektriği kesmek. Ardından kılavuzun saydığı, evde görülebilen sebeplere bak: musluk bağlantısı, parlatıcı taşması, yanlış deterjan, denge. Onarım montörün ya da Samsung servisinin işi.
