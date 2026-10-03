---
title: "Uğur kurutma makinesi çalışmıyor"
description: "Uğur kurutma makinesi açılmıyor ya da başlamıyorsa Uğur'un tablosu: fiş ve elektrik, güç düğmesi, kapak, program, su kabı ve tüy filtresi uyarıları."
slug: "ugur-kurutma-makinesi-calismiyor"
date: "2026-10-03"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, Uğur). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile ugur.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adres ugur.com.tr ürün sayfalarındaki "Kullanım Kılavuzu" indirme bağlantısından (göreli /Data/EditorFiles/docs/). Web araması yok. Sayfa = PDF sayfası (= basılı numara).
#  K1) UKM 3093 B101 / UKM 3103 B101 / UKM 3103 G101  https://ugur.com.tr/Data/EditorFiles/docs/100972_KK.pdf  36 s.  md5 3acf83f64cecab0b1b8a337ff970997e
#      (100973_KK.pdf — UKM 3103 ürün sayfasının bağlantısı — md5 aynı, birebir aynı dosya)
# Ana satırlar (K1 s.26; düğme/simgeler metin katmanında yok, sayfa görüntüsünden okundu):
#   "Ekran açık değil." → "• Güç kaynağının çalışıp çalışmadığını kontrol edin. • Elektrik fişinin takılı olup olmadığını kontrol edin. • Seçilen programı kontrol edin.
#     • [güç simgesi] düğmesine basın."
#   "Kurutucu çalışmıyor." → "• Kurutma makinesini şebekeye bağlayın. • Kurutma makinesini açın. • Kapağın kapalı olup olmadığını kontrol edin. • Programın ayarlandığını
#     kontrol edin. • [başlat/duraklat simgesi] düğmesine basın."
#   "[su kabı simgesi] yanıyor." → "• Su kabını kontrol edin. Doluysa lütfen yoğuşma suyunu boşaltın ve kurutucuyu yeniden başlatın. • Su kabı dolu değilse lütfen kurutucuyu
#     doğrudan yeniden başlatın. • İlk iki adımı tamamladıktan sonra "[simge]" ikonu hala yanıyorsa lütfen Uğur Yetkili Servisini arayın."
#   "[filtre simgesi] yanıyor." → "• Tüy filtresini temizleyin."
#   "Kurutma makinesi programın sonunda kapanıyor." → "• Enerji tasarrufu için kurutma makinesi otomatik olarak kapanır. Bu bir hata değil normal bir fonksiyondur."
#   UYARI: "Sorunları kendiniz çözemiyorsanız ve yardıma ihtiyacınız varsa [güç] düğmesine basın. • Elektrik fişini çekin ve Uğur Yetkili Servisini arayın."
#   s.25 kod tablosu: [su kabı simgesi] "Su kabı dolu" → "Su kabını boşaltın." · "Su pompası arızası veya su seviye sensörü arızası" / "E32" Nem sensörü hatası /
#     "E33" Sıcaklık sensörü hatası / "E64" BLDC motor bağlantı hatası / "E82" PCB bağlantı hatası → "Uğur Yetkili Servisini arayın." · "LED ekranda başka bir uyarı
#     görüntüleniyorsa ve kurutma makinesi çalışmıyorsa lütfen servisi arayın."
# Ek: s.22 "Su kabı tamamen dolduğunda program durdurulacak ve ekranda "[simge]" yanacaktır. Su kabı boşaltıldıktan sonra, kurutma makinesi [başlat] tuşuna basılarak yeniden
#   başlatılabilir." · s.11 "Anahtarlı priz kullanılıyorsa, gücü doğrudan kapatmak için lütfen anahtara basın." · s.12 "Taşıdıktan sonra 2 saat bekletin." · s.16 Çocuk Kilidi:
#   "Çocuk kilidi işlevi ayarlandığında, ekranda Çocuk kilidi simgesi görüntülenir ve [simge] düğmesi dışındaki tüm düğmeler devre dışı bırakılır." · "Çocuk kilidi fonksiyonunu devre
#   dışı bırakmak için 3 saniye boyunca "Aydınlatma" ve [simge] butonlarına aynı anda basılmalıdır." · s.10 "Kurutma makinesini donma tehlikesi olan bir odaya kurmayın.
#   Donma noktası civarındaki sıcaklıklarda kurutma makinesi düzgün çalışmayabilir." · s.27 ortam sıcaklığı "+5°C ~ +35°C".
# BİLEREK YAZILMAYANLAR: sigorta/priz/tesisat müdahalesi (belge yalnız "güç kaynağının çalışıp çalışmadığını kontrol edin" diyor) · çocuk kilidinin ikinci düğmesinin adı
#   (belgede simge) · pompa/sensör/kart teşhisi (servis satırları) · fiyat.
# Alıntı denetim tablosu: ugur-kurutma-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kurutma makinesinin kullanım kılavuzu"]
steps:
  - "Fişin prize takılı olduğunu ve prizde elektrik olduğunu kontrol et; anahtarlı priz kullanıyorsan anahtarı aç."
  - "Güç düğmesine basarak makineyi aç."
  - "Kapağın tam kapalı olduğunu kontrol et."
  - "Program seçicinin bir programa ayarlı olduğunu kontrol et ve başlat/duraklat düğmesine bas."
  - "Su kabı simgesi yanıyorsa su kabını çekip yoğuşma suyunu boşalt, yerine tak ve makineyi yeniden başlat."
  - "Filtre simgesi yanıyorsa kapak tüy filtresini çıkar, tüylerini temizle, kurulayıp yerine tak."
