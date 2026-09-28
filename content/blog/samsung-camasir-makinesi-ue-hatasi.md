---
title: "Samsung çamaşır makinesi UE hatası"
description: "Samsung çamaşır makinesi UE (Ub, E4) hatası: yük dengesiz. Çamaşırı yeniden dağıtma, tek parçaya havlu ekleme, düşük devir ve zemin kontrolü."
slug: "samsung-camasir-makinesi-ue-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi (hepsi HTTP 200); PDF'ler pdftotext -layout ile, sayfa sayfa (\f) okundu.
# PDF sayfa no = kılavuzun basılı sayfa no. Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı.
#  T3) Samsung TR SSS "UE, UB veya E4 bilgi kodu neden görünür?" (Son güncelleme 2026-08-20)
#      https://www.samsung.com/tr/support/home-appliances/why-does-the-ue-ub-or-e4-information-code-appear-on-my-samsung-washing-machine/
#      md5 21a26adbf9068280efd40d31e820c3e6
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a  (sayfa atıfları bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K3) WW5000T TR md5 402b21c11194758ab81d7af5f78ffd4d (Ub satırı s.56, birebir aynı)
#  U1) Samsung UK "What do the codes on my washing machine mean?" (Updated 19 Feb 2025)
#      https://www.samsung.com/uk/support/home-appliances/what-do-the-codes-on-my-washing-machine-mean/  md5 703e8a9b09d5950e5fce8318c856f30f
# Birebir alıntılar:
#   T3: "UE, UB veya E4 hata kodları, çamaşır makinesi içine atılan çamaşır yükünün dengesiz olduğu durumlarda meydana gelmektedir."
#   T3: "Bornoz ya da kot gibi yalnızca bir ürünün yıkanması gerekiyorsa, makine iyi sıkma yapamayabilir ... Örneğin Bir adet bornozun yanında yükü dengelemek için birkaç küçük havlu atabilirsiniz."
#   T3 Not: "Makinenizin içerisinde su varsa kapağı açamayabilirsiniz. Bu durumda su tahliyesi yapmanız gerekecektir."
#   T3: parça sayısı az olabilir → "devir sayısını azaltarak yıkama yapmayı deneyin" · aynı tür kıyafetleri birlikte · ıslanınca ağırlaşan ürünler (çarşaf, nevresim) →
#       "pamuklu programında düşük sıkma devri" · aşırı yükleme → pamuklu programı, sürerse çamaşır miktarını azalt
#   K1 s.59 Ub: "Sıkma çalışmıyor." · eşit dağıtım · "düz, sağlan bir yüzeyde" · yükü tekrar dağıt
#   K1 s.29: aşırı yükleme · nevresim ve yatak örtüleri için önerilen sıkma 800 devir (2,0 kg veya daha az) · "Dengesiz çamaşır, sıkma performansını düşürebilir."
#   K1 s.29: çamaşır filesini diğer çamaşırlar olmadan yalnız yıkama (anormal titreşim) · s.20 tüm dengeleme ayakları zeminde, sallanma kontrolü
#   K1 s.56: "Yük çok az. Az yük ağırlıkları (bir veya iki öğe) dengesiz olabilir ve tamamen sıkılmayabilir."
#   U1 "Ub, UE, Ur": "This is not a fault. The appliance has detected an unbalanced load and has stopped the spin for safety reasons." · 2/3 havlu ekle, yeni sıkma
# Bilerek YAZILMAYANLAR: ayak ayarının anahtarla yapılışı (kurulum işi; yalnız "sallanıyor mu" kontrolü yazıldı) · amortisör/rulman/örümcek teşhisi ·
#   nakliye cıvatası sökümü adımı (kurulum işi; yalnız "yeni kurulduysa" notu) · kesin kg sınırları (modele bağlı).
# Alıntı denetim tablosu: samsung-camasir-makinesi-ue-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Birkaç küçük havlu"]
steps:
  - "Programı durdur; kazanda su varsa kapak açılmayabilir, önce suyu tahliye et."
  - "Kapağı aç ve çamaşırları kazanın içine eşit biçimde yeniden dağıt."
  - "Tek bir büyük parça yıkıyorsan yanına birkaç küçük havlu ekle."
  - "Farklı türde çamaşırlar karışıksa aynı tür kıyafetleri ayrı yıka."
  - "Kazan çok doluysa çamaşır miktarını azalt."
  - "Makinenin düz, sağlam bir zeminde durduğunu ve sallanmadığını kontrol et."
  - "Programı düşük sıkma devriyle yeniden başlat; kod sürerse Samsung desteğine başvur."
