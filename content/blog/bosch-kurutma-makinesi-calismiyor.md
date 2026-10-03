---
title: "Bosch kurutma makinesi çalışmıyor"
description: "Bosch kurutma makinesi çalışmıyor ya da program başlamıyorsa: fiş, elektrik, ekran, çocuk kilidi, kalan süre ve yoğuşma suyu kabı. Bosch kılavuzundaki sıra."
slug: "bosch-kurutma-makinesi-calismiyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf, yönlendirme 0.
#   Adresler 2 Eki'de yayındaki bosch-kurutma-makinesi-kurutmuyor için kullanılanlarla aynı (BSH'nin kendi medya alan adları); md5 bu koşuda yeniden alındı, birebir aynı. Okuma pdftotext -layout; sayfa = PDF sayfası.
#  (H) WTWH8760TR (ısı pompalı)  https://media3.bosch-home.com/Documents/9001851027_A.pdf  60 s.  md5 434892aeecaf2fa1c40307cdac205798
#  (Q) WQG244C1TR               https://media3.bsh-group.com/Documents/9001847050_E.pdf   40 s.  md5 7ff40c3f2504844ca9cbd584bda38b53
#  (W) WTW87460TR               https://media3.bosch-home.com/Documents/9001004673_A.pdf  32 s.  md5 6afdb7f1bfef765af4d9fdc143240ee9 (indirildi, bu yazıda atıf yok)
# H s.47 "Arızaları giderme": "Cihaz çalışmıyor." → "Şebeke bağlantı kablosunun elektrik fişi takılı değil. ▶ Cihazı elektrik şebekesine bağlayınız." · "Sigorta kutusundaki sigorta atmış. ▶ Sigorta kutusundaki
#   ilgili sigortayı kontrol ediniz." (numaralı adım yapılmadı) · "Elektrik beslemesi kesildi. ▶ Oda aydınlatmasının veya odadaki diğer cihazların çalışıp çalışmadığını kontrol ediniz."
#   · "Ekran söner ve yanıp söner." → "Enerji tasarrufu modu aktif. ▶ Herhangi bir tuşa basınız. a Ekran yeniden yanar." · ""Hot" ve tambur dönüyor." → "Soğutma prosesi etkin. 1. Hata yok. 2. Soğutma prosesi
#   sırasında program değişimi yapmayınız. Not: Soğutma prosesi 10 dakika kadar sürer." · "Cihaz duraklatıldı ama tambur dönüyor." → "Soğutma prosesi etkin. ▶ Hata yok - Müdahale gerekmiyor."
#   · H s.47 UYARI: "Sadece bunun eğitimini almış uzman personel cihazda onarımlar yapabilir."
# H s.49: "Program çalışmaya başlamıyor." → "Çocuk kilidi etkinleştirildi." → "Çocuk kilidinin devre dışı bırakılması", Sayfa 35 · "[başlat] üzerine basılmamıştır. ▶ [başlat] tuşuna basınız." · "Herhangi bir program
#   ayarlanmamış. 1. → Programın ayarlanması 2. → Programın başlatılması"
# H s.48-49: "[kap simgesi] ve program iptal edildi." → "Yoğuşma suyu kabı dolu." 1. boşaltma 2. içeri itme 3. programı başlatma · "Su tahliye hortumu bükülmüş veya sıkışmış." → "Su tahliye hortumunu bükmeden döşeyiniz."
#   · "Su tahliye hortumu tıkanmış. ▶ Su tahliye hortumunu şebeke suyuyla durulayınız." · "Yoğuşma suyu kabının filtresi kirlenmiştir."
# Q s.32: "Program çalışmaya başlamıyor." → "Çocuk kilidi etkinleştirildi. Çocuk kilidini devre dışı bırakınız." · "Kalan süre etkinleştirildi. İlgili Kalan süre seçeneğinin etkin olup olmadığını kontrol ediniz."
# H s.31: "12.1 Cihazın açılması ▶ [açma] üzerine basın. Açma işlemi birkaç saniye sürer." · "12.2 Programın ayarlanması 1. Program seçme düğmesini döndürünüz ve istenen programı ayarlayınız."
# H s.32: "12.5 ... 3. Kapağı kapatınız. Çamaşırların kapağa sıkışmadığından emin olunuz." · "12.6 Programın başlatılması ▶ [başlat] tuşuna basınız. a Ekranda program süresi ya da program bitiş zamnı görüntülenir."
# H s.34: "Kurutma programı sonlandığında veya çalışma sırasında ekranda bir uyarı görünürse, yoğuşma suyu kabını boşaltınız." · "1. Yoğuşma suyu kabı yatay olarak çıkarılmalıdır." · H s.35 "2. Yoğuşma suyu kabı boşaltılmalıdır."
#   · "Yoğuşma suyu kabını çalışmadan önce cihaza ittiğinizden emin olunuz." · "▶ Yoğuşma suyu kabı dayanak noktasına kadar itilmelidir." · "13.1 ... ▶ Yakl. 3 saniye boyunca [kilit] üzerine basılmalıdır. a Kumanda
#   elemanları kilitlenir. a Çocuk kilidi, cihaz kapatıldıktan sonra ve elektrik kesintisinde de etkin kalır." · "13.2 Gereklilik: Çocuk kilidinin devre dışı bırakılması için cihaz çalıştırılmalıdır. ▶ Yakl. 3 saniye boyunca [kilit] üzerine basılmalıdır."
# BİLEREK YAZILMAYANLAR: sigorta kutusuna müdahale (#31, gövdede elektrikçiye bırakıldı) · tuş simgeleri metin katmanında yok, tuş adları genel ("açma tuşu", "başlat tuşu", "çocuk kilidi tuşu") · Home Connect/Wi-Fi satırları
#   · Siemens/Profilo kurutma makinelerine genelleme (grup kuralı) · fiyat.
# Alıntı denetim tablosu: bosch-kurutma-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Elektrik fişinin takılı olduğunu kontrol et."
  - "Odanın ışığının ve odadaki diğer cihazların çalıştığına bakarak elektrik olup olmadığını anla."
  - "Ekran sönüp yanıp sönüyorsa enerji tasarrufu modundan çıkmak için herhangi bir tuşa bas."
  - "Makineyi açma tuşuyla aç, kapağı çamaşır sıkıştırmadan kapat, program seçme düğmesiyle program ayarla ve başlat tuşuna bas."
  - "Çocuk kilidi açıksa makine açıkken kilit tuşuna yaklaşık 3 saniye basarak kilidi kaldır."
  - "Kalan süre seçeneği etkinse ayarlanan program bitiş zamanını kontrol et."
  - "Yoğuşma suyu kabı uyarısıyla program iptal olduysa kabı yatay çıkar, boşalt, dayanak noktasına kadar it ve programı yeniden başlat."
