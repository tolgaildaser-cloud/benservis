---
title: "Profilo bulaşık makinesi resetleme nasıl yapılır"
description: "Profilo bulaşık makinesinde reset: Start ve Reset tuşuna yaklaşık 3 saniye. Ekranda CL, tuş kilidi, fişi 2 dakika çekme ve fabrika ayarı rE adım adım."
slug: "profilo-bulasik-makinesi-resetleme"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork B). Konu seçimi: origin/main'de profilo-bulasik-makinesi-resetleme yok; başlıklarda "Profilo bulaşık … reset" yok.
#   Yakın sayfalar: profilo-bulasik-makinesi-calismiyor, -e15-hatasi, -e22-hatasi, -su-bosaltmiyor (başlıkları resetleme sorgusunu hedeflemiyor).
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "profilo bulaşık makinesi r" → 1. "…resetleme", 3. "…resetleme nasıl yapılır";
#   "profilo bulaşık makinesi" → 3. "…resetleme". GSC (https___www-5 3 ay, https___www-6 7 gün): satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (M) Profilo BM6380MA kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001951966_E.pdf  52 s.  md5 2e7b3ee8867b8a5fe2e9a021a73228f8
#  (V) Profilo BMS623V5 kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002038110_A.pdf  52 s.  md5 024c3cd56f8521f96d6f5af2b6d9aa38
# Start ve Reset tuşu M s.15 · tuş kilidi ve CL M s.32 · duraklatma, basınç notu ve iptal M s.32 · otomatik kapanma M s.32 · arıza tablosu (su kalıyor,
#   devreye sokulamıyor, harekete geçmiyor, kendiliğinden başlıyor) M s.46 · ilk çalıştırma M s.22 · V iptal s.30 · V fabrika ayarı rE s.33
#   · V E:92-40 satırı s.42 · taşımadan önce boşaltma M s.49 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · tuş kilidi tuşunun adı (PDF'te yalnız simge) · hata kodu silme hilesi
#   · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: profilo-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekranda CL görünüyorsa tuş kilidi açıktır; kilit tuşuna yaklaşık 3 saniye basarak kilidi kaldır."
  - "Start ve Reset tuşuna yaklaşık 3 saniye bas; program iptal edilir."
  - "İptalin bitmesi için yaklaşık 1 dakika bekle."
  - "Kapağı açman gerekirse ısınmış makinede kapağı önce birkaç dakika aralık bırak."
  - "Yeni programı seç ve başlat; içeride su kalıyorsa süzgeçleri ve atık su pompasını temizle."
  - "Makine hiç devreye girmiyorsa fişi çek ya da sigortayı kapat, en az 2 dakika bekle, yeniden bağla ve çalıştır."
  - "Sorun sürerse ya da bir hata kodu tekrar ediyorsa E-Nr. ve FD numarasıyla müşteri hizmetlerini ara."
faq:
  - q: "Profilo bulaşık makinesinde reset tuşu hangisi?"
    a: "BM6380MA kılavuzunun kumanda paneli tablosunda Start tuşu ve Reset tuşu tek tuş olarak geçiyor. Programın iptali için bu tuşa yaklaşık 3 saniye basılıyor. Tam ankastre BMS623V5'te ise kapı açılıp ilgili tuşa yaklaşık 4 saniye basılıyor."
  - q: "Ekranda CL yazıyor, ne demek?"
    a: "BM6380MA kılavuzuna göre tuş kilidi etkinken cihaz kullanılırsa ekranda CL gösterilir. Kilit, program sona erince otomatik olarak devre dışı kalır; elle kaldırmak için kilit tuşuna yeniden yaklaşık 3 saniye basılır. Elektrik kesintisinde kilit etkin kalmaya devam eder."
  - q: "Profilo bulaşık makinesi resetleme ne kadar sürer?"
    a: "İki kılavuzda da program iptali yaklaşık 1 dakika sonra tamamlanıyor. BMS623V5'te bu süre boyunca tüm LED'ler yanar, sonra göstergede 0h:01m görünür ve kalan su boşaltılır."
  - q: "Fişi çekip beklemek de reset sayılır mı?"
    a: "Profilo'nun arıza tablosunda bunun için ayrı bir satır var: cihaz devreye sokulamıyor ya da kullanılamıyorsa sebebi cihaz fonksiyonlarının devre dışı kalması. Çözüm fişi çekmek ya da sigortayı kapatmak, en az 2 dakika beklemek, yeniden bağlayıp çalıştırmak. Program iptalinin yerine geçmez, makine hiç tepki vermediğinde uygulanır."
  - q: "Ayarları fabrika ayarına nasıl döndürürüm?"
    a: "BMS623V5 kılavuzunun temel ayarlar tablosunda Fabrika ayarı satırının ekran metni rE. Başlatılıp YES ile onaylanınca değiştirilen ayarlar fabrika ayarlarına döner; ardından ilk çalıştırma ayarları yeniden yapılmalı."
