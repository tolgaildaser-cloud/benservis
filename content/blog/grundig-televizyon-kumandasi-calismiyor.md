---
title: "Grundig televizyon kumandası çalışmıyor"
description: "Grundig TV kumandası tepki vermiyorsa kılavuzun sırası: kumandayı TV'ye doğrultma, iki AAA pil, TV'yi 2 dakika kapatma, Bluetooth kumandayı sıfırlayıp eşleme."
slug: "grundig-televizyon-kumandasi-calismiyor"
date: "2026-10-03"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2, televizyon). Belgeler bu koşuda (10:3x) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf, Grundig'in kendi alan adı download.grundig.com (adres yalnız belgenin yerini bulmak için web aramasıyla bulundu).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-tv-3eki/ · pdftotext -layout; sayfa = PDF sayfası. Düğme simgeleri metin katmanında harf olarak çıkıyor (»p« = Home/ev simgesi, »<« = sol yön); s.16 sayfa görüntüsünden ve s.80'deki »<«, »>«, »V«, »Λ« yön tuşu dizisinden doğrulandı.
#  G1) Grundig "Televizyon Kullanma Kılavuzu" 65 GGU 8960 B, 124 s., md5 c83f3a52698c0fa73290d0aa44aeeef7
#      http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_DCL000_MDM2_USER_MANUAL_FILE_tr_TR_20211217_084401.pdf
#      s.114 Sorun giderme: "Aşağıdaki belirtilen çözümler işe yaramazsa, lütfen yetkili GRUNDIG satıcısı ile iletişim kurun. Arızalara video kayıt cihazları veya uydu alıcıları gibi harici cihazların da neden olabileceğini unutmayın." / "Uzaktan kumanda çalışmıyor | Optik bağlantı yok | Uzaktan kumandayı televizyon setine doğru tutun" / "Uzaktan kumanda pilleri | Pilleri kontrol edin, gerekirse değiştirin" / "Çalışma koşulu tanımsız | Varsa ana güç düğmesine basarak yada fişi prizden çekerek televizyonu yaklaşık 2 dakika kapatın"
#      s.12 "Uzaktan kumandaya pillerin takılması · 1 Pil bölmesini açın. 2 Pil bölmesinin alt kısmındaki işaretlere göre pilleri takın (2 × Alkaline/LR03/AAA). 3 Pil bölmesini kapatın." / "Not: Televizyon cihazınız uzaktan kumandanın komutlarına artık tam olarak reaksiyon göstermiyorsa piller bitmiş olabilir. Bitmiş piller, kesinlikle pil yuvasında bırakılmamalıdır."
#      s.5 "Şebeke bağlantısı kesildiğinde bekleme LED'i söner. Bekleme LED'i yanıyorsa ürününüz şebekeye bağlı demektir." / "Sadece aynı türden (marka, ebat, özellik) pilleri kullanın. Kullanılmış ve yeni pilleri birlikte kullanmayın."
#      s.16 İlk kurulum: "5 Bluetooth kumandayı eşleştirmek için »p« ve < düğmelerine aynı anda 5 sn. basılı tutun. – Kumanda üzerinde beyaz led yanıp sönmeye başlar. 6 Menüde taranıp bulunan Bluetooth cihazlar görüntülenir. »Android TV Remote Control« öğesini seçip » düğmesine basın. – Kumanda ile televizyon eşleştirme işlemi tamamlanır." / "Önemli: Bluetooth kumandada eşleme sorunu yaşamanız durumunda kumandayı sıfırlamanız gerekir bunun için; kumandanın »p« ve < düğmelerine aynı anda 5 sn. basılı tutun."
#      s.80 "UZAKTAN KUMANDALAR VE AKSESUARLAR · Televizyonunuza çeşitli aksesuarlar örneğin Bluetooth uzaktan kumanda, oyun kumandası, klavye veya mouse bağlayabilirsiniz." / "1 »p« düğmesine basın. 2 »<«, »>«, »V« veya »Λ« düğmesiyle Ayarlar öğesini seçip ... onaylayın. 3 »V« düğmesiyle »Uzaktan Kumandalar ve Aksesuarlar« öğesini seçip ... onaylayın. – ... menüsü görüntülenir ve aksesuarlar aranmaya başlar. 4 Bulunan aksesuarlar menüde görüntülenir. 5 Eşleştirmek istediğiniz aksesuarı menüden ... seçip ... onaylayın."
#  G2) Grundig "Televizyon Kullanma Kılavuzu" 65 GGU 7900 B, 124 s., md5 1c9a79733cf0ea0b82aa603bd43966d5 — http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_DFV000_MDM2_USER_MANUAL_FILE_tr_TR_20211217_085338.pdf — aynı satırlar aynı sayfalarda (s.5, 12, 16, 80, 114).
# GRUP YAKIN KOPYASI: Arçelik/Beko/Grundig/Altus grubunda yayında televizyon kumandası sayfası yok; bu koşuda grup içinden yalnız Grundig yazıldı. Yayındaki tek Arçelik dayanaklı TV sayfası televizyon-kendi-kendine-kapaniyor (otomatik kapanma) — farklı belirti.
# BİLEREK YAZILMAYANLAR: ana güç düğmesinin yeri (kılavuz "varsa" diyor) · kızılötesi menzil/açı değeri (belgede yok) · kumandanın kendisinin arızası ya da yedek kumanda (belgede yok) · fiyat.
# Alıntı denetim tablosu: grundig-televizyon-kumandasi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["2 adet LR03/AAA alkalin pil"]
steps:
  - "Televizyonun bekleme LED'inin yandığını kontrol et; LED sönükse önce fişin prizde olduğundan emin ol."
  - "Kumandayı televizyona doğru tutarak yeniden dene."
  - "Pil bölmesini aç, eski pilleri çıkar ve 2 yeni LR03/AAA alkalin pili bölmedeki işaretlere göre tak."
  - "Ana güç düğmesi varsa ona basarak ya da fişi çekerek televizyonu yaklaşık 2 dakika kapalı tut, sonra aç."
  - "Bluetooth kumandada eşleme sorunu varsa ev (Home) tuşu ile sol yön tuşuna aynı anda 5 saniye basılı tutarak kumandayı sıfırla."
  - "Kumandadaki beyaz LED yanıp sönerken ekranda listelenen Android TV Remote Control'ü seçip onayla."
  - "Kumanda yine çalışmıyorsa harici cihazları ayırıp dene, sürerse yetkili Grundig satıcısına başvur."
