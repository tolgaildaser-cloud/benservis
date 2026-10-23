---
title: "Profilo çamaşır makinesi resetleme nasıl yapılır"
description: "Profilo çamaşır makinesinde reset: programı iptal, iki tuşla yeniden başlatma, 30 saniye güç kesme ve rES fabrika ayarı. Çocuk kilidi ve servis sınırı."
slug: "profilo-camasir-makinesi-resetleme"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork A). Konu: origin/main'de profilo-camasir-makinesi-resetleme yok; başlığında reset/sıfırlama geçen Profilo sayfası yok.
#   Yakın: profilo-camasir-makinesi-hata-kodlari (hub), profilo-camasir-makinesi-kapak-acilmiyor.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "profilo çamaşır makinesi" → 3. "…resetleme"; "profilo çamaşır makinesi r" → 1. "…resetleme",
#   2. "…resetleme nasıl yapılır", 3. "…resetleme yapmıyor". GSC (www-5 3 ay, www-6 7 gün): satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, ikisi de HTTP 200, md5 yerel kopyayla (kaynak-profilo-sprint, 30 Eyl) aynı.
#  (A) Profilo CGK264Z0TR kullanım kılavuzu ve kurulum talimatları  9002013778_F.pdf  md5 e8d78fecbda5478f066c2a5a79daf68d
#  (B) Profilo CGA242X3TR kullanım kılavuzu ve kurulum talimatları  9002022851_B.pdf  md5 26e5f99b6a19ecada2fa682a657b7d76
# Enerji tasarrufu / bekleme A s.11 · kapak kilitli göstergesi A s.20 · iptal A s.28-29, B s.28 · çocuk kilidi A s.29, B s.28 · ağ ayarı sıfırlama A s.31
#   · temel ayarlar + fabrika (rES) A s.32 · ekran karanlık A s.37 · diğer hata kodları A s.38, B s.35 · voltaj dalgalanması A s.38 · tuşlar yanıt vermiyor, program başlamıyor A s.39.
# BİLEREK YAZILMAYANLAR: servis menüsü / gizli kombinasyon · kod silme hilesi · kart, kilit, pompa teşhisi · fiyat (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: profilo-camasir-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Ekran karanlık ve bir sembol yanıp sönüyorsa makine enerji tasarrufundadır; Başlat Beklet'e basıp uyandır."
  - "Kilit simgesi yanıyorsa çocuk kilidini kılavuzdaki iki tuşa 3 saniye basarak kapat."
  - "Programı iptal etmek için Başlat Beklet'e bas, sonra kapağı aç."
  - "Kapak kilitli kalıyorsa sıcaklık yüksekse Durulama, su seviyesi yüksekse Sıkma ya da boşaltma programı çalıştır."
  - "Tuşlar yanıt vermiyor ya da kod çıkıyorsa İlave durulama ve Kırışık Azaltma'ya birlikte 3 saniye basarak yeniden başlat."
  - "Arıza tekrar ederse cihazı fişten ya da sigortadan en az 30 saniye ayır."
  - "Son çare olarak temel ayarlar menüsünde rES ile fabrika ayarlarına dön; olmuyorsa servisi ara."
faq:
  - q: "Profilo çamaşır makinesinde reset tuşu var mı?"
    a: "Profilo'nun CGK264Z0TR ve CGA242X3TR kılavuzlarında Reset adında ayrı bir tuş yok. CGK264Z0TR kılavuzu yeniden başlatmayı İlave durulama ve Kırışık Azaltma tuşlarına aynı anda yaklaşık 3 saniye basmak olarak tarif ediyor; fabrika ayarına dönüş ise temel ayarlar menüsündeki rES ayarıyla yapılıyor."
  - q: "Profilo çamaşır makinesi resetleme yapmıyor, neden?"
    a: "En sık engel çocuk kilidi. Kılavuza göre kilit, cihaz bekleme modundayken ve elektrik kesintisinde de etkin kalır; program çalışmaya başlamıyorsa ilk kontrol budur. Bitiş Erteleme etkinse program da hemen başlamaz. İkisi de kapalıyken tuşlar yine tepki vermiyorsa 30 saniye güç kesme adımına geç."
  - q: "Fabrika ayarlarına dönünce ne olur?"
    a: "Kılavuz rES'i temel ayarlar listesinin son maddesi olarak veriyor: cihazın fabrika ayarlarına geri döndürülmesi. Aynı listede sinyal ses seviyesi, ekran parlaklığı ve kırışıklık azaltma gibi ayarlar var. Kılavuz bunu arıza çözümü olarak sunmuyor; önce yeniden başlatma ve güç kesme adımlarını dene."
  - q: "İptalden sonra kapak neden açılmıyor?"
    a: "Profilo'ya göre sıcaklık ya da su seviyesi yüksek olduğunda kapak güvenlik nedeniyle kilitli kalır. Sıcaklık yüksekse ilgili Durulama programını, su seviyesi yüksekse Sıkma ya da uygun bir boşaltma programını başlat. Elektrik kesintisinde kilitli kalan kapak için kılavuz acil kilit açma düğmesini gösteriyor."
  - q: "Home Connect bağlantısı kopunca makineyi sıfırlamak gerekir mi?"
    a: "Hayır. CGK264Z0TR kılavuzu bu durumda yalnız ağ ayarlarını sıfırlamayı öneriyor: Uzaktan Kontrol'e 3 saniye basılıyor, ekranda rES görünene kadar ilgili seçeneğe basılıyor, ardından Başlat Beklet'e 3 saniye basılıyor. Yazılım güncellemesi sürerken ise ağ ya da fabrika ayarı sıfırlanmamalı."
