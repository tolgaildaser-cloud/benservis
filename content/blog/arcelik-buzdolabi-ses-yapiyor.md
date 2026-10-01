---
title: "Arçelik buzdolabı ses yapıyor"
description: "Arçelik buzdolabı ses yapıyorsa önce sesi tanı: Arçelik'e göre hangi sesler normal, sarsılma ve gürültüde üstteki eşya, ayak ayarı ve zemin kontrolü."
slug: "arcelik-buzdolabi-ses-yapiyor"
date: "2026-10-01"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Arçelik belirti koşusu). Belgeler 30 Eyl'de download.arcelik.com.tr'den indirildi; A ve B bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-buzdolabi-bulasik-sprint/ (bz4=A, bz1=B)
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext, sayfa = PDF sayfası (A'da basılı no + 2, B'de basılı no + 1).
#  (A) 5845 NFEY / 8541 NFEY / 5850 NFY / 5847 NFEY / 5850 NDEI / 8500 NFEY / 584611 EI / 584611 MB
#      https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7289120181_tr_TR20190724-090854-735.pdf  44 s.  md5 15ab677d45027c5992101461a78df4fa  (sayfa atıfları esas olarak A)
#  (B) 8844 SBS NF  https://download.arcelik.com.tr/download.usagemanuals/23475_8844-SBS-NF-486802_.pdf  26 s.  md5 821234b1c40a71d937abb9cb28ccf872
# Sorun giderme (A s.39-41, B s.20):
#   "Buzdolabı çalışırken çalışma sesi artıyor." → "Ortam sıcaklığının değişmesine bağlı olarak ürünün çalışma performansı değişebilir. Bu normaldir ve bir arıza değildir." (A s.39)
#   "Sarsılma ya da gürültü." → "Zemin düz veya dayanıklı değildir. >>> Ürün yavaşça hareket ettirildiğinde sallanıyorsa ayaklarını ayarlayarak ürünü dengeleyin. Ayrıca zeminin ürünü taşıyabilecek kadar
#     dayanıklı olmasına dikkat edin." · "Ürünün üzerine konulmuş eşyalar gürültü yapıyor olabilir. >>> Ürünün üzerinde bulunan eşyaları kaldırın." (A s.40; B s.20 aynı anlam)
#   "Üründen sıvı akması, püskürmesi vb. sesler geliyor." → sıvı ve gaz akışları, normal (A s.40) · "Üründen rüzgar sesi geliyor." → fan, normal (A s.40)
#   "Kapı açıldığında fan çalışmaya devam ediyor." → dondurucu kapısı açıldığında fan çalışmaya devam edebilir (A s.41)
#   B s.20 "Buzdolabından analog saatlerde duyulan saniye sesine benzer ses geliyor." → selenoid valf, "Bu normaldir ve bir arıza nedeni değildir." (+ B s.16 Cool Control bölmesi soğutma elemanı)
# Diğer: A s.10 halı/kilim üzerine yerleştirmeyin; "Sarsıntıları önlemek için buzdolabını düz bir zemine yerleştirin." · A s.11 3.5 ön ayakları döndürerek; siyah ok yönünde köşe alçalır,
#   diğer yönde yükselir; dolabı hafifçe kaldırması için yardım · A s.11 3.7 kapı açık uyarısı 1 dakika, opsiyonel · A s.12 / B s.9 kompresör başlangıç sesi, sıkışmış sıvı ve gaz sesi normal
#   · A s.32 otomatik buz makinesinde buz dökme sesi normal · A s.36 dondurma operasyonunda bir miktar sesli çalışma · A s.37 hareketli gövde rafı motor sesi normal · A s.41 bayi / Yetkili Servis.
# BİLEREK YAZILMAYANLAR: kompresör/fan/motor arıza teşhisi (belgede yok) · arka kapak, takoz vidaları (vida = alet; ses satırında yok) · desibel karşılaştırması · fiyat (#46).
# Alıntı denetim tablosu: arcelik-buzdolabi-ses-yapiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Bir yardımcı"]
steps:
  - "Sesin türünü ayırt et; kompresörün devreye girme sesi, sıvı akması ya da püskürmesi ve fanın rüzgâr sesi Arçelik'e göre normaldir."
  - "Uyarı sesi geliyorsa kapının açık kalıp kalmadığına bak ve kapıyı kapat."
  - "Buzdolabının üzerinde duran eşyaları kaldır."
  - "Buzdolabını yavaşça hareket ettirip sallanıp sallanmadığını kontrol et."
  - "Sallanıyorsa biri dolabı hafifçe kaldırırken ön ayakları döndürerek dolabı dengele."
  - "Zeminin düz olduğundan, dolabı taşıyacak kadar sağlam olduğundan ve dolabın halı ya da kilim üzerinde durmadığından emin ol."
