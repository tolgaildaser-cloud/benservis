---
title: "Siemens bulaşık makinesi su boşaltmıyor"
description: "Siemens bulaşık makinesi suyu boşaltmıyorsa Siemens'in sırası: filtre, atık su pompası, tahliye hortumu ve sifon; E:61-02 ve E:61-03 ne anlatıyor."
slug: "siemens-bulasik-makinesi-su-bosaltmiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Siemens'in kendi alan adlarından indirildi, HTTP 200.
# #88: web araması KULLANILMADI; belgeler siemens-home.bsh-group.com/tr menülerinden ve ürün sayfalarındaki kılavuz bağlantılarından bulundu.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-bulasik-sprint/ · PDF okuma pdftotext -layout, sayfa = PDF sayfası = basılı sayfa no; E:61 satırları pdftoppm görüntüsüyle teyit edildi.
#  (W1) Siemens TR "Bulaşık makinen suyu boşaltmıyor mu?"  https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/bulasik-makineniz-hakkinda/suyu-bosaltmiyor  gövde metni md5 51f295ad11b5dba0c482725f5e8dbb0c (HTML dinamik; iki indirmede gövde birebir aynı)
#  (W2) Siemens TR "Bulaşık makinesi su boşaltmıyor sorun giderme"  https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/sorun-giderme/bulasik-makinesi/bosaltmiyor  gövde md5 a04a06fe51c818e10fe0bd3ad344174f
#  (K1) SN23HW62MT kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001706611_H.pdf  52 s.  md5 168ec8d8b1f400c2cb09856890782627  (sayfa atıfları bu belgeye göre)
#  (K2) SN45EB01NT  https://media3.bsh-group.com/Documents/9002038247_A.pdf  52 s.  md5 02b0114f050e3292c565f1404f08be4c
#  (K3) SN25EI83CT  https://media3.bsh-group.com/Documents/9002038027_A.pdf  56 s.  md5 d4a5a736e405a027d5f2230f9a841418
#  (K4) SN63HX62MT  https://media3.bsh-group.com/Documents/9002017437_B.pdf  52 s.  md5 2379b88f4e313307fdeb303ce8eda0b5
# Kod satırları (K1 s.41-42; K2 s.43, K3 s.47, K4 s.41-42 birebir aynı):
#   "E:61-02 değişimli olarak yanıyor. | Cihaz hatası yok. Atık su pompası bloke olmuş veya atık su pompasının kapağı gevşek. 1. Atık su pompasını temizleyiniz. 2. Atık su pompasının kapağını doğru şekilde oturtunuz."
#   "E:61-03 değişimli olarak yanıyor. Su boşaltılmıyor. | Cihaz hatası yok. Sifon bağlantısı hala kapalı veya atık su hortumu bükülmüş veya tıkanmış. 1. Sifon bağlantısını kontrol ediniz ve gerekirse açınız. 2. Tahliye hortumunu bükülme olmadan döşeyiniz. 3. Artıkları temizleyiniz." + aynı satırda pompa bloke/kapak gevşek nedeni.
# Pompa yordamı: K1 s.45 "19.1 Atık su pompasının temizlenmesi" (adım 1-11) · W1 pompa adımları 1-8 · W2 pompa adımları 1-15. Süzgeç: K1 s.38-39 "18.4 Süzgeç sistemi".
# BİLEREK YAZILMAYANLAR: E24/E25 — indirilen Siemens belgelerinin hiçbirinde yok, E:61 kodlarıyla eşleme de yok → eşleme kurulmadı · W1'deki "hortumu makineden tamamen çıkarıp temizle / yenisiyle değiştir" (söküm/parça, #31) ·
#   W2'deki tornavidayla açılan pompa kapağı (#31, servise bırakıldı) · pompa motoru/kart teşhisi (belgede yok) · süre ve #46 kapsamındaki rakamlar.
# Alıntı denetim tablosu: siemens-bulasik-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Orta"
  time: "~25 dakika"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Sünger", "Çay kaşığı", "Koruyucu eldiven", "Küçük fırça"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Alt sepeti çıkar, tabandaki filtre ünitesini saat yönünün tersine çevirip dikkatlice dışarı al."
  - "Tabanda kalan suyu bir süngerle çekip dışarı al."
  - "Filtreleri birbirinden ayır ve akan su altında küçük bir fırçayla temizle."
  - "Eldiven tak, pompa kapağını bir çay kaşığıyla kaldır, çıkıntısından tutup yukarı kaldır ve öne doğru çıkar."
  - "Pompadaki yemek artıklarını ve yabancı cisimleri dikkatle al, kapağı yerine bastırarak klik sesiyle oturt."
  - "Filtreyi ok işaretleri karşı karşıya gelecek şekilde takıp kilitle, sepetleri yerleştir."
  - "Tahliye hortumundaki bükülme ya da katlanmaları düzelt ve sifon bağlantısının açık olduğunu kontrol et."
