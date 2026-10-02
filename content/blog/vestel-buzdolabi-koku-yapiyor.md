---
title: "Vestel buzdolabı koku yapıyor"
description: "Vestel buzdolabında kötü koku varsa Vestel'in sırası: fişi çek, karbonatlı suyla sil, kurula; yiyeceği kapalı kapta sakla, bozulanı dolapta tutma."
slug: "vestel-buzdolabi-koku-yapiyor"
date: "2026-10-02"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Vestel grubu). Dört belge bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in kendi alan adından indirildi,
#   hepsi HTTP 200; md5'ler 27 Eyl yerel kopyalarıyla (blog-taslaklar/kaynak-vestel-sprint/) 4/4 birebir. pdftotext -layout -f N -l N; sayfa = PDF sayfası.
#   Web araması KULLANILMADI (adresler yayındaki vestel-buzdolabi-sogutmuyor provenansından).
#  R1) NF52001 / NF52001 S        https://statik.vestel.com.tr/webfiles/20263682_k.pdf  48 s.  md5 686a18210032057be328243bd73f033b  (sayfa atıfları bu belgeye göre)
#  R2) NFK52002 E / ES / EX WIFI  https://statik.vestel.com.tr/webfiles/20263704_k.pdf  48 s.  md5 70b85e8c382ca01b421f743d8117c15a
#  R3) NFK64012 E/EX/EKX GI WIFI  https://statik.vestel.com.tr/webfiles/20264529_k.pdf  52 s.  md5 3315ec7d9a3a928facd0f2d7df92092a
#  R4) R 5402 NF (eski)           https://static.vestel.com.tr/kullanimkilavuzlari/52028600.pdf  28 s.  md5 59b1a670570aa68dfcf1f1d808fa724b
# Ana bölüm "Kötü kokuların önlenmesi" (R1 s.34 · R2 s.36 · R3 s.37, üçünde aynı):
#   "Ürününüzün üretiminde kokuya neden olacak hiçbir madde kullanılmamaktadır. Ancak uygun olmayan yiyecek saklamaya ve ürün iç yüzeyinin gerektiği şekilde
#    temizlenmemesine bağlı olarak koku ortaya çıkabilir. Bu sorunu önlemek için: • 15 günde bir karbonatlı suyla temizleyin. • Yiyecekleri kapalı kaplarda
#    saklayın. Ağzı açık saklanan gıdalardan yayılan mikroorganizmalar kötü kokuya neden olur. • Saklama süresi dolan ve bozulan gıdaları kesinlikle
#    buzdolabınızda saklamayın." + NOT çay posası: "ağzı açık bir kap içinde ürün içine yerleştirin ve en geç 12 saat sonra alın. Çay posasını 12 saatten
#    fazla ürün içerisinde tutarsanız kokuya sebep olan organizmaları bünyesinde toplayacağı için kokunun kaynağı haline gelebilir."
# "Temizlik ve Bakım" (aynı sayfa): "Cihazın temizlik ve bakımına başlamadan önce mutlaka cihazın fişini prizden çekin." / "Cihazınızı su dökerek yıkamayın."
#   / "Bir çay kaşığı karbonatı yarım litre suda eritin. Bir bezi bu sıvıyla ıslatıp iyice sıkın. Bu bezle cihazınızın içini silin ve ardından iyice kurulayın."
#   / "Parçaları tek tek çıkartıp, sabunlu su ile temizleyin. Bulaşık makinasında yıkamayın." / "Temizlik için keskin ve aşındırıcı aletler, sabun, ev temizlik
#   maddeleri, deterjan, gaz, benzin, cila, tiner, asit gibi yanıcı, parlayıcı ve eritici malzemeler asla kullanmayın." / içini, parçalarını kurulayıp
#   "Cihazınızı çalıştıracağınız zaman cihazınızın, aksesuarlarının ve parçalarının kuru olduğundan emin olun." + UYARI elektrik çarpma.
#   (NOT: aynı sayfada "sabunlu su ile temizleyin" ve "sabun ... asla kullanmayın" birlikte geçiyor; gövdede yalnız parçalar için sabunlu su, iç yüzey için karbonatlı su yazıldı.)
# Yerleştirme: R1 s.27 "Nem ve koku oluşmasını önlemek için besinlerin buzdolabına kapalı kaplarda veya üzerleri örtülerek yerleştirilmelidir." /
#   "Sıcak yiyecek ve içeceklerin buzdolabına yerleştirilmeden önce oda sıcaklığına soğutulması gerekir." · R1 s.28 "Patates, soğan ve sarımsak buzdolabında
#   saklanmamalıdır." / "Et ve balık ürünleri çapraz bulaşmayı önlemek için sebzelerden ayrı tutunuz."
# Opsiyonel: R1 s.26 İyon teknolojisi ("Bu özellik opsiyoneldir.") · "Maksimum tazelik filtresi ... kötü kokuların uzaklaştırılmasına yardımcı olur." /
#   "Maksimum tazelik filtresi yılda bir kez temizlenmelidir." (R2 s.29 · R3 s.30)
# Uzun süre kullanılmayacaksa: R1 s.40 "fişi prizden çıkartın. Eritme işleminden sonra Temizlik ve bakım bölümünde anlatılan uyarıları dikkate alarak temizleyip
#   nem ve koku oluşmasını engellemek için kapıyı açık bırakın." (R2 s.41 · R3 s.43 · R4 s.24)
# İlk çalıştırma: R4 s.8 "Buzdolabınızı ilk çalıştırdığınızda koku duyulabilir; koku buzdolabınız soğutmaya geçince kaybolacaktır." (yalnız R4'te)
# Güvenlik: R1 s.8 "Cihazdan garip bir ses, duman ve koku gelirse." → "cihazınızı hemen kapatın, güç bağlantısını kesin ve yetkili servisle irtibata geçin." (R2 s.8 · R3 s.9)
# BİLEREK YAZILMAYANLAR: sirke/limon/kahve gibi belgede olmayan ev yöntemleri · tahliye deliği/kanalı temizliği (belgede yok) · koku = gaz kaçağı çıkarımı
#   · maksimum tazelik filtresinin söküm ayrıntısı (model farkı) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-buzdolabi-koku-yapiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Karbonat", "Yumuşak bez", "Kuru bir havlu", "Kapaklı saklama kapları"]
steps:
  - "Temizliğe başlamadan önce buzdolabının fişini prizden çek."
  - "Bozulan ve saklama süresi dolan yiyecekleri dolaptan çıkar."
  - "Rafları ve parçaları tek tek çıkarıp sabunlu suyla elde yıka."
  - "Bir çay kaşığı karbonatı yarım litre suda erit, bezi bu suyla ıslatıp iyice sık ve dolabın içini sil."
  - "İçi ve parçaları iyice kurula, her şey kuruyken yerine tak ve fişi tak."
  - "Yiyecekleri kapalı kaplarda ya da üzerleri örtülü olarak yerleştir."
  - "Sıcak yemeği dolaba koymadan önce oda sıcaklığına kadar soğut."
  - "İç temizliği 15 günde bir karbonatlı suyla tekrarla."