images:
  coverAlt: "Beyaz mutfak dolapları arasında kumanda paneli önde görünen solo bir bulaşık makinesi"
  steps:
    - "Bulaşık makinesi ekranında kısa bir harf uyarısı ve yanında kilit simgeli tuş"
    - "Bulaşık makinesi panelinde başlat tuşunun yakın planı"
    - "Kapağı kapalı, sessizce bekleyen bir bulaşık makinesi"
    - "Hafifçe aralanmış bulaşık makinesi kapağından yükselen ince bir buhar"
    - "Bulaşık makinesinin tabanında yerinden çıkarılmış silindir biçimli süzgeç"
    - "Duvardaki prizden çekilmiş bir bulaşık makinesi fişi"
    - "Bulaşık makinesi kapağının iç kenarındaki tip etiketi ve yanında katlanmış bir kullanım kılavuzu"
---

Program yarıda kaldı, yanlış programı seçtin ya da makine bir tuşa tepki vermiyor; Profilo bulaşık makinesini resetlemek istiyorsun. Profilo'nun BM6380MA kılavuzunda iş kolay, çünkü panelde **Start tuşu ve Reset tuşu** tek tuş: programı iptal etmek için bu tuşa **yaklaşık 3 saniye** basılıyor. Kılavuzun arıza tablosu da birkaç yerde aynı çözümü veriyor: **programı Reset ile iptal ediniz.** Bu yazıda BM6380MA ve tam ankastre BMS623V5 kullanım kılavuzlarından resetin sırasını, onu engelleyen tuş kilidini, fişle yapılan bekletmeyi ve fabrika ayarına dönüşü çıkardık. Senin modelinde tuşlar farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda CL varsa önce tuş kilidini kaldır. Start ve Reset tuşuna yaklaşık 3 saniye bas, yaklaşık 1 dakika bekle. Makine hiç devreye girmiyorsa fiş ya da sigorta, en az 2 dakika bekleme. Ayarlar için fabrika ayarı rE. Sorun sürerse servis.

## İki Profilo, iki panel

| | BM6380MA (solo) | BMS623V5 (tam ankastre) |
|---|---|---|
| **Reset** | Start ve Reset tuşuna yaklaşık 3 saniye | Kapı açık, tuşa yaklaşık 4 saniye, kapıyı kapat |
| **Süre** | Yaklaşık 1 dakika | Yaklaşık 1 dakika; tüm LED'ler yanar |
| **Sonra** | Program iptal edilmiş olur | Göstergede 0h:01m, kalan su boşaltılır |
| **Engel** | Tuş kilidi (ekranda CL) | Kapı kapalıyken panel kullanılamaz |

## Adım adım: Profilo bulaşık makinesini sıfırlama

**1. CL görüyorsan tuş kilidini kaldır.** BM6380MA kılavuzuna göre tuş kilidi, cihazın **çalışma sırasında yanlışlıkla ya da usulüne aykırı kullanılmasını** önler. Kilit etkinken cihaz kullanılırsa ekranda **"CL"** gösterilir. Kilidi kaldırmak için kilit tuşuna yeniden **yaklaşık 3 saniye** bas. Kılavuzun iki notu: kilit **program sona erdikten sonra otomatik olarak** devre dışı kalır, **elektrik kesintisinde ise etkin kalmaya devam eder.**

**2. Start ve Reset tuşuna 3 saniye bas.** Kumanda paneli tablosunda bu tuşun adı **"Start tuşu ve Reset tuşu."** Programı zamanından önce bitirmek ya da başlamış bir programı değiştirmek için kılavuz iptali şart koşuyor; devam eden programı **sadece iptal ederek** değiştirebilirsin. Tuşa **yaklaşık 3 saniye** bas. Tam ankastre BMS623V5'te sıra farklı: **kapıyı aç, tuşa yaklaşık 4 saniye bas, kapıyı kapat.** O modelde kılavuz sonucu açıkça yazıyor: **program iptal edilir ve cihaz sıfırlanır.**

