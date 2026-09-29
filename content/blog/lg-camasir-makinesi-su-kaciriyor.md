---
title: "LG çamaşır makinesi su kaçırıyor"
description: "LG çamaşır makinesi su kaçırıyorsa LG kılavuzundaki sebepler: gider, tahliye hortumu, filtre başlığı, kapak contası. Evde kontroller."
slug: "lg-camasir-makinesi-su-kaciriyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, 29 Eyl belirti damarı). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; PDF md5'leri 28 Eyl yerel kopyalarıyla birebir.
# #88: web araması YALNIZ belgelerin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. ABD LG kaynağı kullanılmadı; hepsi LG Türkiye.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası.
#  A) F4V5RGP2T  https://gscs-b2c.lge.com/open/downloadFile?fileId=4I58FRKMi1azDU3hn7biVA  64 s.  md5 2281c4e9b4f42dcd592ca465a4b4c739
#  B) F4V3VYW3WE https://gscs-b2c.lge.com/open/downloadFile?fileId=pqJSRXB81vGb2j8P1sCdw   52 s.  md5 44b310a6ac8afe1233209f80eb36a1d6
#  C) F4Y5EYW0W  https://gscs-b2c.lge.com/open/downloadFile?fileId=TcN1xkXozY5XAzZdSvX4iA  52 s.  md5 7ad1561ab6f94d5b669a90483ea1e18a  (sayfa atıfları esas olarak C)
#  H4) LG TR yardım kütüphanesi 20153390174982 "[LG Çamaşır Makinesi] Kapakta su sızıntısı var"
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153390174982/  md5 677cef8656f27cd2978cd8b6a6b7242f (dinamik HTML; bu koşudaki indirme)
# "Su sızıntısı var." satırı (C s.47 · A s.54 · B s.45), üç belgede aynı:
#   "Evin gider boruları tıkanmıştır. • Atık su borularını açın. Gerekirse su tesisatçısına başvurun. · Tahliye hortumunun yanlış kurulumu veya tıkanmış tahliye hortumundan kaynaklanır.
#    • Tahliye hortumunu temizleyin ve düzeltin. Tahliye filtresini düzenli şekilde kontrol edin ve temizleyin. · Tahliye pompası filtre başlığı doğru oturmuyor. • Tahliye pompası filtresini yeniden takın."
#   AE satırı (C s.45 · A s.53): "AE SU SIZINTISI | Su sızıntısı var • Servisi arayın."
# Güvenlik (C s.8 · A s.6 · B s.6): "Cihazdan veya zeminden su sızıntısı olması halinde, elektrik prizinin bağlantısını kesin ve LG Electronics müşteri bilgilendirme merkezi ile irtibat kurun."
#   · "Kırılma veya kopma olması halinde ... su musluklarını kapatın. Dolum hortumlarının durumunu kontrol edin; 5 yıl sonra değiştirilmelidir."
#   · "Hava sıcaklığı yüksek olduğunda ve su sıcaklığı düşük olduğunda yoğunlaşma oluşabilir ve bu yüzden zemin ıslanır." · C s.6 yeni hortum seti; eski hortum sızıntıya yol açabilir.
# Kurulum: C s.18 iki lastik conta sızıntıyı önler; bağlantıyı yalnız yumuşak bir bez yardımıyla elle sıkıştır, pense gibi mekanik cihaz kullanma
#   · C s.19 "Bağladıktan sonra, hortumdan su sızıyorsa aynı adımları tekrarlayın." · hortum kıvrılmamış/sıkışmamış · tahliye hortumu yerden en fazla 100 cm; lavabodaysa ip ile sabitle;
#   "Tahliye hortumunu doğru şekilde bağlamak zeminin su kaçağı nedeniyle hasarlanmasına karşı korur."
# Filtre başlığı: C s.42-43 (fişi çek; su soğusun; kapak başlığını aç; tahliye borusundan tapayı çıkar, suyu boşalt; filtreyi sök; fırçala; dikkatle geri tak,
#   "diş sardırmayı ve sızdırmayı önlemek için tahliye başlığını saat yönünde dikkatle vidalayın"; tapayı tak; kapak başlığını kapat; su sıcak olabilir).
# H4: kapaktan sızıntı → kapı ile conta arasında saç gibi yabancı cisim; contayı ve kapı camının kenarını yumuşak bezle sil; conta yırtıksa LG servisi; yıkamadan sonra kapaktaki damlacıklar normal.
# BİLEREK YAZILMAYANLAR: pompa/kazan/iç hortum arızası teşhisi (belgede yok) · dolum hortumunun kullanıcı tarafından değiştirilmesi (parça değişimi, #31 — "servis" dendi)
#   · aşırı köpüğün sızıntı yaptığı iddiası (bu koşuda indirilen belgelerde sızıntı satırında yok) · giriş filtresinin pense ile çıkarılması (#31) · fiyat.
# Alıntı denetim tablosu: lg-camasir-makinesi-su-kaciriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Sığ bir kap", "Küçük bir fırça"]
steps:
  - "Makinenin fişini çek ve su musluğunu kapat."
  - "Kapak ile conta arasında saç ya da yabancı cisim var mı bak; contayı ve kapı camının kenarını yumuşak bir bezle sil."
  - "Tahliye hortumunun doğru kurulduğunu, kıvrılmadığını ve tıkalı olmadığını kontrol et; gerekiyorsa temizle ve düzelt."
  - "Evin gider borusu tıkalıysa açtır; gerekirse bir su tesisatçısına başvur."
  - "Su soğuduktan sonra ön yüzdeki kapak başlığını aç ve tahliye pompası filtresinin yerine tam oturduğunu kontrol et."
  - "Filtre başlığı oturmuyorsa filtreyi temizleyip dikkatle yeniden tak ve saat yönünde vidala."
  - "Su giriş hortumunun lastik contalarını kontrol et; bağlantıyı yumuşak bir bezle yalnız elle sık."
  - "Musluğu aç ve bağlantılara bak; sızıntı sürüyor ya da ekranda AE görünüyorsa fişi çekili tut ve yetkili LG servisine başvur."
