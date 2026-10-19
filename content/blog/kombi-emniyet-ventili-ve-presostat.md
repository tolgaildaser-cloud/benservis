---
title: "Kombi emniyet ventili ve su basıncı sensörü: su damlatıyorsa ne yapmalı, kim değiştirir?"
description: "Kombi emniyet ventili neden su kaçırır, basınç kaç bar olmalı? Su basıncı sensörü hangi kodla arıza verir? Baymak, DemirDöküm ve ECA kılavuzları ne diyor?"
slug: "kombi-emniyet-ventili-ve-presostat"
date: "2026-10-16"
category: "Kombi"
parca:
  cihaz: "kombi-termosifon"
  tur: "emniyet-ventili-presostat"
# --- Provenans (yayında görünmez) ---
# 2026-10-16 PAZ (#164 C-4, #165 C şablonu). Kanıt: seo/2026-10-09-KAPSAM-ANALIZI.md §11.5 s.694 üretim sırası #4 "Kombi / Termosifon | emniyet ventili/presostat | 9 | 9 | kombi emniyet ventili; kombi emniyet ventili fiyat" (+ §11.2 s.595). Otomatik tamamlama (16 Eki 07:14, hl=tr): "kombi emniyet ventili" (+ "… su damlatıyor", "… değişimi", "… tamiri", "… ne işe yarar", "… arızası", "… neden su kaçırır"); "kombi 3 bar emniyet ventili" (+ "… su kaçırıyor", "… değişimi"); "kombi basınç sensörü" (+ "… arızası nasıl anlaşılır", "… ne işe yarar", "… bozulursa ne olur"); "kombi su basıncı" (+ "… kaç bar olmalı", "… kendi kendine yükseliyor", "… neden düşer"); "kombi presostat" yalnız kendisi (talep küçük). Ham çıktı: kaynak-kombi-ventil-16eki/OTOMATIK-TAMAMLAMA-2026-10-16.txt
# #88 kaynaklar (yerel blog-taslaklar/kaynak-kombi-ventil-16eki/, MD5-2026-10-16.txt; 15 Eki klasörünün birebir kopyası; sayfa = PDF sayfası):
#   Baymak Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122 Rev.2 https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf md5 723546ecd63c99eaecb5c3143c687c2a — s.15, s.17
#   DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01 https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf md5 3340a11b923b7332f8eb8685297970b6 — s.4–5, s.12, s.15
#   DemirDöküm Nitromix Montaj ve Bakım Kılavuzu 0020309469_02 (yetkili servise yönelik) https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf md5 bdff16276288ebddd6c6cbf82d47c864 — s.3, s.7, s.11, s.31, s.32
#   ECA Confeo Premix Kullanma Kılavuzu https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf md5 4ef56163ac14c46f9cb1dcb9ea189681 — s.7, s.8, s.17, s.22, s.29, s.42
# BİLEREK YAZILMAYANLAR: "presostat" kelimesinin parça karşılığı (kılavuzlarda geçmiyor; yazıda yalnız başlık/slug eşleşmesi için anılır, kılavuz adları "su basıncı sensörü" / "su basınç anahtarı" kullanılır) · hermetik kombilerdeki hava presostatı (bu turdaki belgeler premix yoğuşmalı; kaynak yok) · ventil sökme, değişim, "sökme aparatı", ventil tamiri (sorgu var, kılavuzlar kullanıcıya tarif etmiyor; #31) · radyatörden su boşaltarak basınç düşürme (kılavuzlarda kullanıcı adımı olarak yok) · "basınç kendi kendine yükseliyor" nedenleri (doldurma vanası/eşanjör; belge yok) · termosifon emniyet ventili (ayrı cihaz, ayrı yazı) · Bosch, Vaillant, Ariston (belgeleri bu turda açılmadı) · fiyat/TL, pazaryeri bağlantısı (#46) · `urun:` (bilerek boş; katalogda markasız kombi emniyet ventili yok, süzgeç `emniyet-ventili-presostat` + `kombi-termosifon`).
# Alıntı denetim tablosu: kombi-emniyet-ventili-ve-presostat.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Not defteri ya da telefon"]
steps:
  - "Kombi soğukken ekrandaki ya da manometredeki su basıncını oku; ekranda kod varsa onu da not et."
  - "Okuduğun değeri kendi kılavuzundaki aralıkla karşılaştır; Baymak soğukken 0,7–1,5 bar, DemirDöküm 1,0–1,5 bar, ECA 1,5–2 bar diyor."
  - "Basınç düşükse kılavuzdaki gibi doldurma vanasını yavaşça açıp doğru değere kadar doldur, sonra vanayı kapat."
  - "Basınç sık sık düşüyorsa vanalara ve tesisata sızıntı var mı diye bak; kaçak varsa tesisatçı çağır."
  - "Basınç 3 bara yakınsa ya da emniyet ventilinden su geliyorsa basıncı tekrar oku ve kombiyi kapatıp yeniden başlat."
  - "Kod geri geliyor ya da ventil su atmaya devam ediyorsa kombiyi kapalı tut ve yetkili servisi ara."