faq:
  - q: "Arçelik buzdolabımdan su akar gibi ses geliyor, arıza mı?"
    a: "Arçelik'in sorun giderme listesine göre hayır. Üründen sıvı akması ya da püskürmesi gibi sesler gelmesinin nedeni ürünün çalışma prensipleri gereği gerçekleşen sıvı ve gaz akışları; Arçelik bunun normal olduğunu ve arıza olmadığını yazıyor. Kılavuza göre soğutma sistemi içindeki sıkışmış sıvı ve gazlar kompresör çalışmıyorken de ses çıkarabilir."
  - q: "Buzdolabından saat tıkırtısı gibi bir ses geliyor. Normal mi?"
    a: "Arçelik 8844 SBS NF kılavuzunda bu sesin satırı var: analog saatlerde duyulan saniye sesine benzer ses buzdolabındaki selenoid valften geliyor. Valf, soğutucu ya da dondurucu sıcaklığına ayarlanabilen bölmede soğutucu akışkan geçişini sağlıyor. Arçelik'e göre bu normal ve bir arıza nedeni değil."
  - q: "Yazın buzdolabı daha sesli çalışıyor, neden?"
    a: "Arçelik'in listesinde 'Buzdolabı çalışırken çalışma sesi artıyor' satırının açıklaması: ortam sıcaklığının değişmesine bağlı olarak ürünün çalışma performansı değişebilir. Arçelik bunun normal olduğunu ve arıza olmadığını yazıyor."
  - q: "Buzdolabı sarsılıyor ve gürültü yapıyor, ne yapmalıyım?"
    a: "Arçelik bu satırda iki neden sayıyor. Zemin düz ya da dayanıklı değilse dolabı yavaşça hareket ettir; sallanıyorsa ayaklarını ayarlayarak dengele ve zeminin dolabı taşıyabilecek kadar dayanıklı olmasına dikkat et. Ses dolabın üzerine konmuş eşyalardan geliyorsa o eşyaları kaldır."
images:
  coverAlt: "Mutfakta düz zeminde duran iki kapılı bir buzdolabının ön alt köşesinde ayarlanabilir ayağı çeviren bir el, dolabın üstü boş"
---

Gece mutfaktan bir tıkırtı, bir fokurtu ya da hafif bir uğultu geliyor ve buzdolabının bozulup bozulmadığını merak ediyorsun. Arçelik'in buzdolabı kullanma kılavuzlarındaki sorun giderme bölümü ses konusunu tek satırda değil, **sesin türüne göre ayrı ayrı** ele alıyor. Çoğunun karşısında aynı cümle yazıyor: **"Bu normaldir ve bir arıza değildir."** Kullanıcıdan iş isteyen satır ise bir tane: **"Sarsılma ya da gürültü."** Bu yazıda önce normal sesleri ayırıyoruz, sonra Arçelik'in sarsılma için verdiği kontrolleri sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kompresörün devreye girme sesi, sıvı akması ve fanın rüzgâr sesi Arçelik'e göre normal. Uyarı sesi geliyorsa kapıyı kapat. Sarsılma ve gürültüde: üstteki eşyaları kaldır, dolabı yavaşça oynatıp sallanıyor mu bak, ön ayakları çevirerek dengele, zeminin düz ve sağlam olduğundan emin ol.

## Adım adım: evde denenecekler

**1. Sesi tanı.** Arçelik'in listesinde arıza sayılmayan sesler: kompresör çalışmaya başladığında **bir ses duyarsın**; kılavuza göre soğutma sistemindeki **sıkışmış sıvı ve gazlar** kompresör çalışmıyorken de ses çıkarabilir. **Sıvı akması, püskürmesi** gibi seslerin nedeni ürünün çalışma prensipleri gereği gerçekleşen **sıvı ve gaz akışları.** **Rüzgâr sesi** ise soğutma için kullanılan **fandan** geliyor. Ortam sıcaklığı değiştiğinde **çalışma sesinin artması** da Arçelik'e göre normal. Bunların hiçbiri için yapman gereken bir şey yok.

**2. Uyarı sesi mi, kontrol et.** Bazı Arçelik modellerinde kapı açık uyarısı var: kılavuza göre kapı **1 dakika** açık kaldığında **uyarı sesi** duyulur; kapı kapatıldığında ya da varsa ekran düğmelerinden birine basıldığında ses kesilir. Uyarı sesi duyuyorsan önce kapıların tam kapalı olduğuna bak.

