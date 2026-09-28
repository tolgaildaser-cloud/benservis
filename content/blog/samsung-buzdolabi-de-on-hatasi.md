---
title: "Samsung buzdolabı DE ON uyarısı: demo modu"
description: "Samsung buzdolabında DE ON yazıyorsa Samsung'a göre cihaz demo (bayi) modunda. Moddan çıkış tuşları, fiş adımı ve EE göstergesi adım adım."
slug: "samsung-buzdolabi-de-on-hatasi"
date: "2026-09-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-28 PAZ alt ajanı (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# #88: bilgiler YALNIZ Samsung'un kendi belgelerinden. Web araması yalnız TR destek sayfalarının yerini bulmak için kullanıldı.
# (S6) Samsung TR destek "Samsung Buzdolabımda DE ON uyarısı aldığımda ne yapabilirim?" (güncelleme 2025-01-03)
#      https://www.samsung.com/tr/support/home-appliances/buzdolabimda-de-on-uyarisi-aliyorum-ne-yapabilirim/  md5 4350a6055ceea025c5fdf25c5407569b
#      "DE ON hata kodu ekranda belirdiyse buzdolabınız DEMO(bayi modu) modunda çalışmaktadır."
#      "Mod ( ) ve Çocuk kilidi ( ) tuşlarına 5 saniyeden daha uzun bir süre basılı tutun." · "Dondurucu göstergesinde DE soğutucu göstergesinde OFF 1 saniyeliğine görünür."
#      "DE ON bilgi kodu ekranda görünmeye devam ediyorsa buzdolabınızın fişini çıkartıp 30 saniye bekledikten sonra tekrar takın."
# (S5) Samsung TR destek "Samsung Buzdolabım EE uyarısı verdiğinde ne yapabilirim?" (2024-11-20) — gövdesi ekonomi modunu anlatıyor
#      https://www.samsung.com/tr/support/home-appliances/buzdolabim-ee-uyarisi-veriyor-ne-yapabilirim/  md5 8f023c97a09dcf85d112af65418dba48
# (G) Kılavuz RB52DS**** TR, 71 s.  md5 edae9a5819b091bc55152ce19142f777
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RB52DS33ESA&CttFileID=9806489&CDCttType=UM&VPath=UM%2F202407%2F20240716135728126%2FRB52DS_User_Manual_re_TR.pdf
#      s.29 panel (12 Mod butonu, 13 Çocuk kilidi butonu; "Kontrol panosunun görüntüsü, modele göre değişkenlik gösterebilir.") · s.31-32 ekonomi modu ("E" harfi) ve tatil modu ("--")
#      s.34 çocuk kilidi 5 sn · s.36 ayar tablosu, 5 dk gecikme, 24 saat ilk soğuma
# DE ON hiçbir indirilen kılavuzda (9 TR kılavuz) geçmiyor; kaynağı yalnız S6.
# BİLEREK YAZILMAYANLAR: "demo modunda buzdolabı soğutmaz" (S6 bunu söylemiyor — yazılmadı) · demo moduna nasıl girildiği (belgede yok) ·
#   hub'daki OF OF tuş kombinasyonları (Samsung TR belgelerinde OF OF yok).
# Alıntı denetim tablosu: samsung-buzdolabi-de-on-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Göstergeyi oku: DE ON, buzdolabının demo (bayi) modunda çalıştığını gösterir."
  - "Mod ve Çocuk kilidi tuşlarına birlikte 5 saniyeden uzun basılı tut."
  - "Dondurucu göstergesinde DE, soğutucu göstergesinde 1 saniyeliğine OFF görünüp görünmediğine bak."
  - "DE ON hâlâ görünüyorsa buzdolabının fişini çek, 30 saniye bekle ve tekrar tak."
  - "Fiş yeniden takıldıktan sonra buzdolabının çalışmaya başlaması için 5 dakika bekle."
  - "Sıcaklık ayarlarını kontrol et; normal kullanım için dondurucu -18 °C, soğutucu 4 °C."
  - "DE ON sürüyorsa Samsung müşteri hizmetleriyle iletişime geç."