faq:
  - q: "Kombi emniyet ventili ne işe yarar?"
    a: "Isıtma suyunun basıncı fazla yükselirse açılıp suyu boşaltır ve basıncı düşürür. Baymak'ın kılavuzuna göre basınç 3 barı aşarsa 3 bar emniyet ventili açılır. ECA parça listesinde '3 Bar Emniyet Valfi', DemirDöküm 'Emniyet ventili' diye geçer."
  - q: "Kombi emniyet ventili neden su damlatır?"
    a: "Kılavuzlara göre ventil, basınç sınırı aşıldığında suyu boşaltmak için açılır; yani su gelmesi önce yüksek basıncı düşündürür. Ekrandaki basınca bak. Basınç normal aralıktayken su gelmeye devam ediyorsa ventilin kendisine yetkili servis bakmalı; ventili sökmek ve değiştirmek kılavuzlarda kullanıcı işi olarak geçmiyor."
  - q: "Kombi su basıncı kaç bar olmalı?"
    a: "Markaya göre değişir; kendi kılavuzuna bak. Baymak Duotec'te normal işletme basıncı 1–2 bar, DemirDöküm Nitromix'te soğuk sistemde 1,0–1,5 bar, ECA Confeo Premix'te soğukken 1,5–2 bar. Çok katlı tesisatta DemirDöküm daha yüksek değer gerekebileceğini, bunun için servise başvurulmasını yazıyor."
  - q: "Su basıncı sensörü arızası nasıl anlaşılır?"
    a: "Ekrandaki koddan. ECA'da F47 'su basınç sensörü hatası', Baymak'ta F47 'su basınç anahtarı bağlı değil'. DemirDöküm'ün servis tablosunda F.73 ve F.74 su basıncı sensörü sinyalinin hatalı olduğunu gösterir; F.22'nin olası nedenleri arasında da arızalı sensör sayılıyor. Kesin teşhisi ve değişimi yetkili servis yapar."
  - q: "Presostat ile emniyet ventili aynı şey mi?"
    a: "Hayır. Emniyet ventili basınç yükselince suyu boşaltan mekanik parçadır. Basıncı ölçüp karta bildiren parça kılavuzlarda 'su basıncı sensörü' ya da 'su basınç anahtarı' diye geçer; düşük ya da yüksek basınçta kombiyi durduran bu ölçümdür. 'Presostat' kelimesi bu kılavuzlarda geçmiyor; parçayı ararken kendi kılavuzundaki adı kullan."
  - q: "DemirDöküm'deki 'gaz emniyet ventili' bu parça mı?"
    a: "Hayır. DemirDöküm'ün servis tablosunda F.61 ve F.62 'gaz emniyet ventili' arızasıdır ve tedbir gaz armatürüyle ilgilidir; yani gaz tarafındaki bir parçadır. Bu yazıdaki emniyet ventili ise ısıtma suyu tarafındadır. İkisine de yalnız yetkili servis dokunur."
images:
  coverAlt: "Duvara asılı kombinin altında, ucundan hortum çıkan küçük pirinç emniyet ventili ve yanında manometre, sade çizim"
  steps:
    - "Kombi, yanında rakamsız basınç göstergesi ve not defteri"
    - "Kullanma kılavuzu açık, sayfada vurgulanmış basınç aralığı çubuğu, rakamsız"
    - "Kombinin altında mavi kollu doldurma vanası yakın plan, yanında yukarı ok"
    - "Radyatör vanası ve boru birleşimi, yanında büyüteç simgesi"
    - "Kombi kontrol panelinde açma/kapama tuşu yakın plan, üstünde dairesel ok, el yok"
    - "Kapalı kombi, telefon, model etiketi ve not defteri: servisi aramaya hazır bilgiler"
