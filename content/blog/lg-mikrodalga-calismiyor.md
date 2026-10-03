---
title: "LG mikrodalga çalışmıyor"
description: "LG mikrodalga çalışmıyorsa LG'nin servis öncesi listesi: fişi yeniden tak, ayrı priz kullan, kapağı kapat, tepsiyi oturt, çocuk kilidini aç, su testi yap."
slug: "lg-mikrodalga-calismiyor"
date: "2026-10-03"
category: "Mikrodalga"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, ek-2, mikrodalga koşusu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alt alan adından (gscs-b2c.lge.com)
#   indirildi, HTTP 200, application/pdf, yönlendirme 0. Web araması yalnız belgenin yerini bulmak için. Sayfa = PDF sayfası. Yerel: blog-taslaklar/kaynak-mikrodalga-3eki/
#  L1) LG MJ3281BP ızgara özellikli ve konveksiyonlu mikrodalga fırın kullanım kılavuzu (MFL67462902)  https://gscs-b2c.lge.com/open/downloadFile?fileId=KROWM000387827.pdf  36 s.  md5 dfd23aa2ec400f3f502836ede894e568
# Ana liste: L1 s.34 "EĞER FIRININIZ ÇALIŞMIYORSA , YETKİLİSERVIS ÇAĞIRMADAN ÖNCE 1. Fişin prize tam olarak takılıp takılmadığını. 2. Evdeki sigortalardan birinin atıp
#   atmadığını. 3. Ön kapağın tam olarak kapanıp kapanmadığını. 4. Döner tepsi ve desteğinin yerine oturup oturmadığını kontrol ediniz."
# Kurulum/test: L1 s.8 "3 Fırınınızı standart değerdeki bir ev prizine takın. Fırının prize takılı tek alet olduğundan emin olun. Fırınınız doğru çalışmazsa, fişini prizden
#   çekin ve tekrar takın." "4 ... Dönen halkayı Fırının içine yerleştirin ve cam tepsiyi üste yerleştirin." "5 Fırına 300 ml su içeren mikrodalga-güvenli bir kap koyun."
#   "6 DUR/SİL düğmesine basın ve pişirme süresini 30 saniye ayarlamak için BAŞLA/HIZLI BAŞLATMA düğmesine bir kez basın." "7 ... Su ısınmışsa Fırınınız sorunsuz çalışıyor demektir.
#   Kabı Fırından çıkarırken dikkatli olun çünkü sıcak olabilir."
# Çocuk kilidi: L1 s.12 "Herhangi bir düğmeye basılırsa‚ "ÇOCUK KİLİDİ ETKİN" yazısı ve " " sembolü ekrana gelecektir." "ÇOCUK KİLİDİNİ iptal etmek için "ÇOCUK KİLİDİ ETKİN"
#   yazısı ekrandan silinene kadar DUR/SİL düğmesine basın. Kilit açıldığında BİP sesi duyacaksınız."
# Uyarı: L1 s.4 "Fırının kapak, kapak fitili, kontrol paneli, emniyet kilidi düğmelerini veya diğer parçalarını kurcalamayın, ayarlamayı ya da onarmayı denemeyin"
#   "Mikrodalga Fırının kapağının fitilleri ve bitişiğindeki parçalar arızalıysa Fırını çalıştırmayın. Onarım işleri sadece yetkili servis teknisyenleri tarafından gerçekleştirilmelidir."
# Kapak: L1 s.5 "Fırınınızı, kapağına yerleştirilmiş emniyet kilitlerinden dolayı kapağı açık şekilde kullanamazsınız. Emniyet kilitlerinin kurcalanmaması önemlidir." "(Fırının
#   kapağı açıldığında emniyet kilitleri mevcut pişirme işlemini otomatik olarak durdurur.)" "Fırının ön yüzüyle kapağı arasına herhangi bir nesne (mutfak havlusu, peçete, vb.)
#   koymayın ve izolasyon yüzeyleri üzerinde yiyecek artıkları veya temizlik malzemesi kalıntılarının birikmesine izin vermeyin."
# SSS: L1 s.32 "BİP sesi ayarın doğru girildiğini gösterir." · "Fırın boş çalıştırıldığında mikrodalga işlevi zarar görür mü? Evet. Fırını asla boş konumda çalıştırmayın."
#   · "Fırının ışığının yanmamasının birkaç sebebi olabilir. Lambası bitmiştir ya da elektrik devresi arızalanmıştır."
# Bilerek yazılmayanlar: sigorta kontrolü numaralı adımda değil (brif: elektrik panosu yok; gövdede yalnız anıldı) · emniyet kilidi/kapak anahtarı müdahalesi (belge yasaklıyor)
#   · lamba değişimi · başka LG modellerine genelleme · fiyat. Not: Beko MWB 2510 EX kılavuzunda aynı liste var; Beko sayfası yazılmadı (bulunamadı listesinde).
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Mikrodalgaya uygun bir kap", "300 ml su"]
steps:
  - "Fişin prize tam takılı olduğunu kontrol et; fırın doğru çalışmıyorsa fişi çekip yeniden tak."
  - "Fırının prize takılı tek cihaz olduğundan emin ol."
  - "Ön kapağın tam kapandığını kontrol et; kapakla ön yüz arasında havlu, peçete ya da yiyecek artığı bırakma."
  - "Dönen halkanın fırının içinde, cam tepsinin de onun üstünde yerine oturduğundan emin ol."
  - "Ekranda ÇOCUK KİLİDİ ETKİN yazıyorsa yazı silinene kadar DUR/SİL düğmesine basarak kilidi aç."
  - "300 ml su dolu mikrodalgaya uygun bir kapla 30 saniyelik test yap ve suyun ısınıp ısınmadığına bak."