faq:
  - q: "Samsung buzdolabında DE ON ne demek?"
    a: "Samsung Türkiye destek sayfasına göre DE ON ekranda belirdiyse buzdolabı DEMO (bayi modu) modunda çalışıyor. Samsung bu ekranı bir bilgi kodu olarak anlatıyor ve moddan çıkış adımlarını veriyor."
  - q: "Demo modundan nasıl çıkarım?"
    a: "Samsung'un tarifine göre Mod ve Çocuk kilidi tuşlarına 5 saniyeden uzun basılı tut. Dondurucu göstergesinde DE, soğutucu göstergesinde 1 saniyeliğine OFF görünür. DE ON görünmeye devam ediyorsa fişi çek, 30 saniye bekle ve tekrar tak."
  - q: "Fişi taktım ama buzdolabı hemen çalışmadı, normal mi?"
    a: "RB52DS kılavuzuna göre fiş çekilip yeniden takıldığında ya da elektrik kesilip geldiğinde buzdolabı, kompresörün zarar görmesini engellemek için 5 dakika gecikmeyle çalışır. 5 dakika sonra normal şekilde çalışmaya başlar."
  - q: "Ekranda iki tane E harfi (EE) var, bu da bir hata mı?"
    a: "Samsung'un EE sayfası ekonomi modunu anlatıyor; RB52DS kılavuzuna göre ekonomi modu seçiliyken soğutucu ve dondurucu göstergelerinde E harfi görünür. Kılavuza göre dondurucu sıcaklığı değiştirildiğinde ya da hızlı dondurma veya hızlı soğutma seçildiğinde ekonomi modu iptal olur."
images:
  coverAlt: "Buzdolabı kapağındaki dijital kontrol paneli; sıcaklık göstergeleri ve dokunmatik tuşlar"
---

Buzdolabının göstergesinde **DE ON** yazıyor. Samsung Türkiye'nin destek sayfasındaki karşılığı kısa: **"DE ON hata kodu ekranda belirdiyse buzdolabınız DEMO (bayi modu) modunda çalışmaktadır."** Yani bu ekran bir parça arızasını değil, cihazın hangi modda çalıştığını söylüyor. Samsung aynı sayfada moddan çıkış adımlarını da veriyor; bu yazıda o adımları sırayla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** DE ON = Samsung'a göre buzdolabı demo (bayi) modunda. Sıra şu: Mod + Çocuk kilidi tuşlarına 5 saniyeden uzun bas → göstergede DE / OFF 1 saniye görünür → DE ON sürüyorsa fişi çek, 30 saniye bekle, tak. Hâlâ duruyorsa → Samsung müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Göstergeyi oku.** Ekranda **DE ON** varsa Samsung'a göre buzdolabı **DEMO (bayi modu)** modunda çalışıyor. Samsung bu ekrana destek sayfasında "bilgi kodu" da diyor.

**2. İki tuşa birlikte bas.** Samsung'un çıkış adımı: **Mod** ve **Çocuk kilidi** tuşlarına **5 saniyeden daha uzun** bir süre basılı tut. Tuşların yeri için kılavuzundaki kontrol paneli çizimine bak; Samsung'a göre panelin görünümü modele göre değişebilir.

**3. Göstergeyi izle.** Samsung'a göre işlem sırasında **dondurucu göstergesinde DE**, **soğutucu göstergesinde OFF** yazısı **1 saniyeliğine** görünür.

**4. Sürüyorsa fişi çek.** Destek sayfasındaki ikinci adım: **DE ON** bilgi kodu ekranda görünmeye devam ediyorsa buzdolabının **fişini çıkar, 30 saniye bekle** ve tekrar tak.

**5. 5 dakika bekle.** RB52DS kılavuzuna göre fiş çekilip yeniden takıldığında buzdolabı, kompresörün zarar görmesini engellemek için **5 dakika gecikmeyle** çalışır. Bu sürede buzdolabının sessiz kalması arıza değildir.

