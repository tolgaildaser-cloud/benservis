---
title: "Toshiba klima ısıtmıyor: evde kontrol"
description: "Toshiba klima ısıtmıyorsa kılavuzun notları: 8°C ve Şömine işlemi, 5 dakikalık ön ısıtma, buz çözme, Sessiz ve Güç Seçimi, kapı-pencere ve filtre."
slug: "toshiba-klima-isitmiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki klima belirti partisi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; md5'ler 1 Eki yerel kopyalarıyla birebir. Toshiba'nın Türkiye alan adı (toshiba-klima.com.tr).
# Web araması KULLANILMADI: adresler yayındaki toshiba-klima-sogutmuyor provenansından. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-2eki/ · pdftotext -layout -f N -l N, sayfa = PDF sayfası.
#  T1) Toshiba "Montaj Kılavuzu ve Kullanıcı Kılavuzu · Klima (Split Tip)" iç ünite RAS-B05/07/10/13/16/18/24B2KV2G-TR (EN+TR), 36 s., md5 72b5236e8570c72bcb2623dd5963f51c
#      https://www.toshiba-klima.com.tr/Data/EditorFiles/dokuman/KullanimKilavuzu_ToshibaSeiya_new.pdf
#      s.32 "22 ÇALIŞMA VE PERFORMANS" "1. Üç dakikalık koruma özelliği: Ünitenin bir anda yeniden çalıştırılması veya ON konuma getirilmesi onucunda 3 dakika etkin olmasını engellemek için." / "2. Ön ısıtma işlemi: Isıtma işlemi başlamadan üniteyi 5 dakika boyunca ısıtmak için." / "3. Sıcak hava kontrolü: Oda ısısı ayarlanan ısıya geldiğinde, fan hızı otomatik olarak düşer ve dış ünite durur." / "4. Otomatik buz çözme: Buz çözme işlemi sırasında fanlar durur." / "5. Isıtma kapasitesi: Isı dışarıdan emilir ve odanın içine verilir. Dışarıdaki sıcaklık çok düşükse, klimayla birlikte başka bir ısınma cihazı kullanılması önerilir." / "NOT • Isıtma modeli için madde 2-6."
#      s.32 "23 PRATİK ÇÖZÜMLER (KONTROL NOKTASI)" · "Soğutma veya Isıtma anormal derecede düşük seviyede." → "• Filtreler tozla kaplanmış. • Isı düzgün ayarlanmamış. • Pencereler ve kapılar açık. • Cihazın dış ünitesindeki hava giriş ve çıkışları tıkalı. • Fan hızının ayarı çok düşük. • Çalışma modu FAN veya DRY. • POWER SELECTION işlevi %75 veya %50'ye ayarlanır (Bu işlev uzaktan kumandaya bağlıdır)."
#      s.32 "Klimanın çalışma koşulları ... Isıtma –15°C ~ 24°C [dış] 28°C'den az [oda]" · "21 MANUEL BUZ ÇÖZME ÇALIŞTIRMASI Isıtma işlemi sırasında dış ünitenin ısı değiştiricisinin buzunu çözmek için."
#      s.32 "19 BAKIM DİKKAT • İlk olarak, sigortayı kapatın." / "Hava Filtresi 2 haftada bir temizleyin. 1. Hava giriş ızgarasını açın. 2. Filtreleri hava filtresinin üzerindeyse çıkarın. 3. Elektrikli süpürgeyle temizleyin veya yıkayın ve ardından kurutun. 4. Filtrelerini tekrar takın ve hava giriş ızgarasını kapatın." / "Benzin, tiner, cila veya kimyasal temizleyiciler kullanmayın."
#      s.30 "7 SOĞUTMA / ISITMA / SADECE FAN ÇALIŞTIRMA 1. ... Soğutma, Isıtma, veya Sadece fan modunu seçin. 2. ... İstediğiniz sıcaklığı ayarlayın. Min. 17°C, Max. 30°C." / "11 8°C'de ÇALIŞMA 1. düğmesine basın: 8°C ayar sıcaklığı ısıtma değiştirmek için. 2. düğmesine basın: Ayar sıcaklığını 5°C'den 13°C'ye ayarlamak için. NOT • 8°C yalnızca Isıtma modunda çalışır." / "5 SESSİZ ÇALIŞMA ... NOT • Sessiz çalişma etkin olduğunda yetersiz Isıtma (veya Soğutma) kapasitesi oluşabilir." / "Sessiz 2 ... Ses düzeyindense Isıtma (veya Soğutma) kapasitesinden ödün verilir." / "9 Hi POWER ÇALIŞMASI Daha hızlı bir soğutma ya da ısıtma işlemi amacıyla ... (DRY ve FAN ONLY modları hariç)" / "10 ECO ÇALIŞMA ... NOT ... • Isıtma işleminde ise ayarlanan sıcaklık azalacaktır."
#      s.31 "17 COMFORT SLEEP ÇALIŞMA ... NOT ... Isıtma işleminde ise ayarlanan sıcaklık azalacaktır." · s.36 "gerektiğinde Alarko Carrier Yetkili Satıcı ve Servislerine ulaşabilmek için ... Müşteri Danışma Hattımıza başvurabilirsiniz."
#  T2) Toshiba "Owner's Manual · Air Conditioner (Split Type)" RAS-18/22/24J2KVSG-TR Shorai Edge (EN+TR), 16 s., md5 a5924a17042788945f05e6297adf4c61
#      https://www.toshiba-klima.com.tr/Data/EditorFiles/dokuman/KullanimKilavuzu_ToshibaShoraiEdge.pdf
#      s.11 "10 ŞÖMİNE VE 8°C ISITMA İŞLEMİ" · "Şömine İşlemi ... Başka kaynaklardan gelen ısıyı odada dolaştırmak için termo kapalı durumdayken, iç ünitenin fan üflemesini çalışır halde tutar. Üç ayar parametresi mevcuttur: Varsayılan ayar > Şömine 1 > Şömine 2" / "8°C Isıtma İşlemi (8°C) Enerji kaybı olmadan oda sıcaklığını (5-13°C) koruma amaçlı ısıtma çalışması." / şema: "8°C → ŞÖMİNE 1 → ŞÖMİNE 2 → Normal çalışma" / "Not: • Isıtma modunda Şömine İşlemi olduğunda, iç ünite fanı sürekli çalışır ve soğuk hava esintisi meydana gelebilir. • Şömine/8°C yalnızca Isıtma modunda çalışır."
#      s.11 "13 GÜÇ SEÇİMİ VE SESSİZ ÇALIŞTIRMA ... Maksimum akımı ve güç tüketimini %100, %75 veya %50 olarak ayarlar" / "• POWER SELECTION (GÜÇ SEÇİMİ) işlevinin maksimum akımı sınırlamasının nedeniyle yetersiz soğutma veya ısıtma kapasitesi oluşabilir." / "• Sessiz çalıştırma etkin olduğunda yetersiz ısıtma (veya soğutma) kapasitesi oluşabilir." · "9 ECO ÇALIŞMA ... Isıtma işleminde ise ayarlanan stıcaklık azalacaktır."
#      s.12 "21 ÇALIŞMA VE PERFORMANS ... 2. Ön isitma işlemi: Sıcak hava üflemeden önce üniteyi 5 dakika isitin." (madde 1-5 T1 ile aynı) · "23 PRATİK ÇÖZÜMLER" aynı liste ("Soğutma ve Isıtma anormal derecede düşük seviyede."; FAN/DRY satırı yok) · "22 BAKIM İlk olarak, sigortayı kapatın." · "Hava filtreleri 2 haftada bir temizleyin." · çalışma koşulları "Isıtma ‒15°C ~ 24°C · 28°C'den az"
# YAKIN KOPYA: yayındaki toshiba-klima-sogutmuyor aynı s.32 kontrol listesini kullanıyor. Bu taslak ısıtmaya özgü maddeleri (8°C/Şömine, ön ısıtma, sıcak hava kontrolü, otomatik buz çözme, ECO ve Comfort Sleep'in ısıtmadaki etkisi, Güç Seçimi'nin ısıtma notu, düşük dış sıcaklıkta ek ısıtıcı, çalışma koşulları) öne çıkarıyor; ortak kontrol maddeleri tek tabloda kısa tutuldu, SSS'nin tamamı ısıtma notlarından.
# BİLEREK YAZILMAYANLAR: manuel buz çözme düğmesinin hangi tuş olduğu (TR metninde tuş simgesi okunmuyor; yalnız işlevin varlığı anıldı) · TEMPORARY/RESET çalışma (kumanda kaybı konusu) · POWER SELECTION'ın tuş sırası (T1 TR'de anlatılmıyor) · dış üniteye çıkma, kar temizliği · telefon numarası · fiyat.
# Alıntı denetim tablosu: toshiba-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge"]
steps:
  - "Kumandada modun Isıtma olduğunu ve sıcaklığın 17-30°C arasında doğru ayarlandığını kontrol et."
  - "Kumanda ekranında 8°C ya da Şömine ayarı görünüyorsa normal ısıtmaya dön."
  - "Isıtmayı yeni açtıysan ön ısıtma için 5 dakika bekle."
  - "Isıtma sırasında fanlar durduysa buz çözmenin bitmesini bekle."
  - "Fan hızını yükselt; Sessiz çalışma ya da ECO açıksa kapat, Güç Seçimi %75 ya da %50'deyse %100'e al."
  - "Odanın kapı ve pencerelerini kapat, dış ünitenin hava giriş ve çıkışının önüne güvenle görebildiğin kadar bak."
  - "Sigortayı kapat, hava giriş ızgarasını aç, filtreleri çıkar, süpürgeyle temizle ya da yıka, kurut ve geri tak."
  - "Sorun sürerse model adını not edip Toshiba yetkili satıcı ve servisine başvur."
