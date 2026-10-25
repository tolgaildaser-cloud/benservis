---
title: "Kiwi dijital sulama zamanlayıcı kurulumu ve ayarı"
description: "Kiwi Garden KGWT-550 ve KGWT-551 kılavuzlarına göre musluğa takma, pil, saat, başlangıç, süre ve sıklık ayarı, manuel sulama ve su çıkmıyorsa kontrol."
slug: "kiwi-dijital-sulama-zamanlayici"
date: "2026-10-24"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ yazı alt ajanı (YK #182 Dalga 7, küme Y2, çatal C, yedek 1). Konu: origin/main 26ffd7d'de "sulama|zamanlayici" slug ve başlık grep'i boş; Dalga 6/7 klasörlerinde yok.
# Kategori: origin/main'de bahçe kategorisi yok; brif gereği "Küçük Ev Aletleri". Teşhis çağrısı yok (#149).
# GSC: Sorgular.csv (www-2..7) içinde "kiwi", "sulama" satırı YOK.
# Arama kanıtı (#164, bu koşu, suggestqueries hl=tr gl=tr): "kiwi sulama zamanlayıcı" → 3. "kiwi dijital sulama zamanlayıcı",
#   4. "kiwi otomatik sulama zamanlayıcısı", 5. "kiwi dijital sulama zamanlayıcı kgwt 551", 6. "kiwi bahçe sulama zamanlayıcısı".
# Belgeler bu koşuda curl ile static.kiwi.com.tr'den indirildi (HTTP 200 application/pdf), ürün sayfaları 200 ve PDF adını içeriyor. #88: yalnız üretici belgesi.
#  (A) KGWT-550 Dijital Sulama Zamanlayıcı, 16 s., md5 8311813a3d829854ed116444a47b6981 (tamamı TR; garanti s.13: Kiwi Garden, KGWT-550)
#  (B) KGWT-551 Dijital Sulama Zamanlayıcı, 32 s., md5 617d057823c8ed438ae43f800f1dcd93 (TR s.1-9 ve s.26-32; ⚠ garanti belgesinde model "KGWT-550" yazıyor, kapak ve sayfa başlıkları KGWT-551)
# BİLEREK YAZILMAYANLAR: gövde açma/iç yapı (kılavuz yasaklıyor) · KGWT-550'de çocuk kilidi tuşunun adı (metinde simge, okunmuyor) · KGWT-551'de yağmur gecikmesi (metinde yalnız "Geciktirme" tuşu var, tarif yok) · fiyat (#46).
# Alıntı denetim tablosu: kiwi-dijital-sulama-zamanlayici.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alkalin piller (550: 2 x AA, 551: 2 x AAA)", "PTFE bant ya da adaptör (gerekirse)", "Yumuşak bez"]
steps:
  - "Filtreyi ve contayı hortum musluğu bağlantısına yerleştirip zamanlayıcıyı dik konumda musluğa, hortumu su çıkışına tak."
  - "Arka kapaktaki pil bölmesini açıp alkalin pilleri artı eksi işaretine göre yerleştir."
  - "Şimdiki saati ayarla: 550'de SETUP/OK ve artı eksi tuşları, 551'de kadran SET CLOCK."
  - "İlk sulamanın başlangıç saatini ayarla."
  - "Sulama süresini seç: 550'de saniye ile 300 dakika, 551'de 1 ile 240 dakika arası."
  - "Sulama sıklığını seç: saat ya da gün olarak, en çok 15 gün."
  - "Musluğu açık bırak; gerekirse manuel sulama, yağmur gecikmesi ya da OFF ile programı yönet."
faq:
  - q: "Kiwi sulama zamanlayıcı ayarlanan saatte su vermiyor, neye bakayım?"
    a: "İki kılavuzun sorun giderme bölümü şunları kontrol etmeni istiyor: geçerli saat doğru mu, başlangıç zamanı doğru mu, yağmur gecikmesi açık mı (açıksa kapat), ürün KAPALI durumda mı, pil bitmiş mi, musluk açık mı. Zamanlayıcının kendisi basınç oluşturmaz, musluk suyunun basıncını kullanır."
  - q: "Pil taktım ama ekranda hiçbir şey yok."
    a: "Kılavuza göre pillerin yeni alkalin pil olduğunu (550'de AA, 551'de AAA, 1,5V), artı eksi işaretine göre takıldığını ve ekranın uyku modunda olup olmadığını kontrol et. KGWT-550'de 30 saniye tuşa basılmazsa ekran kapanır; herhangi bir tuşa basınca yeniden aydınlanır."
  - q: "Musluk bağlantısından su kaçırıyor."
    a: "Sızdırmazlık halkasının doğru takıldığını, bağlantının, çıkışın ya da su borusunun kırık olmadığını ve musluğun zamanlayıcıyla uyumlu dişe sahip olduğunu kontrol et. Gerekirse uygun bir adaptör ya da PTFE bant kullan."
  - q: "Pil değiştirince program siliniyor mu?"
    a: "Kılavuz ürün kapatıldıktan sonra tüm programların fabrika varsayılan ayarlarına döndüğünü yazıyor. KGWT-551 kılavuzu da piller çok zayıflayınca cihazın OFF moduna geçtiğini, yeni pil takıp programı en kısa sürede yeniden ayarlamanı istiyor."
  - q: "Kışın musluğun üzerinde kalabilir mi?"
    a: "Kalmamalı. Donma beklenirken zamanlayıcıyı hortum musluğundan çıkar ve iç mekânda sakla. KGWT-551 kılavuzu pilleri çıkarmanı, içindeki suyu boşaltmanı ve kuru yerde saklamanı da yazıyor."
images:
  coverAlt: "Bahçe musluğuna takılmış, hortumu aşağıya inen dijital ekranlı sulama zamanlayıcısı"
  steps:
    - "Musluk bağlantısının içine yerleştirilmiş küçük metal filtre ve lastik conta"
    - "Zamanlayıcının arkasında açılmış pil bölmesi ve yanında kalem piller"
    - "Zamanlayıcının LCD ekranında saat göstergesi, yakın plan"
    - "Zamanlayıcının ön yüzündeki ayar kadranı"
    - "Ekrandaki süre göstergesi ve yanındaki ayar tuşları"
    - "Zamanlayıcıya bağlı hortumdan çimlere düşen su"
    - "Kışa doğru musluktan çıkarılmış ve kuru rafa konmuş zamanlayıcı"
---

Kiwi Garden'ın dijital sulama zamanlayıcısı musluk ile hortum arasına takılıyor ve bahçeni senin yerine belirli saatte, belirli süre, belirli aralıkla suluyor. İki model var: KGWT-550 tuşlarla, KGWT-551 ise ön yüzdeki kadranla ayarlanıyor. Kiwi'nin iki Türkçe kılavuzu kurulumu, programlamayı ve sorun gidermeyi anlatıyor. En sık atlanan noktayı da şöyle hatırlatıyor: **"Ürünün kendisi basınç oluşturmaz, ancak musluk suyunun basıncı kullanılır."** Yani musluk kapalıysa program ne kadar doğru kurulsa da su çıkmaz. Bu yazıdaki adımlar KGWT-550 ve KGWT-551 kılavuzlarından.

> ⚡ **Kısa özet:** Filtreyi ve contayı musluk bağlantısına yerleştir, zamanlayıcıyı dik konumda musluğa, hortumu çıkışa tak. Pilleri artı eksi yönüne göre tak. Sırayla saat, ilk sulama saati, süre ve sıklık ayarla. Musluğu açık bırak. Su çıkmıyorsa saat, başlangıç zamanı, yağmur gecikmesi, OFF durumu, pil ve musluk sırasıyla kontrol et. Donma öncesi zamanlayıcıyı söküp içeride sakla.

## İki model ve kılavuzdaki değerler

| | KGWT-550 | KGWT-551 |
|---|---|---|
| Pil | 2 x AA 1.5V alkalin | 2 x AAA 1.5V alkalin |
| Sulama süresi | 1 sn – 300 dk | 1 sn – 240 dk |
| Sulama sıklığı | 1 saat – 15 gün | 1 saat – 15 gün / 1–23 saat |
| Su basıncı | 0,05 – 0,8 MPA | 0,05 – 0,8 MPA |
| Ayar | SETUP/OK, +/–, MANUAL, RAIN DELAY, ESC/OFF tuşları | Kadran (SET CLOCK, START TIME, HOW LONG, HOW OFTEN, ON, OFF) ve –, +, OK tuşları |
| Koruma | IPX5 | IPX5, çalışma sıcaklığı 3–45°C |

KGWT-551'in bağlantıları 3/4 dişli; hortum bağlantısının içinde dahili filtre ve sızdırmazlık halkası var.

## Adım adım: kurulum ve programlama

**1. Musluğa tak.** Filtreyi ve lastik contayı hortum musluğu bağlantısına yerleştir; KGWT-550 kılavuzu sonuna kadar bastırmanı istiyor. Zamanlayıcıyı musluğa, su çıkışını hortuma bağla. Dişler uymazsa adaptör ya da PTFE bant kullan. Kılavuz ürünün yalnız dış mekân için olduğunu, yatay ya da ters kurulumun yasak olduğunu yazıyor.

**2. Pilleri tak.** Ürünün arkasındaki pil bölmesini aç ve alkalin pilleri artı eksi işaretlerine göre yerleştir. Pil takılınca cihaz kendiliğinden açılır. KGWT-550 varsayılan sulama programıyla çalışmaya başlar. Pil değiştirirken bölmenin kuru olmasına dikkat et.

**3. Saati ayarla.** KGWT-550'de SETUP/OK tuşuna bas; ilgili sütundaki sayı yanıp söner. +/– ile değeri ayarla, kaydedip sonraki ayara geçmek için yine SETUP/OK'a bas. Saat 24 saat sisteminde. KGWT-551'de kadranı SET CLOCK'a çevir, +/– ile saati ve dakikayı ayarla (AM/PM dahil), OK ile onayla.

**4. Başlangıç saatini ayarla.** İlk sulamanın başlayacağı saati gir; 550'de bu BAŞLANGIÇ ZAMANI, 551'de kadranın START TIME konumu. KGWT-550 kılavuzuna göre döngü programı başlangıç zamanından sonra çalışmaya başlar.

**5. Süreyi seç.** KGWT-550'de sulama süresi 1 saniyeden 59 saniyeye, sonra 1 dakikadan 300 dakikaya kadar seçilir. KGWT-551'de kadranı HOW LONG'a çevir ve 1–240 dakika arasında bir süre belirle.

**6. Sıklığı seç.** KGWT-550'de 1–23 saat ya da 1–15 gün arası seç. KGWT-551'de kadranı HOW OFTEN'a çevir, aynı aralıktan seç. Ekrandaki otomatik hatırlatma bir sonraki sulamaya ne kadar kaldığını gösterir. 551'de programı çalıştırmak için kadranı ON'a getir.

**7. Programı yönet.** Musluğu açık bırak. Elle sulamak için KGWT-550'de MANUAL tuşuna bas, +/– ile süreyi seç ve onayla; ürün hemen sular, bitince otomatik program kaldığı yerden sürer. Aynı tuşa yeniden basınca manuel sulama iptal olur. KGWT-551'de ON konumundayken OK'a bas, durdurmak için yine OK'a bas. Yağmurlu günde 550'de RAIN DELAY sulamayı bir süre erteler, yeniden basınca iptal olur. 550'de ESC/OFF'a 3 saniye basılı tutunca tüm çıkışlar kapanır ve ekranda KAPALI yazar; 3 saniye daha basılı tutunca normal moda döner. 551'de kadranın OFF konumu programı ve tüm fonksiyonları kapatır.

## Pil, filtre ve kış

- Pil simgesi yanıp sönünce pilleri zamanında değiştir. KGWT-551 kılavuzu piller çok zayıflayınca cihazın OFF moduna geçtiğini, zamanlayıcının suyu açamadığını yazıyor.
- Ürün kapatıldıktan sonra tüm programlar fabrika ayarına döner; pil değişiminden sonra programı kontrol et.
- Uzun süre kullanmayacaksan pilleri çıkar; akan pil ürüne zarar verebilir.
- Filtre kir parçacıklarını tutar. Düzenli temizle, aşınmışsa değiştir.
- Gövdeyi az suyla ya da yumuşak bezle nazikçe sil. Alkol, tiner, benzin ya da amonyak kullanma; LCD ekrana ve kasaya zarar verir.
- Ürünü suya batırma, yağmurdan, yoğun tozdan ve doğrudan güneşten koru.
- Donma beklenirken zamanlayıcıyı musluktan çıkar ve içeride sakla. KGWT-551 kılavuzu pilleri çıkarmanı ve içindeki suyu boşaltmanı da istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Ekran boş | Senin: yeni alkalin pil, doğru yön, uyku modu |
| Ayarlı saatte su yok | Senin: saat, başlangıç, yağmur gecikmesi, OFF, pil, musluk |
| Bağlantıdan kaçak | Senin: conta, kırık parça, diş uyumu, adaptör ya da PTFE bant |
| Gövde kırık, cihaz arızalı | Kullanma; yetkili servis |

⛔ Kılavuz ürünü demonte etmemeni ve iç yapısını değiştirmeye çalışmamanı yazıyor; gövdeyi açma.

---

**Kaynak künyesi.** Teknik değerler, kurulum, tuş ve kadran işlevleri, manuel sulama, sorun giderme ve bakım talimatları Kiwi Garden'ın Türkçe KGWT-550 ve KGWT-551 Dijital Sulama Zamanlayıcı kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
