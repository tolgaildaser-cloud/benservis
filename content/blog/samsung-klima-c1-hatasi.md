---
title: "Samsung klima C1 kodu ve kapanmama"
description: "Samsung klimada C1 arıza değil: otomatik temizleme çalışıyor ve klima 10-30 dakika kapanmayabilir. Beklemek, iptal etmek ve kapatmak adım adım."
slug: "samsung-klima-c1-hatasi"
date: "2026-09-28"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF pdftotext (-layout ve sayfa sayfa) + pdftoppm görüntüsüyle okundu (düğme adları ikon olduğu için görüntüden okundu).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  S1) Samsung TR destek, "Samsung Klima hata kodları ve çözümleri nelerdir?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/what-are-samsung-air-conditioner-error-codes-and-solutions/  md5 da8a426aab29d0b534308ccf3ee87a15 (HTML, dinamik)
#      C1 satırı: "Klimanız otomatik temizleme işlemi yaptığında klima ekranında C1 bilgi kodu görüntülenir." (Bilgi Kodları tablosu)
#  S3) Samsung TR destek, "Samsung klimam kapanmıyor" sayfası (Son güncelleme 2025-01-23)
#      https://www.samsung.com/tr/support/home-appliances/what-can-i-do-when-my-samsung-air-conditioner-wont-turn-off/  md5 6371440fcca9fb2c7ad3a3fd3d3f483e (HTML, dinamik)
#      "Otomatik temizleme fonksiyonunun açık olması durumunda klimanız kapanmayabilir." / "İç ünite temizliği ve koku problemini gidermek için kullanılır." / "Otomatik temizleme seçildiğinde, her zaman klima her kapatıldığında etkinleştirilir." / "Otomatik temizleme, dahili kuruluk durumuna bağlı olarak 10-30 dakika boyunca çalışır. İç ünite ekranında, temizleme ilerlemesi %1-%99 arasında gösterilir."
#  M1) Samsung TR kullanım kılavuzu AR9500T WindFree (AR09TSFYCWK/SK, AR12TSFYCWK/SK), 50 s., md5 5c6daf15aa6a54b37e7af4186f36708a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12TSFYCWK%2FSK&CttFileID=7963378&CDCttType=UM&VPath=UM%2F202102%2F20210203204244405%2FRAC029-02_IB_AR9500T_GEO_WIND_TR_TR-WEB_.pdf
#      s.30: etkinleştirme "(Seçenekler) düğmesine en az 3 saniye boyunca basın." — ekran görselinde "C1"; "Klima kapalıysa Otomatik temizleme hemen başlatılır. Klima çalışıyorsa Otomatik temizleme klima kapanır kapanmaz başlatılır."; "Otomatik temizleme işlemi devam ederken başka bir işlev başlatırsanız Otomatik temizleme işlemi duraklar ve diğer işlev durduğunda devam eder."; "Otomatik temizleme işlemi tamamlandığında klima kapanır."
#      s.31 iptal: [Ayarlar / Temiz3sn] "3 saniye veya daha uzun süre basılı tutun." ya da [Ayarlar] ▶ [<][>] ▶ "Temiz öğesini seçin." ▶ [AYARLA]; NOT: "Otomatik temizlemeyi iptal etmek işlemi devre dışı bırakmaz."
#      s.31 devre dışı: "Otomatik temizlemeyi devre dışı bırakmak için klima çalışırken veya kapalıyken aşağıdaki prosedürü uygulayın:" [Ayarlar] ▶ [<][>] ▶ "Temiz öğesini seçin." ▶ [AYARLA]
# BİLEREK YAZILMAYANLAR: C1'in bir arıza/sensör anlamı (Samsung TR belgelerinde C1 yalnız otomatik temizleme bilgi kodu); "C1 yanındaki sayı" yorumu (TR belgesinde yok); başka seri kumandaların düğme adları (yalnız M1'deki düğme adları yazıldı, modele göre değiştiği belirtildi); fişi çekerek kapatma (belgede yok).
# Alıntı denetim tablosu: samsung-klima-c1-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika (temizleme süresi hariç)"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Kullanım kılavuzu"]
steps:
  - "Klimayı kapattıktan sonra iç ünite ekranında C1 ya da yüzde ilerlemesi görünüp görünmediğine bak."
  - "Temizlemenin bitmesini bekle; 10-30 dakika sürer ve bitince klima kendiliğinden kapanır."
  - "Temizleme sürerken başka bir işlev başlatırsan temizlemenin duraklayacağını ve sonra devam edeceğini bil."
  - "Temizlemeyi o an durdurmak istersen kumandadaki Ayarlar (Temiz 3sn) düğmesini 3 saniye veya daha uzun basılı tut."
  - "Her kapanışta yeniden başlamasını istemiyorsan Ayarlar menüsünde Temiz öğesini seçip AYARLA'ya basarak işlevi devre dışı bırak."
  - "Düğme adları farklıysa aynı işlemi kendi modelinin kullanım kılavuzundaki Otomatik temizleme bölümünden uygula."
