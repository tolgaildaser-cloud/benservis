---
title: "Vestel davlumbaz çekmiyor"
description: "Vestel davlumbaz yeterince çekmiyor ya da sesli mi? Kılavuzun sırası: metal filtre, 6 ay kuralı, mutfağı havalandırma, ocakla birlikte çalıştırma ve baca çapı."
slug: "vestel-davlumbaz-cekmiyor"
date: "2026-10-03"
category: "Davlumbaz"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in KENDİ alan adlarından indirildi, HTTP 200,
#   yönlendirme 0. Web araması yalnız belge yerini bulmak için. Sayfa = PDF sayfası.
#  V1) Vestel AD-63330 B / G / S   https://statik.vestel.com.tr/webfiles/20267393_k.pdf   28 s.  md5 32ee39d45cceb692a1d98c25df4e1dde
#  V2) Vestel AD-6021 X / YX       https://statik.vestel.com.tr/webfiles/20264487_k.pdf   18 s.  md5 384a7f344f13eba700020cf9f3629a74
#  V3) Vestel VAD 955 CX           https://static.vestel.com.tr/kullanimkilavuzlari/50215033.pdf  20 s.  md5 66cf50e1988367844c9f042829f29e59
# Ana satırlar: V1 s.20 · V2 s.13 "Cihazın performansı yeterli değil veya çalışırken yüksek ses yapıyor." → "Cihazın bacasının çapı yeterli olmayabilir
#   (En az Ø120 mm)." / "Cihazın baca çapının en az Ø120 mm olmasını sağlayınız." · "Davlumbazı bacasız olarak kullanıyorsanız, karbon filtrelerin 6 aydan
#   eski olmamasına dikkat ediniz." / "Karbon filtreleri yenisi ile değiştiriniz." · "Hava akımını sağlamak için mutfağınızı yeterli olarak havalandırmaya özen
#   gösteriniz." / "Mutfak camını açarak ortamın havalandırılmasını sağlayınız."
#   V3 s.9 "b) Cihazın performansı yeterli değilse veya çalışırken yüksek ses yapıyorsa: - Cihazın bacasının eni yeterli mi? (min.120 mm). - Metal filtreler temiz
#   mi? Kontrol ediniz. ... Eğer cihazın performansı hala sizi memnun etmiyorsa yetkili servisine başvurunuz."
#   V3 s.6 "Buharlaşmanın yoğun olduğu bir işlemde devir yükseltilmeli, az olan bir işlemde ise azaltılmalıdır. Bu konuda önemli olan cihazın ocak ile birlikte
#   çalıştırılmasıdır. Meydana gelen dengeli bir hava akımı cihazın üzerinde olumlu bir çekiş gücü oluşturmaktadır. Cihazın işlem bittikten sonra birkaç dakika
#   daha çalıştırılması tavsiye edilir."
#   V3 s.7 "Davlumbazın metal filtrelerinde yağ ve kir atıklarının birikmesi cihazınızın normal çalışmasını etkileyebilir." · "Metal filtrelerin 2 – 3 haftada bir
#   temizlenmesi gerekir." · "Karbon filtre her 3 – 6 ay arası değiştirilmesi gerekir." · "kilitleme sürgüsünü arkaya doğru bastırıp, cihazın aşağısına doğru
#   çekerek yerinden çıkartınız." · "bulaşık deterjanlı sıcak suya batırıp bir süre bekledikten sonra yumuşak bir fırça yardımıyla temizleyiniz. ... sıcak su ile
#   durulayınız. Gerekirse bu işlemi tekrarlayınız." · "bulaşık makinesinde normal programda 55 derecede" · "renk değişikliği ... bir arıza sebebi değildir."
#   · "kurumuş olan filtreyi uygun bir şekilde tekrar cihaza takınız." (V2 s.12 aynı: "2 – 3 haftada", "55 ˚C")
#   V3 s.8 "Bacasız kullanılan cihazlarda, cihazın yemek pişirildikten sonra 10 ile 15 dakika arası çalışmasını öneririz. Bu işlem karbon filtrede biriken nemin
#   kurumasını sağlayacaktır." · yuvarlak karbon filtre "saat yönünün tersine doğru çeviriniz" / "saat yönüne doğru kilitlenene kadar çeviriniz"
#   V3 s.10 "Karbon filtre kullanılması cihazdaki hava çekiş gücünü azaltmaktadır. Hava akışındaki zorluktan dolayı davlumbazınızın sesi yükselmektedir."
#   V1 s.18 "ortalama 40 saatlik kullanım sonrası filtre temizliği yapılmalıdır." · "mümkünse bulaşık makinesinde tek başına (maksimum 60°C)" · "Islak filtreyi
#   kesinlikle yerine takmayınız." · V1 s.17 "Karbon filtreler yıkanamaz." · "Üründe 2 adet karbon filtre kullanılmalıdır." · "Saat yönünde yarım tur çevirerek"
# BİLEREK YAZILMAYANLAR: baca/boru değişimi (montaj) · motor/fan teşhisi · Bosch kardeş sayfasıyla aynı kurgu (bu sayfa Vestel'in farklı satırlarını öne
#   çıkarır: havalandırma, ocakla birlikte çalıştırma, 10-15 dk ardıl çalışma, 6 ay) · fiyat (#46).
# Alıntı denetim tablosu: vestel-davlumbaz-cekmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika (+ kuruma)"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Bulaşık deterjanı", "Yumuşak fırça"]
steps:
  - "Davlumbazın fişini çek ya da bağlı olduğu sigortayı indir."
  - "Metal filtrenin kilitleme sürgüsünü arkaya bastır ve filtreyi aşağı çekerek çıkar."
  - "Filtreyi deterjanlı sıcak suda beklet, yumuşak fırçayla temizle ve sıcak suyla durula ya da kılavuzdaki sıcaklıkta bulaşık makinesinde yıka."
  - "Filtre tamamen kuruduktan sonra yerine tak; ıslak filtreyi takma."
  - "Bacasız kullanıyorsan karbon filtrelerin 6 aydan eski olmadığına bak, eskiyse yenisiyle değiştir."
  - "Pişirirken mutfak camını açarak ortama hava girişi sağla."
  - "Davlumbazı ocakla birlikte çalıştır, buhar yoğunsa devri yükselt ve pişirme bitince birkaç dakika daha çalıştır."
