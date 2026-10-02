---
title: "Uğur buzdolabı sürekli çalışıyor"
description: "Uğur buzdolabının motoru durmuyorsa Uğur'un tablosu: termostatı önerilen konuma al, kapıyı az aç, sıcak yemeği soğut, aşırı yükleme; yazın bu normal."
slug: "ugur-buzdolabi-surekli-calisiyor"
date: "2026-10-02"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, ek-1051). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Uğur'un KENDİ alan adından (ugur.com.tr) indirildi,
#   hepsi HTTP 200, yönlendirme 0 (ürün sayfası bağlantısı ugur.tsoftstatic.com'u gösteriyor; kaynak olarak YALNIZ ugur.com.tr adresi kullanıldı).
#   Web araması KULLANILMADI. Sayfa = PDF sayfası.
#  B1) UES 90 DTK / UES 91 DTK R65 (tek kapılı, küçük)       https://ugur.com.tr/Data/EditorFiles/docs/T1299_KK.pdf  24 s.  md5 133dbab03493de0abccd7a5aac38187f
#  B2) UES 304 D2K R65 (çift kapılı)                        https://ugur.com.tr/Data/EditorFiles/docs/100996_KK.pdf  36 s.  md5 539181e0691fe7b200b44c81d62d4a63
#  B3) UES 470 / 540 D2K NF (NFI, SİYAH) DGT R65             https://ugur.com.tr/Data/EditorFiles/docs/100962_KK.pdf  28 s.  md5 7ddefc645a5b61dce97856fca7ebfc01
# Tablo "Kompresör sürekli çalışıyor." (B1 s.13 · B2 s.20 · B3 s.18): "Ortam sıcaklığı yüksek olabilir." / "Ortam sıcaklığının daha yüksek olduğu yaz aylarında cihazınızın
#   daha uzun çalışması normaldir." · "Cihazınıza aşırı miktarda gıda yüklenmiş olabilir." / "Cihazınızın yükleme kapasitesine dikkat ediniz." · "Cihazınıza hava girişi fazla
#   olabilir." / "Cihazınızın kapısını sık sık açmayınız, kapısını açık bırakmayınız." · "Cihazın içerisinde sıcak gıdalar olabilir." / "Sıcak yiyecekleri oda sıcaklığında
#   soğuyana kadar buzdolabına koymayınız." · ayar satırı: B1 "Cihazınız 7 konumunda çalışıyor olabilir." / "Termostat konumunu 3'e ayarlayınız." · B2 "Cihazınızın termostatı
#   “7” konumunda olabilir." / "Termostat butonunu çevirerek cihazı “4” konumunda çalıştırabilirsiniz." · B3 "Cihazınızın sıcaklık ayarı "2" konumunda olabilir." / "Sıcaklığı "5"
#   olarak ayarlayabilirsiniz."
# Ayar ölçeği: B1 s.9 "Termostat ayarı 7 olduğunda en yüksek soğutma performansı sağlanır. Tavsiye edilen sıcaklık ayarı 3 ile 4 arasındadır." / "yaz aylarında 3 ile 4, kış aylarında
#   ise 2 ile 3" · B2 s.12 "“1” ayarı : En yüksek sıcaklık" / "“7” ayarı : En düşük sıcaklık" / "Tavsiye edilen sıcaklık konumu 4 'dür." / "yaz aylarında 2 ile 4, kış aylarında ise
#   4 ile 6" · B3 s.10 ""8" ayarı : En yüksek sıcaklık" / ""2" ayarı : En düşük sıcaklık" / "Yüksek ortam sıcaklıklarında (örneğin sıcak yaz günlerinde), sıcaklığın "2" olarak
#   ayarlanması gerekebilir. Bu ayar, dolap içinde düşük sıcaklığı muhafaza etmek için kompresörün devamlı çalışmasına sebep olabilir."
# Etkenler: B1 s.9 "Cihazın iç sıcaklığı aşağıdakilerden etkilenecektir: • Ortam sıcaklığı • Kapının açılıp kapanma sıklığı • Cihazın doluluk oranı • Cihazın konumu"
# Yerleşim: B1 s.6 · B2 s.9 · B3 s.8 ısı kaynaklarından ve hava akımından "en az 1 metre" uzak (B2/B3: "doğrudan güneş ışığı almayacak, rutubetsiz bir yere") · B1 s.6 "hava
#   delikleri ile duvar arasında en az 5 cm boşluk" · ilk çalıştırma: B1 s.9 / B2 s.12 "soğuması için 6 saat bekleyiniz" · B3 s.10 "2-3 saat bekleyiniz"
# BİLEREK YAZILMAYANLAR: kompresör/termostat/gaz arızası teşhisi · B3'ün mesafe çizimi ("duvara yaslanma mesafesi 75 mm'den fazla olmamalıdır" + çizimdeki >100 mm; okuru
#   karıştırmamak için yalnız 1 metre kuralı yazıldı) · kondenser temizliği (bu belgelerde kullanıcıya verilmiyor) · elektrik tüketimi/fatura · fiyat (#46).
# Alıntı denetim tablosu: ugur-buzdolabi-surekli-calisiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika (sonrasında birkaç saat gözlem)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Termostat ya da sıcaklık ayarının en soğuk konumda kalıp kalmadığına bak; kılavuzunun önerdiği konuma al."
  - "Kapıyı sık sık açma ve açık bırakma; kapının tam kapandığından emin ol."
  - "Sıcak yemeği oda sıcaklığına soğumadan dolaba koyma."
  - "Dolabın yükleme kapasitesine dikkat et; aşırı gıda yükleme."
  - "Buzdolabını ısı kaynaklarından ve hava akımı olan yerlerden en az 1 metre uzakta, güneş almayan bir yerde tut."
  - "Yeni çalıştırdıysan kılavuzdaki soğuma süresini bekle, bu sürede kapıyı gerekmedikçe açma."
  - "Yaz aylarında ve sıcak ortamda daha uzun çalışmayı hesaba kat; ayarı mevsime göre kılavuzdaki aralığa getir."