faq:
  - q: "Toshiba klimada 8°C işlemi nedir, ısıtmayı neden düşürüyor?"
    a: "Toshiba kılavuzlarına göre 8°C işlemi, enerji kaybı olmadan oda sıcaklığını 5-13°C arasında korumak için yapılan bir ısıtma çalışmasıdır ve yalnızca Isıtma modunda çalışır. Bu işlem açıksa klima odayı normal konfor sıcaklığına çıkarmaz; normal ısıtmaya dönmen gerekir."
  - q: "Şömine işlemi açıkken klimadan serin hava geliyor. Arıza mı?"
    a: "Hayır. Shorai Edge kılavuzuna göre Şömine işlemi, başka kaynaklardan gelen ısıyı odada dolaştırmak için termo kapalıyken de iç ünite fanını çalıştırır; bu sırada soğuk hava esintisi meydana gelebilir."
  - q: "Oda ısınınca klima yavaşlıyor, dış ünite duruyor. Normal mi?"
    a: "Evet. Toshiba bunu sıcak hava kontrolü olarak anlatıyor: oda sıcaklığı ayarlanan değere gelince fan hızı otomatik olarak düşer ve dış ünite durur."
  - q: "Dışarısı çok soğukken klima yetmiyor. Ne yapmalıyım?"
    a: "Toshiba'ya göre ısı dışarıdan emilip odaya verilir; dışarıdaki sıcaklık çok düşükse kılavuz klimayla birlikte başka bir ısınma cihazı kullanmanı öneriyor. Kılavuzdaki ısıtma çalışma koşulu dış sıcaklık için -15°C ile 24°C arası, oda sıcaklığı için 28°C'nin altı."
