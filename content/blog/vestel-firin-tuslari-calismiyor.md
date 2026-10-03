---
title: "Vestel fırın tuşları basmıyor: tuş kilidi"
description: "Vestel fırının zamanlayıcı tuşları basmıyorsa tablo üç neden sayıyor: tuş kilidi, panelde rutubet, yabancı madde. Modele göre kilit açma."
slug: "vestel-firin-tuslari-calismiyor"
date: "2026-10-03"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, kombi + fırın koşusu). Belgeler 1 Eki'de curl -sL -A "Mozilla/5.0" ile Vestel'in kendi alan adından (statik.vestel.com.tr) indirildi (HTTP 200); bu koşuda yerel kopyanın md5'i yeniden alındı, 1 Eki kaydıyla birebir.
# Hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası. Yerel kopya: blog-taslaklar/kaynak-firin-sprint/
#  (V1) Vestel "FIRIN KULLANIM KILAVUZU AF-107892 X WIFI", 43 s., md5 9c525e3e577fee7daf2037e2d3ef3414 — https://statik.vestel.com.tr/webfiles/20264178_k.pdf
#      s.36 Sorun Giderme: "Zamanlayıcı butonlarına düzgün basılamıyor." → "Zamanlayıcı butonlarının arasında yabancı maddeler sıkışmıştır." → "Yabancı maddeleri temizleyiniz ve tekrar deneyiniz."
#        / "Dokunmatik modeli: kumanda panelinde rutubet vardır." → "Rutubeti temizleyiniz ve tekrar deneyiniz." / "Tuş kilidi fonksiyonu ayarlanmıştır." → "Tuş kilidi fonksiyonunun ayarlanmamış olduğunu kontrol ediniz."
#      s.27 "Tuş kilidi fonksiyonu, çalışmakta olan fırının pişirme ayarlarının yanlışlıkla değiştirilmesini önlemek için kullanılır. Tuş kilidini aktive etmek için sol düğme 3 saniye boyunca sağa çevrili tutulur. Tuş kilidini iptal etmek için yine sol düğme 3 saniye boyunca sağa çevrili tutulur."
#        · "Tuş kilidi aktif iken sadece "ON/OFF" tuşu ile fırın kapatılabilir, diğer tuşlar ile işlem yapılamaz."
#      s.36 "Cihazınız hala normal çalışmasına devam etmiyorsa Vestel İletişim Merkezi veya size en yakın Vestel Yetkili Servisi ile irtibata geçiniz."
#  (V2) Vestel "FIRIN KULLANIM KILAVUZU AF-9786 S / B / G", 40 s., md5 b9d6e4d2f710e98a2bb9550e94c0a040 — https://statik.vestel.com.tr/webfiles/20265328_k.pdf
#      s.33 aynı "Zamanlayıcı butonlarına düzgün basılamıyor" satırı · s.22 "Tuş Kilidi fonksiyonunu etkinleştirmek için TUŞ KİLİDİ sensör düğmesine Tuş Kilidi sembolü görüntülenene kadar 2 saniye boyunca dokunun. Tuş Kilidi fonksiyonunu devre dışı bırakmak için TUŞ KİLİDİ sensör düğmesine Tuş Kilidi sembolü kaybolana kadar 2 saniye boyunca dokunun."
#        · "Tuş Kilidi fonksiyonu etkinken yalnızca AÇIK/KAPALI sensör düğmesi etkinleştirilebilir. Diğer tüm düğmeler kilitli kalacaktır."
#  (V3) Vestel "FIRIN KULLANIM KILAVUZU AF-8685 YS / YB", 37 s., md5 661a6252730fb17d5e49dff36223aaff — https://statik.vestel.com.tr/webfiles/20262709_k.pdf
#      s.30 aynı satır · s.19 "Zamanlayıcı 25 saniye kullanılmazsa tuş kilidi otomatik olarak devreye girer. "[kilit]" sembolü görüntülenir ve sürekli yanar. Zamanlayıcı düğmelerinin kilidini açmak için "[kilit]" düğmesine 2 saniye basılı tutun. Sonrasında istediğiniz işlemi yapabilirsiniz."
#        · s.19 saat ayarı: "1. "+" ve "-" düğmesine 2 saniye basılı tuttuğunuzda tuş kilidi devreden çıkar ve ekranın ortasında yer alan nokta yanıp sönmeye başlar."
#  (V4) Vestel ANKASTRE FIRIN KULLANIM KILAVUZU VAF serisi, 33 s., md5 6fc56d1616d4abbdf595213c15aafa0d — https://static.vestel.com.tr/kullanimkilavuzlari/52041101.pdf · s.28 "Saatli modellerde ise, saat ayarlanmamış olabilir."
#  (V1) s.29 ER kodları: "Bu durumda fırına herhangi bir şey yapmayın ve Yetkili Servis ile iletişime geçin. ER06 ve ER09 hata mesajları değildir."
# BİLEREK YAZILMAYANLAR: kumanda paneli/zamanlayıcı kartı arızası teşhisi (belgede yok) · paneli sökme, sıvı püskürtme (belgede yok) · sigorta/elektrik müdahalesi · diğer Vestel modellerine genelleme · fiyat.
# Alıntı denetim tablosu: vestel-firin-tuslari-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kuru, yumuşak bez"]
steps:
  - "Ekranda tuş kilidi sembolü olup olmadığına bak."
  - "AF-107892 gibi düğmeli modellerde sol düğmeyi 3 saniye sağa çevrili tutarak tuş kilidini kapat."
  - "AF-9786 gibi dokunmatik modellerde TUŞ KİLİDİ düğmesine sembol kaybolana kadar 2 saniye dokun."
  - "AF-8685'te zamanlayıcı 25 saniye kullanılmayınca kilit kendiliğinden devreye girer; kilit düğmesine 2 saniye basılı tutarak aç."
  - "Dokunmatik panelde nem varsa paneli kuru bezle sil ve yeniden dene."
  - "Zamanlayıcı tuşlarının arasına kalmış yemek artığı ya da yabancı maddeyi temizle ve yeniden dene."
  - "Tuşlar hâlâ tepki vermiyorsa Vestel İletişim Merkezi'ne ya da Vestel Yetkili Servisi'ne başvur."