faq:
  - q: "Bosch kurutma makinemin ekranı kendiliğinden kararıyor, bozuk mu?"
    a: "Bosch'un arıza tablosuna göre ekranın sönmesi ve yanıp sönmesi enerji tasarrufu modunun aktif olduğunu gösterir. Herhangi bir tuşa basınca ekran yeniden yanar."
  - q: "Programı başlattım ama hiçbir şey olmuyor."
    a: "Bosch kılavuzu üç neden sayıyor: çocuk kilidinin etkin olması, başlat tuşuna basılmamış olması ve hiç program ayarlanmamış olması. WQG244C1TR kılavuzu Kalan süre seçeneğinin (program bitiş zamanı) etkin olup olmadığını kontrol etmeni de istiyor."
  - q: "Çocuk kilidi elektrik kesilince kendiliğinden kalkar mı?"
    a: "Hayır. Bosch'a göre çocuk kilidi cihaz kapatıldıktan sonra ve elektrik kesintisinde de etkin kalır. Kaldırmak için cihazı açıp kilit tuşuna yaklaşık 3 saniye basmalısın."
  - q: "Ekranda Hot yazıyor ve tambur dönüyor, makine durmuyor."
    a: "Bu bir arıza değil. Bosch'a göre soğutma prosesi etkindir ve yaklaşık 10 dakika sürer; bu sırada program değiştirme. Cihaz duraklatıldığı hâlde tambur dönüyorsa da sebep yine soğutma prosesi, müdahale gerekmiyor."
images:
  coverAlt: "Çamaşır makinesinin üzerine yerleştirilmiş beyaz kurutma makinesinin ön panelindeki program düğmesi"
---

Kurutma makinesine çamaşırları koydun, düğmeyi çevirdin ama tambur dönmüyor; belki ekran bile karanlık. Bosch'un ısı pompalı kurutma makinesi kılavuzundaki arıza tablosunda iki satır bu durumu anlatıyor: **"Cihaz çalışmıyor."** ve **"Program çalışmaya başlamıyor."** Birincisi elektrikle, ikincisi kumanda ayarlarıyla ilgili; ikisi de çoğu zaman evde çözülüyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı → odada elektrik var mı → ekran enerji tasarrufunda mı → aç, kapağı kapat, program seç, başlat → çocuk kilidi açık mı → kalan süre seçeneği açık mı → yoğuşma suyu kabı dolu mu. Hepsine rağmen çalışmıyorsa → yetkili servis.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** Tablodaki ilk neden: **"Şebeke bağlantı kablosunun elektrik fişi takılı değil."** Çözüm: **"Cihazı elektrik şebekesine bağlayınız."**