images:
  coverAlt: "Mutfak tezgâhı altında beyaz, önden yüklemeli bir çamaşır makinesi"
  steps:
    - "Sönük ekranlı bir çamaşır makinesi kumanda paneli"
    - "Çamaşır makinesi ekranında küçük bir kilit simgesinin yakın planı"
    - "Çamaşır makinesi kumanda panelinde başlat ve beklet tuşunun yakın planı"
    - "Cam kapağın ardında suyla dolu, sakin duran bir tambur"
    - "Çamaşır makinesi kumanda panelinde yan yana duran iki seçenek tuşu"
    - "Prizden çekilmiş bir çamaşır makinesi fişi ve boş priz"
    - "Çamaşır makinesinin büyük, yuvarlak program seçme düğmesi"
---

Program takıldı, tuşlar tepki vermiyor ya da ekranda bir kod duruyor; ilk akla gelen "makineyi resetlemek". Profilo'nun çamaşır makinesi kılavuzlarında **Reset adında ayrı bir tuş yok**, ama sıfırlamanın her basamağı yazılı: **programı iptal etmek, iki tuşla yeniden başlatmak, en az 30 saniye güç kaynağından ayırmak** ve temel ayarlar menüsünden **rES ile fabrika ayarlarına dönmek.** Bu yazıda sırayı Profilo'nun iki kılavuzundan, CGK264Z0TR ve CGA242X3TR'den çıkardık. Tuş yerleri modelden modele değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekran karanlıksa Başlat Beklet'e bas. Kilit simgesi varsa çocuk kilidini kapat. Başlat Beklet ile iptal et. Kapak kilitliyse Durulama ya da Sıkma. Tuşlar donduysa İlave durulama ve Kırışık Azaltma'ya birlikte 3 saniye bas. Tekrar ederse 30 saniye güçten ayır. Son çare rES. Olmuyorsa servis.

## Ekran ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Ne yaparsın |
|---|---|---|
| **Ekran karanlık, sembol yanıp sönüyor** | Enerji tasarrufu modu | 🛠️ Başlat Beklet'e bas |
| **Kilit simgesi yanıyor** | Çocuk kilidi etkin | 🛠️ Kilidi kapat |
| **Kapak kilitli simgesi** | Kapak kilitli; açmak için program iptal edilebilir | 🛠️ İptal et |
| **Diğer hata kodları** | Fonksiyonel arıza | 🛠️ Yeniden başlat, 🔧 sürerse servis |
| **rES** | Temel ayarlarda fabrika ayarı ya da ağ sıfırlama | Kılavuzdaki adımı izle |

## Adım adım: Profilo çamaşır makinesini sıfırlama

**1. Makine uyuyor olabilir.** CGK264Z0TR kılavuzuna göre makine kısa süre kullanılmazsa **enerji tasarrufu moduna** geçer, tüm göstergeler söner ve bir sembol yanıp söner. Uzun süre kullanılmazsa bekleme moduna geçer. Bu bir arıza değil; arıza tablosunun çözümü **Başlat Beklet tuşuna basmak.**

