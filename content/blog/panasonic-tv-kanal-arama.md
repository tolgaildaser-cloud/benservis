---
title: "Panasonic TV kanal arama nasıl yapılır: uydu ve anten"
description: "Panasonic TV'de kanal arama: Kurulum > Kanal Tarama Menüsü > Otomatik Ayar yolu, uydu için LNB ve tarama modu, manuel tarama ve liste güncelleme."
slug: "panasonic-tv-kanal-arama"
date: "2026-10-23"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 4, küme M3). origin/main 75980e0'da "panasonic" geçen slug/başlık/gövde yok.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "panasonic tv" → 1. panasonic tv, 2. panasonic tv kanal arama, 3. panasonic tv kumandası.
#   "panasonic tv kanal" → 1. panasonic tv kanal arama. GSC: panasonic satırı yok.
# Belge: Panasonic eHELP (TR, TX-55MX950E / MX serisi, TQB5ZA0038TUR-E, 379 s.), tda.panasonic-europe-service.com, bu koşuda HTTP 200,
#   md5 f2011467298c9e7275a426ff7e31bd58. Zincir: support-tr.panasonic.eu → operating_manuals_archive → horizon.panasonic.eu/tdoc/C/tr-TR → PDF.
# BİLEREK YAZILMAYANLAR: belirli uydu frekans/sembol oranı değerleri (belgede yok, yayıncıya danış deniyor) · kanal listesi düzenleme
#   programları · fiyat (#46). Alıntı denetimi: panasonic-tv-kanal-arama.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Televizyonun eHELP kılavuzu"]
steps:
  - "Kumandadaki TV tuşuyla kanal aratacağın modu seç: uydu, kablo, karasal ya da analog."
  - "MENU ile Ana Menü'yü aç, Kurulum > Kanal Tarama Menüsü'ne gir."
  - "Uydu için Anten Sistemi ve LNB Konfigürasyonu'nu ayarla, BACK ile kaydet."
  - "Otomatik Ayar'ı seç, Arama Modu ve Tarama Modu'nu ayarla."
  - "Tarama Başlat'ı seç, onay ekranında OK'ye bas ve aramanın bitmesini bekle."
  - "Kanallar eksikse Kanal tarama ile manuel ara ya da Kanal Listesini Güncelle'yi kullan."
faq:
  - q: "Panasonic TV'de kanal arama menüsü nerede?"
    a: "MX serisi eHELP'ine göre önce TV tuşuyla mod seçilir (DVB-S, DVB-C, DVB-T, TV>IP ya da Analog). Sonra MENU ile Ana Menü açılır ve Kurulum > Kanal Tarama Menüsü seçilir. Menü adı moda göre DVB-S Tarama Menüsü, DVB-C Tarama Menüsü gibi değişir."
  - q: "Otomatik Ayar eski kanallarımı siler mi?"
    a: "Evet. Kılavuza göre Otomatik Ayar yalnız seçtiğin modu yeniden ayarlar ve o moddaki daha önceki tüm kanal ayarlarını siler. Ayarlarını koruyarak yeni kanal eklemek istiyorsan Kanal Listesini Güncelle'yi kullan."
  - q: "Uyduyu bilmiyorum, ne seçmeliyim?"
    a: "Kılavuz bağlı uyduyu bilmiyorsan Uydu Yok seçilmesini, böylece Otomatik Ayar'da mevcut uyduların aranacağını yazıyor. Frekans gibi değerler için yayını alınan uydu şirketlerine danışılması öneriliyor."
  - q: "Hızlı ve Detaylı tarama arasındaki fark ne?"
    a: "Uyduda Hızlı, seçilen uydu için uygun frekansı tarar; Detaylı tüm frekans aralığını tarar. Kabloda da Hızlı ülkendeki uygun frekansı, Detaylı tüm aralığı tarar."
  - q: "Kumandam yok, televizyonun tuşlarıyla kanal aranır mı?"
    a: "Kumanda düğmeli modellerde kılavuza göre INPUT/OK/HOLD for MENU düğmesi 3 saniye basılı tutulunca ana menü açılır ve Otomatik Ayar bu düğmelerle yapılabilir."
