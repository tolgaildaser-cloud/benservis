---
title: "LG çamaşır makinesi deterjan almıyor"
description: "LG çamaşır makinesi deterjanı çekmecede bırakıyorsa LG'nin sırası: deterjan miktarı, doğru bölme, çekmeceyi yavaş kapatma ve çekmece temizliği."
slug: "lg-camasir-makinesi-deterjan-almiyor"
date: "2026-10-02"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2. koşu 10:51, LG). Belge bu koşuda yeniden curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200 application/pdf, md5 yerel kopyayla aynı.
# Belge yeri lg.com/tr ürün destek sayfasındaki "Kılavuzlar" listesi (28 Eyl'de bulundu, yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-camasir-sprint/). #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
#  (C) LG F4Y5EYW0W kullanım kılavuzu (Türkçe)  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a  (PDF sayfası = basılı sayfa no)
# Sorun giderme (C s.49) "Deterjan tamamıyla dağıtılmıyor ya da hiç dağıtılmıyor.": "Çok fazla deterjan kullanılıyor. • Deterjan üreticisinin talimatlarına uyun. / Tahliye Pompası Filtresi tıkalı olabilir. • Tahliye filtresini temizleyin."
# C s.27 Deterjan Bölmesinin Kullanılması: 1 çekmeceyi aç 2 uygun bölümlere deterjan ve yumuşatıcı (a ana yıkama, b ön yıkama, c sıvı kumaş yumuşatıcı) 3 "Döngüyü başlatmadan önce deterjan bölmesi çekmecesini hafifçe kapatın.
#   • Çekmeceyi sert şekilde kapatmak, deterjanın başka bir bölüme taşmasına veya programlanandan daha önce kazana dağılmasına neden olabilir." · "Döngü sonunda deterjan bölümlerinde küçük bir miktar su kalması normaldir."
#   · yumuşatıcı maksimum dolum çizgisine kadar; "Deterjan bölmesinde 1 günden fazla kumaş yumuşatıcısı bırakmayın."; çok kalınsa seyreltilmeli; "Çamaşır yıkama sırasında su besleme işlemi sırasında çekmeceyi açmayın."
# C s.26 dozaj: üretici talimatı; "Çok fazla köpüklenme olursa, deterjan miktarını azaltın." · Zaman Erteleme ya da Ön Yıkama seçiliyse "sıvı deterjan kullanmayın" (bölmede ya da kazanda sertleşebilir) · "Deterjanın sertleşmesine izin vermeyin. Sertleşen deterjan, tıkanmaya ... neden olabilir."
#   · kısmi yük normal miktarın 1/2'si · C s.3 "Daha az miktardaki çamaşır için daha az deterjan kullanın."
# C s.43 Deterjan Bölmesinin Temizlenmesi: "Deterjan bölmesinin altında sıvı deterjanlar kalabilir ve tamamen dağılmayabilir." ayda bir-iki kontrol; 1 çekmece duruncaya kadar çek, çıkarma düğmesine basarken çıkar 2 çekmece ve parçalarını ılık suyla yıka, "sadece su"
#   3 yuvayı bez ya da küçük, metal olmayan fırçayla temizle 4 kuru havlu/bezle sil 5 parçaları tak, çekmeceyi yerleştir · C s.40 temizlikten önce fişi çek
# C s.42 tahliye pompası filtresi: önce suyun soğuması, 1 fişi çek, kapak başlığını aç ... · C s.50 deterjan bölmesi temizlenmezse koku
# C s.41 "Su, deterjan bölmesine girmediğinde kontrol panelinde 1E hata mesajı gösterilecektir." · C s.44 1E: musluğu tamamen aç, hortum kıvrık mı.
# BİLEREK YAZILMAYANLAR: tahliye pompası filtresini açma adımı (acil tahliye işlemi, sıcak su; OE rehberine link verildi) · su giriş filtresi temizliği (C s.42 "küçük penselerle" → alet kuralı) · valf/kart teşhisi (belgede yok)
#   · sirke/çamaşır suyu gibi belgede olmayan temizlik maddeleri (belge çekmece için "sadece su" diyor) · başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-deterjan-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Ilık su", "Bez ya da küçük, metal olmayan bir fırça", "Kuru bir havlu"]
steps:
  - "Deterjanı paketindeki üretici talimatına göre ölç; az çamaşırda daha az koy."
  - "Deterjanı ana yıkama bölümüne, yumuşatıcıyı en fazla dolum çizgisine kadar kendi bölümüne koy."
  - "Programı başlatmadan önce çekmeceyi hafifçe kapat."
  - "Zaman Erteleme ya da Ön Yıkama seçtiysen sıvı deterjan kullanma."
  - "Fişi çek, çekmeceyi durana kadar çekip çıkarma düğmesine basarak çıkar ve parçalarını ılık suyla yıka."
  - "Çekmece yuvasını bez ya da metal olmayan küçük bir fırçayla temizle, kuru bir havluyla silip çekmeceyi yerine tak."
  - "Çekmeceye hiç su gelmiyor ve ekranda 1E varsa su musluğunun tamamen açık olduğunu kontrol et."
