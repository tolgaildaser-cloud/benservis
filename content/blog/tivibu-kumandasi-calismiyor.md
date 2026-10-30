---
title: "Tivibu kumandası çalışmıyor: kılavuza göre kontrol"
description: "Tivibu kumandası çalışmıyorsa Tivibu STB kılavuzunun sırası: kızılötesi ya da Bluetooth modu, pil, yakınlık, yeniden eşleştirme, kutuyu yeniden başlatma."
slug: "tivibu-kumandasi-calismiyor"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P36 satır #191). Satırda Tivibu + Digiturk var; en güçlü tek konu Tivibu (OT "tivibu kumanda" #2,#5,#6,#10; Digiturk #4,#10) seçildi, markalı yazı. origin/main'de Tivibu/Digiturk yazısı yok. Yakın sayfalar: tv-acilmiyor, lg-/grundig-televizyon-kumandasi-calismiyor.
# Arama kanıtı (30 Eki, Google otomatik tamamlama hl=tr gl=tr): "tivibu kumanda" → 1. tivibu kumanda · 2. tivibu kumandası çalışmıyor · 5. tivibu kumanda tuşları çalışmıyor · 6. …çalışmıyor ne yapmalıyım · 8. …ses tuşu çalışmıyor · 10. tivibu kumandası kilitlendi nasıl açılır. "kumanda çalışmıyor" → 9. tivibu kumanda çalışmıyor. BOSLUK.md #191.
# Belge (üreticinin kendi belgesi; konumu tivibu.com.tr/destek/tivibu-ev/teknik-destek sayfasındaki "kullanım kılavuzu" bağlantısından bulundu): Tivibu ZTE Android Box (ZXV10 B600) STB kutu kullanım kılavuzu, 24 s.  https://www.tivibu.com.tr/uploads/docs/Tivibu-ZTE-Android-Box-STB-Kutu-Kullanim-Kilavuzu.pdf  HTTP 200 application/pdf  md5 270902216764dc980ed9ac4b661fe134
# Sayfalar (PDF sayfası; basılı numara 3 eksik): s.4 (15 saniye bekleme), s.6 (paket içeriği), s.9 (RESET düğmesi), s.14 (kumanda notları, Bluetooth eşleştirme), s.15 (kızılötesi eşleştirme), s.17 (kurulum), s.21-23 (sorun giderme tablosu); "Cihazı sökmeyin" s.4.
# BİLEREK YAZILMAYANLAR: Bluetooth eşleştirme tuşlarının adı (simge metin katmanında yok) · 1+8, 1+6, 9-9-6 gibi tuş kombinasyonları (üçüncü taraf kaynak, Tivibu belgesinde yok) · Digiturk adımları (ayrı yazı konusu) · kutuyu fabrika ayarına döndürme (belgede kumanda sorunu için önerilmiyor) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["AAA pil", "Tivibu kutusunun kılavuzu"]
steps:
  - "Kumandanın kızılötesi mi Bluetooth mu çalıştığını bil."
  - "Kızılötesi modda kumandanın önünü kutunun alıcı alanına doğrult, aradaki engeli kaldır."
  - "Pil kapağını aç, iki AAA pilin kutup işaretlerine uyduğunu kontrol et."
  - "Pilleri yenileriyle değiştir."
  - "Bluetooth eşleştirmesi bozulduysa kılavuzdaki iki düğmeye üç saniye basarak eşleştirmeyi yeniden başlat."
  - "Kutuyu kapat, en az on beş saniye bekleyip yeniden aç."
  - "Televizyon tuşları için kızılötesi eşleştirmeyi kılavuzdaki sırayla yap."