faq:
  - q: "Samsung klimada C1 ne demek?"
    a: "Samsung Türkiye'nin destek sayfasındaki bilgi kodları tablosuna göre C1, klima otomatik temizleme işlemi yaptığında ekranda görünen bir bilgi kodudur. Arıza bildiren kodlar Samsung'un tablosunda E ile başlar."
  - q: "Klimayı kapattım ama kapanmıyor, bozuk mu?"
    a: "Samsung'a göre otomatik temizleme fonksiyonu açıksa klima kapanmayabilir. Bu işlev seçildiğinde klima her kapatıldığında etkinleşir, dahili kuruluk durumuna göre 10-30 dakika çalışır ve ekranda ilerlemeyi yüzde 1 ile 99 arasında gösterir. Temizleme tamamlanınca klima kendiliğinden kapanır."
  - q: "Otomatik temizleme ne işe yarar?"
    a: "Samsung'un tanımına göre otomatik temizleme, iç ünite temizliği ve koku problemini gidermek için kullanılır. Kılavuz, iç üniteden koku geliyorsa bu işlevin kullanılmasını öneriyor."
  - q: "Temizlemeyi iptal ettim, ertesi gün yine başladı. Neden?"
    a: "Samsung kılavuzunda bunun cevabı bir not olarak yazıyor: otomatik temizlemeyi iptal etmek işlemi devre dışı bırakmaz. İptal yalnız o anki temizlemeyi durdurur; her kapanışta başlamasını istemiyorsan işlevi ayrıca devre dışı bırakman gerekir."
  - q: "C1'i nasıl yeniden açarım?"
    a: "Samsung'un WindFree kılavuzuna göre kumandadaki Seçenekler düğmesine en az 3 saniye basılınca otomatik temizleme etkinleşir; klima kapalıysa hemen, çalışıyorsa kapanır kapanmaz başlar. Düğme adı modele göre değişebilir; kendi kılavuzuna bak."
images:
  coverAlt: "Duvardaki beyaz split klima iç ünitesinin ekranında iki karakterli bir kod yanıyor; önünde elde tutulan uzaktan kumanda"
---

Klimayı kumandadan kapattın ama iç ünite çalışmayı sürdürüyor ve ekranda **C1** ya da bir yüzde değeri görünüyor. Bu bir arıza değil. Samsung Türkiye'nin destek sayfasındaki bilgi kodları tablosunda C1'in karşılığı: **"Klimanız otomatik temizleme işlemi yaptığında klima ekranında C1 bilgi kodu görüntülenir."** Samsung'un bir başka destek sayfası da aynı durumu belirtiden anlatıyor: **"Otomatik temizleme fonksiyonunun açık olması durumunda klimanız kapanmayabilir."**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** C1 = otomatik temizleme çalışıyor. İşlev açıksa klima her kapatılışında 10-30 dakika iç üniteyi kurutup temizler, ilerlemeyi %1-%99 gösterir, bitince kendiliğinden kapanır. Beklemek yeterli. Durdurmak için iptal, hiç çalışmasın istersen ayrıca devre dışı bırakma gerekir; iptal tek başına işlevi kapatmaz.

## Otomatik temizleme ne yapıyor?

Samsung'a göre otomatik temizleme iç ünite temizliği ve koku problemini gidermek için kullanılır. İşlev seçildiğinde klima **her kapatıldığında** etkinleşir. Süre sabit değildir: iç ünitenin dahili kuruluk durumuna göre 10-30 dakika çalışır ve iç ünite ekranında temizleme ilerlemesi %1 ile %99 arasında gösterilir.

Samsung'un WindFree kullanım kılavuzu birkaç ayrıntı daha veriyor:

