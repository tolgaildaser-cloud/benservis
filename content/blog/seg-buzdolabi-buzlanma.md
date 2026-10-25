---
title: "SEG buzdolabı buzlanma sorunu: neden olur, nasıl çözülür?"
description: "SEG buzdolabında buzlanma No Frost'ta kapı ve nemden, statik dolapta birikmeden gelir. Kılavuza göre buz çözme, kurulama ve su tahliye deliği temizliği."
slug: "seg-buzdolabi-buzlanma"
date: "2026-10-24"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 5, küme S, çatal C). origin/main 08904bf'de "seg" geçen slug ve başlık YOK; markasız buzdolabi-buzlanma-yapiyor ve vestel-buzdolabi-buzlanma-yapiyor başka marka/sorgu.
# OT (#164, bu koşu, suggestqueries hl=tr gl=tr) tohum "seg buzdolabı buzlanma": 1. "seg buzdolabı buzlanma sorunu" · 2. "seg buzdolabı neden buzlanma yapar". Ham kayıt _kaynak/ot.log.
# GSC: www-3…6 Sorgular.csv'de SEG buzlanma satırı yok.
# Belge zinciri (#88): SEG'in kendi sitesi yok (seg.com.tr DNS'te çözülmüyor). YK kararı 23 Eki: üretici Vestel. PDF'ler Vestel'in kendi alan adındaki kılavuz sunucusunda
#   (static/statik.vestel.com.tr), bu koşuda HTTP 200 application/pdf. vestel.com.tr aramasında SEG ürün sayfası yok; destekmerkezi.vestel.com.tr kılavuz uç noktası
#   reCAPTCHA istiyor, bu yüzden HTML bağlantı sayfası açılamadı ⚠️ (YK teyidi). Kapaklarda model adı + "VESTEL BEYAZ EŞYA A.Ş.".
#  (A) SEG STW 902 buzdolabı  https://statik.vestel.com.tr/webfiles/20268755_k.pdf  36 s.  md5 1689f0e4ac5a383c348446464dba436a
#  (B) SEG RF4540 A No Frost  https://static.vestel.com.tr/kullanimkilavuzlari/52065130.pdf  24 s.  md5 8ffbdc290dbbc725665f676400bc6c0c
#  (C) SEG 455A çift kapılı   https://static.vestel.com.tr/kullanimkilavuzlari/52028151.pdf  24 s.  md5 e2afd06619a389ef008084a02f6333ee
# No Frost B s.3 · mekanik yöntem yasağı B s.5, C s.5 · buz çözdürme A s.22-23 · eritme C s.17 · arka duvar karlanması C s.19 · nem A s.26, B s.20 · kapı B s.20, A s.26 · tahliye B s.19, C s.17, C s.19 · buzlanma normal A s.18.
# BİLEREK YAZILMAYANLAR: saç kurutma makinesi, sıcak hava gibi yöntemler (belgede yok, mekanik/yapay yöntem yasağı) · No Frost fan/rezistans/sensör teşhisi (#31) · "sürekli buzlanma = gaz kaçağı" çıkarımı · buz çözme süresi (belgede yok) · fiyat (#46).
# Alıntı denetimi: seg-buzdolabi-buzlanma.KAYNAK.md
guide:
  difficulty: "Orta"
  time: "~2-3 saat (buzun erimesi dahil)"
  totalTime: "PT3H"
  cost: "Ücretsiz"
  tools: ["Kuru sünger ya da temiz bez", "Orta boy bir kap ve sıcak su", "Gazete kâğıdı ya da gıda poşeti", "Eriyen su için bir kap"]
steps:
  - "Dolabının No Frost mu yoksa statik mi olduğunu kılavuzundan ya da etiketinden öğren."
  - "No Frost dolapta kapıların tam kapandığını, paketlerin, rafların ve çekmecelerin kapıyı engellemediğini kontrol et."
  - "Statik dolapta soğutucu arka duvarındaki ince karı normal say, dondurucuda buz kalınlaşınca eritme planla."
  - "Eritmeden bir gün önce termostatı en yüksek konuma al, yiyecekleri sarıp soğuk bir yerde beklet."
  - "Fişi çek, dondurucu kapısını açık bırak ve içine sıcak su dolu orta boy bir kap koyarak buzun erimesini bekle."
  - "Eriyen suyu kuru bir sünger ya da bezle al, içi ve damlalığı iyice kurula."
  - "Fişi tak, ilk çalıştırmada termostatı en yüksek konumda çalıştır, sonra normal ayara dön."