**3. Bir dakika bekle.** Profilo'ya göre **program iptal edilir ve yaklaşık 1 dakika sonra tamamlanır.** BMS623V5'te bu sürede **tüm LED'ler yanar;** LED'ler kapandığında göstergede **"0h:01m"** görüntülenir ve kalan su boşaltılır. Enerji tasarrufu için makine program bittikten 1 dakika sonra kendiliğinden kapanır.

**4. Kapağı açarken dikkat.** Kısa basış resetle aynı şey değil: kılavuza göre tuşa basınca program **kaydedilir ve cihaz kapanır,** yeniden basınca kaldığı yerden devam eder. Bu arada kapağı açman gerekirse ve makine ısınmışsa, kapağı önce **birkaç dakika aralık bırak;** böylece aşırı basınç oluşmasını ve kapının **sıçrayarak açılmasını** önlersin.

**5. Yeni programı başlat, su kaldıysa süzgeç.** İptalden sonra programı seç ve başlat. Arıza tablosunda program sonrasında içeride su kalmasının sebebi **süzgeç sisteminin ya da süzgeçlerin alt bölümünün tıkanması;** çözüm süzgeçleri ve atık su pompasını temizlemek. Aynı satırın diğer sebebi **programın henüz sona ermemesi:** ya bitmesini bekle ya da **Reset ile iptal et.** Tahliye için [Profilo bulaşık makinesi su boşaltmıyor](/blog/profilo-bulasik-makinesi-su-bosaltmiyor/) yazısına bak.

**6. Hiç devreye girmiyorsa fiş ve 2 dakika.** Tabloda ayrı bir satır var: **cihaz devreye sokulamıyor ya da kullanılamıyorsa** sebep, cihazın fonksiyonlarının devre dışı kalması. Kılavuzun çözümü: **elektrik fişini çek ya da sigortayı kapat, en az 2 dakika bekle,** cihazı yeniden bağla ve çalıştır. Makine hiç harekete geçmiyorsa önce evin sigortasını, prizi ve fişin hem prize hem cihazın arkasına tam takılı olduğunu kontrol et; kapı tam kapanmamışsa kapat.

**7. Sürerse servis.** Bu adımlardan sonra da makine çalışmıyorsa ya da bir hata kodu tekrar ediyorsa servis zamanı. Müşteri hizmetleri cihazın **E-Nr. ve FD numarasını** istiyor; ikisi de tip etiketinde yazıyor. Makine hiç çalışmıyorsa ilk kontroller [Profilo bulaşık makinesi çalışmıyor](/blog/profilo-bulasik-makinesi-calismiyor/) yazısında.

## Ayarları fabrika ayarına döndürmek

BMS623V5 kılavuzunun temel ayarlar tablosunda son satır **Fabrika ayarı,** ekran metni **rE:** ayar başlatılır ve **YES** ile onaylanınca **değiştirilen ayarlar fabrika ayarlarına sıfırlanır.** Kılavuzun notu: bundan sonra **ilk çalıştırma ayarları** yeniden yapılmalı; özel tuz, parlatıcı, su sertliği ve parlatıcı miktarı. Program kendiliğinden çalışmaya başlıyorsa da tabloya göre sebep, önceki programın sona ermesinin beklenmemesi; çözüm yine programın iptali.

## Ne zaman servis

- Reset ve fiş denemesinden sonra tuşlar tepki vermiyorsa
- Süzgeç ve pompa temizliğinden sonra içeride su kalıyorsa
- BMS623V5'te E:92-40 değişimli yanıyorsa: kılavuz bunu elektronik hata olarak tanımlıyor, ana şalter tuşuna yaklaşık 4 saniye basıp sürerse servis istiyor
- Başka bir kod tekrar ediyorsa: örnek [Profilo bulaşık makinesi E15 hatası](/blog/profilo-bulasik-makinesi-e15-hatasi/)

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, tuş kilidi, fiş, sigorta, süzgeçler ve pompa kapağı sende; gövdenin içi, pompa motoru ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı, E-Nr. ve FD numarası ne?
2. Ekranda CL ya da bir hata kodu var mı?
3. Reset sonrası 1 dakikalık iptal tamamlandı mı?
4. Fişi 2 dakika çekip denedin mi?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Süzgeç temizliği [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) rehberinde. Bil, gör, çağır.
