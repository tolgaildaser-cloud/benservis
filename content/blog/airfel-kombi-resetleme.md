---
title: "Airfel kombi resetleme: reset tuşu ve U4-67 kilidi"
description: "Airfel kombi resetleme: Optimum'da Reset tuşu, Comfort ve Power'da 3 saniye basılı tutma. Hangi kodda reset gerekmez, U4-67 kilidi ve servis sınırı."
slug: "airfel-kombi-resetleme"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork A). Konu seçimi: origin/main'de Airfel kombi sayfası yok (slug + başlık grep'i).
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "airfel kombi" → 1. "…servisi", 2. "…fiyatları", 3. "airfel kombi nasıl resetlenir";
#   "airfel kombi reset" → 1. "aırfel kombi resetleme", 2. "…resetleme nasıl yapılır", 3. "…resetleme yapmıyor".
# GSC (https___www-6 7 gün, https___www-5 3 ay): Airfel kombi sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile airfel.com'dan indirildi; hepsi HTTP 200. Okuma pdftotext, sayfa = PDF sayfası.
#  (O) Maestro Optimum A2CBP020AATR kullanım kılavuzu, 12 s.  https://airfel.com/uploads/files/maestro-optimum-kullanim1.pdf  md5 ecf05d1114c39903970bdc2957e40d04
#  (C) Maestro Comfort A2CPP024/028 kullanım kılavuzu, 12 s.  https://airfel.com/uploads/files/maestro-comfort-kullanim_-_TR2.pdf  md5 4d7af0685b4da770154148f0d78fce2c
#  (P) Maestro Power A2CPN023/026/030/036 kullanım kılavuzu, 16 s.  https://airfel.com/uploads/files/Maestro-power-kullanim_k%C4%B1lavuzu.pdf  md5 a2baa3594773e0d54b7fd0054439ce3d
#  (B) airfel.com "Airfel Kombi Resetleme Nasıl Yapılır?" (üretici sitesi, güncelleme 15 Eyl 2026)  https://airfel.com/tr/tr/blog/airfel-kombi-resetleme-nasil-yapilir  HTML md5 18484b818f9794fcb65ba840d88e4ffe
# Gaz kokusu O s.3, C s.3 · K2 Reset ve 10 sn servis modu O s.5 · hata tipleri, reset geçersizliği, sürekli reset → U4-67 O s.9 · Mod/Giriş/Reset tuşu C s.4, P s.7
#   · 3 sn basılı tut, bir kez basmak resetlemez C s.8, P s.11 · kod tablosu O s.10, C s.11, P s.14 · "en fazla 2–3 kez" B.
# BİLEREK YAZILMAYANLAR: servis menüsü içeriği · blog'daki "elektrik/gaz kesintisi sonrası reset" ve "küçük yazılım hataları" genellemesi (kılavuzda yok) · fişi çekip bekleme (U4-67/U5-01 dışında)
#   · parça/kart teşhisi · fiyat (#46) · pazar bağlantısı. Alıntı denetim tablosu: airfel-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa reset yapma; binanın gaz vanasını kapat, kapı ve pencereleri aç, binayı terk et."
  - "Ekrandaki hata kodunu not et ve reset sembolünün yanıp yanmadığına bak."
  - "Reset gerektirmeyen bir koddaysan reset yerine kılavuzun dediği gibi bekle."
  - "Reset atmadan önce kodun sebebini kaldır: gaz vanası açık mı, radyatör vanaları açık mı?"
  - "Reset tuşunu kullan: Maestro Optimum'da Reset tuşuna bas, Comfort ve Power'da Mod/Giriş/Reset tuşunu üç saniye basılı tut."
  - "Ekranda U4-67 görürsen kombinin elektrik bağlantısını kesip tekrar aç."
  - "Kod geri geliyorsa reset denemeyi bırak ve Airfel yetkili servisini ara."