faq:
  - q: "Vestel buzdolabı neden kötü kokuyor?"
    a: "Vestel'in kullanım kılavuzlarındaki 'Kötü kokuların önlenmesi' bölümüne göre üründe kokuya neden olacak bir madde kullanılmıyor; koku uygun olmayan yiyecek saklama ve iç yüzeyin gerektiği gibi temizlenmemesi yüzünden ortaya çıkabiliyor. Kılavuza göre ağzı açık saklanan gıdalardan yayılan mikroorganizmalar kötü kokuya neden olur."
  - q: "Buzdolabının içini neyle temizlemeliyim?"
    a: "Vestel'in tarifi: bir çay kaşığı karbonatı yarım litre suda erit, bezi bu sıvıyla ıslatıp iyice sık, dolabın içini sil ve ardından iyice kurula. Parçalar tek tek çıkarılıp sabunlu suyla temizlenir, bulaşık makinesinde yıkanmaz. Dolap su dökerek yıkanmaz; tiner, benzin, asit gibi yanıcı ve eritici malzemeler kullanılmaz."
  - q: "Çay posası kokuyu alır mı?"
    a: "Vestel kılavuzu çayı bilinen en iyi koku alıcılardan biri olarak anıyor: demlenmiş çay posası ağzı açık bir kapta dolabın içine konur ve en geç 12 saat sonra alınır. Kılavuzun uyarısı: 12 saatten uzun kalırsa kokuya sebep olan organizmaları topladığı için kokunun kaynağı hâline gelebilir."
  - q: "Yeni aldığım buzdolabı kokuyor, normal mi?"
    a: "Eski nesil R 5402 NF kılavuzunda buzdolabı ilk çalıştırıldığında koku duyulabileceği ve kokunun buzdolabı soğutmaya geçince kaybolacağı yazıyor. Ancak koku garip bir ses ya da dumanla birlikte geliyorsa Vestel'in talimatı farklı: cihazı hemen kapat, güç bağlantısını kes ve yetkili servisle irtibata geç."
