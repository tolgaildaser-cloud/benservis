---
title: "Haier çamaşır makinesi çalışmıyor"
description: "Haier çamaşır makinesi çalışmıyorsa Haier kılavuzundaki beş sebep: program başlamamış, kapak, makine kapalı, elektrik kesintisi ve çocuk kilidi."
slug: "haier-camasir-makinesi-calismiyor"
date: "2026-10-03"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası bu koşuda curl -sL -A "Mozilla/5.0" ile açıldı (HTTP 200): https://www.haier-europe.com/tr_TR/onden-yuklemeli-camasir-makineleri/31019076/hw90-b14939s8-s/  md5 14a35b60366ffc305527dc9845a45d04
#   Sayfadaki kılavuz bağlantısı (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2022/7/16577223/UM-HW80-90-100_B14939S8-HW80-90-100_B14939_TR  32 s.  md5 88af8065db36183897d4d7a6b8fa32bf
#   Yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-haier-sprint/haier-camasir-HW80-90-100_B14939S8-TR.pdf · Okuma pdftotext -layout, sayfa = PDF sayfası. Web araması yok; Haier blog yazıları kaynak değil.
# Ana satır (s.23, 9.3 Ekran kodu olmadan arıza giderme): "Çamaşır makinesi çalışmıyor." · "Program henüz başlamamış olabilir. → Programı kontrol ederek çalıştırın." · "Kapak düzgünce kapatılmamış olabilir. → Kapağı düzgünce kapatın."
#   · "Makine açılmamış olabilir. → Makineyi açın." · "Elektrik kesintisi. → Güç kaynağını kontrol edin." · "Çocuk kilidi devrede olabilir. → Çocuk kilidini devre dışı bırakın."
# Diğer: s.23 "Makine bir süreliğine duruyor." (hata kodu → ekran kodlarını kontrol edin · yük → azaltın veya ayarlayın · suda bekletme → iptal edip tekrar başlatın) · "Yıkama döngüsü bitmeden makine çalışmayı kesiyor." → güç ve su kaynağı
#   · s.10 3.7 Çocuk kilidi ("Gecikme" ve "Kırışıklık önleme" 3 saniye; kilidi açmak için iki düğmeye tekrar) · s.22 bilgi kodu "cLocI-" "Fonksiyon tuşları kapalıdır. Program değişikliği yapılamaz." · s.22 E2 "Kilitleme hatası" → "Kapağı düzgünce kapatın."
#   · s.14 6.4 "Kapağı dikkatli bir şekilde kapatın. Hiçbir çamaşırın sıkışmadığından emin olun." · s.24 9.4 elektrik kesintisi (program kaydedilir, güç gelince devam) · s.22-23 F3/F4/F7/FA/fC kodları "Satış sonrası hizmetler ile görüşün." · s.24 son uyarı.
# BİLEREK YAZILMAYANLAR: kart/motor/kapı kilidi teşhisi (belgede yok) · sigorta/priz müdahalesi · servis kapağı altındaki kolla kapı açma (s.24; servis kapağı aletle açılıyor, ALET KURALI) · fiyat.
# Alıntı denetim tablosu: haier-camasir-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Makinenin açık olduğunu kontrol et; kapalıysa makineyi aç."
  - "Prizde ve evde elektrik olduğunu kontrol et; kesinti varsa güç gelmesini bekle."
  - "Kapağı, arasına çamaşır sıkışmadığından emin olarak düzgünce kapat."
  - "Seçtiğin programı kontrol et ve programı başlat."
  - "Ekranda çocuk kilidi göstergesi yanıyorsa Gecikme ve Kırışıklık önleme düğmelerine birlikte dokunarak kilidi aç."
  - "Ekranda bir kod varsa kılavuzdaki kod tablosuyla karşılaştır; program suda bekletme aşamasındaysa programı iptal edip yeniden başlat."
faq:
  - q: "Haier çamaşır makinem neden hiç çalışmıyor?"
    a: "Haier HW80/90/100-B14939S8 kılavuzunun 'Çamaşır makinesi çalışmıyor' satırı beş sebep sayıyor: program henüz başlamamış, kapak düzgünce kapatılmamış, makine açılmamış, elektrik kesintisi ve devrede olan çocuk kilidi. Her birinin çözümü kullanıcıya bırakılmış: programı kontrol edip çalıştırmak, kapağı kapatmak, makineyi açmak, güç kaynağını kontrol etmek ve çocuk kilidini kapatmak."
  - q: "Düğmelere basıyorum ama hiçbir şey değişmiyor, neden?"
    a: "Kılavuzun bilgi kodları tablosunda 'cLocI-' görünümü 'Fonksiyon tuşları kapalıdır. Program değişikliği yapılamaz.' anlamına geliyor. Çocuk kilidi Gecikme ve Kırışıklık önleme düğmelerine aynı anda 3 saniye dokunarak açılıp kapanıyor; kilit devredeyken bir düğmeye basılırsa değişiklik devreye girmiyor."
  - q: "Elektrik kesilince program silinir mi?"
    a: "Haier'e göre hayır: elektrik kesintisinde mevcut program ve ayar kaydediliyor, güç kaynağı geri geldiğinde işlem devam ediyor. Kılavuz, kesinti nedeniyle duran bir programda kapağın mekanik nedenlerle açılamayacağını da yazıyor."
  - q: "Ekranda F4 ya da F7 yazıyor, ne yapmalıyım?"
    a: "Kılavuzun kod tablosunda F3 sıcaklık sensörü hatası, F4 ısıtma sorunu, F7 motor arızası, FA su seviye sensörü hatası ve fC0/fC1/FC2 anormal iletişim hatası olarak geçiyor; hepsinin çözümü 'Satış sonrası hizmetler ile görüşün.' Bu kodlarda evde denenecek adım yok."
