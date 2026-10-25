---
title: "Samsung çamaşır makinesi 3E hatası: motor uyarısı"
description: "Samsung çamaşır makinesinde 3E ve 3C, Samsung'a göre motor sorunu. Elektriği kesip bir dakika bekleme, yeniden başlatma ve servise geçiş sırası."
slug: "samsung-camasir-makinesi-3e-hatasi"
date: "2026-10-23"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme A, fork A). Konu seçimi: origin/main'de samsung-camasir-makinesi-3e-hatasi yok
#   (Samsung çamaşırda 4C, 5C, DC, OC, UC, UE tek kod sayfaları var; 3E yalnız hata-kodlari merkezinde iki kez geçiyor).
# GSC (https___www-5 son 3 ay, https___www-6 son 7 gün): bu sorguya gösterim YOK.
# Arama kanıtı (#164, bu koşuda Google otomatik tamamlama, hl=tr gl=tr), tohum "samsung çamaşır makinesi 3e":
#   1. "…3e hatası" · 2. "…3e hatası nasıl giderilir" · 3. "…3e hata kodu".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un kendi alan adlarından indirildi, hepsi HTTP 200. #88: üçüncü taraf kullanılmadı.
#  (U) Samsung UK "What do the codes on my washing machine mean?"  https://www.samsung.com/uk/support/home-appliances/what-do-the-codes-on-my-washing-machine-mean/
#      HTML md5 b19c93514b604dd1afd7480d0f8b41c1 (dinamik; md5 bu indirmenin) — "3C, 3E, 3E1, 3E2, 3E3, 3E4 Motor issue", "3CP", 3/E karışıklığı notu
#  (I) Samsung UK "Check out the information codes on my washing machine"  https://www.samsung.com/uk/support/home-appliances/check-out-the-information-codes-on-my-washing-machine/
#      HTML md5 1d44dfeae7fd27b6947d81a809a1c3bd (dinamik) — "3C, 3E (Engine/Motor operation)", "3CP, 3E (Pulsator motor operation)"
#  (C) WW5000C kılavuzu TR, 68 s.  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf  md5 a6bdee67278bfcc9d0f6b252d4b5fb3a
#  (T) WW4000T kılavuzu TR, 72 s.  https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf  md5 2a8fa3df96d4d49f5da7294316f4a2ae
# 3C satırı C s.58, T s.58 · kapağı zorla açmama C s.8 · uzatma kablosu yok C s.6 · fiş terminali kuru bezle C s.6 · onarım için servis, fırtınada fişi çek C s.9 · taşma C s.8 · hortum gevşerse fişi çek C s.9.
#   Sayfa = PDF sayfası. UK sayfalarının metni İngilizce; yazıda Türkçeye çevrildi.
# BİLEREK YAZILMAYANLAR: aşırı yük/çamaşır miktarının 3E'ye yol açtığı iddiası (belgede yok) · motor kömürü, kablo, kart kontrolü (servis)
#   · 3E1–3E4 alt kodlarının ayrı anlamları (belgede tek satır "Motor issue") · fiyat/süre (#46).
# Alıntı denetim tablosu: samsung-camasir-makinesi-3e-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Çamaşır makinesinin kullanma kılavuzu"]
steps:
  - "Ekrandaki kodu dikkatle oku; Samsung, üç rakamı ile E harfinin birbirine benzeyebileceği konusunda uyarıyor."
  - "Programı durdur ve makine dönerken kapağı zorla açmaya çalışma."
  - "Makinenin elektriğini kes ve bir dakika bekle."
  - "Makineyi yeniden aç ve yeni bir program başlat."
  - "Fişin yalnız bu cihaz için olan prize uzatma kablosu olmadan takılı olduğunu ve fiş uçlarının temiz olduğunu kontrol et."
  - "Kod yeniden çıkıyorsa ekrandaki tam kodu not al ve makineyi açmadan Samsung yetkili servisine haber ver."