faq:
  - q: "LG mikrodalgam çalışmıyor, servisi çağırmadan önce neye bakmalıyım?"
    a: "LG'nin MJ3281BP kılavuzundaki servis öncesi listesi dört madde sayıyor: fişin prize tam takılıp takılmadığı, evdeki sigortalardan birinin atıp atmadığı, ön kapağın tam kapanıp kapanmadığı ve döner tepsi ile desteğinin yerine oturup oturmadığı. Kurulum bölümü ayrıca fırının prize takılı tek alet olmasını ve fırın doğru çalışmazsa fişin çekilip yeniden takılmasını istiyor."
  - q: "Düğmelere basınca ekranda ÇOCUK KİLİDİ ETKİN yazıyor, ne yapmalıyım?"
    a: "LG kılavuzuna göre çocuk kilidi açıkken herhangi bir düğmeye basıldığında ekranda 'ÇOCUK KİLİDİ ETKİN' yazısı ve kilit sembolü görünür. Kilidi kaldırmak için bu yazı ekrandan silinene kadar DUR/SİL düğmesine basılır; kilit açıldığında bip sesi duyulur."
  - q: "Mikrodalganın çalışıp çalışmadığını nasıl test ederim?"
    a: "LG'nin kurulum testi şöyle: fırına 300 ml su içeren mikrodalgaya uygun bir kap koy, kapağı kapat, DUR/SİL düğmesine bas ve 30 saniye ayarlamak için BAŞLA/HIZLI BAŞLATMA düğmesine bir kez bas. Geri sayım bitip bip sesi gelince suyun sıcaklığına bak; su ısınmışsa fırın sorunsuz çalışıyor demektir. Kabı çıkarırken dikkatli ol, sıcak olabilir."
  - q: "Kapağı açınca fırın duruyor, bu arıza mı?"
    a: "Hayır. LG kılavuzuna göre fırının kapağına yerleştirilmiş emniyet kilitleri vardır ve kapak açıldığında mevcut pişirme işlemini otomatik olarak durdururlar; fırın kapağı açıkken kullanılamaz. Emniyet kilitlerinin kurcalanmaması gerekir."
images:
  coverAlt: "Tezgâhtaki bir mikrodalga fırının cam tepsisinde duran, içinde su olan mikrodalgaya uygun bir ölçü kabı"
---

Fişi takılı, ama ekrana basınca hiçbir şey olmuyor ya da program başlamıyor. LG'nin MJ3281BP ızgaralı ve konveksiyonlu mikrodalga kılavuzunun son sayfasında bu durum için hazır bir liste var: **"EĞER FIRININIZ ÇALIŞMIYORSA, YETKİLİ SERVİS ÇAĞIRMADAN ÖNCE"** kontrol etmen istenen dört madde. Kılavuzun kurulum, çocuk kilidi ve kapak bölümleri bu listeyi tamamlıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çekip yeniden tak → fırın prizdeki tek cihaz olsun → kapak tam kapansın, arasında havlu ya da artık kalmasın → halka ve cam tepsi yerine otursun → ÇOCUK KİLİDİ ETKİN yazıyorsa DUR/SİL ile kilidi aç → 300 ml suyla 30 saniyelik test yap. Su ısınmıyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Fişi kontrol et, yeniden tak.** LG listesinin ilk maddesi **fişin prize tam olarak takılıp takılmadığı.** Kurulum bölümü bir adım daha ekliyor: fırın doğru çalışmazsa **fişini prizden çekip tekrar tak.**

