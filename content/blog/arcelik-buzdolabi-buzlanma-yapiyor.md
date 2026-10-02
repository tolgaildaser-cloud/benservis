---
title: "Arçelik buzdolabı buzlanma yapıyor"
description: "Arçelik buzdolabında arka duvardaki ince kar normal; kalın buzda kapı, conta ve kapalı kap kontrolü, dondurucuda elle kar eritme sırası."
slug: "arcelik-buzdolabi-buzlanma-yapiyor"
date: "2026-10-02"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Arçelik+Beko belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den yeniden indirildi, HTTP 200,
#   md5'ler 30 Eyl yerel kopyalarıyla birebir. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-beko-2eki/ (dl.log, urls.txt).
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext; sayfa = PDF sayfası (\f ile sayıldı).
#  (A) 3061 N   https://download.arcelik.com.tr/Download.UsageManuals/21493_3061-N-486777-1.pdf  23 s.  md5 20c658cab046cb5eec5cf7e66df355f9  (sayfa atıfları esas olarak A)
#  (B) 5845 NFEY / 8541 NFEY / 5850 NFY …  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7289120181_tr_TR20190724-090854-735.pdf  44 s.  md5 15ab677d45027c5992101461a78df4fa
# Belirti satırı (A s.17, tablo ara başlığı "Buzdolabı içinde su/yoğunlaşma/buz."): "Buzdolabının iç duvarlarında nem birikiyor." →
#   "Havanın sıcak ve nemli olması buzlanmayı ve yoğunlaşmayı arttırır." → "Bu normaldir ve bir arıza değildir." · "Kapılar aralıktır." → "Kapıların tamamen kapalı olduğundan emin olunuz."
#   · "Kapı çok sık açılmıştır ya da uzun süre açık kalmıştır." → "Kapıyı daha seyrek açınız."  (B s.41 aynı satır: "Ürünün iç duvarlarında terleme oluyor.")
# Diğer: A s.12 Kar Eritme: soğutucu bölme tam otomatik eritme; arka duvarda su damlacıkları ve "7-8 mm. kalınlığına kadar karlanma" normal; karın kazınmasına gerek yok;
#   boşaltma borusu "delikte bulunan çubukla" açılır (ALET KURALI: adım yapılmadı) · A s.13 derin dondurucu otomatik eritme yapmaz, karlar "6 ayda bir eritilmelidir", sıra:
#   yiyecekleri kâğıda sar/serin yer ya da başka buzdolabı → sıcaklık ayar düğmesiyle durdur ya da fişi çek → yumuşak altlık üstünde sıcak su dolu kap → mum/gaz lambası/ısıtıcı yok,
#   eritme spreylerinde dikkat → temizlikte kapıyı kapalı tutma → suyu emici bez/süngerle al, kurula, düğmeyi eski konuma getir → boş ve kapalı 2 saat çalıştır
#   · A s.6 buhar ve buharlı temizlik malzemesi yok; buz çözmeyi hızlandırmak için üreticinin önerdikleri dışında mekanik gereç yok
#   · A s.14 conta temizliği ve partikül kontrolü; temizlikten önce fiş · A s.15 "Soğutucu bölmesinin yan duvarında terleme" satırı (açık kaplar → üzerini kapat; nemi kuru bezle sil)
#   · A s.16 kapı contası "kirlenmiş, eskimiş, kırılmış ya da tam oturmamış" → "Contayı temizleyin ya da değiştirin." · B s.38 No Frost olmayan ürünlerde "bir parmak kalınlığa kadar karlanma" → "Temizlemeyin"
#   · B s.41 "Kapı kapanmıyor." → paketler / ayaklarını ayarlayarak dengeleyin / zemin · B s.41 uyarı: sorun giderilemezse bayi ya da Yetkili Servis; çalışmayan ürünü kendiniz onarmayı denemeyin.
# BİLEREK YAZILMAYANLAR: defrost rezistansı/sensör/kart teşhisi (belgede yok) · boşaltma borusunu çubukla açma (alet; gövdede kılavuza yönlendirildi) · conta değişimi (servis)
#   · A s.15'teki "termostat konumunun daha soğuk konuma alınması" çözümü (B'deki karşılığı tersini söylüyor; çelişen satır kullanılmadı) · No Frost modellere elle eritme genellemesi · fiyat.
# Alıntı denetim tablosu: arcelik-buzdolabi-buzlanma-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~3 saat (eritme ve bekleme dahil)"
  totalTime: "PT3H"
  cost: "Ücretsiz"
  tools: ["Sıcak su dolu bir kap", "Yumuşak bir altlık", "Emici bir bez ya da sünger", "Kâğıt"]
