---
title: "Samsung telefon ekranı siyah beyaz oldu: Samsung'a göre"
description: "Samsung telefon ekranı siyah beyaz ya da tamamen siyah mı? Samsung'un Türkçe sayfalarına göre uyku modu, renk ayarı, yeniden başlatma ve şarj sırası."
slug: "samsung-telefon-ekrani-siyah-beyaz"
date: "2026-10-30"
category: "Telefon / Tablet"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk, P43 / PAKETLER #176). origin/main'de bu konuda yazı yok (samsung-telefon-donuyor ayrı konu; samsung-televizyon-ekrani-karariyor TV).
# Satırda üç ifade var (siyah oldu / siyah beyaz oldu / yeşil çizgi): belgesi olan ikisi seçildi (siyah beyaz + siyah ekran). YEŞİL ÇİZGİ için Samsung TR belgesi bulunamadı → yazıda "bu kaynaklar çizgiyi kapsamıyor" notu, adım yok.
# Arama kanıtı: PAKETLER #176: OT "samsung telefon ekran" #3,#6; WS (yeşil çizgi).
# Belgeler (#88, curl -sL -A "Mozilla/5.0", HTTP 200): (G) Samsung TR "…ekranı siyah-beyaz görünüyorsa veya renkler ters çevrilmiş görünüyorsa ne yapmalısınız?" https://www.samsung.com/tr/support/mobile-devices/what-to-do-when-your-samsung-galaxy-phone-screen-appears-in-grayscale-or-shows-inverted-colors/ (güncelleme 2026-03-30) · (A) Samsung TR "Samsung Galaxy cihazınız açılmıyorsa ne yapmalısınız" https://www.samsung.com/tr/support/mobile-devices/galaxy-phone-not-turning-on/ (güncelleme 2026-08-10).
# BİLEREK YAZILMAYANLAR: yeşil çizgi / ekran paneli onarımı (belge yok, servis) · *#0*# test kodu (forum) · fabrika ayarı · fiyat (#46) · cihaz içi müdahale.
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Samsung onaylı şarj cihazı ve kablo"]
steps:
  - "Ekranın siyah-beyaz mı, renkleri ters mi, renk filtreli mi olduğuna bak."
  - "Ayarlar > Modlar ve Rutinler > Uyku bölümünden uyku modu simgesini kaldır."
  - "Ayarlar > Erişilebilirlik > Görüş iyileştirmeleri > Renk düzeltmesini kapat."
  - "Aynı menüde Rengi tersine çevirme ve Renk filtresi seçeneklerini kapat."
  - "Ekran tamamen siyahsa Güç tuşu ile Sesi kısma tuşuna birlikte basılı tutup bekle."
  - "Samsung onaylı şarj cihazı ve kabloyla telefonu şarja tak; ekranda bir şey görünmese de şarjda bırak."
  - "Yedek bir şarj cihazı ve kabloyla dene; hâlâ görüntü yoksa servise götür."
faq:
  - q: "Samsung telefon ekranı neden siyah beyaz oldu?"
    a: "Samsung'a göre uyku modu göz yorgunluğunu azaltmak için ekranı siyah-beyaza çevirebilir. Renk düzeltmesi gibi erişilebilirlik özellikleri de açık kalmış olabilir. Ayarları kapatınca ekran normal görünümüne döner."
  - q: "Ekranda yeşil çizgi çıkıyor, bu ayarla düzelir mi?"
    a: "Yazıdaki iki Samsung sayfası ekranda yeşil çizgi sorununu kapsamıyor. Bu yüzden bu belgelere dayanarak çizgi için bir adım veremiyoruz. Çizgi sürekliyse telefonu Samsung servisine götür."
  - q: "Telefon açılmıyor, ekranda hiçbir şey yok. İlk ne yapmalıyım?"
    a: "Samsung, Güç tuşu ile Sesi kısma tuşuna aynı anda en az 7 saniye basılı tutmanı söylüyor. Samsung logosu görünüp telefon titreşince tuşları bırakabilirsin. Pil tamamen boşsa onaylı şarj cihazıyla şarj et."
  - q: "Kılıf yüzünden tuşlara basamıyor olabilir miyim?"
    a: "Evet. Samsung, her iki düğmeye de düzgün basılmasını engelliyorsa kılıfı çıkarmanı söylüyor."