faq:
  - q: "LG çamaşır makinesi neden su kaçırır?"
    a: "LG'nin Türkçe kullanım kılavuzlarındaki 'Su sızıntısı var' satırı üç sebep sayıyor: evin gider boruları tıkanmış, tahliye hortumu yanlış kurulmuş ya da tıkanmış, veya tahliye pompası filtre başlığı doğru oturmuyor. LG Türkiye'nin destek sayfası kapağın altından gelen su için bir sebep daha veriyor: kapak ile conta arasına saç gibi yabancı cisimler girmiş olabilir."
  - q: "Ekranda AE yazıyor, ne yapmalıyım?"
    a: "LG'nin hata tablosunda AE su sızıntısı demek ve çözüm olarak yalnızca servisi aramak veriliyor. LG'nin güvenlik bölümüne göre cihazdan ya da zeminden su sızıntısı olduğunda elektrik prizinin bağlantısını kes ve LG müşteri bilgilendirme merkeziyle irtibat kur."
  - q: "Yıkamadan sonra kapakta su damlaları var, bu kaçak mı?"
    a: "LG Türkiye'nin destek sayfasına göre yıkama döngülerinden sonra kapaktaki su damlacıkları, sıkmadan sonra kalan kalıntı su olduğu için normaldir. Kılavuza göre hava sıcaklığı yüksek, su sıcaklığı düşük olduğunda yoğunlaşma oluşup zemin ıslanabilir."
  - q: "Su giriş hortumunu ne zaman değiştirmek gerekir?"
    a: "LG, dolum hortumlarının durumunun kontrol edilmesini ve 5 yıl sonra değiştirilmesini yazıyor; cihazla gelen yeni hortum setinin kullanılmasını, eski hortumların tekrar kullanılmasının su sızıntısına yol açabileceğini belirtiyor. Hortum kırılır ya da koparsa basıncı düşürmek için su musluklarını kapat."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin önünde fayans zeminde küçük bir su birikintisi; makinenin sağ alt köşesindeki servis kapağı kapalı"
---

Çamaşır makinesinin önünde ya da altında su birikmiş. LG'nin Türkçe kullanım kılavuzlarındaki sorun giderme tablosunda bu durumun kendi satırı var: **"Su sızıntısı var."** LG bu satırda üç sebep sayıyor: **evin gider boruları tıkanmış**, **tahliye hortumu yanlış kurulmuş ya da tıkanmış**, veya **tahliye pompası filtre başlığı doğru oturmuyor.** LG Türkiye'nin destek sayfası kapağın altından gelen su için bir sebep daha ekliyor. Bu yazıda LG'nin sırasını ve güvenlik kuralını adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce fişi çek, musluğu kapat. Sonra: kapak contası arasında saç ya da cisim var mı → tahliye hortumu doğru kurulu, düz ve açık mı → evin gideri tıkalı mı → ön yüzdeki filtre başlığı tam oturuyor mu → giriş hortumunun lastik contaları yerinde mi. Ekranda AE varsa ya da kaçak sürüyorsa → yetkili LG servisi.

## Adım adım: evde denenecekler

**1. Fişi çek, musluğu kapat.** LG'nin güvenlik bölümü bu konuda açık: **cihazdan veya zeminden su sızıntısı olması hâlinde elektrik prizinin bağlantısını kes** ve LG müşteri bilgilendirme merkeziyle irtibat kur. Hortumda kırılma ya da kopma varsa LG, basıncı düşürmek ve sızıntıyı en aza indirmek için **su musluklarını kapatmanı** istiyor. Aşağıdaki kontrollerin hepsi fiş çekiliyken yapılır.

**2. Kapak contasına bak.** Su kapağın altından geliyorsa LG Türkiye'nin destek sayfasına göre **kapak ile conta arasına saç gibi yabancı cisimler** girmiş olabilir. Kapı ile conta arasını kontrol et, **contayı yumuşak bir bezle silerek** temizle ve **kapı camının kenarını** da yumuşak bir bezle sil.