faq:
  - q: "Uğur kurutma makinem neden çalışmıyor?"
    a: "Uğur'un UKM serisi kılavuzundaki tablo, makine çalışmıyorsa şebekeye bağlı olup olmadığını, makinenin açık olup olmadığını, kapağın kapalı olup olmadığını ve programın ayarlı olup olmadığını kontrol etmeni, ardından başlat/duraklat düğmesine basmanı istiyor. Ekran hiç yanmıyorsa güç kaynağını, fişi ve seçilen programı kontrol edip güç düğmesine bas."
  - q: "Program bitince makine kendiliğinden kapanıyor, arıza mı?"
    a: "Hayır. Kılavuza göre kurutma makinesi enerji tasarrufu için programın sonunda otomatik olarak kapanır; bu bir hata değil, normal bir fonksiyondur."
  - q: "Düğmelere basıyorum ama tepki vermiyor."
    a: "Ekranda çocuk kilidi simgesi var mı bak. Kılavuza göre çocuk kilidi açıkken bir düğme dışındaki tüm düğmeler devre dışı kalır. Kilidi kapatmak için 'Aydınlatma' düğmesiyle kılavuzda gösterilen ikinci düğmeye aynı anda 3 saniye basılı tutman gerekiyor."
  - q: "Makineyi yeni taşıdık, hemen çalıştırabilir miyim?"
    a: "Uğur kılavuzu taşımadan sonra makineyi 2 saat bekletmeni istiyor. İlk kullanımdan önce tamburun içini yumuşak bir kumaşla temizlemeni de öneriyor."
images:
  coverAlt: "Ekranı kapalı bir kurutma makinesinin önünde, prizdeki fişe uzanan bir el"
---

Kurutma makinesinin düğmesine basıyorsun ve ya ekran hiç yanmıyor ya da ekran açık ama program başlamıyor. Uğur'un UKM serisi kurutma makinesi kılavuzunun sorun giderme tablosu bu iki durumu ayrı satırlara koyuyor: **"Ekran açık değil."** ve **"Kurutucu çalışmıyor."** İki satırın çözümleri de kullanıcı seviyesinde: elektrik, düğme, kapak ve program. Ekranda bir simge yanıyorsa tablo ona da ayrı bir çözüm veriyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı, prizde elektrik var mı → güç düğmesine bas → kapak tam kapalı mı → program seçili mi, başlat/duraklat'a bas → su kabı simgesi yanıyorsa kabı boşalt, yeniden başlat → filtre simgesi yanıyorsa tüy filtresini temizle. Su kabı boşken simge sönmüyorsa ya da E kodu varsa → servis.

## Adım adım: evde denenecekler

**1. Elektriği kontrol et.** "Ekran açık değil" satırının ilk iki çözümü **güç kaynağının çalışıp çalışmadığını** ve **elektrik fişinin takılı olup olmadığını** kontrol etmek. "Kurutucu çalışmıyor" satırı da aynı yerden başlıyor: **"Kurutma makinesini şebekeye bağlayın."** Uğur kılavuzunda bir not daha var: **anahtarlı priz** kullanılıyorsa güç doğrudan anahtardan kapatılıp açılıyor; anahtarın açık konumda olduğuna bak.