faq:
  - q: "SEG buzdolabı neden buzlanma yapar?"
    a: "SEG'in RF4540 A kılavuzuna göre normal (statik) buzdolaplarında kapı açılınca içeri giren nem ile gıdaların nemi dondurucuda buz oluşturur ve bu buzun belirli aralıklarla eritilmesi gerekir. No Frost dolapta fanla üflenen kuru ve soğuk hava nem ve buz oluşmasına imkân vermez; burada buz görüyorsan önce kapının tam kapandığını ve nem kaynaklarını kontrol et."
  - q: "SEG buzdolabının buzu ne zaman çözülmeli?"
    a: "STW 902 kılavuzu buz yapma bölmesinin yılda en az iki kez ya da buz kalınlığı 7 mm'yi aşınca eritilip temizlenmesini istiyor. 455A kılavuzuna göre dondurucu bölmesi yılda en az bir ya da iki kez eritilip temizlenmeli."
  - q: "Buzu bıçakla kazıyabilir miyim?"
    a: "Hayır. Kılavuzlar buzun bıçak ve benzeri sivri uçlu aletlerle kırılmamasını, buz çözmeyi hızlandırmak için mekanik araçlar ya da başka yapay yöntemler kullanılmamasını istiyor. 455A'da çözülmeye başlayan buz, dolapla verilen buz kazıma küreğiyle alınabilir."
  - q: "Soğutucunun arka duvarında kar oluşuyor, arıza mı?"
    a: "455A kılavuzuna göre soğutucu bölmenin arka yüzeyinde, kompresörün belirli aralıklarla çalışıp durmasına bağlı olarak damlacık ve karlanma oluşur ve bu normaldir. Yüksek ortam sıcaklığında kar sürekli birikirse fişi çekip karın erimesini sağla."
  - q: "Soğutucunun tabanında su birikiyor, ne yapmalıyım?"
    a: "Kılavuzlara göre su tahliye deliği tıkanmış olabilir. 455A kılavuzu su toplama oluğundaki deliğin belirli aralıklarla kontrol edilmesini, gerekirse temizleme çubuğuyla açılmasını ve borunun yarım bardak ılık suyla temizlenmesini istiyor."
images:
  coverAlt: "Kapısı açık bir dondurucu bölmesinin iç duvarlarında biriken beyaz buz tabakası"
  steps:
    - "Çizim: solda buzdolabı, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda buzdolabı, sağda kapak"
    - "Çizim: solda buzdolabı, sağda duvarla arasındaki boşluk"
    - "Çizim: solda buzdolabı, sağda iç bölme ve raflar"
    - "Çizim: solda buzdolabı, sağda prizden çekilen fiş"
    - "Çizim: solda buzdolabı, sağda ilgili filtre"
    - "Çizim: solda buzdolabı, sağda prizden çekilen fiş"
---

SEG buzdolabında buzlanmanın sebebi önce dolabın tipine bağlı. Statik bir dolapta dondurucuda buz birikmesi normaldir ve belli aralıklarla eritilir. No Frost bir dolapta ise kılavuza göre buz oluşmamalıdır; görüyorsan sebep çoğu zaman kapı ya da nemdir. Bu yazı üç SEG kılavuzuna dayanıyor: tezgâh altı **STW 902** ve çift kapılı **455A** (statik), No Frost **RF4540 A**. SEG'in kendi sitesi yok; kılavuzlar üretici Vestel'in kılavuz sunucusunda duruyor. Senin modelin farklıysa kendi kılavuzunun eritme bölümü esastır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** No Frost'ta buz varsa kapıya ve neme bak. Statik dolapta buz 7 mm'yi geçince ya da yılda bir-iki kez erit: bir gün önce termostat en yükseğe, fişi çek, kapı açık, içeride sıcak su dolu kap. Bıçak ve sivri metal yok. Kurula, fişi tak.

## Adım adım: SEG buzdolabında buzlanmayı gidermek

**1. Dolabının tipini öğren.** RF4540 A kılavuzu farkı şöyle anlatıyor: normal buzdolaplarında kapı açılmalarında içeri giren nem ile gıdaların nemi dondurucu bölmede buz oluşturur; oluşan kar ve buzun belli aralıklarla eritilmesi gerekir. No Frost dolaplarda fan yardımıyla kuru ve soğuk hava bölmelere birçok noktadan üflenir ve bu **nem ve buz oluşmasına imkân vermez.**

**2. No Frost'ta kapıyı kontrol et.** RF4540 A'nın sorun listesine göre kapılar düzgün açılıp kapanmıyorsa yiyecek paketleri kapıyı engelliyor, kapı bölmeleri, raflar ve çekmeceler düzgün yerleşmemiş, contalar bozuk ya da yırtık ya da dolap düz bir zeminde olmayabilir. Paketleri ve rafları düzelt. Conta bozuksa bu yetkili servis işidir.