faq:
  - q: "Samsung çamaşır makinesinde 3E ne demek?"
    a: "Samsung'un kod sayfasında 3C, 3E, 3E1, 3E2, 3E3 ve 3E4 aynı satırda motor sorunu olarak geçiyor. Samsung'un bilgi kodları sayfası 3C ve 3E için tambur motorunun çalışmasının kontrol edilmesi gerektiğini yazıyor. Yeni Türkçe kılavuzlarda aynı kodun karşılığı 3C."
  - q: "3E hatası nasıl giderilir?"
    a: "Samsung'un önerdiği ev adımı şu: cihazın elektriğini kes, bir dakika bekle, yeniden aç ve yeni bir program başlat. Türkçe kılavuzun 3C satırı da programı yeniden başlatmayı deneyip bilgi kodu kalırsa servis merkezine başvurmayı söylüyor. Motorun kendisi yetkili servis işi."
  - q: "3E1, 3E2, 3E3 ve 3E4 farklı arızalar mı?"
    a: "Samsung'un kod sayfası bunları ayrı ayrı açıklamıyor; hepsini tek satırda motor sorunu olarak veriyor ve aynı adımları öneriyor. Ekranda hangisini görüyorsan servise aynen bildir."
  - q: "Ekranda 3C yazıyor, bu yazı geçerli mi?"
    a: "Evet. Samsung'un yeni Türkçe kılavuzları kodları C ile biten biçimde veriyor. WW5000C ve WW4000T kılavuzlarında 3C, motorun çalışıp çalışmadığının kontrol edilmesi gerektiğini söylüyor. Samsung'un bilgi kodları sayfası 3C ile 3E'yi aynı satırda topluyor."
  - q: "3CP ne demek?"
    a: "Samsung'un kod sayfası 3CP'yi elektronik kontrol sorunu olarak veriyor ve programı yeniden başlatmayı öneriyor. Bilgi kodları sayfasında 3CP, pulsatörlü (üstten yüklemeli) makinelerde pulsatör motorunun çalışmasıyla ilgili satırda geçiyor."
images:
  coverAlt: "Çamaşır odasında duran önden yüklemeli bir çamaşır makinesi ve içinde çamaşırlar"
  steps:
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kapak"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda ön yüklemeli çamaşır makinesi, sağda telefon ve kullanım kılavuzu"
---

Makine yıkamanın ortasında durdu, tambur dönmüyor ve ekranda **3E** yazıyor. Samsung'un kod sayfasında bu kod, **3C** ve **3E1–3E4** varyantlarıyla birlikte tek bir satırda duruyor: **motor sorunu**. Samsung'un yeni Türkçe kılavuzlarında (WW5000C, WW4000T) aynı ailenin karşılığı 3C. Bu yazıda Samsung'un kendi kaynaklarına göre kodun anlamını, evde güvenle deneyebileceğin sırayı ve servisi çağırma noktasını topladık. Senin modelinde kod biraz farklı görünebilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 3E ve 3C, Samsung'a göre motor sorunu. Elektriği kes, bir dakika bekle, makineyi açıp yeni bir program başlat. Fişin uzatma kablosuz, doğrudan prize takılı olduğuna bak. Kod geri geliyorsa motor ve kablolar yetkili servisin işi.

## Ekran ne söylüyor

| Ekranda gördüğün | Samsung'a göre anlamı | Kim ne yapar |
|---|---|---|
| **3E, 3E1, 3E2, 3E3, 3E4** | Motor sorunu | 🛠️ Elektriği kes, bir dakika bekle, yeniden başlat |
| **3C** | Motorun çalışıp çalışmadığı kontrol edilmeli (TR kılavuz) | 🛠️ Programı yeniden başlat; sürerse servis |
| **3CP** | Elektronik kontrol sorunu | 🛠️ Programı yeniden başlat |
| **UE, Ub** | Dengesizlik; sıkma yapılamıyor | 🛠️ Yükü yeniden dağıt; ayrı yazıda |

## Adım adım: evde denenecekler

**1. Kodu dikkatle oku.** Samsung'un kod sayfası açık bir uyarı yapıyor: sayı ve harf kodlarını karıştırma; **5 ile S**, **3 ile E** birbirine benzeyebilir. Ekranda gördüğün şey 3E mi, EE mi, yoksa 3C mi? Emin olamıyorsan kodu birkaç saniye izle ve not al. Dengesizlik kodları UE ve Ub ise motorla ilgili değil; onlar için [Samsung çamaşır makinesi UE hatası](/blog/samsung-camasir-makinesi-ue-hatasi/) yazısına bak.