faq:
  - q: "Vestel davlumbazım neden yeterince çekmiyor?"
    a: "Vestel kılavuzlarının tablosu 'performansı yeterli değil veya çalışırken yüksek ses yapıyor' satırına şu sebepleri yazıyor: baca çapının yetersiz olması (en az Ø120 mm), bacasız kullanımda karbon filtrelerin 6 aydan eski olması ve mutfağın yeterince havalandırılmaması. VAD 955 CX kılavuzu buna metal filtrelerin temiz olup olmadığını da ekliyor."
  - q: "Mutfak camını açmak gerçekten çekişi etkiler mi?"
    a: "Vestel'in AD-63330 ve AD-6021 kılavuzları bunu doğrudan çözüm olarak yazıyor: hava akımını sağlamak için mutfağı yeterince havalandır, mutfak camını açarak ortamın havalandırılmasını sağla. VAD 955 CX kılavuzu da davlumbaz ocakla birlikte çalıştığında oluşan dengeli hava akımının olumlu bir çekiş gücü oluşturduğunu söylüyor."
  - q: "Metal filtreyi ne sıklıkla temizlemeliyim?"
    a: "VAD 955 CX ve AD-6021 kılavuzlarında metal filtrenin 2-3 haftada bir temizlenmesi gerektiği yazıyor. AD-63330 kılavuzu süreyi kullanım saatine bağlıyor: ortalama 40 saatlik kullanımdan sonra filtre temizliği yapılmalı."
  - q: "Karbon filtre takınca davlumbaz neden daha sesli?"
    a: "VAD 955 CX kılavuzuna göre karbon filtre kullanılması cihazın hava çekiş gücünü azaltıyor ve hava akışındaki zorluk yüzünden davlumbazın sesi yükseliyor. Kılavuz davlumbazların bacalı kullanım öngörülerek üretildiğini ve bacasız kullanımın bacayı dışarı verme imkânı olmadığında önerildiğini yazıyor."
