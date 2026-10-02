---
title: "LG bulaşık makinesi bE hatası (köpük)"
description: "LG bulaşık makinesinde bE kodu LG'ye göre aşırı köpük demek. Deterjan türü, sütle köpük temizliği, parlatıcı seviyesi ve makinenin dengesi."
slug: "lg-bulasik-makinesi-be-hatasi"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2. koşu 10:51, LG). Belge bu koşuda yeniden curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi: HTTP 200, md5 yerel kopyayla aynı.
# Belge kimliği lg.com/tr DFC325HD.ABDPLTK ürün destek sayfasının kılavuz listesinden (www.lg.com/ncms/api/v1/support/proxy/retrieveManualSoftwareList?locale=TR). #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
# Hata tablosu (L s.60) "bE  Sıvı bulaşık sabunu gibi uygun olmayan deterjan nedeniyle aşırı köpük oluşumu. • El ile yıkama için kullanılan bulaşık deterjanlarını kullanmayın. Sadece otomatik bulaşık makinesinde
#   kullanılmak üzere tasarlanmış deterjanları kullanın. • Tamburdaki deterjan atığını temizlemek için derin olmayan bir kaba yaklaşık 100~200 ml süt dökün, üst rafa yerleştirin ve ardından cihazı Otomatik programıyla çalıştırın.
#   / Cihaz hizalanmamış. • Cihazın doğru şekilde hizalandığından emin olun."
# Kullanım tablosu (L s.62) "Cihazın içinde aşırı köpük mevcut.": "Bulaşık makinesine özel deterjan kullanılmamış. • Bulaşık makinesine özel deterjan kullanın. / Aşırı parlatıcı miktarı köpüğe neden olabilir. • Parlatıcı dağıtım seviyesini azaltın."
# Diğer: L s.49 "Cihazda asla sıvı bulaşık deterjanı kullanmayın." · L s.47 deterjanı 15 ile 25 çizgileri arasına (sert su/yoğun kir 25, yumuşak su/hafif kir 15) · L s.48 deterjan tablosu (Otomatik 20 g),
#   "Çok fazla deterjan kullanılırsa çok fazla köpük oluşabilir.", hatalı deterjan köpükle dolma + "Aşırı köpük ... cihazdan kaçak olmasına yol açabilir." · L s.26 parlatıcı: "Parlatıcı, hazneden çıkarsa silin. Yoksa, çok fazla köpük oluşabilir"
#   + kapak doğru kapatılmazsa tambura çok yüksek miktarda parlatıcı salınabilir; seviye ayarı (cihaz kapalı, Güç + Çift Duşlama, Gecikmeli Başlatma L0-L4, BAŞLAT kaydet) · L s.27 "Cam lekeliyse ya da alt kısımda köpük mevcutsa ayar seviyesini azaltın."
#   · L s.17 seviye kontrolü: "Cihazın üst plakasını çapraz ittiğinizde cihaz sallanırsa, ayakları tekrar ayarlayın." · L s.14 yükseklik ayarı anahtarla yapılır; montaj yetkili servis elemanınca · L s.60 servisi aramadan önce tabloları kontrol et.
# BİLEREK YAZILMAYANLAR: ayak ayarı adımı (L s.14'e göre anahtarla yapılıyor → alet kuralı; gövdede kurulum/servis yönlendirmesi) · bE'yi İptal ya da fişle "resetleme" (belgede yok) · köpük sensörü/pompa teşhisi (belgede yok)
#   · sütün neden işe yaradığına dair açıklama (belge yalnız "deterjan atığını temizlemek için" diyor) · başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-bulasik-makinesi-be-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (Otomatik program süresi hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Derin olmayan bir kap", "100-200 ml süt", "Bez"]
steps:
  - "Deterjan gözüne el bulaşığında kullanılan sıvı deterjan koyduysan bir daha kullanma."
  - "Yalnız otomatik bulaşık makinesi için üretilmiş deterjan kullan."
  - "Derin olmayan bir kaba 100-200 ml süt dök, kabı üst rafa koy ve makineyi Otomatik programla çalıştır."
  - "Sonraki yıkamalarda deterjanı ana yıkama haznesinde 15 ile 25 çizgileri arasında tut."
  - "Hazneden taşan parlatıcıyı sil ve parlatıcı kapağının tam kapandığını kontrol et."
  - "Tabanda köpük görmeye devam edersen parlatıcı ayar seviyesini bir kademe azalt."
  - "Üst plakayı çapraz iterek makinenin sallanıp sallanmadığını kontrol et."