- Klima kapalıyken işlev açılırsa temizleme hemen başlar; klima çalışıyorsa kapanır kapanmaz başlar.
- Temizleme sürerken başka bir işlev başlatılırsa temizleme duraklar, o işlev durunca devam eder.
- Temizleme tamamlandığında klima kendiliğinden kapanır.

## Adım adım: evde denenecekler

**1. Ekrana bak.** Klimayı kapattıktan sonra iç ünite ekranında C1 ya da yüzde ilerlemesi görünüp görünmediğine bak. Bu, klimanın otomatik temizleme yaptığını gösterir.

**2. Bitmesini bekle.** Temizlemenin bitmesini bekle; Samsung'a göre 10-30 dakika sürer ve bitince klima kendiliğinden kapanır. Çoğu durumda yapılacak tek şey budur.

**3. Araya işlev girerse.** Temizleme sürerken başka bir işlev başlatırsan temizlemenin duraklayacağını ve sonra devam edeceğini bil. Bu yüzden klimayı yeniden açmak temizlemeyi bitirmez, yalnız duraklatır.

**4. O anki temizlemeyi durdur.** Temizlemeyi o an durdurmak istersen kumandadaki Ayarlar (Temiz 3sn) düğmesini 3 saniye veya daha uzun basılı tut. Kılavuzdaki ikinci yol: Ayarlar düğmesi → ok tuşlarıyla Temiz öğesini seç → AYARLA.

**5. Kalıcı olarak kapat.** Her kapanışta yeniden başlamasını istemiyorsan Ayarlar menüsünde Temiz öğesini seçip AYARLA'ya basarak işlevi devre dışı bırak. Kılavuzun notu önemli: **"Otomatik temizlemeyi iptal etmek işlemi devre dışı bırakmaz."** Kılavuza göre devre dışı bırakma klima çalışırken de kapalıyken de yapılabilir.

**6. Kendi kılavuzuna bak.** Düğme adları farklıysa aynı işlemi kendi modelinin kullanım kılavuzundaki Otomatik temizleme bölümünden uygula. Yukarıdaki düğme adları Samsung'un AR9500T WindFree serisi Türkçe kılavuzundan; Samsung, kodların ve işlevlerin modele göre değişebileceğini belirtiyor.

## İşlevi kapatmalı mıyım?

Bu bir tercih. Samsung otomatik temizlemeyi iç ünite temizliği ve koku için öneriyor; kılavuz, iç üniteden koku geliyorsa işlevin kullanılmasını söylüyor. Klimanın kapanınca bir süre daha çalışması seni rahatsız ediyorsa işlevi devre dışı bırakabilir, gerektiğinde yeniden açabilirsin. Kılavuza göre yeniden açmak için Seçenekler düğmesine en az 3 saniye basılır.

Koku sorunu için adımlar [Samsung klima koku yapıyor](/blog/samsung-klima-koku-yapiyor/) yazısında.

## Ne zaman servis?

C1 ve otomatik temizleme servis gerektirmez. Şu durumlar ise bilgi kodunun dışına çıkar:

| Durum | Ne yapmalı |
|---|---|
| Ekranda C1 ya da yüzde var, klima 10-30 dakika sonra kapanıyor | Normal; bekle ya da işlevi kapat |
| Kumanda hiçbir komuta tepki vermiyor | Samsung'un sorun giderme tablosu: pilleri değiştir, sinyalin önünde engel olmasın, üniteyi parlak ışıktan uzak tut; sürerse servis |
| Ekranda E ile başlayan bir kod var | Kodu ve model numarasını not et, Samsung yetkili servisine ilet |

Samsung'un diğer bilgi ve hata kodları [Samsung klima hata kodları](/blog/samsung-klima-hata-kodlari/) yazısında.

---

**Kaynak künyesi.** C1 tanımı Samsung Türkiye'nin "Samsung Klima hata kodları ve çözümleri nelerdir?" sayfasından; kapanmama açıklaması ve süreler Samsung Türkiye'nin klimanın kapanmaması üzerine destek sayfasından; iptal, devre dışı bırakma ve etkinleştirme adımları Samsung'un AR9500T WindFree Türkçe kullanım kılavuzundan (s. 30-31) alınmıştır. Kendi cihazının kılavuzu farklı bir yol tarif ediyorsa **kendi kılavuzun esastır.**
