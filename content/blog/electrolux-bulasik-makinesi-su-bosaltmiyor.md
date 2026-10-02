---
title: "Electrolux bulaşık makinesi su boşaltmıyor"
description: "Electrolux bulaşık makinesi suyu boşaltmıyor, ekranda i20 ya da iF1 varsa: tahliye hortumu, lavabo borusu, filtre sistemi ve yeniden başlatma sırası."
slug: "electrolux-bulasik-makinesi-su-bosaltmiyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, belirti rehberi). Belge 1 Eki'de curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi (HTTP 200, application/pdf);
#   bu koşuda yerel kopyanın md5'i yeniden alındı, MD5.txt ile birebir aynı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (B) Electrolux ESM89400SX bulaşık makinesi kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/b2ae98c1-3fd9-40a1-83fc-72a427d6db65/E4RM3Q/103f2880-7d03-46f7-bfd7-8755d9984a60/ORIGINAL/103f2880-7d03-46f7-bfd7-8755d9984a60.pdf  32 s.  md5 e37f3fbbf7c05e07671a8ea7be8b21b1
# Arıza tablosu (B s.23) "Cihaz suyu tahliye etmiyor. Ekranda i20 görünüyor.": "Lavabo borusunun tıkalı olmadığından emin olun." · "İç filtre sisteminin tıkalı olmadığından emin olun."
#   · "Tahliye hortumunda dolanma veya bükülme olmadığından emin olun."
# B s.23 "Cihazın içindeki su seviyesi çok yüksek. Ekranda iF1 görünüyor.": "Cihazı kapatıp açın." · "Filtrelerin temiz olduğundan emin olun." · "Çıkış hortumunun zeminden doğru yüksekliğe takıldığından emin olun. Montaj talimatlarına bakın."
# B s.23 i51-i59 / i5A-i5F "Yıkama pompasında veya boşaltma pompasında arıza." → "Cihazı kapatıp açın." · B s.22 "Bazı sorunlar ortaya çıktığında gösterge ekranında bir alarm kodu görünür." + onarım yetkili personel
# B s.24 "Makineyi kontrol ettikten sonra devre dışı bırakın ve tekrar devreye alın. Sorun tekrarlanırsa, Yetkili Servis Merkezi ile iletişime geçin." · "Tabloda tanımlanmamış alarm kodları için Yetkili Servis Merkezine başvurun."
#   · UYARI "Sorun tamamen çözülene kadar makineyi kullanmamanızı öneririz. Makinenin fişini çekin ve düzgün çalıştığından emin olana kadar tekrar takmayın."
# B s.18 11. Bakım: "Bakım işleminden önce, cihazı devre dışı bırakın ve fişi prizden çıkarın." · 11.2 yabancı maddeler (cam, plastik, kemik, kürdan) "tahliye pompasına zarar verebilir"; çıkaramıyorsan servis; 1-3 adım
# B s.19-20 11.4 filtre sistemi 3 parça (A yassı, B, C); 8 adım; DİKKAT "Filtrelerin yanlış konumlanması, tatmin edici olmayan yıkama sonuçlarına ve cihazın zarar görmesine neden olabilir."
# BİLEREK YAZILMAYANLAR: tahliye pompası/kart teşhisi ve pompa sökümü (belgede yok; i5x satırı yalnız "kapatıp açın") · çıkış hortumu yüksekliğinin ölçüsü (bu PDF'te montaj ölçüsü yok; "Montaj talimatları" ayrı belge → yalnız anıldı)
#   · tabandaki suyu boşaltma yöntemi (belgede yok) · filtre temizliğinin 8 adımlık tam dökümü (kardeş temiz-yıkamıyor sayfasında; burada 2 adıma indirildi + link) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-bulasik-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekrandaki alarm kodunu not al: i20 mi, iF1 mi, yoksa başka bir kod mu."
  - "Tahliye hortumunda dolanma ya da büküm olmadığını kontrol et."
  - "Hortumun bağlandığı lavabo borusunun tıkalı olmadığını kontrol et."
  - "Makineyi kapat ve fişini prizden çek."
  - "Filtre sistemini çıkar; haznedeki cam, plastik, kemik, kürdan gibi yabancı maddeleri elle temizle."
  - "Filtreleri yıka, yassı filtreyi kılavuzlarının altına oturt ve (B) filtresini kilitlenene kadar saat yönünde çevir."
  - "Fişi tak, makineyi kapatıp yeniden aç ve programı tekrar başlat."