faq:
  - q: "Tivibu kumandası neden çalışmıyor?"
    a: "Tivibu STB kılavuzunun sorun giderme tablosu dört neden veriyor: kumanda fiziksel olarak hasar görmüş olabilir, Bluetooth eşleştirmesi başarısız olmuş olabilir, pil yoktur ya da ters takılıdır, piller bitmiştir. Komut alınamıyorsa kumandayı kutuya yaklaştırmanı ve aradaki engelleri kaldırmanı istiyor."
  - q: "Tivibu kumandası nasıl resetlenir?"
    a: "Tivibu kılavuzunda kumandanın kendisini sıfırlayan bir tuş kombinasyonu geçmiyor. Kumanda için yeniden Bluetooth eşleştirmesi ve kızılötesi eşleştirme tarifleri var. Kılavuz kutunun arkasındaki RESET düğmesini kutuyu sıfırlama düğmesi olarak veriyor; bu kumanda sorununun ilk adımı değil."
  - q: "Tivibu kumandası kilitlendi, nasıl açılır?"
    a: "Kılavuzda kumanda kilidi diye bir kavram geçmiyor. Tepki vermeyen kumanda için kılavuzun sırası: pil, kutup yönü, kutuya yakınlık ve engel, Bluetooth eşleştirmesi. Olmazsa kılavuz kutuyu yeniden başlatmanı ya da müşteri hizmetlerini aramanı söylüyor."
  - q: "Tivibu kumandası televizyonu açmıyor, ses tuşları çalışmıyor. Ne yapmalıyım?"
    a: "Tivibu kılavuzu kumandanın televizyon tuşlarını kızılötesi eşleştirmeyle öğrenmesini anlatıyor: Giriş tuşunu beş saniyeden fazla basılı tutup kırmızı ışık yanınca bırakırsın, televizyon kumandasını yaklaşık iki santim yakına koyar, önce Tivibu kumandasında Giriş ya da TV tuşuna, sonra öğretilecek tuşa basarsın. Işık üç kez yavaş yanıp sönerse tuş eşleşmiş demektir."
images:
  coverAlt: "Oturma odasında televizyonun altındaki set üstü kutu, sehpada kumanda ve iki pil"
  steps:
    - "Kumandayı ve yanındaki set üstü kutuyu gösteren beyaz eldivenli sade siluet el"
    - "Kumandayı set üstü kutuya doğrultan beyaz eldivenli sade siluet el, araya giren kitabı kenara alan ikinci el"
    - "Açık pil yuvasında pillerin artı ve eksi yönünü kontrol eden beyaz eldivenli sade siluet el"
    - "Kumandaya yeni iki pil yerleştiren beyaz eldivenli sade siluet el"
    - "Kumandanın iki düğmesini basılı tutan beyaz eldivenli sade siluet el, kumandada yanıp sönen küçük ışık"
    - "Set üstü kutunun güç fişini prizden çeken beyaz eldivenli sade siluet el, yanında bekleyen saat çizimi, okunur rakam yok"
    - "İki kumandayı uç uca tutan beyaz eldivenli sade siluet el"
---

Tivibu kumandasına basıyorsun, kutu ve televizyon tepki vermiyor. Tivibu'nun kendi Türkçe kutu kılavuzunda "Uzaktan kumanda çalışmıyor" için bir sorun giderme satırı var ve kumandanın iki ayrı çalışma biçimini anlatıyor: varsayılan olarak kızılötesi, eşleştirilince Bluetooth. Kılavuz dışında dolaşan tuş kombinasyonlarını almadık; yalnız belgede yazanı sıraladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kumandanın önünü kutuya doğrult, aradaki engeli kaldır, kumandayı kutuya yaklaştır. İki AAA pilin yönünü kontrol et, gerekirse yenile. Bluetooth eşleştirmesi bozulduysa kılavuzdaki iki düğmeye üç saniye bas. Olmadı mı kutuyu kapatıp en az 15 saniye sonra aç. Sürerse → müşteri hizmetleri.

## Kılavuzun sorun giderme satırları

| Neden | Kılavuzun çözümü |
|---|---|
| Kumanda fiziksel olarak hasar görmüş | Yenisiyle değiştir |
| Bluetooth eşleştirmesi başarısız | İki düğmeye aynı anda 3 saniye bas |
| Pil yok ya da ters takılı | Pilleri doğru şekilde tak |
| Piller bitmiş | Pilleri değiştir |
| Komut alınamıyor | Kumandayı kutuya yaklaştır, engelleri kaldır, Bluetooth eşleştirmesini kontrol et |
| Başka bir neden | Kutuyu yeniden başlat ya da müşteri hizmetlerini ara |

## Adım adım: kontrol sırası

**1. Modunu bil.** Tivibu kılavuzuna göre kumanda **varsayılan olarak kızılötesi modda** çalışır. Bluetooth eşleştirmesi başarılı olunca kızılötesi mod devre dışı kalır. Hangi modda olduğun, sonraki adımlardan hangisinin işe yarayacağını belirler. Kılavuz, verilen kumandanın IPTV hizmet sağlayıcısına bağlı olduğunu ve resmin yalnız referans olduğunu da not ediyor.

**2. Doğrult, engeli kaldır.** Kızılötesi modda kumandanın **ön kısmını kutunun kızılötesi alıcı alanına doğrultman** gerekir. Sorun giderme satırı da aynısını söylüyor: kumandayı kutuya daha yakın kullan, kumanda ile kutu arasındaki engelleri kaldır.