faq:
  - q: "Grundig televizyon kumandası neden çalışmaz?"
    a: "Grundig kılavuzunun sorun giderme tablosu 'Uzaktan kumanda çalışmıyor' satırında üç neden veriyor: optik bağlantı yok (kumandayı televizyona doğru tutman gerekir), uzaktan kumanda pilleri (kontrol et, gerekirse değiştir) ve tanımsız çalışma koşulu (televizyonu ana güç düğmesiyle ya da fişten çekerek yaklaşık 2 dakika kapat)."
  - q: "Grundig kumandaya hangi pil takılır?"
    a: "65 GGU 8960 B ve 65 GGU 7900 B kılavuzlarına göre kumandaya 2 adet Alkaline/LR03/AAA pil, pil bölmesinin alt kısmındaki işaretlere göre takılır. Kılavuz yalnız aynı tür (marka, ebat, özellik) pil kullanmanı, eski ve yeni pilleri birlikte kullanmamanı ve bitmiş pilleri bölmede bırakmamanı istiyor."
  - q: "Grundig Bluetooth kumanda eşleşmiyor, nasıl sıfırlanır?"
    a: "Kılavuza göre Bluetooth kumandada eşleme sorunu yaşarsan kumandayı sıfırlaman gerekir: ev simgeli Home tuşu ile sol yön tuşuna aynı anda 5 saniye basılı tut. Kumandadaki beyaz LED yanıp sönmeye başlar, ekranda bulunan Bluetooth cihazlar listelenir; Android TV Remote Control'ü seçip onaylayınca eşleşme tamamlanır."
  - q: "Kumandayı kurulumdan sonra yeniden eşlemek için menü var mı?"
    a: "Var. Grundig kılavuzunun Uzaktan Kumandalar ve Aksesuarlar bölümüne göre Home tuşuna basıp Ayarlar'a, oradan Uzaktan Kumandalar ve Aksesuarlar'a girdiğinde televizyon aksesuarları aramaya başlar; bulunan kumandayı listeden seçip onaylarsın."
images:
  coverAlt: "Oturma odasında açık bir televizyonun önünde, sehpanın üzerinde pil kapağı çıkarılmış siyah bir kumanda ve yanında iki yeni ince kalem pil"
---

Kumandaya basıyorsun, televizyon tepki vermiyor. Grundig'in televizyon kılavuzu bu durumu sorun giderme tablosunda **"Uzaktan kumanda çalışmıyor"** satırıyla veriyor ve üç neden sayıyor. İlki en basiti: **"Optik bağlantı yok"**, çözümü **"Uzaktan kumandayı televizyon setine doğru tutun"**. İkincisi piller. Üçüncüsü ise kılavuzun "tanımsız çalışma koşulu" dediği durum; Grundig burada televizyonu **"yaklaşık 2 dakika"** kapalı tutmayı öneriyor. Bu kılavuzlardaki modellerde Bluetooth kumanda da var; kılavuz eşleşme bozulduğunda kumandayı iki tuşla sıfırlamayı anlatıyor. Bu yazıda Grundig'in sırasını 65 GGU 8960 B ve 65 GGU 7900 B kılavuzlarına dayanarak veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Bekleme LED'i yanıyor mu? Kumandayı televizyona doğru tut. İki yeni LR03/AAA alkalin pil tak. Televizyonu ana güç düğmesiyle ya da fişten 2 dakika kapat. Bluetooth kumandada Home + sol yön tuşuna 5 saniye bas, Android TV Remote Control'ü seç. Sürerse → yetkili Grundig satıcısı.

