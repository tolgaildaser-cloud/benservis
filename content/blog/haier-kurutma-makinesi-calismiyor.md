---
title: "Haier kurutma makinesi çalışmıyor"
description: "Haier kurutma makinesi çalışmıyorsa Haier kılavuzundaki altı sebep: güç bağlantısı, elektrik kesintisi, program, cihaz kapalı, dolu su tankı ve kapak."
slug: "haier-kurutma-makinesi-calismiyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/kurutma-makineleri/31103229/hd100-d357u1e-tr/  md5 c7a806147553fa3cb53d51eb882992f3
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2026/8/17881769/MAN-000197737_000  36 s.  md5 a70c4272fa30932e93a4669fab2a78e4  (kapak: "Isı Pompası-Kurutma makinesi HD100-D357U1E-TR / HD100-D357GU1E-TR")
#   pdftotext -layout, sayfa = PDF sayfası. Web araması yok.
# Ana satır (s.28, "Ekran kodları olmadan sorun giderme"): "Kurutma makinesi çalışmıyor." · "Güç kaynağına bağlantı zayıf → Güç kaynağı bağlantısını kontrol edin." · "Güç kesintisi. → Güç kaynağını kontrol edin."
#   · "Kurutma programı ayarlanmamış. → Bir kurutma programı ayarlayın." · "Cihaz açılmamış. → Cihazı açın." · "Su tankı dolu. → Su tankını boşaltın." · "Kapak düzgün kapanmamış. → Kapağı düzgün bir şekilde kapatın."
#   İkinci satır: "Kurutma makinesi çalışmıyor ve ekranda [simge] ifadesi görünüyor." → "Çamaşırlar, program tarafından belirlenen kuruluk seviyesine ulaşmıştır." → "Program ayarının uygun olup olmadığını kontrol edin." (simge metinde yok)
# Diğer: s.11 5.6 "Güç anahtarını açın, düğmeyi kullanarak 14 programdan birini seçin" · 5.8 "Kapak açıksa bu gösterge (Şekil 5-8) yanacaktır. Kullanıcılar kapağı kapatmalı, ardından kurutma programını başlatmalıdır."
#   · 5.10 Boş tank göstergesi "su tankının boşaltılması gerektiğini hatırlatmak için" · "Önemli: Her kurutma programından sonra su tankını boşaltın." · 5.11 çocuk kilidi "cLoK"
#   · s.26 10.3 "1. Su tankını çekerek yuvasından çıkarın" "2. Su tankını boşaltın" "3. Su tankını çamaşır kurutma makinesine tekrar takın" · "Suyu hiçbir şekilde içme veya gıda işleme için kullanmayın."
#   · s.27 kod tablosu: tüm satırların çözümü "Müşteri hizmetleri ile iletişime geçin." (kod adları PDF'te görüntü; metinden OKUNAMADI) · s.29 12.2 "kullanılmadan önce iki saat BEKLETİLMELİDİR."
# BİLEREK YAZILMAYANLAR: ekran kodlarının adları (metin katmanında yok; tahmin edilmedi) · tahliye hortumu bağlantısı (kurulum) · pompa/NTC/ısı pompası teşhisi (servis) · priz/sigorta müdahalesi · fiyat.
# Alıntı denetim tablosu: haier-kurutma-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Fişin prize sağlam takılı olduğunu kontrol et."
  - "Evde elektrik kesintisi olup olmadığını kontrol et."
  - "Güç düğmesiyle cihazı aç."
  - "Program düğmesiyle bir kurutma programı seç."
  - "Su tankını yuvasından çekip çıkar, boşalt ve yerine tak."
  - "Kapağı düzgünce kapat; kapak göstergesi sönmüş olsun, sonra programı başlat."
faq:
  - q: "Haier kurutma makinem neden çalışmıyor?"
    a: "Haier HD100-D357U1E kılavuzunun 'Kurutma makinesi çalışmıyor' satırı altı sebep sayıyor: güç kaynağına bağlantı zayıf, güç kesintisi, kurutma programı ayarlanmamış, cihaz açılmamış, su tankı dolu ve kapak düzgün kapanmamış. Çözümler de kullanıcıya bırakılmış: bağlantıyı ve güç kaynağını kontrol etmek, program ayarlamak, cihazı açmak, su tankını boşaltmak ve kapağı kapatmak."
  - q: "Su tankını ne sıklıkla boşaltmalıyım?"
    a: "Haier her kurutma programından sonra su tankının boşaltılmasını istiyor. Kontrol panelindeki boş tank göstergesi de tankın boşaltılması gerektiğini hatırlatmak için var. Tanktaki su içme ya da gıda işleme için kullanılmamalı."
  - q: "Makineyi yeni aldım, hemen çalıştırabilir miyim?"
    a: "Haier'in kurulum uyarısına göre nakliye ve kurulumdan sonra kurutma makinesi kullanılmadan önce iki saat bekletilmeli. Kılavuz bunu kompresör kapsülündeki yağın geri akması için gerekli süre olarak açıklıyor."
  - q: "Ekranda bir kod çıktı, ne yapmalıyım?"
    a: "Kılavuzun 'Ekran koduyla sorun giderme' tablosundaki kodların hepsinin çözümü 'Müşteri hizmetleri ile iletişime geçin.' Haier, önlemlerden sonra kod tekrar görünürse cihazı kapatıp güç bağlantısını kesmeni ve müşteri hizmetleriyle iletişime geçmeni istiyor."