images:
  coverAlt: "Salonda duvara monte edilmiş geniş ekranlı bir televizyon, ekranda ayar menüsü"
  steps:
    - "Sehpanın üstünde duran siyah bir televizyon kumandası yakından"
    - "Televizyon ekranında açılmış sade bir kurulum menüsü"
    - "Balkon korkuluğuna monte edilmiş bir uydu çanak anteni"
    - "Televizyon ekranında ilerleme çubuğu gösteren bir arama ekranı"
    - "Koltukta oturan birinin bakış açısından kanal listesi gösteren bir ekran"
    - "Televizyonun arkasındaki anten ve uydu girişlerine takılı kablolar"
---

Panasonic televizyonu yeni kurdun, uydu çanağını değiştirdin ya da kanallar bir gün kayboldu. Hepsinde çözüm aynı menüden geçiyor: **Kanal Tarama Menüsü**. Panasonic'in MX serisi (TX-55MX950E) Türkçe eHELP kılavuzu bu menünün yolunu, uydu, kablo ve karasal yayın için ayrı ayrı adımlarını veriyor. Bu yazıda o adımları kısalttık. Kılavuz bu seriye ait; eski Panasonic modellerinde menü adları ya da sırası farklı olabilir, kendi televizyonunun Yardım menüsüyle karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** TV tuşuyla modu seç → **MENU > Ana Menü > Kurulum > Kanal Tarama Menüsü** → **Otomatik Ayar**. Uydu için önce Anten Sistemi ve LNB ayarı. Otomatik Ayar o moddaki eski kanalları siler; ayarlarını korumak istiyorsan **Kanal Listesini Güncelle**.

## Hangi menü ne yapar

| Menü öğesi | Kılavuza göre ne yapar |
|---|---|
| **Otomatik Ayar** | Bölgede alınan kanalları otomatik olarak yeniden ayarlar |
| **Kanal tarama** | Kanalları manuel arar; anten ya da çanak yönü için de kullanılır |
| **Kanal Listesini Güncelle** | Ayarları koruyarak listeyi günceller |
| **Kanal Listesi Yöneticisi** | Kanal ekler, siler, listeyi düzenler |
| **Sinyal Durumu** | Seçilen kanalın sinyal durumunu gösterir |
| **TV Sinyallerini ayarla** | Kullanılacak sinyal girişlerini belirler |

## Adım adım: kanalları aratma

**1. Modu seç.** Kılavuzun "Ayarlar menüsü" sayfasındaki ilk adım: **modu TV ile seç**; seçenekler **DVB-S** (uydu), **DVB-C** (kablo), **DVB-T** (karasal), **TV>IP** ve **Analog**. Arama yalnız seçtiğin mod için yapılıyor; kılavuz, Kanal Tarama Menüsü'ndeki ayarların sadece seçili TV modu için geçerli olduğunu yazıyor.

**2. Menüye gir.** **MENU** ile menüyü aç, **Ana Menü**'yü seç, OK'ye bas. Sonra **Kurulum > Kanal Tarama Menüsü**'nü seç. Menü adı moda göre değişir: DVB-S Tarama Menüsü, DVB-C Tarama Menüsü, DVB-T Tarama Menüsü ve benzerleri. Burada Kanal Listesi Yöneticisi, Otomatik Ayar, Kanal tarama, Kanal Listesini Güncelle ve Sinyal Durumu gibi öğeler çıkıyor. Aynı Kurulum menüsündeki **TV Sinyallerini ayarla** öğesi, televizyonun hangi yayın sinyali girişlerini kullanacağını belirliyor; seçince ekran talimatlarına uyulur. Uydu ve anten birlikte bağlıysa arama öncesi bu ayara bakmak işe yarar (çıkarım).