images:
  coverAlt: "Kış öğleden sonrası salonda duvardaki beyaz split klimaya doğru tutulan uzaktan kumanda, sehpada buharı tüten bir fincan"
---

Klimayı ısıtmaya aldın ama oda bir türlü ısınmıyor ya da gelen hava serin. Toshiba'nın Türkçe kullanıcı kılavuzları bu belirtide iki şeye ayrı ayrı bakmanı sağlıyor: kontrol noktası tablosundaki **"Soğutma veya Isıtma anormal derecede düşük seviyede."** satırı ve yalnız ısıtma modellerine ait çalışma notları. İkincisi kışa özgü: Toshiba klima ısıtmaya başlamadan önce üniteyi 5 dakika ön ısıtır, buz çözerken fanları durdurur ve 8°C işlemi açıksa odayı yalnız 5-13°C aralığında tutar. Bu yazıda önce bu notları, sonra evde yapılacak kontrolleri sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod Isıtma mı, sıcaklık doğru mu? Ekranda 8°C ya da Şömine varsa normal ısıtmaya dön. Açılışta 5 dakika ön ısıtma, buz çözme sırasında fanların durması normal. Sonra fan hızı, Sessiz, ECO ve Güç Seçimi; kapı-pencere ve dış ünitenin önü; en son filtre. Hâlâ ısıtmıyorsa → Toshiba yetkili satıcı ve servisi.

