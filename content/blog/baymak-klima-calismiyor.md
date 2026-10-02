---
title: "Baymak klima çalışmıyor: evde kontrol"
description: "Baymak klima açılmıyor ya da kumandaya yanıt vermiyorsa kılavuzun listesi: fiş, TIMER-ON, 3 dakika, kumanda pili ve mesafesi, DISPLAY ve servis sınırı."
slug: "baymak-klima-calismiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki 2. koşu, ek-1051, klima). Belge bu koşuda (10:55) curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200; md5 1 Eki ve sabah kopyalarıyla birebir. Baymak'ın kendi alan adı (baymak.com.tr).
# Web araması KULLANILMADI: adres yayındaki baymak-klima-sogutmuyor provenansından. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-ek1051/baymak-elegant-air.pdf · pdftotext -layout -f N -l N, PDF sayfası = basılı sayfa.
#  B1) Baymak "Montaj ve Kullanma Kılavuzu · Duvar Tipi Split Klima · Baymak Elegant Air 09/12/18/24" (300037670-Rev.03-04.01.2024), 40 s., md5 22a60cc0f0dbbd4bba127d632f8fac52
#      https://www.baymak.com.tr/media/6926/elegant-air-montaj-ve-kullanim-kilavuzu.pdf
#      s.30 "Sorun Giderme" ARIZA | OLASI NEDENLER · "Cihaz çalışmıyor" → "Güç arızası/fiş çekilmiş olabilir" / "İç/dış ünite fan motoru arızalı olabilir" / "Kompresörün termo-manyetik devre kesicisi şalteri arızalı olabilir." / "Koruma tertibatı veya sigortalar arızalı olabilir." / "Bağlantılar gevşek veya fiş çekilmiş olabilir." / "Bazen cihaz, korunma amaçlı olarak çalışmayı durdurur." / "Voltaj, voltaj aralığından daha yüksek veya daha düşük olabilir." / "TIMER-ON (Zamanlayıcı Açık) fonksiyonu aktif kalmış olabilir." / "Elektronik kontrol kartı hasarı oluşmuş olabilir."
#      s.30 "Cihaz komutlara yanıt vermiyor" → "Uzaktan kumanda iç üniteye yeteri kadar yakın olmayabilir." / "Uzaktan kumandanın pillerinin değiştirilmesi gerekebilir." / "İç ünitedeki uzaktan kumanda ile sinyal alıcısı arasında engeller olabilir." · "Ekran kapalı" → "DISPLAY fonksiyonu aktif olabilir." / "Güç (enerji) arızası olabilir."
#      s.30 "Aşağıdaki durumlarda klimayı derhal kapatın ve elektrik bağlantısını kesin." → "Çalışma sırasında garip ses duyulması durumunda" / "Elektronik kontrol kartında arıza olması durumunda" / "Sigorta ya da anahtarlarda arıza varsa" / "Cihazın içerisine su sıçraması veya cisim girmesi durumlarında" / "Kablo ya da fişlerin aşırı ısınması durumlarında" / "Cihazdan çok güçlü koku gelmesi durumunda"
#      s.31 "EKRANDAKİ HATA KODU Hata durumunda iç ünite ekranında aşağıdaki hata kodları gösterilir" (kod simgeleri görsel; metin olarak okunmuyor)
#      s.15 "Klimayı belirtilen sıcaklık aralığının dışında kullanmaya çalışmak, klima koruma cihazının etkinleşmesine ve klimanın çalışmamasına neden olabilir." / tablo (Inverter): Isıtma oda 0~27°C, dış -15~24°C (düşük sıcaklıkta ısıtma -20~24°C); Soğutma/Nem alma oda 17~32°C, dış T1 15~50°C (düşük sıcaklıkta soğutma -15~50°C), T3 15~55°C / "Güç kaynağı bağlıyken, klimayı kapattıktan sonra yeniden başlattığınızda veya çalışma sırasında başka bir moda aldığınızda, klima koruma cihazı çalışacaktır. Kompresör 3 dakika sonra tekrar çalışmaya başlayacaktır." / "Acil durum butonu: Uzaktan kumanda arızalandığında paneli açın ve elektronik kontrol kutusu üzerindeki acil durum butonunu bulun. (Acil durum butonuna basarken daima yalıtkan malzeme kullanın.)"
#      s.11 "Uzaktan kumandanın arka tarafındaki pil kapağını ok yönünde kaydırarak çıkarın. Pilleri Uzaktan Kumanda üzerinde gösterilen (+ ve -) yönüne göre takın. Pil kapağını kaydırarak yerine takın." / "2 adet LRO3 AAA (1,5V) pil kullanın." / "Şarj edilebilir pil kullanmayınız." / "Ekran okunamaz hale geldiğinde eski pilleri aynı tipteki yeni pillerle değiştirin." / "1. Uzaktan kumandayı klimaya doğru tutun. 2. Uzaktan kumanda ile iç ünitedeki Sinyal alıcısı arasında herhangi bir nesnenin olmadığından emin olun. 3. Uzaktan kumandayı asla güneş ışınlarına maruz bırakmayın. 4. Uzaktan kumandayı televizyon veya diğer elektrikli cihazlardan en az 1 metre uzakta tutun."
#      s.13 "TIMER (Zamanlayıcı) fonksiyonu - TIMER AÇIK Cihazı otomatik olarak açmak için." / "İPTAL etmek için TIMER butonuna basın."
#      s.14 "DISPLAY fonksiyonu (İç ekran) İç ünite panelindeki LED ekranını AÇIN/KAPATIN. Paneldeki LED göstergeyi kapatmak için DISPLAY butonuna basın. LED ekranı açmak için tekrar basın."
#      s.12 "Çocuk Kilidi fonksiyonu 1. Bu fonksiyonu aktif hale getirmek için MODE ve TIMER butonlarına aynı anda uzun süre basın, aynı işlemi tekrarlayarak fonksiyonu devre dışı bırakın. 2. Bu fonksiyonda herhangi bir buton tek başına aktif olmayacaktır."
#      s.29 "Klima uzun süre kullanılmadığında aşağıdaki işlemleri yapın: Uzaktan kumandanın pillerini çıkarın ve klimanın elektrik bağlantısını kesin." / "Klima uzun süre kapalı kaldıktan sonra tekrar kullanılmaya başladığında: ... Uzaktan kumandanın pillerini takın ve elektriğin açık olup olmadığını kontrol edin."
# YAKIN KOPYA: aynı markanın yayındaki baymak-klima-sogutmuyor sayfası başka satırı ("Sıcak veya soğuk, yetersiz hava akışı") kullanıyor; bu taslak "Cihaz çalışmıyor", "Cihaz komutlara yanıt vermiyor" ve "Ekran kapalı" satırlarından. Ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: acil durum butonu adım olarak (panel açma + yalıtkan malzeme → ALET KURALI ve #31; gövdede numarasız anıldı) · gevşek bağlantı, termo-manyetik şalter, koruma tertibatı, fan motoru, kart (servis) · voltaj için kullanıcı eylemi (kılavuz eylem vermiyor) · hata kodu anlamları (simgeler görsel) · fiyat.
# Alıntı denetim tablosu: baymak-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "2 adet LR03 AAA 1,5 V pil"]
steps:
  - "Evde elektrik olduğuna ve klimanın fişinin prize takılı olduğuna bak."
  - "Kumandada TIMER-ON kuruluysa TIMER butonuna basarak iptal et."
  - "Klimayı kapatıp yeniden başlattıysan ya da mod değiştirdiysen 3 dakika bekle."
  - "Kumanda ekranı okunamıyorsa pil kapağını kaydırıp 2 adet LR03 AAA 1,5 V pili artı-eksi yönüne göre yenileriyle değiştir."
  - "Kumandayı iç üniteye yaklaştırıp sinyal alıcısına doğru tut; arada nesne bırakma, kumandayı televizyon ve diğer elektrikli cihazlardan en az 1 metre uzak tut."
  - "Klima çalışıyor ama iç ünitenin ekranı kapalıysa kumandadaki DISPLAY butonuna bas."
  - "Sorun sürerse ya da ekranda hata kodu varsa klimayı kapatıp elektrik bağlantısını kes ve Baymak yetkili servisine başvur."
