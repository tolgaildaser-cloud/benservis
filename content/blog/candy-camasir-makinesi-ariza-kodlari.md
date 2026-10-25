---
title: "Candy çamaşır makinesi arıza kodları: E2, E3, E4, E7"
description: "Candy çamaşır makinesinde E2 su almıyor, E3 su boşaltmıyor, E4 fazla köpük, E7 kapak sorunu demek. Ekransız modelde yanıp sönme sayısı ve çözüm sırası."
slug: "candy-camasir-makinesi-ariza-kodlari"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M2). origin/main'de "candy" geçen blog sayfası yok (slug + başlık + gövde grep'i boş; yalnız src/ marka listeleri).
# Arama kanıtı (#164, bu koşu, hl=tr gl=tr): "candy çamaşır makinesi a" → 1. "candy çamaşır makinesi arıza kodları"; "candy çamaşır makinesi e" → 1. "…e03 hatası", 2. "…e20 hatası", 3. "…e02 hatası". GSC: satır yok.
# Belge (#88; Candy'nin Türkçe sitesi yok, candy-home.com/tr_TR 404; Haier Europe TR sitesi Candy kılavuzu listelemiyor). Zincir:
#   https://www.candy-home.com/en_GB/user-manual/ (200) → Product Line "Washing Machines" → model "RO 1486DWHC7\1-S (31008928)" → EN kılavuz bağlantısı
#   → https://d15v10x8t3bz3x.cloudfront.net/Libretti/2019/8/15647292/43029015%20wm%20rapid%20itdeenesfr (200, application/pdf, 9.807.203 bayt)
#  (R) Candy RapidÓ çamaşır makinesi kullanım kılavuzu, IT/DE/EN/ES/FR, 124 s., md5 fd30c919b9368759511115a2de605b5a — İngilizce bölüm PDF s.58, s.62, s.64, s.70, s.71
#  Kılavuzun İngilizce baskısı kullanıldı; alıntılar Türkçeye çevrildi, orijinaller KAYNAK'ta.
# BİLEREK YAZILMAYANLAR: E20, E03 gibi kılavuzda olmayan kodlara anlam (yalnız "diğer kod" kuralı) · E02/E03'ün E2/E3 ile aynı olduğu iddiası (belgede yok) · pompa, valf, kart teşhisi · fiyat (#46).
# Alıntı denetimi: candy-camasir-makinesi-ariza-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Emici bir bez", "Geniş, alçak bir kap", "Biraz sıvı sabun"]
steps:
  - "Ekranlı modelde E harfinden sonraki sayıyı oku; ekransız modelde tüm ışıkların kaç kez yanıp söndüğünü beş saniyelik aradan önce say."
  - "E2 görüyorsan su musluğunun açık olduğunu, giriş hortumunun bükülmediğini ve tahliye hortumunun doğru yükseklikte olduğunu kontrol et."
  - "E2 sürüyorsa musluğu kapat, giriş hortumunu makinenin arkasından sök ve hortum ucundaki kum filtresinin temiz olduğuna bak."
  - "E3 görüyorsan filtrenin altına emici bir bez koy, filtreyi saat yönünün tersine sonuna kadar çevirip çıkar, temizle ve saat yönünde geri tak."
  - "E3 sürüyorsa tahliye hortumunun bükülmediğini ve evdeki giderin tıkalı olmadığını kontrol et; giderin suyu akıttığını lavaboda dene."
  - "E4 görüyorsan bir sonraki yıkamada doğru miktarda ve çamaşır makinesine uygun deterjan kullan."
  - "E7 görüyorsan kapağın tam kapandığını kontrol et; kapak kilitliyse makineyi kapat, fişini çek, iki üç dakika bekle ve kapağı yeniden aç."