images:
  coverAlt: "Masada duran bir telefon, ekranı yarı siyah beyaz yarı renkli çizim"
  steps:
    - "Yan yana duran üç telefon çizimi, biri renksiz, biri renkleri ters, biri renk filtreli"
    - "Telefon ekranında ay simgesi ve simgeyi kaldıran beyaz eldivenli sade siluet el"
    - "Ayarlar ekranında erişilebilirlik simgesine dokunan beyaz eldivenli sade siluet el"
    - "Telefon ekranında üç kapalı konumdaki anahtar çizimi"
    - "Telefonun yan tuşlarına aynı anda basan beyaz eldivenli sade siluet el"
    - "Telefonu şarj kablosuna takan beyaz eldivenli sade siluet el"
    - "Telefonu servis çalışanına uzatan beyaz eldivenli sade siluet el"
---

Samsung telefonu eline aldın, ekranda renk yok: her şey gri tonlarında. Ya da ekran tamamen siyah, hiçbir şey görünmüyor. Bu iki durumun sebebi çoğu zaman farklı, çözümü de. Bu yazıdaki adımlar **Samsung Türkiye**'nin iki destek sayfasından geliyor: siyah-beyaz ekran sayfası ve cihaz açılmıyor sayfası. Menü adları modele ve yazılım sürümüne göre değişebilir; kendi telefonunun kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> 🖤 **Önce ayrım yap:** Ekran **çalışıyor ama renksiz mi**? Yoksa **hiç görüntü yok mu**? Renksizse 1 ile 4. adımlar, görüntü hiç yoksa 5 ile 7. adımlar sana göre.

## Belgeler ne diyor

| Konu | Samsung sayfası |
|---|---|
| **Siyah-beyaz ekran** | Uyku modu ya da erişilebilirlik ayarı açık kalmış olabilir |
| **Rengi ters ekran** | Erişilebilirlik > Görüş iyileştirmeleri |
| **Ekran hiç açılmıyor** | Zorla yeniden başlatma, şarj, farklı şarj cihazı |
| **Yeşil çizgi** | Bu sayfalarda yok |

## Ekran neden siyah olur?

Samsung'un açılmıyor sayfası dört olası sebep sayıyor: kullanım sırasında geçici bir **yazılım donması**, tamamen boşalmış bir **batarya**, bir **sistem arızası** ya da bazı durumlarda cihazın devreleriyle ilgili bir **donanım sorunu**. İlk ikisini kendin deneyebilirsin: zorla yeniden başlatmak yazılım donmasını, şarj etmek de boşalmış bataryayı eler. Sistem arızası ve donanım sorunu ise servis konusu. Bu yüzden sıra, kolay olandan zor olana doğru gidiyor.

## Siyah-beyaz ekranın dört hâli

Samsung'un sayfası ekranın dört görünümünü ayırıyor: normal, siyah-beyaz, renkleri tersine çevrilmiş ve renk filtreli. Hangisinde olduğunu anlamak için ekranına bak ve aşağıdaki adımlardan sana uyanı uygula. Siyah-beyazsa 2. ve 3. adımlar, renkler tersse 4. adım, tüm ekrana bir renk tonu binmişse yine 4. adımdaki renk filtresi seçeneği sana göre. Samsung'a göre bu ayarların hepsi ya uyku modu ya da erişilebilirlik özelliği olarak açılmış. Yani ekranın bozuk olması gerekmiyor; çoğu zaman bir ayar açık kalmıştır. Bir ayarı kapattıktan sonra ekranı normal görünümüne döndürüp sonucu kontrol etmen yeterli, diğer adımlara geçmek için acele etme.