faq:
  - q: "Samsung çamaşır makinesi UE hatası ne demek?"
    a: "Samsung'a göre UE, Ub ve E4 kodları kazana atılan çamaşır yükünün dengesiz olduğu durumlarda görünür. Samsung UK destek sayfası bunun bir arıza olmadığını, makinenin dengesiz yükü algılayıp güvenlik için sıkmayı durdurduğunu yazıyor."
  - q: "Sadece bir bornoz yıkadım, neden UE verdi?"
    a: "Samsung'a göre bornoz ya da kot gibi yalnızca bir ürün yıkandığında makine iyi sıkma yapamayabilir ve UE / Ub gösterebilir. Samsung'un önerisi yükü dengelemek: örneğin bornozun yanına birkaç küçük havlu ekle."
  - q: "Nevresim takımı yıkarken UE çıkıyor, ne yapmalıyım?"
    a: "Samsung'a göre çarşaf ve nevresim gibi ıslanınca ağırlaşan parçalar kazanın içinde tek yöne yığılabilir. Samsung bu durumda pamuklu programında düşük sıkma devriyle yıkamayı öneriyor. Kılavuzda nevresim ve yatak örtüleri için önerilen sıkma hızı 800 devir olarak geçiyor (2,0 kg veya daha az yük için)."
  - q: "UE, Ub ve E4 arasında fark var mı?"
    a: "Samsung Türkiye'nin destek sayfası üçünü aynı başlık altında, dengesiz yük kodu olarak veriyor. Ekranda hangisinin görüneceği modele göre değişir."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin açık kapağından görünen kazanda tek tarafa toplanmış bir bornoz ve yanında katlanmış küçük havlular"
---

Yıkama bitti gibi görünüyor ama makine sıkmaya geçmedi, çamaşırlar ıslak ve ekranda **UE** yazıyor. Modeline göre aynı durum **Ub** ya da **E4** olarak da görünebilir. Samsung Türkiye'nin destek sayfasına göre bu kodlar **"çamaşır makinesi içine atılan çamaşır yükünün dengesiz olduğu durumlarda"** meydana gelir. Samsung'un UK destek sayfası bir adım daha ileri gidiyor: bu bir arıza değil; makine dengesiz yükü algılamış ve **güvenlik için sıkmayı durdurmuştur.**

Yani UE'nin çözümü çoğu zaman makinede değil, kazanın içindeki yüktedir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** UE / Ub / E4 = Samsung'a göre yük dengesiz. Sıra şu: programı durdur → kapağı aç → çamaşırı eşit dağıt → tek büyük parçanın yanına birkaç küçük havlu ekle → çok doluysa azalt → makine düz zeminde mi → düşük devirle yeniden başlat.

## Adım adım: evde denenecekler

**1. Programı durdur, kapağa bak.** Samsung'un notu: çamaşırlarla ilgilenmek için kapağı açman gerekebilir; ama **makinenin içinde su varsa kapağı açamayabilirsin** ve önce su tahliyesi gerekir. Suyun tahliye edilmesi için acil boşaltma adımları [Samsung çamaşır makinesi 5C hatası](/blog/samsung-camasir-makinesi-5c-hatasi/) yazısında anlatılıyor.

**2. Çamaşırı yeniden dağıt.** Kılavuzdaki Ub satırının ilk önerisi, çamaşırın **eşit bir şekilde dağıtıldığından** emin olmak ve **yükü tekrar dağıtmaktır.** Kazanın bir tarafında toplanmış, topak olmuş çamaşırları aç ve kazanın çevresine yay.