**3. Dolabın üstünü boşalt.** "Sarsılma ya da gürültü" satırındaki nedenlerden biri: **ürünün üzerine konulmuş eşyalar gürültü yapıyor olabilir.** Arçelik'in çözümü: **ürünün üzerinde bulunan eşyaları kaldır.**

**4. Sallanıyor mu, dene.** Aynı satırdaki diğer neden: **zemin düz veya dayanıklı değil.** Arçelik'in tarif ettiği kontrol basit: dolabı **yavaşça hareket ettir**; sallanıyorsa denge ayarı gerekiyor.

**5. Ön ayaklarla dengele.** Arçelik'in kurulum bölümüne göre buzdolabı dengesiz duruyorsa **ön ayaklarını döndürerek** dengeli durmasını sağlayabilirsin. Kılavuzdaki şekle göre ayak **siyah ok yönüne** döndürüldüğünde ayağın bulunduğu köşe **alçalır**, diğer yöne döndürüldüğünde **yükselir.** Arçelik bu işlem sırasında **birinden dolabı hafifçe kaldırması için yardım** almanın kolaylık sağlayacağını yazıyor.

**6. Zemini kontrol et.** Arçelik'in çözüm cümlesinin ikinci yarısı: **zeminin ürünü taşıyabilecek kadar dayanıklı** olmasına dikkat et. Kurulum bölümü iki kural daha ekliyor: **sarsıntıları önlemek için** buzdolabını **düz bir zemine** yerleştir ve dolabı **halı veya kilim** gibi malzemelerin üzerine koyma.

## Modele göre normal olan sesler

Arçelik'in kılavuzlarında bazı sesler yalnız belli özelliklere sahip dolaplarda geçiyor:

- **Saat tıkırtısı:** 8844 SBS NF kılavuzuna göre analog saatlerdeki **saniye sesine benzer** ses, soğutucu ya da dondurucu sıcaklığına ayarlanabilen bölmede soğutucu akışkan geçişini sağlayan **selenoid valften** geliyor. Arçelik'e göre normal ve bir arıza nedeni değil.
- **Buz dökme sesi:** Otomatik buz makineli ürünlerde **buz dökme sırasında** ses oluşabilir; Arçelik'e göre bu ses normal ve hata belirtisi değil.
- **Raf motoru:** Hareketli gövde rafı olan modellerde butona basıldığında duyulan ses, Arçelik'e göre **hareketi sağlayan motorun sesi** ve normal.
- **Dondurma yaparken:** Dondurma özelliği olan modellerde Arçelik, dondurma süresince dolabın çalışma koşullarına göre **bir miktar sesli çalışacağını** yazıyor.
- **Kapı açıkken fan:** Arçelik'e göre **dondurucu kapısı açıldığında** fan çalışmaya devam edebilir.

Markadan bağımsız anlatım için [buzdolabı ses yapıyor](/blog/buzdolabi-ses-yapiyor/) yazısına bakabilirsin. Ses değişikliğiyle birlikte dolap yeterince soğutmuyorsa [Arçelik buzdolabı soğutmuyor](/blog/arcelik-buzdolabi-sogutmuyor/) rehberine geç; paneldeki uyarılar için [Arçelik buzdolabı sembolleri ve anlamları](/blog/arcelik-buzdolabi-sembolleri-ve-anlamlari/) sayfası var.

## Ne zaman servis

Dolabın üstü boş, ayakları dengeli, zemin düz ve sağlam, duyduğun ses yukarıdaki normal seslerden biri değil ve sürüyorsa Arçelik'in kılavuzundaki genel uyarı geçerli: **bu bölümdeki talimatları uygulamana rağmen sorunu gideremezsen ürünü satın aldığın bayiye ya da Yetkili Servise başvur.** Aynı kılavuzun kuralı: **çalışmayan ürünü kendin onarmayı deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Sesi tanımak, dolabın üstü, ayak ayarı ve zemin kullanıcıya; kompresör, fan ve soğutma sistemi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ses nasıl: tıkırtı, fokurtu, uğultu, vınlama, takırtı?
2. Ses sürekli mi, kompresör devreye girdiğinde mi, kapı açıkken mi?
3. Dolabın üstünde eşya var mı, dolap yavaşça itildiğinde sallanıyor mu?
4. Dolap yeterince soğutuyor mu?
5. Panelde bir uyarı ya da hata göstergesi var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