faq:
  - q: "Vestel fırınımın tuşları neden basmıyor?"
    a: "Vestel'in AF-107892, AF-9786 ve AF-8685 kılavuzlarındaki sorun giderme tablosu 'Zamanlayıcı butonlarına düzgün basılamıyor' satırında üç neden sayıyor: butonların arasında yabancı madde kalmış, dokunmatik modelde kumanda panelinde rutubet var ya da tuş kilidi fonksiyonu ayarlanmış."
  - q: "Tuş kilidi açıkken fırını kapatabilir miyim?"
    a: "Evet. AF-107892 kılavuzuna göre tuş kilidi aktifken fırın yalnız ON/OFF tuşuyla kapatılabiliyor, diğer tuşlarla işlem yapılamıyor. AF-9786'da da tuş kilidi etkinken yalnız AÇIK/KAPALI düğmesi çalışıyor, diğer düğmeler kilitli kalıyor."
  - q: "Ben kilitlemedim ama ekranda kilit sembolü var, neden?"
    a: "AF-8685 kılavuzuna göre bu modelde zamanlayıcı 25 saniye kullanılmazsa tuş kilidi otomatik olarak devreye giriyor ve kilit sembolü sürekli yanıyor. Kilidi açmak için kılavuzda gösterilen kilit düğmesine 2 saniye basılı tutmak yeterli."
  - q: "Tuş kilidi ne işe yarıyor?"
    a: "AF-107892 kılavuzuna göre tuş kilidi, çalışmakta olan fırının pişirme ayarlarının yanlışlıkla değiştirilmesini önlemek için kullanılıyor. AF-9786 kılavuzu da aynı amacı fırın ayarlarında istem dışı değişiklikleri önlemek diye yazıyor."
images:
  coverAlt: "Ankastre bir fırının kumanda panelinde dijital zamanlayıcı ekranı ve tuş kilidi sembolüne dokunan bir parmak"
---

Saati ayarlamak ya da pişirme süresini girmek istiyorsun ama zamanlayıcının tuşları tepki vermiyor. Vestel'in ankastre fırın kılavuzlarındaki sorun giderme tablosunda bu belirti ayrı bir satır: **"Zamanlayıcı butonlarına düzgün basılamıyor."** Tablonun saydığı üç nedenin üçü de evde bakılabilecek şeyler. Bu yazı Vestel'in AF-107892 X WIFI, AF-9786 ve AF-8685 kılavuzlarına dayanıyor; kilidi açma yolu her modelde farklı.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda kilit sembolü varsa tuş kilidi açıktır; modeline göre kapat (AF-107892: sol düğme 3 saniye sağa · AF-9786: TUŞ KİLİDİ düğmesine 2 saniye · AF-8685: kilit düğmesine 2 saniye). Dokunmatik panel nemliyse kurula, tuş aralarında kir varsa temizle. Yine olmuyorsa Vestel Yetkili Servisi.

