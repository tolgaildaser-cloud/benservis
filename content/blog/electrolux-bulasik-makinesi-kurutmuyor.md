---
title: "Electrolux bulaşık makinesi kurutmuyor"
description: "Electrolux bulaşık makinesi kurutmuyorsa Electrolux'un listesi: AirDry, parlatıcı ve seviyesi, kurutma aşamalı program, yerleştirme ve boşaltma sırası."
slug: "electrolux-bulasik-makinesi-kurutmuyor"
date: "2026-10-01"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi, HTTP 200, application/pdf.
# (Düz -A "Mozilla/5.0" ile electrolux.com.tr 000/zaman aşımı veriyor.) Belge adresi web aramasıyla bulundu (api.electrolux-medialibrary.com listesi), aynı yol www.electrolux.com.tr/services/eml/ altından indirildi. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Kontrol: electrolux.com.tr'deki ESM48310SW ürün sayfasının bağladığı LV/TR kılavuzun (electrolux.bynder.com) Türkçe sorun giderme tablosu aşağıdaki satırlarla birebir aynı; sayfa kaynağı olarak YALNIZ (D) kullanıldı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · sayfa = PDF sayfası (= basılı sayfa no).
#  (D) Electrolux ESM89400SX bulaşık makinesi kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/b2ae98c1-3fd9-40a1-83fc-72a427d6db65/E4RM3Q/103f2880-7d03-46f7-bfd7-8755d9984a60/ORIGINAL/103f2880-7d03-46f7-bfd7-8755d9984a60.pdf  32 s.  md5 e37f3fbbf7c05e07671a8ea7be8b21b1
# Tablo (D s.25, 12.1) "Yetersiz kurutma sonuçları.": kapak kapalı uzun süre bekleme → "Kapağın otomatik olarak açılması ve kurutma performansını artırmak için AirDry işlevini etkinleştirin."
#   · "Parlatıcı yoktur veya parlatıcı miktarı yeterli değildir. Parlatıcı gözünü doldurun veya parlatıcı miktarını artırın." · "Bunun nedeni parlatıcının kalitesi olabilir."
#   · "Multi tabletler kullanırken dahi daima parlatıcı kullanın." · "Plastik parçaların havlu ile kurulanması gerekebilir." · "Programda kurutma aşaması yoktur. 'Programlar genel açıklamalar' bölümüne bakın."
#   · "Makinenin iç kısmı ıslak." → "Bu, makinede bir sorun olduğu anlamına gelmez. Nem makinenin duvarlarında yoğunlaşır."
# Diğer: D s.8-9 program tablosu (dört programın akışında "Kurutma" var; iki bulaşık programında yalnız AirDry; makine temizleme ve ön yıkama programlarında Kurutma yok) + dipnot 2 "Kurutma aşamasında otomatik kapak açma"
#   · D s.12-13 7.3 parlatıcı seviyesi 1-6, fabrika 4, 0 = göz ve gösterge kapalı; "en iyi kurutma performansı için daima parlatıcı kullanmanızı ... öneririz" · D s.11 kullanıcı moduna geçiş
#   · D s.13 7.4 AirDry (kapı otomatik açılır, aralık kalır; 2 dakika kapatmaya çalışma; çocuk uyarısı; tüm programlarda varsa otomatik etkin) · D s.14 8.2 parlatıcı gözü doldurma (MAX, emici bez, köpük, kapak kilitlenir)
#   · D s.17 10.2 "Parlatıcı dozajının yetersiz olması kurutmayı olumsuz etkiler." + fazlası mavimsi tabaka · D s.17 10.4 çukurlu bulaşıklar ağız aşağı · D s.18 10.6 soğumasını bekle, önce alt sepet; iç yüzeylerde su kalabilir
#   · D s.16 kurutma aşamasında kapak 30 sn'den uzun açık kalırsa program sonlanır (AirDry açtıysa değil) · D s.2 servis: Model, PNC, Seri No bilgi etiketinde · D s.24 tanımsız alarm kodu → servis
# BİLEREK YAZILMAYANLAR: ısıtıcı/fan teşhisi (belgede yok) · program adları (kılavuzda simgeyle gösteriliyor, metin katmanında ad yok) · tuş simgeleri · "parlatıcı markası" önerisi (belge yalnız "kalitesi olabilir" diyor) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı", "Emici bir bez"]
steps:
  - "Parlatıcı göstergesine bak; yanıyorsa parlatıcı gözünü MAX işaretine kadar doldur, döküleni emici bezle sil."
  - "Kullanıcı modunda parlatıcı seviyesini kontrol et; 0 ya da düşükse artır."
  - "Multi tablet kullansan da parlatıcıyı kapatma."
  - "Kullanıcı modunda AirDry işlevini etkinleştir."
  - "Akışında Kurutma aşaması olan bir program seç."
  - "Fincan, bardak ve tava gibi çukurlu parçaları ağzı aşağı gelecek şekilde yerleştir."
  - "Program bitince bulaşıkların soğumasını bekle, önce alt sepeti boşalt."
