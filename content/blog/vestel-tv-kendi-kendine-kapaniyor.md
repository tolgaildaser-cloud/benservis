---
title: "Vestel TV kendi kendine kapanıyor: kılavuzdaki nedenler"
description: "Vestel TV kendini kapatıyorsa kılavuzdaki iki otomatik bekleme olabilir: sinyal yok zamanlayıcısı ve otomatik güç kesme. Mesaj ve menü yolu."
slug: "vestel-tv-kendi-kendine-kapaniyor"
date: "2026-10-30"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P39 (YK #197 boşluk, BOSLUK.md #229). Slug origin/main'de yok (doğrulayıcı). Yakın yazılar: vestel-televizyon-acilmiyor (adım 6 + SSS aynı iki ayarı kısaca anıyor), vestel-televizyon-sinyal-yok, televizyon-kendi-kendine-kapaniyor (markasız, Arçelik/Philips). Bu yazı Vestel'e özel ve ayarların tamamını menü yoluyla anlatan tek sayfa.
# Kaynak (#88): Vestel kendi kılavuzları, yerel kopya (3 Eki koşusunda statik.vestel.com.tr'den indirilmişti, bu koşuda yeni indirme yok).
#  V1) 43U9540 43" 4K Smart TV Kullanım Kılavuzu, 73 s., md5 5051f2408bc00470c905cab3dfc7b548, PDF s.11-12 (Bekleme Bildirileri), s.34 (Sinyal Yok Zamanlayıcısı), s.39 (Otomatik güç kesme, Bekleme Modu LED'i), s.45 (Sorun Giderme).
#  V2) HD 32T01900 Smart TIVO TV Kullanım Kılavuzu, 67 s., md5 0e66c6817169e6ce0c3280d53f0c1bc3, PDF s.11-12, s.31, s.36 (aynı iki ayar).
# Başlık vaadi: "kendi kendine kapanıyor" belirtisi iki kılavuzda da tanımlı (Bekleme Bildirileri bölümü). "Donuyor", "101'den başlıyor", "YouTube girmiyor" belirtileri Vestel belgesinde tanımlı değil, o yüzden yazılmadı.
# BİLEREK YAZILMAYANLAR: ücret (#46) · gövde açma, anakart/güç kartı yorumu (servis) · belgede olmayan "ısınma/aşırı ısınma" nedeni · yazılım güncelleme sonrası yeniden başlama (kapanma sayılmaz) · fabrika ayarı (kayıtlı kanalları siler).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda"]
steps:
  - "Televizyonu yeniden açınca ekranda çıkan bekleme mesajını oku."
  - "Mesaj sinyalden söz ediyorsa izlediğin kaynağın (anten ya da HDMI) görüntü verdiğini kontrol et."
  - "Ayarlar > Cihazlar menüsünde Sinyal Yok Zamanlayıcısı'nı kapat."
  - "Mesaj işlem yapılmadığını söylüyorsa Ayarlar > Sistem > Diğer Seçenekler'de Otomatik Güç Kesme'yi Kapalı yap ya da süreyi uzat."
  - "İzlerken kapanma penceresi çıkarsa Hayır'ı ya da Devre dışı'yı seç."
  - "Bekleme modu LED'i Kapalıysa Açık yap ki televizyonun bekleme modunda olduğunu ışıktan anlayabil."
  - "Mesaj çıkmıyor ve ayarlar durumu açıklamıyorsa televizyonu açma, Vestel İletişim Merkezi'ni ya da yetkili servisi ara."
faq:
  - q: "Vestel televizyon neden kendi kendine kapanıyor?"
    a: "Vestel'in 43U9540 ve 32T01900 kılavuzları televizyonun bekleme moduna kendiliğinden geçtiği iki durum yazıyor. Biri sinyal yok zamanlayıcısı: televizyon üç dakika boyunca anten ya da HDMI kaynağından hiç giriş sinyali almazsa bekleme moduna geçiyor. Diğeri otomatik güç kesme: televizyon açık bırakılıp ayarlanan süre kadar işlem yapılmazsa süre dolduğunda bekleme moduna geçiyor. İkisi de arıza değil, menüden değiştirilen ayar."
  - q: "Otomatik güç kesme kaç saatte kapatır?"
    a: "Kılavuza göre ayar Ayarlar > Sistem > Diğer Seçenekler menüsünde duruyor ve varsayılan olarak bir ile sekiz saat arasında, bir saat aralıkla ayarlanabiliyor. Ayar Kapalı yapılmadıysa televizyon açık kaldığı ve işlem yapılmadığı süre dolunca bekleme moduna geçiyor."
  - q: "Kapanmadan önce uyarı çıkıyor mu?"
    a: "Evet. Kılavuza göre televizyon bekleme moduna geçmeden önce bir iletişim penceresi gösteriyor. Hiçbir tuşa basılmazsa yaklaşık beş dakika sonra bekleme moduna geçiyor. Evet'i seçersen hemen kapanıyor, Hayır'ı seçersen açık kalıyor, Devre dışı'yı seçersen otomatik güç kesme Kapalı olarak ayarlanıyor."
  - q: "Ayarları kapattım ama kapanma sürüyor, ne yapmalıyım?"
    a: "Vestel kılavuzunun sorun giderme bölümü, cihaz önerilen çözümlerden sonra da normal çalışmıyorsa Vestel İletişim Merkezi'ne ya da en yakın yetkili servise başvurulmasını istiyor. Televizyonun gövdesini açmak kullanıcı işi değildir."
images:
  coverAlt: "Oturma odasında televizyonun ekranı kararmış, yalnız bekleme ışığı yanıyor; sehpada bir kumanda duruyor"
  steps:
    - "Televizyon ekranındaki bekleme mesajı ve kumandayı tutan beyaz eldivenli sade siluet el"
    - "Televizyonun yanında anten kablosu ve HDMI kablosu, kabloyu işaret eden beyaz eldivenli sade siluet el"
    - "Televizyon ekranında ayar menüsü, kumandayla seçeneği kapalı konuma getiren beyaz eldivenli sade siluet el"
    - "Televizyon ekranında süre seçeneği, kumandayla kapalı seçeneğini seçen beyaz eldivenli sade siluet el"
    - "Ekrandaki uyarı penceresinde hayır seçeneğini seçen beyaz eldivenli sade siluet el"
    - "Televizyonun alt kenarında yanan küçük bekleme ışığı ve kumandalı beyaz eldivenli sade siluet el"
    - "Televizyonun yanında telefon simgesi ve servis çağırma çizimi"
---

Televizyon film ortasında ya da gece açık kalınca kendini kapatıyor ve ilk akla gelen şey arıza oluyor. Vestel'in 43U9540 ve 32T01900 kullanma kılavuzları ise televizyonun kendini bilerek bekleme moduna aldığı iki durum anlatıyor. İkisi de menüden değiştirilebiliyor. Bu yazıda iki ayarı, ekranda çıkan mesajlarla eşleştirerek sırayla anlatıyoruz. Seçenek adları modele göre değişebilir, kendi kılavuzuna da bak.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Televizyonu açınca çıkan mesaj nedeni söylüyor. "Sinyal alınamadığı için" yazıyorsa Ayarlar > Cihazlar'daki Sinyal Yok Zamanlayıcısı, "işlem yapılmadığı için" yazıyorsa Ayarlar > Sistem > Diğer Seçenekler'deki Otomatik Güç Kesme devrede. İkisi de kapatılabilir. Mesaj yoksa servise bırak.

> ⚠️ **Bu yazı ayar rehberidir, tamir değil.** Ayarlar kapanmayı açıklamıyorsa iş servise aittir; televizyonun arka kapağı açılmaz ve içine dokunulmaz.

## Vestel'in iki otomatik kapanması

| Ayar | Ne zaman kapatır | Açılışta çıkan mesaj | Menü yolu |
|---|---|---|---|
| Sinyal Yok Zamanlayıcısı | Üç dakika hiç giriş sinyali gelmezse (anten ya da HDMI) | "Uzun bir süre boyunca sinyal alınamadığı için TV otomatik olarak bekleme moduna geçti." | Ayarlar > Cihazlar |
| Otomatik Güç Kesme | Ayarlı süre (bir ile sekiz saat) işlem yapılmazsa | "Uzun bir süre boyunca işlem yapılmadığı için TV otomatik olarak bekleme moduna geçti." | Ayarlar > Sistem > Diğer Seçenekler |

## Adım adım: kapanmanın nedenini bul ve ayarla

**1. Mesajı oku.** Kılavuza göre televizyon bu iki sebepten biriyle bekleme moduna geçtiyse bir sonraki açılışta ekranda yukarıdaki cümlelerden birini gösteriyor. Televizyonu açınca ekrana bak. Hangi cümleyi gördüğün, aşağıda hangi adıma gideceğini belirliyor.

**2. Kaynağı kontrol et.** Mesaj sinyalden söz ediyorsa televizyon üç dakika boyunca anten ya da HDMI kaynağından görüntü almamış demek. İzlediğin kaynak bir HDMI cihazıysa (alıcı, oyun konsolu) cihazın açık ve görüntü verir durumda olduğundan emin ol. Kaynağı kumandanın Source tuşuyla değiştirebilirsin.

**3. Sinyal Yok Zamanlayıcısı'nı kapat.** Vestel, bu işlevi Ayarlar > Cihazlar menüsündeki Sinyal Yok Zamanlayıcısı'ndan devre dışı bırakabileceğini yazıyor. Kılavuzun ayar tablosu da bu seçeneğin etkinleştirilebildiğini ya da devre dışı bırakılabildiğini yazıyor. Böylece kaynak üç dakikadan uzun sessiz kalsa bile televizyon kendini bekleme moduna almıyor.

**4. Otomatik Güç Kesme'yi ayarla.** Mesaj işlem yapılmadığını söylüyorsa Ayarlar > Sistem > Diğer Seçenekler menüsüne gir. Otomatik güç kesme, televizyonun çalıştırılmadığı zamanlarda bekleme moduna geçmesi için istenen süreyi belirliyor. Bu değer bir saat aralıklarla bir ile sekiz saat arasında olabiliyor; Kapalı yaparsan işlev devre dışı kalıyor.

**5. Uyarı penceresinde seç.** Kılavuza göre televizyon bekleme moduna geçmeden önce bir iletişim penceresi gösteriyor. Hiçbir tuşa basmazsan yaklaşık beş dakika bekleyip bekleme moduna geçiyor. Hayır'ı seçersen açık kalıyor. Devre dışı'yı seçersen otomatik güç kesme Kapalı olarak ayarlanıyor. Evet'i seçersen televizyon hemen kapanıyor, bu yüzden yanlış tuşa basma.

**6. Bekleme modu LED'ini aç.** Kılavuz, bu seçenek Kapalı olduğunda televizyon bekleme modundayken bekleme LED'inin yanmayacağını yazıyor. Seçenek Kapalıysa televizyon kapandığında hiç ışık görmezsin ve bekleme modunda mı yoksa tamamen kapalı mı olduğunu anlayamazsın. Seçeneği Açık yapınca bekleme modundaki televizyonu ışıktan tanırsın.

**7. Mesaj yoksa servise bırak.** İki ayar kapalıyken de televizyon kapanıyorsa, açılışta bu mesajlardan hiçbiri çıkmıyorsa ya da televizyon açılmıyorsa ayarlarla açıklanamayan bir durum var demektir. Vestel'in sorun giderme bölümü, çözümler işe yaramadığında Vestel İletişim Merkezi'ne ya da yetkili servise başvurulmasını istiyor. Arka kapağı açma.

## Güncelleme ve yeniden başlatma kapanma değildir

Vestel kılavuzu, televizyonun saat 03:00'te yeni yazılım için arama yaptığını, yeni yazılım bulunup indirilirse bir sonraki açılışta kurulduğunu yazıyor. Yeniden başlatma sırasında LED yanıp sönüyorsa kılavuz güç kablosunu çekmemeni istiyor. Güncellemeden sonra televizyon açılmazsa fişi çekip iki dakika bekle, sonra yeniden tak. Bu, kendiliğinden kapanma sorunundan ayrı bir durum; televizyon ekranı karardıysa ama LED yanıp sönüyorsa önce işlemin bitmesini bekle.

## Televizyon tuşlara cevap vermiyorsa

Kapandı sandığın televizyon aslında takılmış olabilir. Kılavuza göre kumandadaki Bekleme tuşunu basılı tutarsan Sıfırlama, Bekleme ve Güç Kapatma seçenekleri çıkıyor. Televizyon komutlara tepki vermiyor ve işlemler menüsü açılmıyorsa televizyondaki kumanda tuşunu yaklaşık beş saniye basılı tutmak yeniden başlamaya zorluyor.

## Ne zaman arıza sayılır?

İki ayar da kapalıysa, açılışta bekleme mesajı çıkmıyorsa ve televizyon aynı şekilde kapanmaya devam ediyorsa, ayarlarla açıklanabilen bir durumun dışına çıkmış olursun. Bu yazının dayandığı iki Vestel kılavuzunda bu noktada kullanıcıya verilen başka bir menü adımı yok. Kapanmanın ne zaman olduğunu not et: açtıktan kaç dakika sonra, hangi kaynakta, ekranda mesaj var mıydı. Servis çağırırken bu notlar işi kısaltır.

## Aynı konudaki diğer yazılar

Televizyon hiç açılmıyorsa [Vestel televizyon açılmıyor](/blog/vestel-televizyon-acilmiyor/), açılıp "sinyal yok" diyorsa [Vestel televizyon sinyal yok](/blog/vestel-televizyon-sinyal-yok/) yazısına bak. Markadan bağımsız anlatım [televizyon kendi kendine kapanıyor](/blog/televizyon-kendi-kendine-kapaniyor/) yazısında.