steps:
  - "Kapıların tamamen kapandığını kontrol et; kapıyı engelleyen paketlerin yerini değiştir."
  - "Kapıları daha seyrek aç ve uzun süre açık bırakma."
  - "Sıvı içeren yiyecekleri kapalı kaplara al, duvardaki nemi kuru bir bezle sil."
  - "Fişi çek, kapı contalarını ılık suyla silip kurula ve üzerinde kırıntı kalmadığını kontrol et."
  - "Buzdolabı sallanıyorsa ayaklarını ayarlayarak dengele."
  - "Dondurucuda kar birikmişse yiyecekleri kâğıda sarıp serin bir yere al, fişi çek."
  - "Bölmeye yumuşak bir altlık üstünde sıcak su dolu bir kap koy ve kapıyı açık bırak."
  - "Eriyen suyu emici bezle al, bölmeyi kurula, fişi tak ve yiyecekleri koymadan önce dolabı boş ve kapalı 2 saat çalıştır."
faq:
  - q: "Arçelik buzdolabımın arka duvarında ince bir kar tabakası var, arıza mı?"
    a: "Çoğu zaman hayır. Arçelik'in 3061 N kılavuzuna göre soğutucu bölme tam otomatik eritme yapar; soğuma sırasında arka duvarda su damlacıkları ve 7-8 mm kalınlığına kadar karlanma oluşması soğutma sistemi gereği normaldir ve kar belli aralıklarla kendiliğinden erir. Kullanıcının karı kazımasına gerek yok. 5845 NFEY kılavuzu da No Frost olmayan ürünlerde arka duvarda bir parmak kalınlığa kadar karlanma olduğunu yazıyor ve temizlenmemesini istiyor."
  - q: "Dondurucu bölmesindeki karı ne sıklıkla eritmeliyim?"
    a: "Arçelik'in 3061 N kılavuzuna göre derin dondurucu bölme, donmuş besinler bozulmasın diye otomatik eritme yapmaz ve bölmede oluşan karlar 6 ayda bir eritilmelidir. Kılavuz bu işin, dondurucunun çok dolu olmadığı ya da boşaldığı bir zamanda yapılmasını tavsiye ediyor. Kendi modelinin kılavuzunda bu bölüm yoksa ürününün otomatik eritme yapıp yapmadığını kılavuzundan kontrol et."
  - q: "Buzu kazıyarak ya da saç kurutma makinesiyle çabuk çözebilir miyim?"
    a: "Arçelik bunu önermiyor. Kılavuza göre buz çözmeyi hızlandırmak için üreticinin önerdikleri dışında mekanik gereçler ya da başka araçlar kullanılmamalı; buzdolabının içinde elektrikli alet kullanılmamalı; eritme ve temizlikte buhar ya da buharlı temizlik malzemesi kullanılmamalı, çünkü buhar akım taşıyan bölgelere temas ederek kısa devreye ya da elektrik çarpmasına yol açabilir. Mum, gaz lambası ve ısıtıcı da kesinlikle kullanılmamalı. Arçelik'in tarif ettiği hızlandırma yöntemi, bölmeye yumuşak bir altlık üstünde sıcak su dolu bir kap koymak."
  - q: "Yaz aylarında iç duvarlarda daha çok buz ve nem oluyor, neden?"
    a: "Arçelik'in sorun giderme tablosu bunu açıkça yazıyor: havanın sıcak ve nemli olması buzlanmayı ve yoğunlaşmayı artırır; bu normaldir ve bir arıza değildir. Aynı satırdaki diğer iki neden kapının aralık kalması ve kapının çok sık açılması ya da uzun süre açık kalması."
images:
  coverAlt: "Kapısı açık bir buzdolabının dondurucu bölmesinde, katlanmış bir havlunun üzerine konmuş buharı tüten sıcak su dolu bir tencere ve rafları kaplayan ince buz tabakası"
---

