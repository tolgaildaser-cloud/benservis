---
title: "Vestel kurutma makinesi hata kodları ve uyarı sembolleri"
description: "Vestel kurutma makinesinde E00, E03–E08 kodları ve su tankı, filtre, eşanjör uyarıları ne demek? Kılavuza göre evde yapılacaklar ve servis sınırı."
slug: "vestel-kurutma-makinesi-hata-kodlari"
date: "2026-10-23"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork D). Konu seçimi: origin/main'de vestel-kurutma slug'ı hiç yok; başlıkta "Vestel kurutma"
#   geçen sayfa yok. Genel kurutma-makinesi-hata-kodlari yalnız Arçelik/Beko (başlık: "Arçelik ve Beko'da sembol ve ışık dili").
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "vestel kurutma makinesi h" → 1. "vestel kurutma makinesi hata kodları";
#   "vestel kurutma makinesi s" → 1. "…sembolleri ve anlamları", 2. "…su tankı uyarısı". GSC (https___www-5 / -6): satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in alan adından (statik.vestel.com.tr) indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) KM 96201 kurutma makinesi kullanım kılavuzu  https://statik.vestel.com.tr/webfiles/20267478_k.pdf  42 s.  md5 7fc45d1232b175130c00428b74787700
#  (B) KM 10WS1101 kurutma makinesi kullanım kılavuzu  https://statik.vestel.com.tr/webfiles/20269607_k.pdf  52 s.  md5 8dcc7f3ca50f3699086c8efa426635c0
# Hata kodu tablosu A s.34, B s.45 · uyarı sembolleri A s.19, B s.24 · sorun giderme A s.31-33, B s.42-44 · filtre A s.26 · su tankı / eşanjör A s.27-28,
#   B s.38-39 · çocuk kilidi A s.22, B s.27 · program sonu A s.24 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: kodların belgede olmayan nedenleri (kart, sensör, pompa teşhisi) · kodu silme / servis menüsü · pompa ya da kompresöre müdahale
#   · eşanjör kapağı dışında söküm · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: vestel-kurutma-makinesi-hata-kodlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu", "Yumuşak bez", "Elektrikli süpürge"]
steps:
  - "Ekrana bak: E ile başlayan bir kod mu var, yoksa su tankı, filtre ya da eşanjör uyarı sembolü mü yanıyor?"
  - "Su tankı sembolü yanıyorsa program bittikten sonra su tankı çekmecesini çıkar, suyu dök ve tankı yerine tak."
  - "Filtre sembolü yanıyorsa hav filtrelerini çıkar, elle ya da yumuşak bezle temizle; tabaka oluştuysa ılık suyla yıkayıp kurula."
  - "Filtre ledi yanıp sönüyor ve program başlamıyorsa filtrenin yerine tam takılı olduğunu kontrol et."
  - "Eşanjör sembolü yanıyorsa tekmelik kapağını açıp eşanjörün ön yüzeyini süpürgeyle temizle, kanatçıklara çıplak elle dokunma."
  - "Ekranda E03 varsa su tankının boş olduğundan emin ol; kod düzelmezse servisi ara."
  - "Ekranda E08 varsa şebekede voltaj dalgalanması olabilir; makineyi zorlamadan bekle, sürerse yetkili servise başvur."
  - "E00, E04, E05, E06 ya da E07 görüyorsan evde onarım yok; model numarasıyla Vestel yetkili servisini ara."
faq:
  - q: "Vestel kurutma makinesi hata kodları nerede görünür?"
    a: "KM 96201 ve KM 10WS1101 kılavuzlarına göre makinede, yanıp sönen çalışma ışıklarının bir kombinasyonuyla gösterilen yerleşik bir arıza tespit sistemi var. Elektronik gösterge hata oluştuğunda hata sembolleriyle uyarır, program bittiğinde KM 96201'de END yazısı çıkar."
  - q: "Vestel kurutma makinesinde E03 ne demek?"
    a: "KM 10WS1101 tablosunda E03 pompa hatası olarak geçiyor. İki kılavuzun çözümü aynı: su tankının boş olduğundan emin ol, problem düzelmiyorsa teknik servisi ara."
  - q: "E08 hatası neden çıkar?"
    a: "Vestel'in tablosu E08 için şehir şebekesinde voltaj dalgalanması olabileceğini yazıyor. KM 96201 kılavuzuna göre voltaj makinenin çalışmasına uygun olduğunda makine çalışmaya başlar; KM 10WS1101 kılavuzu en yakın yetkili servise başvurmanı istiyor."
  - q: "Su tankı uyarısı yanıyor ama tank boş, ne yapmalıyım?"
    a: "Vestel'in sorun giderme tablosu iki sebep sayıyor: su tankı dolu olabilir ya da ürün doğrudan su giderine bağlıysa su boşaltma hortumu katlanmış olabilir. Tank boşsa ve makine gidere bağlıysa hortumu kontrol et; uyarı sürerse servis."
  - q: "Kurutma 20 dakikada bitiyor, arıza mı?"
    a: "KM 10WS1101 kılavuzuna göre tamburda çamaşır yoksa ya da çamaşırlar kuruysa boş tambur algılama devreye girer ve program 20 dakika içinde biter. Çamaşırlar hâlâ ıslaksa nem sensöründe arıza olabilir; bu durumda teknik servis aranır."