faq:
  - q: "Siemens bulaşık makinesi suyu neden boşaltmaz?"
    a: "Siemens'in destek sayfasına göre en olası sebep filtre ya da pompanın tıkanmasıdır: cam parçacıkları, yiyecek veya kir gibi yabancı nesneler filtreyi ve pompayı tıkayabilir. İkinci sebep tahliye (gider) hortumunun bükülmüş ya da katlanmış olmasıdır. Kılavuzdaki E:61-03 satırı buna bir üçüncüsünü ekler: sifon bağlantısı hâlâ kapalı olabilir."
  - q: "E:61-02 ve E:61-03 arasındaki fark ne?"
    a: "İkisinde de Siemens kılavuzu 'Cihaz hatası yok' diye başlar. E:61-02, atık su pompasının bloke olduğunu ya da pompa kapağının gevşek olduğunu söyler; çözüm pompayı temizleyip kapağı doğru oturtmaktır. E:61-03 'Su boşaltılmıyor' durumudur: sifon bağlantısı kapalı olabilir, atık su hortumu bükülmüş ya da tıkanmış olabilir; aynı satırda pompanın bloke olması da sebep olarak sayılır."
  - q: "Pompa kapağını açmak güvenli mi?"
    a: "Siemens bu işi kullanıcıya veriyor ama iki uyarıyla: önce cihazı elektrik şebekesinden ayır, sonra cam kırıkları gibi keskin cisimler pompayı tıkayabileceği için eldiven giy ve yabancı cisimleri dikkatle çıkar. Kapak bir çay kaşığıyla kaldırılır. Bazı modellerde pompa kapağı tornavidayla sökülüyor; o durumda kendin uğraşmak yerine yetkili servisi çağırman daha doğru olur."
  - q: "Her şeyi temizledim ama su hâlâ kalıyor, ne yapmalıyım?"
    a: "Siemens'in son önerisi sıfırlama: modeline göre Reset yazan tuşa 3 ya da 4 saniye basılı tut; ekranlı modellerde 0:00 görünene kadar, ekransızlarda ECO ışığı yanana kadar bekle. Sorun sürerse cihazı kapat, fişini çekip en az 2 dakika bekle, sonra fişi takıp aç. Buna rağmen devam ediyorsa Siemens 444 66 88 numaralı çağrı merkezini aramayı öneriyor."
images:
  coverAlt: "Kapağı açık bulaşık makinesinin tabanında birikmiş su, yanında çıkarılmış filtre ünitesi ve bir sünger"
---

Program bitti, kapağı açtın ve tabanda kirli su duruyor. Belki ekranda **E:61-02** ya da **E:61-03** değişimli olarak yanıyor. Siemens'in kullanım kılavuzu bu iki kod için aynı cümleyle başlıyor: **"Cihaz hatası yok."** Yani makine bozuldu demiyor; suyun gideceği yolda bir tıkanıklık var diyor. Siemens'in kendi destek sayfasındaki sıra da net: **önce filtre ve pompa, sonra tahliye hortumu, en sonda sıfırlama.** Bu yazıda o sırayı Siemens'in kılavuzundaki adımlarla birlikte anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek → filtreyi çıkar, suyu süngerle al → filtreyi akan suda temizle → eldivenle pompa kapağını kaşıkla kaldır, pompadaki cismi al → kapağı klik sesiyle oturt, filtreyi oklar karşı karşıya gelecek şekilde tak → tahliye hortumunu ve sifonu kontrol et. Hâlâ boşaltmıyorsa Siemens'in sıfırlama yöntemi, o da yetmezse yetkili servis.

## Ekrandaki kod ne diyor?

Siemens Türkiye sitesinde satışta olan modellerin kılavuzlarında (SN23HW62MT, SN45EB01NT, SN25EI83CT, SN63HX62MT) su boşaltma tarafında iki kod var:

| Kod | Siemens kılavuzundaki karşılığı | Siemens'in çözümü |
|---|---|---|
| E:61-02 | "Atık su pompası bloke olmuş veya atık su pompasının kapağı gevşek." | Pompayı temizle, kapağı doğru oturt |
| E:61-03 | "Su boşaltılmıyor." Sifon bağlantısı hâlâ kapalı ya da atık su hortumu bükülmüş veya tıkanmış; pompa da bloke olmuş olabilir | Sifonu kontrol et, hortumu bükülmeden döşe, artıkları temizle; gerekirse pompayı temizle |

Ekranında bu kodlardan farklı bir kod görüyorsan anlamı için [Siemens bulaşık makinesi hata kodları](/blog/siemens-bulasik-makinesi-hata-kodlari/) yazısına bak; kesin karşılık her zaman cihazının kendi kılavuzundadır.

## Adım adım: evde denenecekler

**1. Fişi çek.** Siemens'in pompa yordamı bununla başlıyor: makineyi kapat ve **cihazı elektrik şebekesinden ayır.** Bu adımı atlama; birazdan elini makinenin tabanına sokacaksın.

**2. Filtre ünitesini çıkar.** Alt sepeti çıkar; Siemens filtreye daha rahat ulaşmak için **alt sprey kolunu** da çıkarmayı öneriyor. Tabandaki filtre ünitesinin kilidini aç: kılavuza göre kaba süzgeç **saat yönünün tersine** çevrilir ve süzgeç sistemi dışarı alınır. Bu sırada **pompa haznesine yabancı cisim düşürmemeye** dikkat et.