faq:
  - q: "LG çamaşır makinesi deterjanı neden çekmecede bırakır?"
    a: "LG'nin F4Y5EYW0W kullanım kılavuzundaki 'Deterjan tamamıyla dağıtılmıyor ya da hiç dağıtılmıyor' satırı iki neden sayıyor: çok fazla deterjan kullanılması ve tahliye pompası filtresinin tıkalı olması. Kılavuzun diğer bölümlerine göre sert kapatılan çekmece, sertleşen deterjan ve bölmenin altında biriken sıvı deterjan da dağılmayı etkileyebiliyor."
  - q: "Program bitince çekmecede biraz su kalıyor. Arıza mı?"
    a: "Hayır. LG'nin kılavuzuna göre döngü sonunda deterjan bölümlerinde küçük bir miktar su kalması normal."
  - q: "Çekmeceyi neyle temizlemeliyim?"
    a: "LG, dağıtıcı çekmecesini temizlemek için sadece su kullanılmasını istiyor: çekmece ve parçaları ılık suyla yıkanıyor, çekmece yuvası bez ya da küçük, metal olmayan bir fırçayla temizleniyor, kalan nem kuru bir havluyla alınıyor. LG bu kontrolü ayda bir ya da iki kez öneriyor."
  - q: "Yumuşatıcı bölmede kalıyor. Ne yapmalıyım?"
    a: "LG'ye göre yumuşatıcı çok kalınsa bölmede kalabilir; kolay akması için seyreltilmeli. Kılavuz yumuşatıcının maksimum dolum çizgisini geçmemesini ve bölmede 1 günden fazla bırakılmamasını da istiyor; bırakılırsa sertleşebiliyor."
images:
  coverAlt: "Dışarı çekilmiş çamaşır makinesi deterjan çekmecesinin ana bölmesinde topaklanmış toz deterjan"
---

Yıkama bitti, deterjan çekmecesini açtın ve koyduğun deterjan ya da yumuşatıcı hâlâ orada. LG'nin F4Y5EYW0W kullanım kılavuzunda bunun kendi satırı var: **"Deterjan tamamıyla dağıtılmıyor ya da hiç dağıtılmıyor."** LG bu satırda iki neden sayıyor: **çok fazla deterjan** kullanılması ve **tahliye pompası filtresinin** tıkalı olması. Kılavuzun deterjan ve bakım bölümleri buna birkaç kullanım alışkanlığı daha ekliyor: çekmecenin nasıl kapatıldığı, sıvı deterjanın ne zaman kullanılmaması gerektiği ve bölmenin altında biriken deterjan. Bu yazıda önce dozajı ve kullanımı, sonra çekmece temizliğini LG'nin kendi talimatıyla anlatıyoruz. Kaynak tek bir modelin kılavuzu; tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Deterjanı üreticinin talimatıyla ölç, az çamaşıra az koy → her şeyi kendi bölümüne, yumuşatıcı çizgiyi geçmesin → çekmeceyi yavaşça kapat → Zaman Erteleme ya da Ön Yıkama'da sıvı deterjan yok → fişi çekip çekmeceyi çıkar, ılık suyla yıka, yuvasını temizle → çekmeceye hiç su gelmiyorsa ve 1E varsa musluğa bak. Tahliye filtresi için OE rehberine.

## Adım adım: evde denenecekler

**1. Dozajı düzelt.** LG'nin tablosundaki ilk neden: **çok fazla deterjan kullanılıyor** → **deterjan üreticisinin talimatlarına uyun.** Kılavuzun dozaj bölümü de deterjanın **üreticinin talimatına göre** kullanılmasını, **kısmi yükte normal miktarın yarısının** konmasını ve **daha az çamaşır için daha az deterjan** kullanılmasını istiyor. Çok köpük görüyorsan LG'nin önerisi **deterjan miktarını azaltmak.**

**2. Doğru bölmeyi kullan.** LG'nin çekmecesinde üç bölüm var: **ana yıkama** deterjanı, **ön yıkama** deterjanı ve **sıvı kumaş yumuşatıcı** bölümü. Deterjanı ana yıkama bölümüne koy. Yumuşatıcıyı **maksimum dolum çizgisine kadar** doldur; LG'ye göre çizginin üstüne çıkan yumuşatıcı **erken dağılabilir** ve kıyafetlerde leke bırakabilir.

**3. Çekmeceyi yavaşça kapat.** LG'nin talimatı: **döngüyü başlatmadan önce deterjan bölmesi çekmecesini hafifçe kapatın.** Kılavuza göre çekmeceyi **sert şekilde kapatmak,** deterjanın **başka bir bölüme taşmasına** ya da programlanandan **daha önce kazana dağılmasına** neden olabiliyor. Yıkama sırasında, makine su alırken çekmeceyi açma.

