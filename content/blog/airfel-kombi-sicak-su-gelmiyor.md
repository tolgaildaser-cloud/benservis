---
title: "Airfel kombi sıcak su gelmiyor: evde bakılacaklar"
description: "Airfel kombi sıcak su gelmiyorsa kılavuzun sırası: işletme modu, sıcak su ayarı, musluk debisi, AP bekleme süresi, HC-01 ve HJ-09 kodları, servis sınırı."
slug: "airfel-kombi-sicak-su-gelmiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork A). Konu seçimi: origin/main'de Airfel kombi sayfası yok (slug + başlık grep'i; yalnız 3 Airfel klima sayfası var).
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "airfel kombi sıcak su" → 1. "airfel kombi sıcak su gelmiyor", 2. "…sıcak su ayarı nasıl yapılır", 3. "…sıcak su sensörü".
# GSC (https___www-6 7 gün, https___www-5 3 ay): Airfel kombi sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile airfel.com'dan indirildi (adresler ürün sayfalarındaki doküman bağlantılarından); hepsi HTTP 200 application/pdf. Okuma pdftotext, sayfa = PDF sayfası.
#  (O) Maestro Optimum A2CBP020AATR kullanım kılavuzu, 12 s.  https://airfel.com/uploads/files/maestro-optimum-kullanim1.pdf  md5 ecf05d1114c39903970bdc2957e40d04
#  (C) Maestro Comfort A2CPP024/028 kullanım kılavuzu, 12 s.  https://airfel.com/uploads/files/maestro-comfort-kullanim_-_TR2.pdf  md5 4d7af0685b4da770154148f0d78fce2c
#  (P) Maestro Power A2CPN023/026/030/036 kullanım kılavuzu, 16 s.  https://airfel.com/uploads/files/Maestro-power-kullanim_k%C4%B1lavuzu.pdf  md5 a2baa3594773e0d54b7fd0054439ce3d
# Gaz kokusu O s.3, C s.3, P s.3 · mod seçimi ve mod tanımları O s.5-7, C s.5-6 · sıcak su koşulları (yaz/kış modu + debi) O s.8 (2,5 lt/dak), C s.8 ve P s.10 (2,6 l/dk)
#   · sıcak su set ayarı O s.7 (5 sn), C s.6 (3 sn ya da Giriş) · sıcak su aralığı 30-60 °C O s.4 · kışta sıcak su önceliği O s.7 · AP 8 dk O s.6 · konfor fonksiyonu O s.8, C s.8/s.10
#   · HC-01, HJ-09 C s.11, P s.14 · 11-64, HJ-09 O s.10 · bakım/onarım yetkili O s.3, s.9.
# ÇIKARIM işaretli: "musluğu tam aç" (kılavuz yalnız debi eşiğini veriyor).
# BİLEREK YAZILMAYANLAR: airfel.com blog yazısındaki "1–1,5 bar" ve "tahliye musluğuyla bar düşürme" (kullanım kılavuzunda yok; #31) · doldurma vanasının yeri (kullanım kılavuzunda gösterilmiyor)
#   · 3 yollu vana, debimetre, eşanjör, sensör teşhisi · servis menüsü · fiyat (#46) · pazar bağlantısı. Alıntı denetim tablosu: airfel-kombi-sicak-su-gelmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa hiçbir şeye dokunma; binanın gaz vanasını kapat, kapı ve pencereleri aç, binayı terk et."
  - "Ekranda Err ve bir hata kodu var mı bak, kodu olduğu gibi not et."
  - "İşletme modunu kontrol et; sıcak su için kombi yaz ya da kış modunda olmalı."
  - "Elektrik yeni geldiyse ve ekranda AP yazıyorsa hava tahliye fonksiyonunun bitmesini bekle."
  - "Sıcak su set değerine bak; düşükse sıcak su artı tuşuyla yükselt ve ayarın kaydolmasını bekle."
  - "Sıcak su musluğunu tam aç; kombi düşük akışta sıcak su için devreye girmez."
  - "Ekranda HC-01, HJ-09 ya da başka bir kod varsa kılavuzun o satırına göre ilerle, kod sürüyorsa Airfel yetkili servisini ara."
