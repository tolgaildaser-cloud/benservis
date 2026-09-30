---
title: "Bosch buzdolabı buzlanma yapıyor: buz çözme"
description: "Bosch NoFrost dondurucu buzlandı, ayarlanan sıcaklığa ulaşamıyor mu? Bosch kılavuzundaki elle buz çözme sırası: boşalt, kapat, fişi çek, kapak açık, süngerle."
slug: "bosch-buzdolabi-buzlanma-yapiyor"
date: "2026-09-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgenin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-siemens-buzdolabi-sprint/bosch-8001233803_C.pdf · okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (K) Bosch "Soğutucu/Dondurucu kombine cihazı KGN76.." kullanım kılavuzu  https://media3.bosch-home.com/Documents/8001233803_C.pdf  36 s.  md5 d3c476746c93359c81b2153194c1adec
# Arıza tablosu (K s.27, "14 Arızaları giderme"):
#   "Ayarlanan sıcaklığa ulaşılamıyor. Tam otomatik buz çözme artık çalışmıyor." → "Derin dondurucu bölümü kapağı çok uzun süre açık kaldı. NoFrost sistemindeki evaporatör (soğutma jeneratörü) çok fazla buzlanmış.
#     Gereklilik: Dondurulmuş besinleri cihazdan dışarı çıkarınız ve serin, izole bir yerde muhafaza ediniz. 1. Cihazı kapatınız. 2. Cihazı elektrik şebekesinden ayırınız.
#     Elektrik kablosunun elektrik fişini çekiniz veya sigorta kutusundaki sigorayı kapatınız. 3. Cihazı duvardan uzaklaştırınız. 4. Cihaz kapağını açık bırakınız.
#     a Yaklaşık 20 dakika sonra, eriyen su cihazın arka yüzündeki buharlaşma kabının içine akmaya başlar. 5. Buharlaşma kabının taşmasını önlemek için, eriyen suyu bir sünger ile emdirerek kabın boşalmasını sağlayınız.
#     Buharlaşma kabına artık buz suyu eriyip akmayınca, evaporatörün buzu çözülmüş demektir. 6. Cihazın içini temizleyiniz. 7. Cihazı tekrar açınız."
# Diğer: K s.22 "Cihazınızın soğutucu bölmesinin buzu otomatik olarak çözülür." / "Tam otomatik NoFrost sistemi sayesinde, derin dondurucu bölümünde buz oluşmaz. Buz çözme işlemine gerek yoktur."
#   · K s.22 temizlik: "temizleme bezi, ılık su ve bir miktar pH derecesi nötr olan bir deterjanla temizlenmelidir." / "Yumuşak, kuru bir bezle iyice kurulanmalıdır." / buharlı ya da yüksek basınçlı temizleyici yok / yıkama suyu aydınlatma, kumanda elemanları, havalandırma deliklerine girmemeli / sert ovma süngeri yok
#   · K s.22 "Eğer varsa, yiyeceklerin üzerine soğutma kapları koyulmalıdır." · K s.10 DİKKAT: "Cihaz tekerleklerinin kenarları, cihazı itme sırasında zemine hasar verebilir." / "Cihazı itme sırasında zemin koruması kullanınız ve zikzaklı biçimde hareket ettirmeyiniz."
#   · K s.10 "Cihaz sadece kısa bir süre açılmalı ve dikkatlice kapatılmalıdır." · K s.28 "Cihaz kapağının her zaman doğru şekilde kapatılmış olmasına dikkat ediniz."
#   · K s.16 açma / K s.17 kapatma (3 saniye basılı) · K s.17 "ayarlanan sıcaklığa ancak birkaç saat sonra ulaşılır. Ayarlanan sıcaklığa ulaşılmadan önce yiyecekler yerleştirilmemelidir."
#   · K s.19 "Buzu çözülmeye başlamış veya çözülmüş yiyecekler tekrar dondurulmamalıdır." / "Ancak pişirildikten veya kızartıldıktan sonra yeniden dondurulmalıdır." · K s.25 onarım yalnız eğitimli uzman · K s.30-31 E-Nr./FD.
# BİLEREK YAZILMAYANLAR: buzu bıçak/kazıyıcı/sıcak su/saç kurutma makinesiyle sökmek (belgede yok; alet kuralı) · defrost rezistansı/sensör/tahliye kanalı teşhisi (belgede yok)
#   · buharlaşma kabının taşması hâlinde ne olacağı (belgede yok) · buz çözme süresi (belgede yalnız "yaklaşık 20 dakika sonra akmaya başlar" var) · süre/fiyat (#46).
# Alıntı denetim tablosu: bosch-buzdolabi-buzlanma-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika (buzun erime süresi hariç)"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Sünger", "Temizleme bezi", "Ilık su", "pH nötr deterjan", "Serin bir yer ya da soğutma kapları"]
steps:
  - "Dondurulmuş yiyecekleri çıkar ve serin, izole bir yerde sakla."
  - "Cihazı kapatma tuşunu 3 saniye basılı tutarak kapat."
  - "Fişi prizden çek ya da sigorta kutusundaki sigortayı kapat."
  - "Cihazı zemini koruyarak, zikzak yapmadan duvardan uzaklaştır."
  - "Kapağı açık bırak; yaklaşık 20 dakika sonra eriyen su arkadaki buharlaşma kabına akmaya başlar."
  - "Kap taşmasın diye eriyen suyu süngerle emdir; kaba su akmayı kesince buz çözülmüş demektir."
  - "Cihazın içini ılık su ve pH nötr deterjanla sil, yumuşak kuru bir bezle kurula."
  - "Cihazı yerine it, fişi tak, yeniden aç ve yiyecekleri ayarlanan sıcaklığa ulaşınca yerleştir."
