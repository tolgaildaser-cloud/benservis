---
title: "Telefon açılmıyor: Samsung ve Xiaomi'ye göre kontrol sırası"
description: "Telefon açılmıyor, ekran siyah mı? Samsung ve Xiaomi'nin Türkçe destek sayfalarına göre şarj, zorla yeniden başlatma, kurtarma modu ve servis sınırı."
slug: "telefon-acilmiyor"
date: "2026-10-30"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, P44 #218). Genel (markasız) yazı. origin/main'de genel telefon-acilmiyor yok; yakın: iphone-acilmiyor-apple-logosunda-kaliyor (yalnız iPhone).
# Arama kanıtı (PAKETLER.md #218): OT "telefon çalışmıyor" -> açılmıyor #1-#10; "samsung telefon açılmıyor" #1-#8; "xiaomi telefon açılmıyor" #1-#10.
# Belgeler (30 Eki, curl -sL -A "Mozilla/5.0", HTTP 200, HTML): (S) samsung.com/tr/support/mobile-devices/galaxy-phone-not-turning-on/ (güncelleme 2026-08-10) · (X) mi.com/tr/support/faq/details/KA-03338/ (Telefon Açılmıyor, tüm modeller).
# BİLEREK YAZILMAYANLAR: Huawei, Oppo (belge indirilmedi; yazı 2 üreticiyle sınırlı) · "ekran yanıp sönüyor" (belgede yok) · cihazı açma, pil/ekran değişimi · Samsung'un kurtarma modu adımı (Samsung sayfasında yok).
guide:
  difficulty: "Kolay"
  time: "~45 dakika"
  totalTime: "PT45M"
  cost: "Ücretsiz"
  tools: ["Orijinal şarj aleti ve kablo", "Yedek şarj aleti ve kablo (varsa)"]
steps:
  - "Telefonu orijinal şarj aleti ve kabloyla şarja tak; ekranda bir şey görünmese bile şarjda bırak."
  - "Yedek şarj aleti ve kablo varsa onlarla dene."
  - "Şarj aleti takılıyken telefon ısınıyor ve yanıt vermiyorsa şarjdan çıkar."
  - "Telefonu zorla yeniden başlat."
  - "Pil yeterliyse kurtarma modunu dene ve Reboot system now seçeneğini seç."
  - "Hâlâ açılmıyorsa verilerin silineceğini bilerek Wipe data seçeneğini kullan."
  - "Telefon açılmazsa ya da logoda kalırsa yetkili servise götür."
faq:
  - q: "Ekranda şarj simgesi çıkmıyor, telefon şarj oluyor mu?"
    a: "Samsung'a göre pil tamamen boşalmışsa şarj göstergesi ekranda görünmeyebilir. Ekranda hiçbir şey görünmese bile şarj etmeye devam etmeni söylüyor. Xiaomi de pil çok düşükse şarj aleti yeni takıldığında ekranın parlak olmayabileceğini, LED göstergesinin ise kırmızı yanıp sönebileceğini yazıyor."
  - q: "Zorla yeniden başlatmak için hangi tuşlara basılır?"
    a: "Samsung, Güç (Yan) düğmesi ile Sesi Kısma düğmesine aynı anda en az 7 saniye basılı tutmanı istiyor. Xiaomi ise güç düğmesine 10 saniyeden uzun süre basılı tutmanı söylüyor."
  - q: "Kurtarma modu verilerimi siler mi?"
    a: "Xiaomi'nin sırasında önce Reboot system now ile yeniden başlatma denenir. Wipe data ve Wipe all data işlemleri ise telefondaki tüm verileri siler; Xiaomi bunu açıkça belirtiyor."
  - q: "Her telefonda kurtarma modu var mı?"
    a: "Hayır. Xiaomi'nin sayfasına göre bazı eski Redmi modellerinde kurtarma modu yoktur."
images:
  coverAlt: "Ekranı siyah olan bir akıllı telefonun sade çizimi, yanında şarj kablosu"
  steps:
    - "Telefonu şarj kablosuna takan beyaz eldivenli sade siluet el"
    - "Başka bir şarj aletini prize takan beyaz eldivenli sade siluet el"
    - "Şarj kablosunu telefondan çeken beyaz eldivenli sade siluet el"
    - "Telefonun yan düğmesini basılı tutan beyaz eldivenli sade siluet el"
    - "Telefon ekranında seçenek listesi ve yanında düğmeye basan beyaz eldivenli sade siluet el"
    - "Telefondan buluta giden yedek oku ve yanında silme simgesi çizimi"
    - "Servis tezgâhına telefon bırakan beyaz eldivenli sade siluet el"
---

Güç düğmesine basıyorsun, ekran siyah kalıyor. "Telefon açılmıyor" aramasının arkasında çoğu zaman boşalmış pil, takılmış yazılım ya da şarj takımı sorunu var. Bu yazıdaki sırayı iki üreticinin Türkçe destek sayfasından aldık: **Samsung**'un "Galaxy cihazınız açılmıyorsa ne yapmalısınız" sayfası ve **Xiaomi**'nin "Telefon Açılmıyor" makalesi (tüm modeller). Kendi tahminimizi eklemedik. Markan başka biriyse aynı mantık işleyebilir ama **kendi üreticinin sayfası esastır.** Yalnız iPhone için [iPhone açılmıyor ya da Apple logosunda kalıyor](/blog/iphone-acilmiyor-apple-logosunda-kaliyor/) yazısına bak.

> ⚠️ **Önce güvenlik:** Samsung eski ya da hasarlı şarj aleti ve kablo kullanılmamasını, uyumsuz takımın yaralanmaya ya da cihaza zarar vermeye yol açabileceğini yazıyor. Telefonun içini açmak bu listenin parçası değildir.