faq:
  - q: "Airfel kombi petekleri ısıtıyor ama sıcak su vermiyor, neden?"
    a: "Önce moda bak. Airfel kılavuzlarında yalnızca merkezi ısıtma modu diye ayrı bir mod var; bu modda sadece ısıtma çalışır, sıcak su çalışmaz. Kombi yaz ya da kış modundaysa ve musluk tam açıkken de sıcak su gelmiyorsa sorun kullanıcının bakabileceği ayarların dışındadır, yetkili servis gerekir."
  - q: "Musluk az açıkken sıcak su gelmiyor, normal mi?"
    a: "Kılavuza göre kazanın sıcak su için devreye girmesi için Maestro Optimum'da en az 2,5 litre/dakika, Maestro Comfort ve Power'da 2,6 litre/dakika akış gerekiyor. Bu eşiğin altında kombi sıcak su için yanmaz."
  - q: "HC-01 ne demek?"
    a: "Maestro Comfort ve Power kılavuzlarında HC-01 kullanım sıcak suyu hatası. Kılavuza göre kazan çalışmaya devam eder, ama daha konforlu sıcak su temini için yetkili servise başvurulması gerekir."
  - q: "Sıcak su kaç dereceye ayarlanabilir?"
    a: "Maestro Optimum'un teknik tablosunda kullanım suyu sıcaklık aralığı 30–60 °C. Ayarı sıcak su artı ve eksi tuşlarıyla yapıyorsun; Optimum'da 5 saniye, Comfort'ta 3 saniye bekleyince ya da Giriş'e basınca ayar uygulanıyor."
  - q: "Sıcak su geç geliyor, hızlandırmanın yolu var mı?"
    a: "Kılavuzlarda kullanım sıcak suyu konfor fonksiyonu var; kazan içindeki suyu sıcak tutar ve sıcak su daha hızlı gelir. Optimum'da sıcak su artı ve eksi tuşlarına aynı anda 5 saniye basılarak, Comfort'ta kullanıcı menüsündeki U3 parametresiyle açılıp kapanıyor. Kılavuz enerji tasarrufu için bu fonksiyonu kapatmayı öneriyor."
images:
  coverAlt: "Banyoda lavabonun üzerindeki açık musluk ve yanında asılı duran katlanmış bir havlu"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda not defteri ve kalem"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda prizden çekilen fiş"
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda su giriş musluğu"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Kalorifer çalışıyor ama musluktan soğuk su akıyor, ya da kombi hiç yanmıyor. Airfel'in Maestro Optimum, Maestro Comfort ve Maestro Power kullanım kılavuzları sıcak su için iki koşul koyuyor: kombi doğru modda olacak ve musluktan yeterli akış olacak. Bu yazıda bu koşulları, sıcak su ayarını ve ekranda görebileceğin kodları bu üç kılavuzdan sırayla topladık. Senin kombinde tuş adları farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Gaz kokusu varsa dur. Mod yaz ya da kış mı? Yalnızca merkezi ısıtma modunda sıcak su yok. Elektrik yeni geldiyse AP bitene kadar bekle. Sıcak su ayarını yükselt, musluğu tam aç. HC-01 ya da tekrar eden bir kod görürsen → Airfel yetkili servisi.

## Modlar ve sıcak su

| Ekrandaki mod | Kılavuza göre | Sıcak su |
|---|---|---|
| **Bekleme / kapalı** | Isıtma ve sıcak su aktif değil, donma koruması açık | Yok |
| **Yaz modu** | Yalnız kullanım sıcak suyu aktif | Var |
| **Kış modu** | Isıtma ve sıcak su aktif | Var |
| **Yalnızca merkezi ısıtma** | Yalnız ısıtma aktif | Yok |

## Adım adım

**1. Gaz kokusu varsa dur.** Airfel kılavuzlarının güvenlik sayfasındaki sıra: elektrikli cihazların düğmelerine ve fişlerine dokunma, yakında telefon kullanma, kibrit ve çakmak yakma, sigara içme. Binanın gaz vanasını kapat, bütün kapı ve pencereleri aç, etraftakileri uyar, binayı terk et. Gaz şirketini ve yetkili servisi bilgilendir.

**2. Ekrana bak.** Maestro Optimum kılavuzuna göre bir hata olduğunda LCD ekranda **Err** ve hata kodu görünür. Kodu harf ve rakamlarıyla birlikte not et. Kod yoksa sorun büyük olasılıkla ayarlardadır, sonraki adımlara geç.