faq:
  - q: "Bosch NoFrost buzdolabı neden buz tutar?"
    a: "Bosch'un kullanım kılavuzuna göre NoFrost sistemi sayesinde derin dondurucu bölümünde normalde buz oluşmaz ve buz çözme gerekmez. Arıza tablosu ise bir istisna yazıyor: derin dondurucu bölümünün kapağı çok uzun süre açık kalırsa NoFrost sistemindeki evaporatör çok fazla buzlanır, ayarlanan sıcaklığa ulaşılamaz ve tam otomatik buz çözme artık çalışmaz."
  - q: "Buz çözme ne kadar sürer?"
    a: "Bosch süre vermiyor; bir işaret veriyor. Kılavuza göre kapak açık bırakıldıktan yaklaşık 20 dakika sonra eriyen su cihazın arka yüzündeki buharlaşma kabına akmaya başlar. Buharlaşma kabına artık buz suyu eriyip akmıyorsa evaporatörün buzu çözülmüş demektir."
  - q: "Buz çözerken çıkardığım yiyecekler biraz çözüldü, tekrar dondurabilir miyim?"
    a: "Bosch'un kılavuzu hayır diyor: buzu çözülmeye başlamış ya da çözülmüş yiyecekler tekrar dondurulmamalı. Ancak pişirildikten ya da kızartıldıktan sonra yeniden dondurulabilir ve bu durumda azami depolama süresinin tamamı kullanılmamalı. Yiyecekleri beklerken serin ve izole bir yerde tut; varsa üzerlerine soğutma kapları koy."
  - q: "Buzu bir aletle kazıyıp çabuk sökebilir miyim?"
    a: "Bosch'un buz çözme sırasında böyle bir adım yok. Kılavuzun yolu cihazı kapatıp fişi çekmek, kapağı açık bırakmak ve eriyen suyu süngerle almak. Kılavuz temizlikte bile sert ovma süngeri ve keskin temizlik malzemesi kullanılmamasını istiyor; buzu zorlamak yerine kendi kendine erimesini bekle."
images:
  coverAlt: "Kapağı açık bırakılmış, çekmeceleri çıkarılmış boş bir dondurucu bölmesi; önünde yerde katlanmış havlu ve sünger"
---

Bosch buzdolabının dondurucusu ayarladığın dereceye inmiyor ve içeride buz birikmiş. Oysa Bosch'un KGN76.. serisi kombi buzdolabı kullanım kılavuzu, NoFrost sistemi sayesinde **"derin dondurucu bölümünde buz oluşmaz"** diyor. Aynı kılavuzun arıza tablosu istisnayı da yazıyor: **"Ayarlanan sıcaklığa ulaşılamıyor. Tam otomatik buz çözme artık çalışmıyor."** Bosch'a göre nedeni, derin dondurucu kapağının **çok uzun süre açık kalması** ve NoFrost sistemindeki evaporatörün **çok fazla buzlanması.** Çözüm, Bosch'un verdiği sırayla elle buz çözmek.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yiyecekleri çıkar → cihazı kapat → fişi çek → duvardan uzaklaştır → kapağı açık bırak → arkadaki buharlaşma kabına akan suyu süngerle al → su kesilince içini temizle → yeniden aç, sıcaklığa ulaşınca yiyecekleri koy.

## Adım adım: evde denenecekler

**1. Yiyecekleri çıkar.** Bosch'un ön şartı: **dondurulmuş besinleri cihazdan çıkar ve serin, izole bir yerde sakla.** Kılavuzun temizlik bölümüne göre varsa yiyeceklerin üzerine **soğutma kapları** koy.