## Vestel'in tablosu: üç neden

| Neden (Vestel'in tablosundan) | Çözüm |
|---|---|
| Tuş kilidi fonksiyonu ayarlanmış | Tuş kilidinin ayarlanmamış olduğunu kontrol et |
| Dokunmatik modelde kumanda panelinde rutubet var | Rutubeti temizle ve yeniden dene |
| Zamanlayıcı butonlarının arasına yabancı madde kalmış | Yabancı maddeleri temizle ve yeniden dene |

## Adım adım: evde denenecekler

**1. Kilit sembolüne bak.** AF-9786 ve AF-8685 kılavuzlarına göre tuş kilidi devredeyken ekranda bir **tuş kilidi sembolü** görünüyor. Sembol varsa tablodaki ilk neden geçerli; sonraki üç adımdan senin modeline uyanı uygula.

**2. AF-107892: sol düğme 3 saniye.** Bu modelde tuş kilidi düğmeyle kumanda ediliyor: **tuş kilidini iptal etmek için sol düğme 3 saniye boyunca sağa çevrili tutulur.** Kilidi açan da kapatan da aynı hareket. Kılavuza göre kilit açıkken fırın **yalnız ON/OFF tuşuyla kapatılabilir**, diğer tuşlarla işlem yapılamaz.

**3. AF-9786: TUŞ KİLİDİ düğmesi.** Dokunmatik AF-9786'da kilidin kendi sensör düğmesi var. Kılavuzun talimatı: tuş kilidini devre dışı bırakmak için **TUŞ KİLİDİ sensör düğmesine, sembol kaybolana kadar 2 saniye boyunca dokun.** Kilit etkinken yalnız AÇIK/KAPALI düğmesi çalışıyor.

**4. AF-8685: kilit kendiliğinden devreye girer.** Bu modelde kilidi senin açman gerekmiyor: kılavuza göre **zamanlayıcı 25 saniye kullanılmazsa tuş kilidi otomatik olarak devreye girer** ve sembol sürekli yanar. Zamanlayıcı düğmelerinin kilidini açmak için kılavuzda gösterilen **kilit düğmesine 2 saniye basılı tut**, sonra istediğin işlemi yap. Saat ayarı bölümüne göre **"+" ve "–" düğmesine 2 saniye basılı tuttuğunda** da tuş kilidi devreden çıkıyor.

**5. Panelde nem var mı?** Tablodaki ikinci neden dokunmatik modellere özgü: **kumanda panelinde rutubet.** Çözüm: **rutubeti temizleyip yeniden denemek.** Paneldeki nemi kuru, yumuşak bir bezle al.

**6. Tuş aralarını temizle.** Üçüncü neden: **zamanlayıcı butonlarının arasına yabancı madde kalmış.** Vestel'in çözümü: **yabancı maddeleri temizleyip tekrar denemek.**

**7. Hâlâ tepki yoksa servis.** Vestel'in tablosunun başındaki kural: cihazın hâlâ normal çalışmıyorsa **Vestel İletişim Merkezi'ne ya da en yakın Vestel Yetkili Servisi'ne** başvur.

## Tuşlar çalışıyor ama fırın ısınmıyorsa

Kilit açıldıktan sonra tuşlar tepki veriyor ama fırın hâlâ ısıtmıyorsa sorun başka bir satırda. Vestel'in VAF serisi kılavuzu saatli modellerde **saatin ayarlanmamış olmasının** fırının çalışmamasına neden olabileceğini yazıyor; bu ve diğer nedenler kardeş yazımız [Vestel fırın ısınmıyor](/blog/vestel-firin-isinmiyor/) sayfasında. Markadan bağımsız kontroller için [fırın ısınmıyor](/blog/firin-isinmiyor/) yazısına bak.

## Ne zaman servis

- Kilit sembolü yokken, panel kuru ve temizken tuşlar hâlâ basmıyorsa.
- Ekranda ER ile başlayan bir kod görünüyorsa; Vestel ER06 ve ER09 dışındaki kodlarda fırına herhangi bir şey yapmamanı istiyor.

⛔ Kumanda panelini sökmek ya da fırının içini açmak bu rehberin konusu değil; orası Vestel Yetkili Servisi'nin işi.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.