**3. Tahliye hortumunu kontrol et.** LG'nin ikinci sebebi: **tahliye hortumunun yanlış kurulumu ya da tıkanmış tahliye hortumu.** Çözüm: **hortumu temizle ve düzelt.** LG'nin kurulum bölümüne göre tahliye hortumu **yerden en fazla 100 cm** yukarıya kurulur, **kıvrılmamış ve sıkışmamış** olmalıdır; hortumun ucu lavabodaysa **bir iple sabitlenir.** LG'nin notu: tahliye hortumunu doğru bağlamak zemini su kaçağından korur.

**4. Evin giderine bak.** LG'nin ilk sebebi: **evin gider boruları tıkanmış.** LG'nin güvenlik bölümüne göre su uygun şekilde tahliye edilmezse **zeminde su taşabilir.** Önerisi: **atık su borularını aç, gerekirse bir su tesisatçısına başvur.**

**5. Filtre başlığına bak.** Üçüncü sebep: **tahliye pompası filtre başlığı doğru oturmuyor.** Önce içerideki suyun soğumasını bekle; LG su sıcak olabileceği için dikkatli olunmasını istiyor. Makinenin ön yüzündeki **kapak başlığını** aç ve filtre başlığının yerine **tam oturup oturmadığına** bak.

**6. Filtreyi yeniden tak.** LG'nin çözümü: **tahliye pompası filtresini yeniden tak.** Filtreyi çıkarmadan önce küçük tahliye borusunun tapasını açıp suyu sığ bir kaba boşalt; filtreyi çıkar, filtreyi ve yuvasını fırçayla temizle. Sonra LG'nin tarifiyle **filtreyi dikkatle geri tak** ve tahliye başlığını **saat yönünde dikkatle vidala**; LG bunun **diş sardırmayı ve sızdırmayı** önlemek için olduğunu yazıyor. Tapayı tahliye borusuna tak, boruyu yerine yerleştir ve kapak başlığını kapat. Filtrenin ayrıntılı anlatımı [LG çamaşır makinesi OE hatası](/blog/lg-camasir-makinesi-oe-hatasi/) yazısında.

**7. Giriş hortumunun bağlantılarına bak.** LG'ye göre su giriş hortumuyla birlikte **iki lastik conta** gelir ve bunlar **su sızıntılarını önlemek** için kullanılır. Contaların yerinde olduğuna bak. Hortumu musluğa takarken LG'nin kuralı: bağlantıyı **yalnızca yumuşak bir bez yardımıyla elle** sık; **pense gibi mekanik aletler kullanma** ve hortumu aşırı sıkma.

**8. Musluğu aç, bağlantıları izle.** Musluğu aç ve bağlantılara bak. LG'nin kurulum notu: bağladıktan sonra **hortumdan su sızıyorsa aynı adımları tekrarla.** Sızıntı hâlâ sürüyorsa ya da ekranda **AE** görünüyorsa makineyi kullanma: fişi çekili tut ve yetkili LG servisine başvur.

## Her ıslaklık kaçak değildir

LG'nin iki notu, "su kaçırıyor" sanılan bazı durumları açıklıyor:

| Gördüğün | LG'nin açıklaması |
|---|---|
| Yıkamadan sonra kapakta su damlaları | Sıkmadan sonra kalan kalıntı su; normal |
| Sıcak havada makinenin altında nem | Hava sıcak, su soğukken yoğunlaşma oluşabilir ve zemin ıslanır |

Ekranda **AE** yazıyorsa durum farklı: LG'nin hata tablosunda AE **su sızıntısı** demek ve çözüm olarak yalnızca **servisi aramak** veriliyor. LG'nin diğer kodları için [LG çamaşır makinesi hata kodları](/blog/lg-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Sınır nerede biter

Contanın temizliği, tahliye hortumu, filtre başlığı ve giriş hortumunun bağlantısı kullanıcıya aittir; makinenin içi değildir. LG'nin uyarısı açık: **cihazın üzerindeki panelleri veya cihazın kendisini sökmeye çalışma.** Kapak contası yırtılmışsa LG Türkiye'nin destek sayfası LG servisinden kayıt açılmasını öneriyor. LG ayrıca dolum hortumlarının **5 yıl sonra değiştirilmesini** ve cihazla gelen **yeni hortum setinin** kullanılmasını yazıyor; eski hortumların tekrar kullanılması su sızıntısına yol açabilir.

⛔ **Kendin-çöz sınırı burada biter.** Conta temiz, hortumlar düz ve contaları yerinde, filtre başlığı oturuyor, gider akıyor ve su hâlâ geliyorsa: fişi çekili tut, musluğu kapalı tut ve yetkili LG servisine başvur. Markadan bağımsız anlatım için [çamaşır makinesi su kaçırıyor](/blog/camasir-makinesi-su-kaciriyor/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Su nereden geliyor: kapağın altından, filtre kapağının önünden, arkadan mı?
2. Kaçak programın hangi anında başlıyor (su alırken, yıkarken, boşaltırken)?
3. Ekranda AE ya da başka bir kod var mı?
4. Tahliye hortumu ve evin gideri kontrol edildi mi?
5. Giriş hortumu kaç yıllık?

Bu beşine cevabın varsa servise "su kaçırıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