faq:
  - q: "Baymak klima neden çalışmaz?"
    a: "Baymak kılavuzunun sorun giderme tablosu 'Cihaz çalışmıyor' satırında dokuz olası neden sayıyor. Evde kontrol edilebilenler: güç arızası ya da fişin çekilmiş olması, cihazın korunma amaçlı durması ve TIMER-ON fonksiyonunun aktif kalması. Fan motoru, kompresörün devre kesici şalteri, koruma tertibatı ya da sigortalar, gevşek bağlantılar, voltaj ve elektronik kontrol kartı servisin bakacağı nedenler."
  - q: "Klima açılıyor ama kumandaya tepki vermiyor. Ne yapmalıyım?"
    a: "Tablonun 'Cihaz komutlara yanıt vermiyor' satırı üç neden veriyor: kumanda iç üniteye yeterince yakın değil, pillerin değiştirilmesi gerekiyor ya da kumanda ile iç ünitedeki sinyal alıcısı arasında engel var. Kılavuz kumandayı güneş ışığına bırakmamanı ve televizyon gibi elektrikli cihazlardan en az 1 metre uzakta tutmanı da istiyor."
  - q: "Klima çalışıyor ama iç ünitenin ekranı karanlık. Arıza mı?"
    a: "Olmayabilir. Baymak kılavuzu 'Ekran kapalı' satırında ilk neden olarak DISPLAY fonksiyonunun aktif olabileceğini yazıyor; DISPLAY butonu iç ünitedeki LED ekranı kapatıp açar. Klima hiç çalışmıyorsa ve ekran da kapalıysa ikinci neden güç arızasıdır."
  - q: "Kumandanın tuşları hiçbir şey yapmıyor, ekran yanıyor. Neden?"
    a: "Çocuk kilidi açık olabilir. Baymak kılavuzuna göre bu fonksiyonda hiçbir buton tek başına çalışmaz; MODE ve TIMER butonlarına aynı anda uzun süre basınca açılır, aynı işlem tekrarlanınca kapanır."
  - q: "Klima kışın kapalı kaldı, yazın açılmıyor. Neye bakmalıyım?"
    a: "Baymak kılavuzu klima uzun süre kullanılmayacaksa kumandanın pillerinin çıkarılmasını ve elektrik bağlantısının kesilmesini istiyor. Yeniden kullanmaya başlarken pilleri takmanı ve elektriğin açık olup olmadığını kontrol etmeni öneriyor; aynı listede ünitenin ve filtrenin temizlenmesi, hava giriş-çıkışlarının ve drenaj borusunun kontrolü de var."