**2. Elektrik var mı bak.** Neden: **"Elektrik beslemesi kesildi."** Bosch'un önerdiği yöntem basit: **oda aydınlatmasının veya odadaki diğer cihazların** çalışıp çalışmadığını kontrol et.

**3. Ekranı uyandır.** **"Ekran söner ve yanıp söner."** satırının nedeni **"Enerji tasarrufu modu aktif."** Çözüm: **"Herhangi bir tuşa basınız."** Ekran yeniden yanar.

**4. Sırayla aç, ayarla, başlat.** Tablodaki iki neden: başlat tuşuna **basılmamış** olması ve **"Herhangi bir program ayarlanmamış."** olması. Bosch'un kullanım bölümündeki sıra: açma tuşuna bas (açılma **birkaç saniye** sürer), çamaşırları koy ve kapağı kapat; çamaşırların **kapağa sıkışmadığından** emin ol. Program seçme düğmesini döndürerek programı ayarla ve başlat tuşuna bas. Program başlayınca ekranda **program süresi ya da bitiş zamanı** görünür.

**5. Çocuk kilidini kaldır.** Neden: **"Çocuk kilidi etkinleştirildi."** Bosch'a göre kilit etkinken kumanda elemanları kilitlenir ve kilit **cihaz kapatıldıktan sonra ve elektrik kesintisinde de etkin kalır.** Kaldırmak için cihaz **açıkken** kilit tuşuna **yaklaşık 3 saniye** bas.

**6. Kalan süre seçeneğine bak.** WQG244C1TR kılavuzundaki satır: **"Kalan süre etkinleştirildi."** Çözüm: **"İlgili Kalan süre seçeneğinin etkin olup olmadığını kontrol ediniz."** Bu seçenek **program bitiş zamanını** ayarlar; Bosch'a göre program süresi ayarlanan saat süresine dahildir. Bitiş saatini kontrol et.

**7. Yoğuşma suyu kabını boşalt.** Ekranda kap simgesiyle **program iptal edildiyse** neden **"Yoğuşma suyu kabı dolu."** Bosch'un sırası: kabı **yatay olarak** çıkar, boşalt, **dayanak noktasına kadar** içeri it ve programı yeniden başlat. Makine su tahliye hortumuyla bağlıysa tablo hortumun **bükülmediğine ya da sıkışmadığına** bakmanı, tıkalıysa **şebeke suyuyla durulamanı** istiyor.

## Arıza sayılmayan durumlar

- **Ekranda "Hot" ve tambur dönüyor:** soğutma prosesi etkin, hata yok. Bosch'a göre süreç **10 dakika kadar** sürer; bu sırada program değiştirme.
- **Cihaz duraklatıldı ama tambur dönüyor:** yine soğutma prosesi; müdahale gerekmiyor.
- **Uğultu, pompa ve vızıltı sesleri:** tabloya göre kompresör, yoğuşma suyu pompası ya da kompresör havalandırması çalışıyor; normal çalışma sesi.

Makine çalışıyor ama çamaşırlar nemli çıkıyorsa: [Bosch kurutma makinesi kurutmuyor](/blog/bosch-kurutma-makinesi-kurutmuyor/). Ekrandaki simgeler için [Bosch kurutma makinesi sembolleri ve anlamları](/blog/bosch-kurutma-makinesi-sembolleri-ve-anlamlari/), kap uyarısı için [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/) yazısına bakabilirsin.

## Ne zaman servis

- Odada elektrik var, fiş takılı, kilit kapalıyken makine **hiç açılmıyorsa.**
- Bosch'un tablosu **sigorta kutusundaki sigortanın** atmış olmasını da nedenler arasında sayıyor; elektrik panosuyla ilgili işi bir elektrikçiye bırak.
- Elektrik kablosu hasarlıysa: Bosch'a göre üretici, müşteri hizmetleri ya da benzer kalifikasyona sahip bir kişi tarafından değiştirilmeli.

Bosch'un uyarısı: usulüne uygun olmayan onarımlar tehlikelidir; cihazda **yalnızca bunun eğitimini almış uzman personel** onarım yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, kumanda ayarları, kilit ve yoğuşma suyu kabı kullanıcıya; elektrik tesisatı, kablo, kart ve kompresör servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