faq:
  - q: "Airfel kombide reset tuşu hangisi?"
    a: "Maestro Optimum kılavuzunun panel tanımında K2 Reset tuşu. Maestro Comfort ve Maestro Power'da reset ayrı bir tuş değil; Mod/Giriş/Reset tuşu kilitlenme hatalarını resetliyor."
  - q: "Airfel kombi resetleme yapmıyor, neden?"
    a: "Kılavuza göre reset işleminin gerçekleşmesi için hatanın sebebinin ortadan kalkmış olması gerekir; sebep sürüyorsa reset geçersiz olur. Comfort ve Power'da tuşa bir kez basmak yetmez, 3 saniye basılı tutmak gerekir. Bazı kodlar da reset istemez, kendiliğinden geçer."
  - q: "U4-67 ne demek?"
    a: "Kılavuzlarda U4-67 reset denetimi. Optimum kılavuzuna göre hata sebebi ortadan kalkmadan sürekli reset atılırsa cihaz belirli bir denemeden sonra kendini kilitler ve bu koda geçer. Bu kod yalnız elektrik beslemesi kesilip tekrar açıldığında gider."
  - q: "Kaç kez reset atabilirim?"
    a: "Kılavuzlar bir sayı vermiyor, ama Optimum'un sürekli resetten sonra U4-67 ile kilitlendiğini yazıyor. Airfel'in kendi sitesindeki resetleme yazısı resetlemeyi en fazla 2–3 kez denemeni, kombi yine çalışmıyorsa teknik servise başvurmanı öneriyor."
  - q: "Reset tuşunu uzun basılı tutarsam ne olur?"
    a: "Maestro Optimum kılavuzuna göre Reset tuşu 10 saniye basılı tutulduğunda servis menüsü açılır. Servis menüsü yetkili kişiler içindir; resetlemek için tuşu uzun süre basılı tutma."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve ekranında yanıp sönen küçük bir uyarı"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda not defteri ve kalem"
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda prizden çekilen fiş"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Kombi durdu, ekranda bir kod var ve ilk akla gelen reset. Airfel'in Maestro Optimum, Maestro Comfort ve Maestro Power kullanım kılavuzlarında reset var, ama her kod için değil ve her şeyi çözmüyor. Bu yazıda reset tuşunun hangisi olduğunu, nasıl basılacağını, resetin işe yaramadığı kodları ve nerede durman gerektiğini bu üç kılavuzdan topladık. Senin kombinde tuş adları farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Optimum'da Reset tuşuna bas, uzun basılı tutma. Comfort ve Power'da Mod/Giriş/Reset tuşunu 3 saniye basılı tut; bir kez basmak yetmez. Önce kodun sebebini kaldır, yoksa reset geçersiz. U4-67 görürsen elektriği kesip aç. Kod geri geliyorsa reset bitti, servis.

## Hangi hata reset ister

| Ekranda gördüğün | Kılavuza göre | Ne yaparsın |
|---|---|---|
| **Kod + reset sembolü** | Kalıcı hata ya da kilitlenme, kombi durur | Sebebi kaldır, reset |
| **Yalnız kod, sembol yok** | Geçici ya da kapatma hatası | Sebep kalkınca kendiliğinden geçer |
| **J6-21** (Comfort, Power) | Dönüş sıcaklığı gidişten yüksek | Reset gerekmez, kombi bir süre sonra devreye girer |
| **11-67** (Comfort, Power) | Alev kaybı, geçici hata | Kombinin tekrar devreye girmesini bekle |
| **HJ-09** | Düşük sistem basıncı | Reset değil, basınç (servise bak) |
| **U4-67** | Reset denetimi | Elektriği kesip aç |

## Adım adım

**1. Gaz kokusu varsa reset yapma.** Airfel kılavuzlarının güvenlik sayfasındaki sıra: elektrikli cihazların düğmelerine ve fişlerine dokunma, yakında telefon kullanma, kibrit ve çakmak yakma, sigara içme. Binanın gaz vanasını kapat, bütün kapı ve pencereleri aç, etraftakileri uyar, binayı terk et. Gaz şirketini ve yetkili servisi bilgilendir.

**2. Kodu ve sembolü oku.** Optimum kılavuzuna göre hata olduğunda ekranda **Err** ve hata kodu görünür. Kalıcı hatada kodun yanında reset gerektiğini belirten bir sembol de çıkar. Comfort ve Power'da kilitlenme hatasında bu sembol yanıp söner. Kodu harf ve rakamlarıyla not et.

