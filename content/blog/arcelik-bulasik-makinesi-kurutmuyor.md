---
title: "Arçelik bulaşık makinesi kurutmuyor"
description: "Arçelik bulaşık makinesi kurutmuyorsa Arçelik'in sırası: yerleştirme, parlatıcı, kapıyı aralayıp bekleme, uzun program ve tablet fonksiyonu."
slug: "arcelik-bulasik-makinesi-kurutmuyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den indirildi, hepsi HTTP 200.
# Web araması YALNIZ belgenin adresini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-buzdolabi-bulasik-sprint/ · okuma pdftotext, sayfa = PDF sayfası (basılı sayfa no + 2).
#  (K) 6366 / 6366 I Bulaşık Makinesi Kullanma Kılavuzu
#      https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201703271206470_User%20Manual%20-%20Filetr_TR.pdf  46 s.  md5 e941e0ee68ba8698139fd77c492459a7
#  Aynı sorun giderme tablosu (belirti başlıkları birebir; "Kapıyı aralayarak" cümlesi altı kılavuzda da var) şu Arçelik kılavuzlarında da var, hepsi bu koşuda HTTP 200:
#  (K2) 6343 / 6343 I / 6343 S  https://download.arcelik.com.tr/download.usagemanuals/6343-4-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201610180836552_User-20Manual-20-20Filetr_TR.pdf  35 s.  md5 83c5e77d8267b635e721604f87bececc
#  (K3) 9242 MI  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180312110164_User%20Manual%20-%20Filetr_TR.pdf  42 s.  md5 8d1f4fef3a6a67cb281b8b6be4643d2a
#  (K4) 63101 I  https://download.arcelik.com.tr/download.usagemanuals/63101-i-10-programli-bulasik-makinesi-kullanim-kilavuzu-tr_TR_201610171211945_User-20Manual-20-20Filetr_TR.pdf  50 s.  md5 7afb5b5c9206dee18b975edb965fbd67
# Sorun giderme "Bulaşıklar kurutulmuyor" (K s.38): düzensiz yerleştirme → içlerinde su birikmeyecek şekilde · parlatıcı yetersiz → ilave et / ayarı yükselt
#   · hemen boşaltılmış → "Makinenizi yıkama bittikten hemen sonra boşaltmayın. Kapıyı aralayarak içerdeki buharın bir süre dışarı çıkmasını sağlayın ve bulaşıklar el sürülebilir düzeyde soğuduğunda makineyi boşaltın. Boşaltma işlemine alt sepetten başlayın."
#   · uygun program değil → "Kısa süreli programlarda durulama sıcaklığı düşük olduğu için kurutma performansları da düşüktür. Daha yüksek bir kurutma performansı için daha uzun süreli programlar seçin."
#   · tablet kullanılmış, tablet tuşuna basılmamış → "tablet deterjan" fonksiyonu varsa aktif et · yüzey kalitesi bozuk eşya → tavsiye edilmez · teflon eşyada kurutma şikayeti doğal.
# Diğer: K s.18 parlatıcı kurutma etkinliğini artırır; kapak mandalla açılır, MAX'a kadar, (B) noktasına bastırarak kapatılır · K s.19 su izi → ayarı artır, mavi iz → azalt, fabrika ayarı 3
#   · K s.20 derin kaplar ağızları aşağıda · K s.29 Ekstra Kurutma fonksiyonu "Üst düzey kurutma performansı sağlar." · K s.29 Otomatik Tablet Deterjan Algılama (6366'da), ek fonksiyonlar tüm programlara uygun değil · K s.31-32 durulama sonrası bekleme modu · K s.33 parlatıcı ayar tuşları.
# BİLEREK YAZILMAYANLAR: ısıtıcı/fan teşhisi (belgede yok) · parlatıcı ayar tuş sırası (modele göre) · Ekstra Kurutma'nın hangi modellerde olduğu (yalnız K için yazıldı) · fiyat (#46).
# Alıntı denetim tablosu: arcelik-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Kuru bir bez"]
steps:
  - "Kase, bardak ve tencere gibi derin kapları ağızları aşağıya gelecek, içlerinde su birikmeyecek şekilde yerleştir."
  - "Parlatıcı eksikliği uyarı göstergesine bak; gerekirse parlatıcı bölmesini MAX seviyesine kadar doldur ve taşanı sil."
  - "Makinede yeterince parlatıcı varsa parlatıcı ayarını yükselt."
  - "Kısa programlar yerine daha uzun süreli bir program seç."
  - "Çok amaçlı tablet deterjan kullanıyorsan makinende varsa tablet deterjan fonksiyonunu aç."
  - "Program bitince makineyi hemen boşaltma; kapıyı aralayıp buharın çıkmasını bekle."
  - "Bulaşıklar el sürülebilir düzeyde soğuyunca boşaltmaya alt sepetten başla."