---

Kombinin altından su damlıyor ya da ekranda bir basınç kodu var. Burada iki parça öne çıkar: basınç fazla yükselince suyu boşaltan **emniyet ventili** ve basıncı ölçüp kombiye bildiren **su basıncı sensörü**. Basıncı okumak ve gerekirse su doldurmak senin işin; ventilin ve sensörün kontrolü, sökülmesi ve değişimi **yetkili servis işi**.

Bu yazıdaki bilgiler üreticilerin kendi belgelerinden: **Baymak** (Duotec yoğuşmalı kombi), **DemirDöküm** (Nitromix kullanma ile montaj ve bakım kılavuzları) ve **ECA** (Confeo Premix yoğuşmalı kombi). Kendi kombinin kesin değerleri ve kodları kendi kılavuzunda yazar. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** **Emniyet ventili** ısıtma suyunun basıncı sınırı aşınca açılıp suyu boşaltır; Baymak'ta bu sınır **3 bar**. **Su basıncı sensörü** basıncı ölçer; ECA'da basınç 0,4 barın altına inince **F37**, 2,9 barı bulunca **F40** verir. Önce ekrandaki basınca bak: düşükse kılavuzdaki gibi doldur, yüksekse ya da ventil su atmaya devam ediyorsa **yetkili servisi** ara.

## Emniyet ventili ve basınç sensörü ne iş yapar?

**Emniyet ventili:** Baymak'ın kılavuzuna göre normal işletme basıncı 1 ile 2 bar arasındadır; basınç 3 barı aşarsa **3 bar emniyet ventili açılır** ve su boşaltılarak basınç düşürülür. ECA'nın parça listesinde "3 Bar Emniyet Valfi", DemirDöküm'ün parça listesinde "Emniyet ventili" olarak geçer. ECA, güvenlik donanımları arasında **yüksek su basınç emniyetini (3 bar)** sayıyor.

**Su basıncı sensörü:** Tesisattaki basıncı ölçer. ECA'nın parça listesinde "Basınç Sensörü", DemirDöküm'de "Basınç sensörü", Baymak'ın kod tablosunda "su basınç anahtarı" olarak geçer. ECA'da düşük su basınç emniyeti **0,4 bar**; DemirDöküm'de basınç 0,4 barın altına düşerse ürün kapanır ve ekranda **F.22** görünür.

> 💡 Piyasada bu parça grubu "emniyet ventili / presostat" diye aranıyor. "Presostat" kelimesi bu üç kılavuzda geçmiyor; parçanın kılavuzdaki adı "su basıncı sensörü" ya da "su basınç anahtarı".

## Hangi belirtiler bu parçaları işaret eder?

| Belirti ya da kod | Ne anlatıyor | Kaynak |
|---|---|---|
| Ventilden ya da ventile bağlı hortumdan su geliyor | Ventil basıncı düşürmek için açılmış olabilir; önce basınca bak | Baymak |
| ECA **F37** "Düşük Su Basıncı Hatası" | Sensör 0,4 barın altını görmüş | ECA |
| ECA **F40** "Yüksek Su Basıncı Hatası" | Sensör 2,9 bar ve üstünü görmüş | ECA |
| ECA **F47** "Su Basınç Sensörü Hatası" | Sensör takılı değil ya da bağlantı gevşek | ECA |
| Baymak **F37** düşük, **F40** yüksek su basıncı, **F47** su basınç anahtarı bağlı değil | Basınç ya da ölçüm hatası | Baymak |
| DemirDöküm **F.22** "Tesisat basıncı çok düşük" | Sistemde yetersiz su; servis tablosunda arızalı sensör de olası neden | DemirDöküm |
| DemirDöküm **F.73 / F.74** | Su basıncı sensörü sinyali hatalı (çok düşük / çok yüksek) | DemirDöküm servis kılavuzu |

ECA'ya göre F37 ve F40, sensörün "cihazınız için tehlikeli olabilecek" basıncı algılamasıyla ortaya çıkar.

## Basınç kaç bar olmalı?