images:
  coverAlt: "Çamaşır odasında beyaz, önden yüklemeli bir kurutma makinesi ve yanında katlanmış havlular"
  steps:
    - "Kurutma makinesinin kontrol panelindeki küçük dijital gösterge ve yanındaki simgeler"
    - "Kurutma makinesinin üst kısmından dışarı çekilmiş plastik su tankı çekmecesi"
    - "Kurutma makinesi kapağının iç çerçevesinden çıkarılmış hav filtresi ve üzerindeki ince tüy tabakası"
    - "Kurutma makinesinin kapak yuvasına yeniden yerleştirilen temiz bir hav filtresi"
    - "Kurutma makinesinin alt ön kısmında açılmış tekmelik kapağı ve arkasındaki eşanjör kapağı"
    - "Boşaltılıp yerine takılmayı bekleyen boş bir su tankı"
    - "Duvardaki bir prize takılı kurutma makinesi fişi"
    - "Kurutma makinesinin kapak içindeki ürün etiketi ve yanında bir kullanım kılavuzu"
---

Vestel kurutma makinesinin ekranında bir **E kodu** belirdi ya da bir uyarı sembolü yanıp sönüyor. Vestel'in kılavuzu bunların iki ayrı dil olduğunu söylüyor: **su tankı, filtre ve eşanjör sembolleri** senin yapacağın bir bakımı hatırlatır, **E ile başlayan kodlar** ise çoğunlukla servis işidir. Bu yazıda Vestel'in KM 96201 ve KM 10WS1101 kurutma makinesi kullanım kılavuzlarındaki hata kodu tablosunu ve sorun giderme satırlarını topladık. Kod listesi ve tuş adları modele göre değişebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Su tankı sembolü = tankı boşalt. Filtre sembolü = hav filtresini temizle. Eşanjör sembolü = eşanjörü temizle. E03 = önce su tankını kontrol et, düzelmezse servis. E08 = şebekede voltaj dalgalanması. E00, E04, E05, E06, E07 = doğrudan teknik servis.

## Vestel kurutma makinesi hata kodları tablosu

Vestel'e göre makinede, **yanıp sönen çalışma ışıklarının bir kombinasyonu** ile gösterilen yerleşik bir arıza tespit sistemi var. KM 10WS1101 kılavuzu kodların adını da veriyor:

| Kod | Kılavuzdaki adı (KM 10WS1101) | Kim ne yapar |
|---|---|---|
| **E00** | Kullanıcı arayüzü hatası | 🔧 Teknik servis |
| **E03** | Pompa hatası | 🛠️ Su tankını kontrol et, düzelmezse 🔧 servis |
| **E04** | Kompresör arızası | 🔧 Teknik servis |
| **E05** | Kompresör NTC hatası | 🔧 Teknik servis |
| **E06** | Kapı NTC hatası | 🔧 Teknik servis |
| **E07** | Motor hatası | 🔧 Teknik servis |
| **E08** | Voltaj dalgalanma hatası | 🛠️ Voltajın düzelmesini bekle, sürerse 🔧 servis |

KM 96201'in tablosunda E00 satırı yok; E03'ten E08'e kadar çözümler aynı.

## Adım adım: kod ve uyarıları gidermek

**1. Kod mu, sembol mü?** Kılavuza göre elektronik gösterge, makinede bir hata oluştuğunda **hata sembolleriyle** uyarır; program bittiğinde KM 96201'de **"END"** yazısı çıkar. Panelde üç bakım sembolü var: **su tankı uyarısı, hav filtresi temizliği uyarısı ve eşanjör temizliği uyarısı.** Program sonunda Başlat / Beklet ile birlikte su tankı, filtre ve eşanjör ışıklarının yanması normaldir; kılavuz her programdan sonra filtreyi temizlemeni ve tankı boşaltmanı istiyor.

**2. Su tankı sembolü.** Sorun giderme tablosunda iki sebep var: **su tankı dolu olabilir** ya da ürün doğrudan su giderine bağlıysa **su boşaltma hortumu katlanmış** olabilir. Tankı boşaltmak için su tankı çekmecesini çekip tankı dikkatlice çıkar, suyu dök, boşaltma kapağında hav birikmişse su tutarak temizle ve tankı yerine yerleştir. Kılavuzun uyarısı: **su tankını program devam ederken kesinlikle çıkarma;** yoğuşan su içme suyu değildir. Ayrıntı [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/) yazısında.