## Grundig'in tablosu

| Grundig'in yazdığı neden | Grundig'in çözümü | Kimin işi |
|---|---|---|
| Optik bağlantı yok | Kumandayı televizyona doğru tut | Senin |
| Uzaktan kumanda pilleri | Pilleri kontrol et, gerekirse değiştir | Senin |
| Çalışma koşulu tanımsız | Ana güç düğmesiyle ya da fişten çekerek yaklaşık 2 dakika kapat | Senin |
| Bluetooth kumandada eşleme sorunu | Home + sol yön tuşuna 5 saniye basılı tutarak sıfırla | Senin |
| Çözümler işe yaramıyor | Yetkili Grundig satıcısı | Yetkili satıcı / servis |

## Adım adım: evde denenecekler

**1. Bekleme LED'i.** Televizyonun bekleme LED'inin yandığını kontrol et; LED sönükse önce fişin prizde olduğundan emin ol. Grundig kılavuzuna göre bekleme LED'i yanıyorsa televizyon şebekeye bağlıdır, şebeke bağlantısı kesildiğinde LED söner.

**2. Doğrultma.** Kumandayı televizyona doğru tutarak yeniden dene. Grundig'in tablosundaki ilk neden "optik bağlantı yok", çözümü de kumandayı televizyon setine doğru tutmak.

**3. Piller.** Pil bölmesini aç, eski pilleri çıkar ve 2 yeni LR03/AAA alkalin pili bölmedeki işaretlere göre tak. Kılavuza göre televizyon kumandanın komutlarına artık tam tepki vermiyorsa piller bitmiş olabilir. Aynı marka ve türde pil kullan, eskiyle yeniyi karıştırma, bitmiş pili bölmede bırakma.

**4. İki dakika kapatma.** Ana güç düğmesi varsa ona basarak ya da fişi çekerek televizyonu yaklaşık 2 dakika kapalı tut, sonra aç. Grundig bunu "çalışma koşulu tanımsız" durumu için veriyor; ana güç düğmesi her modelde yok, yoksa fişi çekmek yeterli.

**5. Bluetooth kumandayı sıfırlama.** Bluetooth kumandada eşleme sorunu varsa ev (Home) tuşu ile sol yön tuşuna aynı anda 5 saniye basılı tutarak kumandayı sıfırla. Kılavuz bu iki tuşu ev simgesi ve sol ok simgesiyle gösteriyor; eşleşmeye geçen kumandanın üzerinde beyaz LED yanıp sönmeye başlar.

**6. Yeniden eşleme.** Kumandadaki beyaz LED yanıp sönerken ekranda listelenen Android TV Remote Control'ü seçip onayla. Grundig'e göre bununla kumanda ile televizyonun eşleşmesi tamamlanır. Aynı işlemi sonradan Home > Ayarlar > Uzaktan Kumandalar ve Aksesuarlar menüsünden de başlatabilirsin.

**7. Harici cihazlar ve servis.** Kumanda yine çalışmıyorsa harici cihazları ayırıp dene, sürerse yetkili Grundig satıcısına başvur. Grundig'in sorun giderme bölümü arızalara video kayıt cihazları ya da uydu alıcıları gibi harici cihazların da yol açabileceğini hatırlatıyor ve çözümler işe yaramazsa yetkili satıcıyla iletişim kurmanı istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Bekleme LED'i, doğrultma, pil, iki dakika kapatma, Bluetooth sıfırlama ve eşleme | Senin, bu rehberdeki adımlar |
| Bekleme LED'i fiş takılıyken de sönük | Yetkili Grundig satıcısı ya da servis |
| Yeni pil, sıfırlama ve eşlemeye rağmen kumanda çalışmıyor | Yetkili Grundig satıcısı |

⛔ Kumandayı ya da televizyonu açıp içini kurcalama; kılavuzdaki adımların dışı yetkili servisin işidir.

Televizyon hiç açılmıyorsa markadan bağımsız [TV açılmıyor](/blog/tv-acilmiyor/) yazısına, kumanda çalışıyor ama televizyon bir süre sonra kendini kapatıyorsa [televizyon kendi kendine kapanıyor](/blog/televizyon-kendi-kendine-kapaniyor/) yazısına bak.

---

**Kaynak künyesi.** Sorun giderme tablosu, pil takma bölümü, bekleme LED'i notu, ilk kurulumdaki Bluetooth kumanda eşleme ve Uzaktan Kumandalar ve Aksesuarlar menüsü Grundig'in download.grundig.com'daki 65 GGU 8960 B ve 65 GGU 7900 B televizyon kullanma kılavuzlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