**3. Pilleri kontrol et.** Kumanda iki AAA pille çalışır; pilleri üzerindeki kutupluluk işaretlerine göre takarsın. Kılavuzun paket içeriği listesinde kumandanın yanında AAA pil de sayılıyor. Tabloda "pil yok veya piller ters takılmış" satırının çözümü: pilleri doğru şekilde tak.

**4. Pilleri değiştir.** "Piller bitmiş" satırının çözümü tek cümle: pilleri değiştir.

**5. Eşleştirmeyi yenile.** Tabloda "Bluetooth eşleştirmesi başarısız oldu" satırı var. Çözüm: kılavuzdaki iki düğmeye **aynı anda 3 saniye** bas. Kumandanın göstergesi eşleştirme başladığında **30 saniye** yanıp söner; 30 saniye sonunda kumanda eşleştirme modundan çıkar ve ışık kapanır. İki düğmenin adı simge olarak basılı, o yüzden kendi kılavuzundaki resme bak.

**6. Kutuyu yeniden başlat.** Kılavuzun "diğer sorunlar" satırı kutuyu yeniden başlatmanı ya da müşteri hizmetlerini aramanı söylüyor. Güvenlik bölümü de kutuyu kapattıktan sonra yeniden açmadan önce **en az 15 saniye** beklemeni istiyor. Kılavuz bu satırda başka bir ev çözümü vermiyor; kutuyu yeniden başlatmak evde son adım, sonrası müşteri hizmetleri.

**7. Televizyon tuşlarını öğret.** Kumandanın televizyonu açıp ses vermesini istiyorsan kılavuzda kızılötesi eşleştirme var: Giriş tuşunu beş saniyeden fazla basılı tut, kırmızı ışık yanınca bırak. Televizyon kumandasını bu kumandaya yaklaşık 2 cm uzaklıkta, vericileri karşı karşıya gelecek şekilde yerleştir. Tivibu kumandasında Giriş (ya da TV) tuşuna bas; ışık yanıp sönmeye başlar. Sonra televizyon kumandasında öğretilecek fonksiyon tuşuna bir kez bas. Işık üç kez yavaşça yanıp sönüp sabit kalırsa tuş eşleşmiştir. Hızlı beş yanıp sönme, işlemin başarısız olduğunu gösterir. Çıkmak için BACK'e bas.

## Kumanda çalışıyor ama ekran boşsa

Tuşlara basınca kumandanın ışığı tepki veriyorsa sorun kumandada olmayabilir. Kılavuzun "TV ekranında görüntü yok" satırı üç neden sayıyor: kutu bekleme modunda olabilir, HDMI kablosu düzgün bağlanmamış olabilir, televizyonun video giriş kaynağı doğru ayarlanmamış olabilir. Çözümler sırasıyla kutuyu açmak, HDMI kablosunu tekrar bağlamak ve televizyonun giriş kaynağını değiştirerek kutunun ekranını bulmak. Işığa da bak: Sesli Komut tuşunu basılı tuttuğunda kumanda göstergesi sabit yanar, tuşu bırakınca söner. Eşleştirme sırasında gösterge 30 saniye yanıp söner.

Kutuyu ilk kurarken de kumandanın eşleştirmesi ilk adım. Kılavuzdaki kurulum sırası dil seçimi ve Wi-Fi bağlantısından önce gelir. Kılavuzun başlangıç kurulumu "Uzaktan kumandanın eşleştirmesini tamamlayın" diye başlıyor ve eşleştirme bölümüne yönlendiriyor; bu yüzden yeni kurulan kutuda kumanda tepkisizse önce 5. adıma dön.

## Ne zaman servis?

- Pil yeni, eşleştirme yenilenmiş ve kutu yeniden başlatılmış olmasına rağmen kumanda tepkisizse
- Kumanda fiziksel olarak hasar görmüşse
- Kutu hiç açılmıyorsa

⛔ Kutunun kapağını açma; kılavuz "Cihazı sökmeyin" diyor.

Televizyonun kendisi açılmıyorsa [TV açılmıyor](/blog/tv-acilmiyor/) yazısına bak.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Sorun giderme tablosu, kumanda notları, Bluetooth ve kızılötesi eşleştirme Tivibu'nun ZTE Android Box kutu kullanım kılavuzundan alınmıştır. Kumanda ve kutu modeli değişebilir; kendi kılavuzun farklı bir tarif veriyorsa **kendi kılavuzun esastır.**