Dondurucunun duvarları beyazlaşmış, çekmeceler buz yüzünden zor açılıyor ya da soğutucunun arka duvarında kar görüyorsun. Arçelik'in buzdolabı kılavuzlarındaki sorun giderme tablosunda bu durum **"Buzdolabı içinde su/yoğunlaşma/buz"** ara başlığı altında geçiyor. İlk satır şu: **"Havanın sıcak ve nemli olması buzlanmayı ve yoğunlaşmayı arttırır."** Arçelik'in bu satıra cevabı da kısa: **"Bu normaldir ve bir arıza değildir."** Bu yazıda önce hangi buzun normal sayıldığını ayırıyoruz. Sonra kapı ve conta kontrolüne geçiyoruz, en son da otomatik eritme yapmayan dondurucuda karın elle nasıl eritildiğini anlatıyoruz. Kaynaklar Arçelik'in 3061 N ve 5845 NFEY kılavuzları; bölme ve düğme adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Soğutucunun arka duvarında birkaç milimetrelik kar ve su damlacıkları Arçelik'e göre normal; kazıma. Kalın buz varsa önce kapıların tam kapandığına, kapının ne kadar açık kaldığına, açık kaplara ve contaya bak. Otomatik eritme yapmayan dondurucuda karı Arçelik 6 ayda bir eritmeni istiyor: fişi çek, sıcak su dolu kapla erit, kurula, dolabı 2 saat boş çalıştır.

## Önce ayır: hangi kar normal?

**Soğutucunun arka duvarı.** Arçelik'in 3061 N kılavuzuna göre soğutucu bölme **tam otomatik eritme** yapar. Soğuma sırasında arka duvarda **su damlacıkları ve 7-8 mm kalınlığına kadar karlanma** oluşur; kılavuz bunu soğutma sistemi gereği normal sayıyor. Arka duvardaki otomatik eritme sistemi karı belli aralıklarla kendiliğinden eritir, **karın kazınmasına ve damlacıkların silinmesine gerek yoktur.** Eriyen su bir oluk ve boşaltma borusu üzerinden dolabın arkasındaki buharlaştırma kabına akar ve orada kendiliğinden buharlaşır. 5845 NFEY kılavuzu da **No Frost olmayan ürünlerde** arka duvarda **bir parmak kalınlığa kadar** karlanma olduğunu yazıyor ve talimatı net: **temizlemeyin**, kesinlikle yağ ve benzeri maddeler sürmeyin.

**Derin dondurucu bölme.** Burada durum farklı. 3061 N kılavuzuna göre derin dondurucu, donmuş besinler bozulmasın diye **otomatik olarak eritme yapmaz.** Bölmede biriken kar zamanla kalınlaşır ve kullanıcının eritmesi gerekir.

## Adım adım: evde denenecekler

**1. Kapıların gerçekten kapandığına bak.** Arçelik'in buzlanma satırındaki ikinci neden: **kapılar aralıktır.** Çözüm kapıların tamamen kapalı olduğundan emin olmak. Kapı kendiliğinden aralık kalıyorsa tablonun "Kapı kapanmıyor" satırına bak: **yiyecek paketleri kapının kapanmasını engelliyor olabilir**; engelleyen paketlerin yerini değiştir.

**2. Kapıyı daha seyrek aç.** Satırdaki üçüncü neden: **kapı çok sık açılmıştır ya da uzun süre açık kalmıştır.** Arçelik'in önerisi kapıyı daha seyrek açmak. Kılavuza göre kapılar açıldığında soğutucuya ya da dondurucuya sıcak hava girer; aynı tabloya göre havanın sıcak ve nemli olması da buzlanmayı artırır.

**3. Açık kapları kapat, nemi sil.** 3061 N tablosunda soğutucunun yan duvarında oluşan terleme için sayılan nedenlerden biri **sıvı içeren gıdaların açıkta saklanması.** Çözüm açık kaplarda saklanan gıdaların üzerini uygun şekilde kapatmak. Arçelik ayrıca oluşan nemi **kuru bir bezle silip** devam edip etmediğini kontrol etmeni istiyor.

**4. Contaları temizle ve kontrol et.** Temizliğe başlamadan önce Arçelik **fişi çekmeni** tavsiye ediyor. Kılavuzun bakım bölümüne göre kapı sızdırmazlık contalarının **temizliği ve üzerlerinde partikül olmadığı düzenli şekilde kontrol edilir.** Temizlikte ılık su kullan ve ardından iyice kurula; Arçelik keskin aşındırıcı aletler, sabun, ev temizlik maddesi, deterjan ve cila istemiyor. Tabloya göre conta **kirlenmiş, eskimiş, kırılmış ya da tam oturmamış** olabilir. Kirse temizlemek senin işin; eskimiş ya da kırıksa değişim için yetkili servise bildir.

**5. Dolabı dengele.** "Kapı kapanmıyor" satırının bir başka nedeni: ürün zemin üstünde **tamamen dik durmuyor** olabilir. Arçelik'in çözümü ürünü **ayaklarını ayarlayarak dengelemek**; zeminin de düz ve dolabı taşıyacak kadar sağlam olması gerekiyor.