faq:
  - q: "Arçelik bulaşık makinesi bulaşıkları ıslak bırakıyor, arıza mı?"
    a: "Önce Arçelik'in listesine bak. Kullanma kılavuzundaki sorun giderme bölümü 'Bulaşıklar kurutulmuyor' satırında şu nedenleri sayıyor: bulaşıkların düzensiz yerleştirilmesi, yetersiz parlatıcı, makinenin yıkama bittikten hemen sonra boşaltılması, uygun olmayan program ve tablet deterjan kullanılıp tablet fonksiyonunun açılmaması. Bunların hepsi kullanıcı tarafında düzeltilebilir."
  - q: "Kısa program seçince bulaşıklar neden daha ıslak çıkıyor?"
    a: "Arçelik bunu kılavuzunda açıklıyor: kısa süreli programlarda durulama sıcaklığı düşük olduğu için kurutma performansları da düşüktür. Arçelik'in önerisi, daha yüksek bir kurutma performansı için daha uzun süreli programlar seçmek."
  - q: "Teflon tavalar hep ıslak çıkıyor, normal mi?"
    a: "Evet. Arçelik'in sorun giderme listesine göre teflon mutfak eşyalarında kurutma şikayeti oluşması doğaldır ve teflonun yapısıyla ilgilidir. Teflon ve suyun yüzey gerilimleri farklı olduğu için su tanecikleri teflon yüzey üzerinde boncuk gibi kalır."
  - q: "Parlatıcı ayarını ne kadar yükseltmeliyim?"
    a: "Arçelik'in 6366 kılavuzuna göre yıkama sonrasında yemek takımları üzerinde su izi oluşuyorsa ayarlayıcının derecesi artırılır, elle silindiğinde mavi bir iz kalıyorsa azaltılır. Bu ayar fabrika çıkışında 3 konumundadır. Ayarın tuş sırası kılavuzun 'Parlatıcı miktarının ayarlanması' bölümünde anlatılıyor."
images:
  coverAlt: "Program sonunda kapısı hafifçe aralanmış bulaşık makinesinden çıkan buhar; alt sepette ağzı aşağı dizilmiş kaseler"
---

Program bitti, kapağı açtın ve bulaşıklar hâlâ ıslak. Arçelik'in bulaşık makinesi kullanma kılavuzlarındaki sorun giderme bölümünde bu durumun ayrı bir satırı var: **"Bulaşıklar kurutulmuyor."** Arçelik'in bu satırda saydığı nedenlerin hepsi kullanıcı tarafında: **yerleştirme, parlatıcı, seçilen program, tablet deterjan ayarı ve bulaşıkları boşaltma zamanı.** Aynı tablo Arçelik'in 6366, 6343, 9242 MI ve 63101 I kılavuzlarında birebir aynı başlıklarla yer alıyor. Bu yazıda listeyi sırayla açıyoruz; teflon tavalar için Arçelik'in ne dediğine de bakıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Derin kapları ağzı aşağı koy → parlatıcıyı doldur, yeterliyse ayarını yükselt → daha uzun bir program seç → tablet kullanıyorsan tablet fonksiyonunu aç → program bitince hemen boşaltma, kapıyı arala ve bekle → alt sepetten başlayarak boşalt. Teflon eşyada ıslaklık Arçelik'e göre doğal.

## Adım adım: evde denenecekler

**1. Su biriktirmeyecek şekilde yerleştir.** Tablodaki ilk neden: **bulaşıklar düzensiz yerleştirilmiş.** Arçelik'in çözümü, bulaşıkları yıkama esnasında **içlerinde su birikmeyecek** şekilde yerleştirmek. Yerleştirme bölümündeki kural da aynı: kase, bardak, tencere gibi derin kapları **ağızları aşağıya gelecek** şekilde koy.

**2. Parlatıcıyı doldur.** Tablodaki neden: **parlatıcı yetersiz.** Arçelik'e göre parlatıcı, **kurutma etkinliğini artırmak** ve yıkanan parçaların üzerinde su ya da kireç izi kalmasını önlemek için kullanılan özel bir bileşim. Önce **parlatıcı eksikliği uyarı göstergesine** bak. Parlatıcı kapağını mandal yardımıyla aç, bölmeyi **MAX seviyesine** kadar doldur ve kapağı hafifçe bastırarak kapat. Bölmenin dışına dökülen parlatıcıyı sil; Arçelik'e göre dökülen parlatıcı köpürmeye neden olur. Yalnız bulaşık makineleri için üretilmiş parlatıcı kullan.

**3. Parlatıcı ayarını yükselt.** Makinede yeterince parlatıcı varsa Arçelik'in çözümü **parlatıcı ayarını yükseltmek.** 6366 kılavuzuna göre yıkama sonrasında yemek takımları üzerinde **su izi** oluşuyorsa ayar artırılır, elle silindiğinde **mavi bir iz** kalıyorsa azaltılır; fabrika ayarı **3.** Ayarın tuş sırası kılavuzundaki "Parlatıcı miktarının ayarlanması" bölümünde.