images:
  coverAlt: "Kapağı kapalı beyaz bir kurutma makinesinin üst köşesindeki çekmece tipi su tankının yarı dışarı çekilmiş hâli"
---

Çamaşırları yerleştirdin, düğmeye bastın ama kurutma makinesi başlamıyor. Haier'in HD100-D357U1E ısı pompalı kurutma makinesi kılavuzunda bu durumun satırı **"Kurutma makinesi çalışmıyor."** Haier bu satırda altı sebep sayıyor ve hepsi kontrol edilebilir şeyler: **güç kaynağına bağlantı zayıf**, **güç kesintisi**, **kurutma programı ayarlanmamış**, **cihaz açılmamış**, **su tankı dolu** ve **kapak düzgün kapanmamış.** Kılavuz, satış sonrası servisle iletişime geçmeden önce **gösterilen tüm olasılıkları kontrol etmeni** istiyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş sağlam mı, elektrik var mı, cihaz açık mı, program seçili mi? Su tankını boşalt, kapağı tam kapat. Ekranda kod varsa Haier'in tek çözümü müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Güç bağlantısını kontrol et.** Haier'in ilk sebebi: **güç kaynağına bağlantı zayıf.** Çözüm: **güç kaynağı bağlantısını kontrol edin.** Fişin prize tam oturduğundan emin ol.

**2. Elektrik kesintisi var mı bak.** İkinci sebep **güç kesintisi**; çözüm **güç kaynağını kontrol edin.**

**3. Cihazı aç.** Tablodaki sebep: **cihaz açılmamış** → **cihazı açın.** Haier'in kontrol paneli anlatımına göre önce **güç anahtarını açıyor**, sonra düğmeyle programı seçiyorsun.

**4. Bir kurutma programı ayarla.** Haier'e göre **kurutma programı ayarlanmamış** olabilir; çözüm **bir kurutma programı ayarlayın.** Kılavuz düğmeyle **14 programdan birini** seçebileceğini, ilgili programın göstergesinin yanacağını yazıyor.

**5. Su tankını boşalt.** Beşinci sebep: **su tankı dolu.** Haier'in sırası üç adım: **su tankını çekerek yuvasından çıkarın**, **su tankını boşaltın**, **su tankını çamaşır kurutma makinesine tekrar takın.** Kontrol panelindeki **boş tank göstergesi** tankın boşaltılması gerektiğini hatırlatmak için var. Haier'in kuralı: **her kurutma programından sonra su tankını boşaltın.** Tanktaki suyu **hiçbir şekilde içme veya gıda işleme için** kullanma.

**6. Kapağı düzgünce kapat.** Son sebep: **kapak düzgün kapanmamış** → **kapağı düzgün bir şekilde kapatın.** Kılavuza göre kapak açıksa paneldeki **kapak açma göstergesi** yanıyor; kapağı kapattıktan sonra kurutma programını başlat.

## Makine durdu, ekranda simge var

Haier'in tablosunda ayrı bir satır var: kurutma makinesi çalışmıyor ve ekranda bir ifade görünüyorsa bunun sebebi **çamaşırların program tarafından belirlenen kuruluk seviyesine ulaşmış** olması olabilir. Çözüm: **program ayarının uygun olup olmadığını kontrol edin.** Yani makine bozulmamış, işini bitirmiş olabilir. Panel tuşlarına basınca tepki gelmiyorsa ekranda **"cLoK"** var mı bak; Haier'e göre çocuk kilidi ayarlıyken güç kapatma dışındaki **tüm dokunmatik tuşlar geçersiz.**

Makine çalışıyor ama kurutmuyorsa [Haier kurutma makinesi kurutmuyor](/blog/haier-kurutma-makinesi-kurutmuyor/) yazısına bak. Markadan bağımsız anlatım için [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/) ve [kurutma makinesi hata kodları](/blog/kurutma-makinesi-hata-kodlari/) yazıları var.

## Ne zaman servis

Haier'in "Ekran koduyla sorun giderme" tablosunda **tahliye pompası arızası**, **NTC2/NTC3 açık veya bozuk**, **normal dışı ısınma** ve **IoT yapılandırma hatası** gibi durumlar sıralanıyor; **hepsinin çözümü "Müşteri hizmetleri ile iletişime geçin."** Kılavuzun uyarısı: **önlemler alındıktan sonra hata kodları tekrar görüntülenirse** cihazı kapat, **güç kaynağının bağlantısını kes** ve müşteri hizmetleriyle iletişime geç. Haier, **uygun olmayan onarımlar önemli hasarlara neden olabileceği** için elektrikli ekipmanın servisinin yalnızca kalifiye uzmanlarca yapılmasını istiyor.

⛔ **Kendin-çöz sınırı burada biter.** Güç var, cihaz açık, program seçili, tank boş, kapak kapalı ve makine yine başlamıyorsa ya da ekranda kod varsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