images:
  coverAlt: "Gün ışığı alan bir salonda koltuk kolçağında duran klima kumandası ve yeni pil paketi, arkada duvarda ekranı karanlık beyaz split klima"
---

Kumandayla klimayı açmaya çalışıyorsun ama iç üniteden ne ses geliyor ne hava. Baymak'ın Elegant Air montaj ve kullanma kılavuzu bu belirtiyi sorun giderme tablosunda **"Cihaz çalışmıyor"** satırıyla veriyor ve dokuz olası neden sayıyor. Bunlardan üçü evde kontrol edilebilir: **"Güç arızası/fiş çekilmiş olabilir"**, **"Bazen cihaz, korunma amaçlı olarak çalışmayı durdurur."** ve **"TIMER-ON (Zamanlayıcı Açık) fonksiyonu aktif kalmış olabilir."** Aynı tablodaki "Cihaz komutlara yanıt vermiyor" ve "Ekran kapalı" satırları da bu belirtiye karışıyor. Bu yazıda üçünü birlikte, Baymak'ın sırasıyla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Elektrik var mı, fiş takılı mı? Kumandada TIMER-ON açık kalmış mı? Klimayı kapatıp açtıysan 3 dakika bekle. Kumanda ekranı okunmuyorsa iki AAA pil tak; kumandayı yaklaştır, arada engel bırakma. Ekran kapalıysa DISPLAY'e bas. Sürerse ya da hata kodu varsa → Baymak yetkili servisi.

## Baymak'ın üç satırı

| Tablodaki satır | Senin kontrol edebileceğin | Servisin işi |
|---|---|---|
| Cihaz çalışmıyor | Güç arızası ya da çekilmiş fiş, korunma amaçlı durma, açık kalmış TIMER-ON | Fan motoru, kompresörün termo-manyetik devre kesici şalteri, koruma tertibatı ya da sigortalar, gevşek bağlantılar, voltaj, elektronik kontrol kartı |
| Cihaz komutlara yanıt vermiyor | Kumandanın uzaklığı, pilleri, alıcıyla arasındaki engel | — |
| Ekran kapalı | DISPLAY fonksiyonu | Güç arızası sürüyorsa |

