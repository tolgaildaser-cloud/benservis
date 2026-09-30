---
title: "Profilo bulaşık makinesi su boşaltmıyor"
description: "Profilo bulaşık makinesi su boşaltmıyorsa Profilo'nun sırası: program bitti mi, süzgeçler, tahliye hortumu, sifon bağlantısı ve servis sınırı."
slug: "profilo-bulasik-makinesi-su-bosaltmiyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200.
# Belge adresleri Profilo'nun kendi ürün sayfalarından (www.profilo.com/tr/tr/product/beyaz-esya/bulasik-makineleri/...) alındı; titleKey "user-manuals". #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Bosch/Siemens'in yayındaki belirti sayfaları açılmadı, metin Profilo belgesinden yeniden yazıldı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-profilo-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (C) Profilo BM6380MA kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001951966_E.pdf  52 s.  md5 2e7b3ee8867b8a5fe2e9a021a73228f8
#  (D) Profilo BMS623V5 kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002038110_A.pdf  52 s.  md5 024c3cd56f8521f96d6f5af2b6d9aa38
# Arıza tablosu (C s.46): "Program sona erdikten sonra cihazın içinde su kalıyor." → "Süzgeç sistemi veya süzgeçlerin alt bölümü tıkanmış." → "1. Süzgeçleri temizleyiniz. 2. Atık su pompasını temizleyiniz."
#   · "Program henüz sona ermedi." → "Programın sona ermesini bekleyiniz veya programı Reset ile iptal ediniz."
# Kod satırları: C s.38 "E:24 yanıyor. Su boşaltılmıyor." = D s.41 "E:61-03 değişimli olarak yanıyor. Su boşaltılmıyor." → "Cihaz hatası yok. Sifon bağlantısı hala kapalı veya atık su hortumu bükülmüş veya tıkanmış."
#     "1. Sifon bağlantısını kontrol ediniz ve gerekirse açınız. 2. Tahliye hortumunu bükülme olmadan döşeyiniz. 3. Artıkları temizleyiniz." + pompa bloke/kapak gevşek → pompa temizliği
#   · C s.39 E:25 = D s.41 E:61-02 → "Cihaz hatası yok. Atık su pompası bloke olmuş veya atık su pompasının kapağı gevşek." · C s.38 E:22 = D s.41 E:92-40 → "Süzgeçler pislenmiş veya tıkanmış."
# Bakım: C s.35-36 süzgeç sistemi (kaba süzgeç saat yönünün tersine; "Pompa kabına yabancı cisimlerin düşmemesine dikkat ediniz."; mikro süzgeç aşağı; kilit tırnakları; musluk suyu; ok işaretleri karşı karşıya)
#   · C s.48 / D s.44-45 atık su pompası: "1. Cihazı elektrik şebekesinden ayırın. 2. Üst ve alt bulaşık sepetini çıkartınız. 3. Süzgeç sistemini çıkartınız. 4. Mevcut suyu boşaltınız. Gerekirse bir sünger kullanınız.
#     5. Pompa kapağını bir kaşık yardımıyla kaldırınız" → ALET KURALI: 5. adım ve sonrası numaralı adıma girmez, gövdede servise yönlendirilir. Uyarı: "Cam kırıkları gibi keskin ve sivri cisimler, atık su pompasını bloke edebilir ve yaralanmalara neden olabilir."
#   · C s.32 programın iptali: "... tuşuna yakl. 3 saniye basınız. Program iptal edilir ve yakl. 1 dakika sonra tamamlanır." · C s.32 'Ekranda "0:00" gösterildiğinde program sona ermiştir.'
#   · C s.15 "Start tuşu ve Reset tuşu" · C s.37 uzman personel uyarısı · C s.50 E-Nr./FD, tip plaketi cihaz kapağının iç tarafında.
# BİLEREK YAZILMAYANLAR: pompa motoru/kart teşhisi (belgede yok) · pompa kapağını kaşıkla açma adımları (alet) · tahliye hortumunu sökme, tezgâh altı sifonu sökme (belgede yok, yalnız "kontrol ediniz ve gerekirse açınız").
# Alıntı denetim tablosu: profilo-bulasik-makinesi-su-bosaltmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Sünger", "Küçük bir kap"]
steps:
  - "Programın bitip bitmediğine bak; ekranda 0:00 yoksa sonunu bekle ya da Reset tuşuna yaklaşık 3 saniye basarak programı iptal et."
  - "Makineyi kapat ve fişini prizden çek."
  - "Alt sepeti çıkar, kaba süzgeci saat yönünün tersine çevirip süzgeç sistemini dışarı al."
  - "Tabanda kalan suyu bir süngerle kaba al."
  - "Süzgeç parçalarını musluk suyu altında temizle, kaba ve ince süzgeç arasındaki kenara özellikle bak."
  - "Süzgeç sistemini yerine koyup kaba süzgeci saat yönünde çevir; ok işaretleri karşı karşıya gelsin."
  - "Tahliye hortumunun görebildiğin kısmında bükülme olmadığını kontrol et."
  - "Hortumun bağlandığı sifon bağlantısının açık olduğunu kontrol et."