**6. Dondurucuyu eritmeye hazırla.** Bu ve sonraki iki adım, kılavuzu dondurucu için elle eritme tarif eden modeller içindir (ör. 3061 N). Arçelik bu işi **dondurucu çok dolu değilken ya da boşaldığında** yapmanı tavsiye ediyor. Dondurulmuş yiyecekleri **kâğıda sarıp** mümkün olan en serin yerde sakla, varsa başka bir buzdolabına koy. Sonra **sıcaklık ayar düğmesiyle** dolabın çalışmasını durdur ya da **fişi prizden çek.**

**7. Sıcak su dolu kapla erit.** Arçelik'in hızlandırma yöntemi: dondurucu bölmenin içine, altına **yumuşak bir altlık** koyarak **sıcak su dolu bir kap** yerleştir. Bu sırada **kapıyı kapalı tutma.** Mum, gaz lambası ve ısıtıcı **kesinlikle** kullanılmaz. Arçelik eritme spreylerinin de dolaba ve sağlığa zarar verebilecek madde içerebileceğini yazıyor.

**8. Kurula ve dolabı boş çalıştır.** Eritme bitince dondurucunun alt haznesinde toplanan suyu **emici bir bez ya da süngerle** al, bölmeyi **iyice kurula** ve sıcaklık ayar düğmesini eski konumuna getir ya da fişi tak. Arçelik'in son şartı: yiyecekleri geri koymadan önce dolabı **boş ve kapıları kapalı olarak 2 saat** çalıştır.

## Yapılmaması gerekenler

Arçelik'in güvenlik bölümü buz çözerken üç şeyi açıkça yasaklıyor:

- Buz çözmeyi hızlandırmak için **üreticinin önerdikleri dışında mekanik gereçler** ya da başka araçlar kullanma. Soğutma gazının dolaştığı kısımlar kesici ve delici aletlerle delinirse gaz püskürebilir.
- Temizlik ve eritme için **buhar ya da buharlı temizlik malzemesi** kullanma; buhar akım taşıyan bölgelere temas ederek kısa devreye ya da elektrik çarpmasına yol açabilir.
- Dolabın içinde **elektrikli alet** kullanma.

3061 N kılavuzu bir bakım noktası daha veriyor: soğutucudaki eriyen suyun aktığı **boşaltma borusunun** tıkanıp tıkanmadığı belirli aralıklarla kontrol edilmeli. Kılavuz boruyu açmayı deliğin içindeki çubukla tarif ediyor; modelinde bu parça varsa kılavuzundaki "Kar Eritme" bölümüne bak, emin değilsen yetkili servise bırak.

Markadan bağımsız nedenler için [buzdolabı buzlanma yapıyor](/blog/buzdolabi-buzlanma-yapiyor/) yazısına, conta bakımının ayrıntısı için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) rehberine bakabilirsin. Kapın tam kapanmıyorsa [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/) yazısı var; dolap yeterince soğutmuyorsa [Arçelik buzdolabı soğutmuyor](/blog/arcelik-buzdolabi-sogutmuyor/) rehberine geç.

## Ne zaman servis

Kapılar tam kapanıyor, contalar temiz, yiyecekler kapalı kaplarda ve dondurucuyu elle erittiğin hâlde buz kısa sürede yine kalınlaşıyorsa Arçelik'in sorun giderme tablosu kullanıcıya başka bir neden göstermiyor. Kılavuzun genel uyarısı geçerli: **bu bölümdeki talimatları uygulamana rağmen sorunu gideremezsen ürünü satın aldığın bayiye ya da Yetkili Servise başvur.** Aynı uyarı bir sınır da koyuyor: **çalışmayan ürünü kendin onarmayı deneme.** Eskimiş ya da kırık conta da servisin işi.

⛔ **Kendin-çöz sınırı burada biter.** Kapı, conta temizliği, kap düzeni ve kılavuzun tarif ettiği elle eritme kullanıcıya; soğutma sistemi ve eritme düzeneğinin parçaları uzmana aittir.

## Servisi aramadan önce kısa özet

1. Buz hangi bölmede: soğutucunun arka duvarında mı, dondurucuda mı?
2. Buzun kalınlığı ne kadar, kar mı, sert buz mu?
3. Kapılar kendiliğinden tam kapanıyor mu, conta temiz ve yerinde mi?
4. Dondurucuyu en son ne zaman elle erittin?
5. Eritmeden sonra buz kaç günde geri geldi?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