Kılavuzun çalıştırma bölümü iki koruma durumunu daha açıklıyor: klimayı kapatıp yeniden başlattığında ya da çalışırken mod değiştirdiğinde **kompresör 3 dakika sonra** yeniden çalışır. Klima, kılavuzdaki sıcaklık aralığının dışında kullanılırsa koruma cihazı etkinleşebilir ve klima çalışmayabilir; Elegant Air'in inverter tablosunda ısıtma için oda sıcaklığı 0-27°C, soğutma ve nem alma için 17-32°C aralığı veriliyor.

## Adım adım: evde denenecekler

**1. Elektrik ve fiş.** Evde elektrik olduğuna ve klimanın fişinin prize takılı olduğuna bak. Tablo hem "Güç arızası/fiş çekilmiş olabilir" hem de "Bağlantılar gevşek veya fiş çekilmiş olabilir" diyor; gevşek bağlantıya kendin müdahale etme, bu servisin işi.

**2. TIMER-ON.** Kumandada TIMER-ON kuruluysa TIMER butonuna basarak iptal et. Baymak'ta TIMER AÇIK fonksiyonu, kapalı klimanın açılış zamanını ayarlamak için kullanılıyor; tablo aktif kalmış TIMER-ON'u çalışmamanın nedenleri arasında sayıyor.

**3. Üç dakika.** Klimayı kapatıp yeniden başlattıysan ya da mod değiştirdiysen 3 dakika bekle. Baymak'ın tablosu bunu "korunma amaçlı" durma olarak sayıyor.

**4. Kumanda pilleri.** Kumanda ekranı okunamıyorsa pil kapağını kaydırıp 2 adet LR03 AAA 1,5 V pili artı-eksi yönüne göre yenileriyle değiştir. Baymak şarj edilebilir pil kullanılmamasını ve eski pillerin aynı tipteki yeni pillerle değiştirilmesini istiyor.

**5. Mesafe ve engel.** Kumandayı iç üniteye yaklaştırıp sinyal alıcısına doğru tut; arada nesne bırakma, kumandayı televizyon ve diğer elektrikli cihazlardan en az 1 metre uzak tut. Kılavuz kumandanın güneş ışınlarına maruz bırakılmamasını da istiyor.

**6. Karanlık ekran.** Klima çalışıyor ama iç ünitenin ekranı kapalıysa kumandadaki DISPLAY butonuna bas. Bu buton iç ünitedeki LED ekranı kapatıp açıyor; ekranın karanlık olması tek başına klimanın çalışmadığı anlamına gelmiyor.

**7. Sürerse servis.** Sorun sürerse ya da ekranda hata kodu varsa klimayı kapatıp elektrik bağlantısını kes ve Baymak yetkili servisine başvur. Baymak'ın hata kodları iç ünite ekranında gösteriliyor; kodu ve klimanın modelini not et.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Fiş, TIMER-ON, 3 dakika bekleme, pil, kumanda mesafesi, DISPLAY | Senin, bu rehberdeki adımlar |
| Fan motoru, kompresör şalteri, koruma tertibatı ya da sigortalar, gevşek bağlantı, voltaj, kart | Baymak yetkili servisi |
| İç ünite ekranında hata kodu | Kodu not et, Baymak yetkili servisi |
| Garip ses, çok güçlü koku, kablo ya da fişte aşırı ısınma, cihaza su sıçraması ya da cisim girmesi, sigorta ya da anahtarlarda arıza | Klimayı hemen kapat, elektrik bağlantısını kes, servis |

⛔ Kılavuzda kumanda arızalandığında kullanılan bir acil durum butonu var, ama ona ulaşmak için iç ünitenin panelini açmak ve yalıtkan bir malzemeyle basmak gerekiyor. Bunu bu rehberde adım olarak vermiyoruz; kumanda çalışmıyorsa önce pil ve mesafeyi dene, olmazsa servise bırak.

Klima açılıyor ama odayı serinletmiyorsa [Baymak klima soğutmuyor](/blog/baymak-klima-sogutmuyor/) yazısına bak. Kışın ısıtmıyorsa [Baymak klima ısıtmıyor](/blog/baymak-klima-isitmiyor/) yazısı işine yarar. Markadan bağımsız anlatım [klima çalışmıyor](/blog/klima-calismiyor/) ve [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazılarında.

---

**Kaynak künyesi.** Sorun giderme tablosu, kumanda ve pil notları, TIMER, DISPLAY, çocuk kilidi, 3 dakikalık koruma ve çalışma sıcaklık aralıkları Baymak'ın baymak.com.tr'deki "Baymak Elegant Air 09/12/18/24 Montaj ve Kullanma Kılavuzu"ndan (Rev.03, 04.01.2024) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