## Toshiba'nın ısıtma notları

Toshiba kılavuzlarının "Çalışma ve performans" bölümü ve işlev notları, ısıtmada arıza sanılabilecek davranışları şöyle açıklıyor:

| Gördüğün | Toshiba'nın açıklaması |
|---|---|
| Isıtmayı açınca ilk dakikalarda sıcak hava yok | Ön ısıtma: ünite sıcak hava üflemeden önce 5 dakika ısınır |
| Oda ısınınca fan yavaşladı, dış ünite durdu | Sıcak hava kontrolü: oda ayar sıcaklığına gelince fan hızı düşer, dış ünite durur |
| Isıtma sırasında fanlar durdu | Otomatik buz çözme: buz çözme sırasında fanlar durur |
| Oda yalnız 5-13°C civarında kalıyor | 8°C işlemi açık; bu işlem odayı koruma amaçlı düşük sıcaklıkta tutar |
| Şömine açıkken serin esinti | Fan, termo kapalıyken de çalışır; soğuk hava esintisi olabilir |
| Kapatıp hemen açınca çalışmıyor | Üç dakikalık koruma |

Kontrol noktası tablosu bunlara ayar ve oda maddelerini ekliyor: filtrelerin tozla kaplanması, sıcaklığın düzgün ayarlanmaması, açık pencere ve kapılar, dış ünitenin hava giriş-çıkışının tıkalı olması, fan hızının çok düşük olması, çalışma modunun FAN ya da DRY olması ve POWER SELECTION'ın %75 ya da %50'ye ayarlı olması.

## Adım adım: evde denenecekler

**1. Mod ve sıcaklık.** Kumandada modun Isıtma olduğunu ve sıcaklığın 17-30°C arasında doğru ayarlandığını kontrol et. Toshiba tablosu "Isı düzgün ayarlanmamış" ve "Çalışma modu FAN veya DRY" satırlarını ayrı ayrı sayıyor.

**2. 8°C ve Şömine.** Kumanda ekranında 8°C ya da Şömine ayarı görünüyorsa normal ısıtmaya dön. 8°C işlemi ayar sıcaklığını 5-13°C aralığına çeker. Shorai Edge kılavuzunda aynı düğmeye basıldıkça sıra 8°C, Şömine 1, Şömine 2 ve normal çalışma diye ilerliyor; kendi modelinde düğmenin yeri için kılavuzundaki "8°C" bölümüne bak.

**3. Ön ısıtma.** Isıtmayı yeni açtıysan ön ısıtma için 5 dakika bekle. Klimayı kapatıp hemen yeniden açtıysan üç dakikalık koruma süresi de buna eklenir.