faq:
  - q: "LG bulaşık makinesinde bE ne demek?"
    a: "LG'nin DFC325HD kullanıcı el kitabındaki hata tablosuna göre bE, sıvı bulaşık sabunu gibi uygun olmayan deterjan nedeniyle aşırı köpük oluşumunu gösterir. LG aynı satırda ikinci neden olarak cihazın hizalanmamış olmasını sayıyor."
  - q: "Neden süt koymam isteniyor?"
    a: "LG'nin tablosunda sütün amacı tek cümleyle yazıyor: tamburdaki deterjan atığını temizlemek. Talimat, derin olmayan bir kaba yaklaşık 100-200 ml süt döküp kabı üst rafa koymak ve makineyi Otomatik programla çalıştırmak."
  - q: "Parlatıcı da köpük yapar mı?"
    a: "LG'ye göre evet. Kılavuzun kullanım tablosunda aşırı parlatıcı miktarının köpüğe neden olabileceği, çözümün parlatıcı dağıtım seviyesini azaltmak olduğu yazıyor. Hazneden taşan parlatıcı silinmezse de çok fazla köpük oluşabiliyor."
  - q: "Köpük makineden su kaçırmasına yol açar mı?"
    a: "LG'nin deterjan bölümündeki uyarıya göre hatalı deterjan makinenin çalışırken köpükle dolmasına neden olabilir; aşırı köpük yıkama sonuçlarını düşürebilir ve cihazdan kaçağa yol açabilir. Kaçak için ayrı kontrolleri LG bulaşık makinesi su kaçırıyor rehberinde topladık."
images:
  coverAlt: "Kapağı açık bulaşık makinesinin tabanında ve alt sepetin çevresinde biriken beyaz köpük"
---

Kapağı açtın, tabanda köpük var ve ekranda **bE** yazıyor. LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabındaki hata tablosu bu kodu tek cümleyle açıklıyor: **"Sıvı bulaşık sabunu gibi uygun olmayan deterjan nedeniyle aşırı köpük oluşumu."** LG'nin tablosuna göre bE'nin ilk nedeni makinenin içindeki bir parça değil, hazneye giren deterjan. LG aynı satıra ikinci bir neden de ekliyor: **cihaz hizalanmamış.** Bu yazıda köpüğün kaynağını, tamburdaki deterjan atığının LG'nin önerdiği yolla nasıl temizleneceğini ve parlatıcının payını sırayla anlatıyoruz. Kaynak tek bir modelin kılavuzu; tuş adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** bE = LG'ye göre uygun olmayan deterjandan aşırı köpük. Sıra şu: el bulaşık deterjanını bırak → yalnız bulaşık makinesi deterjanı → üst rafa sığ bir kapta 100-200 ml süt koyup Otomatik program → deterjanı 15-25 çizgisi arasında tut → taşan parlatıcıyı sil → köpük sürerse parlatıcı seviyesini düşür → makine sallanıyor mu bak. Ayak ayarı anahtarla yapılıyor; o kısım kurulumu yapana ya da servise.

## Adım adım: evde denenecekler

**1. El bulaşık deterjanını bırak.** LG'nin bE satırındaki ilk çözüm doğrudan bir yasak: **el ile yıkama için kullanılan bulaşık deterjanlarını kullanmayın.** Kılavuzun deterjan bölümü aynı şeyi daha kesin söylüyor: **cihazda asla sıvı bulaşık deterjanı kullanmayın.**

**2. Bulaşık makinesi deterjanına dön.** LG'nin istediği, **sadece otomatik bulaşık makinesinde kullanılmak üzere tasarlanmış** deterjan. Kılavuza göre hatalı deterjan cihazın çalışma sırasında **köpükle dolmasına** neden olabiliyor.

**3. Sütle deterjan atığını al.** bE satırındaki ikinci çözüm, tamburda kalan deterjan atığı için: **derin olmayan bir kaba yaklaşık 100-200 ml süt dök, kabı üst rafa yerleştir ve makineyi Otomatik programıyla çalıştır.** LG bu adımın amacını "tamburdaki deterjan atığını temizlemek" diye yazıyor.

**4. Deterjanı ölçülü koy.** Doğru deterjan da fazlası köpürür: LG'ye göre **çok fazla deterjan kullanılırsa çok fazla köpük oluşabilir.** DFC325HD'de deterjan, ana yıkama haznesinde **15 ile 25 şeklinde işaretlenmiş çizgilerin arasına** ulaşana kadar konuyor. Yumuşak su ya da hafif kirli yük için 15 çizgisine kadar, sert su ya da çok kirli yük için 25 çizgisinin üzerine kadar.