images:
  coverAlt: "Rafları boşaltılmış açık bir buzdolabının içini nemli bir bezle silen bir el ve tezgâhta kapaklı saklama kapları"
---

Kapağı açtığında yüzüne gelen koku birkaç gündür geçmiyor ve hangi kaptan geldiğini bulamıyorsun. Vestel'in buzdolabı kullanım kılavuzlarında bunun için ayrı bir bölüm var: **"Kötü kokuların önlenmesi."** Bölümün ilk cümlesi kaygıyı baştan gideriyor: Vestel'e göre üründe **kokuya neden olacak hiçbir madde kullanılmıyor.** Koku, kılavuzun ifadesiyle **uygun olmayan yiyecek saklama** ve **iç yüzeyin gerektiği gibi temizlenmemesi** yüzünden ortaya çıkıyor. İkisi de kullanıcının elinde.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → bozulan yiyeceği çıkar → parçaları sabunlu suyla elde yıka → içi bir çay kaşığı karbonat + yarım litre su ile sil → her şeyi iyice kurula → yiyeceği kapalı kapta sakla, sıcak yemeği soğutup koy. Temizliği 15 günde bir tekrarla. Koku duman ya da garip sesle geliyorsa fişi çek, servisi ara.

## Adım adım: evde denenecekler

**1. Fişi çek.** Vestel'in temizlik bölümündeki ilk kural: cihazın temizlik ve bakımına başlamadan önce **mutlaka fişini prizden çek.**

**2. Kaynağı ayıkla.** Kılavuzun kötü koku bölümündeki üçüncü madde kesin: **saklama süresi dolan ve bozulan gıdaları kesinlikle buzdolabında saklama.** Temizliğe dolabı boşaltarak başla; açık kapları ve tarihi geçmiş ürünleri ayır.

**3. Parçaları elde yıka.** Vestel'e göre raflar ve parçalar **tek tek çıkarılıp sabunlu suyla** temizlenir; **bulaşık makinesinde yıkanmaz.**

**4. İçi karbonatlı suyla sil.** Kılavuzun tarifi: **bir çay kaşığı karbonatı yarım litre suda erit**, bir bezi bu sıvıyla ıslat ve **iyice sık**, dolabın içini bu bezle sil. Vestel dolabın **su dökerek yıkanmamasını** ve temizlikte tiner, benzin, asit gibi **yanıcı, parlayıcı ve eritici** malzemeler ile keskin ve aşındırıcı aletler kullanılmamasını istiyor.

**5. Kurula, sonra çalıştır.** Silme bittikten sonra içi **iyice kurula.** Kılavuzun uyarısı açık: cihazı çalıştırmadan önce cihazın, aksesuarlarının ve parçalarının **kuru olduğundan emin ol**; elektrikli parçalara su girmesi ciddi hasara yol açar. Parçaları yerine tak, ardından fişi tak.

**6. Kapalı kapta sakla.** Kötü koku bölümünün ikinci maddesi: **yiyecekleri kapalı kaplarda sakla.** Kılavuz sebebini de yazıyor: **ağzı açık saklanan gıdalardan yayılan mikroorganizmalar kötü kokuya neden olur.** Yerleştirme bölümü aynı kuralı "kapalı kaplarda veya üzerleri örtülerek" diye veriyor.

