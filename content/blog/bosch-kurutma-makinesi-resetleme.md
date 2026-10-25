---
title: "Bosch kurutma makinesi resetleme nasıl yapılır"
description: "Bosch kurutma makinesinde reset: programı güvenle iptal, kapatıp açma, 30 saniye güç kesme ve ağ sıfırlama. Hot uyarısı, çocuk kilidi ve servis sınırı."
slug: "bosch-kurutma-makinesi-resetleme"
date: "2026-10-23"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork A). Konu: origin/main'de bosch-kurutma-makinesi-resetleme yok; başlığında reset/sıfırlama geçen Bosch kurutma sayfası yok.
#   Yakın: bosch-kurutma-makinesi-calismiyor, -kurutmuyor, -sembolleri-ve-anlamlari, -kondanser-temizligi (hiçbiri resetleme sorgusuna ayrılmış değil).
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "bosch kurutma makinesi r" → 1. "…resetleme", 2. "…resetleme nasıl yapılır", 3. "…rulman".
#   GSC (www-5 3 ay, www-6 7 gün): resetleme satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, üçü de HTTP 200, md5 yerel kopyayla (kaynak-bosch-2eki, 2 Eki) aynı.
#  (A) Bosch WQG244C1TR kurutma makinesi kullanım kılavuzu  9001847050_E.pdf  40 s.  md5 7ff40c3f2504844ca9cbd584bda38b53
#  (B) Bosch WTW87460TR çamaşır kurutma makinesi kullanım ve kurulum kılavuzu  9001004673_A.pdf  32 s.  md5 6afdb7f1bfef765af4d9fdc143240ee9
#  (C) Bosch WTWH8760TR kurutma makinesi kullanım kılavuzu  9001851027_A.pdf  60 s.  md5 434892aeecaf2fa1c40307cdac205798
# Yangın uyarısı A s.8 · Hot A s.17, s.31 · tuşlar A s.17 · iptal A s.23, B s.17 · kapatma A s.23 · çocuk kilidi A s.26-27 · diğer hata kodları A s.31
#   · su kabı / CrE A s.31-32 · program başlamıyor A s.32 · kapatıp açma ve elektrik kesintisi B s.24 · ağ ayarları sıfırlama C s.39 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: fabrika ayarı adımı (bu üç kılavuzda kurutma için yok) · servis menüsü · ısı pompası/kart teşhisi · kasa açma · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-kurutma-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekranda Hot varsa makine çamaşırı soğutuyordur; programı değiştirme, soğutma bitene kadar bekle."
  - "Kilit simgesi yanıyorsa çocuk kilidini kılavuzdaki iki tuşa 3 saniye basarak kapat."
  - "Programı iptal etmek için Başlat/Reload'a bas, kapağı aç ve çamaşırları hemen çıkarıp yay."
  - "Su kabı ya da filtre uyarısı varsa önce su kabını boşalt, tiftik filtresini temizle."
  - "Program düğmesini Kapalı'ya alıp makineyi kapat, sonra yeniden aç."
  - "Kod tekrar ederse cihazı fişten ya da sigortadan en az 30 saniye ayır."
  - "Home Connect bağlantısı sorunluysa yalnız ağ ayarlarını rES ile sıfırla."
  - "Kod sürüyorsa hata mesajını not alıp müşteri hizmetlerini ara."