**4. Daha uzun bir program seç.** Tablodaki neden: **uygun program seçilmemiş.** Arçelik'in açıklaması: **kısa süreli programlarda durulama sıcaklığı düşük olduğu için kurutma performansları da düşüktür.** Daha yüksek bir kurutma performansı için daha uzun süreli programlar seç. 6366 kılavuzunda ek fonksiyonlar arasında **Ekstra Kurutma** da var; kılavuza göre bu fonksiyon üst düzey kurutma performansı sağlıyor. Kılavuza göre ek fonksiyonlar tüm yıkama programları için uygun değil; programa uygun olmayan fonksiyonun göstergesi aktif olmuyor.

**5. Tablet fonksiyonunu aç.** Tablodaki neden: **tablet deterjan kullanılmış, tablet tuşuna basılmamış.** Arçelik'in çözümü: çok amaçlı deterjan kullanıyorsan makinende **"tablet deterjan" fonksiyonu varsa** aktif hâle getir. 6366 modelinde bu iş otomatik: kılavuza göre **Otomatik Tablet Deterjan Algılama** özelliği kullanılan deterjan türünü algılayıp yıkama programını ve kurutma sistemini uyarlıyor, tablet kullanımında herhangi bir tuşa basmak gerekmiyor.

**6. Hemen boşaltma, kapıyı arala.** Tablodaki neden: **makine yıkama bittikten hemen sonra boşaltılmış.** Arçelik'in çözümü: makineyi yıkama bittikten hemen sonra boşaltma; **kapıyı aralayarak içerdeki buharın bir süre dışarı çıkmasını** sağla.

**7. Alt sepetten başlayarak boşalt.** Bulaşıklar **el sürülebilir düzeyde soğuduğunda** makineyi boşalt ve Arçelik'in sırasını izle: **boşaltmaya alt sepetten başla.** Kılavuza göre böylece üst sepetteki parçaların üzerinde kalan suyun alt sepetteki parçalara damlaması engellenir.

## Arıza olmayan durumlar

**Teflon eşyalar.** Arçelik'in listesine göre teflon mutfak eşyalarında kurutma şikayeti oluşması **doğaldır** ve teflonun yapısıyla ilgilidir: teflon ve suyun yüzey gerilimleri farklı olduğu için su tanecikleri teflon yüzey üzerinde **boncuk gibi** kalır.

**Yüzeyi bozulmuş eşyalar.** Arçelik'e göre yüzeyi bozulmuş mutfak eşyalarında beklenen yıkama performansı elde edilemez, bozuk yüzeylerden suyun akması zordur ve bu tür eşyaların bulaşık makinesinde yıkanması tavsiye edilmez.

**Program sonundaki sessiz bekleme.** 6366 kılavuzuna göre makine, durulama sonrası bulaşıkların üzerinde ve makine içinde kalan suyun tamamen akması için bekleme modunda bir süre sessiz kaldıktan sonra kurutma adımında çalışmaya devam eder. Bu sessizlik programın bittiği anlamına gelmiyor.

Paneldeki parlatıcı göstergesi için [Arçelik bulaşık makinesi sembolleri ve anlamları](/blog/arcelik-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfasına, parlatıcı ve tuz ayarının ayrıntısı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına bakabilirsin. Markadan bağımsız anlatım: [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/). Bulaşıklar ıslak olmanın yanında kirli de çıkıyorsa [Arçelik bulaşık makinesi temiz yıkamıyor](/blog/arcelik-bulasik-makinesi-temiz-yikamiyor/) rehberine geç.

## Ne zaman servis

Parlatıcı dolu ve ayarı yükseltildi, uzun bir program seçili, derin kaplar ağzı aşağı, kapıyı aralayıp bekledin ve cam ile porselen de ıslak çıkıyorsa Arçelik'in bu satırda kullanıcıya verdiği liste bitmiş demektir. Kılavuzun tüketici hizmetleri bölümüne göre ürününle ilgili hizmet talebin olduğunda Arçelik Çağrı Merkezi'ne başvurursun; yetkili servislerin güncel iletişim bilgileri arcelik.com.tr'de.

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, program, yerleştirme ve boşaltma zamanı kullanıcıya; makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Islak kalan hangi bulaşıklar: teflon ve plastik mi, cam ve porselen de mi?
2. Parlatıcı göstergesi yanıyor mu, parlatıcı ayarı kaçta?
3. Hangi programı seçiyorsun, kısa bir program mı?
4. Tablet mi, toz deterjan mı kullanıyorsun?
5. Bulaşıkları program bittikten ne kadar sonra çıkarıyorsun?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