**3. Modu kontrol et.** Kılavuzlara göre kombinin sıcak su için devreye girmesi için kullanım sıcak suyu işletmesinin aktif olması, yani kombinin **yaz** ya da **kış** modunda olması gerekiyor. **Yalnızca merkezi ısıtma** modunda yalnız kalorifer çalışır. Maestro Optimum'da mod ON/OFF tuşuyla, Comfort ve Power'da Mode tuşuyla değişiyor. Kış modunda ısıtma ve sıcak su aynı anda istenirse Optimum önce sıcak suyu karşılar.

**4. Elektrik kesintisinden sonra bekle.** Maestro Optimum'da elektrik bağlantısı kesilip kazan tekrar çalıştırıldığında hava tahliye fonksiyonu devreye girer ve ekranda **AP** görünür. Kılavuza göre bu fonksiyon **8 dakika** sürer; bu sırada fan ve pompa çalışır. Fonksiyon bitince kazan çalışmaya hazır hale gelir.

**5. Sıcak su ayarını yükselt.** Optimum'da sıcak su ayar tuşlarından birine bas, set değeri yanıp sönmeye başlar; artı ve eksiyle ayarla, **5 saniye** dokunmadan bekle. Comfort'ta yaz ya da kış modundayken DHW+ veya DHW− tuşuna bas, değeri değiştir, **3 saniye** bekle ya da Giriş'e bas. Optimum'un teknik tablosunda kullanım suyu aralığı **30–60 °C**.

**6. Musluğu tam aç.** Kılavuza göre kazanın sıcak su için çalışması için akışın Maestro Optimum'da en az **2,5 litre/dakika**, Comfort ve Power'da **2,6 litre/dakika** olması gerekiyor. Musluk az açıksa kombi yanmayabilir; bu yüzden denemeyi musluk tam açıkken yap (çıkarım: kılavuz eşiği veriyor, musluk tavsiyesi bizim).

**7. Koda göre ilerle.** Optimum'da **11-64** alev oluşmaması; kılavuz önce gaz vanasının açık olduğundan emin olmanı istiyor. **HJ-09** düşük sistem basıncı; kılavuzun talimatı doldurma vanasıyla basıncı 0,8 bara çıkarmak, ama vananın yeri kullanım kılavuzunda gösterilmiyor; doldurmayı kendin yapma, yetkili servise bırak. Comfort ve Power'da **HC-01** kullanım sıcak suyu hatası; kazan çalışmaya devam eder, ama kılavuz yetkili servise başvurmanı istiyor. Kalıcı hatalarda reset için [Airfel kombi resetleme](/blog/airfel-kombi-resetleme/) yazısına, bütün kodlar için [Airfel kombi hata kodları](/blog/airfel-kombi-hata-kodlari/) yazısına bak.

## Sıcak su geç geliyorsa

Kılavuzlarda **kullanım sıcak suyu konfor fonksiyonu** var. Bu fonksiyon kazanın içindeki suyu sıcak tutar, musluğu açtığında sıcak su daha hızlı gelir. Optimum'da sıcak su artı ve eksi tuşlarına aynı anda 5 saniye basılarak, Comfort'ta kullanıcı menüsündeki U3 parametresiyle açılıp kapanıyor. Kılavuzun enerji önerisi ise tersini söylüyor: bu fonksiyon sürekli sıcak su hazır tuttuğu için bir ihtiyaçtan çok lüks.

## Ne zaman servis

- Kombi yaz ya da kış modunda, musluk tam açık, ekranda kod yok ama sıcak su gelmiyorsa
- HC-01 görüyorsan
- Aynı kod reset ya da gaz vanası kontrolünden sonra geri geliyorsa
- Basınç sık sık düşüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Mod, sıcak su ayarı, ekran ve musluk sende; kombinin kapağının içi, gaz bağlantısı, kart, sensörler ve tesisata su doldurma yetkili servisin. Airfel kılavuzu da bakım ve onarımı asla kendi başına yapmamanı, yetkili servis çağırmanı istiyor.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Optimum, Comfort, Power)?
2. Ekranda hangi mod ve hangi kod var?
3. Sıcak su set değeri kaç derece?
4. Kalorifer çalışıyor mu?
5. Sorun bütün musluklarda mı?

Genel nedenler için [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısına, basınç değerleri için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısına bakabilirsin. Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