faq:
  - q: "Ekranda iF1 yazıyor. Bu da su boşaltmama mı?"
    a: "Electrolux'un ESM89400SX kılavuzunda iF1'in karşılığı 'Cihazın içindeki su seviyesi çok yüksek.' Önerilen üç kontrol: cihazı kapatıp aç, filtrelerin temiz olduğundan emin ol ve çıkış hortumunun zeminden doğru yüksekliğe takıldığından emin ol. Hortum yüksekliği için kılavuz montaj talimatlarını gösteriyor; montaj işini yapmaktan emin değilsen yetkili servise bırak."
  - q: "Ekranda i5 ile başlayan bir kod var. Ne yapmalıyım?"
    a: "Electrolux'un tablosuna göre i51-i59 ya da i5A-i5F kodları yıkama pompasında veya boşaltma pompasında arıza anlamına geliyor ve kullanıcıya önerilen tek çözüm cihazı kapatıp açmak. Kılavuza göre kontrolden sonra sorun tekrarlanırsa Yetkili Servis Merkezi ile iletişime geçmelisin. Kılavuz ayrıca her türlü onarımın yetkili personel tarafından yapılması gerektiğini söylüyor."
  - q: "Su boşaltmayan makineyi bir sonraki yıkamada yine kullanabilir miyim?"
    a: "Electrolux'un önerisi beklemek: sorun tamamen çözülene kadar makineyi kullanmaman, fişini çekmen ve düzgün çalıştığından emin olana kadar tekrar takmaman öneriliyor. Yukarıdaki kontrollerden sonra makineyi kapatıp açtığında sorun tekrarlanırsa Yetkili Servis Merkezi'ni ara; tabloda tanımlanmamış alarm kodları için de kılavuzun yönlendirmesi Yetkili Servis."
images:
  coverAlt: "Bulaşık makinesinin açık kapağının ardında, alt sepet çıkarılmış tabanda biriken kirli su ve ortadaki filtre yuvası"
---

Program bitti, kapağı açtın ve makinenin tabanında kirli su duruyor. Electrolux'un ESM89400SX kullanma kılavuzu bu durumu bir alarm koduyla eşleştiriyor: **"Cihaz suyu tahliye etmiyor. Ekranda i20 görünüyor."** Electrolux bu satırda üç yere bakmanı istiyor: **lavabo borusu, iç filtre sistemi ve tahliye hortumu.** Yakın bir satır daha var: ekranda **iF1** görünüyorsa kılavuza göre **cihazın içindeki su seviyesi çok yüksek** demektir ve çözümleri de filtreyle hortuma çıkıyor. Bu yüzden bu rehber dışarıdan içeriye ilerliyor: önce kod, sonra hortum ve lavabo, sonra filtre, en son yeniden başlatma. Kaynak tek bir modelin kılavuzu; kodlar ve filtre yapısı modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekrandaki kodu not al (i20 = su tahliye edilmiyor, iF1 = su seviyesi çok yüksek) → tahliye hortumunda büküm var mı → lavabo borusu tıkalı mı → fişi çek → filtre sistemini çıkar, yabancı maddeleri temizle → filtreleri doğru yerine kilitle → makineyi kapatıp aç. Sorun tekrarlanırsa Electrolux'un yönlendirmesi Yetkili Servis.

## Adım adım: evde denenecekler

**1. Alarm kodunu not al.** Electrolux'a göre bazı sorunlarda gösterge ekranında bir alarm kodu görünür. Su boşaltmayla ilgili iki satır var: **i20** için "Cihaz suyu tahliye etmiyor", **iF1** için "Cihazın içindeki su seviyesi çok yüksek". Ekranda **i51-i59 ya da i5A-i5F** görüyorsan kılavuz bunu **yıkama pompasında veya boşaltma pompasında arıza** olarak tanımlıyor; o durumda aşağıdaki "Ne zaman servis" bölümüne geç.

**2. Tahliye hortumuna bak.** i20 satırındaki madde: **tahliye hortumunda dolanma veya bükülme olmadığından emin ol.** Hortumun ulaşabildiğin kısmını gözle kontrol et.

**3. Lavabo borusunu kontrol et.** Aynı satırdaki diğer dış kontrol: **lavabo borusunun tıkalı olmadığından emin ol.**