**5. Taşan parlatıcıyı sil.** Köpüğün ikinci kaynağı parlatıcı. LG'nin parlatıcı ekleme talimatındaki not açık: **parlatıcı hazneden çıkarsa silin, yoksa çok fazla köpük oluşabilir.** Parlatıcı kapağını da kontrol et; kılavuza göre kapak **doğru şekilde kapatılmazsa tambura çok yüksek miktarda parlatıcı salınabilir.**

**6. Parlatıcı seviyesini bir kademe düşür.** LG'nin kullanım tablosundaki "Cihazın içinde aşırı köpük mevcut" satırında: **aşırı parlatıcı miktarı köpüğe neden olabilir** → **parlatıcı dağıtım seviyesini azaltın.** Kılavuzun parlatıcı bölümü de **alt kısımda köpük mevcutsa ayar seviyesini azaltın** diyor. DFC325HD'de ayar şöyle: makinenin **kapalı olduğundan emin ol,** mevcut ayarı görmek için **Güç ve Çift Duşlama** düğmelerine aynı anda bas, **Gecikmeli Başlatma** ile seviyeyi değiştir (L0 kapalı ile L4 arası), **BAŞLAT** ile kaydet. Kaydedince güç kapanıyor.

**7. Makine sallanıyor mu, bak.** bE satırındaki son neden: **cihaz hizalanmamış.** LG'nin kurulum bölümündeki kontrol: **cihazın üst plakasını çapraz ittiğinde cihaz sallanırsa** ayaklar yeniden ayarlanmalı. Kontrolü sen yapabilirsin; ayarı değil. Aşağıda nedenini anlatıyoruz.

## Hizalama neden senin işin değil

Kılavuza göre makinenin yükseklik ayarları, makine montaj yerine kaydırılmadan önce **bir anahtar kullanılarak** yapılıyor ve LG montajın **yetkili bir servis elemanı** tarafından yapılmasını istiyor. Tezgâh altına yerleşmiş bir makinenin ayaklarıyla uğraşmak bu rehberin sınırının dışında. Üst plakaya çapraz bastırınca makine sallanıyorsa ya da kılavuzun dediği gibi kapak açılırken **meyil, basıklık ya da sürtünme sesi** varsa kurulumu yapan kişiye ya da yetkili servise haber ver.

## Köpük sadece görüntü değil

LG'nin deterjan bölümündeki uyarıya göre **aşırı köpük yıkama sonuçlarını azaltabilir ve cihazdan kaçak olmasına yol açabilir.** bE ile birlikte makinenin önünde su da görüyorsan kardeş rehberimiz [LG bulaşık makinesi su kaçırıyor](/blog/lg-bulasik-makinesi-su-kaciriyor/) sayfasındaki kontrollere geç. Tablet ya da toz deterjan haznede kalıyorsa [LG bulaşık makinesi tableti eritmiyor](/blog/lg-bulasik-makinesi-tableti-eritmiyor/) yazısına bak. Parlatıcı ayarının markadan bağımsız anlatımı [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında, diğer kodlar [bulaşık makinesi hata kodları](/blog/bulasik-makinesi-hata-kodlari/) sayfasında.

## Ne zaman servis

- Doğru deterjanı ölçülü kullandığın, sütle temizlediğin, parlatıcı seviyesini düşürdüğün hâlde bE geri geliyorsa yetkili LG servisine başvur. LG'nin sorun giderme bölümü, servis merkezini aramadan önce bu tabloların kontrol edilmesini istiyor; kontroller bittiyse sıra servisin.
- Makine sallanıyorsa ya da kapak eğri kapanıyorsa ayak ayarı için kurulumu yapan kişiyi ya da servisi çağır.

⛔ **Kendin-çöz sınırı burada biter.** Deterjan, süt, parlatıcı ve kontrol kullanıcıya; ayak ayarı ve makinenin içi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Son yıkamada hangi deterjanı kullandın, sıvı el bulaşık deterjanı karıştı mı?
2. Sütle Otomatik program sonrası köpük azaldı mı?
3. Deterjan 15-25 çizgisini aşıyor mu?
4. Parlatıcı taştı mı, seviyesi kaç?
5. Üst plakaya çapraz bastırınca makine sallanıyor mu?

Ekrandaki kodu ve makinenin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