**2. Fırına prizi tek başına ver.** LG kurulumda fırının **standart değerdeki bir ev prizine** takılmasını ve **prize takılı tek alet** olmasını istiyor. Çoklu priz ya da aynı prizi paylaşan başka bir cihaz varsa fırını tek başına bir prize tak.

**3. Kapağı tam kapat.** Listenin üçüncü maddesi **ön kapağın tam olarak kapanıp kapanmadığı.** LG'nin açıklaması: fırının kapağında **emniyet kilitleri** var ve fırın **kapağı açık şekilde kullanılamaz**; kapak açıldığında emniyet kilitleri pişirmeyi otomatik olarak durdurur. Güvenlik bölümü kapakla ön yüz arasına **mutfak havlusu, peçete gibi bir nesne konmamasını** ve izolasyon yüzeylerinde **yiyecek artığı ya da temizlik malzemesi kalıntısı** birikmemesini istiyor.

**4. Halkayı ve tepsiyi oturt.** Dördüncü madde: **döner tepsi ve desteğinin yerine oturup oturmadığı.** Kurulumdaki sıra şöyle: önce **dönen halkayı fırının içine** yerleştir, sonra **cam tepsiyi üstüne** koy.

**5. Çocuk kilidini aç.** Tuşlara basınca bir şey olmuyorsa ekrana bak. LG'ye göre çocuk kilidi açıkken herhangi bir düğmeye basıldığında ekranda **"ÇOCUK KİLİDİ ETKİN"** yazısı ve kilit sembolü çıkar. Kilidi kaldırmak için **bu yazı ekrandan silinene kadar DUR/SİL düğmesine bas;** kilit açılınca bip sesi duyarsın.

**6. Su testiyle doğrula.** LG'nin kurulum testi fırının çalışıp çalışmadığını gösteriyor: **300 ml su** dolu mikrodalgaya uygun bir kabı cam tepsiye koy, kapağı kapat, **DUR/SİL**'e bas ve 30 saniye için **BAŞLA/HIZLI BAŞLATMA** düğmesine bir kez bas. Geri sayım bitince suya bak: **su ısınmışsa fırın sorunsuz çalışıyor demektir.** Kabı çıkarırken dikkat et, sıcak olabilir.

## Bilmen gerekenler

- **Bip sesi:** LG'ye göre düğmeye basınca gelen bip, **ayarın doğru girildiğini** gösterir.
- **Boş çalıştırma:** fırın boş çalıştırılırsa mikrodalga işlevi zarar görür; LG fırının **asla boş çalıştırılmamasını** istiyor. Test için hep içinde su olan bir kap kullan.
- **Sigorta:** LG'nin listesinde evdeki sigortalardan birinin atıp atmadığı da var. Sigorta kutusu bu rehberin kapsamı dışında.

Fırın çalışıyor ama ısıtmıyorsa markadan bağımsız kontrol listesi: [mikrodalga çalışıyor ama ısıtmıyor](/blog/mikrodalga-isitmiyor/). Tepsi dönmüyorsa: [mikrodalgada tabla dönmüyor](/blog/mikrodalga-tabla-donmuyor/).

## Ne zaman servis

- Fiş, priz, kapak, tepsi ve çocuk kilidi kontrol edildiği hâlde **su testinde su ısınmıyorsa.**
- **Fırının ışığı yanmıyorsa:** LG'ye göre lamba bitmiş ya da elektrik devresi arızalanmış olabilir.
- **Kapak, kapak fitili ya da çevresindeki parçalar hasarlıysa:** LG fırının çalıştırılmamasını ve kapak, fitil, emniyet kilidi gibi parçaların kurcalanmamasını istiyor; onarımı yalnız yetkili servis teknisyenleri yapmalı.

⛔ **Kendin-çöz sınırı burada biter.** Fiş, priz, kapak temizliği, tepsi ve çocuk kilidi kullanıcıya; emniyet kilitleri, lamba ve fırının içi servise aittir. Mikrodalganın kasası açılmaz.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (ürün etiketinde, ör. MJ3281BP)?
2. Ekran yanıyor mu, bir yazı ya da sembol var mı?
3. Su testinde su ısındı mı?
4. Fırın tek başına bir prizde mi?

Bu dördüne cevabın varsa servise "çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