**4. Buz çözme.** Isıtma sırasında fanlar durduysa buz çözmenin bitmesini bekle. Toshiba bunu otomatik buz çözme olarak anlatıyor; Seiya serisi kılavuzunda dış ünitenin ısı değiştiricisinin buzunu çözmek için ayrıca bir manuel buz çözme işlevi de var.

**5. Fan, Sessiz, ECO ve Güç Seçimi.** Fan hızını yükselt; Sessiz çalışma ya da ECO açıksa kapat, Güç Seçimi %75 ya da %50'deyse %100'e al. Toshiba'ya göre Sessiz çalışma etkinken yetersiz ısıtma kapasitesi oluşabilir; ECO ve Comfort Sleep ısıtmada ayar sıcaklığını azaltır; Güç Seçimi maksimum akımı sınırladığı için yetersiz ısıtma kapasitesine yol açabilir. Daha hızlı ısıtma için kılavuzdaki Hi POWER çalışması kullanılabilir.

**6. Kapı, pencere ve dış ünite.** Odanın kapı ve pencerelerini kapat, dış ünitenin hava giriş ve çıkışının önüne güvenle görebildiğin kadar bak. Kışın ısıyı dışarıdan alan parça dış ünite olduğu için önünün açık olması önemli; yine de ona ulaşmak için cepheye ya da korkuluğa çıkma, bu kontrolü gerekirse servise bırak.

**7. Filtre.** Sigortayı kapat, hava giriş ızgarasını aç, filtreleri çıkar, süpürgeyle temizle ya da yıka, kurut ve geri tak; sonra ızgarayı kapat. Toshiba bakım bölümüne "İlk olarak, sigortayı kapatın." diye başlıyor ve filtrelerin 2 haftada bir temizlenmesini istiyor; benzin, tiner, cila ya da kimyasal temizleyici kullanma. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse servis.** Sorun sürerse model adını not edip Toshiba yetkili satıcı ve servisine başvur. Kılavuzların son sayfasına göre Türkiye'de yetkili satıcı ve servislere Alarko Carrier'ın müşteri danışma hattı üzerinden ulaşılıyor.

## Ne zaman servis?

Ön ısıtma ve buz çözme beklemelerini verdiğin, kumanda ayarlarını ve filtreyi düzelttiğin hâlde oda ısınmıyorsa, Toshiba'nın kullanıcıya bıraktığı kontroller bitmiş demektir.

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, 8°C/Şömine, bekleme, fan, Sessiz, ECO, Güç Seçimi, kapı-pencere, filtre | Senin, bu rehberdeki adımlar |
| Dış ünite ulaşılamayan bir yerde ve önü kapalı görünüyor | Toshiba yetkili servisi |
| Tüm kontrollerden sonra hâlâ ısıtmıyor | Toshiba yetkili satıcı ve servisi |

⛔ Dış ünitedeki buzu elle temizlemeye ya da dış üniteye çıkmaya çalışma; iç ünitenin içine ve elektrik bağlantılarına dokunma. Toshiba'nın bakım bölümü kullanıcıya yalnız filtre temizliğini ve iç ünite ile kumandanın nemli bezle silinmesini veriyor.

Yazın serinletmiyorsa [Toshiba klima soğutmuyor](/blog/toshiba-klima-sogutmuyor/) yazısına bak. Klima hiç açılmıyorsa [Toshiba klima çalışmıyor](/blog/toshiba-klima-calismiyor/), markadan bağımsız anlatım için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısı var.

---

**Kaynak künyesi.** Isıtma ve performans notları, 8°C ve Şömine işlemi, Sessiz çalışma, ECO, Güç Seçimi, kontrol noktası tablosu, çalışma koşulları ve filtre temizliği Toshiba'nın toshiba-klima.com.tr'deki Türkçe kullanıcı kılavuzlarından (RAS-B05~24B2KV2G-TR ve Shorai Edge RAS-18/22/24J2KVSG-TR) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