faq:
  - q: "Electrolux bulaşık makinesinde AirDry ne işe yarar?"
    a: "Electrolux'un ESM89400SX kılavuzuna göre AirDry, daha az enerji tüketimiyle daha iyi kurutma sonucu sağlar: kurutma aşamasında cihazın kapısı otomatik olarak açılır ve aralık kalır. Kılavuz, otomatik açılan kapıyı açıldıktan sonra 2 dakika boyunca kapatmaya çalışmamanı istiyor; bu cihaza zarar verebilir. Çocuklar makineye ulaşabiliyorsa Electrolux, kapının otomatik açılması tehlike yaratabileceği için AirDry'ı devre dışı bırakmayı öneriyor."
  - q: "Plastik kaplar hep ıslak çıkıyor, ne yapmalıyım?"
    a: "Electrolux'un 'Yetersiz kurutma sonuçları' satırında bunun için tek cümle var: plastik parçaların havlu ile kurulanması gerekebilir. Kılavuz plastik için ayrı bir ayar ya da program önermiyor."
  - q: "Program bitince makinenin içi ıslak, normal mi?"
    a: "Evet. Electrolux'un tablosuna göre makinenin iç kısmının ıslak olması makinede bir sorun olduğu anlamına gelmez; nem makinenin duvarlarında yoğunlaşır. Kılavuzun boşaltma bölümü de program tamamlandıktan sonra cihazın iç yüzeylerinde hâlâ su kalmış olabileceğini yazıyor."
  - q: "Parlatıcıyı en yükseğe ayarlasam sorun olur mu?"
    a: "Electrolux'a göre parlatıcı dozajının yetersiz olması kurutmayı olumsuz etkiler, çok fazla parlatıcı ise bulaşık üzerinde mavimsi tabakalara neden olur. Tabloda da bardak ve tabaklarda beyaz çizgi ya da mavimsi tabaka varsa parlatıcı miktarını daha düşük konuma getirmen öneriliyor. ESM89400SX'te seviye 1 ile 6 arasında ayarlanıyor, fabrika ayarı 4."
images:
  coverAlt: "Program sonunda kapağı kendiliğinden hafif aralanmış bulaşık makinesi, alt sepette dik duran tabaklar ve ağzı aşağı yerleştirilmiş kaseler"
---

Program bitti ama bardaklar damlalı, plastik kaplar sırılsıklam. Electrolux'un ESM89400SX kullanma kılavuzundaki sorun giderme tablosunda bu durum **"Yetersiz kurutma sonuçları."** başlığıyla geçiyor ve Electrolux'un ilk sıraya koyduğu neden dikkat çekici: bulaşıklar yıkandıktan sonra **kapağı kapalı makinenin içinde çok uzun süre kalmış** olabilir. Bu yüzden bu rehberin merkezinde Electrolux'un **AirDry** işlevi ve **parlatıcı** var; ardından program seçimi, yerleştirme ve boşaltma sırası geliyor. Kaynak tek bir modelin kılavuzu; tuş ve program adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Parlatıcı gözünü doldur → parlatıcı seviyesini kontrol et → multi tablette de parlatıcıyı açık tut → AirDry'ı aç → kurutma aşamalı program seç → çukurlu parçaları ağzı aşağı koy → soğumasını bekleyip önce alt sepeti boşalt. İç duvarlardaki nem Electrolux'a göre arıza değil.

## Adım adım: evde denenecekler

**1. Parlatıcı gözünü doldur.** Tablodaki neden: **parlatıcı yoktur veya parlatıcı miktarı yeterli değildir.** Electrolux'a göre parlatıcı, bulaşıkları iz ve leke bırakmadan kurutmaya yardımcı olur ve sıcak durulama aşamasında suya otomatik eklenir. Parlatıcı göstergesi yanıyorsa gözün kapağını aç, parlatıcıyı **"MAX" işaretine** gelene kadar doldur. Dökülen parlatıcıyı, **aşırı köpük** oluşmasını önlemek için **emici bir bezle** sil; kapağı kapatıp yerine kilitlendiğinden emin ol. Electrolux yalnız **bulaşık makineleri için tasarlanmış** parlatıcı kullanılmasını istiyor ve bu bölmeye deterjan konmamasını vurguluyor.

**2. Parlatıcı seviyesini kontrol et.** Aynı satırdaki ikinci çözüm: **parlatıcı miktarını artır.** ESM89400SX'te parlatıcı miktarı **seviye 1 (en az) ile seviye 6 (en çok)** arasında ayarlanıyor; fabrika ayarı **seviye 4.** Seviye **0** ise parlatıcı gözü ve göstergesi kapalıdır. Ayar, kılavuzun "Kullanıcı moduna geçilmesi" bölümündeki iki tuşa göstergeler yanıp sönmeye başlayana kadar aynı anda basılı tutularak açılan **kullanıcı modunda** yapılıyor. Tablodaki bir not daha: kurutma sorununun nedeni **parlatıcının kalitesi** de olabilir.