faq:
  - q: "Bosch kurutma makinesinde reset tuşu var mı?"
    a: "Bosch'un WQG244C1TR, WTW87460TR ve WTWH8760TR kılavuzlarında Reset adında ayrı bir tuş yok. Kılavuzlar programı iptal etmeyi, cihazı kapatıp açmayı ve kod tekrar ederse en az 30 saniye güç kaynağından ayırmayı anlatıyor. Wi-Fi'li modelde ayrıca yalnız ağ ayarları sıfırlanabiliyor."
  - q: "Kurutma programını yarıda kesmek tehlikeli mi?"
    a: "Bosch bu konuda yangın uyarısı veriyor: kurutma iptal edildiğinde çamaşırlar yeterince soğumaz ve alev alabilir. Bu yüzden program zamanından önce iptal edilmemeli; iptal edildiyse çamaşırlar derhal çıkarılıp asılmalı. Resetten önce bu adımı atlama."
  - q: "Ekranda Hot yazıyor, makine durmuyor; bu arıza mı?"
    a: "Hayır. WQG244C1TR kılavuzuna göre Hot, çamaşırların tambur dönerken birkaç dakika soğutulduğunu gösterir ve hata değildir. Kılavuz bu sırada programın değiştirilmemesini istiyor; soğutma 10 dakika kadar sürüyor. Kapı açılırsa soğutma iptal edilebiliyor."
  - q: "Fişi çekince kurutma makinesi sıfırlanır mı?"
    a: "Kılavuzda fiş çekmek, yeniden başlatma işe yaramadığında yapılan ikinci adım ve süre en az 30 saniye. Çocuk kilidini ise kapatmaz; kilit cihaz kapatıldıktan sonra ve elektrik kesintisinde de etkin kalır. WTW87460TR'ye göre elektrik kesintisinde program iptal olur; çamaşırı çıkarıp yay ya da programı yeniden başlat."
  - q: "Bosch kurutma makinesini fabrika ayarlarına döndürebilir miyim?"
    a: "İncelediğimiz üç Bosch kurutma kılavuzunda cihazı fabrika ayarına döndüren bir adım yok. WTWH8760TR'de rES yalnız Home Connect ağ ayarlarını sıfırlıyor. Temel ayarlar menüsünde ise ses seviyesi gibi ayarlar değiştiriliyor."
images:
  coverAlt: "Çamaşır makinesinin üzerine yerleştirilmiş beyaz bir kurutma makinesi"
  steps:
    - "Çizim: solda kurutma makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda kapak"
    - "Çizim: solda kurutma makinesi, sağda su ya da toz haznesi"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda kurutma makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda kurutma makinesi, sağda telefon ve kullanım kılavuzu"
---

Program takıldı, ekranda bir kod var ya da makine bir türlü başlamıyor; ilk akla gelen "kurutma makinesini resetlemek". Bosch'un kurutma makinesi kılavuzlarında **Reset adında ayrı bir tuş yok.** Kılavuzlar bunun yerine şu sırayı veriyor: **programı güvenle iptal etmek, cihazı kapatıp açmak**, kod tekrar ederse **en az 30 saniye güç kaynağından ayırmak.** Wi-Fi'li modelde ayrıca yalnız ağ ayarları sıfırlanabiliyor. Kurutmada bir fark var: yarıda kesilen program **yangın riski** taşıyor. Bu yazıda sırayı üç Bosch kılavuzundan çıkardık: WQG244C1TR, WTW87460TR ve WTWH8760TR. Tuş adları modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda Hot varsa bekle. Çocuk kilidini kapat. Başlat/Reload ile iptal et, çamaşırı hemen çıkarıp yay. Su kabını boşalt, filtreyi temizle. Kapat, yeniden aç. Kod tekrar ederse 30 saniye güçten ayır. Wi-Fi sorunu için yalnız ağ ayarını sıfırla. Olmuyorsa servis.

## Ekran ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Ne yaparsın |
|---|---|---|
| **Hot** | Çamaşırlar soğutuluyor, hata değil | ⏳ Bekle, programı değiştirme |
| **Kilit simgesi** | Çocuk kilidi etkin | 🛠️ Kilidi kapat |
| **Su kabı simgesi, program iptal** | Yoğuşma suyu kabı dolu ya da filtresi kirli | 🛠️ Boşalt, temizle |
| **CrE** | Basit cihaz bakımı gerekiyor | 🛠️ Bakım programı |
| **Diğer hata kodları** | Fonksiyonel arıza | 🛠️ Yeniden başlat, 🔧 sürerse servis |

## Adım adım: Bosch kurutma makinesini sıfırlama

**1. Hot varsa dokunma.** WQG244C1TR kılavuzuna göre ekranda **Hot** görünürken makine çamaşırları tambur dönerken birkaç dakika soğutur; bu bir hata değil. Kılavuz bu sırada **programın değiştirilmemesini** istiyor, soğutma 10 dakika kadar sürüyor. Bu süreyi bir reset ihtiyacı sanma.

**2. Çocuk kilidini kapat.** Program çalışmaya başlamıyorsa arıza tablosunun ilk satırı çocuk kilidi. WQG244C1TR'de kilit, kılavuzda gösterilen **iki tuşa yaklaşık 3 saniye** basılarak kapanıyor; bunun için cihaz çalışır olmalı ve çalışan programın iptal olmaması için program düğmesi çıkış programında kalmalı. Kilit **cihaz kapatıldıktan sonra ve elektrik kesintisinde de etkin kalır.** Kalan süre seçeneği etkinse program da hemen başlamaz.