**3. Statik dolapta neyin normal olduğunu bil.** 455A kılavuzuna göre soğutucu bölmenin arka yüzeyinde, kompresörün belirli aralıklarla çalışıp durmasına bağlı olarak **damlacık ve karlanma oluşur, bu normaldir.** Yüksek ortam sıcaklığında kar sürekli birikiyorsa fişi çekip karın erimesini sağla. Dondurucu bölmesi ise kendiliğinden eritme yapmaz: 455A'da oluşan karlar dolapla verilen **buz kazıma küreğiyle** belli aralıklarla alınır ve bölme yılda en az bir ya da iki kez eritilir. STW 902'de buz yapma bölmesi **yılda en az iki kez ya da buz 7 mm'yi aşınca** eritilip temizlenmeli; kılavuz aşırı buzlanmanın performansı etkileyeceğini yazıyor.

**4. Bir gün önceden hazırlan.** İki kılavuz da buz çözmeden **bir gün önce** termostatı en yüksek konuma (5 ya da Max.) almanı istiyor; böylece donmuş yiyecekler daha soğuk olur. Buz çözmeyi dolapta yiyecek yokken ya da çok azken yap. 455A'da yiyecekleri gazete kâğıdına sarıp soğutucu bölmeye koy ve işlem bitene kadar soğutucu kapısını açma. STW 902'de yiyecekleri gıdaya uygun poşete koyup temiz bir beze sar, soğuk bir yerde sakla; damlalığın yerinde olduğundan emin ol ve profili **kış moduna** al.

**5. Buzu erit.** Fişi prizden çek (455A'da termostatı "0" konumuna da getirebilirsin) ve buzun erimesini bekle. Aksesuarları çıkar, eriyen suyu uygun bir kaba al. Kapıyı açık tutup içine **orta boy, sıcak su dolu bir kap** koyarsan erime kolaylaşır. Kılavuzların kesin kuralları: buzu bıçak ya da sivri uçlu aletle kırma, keskin metal aparat kullanma, buz çözmeyi mekanik araçlarla ya da başka yapay yöntemlerle hızlandırma.

**6. Kurula.** Dondurucuda oluşan suyu kuru bir sünger ya da bezle al. STW 902 kılavuzu fişi takmadan önce içi ve damlalık tepsisini kurulamanı istiyor. Dolabı su dökerek yıkama; içini ılık ve sabunlu suyla ya da karbonatlı suyla sil. Kılavuza göre elektrikli parçalara su girmesi ciddi hasar yapar; çalıştırmadan önce parçaların kuru olduğundan emin ol.

**7. Yeniden çalıştır.** Fişi tak. STW 902 kılavuzu kurulamadan sonraki ilk çalıştırmada termostatı **5 konumuna** ayarlamanı, profili de ortam sıcaklığına göre yeniden yaz ya da kış konumuna getirmeni istiyor. Bölme yeterince soğuyunca termostatı normal kullanım konumuna (3-4) döndür; ayrıntı [SEG buzdolabı ayarı kaç olmalı](/blog/seg-buzdolabi-ayari-kac-olmali/) yazısında.

## Buzlanmayı azaltmak ve suyla karışan durumlar

- **Nem:** Kılavuzlara göre yiyecekler düzgün ambalajlanmamış, kaplar kurulanmadan konmuş ya da kapı çok sık açılıyor olabilir. Kapı her açıldığında odadaki nem dolaba girer; oda nemliyse birikim daha hızlı olur. Yiyecekleri kuru, ağzı kapalı kaplarda sakla, kapıyı daha seyrek aç.
- **Arka duvar:** 455A kılavuzu paketlerin soğutucunun arka duvarına dayanmamasını istiyor; aksi hâlde oluşan kar paketleri duvara yapıştırır.
- **Tabanda su:** Kılavuzlara göre su tahliye deliği tıkanmış olabilir. 455A'da su toplama oluğundaki deliği belirli aralıklarla kontrol et, gerekirse temizleme çubuğuyla aç ve boruyu yarım bardak ılık suyla temizle.
- **STW 902'de buz yapma bölmesi:** Kılavuz buz yapma bölmesinin hemen altının dolabın en soğuk bölgesi olduğunu ve burada ve diğer bölümlerde buzlanma, karlanma ve nemlenmenin normal görülebileceğini yazıyor.

Markadan bağımsız anlatım için [buzdolabı buzlanma yapıyor](/blog/buzdolabi-buzlanma-yapiyor/) yazısına, soğutma da zayıfladıysa [SEG buzdolabı soğutmuyor](/blog/seg-buzdolabi-sogutmuyor/) yazısına bak.

## Ne zaman servis

No Frost dolapta kapılar tam kapandığı ve nem kaynakları giderildiği hâlde buz tekrar ediyorsa ya da conta yırtıksa kullanıcı adımı biter. Kılavuzların kapanış cümlesi: uyarıların hepsini yerine getirdiğin hâlde sorun sürüyorsa İletişim Merkezi'ni ara ve teknik destek iste.

⛔ **Kendin-çöz sınırı burada biter.** Buz çözme, kurulama, kapı ve tahliye deliği sende; conta, fan, rezistans ve soğutma sistemi yetkili servisin.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