faq:
  - q: "Profilo bulaşık makinesinin dibinde su kalıyor, arıza mı?"
    a: "Önce Profilo'nun listesine bak. BM6380MA kullanım kılavuzundaki arıza tablosu 'Program sona erdikten sonra cihazın içinde su kalıyor' satırında iki neden sayıyor: süzgeç sistemi ya da süzgeçlerin alt bölümü tıkanmış olabilir veya program henüz bitmemiş olabilir. Çözümler süzgeçleri temizlemek, gerekirse atık su pompasını temizlemek ve programın bitmesini beklemek ya da programı Reset ile iptal etmek."
  - q: "Ekranda E:24 ya da E:61-03 yazıyor, ne demek?"
    a: "Profilo'nun iki kılavuzunda aynı satır iki farklı kodla geçiyor: BM6380MA'da E:24, BMS623V5'te E:61-03; ikisi de 'Su boşaltılmıyor' anlamında. Profilo bu satır için 'Cihaz hatası yok' diyor ve nedenleri sayıyor: sifon bağlantısı hâlâ kapalı, atık su hortumu bükülmüş ya da tıkanmış veya atık su pompası bloke olmuş ya da kapağı gevşek. Çözümler sifon bağlantısını kontrol edip gerekirse açmak, hortumu bükülmeden döşemek, artıkları temizlemek ve pompayı temizleyip kapağını doğru oturtmak."
  - q: "Atık su pompasını kendim temizleyebilir miyim?"
    a: "Profilo'nun kılavuzunda pompa temizliği anlatılıyor ama pompa kapağı bir kaşık yardımıyla kaldırılıyor ve Profilo cam kırıkları gibi keskin, sivri cisimlerin pompayı bloke edip yaralanmaya yol açabileceği uyarısını yapıyor. Süzgeç, hortum ve sifon kontrolünden sonra su hâlâ kalıyorsa pompa işini kılavuzundaki 'Atık su pompasının temizlenmesi' bölümüne göre yetkili servise bırakmak daha güvenli."
  - q: "Süzgeçleri ne sıklıkla kontrol etmeliyim?"
    a: "Profilo'nun kılavuzu süzgeçlerdeki artıkların her yıkama işleminden sonra kontrol edilmesini öneriyor; yıkama suyundaki kirlilikler süzgeçlerin tıkanmasına neden olabilir. Arıza tablosunda da süzgeçlerin pislenmesi ya da tıkanması ayrı bir kodla geçiyor: BM6380MA'da E:22, BMS623V5'te E:92-40. İki kodda da Profilo'nun çözümü süzgeçleri temizlemek."
images:
  coverAlt: "Alt sepeti çıkarılmış bulaşık makinesinin tabanında birikmiş su ve süzgeç yuvası, yanında sünger ve küçük bir kap"
---

Program bitti, kapağı açtın ve makinenin dibinde su duruyor. Profilo'nun bulaşık makinesi kullanım kılavuzundaki arıza tablosunda bu durum için ayrı bir satır var: **"Program sona erdikten sonra cihazın içinde su kalıyor."** Ekranda su boşaltmayla ilgili kod görüyorsan Profilo'nun aynı tablosu onun için de **"Cihaz hatası yok"** diyerek kullanıcıya dönük nedenler sayıyor: **süzgeçler, tahliye hortumu, sifon bağlantısı ve atık su pompası.** Bu yazıda Profilo'nun sırasını açıyoruz. Kaynak, Profilo'nun BM6380MA ve BMS623V5 modelleri için yayımladığı kullanım kılavuzları.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Program bitti mi bak, gerekirse Reset ile iptal et → fişi çek → süzgeç sistemini çıkar, tabandaki suyu süngerle al → süzgeçleri temizle ve ok işaretleriyle geri tak → tahliye hortumu bükülmüş mü → sifon bağlantısı açık mı. Pompa kapağı alet ister; o iş servise.

## Adım adım: evde denenecekler

**1. Programın bitip bitmediğine bak.** Profilo'nun tablosundaki nedenlerden biri: **program henüz sona ermedi.** Profilo'ya göre ekranda **"0:00"** göründüğünde program bitmiştir. Bitmediyse sonunu bekle ya da programı **Reset** ile iptal et: BM6380MA kılavuzuna göre ilgili tuşa **yaklaşık 3 saniye** basılır, program iptal edilir ve **yaklaşık 1 dakika** sonra tamamlanır.

**2. Makineyi kapat ve fişini çek.** Süzgeçlere dokunmadan önce makineyi kapat ve fişini prizden çek. Profilo'nun tabandaki atık su pompasıyla ilgili tarifi de işe **cihazı elektrik şebekesinden ayırarak** başlıyor.

