---
title: "TV sembol oranı nedir? Grundig ve Vestel kılavuzları"
description: "TV sembol oranı nedir, nereye girilir? Grundig ve Vestel kılavuzlarına göre Ksym/s tanımı, manuel uydu arama adımları ve kılavuzdaki örnek değerler."
slug: "tv-sembol-orani-nedir"
date: "2026-11-04"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-11-03 Sal PAZ alt ajanı (YK #197 boşluk yazısı; BOSLUK.md "2 Kas 2026" #252 [KU, öncelik Y] "TV sembol oranı (symbol rate) nedir / uydu ayarında hangi değer"). Slug origin/main content/blog/'da yok (3 Kas fetch). Yakın yazılar: televizyona-uydu-nasil-eklenir, sunny-tv-kanal-frekans-ayarlama (markalı, manuel arama), philips-tv-uydu-kurulumu, skytech-tv-uydu-ayarlama, televizyon-kanal-ayarlama-nasil-yapilir, televizyon-sinyal-yok-diyor. Bu yazı sembol oranının tanımını ve girildiği yeri anlatır; markasız ve tanım odaklıdır.
# Konu kanıtı: Google otomatik tamamlama 2 Kas 2026 (BOSLUK.md #252): "televizyon sembol" #2 ("sembol oranı", "sembol oranı nedir"). GSC kanıt sayılmadı.
# Belgeler (#88), hepsi düz curl -sL (özel başlık yok), HTTP 200 application/pdf, md5'ler 3 Eki 2026 indirmesiyle birebir aynı; ham dosyalar _kaynak/tv-sembol-orani/:
#  (G) Grundig Televizyon 65 GGU 7900 B kullanma kılavuzu (DFV000, 124 s.), md5 1c9a79733cf0ea0b82aa603bd43966d5 — PDF s.94, 95, 119 http://download.grundig.com/Download.UsageManualsGrundig/tr_TR_DFV000_MDM2_USER_MANUAL_FILE_tr_TR_20211217_085338.pdf
#  (V) Vestel 43UA9600 4K Android TV kullanım kılavuzu (20275679_k, 40 s.), md5 42c3c3d93a453b856c50de517d0c3ccd — PDF s.12, 13, 15, 16 https://statik.vestel.com.tr/webfiles/20275679_k.pdf
#  Elendi: yok (iki belge de erişilebildi).
# BİLEREK YAZILMAYANLAR: anten, LNB, çanak yönlendirme ve kablo işleri (servis) · "Türksat için doğru sembol oranı şudur" hükmü (kılavuz geçerli değeri Teleteks, uydu TV dergileri ya da internetten öğrenmeni ister; 12380 / 27500 yalnız Grundig örnek ekranından aktarıldı) · BISS şifreleme anahtarı ve TKGS konum belirleyici ayrıntısı (ileri kullanıcı menüsü) · Vestel manuel arama adımları (kılavuzda tarif yok; adımlar Grundig'den) · fiyat (#46).
# Alıntı denetimi: tv-sembol-orani-nedir.KAYNAK.md
guide:
  difficulty: "Orta"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Televizyon kumandası", "Kanalın güncel frekans, sembol oranı ve polarizasyon bilgisi"]
steps:
  - "Kumandanın kaynak düğmesine basıp Uydu kaynağını seç."
  - "Ayarlar menüsünden Kanal, ardından Kanal Kurulum Modu'nu aç ve Uydu (Standart) seçeneğini seç."
  - "Kanallar menüsünden Manuel Kanal Arama'yı aç ve Mevcut Uyduyu onayla."
  - "Aktarıcı öğesini seç; Uydu Ayrıntısı Aktarıcı menüsü açılır."
  - "Frekansı kumandanın sayı düğmeleriyle 5 basamaklı gir."
  - "Sembol oranını (Ksym/s) kumandanın sayı düğmeleriyle 5 basamaklı gir."
  - "Polarizasyonu seç, önceki menüye dön, Sonraki'ni onayla ve aramanın bitmesini bekle."
faq:
  - q: "TV sembol oranı nedir?"
    a: "Grundig 65 GGU 7900 B kılavuzunun sözlüğüne göre sembol oranı, dijital iletim teknolojisinde birim zamanda iletilen sembollerin miktarıdır. Televizyonda uydu kanalı ararken Ksym/s birimiyle ve frekans ile polarizasyonla birlikte girilir."
  - q: "TV'de sembol oranı nereye girilir?"
    a: "Grundig kılavuzunda Kaynak Uydu seçildikten sonra Ayarlar, Kanal, Kanal Kurulum Modu, Kanallar, Manuel Kanal Arama ve Aktarıcı menüsünde, Sembol satırına 5 basamaklı olarak girilir. Vestel 43UA9600 kılavuzu uydu aramasında Frekans, Sembol Hızı (Ksym/s) ve Polarizasyon parametrelerini doğru ayarlamanı ister."
  - q: "Uydu ayarında hangi sembol oranı girilir?"
    a: "Kılavuzlar sabit bir değer vermez. Grundig geçerli transponder bilgilerini Teleteks sayfasından, uydu TV dergi yayınlarından veya internetten öğrenmeni yazıyor. Kılavuzun örnek ekranında Türksat3A/4A 42.0E için frekans 12380, sembol oranı 27500 ve polarizasyon dikey görünüyor."
  - q: "Sembol oranı kaç basamaklı girilir?"
    a: "Grundig kılavuzu frekansı ve sembol oranını kumandanın sayı düğmeleriyle 5 basamaklı olarak girmeni istiyor."
images:
  coverAlt: "Ayaklı sade bir televizyon çizimi"
  steps:
    - "Televizyon ve yanında kumandada işaretli düğmeye uzanan beyaz eldivenli sade siluet el çizimi"
    - "Kumandanın ayarlar düğmesine basan beyaz eldivenli sade siluet el çizimi"
    - "Kumandanın yön düğmesine basan beyaz eldivenli sade siluet el çizimi"
    - "Kumandanın onay düğmesine basan beyaz eldivenli sade siluet el çizimi"
    - "Frekans değerini kumandanın sayı düğmeleriyle giren beyaz eldivenli sade siluet el çizimi"
    - "Televizyon ve yanında tuş takımında tuşa basan beyaz eldivenli sade siluet el çizimi"
    - "Kumandada sonraki seçeneğini onaylayan beyaz eldivenli sade siluet el çizimi"
---

Sembol oranı, dijital iletimde birim zamanda iletilen sembollerin miktarıdır ve televizyonda uydu kanalı ararken Ksym/s birimiyle girilir. Grundig 65 GGU 7900 B kılavuzu sembol oranını frekansla birlikte 5 basamaklı girmeni, Vestel 43UA9600 kılavuzu da uydu aramasında Frekans, Sembol Hızı (Ksym/s) ve Polarizasyon parametrelerini doğru ayarlamanı istiyor.

Kılavuzlar tek bir sembol oranı vermiyor. Grundig geçerli transponder bilgilerini Teleteks sayfasından, uydu TV dergi yayınlarından veya internetten öğrenmeni yazıyor; kendi örnek ekranında Türksat3A/4A 42.0E için frekans 12380, sembol oranı 27500 ve polarizasyon dikey görünüyor. Düğme adları modele göre değişir; kendi televizyonunun kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.** Çanak, LNB ve kablo işleri uydu servisinin işidir; bu yazıda anlatılmıyor.

## Sembol oranı nedir?

Grundig kılavuzunun sözlüğü sembol oranını, dijital iletim teknolojisinde birim zamanda iletilen sembollerin miktarı olarak tanımlıyor. Aynı sözlük transponderı bir frekansta çeşitli vericilerin toplanması olarak tarif ediyor. Yani bir uydu kanalını bulmak için TV'ye üç bilgi vermen gerekir: frekans, sembol oranı ve polarizasyon.

| Bilgi | Grundig 65 GGU 7900 B | Vestel 43UA9600 |
|---|---|---|
| Frekans | 5 basamaklı girilir | Frekans parametresi olarak geçer |
| Sembol oranı | Sembol (Ksym/s), 5 basamaklı girilir | Sembol Oranı ya da Sembol Hızı (Ksym/s) |
| Polarizasyon | Dikey, Yatay, Sol ya da Sağ seçilir | Polarizasyon parametresi olarak geçer |

## Sembol oranı TV'de nerede girilir?

Grundig'de Manuel Kanal Arama içindeki Aktarıcı menüsünde: Frekans, Sembol ve Polarizasyon satırları orada. Otomatik aramada bulunmayan bir istasyonu bulmak için manuel arama kullanılır ve kılavuz istasyonun tüm parametrelerinin doğru girilmesini ister.

Vestel'de sembol oranı birkaç yerde geçiyor. İlk kurulumda uydu ağ taramasında Uydu Alıcı-Vericisi altında Frekans, Sembol Hızı (Ksym/s) ve Polarizasyon ayarlanır. TKGS konum belirleyici eklerken Frekans, Sembol Oranı (KSym/s), Polarizasyon ve PID parametreleri ayarlanır. Kanal düzenleme ekranında ise seçili kanalın Şebeke Adı, Frekans, Modülasyon ve Sembol Oranı bilgileri görüntülenir. Vestel TV'de TKGS seçiliyken ilk uydu seçeneğinin parametreleri Türksat için ayarlanır; yapman gereken uydu sisteminize uygun DiSEqC girişini seçmektir.

## Adım adım: TV'de sembol oranı nasıl girilir?

Vestel kılavuzu manuel arama adımlarını tarif etmediği için aşağıdaki adımlar Grundig kılavuzundandır. Girmen gereken değerleri önceden hazırla.

**1. Uydu kaynağını seç.** Kumandada kaynak menüsünü aç ve Uydu'yu seç. Grundig önce TV moduna geçmeni, sonra Kaynak öğesinden Uydu'yu seçmeni istiyor.

**2. Kanal kurulum modunu aç.** Ayarlar'dan Kanal'ı, ardından Kanal Kurulum Modu'nu seç ve Uydu (Standart) seçeneğini onayla. Grundig manuel arama için Uydu (Standart) seçtiriyor.

**3. Manuel Kanal Arama'yı aç.** Kanallar menüsünü aç, Manuel Kanal Arama öğesini seç ve onayla. Ardından Mevcut Uyduyu onayla; Manuel Kanal Arama menüsü görüntülenir.

**4. Aktarıcıyı seç.** Manuel Kanal Arama menüsünde Aktarıcı öğesini seç ve onayla; Uydu Ayrıntısı Aktarıcı menüsü görüntülenir. Kılavuzun örnek ekranında uydu seçimi Türksat3A/4A 42.0E olarak görünüyor.

**5. Frekansı gir.** Frekans satırında kumandanın sayı düğmeleriyle frekansı 5 basamaklı gir. Örnek ekranda bu değer 12380.

**6. Sembol oranını gir.** Sembol satırında sembol oranını yine sayı düğmeleriyle 5 basamaklı gir. Örnek ekranda sembol oranı (Ksym/s) 27500.

**7. Polarizasyonu seç ve aramayı başlat.** Polarizasyonu Dikey, Yatay, Sol ya da Sağ olarak seç. Önceki menüye dön, Sonraki öğesini seç ve onayla; Otomatik Arama menüsü açılır ve TV kanalları aramaya başlar. Grundig aramanın alınan kanal sayısına bağlı olarak birkaç dakika sürebileceğini yazıyor.

## Otomatik arama ile manuel arama arasında ne fark var?

Grundig otomatik aramada tüm transponderların taranarak yeni kanalların arandığını yazıyor ve yeni uydu kanalları sık eklendiği ya da uydu verileri değiştiği için otomatik aramayı zaman zaman başlatmanı öneriyor. Manuel arama ise otomatik aramanın bulamadığı belirli bir istasyon içindir. Kılavuz bu durumda istasyonun tüm parametrelerinin doğru girilmesini ister: frekans, sembol oranı ve polarizasyon.

## Kanal bulunamazsa ne yapılır?

Grundig yayıncı kaynaklı uydu parametreleri değiştiğinde bazı frekansların eksik kaydedilebileceğini, bu durumda Tarama Modu'nu Ağ olarak seçmeni önerdiğini yazıyor. Manuel aramada değer yanlış girildiyse kanal bulunmaz; frekans, sembol oranı ve polarizasyonu güncel bilgiyle yeniden gir.

Sinyal hiç yoksa [televizyon sinyal yok diyor](/blog/televizyon-sinyal-yok-diyor/) yazısına bak. Genel kanal arama için [televizyon kanal ayarlama nasıl yapılır](/blog/televizyon-kanal-ayarlama-nasil-yapilir/), uydu ekleme için [televizyona uydu nasıl eklenir](/blog/televizyona-uydu-nasil-eklenir/), Sunny için [Sunny TV kanal frekans ayarlama](/blog/sunny-tv-kanal-frekans-ayarlama/) yazıları var.

⛔ **Kendin-çöz sınırı burada biter.** Menüden uydu kaynağını seçmek, değerleri girmek ve aramayı başlatmak sende; çanak yönlendirmesi, LNB, çok anahtarlı sistem ve kablo işleri uydu servisinin işi.

Belirtiyi ve televizyonun modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
<!--MAP G=_kaynak/tv-sembol-orani/grundig-dfv000 -->
<!--MAP V=_kaynak/tv-sembol-orani/vestel-20275679 -->