**4. Fişi çek.** Buradan sonrası makinenin içi. Electrolux'un bakım bölümündeki uyarı: **bakım işleminden önce cihazı devre dışı bırak ve fişi prizden çıkar.**

**5. Filtre sistemini çıkar, yabancı maddeleri temizle.** i20 satırının üçüncü maddesi: **iç filtre sisteminin tıkalı olmadığından emin ol.** ESM89400SX'te filtre sistemi üç parçalı: **(B)** filtresi saatin tersi yönünde çevrilerek çıkarılıyor, **(C)** filtresi (B)'den ayrılıyor, ardından **yassı filtre (A)** kaldırılıyor. Electrolux'a göre **cam, plastik, kemik ya da kürdan** gibi yabancı maddeler temizleme performansını düşürür ve **tahliye pompasına zarar verebilir;** bunları **elle** çıkar ve haznenin içinde ya da kenarında yiyecek ve kir kalıntısı kalmadığından emin ol.

**6. Filtreleri yıka ve doğru yerine kilitle.** Filtreleri yıka. Geri takarken Electrolux'un sırası: yassı filtre (A) **2 kılavuzun altına** düzgün oturur, (B) ve (C) yerine takılır, (B) **kilitlenene kadar saat yönünde** çevrilir. Kılavuzun uyarısı bu adımda önemli: **filtrelerin yanlış konumlanması** yetersiz yıkamaya ve **cihazın zarar görmesine** neden olabilir. Filtre parçalarının ayrıntılı anlatımı için kardeş rehberimiz [Electrolux bulaşık makinesi temiz yıkamıyor](/blog/electrolux-bulasik-makinesi-temiz-yikamiyor/) sayfasına bakabilirsin.

**7. Makineyi kapatıp aç, programı yeniden başlat.** Electrolux'un sorun giderme bölümündeki genel kural: **makineyi kontrol ettikten sonra devre dışı bırak ve tekrar devreye al.** iF1 satırının ilk çözümü de aynı: **cihazı kapatıp aç.** Fişi tak, makineyi aç ve bir program başlat; tahliyenin olup olmadığını izle.

## Kontrol etmen gerekebilecek bir montaj ayarı

iF1 satırının son maddesi: **çıkış hortumunun zeminden doğru yüksekliğe takıldığından emin ol.** Kılavuz bu ölçü için **montaj talimatlarını** gösteriyor; kullanma kılavuzunun kendisinde ölçü yok. Hortumun yüksekliğini değiştirmek bir montaj işi; bunu yapmaktan emin değilsen yetkili servise bırak.

Markadan bağımsız anlatım için [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) yazısına, filtre temizliğinin genel anlatımı için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) rehberine, diğer kodlar için [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) sayfasına bakabilirsin. Makine hiç başlamıyorsa kardeş rehberimiz [Electrolux bulaşık makinesi çalışmıyor](/blog/electrolux-bulasik-makinesi-calismiyor/) yazısına geç.

## Ne zaman servis

Electrolux'un kılavuzu şu durumlarda Yetkili Servis Merkezi'ni gösteriyor:

- Yabancı maddeyi filtre yuvasından **çıkaramıyorsan.**
- Ekranda **i51-i59 ya da i5A-i5F** varsa ve cihazı kapatıp açtıktan sonra sorun **tekrarlanıyorsa.**
- Yukarıdaki kontrollerden sonra **sorun tekrarlanırsa** ya da ekranda **tabloda tanımlanmamış bir alarm kodu** varsa.

Electrolux'un uyarısı: sorun tamamen çözülene kadar makineyi kullanmaman, **fişini çekmen** ve düzgün çalıştığından emin olana kadar tekrar takmaman öneriliyor.

⛔ **Kendin-çöz sınırı burada biter.** Hortum, lavabo borusu ve filtre kullanıcıya; tahliye pompası, montaj ve makinenin iç parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ekranda hangi kod yazıyor: i20, iF1, i5 ile başlayan bir kod ya da başka bir şey?
2. Tahliye hortumunda büküm var mı?
3. Lavabo borusunda tıkanıklık var mı?
4. Filtrede ya da hazne çevresinde yabancı madde çıktı mı?
5. Makineyi kapatıp açtıktan sonra yeni bir programda su boşaldı mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