images:
  coverAlt: "Buharı tüten bir tencerenin üstünde çalışan duvar tipi davlumbaz ve arka planda aralık bırakılmış bir mutfak penceresi"
---

Davlumbaz çalışıyor, fanın sesi geliyor ama tencerenin buharı yukarı gitmek yerine mutfağa dağılıyor. Vestel'in davlumbaz kılavuzlarında bu belirti **"Cihazın performansı yeterli değil veya çalışırken yüksek ses yapıyor."** satırında geçiyor. Tablonun sıraladığı sebepler filtreyle sınırlı değil: Vestel **mutfağın havalandırılmasını** ve davlumbazın **ocakla birlikte çalıştırılmasını** da çekişin parçası sayıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → metal filtreyi sürgüsünden çıkar → deterjanlı sıcak suda yıka ya da makinede yıka → kuruyunca tak → bacasızsan karbon filtre 6 aydan eski mi bak → pişirirken camı arala → davlumbazı ocakla birlikte aç, iş bitince birkaç dakika daha çalıştır. Baca çapı Ø120 mm'nin altındaysa montaj meselesi.

## Vestel'in dört sorusu

Bu yazı üç Vestel kılavuzuna dayanıyor: **AD-63330 B/G/S**, **AD-6021 X/YX** ve **VAD 955 CX.** VAD 955 CX'in servis öncesi listesi çekiş sorununu dört soruyla soruyor:

1. Cihazın bacasının eni yeterli mi? (**en az 120 mm**)
2. **Metal filtreler** temiz mi?
3. Bacasız kullanıyorsan **karbon filtreler 6 aydan eski** mi?
4. **Mutfak** yeterince havalandırılıyor mu?

İlki kurulumla ilgili; diğer üçü bugün evde kontrol edilebilir.

## Adım adım: evde denenecekler

**1. Enerjiyi kes.** Vestel'in tüm bakım işlemlerinden önceki kuralı: davlumbazın **fişini çek** ya da **bağlı olduğu sigortayı indir.**

**2. Metal filtreyi çıkar.** Kılavuzun tarifi: metal filtrenin **kilitleme sürgüsünü arkaya doğru bastır** ve filtreyi **cihazın aşağısına doğru çekerek** yerinden çıkar. AD-63330'da filtreye ulaşmak için önce **ön cam yukarı kaldırılıyor**, filtre ise **uç taraftaki yaylı mandala basılarak** çıkıyor.

**3. Filtreyi yıka.** VAD 955 CX ve AD-6021'in yöntemi: filtreyi **bulaşık deterjanlı sıcak suya batır**, bir süre bekle, **yumuşak bir fırçayla** temizle ve **sıcak suyla durula**; gerekirse tekrarla. Makinede yıkayacaksan bu iki modelde **normal program, 55 °C.** AD-63330 kılavuzu filtreyi mümkünse makinede **tek başına, en çok 60 °C'de** yıkamanı istiyor. Yıkamadan sonra renk değişimi olabilir; kılavuza göre bu **bir arıza sebebi değil.** Temizlerken filtrenin **ızgarasına zarar verme.**

**4. Kuruyunca tak.** VAD 955 CX "kurumuş olan filtreyi" geri takmanı söylüyor; AD-63330 daha net: **ıslak filtreyi kesinlikle yerine takma.**