| Marka (model) | Kılavuzdaki değer |
|---|---|
| Baymak (Duotec) | Normal işletme 1–2 bar · 0,7 barın altında su doldurulmalı · 0,5 barın altında kombi çalışmaz |
| DemirDöküm (Nitromix) | Soğuk sistemde 1,0–1,5 bar · 0,4 barın altında ürün kapanır (F.22) |
| ECA (Confeo Premix) | Soğukken 1,5–2 bar · 0,8 barın üstüne çıkınca F37 kendiliğinden gider |

DemirDöküm, ısıtma sistemi birçok kata uzanıyorsa daha yüksek değer gerekebileceğini ve bunun için yetkili servise başvurulmasını yazıyor. Değerleri kombi soğukken oku.

## Değişim: yalnız yetkili servis

- **DemirDöküm:** montaj, sökme, kurulum, devreye alma, kontrol ve bakım, tamir **yalnız yetkili servislerin** işi. Su basıncı sensörünün değişimi servis kılavuzundaki arıza tablosunda geçiyor (F.22, F.73, F.74: "Su basıncı sensörünü değiştirin").
- **DemirDöküm:** kullanma kılavuzunun güvenlik bölümüne göre **emniyet ventilinde** (ürün, su hatları ve gider boruları gibi) değişiklik yapılmamalı; parçaların mühürleri bozulmamalı.
- **ECA ve DemirDöküm montajı:** emniyet ventilinden çıkan hortum ya da boşaltma borusu, montajda gider hattına bağlanır (ECA: pis su gider hattı; DemirDöküm: sifonlu gider hunisi). Bu bağlantı montajı yapan servisin işi.

## Senin yapabileceklerin: adım adım

**1. Basıncı oku.** Kombi soğukken ekrandaki ya da manometredeki değeri ve varsa kodu not et.

**2. Kılavuzla karşılaştır.** Yukarıdaki tablodaki aralıklar örnek; kendi kombinin değeri kendi kılavuzunda.

**3. Düşükse doldur.** DemirDöküm: radyatör vanalarını aç, doldurma vanasını yavaşça açıp gerekli basınca kadar doldur, radyatörlerin havasını al, basıncı kontrol et, doldurma vanasını kapat. ECA: ekranda 1,5–2 bar okunana kadar doldur, sonra doldurma vanasını kapat; basınç 0,8 barı geçince ekranda "AP" görünür, bu sırada **reset'e basma**, yaklaşık 160 saniyelik hava alma modunun bitmesini bekle.

**4. Sık düşüyorsa sızıntıya bak.** ECA'ya göre basınç sık sık düşüyorsa sistemde su kaçağı vardır ve tesisatçı çağırmak gerekir; F37'de vanalarını ve tesisatını sızıntıya karşı kontrol etmeni istiyor. Baymak da radyatörlerdeki pas ve kaçakları kontrol etmeyi yazıyor.

**5. Yüksekse ya da ventil su atıyorsa.** ECA F40'ta basıncı kontrol etmeni, cihazı kapatıp yeniden başlatmanı istiyor. Ventile ve hortumuna müdahale etme; DemirDöküm emniyet ventilinde değişiklik yapılmamasını istiyor.

**6. Sürüyorsa servis.** ECA F37, F40 ve F47'de hata sürerse yetkili servise bildirmeni istiyor. Kodu, modeli ve okuduğun basıncı hazır tut.

## Ne zaman servis?

| Durum | Ne yapılır |
|---|---|
| Basınç normal aralıkta ama ventilden su gelmeye devam ediyor | Yetkili servis |
| F40 (yüksek basınç) kapatıp açtıktan sonra geri geliyor | Yetkili servis |
| Doldurduktan kısa süre sonra basınç yine düşüyor | Tesisatçı (kaçak) ya da yetkili servis |
| F47, F.73, F.74 gibi sensör kodları | Yetkili servis |

## Emniyet ventili nereden alınır?

Üreticiler **orijinal parça** istiyor. ECA, orijinal ECA yedek parçaları dışında parça kullanılmasından doğan hasarları garanti dışı sayıyor. Ventil basınç güvenliğinin parçası; doğru ventili yetkili servis seçer ve takar.

Cihazını ve ekrandaki kodu benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Önce öğren, sonra çağır.