**3. Tek parçayı yalnız bırakma.** Samsung'a göre **bornoz ya da kot** gibi yalnızca bir ürün yıkanıyorsa makine iyi sıkma yapamayabilir. Samsung'un örneği şu: bir bornozun yanına yükü dengelemek için **birkaç küçük havlu** ekle. Kılavuz da az yükün (bir ya da iki parça) dengesiz olabileceğini ve tamamen sıkılmayabileceğini yazıyor.

**4. Aynı türü birlikte yıka.** Samsung'a göre farklı türdeki çamaşırlar ıslandığında yapılarında farklı miktarda su tutar ve bu yük dengesizliğine yol açabilir. Önerisi, **aynı tür kıyafetleri birlikte** yıkamak.

**5. Aşırı yüklemeden kaçın.** Kazan çok doluysa çamaşır, tamburun içine dağılamaz. Samsung önce **pamuklu programında** çalıştırmayı, sorun sürerse **çamaşır miktarını azaltmayı** öneriyor. Kılavuz da aşırı yüklemenin makinenin düzgün yıkamamasına yol açabileceğini yazıyor.

**6. Zemine bak.** Kılavuzdaki Ub satırı, makinenin **düz, sağlam bir yüzeyde** olduğundan emin olunmasını istiyor. Kurulum bölümüne göre tüm dengeleme ayakları zemine basmalı ve makine sallanmamalı. Makine sallanıyorsa dengeleme ayaklarının ayarı gerekir; kılavuz cihazın montajının kalifiye bir teknisyen ya da servis tarafından yapılmasını istiyor.

**7. Düşük devirle yeniden başlat.** Samsung'un az parçalı yükler için önerisi, **devir sayısını azaltarak** yıkamayı denemek. Kod sürerse Samsung, Canlı Destek kanalından ve Samsung Müşteri Hizmetleri'nden destek alınmasını öneriyor.

## Nevresim ve çarşafta ayrı dikkat

Samsung'a göre çarşaf ya da nevresim takımı gibi **az sayıda ama ıslandığında ağırlaşan** parçalar kazanın içinde tek yönlü yığılabilir ve makine yükü dağıtamaz. Samsung'un önerisi, maksimum yükte yıkama yapılabilen **pamuklu programında düşük sıkma devri** kullanmak. Kılavuz, nevresim ve yatak örtüleri için önerilen sıkma hızını **800 devir** olarak veriyor (2,0 kg veya daha az yük için) ve bu tür yıkamalarda sürenin uzayabileceğini, sıkma performansının azalabileceğini de yazıyor.

Bir not daha: Samsung, **çamaşır filesinin diğer çamaşırlar olmadan tek başına yıkanmamasını** istiyor; kılavuza göre bu anormal titreşime neden olup makineyi hareket ettirebilir.

## UE, Ub ve E4: aynı uyarının model varyantları

Samsung Türkiye'nin destek sayfası üç kodu birlikte veriyor. Hangisinin görüneceği modele göre değişir; anlamı aynıdır. Diğer Samsung kodları için [Samsung çamaşır makinesi hata kodları](/blog/samsung-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin. Kod olmadan sıkarken ses ve titreşim yapan makineler için [çamaşır makinesi ses ve titreşim](/blog/camasir-makinesi-ses-titresim/) yazısı daha uygun.

## Ne zaman servis

Yük dengeli, parça sayısı yeterli, makine düz zeminde ve sallanmıyor, düşük devirde de UE geliyorsa kullanıcıya verilen kontroller bitmiş demektir. Samsung kılavuzunun genel kuralı: ekranda bir bilgi kodu görüntülenmeye devam ediyorsa **yerel Samsung servis merkezi** ile iletişime geç.

⛔ **Kendin-çöz sınırı burada biter.** Kural basit: **yük ve zemin kullanıcıya; makinenin içi servise aittir.**

## Servisi aramadan önce iki dakikalık özet

1. Kazanda tek bir büyük parça mı vardı?
2. Farklı türde çamaşırlar birlikte mi yıkandı?
3. Kazan aşırı dolu muydu?
4. Makine sallanıyor mu, ayakların hepsi zemine basıyor mu?
5. Düşük devirde de UE geliyor mu?

Bu beşine cevabın varsa servise "sıkmıyor" yerine somut bir tablo anlatabilirsin.

Ekrandaki hata kodunu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