faq:
  - q: "Uğur buzdolabının motoru neden hiç durmuyor?"
    a: "Uğur'un buzdolabı kılavuzlarındaki 'Kompresör sürekli çalışıyor' satırının karşısında beş neden var: ortam sıcaklığının yüksek olması, cihaza aşırı miktarda gıda yüklenmesi, kapının sık açılması ya da açık kalması yüzünden fazla hava girmesi, içeride sıcak gıda olması ve termostatın en soğuk konumda bırakılması. Kılavuz yaz aylarında daha uzun çalışmanın normal olduğunu yazıyor."
  - q: "Termostatta hangi rakam en soğuk?"
    a: "Uğur modelleri arasında fark var. UES 90 / 91 DTK ve UES 304 D2K'de 7 en soğuk konum; Uğur ilkinde 3'ü, ikincisinde 4'ü öneriyor. UES 470 / 540 D2K NF DGT'de ölçek ters: 8 en yüksek, 2 en düşük sıcaklık; tablo 2'de bırakılan ayarın 5'e alınmasını öneriyor. Kendi modelinin kılavuzundaki ölçeğe bak."
  - q: "Yazın buzdolabı daha çok çalışıyor, sorun mu?"
    a: "Uğur'un tablosuna göre ortam sıcaklığının daha yüksek olduğu yaz aylarında cihazın daha uzun çalışması normaldir. UES 470 / 540 NF kılavuzu ayrıca sıcak yaz günlerinde ayarın 2'ye alınması gerekebileceğini ve bu ayarın, dolabın içinde düşük sıcaklığı korumak için kompresörün devamlı çalışmasına sebep olabileceğini yazıyor."
  - q: "Yeni aldığım buzdolabı ilk gün hiç durmadı, normal mi?"
    a: "Uğur'un kılavuzları ilk çalıştırmada gıda koymadan önce bir soğuma süresi veriyor: UES 90 / 91 DTK ve UES 304 D2K için 6 saat, UES 470 / 540 NF DGT için 2-3 saat; bu sürede kapı gerekmedikçe açılmıyor."
images:
  coverAlt: "Mutfakta ocaktan ve pencereden uzakta duran çift kapılı beyaz bir buzdolabı ve kapağı kapalı, tezgâhta soğumayı bekleyen bir tencere"
---

Buzdolabının motoru saatlerdir susmuyor; uğultu hiç kesilmiyor. Uğur'un buzdolabı kılavuzlarında bu durum için ayrı bir satır var: **"Kompresör sürekli çalışıyor."** Tablonun karşısına yazdığı nedenlerin hepsi kullanıcının kontrol edebileceği şeyler: termostat ayarı, kapı, sıcak yemek, yük ve ortam sıcaklığı. İlk satır da önemli bir rahatlatma içeriyor: **yaz aylarında cihazın daha uzun çalışması normaldir.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Termostat en soğukta mı bak, önerilen konuma al → kapıyı az aç, açık bırakma → sıcak yemeği soğutup koy → aşırı yükleme → dolabı ısı kaynağından ve hava akımından en az 1 metre uzak tut → yeni kurulduysa soğuma süresini bekle → yazın uzun çalışmayı hesaba kat.

## Adım adım: evde denenecekler

**1. Termostatı önerilen konuma al.** Uğur'un tablosunda bir satır doğrudan ayarla ilgili: termostat en soğuk konumda bırakıldıysa kompresör durmadan çalışabilir. Ölçek modele göre değişiyor: UES 90 / 91 DTK'de **7** en yüksek soğutma; tablo **3'e** almanı istiyor. UES 304 D2K'de de **7** en düşük sıcaklık; tablo **4'te** çalıştırmanı öneriyor (dolabın içindeki termostat düğmesiyle). UES 470 / 540 D2K NF DGT'de ölçek ters: **"2" en düşük, "8" en yüksek** sıcaklık; tablo **5'e** almanı öneriyor.

**2. Kapıyı az aç.** Tablodaki neden **"Cihazınıza hava girişi fazla olabilir."**, çözüm **kapıyı sık sık açmamak ve açık bırakmamak.** Uğur'un kullanım bölümü de soğuk havanın dışarı kaçmasını önlemek için kapıyı **fazla açıp kapamamaya** özen göstermeni istiyor.