**5. Bacasızsan karbon filtrenin yaşına bak.** Tablonun satırı: bacasız kullanımda **karbon filtrelerin 6 aydan eski olmamasına** dikkat et; eskiyse **yenisiyle değiştir.** Karbon filtre **yıkanmaz.** VAD 955 CX'in bakım bölümü değişim aralığını **3-6 ay** olarak veriyor. AD-63330'da **2 adet** karbon filtre kullanılıyor; filtre motor kapağındaki kanallarla hizalanıp **saat yönünde yarım tur** çevrilerek oturuyor. VAD 955 CX'in yuvarlak filtreleri ise **saat yönünün tersine** çevrilip çıkarılıyor, yenisi **kilitlenene kadar saat yönünde** çevriliyor. Yedek filtre yetkili servisten temin ediliyor.

**6. Mutfağa hava girişi sağla.** Tablonun son satırı çoğu kişinin aklına gelmeyen bir şey: hava akımını sağlamak için **mutfağını yeterince havalandır.** Çözüm sütununda yazan da bu kadar somut: **mutfak camını açarak** ortamın havalandırılmasını sağla.

**7. Ocakla birlikte çalıştır, iş bitince kapatma.** VAD 955 CX'in kullanım bölümüne göre devir işe göre seçilir: **buharın yoğun olduğu işlemde yükselt, az olanda azalt.** Kılavuzun altını çizdiği nokta davlumbazın **ocakla birlikte çalıştırılması**: oluşan **dengeli hava akımı** olumlu bir çekiş gücü oluşturuyor. Pişirme bittikten sonra cihazı **birkaç dakika daha** çalıştırmak öneriliyor; bacasız kullanımda bu süre **10-15 dakika**, çünkü karbon filtrede biriken nemin kurumasını sağlıyor.

## Çekiş zayıf, ses yüksek: karbon filtre etkisi

VAD 955 CX kılavuzu bacasız kullanım bölümünde açık bir not düşüyor: **karbon filtre kullanılması cihazın hava çekiş gücünü azaltır** ve hava akışındaki zorluk yüzünden **davlumbazın sesi yükselir.** Aynı bölüme göre Vestel davlumbazları **bacalı kullanım öngörülerek** üretiliyor, fabrikadan **karbon filtresiz** çıkıyor; bacasız kullanım, havayı dışarı verme imkânı olmadığında öneriliyor. Yani bacasız bir kurulumda bir miktar daha düşük çekiş ve daha yüksek ses kılavuzun tarif ettiği bir durum.

## Baca çapı: montaj meselesi

Tablonun ilk satırı **baca çapının yetersiz olabileceğini** yazıyor; çözüm **en az Ø120 mm** baca kullanılması. Bu evde kullanıcının değiştireceği bir ayar değil, kurulumun kendisi. Borunun çapından ya da güzergâhından şüpheleniyorsan montajı yapan tarafa ya da Vestel Yetkili Servisi'ne danış.

Davlumbaz hiç açılmıyorsa: [Vestel davlumbaz çalışmıyor](/blog/vestel-davlumbaz-calismiyor/). Markadan bağımsız kontroller için [davlumbaz çekmiyor](/blog/davlumbaz-cekmiyor/), sesi öne çıkan durumlar için [davlumbaz gürültülü çalışıyor](/blog/davlumbaz-gurultulu-calisiyor/), filtre temizliğinin ayrıntısı için [davlumbaz yağ filtresi nasıl temizlenir](/blog/davlumbaz-yag-filtresi-nasil-temizlenir/).

## Ne zaman servis

VAD 955 CX'in cümlesi: bu kontrollerden sonra **cihazın performansı hâlâ seni memnun etmiyorsa yetkili servisine başvur.** Vestel'in AD-6021 kılavuzu bir de uyarı ekliyor: cihazı **kendin tamir etmeye çalışma**; Vestel İletişim Merkezi'ne ya da en yakın Vestel Yetkili Servisi'ne ulaş.

⛔ **Kendin-çöz sınırı burada biter.** Filtre, karbon filtre, havalandırma ve kullanım alışkanlığı kullanıcıya; motor, elektrik ve baca hattı servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