**3. Filtre sembolü.** Sebep olarak hav filtresinin temizlenmemiş olması, filtre yuvasının havla tıkanması ya da filtre gözeneklerinde tabaka oluşması sayılıyor. Yükleme kapağını aç, hav filtrelerini yukarı çekerek çıkar, iç ve dış filtreyi **elle ya da yumuşak bir bezle** temizle. Gözeneklerde tabaka oluştuysa filtreyi **ılık suyla yıka** ve takmadan önce **iyice kurula.** Yuvada hav birikmişse bir bezle temizle.

**4. Filtre ledi yanıp sönüyor, program başlamıyor.** Kılavuza göre sebep **filtrenin yerine takılmamış** olması olabilir; filtreyi yerine tak. Filtre yerinde olduğu hâlde led yanıp sönmeye devam ediyorsa **filtre sensöründe arıza** olabilir; bu durumda teknik servis aranır.

**5. Eşanjör sembolü.** Isı eşanjörü kirli olabilir. Kılavuzun yolu: tekmelik kapağını aç, eşanjör kapağı kilitlerini oklarla gösterilen yönde çevirerek kapağı çıkar, **eşanjörün ön yüzeyini süpürge yardımıyla** temizle, kapağı ve kilitleri yerine oturt. Kapağı açınca plastik tabanda biraz su görmen normal. Vestel'in uyarısı açık: **eşanjör kanatçıkları keskindir, çıplak elle temizlemeyi deneme.** Uyarı yanmasa da eşanjör **her 30 kurutmadan sonra ya da ayda bir** temizlenmeli. Bu kapakların dışında bir parçayı sökme.

**6. E03.** İki kılavuzun çözümü aynı: **su tankının boş olduğundan emin ol,** problem düzelmiyorsa teknik servisi ara. KM 10WS1101 bu kodu **pompa hatası** olarak adlandırıyor; pompaya müdahale servisin işi.

**7. E08.** Vestel'e göre **şehir şebekesinde voltaj dalgalanması** olabilir. KM 96201 kılavuzu voltaj değeri makinenin çalışmasına uygun olduğunda makinenin çalışmaya başlayacağını yazıyor; KM 10WS1101 ise **en yakın yetkili servise** başvurmanı istiyor. Kod sürüyorsa servisi ara.

**8. E00, E04–E07.** Kullanıcı arayüzü, kompresör, kompresör NTC, kapı NTC ve motor hatalarının hepsinde tablonun tek cevabı **"Teknik servisi arayın."** Evde yapılacak bir onarım yok.

## Program yarıda kesildiyse

Ekranda kod yoksa ama program durduysa Vestel'in tablosu üç sebep sayıyor: **yükleme kapağı açılmış** olabilir, **elektrik kesintisi** yaşanmış olabilir ya da **su tankı dolu** olabilir. Kapağı kapat, tankı boşalt ve programı başlatmak için **Başlat / Beklet** düğmesine bas. Makine hiç devreye girmiyorsa fişi, kapağı ve **çocuk kilidini** kontrol et. KM 96201'de kilit **Narin ve Kırışık Önleme** tuşlarına aynı anda 3 saniye basılarak açılıp kapanır, kilit açıkken tüm tuşlar devre dışıdır ve ekranda 2 saniye "CL" yazısı görünür. KM 10WS1101'de aynı işi **"1" ve "2" tuşları** yapar. Kilit program sonunda kendiliğinden kapanmaz.

KM 10WS1101 kılavuzunun bir notu daha var: tamburda çamaşır yoksa ya da çamaşırlar kuruysa **boş tambur algılama** devreye girer ve program **20 dakika içinde** biter. Çamaşırlar hâlâ ıslaksa nem sensöründe arıza olabilir; teknik servis aranır.

## Ne zaman servis

- E00, E04, E05, E06 ya da E07 görünüyorsa
- E03 su tankı boşken de sürüyorsa
- Filtre takılıyken filtre ledi yanıp sönüyorsa
- Çamaşırlar ıslakken program 20 dakikada bitiyorsa

⛔ **Kendin-çöz sınırı burada biter.** Su tankı, hav filtresi, filtre yuvası ve eşanjörün ön yüzeyi sende; pompa, kompresör, motor, sensörler, elektronik kart ve gövdenin içi yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (KM ile başlayan kod)?
2. Ekranda tam olarak hangi kod ya da sembol var?
3. Su tankı boş, filtre temiz ve yerinde mi?
4. Kod makineyi kapatıp açınca geri geliyor mu?

Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kurutmayan makinenin genel kontrolleri [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/), filtre ve kondenser bakımı [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazısında. Bil, gör, çağır.