## Adım adım: açılmayan telefon için sıra

**1. Şarja tak ve bekle.** Samsung'a göre pil tamamen boşalmış olabilir. **Samsung onaylı** şarj aleti ve kablo bağla. Pil tamamen boşaldıysa şarj göstergesi ekranda görünmeyebilir; ekranda hiçbir şey görünmese bile şarj etmeye devam et. Xiaomi telefonu orijinal şarj aletiyle **15 ila 30 dakika** şarj ettikten sonra yeniden başlatmayı denemeni söylüyor. Batarya çok düşükse ekran parlak olmayabilir, LED göstergesi **kırmızı yanıp söner.**

**2. Başka şarj takımı dene.** Şarj aleti ya da kablodaki bir sorun yüzünden şarj düzgün çalışmayabilir. Samsung, yedek şarj aletin ve kablon varsa onlarla şarj etmeni, ardından telefonu açmayı denemeni istiyor.

**3. Isınıyorsa şarjdan çıkar.** Xiaomi'ye göre orijinal şarj aleti takılıyken telefon hiçbir işleme yanıt vermiyor ve ısınıyorsa telefonu **şarjdan çıkar.** Şarj kablosunu ve şarj aletini incelenmek üzere yetkili teknik servise götürmeni istiyor.

**4. Zorla yeniden başlat.** Samsung'da **Güç (Yan)** ve **Sesi Kısma** düğmelerine aynı anda en az **7 saniye** bas. Samsung logosu görünüp telefon titreştiğinde düğmeleri bırakabilirsin. Düğmelere aynı anda basılmazsa ses çubuğu ya da güç menüsü çıkabilir; kılıf düğmelere basmayı engelliyorsa kılıfı çıkar. Xiaomi'de güç düğmesine **10 saniyeden uzun** süre bas.

**5. Kurtarma modunu dene (Xiaomi).** Pilin yeterli olduğundan eminsen, telefon kapalıyken **Ses açma** ve **güç** düğmesine birlikte basılı tutarak kurtarma moduna girmeyi dene. Bu modda dokunmatik ekran çalışmaz; yukarıdaki **Reboot** seçeneğine güç düğmesiyle dokunup çıkan ekranda **Reboot system now**'ı seç. Bu seçenek telefonu yeniden başlatır; veri silme sonraki adımdadır. Bazı eski Redmi modellerinde kurtarma modu yoktur.

**6. Son çare: veri silme (Xiaomi).** Yeniden başlatmadan sonra da açılmazsa Xiaomi kurtarma modunda **Wipe data** ve ardından **Wipe all data** işlemini öneriyor. Bu işlem telefondaki **tüm verileri siler** ve telefon sıfırlanır. Önemli verilerin yoksa ya da silinmesini kabul ediyorsan uygula. Xiaomi, telefonun açılmama durumunda önceki işlemleri dikkatlice doğrulamanı da istiyor.

**7. Servise götür.** Xiaomi, bu işlemlerden sonra da telefon açılmazsa yetkili teknik servisi öneriyor. Telefon uzun süre **Mi logosunda** kalıyorsa ve ekranın alt kısmında **Android** yazısı yoksa da servis gerekiyor. Samsung'un sayfası ise açılmama nedenleri arasında bir **donanım sorunu** da sayıyor; bu durumda kendin müdahale etme.

## Samsung ile Xiaomi arasındaki fark

| Konu | Samsung | Xiaomi |
|---|---|---|
| Zorla yeniden başlatma | Güç + Sesi Kısma, en az 7 saniye | Güç, 10 saniyeden uzun |
| Şarj | Samsung onaylı takım, ekran boş olsa da şarj | Orijinal takım, 15 ila 30 dakika |
| Kurtarma modu | Sayfada yok | Reboot, sonra Wipe data |
| Isınma | Sayfada yok | Isınıyorsa şarjdan çıkar, servis |

## Neden açılmıyor olabilir?

Samsung dört olasılık sayıyor: kullanım sırasında **geçici bir yazılım donması**, **tamamen boşalmış bir batarya**, bir **sistem arızası** ya da bazı durumlarda cihazın devreleriyle ilgili bir **donanım sorunu.** İlk ikisini yukarıdaki ilk adımlarla kendin eleyebilirsin. Son ikisi servis işidir. Samsung, zorla yeniden başlatmanın neden işe yarayabileceğini de açıklıyor: telefon geçici bir yazılım sorunu nedeniyle donmuş olabilir. Xiaomi'de ise sıra aynı mantıkla ilerliyor; önce şarj ve yeniden başlatma geliyor, veri silen adım en sona kalıyor. Bu yüzden sırayı atlamadan gitmek gerekiyor.

## Ne zaman servis?

Kullanıcının yapabileceği işler şarj takımını değiştirmek, zorla yeniden başlatmak ve Xiaomi'de kurtarma modunu denemekle sınırlı. Yeni bir şarj takımıyla ve zorla yeniden başlatmayla da ekran gelmiyorsa sorun yazılım ya da pil ötesine geçmiş olabilir. Xiaomi bu noktada yetkili teknik servisi gösteriyor, Samsung ise devre kaynaklı donanım sorununu olasılıklar arasında sayıyor. Telefonun içini açmak, pili ya da ekranı değiştirmek servis işidir.

## Servis çağırmadan önce üç not

1. Şarja taktığında **LED ya da titreşim** olup olmadığını yaz.
2. Telefonun **ısınıp ısınmadığını** not et.
3. Açılmama öncesinde **düşme, sıvı teması ya da güncelleme** olup olmadığını hatırla.

Bu notlarla servise gitmek işi hızlandırır. Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