images:
  coverAlt: "Önden yüklemeli beyaz bir çamaşır makinesinin kapalı kapağı ve üstteki kontrol panelinde yanmayan ekran"
---

Programı seçtin, düğmeye bastın ama makine hiç tepki vermiyor. Haier'in HW80/90/100-B14939S8 kullanım kılavuzundaki arıza giderme tablosunda bu durumun satırı açık: **"Çamaşır makinesi çalışmıyor."** Haier bu satırda beş sebep sayıyor ve beşinin de çözümü kullanıcının elinde: **program henüz başlamamış olabilir**, **kapak düzgünce kapatılmamış olabilir**, **makine açılmamış olabilir**, **elektrik kesintisi** ve **çocuk kilidi devrede olabilir.** Kılavuz, satış sonrası hizmetlerle görüşmeden önce **belirtilen tüm olasılıkları kontrol etmeni** istiyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Makine açık mı, elektrik var mı, kapak tam kapalı mı, program gerçekten başlatıldı mı, çocuk kilidi devrede mi? Ekranda kod varsa tabloya bak; F ile başlayan kodlar servis işidir.

## Adım adım: evde denenecekler

**1. Makinenin açık olduğunu kontrol et.** Haier'in tablosundaki sebeplerden biri: **makine açılmamış olabilir.** Çözüm tek cümle: **makineyi açın.** Ekran tamamen kararmışsa önce bunu dene.

**2. Elektriği kontrol et.** İkinci sebep **elektrik kesintisi**; Haier'in çözümü **güç kaynağını kontrol edin.** Kılavuzun ayrı bir satırı da program ortasında durmayı aynı yere bağlıyor: **yıkama döngüsü bitmeden makine çalışmayı kesiyorsa** sebep **su veya elektrik kesintisi** olabilir. Kesinti geçtiğinde endişelenme: Haier'e göre **mevcut program ve ayar kaydedilir, güç kaynağı geri geldiğinde işlem devam eder.**

**3. Kapağı düzgünce kapat.** Tablodaki üçüncü sebep **kapak düzgünce kapatılmamış olabilir.** Kılavuzun yükleme bölümü kapağı **dikkatli bir şekilde** kapatmanı ve **hiçbir çamaşırın sıkışmadığından** emin olmanı istiyor. Ekranda **E2** görüyorsan Haier'in kod tablosunda bu **kilitleme hatası** ve çözümü yine **kapağı düzgünce kapatın.**

**4. Programı kontrol et ve başlat.** Haier'in ilk sebebi: **program henüz başlamamış olabilir.** Çözüm: **programı kontrol ederek çalıştırın.** Program düğmesiyle seçim yaptıktan sonra Başlat/Duraklat düğmesine basıldığından emin ol.

**5. Çocuk kilidini kapat.** Beşinci sebep **çocuk kilidi devrede olabilir.** Haier'in anlatımına göre kilit, **"Gecikme" ve "Kırışıklık önleme" düğmelerine aynı anda 3 saniye** dokunarak devreye giriyor; **kilidi açmak için iki düğmeye tekrar** dokunuyorsun. Kilit çalışırken **çocuk kilidi göstergesi** yanıyor. Bilgi kodları tablosunda **"cLocI-"** görünümü **"Fonksiyon tuşları kapalıdır. Program değişikliği yapılamaz."** demek.

**6. Ekran kodunu oku.** Makine çalışmaya başlayıp bir süre duruyorsa Haier'in satırı farklı: **cihaz hata kodu görüntülüyor olabilir** → **ekran kodlarını kontrol edin.** Aynı satırda iki sebep daha var: **yükleme şeklinden kaynaklı sorun** (çözüm **yükü azaltın veya ayarlayın**) ve **program suda bekletme aşamasında olabilir** (çözüm **programı iptal edip tekrar başlatın**).

## Ekranda kod varsa

Haier'in tablosunda bazı kodlar yalnız bilgi verir ve **hiçbir önlem alınmasına gerek yoktur**: kalan süre (ör. **1:25**), **end** (döngü bitti) ya da **bEEP OFF** gibi. Arıza kodlarında ise ayrım net:

- **E2** kilitleme hatası → kapağı düzgünce kapat.
- **E4** 12 dakika sonra su seviyesine ulaşılamıyor → musluk ve su basıncı; ayrıntısı [Haier çamaşır makinesi su almıyor](/blog/haier-camasir-makinesi-su-almiyor/) yazısında.
- **Unb** dengesiz yük → [Haier çamaşır makinesi santrifüj yapmıyor](/blog/haier-camasir-makinesi-santrifuj-yapmiyor/) yazısına bak.
- **E8, F3, F4, F7, FA, fC0/fC1/FC2** → Haier'in tek çözümü **"Satış sonrası hizmetler ile görüşün."**

Markadan bağımsız anlatım için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısı var.

## Ne zaman servis

Haier'in arıza giderme bölümü bakım öncesinde **cihazı devre dışı bırakıp fişini prizden çekmeni** istiyor ve **kendi kendine onarım veya profesyonel olmayan onarım önerilmez** diyor. Kılavuzun kapanış cümlesi de açık: **alınan önlemlerden sonra bile hata mesajları tekrar beliriyorsa cihazı kapatın, güç kaynağının bağlantısını kesin ve müşteri hizmetleri ile görüşün.**

⛔ **Kendin-çöz sınırı burada biter.** Elektrik var, kapak kapalı, çocuk kilidi kapalı, program başlatılmış ve makine hâlâ çalışmıyorsa ya da F ile başlayan bir kod görüyorsan yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