**3. Süzgeç sistemini çıkar.** Tablodaki ilk neden: **süzgeç sistemi veya süzgeçlerin alt bölümü tıkanmış.** Alt sepeti dışarı al. Profilo'nun tarifine göre **kaba süzgeci saat yönünün tersine** çevir ve süzgeç sistemini çıkar; bu sırada **pompa kabına yabancı cisim düşmemesine** dikkat et.

**4. Tabandaki suyu al.** Tabanda su birikmişse Profilo'nun tarifi: **mevcut suyu boşalt, gerekirse bir sünger kullan.** Süngerde topladığın suyu bir kaba sıkarak devam et.

**5. Süzgeçleri temizle.** Mikro süzgeci aşağı çekerek ayır, kilit tırnaklarını birbirine bastırıp kaba süzgeci yukarı doğru çıkar. Parçaları **musluk suyunun altında** temizle; Profilo özellikle **kaba süzgeç ile ince süzgeç arasındaki kirli kenarın** özenle temizlenmesini istiyor. Profilo'ya göre yıkama suyundaki kirlilikler süzgeçleri tıkayabilir; süzgeçlerdeki artıkları **her yıkamadan sonra** kontrol et.

**6. Süzgeçleri doğru tak.** Parçaları birleştir; kaba süzgeçte **kilit tırnaklarının yerine oturmasına** dikkat et. Süzgeç sistemini yerine koy ve kaba süzgeci **saat yönünde** çevir; **ok işaretleri karşı karşıya** durmalı. Sonra sepeti yerine koy.

**7. Tahliye hortumuna bak.** Profilo'nun su boşaltma koduyla ilgili satırında sayılan neden: **atık su hortumu bükülmüş veya tıkanmış.** Profilo'nun çözümü **tahliye hortumunu bükülme olmadan döşemek.** Hortumun görebildiğin kısmında katlanma ya da ezilme varsa düzelt.

**8. Sifon bağlantısını kontrol et.** Aynı satırdaki diğer neden: **sifon bağlantısı hâlâ kapalı.** Profilo'nun çözümü sifon bağlantısını **kontrol etmek ve gerekirse açmak.**

Adımlardan sonra fişi tak ve makineyi yeniden çalıştır.

## Su hâlâ duruyorsa: atık su pompası

Profilo'nun tablosunda son neden: **atık su pompası bloke olmuş veya pompanın kapağı gevşek.** Profilo'ya göre yemek artıkları ya da yabancı cisimler pompayı bloke edebilir. Pompa temizliği kılavuzda anlatılıyor, ancak pompa kapağı **bir kaşık yardımıyla** kaldırılıyor ve Profilo'nun uyarısı açık: **cam kırıkları gibi keskin ve sivri cisimler** pompayı bloke edebilir ve **yaralanmalara** neden olabilir. Bu adımı kılavuzundaki "Atık su pompasının temizlenmesi" bölümüne göre yetkili servise bırak.

Profilo'nun iki kılavuzunda su boşaltma kodları farklı yazılıyor: BM6380MA'da **E:24** (su boşaltılmıyor), **E:25** (pompa bloke ya da kapağı gevşek) ve **E:22** (süzgeçler tıkalı); BMS623V5'te aynı satırlar **E:61-03, E:61-02** ve **E:92-40** olarak geçiyor. Hangi kodun senin modeline ait olduğunu kılavuzundaki arıza tablosundan kontrol et.

Markadan bağımsız anlatım için [bulaşık makinesi su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) ve [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazılarına bakabilirsin. Su boşalıyor ama bulaşıklar kirli çıkıyorsa kardeş rehberimiz [Profilo bulaşık makinesi temiz yıkamıyor](/blog/profilo-bulasik-makinesi-temiz-yikamiyor/) yazısına geç.

## Ne zaman servis

Süzgeçler temiz ve doğru takılı, hortum düz, sifon bağlantısı açık ve makine hâlâ su bırakıyorsa ya da ekrandaki kod sürüyorsa müşteri hizmetlerine başvur. Profilo'nun uyarısı açık: **cihazda onarımları sadece bunun eğitimini almış uzman personel yapabilir.** Ararken cihaz kapağının iç tarafındaki tip etiketinde yazan **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Süzgeç, hortum ve sifon bağlantısı kullanıcıya; pompa ve makinenin içi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Su program bittikten sonra mı kalıyor, yoksa program ortasında mı durdu?
2. Ekranda bir kod var mı, hangisi?
3. Süzgeçler temizlendi mi, ok işaretleri karşı karşıya mı?
4. Tahliye hortumu düz mü, sifon bağlantısı açık mı?
5. Hangi modeli kullanıyorsun (tip etiketindeki E-Nr.)?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