**3. Uyduda önce anten ayarı.** Uydu için kılavuzun sırası şöyle: **Anten Sistemi**'ni seç ve **Tek LNB / MiniDiSEqC / DiSEqC 1.0 / Sinyal Kablosu** seçeneklerinden birini ayarla. Tek LNB tek çanak içindir; MiniDiSEqC en fazla 2, DiSEqC 1.0 en fazla 4 LNB kontrol eder. Sonra **LNB Konfigürasyonu**'nda her LNB için uyduyu ayarla. Bağlı uyduyu bilmiyorsan **Uydu Yok** seç; kılavuza göre Otomatik Ayar mevcut uyduları arar. Kaydetmek için **BACK**'e bas.

**4. Otomatik Ayar'ı aç.** **Otomatik Ayar**'ı seçip OK'ye bas. Uyduda **Arama Modu / Tarama Modu**'nu ayarla: **Hızlı** seçilen uydu için uygun frekansı, **Detaylı** tüm frekans aralığını tarar. Kabloda (DVB-C) **DVB-C Otomatik Kurulum Ayarı**'nda aynı iki tarama modu var; kılavuz Frekans, Sembol Oranı ve Ağ kimliğini normalde **Otomatik** bırakmanı, gerekirse kablo sağlayıcının verdiği değeri girmeni söylüyor.

**5. Taramayı başlat.** **Tarama Başlat**'ı seçip OK'ye bas. Onay ekranında değişiklikleri uygulamak için yine OK'ye bas; ayarlar otomatik yapılır ve işlem bitince **en alt konumdaki kanal** gösterilir. Kılavuzun uyarısı: Otomatik Ayar **yalnız seçtiğin modu** yeniden ayarlar ve **daha önceki tüm kanal ayarları silinir**. Kilitli kanallar için Çocuk Kilidi PIN numarası istenir.

**6. Eksik kanal için diğer yollar.** Kılavuza göre ayarlama tam yapılmadıysa **Kanal tarama** kullanılır. Uyduda Yansıtıcı Frekansı, Sembol Oranı, Polarizasyon ve Modülasyon elle girilir; değerler için yayını alınan uydu şirketlerine danışılması öneriliyor. Karasalda her kanal için frekans, **Sinyal Kalitesi** düzeyinin en yüksek olduğu yere ayarlanır. Ayarlarını kaybetmeden yeni kanal eklemek istiyorsan **Kanal Listesini Güncelle**'yi seç: kılavuza göre Kanal Listesi Yöneticisi, Favorileri Düzenle ve Çocuk Kilidi ayarların korunarak liste güncellenir, ama sinyal durumuna bağlı olarak güncelleme düzgün çalışmayabilir.

## Kumanda olmadan ya da kanallar yine gelmiyorsa

Kumanda düğmeli modellerde televizyonun üstündeki **INPUT/OK/HOLD for MENU** düğmesini **3 saniye** basılı tutunca ana menü açılır ve Otomatik Ayar bu düğmelerle yapılabilir. Arama bittiği hâlde kanallar mozaikli, donuk ya da hiç yoksa sorun menüde değil sinyaldedir: anten ya da çanağın konumu, yönü ve bağlantısı kontrol edilir. Bu adımlar [Panasonic TV sinyal yok](/blog/panasonic-tv-sinyal-yok/) yazısında. Yeni bir kanal bulunduğunda uyarı almak istersen **Yeni Kanal Mesajı** ayarı açılabilir; uyarı geldiğinde OK'ye basarak listeyi güncelleyebilirsin.

## Ne zaman servis

- Çanak ve anten bağlantısı sağlam, Otomatik Ayar her seferinde boş bitiyorsa
- Menü açılmıyor ya da kumandaya hiç tepki yoksa
- Ekranda sürekli bir hata mesajı çıkıyor ve mesajın talimatı işe yaramıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Menü, kumanda ve kablonun yerine oturması sende; çanağın çatıda yeniden yönlendirilmesi anten kurulumcusunun, televizyonun içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Televizyonun modeli ne (arka etikette yazar)?
2. Hangi modda arıyorsun: uydu, kablo, karasal?
3. Uydu için hangi Anten Sistemi seçili?
4. Otomatik Ayar kaç kanal buldu, hiç mi bulmadı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