**7. Sıcak yemeği soğut.** Vestel'e göre sıcak yiyecek ve içecekler dolaba konmadan önce **oda sıcaklığına soğutulmalı.** Kılavuz ayrıca sıvıların ve sulu yemeklerin **üstünün kapatılmasını** istiyor; aksi hâlde dolabın içindeki nem oranı artar.

**8. On beş günde bir tekrarla.** Kötü koku bölümünün ilk maddesi bir takvim veriyor: dolabın içini **15 günde bir karbonatlı suyla** temizle.

## Yerleştirmede kokuyu azaltan kurallar

Vestel'in yiyecek yerleştirme bölümü kokuyla doğrudan ilgili birkaç kural daha sayıyor:

- **Patates, soğan ve sarımsak** buzdolabında saklanmamalı.
- **Et ve balık** ürünleri çapraz bulaşmayı önlemek için sebzelerden ayrı tutulmalı; et, balık ve tavuk birbirine temas etmemeli.
- Sıvıların ve sulu yemeklerin **üstü kapatılmalı;** kılavuza göre bu ayrıca tat ve lezzetlerinin korunmasını da sağlar.

## Çay posası: süresine dikkat

Kılavuzun notuna göre **çay, bilinen en iyi koku alıcılardan biri.** Demlenmiş çay posasını **ağzı açık bir kap** içinde dolaba yerleştir ve **en geç 12 saat sonra** al. Vestel'in uyarısı önemli: posa 12 saatten uzun kalırsa kokuya sebep olan organizmaları topladığı için **kokunun kaynağı hâline gelebilir.**

## Modelinde varsa: iyon ve tazelik filtresi

Bazı Vestel modellerinde kokuya karşı iki ek özellik var; kılavuz ikisinin de opsiyonel olduğunu, her üründe bulunmayabileceğini yazıyor:

- **İyon teknolojisi:** kılavuza göre havadaki kötü koku ve toz partiküllerini nötralize edebilen negatif iyon salınımı yapar.
- **Maksimum tazelik filtresi:** sebzelikteki sebze ve meyvelerin yaydığı etilen gazının ve kötü kokuların uzaklaştırılmasına yardımcı olur. Vestel bu filtrenin **yılda bir kez temizlenmesini** istiyor; nasıl çıkarılacağı kendi modelinin kılavuzunda.

## Tatile çıkarken

Vestel'in önemli notlarına göre buzdolabını uzun süre (yaz tatili gibi) kullanmayacaksan **fişi prizden çıkar**, eritme işleminden sonra temizlik bölümündeki uyarılara göre temizle ve **nem ve koku oluşmasını engellemek için kapıyı açık bırak.**

Markadan bağımsız temizlik rehberi için [buzdolabı nasıl temizlenir](/blog/buzdolabi-nasil-temizlenir/) yazısına bakabilirsin. Dolap koku yapmanın yanında yeterince soğutmuyorsa: [Vestel buzdolabı soğutmuyor](/blog/vestel-buzdolabi-sogutmuyor/).

## Ne zaman servis

Koku **garip bir ses ya da dumanla** birlikte geliyorsa yukarıdaki adımlarla uğraşma. Vestel'in güvenlik bölümü bu durumu cihazın kullanılmaması gereken haller arasında sayıyor: **cihazı hemen kapat, güç bağlantısını kes ve yetkili servisle irtibata geç.** Temizlik ve saklama kurallarına uyduğun hâlde koku sürüyorsa da kılavuzun genel kuralı geçerli: arıza durumunda cihazı **kendin tamir etmeye kalkışma**; cihazın içinde kullanıcının tamir edebileceği parça yoktur.

⛔ **Kendin-çöz sınırı burada biter.** İç yüzey, raflar ve yiyecek düzeni kullanıcıya; soğutma sistemi ve elektrikli parçalar servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Koku hangi bölmede: soğutucu mu, dondurucu mu, sebzelik mi?
2. Dolap boşaltılıp karbonatlı suyla silindi mi, parçalar kurulandı mı?
3. Yiyecekler kapalı kapta mı, bozulan ürün kaldı mı?
4. Kokuyla birlikte garip bir ses ya da duman var mı?
5. Dolap normal soğutuyor mu?

Bu beşine cevabın varsa servise "buzdolabı kokuyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