**2. Çocuk kilidini kapat.** Program çalışmaya başlamıyorsa kılavuzun ilk satırı çocuk kilidi. Kilit, kılavuzda gösterilen **iki tuşa yaklaşık 3 saniye** basılarak açılıp kapanıyor; kapatmak için cihazın çalışır durumda olması gerekiyor. Profilo'ya göre kilit **bekleme modunda ve elektrik kesintisinde de etkin kalır**, yani fişi çekmek onu kapatmaz. CGA242X3TR kılavuzu, çalışan programın iptal edilmemesi için kilidi kapatırken program düğmesinin çıkış programında kalmasını istiyor.

**3. Programı iptal et.** İki kılavuzda da sıra aynı: **Başlat Beklet seçeneğine bas, sonra kapağı aç** ve çamaşırları çıkar. Bitiş Erteleme etkinse program zaten hemen başlamaz; kılavuz bunu da kontrol etmeni istiyor.

**4. Kapak kilitliyse suyu düşün.** Profilo'ya göre **sıcaklık ya da su seviyesi yüksekse kapak güvenlik nedeniyle kilitli kalır.** Sıcaklık yüksekse ilgili **Durulama** programını, su seviyesi yüksekse ilgili **Sıkma** programını ya da uygun bir boşaltma programını başlat. Ayrıntılar [Profilo çamaşır makinesi kapak açılmıyor](/blog/profilo-camasir-makinesi-kapak-acilmiyor/) yazısında.

**5. İki tuşla yeniden başlat.** Ekran ve düğmeler yanıt vermiyorsa ya da listede olmayan bir hata kodu çıkıyorsa CGK264Z0TR'nin çözümü: **cihazı yeniden başlatmak için yaklaşık 3 saniye boyunca İlave durulama ve Kırışık Azaltma üzerine aynı anda bas.** CGA242X3TR'de aynı satır yalnız "cihazı yeniden başlatınız" diyor; tuşu kendi kılavuzundan kontrol et.

**6. 30 saniye güçten ayır.** Arıza tekrar oluşursa kılavuzun ikinci adımı: **cihazı en az 30 saniye güç kaynağından ayır.** Fişi çekebilir ya da sigorta kutusundaki sigortayı kapatabilirsin. Voltaj dalgalanmasında ise işlem gerekmiyor; gerilim sabitlenince program normal biçimde devam ediyor, süre uzuyor.

**7. Son çare rES, sonra servis.** CGK264Z0TR'de temel ayarlar, kılavuzda gösterilen iki tuşa 3 saniye basılarak açılıyor. Program düğmesiyle listedeki **rES** ayarını seç, **Başlat Beklet tuşuna yaklaşık 3 saniye** bas; cihaz fabrika ayarlarına sıfırlanıyor. Çıkmak için Bitiş Erteleme ya da Başlat Beklet dışında bir tuşa bas. Kod yine geri geliyorsa kılavuzun üçüncü adımı **müşteri hizmetlerini aramak**; ararken hata mesajını eksiksiz söyle.

## Fişi çekmek sıfırlar mı

Profilo kılavuzlarında fiş çekmek ya da sigortayı kapatmak, yeniden başlatma işe yaramazsa yapılan **ikinci adım** ve süresi belli: **en az 30 saniye.** CGA242X3TR kılavuzu da aynı üç basamağı veriyor: önce yeniden başlat, arıza tekrar ederse 30 saniye güçten ayır, yine sürerse müşteri hizmetlerini ara. Çocuk kilidini ise kapatmaz. Elektrik kesintisinde kapak kilitli kalırsa kılavuz kapağı **acil kilit açma düğmesiyle** açmayı gösteriyor.

## Ne zaman servis

- Yeniden başlatma ve 30 saniye güç kesme sonrası kod tekrar ediyorsa
- Ekran ve tuşlar hiçbir adımda tepki vermiyorsa
- Su boşaltıldığı hâlde kapak kilitli kalıyorsa
- Kodun anlamını bilmiyorsan: [Profilo çamaşır makinesi hata kodları](/blog/profilo-camasir-makinesi-hata-kodlari/) sayfasına bak

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, program düğmesi, çocuk kilidi, fiş ve musluk sende; makinenin içi, elektronik kart ve kapak kilidi mekanizması yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda tam olarak hangi kod ya da simge var?
3. Yeniden başlatma ve 30 saniye güç kesme sonrası kod geri geldi mi?
4. Tamburda su var mı, kapak açılıyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Sıkma sorunu varsa [Profilo çamaşır makinesi santrifüj yapmıyor](/blog/profilo-camasir-makinesi-santrifuj-yapmiyor/) yazısına bak. Bil, gör, çağır.