**4. Erteleme ve ön yıkamada sıvı deterjan yok.** LG'ye göre **Zaman Erteleme** işlevini kullanıyorsan ya da **Ön Yıkama** seçeneğini seçtiysen sıvı deterjan kullanılmamalı; sıvı deterjan anında dağılabiliyor ve **deterjan bölmesinde ya da kazanın içinde sertleşebiliyor.** Kılavuzun notu: **deterjanın sertleşmesine izin vermeyin;** sertleşen deterjan **tıkanmaya** yol açabiliyor.

**5. Çekmeceyi çıkarıp yıka.** LG'nin bakım bölümüne göre **deterjan bölmesinin altında sıvı deterjanlar kalabilir ve tamamen dağılmayabilir;** LG çekmecenin **ayda bir ya da iki kez** kontrol edilmesini istiyor. Temizlikten önce **fişi çek.** Çekmeceyi **durana kadar çek,** sonra **çıkarma düğmesine basarken** hafifçe dışarı al. Çekmeceyi ve parçalarını **ılık suyla** yıka; LG dağıtıcı çekmecesi için **sadece su** kullanılmasını istiyor.

**6. Yuvayı temizle, yerine tak.** Çekmecenin oturduğu yuvayı **bir bezle,** girintileri **küçük, metal olmayan bir fırçayla** temizle; LG özellikle girintilerin **üst ve alt taraflarındaki** kalıntıların alınmasını istiyor. Kalan nemi **kuru bir havlu ya da bezle** sil, parçaları yerlerine tak ve çekmeceyi yerleştir.

**7. Çekmeceye su geliyor mu?** LG'nin bakım bölümünde çekmeceyle ilgili bir not daha var: **su deterjan bölmesine girmediğinde kontrol panelinde 1E hata mesajı** gösteriliyor. Ekranda 1E varsa LG'nin adımları arasında **su besleme musluğunu tamamen açmak,** evdeki başka bir musluktan suyun gelip gelmediğine bakmak ve giriş hortumunun **kıvrılmadığından** emin olmak var. Kodun bütün adımları [LG çamaşır makinesi IE hatası](/blog/lg-camasir-makinesi-ie-hatasi/) rehberinde.

## Tahliye filtresi

LG'nin tablosundaki ikinci neden **tahliye pompası filtresinin tıkalı** olması; çözüm **tahliye filtresini temizlemek.** Bu işlem filtre kapağını açıp makinede kalan suyu boşaltmayı da içeriyor; LG önce **fişin çekilmesini** ve filtreyi temizlemeden önce **suyun soğumasının** beklenmesini istiyor. LG'nin adımlarını [LG çamaşır makinesi OE hatası](/blog/lg-camasir-makinesi-oe-hatasi/) rehberinde anlattık.

## Normal olan

Program bitince bölmelerde biraz su görmen sorun değil: LG'ye göre **döngü sonunda deterjan bölümlerinde küçük bir miktar su kalması normal.** Yumuşatıcı bölmede kalıyorsa kalınlığına bak; LG'ye göre yumuşatıcı **çok kalınsa bölmede kalabilir** ve kolay akması için **seyreltilmeli.** Yumuşatıcıyı bölmede **1 günden fazla** bırakma; sertleşebiliyor.

Hangi gözün ne için olduğunu markadan bağımsız anlattığımız [çamaşır makinesi deterjan çekmecesi hangi göz](/blog/camasir-makinesi-deterjan-cekmecesi-hangi-goz/) yazısına, genel nedenler için [çamaşır makinesi deterjan almıyor](/blog/camasir-makinesi-deterjan-almiyor/) yazısına bakabilirsin. Çekmecede kalan deterjan kokuya da yol açıyorsa [LG çamaşır makinesi kokuyor](/blog/lg-camasir-makinesi-kokuyor/) rehberine geç.

## Ne zaman servis

- Dozaj doğru, çekmece temiz, musluk açık ve ekranda kod yokken çekmeceye hiç su gelmiyorsa yetkili LG servisine başvur.
- 1E, musluk tamamen açık ve hortum düzken sürüyorsa.

⛔ **Kendin-çöz sınırı burada biter.** Deterjan, çekmece ve musluk kullanıcıya; su giriş vanası ve makinenin içi uzmana aittir. LG'nin uyarısı açık: cihazın panellerini ya da kendisini sökmeye çalışma.

## Servisi aramadan önce kısa özet

1. Çekmecede kalan toz deterjan mı, sıvı deterjan mı, yumuşatıcı mı?
2. Ne kadar deterjan koyuyorsun, yük tam mı kısmi mi?
3. Zaman Erteleme ya da Ön Yıkama seçili miydi?
4. Çekmece en son ne zaman çıkarılıp yıkandı?
5. Ekranda 1E ya da başka bir kod var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