faq:
  - q: "Candy çamaşır makinesinde E3 ne demek?"
    a: "Candy'nin kullanım kılavuzuna göre E3, çamaşır makinesinin suyu boşaltamadığı anlamına geliyor. Kılavuz filtrenin tıkalı olmadığını, filtre bölmesinde yabancı cisim kalmadığını, tahliye hortumunun bükülmediğini ve evdeki giderin tıkalı olmadığını kontrol etmeni istiyor."
  - q: "Ekranı olmayan Candy makinede hata kodunu nasıl anlarım?"
    a: "Kılavuza göre ekransız modellerde hata, tüm ışıkların arka arkaya yanıp sönmesiyle gösteriliyor. Yanıp sönme sayısı hata kodunu veriyor, ardından beş saniyelik bir ara geliyor. Örneğin iki yanıp sönme, beş saniye ara, yine iki yanıp sönme Hata 2 demek."
  - q: "E2 hatası neden çıkar?"
    a: "E2, makinenin su alamadığını gösteriyor. Candy'nin sırası şu: musluk açık mı, giriş hortumu bükülmüş ya da sıkışmış mı, tahliye hortumu doğru yükseklikte mi, giriş hortumunun ucundaki kum filtresi temiz mi."
  - q: "Kılavuzda olmayan bir kod görüyorum, ne yapmalıyım?"
    a: "Candy'nin kuralı tüm diğer kodlar için aynı: makineyi kapat, fişini çek, bir dakika bekle. Sonra makineyi açıp bir program başlat. Hata tekrar gelirse doğrudan yetkili servise başvur."
  - q: "E4 fazla köpük demek, makine bozuk mu?"
    a: "Kılavuza göre E4 çok fazla köpük ya da su olduğunu gösteriyor ve önerilen çözüm doğru miktarda, çamaşır makinesi için üretilmiş deterjan kullanmak. Kod deterjanı düzelttiğin hâlde sürüyorsa servise danış."
images:
  coverAlt: "Önden yüklemeli bir çamaşır makinesinin dijital ekranlı kontrol paneli"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda ilgili filtre"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda ilgili filtre"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda duvar giderine giden hortum"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda deterjan bölmesi"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
---

Candy çamaşır makinesi programın ortasında durdu ve ekranda **E** harfiyle başlayan bir kod çıktı. Ya da ekranı olmayan modelde tüm ışıklar birlikte yanıp sönüyor. Candy bu kodları kullanım kılavuzunun sorun giderme bölümünde tek tabloda topluyor. Candy'nin Türkçe bir sitesi olmadığı için bu yazıda Candy'nin İngiltere sitesindeki kılavuz sayfasından indirdiğimiz RapidÓ serisi çamaşır makinesi kılavuzunun İngilizce baskısını kullandık; alıntılar bizim çevirimiz. Kodlar ve tuşlar modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E2 su alamıyor, E3 su boşaltamıyor, E4 çok fazla köpük ya da su, E7 kapak sorunu. Listede olmayan bir kodda makineyi kapat, fişini çek, bir dakika bekle, yeniden başlat; kod geri gelirse yetkili servis.

## Kod nasıl okunur

Kılavuza göre ekranlı modellerde hata, önünde **E** harfi olan bir sayıyla gösteriliyor: Hata 2, ekranda E2 olarak görünür. Ekransız modellerde ise tüm ışıklar arka arkaya yanıp sönüyor. Yanıp sönme sayısı hata kodunu veriyor, ardından **beş saniyelik** bir ara geliyor. İki kez yanıp sönme, beş saniye ara, yine iki kez yanıp sönme Hata 2 demek.

| Kod | Ekransız modelde | Candy'ye göre anlamı | Kim ne yapar |
|---|---|---|---|
| **E2** | 2 kez yanıp sönme | Makine su alamıyor | 🛠️ Musluk, hortum, kum filtresi |
| **E3** | 3 kez yanıp sönme | Makine suyu boşaltmıyor | 🛠️ Filtre, tahliye hortumu, gider |
| **E4** | 4 kez yanıp sönme | Çok fazla köpük ve/veya su | 🛠️ Deterjan miktarı |
| **E7** | 7 kez yanıp sönme | Kapak sorunu | 🛠️ Kapağı kapat, gerekirse fişi çek |
| **Diğer kodlar** | Diğer sayılar | Belirtilmemiş arıza | 🔧 Bir dakika fişte bekle; tekrar ederse servis |

## Adım adım: evde denenecekler

**1. Kodu oku.** Ekranlı modelde E'den sonraki sayıyı not al. Ekransız modelde ışıkların kaç kez yanıp söndüğünü, beş saniyelik aradan önce say. Servisi araman gerekirse ilk soru bu olacak.