## Adım adım: ekran sorununu sırayla çöz

**1. Ekranın şu anki hâline bak.** Samsung, devam etmeden önce ekranın nasıl göründüğünü kontrol etmeni istiyor: normal mi, siyah-beyaz mı, renkler ters mi, yoksa renk filtresi mi var? Neden ve çözüm bu duruma göre değişiyor.

**2. Uyku modunu kontrol et.** Samsung'a göre uyku modu, göz yorgunluğunu azaltmak için ekranı siyah-beyaza çevirebilir. Kapatmak için: Ayarlar > Modlar ve Rutinler > Uyku > Diğer işlemler > Simgeyi kaldır > Bitti. Sonra ekranın normale dönüp dönmediğine bak.

**3. Renk düzeltmesini kapat.** Renk düzeltmesi, renkleri ayırt etmekte zorluk çekenlere yardım eden bir erişilebilirlik özelliği. Bu özelliği kullanmıyorsan: Ayarlar > Erişilebilirlik > Görüş iyileştirmeleri > Renk düzeltmesi > Kapalı.

**4. Rengi tersine çevirme ve renk filtresini kapat.** Aynı Görüş iyileştirmeleri menüsünde bunlar da var. Rengi tersine çevirme düşük görme yetisine sahip kullanıcılar için ekran renklerini tersine çevirir. Renk filtreleri ise metinleri daha okunaklı yapmak için ekranın tamamına renkli bir ton uygular. İkisini de kullanmayacaksan kapat.

**5. Ekran tamamen siyahsa yeniden başlat.** Samsung'un açılmıyor sayfası: **Güç (Yan) tuşuna** ve **Sesi kısma** tuşuna aynı anda en az **7 saniye** basılı tut. Telefon yeniden başlayacak. Samsung logosu görünüp cihaz titreştiğinde tuşları bırakabilirsin. Düğmelere aynı anda basılmazsa ses çubuğu ya da güç menüsü çıkabilir. Kılıf düğmelere doğru basmanı engelliyorsa kılıfı çıkar.

**6. Şarja tak, görüntü olmasa da bekle.** Pil tamamen boşalmış olabilir. Samsung onaylı bir şarj cihazı ve kablo bağla. Pil tamamen boşaldıysa şarj göstergesi (yıldırım simgesi) ekranda görünmeyebilir. Ekranda hiçbir şey görünmese bile cihazı şarj etmeye devam et. Yalnız Samsung onaylı şarj cihazı ve kablo kullan; eski ya da hasarlı olanlar yaralanmaya ya da cihaza zarar verebilir.

**7. Başka şarj cihazı ve kablo dene.** Şarj cihazı ya da kablodaki bir sorun yüzünden şarj düzgün çalışmıyor olabilir. Yedek bir şarj cihazın ve kablon varsa onlarla şarj etmeyi dene, ardından telefonu aç. Hâlâ görüntü yoksa telefonu yetkili servise götür.

## Ekranda çizgi varsa

Telefon ekranında yeşil ya da başka renkte çizgi görüyorsan bu yazının iki kaynağı konuyu kapsamıyor. Çizgi bu ayarlarla ilgisiz görünüyorsa ve ekran siyah-beyaz ya da renkleri ters değilse, tahmin yürütmek yerine telefonu Samsung servisine göster. Ekran panelini kendin açmak ya da parça değiştirmek bu listenin parçası değildir.

## Ayarları kapattıktan sonra

Samsung, menü adlarının ve ekran düzenlerinin cihaz modeline, yazılım sürümüne ya da uygulama sürümüne bağlı olarak değişebileceğini not ediyor. Telefon donuyorsa [Samsung telefon donuyor](/blog/samsung-telefon-donuyor/) yazısına bakabilirsin.

Yakınındaki servisi Benservis'te bul. Bil, gör, çağır.