**2. Makineyi aç.** Tabloya göre sıradaki iş **"Kurutma makinesini açın."**; ekran kapalıysa kılavuz **güç düğmesine basmanı** istiyor.

**3. Kapağı kontrol et.** "Kurutucu çalışmıyor" satırının çözümlerinden biri: **"Kapağın kapalı olup olmadığını kontrol edin."**

**4. Programı seç ve başlat.** Tablo hem **"Seçilen programı kontrol edin."** hem **"Programın ayarlandığını kontrol edin."** diyor; ardından **başlat/duraklat düğmesine bas.**

**5. Su kabı simgesi yanıyorsa kabı boşalt.** Kılavuzun hata tablosunda ilk satır **"Su kabı dolu"**, çözüm **"Su kabını boşaltın."** Uğur'a göre su kabı tamamen dolduğunda **program durdurulur** ve ekranda su kabı simgesi yanar. Kabı **iki elinle dışarı çek**, eğerek yoğuşma suyunu dök, yerine tak ve **başlat/duraklat düğmesiyle** yeniden başlat. Kap dolu değilse kılavuz makineyi **doğrudan yeniden başlatmanı** söylüyor.

**6. Filtre simgesi yanıyorsa filtreyi temizle.** Tabloda filtre simgesinin karşısındaki tek satır: **"Tüy filtresini temizleyin."** Kapağı aç, kapak filtresini çıkar, açıp tüyleri temizle; kılavuza göre akan suyun altında da temizleyebilirsin. Takmadan önce **iyice kurula** ve **doğru yöne** dikkat et.

## Arıza sayılmayan durumlar

- **Program sonunda kapanıyor:** kılavuza göre makine **enerji tasarrufu için otomatik olarak kapanır**; bu bir hata değil, normal bir fonksiyon.
- **Düğmeler tepki vermiyor:** ekranda **çocuk kilidi** simgesi varsa kilit açık demektir. Kılavuza göre kilit açıkken bir düğme dışındaki tüm düğmeler devre dışı kalır; kapatmak için **"Aydınlatma" düğmesiyle kılavuzda gösterilen ikinci düğmeye aynı anda 3 saniye** basılı tut.
- **Makine yeni taşındı:** Uğur taşımadan sonra **2 saat bekletmeni** istiyor.
- **Soğuk oda:** kılavuz makineyi **donma tehlikesi olan bir odaya kurmamanı** yazıyor; donma noktası civarında makine **düzgün çalışmayabilir.** Teknik tabloda ortam sıcaklığı **+5°C ile +35°C** arası.

Makine çalışıyor ama çamaşır kurumuyorsa: [Uğur kurutma makinesi kurutmuyor](/blog/ugur-kurutma-makinesi-kurutmuyor/). Su kabı uyarısının genel anlatımı için [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/), kodlar için [kurutma makinesi hata kodları](/blog/kurutma-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Ne zaman servis

- **Su kabını boşalttın, makineyi yeniden başlattın ama su kabı simgesi hâlâ yanıyorsa:** kılavuz bu durumda **Uğur Yetkili Servisini aramanı** istiyor. Hata tablosunda aynı simgenin ikinci nedeni **"Su pompası arızası veya su seviye sensörü arızası."**
- Ekranda **E32** (nem sensörü), **E33** (sıcaklık sensörü), **E64** (BLDC motor bağlantısı) ya da **E82** (PCB bağlantısı) görünüyorsa: çözüm doğrudan **Uğur Yetkili Servisi.**
- Kılavuzun genel notu: LED ekranda **başka bir uyarı** görünüyor ve makine çalışmıyorsa servisi ara.
- Fiş takılı, prizde elektrik var ama ekran yine yanmıyorsa.

Kılavuzun kuralı: sorunu kendin çözemiyorsan güç düğmesine bas, **fişi çek ve Uğur Yetkili Servisi'ni ara** (Çağrı Merkezi 444 84 87). Onarımları yalnızca **yetkili teknisyenler** yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, düğme, kapak, program, su kabı ve tüy filtresi kullanıcıya; pompa, sensörler, motor ve kart servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