**3. Multi tablette de parlatıcıyı açık tut.** Electrolux'un tablosu bunu ayrı bir madde olarak yazıyor: **multi tabletler kullanırken dahi daima parlatıcı kullan.** Kılavuz, yalnız multi tablet kullanıyorsan ve kurutmadan memnunsan parlatıcı gözünü kapatmaya izin veriyor; kurutma sorunu yaşıyorsan bu ayarı açık tut. Electrolux'un genel önerisi de en iyi kurutma için **daima parlatıcı kullanmak** ve göstergeyi açık tutmak.

**4. AirDry'ı aç.** Tablonun ilk satırı bu: bulaşıklar yıkandıktan sonra çok uzun süre **kapağı kapalı makinenin içinde kaldıysa** Electrolux'un çözümü, kapağın otomatik açılması ve kurutma performansını artırmak için **AirDry işlevini etkinleştirmek.** AirDry, kurutma aşamasında cihazın kapısını otomatik olarak açıp aralık bırakır. Ayarı yine **kullanıcı modunda** açıp kapatabilirsin. Electrolux'un uyarısı: otomatik açılan kapıyı **2 dakika boyunca kapatmaya çalışma.**

**5. Kurutma aşaması olan bir program seç.** Tablodaki son madde: **programda kurutma aşaması yoktur.** ESM89400SX'in program tablosunda dört bulaşık programının akışında **"Kurutma"** aşaması yazıyor; iki bulaşık programının akışında ise kurutma aşaması yok, yalnız AirDry var. Hangi programın hangisi olduğunu kılavuzundaki "Programlar" tablosundan kontrol et. Kılavuza göre bir kurutma aşaması olan program seçildiğinde panelde **kurutma aşaması göstergesi** açık olur.

**6. Çukurlu parçaları ağzı aşağı yerleştir.** Electrolux'un yerleştirme önerisi: **fincan, bardak ve tava gibi çukurlu bulaşıkları ağızları aşağı gelecek şekilde** yerleştir. Kılavuz ayrıca sepetlerin aşırı yüklenmemesini ve bulaşıkların birbirine temas etmemesini istiyor.

**7. Soğumasını bekle, alttan başla.** Kılavuzun boşaltma sırası: yemek takımlarını cihazdan çıkarmadan önce **soğumalarını bekle;** Electrolux'a göre sıcak parçalar kolayca zarar görebilir. Ardından **önce alt sepeti, sonra üst sepeti** boşalt.

## Arıza olmayan durumlar

**İç duvarlar ıslak.** Electrolux'un tablosu bunu açıkça yazıyor: makinenin iç kısmının ıslak olması bir sorun olduğu anlamına gelmez; nem makinenin duvarlarında yoğunlaşır.

**Kurutma sırasında kapağı açarsan program bitebilir.** Kılavuza göre kurutma aşamasında kapak **30 saniyeden uzun** açık kalırsa çalışan program sonlanır; kapağı AirDry açtıysa bu olmaz.

Parlatıcı ve tuz ayarının ayrıntısı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına, markadan bağımsız anlatım için [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/) sayfasına bakabilirsin. Bulaşıklar kurusa da kirli çıkıyorsa kardeş rehberimiz [Electrolux bulaşık makinesi temiz yıkamıyor](/blog/electrolux-bulasik-makinesi-temiz-yikamiyor/) yazısına geç.

## Ne zaman servis

Electrolux'un kılavuzu en baştan uyarıyor: makinenin uygun olmayan şekilde onarılması kullanıcı güvenliği açısından tehlike oluşturabilir, **her türlü onarım yetkili personel** tarafından yapılmalıdır. Şu durumlarda Yetkili Servis Merkezi'ne başvur:

- Yukarıdaki adımlardan sonra cam ve porselen bulaşıklar da ıslak çıkmaya devam ediyorsa: kılavuza göre makineyi kontrol ettikten sonra sorun tekrarlanırsa Yetkili Servis Merkezi ile iletişime geç.
- Ekranda **tabloda tanımlanmamış bir alarm kodu** görünüyorsa.

Ararken cihazın bilgi etiketindeki **Model, PNC ve Seri Numarası** bilgilerini hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, ayarlar, program ve yerleştirme kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Islak kalan hangi bulaşıklar: yalnız plastik mi, cam ve porselen de mi?
2. Parlatıcı göstergesi yanıyor mu, parlatıcı seviyesi kaç?
3. AirDry açık mı, program sonunda kapak aralanıyor mu?
4. Seçtiğin programın akışında kurutma aşaması var mı?
5. Multi tablet mi, ayrı deterjan mı kullanıyorsun?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