**3. Reset istemeyen kodda bekle.** Kılavuzlar hataları türlerine ayırıyor. Geçici ya da kapatma hatasında kombi durur ve sebep ortadan kalkınca kendiliğinden çalışır, ekran ana ekrana döner. Örneğin Comfort ve Power'da **J6-21** için kılavuzun notu açık: reset gerekmez, bir süre sonra kazan tekrar devreye girer. **8A-46** donma korumasında da su 1 °C'nin üstüne çıkınca kazan devreye girer.

**4. Önce sebebi kaldır.** Kılavuzun kuralı şu: reset işleminin gerçekleşmesi için hata sebebinin ortadan kalkmış olması gerekir; sebep sürüyorsa reset geçersiz olur. **11-64** alev oluşmaması kodunda önce gaz vanasının açık olduğundan emin ol. **1J-64**'te radyatör vanalarının açık olduğundan emin ol. Basınç kodu için [Airfel kombi hata kodları](/blog/airfel-kombi-hata-kodlari/) yazısındaki HJ-09 satırına bak.

**5. Reset tuşunu doğru kullan.** Maestro Optimum'da reset tuşu **K2**; kılavuz yalnız "tuşuna basın" diyor. Aynı tuş **10 saniye** basılı tutulursa servis menüsü açılır; o menü senin için değil. Comfort ve Power'da Mod/Giriş/Reset tuşunu **3 saniye** basılı tut; kılavuz bir kez basarsan resetlemiş olmayacağını yazıyor. Reset başarılı olursa ana ekran gelir.

**6. U4-67 görürsen elektriği kesip aç.** Optimum kılavuzuna göre hata sebebi ortadan kalkmadan sürekli reset atılırsa cihaz belirli bir denemeden sonra kendini kilitler ve **U4-67** koduna geçer. Bu kod yalnız elektrik beslemesi kesilip tekrar açıldığında gider. Optimum'da elektrik geri geldiğinde ekranda **AP** görünür; bu hava tahliye fonksiyonu 8 dakika sürer.

**7. Kod geri geliyorsa dur.** Kılavuzun kod tablosundaki talimat çoğu satırda aynı: kazanı resetleyin, hata tekrarlarsa yetkili servise başvurun. Airfel'in kendi sitesindeki resetleme yazısı da resetlemeyi **en fazla 2–3 kez** denemeni, kombi hâlâ çalışmıyorsa teknik servise başvurmanı öneriyor.

## Reset neyi çözmez

Reset ekrandaki koddan çıkmanın yolu, kodun sebebini gidermiyor. Comfort ve Power'da **E1-71** için kılavuz zaten "kalıcı hata, yetkili servise başvurun" diyor; reset önermiyor. Basınç sık düşüyorsa, gaz vanası açıkken ateşleme kodu dönüyorsa ya da sensör kodları tekrar ediyorsa sorun kombinin içindedir. Sıcak su gelmiyorsa önce modu ve ayarı kontrol et; [Airfel kombi sıcak su gelmiyor](/blog/airfel-kombi-sicak-su-gelmiyor/) yazısı o sırayı veriyor.

## Ne zaman servis

- Aynı kod bir ya da iki resetten sonra geri geliyorsa
- U4-67 elektrik kesip açtıktan sonra da sürüyorsa
- E1-71 gibi kılavuzun doğrudan servise yönlendirdiği bir kod varsa
- Basınç sık sık düşüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Reset tuşu, mod, ekran ve gaz vanasının açık olup olmadığı sende; servis menüsü, kombinin kapağının içi, gaz hattı, kart, sensörler ve tesisata su doldurma yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Optimum, Comfort, Power)?
2. Ekrandaki kod tam olarak ne?
3. Kaç kez reset attın, kod geri geldi mi?
4. Gaz vanası açık mı?
5. Kalorifer ve sıcak su çalışıyor mu?

Genel kod rehberi için [kombi arıza kodları](/blog/kombi-ariza-kodlari/) sayfasına bakabilirsin. Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