**6. Ayarlara bak.** Kılavuzdaki ayar tablosuna göre normal kullanım için **dondurucu -18 °C, soğutucu 4 °C** önerilir ve en iyi performans bu konumda alınır. Moddan çıktıktan sonra ayarların bu değerlerde olduğunu kontrol et.

**7. Hâlâ görünüyorsa ara.** Samsung'un sayfası daha fazla bilgi için **Samsung müşteri hizmetleriyle** iletişime geçmeyi söylüyor.

## Ekranda DE ON değil de başka bir işaret varsa

Samsung panelinde arıza olmadan da görünen birkaç gösterge daha var. RB52DS kılavuzuna göre:

- **EE (iki göstergede birden E):** ekonomi modu. Samsung'un "EE uyarısı" sayfası da bu modu anlatıyor: kapıların daha az açıldığı dönemlerde, örneğin buzdolabında yiyecek varken bir süre evde olmadığında, buzdolabının en uygun sıcaklıkta çalışmasını ve enerji tasarrufu yapılmasını sağlar. Kılavuza göre dondurucunun sıcaklığı değiştirildiğinde ya da hızlı dondurma veya hızlı soğutma seçildiğinde ekonomi modu iptal olur.
- **Soğutucu göstergesinde "--":** tatil modu. Kılavuza göre tatil modu açıkken soğutucu gösterge alanında "--" görünür ve mod süresince kalır; hızlı soğutma ya da hızlı dondurma seçilirse tatil modu kendiliğinden iptal olur.
- **Ekran kararıyor:** ekran koruma modu. Kılavuza göre buzdolabı ilk çalıştırıldığında 30 saniye sonra kendiliğinden bu modla çalışır; herhangi bir tuşa basınca ekran aydınlanır, Mod butonuna 3 saniye basınca mod kapanır.
- **Çocuk kilidi simgesi:** Çocuk kilidi butonuna 5 saniye basınca kilit açılır ya da kapanır.

Tatile çıkarken hangi ayarın seçileceği için [tatile çıkarken buzdolabı ve cihazlar](/blog/tatile-cikarken-buzdolabi-ve-cihazlar/) yazısına bakabilirsin.

## Samsung'da kod mu, mod mu?

DE ON ve EE bir modun göstergesidir; **E09, E10 ve E11** ise Samsung'un sıcaklık uyarılarıdır. Dondurucu yeterince soğuk değilse [Samsung buzdolabı E09 hatası](/blog/samsung-buzdolabi-e09-hatasi/), soğutucu yeterince soğuk değilse [Samsung buzdolabı E10 hatası](/blog/samsung-buzdolabi-e10-hatasi/), soğutucu gereğinden soğuksa [Samsung buzdolabı E11 hatası](/blog/samsung-buzdolabi-e11-hatasi/) yazısına bak. Samsung'un başka serilerindeki kodlar için [Samsung buzdolabı hata kodları](/blog/samsung-buzdolabi-hata-kodlari/) yazısı var.

## Ne zaman servis

İki tuşa 5 saniyeden uzun bastın, fişi çekip 30 saniye bekledin ve DE ON hâlâ ekrandaysa Samsung'un destek sayfası kullanıcıya başka adım vermiyor: **Samsung müşteri hizmetleriyle iletişime geç.**

⛔ **Kendin-çöz sınırı burada biter.** Tuş kombinasyonu ve fiş kullanıcıya; kontrol kartı servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Ekranda tam olarak ne yazıyor: DE ON mu, EE mi, "--" mi?
2. Mod ve Çocuk kilidi tuşlarına birlikte 5 saniyeden uzun basıldı mı?
3. Göstergede DE / OFF 1 saniyeliğine göründü mü?
4. Fiş çekilip 30 saniye beklendi mi?
5. Fiş takıldıktan sonra 5 dakika beklendi mi?

Bu beşine cevabın varsa servise "ekranda yazı var" yerine somut bir tablo anlatabilirsin.

Ekrandaki kodu ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