**2. Programı durdur, kapağı zorlama.** Türkçe kılavuzun güvenlik bölümü, makine çalışırken (yüksek sıcaklıkta yıkama, kurutma ya da sıkma sırasında) kapağın **zorla açılmamasını** istiyor; su taşması yanığa, kapağın zorlanması cihazın hasar görmesine ya da yaralanmaya yol açabilir. Kod çıktığında içerideki çamaşırı almak için acele etme.

**3. Elektriği kes ve bir dakika bekle.** Samsung'un kod sayfasında 3C, 3E ve 3E1–3E4 için önerilen ilk iş şu: cihazı şebekeden kapat ve **bir dakika bekle**. Fişi prizden çekmek en basit yol. Kılavuz fişe ıslak ellerle dokunulmamasını da istiyor.

**4. Yeniden aç ve yeni program başlat.** Bir dakikanın sonunda makineyi yeniden aç ve **yeni bir program** başlat. Türkçe kılavuzun 3C satırı da aynı yönde: programı yeniden başlatmaya çalışın; bilgi kodu kalırsa bir müşteri servis merkezine başvurun. Samsung'un bilgi kodları sayfası 3C ve 3E için tambur motorunun çalışmasının kontrol edilmesi gerektiğini yazıyor; yani bu yeniden başlatma, motorun normale dönüp dönmediğini görmenin yolu.

**5. Elektrik bağlantısına bak.** Bu adım 3E satırında yazmıyor; kılavuzun kurulum ve güvenlik kuralları. WW5000C kılavuzu güç kablosunun yalnız bu cihaz için olan prize sıkıca takılmasını ve **uzatma kablosu kullanılmamasını** istiyor. Fiş terminallerindeki toz ve su gibi yabancı maddelerin fiş prizden çıkarılıp kuru bir bezle temizlenmesini de öneriyor. Fırtına sırasında ya da cihaz uzun süre kullanılmayacaksa fişi çekmek de kılavuzun kuralı.

**6. Kod geri geliyorsa servis.** Yeniden başlatmadan sonra 3E ya da 3C tekrar çıkıyorsa evdeki iş bitti. Motor, kablolar ve kart makinenin içinde. Kılavuz, cihazın onarılması gerektiğinde en yakın servis merkeziyle temasa geçilmesini istiyor; Samsung'un kod sayfası da kod ekranda kalmaya devam ederse Samsung servis merkezine başvurulmasını söylüyor. Servisi beklerken kılavuzun iki uyarısını aklında tut: cihaz taşarsa su ve güç kaynağını hemen kapat ve servis merkeziyle temasa geç; su besleme hortumu musluktan gevşer ve cihazı su basarsa fişi prizden çıkar.

## 3E ile 3C aynı kod mu

Samsung'un bilgi kodları sayfası her satırın altına aynı notu düşüyor: modele göre kod farklı görünebilir. Eski ve yeni modellerde aynı anlamın E ya da C ile bitmesi bundan. Kendi makinenin kılavuzunda 3C görüyorsan, bu yazıdaki adımlar onun için de geçerli. Ekranda hangisini görüyorsan servise aynen bildir; alt kodlar (3E1, 3E2 gibi) teknisyene daha fazla bilgi verir.

## Ne zaman servis

- Elektrik bir dakika kesilip yeni program başlatıldığı hâlde 3E ya da 3C geri geliyorsa
- Kod her yıkamada aynı aşamada çıkıyorsa
- Tambur hiç dönmüyor ve ekranda motor kodu varsa
- Makine garip sesler, yanık kokusu ya da duman çıkarıyorsa: kılavuza göre güç kablosunu prizden çıkar ve servisle temasa geç

⛔ **Kendin-çöz sınırı burada biter.** Ekran, güç düğmesi, fiş ve program seçimi sende; motor, kablolar, kart ve makinenin iç aksamı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin model adı ne?
2. Ekrandaki tam kod ne (3E, 3E1, 3C…)?
3. Hangi aşamada çıktı: yıkama mı, sıkma mı?
4. Bir dakikalık elektrik kesintisinden sonra kod geri geldi mi?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bütün kodlar [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) sayfasında, sıkma sorunları [Samsung çamaşır makinesi santrifüj yapmıyor](/blog/samsung-camasir-makinesi-santrifuj-yapmiyor/) yazısında. Bil, gör, çağır.