**2. E2'de musluğa ve hortuma bak.** Candy'nin ilk iki kontrolü su musluğunun açık olması ve su giriş hortumunun bükülmemiş, kıvrılmamış ya da sıkışmamış olması. Kılavuz tahliye hortumunun doğru yükseklikte olup olmadığını da kurulum bölümüne göre kontrol etmeni istiyor.

**3. E2 sürüyorsa kum filtresini kontrol et.** Musluğu kapat, giriş hortumunu makinenin arkasından sök ve hortum ucundaki "kum önleyici" filtrenin temiz ve tıkanmamış olduğuna bak. Kılavuz E2 satırında ön filtreyi de sayıyor: filtrenin tıkalı olmadığını, filtre bölmesinde suyun akışını engelleyen yabancı cisim kalmadığını kontrol et.

**4. E3'te filtreyi temizle.** E3, makinenin suyu boşaltamadığını gösteriyor ve ilk bakılacak yer alt öndeki filtre. Candy'nin önerisi filtreyi sökmeden önce altına emici bir bez koymak; filtreyi çıkarırken biraz su gelmesi normal. Makinede tahliye suyu birikmişse daha fazla su gelebilir; altına geniş bir kap da hazırla. Kılavuza göre bazı modellerde filtrenin yanındaki kıvrımlı hortumu çekip tıpasını açarak suyu önce bir kaba boşaltabiliyorsun. Filtreyi saat yönünün tersine sonuna kadar çevir, çıkar ve temizle. Yerine saat yönünde takıyorsun; artık dönmediğinde ve sapı yatay durduğunda kilitlenmiş demektir. Contaya biraz sıvı sabun sürmek takmayı kolaylaştırıyor.

**5. E3 sürüyorsa hortuma ve gidere bak.** Tahliye hortumunun bükülmediğini, kıvrılmadığını ya da sıkışmadığını kontrol et. Candy evdeki gider sisteminin de tıkalı olmamasını istiyor ve pratik bir test öneriyor: suyu lavaboya akıtmayı dene. Lavabo yavaş akıyorsa sorun makinede değil tesisatta olabilir.

**6. E4'te deterjanı düzelt.** E4 çok fazla köpük ve/veya su demek. Kılavuzun çözümü doğru miktarda deterjan kullanmak ve deterjanın çamaşır makinesinde kullanıma uygun olduğundan emin olmak. Elde yıkama deterjanı ya da fazla dozaj köpüğü artırır.

**7. E7'de kapağı kontrol et.** E7 kapak sorunu. Kapağın tam kapandığını ve kazandaki çamaşırların kapağın kapanmasını engellemediğini kontrol et. Kapak kilitli kaldıysa Candy'nin sırası şu: makineyi kapat, fişini prizden çek, **iki üç dakika** bekle ve kapağı yeniden aç.

## Ne zaman servis

- Listede olmayan bir kod, makineyi kapatıp fişini çektikten, bir dakika bekleyip yeniden başlattıktan sonra geri geliyorsa
- Filtre ve hortumlar temiz olduğu hâlde E2 ya da E3 sürüyorsa
- E7 kapağı yeniden kapattıktan ve fişi çekip bekledikten sonra da geliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Musluk, hortumlar, kum filtresi, ön filtre ve deterjan sende; pompa, su giriş valfi ve elektronik kart Candy yetkili servisinin.

## Servisi aramadan önce kısa özet

1. Ekranda hangi kod var ya da ışıklar kaç kez yanıp sönüyor?
2. Kod hangi aşamada çıktı: su alırken mi, boşaltırken mi?
3. Filtre ve kum filtresi temizlendi mi?
4. Kapak açıklığındaki etikette yazan 16 karakterlik seri numarası ne? Candy'ye göre servis bu numarayı soruyor.

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Kapak açılmıyorsa [Candy çamaşır makinesi kapağı açılmıyor](/blog/candy-camasir-makinesi-kapagi-acilmiyor/) yazısına, programı sıfırlamak için [Candy çamaşır makinesi resetleme](/blog/candy-camasir-makinesi-resetleme/) rehberine bak. Bil, gör, çağır.