**3. Sıcak yemeği soğut.** Tablodaki dördüncü neden **"Cihazın içerisinde sıcak gıdalar olabilir."** Çözüm: **sıcak yiyecekleri oda sıcaklığında soğuyana kadar buzdolabına koyma.** Kullanım bölümündeki kural aynı: pişmiş gıdaları dolaba koymadan önce **daima soğumalarını bekle.**

**4. Aşırı yükleme.** Tablodaki neden **"Cihazınıza aşırı miktarda gıda yüklenmiş olabilir."**, çözüm **"Cihazınızın yükleme kapasitesine dikkat ediniz."** Uğur'un kılavuzu cihazın iç sıcaklığını etkileyen etkenler arasında **doluluk oranını** da sayıyor.

**5. Yerini kontrol et.** Uğur'un aynı listesinde **ortam sıcaklığı** ve **cihazın konumu** da var. Kurulum bölümü üç kılavuzda da aynı mesafeyi veriyor: buzdolabı fırın, ocak, soba, kalorifer gibi **ısı kaynaklarından** ve klima ağzı, vantilatör altı, kapı ya da pencere ağzı gibi **hava akımı olan yerlerden en az 1 metre** uzakta olmalı; UES 304 D2K ve UES 470 / 540 kılavuzlarına göre **doğrudan güneş ışığı almayan, rutubetsiz** bir yerde durmalı. UES 90 / 91 DTK'de hava delikleri ile duvar arasında **en az 5 cm** boşluk isteniyor.

**6. İlk çalıştırmada bekle.** Buzdolabı yeni kurulduysa Uğur gıda koymadan önce bir soğuma süresi veriyor: UES 90 / 91 DTK ve UES 304 D2K için **6 saat**, UES 470 / 540 NF DGT için **2-3 saat.** Bu sürede kapıyı **gerekmedikçe açma.**

**7. Mevsimi hesaba kat.** Tablonun ilk satırı **"Ortam sıcaklığı yüksek olabilir."**; Uğur'un cevabı: ortam sıcaklığının daha yüksek olduğu **yaz aylarında cihazın daha uzun çalışması normaldir.** Kılavuzlar ayarı mevsime göre de veriyor: UES 90 / 91 DTK'de **yazın 3-4, kışın 2-3**; UES 304 D2K'de **yazın 2-4, kışın 4-6.** UES 470 / 540 NF kılavuzuna göre sıcak yaz günlerinde ayarın **"2"ye** alınması gerekebilir ve bu ayar, dolabın içindeki düşük sıcaklığı korumak için **kompresörün devamlı çalışmasına** sebep olabilir.

## Hangi model hangi ölçekte?

| Model (Uğur kılavuzu) | En soğuk konum | Tablonun önerisi |
|---|---|---|
| UES 90 / 91 DTK | 7 | 3 |
| UES 304 D2K | 7 | 4 |
| UES 470 / 540 D2K NF DGT | 2 | 5 |

Modelin bu üçünden biri değilse ölçeği kendi kılavuzundan kontrol et; Uğur'un kılavuzları ayar aralığını model bazında veriyor.

Markadan bağımsız anlatım için [buzdolabı soğutmuyor: nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) ve dolap fazla soğutuyorsa [buzdolabı çok soğutuyor](/blog/buzdolabi-cok-sogutuyor/) yazılarına bakabilirsin. Motor hiç çalışmıyorsa: [buzdolabı motoru çalışmıyor](/blog/buzdolabi-motoru-calismiyor/).

## Ne zaman servis

- Ayar, kapı, yük ve yer düzeltildiği hâlde kompresör serin mevsimde de durmuyorsa Uğur'un genel kuralı geçerli: bu öneriler sorunu çözmüyorsa **444 84 87** numaralı çağrı merkezine ya da yetkili servise başvur.
- UES 470 / 540 NF DGT ekranında **E1, E5, E6 ya da E7** görünüyorsa kılavuz yetkili servisle görüşülmesini istiyor (E1 soğutucu sıcaklık sensörü, E5 dondurucu defrost sensörü, E6 iletişim hatası, E7 ortam sıcaklığı sensörü). Kılavuza göre bu uyarılarla dolabın soğuk saklama işlevi sürse de servis gerekir.
- **Elektrik kablosu hasarlıysa:** Uğur'un tablosu derhal sigortayı kapatıp fişi çekmeni ve kablo değişimi için yetkili servisle görüşmeni istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Ayar, kapı, yük ve yerleşim kullanıcıya; kompresör, sensörler ve soğutma sistemi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (etiketteki UES kodu) ve termostat şu an hangi konumda?
2. Kompresör ne kadar süredir durmadan çalışıyor; mevsim ve oda sıcaklığı ne?
3. Kapı tam kapanıyor mu, son saatlerde çok açıldı mı?
4. Dolaba yakın zamanda sıcak yemek ya da çok miktarda gıda kondu mu?
5. Ekranda E ile başlayan bir kod var mı?

Bu beşine cevabın varsa servise "motor durmuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