**3. Suyu süngerle al.** Pompa tıkalıyken tabanda su kalır. Siemens'in önerisi: **yumuşak bir süngerle** suyu çek ve cihazın dışına çıkar.

**4. Filtreleri temizle.** Silindir şeklindeki filtreyi çevirerek parçalarına ayır ve **akan su altında** temizle. İçteki küçük kalıntılar için **küçük bir fırça** kullanabilirsin. Siemens'in uyarısı: filtreye zarar verebilecek **sert ya da aşındırıcı ürün kullanma.** Kılavuz kaba süzgeçle ince süzgeç arasındaki kirli kenarın da titizlikle temizlenmesini istiyor.

**5. Pompa kapağını kaldır.** Siemens bu noktada **koruyucu eldiven** giymeni istiyor: cam parçaları pompayı tıkayabilir. Bir **çay kaşığını** kaldıraç gibi kullanarak pompa kapağını kaldır. Kapağı **çıkıntısından** kavra, gidebildiği yere kadar yukarı kaldır ve ardından **öne doğru** çıkar. Artık kanatlı çarka elinle ulaşabilirsin.

**6. Pompayı temizle ve kapağı oturt.** Kanatlı çarkın çevresindeki yemek artıklarını ve yabancı cisimleri **dikkatlice** al. Kılavuzun uyarısı açık: cam kırıkları gibi **keskin ve sivri cisimler** yaralanmaya neden olabilir. Sonra kapağı yerleştir ve **aşağı bastır**; kapak **duyulur şekilde** (klik sesiyle) yerine oturur. E:61-02'nin ikinci sebebi zaten gevşek kapak; bu yüzden kapağın tam oturduğundan emin ol.

**7. Filtreyi tak, sepetleri yerleştir.** Süzgeç parçalarını birleştir; kaba süzgeçteki kilit tırnaklarının yerine oturmasına dikkat et. Süzgeç sistemini yerleştir, kaba süzgeci **saat yönünde** çevir ve **ok işaretlerinin karşı karşıya** gelmesine dikkat et. Sprey kolunu ve sepetleri yerine tak.

**8. Tahliye hortumunu ve sifonu kontrol et.** Siemens'e göre gider hortumu bükülmüş ya da katlanmışsa su akışı engellenir; bu kısımları düzleştir. Hortumda **sıcak su kalmış olabilir**, bu işi dikkatlice yap. E:61-03 satırı bir şeye daha bakmanı istiyor: **sifon bağlantısı hâlâ kapalı mı?** Siemens'in talimatı: sifon bağlantısını **kontrol et ve gerekirse aç.**

Taban filtresinin temizliğini marka bağımsız olarak ayrıca [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında anlattık.

## Deneme ve sıfırlama

Her şeyi yerine taktıktan sonra fişi tak ve Siemens'in önerdiği gibi makineyi **en kısa programda boş** çalıştır; suyu atıp atmadığını izle.

Su hâlâ kalıyorsa Siemens'in bir sonraki önerisi **sıfırlama:** modeline göre **"Reset"** yazan tuşa **3 ya da 4 saniye** basılı tut. Kaç saniye gerektiği Start tuşunun altındaki reset ibaresinde yazar.

- **Ekranlı modellerde** göstergede 0:01 görünür; bu bir dakikada makine devam eden programı sonlandırır. Göstergede **0:00** görünene kadar bekle.
- **Ekransız modellerde** **ECO** ışığı yanana kadar yaklaşık bir dakika bekle.

Sıfırlamaya rağmen sorun sürerse cihazı kapat, **fişini çekip en az 2 dakika** bekle, sonra fişi takıp cihazı aç.

## Ne zaman servis

Filtre ve pompa temiz, pompa kapağı klik sesiyle oturmuş, hortum düz, sifon açık, sıfırlama da yapılmış ve makine hâlâ suyu boşaltmıyorsa Siemens'in kullanıcıya verdiği adımlar bitmiş demektir. Siemens bu noktada **444 66 88** numaralı çağrı merkezini aramayı ya da online servis kaydı oluşturmayı öneriyor.

Bir sınır daha: Siemens'in destek sayfasına göre bazı modellerde pompa kapağı **tornavidayla** sökülüyor. Kapağın kaşıkla kalkmıyorsa zorlama; bu işi servise bırak. Kılavuzun genel uyarısı da aynı yönde: usulüne uygun olmayan onarımlar tehlikelidir, cihazda onarımı yalnız eğitimini almış uzman personel yapar.

⛔ **Kendin-çöz sınırı:** filtre, pompa kapağının altındaki hazne, tahliye hortumu ve sifon kullanıcıya; tabanın altı ve makinenin içi servise aittir.

Suyu boşaltmama sorununu markadan bağımsız ele aldığımız [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) yazısı da işine yarayabilir. Makine su **almıyorsa** konu farklı: [Siemens bulaşık makinesi su almıyor](/blog/siemens-bulasik-makinesi-su-almiyor/) yazısına geç.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