**2. Cihazı kapat.** Kılavuzun "Cihazın kapatılması" bölümüne göre kapatma tuşunu **3 saniye** basılı tut.

**3. Elektriği kes.** Cihazı elektrik şebekesinden ayır: **fişi prizden çek** ya da **sigorta kutusundaki sigortayı kapat.**

**4. Duvardan uzaklaştır.** Bosch'un sırası cihazı **duvardan uzaklaştırmanı** istiyor. Kılavuzun maddi hasar uyarısına dikkat et: cihaz tekerleklerinin kenarları itme sırasında zemine zarar verebilir; **zemin koruması kullan** ve cihazı **zikzak yaparak hareket ettirme.**

**5. Kapağı açık bırak.** Dondurucunun **kapağını açık bırak.** Bosch'a göre **yaklaşık 20 dakika sonra** eriyen su cihazın **arka yüzündeki buharlaşma kabına** akmaya başlar.

**6. Suyu süngerle al.** Buharlaşma kabı taşmasın diye eriyen suyu **bir süngerle emdirerek** kabı boşalt. Bosch'un işareti net: **buharlaşma kabına artık buz suyu eriyip akmıyorsa evaporatörün buzu çözülmüş demektir.** Buzu bıçak, kazıyıcı ya da başka bir aletle sökmeye çalışma; Bosch'un sırasında böyle bir adım yok.

**7. İçini temizle.** Bosch'un temizlik bölümüne göre cihazı, donanım parçalarını ve kapak contalarını **bir temizleme bezi, ılık su ve biraz pH derecesi nötr deterjanla** temizle, sonra **yumuşak, kuru bir bezle** iyice kurula. Buharlı ya da yüksek basınçlı temizleyici kullanma; yıkama suyu **aydınlatmaya, kumanda elemanlarına ve havalandırma deliklerine** girmesin. Genel temizlik sırası [buzdolabı nasıl temizlenir](/blog/buzdolabi-nasil-temizlenir/) yazısında.

**8. Yeniden çalıştır.** Cihazı yerine it, fişi tak ve cihazı aç; kumanda panelinden kapattıysan açma tuşunu **3 saniye** basılı tut. Bosch'a göre ayarlanan sıcaklığa **ancak birkaç saat sonra** ulaşılır; yiyecekleri ondan önce yerleştirme.

## Bir daha olmaması için

Bosch'un kılavuzu iki alışkanlık öneriyor: cihazı **yalnız kısa bir süre aç ve dikkatlice kapat,** ve **cihaz kapağının her zaman doğru şekilde kapatılmış olmasına dikkat et.** Kapak tam oturmuyorsa [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/) ve [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazılarına bak.

Soğutucu bölmesi için ayrıca bir iş yok: Bosch'a göre **soğutucu bölmesinin buzu otomatik olarak çözülür.**

Çıkardığın yiyecekler biraz çözüldüyse Bosch'un uyarısı açık: **buzu çözülmeye başlamış ya da çözülmüş yiyecekler tekrar dondurulmamalı;** ancak pişirildikten ya da kızartıldıktan sonra yeniden dondurulabilir.

## Ne zaman servis

Buz çözmeden sonra cihaz yine ayarlanan sıcaklığa inmiyorsa yetkili servise başvur. Bosch'un kılavuzu **cihazdaki onarımları yalnız bunun eğitimini almış uzman personelin yapabileceğini** yazıyor. Ararken cihazın **tip etiketindeki ürün numarasını (E-Nr.) ve imalat numarasını (FD)** hazır bulundur.

⛔ **Kendin-çöz sınırı burada biter.** Arka paneli ya da evaporatör kapağını açmak kullanıcının işi değil.

Markadan bağımsız buzlanma nedenleri için [buzdolabı buzlanma yapıyor](/blog/buzdolabi-buzlanma-yapiyor/) yazısına, buzdolabının altında su görüyorsan [buzdolabı altında su birikiyor](/blog/buzdolabi-altinda-su-birikiyor/) yazısına bakabilirsin. Soğutma sorununun diğer nedenleri [Bosch buzdolabı soğutmuyor](/blog/bosch-buzdolabi-sogutmuyor/) yazısında.

---

**Kaynak künyesi.** Adımlar Bosch'un "Soğutucu/Dondurucu kombine cihazı KGN76.." kullanım kılavuzunun "Arızaları giderme" tablosundan ve aynı kılavuzun buz çözme, temizlik ve kurulum bölümlerinden alınmıştır. Senin cihazın farklı bir seriyse **kendi kılavuzun esastır.**

Belirtiyi ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