**3. Programı güvenle iptal et.** Sıra kısa: **Başlat/Reload seçeneğine bas, kapağı aç, çamaşırları çıkar.** Ama Bosch'un güvenlik bölümü uyarıyor: kurutma iptal edildiğinde çamaşırlar yeterince soğumaz ve **alev alabilir.** Program zamanından önce iptal edildiyse çamaşırları **derhal çıkar ve as.** WTW87460TR kılavuzu da aynı şeyi söylüyor: ısının dağılması için tüm çamaşırları çıkar ve kapağı açık bırak.

**4. Uyarının kendisini gider.** Su kabı simgesi yanıp program iptal olduysa sorun çoğu zaman resetle değil bakımla çözülüyor: **yoğuşma suyu kabını boşalt**, kabın filtresini ve **tiftik filtresini temizle.** Ekranda CrE varsa kılavuz basit cihaz bakımı programını istiyor. Kurutma süresi çok uzunsa da kılavuzun ilk saydığı neden kirli tiftik filtresi; ortam sıcaklığının 15 ile 30 derece arasında olması gerekiyor. Ayrıntılar [Bosch kurutma makinesi kondanser temizliği](/blog/bosch-kurutma-makinesi-kondanser-temizligi/) yazısında.

**5. Kapat ve yeniden aç.** WQG244C1TR'de cihaz, **program seçme düğmesi Kapalı konumuna** getirilerek kapanıyor. Diğer hata kodları için kılavuzun ilk adımı **cihazı yeniden başlatmak.** WTW87460TR'nin notu da aynı yönde: bir hatayı makineyi **kapatıp açarak** gideremiyorsan müşteri hizmetlerine başvur.

**6. 30 saniye güçten ayır.** Kod yeniden başlatmadan sonra tekrar oluşursa kılavuzun ikinci adımı: **cihazı en az 30 saniye güç kaynağından ayır.** Fişi çekebilir ya da sigorta kutusundaki sigortayı kapatabilirsin. WTW87460TR'ye göre elektrik kesintisinde kurutma programı iptal olur; çamaşırları çıkarıp yay ya da programı yeniden başlat.

**7. Wi-Fi sorunu için yalnız ağ ayarı.** WTWH8760TR'de Home Connect bağlantısı bozulduysa makinenin tamamı değil **yalnız ağ ayarları sıfırlanıyor.** Kılavuzdaki tuşa en az 3 saniye basılıyor, program düğmesi pozisyon 5'e getiriliyor, ekranda **rES**, ardından **YES** görünüyor; onaylayınca ağ ayarları sıfırlanıyor. İncelediğimiz üç kılavuzda cihazı fabrika ayarına döndüren bir adım yok.

**8. Kod sürüyorsa servis.** Yeniden başlatma ve güç kesme sonrası kod geri geliyorsa ev ayar turu bitmiştir. Kılavuzun üçüncü adımı **müşteri hizmetlerini aramak.** Ararken **hata mesajını eksiksiz söyle**; Bosch mümkünse arızayı fotoğraf ve videoyla belgelemeni öneriyor.

## Ne zaman servis

- Yeniden başlatma ve 30 saniye güç kesme sonrası kod tekrar ediyorsa
- Su kabı boş, filtreler temiz olduğu hâlde uyarı sürüyorsa
- Makine hiç açılmıyorsa: [Bosch kurutma makinesi çalışmıyor](/blog/bosch-kurutma-makinesi-calismiyor/) yazısına bak
- Program bitiyor ama çamaşır nemli kalıyorsa: [Bosch kurutma makinesi kurutmuyor](/blog/bosch-kurutma-makinesi-kurutmuyor/)

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, program düğmesi, çocuk kilidi, su kabı, filtreler ve fiş sende; kasanın içi, ısı pompası, elektronik kart ve tahliye bağlantısının iç tarafı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda tam olarak hangi kod ya da simge var?
3. Su kabı boş, tiftik filtresi temiz mi?
4. Yeniden başlatma ve 30 saniye güç kesme sonrası kod geri geldi mi?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ekrandaki simgeler için [Bosch kurutma makinesi sembolleri ve anlamları](/blog/bosch-kurutma-makinesi-sembolleri-ve-anlamlari/) yazısına bak. Bil, gör, çağır.
